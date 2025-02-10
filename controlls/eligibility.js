const EligibilityDatabase = require("../models/eligibility");

exports.NewLead = async (req, res) => {
    const leadData = req.body;
    console.log(leadData);
    
    try {
        // Validate leadData here (you can use a library like Joi or express-validator)
        const newLead = new EligibilityDatabase(leadData);
        await newLead.save();
        res.status(201).json({
            message: 'Lead created successfully',
            createdLead: newLead
        });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(400).json({
            message: 'Error creating lead',
            leadError: error.message
        });
    }
}

exports.getUsers = async(req, res) =>{
    try {
        const allData = await EligibilityDatabase.find();
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
