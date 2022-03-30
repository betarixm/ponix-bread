import React from "react";
import Image from "next/image";
import styles from "./Draw.module.scss";

interface LoadingProps {}

interface LoadingState {}

class Loading extends React.Component<LoadingProps, LoadingState> {
    render = () => {
        return (
            <section className={styles.container}>
                <div className={styles.inner}>
                    <div className={styles.content}>
                        <div className={styles.bread}>
                            <Image
                                src={"/bread.png"}
                                width={"1080px"}
                                height={"1080px"}
                                layout={"responsive"}
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    };
}

export default Loading;
