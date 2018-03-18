import React, {PureComponent} from "react";
// import SmoothScroll from "smooth-scroll";

class HeadComponent extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div id="header">
                <div className="container">
                    <span className="web-title">R & I</span>
                    <div className="visible-xs visible-sm pull-right">
                        <btn className="btn btn-primary btn-header">Leave messages</btn>
                    </div>
                    <div className="visible-md visible-lg pull-right header-menu">
                        <span>Home</span>
                        <span>Get Invitation <img src="/static/download.png" width="16" /></span>
                        <span>Where</span>
                        <span>When</span>
                        <span>Bride & Groom</span>
                        <btn className="btn btn-primary btn-header">Leave messages</btn>
                    </div>
                </div>
                <div className="container visible-xs visible-sm header-menu-mobile header-menu-mobile-outer">
                    <div className="header-menu-mobile-inner">
                        <span>Home</span>
                        <span>Get Invitation <img src="/static/download.png" width="16" /></span>
                        <span>Where</span>
                        <span>When</span>
                        <span>Bride & Groom</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeadComponent;