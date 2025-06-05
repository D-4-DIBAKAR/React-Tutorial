import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux/user/userActions'
function UserContainer({ userData, fetchUsers }) {
     useEffect(() => {
          fetchUsers()
     }, [])
     console.log(userData);

     return (
          <div className="user-container">
               {
                    userData.loading ? (
                         <h2>Loading ...</h2>
                    ) : userData.error ? (
                         <h2>{userData.error}</h2>
                    ) : (
                         <div>
                              <h2>User List</h2>
                              <div className="user-list">
                                   {
                                        userData.users && userData.users.map(user => (
                                             <div className="user-card" key={user.id}>
                                                  <h3>{user.name}</h3>
                                                  <p><strong>Username:</strong> {user.username}</p>
                                                  <p><strong>Email:</strong> {user.email}</p>
                                                  <p><strong>Phone:</strong> {user.phone}</p>
                                                  <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noreferrer">{user.website}</a></p>

                                                  <div className="section">
                                                       <h4>Address</h4>
                                                       <p>{user.address.suite}, {user.address.street}</p>
                                                       <p>{user.address.city} - {user.address.zipcode}</p>
                                                       <p><strong>Geo:</strong> {user.address.geo.lat}, {user.address.geo.lng}</p>
                                                  </div>

                                                  <div className="section">
                                                       <h4>Company</h4>
                                                       <p><strong>Name:</strong> {user.company.name}</p>
                                                       <p><strong>Catch Phrase:</strong> {user.company.catchPhrase}</p>
                                                       <p><strong>Business:</strong> {user.company.bs}</p>
                                                  </div>
                                                  <hr />
                                             </div>
                                        ))
                                   }
                              </div>
                         </div>
                    )
               }
          </div>
     )
}
const mapStateToProps = state => {
     return {
          userData: state.user
     }
}
const mapDispatchToProps = dispatch => {
     return {
          fetchUsers: () => dispatch(fetchUsers())
     }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)