import mongoose from 'mongoose'
const { Schema, models, model } = mongoose


const JokeSchema = new Schema({
    setup: {
        type: String,
        required: [true, "Setup is required"]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required"]
    }
}, {
    timestamps: true,
    versionKey: false
})

export default models.jokes || model( 'jokes', JokeSchema )
