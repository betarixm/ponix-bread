import type { Ponix } from "../typings/models";

import React from "react";
import Router from "next/router";

import { Layout } from "../layout";
import { DrawFailed, DrawInit, DrawLoading, DrawSuccess } from "../components/draw";
import { EmptyPonix } from "../constants/ponix";
import { LOCALSTORAGE_KEY } from "../constants/strings";
import { isPonixEmpty } from "../utils/ponix";

interface DrawProps {}

interface DrawState {
    stage: "init" | "loading" | "success" | "failed";
    ponix: Ponix;
}

class Draw extends React.Component<DrawProps, DrawState> {
    state: DrawState = {
        stage: "init",
        ponix: EmptyPonix,
    };

    drawCallback = () => {
        this.setState({ stage: "loading" });

        fetch(`/api/ponix/draw`, { method: "POST" })
            .then((res) => res.json())
            .then((p: Ponix) => {
                if (!isPonixEmpty(p)) {
                    this.addPonixToStorage(p);
                }

                setTimeout(() => {
                    this.setState({
                        stage: isPonixEmpty(p) ? "failed" : "success",
                        ponix: p,
                    });
                }, 2 * 1000);
            });
    };

    redirectCallback = () => {
        const res = Router.push("/collection");
    };

    redrawCallback = this.drawCallback;

    addPonixToStorage = (ponix: Ponix) => {
        let items = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY) || "[]");
        localStorage.setItem(
            LOCALSTORAGE_KEY,
            JSON.stringify([ponix.id, ...items.filter((i: string) => i != ponix.id)])
        );
    };

    content: React.FC<{ stage: DrawState["stage"] }> = ({ stage }) => {
        if (stage === "init") {
            return <DrawInit onDrawPressed={this.drawCallback} />;
        } else if (stage === "loading") {
            return <DrawLoading />;
        } else if (stage === "success") {
            return (
                <DrawSuccess
                    ponix={this.state.ponix}
                    onRedrawPressed={this.redrawCallback}
                    onRedirectPressed={this.redirectCallback}
                />
            );
        } else if (stage === "failed") {
            return <DrawFailed onRedrawPressed={this.redrawCallback} />;
        }
        return <></>;
    };

    render = () => {
        return (
            <Layout title={"Draw"}>
                <this.content stage={this.state.stage} />
            </Layout>
        );
    };
}

export default Draw;
