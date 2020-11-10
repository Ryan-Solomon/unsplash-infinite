import React from 'react';
import { useAppContext } from '../../context/appContext';
import ImageComponent from '../ImageComponent/Image';
import './ImageGallery.styles.css';

const ImageGallery = () => {
  const { images } = useAppContext();
  if (!images) return <h1>...loading</h1>;

  return (
    <section className='gallery-container'>
      <div className='photos-center'>
        {images.map((image) => {
          return <ImageComponent key={image.id} image={image} />;
        })}
      </div>
    </section>
  );
};

export default ImageGallery;
