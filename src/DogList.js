
function DogList({dogs, updateDog}){

  return(
    <div>
    {dogs.map(dog => <a href={"/dogs/" + dog.name.toLowerCase()} ><img src={dog.src} alt="dog" /></a>)}
    </div>
  )
}

export default DogList;