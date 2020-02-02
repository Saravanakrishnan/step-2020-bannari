import React from 'react';
import LoginPage from './pages/LoginPage';

class App extends React.Component{
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <LoginPage/>
      </div>
    )
  }
}

export default App;