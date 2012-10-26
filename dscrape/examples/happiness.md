---
layout: page
title: "Buying Happiness - DScrape Example"
group: primary
---

In 2010, the Wall Street Journal published an article titlted [What Salary
Buys Happiness in Your
City?](http://blogs.wsj.com/economics/2010/09/07/what-salary-buys-happiness-in-your-city/).
It was a reaction to a study claiming that $75,000 a year is income
threshold after which additional income does not measurably increase
happiness. The article contains a table which lists cities, their cost of
living index score, and the $75,000 threshold value adjusted to reflect the
cost of living.

It would be interesting to download this data set so that we do further
analysis. Say, compare these numbers to the average income for each city.
This example shows how CATS can help extract the data from the article.

### Running

1.   Download the [Happiness CATS Sheet](happiness.cts)
2.   Run `dscrape happiness.cts http://blogs.wsj.com/economics/2010/09/07/what-salary-buys-happiness-in-your-city/`

### CATS Sheet

<pre class="prettyprint">
table#mySortableTable tbody {
  repeat-inner: cities;
}

table#mySortableTable tbody tr td:nth-child(1) {
  value:city;
}

table#mySortableTable tbody tr td:nth-child(2) {
  value:state;
}

table#mySortableTable tbody tr td:nth-child(3) {
  value:costOfLivingIndex;
}

table#mySortableTable tbody tr td:nth-child(4) {
  value:happinessThreshold;
}
</pre>

### Example Output

Note that the CATS sheet above grabs the table headers as well.

<pre class="prettyprint">
cities: 
  - 
    city:               <strong>Metro Area</strong>
    state:              <strong>State</strong>
    costOfLivingIndex:  <strong>Cost of Living Index</strong>
    happinessThreshold: <strong>Happiness Threshold</strong>
  - 
    city:               Abilene
    state:              TX
    costOfLivingIndex:  86
    happinessThreshold: $64,500
  - 
    city:               Akron
    state:              OH
    costOfLivingIndex:  96
    happinessThreshold: $72,000
  - 
    city:               Albany
    state:              GA
    costOfLivingIndex:  88
    happinessThreshold: $66,000
</pre>
