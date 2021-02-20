import * as mongoose from 'mongoose';

export const CEPSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true,
        trim: true,
        index: {
            unique: true,
        },
    },
    codigo_loja: {
        type: String,
        required: true,
        trim: true,
    },
    faixa_inicio: {
        type: String,
        required: true,
        trim: true,
    },
    faixa_fim: {
        type: String,
        required: true,
        trim: true,
    },
});