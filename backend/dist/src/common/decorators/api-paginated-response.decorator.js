"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiPaginatedResponse = ApiPaginatedResponse;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const response_1 = require("../dto/response");
function ApiPaginatedResponse(model, description = 'The items have been successfully retrieved.') {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiExtraModels)(model, response_1.PaginationMetaDto), (0, swagger_1.ApiOkResponse)({
        description,
        schema: {
            type: 'object',
            required: ['rows', 'meta'],
            properties: {
                rows: {
                    type: 'array',
                    items: {
                        $ref: (0, swagger_1.getSchemaPath)(model),
                    },
                },
                meta: {
                    $ref: (0, swagger_1.getSchemaPath)(response_1.PaginationMetaDto),
                },
            },
        },
    }));
}
//# sourceMappingURL=api-paginated-response.decorator.js.map