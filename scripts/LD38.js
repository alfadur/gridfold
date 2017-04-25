if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'LD38'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'LD38'.");
}
var LD38 = function (_, Kotlin) {
  'use strict';
  var Enum = Kotlin.kotlin.Enum;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mapOf_0 = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var toHashSet = Kotlin.kotlin.collections.toHashSet_7wnvza$;
  var first = Kotlin.kotlin.collections.first_7wnvza$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var withIndex = Kotlin.kotlin.collections.withIndex_7wnvza$;
  var plus_0 = Kotlin.kotlin.collections.plus_qloxvw$;
  ControllerAction.prototype = Object.create(Enum.prototype);
  ControllerAction.prototype.constructor = ControllerAction;
  KeyboardController.prototype = Object.create(KeyboardControllerBase.prototype);
  KeyboardController.prototype.constructor = KeyboardController;
  MenuKeyboardController.prototype = Object.create(KeyboardControllerBase.prototype);
  MenuKeyboardController.prototype.constructor = MenuKeyboardController;
  Direction.prototype = Object.create(Enum.prototype);
  Direction.prototype.constructor = Direction;
  function ControllerAction(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ControllerAction_initFields() {
    ControllerAction_initFields = function () {
    };
    ControllerAction$Up_instance = new ControllerAction('Up', 0);
    ControllerAction$Left_instance = new ControllerAction('Left', 1);
    ControllerAction$Right_instance = new ControllerAction('Right', 2);
    ControllerAction$Down_instance = new ControllerAction('Down', 3);
    ControllerAction$Select_instance = new ControllerAction('Select', 4);
    ControllerAction$Submit_instance = new ControllerAction('Submit', 5);
    ControllerAction$Restart_instance = new ControllerAction('Restart', 6);
    ControllerAction$_1_instance = new ControllerAction('_1', 7);
    ControllerAction$_2_instance = new ControllerAction('_2', 8);
    ControllerAction$_3_instance = new ControllerAction('_3', 9);
    ControllerAction$_4_instance = new ControllerAction('_4', 10);
    ControllerAction$_5_instance = new ControllerAction('_5', 11);
    ControllerAction$_6_instance = new ControllerAction('_6', 12);
    ControllerAction$_7_instance = new ControllerAction('_7', 13);
    ControllerAction$_8_instance = new ControllerAction('_8', 14);
    ControllerAction$_9_instance = new ControllerAction('_9', 15);
  }
  var ControllerAction$Up_instance;
  function ControllerAction$Up_getInstance() {
    ControllerAction_initFields();
    return ControllerAction$Up_instance;
  }
  var ControllerAction$Left_instance;
  function ControllerAction$Left_getInstance() {
    ControllerAction_initFields();
    return ControllerAction$Left_instance;
  }
  var ControllerAction$Right_instance;
  function ControllerAction$Right_getInstance() {
    ControllerAction_initFields();
    return ControllerAction$Right_instance;
  }
  var ControllerAction$Down_instance;
  function ControllerAction$Down_getInstance() {
    ControllerAction_initFields();
    return ControllerAction$Down_instance;
  }
  var ControllerAction$Select_instance;
  function ControllerAction$Select_getInstance() {
    ControllerAction_initFields();
    return ControllerAction$Select_instance;
  }
  var ControllerAction$Submit_instance;
  function ControllerAction$Submit_getInstance() {
    ControllerAction_initFields();
    return ControllerAction$Submit_instance;
  }
  var ControllerAction$Restart_instance;
  function ControllerAction$Restart_getInstance() {
    ControllerAction_initFields();
    return ControllerAction$Restart_instance;
  }
  var ControllerAction$_1_instance;
  function ControllerAction$_1_getInstance() {
    ControllerAction_initFields();
    return ControllerAction$_1_instance;
  }
  var ControllerAction$_2_instance;
  function ControllerAction$_2_getInstance() {
    ControllerAction_initFields();
    return ControllerAction$_2_instance;
  }
  var ControllerAction$_3_instance;
  function ControllerAction$_3_getInstance() {
    ControllerAction_initFields();
    return ControllerAction$_3_instance;
  }
  var ControllerAction$_4_instance;
  function ControllerAction$_4_getInstance() {
    ControllerAction_initFields();
    return ControllerAction$_4_instance;
  }
  var ControllerAction$_5_instance;
  function ControllerAction$_5_getInstance() {
    ControllerAction_initFields();
    return ControllerAction$_5_instance;
  }
  var ControllerAction$_6_instance;
  function ControllerAction$_6_getInstance() {
    ControllerAction_initFields();
    return ControllerAction$_6_instance;
  }
  var ControllerAction$_7_instance;
  function ControllerAction$_7_getInstance() {
    ControllerAction_initFields();
    return ControllerAction$_7_instance;
  }
  var ControllerAction$_8_instance;
  function ControllerAction$_8_getInstance() {
    ControllerAction_initFields();
    return ControllerAction$_8_instance;
  }
  var ControllerAction$_9_instance;
  function ControllerAction$_9_getInstance() {
    ControllerAction_initFields();
    return ControllerAction$_9_instance;
  }
  ControllerAction.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ControllerAction',
    interfaces: [Enum]
  };
  function ControllerAction$values() {
    return [ControllerAction$Up_getInstance(), ControllerAction$Left_getInstance(), ControllerAction$Right_getInstance(), ControllerAction$Down_getInstance(), ControllerAction$Select_getInstance(), ControllerAction$Submit_getInstance(), ControllerAction$Restart_getInstance(), ControllerAction$_1_getInstance(), ControllerAction$_2_getInstance(), ControllerAction$_3_getInstance(), ControllerAction$_4_getInstance(), ControllerAction$_5_getInstance(), ControllerAction$_6_getInstance(), ControllerAction$_7_getInstance(), ControllerAction$_8_getInstance(), ControllerAction$_9_getInstance()];
  }
  ControllerAction.values = ControllerAction$values;
  function ControllerAction$valueOf(name) {
    switch (name) {
      case 'Up':
        return ControllerAction$Up_getInstance();
      case 'Left':
        return ControllerAction$Left_getInstance();
      case 'Right':
        return ControllerAction$Right_getInstance();
      case 'Down':
        return ControllerAction$Down_getInstance();
      case 'Select':
        return ControllerAction$Select_getInstance();
      case 'Submit':
        return ControllerAction$Submit_getInstance();
      case 'Restart':
        return ControllerAction$Restart_getInstance();
      case '_1':
        return ControllerAction$_1_getInstance();
      case '_2':
        return ControllerAction$_2_getInstance();
      case '_3':
        return ControllerAction$_3_getInstance();
      case '_4':
        return ControllerAction$_4_getInstance();
      case '_5':
        return ControllerAction$_5_getInstance();
      case '_6':
        return ControllerAction$_6_getInstance();
      case '_7':
        return ControllerAction$_7_getInstance();
      case '_8':
        return ControllerAction$_8_getInstance();
      case '_9':
        return ControllerAction$_9_getInstance();
      default:Kotlin.throwISE('No enum constant ControllerAction.' + name);
    }
  }
  ControllerAction.valueOf_61zpoe$ = ControllerAction$valueOf;
  function Controller() {
  }
  Controller.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'Controller',
    interfaces: []
  };
  function KeyboardControllerBase(window_0) {
    this.isDown_el23zu$_0 = Kotlin.kotlin.collections.HashSet_init_287e2$();
    this.wasPressed_el23zu$_0 = Kotlin.kotlin.collections.HashSet_init_287e2$();
    this.continuousMode_el23zu$_0 = true;
    var isDown = this.isDown_el23zu$_0;
    window_0.onkeydown = KeyboardControllerBase_init$lambda(isDown, this);
    window_0.onkeyup = KeyboardControllerBase_init$lambda_0(isDown);
  }
  KeyboardControllerBase.prototype.checkHold_79mwjy$_0 = function (keys) {
    var tmp$;
    var tmp$_0;
    if (keys != null) {
      var any$result;
      any$break: {
        var tmp$_1;
        for (tmp$_1 = 0; tmp$_1 !== keys.length; ++tmp$_1) {
          var element = keys[tmp$_1];
          if (this.isDown_el23zu$_0.contains_11rb$(element)) {
            any$result = true;
            break any$break;
          }
        }
        any$result = false;
      }
      tmp$_0 = any$result;
    }
     else
      tmp$_0 = null;
    return (tmp$ = tmp$_0) != null ? tmp$ : false;
  };
  KeyboardControllerBase.prototype.retrieveFirst_79mwjy$_0 = function (keys) {
    var tmp$, tmp$_0;
    tmp$ = keys != null ? keys : [];
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var key = tmp$[tmp$_0];
      if (this.wasPressed_el23zu$_0.remove_11rb$(key)) {
        return true;
      }
    }
    return false;
  };
  KeyboardControllerBase.prototype.isActive_k8o7am$ = function (action) {
    return this.checkHold_79mwjy$_0(this.holdActionKeys.get_11rb$(action)) || this.retrieveFirst_79mwjy$_0(this.pressActionKeys.get_11rb$(action)) || (this.continuousMode_el23zu$_0 ? this.checkHold_79mwjy$_0(this.mixedActionKeys.get_11rb$(action)) : this.retrieveFirst_79mwjy$_0(this.mixedActionKeys.get_11rb$(action)));
  };
  function KeyboardControllerBase_init$lambda(closure$isDown, this$KeyboardControllerBase) {
    return function (it) {
      if (Kotlin.isType(it, KeyboardEvent)) {
        closure$isDown.add_11rb$(it.keyCode);
        this$KeyboardControllerBase.wasPressed_el23zu$_0.add_11rb$(it.keyCode);
        if (it.keyCode === KeyCodes_getInstance().P) {
          this$KeyboardControllerBase.continuousMode_el23zu$_0 = !this$KeyboardControllerBase.continuousMode_el23zu$_0;
          this$KeyboardControllerBase.wasPressed_el23zu$_0.clear();
        }
      }
    };
  }
  function KeyboardControllerBase_init$lambda_0(closure$isDown) {
    return function (it) {
      if (Kotlin.isType(it, KeyboardEvent)) {
        closure$isDown.remove_11rb$(it.keyCode);
      }
    };
  }
  KeyboardControllerBase.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'KeyboardControllerBase',
    interfaces: [Controller]
  };
  function KeyboardController(window_0) {
    KeyboardControllerBase.call(this, window_0);
    this.holdActionKeys_2f7zbr$_0 = Kotlin.kotlin.collections.emptyMap_q3lmfv$();
    this.mixedActionKeys_2f7zbr$_0 = mapOf_0([to(ControllerAction$Up_getInstance(), [KeyCodes_getInstance().Up, KeyCodes_getInstance().W]), to(ControllerAction$Left_getInstance(), [KeyCodes_getInstance().Left, KeyCodes_getInstance().A]), to(ControllerAction$Down_getInstance(), [KeyCodes_getInstance().Down, KeyCodes_getInstance().S]), to(ControllerAction$Right_getInstance(), [KeyCodes_getInstance().Right, KeyCodes_getInstance().D])]);
    this.pressActionKeys_2f7zbr$_0 = mapOf_0([to(ControllerAction$Submit_getInstance(), [KeyCodes_getInstance().Escape]), to(ControllerAction$Select_getInstance(), [KeyCodes_getInstance().Space, KeyCodes_getInstance().Enter]), to(ControllerAction$Restart_getInstance(), [KeyCodes_getInstance().R]), to(ControllerAction$_1_getInstance(), [KeyCodes_getInstance()._1]), to(ControllerAction$_2_getInstance(), [KeyCodes_getInstance()._2]), to(ControllerAction$_3_getInstance(), [KeyCodes_getInstance()._3]), to(ControllerAction$_4_getInstance(), [KeyCodes_getInstance()._4]), to(ControllerAction$_5_getInstance(), [KeyCodes_getInstance()._5]), to(ControllerAction$_6_getInstance(), [KeyCodes_getInstance()._6]), to(ControllerAction$_7_getInstance(), [KeyCodes_getInstance()._7]), to(ControllerAction$_8_getInstance(), [KeyCodes_getInstance()._8]), to(ControllerAction$_9_getInstance(), [KeyCodes_getInstance()._9])]);
  }
  Object.defineProperty(KeyboardController.prototype, 'holdActionKeys', {
    get: function () {
      return this.holdActionKeys_2f7zbr$_0;
    }
  });
  Object.defineProperty(KeyboardController.prototype, 'mixedActionKeys', {
    get: function () {
      return this.mixedActionKeys_2f7zbr$_0;
    }
  });
  Object.defineProperty(KeyboardController.prototype, 'pressActionKeys', {
    get: function () {
      return this.pressActionKeys_2f7zbr$_0;
    }
  });
  KeyboardController.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'KeyboardController',
    interfaces: [KeyboardControllerBase]
  };
  function MenuKeyboardController(window_0) {
    KeyboardControllerBase.call(this, window_0);
    this.holdActionKeys_lc4sp4$_0 = Kotlin.kotlin.collections.emptyMap_q3lmfv$();
    this.mixedActionKeys_lc4sp4$_0 = Kotlin.kotlin.collections.emptyMap_q3lmfv$();
    this.pressActionKeys_lc4sp4$_0 = mapOf_0([to(ControllerAction$Up_getInstance(), [KeyCodes_getInstance().Up, KeyCodes_getInstance().W]), to(ControllerAction$Left_getInstance(), [KeyCodes_getInstance().Left, KeyCodes_getInstance().A]), to(ControllerAction$Down_getInstance(), [KeyCodes_getInstance().Down, KeyCodes_getInstance().S]), to(ControllerAction$Right_getInstance(), [KeyCodes_getInstance().Right, KeyCodes_getInstance().D]), to(ControllerAction$Select_getInstance(), [KeyCodes_getInstance().Space, KeyCodes_getInstance().Enter])]);
  }
  Object.defineProperty(MenuKeyboardController.prototype, 'holdActionKeys', {
    get: function () {
      return this.holdActionKeys_lc4sp4$_0;
    }
  });
  Object.defineProperty(MenuKeyboardController.prototype, 'mixedActionKeys', {
    get: function () {
      return this.mixedActionKeys_lc4sp4$_0;
    }
  });
  Object.defineProperty(MenuKeyboardController.prototype, 'pressActionKeys', {
    get: function () {
      return this.pressActionKeys_lc4sp4$_0;
    }
  });
  MenuKeyboardController.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'MenuKeyboardController',
    interfaces: [KeyboardControllerBase]
  };
  function GameStage() {
  }
  GameStage.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'GameStage',
    interfaces: []
  };
  function IngameStage(size, levelIndex) {
    this.size = size;
    this.levelIndex = levelIndex;
    this.node = new PIXI.Container();
    this.level = new Level(this.node, Layout_getInstance().levels.get_za3lpa$(this.levelIndex), this.size);
  }
  IngameStage.prototype.handleController_riqvk4$ = function (controller) {
    if (controller.isActive_k8o7am$(ControllerAction$Up_getInstance())) {
      this.level.jump();
    }
    if (controller.isActive_k8o7am$(ControllerAction$Select_getInstance())) {
      this.level.action();
    }
    if (controller.isActive_k8o7am$(ControllerAction$Left_getInstance()))
      this.level.moveLeft();
    else if (controller.isActive_k8o7am$(ControllerAction$Right_getInstance()))
      this.level.moveRight();
  };
  IngameStage.prototype.update = function () {
    this.level.update();
  };
  Object.defineProperty(IngameStage.prototype, 'root', {
    get: function () {
      return this.node;
    }
  });
  Object.defineProperty(IngameStage.prototype, 'gameSize', {
    get: function () {
      return this.size;
    }
  });
  Object.defineProperty(IngameStage.prototype, 'ended', {
    get: function () {
      return this.level.completed;
    }
  });
  IngameStage.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'IngameStage',
    interfaces: [GameStage]
  };
  function Point(x, y) {
    Point$Companion_getInstance();
    if (x === void 0)
      x = 0;
    if (y === void 0)
      y = 0;
    this.x = x;
    this.y = y;
  }
  Point.prototype.unaryMinus = function () {
    return new Point(-this.x, -this.y);
  };
  Point.prototype.plus_h80bq7$ = function (d) {
    return new Point(this.x + d.shift.x | 0, this.y + d.shift.y | 0);
  };
  Point.prototype.minus_h80bq7$ = function (d) {
    return new Point(this.x + d.shift.x | 0, this.y + d.shift.y | 0);
  };
  Point.prototype.plus_1a0nlc$ = function (p) {
    return new Point(this.x + p.x | 0, this.y + p.y | 0);
  };
  Point.prototype.minus_1a0nlc$ = function (p) {
    return new Point(this.x - p.x | 0, this.y - p.y | 0);
  };
  Point.prototype.times_za3lpa$ = function (a) {
    return new Point(Kotlin.imul(this.x, a), Kotlin.imul(this.y, a));
  };
  Point.prototype.div_za3lpa$ = function (a) {
    return new Point(this.x / a | 0, this.y / a | 0);
  };
  Point.prototype.times_1a0nlc$ = function (p) {
    return new Point(Kotlin.imul(this.x, p.x), Kotlin.imul(this.y, p.y));
  };
  Point.prototype.div_1a0nlc$ = function (p) {
    return new Point(this.x / p.x | 0, this.y / p.y | 0);
  };
  Point.prototype.dot_1a0nlc$ = function (p) {
    return Kotlin.imul(this.x, p.x) + Kotlin.imul(this.y, p.y) | 0;
  };
  Object.defineProperty(Point.prototype, 'sqrLength', {
    get: function () {
      return this.dot_1a0nlc$(this);
    }
  });
  Point.prototype.withX_za3lpa$ = function (a) {
    return new Point(a, this.y);
  };
  Point.prototype.withY_za3lpa$ = function (a) {
    return new Point(this.x, a);
  };
  Point.prototype.unwrapIndex_za3lpa$ = function (rowLength) {
    return Kotlin.imul(this.y, rowLength) + this.x | 0;
  };
  Point.prototype.ortho_1a0nlc$ = function (dir) {
    return this.minus_1a0nlc$(dir.times_za3lpa$(dir.dot_1a0nlc$(this)));
  };
  Point.prototype.project_1a0nlc$ = function (dir) {
    return this.ortho_1a0nlc$(dir.rotate90);
  };
  Object.defineProperty(Point.prototype, 'sign', {
    get: function () {
      return new Point(get_sign(this.x), get_sign(this.y));
    }
  });
  Point.prototype.transpose = function () {
    return new Point(this.y, this.x);
  };
  Object.defineProperty(Point.prototype, 'rotate90', {
    get: function () {
      return new Point(this.y, -this.x);
    }
  });
  Object.defineProperty(Point.prototype, 'rotate270', {
    get: function () {
      return new Point(-this.y, this.x);
    }
  });
  Object.defineProperty(Point.prototype, 'companion1', {
    get: function () {
      return this.x;
    }
  });
  Object.defineProperty(Point.prototype, 'companion2', {
    get: function () {
      return this.y;
    }
  });
  Point.prototype.toString = function () {
    return '(' + this.x + ', ' + this.y + ')';
  };
  function Point$Companion() {
    Point$Companion_instance = this;
    this.zero = new Point();
  }
  Point$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Point$Companion_instance = null;
  function Point$Companion_getInstance() {
    if (Point$Companion_instance === null) {
      new Point$Companion();
    }
    return Point$Companion_instance;
  }
  Point.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Point',
    interfaces: []
  };
  Point.prototype.component1 = function () {
    return this.x;
  };
  Point.prototype.component2 = function () {
    return this.y;
  };
  Point.prototype.copy_vux9f0$ = function (x, y) {
    return new Point(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  Point.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  Point.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function Direction(name, ordinal, shift) {
    Direction$Companion_getInstance();
    Enum.call(this);
    this.shift = shift;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Direction_initFields() {
    Direction_initFields = function () {
    };
    Direction$None_instance = new Direction('None', 0, Point$Companion_getInstance().zero);
    Direction$Up_instance = new Direction('Up', 1, new Point(0, -1));
    Direction$Left_instance = new Direction('Left', 2, new Point(-1, 0));
    Direction$Down_instance = new Direction('Down', 3, new Point(0, 1));
    Direction$Right_instance = new Direction('Right', 4, new Point(1, 0));
  }
  var Direction$None_instance;
  function Direction$None_getInstance() {
    Direction_initFields();
    return Direction$None_instance;
  }
  var Direction$Up_instance;
  function Direction$Up_getInstance() {
    Direction_initFields();
    return Direction$Up_instance;
  }
  var Direction$Left_instance;
  function Direction$Left_getInstance() {
    Direction_initFields();
    return Direction$Left_instance;
  }
  var Direction$Down_instance;
  function Direction$Down_getInstance() {
    Direction_initFields();
    return Direction$Down_instance;
  }
  var Direction$Right_instance;
  function Direction$Right_getInstance() {
    Direction_initFields();
    return Direction$Right_instance;
  }
  Object.defineProperty(Direction.prototype, 'angle', {
    get: function () {
      if (Kotlin.equals(this, Direction$None_getInstance()))
        return 0.0;
      else if (Kotlin.equals(this, Direction$Up_getInstance()))
        return 0.0;
      else if (Kotlin.equals(this, Direction$Left_getInstance()))
        return Math.PI / 2;
      else if (Kotlin.equals(this, Direction$Down_getInstance()))
        return Math.PI;
      else if (Kotlin.equals(this, Direction$Right_getInstance()))
        return 3 * Math.PI / 2;
      else
        return Kotlin.noWhenBranchMatched();
    }
  });
  Direction.prototype.rotate = function () {
    if (Kotlin.equals(this, Direction$Up_getInstance()))
      return Direction$Left_getInstance();
    else if (Kotlin.equals(this, Direction$Left_getInstance()))
      return Direction$Down_getInstance();
    else if (Kotlin.equals(this, Direction$Down_getInstance()))
      return Direction$Right_getInstance();
    else if (Kotlin.equals(this, Direction$Right_getInstance()))
      return Direction$Up_getInstance();
    else if (Kotlin.equals(this, Direction$None_getInstance()))
      return Direction$None_getInstance();
    else
      return Kotlin.noWhenBranchMatched();
  };
  Direction.prototype.unrotate = function () {
    if (Kotlin.equals(this, Direction$Up_getInstance()))
      return Direction$Right_getInstance();
    else if (Kotlin.equals(this, Direction$Right_getInstance()))
      return Direction$Down_getInstance();
    else if (Kotlin.equals(this, Direction$Down_getInstance()))
      return Direction$Left_getInstance();
    else if (Kotlin.equals(this, Direction$Left_getInstance()))
      return Direction$Up_getInstance();
    else if (Kotlin.equals(this, Direction$None_getInstance()))
      return Direction$None_getInstance();
    else
      return Kotlin.noWhenBranchMatched();
  };
  function Direction$Companion() {
    Direction$Companion_instance = this;
    this.all = Direction$values();
  }
  Direction$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Direction$Companion_instance = null;
  function Direction$Companion_getInstance() {
    if (Direction$Companion_instance === null) {
      new Direction$Companion();
    }
    return Direction$Companion_instance;
  }
  Direction.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Direction',
    interfaces: [Enum]
  };
  function Direction$values() {
    return [Direction$None_getInstance(), Direction$Up_getInstance(), Direction$Left_getInstance(), Direction$Down_getInstance(), Direction$Right_getInstance()];
  }
  Direction.values = Direction$values;
  function Direction$valueOf(name) {
    switch (name) {
      case 'None':
        return Direction$None_getInstance();
      case 'Up':
        return Direction$Up_getInstance();
      case 'Left':
        return Direction$Left_getInstance();
      case 'Down':
        return Direction$Down_getInstance();
      case 'Right':
        return Direction$Right_getInstance();
      default:Kotlin.throwISE('No enum constant Direction.' + name);
    }
  }
  Direction.valueOf_61zpoe$ = Direction$valueOf;
  function Vector(x, y) {
    Vector$Companion_getInstance();
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    this.x = x;
    this.y = y;
  }
  function Vector$Companion() {
    Vector$Companion_instance = this;
    this.zero = new Vector();
  }
  Vector$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Vector$Companion_instance = null;
  function Vector$Companion_getInstance() {
    if (Vector$Companion_instance === null) {
      new Vector$Companion();
    }
    return Vector$Companion_instance;
  }
  Vector.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Vector',
    interfaces: []
  };
  Vector.prototype.component1 = function () {
    return this.x;
  };
  Vector.prototype.component2 = function () {
    return this.y;
  };
  Vector.prototype.copy_lu1900$ = function (x, y) {
    return new Vector(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  Vector.prototype.toString = function () {
    return 'Vector(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  Vector.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  Vector.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function clamp($receiver, min, max) {
    if ($receiver < min)
      return min;
    else if ($receiver > max)
      return max;
    else
      return $receiver;
  }
  function clamp_0($receiver, min, max) {
    return new Point(clamp($receiver.x, min.x, max.x), clamp($receiver.y, min.y, max.y));
  }
  function remDiv($receiver, divisor) {
    return new Point($receiver % divisor, $receiver / divisor | 0);
  }
  function get_sign($receiver) {
    if ($receiver > 0)
      return 1;
    else if ($receiver < 0)
      return -1;
    else
      return 1;
  }
  function rect(position, size) {
    return new PIXI.Rectangle(position.x, position.y, size.x, size.y);
  }
  function centerRect(center, size) {
    return new PIXI.Rectangle(center.x - (size.x / 2 | 0) | 0, center.y - (size.y / 2 | 0) | 0, size.x, size.y);
  }
  function contains($receiver, point) {
    return (new IntRange(Kotlin.numberToInt($receiver.x), Kotlin.numberToInt($receiver.x) + Kotlin.numberToInt($receiver.width) - 1 | 0)).contains_mef7kx$(point.x) && (new IntRange(Kotlin.numberToInt($receiver.y), Kotlin.numberToInt($receiver.y) + Kotlin.numberToInt($receiver.height) - 1 | 0)).contains_mef7kx$(point.y);
  }
  function get_corner($receiver) {
    return new Point(Kotlin.numberToInt($receiver.x), Kotlin.numberToInt($receiver.y));
  }
  function get_center($receiver) {
    return new Point(Kotlin.numberToInt($receiver.x) + (Kotlin.numberToInt($receiver.width) / 2 | 0) | 0, Kotlin.numberToInt($receiver.y) + (Kotlin.numberToInt($receiver.height) / 2 | 0) | 0);
  }
  function intersects($receiver, r) {
    return contains($receiver, new Point(Kotlin.numberToInt(r.x), Kotlin.numberToInt(r.y))) || contains($receiver, new Point(Kotlin.numberToInt(r.x) + Kotlin.numberToInt(r.width) - 1 | 0, Kotlin.numberToInt(r.y))) || contains($receiver, new Point(Kotlin.numberToInt(r.x) + Kotlin.numberToInt(r.width) - 1 | 0, Kotlin.numberToInt(r.y) + Kotlin.numberToInt(r.height) - 1 | 0)) || contains($receiver, new Point(Kotlin.numberToInt(r.x), Kotlin.numberToInt(r.y) + Kotlin.numberToInt(r.height) - 1 | 0));
  }
  function toPixi($receiver) {
    return new PIXI.Point($receiver.x, $receiver.y);
  }
  function Layout() {
    Layout_instance = this;
    this.O = 0;
    this.X = 1;
    this.D = 2;
    this.K = 3;
    this.L = 5;
    this.C = 4;
    this.base = listOf([this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.C, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O]);
    this.map = listOf([this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.X, this.X, this.X, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.C, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.X, this.X, this.O, this.O, this.X, this.X, this.X, this.X, this.X, this.X, this.X, this.O, this.O, this.X, this.X, this.O, this.X, this.X, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.X, this.X, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.X, this.X, this.X, this.X, this.X, this.X, this.X, this.X, this.X, this.X, this.X, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O]);
    this.level0 = listOf([this.X, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.X, this.X, this.O, this.X, this.X, this.X, this.X, this.X, this.X, this.O, this.X, this.X, this.X, this.X, this.O, this.O, this.X, this.O, this.X, this.X, this.X, this.X, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.X, this.X, this.O, this.O, this.O, this.X, this.X, this.X, this.O, this.O, this.X, this.X, this.O, this.C, this.O, this.O, this.X, this.O, this.O, this.O, this.X, this.X, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.X, this.X, this.X, this.X, this.X, this.O, this.D, this.O, this.X, this.X, this.X, this.X, this.O, this.O, this.X, this.X, this.X, this.X, this.X, this.O, this.X, this.X, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.X]);
    this.level1 = listOf([this.X, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.X, this.X, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.X, this.X, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.X, this.X, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.K, this.X, this.X, this.O, this.O, this.O, this.O, this.D, this.O, this.X, this.X, this.X, this.X, this.C, this.O, this.X, this.X, this.X, this.X, this.X, this.O, this.X, this.X, this.O, this.X, this.X, this.O, this.O, this.O, this.O, this.O, this.X, this.X, this.X, this.X, this.O, this.O, this.O, this.O, this.O, this.O, this.X, this.X, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.X, this.X, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.X]);
    this.level2 = listOf([this.X, this.X, this.X, this.X, this.X, this.O, this.O, this.O, this.O, this.O, this.X, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.X, this.K, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.X, this.X, this.X, this.C, this.O, this.O, this.O, this.O, this.O, this.O, this.X, this.X, this.O, this.O, this.O, this.O, this.O, this.O, this.K, this.O, this.X, this.X, this.X, this.X, this.X, this.O, this.O, this.X, this.X, this.O, this.X, this.X, this.O, this.O, this.X, this.O, this.O, this.O, this.O, this.O, this.X, this.X, this.X, this.X, this.X, this.O, this.O, this.D, this.O, this.O, this.X, this.O, this.O, this.O, this.X, this.X, this.X, this.X, this.X, this.X, this.X, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O]);
    this.level3 = listOf([this.O, this.O, this.O, this.O, this.O, this.O, this.X, this.X, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.X, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.X, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.X, this.X, this.X, this.O, this.O, this.O, this.O, this.D, this.O, this.O, this.C, this.O, this.X, this.O, this.O, this.O, this.O, this.X, this.X, this.X, this.O, this.O, this.X, this.X, this.X, this.O, this.O, this.O, this.O, this.X, this.X, this.X, this.X, this.O, this.X, this.X, this.O, this.O, this.K, this.X, this.O, this.O, this.O, this.O, this.O, this.X, this.X, this.X, this.X, this.X, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O]);
    this.level4 = listOf([this.O, this.O, this.O, this.O, this.O, this.X, this.X, this.X, this.X, this.X, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.X, this.O, this.O, this.O, this.O, this.O, this.X, this.X, this.X, this.O, this.C, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.X, this.O, this.X, this.O, this.X, this.O, this.X, this.X, this.O, this.O, this.O, this.O, this.X, this.O, this.X, this.X, this.L, this.X, this.O, this.O, this.O, this.O, this.X, this.O, this.X, this.X, this.O, this.X, this.X, this.O, this.O, this.O, this.X, this.O, this.X, this.X, this.O, this.O, this.O, this.O, this.O, this.O, this.X, this.O, this.X, this.X, this.X, this.O, this.O, this.O, this.D, this.O, this.X, this.O, this.O, this.X, this.O, this.O, this.X, this.X, this.X, this.X, this.X, this.O, this.X]);
    this.level5 = listOf([this.X, this.X, this.X, this.O, this.X, this.X, this.X, this.X, this.X, this.X, this.X, this.O, this.O, this.O, this.D, this.X, this.O, this.O, this.L, this.X, this.X, this.O, this.C, this.O, this.O, this.X, this.O, this.O, this.O, this.X, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.X, this.X, this.X, this.O, this.O, this.O, this.O, this.O, this.O, this.X, this.X, this.O, this.O, this.O, this.O, this.K, this.O, this.O, this.O, this.X, this.X, this.O, this.O, this.O, this.X, this.X, this.X, this.O, this.O, this.X, this.X, this.X, this.X, this.O, this.O, this.O, this.O, this.O, this.X, this.X, this.X, this.O, this.X, this.O, this.O, this.O, this.X, this.O, this.X, this.X, this.X, this.X, this.X, this.O, this.X, this.X, this.X, this.X, this.X, this.X]);
    this.level6 = listOf([this.X, this.O, this.O, this.C, this.X, this.X, this.X, this.X, this.O, this.X, this.O, this.O, this.O, this.O, this.D, this.O, this.X, this.L, this.O, this.X, this.O, this.O, this.O, this.X, this.X, this.X, this.X, this.O, this.O, this.X, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.X, this.X, this.O, this.O, this.X, this.O, this.O, this.O, this.O, this.O, this.X, this.X, this.O, this.X, this.X, this.O, this.O, this.O, this.O, this.O, this.X, this.X, this.O, this.X, this.L, this.O, this.O, this.O, this.O, this.O, this.O, this.X, this.O, this.O, this.O, this.O, this.O, this.X, this.K, this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.X, this.X, this.X, this.O, this.O, this.X, this.X, this.X, this.X, this.X, this.X, this.O, this.O, this.O, this.X]);
    this.levels = listOf([this.level0, this.level1, this.level2, this.level3, this.level4, this.level5, this.level6]);
  }
  Layout.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Layout',
    interfaces: []
  };
  var Layout_instance = null;
  function Layout_getInstance() {
    if (Layout_instance === null) {
      new Layout();
    }
    return Layout_instance;
  }
  function GameItem(size, center) {
    if (center === void 0)
      center = Point$Companion_getInstance().zero;
    this.size = size;
    this.center = center;
    this.upDirection = Direction$Up_getInstance();
    this.baseAttackment = false;
    this.leftAttachment = false;
    this.rightAttachment = false;
    this.edgeHold = false;
    this.velocity = Point$Companion_getInstance().zero;
    this.tag = 0;
  }
  Object.defineProperty(GameItem.prototype, 'base', {
    get: function () {
      return this.center.minus_1a0nlc$(this.upShift.times_za3lpa$(this.size.y));
    },
    set: function (value) {
      this.center = value.plus_1a0nlc$(this.upShift.times_za3lpa$(this.size.y));
    }
  });
  Object.defineProperty(GameItem.prototype, 'upShift', {
    get: function () {
      return this.upDirection.shift;
    }
  });
  Object.defineProperty(GameItem.prototype, 'rectangle', {
    get: function () {
      var tmp$;
      tmp$ = this.upDirection;
      if (Kotlin.equals(tmp$, Direction$Up_getInstance()) || Kotlin.equals(tmp$, Direction$Down_getInstance()))
        return centerRect(this.center, this.size);
      else
        return centerRect(this.center, this.size.transpose());
    }
  });
  Object.defineProperty(GameItem.prototype, 'corners', {
    get: function () {
      return listOf([this.center.plus_1a0nlc$(this.upShift.rotate90.times_za3lpa$(this.size.x).plus_1a0nlc$(this.upShift.times_za3lpa$(this.size.y)).div_za3lpa$(2)), this.center.plus_1a0nlc$(this.upShift.rotate90.unaryMinus().times_za3lpa$(this.size.x).plus_1a0nlc$(this.upShift.times_za3lpa$(this.size.y)).div_za3lpa$(2)), this.center.plus_1a0nlc$(this.upShift.rotate90.unaryMinus().times_za3lpa$(this.size.x).minus_1a0nlc$(this.upShift.times_za3lpa$(this.size.y)).div_za3lpa$(2)), this.center.plus_1a0nlc$(this.upShift.rotate90.times_za3lpa$(this.size.x).minus_1a0nlc$(this.upShift.times_za3lpa$(this.size.y)).div_za3lpa$(2))]);
    }
  });
  Object.defineProperty(GameItem.prototype, 'bottomCorners', {
    get: function () {
      return listOf([this.center.plus_1a0nlc$(this.upShift.rotate90.unaryMinus().times_za3lpa$(this.size.x).minus_1a0nlc$(this.upShift.times_za3lpa$(this.size.y)).div_za3lpa$(2)), this.center.plus_1a0nlc$(this.upShift.rotate90.times_za3lpa$(this.size.x).minus_1a0nlc$(this.upShift.times_za3lpa$(this.size.y)).div_za3lpa$(2))]);
    }
  });
  Object.defineProperty(GameItem.prototype, 'leftCorners', {
    get: function () {
      return listOf([this.center.plus_1a0nlc$(this.upShift.rotate90.times_za3lpa$(this.size.x).plus_1a0nlc$(this.upShift.times_za3lpa$(this.size.y)).div_za3lpa$(2)), this.center.plus_1a0nlc$(this.upShift.rotate90.times_za3lpa$(this.size.x).minus_1a0nlc$(this.upShift.times_za3lpa$(this.size.y)).div_za3lpa$(2))]);
    }
  });
  Object.defineProperty(GameItem.prototype, 'rightCorners', {
    get: function () {
      return listOf([this.center.plus_1a0nlc$(this.upShift.rotate90.unaryMinus().times_za3lpa$(this.size.x).plus_1a0nlc$(this.upShift.times_za3lpa$(this.size.y)).div_za3lpa$(2)), this.center.plus_1a0nlc$(this.upShift.rotate90.unaryMinus().times_za3lpa$(this.size.x).minus_1a0nlc$(this.upShift.times_za3lpa$(this.size.y)).div_za3lpa$(2))]);
    }
  });
  Object.defineProperty(GameItem.prototype, 'topLeftCorner', {
    get: function () {
      return this.center.plus_1a0nlc$(this.upShift.rotate90.times_za3lpa$(this.size.x).plus_1a0nlc$(this.upShift.times_za3lpa$(this.size.y)).div_za3lpa$(2));
    }
  });
  Object.defineProperty(GameItem.prototype, 'topRightCorner', {
    get: function () {
      return this.center.plus_1a0nlc$(this.upShift.rotate90.unaryMinus().times_za3lpa$(this.size.x).plus_1a0nlc$(this.upShift.times_za3lpa$(this.size.y)).div_za3lpa$(2));
    }
  });
  GameItem.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'GameItem',
    interfaces: []
  };
  function Aabb(topLeft, size) {
    this.corners = listOf([topLeft, topLeft.plus_1a0nlc$(new Point(0, size.y - 1 | 0)), topLeft.plus_1a0nlc$(new Point(size.x - 1 | 0, size.y - 1 | 0)), topLeft.plus_1a0nlc$(new Point(size.x - 1 | 0))]);
    this.rectangle = rect(topLeft, size);
  }
  Aabb.prototype.contains_1a0nlc$ = function (p) {
    return contains(this.rectangle, p);
  };
  Aabb.prototype.clip_csyz3o$ = function (p, velocity) {
    var target = p.plus_1a0nlc$(velocity);
    var result = target;
    for (var i = 0; i <= 3; i++) {
      var c1 = this.corners.get_za3lpa$(i);
      var c2 = this.corners.get_za3lpa$((i + 1 | 0) % 4);
      var side = c2.minus_1a0nlc$(c1);
      var norm = side.div_za3lpa$(Math.abs(side.x + side.y | 0) | 0).rotate90;
      var proj = target.minus_1a0nlc$(norm.times_za3lpa$(target.minus_1a0nlc$(c1).dot_1a0nlc$(norm) + 1 | 0));
      if (proj.minus_1a0nlc$(p).sqrLength < result.minus_1a0nlc$(p).sqrLength) {
        result = proj;
      }
    }
    return result;
  };
  Aabb.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Aabb',
    interfaces: []
  };
  function Collision() {
    this.clipAabbs_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    this.clipProjections_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    this.aabbs = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
  }
  Collision.prototype.add_17khs$ = function (aabb) {
    return this.aabbs.add_11rb$(aabb);
  };
  Collision.prototype.clip_csyz3o$ = function (p, velocity) {
    var tmp$;
    this.clipAabbs_0.clear();
    this.clipProjections_0.clear();
    var target = p.plus_1a0nlc$(velocity);
    var destination = this.clipAabbs_0;
    var tmp$_0;
    tmp$_0 = this.aabbs.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (element.contains_1a0nlc$(target)) {
        destination.add_11rb$(element);
      }
    }
    var destination_0 = this.clipProjections_0;
    var tmp$_1;
    tmp$_1 = this.clipAabbs_0.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      destination_0.add_11rb$(item.clip_csyz3o$(p, velocity));
    }
    var $receiver = this.clipProjections_0;
    var minBy$result;
    minBy$break: {
      var iterator_3 = $receiver.iterator();
      if (!iterator_3.hasNext()) {
        minBy$result = null;
        break minBy$break;
      }
      var minElem = iterator_3.next();
      var minValue = minElem.minus_1a0nlc$(p).sqrLength;
      while (iterator_3.hasNext()) {
        var e = iterator_3.next();
        var v = e.minus_1a0nlc$(p).sqrLength;
        if (Kotlin.compareTo(minValue, v) > 0) {
          minElem = e;
          minValue = v;
        }
      }
      minBy$result = minElem;
    }
    var result = (tmp$ = minBy$result) != null ? tmp$ : p.plus_1a0nlc$(velocity);
    return result;
  };
  Collision.prototype.hasCollision_1a0nlc$ = function (p) {
    var $receiver = this.aabbs;
    var any$result;
    any$break: {
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.contains_1a0nlc$(p)) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
    return any$result;
  };
  Collision.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Collision',
    interfaces: []
  };
  function Level(container, levelMap, stageSize) {
    this.container = container;
    this.levelMap = levelMap;
    this.stageSize = stageSize;
    this.tileSize = new Point(64, 64);
    this.keySize = new Point(28, 20);
    this.rowTiles = 10;
    this.gravity = 1;
    this.levelEnd = this.tileSize.times_za3lpa$(this.rowTiles);
    this.levelBounds = rect(Point$Companion_getInstance().zero, this.levelEnd);
    this.collision = new Collision();
    this.character = new GameItem(new Point(32, 48));
    this.heldItem = null;
    this.keys = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    this.itemsNode = new PIXI.Graphics();
    this.textNode = new PIXI.Text('', new TextStyle('white', void 0, void 0, '24pt Cursive'));
    this.exit = new GameItem(this.tileSize);
    this.completed = false;
    this.gameTick = 0;
    this.itemSprites = Kotlin.kotlin.collections.HashMap_init_q3lmfv$();
    var tmp$_0, tmp$_1;
    this.container.addChild(new PIXI.Sprite(Resources_getInstance().background));
    var $receiver = this.levelMap;
    var destination = Kotlin.kotlin.collections.ArrayList_init_ww73n8$(Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$($receiver, 10));
    var tmp$_2, tmp$_3;
    var index = 0;
    tmp$_2 = $receiver.iterator();
    while (tmp$_2.hasNext()) {
      var item = tmp$_2.next();
      var tmp$_4 = destination.add_11rb$;
      var index_0 = (tmp$_3 = index, index = tmp$_3 + 1 | 0, tmp$_3);
      tmp$_4.call(destination, item === Layout_getInstance().X ? index_0 : -1);
    }
    var destination_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    var tmp$_5;
    tmp$_5 = destination.iterator();
    while (tmp$_5.hasNext()) {
      var element = tmp$_5.next();
      if (element >= 0) {
        destination_0.add_11rb$(element);
      }
    }
    var blocks = toHashSet(destination_0);
    while (!blocks.isEmpty()) {
      var start = remDiv(first(blocks), this.rowTiles);
      blocks.remove_11rb$(first(blocks));
      var width = {v: 1};
      var height = {v: 1};
      var done = false;
      while (!done) {
        done = true;
        if ((start.x + width.v | 0) < this.rowTiles) {
          var $receiver_0 = until(start.y, start.y + height.v | 0);
          var destination_1 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$(Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$($receiver_0, 10));
          var tmp$_6;
          tmp$_6 = $receiver_0.iterator();
          while (tmp$_6.hasNext()) {
            var item_0 = tmp$_6.next();
            destination_1.add_11rb$((new Point(start.x + width.v | 0, item_0)).unwrapIndex_za3lpa$(this.rowTiles));
          }
          var column = destination_1;
          if (blocks.containsAll_brywnq$(column)) {
            blocks.removeAll_brywnq$(column);
            width.v = width.v + 1 | 0;
            done = false;
          }
        }
        if ((start.y + height.v | 0) < this.rowTiles) {
          var $receiver_1 = until(start.x, start.x + width.v | 0);
          var destination_2 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$(Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$($receiver_1, 10));
          var tmp$_7;
          tmp$_7 = $receiver_1.iterator();
          while (tmp$_7.hasNext()) {
            var item_1 = tmp$_7.next();
            destination_2.add_11rb$((new Point(item_1, start.y + height.v | 0)).unwrapIndex_za3lpa$(this.rowTiles));
          }
          var row = destination_2;
          if (blocks.containsAll_brywnq$(row)) {
            blocks.removeAll_brywnq$(row);
            height.v = height.v + 1 | 0;
            done = false;
          }
        }
      }
      this.collision.add_17khs$(new Aabb(start.times_1a0nlc$(this.tileSize), (new Point(width.v, height.v)).times_1a0nlc$(this.tileSize)));
    }
    this.addSprite_3hgrsu$(this.exit, Resources_getInstance().door);
    this.addSprite_3hgrsu$(this.character, Resources_getInstance().character);
    this.container.addChild(this.itemsNode);
    tmp$_0 = withIndex(this.levelMap).iterator();
    while (tmp$_0.hasNext()) {
      var tmp$ = tmp$_0.next();
      var i = tmp$.component1()
      , tile = tmp$.component2();
      var tileStart = remDiv(i, this.rowTiles).times_1a0nlc$(this.tileSize);
      var tileCenter = tileStart.plus_1a0nlc$(this.tileSize.div_za3lpa$(2));
      if (tile === Layout_getInstance().C)
        this.character.center = tileCenter;
      else if (tile === Layout_getInstance().K)
        this.keys.add_11rb$(new GameItem(this.keySize, tileCenter));
      else if (tile === Layout_getInstance().L) {
        var tmp$_8 = this.keys;
        var $receiver_2 = new GameItem(this.keySize, tileCenter);
        $receiver_2.upDirection = Direction$Down_getInstance();
        tmp$_8.add_11rb$($receiver_2);
      }
       else if (tile === Layout_getInstance().D) {
        this.exit.upDirection = this.levelMap.get_za3lpa$(i + this.rowTiles | 0) === Layout_getInstance().X ? Direction$Up_getInstance() : Direction$Down_getInstance();
        this.exit.center = tileCenter;
        this.updateSprite_s70gcb$(this.exit);
      }
       else if (tile === Layout_getInstance().X) {
        var tmp$_9 = this.container;
        var $receiver_3 = new PIXI.Sprite(Resources_getInstance().stone);
        $receiver_3.position = toPixi(tileStart);
        $receiver_3.scale = new PIXI.Point(0.25, 0.25);
        tmp$_9.addChild($receiver_3);
      }
    }
    var tmp$_10;
    tmp$_10 = this.keys.iterator();
    while (tmp$_10.hasNext()) {
      var element_0 = tmp$_10.next();
      this.addSprite_3hgrsu$(element_0, Resources_getInstance().key);
    }
    this.exit.tag = this.keys.size;
    if (this.exit.tag === 0) {
      if ((tmp$_1 = this.itemSprites.get_11rb$(this.exit)) != null) {
        tmp$_1.texture = Resources_getInstance().openDoor;
      }
    }
    this.container.addChild(this.textNode);
  }
  Level.prototype.addSprite_3hgrsu$ = function (item, texture) {
    var sprite = new PIXI.Sprite(texture);
    this.itemSprites.put_xwzc9p$(item, sprite);
    this.container.addChild(sprite);
    this.updateSprite_s70gcb$(item);
  };
  Level.prototype.updateSprite_s70gcb$ = function (item) {
    var tmp$;
    if ((tmp$ = this.itemSprites.get_11rb$(item)) != null) {
      tmp$.position = toPixi(item.topLeftCorner);
      tmp$.scale = new PIXI.Point(0.25, 0.25);
      tmp$.rotation = -item.upDirection.angle;
    }
  };
  Level.prototype.removeSprite_s70gcb$ = function (item) {
    var tmp$;
    if ((tmp$ = this.itemSprites.remove_11rb$(item)) != null) {
      this.container.removeChild(tmp$);
    }
  };
  Level.prototype.jump = function () {
    var tmp$, tmp$_0;
    if (this.character.baseAttackment || this.character.edgeHold) {
      if (this.character.edgeHold)
        tmp$ = 10;
      else if (this.heldItem == null)
        tmp$ = 14;
      else
        tmp$ = 10;
      var velocity = tmp$;
      tmp$_0 = this.character;
      tmp$_0.velocity = tmp$_0.velocity.plus_1a0nlc$(this.character.upDirection.shift.times_za3lpa$(velocity));
      this.character.baseAttackment = false;
      this.character.edgeHold = false;
    }
  };
  Level.prototype.move_1a0nlc$ = function (direction) {
    var tmp$;
    var existing = this.character.velocity.dot_1a0nlc$(direction);
    if (existing < 5) {
      tmp$ = this.character;
      tmp$.velocity = tmp$.velocity.plus_1a0nlc$(direction);
    }
  };
  Level.prototype.moveLeft = function () {
    if (!this.character.leftAttachment) {
      this.move_1a0nlc$(this.character.upShift.rotate90);
      this.character.edgeHold = false;
    }
     else {
      if (this.character.velocity.dot_1a0nlc$(this.character.upShift) <= 0 && contains(this.levelBounds, this.character.topLeftCorner) && this.collision.hasCollision_1a0nlc$(this.character.topLeftCorner.plus_1a0nlc$(this.character.upShift.rotate90).minus_1a0nlc$(this.character.upShift.times_za3lpa$(14))) && !this.collision.hasCollision_1a0nlc$(this.character.topLeftCorner.plus_1a0nlc$(this.character.upShift.rotate90))) {
        this.character.edgeHold = true;
        this.character.velocity = Point$Companion_getInstance().zero;
      }
    }
  };
  Level.prototype.moveRight = function () {
    if (!this.character.rightAttachment) {
      this.move_1a0nlc$(this.character.upShift.rotate270);
      this.character.edgeHold = false;
    }
     else {
      if (this.character.velocity.dot_1a0nlc$(this.character.upShift) <= 0 && contains(this.levelBounds, this.character.topRightCorner) && this.collision.hasCollision_1a0nlc$(this.character.topRightCorner.minus_1a0nlc$(this.character.upShift.rotate90).minus_1a0nlc$(this.character.upShift.times_za3lpa$(14))) && !this.collision.hasCollision_1a0nlc$(this.character.topRightCorner.minus_1a0nlc$(this.character.upShift.rotate90))) {
        this.character.edgeHold = true;
        this.character.velocity = Point$Companion_getInstance().zero;
      }
    }
  };
  Level.prototype.action = function () {
    if (this.exit.tag === 0 && intersects(this.exit.rectangle, this.character.rectangle)) {
      this.completed = true;
    }
    var heldItem = this.heldItem;
    if (heldItem == null) {
      var $receiver = this.keys;
      var firstOrNull$result;
      firstOrNull$break: {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (intersects(this.character.rectangle, element.rectangle)) {
            firstOrNull$result = element;
            break firstOrNull$break;
          }
        }
        firstOrNull$result = null;
      }
      var key = firstOrNull$result;
      if (key != null) {
        this.heldItem = key;
        this.keys.remove_11rb$(key);
      }
    }
     else {
      heldItem.center = this.character.center;
      heldItem.velocity = this.character.velocity.plus_1a0nlc$(this.character.velocity.sign.times_1a0nlc$(this.character.upShift.rotate270)).plus_1a0nlc$(this.character.upShift.times_za3lpa$(2));
      this.keys.add_11rb$(heldItem);
      this.heldItem = null;
    }
  };
  Level.prototype.update_lo1euu$ = function ($receiver) {
    var tmp$;
    if ($receiver.baseAttackment && (this.gameTick & 1) === 0)
      if ($receiver.velocity.dot_1a0nlc$($receiver.upShift.rotate90) > 0)
        $receiver.velocity = $receiver.velocity.minus_1a0nlc$($receiver.upShift.rotate90);
      else if ($receiver.velocity.dot_1a0nlc$($receiver.upShift.rotate90) < 0)
        $receiver.velocity = $receiver.velocity.plus_1a0nlc$($receiver.upShift.rotate90);
    var v = $receiver.velocity;
    tmp$ = $receiver.corners.iterator();
    while (tmp$.hasNext()) {
      var corner = tmp$.next();
      var p = this.collision.clip_csyz3o$(corner, $receiver.velocity);
      $receiver.velocity = p.minus_1a0nlc$(corner);
    }
    $receiver.center = $receiver.center.plus_1a0nlc$($receiver.velocity);
    var $receiver_0 = $receiver.bottomCorners;
    var any$result;
    any$break: {
      var tmp$_0;
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (this.collision.hasCollision_1a0nlc$(element.minus_1a0nlc$($receiver.upShift))) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
    $receiver.baseAttackment = any$result;
    var $receiver_1 = $receiver.leftCorners;
    var any$result_0;
    any$break_0: {
      var tmp$_1;
      tmp$_1 = $receiver_1.iterator();
      while (tmp$_1.hasNext()) {
        var element_0 = tmp$_1.next();
        if (this.collision.hasCollision_1a0nlc$(element_0.plus_1a0nlc$($receiver.upShift.rotate90))) {
          any$result_0 = true;
          break any$break_0;
        }
      }
      any$result_0 = false;
    }
    $receiver.leftAttachment = any$result_0;
    var $receiver_2 = $receiver.rightCorners;
    var any$result_1;
    any$break_1: {
      var tmp$_2;
      tmp$_2 = $receiver_2.iterator();
      while (tmp$_2.hasNext()) {
        var element_1 = tmp$_2.next();
        if (this.collision.hasCollision_1a0nlc$(element_1.minus_1a0nlc$($receiver.upShift.rotate90))) {
          any$result_1 = true;
          break any$break_1;
        }
      }
      any$result_1 = false;
    }
    $receiver.rightAttachment = any$result_1;
    if (v.x !== $receiver.velocity.x) {
      $receiver.velocity = $receiver.velocity.withX_za3lpa$(0);
    }
    if (v.y !== $receiver.velocity.y) {
      $receiver.velocity = $receiver.velocity.withY_za3lpa$(0);
    }
    if (!$receiver.baseAttackment && !$receiver.edgeHold && $receiver.velocity.dot_1a0nlc$($receiver.upDirection.shift) > -14) {
      $receiver.velocity = $receiver.velocity.minus_1a0nlc$($receiver.upDirection.shift.times_za3lpa$(this.gravity));
    }
    var heldItem = this.heldItem;
    var b = $receiver.base;
    if (b.x <= 0 && $receiver.velocity.x < 0) {
      $receiver.velocity = $receiver.velocity.rotate90;
      $receiver.upDirection = $receiver.upDirection.rotate();
      $receiver.base = b.rotate90.plus_1a0nlc$(Direction$Down_getInstance().shift);
      if (Kotlin.equals($receiver, this.character) && heldItem != null) {
        heldItem.upDirection = heldItem.upDirection.rotate();
      }
    }
     else if (b.y <= 0 && $receiver.velocity.y < 0) {
      $receiver.velocity = $receiver.velocity.rotate270;
      $receiver.upDirection = $receiver.upDirection.unrotate();
      $receiver.base = b.rotate270.plus_1a0nlc$(Direction$Right_getInstance().shift);
      if (Kotlin.equals($receiver, this.character) && heldItem != null) {
        heldItem.upDirection = heldItem.upDirection.unrotate();
      }
    }
     else if (b.x >= (this.levelEnd.x - 1 | 0) && $receiver.velocity.x > 0) {
      $receiver.velocity = $receiver.velocity.rotate90;
      $receiver.upDirection = $receiver.upDirection.rotate();
      $receiver.base = b.minus_1a0nlc$(this.levelEnd).rotate90.plus_1a0nlc$(this.levelEnd).plus_1a0nlc$(Direction$Up_getInstance().shift);
      if (Kotlin.equals($receiver, this.character) && heldItem != null) {
        heldItem.upDirection = heldItem.upDirection.rotate();
      }
    }
     else if (b.y >= (this.levelEnd.y - 1 | 0) && $receiver.velocity.y > 0) {
      $receiver.velocity = $receiver.velocity.rotate270;
      $receiver.upDirection = $receiver.upDirection.unrotate();
      $receiver.base = b.minus_1a0nlc$(this.levelEnd).rotate270.plus_1a0nlc$(this.levelEnd).minus_1a0nlc$(Direction$Left_getInstance().shift);
      if (Kotlin.equals($receiver, this.character) && heldItem != null) {
        heldItem.upDirection = heldItem.upDirection.unrotate();
      }
    }
  };
  Level.prototype.update = function () {
    var tmp$, tmp$_0;
    this.gameTick = this.gameTick + 1 | 0;
    this.update_lo1euu$(this.character);
    var tmp$_1;
    tmp$_1 = this.keys.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      this.update_lo1euu$(element);
    }
    if ((tmp$ = this.heldItem) != null) {
      var tmp$_2;
      tmp$.center = this.character.center;
      if (intersects(this.exit.rectangle, tmp$.rectangle)) {
        this.removeSprite_s70gcb$(tmp$);
        this.heldItem = null;
        var tmp$_3;
        tmp$_3 = this.exit;
        tmp$_3.tag = tmp$_3.tag - 1 | 0;
        if (tmp$_3.tag === 0) {
          if ((tmp$_2 = this.itemSprites.get_11rb$(this.exit)) != null) {
            tmp$_2.texture = Resources_getInstance().openDoor;
          }
        }
      }
    }
    this.itemsNode.clear();
    this.updateSprite_s70gcb$(this.character);
    var tmp$_4;
    tmp$_4 = this.keys.iterator();
    while (tmp$_4.hasNext()) {
      var element_0 = tmp$_4.next();
      this.updateSprite_s70gcb$(element_0);
    }
    if ((tmp$_0 = this.heldItem) != null) {
      this.updateSprite_s70gcb$(tmp$_0);
    }
  };
  Level.prototype.pointTile_1a0nlc$ = function (point) {
    return point.div_1a0nlc$(this.tileSize);
  };
  Level.prototype.tileRect_1a0nlc$ = function (tile) {
    return rect(tile.times_1a0nlc$(this.tileSize), this.tileSize);
  };
  Level.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Level',
    interfaces: []
  };
  function Game() {
    this.screenWidth = 640;
    this.screenHeight = 640;
    this.gameSize = new Point(this.screenWidth, this.screenHeight);
    this.renderer = new PIXI.CanvasRenderer(this.screenWidth, this.screenHeight);
    this.stage = new IngameStage(this.gameSize, 0);
    this.controller = new KeyboardController(window);
    var tmp$;
    (tmp$ = document.getElementById('game')) != null ? tmp$.appendChild(this.renderer.view) : null;
    window.requestAnimationFrame(Game_init$lambda(this));
    window.requestAnimationFrame(Game_init$lambda_0);
  }
  function Game$update$lambda(this$Game) {
    return function (it) {
      this$Game.update();
    };
  }
  Game.prototype.update = function () {
    var stage = this.stage;
    stage.handleController_riqvk4$(this.controller);
    stage.update();
    if (stage.ended && Kotlin.isType(stage, IngameStage)) {
      this.stage = new IngameStage(stage.size, (stage.levelIndex + 1 | 0) % Layout_getInstance().levels.size);
    }
    if (this.controller.isActive_k8o7am$(ControllerAction$Restart_getInstance())) {
      this.stage = new IngameStage(stage.size, stage.levelIndex);
    }
    this.renderer.render(this.stage.node);
    window.requestAnimationFrame(Game$update$lambda(this));
  };
  function Game_init$lambda(this$Game) {
    return function (it) {
      this$Game.update();
    };
  }
  function Game_init$lambda_0(it) {
  }
  Game.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Game',
    interfaces: []
  };
  function main$lambda(it) {
    return new Game();
  }
  function main(args) {
    window.onload = main$lambda;
  }
  function TextStyle(fill_0, wordWrap, wordWrapWidth, font, align) {
    if (fill_0 === void 0)
      fill_0 = 'black';
    if (wordWrap === void 0)
      wordWrap = false;
    if (wordWrapWidth === void 0)
      wordWrapWidth = 100;
    if (font === void 0)
      font = null;
    if (align === void 0)
      align = null;
    this.fill = fill_0;
    this.wordWrap = wordWrap;
    this.wordWrapWidth = wordWrapWidth;
    this.font = font;
    this.align = align;
  }
  TextStyle.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TextStyle',
    interfaces: []
  };
  TextStyle.prototype.component1 = function () {
    return this.fill;
  };
  TextStyle.prototype.component2 = function () {
    return this.wordWrap;
  };
  TextStyle.prototype.component3 = function () {
    return this.wordWrapWidth;
  };
  TextStyle.prototype.component4 = function () {
    return this.font;
  };
  TextStyle.prototype.component5 = function () {
    return this.align;
  };
  TextStyle.prototype.copy_ekagzx$ = function (fill_0, wordWrap, wordWrapWidth, font, align) {
    return new TextStyle(fill_0 === void 0 ? this.fill : fill_0, wordWrap === void 0 ? this.wordWrap : wordWrap, wordWrapWidth === void 0 ? this.wordWrapWidth : wordWrapWidth, font === void 0 ? this.font : font, align === void 0 ? this.align : align);
  };
  TextStyle.prototype.toString = function () {
    return 'TextStyle(fill=' + Kotlin.toString(this.fill) + (', wordWrap=' + Kotlin.toString(this.wordWrap)) + (', wordWrapWidth=' + Kotlin.toString(this.wordWrapWidth)) + (', font=' + Kotlin.toString(this.font)) + (', align=' + Kotlin.toString(this.align)) + ')';
  };
  TextStyle.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.fill) | 0;
    result = result * 31 + Kotlin.hashCode(this.wordWrap) | 0;
    result = result * 31 + Kotlin.hashCode(this.wordWrapWidth) | 0;
    result = result * 31 + Kotlin.hashCode(this.font) | 0;
    result = result * 31 + Kotlin.hashCode(this.align) | 0;
    return result;
  };
  TextStyle.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.fill, other.fill) && Kotlin.equals(this.wordWrap, other.wordWrap) && Kotlin.equals(this.wordWrapWidth, other.wordWrapWidth) && Kotlin.equals(this.font, other.font) && Kotlin.equals(this.align, other.align)))));
  };
  var fill = Kotlin.defineInlineFunction('LD38.fill_lbbz6g$', function ($receiver, color, f) {
    $receiver.beginFill(color);
    f($receiver);
    $receiver.endFill();
  });
  function drawRect($receiver, r) {
    return $receiver.drawRect(r.x, r.y, r.width, r.height);
  }
  function drawRoundedRect($receiver, r, radius) {
    return $receiver.drawRoundedRect(r.x, r.y, r.width, r.height, radius);
  }
  function slice($receiver, sizes) {
    var tmp$, tmp$_0;
    var result = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    var x = 0;
    var y = 0;
    for (tmp$ = 0; tmp$ !== sizes.length; ++tmp$) {
      var height = sizes[tmp$];
      for (tmp$_0 = 0; tmp$_0 !== sizes.length; ++tmp$_0) {
        var width = sizes[tmp$_0];
        result.add_11rb$(new PIXI.Texture($receiver, new PIXI.Rectangle(x, y, width, height)));
        x = x + width | 0;
      }
      y = y + height | 0;
      x = 0;
    }
    return Kotlin.kotlin.collections.copyToArray(result);
  }
  function slice$lambda(closure$xFrames, this$slice, closure$frameSize) {
    return function (it) {
      var y = it / closure$xFrames | 0;
      var x = it - Kotlin.imul(y, closure$xFrames) | 0;
      return new PIXI.Texture(this$slice, new PIXI.Rectangle(Kotlin.imul(x, Kotlin.numberToInt(closure$frameSize.x)), Kotlin.imul(y, Kotlin.numberToInt(closure$frameSize.y)), closure$frameSize.x, closure$frameSize.y));
    };
  }
  function slice_0($receiver, frameSize, xFrames, yFrames) {
    return Kotlin.newArrayF(Kotlin.imul(xFrames, yFrames), slice$lambda(xFrames, $receiver, frameSize));
  }
  function plus($receiver, p) {
    return new PIXI.Point(Kotlin.numberToDouble($receiver.x) + Kotlin.numberToDouble(p.x), Kotlin.numberToDouble($receiver.y) + Kotlin.numberToDouble(p.y));
  }
  function Resources() {
    Resources_instance = this;
    this.stone = PIXI.Texture.fromImage('images/stone.png', false);
    this.key = PIXI.Texture.fromImage('images/key.png', false);
    this.door = PIXI.Texture.fromImage('images/door.png', false);
    this.openDoor = PIXI.Texture.fromImage('images/dooropen.png', false);
    this.character = PIXI.Texture.fromImage('images/char1.png', false);
    this.background = PIXI.Texture.fromImage('images/background.png', false);
  }
  Resources.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Resources',
    interfaces: []
  };
  var Resources_instance = null;
  function Resources_getInstance() {
    if (Resources_instance === null) {
      new Resources();
    }
    return Resources_instance;
  }
  function KeyCodes() {
    KeyCodes_instance = this;
    this.Space = 32;
    this.Shift = 16;
    this.Backspace = 8;
    this.Enter = 13;
    this.Escape = 27;
    this.Left = 37;
    this.Up = 38;
    this.Right = 39;
    this.Down = 40;
    this.W = 87;
    this.A = 65;
    this.S = 83;
    this.D = 68;
    this.P = 80;
    this.R = 82;
    this.U = 85;
    this._1 = 49;
    this._2 = 50;
    this._3 = 51;
    this._4 = 52;
    this._5 = 53;
    this._6 = 54;
    this._7 = 55;
    this._8 = 56;
    this._9 = 57;
  }
  KeyCodes.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'KeyCodes',
    interfaces: []
  };
  var KeyCodes_instance = null;
  function KeyCodes_getInstance() {
    if (KeyCodes_instance === null) {
      new KeyCodes();
    }
    return KeyCodes_instance;
  }
  function get_length($receiver) {
    return $receiver.endInclusive - $receiver.start;
  }
  function Event() {
    this.handlers_0 = Kotlin.kotlin.collections.emptyList_287e2$();
  }
  Event.prototype.raise = function () {
    var tmp$;
    tmp$ = this.handlers_0.iterator();
    while (tmp$.hasNext()) {
      var handler = tmp$.next();
      handler();
    }
  };
  Event.prototype.plusAssign_o14v8n$ = function (handler) {
    this.handlers_0 = plus_0(this.handlers_0, handler);
  };
  Event.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Event',
    interfaces: []
  };
  Object.defineProperty(ControllerAction, 'Up', {
    get: ControllerAction$Up_getInstance
  });
  Object.defineProperty(ControllerAction, 'Left', {
    get: ControllerAction$Left_getInstance
  });
  Object.defineProperty(ControllerAction, 'Right', {
    get: ControllerAction$Right_getInstance
  });
  Object.defineProperty(ControllerAction, 'Down', {
    get: ControllerAction$Down_getInstance
  });
  Object.defineProperty(ControllerAction, 'Select', {
    get: ControllerAction$Select_getInstance
  });
  Object.defineProperty(ControllerAction, 'Submit', {
    get: ControllerAction$Submit_getInstance
  });
  Object.defineProperty(ControllerAction, 'Restart', {
    get: ControllerAction$Restart_getInstance
  });
  Object.defineProperty(ControllerAction, '_1', {
    get: ControllerAction$_1_getInstance
  });
  Object.defineProperty(ControllerAction, '_2', {
    get: ControllerAction$_2_getInstance
  });
  Object.defineProperty(ControllerAction, '_3', {
    get: ControllerAction$_3_getInstance
  });
  Object.defineProperty(ControllerAction, '_4', {
    get: ControllerAction$_4_getInstance
  });
  Object.defineProperty(ControllerAction, '_5', {
    get: ControllerAction$_5_getInstance
  });
  Object.defineProperty(ControllerAction, '_6', {
    get: ControllerAction$_6_getInstance
  });
  Object.defineProperty(ControllerAction, '_7', {
    get: ControllerAction$_7_getInstance
  });
  Object.defineProperty(ControllerAction, '_8', {
    get: ControllerAction$_8_getInstance
  });
  Object.defineProperty(ControllerAction, '_9', {
    get: ControllerAction$_9_getInstance
  });
  _.ControllerAction = ControllerAction;
  _.Controller = Controller;
  _.KeyboardControllerBase = KeyboardControllerBase;
  _.KeyboardController = KeyboardController;
  _.MenuKeyboardController = MenuKeyboardController;
  _.GameStage = GameStage;
  _.IngameStage = IngameStage;
  Object.defineProperty(Point, 'Companion', {
    get: Point$Companion_getInstance
  });
  _.Point = Point;
  Object.defineProperty(Direction, 'None', {
    get: Direction$None_getInstance
  });
  Object.defineProperty(Direction, 'Up', {
    get: Direction$Up_getInstance
  });
  Object.defineProperty(Direction, 'Left', {
    get: Direction$Left_getInstance
  });
  Object.defineProperty(Direction, 'Down', {
    get: Direction$Down_getInstance
  });
  Object.defineProperty(Direction, 'Right', {
    get: Direction$Right_getInstance
  });
  Object.defineProperty(Direction, 'Companion', {
    get: Direction$Companion_getInstance
  });
  _.Direction = Direction;
  Object.defineProperty(Vector, 'Companion', {
    get: Vector$Companion_getInstance
  });
  _.Vector = Vector;
  _.clamp_e4yvb3$ = clamp;
  _.clamp_t781d7$ = clamp_0;
  _.remDiv_dqglrj$ = remDiv;
  _.get_sign_s8ev3n$ = get_sign;
  _.rect_csyz3o$ = rect;
  _.centerRect_csyz3o$ = centerRect;
  _.contains_cykl90$ = contains;
  _.get_corner_1az43g$ = get_corner;
  _.get_center_1az43g$ = get_center;
  _.intersects_pcaoi7$ = intersects;
  _.toPixi_vejqkh$ = toPixi;
  Object.defineProperty(_, 'Layout', {
    get: Layout_getInstance
  });
  _.GameItem = GameItem;
  _.Aabb = Aabb;
  _.Collision = Collision;
  _.Level = Level;
  _.Game = Game;
  _.main_kand9s$ = main;
  _.TextStyle = TextStyle;
  _.fill_lbbz6g$ = fill;
  _.drawRect_n3ish7$ = drawRect;
  _.drawRoundedRect_ih967p$ = drawRoundedRect;
  _.slice_55zytm$ = slice;
  _.slice_5vc4hh$ = slice_0;
  _.plus_qaa2nj$ = plus;
  Object.defineProperty(_, 'Resources', {
    get: Resources_getInstance
  });
  Object.defineProperty(_, 'KeyCodes', {
    get: KeyCodes_getInstance
  });
  _.get_length_p6y9l$ = get_length;
  _.Event = Event;
  Kotlin.defineModule('LD38', _);
  main([]);
  return _;
}(typeof LD38 === 'undefined' ? {} : LD38, kotlin);
