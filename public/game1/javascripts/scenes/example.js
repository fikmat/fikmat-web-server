export class Example extends Phaser.Scene
{
    create ()
    {
        const circle = new Phaser.Geom.Circle(400, 300, 100);

        const graphics = this.add.graphics({ fillStyle: { color: 0xff0000 } });
        graphics.fillCircleShape(circle);
    }
}
