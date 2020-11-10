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
};

const initialContext: TContext = {
  images: [],
  setSearchTerm: (term) => null,
};

const AppContext = createContext<TContext>(initialContext);
export const AppProvider: FC<ReactNode> = ({ children }) => {
  const [images, setImages] = useState<TImage[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const unsplashUrl = `https://api.unsplash.com/search/photos?page=1&query=${
    searchTerm || 'car'
  }&client_id=${process.env.REACT_APP_ACCESS_KEY}`;

  useEffect(() => {
    const fetchInitialImages = async () => {
      const res = await fetch(unsplashUrl);

      const { results } = await res.json();
      console.log(res);
      setImages(results);
    };

    fetchInitialImages();
  }, [searchTerm]);

  return (
    <AppContext.Provider value={{ images, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
