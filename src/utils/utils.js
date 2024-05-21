import axios from "axios";

// Function to send GraphQL queries with variables
export async function sendGraphQLQuery(query, variables = {}) {
    try {
      const response = await axios.post(process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL, {
        query: query,
        variables: variables,
      });
  
      return response.data;
    } catch (error) {
      console.error('GraphQL query error:', error);
      throw error;
    }
  }