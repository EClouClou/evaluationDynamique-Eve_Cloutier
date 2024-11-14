function Rating({ defaultValue = 2, productId = "" }) {
  const div = document.createElement("div");
  const rating = localStorage.getItem("rating" + productId);

  for (let i = 0; i < 5; i++) {
    const btn = document.createElement("button");

    btn.className = "btn-rating";
    btn.onclick = () => {
      div.setAttribute("data-rating", i + 1);

      localStorage.setItem("rating" + productId, i + 1);
    };

    div.appendChild(btn);
  }

  div.className = "rating";
  div.setAttribute("data-rating", rating ?? defaultValue);

  return div;
}

document.body.appendChild(Rating({ defaultValue: 2, productId: "1" }));
document.body.appendChild(Rating({ defaultValue: 2, productId: "1" }));
document.body.appendChild(Rating({ defaultValue: 2, productId: "1" }));
document.body.appendChild(Rating({ defaultValue: 2, productId: "1" }));
document.body.appendChild(Rating({ defaultValue: 2, productId: "1" }));
