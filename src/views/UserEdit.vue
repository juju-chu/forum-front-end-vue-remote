<template>
  <div class="container py-5">
    <form @submit.prevent.stop="handleSubmit" v-if="!isLoading">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="user.name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img v-if="user.image" :src="user.image" />
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        />
      </div>

      <button type="submit" class="btn btn-primary" :disabled="isProcessing">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import usersAPI from './../apis/users'
import { mapState } from 'vuex'
import { Toast } from './../utils/helpers'

export default {
  name: 'UserEdit',
  data () {
    return {
      user: {
        id: -1,
        name: '',
        image: '',
      },
      isLoading: true,
      isProcessing: false
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  watch: {
    currentUser () {
      this.setUser()
    }
  },
  created () {
    if (this.currentUser.id !== -1) {
      this.setUser()
    }
  },
  methods: {
    async setUser () {
      const { id: userId } = this.$route.params
      if (this.currentUser.id.toString() !== userId.toString()) {
        this.$router.push({ name: 'not-found' })
      }
      try {
        const { data } = await usersAPI.get({ userId })
        this.user = {
          ...this.user,
          id: data.profile.id,
          name: data.profile.name,
          image: data.profile.image,
        }
        this.isLoading = false
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法取得資料，請稍後再試'
        })
      }
    },
    handleFileChange (e) {
      const { files } = e.target
      if (files.length === 0) {
        this.user.image = ''
      } else {
        this.user.image = window.URL.createObjectURL(files[0])
      }
    },
    async handleSubmit (e) {
      const form = e.target
      const formData = new FormData(form)
      // for (let [name, value] of formData.entries()) {
      //   console.log(name + ': ' + value)
      // }
      if (!this.user.name) {
        Toast.fire({
          icon: 'warning',
          title: '請填入姓名'
        })
      }
      try {
        this.isProcessing = true
        const { data } = await usersAPI.update({ userId: this.user.id, formData })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.$router.push({ name: 'user', params: { id: this.user.id } })
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法更新，請稍後再試'
        })
        this.isProcessing = false
      }
    },
  },
}
</script>
