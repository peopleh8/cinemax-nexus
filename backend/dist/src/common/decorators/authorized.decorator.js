"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authorized = void 0;
const common_1 = require("@nestjs/common");
exports.Authorized = (0, common_1.createParamDecorator)((data, context) => {
    const request = context.switchToHttp().getRequest();
    return data ? request.user?.[data] : request.user;
});
//# sourceMappingURL=authorized.decorator.js.map