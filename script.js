var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+919692144825'> <div class='socialItem' id='call'><img class='socialItemI' src='phone.png'/><label class='number'>9692144825</label></div> </a> <a href='mailto:rohitkumarmuna@gmail.com'> <div class='socialItem'><img class='socialItemI' src='gmaill.png' alt=''></div> </a> <a target='_blank' href='https://github.com/rohit202010052'> <div class='socialItem'><img class='socialItemI' src='github.png' alt=''></div> </a> <a target='_blank' href='https://wa.me/7656979787'> <div class='socialItem'><img class='socialItemI' src='whatsapp.png' alt=''></div> </a> <a target='_blank' href='https://t.me/RohitKumar'> <div class='socialItem'><img class='socialItemI' src='teligram.jpg' alt=''></div> </a> <a target='_blank' href='https://www.instagram.com/_iamrk_rohit/'> <div class='socialItem'><img class='socialItemI' src='instagram.jpg' alt=''> </div> </a> <a href='https://www.linkedin.com/in/r-rohit-kumar-202010052r/' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='linkdin.png' alt=''></div> </a> </div>";
var resumeString = "<img src='resume.jpg' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='pdf.png'><label>R ROHIT KUMAR Resume Main(1).pdf</label></div><a href='C:\Users\HP\OneDrive\Documents\OASIS LEVEL 1 TASK 2\R ROHIT KUMAR Resume Main (1).pdf' download='C:\Users\HP\OneDrive\Documents\OASIS LEVEL 1 TASK 2\R ROHIT KUMAR Resume Main (1).pdf'><img class='download' src='downloading.png'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://goo.gl/maps/ACVb53RxWqvMZJp68' class='map'></iframe></div><label class='add'><address> 'RLY Station Road'<br>Ganjam<br>Chatrapur, Odisha, INDIA 761020</address>";
function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>R ROHIT KUMAR</a>.</span><br><br>I am a Computer Engineering student at <span class='bold'>Nationl Institue Of Science And Technology 👨🏻‍💻📚 <br><br> Web Developer | Tech Enthusiast | Achiver | Game Developer <br></span><br><br>I have always strived to involve my self in building quality products that could encapsulate changes and work with superfast performance.<br>I have strong passion to know things behind.<br>In short about myself, I have strong background on computer science fundamentals data structures, algorithms and design patterns.<br>I love to solve problems and am highly passionate on Technologies. <br> & I am eager to hear about potential career opportunities, so I would be pleased to chat about job openings in the engineering sphere.<br><br>Send <span class='bold'>'tell me about yourself'</span> to know more about me.<br>");
            }, 2000);
            break;
        case "tell me about yourself":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'address'</span> - to get my address<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'coading skills'</span> - to get details of my coading skills<br><span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'about'</span> - to know about this site</span>");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "skills":
            sendTextMessage("<span class='sk'>I am currently pursuing B.Tech degree in Computer Science Engineering.<br><br>I can comfortably write code in following languages :<br><span class='bold'>Java<br>C++<br>C<br>python<br>Java script<br>Kotlin<br>Dart<br>SQL<br>CSS<br>C#<br>HTML</span><br><br>I've experiance with following frameworks :<span class='bold'><br>Android<br>Flutter<br>ReactJs<br>NodeJs<br>AI<br>Game devlopment</span><br><br>I use <span class='bold'>Windows & Linux</span> as daily driver on my HP Pavilion 15-ec0xxx<br>OS: Windows<br>Favourite IDE:VSCode</span>");
            break;

        case "education":
            sendTextMessage("I am currently pusuing B.Tech degree in Computer Science Engineering from National Institue Of Science And Technology<br> Currently 3rd Year <br>Passing Year : 2024<br>CGPA upto 2nd Year: 8.6 <br><br>I have completed my Intermediate from Government Khalikote junior college<br>Passing Year:2020<br>Result:65.11%<br><br>I have completed my Matriculation form Atomic Energy Central School(OSCOM)<br>Passing Year:2018<br>Result:90%");
            break;

        case "address":
            sendTextMessage(addressString);
            break;
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("🛠️💻 This portfolio website is built using HTML, CSS and JavaScript from SCRATCH!<br><br>👨🏻‍💻 Designed and Developed by <a class='alink' target='_blank' href='https://www.instagram.com/_iamrk_rohit/'><span class='bold'>R ROHIT KUMAR</a></span>");
            break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "projects":
            sendTextMessage("You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/rohit202010052'> <div class='socialItem'><img class='socialItemI' src='github.png' alt=''></div> </a></div>");
            break;
        case "coading skills":
                sendTextMessage("You want to check my Coading skills? Then just jump into my Hacker rank Account & Codechef Account.<br><br><div class='social'><a target='_blank' href='https://www.hackerrank.com/rkb020'> <div class='socialItem'><img class='socialItemI' src='hackerrank.png' alt=''><br><div class='social'><a target='_blank' href='https://www.codechef.com/users/rohit_20210052/'> <div class='socialItem'><img class='socialItemI' src='codechef.jpg' alt=''></div> </a></div>");
            break;
        case "new":
            sendTextMessage(addressString);
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you...😢<br>Send 'help' to know more about usage.");
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}