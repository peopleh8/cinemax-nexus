import { CountryService } from './country.service';
import { PaginationDto } from "../../common/dto";
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/updated-country.dto';
export declare class CountryController {
    private readonly countryService;
    constructor(countryService: CountryService);
    findOneBySlug(slug: string): Promise<{
        code: string;
        id: number;
        slug: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
    }>;
    findAll(dto: PaginationDto): Promise<{
        rows: {
            code: string;
            id: number;
            slug: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
        }[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    create(dto: CreateCountryDto): Promise<{
        code: string;
        id: number;
        slug: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
    }>;
    update(slug: string, dto: UpdateCountryDto): Promise<{
        code: string;
        id: number;
        slug: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
    }>;
    delete(slug: string): Promise<{
        code: string;
        id: number;
        slug: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
    }>;
}
