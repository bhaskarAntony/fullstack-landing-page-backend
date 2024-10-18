const InternshipDatabase = require("../models/internship");

exports.NewIntern = async (req, res) => {
    const internData = req.body;
    console.log(internData);
    try {
        // Validate leadData here (you can use a library like Joi or express-validator)
        const newintern = new InternshipDatabase(internData);
        await newintern.save();
        res.status(201).json({
            message: 'intern created successfully',
            createdLead: newintern
        });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(400).json({
            message: 'Error creating lead',
            leadError: error.message
        });
    }
}

exports.getInterns = async(req, res) =>{
    try {
        const allData = await InternshipDatabase.find();
        res.status(200).json({
            message:"success",
            data:allData
        })
    } catch (error) {
        res.status(500).json({
            message:error.message,
            data:error
        })
    }
}
