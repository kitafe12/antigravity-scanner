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
    <div className={`bg-slate-950/50 border border-slate-800 rounded-2xl p-8 ${classes.hoverBorder} transition-all hover:shadow-lg hover:shadow-emerald-500/10`}>
      <div className={`w-14 h-14 rounded-xl ${classes.iconBg} border flex items-center justify-center mb-6`}>
        <div className={classes.iconColor}>
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-3">
        {title}
      </h3>
      <p className="text-slate-400 leading-relaxed mb-6">
        {description}
      </p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-xl font-semibold hover:bg-emerald-400 transition-all shadow-md hover:shadow-lg hover:shadow-emerald-500/20"
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
    <section className="bg-slate-900 border-t border-white/5 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Essential Tools
          </h2>
          <p className="text-lg text-slate-400">
            The professional infrastructure required to run the system.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
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
            link="INSERT_NORDVPN_LINK"
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
