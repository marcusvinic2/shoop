import axios from 'axios'

//criando conexão com o servidor back-end
const apiShop = axios.create({
	baseURL: 'https://fakestoreapi.com'
})

// apiShop.interceptors.request.use( async config => {
// 	const userData = await localStorage.getItem('Shop:userData')
// 	const token = userData && JSON.parse(userData).token
// 	config.headers.authorization = `Bearer ${token}`

// 	return config
// } )

export default apiShop