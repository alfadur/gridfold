interface GameStage
{
    fun handleController(controller: Controller)
    fun update()

    val root: PIXI.DisplayObject
    val gameSize: Point
    val ended: Boolean
}

class IngameStage(val size: Point, val levelIndex: Int): GameStage
{
    val node = PIXI.Container()
    val level = Level(node, Layout.levels[levelIndex], size)
    var running = true

    override fun handleController(controller: Controller)
    {
        /*if (controller.isActive(ControllerAction.Step))
        {
            running = false
            level.update()
        }*/

        if (controller.isActive(ControllerAction.Up))
        {
            level.jump()
        }

        if (controller.isActive(ControllerAction.Select))
        {
            level.action()
        }

        when
        {
            controller.isActive(ControllerAction.Left) ->
                level.moveLeft()
            controller.isActive(ControllerAction.Right) ->
                level.moveRight()
        }
    }

    override fun update()
    {
        if (running)
        {
            level.update()
        }
    }

    override val root: PIXI.DisplayObject
        get() = node
    override val gameSize: Point
        get() = size

    override val ended: Boolean
        get() = level.completed
}
