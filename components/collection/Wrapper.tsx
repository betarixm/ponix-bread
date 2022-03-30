import type { Ponix } from "../../typings/models";

import React from "react";

import styles from "./Collection.module.scss";
import Dex from "./Dex";

interface WrapperProps {
    ponixList: Ponix[];
}

interface WrapperState {}

class Wrapper extends React.Component<WrapperProps, WrapperState> {
    render = () => {
        return (
            <section>
                <div className={styles.container}>
                    <div className={styles.inner}>
                        <div className={styles.title}></div>
                        <div className={styles.content}>
                            <Dex ponixList={this.props.ponixList} />
                        </div>
                    </div>
                </div>
            </section>
        );
    };
}

export default Wrapper;
