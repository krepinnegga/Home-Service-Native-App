import { request, gql } from 'graphql-request'
import { MASTER_URL } from "@env";

const getSlider = async () => {
    const query = gql`
    query GetSlider {
        sliders {
          id
          name
          image {
            url
          }
        }
      }
`
  const res = await request(MASTER_URL, query)
  return res;
}

const getCategories = async () => {
    const query = gql
   ` query MyQuery {
        categories {
          id
          name
          icon {
            url
          }
        }
      }
    `
    const res = await request(MASTER_URL, query)
    return res;
}

const getBusinessList = async () => {
  const query = gql
  `query getBusinessList {
    businessLists {
      id
      name
      email
      contactPerson
      category {
        name
      }
      address
      about
      images {
        url
      }
    }
  }
`
  const res = await request(MASTER_URL, query)
  return res
}

export default{
    getSlider,
    getCategories,
    getBusinessList 
}

