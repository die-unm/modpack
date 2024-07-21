PlayerEvents.loggedIn((event) => {
  event.server.runCommandSilent(`curios set back ${event.player.username} 2`);
});
