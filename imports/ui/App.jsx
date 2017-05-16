import React, {Component} from "react";
import {PropTypes} from "prop-types";
import { Meteor } from "meteor/meteor";
import { createContainer } from "meteor/react-meteor-data"
import ColombiaMap from "./ColombiaMap.jsx";
import TweetsResults from "./TweetsResults.jsx";
import d3 from "d3";

import {Tweets} from "../api/Tweets.js";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      lista:[]
    }
    this.projection=null;
  }

  changeQuery(evt) {
    if (evt.key !== "Enter") {
      return;
    }
    // "this" will change in the method call, so I need to save it
    let component = this;

    console.log(evt.target.value);
    Meteor.call("twitter.stream", evt.target.value);

  }

  setProjection(projection){
    this.projection=projection;
  }
  getProjection(){
    return this.projection
  }


  render() {
    console.log("render!");
    return (
      <div>
        <input type="text" onKeyPress={this.changeQuery.bind(this)} placeholder="Find Tweets"/>
        { this.props && this.props.err ?
          <div>Error: {this.props.err}</div> :
          <span></span>
        }
        <h2>Results:</h2>
        {this.props && this.props.tweets ?
          <div className="App">
            <h2>Map of Colombia</h2>
            <TweetsResults tweets={this.props.tweets} getProjection={this.getProjection.bind(this)}/>
            <ColombiaMap
              width="600"
              height="600"
              data={{RISARALDA:0, CALDAS:0}}
              setProjection={this.setProjection.bind(this)}
            >
            </ColombiaMap>
          </div> :

          <p>Enter a query</p>
        }

      </div>
    );
  }
}

App.propTypes = {
  tweets : PropTypes.array.isRequired
};

export default AppContainer = createContainer(() => {


  return {
    tweets: Tweets.find({}).fetch()
  };
}, App);
