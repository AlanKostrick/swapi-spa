import Header from './components/Header.js';
import Footer from './components/Footer.js';
import HomePage from './pages/HomePage.js';
import PeoplePage from './pages/PeoplePage.js';
import PersonPage from './pages/PersonPage.js';
import Films from './components/Films.js';
import apiActions from './api-actions/api.js';

buildPage();

function buildPage() {
    header();
    footer();
    navHome();
    navPeople();
    navFilms();
}

function header() {
    const headerElement = document.querySelector('.header');
    headerElement.innerHTML = Header();
}

function footer() {
    const footerElement = document.querySelector('.footer');
    footerElement.innerHTML = Footer();
}

function navHome() {
    const homeLi = document.querySelector('.nav-list__home');
    homeLi.addEventListener('click', () => {
        const app = document.querySelector('#app');
        app.innerHTML = HomePage();
    });
}

function navPeople() {
    const peopleLi = document.querySelector('.nav-list__people');
    peopleLi.addEventListener('click', () => {
        const app = document.querySelector('#app');
        apiActions.getRequest('https://swapi.dev/api/people/', people => {
            app.innerHTML = PeoplePage(people);
        });
        renderPersonInfo();
    });
}

function renderPersonInfo() {
    const app = document.querySelector('#app');
    app.addEventListener('click', () => {
        if (event.target.classList.contains('person__name')) {
            const personUrl = event.target.parentElement.querySelector('#personId').value;
            apiActions.getRequest(personUrl, person => {
                app.innerHTML = PersonPage(person);
            });
        }
    });
}

function navFilms() {
    const filmsLi = document.querySelector('.nav-list__films');
    filmsLi.addEventListener('click', () => {
        const app = document.querySelector('#app');
        apiActions.getRequest('https://swapi.dev/api/films/', films => {
            app.innerHTML = Films(films);
        });
    });
}