import type { Ponix } from "../typings/models";

import React from "react";
import { Layout } from "../layout";
import { LOCALSTORAGE_KEY } from "../constants/strings";
import PonixView from "../components/PonixView";

interface CollectionProps {}

interface CollectionState {
    isLoading: boolean;
    ponixList: Ponix[];
}

class Collection extends React.Component<CollectionProps, CollectionState> {
    state: CollectionState = {
        isLoading: true,
        ponixList: [],
    };

    async componentDidMount() {
        const ponixList = (
            await Promise.all(
                JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY) || "[]").map((i: string) => {
                    return fetch(`/api/ponix/${i}`, { method: "POST" }).then((res) => res.json());
                })
            )
        ).filter((p: Ponix) => p.no !== -1);

        this.setState({
            isLoading: false,
            ponixList: ponixList,
        });
    }

    render = () => {
        return (
            <Layout title={"Collection"}>
                {this.state.ponixList.map((p: Ponix) => (
                    <PonixView ponix={p} key={p.id} />
                ))}
            </Layout>
        );
    };
}

export default Collection;
