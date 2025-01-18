import sanityClient from '@sanity/client';

// Initialize the Sanity client
const client = sanityClient({
  projectId: 's596nclf', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name (e.g., "production")
  apiVersion: '2023-01-01', // Use the latest API version
  useCdn: true, // Use the CDN for faster response times in production
});

// Helper function to execute GROQ queries
const sanityQuery = async (query, params = {}) => {
  try {
    return await client.fetch(query, params);
  } catch (error) {
    console.error('Sanity Query Error:', error);
    throw error;
  }
};

// Fetch all projects
export const getProjects = async () => {
  return sanityQuery(`
    *[_type == "projects"]{
      title,
      description,
      technologies,
      github,
      link
    }
  `);
};

// Fetch main details
export const getMainDetails = async () => {
  return sanityQuery(`
    *[_type == "mainDetails"]{
      name,
      description,
      role,
      photo{
        asset->{url}
      },
      email
    }
  `);
};

// Fetch all social links
export const getSocialLinks = async () => {
  return sanityQuery(`
    *[_type == "socialLinks"]{
      platform,
      url
    }
  `);
};

// Fetch education details
export const getEducation = async () => {
  return sanityQuery(`
    *[_type == "education"]{
      school,
      degree,
      duration,
      image{
        asset->{url}
      }
    }
  `);
};

// Fetch experience details
export const getExperience = async () => {
  return sanityQuery(`
    *[_type == "experience"]{
      position,
      company,
      duration,
      image{
        asset->{url}
      },
      descriptions
    }
  `);
};

// Fetch certificates
export const getCertificates = async () => {
  return sanityQuery(`
    *[_type == "certificates"]{
      title,
      description,
      icon{
        asset->{url}
      },
      link
    }
  `);
};

// Fetch footer details
export const getFooter = async () => {
  return sanityQuery(`
    *[_type == "footer"]{
      text
    }
  `);
};
