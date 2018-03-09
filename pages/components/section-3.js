import React, {PureComponent} from "react";

class Section3Component extends PureComponent {
    render() {
        return(
            <div className="section-3">
                <div className="col-xs-12 col-sm-6 wedding-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d1983.196957444171!2d106.7921418!3d-6.2116656!3m2!1i1024!2i768!4f13.1!3m2!1m1!2sMusholla+As+Salaam!5e0!3m2!1sen!2sid!4v1519505752015" frameBorder="0" style={{border: 0}} allowFullScreen></iframe>
                </div>
                <div className="col-xs-12 col-sm-6 wedding-info">
                    <h3 className="title">The Wedding</h3>
                    <p className="wedding-title">Location:</p>
                    <p className="wedding-detail">Aula Musholla As Salam</p>
                    <p className="wedding-title">Address:</p>
                    <p className="wedding-detail">Jl. Kemandoran Pluis No.24, Kebayoran Lama, Jakarta Selatan</p>
                    <p className="wedding-title">Date:</p>
                    <p className="wedding-detail">Sunday, April 1, 2018</p>
                    <p className="wedding-title">Time:</p>
                    <p className="wedding-detail">8 AM - 9 PM</p>
                </div>
            </div>
        );
    }
}

export default Section3Component;