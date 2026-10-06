import React from 'react';
import { Home, AlertTriangle, Bell, LayoutGrid } from 'lucide-react';
import { PaymentCardIcon } from './PeaIcons';
import { Language, NavTab } from '../types';

interface BottomNavProps {
  currentTab: NavTab;
  onTabChange: (tab: NavTab) => void;
  language: Language;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentTab, onTabChange, language }) => {
  return (
    <div className="relative w-full select-none">
      {/* Decorative Golden Wave in bottom-right background (exact match with screenshot) */}
      <div className="absolute right-0 bottom-0 w-44 h-16 pointer-events-none overflow-hidden z-0">
        <svg
          viewBox="0 0 200 80"
          className="w-full h-full object-cover"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 80 Q 80 15, 200 10 L 200 80 Z"
            fill="#e59d18"
            opacity="0.95"
          />
        </svg>
      </div>

      {/* Main Bar Navigation Container */}
      <nav className="relative z-10 bg-white/95 backdrop-blur-md border-t border-[#ece6f2] shadow-[0_-4px_16px_rgba(0,0,0,0.05)] px-2 pt-1 pb-3">
        <div className="grid grid-cols-5 items-end justify-items-center max-w-lg mx-auto">
          {/* Tab 1: หน้าแรก (Home) */}
          <button
            onClick={() => onTabChange('home')}
            className={`flex flex-col items-center justify-center w-full py-1 transition-colors cursor-pointer ${
              currentTab === 'home' ? 'text-[#6a1a82]' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <Home className="w-5 h-5 stroke-[2.2]" />
            <span
              className={`text-[10.5px] mt-1 tracking-tight ${
                currentTab === 'home' ? 'font-bold text-[#6a1a82]' : 'font-medium'
              }`}
            >
              {language === 'th' ? 'หน้าแรก' : 'Home'}
            </span>
          </button>

          {/* Tab 2: ไฟฟ้าขัดข้อง (Power Outage) */}
          <button
            onClick={() => onTabChange('outage')}
            className={`flex flex-col items-center justify-center w-full py-1 transition-colors cursor-pointer ${
              currentTab === 'outage' ? 'text-[#6a1a82]' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <AlertTriangle className="w-5 h-5 stroke-[2.2]" />
            <span
              className={`text-[10.5px] mt-1 tracking-tight ${
                currentTab === 'outage' ? 'font-bold text-[#6a1a82]' : 'font-medium'
              }`}
            >
              {language === 'th' ? 'ไฟฟ้าขัดข้อง' : 'Outage'}
            </span>
          </button>

          {/* Tab 3: CENTER FLOATING ACTION BUTTON - ชำระเงิน (Pay Bill) */}
          <div className="relative -top-5 flex flex-col items-center justify-center">
            <button
              onClick={() => onTabChange('pay')}
              className="relative w-14 h-14 rounded-full bg-gradient-to-b from-[#761e94] via-[#65177f] to-[#4e1063] text-white flex items-center justify-center shadow-[0_6px_20px_rgba(106,26,130,0.38)] hover:shadow-[0_8px_24px_rgba(106,26,130,0.5)] border-[3.5px] border-white active:scale-95 transition-all duration-200 cursor-pointer group"
              aria-label={language === 'th' ? 'ชำระเงิน' : 'Pay Bill'}
            >
              <div className="transition-transform group-hover:scale-110">
                <PaymentCardIcon className="w-7 h-7 text-white" />
              </div>
            </button>
            <span
              className={`text-[10.5px] -mt-0.5 tracking-tight ${
                currentTab === 'pay' ? 'font-bold text-[#6a1a82]' : 'font-medium text-gray-500'
              }`}
            >
              {language === 'th' ? 'ชำระเงิน' : 'Payment'}
            </span>
          </div>

          {/* Tab 4: กล่องข้อความ (Inbox / Notifications) */}
          <button
            onClick={() => onTabChange('inbox')}
            className={`flex flex-col items-center justify-center w-full py-1 transition-colors cursor-pointer ${
              currentTab === 'inbox' ? 'text-[#6a1a82]' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <div className="relative">
              <Bell className="w-5 h-5 stroke-[2.2]" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </div>
            <span
              className={`text-[10.5px] mt-1 tracking-tight ${
                currentTab === 'inbox' ? 'font-bold text-[#6a1a82]' : 'font-medium'
              }`}
            >
              {language === 'th' ? 'กล่องข้อความ' : 'Inbox'}
            </span>
          </button>

          {/* Tab 5: อื่นๆ (More) */}
          <button
            onClick={() => onTabChange('more')}
            className={`flex flex-col items-center justify-center w-full py-1 transition-colors cursor-pointer ${
              currentTab === 'more' ? 'text-[#6a1a82]' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <LayoutGrid className="w-5 h-5 stroke-[2.2]" />
            <span
              className={`text-[10.5px] mt-1 tracking-tight ${
                currentTab === 'more' ? 'font-bold text-[#6a1a82]' : 'font-medium'
              }`}
            >
              {language === 'th' ? 'อื่นๆ' : 'More'}
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
};
