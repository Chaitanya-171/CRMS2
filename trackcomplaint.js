function trackComplaint() {
    let complaintId = document.getElementById("complaintId").value.trim();
    let statusResult = document.getElementById("statusResult");

    if (complaintId === "") {
        alert("Please enter a valid Complaint ID.");
        return;
    }

    // Dummy data for now, replace with actual API/database later
    let statusData = {
        "12345": "Pending",
        "67890": "Under Investigation",
        "11111": "Resolved"
    };

    if (statusData[complaintId]) {
        statusResult.innerHTML = `<p><strong>Status:</strong> ${statusData[complaintId]}</p>`;
        statusResult.className = "status-valid"; // Green background
    } else {
        statusResult.innerHTML = `<p>Complaint ID not found.</p>`;
        statusResult.className = "status-invalid"; // Red background
    }

    statusResult.style.display = "block"; // Show the section
}
