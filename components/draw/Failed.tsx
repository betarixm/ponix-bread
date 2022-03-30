import React from "react";

import styles from "./Draw.module.scss";
import Container from "../Container";

interface DrawFailedProps {
    onRedrawPressed(): void;
}

interface DrawFailedState {}

class Failed extends React.Component<DrawFailedProps, DrawFailedState> {
    render = () => {
        return (
            <Container
                title={"이런..."}
                buttons={[
                    <button onClick={this.props.onRedrawPressed} key={0}>
                        다시 시도해보자
                    </button>,
                ]}
                className={styles.content}
            >
                <p>넙죽단이 포닉씰을 훔쳐가버렸다...</p>
            </Container>
        );
    };
}

export default Failed;
