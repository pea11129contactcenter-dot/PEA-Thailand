import React from 'react';
import {
  OtherServicesIcon,
  OtherFeesIcon,
  PaymentLocationIcon,
  WattDPointIcon,
  CalculateBillIcon,
  EBillIcon,
  NewsIcon,
  CallCenterIcon,
} from './PeaIcons';
import { Language, ServiceModalType } from '../types';

interface ServiceGridProps {
  language: Language;
  onOpenModal: (type: ServiceModalType['type']) => void;
}

export const ServiceGrid: React.FC<ServiceGridProps> = ({ language, onOpenModal }) => {
  const services = [
    {
      id: 'other-services',
      icon: <OtherServicesIcon className="w-8 h-8 text-[#6a1a82]" />,
      labelTh: 'บริการอื่นๆ',
      labelEn: 'Other Services',
    },
    {
      id: 'other-fees',
      icon: <OtherFeesIcon className="w-8 h-8 text-[#6a1a82]" />,
      labelTh: 'ค่าบริการอื่นๆ',
      labelEn: 'Other Fees',
    },
    {
      id: 'payment-locations',
      icon: <PaymentLocationIcon className="w-8 h-8 text-[#6a1a82]" />,
      labelTh: 'สถานที่รับชำระ',
      labelEn: 'Pay Locations',
    },
    {
      id: 'watt-d-point',
      icon: <WattDPointIcon className="w-8 h-8 text-[#6a1a82]" />,
      labelTh: 'WATT-D Point',
      labelEn: 'WATT-D Point',
    },
    {
      id: 'calculator',
      icon: <CalculateBillIcon className="w-8 h-8 text-[#6a1a82]" />,
      labelTh: 'คำนวณค่าไฟฟ้า',
      labelEn: 'Bill Calculator',
    },
    {
      id: 'e-bill',
      icon: <EBillIcon className="w-8 h-8 text-[#6a1a82]" />,
      labelTh: 'สมัคร E-Bill',
      labelEn: 'Apply E-Bill',
    },
    {
      id: 'news',
      icon: <NewsIcon className="w-8 h-8 text-[#6a1a82]" />,
      labelTh: 'ข่าวสาร',
      labelEn: 'News & Info',
    },
    {
      id: '1129',
      icon: <CallCenterIcon className="w-8 h-8 text-[#6a1a82]" />,
      labelTh: '1129',
      labelEn: 'Call 1129',
    },
  ];

  return (
    <div className="px-4 py-2 select-none">
      <div className="grid grid-cols-4 gap-3 sm:gap-4">
        {services.map((item) => {
          const label = language === 'th' ? item.labelTh : item.labelEn;
          return (
            <div key={item.id} className="flex flex-col items-center">
              <button
                onClick={() => onOpenModal(item.id as ServiceModalType['type'])}
                className="w-16 h-16 sm:w-18 sm:h-18 rounded-[20px] bg-white border border-[#eae6f0] shadow-[0_3px_10px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-purple-200 flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer group"
                aria-label={label}
              >
                <div className="transition-transform group-hover:scale-110 duration-200">
                  {item.icon}
                </div>
              </button>
              <span className="mt-2 text-[11px] sm:text-[12px] font-medium text-[#494c59] text-center leading-tight line-clamp-1 max-w-[76px]">
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
