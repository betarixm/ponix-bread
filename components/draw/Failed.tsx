import React from "react";

interface DrawFailedProps {
    onRedrawPressed(): void;
}

interface DrawFailedState {}

class Failed extends React.Component<DrawFailedProps, DrawFailedState> {
    render = () => {
        return (
            <div>
                <button onClick={this.props.onRedrawPressed}>Redraw</button>
            </div>
        );
    };
}

export default Failed;
