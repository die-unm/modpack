ServerEvents.recipes((event) => {
  event.recipes.createoreexcavation
    .vein(
      JSON.stringify({ text: "Universal Overworld Vein" }),
      "minecraft:emerald"
    )
    .biomeWhitelist("minecraft:is_overworld")
    .id("unm:createoreexcavation/vein/universal_overworld");
  event.recipes.createoreexcavation
    .drilling(
      [
        "minecraft:coal",
        "minecraft:lapis_lazuli",
        "minecraft:raw_copper",
        "minecraft:raw_gold",
        "minecraft:raw_iron",
        "create_new_age:thorium",
        "create:raw_zinc",
        "createoreexcavation:raw_diamond",
        "createoreexcavation:raw_emerald",
        "createoreexcavation:raw_redstone",
        "k_turrets:raw_titanium",
        "mekanism:fluorite_gem",
        "mekanism:raw_lead",
        "mekanism:raw_osmium",
        "mekanism:raw_tin",
        "mekanism:raw_uranium",
      ],
      "unm:createoreexcavation/vein/universal_overworld",
      1200
    )
    .stress(1024)
    .id("unm:createoreexcavation/drilling/universal_overworld");
  event.recipes.createoreexcavation
    .extracting(
      "minecraft:lava 16000",
      "unm:createoreexcavation/vein/universal_overworld",
      20
    )
    .id("unm:createoreexcavation/extracting/universal_overworld");

  event.recipes.createoreexcavation
    .vein(
      JSON.stringify({ text: "Universal Nether Vein" }),
      "minecraft:glowstone_dust"
    )
    .biomeWhitelist("minecraft:is_nether")
    .id("unm:createoreexcavation/vein/universal_nether");
  event.recipes.createoreexcavation
    .drilling(
      [
        "minecraft:ancient_debris",
        "minecraft:glowstone_dust",
        "minecraft:gold_nugget",
        "minecraft:magma_block",
        "minecraft:netherrack",
        "minecraft:quartz",
      ],
      "unm:createoreexcavation/vein/universal_nether",
      1200
    )
    .stress(1024)
    .drill("createoreexcavation:diamond_drill")
    .id("unm:createoreexcavation/drilling/universal_nether");
  event.recipes.createoreexcavation
    .extracting(
      "minecraft:lava 16000",
      "unm:createoreexcavation/vein/universal_nether",
      20
    )
    .id("unm:createoreexcavation/extracting/universal_nether");
});