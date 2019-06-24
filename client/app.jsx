import React from 'react'
export default class App extends React.Component {
  constructor(props) {
    super(pros)
    this.state = {
      data: {}
    }
    this.fetchURL = `http://${window.location.hostname}:3000`
  }

  searchByYear = (param) => {
    fetch(`${this.fetchURL}/events?q=${param}?_page=7&_limit=10`)
      .then(result => result.json())
      .then(data => {
        this.setState({
          data
        })
      })
  }

  searchByPlace = (param) => {
    fetch(`${this.fetchURL}/events?q=${param}?_limit=10`)
      .then(result => result.json())
      .then(data => {
        this.setState({
          data
        })
      })
  }

  render() {
    return (
      <div>Something from react</div>
    )
  }
}
