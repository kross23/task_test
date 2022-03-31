export const getAlluser = async ( calback) => {
  const data = await  fetch('https://jsonplaceholder.typicode.com/users')
  .then((resp) => resp.json())
  .then( data => {
   return data;
    })
  .catch( error => {
    console.log(error);
  });
calback(data);
}
export const getAllPost = async (calback) => {
  const data = await  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((resp) => resp.json())
  .then( data => {
   return data;
    })
  .catch( error => {
    console.log(error);
  });
calback(data);
}
export const getAllImage = async (calback) => {
  const data = await  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((resp) => resp.json())
  .then( data => {
   return data;
    })
  .catch( error => {
    console.log(error);
  });
calback(data);
}


//https://i.pravatar.cc/300?img=1