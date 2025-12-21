'use client'

import { useState } from 'react'
import { TrendingUp, DollarSign } from 'lucide-react'

export function ProfitSimulator() {
    const [investment, setInvestment] = useState(1000)
    const [apy, setApy] = useState(50)
    const [duration, setDuration] = useState(12) // months
    const [zakatEnabled, setZakatEnabled] = useState(false)

    // Compound interest calculation: Final = Principal * (1 + APY/12)^Months
    const monthlyRate = apy / 100 / 12
    const totalBalance = investment * Math.pow(1 + monthlyRate, duration)
    const profit = totalBalance - investment

    // Apply Zakat (2.5% of total balance if enabled)
    const zakatAmount = zakatEnabled ? totalBalance * 0.025 : 0
    const finalBalance = totalBalance - zakatAmount

    return (
        <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20 max-w-5xl">
            <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
                    Profit Simulator
                </h2>
                <p className="text-base sm:text-lg text-slate-400">
                    Calculate your potential earnings with ethical automation.
                </p>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                    {/* Left Side: Inputs */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <DollarSign className="text-emerald-400" size={24} />
                            Configure Your Investment
                        </h3>

                        {/* Initial Investment */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-400 mb-2">
                                Initial Investment ($)
                            </label>
                            <input
                                type="number"
                                value={investment}
                                onChange={(e) => setInvestment(Number(e.target.value))}
                                className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white font-semibold focus:border-emerald-500 focus:outline-none transition-colors"
                                min="10"
                                step="10"
                            />
                        </div>

                        {/* APY Slider */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-400 mb-2">
                                Estimated APY: <span className="text-emerald-400">{apy}%</span>
                            </label>
                            <input
                                type="range"
                                value={apy}
                                onChange={(e) => setApy(Number(e.target.value))}
                                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                                min="10"
                                max="150"
                                step="1"
                            />
                            <div className="flex justify-between text-xs text-slate-600 mt-1">
                                <span>10%</span>
                                <span>150%</span>
                            </div>
                        </div>

                        {/* Duration Selector */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-400 mb-3">
                                Duration
                            </label>
                            <div className="grid grid-cols-3 gap-2 sm:gap-3">
                                <button
                                    onClick={() => setDuration(1)}
                                    className={`py-3 sm:py-3.5 rounded-xl text-sm sm:text-base font-semibold transition-all ${duration === 1
                                            ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                                            : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                                        }`}
                                >
                                    1 Mo
                                </button>
                                <button
                                    onClick={() => setDuration(6)}
                                    className={`py-3 sm:py-3.5 rounded-xl text-sm sm:text-base font-semibold transition-all ${duration === 6
                                            ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                                            : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                                        }`}
                                >
                                    6 Mo
                                </button>
                                <button
                                    onClick={() => setDuration(12)}
                                    className={`py-3 sm:py-3.5 rounded-xl text-sm sm:text-base font-semibold transition-all ${duration === 12
                                            ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                                            : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                                        }`}
                                >
                                    1 Yr
                                </button>
                            </div>
                        </div>

                        {/* Zakat Toggle */}
                        <div className="pt-4 border-t border-slate-800">
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <div className="relative">
                                    <input
                                        type="checkbox"
                                        checked={zakatEnabled}
                                        onChange={(e) => setZakatEnabled(e.target.checked)}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-slate-700 rounded-full peer peer-checked:bg-emerald-500 transition-colors"></div>
                                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
                                </div>
                                <div>
                                    <span className="text-white font-semibold group-hover:text-emerald-400 transition-colors">
                                        Deduct Zakat / Charity (2.5%)
                                    </span>
                                    <p className="text-xs text-slate-500">Ethical giving from total balance</p>
                                </div>
                            </label>
                        </div>
                    </div>

                    {/* Right Side: Results */}
                    <div className="flex flex-col justify-center">
                        <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-8">
                            <div className="text-center mb-6">
                                <TrendingUp className="text-emerald-400 mx-auto mb-4" size={48} />
                                <h4 className="text-sm text-slate-500 uppercase tracking-wider mb-2">
                                    Projected Profit
                                </h4>
                                <div className="text-5xl md:text-6xl font-bold text-emerald-400 mb-1">
                                    +${profit.toFixed(2)}
                                </div>
                                <p className="text-xs text-slate-600">in {duration} month{duration !== 1 ? 's' : ''}</p>
                            </div>

                            <div className="border-t border-slate-800 pt-6 space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-400">Initial Investment</span>
                                    <span className="text-white font-semibold">${investment.toFixed(2)}</span>
                                </div>

                                {zakatEnabled && (
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-400">Zakat Contribution</span>
                                        <span className="text-rose-400 font-semibold">-${zakatAmount.toFixed(2)}</span>
                                    </div>
                                )}

                                <div className="flex justify-between items-center pt-3 border-t border-slate-800">
                                    <span className="text-slate-300 font-semibold">Total Balance</span>
                                    <span className="text-white text-2xl font-bold">${finalBalance.toFixed(2)}</span>
                                </div>
                            </div>

                            <div className="mt-6 p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
                                <p className="text-xs text-slate-500 text-center">
                                    Calculated using compound interest formula.<br />
                                    <span className="text-slate-600">Results are estimates only.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
