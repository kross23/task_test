export const getAlluser = async ( calback) => {
  const data = await  fetch('https://jsonplaceholder.typicode.com/users')
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
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
  .then((response) => response.json())
  .then((json) => {return json})
  .catch( error => {
    console.log(error);
  });
 
  console.log(data.slice(7).reverse());
  calback(data.slice(7).reverse());
}



//https://i.pravatar.cc/300?img=1