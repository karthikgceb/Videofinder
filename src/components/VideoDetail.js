import React from 'react';


const VideoDetail = ({video}) =>{
    if(!video){
        return <div>Enter your videoname</div>;
    }
 
    const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`;
    return(
        <div>
        <div className="ui embed">
        <iframe title="video player" src={videoSrc}/>
        </div>
        <div className="ui segment">
        <div className="ui header"><h4>{video.snippet.title} </h4></div>
        <p>{video.snippet.description}</p>
    </div>
    </div>
        );
};


export default VideoDetail;