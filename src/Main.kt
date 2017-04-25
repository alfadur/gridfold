import kotlin.browser.document
import kotlin.browser.window

class Game
{
    val screenWidth = 640
    val screenHeight = 640
    val gameSize = Point(screenWidth, screenHeight)

    val renderer = PIXI.CanvasRenderer(screenWidth, screenHeight)

    var stage = IngameStage(gameSize, 0)

    var controller: Controller = KeyboardController(window)

    init
    {
        document.getElementById("game")?.appendChild(renderer.view)
        window.requestAnimationFrame { update() }

        window.requestAnimationFrame {  }
    }

    fun update()
    {
        val stage = stage
        stage.handleController(controller)
        stage.update()
        if (stage.ended && stage is IngameStage)
        {
            this.stage = IngameStage(
                stage.size,
                (stage.levelIndex + 1).rem(Layout.levels.size))
        }

        if (controller.isActive(ControllerAction.Restart))
        {
            this.stage = IngameStage(stage.size, stage.levelIndex)
        }

        renderer.render(this.stage.node)
        window.requestAnimationFrame { update() }
    }
}


fun main(args: Array<String>)
{
    window.onload =
    {
        Game()
    }
}
