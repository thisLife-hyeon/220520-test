const topClass = {
  home: document.querySelector('.home'),
  skill: document.querySelector('.skill'),
  project1: document.querySelector('.project1'),
  project2: document.querySelector('.project2'),
  project3: document.querySelector('.project3'),
  contact: document.querySelector('.contact'),
  arrowUp: document.querySelector('.arrow-up'),
};

const topId = {
  sectionHome: document.querySelector('#home'),
  sectionSkill: document.querySelector('#skill'),
  sectionProject1: document.querySelector('#project1'),
  sectionProject2: document.querySelector('#project2'),
  sectionProject3: document.querySelector('#project3'),
  sectionContact: document.querySelector('#contact'),
};

topClass.home.addEventListener('click', function () {
  topId.sectionHome.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
topClass.skill.addEventListener('click', function () {
  topId.sectionSkill.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
topClass.project1.addEventListener('click', function () {
  topId.sectionProject1.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
topClass.project2.addEventListener('click', function () {
  topId.sectionProject2.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
topClass.project3.addEventListener('click', function () {
  topId.sectionProject3.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
topClass.contact.addEventListener('click', function () {
  topId.sectionContact.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
topClass.arrowUp.addEventListener('click', function () {
  topId.sectionHome.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

document.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
    topClass.arrowUp.classList.add('show');
  } else {
    topClass.arrowUp.classList.remove('show');
  }
});

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
