export interface PaintingI {
  id: string;
  title: string;
  slug: string;
  technique: string;
  year: string;
  size: string;
  category: { title: string; slug: string };
  previewImage: {
    id: string;
    url: string;
  };
  images: {
    id: string;
    url: string;
  }[];
}

export interface PreviewI {
  id: string;
  url: string;
  image: {
    url: string;
  };
}
