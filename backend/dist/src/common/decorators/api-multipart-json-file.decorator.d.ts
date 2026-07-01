import { Type } from '@nestjs/common';
type ApiJsonFileUploadOptions = {
    dataField?: string;
    fileField?: string;
    fileDescription?: string;
    fileRequired?: boolean;
};
export declare function ApiJsonFileUpload<T extends Type<unknown>>(dto: T, { dataField, fileField, fileDescription, fileRequired, }?: ApiJsonFileUploadOptions): <TFunction extends Function, Y>(target: TFunction | object, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
export {};
