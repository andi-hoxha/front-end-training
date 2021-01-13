import React, {Component} from "react";
import ReactRoundedImage from "react-rounded-image";


class ProfileImg extends Component {

    render() {
        const {state} = this.props
        return (
            <div>
                <ReactRoundedImage image={state.image} roundedSize="0" imageWidth="180" imageHeight="180"/>
            </div>
        )
    }
}

export default ProfileImg