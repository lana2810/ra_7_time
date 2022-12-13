/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import DateTime from "./DateTime";
import withPretty from "./WithPretty";

function Video(props) {
  const DateTimePretty = withPretty(DateTime);
  return (
    <div className="video">
      <iframe
        title=""
        src={props.url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <DateTimePretty date={props.date} />
    </div>
  );
}

export default Video;
