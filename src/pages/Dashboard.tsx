import { StockHeader } from '@/components/dashboard/StockHeader'
import { ForecastCard } from '@/components/dashboard/ForecastCard'
import { TargetCard } from '@/components/dashboard/TargetCard'
import { SentimentCard } from '@/components/dashboard/SentimentCard'
import { SynthesisCard } from '@/components/dashboard/SynthesisCard'
import { NewsFeed } from '@/components/dashboard/NewsFeed'

export function Dashboard() {
  return (
    <div className="content">
      <StockHeader/>
      <div className="dash-grid">
        <div className="dash-col"><ForecastCard/></div>
        <div className="dash-col"><TargetCard/><SentimentCard/></div>
        <div className="dash-bottom"><SynthesisCard/><NewsFeed/></div>
      </div>
    </div>
  )
}
