Molecule({
    width: 460,
    height: 480,
    node: 'wrapper',
    globals: {
        debug: true
    }
}).sprite('hero', 'media/sprites/hero_sprites.png', 144, 144).sprite('barrel', 'media/Metal_barrel_social_media.png', 44, 64).sprite('boom', 'media/sprites/exp2.png', 64, 64).sprite('boomOnEarth', 'media/sprites/boom_on_earth.png', 65.6, 81).ready(function(game) {
    game.physics.friction.x = 0;
    game.physics.friction.y = 0.05;
    game.input.enable('keyboard');
    game.molecule.add('Hero');
    game.molecule.add('Barrel');
    game.molecule.add('Boom');
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFFBQUEsQ0FDSTtBQUFBLEVBQUEsS0FBQSxFQUFPLEdBQVA7QUFBQSxFQUNBLE1BQUEsRUFBUSxHQURSO0FBQUEsRUFFQSxJQUFBLEVBQU0sU0FGTjtBQUFBLEVBR0EsT0FBQSxFQUNJO0FBQUEsSUFBQSxLQUFBLEVBQU8sSUFBUDtHQUpKO0NBREosQ0FPQSxDQUFDLE1BUEQsQ0FPUSxNQVBSLEVBT2dCLGdDQVBoQixFQU9rRCxHQVBsRCxFQU91RCxHQVB2RCxDQVFBLENBQUMsTUFSRCxDQVFRLFFBUlIsRUFRa0IscUNBUmxCLEVBUXlELEVBUnpELEVBUTZELEVBUjdELENBU0EsQ0FBQyxNQVRELENBU1EsTUFUUixFQVNnQix3QkFUaEIsRUFTMEMsRUFUMUMsRUFTOEMsRUFUOUMsQ0FVQSxDQUFDLE1BVkQsQ0FVUSxhQVZSLEVBVXVCLGlDQVZ2QixFQVUwRCxJQVYxRCxFQVVnRSxFQVZoRSxDQVlBLENBQUMsS0FaRCxDQVlPLFNBQUMsSUFBRCxHQUFBO0FBQ0gsRUFBQSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUF0QixHQUEwQixDQUExQixDQUFBO0FBQUEsRUFDQSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUF0QixHQUEwQixJQUQxQixDQUFBO0FBQUEsRUFHQSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQVgsQ0FBa0IsVUFBbEIsQ0FIQSxDQUFBO0FBQUEsRUFJQSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQWQsQ0FBa0IsTUFBbEIsQ0FKQSxDQUFBO0FBQUEsRUFLQSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQWQsQ0FBa0IsUUFBbEIsQ0FMQSxDQUFBO0FBQUEsRUFNQSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQWQsQ0FBa0IsTUFBbEIsQ0FOQSxDQURHO0FBQUEsQ0FaUCxDQUFBLENBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIk1vbGVjdWxlXG4gICAgd2lkdGg6IDQ2MCxcbiAgICBoZWlnaHQ6IDQ4MCxcbiAgICBub2RlOiAnd3JhcHBlcidcbiAgICBnbG9iYWxzOlxuICAgICAgICBkZWJ1ZzogdHJ1ZVxuXG4uc3ByaXRlICdoZXJvJywgJ21lZGlhL3Nwcml0ZXMvaGVyb19zcHJpdGVzLnBuZycsIDE0NCwgMTQ0XG4uc3ByaXRlICdiYXJyZWwnLCAnbWVkaWEvTWV0YWxfYmFycmVsX3NvY2lhbF9tZWRpYS5wbmcnLCA0NCwgNjRcbi5zcHJpdGUgJ2Jvb20nLCAnbWVkaWEvc3ByaXRlcy9leHAyLnBuZycsIDY0LCA2NFxuLnNwcml0ZSAnYm9vbU9uRWFydGgnLCAnbWVkaWEvc3ByaXRlcy9ib29tX29uX2VhcnRoLnBuZycsIDY1LjYsIDgxXG5cbi5yZWFkeSAoZ2FtZSktPlxuICAgIGdhbWUucGh5c2ljcy5mcmljdGlvbi54ID0gMDtcbiAgICBnYW1lLnBoeXNpY3MuZnJpY3Rpb24ueSA9IDAuMDU7XG5cbiAgICBnYW1lLmlucHV0LmVuYWJsZSAna2V5Ym9hcmQnXG4gICAgZ2FtZS5tb2xlY3VsZS5hZGQgJ0hlcm8nXG4gICAgZ2FtZS5tb2xlY3VsZS5hZGQgJ0JhcnJlbCdcbiAgICBnYW1lLm1vbGVjdWxlLmFkZCAnQm9vbSdcbiAgICByZXR1cm5cbiJdfQ==