import { HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CEPController } from './controllers/cep.controller';
import { CEPSchema } from './schemas/cep.schema';
import { AccountService } from './services/account.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'CEP',
        schema: CEPSchema,
      },
    ]),
    HttpModule
  ],
  controllers: [CEPController],
  providers: [AccountService]
})
export class BackofficeModule { }
