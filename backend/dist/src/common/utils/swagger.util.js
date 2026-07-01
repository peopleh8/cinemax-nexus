"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = setupSwagger;
const swagger_1 = require("@nestjs/swagger");
const config_1 = require("../config");
function setupSwagger(app) {
    const config = (0, config_1.getSwaggerConfig)();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('/docs', app, document, {
        jsonDocumentUrl: '/docs-json',
    });
}
//# sourceMappingURL=swagger.util.js.map