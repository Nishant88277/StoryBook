import React, {Component} from 'react';
import './proctors.css';

class Procotors extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <input type="text" value="No of Students / Proctors"/>
                    <input className="SecondField" type="text" value="20"/>
                </div>
                <div className="row">
                    <table border="1">
                        <thead>
                        <tr>
                            <th colSpan="4">Proctors List</th>
                        </tr>
                        <tr>
                            <th>Sl no</th>
                            <th>Proctors Name</th>
                            <th>Branch</th>
                            <th/>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mr. Suresh</td>
                            <td>Electrical</td>
                            <td><a href="#">-</a></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Mr. Ramesh</td>
                            <td>Electrical</td>
                            <td><a href="#">+</a></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Mr. Satish</td>
                            <td>Electrical</td>
                            <td><a href="#">+</a></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Mr. Raju</td>
                            <td>Electrical</td>
                            <td><a href="#">+</a></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Mr. Ravi</td>
                            <td>CS</td>
                            <td><a href="#">+</a></td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td/>
                            <td/>
                            <td/>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td/>
                            <td/>
                            <td/>
                        </tr>
                        </tbody>
                    </table>
                    <button>Submit</button>
                </div>
            </div>
        );
    }
}

export default Procotors;
