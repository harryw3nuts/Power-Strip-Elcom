export const THEME_SETTINGS = `
query THEME_SETTINGS {
    themeGeneralSettings{
      themeGeneralSettings{
        headerLogo{
          sourceUrl
        }
        ctaOneInfo{
          title
          target
          url
        }
        ctaTwoInfo{
          title
          target
          url
        }
        footerCopyrightInfo
        footerElcomLink{
          title
          target
          url
        }
        twitterUri
        linkedinUri
        facebookUri
        youtubeUri
      }
    }
  }
`
export const HOME_PAGE = `
query THEME_SETTINGS {
    themeGeneralSettings{
      themeGeneralSettings{
        headerLogo{
          sourceUrl
        }
        ctaOneInfo{
          title
          target
          url
        }
        ctaTwoInfo{
          title
          target
          url
        }
        footerCopyrightInfo
        footerElcomLink{
          title
          target
          url
        }
        twitterUri
        linkedinUri
        facebookUri
        youtubeUri
      }
    }
    pageBy(uri: "/") {
        template {
            ... on HomePageTemplate {
                homePageFields {
                    bannerHeading
                    bannerSubHeading
                    bannerLeftSideImage {
                        sourceUrl
                    }
                    bannerRightSideImage {
                        sourceUrl
                    }
                    bannerButtonInfo {
                        title
                        url
                        target
                    }
                    otherHeading
                    otherProductInfo {
                        productName
                        productImage {
                            sourceUrl
                        }
                        largeWidthBox
                    }
                    reviewsHeading
                    reviewsInfo{
                      name
                      description
                    }
                    insightsHeading
                    insightsReadMoreLinkText
                    insightsAllInsightsLink{
                      title
                      url
                      target
                    }
                    benefitsHeading
                    benefitsInfo{
                      title
                      image{
                        sourceUrl
                      }
                    }
                    faqHeading
                    faqInfo{
                      heading
                      description
                    }
                }
            }
        }
    }
    posts(first: 3, where: {status: PUBLISH}) {
      nodes {
        title
        uri
        categories{
          nodes{
            name
          }
        }
        featuredImage{
          node{
            sourceUrl
          }
        }
      }
    }
  }
`