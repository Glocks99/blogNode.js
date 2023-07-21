const blogModel = require('../models/blogModel')
const methodOverride = require('method-override')

const getblogForm = (req,res)=>{
    res.render('blogForm')
}

const getViewBlogs = async(req,res)=>{
    const data = req.body
    const savedblogs = await blogModel.find(data)
    .then(result => {
        res.render('blog',{title: "BLOGS",result})
    })
    .catch(err => console.log(err))
}

const getSingleBlog = async(req,res)=>{
    const id = req.params.id;
    await blogModel.findById(id)
    .then(result => {
        res.render('singleBlog', {title: "SINGLE",result})
    })
}

const createBlog = async (req,res)=>{
    try{
        const {title,blog} = req.body
        const newBlog = new blogModel({
            title:title,
            blog:blog
        })
        newBlog.save()
        res.status(201).redirect('/viewBlogs')
    }
    catch(err){
        console.log(err)
    }
}
const getUpdateForm = async(req,res)=>{
    const id = req.params.id
    await blogModel.findById(id)
    .then(result => {
        res.render('updateBlog',{title: "UPDATE", result})
    })
    .catch(err => console.log(err))
}

const updateBlog = async(req,res)=>{
    const id = req.params.id
    await blogModel.findByIdAndUpdate(id, req.body)
    .then(result => {
        res.redirect('/viewBlogs')
    })
    .catch(err => console.log(err))
}
const deleteBlog = async(req,res)=>{
    const id = req.params.id
    await blogModel.findByIdAndRemove(id)
    .then(result =>{
        res.json({redirect:"/viewBlogs"})
    })
}

module.exports = {getblogForm,createBlog,getViewBlogs,getSingleBlog,deleteBlog,updateBlog,getUpdateForm}