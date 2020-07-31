import React, {Component} from 'react';
import './details.css';

class Details extends Component {
    render() {
        return (
            <div className="detailsWrap">
                <div className="detailsLeft">
                    <div className="detailsRow">
                        <p className="left">Subject Code</p>
                        <p className="right">15ME64</p>
                    </div>
                    <div className="detailsRow">
                        <p className="left">Courses</p>
                        <p className="right">BE</p>
                    </div>
                    <div className="detailsRow">
                        <p className="left">Department</p>
                        <p className="right">Mechanical</p>
                    </div>
                    <div className="detailsRow">
                        <p className="left">Semester</p>
                        <p className="right">6</p>
                    </div>
                </div>
                <div className="detailsRight">
                    <div className="detailsRow">
                        <p className="left">Subject</p>
                        <p className="right">Design of Machine Elements-ll</p>
                    </div>
                    <div className="detailsRow">
                        <p className="left">Exam Date and Time</p>
                        <p className="right">July 6, 2020 9:30 AM</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Details;
