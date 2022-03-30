import React from "react";
import Image from "next/image";
import styles from "./Draw.module.scss";
import Container from "../Container";

interface LoadingProps {}

interface LoadingState {}

class Loading extends React.Component<LoadingProps, LoadingState> {
    render = () => {
        return (
            <Container title={""} buttons={[]} className={styles.content}>
                <div className={styles.bread}>
                    <Image
                        src={"/bread.png"}
                        width={"1080px"}
                        height={"1080px"}
                        layout={"responsive"}
                    />
                </div>
            </Container>
        );
    };
}

export default Loading;
