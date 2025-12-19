
import React from 'react';
import { VIDEOS } from '../constants';
import { Play } from 'lucide-react';

const VideoGallery: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 border-b border-gray-100 pb-8 flex justify-between items-end">
          <h2 className="text-xl font-serif text-black uppercase tracking-widest">
            Избранные кадры
          </h2>
          <span className="text-[9px] text-gray-400 font-light uppercase tracking-widest">
            {VIDEOS.length} ВИДЕО
          </span>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {VIDEOS.map((video) => (
            <div key={video.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden bg-black mb-6 border border-gray-100 shadow-sm">
                <video 
                  src={video.thumbnail}
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20 backdrop-blur-[1px]">
                   <div className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center bg-white/10">
                      <Play size={16} fill="white" className="text-white ml-1" />
                   </div>
                </div>
                {/* Элегантная виньетка сверху для глубины */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/20 to-transparent opacity-40"></div>
              </div>
              <div className="flex justify-between items-baseline px-1">
                <h3 className="text-[10px] uppercase tracking-[0.2em] font-medium group-hover:text-gray-600 transition-colors">
                  {video.title}
                </h3>
                <span className="text-[9px] text-gray-400 font-light tabular-nums uppercase">
                  {video.length}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
