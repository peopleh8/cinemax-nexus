import { CountryService } from './country.service';
import { PaginationDto, SearchDto, SortDto } from "../../common/dto";
import { CreateCountryDto } from './dto';
import { UpdateCountryDto } from './dto';
export declare class CountryController {
    private readonly countryService;
    constructor(countryService: CountryService);
    findOneBySlug(slug: string): Promise<{
        name: string;
        id: number;
        slug: string;
        code: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(dto: PaginationDto & SearchDto & SortDto): Promise<{
        rows: {
            name: string;
            id: number;
            slug: string;
            code: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
        total: number;
    }>;
    create(dto: CreateCountryDto): Promise<{
        name: string;
        id: number;
        slug: string;
        code: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(slug: string, dto: UpdateCountryDto): Promise<{
        name: string;
        id: number;
        slug: string;
        code: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    delete(slug: string): Promise<{
        name: string;
        id: number;
        slug: string;
        code: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
