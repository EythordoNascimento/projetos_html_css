// Toggle Password Visibility
const passwordToggle = document.querySelector('.security a:first-of-type');
const passwordField = document.querySelector('.security p:first-of-type strong');

passwordToggle.addEventListener('click', (e) => {
  e.preventDefault();
  if (passwordField.textContent === '*******') {
    passwordField.textContent = 'mypassword'; // Replace with the actual password
  } else {
    passwordField.textContent = '*******';
  }
});

// Add Profile
const addProfileLink = document.querySelector('.profiles a:last-of-type');
const profilesList = document.querySelector('.profiles ul');

addProfileLink.addEventListener('click', (e) => {
  e.preventDefault();
  const newProfile = prompt('Enter a name for the new profile:');
  if (newProfile) {
    const newProfileLi = document.createElement('li');
    const profileName = document.createElement('span');
    profileName.textContent = newProfile;
    const manageLink = document.createElement('a');
    manageLink.href = '#';
    manageLink.textContent = 'Manage';
    newProfileLi.appendChild(profileName);
    newProfileLi.appendChild(manageLink);
    profilesList.appendChild(newProfileLi);
  }
});