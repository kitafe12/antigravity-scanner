'use client'

import { useState } from 'react'
import { TrendingUp, DollarSign } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ProfitCalculatorProps {
    roi: number // 90d ROI as a raw number (e.g. 120 for 120%)
    className?: string
}

export function ProfitCalculator({ roi, className }: ProfitCalculatorProps) {
    const [investment, setInvestment] = useState(1000)

    // Formula: Investment * (1 + ROI/100)
    const profit = investment * (roi / 100)
    const total = investment + profit
    const isProfitable = roi >= 0

    return (
        <div className={cn("bg-slate-900 border border-slate-800 rounded-2xl p-6", className)}>
            <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500">
                    <DollarSign size={20} />
                </div>
                <h3 className="text-lg font-bold text-white">Profit Simulator</h3>
            </div>

            <div className="space-y-6">
                {/* Input Slider */}
                <div>
                    <div className="flex justify-between text-sm text-slate-400 mb-2">
                        <span>Initial Investment</span>
                        <span className="text-white font-mono font-bold">${investment.toLocaleString()}</span>
                    </div>
                    <input
                        type="range"
                        min="100"
                        max="10000"
                        step="100"
                        value={investment}
                        onChange={(e) => setInvestment(Number(e.target.value))}
                        className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 hover:accent-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                    />
                    <div className="flex justify-between text-[10px] text-slate-600 mt-1 font-mono">
                        <span>$100</span>
                        <span>$10,000</span>
                    </div>
                </div>

                {/* Result Block */}
                <div className="bg-slate-950/50 rounded-xl p-4 border border-slate-800/50">
                    <p className="text-sm text-slate-400 mb-1">If you invested 90 days ago...</p>
                    <div className="flex items-end justify-between">
                        <div>
                            <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Current Value</p>
                            <p className={cn("text-3xl font-extrabold tracking-tight", isProfitable ? "text-emerald-400" : "text-rose-400")}>
                                ${total.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                            </p>
                        </div>
                        <div className="text-right">
                            <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Profit</p>
                            <p className={cn("text-lg font-bold", isProfitable ? "text-emerald-500" : "text-rose-500")}>
                                {isProfitable ? '+' : ''}${profit.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                            </p>
                        </div>
                    </div>

                    {/* Visual Bar */}
                    <div className="mt-4 h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div
                            className={cn("h-full rounded-full transition-all duration-300", isProfitable ? "bg-emerald-500" : "bg-rose-500")}
                            style={{ width: '100%' }} // Simplified for visual, ideally proportional
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
