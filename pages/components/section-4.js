import React, {PureComponent} from "react";

class Section4Component extends PureComponent {
    render() {
        return(
            <div id="bride-groom" className="section section-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1 col-xs-12 col-sm-10 col-sm-offset-1">
                            <div className="row">
                                <div className="col-xs-12 col-md-6 col-sm-6">
                                    <div className="colored-container">
                                        <p className="bride">THE BRIDE</p>
                                        <div className="bride-after"></div>
                                        <h3 className="bride-name">Rika Rosdiana</h3>
                                        <p>Daughter of (Alm.) Mr. Rochmani & Mrs. Rohimah</p>
                                        <p className="see-profile"><a href="https://linkedin.com/in/rika-rosdiana-58a6b113a/" target="_blank">See Profile</a></p>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-md-6 col-sm-6">
                                    <div className="colored-container">
                                        <p className="groom">THE GROOM</p>
                                        <div className="groom-after"></div>
                                        <h3 className="groom-name">Ivan Maulana Putra</h3>
                                        <p>Son of Mr. Syahruroji & (Almh.) Mrs. Marhaliah</p>
                                        <p className="see-profile"><a href="https://linkedin.com/in/ivanmaulana" target="_blank">See Profile</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Section4Component;