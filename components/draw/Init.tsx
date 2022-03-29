import React from "react";

interface InitProps {
    onDrawPressed(): void;
}

interface InitState {}

class Init extends React.Component<InitProps, InitState> {
    render = () => {
        return (
            <div>
                <button onClick={this.props.onDrawPressed}>Draw</button>
            </div>
        );
    };
}

export default Init;
