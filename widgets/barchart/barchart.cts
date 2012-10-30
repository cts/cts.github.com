.barchart {
  template: http://www.treesheets.org/widgets/barchart/barchart.html#chart;
  template-proxy: http://people.csail.mit.edu/eob/cts-util/fragment-proxy.php;
  data: .;
  with: barchart;
}

table.series {
  repeat: series;
}

table.series tr {
  repeat: elements;
}

table.series tr td {
  value: .;
}
