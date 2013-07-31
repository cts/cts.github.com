html {
  with: blog;
}

title {
  value: title;
}

#logo h2 {
  value: subtitle;
}

#container {
  repeat-inner: posts;
}

.title-link {
  attr: href,link;
  value: title;
}

.post {
 
  .author {
    value: author.name;
  }

  .date {
    value: date;
  }

  .comment-count {
    value: comment_count;
  }

  ul.categories {
    repeat-inner: categories;
  }   
  
  ul.tags {
    repeat-inner: tags;
  }

  .post-body {
    value: body;
  }

}

.sidebar {
  .recent {
    repeat-inner: recent_posts;
  }
}
