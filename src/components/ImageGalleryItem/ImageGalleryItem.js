import './ImageGalleryItem.css';

export default function ImageGalleryItem({ images, onClick }) {
    return (
      <>
        {images.map(image => (
          <li className="ImageGalleryItem" key={image.id}>
            <img
              onClick={onClick}
              src={image.webformatURL}
              data-sourse={image.largeImageURL}
              alt=""
              className="ImageGalleryItem-image"
            />
          </li>
        ))}
      </>
    );
  }