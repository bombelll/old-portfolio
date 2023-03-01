import projects from "../config/projects.json" assert {type: 'json'};
import contact from "../config/contact.json" assert {type: 'json'};

const firstBoxImage = document.getElementById('js-firstbox-image');
const firstBoxTitle = document.getElementById('js-firstbox-title');
const firstBoxLanguage = document.getElementById('js-firstbox-language');
const firstBoxWebsite = document.getElementById('js-firstbox-website');
const firstBoxGithub = document.getElementById('js-firstbox-github');

const secondBoxImage = document.getElementById('js-secondbox-image');
const secondBoxTitle = document.getElementById('js-secondbox-title');
const secondBoxLanguage = document.getElementById('js-secondbox-language');
const secondBoxWebsite = document.getElementById('js-secondbox-website');
const secondBoxGithub = document.getElementById('js-secondbox-github');

const thirdBoxImage = document.getElementById('js-thirdbox-image');
const thirdBoxTitle = document.getElementById('js-thirdbox-title');
const thirdBoxLanguage = document.getElementById('js-thirdbox-language');
const thirdBoxWebsite = document.getElementById('js-thirdbox-website');
const thirdBoxGithub = document.getElementById('js-thirdbox-github');

const mail = document.getElementById('js-mail');
const discord = document.getElementById('js-discord');

firstBoxImage.src = `${projects.projects[0].image}`;
firstBoxTitle.innerHTML = projects.projects[0].title;
firstBoxLanguage.innerHTML = projects.projects[0].language;
firstBoxWebsite.href = `${projects.projects[0].websiteURL}`;
firstBoxGithub.href = `${projects.projects[0].githubURL}`;

secondBoxImage.src = `${projects.projects[1].image}`;
secondBoxTitle.innerHTML = projects.projects[1].title;
secondBoxLanguage.innerHTML = projects.projects[1].language;
secondBoxWebsite.href = `${projects.projects[1].websiteURL}`;
secondBoxGithub.href = `${projects.projects[1].githubURL}`;

thirdBoxImage.src = `${projects.projects[2].image}`;
thirdBoxTitle.innerHTML = projects.projects[2].title;
thirdBoxLanguage.innerHTML = projects.projects[2].language;
thirdBoxWebsite.href = `${projects.projects[2].websiteURL}`;
thirdBoxGithub.href = `${projects.projects[2].githubURL}`;

mail.innerHTML = contact.contact[0].mail;
discord.href = `${contact.contact[0].discordURL}`