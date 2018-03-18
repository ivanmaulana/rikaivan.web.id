import React, {PureComponent} from "react";

class Section3Component extends PureComponent {
    render() {
        return(
            <div className="section section-3">
                <div className="row section-3-container">
                    <div className="col-xs-12">
                        <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1">
                            <div className="text-center">
                                <h2 className="title">The Wedding</h2>
                            </div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d1983.196957444171!2d106.7921418!3d-6.2116656!3m2!1i1024!2i768!4f13.1!3m2!1m1!2sMusholla+As+Salaam!5e0!3m2!1sen!2sid!4v1519505752015" frameBorder="0" style={{border: 0}} allowFullScreen></iframe>
                        </div>
                        <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1 wedding-info">
                            <div className="row">
                                <div className="col-xs-12 col-sm-6">
                                    <div className="row mobile-padding">
                                        <p className="wedding-title">Date:</p>
                                        <p className="wedding-detail"><b>Sunday, April 1, 2018</b></p>
                                        <p className="wedding-title">Time:</p>
                                        <p className="wedding-detail"><b>8 AM - 9 PM</b></p>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6">
                                    <div className="row mobile-padding">
                                        <p className="wedding-title">Location:</p>
                                        <p className="wedding-detail"><b>Aula Musholla As Salam</b></p>
                                        <p className="wedding-title">Address:</p>
                                        <p className="wedding-detail"><b>Jl. Kemandoran Pluis No.24, Kebayoran Lama, Jakarta Selatan</b></p>
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

export default Section3Component;