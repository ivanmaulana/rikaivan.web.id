import React, {PureComponent} from "react";

class Section1Component extends PureComponent {
    render() {
        return(
            <div className="section section-1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1 col-xs-12 col-sm-10 col-sm-offset-1">
                            <h1>We're Getting Married.</h1>
                            <div className="row">
                                <div className="col-xs-12 col-md-6 col-sm-6">
                                    <p>Together with our parents. <br /> We, invite you to share in the joy of beginning our new life together.</p>
                                    <p className="section-1-title">- Rika Rosdiana & Ivan Maulana.</p>
                                </div>
                                <div className="col-xs-12 col-md-6 col-sm-6 text-center download-btn" style={{marginTop: "18px"}}>
                                    <span>
                                        Get our invitation (.pdf soft copy) <img src="/static/download.png" width="16" />
                                    </span>
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