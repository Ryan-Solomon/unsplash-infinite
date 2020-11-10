export type TImage = {
  id: string;
  width: string;
  height: string;
  description: string;
  urls: {
    thumb: string;
  };
};

export type TUnsplashResponse = {
  total: number;
  total_pages: number;
  results: TImage[];
};

export type State = {
  images: TImage[];
};
