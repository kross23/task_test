const API_USERS = process.env.REACT_APP_API + 'users'
const API_POSTS = process.env.REACT_APP_API + 'posts?userId=';


export const getAlluser = async ( calback) => {
  const data = await  fetch(API_USERS)
  .then((resp) => resp.json())
  .then( data => {
   return data;
    })
    .catch( error => {
      console.log(error);
    });
  const arrayData=[];
  for (let iterator of data) {
    const {id, name, username, company} = iterator;
    let active = false;
    let user = {
      id,name,username,company:company.name, active:active
    }
    arrayData.push(user);
}
calback(arrayData);
}



export const getAllPost = async (calback, id) => {
  const data = await fetch(`${API_POSTS}${id}`)
  .then((response) => response.json())
  .then((json) => {return json})
  .catch( error => {
    console.log(error);
  });
  calback(data.slice(7).reverse());
}
