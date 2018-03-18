import React, {PureComponent} from "react";

class Section2Component extends PureComponent {
    render() {
        return(
            <div className="section section-2">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 col-xs-12 col-sm-8 col-sm-offset-2">
                            <p className="quran-text">“And among his signs is this, that He created for you mates from among your yourselves that you may dwell in tranquillity with them. <br className="visible-xs" /> <br className="visible-xs" /> And He has put love and mercy between your hearts: verily in that are signs for those who reflect.”</p>
                            <p className="quran-surah">Surah ar Rum: 71</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Section2Component;