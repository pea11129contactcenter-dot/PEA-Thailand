import React from 'react';
import { EServiceBadge, PeaShoppingBadge, PeaSolarBadge } from './PeaIcons';
import { Language, ServiceModalType } from '../types';

interface BannersProps {
  language: Language;
  onOpenModal: (type: ServiceModalType['type']) => void;
}

export const Banners: React.FC<BannersProps> = ({ onOpenModal }) => {
  return (
    <div className="px-4 pt-3 pb-6 select-none">
      <div className="grid grid-cols-3 gap-2.5">
        {/* Banner 1: E-SERVICE */}
        <button
          onClick={() => onOpenModal('e-service')}
          className="h-20 bg-white rounded-2xl border border-[#ece8f2] shadow-[0_3px_10px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-purple-200 flex flex-col items-center justify-center p-2 transition-all active:scale-95 cursor-pointer"
        >
          <EServiceBadge />
        </button>

        {/* Banner 2: PEA Shopping */}
        <button
          onClick={() => onOpenModal('pea-shopping')}
          className="h-20 bg-white rounded-2xl border border-[#ece8f2] shadow-[0_3px_10px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-purple-200 flex flex-col items-center justify-center p-2 transition-all active:scale-95 cursor-pointer"
        >
          <PeaShoppingBadge />
        </button>

        {/* Banner 3: SOLAR Green Power By PEA */}
        <button
          onClick={() => onOpenModal('solar')}
          className="h-20 bg-white rounded-2xl border border-[#ece8f2] shadow-[0_3px_10px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-purple-200 flex flex-col items-center justify-center p-2 transition-all active:scale-95 cursor-pointer"
        >
          <PeaSolarBadge />
        </button>
      </div>
    </div>
  );
};
