import { PersonService } from './person.service';
import { QueryDto } from "../../common/dto";
import { CreatePersonDto } from './dto';
import { UpdatePersonDto } from './dto';
export declare class PersonController {
    private readonly personService;
    constructor(personService: PersonService);
    findOneBySlug(slug: string): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        bio: string | null;
        birthDate: Date | null;
        slug: string;
    }>;
    findAll(query: QueryDto): Promise<{
        rows: {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            bio: string | null;
            birthDate: Date | null;
            slug: string;
        }[];
        total: number;
    }>;
    create(dto: CreatePersonDto): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        bio: string | null;
        birthDate: Date | null;
        slug: string;
    }>;
    update(slug: string, dto: UpdatePersonDto): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        bio: string | null;
        birthDate: Date | null;
        slug: string;
    }>;
    delete(slug: string): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        bio: string | null;
        birthDate: Date | null;
        slug: string;
    }>;
}
