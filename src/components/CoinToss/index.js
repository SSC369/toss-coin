import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    coin: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    total: 0,
    headCount: 0,
    tailCount: 0,
  }

  onTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    console.log(tossResult)
    if (tossResult === 0) {
      this.setState(prevState => ({
        coin: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
        total: prevState.total + 1,
        headCount: prevState.headCount + 1,
      }))
    } else {
      this.setState(prevState => ({
        coin: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
        total: prevState.total + 1,
        tailCount: prevState.tailCount + 1,
      }))
    }
  }

  render() {
    const {coin, total, headCount, tailCount} = this.state
    return (
      <div className="bg-container">
        <div className="coin-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="context">Heads (or) Tails</p>

          <img src={coin} alt="toss result" className="coin-image" />
          <button
            type="button"
            className="toss-button"
            onClick={this.onTossCoin}
          >
            Toss Coin
          </button>
          <div className="result">
            <p className="score">Total: {total}</p>
            <p className="score">Heads: {headCount}</p>
            <p className="score">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
