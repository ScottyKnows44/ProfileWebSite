import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import'./Css/style.css';
import Header from './Components/Header';
import AboutMe from './Components/aboutMeInfo';
import Resume from './Components/resume';
import selfie from '../src/img/selfie.jpg';
import Interest from './Components/Interests';
function App() {
  return (
    <div className="bgImg">
      <Header />
      <AboutMe />
      <div className="pictureWidth">
        <img className="profilePicture" src={selfie} alt="Me" />
      </div>
      <Interest />
      <Resume />
    </div>
  );
}

export default App;
