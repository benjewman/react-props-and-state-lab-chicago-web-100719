import React from 'react'

class Pet extends React.Component {
  showButton = () => {
    if (this.props.pet.isAdopted === true) {
      return <button className="ui disabled button">Already adopted</button>
    } else {
      return <button onClick={event => this.props.onAdoptPet(this.props.pet.id)} className="ui primary button">Adopt pet</button>
    }
  }
  
  render() {
    let sign
    this.props.pet.gender === 'female' ? sign = '♀' : sign = '♂'
    console.log(this.props.pet)
    return (
      <div className="card">
        <div className="content">
          <a href='a' className="header">
            {sign}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.showButton()}
        </div>
      </div>
    )
  }
}

export default Pet
