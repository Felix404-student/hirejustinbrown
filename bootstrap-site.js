const $body = $("body");
const $navToProfile = $("#nav-profile-link");
const $navToProjects = $("#nav-projects-link");
const $navToResume = $("#nav-resume-link");
const $navToContact = $("#nav-contact-link");

const $profilePage = $("#profile-page-container");
const $projectsPage = $("#projects-page-container");
const $resumePage = $("#resume-page-container");
const $contactPage = $("#contact-page-container");

const $emailSubmit = $("#send-email-btn");
const $formName = $('#email-name');
const $formAddress = $('#email-addr');
const $formSubject = $('#email-subject');
const $formContent = $('#email-message');
const $alert = $('#email-alert');

// Hide all components for navigating to any specific page on the site
// Show desired page separately afterwards.
function hidePageComponents() {
    const components = [$profilePage, $projectsPage, $resumePage, $contactPage, $alert ];
    components.forEach((c) => c.hide());
    $(".active")[0].classList.remove("active");
}

// Site Navigation -> Profile page
function goToProfile(evt) {
    hidePageComponents();
    $profilePage.show();
    $navToProfile.addClass("active");
    console.log("go to profile");
}

$navToProfile.on("click", goToProfile);

// Site Navigation -> Projects page
function goToProjects(evt) {
    hidePageComponents();
    $projectsPage.show();
    $navToProjects.addClass("active");
    console.log("go to projects");
}

$navToProjects.on("click", goToProjects);

// Site Navigation -> Resume page
function goToResume(evt) {
    hidePageComponents();
    $resumePage.show();
    $navToResume.addClass("active");
    console.log("go to resume");
}

$navToResume.on("click", goToResume);

// Site Navigation -> Resume page
function goToContact(evt) {
    hidePageComponents();
    $contactPage.show();
    $navToContact.addClass("active");
    console.log("go to contact");
}

$navToContact.on("click", goToContact);

// Send email from contact form, with validation
function sendEmail(evt) {
    if (!$('#email-form')[0].reportValidity()) {
        return;
    }
    evt.preventDefault();

    let API = '5FF3E6A425BB9A0B15F585D98C16FA28D0D64D3B88860805D343179FB048904DB398C4F35F6AF64347C232BC69C20649';
    let port = '2525';

    const email = {
        Host: "smtp.elasticemail.com",
        Username: "dummyemailsentfromyourwebsite@gmail.com",
        Password: "52A40C79FF6002229D7EC5F1C5AB69518F2A",
        To: "justhbrown@gmail.com",
        From: $formAddress.val(),
        Subject: $formSubject.val(),
        Body: $formName.val() + ` : ` + $formContent.val()
    }
    Email.send(email).then(function () {
        $formName.val('');
        $formAddress.val('');
        $formSubject.val('');
        $formContent.val('');
        $alert.show();
        setTimeout(function(){
            $alert.hide();
        }, 3000)
        console.log(email);
    });
}

$emailSubmit.on("click", sendEmail);

// Start the site: By default we start on the profile page
$(document).ready(function () {
    hidePageComponents();
    $profilePage.show();
    $navToProfile.addClass("active");
});
