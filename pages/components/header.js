import React, {PureComponent} from "react";
import zenscroll from "zenscroll";

class HeadComponent extends PureComponent {
    constructor(props) {
        super(props);

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        zenscroll.setup(500, 100);
    }

    handleScroll(to) {
        const toElement = document.getElementById(to);
        zenscroll.to(toElement);
    }
    
    render() {
        return(
            <div id="header">
                <div className="container">
                    <span className="web-title">R & I</span>
                    <div className="visible-xs visible-sm pull-right">
                        <button onClick={() => this.handleScroll("messages")} className="btn btn-primary btn-header">Leave messages</button>
                    </div>
                    <div className="visible-md visible-lg pull-right header-menu">
                        <span onClick={() => this.handleScroll("home")}>Home</span>
                        <span onClick={() => this.handleScroll("wedding")}>The Wedding</span>
                        <span onClick={() => this.handleScroll("bride-groom")}>Bride & Groom</span>
                        <button onClick={() => this.handleScroll("messages")} className="btn btn-primary btn-header">Leave messages</button>
                    </div>
                </div>
                <div className="container visible-xs visible-sm header-menu-mobile header-menu-mobile-outer">
                    <div className="header-menu-mobile-inner">
                        <span onClick={() => this.handleScroll("home")}>Home</span>
                        <span onClick={() => this.handleScroll("wedding")}>The Wedding</span>
                        <span onClick={() => this.handleScroll("bride-groom")}>Bride & Groom</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeadComponent;