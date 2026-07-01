import { PersonService } from './person.service';
import { PaginationDto, SearchDto, SortDto } from "../../common/dto";
import { CreatePersonDto } from './dto';
import { UpdatePersonDto } from './dto';
export declare class PersonController {
    private readonly personService;
    constructor(personService: PersonService);
    findOneBySlug(slug: string): Promise<{
        name: string;
        id: number;
        slug: string;
        bio: string | null;
        birthDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(query: PaginationDto & SearchDto & SortDto): Promise<{
        rows: {
            name: string;
            id: number;
            slug: string;
            bio: string | null;
            birthDate: Date | null;
            createdAt: Date;
            updatedAt: Date;
        }[];
        total: number;
    }>;
    create(dto: CreatePersonDto): Promise<{
        name: string;
        id: number;
        slug: string;
        bio: string | null;
        birthDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(slug: string, dto: UpdatePersonDto): Promise<{
        name: string;
        id: number;
        slug: string;
        bio: string | null;
        birthDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    delete(slug: string): Promise<{
        name: string;
        id: number;
        slug: string;
        bio: string | null;
        birthDate: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
