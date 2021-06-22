import mongoose from 'mongoose'

// Pg 239, storing lessons
const LessonSchema = new mongoose.Schema({
  title: String,
  content: String,
  resource_url: String
})

// Pg 222, adding courses to the classroom
const Lesson = mongoose.model('Lesson', LessonSchema)
const CourseSchema = new mongoose.Schema({

  // Course Name
  name: {
    type: String,
    trim: true,
    required: 'Name is required'
  },
  // Course image file
  image: {
    data: Buffer,
    contentType: String
  },
  //Course Description
  description: {
    type: String,
    trim: true
  },
  // Course category
  category: {
    type: String,
    required: 'Category is required'
  },
  // Course updated date
  updated: Date,
  // Course created date
  created: {
    type: Date,
    default: Date.now
  },
  //Course instructor
  instructor: {type: mongoose.Schema.ObjectId, ref: 'User'},
  // Course published
  published: {
    type: Boolean,
    default: false
  },
  // Pg 240, store an array of lesson documents
  lessons: [LessonSchema]
})

export default mongoose.model('Course', CourseSchema)
