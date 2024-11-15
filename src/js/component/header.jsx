import React from "react";


const Header = function(){
    return(
        
        <div className="jumbotron bg-light ps-3 py-5 mx-5">
            <h1 className="display-4 fw-bold">A Warm Welcome!</h1>
            <p className="lead">
                This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
                This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <p className="lead">
                <a className="btn btn-primary btn-lg my-2" href="#" role="button">Call to action!</a>
            </p>
        </div>
    );
}

export default Header;