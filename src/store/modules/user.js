import axios from 'axios'
import VueNotifications from 'vue-notifications'

const state = {
  user: null
}
const mutations = {

}
const actions = {
  auth ({ commit }, { email, password, repassword }) {
    // console.log('email, password, repassword =', email, password, repassword)
    if (repassword) {
      if (repassword === password || !repassword) {
        console.log(email, password)
        axios.post('/api/auth', {
          email, password
        }).then((res) => {
          console.log(res.data)
        }).catch((err) => {
          console.log(err)
        })
      } else {
        VueNotifications.error({ message: 'Неверные данные!!' })
      }
    }
  }
}

const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}
