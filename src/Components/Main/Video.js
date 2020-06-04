import React, { Component } from "react";
import Youtube from "react-youtube";
class Video extends Component {
  render(props) {
    const videoid = this.props.videoid;
    return <Youtube className="video" videoId={videoid} />;
  }
}

export default Video;
