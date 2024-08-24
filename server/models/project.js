import mongoose from "mongoose";



const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: ['true', 'Please add a title']
  },
  field: {
    type: String,
    required: ['true', 'Please add a field']
  },
  summary: {
    type: String,
    required: ['true', 'Please add a summary']
  },
  members: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Student',
    required: ['true', 'Please add members']
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  image:[ {
    public_id: {
      type: String,
      required: ['true', 'No public id provided']
    },
    url: {
      type: String,
      required: ['true', 'No url provided']
    },
  }],
  password:{
    type:String,
    default:"password",
  }
  
  
})

const Project = mongoose.model('Project', ProjectSchema)
export default Project