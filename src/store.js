import ls from 'local-storage'

import React, { useContext, useReducer, createContext } from 'react'
import { AUTH, NAVIGATION, TOAST } from 'constants/actions'

const authData = ls.get('auth')

const initialStore = {
  auth: {
    data: authData,
    inProgress: false,
    status: !!authData
  },
  error: null,
  navigation: []
}

const StoreContext = createContext(initialStore)

const mainReducer = (state, action) => {
  switch (action.type) {
    case AUTH.IN_PROGRESS:
      return ({
        ...state,
        auth: {
          ...state.auth,
          inProgress: true,
          status: false
        },
        showToast: false
      })
    case AUTH.SUCCESS:
      return ({
        ...state,
        auth: {
          data: JSON.parse(ls.get('auth')),
          inProgress: false,
          status: true
        }
      })
    case AUTH.FAILED:
      return ({
        ...state,
        auth: {
          inProgress: false,
          status: false
        },
        error: action.error
      })
    case AUTH.LOGOUT:
      return ({
        ...state,
        auth: {
          status: false
        }
      })
    case NAVIGATION.ADD_VISIBLE:
      return ({
        ...state,
        navigation: [...state.navigation, action.data]
      })
    case NAVIGATION.REMOVE_VISIBLE:
      return ({
        ...state,
        navigation: [...(state.navigation.filter(e => e !== action.data))]
      })
    case TOAST.TOGGLE:
      return ({
        ...state,
        showToast: !state.showToast
      })
    default:
      return state
  }
}

const middleware = dispatch => async action => Promise.resolve(action(dispatch))

export const StoreProvider = (props) => {
  const [store, dispatch] = useReducer(mainReducer, initialStore)

  const middlewareDispatch = middleware(dispatch)

  const storeData = { dispatch: middlewareDispatch, store }

  return <StoreContext.Provider value={storeData}
    {...props} />
}

export const useStore = () => useContext(StoreContext)
