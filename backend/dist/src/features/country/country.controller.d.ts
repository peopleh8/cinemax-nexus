import { CountryService } from './country.service';
import { PaginationDto } from "../../common/dto";
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/updated-country.dto';
export declare class CountryController {
    private readonly countryService;
    constructor(countryService: CountryService);
    findOneBySlug(slug: string): Promise<{
        id: number;
        slug: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        code: string;
    }>;
    findAll(dto: PaginationDto): Promise<{
        rows: {
            id: number;
            slug: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            code: string;
        }[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    create(dto: CreateCountryDto): Promise<{
        id: number;
        slug: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        code: string;
    }>;
    update(slug: string, dto: UpdateCountryDto): Promise<{
        id: number;
        slug: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        code: string;
    }>;
    delete(slug: string): Promise<{
        id: number;
        slug: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        code: string;
    }>;
}
