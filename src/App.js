// *react-router components
import {BrowserRouter as Router}from 'react-router-dom'

import Layout from './components/Layout'

// *connect our app with react-router and import layout
// * in future here we will render footer/header components

function App() {
  return (
    <div className="App">
      <Router>
        <Layout />
      </Router>
    </div>
  );
}

export default App;
