import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
import { ICEP } from "../interfaces/faixa.interface";
import { CEP } from "../models/cep.model";


@Injectable()
export class AccountService {
    constructor(
        @InjectModel('CEP') private readonly cepModel: mongoose.Model<ICEP>
    ) { }

    async create(data: CEP): Promise<ICEP> {
        const c = new this.cepModel(data);
        return await c.save();
    }
/*
    async findByUsername(username): Promise<> {
        return await this.userModel
            .findOne({ username: username })
            .exec();
    }

    async update(username: string, data: any): Promise<User> {
        return await this.userModel.findOneAndUpdate({ username }, data);
    }
    async findOneByUserName(username){
        return new User(username,"123456789",true)
    }
    */
}
