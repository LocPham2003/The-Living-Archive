function removeVietnameseTones(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
    str = str.replace(/đ/g,"d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(/ + /g," ");
    str = str.trim();
    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
    return str;
}

window.onload = function(){
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
    <button class="interactBtn">Submit here!</button>
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
    <button class="interactBtn">Watch an ad</button>
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
        <button class="interactBtn">Fill a feedback form</button>
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
  





