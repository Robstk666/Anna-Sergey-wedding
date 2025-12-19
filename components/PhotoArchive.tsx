
import React, { useState } from 'react';
import { PHOTO_CATEGORIES, PHOTO_MANIFEST } from '../constants';
import { PhotoCategory } from '../types';
import PhotoModal from './PhotoModal';

const PhotoArchive: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<PhotoCategory | null>(null);

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#fcfcfc]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-serif text-black mb-6 uppercase tracking-tight">
                Фотографии
              </h2>
              <p className="text-sm text-gray-500 font-light leading-relaxed max-w-xs">
                Разделы обновляются автоматически. Просто загляните внутрь, чтобы увидеть всё.
              </p>
            </div>
            
            <div className="hidden lg:block">
              <div className="w-12 h-[1px] bg-black mb-6"></div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 italic">
                Editorial Collection 2026
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {PHOTO_CATEGORIES.map((cat) => {
              const photos = PHOTO_MANIFEST[cat.id] || [];
              const previewImg = photos[0] || `./assets/photos/${cat.id}/01.jpg`;
              const photoCount = photos.length;

              return (
                <div 
                  key={cat.id} 
                  onClick={() => setSelectedCategory({ ...cat, photos, count: photoCount })}
                  className="group relative h-64 border border-gray-100 bg-white overflow-hidden cursor-pointer flex flex-col"
                >
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={previewImg} 
                      alt={cat.name} 
                      loading="lazy"
                      className={`w-full h-full object-cover grayscale transition-all duration-700 scale-110 group-hover:scale-100 opacity-20 group-hover:opacity-40`}
                    />
                  </div>
                  
                  <div className="relative z-10 flex-1 flex flex-col items-center justify-center border-b border-gray-100 p-8 bg-white/60 backdrop-blur-[2px] group-hover:bg-transparent transition-colors duration-500 text-center">
                    <h3 className="text-2xl font-serif tracking-widest mb-2 transition-transform duration-500 group-hover:-translate-y-1">
                      {cat.name}
                    </h3>
                    <div className="w-8 h-[1px] bg-black/10 group-hover:w-16 transition-all duration-500"></div>
                  </div>
                  
                  <div className="p-4 flex justify-between items-center text-[10px] tracking-widest text-gray-400 font-light bg-white">
                    <span className="group-hover:text-black transition-colors">ОТКРЫТЬ АРХИВ</span>
                    <span className="opacity-100">
                      {photoCount} ФОТО
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {selectedCategory && (
        <PhotoModal 
          categoryName={selectedCategory.name} 
          photos={selectedCategory.photos || []}
          onClose={() => setSelectedCategory(null)} 
        />
      )}
    </section>
  );
};

export default PhotoArchive;
