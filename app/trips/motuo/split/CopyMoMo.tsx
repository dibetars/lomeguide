'use client'

import { useState } from 'react'

export default function CopyMoMo({
  number,
  display,
  tone = 'light',
}: {
  number: string | null
  display: string
  tone?: 'light' | 'dark'
}) {
  const [copied, setCopied] = useState(false)
  const main =
    tone === 'dark'
      ? 'text-[#1A1508] hover:opacity-70'
      : 'text-[#FFCB00] hover:text-white'
  const hint = tone === 'dark' ? 'text-[#1A1508]/45' : 'text-white/40'

  if (!number) {
    return (
      <p className={`font-body text-sm mt-1 ${tone === 'dark' ? 'text-[#1A1508]/55' : 'text-white/50'}`}>
        {display}
      </p>
    )
  }

  async function copy() {
    if (!number) return
    try {
      await navigator.clipboard.writeText(number)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      // ignore
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={`mt-1 inline-flex items-center gap-2 font-body text-sm transition-colors ${main}`}
    >
      <span className="tracking-wide">{display}</span>
      <span className={`text-[10px] uppercase tracking-widest ${hint}`}>
        {copied ? 'Copied' : 'Copy'}
      </span>
    </button>
  )
}
