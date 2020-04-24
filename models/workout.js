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
    },
    
    { toJSON: { virtuals: true } },
    );

// toJSON needed to be in the schema to insert virtual into the workoutSchema
// once there you can take the total, reduce takes the end number value
// we need the total of each exercise and to return the total amounts and the excercise duration

workoutSchema.virtual("totalDuration").get(function(){
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration
  }, 0);
});

// workoutSchema.virtual("totalDuration").get(function () {
//   const tallied = exercises.reduce((acc, curr) => {
//     if (curr.type === "resistance") {
//       acc.totalDistance = (acc.totalDuration || 0) + curr.duration;
//     } else if (curr.type === "cardio") {
//       acc.totalDistance = (acc.totalDuration || 0) + curr.duration;
//     }
//     return acc;
//   }, {});
//   return tallied;
// });

    const Workout = mongoose.model("Workout", workoutSchema);

    module.exports = Workout;