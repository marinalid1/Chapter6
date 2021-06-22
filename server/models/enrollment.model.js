import mongoose from 'mongoose'

const EnrollmentSchema = new mongoose.Schema({
  // Pg 264, Defining an enrollment model
  course: {type: mongoose.Schema.ObjectId, ref: 'Course'},
  // Pg 265, the updated field, updated every time a lesson is complete
  updated: Date,
  // Pg 265, enrolled indicating the time that the enrollment was created
  enrolled: {
    type: Date,
    default: Date.now
  },
  // Pg 265, store the refrence to the user who created this enrollment
  student: {type: mongoose.Schema.ObjectId, ref: 'User'},
  // Pg 265, indicates wheter the corresponding lesson has been completed or not
  lessonStatus: [{
      lesson: {type: mongoose.Schema.ObjectId, ref: 'Lesson'}, 
      complete: Boolean}],
      // only set when the course has been completed
  completed: Date
})

export default mongoose.model('Enrollment', EnrollmentSchema)
