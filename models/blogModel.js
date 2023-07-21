const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    title: {type: String, required: true, maxlength:[30, 'Title is too long']},
    blog:{ type :String ,required:true, minlength:[5, 'blog is too short']}
})

const blogModel = mongoose.model('blogColl', blogSchema)

module.exports = blogModel