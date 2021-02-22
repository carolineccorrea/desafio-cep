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

    async getdById( _id: string ): Promise<ICEP> {
        return await this.cepModel
        .findById({ _id })
        .exec();
    }

    async update(_id: string, data: any): Promise<ICEP> {
        return await this.cepModel.findOneAndUpdate({ _id }, data);
    }
}