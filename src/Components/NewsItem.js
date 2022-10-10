import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let { title, description } = this.props // this is called distructuring in javascript
    return (
      <div>
        <div className="card" style={{ width: '18rem' }}>
          <img
            src="https://cdn.cnn.com/cnnnext/dam/assets/221003131405-01-stanley-tucci-searching-for-italy-super-tease.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/NewsItem" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    )
  }
}
