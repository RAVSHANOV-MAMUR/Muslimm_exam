import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import PhotosList from "./PhotosList";
import "./Profile.scss";

import like from "./img/Combined-Shape.png";
import dislike from "./img/Combined-Shape(1).png";
import share from "./img/Fill62.png";
import Pro from "./img/Oval.png";
import Channels from "./Channel";

function Profile() {
  const [photo, setPhoto] = useState(null);
  const [photos, setPhotos] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/photos/${id}`
        );
        setPhoto(response.data);
      } catch (error) {
        console.error("Error fetching photo:", error);
      }
    };

    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/photos?_limit=10`
        );
        setPhotos(response.data.slice(0, 4));
      } catch (error) {
        console.error("Error fetching photos list:", error);
      }
    };

    fetchPhoto();
    fetchPhotos();
  }, [id]);

  const handlePhotoSelect = (selectedId) => {
    navigate(`/photos/${selectedId}`);
  };

  if (!photo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Profil">
      <ul className="profil__list">
        <li className="profil__item">
          <img className="profil__img" src={photo.url} alt={photo.title} width={1000} />
          <h2 className="profile__title">{photo.title}</h2>
        </li>
        <div className="profile__add">
          <p className="profile__text">123k views</p>
          <div className="buttons">
            <button className="profile__share">
              <img src={like} alt="like" />
              123k
            </button>

            <button className="profile__share">
              <img src={dislike} alt="like" />
              435k
            </button>

            <button className="profile__share">
              <img src={share} alt="like" />
              Share
            </button>
          </div>
        </div>

        <ul className="pro__list">
          <img src={Pro} alt="img" width={80} height={80} />
          <li className="pro__item">
            <Link className="pro__heading" to={"/channel/" }>Food & Drink</Link>
            <p className="pro__text">Published on 14 Jun 2019</p>
            <p className="pro__texts">
              A successful marketing plan relies heavily on the pulling-power of
              advertising copy. Writing result-oriented ad copy is difficult, as
              it must appeal to, entice, and convince consumers to take action.
              There is no magic formula to write perfect ad copy; it is based on
              a number of factors, including ad placement, demographic, even the
              consumer’s mood when they see your ad.
            </p>
            <a className="pro__link" href="#link">Show more</a>
          </li>
          <button className="pro__subs">Subscribe 2.3m</button>
        </ul>
      </ul>
      <PhotosList photos={photos} onPhotoSelect={handlePhotoSelect} />
    </div>
  );
}

export default Profile;
