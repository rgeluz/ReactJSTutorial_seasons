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
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );



    return <div>Latitude: </div>;
  }
}


ReactDom.render(<App />, document.querySelector('#root'))