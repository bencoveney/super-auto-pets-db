"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitiseName = void 0;
function sanitiseName(name) {
    return name.toLowerCase().replace(/\s/g, "_");
}
exports.sanitiseName = sanitiseName;
