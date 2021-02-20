import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UseInterceptors,
} from '@nestjs/common';
import { CreateCEPContract } from '../contracts/Cep.contracts';
import { CreateCEPDTO } from '../dto/create-cep-dto';
import { ValidatorInterceptor } from '../interceptors/validator.interceptor';
import { CEP } from '../models/cep.model';
import { Result } from '../models/result.model';
import { AccountService } from '../services/account.service';


@Controller('v1/ceps')
export class CEPController {

    constructor(private readonly accountService: AccountService) {
    }


    @Get()
    async get() {
        return new Result(null, true, [], null);
    }
    @Get(':_id')
    async getById(@Param('id') document: string) {
        return new Result(null, true, {}, null);
    }
    @Post()
    @UseInterceptors(new ValidatorInterceptor(new CreateCEPContract()))
    async post(@Body() model: CreateCEPDTO) {
        const newCEP = new CEP(model._id,model.codigo_loja,model.faixa_inicio,model.faixa_fim)
        const cep = await this.accountService.create(newCEP);
        return new Result('Cep criado com sucesso', true, cep, null);
    }
/*
    @Put(':document')
    async put(@Param('document') document, @Body() body) {
        return new Result('Cliente atualizado com sucesso', true, body, null)
    }

    @Delete(':document')
    async delete(@Param('document') document) {
        return new Result('Cliente deletado com sucesso', true, null, null);
    }
    */
}
