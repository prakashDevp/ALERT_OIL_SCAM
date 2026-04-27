import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="bg-[#101820] py-8">
      <div className="container mx-auto px-4">
        <div className="group bg-[#FEE715] hover:bg-[#101820] border-2 border-[#FEE715] rounded-2xl h-[160px] flex flex-col items-center justify-center px-8 transition-colors duration-300 cursor-default">
          <h1 className="text-3xl md:text-5xl font-black text-[#101820] group-hover:text-[#FEE715] text-center transition-colors duration-300">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base md:text-lg text-[#101820] group-hover:text-[#FEE715] text-center mt-2 transition-colors duration-300">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default PageHeader;