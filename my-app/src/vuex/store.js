import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: [],
    page: 1,
    limit: 10,
    totalPages: 0
  },
  mutations: {
    SET_POSTS_TO_STATE: (state, posts) => {
      state.totalPages = Math.ceil(30 / state.limit)
      state.posts = posts
    },
    SET_POSTS_TO_STATE_2: (state, response) => {
      state.totalPages = Math.ceil(30 / state.limit)
      state.posts = [...state.posts, ...response.data]
    },
  },
  actions: {
    async GET_POSTS_FROM_API({ commit, state }) {
      try {
        const response = await axios.get('http://localhost:3000/posts', {
          params: {
            _page: state.page,
            _limit: state.limit,
          }
        })
        commit('SET_POSTS_TO_STATE', response.data)
      } catch (e) {
        alert('error')
      }
    },
    async LOAD_MORE_POSTS({ commit, state }) {
      try {
        state.page += 1
        const response = await axios.get('http://localhost:3000/posts', {
          params: {
            _page: state.page,
            _limit: state.limit
          }
        })
        commit('SET_POSTS_TO_STATE_2', response)
      } catch (e) {
        alert('error')
      }
    },
  },
  getters: {
    POSTS(state) {
      return state.posts
    }
  },
})