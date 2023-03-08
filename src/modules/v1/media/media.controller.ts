import WrapResponseInterceptor from '@interceptors/wrap-response.interceptor';
import {
  Controller,
  UseInterceptors,
  Post,
  Get,
  Req,
  Delete,
  Patch,
  Param,
  DefaultValuePipe,
  ParseIntPipe,
  Query,
  Body,
  HttpCode,
  HttpStatus,
  UseGuards,
  ForbiddenException,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiConflictResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
  ApiBearerAuth,
} from '@nestjs/swagger';
import Serialize from '@decorators/serialization.decorator';
import JwtAccessGuard from '@guards/jwt-access.guard';
import AuthBearer from '@decorators/auth-bearer.decorator';
import { DecodedUser } from '@v1/auth/interfaces/decoded-user.interface';
import { ConfigService } from '@nestjs/config';
import AuthService from '@v1/auth/auth.service';
import CreateMediaDto from './dto/create-media.dto';
import { MediaService } from './media.service';
import { MediaPayload, MediaResponseEntity } from './interfaces/media-payload.interface';
import UpdateMediaDto from './dto/update-media.dto';

@ApiTags('Auth')
@UseInterceptors(WrapResponseInterceptor)
@Controller()
export class MediaController {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
    private readonly mediaService: MediaService,
  ) {}

  @ApiBody({ type: CreateMediaDto })
  @ApiBadRequestResponse({
    schema: {
      type: 'object',
      example: {
        status: 'error',
        message: [
          {
            target: {
              type: 'string',
              name: 'string',
            },
            value: 'string',
            property: 'string',
            children: [],
            constraints: {},
          },
        ],
        error: 'Bad Request',
      },
    },
    description: '400. ValidationException',
  })
  @ApiConflictResponse({
    schema: {
      type: 'object',
      example: {
        status: 'error',
        message: 'string',
      },
    },
    description: '409. ConflictResponse',
  })
  @ApiInternalServerErrorResponse({
    schema: {
      type: 'object',
      example: {
        status: 'error',
        message: 'string',
        details: {},
      },
    },
    description: '500. InternalServerError',
  })
  @HttpCode(HttpStatus.CREATED)
  @Post('')
  @ApiBearerAuth()
  @UseGuards(JwtAccessGuard)
  async createMedia(
    @Body() createMediaDto: CreateMediaDto,
    @AuthBearer() token: string,
  ) {
    const decodedUser: DecodedUser | null = await this.authService.verifyToken(
      token,
      this.configService.get<string>('ACCESS_TOKEN')
        || '283f01ccce922bcc2399e7f8ded981285963cec349daba382eb633c1b3a5f282',
    );

    if (!decodedUser) {
      throw new ForbiddenException('Incorrect token');
    }
    this.mediaService.create(createMediaDto, decodedUser);
  }

  @ApiOkResponse({
    schema: {
      type: 'object',
      example: {
        status: 'success',
        message: 'Operation successful',
        data: {},
      },
    },
    description: 'Returns Created Media',
  })
  @Get(':/id')
  @ApiParam({ name: 'id', type: String })
  @Serialize(MediaResponseEntity)
  async getMedia(@Param('id') id: string): Promise<MediaPayload> {
    return this.mediaService.findOne(id) as unknown as MediaPayload;
  }

  @ApiOkResponse({
    schema: {
      type: 'object',
      example: {
        status: 'success',
        message: 'Operation successful',
        data: [{}],
      },
    },
    description: 'Returns Created Media',
  })
  @Get('')
  async getAllMedia(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('perPage', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
  ) {
    return this.mediaService.findAll({ page, limit });
  }

  @Get('search')
  @ApiParam({ name: 'query', type: 'string' })
  async searchMedia(@Req() request: any) {
    return this.mediaService.searchMedia(request.query);
  }

  @Patch(':/id')
  @ApiParam({ name: 'id', type: String })
  async patchMedia(
    @Param('id') id: string,
    @Body() updateMediaDto: UpdateMediaDto,
  ) {
    return this.mediaService.update(id, updateMediaDto);
  }

  @Delete(':/id')
  @ApiParam({ name: 'id', type: String })
  async deleteMedia(@Param('id') id: string) {
    return this.mediaService.delete(id);
  }
}
