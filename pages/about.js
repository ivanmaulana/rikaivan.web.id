import React, {Component} from "react";
import Link from "next/link";

class App extends Component {
    render() {
        return(
            <div>
                <Link href="/" >
                    Index
                </Link>
                <p>About</p>
            </div>
        );
    }
}

export default App;