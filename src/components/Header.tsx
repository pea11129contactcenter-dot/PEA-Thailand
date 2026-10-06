import React from 'react';
import { User, Zap, Wifi, Signal, BatteryMedium } from 'lucide-react';
import { PeaLogo } from './PeaIcons';
import { Language } from '../types';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenProfile: () => void;
  onOpenPoint: () => void;
  userName?: string;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  onOpenProfile,
  onOpenPoint,
  userName,
}) => {
  return (
    <header className="w-full pt-1.5 pb-2 px-4 select-none">
      {/* Mobile OS Status Bar (00:34 and battery 98 matching screenshot) */}
      <div className="flex items-center justify-between text-xs text-gray-800 font-medium pb-2 pt-0.5 select-none">
        <span className="font-semibold text-[13.5px] tracking-tight ml-0.5">00:34</span>
        <div className="flex items-center gap-1.5 text-gray-800">
          {/* Signal bars */}
          <div className="flex items-end gap-[1.5px] h-3 mr-0.5">
            <span className="w-[2.5px] h-1.5 bg-gray-800 rounded-xs"></span>
            <span className="w-[2.5px] h-2 bg-gray-800 rounded-xs"></span>
            <span className="w-[2.5px] h-2.5 bg-gray-800 rounded-xs"></span>
            <span className="w-[2.5px] h-3 bg-gray-800 rounded-xs"></span>
          </div>
          {/* Wifi */}
          <Wifi className="w-3.5 h-3.5 stroke-[2.4]" />
          {/* Battery pill with '98' inside */}
          <div className="flex items-center">
            <div className="h-3.5 px-1 rounded-[5px] border border-gray-700 bg-gray-100 flex items-center justify-center">
              <span className="text-[9px] font-extrabold text-gray-800 leading-none">98</span>
            </div>
            <div className="w-[1.5px] h-1.5 bg-gray-600 rounded-r-xs -ml-[0.5px]"></div>
          </div>
        </div>
      </div>

      {/* Main App Bar */}
      <div className="flex items-center justify-between">
        {/* Left: User Avatar & Greeting */}
        <button
          onClick={onOpenProfile}
          className="flex items-center gap-2.5 group text-left cursor-pointer transition-transform active:scale-95"
          aria-label="ข้อมูลส่วนตัว"
        >
          {/* Circular Grey Avatar */}
          <div className="w-10 h-10 rounded-full bg-[#d2d4dc] flex items-center justify-center shrink-0 shadow-inner group-hover:bg-[#c2c5d1] transition-colors">
            <User className="w-6 h-6 text-[#7c8090]" strokeWidth={2.4} />
          </div>

          <div className="flex flex-col">
            <span className="text-[12.5px] text-[#717382] leading-tight font-normal">
              {language === 'th' ? 'สวัสดี' : 'Hello'}
            </span>
            <span className="text-[13px] font-semibold text-[#661882] group-hover:text-[#521369] transition-colors leading-tight">
              {userName || (language === 'th' ? 'ระบุข้อมูลส่วนตัว' : 'Set Profile Info')}
            </span>
          </div>
        </button>

        {/* Center: PEA SMART Plus Badge */}
        <div className="hidden sm:flex md:flex">
          <PeaLogo size="sm" />
        </div>

        {/* Right: Language switch & Watt-D Point Button */}
        <div className="flex items-center gap-2">
          {/* Language Switch: ไทย | Eng */}
          <div className="flex items-center text-xs">
            <button
              onClick={() => onLanguageChange('th')}
              className={`px-1 py-0.5 font-medium transition-colors cursor-pointer ${
                language === 'th'
                  ? 'text-[#661882] font-bold'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              ไทย
            </button>
            <span className="text-gray-300 mx-0.5 text-xs">|</span>
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-1 py-0.5 font-medium transition-colors cursor-pointer ${
                language === 'en'
                  ? 'text-[#661882] font-bold'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              Eng
            </button>
          </div>

          {/* ⚡ สมัคร Point / WATT-D Point Pill Button */}
          <button
            onClick={onOpenPoint}
            className="flex items-center gap-1.5 pl-1.5 pr-3 py-1 rounded-full bg-gradient-to-r from-[#f59e0b] via-[#ea8c05] to-[#df7f00] text-white shadow-sm hover:shadow transition-all active:scale-95 cursor-pointer"
          >
            {/* Dark purple circular lightning bolt */}
            <div className="w-5 h-5 rounded-full bg-[#641880] flex items-center justify-center shrink-0">
              <Zap className="w-3 h-3 text-amber-300 fill-amber-300" />
            </div>
            <span className="text-xs font-bold tracking-tight">
              {language === 'th' ? 'สมัคร Point' : 'Get Points'}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
