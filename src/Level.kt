import kotlin.js.Math

object Layout
{
    const val O = 0
    val X = 1
    val D = 2
    val K = 3
    val L = 5
    val C = 4

    val base = listOf(
        O, O, O, O, O, O, O, O, O, O,
        O, O, O, O, O, O, O, O, O, O,
        O, O, O, O, O, O, O, O, O, O,
        O, O, O, C, O, O, O, O, O, O,
        O, O, O, O, O, O, O, O, O, O,
        O, O, O, O, O, O, O, O, O, O,
        O, O, O, O, O, O, O, O, O, O,
        O, O, O, O, O, O, O, O, O, O,
        O, O, O, O, O, O, O, O, O, O,
        O, O, O, O, O, O, O, O, O, O)

    val map = listOf(
        O, O, O, O, O, O, O, O, O, O,
        O, O, O, O, X, X, X, O, O, O,
        O, O, O, O, O, O, O, O, O, O,
        O, O, O, C, O, O, O, O, O, O,
        O, O, O, X, X, O, O, X, X, X,
        X, X, X, X, O, O, X, X, O, X,
        X, O, O, O, O, O, O, O, O, X,
        X, O, O, O, O, O, O, O, O, X,
        X, X, X, X, X, X, X, X, X, X,
        O, O, O, O, O, O, O, O, O, O)

    val level0 = listOf(
        X, O, O, O, O, O, O, O, O, X,
        X, O, X, X, X, X, X, X, O, X,
        X, X, X, O, O, X, O, X, X, X,
        X, O, O, O, O, O, O, O, O, X,
        X, O, O, O, X, X, X, O, O, X,
        X, O, C, O, O, X, O, O, O, X,
        X, O, O, O, O, O, O, O, O, X,
        X, X, X, X, O, D, O, X, X, X,
        X, O, O, X, X, X, X, X, O, X,
        X, O, O, O, O, O, O, O, O, X)


    val level1 = listOf(
        X, O, O, O, O, O, O, O, O, X,
        X, O, O, O, O, O, O, O, O, X,
        X, O, O, O, O, O, O, O, O, X,
        X, O, O, O, O, O, O, O, K, X,
        X, O, O, O, O, D, O, X, X, X,
        X, C, O, X, X, X, X, X, O, X,
        X, O, X, X, O, O, O, O, O, X,
        X, X, X, O, O, O, O, O, O, X,
        X, O, O, O, O, O, O, O, O, X,
        X, O, O, O, O, O, O, O, O, X)

    val level2 = listOf(
        X, X, X, X, X, O, O, O, O, O,
        X, O, O, O, O, O, O, O, O, O,
        X, K, O, O, O, O, O, O, O, X,
        X, X, C, O, O, O, O, O, O, X,
        X, O, O, O, O, O, O, K, O, X,
        X, X, X, X, O, O, X, X, O, X,
        X, O, O, X, O, O, O, O, O, X,
        X, X, X, X, O, O, D, O, O, X,
        O, O, O, X, X, X, X, X, X, X,
        O, O, O, O, O, O, O, O, O, O)

    val level3 = listOf(
        O, O, O, O, O, O, X, X, O, O,
        O, O, O, O, O, O, O, X, O, O,
        O, O, O, O, O, O, O, X, O, O,
        O, O, O, O, O, O, O, X, X, X,
        O, O, O, O, D, O, O, C, O, X,
        O, O, O, O, X, X, X, O, O, X,
        X, X, O, O, O, O, X, X, X, X,
        O, X, X, O, O, K, X, O, O, O,
        O, O, X, X, X, X, X, O, O, O,
        O, O, O, O, O, O, O, O, O, O)

    val level4 = listOf(
        O, O, O, O, O, X, X, X, X, X,
        O, O, O, O, O, O, O, X, O, O,
        O, O, O, X, X, X, O, C, O, O,
        O, O, O, O, O, X, O, X, O, X,
        O, X, X, O, O, O, O, X, O, X,
        X, L, X, O, O, O, O, X, O, X,
        X, O, X, X, O, O, O, X, O, X,
        X, O, O, O, O, O, O, X, O, X,
        X, X, O, O, O, D, O, X, O, O,
        X, O, O, X, X, X, X, X, O, X)

    val level5 = listOf(
        X, X, X, O, X, X, X, X, X, X,
        X, O, O, O, D, X, O, O, L, X,
        X, O, C, O, O, X, O, O, O, X,
        O, O, O, O, O, O, O, O, O, O,
        X, X, X, O, O, O, O, O, O, X,
        X, O, O, O, O, K, O, O, O, X,
        X, O, O, O, X, X, X, O, O, X,
        X, X, X, O, O, O, O, O, X, X,
        X, O, X, O, O, O, X, O, X, X,
        X, X, X, O, X, X, X, X, X, X)

    val level6 = listOf(
        X, O, O, C, X, X, X, X, O, X,
        O, O, O, O, D, O, X, L, O, X,
        O, O, O, X, X, X, X, O, O, X,
        O, O, O, O, O, O, O, O, O, X,
        X, O, O, X, O, O, O, O, O, X,
        X, O, X, X, O, O, O, O, O, X,
        X, O, X, L, O, O, O, O, O, O,
        X, O, O, O, O, O, X, K, O, O,
        O, O, O, O, O, X, X, X, O, O,
        X, X, X, X, X, X, O, O, O, X)

    val levels = listOf(level0, level1, level2, level3, level4,
                        level5, level6)
}

class GameItem(val size: Point,
               var center: Point = Point.zero)
{
    var upDirection = Direction.Up
    var baseAttackment = false
    var leftAttachment = false
    var rightAttachment = false
    var edgeHold = false

    var velocity = Point.zero

    var tag = 0

    var base: Point
        get() = center - upShift * size.y / 2
        set(value) { center = value + upShift * size.y / 2}

    val upShift: Point get() = upDirection.shift
    val rectangle: PIXI.Rectangle get() = when (upDirection)
    {
        Direction.Up, Direction.Down -> centerRect(center, size)
        else -> centerRect(center, size.transpose())
    }

    val corners: List<Point>
        get() = listOf(
            center + (upShift.rotate90 * size.x + upShift * size.y) / 2,
            center + (-upShift.rotate90 * size.x + upShift * size.y) / 2,
            center + (-upShift.rotate90 * size.x - upShift * size.y) / 2,
            center + (upShift.rotate90 * size.x - upShift * size.y) / 2
        )

    val bottomCorners: List<Point>
        get() = listOf(
            center + (-upShift.rotate90 * size.x - upShift * size.y) / 2,
            center + (upShift.rotate90 * size.x - upShift * size.y) / 2)

    val leftCorners: List<Point>
        get() = listOf(
            center + (upShift.rotate90 * size.x + upShift * size.y) / 2,
            center + (upShift.rotate90 * size.x - upShift * size.y) / 2)

    val rightCorners: List<Point>
        get() = listOf(
            center + (-upShift.rotate90 * size.x + upShift * size.y) / 2,
            center + (-upShift.rotate90 * size.x - upShift * size.y) / 2)

    val topLeftCorner: Point
        get() = center + (upShift.rotate90 * size.x + upShift * size.y) / 2

    val topRightCorner: Point
        get() = center + (-upShift.rotate90 * size.x + upShift * size.y) / 2
}

class Aabb(topLeft: Point, size: Point)
{
    val corners = listOf(
        topLeft,
        topLeft + Point(0, size.y - 1),
        topLeft + Point(size.x - 1, size.y - 1),
        topLeft + Point(size.x - 1))

    val rectangle = rect(topLeft, size)

    fun contains(p: Point) = rectangle.contains(p)

    fun clip(p: Point, velocity: Point, bounds: PIXI.Rectangle): Point
    {
        val target = p + velocity
        var result = target
        for (i in 0..3)
        {
            val c1 = corners[i]
            val c2 = corners[(i + 1).rem(4)]
            if (!bounds.contains((c1 + c2) / 2))
            {
                continue
            }
            val side = c2 - c1
            val norm = (side / Math.abs(
                (side.x + side.y).toDouble()).toInt())
                .rotate90
            val proj = target -
                norm * ((target - c1 dot norm) + 1)
            if ((proj - p).sqrLength < (result - p).sqrLength)
            {
                result = proj
            }
        }
        return result
    }

}

class Collision(val bounds: PIXI.Rectangle)
{
    private val clipAabbs = arrayListOf<Aabb>()
    private val clipProjections = arrayListOf<Point>()

    val aabbs = arrayListOf<Aabb>()
    fun add(aabb: Aabb) = aabbs.add(aabb)

    fun clip(p: Point, velocity: Point): Point
    {
        clipAabbs.clear()
        clipProjections.clear()
        val target = p + velocity

        aabbs.filterTo(clipAabbs) { it.contains(target) }
        clipAabbs.mapTo(clipProjections){ it.clip(p, velocity, bounds) }

        val result = (clipProjections.minBy { (it - p).sqrLength }
            ?: p + velocity)
        return result
    }

    fun hasCollision(p: Point) = aabbs.any{ it.contains(p) }
}

class Level(val container: PIXI.Container,
            val levelMap: List<Int>,
            val stageSize: Point)
{
    val tileSize = Point(64, 64)
    val keySize = Point(28, 20)
    val rowTiles = 10
    val gravity = 1
    val levelEnd = tileSize * rowTiles
    val levelBounds = rect(Point.zero, levelEnd)

    val collision = Collision(levelBounds.shrink(1))

    val character = GameItem(Point(32, 48))
    var heldItem: GameItem? = null
    val keys = arrayListOf<GameItem>()
    val itemsNode = PIXI.Graphics()
    val textNode = PIXI.Text("", TextStyle(fill = "white", font = "24pt Cursive"))
    var exit = GameItem(tileSize)
    var completed = false
    var gameTick = 0

    val itemSprites = hashMapOf<GameItem, PIXI.Sprite>()

    init
    {
        container.addChild(PIXI.Sprite(Resources.background))

        val blocks =
            levelMap.mapIndexed { index, tile ->
                if (tile == Layout.X) index else -1
            }.filter { it >= 0 }.toHashSet()

        while (blocks.isNotEmpty())
        {
            val start = blocks.first().remDiv(rowTiles)
            blocks.remove(blocks.first())
            var width = 1
            var height = 1
            var done = false
            while (!done)
            {
                done = true
                if (start.x + width < rowTiles)
                {
                    val column = (start.y until start.y + height).map{
                        Point(start.x + width, it) unwrapIndex rowTiles
                    }
                    if (blocks.containsAll(column))
                    {
                        blocks.removeAll(column)
                        ++width
                        done = false
                    }
                }

                if (start.y + height < rowTiles)
                {
                    val row = (start.x until start.x + width).map{
                        Point(it, start.y + height) unwrapIndex rowTiles
                    }
                    if (blocks.containsAll(row))
                    {
                        blocks.removeAll(row)
                        ++height
                        done = false
                    }
                }
            }
            collision.add(
                Aabb(start * tileSize,
                     Point(width, height) * tileSize))
        }

        /*val graphics = PIXI.Graphics().apply{ container.addChild(this) }
        graphics.fill(0xff0000)
        {
            for (a in collision.aabbs)
            {
                drawRoundedRect(a.rectangle, 16)
            }
        }*/
        addSprite(exit, Resources.door)

        addSprite(character, Resources.character)

        container.addChild(itemsNode)

        for ((i, tile) in levelMap.withIndex())
        {
            val tileStart = i.remDiv(rowTiles) * tileSize
            val tileCenter = tileStart + tileSize / 2
            when (tile)
            {
                Layout.C -> character.center = tileCenter
                Layout.K -> keys.add(GameItem(keySize, tileCenter))
                Layout.L -> keys.add(GameItem(keySize, tileCenter)
                                         .apply { upDirection = Direction.Down })
                Layout.D ->
                {
                    exit.upDirection =
                        if (levelMap[i + rowTiles] == Layout.X)
                            Direction.Up else Direction.Down

                    exit.center = tileCenter
                    updateSprite(exit)
                }

                Layout.X ->
                    container.addChild(PIXI.Sprite(Resources.stone).apply {
                        position = tileStart.toPixi()
                        scale = PIXI.Point(0.25, 0.25)
                    })
            }
        }

        keys.forEach { addSprite(it, Resources.key) }

        exit.tag = keys.size
        if (exit.tag == 0)
        {
            itemSprites[exit]?.let {
                it.texture = Resources.openDoor
            }
        }

        container.addChild(textNode)
    }

    fun addSprite(item: GameItem, texture: PIXI.Texture)
    {
        val sprite = PIXI.Sprite(texture)
        itemSprites[item] = sprite
        container.addChild(sprite)
        updateSprite(item)
    }

    fun updateSprite(item: GameItem)
    {
        itemSprites[item]?.apply {
            position = item.topLeftCorner.toPixi()
            scale = PIXI.Point(0.25, 0.25)
            rotation = -item.upDirection.angle
        }
    }

    fun removeSprite(item: GameItem)
    {
        itemSprites.remove(item)?.let {
            container.removeChild(it)
        }
    }

    fun jump()
    {
        if (character.baseAttackment || character.edgeHold)
        {
            val velocity = when
            {
                character.edgeHold -> 10
                heldItem == null -> 14
                else -> 10
            }
            character.velocity +=
                character.upShift *
                    (velocity - (character.velocity dot character.upShift))

            character.baseAttackment = false
            character.edgeHold = false
        }
    }

    fun move(direction: Point)
    {
        val existing = character.velocity dot direction
        if (existing < 5)
        {
            character.velocity += direction
        }
    }

    fun moveLeft()
    {
        if (!character.leftAttachment)
        {
            move(character.upShift.rotate90)
            character.edgeHold = false
        }
        else
        {
            if (character.velocity dot character.upShift <= 0
                && levelBounds.contains(character.topLeftCorner)
                && collision.hasCollision(
                    character.topLeftCorner + character.upShift.rotate90
                        - character.upShift * 14)
                && !collision.hasCollision(
                    character.topLeftCorner + character.upShift.rotate90))
            {
                character.edgeHold = true
                character.velocity = Point.zero
            }
        }
    }

    fun moveRight()
    {
        if (!character.rightAttachment)
        {
            move(character.upShift.rotate270)
            character.edgeHold = false
        }
        else
        {
            if (character.velocity dot character.upShift <= 0
                && levelBounds.contains(character.topRightCorner)
                && collision.hasCollision(
                    character.topRightCorner - character.upShift.rotate90
                        - character.upShift * 14)
                && !collision.hasCollision(
                    character.topRightCorner - character.upShift.rotate90))
            {
                character.edgeHold = true
                character.velocity = Point.zero
            }
        }
    }

    fun action()
    {
        if (exit.tag == 0 && exit.rectangle.intersects(character.rectangle))
        {
            completed = true
        }

        val heldItem = heldItem
        if (heldItem == null)
        {
            val key = keys.firstOrNull{
                character.rectangle intersects it.rectangle }
            if (key != null)
            {
                this.heldItem = key
                keys.remove(key)
            }
        }
        else
        {
            heldItem.center = character.center
            heldItem.velocity =
                character.velocity + character.velocity.sign *
                    character.upShift.rotate270 +
                character.upShift * 2
            keys.add(heldItem)
            this.heldItem = null
        }
    }

    fun GameItem.wrap()
    {
        val heldItem = heldItem
        val b = base
        if (b.x <= 0 && velocity.x < 0)
        {
            velocity = velocity.rotate90
            upDirection = upDirection.rotate()
            base = b.rotate90 + Direction.Down.shift

            if (this == character && heldItem != null)
            {
                heldItem.upDirection = heldItem.upDirection.rotate()
            }
        }
        else if (b.y <= 0 && velocity.y < 0)
        {
            velocity = velocity.rotate270
            upDirection = upDirection.unrotate()
            base = b.rotate270 + Direction.Right.shift

            if (this == character && heldItem != null)
            {
                heldItem.upDirection = heldItem.upDirection.unrotate()
            }
        }
        else if (b.x >= levelEnd.x - 1 && velocity.x > 0)
        {
            velocity = velocity.rotate90
            upDirection = upDirection.rotate()
            base = (b - levelEnd).rotate90 + levelEnd + Direction.Up.shift

            if (this == character && heldItem != null)
            {
                heldItem.upDirection = heldItem.upDirection.rotate()
            }
        }
        else if (b.y >= levelEnd.y - 1 && velocity.y > 0)
        {
            velocity = velocity.rotate270
            upDirection = upDirection.unrotate()
            base = (b - levelEnd).rotate270 + levelEnd - Direction.Left.shift

            if (this == character && heldItem != null)
            {
                heldItem.upDirection = heldItem.upDirection.unrotate()
            }
        }
    }

    fun GameItem.update()
    {
        wrap()

        if(baseAttackment && (gameTick and 1) == 0) when
        {
            velocity dot upShift.rotate90 > 0 ->
                velocity -= upShift.rotate90
            velocity dot upShift.rotate90 < 0 ->
                velocity += upShift.rotate90
        }

        val v = velocity

        for (corner in corners)
        {
            val p = collision.clip(corner, velocity)
            velocity = p - corner
        }

        center += velocity

        baseAttackment = bottomCorners.any{
            collision.hasCollision(it - upShift) }
        leftAttachment = leftCorners.any{
            collision.hasCollision(it + upShift.rotate90)}
        rightAttachment = rightCorners.any{
            collision.hasCollision(it - upShift.rotate90)}

        if (v.x != velocity.x)
        {
            velocity = velocity withX 0
        }
        if (v.y != velocity.y)
        {
            velocity = velocity withY  0
        }

        if (!baseAttackment && !edgeHold
            && velocity dot upDirection.shift > -14)
        {
            velocity -= upDirection.shift * gravity
        }
    }

    fun update()
    {
        ++gameTick

        character.update()
        keys.forEach{ it.update() }
        heldItem?.let{
            it.center = character.center
            if (exit.rectangle.intersects(it.rectangle))
            {
                removeSprite(it)
                heldItem = null
                if (--exit.tag == 0)
                {
                    itemSprites[exit]?.let {
                        it.texture = Resources.openDoor
                    }
                }
            }
        }

        itemsNode.clear()

        /*itemsNode.fill(if (exit.tag == 0) 0xbbbbbb else 0x3333dd)
        {
            drawRoundedRect(exit.rectangle, 24)
        }*/

        /*itemsNode.fill(0xffff00)
        {
            drawRoundedRect(character.rectangle, 8)
        }*/

        updateSprite(character)
        keys.forEach{ updateSprite(it) }
        heldItem?.let{ updateSprite(it) }

/*
        itemsNode.fill(0x5555ff)
        {
            val heldItem = heldItem
            if (heldItem != null)
            {
                drawRoundedRect(heldItem.rectangle, 24)
            }
            keys.forEach {
                drawRoundedRect(it.rectangle, 24)
            }
        }
*/

        /*fun PIXI.Rectangle.str() =
            "($x, $y, $width, $height)"

        textNode.text = "${character.base}, ${character.velocity}, ${character.upShift}\n" +
            "${character.baseAttackment}, ${character.leftAttachment}, ${character.rightAttachment}, ${character.edgeHold}\n" +
            character.bottomCorners.joinToString() + "\n${character.rectangle.str()}"*/
    }

    fun pointTile(point: Point) = point / tileSize

    fun tileRect(tile: Point) =
        rect(tile * tileSize, tileSize)
}
