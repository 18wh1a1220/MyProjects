
document.getElementById("submitButton").addEventListener("click", function() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const gender = Array.from(document.querySelectorAll("input[type=checkbox]:checked")).map(input => input.value).join(", ");
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    const results = `
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Date of Birth:</strong> ${dob}</p>
      <p><strong>Country:</strong> ${country}</p>
      <p><strong>Gender:</strong> ${gender}</p>
      <p><strong>Profession:</strong> ${profession}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mobile Number:</strong> ${mobile}</p>
    `;

    document.getElementById("results").innerHTML = results;
    document.getElementById("popup").style.display = "flex";
  });

  document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("surveyForm").reset();
  });