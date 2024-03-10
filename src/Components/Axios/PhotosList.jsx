import React from "react";
import "./Profile.scss";
import Auto from "./img/Autoplay.png";

const PhotosList = ({ photos, onPhotoSelect }) => {
  return (
    <div className="photos-list">
      <h2 className="list__title">Next</h2>
      <img src={Auto} alt="img" />
      {photos.map((photo) => (
        <div
          className="photolist"
          key={photo.id}
          onClick={() => onPhotoSelect(photo.id)}
        >
          <img
            className="photolist__img"
            src={photo.thumbnailUrl}
            alt={photo.title}
          />
          <p className="photolist__text">{photo.title}</p>
        </div>
      ))}
    </div>
  );
};

export default PhotosList;
