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

export function checkVideoPlatform(url) {
    if (url.includes('youtube.com')) {
        return 'YouTube';
    } else if (url.includes('vimeo.com')) {
        return 'Vimeo';
    } else {
        return '';
    }
}

export function formatDuration(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  // Format the duration into HH:MM:SS
  const formattedDuration = [
    hours.toString().padStart(2, '0'),
    minutes.toString().padStart(2, '0'),
    secs.toString().padStart(2, '0')
  ].join(':');

  return formattedDuration;
}

export function parseDuration(duration) {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  const hours = match[1] ? parseInt(match[1], 10) : 0;
  const minutes = match[2] ? parseInt(match[2], 10) : 0;
  const seconds = match[3] ? parseInt(match[3], 10) : 0;

  // Format the duration into HH:MM:SS
  const formattedDuration = [
    hours.toString().padStart(2, '0'),
    minutes.toString().padStart(2, '0'),
    seconds.toString().padStart(2, '0')
  ].join(':');

  return formattedDuration;
}

export function addAutoplayParam(url) {
  try {
    const urlObj = new URL(url);
    const params = urlObj.searchParams;

    if (!params.has('autoplay')) {
      params.append('autoplay', '1');
    }

    return urlObj.toString();
  } catch (error) {
    console.error('Invalid URL:', error);
    return url;
  }
}