import React, { useState } from "react";
import { Trash, ThumbsUp } from "phosphor-react";
import { Avatar } from "../Avatar";

import styles from "./styles.module.scss";

interface CommentProps {
  comment: string;
  comments: string[];
  setComments: React.Dispatch<React.SetStateAction<string[]>>;
}

export function Comment({ comment, comments, setComments }: CommentProps) {
  const [addLikeCount, setAddLikeCount] = useState(0);

  function handleDeleteComment(commentToDelete: string) {
    const commentsWithoutCommentDeleted = comments.filter(
      (comment) => comment !== commentToDelete
    );

    setComments(commentsWithoutCommentDeleted);
  }

  function handleAddLikeToComment() {
    setAddLikeCount(addLikeCount + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar url="https://github.com/elisioWander.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Elisio Wander</strong>
              <time
                title="18 de Julho às 14:35h"
                dateTime="2022-07-18 14:35:50"
              >
                Cerca de uma hora atrás
              </time>
            </div>

            <button
              onClick={() => handleDeleteComment(comment)}
              title="Deletar comentário"
            >
              <Trash size={24} />
            </button>
          </header>

          <p>{comment}</p>
        </div>

        <footer>
          <button onClick={handleAddLikeToComment}>
            {addLikeCount > 0 ? (
              <ThumbsUp style={{ color: "#00B37E" }} />
            ) : (
              <ThumbsUp />
            )}
            Aplaudir <span>{addLikeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
