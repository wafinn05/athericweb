import { useState, useMemo } from 'react'
import { FilterIcon, DownloadIcon } from '@/components/common/icons'
import { useRankingRows } from '@/hooks/useMarkets'
import type { RankingRow } from '@/types'

type RecFilter = 'ALL' | 'BUY' | 'HOLD' | 'SELL'

function exportCSV(rows: RankingRow[]) {
  const headers = ['Rank', 'Ticker', 'Company', 'Exp. Return', 'Confidence', 'Rec', 'Market Cap']
  const lines = [headers.join(','), ...rows.map(r => [r.rank, r.ticker, `"${r.company}"`, r.ret, r.conf, r.rec, r.cap].join(','))]
  const blob = new Blob([lines.join('\n')], { type: 'text/csv' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a'); a.href = url; a.download = 'atheric-ranking.csv'; a.click()
  URL.revokeObjectURL(url)
}

export function RankingTable({ searchQuery }: { searchQuery?: string }) {
  const { data: rows = [] } = useRankingRows()
  const [recFilter, setRecFilter] = useState<RecFilter>('ALL')
  const [showFilter, setShowFilter] = useState(false)

  const filtered = useMemo(() => {
    let r = rows
    if (recFilter !== 'ALL') r = r.filter(row => row.rec === recFilter)
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      r = r.filter(row => row.ticker.toLowerCase().includes(q) || row.company.toLowerCase().includes(q))
    }
    return r
  }, [rows, recFilter, searchQuery])

  const COLUMNS = ['Rank', 'Ticker', 'Company', 'Exp. Return', 'Confidence', 'Rec', 'Market Cap']

  return (
    <section className="card table-card">
      <div className="table-head">
        <span className="card-title">Full Ranking Model</span>
        <div className="table-actions">
          <button className="ghost-btn" onClick={() => setShowFilter(f => !f)}>
            <FilterIcon/>Filter
          </button>
          <button className="ghost-btn" onClick={() => exportCSV(filtered)}>
            <DownloadIcon/>Export
          </button>
        </div>
      </div>
      {showFilter && (
        <div className="filter-bar">
          {(['ALL', 'BUY', 'HOLD', 'SELL'] as RecFilter[]).map(f => (
            <button key={f} className={`filter-chip chip-${f.toLowerCase()}${recFilter === f ? ' active' : ''}`} onClick={() => setRecFilter(f)}>{f}</button>
          ))}
        </div>
      )}
      <table className="rank-table">
        <thead>
          <tr>{COLUMNS.map((c, i) => <th key={c} className={['Exp. Return', 'Market Cap'].includes(c) ? 'num' : ''}>{c}{i === 0 ? ' ↓' : ''}</th>)}</tr>
        </thead>
        <tbody>
          {filtered.map(row => (
            <tr key={row.rank}>
              <td className="td-rank">{row.rank}</td>
              <td className="td-ticker">{row.ticker}</td>
              <td className="td-company">{row.company}</td>
              <td className={`num ret ${row.dir}`}>{row.ret}</td>
              <td>
                <div className="conf-cell">
                  <span className="conf-text">{row.conf}</span>
                  <span className="conf-bar"><span style={{ width: `${row.confPct}%` }}/></span>
                </div>
              </td>
              <td><span className={`pill ${row.rec.toLowerCase()}`}>{row.rec}</span></td>
              <td className="num td-cap">{row.cap}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
