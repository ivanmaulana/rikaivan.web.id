import React, {Component} from "react";
import Head from "./components/head";
import Header from "./components/header";
import Section1 from "./components/section-1";
import Section2 from "./components/section-2";
import Section3 from "./components/section-3";
import Footer from "./components/footer";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Head />
                <Header />
                <Section1 />
                <Section2 />
                <Section3 />
                <Footer />
            </div>
        );
    }
}

export default App;