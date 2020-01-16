import React, { useEffect, useState } from 'react'
import { api } from 'helper'

import { useStore } from 'store'

import './profile.module.scss'

const Profile = props => {
  const { store, dispatch } = useStore()
  const [state, setState] = useState({ loading: true })
  const [todos, setTodo] = useState({ loading: true })

  useEffect(() => {
    api.get('users', { id: 1 })
      .then(data => {
        console.log('TCL: data', data.data[0])

        return data
      })
      .then(data => setState({ loading: false, ...data.data[0] }))
  }, [])

  useEffect(() => {
    api.get('todos', { userId: 1 })
      .then(data => {
        console.log('TCL: todo', data.data)

        return data
      })
      .then(data => setTodo({ loading: false, data: data.data }))
  }, [])

  if (state.loading) { return null }

  const { username, email, avatar } = state

  console.log(state)

  return (
    <section styleName='main'>
      <img src={avatar} />
      <div styleName='grid'>
        <span styleName='label'>
          username:
        </span>
        <span>
          {username}
        </span>
        <span styleName='label'>
          email:
        </span>
        <span>
          {email}
        </span>
      </div>
      <section styleName='todo'>

      </section>
    </section>
  )
}

export default Profile
