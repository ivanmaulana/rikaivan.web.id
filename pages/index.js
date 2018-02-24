import React, {Component} from "react";
import Link from "next/link";

import Head from "./components/head";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    handleAdd = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return(
            <div>
                <Head />
                Index
                <p>
                    <Link href="about">
                        about
                    </Link>
                </p>
                <button onClick={this.handleAdd}>Add</button>
                <p>count : {this.state.count}</p>
            </div>
        )
    }
}

export default App;