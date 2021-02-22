import {
    Body,
    Controller,
    Delete,
    Get,
    HttpException,
    HttpStatus,
    Param,
    Post,
    Put,
    UseInterceptors,
} from '@nestjs/common';
import { CreateCEPContract } from '../contracts/Cep.contracts';
import { CreateCEPDTO } from '../dto/create-cep-dto';
import { ValidatorInterceptor } from '../interceptors/validator.interceptor';
import { ICEP } from '../interfaces/cep.interface';
import { CEP } from '../models/cep.model';
import { Result } from '../models/result.model';
import { AccountService } from '../services/account.service';


@Controller('v1/ceps')
export class CEPController {

    constructor(private readonly accountService: AccountService) {
    }


    @Get()
    async getAll(): Promise<CEP[]> {
        // return new Result(null, true, [], null);
        return this.accountService.getAll();
    }
    @Get(':id')
    async getdById(@Param('id') id: string): Promise<ICEP> {
        // return new Result(null, true, document, null);
        return this.accountService.getdById(id)
    }
    @Post()
    @UseInterceptors(new ValidatorInterceptor(new CreateCEPContract()))
    async post(@Body() model: CreateCEPDTO) {
        
        try {
            const newCEP = new CEP(model.codigo_loja, model.faixa_inicio, model.faixa_fim)
            const resul = await this.accountService.valid(newCEP.faixa_inicio)
            console.log(resul)
            if (resul) {
                const cep = await this.accountService.create(newCEP);
                return new Result('Cep criado com sucesso', true, cep, null);
            } else {
                return new Result('Erro na faixa', false, resul, null);
            }
        } catch (error) {
            throw new HttpException(new Result('Ops algo errado aconteceu', false, null, null), HttpStatus.BAD_REQUEST)
        }
    }
    @Put(':id')
    async put(@Param('id') _id, @Body() body) {
        return new Result('Cep atualizado com sucesso', true, body, null)
    }

    @Delete(':id')
    async delete(@Param('id') _id) {
        return new Result('Cep deletado com sucesso', true, _id, null);
    }

}
