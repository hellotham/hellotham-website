import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-grey has-text-black">
        <div className="content has-text-centered">
          <p className="content has-text-grey-dark is-size-7">
            © Copyright {new Date().getFullYear()} Hello Tham Pty. Ltd.
            · Website design by
            <a href="/admin"> Hello Tham</a>
            · All rights reserved.
          </p>
          <img
            src={logo}
            alt="Hello Tham"
            style={{ height: '4em' }}
          />
        </div>
        <div className="content has-text-centered has-background-grey has-text-white">
          <div className="container has-background-grey has-text-white">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-3">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/info/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/info/services">
                        Services
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-3">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/info/consultants">
                        Consultants
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/info/work">
                        Recent Work
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/info/partners">
                        Partners
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-3">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/contactus">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/info/privacy">
                        Privacy
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-3">
                <div className="menu-list">
                  <Link className="navbar-item" to="/blog">
                    Latest Articles
                  </Link>
                </div>
                <div className="social">
                  <a title="facebook" href="https://www.facebook.com/HelloThamCom">
                    <img
                      src={facebook}
                      alt="Facebook"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                  <a title="twitter" href="https://twitter.com/HelloThamCom">
                    <img
                      className="fas fa-lg"
                      src={twitter}
                      alt="Twitter"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                  <a title="instagram" href="https://www.instagram.com/HelloThamCom/">
                    <img
                      src={instagram}
                      alt="Instagram"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                  <a title="vimeo" href="https://vimeo.com">
                    <img
                      src={vimeo}
                      alt="Vimeo"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
