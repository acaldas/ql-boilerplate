import crypto from "crypto";
import { dirname, join } from "path";
import { readFileSync, writeFileSync } from "fs";
import { IDocument } from "./generated/document";

const dir = join(dirname(dirname(process.argv[1])), "/db");

function getPath(id: string) {
    return `${dir}/${id}.json`;
}

export default {
    create: function (document: IDocument) {
        const id = crypto.randomUUID();
        this.save(id, document);
        return id;
    },
    save: function (id: string, document: IDocument) {
        writeFileSync(getPath(id), JSON.stringify(document));
    },
    find: function (id: string) {
        const file = readFileSync(getPath(id));
        return JSON.parse(file.toString("utf-8"));
    },
};
