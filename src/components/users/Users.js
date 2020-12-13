import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Users = ({users, loading}) => {
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

Users.propTypes = {
	users: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired
}

const userStyles = {
	display: 'grid',
	gridTemplateColumns: 'Repeat(4, 1fr)',
	gridGap: '1rem'
}

export default Users;
