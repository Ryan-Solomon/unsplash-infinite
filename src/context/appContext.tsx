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
};

const initialContext: TContext = {
  images: [],
};

const AppContext = createContext<TContext>(initialContext);
export const AppProvider: FC<ReactNode> = ({ children }) => {
  const [images, setImages] = useState<TImage[]>([]);
  const unsplashUrl = `https://api.unsplash.com/search/photos?page=1&query=car&client_id=${process.env.REACT_APP_ACCESS_KEY}`;

  useEffect(() => {
    const fetchInitialImages = async () => {
      const res = await fetch(unsplashUrl);

      const { results } = await res.json();
      console.log(res);
      setImages(results);
    };

    fetchInitialImages();
  }, []);

  return (
    <AppContext.Provider value={{ images }}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
