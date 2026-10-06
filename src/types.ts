export type Language = 'th' | 'en';

export type NavTab = 'home' | 'outage' | 'pay' | 'inbox' | 'more';

export interface ElectricityLocation {
  id: string;
  name: string;
  caNumber: string; // 12-digit CA number
  accountNumber: string;
  address: string;
  branch: string;
  meterNumber: string;
  currentUnits: number;
  lastMonthUnits: number;
  amountDue: number;
  dueDate: string;
  status: 'unpaid' | 'paid' | 'processing';
  tariffType: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  imageUrl?: string;
}

export interface ServiceModalType {
  type: 
    | 'other-services'
    | 'other-fees'
    | 'payment-locations'
    | 'watt-d-point'
    | 'calculator'
    | 'e-bill'
    | 'news'
    | '1129'
    | 'e-service'
    | 'pea-shopping'
    | 'solar'
    | 'add-location'
    | 'all-locations'
    | 'profile'
    | 'pay-bill'
    | null;
}
