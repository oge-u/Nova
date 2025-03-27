document.addEventListener("DOMContentLoaded", () => {
    const quoteForm = document.getElementById("quoteForm");
    const estimateResult = document.getElementById("estimateResult");

    quoteForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const projectType = document.getElementById("projectType").value;
        const size = parseFloat(document.getElementById("size").value);
        const budget = parseFloat(document.getElementById("budget").value);

        if (!size || !budget) {
            estimateResult.innerHTML = "<p style='color: red;'>Please enter valid size and budget.</p>";
            return;
        }

        let costPerSqm;
        if (projectType === "residential") costPerSqm = 100000;
        else if (projectType === "commercial") costPerSqm = 150000;
        else costPerSqm = 200000;

        const estimatedCost = size * costPerSqm;

        estimateResult.innerHTML = `
            <p><strong>Estimated Project Cost: ₦${estimatedCost.toLocaleString()}</strong></p>
            <p>This is an auto-generated estimate. A staff member will contact you shortly.</p>
        `;

        // Send Email using EmailJS
        sendEmail(name, phone, email, projectType, size, budget, estimatedCost);
    });

    function sendEmail(name, phone, email, projectType, size, budget, estimatedCost) {
    // Send email to the user
    emailjs.send("service_9px4i5a", "template_qvjy1iv", {
        name: name,
        email: email,
        project_type: projectType,
        size: size,
        budget: `₦${budget.toLocaleString()}`,
        estimated_cost: `₦${estimatedCost.toLocaleString()}`
    })
    .then(response => {
        console.log("User confirmation email sent!", response);
    })
    .catch(error => {
        console.error("Error sending user email:", error);
    });

    // Send email to the admin
    emailjs.send("service_9px4i5a", "template_a30tews", {
        name: name,
        phone: phone,
        email: email,
        project_type: projectType,
        size: size,
        budget: `₦${budget.toLocaleString()}`,
        estimated_cost: `₦${estimatedCost.toLocaleString()}`
    })
    .then(response => {
        console.log("Admin notification email sent!", response);
    })
    .catch(error => {
        console.error("Error sending admin email:", error);
    });

    }
});