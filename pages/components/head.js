import React, {PureComponent} from "react";
import Head from "next/head";

class HeadComponent extends PureComponent {
    render() {
        return(
            <Head>
                <title>Rika & Ivan Wedding</title>
                <meta name="description" content="April 1, 2018. Rika & Ivan Wedding." />
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
                <link href="/static/bootstrap.min.css" rel="stylesheet" />
                <link href="/static/styles.css" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab" rel="stylesheet" />
            </Head>
        );
    }
}

export default HeadComponent;