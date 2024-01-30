const balls = document.querySelectorAll('.ball')


setInterval(() =>
{
    balls.forEach((ball) =>
    {
        ball.style.backgroundColor = `hsl(${Math.random() * 360}, 30%, 50%)`
        ball.style.transform = `translate(${Math.random() * 100}vh, ${Math.random() * 100}vw)`

    })
}, 3000)