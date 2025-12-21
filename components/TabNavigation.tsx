'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { TrendingUp, Wallet } from 'lucide-react'

export function TabNavigation() {
    const pathname = usePathname()

    const isScanner = pathname === '/' || pathname === '/scanner'
    const isSavings = pathname === '/savings'

    return (
        <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-xl bg-slate-900/50 border border-slate-800 p-1">
                <Link
                    href="/"
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 ${isScanner
                            ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                >
                    <TrendingUp size={18} />
                    <span>🚀 SCANNER (Cashflow)</span>
                </Link>
                <Link
                    href="/savings"
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 ${isSavings
                            ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                >
                    <Wallet size={18} />
                    <span>🏦 SAVINGS (Long Term)</span>
                </Link>
            </div>
        </div>
    )
}
