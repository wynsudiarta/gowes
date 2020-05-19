/* eslint jsx-a11y/anchor-is-valid:0 */
import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const style = {
  card: {
    cursor: 'pointer',
  },
  cardTitle: {
    fontSize: '1.125rem',
    lineHeight: '1.4',
    fontWeight: '600',
    margin: '0',
    textAlign: 'center',
    color: '#ececec'
  },
  figure: {
    display: 'block',
    width: '100%',
    padding: '0',
    margin: '0',
  },
  img: {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
  }
}

const VideosItem = ({ large, video, handleVideo }) => {
  const { title, thumbnails } = video.snippet
  const width = 'col l4 m6 s12';

  const image = thumbnails.maxres;
  return (
    <article className={width}>
      <ReactCSSTransitionGroup
        transitionName="video-item"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
        <div className='VideosItem card' style={style.card}>
          <figure
            style={style.figure}
            className='card-image waves-effect waves-block waves-light'
            onClick={() => handleVideo(video)}
          >
            <img
              style={style.img}
              src={image.url}
              width={image.width}
              height={image.height}
              title={title}
              alt={title}
            />
          </figure>
          <div className='card-content' style={{ padding: '10px', background: '#30475e'}}>
            <span
              style={style.cardTitle}
              className='card-title'
              title={title}
            >{ title }</span>
          </div>
        </div>
      </ReactCSSTransitionGroup>
    </article>
  )
}

export default VideosItem
