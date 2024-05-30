import axios from 'axios';

export const convertMarkdownToHtml = async (markdown) => {
  const response = await axios.post('https://neo-backend.onrender.com/convert', { markdown });
  return response.data.html;
};
