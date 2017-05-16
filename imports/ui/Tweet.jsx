import React, {Component} from "react";
import { Meteor } from "meteor/meteor";



export default class Tweet extends Component {
  calcular(lista){
    var canvas = document.getElementById('canvas');

    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      ctx.fillStyle = 'green';
      ctx.fillRect(lista[0],lista[1], 100, 100);
    }
  }
  render() {
    return (
      <div className="tweet">
      	<span>{this.props.tweet.created_at} </span>
      	<span>{this.props.tweet.user.screen_name} </span>
      	<img src={this.props.tweet.user.profile_image_url} alt={this.props.tweet.user.screen_name + "profile image"}/>
        <span>{this.calcular(this.props.tweet.coordinates.coordinates)} </span>
      </div>
    );
  }
}
