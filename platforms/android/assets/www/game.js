//an array that stores images and the names
var faces = [{
    src:'images/dangote.jpg',
    title:'dangote',
    hint:'richest man in 9ja',
    clue:'tdagnygvotlbuer'
},{src:'images/donjazzy.jpg',
    title:'don jazzy',
    hint:'mavin records',
    clue:'dtotnejbazdzsyc'},{src:'images/myoga.jpg',
    title:'oga at the top',
    hint:'NSCDC.thatsall',
    clue:'ogabattohestsfp'},{src:'images/2baba.jpg',
    title:'2baba',
    hint:'african queen',
    clue:'yu2bhfagdbmnixa'},{src:'images/abacha.jpg',
    title:'abacha',
    hint:'apple killed him',
    clue:'arbaurvcdidhgfa'},{src:'images/adeboye.jpg',
    title:'pst adeboye',
    hint:'can somebody shout hallelujah',
    clue:'pxswtrayfebofde'},{src:'images/adefarasin.jpg',
    title:'pst adefarasin',
    hint:'He is a Pastor',
    clue:'astpdebfasaridn'},{src:'images/awolowo.jpg',
    title:'awolowo',
    hint:'look at the cap and glasses',
    clue:'tawgotljovwonki'},{src:'images/banky.jpg',
    title:'banky w',
    hint:'capable man',
    clue:'abheansdkucywop'},{src:'images/buhari.jpg',
    title:'buhari',
    hint:'the change',
    clue:'bxcusvfhjaryrfi'},{src:'images/chimamanda.jpg',
    title:'chimamanda',
    hint:'a writer',
    clue:'cshiumadbmanvda'},{src:'images/deolasagoe.jpg',
    title:'deola sagoe',
    hint:'deola',
    clue:'dexolgasdargoce'},{src:'images/djspinall.jpg',
    title:'dj spinall',
    hint:'the cap',
    clue:'drjsapibnamluly'},{src:'images/dokubo.jpg',
    title:'asari dokubo',
    hint:'militant',
    clue:'asbarifdoktuibo'},{src:'images/fela.jpg',
    title:'fela',
    hint:'plenty wives + ganja',
    clue:'fenuyexpoungrla'},{src:'images/goodluck.jpg',
    title:'goodluck',
    hint:'ex president',
    clue:'gnoordsdlusrfck'},{src:'images/herbert.jpg',
    title:'macaulay',
    hint:'10 naira note',
    clue:'mawvcfarsulfuey'},{src:'images/honpatrick.jpg',
    title:'hon patrick',
    hint:'la honourable grammarly',
    clue:'hoenpvadtrmiuck'},{src:'images/jagaban.jpg',
    title:'jagaban',
    hint:'Tinubu nickname',
    clue:'jtagradkbadtrun'},{src:'images/kanu.jpg',
    title:'kanu',
    hint:'olympics 98 hero',
    clue:'kyritadenywvhou'},{src:'images/lagbaja.jpg',
    title:'lagbaja',
    hint:'konko below',
    clue:'layvgbiajhdavbr'},{src:'images/obasanjo.jpg',
    title:'obasanjo',
    hint:'baba iyabo',
    clue:'oybrasfyauvnjor'},{src:'images/okonjo.jpg',
    title:'okonjo',
    hint:'finance',
    clue:'oekcdgtofyvnjuo'},{src:'images/oritsejafor.jpg',
    title:'oritsejafor',
    hint:'CAN',
    clue:'oruitgsejdayfor'},{src:'images/psquare.jpg',
    title:'psquare',
    hint:'Senorita',
    clue:'pyusqdqrutgarve'},{src:'images/toolz.jpg',
    title:'toolz',
    hint:'NdaniTV',
    clue:'teovsntuiobflzs'},{src:'images/wizkid.jpg',
    title:'wizkid',
    hint:'One dance ft drake',
    clue:'awsridzyekfbind'},{src:'images/wole.jpg',
    title:'soyinka',
    hint:'nobel laurel',
    clue:'scrqotysijdnkda'}];
//used to display objects in the faces when u get the pics right
var counter = 0;
//variables used in the game
var idea;
var names;
var namesNo = 0;
var namesSplit = [];
var nice = 0;
var comment;
//array that throws jab when u get it wrong
var abuse = ["where are you from","can i see your passport","shaking my head","beht why",
            "just try again","u miss am o"];
//array that informs them that they passed
var correctG = ["You passed: you smart","You passed: you sabi","You passed: ride on","You passed: i like that",
            "You passed: keep it up","You passed: thumbs up"];

//checking users entry and pics name
function myfunction(){
if(document.getElementById("trial").value.toLowerCase() === document.getElementById("images").alt){
    counter++;
    scores += 10;
    levels += 1;
    //saving the scores to the phone
    window.localStorage.setItem('points', scores);
    scores = parseInt(window.localStorage.getItem('points'));
    //saving the stage to the phone
    window.localStorage.setItem('stages', levels);
    levels = parseInt(window.localStorage.getItem('stages'));
    //saving the counter to phone
    window.localStorage.setItem('key', counter);
    counter = window.localStorage.getItem('key');
    /////
    document.getElementById("score").innerHTML = scores;
    document.getElementById("level").innerHTML = levels;
    document.getElementById("trial").value = '';
    //document.getElementById("trial").maxLength = (namesNo + 1);
    document.getElementById("trial").focus();
    //new things
    var nice = Math.floor(Math.random() * 6);
    comment = correctG[nice];
    alert(comment);
    idea = faces[counter].clue;
    names = faces[counter].title;
    namesNo = names.length;
    document.getElementById("numbernames").innerHTML = namesNo;
    splitName();
    //end of new things
    document.getElementById("images").alt = faces[counter].title;
	document.getElementById('images').src=faces[counter].src;
    document.getElementById("result").innerHTML = " ";
    document.getElementById("help").innerHTML = " ";

} else if(document.getElementById("trial").value.toLowerCase() != document.getElementById("images").alt){
    var yab = Math.floor(Math.random() * 6);
    document.getElementById("result").innerHTML = abuse[yab]; }
}
//lets display the score
var scores = 0;
var levels = 1;
//getting help
function helperMan(){
    document.getElementById("help").innerHTML = faces[counter].hint;
}

//function that displays the first objects and passes it to the window load
function firstImage(){
    //saving the level into the phone
    if(window.localStorage.getItem('key')==null){
        window.localStorage.setItem('key', 0);
        counter = window.localStorage.getItem('key');
       } else { counter = window.localStorage.getItem('key'); }
    //end of saving level
    //saving scores to the phone
    if(window.localStorage.getItem('points')==null){
        window.localStorage.setItem('points', 0);
        scores = parseInt(window.localStorage.getItem('points'));
        document.getElementById("score").innerHTML = scores;
       } else { scores = parseInt(window.localStorage.getItem('points'));
              document.getElementById("score").innerHTML = scores; }
    //end of saving score
    //saving levels to phone
    if(window.localStorage.getItem('stages')==null){
        window.localStorage.setItem('stages', 1);
        levels = parseInt(window.localStorage.getItem('stages'));
        document.getElementById("level").innerHTML = levels;
       } else { levels = parseInt(window.localStorage.getItem('stages'));
              document.getElementById("level").innerHTML = levels; }
    document.getElementById('images').src=faces[counter].src;
    document.getElementById("images").alt = faces[counter].title;
    idea = faces[counter].clue;
    names = faces[counter].title;
    namesNo = names.length;
    document.getElementById("numbernames").innerHTML = namesNo;
  //  document.getElementById("trial").maxLength = namesNo;
    splitName();
}
window.onload = firstImage;

//displaying the name on buttons
function splitName(){
    namesSplit = idea.split("");
    for (var i = 0;i < namesSplit.length;i++){
        // trying fills the buttons
        var trying = i;
        document.getElementById(trying).value = namesSplit[i];
    }
}

//function that response to button click
function clickThing(idbutton){
    document.getElementById("trial").value += document.getElementById(idbutton).value;
}
//function that responds to space button
function addSpace(){
    document.getElementById("trial").value += " ";
}
//function that responds to backspace button
function wipeLast(){
    var wiper;
    var word;
    word = document.getElementById("trial").value;
    wiper = word.substr(0, word.length - 1)
    document.getElementById("trial").value = wiper;
}


