function navBarToggle() {
  var x = document.getElementById("dropDownMenu");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

var links = {
  createLinks: function(){
    document.getElementById("home").href = "..\\html\\HomePage.html";
    document.getElementById("blogs").href = "..\\html\\Blogs-And-Articles.html";
    document.getElementById("support").href = "..\\html\\Support.html";
    document.getElementById("about").href = "..\\html\\About.html";
  }
}

var support = {
  generateSupportContent: function(){
    var introduction = `
    <p>Hi :D. If you are here then you're probably thinking about supporting my website, 
    so I am greatly appreciated for that!
    <br>
    <br>
    The Living Archive is created as a place to inspire and enrich its audience through artistic 
    and creative visual products of historical topics. Of course, I do not directly run ads
    on my homepage or my blogs because I want my audience live their experience to the fullest, 
    which is to be educated and entertained by my artworks and writing. Thus, being distracted by 
    unrelated ads will absolutely wreck havoc your experience in The Living Archives.
    <br>
    <br>
    However, there are still ways to support me! Check these following options
    <br>
    <br>
    </p>`;

    var fanArtsSupport = `<h2><b>1. Fanarts</b></h2>
    I'd really appreciated your artworks, letters or literally thing that you 
    thought it'd be cool to share to me :D.
    <br>
    All of your submissions will be posted on the "Fanarts" section of my website.
    <br>
    <br>
    <a href="https://docs.google.com/forms/d/1G5_igOkYJwB94ZATAQAN2goGcOfZA10_GDmUbkJVXdM/edit?usp=sharing" class="interactBtn">Submit here!</a>
    <br>
    <br>`;

    var donationSupport = `<h2><b>2. Donation</b></h2>
    <h3><b>a) Paypal</b></h3>
    You can give me a donation through Paypal (not available).
    <br>
    <br>    

    <h3><b>b)Watch an ad</b></h3>
    You can also watch an ad to support my website!
    <br>
    <br>
    <a class="interactBtn">Watch an ad</a>
    <br>
    <br>

    <h3><b>c) Bank transfer (Vietnamese only)</b></h3>
    If you are Vietnamese and you like my content, you can also give me a donation via my local bank
    account:
    <br>
    1018452173 - SHB - Pham Duc Loc
    <br>
    <br>`;

    var feedbackSupport = `
    <h2><b>2. Feedback</b></h2>
        Constructive criticism or feedbacks are also a great way for you to support me. This website is created by me but it is meant for you. Your feedback are the most valuable support as it 
        improve the quality of my content and makes the audience time here much more plausible. 
        <br>
        <br>
        <a href="https://forms.gle/KoM2vM6aDijzBH2q6" class="interactBtn">Fill a feedback form</a>
        <br>
        <br>
    `;

    var finalRegards = `
    I sincerely thank you! Your support will be a huge motivation for me to keep producing quality content for you to enjoy.
        <br>

        Hope you have an amazing time reading the content I posted on The Living Archives.
        <br>
        <br>    
        Regards,
        <br>   
        <br> 
        Loc Pham
    `
    document.getElementById("content-container").innerHTML = introduction + 
    fanArtsSupport + feedbackSupport + finalRegards;
  }
}

window.onload = function(){
  links.createLinks();
  support.generateSupportContent();
}


