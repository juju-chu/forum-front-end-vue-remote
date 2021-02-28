<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>

    <hr />
    <div
      class="card mb-3"
      style="max-width: 540px; margin: auto"
      v-for="restaurant in restaurants"
      :key="restaurant.id"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img class="card-img" :src="restaurant.image | emptyImage" />
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{ restaurant.name }}
            </h5>
            <span class="badge badge-secondary"
              >收藏數：{{ restaurant.favoriteCount }}</span
            >
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <a href="#" class="btn btn-primary mr-2">Show</a>

            <button
              type="button"
              class="btn btn-danger mr-2"
              v-if="restaurant.isFavorited"
              @click.prevent.stop="deleteFavorite(restaurant.id)"
            >
              移除最愛
            </button>
            <button
              type="button"
              class="btn btn-primary"
              v-else
              @click.prevent.stop="addFavorite(restaurant.id)"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import { emptyImageFilter } from './../utils/mixins'
import RestaurantsAPI from './../apis/restaurants'
import { Toast } from './../utils/helpers'

export default {
  name: 'RestaurantTop',
  mixins: [emptyImageFilter],
  components: {
    NavTabs,
  },
  data () {
    return {
      restaurants: [],
    }
  },
  created () {
    this.fetchRestaurants()
  },
  methods: {
    async fetchRestaurants () {
      try {
        const { data } = await RestaurantsAPI.getTopRestaurants()
        console.log('data', data)
        this.restaurants = data.restaurants.map(restaurant => ({
          id: restaurant.id,
          image: restaurant.image,
          name: restaurant.name,
          favoriteCount: restaurant.FavoriteCount,
          description: restaurant.description,
          isFavorited: restaurant.isFavorited,
        }))
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法取得人氣餐廳，請稍後再試'
        })
      }
    },
    async addFavorite (restaurantId) {
      try {
        const { data } = await RestaurantsAPI.addFavorite(restaurantId)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurants = this.restaurants.map(restaurant => {
          if (restaurant.id === restaurantId) {
            return restaurant = {
              ...restaurant,
              isFavorited: true,
            }
          }
          return restaurant
        })
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法加入最愛，請稍後再試'
        })
      }
    },
    async deleteFavorite (restaurantId) {
      try {
        const { data } = await RestaurantsAPI.deleteFavorite(restaurantId)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurants = this.restaurants.map(restaurant => {
          if (restaurant.id === restaurantId) {
            return restaurant = {
              ...restaurant,
              isFavorited: false,
            }
          }
          return restaurant
        })
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法取消最愛，請稍後再試'
        })
      }
    },
  },
}
</script>
