import Search from '../users/Search';
import Users from '../users/Users';

import React, {Fragment} from 'react'

const Home = () => {
  return (
    <Fragment>
      <Search />
      <Users />
    </Fragment>
  )
}

export default Home;