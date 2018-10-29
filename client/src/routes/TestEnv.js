import React from 'react'
import { connect } from 'dva'
import styles from './TestEnv.less'

const TestEnv = ({ users, graphUsers, gqlFetch, fetch }) => (
  <div className={styles.container}>
    <h1 className={styles.title}>Welcome To Corner!</h1>
    <div>
      <button
        onClick={fetch}
        style={{
          color: '#000000',
          fontSize: 18,
          marginTop: 32,
          cursor: 'pointer'
        }}
      >
        press here to Rest
      </button>
      <code>{JSON.stringify(users)}</code>
    </div>
    <div>
      <button
        onClick={gqlFetch}
        style={{
          color: '#000000',
          fontSize: 18,
          marginTop: 32,
          cursor: 'pointer'
        }}
      >
        press here to graph
      </button>
      <code>{JSON.stringify(graphUsers)}</code>
    </div>
    <ul className={styles.list}>
      <li>
        <a href="/graphql/endpoint2">Run GraphiQl</a>
      </li>
    </ul>
  </div>
)

TestEnv.propTypes = {}

const mapStateToProps = state => ({
  users: state.example.users,
  graphUsers: state.example.graphUsers
})

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch({ type: 'example/fetch' }),
  gqlFetch: () => dispatch({ type: 'example/gqlFetch' })
})

export default connect(mapStateToProps, mapDispatchToProps)(TestEnv)
