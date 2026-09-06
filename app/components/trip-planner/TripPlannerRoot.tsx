'use client'

import { createContext, useCallback, useContext, useState, type ReactNode } from 'react'
import TripPlannerModal from './TripPlannerModal'

const Ctx = createContext<{ openPlanner: () => void } | null>(null)

export function useTripPlanner() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useTripPlanner must be used inside TripPlannerRoot')
  return ctx
}

export function TripPlannerRoot({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const openPlanner = useCallback(() => setOpen(true), [])

  return (
    <Ctx.Provider value={{ openPlanner }}>
      {children}
      <TripPlannerModal open={open} onClose={() => setOpen(false)} />
    </Ctx.Provider>
  )
}
