div.landay h2                             { value:         title;         }
div.landay span.jobTitle                  { value:         jobTitle;      }
div.landay span.school                    { value:         school;        }
div.landay div.email                      { value:         email;         }
div.landay span.address:first-child       { value:         officeAddress; }
div.landay span.address:last-child        { value: officeHours            }
div.landay > table:nth-child(3) tr:first-child td:first-child img { value(@src):   photoUrl;      }
div.landay .bio  { value:         bio;      }
div.landay .history { value:         history;      }
div.landay span.research { value:         research;      }
div.landay > table:nth-child(3) tr:first-child td:nth-child(3) p:last-child { if-exist: blog; value(@href): blog.url;  }
div.landay > table:nth-child(3) tr:first-child td:nth-child(2) p:first-child a:first-child { value:         lab;    value(@href): labUrl;      }
div.landay > table:nth-child(5) tr:first-child td:first-child a:first-child { if-exist: labLogo; value(@href):  labUrl }
div.landay > table:nth-child(5) tr:first-child td:first-child a:first-child img {  value(@src):  labLogo }
div.landay > table:nth-child(5) tr:first-child td:nth-child(2) small a:first-child { value(@href): schoolUrl; }
div.landay > table:nth-child(5) tr:first-child td:nth-child(2) small a:nth-child(2) { value(@href): labUrl; }
div.landay .labAcronym { value: labAcronym; }
