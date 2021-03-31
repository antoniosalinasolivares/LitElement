import  axios  from "axios";
let api = axios({
  baseURL : 'http://api.datos.gob.mx/v1/calidadAire'
})

const fetchData =  async () =>  {
    let data = await api.get('/')
    return data
  }

export default fetchData