import { Type } from '@nestjs/common';
export declare function ApiPaginatedResponse<TModel extends Type<unknown>>(model: TModel, description?: string): <TFunction extends Function, Y>(target: TFunction | object, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
