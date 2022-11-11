const audios = ["Warriors", "Shots", "Sharks", "Bones", "Birds", "It's Time"];

audios.forEach((audio) => {
  const button = document.createElement("button");

  button.classList.add("btn");

  button.innerText = audio;

  document.body.appendChild(button);

  button.addEventListener("click", (e) => {
    pauseSong();
    document.getElementById(audio).play();
  });
});
function pauseSong() {
  audios.forEach((audio) => {
    const song = document.getElementById(audio);

    song.pause();
    song.currentTime = 0;
  });
}
