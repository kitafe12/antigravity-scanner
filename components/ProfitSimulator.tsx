'use client'

import { useState } from 'react'
import { TrendingUp, DollarSign, Calendar, LineChart } from 'lucide-react'

type SimulatorTab = 'grid' | 'dca' | 'portfolio'
type PortfolioStrategy = 'safe-core' | 'top-10' | 'layer-1'

// Historical ROI data for DCA simulation
const HISTORICAL_ROI = {
    BTC: {
        1: 140,  // 1 year
        3: 320,  // 3 years
        5: 850   // 5 years
    },
    ETH: {
        1: 90,
        3: 400,
        5: 1100
    }
}

// Portfolio Strategy configurations
const PORTFOLIO_STRATEGIES = {
    'safe-core': {
        name: 'Safe Core',
        description: '50% BTC / 50% ETH',
        hodlROI: 120,
        rebalanceBonus: 25  // Additional % from rebalancing
    },
    'top-10': {
        name: 'Top 10 Market Cap',
        description: 'Diversified Index',
        hodlROI: 135,
        rebalanceBonus: 20
    },
    'layer-1': {
        name: 'Layer 1 Rotation',
        description: 'SOL, ADA, AVAX, etc.',
        hodlROI: 150,
        rebalanceBonus: 15
    }
}

export function ProfitSimulator() {
    // Tab state
    const [activeTab, setActiveTab] = useState<SimulatorTab>('grid')

    // Grid Bot State
    const [investment, setInvestment] = useState(1000)
    const [apy, setApy] = useState(50)
    const [duration, setDuration] = useState(12) // months
    const [zakatEnabled, setZakatEnabled] = useState(false)

    // DCA State
    const [monthlyInvestment, setMonthlyInvestment] = useState(100)
    const [selectedAsset, setSelectedAsset] = useState<'BTC' | 'ETH'>('BTC')
    const [dcaDuration, setDcaDuration] = useState<1 | 3 | 5>(1)

    // Smart Portfolio State
    const [portfolioAmount, setPortfolioAmount] = useState(10000)
    const [selectedStrategy, setSelectedStrategy] = useState<PortfolioStrategy>('safe-core')

    // Grid Bot Calculations
    const monthlyRate = apy / 100 / 12
    const totalBalance = investment * Math.pow(1 + monthlyRate, duration)
    const profit = totalBalance - investment
    const zakatAmount = zakatEnabled ? totalBalance * 0.025 : 0
    const finalBalance = totalBalance - zakatAmount

    // DCA Calculations
    const totalInvested = monthlyInvestment * 12 * dcaDuration
    const roi = HISTORICAL_ROI[selectedAsset][dcaDuration]
    const currentWealth = totalInvested * (1 + roi / 100)
    const dcaProfit = currentWealth - totalInvested
    const multiplier = (currentWealth / totalInvested).toFixed(1)
    const profitPercentage = (dcaProfit / totalInvested) * 100

    // Smart Portfolio Calculations
    const strategy = PORTFOLIO_STRATEGIES[selectedStrategy]
    const hodlValue = portfolioAmount * (1 + strategy.hodlROI / 100)
    const smartValue = portfolioAmount * (1 + (strategy.hodlROI + strategy.rebalanceBonus) / 100)
    const extraProfit = smartValue - hodlValue
    const hodlProfit = hodlValue - portfolioAmount
    const smartProfit = smartValue - portfolioAmount

    return (
        <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20 max-w-5xl">
            <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
                    Investment Simulator
                </h2>
                <p className="text-base sm:text-lg text-slate-400">
                    Calculate your potential earnings with different strategies.
                </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
                <button
                    onClick={() => setActiveTab('grid')}
                    className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all ${activeTab === 'grid'
                        ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                        }`}
                >
                    <span className="flex items-center gap-2">
                        <LineChart size={18} />
                        Grid Bot AI
                    </span>
                </button>
                <button
                    onClick={() => setActiveTab('dca')}
                    className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all ${activeTab === 'dca'
                        ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                        }`}
                >
                    <span className="flex items-center gap-2">
                        <Calendar size={18} />
                        DCA Simulator
                    </span>
                </button>
                <button
                    onClick={() => setActiveTab('portfolio')}
                    className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all ${activeTab === 'portfolio'
                        ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                        }`}
                >
                    <span className="flex items-center gap-2">
                        <TrendingUp size={18} />
                        Smart Portfolio
                    </span>
                </button>
            </div>

            {/* Grid Bot Tab */}
            {activeTab === 'grid' && (
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
            )}

            {/* DCA Simulator Tab */}
            {activeTab === 'dca' && (
                <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                        {/* Left Side: DCA Inputs */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <Calendar className="text-cyan-400" size={24} />
                                Dollar-Cost Averaging
                            </h3>

                            {/* Monthly Investment */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-400 mb-2">
                                    Monthly Investment ($)
                                </label>
                                <input
                                    type="number"
                                    value={monthlyInvestment}
                                    onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white font-semibold focus:border-cyan-500 focus:outline-none transition-colors"
                                    min="10"
                                    step="10"
                                />
                                <p className="text-xs text-slate-600 mt-1">Automatic purchase every month</p>
                            </div>

                            {/* Asset Selection */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-400 mb-3">
                                    Select Asset
                                </label>
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        onClick={() => setSelectedAsset('BTC')}
                                        className={`py-4 rounded-xl font-semibold transition-all ${selectedAsset === 'BTC'
                                            ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20'
                                            : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                                            }`}
                                    >
                                        <div className="text-2xl mb-1">₿</div>
                                        Bitcoin
                                    </button>
                                    <button
                                        onClick={() => setSelectedAsset('ETH')}
                                        className={`py-4 rounded-xl font-semibold transition-all ${selectedAsset === 'ETH'
                                            ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20'
                                            : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                                            }`}
                                    >
                                        <div className="text-2xl mb-1">Ξ</div>
                                        Ethereum
                                    </button>
                                </div>
                            </div>

                            {/* Duration Selection */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-400 mb-3">
                                    Investment Period
                                </label>
                                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                                    <button
                                        onClick={() => setDcaDuration(1)}
                                        className={`py-3 sm:py-3.5 rounded-xl text-sm sm:text-base font-semibold transition-all ${dcaDuration === 1
                                            ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20'
                                            : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                                            }`}
                                    >
                                        1 Year
                                    </button>
                                    <button
                                        onClick={() => setDcaDuration(3)}
                                        className={`py-3 sm:py-3.5 rounded-xl text-sm sm:text-base font-semibold transition-all ${dcaDuration === 3
                                            ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20'
                                            : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                                            }`}
                                    >
                                        3 Years
                                    </button>
                                    <button
                                        onClick={() => setDcaDuration(5)}
                                        className={`py-3 sm:py-3.5 rounded-xl text-sm sm:text-base font-semibold transition-all ${dcaDuration === 5
                                            ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20'
                                            : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                                            }`}
                                    >
                                        5 Years
                                    </button>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-slate-800">
                                <p className="text-xs text-slate-500">
                                    <strong className="text-slate-400">Historical Data:</strong> Based on {selectedAsset} performance over the last {dcaDuration} year{dcaDuration !== 1 ? 's' : ''}.
                                </p>
                            </div>
                        </div>

                        {/* Right Side: DCA Results */}
                        <div className="flex flex-col justify-center">
                            <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-8">
                                {/* Results Display */}
                                <div className="space-y-6">
                                    {/* Cash Invested */}
                                    <div className="text-center p-4 bg-slate-900/50 rounded-xl">
                                        <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Cash Invested</div>
                                        <div className="text-3xl font-bold text-rose-400">
                                            ${totalInvested.toLocaleString()}
                                        </div>
                                    </div>

                                    {/* Current Wealth */}
                                    <div className="text-center p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                                        <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Current Wealth</div>
                                        <div className="text-4xl md:text-5xl font-bold text-emerald-400">
                                            ${currentWealth.toLocaleString()}
                                        </div>
                                    </div>

                                    {/* Visual Progress Bar */}
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-xs text-slate-500">
                                            <span>Investment</span>
                                            <span>Profit</span>
                                        </div>
                                        <div className="h-4 bg-slate-900 rounded-full overflow-hidden flex">
                                            <div
                                                className="bg-rose-500 transition-all"
                                                style={{ width: `${(totalInvested / currentWealth) * 100}%` }}
                                            ></div>
                                            <div
                                                className="bg-emerald-500 transition-all"
                                                style={{ width: `${(dcaProfit / currentWealth) * 100}%` }}
                                            ></div>
                                        </div>
                                        <div className="flex justify-between text-xs">
                                            <span className="text-rose-400">{((totalInvested / currentWealth) * 100).toFixed(0)}%</span>
                                            <span className="text-emerald-400">+{profitPercentage.toFixed(0)}%</span>
                                        </div>
                                    </div>

                                    {/* Catchy Message */}
                                    <div className="mt-6 p-4 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 rounded-lg">
                                        <p className="text-center text-white font-semibold">
                                            You would have multiplied your money by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 text-xl">{multiplier}x</span> without stress.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-6 p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
                                    <p className="text-xs text-slate-500 text-center">
                                        Based on historical {selectedAsset} performance.<br />
                                        <span className="text-slate-600">Past results don't guarantee future performance.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Smart Portfolio Tab */}
            {activeTab === 'portfolio' && (
                <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                            Don't just hold. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Rebalance.</span>
                        </h3>
                        <p className="text-slate-400">
                            Automated portfolio management used by hedge funds, now available for you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                        {/* Left Side: Inputs */}
                        <div className="space-y-6">
                            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <DollarSign className="text-purple-400" size={24} />
                                Portfolio Configuration
                            </h4>

                            {/* Investment Amount */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-400 mb-2">
                                    Investment Amount ($)
                                </label>
                                <input
                                    type="number"
                                    value={portfolioAmount}
                                    onChange={(e) => setPortfolioAmount(Number(e.target.value))}
                                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white font-semibold focus:border-purple-500 focus:outline-none transition-colors"
                                    min="1000"
                                    step="1000"
                                />
                                <p className="text-xs text-slate-600 mt-1">One-time investment allocation</p>
                            </div>

                            {/* Strategy Selection */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-400 mb-3">
                                    Select Strategy
                                </label>
                                <div className="space-y-3">
                                    {(Object.keys(PORTFOLIO_STRATEGIES) as PortfolioStrategy[]).map((strategyKey) => {
                                        const strat = PORTFOLIO_STRATEGIES[strategyKey]
                                        return (
                                            <button
                                                key={strategyKey}
                                                onClick={() => setSelectedStrategy(strategyKey)}
                                                className={`w-full p-4 rounded-xl text-left transition-all ${selectedStrategy === strategyKey
                                                        ? 'bg-purple-500/20 border-2 border-purple-500'
                                                        : 'bg-slate-800 border-2 border-slate-700 hover:border-slate-600'
                                                    }`}
                                            >
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <div className="text-white font-semibold mb-1">{strat.name}</div>
                                                        <div className="text-xs text-slate-400">{strat.description}</div>
                                                    </div>
                                                    {selectedStrategy === strategyKey && (
                                                        <div className="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center">
                                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                                            </svg>
                                                        </div>
                                                    )}
                                                </div>
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="pt-4 border-t border-slate-800">
                                <p className="text-xs text-slate-500">
                                    <strong className="text-slate-400">1-Year Bull Market Simulation:</strong> Based on typical market behavior during growth cycles.
                                </p>
                            </div>
                        </div>

                        {/* Right Side: Comparison Results */}
                        <div className="flex flex-col justify-center">
                            <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-8">
                                {/* Comparison Cards */}
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    {/* Standard HODL */}
                                    <div className="p-4 bg-slate-900 border border-slate-700 rounded-xl">
                                        <div className="text-xs text-slate-500 uppercase tracking-wider mb-2 text-center">Standard HODL</div>
                                        <div className="text-2xl font-bold text-slate-400 text-center mb-1">
                                            ${hodlValue.toLocaleString()}
                                        </div>
                                        <div className="text-xs text-slate-600 text-center">
                                            +{strategy.hodlROI}% ROI
                                        </div>
                                    </div>

                                    {/* Smart Rebalance */}
                                    <div className="p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500 rounded-xl">
                                        <div className="text-xs text-purple-300 uppercase tracking-wider mb-2 text-center font-bold">Smart Portfolio</div>
                                        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 text-center mb-1">
                                            ${smartValue.toLocaleString()}
                                        </div>
                                        <div className="text-xs text-purple-400 text-center font-semibold">
                                            +{strategy.hodlROI + strategy.rebalanceBonus}% ROI
                                        </div>
                                    </div>
                                </div>

                                {/* Alpha Badge */}
                                <div className="mb-6 p-6 bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-2 border-purple-500/50 rounded-2xl text-center">
                                    <div className="text-sm text-purple-300 mb-2 uppercase tracking-wider font-bold">🚀 Rebalancing Alpha</div>
                                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                                        +${extraProfit.toLocaleString()}
                                    </div>
                                    <p className="text-xs text-slate-400 mt-2">
                                        Generated purely by rebalancing logic
                                    </p>
                                </div>

                                {/* Breakdown */}
                                <div className="border-t border-slate-800 pt-6 space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-400">Initial Investment</span>
                                        <span className="text-white font-semibold">${portfolioAmount.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-400">HODL Profit</span>
                                        <span className="text-slate-300 font-semibold">+${hodlProfit.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between items-center pt-3 border-t border-slate-800">
                                        <span className="text-purple-300 font-semibold">Smart Portfolio Profit</span>
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 text-2xl font-bold">+${smartProfit.toLocaleString()}</span>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="mt-8">
                                    <a
                                        href="https://partner.bitget.site/bg/AGSMARTP"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-purple-500/20 transition-all"
                                    >
                                        Create Smart Portfolio
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>

                                <div className="mt-6 p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
                                    <p className="text-xs text-slate-500 text-center">
                                        Simulated 1-year bull market scenario.<br />
                                        <span className="text-slate-600">Actual results may vary based on market conditions.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
