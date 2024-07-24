ServerEvents.recipes((event) => {
  event.custom({
    type: "mekanism:crushing",
    input: {
      ingredient: {
        item: "createoreexcavation:raw_redstone",
      },
    },
    output: {
      count: 4,
      item: "minecraft:redstone",
    },
  });

  event.custom({
    type: "mekanism:sawing",
    input: {
      ingredient: {
        item: "createoreexcavation:raw_diamond",
      },
    },
    mainOutput: {
      item: "minecraft:diamond",
    },
  });
  event.custom({
    type: "mekanism:sawing",
    input: {
      ingredient: {
        item: "createoreexcavation:raw_emerald",
      },
    },
    mainOutput: {
      item: "minecraft:emerald",
    },
  });
});
