system.use("com.joyent.Sammy");

function render(that, temp, args){
  if (!args){ args = {};}
  
  that.partial = function(part, i){
    that.item = i || {};
    return template(part);
  }
  
  that.catch_content = template(temp);
  return template("layouts/" + (args.layout || "application.html"));
}

GET("/", function(){
  return render(this, "index.html", {layout:"docs.html"});
});

GET(/\/docs\/(.+)\/?$/, function(page){
  return render(this, "/docs/" + page + ".html", {layout:"docs.html"});
});
