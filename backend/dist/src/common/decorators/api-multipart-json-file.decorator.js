"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiJsonFileUpload = ApiJsonFileUpload;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
function ApiJsonFileUpload(dto, { dataField = 'data', fileField = 'File', fileDescription = 'File to upload.', fileRequired = false, } = {}) {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiConsumes)('application/json'), (0, swagger_1.ApiExtraModels)(dto), (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            required: [dataField, ...(fileRequired ? [fileField] : [])],
            properties: {
                [dataField]: {
                    $ref: (0, swagger_1.getSchemaPath)(dto),
                },
                [fileField]: {
                    type: 'string',
                    nullable: !fileRequired,
                    description: fileDescription,
                    example: 'poster.webp',
                },
            },
        },
    }));
}
//# sourceMappingURL=api-multipart-json-file.decorator.js.map