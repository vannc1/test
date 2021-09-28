import  mongoose  from "mongoose";
mongoose.Promise = global.Promise;

const courseSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: 'string',
        required: true,
    },
    description: {
        type: 'string',
        required: true,
    },
});

export default mongoose.model('Course', courseSchema);