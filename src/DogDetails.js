

import { useParams, useHistory } from "react-router-dom";
import {useState} from "react";


function DogDetails({dogs}){
  const { name } = useParams();
  const history = useHistory();
  const [dogDetails, setDogDetails] = useState(dogs.filter(dog => dog.name.toUpperCase() === name.toUpperCase()));
  
  console.log(dogs, name, dogDetails);
  function goHome(){
    history.push("/dogs");
    return null;
  }


  return(
    dogDetails[0] ?
    <div>
  { dogDetails[0].name}
    { dogDetails[0].age}
    { dogDetails[0].facts[0]}
    { dogDetails[0].facts[1]}
    { dogDetails[0].facts[2]} 
    </div> 
    : goHome()
)
  }
  

export default DogDetails;