<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">
            {{ user.id }}
          </th>
          <td>{{ user.email }}</td>
          <td v-if="user.isAdmin">admin</td>
          <td v-else>user</td>
          <td>
            <button
              type="button"
              class="btn btn-link"
              @click.stop.prevent="toggleUserRole(user.id)"
            >
              <span v-show="user.isAdmin && user.id !== currentUser.id"
                >set as user</span
              >
              <span v-show="!user.isAdmin">set as admin</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from './../components/AdminNav'
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'

const dummyUser = {
  currentUser: {
    id: 1,
    name: '蠔嗲油',
    email: 'root@example.com',
    password: '$2a$10$jBS/Y4.hceDXkEC5y9ZGne81Y7i5wNwNcy6wAKjNdBykCzlEfWmLm',
    isAdmin: true,
    image: 'https://i.imgur.com/3keAGHT.jpeg',
    createdAt: '2020-12-15T06:35:43.000Z',
    updatedAt: '2021-02-22T16:41:47.000Z',
  },
  isAuthenticated: true,
}

export default {
  name: 'AdminUsers',
  components: {
    AdminNav,
  },
  data () {
    return {
      users: [],
      currentUser: {},
    }
  },
  created () {
    this.fetchUser()
  },
  methods: {
    async fetchUser () {
      try {
        const { data } = await adminAPI.users.get()
        this.users = data.users.map((user) => {
          if (user.id === this.currentUser.id) {
            return {
              ...user,
              isAdmin: true,
            }
          } else {
            return {
              ...user,
              isAdmin: false,
            }
          }
        })
      } catch (error) {
        console.log
        Toast.fire({
          icon: 'error',
          title: '無法取得使用者資料，請稍後再試'
        })
      }
      this.currentUser = dummyUser.currentUser

    },
    toggleUserRole (userId) {
      this.users = this.users.map((user) => {
        if (userId === user.id) {
          return {
            ...user,
            isAdmin: !user.isAdmin,
          }
        }
        return user
      })
    },
  },
}
</script>
