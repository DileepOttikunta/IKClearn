<!DOCTYPE html>
<html>
<head>
    <title>IKC | Dashboard</title>
</head>

<style>
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
body{
    
     width: 100%;
    height: auto;
    background: linear-gradient(45deg,dodgerblue,deeppink);
}
.parent{
    width: 100%;
    height: 110vh;
    background: linear-gradient(45deg,#00FFED,#00BBBA,#3a3985,#6454F0);
    display: flex;
    justify-content: space-between;
}
.one{
    margin: 10px;
    width: 20%;
    height: 95vh;
    background-color: aliceblue;
    border-radius: 12px;
    overflow: auto;
}
.content{
    margin-left: 20px;
    margin-top: 10px;
    width: 80%;
    height: 95vh;
    background-color: aliceblue;
    border-radius: 12px;
   
}
h3{

    
    padding: 10px;
    text-align: center;
    background-color: black;
    color: aliceblue;
    border-radius: 12px  12px 0 0;
}
li{
    list-style: none;
    padding: 6px;
    border-bottom: 2px solid deeppink;
}
a{
    color:dodgerblue;
    text-decoration: none;
   
  
}
video{
    position: relative;
    margin: 10px;
    bottom: 50px;
    width: 98%;
    height: 85vh;
    border-radius: 12px;
    border: 2px solid dodgerblue;
    
}
#progressBar{
    display: none; /* Hide the default progress bar */
}

#progressContainer {
    width: 30px;
    height: 30px;
    border: 4px solid #ccc;
    border-radius: 50%;
    position: relative;
    bottom: 45px;
    margin: 10px;
}

#progressCircle {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    clip: rect(0, 50px, 100px, 0);
    position: absolute;
    background: conic-gradient(deeppink 0%, dodgerblue 0%);
    transform: rotate(90deg);
}

#progressLabel {
    text-align: center;
    position: absolute;
    left: 2rem;
}
.one::-webkit-scrollbar{
 display: none;
}

.info{

display: flex;
justify-content: space-between;
padding: 10px;
}
.exit{
    color: whitesmoke;
    background-color: black;
    padding: 6px;
    border-radius: 6px;
}
.Entername{
    color: aliceblue;
}
span{
    color: yellow;
}
iframe{
    width: 100%;
    height: 100vh;
}
</style>
<body>



    <div class="info">
        <p class="Entername">Hello,<span> <%= user.username %>!</span> </p>
        <a href="/logout" class="exit">Logout</a>
    
    </div>
   

<iframe src="https://dileepottikunta.github.io/LearningHub/" frameborder="0"></iframe>
</body>
</html>
