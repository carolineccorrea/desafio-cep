import { Mongoose } from "mongoose";

  
import { Document } from "mongoose";
export class ICEP extends Document {
    public codigo_loja: string;
    public faixa_inicio: string;
    public faixa_fim: string;
    constructor() {
        super();
        
    }   
}
