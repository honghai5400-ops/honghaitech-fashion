import React from 'react';
import { RefreshCcw, ArrowUpRight } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-[#112950] text-white/90 border-b border-[#112950] overflow-hidden relative group cursor-pointer transition-all duration-500">
      <div className="container mx-auto px-4 py-2.5 flex items-center justify-center gap-2 text-[12px] uppercase tracking-widest relative z-10">
        <RefreshCcw className="w-3.5 h-3.5 text-[#fca120] animate-[spin_4s_linear_infinite]" />
        <span className="font-semibold text-white">
           ĐỔI, TRẢ MIỄN PHÍ <span className="font-light text-white/70">TẠI NHÀ NẾU KHÔNG HÀI LÒNG</span>
        </span>
        <a href="#" className="flex items-center gap-1 text-[#fca120] font-bold ml-2 transition-colors relative after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-[1px] after:bg-[#fca120] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">
          CHI TIẾT <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
