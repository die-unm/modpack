ServerEvents.recipes((event) => {
  event.smelting("k_turrets:titanium_ingot", "k_turrets:raw_titanium");
  for (const sourceItem of [
    "k_turrets:titanium_ore",
    "k_turrets:deepslate_titanium_ore",
  ]) {
    event.smelting("2x k_turrets:titanium_ingot", sourceItem);
  }
});
