function validate(){
    var mycheckbox = document.getElementsByClassName("mycheckbox");

    for (var i = 0; i < mycheckbox.length; i++) {
        if (mycheckbox[i].checked) {
            document.getElementById('container').style.backgroundColor = "rgb(75, 70, 100)";
            document.getElementById('card').style.backgroundColor = "#24233b";
            document.getElementById('title2').style.color = "white";
            document.getElementById('code').style.backgroundColor = "rgb(73, 70, 92)";
            document.getElementById('code').style.color = "white";
            document.getElementById('card').style.boxShadow = "0px 10px 10px #24233b";
            document.getElementById('title').style.color = "white";
            document.body.style.backgroundColor = "white";
        } else {
            document.getElementById('container').style.backgroundColor = "white";
            document.getElementById('card').style.backgroundColor = "#d1d1d1";
            document.getElementById('title2').style.color = "black";
            document.getElementById('code').style.backgroundColor = "rgb(235, 235, 235)";
            document.getElementById('code').style.color = "black";
            document.getElementById('card').style.boxShadow = "0px 10px 10px rgb(121, 121, 121)";
            document.getElementById('title').style.color = "black";
            document.body.style.backgroundColor = "#24233b";
        }
    }
}