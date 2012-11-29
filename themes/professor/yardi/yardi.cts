#header h1                     { value:         title;         }
ul#navlist li:first-child img  { value(@src):   photoUrl;      }
ul#navlist span.title          { value:         jobTitle;      }
ul#navlist span.lab            { value:         lab;           }
ul#navlist span.school         { value:         school;        }
ul#navlist li:nth-child(2) a   { value(@href):  cvUrl;         }
ul#navlist li:nth-child(2) a   { value:         cvLinkAnchor;         }
ul#navlist span.officeAddress  { value:         officeAddress; }
span.twitterContainer          { if-exist:      twitter;       }
span.twitter                   { value:         twitter;       }
span.email                     { value:         email;         }
div#sidebar span               { if-exist:      news;          }
div.news                       { value:         news;          }
div.bio                        { value:         bio;           }
div.research                   { value:         research;      }
div.blurbText                  { value:         blurb.text     }


