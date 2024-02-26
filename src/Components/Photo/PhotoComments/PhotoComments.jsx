import React from 'react'
import styles from './PhotoComments.module.scss'
import { UserContext } from '../../../userContext'
import { PhotoCommentsForm } from '../PhotoCommentsForm/PhotoCommentsForm'

export const PhotoComments = (props) => {
  const [ comments, setComments ] = React.useState(() => props.comments)
  const commentsSection = React.useRef(null)
  const { login } = React.useContext(UserContext)

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight
  }, [comments])
  return (
    <>
      <ul ref={commentsSection} className={`${styles.comments} ${props.single ? styles.single : ''}`}>
        {comments.map(comment => <li key={comment.comment_ID}>
          <b>{comment.comment_author}: </b>
          <span>{comment.comment_content}</span>
        </li>)}
      </ul>
      {login && <PhotoCommentsForm id={props.id} single={props.single} setComments={setComments} />}
    </>
  )
}
