import { NAVIGATION, TOAST } from 'constants/actions'

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

export const showToast = data => dispatch => {
  setTimeout(() => dispatch({
    type: TOAST.TOGGLE
  }), data)
  dispatch(
    {
      type: TOAST.TOGGLE
    }
  )
}
