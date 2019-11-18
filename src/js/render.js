const render = data => {
  const img = document.createElement('img');
  img.setAttribute("src", data.sprites.front_default);

  document.body.append(img);
}

export default render;
