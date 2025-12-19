
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

interface PhotoModalProps {
  categoryName: string;
  photos: string[];
  onClose: () => void;
}

const PhotoModal: React.FC<PhotoModalProps> = ({ categoryName, photos, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return createPortal(
    <div className="fixed inset-0 z-[100] bg-white flex flex-col animate-in fade-in duration-500">
      <nav className="p-8 flex justify-between items-center border-b border-gray-100">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-gray-400 block mb-1">Архив фотографий</span>
          <h2 className="text-xl font-serif uppercase tracking-widest">{categoryName}</h2>
        </div>
        <button 
          onClick={onClose}
          className="p-4 hover:opacity-50 transition-opacity"
          aria-label="Закрыть"
        >
          <X size={24} strokeWidth={1} />
        </button>
      </nav>

      <div className="flex-1 overflow-x-auto overflow-y-hidden hide-scrollbar flex items-center gap-12 px-12 md:px-24">
        {photos.length > 0 ? (
          photos.map((photo, idx) => (
            <div key={idx} className="flex-shrink-0 h-[70vh] group">
              <img 
                src={photo} 
                alt={`${categoryName} photo ${idx}`} 
                loading="lazy"
                className="h-full w-auto object-contain grayscale transition-all duration-700 hover:grayscale-0 shadow-2xl"
              />
              <p className="mt-4 text-[10px] text-gray-400 font-light uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Кадр № {idx + 1}
              </p>
            </div>
          ))
        ) : (
          <div className="w-full text-center py-20">
            <p className="text-sm font-serif italic text-gray-400 tracking-widest">Эта папка пока пуста...</p>
          </div>
        )}
        {/* Extra spacer at end if multiple photos */}
        {photos.length > 1 && <div className="flex-shrink-0 w-24"></div>}
      </div>

      <footer className="p-8 border-t border-gray-100 flex justify-center">
        {photos.length > 1 ? (
          <div className="flex items-center gap-4">
             <div className="w-24 h-[1px] bg-black/10"></div>
             <span className="text-[10px] uppercase tracking-widest text-gray-400">Скрольте вбок</span>
             <div className="w-24 h-[1px] bg-black/10"></div>
          </div>
        ) : (
          <div className="text-[10px] uppercase tracking-widest text-gray-300 font-light">
            {categoryName} • Архив
          </div>
        )}
      </footer>
    </div>,
    document.body
  );
};

export default PhotoModal;
