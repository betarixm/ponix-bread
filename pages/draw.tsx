import type { Ponix } from "../typings/models";

import React from "react";

import { GetServerSideProps } from "next";
import { internalHandler as apiDraw } from "./api/ponix/draw";

import { Layout } from "../layout";

import { LOCALSTORAGE_KEY } from "../constants/strings";
import PonixView from "../components/PonixView";

interface DrawProps {
    ponix: Ponix;
}

interface DrawState {}

class Draw extends React.Component<DrawProps, DrawState> {
    addPonixToStorage = (ponix: Ponix) => {
        let items = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY) || "[]");
        localStorage.setItem(
            LOCALSTORAGE_KEY,
            JSON.stringify([ponix.id, ...items.filter((i: string) => i != ponix.id)])
        );
    };

    isDrawSuccess = (ponix: Ponix) => {
        return ponix.no !== -1;
    };

    componentDidMount = () => {
        if (this.isDrawSuccess(this.props.ponix)) {
            this.addPonixToStorage(this.props.ponix);
        }
    };

    render = () => {
        const { ponix } = this.props;

        const success = (
            <>
                <PonixView ponix={ponix} />
            </>
        );

        const failed = <>Failed!</>;

        return <Layout title={"Draw"}>{this.isDrawSuccess(ponix) ? success : failed}</Layout>;
    };
}

export const getServerSideProps: GetServerSideProps<DrawProps> = async (context) => {
    return {
        props: {
            ponix: apiDraw(),
        },
    };
};

export default Draw;
