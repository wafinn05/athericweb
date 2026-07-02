import { Link, useLocation } from 'react-router-dom'
import { GridIcon, BarsIcon, EyeIcon, GearIcon, HelpIcon } from '@/components/common/icons'
import { NAV_ITEMS, NAV_FOOTER } from '@/data/dummy'

const ICON_MAP: Record<string, React.ReactNode> = {
  grid: <GridIcon />, bars: <BarsIcon />, eye: <EyeIcon />,
  gear: <GearIcon />, help: <HelpIcon />,
}

export function Sidebar() {
  const { pathname } = useLocation()
  return (
    <aside className="sidebar">
      <div className="brand brand--plain">
        <div className="brand-text"><div className="brand-name">Atheric AI</div></div>
      </div>
      <nav className="nav">
        {NAV_ITEMS.map(item => {
          const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
          return (
            <Link key={item.id} to={item.href} className={`nav-item${active ? ' active' : ''}`}>
              {ICON_MAP[item.icon]}<span>{item.label}</span>
            </Link>
          )
        })}
      </nav>
      <div className="sidebar-spacer"/>
      <div className="nav-sep"/>
      <nav className="nav-footer">
        {NAV_FOOTER.map(item => (
          <a key={item.id} href={item.href} className="nav-item">
            {ICON_MAP[item.icon]}<span>{item.label}</span>
          </a>
        ))}
      </nav>
    </aside>
  )
}
