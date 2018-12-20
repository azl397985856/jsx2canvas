const commands = [];

export function Canvas(props, ...children) {
  return Promise.all(children).then(() =>
    commands.sort((a, b) => a.zIndex - b.zIndex)
  );
}
export function CImage(props) {
  return new Promise(resolve => {
    const { src, middle, center, zIndex = 1 } = props;
    if (!src) return console.warn("src of Image must be assigned");

    let x = 0; //  x 坐标
    let y = 0; // y 坐标

    const image = new Image();
    image.src = src;
    image.onload = () => {
      commands.push({
        zIndex,
        run(ctx) {
          if (middle) {
            y = (ctx.canvas.height - image.height) / 2;
          }

          if (center) {
            x = (ctx.canvas.width - image.width) / 2;
          }
          ctx.drawImage(image, x, y, image.width, image.height);
        }
      });
      resolve({
        success: true
      });
    };
  });
}
export function CText(props) {
  const { text = "", middle, center, fontSize = 40, zIndex = 1 } = props;

  commands.push({
    zIndex,
    run(ctx) {
      let x = 0;
      let y = fontSize;
      ctx.font = `${fontSize}px serif`;

      if (middle) {
        y = (ctx.canvas.height - fontSize) / 2;
      }

      if (center) {
        x = ctx.canvas.width / 2;
        ctx.textAlign = "center";
      }

      ctx.fillText(text, x, y);
    }
  });
  return Promise.resolve({
    success: true
  });
}
export function jsx2canvas(tag, props, ...children) {
  if (typeof tag !== "function") {
    return console.warn("暂时只支持自定义组件");
  }

  return tag(props, ...children);
}
