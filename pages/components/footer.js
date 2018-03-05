import React, {PureComponent} from "react";

class HeadComponent extends PureComponent {
    render() {
        return(
            <div id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1 col-xs-12 col-sm-10 col-sm-offset-1">
                            <div className="pull-left">
                                Handcrafted by <a href="https://linkedin.com/in/ivanmaulana" target="_blank">Ivan Maulana</a>.
                                <br className="visible-xs" />
                                <br className="visible-xs" />
                            </div>
                            <div className="pull-left visible-xs">
                                Built with <a href="https://github.com/zeit/next.js/" target="_blank">Next.js framework</a>. Inspired by Google site's design.
                            </div>
                            <div className="pull-right hidden-xs">
                                Built with <a href="https://github.com/zeit/next.js/" target="_blank">Next.js framework</a>. Inspired by Google site's design.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeadComponent;