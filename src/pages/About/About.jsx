import React from 'react'
import workspaceSml from "../../assets/images/image-workspace-small.jpg"
import Socials from "../../components/Socials/Socials"
import "./About.scss"

function About() {
  return (
    <div className='about'>
      <h1 className='about__title'>About Me</h1>  
      
      <div className="about__content">
        <p className="about__text">
          Hi, I'm Paulina! Ever since I can remember, I've had a passion for creativity and problem-solving. That's what led me to the world of front-end web development. There's something magical about seeing an idea come to life in the browser—whether it's a simple layout experiment or a complex interface for a bigger project. 
        </p>

        <p className="about__text">
          When I'm not coding, I love getting lost in a good book. My taste is pretty eclectic: I'll happily read everything from fantasy novels to biographies of tech pioneers. Reading helps me unwind and often sparks new ideas for my coding projects.
        </p>

        <p className="about__text">
          Another big passion of mine is the great outdoors. Hiking allows me to disconnect from the digital world and reconnect with nature. I love challenging hikes with rewarding views at the top. And if I'm not on the trails, you might catch me rock climbing. The combination of mental focus and physical endurance is a perfect parallel to tackling tough coding challenges!
        </p>

        <p id="favBooks" className='about__text '>
          Some of my favorite books:
        </p>

        <ul className="about__text favBooks" aria-labelledby='favBooks'>
          <li className="favBooks__book">
            <strong>"The Pragmatic Programmer"</strong> by Andrew Hunt and David Thomas (for helpful insights into software development)
          </li>
          <li className="favBooks__book">
            <strong>"Ready Player One"</strong> by Ernest Cline (for some futuristic escapism)
          </li>
          <li className="favBooks__book">
            <strong>"The Hobbit"</strong> by J.R.R. Tolkien (for a bit of fantasy fun)
          </li>
          <li className="favBooks__book">
            <strong>"Educated"</strong> by Tara Westover (for incredible inspiration)
          </li>
        </ul>

        <p className="about__text">I aboslutely love my workspace for a place that inspires me to do my best work, so I thought I'd share it with you:</p>

        <img src={workspaceSml} alt="" className="about__img" /> 

        <p className="about__text">
          I hope this blog not only documents my growth but also helps others see that coding can be for everyone. Thanks for joining me on this journey!
        </p>

      </div>

      <div className="about__socials">
        <h2 className="about__socials-title">Follow me</h2>
        <Socials />
      </div>
    </div>



  )
}

export default About