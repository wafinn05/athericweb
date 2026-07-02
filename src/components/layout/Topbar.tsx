import { useState } from 'react'
import { SearchIcon, BellIcon } from '@/components/common/icons'
import { useIndices } from '@/hooks/useMarkets'

interface Props { onSearch?: (q: string) => void }

export function Topbar({ onSearch }: Props) {
  const { data: indices = [] } = useIndices()
  const [notifOpen, setNotifOpen] = useState(false)
  const [query, setQuery] = useState('')

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value)
    onSearch?.(e.target.value)
  }

  return (
    <header className="topbar">
      <div className="search">
        <SearchIcon />
        <input placeholder="Search…" value={query} onChange={handleSearch} />
      </div>
      <div className="indices">
        {indices.map(idx => (
          <span key={idx.label} className={`index ${idx.dir}`}>
            <span className="index-label">{idx.label}</span>
            <span className="index-value live-tick">{idx.value}</span>
          </span>
        ))}
      </div>
      <div className="topbar-actions">
        <div className="notif-wrap">
          <button className="icon-btn" onClick={() => setNotifOpen(o => !o)} aria-label="Notifications">
            <BellIcon />
          </button>
          {notifOpen && (
            <div className="notif-dropdown">
              <div className="notif-title">Notifications</div>
              <div className="notif-empty">No new notifications</div>
            </div>
          )}
        </div>
        <div className="avatar">
          <img src="/assets/avatar.svg" alt="User avatar" />
        </div>
      </div>
    </header>
  )
}
