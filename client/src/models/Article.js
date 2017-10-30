import mongoose from "mongoose";
var Schema = mongoose.Schema;

// Create a new ArticleSchema object
var ArticleSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  url: {
    type: String,
    required: true
  },
});
// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

export default Article;