import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.contenedorTitulo}>
      <h1 className={styles.mainTitulo}>GIFBOOK</h1>
      <div className={styles.listTitulo}>
        <h1>Aplicación</h1>
        <h1>creada</h1>
        <h1>por</h1>
        <h1>Daniel</h1>
      </div>
    </div>
  );
};
