import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import'./Css/style.css';
import Header from './Components/Header';
import AboutMe from './Components/aboutMeInfo';
import Resume from './Components/resume';
function App() {
  return (
    <div className="bgImg">
      <Header />
      <AboutMe />
      <Resume />
    </div>
  );
}

export default App;
