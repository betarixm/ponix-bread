import React from "react";
import { Layout } from "../layout";

interface HomeProps {}

interface HomeState {}

class Home extends React.Component<HomeProps, HomeState> {
    render = () => {
        return <Layout title={"Home"}>Welcome!</Layout>;
    };
}

export default Home;
