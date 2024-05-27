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

export function rupeeStringToNumber(price){
  const priceString = price;
  const priceNumber = parseFloat(priceString.replace("₹", "").replace(/,/g, ""));
  const roundedPrice = parseFloat(priceNumber.toFixed(2));
  return roundedPrice;
}

export function isValidIndianPhoneNumber(phoneNumber) {
  // Regular expression for Indian phone number with optional +91 country code and optional space
  const phoneNumberPattern = /^(?:\+91\s?)?[6-9]\d{9}$/;
  return phoneNumberPattern.test(phoneNumber);
}

export function formatDate(dateString) {
  // Create a new Date object from the input date string
  const date = new Date(dateString);
  
  // Array of month names
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  // Extract day, month, and year
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  
  // Format the date into "day month year"
  return `${day} ${month} ${year}`;
}


export const IndiaStatesList = [
  { id: 'AN', name: 'Andaman and Nicobar Islands' },
  { id: 'AP', name: 'Andhra Pradesh' },
  { id: 'AR', name: 'Arunachal Pradesh' },
  { id: 'AS', name: 'Assam' },
  { id: 'BR', name: 'Bihar' },
  { id: 'CH', name: 'Chandigarh' },
  { id: 'CG', name: 'Chhattisgarh' },
  { id: 'DN', name: 'Dadra and Nagar Haveli' },
  { id: 'DD', name: 'Daman and Diu' },
  { id: 'DL', name: 'Delhi' },
  { id: 'GA', name: 'Goa' },
  { id: 'GJ', name: 'Gujarat' },
  { id: 'HR', name: 'Haryana' },
  { id: 'HP', name: 'Himachal Pradesh' },
  { id: 'JK', name: 'Jammu and Kashmir' },
  { id: 'JH', name: 'Jharkhand' },
  { id: 'KA', name: 'Karnataka' },
  { id: 'KL', name: 'Kerala' },
  { id: 'LA', name: 'Ladakh' },
  { id: 'LD', name: 'Lakshadweep' },
  { id: 'MP', name: 'Madhya Pradesh' },
  { id: 'MH', name: 'Maharashtra' },
  { id: 'MN', name: 'Manipur' },
  { id: 'ML', name: 'Meghalaya' },
  { id: 'MZ', name: 'Mizoram' },
  { id: 'NL', name: 'Nagaland' },
  { id: 'OR', name: 'Odisha' },
  { id: 'PY', name: 'Puducherry' },
  { id: 'PB', name: 'Punjab' },
  { id: 'RJ', name: 'Rajasthan' },
  { id: 'SK', name: 'Sikkim' },
  { id: 'TN', name: 'Tamil Nadu' },
  { id: 'TS', name: 'Telangana' },
  { id: 'TR', name: 'Tripura' },
  { id: 'UP', name: 'Uttar Pradesh' },
  { id: 'UK', name: 'Uttarakhand' },
  { id: 'WB', name: 'West Bengal' }
]; 