import { transformPost } from "../../transformers";

export const getPost = async (id) =>
  fetch(`http://localhost:3005/posts/${id}`)
    .then((res) => {
      if (res.ok) {
        return res;
      }

      const errorMessage = res.status === 404
        ? 'Такая страница не существует'
        : 'Что-то пошло не так. Попробуйте ещё раз позднее.'

      return Promise.reject(errorMessage)
    })
    .then(loadedPost => loadedPost.json())
    .then(loadedPost => loadedPost && transformPost(loadedPost))
  ;
