async function dataFetch() {
  try {
    const firstData = await fetch("https://pokeapi.co/api/v2/pokemon");
    const jsoningData = await firstData.json();
    return jsoningData;
  } catch (e) {
    return e;
  }
}
dataFetch().then((res) => res.results.map((res) => console.log(res.name)));
