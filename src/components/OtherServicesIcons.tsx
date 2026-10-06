import React from 'react';

/**
 * 1. ขอใช้ไฟฟ้าใหม่ - Light bulb with filament and screw base
 */
export const LightBulbNewElectricityIcon: React.FC<{ className?: string }> = ({
  className = 'w-7 h-7 text-[#78105e]',
}) => (
  <svg
    viewBox="0 0 32 32"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Bulb glass outline */}
    <path d="M16 4 C10.5 4 7 8 7 13 C7 16.5 9.5 19.5 11.5 21.5 V24 H20.5 V21.5 C22.5 19.5 25 16.5 25 13 C25 8 21.5 4 16 4 Z" />
    {/* Internal filament */}
    <path d="M13.5 14 C13.5 11 15 10 16 10 C17 10 18.5 11 18.5 14" strokeWidth="1.8" />
    {/* Screw base contacts */}
    <line x1="13" y1="26" x2="19" y2="26" strokeWidth="2.2" />
    <line x1="14.5" y1="28.5" x2="17.5" y2="28.5" strokeWidth="2" />
  </svg>
);

/**
 * 2. ขอขยายเขตไฟฟ้า - 4 arrows expanding outwards to 4 corners
 */
export const ExpandGridArrowsIcon: React.FC<{ className?: string }> = ({
  className = 'w-7 h-7 text-[#78105e]',
}) => (
  <svg
    viewBox="0 0 32 32"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Top-left arrow */}
    <path d="M12 7 H7 V12" />
    <line x1="7" y1="7" x2="12.5" y2="12.5" />

    {/* Top-right arrow */}
    <path d="M20 7 H25 V12" />
    <line x1="25" y1="7" x2="19.5" y2="12.5" />

    {/* Bottom-left arrow */}
    <path d="M12 25 H7 V20" />
    <line x1="7" y1="25" x2="12.5" y2="19.5" />

    {/* Bottom-right arrow */}
    <path d="M20 25 H25 V20" />
    <line x1="25" y1="25" x2="19.5" y2="19.5" />
  </svg>
);

/**
 * 3. เพิ่ม/ลดขนาดมิเตอร์ - Meter box with lightning and up/down arrows
 */
export const ChangeMeterSizeIcon: React.FC<{ className?: string }> = ({
  className = 'w-7 h-7 text-[#78105e]',
}) => (
  <svg
    viewBox="0 0 32 32"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Meter / Box Outline */}
    <rect x="5" y="4" width="18" height="23" rx="4" />
    {/* Display window */}
    <line x1="9" y1="9" x2="19" y2="9" strokeWidth="2" />
    {/* Dial / Lightning */}
    <path d="M14 12 L12 15 H15 L13 19" strokeWidth="1.8" />

    {/* Bottom-right badge with Up/Down arrows */}
    <circle cx="23" cy="23" r="6" fill="#fff" stroke="currentColor" strokeWidth="2" />
    {/* Up arrow */}
    <path d="M21 24.5 V20.5 M20 22 L21 20.5 L22 22" strokeWidth="1.6" />
    {/* Down arrow */}
    <path d="M25 21.5 V25.5 M24 24 L25 25.5 L26 24" strokeWidth="1.6" />
  </svg>
);

/**
 * 4. ขอแก้ไขประวัติ (แก้ไขข้อมูลส่วนตัว) - Document with pencil
 */
export const EditProfileHistoryIcon: React.FC<{ className?: string }> = ({
  className = 'w-7 h-7 text-[#78105e]',
}) => (
  <svg
    viewBox="0 0 32 32"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Document sheet */}
    <path d="M7 6 C7 4.895 7.895 4 9 4 H19 L25 10 V25 C25 26.105 24.105 27 23 27 H9 C7.895 27 7 26.105 7 25 Z" />
    <line x1="11" y1="10" x2="16" y2="10" strokeWidth="2" />
    <line x1="11" y1="14" x2="19" y2="14" strokeWidth="2" />
    <line x1="11" y1="18" x2="15" y2="18" strokeWidth="2" />

    {/* Pencil at bottom right */}
    <path
      d="M17 25 L24 18 L27 21 L20 28 L17 28 Z"
      fill="#fff"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line x1="22.5" y1="19.5" x2="25.5" y2="22.5" strokeWidth="1.6" />
  </svg>
);

/**
 * 5. ขอโอนเปลี่ยนเจ้าของ - Two users with circular transfer arrows
 */
export const TransferOwnershipIcon: React.FC<{ className?: string }> = ({
  className = 'w-7 h-7 text-[#78105e]',
}) => (
  <svg
    viewBox="0 0 32 32"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Left user */}
    <circle cx="10" cy="11" r="3.5" />
    <path d="M5 23 C5 19 7.5 17 10 17 C12.5 17 15 19 15 23" />

    {/* Right user */}
    <circle cx="22" cy="11" r="3.5" />
    <path d="M17 23 C17 19 19.5 17 22 17 C24.5 17 27 19 27 23" />

    {/* Center transfer arrows (clockwise/counter-clockwise cycle) */}
    <path d="M13 13 C14.5 11.5 17.5 11.5 19 13" strokeWidth="1.6" />
    <path d="M19 19 C17.5 20.5 14.5 20.5 13 19" strokeWidth="1.6" />
    <polyline points="18,11.5 19,13 17.5,14" strokeWidth="1.6" />
    <polyline points="14,20.5 13,19 14.5,18" strokeWidth="1.6" />
  </svg>
);

/**
 * 6. ยกเลิกการใช้ไฟฟ้า - Circle with X (cross)
 */
export const TerminateElectricityIcon: React.FC<{ className?: string }> = ({
  className = 'w-7 h-7 text-[#78105e]',
}) => (
  <svg
    viewBox="0 0 32 32"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Circle */}
    <circle cx="16" cy="16" r="11" />
    {/* X mark */}
    <line x1="12" y1="12" x2="20" y2="20" strokeWidth="2.6" />
    <line x1="20" y1="12" x2="12" y2="20" strokeWidth="2.6" />
  </svg>
);
