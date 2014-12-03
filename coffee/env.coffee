Molecule.module 'Barrel', (game)->
    return  game.molecule.define
                sprite: game.sprite.create 'barrel'

                init: ->
                    @sprite.animation.add 'wait',{frames: [0], speed: 1 }

                    @sprite.animation.add 'barrel_red', {frames: [1, 0, 1, 0], speed: 1 }

                    @sprite.animation.add 'barrel_green',{frames: [2], speed: 1 }

                    @sprite.collides.group = 1
                    @sprite.collides.boundaries = no

                    do @sprite.animation.stop
                    @sprite.animation.run 'wait', loop: no, reverse: no

                    @sprite.scrollable = no

                    @sprite.position.x = 100
                    @sprite.position.y = 260

                    return

                update: ->
                    if @sprite.collision.sprite.id != null
                        console.log 'Yes'
                        @sprite.animation.run 'barrel_red', loop: on
                        game.molecule.add 'Boom',{x: @sprite.position.x, y: @sprite.position.y}

                    return


Molecule.module 'Boom', (game)->
    return game.molecule.define
                sprite: game.sprite.create 'boom'

                init: ->
                    @sprite.position.x = @x
                    @sprite.position.y = @y

                    @sprite.animation.add 'fire', {frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], speed: 0.6 }

                    do @sprite.animation.stop

                    @sprite.animation.run 'fire', {loop: on, reverse: no }

                    return

                update: ->
                    if @sprite.animation.end
                        game.remove @

                    return




Molecule.module 'BoomOnEarth', (game)->
    return game.molecule.define
                sprite: game.sprite.create 'boomOnEarth'

                init: ->
                    @sprite.animation.add 'fire2', {frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], speed: 0.9 }

                    do @sprite.animation.stop

                    @sprite.animation.run 'fire2', {loop: on, reverse: no }

                    @sprite.position.x = game.canvas.width / 3
                    @sprite.position.y = game.canvas.height / 3

                    return

                update: ->

                    return


