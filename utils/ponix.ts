import type { Ponix } from "../typings/models";

export const isPonixEmpty = (ponix: Ponix): boolean => {
    return ponix.no === -1;
};
