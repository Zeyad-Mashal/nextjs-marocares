// components/CardList.js
import React from "react";
import Card from "./imageCard";
import './imageList.css';

const data = [
  {
    items: {
      bootstrap: [
        {
          id: 1,
          title: "City Views",
          body: "TEST",
          imageUrl:
            "https://cosmetis.com/media/1._skincare.png",
          docs: "https://getbootstrap.com/docs/4.0/components/carousel/",
        },
        {
          id: 2,
          title: "City Views",
          body: "TEST",
          imageUrl:
            "https://cosmetis.com/media/2-body_and_bath.png",
          docs: "https://getbootstrap.com/docs/4.0/components/carousel/",
        },
        {
          id: 3,
          title: "City Views",
          body: "TEST",
          imageUrl:
            "https://cosmetis.com/media/3.Hair.png",
          docs: "https://getbootstrap.com/docs/4.0/components/carousel/",
        },
        {
          id: 4,
          title: "Wild Life",
          body: "TEST",
          imageUrl:
            "https://cosmetis.com/media/4._solares.png",
          docs: "https://getbootstrap.com/docs/4.0/components/carousel/",
        },
        {
          id: 5,
          title: "Foods and Culture",
          body: "TEST",
          imageUrl:
            "https://cosmetis.com/media/5._make_up.png",
          docs: "https://getbootstrap.com/docs/4.0/components/carousel/",
        },
        {
          id: 6,
          title: "Foods and Culture",
          body: "TEST",
          imageUrl:
            "https://cosmetis.com/media/5._make_up.png",
          docs: "https://getbootstrap.com/docs/4.0/components/carousel/",
        },
        {
          id: 7,
          title: "Foods and Culture",
          body: "TEST",
          imageUrl:
            "https://cosmetis.com/media/6.man.png",
          docs: "https://getbootstrap.com/docs/4.0/components/carousel/",
        },
        {
          id: 8,
          title: "Foods and Culture",
          body: "TEST",
          imageUrl:
            "https://cosmetis.com/media/7.baby_and_mom.png",
          docs: "https://getbootstrap.com/docs/4.0/components/carousel/",
        },
        {
          id: 9,
          title: "Foods and Culture",
          body: "TEST",
          imageUrl:
            "https://cosmetis.com/media/8-_wellness.png",
          docs: "https://getbootstrap.com/docs/4.0/components/carousel/",
        },
        {
          id: 10,
          title: "Foods and Culture",
          body: "TEST",
          imageUrl:
            "https://cosmetis.com/media/9._Sets_and_gifts.png",
          docs: "https://getbootstrap.com/docs/4.0/components/carousel/",
        },
      ],
    },
  },
];

const CardList = () => {
  return (
    <div className="card-list">
      <div className="d-flex">
      {data[0].items.bootstrap.map((item) => (
        <Card key={item.id} imageUrl={item.imageUrl} text={item.body}  className="card-item-list"/>
        ))}
        </div>
    </div>
  );
};

export default CardList;
