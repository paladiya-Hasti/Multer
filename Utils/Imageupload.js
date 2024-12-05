const multer = require('multer');
const stroage = multer.diskStorage({
    destination : "uploads",
    filename : (req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload = multer({
    storage :stroage
})

module.exports = upload;
