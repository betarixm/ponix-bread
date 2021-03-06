import React from "react";
import { Ponix } from "../../typings/models";

import styles from "./Draw.module.scss";
import containerStyles from "../Container.module.scss";
import Image from "next/image";
import Container from "../Container";

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
                        또 해보자
                    </button>,
                    <button
                        key={1}
                        className={containerStyles.gray}
                        onClick={this.props.onRedirectPressed}
                    >
                        도감으로
                    </button>,
                ]}
                className={styles.content}
            >
                <div className={styles.portrait}>
                    <div className={styles.image}>
                        <Image
                            src={ponix.img}
                            layout={"responsive"}
                            alt={`${ponix.no} ${ponix.name}`}
                        />
                    </div>
                    <p className={styles.name}>
                        <span>No. {ponix.no} </span>
                        <br />
                        <strong>{ponix.name}</strong>(을)를 뽑았다!
                        <br />
                        <span className={styles.comment}>
                            {'"'}
                            {ponix.comment}
                            {'"'}
                        </span>
                    </p>
                </div>
            </Container>
        );
    };
}

export default Success;
