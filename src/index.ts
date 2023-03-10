import fetch, { Response } from "node-fetch";
const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

const getData = (url: string): Promise<unknown> => {
  return fetch(url).then((res: Response) => {
    return res.json()
  })
}

getData(COMMENTS_URL)
  .then((data: unknown) => {
    if(Array.isArray(data)) {
      data.forEach(element => {
        console.log(`ID: ${element.id}, Email: ${element.email}`)
      });
    } else {
      console.log("No Array")
    }
});