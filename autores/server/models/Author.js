import mongoose from "mongoose";

const { Schema, models, model } = mongoose;

const AuthorSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "The name field is required"],
      minLength: [3, "The name must have at least 3 characters"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default models.authors || model("Author", AuthorSchema);
