import React, { useState } from 'react';
import {
  AlertTriangle,
  MapPin,
  Camera,
  Send,
  Phone,
  CheckCircle2,
  Bell,
  Clock,
  Shield,
  FileText,
  Settings,
  HelpCircle,
  Info,
  ChevronRight,
  LogOut,
} from 'lucide-react';
import { Language, NavTab } from '../types';

/* --- ไฟฟ้าขัดข้อง (Outage Report Tab) --- */
export const OutageTab: React.FC<{ language: Language; onBackToHome: () => void }> = ({
  language,
  onBackToHome,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [address, setAddress] = useState('หมู่บ้านสุขสันต์ ต.สุเทพ อ.เมือง จ.เชียงใหม่');
  const [detail, setDetail] = useState('');

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between pb-2 border-b border-gray-100">
        <div className="flex items-center gap-2 text-[#6a1a82]">
          <AlertTriangle className="w-5 h-5 text-amber-500" />
          <h2 className="font-bold text-base text-gray-900">
            {language === 'th' ? 'แจ้งไฟฟ้าขัดข้อง' : 'Report Power Outage'}
          </h2>
        </div>
        <button
          onClick={onBackToHome}
          className="text-xs text-[#6a1a82] font-semibold hover:underline"
        >
          {language === 'th' ? 'กลับหน้าแรก' : 'Back Home'}
        </button>
      </div>

      {!submitted ? (
        <div className="space-y-3">
          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>
              {language === 'th'
                ? 'กรณีเกิดเหตุฉุกเฉิน เสาไฟล้ม สายไฟขาด ไฟไหม้หม้อแปลง กรุณาโทร 1129 ทันที'
                : 'For emergencies like fallen poles or wire fires, call 1129 immediately.'}
            </span>
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-700 block mb-1">
              {language === 'th' ? 'สถานที่เกิดเหตุ (พิกัดปัจจุบัน)' : 'Location'}
            </label>
            <div className="flex items-center gap-2 p-2.5 rounded-xl border border-gray-200 bg-gray-50 text-xs">
              <MapPin className="w-4 h-4 text-[#6a1a82] shrink-0" />
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full bg-transparent outline-none font-medium text-gray-800"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-700 block mb-1">
              {language === 'th' ? 'รายละเอียดอาการขัดข้อง' : 'Issue Details'}
            </label>
            <textarea
              rows={3}
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
              placeholder="เช่น ไฟดับทั้งซอย, ไฟตก กระพริบ, หม้อแปลงระเบิด..."
              className="w-full p-2.5 rounded-xl border border-gray-200 text-xs outline-none focus:border-[#6a1a82]"
            />
          </div>

          <button
            onClick={() => setSubmitted(true)}
            className="w-full py-3 rounded-xl bg-[#6a1a82] hover:bg-[#521369] text-white font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>{language === 'th' ? 'ส่งรายงานแจ้งเหตุ' : 'Submit Report'}</span>
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-2xl p-6 text-center border border-purple-100 shadow-sm space-y-3">
          <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="font-bold text-base text-gray-900">
            {language === 'th' ? 'ส่งข้อมูลแจ้งเหตุเรียบร้อย' : 'Report Received'}
          </h3>
          <p className="text-xs text-gray-500">
            {language === 'th'
              ? 'หมายเลขแจ้งเหตุ #PEA-2026-9812 เจ้าหน้าที่กำลังตรวจสอบและเข้าแก้ไขโดยเร็ว'
              : 'Ticket #PEA-2026-9812 created. Technical team dispatched.'}
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-gray-700"
          >
            {language === 'th' ? 'แจ้งเรื่องอื่นเพิ่มเติม' : 'Report Another'}
          </button>
        </div>
      )}
    </div>
  );
};

/* --- กล่องข้อความ (Inbox Notifications Tab) --- */
export const InboxTab: React.FC<{ language: Language; onBackToHome: () => void }> = ({
  language,
  onBackToHome,
}) => {
  const notifications = [
    {
      id: 1,
      title: 'ใบแจ้งค่าไฟฟ้าประจำเดือน ต.ค. 2569 ออกแล้ว',
      detail: 'ยอดชำระ 1,425.80 บาท ครบกำหนดชำระวันที่ 15 ต.ค. 2569',
      time: 'วันนี้ 08:30 น.',
      unread: true,
    },
    {
      id: 2,
      title: 'แจ้งแผนดับไฟล่วงหน้าเพื่อบำรุงรักษาระบบ',
      detail: 'วันที่ 10 ต.ค. 2569 เวลา 09:00 - 16:00 น. บริเวณ ถ.สุเทพ',
      time: 'เมื่อวานนี้',
      unread: true,
    },
    {
      id: 3,
      title: 'รับคะแนน WATT-D Point พิเศษ +50 คะแนน',
      detail: 'จากการสมัครบริการ PEA E-Bill สำเร็จ',
      time: '2 วันที่แล้ว',
      unread: false,
    },
  ];

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between pb-2 border-b border-gray-100">
        <div className="flex items-center gap-2 text-[#6a1a82]">
          <Bell className="w-5 h-5" />
          <h2 className="font-bold text-base text-gray-900">
            {language === 'th' ? 'กล่องข้อความและการแจ้งเตือน' : 'Inbox & Notifications'}
          </h2>
        </div>
        <button
          onClick={onBackToHome}
          className="text-xs text-[#6a1a82] font-semibold hover:underline"
        >
          {language === 'th' ? 'กลับหน้าแรก' : 'Back Home'}
        </button>
      </div>

      <div className="space-y-2.5">
        {notifications.map((n) => (
          <div
            key={n.id}
            className={`p-3.5 rounded-2xl border transition ${
              n.unread
                ? 'bg-purple-50/40 border-purple-200'
                : 'bg-white border-gray-100'
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <h4 className="text-xs font-bold text-gray-900">{n.title}</h4>
              {n.unread && (
                <span className="w-2 h-2 rounded-full bg-[#6a1a82] shrink-0 mt-1"></span>
              )}
            </div>
            <p className="text-[11px] text-gray-600 mt-1">{n.detail}</p>
            <span className="text-[10px] text-gray-400 block mt-2 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {n.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* --- อื่นๆ (More / Settings Tab) --- */
export const MoreTab: React.FC<{ language: Language; onBackToHome: () => void }> = ({
  language,
  onBackToHome,
}) => {
  const menuItems = [
    { icon: <Shield className="w-4 h-4 text-[#6a1a82]" />, label: 'ความปลอดภัยและการยืนยันตัวตน' },
    { icon: <FileText className="w-4 h-4 text-[#6a1a82]" />, label: 'ประวัติการทำรายการย้อนหลัง' },
    { icon: <Settings className="w-4 h-4 text-[#6a1a82]" />, label: 'การตั้งค่าการแจ้งเตือน' },
    { icon: <HelpCircle className="w-4 h-4 text-[#6a1a82]" />, label: 'คำถามที่พบบ่อย (FAQ)' },
    { icon: <Info className="w-4 h-4 text-[#6a1a82]" />, label: 'เกี่ยวกับ PEA Smart Plus v4.2.0' },
  ];

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between pb-2 border-b border-gray-100">
        <h2 className="font-bold text-base text-gray-900">
          {language === 'th' ? 'การตั้งค่าและอื่นๆ' : 'Settings & More'}
        </h2>
        <button
          onClick={onBackToHome}
          className="text-xs text-[#6a1a82] font-semibold hover:underline"
        >
          {language === 'th' ? 'กลับหน้าแรก' : 'Back Home'}
        </button>
      </div>

      <div className="space-y-1.5 bg-white rounded-2xl border border-gray-100 p-2 shadow-xs">
        {menuItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center">
                {item.icon}
              </div>
              <span className="text-xs font-semibold text-gray-800">{item.label}</span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
        ))}
      </div>

      <div className="text-center pt-2">
        <span className="text-[11px] text-gray-400 block">
          การไฟฟ้าส่วนภูมิภาค (Provincial Electricity Authority)
        </span>
        <span className="text-[10px] text-gray-400">PEA Smart Plus Application</span>
      </div>
    </div>
  );
};
