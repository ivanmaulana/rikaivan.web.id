import React, {PureComponent} from "react";

function toTitleCase(str) {
    if (str === null || str === undefined) return str;
    str = str.trim();
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

class Section5Component extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            sender: "",
            messages: "",
            email: "",
            isAttending: null,
            isLoading: false,
            isSubmitting: false,
            isSuccess: false
        };

        this.handleChangeState = this.handleChangeState.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeState(name, value) {
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const {
            sender,
            email,
            messages,
            isAttending
        } = this.state;

        this.setState({
            isLoading: true,
            isSubmitting: true
        });

        console.log(sender, email, messages, isAttending);
    }


    render() {
        const {
            sender,
            email,
            messages,
            isAttending,
            isLoading,
            isSubmitting
        } = this.state;

        console.log(sender, email, messages, isAttending);


        return(
            <div className="section section-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-xs-12 col-sm-8 col-sm-offset-2">
                            <div className="row">
                                <div className="col-xs-12">
                                    <h4 className="stories-title">
                                        LEAVE US MESSAGES
                                    </h4>
                                    <div className="stories-after"></div>
                                    <br />

                                    <form onSubmit={this.handleSubmit}>
                                        <h4 className="input-title">Name</h4>
                                        <div className="row">
                                            <div className="col-xs-12">
                                                <input
                                                    value={sender}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Name "
                                                    onChange={event => this.handleChangeState("sender", event.target.value)}
                                                    required
                                                />
                                                <div className="input-tips">
                                                    {sender &&
                                                        <p>Hi, <b>{toTitleCase(sender)}</b>. Thanks for leaving us messages.</p>
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                        <h4 className="input-title">Attending ?</h4>
                                        <div className="row">
                                            <div className="col-xs-12">
                                                <div className="row">
                                                    <div className="col-xs-6" style={{paddingRight: "7px"}}>
                                                        <div
                                                            className={"attending-option text-center" + (isAttending === true ? " active" : "")}
                                                            onClick={() => this.handleChangeState("isAttending", true)}
                                                        >
                                                            YES
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-6" style={{paddingLeft: "7px"}}>
                                                        <div
                                                            className={"attending-option text-center" + (isAttending === false ? " active" : "")}
                                                            onClick={() => this.handleChangeState("isAttending", false)}
                                                        >
                                                            NO
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={{paddingTop: "10px"}}>
                                                    {isAttending != null &&
                                                        <div className="input-tips">
                                                            {isAttending ?
                                                                <span><b>Great!</b> See you there.</span> :
                                                                <span>Hopefully we can meet you there.</span>
                                                            }
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <br />

                                        <h4 className="input-title">Email</h4>
                                        <div className="row">
                                            <div className="col-xs-12">
                                                <input
                                                    value={email}
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Name "
                                                    onChange={event => this.handleChangeState("email", event.target.value)}
                                                />
                                                <div className="input-tips">
                                                    {email &&
                                                        <div className="input-tips">
                                                            We'll send your photo to <b>{email}</b>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        

                                        <h4 className="input-title">Messages</h4>
                                        <div className="row">
                                            <div className="col-xs-12">
                                                <textarea
                                                    value={messages}
                                                    className="form-control"
                                                    placeholder="Messages"
                                                    rows="5"
                                                    onChange={event => this.handleChangeState("messages", event.target.value)}
                                                    required
                                                />
                                                <div className="input-tips">
                                                    {messages != "" &&
                                                        <div>
                                                            {messages.length < 50 ?
                                                                <span>Thanks for the message. But r u sure not to send us a longer one ?</span> :
                                                                <span>Thanks for the message, <b>{sender}</b></span>
                                                            }
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-xs-12">
                                                <button id="btn-submit" type="submit" className="btn btn-lg btn-primary btn-block" disabled={isLoading}>
                                                    {isLoading ?
                                                        "SENDING....." :
                                                        "SEND"
                                                    }
                                                </button>
                                                <div className="input-tips">
                                                    {isSubmitting &&
                                                        <div>
                                                            {isLoading ?
                                                                <span>Saving your messages...</span> :
                                                                <span>Saved. Thanks.</span>
                                                            }
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </form>
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