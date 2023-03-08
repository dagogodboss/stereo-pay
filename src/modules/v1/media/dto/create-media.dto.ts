import { ApiProperty } from '@nestjs/swagger';
import {
 IsNotEmpty, IsString, IsUrl, MinLength,
} from 'class-validator';
import { MediaType } from '../interfaces/media.interface';

export default class CreateMediaDto {
  @ApiProperty({ type: String, examples: ['image', 'audio'] })
  @IsNotEmpty()
  @IsString()
  type!: MediaType;

  @ApiProperty({ type: String, example: 'the best Image of a cat' })
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  name!: string;

  @ApiProperty({
    type: String,
    example:
      'this image is from lorem ipsum, the sentence is an industrial place holder',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  description: string = '';

  @ApiProperty({
    type: String,
    example: 'http://www.images.com/best-image-of-cat',
  })
  @IsNotEmpty()
  @IsUrl()
  @MinLength(3)
  url: string = '';
}
