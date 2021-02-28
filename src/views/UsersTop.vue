<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <div class="col-3" v-for="user in users" :key="user.id">
        <router-link :to="{ name: 'user', params: { id: user.id } }">
          <img :src="user.image | emptyImage" width="140px" height="140px" />
        </router-link>
        <h2>{{ user.name }}</h2>
        <span class="badge badge-secondary"
          >追蹤人數：{{ user.followerCount }}</span
        >
        <p class="mt-3">
          <button
            type="button"
            class="btn btn-danger"
            v-if="user.isFollowed"
            @click.prevent.stop="deleteFollow(user.id)"
          >
            取消追蹤
          </button>
          <button
            type="button"
            class="btn btn-primary"
            v-else
            @click.prevent.stop="addFollow(user.id)"
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import { emptyImageFilter } from './../utils/mixins'
import UsersAPI from './../apis/users'
import { Toast } from './../utils/helpers'

export default {
  name: 'UsersTop',
  mixins: [emptyImageFilter],
  components: {
    NavTabs,
  },
  data () {
    return {
      users: [],
    }
  },
  created () {
    this.fetchUsers()
  },
  methods: {
    async fetchUsers () {
      try {
        const { data } = await UsersAPI.getTopUsers()
        this.users = data.users.map(user => ({
          id: user.id,
          name: user.name,
          image: user.image,
          followerCount: user.FollowerCount,
          isFollowed: user.isFollowed
        }))
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得美食達人，請稍後再試'
        })
        console.log(error)
      }
    },
    async addFollow (userId) {
      try {
        const { data } = await UsersAPI.addFollowing(userId)
        console.log('data', data)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.users = this.users.map(user => {
          if (user.id === userId) {
            return {
              ...user,
              isFollowed: true,
              followerCount: user.followerCount + 1
            }
          }
          return user
        })
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法加入追蹤，請稍後再試'
        })
      }
    },
    async deleteFollow (userId) {
      try {
        const { data } = await UsersAPI.deleteFollowing(userId)
        console.log('data', data)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.users = this.users.map(user => {
          if (user.id === userId) {
            return {
              ...user,
              isFollowed: false,
              followerCount: user.followerCount - 1
            }
          }
          return user
        })
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法加入追蹤，請稍後再試'
        })
      }
    },
  },
}
</script>
