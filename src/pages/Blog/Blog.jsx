import "./Blog.scss"

function Blog() {
  return (
    <div className="blog">
      <div className="blog__heading">
        <h1 className="blog__heading-title">My Articles</h1>
        <p className="blog__heading-blurb">
          Below are all my recent blog posts. Click on any title to read the full article.
        </p>
      </div>
      <hr className="divider divider--first" />

      <div className="blog__articles">
        <div className="blog__article">
          <p className="blog__article-title">
            Balancing Hobbies and Coding: How Hiking and Rock Climbing Help Me Stay Motivated
          </p>
          <small className="blog__article-date">
            February 18, 2025
          </small>
          <p className="blog__article-desc">
            Thoughts on maintaining energy and focus through outdoor activities and exercise.
          </p>
        </div>

        <hr className="divider" />

        <div className="blog__article">
          <p className="blog__article-title">
            Reading for Inspiration: 5 Books That Shaped My Coding Journey
          </p>
          <small className="blog__article-date">
            February 15, 2025
          </small>
          <p className="blog__article-desc">
            A few of my favorite books, both fiction and non-fiction, that keep me motivated.
          </p>
        </div>
        <hr className="divider" />

        <div className="blog__article">
          <p className="blog__article-title">
            Overcoming Imposter Syndrome as a New Developer
          </p>
          <small className="blog__article-date">
            February 10, 2025
          </small>
          <p className="blog__article-desc">
            Some tups and personal reflections on dealing with self-doubt when learning to code.
          </p>
        </div>
        <hr className="divider" />

        <div className="blog__article">
          <p className="blog__article-title">
            Exploring the World of Responsive Design
          </p>
          <small className="blog__article-date">
            February 4, 2025
          </small>
          <p className="blog__article-desc">
            The importance of making websites look great on different devices.
          </p>
        </div>
        <hr className="divider" />

        <div className="blog__article">
          <p className="blog__article-title">
            My Favorite Dev Tools for Productivity
          </p>
          <small className="blog__article-date">
            January 29, 2025
          </small>
          <p className="blog__article-desc">
            A quick look at the tools I rely on, from code editors to browser extensions.
          </p>
        </div>
        <hr className="divider" />

        <div className="blog__article">
          <p className="blog__article-title">
            Understanding JavaScript Basics
          </p>
          <small className="blog__article-date">
            January 28, 2025
          </small>
          <p className="blog__article-desc">
            My adventure into JavaScript's fundamentals&mdash;variables, functions, loops, and more.
          </p>
        </div>
        <hr className="divider" />

        <div className="blog__article">
          <p className="blog__article-title">
            Learning HTML & CSS: My First Week
          </p>
          <small className="blog__article-date">
            January 16, 2025
          </small>
          <p className="blog__article-desc">
            A recap of my first steps in web development, form basic tags to styling techniques.
          </p>
        </div>
        <hr className="divider" />
        <div className="blog__article">
          <p className="blog__article-title">
            Why I Chose Front-End Web Development
          </p>
          <small className="blog__article-date">
            January 12, 2025
          </small>
          <p className="blog__article-desc">
            I share the reasons behind my shift to front-end development and why this path excites me.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Blog