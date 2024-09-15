const mainContainer = document.getElementById('main-container');

const customH2 = document.createElement('h2');
customH2.innerText = 'Lunch Area';
mainContainer.appendChild(customH2);

const customUl = document.createElement('ul');

const customLi1 = document.createElement('li');
customLi1.innerText = 'Burger';
customUl.appendChild(customLi1);
mainContainer.appendChild(customUl);

const customLi2 = document.createElement('li');
customLi2.innerText = 'Noodles';
customUl.appendChild(customLi2);
mainContainer.appendChild(customUl);

const customLi3 = document.createElement('li');
customLi3.innerText = 'Pizza';
customUl.appendChild(customLi3);
mainContainer.appendChild(customUl);

const customLi4 = document.createElement('li');
customLi4.innerText = 'Pasta';
customUl.appendChild(customLi4);
mainContainer.appendChild(customUl);


// Easy way to do this

const customSection = document.createElement('section');
customSection.innerHTML = `
<h2>Desert Area</h2>
<ul>
<li>Cakes</li>
<li>Pastries</li>
<li>Biscuits</li>
<li>Gelatins</li>
</ul>
`

mainContainer.appendChild(customSection);