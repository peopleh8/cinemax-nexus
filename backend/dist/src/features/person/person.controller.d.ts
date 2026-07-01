import { PersonService } from './person.service';
import { QueryDto } from "../../common/dto";
import { CreatePersonDto } from './dto';
import { UpdatePersonDto } from './dto';
export declare class PersonController {
    private readonly personService;
    constructor(personService: PersonService);
    findOneBySlug(slug: string): Promise<{
        id: number;
        slug: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        bio: string | null;
        birthDate: Date | null;
    }>;
    findAll(query: QueryDto): Promise<{
        rows: {
            id: number;
            slug: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            bio: string | null;
            birthDate: Date | null;
        }[];
        total: number;
    }>;
    create(dto: CreatePersonDto): Promise<{
        id: number;
        slug: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        bio: string | null;
        birthDate: Date | null;
    }>;
    update(slug: string, dto: UpdatePersonDto): Promise<{
        id: number;
        slug: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        bio: string | null;
        birthDate: Date | null;
    }>;
    delete(slug: string): Promise<{
        id: number;
        slug: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        bio: string | null;
        birthDate: Date | null;
    }>;
}
