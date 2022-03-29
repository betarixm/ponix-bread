import type { Ponix } from "../typings/models";

import React from "react";
import Image from "next/image";

interface PonixViewProps {
    ponix: Ponix;
}

interface PonixViewState {}

class PonixView extends React.Component<PonixViewProps, PonixViewState> {
    render = () => {
        const { ponix } = this.props;
        return (
            <div>
                <div>
                    <Image
                        src={`/ponix/${ponix.img}`}
                        alt={`${ponix.no} ${ponix.name}`}
                        layout={"fill"}
                    />
                </div>
                <div>{ponix.no}</div>
                <div>{ponix.name}</div>
            </div>
        );
    };
}

export default PonixView;
