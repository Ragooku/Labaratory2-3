<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Авторизация</title>
    <link rel="icon" type="favicon.svg" href="/assets/mcdonalds_0000016808.svg">
    <link rel = "stylesheet" href="style/login.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</head>
<body>
    <div class="wrapper">
        <form action="forms/actions/log.php" method="post" >
            <h1>Логин</h1>

            <div class="input-box">
                <input type="text" placeholder="Username" name="Username"  id="Username" required>
                <i class='bx bx-user'></i>
            </div>

            <div class="input-box">
                <input type="password" placeholder="Password" name="password" id="password" required>
                <i class='bx bx-lock' ></i>
            </div>

    <button type="submit" class="btn">Login</button>
            <div class="register-link">
                <p>Dont have an account? <a href="registration.php">Register</a></p>
            </div>


        </form>
    </div>
</body>
</html>