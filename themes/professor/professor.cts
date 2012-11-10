.professorPage {
  with: professor;
}

.title {
  value: title;
}

.pictureLink {
  value(@href): pressPhotoUrl;
}

.picture {
  value(@src): photoUrl;
}

.publicationsWrapper {
  if-exist: publications;
}

.publicationsLink {
  value(@href): publicationsUrl;
  value: publicationsText;
}

.school {
  value(@href): schoolUrl;
  value: schoolName;
}

.lab {
  value(@href): labUrl;
  value: labName;
}

.room {
  value(@href): roomUrl;
  value: roomName;
}

.line1 {
  value(@href): line1Url;
  value: line1;
}

.building {
  value(@href): buildingUrl;
  value: building;
}

.buildingNumber {
  value(@href): buildingNumberUrl;
  value: buildingNumber;
}


.streetAddress {
  value(@href): streetAddressUrl;
  value: streetAddress;
}

.city {
  value(@href): cityUrl;
  value: city;
}

.state {
  value(@href): stateUrll;
  value: state;
}

.zip {
  value(@href): zipUrl;
  value: zip;
}

.officePhone {
  value: officePhone;
}

.fax {
  value: fax;
}

.email {
  value(@href): emailUrl;
  value: email;
}

.homepage {
  value(@href): homepageUrl;
  value: homepageName;
}

.shortlink {
  value(@href): shortlinkUrl;
}

.shortDescription {
  value: shortDescription;
}

.department {
  value(@href): departmentUrl;
  value: departmentName;
}

.jobTitle {
  value: jobTitle;
}

.school {
  value(@href): schoolUrl;
  value: schoolName;
}

.researchGroup {
  value(@href): researchGroupUrl;
  value: researchGroupName;
}

.currentPosting {
  value: currentPosting;
}

.twitter {
  value(@href): twitterUrl;
  value: twitterName;
}

.officeHours {
  .value: officeHours;
}

.labApplication {
  value(@href): labApplicationUrl;
  value: labApplicationText;
}

.schoolApplication {
  value(@href): schoolApplicationUrl;
  value: schoolApplication;
}

.resume {
  value(@href): resumeUrl;
}

.teachingBlurb {
  value: teachingBlurb;
}

.grantAcknowledgement {
  value: grantAcknowledgement;
}

.talksAndTravel {
  value: talksAndTravel;
}

.teachingStatement {
  value: teachingStatement;
}

.logos {
  repeat: logos;
}

.logoImage {
  value(@src): imageUrl;
}

.logoLink {
  value(@href): url;
}

.students {
  repeat: students;
}

.student {
  value(@href): url;
  value: name;
}

.projects {
  repeat: projects;
}

.projectLink {
  value(@href): url;
  value: name;
}
