<template>
  <div class="container py-5">
    <!-- UserProfileCard -->
    <UserProfileCard
      :user="user"
      :is-current-user="currentUser.id === user.id"
      :initial-is-followed="isFollowed"
    />

    <div class="row">
      <div class="col-md-4">
        <!-- UserFollowingsCard -->
        <UserFollowingsCard :followings="followings" />

        <!-- UserFollowersCard -->
        <UserFollowersCard :followers="followers" />
      </div>
      <div class="col-md-8">
        <!-- UserCommentsCard -->
        <UserCommentsCard :comments="comments" />

        <!-- UserFavoritedRestaurantsCard -->
        <UserFavoritedRestaurantsCard
          :favorited-restaurants="favoritedRestaurants"
        />
      </div>
    </div>
  </div>
</template>

<script>
import UserProfileCard from './../components/UserProfileCard'
import UserFollowingsCard from './../components/UserFollowingsCard'
import UserFollowersCard from './../components/UserFollowersCard'
import UserCommentsCard from './../components/UserCommentsCard'
import UserFavoritedRestaurantsCard from './../components/UserFavoritedRestaurantsCard'
import usersAPI from './../apis/users'
import { mapState } from 'vuex'
import { Toast } from './../utils/helpers'

export default {
  name: 'User',
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
  },
  data () {
    return {
      user: {
        id: -1,
        image: '',
        name: '',
        email: '',
        commentsLength: -1,
        favoritedRestaurantsLength: -1,
        followingsLength: -1,
        followersLength: -1,
      },
      followings: [],
      followers: [],
      comments: [],
      favoritedRestaurants: [],
      isFollowed: false,
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  created () {
    const { id: userId } = this.$route.params
    this.fetchData(userId)
  },
  beforeRouteUpdate (to, from, next) {
    const { id: userId } = to.params
    this.fetchData(userId)
    next()
  },
  methods: {
    async fetchData (userId) {
      try {
        const { data } = await usersAPI.get({ userId })
        const {
          id,
          image,
          name,
          email,
          Comments,
          FavoritedRestaurants,
          Followers,
          Followings,
        } = data.profile
        this.user = {
          id,
          name,
          image,
          email,
          commentsLength: Comments.length,
          favoritedRestaurantsLength: FavoritedRestaurants.length,
          followingsLength: Followings.length,
          followersLength: Followers.length,
        }
        this.followings = data.profile.Followings
        this.followers = data.profile.Followers
        this.comments = data.profile.Comments
        this.favoritedRestaurants = data.profile.FavoritedRestaurants
        this.isFollowed = data.isFollowed
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
