const mongoose = require("mongoose");

const RegistrationSchema = new mongoose.Schema({
    username:String,
    password:String,
    institution: String,
    projectTitle: String,
    supervisorName: String,
    department: String,
    designation: String,
    supervisorPhone: String,
    supervisorEmail: String,
    teamLeader: String,
    semester: String,
    branch: String,
    leaderPhone: String,
    leaderEmail: String,
    teamMembers: [{ name: String, semester: String, branch: String, phone: String, email: String }],
    title: String,
    subjectArea: String,
    projectTypes: [String],
    objectives: String,
    expectedOutcomes: String,
    abstract: String,
    methodology: String,
    socioeconomicSignificance: String,
    conversionFeasibility: String,
    equipmentRequired: String,
    otherFacilities: String,
    submittedElsewhere: Boolean,
    otherSupportDetails: String,
    budget: [{ item: String, expenditure: Number }],
    totalEstimatedCost: Number
});

module.exports = mongoose.model("Registration", RegistrationSchema);
