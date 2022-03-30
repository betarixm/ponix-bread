import React from "react";

import styles from "./Popup.module.scss";
import Container from "./Container";

interface PopupProps {
    title: string;
}

interface PopupState {
    stage: "show" | "hide";
}

class Popup extends React.Component<PopupProps, PopupState> {
    state: PopupState = {
        stage: "show",
    };

    onPressed = () => {
        this.setState({ stage: "hide" });
    };

    render = () => {
        if (this.state.stage === "hide") {
            return <></>;
        }
        return (
            <div className={styles.wrapper}>
                <Container
                    title={this.props.title}
                    buttons={[
                        <button key={0} onClick={this.onPressed}>
                            확인
                        </button>,
                    ]}
                    className={styles.contents}
                    overrideContainerStyle={styles.container}
                    overrideInnerStyle={styles.inner}
                >
                    {this.props.children}
                </Container>
                <div className={styles.background} />
            </div>
        );
    };
}

export default Popup;
