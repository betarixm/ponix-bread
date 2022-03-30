import type { Ponix } from "../typings/models";

import React from "react";
import { Layout } from "../layout";
import { LOCALSTORAGE_KEY } from "../constants/strings";
import { CollectionDex } from "../components/collection";
import Popup from "../components/Popup";

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
                <Popup title={"🔔"}>화면을 캡쳐해서 이벤트에 참여하세요!</Popup>
                {this.state.ponixList.length > 0 ? (
                    <CollectionDex ponixList={this.state.ponixList} />
                ) : (
                    <></>
                )}
            </Layout>
        );
    };
}

export default Collection;
