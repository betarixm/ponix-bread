import type { Ponix } from "../typings/models";

import React from "react";
import { Layout } from "../layout";
import { LOCALSTORAGE_KEY } from "../constants/strings";
import styles from "../components/draw/Draw.module.scss";
import Image from "next/image";

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
                {this.state.ponixList.map((ponix: Ponix) => (
                    <div className={styles.ponix} key={ponix.id}>
                        <div className={styles.image}>
                            <Image
                                src={`/ponix/${ponix.img}`}
                                width={"1080px"}
                                height={"1080px"}
                                layout={"responsive"}
                                alt={`${ponix.no} ${ponix.name}`}
                            />
                        </div>
                        <div className={styles.no}>{ponix.no}</div>
                        <div className={styles.name}>{ponix.name}</div>
                    </div>
                ))}
            </Layout>
        );
    };
}

export default Collection;
