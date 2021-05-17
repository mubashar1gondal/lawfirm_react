import React from 'react'


export const Header = (props) => {
    return (
        <div className="col-md 8 offset-md-0">
            <button type="button" className="btn btn-secondary">Login</button>
            <br /><br /><br /><br />
            <img src="https://picsum.photos/85/75" alt="" Align="left" HSPACE="10" />
            <div className="serif">
                <h2 className="b">NIELSEN, ZEHE</h2>
                <h2 className="a">& ANTAS, P.C.</h2>
            </div>
            <br /> 
            <div className="card-footer">
                <form onClick={(e) => props.user(e)} id="post-form" class="form-inline">
                    <div className="flex-fill mr-2">
                        <input type="text" name="body" id="body" placeholder="Search" className="form-control w-100" />
                    </div>
                    <input  type="submit" value="Search" class="btn btn-primary" />
                </form>
            </div>
            <hr className="spacer" />
            <ul className="list-unstyled list-inline f1">
                <li className="list-inline-item">
                    <a href="" style={{ color: "black" }}>WHO WE ARE</a>
                </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <li className="list-inline-item left">
                    <a href="" style={{ color: "black" }}>WHAT WE DO</a>
                </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <li className="list-inline-item left">
                    <a href="" style={{ color: "black" }}>NEWS & EVENTS</a>
                </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <li className="list-inline-item left">
                    <a href="" style={{ color: "black" }}>WHERE WE WORK</a>
                </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <li className="list-inline-item left under" id="u">
                    <a href="" style={{ color: "black" }}>CONTACT US</a>
                </li>
            </ul>
            <hr className="spacer" />
        </div>
    )
}
