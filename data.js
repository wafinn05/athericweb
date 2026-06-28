/* Atheric AI — application data layer.
   All view content is sourced from here; markup carries no embedded data. */

const AthericData = {
  brand: {
    name: "Atheric AI",
    subtitle: "Institutional Terminal",
    initial: "A",
  },

  nav: [
    { id: "dashboard", label: "Dashboard", icon: "grid", href: "index.html" },
    { id: "markets", label: "Markets", icon: "bars", href: "markets.html" },
    { id: "portfolio", label: "Portfolio", icon: "card", href: "#" },
    { id: "watchlists", label: "Watchlists", icon: "eye", href: "#" },
    { id: "ailab", label: "AI Lab", icon: "aperture", href: "#" },
    { id: "reports", label: "Reports", icon: "report", href: "#" },
  ],

  navFooter: [
    { id: "settings", label: "Settings", icon: "gear", href: "#" },
    { id: "support", label: "Support", icon: "help", href: "#" },
  ],

  indices: [
    { label: "S&P 500", value: "5,123.41", dir: "up" },
    { label: "NASDAQ", value: "16,274.94", dir: "up" },
    { label: "DOW", value: "38,722.69", dir: "down" },
    { label: "BTC", value: "68,412.00", dir: "up" },
  ],

  indicesPlain: ["S&P 500", "NASDAQ", "DOW", "BTC"],

  user: { name: "Atheric Analyst", avatar: "assets/avatar.svg" },

  stock: {
    ticker: "NVDA",
    initial: "N",
    name: "NVIDIA Corp",
    price: "$842.12",
    change: "+2.4%",
    dir: "up",
    ohlc: [
      { label: "Prev", value: "822.40" },
      { label: "Vol", value: "45.2M" },
    ],
    ratios: [
      { label: "Mkt Cap", value: "2.1T" },
      { label: "P/E", value: "68.4" },
      { label: "EPS", value: "12.31" },
      { label: "Div Yield", value: "0.03%" },
    ],
  },

  forecast: {
    title: "Generative AI Forecast Model",
    ranges: ["1D", "1W", "1M", "3M", "1Y"],
    activeRange: "3M",
    yTicks: [1000, 940, 880, 820, 760],
    yMin: 760,
    yMax: 1000,
    xLabels: ["Jan", "Feb", "Mar", "Today", "Apr", "M"],
    splitIndex: 6, // data index where forecast begins
    actual: [805, 800, 818, 855, 838, 832, 858, 870, 882, 885],
    forecast: [885, 893, 900, 906, 911, 915],
    ciUpper: [885, 905, 922, 936, 948, 958],
    ciLower: [885, 868, 852, 840, 832, 826],
  },

  target: {
    title: "AI Target Price (30D)",
    price: "$950.00",
    rec: "BUY",
    upside: "+12.8% Potential Upside",
    sliderPct: 86,
  },

  confidence: { title: "Confidence Score", value: 94 },

  sentiment: {
    title: "Sentiment",
    items: [
      { label: "Local", value: 82, tone: "green" },
      { label: "Global", value: 75, tone: "cyan" },
    ],
  },

  synthesis: {
    title: "AI Synthesis",
    items: [
      {
        heading: "Technical Breakout",
        tone: "blue",
        body: "Cleared $820 resistance on heavy volume. MACD and moving-average structure support continuation toward $900.",
      },
      {
        heading: "Fundamental Catalyst",
        tone: "green",
        body: "Q3 data-center revenue tracking ~15% above consensus on the Blackwell ramp and sustained hyperscaler capex.",
      },
      {
        heading: "Risk Factor",
        tone: "amber",
        body: "Rate commentary next week may drive volatility; a 68x forward P/E leaves little room for demand misses.",
      },
    ],
  },

  news: {
    title: "News Feed",
    items: [
      { headline: "NVIDIA Announces Next-Gen Blackwell Architecture", source: "Reuters", time: "10:42 AM", tag: "High", tone: "green" },
      { headline: "Semiconductor Sector Sees Broad Pre-Market Rally", source: "Bloomberg", time: "09:15 AM", tag: "High", tone: "green" },
      { headline: "Analyst Upgrade: NVDA PT Raised to $950", source: "CNBC", time: "08:30 AM", tag: "Medium", tone: "amber" },
    ],
  },

  ranking: {
    title: "Top 100 AI Stock Ranking",
    subtitle: "Real-time institutional forecasting powered by Atheric Quant Model.",
    highlights: [
      { ticker: "NVDA", rank: 1, name: "NVIDIA Corp.", score: "98.5", ret: "+14.2%", dir: "up" },
      { ticker: "MSFT", rank: 2, name: "Microsoft Corp.", score: "96.2", ret: "+8.7%", dir: "up" },
      { ticker: "AMD", rank: 3, name: "Advanced Micro Devices", score: "94.8", ret: "+11.4%", dir: "up" },
    ],
    columns: ["Rank", "Ticker", "Company", "AI Score", "Exp. Return", "Confidence", "Rec", "Market Cap"],
    rows: [
      { rank: 1, ticker: "NVDA", company: "NVIDIA Corp.", score: "98.5", ret: "+14.2%", dir: "up", conf: "High", confPct: 92, rec: "BUY", cap: "$2.2T" },
      { rank: 2, ticker: "MSFT", company: "Microsoft Corp.", score: "96.2", ret: "+8.7%", dir: "up", conf: "High", confPct: 88, rec: "BUY", cap: "$3.1T" },
      { rank: 3, ticker: "AMD", company: "Advanced Micro Devices", score: "94.8", ret: "+11.4%", dir: "up", conf: "Med", confPct: 62, rec: "BUY", cap: "$280B" },
      { rank: 4, ticker: "PLTR", company: "Palantir Tech", score: "92.1", ret: "+15.8%", dir: "up", conf: "Med", confPct: 58, rec: "HOLD", cap: "$55B" },
      { rank: 5, ticker: "TSLA", company: "Tesla Inc.", score: "88.4", ret: "-2.1%", dir: "down", conf: "Low", confPct: 34, rec: "SELL", cap: "$550B" },
    ],
  },
};
