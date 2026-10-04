import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  @IsNotEmpty({ message: 'Name is required' })
  @MaxLength(100)
  name: string;

  @IsEmail({}, { message: 'A valid email address is required' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Role or subject is required' })
  @MaxLength(150)
  subject: string;

  @IsString()
  @IsNotEmpty({ message: 'Message content cannot be empty' })
  @MaxLength(3000)
  message: string;
}
