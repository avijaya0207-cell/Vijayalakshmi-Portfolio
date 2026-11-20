* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: #0f172a;
    color: white;
    text-align: center;
}

header {
    background: #1e293b;
    padding: 25px;
}

header h2 {
    color: #38bdf8;
    margin-bottom: 20px;
}

nav a {
    color: white;
    text-decoration: none;
    margin: 10px;
    font-size: 18px;
}

section {
    padding: 100px 20px;
}

h1 {
    color: #38bdf8;
    margin-bottom: 25px;
}

p {
    font-size: 20px;
    line-height: 1.8;
}

button, section a {
    display: inline-block;
    background: #38bdf8;
    color: #0f172a;
    padding: 15px 30px;
    border: none;
    border-radius: 30px;
    margin-top: 25px;
    text-decoration: none;
}

input, textarea {
    padding: 15px;
    margin: 10px;
    width: 80%;
    border-radius: 8px;
}

@media(max-width: 600px) {
    nav a {
        display: inline-block;
        font-size: 15px;
    }

    section {
        padding: 60px 15px;
    }
}