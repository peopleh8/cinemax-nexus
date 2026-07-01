import { CountryService } from './country.service';
import { QueryDto } from "../../common/dto";
import { CreateCountryDto } from './dto';
import { UpdateCountryDto } from './dto';
export declare class CountryController {
    private readonly countryService;
    constructor(countryService: CountryService);
    findOneBySlug(slug: string): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        slug: string;
    }>;
    findAll(query: QueryDto): Promise<{
        rows: {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            code: string;
            slug: string;
        }[];
        total: number;
    }>;
    create(dto: CreateCountryDto): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        slug: string;
    }>;
    update(slug: string, dto: UpdateCountryDto): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        slug: string;
    }>;
    delete(slug: string): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        code: string;
        slug: string;
    }>;
}
