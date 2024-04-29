import mongoose from 'mongoose';

const RecipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    },
    instructions: {
        type: [String],
        required: true
    },
    coockingTime: {
        type: Number,
        required: true
    },
})

export default mongoose.model('Recipe', RecipeSchema);