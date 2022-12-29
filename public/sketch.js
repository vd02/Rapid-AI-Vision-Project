function setup() {
  noCanvas();
  const video = createCapture(VIDEO);
  video.size(400, 320);
  const button = document.getElementById("submit");
  button.addEventListener("click", async (event) => {
    video.loadPixels();
    const image64 = video.canvas.toDataURL();
    const data = { image64 };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch("/api", options);
    const json = await response.json();
    console.log(json);
  });
}
