import React, { FC } from 'react';
import { TImage } from '../types/types';
import './Image.styles.css';

type Props = {
  image: TImage;
};

const ImageComponent: FC<Props> = ({ image }) => {
  return (
    <section className='image'>
      <img src={image.urls.thumb} alt={image.description} />
    </section>
  );
};

export default ImageComponent;
