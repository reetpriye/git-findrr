import React from 'react';
import RepoItem from './RepoItem';
import PropTypes from 'prop-types';

const Repos = ({repos}) => {
  return (
    <div>
        {repos.map(repo => <RepoItem repo={repo} key={repo.id} />)}
    </div>
  )
}

Repos.propType = {
  repos: PropTypes.array.isRequired
}

export default Repos;
