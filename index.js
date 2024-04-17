document
  .getElementById("survey-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Collect form data
    var formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      age: document.getElementById("age").value,
      experience: document.getElementById("experience").value,
      interests: document
        .getElementById("interests")
        .value.split(",")
        .map((item) => item.trim()),
      feedback: document.getElementById("feedback").value,
    };

    // Log form data to console (you can send it to server instead)
    console.log(formData);

    // Clear form fields
    document.getElementById("survey-form").reset();
  });
