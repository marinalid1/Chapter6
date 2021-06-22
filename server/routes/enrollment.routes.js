import express from 'express'
import enrollmentCtrl from '../controllers/enrollment.controller'
import courseCtrl from '../controllers/course.controller'
import authCtrl from '../controllers/auth.controller'

const router = express.Router()

// Pg 280, list of enrollemnts API
router.route('/api/enrollment/enrolled')
  .get(authCtrl.requireSignin, enrollmentCtrl.listEnrolled)

// Pg 266, the create enrollment API
router.route('/api/enrollment/new/:courseId')
  .post(authCtrl.requireSignin, enrollmentCtrl.findEnrollment, enrollmentCtrl.create)  

// Pg 282, the enrollment stats API
router.route('/api/enrollment/stats/:courseId')
  .get(enrollmentCtrl.enrollmentStats)

// Pg 270, the read enrollment API
// Pg 276, lesson completed API
router.route('/api/enrollment/complete/:enrollmentId')
  .put(authCtrl.requireSignin, enrollmentCtrl.isStudent, enrollmentCtrl.complete) 

router.route('/api/enrollment/:enrollmentId')
  .get(authCtrl.requireSignin, enrollmentCtrl.isStudent, enrollmentCtrl.read)
  .delete(authCtrl.requireSignin, enrollmentCtrl.isStudent, enrollmentCtrl.remove)

// Pg 266, the create enrollment API
router.param('courseId', courseCtrl.courseByID)
// Pg 270, the read enrollment API
router.param('enrollmentId', enrollmentCtrl.enrollmentByID)

export default router
