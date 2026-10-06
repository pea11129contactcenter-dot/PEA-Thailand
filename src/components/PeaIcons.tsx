import React from 'react';

/**
 * Authentic PEA SMART Plus Logo
 */
export const PeaLogo: React.FC<{ size?: 'sm' | 'md' | 'lg'; className?: string }> = ({
  size = 'md',
  className = '',
}) => {
  const dimensions =
    size === 'sm'
      ? 'h-7'
      : size === 'lg'
      ? 'h-11'
      : 'h-9';

  return (
    <div className={`flex items-center gap-1.5 select-none ${dimensions} ${className}`}>
      {/* PEA Emblem Seal */}
      <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-[#7d1c96] via-[#65157c] to-[#4c0e5e] p-[1.5px] shadow-sm flex items-center justify-center shrink-0">
        <div className="w-full h-full rounded-full bg-[#fbf9fe] flex items-center justify-center p-0.5 overflow-hidden">
          <svg viewBox="0 0 40 40" className="w-6 h-6 text-[#721a88]" fill="none" stroke="currentColor">
            {/* Traditional Thai Lotus & Lightning PEA motif */}
            <circle cx="20" cy="20" r="18" stroke="#721a88" strokeWidth="2" fill="#fff9ef" />
            <circle cx="20" cy="20" r="14.5" stroke="#e69c24" strokeWidth="1" strokeDasharray="2 1.5" />
            {/* Lotus Petals & Flame */}
            <path
              d="M20 7 C21.5 12, 24.5 15, 27 17 C24.5 19, 21.5 21, 20 25 C18.5 21, 15.5 19, 13 17 C15.5 15, 18.5 12, 20 7 Z"
              fill="#721a88"
            />
            <path
              d="M20 10 C18 13.5, 17 15, 17 17 C18.5 17, 19.5 16, 20 15 C20.5 16, 21.5 17, 23 17 C23 15, 22 13.5, 20 10 Z"
              fill="#f5a623"
            />
            {/* Lightning bolt inside lotus */}
            <path
              d="M20.5 16 L17.5 21 H21 L19 26 L23 19.5 H19.5 L20.5 16 Z"
              fill="#f5a623"
              stroke="#6b1480"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-0.5">
          <span className="font-extrabold tracking-tight text-[#6a1a82] text-sm">PEA</span>
          <span className="font-black text-[#58156e] text-sm">+</span>
        </div>
        <div className="flex items-center -mt-0.5">
          <span className="text-[7.5px] font-bold tracking-wider text-[#6a1a82] uppercase">SMART</span>
          <span className="text-[7.5px] font-medium text-[#e69c24] ml-0.5">plus</span>
        </div>
      </div>
    </div>
  );
};

/**
 * City & Home line illustration in PEA purple exactly from screenshot
 */
export const CityIllustration: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 240 100"
      className={`w-full max-w-[260px] mx-auto text-[#6a1a82] ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Ground baseline */}
      <line x1="15" y1="92" x2="225" y2="92" />

      {/* Left Tree */}
      <circle cx="28" cy="73" r="8" fill="#f5f3f8" />
      <line x1="28" y1="81" x2="28" y2="92" />

      {/* Small Residential House */}
      <path d="M42 92 V76 L56 65 L70 76 V92 Z" fill="#f5f3f8" />
      {/* House door */}
      <rect x="52" y="80" width="8" height="12" fill="#fff" />
      <circle cx="58" cy="86" r="0.8" fill="currentColor" />

      {/* Center Medium Building (3 floors) */}
      <rect x="80" y="38" width="32" height="54" fill="#f5f3f8" />
      {/* Building Windows */}
      <circle cx="88" cy="46" r="1.5" fill="currentColor" />
      <circle cx="96" cy="46" r="1.5" fill="currentColor" />
      <circle cx="104" cy="46" r="1.5" fill="currentColor" />
      <circle cx="88" cy="56" r="1.5" fill="currentColor" />
      <circle cx="96" cy="56" r="1.5" fill="currentColor" />
      <circle cx="104" cy="56" r="1.5" fill="currentColor" />
      <circle cx="88" cy="66" r="1.5" fill="currentColor" />
      <circle cx="96" cy="66" r="1.5" fill="currentColor" />
      <circle cx="104" cy="66" r="1.5" fill="currentColor" />
      {/* Door */}
      <rect x="89" y="78" width="10" height="14" fill="#fff" />

      {/* Low connector between buildings */}
      <path d="M112 58 H126 V92 H112 Z" fill="#f5f3f8" />
      <line x1="112" y1="68" x2="126" y2="68" strokeDasharray="1 3" />

      {/* Tall Right Building with Pitched/Angled Top */}
      <path d="M140 92 V36 L154 26 L168 36 V92 Z" fill="#f5f3f8" />
      {/* Square Grid Windows on Tall Building (4 rows x 3 columns) */}
      <rect x="145" y="44" width="4" height="4" />
      <rect x="152" y="44" width="4" height="4" />
      <rect x="159" y="44" width="4" height="4" />
      <rect x="145" y="54" width="4" height="4" />
      <rect x="152" y="54" width="4" height="4" />
      <rect x="159" y="54" width="4" height="4" />
      <rect x="145" y="64" width="4" height="4" />
      <rect x="152" y="64" width="4" height="4" />
      <rect x="159" y="64" width="4" height="4" />
      {/* Ground Door */}
      <rect x="150" y="80" width="8" height="12" fill="#fff" />

      {/* Right Tree */}
      <circle cx="188" cy="73" r="8" fill="#f5f3f8" />
      <line x1="188" y1="81" x2="188" y2="92" />
    </svg>
  );
};

/* --- 8 Service Grid Icons in authentic PEA purple style --- */

// 1. บริการอื่นๆ (Other Services) - 4 rounded squares
export const OtherServicesIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7 text-[#6a1a82]' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7.5" height="7.5" rx="2.5" />
    <rect x="13.5" y="3" width="7.5" height="7.5" rx="2.5" />
    <rect x="3" y="13.5" width="7.5" height="7.5" rx="2.5" />
    <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2.5" />
  </svg>
);

// 2. ค่าบริการอื่นๆ (Other Service Fees) - Square switch / breaker
export const OtherFeesIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7 text-[#6a1a82]' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3.5" y="3.5" width="17" height="17" rx="3.5" />
    <rect x="8.5" y="8" width="7" height="8" rx="1.5" />
    <line x1="12" y1="8" x2="12" y2="16" />
  </svg>
);

// 3. สถานที่รับชำระ (Payment Locations) - Payment Counter / Arch Booth
export const PaymentLocationIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7 text-[#6a1a82]' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    {/* Arch / Pagoda roof */}
    <path d="M5 20 V11 L12 5 L19 11 V20" />
    <line x1="3" y1="20" x2="21" y2="20" />
    <rect x="8.5" y="13" width="7" height="4" rx="1" fill="currentColor" fillOpacity="0.15" />
    <line x1="10" y1="15" x2="14" y2="15" />
  </svg>
);

// 4. WATT-D Point - Dashed circle with lightning bolt
export const WattDPointIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7 text-[#6a1a82]' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9.5" strokeDasharray="3 2.5" />
    <path
      d="M13 5 L8 12.5 H12.5 L11 19 L16 11.5 H11.5 L13 5 Z"
      fill="currentColor"
      stroke="none"
    />
  </svg>
);

// 5. คำนวณค่าไฟฟ้า (Calculate Bill) - Calculator with 4 buttons
export const CalculateBillIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7 text-[#6a1a82]' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="3" width="16" height="18" rx="3.5" />
    <rect x="7" y="6" width="10" height="3" rx="1" fill="currentColor" fillOpacity="0.2" />
    {/* 4 buttons */}
    <rect x="7" y="11" width="3.5" height="3" rx="0.8" />
    <rect x="13.5" y="11" width="3.5" height="3" rx="0.8" />
    <rect x="7" y="15.5" width="3.5" height="3" rx="0.8" />
    <rect x="13.5" y="15.5" width="3.5" height="3" rx="0.8" />
  </svg>
);

// 6. สมัคร E-Bill - Solid purple folded document
export const EBillIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7 text-[#6a1a82]' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M6 3 C4.895 3 4 3.895 4 5 V19 C4 20.105 4.895 21 6 21 H18 C19.105 21 20 20.105 20 19 V9.5 L13.5 3 H6 Z" />
    <path d="M13 3 V8 C13 8.552 13.448 9 14 9 H19 L13 3 Z" fill="#ffffff" fillOpacity="0.3" />
  </svg>
);

// 7. ข่าวสาร (News) - Newspaper / Bulletin
export const NewsIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7 text-[#6a1a82]' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="16" rx="3" />
    <rect x="5.5" y="7" width="5.5" height="5" rx="1" fill="currentColor" fillOpacity="0.15" />
    <line x1="13.5" y1="7" x2="18.5" y2="7" />
    <line x1="13.5" y1="10" x2="18.5" y2="10" />
    <line x1="6" y1="15" x2="18.5" y2="15" />
  </svg>
);

// 8. 1129 Call Center - Phone handset with 24 badge
export const CallCenterIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7 text-[#6a1a82]' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5.5 4 C5.5 4 6.5 6.5 7 7.5 L5.5 9 C6.8 11.8 9.2 14.2 12 15.5 L13.5 14 C14.5 14.5 17 15.5 17 15.5 V18.5 C17 19.5 15.5 20 14 20 C7 20 2 15 2 8 C2 6.5 2.5 5 3.5 5 H5.5 Z" />
    {/* 24 superscript text */}
    <text x="16" y="8" fontSize="7" fontWeight="bold" fill="currentColor" stroke="none" fontFamily="sans-serif">
      24
    </text>
  </svg>
);

/* --- 3 Banner Logos --- */

// E-SERVICE
export const EServiceBadge: React.FC = () => (
  <div className="flex flex-col items-center justify-center">
    <div className="flex items-center tracking-tight">
      <span className="font-black text-[#d62828] text-sm leading-none border-b-2 border-[#d62828] pb-0.5">E</span>
      <span className="text-[#333] font-bold text-xs ml-1">• SERVICE</span>
    </div>
    <span className="text-[10px] text-gray-500 font-normal mt-1">บริการออนไลน์</span>
  </div>
);

// PEA Shopping
export const PeaShoppingBadge: React.FC = () => (
  <div className="flex flex-col items-center justify-center">
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#6a1a82] mb-1" fill="none" stroke="currentColor" strokeWidth="2.2">
      <circle cx="9" cy="19" r="1.5" fill="currentColor" />
      <circle cx="17" cy="19" r="1.5" fill="currentColor" />
      <path d="M3 4 H5 L7.5 15 H18.5 L20.5 7 H6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <span className="text-xs font-semibold text-[#5a1870] leading-tight">PEA Shopping</span>
  </div>
);

// SOLAR Green Power By PEA
export const PeaSolarBadge: React.FC = () => (
  <div className="flex flex-col items-center justify-center">
    <span className="text-xs font-extrabold text-[#7a1818] tracking-wide leading-tight">SOLAR</span>
    <div className="flex items-center gap-1 mt-1">
      <span className="w-2 h-2 rounded-full bg-[#10b981] inline-block animate-pulse"></span>
      <span className="text-[8.5px] font-medium text-[#1e293b] whitespace-nowrap">Green Power By PEA</span>
    </div>
  </div>
);

/* --- Bottom Nav Floating Payment Icon --- */
export const PaymentCardIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6 text-white' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="3" />
    <line x1="2" y1="10" x2="22" y2="10" />
    <rect x="6" y="14" width="4" height="2" rx="0.5" fill="currentColor" />
  </svg>
);
