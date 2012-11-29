div.kolko h1 { value: title; }
div.kolko span.email { value: email; }
div.kolko span.jobTitle { value: jobTitle; }
div.kolko a.lab { value: lab; value(@src): labLink; }
div.kolko img.photo { value(@src): photoUrl; }
div.kolko div.background { value: background; }
div.kolko div.research { value: research; }
div.kolko span.bio { value: bio; }
div.kolko div.projectsContainer { if-exist: projects; }
div.kolko div.publicationsContainer { if-exist: publications; }
div.kolko span.nick { value: labAcronym; }
div.kolko div.projects div { repeat: projects; }
div.kolko div.projects div a { value: name; value(@href): url; }

