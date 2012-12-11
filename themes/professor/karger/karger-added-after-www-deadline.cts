div.karger .bookmarks { 
  if-exist: bookmarks;
  value: bookmarks;
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
