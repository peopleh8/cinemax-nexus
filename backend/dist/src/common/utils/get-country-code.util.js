"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCountryCode = void 0;
const i18n_iso_countries_1 = __importDefault(require("i18n-iso-countries"));
const en_json_1 = __importDefault(require("i18n-iso-countries/langs/en.json"));
i18n_iso_countries_1.default.registerLocale(en_json_1.default);
const getCountryCode = (name) => {
    return i18n_iso_countries_1.default.getAlpha2Code(name, 'en');
};
exports.getCountryCode = getCountryCode;
//# sourceMappingURL=get-country-code.util.js.map