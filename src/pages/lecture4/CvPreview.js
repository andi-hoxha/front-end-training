import React,{Component} from 'react';
import './Style/Cv.css';
import LeftSide from "pages/lecture4/LeftSide";
import RightSide from "pages/lecture4/RightSide";

class CvPreview extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const { state = {} } = this.props;

        return (
            <div className="root">
                <LeftSide state={state}/>
                <RightSide state={state}/>
            </div>
        )
    }
}

export default CvPreview
