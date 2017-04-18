import React from 'react';

class MovieComponent extends React.Component {
  render (){
    if(!this.props.movie){
      console.log("this is broken")
      return null;
    }

    return(
      <div id="main-container">
        {this.props.movie}
      </div>
      )
  }
}

export default MovieComponent;