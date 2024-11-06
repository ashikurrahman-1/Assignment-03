
// Create Blog
export const createBlog = async (req, res)=>{
    res.json({message: "Blog Created Successfully"});
}

// Read Blog
export const readBlog = async(req, res)=>{
    res.json({message: "Blog Read Successfully"});
}

// Update Blog
export const updateBlog = async(req, res)=>{
    res.json({message: "Blog Update Successfully"});
}

// Delete Blog
export const deleteBlog = async(req, res)=>{
    res.json({message: "Blog Delete Successfully"});
}