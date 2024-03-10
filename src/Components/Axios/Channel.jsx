import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Channel.scss";

import channel__logo from "./img/Cover.png";
import Channel__img from "./img/Oval.png";
import noti from "./img/ui-11.png";
import search from "../Important/img/search.svg";
import White from "./img/Video.png";
import PhotosList from "./PhotosList";
// import img1 from "./img/Oval(1).png"
// import img2 from "./img/Oval(2).png"
// import img3 from "./img/Oval(3).png"

function Channel() {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="channel">
      <img src={channel__logo} alt="img" width={1200}/>

      <ul className="channel__list">
        <img src={Channel__img} alt="img" />

        <li className="channel__item">
          <p className="channel__text">Muslimbek Official</p>
          <span className="channel__span">245M subscribed</span>
        </li>

        <img src={noti} alt="img" />
        {/* <button className="pro__subs">Subscribe 2.3m</button> */}
      </ul>
      <ul className="channel__list1">
        <a href="#link" className="channel__link">
          Home
        </a>
        <a href="#link" className="channel__link">
          Videos
        </a>
        <a href="#link" className="channel__link">
          Playlists
        </a>
        <a href="#link" className="channel__link">
          Channels
        </a>
        <a href="#link" className="channel__link">
          Discussion
        </a>
        <a href="#link" className="channel__link">
          About
        </a>
        <img src={search} alt="img" />
      </ul>

      <div className="chanel__flex">
        <img src={White} alt="img" width={540} height={250} />

        <div className="flex__1">
          <h3 className="flex__title">
            Choosing The Best Audio Player Software For Your Computer
          </h3>

          <p className="flex__text">
            Your cheap internet-based banner advertising will become one of the
            sought for ads there are. Today, the world of Internet advertising
            is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles
            A common medium for advertising on the Internet is the use of banner
            ads.{" "}
          </p>
          <span className="flex__span">11k views · 6 months ago</span>
        </div>


      {/* <PhotosList/>npm */}
      </div>

    </div>
  );
}

export default Channel;
