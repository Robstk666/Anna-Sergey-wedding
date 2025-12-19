
import { VideoItem, PhotoCategory } from './types';

export const HERO_TITLE = "АННА И СЕРГЕЙ";
export const WEDDING_DATE = "15.07.2026";

export interface LostItem {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export const LOST_ITEMS: LostItem[] = [
  { 
    id: '1', 
    name: 'Туфля (одна)', 
    description: 'Белая, изящная. Найдена под столом №4.', 
    imageUrl: './assets/items/item1.jpg' 
  },
  { 
    id: '2', 
    name: 'Серёжка-гвоздик', 
    description: 'Серебро, лаконичная форма. Найдена на танцполе.', 
    imageUrl: './assets/items/item2.jpg' 
  },
  { 
    id: '3', 
    name: 'Галстук-бабочка', 
    description: 'Ярко-розовый бархат. Кто-то очень активно танцевал!', 
    imageUrl: './assets/items/item3.jpg' 
  },
  { 
    id: '4', 
    name: 'Повербанк', 
    description: 'Насыщенный розовый цвет. Скучает по владельцу.', 
    imageUrl: './assets/items/item4.jpg' 
  }
];

export const VIDEOS: VideoItem[] = [
  { id: '1', title: 'Свадебный фильм', length: '00:12', thumbnail: './assets/videos/video1.mp4' },
  { id: '2', title: 'Атмосфера дня', length: '00:15', thumbnail: './assets/videos/video2.mp4' },
  { id: '3', title: 'Бэкстейдж', length: '00:08', thumbnail: './assets/videos/video3.mp4' }
];

/**
 * Просто список категорий.
 */
export const PHOTO_CATEGORIES: PhotoCategory[] = [
  { id: 'ceremony', name: 'ЦЕРЕМОНИЯ' },
  { id: 'furshet', name: 'ФУРШЕТ' },
  { id: 'party', name: 'ВЕЧЕРИНКА' },
  { id: 'details', name: 'ДЕТАЛИ' }
];

export const PHOTO_MANIFEST: Record<string, string[]> = {
  "ceremony": [
    "./assets/photos/ceremony/01.jpg",
    "./assets/photos/ceremony/02.jpg",
    "./assets/photos/ceremony/03.jpg",
    "./assets/photos/ceremony/04.jpg"
  ],
  "party": [
    "./assets/photos/party/01.jpg",
    "./assets/photos/party/02.jpg",
    "./assets/photos/party/03.jpg",
    "./assets/photos/party/04.jpg",
    "./assets/photos/party/05.jpg",
    "./assets/photos/party/06.jpg"
  ],
  "furshet": [
    "./assets/photos/furshet/01.jpg",
    "./assets/photos/furshet/02.jpg",
    "./assets/photos/furshet/03.jpg",
    "./assets/photos/furshet/04.jpg",
    "./assets/photos/furshet/05.jpg",
    "./assets/photos/furshet/06.jpg"
  ],
  "details": [
    "./assets/photos/details/01.jpg",
    "./assets/photos/details/02.jpg",
    "./assets/photos/details/03.jpg"
  ]
};
