import type { Stock, ForecastData, TargetData, SentimentItem, SynthesisData, NewsItem, KeyLevel, RankingHighlight, RankingRow, IndexData, NavItem, Glossary } from '@/types'

export const NAV_ITEMS: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: 'grid', href: '/' },
  { id: 'markets', label: 'Markets', icon: 'bars', href: '/markets' },
  { id: 'watchlists', label: 'Watchlists', icon: 'eye', href: '#' },
]

export const NAV_FOOTER: NavItem[] = [
  { id: 'settings', label: 'Settings', icon: 'gear', href: '#' },
  { id: 'support', label: 'Support', icon: 'help', href: '#' },
]

export const INDICES: IndexData[] = [
  { label: 'IHSG', value: '7.342,15', dir: 'up' },
  { label: 'USD/IDR', value: '15.750', dir: 'down' },
  { label: 'GOLD/IDR', value: '976.500', dir: 'up' },
  { label: 'SILVER/IDR', value: '12.650', dir: 'up' },
]

export const STOCK: Stock = {
  ticker: 'BBCA',
  initial: 'B',
  name: 'Bank Central Asia Tbk',
  price: 'Rp 9.500',
  change: '+1,8%',
  dir: 'up',
  ohlc: [
    { label: 'Prev', value: '9.325' },
    { label: 'Vol', value: '12,4M' },
  ],
  ratios: [
    { label: 'Mkt Cap', value: '1.170 T' },
    { label: 'P/E', value: '24,5' },
    { label: 'EPS', value: '388' },
    { label: 'Div Yield', value: '1,2%' },
  ],
}

export const GLOSSARY: Glossary = {
  'P/E': 'Seberapa mahal saham dibandingkan laba tahunannya — semakin tinggi berarti semakin mahal.',
  'EPS': 'Laba bersih perusahaan per lembar saham selama setahun terakhir.',
  'Div Yield': 'Dividen tahunan yang dibayarkan sebagai persentase dari harga saham.',
  '90% CI': 'Model memperkirakan harga akan berada di dalam rentang ini sekitar 9 dari 10 kali.',
}

export const KEY_LEVELS: KeyLevel[] = [
  { label: 'Resistance', value: 'Rp 10.000', tone: 'up' },
  { label: 'Current', value: 'Rp 9.500', tone: 'flat' },
  { label: 'Support', value: 'Rp 9.000', tone: 'down' },
]

export const FORECAST: ForecastData = {
  title: 'Generative AI Forecast',
  caption: '',
  ranges: ['3M', '1Y'],
  activeRange: '3M',
  yMin: 8500,
  yMax: 11000,
  yTicks: [11000, 10500, 10000, 9500, 9000],
  xLabels: ['Jan', 'Feb', 'Mar', 'Today', 'Apr', 'Mei'],
  actual: [8650, 8580, 8720, 8850, 8780, 8720, 8900, 9150, 9350, 9500],
  forecast: [9500, 9680, 9850, 10100, 10320, 10500],
  ciUpper: [9500, 9850, 10200, 10580, 10820, 11000],
  ciLower: [9500, 9480, 9420, 9550, 9680, 9800],
  volume: [
    { v: 38, dir: 'up' }, { v: 42, dir: 'down' }, { v: 61, dir: 'up' },
    { v: 78, dir: 'up' }, { v: 55, dir: 'down' }, { v: 48, dir: 'down' },
    { v: 69, dir: 'up' }, { v: 83, dir: 'up' }, { v: 95, dir: 'up' },
    { v: 72, dir: 'up' },
  ],
}

export const TARGET: TargetData = {
  title: 'Target Harga AI (30H)',
  price: 'Rp 10.500',
  rec: 'BUY',
  upside: '+10,5% Potensi Kenaikan',
  sliderPct: 82,
  stats: [
    { label: 'Stop-Loss', value: 'Rp 8.750' },
    { label: 'Risk / Reward', value: '1 : 2,1' },
    { label: 'Confidence', value: '86%' },
  ],
  disclaimer: 'Untuk riset saja — bukan saran investasi.',
}

export const SENTIMENT: SentimentItem[] = [
  { label: 'Lokal', value: 78, tone: 'green', verdict: 'Bullish', source: 'Tren IHSG, aliran dana asing' },
  { label: 'Global', value: 71, tone: 'cyan', verdict: 'Bullish', source: 'Ekspektasi Fed, DXY' },
]

export const SYNTHESIS: SynthesisData = {
  title: 'AI Synthesis',
  paragraphs: [
    'BBCA saat ini berada dalam fase akumulasi dengan momentum teknikal yang kuat. Saham berhasil menembus resistensi kunci di Rp 9.250 didukung volume di atas rata-rata, mengkonfirmasi minat beli institusional. MACD menunjukkan sinyal bullish crossover, sementara RSI berada di zona netral-bullish dengan ruang yang cukup sebelum mencapai overbought. Target teknikal berikutnya terletak di Rp 10.000, dengan potensi ekstensi menuju Rp 10.500 apabila momentum terjaga.',
    'Secara fundamental, BBCA mencatat pertumbuhan laba bersih 12% YoY dengan NIM terjaga di 5,9% dan NPL gross terkendali di 1,7% — angka yang melampaui rata-rata industri perbankan nasional. Risiko utama datang dari kebijakan suku bunga Bank Indonesia di kuartal mendatang yang berpotensi menekan margin intermediasi. Valuasi P/E 24,5x masih dapat dipertahankan selama pertumbuhan kredit tetap di atas 12% YoY dan kualitas aset tidak memburuk signifikan.',
  ],
}

export const NEWS: NewsItem[] = [
  { headline: 'BBCA Cetak Laba Bersih Rp 48,6 T di Kuartal III 2024', source: 'Bisnis.com', time: '10:42', tag: 'High', tone: 'green' },
  { headline: 'OJK Longgarkan Aturan Modal Minimum Perbankan Nasional', source: 'Kontan', time: '09:15', tag: 'High', tone: 'green' },
  { headline: 'Analis Naikkan Target Harga BBCA ke Rp 10.500', source: 'CNBC Indonesia', time: '08:30', tag: 'Medium', tone: 'amber' },
]

export const RANKING_HIGHLIGHTS: RankingHighlight[] = [
  { ticker: 'BBCA', rank: 1, name: 'Bank Central Asia Tbk', score: '98,5', ret: '+10,5%', dir: 'up' },
  { ticker: 'BBRI', rank: 2, name: 'Bank Rakyat Indonesia', score: '96,2', ret: '+8,3%', dir: 'up' },
  { ticker: 'TLKM', rank: 3, name: 'Telkom Indonesia', score: '94,8', ret: '+6,7%', dir: 'up' },
]

export const RANKING_ROWS: RankingRow[] = [
  { rank: 1, ticker: 'BBCA', company: 'Bank Central Asia Tbk', score: '98,5', ret: '+10,5%', dir: 'up', conf: 'High', confPct: 92, rec: 'BUY', cap: 'Rp 1.170T' },
  { rank: 2, ticker: 'BBRI', company: 'Bank Rakyat Indonesia', score: '96,2', ret: '+8,3%', dir: 'up', conf: 'High', confPct: 88, rec: 'BUY', cap: 'Rp 685T' },
  { rank: 3, ticker: 'TLKM', company: 'Telkom Indonesia', score: '94,8', ret: '+6,7%', dir: 'up', conf: 'Med', confPct: 72, rec: 'BUY', cap: 'Rp 213T' },
  { rank: 4, ticker: 'ASII', company: 'Astra International', score: '92,1', ret: '+5,4%', dir: 'up', conf: 'Med', confPct: 61, rec: 'HOLD', cap: 'Rp 218T' },
  { rank: 5, ticker: 'GOTO', company: 'GoTo Gojek Tokopedia', score: '88,4', ret: '-3,2%', dir: 'down', conf: 'Low', confPct: 38, rec: 'SELL', cap: 'Rp 47T' },
]
