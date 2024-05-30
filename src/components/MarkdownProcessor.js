import axios from 'axios';

export const convertMarkdownToHtml = async (markdown) => {
  const response = await axios.post('http://localhost:5000/convert', { markdown });
  return response.data.html;
};
