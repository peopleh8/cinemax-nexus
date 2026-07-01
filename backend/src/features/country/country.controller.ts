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
import { CountryService } from './country.service'
import { QueryDto } from 'src/common/dto'
import { CreateCountryDto } from './dto'
import { UpdateCountryDto } from './dto'
import { PaginationInterceptor } from 'src/common/interceptors'
import { RoleGuard, SessionGuard } from 'src/common/guards'
import { ApiPaginatedResponse, Roles } from 'src/common/decorators'
import { UserRole } from 'generated/prisma/enums'
import { ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'
import { CountryResponseDto } from './dto/response'

@Controller('countries')
@ApiTags('Countries')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get(':slug')
  @ApiOperation({ summary: 'Get a country by slug' })
  @ApiOkResponse({ type: CountryResponseDto, description: 'The country has been successfully retrieved.' })
  @HttpCode(HttpStatus.OK)
  findOneBySlug(@Param('slug') slug: string) {
    return this.countryService.findOneBySlug(slug)
  }

  @Get()
  @UseInterceptors(PaginationInterceptor)
  @ApiOperation({ summary: 'Get all countries' })
  @ApiPaginatedResponse(CountryResponseDto, 'The countries have been successfully retrieved.')
  @HttpCode(HttpStatus.OK)
  findAll(@Query() query: QueryDto) {
    return this.countryService.findAll(query)
  }

  @Post()
  @UseGuards(SessionGuard, RoleGuard)
  @Roles(UserRole.ADMIN, UserRole.EDITOR)
  @ApiOperation({ summary: 'Create a new country' })
  @ApiCreatedResponse({ type: CountryResponseDto, description: 'The country has been successfully created.' })
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateCountryDto) {
    return this.countryService.create(dto)
  }

  @Put(':slug')
  @UseGuards(SessionGuard, RoleGuard)
  @Roles(UserRole.ADMIN, UserRole.EDITOR)
  @ApiOperation({ summary: 'Update a country by slug' })
  @ApiOkResponse({ type: CountryResponseDto, description: 'The country has been successfully updated.' })
  @HttpCode(HttpStatus.OK)
  update(@Param('slug') slug: string, @Body() dto: UpdateCountryDto) {
    return this.countryService.update(slug, dto)
  }

  @Delete(':slug')
  @UseGuards(SessionGuard, RoleGuard)
  @Roles(UserRole.ADMIN, UserRole.EDITOR)
  @ApiOperation({ summary: 'Delete a country by slug' })
  @ApiOkResponse({ type: CountryResponseDto, description: 'The country has been successfully deleted.' })
  @HttpCode(HttpStatus.OK)
  delete(@Param('slug') slug: string) {
    return this.countryService.delete(slug)
  }
}
