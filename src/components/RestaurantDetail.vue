<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>{{ restaurant.name }}</h1>
      <p class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </p>
    </div>
    <div class="col-lg-4">
      <img
        class="img-responsive center-block"
        :src="restaurant.image | emptyImage"
        style="width: 250px; margin-bottom: 25px"
      />
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            {{ restaurant.openingHours }}
          </li>
          <li>
            <strong>Tel:</strong>
            {{ restaurant.tel }}
          </li>
          <li>
            <strong>Address:</strong>
            {{ restaurant.address }}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-8">
      <p>{{ restaurant.description }}</p>
      <router-link
        :to="{ name: 'restaurant-dashboard', params: { id: restaurant.id } }"
        class="btn btn-primary btn-border mr-2"
        >Dashboard</router-link
      >

      <button
        type="button"
        class="btn btn-danger btn-border mr-2"
        v-if="restaurant.isFavorited"
        @click.prevent.stop="deleteFavorite(restaurant.id)"
        :disabled="isFavoriteProcessing"
      >
        移除最愛
      </button>
      <button
        type="button"
        class="btn btn-primary btn-border mr-2"
        v-else
        @click.prevent.stop="addFavorite(restaurant.id)"
        :disabled="isFavoriteProcessing"
      >
        加到最愛
      </button>
      <button
        type="button"
        class="btn btn-danger like mr-2"
        v-if="restaurant.isLiked"
        @click.prevent.stop="deleteLike(restaurant.id)"
        :disabled="isLikeProcessing"
      >
        Unlike
      </button>
      <button
        type="button"
        class="btn btn-primary like mr-2"
        v-else
        @click.prevent.stop="addLike(restaurant.id)"
        :disabled="isLikeProcessing"
      >
        Like
      </button>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from './../utils/mixins'
import restaurantsAPI from './../apis/restaurants'
import { Toast } from './../utils/helpers'

export default {
  mixins: [emptyImageFilter],
  props: {
    initialRestaurant: {
      type: Object,
      required: true,
    },
  },
  data () {
    return {
      restaurant: this.initialRestaurant,
      isFavoriteProcessing: false,
      isLikeProcessing: false,
    }
  },
  watch: {
    initialRestaurant (newValue) {
      this.restaurant = {
        ...this.restaurant,
        ...newValue
      }
    }
  },
  methods: {
    async addFavorite (restaurantId) {
      this.isFavoriteProcessing = true
      try {
        const { data } = await restaurantsAPI.addFavorite(restaurantId)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurant.isFavorited = true
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法加入最愛，請稍後再試'
        })
      }
      this.isFavoriteProcessing = false
    },
    async deleteFavorite (restaurantId) {
      this.isFavoriteProcessing = true
      try {
        const { data } = await restaurantsAPI.deleteFavorite(restaurantId)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurant.isFavorited = false
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法移除最愛，請稍後再試'
        })
      }
      this.isFavoriteProcessing = false
    },
    async addLike (restaurantId) {
      this.isLikeProcessing = true
      try {
        const { data } = await restaurantsAPI.addLike(restaurantId)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurant.isLiked = true
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法按讚，請稍後再試'
        })
      }
      this.isLikeProcessing = false
    },
    async deleteLike (restaurantId) {
      this.isLikeProcessing = true
      try {
        const { data } = await restaurantsAPI.deleteLike(restaurantId)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurant.isLiked = false
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法取消讚，請稍後再試'
        })
      }
      this.isLikeProcessing = false
    },
  },
}
</script>

<style scoped>
.col-lg-8 p,
.contact-info-wrap li,
.contact-info-wrap strong {
  font-family: serif;
  font-size: 17px;
}
</style>