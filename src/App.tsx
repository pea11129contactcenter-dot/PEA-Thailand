/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Smartphone, Monitor } from 'lucide-react';
import { Header } from './components/Header';
import { ElectricityCard } from './components/ElectricityCard';
import { ServiceGrid } from './components/ServiceGrid';
import { Banners } from './components/Banners';
import { BottomNav } from './components/BottomNav';
import { Modals } from './components/Modals';
import { EditHistoryScreen } from './components/EditHistoryScreen';
import { OutageTab, InboxTab, MoreTab } from './components/TabViews';
import { ElectricityLocation, Language, NavTab, ServiceModalType } from './types';

export default function App() {
  // Language State
  const [language, setLanguage] = useState<Language>('th');

  // Active Screen View: 'edit-history' (latest requested screen) | 'other-services' | 'home'
  const [currentView, setCurrentView] = useState<'edit-history' | 'other-services' | 'home'>(
    'edit-history'
  );

  // Navigation Tab State
  const [currentTab, setCurrentTab] = useState<NavTab>('home');

  // Modal State
  const [activeModal, setActiveModal] = useState<ServiceModalType['type']>('other-services');

  // View frame mode: 'phone' or 'full'
  const [viewMode, setViewMode] = useState<'phone' | 'full'>('phone');

  // Mode: Empty state (exact match of screenshot) vs Active Meter data
  const [showExactScreenshotMock, setShowExactScreenshotMock] = useState<boolean>(true);

  // User Profile
  const [userProfile, setUserProfile] = useState({
    name: 'ระบุข้อมูลส่วนตัว',
    phone: '089-123-4567',
    email: 'user@example.com',
    points: 120,
  });

  // Electricity Locations Data
  const [locations, setLocations] = useState<ElectricityLocation[]>([
    {
      id: 'loc-1',
      name: 'บ้านของฉัน (เชียงใหม่)',
      caNumber: '020019283741',
      accountNumber: '1102938475',
      address: '99/4 หมู่ 5 ต.สุเทพ อ.เมือง จ.เชียงใหม่ 50200',
      branch: 'กฟภ. สาขาเชียงใหม่',
      meterNumber: 'M-77291',
      currentUnits: 342,
      lastMonthUnits: 374,
      amountDue: 1425.8,
      dueDate: '15 ต.ค. 2569',
      status: 'unpaid',
      tariffType: '1.2 บ้านอยู่อาศัย เกิน 150 หน่วย',
    },
    {
      id: 'loc-2',
      name: 'คอนโดมิเนียม (กรุงเทพฯ)',
      caNumber: '020058291032',
      accountNumber: '1109948271',
      address: 'คอนโดมิเนียม ซอยสุขุมวิท 39',
      branch: 'กฟภ. สำนักงานใหญ่',
      meterNumber: 'M-88402',
      currentUnits: 185,
      lastMonthUnits: 190,
      amountDue: 820.5,
      dueDate: '20 ต.ค. 2569',
      status: 'paid',
      tariffType: '1.2 บ้านอยู่อาศัย เกิน 150 หน่วย',
    },
  ]);

  const [activeLocationIndex, setActiveLocationIndex] = useState<number>(0);

  const handleAddLocationSuccess = (newLoc: ElectricityLocation) => {
    setLocations((prev) => [...prev, newLoc]);
    setActiveLocationIndex(locations.length);
    setShowExactScreenshotMock(false);
  };

  const handleUpdateProfile = (name: string, phone: string, email: string) => {
    setUserProfile((prev) => ({
      ...prev,
      name: name || 'ระบุข้อมูลส่วนตัว',
      phone,
      email,
    }));
  };

  const handleOpenPay = (location?: ElectricityLocation) => {
    if (location) {
      const idx = locations.findIndex((l) => l.id === location.id);
      if (idx !== -1) setActiveLocationIndex(idx);
    }
    setActiveModal('pay-bill');
  };

  const handleBottomTabChange = (tab: NavTab) => {
    if (tab === 'pay') {
      handleOpenPay();
      return;
    }
    setCurrentTab(tab);
  };

  return (
    <div className="min-h-screen bg-[#e8e6ee] flex flex-col items-center justify-start p-0 sm:py-6 sm:px-4 font-['Prompt',sans-serif]">
      {/* Top Experience Control Bar */}
      <div className="w-full max-w-md mb-2 sm:mb-3 px-3 py-2 bg-white/90 backdrop-blur-md rounded-2xl shadow-sm border border-purple-100/60 flex items-center justify-between gap-1.5 text-xs overflow-x-auto">
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#7b165c]"></span>
          <span className="font-bold text-gray-800 tracking-tight hidden sm:inline">PEA Smart Plus</span>
        </div>

        <div className="flex items-center gap-1.5">
          {/* Button: ขอแก้ไขประวัติ (รูปปัจจุบัน) */}
          <button
            onClick={() => setCurrentView('edit-history')}
            className={`px-2.5 py-1 rounded-lg font-medium transition cursor-pointer flex items-center gap-1 ${
              currentView === 'edit-history'
                ? 'bg-[#7b165c] text-white font-semibold shadow-xs'
                : 'bg-purple-50 text-[#7b165c] hover:bg-purple-100'
            }`}
            title="แสดงหน้าขอแก้ไขประวัติตามรูปปัจจุบัน"
          >
            📝 ขอแก้ไขประวัติ (ตามรูป)
          </button>

          {/* Button: รายการบริการอื่นๆ */}
          <button
            onClick={() => {
              setCurrentView('other-services');
              setActiveModal('other-services');
            }}
            className={`px-2.5 py-1 rounded-lg font-medium transition cursor-pointer flex items-center gap-1 ${
              currentView === 'other-services'
                ? 'bg-[#7b165c] text-white font-semibold shadow-xs'
                : 'bg-purple-50 text-[#7b165c] hover:bg-purple-100'
            }`}
            title="แสดงหน้ารายการบริการอื่นๆ"
          >
            📋 บริการอื่นๆ
          </button>

          {/* Button: หน้าแรก */}
          <button
            onClick={() => {
              setCurrentView('home');
              setActiveModal(null);
            }}
            className={`px-2.5 py-1 rounded-lg font-medium transition cursor-pointer flex items-center gap-1 ${
              currentView === 'home' && !activeModal
                ? 'bg-[#7b165c] text-white font-semibold shadow-xs'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            title="แสดงหน้าแรก"
          >
            🏠 หน้าแรก
          </button>

          {/* Toggle View Mode: Phone Frame vs Full */}
          <button
            onClick={() => setViewMode(viewMode === 'phone' ? 'full' : 'phone')}
            className="p-1.5 rounded-lg text-gray-600 hover:bg-gray-100 transition cursor-pointer shrink-0"
            title={viewMode === 'phone' ? 'ขยายเต็มหน้าจอ' : 'มุมมองกรอบมือถือ'}
          >
            {viewMode === 'phone' ? (
              <Monitor className="w-4 h-4" />
            ) : (
              <Smartphone className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Main Container: Mobile Frame / Screen */}
      <div
        className={`w-full transition-all duration-300 relative ${
          viewMode === 'phone'
            ? 'max-w-[412px] bg-[#f7f6fa] rounded-[36px] shadow-[0_20px_50px_rgba(40,10,60,0.18)] border-[7px] border-slate-900/95 overflow-hidden flex flex-col min-h-[840px] my-auto'
            : 'max-w-md bg-[#f7f6fa] shadow-lg rounded-3xl overflow-hidden flex flex-col min-h-[820px]'
        }`}
      >
        {/* Dynamic Island / Notch Bezel for phone view */}
        {viewMode === 'phone' && (
          <div className="w-full flex justify-center pt-2 pb-0.5 bg-[#7b165c] z-30 select-none">
            <div className="w-24 h-4 bg-slate-900 rounded-full flex items-center justify-end pr-2.5">
              <div className="w-2 h-2 rounded-full bg-slate-800 border border-slate-700/80"></div>
            </div>
          </div>
        )}

        {/* View Router */}
        {currentView === 'edit-history' ? (
          /* EXACT MATCH OF THE NEW SCREENSHOT: ขอแก้ไขประวัติ */
          <EditHistoryScreen
            onBack={() => {
              setCurrentView('other-services');
              setActiveModal('other-services');
            }}
            language={language}
          />
        ) : (
          /* HOME SCREEN & MODALS */
          <>
            {/* Scrollable Screen Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col">
              {/* Header */}
              <Header
                language={language}
                onLanguageChange={setLanguage}
                onOpenProfile={() => setActiveModal('profile')}
                onOpenPoint={() => setActiveModal('watt-d-point')}
                userName={userProfile.name !== 'ระบุข้อมูลส่วนตัว' ? userProfile.name : undefined}
              />

              {/* Main Content by Current Tab */}
              {currentTab === 'home' && (
                <main className="flex-1 flex flex-col">
                  {/* Electricity Card */}
                  <ElectricityCard
                    locations={locations}
                    activeLocationIndex={activeLocationIndex}
                    onSelectLocation={setActiveLocationIndex}
                    onAddLocation={() => setActiveModal('add-location')}
                    onShowAll={() => setActiveModal('all-locations')}
                    onPayBill={handleOpenPay}
                    language={language}
                    showEmptyStateMock={showExactScreenshotMock}
                  />

                  {/* 8 Primary Services Grid */}
                  <ServiceGrid
                    language={language}
                    onOpenModal={(modal) => {
                      if (modal === 'other-services') {
                        setCurrentView('other-services');
                      }
                      setActiveModal(modal);
                    }}
                  />

                  {/* 3 Quick Banners */}
                  <Banners
                    language={language}
                    onOpenModal={(modal) => setActiveModal(modal)}
                  />
                </main>
              )}

              {currentTab === 'outage' && (
                <OutageTab language={language} onBackToHome={() => setCurrentTab('home')} />
              )}

              {currentTab === 'inbox' && (
                <InboxTab language={language} onBackToHome={() => setCurrentTab('home')} />
              )}

              {currentTab === 'more' && (
                <MoreTab language={language} onBackToHome={() => setCurrentTab('home')} />
              )}
            </div>

            {/* Bottom Navigation with Golden Wave */}
            <BottomNav
              currentTab={currentTab}
              onTabChange={handleBottomTabChange}
              language={language}
            />

            {/* Bottom Home Indicator Bar for Phone frame */}
            {viewMode === 'phone' && (
              <div className="w-full flex justify-center py-1.5 bg-white select-none">
                <div className="w-28 h-1 bg-slate-300 rounded-full"></div>
              </div>
            )}

            {/* Interactive Modals and Drawers (Overlaid right inside the phone view) */}
            <Modals
              modalType={activeModal}
              onClose={() => {
                setActiveModal(null);
                if (currentView === 'other-services') setCurrentView('home');
              }}
              language={language}
              locations={locations}
              activeLocationIndex={activeLocationIndex}
              onSelectLocation={setActiveLocationIndex}
              onAddLocationSuccess={handleAddLocationSuccess}
              userProfile={userProfile}
              onUpdateProfile={handleUpdateProfile}
              onOpenEditHistory={() => setCurrentView('edit-history')}
            />
          </>
        )}
      </div>
    </div>
  );
}
