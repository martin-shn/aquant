import React from 'react'
import { NavLink } from 'react-router-dom'



export class AppHeader extends React.Component {
    state = {
        isOpen: false,
        isDark: false
    }

    toggleSideMenu = () => {
        console.log('toggle');
        this.setState({ isOpen: !this.state.isOpen })
    }

    toggleDark = () => {
        document.body.classList.toggle('dark')
        this.setState({isDark: !this.state.isDark})
    }

    render() {
        const { isOpen, isDark } = this.state
        return (
            <header className="full main-container-home">

                <div className={`screen ${isOpen ? 'on' : ''}`} onClick={this.toggleSideMenu}></div>

                <div className="header">
                    <span className="logo">LOGO</span>
                    <span className={"theme" + (isDark?' dark':'')} onClick={this.toggleDark}></span>
                    <nav className={isOpen ? 'open' : ''}>
                        <NavLink exact to="/">Home</NavLink>
                        <NavLink to="/favorites">Favorites</NavLink>
                    </nav>
                    <span className={`hamburger ${isOpen ? 'open' : ''}`} onClick={this.toggleSideMenu}></span>
                </div>
            </header>
        )
    }
}




