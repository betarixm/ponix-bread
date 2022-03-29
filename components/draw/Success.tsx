import React from "react";
import { Ponix } from "../../typings/models";
import PonixView from "../PonixView";

interface DrawSuccessProps {
    onRedrawPressed(): void;

    onRedirectPressed(): void;

    ponix: Ponix;
}

interface DrawSuccessState {}

class Success extends React.Component<DrawSuccessProps, DrawSuccessState> {
    render = () => {
        return (
            <div>
                <PonixView ponix={this.props.ponix} />
                <button onClick={this.props.onRedrawPressed}>Redraw</button>
                <button onClick={this.props.onRedirectPressed}>Redirect</button>
            </div>
        );
    };
}

export default Success;
