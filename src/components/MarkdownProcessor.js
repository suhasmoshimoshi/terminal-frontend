import axios from 'axios';

export const convertMarkdownToHtml = async (markdown) => {
  const response = await axios.post('https://neo-backend-1.onrender.com/convert', { markdown });
  return response.data.html;
};
