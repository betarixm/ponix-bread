import React from "react";
import { Ponix } from "../../typings/models";

import styles from "./Draw.module.scss";
import Image from "next/image";
import Container from "./Container";

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
            <Container
                title={"신난다~!"}
                buttons={[
                    <button key={0} onClick={this.props.onRedrawPressed}>
                        또 뽑아보자
                    </button>,
                    <button key={1} className={styles.gray} onClick={this.props.onRedirectPressed}>
                        도감으로
                    </button>,
                ]}
            >
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
            </Container>
        );
    };
}

export default Success;
