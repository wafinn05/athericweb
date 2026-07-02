import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AppLayout } from '@/components/layout/AppLayout'
import { Dashboard } from '@/pages/Dashboard'
import { Markets } from '@/pages/Markets'

export function App() {
  const [searchQuery, setSearchQuery] = useState('')
  return (
    <Routes>
      <Route element={<AppLayout onSearch={setSearchQuery}/>}>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/markets" element={<Markets searchQuery={searchQuery}/>}/>
      </Route>
    </Routes>
  )
}
