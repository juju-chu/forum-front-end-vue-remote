<template>
  <div class="container py-5">
    <AdminRestaurantForm
      :initial-restaurant="restaurant"
      @after-submit="handleAfterSubmit"
      :is-processing="isProcessing"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from './../components/AdminRestaurantForm'
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'

export default {
  name: 'AdminRestaurantEdit',
  components: {
    AdminRestaurantForm,
  },
  data () {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryId: '',
        tel: '',
        address: '',
        description: '',
        image: '',
        openingHours: '',
      },
      isProcessing: false
    }
  },
  beforeRouteUpdate (to, from, next) {
    const { id } = to.params
    this.fetchRestaurant(id)
    next()
  },
  created () {
    const { id } = this.$route.params
    this.fetchRestaurant(id)
  },
  methods: {
    async handleAfterSubmit (formData) {
      this.isProcessing = true
      try {
        // for (let [name, value] of formData.entries()) {
        //   console.log(name + ': ' + value)
        // }
        const { data } = await adminAPI.restaurants.update({ restaurantId: this.restaurant.id, formData })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.$router.push({ name: 'admin-restaurants' })
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法更新餐廳資料，請稍後再試'
        })
        this.isProcessing = false
      }
    },
    async fetchRestaurant (restaurantId) {
      try {
        const { data } = await adminAPI.restaurants.getDetail({ restaurantId })
        const {
          id,
          name,
          CategoryId: categoryId,
          tel,
          address,
          description,
          image,
          opening_hours: openingHours,
        } = data.restaurant
        this.restaurant = {
          id,
          name,
          categoryId,
          tel,
          address,
          description,
          image,
          openingHours,
        }
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    },
  },
}
</script>
