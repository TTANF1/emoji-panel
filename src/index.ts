import { EmojiPanelOption } from './interface';
import { expression } from './icons';
import style from './style.css';

export default class EmojiPanel {
  option: EmojiPanelOption;
  constructor(option: EmojiPanelOption) {
    this.option = option;

    this.init();
  }

  // 挂载emoji面板 14*8  20*20
  init() {
    const div = document.createElement('div');
    div.classList.add(style['emoji-list']);
    for (let i = 0; i < expression.length; i++) {
      const span = document.createElement('span');
      span.innerHTML = expression[i];
      span.classList.add(style['emoji-item']);
      div.appendChild(span);
    }
    this.option.el.appendChild(div);
  }
}

const a = document.createElement('a');
new EmojiPanel({ el: a, onSelect: (ee = '😉') => ee });
console.log(expression.length, '111aaaa66');
