console.log('the script was called!');

const tween = KUTE.fromTo(
    '#blob5',
    { path: '#blob5'},
    { path: '#blob6'},
    { repeat: 999, duration: 4500, yoyo: true }
).start();

const tween1 = KUTE.fromTo(
    '#blob1',
    { path: '#blob1'},
    { path: '#blob2'},
    { repeat: 999, duration: 4000, yoyo: true }
).start();

const tween2 = KUTE.fromTo(
    '#blob3',
    { path: '#blob3'},
    { path: '#blob4'},
    { repeat: 999, duration: 3500, yoyo: true }
).start();