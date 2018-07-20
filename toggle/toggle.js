
console.log('JS script is running')


document.querySelector('.hidden').addEventListener('click', function() {
    var two = document.querySelector('.two');
    console.log('clicked on hidden');

    if (two.style.visibility != 'hidden') {
        two.style.visibility = 'hidden';
        console.log('set to hidden');
    } else {
        two.style.visibility = 'visible';
    }
});

document.querySelector('.none').addEventListener('click', function() {
    var two = document.querySelector('.two')

    if (two.style.display != 'none') {
        two.style.display = 'none';
    } else {
        two.style.display = 'inline-block';
    }
});


var boxes = ['1', '2', '3']
var box_tracker = 0

document.querySelector('.toggle-shading-btn').addEventListener('click', function() {
        document.querySelector('.shade'+boxes[box_tracker]).classList.remove('grayed');

        if (box_tracker === boxes.length-1) {
            box_tracker = 0;
        } else {
            box_tracker += 1;
        };

        console.log('box tracker, ', box_tracker)
        document.querySelector('.shade'+boxes[box_tracker]).classList.add('grayed');
});


console.log('JS script is complete')