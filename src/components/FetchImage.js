import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

const FetchImage = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allImageSharp {
          nodes {
            parent {
              ... on File {
                name
                relativePath
              }
            }
            gatsbyImageData(width: 240)
          }
        }
      }
    `}
    render={data => {
      const image = data.images.nodes.find(n => {
        return n.parent.relativePath.includes(props.filename)
      })
      if (!image) {
        return null
      }

      return <GatsbyImage alt={props.alt} image={getImage(image)} />
    }}
  />
)
export default FetchImage