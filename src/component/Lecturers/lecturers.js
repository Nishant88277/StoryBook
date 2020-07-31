import React, {Component} from 'react';
import './lecturers.css';

class Lecturers extends Component {
    render() {
        return (
            <div style={{width: '50%'}}>
                <div className="row">
                    <input type="text" value="Department"/>
                    <input className="SecondField" type="text" value="Electrical"/>
                </div>
                <div className="row">
                    <table border="1">
                        <thead>
                        <tr>
                            <th colSpan="3">Lecturers List</th>
                        </tr>
                        <tr>
                            <th>Sl no</th>
                            <th>Proctors Name</th>
                            <th/>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mr. Suresh</td>
                                <td><a href="#">+</a></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Mr. Ramesh</td>
                                <td><a href="#">+</a></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Mr. Satish</td>
                                <td><a href="#">+</a></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Mr. Raju</td>
                                <td><a href="#">+</a></td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Mr. Ravi</td>
                                <td><a href="#">+</a></td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Mr. Asha</td>
                                <td><a href="#">+</a></td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td></td>
                                <td/>
                            </tr>
                        </tbody>
                    </table>
                    <button>ADD</button>
                </div>
            </div>
        );
    }
}

export default Lecturers;
