import React from "react";
import Video from "./Video";

function VideoList(props) {
  return props.list.map((item) => (
    <Video key={item.id} url={item.url} date={item.date} />
  ));
}

export default VideoList;
