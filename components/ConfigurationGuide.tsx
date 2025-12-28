'use client'

import { useState } from 'react'
import { ChevronDown, Settings, CheckCircle, XCircle, AlertTriangle, Zap } from 'lucide-react'

export function ConfigurationGuide() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden">
            {/* Accordion Header */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-800/50 transition-colors"
            >
                <div className="flex items-center gap-3">
                    <Settings className="text-emerald-400" size={24} />
                    <div className="text-left">
                        <h3 className="text-lg font-bold text-white">
                            ⚙️ Recommended Advanced Settings
                        </h3>
                        <p className="text-sm text-slate-400">
                            Configure your bot for optimal safety and infinite growth
                        </p>
                    </div>
                </div>
                <ChevronDown
                    className={`text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    size={24}
                />
            </button>

            {/* Accordion Content */}
            {isOpen && (
                <div className="px-6 py-6 border-t border-slate-800 space-y-8">
                    {/* Info Alert: AI-First Approach */}
                    <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl flex items-start gap-3">
                        <div className="text-blue-400 flex-shrink-0 mt-0.5">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm text-blue-200">
                                <strong className="font-semibold">ℹ️ Easy Setup:</strong> Click the button above to open the pair. Then, simply select <strong>'AI Strategy'</strong> (on Bitget) or <strong>'Aurora AI'</strong> (on Bybit) to let the exchange auto-configure the grid based on live market data.
                            </p>
                        </div>
                    </div>

                    {/* Step 1: Basic Setup */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center">
                                <span className="text-emerald-400 font-bold">1</span>
                            </div>
                            <h4 className="text-xl font-bold text-white">Basic Setup</h4>
                        </div>

                        <div className="grid gap-4 ml-10">
                            <div className="p-4 bg-slate-950/50 border border-slate-700 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                                    <div>
                                        <p className="text-white font-semibold mb-1">Select "Spot Grid" Mode</p>
                                        <p className="text-sm text-slate-400">
                                            Never use Futures. Spot trading means you own the actual coins - zero liquidation risk.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-slate-950/50 border border-slate-700 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                                    <div>
                                        <p className="text-white font-semibold mb-1">Use AI Parameters 🤖</p>
                                        <p className="text-sm text-slate-400">
                                            Click "AI Parameter" (Bitget) or "Aurora AI" (Bybit) to automatically configure the grid with optimal settings. The AI will set the price range, number of grids, and investment amount based on current market data.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-slate-950/50 border border-slate-700 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                                    <div>
                                        <p className="text-white font-semibold mb-1">Configure Advanced Settings</p>
                                        <p className="text-sm text-slate-400">
                                            Click on "Advanced Settings" and configure exactly as shown in the "Infinite Secret" section below. These settings are critical for safety and unlimited growth potential.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 2: The "Infinite" Secret */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-full bg-purple-500/10 border-2 border-purple-500/30 flex items-center justify-center">
                                <span className="text-purple-400 font-bold">2</span>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white">The "Infinite" Secret</h4>
                                <p className="text-sm text-slate-400">Critical settings for unlimited upside potential</p>
                            </div>
                        </div>

                        {/* Bitget Settings Mockup */}
                        <div className="ml-10 bg-slate-950 border-2 border-slate-700 rounded-2xl overflow-hidden">
                            {/* Header */}
                            <div className="bg-slate-900 px-4 py-3 border-b border-slate-700 flex items-center justify-between">
                                <span className="text-white font-semibold">Advanced settings</span>
                                <ChevronDown className="text-slate-400" size={20} />
                            </div>

                            {/* Settings Panel */}
                            <div className="p-4 space-y-4">
                                {/* Starting Condition */}
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-400 text-sm">Starting condition</span>
                                    <div className="px-3 py-1.5 bg-slate-800 rounded-lg text-white text-sm">
                                        Immediate trigger ▼
                                    </div>
                                </div>

                                {/* Termination Condition */}
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-400 text-sm">Termination condition</span>
                                    <div className="px-3 py-1.5 bg-slate-800 rounded-lg text-white text-sm">
                                        Not preset ▼
                                    </div>
                                </div>

                                {/* TP/SL */}
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-400 text-sm">TP/SL</span>
                                    <div className="px-3 py-1.5 bg-slate-800 rounded-lg text-white text-sm">
                                        Disabled ▼
                                    </div>
                                </div>

                                {/* Slippage */}
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-400 text-sm">Slippage</span>
                                    <div className="px-3 py-1.5 bg-slate-800 rounded-lg text-white text-sm">
                                        N/A ▼
                                    </div>
                                </div>

                                {/* Trailing Grid - CRITICAL SETTING */}
                                <div className="p-4 bg-emerald-500/5 border-2 border-emerald-500/30 rounded-xl space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="text-white font-semibold text-sm">Trailing Grid / Trailing Up</span>
                                            <Zap className="text-emerald-400" size={16} />
                                        </div>
                                        <div className="relative">
                                            <div className="w-12 h-6 bg-emerald-500 rounded-full flex items-center justify-end px-1">
                                                <div className="w-4 h-4 bg-white rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-xs text-slate-400 mb-2">Moving average gains</div>

                                    <div className="grid grid-cols-3 gap-2">
                                        <div className="px-4 py-2 bg-emerald-500/20 border-2 border-emerald-500 rounded-lg text-center">
                                            <span className="text-white font-bold">1%</span>
                                        </div>
                                        <div className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-center">
                                            <span className="text-slate-400">3%</span>
                                        </div>
                                        <div className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-center">
                                            <span className="text-slate-400">5%</span>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-2 mt-3 p-3 bg-emerald-900/20 rounded-lg">
                                        <AlertTriangle className="text-emerald-400 flex-shrink-0 mt-0.5" size={16} />
                                        <p className="text-xs text-emerald-300">
                                            <strong>Check this box!</strong> On Bitget it's called 'Trailing Grid', on Bybit it's 'Trailing Up'. This feature allows your bot to follow the price to the moon automatically.
                                        </p>
                                    </div>
                                </div>

                                {/* Stop Upward Price Movement */}
                                <div className="flex items-center gap-2 opacity-50">
                                    <input
                                        type="checkbox"
                                        disabled
                                        className="w-4 h-4 rounded border-slate-600"
                                    />
                                    <span className="text-slate-500 text-sm">Stop upward price movement</span>
                                </div>

                                {/* Sell at Termination - CRITICAL SETTING */}
                                <div className="p-4 bg-rose-500/5 border-2 border-rose-500/30 rounded-xl space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="text-white font-semibold text-sm">Sell at termination</span>
                                            <XCircle className="text-rose-400" size={16} />
                                        </div>
                                        <div className="relative">
                                            <div className="w-12 h-6 bg-slate-700 rounded-full flex items-center justify-start px-1">
                                                <div className="w-4 h-4 bg-slate-400 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-2 p-3 bg-rose-900/20 rounded-lg">
                                        <XCircle className="text-rose-400 flex-shrink-0 mt-0.5" size={16} />
                                        <p className="text-xs text-rose-300">
                                            <strong>Keep OFF:</strong> If you stop the bot, you want to keep your coins (HODL), not force-sell them into USDT. This preserves your assets.
                                        </p>
                                    </div>
                                </div>

                                {/* HODL Mode */}
                                <div className="flex items-center justify-between opacity-50">
                                    <span className="text-slate-500 text-sm">HODL mode</span>
                                    <div className="relative">
                                        <div className="w-12 h-6 bg-slate-700 rounded-full flex items-center justify-start px-1">
                                            <div className="w-4 h-4 bg-slate-400 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Automatic Profit Transfer */}
                                <div className="flex items-center justify-between opacity-50">
                                    <span className="text-slate-500 text-sm">Automatic profit transfer</span>
                                    <div className="relative">
                                        <div className="w-12 h-6 bg-slate-700 rounded-full flex items-center justify-start px-1">
                                            <div className="w-4 h-4 bg-slate-400 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Summary */}
                        <div className="ml-10 p-4 bg-gradient-to-r from-emerald-900/20 to-purple-900/20 border border-emerald-500/30 rounded-xl">
                            <h5 className="text-white font-semibold mb-3 flex items-center gap-2">
                                <Zap className="text-emerald-400" size={18} />
                                Quick Summary
                            </h5>
                            <div className="space-y-2 text-sm">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="text-emerald-400" size={16} />
                                    <span className="text-slate-300">
                                        <strong className="text-white">Trailing Grid ON</strong> with 1% → Infinite upside potential
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <XCircle className="text-rose-400" size={16} />
                                    <span className="text-slate-300">
                                        <strong className="text-white">Sell at Termination OFF</strong> → Keep your coins when stopping
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="text-emerald-400" size={16} />
                                    <span className="text-slate-300">
                                        <strong className="text-white">Immediate Start</strong> → No waiting, bot starts right away
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="text-emerald-400" size={16} />
                                    <span className="text-slate-300">
                                        <strong className="text-white">No TP/SL</strong> → Zero liquidation risk in Spot mode
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Final CTA */}
                    <div className="mt-6 p-6 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-xl text-center">
                        <p className="text-white font-semibold mb-2">
                            Ready to launch your automated income stream?
                        </p>
                        <p className="text-sm text-slate-400 mb-4">
                            Copy these settings exactly and watch your portfolio grow on autopilot.
                        </p>
                        <a
                            href="https://partner.bitget.com/bg/GSBD1Q"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-3 px-6 rounded-xl transition-all"
                        >
                            Create Account on Bitget
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            )}
        </div>
    )
}
