import { NAVIGATION } from 'constants/actions'

export const addVisible = data => (
  {
    data,
    type: NAVIGATION.ADD_VISIBLE
  }
)

export const removeVisible = data => (
  {
    data,
    type: NAVIGATION.REMOVE_VISIBLE
  }
)
