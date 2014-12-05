Molecule
    width: 460,
    height: 480,
    node: 'wrapper'
    globals:
        debug: true

.sprite 'hero', 'media/sprites/hero_sprites.png', 144, 144
.sprite 'barrel', 'media/Metal_barrel_social_media.png', 44, 64
.sprite 'boom', 'media/sprites/exp2.png', 64, 64
# .sprite 'boomOnEarth', 'media/sprites/boom_on_earth.png', 65.6, 81

.ready (game)->
    game.boundaries.x = 0
    game.boundaries.y = 0
    game.boundaries.width = game.width
    game.boundaries.height = game.height

    game.physics.friction.x = 0;
    game.physics.friction.y = 0.05;

    game.input.enable 'keyboard'
    game.molecule.add 'Hero'
    game.molecule.add 'Barrel'
    game.molecule.add 'Boom'
    return
