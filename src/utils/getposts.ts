import { graphql, useStaticQuery } from 'gatsby'
import { ImgType } from '@/components/img'

const postQuery = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, filter: { slug: { regex: "/^post/" } }) {
      nodes {
        frontmatter {
          title
          description
          author
          date(formatString: "YYYY-MM-DD")
          image {
            childImageSharp {
              gatsbyImageData
            }
            extension
            publicURL
          }
          tags
        }
        slug
      }
    }
  }
`

export type PostType = {
  frontmatter: {
    title: string
    description: string
    author: string
    date: string
    image: ImgType
    tags: string[]
  }
  slug: string
}
type PostQueryType = {
  allMdx: {
    nodes: PostType[]
  }
}

const GetPosts = (tag?: string) => {
  const data: PostQueryType = useStaticQuery(postQuery)
  return tag ? data.allMdx.nodes.filter(node => node.frontmatter.tags.includes(tag)) : data.allMdx.nodes
}
export default GetPosts
