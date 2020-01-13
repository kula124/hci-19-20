import React, { useContext, useReducer, createContext } from 'react'
import { AUTH, NAVIGATION } from 'constants/actions'
const initialStore = {
  auth: localStorage.getItem('auth'),
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
          inProgress: true
        }
      })
    case AUTH.SUCCESS:
      return ({
        ...state,
        auth: {
          data: { ...localStorage.getItem(action.data.username) },
          inProgress: false
        }
      })
    case AUTH.FAILED:
      return ({
        ...state,
        auth: {
          inProgress: false
        },
        error: action.error
      })
    case AUTH.LOGOUT:
      return ({
        ...state,
        auth: undefined
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
    default:
      return state
  }
}

export const StoreProvider = (props) => {
  const [store, dispatch] = useReducer(mainReducer, initialStore)

  const storeData = { dispatch, store }

  return <StoreContext.Provider value={storeData}
    {...props} />
}

export const useStore = () => useContext(StoreContext)
