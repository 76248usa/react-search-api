import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID 28IIT1Vu4CM8nnrLZaybx_GL4Ktx27Ay0j35PGgSLjo',
    },
    params: {
      query: term
    },
  });

  return response.data.results;
};

export default searchImages;



