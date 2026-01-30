const botao = document.getElementById("surpresaBtn");
const mensagem = document.getElementById("mensagem");
const musica = document.getElementById("musica");
const fotos = document.querySelectorAll(".foto");

botao.addEventListener("click", () => {
    mensagem.classList.remove("escondido");

    fotos.forEach(foto => {
        foto.classList.remove("escondido");
    });

    musica.play();

    for (let i = 0; i < 90; i++) {
        criarConfete();
    }

    botao.style.display = "none";
});

function criarConfete() {
    const confete = document.createElement("div");
    confete.classList.add("confete");

    confete.style.left = Math.random() * window.innerWidth + "px";
    confete.style.backgroundColor =
        `hsl(${Math.random() * 360}, 100%, 70%)`;

    document.body.appendChild(confete);

    setTimeout(() => confete.remove(), 3000);
}
