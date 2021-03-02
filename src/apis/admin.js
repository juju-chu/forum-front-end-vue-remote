import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  categories: {
    get() {
      return apiHelper.get('/admin/categories')
    },
    create(data) {
      return apiHelper.post(`/admin/categories`, data)
    },
    update({ categoryId, name }) {
      return apiHelper.put(
        `/admin/categories/${categoryId}`,
        { categoryId, name },
        {
          headers: { Authorization: `Bearer ${getToken()}` },
        }
      )
    },
    delete({ categoryId }) {
      return apiHelper.delete(`/admin/categories/${categoryId}`)
    },
  },
  restaurants: {
    create({ formData }) {
      return apiHelper.post(`/admin/restaurants`, formData)
    },
    get() {
      return apiHelper.get('/admin/restaurants')
    },
    delete({ restaurantId }) {
      return apiHelper.delete(`/admin/restaurants/${restaurantId}`)
    },
    getDetail({ restaurantId }) {
      return apiHelper.get(`/admin/restaurants/${restaurantId}`)
    },
    update({ restaurantId, formData }) {
      return apiHelper.put(`/admin/restaurants/${restaurantId}`, formData)
    },
  },
  users: {
    get() {
      return apiHelper.get('/admin/users')
    },
    update({ userId, isAdmin }) {
      return apiHelper.put(`/admin/users/${userId}`, isAdmin)
    },
  },
}
