'use client'

import { useState } from 'react'
import { Shield, TrendingUp, Wallet, ExternalLink, ArrowRight } from 'lucide-react'

type BotCategory = 'Cashflow' | 'Savings'

interface TradingBot {
    id: string
    name: string
    pair: string
    category: BotCategory
    risk: 'Low' | 'Medium' | 'High'
    apy: string
    halal: true
    affiliateLink: string
    botLink: string
}

// Mock Data - Fill your actual links later
const TRADING_BOTS: TradingBot[] = [
    // CASHFLOW BOTS (Grid Trading)
    {
        id: 'btc-grid',
        name: 'Bitcoin Alpha',
        pair: 'BTC/USDT',
        category: 'Cashflow',
        risk: 'Low',
        apy: '75.43%',
        halal: true,
        affiliateLink: 'https://partner.bitget.com/bg/GSBD1Q',
        botLink: 'https://partner.bitget.site/bg/AGBTCUSDT'
    },
    {
        id: 'eth-grid',
        name: 'Ethereum Pro',
        pair: 'ETH/USDT',
        category: 'Cashflow',
        risk: 'Low',
        apy: '126.89%',
        halal: true,
        affiliateLink: 'https://partner.bitget.com/bg/GSBD1Q',
        botLink: 'https://partner.bitget.site/bg/AGETHUSDT'
    },
    {
        id: 'sol-grid',
        name: 'Solana Velocity',
        pair: 'SOL/USDT',
        category: 'Cashflow',
        risk: 'Medium',
        apy: '73.48%',
        halal: true,
        affiliateLink: 'https://partner.bitget.com/bg/GSBD1Q',
        botLink: 'https://partner.bitget.site/bg/AGSOLUSDT'
    },
    {
        id: 'avax-grid',
        name: 'Avalanche Momentum',
        pair: 'AVAX/USDT',
        category: 'Cashflow',
        risk: 'Medium',
        apy: '31.87%',
        halal: true,
        affiliateLink: 'https://partner.bitget.com/bg/GSBD1Q',
        botLink: 'https://partner.bitget.site/bg/AGAVAXUSDT'
    },
    {
        id: 'link-grid',
        name: 'Chainlink Oracle',
        pair: 'LINK/USDT',
        category: 'Cashflow',
        risk: 'Medium',
        apy: '122.27%',
        halal: true,
        affiliateLink: 'https://partner.bitget.com/bg/GSBD1Q',
        botLink: 'https://partner.bitget.site/bg/AGLINKUSDT'
    },
    {
        id: 'xrp-grid',
        name: 'Ripple Flow',
        pair: 'XRP/USDT',
        category: 'Cashflow',
        risk: 'Low',
        apy: '142.59%',
        halal: true,
        affiliateLink: 'https://partner.bitget.com/bg/GSBD1Q',
        botLink: 'https://partner.bitget.site/bg/AGXRPUSDT'
    },
    {
        id: 'render-grid',
        name: 'Render Network',
        pair: 'RENDER/USDT',
        category: 'Cashflow',
        risk: 'High',
        apy: '18.12%',
        halal: true,
        affiliateLink: 'https://partner.bitget.com/bg/GSBD1Q',
        botLink: 'https://partner.bitget.site/bg/AGRNDRUSDT'
    },
    {
        id: 'near-grid',
        name: 'Near Protocol',
        pair: 'NEAR/USDT',
        category: 'Cashflow',
        risk: 'Medium',
        apy: '22.02%',
        halal: true,
        affiliateLink: 'https://partner.bitget.com/bg/GSBD1Q',
        botLink: 'https://partner.bitget.site/bg/AGNEARUSDT'
    },
    {
        id: 'inj-grid',
        name: 'Injective Range',
        pair: 'INJ/USDT',
        category: 'Cashflow',
        risk: 'High',
        apy: '42.82%',
        halal: true,
        affiliateLink: 'https://partner.bitget.com/bg/GSBD1Q',
        botLink: 'https://partner.bitget.site/bg/AGINJUSDT'
    },
    // SAVINGS BOTS (DCA/Portfolio)
    {
        id: 'auto-invest',
        name: 'Auto-Invest DCA',
        pair: 'Multi-Asset',
        category: 'Savings',
        risk: 'Low',
        apy: '24.5%',
        halal: true,
        affiliateLink: 'https://partner.bitget.com/bg/GSBD1Q',
        botLink: 'https://partner.bitget.site/bg/AGDCA'
    },
    {
        id: 'smart-portfolio',
        name: 'Smart Portfolio',
        pair: 'Diversified',
        category: 'Savings',
        risk: 'Low',
        apy: '28.3%',
        halal: true,
        affiliateLink: 'https://partner.bitget.com/bg/GSBD1Q',
        botLink: 'https://partner.bitget.site/bg/AGSMARTP'
    }
]

export default function ScannerPage() {
    const [activeTab, setActiveTab] = useState<BotCategory>('Cashflow')

    const filteredBots = TRADING_BOTS.filter(bot => bot.category === activeTab)

    const getRiskColor = (risk: string) => {
        switch (risk) {
            case 'Low': return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
            case 'Medium': return 'text-amber-400 bg-amber-500/10 border-amber-500/20'
            case 'High': return 'text-rose-400 bg-rose-500/10 border-rose-500/20'
            default: return 'text-slate-400 bg-slate-500/10 border-slate-500/20'
        }
    }

    return (
        <main className="min-h-screen relative overflow-hidden bg-slate-950">
            {/* Navbar */}
            <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="font-bold text-xl tracking-tight text-white flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                            <Shield className="text-emerald-500" size={18} />
                        </div>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">Antigravity</span>
                        <span className="text-emerald-500 text-xs font-mono uppercase tracking-widest bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">Beta</span>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative py-20 px-4 text-center border-b border-white/5 bg-slate-950">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                <div className="relative z-10 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-8 shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Optimized for Bitget AI
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6">
                        Ethical <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Crypto</span> Income.
                        <br />
                        <span className="text-slate-600">Zero Leverage.</span>
                    </h1>

                    <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                        Verified <span className="text-slate-200 font-medium">spot-only</span> trading bots that generate passive income through <span className="text-slate-200 font-medium">grid strategies</span> and <span className="text-slate-200 font-medium">DCA portfolios</span>.
                    </p>

                    <div className="flex justify-center gap-4 mb-16">
                        <a href="#bots" className="bg-emerald-500 hover:bg-emerald-400 text-white text-lg font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-emerald-500/20 transition-all transform hover:-translate-y-1">
                            Explore Bots
                        </a>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                        <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center justify-center gap-3 text-slate-300 font-medium">
                            <div className="p-2 rounded bg-slate-800/50 text-emerald-400"><Shield size={16} /></div>
                            <span>Verified Safe</span>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center justify-center gap-3 text-slate-300 font-medium">
                            <div className="p-2 rounded bg-slate-800/50 text-emerald-400"><TrendingUp size={16} /></div>
                            <span>Spot Only</span>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center justify-center gap-3 text-slate-300 font-medium">
                            <div className="p-2 rounded bg-slate-800/50 text-emerald-400"><Wallet size={16} /></div>
                            <span>Verified Safe</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tab Switcher */}
            <section id="bots" className="container mx-auto px-4 pt-12">
                <div className="flex justify-center mb-8">
                    <div className="inline-flex rounded-xl bg-slate-900/50 border border-slate-800 p-1">
                        <button
                            onClick={() => setActiveTab('Cashflow')}
                            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 ${activeTab === 'Cashflow'
                                ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                                : 'text-slate-400 hover:text-slate-200'
                                }`}
                        >
                            <TrendingUp size={18} />
                            <span>🚀 SCANNER (Cashflow)</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('Savings')}
                            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 ${activeTab === 'Savings'
                                ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                                : 'text-slate-400 hover:text-slate-200'
                                }`}
                        >
                            <Wallet size={18} />
                            <span>🏦 SAVINGS (Long Term)</span>
                        </button>
                    </div>
                </div>

                {/* Bot Grid */}
                <div className="pb-16">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                            {activeTab === 'Cashflow' ? 'Grid Trading Bots' : 'Long-Term Savings'}
                            <span className="bg-slate-800 text-slate-400 text-xs px-2 py-1 rounded-full border border-slate-700">
                                {filteredBots.length} Available
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredBots.map((bot) => (
                            <div
                                key={bot.id}
                                className="group bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
                            >
                                {/* Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1">{bot.name}</h3>
                                        <p className="text-sm text-slate-400 font-mono">{bot.pair}</p>
                                    </div>
                                    <div className={`px-2 py-1 rounded-lg text-xs font-bold border ${getRiskColor(bot.risk)}`}>
                                        {bot.risk}
                                    </div>
                                </div>

                                {/* APY */}
                                <div className="mb-6 p-4 bg-slate-950/50 rounded-xl border border-slate-800">
                                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Est. Annual Return</div>
                                    <div className="text-3xl font-bold text-emerald-400 flex items-center gap-2">
                                        {bot.apy}
                                        {parseFloat(bot.apy) > 100 && <span className="text-2xl">🔥</span>}
                                    </div>
                                </div>

                                {/* Spot Strategy Badge */}
                                <div className="flex items-center gap-2 mb-6 px-3 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                                    <Shield size={14} className="text-emerald-400" />
                                    <span className="text-xs font-semibold text-emerald-400">🛡️ 100% Spot Strategy</span>
                                </div>

                                {/* Double Button Logic */}
                                <div className="space-y-3">
                                    {bot.category === 'Cashflow' ? (
                                        <>
                                            {/* Button 1: Create Account */}
                                            <a
                                                href={bot.affiliateLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full flex items-center justify-between px-4 py-3 bg-transparent border-2 border-slate-700 text-slate-300 rounded-xl font-semibold hover:border-emerald-500/50 hover:text-emerald-400 transition-all group/btn"
                                            >
                                                <span>1. Create Account (Required)</span>
                                                <ExternalLink size={16} className="opacity-50 group-hover/btn:opacity-100" />
                                            </a>

                                            {/* Button 2: Start Bot */}
                                            <a
                                                href={bot.botLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full flex items-center justify-between px-4 py-3 bg-emerald-500 text-white rounded-xl font-semibold hover:bg-emerald-400 transition-all shadow-md hover:shadow-lg hover:shadow-emerald-500/20 group/btn"
                                            >
                                                <span>2. Start {bot.pair.split('/')[0]} Bot</span>
                                                <ExternalLink size={16} className="group-hover/btn:translate-x-0.5 transition-transform" />
                                            </a>
                                        </>
                                    ) : (
                                        <>
                                            {/* Savings Category: Single Button to Education Page */}
                                            <a
                                                href="/savings"
                                                className="w-full flex items-center justify-center gap-2 px-4 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl font-semibold hover:from-emerald-400 hover:to-cyan-400 transition-all shadow-md hover:shadow-lg hover:shadow-emerald-500/20"
                                            >
                                                <span>Learn & Start</span>
                                                <ArrowRight size={18} />
                                            </a>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <footer className="py-12 text-center text-slate-600 text-sm border-t border-white/5 bg-slate-950/50 backdrop-blur-sm">
                <p className="mb-2">© {new Date().getFullYear()} Antigravity Scanner. Ethical Crypto Income.</p>
                <p className="opacity-50 text-xs">Trading involves risk. Past performance is not indicative of future results.</p>
            </footer>
        </main>
    )
}
