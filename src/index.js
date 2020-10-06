import React from 'react';
import ReactDom from 'react-dom';

// functional based component
/*
const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
  );

  return <div>Latitude: </div>;
};
*/

// class based component
class App extends React.Component {
  
  constructor(props){
    super(props);

     // THIS IS THE ONLY TIME we do direct assignment to this.state 
    this.state = { lat: null, errorMessage: '' };

    //get user's current location
    window.navigator.geolocation.getCurrentPosition(
      (position) => {

        console.log(position) //peak inside the position object on browser inspect tool's console

        // we called setstate!!!!
        this.setState({ lat: position.coords.latitude })

        // we do not do this!!!! all updates to state need to use the this.setState() function
        /* this.state.lat = position.coords.latitude; */
      },
      (err) => {
        console.log(err)
        this.setState({ errorMessage: err.message });
      } 
    );
  }
  
  // React says we have to define render!!
  render() {

    // Conditional Rendering
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>
    }

    return <div>Loading!</div>

    /*  //original, see conditional rendering above
    return (<div>
      Latitude: {this.state.lat}
      <br />
      Error: {this.state.errorMessage}
      </div>
    ); */


  }
}


ReactDom.render(<App />, document.querySelector('#root'))