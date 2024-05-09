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
                    rightSideImage {
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
                }
            }
        }
    }
  }
`