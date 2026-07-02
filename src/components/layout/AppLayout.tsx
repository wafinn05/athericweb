import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { Topbar } from './Topbar'

interface Props { onSearch?: (q: string) => void }

export function AppLayout({ onSearch }: Props) {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Topbar onSearch={onSearch} />
        <Outlet />
      </div>
    </div>
  )
}
