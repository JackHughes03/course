const scrollSpeed = 30;

const column1 = document.querySelector('#column1');
const column3 = document.querySelector('#column3');
const column2 = document.querySelector('#column2');

function scrollColumns() {
  column1.scrollBy(0, -2); // scroll up by 2 pixels
  column3.scrollBy(0, -2); // scroll up by 2 pixels
  column2.scrollBy(0, 2); // scroll down by 2 pixels

  // reset scrollTop to 0 if reached the top
  if (column1.scrollTop <= 0) {
    column1.scrollTop = column1.scrollHeight;
  }

  if (column3.scrollTop <= 0) {
    column3.scrollTop = column3.scrollHeight;
  }

  if (column2.scrollTop + column2.clientHeight >= column2.scrollHeight) {
    column2.scrollTop = 0;
  }
}

setInterval(scrollColumns, scrollSpeed);

// set column2 to start from the top
column2.scrollTop = 0;
