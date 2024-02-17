const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
   // Define your schema here based on your data structure
   end_year: String,
    intensity: Number,
    sector: String,
    topic: String,
    insight: String,
    url: String,
    region: String,
    start_year: String,
    impact: String,
    added: {
        type: Date,
        default: Date.now
    },
    published: Date,
    country: String,
    relevance: Number,
    pestle: String,
    source: String,
    title: String,
    likelihood: Number
});

const DataModel = mongoose.model('Data', dataSchema);

module.exports = DataModel;
