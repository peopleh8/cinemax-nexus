import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common'
import { PersonService } from './person.service'
import { QueryDto } from 'src/common/dto'
import { CreatePersonDto } from './dto'
import { ResponsePersonDto } from './dto/response'
import { UpdatePersonDto } from './dto'
import { PaginationInterceptor } from 'src/common/interceptors'
import { RoleGuard, SessionGuard } from 'src/common/guards'
import { ApiPaginatedResponse, Roles } from 'src/common/decorators'
import { UserRole } from 'generated/prisma/enums'
import { ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'

@Controller('people')
@ApiTags('People')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get(':slug')
  @ApiOperation({ summary: 'Get a person by slug' })
  @ApiOkResponse({
    type: ResponsePersonDto,
    description: 'The person has been successfully retrieved.',
  })
  @HttpCode(HttpStatus.OK)
  findOneBySlug(@Param('slug') slug: string) {
    return this.personService.findOneBySlug(slug)
  }

  @Get()
  @UseInterceptors(PaginationInterceptor)
  @ApiOperation({ summary: 'Get all people' })
  @ApiPaginatedResponse(ResponsePersonDto, 'The people have been successfully retrieved.')
  @HttpCode(HttpStatus.OK)
  findAll(@Query() query: QueryDto) {
    return this.personService.findAll(query)
  }

  @Post()
  @UseGuards(SessionGuard, RoleGuard)
  @Roles(UserRole.ADMIN, UserRole.EDITOR)
  @ApiOperation({ summary: 'Create a new person' })
  @ApiCreatedResponse({ type: ResponsePersonDto, description: 'The person has been successfully created.' })
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreatePersonDto) {
    return this.personService.create(dto)
  }

  @Put(':slug')
  @UseGuards(SessionGuard, RoleGuard)
  @Roles(UserRole.ADMIN, UserRole.EDITOR)
  @ApiOperation({ summary: 'Update a person by slug' })
  @ApiOkResponse({ type: ResponsePersonDto, description: 'The person has been successfully updated.' })
  @HttpCode(HttpStatus.OK)
  update(@Param('slug') slug: string, @Body() dto: UpdatePersonDto) {
    return this.personService.update(slug, dto)
  }

  @Delete(':slug')
  @UseGuards(SessionGuard, RoleGuard)
  @Roles(UserRole.ADMIN, UserRole.EDITOR)
  @ApiOperation({ summary: 'Delete a person by slug' })
  @ApiOkResponse({ type: ResponsePersonDto, description: 'The person has been successfully deleted.' })
  @HttpCode(HttpStatus.OK)
  delete(@Param('slug') slug: string) {
    return this.personService.delete(slug)
  }
}
