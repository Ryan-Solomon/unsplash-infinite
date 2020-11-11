import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { State, TImage } from '../components/types/types';

type TContext = {
  images: TImage[];
  setSearchTerm: (term: string) => void;
  setPage: (fn: (p: number) => void) => void;
};

const initialContext: TContext = {
  images: [],
  setSearchTerm: (term) => null,
  setPage: (fn) => null,
};

const AppContext = createContext<TContext>(initialContext);

export const AppProvider: FC<ReactNode> = ({ children }) => {
  const [images, setImages] = useState<TImage[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState<(p: number) => void | number>(() => 1);

  const unsplashUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${
    searchTerm || 'car'
  }&client_id=${process.env.REACT_APP_ACCESS_KEY}`;

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch(unsplashUrl);

      const { results } = await res.json();
      console.log(res);
      setImages(results);
    };

    fetchImages();
  }, [searchTerm, page]);

  return (
    <AppContext.Provider value={{ images, setSearchTerm, setPage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
