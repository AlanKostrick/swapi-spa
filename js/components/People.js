import Person from '../components/Person.js';

export default function People(people) {
    return `
    <ul>
    ${people.results.map(person => {
        return `
        <li class='person-info'>
       ${Person(person)}
        </li>
        `;
    }).join('')}
    </ul>
    `;
}