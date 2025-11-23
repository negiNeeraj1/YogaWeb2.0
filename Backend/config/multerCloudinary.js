import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';

cloudinary.config({
    cloud_name: "dxlcaoneq",
    api_key: "194621958231153",
    api_secret: "RihEwpmXvaH6CM9uACo17Q6fOo4",
});

// Image storage configuration
const imageStorage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'yoga-class-images',
        allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
        transformation: [
            { width: 1000, height: 750, crop: 'fill' },
            { quality: 'auto' }
        ],
        public_id: (req, file) => `class-${Date.now()}`
    }
});

// Video storage configuration
const videoStorage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'yoga-videos',
        allowed_formats: ['mp4', 'mov', 'avi', 'wmv', 'flv', 'mkv'],
        resource_type: 'video',
        transformation: [
            { quality: 'auto' },
            { fetch_format: 'auto' }
        ],
        public_id: (req, file) => `yoga-video-${Date.now()}`
    }
});

const uploadImage = multer({
    storage: imageStorage,
    limits: {
        fileSize: 5 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Not an image! Please upload only images.'), false);
        }
    }
});

export const uploadVideo = multer({
    storage: videoStorage,
    limits: {
        fileSize: 100 * 1024 * 1024 
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('video/')) {
            cb(null, true);
        } else {
            cb(new Error('Only video files are allowed!'), false);
        }
    }
});

// Error handling middleware
export const handleUploadError = (err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        return res.status(400).json({
            success: false,
            message: 'File upload error',
            error: err.message
        });
    } else if (err) {
        return res.status(400).json({
            success: false,
            message: err.message
        });
    }
    next();
};

export default uploadImage;