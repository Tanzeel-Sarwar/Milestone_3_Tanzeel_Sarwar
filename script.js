var modal = document.getElementById("resumeModal");
var openModalButton = document.getElementById("openModal");
var closeModalButton = document.getElementById("closeModal");
var resumeForm = document.getElementById("resumeForm");
var resumeOutput = document.getElementById('resumeOutput');
// Open modal when button is clicked
openModalButton.onclick = function () {
    modal.style.display = 'block';
};
// Close modal when close button is clicked
closeModalButton.onclick = function () {
    modal.style.display = 'none';
};
// Close modal when clicking outside of the modal content
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
// Form Submission
resumeForm.onsubmit = function (event) {
    var _a;
    event.preventDefault();
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var cnic = document.getElementById('cnic').value;
    var profilePictureInput = document.getElementById('profilePhoto');
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    // profile picture
    var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0]; // Get the first file if it exists
    var outputProfilePhoto = document.getElementById('outputProfilePhoto');
    if (profilePictureFile) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            outputProfilePhoto.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            outputProfilePhoto.style.display = 'block';
        };
        reader.readAsDataURL(profilePictureFile);
    }
    // output
    document.getElementById('outputName').innerHTML = "<b>Name</b> : ".concat(name);
    document.getElementById('outputEmail').innerHTML = "<b>Email</b> : ".concat(email);
    document.getElementById('outputPhone').innerHTML = "<b>Phone</b> : ".concat(phone);
    document.getElementById('outputCNIC').innerHTML = "<b>CNIC</b> : ".concat(cnic);
    document.getElementById('outputEducation').innerHTML = "<b>Education</b> : ".concat(education);
    document.getElementById('outputSkills').innerHTML = "<b>Skills</b> : ".concat(skills);
    document.getElementById('outputExperience').innerHTML = "<b>Experience</b> : ".concat(experience);
    // Show resume output and hide the modal
    resumeOutput.style.display = 'block';
    modal.style.display = 'none';
    resumeForm.reset();
};
