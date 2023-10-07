import React from 'react'
import './Intro.css'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import video from'../../assert/meal.mp4'

const Intro = () =>{
  const [playVideo, setPlayVideo] = React.useState(false) 
  const vidRef=React.useRef();

  const handelvideo=()=>{
    setPlayVideo((prevPlayVideo)=>!prevPlayVideo);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  }
  return (
    <div className='introduction'>
        <video src={video} ref={vidRef} type='video/mp4' loop controls={false} muted/>
        <div className="introduction-video-button-div">
          <div className="introduction-video-button-circle"
            onClick={handelvideo}>
              {playVideo 
              ? <BsPauseFill color="#fff" fontSize={30} />
              : <BsFillPlayFill color="#fff" fontSize={30} />}
        </div>
      </div>
    </div>
  )
}

export default Intro