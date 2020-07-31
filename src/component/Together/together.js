import React, {Component} from 'react';
import Details from "../Details/details";
import Lecturers from "../Lecturers/lecturers";
import Procotors from "../proctors/procotors";

class Together extends Component {
    render() {
        return (
            <div>
                <Details/>
                <div className="row">
                    <Lecturers/>
                    <div style={{marginLeft: "20px"}}>
                        <Procotors/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Together;
