## JSX2Canvas

sytax sugar of canvas to help you build canvas easily.

if you're famliar with jsx, you can handle it quickly.

### Motivation

I wanna put images and text together, as such compounding images and text.

before that, I simply do it by importing a external library called `html2canvas`.

everything goes fine, util one day. an unusual/weird problem arised.

and `htmlcavans` is a little diffult to grap for me.

So I change my mind to build my own out of three reasons below.

- htmlcavans is a little big for me.

I don't want covert all(mostly) css property, it's useless in my case.

- html2canvas is too slow

jsx2canvas base on jsx, jsx2canvas compile jsx to commands which can be applied on `canvas`.

10x faster than `html2canvas`

- easy to track and debug

what you get is toughly a list of commond. you can check it by logging to console.

you can even build custom logic easily.

### demo 😁

```jsx
import { Canvas, CImage, CText, jsx2canvas } from "@duiba/jsx2canvas";

function getCTX() {
  const c = document.getElementById("canvas");
  return c.getContext("2d");
}

function render(commands) {
  const ctx = getCTX();

  commands.map(command => {
    return command.run(ctx);
  });
}

async function canvas({ backgroundImage, text, QRCode }) {
  const commands = await (
    <Canvas>
      <CImage zIndex={9} center middle src={backgroundImage} />
      <CText fontSize={60} center middle text={text} />
      <CImage center src={QRCode} />
    </Canvas>
  );

  return render(commands);
}

canvas({
  backgroundImage: "http://www.duiba.com.cn/_nuxt/img/huan.16841d6.png",
  text: "我是动态生成的文本！",
  QRCode: "http://www.duiba.com.cn/_nuxt/img/cainiao.f7032a9.png"
});
```

> .babelrc

```json
{
  "plugins": [
    [
      "@babel/plugin-transform-react-jsx",
      {
        "pragma": "jsx2canvas"
      }
    ]
  ]
}
```

![sample](./screenshots/sample.png)

### API 🐂

now Only `Canvas`, `CImage` and `CText` are supported.

they are called `class`.

#### Canvas

Must be Outermost.

#### CImage

- zIndex (Number)

- center (Boolean)

- middle (Boolean)

- src (String)

#### CText

- zIndex (Number)

- center (Boolean)

- middle (Boolean)

- text (String)

### Plan ⌚️

- v1.0

more props~ 😄 eg: border, onClick, etc

- v2.0

more classes 😃 eg: Animation, etc

#### dev 💻

```
git clone https://github.com/azl397985856/jsx2canvas

npm i

npm run dev

```
