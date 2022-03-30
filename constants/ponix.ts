import { Ponix } from "../typings/models";

export const PonixList: Ponix[] = [
    {
        id: "test-id-01",
        no: 0,
        name: "test-name-01",
        img: "test.png",
        comment: "test",
    },
    {
        id: "test-id-02",
        no: 1,
        name: "test-name-02",
        img: "test.png",
        comment: "test",
    },
    {
        id: "test-id-03",
        no: 2,
        name: "test-name-03",
        img: "test.png",
        comment: "test",
    },
];

export const EmptyPonix: Ponix = {
    id: "",
    no: -1,
    name: "",
    img: "",
    comment: "",
};
