/* eslint-disable */
import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { navigate } from 'gatsby-link'

import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export const ContactPageTemplate = ({
  title,
  subtitle,
  image,
  channels,
  content
}) => {
  const [state, setState] = useState({ isValidated: false })

  const handleChange = (e) => {
    setState({ [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
    <div>
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
          backgroundPosition: `top left`,
          backgroundAttachment: `fixed`,
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
          {title}
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
          {subtitle}
        </h3>
      </div>
      </div>
      <section className="section">
          <div className="container">
            <div className="content">
              <div className="columns is-multiline">
                <div className="column is-6">
                  <HTMLContent className="content" content={content} />
                  {channels.map((channel) => (
                    <div>
                      <a href={channel.link}>
                        <img src={channel.icon.publicURL} alt={channel.name} style={{ width: '3em', verticalAlign: 'middle', paddingRight: '1em', paddingBottom: '0.5em'}} />
                        {channel.name}: {channel.link}
                      </a>
                    </div>
                  ))} 
                </div>
                <div className="column is-6">
                  <form
                    name="contact"
                    method="post"
                    action="/contact/thanks/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                  >
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="contact" />
                    <div hidden>
                      <label htmlFor="bot-field-id">
                        Don’t fill this out:{' '}
                        <input id="bot-field-id" name="bot-field" onChange={handleChange} />
                      </label>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor="name-id">
                        Your name
                      </label>
                      <div className="control">
                        <input
                          className="input"
                          type={'text'}
                          name={'name'}
                          onChange={handleChange}
                          id="name-id"
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={'email'}>
                        Email
                      </label>
                      <div className="control">
                        <input
                          className="input"
                          type={'email'}
                          name={'email'}
                          onChange={handleChange}
                          id={'email'}
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={'message'}>
                        Message
                      </label>
                      <div className="control">
                        <textarea
                          className="textarea"
                          name={'message'}
                          onChange={handleChange}
                          id={'message'}
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <button className="button is-link" type="submit">
                        Send
                      </button>
                    </div>
                  </form>                  
                </div>
              </div>

            </div>
          </div>
        </section>
    </div>
  )
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  channels: PropTypes.array,
  content: PropTypes.string,
}

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ContactPageTemplate
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        image={post.frontmatter.image}
        channels={post.frontmatter.channels}
        content={post.html}
      />
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ContactPage

export const pageQuery = graphql`
  query ContactPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
      html
      frontmatter {
        title
        subtitle
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        channels {
          name
          icon {
            publicURL
          }
          link
        }
      }
    }
  }
`
