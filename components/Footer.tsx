
import React from 'react';
import { Download } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-32 px-6 text-center bg-white border-t border-gray-100">
      <div className="max-w-xl mx-auto space-y-12">
        <h2 className="text-4xl font-serif text-black leading-snug">
          Спасибо, что разделили эти мгновения с нами.
        </h2>
        
        <div className="flex flex-col items-center gap-8">
          <button className="px-10 py-4 border border-black text-black text-[10px] uppercase tracking-[0.3em] font-medium hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-3">
            <Download size={14} strokeWidth={1.5} />
            Скачать весь архив
          </button>
          
          <div className="pt-8">
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-light">
              Made with love for Anna & Sergey
            </p>
            <p className="text-[10px] uppercase tracking-widest text-gray-300 mt-2">
              © 2026 Editorial Wedding Archive
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
