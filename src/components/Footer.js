import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <hr className="spacer" />
                    <ul className="list-unstyled list-inline c1 text-center">
                        <li className="list-inline-item ">
                            <a href="" style={{ color: "black" }}>WHO WE ARE</a>
                        </li>
                        <li className="list-inline-item left">
                            <a href="" style={{ color: "black" }}>WHAT WE DO</a>
                        </li>
                        <li className="list-inline-item left">
                            <a href="" style={{ color: "black" }}>NEWS & EVENTS</a>
                        </li>
                        <li className="list-inline-item left">
                            <a href="" style={{ color: "black" }}>WHERE WE WORK</a>
                        </li>
                        <li className="list-inline-item left">
                            <a href="" style={{ color: "black" }}>CONTACT US</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
