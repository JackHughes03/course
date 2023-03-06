const scrollSpeed = 25;

const column1 = document.querySelector('#column1');
// const column3 = document.querySelector('#column3');
const column2 = document.querySelector('#column2');

// Add event listeners to pause scrolling on hover
column1.addEventListener('mouseenter', () => column1.classList.add('pause'));
column1.addEventListener('mouseleave', () => column1.classList.remove('pause'));

// column3.addEventListener('mouseenter', () => column3.classList.add('pause'));
// column3.addEventListener('mouseleave', () => column3.classList.remove('pause'));

column2.addEventListener('mouseenter', () => column2.classList.add('pause'));
column2.addEventListener('mouseleave', () => column2.classList.remove('pause'));

function scrollColumns() {
  // Only scroll non-paused columns
  if (!column1.classList.contains('pause')) {
    column1.scrollBy(0, -2);

    if (column1.scrollTop <= 0) {
      column1.scrollTop = column1.scrollHeight;
    }
  }

  // if (!column3.classList.contains('pause')) {
  //   column3.scrollBy(0, -2);

  //   if (column3.scrollTop <= 0) {
  //     column3.scrollTop = column3.scrollHeight;
  //   }
  // }

  if (!column2.classList.contains('pause')) {
    column2.scrollBy(0, 2);

    if (column2.scrollTop + column2.clientHeight >= column2.scrollHeight) {
      column2.scrollTop = 0;
    }
  }
}

setInterval(scrollColumns, scrollSpeed);

column2.scrollTop = 0;

const links = document.querySelectorAll('a');
var symbol = document.querySelectorAll('span');
var linksli = document.querySelectorAll('li');
var paragraphdesc = document.querySelectorAll('.structuredesc');

links.forEach((link, index) => {
  link.addEventListener('click', () => {
    if(linksli[index].style.height === '150px') {
      linksli[index].style.height = '20px';
      paragraphdesc[index].style.display = 'none';
    } else {
      linksli[index].style.height = '150px';
      paragraphdesc[index].style.display = 'block';
    }
  });
});
