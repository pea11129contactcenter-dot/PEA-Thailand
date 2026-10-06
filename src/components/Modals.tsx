import React, { useState } from 'react';
import {
  X,
  Phone,
  Calculator,
  QrCode,
  Zap,
  CheckCircle2,
  FileText,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  Building,
  CreditCard,
  Plus,
  Send,
  HelpCircle,
  Sparkles,
} from 'lucide-react';
import { PeaLogo } from './PeaIcons';
import { ElectricityLocation, Language, ServiceModalType } from '../types';

import { OtherServicesModalView } from './OtherServicesModalView';

interface ModalsProps {
  modalType: ServiceModalType['type'];
  onClose: () => void;
  language: Language;
  locations: ElectricityLocation[];
  activeLocationIndex: number;
  onSelectLocation: (index: number) => void;
  onAddLocationSuccess: (newLocation: ElectricityLocation) => void;
  userProfile: { name: string; phone: string; email: string; points: number };
  onUpdateProfile: (name: string, phone: string, email: string) => void;
  onOpenEditHistory?: () => void;
}

export const Modals: React.FC<ModalsProps> = ({
  modalType,
  onClose,
  language,
  locations,
  activeLocationIndex,
  onSelectLocation,
  onAddLocationSuccess,
  userProfile,
  onUpdateProfile,
  onOpenEditHistory,
}) => {
  if (!modalType) return null;

  // Custom modal for 'other-services' matching image.png 100%
  if (modalType === 'other-services') {
    return (
      <div
        className="absolute inset-0 z-40 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-[1px] animate-in fade-in duration-200"
        onClick={onClose}
      >
        <div onClick={(e) => e.stopPropagation()} className="w-full flex justify-center">
          <OtherServicesModalView
            onClose={onClose}
            language={language}
            onOpenEditHistory={onOpenEditHistory}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-40 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="w-full max-w-md bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[90vh] flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-[#faf8fc]">
          <div className="flex items-center gap-2">
            <PeaLogo size="sm" />
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              PEA Service
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content Router */}
        <div className="p-5 overflow-y-auto custom-scrollbar flex-1">
          {modalType === 'calculator' && <TariffCalculatorModal language={language} />}
          {modalType === '1129' && <CallCenterModal language={language} />}
          {modalType === 'watt-d-point' && (
            <WattDPointModal points={userProfile.points} language={language} />
          )}
          {modalType === 'e-bill' && <EBillModal language={language} />}
          {modalType === 'payment-locations' && <PaymentLocationsModal language={language} />}
          {modalType === 'news' && <NewsModal language={language} />}
          {modalType === 'other-fees' && <OtherFeesModal language={language} />}
          {modalType === 'e-service' && <EServicePortalModal language={language} />}
          {modalType === 'pea-shopping' && <PeaShoppingModal language={language} />}
          {modalType === 'solar' && <SolarModal language={language} />}
          {modalType === 'add-location' && (
            <AddLocationModal
              language={language}
              onSuccess={(loc) => {
                onAddLocationSuccess(loc);
                onClose();
              }}
            />
          )}
          {modalType === 'all-locations' && (
            <AllLocationsModal
              locations={locations}
              activeLocationIndex={activeLocationIndex}
              onSelect={(idx) => {
                onSelectLocation(idx);
                onClose();
              }}
              language={language}
            />
          )}
          {modalType === 'profile' && (
            <ProfileModal
              profile={userProfile}
              onSave={(name, phone, email) => {
                onUpdateProfile(name, phone, email);
                onClose();
              }}
              language={language}
            />
          )}
          {modalType === 'pay-bill' && (
            <PayBillModal
              location={locations[activeLocationIndex] || locations[0]}
              language={language}
              onSuccess={onClose}
            />
          )}
        </div>
      </div>
    </div>
  );
};

/* --- 1. Tariff Calculator (คำนวณค่าไฟฟ้าแบบแม่นยำตามอัตรา PEA) --- */
const TariffCalculatorModal: React.FC<{ language: Language }> = ({ language }) => {
  const [units, setUnits] = useState<number>(250);
  const [rateType, setRateType] = useState<'1.1' | '1.2'>('1.2');

  // PEA Residential Tariff Calculation (สูตรจริง)
  const calculateBill = (u: number, type: '1.1' | '1.2') => {
    let energyBase = 0;
    const ftRate = 0.3972; // บาท/หน่วย (Ft รอบปัจจุบัน)
    let serviceFee = type === '1.1' ? 8.19 : 24.62;

    if (type === '1.1') {
      // อัตรา 1.1 ไม่เกิน 150 หน่วย
      if (u <= 15) energyBase = u * 2.3488;
      else if (u <= 25) energyBase = 15 * 2.3488 + (u - 15) * 2.9882;
      else if (u <= 35) energyBase = 15 * 2.3488 + 10 * 2.9882 + (u - 25) * 3.2405;
      else if (u <= 100) energyBase = 15 * 2.3488 + 10 * 2.9882 + 10 * 3.2405 + (u - 35) * 3.6237;
      else if (u <= 150)
        energyBase =
          15 * 2.3488 + 10 * 2.9882 + 10 * 3.2405 + 65 * 3.6237 + (u - 100) * 3.7171;
      else
        energyBase =
          15 * 2.3488 +
          10 * 2.9882 +
          10 * 3.2405 +
          65 * 3.6237 +
          50 * 3.7171 +
          (u - 150) * 4.2218;
    } else {
      // อัตรา 1.2 เกิน 150 หน่วย
      if (u <= 150) energyBase = u * 3.2484;
      else if (u <= 400) energyBase = 150 * 3.2484 + (u - 150) * 4.2218;
      else energyBase = 150 * 3.2484 + 250 * 4.2218 + (u - 400) * 4.4217;
    }

    const ftTotal = u * ftRate;
    const subtotal = energyBase + serviceFee + ftTotal;
    const vat = subtotal * 0.07;
    const total = subtotal + vat;

    return {
      energyBase: Math.max(0, energyBase),
      serviceFee,
      ftTotal: Math.max(0, ftTotal),
      vat: Math.max(0, vat),
      total: Math.max(0, total),
    };
  };

  const bill = calculateBill(Number(units) || 0, rateType);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-[#6a1a82]">
        <Calculator className="w-5 h-5" />
        <h3 className="font-bold text-base">
          {language === 'th' ? 'คำนวณค่าไฟฟ้า (PEA Tariff)' : 'Electricity Bill Calculator'}
        </h3>
      </div>

      <p className="text-xs text-gray-500">
        {language === 'th'
          ? 'คำนวณตามอัตราค่าไฟฟ้าประเภทบ้านอยู่อาศัย รวมค่าบริการ ค่า Ft และภาษีมูลค่าเพิ่ม 7%'
          : 'Estimated residential tariff including service fee, variable Ft, and 7% VAT.'}
      </p>

      {/* Tariff Type Selection */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-gray-700">
          {language === 'th' ? 'ประเภทผู้ใช้ไฟฟ้า' : 'Tariff Category'}
        </label>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => setRateType('1.2')}
            className={`p-2.5 rounded-xl text-left border text-xs transition cursor-pointer ${
              rateType === '1.2'
                ? 'border-[#6a1a82] bg-purple-50/50 text-[#6a1a82] font-bold'
                : 'border-gray-200 text-gray-600 hover:border-gray-300'
            }`}
          >
            <span className="block font-semibold">1.2 อัตราปกติ</span>
            <span className="text-[10px] text-gray-500 font-normal">ใช้ไฟฟ้าเกิน 150 หน่วย</span>
          </button>
          <button
            onClick={() => setRateType('1.1')}
            className={`p-2.5 rounded-xl text-left border text-xs transition cursor-pointer ${
              rateType === '1.1'
                ? 'border-[#6a1a82] bg-purple-50/50 text-[#6a1a82] font-bold'
                : 'border-gray-200 text-gray-600 hover:border-gray-300'
            }`}
          >
            <span className="block font-semibold">1.1 อัตราปกติ</span>
            <span className="text-[10px] text-gray-500 font-normal">ไม่เกิน 150 หน่วย</span>
          </button>
        </div>
      </div>

      {/* Units Input */}
      <div>
        <label className="text-xs font-semibold text-gray-700 block mb-1">
          {language === 'th' ? 'จำนวนหน่วยไฟฟ้าที่ใช้ (kWh)' : 'Energy Consumption (kWh)'}
        </label>
        <div className="relative">
          <input
            type="number"
            min="0"
            max="10000"
            value={units}
            onChange={(e) => setUnits(Math.max(0, Number(e.target.value)))}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#6a1a82] focus:ring-1 focus:ring-[#6a1a82] text-lg font-bold text-gray-800 pr-16 outline-none"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-400">
            {language === 'th' ? 'หน่วย' : 'Units'}
          </span>
        </div>
      </div>

      {/* Quick Units Presets */}
      <div className="flex gap-1.5 overflow-x-auto pb-1">
        {[100, 150, 250, 350, 500].map((preset) => (
          <button
            key={preset}
            onClick={() => setUnits(preset)}
            className="px-2.5 py-1 rounded-lg bg-gray-100 hover:bg-purple-100 text-[11px] font-medium text-gray-700 transition cursor-pointer"
          >
            {preset} หน่วย
          </button>
        ))}
      </div>

      {/* Calculation Summary Card */}
      <div className="bg-[#f8f6fb] rounded-2xl p-4 border border-[#eee8f5] space-y-2">
        <div className="flex justify-between text-xs text-gray-600">
          <span>{language === 'th' ? 'ค่าพลังงานไฟฟ้าฐาน' : 'Base Energy Charge'}</span>
          <span className="font-medium">฿{bill.energyBase.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-xs text-gray-600">
          <span>{language === 'th' ? 'ค่าบริการรายเดือน' : 'Service Fee'}</span>
          <span className="font-medium">฿{bill.serviceFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-xs text-gray-600">
          <span>{language === 'th' ? 'ค่า Ft (0.3972 บ./หน่วย)' : 'Ft Charge'}</span>
          <span className="font-medium">฿{bill.ftTotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-xs text-gray-600">
          <span>{language === 'th' ? 'ภาษีมูลค่าเพิ่ม (VAT 7%)' : 'VAT 7%'}</span>
          <span className="font-medium">฿{bill.vat.toFixed(2)}</span>
        </div>
        <div className="border-t border-purple-200 pt-2 flex justify-between items-baseline">
          <span className="font-bold text-sm text-[#4c105e]">
            {language === 'th' ? 'รวมค่าไฟฟ้าประมาณการ' : 'Estimated Total'}
          </span>
          <span className="text-xl font-extrabold text-[#6a1a82]">
            ฿{bill.total.toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
        </div>
      </div>
    </div>
  );
};

/* --- 2. Call Center 1129 Modal --- */
const CallCenterModal: React.FC<{ language: Language }> = ({ language }) => {
  return (
    <div className="space-y-4">
      <div className="text-center py-2">
        <div className="w-16 h-16 rounded-full bg-purple-100 text-[#6a1a82] mx-auto flex items-center justify-center mb-3">
          <Phone className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-bold text-gray-900">PEA Contact Center 1129</h3>
        <p className="text-xs text-gray-500 mt-1">
          {language === 'th'
            ? 'ศูนย์บริการข้อมูลผู้ใช้ไฟฟ้า การไฟฟ้าส่วนภูมิภาค ตลอด 24 ชั่วโมง'
            : '24-hour Provincial Electricity Authority Call Center'}
        </p>
      </div>

      {/* Call button */}
      <a
        href="tel:1129"
        className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#6a1a82] hover:bg-[#541369] text-white font-bold text-sm shadow-md transition active:scale-95 text-center cursor-pointer"
      >
        <Phone className="w-4 h-4" />
        <span>{language === 'th' ? 'โทรออก 1129 (โทรฟรีในเครือข่าย)' : 'Call 1129 Hotline'}</span>
      </a>

      {/* Quick Channels */}
      <div className="space-y-2 pt-2">
        <span className="text-xs font-semibold text-gray-600 block">
          {language === 'th' ? 'ช่องทางติดต่ออื่นๆ' : 'Alternative Channels'}
        </span>

        <div className="p-3 rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#06c755] text-white flex items-center justify-center font-bold text-xs">
              LINE
            </div>
            <div>
              <span className="text-xs font-bold text-gray-800 block">@PEAThailand</span>
              <span className="text-[10px] text-gray-500">LINE Official Account</span>
            </div>
          </div>
          <span className="text-xs text-[#6a1a82] font-semibold">แอดไลน์</span>
        </div>

        <div className="p-3 rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#1877f2] text-white flex items-center justify-center font-bold text-xs">
              f
            </div>
            <div>
              <span className="text-xs font-bold text-gray-800 block">การไฟฟ้าส่วนภูมิภาค PEA</span>
              <span className="text-[10px] text-gray-500">Facebook Page</span>
            </div>
          </div>
          <span className="text-xs text-[#6a1a82] font-semibold">ติดตาม</span>
        </div>
      </div>
    </div>
  );
};

/* --- 3. WATT-D Point Modal --- */
const WattDPointModal: React.FC<{ points: number; language: Language }> = ({ points, language }) => {
  return (
    <div className="space-y-4">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#6a1a82] via-[#8522a3] to-[#e67e22] text-white p-4 rounded-2xl relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-amber-300 fill-amber-300" />
            <span className="text-xs font-semibold tracking-wider uppercase opacity-90">
              WATT-D Point
            </span>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold">{points}</span>
            <span className="text-xs opacity-90">{language === 'th' ? 'คะแนนสะสม' : 'Points'}</span>
          </div>
          <p className="text-[11px] opacity-80 mt-1">
            {language === 'th'
              ? 'คะแนนสะสมจากการชำระค่าไฟตรงเวลา และใช้บริการออนไลน์'
              : 'Earn points by paying on time and using digital services'}
          </p>
        </div>
      </div>

      {/* Rewards Catalog */}
      <div className="space-y-2">
        <h4 className="text-xs font-bold text-gray-700">
          {language === 'th' ? 'สิทธิพิเศษแลกคะแนน' : 'Redeem Privileges'}
        </h4>

        <div className="p-3 rounded-xl border border-purple-100 bg-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#6a1a82] flex items-center justify-center font-bold text-xs">
              ฿100
            </div>
            <div>
              <span className="text-xs font-bold text-gray-800 block">
                {language === 'th' ? 'ส่วนลดค่าไฟฟ้า 100 บาท' : '100 THB Electricity Discount'}
              </span>
              <span className="text-[10px] text-gray-500">ใช้ 100 WATT-D Points</span>
            </div>
          </div>
          <button className="px-3 py-1.5 rounded-full bg-[#6a1a82] text-white text-xs font-semibold cursor-pointer active:scale-95">
            {language === 'th' ? 'แลกสิทธิ์' : 'Redeem'}
          </button>
        </div>

        <div className="p-3 rounded-xl border border-purple-100 bg-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-xs">
              ☕
            </div>
            <div>
              <span className="text-xs font-bold text-gray-800 block">
                {language === 'th' ? 'คูปองเครื่องดื่ม Café Amazon' : 'Coffee Voucher'}
              </span>
              <span className="text-[10px] text-gray-500">ใช้ 50 WATT-D Points</span>
            </div>
          </div>
          <button className="px-3 py-1.5 rounded-full bg-[#6a1a82] text-white text-xs font-semibold cursor-pointer active:scale-95">
            {language === 'th' ? 'แลกสิทธิ์' : 'Redeem'}
          </button>
        </div>
      </div>
    </div>
  );
};

/* --- 4. E-Bill Modal --- */
const EBillModal: React.FC<{ language: Language }> = ({ language }) => {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="space-y-4">
      <div className="text-center py-1">
        <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center mb-2">
          <FileText className="w-7 h-7" />
        </div>
        <h3 className="text-base font-bold text-gray-900">
          {language === 'th' ? 'สมัครบริการ PEA E-Bill' : 'PEA E-Bill Registration'}
        </h3>
        <p className="text-xs text-gray-500 mt-1">
          {language === 'th'
            ? 'รับใบแจ้งค่าไฟฟ้าและใบเสร็จรับเงินทาง SMS และ Email สะดวก รวดเร็ว รักษ์โลก'
            : 'Receive electricity bill & tax invoice via SMS and Email instantly'}
        </p>
      </div>

      {!subscribed ? (
        <div className="space-y-3">
          <div className="bg-[#f7f6f9] p-3 rounded-xl space-y-1.5">
            <span className="text-xs font-semibold text-gray-700 block">ข้อดีของ E-Bill:</span>
            <ul className="text-[11px] text-gray-600 space-y-1 list-disc list-inside">
              <li>ได้รับใบแจ้งค่าไฟเร็วกว่าทางไปรษณีย์</li>
              <li>ตรวจสอบและชำระเงินผ่านแอปได้ทันที</li>
              <li>ลดการใช้กระดาษ ช่วยลดโลกร้อน</li>
              <li>รับคะแนน WATT-D Point พิเศษ 50 คะแนน</li>
            </ul>
          </div>

          <button
            onClick={() => setSubscribed(true)}
            className="w-full py-3 rounded-xl bg-[#6a1a82] hover:bg-[#541369] text-white font-bold text-xs transition cursor-pointer"
          >
            {language === 'th' ? 'ยืนยันการสมัคร E-Bill' : 'Confirm Subscription'}
          </button>
        </div>
      ) : (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center space-y-2">
          <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
          <h4 className="font-bold text-emerald-900 text-sm">
            {language === 'th' ? 'สมัคร E-Bill สำเร็จแล้ว!' : 'Subscribed Successfully!'}
          </h4>
          <p className="text-xs text-emerald-700">
            {language === 'th'
              ? 'ระบบจะส่งใบแจ้งค่าไฟฟ้าในรอบบิลถัดไปผ่านทาง SMS และ Email'
              : 'You will receive your upcoming bills via SMS & Email.'}
          </p>
        </div>
      )}
    </div>
  );
};

/* --- 5. Payment Locations Modal --- */
const PaymentLocationsModal: React.FC<{ language: Language }> = ({ language }) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-[#6a1a82]">
        <MapPin className="w-5 h-5" />
        <h3 className="font-bold text-base">
          {language === 'th' ? 'สถานที่รับชำระค่าไฟฟ้า' : 'Payment Locations'}
        </h3>
      </div>

      <div className="space-y-2">
        <div className="p-3 rounded-xl border border-gray-100 hover:border-purple-200 transition bg-white shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-gray-800">
              สำนักงานการไฟฟ้าส่วนภูมิภาค (PEA)
            </span>
            <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">
              ฟรีค่าธรรมเนียม
            </span>
          </div>
          <p className="text-[11px] text-gray-500 mt-1">เปิดบริการ จันทร์ - ศุกร์ 08.30 - 15.30 น.</p>
        </div>

        <div className="p-3 rounded-xl border border-gray-100 hover:border-purple-200 transition bg-white shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-gray-800">Counter Service / 7-Eleven</span>
            <span className="text-[10px] text-gray-500">24 ชม.</span>
          </div>
          <p className="text-[11px] text-gray-500 mt-1">ชำระด้วยบาร์โค้ดหรือแจ้งหมายเลข CA</p>
        </div>

        <div className="p-3 rounded-xl border border-gray-100 hover:border-purple-200 transition bg-white shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-gray-800">Mobile Banking ทุกธนาคาร</span>
            <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">
              สแกน QR ฟรี
            </span>
          </div>
          <p className="text-[11px] text-gray-500 mt-1">K PLUS, SCB EASY, Krungthai NEXT, ฯลฯ</p>
        </div>
      </div>
    </div>
  );
};

/* --- 6. News Modal --- */
const NewsModal: React.FC<{ language: Language }> = ({ language }) => {
  const news = [
    {
      title: 'PEA แจ้งมาตรการส่วนลดและสิทธิประโยชน์ค่าไฟฟ้าปี 2569',
      date: '02 ต.ค. 2569',
      tag: 'ข่าวประชาสัมพันธ์',
    },
    {
      title: 'ประกาศแผนดับไฟเพื่อปรับปรุงพัฒนาระบบจ่ายกระแสไฟฟ้า',
      date: '28 ก.ย. 2569',
      tag: 'แผนดับไฟ',
    },
    {
      title: 'วิธีใช้เครื่องใช้ไฟฟ้าช่วงฤดูร้อนให้ประหยัดพลังงานสูงสุด',
      date: '20 ก.ย. 2569',
      tag: 'สาระน่ารู้',
    },
  ];

  return (
    <div className="space-y-3">
      <h3 className="font-bold text-base text-gray-900">
        {language === 'th' ? 'ข่าวสารและประกาศ PEA' : 'News & Announcements'}
      </h3>
      <div className="space-y-2">
        {news.map((item, idx) => (
          <div
            key={idx}
            className="p-3 rounded-xl border border-gray-100 bg-[#fbfafc] hover:bg-white hover:border-purple-200 transition space-y-1"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-[#6a1a82] bg-purple-50 px-2 py-0.5 rounded-full">
                {item.tag}
              </span>
              <span className="text-[10px] text-gray-400">{item.date}</span>
            </div>
            <h4 className="text-xs font-semibold text-gray-800">{item.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

/* --- 7. Other Fees Modal --- */
const OtherFeesModal: React.FC<{ language: Language }> = ({ language }) => {
  return (
    <div className="space-y-3">
      <h3 className="font-bold text-base text-gray-900">
        {language === 'th' ? 'ค่าบริการอื่นๆ' : 'Other Service Fees'}
      </h3>
      <div className="space-y-2 text-xs">
        <div className="p-3 rounded-xl border border-gray-100 bg-white flex justify-between items-center">
          <div>
            <span className="font-bold block text-gray-800">ค่าต่อไฟฟ้ากลับ (Reconnection)</span>
            <span className="text-[10px] text-gray-500">กรณีถูกงดจ่ายไฟ</span>
          </div>
          <span className="font-bold text-[#6a1a82]">107.00 ฿</span>
        </div>
        <div className="p-3 rounded-xl border border-gray-100 bg-white flex justify-between items-center">
          <div>
            <span className="font-bold block text-gray-800">ค่าตรวจสอบระบบบริภัณฑ์ไฟฟ้า</span>
            <span className="text-[10px] text-gray-500">มาตรฐานความปลอดภัย PEA</span>
          </div>
          <span className="font-bold text-[#6a1a82]">535.00 ฿</span>
        </div>
      </div>
    </div>
  );
};

/* --- 9. E-Service Portal Modal --- */
const EServicePortalModal: React.FC<{ language: Language }> = ({ language }) => {
  return (
    <div className="space-y-3 text-center py-2">
      <div className="w-12 h-12 rounded-full bg-purple-100 text-[#6a1a82] mx-auto flex items-center justify-center">
        <Sparkles className="w-6 h-6" />
      </div>
      <h3 className="font-bold text-base text-gray-900">PEA E-Service Platform</h3>
      <p className="text-xs text-gray-500">
        {language === 'th'
          ? 'ศูนย์รวมบริการภาครัฐอิเล็กทรอนิกส์ด้านพลังงานไฟฟ้า สะดวก ครบ จบในที่เดียว'
          : 'Unified PEA Digital Public Service Portal'}
      </p>
      <div className="pt-2">
        <button className="w-full py-2.5 rounded-xl bg-[#6a1a82] text-white text-xs font-bold">
          เข้าสู่ระบบ PEA E-Service
        </button>
      </div>
    </div>
  );
};

/* --- 10. PEA Shopping Modal --- */
const PeaShoppingModal: React.FC<{ language: Language }> = ({ language }) => {
  return (
    <div className="space-y-3 text-center py-2">
      <div className="w-12 h-12 rounded-full bg-purple-100 text-[#6a1a82] mx-auto flex items-center justify-center">
        <Zap className="w-6 h-6" />
      </div>
      <h3 className="font-bold text-base text-gray-900">PEA Shopping Mall</h3>
      <p className="text-xs text-gray-500">
        อุปกรณ์ไฟฟ้าประหยัดพลังงาน หลอด LED โซลาร์เซลล์ เครื่องชาร์จ EV Charger มาตรฐานการไฟฟ้า
      </p>
      <div className="pt-2">
        <button className="w-full py-2.5 rounded-xl bg-[#6a1a82] text-white text-xs font-bold">
          เลือกชมสินค้า PEA
        </button>
      </div>
    </div>
  );
};

/* --- 11. SOLAR Green Power Modal --- */
const SolarModal: React.FC<{ language: Language }> = ({ language }) => {
  return (
    <div className="space-y-3 py-1">
      <div className="bg-gradient-to-r from-emerald-600 to-[#6a1a82] text-white p-4 rounded-2xl">
        <h4 className="font-extrabold text-sm">PEA SOLAR Rooftop</h4>
        <p className="text-xs opacity-90 mt-1">
          ติดตั้งแผงโซลาร์เซลล์โดยวิศวกรผู้เชี่ยวชาญจาก PEA ประหยัดค่าไฟได้สูงสุด 70%
        </p>
      </div>
      <div className="space-y-2 text-xs">
        <div className="p-3 border rounded-xl flex justify-between items-center">
          <div>
            <span className="font-bold block">แพ็กเกจ 3 kWp (ประหยัด ~1,800 บ./ด.)</span>
            <span className="text-[10px] text-gray-500">เหมาะสำหรับบ้านใช้ไฟ 3,000-5,000 บ.</span>
          </div>
          <span className="font-bold text-[#6a1a82]">เริ่มต้น 129,000 ฿</span>
        </div>
      </div>
    </div>
  );
};

/* --- 12. Add Location Modal --- */
const AddLocationModal: React.FC<{
  language: Language;
  onSuccess: (newLocation: ElectricityLocation) => void;
}> = ({ language, onSuccess }) => {
  const [ca, setCa] = useState('020019283741');
  const [name, setName] = useState('บ้านของฉัน');
  const [branch, setBranch] = useState('กฟภ. สาขาเชียงใหม่');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ca) return;

    const newLoc: ElectricityLocation = {
      id: `loc-${Date.now()}`,
      name: name || 'สถานที่ใหม่',
      caNumber: ca,
      accountNumber: '1102938475',
      address: 'ตำบลสุเทพ อำเภอเมือง จังหวัดเชียงใหม่ 50200',
      branch: branch,
      meterNumber: 'M-77291',
      currentUnits: 342,
      lastMonthUnits: 374,
      amountDue: 1425.8,
      dueDate: '15 ต.ค. 2569',
      status: 'unpaid',
      tariffType: '1.2 บ้านอยู่อาศัย เกิน 150 หน่วย',
    };
    onSuccess(newLoc);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center gap-2 text-[#6a1a82]">
        <Plus className="w-5 h-5" />
        <h3 className="font-bold text-base">
          {language === 'th' ? 'เพิ่มสถานที่ใช้ไฟฟ้า' : 'Add Electricity Location'}
        </h3>
      </div>

      <div className="space-y-3">
        <div>
          <label className="text-xs font-semibold text-gray-700 block mb-1">
            {language === 'th' ? 'หมายเลขผู้ใช้ไฟฟ้า (CA 12 หลัก)' : 'CA Number (12 Digits)'}
          </label>
          <input
            type="text"
            required
            value={ca}
            onChange={(e) => setCa(e.target.value)}
            placeholder="0200xxxxxxxx"
            className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm font-semibold outline-none focus:border-[#6a1a82]"
          />
          <span className="text-[10px] text-gray-400 mt-0.5 block">
            ดูได้จากหัวบิลค่าไฟฟ้า หรือใบแจ้งหนี้ PEA
          </span>
        </div>

        <div>
          <label className="text-xs font-semibold text-gray-700 block mb-1">
            {language === 'th' ? 'ชื่อเรียกสถานที่' : 'Location Nickname'}
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="เช่น บ้านพัก, คอนโด, สำนักงาน"
            className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#6a1a82]"
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-gray-700 block mb-1">
            {language === 'th' ? 'สาขาการไฟฟ้าส่วนภูมิภาค' : 'PEA Branch'}
          </label>
          <input
            type="text"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#6a1a82]"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3 rounded-xl bg-[#6a1a82] hover:bg-[#541369] text-white font-bold text-xs transition cursor-pointer"
      >
        {language === 'th' ? 'บันทึกสถานที่ใช้ไฟฟ้า' : 'Save Location'}
      </button>
    </form>
  );
};

/* --- 13. All Locations Modal --- */
const AllLocationsModal: React.FC<{
  locations: ElectricityLocation[];
  activeLocationIndex: number;
  onSelect: (index: number) => void;
  language: Language;
}> = ({ locations, activeLocationIndex, onSelect, language }) => {
  return (
    <div className="space-y-3">
      <h3 className="font-bold text-base text-gray-900">
        {language === 'th' ? 'สถานที่ใช้ไฟฟ้าทั้งหมด' : 'All Electricity Locations'}
      </h3>
      <div className="space-y-2">
        {locations.map((loc, idx) => (
          <button
            key={loc.id}
            onClick={() => onSelect(idx)}
            className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition cursor-pointer ${
              idx === activeLocationIndex
                ? 'border-[#6a1a82] bg-purple-50/50'
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
          >
            <div>
              <span className="font-bold text-xs text-gray-900 block">{loc.name}</span>
              <span className="text-[11px] text-gray-500 block">CA: {loc.caNumber}</span>
              <span className="text-[10px] text-gray-400 block">{loc.branch}</span>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-[#6a1a82] block">
                ฿{loc.amountDue.toFixed(2)}
              </span>
              <span className="text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full inline-block mt-0.5">
                {loc.status === 'unpaid' ? 'รอชำระ' : 'ชำระแล้ว'}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

/* --- 14. Profile Modal --- */
const ProfileModal: React.FC<{
  profile: { name: string; phone: string; email: string; points: number };
  onSave: (name: string, phone: string, email: string) => void;
  language: Language;
}> = ({ profile, onSave, language }) => {
  const [name, setName] = useState(profile.name || 'สมชาย มั่นคง');
  const [phone, setPhone] = useState(profile.phone || '081-234-5678');
  const [email, setEmail] = useState(profile.email || 'somchai.m@example.com');

  return (
    <div className="space-y-4">
      <h3 className="font-bold text-base text-gray-900">
        {language === 'th' ? 'ข้อมูลส่วนตัวผู้ใช้ไฟฟ้า' : 'User Profile'}
      </h3>

      <div className="space-y-3">
        <div>
          <label className="text-xs font-semibold text-gray-700 block mb-1">
            {language === 'th' ? 'ชื่อ-นามสกุล' : 'Full Name'}
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#6a1a82]"
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-gray-700 block mb-1">
            {language === 'th' ? 'เบอร์โทรศัพท์' : 'Phone Number'}
          </label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#6a1a82]"
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-gray-700 block mb-1">
            {language === 'th' ? 'อีเมลสำหรับรับใบเสร็จ' : 'Email Address'}
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#6a1a82]"
          />
        </div>
      </div>

      <button
        onClick={() => onSave(name, phone, email)}
        className="w-full py-3 rounded-xl bg-[#6a1a82] text-white font-bold text-xs cursor-pointer hover:bg-[#541369] transition"
      >
        {language === 'th' ? 'บันทึกข้อมูล' : 'Save Changes'}
      </button>
    </div>
  );
};

/* --- 15. Pay Bill Modal (Triggered by center Floating button or Card) --- */
const PayBillModal: React.FC<{
  location?: ElectricityLocation;
  language: Language;
  onSuccess: () => void;
}> = ({ location, language, onSuccess }) => {
  const [paid, setPaid] = useState(false);
  const amount = location?.amountDue || 1425.8;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-[#6a1a82]">
        <CreditCard className="w-5 h-5" />
        <h3 className="font-bold text-base">
          {language === 'th' ? 'ชำระค่าไฟฟ้า (PEA Quick Pay)' : 'Pay Electricity Bill'}
        </h3>
      </div>

      {!paid ? (
        <div className="space-y-4">
          {/* Bill Overview */}
          <div className="bg-[#f9f7fb] p-3.5 rounded-2xl border border-purple-100 flex justify-between items-center">
            <div>
              <span className="text-xs font-bold text-gray-800 block">
                {location?.name || 'บ้านของฉัน'}
              </span>
              <span className="text-[11px] text-gray-500">
                CA: {location?.caNumber || '020019283741'}
              </span>
            </div>
            <div className="text-right">
              <span className="text-lg font-extrabold text-[#6a1a82]">
                ฿{amount.toLocaleString('th-TH', { minimumFractionDigits: 2 })}
              </span>
            </div>
          </div>

          {/* PromptPay QR Code Mock */}
          <div className="text-center p-4 bg-white rounded-2xl border border-gray-200 shadow-xs">
            <span className="text-[11px] font-bold text-blue-900 block mb-2 uppercase tracking-wider">
              Thai QR Payment / PromptPay
            </span>
            <div className="w-40 h-40 mx-auto bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center p-2 relative">
              <QrCode className="w-32 h-32 text-gray-800" />
            </div>
            <p className="text-[10px] text-gray-400 mt-2">
              สแกนผ่านแอปธนาคารได้ทุกธนาคาร ยอดเงินปรับปรุงทันที 24 ชม.
            </p>
          </div>

          {/* Simulate Payment Button */}
          <button
            onClick={() => setPaid(true)}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#6a1a82] to-[#8a24aa] text-white font-bold text-xs shadow-md transition active:scale-95 cursor-pointer"
          >
            {language === 'th' ? 'จำลองการชำระเงินสำเร็จ' : 'Simulate Payment Success'}
          </button>
        </div>
      ) : (
        <div className="text-center py-6 space-y-3">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h4 className="text-lg font-bold text-gray-900">
            {language === 'th' ? 'ชำระค่าไฟฟ้าสำเร็จ!' : 'Payment Completed!'}
          </h4>
          <p className="text-xs text-gray-500">
            {language === 'th'
              ? 'ระบบได้ทำการบันทึกและส่งใบเสร็จรับเงินอิเล็กทรอนิกส์แล้ว'
              : 'Electronic receipt has been issued.'}
          </p>
          <button
            onClick={onSuccess}
            className="px-6 py-2 rounded-full bg-[#6a1a82] text-white text-xs font-bold"
          >
            {language === 'th' ? 'ปิดหน้าต่าง' : 'Close'}
          </button>
        </div>
      )}
    </div>
  );
};
