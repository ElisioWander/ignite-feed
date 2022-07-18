import { Trash, ThumbsUp } from "phosphor-react"
import { Avatar } from "../Avatar"

import styles from "./styles.module.scss"

export function Comment() {
  return (
    <div className={styles.comment} >
      <Avatar url="https://github.com/elisioWander.png" />

      <div className={styles.commentBox} >
        <div className={styles.commentContent} >
          <header>
            <div className={styles.authorAndTime} >
              <strong>Elisio Wander</strong>
              <time title="18 de Julho às 14:35h" dateTime="2022-07-18 14:35:50" >Cerca de uma hora atrás</time>
            </div>

            <button title="Deletar comentário" >
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom, Devon! Paranéns!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>

    </div>
  )
}