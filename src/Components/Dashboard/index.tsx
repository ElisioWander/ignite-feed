import { Header } from "../Header";
import { Post } from "../Post";
import { Sidebar } from "../Sidebar";
import data from "../../../data.json"

import styles from "./styles.module.scss";

export function Dashboard() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          { data?.map(post => (
            <Post key={post.author.avatar_url} post={post} />
          )) }
        </main>
      </div>
    </>
  );
}
