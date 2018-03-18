import React, {PureComponent} from "react";

class Section1Component extends PureComponent {
    render() {
        return(
            <div id="home" className="section section-1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1 col-xs-12 col-sm-10 col-sm-offset-1">
                            <div className="row">
                                <div className="col-xs-12 col-md-6 col-sm-6 hidden-xs">
                                    <img src="/static/hand.jpeg" className="img-responsive image-section-1" />
                                </div>
                                <div className="col-xs-12 col-md-6 col-sm-6 download-btn" style={{marginTop: "18px"}}>
                                    <h1>We're Getting Married.</h1>
                                    <p>Together with our parents. <br /> We, invite you to share in the joy of beginning our new life together.</p>
                                    <span>
                                        Get our invitation (.pdf soft copy) <img src="/static/download.png" width="16" />
                                    </span>
                                </div>
                                <div className="col-xs-8 col-xs-offset-2 visible-xs">
                                    <img src="/static/hand.jpeg" className="img-responsive image-section-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Section1Component;