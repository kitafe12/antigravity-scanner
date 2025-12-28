'use client'

import { Shield, TrendingUp, ExternalLink, Lock, Wallet, CheckCircle } from 'lucide-react'
import { TabNavigation } from '@/components/TabNavigation'
import { ProfitSimulator } from '@/components/ProfitSimulator'
import { ConfigurationGuide } from '@/components/ConfigurationGuide'

interface TradingBot {
  id: string
  name: string
  pair: string
  risk: 'Low' | 'Medium' | 'High'
  apy: string
  affiliateLink: string
  botLink: string
}

// CASHFLOW BOTS (Grid Trading) - Only showing grid bots on Scanner page
const GRID_BOTS: TradingBot[] = [
  {
    id: 'btc-grid',
    name: 'Bitcoin Alpha',
    pair: 'BTC/USDT',
    risk: 'Low',
    apy: '75.43%',
    affiliateLink: 'https://partner.bitget.com/bg/GSBD1Q',
    botLink: 'https://partner.bitget.site/bg/AGBTCUSDT'
  },
  {
    id: 'eth-grid',
    name: 'Ethereum Pro',
    pair: 'ETH/USDT',
    risk: 'Low',
    apy: '126.89%',
    affiliateLink: 'https://partner.bitget.com/bg/GSBD1Q',
    botLink: 'https://partner.bitget.site/bg/AGETHUSDT'
  },
  {
    id: 'sol-grid',
    name: 'Solana Velocity',
    pair: 'SOL/USDT',
    risk: 'Medium',
    apy: '73.48%',
    affiliateLink: 'https://partner.bitget.com/bg/GSBD1Q',
    botLink: 'https://partner.bitget.site/bg/AGSOLUSDT'
  },
  {
    id: 'avax-grid',
    name: 'Avalanche Momentum',
    pair: 'AVAX/USDT',
    risk: 'Medium',
    apy: '31.87%',
    affiliateLink: 'https://partner.bitget.com/bg/GSBD1Q',
    botLink: 'https://partner.bitget.site/bg/AGAVAXUSDT'
  },
  {
    id: 'link-grid',
    name: 'Chainlink Oracle',
    pair: 'LINK/USDT',
    risk: 'Medium',
    apy: '122.27%',
    affiliateLink: 'https://partner.bitget.com/bg/GSBD1Q',
    botLink: 'https://partner.bitget.site/bg/AGLINKUSDT'
  },
  {
    id: 'xrp-grid',
    name: 'Ripple Flow',
    pair: 'XRP/USDT',
    risk: 'Low',
    apy: '142.59%',
    affiliateLink: 'https://partner.bitget.com/bg/GSBD1Q',
    botLink: 'https://partner.bitget.site/bg/AGXRPUSDT'
  },
  {
    id: 'render-grid',
    name: 'Render Network',
    pair: 'RENDER/USDT',
    risk: 'High',
    apy: '18.12%',
    affiliateLink: 'https://partner.bitget.com/bg/GSBD1Q',
    botLink: 'https://partner.bitget.site/bg/AGRNDRUSDT'
  },
  {
    id: 'near-grid',
    name: 'Near Protocol',
    pair: 'NEAR/USDT',
    risk: 'Medium',
    apy: '22.02%',
    affiliateLink: 'https://partner.bitget.com/bg/GSBD1Q',
    botLink: 'https://partner.bitget.site/bg/AGNEARUSDT'
  },
  {
    id: 'inj-grid',
    name: 'Injective Range',
    pair: 'INJ/USDT',
    risk: 'High',
    apy: '42.82%',
    affiliateLink: 'https://partner.bitget.com/bg/GSBD1Q',
    botLink: 'https://partner.bitget.site/bg/AGINJUSDT'
  }
]

export default function HomePage() {
  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low': return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
      case 'Medium': return 'text-amber-400 bg-amber-500/10 border-amber-500/20'
      case 'High': return 'text-rose-400 bg-rose-500/10 border-rose-500/20'
      default: return 'text-slate-400 bg-slate-500/10 border-slate-500/20'
    }
  }

  return (
    <main className="min-h-screen relative overflow-hidden bg-slate-950 pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center border-b border-white/5 bg-slate-950">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Optimized for Bitget & Bybit AI
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
              <div className="p-2 rounded bg-slate-800/50 text-emerald-400"><Shield size={16} /></div>
              <span>Verified Safe</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="border-y border-white/5 bg-slate-900/30 py-16 sm:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              Don't Predict. <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">React.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
              How Volatility Harvesting turns fluctuations into profit.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="h-full bg-slate-900/50 border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-emerald-500/30 transition-all">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border-2 border-emerald-500/20 flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl font-bold text-emerald-400">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">
                  AI Defines the Range
                </h3>
                <p className="text-slate-400 text-center leading-relaxed">
                  Exchange AIs provide the engine, we provide the GPS. The scanner filters 500+ coins to identify the specific assets currently in the 'Green Zone' for maximum safety and yield.
                </p>
              </div>
              {/* Arrow - Hidden on mobile */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <svg className="w-8 h-8 text-emerald-500/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="h-full bg-slate-900/50 border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-emerald-500/30 transition-all">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border-2 border-emerald-500/20 flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl font-bold text-emerald-400">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">
                  The Grid is Set
                </h3>
                <p className="text-slate-400 text-center leading-relaxed">
                  The bot places buy/sell orders at every level within the range, creating a profit grid.
                </p>
              </div>
              {/* Arrow - Hidden on mobile */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <svg className="w-8 h-8 text-emerald-500/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <div className="h-full bg-slate-900/50 border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-emerald-500/30 transition-all">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border-2 border-emerald-500/20 flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl font-bold text-emerald-400">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">
                  Profit & Rotate
                </h3>
                <p className="text-slate-400 text-center leading-relaxed">
                  Earn passive income 24/7 from volatility. When the market shifts, check the Scanner again to rotate profits into the next 'Green Zone' asset.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Switcher */}
      <section id="bots" className="container mx-auto px-4 pt-12">
        <TabNavigation />

        {/* Bot Grid */}
        <div className="pb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              Grid Trading Bots
              <span className="bg-slate-800 text-slate-400 text-xs px-2 py-1 rounded-full border border-slate-700">
                {GRID_BOTS.length} Available
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GRID_BOTS.map((bot) => (
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

                {/* Platform Choice Buttons */}
                <div className="space-y-3">
                  {/* Primary: Bitget AI Mode */}
                  <a
                    href={bot.botLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-emerald-500 text-white rounded-xl font-semibold hover:bg-emerald-400 transition-all shadow-md hover:shadow-lg hover:shadow-emerald-500/20"
                  >
                    <span>Start on Bitget (Use AI Mode)</span>
                    <span className="text-lg">⚡</span>
                  </a>

                  {/* Secondary: Bybit Aurora AI */}
                  <a
                    href="https://partner.bybit.com/b/150570"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center text-sm text-slate-400 hover:text-cyan-400 transition-colors flex items-center justify-center gap-1"
                  >
                    <span>Or trade on Bybit (Use Aurora AI)</span>
                    <span className="text-xs">↗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Configuration Guide */}
      <section className="container mx-auto px-4 pb-20">
        <ConfigurationGuide />
      </section>

      {/* Profit Simulator */}
      <section id="calculator">
        <ProfitSimulator />
      </section>

      {/* Reassurance Section */}
      <section className="bg-slate-900 border-t border-white/5 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Ethical Automation?
            </h2>
            <p className="text-lg text-slate-400">
              Professional grade tools. Zero fees. 100% Transparent.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Spot Only Guarantee */}
            <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-8 hover:border-emerald-500/30 transition-all">
              <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                <Lock className="text-emerald-400" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Zero Leverage. Zero Debt.
              </h3>
              <p className="text-slate-400 leading-relaxed">
                We strictly use <span className="text-white font-medium">Spot Grid strategies</span>. Unlike futures trading, you never borrow money, never pay interest fees (No Riba), and face <span className="text-white font-medium">zero liquidation risk</span>. You own the underlying assets.
              </p>
            </div>

            {/* Card 2: Non-Custodial Model */}
            <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-8 hover:border-emerald-500/30 transition-all">
              <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6">
                <Wallet className="text-cyan-400" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Your Funds Stay Yours.
              </h3>
              <p className="text-slate-400 leading-relaxed">
                You never send us money. The bots run <span className="text-white font-medium">directly on your own Bitget Exchange account</span>. You maintain 100% control of your withdrawals and deposits at all times.
              </p>
            </div>

            {/* Card 3: Business Model */}
            <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-8 hover:border-emerald-500/30 transition-all">
              <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6">
                <CheckCircle className="text-amber-400" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                100% Free Software.
              </h3>
              <p className="text-slate-400 leading-relaxed">
                No monthly subscriptions. No hidden contracts. We are <span className="text-white font-medium">official partners</span> supported by the exchange's volume rebate program. You get the pro tools for free.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 bg-slate-950">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Copyright & Links */}
          <div className="text-center mb-6">
            <p className="text-slate-500 text-sm mb-3">
              © 2025 Antigravity Scanner. All rights reserved.
            </p>
            <div className="flex justify-center gap-4 text-xs text-slate-500">
              <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            </div>
          </div>

          {/* Risk Warning */}
          <div className="text-center">
            <p className="text-xs text-slate-600 leading-relaxed max-w-3xl mx-auto">
              <strong className="text-slate-500">Risk Warning:</strong> Cryptocurrency trading involves significant risk and may result in the loss of your capital. The trading bots and strategies listed on this platform are automated tools provided by Bitget. "Antigravity Scanner" is an educational interface and does not provide financial advice. Past performance of AI strategies is not a guarantee of future results. Please trade responsibly.
            </p>

            {/* Social Proof - Twitter Link */}
            <div className="mt-4">
              <a
                href="https://x.com/AntigravityScan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-slate-600 hover:text-emerald-400 transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span>Created by @AntigravityScan</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
