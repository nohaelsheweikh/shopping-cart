import axios from 'axios';

let API_URL = 'https://api.spoonacular.com/food/menuItems/search?query=pizza&number=20&apiKey=2fa8c029a25d4732acc32ac1b8a4e444';
   export default function callApi(endpoint, method = 'GET', body) {
       return axios({
           method,
           url: `${API_URL}`,
           data: body
       }).catch(err => {
           console.log(err);
       });
}