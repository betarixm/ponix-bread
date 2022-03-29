import type { NextApiRequest, NextApiResponse } from "next";
import type { Ponix } from "../../../typings/models";
import type { ApiError } from "../../../typings/errors";

import { EmptyPonix, PonixList } from "../../../constants/ponix";
import { DRAW_FAIL_RATE } from "../../../constants/variables";

export const internalHandler: () => Ponix = () => {
    return Math.random() >= DRAW_FAIL_RATE
        ? PonixList[Math.floor(PonixList.length * Math.random())]
        : EmptyPonix;
};

export const handler = (req: NextApiRequest, res: NextApiResponse<Ponix | ApiError>) => {
    if (req.method === "POST") {
        res.status(200).json(internalHandler());
    } else {
        res.status(405).json({
            message: "Method Not Allowed",
            redirect: "/draw",
        });
    }
};

export default handler;
