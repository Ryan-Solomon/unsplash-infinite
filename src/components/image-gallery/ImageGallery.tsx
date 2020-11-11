import React, { useEffect, useRef } from 'react';
import { useAppContext } from '../../context/appContext';
import ImageComponent from '../ImageComponent/Image';
import './ImageGallery.styles.css';

const ImageGallery = () => {
  const { images, setPage } = useAppContext();
  const loader = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    var options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    };
    // initialize IntersectionObserver
    // and attaching to Load More div
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, []);

  const handleObserver = (entities: any) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((page: number) => page + 1);
    }
  };

  if (!images) return <h1>...loading</h1>;

  return (
    <section className='gallery-container'>
      <div className='photos-center'>
        {images.map((image) => {
          return <ImageComponent key={image.id} image={image} />;
        })}
      </div>
      <div className='loading' ref={loader}>
        <h2 style={{ color: ' #181818' }}>Load More</h2>
      </div>
    </section>
  );
};

export default ImageGallery;
