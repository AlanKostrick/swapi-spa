import Contact from '../components/Contact.js';
import ActionButton from '../components/ActionButton.js';

export default function HomePage() {
    return `
    <h1>Home</h1>
    <h3>Here is the home page of our app</h3>
    ${Contact()}
    `;
}