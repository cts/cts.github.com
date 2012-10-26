/*
 * Facilitate Interactive Documentation
 *
 * This is horrible, stream-of-thought code.
 * Just so ya know.
 * If you're looking for real software engineering,
 * See the CATS repo.
 * -ted
 */

$(function() {      
  window.prettyPrint && prettyPrint()
});
 

window.GetExPart = function(name, kind) {
  var filter = "[data-exname='" + name + "'].example." + kind;
  return $(filter);
}

window.ExTemplate = function(name) {
  return window.GetExPart(name, "template");
}

window.ExData = function(name) {
  return window.GetExPart(name, "data");
}

window.ExResult = function(name) {
  return window.GetExPart(name, "result");
}

window.WrapEx = function(name) {
  var t = ExTemplate(name);
  var simple = ((typeof t.data() != "undefined") && (t.data() != null) && (t.data()["simple"] == "yes"));
  var span1 = simple ? "span1" : "span2";
  var span2 = simple ? "span8" : "span7";
  var tstr = "<div class='row example wrapper twrapper' data-exname='" + name + "'><div class='exCtrl "+span1+"'>"
  if (!simple) {
    tstr += "<h4>Template</h4>";
  }
  tstr += "<button class='templateBtn btn'>Edit</button>";
  if (!simple) {
   tstr += "<br /><button class='btn templateExtractBtn'>Extract from Result</button>";
  }
  tstr += "</div><div class='"+span2+" exInnerWrapper'></div></div>";
  var repl = $(tstr);
  t.replaceWith(repl);
  repl.find(".exInnerWrapper").append(t);

  var d = ExData(name);
  simple = ((typeof d.data() != "undefined") && (d.data() != null) && (d.data()["simple"] == "yes"));
  span1 = simple ? "span1" : "span2";
  span2 = simple ? "span8" : "span7";
  var dstr = "<div class='row example wrapper dwrapper' data-exname='" + name + "'><div class='exCtrl "+span1+" '>";
  if (!simple) {
    dstr += "<h4>Data</h4>";
  }
  dstr += "<button class='dataBtn btn'>Edit</button>";
  if (! simple) {
    dstr += "<br /><button class='btn extractBtn'>Extract from Tmpl</button>";
  }
  dstr += "</div><div class='"+span2+" exInnerWrapper'></div></div>";
  var repl = $(dstr);
  d.replaceWith(repl);
  repl.find(".exInnerWrapper").append(d);

  var r = ExResult(name);
  var repl = $("<div class='row example wrapper rwrapper' data-exname='" + name + "'><div class='exCtrl span2'><h4>Render</h4><button class='resultBtn btn'>Run</button><br /><button class='btn resultToggle'>See Rendered</button></div><div class='span7 exInnerWrapper'></div></div>");
  r.replaceWith(repl);
  repl.find(".exInnerWrapper").append(r);

}

window.EditExTemplate = function(name) {
  var tnode = window.ExTemplate(name);
  tnode.parents(".wrapper").find("button.templateBtn").text("Save");
  var template = tnode.text();
  var box = $('<textarea class="example template" data-exname="' + name + '" />');
  box.html(template);
  tnode.replaceWith(box);
}

window.EditExData = function(name) {
  var tnode = window.ExData(name);
  var type = tnode.data()["type"];
  tnode.parents(".wrapper").find("button.dataBtn").text("Save");
  var data = tnode.text();
  var box = $('<textarea class="example data" data-type="' + type + '" data-exname="' + name + '" />');
  box.html(data);
  tnode.replaceWith(box);
}

window.SaveExTemplate = function(name) {
  var tnode = window.ExTemplate(name);
  var type = tnode.data()["type"];
  tnode.parents(".wrapper").find("button.templateBtn").text("Edit");
  var template = tnode.val();
  var div = $('<pre class="prettyprint example template" data-exname="' + name + '" />');
  template = template.replace(/</g, "&lt;");
  template = template.replace(/>/g, "&gt;");
  div.html(template);
  tnode.replaceWith(div);
  window.prettyPrint();
}

window.SaveExData = function(name) {
  var tnode = window.ExData(name);
  var type = tnode.data()["type"];
  tnode.parents(".wrapper").find("button.dataBtn").text("Edit");
  var data = tnode.val();
  var div = $('<pre class="prettyprint example data" data-type="' + type + '" data-exname="' + name + '" />');
  data = data.replace(/</g, "&lt;");
  data = data.replace(/>/g, "&gt;");
  div.html(data);
  tnode.replaceWith(div);
  window.prettyPrint();
}

window.ToggleTemplate = function(e) {
  // Get wrapper
  var wrapper = $(e.target).parents(".wrapper");
  var name = wrapper.data()["exname"];
  var t = ExTemplate(name);
  if (t[0].nodeName == "PRE") {
    EditExTemplate(name);
  } else {
    SaveExTemplate(name);
  }
}

window.ToggleData = function(e) {
  // Get wrapper
  var wrapper = $(e.target).parents(".wrapper");
  var name = wrapper.data()["exname"];
  var t = ExData(name);
  if (t[0].nodeName == "PRE") {
    EditExData(name);
  } else {
    SaveExData(name);
  }
}

window.RunExample = function(e) {
  var wrapper = $(e.target).parents(".wrapper");
  var name = wrapper.data()["exname"];
  var t = ExTemplate(name);
  // Make sure template is saved
  if (t[0].nodeName != "PRE") {
    window.SaveExTemplate(name); 
    t = ExTemplate(name);
  }

  var d = ExData(name);
  // Make sure template is saved
  if (d[0].nodeName != "PRE") {
    window.SaveExData(name); 
    d = ExData(name);
  }
  // Get the template and data
  var template = $(t.text());
  var data = d.text();

  var container = $("<div id='CATSTEMP' style='display:none'></div>");
  container.append(template);
  $('body').append(container);
  
  // Translate the data
  if (d.data()["type"] == "json") {
    var cmd = "data = " + data + ";";

    cmd = cmd.replace(/\n/g, " ");
    eval(cmd);
  }
  // Evaluate
  var e = new CATS.Engine();
  e.render(template, data);
  var r = ExResult(name);
 
  var result = $("<div />").append(template).html();
  result = result.replace(/</g, "&lt;");
  result = result.replace(/>/g, "&gt;");
  
  var div = $('<pre class="prettyprint example result" data-exname="' + name + '" />');
  div.html(result);
  r.replaceWith(div);

  container.remove();

  wrapper.find("button.resultToggle").text("See Rendered");
  window.prettyPrint();
}

window.ExtractData = function(e) {
  var wrapper = $(e.target).parents(".wrapper");
  var name = wrapper.data()["exname"];

  var tmpl = ExTemplate(name);
  var e = new CATS.Engine();
  var t = $(tmpl.text());
  console.log(tmpl.text());
  var d = e.recoverData(t);
  var data = JSON.stringify(d);
  
  var tnode = window.ExData(name);
  var type = "json";
  tnode.parents(".wrapper").find("button.dataBtn").text("Edit");
  var div = $('<pre class="prettyprint example data" data-type="' + type + '" data-exname="' + name + '" />');
  data = data.replace(/</g, "&lt;");
  data = data.replace(/>/g, "&gt;");
  data = data.replace(/\\n/g, "\n");

  div.html(data);
  tnode.replaceWith(div);
  window.prettyPrint();
}

window.ExtractTemplate = function(e) {
  var wrapper = $(e.target).parents(".wrapper");
  var name = wrapper.data()["exname"];

  var tnode = ExTemplate(name);
  var res = ExResult(name);

  var e = new CATS.Engine();

  // Make sure res is html mode
  if (res[0].nodeName != "PRE") {
    window.ResultToggle(e); 
    res = ExResult(name);
  }

  data = res.text();
  console.log(data);
  //r = e.recoverTemplate(r);
  
  tnode.parents(".wrapper").find("button.templateBtn").text("Edit");
  var div = $('<pre class="prettyprint example template" data-exname="' + name + '" />');
  data = data.replace(/</g, "&lt;");
  data = data.replace(/>/g, "&gt;");

  div.html(data);
  tnode.replaceWith(div);
  window.prettyPrint();
}

window.ResultToggle = function(e) {
  var wrapper = $(e.target).parents(".wrapper");
  var name = wrapper.data()["exname"];

  var node = ExResult(name);
  var result = node.text();

  if ($(e.target).text() == "See Source") {
    var div = $('<pre class="prettyprint example result" data-exname="' + name + '" />');
    result = node.html();
    result = result.replace(/</g, "&lt;");
    result = result.replace(/>/g, "&gt;");
    div.html(result);
    node.replaceWith(div);
    window.prettyPrint();
    $(e.target).text("See Rendered");
  }
  else {
    var div = $('<div class="example result" data-exname="' + name + '" />');
    div.html(result);
    node.replaceWith(div);
    $(e.target).text("See Source");
  }
}


$(function() {
  $.each($(".example.template"), function(idx, e) {
    var name = $(e).data()["exname"];
    window.WrapEx(name);
  });
  $(".example.template").parents(".wrapper").find("button.templateBtn").click(window.ToggleTemplate);
  $(".example.data").parents(".wrapper").find("button.dataBtn").click(window.ToggleData);
  $(".example.data").parents(".wrapper").find("button.extractBtn").click(window.ExtractData);
  $(".example.template").parents(".wrapper").find("button.templateExtractBtn").click(window.ExtractTemplate);
  $(".example.result").parents(".wrapper").find("button.resultBtn").click(window.RunExample);
  $(".example.result").parents(".wrapper").find("button.resultToggle").click(window.ResultToggle);
});

window.SelectPage = function(name) {
  $.each($('.menu-primary ul li'), function(idx, elem) {
    var e = $(elem);
    if (e.attr("id") == name) {
      e.addClass("selected");
    } else {
      e.removeClass("selected");
    }
  });
};
