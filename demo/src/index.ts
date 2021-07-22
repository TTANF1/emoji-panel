import EmojiPanel from '../../src/index';

const panel = document.querySelector('#panel');

new EmojiPanel({
  el: panel,
  onSelect,
});

function onSelect(emoji) {
  console.log('%c [ emoji ]', 'font-size:13px; background:pink; color:#bf2c9f;', emoji);
}
