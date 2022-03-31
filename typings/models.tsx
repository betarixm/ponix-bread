import { StaticImageData } from "next/image";

export interface Ponix {
    id: string;
    no: number;
    name: string;
    img: StaticImageData;
    comment: string;
}
