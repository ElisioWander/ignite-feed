import { Avatar } from "../Avatar"
import { Comment } from "../Comment"
import { Form } from "../Form"
import styles from "./styles.module.scss"

export function Post() {
  return (
    <article className={styles.post} >
      <header>
        <div className={styles.author} >
          <Avatar url="https://github.com/romulorocha08.png" hasBorder />
          <div className={styles.authorInfo} >
            <strong>Rômulo Rocha</strong>
            <span>Web developer</span>
          </div>
        </div>

        <time title="18 de Julho às 14:35h" dateTime="2022-07-18 14:35:50" >Publicado a 1 hora</time>
      </header>

      <div className={styles.content} >
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p><a href="#">jane.design/doctorcare</a></p>
        <p>
          <a href="#">#novoprojeto</a>
          <a href="#">#nlw</a>
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <Form />

      <div className={styles.commentList} >
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}