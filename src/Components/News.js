import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <div className=" row">
          <h1> Top-News</h1>
          <div className="col-md-4">
            <NewsItem title="my-Title" description="my-descript" />
          </div>
          <div className="col-md-4">
            <h1> Top-News</h1>
            <NewsItem title="new-Title" description="New-descript" />
          </div>
          <div className="col-md-4">
            <NewsItem title="my-Title" description="my-descript" />
          </div>

          <NewsItem />
        </div>
      </div>
    )
  }
}
