import React from "react";

import styles from "./Draw.module.scss";
import Image from "next/image";
import Container from "../Container";

import bread from "../../public/bread.png";

interface InitProps {
    onDrawPressed(): void;
}

interface InitState {}

class Init extends React.Component<InitProps, InitState> {
    render = () => {
        return (
            <Container
                title={""}
                buttons={[
                    <button onClick={this.props.onDrawPressed} key={0}>
                        포장을 뜯어보자
                    </button>,
                ]}
                className={styles.content}
            >
                <div className={styles.bread}>
                    <Image src={bread} width={"1080px"} height={"1080px"} layout={"responsive"} />
                </div>
            </Container>
        );
    };
}

export default Init;
