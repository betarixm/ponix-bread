import React, { ReactElement } from "react";

import styles from "./Container.module.scss";

interface ContainerProps {
    title: string;
    buttons: ReactElement[];
    className?: string;
    overrideContainerStyle?: string;
    overrideInnerStyle?: string;
}

interface ContainerState {}

class Container extends React.Component<ContainerProps, ContainerState> {
    render = () => {
        return (
            <section className={`${styles.container} ${this.props.overrideContainerStyle}`}>
                <div className={`${styles.inner} ${this.props.overrideInnerStyle}`}>
                    <div className={styles.title}>
                        <h1>{this.props.title}</h1>
                    </div>
                    <div className={this.props.className}>
                        {this.props.children}
                        <div className={styles.buttons}>{this.props.buttons}</div>
                    </div>
                </div>
            </section>
        );
    };
}

export default Container;
