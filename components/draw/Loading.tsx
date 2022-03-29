import React from "react";

interface LoadingProps {}

interface LoadingState {}

class Loading extends React.Component<LoadingProps, LoadingState> {
    render = () => {
        return <div>Loading</div>;
    };
}

export default Loading;
