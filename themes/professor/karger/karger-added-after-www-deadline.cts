div.karger div.bookmarks { 
  if-exist: bookmarks;  
}

div.karger .url {
  if-exist: url;
  value: url;
  value(@href): url;
}

div.karger .otherlink {
  if-exist: otherlink;
  value: url;
  value(@href); url;
}
