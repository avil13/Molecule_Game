Molecule.module('Ken', function(game) {
    return game.molecule.define({
        sprite: game.sprite.create('ken'),
        init: function() {
            this.sprite.animation.add('wait', {
                frames: [7, 8, 9, 10],
                speed: 0.6
            });
            this.sprite.animation.stop();
            this.sprite.animation.run('wait', {
                loop: true,
                reverse: false
            });
            this.sprite.position.x = 200;
            this.sprite.position.y = 264;
        },
        update: function() {
            this.move();
        },
        move: function(key) {
            if (game.input.key.LEFT_ARROW) {
                this.sprite.position.x--;
            } else if (game.input.key.RIGHT_ARROW) {
                this.sprite.position.x++;
            }
            if (game.input.key.UP_ARROW) {
                this.sprite.position.y--;
            } else if (game.input.key.DOWN_ARROW) {
                this.sprite.position.y++;
            }
        }
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZW15LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxRQUFRLENBQUMsTUFBVCxDQUFnQixLQUFoQixFQUF1QixTQUFDLElBQUQsR0FBQTtBQUNkLFNBQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFkLENBQ0k7QUFBQSxJQUFBLE1BQUEsRUFBUSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQVosQ0FBbUIsS0FBbkIsQ0FBUjtBQUFBLElBRUEsSUFBQSxFQUFNLFNBQUEsR0FBQTtBQUNGLE1BQUEsSUFBQyxDQUFBLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBbEIsQ0FBc0IsTUFBdEIsRUFBOEI7QUFBQSxRQUFDLE1BQUEsRUFBUSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLEVBQVYsQ0FBVDtBQUFBLFFBQXdCLEtBQUEsRUFBTyxHQUEvQjtPQUE5QixDQUFBLENBQUE7QUFBQSxNQUVHLElBQUMsQ0FBQSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQXJCLENBQUEsQ0FGQSxDQUFBO0FBQUEsTUFJQSxJQUFDLENBQUEsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFsQixDQUFzQixNQUF0QixFQUE4QjtBQUFBLFFBQUMsSUFBQSxFQUFNLElBQVA7QUFBQSxRQUFXLE9BQUEsRUFBUyxLQUFwQjtPQUE5QixDQUpBLENBQUE7QUFBQSxNQU1BLElBQUMsQ0FBQSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQWpCLEdBQXFCLEdBTnJCLENBQUE7QUFBQSxNQU9BLElBQUMsQ0FBQSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQWpCLEdBQXFCLEdBUHJCLENBREU7SUFBQSxDQUZOO0FBQUEsSUFjQSxNQUFBLEVBQVEsU0FBQSxHQUFBO0FBQ0osTUFBRyxJQUFDLENBQUEsSUFBSixDQUFBLENBQUEsQ0FESTtJQUFBLENBZFI7QUFBQSxJQW1CQSxJQUFBLEVBQU0sU0FBQyxHQUFELEdBQUE7QUFDRixNQUFBLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBbEI7QUFDSSxRQUFBLElBQUMsQ0FBQSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQWpCLEVBQUEsQ0FESjtPQUFBLE1BRUssSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFsQjtBQUNELFFBQUEsSUFBQyxDQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBakIsRUFBQSxDQURDO09BRkw7QUFLQSxNQUFBLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBbEI7QUFDSSxRQUFBLElBQUMsQ0FBQSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQWpCLEVBQUEsQ0FESjtPQUFBLE1BRUssSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFsQjtBQUNELFFBQUEsSUFBQyxDQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBakIsRUFBQSxDQURDO09BUkg7SUFBQSxDQW5CTjtHQURKLENBQVAsQ0FEYztBQUFBLENBQXZCLENBQUEsQ0FBQSIsImZpbGUiOiJlbmVteS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIk1vbGVjdWxlLm1vZHVsZSAnS2VuJywgKGdhbWUpLT5cbiAgICAgICAgIHJldHVybiBnYW1lLm1vbGVjdWxlLmRlZmluZVxuICAgICAgICAgICAgICAgICAgICBzcHJpdGU6IGdhbWUuc3ByaXRlLmNyZWF0ZSAna2VuJ1xuXG4gICAgICAgICAgICAgICAgICAgIGluaXQ6IC0+XG4gICAgICAgICAgICAgICAgICAgICAgICBAc3ByaXRlLmFuaW1hdGlvbi5hZGQgJ3dhaXQnLCB7ZnJhbWVzOiBbNywgOCwgOSwgMTBdLCBzcGVlZDogMC42IH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgZG8gQHNwcml0ZS5hbmltYXRpb24uc3RvcFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBAc3ByaXRlLmFuaW1hdGlvbi5ydW4gJ3dhaXQnLCB7bG9vcDogb24sIHJldmVyc2U6IG5vIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgQHNwcml0ZS5wb3NpdGlvbi54ID0gMjAwXG4gICAgICAgICAgICAgICAgICAgICAgICBAc3ByaXRlLnBvc2l0aW9uLnkgPSAyNjRcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG5cbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlOiAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgZG8gQG1vdmVcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG5cbiAgICAgICAgICAgICAgICAgICAgbW92ZTogKGtleSktPlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgZ2FtZS5pbnB1dC5rZXkuTEVGVF9BUlJPV1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBzcHJpdGUucG9zaXRpb24ueC0tXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIGdhbWUuaW5wdXQua2V5LlJJR0hUX0FSUk9XXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQHNwcml0ZS5wb3NpdGlvbi54KytcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgZ2FtZS5pbnB1dC5rZXkuVVBfQVJST1dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAc3ByaXRlLnBvc2l0aW9uLnktLVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiBnYW1lLmlucHV0LmtleS5ET1dOX0FSUk9XXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQHNwcml0ZS5wb3NpdGlvbi55KytcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIl19