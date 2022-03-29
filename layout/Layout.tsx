import React from "react";
import Head from "next/head";

import { Header, Footer } from "./index";
import { SITE_NAME } from "../constants/strings";

interface LayoutProps {
    title: string;
}

interface LayoutState {}

class Layout extends React.Component<LayoutProps, LayoutState> {
    render = () => {
        return (
            <div>
                <Head>
                    <title>
                        {this.props.title} — {SITE_NAME}
                    </title>
                </Head>
                <Header />
                <div>{this.props.children}</div>
                <Footer />
            </div>
        );
    };
}

export default Layout;
