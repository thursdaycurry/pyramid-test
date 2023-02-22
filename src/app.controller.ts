import { Controller, Get, Param, Render, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('/')
export class AppController {
  @Get()
  main() {
    return 'hollo world';
  }
}
