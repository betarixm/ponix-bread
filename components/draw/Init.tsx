import React from "react";

import styles from "./Draw.module.scss";
import Image from "next/image";

interface InitProps {
    onDrawPressed(): void;
}

interface InitState {}

class Init extends React.Component<InitProps, InitState> {
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
                        <div className={styles.buttons}>
                            <button onClick={this.props.onDrawPressed}>포장을 뜯어보자</button>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
}

export default Init;
