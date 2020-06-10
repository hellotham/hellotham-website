import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog.jpg')`,
          }}
        >
          <div
            style={{
              display: 'flex',
              height: '150px',
              lineHeight: '1',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <h1
              className="has-text-centered has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
              style={{
                backgroundColor: '#ff99cc',
                color: '#660099',
                lineHeight: '1',
                padding: '0.25em',
              }}
            >
              Our Blog
            </h1>
            <h3
              className="has-text-centered has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
              style={{
                backgroundColor: '#cc3366',
                color: 'white',
                lineHeight: '1',
                padding: '0.25em',
              }}
            >
              Articles published from time to time
            </h3>
      </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
