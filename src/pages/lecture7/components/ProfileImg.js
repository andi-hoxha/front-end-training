import React, {Component} from "react";
import ReactRoundedImage from "react-rounded-image";


class ProfileImg extends Component {

    render() {
        const {state} = this.props
        return (
            <div>
                <ReactRoundedImage image={state.image} roundedSize="0" imageWidth="200" imageHeight="200"/>
            </div>
        )
    }
}

export default ProfileImg