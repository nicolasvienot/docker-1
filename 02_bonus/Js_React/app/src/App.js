import React from 'react';
import "./app.css"


export default class App extends React.Component {
  render () {
    return (
      <div className='wrapper'>
        <div className='header dark-header'>
          <div className='nav'>
            <div className='logo'>Flo Gazeau</div>
            <div className='menu'>
              <ul>
                <li>Accueil</li>
                <li>A Propos</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='page-body'>
          <section id='section-accueil'>
            <div className='section-inner'>
              <div className='section-bg'></div>
              <div className='section-content'>
                <h2>Je suis</h2>
                <h1>DEVELOPPEUR WEB FREELANCE</h1>
              </div>
            </div>
          </section>
          <section id='section-apropos'>
            <div className='section-inner'>
              <div>
                <div>Image Profile</div>
                <h1>Je suis développeur freelance</h1>
              </div>
              <div>
                <div>
                  <p>Présentation</p>
                  <p>Loremp ispsum</p>
                </div>
                <div>
                  <div>
                    Skills
                  </div>
                </div>
              </div>
              <div>
                <div>BOX 1</div>
                <div>BOX 2</div>
                <div>BOX 3</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}
