import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.css';

export default function ImageGallery({ images, onClick }) {
  return (
    <div>
      <ul className="ImageGallery">
        <ImageGalleryItem images={images} onClick={onClick} />
      </ul>
    </div>
  );
}