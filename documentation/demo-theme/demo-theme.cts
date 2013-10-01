@css relative(demo-theme.css);
@html theme relative(demo-theme.html);

body | #body :graft theme | #body;

theme | #title :is body | body > h1;

theme | #content :are body | main;

theme | article header h1 :is body | main section h1;

theme | article div.entry-content :is body | main section > div;

