export interface ArticlesResponse {
  docs: Article[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

export interface Article {
  createdAt: string;
  updatedAt: string;
  title: string;
  subtitle: string;
  slug: string;
  category: {
    createdAt: string;
    updatedAt: string;
    title: string;
    slug: string;
    id: string;
  };
  content: string;
  imagenes: ImageDocument[];
  status: string;
  publishedDate: string;
  author: string;
  id: string;
}

export interface ImageDocument {
  imagen: {
    createdAt: string;
    updatedAt: string;
    prefix: string;
    filename: string;
    mimeType: string;
    filesize: number;
    width: number;
    height: number;
    focalX: number;
    focalY: number;
    id: string;
    url: string;
    thumbnailURL: string | null;
  };
  id: string;
}
