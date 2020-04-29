const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const movieSchema = new Schema({
    name: {
       type: String,
       required: true
    },
    rating: {
       type: Number,
       required: true
    },
    producer: {
       type: String,
       required: true
   }
}, {
    timestamps: true
});
// movieSchema.set('toObject', { virtuals: true });
// var Movies = mongoose.model('Movie', movieSchema);
// module.exports = {Movies, movieSchema};
const Movie = module.exports = mongoose.model('movie', movieSchema);