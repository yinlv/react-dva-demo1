import { superReducer } from '@/utils/reducerUtil'

export default {
  namespace: 'DEMO_HOME',
  state: {
    param: {}
  },
  reducers: {
    param: (state, action) => {
      return superReducer({
        state: state,
        action: action
      })
    }
  }
}
