import Person from '../components/Person.js';

export default function PersonPage(person) {
    return `
    <h1>The Person Page</h1>
    ${Person(person)}
    `

}