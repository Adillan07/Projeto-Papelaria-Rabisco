import axios from 'axios' 
/*USANDO AXIOS*/
const api = axios.create({baseURL: 'https://reqres.in/api'})
export async function getFuncionarios(){
  try{
    const response = await api.get('/users?per_page=12')
    console.log(response.data.data)
    return response.data.data
  } catch (error){
    console.error(`Erro ao buscar produtos: ${error.message}`)
  }
}
