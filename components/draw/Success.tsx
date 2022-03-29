import React from "react";
import { Ponix } from "../../typings/models";

import styles from "./Draw.module.scss";
import Image from "next/image";

interface DrawSuccessProps {
    onRedrawPressed(): void;

    onRedirectPressed(): void;

    ponix: Ponix;
}

interface DrawSuccessState {}

class Success extends React.Component<DrawSuccessProps, DrawSuccessState> {
    render = () => {
        const { ponix } = this.props;
        return (
            <section className={styles.container}>
                <div className={styles.inner}>
                    <div className={styles.title}>
                        <h1>신난다~!</h1>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.ponix}>
                            <div className={styles.image}>
                                <Image
                                    src={`/ponix/${ponix.img}`}
                                    width={"1080px"}
                                    height={"1080px"}
                                    layout={"responsive"}
                                    alt={`${ponix.no} ${ponix.name}`}
                                />
                            </div>
                            <div className={styles.name}>
                                <span>No. {ponix.no} </span>
                                <strong>{ponix.name}</strong>
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <button onClick={this.props.onRedrawPressed}>또 뽑아보자</button>
                            <button className={styles.gray} onClick={this.props.onRedirectPressed}>
                                도감으로
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
}

export default Success;
