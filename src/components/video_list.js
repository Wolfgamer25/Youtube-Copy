import React from 'react';
import VideoListItem from './video_list_item';


const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return <VideoListItem
      onVideoSelect = {props.onVideoSelect}
      video = {video}
      key={video.etag} />
  });
  return(
    <ul className=" list-group col-md-4">
      {videoItems}
    </ul>
  );
}
export default VideoList;
