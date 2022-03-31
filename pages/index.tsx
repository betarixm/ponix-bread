import React from "react";
import Router from "next/router";
import Image from "next/image";
import { Layout } from "../layout";

import styles from "../styles/Home.module.scss";
import ball from "../public/pokeball.webp";

interface HomeProps {}

interface HomeState {}

class Home extends React.Component<HomeProps, HomeState> {
    redirectCallback = () => {
        const result = Router.push("/draw");
    };

    render = () => {
        return (
            <Layout title={"Home"}>
                <section className={styles.container}>
                    <div className={styles.inner}>
                        <div className={styles.title}>
                            <h1>포닉스들 중</h1>
                            <h1>하나를 데려가렴</h1>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.image}>
                                <Image src={ball} layout={"responsive"} />
                            </div>
                            <button onClick={this.redirectCallback}>포닉씰 뽑으러 가기</button>
                        </div>
                    </div>
                </section>
            </Layout>
        );
    };
}

export default Home;
