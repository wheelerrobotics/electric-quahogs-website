import React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbySeo } from "gatsby-plugin-next-seo"


const query = graphql`
query SEO {
  site {
    siteMetadata {
      defaultTitle: title
      titleTemplate
      defaultDescription: description
      siteUrl: url
      defaultImage: image
      twitterUsername
    }
  }
}
`
function Helm ({ title, description, image, article }: any){
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)
  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
    keywords,
  } = site.siteMetadata
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }
    return (
      <div className="application">
        <Helmet>
          {console.log(seo, site)}
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <title>{seo.title}</title>
        //linkTags= 
        //canonical=
        //facebook=
        //htmlAttributes=
        //languageAlternates=
        //mobileAlternate=
        //twitter=
        //openGraph=
          <GatsbySeo 
        nofollow= {false}
        noindex= {false}
        title= {seo.title}
        metaTags= {keywords}
        description= {seo.description}
        language= {"en"}
        titleTemplate= {titleTemplate}></GatsbySeo>
        </Helmet>
      </div>
    )
  
}

export default Helm
