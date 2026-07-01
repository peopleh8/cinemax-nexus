import { CountryService } from './country.service';
import { QueryDto } from "../../common/dto";
import { CreateCountryDto } from './dto';
import { UpdateCountryDto } from './dto';
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
    findAll(query: QueryDto): Promise<{
        rows: {
            code: string;
            id: number;
            slug: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
        }[];
        total: number;
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
