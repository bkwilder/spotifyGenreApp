import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Routes, Redirect } from "react-router-dom";
import Authorization from './Authorization'
import TopGenresList from "./TopGenresList";

class Main extends Component {
  render() {
    return (
      <div>
        <Routes>
            <Route exact path="/" element={<Authorization />} />
            <Route path="/top-genres/" element={<TopGenresList/>}/>
        </Routes>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tracks: state.tracks,
  };
}

// function mapDispatchToProps(dispatch) {}

export default connect(mapStateToProps, null)(Main);


