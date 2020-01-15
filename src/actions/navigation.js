import { NAVIGATION } from 'constants/actions'

export const addVisible = data => dispatch => dispatch(
  {
    data,
    type: NAVIGATION.ADD_VISIBLE
  }
)

export const removeVisible = data => dispatch => dispatch(
  {
    data,
    type: NAVIGATION.REMOVE_VISIBLE
  }
)
