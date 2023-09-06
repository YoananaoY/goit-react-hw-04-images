import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, onClick }) => {
  useEffect(() => {
    console.log('ImageGalleryItem component is mounted.');

    return () => {
      console.log('ImageGalleryItem component will unmount.');
    };
  }, []);

  useEffect(() => {
    console.log('ImageGalleryItem component received a new image prop.');
  }, [image]);

  return (
    <li className={css.ImageGalleryItem}>
      <img
        src={image.webformatURL}
        alt=""
        className="ImageGalleryItem-image"
        onClick={() => onClick(image.largeImageURL)}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
