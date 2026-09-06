'use client'

import { useTripPlanner } from './trip-planner/TripPlannerRoot'

export default function PlanTripButton({ className = '' }: { className?: string }) {
  const { openPlanner } = useTripPlanner()
  return (
    <button
      type="button"
      onClick={openPlanner}
      className={`inline-flex items-center gap-2 min-h-11 bg-white text-[#1A1508] pl-6 pr-1.5 py-1.5 rounded-full font-body text-sm font-medium hover:bg-[#EDE3CF] transition-colors ${className}`}
    >
      Build Your Trip
      <span className="w-8 h-8 bg-[#D4483C] rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0">
        ↗
      </span>
    </button>
  )
}
