import { applyDecorators, Type } from '@nestjs/common'
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger'
import { PaginationMetaDto } from '../dto/response'

export function ApiPaginatedResponse<TModel extends Type<unknown>>(
  model: TModel,
  description = 'The items have been successfully retrieved.',
) {
  return applyDecorators(
    ApiExtraModels(model, PaginationMetaDto),
    ApiOkResponse({
      description,
      schema: {
        type: 'object',
        required: ['rows', 'meta'],
        properties: {
          rows: {
            type: 'array',
            items: {
              $ref: getSchemaPath(model),
            },
          },
          meta: {
            $ref: getSchemaPath(PaginationMetaDto),
          },
        },
      },
    }),
  )
}
