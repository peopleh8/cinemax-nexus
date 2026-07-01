"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const _1 = require("./");
class QueryDto extends (0, swagger_1.IntersectionType)((0, swagger_1.IntersectionType)(_1.PaginationDto, _1.SearchDto, _1.SortDto)) {
}
exports.QueryDto = QueryDto;
//# sourceMappingURL=query.dto.js.map