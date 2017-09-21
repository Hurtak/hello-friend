import React from 'react'
import './app.css'
import Menu from '../menu/menu.js'
import ConditionalUpdater from '../conditional-updater/conditional-updater.js'
// import Clock from '../clock/clock.js'
import Calendar from '../calendar/calendar.js'
import YearProgress from '../year-progress/year-progress.js'

import img from '../img/47.jpg'

class App extends React.Component {
  state = {
    backgroundImage: img
  }

  render () {
    return (
      <div
        className='App'
        style={{
          backgroundImage: `url("${this.state.backgroundImage}")`
        }}
      >
        <main className='App-content'>
          {/* <ConditionalUpdater
            updateEveryN={60 * 1000} // minute
            component={time => <Clock time={time} />}
          /> */}
          <ConditionalUpdater
            updateEveryN={24 * 60 * 60 * 1000} // day
            component={time => <Calendar time={time} />}
          />
          {(() => {
            const year = 365 * 24 * 60 * 60 * 1000
            const decimalPlaces = 8

            return (
              <ConditionalUpdater
                updateEveryN={year / 100 / 10 ** decimalPlaces}
                component={time => (
                  <YearProgress time={time} decimalPlaces={decimalPlaces} />
                )}
              />
            )
          })()}
        </main>
        {/* <aside className='App-menu'>
          <Menu urlsOfImages={App.apiUrls} />
        </aside> */}
      </div>
    )
  }
}

export default App
