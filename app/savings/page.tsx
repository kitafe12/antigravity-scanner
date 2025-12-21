import { Shield, TrendingUp, Calendar, PieChart, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { TabNavigation } from '@/components/TabNavigation'

export default function SavingsPage() {
    return (
        <main className="min-h-screen relative overflow-hidden bg-slate-950 pt-16">
            {/* Hero Section */}
            <section className="relative py-20 px-4 text-center border-b border-white/5 bg-slate-950">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                <div className="relative z-10 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-8 shadow-sm">
                        <Calendar className="w-3 h-3" />
                        Long-Term Wealth Building
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6">
                        Wealth is Built <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Over Time</span>,
                        <br />
                        <span className="text-slate-600">Not Overnight.</span>
                    </h1>

                    <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                        Automate your investments with <span className="text-slate-200 font-medium">DCA</span> and <span className="text-slate-200 font-medium">Smart Portfolio</span> strategies. Set it, forget it, and let time work for you.
                    </p>
                </div>
            </section>

            {/* Tab Navigation */}
            <section className="container mx-auto px-4 pt-12">
                <TabNavigation />
            </section>

            {/* DCA Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold mb-4">
                                <Calendar size={14} />
                                STRATEGY 1
                            </div>
                            <h2 className="text-4xl font-bold text-white mb-4">
                                The Power of DCA<br />
                                <span className="text-slate-500">(Auto-Invest)</span>
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-6">
                                Dollar-Cost Averaging removes emotion from investing. Instead of trying to time the market, you invest a <span className="text-white font-medium">fixed amount every day or week</span>, regardless of price movements.
                            </p>

                            <div className="space-y-3 mb-8">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">No Stress, No Timing</h4>
                                        <p className="text-slate-400 text-sm">Market down? You buy more. Market up? You still accumulate. Average entry price guaranteed.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Fully Automated</h4>
                                        <p className="text-slate-400 text-sm">Set your schedule and amount once. Bitget does the rest automatically.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Best for Beginners</h4>
                                        <p className="text-slate-400 text-sm">Perfect if you're new to crypto or don't want to watch charts daily.</p>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="https://partner.bitget.site/bg/AGDCA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-emerald-500/20 transition-all transform hover:-translate-y-1"
                            >
                                Configure Auto-Invest on Bitget
                                <ArrowRight size={18} />
                            </a>
                        </div>

                        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
                            <div className="text-center mb-6">
                                <div className="text-6xl mb-4">📊</div>
                                <h3 className="text-xl font-bold text-white mb-2">Expected APY</h3>
                                <div className="text-4xl font-bold text-emerald-400">~24.5%</div>
                                <p className="text-xs text-slate-500 mt-2">Based on 30-day backtest</p>
                            </div>
                            <div className="border-t border-slate-800 pt-6">
                                <h4 className="text-sm font-semibold text-slate-400 mb-3">How It Works:</h4>
                                <ol className="space-y-2 text-sm text-slate-400">
                                    <li className="flex gap-2"><span className="text-emerald-400 font-bold">1.</span> Choose your crypto (BTC, ETH, etc.)</li>
                                    <li className="flex gap-2"><span className="text-emerald-400 font-bold">2.</span> Set investment amount ($10, $50, $100...)</li>
                                    <li className="flex gap-2"><span className="text-emerald-400 font-bold">3.</span> Pick frequency (daily, weekly)</li>
                                    <li className="flex gap-2"><span className="text-emerald-400 font-bold">4.</span> Bot buys automatically at best price</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Smart Portfolio Section */}
            <section className="container mx-auto px-4 py-16 border-t border-white/5">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="order-2 md:order-1 bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
                            <div className="text-center mb-6">
                                <div className="text-6xl mb-4">🔄</div>
                                <h3 className="text-xl font-bold text-white mb-2">Expected APY</h3>
                                <div className="text-4xl font-bold text-emerald-400">~28.3%</div>
                                <p className="text-xs text-slate-500 mt-2">Based on 30-day backtest</p>
                            </div>
                            <div className="border-t border-slate-800 pt-6">
                                <h4 className="text-sm font-semibold text-slate-400 mb-3">Example Portfolio:</h4>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-400 text-sm">Bitcoin (BTC)</span>
                                        <span className="text-white font-semibold">40%</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-400 text-sm">Ethereum (ETH)</span>
                                        <span className="text-white font-semibold">30%</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-400 text-sm">USDT (Stable)</span>
                                        <span className="text-white font-semibold">30%</span>
                                    </div>
                                </div>
                                <p className="text-xs text-slate-500 mt-4 italic">Bot automatically rebalances when percentages drift.</p>
                            </div>
                        </div>

                        <div className="order-1 md:order-2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold mb-4">
                                <PieChart size={14} />
                                STRATEGY 2
                            </div>
                            <h2 className="text-4xl font-bold text-white mb-4">
                                Smart Portfolio<br />
                                <span className="text-slate-500">(Auto-Rebalancing)</span>
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-6">
                                Set your ideal asset allocation (e.g., 50% BTC / 50% USDT), and the bot <span className="text-white font-medium">automatically sells high and buys low</span> to maintain that balance.
                            </p>

                            <div className="space-y-3 mb-8">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Automatic Profit Taking</h4>
                                        <p className="text-slate-400 text-sm">When BTC pumps, bot sells some to lock gains. When it dips, bot buys back cheaper.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Risk Management Built-In</h4>
                                        <p className="text-slate-400 text-sm">Keeps you balanced. Never 100% exposed to one volatile asset.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Perfect for Long-Term Holders</h4>
                                        <p className="text-slate-400 text-sm">Hold your favorite coins while capturing gains along the way.</p>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="https://partner.bitget.site/bg/AGSMARTP"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-all transform hover:-translate-y-1"
                            >
                                Create Smart Portfolio
                                <ArrowRight size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* How to Start Section */}
            <section className="container mx-auto px-4 py-16 border-t border-white/5">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">How to Start in 3 Steps</h2>
                    <p className="text-slate-400 mb-12">Get your automated strategy running in under 5 minutes.</p>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                            <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4 text-emerald-400 font-bold text-xl">
                                1
                            </div>
                            <h3 className="text-white font-semibold mb-2">Create Bitget Account</h3>
                            <p className="text-slate-400 text-sm">Sign up using our affiliate link to unlock bot features.</p>
                        </div>

                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                            <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4 text-emerald-400 font-bold text-xl">
                                2
                            </div>
                            <h3 className="text-white font-semibold mb-2">Deposit Funds (USDT)</h3>
                            <p className="text-slate-400 text-sm">Transfer crypto or buy with card. Minimum: $10-50.</p>
                        </div>

                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                            <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4 text-emerald-400 font-bold text-xl">
                                3
                            </div>
                            <h3 className="text-white font-semibold mb-2">Configure Your Bot</h3>
                            <p className="text-slate-400 text-sm">Choose DCA or Portfolio, set parameters, and activate.</p>
                        </div>
                    </div>

                    <div className="mt-12 p-6 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                        <p className="text-amber-400 font-medium">
                            💡 <strong>Pro Tip:</strong> Start small to test the strategy. You can always increase your investment later.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-4 py-16 border-t border-white/5">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
                    <p className="text-slate-400 mb-8">Choose your strategy and let automation do the work.</p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://partner.bitget.site/bg/AGDCA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-emerald-500/20 transition-all"
                        >
                            <Calendar size={18} />
                            Start DCA Strategy
                        </a>
                        <a
                            href="https://partner.bitget.site/bg/AGSMARTP"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-all"
                        >
                            <PieChart size={18} />
                            Build Smart Portfolio
                        </a>
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
                    </div>
                </div>
            </footer>
        </main>
    )
}
