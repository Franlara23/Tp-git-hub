let seguir_cargando = false;

// Array con 3 pokemones por defecto
let pokemones = [
  {
    nombre: "Pikachu",
    nivel: 12,
    tipo: ["Eléctrico"],
    foto: "pikachu.png",
    hp: 35,
    hp_total: 35,
    evolucion: true,
  },
  {
    nombre: "Charmander",
    nivel: 10,
    tipo: ["Fuego"],
    foto: "charmander.png",
    hp: 39,
    hp_total: 39,
    evolucion: true,
  },
  {
    nombre: "Squirtle",
    nivel: 8,
    tipo: ["Agua"],
    foto: "squirtle.png",
    hp: 44,
    hp_total: 44,
    evolucion: true,
  },
  {
    nombre: "charizard",
    nivel: 8,
    tipo: ["fuego", "volador"],
    foto: "squirtle.png",
    hp: 44,
    hp_total: 44,
    evolucion: true,
  },
  {
    nombre: "Gengar",
    nivel: 15,
    tipo: ["Fantasma, Veneno"],
    foto: "Gengar.png",
    hp: 40,
    hp_total: 45,
    evolucion: true,
  },
];

// Menú de interacción
let opcion;
do {
  opcion = prompt(
    "¿Qué desea hacer?\n1. Mostrar pokemones cargados\n2. Cargar un nuevo Pokémon\n3. Restar HP a un Pokémon\n4. Salir"
  );

  switch (opcion) {
    case "1": // Mostrar pokemones
      console.log("Pokemones cargados:");
      console.log(pokemones);
      console.log("Lista de nombres:");
      pokemones.forEach((p) => console.log(p.nombre));
      break;

    case "2": // Cargar nuevo Pokémon
      do {
        let nuevoPokemon = {
          nombre: prompt("Ingrese el nombre del Pokémon:"),
          nivel: Number(prompt("Ingrese el nivel del Pokémon:")),
          tipo: prompt(
            "Ingrese el tipo o tipos del Pokémon (separados por coma):"
          ).split(","),
          foto: prompt("Ingrese la URL/nombre de la foto del Pokémon:"),
          hp: Number(prompt("Ingrese el HP actual:")),
          hp_total: Number(prompt("Ingrese el HP total:")),
          evolucion: prompt("¿Puede evolucionar? (si/no)") === "si",
        };

        pokemones.push(nuevoPokemon);

        let terminar = prompt("¿Desea cargar otro Pokémon? (si/no)");
        seguir_cargando = terminar === "si";
      } while (seguir_cargando);

      console.log("Pokemones cargados:");
      console.log(pokemones);
      console.log("Lista de nombres:");
      pokemones.forEach((p) => console.log(p.nombre));
      break;

    case "3": // Restar HP
      let nombrePokemon = prompt(
        "Ingrese el nombre del Pokémon al que quiere restar HP:"
      );
      let pokemonEncontrado = pokemones.find(
        (p) => p.nombre.toLowerCase() === nombrePokemon.toLowerCase()
      );

      if (pokemonEncontrado) {
        let cantidad = Number(prompt("¿Cuánto HP quiere restar?"));
        pokemonEncontrado.hp = Math.max(0, pokemonEncontrado.hp - cantidad);
        console.log(
          `${pokemonEncontrado.nombre} ahora tiene ${pokemonEncontrado.hp}/${pokemonEncontrado.hp_total} HP`
        );
      } else {
        console.log("Pokémon no encontrado.");
      }

      console.log("Pokemones cargados:");
      console.log(pokemones);
      console.log("Lista de nombres:");
      pokemones.forEach((p) => console.log(p.nombre));
      break;
  }
} while (opcion !== "4");

console.log("Programa finalizado");
