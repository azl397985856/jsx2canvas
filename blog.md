# 用JSX写Canvas

作为一个非专业游戏和可视化开发方向的前端，我对canvas的使用经验是很有限的，但是在某些情况又需要用到canvas，比如图片合成。 这个时候我们通常会借助于已有的类库来完成我们的需求， 比如上面提到的图片合成需求，可以使用`html2canvas`来完成。
但是html2canvas的原理是将整个渲染树给解析一遍，因此会解析很多我不需要的东西。 另外，html2canvas的性能我是不能接受的，合成一个图片要花费数秒的时间。


一个很直观的方式就是使用原生canvas去写，但是这又有如下三个问题。

第一是canvas对我来说的写起来不顺手。
第二是为了跨端的能力，canvas的语法写出来必须要在支持canvas的容器中运行。
第三是对于我们团队来说，有很多人不熟悉canavs，强行推可能会不顺利。

因此我动手造了一个轮子，这个轮子不仅很好地解决了上面三个问题， 并且由于其是基于编译时声称可执行的代码， 因此它在性能上也有很大的优势。

为了大家能够更好地理解我说的，我们先来复习一下简单的canavs知识， 如果已经了解的可以快速看一下或者跳过。

## canvas基本概念

### 画布

canvas元素和普通的元素看起来没有什么不同，并且canvas更加简单，只有两个属性width和height。
没有设置宽度和高度的时候，canvas会初始化宽度为300像素和高度为150像素。

和其他元素不同的是，canvas元素会创建一个固定大小的画布，它公开了一个或多个渲染上下文，其可以用来绘制和处理要展示的内容。

```html
<canvas id="tutorial" width="150" height="150"></canvas>
```


### 画笔

```js

var canvas = document.getElementById('tutorial');
var ctx = canvas.getContext('2d'); // 这个方法是用来获得渲染上下文和它的绘画功能

```



有了画笔， 我们就可以画画了。  你需要指挥画笔，从哪开始，画到哪，用什么颜色的笔。

```js
function draw(canvas) {
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "rgb(200,0,0)"; // 笔的颜色
    ctx.fillRect (10, 10, 55, 50); // 画一个矩形

    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";// 笔的颜色
    ctx.fillRect (30, 30, 55, 50); // 画一个矩形
  }
}

var canvas = document.getElementById("canvas");

draw(canvas)

```

看起来就是这样的：

https://mdn.mozillademos.org/files/228/canvas_ex1.png

 对于使用jsx2canvas来说，有了这些知识就足够了，是不是很简单？
 

## 图片合成为例
 刚才我们反复提到了图片合成，是因此这个项目的灵感来自这个需求。那么我们就拿图片合成来举例子。
 我的需求是可以将多行图片按照某种形式组合起来。
 传统的方式我们可以直接使用canvas的API去一个个绘制图片，并自己计算布局。 因此canavs是
 没有类似盒模型或者flex布局这种概念的，因此需要自己去计算布局，当然你可以自己封装。 还有一个问题就是层级，如果
 用canvas去做的话，需要控制绘制顺序来控制层级。 如果合成的动画可以动呢？ 我们可能还要写逻辑来控制每一帧的变化等等。
## JSX2canvas

貌似上面有很多问题，或大或小，并且都可以解决。 但是，我们能否跳出这个思维，用别的方式来解决这个问题呢？如果使用`JSX2Canavs`会是怎么样呢？
 
 
如果使用`JSX2Canavs` 可能会是这样的：

 ```js
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

渲染结果是：

https://github.com/azl397985856/jsx2canvas/raw/master/screenshots/sample.png



可以看出它其实是将两个图片和一个文本按照某种布局方式组织起来。
如果你的合成更复杂，其简洁性和直观性会表现地更加明显。

仓库地址：https://github.com/azl397985856/jsx2canvas  详细文档大家可以去仓库查看。

当然这个仓库还在alpha版本，后续会考虑加入更多的功能， 比如`border`， `onClick`， `动画`等。
