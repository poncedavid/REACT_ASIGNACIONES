import mongoose from 'mongoose'
const { Schema, models, model } = mongoose

const ProductSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String
    }
}, {
    timestamps: true,
    versionKey: false
})

export default models.products || model('Product', ProductSchema)