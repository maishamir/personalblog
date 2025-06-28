import React from 'react'
import { Link } from 'react-router-dom';
import "./Articles.scss"

function Articles() {
  return (
    <div className="articles__container">
        <p className="articles__heading">Latest Articles</p>

        <div className="articles__articles">
          <div className="articles__article">
            <p className="articles__title">
              Balancing Hobbies and Coding: How Hiking and Rock Climbing Help Me
              Stay Motivated
            </p>
            <small className="articles__date">February 18, 2025</small>
          </div>

          <div className="articles__article">
            <p className="articles__title">
              Reading for Inspiration: 5 Books That Shaped My Coding Journey
            </p>
            <small className="articles__date">February 15, 2025</small>
          </div>

          <div className="articles__article">
            <p className="articles__title">
              Overcoming Imposter Syndrome as a New Developer
            </p>
            <small className="articles__date">February 10, 2025</small>
          </div>

          <div className="articles__article">
            <p className="articles__title">
              Exploring the World of Responsive Design
            </p>
            <small className="articles__date">February 4, 2025</small>
          </div>

          <div className="articles__article">
            <p className="articles__title">
              My Favorite Dev Tools for Productivity
            </p>
            <small className="articles__date">January 29, 2025</small>
          </div>
        </div>

        <Link to="/blog" id="blog_link">
          View all articles
        </Link>
      </div>
  )
}

export default Articles