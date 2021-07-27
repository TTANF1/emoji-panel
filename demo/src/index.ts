import EmojiPanel from '../../src/index';
// import { ICON_LIBS } from '../../src/index';

const panel = document.querySelector('#panel');

const p = new EmojiPanel({
  el: panel,
  onSelect: (emoji) => {
    console.log('%c [ emoji ]', 'font-size:13px; background:pink; color:#bf2c9f;', emoji);
  },
});

console.log('%c [ p ]', 'font-size:13px; background:pink; color:#bf2c9f;', p);

const button = document.querySelector('#swich');

button.addEventListener('click', () => {
  console.log('click');
  p.changeIcons('goods');
});
