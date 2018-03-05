import React, {PureComponent} from "react";

class Section5Component extends PureComponent {
    render() {
        return(
            <div className="section section-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1 col-xs-12 col-sm-12">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <h4 className="stories-title text-right">LEAVE US MESSAGES</h4>
                                    <div className="stories-after"></div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <h4 className="input-title">Name</h4>
                                    <input type="text" className="form-control" placeholder="Name " />
                                    <br />
                                    <h4 className="input-title">Messages</h4>
                                    <textarea className="form-control" placeholder="Messages" rows="5" />
                                    <br />
                                    <button className="btn btn-primary btn-block">SEND</button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Section5Component;