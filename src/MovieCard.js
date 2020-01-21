import React, { Component } from "react";
import UserList from "./UserList";

class MovieCard extends Component {
  render() {
    /*
    Destructuring via ES6. We're getting the profiles, users, and movies properties
    off of the pros passed into this presentational component. If you need a
    refresher on this syntax, check out this course:
    https://www.udacity.com/course/es6-javascript-improved--ud356
    */
    const { users, usersWhoLikedMovie, movieInfo } = this.props;

    return (
      <div>
        <h2>{movieInfo.name}</h2>
        <UserList usersWhoLikedMovie={usersWhoLikedMovie} users={users} />
      </div>
    );
  }
}

export default MovieCard;