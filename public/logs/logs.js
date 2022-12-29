getData();

async function getData() {
  const response = await fetch("/api");
  const data = await response.json();

  for (item of data) {
    const root = document.createElement("p");
    const date = document.createElement("div");
    const image = document.createElement("img");

    const dateString = new Date(item.timestamp).toLocaleString();
    date.textContent = dateString;
    image.src = item.image64;
    image.alt = "Sorry! Image not Loading :(";

    root.append(date, image);
    document.body.append(root);
  }
}
