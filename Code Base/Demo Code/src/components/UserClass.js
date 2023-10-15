import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        //API calls
    }

    render() {
        return (
            <div className="user-info">
                <h2>Welcome {this.props.name}</h2>
                <button onClick={() => this.setState({count: this.state.count +1})}>Counter</button>
                <h3>Count: {this.state.count}</h3>
            </div>
        )
    }
}

export default UserClass;