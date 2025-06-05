import axios from 'axios'

export default async function getPhone() {
  try {
    const response = await axios.get('http://localhost:3000/phones');
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}
