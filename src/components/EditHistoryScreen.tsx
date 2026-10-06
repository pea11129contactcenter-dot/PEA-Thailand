import React, { useState } from 'react';
import { ChevronDown, ChevronLeft, Wifi } from 'lucide-react';
import { EditProfileHistoryIcon } from './OtherServicesIcons';
import { Language } from '../types';

interface EditHistoryScreenProps {
  onBack: () => void;
  language?: Language;
}

export const EditHistoryScreen: React.FC<EditHistoryScreenProps> = ({ onBack }) => {
  // Form State
  const [place, setPlace] = useState('บ้านพักอาศัย (เชียงใหม่)');
  const [userType, setUserType] = useState('บุคคลธรรมดา');
  const [idCard, setIdCard] = useState('');
  const [prefix, setPrefix] = useState('นาย');
  const [otherPrefix, setOtherPrefix] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  // Address State
  const [houseNo, setHouseNo] = useState('');
  const [moo, setMoo] = useState('');
  const [village, setVillage] = useState('');
  const [room, setRoom] = useState('');
  const [floor, setFloor] = useState('');
  const [soi, setSoi] = useState('');
  const [road, setRoad] = useState('');
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [subDistrict, setSubDistrict] = useState('');
  const [zipCode, setZipCode] = useState('');

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full flex-1 flex flex-col bg-[#edeaf2] min-h-full font-['Prompt',sans-serif] select-none text-left">
      {/* Top Header with Golden Arc and Purple Bar */}
      <div className="relative bg-[#7b165c] text-white overflow-hidden shrink-0">
        {/* Golden-Yellow Curve in top-left corner (Exact match with screenshot) */}
        <div className="absolute top-0 left-0 w-36 h-28 pointer-events-none z-0">
          <svg viewBox="0 0 140 100" className="w-full h-full" preserveAspectRatio="none">
            <path d="M 0 0 L 100 0 Q 60 70, 0 85 Z" fill="#e59d18" />
          </svg>
        </div>

        {/* Status Bar */}
        <div className="relative z-10 flex items-center justify-between text-xs text-white font-medium px-4 pt-1.5 pb-2">
          <span className="font-semibold text-[13.5px] tracking-tight text-white ml-0.5">
            00:40
          </span>
          <div className="flex items-center gap-1.5 text-white">
            {/* Signal bars */}
            <div className="flex items-end gap-[1.5px] h-3 mr-0.5">
              <span className="w-[2.5px] h-1.5 bg-white rounded-xs"></span>
              <span className="w-[2.5px] h-2 bg-white rounded-xs"></span>
              <span className="w-[2.5px] h-2.5 bg-white rounded-xs"></span>
              <span className="w-[2.5px] h-3 bg-white rounded-xs"></span>
            </div>
            {/* Wifi */}
            <Wifi className="w-3.5 h-3.5 stroke-[2.4] text-white" />
            {/* Battery pill with '97' inside */}
            <div className="flex items-center">
              <div className="h-3.5 px-1 rounded-[5px] border border-white/90 bg-white/20 flex items-center justify-center">
                <span className="text-[9px] font-extrabold text-white leading-none">97</span>
              </div>
              <div className="w-[1.5px] h-1.5 bg-white rounded-r-xs -ml-[0.5px]"></div>
            </div>
          </div>
        </div>

        {/* Header Action Bar */}
        <div className="relative z-10 flex items-center justify-between px-3 py-3">
          {/* Back button on golden curve */}
          <button
            onClick={onBack}
            className="w-9 h-9 flex items-center justify-center text-gray-900 hover:text-black cursor-pointer active:scale-95 transition"
            aria-label="ย้อนกลับ"
          >
            <ChevronLeft className="w-7 h-7 stroke-[3] text-gray-900" />
          </button>

          {/* Page Title */}
          <h1 className="text-base sm:text-[17px] font-bold text-white tracking-wide pr-3">
            ขอแก้ไขประวัติ
          </h1>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-3 sm:px-4 py-3 relative">
        {/* Large White Form Container */}
        <div className="bg-white rounded-[28px] sm:rounded-[32px] p-4 sm:p-5 shadow-[0_4px_20px_rgba(123,22,92,0.06)] border border-purple-100/60 mb-8">
          {/* Step Indicator Header */}
          <div className="flex items-center justify-center gap-6 sm:gap-10 pt-2 pb-4 border-b border-gray-100">
            {/* Step 1: ข้อมูลขอแก้ไขประวัติ (Active - Solid Purple) */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#7b165c] text-white flex items-center justify-center shadow-md">
                <EditProfileHistoryIcon className="w-7 h-7 text-white" />
              </div>
              <span className="text-xs font-bold text-[#7b165c] mt-2 tracking-tight">
                ข้อมูลขอแก้ไขประวัติ
              </span>
            </div>

            {/* Separator Chevron >>> */}
            <div className="flex items-center gap-0.5 text-[#7b165c] text-lg font-bold -mt-5">
              <span>›</span>
              <span>›</span>
              <span>›</span>
            </div>

            {/* Step 2: เอกสาร (Inactive - Outline Purple) */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full border-[2.5px] border-[#7b165c] bg-white flex items-center justify-center">
                <svg
                  viewBox="0 0 32 32"
                  className="w-7 h-7 text-[#7b165c]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <rect x="7" y="5" width="18" height="22" rx="3" />
                  <line x1="11" y1="10" x2="21" y2="10" strokeWidth="2" />
                  <line x1="11" y1="14" x2="21" y2="14" strokeWidth="2" />
                  <line x1="11" y1="18" x2="17" y2="18" strokeWidth="2" />
                </svg>
              </div>
              <span className="text-xs font-semibold text-gray-700 mt-2 tracking-tight">
                เอกสาร
              </span>
            </div>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="pt-4 space-y-3.5">
              {/* Section: ข้อมูลปัจจุบัน (Current info) */}
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  {/* Left Circle Icon */}
                  <div className="flex flex-col items-center shrink-0 pt-0.5">
                    <div className="w-10 h-10 rounded-full border-[2px] border-[#7b165c] bg-white flex items-center justify-center">
                      <EditProfileHistoryIcon className="w-5 h-5 text-[#7b165c]" />
                    </div>
                    <span className="text-[11px] font-bold text-[#7b165c] mt-1 text-center">
                      ข้อมูลปัจจุบัน
                    </span>
                  </div>

                  {/* Right: Dropdown สถานที่ใช้ไฟฟ้า */}
                  <div className="flex-1">
                    <div className="relative">
                      <select
                        value={place}
                        onChange={(e) => setPlace(e.target.value)}
                        className="w-full appearance-none px-3.5 py-2.5 rounded-xl border border-[#7b165c] text-xs sm:text-[13px] font-semibold text-gray-800 bg-white outline-none pr-8 cursor-pointer"
                      >
                        <option value="สถานที่ใช้ไฟฟ้า">สถานที่ใช้ไฟฟ้า</option>
                        <option value="บ้านพักอาศัย (เชียงใหม่)">บ้านพักอาศัย (เชียงใหม่)</option>
                        <option value="คอนโดมิเนียม (กรุงเทพฯ)">คอนโดมิเนียม (กรุงเทพฯ)</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-[#7b165c] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Display Current User Info */}
                <div className="pl-13 text-xs text-gray-700 space-y-1 py-1 font-medium">
                  <div>
                    <span className="font-semibold text-gray-800">ชื่อ : </span>
                    <span>นายสมชาย มั่นคง</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">ที่อยู่ : </span>
                    <span>99/4 หมู่ 5 ต.สุเทพ อ.เมือง จ.เชียงใหม่ 50200</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">หมายเลขผู้ใช้ไฟฟ้า : </span>
                    <span className="font-bold text-[#7b165c]">020019283741</span>
                  </div>
                </div>
              </div>

              {/* Section: ประเภทผู้ใช้ไฟฟ้า Fieldset Dropdown */}
              <div className="flex items-center gap-3 pt-2">
                {/* Left Circle Icon */}
                <div className="w-10 h-10 rounded-full border-[2px] border-[#7b165c] bg-white flex items-center justify-center shrink-0">
                  <EditProfileHistoryIcon className="w-5 h-5 text-[#7b165c]" />
                </div>

                {/* Outlined fieldset with label "ประเภทผู้ใช้ไฟฟ้า" */}
                <div className="flex-1 relative">
                  <div className="relative border border-[#7b165c] rounded-xl px-3 pt-2 pb-1.5 bg-white">
                    <span className="absolute -top-2.5 left-3 bg-white px-1.5 text-[10.5px] font-medium text-gray-600">
                      ประเภทผู้ใช้ไฟฟ้า
                    </span>
                    <select
                      value={userType}
                      onChange={(e) => setUserType(e.target.value)}
                      className="w-full appearance-none bg-transparent text-xs sm:text-[13px] font-semibold text-gray-800 outline-none pr-6 cursor-pointer"
                    >
                      <option value="บุคคลธรรมดา">บุคคลธรรมดา</option>
                      <option value="นิติบุคคล">นิติบุคคล</option>
                      <option value="ส่วนราชการ/รัฐวิสาหกิจ">ส่วนราชการ/รัฐวิสาหกิจ</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-[#7b165c] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* เลขประจำตัวประชาชน */}
              <div>
                <input
                  type="text"
                  placeholder="เลขประจำตัวประชาชน"
                  value={idCard}
                  onChange={(e) => setIdCard(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#7b165c] text-xs sm:text-[13px] placeholder:text-gray-600 text-gray-800 outline-none"
                />
              </div>

              {/* คำนำหน้าชื่อ + คำนำหน้าชื่อ(อื่นๆ) */}
              <div className="grid grid-cols-2 gap-2.5">
                <div className="relative">
                  <select
                    value={prefix}
                    onChange={(e) => setPrefix(e.target.value)}
                    className="w-full appearance-none px-3.5 py-2.5 rounded-xl border border-[#7b165c] text-xs sm:text-[13px] font-medium text-gray-800 bg-white outline-none pr-7 cursor-pointer"
                  >
                    <option value="คำนำหน้าชื่อ">คำนำหน้าชื่อ</option>
                    <option value="นาย">นาย</option>
                    <option value="นาง">นาง</option>
                    <option value="นางสาว">นางสาว</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-800 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="คำนำหน้าชื่อ(อื่นๆ)"
                    value={otherPrefix}
                    onChange={(e) => setOtherPrefix(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#7b165c] text-xs sm:text-[13px] placeholder:text-gray-600 text-gray-800 outline-none"
                  />
                </div>
              </div>

              {/* ชื่อ */}
              <div>
                <input
                  type="text"
                  placeholder="ชื่อ"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#7b165c] text-xs sm:text-[13px] placeholder:text-gray-600 text-gray-800 outline-none"
                />
              </div>

              {/* นามสกุล */}
              <div>
                <input
                  type="text"
                  placeholder="นามสกุล"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#7b165c] text-xs sm:text-[13px] placeholder:text-gray-600 text-gray-800 outline-none"
                />
              </div>

              {/* วัน/เดือน/ปีเกิด */}
              <div>
                <input
                  type="text"
                  placeholder="วัน/เดือน/ปีเกิด"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#7b165c] text-xs sm:text-[13px] placeholder:text-gray-600 text-gray-800 outline-none"
                />
              </div>

              {/* หมายเลขโทรศั... + อีเมล */}
              <div className="grid grid-cols-2 gap-2.5">
                <input
                  type="text"
                  placeholder="หมายเลขโทรศั..."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#7b165c] text-xs sm:text-[13px] placeholder:text-gray-600 text-gray-800 outline-none"
                />
                <input
                  type="email"
                  placeholder="อีเมล"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#7b165c] text-xs sm:text-[13px] placeholder:text-gray-600 text-gray-800 outline-none"
                />
              </div>

              {/* ที่อยู่ตามบัตรประชาชน Title */}
              <div className="pt-2">
                <h3 className="text-xs sm:text-[13px] font-bold text-gray-800">
                  ที่อยู่ตามบัตรประชาชน
                </h3>
              </div>

              {/* บ้านเลขที่ + หมู่ */}
              <div className="grid grid-cols-12 gap-2.5">
                <div className="col-span-8">
                  <input
                    type="text"
                    placeholder="บ้านเลขที่"
                    value={houseNo}
                    onChange={(e) => setHouseNo(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#7b165c] text-xs sm:text-[13px] placeholder:text-gray-600 text-gray-800 outline-none"
                  />
                </div>
                <div className="col-span-4">
                  <input
                    type="text"
                    placeholder="หมู่"
                    value={moo}
                    onChange={(e) => setMoo(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#7b165c] text-xs sm:text-[13px] placeholder:text-gray-600 text-gray-800 outline-none"
                  />
                </div>
              </div>

              {/* หมู่บ้าน/อาคาร + ห้อง + กล่องเล็ก */}
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-6">
                  <input
                    type="text"
                    placeholder="หมู่บ้าน/อาคาร"
                    value={village}
                    onChange={(e) => setVillage(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#7b165c] text-xs sm:text-[13px] placeholder:text-gray-600 text-gray-800 outline-none"
                  />
                </div>
                <div className="col-span-4">
                  <input
                    type="text"
                    placeholder="ห้อง"
                    value={room}
                    onChange={(e) => setRoom(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#7b165c] text-xs sm:text-[13px] placeholder:text-gray-600 text-gray-800 outline-none"
                  />
                </div>
                <div className="col-span-2">
                  <input
                    type="text"
                    value={floor}
                    onChange={(e) => setFloor(e.target.value)}
                    className="w-full px-2 py-2.5 rounded-xl border border-[#7b165c] text-xs text-gray-800 outline-none"
                  />
                </div>
              </div>

              {/* ซอย + ถนน */}
              <div className="grid grid-cols-2 gap-2.5">
                <input
                  type="text"
                  placeholder="ซอย"
                  value={soi}
                  onChange={(e) => setSoi(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#7b165c] text-xs sm:text-[13px] placeholder:text-gray-600 text-gray-800 outline-none"
                />
                <input
                  type="text"
                  placeholder="ถนน"
                  value={road}
                  onChange={(e) => setRoad(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#7b165c] text-xs sm:text-[13px] placeholder:text-gray-600 text-gray-800 outline-none"
                />
              </div>

              {/* เลือกจังหวัด Dropdown */}
              <div className="relative">
                <select
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                  className="w-full appearance-none px-3.5 py-2.5 rounded-xl border border-[#7b165c] text-xs sm:text-[13px] font-bold text-[#7b165c] bg-white outline-none pr-8 cursor-pointer"
                >
                  <option value="">เลือกจังหวัด</option>
                  <option value="เชียงใหม่">เชียงใหม่</option>
                  <option value="กรุงเทพมหานคร">กรุงเทพมหานคร</option>
                  <option value="นนทบุรี">นนทบุรี</option>
                  <option value="ปทุมธานี">ปทุมธานี</option>
                  <option value="ชลบุรี">ชลบุรี</option>
                  <option value="ขอนแก่น">ขอนแก่น</option>
                </select>
                <ChevronDown className="w-5 h-5 text-[#7b165c] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none stroke-[2.5]" />
              </div>

              {/* เลือกอำเภอ Dropdown */}
              <div className="relative">
                <select
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full appearance-none px-3.5 py-2.5 rounded-xl border border-[#7b165c] text-xs sm:text-[13px] font-bold text-[#7b165c] bg-white outline-none pr-8 cursor-pointer"
                >
                  <option value="">เลือกอำเภอ</option>
                  <option value="เมืองเชียงใหม่">เมืองเชียงใหม่</option>
                  <option value="หางดง">หางดง</option>
                  <option value="สันทราย">สันทราย</option>
                  <option value="แม่ริม">แม่ริม</option>
                </select>
                <ChevronDown className="w-5 h-5 text-[#7b165c] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none stroke-[2.5]" />
              </div>

              {/* เลือกตำบล Dropdown */}
              <div className="relative">
                <select
                  value={subDistrict}
                  onChange={(e) => setSubDistrict(e.target.value)}
                  className="w-full appearance-none px-3.5 py-2.5 rounded-xl border border-[#7b165c] text-xs sm:text-[13px] font-bold text-[#7b165c] bg-white outline-none pr-8 cursor-pointer"
                >
                  <option value="">เลือกตำบล</option>
                  <option value="สุเทพ">สุเทพ</option>
                  <option value="ช้างเผือก">ช้างเผือก</option>
                  <option value="หายยา">หายยา</option>
                  <option value="พระสิงห์">พระสิงห์</option>
                </select>
                <ChevronDown className="w-5 h-5 text-[#7b165c] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none stroke-[2.5]" />
              </div>

              {/* รหัสไปรษณีย์ */}
              <div>
                <input
                  type="text"
                  placeholder="รหัสไปรษณีย์"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#7b165c] text-xs sm:text-[13px] placeholder:text-gray-600 text-gray-800 outline-none"
                />
              </div>

              {/* Submit Capsule Button "ถัดไป" */}
              <div className="pt-4 pb-2 flex justify-center">
                <button
                  type="submit"
                  className="w-48 py-3 rounded-full bg-[#7b165c] hover:bg-[#68104c] text-white font-bold text-sm tracking-wide shadow-md transition active:scale-95 cursor-pointer text-center"
                >
                  ถัดไป
                </button>
              </div>
            </form>
          ) : (
            /* Success confirmation */
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-currentColor stroke-[2.5]">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2 className="text-base font-bold text-gray-900">
                บันทึกข้อมูลขอแก้ไขประวัติเรียบร้อย
              </h2>
              <p className="text-xs text-gray-500 max-w-xs mx-auto">
                ขั้นตอนถัดไป: อัปโหลดเอกสารประกอบคำร้อง (สำเนาบัตรประชาชน และทะเบียนบ้าน)
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2 rounded-full bg-[#7b165c] text-white text-xs font-semibold"
              >
                แก้ไขข้อมูลอีกครั้ง
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Decorative Bottom Curves (Deep Purple on Left, Golden on Right) */}
      <div className="relative w-full h-10 shrink-0 pointer-events-none overflow-hidden select-none">
        {/* Bottom Left Purple Arc */}
        <div className="absolute left-0 bottom-0 w-28 h-10">
          <svg viewBox="0 0 100 40" className="w-full h-full" preserveAspectRatio="none">
            <path d="M 0 40 L 0 0 Q 30 35, 100 40 Z" fill="#7b165c" />
          </svg>
        </div>
        {/* Bottom Right Golden Arc */}
        <div className="absolute right-0 bottom-0 w-36 h-10">
          <svg viewBox="0 0 120 40" className="w-full h-full" preserveAspectRatio="none">
            <path d="M 0 40 Q 70 30, 120 0 L 120 40 Z" fill="#e59d18" />
          </svg>
        </div>
      </div>
    </div>
  );
};
