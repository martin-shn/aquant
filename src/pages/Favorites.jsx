import React from "react";
import { connect } from "react-redux";
import { UserList } from "../cmps/userList";
import { loadUsers, addUserToFavorites } from "../store/user.action";

export class _Favorites extends React.Component {

    componentDidMount(){
        this.props.loadUsers()
    }

    toggleFav = (ev,user) => {
        ev.stopPropagation()
        ev.preventDefault()
        this.props.addUserToFavorites(user)
    }
    render() {
    
        return (
            <div>
                <UserList toggleFav={this.toggleFav} users={this.props.users.filter(user => user.isFav)} />

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.userModule.users,
    }
}
const mapDispatchToProps = {
    loadUsers,
    addUserToFavorites
}



export const Favorites = connect(mapStateToProps, mapDispatchToProps)(_Favorites)