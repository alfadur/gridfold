import kotlin.js.Math

data class Point(val x: Int = 0, val y: Int = 0)
{
    operator fun  unaryMinus() = Point(-x, -y)

    operator fun plus(d: Direction) = Point(x + d.shift.x, y + d.shift.y)
    operator fun minus(d: Direction) = Point(x + d.shift.x, y + d.shift.y)

    operator fun plus(p: Point) = Point(x + p.x, y + p.y)
    operator fun minus(p: Point) = Point(x - p.x, y - p.y)
    operator fun times(a: Int) = Point(x * a, y * a)
    operator fun div(a: Int) = Point(x / a, y / a)

    operator fun times(p: Point) = Point(x * p.x, y * p.y)
    operator fun div(p: Point) = Point(x / p.x, y / p.y)
    infix fun dot(p: Point) = x * p.x + y * p.y

    val sqrLength: Int get() = this dot this

    infix fun withX(a: Int) = Point(a, y)
    infix fun withY(a: Int) = Point(x, a)

    infix fun unwrapIndex(rowLength: Int) = y * rowLength + x

    infix fun ortho(dir: Point) =
        this - dir * (dir dot this)
    infix fun project(dir: Point) =
        ortho(dir.rotate90)

    val sign: Point get() = Point(x.sign, y.sign)

    fun transpose() = Point(y, x)

    val rotate90: Point get() = Point(y, -x)
    val rotate270: Point get() = Point(-y, x)

    val companion1: Int get() = x
    val companion2: Int get() = y

    override fun toString(): String = "($x, $y)"

    companion object
    {
        val zero = Point()
    }
}

enum class Direction(val shift: Point)
{
    None(Point.zero),
    Up(Point(0, -1)),
    Left(Point(-1, 0)),
    Down(Point(0, 1)),
    Right(Point(1, 0));

    val angle: Double get() = when(this)
    {
        Direction.None -> 0.0
        Direction.Up -> 0.0
        Direction.Left -> Math.PI / 2
        Direction.Down -> Math.PI
        Direction.Right -> 3 * Math.PI / 2
    }

    fun rotate() = when(this)
    {
        Up -> Left
        Left -> Down
        Down -> Right
        Right -> Up
        None -> None
    }

    fun unrotate() = when(this)
    {
        Up -> Right
        Right -> Down
        Down -> Left
        Left -> Up
        None -> None
    }

    companion object
    {
        val all = values()
    }
}

data class Vector(val x: Double = 0.0, val y: Double = 0.0)
{
    companion object
    {
        val zero = Vector()
    }
}

fun Int.clamp(min: Int, max: Int) =
    when
    {
        this < min -> min
        this > max -> max
        else -> this
    }

fun Point.clamp(min: Point, max: Point) =
    Point(x.clamp(min.x, max.x), y.clamp(min.y, max.y))

fun Int.remDiv(divisor: Int) = Point(rem(divisor), div(divisor))
val Int.sign: Int get() = when
{
    this > 0 -> 1
    this < 0 -> -1
    else -> 1
}


fun rect(position: Point, size: Point) =
    PIXI.Rectangle(position.x, position.y,
                   size.x, size.y)

fun centerRect(center: Point, size: Point) =
    PIXI.Rectangle(center.x - size.x / 2,
                   center.y - size.y / 2,
                   size.x, size.y)

fun PIXI.Rectangle.contains(point: Point) =
    point.x in x.toInt()..x.toInt() + width.toInt() - 1 &&
    point.y in y.toInt()..y.toInt() + height.toInt() - 1

val PIXI.Rectangle.corner get() =
    Point(x.toInt(), y.toInt())

val PIXI.Rectangle.center get() =
    Point(x.toInt() + width.toInt() / 2,
          y.toInt() + height.toInt() / 2)

infix fun PIXI.Rectangle.intersects(r: PIXI.Rectangle) =
    contains(Point(r.x.toInt(), r.y.toInt())) ||
    contains(Point(r.x.toInt() + r.width.toInt() - 1,
                   r.y.toInt())) ||
    contains(Point(r.x.toInt() + r.width.toInt() - 1,
                   r.y.toInt() + r.height.toInt() - 1)) ||
    contains(Point(r.x.toInt(),
                   r.y.toInt() + r.height.toInt() - 1))

fun Point.toPixi() = PIXI.Point(x, y)