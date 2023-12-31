<!DOCTYPE html>
<html>
<head>
    <title>IKC | LoginPage</title>
</head>
<style>
    /* styles.css */

body {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  background:linear-gradient(45deg,#ABDCFF,#0396FF);
  text-align: center;
  height: 95vh;
  margin: 0;
  padding: 0;
}

h1 {
  color: #333;
}

form {
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 5px;
  margin: 20px auto;
  max-width: 300px;
}

input[type="text"],
input[type="password"] {
  width: 90%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 16px;
}

button[type="submit"] {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}

a {
 display: block;
  color:black;
  background-color: #ABDCFF;
  width: 25%;
  padding: 10px;
  margin-left: 29.3rem;
  text-decoration: none;
  margin-top: 10px;
  border-radius: 12px;
}

a:hover {
  text-decoration: underline;
}

</style>
<body>
    <h1>Login</h1>
    <form action="/login" method="post">
        <input type="text" name="username" placeholder="Username" required>
        <input type="password" name="password" placeholder="Password" required>
        <button type="submit">Login</button>
    </form>
    <a href="/register">Register</a>
</body>
</html>
