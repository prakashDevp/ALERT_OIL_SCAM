import { Scammer } from '../types/scammer';

export const scammers: Scammer[] = [
  {
    id: 'global-fuel-trading-ltd',
    name: 'Global Fuel Trading Ltd',
    country: 'Nigeria',
    type: 'Fuel Scam',
    description: 'Fake crude oil supplier requesting upfront payments for non-existent fuel deliveries. Multiple victims reported across West Africa and Europe.',
    websites: ['www.globalfueltrading.com', 'globalfueltraders.net'],
    emails: ['info@globalfueltrading.com', 'sales@globalfueltrading.com'],
    phones: ['+234-XXX-XXX-XXXX', '+44-XXX-XXX-XXXX'],
    representatives: ['Mr. James O.', 'Dr. Samuel K.'],
    generalInfo: 'Global Fuel Trading Ltd poses as a legitimate crude oil supplier based in Nigeria. They target international buyers with offers of discounted petroleum products. The company uses forged Soft Corporate Offers (SCOs) and fraudulent Proof of Product (POP) documents to appear credible. They request upfront payments including performance bonds and insurance deposits before disappearing with funds.',
    additionalComments: 'Multiple victims across West Africa and Europe have reported losses exceeding $2 million USD. The company operates through rotating websites and email addresses to avoid detection. All documents presented have been confirmed as forgeries by independent verification.',
    headerImage: 'https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=800',
    documents: {
      scamDocs: [
        { name: 'Forged SCO Document', locked: true },
        { name: 'Fake POP Document', locked: true },
        { name: 'False Bank Guarantee', locked: true }
      ],
      dueDiligence: [
        { name: 'DD Report — Global Fuel Trading', locked: true }
      ]
    },
    category: 'Fuel Scams'
  },
  {
    id: 'premier-oil-mandate-group',
    name: 'Premier Oil Mandate Group',
    country: 'Dubai, UAE',
    type: 'Mandate Scam',
    description: 'Fake mandate holder claiming access to Russian crude oil at below-market prices. Requests commission deposits upfront.',
    websites: ['www.premieroilmandate.com'],
    emails: ['contact@premieroilmandate.com', 'deals@premieroilmandate.com'],
    phones: ['+971-XXX-XXX-XXXX', '+44-XXX-XXX-XXXX'],
    representatives: ['Sheikh Ahmed R.', 'Mr. Viktor P.'],
    generalInfo: 'Premier Oil Mandate Group operates from Dubai claiming to hold exclusive mandates for Russian crude oil exports. They approach buyers with offers of heavily discounted Ural crude and ESPO blend. The company demands upfront commission payments and "mandate verification fees" before any transaction. No legitimate mandate or supplier relationship has been verified.',
    additionalComments: 'This operation uses professional-looking mandate letters and fake NCNDA documents. They claim connections to major Russian oil producers which are entirely fabricated. Several international trading companies have reported losses after paying mandate verification fees.',
    headerImage: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800',
    documents: {
      scamDocs: [
        { name: 'Fake Mandate Letter', locked: true },
        { name: 'Forged NCNDA', locked: true }
      ],
      dueDiligence: [
        { name: 'DD Report — Premier Oil Mandate', locked: true }
      ]
    },
    category: 'Mandate Scams'
  },
  {
    id: 'fast-ship-logistics-llc',
    name: 'Fast Ship Logistics LLC',
    country: 'Ghana',
    type: 'Logistics Scam',
    description: 'Fake shipping company collecting freight charges upfront for oil cargo that never ships. Uses forged bills of lading.',
    websites: ['www.fastshiplogistics.com', 'fastshiplog.net'],
    emails: ['operations@fastshiplogistics.com', 'freight@fastshiplogistics.com'],
    phones: ['+233-XXX-XXX-XXXX', '+1-XXX-XXX-XXXX'],
    representatives: ['Capt. Emmanuel A.', 'Mr. Richard T.'],
    generalInfo: 'Fast Ship Logistics LLC poses as a licensed international shipping and logistics company specializing in petroleum cargo. They offer competitive freight rates for oil tanker shipments and present forged vessel certificates, bills of lading, and insurance documents. After receiving freight charges and demurrage payments, no cargo is ever shipped.',
    additionalComments: 'The company uses real vessel names but has no actual charter agreements. They create urgency by claiming limited vessel availability and tight loading windows. Victims have reported losses ranging from $50,000 to $500,000 in freight charges and related fees.',
    headerImage: 'https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=800',
    documents: {
      scamDocs: [
        { name: 'Forged Bill of Lading', locked: true },
        { name: 'Fake Vessel Certificate', locked: true },
        { name: 'False Insurance Document', locked: true }
      ],
      dueDiligence: [
        { name: 'DD Report — Fast Ship Logistics', locked: true }
      ]
    },
    category: 'Logistics Scams'
  },
  {
    id: 'sample-dd-report-confidential',
    name: 'Sample DD Report — Confidential',
    country: 'Multiple Countries',
    type: 'Independent DD',
    description: 'Sample due diligence report — client details hidden to protect confidentiality.',
    websites: ['XXXXX'],
    emails: ['XXXXX'],
    phones: ['XXXXX'],
    representatives: ['XXXXX'],
    generalInfo: 'This is a sample due diligence report demonstrating the quality and format of our professional DD investigations. All identifying client and seller information has been replaced with XXXXX to protect confidentiality. Our reports cover company registration verification, document authentication, banking relationship checks, and comprehensive risk assessments.',
    additionalComments: 'Full DD reports include detailed findings, risk scores, document verification results, and clear recommendations. Each report is delivered within 24-48 hours of receiving seller documentation. Order your own DD report for $297 to protect your business.',
    documents: {
      scamDocs: [],
      dueDiligence: [
        { name: 'Sample DD Report', url: '/Client_DD_report_1.pdf', locked: false }
      ]
    },
    category: 'Independent DD'
  }
];
