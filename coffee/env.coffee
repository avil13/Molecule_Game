Molecule.module 'Barrel', (game)->
    return  game.molecule.define
                sprite: game.sprite.create 'barrel'

                init: ->
                    @sprite.animation.add 'wait',{speed:1, frames: [0], loop: no}

                    @sprite.animation.add 'barrel_red', {speed: 1, frames: [1, 0, 1, 0]}

                    @sprite.animation.add 'barrel_green', {speed: 1, frames: [2]}

                    @sprite.anchor.x = @sprite.width / 2
                    @sprite.anchor.y = @sprite.height / 2
                    @sprite.position.x = if @x != undefined then @x  else 100
                    @sprite.position.y = if @y != undefined then @y  else 100

                    do @sprite.animation.stop
                    @sprite.animation.run 'wait'

                    @sprite.acceleration.x = 1

                    return

                update: ->
                    if @sprite.collision.boundaries.left
                        @sprite.acceleration.x = 1
                    else if @sprite.collision.boundaries.right
                        @sprite.acceleration.x = -1


                    # debug
                    if @sprite.collision.sprite.id != null
                        sp_id = @sprite.collision.sprite.id
                        sp = game.sprite.get (sprite)->
                                sprite if sprite.id == sp_id
                        console.log sp[0].name if sp && sp[0] && sp[0].name

                        @sprite.animation.run 'barrel_red', loop: no

                    if @sprite.animation.current.animation == 1 && @sprite.animation.end
                        game.molecule.add 'Boom', {x: @sprite.position.x, y: @sprite.position.y}
                        game.remove @

                    return


Molecule.module 'Boom', (game)->
    return game.molecule.define
                sprite: game.sprite.create 'boom'

                init: ->

                    @sprite.anchor.x = @sprite.width / 2
                    @sprite.anchor.y = @sprite.height / 2
                    @sprite.position.x = (if @x? then @x  else -1000)
                    @sprite.position.y = (if @y? then @y  else -1000)
                    @sprite.animation.add 'fire', {speed: 0.6, frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}

                    @sprite.animation.run 'fire', {loop: no, reverse: no}

                    return

                update: ->
                    if @sprite.animation.end
                        game.remove @

                    return


###

Molecule.module 'BoomOnEarth', (game)->
    return game.molecule.define
                sprite: game.sprite.create 'boomOnEarth'

                init: ->
                    @sprite.animation.add 'fire2', { speed: 0.9, frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]}

                    do @sprite.animation.stop

                    @sprite.animation.run 'fire2', {loop: on, reverse: no }

                    @sprite.position.x = game.canvas.width / 3
                    @sprite.position.y = game.canvas.height / 3

                    return

                update: ->

                    return

###
