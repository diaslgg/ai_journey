export default {
    jump: new KeyboardEvent('keydown', {key: 'Space', keyCode: 32}),
    dispatchEvent(event) {
        document.dispatchEvent(this(event));
    }
}