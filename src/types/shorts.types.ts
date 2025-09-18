export interface ShortItem {
  id: string;
  url: string;
  title?: string;
  likes: number;
  comments: number;
  isLiked: boolean;
  author?: {
    name: string;
    avatar?: string;
  };
}

export interface LayoutRectangle {
  x: number;
  y: number;
  width: number;
  height: number;
}