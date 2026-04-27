import { Lock } from 'lucide-react';

interface PdfDocIconProps {
  name: string;
  url?: string;
  locked: boolean;
}

function PdfDocIcon({ name, url, locked }: PdfDocIconProps) {
  if (locked) {
    return (
      <div className="flex flex-col items-center gap-2 group">
        <div className="relative cursor-pointer" style={{ width: '80px', height: '100px' }}>
          {/* Blurred PDF icon */}
          <div className="w-full h-full rounded-md flex flex-col items-center justify-center blur-[2px] opacity-60"
            style={{ backgroundColor: '#dc2626' }}
          >
            <svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 0H4C1.79 0 0 1.79 0 4V40C0 42.21 1.79 44 4 44H32C34.21 44 36 42.21 36 40V14L22 0Z" fill="white" fillOpacity="0.9"/>
              <path d="M22 0L36 14H26C23.79 14 22 12.21 22 10V0Z" fill="white" fillOpacity="0.6"/>
              <text x="18" y="32" textAnchor="middle" fill="#dc2626" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif">PDF</text>
            </svg>
          </div>
          {/* Lock overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#101820] rounded-full p-2.5 shadow-lg">
              <Lock size={20} className="text-[#FEE715]" />
            </div>
          </div>
        </div>
        <span className="text-xs text-gray-500 text-center max-w-[120px] leading-tight">{name}</span>
      </div>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-2 group cursor-pointer"
    >
      <div
        className="rounded-md flex flex-col items-center justify-center transition-shadow duration-200 hover:shadow-lg hover:shadow-red-200"
        style={{ width: '80px', height: '100px', backgroundColor: '#dc2626' }}
      >
        <svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 0H4C1.79 0 0 1.79 0 4V40C0 42.21 1.79 44 4 44H32C34.21 44 36 42.21 36 40V14L22 0Z" fill="white" fillOpacity="0.9"/>
          <path d="M22 0L36 14H26C23.79 14 22 12.21 22 10V0Z" fill="white" fillOpacity="0.6"/>
          <text x="18" y="32" textAnchor="middle" fill="#dc2626" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif">PDF</text>
        </svg>
      </div>
      <span className="text-xs text-gray-700 group-hover:text-red-600 text-center max-w-[120px] leading-tight transition-colors">{name}</span>
    </a>
  );
}

export default PdfDocIcon;
