<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.commentsLength }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
import restaurantsAPI from './../apis/restaurants'
import { Toast } from './../utils/helpers'

export default {
  name: 'RestaurantDashboard',
  data () {
    return {
      restaurant: {
        name: '',
        categoryName: '',
        commentsLength: -1,
        viewCounts: -1,
      },
    }
  },
  created () {
    const { id: restaurantId } = this.$route.params
    this.fetchData(restaurantId)
  },
  methods: {
    async fetchData (restaurantId) {
      try {
        const { data } = await restaurantsAPI.getDetail({ restaurantId })
        const { name, viewCounts, Category, Comments } = data.restaurant
        this.restaurant.name = name
        this.restaurant.categoryName = Category ? Category.name : '未分類'
        this.restaurant.commentsLength = Comments.length
        this.restaurant.viewCounts = viewCounts
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法取得資料，請稍後再試'
        })
      }
    },
  },
}
</script>
