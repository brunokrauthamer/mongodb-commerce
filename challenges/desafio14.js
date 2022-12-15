db.produtos.updateMany({
  ingredientes: {
    $in: ["picles"],
  },
}, {
  $push: {
    valoresNutricionais: {
      $each: [],
      $slice: 3,
    },
  },
});

db.produtos.find({
  ingredientes: {
    $in: ["picles"],
  },
}, {
  nome: 1, ingredientes: 1, valoresNutricionais: 1, _id: 0,
});
