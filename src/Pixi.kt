import org.w3c.dom.HTMLCanvasElement

external object PIXI
{
    class Point(x: Number, y: Number)
    {
        val x: Number
        val y: Number
    }
    class Rectangle(x: Number, y: Number, width: Number, height: Number)
    {
        val x: Number
        val y: Number
        val width: Number
        val height: Number
    }

    class Matrix
    {
        val a: Double
        val b: Double
        val c: Double
        val d: Double
        val tx: Double
        val ty: Double

        companion object
        {
            fun fromArray(array: Array<Double>): Matrix
        }
    }

    open class DisplayObject
    {
        var position: Point
        var rotation: Double
        var pivot: Point
        var scale: Point

        var worldTransform: Matrix

        var width: Number
        var height: Number

        var visible: Boolean
    }

    open class Container : DisplayObject
    {
        fun addChild(child: DisplayObject): DisplayObject
        fun removeChild(child: DisplayObject): DisplayObject

        fun getChildIndex(child: DisplayObject): Int
        fun swapChildren(child: DisplayObject, child2: DisplayObject): Int
        fun removeChildren(): Unit
    }

    class CanvasRenderer(width: Number, height: Number)
    {
        val view: HTMLCanvasElement
        fun render(scene: Container): Unit
    }

    class Graphics: DisplayObject
    {
        fun beginFill(color: Number, alpha: Number = definedExternally): Graphics
        fun endFill(): Graphics

        fun lineStyle(lineWidth: Number, color: Number, alpha: Number = definedExternally): Graphics

        fun moveTo(x: Number, y: Number): Graphics
        fun lineTo(x: Number, y: Number): Graphics
        fun drawRect(x: Number, y: Number, width: Number, height: Number): Graphics
        fun drawRoundedRect(x: Number, y: Number, width: Number, height: Number, radius: Number): Graphics
        fun drawCircle(x: Number, y: Number, radius: Number): Graphics

        fun clear(): Graphics
    }

    class AssetLoader(assetUrls: Array<String>, crossorigin: Boolean)
    {
        fun load(): Unit
        var onComplete: () -> Unit
    }

    abstract class BaseTexture
    {
        val width: Int
        val height: Int
        val hasLoaded: Boolean

        companion object
        {
            fun fromImage(imageUrl: String, crossorigin: Boolean): BaseTexture
        }
    }

    class Texture(baseTexture: BaseTexture, frame: Rectangle)
    {
        val frame: Rectangle
        companion object
        {
            fun fromImage(imageUrl: String, crossorigin: Boolean): Texture
            fun fromFrame(frameId: String): Texture
        }
    }

    open class Sprite(texture: Texture): DisplayObject
    {
        var _tint: Int
        var blendMode: Int
        var texture: Texture
    }

    object BLEND_MODES
    {
        val NORMAL: Int
        val ADD: Int
        val MULTIPLY: Int
        val SCREEN: Int
        val OVERLAY: Int
        val DARKEN: Int
        val LIGHTEN: Int
        val COLOR_DODGE: Int
        val COLOR_BURN: Int
    }

    class Text(text: String, style: TextStyle?): Sprite
    {
        var text: String
        fun setStyle(style: TextStyle): Unit
    }
    class ParticleContainer: Container
}

data class TextStyle(
    val fill: String = "black",
    val wordWrap: Boolean = false,
    val wordWrapWidth: Number = 100,
    val font: String? = null,
    val align: String? = null)

inline fun PIXI.Graphics.fill(color: Number, f: PIXI.Graphics.() -> Unit)
{
    beginFill(color)
    f()
    endFill()
}

fun PIXI.Graphics.drawRect(r: PIXI.Rectangle) =
    drawRect(r.x, r.y, r.width, r.height)

fun PIXI.Graphics.drawRoundedRect(r: PIXI.Rectangle, radius: Number) =
    drawRoundedRect(r.x, r.y, r.width, r.height, radius)

fun PIXI.BaseTexture.slice(vararg sizes: Int): Array<PIXI.Texture>
{
    val result = arrayListOf<PIXI.Texture>()
    var x = 0
    var y = 0

    for (height in sizes)
    {
        for (width in sizes)
        {
            result.add(PIXI.Texture(this, PIXI.Rectangle(x, y, width, height)))
            x += width
        }
        y += height
        x = 0
    }

    return result.toTypedArray()
}

fun PIXI.BaseTexture.slice(frameSize: PIXI.Point, xFrames: Int, yFrames: Int): Array<PIXI.Texture>
{
    return Array(xFrames * yFrames)
    {
        val y = it.div(xFrames)
        val x = it - y * xFrames

        PIXI.Texture(this, PIXI.Rectangle(
            x * frameSize.x.toInt(), y * frameSize.y.toInt(), frameSize.x, frameSize.y))
    }
}

operator fun PIXI.Point.plus(p: PIXI.Point) =
    PIXI.Point(x.toDouble() + p.x.toDouble(),
               y.toDouble() + p.y.toDouble())