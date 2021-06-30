
import './App.css';
import {Switch, Route, Redirect, BrowserRouter} from "react-router-dom";
import {useState} from "react";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import whiskey from "./whiskey.jpg"
import duke from "./duke.jpg"
import perry from "./perry.jpg"
import tubby from "./tubby.jpg"

function App({dogs}) {

// const [dog, setDog] = useState(whiskey);

function updateDog(evt){
  console.log(evt.target);
}

  return (
    <div className="App">      
<BrowserRouter>      
  <Switch>
  <Route exact path="/dogs/:name" >
      <DogDetails dogs={dogs}/> 
    </Route>
    <Route exact path="/dogs" >
      <DogList dogs={dogs} updateDog={updateDog}/> 
    </Route>
    <Redirect to="/dogs" />
  </Switch>
  </BrowserRouter>  
    </div>

  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
