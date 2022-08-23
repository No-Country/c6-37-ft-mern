import axios from 'axios'

export const getUsers = async () => {
  try {
    const resp = await axios.get('http://localhost:5000/usuarios')
    return resp;
  } catch(err){console.log(err)}
}