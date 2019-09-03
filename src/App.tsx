import * as React from 'react';
import './App.css';
import Main from './views/main';

// import Login from './views/login';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        {/* <Login/> */}
        <Main/>
      </div>
    );
  }
}

export default App;
