import React from "react";
import { connect } from "react-redux";
import { UserList } from "../cmps/userList";
import { weatherService } from '../service/weather.service';
import { loadUsers, addUserToFavorites } from "../store/user.action";
export class _HomePage extends React.Component {

    state = {
        cityList: []

    }

    componentDidMount() {
        this.props.loadUsers()

        // const currCity = await weatherService.getCompleteText('tel aviv')
        // console.log('currCity', currCity);
        // const weather = await weatherService.getDailyForecasts(currCity[0].Key)
        // console.log('weather', weather);
    }

    handleChange = async ({ target }) => {
        const { value } = target
        const cityList = await weatherService.getCompleteText(value)
        this.setState({ cityList: Object.values(cityList) })
    }

    toggleFav = (ev,user) => {
        ev.stopPropagation()
        ev.preventDefault()
        this.props.addUserToFavorites(user)
    }

    render() {
        const { users } = this.props
        if (!users.length) return (<div>Loading...</div>)
        return (
            <div className=" ">
                {/* <input list='city-list' onChange={this.handleChange} placeholder='City?' value={this.state.city} />
                <datalist id='city-list' onClick={()=>{
                            console.log('rrrr',this.name);
                        }} >
                    {this.state.cityList.map(city => {
                        return <option name={city.Key}  > {city.LocalizedName} </option>
                    })}
                </datalist> */}
                <UserList users={users} toggleFav={this.toggleFav} />
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

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(_HomePage)