import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = event => {
    // update the state.filters.type
    //need to pass in an event

    this.setState({
      filters: {
        type: event.target.value
      }
    })

    // console.log(event.target.value)
  }

  onFindPetsClick = () => {
    // fetch a list of pets 
    // from '/api/pets' for all
    // from '/api/pets?type=cat
    // ... for dog or micropig
    let url
    const filterType = this.state.filters.type

    filterType === 'all' ? url = '/api/pets' : url = `/api/pets?type=${filterType}`

    fetch(url)
    .then(resp => resp.json())
    .then(pets => this.fillPetsArray(pets))
  }

  fillPetsArray = pets => {
    this.setState({
      pets: pets
    })
  }

  onAdoptPet = (petId) => {
    const updatedPets = this.state.pets.map(pet => {
      return pet.id === petId ? {...pet, isAdopted: true } : pet
    })
    this.setState({pets: updatedPets})
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onFindPetsClick={this.onFindPetsClick} onChangeType={this.onChangeType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
