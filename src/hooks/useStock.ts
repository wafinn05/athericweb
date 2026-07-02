import { useQuery } from '@tanstack/react-query'
import { fetchStock, fetchForecast, fetchTarget, fetchKeyLevels, fetchSentiment, fetchSynthesis, fetchNews } from '@/services/api'

const TICKER = 'BBCA'

export function useStock() {
  return useQuery({ queryKey: ['stock', TICKER], queryFn: () => fetchStock(TICKER), staleTime: 30_000 })
}

export function useForecast(range: string) {
  return useQuery({ queryKey: ['forecast', TICKER, range], queryFn: () => fetchForecast(TICKER, range), staleTime: 60_000 })
}

export function useTarget() {
  return useQuery({ queryKey: ['target', TICKER], queryFn: () => fetchTarget(TICKER), staleTime: 60_000 })
}

export function useKeyLevels() {
  return useQuery({ queryKey: ['keylevels', TICKER], queryFn: () => fetchKeyLevels(TICKER), staleTime: 60_000 })
}

export function useSentiment() {
  return useQuery({ queryKey: ['sentiment', TICKER], queryFn: () => fetchSentiment(TICKER), staleTime: 30_000 })
}

export function useSynthesis() {
  return useQuery({ queryKey: ['synthesis', TICKER], queryFn: () => fetchSynthesis(TICKER), staleTime: 60_000 })
}

export function useNews() {
  return useQuery({ queryKey: ['news', TICKER], queryFn: () => fetchNews(TICKER), staleTime: 15_000 })
}
