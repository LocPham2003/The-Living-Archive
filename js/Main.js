function navBarToggle() {
  var x = document.getElementById("dropDownMenu");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

window.onload = function(){
  //Made the html more dynamic
  let arr = [
    "C:\\Users\\Pham Loc Duc\\Desktop\\VisualStudioProjects\\Website\\css\\UniversalVisualElements.css",
    "C:\\Users\\Pham Loc Duc\\Desktop\\VisualStudioProjects\\Website\\css\\Support-Design.css",
    "C:\\Users\\Pham Loc Duc\\Desktop\\VisualStudioProjects\\Website\\css\\HomePageDesign.css",
    "C:\\Users\\Pham Loc Duc\\Desktop\\VisualStudioProjects\\Website\\css\\Blogs-And-Articles-Design.css",
    "C:\\Users\\Pham Loc Duc\\Desktop\\VisualStudioProjects\\Website\\css\\Support-Design.css",
    "C:\\Users\\Pham Loc Duc\\Desktop\\VisualStudioProjects\\Website\\css\\About-Design.css",
    "https://fonts.googleapis.com/css?family=Andada+Pro|Roboto|Uchen",
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"];
    
    
    for (var i = 0; i < arr.length; i++){
      var universalDesign = document.createElement('link');
      
      universalDesign.rel = "stylesheet";
      universalDesign.href = arr[i];
      
      document.getElementsByTagName('HEAD')[0].appendChild(universalDesign);
    }
    
    document.getElementById("home").href = "C:\\Users\\Pham Loc Duc\\Desktop\\VisualStudioProjects\\Website\\html\\HomePage.html";
    document.getElementById("blogs").href = "C:\\Users\\Pham Loc Duc\\Desktop\\VisualStudioProjects\\Website\\html\\Blogs-And-Articles.html";
    document.getElementById("support").href = "C:\\Users\\Pham Loc Duc\\Desktop\\VisualStudioProjects\\Website\\html\\Support.html";
    document.getElementById("about").href = "C:\\Users\\Pham Loc Duc\\Desktop\\VisualStudioProjects\\Website\\html\\About.html";
  
    document.getElementById("content-container").innerHTML = "Hi";
  }


