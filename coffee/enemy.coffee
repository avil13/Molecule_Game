Molecule.module 'Ken', (game)->
         return game.molecule.define
                    sprite: game.sprite.create 'ken'

                    init: ->
                        @sprite.animation.add 'wait', {frames: [7, 8, 9, 10], speed: 0.6 }

                        do @sprite.animation.stop

                        @sprite.animation.run 'wait', {loop: on, reverse: no }

                        @sprite.position.x = 200
                        @sprite.position.y = 264

                        return

                    update: ->
                        do @move

                        return

                    move: (key)->
                        if game.input.key.LEFT_ARROW
                            @sprite.position.x--
                        else if game.input.key.RIGHT_ARROW
                            @sprite.position.x++

                        if game.input.key.UP_ARROW
                            @sprite.position.y--
                        else if game.input.key.DOWN_ARROW
                            @sprite.position.y++

                        return