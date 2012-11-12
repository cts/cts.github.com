.wordcloud {
  template: http://www.treesheets.org/widgets/word-cloud/word-cloud.html#cloud;
  template-proxy: http://people.csail.mit.edu/eob/cts-util/fragment-proxy.php;
  data: .;
  with: word-cloud-thing;
}

.wordcloud .words {
   value: words;
}

.wordcloud .important {
   value: important;
}

.wordcloud .properties {
  with: properties;
}
.wordcloud .width {
  value: width;
}

.wordcloud .height {
  value: height;
}
