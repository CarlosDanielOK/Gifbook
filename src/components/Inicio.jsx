import PropTypes from "prop-types";
import styles from "./Inicio.module.css";

export const Inicio = ({ show }) => {
  if (!show) return null;

  return (
    <div className={styles.inicio}>
      <h2 className={styles.inicioTitulo}>
        ¡Hola, te doy la bienvenida a GIFBOOK! Busca y comparte todos los GIF
        que quieras.
      </h2>
      <p className={styles.inicioCreadorMensaje}>De mí, para ti.</p>
    </div>
  );
};

Inicio.propTypes = {
  show: PropTypes.bool.isRequired,
};
