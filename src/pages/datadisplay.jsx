import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const DataDisplay = () => {
    const [data, setData] = useState({ registrations: [], projects: [] });

    useEffect(() => {
        axios.get("http://localhost:5000/api/fetch-data")
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Stored Data</h2>

            {/* Registration Data */}
            <h3 className="text-center mb-3">Registrations</h3>
            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Username</th>
                            <th>Institution</th>
                            <th>Project Title</th>
                            <th>Supervisor Name</th>
                            <th>Department</th>
                            <th>Designation</th>
                            <th>Supervisor Phone</th>
                            <th>Supervisor Email</th>
                            <th>Team Leader</th>
                            <th>Branch</th>
                            <th>Leader Phone</th>
                            <th>Leader Email</th>
                            <th>Title</th>
                            <th>Subject Area</th>
                            <th>Project Types</th>
                            <th>Objectives</th>
                            <th>Expected Outcomes</th>
                            <th>Abstract</th>
                            <th>Methodology</th>
                            <th>Socioeconomic Significance</th>
                            <th>Conversion Feasibility</th>
                            <th>Equipment Required</th>
                            <th>Other Facilities</th>
                            <th>Submitted Elsewhere</th>
                            <th>Other Support Details</th>
                            <th>Budget</th>
                            <th>Total Estimated Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.registrations.map((reg, index) => (
                            <tr key={index}>
                                <td>{reg.username}</td>
                                <td>{reg.institution}</td>
                                <td>{reg.projectTitle}</td>
                                <td>{reg.supervisorName}</td>
                                <td>{reg.department}</td>
                                <td>{reg.designation}</td>
                                <td>{reg.supervisorPhone}</td>
                                <td>{reg.supervisorEmail}</td>
                                <td>{reg.teamLeader}</td>
                                <td>{reg.branch}</td>
                                <td>{reg.leaderPhone}</td>
                                <td>{reg.leaderEmail}</td>
                                <td>{reg.title}</td>
                                <td>{reg.subjectArea}</td>
                                <td>{reg.projectTypes.join(", ")}</td>
                                <td>{reg.objectives}</td>
                                <td>{reg.expectedOutcomes}</td>
                                <td>{reg.abstract}</td>
                                <td>{reg.methodology}</td>
                                <td>{reg.socioeconomicSignificance}</td>
                                <td>{reg.conversionFeasibility}</td>
                                <td>{reg.equipmentRequired}</td>
                                <td>{reg.otherFacilities}</td>
                                <td>{reg.submittedElsewhere ? "Yes" : "No"}</td>
                                <td>{reg.otherSupportDetails}</td>
                                <td>
                                    {reg.budget.map((item, i) => (
                                        <div key={i}>{item.item}: ₹{item.expenditure}</div>
                                    ))}
                                </td>
                                <td>₹{reg.totalEstimatedCost}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default DataDisplay;