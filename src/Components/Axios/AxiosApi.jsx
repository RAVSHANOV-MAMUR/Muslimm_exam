import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./AxiosApi.scss";

import dollie from "../Important/img/Oval@3x.png";
import arrow from "./img/Arrows@3x.png";
import oval from "./img/Oval.png";
function AxiosApi({ search }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let apiUrl = "https://jsonplaceholder.typicode.com/photos";

        if (search.trim() !== "") {
          apiUrl += `?q=${search}`;
        }

        const response = await axios.get(apiUrl);
        setData(response?.data.slice(0, 6));
        setLoading(false);
      } catch (error) {
        setError("Ma'lumotlarni yuklashda xatolik yuz berdi.");
        setLoading(false);
      }
    };

    fetchData();
  }, [search]);

  React.useEffect(() => {
    const FetchHome = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/photos"
        );
        setUser(res?.data.slice(0, 3));
      } catch (error) {
        console.log("Serverdan Error");
      }
    };

    FetchHome();
  }, []);

  return (
    <div className="home">
      {loading ? (
        <p>Ma'lumotlar yuklanmoqda...</p>
      ) : error ? (
        <p>Xatolik: {error}</p>
      ) : (
        <div>
          <ul className="dollie__flex">
            <li className="dollie__item">
              <img src={dollie} alt="dollie" width={50} height={50} />
              <a className="dollie__text" href="/channel/">Dollie Blair</a>
            </li>
            <img
              className="home__arrow"
              src={arrow}
              alt="arrow"
              width={66}
              height={28}
            />
          </ul>
          <div className="api__flex">
            {data.length > 0 ? (
              data.map((photo) => (
                <Link key={photo.id} to={"/photos/" + photo.id}>
                  <div key={photo.id} className="dollie__link">
                    <img
                      className="api__img"
                      src={photo.thumbnailUrl}
                      alt={photo.title}
                    />
                    <p className="link__title">{photo.title}</p>
                  </div>
                </Link>
              ))
            ) : (
              <p>Natija topilmadi.</p>
            )}
          </div>
        </div>
      )}

      <h1 className="home__title">Recommended</h1>
      <div className="recommend">
        {user?.length > 0 &&
          user.map((items) => (
            <Link
              className="recom__link"
              href="#link"
              key={items.id}
              to={"/photos/" + items.id}
            >
              <img
                className="recom__img"
                src={items.url}
                alt={"SassColor"}
                width={250}
                height={150}
              />{" "}
              <br />
              <a className="recom__title" href="#link">
                {items.title}
              </a>
            </Link>
          ))}
      </div>

      <ul className="dollie__flex food">
        <li className="dollie__item">
          <img src={oval} alt="dollie" width={50} height={50} />
          <Link className="dollie__text" to={"/channel/"}>Food & Drink</Link>
          <p className="food__text">Recommended channel for you</p>
        </li>
        <div className="food__flex">
          <button className="food__btn">Subscribe 2.3m</button>
          <img
            className="home__arrow"
            src={arrow}
            alt="arrow"
            width={66}
            height={28}
          />
        </div>
      </ul>

      <div className="api__flex">
        {data.length > 0 ? (
          data.map((photo) => (
            <Link key={photo.id} to={"/photos/" + photo.id}>
              <div key={photo.id} className="dollie__link">
                <img
                  className="api__img"
                  src={photo.thumbnailUrl}
                  alt={photo.title}
                />
                <p className="link__title">{photo.title}</p>
              </div>
            </Link>
          ))
        ) : (
          <p>Natija topilmadi.</p>
        )}
      </div>
    </div>
  );
}

export default AxiosApi;
