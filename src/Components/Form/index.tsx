import React, { FormEvent, useState, ChangeEvent, InvalidEvent } from "react";
import styles from "./styles.module.scss"

interface FormProps {
  setComments: React.Dispatch<React.SetStateAction<string[]>>
}

export function Form({ setComments }: FormProps) {
  const [newComment, setNewComment] = useState('')

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()

    setComments(state => [...state, newComment])
    setNewComment('')
  }

  function handleGetTextareaValue(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewComment(event.target.value)
    event.currentTarget.setCustomValidity('')
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.currentTarget.setCustomValidity('Esse campo é obrigatório')
  }

  const isNewCommentEmpty = newComment.length === 0

  return (
    <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
      <strong>Deixe seu feedback</strong>

      <textarea
        name="comment"
        placeholder="Deixe um comentário"
        value={newComment}
        required
        onInvalid={handleNewCommentInvalid}
        onChange={handleGetTextareaValue}
      />

      <footer>
        <button disabled={isNewCommentEmpty} type="submit">Publicar</button>
      </footer>
    </form>
  );
}
