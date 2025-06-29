import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import avatar from "./assets/images/image-avatar.jpg"
import hamburger from "./assets/images/icon-menu.svg";
import close from "./assets/images/icon-menu-close.svg";
import sun from "./assets/images/icon-sun.svg";
import moon from "./assets/images/icon-moon.svg";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Blog from "./pages/Blog/Blog";
import BlogPost from "./pages/SingleBlog/BlogPost";
import About from "./pages/About/About";

function App() {
  const [toggleNav, setToggleNav] = useState(false)
  const [isDark, setIsDark] = useState(false);

  function handleToggleNav() {
    setToggleNav(prev => !prev)
  }

  function handleToggleTheme() {
    setIsDark(prev => !prev)
  }

  return (
    <main className="app">
      
      <header className="header">
        <img src={avatar} alt="" className="header__avatar" />
        <img src={toggleNav ? close : hamburger} alt="" className="header__nav--burger" onClick={handleToggleNav} />
        <button className="header__themeToggle" type="button" onClick={handleToggleTheme}>
          <img src={isDark ? sun : moon} alt="" className="header__themeIcon" />
        </button>
      </header>

      <BrowserRouter>
        <div className="app__wrapper">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/3" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
      
      
    </main>
  );
}

export default App;
