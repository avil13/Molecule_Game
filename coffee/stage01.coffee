Molecule.module 'Stage01', (game)->
    setInterval (-> game.molecule.add 'Barrel', {x:(Math.floor(Math.random() * game.width)), y: (Math.floor(Math.random() * game.height)) }), 5000
