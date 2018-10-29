import { getUsers } from '../services/restful'
import { getAllUsers } from '../services/graphql'

export default {
  namespace: 'example',

  state: {
    users: [],
    graphUsers: []
  },

  subscriptions: {
    // setup({ dispatch, history }) {
    //   // eslint-disable-line
    //   // dispatch({ type: 'fetch' })
    // }
  },

  effects: {
    *fetch(_, { call, put }) {
      // eslint-disable-line
      const users = yield call(getUsers)
      yield put({ type: 'save', payload: { users } })
    },
    *gqlFetch(_, { call, put }) {
      const query = `
        query queryAllUsers {
            getUsers {
              id
              name
            }
        }
        `
      const users = yield call(getAllUsers, query)
      yield put({ type: 'save', payload: { graphUsers: users } })
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload }
    }
  }
}
