# @tzfe/emoji-panel

> emoji 表情面板

## 使用说明

## 安装依赖

- npm

```bash
npm install @tzfe/emoji-panel
```

- yarn

```bash
yarn add @tzfe/emoji-panel
```

## 实例代码

```js
import { ICON_LIBS, EmojiPanel } from '@tzfe/alicloud-upload';

// 创建实例
const EP = new EmojiPanel({
  el: HTMLElement,
  onSelect: (emoji) => {
    // 获取到选择的 emoji dosomething...
  },
});
// 可切换表情库 具体库名 => ICON_LIBS
EP.changeIcons(ICON_LIBS.good);
```

## 表情库

- ICON_LIBS：导出的表情库名映射

``` javascript
{
  expression: 'expression', // 表情类
  goods: 'goods', // 物品类
}
```

## API说明

### changeIcons(libName: string) => void

> 可切换插入 el 容器显示的表情

传入表情库名，切换容器内渲染的表情