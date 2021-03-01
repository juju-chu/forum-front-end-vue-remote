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
              @click.stop.prevent="toggleUserRole(user.id, user.isAdmin)"
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
import { mapState } from 'vuex'

export default {
  name: 'AdminUsers',
  components: {
    AdminNav,
  },
  data () {
    return {
      users: [],
    }
  },
  created () {
    this.fetchUser()
  },
  computed: {
    ...mapState(['currentUser'])
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
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法取得使用者資料，請稍後再試'
        })
      }

    },
    async toggleUserRole (userId, userIsAdmin) {
      try {
        const { data } = await adminAPI.users.update({ userId, isAdmin: !userIsAdmin })
        console.log('data: ', data)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法修改，請稍後再試'
        })
      }
      console.log('hi')
      this.users = this.users.map((user) => {
        if (userId === user.id) {
          // try {
          //   const { data } = await adminAPI.users.update({ userId, isAdmin: user.isAdmin })
          //   console.log('data: ', data)
          //   if (data.status !== 'success') {
          //     throw new Error(data.message)
          //   }
          // } catch (error) {
          //   console.log(error)
          //   Toast.fire({
          //     icon: 'error',
          //     title: '無法修改，請稍後再試'
          //   })
          // }
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
