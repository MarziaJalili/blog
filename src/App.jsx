import { useState } from 'react'
import heroImage from "../assets/images/illustration-article.svg";
import avatar from "../assets/images/image-avatar.webp";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className="blog-preview">
        <img className="blog-preview__hero-image" src={heroImage} alt="blog-preview__hero-image" />
        <span className="blog-preview__learning">Learning</span>
        <span className="blog-preview__data">Published 21 Dec 2023</span>
        <h1 className="blog-preview__heading">HTML & and CSS foundations</h1>

        <p className="blog-preview__description">
          These languages are the backbone of every website, defining structure, content, and presentation.
        </p>

        <div className="blog-preview__user">
          <img className="blog-preview__user-image" src={avatar} alt="avatar-image" />
          <span className="blog-preview__user-name">Greg Hooper</span>
        </div>

      </main>
    </>
  )
}

export default App
