ServerEvents.blockLootTables((event) => {
  for (const leaves_block of [
    "minecraft:oak_leaves",
    "minecraft:spruce_leaves",
    "minecraft:birch_leaves",
    "minecraft:jungle_leaves",
    "minecraft:acacia_leaves",
    "minecraft:dark_oak_leaves",
    "minecraft:mangrove_leaves",
    "minecraft:cherry_leaves",
    "minecraft:azalea_leaves",
    "minecraft:flowering_azalea_leaves",
    "vinery:dark_cherry_leaves",
    "vinery:apple_leaves",
    "beachparty:palm_leaves",
  ]) {
    event.modifyBlock(leaves_block, (table) => {
      table.addPool((pool) => {
        pool.survivesExplosion();
        pool.addItem(leaves_block).randomChance(0.5);
      });
    });
  }

  event.modifyBlock("minecraft:dark_oak_leaves", (table) => {
    table.addPool((pool) => {
      pool.survivesExplosion();
      pool.addItem("minecraft:dark_oak_sapling").randomChance(0.1);
    });
  });
});
