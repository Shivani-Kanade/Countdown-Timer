* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', sans-serif;
}

.main {
    width: 100%;
    height: 100vh;
    background: url("wallpaper.jpg") center center;
    background-size: cover;
}

.overlay {
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.65);
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 80px;
}

.title {
    color: white;
    text-align: center;
    font-size: 3rem;
    font-weight: 600;
    letter-spacing: 2px;
    margin-top: 10px;
}

#dateInput {
    margin-top: 35px;
    width: 280px;
    height: 48px;
    padding: 10px 15px;
    border: none;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.9);
    color: #333;
    font-size: 16px;
    outline: none;
}

button {
    margin-top: 15px;
    padding: 12px 28px;
    border: none;
    border-radius: 10px;
    background: #ffffff;
    color: #222;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
}

button:hover {
    transform: translateY(-2px);
    background: #eeeeee;
}

#endDate {
    margin-top: 35px;
    font-size: 1.5rem;
}

.col {
    margin-top: 45px;
    width: 90%;
    display: flex;
    justify-content: center;
    gap: 25px;
    color: white;
}

.col div {
    width: 150px;
    padding: 25px 10px;
    text-align: center;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.col input {
    height: 65px;
    width: 100%;
    background: transparent;
    border: none;
    color: white;
    font-size: 42px;
    font-weight: 600;
    text-align: center;
    outline: none;
}

.col label {
    display: block;
    margin-top: 8px;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #ddd;
}
