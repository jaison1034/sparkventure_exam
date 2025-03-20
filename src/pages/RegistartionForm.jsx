import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        institution: "",
        projectTitle: "",
        supervisorName: "",
        department: "",
        designation: "",
        supervisorPhone: "",
        supervisorEmail: "",
        teamLeader: "",
        semester: "",
        branch: "",
        leaderPhone: "",
        leaderEmail: "",
        teamMembers: [{ name: "", semester: "", branch: "", phone: "", email: "" }],
        title: "",
    subjectArea: "",
    projectTypes: [],
    objectives: "",
    expectedOutcomes: "",
    abstract: "",
    methodology: "",
    socioeconomicSignificance: "",
    conversionFeasibility: "",
    equipmentRequired: "",
    otherFacilities: "",
    submittedElsewhere: false,
    otherSupportDetails: "",
    budget: [{ item: "", expenditure: 0 }],
    totalEstimatedCost: 0
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleMemberChange = (index, e) => {
        const { name, value } = e.target;
        const updatedMembers = [...formData.teamMembers];
        updatedMembers[index][name] = value;
        setFormData({ ...formData, teamMembers: updatedMembers });
    };

    const addMember = () => {
        if (formData.teamMembers.length < 3) {
            setFormData({
                ...formData,
                teamMembers: [...formData.teamMembers, { name: "", semester: "", branch: "", phone: "", email: "" }],
            });
        }
    };

    const removeMember = (index) => {
        const updatedMembers = formData.teamMembers.filter((_, i) => i !== index);
        setFormData({ ...formData, teamMembers: updatedMembers });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/register", formData);
            alert("Application Submitted Successfully");
        } catch (error) {
            console.error("Error submitting application", error);
        }
    };
    const handleBudgetChange = (index, e) => {
        const { name, value } = e.target;
        const budget = [...formData.budget];
        budget[index][name] = name === "expenditure" ? parseFloat(value) : value;
        setFormData({ ...formData, budget });
      };
    
      const addBudgetItem = () => {
        setFormData({ ...formData, budget: [...formData.budget, { item: "", expenditure: 0 }] });
      };
    
      const handleProjectTypeChange = (e) => {
        const options = [...e.target.selectedOptions].map((option) => option.value);
        setFormData({ ...formData, projectTypes: options });
      };

    return (
        <div className="container mt-5">
    <div className="card shadow-lg p-4">
        <h2 className="text-center mb-4">Application Form</h2>
        <form onSubmit={handleSubmit}>
            {/* Username */}
            <div className="mb-3 text-start">
                <label className="form-label">Username</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
            </div>

            {/* Password */}
            <div className="mb-3 text-start">
                <label className="form-label">Password</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
            </div>

            {/* Institution Name */}
            <div className="mb-3 text-start">
                <label className="form-label">Institution Name</label>
                <input
                    type="text"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
            </div>

            {/* Project Title */}
            <div className="mb-3 text-start">
                <label className="form-label">Project Title</label>
                <input
                    type="text"
                    name="projectTitle"
                    value={formData.projectTitle}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
            </div>

            {/* Project Supervisor */}
            <div className="mb-4 text-start">
                <h3 className="mb-3">Project Supervisor</h3>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        name="supervisorName"
                        value={formData.supervisorName}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Department</label>
                    <input
                        type="text"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Designation</label>
                    <input
                        type="text"
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                        type="text"
                        name="supervisorPhone"
                        value={formData.supervisorPhone}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        name="supervisorEmail"
                        value={formData.supervisorEmail}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
            </div>

            {/* Team Leader */}
            <div className="mb-4 text-start">
                <h3 className="mb-3">Team Leader</h3>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        name="teamLeader"
                        value={formData.teamLeader}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                        type="text"
                        name="leaderPhone"
                        value={formData.leaderPhone}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        name="leaderEmail"
                        value={formData.leaderEmail}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
            </div>

            {/* Team Members */}
            <div className="mb-4 text-start">
                <h3 className="mb-3">Team Members</h3>
                {formData.teamMembers.map((member, index) => (
                    <div key={index} className="card mb-3 p-3">
                        <div className="row g-3">
                            {["name", "semester", "branch", "phone", "email"].map((field) => (
                                <div key={field} className="col-md-6">
                                    <label className="form-label">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                                    <input
                                        type={field === "email" ? "email" : "text"}
                                        name={field}
                                        value={member[field]}
                                        onChange={(e) => handleMemberChange(index, e)}
                                        className="form-control"
                                        required
                                    />
                                </div>
                            ))}
                        </div>
                        <button
                            type="button"
                            onClick={() => removeMember(index)}
                            className="btn btn-danger mt-2"
                        >
                            Remove
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={addMember}
                    className="btn btn-primary"
                >
                    Add Member
                </button>
            </div>

            {/* Technical Details Form */}
            <h1 className="text-center mb-4">Technical Details Form</h1>
            {/* Title */}
            <div className="mb-3 text-start">
                <label className="form-label">Title</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
            </div>

            {/* Subject Area */}
            <div className="mb-3 text-start">
                <label className="form-label">Broad Subject Area</label>
                <input
                    type="text"
                    name="subjectArea"
                    value={formData.subjectArea}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
            </div>

            {/* Project Types (Multi-Select) */}
            <div className="mb-3 text-start">
    <label className="form-label">Project Types</label>
    <select
        name="projectTypes"
        onChange={handleProjectTypeChange}
        className="form-select"
    >
        <option value="">Select Project Type</option> {/* Placeholder option */}
        <option value="Research">Research</option>
        <option value="Development">Development</option>
        <option value="Prototype">Prototype</option>
    </select>
</div>


            {/* Textareas */}
            {["objectives", "expectedOutcomes", "abstract", "methodology", "socioeconomicSignificance", "conversionFeasibility", "equipmentRequired", "otherFacilities", "otherSupportDetails"].map((field) => (
                <div className="mb-3 text-start" key={field}>
                    <label className="form-label">{field.replace(/([A-Z])/g, " $1")}</label>
                    <textarea
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
            ))}

            {/* Submitted Elsewhere Checkbox */}
            <div className="form-check mb-3 text-start">
                <input
                    type="checkbox"
                    className="form-check-input"
                    name="submittedElsewhere"
                    checked={formData.submittedElsewhere}
                    onChange={handleChange}
                />
                <label className="form-check-label ms-2">Submitted Elsewhere?</label>
            </div>

            {/* Budget Section */}
            <div className="mb-3 text-start">
                <label className="form-label">Budget</label>
                {formData.budget.map((entry, index) => (
                    <div key={index} className="row mb-2">
                        <div className="col-md-6">
                            <input
                                type="text"
                                name="item"
                                value={entry.item}
                                onChange={(e) => handleBudgetChange(index, e)}
                                placeholder="Item"
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6">
                            <input
                                type="number"
                                name="expenditure"
                                value={entry.expenditure}
                                onChange={(e) => handleBudgetChange(index, e)}
                                placeholder="Cost"
                                className="form-control"
                            />
                        </div>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={addBudgetItem}
                    className="btn btn-secondary"
                >
                    Add Budget Item
                </button>
            </div>

            {/* Total Estimated Cost */}
            <div className="mb-3 text-start">
                <label className="form-label">Total Estimated Cost</label>
                <input
                    type="number"
                    name="totalEstimatedCost"
                    value={formData.totalEstimatedCost}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
            </div>

            {/* Submit Button */}
            <div className="text-center">
                <button type="submit" className="btn btn-success">
                    Submit Application
                </button>
            </div>
        </form>
    </div>
</div>
    );
};

export default RegistrationForm;