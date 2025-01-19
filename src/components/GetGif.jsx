import { useState } from "react";
import { Inicio } from "./Inicio";
import { Header } from "./Header";
import styles from "./GetGif.module.css";
import { FaWhatsapp, FaFacebook, FaTwitter } from "react-icons/fa";
import { getGifs } from "../api/getGifs";

export const GetGif = () => {
  const [query, setQuery] = useState("");
  const [gifs, setGifs] = useState([]);
  const [showInicio, setShowInicio] = useState(true);

  const handleOnChange = (e) => {
    setQuery(e.target.value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (query) {
      const trimmedQuery = query.trim();
      setShowInicio(false);

      const img = await getGifs(trimmedQuery);
      setGifs(img);
    }
  };

  const shareOnWhatsApp = (gifUrl) => {
    const url = `https://wa.me/?text=${encodeURIComponent(gifUrl)}`;
    window.open(url, "_blank");
  };

  const shareOnFacebook = (gifUrl) => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      gifUrl
    )}`;
    window.open(url, "_blank");
  };

  const shareOnTwitter = (gifUrl) => {
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      gifUrl
    )}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <Header />

      <nav>
        <form onSubmit={handleOnSubmit} className={styles.searchContenedor}>
          <input
            type="text"
            placeholder="Buscar GIF"
            onChange={handleOnChange}
            className={styles.searchInput}
          />
          <button type="submit" className={styles.searchButton}>
            Buscar
          </button>
        </form>
      </nav>

      <Inicio show={showInicio} />

      <div className={styles.cardContenedor}>
        {gifs.map((gif) => (
          <div key={gif.id} className={styles.cardImgContenedor}>
            <img src={gif.url} alt="Gif" className={styles.imgGif} />
            <div className={styles.shareContainer}>
              <FaWhatsapp
                className={`${styles.icon} ${styles.iconWhatsApp}`}
                onClick={() => shareOnWhatsApp(gif.url)}
              />
              <FaFacebook
                className={`${styles.icon} ${styles.iconFacebook}`}
                onClick={() => shareOnFacebook(gif.url)}
              />
              <FaTwitter
                className={`${styles.icon} ${styles.iconTwitter}`}
                onClick={() => shareOnTwitter(gif.url)}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
