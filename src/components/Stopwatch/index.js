// Write your code here
import {Component} from 'react'
import './index.css'

class StopWatch extends Component {
  state = {elapsedTimerInSeconds: 0, isTimerRunning: false}

  componentWillUnmount() {
    this.clearTimer()
  }

  clearTimer = () => clearInterval(this.timerID)

  onResetTimer = () => {
    this.clearTimer()
    this.setState({elapsedTimerInSeconds: 0, isTimerRunning: false})
  }

  onStopTimer = () => {
    this.clearTimer()
    this.setState({isTimerRunning: false})
  }

  updateTime = () => {
    this.setState(prevState => ({
      elapsedTimerInSeconds: prevState.elapsedTimerInSeconds + 1,
    }))
  }

  onStartTimer = () => {
    this.timerID = setInterval(this.updateTime, 1000)
    this.setState({isTimerRunning: true})
    console.log('Hi')
  }

  convertMinutesAndSeconds = () => {
    const {elapsedTimerInSeconds} = this.state
    const minutes = Math.floor(elapsedTimerInSeconds / 60)
    const seconds = Math.floor(elapsedTimerInSeconds % 60)
    const stringifyMinutes = minutes < 10 ? `0${minutes}` : minutes
    const stringifySeconds = seconds < 10 ? `0${seconds}` : seconds

    return `${stringifyMinutes}:${stringifySeconds}`
  }

  render() {
    const {isTimerRunning} = this.state

    return (
      <div className="stopWatch-bg-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="timer-card-container">
          <div className="timer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timer-img"
            />
            <p className="timer-text">Timer</p>
          </div>
          <h1 className="timer-count">{this.convertMinutesAndSeconds()}</h1>
          <div className="btn-container">
            <button
              type="button"
              className="button red-btn"
              onClick={this.onStartTimer}
              disabled={isTimerRunning}
            >
              Start
            </button>
            <button
              type="button"
              className="button green-btn"
              onClick={this.onStopTimer}
            >
              Stop
            </button>
            <button
              type="button"
              className="button yellow-btn"
              onClick={this.onResetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch
