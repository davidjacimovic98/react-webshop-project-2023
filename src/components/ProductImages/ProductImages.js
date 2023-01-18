import React, { useState } from "react";
import styles from "./ProductImages.module.css";

const ProductImages = ({ images = [{ url: "" }] }) => {
  const [main, setMain] = useState(images[0]);
  return (
    <section className={styles.product_images_container}>
      <img src={main.url} alt="picture 1" className={styles.main_img} />
      <div className={styles.product_images_gallery}>
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              alt={image.filename}
              key={index}
              onClick={() => setMain(images[index])}
              className={`${image.url === main.url && styles.active_img}`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProductImages;
