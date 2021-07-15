// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  isEvenOdd = () => {
    this.setState(prev => ({
      count: prev.count + Math.floor(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="even-odd-container">
          <h1 className="heading">
            Count <span className="count">{count}</span>
          </h1>
          {count % 2 === 0 ? (
            <p className="description">Count is Even</p>
          ) : (
            <p className="description">Count is Odd</p>
          )}
          <button type="button" className="button" onClick={this.isEvenOdd}>
            Increment
          </button>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
