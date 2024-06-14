import SeoData from "@/components/SeoData";

const SEOQUERY = `
  seoData{
    metaTitle
    metaDescription
    metaKeywords
    metaImage{
      sourceUrl
    }
    jsonSchema
  }
`;


const THEME_SETTING_FIELDS = `
themeGeneralSettings{
  themeGeneralSettings{
    headerLogo{
      sourceUrl
    }
    menuInfo{
      link{
        title
        target
        url
      }
      scrollToSectionLink
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
    footerLinks{
      link{
        title
        url
        target
      }
    }
    twitterUri
    linkedinUri
    facebookUri
    youtubeUri
    pdfLogo{
      sourceUrl
    }
    pdfAddressInfo
    pdfGstInfo
    pdfInvoiceText
    pdfOrderDateText
    pdfCustomerDetailsText
    pdfShippingAddressText
    pdfProductCodeText
    pdfProductNameText
    pdfColorText
    pdfQuantityText
    pdfPriceText
    pdfSubtotalText
    pdfShippingText
    pdfTotalText
    pdfThankYouText
    successImage {
      sourceUrl
    }
    successHeading
    successDescription
    successDownloadInvoiceButtonText
    successBackHomeText
    successBackHomeButtonText
    failImage{
      sourceUrl
    }
    failHeading
    failDescription
    failRetryButtonText
    failBackHomeText
    failBackHomeButtonText
  }
}
`


export const CHECKOUT_PAGE = `
query CHECKOUT_PAGE_QUERY {
  pageBy(uri:"checkout"){
    title
    ${SEOQUERY}
  }
}
`

export const PAYMENT_SUCCESS_PAGE = `
query PAYMENT_SUCCESS_PAGE_QUERY {
  pageBy(uri:"payment-successful"){
    ${SEOQUERY}
  }
}
`

export const PAYMENT_FAILES_PAGE = `
query PAYMENT_FAILED_PAGE_QUERY{
  pageBy(uri:"payment-failed"){
    ${SEOQUERY}
  }
}
`

export const THEME_SETTINGS = `
query THEME_SETTINGS {
    ${THEME_SETTING_FIELDS}
  }
`
export const HOME_PAGE = `
query THEME_SETTINGS {
    ${THEME_SETTING_FIELDS}
    pageBy(uri: "/") {
        title
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
                    powerStripimage{
                      sourceUrl
                    }
                    powerStripleftText
                    powerStriprightText
                    featuresHeading
                    featuresImage{
                      sourceUrl
                    }
                    featuresImageMobile{
                      sourceUrl
                    }
                    features1Heading
                    features1Subheading
                    features2Heading
                    features2Subheading
                    features3Heading
                    features3Subheading
                    features4Heading
                    features4Subheading
                    features5Heading
                    features5Subheading
                    videoBackgroundImage{
                      sourceUrl
                    }
                    videoUrl
                    videoButtonText
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
                    insightsInfo{
                      image{
                        sourceUrl
                      }
                      categoryName
                      title
                      link
                    }
                    benefitsHeading
                    benefitsInfo{
                      title
                      image{
                        sourceUrl
                      }
                    }
                    exploreHeading
                    exploreButtonInfo{
                      title
                      url
                      target
                    }
                    exploreImagesInfo{
                      image{
                        sourceUrl
                      }
                    }
                    faqHeading
                    faqInfo{
                      heading
                      description
                    }
                    selectProduct {
                      __typename
                      ... on VariableProduct {
                        id
                        name
                        price
                        content
                        attributes {
                          nodes {
                            id
                            label
                            name
                            options
                            variation
                            optionsWithFields {
                              name
                              slug
                              value
                              colorCode
                            }
                          }
                        }
                        featuredImage{
                          node{
                            sourceUrl
                          }
                        }
                        galleryImages{
                          nodes{
                            sourceUrl
                          }
                        }
                        variations {
                          nodes {
                            databaseId
                            sku
                            name
                            price
                            regularPrice
                            salePrice
                            image {
                              sourceUrl
                            }
                            attributes {
                              nodes {
                                id
                                name
                                label
                                value
                              }
                            }
                          }
                        }
                        productExtraOptions{
                          isProductMadeInIndia
                          productWarranty
                          productInfo{
                            heading
                            value
                          }
                        }
                      }
                      ... on SimpleProduct {
                        id
                        name
                      }
                    }
                }
            }
        }
        ${SEOQUERY}
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

export const GET_ALL_PAGES_SLUG = `
  query GET_ALL_PAGES_SLUG {
    pages(where: {notIn: [5, 408, 410, 51, 50, 49, 52], status: PUBLISH}) {
      nodes {
        slug
      }
    }
  }
`

export const GET_DEFAULT_PAGE = `
  query GET_DEFAULT_PAGE($id: ID = "") {
    page(id: $id, idType: URI){
      title
      slug
      template{
        templateName
      }
      content
      ${SEOQUERY}     
    }
  }
`