import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Logo from './logo.png';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from './components/Menu';
import CreateSurvey from './components/CreateSurvey';
import Published from './components/Published';
import { useState } from 'react';



function App() {
  const [surveyQuestions, setSurveyQuestions] = useState([]);

  
  return (
    <>
      <div className="col-md-10 offset-md-1 col-12 text-center">
        <img className="col-md-6" alt="logo" src={Logo}/>
        <Router>
          <Switch>
            <Route exact path="/">
              <Menu/>
            </Route>
            <Route exact path="/create">
              <CreateSurvey surveyQuestions={surveyQuestions} setSurveyQuestions={setSurveyQuestions}/>
            </Route>
            <Route exact path="/publish">
              <Published surveyQuestions={surveyQuestions}/>
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
