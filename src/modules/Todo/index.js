import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const Todo = ({ data }) => {
  return (
    <>
      {data.map(({ key, ...rest }) =>
        <TodoItem key={key}
          {...rest} />
      )}
    </>
  )
}

Todo.propTypes = {
  data: PropTypes.array.isRequired
}

export default Todo
