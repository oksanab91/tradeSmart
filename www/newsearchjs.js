function loadsearch(){
var basicUrl = "http://ec2-34-198-155-79.compute-1.amazonaws.com/mobilesearchjson.php?search=";
var searchWord = document.getElementById("searchFilter").value;
var mainUrl = basicUrl+searchWord;
$.post(mainUrl, function (result) {

        var obj = JSON.parse(result);
                for (var i = 0; i < obj.length; i++){
                    //dynamically add text
                    var postdiv = document.createElement("div");

                    //dynamically add images
                    var images = document.createElement("img");
                    images.setAttribute("src", obj[i].postimage);
                    images.setAttribute("width", "100%");
                    postdiv.appendChild(images);

                    //dynamically add title
                    var title = document.createElement("p");
                    var titletext = document.createTextNode("Title: " + obj[i].title);
                    title.appendChild(titletext);
                    postdiv.appendChild(title);
                    //document.body.appendChild(title);

                    //dynamically add price
                    var price = document.createElement("p");
                    var pricetext = document.createTextNode("Price: " + obj[i].price);
                    price.appendChild(pricetext);
                    postdiv.appendChild(price);

                    //dynamically add contact
                    var contact = document.createElement("p");
                    var contacttext = document.createTextNode("Contact: " + obj[i].contact);
                    contact.appendChild(contacttext);
                    postdiv.appendChild(contact);

                    //replace tag <br> with new line
                    var desc = '<br>' + obj[i].description;
                    desc = desc.replace(new RegExp('<br>', 'g'), '\n');

                    //dynamically add description
                    var description = document.createElement("p");
                    var descriptiontext = document.createTextNode("Description: " + desc);
                    description.appendChild(descriptiontext);
                    postdiv.appendChild(description);


                    // attach the div to the body
                    document.body.appendChild(postdiv);

                }

            }
        );
}
