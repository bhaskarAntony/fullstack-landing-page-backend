const leadsDataBase = require("../models/leads");

exports.NewLead = async (req, res) => {
    const leadData = req.body;
    console.log(leadData);
    
    try {
        // Validate leadData here (you can use a library like Joi or express-validator)
        
        const newLead = new leadsDataBase(leadData);
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
