const home = document.querySelector('.home');
const skill = document.querySelector('.skill');
const project1 = document.querySelector('.project1');
const project2 = document.querySelector('.project2');
const project3 = document.querySelector('.project3');
const contact = document.querySelector('.contact');
const arrowUp = document.querySelector('.arrow-up');

const sectionHome = document.querySelector('#home');
const sectionSkill = document.querySelector('#skill');
const sectionProject1 = document.querySelector('#project1');
const sectionProject2 = document.querySelector('#project2');
const sectionProject3 = document.querySelector('#project3');
const sectionContact = document.querySelector('#contact');

//전역변수 나중에 지역변수로 수정하기.

const boxes = document.querySelectorAll('.active__box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}

home.addEventListener('click', function () {
  sectionHome.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

skill.addEventListener('click', function () {
  sectionSkill.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

project1.addEventListener('click', function () {
  sectionProject1.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

project2.addEventListener('click', function () {
  sectionProject2.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

project3.addEventListener('click', function () {
  sectionProject3.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

contact.addEventListener('click', function () {
  sectionContact.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

arrowUp.addEventListener('click', function () {
  sectionHome.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

document.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
    arrowUp.classList.add('show');
  } else {
    arrowUp.classList.remove('show');
  }
});
