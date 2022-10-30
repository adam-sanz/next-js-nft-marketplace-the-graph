import styles from "../styles/Home.module.css";

export default function Footer() {
  function openGithub() {
    window.open(
      "https://github.com/adam-sanz/next-js-nft-marketplace-the-graph",
      "_blank"
    );
  }

  return (
    <footer className={styles.footer}>
      <a href="adamsanz.com/" target={"_blank"}>
        Built by adam-sansz
      </a>
      <i className="fa-brands fa-github icon-footer" onClick={openGithub}></i>
    </footer>
  );
}
