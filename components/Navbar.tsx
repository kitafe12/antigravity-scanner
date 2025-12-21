'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Shield, Calculator, TrendingUp, Wallet } from 'lucide-react'

export function Navbar() {
    const pathname = usePathname()

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 shadow-lg">
            <div className="container mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-1.5 sm:gap-2 hover:opacity-80 transition-opacity">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <Shield className="text-emerald-500" size={16} />
                    </div>
                    <span className="text-base sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
                        Antigravity
                    </span>
                    <span className="hidden sm:inline-flex text-emerald-500 text-xs font-mono uppercase tracking-widest bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                        Beta
                    </span>
                </Link>

                {/* Menu - Compact on Mobile */}
                <div className="flex items-center gap-3 sm:gap-6 md:gap-8">
                    <Link
                        href="/"
                        className={`flex items-center gap-1 text-xs sm:text-sm font-semibold transition-colors ${pathname === '/' || pathname === '/scanner'
                                ? 'text-emerald-400'
                                : 'text-slate-400 hover:text-white'
                            }`}
                    >
                        <TrendingUp size={14} className="sm:hidden" />
                        <span className="hidden sm:inline">Scanner</span>
                        <span className="sm:hidden">Scan</span>
                    </Link>
                    <Link
                        href="/savings"
                        className={`flex items-center gap-1 text-xs sm:text-sm font-semibold transition-colors ${pathname === '/savings'
                                ? 'text-emerald-400'
                                : 'text-slate-400 hover:text-white'
                            }`}
                    >
                        <Wallet size={14} className="sm:hidden" />
                        <span className="hidden sm:inline">Savings</span>
                        <span className="sm:hidden">Save</span>
                    </Link>
                    <a
                        href="/#calculator"
                        className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-semibold text-slate-400 hover:text-emerald-400 transition-colors"
                    >
                        <Calculator size={14} className="sm:size-4" />
                        <span className="hidden sm:inline">Calculator</span>
                        <span className="sm:hidden">Calc</span>
                    </a>
                </div>
            </div>
        </nav>
    )
}
