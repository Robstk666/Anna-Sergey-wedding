
import React, { useState, useEffect } from 'react';
import { PHOTO_CATEGORIES } from '../constants';
import { PhotoCategory } from '../types';
import PhotoModal from './PhotoModal';

// Хелпер для проверки существования файла через HEAD-запрос (чтобы не качать само фото)
const checkFileExists = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};

const PhotoArchive: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<PhotoCategory | null>(null);
  const [categoriesData, setCategoriesData] = useState<Record<string, { photos: string[], count: number }>>({});
  const [isScanning, setIsScanning] = useState(true);

  useEffect(() => {
    const scanAllCategories = async () => {
      const results: Record<string, { photos: string[], count: number }> = {};
      
      for (const cat of PHOTO_CATEGORIES) {
        const foundPhotos: string[] = [];
        let index = 1;
        let searching = true;

        // Сканируем до первого отсутствующего файла (лимит 200 на случай ошибок)
        while (searching && index <= 200) {
          const fileName = index.toString().padStart(2, '0');
          const path = `./assets/photos/${cat.id}/${fileName}.jpg`;
          
          const exists = await checkFileExists(path);
          if (exists) {
            foundPhotos.push(path);
            index++;
          } else {
            searching = false;
          }
        }
        
        results[cat.id] = {
          photos: foundPhotos,
          count: foundPhotos.length
        };
      }
      
      setCategoriesData(results);
      setIsScanning(false);
    };

    scanAllCategories();
  }, []);

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
              const data = categoriesData[cat.id];
              const previewImg = data?.photos[0] || `./assets/photos/${cat.id}/01.jpg`;
              const photoCount = data?.count ?? 0;

              return (
                <div 
                  key={cat.id} 
                  onClick={() => data && setSelectedCategory({ ...cat, photos: data.photos, count: data.count })}
                  className="group relative h-64 border border-gray-100 bg-white overflow-hidden cursor-pointer flex flex-col"
                >
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={previewImg} 
                      alt={cat.name} 
                      className={`w-full h-full object-cover grayscale transition-all duration-700 scale-110 group-hover:scale-100 ${data ? 'opacity-20 group-hover:opacity-40' : 'opacity-5'}`}
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
                    <span className={`transition-opacity duration-1000 ${isScanning ? 'opacity-30' : 'opacity-100'}`}>
                      {isScanning ? '...' : `${photoCount} ФОТО`}
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
