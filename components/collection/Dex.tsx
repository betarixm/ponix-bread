import type { Ponix } from "../../typings/models";

import React from "react";
import Image from "next/image";

import styles from "./Collection.module.scss";
import Container from "../Container";
import { EmptyPonix } from "../../constants/ponix";
import { isPonixEmpty } from "../../utils/ponix";

import device from "/public/device.png";

interface DexProps {
    ponixList: Ponix[];
}

interface DexState {
    index: number;
}

class Dex extends React.Component<DexProps, DexState> {
    state: DexState = {
        index: 0,
    };

    toIndex = (rawIdx: number): number => {
        const length = this.props.ponixList.length;

        return ((rawIdx % length) + length) % length;
    };

    onNextPressed = () => {
        this.setState({ index: this.toIndex(this.state.index + 1) });
    };

    onPrevPressed = () => {
        this.setState({ index: this.toIndex(this.state.index + 1) });
    };

    render = () => {
        const ponix: Ponix =
            this.props.ponixList.length > 0 ? this.props.ponixList[this.state.index] : EmptyPonix;

        return (
            <Container title={""} buttons={[]} className={styles.content}>
                <div className={styles.dex}>
                    <div className={styles.background}>
                        {isPonixEmpty(ponix) ? (
                            <></>
                        ) : (
                            <div className={styles.overlay}>
                                <div className={styles.portrait}>
                                    <Image
                                        src={ponix.img}
                                        layout={"responsive"}
                                        alt={`${ponix.no} ${ponix.name}`}
                                    />
                                </div>
                                <div className={styles.info}>
                                    <span>
                                        {this.state.index + 1} / {this.props.ponixList.length}
                                    </span>
                                    <div className={styles.name}>
                                        <strong>{ponix.name}</strong>
                                    </div>
                                </div>
                                <div className={styles.buttons}>
                                    <button onClick={this.onPrevPressed}>＜</button>
                                    <button onClick={this.onNextPressed}>＞</button>
                                </div>
                            </div>
                        )}

                        <Image src={device} layout={"responsive"} alt={"도감 배경"} />
                    </div>
                </div>
            </Container>
        );
    };
}

export default Dex;
