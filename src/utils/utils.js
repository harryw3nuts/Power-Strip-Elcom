import axios from "axios";
import Router from "next/router";

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

export function rupeeStringToNumber(price) {
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

export function scrollToSection(id,route) {
  // console.log("ksdlf : ",id.split("")[0] == "#" ? "yes" : "no");
  if(route && route != '/'){
    const targetSection = id.replace('#', ''); // Remove the hash symbol if present
    Router.push(`/?scrollTo=${targetSection}`);
  }else{
    if (id.split("")[0] == "#" && id.split("").length > 1) {
      const element = document.querySelector(id);
      if (element) {
        const offset = 90; // adjust this value to account for the height of the header or any other fixed element
        const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      Router.push(id)
    }
  }
}


export const IndiaStatesList = [
  { value: 'AN', label: 'Andaman and Nicobar Islands' },
  { value: 'AP', label: 'Andhra Pradesh' },
  { value: 'AR', label: 'Arunachal Pradesh' },
  { value: 'AS', label: 'Assam' },
  { value: 'BR', label: 'Bihar' },
  { value: 'CH', label: 'Chandigarh' },
  { value: 'CG', label: 'Chhattisgarh' },
  { value: 'DN', label: 'Dadra and Nagar Haveli' },
  { value: 'DD', label: 'Daman and Diu' },
  { value: 'DL', label: 'Delhi' },
  { value: 'GA', label: 'Goa' },
  { value: 'GJ', label: 'Gujarat' },
  { value: 'HR', label: 'Haryana' },
  { value: 'HP', label: 'Himachal Pradesh' },
  { value: 'JK', label: 'Jammu and Kashmir' },
  { value: 'JH', label: 'Jharkhand' },
  { value: 'KA', label: 'Karnataka' },
  { value: 'KL', label: 'Kerala' },
  { value: 'LA', label: 'Ladakh' },
  { value: 'LD', label: 'Lakshadweep' },
  { value: 'MP', label: 'Madhya Pradesh' },
  { value: 'MH', label: 'Maharashtra' },
  { value: 'MN', label: 'Manipur' },
  { value: 'ML', label: 'Meghalaya' },
  { value: 'MZ', label: 'Mizoram' },
  { value: 'NL', label: 'Nagaland' },
  { value: 'OR', label: 'Odisha' },
  { value: 'PY', label: 'Puducherry' },
  { value: 'PB', label: 'Punjab' },
  { value: 'RJ', label: 'Rajasthan' },
  { value: 'SK', label: 'Sikkim' },
  { value: 'TN', label: 'Tamil Nadu' },
  { value: 'TS', label: 'Telangana' },
  { value: 'TR', label: 'Tripura' },
  { value: 'UP', label: 'Uttar Pradesh' },
  { value: 'UK', label: 'Uttarakhand' },
  { value: 'WB', label: 'West Bengal' }
]; 