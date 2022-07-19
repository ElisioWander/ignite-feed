import { Avatar } from "../Avatar"
import { Comment } from "../Comment"
import { Form } from "../Form"
import { format, formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"

import styles from "./styles.module.scss"

interface PostProps {
  post: {
  id: string;
  author: {
    avatar_url: string;
    name: string;
    role: string;
  },
  content: Array<{
    type: string;
    content: string;
  }>,
  publishedAt: string;
  }
}

export function Post({ post }: PostProps) {
  const publishedAt = new Date(post.publishedAt)

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h' ", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  const publishedAtToIso = publishedAt.toISOString()

  return (
    <article className={styles.post} >
      <header>
        <div className={styles.author} >
          <Avatar url={post.author.avatar_url} hasBorder />
          <div className={styles.authorInfo} >
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAtToIso} >{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content} >
        { post.content.map(item => {
          if(item.type === 'paragraph') {
            return <p>{item.content}</p>
          } else if (item.type === 'link') {
            return <p><a href="#">{item.content}</a></p>
          }
        }) }
      </div>

      <Form />

      <div className={styles.commentList} >
        <Comment />
      </div>
    </article>
  )
}