export interface Content {
  blockType: string;
  heading: string;
  articulo: Articulo[];
  id: string;
}

export interface Articulo {
  post: Post;
  id: string;
}

export interface Post {
  createdAt: string;
  updatedAt: string;
  title: string;
  subtitle: string;
  slug: string;
  category: Category;
  content: Content;
  imagenes: Imagene[];
  embeddedVideos: any[];
  status: string;
  publishedDate: string;
  author: string;
  id: string;
}

export interface Category {
  createdAt: string;
  updatedAt: string;
  title: string;
  slug: string;
  id: string;
}

export interface Content {
  root: Root2;
}

export interface Root2 {
  children: Children[];
  direction: string;
  format: string;
  indent: number;
  type: string;
  version: number;
}

export interface Children {
  children: Children2[];
  direction: string;
  format: string;
  indent: number;
  type: string;
  version: number;
  textFormat: number;
  textStyle: string;
}

export interface Children2 {
  detail: number;
  format: number;
  mode: string;
  style: string;
  text: string;
  type: string;
  version: number;
}

export interface Imagene {
  imagen: Imagen;
  id: string;
}

export interface Imagen {
  createdAt: string;
  updatedAt: string;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  focalX: number;
  focalY: number;
  sizes: Sizes;
  id: string;
  url: string;
  thumbnailURL: any;
}

export interface Sizes {
  thumbnail: Thumbnail;
  card: Card;
}

export interface Thumbnail {
  width: number;
  height: number;
  mimeType: string;
  filesize: number;
  filename: string;
  url: string;
}

export interface Card {
  width?: number;
  height?: number;
  mimeType?: string;
  filesize?: number;
  filename?: string;
  url?: string;
}
