import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./Navbar"
import CreateUser from "./CreateUser"
import EditExercise from "./EditExercise"
import CreateExercise from "./CreateExercise"
import ExerciseList from "./ExerciseList"




function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={ExerciseList} />
      <Route exact path="/create_exercise" component={CreateExercise} />
      <Route exact path="/create_user" component={CreateUser} />
      <Route exact path="/edit_exercise" component={EditExercise} />
    </Router>
  );
}

export default App;
