import React from 'react';
import { Plus, Zap, ChevronRight, Home, Building2, MapPin } from 'lucide-react';
import { CityIllustration } from './PeaIcons';
import { ElectricityLocation, Language } from '../types';

interface ElectricityCardProps {
  locations: ElectricityLocation[];
  activeLocationIndex: number;
  onSelectLocation: (index: number) => void;
  onAddLocation: () => void;
  onShowAll: () => void;
  onPayBill: (location: ElectricityLocation) => void;
  language: Language;
  showEmptyStateMock?: boolean;
}

export const ElectricityCard: React.FC<ElectricityCardProps> = ({
  locations,
  activeLocationIndex,
  onAddLocation,
  onShowAll,
  onPayBill,
  language,
  showEmptyStateMock = true,
}) => {
  const hasActiveLocation = !showEmptyStateMock && locations.length > 0;
  const currentLocation = locations[activeLocationIndex];

  return (
    <div className="relative px-4 pt-3 pb-6">
      {/* Main Container Card */}
      <div className="relative w-full rounded-[26px] bg-[#eeebf2] border border-[#e2dfe8] p-5 shadow-[0_4px_16px_rgba(106,26,130,0.04)] overflow-hidden transition-all duration-300">
        {!hasActiveLocation ? (
          /* EXACT SCREENSHOT VIEW: Line illustration with "+ เพิ่มสถานที่ใช้ไฟฟ้า" */
          <div className="flex flex-col items-center justify-center pt-2 pb-5">
            {/* Purple City & House Line Art */}
            <div className="w-full max-w-[280px] my-2 transition-transform hover:scale-[1.02] duration-300">
              <CityIllustration />
            </div>

            {/* "+ เพิ่มสถานที่ใช้ไฟฟ้า" Button */}
            <button
              onClick={onAddLocation}
              className="mt-3 inline-flex items-center gap-1.5 text-[#6a1a82] hover:text-[#551368] font-bold text-sm tracking-tight py-2 px-4 rounded-xl hover:bg-purple-100/40 active:scale-95 transition cursor-pointer"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              <span>{language === 'th' ? 'เพิ่มสถานที่ใช้ไฟฟ้า' : 'Add Electricity Location'}</span>
            </button>
          </div>
        ) : (
          /* ACTIVE ELECTRICITY LOCATION VIEW (Interactive feature) */
          <div className="flex flex-col gap-3 py-1">
            <div className="flex items-center justify-between border-b border-purple-200/50 pb-2.5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#6a1a82] text-white flex items-center justify-center shrink-0">
                  <Home className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#4a105c]">{currentLocation.name}</h4>
                  <p className="text-[11px] text-gray-500">CA: {currentLocation.caNumber}</p>
                </div>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 font-semibold border border-amber-200">
                {currentLocation.status === 'unpaid' ? (language === 'th' ? 'รอชำระ' : 'Unpaid') : (language === 'th' ? 'ชำระแล้ว' : 'Paid')}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 border border-purple-100">
                <span className="text-[11px] text-gray-500 block mb-0.5">
                  {language === 'th' ? 'ยอดที่ต้องชำระ' : 'Total Amount Due'}
                </span>
                <span className="text-xl font-extrabold text-[#6a1a82] leading-none">
                  ฿{currentLocation.amountDue.toLocaleString('th-TH', { minimumFractionDigits: 2 })}
                </span>
                <span className="text-[10px] text-gray-400 block mt-1">
                  {language === 'th' ? `ครบกำหนด ${currentLocation.dueDate}` : `Due ${currentLocation.dueDate}`}
                </span>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 border border-purple-100">
                <span className="text-[11px] text-gray-500 block mb-0.5">
                  {language === 'th' ? 'หน่วยไฟฟ้าที่ใช้' : 'Energy Consumption'}
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-extrabold text-gray-800 leading-none">
                    {currentLocation.currentUnits}
                  </span>
                  <span className="text-xs text-gray-500">{language === 'th' ? 'หน่วย' : 'kWh'}</span>
                </div>
                <span className="text-[10px] text-emerald-600 block mt-1 font-medium">
                  {language === 'th' ? 'เทียบเดือนก่อน -8.4%' : 'vs last mo -8.4%'}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-[11px] text-gray-500 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#6a1a82]" />
                {currentLocation.branch}
              </span>
              <button
                onClick={() => onPayBill(currentLocation)}
                className="px-4 py-1.5 rounded-full bg-[#6a1a82] hover:bg-[#58156e] text-white text-xs font-semibold shadow-sm transition active:scale-95 cursor-pointer"
              >
                {language === 'th' ? 'ชำระเงิน' : 'Pay Now'}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Pill Badge overlapping bottom border: "+ แสดงทั้งหมด" (Show all) */}
      <div className="absolute left-1/2 -bottom-0 -translate-x-1/2 translate-y-[-10px] z-10">
        <button
          onClick={onShowAll}
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-[#6a1a82] hover:text-[#521369] text-xs font-semibold shadow-[0_3px_10px_rgba(0,0,0,0.08)] border border-purple-100/90 active:scale-95 transition-all cursor-pointer group"
        >
          {/* Circular Purple Icon with Plus */}
          <div className="w-4 h-4 rounded-full bg-[#6a1a82] text-white flex items-center justify-center shrink-0 group-hover:bg-[#521369] transition-colors">
            <Plus className="w-3 h-3 stroke-[3]" />
          </div>
          <span>{language === 'th' ? 'แสดงทั้งหมด' : 'Show All'}</span>
        </button>
      </div>
    </div>
  );
};
