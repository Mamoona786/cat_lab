// this program will tel us about our cats
let cats = [
    {name: "Tabby", likes: "catnip"},
    {name: "Bob Ross", likes: "paint"},
    {name: "Chaos", likes: "knocking over plants"},
    {name: "Patches", likes: "cuddling"}];

for (let i = 0 ; i < cats.length ; i++)
{
    // we will use string interpolation
    console.log(`${cats[i].name} likes ${cats[i].likes}`);
}
