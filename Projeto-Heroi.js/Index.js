// O nome do heroi fica aqui
let nickname = "Ph4nt0mX";
// A quantidade de xp fica aqui
let XP = 12584;
// Aqui é autoexplicativo sera o nivel do heroi
let nivel;


const quantidadeDeXP = [
  {Limite: 1000, nivel: "Ferro" },
  {Limite: 2000, nivel: "Bronze" } ,
  {Limite: 5000, nivel: "Prata" },
  {Limite: 7000, nivel: "Ouro" },
  {Limite: 8000, nivel: "Platina"},
  {Limite: 9000, nivel: "Ascendente"},
  {Limite: 10000, nivel: "Imortal"},
  {Limite: Infinity, nivel: "Radiante" }
];

for (const Level of quantidadeDeXP){
    if (XP <= Level.Limite) {
        nivel = Level.nivel;
        break;       
    }

}
  console.log (`O Herói de nome ${nickname} está no nível ${nivel}`);
