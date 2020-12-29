import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends React.Component{

  state={videos:[],selectedVideo: null};
//api request
    onTermSubmit = async term => {
       const response=await youtube.get("/search", {
          params: {
            q: term,
            part: "snippet",
            type: 'video',
            maxResults: 5
          }
        });
        this.setState({videos:response.data.items,
        selectedVideo:response.data.items[0]
        
        });
      };
//play the selected video
      onVideoSelect=(video)=>{
         this.setState(
           {selectedVideo:video}
          );
      };


render() {
    return (
        <div className="ui container">
        <div>
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        </div>
        <div className="ui grid">
        <div className="row">
        <div className="eleven wide column">
        <VideoDetail video={this.state.selectedVideo}/>
        </div>
        <div class="five wide column">
        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}  />
        </div>
        </div>
        </div>
        </div>
    );
}
}


export default App;