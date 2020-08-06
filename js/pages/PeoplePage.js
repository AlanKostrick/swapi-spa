import People from '../components/People.js';

export default function PeoplePage(people) {
    return `
    <h1>A Page about Star Wars Characters</h1>
    ${People(people)}
    `;

}