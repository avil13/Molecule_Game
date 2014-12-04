Molecule.module 'Hero', (game)->
    return  game.molecule.define
                sprite: game.sprite.create 'hero'

                init: ->
                    @sprite.animation.add 'run', {frames: [12, 13, 14, 15, 16, 17], speed: 0.77 }

                    @sprite.animation.add 'wait', {frames: [0, 1, 2, 3, 4], speed: 0.7 }

                    @sprite.animation.add 'jump', {frames: [6, 6, 7, 8, 9, 10], speed: 0.1 }

                    @sprite.animation.add 'jump_up', {frames: [6, 6, 6, 7, 8, ], speed: 0.1 }

                    @sprite.animation.add 'jump_down', {frames: [8, 9, 10], speed: 0.1 }

                    @sprite.animation.add 'sit', {frames: [6], speed: 0.1 }

                    @sprite.animation.add 'hit', {frames: [18, 19, 20, 21, 22], speed: 0.5 }

                    @sprite.collides.boundaries = on

                    do @sprite.animation.stop
                    @sprite.animation.run 'wait', loop: on, reverse: no

                    @sprite.scrollable = no

                    @sprite.position.x = 200 # game.canvas.width / 4
                    @sprite.position.y = 200 # game.canvas.height / 2

                    @sprite.anchor.x = @sprite.width / 2;
                    @sprite.anchor.y = @sprite.height / 2;

                    # console.log @sprite
                    return
                # end init

                update: ->
                    if game.input.key.SPACE
                        #  hit
                        @sprite.animation.run 'hit', {loop: on}

                    else if game.input.key.LEFT_ARROW
                        @sprite.flip.x = no
                        @sprite.animation.run 'run', {loop: on}
                        @sprite.position.x -= 3

                    else if game.input.key.RIGHT_ARROW
                        @sprite.flip.x = on
                        @sprite.animation.run 'run', {loop: on}
                        @sprite.position.x += 3

                    if game.input.key.DOWN_ARROW
                        @sprite.animation.run 'sit', {loop: no}
                        @sprite.position.y += 3

                    if game.input.key.UP_ARROW
                        @sprite.animation.run 'jump', {loop: no}
                        @sprite.position.y -= 3

                    if !game.input.key.LEFT_ARROW && !game.input.key.RIGHT_ARROW && !game.input.key.SPACE && !game.input.key.DOWN_ARROW && !game.input.key.UP_ARROW
                        # stop
                        @sprite.animation.run 'wait', loop: on, reverse: no

                    # do @gravity
                    return
                # End update

                gravity: ->
                    if @sprite.position.y - @sprite.anchor.y < 70
                        game.physics.gravity.y = 9.78 / 60
                        @sprite.animation.run 'jump_down',
                            loop: no, reverse: no

                    else if @sprite.position.y + @sprite.anchor.y > game.width - 70
                        game.physics.gravity.y = -9.78 / 60
                        @sprite.animation.run 'jump_up',
                            loop: no, reverse: no

                    return
                # End gravity
