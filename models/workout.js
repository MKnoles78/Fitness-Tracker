  const mongoose = require("mongoose");

  const Schema = mongoose.Schema;
  
  const workoutSchema = new Schema(
    {
      day: {
        type: Date,
        default: Date.now
      },
      exercises: [
        {
          type: {
            type: String,
            trim: true,
            required: "Enter an exercise type"
          },
          name: {
            type: String,
            trim: true,
            required: "Enter an exercise name"
          },
          distance: {
            type: Number
          },
          duration: {
            type: Number,
            required: "Enter an exercise duration in minutes"
          },
          weight: {
            type: Number
          },
          sets: {
            type: Number
          },
          reps: {
            type: Number
          },

        }
      ]
    });

const opts = { toJSON: { virtuals: true } };
// const RecipeSchema = new Schema(
//   {
//     title: {
//       type: String,
//     },
//     ingredients: [
//       {
//         type: Schema.Types.ObjectId,
//         ref: "Ingredient",
//       },
//     ],
//     timeToCook: {
//       type: Number,
//     },
//     timeToPrepare: {
//       type: Number,
//     },
//   },
  opts
// );

workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises;
});


    const Workout = mongoose.model("Workout", workoutSchema);

    module.exports = Workout;