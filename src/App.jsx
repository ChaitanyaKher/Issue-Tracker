const continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe'];

const helloContinents = Array.from(continents, c => `Hello ${c}!\n`);
const message = helloContinents.join('<br />');

const element = (
    <div title="Outer Div">
        <h1>{message}</h1>
    </div>
);

ReactDOM.render(element, document.getElementById("contents"));