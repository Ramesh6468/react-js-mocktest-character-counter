import {Component} from 'react'
import {v4} from 'uuid'
import ListItem from '../ListItem'
import './index.css'

class Counter extends Component {
  state = {lengthList: [], input: ''}

  onchangeSearch = event => {
    this.setState({input: event.target.value})
  }

  onClickButton = () => {
    const {input} = this.state
    this.setState(prevState => ({
      lengthList: [
        ...prevState.lengthList,
        {id: v4(), Input: input, Length: input.length},
      ],
      input: '',
    }))
  }

  render() {
    const {lengthList, input} = this.state
    console.log(lengthList)
    return (
      <div className="bgContainer">
        <div className="card1">
          <h1 className="title">Count the characters like a boss...</h1>
          <ul className="list">
            {lengthList.length === 0 ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
                className="image"
              />
            ) : (
              <ul className="itemsList">
                {lengthList.map(each => (
                  <ListItem key={each.id} details={each} />
                ))}
              </ul>
            )}
          </ul>
        </div>
        <div className="card2">
          <h1 className="title2">Character Counter</h1>
          <form className="inputCard">
            <input
              type="text"
              className="input"
              placeholder="Enter the Characters here"
              value={input}
              onChange={this.onchangeSearch}
            />
            <button
              className="button"
              type="button"
              onClick={this.onClickButton}
            >
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Counter
