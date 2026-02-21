import React from 'react';
import { TrendingUp, Globe, Shield } from 'lucide-react';

interface ToolCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  link: string;
  accentColor: 'emerald' | 'cyan' | 'amber';
}

const ToolCard: React.FC<ToolCardProps> = ({ icon, title, description, buttonText, link, accentColor }) => {
  const getAccentClasses = () => {
    switch (accentColor) {
      case 'emerald':
        return {
          iconBg: 'bg-emerald-500/10 border-emerald-500/20',
          iconColor: 'text-emerald-400',
          hoverBorder: 'hover:border-emerald-500/30'
        };
      case 'cyan':
        return {
          iconBg: 'bg-cyan-500/10 border-cyan-500/20',
          iconColor: 'text-cyan-400',
          hoverBorder: 'hover:border-cyan-500/30'
        };
      case 'amber':
        return {
          iconBg: 'bg-amber-500/10 border-amber-500/20',
          iconColor: 'text-amber-400',
          hoverBorder: 'hover:border-amber-500/30'
        };
    }
  };

  const classes = getAccentClasses();

  return (
    <div className={`bg-slate-950/50 border border-slate-800 rounded-2xl p-6 sm:p-8 ${classes.hoverBorder} transition-all hover:shadow-lg hover:shadow-emerald-500/10`}>
      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${classes.iconBg} border flex items-center justify-center mb-5`}>
        <div className={classes.iconColor}>
          {icon}
        </div>
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
        {title}
      </h3>
      <p className="text-slate-400 leading-relaxed mb-6 text-sm sm:text-base">
        {description}
      </p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-500 text-white rounded-xl font-semibold hover:bg-emerald-400 transition-all shadow-md hover:shadow-lg hover:shadow-emerald-500/20"
      >
        {buttonText}
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </a>
    </div>
  );
};

export default function ArchitectToolkit() {
  return (
    <section id="toolkit" className="bg-slate-900 border-t border-white/5 py-12 sm:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            The Essential Tools
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            The professional infrastructure required to run the system.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {/* Card 1: Market Intelligence */}
          <ToolCard
            icon={<TrendingUp size={28} />}
            title="Market Intelligence (TradingView)"
            description="Don't trade blind. Identify deep liquidity zones and order blocks before they hit. The only charts that matter."
            buttonText="Get Pro Charts"
            link="https://tradingview.com/?aff_id=163200"
            accentColor="emerald"
          />

          {/* Card 2: Digital Sovereignty */}
          <ToolCard
            icon={<Globe size={28} />}
            title="Digital Sovereignty (NordVPN)"
            description="Access global liquidity pools and protect your IP. Essential for executing trades without borders."
            buttonText="Secure Connection"
            link="https://go.nordvpn.net/aff_c?offer_id=15&aff_id="
            accentColor="cyan"
          />

          {/* Card 3: The Vault */}
          <ToolCard
            icon={<Shield size={28} />}
            title="The Vault (Ledger)"
            description="Not your keys, not your coins. Move your profits to cold storage immediately after harvesting."
            buttonText="Secure Assets"
            link="https://shop.ledger.com/?r=331bf681973f"
            accentColor="amber"
          />
        </div>
      </div>
    </section>
  );
}
