//var imageURI = "";
function validateEmail() {
    var email = document.getElementById("email").value;
    var re = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    if (re.test(email)) {
        if (email.indexOf('@conestogac.on.ca', email.length - '@conestogac.on.ca'.length) !== -1) {
            alert('Submission was successful.');
        } else {
            alert('Email must be a conestoga e-mail address (your.name@conestoga.on.ca).');
		return false;
        }
    } else {
        alert('Not a valid e-mail address.');
		return false;
    }
}

//validate post
function validate(){
    var title = document.getElementById("title").value;
    var price = document.getElementById("price").value;
    var contact = document.getElementById("contact").value;
    var description = document.getElementById("description").value;
    var form = document.getElementById("postform");
    var qrcode = document.getElementById("code");

    if (title == ""){
        document.getElementById("title_error").innerHTML = "Please enter post title";
        return false;
    }else if(title !== ""){document.getElementById("title_error").innerHTML=""}
    if (price == ""){
        document.getElementById("price_error").innerHTML = "Please enter desired selling price";
        return false;
    }else if(price == !""){document.getElementById("price_error").innerHTML=""}
    if (contact == ""){
        document.getElementById("contact_error").innerHTML = "Please enter your contact";
        return false;
    }else if(contact !== ""){document.getElementById("contact_error").innerHTML=""}
    if (description == ""){
        document.getElementById("description_error").innerHTML = "Please describe your item a lil bit";
        return false;
    }else if(description !== ""){document.getElementById("description_error").innerHTML=""}
    else{ return true};
}
//end of post

var signup = document.getElementById("signup");
var signin = document.getElementById("signin");
var post = document.getElementById("post");

function showsignup(){
    document.getElementById("signinpage").style.display = "none";
    document.getElementById("postpage").style.display = "none";
    document.getElementById("signuppage").style.display = "block";
}

function showsignin(){
    document.getElementById("postpage").style.display = "none";
    document.getElementById("signuppage").style.display = "none";
    document.getElementById("signinpage").style.display = "block";
}

function showpost(){
    document.getElementById("signuppage").style.display = "none";
    document.getElementById("signinpage").style.display = "none";
    document.getElementById("postpage").style.display = "block";
}
//open homepage on app
function homepagehere(){
    window.location = "homepage.html";
}

//open search on app
function searchhere(){
    window.location = "search.html";
}

function abouthere(){
    window.location = "about.html";
}
//sending to the server for sign up
 $(document).ready(function() {
     setTimeout(function(){
         document.getElementById("splash").style.display="none";
     }, 3000);
/*
     //handling registration
            $("#registernew").submit(function() {
                    var email = document.getElementById("email").value;
                var re = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
                if (re.test(email)) {
                if (email.indexOf('@conestogac.on.ca', email.length - '@conestogac.on.ca'.length) !== -1) {
                alert('Submission was successful.');
                document.getElementById("signuppage").style.display = "none";
                document.getElementById("signinpage").style.display = "none";
                document.getElementById("postpage").style.display = "none";
                //Send the serialized data to mailer.php.
                $.post("http://ec2-34-198-155-79.compute-1.amazonaws.com/signuptest.php", $("#registernew").serialize(),
                    //Take our repsonse, and replace whatever is in the "formResponse"
                    //div with it.

                    function(data) {
                    $("#registernew").html( $("#registerresponse").html() );
                    }
                );
                return false;} else {
                alert('Email must be a conestoga e-mail address (your.name@conestoga.on.ca).');
		          return false;
                }
                    } else {
                    alert('Not a valid e-mail address.');
		          return false;
                }
            });
     //handling post
                 $("#postman").submit(function() {
                    var title = document.getElementById("title");
                    var price = document.getElementById("price");
                    var contact = document.getElementById("contact");
                    var description = document.getElementById("description");
                    var form = document.getElementById("postform");
                    var qrcode = document.getElementById("code");

                    if (title.value == ""){
                    document.getElementById("title_error").innerHTML = "Please enter post title";
                    return false;
                    }else if(title.value !== ""){document.getElementById("title_error").innerHTML=""}
                    if (price.value == ""){
                    document.getElementById("price_error").innerHTML = "Please enter desired selling price";
                    return false;
                    }else if(price.value == !""){document.getElementById("price_error").innerHTML=""}
                    if (contact.value == ""){
                    document.getElementById("contact_error").innerHTML = "Please enter your contact";
                    return false;
                    }else if(contact.value !== ""){document.getElementById("contact_error").innerHTML=""}
                    if (description.value == ""){
                    document.getElementById("description_error").innerHTML = "Please describe your item a lil bit";
                    return false;
                    }else if(description.value !== ""){document.getElementById("description_error").innerHTML=""}
                    else{
                        document.getElementById("signuppage").style.display = "none";
                        document.getElementById("signinpage").style.display = "none";
                        document.getElementById("postpage").style.display = "none";
                      //  alert("Succesful");
                    //Send the serialized data to mailer.php.
                        $.post("http://ec2-34-198-155-79.compute-1.amazonaws.com/savepost.php", $("#postman").serialize(),
                    //Take our repsonse, and replace whatever is in the "formResponse"
                    //div with it.
                        function(data) {
                        $("#postman").html( $("#registerresponse").html() );
                            }
                        );
                        return false;
                        }
                    });*/
               //check if user is signed in
                var checkloggedin = localStorage.getItem('email');
                var checklogstatus = localStorage.getItem('login');
                if (checkloggedin != "" && checklogstatus == "true"){
                    document.getElementById("post").style.display = "block";
                    document.getElementById("anotherspace").style.display = "block";
                } else {document.getElementById("post").style.display = "none";
                       document.getElementById("post").style.display = "none";}
 });

//trying to logout
function logout(){
    localStorage.setItem('login', 'false');
    location.reload();
}


//trying latest sign-in
function signingin(){
var email=$("#signemail").val();
var password=$("#signpassword").val();
var dataString="email="+email+"&password="+password+"&login=";
if($.trim(email).length>0 & $.trim(password).length>0)
{   $.ajax({
    type: "POST",
    url: "http://ec2-34-198-155-79.compute-1.amazonaws.com/signintestmobile.php",
    data: dataString,
    crossDomain: true,
    cache: false,
    success: function(data){
        if(data=="success")
            {
               alert("You are logged in");
                document.getElementById("post").style.display = "block";
                document.getElementById("anotherspace").style.display = "block";
                document.getElementById("signinpage").style.display = "none";
                localStorage.setItem('login', 'true');
                localStorage.setItem('email', email);
                //localStorage.email=email;
               // window.location.href = "index.html";
            }
else { alert("Login error");
     // $("#login").html('Login');
        }
    }
});
}return false;
};
//end of new sign in test

//opening homepage
function openhomepage(){
    window.open("http://ec2-34-198-155-79.compute-1.amazonaws.com/homepage.php", '_blank', 'location=yes')
}

//opening app scanner
function openscanner(){
   cordova.plugins.barcodeScanner.scan(
      function (result) {
          var link = result.text;
           window.open(link, '_blank', 'location=yes')
      },
      function (error) {
          alert("Scanning failed: " + error);
      });
}

function posted(){
$("#postman").submit(function(e)
{
    var postData = $("#postman").serialize();
    var formURL = "http://ec2-34-198-155-79.compute-1.amazonaws.com/savepost.php";
    $.ajax(
    {
        url : formURL,
        type: "POST",
        data : postData,
        success:function(data, textStatus, jqXHR)
        {
            //data: return data from server
            $("#resp").html(data);
            document.getElementById("title").value = "";
            document.getElementById("price").value = "";
            document.getElementById("contact").value = "";
            document.getElementById("description").value = "";
        },
        error: function(jqXHR, textStatus, errorThrown)
        {
            //if fails
        }
    });
    e.preventDefault(); //STOP default action
   // e.unbind(); //unbind. to stop multiple form submit.

});
//$("#postman").submit(); //Submit  the FORM
}

function registerman(){
        var email = document.getElementById("email").value;
    var re = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    if (re.test(email)) {
        if (email.indexOf('@conestogac.on.ca', email.length - '@conestogac.on.ca'.length) !== -1) {
            $("#registernew").submit(function(e)
                                     {
    var postData = $("#registernew").serialize();
    var formURL = "http://ec2-34-198-155-79.compute-1.amazonaws.com/signuptest.php";
    $.ajax(
    {
        url : formURL,
        type: "POST",
        data : postData,
        success:function(data, textStatus, jqXHR)
        {
            //data: return data from server
            alert(data);
        },
        error: function(jqXHR, textStatus, errorThrown)
        {
            //if fails
        }
    });
    e.preventDefault(); //STOP default action
   // e.unbind(); //unbind. to stop multiple form submit.

});
//$("#postman").submit(); //Submit  the FORM
        } else {
            alert('Email must be a conestoga e-mail address (your.name@conestoga.on.ca).');
		return false;
        }
    } else {
        alert('Not a valid e-mail address.');
		return false;
    }
}

//selecting picture to submit
    function getPhoto() {
      // Retrieve image file location from specified source
      navigator.camera.getPicture(onPhotoURISuccess, function(message) {
 alert(message);
 }, { quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY });
    }

    function onPhotoURISuccess(imageURI) {
        // Show the selected image
        document.getElementById("imageselected").innerHTML = "Image selected";
        var smallImage = document.getElementById('smallImage');
        smallImage.src = imageURI;
    }

    function uploadPhoto() {
        //validating the form
                    validate();
                    var postedby = localStorage.getItem('email');

                 if(!imageURI){
                     document.getElementById("loading").innerHTML = "Loading...pls wait";
                     document.getElementById("submitgif").style.display = "block";
                 //
                     var dataString2 = { 'postedby' : postedby, 'title' : $('#title').val(), 'price' : $('#price').val(), 'contact' : $('#contact').val(), 'description' : $('#description').val() }
                     $.ajax({
type: "POST",
url: "http://ec2-34-198-155-79.compute-1.amazonaws.com/savepostmobilenophoto.php",
dataType: "json",
data: dataString2,
crossDomain: true,
cache: false,
success: function(data){
if(data=="success")
{
         document.getElementById("submitgif").style.display = "none";
alert("Posted successfully");
         document.getElementById("loading").innerHTML = "";
         document.getElementById("title").value = "";
         document.getElementById("price").value = "";
         document.getElementById("contact").value = "";
         document.getElementById("description").value = "";
     document.getElementById("imageselected").innerHTML = "";
}
else {
         document.getElementById("submitgif").style.display = "none";
alert("Posting failed");
         document.getElementById("loading").innerHTML = "";
         document.getElementById("title").value = "";
         document.getElementById("price").value = "";
         document.getElementById("contact").value = "";
         document.getElementById("description").value = "";
     document.getElementById("imageselected").innerHTML = "";
        }
    }
});
    }else{

        document.getElementById("loading").innerHTML = "Loading...pls wait";
        document.getElementById("submitgif").style.display = "block";
        var imageURI = document.getElementById('smallImage').getAttribute("src");
        var options = new FileUploadOptions();
        options.fileKey = "file";
        options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
        options.mimeType = "image/jpeg";
        options.chunkedMode = true;
        //console.log(options.fileName);
        var params = new Object();
        params.postedby = postedby;
        params.title = $("#title").val();
        params.price = $("#price").val();
        params.contact = $("#contact").val();
        params.description = $("#description").val();
        params.imageurl = imageURI.substr(imageURI.lastIndexOf('/') + 1);
options.params = params;

var ft = new FileTransfer();
 ft.upload(imageURI, "http://ec2-34-198-155-79.compute-1.amazonaws.com/savepostmobile.php", function(result){
     document.getElementById("submitgif").style.display = "none";
    alert("Post Submitted");
         document.getElementById("loading").innerHTML = "";
         document.getElementById("title").value = "";
         document.getElementById("price").value = "";
         document.getElementById("contact").value = "";
         document.getElementById("description").value = "";
     document.getElementById("imageselected").innerHTML = "";
 }, function(error){
// console.log(JSON.stringify(error));
 }, options);
                    }
 }


