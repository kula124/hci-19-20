import React, { useEffect, useState } from 'react'

import { api } from 'helper'
import { useStore } from 'store'

import './profile.module.scss'
import Spinner from 'components/Spinner'
import Todo from 'modules/Todo'
import AuthProtector from 'components/AuthProtector'
import { navigate } from 'gatsby'

const Profile = props => {
  const { store } = useStore()
  const [state, setState] = useState({ loading: true })
  const [checkBoxes, setCheckbox] = useState({})
  const [todos, setTodo] = useState({ data: [], loading: true })

  if (store.auth.status) {
    useEffect(() => {
      setState({ loading: true })
      api.get('users', { id: store.auth.data.id })
        .then(data => setState({ ...state, loading: false, ...data.data[0] }))
        .catch(() => setState({ error: 'Failed to fetch' })) // add actual handler maybe kek
    }, [])

    useEffect(() => {
      api.get('todos', { userId: store.auth.data.id })
        .then(data => {
          setTodo({ ...todos, data: data.data, loading: false })

          return data.data
        })
        .then(data => setCheckbox(
          data.reduce((acc, el) => {
            acc[el.urgency] = true

            return acc
          }, {})
        ))
    }, [])

    if (state.loading) {
      return <Spinner styleProp='center' />
    }
  } else if ((typeof window !== `undefined`)) {
    navigate('/')
  }

  const { username, email, avatar } = state

  return (
    <AuthProtector>
      <div styleName='main-container'>
        <header styleName='main'>
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
        </header>
        {!state.loading &&
      <section styleName='todo'>
        <header>
          <h2>{`Todo list for ${state.username}:`}</h2>
          <ul>
            {todos.data.map(el =>
              <li key={el.id}>
                <input checked={checkBoxes[el.urgency]}
                  name={el.urgency}
                  onChange={
                    event => setCheckbox({ ...checkBoxes, [event.target.name]: !checkBoxes[el.urgency] })
                  }
                  type='checkbox' />
                <label htmlFor={el.urgency}>
                  {el.urgency}
                </label>
              </li>
            )}
          </ul>
        </header>
        <ul>
          <Todo data={todos.data.filter(el => !!checkBoxes[el.urgency])}/>
        </ul>
      </section>
        }
      </div>
    </AuthProtector>
  )
}

export default Profile
