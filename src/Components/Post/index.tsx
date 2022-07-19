import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import { Form } from "../Form";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import styles from "./styles.module.scss";
import { useState } from "react";

type Author = {
  avatar_url: string;
  name: string;
  role: string;
}

type Content = {
  type: string;
  content: string;
}

interface PostProps {
  post: {
    author: Author;
    content: Content[];
    publishedAt: string;
  };
}

export function Post({ post }: PostProps) {
  const [comments, setComments] = useState<string[]>([]);

  const publishedAt = new Date(post.publishedAt);

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h' ",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const publishedAtToIso = publishedAt.toISOString();

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar url={post.author.avatar_url} hasBorder />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAtToIso}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map((item) => {
          if (item.type === "paragraph") {
            return <p key={item.content}>{item.content}</p>;
          } else if (item.type === "link") {
            return (
              <p key={item.content}>
                <a href="#">{item.content}</a>
              </p>
            );
          }
        })}
      </div>

      <Form setComments={setComments} />

      <div className={styles.commentList}>
        {comments?.map((comment) => (
          <Comment
            key={comment}
            comment={comment}
            comments={comments}
            setComments={setComments}
          />
        ))}
      </div>
    </article>
  );
}
