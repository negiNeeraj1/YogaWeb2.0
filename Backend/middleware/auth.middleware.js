import User from "../models/user.Model";

export const isAuthenticated = (req, res, next) => {
    if (req.session && req.session.userId) {
        return next();
    }
    res.status(401).json({
        success: false,
        message: 'Unauthorized: Please log in'
    });
};


export const isAdmin = async(req , res , next) =>{
    try {
        if(!req.session.userId){
            return res.status(401).json({
                success: false,
                message: "Authentication required , you must be logged in"
            })  
        }

        const user = await User.findById(req.session.userId);
        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        if(user.role !== 'admin'){
            return res.status(403).json({
                success: false,
                message: "Access denied. Admin Privilege required"
            })
        }

        next();


    } catch (error) {
        next(error);
    }
}


export const isInstructor = async(req, res , next) => {
    try {
        if(!req.session.userId){
            return res.status(401).json({
                success: false,
                message: "Authentication required , you must be logged in"
            })
        }

        const user = await User.findById(req.session.userId);

        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        if(user.role !== 'instructor'){
            return res.status(403).json({
                success: false,
                message: "Access denied you must be an instructor"
            })
        }

        next();
    } catch (error) {
        next(error);
    }
}

export const isOwner = (req, res, next) => {
    if (!req.user || req.user._id.toString() !== req.params.userId) {
        return res.status(403).json({
            success: false,
            message: "Access denied. You can only access your own resources."
        });
    }
    next();
};


export const updateLastActivity = async (req, res, next) => {
    if (req.user) {
        await User.findByIdAndUpdate(req.user._id, {
            lastActivity: new Date()
        });
    }
    next();
};

