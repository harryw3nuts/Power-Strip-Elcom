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

export function getYouTubeEmbeddedUrl(url) {
  let videoId;
  const youtubeRegex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(youtubeRegex);
  if (match && match[1]) {
      videoId = match[1];
  }
  if (videoId) {
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  }
  return null;
}

export function getVimeoEmbeddedUrl(url) {
  let videoId;
  const vimeoRegex = /vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/(?:\w+\/)?|album\/(?:\d+\/video\/)?|video\/|)(\d+)(?:$|\/|\?)/;
  const match = url.match(vimeoRegex);
  if (match && match[1]) {
      videoId = match[1];
  }
  if (videoId) {
      return `https://player.vimeo.com/video/${videoId}?autoplay=1`;
  }
  return null;
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