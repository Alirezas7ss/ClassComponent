import React, { Component } from 'react';
import sass from '../images/6.png';
import './sass/sass.scss';
export default class Sass extends Component {
  render() {
    return (
      <div>
      <body>
        <header className="header">
          <h1 className="logo-name">SASS</h1>
          <div className="navbar">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Support</a></li>
            </ul>
            <img src={sass} alt="logo img" />
          </div>
          <div className="hamburger-menu">
            <span />
            <span />
            <span />
          </div>
        </header>
        <div className="main">
          <aside>
            <div className="course">
              <p>JAVASCRIPT Course</p>
            </div>
            <div className="course">
              <p>HTML&amp;CSS Course</p>
            </div>
            <div className="course">
              <p>SASS Course</p>
            </div>
          </aside>
          <main>
            <img src={sass} alt="Logo png" />
            <h2>SASS</h2>
            <p>This page styled with SASS</p>
          </main>
        </div>
        <div className="cards">
          <div className="card">
            <img src={sass} alt="logo " />
            <div className="text-card">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam molestiae at magnam veritatis nisi incidunt atque dignissimos ratione sit quasi.</div>
            <span>open</span>
          </div>
          <div className="card">
            <img src={sass} alt="logo " />
            <div className="text-card">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam molestiae at magnam veritatis nisi incidunt atque dignissimos ratione sit quasi.</div>
            <span>open</span>
          </div>
          <div className="card">
            <img src={sass} alt="logo " />
            <div className="text-card">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam molestiae at magnam veritatis nisi incidunt atque dignissimos ratione sit quasi.</div>
            <span>open</span>
          </div>
          <div className="card">
            <img src={sass} alt="logo " />
            <div className="text-card">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam molestiae at magnam veritatis nisi incidunt atque dignissimos ratione sit quasi.</div>
            <span>open</span>
          </div>
        </div>
        <footer>
          <div className="summery">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo placeat, ex veritatis tenetur architecto perspiciatis molestiae corporis ipsam nesciunt vel quae porro odit repudiandae nam magni cum voluptas omnis error.
            </p>
            <div className="links">
              <ul>
                <li>privacy</li>
                <li>aboutUs</li>
                <li>Footer</li>
              </ul>
            </div>
          </div>
        </footer>
        </body>
      </div>
    )
  }
}

