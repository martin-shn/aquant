import React from "react";
import { userService } from "../service/user.service";

export class UserDetails extends React.Component {

    state = {
        user: null
    }

    componentDidMount() {
        this.loadUser()
    }

    loadUser = async () => {
        const id = this.props.match.params.userId
        const user = await userService.getUserById(+id)
        if (!user) this.props.history.push('/')
        else this.setState({ user })

    }

    render() {
        const { user } = this.state
        if (!user) return <div>Loading...</div>
        return (


            <div className="user-details">
                <img src={user.imgUrl} />
                <div >
                    <h3>{user.name}</h3>
                    <h3>{user.username}</h3>
                    <h3>{user.phone}</h3>
                    <h3>{user.address.city}</h3>
                    <h3>{user.website}</h3>
                    <button onClick={() => {
                        this.props.history.push('/')
                    }}>Back</button>
                </div>
            </div>
        )
    }

}