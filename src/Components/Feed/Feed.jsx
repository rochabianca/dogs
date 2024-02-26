import React from 'react'
import { FeedModal } from './Components/FeedModal/FeedModal'
import { FeedPhotos } from './Components/FeedPhotos/FeedPhotos'
import propTypes from 'prop-types'

export const Feed = ({user}) => {
  const [ modalPhoto, setModalPhoto ] = React.useState(null)
  const [ pages, setPages ] = React.useState([1, 2])
  const [infinite, setInfinite ] = React.useState(true)
  React.useEffect(() => {
    let wait = false
    function inifiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        if (scroll > height * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1])
          wait = true
          setTimeout(() => {
            wait = false
          }, 500)
        }
      }
    }
    window.addEventListener('wheel', inifiniteScroll)
    window.addEventListener('scroll', inifiniteScroll)

    return () => {
      window.removeEventListener('wheel', inifiniteScroll)
      window.removeEventListener('scroll', inifiniteScroll)
    }
  }, [infinite])
  return (
    <div>
      {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />}
      {pages.map((page) => (
        <FeedPhotos key={page} page={page} user={user} setModalPhoto={setModalPhoto} setInfinite={setInfinite} />
      ))}

    </div>
  )
}
Feed.defaultProps = {
  user: 0
}
Feed.propTypes = {
  user: propTypes.oneOfType([propTypes.string.isRequired, propTypes.number.isRequired])
}