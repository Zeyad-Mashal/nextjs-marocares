"use client";
import { useState } from "react";
import { items } from "../../../public/items.json";
import { Carousel } from "react-bootstrap";
import styles from "./bootstrap.min.css";




export default function BootstrapCarousel() {
  const { bootstrap } = items;
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel fade activeIndex={index} onSelect={handleSelect} touch>
      {bootstrap.map((item) => (
        <Carousel.Item key={item.id} className={styles.itemP} interval={4000}>
          <img src={item.imageUrl} alt={item.title} className="mt-0"/>
          <Carousel.Caption className={styles.caption} >
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
