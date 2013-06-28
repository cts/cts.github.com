div.karger h1 { 
  value:         title;         
}

div.karger > table tr:first-child td:first-child a img {
  value(@src):   photoUrl;
}

div.karger  div.officeAddress {
  value: officeAddress;
}

div.karger  .lab {
  value: lab;
}

div.karger  address > a:first-child {
  value: school;
}

div.karger  .mail {
  value: email;
}

div.karger .bio {
  value: bio;
}

div.karger .research {
  value: research;
}

div.karger > p:nth-child(3) > a {
  value(@href):  cvUrl;
}

div.karger .blurb {
  value: blurb.text;
}

div.karger .projects {
  repeat: projects
}

div.karger .projects li a {
  value(@href): url;
  value: name;
}
