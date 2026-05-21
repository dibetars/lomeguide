'use client'

import { useState } from 'react'

const currencies = [
  { code: 'USD', label: 'US Dollar', symbol: '$', rate: 610 },
  { code: 'GHS', label: 'Ghanaian Cedi', symbol: '₵', rate: 47 },
  { code: 'EUR', label: 'Euro', symbol: '€', rate: 656 },
  { code: 'GBP', label: 'British Pound', symbol: '£', rate: 775 },
]

export default function CurrencyConverter() {
  const [amount, setAmount] = useState('100')
  const [fromCode, setFromCode] = useState('GHS')

  const from = currencies.find(c => c.code === fromCode)!
  const xof = parseFloat(amount || '0') * from.rate

  return (
    <div className="bg-white rounded-xl p-6 border border-stone-100">
      <p className="font-body text-[10px] uppercase tracking-widest text-stone-400 mb-4">
        Currency Converter — to CFA Franc (XOF)
      </p>

      <div className="flex gap-3 mb-6">
        {/* Amount input */}
        <div className="flex-1">
          <label className="font-body text-[10px] uppercase tracking-widest text-stone-400 block mb-1.5">
            Amount
          </label>
          <input
            type="number"
            min="0"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            className="w-full border border-stone-200 rounded-lg px-4 py-3 font-display text-lg font-semibold text-stone-800 focus:outline-none focus:border-[#006A4E] focus:ring-1 focus:ring-[#006A4E] transition-colors"
            placeholder="0"
          />
        </div>

        {/* Currency selector */}
        <div className="w-44">
          <label className="font-body text-[10px] uppercase tracking-widest text-stone-400 block mb-1.5">
            Currency
          </label>
          <select
            value={fromCode}
            onChange={e => setFromCode(e.target.value)}
            className="w-full border border-stone-200 rounded-lg px-4 py-3 font-body text-sm text-stone-800 focus:outline-none focus:border-[#006A4E] focus:ring-1 focus:ring-[#006A4E] transition-colors bg-white appearance-none cursor-pointer"
          >
            {currencies.map(c => (
              <option key={c.code} value={c.code}>
                {c.symbol} {c.code} — {c.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Result */}
      <div className="bg-[#006A4E] rounded-xl px-6 py-5 flex items-center justify-between">
        <div>
          <p className="font-body text-[10px] uppercase tracking-widest text-white/50 mb-1">
            You get approximately
          </p>
          <p className="font-display font-bold text-white" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
            {isNaN(xof) ? '—' : xof.toLocaleString('fr-FR', { maximumFractionDigits: 0 })}
            <span className="text-white/60 text-sm font-normal ml-2">XOF</span>
          </p>
        </div>
        <div className="text-right">
          <p className="font-body text-[10px] text-white/40 uppercase tracking-widest">Rate</p>
          <p className="font-body text-sm text-white/60">
            1 {fromCode} ≈ {from.rate} XOF
          </p>
        </div>
      </div>

      <p className="font-body text-[10px] text-stone-300 mt-3">
        Indicative rates only. Check Xe or Wise on the day for live rates.
      </p>
    </div>
  )
}
