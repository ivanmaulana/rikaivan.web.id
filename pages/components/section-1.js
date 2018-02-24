import React, {PureComponent} from "react";

class Section1Component extends PureComponent {
    render() {
        return(
            <div className="section section-1">
                <div className="container">
                    <h1>We're Getting Married.</h1>
                    <div className="row">
                        <div className="col-xs-12 col-md-6">
                            <p>Together with our parents. <br /> We, invite you to share in the joy of beginning our new life together.</p>
                            <p className="section-1-title">- Rika Rosdiana & Ivan Maulana.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Section1Component;