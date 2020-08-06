export default function Person(person) {
    return `
    <div class="person__tile_container">
        <input type='hidden' id='personId' value=${person.url} />
        <h1 class='person__name'>${person.name}</h1>
        <p>Height: ${person.height}</p>
        <p>Hair Color: ${person.hair_color}</p>
        <p>Birth Year: ${person.birth_year}</p>
        <h3>Films</h3>
        <div>
        ${person.films.map(film => {
        return `
            <p>${film}</p>
        `;
    })
            .join('')}
        </div>
    </div>
    `;
}