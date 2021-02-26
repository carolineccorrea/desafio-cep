import * as mongoose from 'mongoose';

export const CEPSchema = new mongoose.Schema({
    codigo_loja: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    faixa_inicio: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    faixa_fim: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
});