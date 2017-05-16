import React, {Component} from "react";


import Tweet from "./Tweet.jsx";

export default class TweetResults extends Component {

  renderTweets() {
    return this.props.tweets.map((tweet,index) => {
      return (<Tweet getProjection={this.props.getProjection.bind(this)} key={tweet.id} index={index} tweet={tweet}/>);
    });
  }

  render() {
    return (
      <div className="tweetResults">
        {this.renderTweets()}
      </div>
    );
  }
}
