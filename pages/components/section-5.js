import React, {PureComponent} from "react";

class Section5Component extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            sender: "",
            messages: "",
            email: "",
            isAttending: true,
            isLoading: false,
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

        console.log(sender, email, messages, isAttending);
    }


    render() {
        const {
            sender,
            email,
            messages,
            isAttending
        } = this.state;

        console.log(sender, email, messages, isAttending);


        return(
            <div className="section section-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1 col-xs-12 col-sm-12">
                            <div className="row">
                                <div className="col-sm-6 col-xs-12">
                                    <form onSubmit={this.handleSubmit}>
                                        <h4 className="stories-title">
                                            LEAVE US MESSAGES
                                        </h4>
                                        <div className="stories-after"></div>
                                        <br />

                                        <h4 className="input-title">Name</h4>
                                        <input
                                            value={sender}
                                            type="text"
                                            className="form-control"
                                            placeholder="Name "
                                            onChange={event => this.handleChangeState("sender", event.target.value)}
                                            required
                                        />
                                        <br />

                                        <h4 className="input-title">Email</h4>
                                        <input
                                            value={email}
                                            type="email"
                                            className="form-control"
                                            placeholder="Name "
                                            onChange={event => this.handleChangeState("email", event.target.value)}
                                        />
                                        <br />

                                        <h4 className="input-title">Messages</h4>
                                        <textarea
                                            value={messages}
                                            className="form-control"
                                            placeholder="Messages"
                                            rows="5"
                                            onChange={event => this.handleChangeState("messages", event.target.value)}
                                            required
                                        />

                                        <br />
                                        <button type="submit" className="btn btn-lg btn-primary btn-block">SEND</button>
                                    </form>
                                </div>
                                <div className="col-sm-6 col-xs-12"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Section5Component;