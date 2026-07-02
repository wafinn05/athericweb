import { InfoTip } from '@/components/common/InfoTip'
import { useStock } from '@/hooks/useStock'
import { GLOSSARY } from '@/data/dummy'

export function StockHeader() {
  const { data: stock } = useStock()
  if (!stock) return <div className="stock-head"><div className="skeleton" style={{height: 60, width: '100%'}}/></div>

  return (
    <div className="stock-head">
      <div className="stock-mark">{stock.initial}</div>
      <div className="stock-id">
        <div className="stock-row">
          <span className="stock-ticker">{stock.ticker}</span>
          <span className="stock-name">{stock.name}</span>
        </div>
      </div>
      <div className="stock-stats">
        {stock.ohlc.map(st => (
          <div key={st.label} className="stat">
            <div className="stat-label">{st.label}</div>
            <div className="stat-value">{st.value}</div>
          </div>
        ))}
        <div className="stat-divider"/>
        {stock.ratios.map(st => (
          <div key={st.label} className="stat">
            <div className="stat-label">
              {st.label}
              <InfoTip label={st.label} text={GLOSSARY[st.label] ?? ''}/>
            </div>
            <div className="stat-value">{st.value}</div>
          </div>
        ))}
      </div>
      <div className="stock-price-block">
        <span className="stock-price">{stock.price}</span>
        <span className={`stock-change ${stock.dir}`}>{stock.dir === 'up' ? '▲' : '▼'} {stock.change}</span>
      </div>
    </div>
  )
}
