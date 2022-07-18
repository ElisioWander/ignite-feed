import { Header } from "../Header";
import { Post } from "../Post";

import { Sidebar } from "../Sidebar";

import styles from "./styles.module.scss";

export function Dashboard() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </>
  );
}
