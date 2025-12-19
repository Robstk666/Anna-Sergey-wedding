
export interface VideoItem {
  id: string;
  title: string;
  length: string;
  thumbnail: string;
}

export interface PhotoCategory {
  id: string;
  name: string;
  // Эти поля теперь заполняются динамически при сканировании
  count?: number;
  previewImage?: string;
  photos?: string[];
}

export interface PhotoItem {
  id: string;
  url: string;
  alt: string;
}
