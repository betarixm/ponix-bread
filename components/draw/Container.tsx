import React, { ReactElement } from "react";

import styles from "./Draw.module.scss";

interface ContainerProps {
    title: string;
    buttons: ReactElement[];
}

interface ContainerState {}

class Container extends React.Component<ContainerProps, ContainerState> {
    render = () => {
        return (
            <section className={styles.container}>
                <div className={styles.inner}>
                    <div className={styles.title}>
                        <h1>{this.props.title}</h1>
                    </div>
                    <div className={styles.content}>
                        {this.props.children}
                        <div className={styles.buttons}>{this.props.buttons}</div>
                    </div>
                </div>
            </section>
        );
    };
}

export default Container;
