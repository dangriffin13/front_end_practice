
console.log('JS script is running')


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