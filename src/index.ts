const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';
interface Post {
  postId: number,
  id: number,
  email: string
  name: string,
  body: string,
}

const getData = <T>(url: string): Promise<T> => {
  return fetch(url).then((res) => { 
    return res.json()
  })
}

getData<Post[]>(COMMENTS_URL)
  .then((data) => {
    if(Array.isArray(data)) {
      data.forEach((element: Post) => {
        console.log(`ID: ${element.id}, Email: ${element.email}`)
      });
    } else {
      console.log("No Array")
    }
});