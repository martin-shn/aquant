import { withRouter } from "react-router"
import { Link } from "react-router-dom"

function _UserPreview({ user, toggleFav, match }) {
    let { path } = match
    path = path.substr(1)
    return (
        <Link to={`/${user.id}`} >
            <div className="user-preview">
                <img src={user.imgUrl} />
                <div>

                    <h3>{user.name}</h3>
                    <h3>{user.username}</h3>
                    <h3>{user.phone}</h3>
                    <h3>{user.address.city}</h3>
                    <h3>{user.website}</h3>
                    <button onClick={(event) => { toggleFav(event, user) }}>{path === 'favorites'?'Remove':'Add To Fav'}</button> 
                    
                    
                </div>
            </div>
        </Link>
    )
}

export const UserPreview = withRouter(_UserPreview)