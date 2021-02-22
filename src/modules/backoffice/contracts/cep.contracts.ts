import { Injectable } from "@nestjs/common";
import { Validator } from "../../../utils/validator";
import { CreateCEPDTO } from "../dto/create-cep-dto";
import { Contract } from "./Contract";

@Injectable()
export class CreateCEPContract implements Contract {
    errors: any[];
    
    validate(model: CreateCEPDTO): boolean {
        const validator = new Validator();

       // validator.isFixedLen(model.faixa_inicio, 8, 'dado inválido: faixa inicio');
        //validator.isFixedLen(model.faixa_fim, 8, 'dado inválido: faixa fim');
    

        this.errors = validator.errors;

        return validator.isValid();
    }

}