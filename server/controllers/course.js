import mongoose from 'mongoose';
import Course from '../models/course.js';

// tạo course
export function createCourse(request, response) {
    console.log(request.body);
    const course = new Course({
        _id: mongoose.Types.ObjectId(),
        title: request.body.title,
        description: request.body.description,
    });
    return course
    .save()
    .then(newCourse => {
        return res.status(201).json({
            success: true,
            message: 'Course created successfully',
            Course: newCourse,
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'Server Error, Please try again.',
            error: err.message,
        });
    });
}
// getAllCourse
export function getAllCourse( req, res){
    Course.find()
      .select('_id title description')
      .then((allCourse) => {
        return res.status(200).json({
          success: true,
          message: 'A list of all course',
          Course: allCourse,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: 'Server error. Please try again.',
          error: err.message,
        });
      });
  }

//   export function getSingleCourse(req, res) {
//     const id = req.params.courseId;
//     Course.findById(id)
//       .then((singleCourse) => {
//         res.status(200).json({
//           success: true,
//           message: `More on ${singleCourse.title}`,
//           Course: singleCourse,
//         });
//       })
//       .catch((err) => {
//         res.status(500).json({
//           success: false,
//           message: 'This course does not exist',
//           error: err.message,
//         });
//      });
//   }
  //update course
//   export function updateCourse(req, res) {
//     const id = req.params.courseId;
//     const updateObject = req.body;
//     Course.update({ _id:id }, { $set:updateObject })
//       .exec()
//       .then(() => {
//         res.status(200).json({
//           success: true,
//           message: 'Course is updated',
//           updateCourse: updateObject,
//         });
//       })
//       .catch((err) => {
//         res.status(500).json({
//           success: false,
//           message: 'Server error. Please try again.'
//         });
//       });
//   }

  //delete course
//   export function deleteCourse(req, res) {
//     const id = req.params.courseId;
//     Course.findByIdAndRemove(id)
//       .exec()
//       .then(()=> res.status(204).json({
//         success: true,
//       }))
//       .catch((err) => res.status(500).json({
//         success: false,
//       }));
//   }