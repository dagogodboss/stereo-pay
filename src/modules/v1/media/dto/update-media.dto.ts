import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import CreateMediaDto from './create-media.dto';

export default class UpdateMediaDto extends PartialType(CreateMediaDto) {
    @IsNotEmpty()
    readonly id: string = '';
}
