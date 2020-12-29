import React from 'react';
import './Videoitem.css';

const VideoItems =({video,onVideoSelect})=>{

return(
    <div onClick={()=>{onVideoSelect(video)}} className='video-item item'>
    <img className='image' src={video.snippet.thumbnails.medium.url} alt="thumbnail"/>
    <div className='content'>
    <div className='header'>
    {video.snippet.title}
    </div>
    </div>
    </div>
);

};



export default  VideoItems;