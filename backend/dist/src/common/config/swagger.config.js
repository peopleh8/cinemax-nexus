"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSwaggerConfig = getSwaggerConfig;
const swagger_1 = require("@nestjs/swagger");
function getSwaggerConfig() {
    return new swagger_1.DocumentBuilder()
        .setTitle('Cinemax API')
        .setDescription('API documentation for Cinemax')
        .setVersion('1.0.0')
        .setBasePath('/api')
        .addCookieAuth()
        .build();
}
//# sourceMappingURL=swagger.config.js.map