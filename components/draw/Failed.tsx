import React from "react";

import styles from "./Draw.module.scss";

interface DrawFailedProps {
    onRedrawPressed(): void;
}

interface DrawFailedState {}

class Failed extends React.Component<DrawFailedProps, DrawFailedState> {
    render = () => {
        return (
            <section className={styles.container}>
                <div className={styles.inner}>
                    <div className={styles.title}>
                        <h1>이런...</h1>
                    </div>
                    <div className={styles.content}>
                        <p>넙죽단이 포닉씰을 훔쳐가버렸다...</p>
                        <div className={styles.buttons}>
                            <button onClick={this.props.onRedrawPressed}>다시 시도해보자</button>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
}

export default Failed;
