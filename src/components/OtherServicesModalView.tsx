import React, { useState } from 'react';
import { X, ChevronRight, ArrowLeft, CheckCircle2, Send, FileText } from 'lucide-react';
import {
  LightBulbNewElectricityIcon,
  ExpandGridArrowsIcon,
  ChangeMeterSizeIcon,
  EditProfileHistoryIcon,
  TransferOwnershipIcon,
  TerminateElectricityIcon,
} from './OtherServicesIcons';
import { Language } from '../types';

interface OtherServicesModalViewProps {
  onClose: () => void;
  language?: Language;
  onOpenEditHistory?: () => void;
}

export const OtherServicesModalView: React.FC<OtherServicesModalViewProps> = ({
  onClose,
  language = 'th',
  onOpenEditHistory,
}) => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const servicesList = [
    {
      id: 'new-meter',
      title: 'ขอใช้ไฟฟ้าใหม่',
      subtitle: '',
      icon: <LightBulbNewElectricityIcon className="w-7 h-7 text-[#78105e]" />,
      desc: 'ยื่นคำร้องขอติดตั้งมิเตอร์และเริ่มใช้ไฟฟ้าใหม่สำหรับบ้านพักอาศัยหรือธุรกิจ',
    },
    {
      id: 'expand-grid',
      title: 'ขอขยายเขตไฟฟ้า',
      subtitle: '',
      icon: <ExpandGridArrowsIcon className="w-7 h-7 text-[#78105e]" />,
      desc: 'ขอขยายเขตระบบจำหน่ายไฟฟ้าแรงต่ำ/แรงสูง ปักเสาและพาดสายไฟ',
    },
    {
      id: 'change-size',
      title: 'เพิ่ม/ลดขนาดมิเตอร์',
      subtitle: '',
      icon: <ChangeMeterSizeIcon className="w-7 h-7 text-[#78105e]" />,
      desc: 'ขอเปลี่ยนขนาดมิเตอร์ไฟฟ้า เช่น จาก 5(15)A เป็น 15(45)A หรือระบบ 3 เฟส',
    },
    {
      id: 'edit-profile',
      title: 'ขอแก้ไขประวัติ',
      subtitle: '(แก้ไขข้อมูลส่วนตัว)',
      icon: <EditProfileHistoryIcon className="w-7 h-7 text-[#78105e]" />,
      desc: 'ขอเปลี่ยนแปลงข้อมูลชื่อ-นามสกุล ที่อยู่จัดส่งใบแจ้งหนี้ หรือเบอร์โทรศัพท์',
    },
    {
      id: 'transfer',
      title: 'ขอโอนเปลี่ยนเจ้าของ',
      subtitle: '',
      icon: <TransferOwnershipIcon className="w-7 h-7 text-[#78105e]" />,
      desc: 'โอนเปลี่ยนชื่อผู้ใช้ไฟฟ้าและเงินประกันการใช้ไฟฟ้าแก่เจ้าของคนใหม่',
    },
    {
      id: 'terminate',
      title: 'ยกเลิกการใช้ไฟฟ้า',
      subtitle: '',
      icon: <TerminateElectricityIcon className="w-7 h-7 text-[#78105e]" />,
      desc: 'ขอยกเลิกสัญญาการใช้ไฟฟ้า ถอนมิเตอร์ และขอรับเงินประกันคืน',
    },
  ];

  const currentServiceItem = servicesList.find((s) => s.id === selectedService);

  return (
    <div className="w-full max-w-[370px] sm:max-w-[385px] mx-auto select-none transition-all duration-300">
      {/* Modal Dialog Box */}
      <div className="bg-white rounded-[30px] shadow-[0_16px_40px_rgba(0,0,0,0.35)] overflow-hidden border border-purple-200/40">
        {/* Header - Rich Gradient Magenta/Purple */}
        <div className="relative bg-gradient-to-r from-[#7a105d] via-[#6e0f54] to-[#580a43] px-6 py-4 flex items-center justify-between text-white">
          {selectedService ? (
            <button
              onClick={() => {
                setSelectedService(null);
                setSubmitted(false);
              }}
              className="p-1 rounded-full hover:bg-white/10 transition cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
          ) : (
            <div className="w-5"></div>
          )}

          <h2 className="text-base sm:text-[17px] font-bold tracking-wide text-white text-center flex-1">
            {selectedService ? currentServiceItem?.title : 'รายการบริการอื่นๆ'}
          </h2>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/15 transition cursor-pointer active:scale-95"
            aria-label="ปิด"
          >
            <X className="w-5 h-5 text-white stroke-[2.5]" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-5 bg-white">
          {!selectedService ? (
            /* EXACT LIST OF 6 ITEMS AS SHOWN IN THE IMAGE */
            <div className="space-y-3">
              {servicesList.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    if (item.id === 'edit-profile' && onOpenEditHistory) {
                      onOpenEditHistory();
                      return;
                    }
                    setSelectedService(item.id);
                  }}
                  className="w-full flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#fcf9fc] hover:bg-[#f8f3f8] active:scale-[0.98] border border-[#f0e8f0] shadow-[0_2px_8px_rgba(120,16,94,0.02)] transition-all cursor-pointer group"
                >
                  {/* Left: Icon and Title */}
                  <div className="flex items-center gap-3.5 sm:gap-4 text-left">
                    <div className="w-10 h-10 flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
                      {item.icon}
                    </div>

                    <div className="flex flex-col justify-center">
                      <span className="font-bold text-[14.5px] sm:text-[15px] text-[#78105e] leading-snug">
                        {item.title}
                      </span>
                      {item.subtitle && (
                        <span className="font-semibold text-[13px] sm:text-[13.5px] text-[#78105e] leading-tight -mt-0.5">
                          {item.subtitle}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right: Chevron Arrow */}
                  <div className="text-[#a46c96] group-hover:text-[#78105e] transition-colors pr-1">
                    <ChevronRight className="w-5 h-5 stroke-[2.2]" />
                  </div>
                </button>
              ))}
            </div>
          ) : (
            /* Interactive Detail / Application Form for the selected service */
            <div className="space-y-4 py-1">
              {!submitted ? (
                <div className="space-y-3.5 text-left">
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-purple-50/60 border border-purple-100">
                    <div className="shrink-0">{currentServiceItem?.icon}</div>
                    <div>
                      <h3 className="font-bold text-sm text-[#78105e]">
                        {currentServiceItem?.title}
                      </h3>
                      <p className="text-[11.5px] text-gray-600 mt-0.5">
                        {currentServiceItem?.desc}
                      </p>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-700 block mb-1">
                      หมายเลขผู้ใช้ไฟฟ้า (CA 12 หลัก)
                    </label>
                    <input
                      type="text"
                      defaultValue="020019283741"
                      className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm font-semibold text-gray-800 outline-none focus:border-[#78105e]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-700 block mb-1">
                      ชื่อ-นามสกุล ผู้ยื่นคำร้อง
                    </label>
                    <input
                      type="text"
                      defaultValue="นายสมชาย มั่นคง"
                      className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm text-gray-800 outline-none focus:border-[#78105e]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-700 block mb-1">
                      เบอร์โทรศัพท์ติดต่อ
                    </label>
                    <input
                      type="text"
                      defaultValue="081-234-5678"
                      className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm text-gray-800 outline-none focus:border-[#78105e]"
                    />
                  </div>

                  <button
                    onClick={() => setSubmitted(true)}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#7a105d] to-[#580a43] text-white font-bold text-xs tracking-wide shadow-md hover:shadow-lg transition active:scale-95 cursor-pointer mt-2"
                  >
                    ยื่นคำร้องออนไลน์
                  </button>
                </div>
              ) : (
                <div className="text-center py-6 space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-base text-gray-900">
                    ยื่นคำร้องออนไลน์เรียบร้อยแล้ว
                  </h3>
                  <p className="text-xs text-gray-500">
                    หมายเลขคำร้อง #REQ-2026-4401 เจ้าหน้าที่จะติดต่อกลับภายใน 24 ชม.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedService(null);
                      setSubmitted(false);
                    }}
                    className="px-5 py-2 rounded-full bg-[#78105e] text-white text-xs font-semibold hover:bg-[#630d4e] transition"
                  >
                    กลับสู่รายการบริการ
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
