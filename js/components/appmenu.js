import React from 'react'
import ReactDOM from 'react-dom'
import { Menu } from 'semantic-ui-react'
export default class AppMenu extends React.Component {
    constructor(props) {
        // call the parent constructor and initialize object state
        super(props);
        this.state = {
            activeItem: 'view-screenshot',
            callback: props.callback
        }

        // ensure we can access 'this' in the callback
        this.handleItemClick = this.handleItemClick.bind(this);
    }
    handleItemClick(e, { name }) {
        // handle any changes to the object state
        this.setState(prevState => ({
            activeItem: name, 
            callback: prevState.callback
        }))
        this.state.callback(name)
    }
    render() {
        const { activeItem } = this.state
        return (
            <Menu>
                <Menu.Item
                name='view-screenshot'
                active={activeItem === 'view-screenshot'}
                onClick={this.handleItemClick}
                >
                Screenshot
                </Menu.Item>

                <Menu.Item
                name='view-screenrecord'
                active={activeItem === 'view-screenrecord'}
                onClick={this.handleItemClick}
                >
                Screen Record
                </Menu.Item>

                <Menu.Item
                name='view-about'
                active={activeItem === 'view-about'}
                onClick={this.handleItemClick}
                >
                About
                </Menu.Item>
            </Menu>
        )
    }
}