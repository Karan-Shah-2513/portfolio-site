import styles from "./index.module.scss";
import Navbar from "@/components/Navbar/Navbar";
import Sections from "@/components/Sections/Sections";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className={styles.index}>
        <Sections />
      </div>
    </main>
  );
}
