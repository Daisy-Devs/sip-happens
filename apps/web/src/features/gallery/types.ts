export interface GalleryItem {
  id: string;
  media_url: string;
  caption: string;
  category: string;
  permalink?: string;
}

export interface GalleryCategory {
  id: string;
  label: string;
}