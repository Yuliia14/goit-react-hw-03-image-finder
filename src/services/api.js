import axios from 'axios';

const fetchImagesWithQuery = (searchQuery, page = 1) => {
  const KEYAPI = '19307770-0b075029944e7b654fbe75927';
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${KEYAPI}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};

export default {
  fetchImagesWithQuery,
};