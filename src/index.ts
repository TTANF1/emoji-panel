import { EmojiPanelOption } from './interface';
import { expression, goods } from './icons';
import style from './style.css';

const IconMap = {
  expression,
  goods,
};

export const ICON_LIBS = {
  expression: 'expression',
  goods: 'goods',
};

export class EmojiPanel {
  options: EmojiPanelOption;
  panel: HTMLElement;
  constructor(options: EmojiPanelOption) {
    this.options = options;

    this.init();
  }

  init(): void {
    const div = document.createElement('div');
    div.classList.add(style['emoji-list']);
    this.panel = div;

    this.createIconDOM('expression');

    div.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.tagName !== 'SPAN') return;
      const order = target.dataset.order;
      const type = target.dataset.type;
      this.options.onSelect.call(this, IconMap[type][order]);
    });

    this.options.el.appendChild(div);
  }

  createIconDOM(type: string): void {
    for (let i = 0; i < IconMap[type].length; i++) {
      const span = document.createElement('span');
      span.innerHTML = IconMap[type][i];
      span.classList.add(style['emoji-item']);
      span.setAttribute('data-order', i.toString());
      span.setAttribute('data-type', type);
      this.panel.appendChild(span);
    }
  }

  changeIcons(type: string): void {
    const select = Object.keys(IconMap).find((v) => v === type);
    console.log(select, 'select');
    if (!select) throw new Error(`'${type}' This emoji library is not included yet'`);
    this.panel.innerHTML = '';
    this.createIconDOM(type);
  }
}

export default { ICON_LIBS, EmojiPanel };
