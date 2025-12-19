
import React from 'react';
import Hero from './components/Hero';
import VideoGallery from './components/VideoGallery';
import PhotoArchive from './components/PhotoArchive';
import LostAndFound from './components/LostAndFound';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="min-h-screen selection:bg-black selection:text-white">
      {/* Decorative side margins for editorial feel */}
      <div className="hidden lg:block fixed top-0 left-0 w-12 h-screen border-r border-gray-100 z-50 bg-white/50 backdrop-blur-sm"></div>
      <div className="hidden lg:block fixed top-0 right-0 w-12 h-screen border-l border-gray-100 z-50 bg-white/50 backdrop-blur-sm"></div>

      <Hero />
      
      <div className="relative z-10 space-y-0">
        <VideoGallery />
        <PhotoArchive />
        <LostAndFound />
      </div>
      
      <Footer />
    </main>
  );
};

export default App;
