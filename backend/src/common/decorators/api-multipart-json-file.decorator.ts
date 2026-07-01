// src/common/decorators/api-json-file-upload.decorator.ts

import { applyDecorators, Type } from '@nestjs/common'
import { ApiBody, ApiConsumes, ApiExtraModels, getSchemaPath } from '@nestjs/swagger'

type ApiJsonFileUploadOptions = {
  dataField?: string
  fileField?: string
  fileDescription?: string
  fileRequired?: boolean
}

export function ApiJsonFileUpload<T extends Type<unknown>>(
  dto: T,
  {
    dataField = 'data',
    fileField = 'File',
    fileDescription = 'File to upload.',
    fileRequired = false,
  }: ApiJsonFileUploadOptions = {},
) {
  return applyDecorators(
    ApiConsumes('application/json'),
    ApiExtraModels(dto),
    ApiBody({
      schema: {
        type: 'object',
        required: [dataField, ...(fileRequired ? [fileField] : [])],
        properties: {
          [dataField]: {
            $ref: getSchemaPath(dto),
          },
          [fileField]: {
            type: 'string',
            nullable: !fileRequired,
            description: fileDescription,
            example: 'poster.webp',
          },
        },
      },
    }),
  )
}
