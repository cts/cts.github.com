.wordcloud {
  template: http://www.treesheets.org/widgets/word-cloud/word-cloud.html#cloud;
  template-proxy: http://people.csail.mit.edu/eob/cts-util/fragment-proxy.php;
  data: .;
  with: WordCloud;
}

.wordcloud .words {
   value: words;
}

.wordcloud .important-words {
   value: important;
}

.wordcloud .width {
  value: width;
}

.wordcloud .height {
  value: height;
}
