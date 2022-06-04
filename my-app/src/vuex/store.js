import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: [],
  },
  mutations: {
    SET_POSTS_TO_STATE: (state, posts) => {
      state.posts = posts
    }
  },
  actions: {
    GET_POSTS_FROM_API({ commit }) {
      return axios.get('http://localhost:3000/posts')
        .then((posts) => {
          commit('SET_POSTS_TO_STATE', posts.data)
          return posts
        })
        .catch((error) => {
          console.log(error)
          return error
        })
    }
  },
  getters: {
    POSTS(state) {
      return state.posts
    }
  },
})