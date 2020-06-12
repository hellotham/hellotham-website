import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children }) => {
  const { title, description, siteUrl } = useSiteMetadata()
  const siteImage = siteUrl + `${withPrefix('/')}img/site-image.jpg`
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link rel="icon" type="image/svg+xml" href="/img/logo.svg"></link>
        <link rel="alternate icon" href="/img/favicon.ico"></link>
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#660099"
        />
        <meta name="theme-color" content="#cc3366" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={siteUrl} />
        <meta name="twitter:site" content="HelloThamCom" />
        <meta name="twitter:creator" content="HelloThamCom" />
        <meta property="og:locale" content="en_AU" />
        <meta property="og:site_name" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:image" content={siteImage} />
        <meta property="og:image" content={siteImage} />
        <meta property="og:image:secure_url" content={siteImage} />
        <meta name="twitter:card" content={siteImage} />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
