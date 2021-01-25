import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby' 

import Section from "./section"

const Projects = () => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    return (
      <div className="dark">
        <div className="container" id="projects">
            <Section className="projects">
                <div className="row"> 
                    <div className="subheading">Hi! I'm Liam.</div>
                </div>
                <div className="row"> 
                    <div className="main-text thin">
                            <p>I'm a student at Princeton pursuing a degree in Computer Science, as well as minors in Music Composition and Machine Learning.</p>
                            <p>Some of my key interests are web development, music theory, and visual design, and my passion is combining aesthetics and functionality to create technologies that bring people together in meaningful ways. </p>
                    </div>
                    <div className="main-image"><Img fluid={data.placeholderImage.childImageSharp.fluid} /></div>
                </div>
            </Section>
        </div>
      </div>  
    );
};

export default Projects;