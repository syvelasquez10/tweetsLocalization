import React, {Component} from "react";
import { Meteor } from "meteor/meteor";



export default class Tweet extends Component {
  calcular(lista,image){
    var canvas = document.getElementById('canvas');
    var projection = this.props.getProjection();
    var lista2 = projection(lista);
    if (canvas.getContext) {
      var ctx = document.getElementById('canvas').getContext('2d');
      var img = new Image();
      img.onload = function() {
        ctx.drawImage(img, lista2[0], lista2[1]);
      };
      img.src = image;
    }
  }
  render() {
    return (
      <div className="tweet">
        {this.calcular(this.props.tweet.coordinates.coordinates,this.props.tweet.user.profile_image_url)}
      </div>
    );
  }
}
