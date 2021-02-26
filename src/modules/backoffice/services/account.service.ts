/* eslint-disable prefer-const */
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
import { ICEP } from "../interfaces/cep.interface";
import { CEP } from "../models/cep.model";


@Injectable()
export class AccountService {
    constructor(
        @InjectModel('CEP') private readonly cepModel: mongoose.Model<ICEP>
    ) { }

    async getAll() {
        return await this.cepModel.find().exec()
    }
    async create(data: CEP): Promise<ICEP> {
        const c = new this.cepModel(data);
        return await c.save();
    }

    async getdById(_id: string): Promise<ICEP> {
        return await this.cepModel
            .findById({ _id })
            .exec();
    }

    async update(_id: string, data: any): Promise<ICEP> {
        return await this.cepModel.findOneAndUpdate({ _id }, data);
    }
    async delete(id: string) {
        const cepApagado = this.cepModel.findOneAndDelete({ _id: id }).exec();
    
        return (await cepApagado).remove();
      }
    
      async valid(fi): Promise<boolean> {
        const dados = await this.cepModel.find().exec()
        let re;
        if (dados === undefined || dados === null) {
            // let re;
            dados.forEach((e) => {
                if (fi === e.faixa_fim || fi < e.faixa_fim) {
                    re = false;
                }
                else {
                    re = true;
                }
            })
            return re;
        } else {
            re = true;
            return re;
        }
    }
}
