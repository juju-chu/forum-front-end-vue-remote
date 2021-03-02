import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getRestaurants({ page, categoryId }) {
    const searchParams = new URLSearchParams({ page, categoryId })
    return apiHelper.get(`/restaurants?${searchParams.toString()}`)
  },
  getDetail({ restaurantId }) {
    return apiHelper.get(`/restaurants/${restaurantId}`)
  },
  getFeed() {
    return apiHelper.get('/restaurants/feeds')
  },
  getTopRestaurants() {
    return apiHelper.get('/restaurants/top')
  },
  addFavorite(restaurantId) {
    return apiHelper.post(`/favorite/${restaurantId}`, null)
  },
  deleteFavorite(restaurantId) {
    return apiHelper.delete(`/favorite/${restaurantId}`)
  },
  addLike(restaurantId) {
    return apiHelper.post(`/like/${restaurantId}`, null)
  },
  deleteLike(restaurantId) {
    return apiHelper.delete(`/like/${restaurantId}`)
  },
  createComment({ text, restaurantId }) {
    return apiHelper.post(
      `/comments`,
      { text, restaurantId },
      {
        headers: { Authorization: `Bearer ${getToken()}` },
      }
    )
  },
  deleteComment({ commentId }) {
    return apiHelper.delete(`/comments/${commentId}`)
  },
}
