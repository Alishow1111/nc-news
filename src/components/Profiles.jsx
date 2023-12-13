import { useEffect, useState } from 'react'
import { fetchUsers } from './utils/api'
import ProfileCard from './ProfileCard';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';





function Profiles() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUsers()
        .then((usersResponse) => {
            setUsers(usersResponse);
            setLoading(false);
        })
    }, [])

    if (loading){
        return (
            <Spinner animation="border" role="status" style={{margin: 20}}>
              <span className="visually-hidden">Loading...</span>
            </Spinner>
        );        
    }

    return (
        <>
        <h2>Profiles</h2>
        <Row lg={3}>
            {users.map((user) => {
                return <ProfileCard user={user} key={user.username}/>
            })}
        </Row>
        </>
    )
}

export default Profiles