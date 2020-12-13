import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';
import { useContext } from 'react';

const Users = () => {

	const githubContext = useContext(GithubContext);

	const {loading, users} = githubContext;
	if(loading)
		return <Spinner />
	else {
		return (
			<div style={userStyles}>
					{users.map(user => 
						<UserItem key={user.id} user={user}/>)}
			</div>
		)
	}
}

const userStyles = {
	display: 'grid',
	gridTemplateColumns: 'Repeat(4, 1fr)',
	gridGap: '1rem'
}

export default Users;
