const api = 'https://jordan.ashton.fashion/api/goods/30/comments'

export const getAllComments = (per_page = 10, pageNumber = 1) => {
   return fetch(`${api}?page=${pageNumber}&per_page=${per_page}`)
            .then((response) => response.json())
}

export const sendComment = (data) => {
   return fetch(api,
                  {
                     headers: {
                     'Accept': 'application/json',
                     'Content-Type': 'application/json'
                  },
                  method: "POST",
                  body: JSON.stringify(data)
               })
                  .then((response) => response.json())
                  .catch((response) => console.log(response))
}


