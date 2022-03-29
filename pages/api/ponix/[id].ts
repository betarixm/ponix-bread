import type { NextApiRequest, NextApiResponse } from "next";
import type { Ponix } from "../../../typings/models";
import type { ApiError } from "../../../typings/errors";

import { EmptyPonix, PonixList } from "../../../constants/ponix";

export const internalHandler: (ponix_id: string) => Ponix = (ponix_id) => {
    return PonixList.find((p) => p.id === ponix_id) || EmptyPonix;
};

export const handler = (req: NextApiRequest, res: NextApiResponse<Ponix | ApiError>) => {
    if (req.method === "POST") {
        res.status(200).json(internalHandler(req.query.id.toString()));
    } else {
        res.status(405).json({
            message: "Method Not Allowed",
            redirect: "/draw",
        });
    }
};

export default handler;
