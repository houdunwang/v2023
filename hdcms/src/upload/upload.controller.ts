import { Controller, Post, UploadedFile } from '@nestjs/common'
import { Uploader } from './upload.decorator'
import { Auth } from 'src/auth/auth.decorator'

@Controller('upload')
export class UploadController {
  @Post('image')
  @Uploader('image')
  @Auth()
  image(@UploadedFile() file: Express.Multer.File) {
    return file
  }
}
