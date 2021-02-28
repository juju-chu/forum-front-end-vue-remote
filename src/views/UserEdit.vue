<template>
  <div class="container py-5">
    <form @submit.prevent.stop="handleSubmit">
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

      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
const dummyUser = {
  id: 1,
  name: 'root',
  image: 'https://i.imgur.com/58ImzMM.png',
}
export default {
  name: 'UserEdit',
  data() {
    return {
      user: {
        id: -1,
        name: '',
        image: '',
      },
    }
  },
  created() {
    const { id } = this.$route.params
    this.fetchUser(id)
  },
  methods: {
    fetchUser(userId) {
      console.log('fetchUser id:', userId)
      this.user = dummyUser
    },
    handleFileChange(e) {
      const { files } = e.target
      if (files.length === 0) {
        this.user.image = ''
      } else {
        this.user.image = window.URL.createObjectURL(files[0])
      }
    },
    handleSubmit(e) {
      const form = e.target
      const formData = new FormData(form)
      // 透過 API 將表單資料送到伺服器
      for (let [name, value] of formData.entries()) {
        console.log(name + ': ' + value)
      }
    },
  },
}
</script>
