import Person from '../components/Person.js';

export default function People(people) {
    return `
    <div class='people__container'>
    ${people.results.map(person => {
        return `
       ${Person(person)}
        `;
    }).join('')}
    </div>
    `;
}