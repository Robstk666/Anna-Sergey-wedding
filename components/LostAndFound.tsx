
import React, { useState, useEffect } from 'react';
import { LOST_ITEMS } from '../constants';
import { Search } from 'lucide-react';

const LostAndFound: React.FC = () => {
  const [activeItem, setActiveItem] = useState<{ url: string; x: number; y: number } | null>(null);

  useEffect(() => {
    const handleGlobalClick = () => setActiveItem(null);
    if (activeItem) {
      window.addEventListener('click', handleGlobalClick);
      window.addEventListener('scroll', handleGlobalClick);
    }
    return () => {
      window.removeEventListener('click', handleGlobalClick);
      window.removeEventListener('scroll', handleGlobalClick);
    };
  }, [activeItem]);

  const handleItemClick = (e: React.MouseEvent, imageUrl: string) => {
    e.stopPropagation();
    setActiveItem({
      url: imageUrl,
      x: e.clientX,
      y: e.clientY
    });
  };

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white border-t border-gray-50 relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-10 h-10 border border-gray-100 rounded-full mb-8 opacity-50">
          <Search size={14} className="text-gray-400" />
        </div>
        <h2 className="text-2xl font-serif text-black uppercase tracking-widest mb-4">
          Забытые вещи
        </h2>
        <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em] font-light mb-16">
          Кто-то оставил частичку себя на нашем празднике
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 text-left max-w-2xl mx-auto">
          {LOST_ITEMS.map((item) => (
            <div 
              key={item.id} 
              className="border-b border-gray-100 pb-4 group cursor-pointer transition-all duration-300 hover:border-black/20"
              onClick={(e) => handleItemClick(e, item.imageUrl)}
            >
              <h3 className="text-[11px] font-medium uppercase tracking-[0.2em] mb-2 flex items-center justify-between group-hover:text-gray-500">
                {item.name}
                <span className="text-[8px] opacity-0 group-hover:opacity-40 transition-opacity uppercase tracking-widest font-light italic">Посмотреть</span>
              </h3>
              <p className="text-[10px] text-gray-400 italic font-serif leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 flex flex-col items-center gap-5">
          <p className="text-[9px] text-gray-400 uppercase tracking-[0.3em] font-light">
            Узнали свою вещь? Напишите нам в Telegram
          </p>
          <a 
            href="https://t.me/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center border border-gray-100 rounded-full hover:bg-black hover:text-white transition-all duration-500 group"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M11.944 0C5.346 0 0 5.346 0 11.944c0 6.598 5.346 11.944 11.944 11.944 6.598 0 11.944-5.346 11.944-11.944C23.888 5.346 18.542 0 11.944 0zm5.83 7.828c-.172 1.832-.888 6.054-1.248 7.974-.152.812-.45 1.084-.74 1.11-.63.058-1.106-.418-1.716-.818-.956-.626-1.496-1.014-2.424-1.626-1.072-.708-.378-1.098.234-1.734.16-.166 2.946-2.698 3-2.924.006-.03.014-.142-.052-.2-.066-.058-.162-.038-.232-.022-.1.024-1.688 1.074-4.766 3.15-.45.31-.858.462-1.222.454-.402-.008-1.176-.226-1.75-.414-.706-.23-1.266-.352-1.218-.744.026-.204.306-.414.842-.63 3.3-1.436 5.5-2.384 6.6-2.844 3.14-1.312 3.792-1.54 4.218-1.548.094-.002.304.02.44.13.114.092.146.216.154.304.01.07.018.21.01.328z"/>
            </svg>
          </a>
        </div>
      </div>

      {activeItem && (
        <div 
          className="fixed pointer-events-none z-[100] animate-in zoom-in-95 fade-in duration-300"
          style={{ 
            left: activeItem.x, 
            top: activeItem.y,
            transform: 'translate(-50%, -110%)'
          }}
        >
          <div className="p-1 bg-white shadow-2xl border border-gray-100 rounded-sm">
             <img 
               src={activeItem.url} 
               alt="Item preview" 
               className="w-48 h-48 object-cover grayscale"
             />
          </div>
        </div>
      )}
    </section>
  );
};

export default LostAndFound;