const router = require('express').Router()
const {getblogForm,createBlog,getViewBlogs, getSingleBlog,deleteBlog,updateBlog,getUpdateForm} = require('../controllers/blogController')

router.get('/blogForm', getblogForm)

router.post('/createBlog', createBlog)

router.get('/viewBlogs', getViewBlogs)

router.get('/singleBlog/:id', getSingleBlog)

router.get('/update/:id', getUpdateForm)

router.put('/updateBlog/:id', updateBlog)

router.delete('/deleteBlog/:id', deleteBlog)

module.exports = router