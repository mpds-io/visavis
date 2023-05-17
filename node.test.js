"use strict";
"use strict";
Error.stackTraceLimit = 50;
var $;
(function ($) {
})($ || ($ = {}));
module.exports = $;
//mam.ts
;
"use strict"

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var $ = ( typeof module === 'object' ) ? ( module['export'+'s'] = globalThis ) : globalThis
$.$$ = $

;
"use strict";
var $;
(function ($) {
    $.$mol_ambient_ref = Symbol('$mol_ambient_ref');
    function $mol_ambient(overrides) {
        return Object.setPrototypeOf(overrides, this || $);
    }
    $.$mol_ambient = $mol_ambient;
})($ || ($ = {}));
//mol/ambient/ambient.ts
;
"use strict";
var $;
(function ($) {
    const instances = new WeakSet();
    function $mol_delegate(proto, target) {
        const proxy = new Proxy(proto, {
            get: (_, field) => {
                const obj = target();
                let val = Reflect.get(obj, field);
                if (typeof val === 'function') {
                    val = val.bind(obj);
                }
                return val;
            },
            has: (_, field) => Reflect.has(target(), field),
            set: (_, field, value) => Reflect.set(target(), field, value),
            getOwnPropertyDescriptor: (_, field) => Reflect.getOwnPropertyDescriptor(target(), field),
            ownKeys: () => Reflect.ownKeys(target()),
            getPrototypeOf: () => Reflect.getPrototypeOf(target()),
            setPrototypeOf: (_, donor) => Reflect.setPrototypeOf(target(), donor),
            isExtensible: () => Reflect.isExtensible(target()),
            preventExtensions: () => Reflect.preventExtensions(target()),
            apply: (_, self, args) => Reflect.apply(target(), self, args),
            construct: (_, args, retarget) => Reflect.construct(target(), args, retarget),
            defineProperty: (_, field, descr) => Reflect.defineProperty(target(), field, descr),
            deleteProperty: (_, field) => Reflect.deleteProperty(target(), field),
        });
        instances.add(proxy);
        return proxy;
    }
    $.$mol_delegate = $mol_delegate;
    Reflect.defineProperty($mol_delegate, Symbol.hasInstance, {
        value: (obj) => instances.has(obj),
    });
})($ || ($ = {}));
//mol/delegate/delegate.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_owning_map = new WeakMap();
    function $mol_owning_allow(having) {
        try {
            if (!having)
                return false;
            if (typeof having !== 'object')
                return false;
            if (having instanceof $mol_delegate)
                return false;
            if (typeof having['destructor'] !== 'function')
                return false;
            return true;
        }
        catch {
            return false;
        }
    }
    $.$mol_owning_allow = $mol_owning_allow;
    function $mol_owning_get(having, Owner) {
        if (!$mol_owning_allow(having))
            return null;
        while (true) {
            const owner = $.$mol_owning_map.get(having);
            if (!owner)
                return owner;
            if (!Owner)
                return owner;
            if (owner instanceof Owner)
                return owner;
            having = owner;
        }
    }
    $.$mol_owning_get = $mol_owning_get;
    function $mol_owning_check(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having) !== owner)
            return false;
        return true;
    }
    $.$mol_owning_check = $mol_owning_check;
    function $mol_owning_catch(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having))
            return false;
        $.$mol_owning_map.set(having, owner);
        return true;
    }
    $.$mol_owning_catch = $mol_owning_catch;
})($ || ($ = {}));
//mol/owning/owning.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail(error) {
        throw error;
    }
    $.$mol_fail = $mol_fail;
})($ || ($ = {}));
//mol/fail/fail.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail_hidden(error) {
        throw error;
    }
    $.$mol_fail_hidden = $mol_fail_hidden;
})($ || ($ = {}));
//mol/fail/hidden/hidden.ts
;
"use strict";
//mol/type/writable/writable.ts
;
"use strict";
var $;
(function ($) {
    class $mol_object2 {
        static $ = $;
        [Symbol.toStringTag];
        [$mol_ambient_ref] = null;
        get $() {
            if (this[$mol_ambient_ref])
                return this[$mol_ambient_ref];
            const owner = $mol_owning_get(this);
            return this[$mol_ambient_ref] = owner?.$ || $mol_object2.$;
        }
        set $(next) {
            if (this[$mol_ambient_ref])
                $mol_fail_hidden(new Error('Context already defined'));
            this[$mol_ambient_ref] = next;
        }
        static create(init) {
            const obj = new this;
            if (init)
                init(obj);
            return obj;
        }
        static [Symbol.toPrimitive]() {
            return this.toString();
        }
        static toString() {
            if (Symbol.toStringTag in this)
                return this[Symbol.toStringTag];
            return this.name;
        }
        destructor() { }
        toString() {
            return this[Symbol.toStringTag] || this.constructor.name + '()';
        }
        toJSON() {
            return this.toString();
        }
    }
    $.$mol_object2 = $mol_object2;
})($ || ($ = {}));
//mol/object2/object2.ts
;
"use strict";
var $;
(function ($_1) {
    let $$;
    (function ($$) {
        let $;
    })($$ = $_1.$$ || ($_1.$$ = {}));
    $_1.$mol_object_field = Symbol('$mol_object_field');
    class $mol_object extends $mol_object2 {
        static make(config) {
            return super.create(obj => {
                for (let key in config)
                    obj[key] = config[key];
            });
        }
    }
    $_1.$mol_object = $mol_object;
})($ || ($ = {}));
//mol/object/object.ts
;
"use strict";
var $;
(function ($) {
    class $mol_window extends $mol_object {
        static size() {
            return {
                width: 1024,
                height: 768,
            };
        }
    }
    $.$mol_window = $mol_window;
})($ || ($ = {}));
//mol/window/window.node.ts
;
"use strict";
var $;
(function ($) {
    let $mol_wire_cursor;
    (function ($mol_wire_cursor) {
        $mol_wire_cursor[$mol_wire_cursor["stale"] = -1] = "stale";
        $mol_wire_cursor[$mol_wire_cursor["doubt"] = -2] = "doubt";
        $mol_wire_cursor[$mol_wire_cursor["fresh"] = -3] = "fresh";
        $mol_wire_cursor[$mol_wire_cursor["final"] = -4] = "final";
    })($mol_wire_cursor = $.$mol_wire_cursor || ($.$mol_wire_cursor = {}));
})($ || ($ = {}));
//mol/wire/cursor/cursor.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_pub extends Object {
        data = [];
        static get [Symbol.species]() {
            return Array;
        }
        sub_from = 0;
        get sub_list() {
            const res = [];
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                res.push(this.data[i]);
            }
            return res;
        }
        get sub_empty() {
            return this.sub_from === this.data.length;
        }
        sub_on(sub, pub_pos) {
            const pos = this.data.length;
            this.data.push(sub, pub_pos);
            return pos;
        }
        sub_off(sub_pos) {
            if (!(sub_pos < this.data.length)) {
                $mol_fail(new Error(`Wrong pos ${sub_pos}`));
            }
            const end = this.data.length - 2;
            if (sub_pos !== end) {
                this.peer_move(end, sub_pos);
            }
            this.data.pop();
            this.data.pop();
            if (this.data.length === this.sub_from)
                this.reap();
        }
        reap() { }
        promote() {
            $mol_wire_auto()?.track_next(this);
        }
        fresh() { }
        complete() { }
        emit(quant = $mol_wire_cursor.stale) {
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                ;
                this.data[i].absorb(quant);
            }
        }
        peer_move(from_pos, to_pos) {
            const peer = this.data[from_pos];
            const self_pos = this.data[from_pos + 1];
            this.data[to_pos] = peer;
            this.data[to_pos + 1] = self_pos;
            peer.peer_repos(self_pos, to_pos);
        }
        peer_repos(peer_pos, self_pos) {
            this.data[peer_pos + 1] = self_pos;
        }
    }
    $.$mol_wire_pub = $mol_wire_pub;
})($ || ($ = {}));
//mol/wire/pub/pub.ts
;
"use strict";
//mol/wire/sub/sub.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_wire_auto_sub = null;
    function $mol_wire_auto(next = $.$mol_wire_auto_sub) {
        return $.$mol_wire_auto_sub = next;
    }
    $.$mol_wire_auto = $mol_wire_auto;
    $.$mol_wire_affected = [];
})($ || ($ = {}));
//mol/wire/wire.ts
;
"use strict";
var $;
(function ($) {
    $['devtoolsFormatters'] ||= [];
    function $mol_dev_format_register(config) {
        $['devtoolsFormatters'].push(config);
    }
    $.$mol_dev_format_register = $mol_dev_format_register;
    $.$mol_dev_format_head = Symbol('$mol_dev_format_head');
    $.$mol_dev_format_body = Symbol('$mol_dev_format_body');
    $mol_dev_format_register({
        header: (val, config = false) => {
            if (config)
                return null;
            if (!val)
                return null;
            if ($.$mol_dev_format_head in val) {
                return val[$.$mol_dev_format_head]();
            }
            if (typeof val === 'function') {
                return $mol_dev_format_native(val);
            }
            return null;
        },
        hasBody: val => val[$.$mol_dev_format_body],
        body: val => val[$.$mol_dev_format_body](),
    });
    function $mol_dev_format_native(obj) {
        if (typeof obj === 'undefined')
            return $.$mol_dev_format_shade('undefined');
        if (typeof obj !== 'object' && typeof obj !== 'function')
            return obj;
        return [
            'object',
            {
                object: obj,
                config: true,
            },
        ];
    }
    $.$mol_dev_format_native = $mol_dev_format_native;
    function $mol_dev_format_auto(obj) {
        if (obj == null)
            return $.$mol_dev_format_shade(String(obj));
        if (typeof obj === 'object' && $.$mol_dev_format_head in obj) {
            return obj[$.$mol_dev_format_head]();
        }
        return [
            'object',
            {
                object: obj,
                config: false,
            },
        ];
    }
    $.$mol_dev_format_auto = $mol_dev_format_auto;
    function $mol_dev_format_element(element, style, ...content) {
        const styles = [];
        for (let key in style)
            styles.push(`${key} : ${style[key]}`);
        return [
            element,
            {
                style: styles.join(' ; '),
            },
            ...content,
        ];
    }
    $.$mol_dev_format_element = $mol_dev_format_element;
    function $mol_dev_format_span(style, ...content) {
        return $mol_dev_format_element('span', {
            'vertical-align': '8%',
            ...style,
        }, ...content);
    }
    $.$mol_dev_format_span = $mol_dev_format_span;
    $.$mol_dev_format_div = $mol_dev_format_element.bind(null, 'div');
    $.$mol_dev_format_ol = $mol_dev_format_element.bind(null, 'ol');
    $.$mol_dev_format_li = $mol_dev_format_element.bind(null, 'li');
    $.$mol_dev_format_table = $mol_dev_format_element.bind(null, 'table');
    $.$mol_dev_format_tr = $mol_dev_format_element.bind(null, 'tr');
    $.$mol_dev_format_td = $mol_dev_format_element.bind(null, 'td');
    $.$mol_dev_format_accent = $mol_dev_format_span.bind(null, {
        'color': 'magenta',
    });
    $.$mol_dev_format_strong = $mol_dev_format_span.bind(null, {
        'font-weight': 'bold',
    });
    $.$mol_dev_format_string = $mol_dev_format_span.bind(null, {
        'color': 'green',
    });
    $.$mol_dev_format_shade = $mol_dev_format_span.bind(null, {
        'color': 'gray',
    });
    $.$mol_dev_format_indent = $.$mol_dev_format_div.bind(null, {
        'margin-left': '13px'
    });
})($ || ($ = {}));
//mol/dev/format/format.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_pub_sub extends $mol_wire_pub {
        pub_from = 0;
        cursor = $mol_wire_cursor.stale;
        get temp() {
            return false;
        }
        get pub_list() {
            const res = [];
            const max = this.cursor >= 0 ? this.cursor : this.sub_from;
            for (let i = this.pub_from; i < max; i += 2) {
                if (this.data[i])
                    res.push(this.data[i]);
            }
            return res;
        }
        track_on() {
            this.cursor = this.pub_from;
            const sub = $mol_wire_auto();
            $mol_wire_auto(this);
            return sub;
        }
        promote() {
            if (this.cursor >= this.pub_from) {
                $mol_fail(new Error('Circular subscription'));
            }
            super.promote();
        }
        track_next(pub) {
            if (this.cursor < 0)
                $mol_fail(new Error('Promo to non begun sub'));
            if (this.cursor < this.sub_from) {
                const next = this.data[this.cursor];
                if (pub === undefined)
                    return next ?? null;
                if (next === pub) {
                    this.cursor += 2;
                    return next;
                }
                if (next) {
                    if (this.sub_from < this.data.length) {
                        this.peer_move(this.sub_from, this.data.length);
                    }
                    this.peer_move(this.cursor, this.sub_from);
                    this.sub_from += 2;
                }
            }
            else {
                if (pub === undefined)
                    return null;
                if (this.sub_from < this.data.length) {
                    this.peer_move(this.sub_from, this.data.length);
                }
                this.sub_from += 2;
            }
            this.data[this.cursor] = pub;
            this.data[this.cursor + 1] = pub.sub_on(this, this.cursor);
            this.cursor += 2;
            return pub;
        }
        track_off(sub) {
            $mol_wire_auto(sub);
            if (this.cursor < 0) {
                $mol_fail(new Error('End of non begun sub'));
            }
            for (let cursor = this.pub_from; cursor < this.cursor; cursor += 2) {
                const pub = this.data[cursor];
                pub.fresh();
            }
            this.cursor = $mol_wire_cursor.fresh;
        }
        pub_off(sub_pos) {
            this.data[sub_pos] = undefined;
            this.data[sub_pos + 1] = undefined;
        }
        destructor() {
            for (let cursor = this.data.length - 2; cursor >= this.sub_from; cursor -= 2) {
                const sub = this.data[cursor];
                const pos = this.data[cursor + 1];
                sub.pub_off(pos);
                this.data.pop();
                this.data.pop();
            }
            this.cursor = this.pub_from;
            this.track_cut();
            this.cursor = $mol_wire_cursor.final;
        }
        track_cut() {
            if (this.cursor < this.pub_from) {
                $mol_fail(new Error('Cut of non begun sub'));
            }
            let tail = 0;
            for (let cursor = this.cursor; cursor < this.sub_from; cursor += 2) {
                const pub = this.data[cursor];
                pub?.sub_off(this.data[cursor + 1]);
                if (this.sub_from < this.data.length) {
                    this.peer_move(this.data.length - 2, cursor);
                    this.data.pop();
                    this.data.pop();
                }
                else {
                    ++tail;
                }
            }
            for (; tail; --tail) {
                this.data.pop();
                this.data.pop();
            }
            this.sub_from = this.cursor;
        }
        complete() { }
        complete_pubs() {
            const limit = this.cursor < 0 ? this.sub_from : this.cursor;
            for (let cursor = this.pub_from; cursor < limit; cursor += 2) {
                const pub = this.data[cursor];
                pub?.complete();
            }
        }
        absorb(quant = $mol_wire_cursor.stale) {
            if (this.cursor === $mol_wire_cursor.final)
                return;
            if (this.cursor >= quant)
                return;
            this.cursor = quant;
            this.emit($mol_wire_cursor.doubt);
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_native(this);
        }
        get pub_empty() {
            return this.sub_from === this.pub_from;
        }
    }
    $.$mol_wire_pub_sub = $mol_wire_pub_sub;
})($ || ($ = {}));
//mol/wire/pub/sub/sub.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_timeout extends $mol_object2 {
        delay;
        task;
        id;
        constructor(delay, task) {
            super();
            this.delay = delay;
            this.task = task;
            this.id = setTimeout(task, delay);
        }
        destructor() {
            clearTimeout(this.id);
        }
    }
    $.$mol_after_timeout = $mol_after_timeout;
})($ || ($ = {}));
//mol/after/timeout/timeout.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_frame extends $mol_after_timeout {
        task;
        constructor(task) {
            super(16, task);
            this.task = task;
        }
    }
    $.$mol_after_frame = $mol_after_frame;
})($ || ($ = {}));
//mol/after/frame/frame.node.ts
;
"use strict";
var $;
(function ($) {
    function $mol_promise_like(val) {
        return val && typeof val.then === 'function';
    }
    $.$mol_promise_like = $mol_promise_like;
})($ || ($ = {}));
//mol/promise/like/like.ts
;
"use strict";
var $;
(function ($) {
    const handled = new WeakSet();
    class $mol_wire_fiber extends $mol_wire_pub_sub {
        task;
        host;
        static warm = true;
        static planning = new Set();
        static reaping = new Set();
        static plan_task = null;
        static plan() {
            if (this.plan_task)
                return;
            this.plan_task = new $mol_after_frame(() => {
                try {
                    this.sync();
                }
                finally {
                    $mol_wire_fiber.plan_task = null;
                }
            });
        }
        static sync() {
            while (this.planning.size) {
                for (const fiber of this.planning) {
                    this.planning.delete(fiber);
                    if (fiber.cursor >= 0)
                        continue;
                    if (fiber.cursor === $mol_wire_cursor.final)
                        continue;
                    fiber.fresh();
                }
            }
            while (this.reaping.size) {
                const fibers = this.reaping;
                this.reaping = new Set;
                for (const fiber of fibers) {
                    if (!fiber.sub_empty)
                        continue;
                    fiber.destructor();
                }
            }
        }
        [Symbol.toStringTag];
        cache = undefined;
        get args() {
            return this.data.slice(0, this.pub_from);
        }
        result() {
            if ($mol_promise_like(this.cache))
                return;
            if (this.cache instanceof Error)
                return;
            return this.cache;
        }
        field() {
            return this.task.name + '()';
        }
        constructor(id, task, host, args) {
            super();
            this.task = task;
            this.host = host;
            if (args)
                this.data.push(...args);
            this.pub_from = this.sub_from = args?.length ?? 0;
            this[Symbol.toStringTag] = id;
        }
        plan() {
            $mol_wire_fiber.planning.add(this);
            $mol_wire_fiber.plan();
        }
        reap() {
            $mol_wire_fiber.reaping.add(this);
            $mol_wire_fiber.plan();
        }
        toString() {
            return this[Symbol.toStringTag];
        }
        toJSON() {
            return this[Symbol.toStringTag];
        }
        [$mol_dev_format_head]() {
            const cursor = {
                [$mol_wire_cursor.stale]: '🔴',
                [$mol_wire_cursor.doubt]: '🟡',
                [$mol_wire_cursor.fresh]: '🟢',
                [$mol_wire_cursor.final]: '🔵',
            }[this.cursor] ?? this.cursor.toString();
            return $mol_dev_format_div({}, $mol_dev_format_native(this), $mol_dev_format_shade(cursor + ' '), $mol_dev_format_auto(this.cache));
        }
        get $() {
            return (this.host ?? this.task)['$'];
        }
        emit(quant = $mol_wire_cursor.stale) {
            if (this.sub_empty)
                this.plan();
            else
                super.emit(quant);
        }
        fresh() {
            if (this.cursor === $mol_wire_cursor.fresh)
                return;
            if (this.cursor === $mol_wire_cursor.final)
                return;
            check: if (this.cursor === $mol_wire_cursor.doubt) {
                for (let i = this.pub_from; i < this.sub_from; i += 2) {
                    ;
                    this.data[i]?.fresh();
                    if (this.cursor !== $mol_wire_cursor.doubt)
                        break check;
                }
                this.cursor = $mol_wire_cursor.fresh;
                return;
            }
            const bu = this.track_on();
            let result;
            try {
                switch (this.pub_from) {
                    case 0:
                        result = this.task.call(this.host);
                        break;
                    case 1:
                        result = this.task.call(this.host, this.data[0]);
                        break;
                    default:
                        result = this.task.call(this.host, ...this.args);
                        break;
                }
                if ($mol_promise_like(result)) {
                    const put = (res) => {
                        if (this.cache === result)
                            this.put(res);
                        return res;
                    };
                    result = Object.assign(result.then(put, put), {
                        destructor: result['destructor'] ?? (() => { })
                    });
                    handled.add(result);
                }
            }
            catch (error) {
                if (error instanceof Error || $mol_promise_like(error)) {
                    result = error;
                }
                else {
                    result = new Error(String(error), { cause: error });
                }
                if ($mol_promise_like(result) && !handled.has(result)) {
                    result = Object.assign(result.finally(() => {
                        if (this.cache === result)
                            this.absorb();
                    }), {
                        destructor: result['destructor'] ?? (() => { })
                    });
                    handled.add(result);
                }
            }
            if (!$mol_promise_like(result)) {
                this.track_cut();
            }
            this.track_off(bu);
            this.put(result);
        }
        refresh() {
            this.cursor = $mol_wire_cursor.stale;
            this.fresh();
        }
        sync() {
            if (!$mol_wire_fiber.warm) {
                return this.result();
            }
            this.promote();
            this.fresh();
            if (this.cache instanceof Error) {
                return $mol_fail_hidden(this.cache);
            }
            if ($mol_promise_like(this.cache)) {
                return $mol_fail_hidden(this.cache);
            }
            return this.cache;
        }
        async async() {
            while (true) {
                this.fresh();
                if (this.cache instanceof Error) {
                    $mol_fail_hidden(this.cache);
                }
                if (!$mol_promise_like(this.cache))
                    return this.cache;
                await this.cache;
                if (this.cursor === $mol_wire_cursor.final) {
                    await new Promise(() => { });
                }
            }
        }
    }
    $.$mol_wire_fiber = $mol_wire_fiber;
})($ || ($ = {}));
//mol/wire/fiber/fiber.ts
;
"use strict";
var $;
(function ($) {
    const named = new WeakSet();
    function $mol_func_name(func) {
        let name = func.name;
        if (name?.length > 1)
            return name;
        if (named.has(func))
            return name;
        for (let key in this) {
            try {
                if (this[key] !== func)
                    continue;
                name = key;
                Object.defineProperty(func, 'name', { value: name });
                break;
            }
            catch { }
        }
        named.add(func);
        return name;
    }
    $.$mol_func_name = $mol_func_name;
    function $mol_func_name_from(target, source) {
        Object.defineProperty(target, 'name', { value: source.name });
        return target;
    }
    $.$mol_func_name_from = $mol_func_name_from;
})($ || ($ = {}));
//mol/func/name/name.ts
;
"use strict";
var $;
(function ($) {
    function $mol_guid(length = 8, exists = () => false) {
        for (;;) {
            let id = Math.random().toString(36).substring(2, length + 2).toUpperCase();
            if (exists(id))
                continue;
            return id;
        }
    }
    $.$mol_guid = $mol_guid;
})($ || ($ = {}));
//mol/guid/guid.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_key_store = new WeakMap();
    function $mol_key(value) {
        if (!value)
            return JSON.stringify(value);
        if (typeof value !== 'object' && typeof value !== 'function')
            return JSON.stringify(value);
        return JSON.stringify(value, (field, value) => {
            if (!value)
                return value;
            if (typeof value !== 'object' && typeof value !== 'function')
                return value;
            if (Array.isArray(value))
                return value;
            const proto = Reflect.getPrototypeOf(value);
            if (!proto)
                return value;
            if (Reflect.getPrototypeOf(proto) === null)
                return value;
            if ('toJSON' in value)
                return value;
            if (value instanceof RegExp)
                return value.toString();
            let key = $.$mol_key_store.get(value);
            if (key)
                return key;
            key = $mol_guid();
            $.$mol_key_store.set(value, key);
            return key;
        });
    }
    $.$mol_key = $mol_key;
})($ || ($ = {}));
//mol/key/key.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_compare_deep_cache = new WeakMap();
    function $mol_compare_deep(left, right) {
        if (Object.is(left, right))
            return true;
        if (left === null)
            return false;
        if (right === null)
            return false;
        if (typeof left !== 'object')
            return false;
        if (typeof right !== 'object')
            return false;
        const left_proto = Reflect.getPrototypeOf(left);
        const right_proto = Reflect.getPrototypeOf(right);
        if (left_proto !== right_proto)
            return false;
        if (left instanceof Boolean)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Number)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof String)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Date)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof RegExp)
            return left.source === right.source && left.flags === right.flags;
        if (left instanceof Error)
            return left.message === right.message && left.stack === right.stack;
        let left_cache = $.$mol_compare_deep_cache.get(left);
        if (left_cache) {
            const right_cache = left_cache.get(right);
            if (typeof right_cache === 'boolean')
                return right_cache;
        }
        else {
            left_cache = new WeakMap([[right, true]]);
            $.$mol_compare_deep_cache.set(left, left_cache);
        }
        let result;
        try {
            if (!left_proto)
                result = compare_pojo(left, right);
            else if (!Reflect.getPrototypeOf(left_proto))
                result = compare_pojo(left, right);
            else if (Array.isArray(left))
                result = compare_array(left, right);
            else if (left instanceof Set)
                result = compare_set(left, right);
            else if (left instanceof Map)
                result = compare_map(left, right);
            else if (ArrayBuffer.isView(left))
                result = compare_buffer(left, right);
            else if (Symbol.toPrimitive in left)
                result = compare_primitive(left, right);
            else
                result = false;
        }
        finally {
            left_cache.set(right, result);
        }
        return result;
    }
    $.$mol_compare_deep = $mol_compare_deep;
    function compare_array(left, right) {
        const len = left.length;
        if (len !== right.length)
            return false;
        for (let i = 0; i < len; ++i) {
            if (!$mol_compare_deep(left[i], right[i]))
                return false;
        }
        return true;
    }
    function compare_buffer(left, right) {
        const len = left.byteLength;
        if (len !== right.byteLength)
            return false;
        for (let i = 0; i < len; ++i) {
            if (left[i] !== right[i])
                return false;
        }
        return true;
    }
    function compare_iterator(left, right) {
        while (true) {
            const left_next = left.next();
            const right_next = right.next();
            if (left_next.done !== right_next.done)
                return false;
            if (left_next.done)
                break;
            if (!$mol_compare_deep(left_next.value, right_next.value))
                return false;
        }
        return true;
    }
    function compare_set(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.values(), right.values());
    }
    function compare_map(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.keys(), right.keys())
            && compare_iterator(left.values(), right.values());
    }
    function compare_pojo(left, right) {
        const left_keys = Object.getOwnPropertyNames(left);
        const right_keys = Object.getOwnPropertyNames(right);
        if (!compare_array(left_keys, right_keys))
            return false;
        for (let key of left_keys) {
            if (!$mol_compare_deep(left[key], right[key]))
                return false;
        }
        const left_syms = Object.getOwnPropertySymbols(left);
        const right_syms = Object.getOwnPropertySymbols(right);
        if (!compare_array(left_syms, right_syms))
            return false;
        for (let key of left_syms) {
            if (!$mol_compare_deep(left[key], right[key]))
                return false;
        }
        return true;
    }
    function compare_primitive(left, right) {
        return Object.is(left[Symbol.toPrimitive]('default'), right[Symbol.toPrimitive]('default'));
    }
})($ || ($ = {}));
//mol/compare/deep/deep.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_task extends $mol_wire_fiber {
        static getter(task) {
            return function $mol_wire_task_get(host, args) {
                const sub = $mol_wire_auto();
                const existen = sub?.track_next();
                reuse: if (existen) {
                    if (!existen.temp)
                        break reuse;
                    if (existen.host !== host)
                        break reuse;
                    if (existen.task !== task)
                        break reuse;
                    if (!$mol_compare_deep(existen.args, args))
                        break reuse;
                    return existen;
                }
                return new $mol_wire_task(`${host?.[Symbol.toStringTag] ?? host}.${task.name}(#)`, task, host, args);
            };
        }
        get temp() {
            return true;
        }
        complete() {
            if ($mol_promise_like(this.cache))
                return;
            this.destructor();
        }
        put(next) {
            const prev = this.cache;
            this.cache = next;
            if ($mol_promise_like(next)) {
                this.cursor = $mol_wire_cursor.fresh;
                if (next !== prev)
                    this.emit();
                return next;
            }
            this.cursor = $mol_wire_cursor.final;
            if (this.sub_empty)
                this.destructor();
            else if (next !== prev)
                this.emit();
            return next;
        }
    }
    $.$mol_wire_task = $mol_wire_task;
})($ || ($ = {}));
//mol/wire/task/task.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_method(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const temp = $mol_wire_task.getter(orig);
        const value = function (...args) {
            const fiber = temp(this ?? null, args);
            return fiber.sync();
        };
        Object.defineProperty(value, 'name', { value: orig.name + ' ' });
        Object.assign(value, { orig });
        const descr2 = { ...descr, value };
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_method = $mol_wire_method;
})($ || ($ = {}));
//mol/wire/method/method.ts
;
"use strict";
//mol/type/tail/tail.ts
;
"use strict";
//mol/type/foot/foot.ts
;
"use strict";
var $;
(function ($) {
    const catched = new WeakMap();
    function $mol_fail_catch(error) {
        if (typeof error !== 'object')
            return false;
        if ($mol_promise_like(error))
            $mol_fail_hidden(error);
        if (catched.get(error))
            return false;
        catched.set(error, true);
        return true;
    }
    $.$mol_fail_catch = $mol_fail_catch;
})($ || ($ = {}));
//mol/fail/catch/catch.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail_log(error) {
        if ($mol_promise_like(error))
            return false;
        if (!$mol_fail_catch(error))
            return false;
        console.error(error);
        return true;
    }
    $.$mol_fail_log = $mol_fail_log;
})($ || ($ = {}));
//mol/fail/log/log.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_atom extends $mol_wire_fiber {
        static solo(host, task) {
            const field = task.name + '()';
            const existen = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
            if (existen)
                return existen;
            const prefix = host?.[Symbol.toStringTag] ?? (host instanceof Function ? $$.$mol_func_name(host) : host);
            const key = `${prefix}.${field}`;
            const fiber = new $mol_wire_atom(key, task, host, []);
            (host ?? task)[field] = fiber;
            return fiber;
        }
        static plex(host, task, key) {
            const field = task.name + '()';
            let dict = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
            const prefix = host?.[Symbol.toStringTag] ?? (host instanceof Function ? $$.$mol_func_name(host) : host);
            const id = `${prefix}.${task.name}(${$mol_key(key)})`;
            if (dict) {
                const existen = dict.get(id);
                if (existen)
                    return existen;
            }
            else {
                dict = (host ?? task)[field] = new Map();
            }
            const fiber = new $mol_wire_atom(id, task, host, [key]);
            dict.set(id, fiber);
            return fiber;
        }
        static watching = new Set();
        static watcher = null;
        static watch() {
            $mol_wire_atom.watcher = new $mol_after_frame($mol_wire_atom.watch);
            for (const atom of $mol_wire_atom.watching) {
                if (atom.cursor === $mol_wire_cursor.final) {
                    $mol_wire_atom.watching.delete(atom);
                }
                else {
                    atom.cursor = $mol_wire_cursor.stale;
                    atom.fresh();
                }
            }
        }
        watch() {
            if (!$mol_wire_atom.watcher) {
                $mol_wire_atom.watcher = new $mol_after_frame($mol_wire_atom.watch);
            }
            $mol_wire_atom.watching.add(this);
        }
        resync(args) {
            return this.put(this.task.call(this.host, ...args));
        }
        once() {
            return this.sync();
        }
        channel() {
            return Object.assign((next) => {
                if (next !== undefined)
                    return this.resync([...this.args, next]);
                if (!$mol_wire_fiber.warm)
                    return this.result();
                if ($mol_wire_auto()?.temp) {
                    return this.once();
                }
                else {
                    return this.sync();
                }
            }, { atom: this });
        }
        destructor() {
            super.destructor();
            const prev = this.cache;
            if ($mol_owning_check(this, prev)) {
                prev.destructor();
            }
            if (this.pub_from === 0) {
                ;
                (this.host ?? this.task)[this.field()] = null;
            }
            else {
                ;
                (this.host ?? this.task)[this.field()].delete(this[Symbol.toStringTag]);
            }
        }
        put(next) {
            const prev = this.cache;
            update: if (next !== prev) {
                try {
                    if ($mol_compare_deep(prev, next))
                        break update;
                }
                catch (error) {
                    $mol_fail_log(error);
                }
                if ($mol_owning_check(this, prev)) {
                    prev.destructor();
                }
                if ($mol_owning_catch(this, next)) {
                    try {
                        next[Symbol.toStringTag] = this[Symbol.toStringTag];
                    }
                    catch {
                        Object.defineProperty(next, Symbol.toStringTag, { value: this[Symbol.toStringTag] });
                    }
                }
                if (!this.sub_empty)
                    this.emit();
            }
            this.cache = next;
            this.cursor = $mol_wire_cursor.fresh;
            if ($mol_promise_like(next))
                return next;
            this.complete_pubs();
            return next;
        }
    }
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "resync", null);
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "once", null);
    $.$mol_wire_atom = $mol_wire_atom;
})($ || ($ = {}));
//mol/wire/atom/atom.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_solo(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const descr2 = {
            ...descr,
            value: function (...args) {
                let atom = $mol_wire_atom.solo(this, orig);
                if ((args.length === 0) || (args[0] === undefined)) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto()?.temp) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            }
        };
        Reflect.defineProperty(descr2.value, 'name', { value: orig.name + ' ' });
        Object.assign(descr2.value, { orig });
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_solo = $mol_wire_solo;
})($ || ($ = {}));
//mol/wire/solo/solo.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_plex(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const descr2 = {
            ...descr,
            value: function (...args) {
                let atom = $mol_wire_atom.plex(this, orig, args[0]);
                if ((args.length === 1) || (args[1] === undefined)) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto()?.temp) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            }
        };
        Reflect.defineProperty(descr2.value, 'name', { value: orig.name + ' ' });
        Object.assign(descr2.value, { orig });
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_plex = $mol_wire_plex;
})($ || ($ = {}));
//mol/wire/plex/plex.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_mem = $mol_wire_solo;
    $.$mol_mem_key = $mol_wire_plex;
})($ || ($ = {}));
//mol/mem/mem.ts
;
"use strict";
var $;
(function ($) {
})($ || ($ = {}));
//mol/dom/context/context.ts
;
"use strict";
//node/node.ts
;
"use strict";
var $node = new Proxy({ require }, {
    get(target, name, wrapper) {
        if (target[name])
            return target[name];
        const mod = target.require('module');
        if (mod.builtinModules.indexOf(name) >= 0)
            return target.require(name);
        if (name[0] === '.')
            return target.require(name);
        const path = target.require('path');
        const fs = target.require('fs');
        let dir = path.resolve('.');
        const suffix = `./node_modules/${name}`;
        const $$ = $;
        while (!fs.existsSync(path.join(dir, suffix))) {
            const parent = path.resolve(dir, '..');
            if (parent === dir) {
                $$.$mol_exec('.', 'npm', 'install', '--omit=dev', name);
                try {
                    $$.$mol_exec('.', 'npm', 'install', '--omit=dev', '@types/' + name);
                }
                catch { }
                break;
            }
            else {
                dir = parent;
            }
        }
        return target.require(name);
    },
    set(target, name, value) {
        target[name] = value;
        return true;
    },
});
require = (req => Object.assign(function require(name) {
    return $node[name];
}, req))(require);
//node/node.node.ts
;
"use strict";
var $;
(function ($) {
    function $mol_log3_area_lazy(event) {
        const self = this;
        const stack = self.$mol_log3_stack;
        const deep = stack.length;
        let logged = false;
        stack.push(() => {
            logged = true;
            self.$mol_log3_area.call(self, event);
        });
        return () => {
            if (logged)
                self.console.groupEnd();
            if (stack.length > deep)
                stack.length = deep;
        };
    }
    $.$mol_log3_area_lazy = $mol_log3_area_lazy;
    $.$mol_log3_stack = [];
})($ || ($ = {}));
//mol/log3/log3.ts
;
"use strict";
var $;
(function ($) {
    class $mol_span extends $mol_object2 {
        uri;
        source;
        row;
        col;
        length;
        constructor(uri, source, row, col, length) {
            super();
            this.uri = uri;
            this.source = source;
            this.row = row;
            this.col = col;
            this.length = length;
            this[Symbol.toStringTag] = `${this.uri}#${this.row}:${this.col}/${this.length}`;
        }
        static unknown = $mol_span.begin('?');
        static begin(uri, source = '') {
            return new $mol_span(uri, source, 1, 1, 0);
        }
        static end(uri, source) {
            return new $mol_span(uri, source, 1, source.length + 1, length);
        }
        static entire(uri, source) {
            return new $mol_span(uri, source, 1, 1, source.length);
        }
        toString() {
            return this[Symbol.toStringTag];
        }
        toJSON() {
            return {
                uri: this.uri,
                row: this.row,
                col: this.col,
                length: this.length
            };
        }
        error(message, Class = Error) {
            return new Class(`${message}${this}`);
        }
        span(row, col, length) {
            return new $mol_span(this.uri, this.source, row, col, length);
        }
        after(length = 0) {
            return new $mol_span(this.uri, this.source, this.row, this.col + this.length, length);
        }
        slice(begin, end = -1) {
            let len = this.length;
            if (begin < 0)
                begin += len;
            if (end < 0)
                end += len;
            if (begin < 0 || begin > len)
                this.$.$mol_fail(`Begin value '${begin}' out of range ${this}`);
            if (end < 0 || end > len)
                this.$.$mol_fail(`End value '${end}' out of range ${this}`);
            if (end < begin)
                this.$.$mol_fail(`End value '${end}' can't be less than begin value ${this}`);
            return this.span(this.row, this.col + begin, end - begin);
        }
    }
    $.$mol_span = $mol_span;
})($ || ($ = {}));
//mol/span/span.ts
;
"use strict";
var $;
(function ($) {
    function $mol_tree2_to_string(tree) {
        let output = [];
        function dump(tree, prefix = '') {
            if (tree.type.length) {
                if (!prefix.length) {
                    prefix = "\t";
                }
                output.push(tree.type);
                if (tree.kids.length == 1) {
                    output.push(' ');
                    dump(tree.kids[0], prefix);
                    return;
                }
                output.push("\n");
            }
            else if (tree.value.length || prefix.length) {
                output.push("\\" + tree.value + "\n");
            }
            for (const kid of tree.kids) {
                output.push(prefix);
                dump(kid, prefix + "\t");
            }
        }
        dump(tree);
        return output.join('');
    }
    $.$mol_tree2_to_string = $mol_tree2_to_string;
})($ || ($ = {}));
//mol/tree2/to/string/string.ts
;
"use strict";
var $;
(function ($) {
    class $mol_tree2 extends Object {
        type;
        value;
        kids;
        span;
        constructor(type, value, kids, span) {
            super();
            this.type = type;
            this.value = value;
            this.kids = kids;
            this.span = span;
            this[Symbol.toStringTag] = type || '\\' + value;
        }
        static list(kids, span = $mol_span.unknown) {
            return new $mol_tree2('', '', kids, span);
        }
        list(kids) {
            return $mol_tree2.list(kids, this.span);
        }
        static data(value, kids = [], span = $mol_span.unknown) {
            const chunks = value.split('\n');
            if (chunks.length > 1) {
                let kid_span = span.span(span.row, span.col, 0);
                const data = chunks.map(chunk => {
                    kid_span = kid_span.after(chunk.length);
                    return new $mol_tree2('', chunk, [], kid_span);
                });
                kids = [...data, ...kids];
                value = '';
            }
            return new $mol_tree2('', value, kids, span);
        }
        data(value, kids = []) {
            return $mol_tree2.data(value, kids, this.span);
        }
        static struct(type, kids = [], span = $mol_span.unknown) {
            if (/[ \n\t\\]/.test(type)) {
                $$.$mol_fail(span.error(`Wrong type ${JSON.stringify(type)}`));
            }
            return new $mol_tree2(type, '', kids, span);
        }
        struct(type, kids = []) {
            return $mol_tree2.struct(type, kids, this.span);
        }
        clone(kids, span = this.span) {
            return new $mol_tree2(this.type, this.value, kids, span);
        }
        text() {
            var values = [];
            for (var kid of this.kids) {
                if (kid.type)
                    continue;
                values.push(kid.value);
            }
            return this.value + values.join('\n');
        }
        static fromString(str, uri = 'unknown') {
            return $$.$mol_tree2_from_string(str, uri);
        }
        toString() {
            return $$.$mol_tree2_to_string(this);
        }
        insert(value, ...path) {
            if (path.length === 0)
                return value;
            const type = path[0];
            if (typeof type === 'string') {
                let replaced = false;
                const sub = this.kids.map((item, index) => {
                    if (item.type !== type)
                        return item;
                    replaced = true;
                    return item.insert(value, ...path.slice(1));
                }).filter(Boolean);
                if (!replaced && value) {
                    sub.push(this.struct(type, []).insert(value, ...path.slice(1)));
                }
                return this.clone(sub);
            }
            else if (typeof type === 'number') {
                const sub = this.kids.slice();
                sub[type] = (sub[type] || this.list([]))
                    .insert(value, ...path.slice(1));
                return this.clone(sub.filter(Boolean));
            }
            else {
                const kids = ((this.kids.length === 0) ? [this.list([])] : this.kids)
                    .map(item => item.insert(value, ...path.slice(1)))
                    .filter(Boolean);
                return this.clone(kids);
            }
        }
        select(...path) {
            let next = [this];
            for (const type of path) {
                if (!next.length)
                    break;
                const prev = next;
                next = [];
                for (var item of prev) {
                    switch (typeof (type)) {
                        case 'string':
                            for (var child of item.kids) {
                                if (child.type == type) {
                                    next.push(child);
                                }
                            }
                            break;
                        case 'number':
                            if (type < item.kids.length)
                                next.push(item.kids[type]);
                            break;
                        default: next.push(...item.kids);
                    }
                }
            }
            return this.list(next);
        }
        filter(path, value) {
            const sub = this.kids.filter(item => {
                var found = item.select(...path);
                if (value === undefined) {
                    return Boolean(found.kids.length);
                }
                else {
                    return found.kids.some(child => child.value == value);
                }
            });
            return this.clone(sub);
        }
        hack(belt, context = {}) {
            return [].concat(...this.kids.map(child => {
                let handle = belt[child.type] || belt[''];
                if (!handle || handle === Object.prototype[child.type]) {
                    handle = (input, belt, context) => [
                        input.clone(input.hack(belt, context), context.span)
                    ];
                }
                try {
                    return handle(child, belt, context);
                }
                catch (error) {
                    error.message += `\n${child.clone([])}${child.span}`;
                    $mol_fail_hidden(error);
                }
            }));
        }
        error(message, Class = Error) {
            return this.span.error(`${message}\n${this.clone([])}`, Class);
        }
    }
    $.$mol_tree2 = $mol_tree2;
    class $mol_tree2_empty extends $mol_tree2 {
        constructor() {
            super('', '', [], $mol_span.unknown);
        }
    }
    $.$mol_tree2_empty = $mol_tree2_empty;
})($ || ($ = {}));
//mol/tree2/tree2.ts
;
"use strict";
var $;
(function ($) {
    class $mol_error_syntax extends SyntaxError {
        reason;
        line;
        span;
        constructor(reason, line, span) {
            super(`${reason}\n${span}\n${line.substring(0, span.col - 1).replace(/\S/g, ' ')}${''.padEnd(span.length, '!')}\n${line}`);
            this.reason = reason;
            this.line = line;
            this.span = span;
        }
    }
    $.$mol_error_syntax = $mol_error_syntax;
})($ || ($ = {}));
//mol/error/syntax/syntax.ts
;
"use strict";
var $;
(function ($) {
    function $mol_tree2_from_string(str, uri = '?') {
        const span = $mol_span.entire(uri, str);
        var root = $mol_tree2.list([], span);
        var stack = [root];
        var pos = 0, row = 0, min_indent = 0;
        while (str.length > pos) {
            var indent = 0;
            var line_start = pos;
            row++;
            while (str.length > pos && str[pos] == '\t') {
                indent++;
                pos++;
            }
            if (!root.kids.length) {
                min_indent = indent;
            }
            indent -= min_indent;
            if (indent < 0 || indent >= stack.length) {
                const sp = span.span(row, 1, pos - line_start);
                while (str.length > pos && str[pos] != '\n') {
                    pos++;
                }
                if (indent < 0) {
                    if (str.length > pos) {
                        this.$mol_fail(new this.$mol_error_syntax(`Too few tabs`, str.substring(line_start, pos), sp));
                    }
                }
                else {
                    this.$mol_fail(new this.$mol_error_syntax(`Too many tabs`, str.substring(line_start, pos), sp));
                }
            }
            stack.length = indent + 1;
            var parent = stack[indent];
            while (str.length > pos && str[pos] != '\\' && str[pos] != '\n') {
                var error_start = pos;
                while (str.length > pos && (str[pos] == ' ' || str[pos] == '\t')) {
                    pos++;
                }
                if (pos > error_start) {
                    let line_end = str.indexOf('\n', pos);
                    if (line_end === -1)
                        line_end = str.length;
                    const sp = span.span(row, error_start - line_start + 1, pos - error_start);
                    this.$mol_fail(new this.$mol_error_syntax(`Wrong nodes separator`, str.substring(line_start, line_end), sp));
                }
                var type_start = pos;
                while (str.length > pos &&
                    str[pos] != '\\' &&
                    str[pos] != ' ' &&
                    str[pos] != '\t' &&
                    str[pos] != '\n') {
                    pos++;
                }
                if (pos > type_start) {
                    let next = new $mol_tree2(str.slice(type_start, pos), '', [], span.span(row, type_start - line_start + 1, pos - type_start));
                    const parent_kids = parent.kids;
                    parent_kids.push(next);
                    parent = next;
                }
                if (str.length > pos && str[pos] == ' ') {
                    pos++;
                }
            }
            if (str.length > pos && str[pos] == '\\') {
                var data_start = pos;
                while (str.length > pos && str[pos] != '\n') {
                    pos++;
                }
                let next = new $mol_tree2('', str.slice(data_start + 1, pos), [], span.span(row, data_start - line_start + 2, pos - data_start - 1));
                const parent_kids = parent.kids;
                parent_kids.push(next);
                parent = next;
            }
            if (str.length === pos && stack.length > 0) {
                const sp = span.span(row, pos - line_start + 1, 1);
                this.$mol_fail(new this.$mol_error_syntax(`Unexpected EOF, LF required`, str.substring(line_start, str.length), sp));
            }
            stack.push(parent);
            pos++;
        }
        return root;
    }
    $.$mol_tree2_from_string = $mol_tree2_from_string;
})($ || ($ = {}));
//mol/tree2/from/string/string.ts
;
"use strict";
var $;
(function ($) {
    function $mol_tree2_from_json(json, span = $mol_span.unknown) {
        if (typeof json === 'boolean' || typeof json === 'number' || json === null) {
            return new $mol_tree2(String(json), '', [], span);
        }
        if (typeof json === 'string') {
            return $mol_tree2.data(json, [], span);
        }
        if (Array.isArray(json)) {
            const sub = json.map(json => $mol_tree2_from_json(json, span));
            return new $mol_tree2('/', '', sub, span);
        }
        if (ArrayBuffer.isView(json)) {
            const buf = new Uint8Array(json.buffer, json.byteOffset, json.byteLength);
            return $mol_tree2.data(String.fromCharCode(...buf), [], span);
        }
        if (json instanceof Date) {
            return new $mol_tree2('', json.toISOString(), [], span);
        }
        if (typeof json.toJSON === 'function') {
            return $mol_tree2_from_json(json.toJSON());
        }
        if (json instanceof Error) {
            const { name, message, stack } = json;
            json = { ...json, name, message, stack };
        }
        const sub = [];
        for (var key in json) {
            const val = json[key];
            if (val === undefined)
                continue;
            const subsub = $mol_tree2_from_json(val, span);
            if (/^[^\n\t\\ ]+$/.test(key)) {
                sub.push(new $mol_tree2(key, '', [subsub], span));
            }
            else {
                sub.push($mol_tree2.data(key, [subsub], span));
            }
        }
        return new $mol_tree2('*', '', sub, span);
    }
    $.$mol_tree2_from_json = $mol_tree2_from_json;
})($ || ($ = {}));
//mol/tree2/from/json/json.ts
;
"use strict";
var $;
(function ($) {
    class $mol_term_color {
        static reset = this.ansi(0, 0);
        static bold = this.ansi(1, 22);
        static italic = this.ansi(3, 23);
        static underline = this.ansi(4, 24);
        static inverse = this.ansi(7, 27);
        static hidden = this.ansi(8, 28);
        static strike = this.ansi(9, 29);
        static gray = this.ansi(90, 39);
        static red = this.ansi(91, 39);
        static green = this.ansi(92, 39);
        static yellow = this.ansi(93, 39);
        static blue = this.ansi(94, 39);
        static magenta = this.ansi(95, 39);
        static cyan = this.ansi(96, 39);
        static Gray = (str) => this.inverse(this.gray(str));
        static Red = (str) => this.inverse(this.red(str));
        static Green = (str) => this.inverse(this.green(str));
        static Yellow = (str) => this.inverse(this.yellow(str));
        static Blue = (str) => this.inverse(this.blue(str));
        static Magenta = (str) => this.inverse(this.magenta(str));
        static Cyan = (str) => this.inverse(this.cyan(str));
        static ansi(open, close) {
            if (typeof process === 'undefined')
                return String;
            if (!process.stdout.isTTY)
                return String;
            const prefix = `\x1b[${open}m`;
            const postfix = `\x1b[${close}m`;
            const suffix_regexp = new RegExp(postfix.replace('[', '\\['), 'g');
            return function colorer(str) {
                str = String(str);
                if (str === '')
                    return str;
                const suffix = str.replace(suffix_regexp, prefix);
                return prefix + suffix + postfix;
            };
        }
    }
    $.$mol_term_color = $mol_term_color;
})($ || ($ = {}));
//mol/term/color/color.ts
;
"use strict";
var $;
(function ($) {
    function $mol_log3_node_make(level, output, type, color) {
        return function $mol_log3_logger(event) {
            if (!event.time)
                event = { time: new Date().toISOString(), ...event };
            let tree = this.$mol_tree2_from_json(event);
            tree = tree.struct(type, tree.kids);
            let str = color(tree.toString());
            this.console[level](str);
            const self = this;
            return () => self.console.groupEnd();
        };
    }
    $.$mol_log3_node_make = $mol_log3_node_make;
    $.$mol_log3_come = $mol_log3_node_make('info', 'stdout', 'come', $mol_term_color.blue);
    $.$mol_log3_done = $mol_log3_node_make('info', 'stdout', 'done', $mol_term_color.green);
    $.$mol_log3_fail = $mol_log3_node_make('error', 'stderr', 'fail', $mol_term_color.red);
    $.$mol_log3_warn = $mol_log3_node_make('warn', 'stderr', 'warn', $mol_term_color.yellow);
    $.$mol_log3_rise = $mol_log3_node_make('log', 'stdout', 'rise', $mol_term_color.magenta);
    $.$mol_log3_area = $mol_log3_node_make('log', 'stdout', 'area', $mol_term_color.cyan);
})($ || ($ = {}));
//mol/log3/log3.node.ts
;
"use strict";
var $;
(function ($) {
    function $mol_env() {
        return {};
    }
    $.$mol_env = $mol_env;
})($ || ($ = {}));
//mol/env/env.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_env = function $mol_env() {
        return this.process.env;
    };
})($ || ($ = {}));
//mol/env/env.node.ts
;
"use strict";
var $;
(function ($) {
    function $mol_exec(dir, command, ...args) {
        let [app, ...args0] = command.split(' ');
        args = [...args0, ...args];
        this.$mol_log3_come({
            place: '$mol_exec',
            dir: $node.path.relative('', dir),
            message: 'Run',
            command: `${app} ${args.join(' ')}`,
        });
        var res = $node['child_process'].spawnSync(app, args, {
            cwd: $node.path.resolve(dir),
            shell: true,
            env: this.$mol_env(),
        });
        if (res.status || res.error)
            return $mol_fail(res.error || new Error(res.stderr.toString()));
        if (!res.stdout)
            res.stdout = Buffer.from([]);
        return res;
    }
    $.$mol_exec = $mol_exec;
})($ || ($ = {}));
//mol/exec/exec.node.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = new $node.jsdom.JSDOM('', { url: 'https://localhost/' }).window;
})($ || ($ = {}));
//mol/dom/context/context.node.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_tick extends $mol_object2 {
        task;
        promise;
        cancelled = false;
        constructor(task) {
            super();
            this.task = task;
            this.promise = Promise.resolve().then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_tick = $mol_after_tick;
})($ || ($ = {}));
//mol/after/tick/tick.ts
;
"use strict";
var $;
(function ($) {
    class $mol_view_selection extends $mol_object {
        static focused(next, notify) {
            const parents = [];
            let element = next?.[0] ?? $mol_dom_context.document.activeElement;
            while (element) {
                parents.push(element);
                element = element.parentNode;
            }
            if (!next || notify)
                return parents;
            new $mol_after_tick(() => {
                const element = this.focused()[0];
                if (element)
                    element.focus();
                else
                    $mol_dom_context.blur();
            });
            return parents;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view_selection, "focused", null);
    $.$mol_view_selection = $mol_view_selection;
})($ || ($ = {}));
//mol/view/selection/selection.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wrapper extends $mol_object2 {
        static wrap;
        static run(task) {
            return this.func(task)();
        }
        static func(func) {
            return this.wrap(func);
        }
        static get class() {
            return (Class) => {
                const construct = (target, args) => new Class(...args);
                const handler = {
                    construct: this.func(construct)
                };
                handler[Symbol.toStringTag] = Class.name + '#';
                return new Proxy(Class, handler);
            };
        }
        static get method() {
            return (obj, name, descr) => {
                descr.value = this.func(descr.value);
                return descr;
            };
        }
        static get field() {
            return (obj, name, descr) => {
                descr.get = descr.set = this.func(descr.get);
                return descr;
            };
        }
    }
    $.$mol_wrapper = $mol_wrapper;
})($ || ($ = {}));
//mol/wrapper/wrapper.ts
;
"use strict";
var $;
(function ($) {
    class $mol_memo extends $mol_wrapper {
        static wrap(task) {
            const store = new WeakMap();
            return function (next) {
                if (next === undefined && store.has(this))
                    return store.get(this);
                const val = task.call(this, next) ?? next;
                store.set(this, val);
                return val;
            };
        }
    }
    $.$mol_memo = $mol_memo;
})($ || ($ = {}));
//mol/memo/memo.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_qname(name) {
        return name.replace(/\W/g, '').replace(/^(?=\d+)/, '_');
    }
    $.$mol_dom_qname = $mol_dom_qname;
})($ || ($ = {}));
//mol/dom/qname/qname.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_probe(task, def) {
        const warm = $mol_wire_fiber.warm;
        try {
            $mol_wire_fiber.warm = false;
            const res = task();
            if (res === undefined)
                return def;
            return res;
        }
        finally {
            $mol_wire_fiber.warm = warm;
        }
    }
    $.$mol_wire_probe = $mol_wire_probe;
})($ || ($ = {}));
//mol/wire/probe/probe.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_watch() {
        const atom = $mol_wire_auto();
        if (atom instanceof $mol_wire_atom) {
            atom.watch();
        }
        else {
            $mol_fail(new Error('Atom is required for watching'));
        }
    }
    $.$mol_wire_watch = $mol_wire_watch;
})($ || ($ = {}));
//mol/wire/watch/watch.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_solid() {
        const current = $mol_wire_auto();
        if (current.reap !== nothing) {
            current?.sub_on(sub, sub.data.length);
        }
        current.reap = nothing;
    }
    $.$mol_wire_solid = $mol_wire_solid;
    const nothing = () => { };
    const sub = new $mol_wire_pub_sub;
})($ || ($ = {}));
//mol/wire/solid/solid.ts
;
"use strict";
var $;
(function ($) {
    function $mol_const(value) {
        const getter = (() => value);
        getter['()'] = value;
        getter[Symbol.toStringTag] = value;
        return getter;
    }
    $.$mol_const = $mol_const;
})($ || ($ = {}));
//mol/const/const.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_attributes(el, attrs) {
        for (let name in attrs) {
            let val = attrs[name];
            if (val === null || val === false) {
                if (!el.hasAttribute(name))
                    continue;
                el.removeAttribute(name);
            }
            else {
                const str = String(val);
                if (el.getAttribute(name) === str)
                    continue;
                el.setAttribute(name, str);
            }
        }
    }
    $.$mol_dom_render_attributes = $mol_dom_render_attributes;
})($ || ($ = {}));
//mol/dom/render/attributes/attributes.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_async(obj) {
        let fiber;
        const temp = $mol_wire_task.getter(obj);
        return new Proxy(obj, {
            get(obj, field) {
                const val = obj[field];
                if (typeof val !== 'function')
                    return val;
                let fiber;
                const temp = $mol_wire_task.getter(val);
                return function $mol_wire_async(...args) {
                    fiber?.destructor();
                    fiber = temp(obj, args);
                    return fiber.async();
                };
            },
            apply(obj, self, args) {
                fiber?.destructor();
                fiber = temp(self, args);
                return fiber.async();
            },
        });
    }
    $.$mol_wire_async = $mol_wire_async;
})($ || ($ = {}));
//mol/wire/async/async.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_events(el, events, passive = false) {
        for (let name in events) {
            el.addEventListener(name, events[name], { passive });
        }
    }
    $.$mol_dom_render_events = $mol_dom_render_events;
})($ || ($ = {}));
//mol/dom/render/events/events.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_styles(el, styles) {
        for (let name in styles) {
            let val = styles[name];
            const style = el.style;
            const kebab = (name) => name.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
            if (typeof val === 'number') {
                style.setProperty(kebab(name), `${val}px`);
            }
            else {
                style.setProperty(kebab(name), val);
            }
        }
    }
    $.$mol_dom_render_styles = $mol_dom_render_styles;
})($ || ($ = {}));
//mol/dom/render/styles/styles.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_children(el, childNodes) {
        const node_set = new Set(childNodes);
        let nextNode = el.firstChild;
        for (let view of childNodes) {
            if (view == null)
                continue;
            if (view instanceof $mol_dom_context.Node) {
                while (true) {
                    if (!nextNode) {
                        el.appendChild(view);
                        break;
                    }
                    if (nextNode == view) {
                        nextNode = nextNode.nextSibling;
                        break;
                    }
                    else {
                        if (node_set.has(nextNode)) {
                            el.insertBefore(view, nextNode);
                            break;
                        }
                        else {
                            const nn = nextNode.nextSibling;
                            el.removeChild(nextNode);
                            nextNode = nn;
                        }
                    }
                }
            }
            else {
                if (nextNode && nextNode.nodeName === '#text') {
                    const str = String(view);
                    if (nextNode.nodeValue !== str)
                        nextNode.nodeValue = str;
                    nextNode = nextNode.nextSibling;
                }
                else {
                    const textNode = $mol_dom_context.document.createTextNode(String(view));
                    el.insertBefore(textNode, nextNode);
                }
            }
        }
        while (nextNode) {
            const currNode = nextNode;
            nextNode = currNode.nextSibling;
            el.removeChild(currNode);
        }
    }
    $.$mol_dom_render_children = $mol_dom_render_children;
})($ || ($ = {}));
//mol/dom/render/children/children.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_fields(el, fields) {
        for (let key in fields) {
            const val = fields[key];
            if (val === undefined)
                continue;
            el[key] = val;
        }
    }
    $.$mol_dom_render_fields = $mol_dom_render_fields;
})($ || ($ = {}));
//mol/dom/render/fields/fields.ts
;
"use strict";
//mol/type/keys/extract/extract.ts
;
"use strict";
//mol/type/pick/pick.ts
;
"use strict";
var $;
(function ($) {
    let all = [];
    let el = null;
    let timer = null;
    function $mol_style_attach(id, text) {
        all.push(`/* ${id} */\n\n${text}`);
        if (timer)
            return el;
        const doc = $mol_dom_context.document;
        if (!doc)
            return null;
        el = doc.createElement('style');
        el.id = `$mol_style_attach`;
        doc.head.appendChild(el);
        timer = new $mol_after_tick(() => {
            el.innerHTML = '\n' + all.join('\n\n');
            all = [];
            el = null;
            timer = null;
        });
        return el;
    }
    $.$mol_style_attach = $mol_style_attach;
})($ || ($ = {}));
//mol/style/attach/attach.ts
;
"use strict";
var $;
(function ($) {
    class $mol_decor {
        value;
        constructor(value) {
            this.value = value;
        }
        prefix() { return ''; }
        valueOf() { return this.value; }
        postfix() { return ''; }
        toString() {
            return `${this.prefix()}${this.valueOf()}${this.postfix()}`;
        }
    }
    $.$mol_decor = $mol_decor;
})($ || ($ = {}));
//mol/decor/decor.ts
;
"use strict";
var $;
(function ($) {
    class $mol_style_unit extends $mol_decor {
        literal;
        constructor(value, literal) {
            super(value);
            this.literal = literal;
        }
        postfix() {
            return this.literal;
        }
        static per(value) { return `${value}%`; }
        static px(value) { return `${value}px`; }
        static mm(value) { return `${value}mm`; }
        static cm(value) { return `${value}cm`; }
        static Q(value) { return `${value}Q`; }
        static in(value) { return `${value}in`; }
        static pc(value) { return `${value}pc`; }
        static pt(value) { return `${value}pt`; }
        static cap(value) { return `${value}cap`; }
        static ch(value) { return `${value}ch`; }
        static em(value) { return `${value}em`; }
        static rem(value) { return `${value}rem`; }
        static ex(value) { return `${value}ex`; }
        static ic(value) { return `${value}ic`; }
        static lh(value) { return `${value}lh`; }
        static rlh(value) { return `${value}rlh`; }
        static vh(value) { return `${value}vh`; }
        static vw(value) { return `${value}vw`; }
        static vi(value) { return `${value}vi`; }
        static vb(value) { return `${value}vb`; }
        static vmin(value) { return `${value}vmin`; }
        static vmax(value) { return `${value}vmax`; }
        static deg(value) { return `${value}deg`; }
        static rad(value) { return `${value}rad`; }
        static grad(value) { return `${value}grad`; }
        static turn(value) { return `${value}turn`; }
        static s(value) { return `${value}s`; }
        static ms(value) { return `${value}ms`; }
    }
    $.$mol_style_unit = $mol_style_unit;
})($ || ($ = {}));
//mol/style/unit/unit.ts
;
"use strict";
var $;
(function ($) {
    const { per } = $mol_style_unit;
    class $mol_style_func extends $mol_decor {
        name;
        constructor(name, value) {
            super(value);
            this.name = name;
        }
        prefix() { return this.name + '('; }
        postfix() { return ')'; }
        static calc(value) {
            return new $mol_style_func('calc', value);
        }
        static vary(name) {
            return new $mol_style_func('var', name);
        }
        static url(href) {
            return new $mol_style_func('url', JSON.stringify(href));
        }
        static hsla(hue, saturation, lightness, alpha) {
            return new $mol_style_func('hsla', [hue, per(saturation), per(lightness), alpha]);
        }
        static clamp(min, mid, max) {
            return new $mol_style_func('clamp', [min, mid, max]);
        }
        static rgba(red, green, blue, alpha) {
            return new $mol_style_func('rgba', [red, green, blue, alpha]);
        }
        static scale(zoom) {
            return new $mol_style_func('scale', [zoom]);
        }
        static cubic_bezier(x1, y1, x2, y2) {
            return new $mol_style_func('cubic-bezier', [x1, y1, x2, y2]);
        }
    }
    $.$mol_style_func = $mol_style_func;
})($ || ($ = {}));
//mol/style/func/func.ts
;
"use strict";
var $;
(function ($) {
    const { vary } = $mol_style_func;
    $.$mol_theme = {
        back: vary('--mol_theme_back'),
        hover: vary('--mol_theme_hover'),
        card: vary('--mol_theme_card'),
        current: vary('--mol_theme_current'),
        special: vary('--mol_theme_special'),
        text: vary('--mol_theme_text'),
        control: vary('--mol_theme_control'),
        shade: vary('--mol_theme_shade'),
        line: vary('--mol_theme_line'),
        focus: vary('--mol_theme_focus'),
        field: vary('--mol_theme_field'),
        image: vary('--mol_theme_image'),
    };
})($ || ($ = {}));
//mol/theme/theme.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/theme/theme.css", ":root {\n\t--mol_theme_hue: 210deg;\n\t--mol_theme_luma: -1;\n\t--mol_theme_satur: 1;\n\t--mol_theme_image: none;\n}\n\n[mol_theme] {\n\tcolor: var(--mol_theme_text);\n\tfill: var(--mol_theme_text);\n}\n:where([mol_theme]) {\n\tbackground-color: var(--mol_theme_back);\n}\n\t\n:root, [mol_theme] {\n\t--mol_theme_back: hsl( var(--mol_theme_hue), calc( var(--mol_theme_satur) * 20% ), calc( 55% + 45% * var(--mol_theme_luma) ) );\n\t--mol_theme_text: hsl( var(--mol_theme_hue), 0%, calc( 40% - 40% * var(--mol_theme_luma) ) );\n\t--mol_theme_field: hsl( var(--mol_theme_hue), calc( var(--mol_theme_satur) * 50% ), calc( 54% + 46% * var(--mol_theme_luma) ), .25 );\n\t\n\t--mol_theme_card: hsl( var(--mol_theme_hue), calc( var(--mol_theme_satur) * 50% ), calc( 55% + 35% * var(--mol_theme_luma) ), .25 );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 0%, 50%, .1 );\n\t--mol_theme_line: hsl( var(--mol_theme_hue), 0%, 50%, .2 );\n\t--mol_theme_shade: hsl( var(--mol_theme_hue), 0%, 50%, 1 );\n\t\n\t--mol_theme_control: hsl( var(--mol_theme_hue), 50%, calc( 50% - 10% * var(--mol_theme_luma) ) );\n\t--mol_theme_current: hsl( calc( var(--mol_theme_hue) - 90deg ), 50%, calc( 50% - 10% * var(--mol_theme_luma) ) );\n\t--mol_theme_special: hsl( calc( var(--mol_theme_hue) + 90deg ), 50%, calc( 50% - 10% * var(--mol_theme_luma) ) );\n\t--mol_theme_focus: hsl( calc( var(--mol_theme_hue) + 180deg ), 100%, calc( 55% - 10% * var(--mol_theme_luma) ) );\n\t\n}\n\n[mol_theme=\"$mol_theme_light\"] {\n\t--mol_theme_luma: 1;\n\t--mol_theme_image: none;\n}\n\n[mol_theme=\"$mol_theme_dark\"] {\n\t--mol_theme_luma: -1;\n\t--mol_theme_image: invert(1) hue-rotate( 180deg );\n}\n\n[mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_luma: -2;\n\t--mol_theme_back: hsl( var(--mol_theme_hue), 50%, 40% );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 60%, 30% );\n\t--mol_theme_current: hsl( var(--mol_theme_hue), 100%, 20% );\n}\n\n[mol_theme=\"$mol_theme_current\"] {\n\tbackground-color: var(--mol_theme_back);\n\t--mol_theme_back: hsl( calc( var(--mol_theme_hue) - 90deg ), 50%, calc( 50% + 30% * var(--mol_theme_luma) ) );\n}\n\n[mol_theme=\"$mol_theme_special\"] {\n\t--mol_theme_card: hsl( calc( var(--mol_theme_hue) + 90deg ), 50%, calc( 55% + 35% * var(--mol_theme_luma) ), .25 );\n}\n\n[mol_theme=\"$mol_theme_accent\"] {\n\tbackground-color: var(--mol_theme_back);\n\t--mol_theme_luma: -2;\n\t--mol_theme_back: hsl( calc( var(--mol_theme_hue) + 180deg ), 90%, 50% );\n\t--mol_theme_hover: hsl( calc( var(--mol_theme_hue) + 180deg ), 80%, 35% );\n}\n\n[mol_theme=\"$mol_theme_accent\"] [mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: black;\n}\n");
})($ || ($ = {}));
//mol/theme/-css/theme.css.ts
;
"use strict";
var $;
(function ($) {
    const { vary } = $mol_style_func;
    $.$mol_gap = {
        block: vary('--mol_gap_block'),
        text: vary('--mol_gap_text'),
        round: vary('--mol_gap_round'),
        space: vary('--mol_gap_space'),
        blur: vary('--mol_gap_blur'),
    };
})($ || ($ = {}));
//mol/gap/gap.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/gap/gap.css", ":root {\n\t--mol_gap_block: .75rem;\n\t--mol_gap_text: .5rem .75rem;\n\t--mol_gap_round: .25rem;\n\t--mol_gap_space: .25rem;\n\t--mol_gap_blur: .5rem;\n}\n");
})($ || ($ = {}));
//mol/gap/-css/gap.css.ts
;
"use strict";
var $;
(function ($) {
    function $mol_view_visible_width() {
        return $mol_window.size().width;
    }
    $.$mol_view_visible_width = $mol_view_visible_width;
    function $mol_view_visible_height() {
        return $mol_window.size().height;
    }
    $.$mol_view_visible_height = $mol_view_visible_height;
    function $mol_view_state_key(suffix) {
        return suffix;
    }
    $.$mol_view_state_key = $mol_view_state_key;
    const error_showed = new WeakMap();
    class $mol_view extends $mol_object {
        static Root(id) {
            return new this;
        }
        autorun() {
            try {
                this.dom_tree();
                document.title = this.title();
            }
            catch (error) {
                $mol_fail_log(error);
            }
        }
        static autobind() {
            const nodes = $mol_dom_context.document.querySelectorAll('[mol_view_root]:not([mol_view_root=""])');
            for (let i = nodes.length - 1; i >= 0; --i) {
                const name = nodes.item(i).getAttribute('mol_view_root');
                const View = $[name];
                if (!View) {
                    console.error(`Can not attach view. Class not found: ${name}`);
                    continue;
                }
                const view = View.Root(i);
                view.dom_node(nodes.item(i));
                view.autorun();
            }
        }
        title() {
            return this.toString().match(/.*\.(\w+)/)?.[1] ?? this.toString();
        }
        focused(next) {
            let node = this.dom_node();
            const value = $mol_view_selection.focused(next === undefined ? undefined : (next ? [node] : []));
            return value.indexOf(node) !== -1;
        }
        state_key(suffix = '') {
            return this.$.$mol_view_state_key(suffix);
        }
        dom_name() {
            return $mol_dom_qname(this.constructor.toString()) || 'div';
        }
        dom_name_space() { return 'http://www.w3.org/1999/xhtml'; }
        sub() {
            return [];
        }
        sub_visible() {
            return this.sub();
        }
        minimal_width() {
            let min = 0;
            try {
                const sub = this.sub();
                if (!sub)
                    return 0;
                sub.forEach(view => {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_width());
                    }
                });
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        maximal_width() {
            return this.minimal_width();
        }
        minimal_height() {
            let min = 0;
            try {
                for (const view of this.sub() ?? []) {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_height());
                    }
                }
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        static watchers = new Set();
        view_rect() {
            if ($mol_wire_probe(() => this.view_rect()) === undefined) {
                $mol_wire_watch();
                return null;
            }
            else {
                const { width, height, left, right, top, bottom } = this.dom_node().getBoundingClientRect();
                return { width, height, left, right, top, bottom };
            }
        }
        dom_id() {
            return this.toString();
        }
        dom_node(next) {
            $mol_wire_solid();
            const node = next || $mol_dom_context.document.createElementNS(this.dom_name_space(), this.dom_name());
            const id = this.dom_id();
            node.setAttribute('id', id);
            node.toString = $mol_const('<#' + id + '>');
            $mol_dom_render_attributes(node, this.attr_static());
            const events = $mol_wire_async(this.event());
            $mol_dom_render_events(node, events);
            return node;
        }
        dom_final() {
            this.render();
            const sub = this.sub_visible();
            if (!sub)
                return;
            for (const el of sub) {
                if (el && typeof el === 'object' && 'dom_final' in el) {
                    el['dom_final']();
                }
            }
            return this.dom_node();
        }
        dom_tree(next) {
            const node = this.dom_node(next);
            render: try {
                $mol_dom_render_attributes(node, { mol_view_error: null });
                try {
                    this.render();
                }
                finally {
                    for (let plugin of this.plugins()) {
                        if (plugin instanceof $mol_plugin) {
                            plugin.dom_tree();
                        }
                    }
                }
            }
            catch (error) {
                $mol_fail_log(error);
                $mol_dom_render_attributes(node, { mol_view_error: error.name || error.constructor.name });
                if ($mol_promise_like(error))
                    break render;
                if ((error_showed.get(error) ?? this) !== this)
                    break render;
                try {
                    const message = error.message || error;
                    node.innerText = message.replace(/^|$/mg, '\xA0\xA0');
                }
                catch { }
                error_showed.set(error, this);
            }
            try {
                this.auto();
            }
            catch (error) {
                $mol_fail_log(error);
            }
            return node;
        }
        dom_node_actual() {
            const node = this.dom_node();
            $mol_dom_render_styles(node, this.style_size());
            const attr = this.attr();
            const style = this.style();
            const fields = this.field();
            $mol_dom_render_attributes(node, attr);
            $mol_dom_render_styles(node, style);
            return node;
        }
        auto() {
            return null;
        }
        render() {
            const node = this.dom_node_actual();
            const sub = this.sub_visible();
            if (!sub)
                return;
            const nodes = sub.map(child => {
                if (child == null)
                    return null;
                return (child instanceof $mol_view)
                    ? child.dom_node()
                    : child instanceof $mol_dom_context.Node
                        ? child
                        : String(child);
            });
            $mol_dom_render_children(node, nodes);
            for (const el of sub)
                if (el && typeof el === 'object' && 'dom_tree' in el)
                    el['dom_tree']();
            $mol_dom_render_fields(node, this.field());
        }
        static view_classes() {
            const proto = this.prototype;
            let current = proto;
            const classes = [];
            while (current) {
                if (current.constructor.name !== classes.at(-1)?.name) {
                    classes.push(current.constructor);
                }
                if (!(current instanceof $mol_view))
                    break;
                current = Object.getPrototypeOf(current);
            }
            return classes;
        }
        static _view_names;
        static view_names(suffix) {
            let cache = Reflect.getOwnPropertyDescriptor(this, '_view_names')?.value;
            if (!cache)
                cache = this._view_names = new Map;
            const cached = cache.get(suffix);
            if (cached)
                return cached;
            const names = [];
            const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
            for (const Class of this.view_classes()) {
                if (suffix in Class.prototype)
                    names.push(this.$.$mol_func_name(Class) + suffix2);
                else
                    break;
            }
            cache.set(suffix, names);
            return names;
        }
        view_names_owned() {
            const names = [];
            let owner = $mol_owning_get(this);
            if (!(owner?.host instanceof $mol_view))
                return names;
            const suffix = owner.task.name.trim();
            const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
            names.push(...owner.host.constructor.view_names(suffix));
            for (let prefix of owner.host.view_names_owned()) {
                names.push(prefix + suffix2);
            }
            return names;
        }
        view_names() {
            const names = new Set();
            for (let name of this.view_names_owned())
                names.add(name);
            for (let Class of this.constructor.view_classes()) {
                const name = this.$.$mol_func_name(Class);
                if (name)
                    names.add(name);
            }
            return names;
        }
        attr_static() {
            let attrs = {};
            for (let name of this.view_names())
                attrs[name.replace(/\$/g, '').replace(/^(?=\d)/, '_').toLowerCase()] = '';
            return attrs;
        }
        attr() {
            return {};
        }
        style_size() {
            return {
                minHeight: this.minimal_height(),
                minWidth: this.minimal_width(),
            };
        }
        style() {
            return {};
        }
        field() {
            return {};
        }
        event() {
            return {};
        }
        plugins() {
            return [];
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this));
        }
        *view_find(check, path = []) {
            if (check(this))
                return yield [...path, this];
            try {
                for (const item of this.sub()) {
                    if (item instanceof $mol_view) {
                        yield* item.view_find(check, [...path, this]);
                    }
                }
            }
            catch (error) {
                if ($mol_promise_like(error))
                    $mol_fail_hidden(error);
                $mol_fail_log(error);
            }
        }
        force_render(path) {
            const kids = this.sub();
            const index = kids.findIndex(item => {
                if (item instanceof $mol_view) {
                    return path.has(item);
                }
                else {
                    return false;
                }
            });
            if (index >= 0) {
                kids[index].force_render(path);
            }
        }
        ensure_visible(view, align = "start") {
            const path = this.view_find(v => v === view).next().value;
            this.force_render(new Set(path));
            this.dom_final();
            view.dom_node().scrollIntoView({ block: align });
        }
        bring() {
            const win = this.$.$mol_dom_context;
            if (win.parent !== win.self && !win.document.hasFocus())
                return;
            new this.$.$mol_after_frame(() => {
                this.dom_node().scrollIntoView({ block: 'start', inline: 'end' });
                this.focused(true);
            });
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "autorun", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "title", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "focused", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "dom_name", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_width", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_height", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "view_rect", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_final", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_tree", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node_actual", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "render", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names_owned", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names", null);
    __decorate([
        $mol_mem_key
    ], $mol_view, "Root", null);
    __decorate([
        $mol_mem
    ], $mol_view, "autobind", null);
    __decorate([
        $mol_memo.method
    ], $mol_view, "view_classes", null);
    $.$mol_view = $mol_view;
})($ || ($ = {}));
//mol/view/view/view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/view/view/view.css", "[mol_view] {\n\ttransition-property: height, width, min-height, min-width, max-width, max-height, transform;\n\ttransition-duration: .2s;\n\ttransition-timing-function: ease-out;\n\t-webkit-appearance: none;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-shrink: 0;\n\tcontain: style;\n\tscrollbar-color: var(--mol_theme_line) transparent;\n\tscrollbar-width: thin;\n}\t\n\n[mol_view]::selection {\n\tbackground: var(--mol_theme_line);\n}\t\n\n[mol_view]::-webkit-scrollbar {\n\twidth: .25rem;\n\theight: .25rem;\n}\n\n[mol_view]::-webkit-scrollbar-corner {\n\tbackground-color: var(--mol_theme_line);\n}\n\n[mol_view]::-webkit-scrollbar-track {\n\tbackground-color: transparent;\n}\n\n[mol_view]::-webkit-scrollbar-thumb {\n\tbackground-color: var(--mol_theme_line);\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_view] > * {\n\tword-break: inherit;\n}\n\n[mol_view_root] {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tfont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n\tfont-size: 1rem;\n\tline-height: 1.5rem;\n\tbackground: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n\tcontain: unset; /** Fixes bg ignoring when applied to body on Chrome */\n\ttab-size: 4;\n}\n\n@media print {\n\t[mol_view_root] {\n\t\theight: auto;\n\t}\n}\n\n[mol_view][mol_view_error]:not([mol_view_error=\"Promise\"]) {\n\tbackground-image: repeating-linear-gradient(\n\t\t-45deg,\n\t\t#f92323,\n\t\t#f92323 .5rem,\n\t\t#ff3d3d .5rem,\n\t\t#ff3d3d 1.5rem\n\t);\n\tcolor: black;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n@keyframes mol_view_wait {\n\tfrom {\n\t\topacity: .25;\n\t}\n\t20% {\n\t\topacity: .75;\n\t}\n\tto {\n\t\topacity: .25;\n\t}\n}\n\n:where([mol_view][mol_view_error=\"Promise\"]) {\n\tbackground: var(--mol_theme_hover);\n}\n\n[mol_view][mol_view_error=\"Promise\"] {\n\tanimation: mol_view_wait 1s steps( 20, end ) infinite;\n}\n");
})($ || ($ = {}));
//mol/view/view/-css/view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_plugin extends $mol_view {
        dom_node(next) {
            const node = next || $mol_owning_get(this).host.dom_node();
            $mol_dom_render_attributes(node, this.attr_static());
            const events = $mol_wire_async(this.event());
            for (let event_name in events) {
                node.addEventListener(event_name, events[event_name], { passive: false });
            }
            return node;
        }
        attr_static() {
            return {};
        }
        event() {
            return {};
        }
        render() {
            this.dom_node_actual();
        }
    }
    __decorate([
        $mol_mem
    ], $mol_plugin.prototype, "dom_node", null);
    $.$mol_plugin = $mol_plugin;
})($ || ($ = {}));
//mol/plugin/plugin.ts
;
"use strict";
var $;
(function ($) {
    class $mol_scroll extends $mol_view {
        scroll_top(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        scroll_left(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        field() {
            return {
                ...super.field(),
                tabIndex: this.tabindex()
            };
        }
        event() {
            return {
                ...super.event(),
                scroll: (event) => this.event_scroll(event)
            };
        }
        tabindex() {
            return -1;
        }
        event_scroll(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_scroll.prototype, "scroll_top", null);
    __decorate([
        $mol_mem
    ], $mol_scroll.prototype, "scroll_left", null);
    __decorate([
        $mol_mem
    ], $mol_scroll.prototype, "event_scroll", null);
    $.$mol_scroll = $mol_scroll;
})($ || ($ = {}));
//mol/scroll/-view.tree/scroll.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_dom_listener extends $mol_object {
        _node;
        _event;
        _handler;
        _config;
        constructor(_node, _event, _handler, _config = { passive: true }) {
            super();
            this._node = _node;
            this._event = _event;
            this._handler = _handler;
            this._config = _config;
            this._node.addEventListener(this._event, this._handler, this._config);
        }
        destructor() {
            this._node.removeEventListener(this._event, this._handler, this._config);
            super.destructor();
        }
    }
    $.$mol_dom_listener = $mol_dom_listener;
})($ || ($ = {}));
//mol/dom/listener/listener.ts
;
"use strict";
var $;
(function ($) {
    class $mol_print extends $mol_object {
        static before() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'beforeprint', () => {
                this.active(true);
            });
        }
        static after() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'afterprint', () => {
                this.active(false);
            });
        }
        static active(next) {
            this.before();
            this.after();
            return next || false;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_print, "before", null);
    __decorate([
        $mol_mem
    ], $mol_print, "after", null);
    __decorate([
        $mol_mem
    ], $mol_print, "active", null);
    $.$mol_print = $mol_print;
})($ || ($ = {}));
//mol/print/print.ts
;
"use strict";
//mol/type/override/override.ts
;
"use strict";
//mol/style/properties/properties.ts
;
"use strict";
//mol/style/pseudo/class.ts
;
"use strict";
//mol/style/pseudo/element.ts
;
"use strict";
//mol/type/error/error.ts
;
"use strict";
//mol/style/guard/guard.ts
;
"use strict";
var $;
(function ($) {
    function $mol_style_sheet(Component, config0) {
        let rules = [];
        const block = $mol_dom_qname($mol_ambient({}).$mol_func_name(Component));
        const kebab = (name) => name.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
        const make_class = (prefix, path, config) => {
            const props = [];
            const selector = (prefix, path) => {
                if (path.length === 0)
                    return prefix || `[${block}]`;
                let res = `[${block}_${path.join('_')}]`;
                if (prefix)
                    res = prefix + ' :where(' + res + ')';
                return res;
            };
            for (const key of Object.keys(config).reverse()) {
                if (/^(--)?[a-z]/.test(key)) {
                    const addProp = (keys, val) => {
                        if (Array.isArray(val)) {
                            if (val[0] && [Array, Object].includes(val[0].constructor)) {
                                val = val.map(v => {
                                    return Object.entries(v).map(([n, a]) => {
                                        if (a === true)
                                            return kebab(n);
                                        if (a === false)
                                            return null;
                                        return String(a);
                                    }).filter(Boolean).join(' ');
                                }).join(',');
                            }
                            else {
                                val = val.join(' ');
                            }
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                        else if (val.constructor === Object) {
                            for (let suffix in val) {
                                addProp([...keys, kebab(suffix)], val[suffix]);
                            }
                        }
                        else {
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                    };
                    addProp([kebab(key)], config[key]);
                }
                else if (/^[A-Z]/.test(key)) {
                    make_class(prefix, [...path, key.toLowerCase()], config[key]);
                }
                else if (key[0] === '$') {
                    make_class(selector(prefix, path) + ' :where([' + $mol_dom_qname(key) + '])', [], config[key]);
                }
                else if (key === '>') {
                    const types = config[key];
                    for (let type in types) {
                        make_class(selector(prefix, path) + ' > :where([' + $mol_dom_qname(type) + '])', [], types[type]);
                    }
                }
                else if (key === '@') {
                    const attrs = config[key];
                    for (let name in attrs) {
                        for (let val in attrs[name]) {
                            make_class(selector(prefix, path) + ':where([' + name + '=' + JSON.stringify(val) + '])', [], attrs[name][val]);
                        }
                    }
                }
                else if (key === '@media') {
                    const media = config[key];
                    for (let query in media) {
                        rules.push('}\n');
                        make_class(prefix, path, media[query]);
                        rules.push(`${key} ${query} {\n`);
                    }
                }
                else {
                    make_class(selector(prefix, path) + key, [], config[key]);
                }
            }
            if (props.length) {
                rules.push(`${selector(prefix, path)} {\n${props.reverse().join('')}}\n`);
            }
        };
        make_class('', [], config0);
        return rules.reverse().join('');
    }
    $.$mol_style_sheet = $mol_style_sheet;
})($ || ($ = {}));
//mol/style/sheet/sheet.ts
;
"use strict";
var $;
(function ($) {
    function $mol_style_define(Component, config) {
        return $mol_style_attach(Component.name, $mol_style_sheet(Component, config));
    }
    $.$mol_style_define = $mol_style_define;
})($ || ($ = {}));
//mol/style/define/define.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_scroll extends $.$mol_scroll {
            scroll_top(next, cache) {
                const el = this.dom_node();
                if (next !== undefined && !cache)
                    el.scrollTop = next;
                return el.scrollTop;
            }
            scroll_left(next, cache) {
                const el = this.dom_node();
                if (next !== undefined && !cache)
                    el.scrollLeft = next;
                return el.scrollLeft;
            }
            event_scroll(next) {
                const el = this.dom_node();
                this.scroll_left(el.scrollLeft, 'cache');
                this.scroll_top(el.scrollTop, 'cache');
            }
            minimal_height() {
                return this.$.$mol_print.active() ? null : 0;
            }
            minimal_width() {
                return this.$.$mol_print.active() ? null : 0;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_scroll.prototype, "scroll_top", null);
        __decorate([
            $mol_mem
        ], $mol_scroll.prototype, "scroll_left", null);
        $$.$mol_scroll = $mol_scroll;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/scroll/scroll.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem, px } = $mol_style_unit;
        $mol_style_define($mol_scroll, {
            overflow: 'auto',
        });
        $mol_style_define($mol_scroll, {
            display: 'flex',
            overflow: 'overlay',
            flex: {
                direction: 'column',
                grow: 1,
                shrink: 1,
            },
            outline: 'none',
            alignSelf: 'stretch',
            boxSizing: 'border-box',
            willChange: 'scroll-position',
            scroll: {
                padding: [rem(.75), 0],
            },
            maxHeight: per(100),
            maxWidth: per(100),
            webkitOverflowScrolling: 'touch',
            contain: 'content',
            '>': {
                $mol_view: {
                    transform: 'translateZ(0)',
                },
            },
            '::before': {
                display: 'none',
            },
            '::after': {
                display: 'none',
            },
            '::-webkit-scrollbar': {
                width: rem(.25),
                height: rem(.25),
            },
            ':hover': {
                '::-webkit-scrollbar': {
                    width: rem(.5),
                    height: rem(.5),
                },
            },
            '@media': {
                'print': {
                    overflow: 'visible',
                    contain: 'none',
                    maxHeight: 'unset',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/scroll/scroll.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_book2 extends $mol_scroll {
        menu_title() {
            return "";
        }
        sub() {
            return this.pages();
        }
        minimal_width() {
            return 0;
        }
        Placeholder() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        Gap(id) {
            const obj = new this.$.$mol_view();
            obj.title = () => "";
            return obj;
        }
        pages() {
            return [];
        }
    }
    __decorate([
        $mol_mem
    ], $mol_book2.prototype, "Placeholder", null);
    __decorate([
        $mol_mem_key
    ], $mol_book2.prototype, "Gap", null);
    $.$mol_book2 = $mol_book2;
})($ || ($ = {}));
//mol/book2/-view.tree/book2.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_mem_cached = $mol_wire_probe;
})($ || ($ = {}));
//mol/mem/cached/cached.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_book2 extends $.$mol_book2 {
            title() {
                return this.pages().map(page => {
                    try {
                        return page?.title();
                    }
                    catch (error) {
                        $mol_fail_log(error);
                    }
                }).reverse().filter(Boolean).join(' | ');
            }
            menu_title() {
                return this.pages()[0]?.title() || this.title();
            }
            sub() {
                const next = [...this.pages(), this.Placeholder()];
                const prev = $mol_mem_cached(() => this.sub()) ?? [];
                for (let i = 1; i++;) {
                    const p = prev[prev.length - i];
                    const n = next[next.length - i];
                    if (!n)
                        break;
                    if (p === n)
                        continue;
                    n.bring();
                    break;
                }
                return next;
            }
            bring() {
                const pages = this.pages();
                if (pages.length)
                    pages[pages.length - 1].bring();
                else
                    super.bring();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_book2.prototype, "sub", null);
        $$.$mol_book2 = $mol_book2;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/book2/book2.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/book2/book2.view.css", "[mol_book2] {\n\tdisplay: flex;\n\tflex-flow: row nowrap;\n\talign-items: stretch;\n\tflex: 1 1 auto;\n\talign-self: stretch;\n\tmargin: 0;\n\t/* box-shadow: 0 0 0 1px var(--mol_theme_line); */\n\t/* transform: translateZ(0); */\n\ttransition: none;\n\toverflow: overlay;\n\tscroll-snap-type: x mandatory;\n\tpadding: 0 1px;\n\tscroll-padding: 0 1px;\n\tgap: 1px;\n}\n\n[mol_book2] > * {\n/* \tflex: none; */\n\tscroll-snap-stop: always;\n\tscroll-snap-align: end;\n\tposition: relative;\n\tmin-height: 100%;\n\tmax-height: 100%;\n\tmax-width: 100%;\n\tflex-shrink: 0;\n}\n\n[mol_book2] > *:not(:first-of-type):before,\n[mol_book2] > *:not(:last-of-type)::after {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 1.5rem;\n\twidth: 1px;\n\theight: 1rem;\n\tbackground: var(--mol_theme_special);\n\tborder-radius: var(--mol_gap_round);\n\topacity: .5;\n}\n[mol_book2] > *:not(:first-of-type):before {\n\tleft: -1px;\n}\n[mol_book2] > *:not(:last-of-type)::after {\n\tright: -1px;\n}\n\n:where([mol_book2]) > * {\n\tbackground-color: var(--mol_theme_card);\n\t/* box-shadow: 0 0 0 1px var(--mol_theme_back); */\n}\n\n[mol_book2] > [mol_book2] {\n\tdisplay: contents;\n}\n\n[mol_book2] > *:first-child {\n\tscroll-snap-align: start;\n}\n\n[mol_book2] > [mol_view] {\n\ttransform: none; /* prevent content clipping */\n}\n\n[mol_book2_placeholder] {\n\tflex: 1 1 0;\n\tbackground: none;\n}\n\n[mol_book2_gap] {\n\tbackground: none;\n\tflex-grow: 1;\n\tscroll-snap-align: none;\n\tmargin-right: -1px;\n\tbox-shadow: none;\n}\n\n[mol_book2_gap]::before,\n[mol_book2_gap]::after {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));
//mol/book2/-css/book2.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_speck extends $mol_view {
        attr() {
            return {
                ...super.attr(),
                mol_theme: this.theme()
            };
        }
        style() {
            return {
                ...super.style(),
                minHeight: "1em"
            };
        }
        sub() {
            return [
                this.value()
            ];
        }
        theme() {
            return "$mol_theme_accent";
        }
        value() {
            return null;
        }
    }
    $.$mol_speck = $mol_speck;
})($ || ($ = {}));
//mol/speck/-view.tree/speck.view.tree.ts
;
"use strict";
var $;
(function ($) {
    const { vary } = $mol_style_func;
    $.$mol_layer = {
        hover: vary('--mol_layer_hover'),
        focus: vary('--mol_layer_focus'),
        speck: vary('--mol_layer_speck'),
        float: vary('--mol_layer_float'),
        popup: vary('--mol_layer_popup'),
    };
})($ || ($ = {}));
//mol/layer/layer.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/layer/layer.css", ":root {\n\t--mol_layer_hover: 1;\n\t--mol_layer_focus: 2;\n\t--mol_layer_speck: 3;\n\t--mol_layer_float: 4;\n\t--mol_layer_popup: 5;\n}\n");
})($ || ($ = {}));
//mol/layer/-css/layer.css.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/speck/speck.view.css", "[mol_speck] {\n\tfont-size: .625rem;\n\tborder-radius: 1rem;\n\tmargin: -0.5rem -0.25rem;\n\talign-self: flex-start;\n\tmin-height: 1em;\n\tmin-width: .5em;\n\tvertical-align: sub;\n\tpadding: .25em .5em;\n\tposition: absolute;\n\tz-index: var(--mol_layer_speck);\n\ttext-align: center;\n\tline-height: 1;\n\tdisplay: inline-block;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\tuser-select: none;\n}\n");
})($ || ($ = {}));
//mol/speck/-css/speck.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button extends $mol_view {
        enabled() {
            return true;
        }
        click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event() {
            return {
                ...super.event(),
                click: (event) => this.event_activate(event),
                dblclick: (event) => this.clicks(event),
                keydown: (event) => this.event_key_press(event)
            };
        }
        attr() {
            return {
                ...super.attr(),
                disabled: this.disabled(),
                role: "button",
                tabindex: this.tab_index(),
                title: this.hint_safe()
            };
        }
        sub() {
            return [
                this.title()
            ];
        }
        Speck() {
            const obj = new this.$.$mol_speck();
            obj.value = () => this.error();
            return obj;
        }
        event_activate(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        clicks(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_key_press(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        disabled() {
            return false;
        }
        tab_index() {
            return 0;
        }
        hint() {
            return "";
        }
        hint_safe() {
            return this.hint();
        }
        error() {
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "click", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "event_click", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "Speck", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "event_activate", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "clicks", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "event_key_press", null);
    $.$mol_button = $mol_button;
})($ || ($ = {}));
//mol/button/-view.tree/button.view.tree.ts
;
"use strict";
var $;
(function ($) {
    let $mol_keyboard_code;
    (function ($mol_keyboard_code) {
        $mol_keyboard_code[$mol_keyboard_code["backspace"] = 8] = "backspace";
        $mol_keyboard_code[$mol_keyboard_code["tab"] = 9] = "tab";
        $mol_keyboard_code[$mol_keyboard_code["enter"] = 13] = "enter";
        $mol_keyboard_code[$mol_keyboard_code["shift"] = 16] = "shift";
        $mol_keyboard_code[$mol_keyboard_code["ctrl"] = 17] = "ctrl";
        $mol_keyboard_code[$mol_keyboard_code["alt"] = 18] = "alt";
        $mol_keyboard_code[$mol_keyboard_code["pause"] = 19] = "pause";
        $mol_keyboard_code[$mol_keyboard_code["capsLock"] = 20] = "capsLock";
        $mol_keyboard_code[$mol_keyboard_code["escape"] = 27] = "escape";
        $mol_keyboard_code[$mol_keyboard_code["space"] = 32] = "space";
        $mol_keyboard_code[$mol_keyboard_code["pageUp"] = 33] = "pageUp";
        $mol_keyboard_code[$mol_keyboard_code["pageDown"] = 34] = "pageDown";
        $mol_keyboard_code[$mol_keyboard_code["end"] = 35] = "end";
        $mol_keyboard_code[$mol_keyboard_code["home"] = 36] = "home";
        $mol_keyboard_code[$mol_keyboard_code["left"] = 37] = "left";
        $mol_keyboard_code[$mol_keyboard_code["up"] = 38] = "up";
        $mol_keyboard_code[$mol_keyboard_code["right"] = 39] = "right";
        $mol_keyboard_code[$mol_keyboard_code["down"] = 40] = "down";
        $mol_keyboard_code[$mol_keyboard_code["insert"] = 45] = "insert";
        $mol_keyboard_code[$mol_keyboard_code["delete"] = 46] = "delete";
        $mol_keyboard_code[$mol_keyboard_code["key0"] = 48] = "key0";
        $mol_keyboard_code[$mol_keyboard_code["key1"] = 49] = "key1";
        $mol_keyboard_code[$mol_keyboard_code["key2"] = 50] = "key2";
        $mol_keyboard_code[$mol_keyboard_code["key3"] = 51] = "key3";
        $mol_keyboard_code[$mol_keyboard_code["key4"] = 52] = "key4";
        $mol_keyboard_code[$mol_keyboard_code["key5"] = 53] = "key5";
        $mol_keyboard_code[$mol_keyboard_code["key6"] = 54] = "key6";
        $mol_keyboard_code[$mol_keyboard_code["key7"] = 55] = "key7";
        $mol_keyboard_code[$mol_keyboard_code["key8"] = 56] = "key8";
        $mol_keyboard_code[$mol_keyboard_code["key9"] = 57] = "key9";
        $mol_keyboard_code[$mol_keyboard_code["A"] = 65] = "A";
        $mol_keyboard_code[$mol_keyboard_code["B"] = 66] = "B";
        $mol_keyboard_code[$mol_keyboard_code["C"] = 67] = "C";
        $mol_keyboard_code[$mol_keyboard_code["D"] = 68] = "D";
        $mol_keyboard_code[$mol_keyboard_code["E"] = 69] = "E";
        $mol_keyboard_code[$mol_keyboard_code["F"] = 70] = "F";
        $mol_keyboard_code[$mol_keyboard_code["G"] = 71] = "G";
        $mol_keyboard_code[$mol_keyboard_code["H"] = 72] = "H";
        $mol_keyboard_code[$mol_keyboard_code["I"] = 73] = "I";
        $mol_keyboard_code[$mol_keyboard_code["J"] = 74] = "J";
        $mol_keyboard_code[$mol_keyboard_code["K"] = 75] = "K";
        $mol_keyboard_code[$mol_keyboard_code["L"] = 76] = "L";
        $mol_keyboard_code[$mol_keyboard_code["M"] = 77] = "M";
        $mol_keyboard_code[$mol_keyboard_code["N"] = 78] = "N";
        $mol_keyboard_code[$mol_keyboard_code["O"] = 79] = "O";
        $mol_keyboard_code[$mol_keyboard_code["P"] = 80] = "P";
        $mol_keyboard_code[$mol_keyboard_code["Q"] = 81] = "Q";
        $mol_keyboard_code[$mol_keyboard_code["R"] = 82] = "R";
        $mol_keyboard_code[$mol_keyboard_code["S"] = 83] = "S";
        $mol_keyboard_code[$mol_keyboard_code["T"] = 84] = "T";
        $mol_keyboard_code[$mol_keyboard_code["U"] = 85] = "U";
        $mol_keyboard_code[$mol_keyboard_code["V"] = 86] = "V";
        $mol_keyboard_code[$mol_keyboard_code["W"] = 87] = "W";
        $mol_keyboard_code[$mol_keyboard_code["X"] = 88] = "X";
        $mol_keyboard_code[$mol_keyboard_code["Y"] = 89] = "Y";
        $mol_keyboard_code[$mol_keyboard_code["Z"] = 90] = "Z";
        $mol_keyboard_code[$mol_keyboard_code["metaLeft"] = 91] = "metaLeft";
        $mol_keyboard_code[$mol_keyboard_code["metaRight"] = 92] = "metaRight";
        $mol_keyboard_code[$mol_keyboard_code["select"] = 93] = "select";
        $mol_keyboard_code[$mol_keyboard_code["numpad0"] = 96] = "numpad0";
        $mol_keyboard_code[$mol_keyboard_code["numpad1"] = 97] = "numpad1";
        $mol_keyboard_code[$mol_keyboard_code["numpad2"] = 98] = "numpad2";
        $mol_keyboard_code[$mol_keyboard_code["numpad3"] = 99] = "numpad3";
        $mol_keyboard_code[$mol_keyboard_code["numpad4"] = 100] = "numpad4";
        $mol_keyboard_code[$mol_keyboard_code["numpad5"] = 101] = "numpad5";
        $mol_keyboard_code[$mol_keyboard_code["numpad6"] = 102] = "numpad6";
        $mol_keyboard_code[$mol_keyboard_code["numpad7"] = 103] = "numpad7";
        $mol_keyboard_code[$mol_keyboard_code["numpad8"] = 104] = "numpad8";
        $mol_keyboard_code[$mol_keyboard_code["numpad9"] = 105] = "numpad9";
        $mol_keyboard_code[$mol_keyboard_code["multiply"] = 106] = "multiply";
        $mol_keyboard_code[$mol_keyboard_code["add"] = 107] = "add";
        $mol_keyboard_code[$mol_keyboard_code["subtract"] = 109] = "subtract";
        $mol_keyboard_code[$mol_keyboard_code["decimal"] = 110] = "decimal";
        $mol_keyboard_code[$mol_keyboard_code["divide"] = 111] = "divide";
        $mol_keyboard_code[$mol_keyboard_code["F1"] = 112] = "F1";
        $mol_keyboard_code[$mol_keyboard_code["F2"] = 113] = "F2";
        $mol_keyboard_code[$mol_keyboard_code["F3"] = 114] = "F3";
        $mol_keyboard_code[$mol_keyboard_code["F4"] = 115] = "F4";
        $mol_keyboard_code[$mol_keyboard_code["F5"] = 116] = "F5";
        $mol_keyboard_code[$mol_keyboard_code["F6"] = 117] = "F6";
        $mol_keyboard_code[$mol_keyboard_code["F7"] = 118] = "F7";
        $mol_keyboard_code[$mol_keyboard_code["F8"] = 119] = "F8";
        $mol_keyboard_code[$mol_keyboard_code["F9"] = 120] = "F9";
        $mol_keyboard_code[$mol_keyboard_code["F10"] = 121] = "F10";
        $mol_keyboard_code[$mol_keyboard_code["F11"] = 122] = "F11";
        $mol_keyboard_code[$mol_keyboard_code["F12"] = 123] = "F12";
        $mol_keyboard_code[$mol_keyboard_code["numLock"] = 144] = "numLock";
        $mol_keyboard_code[$mol_keyboard_code["scrollLock"] = 145] = "scrollLock";
        $mol_keyboard_code[$mol_keyboard_code["semicolon"] = 186] = "semicolon";
        $mol_keyboard_code[$mol_keyboard_code["equals"] = 187] = "equals";
        $mol_keyboard_code[$mol_keyboard_code["comma"] = 188] = "comma";
        $mol_keyboard_code[$mol_keyboard_code["dash"] = 189] = "dash";
        $mol_keyboard_code[$mol_keyboard_code["period"] = 190] = "period";
        $mol_keyboard_code[$mol_keyboard_code["forwardSlash"] = 191] = "forwardSlash";
        $mol_keyboard_code[$mol_keyboard_code["graveAccent"] = 192] = "graveAccent";
        $mol_keyboard_code[$mol_keyboard_code["bracketOpen"] = 219] = "bracketOpen";
        $mol_keyboard_code[$mol_keyboard_code["slashBack"] = 220] = "slashBack";
        $mol_keyboard_code[$mol_keyboard_code["slashBackLeft"] = 226] = "slashBackLeft";
        $mol_keyboard_code[$mol_keyboard_code["bracketClose"] = 221] = "bracketClose";
        $mol_keyboard_code[$mol_keyboard_code["quoteSingle"] = 222] = "quoteSingle";
    })($mol_keyboard_code = $.$mol_keyboard_code || ($.$mol_keyboard_code = {}));
})($ || ($ = {}));
//mol/keyboard/code/code.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button extends $.$mol_button {
            status(next = [null]) { return next; }
            disabled() {
                return !this.enabled();
            }
            event_activate(next) {
                if (!next)
                    return;
                if (!this.enabled())
                    return;
                try {
                    this.event_click(next);
                    this.click(next);
                    this.status([null]);
                }
                catch (error) {
                    this.status([error]);
                    $mol_fail_hidden(error);
                }
            }
            event_key_press(event) {
                if (event.keyCode === $mol_keyboard_code.enter) {
                    return this.event_activate(event);
                }
            }
            tab_index() {
                return this.enabled() ? super.tab_index() : -1;
            }
            error() {
                const [error] = this.status();
                if (!error)
                    return '';
                if (error instanceof Promise) {
                    return $mol_fail_hidden(error);
                }
                return String(error.message ?? error);
            }
            hint_safe() {
                try {
                    return this.hint();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return '';
                }
            }
            sub_visible() {
                return [
                    ...this.error() ? [this.Speck()] : [],
                    ...this.sub(),
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_button.prototype, "status", null);
        $$.$mol_button = $mol_button;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/button/button.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/button.view.css", "[mol_button] {\n\tborder: none;\n\tfont: inherit;\n\tdisplay: inline-flex;\n\tflex-shrink: 0;\n\ttext-decoration: inherit;\n\tcursor: inherit;\n\tposition: relative;\n\tbox-sizing: border-box;\n\tword-break: normal;\n\tcursor: default;\n\tuser-select: none;\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_button]:where(:not(:disabled)):hover {\n\tz-index: var(--mol_layer_hover);\n}\n\n[mol_button]:focus {\n\toutline: none;\n\tz-index: var(--mol_layer_focus);\n}\n");
})($ || ($ = {}));
//mol/button/-css/button.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_typed extends $mol_button {
        minimal_height() {
            return 40;
        }
        minimal_width() {
            return 40;
        }
    }
    $.$mol_button_typed = $mol_button_typed;
})($ || ($ = {}));
//mol/button/typed/-view.tree/typed.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/typed/typed.view.css", "[mol_button_typed] {\n\talign-content: center;\n\talign-items: center;\n\tpadding: var(--mol_gap_text);\n\tborder-radius: var(--mol_gap_round);\n\tgap: var(--mol_gap_space);\n\tuser-select: none;\n\tcursor: pointer;\n}\n\n[mol_button_typed][disabled] {\n\tpointer-events: none;\n}\n\n[mol_button_typed]:hover ,\n[mol_button_typed]:focus {\n\tbackground-color: var(--mol_theme_hover);\n}\n\n[mol_button_typed]:active {\n\tcolor: var(--mol_theme_focus);\n}\n\n");
})($ || ($ = {}));
//mol/button/typed/-css/typed.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_minor extends $mol_button_typed {
    }
    $.$mol_button_minor = $mol_button_minor;
})($ || ($ = {}));
//mol/button/minor/-view.tree/minor.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/minor/minor.view.css", "[mol_button_minor] {\n\tcolor: var(--mol_theme_control);\n}\n\n[mol_button_minor][disabled] {\n\tcolor: var(--mol_theme_shade);\n}\n");
})($ || ($ = {}));
//mol/button/minor/-css/minor.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg extends $mol_view {
        dom_name() {
            return "svg";
        }
        dom_name_space() {
            return "http://www.w3.org/2000/svg";
        }
        font_size() {
            return 16;
        }
        font_family() {
            return "";
        }
        style_size() {
            return {};
        }
    }
    $.$mol_svg = $mol_svg;
})($ || ($ = {}));
//mol/svg/-view.tree/svg.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_time extends $mol_object {
        static task(precision, reset) {
            if (precision) {
                return new $mol_after_timeout(precision, () => this.task(precision, null));
            }
            else {
                return new $mol_after_frame(() => this.task(precision, null));
            }
        }
        static now(precision) {
            this.task(precision);
            return Date.now();
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "task", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "now", null);
    $.$mol_state_time = $mol_state_time;
})($ || ($ = {}));
//mol/state/time/time.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_svg extends $.$mol_svg {
            computed_style() {
                const win = this.$.$mol_dom_context;
                const style = win.getComputedStyle(this.dom_node());
                if (!style['font-size'])
                    $mol_state_time.now(0);
                return style;
            }
            font_size() {
                return parseInt(this.computed_style()['font-size']) || 16;
            }
            font_family() {
                return this.computed_style()['font-family'];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "computed_style", null);
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "font_size", null);
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "font_family", null);
        $$.$mol_svg = $mol_svg;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/svg/svg.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg_root extends $mol_svg {
        dom_name() {
            return "svg";
        }
        attr() {
            return {
                ...super.attr(),
                viewBox: this.view_box(),
                preserveAspectRatio: this.aspect()
            };
        }
        view_box() {
            return "0 0 100 100";
        }
        aspect() {
            return "xMidYMid";
        }
    }
    $.$mol_svg_root = $mol_svg_root;
})($ || ($ = {}));
//mol/svg/root/-view.tree/root.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/svg/root/root.view.css", "[mol_svg_root] {\n\toverflow: hidden;\n}\n");
})($ || ($ = {}));
//mol/svg/root/-css/root.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg_path extends $mol_svg {
        dom_name() {
            return "path";
        }
        attr() {
            return {
                ...super.attr(),
                d: this.geometry()
            };
        }
        geometry() {
            return "";
        }
    }
    $.$mol_svg_path = $mol_svg_path;
})($ || ($ = {}));
//mol/svg/path/-view.tree/path.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon extends $mol_svg_root {
        view_box() {
            return "0 0 24 24";
        }
        minimal_width() {
            return 16;
        }
        minimal_height() {
            return 16;
        }
        sub() {
            return [
                this.Path()
            ];
        }
        path() {
            return "";
        }
        Path() {
            const obj = new this.$.$mol_svg_path();
            obj.geometry = () => this.path();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_icon.prototype, "Path", null);
    $.$mol_icon = $mol_icon;
})($ || ($ = {}));
//mol/icon/-view.tree/icon.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/icon/icon.view.css", "[mol_icon] {\n\tfill: currentColor;\n\tstroke: none;\n\twidth: 1em;\n\theight: 1.5em;\n\tflex: 0 0 auto;\n\tvertical-align: top;\n\tdisplay: inline-block;\n\tfilter: drop-shadow(0px 1px 1px var(--mol_theme_back));\n\ttransform-origin: center;\n}\n\n[mol_icon_path] {\n\ttransform-origin: center;\n}\n");
})($ || ($ = {}));
//mol/icon/-css/icon.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_upload extends $mol_icon {
        path() {
            return "M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z";
        }
    }
    $.$mol_icon_upload = $mol_icon_upload;
})($ || ($ = {}));
//mol/icon/upload/-view.tree/upload.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_open extends $mol_button_minor {
        sub() {
            return [
                this.Icon(),
                this.Native()
            ];
        }
        Icon() {
            const obj = new this.$.$mol_icon_upload();
            return obj;
        }
        files(next) {
            if (next !== undefined)
                return next;
            return [];
        }
        accept() {
            return "";
        }
        multiple() {
            return true;
        }
        Native() {
            const obj = new this.$.$mol_button_open_native();
            obj.files = (next) => this.files(next);
            obj.accept = () => this.accept();
            obj.multiple = () => this.multiple();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_button_open.prototype, "Icon", null);
    __decorate([
        $mol_mem
    ], $mol_button_open.prototype, "files", null);
    __decorate([
        $mol_mem
    ], $mol_button_open.prototype, "Native", null);
    $.$mol_button_open = $mol_button_open;
    class $mol_button_open_native extends $mol_view {
        dom_name() {
            return "input";
        }
        files(next) {
            if (next !== undefined)
                return next;
            return [];
        }
        attr() {
            return {
                type: "file",
                accept: this.accept(),
                multiple: this.multiple()
            };
        }
        event() {
            return {
                change: (next) => this.picked(next)
            };
        }
        accept() {
            return "";
        }
        multiple() {
            return true;
        }
        picked(next) {
            if (next !== undefined)
                return next;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_button_open_native.prototype, "files", null);
    __decorate([
        $mol_mem
    ], $mol_button_open_native.prototype, "picked", null);
    $.$mol_button_open_native = $mol_button_open_native;
})($ || ($ = {}));
//mol/button/open/-view.tree/open.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button_open_native extends $.$mol_button_open_native {
            dom_node() {
                return super.dom_node();
            }
            picked() {
                const files = this.dom_node().files;
                if (!files || !files.length)
                    return;
                this.files([...files]);
            }
        }
        $$.$mol_button_open_native = $mol_button_open_native;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/button/open/open.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/open/open.view.css", "[mol_button_open_native] {\n\tposition: absolute;\n\tleft: 0;\n\ttop: -100%;\n\twidth: 100%;\n\theight: 200%;\n\tcursor: pointer;\n\topacity: 0;\n}\n");
})($ || ($ = {}));
//mol/button/open/-css/open.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_local extends $mol_object {
        static 'native()';
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $mol_dom_context.localStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static changes(next) { return next; }
        static value(key, next) {
            this.changes();
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_local.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_local, "changes", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_local, "value", null);
    $.$mol_state_local = $mol_state_local;
})($ || ($ = {}));
//mol/state/local/local.ts
;
"use strict";
//mol/charset/encoding/encoding.ts
;
"use strict";
var $;
(function ($) {
    const decoders = {};
    function $mol_charset_decode(buffer, encoding = 'utf8') {
        let decoder = decoders[encoding];
        if (!decoder)
            decoder = decoders[encoding] = new TextDecoder(encoding);
        return decoder.decode(buffer);
    }
    $.$mol_charset_decode = $mol_charset_decode;
})($ || ($ = {}));
//mol/charset/decode/decode.ts
;
"use strict";
var $;
(function ($) {
    const TextEncoder = globalThis.TextEncoder ?? $node.util.TextEncoder;
    const encoder = new TextEncoder();
    function $mol_charset_encode(value) {
        return encoder.encode(value);
    }
    $.$mol_charset_encode = $mol_charset_encode;
})($ || ($ = {}));
//mol/charset/encode/encode.ts
;
"use strict";
var $;
(function ($) {
    class $mol_file_not_found extends Error {
    }
    $.$mol_file_not_found = $mol_file_not_found;
    class $mol_file extends $mol_object {
        static absolute(path) {
            throw new Error('Not implemented yet');
        }
        static relative(path) {
            throw new Error('Not implemented yet');
        }
        static base = '';
        path() {
            return '.';
        }
        parent() {
            return this.resolve('..');
        }
        reset() {
            try {
                this.stat(null);
            }
            catch (error) {
                if (error instanceof $mol_file_not_found)
                    return;
                return $mol_fail_hidden(error);
            }
        }
        version() {
            return this.stat()?.mtime.getTime().toString(36).toUpperCase() ?? '';
        }
        watcher() {
            console.warn('$mol_file_web.watcher() not implemented');
            return {
                destructor() { }
            };
        }
        exists(next) {
            let exists = Boolean(this.stat());
            if (next === undefined)
                return exists;
            if (next === exists)
                return exists;
            if (next)
                this.parent().exists(true);
            this.ensure();
            this.reset();
            return next;
        }
        type() {
            return this.stat()?.type ?? '';
        }
        name() {
            return this.path().replace(/^.*\//, '');
        }
        ext() {
            const match = /((?:\.\w+)+)$/.exec(this.path());
            return match ? match[1].substring(1) : '';
        }
        text(next, virt) {
            if (virt) {
                const now = new Date;
                this.stat({
                    type: 'file',
                    size: 0,
                    atime: now,
                    mtime: now,
                    ctime: now,
                }, 'virt');
                return next;
            }
            if (next === undefined) {
                return $mol_charset_decode(this.buffer(undefined));
            }
            else {
                const buffer = next === undefined ? undefined : $mol_charset_encode(next);
                this.buffer(buffer);
                return next;
            }
        }
        find(include, exclude) {
            const found = [];
            const sub = this.sub();
            for (const child of sub) {
                const child_path = child.path();
                if (exclude && child_path.match(exclude))
                    continue;
                if (!include || child_path.match(include))
                    found.push(child);
                if (child.type() === 'dir') {
                    const sub_child = child.find(include, exclude);
                    for (const child of sub_child)
                        found.push(child);
                }
            }
            return found;
        }
        size() {
            switch (this.type()) {
                case 'file': return this.stat()?.size ?? 0;
                default: return 0;
            }
        }
    }
    __decorate([
        $mol_mem
    ], $mol_file.prototype, "exists", null);
    __decorate([
        $mol_mem
    ], $mol_file.prototype, "text", null);
    __decorate([
        $mol_mem_key
    ], $mol_file, "absolute", null);
    $.$mol_file = $mol_file;
})($ || ($ = {}));
//mol/file/file.ts
;
"use strict";
var $;
(function ($) {
    function $mol_compare_array(a, b) {
        if (a === b)
            return true;
        if (Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
            return false;
        if (a.length !== b.length)
            return false;
        for (let i = 0; i < a.length; i++)
            if (a[i] !== b[i])
                return false;
        return true;
    }
    $.$mol_compare_array = $mol_compare_array;
})($ || ($ = {}));
//mol/compare/array/array.ts
;
"use strict";
var $;
(function ($) {
    function stat_convert(stat) {
        if (!stat)
            return null;
        let type;
        if (stat.isDirectory())
            type = 'dir';
        if (stat.isFile())
            type = 'file';
        if (stat.isSymbolicLink())
            type = 'link';
        if (!type)
            return $mol_fail(new Error(`Unsupported file type`));
        return {
            type,
            size: Number(stat.size),
            atime: stat.atime,
            mtime: stat.mtime,
            ctime: stat.ctime
        };
    }
    function buffer_normalize(buf) {
        return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
    }
    class $mol_file_node extends $mol_file {
        static absolute(path) {
            return this.make({
                path: $mol_const(path)
            });
        }
        static relative(path) {
            return this.absolute($node.path.resolve(this.base, path).replace(/\\/g, '/'));
        }
        watcher() {
            const watcher = $node.chokidar.watch(this.path(), {
                persistent: true,
                ignored: /(^\.|___$)/,
                depth: 0,
                ignoreInitial: true,
                awaitWriteFinish: {
                    stabilityThreshold: 100,
                },
            });
            watcher
                .on('all', (type, path) => {
                const file = $mol_file.relative(path.replace(/\\/g, '/'));
                file.reset();
                if (type === 'change') {
                    this.stat(null);
                }
                else {
                    file.parent().reset();
                }
            })
                .on('error', $mol_fail_log);
            return {
                destructor() {
                    watcher.close();
                }
            };
        }
        stat(next, virt) {
            let stat = next;
            const path = this.path();
            this.parent().watcher();
            if (virt)
                return next;
            try {
                stat = next ?? stat_convert($node.fs.statSync(path, { throwIfNoEntry: false }));
            }
            catch (error) {
                if (error.code === 'ENOENT')
                    error = new $mol_file_not_found(`File not found`);
                error.message += '\n' + path;
                return this.$.$mol_fail_hidden(error);
            }
            return stat;
        }
        ensure() {
            const path = this.path();
            try {
                $node.fs.mkdirSync(path);
            }
            catch (e) {
                e.message += '\n' + path;
                this.$.$mol_fail_hidden(e);
            }
        }
        buffer(next) {
            const path = this.path();
            if (next === undefined) {
                if (!this.stat())
                    return new Uint8Array;
                try {
                    const prev = $mol_mem_cached(() => this.buffer());
                    next = buffer_normalize($node.fs.readFileSync(path));
                    if (prev !== undefined && !$mol_compare_array(prev, next)) {
                        this.$.$mol_log3_rise({
                            place: `$mol_file_node..buffer()`,
                            message: 'Changed',
                            path: this.relate(),
                        });
                    }
                    return next;
                }
                catch (error) {
                    error.message += '\n' + path;
                    return this.$.$mol_fail_hidden(error);
                }
            }
            this.parent().exists(true);
            const now = new Date;
            this.stat({
                type: 'file',
                size: next.length,
                atime: now,
                mtime: now,
                ctime: now,
            }, 'virt');
            try {
                $node.fs.writeFileSync(path, next);
            }
            catch (error) {
                error.message += '\n' + path;
                return this.$.$mol_fail_hidden(error);
            }
            return next;
        }
        sub() {
            if (!this.exists())
                return [];
            if (this.type() !== 'dir')
                return [];
            const path = this.path();
            try {
                return $node.fs.readdirSync(path)
                    .filter(name => !/^\.+$/.test(name))
                    .map(name => this.resolve(name));
            }
            catch (e) {
                e.message += '\n' + path;
                return this.$.$mol_fail_hidden(e);
            }
        }
        resolve(path) {
            return this.constructor.relative($node.path.join(this.path(), path));
        }
        relate(base = this.constructor.relative('.')) {
            return $node.path.relative(base.path(), this.path()).replace(/\\/g, '/');
        }
        append(next) {
            const path = this.path();
            try {
                $node.fs.appendFileSync(path, next);
            }
            catch (e) {
                e.message += '\n' + path;
                return this.$.$mol_fail_hidden(e);
            }
        }
    }
    __decorate([
        $mol_mem
    ], $mol_file_node.prototype, "watcher", null);
    __decorate([
        $mol_mem
    ], $mol_file_node.prototype, "stat", null);
    __decorate([
        $mol_mem
    ], $mol_file_node.prototype, "ensure", null);
    __decorate([
        $mol_mem
    ], $mol_file_node.prototype, "buffer", null);
    __decorate([
        $mol_mem
    ], $mol_file_node.prototype, "sub", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_node, "absolute", null);
    $.$mol_file_node = $mol_file_node;
    $.$mol_file = $mol_file_node;
})($ || ($ = {}));
//mol/file/file.node.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_sync(obj) {
        return new Proxy(obj, {
            get(obj, field) {
                const val = obj[field];
                if (typeof val !== 'function')
                    return val;
                const temp = $mol_wire_task.getter(val);
                return function $mol_wire_sync(...args) {
                    const fiber = temp(obj, args);
                    return fiber.sync();
                };
            },
            apply(obj, self, args) {
                const temp = $mol_wire_task.getter(obj);
                const fiber = temp(self, args);
                return fiber.sync();
            },
        });
    }
    $.$mol_wire_sync = $mol_wire_sync;
})($ || ($ = {}));
//mol/wire/sync/sync.ts
;
"use strict";
//hyoo/hyoo.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_action = $mol_wire_method;
})($ || ($ = {}));
//mol/action/action.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_parse(text, type = 'application/xhtml+xml') {
        const parser = new $mol_dom_context.DOMParser();
        const doc = parser.parseFromString(text, type);
        const error = doc.getElementsByTagName('parsererror');
        if (error.length)
            throw new Error(error[0].textContent);
        return doc;
    }
    $.$mol_dom_parse = $mol_dom_parse;
})($ || ($ = {}));
//mol/dom/parse/parse.ts
;
"use strict";
var $;
(function ($) {
    class $mol_fetch_response extends $mol_object2 {
        native;
        constructor(native) {
            super();
            this.native = native;
        }
        status() {
            const types = ['unknown', 'inform', 'success', 'redirect', 'wrong', 'failed'];
            return types[Math.floor(this.native.status / 100)];
        }
        code() {
            return this.native.status;
        }
        message() {
            return this.native.statusText || `HTTP Error ${this.code()}`;
        }
        headers() {
            return this.native.headers;
        }
        mime() {
            return this.headers().get('content-type');
        }
        stream() {
            return this.native.body;
        }
        text() {
            const buffer = this.buffer();
            const native = this.native;
            const mime = native.headers.get('content-type') || '';
            const [, charset] = /charset=(.*)/.exec(mime) || [, 'utf-8'];
            const decoder = new TextDecoder(charset);
            return decoder.decode(buffer);
        }
        json() {
            return $mol_wire_sync(this.native).json();
        }
        buffer() {
            return $mol_wire_sync(this.native).arrayBuffer();
        }
        xml() {
            return $mol_dom_parse(this.text(), 'application/xml');
        }
        xhtml() {
            return $mol_dom_parse(this.text(), 'application/xhtml+xml');
        }
        html() {
            return $mol_dom_parse(this.text(), 'text/html');
        }
    }
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "stream", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "text", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "buffer", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "xml", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "xhtml", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "html", null);
    $.$mol_fetch_response = $mol_fetch_response;
    class $mol_fetch extends $mol_object2 {
        static request(input, init = {}) {
            const native = globalThis.fetch ?? $node['undici'].fetch;
            const controller = new AbortController();
            let done = false;
            const promise = native(input, {
                ...init,
                signal: controller.signal,
            }).finally(() => {
                done = true;
            });
            return Object.assign(promise, {
                destructor: () => {
                    if (!done && !controller.signal.aborted)
                        controller.abort();
                },
            });
        }
        static response(input, init) {
            return new $mol_fetch_response($mol_wire_sync(this).request(input, init));
        }
        static success(input, init) {
            const response = this.response(input, init);
            if (response.status() === 'success')
                return response;
            throw new Error(response.message());
        }
        static stream(input, init) {
            return this.success(input, init).stream();
        }
        static text(input, init) {
            return this.success(input, init).text();
        }
        static json(input, init) {
            return this.success(input, init).json();
        }
        static buffer(input, init) {
            return this.success(input, init).buffer();
        }
        static xml(input, init) {
            return this.success(input, init).xml();
        }
        static xhtml(input, init) {
            return this.success(input, init).xhtml();
        }
        static html(input, init) {
            return this.success(input, init).html();
        }
    }
    __decorate([
        $mol_action
    ], $mol_fetch, "response", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "success", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "stream", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "text", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "json", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "buffer", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "xml", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "xhtml", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "html", null);
    $.$mol_fetch = $mol_fetch;
})($ || ($ = {}));
//mol/fetch/fetch.ts
;
"use strict";
var $;
(function ($) {
    function $mol_huggingface_run(space, method, ...data) {
        while (true) {
            try {
                if (typeof method === 'number') {
                    return $mol_wire_sync(this).$mol_huggingface_ws(space, method, ...data);
                }
                else {
                    return this.$mol_huggingface_rest(space, method, ...data);
                }
            }
            catch (error) {
                if ($mol_promise_like(error))
                    $mol_fail_hidden(error);
                if (error instanceof Error && error.message === `Queue full`) {
                    $mol_fail_log(error);
                    continue;
                }
                $mol_fail_hidden(error);
            }
        }
    }
    $.$mol_huggingface_run = $mol_huggingface_run;
    function $mol_huggingface_rest(space, method, ...data) {
        const uri = `https://${space}.hf.space/run/${method}`;
        const response = $mol_fetch.json(uri, {
            method: 'post',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data }),
        });
        if ('error' in response) {
            $mol_fail(new Error(response.error ?? 'Unknown API error'));
        }
        return response.data;
    }
    $.$mol_huggingface_rest = $mol_huggingface_rest;
    function $mol_huggingface_ws(space, fn_index, ...data) {
        const session_hash = $mol_guid();
        const socket = new WebSocket(`wss://${space}.hf.space/queue/join`);
        const promise = new Promise((done, fail) => {
            socket.onclose = event => {
                if (event.reason)
                    fail(new Error(event.reason));
            };
            socket.onerror = event => {
                fail(new Error(`Socket error`));
            };
            socket.onmessage = event => {
                const message = JSON.parse(event.data);
                switch (message.msg) {
                    case 'send_hash':
                        return socket.send(JSON.stringify({ session_hash, fn_index }));
                    case 'estimation': return;
                    case 'queue_full':
                        fail(new Error(`Queue full`));
                    case 'send_data':
                        return socket.send(JSON.stringify({ session_hash, fn_index, data }));
                    case 'process_starts': return;
                    case 'process_completed':
                        if (message.success) {
                            return done(message.output.data);
                        }
                        else {
                            return fail(new Error(message.output.error ?? `Unknown API error`));
                        }
                    default:
                        return fail(new Error(`Unknown message type: ${message.msg}`));
                }
            };
        });
        return Object.assign(promise, {
            destructor: () => socket.close()
        });
    }
    $.$mol_huggingface_ws = $mol_huggingface_ws;
})($ || ($ = {}));
//mol/huggingface/huggingface.ts
;
"use strict";
var $;
(function ($) {
    function $hyoo_lingua_translate(lang, text) {
        if (!text.trim())
            return '';
        const cache_key = `$hyoo_lingua_translate(${JSON.stringify(lang)},${JSON.stringify(text)})`;
        const cached = this.$mol_state_local.value(cache_key);
        if (cached)
            return String(cached);
        const translated = this.$mol_huggingface_run('hyoo-translate', 0, lang, text)[0];
        return this.$mol_state_local.value(cache_key, translated);
    }
    $.$hyoo_lingua_translate = $hyoo_lingua_translate;
})($ || ($ = {}));
//hyoo/lingua/translate/translate.ts
;
"use strict";
var $;
(function ($) {
    class $mol_locale extends $mol_object {
        static lang_default() {
            return 'en';
        }
        static lang(next) {
            return this.$.$mol_state_local.value('locale', next) || $mol_dom_context.navigator.language.replace(/-.*/, '') || this.lang_default();
        }
        static source(lang) {
            return JSON.parse(this.$.$mol_file.relative(`web.locale=${lang}.json`).text().toString());
        }
        static texts(lang, next) {
            if (next)
                return next;
            try {
                return this.source(lang).valueOf();
            }
            catch (error) {
                if ($mol_fail_catch(error)) {
                    const def = this.lang_default();
                    if (lang === def)
                        throw error;
                }
            }
            return {};
        }
        static text(key) {
            const lang = this.lang();
            const target = this.texts(lang)[key];
            if (target)
                return target;
            this.warn(key);
            const en = this.texts('en')[key];
            if (!en)
                return key;
            try {
                return $mol_wire_sync($hyoo_lingua_translate).call(this.$, lang, en);
            }
            catch (error) {
                $mol_fail_log(error);
            }
            return en;
        }
        static warn(key) {
            console.warn(`Not translated to "${this.lang()}": ${key}`);
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_locale, "lang_default", null);
    __decorate([
        $mol_mem
    ], $mol_locale, "lang", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "source", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "texts", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "text", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "warn", null);
    $.$mol_locale = $mol_locale;
})($ || ($ = {}));
//mol/locale/locale.ts
;
"use strict";
var $;
(function ($) {
    class $mol_link extends $mol_view {
        uri() {
            return "";
        }
        dom_name() {
            return "a";
        }
        attr() {
            return {
                ...super.attr(),
                href: this.uri_toggle(),
                title: this.hint_safe(),
                target: this.target(),
                download: this.file_name(),
                mol_link_current: this.current()
            };
        }
        sub() {
            return [
                this.title()
            ];
        }
        arg() {
            return {};
        }
        event() {
            return {
                ...super.event(),
                click: (event) => this.click(event)
            };
        }
        uri_toggle() {
            return "";
        }
        hint() {
            return "";
        }
        hint_safe() {
            return this.hint();
        }
        target() {
            return "_self";
        }
        file_name() {
            return "";
        }
        current() {
            return false;
        }
        event_click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        click(event) {
            return this.event_click(event);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_link.prototype, "event_click", null);
    $.$mol_link = $mol_link;
})($ || ($ = {}));
//mol/link/-view.tree/link.view.tree.ts
;
"use strict";
//mol/state/arg/arg.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_arg extends $mol_object {
        prefix;
        static prolog = '';
        static separator = ' ';
        static href(next) {
            return next || process.argv.slice(2).join(' ');
        }
        static href_normal() {
            return this.link({});
        }
        static dict(next) {
            if (next !== void 0)
                this.href(this.make_link(next));
            var href = this.href();
            var chunks = href.split(' ');
            var params = {};
            chunks.forEach(chunk => {
                if (!chunk)
                    return;
                var vals = chunk.split('=').map(decodeURIComponent);
                params[vals.shift()] = vals.join('=');
            });
            return params;
        }
        static value(key, next) {
            if (next === void 0)
                return this.dict()[key] ?? null;
            this.href(this.link({ [key]: next }));
            return next;
        }
        static link(next) {
            const params = {};
            var prev = this.dict();
            for (var key in prev) {
                params[key] = prev[key];
            }
            for (var key in next) {
                params[key] = next[key];
            }
            return this.make_link(params);
        }
        static make_link(next) {
            const chunks = [];
            for (const key in next) {
                if (next[key] !== null) {
                    chunks.push([key, next[key]].map(encodeURIComponent).join('='));
                }
            }
            return chunks.join(' ');
        }
        static go(next) {
            this.href(this.make_link(next));
        }
        constructor(prefix = '') {
            super();
            this.prefix = prefix;
        }
        value(key, next) {
            return this.constructor.value(this.prefix + key, next);
        }
        sub(postfix) {
            return new this.constructor(this.prefix + postfix + '.');
        }
        link(next) {
            const prefix = this.prefix;
            const dict = {};
            for (var key in next) {
                dict[prefix + key] = next[key];
            }
            return this.constructor.link(dict);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href_normal", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "dict", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "value", null);
    __decorate([
        $mol_action
    ], $mol_state_arg, "go", null);
    $.$mol_state_arg = $mol_state_arg;
})($ || ($ = {}));
//mol/state/arg/arg.node.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link extends $.$mol_link {
            uri_toggle() {
                return this.current() ? this.uri_off() : this.uri();
            }
            uri() {
                return new this.$.$mol_state_arg(this.state_key()).link(this.arg());
            }
            uri_off() {
                const arg2 = {};
                for (let i in this.arg())
                    arg2[i] = null;
                return new this.$.$mol_state_arg(this.state_key()).link(arg2);
            }
            uri_native() {
                const base = this.$.$mol_state_arg.href();
                return new URL(this.uri(), base);
            }
            current() {
                const base = this.$.$mol_state_arg.href_normal();
                const target = this.uri_native().toString();
                if (base === target)
                    return true;
                const args = this.arg();
                const keys = Object.keys(args).filter(key => args[key] != null);
                if (keys.length === 0)
                    return false;
                for (const key of keys) {
                    if (this.$.$mol_state_arg.value(key) != args[key])
                        return false;
                }
                return true;
            }
            file_name() {
                return null;
            }
            minimal_height() {
                return Math.max(super.minimal_height(), 24);
            }
            external() {
                return this.uri_native().origin !== $mol_dom_context.location.origin;
            }
            target() {
                return this.external() ? '_blank' : '_self';
            }
            hint_safe() {
                try {
                    return this.hint();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return '';
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_toggle", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_off", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_native", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "current", null);
        $$.$mol_link = $mol_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/link/link.view.ts
;
"use strict";
var $;
(function ($) {
    const { rem } = $mol_style_unit;
    $mol_style_define($mol_link, {
        textDecoration: 'none',
        color: $mol_theme.control,
        stroke: 'currentcolor',
        cursor: 'pointer',
        padding: $mol_gap.text,
        boxSizing: 'border-box',
        position: 'relative',
        minWidth: rem(2.5),
        gap: $mol_gap.space,
        border: {
            radius: $mol_gap.round,
        },
        ':hover': {
            background: {
                color: $mol_theme.hover,
            },
        },
        ':focus': {
            outline: 'none',
            background: {
                color: $mol_theme.hover,
            },
        },
        ':focus-within': {
            outline: 'none',
            background: {
                color: $mol_theme.hover,
            }
        },
        ':active': {
            color: $mol_theme.focus,
        },
        '@': {
            mol_link_current: {
                'true': {
                    color: $mol_theme.current,
                    textShadow: '0 0',
                }
            }
        },
    });
})($ || ($ = {}));
//mol/link/link.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_delete extends $mol_icon {
        path() {
            return "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19C6,20.1 6.9,21 8,21H16C17.1,21 18,20.1 18,19V7H6V19Z";
        }
    }
    $.$mol_icon_delete = $mol_icon_delete;
})($ || ($ = {}));
//mol/icon/delete/-view.tree/delete.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_list extends $mol_view {
        render_visible_only() {
            return true;
        }
        render_over() {
            return 0;
        }
        sub() {
            return this.rows();
        }
        Empty() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        Gap_before() {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                paddingTop: this.gap_before()
            });
            return obj;
        }
        Gap_after() {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                paddingTop: this.gap_after()
            });
            return obj;
        }
        view_window() {
            return [
                0,
                0
            ];
        }
        rows() {
            return [];
        }
        gap_before() {
            return 0;
        }
        gap_after() {
            return 0;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_list.prototype, "Empty", null);
    __decorate([
        $mol_mem
    ], $mol_list.prototype, "Gap_before", null);
    __decorate([
        $mol_mem
    ], $mol_list.prototype, "Gap_after", null);
    $.$mol_list = $mol_list;
})($ || ($ = {}));
//mol/list/-view.tree/list.view.tree.ts
;
"use strict";
var $;
(function ($) {
    let cache = null;
    function $mol_support_css_overflow_anchor() {
        return cache ?? (cache = (!/Gecko\//.test(navigator.userAgent)
            && this.$mol_dom_context.CSS?.supports('overflow-anchor:auto')) ?? false);
    }
    $.$mol_support_css_overflow_anchor = $mol_support_css_overflow_anchor;
})($ || ($ = {}));
//mol/support/css/css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_list extends $.$mol_list {
            sub() {
                const rows = this.rows();
                return (rows.length === 0) ? [this.Empty()] : rows;
            }
            render_visible_only() {
                return this.$.$mol_support_css_overflow_anchor();
            }
            view_window(next) {
                const kids = this.sub();
                if (kids.length < 3)
                    return [0, kids.length];
                if (this.$.$mol_print.active())
                    return [0, kids.length];
                const rect = this.view_rect();
                if (next)
                    return next;
                let [min, max] = $mol_mem_cached(() => this.view_window()) ?? [0, 0];
                let max2 = max = Math.min(max, kids.length);
                let min2 = min = Math.max(0, Math.min(min, max - 1));
                const anchoring = this.render_visible_only();
                const window_height = this.$.$mol_window.size().height + 40;
                const over = Math.ceil(window_height * this.render_over());
                const limit_top = -over;
                const limit_bottom = window_height + over;
                const gap_before = $mol_mem_cached(() => this.gap_before()) ?? 0;
                const gap_after = $mol_mem_cached(() => this.gap_after()) ?? 0;
                let top = Math.ceil(rect?.top ?? 0) + gap_before;
                let bottom = Math.ceil(rect?.bottom ?? 0) - gap_after;
                if (top <= limit_top && bottom >= limit_bottom) {
                    return [min2, max2];
                }
                if (anchoring && ((bottom < limit_top) || (top > limit_bottom))) {
                    min = 0;
                    top = Math.ceil(rect?.top ?? 0);
                    while (min < (kids.length - 1)) {
                        const height = kids[min].minimal_height();
                        if (top + height >= limit_top)
                            break;
                        top += height;
                        ++min;
                    }
                    min2 = min;
                    max2 = max = min;
                    bottom = top;
                }
                let top2 = top;
                let bottom2 = bottom;
                if (anchoring && (top <= limit_top) && (bottom2 < limit_bottom)) {
                    min2 = Math.max(0, max - 1);
                    top2 = bottom;
                }
                if ((bottom >= limit_bottom) && (top2 >= limit_top)) {
                    max2 = Math.min(min + 1, kids.length);
                    bottom2 = top;
                }
                while (bottom2 < limit_bottom && max2 < kids.length) {
                    bottom2 += kids[max2].minimal_height();
                    ++max2;
                }
                while (anchoring && ((top2 >= limit_top) && (min2 > 0))) {
                    --min2;
                    top2 -= kids[min2].minimal_height();
                }
                return [min2, max2];
            }
            gap_before() {
                const skipped = this.sub().slice(0, this.view_window()[0]);
                return Math.max(0, skipped.reduce((sum, view) => sum + view.minimal_height(), 0));
            }
            gap_after() {
                const skipped = this.sub().slice(this.view_window()[1]);
                return Math.max(0, skipped.reduce((sum, view) => sum + view.minimal_height(), 0));
            }
            sub_visible() {
                return [
                    ...this.gap_before() ? [this.Gap_before()] : [],
                    ...this.sub().slice(...this.view_window()),
                    ...this.gap_after() ? [this.Gap_after()] : [],
                ];
            }
            minimal_height() {
                return this.sub().reduce((sum, view) => {
                    try {
                        return sum + view.minimal_height();
                    }
                    catch (error) {
                        $mol_fail_log(error);
                        return sum;
                    }
                }, 0);
            }
            force_render(path) {
                const kids = this.rows();
                const index = kids.findIndex(item => path.has(item));
                if (index >= 0) {
                    const win = this.view_window();
                    if (index < win[0] || index >= win[1]) {
                        this.view_window([this.render_visible_only() ? index : 0, index + 1]);
                    }
                    kids[index].force_render(path);
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "sub", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "view_window", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "gap_before", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "gap_after", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "sub_visible", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "minimal_height", null);
        $$.$mol_list = $mol_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/list/list.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/list/list.view.css", "[mol_list] {\n\twill-change: contents;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-shrink: 0;\n\tmax-width: 100%;\n\t/* display: flex;\n\talign-items: stretch;\n\talign-content: stretch; */\n\ttransition: none;\n\tmin-height: .5rem;\n}\n\n[mol_list_gap_before] ,\n[mol_list_gap_after] {\n\tdisplay: block !important;\n\tflex: none;\n\ttransition: none;\n\toverflow-anchor: none;\n}\n");
})($ || ($ = {}));
//mol/list/-css/list.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_check extends $mol_button_minor {
        attr() {
            return {
                ...super.attr(),
                mol_check_checked: this.checked(),
                "aria-checked": this.aria_checked(),
                role: this.aria_role()
            };
        }
        sub() {
            return [
                this.Icon(),
                this.label()
            ];
        }
        checked(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        aria_checked() {
            return "false";
        }
        aria_role() {
            return "checkbox";
        }
        Icon() {
            return null;
        }
        title() {
            return "";
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        label() {
            return [
                this.Title()
            ];
        }
    }
    __decorate([
        $mol_mem
    ], $mol_check.prototype, "checked", null);
    __decorate([
        $mol_mem
    ], $mol_check.prototype, "Title", null);
    $.$mol_check = $mol_check;
})($ || ($ = {}));
//mol/check/-view.tree/check.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_maybe(value) {
        return (value == null) ? [] : [value];
    }
    $.$mol_maybe = $mol_maybe;
})($ || ($ = {}));
//mol/maybe/maybe.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/check.css", "[mol_check] {\n\tflex: 0 0 auto;\n\tjustify-content: flex-start;\n\talign-content: center;\n\talign-items: flex-start;\n\tborder: none;\n\tfont-weight: inherit;\n\tbox-shadow: none;\n\ttext-align: left;\n\tdisplay: inline-flex;\n\tflex-wrap: nowrap;\n}\n\n[mol_check_title] {\n\tflex-shrink: 1;\n}\n");
})($ || ($ = {}));
//mol/check/-css/check.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check extends $.$mol_check {
            click(next) {
                if (next?.defaultPrevented)
                    return;
                this.checked(!this.checked());
                if (next)
                    next.preventDefault();
            }
            sub() {
                return [
                    ...$mol_maybe(this.Icon()),
                    ...this.label(),
                ];
            }
            label() {
                return this.title() ? super.label() : [];
            }
            aria_checked() {
                return String(this.checked());
            }
        }
        $$.$mol_check = $mol_check;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/check/check.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_check_list extends $mol_view {
        Option(id) {
            const obj = new this.$.$mol_check();
            obj.checked = (val) => this.option_checked(id, val);
            obj.label = () => this.option_label(id);
            obj.enabled = () => this.option_enabled(id);
            obj.hint = () => this.option_hint(id);
            obj.minimal_height = () => 24;
            return obj;
        }
        options() {
            return {};
        }
        keys() {
            return [];
        }
        sub() {
            return this.items();
        }
        option_checked(id, val) {
            if (val !== undefined)
                return val;
            return false;
        }
        option_title(id) {
            return "";
        }
        option_label(id) {
            return [
                this.option_title(id)
            ];
        }
        enabled() {
            return true;
        }
        option_enabled(id) {
            return this.enabled();
        }
        option_hint(id) {
            return "";
        }
        items() {
            return [];
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_check_list.prototype, "Option", null);
    __decorate([
        $mol_mem_key
    ], $mol_check_list.prototype, "option_checked", null);
    $.$mol_check_list = $mol_check_list;
})($ || ($ = {}));
//mol/check/list/-view.tree/list.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check_list extends $.$mol_check_list {
            options() {
                return {};
            }
            keys() {
                return Object.keys(this.options());
            }
            items() {
                return this.keys().map(key => this.Option(key));
            }
            option_title(key) {
                return this.options()[key] || key;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_check_list.prototype, "keys", null);
        __decorate([
            $mol_mem
        ], $mol_check_list.prototype, "items", null);
        $$.$mol_check_list = $mol_check_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/check/list/list.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/list/list.view.css", "[mol_check_list] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tflex: 1 1 auto;\n\tborder-radius: var(--mol_gap_round);\n\tgap: 1px;\n}\n\n[mol_check_list_option] {\n\tflex: 0 1 auto;\n}\n\n[mol_check_list_option]:where([mol_check_checked=\"true\"]) {\n\ttext-shadow: 0 0;\n\tcolor: var(--mol_theme_current);\n}\n\n[mol_check_list_option]:where([mol_check_checked=\"true\"][disabled]) {\n\tcolor: var(--mol_theme_text);\n}\n");
})($ || ($ = {}));
//mol/check/list/-css/list.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_switch extends $mol_check_list {
        value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_switch.prototype, "value", null);
    $.$mol_switch = $mol_switch;
})($ || ($ = {}));
//mol/switch/-view.tree/switch.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_session extends $mol_object {
        static 'native()';
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $mol_dom_context.sessionStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static value(key, next) {
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_session.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_state_session, "value", null);
    $.$mol_state_session = $mol_state_session;
})($ || ($ = {}));
//mol/state/session/session.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_switch extends $.$mol_switch {
            value(next) {
                return $mol_state_session.value(`${this}.value()`, next) ?? '';
            }
            option_checked(key, next) {
                if (next === undefined)
                    return this.value() == key;
                this.value(next ? key : '');
                return next;
            }
        }
        $$.$mol_switch = $mol_switch;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/switch/switch.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_deck extends $mol_list {
        items() {
            return [];
        }
        rows() {
            return [
                this.Switch(),
                this.Content()
            ];
        }
        current(val) {
            if (val !== undefined)
                return val;
            return "0";
        }
        switch_options() {
            return {};
        }
        Switch() {
            const obj = new this.$.$mol_switch();
            obj.value = (val) => this.current(val);
            obj.options = () => this.switch_options();
            return obj;
        }
        Content() {
            const obj = new this.$.$mol_view();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_deck.prototype, "current", null);
    __decorate([
        $mol_mem
    ], $mol_deck.prototype, "Switch", null);
    __decorate([
        $mol_mem
    ], $mol_deck.prototype, "Content", null);
    $.$mol_deck = $mol_deck;
})($ || ($ = {}));
//mol/deck/-view.tree/deck.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_deck extends $.$mol_deck {
            current(next) {
                return $mol_state_session.value(`${this}.current()`, next) || '0';
            }
            switch_options() {
                let options = {};
                this.items().forEach((item, index) => {
                    options[String(index)] = item.title();
                });
                return options;
            }
            Content() {
                return this.items()[Number(this.current())];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_deck.prototype, "Content", null);
        $$.$mol_deck = $mol_deck;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/deck/deck.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_github_circle extends $mol_icon {
        path() {
            return "M12,2C6.48,2 2,6.48 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12C22,6.48 17.52,2 12,2Z";
        }
    }
    $.$mol_icon_github_circle = $mol_icon_github_circle;
})($ || ($ = {}));
//mol/icon/github/circle/-view.tree/circle.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_link_source extends $mol_link {
        hint() {
            return this.$.$mol_locale.text('$mol_link_source_hint');
        }
        sub() {
            return [
                this.Icon()
            ];
        }
        Icon() {
            const obj = new this.$.$mol_icon_github_circle();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_link_source.prototype, "Icon", null);
    $.$mol_link_source = $mol_link_source;
})($ || ($ = {}));
//mol/link/source/-view.tree/source.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_page extends $mol_view {
        dom_name() {
            return "article";
        }
        field() {
            return {
                ...super.field(),
                tabIndex: this.tabindex()
            };
        }
        sub() {
            return [
                this.Head(),
                this.Body(),
                this.Foot()
            ];
        }
        tabindex() {
            return -1;
        }
        Logo() {
            return null;
        }
        title_content() {
            return [
                this.Logo(),
                this.title()
            ];
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.dom_name = () => "h1";
            obj.sub = () => this.title_content();
            return obj;
        }
        tools() {
            return [];
        }
        Tools() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.tools();
            return obj;
        }
        head() {
            return [
                this.Title(),
                this.Tools()
            ];
        }
        Head() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 64;
            obj.dom_name = () => "header";
            obj.sub = () => this.head();
            return obj;
        }
        body() {
            return [];
        }
        body_scroll_top(val) {
            return this.Body().scroll_top(val);
        }
        Body() {
            const obj = new this.$.$mol_scroll();
            obj.sub = () => this.body();
            return obj;
        }
        foot() {
            return [];
        }
        Foot() {
            const obj = new this.$.$mol_view();
            obj.dom_name = () => "footer";
            obj.sub = () => this.foot();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Title", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Tools", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Head", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Body", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Foot", null);
    $.$mol_page = $mol_page;
})($ || ($ = {}));
//mol/page/-view.tree/page.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem } = $mol_style_unit;
        const { calc } = $mol_style_func;
        $mol_style_define($mol_page, {
            display: 'flex',
            flex: {
                basis: 'auto',
                direction: 'column',
            },
            position: 'relative',
            alignSelf: 'stretch',
            maxWidth: per(100),
            maxHeight: per(100),
            boxSizing: 'border-box',
            color: $mol_theme.text,
            ':focus': {
                outline: 'none',
            },
            Head: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'flex-end',
                flex: 'none',
                position: 'relative',
                margin: 0,
                minHeight: rem(4),
                padding: $mol_gap.block,
                background: {
                    color: $mol_theme.card,
                },
                border: {
                    radius: $mol_gap.round,
                },
                boxShadow: `0 0.5rem 0.5rem -0.5rem hsla(0,0%,0%,.25)`,
                zIndex: 2,
            },
            Title: {
                minHeight: rem(2),
                margin: 0,
                padding: $mol_gap.text,
                gap: $mol_gap.text,
                wordBreak: 'normal',
                textShadow: '0 0',
                font: {
                    size: 'inherit',
                    weight: 'normal',
                },
                flex: {
                    grow: 1,
                    shrink: 1,
                    basis: 'auto',
                },
            },
            Tools: {
                flex: {
                    basis: 'auto',
                    grow: 1000,
                    shrink: 1,
                },
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
            },
            Body: {
                flex: {
                    grow: 1000,
                    shrink: 1,
                    basis: per(100),
                },
                padding: $mol_gap.block,
            },
            Foot: {
                display: 'flex',
                justifyContent: 'space-between',
                flex: 'none',
                margin: 0,
                background: {
                    color: $mol_theme.card,
                },
                border: {
                    radius: $mol_gap.round,
                },
                boxShadow: `0 -0.5rem 0.5rem -0.5rem hsla(0,0%,0%,.25)`,
                zIndex: 1,
                padding: $mol_gap.block,
                ':empty': {
                    display: 'none',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/page/page.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_store extends $mol_object2 {
        data_default;
        constructor(data_default) {
            super();
            this.data_default = data_default;
        }
        data(next) {
            return next === undefined ? this.data_default : next;
        }
        snapshot(next) {
            return JSON.stringify(this.data(next === undefined ? next : JSON.parse(next)));
        }
        value(key, next) {
            const data = this.data();
            if (next === undefined)
                return data && data[key];
            const Constr = Reflect.getPrototypeOf(data).constructor;
            this.data(Object.assign(new Constr, data, { [key]: next }));
            return next;
        }
        selection(key, next = [0, 0]) {
            return next;
        }
        sub(key, lens) {
            if (!lens)
                lens = new $mol_store();
            const data = lens.data;
            lens.data = next => {
                if (next == undefined) {
                    return this.value(key) ?? lens.data_default;
                }
                return this.value(key, next);
            };
            return lens;
        }
        reset() {
            this.data(this.data_default);
        }
        active() {
            return true;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_store.prototype, "data", null);
    __decorate([
        $mol_mem_key
    ], $mol_store.prototype, "selection", null);
    $.$mol_store = $mol_store;
})($ || ($ = {}));
//mol/store/store.ts
;
"use strict";
var $;
(function ($) {
    class $visavis_plot extends $mol_store {
        id(next) {
            return this.value('id', next);
        }
        type() {
            return this.value('type');
        }
        json() {
            return this.value('json');
        }
    }
    $.$visavis_plot = $visavis_plot;
})($ || ($ = {}));
//visavis/plot/plot.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_tick extends $mol_icon {
        path() {
            return "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z";
        }
    }
    $.$mol_icon_tick = $mol_icon_tick;
})($ || ($ = {}));
//mol/icon/tick/-view.tree/tick.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_check_box extends $mol_check {
        Icon() {
            const obj = new this.$.$mol_icon_tick();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_check_box.prototype, "Icon", null);
    $.$mol_check_box = $mol_check_box;
})($ || ($ = {}));
//mol/check/box/-view.tree/box.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/box/box.view.css", "[mol_check_box_icon] {\n\tborder-radius: var(--mol_gap_round);\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_line);\n\tcolor: var(--mol_theme_shade);\n\theight: 1rem;\n\talign-self: center;\n}\n\n[mol_check]:not([mol_check_checked]) > [mol_check_box_icon] {\n\tfill: transparent;\n}\n\n[mol_check]:not([disabled]) > [mol_check_box_icon] {\n\tbackground: var(--mol_theme_field);\n\tcolor: var(--mol_theme_text);\n}\n");
})($ || ($ = {}));
//mol/check/box/-css/box.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_labeler extends $mol_list {
        rows() {
            return [
                this.Label(),
                this.Content()
            ];
        }
        label() {
            return [
                this.title()
            ];
        }
        Label() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 32;
            obj.sub = () => this.label();
            return obj;
        }
        content() {
            return [];
        }
        Content() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 24;
            obj.sub = () => this.content();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_labeler.prototype, "Label", null);
    __decorate([
        $mol_mem
    ], $mol_labeler.prototype, "Content", null);
    $.$mol_labeler = $mol_labeler;
})($ || ($ = {}));
//mol/labeler/-view.tree/labeler.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/labeler/labeler.view.css", "[mol_labeler] {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: stretch;\n\tcursor: inherit;\n}\n\n[mol_labeler_label] {\n\tmin-height: 2rem;\n\tcolor: var(--mol_theme_shade);\n\tpadding: .5rem .75rem 0;\n\tgap: 0 var(--mol_gap_block);\n\tflex-wrap: wrap;\n}\n\n[mol_labeler_content] {\n\tdisplay: flex;\n\tpadding: var(--mol_gap_text);\n}\n");
})($ || ($ = {}));
//mol/labeler/-css/labeler.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $visavis_matrix extends $mol_book2 {
        plot() {
            const obj = new this.$.$visavis_plot();
            return obj;
        }
        size() {
            return 0;
        }
        links_value_min(next) {
            if (next !== undefined)
                return next;
            return 0;
        }
        links_value_max(next) {
            if (next !== undefined)
                return next;
            return 0;
        }
        heatmap(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        matrix() {
            return [];
        }
        heatmap_colors() {
            return [
                "rgb(150,0,90)",
                "rgb(0,0,200)",
                "rgb(0,25,255)",
                "rgb(0,152,255)",
                "rgb(44,255,150)",
                "rgb(151,255,0)",
                "rgb(255,234,0)",
                "rgb(255,111,0)",
                "rgb(255,0,0)"
            ];
        }
        colorset() {
            return [
                "#3e3f95",
                "#c00",
                "#FE9A2E",
                "#090",
                "#f0f",
                "#09f",
                "#666",
                "#0f3",
                "#0ff",
                "#90c"
            ];
        }
        order() {
            return [];
        }
        order_current(next) {
            if (next !== undefined)
                return next;
            return "nump";
        }
        plot_padding() {
            return 32;
        }
        axis_width() {
            return 24;
        }
        pages() {
            return [
                this.Plot(),
                this.Setup()
            ];
        }
        plot_title() {
            return "";
        }
        Root() {
            const obj = new this.$.$mol_svg();
            return obj;
        }
        Heatmap_min() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.links_value_min()
            ];
            return obj;
        }
        heatmap_color(id) {
            return "";
        }
        Heatmap_color(id) {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                background: this.heatmap_color(id)
            });
            return obj;
        }
        Heatmap_max() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.links_value_max()
            ];
            return obj;
        }
        heatmap_color_list() {
            return [
                this.Heatmap_min(),
                this.Heatmap_color("0"),
                this.Heatmap_max()
            ];
        }
        Heatmap_legend() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.heatmap_color_list();
            return obj;
        }
        Side_right() {
            const obj = new this.$.$mol_scroll();
            obj.sub = () => [
                this.Heatmap_legend()
            ];
            return obj;
        }
        plot_body() {
            return [
                this.Root(),
                this.Side_right()
            ];
        }
        draw() {
            return null;
        }
        Plot() {
            const obj = new this.$.$mol_page();
            obj.title = () => this.plot_title();
            obj.body = () => this.plot_body();
            obj.auto = () => this.draw();
            return obj;
        }
        nonformers(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        Nonformers() {
            const obj = new this.$.$mol_check_box();
            obj.hint = () => this.$.$mol_locale.text('$visavis_matrix_Nonformers_hint');
            obj.title = () => this.$.$mol_locale.text('$visavis_matrix_Nonformers_title');
            obj.checked = (next) => this.nonformers(next);
            return obj;
        }
        Nonformers_label() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => this.$.$mol_locale.text('$visavis_matrix_Nonformers_label_title');
            obj.Content = () => this.Nonformers();
            return obj;
        }
        order_dict() {
            return {
                nump: this.$.$mol_locale.text('$visavis_matrix_order_dict_nump'),
                num: this.$.$mol_locale.text('$visavis_matrix_order_dict_num'),
                size: this.$.$mol_locale.text('$visavis_matrix_order_dict_size'),
                rea: this.$.$mol_locale.text('$visavis_matrix_order_dict_rea'),
                rpp: this.$.$mol_locale.text('$visavis_matrix_order_dict_rpp'),
                rion: this.$.$mol_locale.text('$visavis_matrix_order_dict_rion'),
                rcov: this.$.$mol_locale.text('$visavis_matrix_order_dict_rcov'),
                rmet: this.$.$mol_locale.text('$visavis_matrix_order_dict_rmet'),
                tmelt: this.$.$mol_locale.text('$visavis_matrix_order_dict_tmelt'),
                eneg: this.$.$mol_locale.text('$visavis_matrix_order_dict_eneg')
            };
        }
        Order_switch() {
            const obj = new this.$.$mol_switch();
            obj.value = (next) => this.order_current(next);
            obj.options = () => this.order_dict();
            return obj;
        }
        Order_label() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => this.$.$mol_locale.text('$visavis_matrix_Order_label_title');
            obj.Content = () => this.Order_switch();
            return obj;
        }
        Setup() {
            const obj = new this.$.$mol_page();
            obj.title = () => this.$.$mol_locale.text('$visavis_matrix_Setup_title');
            obj.body = () => [
                this.Nonformers_label(),
                this.Order_label()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $visavis_matrix.prototype, "plot", null);
    __decorate([
        $mol_mem
    ], $visavis_matrix.prototype, "links_value_min", null);
    __decorate([
        $mol_mem
    ], $visavis_matrix.prototype, "links_value_max", null);
    __decorate([
        $mol_mem
    ], $visavis_matrix.prototype, "heatmap", null);
    __decorate([
        $mol_mem
    ], $visavis_matrix.prototype, "order_current", null);
    __decorate([
        $mol_mem
    ], $visavis_matrix.prototype, "Root", null);
    __decorate([
        $mol_mem
    ], $visavis_matrix.prototype, "Heatmap_min", null);
    __decorate([
        $mol_mem_key
    ], $visavis_matrix.prototype, "Heatmap_color", null);
    __decorate([
        $mol_mem
    ], $visavis_matrix.prototype, "Heatmap_max", null);
    __decorate([
        $mol_mem
    ], $visavis_matrix.prototype, "Heatmap_legend", null);
    __decorate([
        $mol_mem
    ], $visavis_matrix.prototype, "Side_right", null);
    __decorate([
        $mol_mem
    ], $visavis_matrix.prototype, "Plot", null);
    __decorate([
        $mol_mem
    ], $visavis_matrix.prototype, "nonformers", null);
    __decorate([
        $mol_mem
    ], $visavis_matrix.prototype, "Nonformers", null);
    __decorate([
        $mol_mem
    ], $visavis_matrix.prototype, "Nonformers_label", null);
    __decorate([
        $mol_mem
    ], $visavis_matrix.prototype, "Order_switch", null);
    __decorate([
        $mol_mem
    ], $visavis_matrix.prototype, "Order_label", null);
    __decorate([
        $mol_mem
    ], $visavis_matrix.prototype, "Setup", null);
    $.$visavis_matrix = $visavis_matrix;
})($ || ($ = {}));
//visavis/matrix/-view.tree/matrix.view.tree.ts
;
"use strict";
//mol/data/value/value.ts
;
"use strict";
//mol/type/equals/equals.ts
;
"use strict";
//mol/type/merge/merge.ts
;
"use strict";
//mol/type/partial/undefined/undefined.ts
;
"use strict";
var $;
(function ($) {
    function $mol_data_setup(value, config) {
        return Object.assign(value, {
            config,
            Value: null
        });
    }
    $.$mol_data_setup = $mol_data_setup;
})($ || ($ = {}));
//mol/data/setup/setup.ts
;
"use strict";
var $;
(function ($) {
    function $mol_data_record(sub) {
        return $mol_data_setup((val) => {
            let res = {};
            for (const field in sub) {
                try {
                    res[field] = sub[field](val[field]);
                }
                catch (error) {
                    if (error instanceof Promise)
                        return $mol_fail_hidden(error);
                    error.message = `[${JSON.stringify(field)}] ${error.message}`;
                    return $mol_fail(error);
                }
            }
            return res;
        }, sub);
    }
    $.$mol_data_record = $mol_data_record;
})($ || ($ = {}));
//mol/data/record/record.ts
;
"use strict";
var $;
(function ($) {
    function $mol_diff_path(...paths) {
        const limit = Math.min(...paths.map(path => path.length));
        lookup: for (var i = 0; i < limit; ++i) {
            const first = paths[0][i];
            for (let j = 1; j < paths.length; ++j) {
                if (paths[j][i] !== first)
                    break lookup;
            }
        }
        return {
            prefix: paths[0].slice(0, i),
            suffix: paths.map(path => path.slice(i)),
        };
    }
    $.$mol_diff_path = $mol_diff_path;
})($ || ($ = {}));
//mol/diff/path/path.ts
;
"use strict";
var $;
(function ($) {
    class $mol_error_mix extends Error {
        errors;
        constructor(message, ...errors) {
            super(message);
            this.errors = errors;
            if (errors.length) {
                const stacks = [...errors.map(error => error.stack), this.stack];
                const diff = $mol_diff_path(...stacks.map(stack => {
                    if (!stack)
                        return [];
                    return stack.split('\n').reverse();
                }));
                const head = diff.prefix.reverse().join('\n');
                const tails = diff.suffix.map(path => path.reverse().map(line => line.replace(/^(?!\s+at)/, '\tat (.) ')).join('\n')).join('\n\tat (.) -----\n');
                this.stack = `Error: ${this.constructor.name}\n\tat (.) /"""\\\n${tails}\n\tat (.) \\___/\n${head}`;
                this.message += errors.map(error => '\n' + error.message).join('');
            }
        }
        toJSON() {
            return this.message;
        }
    }
    $.$mol_error_mix = $mol_error_mix;
})($ || ($ = {}));
//mol/error/mix/mix.ts
;
"use strict";
var $;
(function ($) {
    class $mol_data_error extends $mol_error_mix {
    }
    $.$mol_data_error = $mol_data_error;
})($ || ($ = {}));
//mol/data/error/error.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_data_string = (val) => {
        if (typeof val === 'string')
            return val;
        return $mol_fail(new $mol_data_error(`${val} is not a string`));
    };
})($ || ($ = {}));
//mol/data/string/string.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_data_number = (val) => {
        if (typeof val === 'number')
            return val;
        return $mol_fail(new $mol_data_error(`${val} is not a number`));
    };
})($ || ($ = {}));
//mol/data/number/number.ts
;
"use strict";
var $;
(function ($) {
    function $mol_data_optional(sub, fallback) {
        return $mol_data_setup((val) => {
            if (val === undefined) {
                return fallback?.();
            }
            return sub(val);
        }, { sub, fallback });
    }
    $.$mol_data_optional = $mol_data_optional;
})($ || ($ = {}));
//mol/data/optional/optional.ts
;
"use strict";
var $;
(function ($) {
    function $mol_data_array(sub) {
        return $mol_data_setup((val) => {
            if (!Array.isArray(val))
                return $mol_fail(new $mol_data_error(`${val} is not an array`));
            return val.map((item, index) => {
                try {
                    return sub(item);
                }
                catch (error) {
                    if (error instanceof Promise)
                        return $mol_fail_hidden(error);
                    error.message = `[${index}] ${error.message}`;
                    return $mol_fail(error);
                }
            });
        }, sub);
    }
    $.$mol_data_array = $mol_data_array;
})($ || ($ = {}));
//mol/data/array/array.ts
;
"use strict";
var $;
(function ($) {
    class $mol_import extends $mol_object2 {
        static module(uri) {
            $mol_wire_solid();
            return $mol_wire_sync(this).module_async(uri);
        }
        static module_async(uri) {
            return import(uri);
        }
        static script(uri) {
            $mol_wire_solid();
            return $mol_wire_sync(this).script_async(uri);
        }
        static script_async(uri) {
            const doc = $mol_dom_context.document;
            const script = doc.createElement('script');
            script.src = uri;
            doc.head.appendChild(script);
            return new Promise((done, fail) => {
                script.onload = () => done($mol_dom_context);
                script.onerror = () => fail(new Error(`Can not import ${uri}`));
            });
        }
        static style(uri) {
            return $mol_wire_sync(this).style_async(uri);
        }
        static style_async(uri) {
            const doc = $mol_dom_context.document;
            const style = doc.createElement('link');
            style.rel = 'stylesheet';
            style.href = uri;
            doc.head.appendChild(style);
            return new Promise((done, fail) => {
                style.onload = () => done(style.sheet);
                style.onerror = () => fail(new Error(`Can not import ${uri}`));
            });
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_import, "module", null);
    __decorate([
        $mol_mem_key
    ], $mol_import, "script", null);
    __decorate([
        $mol_mem_key
    ], $mol_import, "style", null);
    $.$mol_import = $mol_import;
})($ || ($ = {}));
//mol/import/import.ts
;
"use strict";
var $;
(function ($) {
    class $visavis_lib extends $mol_object2 {
        static plotly() {
            return $mol_import.script('/visavis/lib/bundle/plotly.custom.min.js').Plotly;
        }
        static pca() {
            return $mol_import.script('/visavis/lib/bundle/pca.js').mlPca;
        }
        static d3() {
            return this.plotly().d3;
        }
    }
    __decorate([
        $mol_mem
    ], $visavis_lib, "plotly", null);
    __decorate([
        $mol_mem
    ], $visavis_lib, "pca", null);
    $.$visavis_lib = $visavis_lib;
})($ || ($ = {}));
//visavis/lib/lib.ts
;
"use strict";
var $;
(function ($) {
    $.$visavis_nonformer_pd_bin = [[88, 23], [88, 41], [46, 78], [46, 82], [46, 5], [46, 26], [46, 23], [46, 28], [46, 25], [46, 31], [46, 76], [46, 24], [46, 41], [46, 27], [46, 75], [46, 81], [46, 74], [46, 44], [46, 43], [46, 13], [46, 80], [46, 91], [46, 22], [12, 3], [12, 82], [12, 47], [12, 54], [12, 30], [12, 31], [12, 79], [12, 48], [12, 18], [12, 10], [12, 81], [12, 13], [12, 49], [12, 80], [12, 29], [94, 23], [94, 41], [94, 92], [94, 93], [94, 91], [17, 6], [32, 78], [32, 82], [32, 81], [32, 80], [78, 5], [78, 26], [78, 25], [78, 31], [78, 41], [78, 27], [78, 14], [78, 77], [78, 44], [78, 43], [78, 13], [78, 73], [55, 19], [55, 62], [55, 25], [55, 63], [55, 56], [55, 24], [55, 41], [55, 59], [55, 27], [55, 60], [55, 58], [55, 20], [55, 61], [55, 37], [55, 21], [55, 22], [55, 38], [55, 69], [4, 82], [4, 47], [4, 28], [3, 82], [3, 30], [3, 31], [3, 48], [3, 2], [3, 10], [3, 13], [3, 49], [3, 29], [4, 30], [4, 31], [4, 79], [82, 47], [82, 26], [82, 23], [82, 28], [82, 25], [82, 30], [82, 31], [82, 79], [82, 41], [82, 40], [82, 75], [82, 14], [82, 74], [82, 50], [82, 13], [82, 49], [82, 72], [82, 22], [82, 29], [4, 81], [4, 50], [4, 49], [4, 51], [4, 80], [4, 29], [19, 57], [19, 26], [19, 62], [19, 25], [19, 56], [19, 70], [19, 24], [19, 41], [19, 10], [19, 59], [19, 60], [19, 93], [19, 20], [19, 37], [19, 64], [19, 21], [19, 68], [19, 22], [19, 38], [19, 69], [47, 23], [47, 25], [47, 30], [47, 31], [47, 24], [47, 41], [47, 81], [47, 13], [47, 80], [47, 29], [57, 23], [57, 62], [57, 71], [57, 56], [57, 2], [57, 24], [57, 41], [57, 40], [57, 59], [57, 60], [57, 58], [57, 93], [57, 20], [57, 61], [57, 72], [57, 89], [57, 21], [57, 91], [57, 22], [57, 73], [57, 39], [5, 25], [5, 26], [5, 28], [5, 31], [5, 76], [5, 27], [5, 7], [5, 43], [26, 28], [26, 25], [26, 79], [26, 24], [26, 27], [26, 75], [26, 81], [26, 45], [26, 77], [26, 74], [26, 44], [26, 43], [5, 45], [5, 77], [23, 54], [23, 28], [23, 65], [23, 67], [23, 62], [23, 63], [5, 44], [23, 79], [23, 66], [23, 18], [23, 56], [23, 2], [23, 70], [23, 11], [23, 41], [23, 10], [23, 59], [23, 92], [23, 81], [23, 60], [23, 58], [23, 93], [23, 36], [23, 20], [23, 61], [23, 64], [23, 89], [23, 68], [23, 91], [23, 22], [23, 73], [23, 38], [23, 69], [54, 71], [54, 2], [54, 11], [54, 41], [54, 40], [54, 58], [54, 36], [54, 72], [54, 21], [54, 22], [54, 39], [5, 42], [28, 25], [28, 76], [28, 2], [28, 41], [28, 10], [28, 40], [28, 27], [28, 75], [28, 81], [28, 74], [28, 44], [28, 43], [28, 72], [28, 42], [28, 80], [28, 22], [28, 73], [65, 67], [65, 63], [65, 66], [65, 70], [65, 41], [65, 93], [65, 61], [65, 72], [65, 64], [65, 89], [65, 21], [65, 68], [65, 22], [65, 73], [65, 38], [65, 69], [65, 39], [67, 63], [67, 71], [67, 66], [67, 2], [67, 70], [67, 41], [67, 40], [67, 93], [67, 20], [67, 61], [67, 72], [67, 64], [67, 89], [67, 21], [67, 68], [67, 22], [67, 73], [67, 38], [67, 69], [67, 39], [62, 71], [62, 56], [62, 24], [62, 41], [62, 40], [62, 93], [62, 20], [62, 72], [62, 89], [62, 91], [62, 22], [62, 73], [62, 38], [62, 69], [62, 39], [25, 0], [25, 48], [25, 18], [25, 56], [25, 2], [25, 11], [25, 10], [25, 75], [25, 81], [25, 43], [25, 37], [86, 41], [30, 31], [30, 79], [30, 48], [30, 81], [30, 74], [30, 13], [30, 49], [30, 80], [30, 29], [63, 66], [63, 2], [63, 70], [63, 41], [63, 93], [63, 20], [63, 61], [63, 72], [63, 64], [63, 89], [63, 21], [63, 68], [63, 22], [63, 73], [63, 38], [63, 69], [63, 39], [31, 79], [31, 48], [31, 81], [31, 13], [31, 49], [31, 80], [31, 29], [71, 18], [71, 2], [71, 11], [71, 10], [71, 40], [71, 58], [71, 36], [71, 20], [71, 72], [71, 89], [71, 21], [71, 91], [71, 38], [71, 69], [71, 39], [0, 41], [79, 76], [79, 41], [79, 40], [79, 75], [79, 81], [79, 74], [79, 43], [79, 50], [79, 22], [66, 2], [66, 70], [66, 41], [66, 93], [66, 20], [66, 61], [66, 72], [66, 64], [66, 89], [66, 68], [66, 22], [66, 73], [66, 38], [66, 69], [66, 39], [0, 29], [48, 41], [48, 13], [48, 72], [48, 22], [48, 29], [76, 75], [76, 45], [76, 77], [76, 74], [76, 44], [76, 43], [76, 42], [52, 15], [52, 33], [18, 2], [18, 11], [18, 41], [18, 40], [18, 36], [18, 72], [18, 21], [18, 22], [18, 39], [56, 2], [56, 70], [56, 24], [56, 41], [56, 40], [56, 59], [56, 60], [56, 58], [56, 93], [56, 74], [56, 20], [56, 61], [56, 72], [56, 89], [56, 21], [56, 91], [56, 22], [56, 73], [56, 69], [56, 39], [2, 70], [2, 11], [2, 24], [2, 41], [2, 10], [2, 40], [2, 59], [2, 27], [2, 60], [2, 58], [2, 93], [2, 36], [2, 20], [2, 61], [2, 72], [2, 64], [2, 21], [2, 68], [2, 22], [2, 38], [2, 39], [70, 41], [70, 40], [70, 59], [70, 93], [70, 61], [70, 72], [70, 64], [70, 89], [70, 21], [70, 68], [70, 22], [70, 73], [70, 38], [70, 69], [70, 39], [11, 24], [11, 41], [11, 10], [11, 40], [11, 36], [11, 21], [11, 91], [11, 22], [11, 39], [24, 81], [24, 43], [24, 37], [24, 80], [24, 69], [41, 10], [41, 40], [41, 59], [41, 92], [41, 90], [41, 81], [41, 60], [41, 58], [41, 93], [41, 87], [41, 36], [41, 20], [41, 61], [41, 37], [41, 72], [41, 64], [41, 42], [41, 89], [41, 21], [41, 80], [41, 68], [41, 22], [41, 73], [41, 38], [41, 69], [10, 40], [10, 36], [10, 37], [10, 72], [10, 21], [10, 22], [10, 39], [40, 93], [40, 36], [40, 20], [40, 61], [40, 72], [40, 89], [40, 21], [40, 80], [40, 91], [40, 22], [40, 73], [40, 38], [40, 69], [40, 39], [59, 60], [59, 58], [59, 93], [59, 20], [59, 61], [59, 37], [59, 72], [59, 89], [59, 21], [59, 91], [59, 22], [59, 73], [59, 69], [59, 39], [92, 93], [27, 75], [27, 81], [27, 45], [27, 74], [27, 44], [27, 43], [27, 42], [27, 80], [75, 45], [75, 77], [75, 74], [75, 44], [75, 43], [81, 50], [81, 13], [81, 49], [81, 80], [81, 73], [81, 29], [45, 77], [45, 74], [45, 44], [45, 43], [45, 42], [45, 73], [60, 58], [60, 93], [60, 61], [60, 89], [60, 22], [58, 93], [58, 61], [58, 72], [58, 89], [58, 21], [58, 91], [58, 22], [58, 73], [58, 69], [14, 50], [77, 43], [77, 42], [93, 61], [93, 72], [93, 64], [93, 21], [93, 68], [93, 22], [93, 73], [93, 38], [93, 69], [36, 72], [36, 21], [36, 22], [36, 39], [74, 44], [74, 43], [74, 50], [74, 49], [74, 42], [44, 43], [44, 42], [50, 13], [50, 73], [20, 37], [20, 72], [20, 64], [20, 89], [20, 21], [20, 91], [20, 22], [20, 73], [20, 38], [20, 69], [20, 39], [33, 51], [13, 49], [13, 80], [13, 29], [61, 72], [61, 64], [61, 89], [61, 68], [61, 91], [61, 22], [61, 73], [61, 38], [49, 29], [37, 21], [37, 22], [37, 38], [15, 51], [72, 64], [72, 89], [72, 21], [72, 80], [72, 68], [72, 91], [72, 38], [72, 69], [72, 39], [64, 89], [64, 21], [64, 68], [64, 22], [64, 73], [64, 38], [64, 69], [64, 39], [89, 21], [89, 68], [89, 91], [89, 22], [89, 73], [89, 38], [89, 69], [89, 39], [21, 68], [21, 22], [21, 73], [21, 38], [21, 69], [21, 39], [80, 22], [80, 29], [68, 22], [68, 73], [68, 38], [68, 69], [91, 22], [91, 73], [91, 38], [91, 69], [22, 73], [22, 38], [22, 69], [73, 38], [73, 69], [38, 69], [38, 39], [69, 39], [46, 45], [78, 23], [78, 28], [78, 24], [78, 45], [47, 11], [57, 67], [57, 63], [57, 66], [57, 70], [57, 64], [57, 68], [57, 38], [26, 25], [26, 76], [26, 77], [23, 25], [23, 27], [23, 21], [54, 18], [28, 24], [28, 45], [28, 77], [65, 56], [65, 59], [65, 60], [65, 58], [67, 56], [67, 59], [67, 60], [67, 58], [25, 76], [25, 24], [25, 27], [25, 45], [25, 44], [25, 22], [63, 56], [63, 59], [63, 60], [63, 58], [66, 56], [66, 59], [66, 60], [66, 58], [48, 80], [76, 27], [56, 64], [56, 68], [56, 38], [70, 60], [70, 58], [24, 27], [24, 22], [59, 64], [59, 68], [59, 38], [27, 77], [45, 22], [60, 64], [60, 68], [60, 38], [58, 64], [58, 68], [58, 38], [77, 74], [77, 44], [77, 73], [93, 39], [43, 22], [72, 22], [72, 73], [21, 91]];
    $.$visavis_nonformer_pd_tri = {
        'x': [61, 70, 24, 94, 61, 69, 60, 13, 63, 28, 58, 29, 57, 57, 64, 3, 57, 56, 19, 39, 3, 21, 67, 69, 57, 77, 64, 20, 37, 57, 60, 70, 57, 56, 55, 56, 70, 55, 30, 65, 64, 58, 26, 41, 63, 4, 59, 3, 94, 37, 12, 59, 59, 46, 68, 58, 3, 60, 26, 55, 44, 20, 55, 71, 60, 31, 19, 58, 70, 56, 39, 59, 57, 68, 55, 3, 59, 26, 58, 66, 29, 14, 59, 19, 57, 3, 62, 55, 59, 65, 39, 11, 19, 3, 58, 66, 58, 25, 37, 57, 38, 65, 58, 39, 37, 60, 13, 20, 57, 62, 39, 11, 19, 55, 30, 57, 25, 64, 62, 92, 57, 75, 64, 66, 57, 58, 58, 58, 61, 58, 59, 20, 70, 62, 64, 3, 13, 11, 70, 60, 57, 77, 69, 69, 57, 29, 65, 56, 90, 25, 29, 65, 60, 3, 57, 57, 61, 58, 29, 60, 20, 26, 3, 25, 3, 57, 64, 58, 68, 62, 24, 60, 27, 60, 57, 21, 40, 59, 55, 58, 70, 3, 39, 57, 65, 65, 51, 56, 66, 65, 65, 64, 70, 69, 46, 63, 56, 57, 92, 56, 62, 64, 58, 71, 66, 57, 39, 61, 65, 70, 3, 12, 58, 94, 81, 21, 94, 25, 63, 65, 65, 20, 56, 20, 94, 20, 90, 14, 65, 11, 39, 39, 28, 39, 27, 3, 65, 59, 57, 20, 66, 60, 65, 64, 20, 81, 70, 26, 57, 41, 57, 3, 65, 63, 70, 70, 57, 66, 57, 59, 63, 66, 57, 58, 65, 59, 57, 3, 3, 65, 66, 13, 60, 59, 56, 59, 37, 65, 64, 39, 64, 56, 94, 68, 27, 67, 61, 62, 70, 29, 61, 75, 68, 57, 29, 66, 66, 75, 61, 90, 39, 26, 27, 37, 64, 65, 58, 56, 60, 20, 3, 65, 81, 59, 68, 68, 19, 70, 57, 55, 31, 75, 59, 75, 65, 65, 60, 65, 65, 57, 63, 3, 11, 29, 48, 62, 13, 13, 58, 57, 3, 59, 57, 64, 3, 13, 81, 75, 63, 69, 63, 4, 3, 11, 26, 81, 60, 39, 64, 3, 4, 25, 59, 67, 11, 75, 57, 24, 59, 47, 20, 12, 25, 29, 3, 28, 26, 3, 62, 66, 11, 65, 37, 64, 59, 59, 64, 40, 24, 70, 20, 27, 64, 21, 31, 3, 56, 3, 11, 64, 70, 67, 60, 20, 61, 57, 20, 59, 69, 37, 64, 70, 58, 60, 68, 66, 57, 70, 57, 27, 57, 39, 19, 59, 63, 31, 29, 58, 81, 64, 22, 31, 57, 69, 61, 4, 66, 70, 11, 3, 11, 56, 62, 57, 19, 39, 58, 62, 68, 27, 62, 38, 61, 70, 57, 65, 55, 20, 59, 61, 57, 40, 24, 29, 62, 58, 58, 57, 62, 58, 58, 20, 58, 58, 75, 29, 27, 57, 56, 64, 3, 57, 58, 39, 69, 57, 59, 20, 57, 59, 60, 94, 3, 3, 81, 13, 68, 19, 3, 11, 56, 65, 59, 65, 62, 65, 47, 60, 70, 66, 64, 60, 65, 3, 39, 63, 22, 75, 61, 20, 73, 65, 3, 81, 65, 68, 26, 57, 27, 3, 23, 30, 58, 57, 20, 67, 70, 63, 28, 39, 59, 67, 59, 59, 59, 65, 58, 3, 25, 56, 90, 3, 25, 67, 19, 57, 29, 58, 67, 58, 27, 58, 70, 81, 65, 37, 27, 27, 64, 64, 25, 29, 65, 3, 70, 3, 3, 62, 56, 57, 30, 20, 92, 59, 14, 3, 29, 56, 57, 30, 49, 66, 24, 70, 63, 25, 70, 41, 70, 70, 19, 58, 66, 23, 70, 57, 28, 57, 57, 63, 60, 72, 65, 65, 68, 75, 56, 71, 60, 37, 62, 92, 58, 46, 65, 63, 39, 3, 70, 48, 90, 56, 68, 19, 48, 13, 59, 60, 58, 57, 32, 20, 70, 11, 39, 56, 65, 57, 39, 58, 23, 3, 70, 70, 39, 61, 63, 57, 56, 27, 71, 39, 56, 19, 23, 65, 57, 77, 20, 65, 3, 68, 57, 57, 58, 27, 69, 11, 58, 55, 64, 75, 70, 12, 26, 19, 56, 37, 57, 39, 55, 65, 61, 57, 65, 58, 61, 72, 39, 4, 70, 60, 58, 55, 47, 62, 67, 70, 65, 70, 20, 65, 30, 61, 70, 72, 3, 3, 11, 59, 23, 68, 61, 65, 60, 38, 69, 64, 3, 47, 57, 90, 27, 58, 29, 70, 3, 29, 63, 37, 27, 65, 58, 65, 64, 30, 58, 39, 61, 3, 68, 3, 3, 70, 94, 57, 3, 29, 70, 57, 26, 12, 26, 60, 57, 24, 65, 3, 39, 71, 50, 3, 75, 70, 65, 55, 28, 20, 63, 40, 70, 19, 70, 39, 58, 58, 41, 23, 39, 26, 75, 94, 75, 20, 60, 11, 67, 58, 58, 61, 57, 66, 73, 60, 39, 38, 57, 24, 61, 57, 62, 39, 56, 73, 31, 57, 60, 3, 20, 59, 71, 66, 58, 11, 57, 65, 63, 20, 59, 61, 60, 57, 27, 59, 3, 71, 63, 3, 68, 70, 57, 64, 55, 57, 37, 57, 60, 90, 11, 58, 63, 11, 70, 64, 61, 55, 61, 64, 55, 65, 19, 57, 37, 3, 57, 58, 56, 56, 29, 60, 48, 60, 65, 59, 92, 60, 26, 11, 56, 62, 20, 20, 25, 60, 43, 55, 20, 3, 28, 26, 94, 70, 63, 75, 61, 29, 71, 69, 58, 20, 58, 75, 47, 12, 56, 20, 28, 81, 12, 56, 26, 59, 60, 67, 58, 58, 63, 65, 58, 21, 62, 61, 68, 57, 57, 56, 65, 47, 56, 70, 57, 3, 57, 81, 65, 57, 44, 62, 69, 58, 24, 70, 57, 59, 3, 29, 28, 70, 3, 55, 39, 26, 72, 57, 68, 77, 66, 56, 47, 19, 59, 60, 3, 56, 65, 57, 62, 23, 65, 67, 56, 57, 3, 65, 11, 59, 58, 68, 64, 65, 60, 3, 24, 71, 41, 65, 57, 26, 62, 90, 65, 65, 59, 68, 90, 39, 57, 31, 92, 58, 67, 61, 3, 24, 37, 58, 3, 70, 57, 61, 80, 58, 19, 20, 39, 60, 47, 28, 3, 55, 11, 64, 27, 5, 59, 57, 65, 75, 70, 61, 57, 4, 24, 58, 58, 3, 65, 65, 61, 21, 3, 57, 57, 58, 37, 57, 58, 40, 71, 62, 60, 60, 61, 11, 59, 57, 13, 57, 62, 64, 60, 65, 13, 23, 61, 58, 19, 59, 3, 57, 66, 71, 60, 59, 57, 81, 70, 76, 62, 94, 41, 59, 60, 67, 40, 61, 23, 59, 30, 3, 57, 24, 57, 57, 70, 70, 11, 27, 61, 4, 38, 70, 23, 75, 58, 3, 4, 39, 31, 56, 57, 3, 70, 14, 58, 64, 90, 47, 29, 58, 56, 77, 24, 57, 3, 20, 26, 58, 55, 41, 26, 65, 57, 62, 70, 13, 70, 55, 59, 26, 65, 71, 39, 3, 62, 28, 21, 30, 39, 58, 70, 65, 70, 65, 73, 80, 62, 27, 27, 57, 72, 26, 41, 64, 46, 61, 27, 64, 69, 60, 66, 65, 60, 62, 3, 90, 65, 64, 59, 72, 20, 22, 27, 56, 56, 70, 3, 58, 27, 70, 75, 28, 67, 24, 65, 58, 3, 60, 3, 60, 57, 57, 57, 47, 78, 29, 59, 26, 3, 39, 4, 3, 90, 67, 61, 90, 64, 70, 69, 55, 57, 3, 27, 56, 59, 58, 65, 38, 60, 3, 39, 24, 26, 61, 29, 60, 61, 58, 26, 92, 60, 66, 58, 57, 69, 57, 56, 69, 63, 70, 57, 72, 60, 11, 26, 3, 59, 65, 62, 27, 75, 44, 25, 59, 57, 66, 73, 4, 39, 48, 70, 11, 56, 20, 3, 27, 27, 70, 19, 65, 65, 21, 26, 26, 72, 65, 80, 19, 3, 68, 19, 58, 64, 3, 26, 29, 65, 59, 3, 66, 11, 70, 3, 55, 27, 37, 13, 23, 61, 3, 58, 58, 47, 58, 83, 67, 57, 65, 61, 65, 30, 58, 62, 90, 65, 59, 57, 67, 47, 3, 38, 27, 39, 58, 61, 62, 46, 80, 21, 70, 13, 67, 37, 69, 59, 64, 25, 24, 65, 23, 57, 57, 3, 39, 3, 93, 47, 27, 25, 63, 29, 65, 59, 65, 47, 81, 3, 60, 75, 70, 57, 25, 66, 59, 62, 63, 39, 58, 50, 60, 72, 81, 69, 26, 67, 70, 60, 55, 71, 30, 59, 57, 70, 70, 81, 65, 64, 57, 27, 70, 13, 81, 19, 39, 61, 58, 57, 58, 11, 65, 62, 55, 59, 66, 20, 71, 13, 59, 11, 77, 26, 67, 71, 94, 71, 20, 57, 58, 3, 25, 28, 3, 55, 3, 55, 72, 62, 59, 70, 65, 57, 25, 70, 57, 58, 57, 58, 20, 65, 66, 28, 28, 72, 20, 13, 60, 3, 61, 20, 27, 3, 68, 38, 59, 11, 11, 11, 46, 3, 3, 37, 27, 66, 57, 13, 11, 68, 38, 37, 39, 65, 37, 48, 20, 50, 70, 39, 70, 58, 56, 24, 57, 56, 64, 65, 56, 29, 71, 59, 68, 57, 25, 70, 3, 57, 57, 50, 57, 70, 58, 37, 81, 64, 39, 65, 26, 80, 56, 60, 58, 56, 57, 37, 56, 57, 71, 13, 3, 19, 80, 60, 55, 29, 70, 66, 80, 29, 39, 62, 66, 65, 73, 69, 3, 60, 11, 3, 65, 71, 90, 48, 90, 70, 60, 13, 65, 47, 70, 58, 27, 56, 60, 65, 65, 75, 39, 70, 21, 58, 59, 60, 66, 20, 58, 29, 14, 29, 31, 57, 65, 70, 19, 19, 71, 61, 59, 13, 62, 28, 29, 81, 56, 70, 26, 70, 55, 20, 3, 65, 20, 64, 64, 60, 65, 57, 61, 56, 57, 92, 20, 67, 39, 64, 70, 57, 37, 3, 61, 3, 38, 61, 68, 20, 3, 56, 65, 62, 58, 60, 26, 64, 55, 67, 39, 3, 3, 58, 3, 70, 19, 68, 29, 28, 28, 24, 39, 65, 66, 37, 3, 62, 77, 61, 56, 39, 60, 90, 19, 28, 29, 64, 27, 3, 69, 61, 68, 62, 70, 19, 66, 57, 70, 39, 70, 58, 27, 58, 47, 20, 81, 65, 4, 39, 60, 60, 4, 57, 49, 3, 28, 64, 64, 68, 29, 61, 72, 21, 24, 92, 65, 27, 30, 61, 56, 68, 28, 3, 12, 64, 27, 70, 70, 29, 60, 92, 62, 25, 61, 68, 60, 21, 66, 63, 39, 63, 60, 55, 57, 60, 30, 12, 75, 38, 26, 23, 62, 58, 11, 3, 70, 57, 3, 69, 73, 65, 28, 61, 94, 63, 90, 19, 62, 12, 65, 58, 57, 44, 57, 61, 70, 58, 27, 14, 68, 76, 72, 42, 62, 20, 67, 26, 57, 4, 68, 50, 60, 63, 57, 61, 66, 61, 81, 39, 56, 58, 23, 58, 70, 57, 3, 39, 62, 58, 47, 62, 11, 65, 59, 66, 68, 11, 61, 57, 66, 20, 60, 70, 3, 20, 55, 39, 62, 67, 66, 94, 58, 62, 57, 70, 59, 67, 71, 70, 37, 64, 67, 43, 58, 29, 57, 62, 57, 13, 55, 61, 76, 68, 64, 65, 58, 4, 29, 60, 20, 4, 29, 71, 59, 37, 70, 58, 72, 65, 27, 3, 70, 70, 70, 21, 57, 20, 58, 57, 94, 70, 68, 92, 66, 14, 65, 59, 58, 81, 67, 3, 39, 21, 29, 81, 60, 28, 62, 3, 70, 58, 59, 77, 68, 65, 66, 41, 57, 47, 72, 75, 57, 61, 39, 59, 11, 81, 64, 3, 59, 58, 25, 39, 56, 58, 64, 58, 25, 65, 60, 41, 3, 3, 13, 65, 65, 60, 38, 68, 12, 66, 64, 11, 62, 57, 58, 58, 68, 71, 26, 3, 61, 90, 81, 69, 43, 57, 3, 38, 58, 57, 3, 56, 57, 58, 55, 62, 3, 57, 57, 39, 90, 67, 58, 65, 57, 57, 55, 83, 25, 12, 68, 90, 24, 68, 65, 3, 58, 43, 59, 3, 57, 26, 27, 41, 27, 58, 75, 71, 63, 58, 77, 80, 39, 57, 81, 27, 61, 58, 65, 70, 61, 27, 65, 64, 66, 57, 57, 92, 57, 55, 65, 60, 3, 62, 57, 64, 58, 65, 58, 59, 57, 66, 3, 58, 66, 68, 57, 20, 63, 57, 3, 57, 71, 64, 3, 24, 57, 37, 65, 63, 27, 57, 37, 29, 37, 64, 68, 23, 66, 21, 65, 3, 68, 23, 57, 73, 73, 60, 23, 70, 57, 46, 21, 25, 70, 62, 58, 47, 60, 3, 57, 13, 57, 49, 23, 13, 56, 90, 55, 20, 13, 3, 70, 25, 26, 65, 60, 56, 57, 62, 39, 43, 55, 64, 66, 57, 70, 58, 77, 58, 65, 61, 59, 65, 80, 65, 59, 29, 26, 59, 30, 70, 48, 57, 31, 62, 27, 58, 65, 38, 24, 70, 63, 30, 20, 60, 58, 11, 81, 60, 3, 59, 59, 27, 65, 3, 61, 57, 59, 59, 70, 64, 67, 70, 3, 70, 71, 20, 65, 66, 38, 65, 59, 70, 48, 65, 57, 62, 3, 56, 64, 63, 57, 61, 58, 92, 55, 70, 57, 65, 63, 55, 61, 38, 29, 57, 57, 59, 68, 67, 70, 39, 24, 62, 3, 64, 21, 37, 90, 19, 67, 56, 37, 58, 59, 56, 3, 75, 63, 60, 55, 65, 55, 11, 57, 57, 65, 90, 3, 71, 65, 41, 48, 62, 4, 38, 46, 61, 57, 58, 57, 57, 19, 67, 60, 58, 60, 65, 68, 62, 61, 21, 55, 70, 59, 30, 70, 68, 61, 25, 56, 57, 70, 59, 68, 27, 27, 57, 62, 61, 70, 72, 59, 61, 61, 19, 23, 70, 3, 39, 90, 56, 58, 59, 56, 32, 58, 37, 70, 14, 3, 56, 68, 58, 39, 11, 70, 65, 62, 59, 56, 47, 41, 65, 61, 30, 65, 20, 69, 43, 63, 57, 70, 70, 58, 65, 29, 56, 57, 31, 65, 68, 59, 66, 71, 59, 57, 65, 71, 55, 26, 19, 65, 26, 66, 39, 65, 21, 64, 3, 25, 70, 62, 57, 31, 56, 60, 64, 63, 68, 4, 19, 81, 27, 23, 26, 57, 59, 73, 3, 30, 65, 20, 57, 70, 57, 3, 70, 3, 67, 59, 65, 70, 60, 31, 61, 56, 28, 39, 20, 13, 90, 26, 65, 3, 61, 26, 64, 66, 57, 70, 65, 65, 43, 58, 70, 11, 60, 67, 56, 26, 61, 64, 65, 57, 38, 57, 66, 81, 41, 94, 77, 70, 3, 59, 60, 58, 4, 66, 13, 57, 65, 63, 75, 60, 62, 55, 65, 12, 29, 3, 3, 39, 70, 3, 66, 20, 59, 57, 63, 65, 70, 22, 12, 73, 3, 81, 65, 64, 29, 3, 64, 29, 3, 70, 64, 59, 23, 57, 73, 65, 24, 65, 20, 64, 24, 24, 58, 38, 47, 39, 68, 62, 24, 57, 20, 90, 56, 58, 39, 55, 65, 19, 20, 65, 58, 70, 39, 64, 70, 58, 66, 39, 72, 29, 67, 11, 29, 14, 56, 61, 25, 20, 59, 60, 75, 64, 58, 57, 70, 13, 13, 65, 61, 58, 59, 66, 30, 37, 81, 20, 90, 64, 57, 60, 58, 65, 64, 70, 70, 37, 66, 4, 39, 56, 70, 65, 67, 61, 3, 58, 4, 30, 59, 65, 3, 66, 56, 67, 68, 20, 76, 59, 24, 57, 25, 70, 57, 58, 75, 81, 62, 27, 61, 58, 58, 57, 70, 29, 37, 70, 60, 81, 65, 62, 65, 3, 59, 12, 57, 90, 60, 63, 58, 64, 68, 20, 27, 70, 62, 39, 39, 23, 58, 55, 60, 3, 14, 70, 81, 65, 58, 70, 60, 59, 3, 70, 65, 57, 60, 61, 3, 64, 3, 94, 11, 39, 58, 72, 57, 67, 20, 60, 57, 70, 43, 3, 3, 4, 20, 19, 61, 57, 20, 60, 61, 70, 58, 66, 70, 29, 57, 69, 65, 57, 62, 3, 58, 21, 73, 60, 60, 57, 57, 20, 75, 65, 57, 57, 29, 3, 14, 64, 62, 11, 57, 90, 39, 57, 66, 57, 20, 59, 58, 71, 39, 3, 57, 60, 57, 3, 66, 30, 39, 3, 61, 59, 56, 26, 59, 81, 3, 60, 59, 59, 58, 65, 23, 26, 55, 68, 65, 19, 64, 57, 70, 67, 59, 12, 73, 3, 60, 69, 19, 55, 59, 56, 62, 70, 59, 57, 3, 70, 3, 73, 26, 61, 26, 66, 41, 68, 38, 66, 65, 60, 4, 63, 70, 58, 64, 81, 62, 57, 55, 29, 70, 58, 3, 64, 70, 75, 20, 70, 57, 77, 13, 57, 60, 13, 3, 67, 3, 31, 70, 3, 92, 70, 58, 26, 64, 65, 20, 58, 70, 73, 90, 20, 68, 62, 58, 59, 73, 3, 56, 3, 80, 64, 65, 58, 67, 39, 77, 57, 3, 69, 65, 59, 75, 27, 60, 57, 20, 56, 11, 55, 64, 57, 29, 3, 58, 20, 58, 30, 60, 23, 65, 72, 21, 57, 13, 4, 76, 47, 61, 3, 55, 58, 59, 3, 57, 60, 90, 68, 64, 71, 71, 58, 58, 3, 58, 3, 70, 3, 58, 55, 65, 58, 67, 39, 64, 64, 3, 27, 64, 27, 64, 3, 4, 64, 59, 70, 57, 81, 24, 65, 60, 63, 31, 3, 3, 56, 3, 59, 58, 66, 20, 28, 68, 56, 59, 58, 11, 29, 57, 57, 43, 22, 65, 72, 71, 73, 27, 11, 70, 25, 58, 59, 20, 60, 70, 13, 23, 58, 67, 65, 20, 60, 94, 23, 65, 23, 26, 71, 26, 20, 20, 37, 60, 27, 64, 63, 94, 61, 57, 31, 56, 27, 57, 55, 57, 58, 27, 12, 21, 62, 58, 3, 65, 55, 55, 58, 12, 19, 37, 56, 20, 59, 14, 39, 30, 3, 70, 57, 57, 72, 19, 71, 3, 48, 48, 64, 29, 70, 68, 65, 68, 43, 66, 29, 39, 57, 71, 24, 39, 3, 65, 65, 58, 64, 20, 73, 59, 3, 57, 69, 58, 56, 11, 68, 68, 48, 56, 75, 59, 71, 26, 3, 60, 57, 12, 58, 46, 64, 60, 59, 21, 27, 63, 39, 65, 57, 90, 3, 61, 81, 59, 20, 27, 3, 29, 65, 28, 3, 11, 57, 20, 38, 57, 57, 65, 42, 65, 13, 23, 60, 81, 65, 55, 60, 63, 57, 12, 3, 11, 57, 90, 58, 66, 60, 70, 31, 59, 63, 72, 94, 3, 29, 62, 64, 67, 29, 43, 39, 28, 66, 26, 73, 63, 27, 75, 57, 60, 65, 70, 19, 75, 55, 59, 70, 39, 70, 60, 62, 39, 58, 75, 58, 3, 39, 13, 3, 59, 63, 59, 61, 11, 13, 56, 39, 60, 27, 70, 80, 67, 59, 65, 77, 58, 69, 61, 70, 57, 62, 72, 73, 4, 61, 70, 67, 65, 58, 13, 20, 70, 55, 11, 65, 38, 43, 39, 22, 59, 27, 57, 75, 70, 60, 26, 59, 70, 58, 89, 30, 57, 56, 25, 66, 68, 57, 43, 59, 70, 25, 20, 46, 58, 57, 65, 56, 73, 60, 81, 3, 3, 13, 58, 28, 68, 59, 57, 28, 57, 57, 61, 58, 63, 61, 58, 3, 62, 65, 60, 37, 59, 39, 48, 3, 23, 61, 70, 65, 20, 65, 39, 37, 80, 57, 46, 19, 3, 59, 70, 57, 62, 58, 60, 47, 61, 70, 92, 20, 65, 58, 38, 27, 37, 22, 90, 70, 73, 57, 59, 37, 58, 58, 63, 57, 48, 63, 60, 11, 65, 90, 71, 65, 65, 66, 37, 3, 75, 61, 57, 57, 12, 60, 66, 65, 46, 55, 20, 57, 62, 80, 27, 58, 29, 57, 56, 57, 3, 90, 3, 30, 21, 62, 3, 3, 39, 22, 62, 3, 58, 69, 70, 20, 58, 60, 72, 27, 27, 20, 94, 23, 39, 66, 58, 28, 75, 58, 68, 24, 3, 63, 70, 31, 63, 3, 70, 62, 57, 58, 3, 39, 59, 59, 75, 60, 81, 70, 65, 25, 58, 19, 58, 28, 19, 65, 94, 57, 61, 57, 65, 29, 3, 65, 38, 61, 19, 64, 39, 58, 70, 68, 59, 63, 64, 3, 11, 62, 57, 31, 3, 27, 57, 70, 68, 81, 70, 27, 3, 37, 19, 66, 94, 3, 65, 57, 65, 65, 56, 64, 73, 57, 57, 32, 3, 29, 57, 65, 63, 58, 59, 57, 61, 62, 25, 58, 37, 57, 20, 62, 3, 39, 60, 61, 12, 57, 64, 63, 65, 55, 65, 48, 29, 64, 59, 57, 39, 28, 19, 60, 59, 57, 70, 66, 57, 58, 58, 39, 81, 60, 19, 3, 25, 67, 61, 58, 28, 24, 68, 58, 30, 62, 63, 26, 27, 62, 26, 69, 73, 67, 3, 70, 26, 60, 57, 12, 57, 39, 29, 37, 3, 26, 63, 60, 61, 62, 30, 81, 57, 69, 38, 39, 65, 57, 66, 55, 56, 59, 60, 69, 3, 64, 22, 21, 57, 58, 39, 62, 65, 3, 67, 62, 60, 11, 19, 25, 80, 68, 94, 20, 63, 76, 57, 23, 56, 60, 59, 39, 65, 58, 78, 68, 56, 59, 62, 31, 67, 13, 66, 11, 48, 65, 56, 20, 29, 27, 61, 30, 57, 38, 66, 63, 20, 63, 29, 4, 57, 60, 20, 70, 20, 3, 13, 3, 3, 59, 70, 3, 61, 66, 20, 55, 58, 65, 58],
        'y': [66, 64, 28, 23, 68, 71, 94, 30, 92, 44, 61, 43, 62, 70, 71, 72, 66, 70, 40, 40, 58, 92, 68, 23, 94, 46, 67, 39, 72, 70, 94, 39, 23, 57, 3, 38, 39, 59, 83, 61, 73, 63, 76, 23, 72, 13, 23, 68, 22, 11, 23, 60, 62, 44, 94, 40, 69, 64, 45, 23, 78, 71, 19, 73, 92, 14, 12, 90, 66, 60, 94, 64, 39, 41, 40, 39, 90, 29, 62, 39, 77, 51, 67, 3, 65, 60, 90, 40, 39, 70, 72, 24, 12, 68, 72, 67, 25, 26, 72, 65, 60, 62, 21, 67, 3, 90, 14, 57, 21, 64, 21, 38, 3, 37, 31, 61, 26, 69, 64, 22, 58, 80, 66, 67, 60, 73, 71, 60, 69, 69, 62, 57, 71, 71, 69, 59, 31, 22, 60, 64, 65, 46, 94, 90, 68, 28, 21, 38, 21, 27, 28, 58, 71, 61, 69, 94, 59, 67, 43, 66, 61, 29, 62, 47, 68, 65, 22, 64, 21, 68, 28, 92, 79, 94, 70, 24, 21, 69, 72, 67, 64, 58, 23, 21, 21, 59, 82, 70, 94, 64, 71, 68, 22, 23, 78, 94, 62, 62, 23, 61, 67, 90, 59, 22, 71, 21, 92, 60, 64, 68, 59, 25, 61, 22, 48, 23, 23, 26, 40, 39, 59, 60, 60, 65, 73, 70, 42, 50, 21, 24, 68, 67, 46, 22, 46, 64, 39, 39, 70, 70, 68, 62, 39, 68, 61, 30, 21, 27, 62, 23, 62, 59, 64, 90, 92, 68, 67, 39, 58, 71, 39, 68, 70, 61, 61, 66, 94, 58, 59, 61, 68, 49, 68, 60, 61, 66, 11, 61, 68, 90, 39, 61, 41, 90, 28, 90, 59, 71, 59, 47, 67, 77, 71, 63, 47, 23, 90, 83, 59, 21, 23, 47, 76, 3, 66, 68, 22, 22, 66, 69, 72, 21, 30, 69, 22, 21, 3, 21, 58, 12, 5, 77, 64, 28, 60, 73, 39, 66, 59, 40, 90, 65, 23, 75, 32, 64, 49, 48, 63, 65, 65, 23, 61, 68, 57, 31, 33, 46, 39, 73, 23, 30, 61, 12, 47, 30, 62, 73, 71, 65, 31, 29, 24, 24, 3, 44, 65, 82, 68, 46, 60, 24, 28, 5, 68, 76, 47, 68, 39, 69, 41, 40, 11, 39, 68, 62, 69, 73, 80, 68, 61, 29, 67, 22, 14, 71, 38, 61, 3, 21, 68, 71, 21, 58, 64, 39, 70, 90, 24, 3, 39, 59, 72, 39, 22, 90, 59, 67, 70, 45, 63, 24, 40, 62, 21, 50, 47, 64, 31, 68, 41, 50, 63, 71, 69, 13, 71, 69, 73, 64, 38, 57, 42, 69, 24, 73, 61, 69, 90, 76, 66, 20, 68, 23, 64, 73, 12, 60, 73, 62, 62, 22, 29, 28, 94, 59, 71, 23, 39, 68, 39, 61, 59, 71, 44, 76, 28, 73, 23, 90, 68, 70, 39, 71, 90, 63, 66, 70, 92, 92, 71, 23, 60, 58, 29, 30, 21, 12, 58, 41, 57, 90, 67, 70, 39, 66, 32, 68, 39, 67, 73, 62, 62, 71, 72, 21, 24, 47, 68, 65, 42, 68, 57, 47, 39, 40, 28, 68, 75, 24, 47, 50, 60, 24, 63, 68, 40, 23, 77, 69, 94, 90, 69, 68, 94, 58, 42, 65, 81, 57, 24, 57, 26, 69, 37, 64, 47, 39, 40, 69, 44, 22, 72, 14, 70, 3, 28, 77, 71, 66, 29, 42, 59, 12, 59, 62, 65, 41, 57, 66, 14, 39, 73, 71, 83, 58, 75, 20, 71, 48, 31, 68, 80, 66, 39, 27, 68, 23, 60, 90, 37, 64, 71, 26, 40, 58, 46, 59, 58, 90, 67, 22, 70, 59, 94, 80, 70, 40, 39, 11, 66, 41, 71, 45, 58, 24, 22, 58, 64, 5, 22, 57, 71, 37, 26, 81, 60, 67, 67, 94, 79, 39, 64, 23, 67, 38, 66, 64, 68, 62, 46, 65, 59, 64, 67, 24, 90, 68, 39, 80, 94, 69, 20, 3, 80, 64, 61, 44, 39, 70, 21, 72, 73, 66, 60, 78, 71, 12, 63, 3, 94, 46, 60, 92, 46, 37, 20, 12, 62, 24, 22, 90, 64, 68, 64, 61, 62, 21, 94, 30, 92, 39, 72, 19, 46, 69, 24, 92, 71, 90, 65, 66, 48, 94, 41, 92, 62, 40, 73, 68, 49, 90, 66, 64, 40, 20, 90, 21, 64, 76, 92, 73, 46, 67, 75, 21, 57, 47, 21, 11, 45, 67, 64, 58, 66, 49, 41, 67, 59, 59, 71, 64, 64, 71, 41, 65, 57, 28, 59, 21, 47, 25, 47, 24, 59, 29, 68, 71, 71, 22, 5, 59, 80, 66, 61, 19, 77, 21, 39, 21, 94, 3, 59, 94, 90, 39, 23, 29, 92, 29, 78, 22, 77, 70, 62, 38, 94, 67, 40, 90, 64, 71, 22, 66, 67, 39, 59, 29, 71, 61, 68, 94, 38, 23, 80, 94, 94, 21, 63, 39, 94, 22, 39, 40, 71, 60, 21, 58, 71, 67, 73, 71, 46, 62, 12, 24, 72, 64, 94, 60, 63, 67, 3, 67, 40, 59, 64, 92, 12, 21, 92, 4, 71, 66, 62, 23, 94, 39, 19, 70, 73, 70, 3, 64, 40, 92, 64, 39, 28, 22, 14, 69, 68, 67, 24, 92, 46, 3, 20, 68, 57, 57, 27, 62, 46, 73, 63, 57, 77, 28, 41, 39, 39, 28, 62, 75, 41, 71, 23, 58, 62, 43, 44, 24, 20, 70, 76, 48, 40, 21, 44, 72, 39, 69, 94, 39, 92, 62, 59, 22, 66, 66, 71, 64, 25, 22, 58, 44, 59, 66, 59, 73, 67, 23, 67, 39, 78, 39, 71, 68, 74, 92, 63, 60, 41, 78, 47, 72, 61, 41, 22, 47, 73, 62, 72, 76, 67, 60, 46, 37, 62, 66, 61, 70, 61, 61, 66, 24, 61, 94, 70, 62, 65, 68, 12, 42, 69, 73, 67, 67, 64, 59, 47, 94, 80, 64, 70, 77, 69, 21, 64, 61, 39, 24, 21, 69, 71, 80, 22, 59, 90, 64, 67, 26, 73, 59, 59, 73, 71, 23, 83, 41, 23, 63, 21, 39, 77, 44, 60, 37, 3, 23, 47, 51, 39, 40, 94, 28, 41, 68, 39, 14, 42, 71, 71, 39, 67, 62, 60, 92, 60, 60, 70, 68, 22, 24, 60, 73, 23, 66, 92, 66, 67, 22, 68, 22, 31, 61, 71, 68, 62, 61, 80, 80, 59, 90, 72, 66, 39, 68, 39, 94, 69, 71, 61, 48, 39, 46, 66, 93, 23, 66, 69, 21, 21, 69, 47, 66, 48, 62, 65, 28, 92, 58, 71, 69, 20, 80, 59, 14, 39, 64, 46, 77, 64, 67, 30, 92, 80, 59, 69, 65, 63, 47, 24, 42, 21, 77, 75, 61, 26, 76, 29, 58, 57, 70, 46, 63, 59, 29, 29, 68, 90, 68, 22, 30, 67, 19, 72, 27, 61, 90, 67, 58, 39, 46, 73, 49, 71, 63, 64, 69, 90, 23, 81, 42, 68, 75, 47, 69, 40, 28, 42, 90, 78, 66, 28, 66, 94, 66, 68, 68, 69, 68, 57, 41, 58, 67, 66, 40, 94, 41, 77, 38, 70, 90, 60, 68, 75, 68, 46, 46, 21, 26, 62, 64, 58, 39, 60, 39, 67, 58, 22, 76, 74, 83, 60, 27, 41, 21, 14, 72, 23, 42, 39, 40, 67, 94, 22, 12, 64, 60, 47, 23, 64, 92, 66, 20, 21, 39, 90, 29, 76, 62, 82, 67, 60, 60, 28, 23, 73, 94, 94, 58, 71, 67, 57, 22, 39, 39, 70, 90, 62, 72, 47, 94, 62, 68, 64, 29, 47, 45, 81, 68, 24, 94, 49, 49, 71, 83, 66, 72, 60, 25, 60, 76, 44, 94, 73, 70, 70, 22, 27, 29, 90, 39, 32, 41, 57, 90, 40, 39, 71, 65, 29, 76, 69, 69, 39, 67, 29, 63, 22, 72, 29, 22, 31, 24, 64, 57, 67, 72, 45, 94, 5, 68, 73, 66, 71, 69, 48, 41, 69, 92, 60, 62, 59, 21, 83, 65, 39, 75, 69, 23, 69, 66, 44, 83, 92, 59, 81, 94, 40, 22, 62, 69, 23, 48, 73, 47, 67, 66, 64, 68, 21, 24, 42, 80, 81, 39, 77, 64, 72, 58, 77, 30, 62, 62, 28, 40, 66, 44, 69, 60, 67, 41, 68, 92, 32, 22, 21, 31, 73, 44, 68, 90, 68, 37, 40, 31, 94, 63, 92, 64, 32, 58, 71, 66, 75, 21, 30, 28, 37, 90, 39, 62, 67, 39, 73, 58, 64, 3, 94, 40, 26, 73, 31, 90, 3, 44, 44, 23, 90, 73, 90, 69, 66, 21, 57, 23, 47, 65, 73, 67, 59, 40, 90, 68, 66, 64, 70, 81, 59, 39, 59, 60, 39, 71, 59, 68, 78, 45, 12, 69, 80, 67, 62, 67, 70, 29, 69, 21, 25, 64, 3, 23, 40, 74, 64, 71, 3, 80, 39, 60, 50, 40, 69, 20, 22, 41, 60, 11, 31, 65, 32, 64, 67, 39, 64, 62, 48, 39, 25, 94, 90, 25, 28, 22, 64, 22, 60, 27, 63, 61, 62, 63, 32, 68, 59, 71, 41, 47, 71, 68, 71, 77, 76, 70, 39, 62, 59, 59, 23, 20, 69, 90, 32, 39, 12, 77, 90, 73, 46, 66, 90, 32, 28, 22, 67, 39, 60, 22, 71, 69, 64, 24, 24, 61, 42, 73, 32, 22, 42, 71, 48, 60, 76, 24, 40, 80, 38, 39, 69, 68, 28, 92, 64, 22, 62, 64, 39, 39, 57, 71, 44, 50, 75, 32, 63, 58, 59, 22, 23, 94, 68, 62, 14, 64, 77, 75, 32, 61, 68, 83, 71, 59, 65, 67, 68, 57, 40, 67, 71, 70, 92, 90, 20, 58, 41, 58, 68, 68, 69, 69, 63, 72, 68, 68, 72, 23, 69, 90, 71, 39, 20, 61, 92, 63, 39, 27, 39, 12, 90, 90, 57, 73, 90, 22, 67, 37, 72, 43, 45, 47, 26, 21, 60, 68, 72, 65, 64, 46, 60, 61, 72, 64, 92, 12, 78, 46, 23, 47, 58, 90, 66, 21, 90, 25, 23, 69, 65, 60, 67, 94, 59, 75, 94, 42, 23, 29, 71, 50, 68, 66, 67, 30, 59, 31, 26, 44, 21, 24, 69, 42, 67, 90, 42, 48, 73, 90, 29, 50, 71, 63, 71, 77, 25, 92, 22, 28, 68, 67, 77, 68, 22, 71, 47, 90, 71, 69, 73, 68, 94, 90, 42, 64, 22, 60, 23, 14, 48, 47, 23, 47, 29, 92, 94, 26, 62, 67, 70, 94, 23, 29, 61, 47, 39, 40, 94, 40, 37, 71, 48, 59, 63, 60, 78, 71, 69, 90, 61, 28, 50, 90, 46, 12, 74, 64, 65, 71, 27, 62, 13, 69, 83, 73, 90, 60, 60, 90, 68, 30, 94, 61, 59, 24, 90, 66, 68, 12, 71, 39, 63, 32, 67, 3, 70, 64, 39, 94, 3, 60, 58, 39, 60, 62, 60, 41, 58, 3, 40, 66, 69, 39, 24, 21, 92, 62, 60, 66, 68, 90, 60, 73, 68, 21, 46, 69, 78, 67, 67, 64, 30, 59, 59, 78, 42, 66, 68, 60, 13, 43, 94, 57, 30, 45, 94, 60, 11, 59, 59, 12, 90, 47, 65, 69, 39, 73, 73, 71, 58, 67, 92, 73, 39, 40, 24, 69, 47, 39, 64, 68, 29, 21, 12, 71, 23, 83, 30, 67, 78, 68, 71, 39, 90, 71, 76, 24, 62, 22, 81, 71, 46, 21, 76, 90, 39, 72, 39, 72, 23, 39, 94, 62, 64, 26, 90, 63, 67, 40, 39, 28, 59, 71, 29, 67, 62, 32, 94, 73, 21, 21, 94, 41, 94, 69, 3, 73, 59, 22, 68, 71, 94, 77, 39, 59, 21, 49, 94, 28, 70, 59, 60, 21, 90, 58, 57, 39, 59, 19, 64, 73, 70, 66, 94, 40, 69, 71, 42, 94, 59, 22, 51, 29, 22, 90, 22, 29, 41, 69, 57, 92, 28, 67, 24, 62, 29, 29, 81, 78, 68, 77, 94, 41, 21, 46, 77, 21, 90, 23, 29, 39, 59, 59, 90, 66, 44, 70, 39, 67, 73, 69, 22, 61, 19, 60, 90, 71, 23, 60, 40, 60, 70, 90, 92, 68, 39, 59, 68, 39, 21, 41, 58, 92, 21, 58, 66, 73, 39, 58, 48, 69, 12, 64, 21, 47, 65, 12, 77, 72, 73, 94, 29, 94, 22, 64, 65, 73, 24, 39, 29, 41, 62, 26, 63, 41, 79, 24, 27, 60, 68, 59, 77, 22, 39, 58, 14, 63, 14, 24, 50, 25, 22, 3, 94, 14, 12, 92, 81, 77, 60, 68, 38, 63, 67, 67, 77, 72, 22, 69, 61, 94, 92, 76, 62, 39, 39, 90, 58, 83, 58, 39, 28, 27, 69, 50, 63, 26, 64, 83, 64, 78, 68, 58, 22, 26, 72, 72, 32, 21, 62, 69, 20, 48, 71, 21, 66, 90, 29, 94, 22, 39, 39, 62, 67, 64, 68, 23, 66, 12, 68, 22, 60, 58, 73, 20, 22, 39, 59, 31, 90, 58, 94, 62, 70, 67, 94, 68, 71, 59, 23, 3, 39, 90, 21, 73, 37, 64, 22, 44, 62, 92, 64, 23, 71, 68, 71, 47, 23, 39, 67, 92, 12, 73, 72, 71, 60, 11, 62, 24, 59, 60, 76, 24, 68, 37, 61, 19, 38, 58, 64, 71, 92, 40, 90, 60, 83, 14, 67, 49, 20, 78, 59, 23, 64, 58, 90, 3, 68, 64, 62, 66, 71, 94, 24, 62, 92, 24, 72, 90, 31, 60, 40, 62, 48, 57, 65, 60, 39, 73, 75, 28, 58, 39, 62, 39, 12, 67, 59, 62, 12, 49, 73, 65, 90, 24, 63, 62, 71, 20, 83, 90, 40, 59, 32, 68, 57, 40, 59, 73, 73, 69, 61, 94, 69, 21, 83, 29, 67, 62, 32, 59, 58, 22, 28, 94, 65, 71, 23, 39, 60, 77, 57, 64, 50, 67, 90, 39, 40, 23, 64, 22, 94, 41, 37, 27, 22, 70, 79, 67, 94, 59, 73, 67, 39, 23, 22, 39, 60, 14, 39, 39, 71, 73, 69, 31, 3, 23, 76, 80, 27, 65, 66, 41, 94, 49, 58, 70, 39, 67, 71, 67, 59, 59, 90, 62, 71, 63, 23, 80, 60, 64, 44, 68, 71, 30, 23, 28, 62, 94, 66, 27, 90, 22, 58, 90, 67, 39, 77, 60, 39, 23, 71, 94, 20, 76, 67, 90, 66, 21, 25, 42, 71, 30, 81, 93, 78, 66, 94, 69, 66, 69, 13, 90, 48, 68, 60, 72, 76, 69, 69, 73, 94, 25, 46, 68, 71, 71, 67, 62, 22, 22, 72, 70, 25, 22, 60, 24, 40, 22, 60, 47, 64, 94, 46, 40, 24, 44, 68, 21, 68, 71, 26, 64, 23, 24, 42, 58, 57, 39, 26, 83, 59, 21, 32, 73, 23, 92, 80, 59, 58, 23, 60, 63, 73, 3, 60, 37, 69, 66, 94, 72, 21, 66, 94, 59, 68, 68, 90, 42, 94, 12, 75, 47, 57, 71, 23, 57, 92, 68, 28, 39, 72, 60, 67, 48, 81, 62, 62, 22, 64, 24, 50, 12, 49, 23, 73, 68, 68, 90, 61, 39, 90, 59, 72, 73, 94, 31, 67, 70, 39, 60, 40, 64, 25, 63, 13, 32, 67, 39, 62, 94, 20, 90, 72, 94, 46, 94, 47, 58, 29, 21, 60, 67, 47, 42, 23, 77, 64, 68, 62, 65, 64, 28, 23, 40, 21, 48, 62, 64, 70, 68, 68, 92, 58, 21, 64, 72, 21, 94, 22, 61, 29, 63, 71, 92, 90, 42, 69, 22, 66, 67, 47, 21, 48, 90, 24, 59, 90, 60, 21, 67, 67, 94, 66, 60, 65, 73, 57, 22, 20, 41, 39, 21, 69, 71, 21, 21, 65, 64, 46, 23, 62, 32, 65, 41, 64, 62, 70, 64, 94, 90, 72, 69, 73, 46, 65, 94, 67, 21, 73, 25, 64, 41, 23, 62, 67, 68, 39, 60, 80, 66, 65, 40, 43, 69, 32, 39, 73, 12, 58, 41, 41, 73, 69, 59, 57, 66, 60, 40, 94, 58, 63, 62, 65, 58, 39, 31, 40, 61, 60, 22, 57, 27, 60, 49, 61, 71, 60, 90, 39, 58, 24, 45, 19, 69, 39, 24, 22, 90, 73, 90, 67, 23, 41, 12, 71, 90, 72, 12, 73, 64, 68, 63, 22, 61, 60, 66, 64, 41, 29, 59, 29, 90, 80, 23, 39, 90, 70, 39, 30, 39, 39, 64, 90, 14, 66, 67, 3, 83, 39, 92, 23, 68, 66, 28, 60, 94, 65, 45, 81, 22, 64, 48, 67, 23, 64, 75, 71, 59, 73, 69, 67, 77, 94, 64, 57, 60, 63, 23, 41, 69, 21, 24, 61, 62, 81, 65, 61, 64, 5, 69, 59, 64, 69, 92, 78, 65, 22, 71, 59, 73, 83, 29, 67, 61, 63, 21, 41, 3, 66, 58, 75, 12, 94, 57, 39, 48, 23, 26, 66, 90, 23, 39, 49, 31, 44, 32, 39, 57, 40, 21, 60, 69, 67, 69, 73, 69, 39, 73, 90, 68, 22, 58, 90, 72, 67, 61, 64, 19, 22, 69, 71, 68, 66, 94, 24, 83, 94, 44, 71, 57, 13, 39, 66, 24, 64, 29, 47, 69, 39, 90, 32, 61, 60, 59, 23, 39, 23, 68, 63, 46, 71, 39, 60, 60, 12, 47, 58, 68, 28, 41, 58, 92, 23, 23, 77, 22, 72, 29, 60, 64, 61, 64, 63, 80, 24, 60, 68, 60, 65, 67, 73, 29, 24, 29, 28, 90, 28, 39, 58, 22, 62, 75, 71, 94, 40, 62, 58, 50, 38, 75, 71, 41, 39, 62, 28, 24, 41, 92, 73, 39, 66, 37, 37, 64, 22, 73, 11, 64, 65, 68, 32, 68, 14, 61, 71, 66, 61, 40, 72, 22, 94, 31, 31, 39, 74, 60, 69, 64, 71, 78, 73, 46, 23, 70, 41, 29, 21, 57, 62, 39, 68, 66, 58, 81, 60, 59, 59, 24, 67, 70, 22, 90, 22, 32, 63, 47, 22, 73, 27, 25, 67, 61, 41, 61, 44, 21, 94, 64, 92, 29, 23, 69, 71, 60, 22, 60, 64, 29, 92, 65, 46, 61, 76, 94, 47, 64, 72, 62, 57, 20, 25, 90, 58, 82, 39, 31, 26, 24, 14, 58, 59, 92, 73, 66, 22, 26, 3, 65, 40, 64, 71, 21, 41, 14, 71, 39, 92, 22, 60, 47, 41, 66, 73, 47, 28, 71, 76, 71, 29, 81, 39, 46, 80, 70, 68, 70, 90, 3, 43, 19, 22, 63, 90, 22, 64, 66, 42, 68, 43, 60, 67, 69, 81, 57, 67, 90, 60, 64, 73, 30, 62, 22, 90, 77, 64, 32, 69, 69, 66, 44, 61, 94, 60, 64, 22, 94, 90, 22, 50, 67, 63, 71, 66, 39, 30, 57, 63, 72, 20, 94, 21, 77, 72, 42, 64, 29, 39, 50, 22, 42, 28, 60, 71, 94, 24, 5, 70, 60, 27, 24, 69, 39, 77, 68, 67, 26, 39, 44, 72, 61, 23, 63, 83, 66, 5, 72, 57, 50, 61, 79, 73, 68, 60, 47, 58, 70, 60, 90, 92, 67, 71, 29, 39, 60, 68, 41, 39, 68, 42, 68, 29, 60, 68, 21, 22, 69, 71, 3, 51, 66, 45, 73, 57, 66, 59, 60, 41, 63, 21, 77, 39, 66, 73, 65, 70, 61, 60, 28, 12, 23, 92, 94, 29, 70, 67, 11, 73, 73, 39, 67, 31, 94, 64, 3, 69, 21, 24, 22, 62, 73, 3, 73, 43, 64, 64, 66, 22, 90, 39, 40, 78, 37, 60, 61, 67, 83, 47, 61, 75, 90, 59, 70, 39, 92, 69, 14, 41, 90, 57, 39, 72, 23, 71, 29, 39, 90, 69, 70, 63, 68, 73, 47, 77, 25, 73, 83, 72, 42, 62, 77, 76, 60, 72, 26, 60, 21, 69, 32, 21, 59, 59, 94, 60, 67, 61, 21, 62, 92, 43, 40, 49, 23, 59, 26, 40, 22, 62, 47, 12, 60, 24, 64, 60, 66, 90, 43, 65, 62, 60, 23, 37, 21, 68, 63, 60, 72, 39, 40, 21, 58, 72, 64, 59, 75, 57, 28, 65, 71, 94, 31, 21, 47, 40, 73, 3, 23, 42, 57, 40, 59, 71, 67, 20, 90, 41, 39, 69, 5, 59, 78, 94, 59, 73, 69, 69, 64, 59, 69, 28, 39, 24, 41, 39, 71, 23, 68, 66, 59, 92, 70, 23, 40, 67, 37, 59, 83, 77, 67, 23, 60, 69, 47, 72, 67, 60, 64, 68, 23, 60, 59, 60, 90, 28, 64, 3, 58, 28, 94, 66, 62, 76, 42, 73, 60, 31, 39, 41, 46, 75, 39, 29, 94, 41, 73, 71, 68, 28, 73, 59, 23, 59, 40, 28, 3, 67, 47, 39, 90, 59, 39, 31, 31, 65, 73, 60, 69, 70, 67, 67, 72, 62, 39, 68, 42, 73, 69, 23, 73, 62, 68, 67, 90, 62, 65, 71, 94, 69, 3, 22, 81, 5, 71, 40, 57, 72, 44, 21, 47, 59, 90, 73, 69, 39, 60, 45, 41, 57, 94, 39, 75, 68, 81, 71, 38, 14, 59, 64, 65, 47, 29, 66, 48, 23, 20, 67, 90, 61, 90, 76, 49, 90, 94, 58, 39, 57, 69, 81, 58, 21, 60, 60, 58, 66, 71, 25, 12, 63, 23, 73],
        'z': [39, 23, 82, 42, 23, 74, 23, 49, 73, 79, 60, 46, 67, 73, 40, 22, 67, 21, 41, 41, 69, 24, 42, 42, 40, 45, 40, 69, 40, 21, 40, 71, 42, 39, 73, 26, 74, 22, 5, 39, 23, 40, 45, 42, 40, 49, 74, 71, 24, 23, 42, 67, 24, 6, 42, 22, 73, 21, 79, 24, 79, 94, 73, 22, 74, 32, 23, 73, 40, 22, 23, 71, 40, 23, 73, 42, 42, 46, 39, 67, 45, 82, 94, 24, 66, 42, 24, 41, 94, 69, 41, 42, 41, 69, 90, 71, 23, 82, 12, 23, 21, 24, 92, 23, 23, 21, 32, 69, 41, 42, 22, 26, 41, 72, 83, 42, 27, 24, 67, 74, 41, 51, 94, 23, 92, 42, 22, 73, 24, 94, 90, 71, 41, 23, 42, 94, 80, 23, 64, 42, 61, 6, 42, 23, 40, 77, 74, 42, 23, 28, 44, 67, 42, 68, 71, 42, 71, 94, 78, 69, 42, 79, 64, 82, 73, 22, 24, 90, 24, 73, 79, 22, 6, 74, 90, 42, 41, 22, 22, 90, 69, 73, 74, 22, 22, 73, 74, 64, 24, 69, 74, 23, 74, 74, 45, 41, 39, 39, 24, 62, 42, 73, 24, 42, 90, 42, 24, 62, 42, 90, 71, 48, 64, 41, 42, 42, 24, 28, 41, 74, 39, 21, 39, 21, 22, 63, 74, 83, 42, 29, 74, 42, 45, 41, 6, 22, 68, 24, 23, 42, 22, 64, 22, 69, 69, 32, 73, 79, 41, 29, 23, 42, 67, 73, 41, 72, 40, 68, 69, 42, 42, 24, 22, 42, 94, 39, 22, 62, 69, 67, 71, 31, 73, 39, 23, 23, 22, 64, 42, 42, 42, 42, 23, 42, 82, 40, 64, 42, 23, 82, 23, 46, 41, 92, 42, 24, 22, 51, 39, 73, 24, 77, 46, 40, 23, 94, 24, 23, 42, 22, 12, 23, 82, 24, 24, 23, 73, 92, 94, 40, 82, 44, 68, 78, 69, 23, 21, 39, 24, 73, 92, 73, 26, 78, 83, 73, 32, 31, 39, 69, 40, 24, 67, 90, 23, 50, 82, 44, 74, 23, 74, 32, 64, 40, 45, 48, 67, 42, 73, 64, 14, 44, 74, 74, 12, 78, 58, 74, 71, 44, 71, 48, 47, 82, 23, 45, 46, 94, 92, 24, 42, 73, 73, 68, 69, 67, 23, 41, 83, 21, 94, 28, 71, 24, 83, 42, 25, 62, 40, 23, 42, 40, 24, 22, 67, 24, 39, 92, 42, 73, 69, 92, 73, 67, 42, 42, 74, 71, 41, 6, 73, 74, 22, 92, 24, 5, 45, 40, 5, 40, 42, 82, 25, 42, 94, 50, 22, 24, 41, 39, 42, 22, 74, 90, 26, 41, 39, 71, 41, 45, 71, 39, 90, 74, 74, 22, 24, 39, 42, 90, 90, 41, 74, 82, 24, 68, 94, 26, 67, 94, 72, 60, 67, 74, 45, 78, 77, 22, 26, 74, 41, 68, 73, 22, 42, 40, 42, 25, 73, 74, 22, 74, 64, 72, 42, 83, 22, 22, 94, 23, 61, 73, 71, 22, 74, 40, 79, 24, 40, 24, 74, 42, 73, 24, 40, 92, 74, 83, 42, 69, 74, 24, 65, 42, 42, 21, 47, 69, 77, 28, 46, 82, 74, 74, 21, 24, 41, 42, 6, 24, 24, 73, 71, 22, 73, 61, 74, 94, 47, 21, 74, 24, 29, 94, 23, 69, 44, 21, 21, 71, 6, 23, 21, 82, 60, 24, 6, 44, 94, 40, 28, 79, 69, 23, 39, 42, 39, 42, 70, 74, 50, 94, 22, 23, 51, 23, 83, 21, 41, 5, 14, 90, 82, 39, 41, 79, 23, 74, 23, 22, 12, 21, 74, 29, 21, 39, 44, 64, 59, 42, 21, 41, 90, 22, 41, 44, 25, 41, 40, 3, 68, 74, 40, 6, 62, 42, 42, 71, 94, 82, 42, 60, 23, 24, 83, 48, 64, 71, 69, 41, 6, 71, 39, 42, 90, 39, 71, 66, 42, 94, 44, 68, 73, 68, 24, 42, 21, 73, 42, 77, 22, 71, 60, 42, 83, 73, 71, 6, 22, 24, 42, 22, 74, 22, 21, 6, 73, 23, 24, 12, 42, 45, 69, 23, 44, 72, 23, 23, 24, 42, 23, 22, 68, 90, 21, 71, 94, 22, 24, 49, 73, 73, 40, 42, 6, 42, 42, 24, 90, 42, 58, 42, 14, 23, 42, 73, 68, 22, 29, 90, 42, 74, 90, 24, 21, 22, 24, 24, 71, 45, 23, 23, 78, 21, 45, 22, 41, 79, 41, 72, 79, 23, 68, 22, 68, 32, 42, 21, 68, 72, 24, 24, 42, 90, 74, 71, 69, 47, 90, 74, 6, 26, 44, 42, 22, 42, 21, 41, 23, 23, 82, 68, 77, 69, 23, 12, 78, 42, 90, 22, 74, 40, 64, 41, 74, 68, 83, 83, 41, 45, 45, 42, 78, 94, 23, 20, 73, 24, 41, 23, 71, 40, 74, 67, 73, 42, 90, 83, 42, 23, 94, 42, 22, 29, 5, 24, 73, 73, 25, 68, 74, 24, 69, 41, 90, 68, 42, 21, 74, 94, 22, 23, 79, 69, 25, 74, 90, 94, 73, 39, 42, 94, 41, 90, 41, 42, 73, 41, 24, 41, 23, 13, 24, 90, 42, 42, 24, 90, 23, 23, 42, 25, 72, 68, 22, 22, 39, 22, 6, 23, 82, 94, 40, 68, 74, 24, 6, 26, 70, 69, 63, 21, 82, 69, 78, 22, 42, 68, 44, 45, 42, 41, 72, 46, 66, 28, 23, 24, 74, 71, 64, 28, 79, 26, 57, 69, 78, 32, 22, 23, 45, 73, 68, 24, 23, 67, 24, 66, 73, 74, 39, 42, 22, 90, 23, 42, 59, 45, 39, 23, 62, 29, 68, 49, 69, 74, 45, 71, 23, 41, 79, 22, 23, 92, 29, 74, 76, 40, 59, 23, 74, 76, 22, 68, 40, 45, 68, 23, 79, 41, 71, 90, 69, 60, 68, 94, 90, 26, 59, 42, 63, 42, 24, 22, 41, 74, 73, 41, 90, 42, 67, 62, 79, 24, 42, 68, 94, 44, 94, 74, 71, 62, 22, 74, 22, 73, 73, 32, 23, 90, 74, 39, 68, 28, 42, 69, 67, 22, 40, 24, 51, 23, 24, 39, 23, 23, 6, 45, 94, 3, 23, 24, 77, 82, 69, 41, 23, 77, 74, 94, 69, 50, 74, 73, 90, 22, 71, 90, 67, 23, 67, 74, 59, 73, 41, 26, 23, 22, 74, 67, 23, 73, 71, 42, 23, 24, 82, 66, 94, 73, 39, 60, 83, 44, 94, 41, 73, 73, 24, 22, 23, 73, 23, 73, 64, 5, 73, 44, 23, 42, 80, 68, 90, 24, 73, 71, 42, 71, 82, 94, 59, 47, 74, 60, 22, 71, 22, 82, 23, 32, 22, 21, 74, 76, 71, 94, 31, 74, 83, 64, 74, 58, 72, 82, 74, 74, 42, 76, 43, 90, 28, 46, 82, 61, 39, 22, 45, 74, 24, 74, 83, 42, 41, 71, 41, 14, 40, 3, 22, 83, 24, 22, 74, 59, 23, 6, 22, 14, 90, 42, 24, 24, 73, 74, 29, 82, 90, 45, 45, 24, 21, 44, 74, 21, 6, 68, 47, 69, 23, 71, 40, 23, 73, 42, 40, 74, 21, 21, 24, 41, 42, 74, 6, 60, 42, 41, 73, 23, 47, 71, 78, 79, 73, 79, 68, 94, 61, 22, 39, 69, 94, 40, 74, 44, 79, 76, 22, 76, 23, 24, 83, 73, 24, 74, 24, 22, 23, 23, 74, 22, 42, 21, 46, 42, 74, 23, 67, 21, 92, 73, 24, 47, 46, 24, 74, 90, 23, 71, 82, 74, 23, 40, 41, 73, 90, 24, 26, 24, 94, 72, 42, 41, 94, 12, 79, 41, 94, 71, 68, 79, 76, 79, 28, 73, 42, 73, 42, 32, 24, 42, 42, 22, 64, 27, 40, 78, 78, 73, 41, 73, 59, 42, 77, 47, 22, 21, 82, 23, 73, 40, 73, 92, 42, 69, 28, 46, 90, 23, 41, 90, 42, 24, 24, 73, 78, 42, 83, 74, 71, 94, 68, 41, 79, 42, 51, 40, 23, 69, 23, 42, 83, 74, 23, 74, 23, 39, 71, 23, 76, 60, 21, 28, 23, 42, 90, 42, 45, 76, 41, 94, 49, 23, 22, 42, 64, 73, 47, 83, 74, 83, 71, 68, 69, 23, 22, 42, 82, 83, 23, 40, 76, 22, 90, 24, 45, 49, 24, 71, 45, 22, 23, 79, 90, 23, 90, 42, 73, 74, 5, 42, 92, 32, 42, 79, 21, 74, 42, 73, 22, 32, 42, 94, 74, 90, 82, 69, 74, 42, 78, 24, 32, 82, 22, 92, 68, 74, 23, 74, 42, 68, 23, 24, 22, 73, 27, 74, 14, 73, 72, 45, 6, 42, 42, 23, 24, 23, 24, 24, 62, 29, 6, 62, 42, 42, 72, 22, 92, 42, 73, 66, 92, 29, 67, 67, 22, 90, 41, 23, 23, 94, 45, 6, 92, 94, 32, 42, 73, 69, 21, 82, 71, 42, 23, 24, 24, 29, 22, 79, 73, 40, 12, 44, 73, 69, 82, 73, 22, 60, 23, 23, 21, 40, 14, 70, 82, 40, 71, 24, 67, 64, 26, 42, 28, 24, 74, 23, 78, 24, 94, 41, 23, 44, 94, 67, 71, 41, 83, 23, 24, 23, 42, 32, 90, 71, 23, 76, 44, 39, 42, 69, 23, 66, 42, 61, 94, 41, 83, 71, 40, 44, 42, 41, 74, 24, 24, 83, 46, 23, 23, 74, 67, 42, 22, 23, 69, 26, 42, 42, 74, 22, 5, 41, 74, 74, 82, 90, 46, 74, 21, 76, 23, 24, 73, 90, 44, 22, 71, 41, 90, 22, 71, 24, 94, 41, 45, 82, 47, 83, 90, 60, 71, 41, 26, 42, 24, 23, 82, 90, 76, 77, 5, 64, 94, 76, 74, 23, 60, 71, 73, 42, 22, 69, 94, 40, 24, 24, 63, 23, 23, 61, 71, 90, 94, 73, 74, 22, 22, 71, 21, 26, 42, 24, 22, 69, 22, 66, 24, 73, 90, 44, 67, 41, 23, 22, 71, 22, 21, 41, 69, 3, 90, 42, 79, 46, 83, 73, 71, 69, 73, 71, 39, 44, 94, 39, 22, 40, 22, 26, 6, 44, 42, 83, 24, 73, 23, 73, 41, 23, 42, 71, 74, 90, 40, 41, 62, 46, 24, 79, 42, 47, 24, 32, 69, 94, 68, 14, 24, 32, 28, 6, 74, 42, 73, 74, 42, 73, 74, 42, 41, 24, 47, 5, 24, 42, 94, 45, 29, 22, 74, 46, 40, 42, 6, 90, 41, 73, 79, 42, 40, 71, 74, 73, 23, 41, 74, 66, 41, 68, 24, 82, 26, 46, 42, 83, 44, 73, 22, 29, 67, 23, 40, 23, 24, 74, 71, 45, 94, 73, 40, 41, 40, 24, 42, 67, 92, 94, 6, 94, 23, 92, 67, 79, 32, 22, 45, 40, 79, 71, 71, 74, 45, 66, 83, 94, 5, 42, 24, 62, 24, 40, 69, 31, 74, 60, 39, 42, 24, 68, 21, 24, 42, 41, 72, 6, 24, 29, 21, 67, 42, 24, 41, 68, 62, 22, 42, 68, 68, 42, 42, 59, 73, 24, 90, 69, 42, 23, 23, 64, 92, 67, 23, 40, 21, 41, 71, 42, 45, 90, 45, 69, 68, 24, 48, 73, 60, 45, 74, 67, 69, 62, 31, 28, 42, 65, 83, 79, 41, 90, 42, 60, 23, 41, 42, 76, 22, 22, 90, 23, 23, 22, 94, 73, 22, 42, 69, 22, 47, 23, 83, 23, 69, 90, 5, 74, 41, 74, 24, 5, 5, 23, 79, 24, 94, 42, 40, 24, 44, 42, 23, 74, 42, 42, 45, 73, 78, 74, 90, 73, 73, 40, 29, 94, 24, 66, 22, 47, 74, 23, 40, 21, 40, 82, 68, 24, 83, 23, 69, 82, 22, 42, 73, 23, 22, 42, 23, 22, 4, 23, 39, 41, 71, 74, 23, 6, 23, 67, 24, 32, 73, 45, 39, 22, 22, 74, 23, 40, 23, 71, 72, 72, 94, 23, 71, 40, 73, 73, 71, 24, 74, 73, 69, 42, 15, 79, 24, 73, 24, 28, 74, 71, 59, 73, 77, 74, 26, 74, 77, 6, 23, 45, 40, 45, 40, 23, 73, 78, 76, 42, 40, 42, 76, 42, 94, 42, 23, 67, 79, 39, 21, 40, 41, 73, 24, 39, 41, 40, 73, 23, 42, 42, 73, 69, 64, 23, 22, 24, 94, 39, 42, 90, 41, 42, 69, 41, 92, 68, 69, 42, 40, 25, 82, 22, 24, 94, 23, 79, 73, 22, 78, 41, 22, 74, 46, 74, 23, 40, 23, 42, 80, 22, 42, 83, 73, 47, 41, 23, 6, 74, 29, 42, 23, 92, 46, 24, 40, 92, 50, 24, 32, 29, 32, 26, 23, 42, 22, 83, 26, 23, 48, 45, 94, 40, 20, 39, 71, 69, 46, 41, 42, 42, 90, 40, 41, 78, 67, 73, 23, 24, 74, 5, 23, 67, 45, 82, 94, 32, 39, 82, 21, 5, 69, 79, 72, 39, 42, 29, 92, 73, 5, 23, 24, 22, 42, 14, 23, 23, 90, 74, 46, 74, 42, 71, 90, 68, 42, 73, 94, 74, 90, 22, 69, 41, 69, 90, 42, 42, 42, 23, 22, 82, 40, 71, 42, 23, 59, 73, 24, 94, 94, 74, 47, 23, 67, 24, 24, 74, 40, 42, 23, 79, 94, 41, 90, 42, 24, 73, 40, 83, 74, 68, 24, 22, 41, 74, 40, 73, 62, 41, 41, 42, 42, 69, 44, 74, 22, 42, 69, 22, 23, 63, 94, 94, 23, 73, 74, 62, 42, 83, 69, 14, 26, 79, 42, 24, 69, 25, 92, 72, 69, 71, 24, 24, 40, 40, 42, 69, 73, 42, 73, 23, 82, 73, 41, 71, 26, 64, 64, 67, 74, 22, 76, 76, 22, 68, 23, 94, 22, 90, 66, 64, 42, 26, 41, 21, 23, 42, 39, 23, 90, 26, 5, 22, 73, 72, 79, 21, 62, 73, 64, 22, 22, 23, 90, 74, 90, 42, 42, 42, 40, 67, 83, 74, 25, 23, 6, 74, 62, 73, 42, 90, 22, 46, 42, 68, 32, 73, 23, 72, 22, 24, 23, 42, 40, 42, 12, 28, 42, 42, 6, 94, 40, 90, 42, 42, 72, 44, 42, 94, 71, 50, 21, 92, 24, 42, 90, 83, 26, 47, 44, 42, 6, 90, 94, 74, 22, 31, 40, 71, 68, 68, 24, 24, 69, 24, 21, 74, 42, 25, 42, 82, 39, 42, 78, 21, 42, 50, 42, 46, 42, 73, 69, 29, 23, 23, 64, 21, 21, 40, 45, 22, 92, 24, 90, 40, 39, 44, 90, 24, 22, 23, 26, 74, 73, 14, 29, 24, 6, 22, 42, 42, 68, 23, 14, 23, 14, 41, 73, 41, 46, 24, 90, 23, 42, 23, 78, 72, 73, 94, 94, 39, 42, 23, 92, 64, 23, 24, 24, 42, 41, 41, 62, 82, 23, 74, 45, 21, 74, 78, 24, 42, 24, 94, 83, 73, 83, 42, 79, 71, 26, 24, 82, 42, 42, 22, 83, 23, 24, 41, 42, 94, 23, 74, 21, 21, 74, 72, 64, 42, 71, 90, 73, 41, 74, 24, 42, 60, 42, 40, 21, 82, 24, 42, 44, 32, 63, 90, 26, 61, 23, 69, 76, 22, 21, 22, 21, 83, 14, 71, 68, 74, 39, 74, 83, 42, 42, 26, 41, 22, 74, 92, 23, 94, 42, 42, 22, 22, 22, 50, 94, 23, 21, 39, 73, 69, 23, 25, 30, 82, 73, 67, 71, 42, 25, 24, 41, 23, 78, 74, 82, 21, 82, 41, 73, 74, 45, 82, 24, 45, 94, 22, 73, 24, 22, 76, 24, 73, 23, 82, 64, 66, 66, 42, 24, 24, 67, 41, 39, 21, 22, 23, 74, 71, 44, 40, 74, 73, 21, 74, 42, 24, 22, 21, 79, 74, 31, 21, 42, 68, 40, 62, 24, 90, 24, 74, 39, 69, 59, 42, 22, 74, 23, 74, 42, 41, 23, 23, 22, 74, 21, 66, 6, 24, 41, 83, 23, 42, 24, 92, 23, 90, 42, 24, 22, 22, 74, 79, 67, 24, 90, 73, 41, 26, 74, 74, 74, 66, 94, 42, 73, 23, 76, 23, 60, 21, 45, 24, 82, 73, 42, 26, 74, 23, 42, 42, 94, 23, 22, 74, 24, 73, 22, 42, 21, 92, 40, 41, 71, 5, 21, 39, 64, 74, 59, 46, 73, 31, 23, 73, 69, 22, 24, 73, 47, 6, 40, 24, 71, 42, 23, 73, 42, 42, 24, 26, 23, 42, 40, 22, 12, 42, 74, 22, 41, 42, 24, 62, 22, 94, 40, 81, 44, 62, 82, 73, 83, 74, 23, 74, 67, 74, 50, 73, 22, 42, 40, 32, 94, 74, 22, 42, 68, 24, 29, 21, 67, 47, 22, 22, 42, 6, 31, 41, 94, 32, 73, 24, 21, 83, 40, 23, 74, 94, 71, 46, 22, 90, 23, 94, 92, 42, 42, 42, 74, 74, 24, 73, 49, 61, 59, 67, 51, 71, 66, 24, 42, 23, 45, 70, 23, 94, 60, 23, 76, 83, 24, 69, 23, 22, 29, 40, 71, 24, 76, 40, 40, 70, 94, 31, 74, 44, 68, 92, 74, 94, 14, 32, 78, 82, 69, 67, 22, 42, 42, 22, 21, 42, 42, 42, 74, 23, 73, 24, 42, 64, 92, 41, 73, 24, 23, 24, 74, 24, 94, 22, 22, 40, 29, 76, 73, 45, 22, 58, 32, 71, 69, 42, 40, 82, 42, 22, 94, 23, 82, 71, 71, 22, 42, 42, 24, 23, 94, 78, 73, 23, 71, 39, 22, 77, 42, 71, 46, 23, 64, 22, 42, 49, 78, 41, 90, 47, 92, 73, 23, 24, 23, 82, 83, 67, 90, 42, 61, 73, 74, 42, 74, 47, 76, 23, 6, 21, 63, 24, 90, 83, 23, 73, 22, 39, 68, 83, 21, 80, 74, 42, 23, 68, 44, 42, 42, 74, 22, 94, 94, 24, 23, 73, 42, 23, 12, 23, 42, 72, 83, 72, 83, 42, 94, 71, 68, 73, 41, 74, 40, 32, 5, 23, 79, 71, 23, 39, 42, 45, 22, 6, 42, 66, 74, 79, 41, 60, 94, 69, 21, 42, 60, 42, 68, 60, 73, 74, 23, 22, 24, 21, 23, 82, 25, 77, 23, 41, 47, 28, 40, 24, 23, 69, 78, 42, 22, 42, 74, 45, 24, 90, 22, 39, 74, 24, 90, 28, 24, 39, 45, 60, 45, 24, 44, 23, 73, 73, 60, 25, 26, 21, 42, 74, 24, 32, 46, 74, 47, 94, 42, 73, 41, 90, 23, 29, 22, 94, 21, 39, 24, 22, 23, 82, 22, 24, 41, 23, 68, 83, 23, 39, 42, 46, 78, 41, 44, 94, 76, 23, 92, 44, 83, 67, 71, 68, 40, 22, 45, 13, 42, 21, 73, 23, 23, 69, 74, 74, 46, 40, 69, 74, 30, 42, 69, 41, 24, 66, 23, 31, 42, 24, 24, 46, 67, 5, 23, 73, 24, 78, 94, 74, 90, 42, 23, 41, 40, 23, 83, 24, 90, 42, 73, 22, 82, 25, 73, 40, 26, 73, 42, 6, 21, 74, 66, 75, 92, 83, 24, 74, 77, 74, 23, 74, 42, 82, 69, 42, 47, 42, 71, 41, 78, 74, 24, 79, 23, 79, 92, 59, 42, 21, 42, 23, 82, 40, 26, 83, 68, 6, 74, 94, 21, 77, 90, 60, 66, 42, 74, 68, 42, 42, 90, 66, 94, 23, 92, 94, 82, 40, 74, 42, 22, 73, 42, 94, 73, 22, 82, 94, 79, 22, 21, 22, 74, 67, 74, 94, 42, 44, 67, 71, 23, 22, 71, 62, 23, 78, 40, 24, 24, 24, 83, 24, 23, 24, 23, 74, 21, 73, 83, 42, 68, 42, 23, 92, 42, 23, 67, 23, 41, 42, 78, 23, 39, 73, 41, 74, 40, 22, 74, 22, 94, 60, 94, 42, 82, 59, 46, 42, 60, 74, 21, 73, 42, 32, 23, 23, 61, 67, 92, 74, 90, 28, 71, 74, 42, 60, 23, 21, 41, 6, 76, 23, 41, 42, 90, 74, 71, 46, 45, 42, 21, 47, 23, 73, 90, 5, 74, 64, 66, 23, 24, 42, 94, 92, 42, 73, 77, 73, 14, 24, 62, 44, 73, 24, 42, 82, 24, 24, 74, 67, 71, 39, 23, 77, 67, 69, 39, 42, 73, 22, 24, 90, 66, 73, 90, 21, 73, 22, 41, 24, 60, 80, 64, 45, 68, 42, 23, 82, 23, 44, 41, 23, 12, 74, 74, 25, 21, 68, 73, 94, 42, 22, 42, 21, 42, 82, 73, 79, 23, 64, 23, 74, 74, 22, 90, 24, 79, 23, 42, 74, 42, 41, 26, 41, 40, 69, 41, 63, 74, 73, 68, 41, 71, 5, 44, 68, 42, 64, 22, 79, 22, 69, 94, 23, 24, 42, 66, 71, 64, 40, 47, 22, 23, 39, 44, 74, 71, 92, 46, 82, 23, 68, 14, 73, 74, 79, 44, 69, 6, 22, 29, 23, 22, 41, 79, 74, 67, 24, 92, 22, 79, 42, 40, 82, 23, 22, 24, 42, 50, 14, 39, 22, 42, 42, 94, 42, 42, 12, 23, 71, 23, 74, 41, 90, 42, 41, 69, 69, 68, 42, 39, 42, 90, 73, 22, 73, 23, 82, 82, 90, 41, 58, 92, 45, 24, 44, 62, 23, 22, 94, 90, 90, 79, 42, 25, 23, 24, 50, 94, 32, 42, 22, 32, 94, 21, 94, 76, 77, 94, 32, 74, 23, 69, 74, 39, 40, 44, 31, 22, 24, 39, 23, 39, 94, 82, 67, 41, 66, 94, 60, 24, 23, 26, 23, 41, 24, 41],
        'labels': ['Pm-Dy-Y', 'Yb-Gd-V', 'Cr-Ni-Pb', 'Pu-V-Mo', 'Pm-Er-V', 'Tm-Lu-W', 'Nd-Pu-V', 'Al-Zn-In', 'Eu-U-Ta', 'Ni-Ru-Au', 'Ce-Pm-Nd', 'Cu-Tc-Pd', 'La-Sm-Ho', 'La-Yb-Ta', 'Gd-Lu-Zr', 'Li-Hf-Ti', 'La-Dy-Ho', 'Ba-Yb-Sc', 'K-Zr-Nb', 'Y-Zr-Nb', 'Li-Ce-Tm', 'Sc-U-Cr', 'Ho-Er-Mo', 'Tm-V-Mo', 'La-Pu-Zr', 'Ir-Pd-Rh', 'Gd-Ho-Zr', 'Ca-Y-Tm', 'Rb-Hf-Zr', 'La-Yb-Sc', 'Nd-Pu-Zr', 'Yb-Y-Lu', 'La-V-Mo', 'Ba-La-Y', 'Cs-Li-Ta', 'Ba-Sr-Fe', 'Yb-Y-W', 'Cs-Pr-Ti', 'Zn-Bi-B', 'Tb-Pm-Y', 'Gd-Ta-V', 'Ce-Eu-Zr', 'Fe-Os-Rh', 'Nb-V-Mo', 'Eu-Hf-Zr', 'Be-Al-In', 'Pr-V-W', 'Li-Er-Lu', 'Pu-Ti-Cr', 'Rb-Na-V', 'Mg-V-Mo', 'Pr-Nd-Ho', 'Pr-Sm-Cr', 'Pd-Ru-C', 'Er-Pu-Mo', 'Ce-Zr-Ti', 'Li-Tm-Ta', 'Nd-Gd-Sc', 'Fe-Rh-Au', 'Cs-V-Cr', 'Ru-Pt-Au', 'Ca-Lu-Pu', 'Cs-K-Ta', 'Lu-Ta-Ti', 'Nd-U-W', 'Ga-Si-Ge', 'K-Mg-V', 'Ce-Th-Ta', 'Yb-Dy-Zr', 'Ba-Nd-Ti', 'Y-Pu-V', 'Pr-Gd-Lu', 'La-Y-Zr', 'Er-Nb-V', 'Cs-Zr-Ta', 'Li-Y-Mo', 'Pr-Th-Mo', 'Fe-Cu-Pd', 'Ce-Sm-Y', 'Dy-Y-Ho', 'Cu-Ir-Rh', 'Si-Sb-Pb', 'Pr-Ho-Pu', 'K-Li-Cr', 'La-Tb-Dy', 'Li-Nd-Mo', 'Sm-Th-Cr', 'Cs-Zr-Nb', 'Pr-Y-Pu', 'Tb-Yb-Tm', 'Y-Hf-Nb', 'Na-Cr-Mo', 'K-Mg-Nb', 'Li-Er-Tm', 'Ce-Hf-Th', 'Dy-Ho-Lu', 'Ce-Mn-V', 'Mn-Fe-Pb', 'Rb-Hf-Mg', 'La-Tb-V', 'Sr-Nd-Sc', 'Tb-Sm-Cr', 'Ce-Sc-U', 'Y-Ho-V', 'Rb-Li-V', 'Nd-Th-Sc', 'Al-Si-Ge', 'Ca-La-Tm', 'La-Sc-Nb', 'Sm-Gd-Mo', 'Y-Sc-Ti', 'Na-Sr-Fe', 'K-Li-Nb', 'Cs-Rb-Hf', 'Zn-Ga-Bi', 'La-Pm-Mo', 'Mn-Fe-Co', 'Gd-Tm-Cr', 'Sm-Gd-Ho', 'U-Ti-W', 'La-Ce-Nb', 'Re-Hg-Sb', 'Gd-Dy-Pu', 'Dy-Ho-V', 'La-Nd-U', 'Ce-Ta-Mo', 'Ce-Lu-Ti', 'Ce-Nd-Ta', 'Pm-Tm-Cr', 'Ce-Tm-Pu', 'Pr-Sm-Th', 'Ca-La-Lu', 'Yb-Lu-Nb', 'Sm-Lu-V', 'Gd-Tm-Mo', 'Li-Pr-Pu', 'Al-Ga-Hg', 'Na-Ti-V', 'Yb-Nd-Gd', 'Nd-Gd-Mo', 'La-Tb-Pm', 'Ir-Pd-C', 'Tm-Pu-Mo', 'Tm-Th-V', 'La-Er-Zr', 'Cu-Ni-Ir', 'Tb-Sc-W', 'Ba-Sr-Mo', 'Th-Sc-V', 'Mn-Co-Ni', 'Cu-Ni-Ru', 'Tb-Ce-Ho', 'Nd-Lu-Mo', 'Li-Pm-Er', 'La-Tm-Lu', 'La-Pu-Mo', 'Pm-Pr-Lu', 'Ce-Ho-Pu', 'Cu-Tc-Pt', 'Nd-Dy-Tm', 'Ca-Pm-Mo', 'Fe-Cu-Au', 'Li-Sm-Gd', 'Mn-Ag-Pb', 'Li-Er-Ta', 'La-Tb-Ti', 'Gd-Ti-Cr', 'Ce-Gd-Th', 'Er-Sc-Cr', 'Sm-Er-Ta', 'Cr-Ni-Au', 'Nd-U-Ti', 'Co-Au-C', 'Nd-Pu-W', 'La-Yb-Th', 'Sc-Cr-Mo', 'Zr-Sc-Nb', 'Pr-Tm-Ti', 'Cs-Hf-Ti', 'Ce-Ho-Th', 'Yb-Gd-Tm', 'Li-Ce-Ta', 'Y-V-W', 'La-Sc-Ti', 'Tb-Sc-Ti', 'Tb-Pr-Ta', 'Sb-Pb-W', 'Ba-Yb-Gd', 'Dy-Pu-Cr', 'Tb-Gd-Tm', 'Tb-Lu-W', 'Gd-Er-V', 'Yb-Ti-W', 'Tm-V-W', 'Pd-Pt-Rh', 'Eu-Pu-Nb', 'Ba-Sm-Y', 'La-Sm-Y', 'U-V-Cr', 'Ba-Pm-Sm', 'Sm-Ho-Mo', 'Gd-Th-Ta', 'Ce-Pr-Cr', 'Lu-Ti-Mo', 'Dy-Lu-Th', 'La-Sc-Mo', 'Y-U-Cr', 'Pm-Nd-Sm', 'Tb-Gd-Mo', 'Yb-Er-Th', 'Li-Pr-Lu', 'Mg-Mn-Cd', 'Ce-Pm-Gd', 'Pu-Ti-Nb', 'Tl-Cd-Mo', 'Sc-V-Mo', 'Pu-V-Cr', 'Mn-Fe-Ni', 'Eu-Zr-Nb', 'Tb-Y-W', 'Tb-Pr-Y', 'Ca-Nd-Sc', 'Ba-Nd-Y', 'Ca-Tb-Sc', 'Pu-Ta-Ti', 'Ca-Yb-Eu', 'Th-Mo-W', 'Si-Sn-Bi', 'Tb-Sc-Mo', 'Na-Cr-Cu', 'Y-Er-W', 'Y-Ho-Mo', 'Ni-Pd-Rh', 'Y-Ti-Nb', 'Co-Pd-C', 'Li-Gd-Ti', 'Tb-Y-Er', 'Pr-Y-Cr', 'La-Yb-V', 'Ca-Yb-Mo', 'Dy-Er-Ti', 'Nd-Sm-Gd', 'Tb-Y-Ti', 'Gd-Er-Tm', 'Ca-Pm-Tm', 'Tl-Zn-Ge', 'Yb-Sc-Ta', 'Fe-Co-Au', 'La-Sm-Nb', 'Nb-V-Cu', 'La-Sm-V', 'Li-Pr-Mo', 'Tb-Gd-Ho', 'Eu-Th-Ta', 'Yb-U-Nb', 'Yb-Er-Hf', 'La-Ho-Zr', 'Dy-Y-Er', 'La-Ce-Tm', 'Pr-Lu-Mo', 'Eu-Y-Mo', 'Dy-Er-Cr', 'La-Yb-Ti', 'Ce-Pm-Mo', 'Tb-Pm-Pu', 'Pr-Dy-Y', 'La-Pu-Ti', 'Li-Ce-Sm', 'Li-Pr-Tm', 'Tb-Pm-Ho', 'Dy-Er-Lu', 'Al-In-Ga', 'Nd-Er-Ta', 'Pr-Nd-Y', 'Ba-Pm-V', 'Pr-Dy-V', 'Rb-Na-Ti', 'Tb-Pm-Gd', 'Gd-Er-Mo', 'Y-Th-Mo', 'Gd-Y-Mo', 'Ba-Pm-Mo', 'Pu-Nb-V', 'Er-Th-Mo', 'Co-Ni-Pb', 'Ho-Th-Zr', 'Pm-Pr-Gd', 'Sm-Lu-Mo', 'Yb-Pr-V', 'Cu-Ag-Pb', 'Pm-Ho-V', 'Re-Ir-Pd', 'Er-Lu-Nb', 'La-Eu-U', 'Cu-Ag-Mo', 'Dy-V-Cr', 'Dy-Th-Ti', 'Re-Bi-Sb', 'Pm-Pr-Y', 'Th-Sc-Ta', 'Y-V-Cr', 'Fe-Ag-Ir', 'Co-Os-Pd', 'Rb-Li-Zr', 'Gd-Dy-V', 'Tb-Er-Pu', 'Ce-Ti-Cr', 'Ba-Ti-V', 'Nd-Dy-Mo', 'Ca-Tm-Ti', 'Li-Hf-Mg', 'Tb-Sc-V', 'Tl-Zn-Pb', 'Pr-Tm-Cr', 'Er-Ti-Cr', 'Er-Sc-V', 'K-Li-Ta', 'Yb-Sc-U', 'La-Ce-Pu', 'Cs-Mg-Zr', 'Ga-B-Pb', 'Re-Ir-Ru', 'Pr-Gd-Er', 'Re-Ni-Pt', 'Tb-Nd-Tm', 'Tb-Ta-V', 'Nd-Y-Sc', 'Tb-Dy-Y', 'Tb-Pr-Cr', 'La-Zr-Ta', 'Eu-Th-U', 'Li-Tb-Ta', 'Na-V-Fe', 'Cu-Re-Pt', 'Cd-Ge-Bi', 'Sm-Gd-Ta', 'Al-In-Ge', 'Al-Cd-Ga', 'Ce-Eu-Y', 'La-Tb-Tm', 'Li-Tb-Zr', 'Pr-V-Cr', 'La-Pm-Ho', 'Gd-Er-Th', 'Li-La-V', 'Al-Ga-Sn', 'Tl-As-Pb', 'Re-Pd-Ru', 'Eu-Y-W', 'Tm-Ta-V', 'Eu-V-W', 'Be-Zn-Ge', 'Li-Pm-Gd', 'Na-Mg-Zr', 'Fe-Ag-Rh', 'Tl-Zn-Cd', 'Nd-Sm-Ho', 'Y-Ta-Mo', 'Gd-Lu-Ta', 'Li-Tb-Gd', 'Be-Ga-Si', 'Mn-Cu-Ru', 'Pr-Cr-W', 'Ho-Cr-W', 'Na-Li-Mg', 'Re-Ru-Pt', 'La-Tb-Ce', 'Cr-Pb-W', 'Pr-Er-Lu', 'Ag-Pd-Ru', 'Ca-Nd-Lu', 'Mg-Cr-Cd', 'Mn-Ni-Ag', 'Cu-B-Pb', 'Li-Er-V', 'Ni-Os-Rh', 'Fe-Ag-Pd', 'Li-Er-Pu', 'Sm-Y-U', 'Dy-Tm-Cr', 'Na-Nb-Mo', 'Tb-Zr-Ta', 'Rb-Na-Ta', 'Gd-Y-Er', 'Pr-Er-Tm', 'Pr-Sm-Ho', 'Gd-Tm-V', 'Zr-Ta-Nb', 'Cr-Hg-Bi', 'Yb-Er-Sc', 'Ca-Pm-Pu', 'Co-Cu-Ni', 'Gd-Ho-Lu', 'Sc-Ti-Cr', 'Ga-Si-Bi', 'Li-Lu-Mo', 'Ba-Sr-Mn', 'Li-Pm-Sm', 'Na-Li-Zr', 'Gd-Sc-V', 'Yb-Er-Mo', 'Ho-Lu-Zr', 'Nd-Sc-Cr', 'Ca-Ce-Ti', 'Pm-Gd-Ho', 'La-Y-Cr', 'Ca-Yb-Y', 'Pr-Th-U', 'Tm-Cr-Mo', 'Rb-Li-Ta', 'Gd-Y-Tm', 'Yb-Pr-U', 'Ce-Hf-Ta', 'Nd-Y-Ho', 'Er-Ti-Mo', 'Dy-Th-Mo', 'La-Pr-W', 'Yb-Ho-Lu', 'La-Yb-Nb', 'Co-Rh-C', 'La-Eu-Ta', 'Y-Cr-W', 'K-Zr-Ti', 'Pr-Sm-U', 'Eu-Sc-Cr', 'Ga-Sn-B', 'Cu-Ag-Rh', 'Ce-Gd-Zr', 'Tl-Ga-B', 'Gd-Er-Zr', 'Ti-Nb-Mo', 'Ga-Sn-Pb', 'La-Eu-Mn', 'Tm-Lu-Mo', 'Pm-Tm-Pu', 'Be-Al-Sn', 'Dy-Lu-Ti', 'Yb-Tm-Cr', 'Na-Ta-Nb', 'Li-Gd-Y', 'Na-Sr-Mo', 'Ba-La-Ti', 'Sm-Mo-W', 'La-Tm-Th', 'K-Cr-Fe', 'Y-Ta-Nb', 'Ce-Pm-Y', 'Sm-Tm-Lu', 'Er-Th-Nb', 'Co-Os-Rh', 'Sm-Dy-Lu', 'Sr-Ca-Y', 'Pm-Er-Th', 'Yb-V-W', 'La-Gd-W', 'Tb-Ta-Ti', 'Cs-Mg-Cr', 'Ca-Nd-Y', 'Pr-Ta-Mo', 'Pm-Sm-Th', 'La-Sm-Th', 'Zr-Ti-Nb', 'Cr-Cu-W', 'Cu-Ni-Pb', 'Sm-Pu-Cr', 'Ce-Pr-Er', 'Ce-Lu-Pu', 'La-V-Fe', 'Sm-Y-Ho', 'Ce-Er-Pu', 'Ce-Y-Hf', 'Ca-Pm-Nd', 'Ce-Pr-Ho', 'Ce-Lu-W', 'Re-Ru-Rh', 'Cu-Os-Pt', 'Co-Ni-Ir', 'La-Ta-Ti', 'Ba-V-Fe', 'Gd-Th-W', 'Li-Er-Nb', 'La-Yb-Er', 'Ce-Y-Ta', 'Y-Lu-Ti', 'Tm-Th-Mo', 'La-Eu-Zr', 'Pr-Dy-Mo', 'Ca-Yb-Mn', 'La-U-Ta', 'Pr-U-W', 'Nd-Lu-Ti', 'Pu-V-W', 'Li-Nd-Gd', 'Li-Ce-Hf', 'Tl-Cu-Mo', 'Al-Zn-Bi', 'Er-Sc-Ti', 'K-Mg-Ti', 'Li-Ce-Pu', 'Na-Nb-V', 'Ba-La-Pm', 'Tb-Th-Ta', 'Pr-Ho-Lu', 'Tb-Yb-Ti', 'Sm-Y-W', 'Tb-Dy-Zr', 'Ag-Ge-Au', 'Nd-Er-Cr', 'Yb-Y-Zr', 'Dy-Ho-Cr', 'Gd-Ta-W', 'Nd-Sm-Mo', 'Tb-Sm-Ta', 'Li-Lu-Cr', 'Y-Hf-Zr', 'Eu-Sc-U', 'Ti-Cr-W', 'Re-Ag-Bi', 'Pm-Er-Mo', 'Ca-Tb-Tm', 'Ta-Mo-W', 'Tb-Er-Cr', 'Li-La-Tb', 'Tl-Ag-Mo', 'Tb-Y-Mo', 'Er-Zr-Sc', 'Fe-Ni-Ag', 'La-Er-Tm', 'Co-Re-Ir', 'Li-Cr-Ni', 'V-Ag-Pd', 'Zn-Sn-Pb', 'Ce-Nd-W', 'La-Cr-W', 'Ca-Eu-Sc', 'Ho-Er-Cr', 'Yb-Zr-Nb', 'Eu-V-Mo', 'Ni-Ir-C', 'Y-Tm-Cr', 'Pr-Pu-Cr', 'Ho-Th-Ta', 'Pr-Tm-Lu', 'Pr-Er-Ti', 'Pr-Pu-Ta', 'Tb-Ce-Pm', 'Ce-Mo-W', 'Li-Tb-Pu', 'Mn-Tl-Ag', 'Ba-La-Sc', 'Th-Cr-W', 'Li-La-Cr', 'Mn-Fe-Cu', 'Ho-Tm-Pu', 'K-Rb-V', 'La-Gd-Tm', 'Cu-Ag-Ru', 'Ce-Y-Sc', 'Ho-Zr-Sc', 'Ce-Tm-Lu', 'Co-Ru-C', 'Ce-Ti-V', 'Yb-Hf-Sc', 'Tl-Si-Pb', 'Tb-Yb-Nd', 'Rb-Li-Cr', 'Co-Ni-C', 'Co-Ir-Ru', 'Gd-Lu-Pu', 'Gd-Dy-Zr', 'Mn-Cu-Ni', 'Cu-Mo-Au', 'Tb-Pr-Tm', 'Li-Mg-V', 'Yb-Pr-Y', 'Li-Sm-Mo', 'Li-Tb-Y', 'Sm-Nb-Mo', 'Ba-La-Yb', 'La-Dy-W', 'Zn-Si-Sn', 'Ca-Y-Pu', 'U-Ta-Ti', 'Pr-Lu-V', 'Si-Bi-Sb', 'Li-Ce-V', 'Cu-Re-Bi', 'Ba-Ca-Sc', 'La-Lu-Nb', 'Zn-Cd-B', 'In-Ga-Si', 'Dy-Er-Th', 'Cr-Hg-Pb', 'Yb-Dy-Y', 'Eu-Y-Nb', 'Mn-Co-Au', 'Yb-Er-V', 'Nb-V-W', 'Yb-Nd-V', 'Yb-Th-Ti', 'K-Rb-Mg', 'Ce-Gd-Sc', 'Dy-Lu-W', 'V-Fe-Cu', 'Yb-Zr-Sc', 'La-Ce-Y', 'Ni-Pd-Ru', 'La-Pr-Gd', 'La-Ce-Pr', 'Eu-Th-Mo', 'Nd-Ho-Sc', 'Hf-Ti-Nb', 'Tb-Yb-Th', 'Tb-Pr-Ti', 'Er-Pu-Nb', 'Re-Hg-Ru', 'Ba-Yb-Mn', 'Lu-Zr-Nb', 'Nd-Y-Zr', 'Rb-Na-Li', 'Sm-Dy-Er', 'U-Nb-W', 'Ce-Lu-Zr', 'Pd-Rh-C', 'Tb-Ce-Sm', 'Eu-Cr-Mo', 'Y-Ti-Mo', 'Li-Ce-Lu', 'Yb-Gd-Pu', 'Cd-B-Pb', 'Th-Ti-Mo', 'Ba-La-Nd', 'Er-Lu-V', 'K-Rb-Cr', 'Cd-Fe-Bi', 'Al-Tl-Cd', 'Pr-Nd-Gd', 'Nd-Ho-Lu', 'Ce-Ho-Tm', 'La-Pu-Nb', 'Ge-Au-C', 'Ca-Y-Lu', 'Yb-Gd-Y', 'Na-V-Mo', 'Y-Ho-Th', 'Ba-Sr-Y', 'Tb-Dy-Lu', 'La-Gd-Dy', 'Y-Er-Mo', 'Ce-Sm-Pu', 'V-Pd-Ru', 'Li-Tb-Er', 'Yb-Pr-Ta', 'Yb-Gd-Er', 'Y-Ho-Cr', 'Pm-Cr-Mo', 'Eu-Th-Sc', 'La-Er-Ta', 'Ba-Y-Mo', 'Co-Hg-Ir', 'Lu-Pu-Ti', 'Y-Tm-Lu', 'Ba-Ca-Nd', 'K-Li-Mo', 'V-Hg-Bi', 'Tb-Gd-Ta', 'La-Pm-Lu', 'Ir-Ru-C', 'Ca-Y-Ti', 'Tb-Yb-Cr', 'Li-Sc-Mo', 'Er-Hf-Ti', 'La-Ta-W', 'La-Dy-Ti', 'Ce-Nd-Sc', 'Co-Pt-C', 'Tm-Lu-Ta', 'Na-Mg-V', 'Ce-Eu-Cr', 'Cs-Li-Mg', 'Gd-Pu-Mo', 'Re-Pd-Rh', 'Yb-Nd-Tm', 'Mg-U-V', 'Fe-Pd-Ru', 'K-Rb-Hf', 'Ba-Ca-V', 'Rb-Mg-V', 'La-Sm-Cr', 'Y-Cr-Mo', 'Cs-Ti-V', 'Tb-Th-Ti', 'Pm-Gd-Er', 'La-Er-Th', 'Tb-Gd-Sc', 'Ce-Pm-Lu', 'Pm-Sm-Pu', 'Hf-Sc-Ti', 'Y-Pu-Cr', 'Be-Zn-In', 'Yb-U-Ta', 'Nd-Y-Ta', 'Ce-Hf-Zr', 'Cs-K-Mo', 'Ag-Pd-C', 'Sm-Tm-Mo', 'Ho-Cr-Mo', 'Yb-U-Cr', 'Tb-Lu-Th', 'Yb-Th-Mo', 'Ca-Tb-Ce', 'Tb-Dy-Mo', 'Zn-Cd-Si', 'Pm-Pu-V', 'Yb-Nb-Mo', 'Hf-U-Ta', 'Li-Sm-Er', 'Li-Zr-Ti', 'Na-Ta-Cu', 'Pr-Er-Th', 'V-In-Mo', 'Er-Th-W', 'Pm-Dy-Th', 'Tb-Gd-Cr', 'Nd-Zr-Sc', 'Sr-Ca-Ti', 'Tm-Th-Cr', 'Gd-Sc-Cr', 'Li-Gd-Lu', 'Ag-Os-Rh', 'La-U-V', 'Th-Ta-V', 'Co-Pd-Pt', 'Ce-Ho-Sc', 'Cu-Re-Rh', 'Yb-Sc-Ti', 'Li-La-Nb', 'Cu-Ag-Au', 'Eu-Sc-Nb', 'Rb-Na-Hf', 'Co-Rh-Au', 'Tb-Ho-V', 'Ce-Gd-Er', 'Tb-Ce-Ti', 'Gd-Dy-Er', 'Zn-In-Ge', 'Ce-Nb-Mo', 'Y-Ho-Sc', 'Pm-Pr-Er', 'Li-Pr-Hf', 'Er-Lu-Cr', 'Li-Gd-Cr', 'Li-Gd-Mo', 'Yb-Lu-Th', 'Pu-Nb-W', 'La-Tb-Lu', 'Li-La-Tm', 'Cu-Ni-Ag', 'Yb-Pr-Th', 'La-Sc-W', 'Fe-Ag-C', 'Mg-Mn-Fe', 'Fe-Ag-Ru', 'Nd-Cr-Mo', 'La-Pr-Ti', 'Cr-Cu-Mo', 'Tb-Er-Sc', 'Li-Lu-Nb', 'Y-Lu-V', 'Lu-Ti-V', 'Sn-B-Pb', 'Li-Pr-Er', 'Re-Hg-Ir', 'Yb-Dy-Tm', 'Tb-Pm-V', 'Cs-K-Mg', 'Ni-Ir-Pt', 'Ca-Sc-Mo', 'Eu-Y-Th', 'Zr-Sc-Ti', 'Yb-Pu-W', 'K-Li-Zr', 'Yb-Pr-Gd', 'Y-Pu-Nb', 'Ce-Th-W', 'Ce-Y-Er', 'Nb-V-Bi', 'V-Cu-Bi', 'Y-U-Nb', 'Fe-Cu-Rh', 'Re-Pt-Rh', 'Pu-Ti-Mo', 'Re-Ir-Pt', 'Ca-Yb-Pu', 'Nd-Sm-V', 'Na-Sr-Ca', 'Ho-Pu-Ta', 'Ce-Ho-Cr', 'Ce-Zr-Nb', 'Pm-Th-V', 'La-Gd-Lu', 'Dy-Lu-Zr', 'Ta-Ti-W', 'Nd-Dy-Ho', 'Y-Ho-Ta', 'Sr-Y-Mo', 'La-Pr-Th', 'Cr-Cu-Bi', 'Pm-Lu-Mo', 'La-Pm-V', 'Sm-Er-Pu', 'Y-Pu-Mo', 'Ba-Sr-Ti', 'Ta-V-Cu', 'Ga-Hg-B', 'La-Pu-Cr', 'Nd-Pu-Ta', 'Li-Sc-Ta', 'Ca-Eu-Mn', 'Pr-Y-Er', 'Lu-Pu-W', 'Dy-Ti-Cr', 'Ce-Y-Tm', 'Na-Zr-Nb', 'La-Lu-Th', 'Tb-Nd-Er', 'Eu-Sc-Mo', 'Ca-Ce-Sc', 'Pr-Lu-W', 'Pm-Ho-Pu', 'Nd-Ta-Ti', 'La-Lu-V', 'Co-Pd-Au', 'Pr-Sm-Tm', 'Li-Mg-Mn', 'Lu-Cr-W', 'Eu-Hf-Th', 'Li-Gd-Pu', 'Er-Pu-Ta', 'Yb-Nd-Y', 'La-Eu-Mo', 'Gd-Ho-Pu', 'Cs-Li-Nb', 'La-Ho-Th', 'Rb-Zr-Nb', 'La-Pr-Mo', 'Nd-Gd-Ta', 'Th-U-Nb', 'Na-Mg-Cr', 'Ce-Sc-Nb', 'Eu-U-V', 'Na-Be-Al', 'Yb-Lu-Cr', 'Gd-Dy-Th', 'Pm-Sm-Mo', 'Cs-V-Mo', 'Pm-Pu-Cr', 'Gd-Y-Th', 'Cs-K-V', 'Tb-Yb-V', 'K-Ta-Mo', 'La-Yb-Mn', 'Rb-Li-Hf', 'Li-Gd-Er', 'La-Zr-Ti', 'Ce-U-Ti', 'Ba-Gd-Y', 'Ba-Y-Ti', 'Cu-Ni-C', 'Nd-Ti-V', 'Cd-Si-Pb', 'Nd-Tm-Pu', 'Tb-Er-Zr', 'Pr-Ho-Er', 'U-Cr-W', 'Nd-U-Cr', 'Fe-Pd-C', 'Na-Li-Fe', 'Ba-Ca-Yb', 'Sm-Er-Tm', 'Ca-La-Eu', 'Ca-La-Sc', 'Mn-Co-Pb', 'Nd-Sm-Tm', 'Tc-Pd-Pt', 'Cs-Ta-Ti', 'Ca-Eu-Mo', 'Li-La-Er', 'Ni-Ir-Ru', 'Fe-Ni-Rh', 'Pu-Nb-Mo', 'Yb-Y-Nb', 'Eu-Y-Hf', 'Re-Ni-Pd', 'Pm-Sm-Dy', 'Cu-Re-Ni', 'Lu-Nb-V', 'Tm-Lu-Cr', 'Ce-V-W', 'Ca-Ce-Lu', 'Ce-Sm-Gd', 'Re-Tc-Ni', 'Ag-Ru-Au', 'Mg-Cr-Fe', 'Ba-Ca-La', 'Ca-Yb-Tm', 'Ni-Os-Pt', 'Tl-Cd-Ge', 'Mg-Zr-Ti', 'Ba-Sc-V', 'Fe-Ru-Rh', 'Pr-Hf-Ta', 'Nd-Y-Er', 'Ho-Tm-Cr', 'Ce-Pu-V', 'Ce-Y-Ho', 'Eu-U-Cr', 'Tb-Sm-Dy', 'Ce-Pr-Ta', 'Sc-Ti-W', 'Sm-Dy-Y', 'Pm-Dy-Mo', 'Er-Lu-Ti', 'La-Gd-Th', 'La-Mn-V', 'Ba-Ti-Mo', 'Tb-Ce-Pr', 'Ag-Ru-Rh', 'Ba-Pr-Y', 'Yb-Dy-V', 'La-Pr-Sm', 'Li-Ta-Cu', 'La-Ho-Er', 'Tl-V-In', 'Tb-Ho-Tm', 'La-Y-W', 'Ru-Pt-Rh', 'Sm-Y-Lu', 'Tm-Lu-V', 'Ce-Er-Nb', 'Cr-W-Au', 'Yb-U-Ti', 'La-Eu-V', 'Pr-Nd-U', 'Li-Nb-Cu', 'Cu-Pt-W', 'Ni-Ag-Os', 'Yb-Hf-Zr', 'Li-Pm-Pr', 'Cs-Nb-V', 'Y-Ti-W', 'Fe-Ag-Os', 'Hf-Ta-Ti', 'La-Sm-Er', 'Er-Hf-Zr', 'Ir-Os-Rh', 'Dy-Ho-Er', 'Ba-Nd-V', 'Ag-Pd-Au', 'K-Rb-Nb', 'Pr-Sm-Lu', 'Nd-Dy-Th', 'Li-Pm-Tm', 'Ba-Yb-Nd', 'Tb-Pm-Er', 'La-Pm-Pu', 'Sm-Dy-Th', 'V-Cr-Fe', 'Tb-Pm-Pr', 'Ho-Pu-Mo', 'Ba-Yb-Eu', 'La-Sm-Mo', 'Li-Tb-Cr', 'Tb-Er-Ti', 'Na-Mg-Nb', 'Pr-Mo-W', 'Ce-Tm-Ta', 'Er-Ta-Nb', 'Gd-Ho-Th', 'Tb-Ho-Mo', 'Nd-Gd-Ho', 'Li-Pr-Sm', 'Cr-Ag-Au', 'Lu-Pu-Cr', 'Nb-Hg-Mo', 'Tb-Gd-Er', 'La-Yb-Pu', 'Fe-Ir-Ru', 'Sm-Tm-Pu', 'Th-Sc-W', 'Tb-Gd-Lu', 'Tb-Pm-Sm', 'Pr-Y-Ti', 'Er-Cr-W', 'Th-Sc-Ti', 'Y-Tm-Ta', 'La-Lu-Ta', 'Ga-Hg-Ge', 'U-Ti-V', 'Ce-Pr-Th', 'Ho-Th-W', 'Pm-Gd-Y', 'Li-Ho-Er', 'Cr-Fe-Ni', 'Rb-Ta-Mo', 'Ce-Pr-Tm', 'Li-Pr-Ho', 'Yb-Ta-Ti', 'La-Lu-Zr', 'Pm-V-Cr', 'Hg-Bi-Sb', 'Ce-Nb-V', 'K-V-Cr', 'Ca-Eu-Y', 'Y-Sc-V', 'Nd-Y-V', 'Ag-Ir-C', 'Ni-Ru-Rh', 'Li-Nd-Pu', 'Cs-Rb-Li', 'Na-Li-V', 'Gd-V-Cr', 'Co-Ag-Ir', 'B-Sb-Pb', 'Pr-Y-Tm', 'La-Zr-Nb', 'Tb-Pu-V', 'Re-Ni-Ir', 'Yb-Nb-W', 'Pm-Er-Pu', 'La-Y-Tm', 'Be-Si-Sn', 'Cr-Mo-W', 'Ce-Lu-Ta', 'Ce-Lu-Th', 'Li-Y-Ti', 'Tb-Ho-Lu', 'Tb-Sm-Th', 'Pm-Nd-Ho', 'Sc-U-V', 'Li-Nd-Ho', 'La-Nd-W', 'La-Yb-Pr', 'Ce-Er-Ta', 'Rb-Ti-Nb', 'La-Cr-Fe', 'Ce-Nd-V', 'Zr-Ta-Ti', 'Lu-V-W', 'Sm-Dy-Ho', 'Nd-U-V', 'Nd-Dy-Ta', 'Pm-Ho-Lu', 'Na-Ti-Mo', 'Pr-Er-V', 'La-Ti-Cr', 'Al-Ga-Pb', 'La-Pm-Dy', 'Sm-Lu-Pu', 'Gd-Er-Ta', 'Nd-Sm-Y', 'Tb-Pm-Nd', 'Al-Hg-Bi', 'V-Hg-Ru', 'Pm-Pr-Pu', 'Ce-Th-Nb', 'K-Hf-Ta', 'Pr-Dy-Ta', 'Li-Y-Cr', 'La-Er-Ti', 'Dy-Y-V', 'Lu-Pu-Ta', 'Nd-Tm-V', 'Pr-Lu-Ta', 'La-Pm-Gd', 'Tl-Cd-B', 'Yb-Y-Ta', 'Os-Pd-Ru', 'Sm-Dy-V', 'Pu-Np-Mo', 'Nb-V-Hg', 'Pr-Dy-Er', 'Nd-Tm-Th', 'Ho-Sc-Cr', 'Zr-Sc-Ta', 'Pm-Tm-Lu', 'V-Ag-Mo', 'Pr-Dy-Lu', 'Zn-Cd-Pb', 'Li-Sm-Pu', 'La-Tb-Pr', 'Cr-Ni-Ag', 'La-U-W', 'La-Ce-Nd', 'Yb-Lu-Ti', 'Yb-Tm-Lu', 'Na-Ca-Ti', 'Co-Hg-Pb', 'Pm-Pr-V', 'Be-Si-Ge', 'Sr-Y-Ti', 'Yb-Gd-Sc', 'V-Pd-W', 'Re-Ir-Os', 'Ce-Gd-Lu', 'Li-Ho-Pu', 'Be-Zn-Ga', 'Y-U-W', 'Ga-Hg-Bi', 'Ba-Pr-Gd', 'La-Tm-W', 'Li-Tb-Ce', 'Yb-Eu-Hf', 'Si-Ag-Pb', 'Ce-Cr-W', 'Gd-Mo-W', 'Th-Sc-Mo', 'Ag-Ir-Os', 'Cu-Re-Tc', 'Ce-Pm-Th', 'Ba-Fe-Ni', 'Ir-Os-Pd', 'Cr-Cu-Pb', 'La-Ce-Pm', 'Li-La-Y', 'Ca-Yb-Ti', 'Fe-Pd-Rh', 'Ce-Eu-W', 'Cs-Pr-Cr', 'Nb-Cu-W', 'Fe-Cu-Bi', 'Tb-Er-Mo', 'La-Th-Nb', 'Sm-Er-Lu', 'Yb-Ti-Nb', 'Al-Zn-Si', 'Yb-Ho-Zr', 'Cs-K-Li', 'Pr-Hf-Ti', 'Fe-Co-Bi', 'Tb-Pm-Cr', 'Lu-Th-Ti', 'Y-Ho-W', 'Li-Ce-Pr', 'Sm-Y-V', 'Ni-Pd-C', 'Sc-Ta-Ti', 'Zn-In-Si', 'Y-Lu-Th', 'Ce-Eu-Mo', 'Yb-Gd-Cr', 'Tb-Tm-Cr', 'Yb-Th-Ta', 'Tb-V-W', 'Ta-Tl-Cu', 'Hg-Mo-Pb', 'Sm-Er-Th', 'Co-Re-Rh', 'Co-Ag-Rh', 'La-Tm-Cr', 'Hf-Zr-Sc', 'Fe-Ni-Ru', 'Nb-Mo-W', 'Gd-Th-Sc', 'Pd-Pt-C', 'Pm-Dy-Er', 'Co-Ni-Ag', 'Gd-Dy-Tm', 'Tm-Pu-V', 'Nd-Dy-Lu', 'Dy-Er-Zr', 'Tb-Er-V', 'Nd-Tm-Ta', 'Sm-Er-Mo', 'Li-La-Zr', 'Th-Nb-W', 'Tb-Ce-Sc', 'Gd-Ho-Sc', 'Pr-Dy-Cr', 'Hf-Zr-Nb', 'Ca-Pu-Mo', 'Ti-Nb-W', 'Co-Ir-C', 'Ba-Sr-Nd', 'Ba-Yb-Mo', 'Yb-Th-Nb', 'Li-Nd-Ta', 'Ce-Er-V', 'Co-Re-Ag', 'Yb-Er-Lu', 'Re-Pd-Pt', 'Ni-Pd-Au', 'Ho-Sc-Ta', 'Cr-Fe-Au', 'Tb-Sm-Er', 'Ce-Gd-Pu', 'Li-Ce-Pm', 'Nd-Y-Ti', 'Li-Nd-Y', 'Nd-Y-Tm', 'La-Ho-Pu', 'La-Ce-Zr', 'La-Ti-W', 'Ag-Os-Ru', 'Pt-W-Au', 'Cu-Bi-Os', 'Pr-Nd-Ti', 'Fe-Co-Os', 'Li-Nb-V', 'Y-Sc-Cr', 'Be-Si-Bi', 'Li-Hf-Ta', 'Th-V-Cr', 'Ho-Mo-W', 'Pm-Y-Cr', 'Th-Zr-Ti', 'Gd-Ho-V', 'Yb-Pu-V', 'Tm-Ti-W', 'Cs-Mg-Ti', 'La-Gd-Mo', 'Li-Nd-Sc', 'Co-Ag-Pd', 'Ba-V-Mo', 'Pr-Gd-W', 'Ce-U-V', 'Tb-Dy-Ho', 'Sr-Ca-Sc', 'Nd-Sc-U', 'Li-Y-Ta', 'Y-Th-Cr', 'Cr-Cu-Ag', 'Fe-Os-Pd', 'Pm-Sm-Cr', 'Cu-Pb-W', 'Nd-Ho-Th', 'Pm-Nd-V', 'Ce-Nd-Lu', 'Fe-Ni-Pb', 'U-V-W', 'Nd-Ta-V', 'Dy-Pu-Zr', 'Ce-Pu-Nb', 'La-Ce-Ta', 'Tm-Lu-Th', 'La-Ho-Cr', 'Ba-La-Fe', 'Tm-Ti-Cr', 'Eu-Y-Pu', 'Yb-Y-Hf', 'La-Yb-Mo', 'Hf-Th-Nb', 'Nd-Sm-Pu', 'Na-Hf-Mg', 'Fe-Ag-Au', 'Li-Pu-Nb', 'Pr-Sm-Pu', 'Tb-Er-Lu', 'Sm-Gd-Er', 'Co-Cu-Au', 'Re-Ag-Os', 'Ru-Rh-Au', 'Mn-Tl-Ni', 'Pr-Er-Ta', 'La-Cr-Mo', 'Dy-Pu-Ta', 'Ta-In-Mo', 'Be-In-Ge', 'Y-Lu-Cr', 'Cd-Bi-Mo', 'Yb-Dy-Mo', 'Na-Hf-Ti', 'Ba-Nd-Gd', 'Ca-Mn-Co', 'Li-Nd-Zr', 'Co-Os-Pt', 'Co-Ru-Pt', 'Yb-Pu-Ta', 'K-Ta-Nb', 'Tb-Yb-Ta', 'Tb-Yb-Pr', 'Sc-Ti-Mo', 'Fe-Co-Ir', 'Fe-Cu-Ag', 'Hf-Th-Ti', 'Tb-Y-Sc', 'Hg-Ge-Pb', 'K-Nb-V', 'Li-La-Ta', 'Er-Th-Zr', 'K-Zr-Ta', 'Ce-Y-U', 'Gd-Lu-Mo', 'Li-Tb-Tm', 'Fe-Cu-Ni', 'Cu-Os-Pd', 'Tb-Tm-Th', 'Pr-Tm-V', 'Li-Y-Nb', 'Dy-Ho-Th', 'Na-Cu-Mo', 'Yb-Eu-Cr', 'Li-Ti-Cr', 'Cs-Hf-Ta', 'Co-Cu-Pt', 'Rb-Ti-Mo', 'Al-Ga-Bi', 'V-Cr-W', 'Pm-Gd-Lu', 'Li-La-Pu', 'Ce-Ho-Er', 'Ce-Hf-Nb', 'Ag-Rh-Au', 'Ce-Pu-Mo', 'Bi-B-Sb', 'Ho-Er-Zr', 'La-Ta-V', 'Tb-Dy-Tm', 'Pm-Lu-V', 'Tb-Tm-Mo', 'Zn-Cd-Bi', 'Ce-Nb-W', 'Sm-Tm-V', 'Th-U-W', 'Tb-Nd-V', 'Pr-Sm-Y', 'La-Pr-Lu', 'Ho-Sc-V', 'Ag-Bi-Os', 'Li-Tb-Nd', 'Sr-Y-Sc', 'Co-Re-Ni', 'Y-Tm-V', 'Ce-V-Mo', 'Pm-Tm-Th', 'Sm-Dy-Mo', 'Pd-Ru-Rh', 'Hg-Bi-Os', 'Sc-U-Nb', 'Yb-Pr-Pu', 'Al-Tl-In', 'Ho-Pu-V', 'Rb-Zr-Ti', 'Tm-Ti-Mo', 'Pr-Sm-Gd', 'Gd-Tm-Ta', 'Mn-V-Ag', 'Cr-Cd-Bi', 'Tb-Ta-W', 'V-Ag-Bi', 'La-Ho-Lu', 'La-Dy-Er', 'Li-Gd-Tm', 'Y-Er-V', 'Li-Sc-Ti', 'Np-Cr-Mo', 'Ag-Mo-Pb', 'Co-Hg-Bi', 'Mn-Tl-V', 'Eu-Y-Zr', 'Cu-Ir-Os', 'Tb-Gd-Ti', 'Pr-Hf-Th', 'Tb-Ce-Cr', 'Ag-Ir-Rh', 'Tl-Zn-In', 'Li-Sm-Cr', 'Nd-Sm-Lu', 'Re-Ni-Rh', 'Yb-Zr-Ti', 'La-Dy-V', 'Mn-Ru-Au', 'Dy-Tm-Th', 'Pr-Nd-V', 'Sm-Ho-Th', 'Eu-Nb-Mo', 'Y-Er-Ta', 'Ce-U-W', 'Sn-Ge-B', 'Nd-Ti-Mo', 'Hf-Sc-U', 'Tl-Ga-Ge', 'Tm-Ta-Mo', 'Fe-Ru-Au', 'Ho-Er-Sc', 'Yb-Th-W', 'Nd-Er-Mo', 'Cs-Rb-Ta', 'Lu-Zr-Ti', 'Zn-Ga-Ge', 'Pr-Pu-Mo', 'La-Eu-Pu', 'Yb-U-W', 'Yb-Gd-Th', 'Tl-Ge-Pb', 'Tb-Ce-Tm', 'Gd-Lu-W', 'La-Dy-Mo', 'Co-Re-Pt', 'Yb-Sc-Cr', 'Al-Zn-Ge', 'Tl-Ni-Pb', 'K-Rb-Ti', 'Y-Th-U', 'Pm-Y-Er', 'Ce-Sm-W', 'La-Ho-V', 'Ce-Y-W', 'Na-Ta-Mo', 'Tb-Ce-Er', 'Sm-Gd-V', 'Cs-Li-Cr', 'Pr-Pu-Ti', 'Dy-Zr-Ta', 'Ca-Fe-Co', 'Lu-Ta-W', 'Al-Ga-Si', 'Pr-Th-Ta', 'Na-Li-Hf', 'Ir-Ru-Rh', 'Fe-Ru-C', 'Ho-V-Mo', 'Lu-Th-Mo', 'Pu-Ta-V', 'Lu-Th-Cr', 'Ca-Tm-V', 'La-Dy-Cr', 'Ce-Sc-Cr', 'Li-La-Sm', 'Mn-V-Cu', 'Ni-Ag-C', 'Li-Tb-Sm', 'Cs-Ta-Mo', 'Li-Ho-Mo', 'Cs-Pr-Hf', 'Hf-Zr-Ti', 'Sm-Th-U', 'Pr-Er-Mo', 'Yb-Dy-Ta', 'Tb-Gd-Dy', 'La-Yb-U', 'Mn-Tl-Cu', 'Yb-Pr-Ho', 'La-Y-Ho', 'Ce-Pr-Ti', 'La-Nd-Th', 'Ce-Y-Nb', 'Ca-Lu-V', 'Tb-Pr-V', 'Dy-Er-Pu', 'Ni-Pt-Rh', 'Ni-Rh-C', 'Hf-Mg-U', 'Ca-Tm-Pu', 'Al-Hg-Ge', 'Nd-Ho-Mo', 'Li-Sm-Ta', 'Pm-Ho-Tm', 'Ca-Yb-Sc', 'Co-Cu-Pb', 'Li-Tm-Lu', 'Er-Sc-Mo', 'Sr-Mn-V', 'Pr-Gd-Cr', 'Na-Li-Cr', 'Na-V-Cu', 'Na-Zr-Ti', 'Pd-W-Au', 'Li-Gd-Ta', 'Li-Lu-Zr', 'Rb-Li-Mg', 'Co-Hg-Ru', 'Dy-Y-Ta', 'La-Nd-Tm', 'Al-Sn-Pb', 'Na-Zr-Ta', 'Er-Tm-Ti', 'Sr-Ca-Nd', 'Rb-Ti-V', 'Y-Nb-V', 'Tb-Nd-Sc', 'Rb-Na-Zr', 'Cd-Ga-Si', 'Ca-Tb-Yb', 'Sn-Ge-Pb', 'Yb-Gd-Zr', 'Y-Ho-Lu', 'Yb-Y-Cr', 'Ce-Gd-Ho', 'Ba-Sm-Gd', 'Cr-Cd-Fe', 'La-Y-Mo', 'Ba-Mn-Ni', 'Gd-Pu-Cr', 'Tb-Th-W', 'Ba-Mn-V', 'Cu-Ni-Pt', 'Lu-Ti-Cr', 'Pr-Gd-Pu', 'Er-Ti-Nb', 'La-Nd-V', 'Mn-Co-Ru', 'Yb-Eu-Pu', 'Li-Pm-Ho', 'La-Sm-Lu', 'La-Eu-Nb', 'Sn-Ge-Bi', 'La-Er-V', 'Yb-Pr-Cr', 'Ce-Lu-V', 'Rb-Nb-Mo', 'Tl-Ag-Ge', 'Gd-Lu-Th', 'Y-Er-Lu', 'Tb-Lu-V', 'Fe-Ir-Os', 'Hg-Os-Ru', 'Ba-Yb-Y', 'Nd-Y-Mo', 'Ce-Sm-Tm', 'Ba-Pr-V', 'La-Pr-Dy', 'Rb-V-Mo', 'Ba-Ca-Pm', 'La-Tm-Pu', 'Lu-Th-Nb', 'Al-Ge-Bi', 'Li-Y-Lu', 'K-Mg-Zr', 'Hg-Ir-Ru', 'Nd-Th-Mo', 'Cs-Ta-Nb', 'Cu-Pd-W', 'Yb-Dy-Cr', 'Dy-Th-Cr', 'Hg-Ge-Bi', 'Cu-Ni-Pd', 'Y-Ti-V', 'Sm-Ho-V', 'Dy-Y-W', 'Tb-Nd-Ho', 'Ta-Ti-Mo', 'Tm-Lu-Ti', 'Li-Tm-V', 'Nd-Gd-Tm', 'Na-Cr-Fe', 'Li-Cr-Mo', 'Tb-Pm-Mo', 'Lu-Mo-W', 'Th-Ta-Ti', 'Cd-Ge-B', 'Th-Ti-Nb', 'Yb-Mo-W', 'Nd-Lu-W', 'Al-Cd-Pb', 'Tb-Nd-Th', 'Ag-Os-Pd', 'Yb-Cr-W', 'Ce-Zr-Sc', 'Co-Hg-Os', 'Ba-Sr-V', 'Nd-Y-Cr', 'Tb-Tm-Ta', 'Tb-Er-Th', 'Re-Ni-Ru', 'Y-U-Ti', 'Yb-Gd-Lu', 'Sc-Ti-Nb', 'Ce-Sm-Th', 'Pr-Gd-Ti', 'Nd-Y-Lu', 'Dy-Y-Cr', 'Ca-La-Pu', 'Ce-Lu-Nb', 'Cu-Ru-Rh', 'Si-Sn-Pb', 'Cu-Re-Ag', 'Ga-Ge-Bi', 'La-Eu-Th', 'Tb-Ce-Nd', 'Yb-Pr-Lu', 'K-Ti-Nb', 'K-V-Fe', 'Lu-Pu-Mo', 'Pm-Er-Cr', 'Pr-Sm-V', 'Al-Si-Pb', 'Sm-Gd-Th', 'Ni-Ir-Os', 'Cu-Re-Ir', 'Tl-Ge-B', 'Ba-Pm-Gd', 'Yb-Er-Pu', 'Fe-Bi-Os', 'Yb-Lu-W', 'Cs-Pr-V', 'Ca-Tb-Nd', 'Li-Ho-Lu', 'Tb-Er-Ta', 'Ca-La-Mo', 'Gd-Zr-Ti', 'Gd-Ho-Tm', 'Nd-Lu-Pu', 'Tb-Yb-Zr', 'La-U-Cr', 'Pm-Th-Cr', 'Ba-Ca-Eu', 'La-Ce-V', 'U-Nb-V', 'Ca-Ce-Pm', 'Ho-Er-Lu', 'Y-Er-Th', 'Gd-Tm-Pu', 'Yb-Tm-Ta', 'La-Eu-W', 'Rb-Hf-Ti', 'Li-Er-Ti', 'Pm-Er-Lu', 'Li-Hf-Sc', 'Sr-V-Fe', 'Pm-Tm-Mo', 'Er-Th-Cr', 'Ca-Lu-Ti', 'Li-Y-Tm', 'Ba-Ca-Ti', 'Tb-Pm-Dy', 'Sm-U-Cr', 'Ce-Eu-Ta', 'Nd-Y-Th', 'Fe-Co-Ru', 'Gd-Y-Ho', 'Cs-Mg-Nb', 'Ho-Th-V', 'Y-Th-Ti', 'Li-La-Lu', 'Li-Ta-Ti', 'Ce-Th-Sc', 'Li-Ti-Nb', 'Yb-Ho-Tm', 'K-Rb-Li', 'Er-Hf-Th', 'Cu-Tc-Mo', 'Ni-Rh-Au', 'Ni-Ag-Pd', 'Cr-Fe-Bi', 'Y-Sc-Ta', 'Tb-Nd-Lu', 'Dy-Er-Tm', 'Rb-Hf-Ta', 'Li-Tb-Lu', 'Sm-Gd-Y', 'Ir-Pd-Ru', 'Pm-Nd-Pu', 'Ba-Pm-Y', 'Y-Hf-Ti', 'Nd-Gd-Zr', 'Th-U-Ti', 'K-Mg-Fe', 'Ni-Pt-C', 'Cu-Pd-Ru', 'Gd-V-Mo', 'Co-Ag-Bi', 'Li-Ce-Cr', 'Tm-Th-Ta', 'Pm-Dy-V', 'Er-Sc-Ta', 'Sm-Th-Nb', 'Yb-Mn-V', 'K-V-Mo', 'Dy-Tm-Lu', 'La-Tb-W', 'Yb-Nd-Th', 'Y-Ho-Zr', 'Yb-Pu-Nb', 'Ce-Pr-Sm', 'Co-Re-Pd', 'Ce-Pu-Cr', 'Ag-Mo-Au', 'Ca-V-Mo', 'Tl-Cu-Ag', 'Tb-Lu-Cr', 'Be-Sn-Ge', 'Y-Er-Tm', 'Nd-Dy-Pu', 'Nd-Ho-Er', 'Be-Zn-Si', 'La-Pr-Cr', 'In-Ga-Ge', 'Li-Fe-Ni', 'Ni-Ru-C', 'Gd-Sc-W', 'Gd-Cr-Mo', 'Er-Tm-Ta', 'Cu-Mo-W', 'Pm-Ho-Mo', 'Hf-Th-Ta', 'Sc-Mo-W', 'Cr-Cd-Mo', 'U-Ta-Nb', 'Tb-Th-Cr', 'Co-Cu-Ag', 'Zn-Sn-B', 'Pm-Lu-Cr', 'Ba-Eu-Mo', 'Er-Lu-Pu', 'Ni-Ir-Rh', 'Li-Mn-Cu', 'Mg-U-Ti', 'Gd-Ti-W', 'Co-Ni-Pd', 'Yb-Er-Zr', 'Yb-Ho-Mo', 'Cu-Ir-C', 'Nd-Er-Th', 'U-Ti-Nb', 'Sm-Lu-Ta', 'Mn-Ag-Au', 'Pm-Th-Mo', 'Er-Lu-Zr', 'Nd-Tm-Lu', 'Sc-Ta-W', 'Dy-Er-Ta', 'Eu-Pu-V', 'Y-Th-Nb', 'Eu-Mo-W', 'Nd-Gd-Dy', 'Cs-Ti-Nb', 'La-Nd-Er', 'Nd-V-Cr', 'Zn-Si-Pb', 'Mg-Cd-Fe', 'Re-Ag-Pd', 'Sr-V-Mo', 'Fe-Ag-Bi', 'V-Cu-Ru', 'Sm-U-Ta', 'Ce-Pu-Ti', 'Na-Fe-Cu', 'Li-Sm-Ho', 'Yb-Ho-V', 'La-Yb-Zr', 'Li-Pu-V', 'Tm-V-Cr', 'Ta-Cu-W', 'Tb-Pm-Lu', 'Ni-Ag-Rh', 'Pm-Y-Pu', 'Pu-Zr-Ta', 'Eu-Pu-Zr', 'Th-Zr-Nb', 'K-Rb-Zr', 'Sm-Lu-Cr', 'Mg-Cd-Mo', 'Tb-Pr-Ho', 'Ce-Eu-U', 'La-Nd-Pu', 'Ru-Pt-C', 'La-Lu-Pu', 'Pm-Tm-V', 'Yb-Th-U', 'Ce-Pm-Ho', 'Co-Ni-Au', 'Si-Sn-Ge', 'Er-Th-Ti', 'Os-Pd-Rh', 'Hf-Mg-Zr', 'Mo-W-Au', 'Sm-Gd-Lu', 'Ca-Tb-Lu', 'Ho-Lu-W', 'Fe-Co-Rh', 'La-Sm-Dy', 'Be-Al-Bi', 'Er-Tm-Pu', 'Sn-Bi-B', 'Nd-Ta-Mo', 'Eu-Th-Cr', 'La-Nd-Sm', 'Pm-Nd-Cr', 'Dy-Th-Zr', 'Pm-Er-Tm', 'Tl-Zn-Ga', 'Y-Pu-W', 'Ba-Pm-Nd', 'Ce-Pr-Y', 'V-Cr-Mo', 'Ce-Th-Cr', 'Yb-Dy-Er', 'La-Er-Sc', 'Li-Mg-Cr', 'Y-Lu-Mo', 'Sm-Y-Nb', 'Ce-Eu-Hf', 'Ag-Ge-C', 'Sm-Ho-Cr', 'Na-Li-Cu', 'Tb-Yb-Sc', 'Pr-Gd-Ho', 'Dy-Y-Mo', 'Er-Pu-Cr', 'Na-Li-Nb', 'Pm-Nd-Er', 'La-Ce-Sm', 'Dy-Y-Ti', 'Ca-Nd-Mo', 'Nd-Sm-Er', 'Yb-Nd-Er', 'Li-Nb-Mo', 'Ca-Ce-Mo', 'Cs-Li-Pr', 'Y-Zr-Ta', 'Sm-Dy-Cr', 'Ho-Tm-Th', 'Dy-Y-Tm', 'Pu-Cr-Mo', 'Ce-Sc-V', 'Sm-U-V', 'La-Sm-Gd', 'Yb-Nd-U', 'Pr-Dy-Ho', 'Ho-Er-V', 'Lu-Th-Zr', 'Yb-Nd-Sc', 'Rb-Ta-Nb', 'Gd-Er-Lu', 'Ho-Sc-Mo', 'Tc-Pd-Rh', 'Ce-Tm-Th', 'Cu-Pt-Rh', 'La-Ho-Tm', 'Sm-Ho-Er', 'La-Gd-Cr', 'Al-Zn-Cd', 'Cs-Pr-Ta', 'Pm-Pr-Nd', 'Os-Pt-Rh', 'Er-Mo-W', 'Gd-Dy-Ho', 'Tb-Er-Tm', 'Ce-Nd-Sm', 'Be-Al-Ga', 'Cu-Tc-Ni', 'Nd-Pu-Mo', 'Ca-La-Tb', 'Be-Zn-Bi', 'Cu-Rh-Au', 'Lu-Pu-Nb', 'Pr-Nd-Th', 'Rb-Na-Mo', 'Yb-Pr-Nd', 'Ce-Pr-V', 'Hf-Mg-Nb', 'Tb-Th-Mo', 'Co-Ag-Os', 'Li-Tb-Ti', 'Yb-Tm-Ti', 'Yb-Y-Th', 'Yb-Ta-V', 'Sc-Ta-V', 'La-Lu-Ti', 'Ca-Ce-Pu', 'Ce-Ho-Ta', 'La-U-Ti', 'Pu-Ta-Mo', 'Yb-Y-Tm', 'Er-Zr-Ti', 'U-Cr-Ag', 'Dy-Tm-V', 'Si-Ag-Bi', 'Tb-Y-V', 'Pr-Gd-Tm', 'Ce-Er-Th', 'Tl-Cu-B', 'Ho-Sc-W', 'Li-Mg-Nb', 'Y-Lu-W', 'Sc-V-Cr', 'Cu-Bi-B', 'Tl-Zn-B', 'Nd-Ho-V', 'Ni-Pt-Au', 'Sm-Er-Cr', 'Li-Lu-Pu', 'Yb-Y-Mo', 'Ce-Th-Zr', 'Pr-Lu-Cr', 'Ir-Os-Ru', 'Er-Cr-Mo', 'Tb-Sm-V', 'Dy-Ti-W', 'Nb-Tl-Mo', 'La-Lu-Mo', 'Ag-Pd-Rh', 'Hf-Sc-Ta', 'Re-Os-Pt', 'La-Th-W', 'Pm-Y-Th', 'Y-Hf-Ta', 'Pr-Y-Ta', 'Na-Hf-Zr', 'Tl-V-Cu', 'Gd-Y-Pu', 'Li-Pu-Cr', 'Pr-Sm-Dy', 'Ce-Gd-Ti', 'Mn-Fe-Ag', 'Y-Th-W', 'Ba-Eu-V', 'Ce-Ho-Zr', 'Gd-Zr-Sc', 'Ce-Y-Zr', 'Mn-Ni-Pb', 'Tb-Pr-Er', 'Nd-Lu-Cr', 'Nb-Cu-Bi', 'Li-Ho-V', 'Li-Sm-Tm', 'Al-Ge-Pb', 'Tb-Pu-Ti', 'Tb-Ta-Mo', 'Nd-Sc-Ta', 'Sr-Sc-V', 'Er-Pu-Ti', 'Mg-Nb-Mo', 'Dy-Pu-V', 'Gd-Tm-Ti', 'Na-Li-Be', 'Sm-Ta-V', 'La-Pr-Y', 'Ce-Ti-Nb', 'Ce-Er-Lu', 'Er-Lu-W', 'Lu-Pu-V', 'Fe-Ir-C', 'Li-Y-V', 'Pm-Pr-Ho', 'Th-Sc-Cr', 'Tl-In-Ge', 'Tm-Pu-Ta', 'Tc-Ni-Rh', 'La-Yb-Y', 'Li-Pr-Ti', 'Sr-Nd-Ti', 'Ce-Sc-W', 'La-Th-V', 'Li-Ce-Zr', 'Ba-La-V', 'La-Y-Lu', 'Ce-Pr-Hf', 'Cs-K-Hf', 'Sm-Gd-Pu', 'Li-Ta-V', 'La-Yb-Lu', 'La-Dy-Zr', 'Y-Pu-Ta', 'Th-Zr-Ta', 'Ho-Tm-Lu', 'Ce-Lu-Cr', 'Tb-Mo-W', 'La-Pu-Ta', 'La-Pr-Tm', 'Cs-Ti-Mo', 'Bi-Sb-P', 'Mn-Cu-Au', 'Mg-Ti-Cr', 'Er-Th-Ta', 'Th-Ti-Cr', 'Cr-Cu-Ni', 'Er-Nb-W', 'Tb-Tm-Lu', 'Li-La-Pr', 'Ce-U-Ta', 'Tc-Ni-Ir', 'Pr-Ho-W', 'Li-Cr-Fe', 'La-Sm-W', 'Fe-Cu-Ir', 'Co-Cu-C', 'Nb-Tl-V', 'Co-Pt-Rh', 'Ce-Er-Zr', 'Re-Ir-Rh', 'Lu-Pu-Zr', 'Eu-Nb-V', 'Ce-Sc-Ta', 'Ir-Pd-Pt', 'Hg-Ir-Os', 'Y-Sc-Mo', 'La-Th-Zr', 'Tl-V-Mo', 'Co-Cu-Os', 'Pm-Y-Mo', 'Ce-Pr-Pu', 'Tb-Pr-Mo', 'Yb-Th-V', 'Pm-Dy-Ho', 'Co-Ru-Au', 'Tb-Yb-Y', 'Gd-Y-Sc', 'Dy-Ho-Zr', 'La-Ta-Nb', 'La-Tm-Ta', 'U-Ti-Cr', 'La-Pm-Y', 'Cs-K-Nb', 'Tb-Nd-Zr', 'Nd-Th-Ta', 'Li-Lu-V', 'Sm-V-Mo', 'La-Nd-Mo', 'Gd-Zr-Ta', 'Ce-Nd-Tm', 'Tb-Yb-Gd', 'Ce-Th-V', 'Pr-U-Ti', 'La-Er-Cr', 'Dy-Y-Pu', 'Li-Pr-Y', 'Ce-Er-Mo', 'Dy-Y-Th', 'Er-Sc-Nb', 'La-Nb-Mo', 'Ca-Ce-Tm', 'Eu-U-Nb', 'La-Sc-U', 'Li-Ce-Er', 'La-Dy-Tm', 'Lu-Ta-Mo', 'Gd-Y-Zr', 'Li-Ce-Mn', 'Cr-Cd-Pb', 'La-Tm-Ti', 'Rb-Mg-Cr', 'Tb-Gd-Pu', 'Eu-Sc-V', 'Co-Ag-Au', 'La-Tb-Ta', 'Rb-Mg-Ti', 'Cu-Ir-Pt', 'Rb-Hf-Nb', 'Gd-Ta-Ti', 'Er-Pu-W', 'V-Cu-Pd', 'Dy-Pu-W', 'Sc-Ti-V', 'Tb-Gd-Zr', 'Li-Tb-V', 'Er-Ta-Mo', 'V-Cr-Hg', 'La-Y-Ti', 'Ta-Cu-Mo', 'Ta-Nb-Bi', 'Nd-Sm-Ta', 'V-Fe-Ag', 'Yb-Eu-Nb', 'La-Nb-V', 'Pd-Au-C', 'Sc-Cr-W', 'Mn-Co-Cu', 'Yb-Nd-Mo', 'Sm-Er-V', 'Ce-Pr-U', 'Ag-Ir-Pd', 'Nd-Ti-Cr', 'Li-Y-Zr', 'La-Ce-U', 'Al-Si-Sn', 'La-Eu-Cr', 'In-Si-Ge', 'V-Cr-Cu', 'Al-Sn-Ge', 'Ba-Mn-Fe', 'Th-Ti-V', 'Cs-Li-Mo', 'Ca-Pu-Ti', 'Al-Si-Bi', 'Li-Mg-Fe', 'Yb-U-V', 'Mn-Tl-Cd', 'Fe-Ir-Rh', 'Tb-Nd-Pu', 'Nd-Er-Zr', 'Ba-Sr-Ca', 'La-Eu-Y', 'Sm-Ho-Lu', 'Y-Ho-Tm', 'Tc-Ir-Pd', 'Cs-Hf-Nb', 'Gd-Ti-Mo', 'Dy-Tm-Mo', 'La-Pm-Th', 'Yb-Pu-Zr', 'Ce-U-Nb', 'Ir-Os-Pt', 'Ce-Sm-Ho', 'Tb-Y-Ta', 'Pm-Y-V', 'Pr-Th-Cr', 'Tb-Ce-W', 'Hg-Bi-B', 'Tb-Ce-V', 'Pr-Y-Ho', 'Cu-Ni-Rh', 'Fe-Co-Pb', 'Pr-Tm-Pu', 'Zn-Sn-Ge', 'Yb-Eu-Y', 'Cd-Fe-Pb', 'La-Gd-Sc', 'Ga-Bi-B', 'Sm-Gd-Tm', 'Co-Pt-Au', 'Ce-Er-Hf', 'Tb-Ce-Y', 'Sr-Ti-Mo', 'Cr-Fe-Cu', 'Yb-Hf-U', 'Eu-Hf-Ta', 'Zn-Ge-B', 'Ca-Sc-V', 'Nd-Sm-Cr', 'Ce-Tm-Ti', 'Na-Ca-Mo', 'Tl-Cd-Si', 'Nd-Lu-V', 'Li-Sc-V', 'Pr-Dy-Th', 'Pr-Th-W', 'Co-Cu-Pd', 'Tb-Pu-W', 'Li-Ti-Mo', 'Pm-Y-Lu', 'La-Y-Th', 'Pr-Sm-Er', 'Pr-Ho-Mo', 'Yb-Gd-Ta', 'Gd-Er-Pu', 'Ho-V-W', 'Yb-Dy-Th', 'Li-Mg-Ti', 'Yb-Er-Tm', 'Lu-Ti-Nb', 'Ca-Nd-Tm', 'Tb-Ce-Th', 'Dy-Ta-Mo', 'Sr-Ca-Mo', 'Tb-Ti-Mo', 'Pr-Y-V', 'Yb-Pr-Ti', 'Cd-Ga-Pb', 'Tb-Th-Zr', 'La-Ce-Lu', 'Sm-Pu-Mo', 'Li-Sm-V', 'Ba-Yb-Pr', 'Gd-Ho-Ta', 'Eu-Pu-Cr', 'La-Er-Pu', 'Pm-Lu-Pu', 'Ce-Pr-W', 'U-V-Ag', 'Cs-Li-V', 'Yb-Y-Ho', 'La-Th-Cr', 'Tb-Sc-Cr', 'Eu-Ta-W', 'Cs-Rb-Zr', 'Pm-Gd-Mo', 'Sr-Ti-V', 'Cu-Ru-Au', 'La-Sm-Pu', 'La-U-Nb', 'Pr-Gd-Th', 'Er-V-Mo', 'Ho-Lu-Cr', 'Yb-Er-Ta', 'Y-Lu-Zr', 'Cr-Ag-Bi', 'Sm-V-W', 'Li-Y-Er', 'Gd-Ho-Cr', 'Sc-U-Ti', 'Rb-Mg-Nb', 'Th-Ta-W', 'K-Hf-Zr', 'Ho-Lu-Ta', 'Ba-Nd-Sm', 'Rb-Na-Nb', 'Ce-Sm-Nb', 'Pr-Cr-Mo', 'Ba-Pr-Mo', 'Li-Nd-Tm', 'Re-Os-Ru', 'Eu-Cr-W', 'Nd-Er-Ti', 'Cs-Rb-Mo', 'Tb-Pm-Tm', 'Cs-K-Ti', 'Na-Sr-V', 'La-Ce-Eu', 'La-Gd-Pu', 'Tb-Lu-Pu', 'Th-U-V', 'Li-Zr-Ta', 'Lu-Th-W', 'Tb-Nd-Sm', 'Nb-Bi-Mo', 'Cd-Si-Bi', 'Sm-Ho-Tm', 'Be-In-Si', 'Sr-Ca-Fe', 'Pd-Pt-Au', 'Pm-Pr-Mo', 'La-V-Cr', 'Ce-Gd-Tm', 'La-Ce-Mn', 'La-Th-U', 'K-Li-Hf', 'Ho-Er-Tm', 'Nd-Gd-Lu', 'Ce-Sm-Cr', 'Nd-Dy-Cr', 'Tb-Lu-Zr', 'Er-Pu-Zr', 'Sm-Cr-Mo', 'Pm-Sm-Tm', 'Sc-U-Ta', 'Cs-Cr-Mo', 'Yb-Hf-Ta', 'Pr-Th-V', 'Zn-Ga-Pb', 'Yb-Nd-Ta', 'Er-Zr-Nb', 'Pm-Sm-Lu', 'Mn-Cd-Fe', 'Ba-La-Gd', 'La-Tb-Gd', 'Yb-Nd-Ho', 'Pr-Y-W', 'Er-Ta-Ti', 'Co-Re-Os', 'Co-Ni-Os', 'La-Ce-Ti', 'Sm-Y-Er', 'Pm-Sm-V', 'Yb-Y-Pu', 'Hf-Mg-Ti', 'Pr-Ho-Th', 'Pm-Pr-Dy', 'Pm-Sm-Gd', 'K-Mg-Mo', 'V-In-Fe', 'Yb-Ta-Nb', 'Li-Tb-Sc', 'Y-Th-V', 'Th-Cr-Mo', 'Ba-Eu-Y', 'Ce-Sm-V', 'Pr-Lu-Th', 'Ba-Ca-Fe', 'Ge-Bi-B', 'Ce-Th-Ti', 'Rb-Zr-Ta', 'Yb-Pr-Hf', 'Si-Ge-Au', 'Li-Er-Sc', 'Ba-La-Sm', 'Er-Zr-Ta', 'Ce-Pr-Gd', 'Y-Ta-Ti', 'Na-Ta-Ti', 'Yb-Tm-V', 'Tb-Pm-Th', 'Sm-Pu-W', 'Pr-Tm-Th', 'Ba-Sc-Mo', 'Ag-Bi-Mo', 'Nb-Cu-Mo', 'Tb-Ho-Zr', 'Pm-Sm-Ho', 'Zn-Ge-Bi', 'Tb-Pr-W', 'Ca-Ce-Mn', 'Tm-Ti-V', 'Tc-Ni-C', 'Eu-Pu-W', 'La-Tb-Sm', 'Yb-Lu-Ta', 'Yb-V-Mo', 'Ce-Y-Th', 'Tb-Nd-Ti', 'Cu-Ir-Pd', 'Ba-La-Mo', 'La-Gd-Er', 'Ga-Sn-Ge', 'Tb-Ho-Ta', 'Er-Th-V', 'Pr-Y-Hf', 'Dy-Zr-Ti', 'Lu-V-Cr', 'Pr-Gd-V', 'La-Ti-Mo', 'Tb-Pu-Zr', 'Lu-Nb-Mo', 'Cs-Rb-Mg', 'Fe-Co-Ni', 'K-Ti-Mo', 'Tb-Yb-Mo', 'Fe-Au-C', 'Dy-Ho-Pu', 'Y-Pu-Zr', 'Tb-Pr-Th', 'Sc-Ta-Mo', 'Gd-Ho-Mo', 'Li-Y-Hf', 'Mn-V-Ru', 'Yb-Ti-Mo', 'Sm-Y-Pu', 'La-Nd-Lu', 'Ga-Si-Sn', 'Ba-Y-Sc', 'Nd-Y-U', 'Gd-Lu-Cr', 'Eu-Ta-Mo', 'Er-Tm-Th', 'Be-Ga-Bi', 'K-Li-Fe', 'Tl-V-Ag', 'Co-Os-Ru', 'V-Hg-Mo', 'Fe-Co-C', 'La-Tb-Th', 'Pr-Dy-Pu', 'Ta-Nb-W', 'Li-Pu-Ti', 'Zn-In-Ga', 'Tb-Ce-Zr', 'Ca-Yb-Lu', 'La-Y-Er', 'Yb-Ho-Er', 'La-Lu-Cr', 'Li-Ho-Cr', 'Yb-Pr-Tm', 'Li-Pr-Cr', 'Ho-Th-Sc', 'Pr-Sm-W', 'Tb-Lu-Mo', 'Yb-Eu-Mn', 'Nd-V-Mo', 'Ga-Hg-Pb', 'Pm-Nd-Y', 'Ba-Gd-Mo', 'Ni-Ru-Pt', 'Y-Er-Sc', 'Ca-Lu-Mo', 'Al-Zn-Sn', 'Th-V-Mo', 'Fe-Ni-Pd', 'Tb-Sm-Mo', 'Li-Pu-Ta', 'Pm-Dy-Tm', 'Fe-Co-Cu', 'Gd-Th-V', 'Dy-Ti-V', 'La-Ce-Gd', 'Yb-Th-Sc', 'Tb-Ho-Sc', 'Tb-Y-Zr', 'Tc-Ir-Rh', 'Ce-Nd-Ti', 'Yb-Y-U', 'Na-V-Cr', 'Nd-Lu-Th', 'Ho-Pu-Zr', 'Ba-Ca-Y', 'Fe-Os-Ru', 'Pm-Ho-Th', 'Gd-Th-Cr', 'Tb-Dy-Ti', 'La-Sc-V', 'Sr-Mn-Fe', 'La-Mo-W', 'Dy-Lu-Ta', 'Tl-Zn-Si', 'Nb-Tl-Cu', 'Pu-Np-Cr', 'Ir-Pt-C', 'Yb-Dy-Ti', 'Li-Pu-Mo', 'Pr-Tm-Mo', 'Nd-Dy-Er', 'Ce-Tm-V', 'Be-Al-Si', 'Dy-Th-V', 'Al-Cd-Si', 'La-Er-Nb', 'Tb-Nd-Ta', 'Eu-Hf-Nb', 'Re-Os-Pd', 'Nd-Tm-Cr', 'Sm-Tm-Th', 'Cs-Ta-V', 'Tb-Pu-Mo', 'Mg-Mn-V', 'Cu-Pd-Pt', 'Li-Er-Hf', 'Li-Lu-Ta', 'Y-Lu-Pu', 'Yb-Ho-Pu', 'Li-Sm-Y', 'Dy-Ti-Mo', 'Ca-Ti-V', 'Pr-Hf-U', 'La-Yb-Gd', 'Eu-Mn-V', 'Tb-Ti-Cr', 'Yb-Nd-Cr', 'Ti-Cr-Mo', 'Mg-Zr-Nb', 'Ta-Ti-Nb', 'Li-Nd-Sm', 'Tl-Ag-Pb', 'Tb-Gd-V', 'Gd-Pu-W', 'Cu-Pd-Rh', 'Li-Zr-Sc', 'Gd-Cr-W', 'Cu-Ru-Pt', 'Li-Er-Cr', 'Yb-Sc-Mo', 'Gd-Er-Cr', 'Pr-Lu-Pu', 'V-Fe-Bi', 'La-Gd-Ta', 'Ta-V-Bi', 'Tb-Cr-Mo', 'Cr-Mo-Au', 'Tb-Ce-Lu', 'Ca-La-Fe', 'Gd-Y-Cr', 'Cr-Fe-Pb', 'Cr-Bi-Mo', 'Ce-Pr-Mo', 'Sr-Sc-Ti', 'Ag-Ge-Bi', 'Y-Ta-V', 'Er-V-Cr', 'Sm-U-Nb', 'Cr-Hg-Mo', 'La-Pr-Pu', 'Ca-Ce-V', 'Th-V-W', 'Ba-Nd-Sc', 'Ce-Eu-Sc', 'Y-Ta-W', 'Cs-Li-Hf', 'Tb-Nd-Gd', 'K-Rb-Mo', 'Ca-Tm-Lu', 'Tb-Dy-Th', 'Ce-Pu-Ta', 'Yb-Hf-Nb', 'Y-Sc-W', 'Gd-Dy-Cr', 'Yb-Pu-Mo', 'Ce-Pr-Nd', 'Dy-Er-Mo', 'Y-Er-Zr', 'Hf-Th-Sc', 'Cu-Mo-Pb', 'Ho-Pu-Cr', 'Na-Mg-Mo', 'Cu-Re-Ru', 'Si-Ag-Ge', 'Ba-La-Eu', 'Pm-Lu-Th', 'Mn-V-Fe', 'Ca-La-Pm', 'Pr-U-V', 'Nd-Er-Tm', 'Re-Ni-Os', 'Gd-Y-Ti', 'Ce-Hf-Sc', 'La-Nd-Ti', 'Yb-Ho-Sc', 'Al-Cd-Bi', 'Al-Tl-Si', 'Tb-Sm-Lu', 'Pm-Sm-Er', 'Ce-Ti-W', 'Pr-Gd-Y', 'Dy-Cr-W', 'Zn-Sn-Bi', 'Rb-Mg-Mo', 'Tl-In-Mo', 'Ca-V-Fe', 'Th-Ta-Nb', 'Gd-Er-Ti', 'La-Er-W', 'Nd-Th-U', 'Ce-Pm-V', 'Tb-Y-Pu', 'Gd-Th-Mo', 'Yb-Pr-Mo', 'Yb-Hf-Ti', 'Rb-Ta-Ti', 'Dy-Pu-Ti', 'Be-Ga-Sn', 'Y-Ho-Pu', 'Ba-Yb-V', 'Yb-Y-Sc', 'Tb-Nd-Y', 'Ho-Zr-Ta', 'Pm-Gd-Tm', 'Li-Mn-V', 'Ce-Eu-Mn', 'Be-Al-Zn', 'Zn-Ge-Pb', 'Pr-Ho-Ta', 'Tb-Y-Ho', 'Li-Sm-Lu', 'Dy-Pu-Mo', 'Ba-Ca-Mn', 'Ho-Th-Cr', 'Er-Hf-Nb', 'Ca-Pu-V', 'Os-Pd-Pt', 'Pr-Pu-W', 'Cr-Ag-Pb', 'La-Ce-Sc', 'Mn-Cu-Pb', 'Yb-Sc-Nb', 'La-Nd-Ta', 'Ce-Ho-W', 'Re-Ag-Rh', 'Tl-Mo-Pb', 'Sm-V-Cr', 'Co-Ir-Rh', 'Pm-Gd-Pu', 'Ce-Er-Ti', 'Ce-Sm-Ta', 'La-Tb-Cr', 'Yb-Gd-Ti', 'Cu-Ni-Os', 'Rb-V-Cr', 'Yb-Zr-Ta', 'Nd-Sc-V', 'Tl-Cd-Pb', 'Tb-Sm-Gd', 'Sm-Gd-Dy', 'Tb-Yb-Dy', 'Li-Er-Mo', 'Pr-Er-Cr', 'Mg-U-Cr', 'La-Ce-Ho', 'Th-Sc-Nb', 'Nd-Gd-Y', 'Eu-Hf-Sc', 'Ce-Sc-Ti', 'Gd-Pu-V', 'Er-Ti-W', 'Ca-Pm-Lu', 'Co-Cu-Ru', 'Yb-Eu-Zr', 'Sm-Lu-W', 'Y-U-Ta', 'Y-Th-Sc', 'V-Mo-W', 'Ce-Tm-Mo', 'Cs-Ti-Cr', 'Nd-Dy-Ti', 'Li-Ho-Sc', 'Si-Ag-Au', 'Yb-Sc-W', 'Tl-Cd-Ga', 'Tb-Th-Sc', 'Ce-Cr-Mo', 'Yb-Pr-Er', 'Nd-Th-Zr', 'Pr-Nd-Sm', 'Li-Sc-Cr', 'Yb-Ho-Th', 'Tb-Ho-Cr', 'La-Pu-W', 'Nd-Dy-Y', 'Pm-Nd-Tm', 'Li-Tb-Pr', 'Gd-Ta-Mo', 'Li-La-Ti', 'Pu-Ti-W', 'Na-Ca-V', 'Y-Nb-W', 'Ce-Y-Mo', 'Hf-Sc-Nb', 'La-Tm-V', 'Ho-Lu-V', 'Ca-Sc-Ti', 'Nd-Sc-W', 'La-Tb-Sc', 'Yb-Gd-Dy', 'Tc-Pd-C', 'Li-V-Cr', 'Li-Sm-Nb', 'Be-Ge-Bi', 'Ca-Tb-V', 'K-Nb-Mo', 'Pm-Gd-Cr', 'La-Sm-U', 'Ca-Yb-V', 'Nd-Gd-Th', 'Pm-Pu-Mo', 'Yb-Th-Cr', 'Ce-Hf-Ti', 'Dy-Tm-Ti', 'Yb-Ta-W', 'Cu-Pd-Au', 'La-Tb-Ho', 'Tm-Pu-Cr', 'Tb-Ho-Th', 'La-Sc-Ta', 'Sm-Ta-Nb', 'Li-Mn-Fe', 'Ce-Gd-W', 'Sc-Nb-W', 'Ta-V-W', 'Nd-Sm-Dy', 'Nd-Ho-Pu', 'La-Er-Mo', 'La-Y-Ta', 'Ca-Nd-V', 'Re-Hg-Os', 'Tb-Dy-V', 'La-Tb-Nd', 'La-Zr-Sc', 'Cu-Tc-Rh', 'Li-Tm-Cr', 'Si-Ge-Pb', 'Gd-Y-Ta', 'Sm-Ta-Mo', 'Na-Mg-Fe', 'La-Ce-W', 'Th-Nb-V', 'Y-Nb-Mo', 'La-Ta-Mo', 'Dy-Tm-Pu', 'La-Pr-V', 'Ca-La-Ti', 'Pr-Dy-W', 'Ce-Nd-Cr', 'Lu-Zr-Ta', 'Y-Pu-Ti', 'Li-Ce-Mo', 'La-Eu-Sc', 'Nd-Sm-U', 'La-Tb-Zr', 'Li-Ce-Nb', 'Dy-Y-Lu', 'Zn-Ga-B', 'Y-Zr-Sc', 'Li-Pm-Y', 'Pm-Nd-Gd', 'Pr-Ti-W', 'Ba-La-Pr', 'Fe-Co-Pd', 'Pr-Nd-Ta', 'Tl-In-Ga', 'Li-Pm-V', 'Nd-Lu-Ta', 'Pr-Nd-Tm', 'Pr-Th-Ti', 'Ce-Y-Cr', 'Tb-Ce-Ta', 'V-Cr-Ag', 'Fe-Rh-C', 'Cs-K-Zr', 'Er-Tm-Cr', 'Tb-Y-Lu', 'K-Cr-Mo', 'Gd-Ti-V', 'La-Th-Ta', 'Yb-Ta-Mo', 'Ho-Th-Mo', 'Pr-Ho-Cr', 'Mg-V-Fe', 'Ta-Nb-V', 'Li-Mg-Mo', 'Nd-Lu-Zr', 'Tm-Th-Ti', 'K-Hf-Mg', 'Cs-Mg-Mo', 'Pr-Ta-W', 'Ba-Gd-Ti', 'Sm-Er-Nb', 'Yb-Eu-Mo', 'Pr-Ti-Cr', 'La-Pm-Sm', 'Li-Nd-Ti', 'Yb-Dy-Pu', 'Li-Gd-Zr', 'Ta-Nb-Tl', 'Fe-Cu-Ru', 'Pm-Pr-Sm', 'Fe-Cu-Pb', 'Dy-Th-Ta', 'Nb-Hg-Bi', 'Er-V-W', 'Sr-Y-V', 'Dy-Th-W', 'Tb-Yb-Ho', 'Nd-Y-W', 'Be-Zn-Sn', 'Eu-Y-Ta', 'Yb-Y-Ti', 'Ce-Gd-Mo', 'Gd-Th-Zr', 'Tl-Si-Ge', 'Sm-Dy-Pu', 'La-Ho-W', 'Cs-Li-Ti', 'Cu-Bi-Mo', 'Yb-Y-Er', 'Ce-U-Cr', 'Li-V-Cu', 'Gd-Er-Sc', 'Yb-Dy-Ho', 'Re-Ni-Ag', 'Ca-Nd-Ti', 'Yb-Pu-Ti', 'La-Tb-Mo', 'Ir-Rh-C', 'Al-Tl-Ga', 'La-Ti-Nb', 'Nd-Gd-Pu', 'Al-Cd-Ge', 'Li-Ho-Ta', 'Ho-V-Cr', 'Li-Gd-Sc', 'Ga-Re-Bi', 'Yb-Lu-Zr', 'Li-Pr-V', 'U-Ta-W', 'Yb-Tm-Pu', 'Ce-Ho-Lu', 'Fe-Ir-Pd', 'Gd-Pu-Ti', 'Tb-Gd-Th', 'Ca-La-V', 'Ce-Nd-Pu', 'Yb-Eu-U', 'Ta-V-Mo', 'Th-Nb-Mo', 'Ca-Tm-Mo', 'Er-Sc-W', 'Sm-Cr-W', 'Ce-Pm-Cr', 'Pr-Sm-Ta', 'Ta-Tl-In', 'Li-Tb-Pm', 'Ba-Pm-Pr', 'Li-Gd-Ho', 'Hg-B-Sb', 'Gd-Tm-Lu', 'Tb-Pr-Dy', 'Ce-Gd-Cr', 'Ho-Tm-Mo', 'Y-U-V', 'Ir-Pt-Rh', 'La-Tb-Yb', 'Li-Ti-V', 'Tm-Lu-Pu', 'Tb-Pr-Nd', 'Pr-Ta-V', 'Re-Bi-Os', 'Co-Cu-Bi', 'Nd-Ho-Cr', 'La-Pm-Tm', 'Ca-Eu-V', 'Ba-Sc-Ti', 'Na-Nb-Cu', 'Cs-Li-Zr', 'Gd-Dy-Lu', 'La-Ce-Cr', 'Cu-Re-Os', 'Li-Mg-Zr', 'Ce-Pu-Zr', 'Ca-La-Yb', 'Ce-Y-Pu', 'Zn-Cd-Ga', 'Nd-V-W', 'V-Fe-Ru', 'Tb-Dy-Er', 'Hf-Th-U', 'Sc-V-W', 'La-Y-Pu', 'Al-In-Si', 'Be-Ga-Ge', 'Os-Ru-Pt', 'Ag-Ge-Pb', 'Pm-Y-Tm', 'Li-La-Ho', 'Cs-Zr-Ti', 'Ce-Sc-Mo', 'Pr-Nd-Mo', 'Li-Tm-Ti', 'La-Ho-Sc', 'Nd-Tm-Mo', 'Th-Ta-Mo', 'Er-Tm-Mo', 'Gd-Y-W', 'Lu-Ta-V', 'Lu-Th-Ta', 'Ce-Er-Cr', 'Ce-Ti-Mo', 'Li-Ce-Gd', 'Ce-Th-U', 'Li-Hf-Nb', 'Yb-Ho-Ta', 'Li-Pm-Cr', 'Ce-Gd-V', 'Cs-K-Cr', 'Tb-Ti-W', 'Ce-Tm-Cr', 'Ho-Lu-Pu', 'Y-Er-Ti', 'Gd-Dy-Ti', 'Gd-Pu-Zr', 'Li-Cr-Cu', 'Co-Bi-Os', 'Gd-Pu-Ta', 'Co-Ru-Rh', 'Gd-Lu-Ti', 'Li-La-Ce', 'Be-Al-Ge', 'Gd-Y-Lu', 'Pr-Dy-Tm', 'Yb-Cr-Mo', 'La-Gd-Zr', 'Tl-Cu-Pb', 'Cr-Ag-Mo', 'Tb-Tm-Ti', 'Nd-Y-Pu', 'Eu-Th-V', 'Ga-Ge-Pb', 'Li-Pm-Lu', 'Li-Nd-Lu', 'Ba-Pr-Ti', 'Li-V-Mo', 'Pr-Y-Mo', 'Ce-V-Cr', 'Dy-Er-V', 'Ca-Eu-Pu', 'Ni-Pd-Pt', 'Er-Lu-Ta', 'Ba-Y-V', 'Pr-Nd-Lu', 'Ce-Nd-Y', 'Na-Mg-Ti', 'Cu-Ag-Ir', 'La-Ce-Mo', 'La-Er-Lu', 'Tc-Ni-Pd', 'Ti-Nb-V', 'Tb-Ce-Gd', 'Hf-U-Ti', 'Lu-V-Mo', 'Ta-V-In', 'Co-Ir-Pt', 'Na-Ti-Nb', 'Yb-Hf-Th', 'Mn-Cu-Ag', 'Ce-Nd-U', 'Pr-Gd-Ta', 'Ca-Pm-V', 'Nd-Gd-Cr', 'Yb-Eu-V', 'Al-Hg-Pb', 'V-Cr-Bi', 'Ce-Nd-Ho', 'Ho-Er-Th', 'Tb-Nd-Mo', 'Ca-Tb-Pm', 'Nd-Ho-Ta', 'Pu-Ta-W', 'V-Cu-Mo', 'Tb-Cr-W', 'V-Cu-Ag', 'Fe-Ni-Os', 'Lu-Th-V', 'Fe-Ni-C', 'Ca-Y-Sc', 'Ca-Ce-Eu', 'Rb-Ti-Cr', 'Nd-Sm-Th', 'Co-Re-Bi', 'Gd-Lu-V', 'Eu-Pu-Ta', 'Pu-Zr-Ti', 'Pm-Sm-Y', 'La-Ce-Er', 'Ga-Sn-Bi', 'Ba-Sr-Sc', 'Co-Re-Hg', 'La-Lu-W', 'Cs-Nb-Mo', 'La-Y-V', 'Ce-Sm-Er', 'Co-Ni-Ru', 'Mg-Cr-Mo', 'Sc-Nb-Mo', 'Sm-U-W', 'Ce-Ta-Ti', 'Li-Y-Pu', 'Tb-Dy-Pu', 'Cs-Rb-Cr', 'Cs-Rb-V', 'Ce-Gd-Ta', 'Mg-Ti-Mo', 'K-Ta-V', 'Rb-Na-Mg', 'Ba-Gd-V', 'Ca-Tb-Mo', 'Pr-Er-Hf', 'Si-Ge-Bi', 'Y-Er-Hf', 'Zn-Si-Bi', 'Li-Pm-Mo', 'Yb-Lu-Pu', 'La-Dy-Lu', 'La-Pm-Er', 'Hf-Zr-Ta', 'K-Hf-Nb', 'Lu-Ti-W', 'Li-Pu-Zr', 'Cd-Ga-Ge', 'Cd-Ga-B', 'Gd-Y-V', 'Cu-W-Au', 'Yb-Nd-Lu', 'Er-Tm-V', 'Tb-Gd-Y', 'Er-Lu-Mo', 'Tc-Pt-Rh', 'Dy-Ta-Ti', 'Cu-Pd-C', 'Y-V-Mo', 'La-Yb-Dy', 'Lu-Nb-W', 'Cr-Cu-Au', 'Y-Sc-Nb', 'Li-La-Nd', 'Tb-Sm-Pu', 'Tb-Y-Tm', 'Ce-Er-Sc', 'Gd-Dy-Mo', 'Ca-Ce-Nd', 'Ta-Tl-Mo', 'Pr-Nd-Er', 'Li-Pr-Nd', 'La-Pr-Ta', 'Tm-Cr-W', 'Ce-Ho-V', 'Ba-Yb-Ti', 'Na-Ti-Cr', 'Er-Th-Sc', 'Er-Ti-V', 'Cd-Ge-Pb', 'Ba-Eu-Mn', 'Re-Ag-Ir', 'Pr-Ti-V', 'Lu-Ta-Nb', 'Fe-Co-Ag', 'Li-Mn-Ni', 'Nd-Ho-Zr', 'La-Pm-Cr', 'Mg-Nb-V', 'Ce-Pm-Tm', 'Pd-Ru-Pt', 'Gd-Sc-Mo', 'Nd-Pu-Ti', 'Pr-Gd-Mo', 'Sc-U-W', 'Co-Cu-Rh', 'Eu-V-Cr', 'Y-Tm-Th', 'Tb-Lu-Ti', 'La-Nd-Y', 'Th-Ti-W', 'Li-Nd-Cr', 'Pm-Gd-Th', 'Tl-Cu-Ni', 'Pr-U-Cr', 'Ca-Tb-Y', 'Co-Pd-Rh', 'Li-Pm-Nd', 'Cu-Os-Rh', 'Tb-Pu-Cr', 'Ni-Ag-Ru', 'Li-Gd-V', 'Na-Hf-Ta', 'La-Sm-Ta', 'Ca-La-Nd', 'Sr-Ca-Mn', 'La-Mn-Fe', 'La-Th-Sc', 'Tb-Ce-Mo', 'Mo-Pb-W', 'Tb-Y-Cr', 'Al-Ga-Ge', 'V-Fe-Pd', 'Nd-Cr-W', 'Tl-Si-Ag', 'Tb-Ce-Pu', 'Cs-Pr-Mo', 'Nd-U-Ta', 'Eu-Ta-Nb', 'La-Dy-Th', 'Mg-Ti-V', 'Li-Fe-Cu', 'Na-Li-Ti', 'La-Tb-Pu', 'Th-Zr-Sc', 'Ce-Gd-Y', 'Dy-Lu-Cr', 'Nd-Sc-Ti', 'Yb-Nb-V', 'Ga-Si-Pb', 'Pr-Lu-Ti', 'Eu-Y-Cr', 'Hf-U-Nb', 'Pu-Ti-V', 'Li-Nd-Er', 'Cu-Ag-Bi', 'Sm-Nb-V', 'Gd-Dy-Y', 'Ho-Ta-Mo', 'Cu-Ag-Pd', 'Tc-Ni-Pt', 'Y-Lu-Nb', 'Ni-Os-Ru', 'Dy-Lu-Pu', 'Fe-Cu-Os', 'Ta-Tl-V', 'Eu-Y-U', 'Co-Pd-Ru', 'Re-Hg-Bi', 'La-Yb-Ho', 'Nd-Er-Lu', 'Tb-Yb-Er', 'Yb-Th-Zr', 'K-Li-Ti', 'Re-Tc-Rh', 'Cs-K-Al', 'Pr-Ti-Mo', 'Yb-Eu-Sc', 'Y-Th-Ta', 'Yb-Ti-V', 'Nd-Gd-V', 'Sm-Dy-Tm', 'Y-Mo-W', 'Ce-Er-W', 'Re-Tc-Pd', 'Ce-Nd-Zr', 'Li-Ho-Tm', 'Y-Tm-W', 'Al-Tl-Zn', 'Li-La-Mo', 'Pr-Ho-Tm', 'Eu-Th-Nb', 'Pr-Nd-Cr', 'Pm-Gd-Dy', 'Na-Ta-V', 'Al-Zn-Ga', 'Ba-Sm-Mo', 'Y-Ti-Cr', 'Nd-Th-Cr', 'Co-Ir-Pd', 'Yb-Gd-Ho', 'Hg-Ge-B', 'Ho-Tm-V', 'Pr-Tm-Ta', 'Tb-Dy-Cr', 'Ir-Ru-Pt', 'Ce-Pm-Pu', 'Tm-Pu-W', 'Pm-Nd-Th', 'Yb-Gd-Mo', 'La-Ti-V', 'Sm-Pu-Nb', 'Hf-Th-Zr', 'Ta-Ti-V', 'Be-Sn-Bi', 'Pm-Ho-Cr', 'Yb-Eu-Th', 'Ho-Lu-Mo', 'Tb-Dy-Ta', 'Ce-Y-Ti', 'Al-Zn-Pb', 'Ca-La-Mn', 'Yb-Eu-Ta', 'Cs-Hf-Zr', 'Na-Ca-Fe', 'Tb-Pu-Ta', 'Sr-Sc-Mo', 'Tc-Ir-C', 'Y-Hf-Sc', 'Ti-Mo-W', 'Pr-Gd-Dy', 'Co-Cu-Re', 'La-Y-U', 'Re-Sn-Bi', 'Yb-Ti-Cr', 'Nd-Mo-W', 'Fe-Ni-Ir', 'Pr-Nd-W', 'Yb-Lu-V', 'Ce-Pu-W', 'Ac-Cr-Mo', 'Zn-B-Pb', 'La-Yb-Tm', 'Ba-Nd-Mo', 'Mn-Co-Ag', 'Dy-Cr-Mo', 'Er-Tm-Lu', 'La-Y-Nb', 'Tc-Ir-Pt', 'Pr-Er-W', 'Yb-Ho-Cr', 'Mn-Fe-Au', 'Ca-Y-V', 'Pd-Ru-Au', 'Ce-Hf-U', 'La-Pm-Pr', 'Tb-V-Mo', 'Ba-Eu-Sc', 'Ta-Bi-Mo', 'Nd-Dy-V', 'Tl-B-Pb', 'Li-Hf-Zr', 'Li-La-Fe', 'Al-Sn-Bi', 'Ce-Pm-Er', 'Ni-Au-C', 'Er-Ta-W', 'Pr-Er-Pu', 'La-Nd-Sc', 'Ni-Ag-Ir', 'La-Ce-Th', 'La-Yb-Nd', 'Pm-Nd-Dy', 'Ce-Th-Mo', 'Eu-U-W', 'Pm-Ho-Er', 'Ce-Lu-Mo', 'Li-Cu-Mo', 'Sm-Y-Th', 'Tb-Nd-Dy', 'Nd-Er-Pu', 'Rb-Nb-V', 'Pr-Y-U', 'Y-Er-Pu', 'Cd-Mo-Pb', 'Li-Er-Zr', 'V-Cu-W', 'Pm-Nd-Mo', 'Yb-Er-Ti', 'Tb-Sc-Ta', 'Ca-Ti-Mo', 'Tb-Tm-Pu', 'Y-Lu-Ta', 'Rb-Li-Ti', 'Hg-Sb-Pb', 'La-Dy-Pu', 'Pd-Rh-Au', 'K-Ta-Ti', 'Li-La-Sc', 'Pr-Dy-Ti', 'Yb-Pr-W', 'La-Nd-Ho', 'Sm-Nb-W', 'Ce-Eu-Pu', 'Nd-Sc-Mo', 'Ag-Ir-Ru', 'Pm-Y-Ho', 'Yb-Dy-Lu', 'U-Ta-V', 'Ca-Tb-Ti', 'Tb-Yb-Lu', 'Ce-Pm-Sm', 'Sr-Nd-V', 'Co-Ni-Pt', 'Rb-Mg-Zr', 'Ti-V-Cr', 'Th-U-Cr', 'Yb-Pu-Cr', 'Ta-Cu-Bi', 'La-Yb-Cr', 'Pr-Ho-V', 'Rb-Na-Cr', 'Ce-Ta-V', 'Ce-Ta-W', 'Eu-Y-Sc', 'La-Ho-Ta', 'Cd-Ga-Bi', 'Eu-Pu-Mo', 'Nd-Gd-Er', 'Na-Li-Mo', 'Tb-Tm-V', 'Th-Sc-U', 'Lu-Cr-Mo', 'Tb-Ti-V', 'Tb-Sm-Ho', 'Dy-Ta-V', 'Rb-Li-Nb', 'Li-Ta-Mo', 'Re-Tc-Pt', 'Pm-Gd-V', 'La-Gd-Y', 'La-Dy-Ta', 'Mg-Ti-Nb', 'Nd-Th-W', 'Dy-Y-Zr', 'Tb-Zr-Ti', 'Pd-Pt-W', 'Cs-Rb-Ti', 'Ca-Nd-Pu', 'La-Pm-Nd', 'Sm-Ho-Pu', 'Hg-Bi-Mo', 'Co-Ag-Pb', 'Ce-Pm-Pr', 'Cu-Re-Pd', 'La-Th-Mo', 'Ba-Pr-Nd', 'La-Yb-W', 'Li-Y-Sc', 'Th-U-Ta', 'Li-Tm-Mo', 'Zn-Si-Ge', 'Sc-Nb-V', 'Sm-Th-V', 'Li-La-Pm', 'Li-Y-Ho', 'Y-Hf-U', 'Ti-V-W', 'Sm-Lu-Th', 'Li-Cu-Ni', 'Ce-Y-Lu', 'Tm-Th-W', 'Yb-Tm-Mo', 'Ca-Yb-Nd', 'Ce-Eu-V', 'Nd-Er-Sc', 'Hf-Ta-Nb', 'Co-Ag-C', 'Co-Ir-Os', 'Ca-Mn-V', 'Pu-Ta-Nb', 'V-Bi-Mo', 'Y-Hf-Th', 'Dy-Mo-W', 'Ce-Sm-Lu', 'Ni-Ir-Pd', 'Re-Os-Rh', 'Ce-Nd-Mo', 'Er-Hf-Sc', 'Cr-Fe-Ag', 'Li-Nd-V', 'Eu-Sc-Ta', 'Yb-Tm-Th', 'Ga-Ge-B', 'Eu-Sc-W', 'Li-Pr-Gd', 'Yb-Pr-Dy', 'Sm-Pu-V', 'La-Nd-Cr', 'Ce-Ho-Mo', 'Li-Pm-Pu', 'Y-Sc-U', 'Pr-Sm-Mo', 'Pr-U-Ta', 'Re-Tc-Ir', 'Nd-Zr-Ta', 'Tl-In-Si', 'Yb-V-Cr', 'Tb-Pr-Sm', 'Mn-Fe-Ru', 'Ce-Zr-Ta', 'K-Ti-Cr', 'Ce-Sm-Mo', 'Ni-Ag-Pb', 'K-Mg-Cr', 'Tb-Nd-Cr', 'Pu-Cr-W', 'La-Gd-Ho', 'Pm-Nd-Lu', 'La-Dy-Y', 'Tb-Th-V', 'Cu-Tc-Ir', 'Li-Tb-Ho', 'Tb-Sm-Tm', 'Sr-Nd-Y', 'Pm-V-Mo', 'K-Rb-Ta', 'Gd-Sc-Ti', 'Y-Er-Cr', 'Ce-Eu-Th', 'Yb-Nd-Dy', 'Er-Hf-Ta', 'Pr-Y-Th', 'Eu-Zr-Sc', 'Gd-Sc-Ta', 'Li-Ce-Ti', 'Na-Hf-Nb', 'Sm-Gd-Cr', 'La-Pr-Nd', 'Ga-Re-Hg', 'Li-La-Gd', 'Co-Ni-Rh', 'La-Tb-Er', 'Yb-Lu-Mo', 'Er-Pu-V', 'Tl-Ga-Pb', 'Yb-Sc-V', 'Co-Ag-Ru', 'Li-Zr-Nb', 'Rb-Ta-V', 'K-Li-Mg', 'Dy-V-W', 'Pu-Mo-W', 'Li-La-Mn', 'Tb-Zr-Sc', 'La-Pr-Er', 'Tb-Lu-Ta', 'Tb-Ho-Pu', 'Ba-Ca-Mo', 'Gd-Th-Ti', 'Ta-Nb-Mo', 'La-Y-Sc', 'La-Tm-Mo', 'Ge-B-Pb', 'Li-Pr-Ta', 'Cu-Pt-Au', 'La-Pu-V', 'Tb-Pr-Gd', 'Eu-Ta-V', 'Ce-Tm-W', 'Pr-Tm-W', 'La-Gd-Ti', 'Pm-Pr-Th', 'Sm-Tm-Cr', 'Mn-Ni-Au', 'Ce-Y-V', 'Rb-Cr-Mo', 'La-Nb-W', 'Ca-Y-Mo', 'Sm-Lu-Nb', 'Li-V-Fe', 'Y-Er-Nb', 'Nd-Dy-Zr', 'Pm-Pr-Tm', 'Mg-U-Nb', 'La-Yb-Eu', 'Gd-V-W', 'Eu-Zr-Ta', 'Tb-Ho-Er', 'Cs-Rb-Nb', 'Tb-Pr-Lu', 'Cd-Bi-B', 'Cu-Ir-Ru', 'Gd-Ho-Er', 'Pr-V-Mo', 'La-Nd-Gd', 'Y-Tm-Ti', 'Ni-Ag-Au', 'K-Hf-Ti', 'Nd-Ho-Tm', 'Pr-Nd-Pu', 'La-Gd-V', 'Yb-Er-Cr', 'Dy-V-Mo', 'La-Nd-Dy', 'Ce-Pr-Lu', 'Ce-Nd-Gd', 'Y-Th-Zr', 'Tl-Ni-Ag', 'Nd-Gd-Ti', 'K-Li-V', 'Li-Ce-Y', 'Mn-Ni-Ru', 'Ho-Pu-W', 'Pm-Dy-Lu', 'Ce-Sm-U', 'Ni-Os-Pd', 'Cr-Mo-Pb', 'Er-Ta-V', 'Ce-Nd-Er', 'Zn-Ga-Si', 'Sm-Y-Ta', 'Eu-Nb-W', 'Fe-Pd-Au', 'Co-Re-Ru', 'Sm-Y-Tm', 'Fe-Cu-C', 'Tm-Pu-Ti', 'Ta-Nb-Cu', 'Ho-Ta-V', 'Li-Lu-Ti', 'Yb-Er-Nb', 'Fe-Ni-Au', 'Nd-Ta-W', 'La-Pr-Ho', 'Mg-V-Cr', 'La-Pr-U', 'Y-Zr-Ti', 'Cu-Ni-Au', 'Rb-Li-Mo', 'Li-Ho-Zr', 'Fe-Ag-Pb', 'Eu-Y-V', 'Nd-Th-Ti', 'Pm-Pr-Cr', 'Sm-Y-Mo', 'Zn-Ga-Sn', 'Tl-Ga-Si', 'La-Tb-Y', 'Tm-Ta-Ti', 'Sr-Nd-Mo', 'Y-Tm-Mo', 'Tb-Yb-Pu', 'La-Ho-Mo', 'Dy-Ho-Mo', 'Cs-Hf-Mg', 'Ba-Sm-V', 'Pr-Y-Lu', 'Nd-Er-V', 'Tm-Mo-W', 'Li-Ta-Nb', 'Gd-Tm-Th', 'Ti-V-Mo', 'Sc-Ta-Nb', 'La-Sm-Tm', 'Ce-Er-Tm', 'Y-Ho-Er', 'Sm-Th-Mo', 'Tb-Sm-Y', 'Li-Tb-Mo', 'Ho-Lu-Th', 'Sm-Pu-Ta', 'Nd-Tm-Ti', 'Na-Li-Ta', 'K-Ti-V', 'Mn-Tl-Pb', 'Hg-B-Pb', 'Er-Lu-Th', 'Pu-Zr-Nb', 'Ca-La-Ce', 'Eu-Hf-U', 'Os-Ru-Rh', 'La-Sc-Cr', 'V-Ag-Ru', 'Ba-Pr-Sm', 'Nd-Th-V', 'Pr-Ta-Ti', 'Y-Tm-Pu', 'Tb-Y-Th', 'Ce-Nd-Th', 'Pt-Rh-Au', 'Er-Nb-Mo', 'Ba-La-Mn', 'Pr-Pu-V', 'Sm-Y-Cr', 'Ga-Re-Sn', 'Ho-Er-Pu', 'Al-Tl-Ge', 'Dy-Lu-Mo', 'Na-Sr-Ti', 'Cd-Si-Ge', 'Tb-Pr-Pu', 'Ba-Gd-Sc', 'Ca-Tb-Pu', 'Cu-Ag-Os', 'Co-Cu-Ir', 'Pm-Dy-Pu', 'Zn-Cd-Ge', 'La-V-W', 'Sr-Ca-V', 'Dy-Ho-Tm', 'Eu-Th-W', 'Ca-Pm-Y', 'Eu-Th-Zr', 'Cu-Os-Ru', 'Be-In-Ga', 'La-Th-Ti', 'Nd-Pu-Cr', 'Ca-Ce-Y', 'Yb-Y-V', 'Ca-La-Y', 'Li-Tm-Pu', 'Al-Tl-Pb', 'Li-Ce-Ho', 'Li-Sc-Nb', 'Pr-Nd-Dy', 'Yb-Nd-Pu', 'Li-Ce-Nd', 'Pm-Dy-Cr', 'Dy-Lu-V', 'Ca-Mn-Fe', 'Cs-Mg-V', 'Ce-Eu-Nb', 'Tb-V-Cr', 'Ce-Ta-Nb']
    };
})($ || ($ = {}));
//visavis/nonformer/nonformer.ts
;
"use strict";
var $;
(function ($) {
    const mask = 0b11111_11111_11111;
    function $mol_coord_pack(high, low) {
        return (high << 17 >>> 2) | (low & mask);
    }
    $.$mol_coord_pack = $mol_coord_pack;
    function $mol_coord_high(pack) {
        return pack << 2 >> 17;
    }
    $.$mol_coord_high = $mol_coord_high;
    function $mol_coord_low(pack) {
        return (pack << 17) >> 17;
    }
    $.$mol_coord_low = $mol_coord_low;
})($ || ($ = {}));
//mol/coord/coord.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const $visavis_matrix_json_node = $mol_data_record({
            name: $mol_data_string,
            num: $mol_data_number,
            nump: $mol_data_number,
            size: $mol_data_number,
            rea: $mol_data_number,
            rpp: $mol_data_number,
            rion: $mol_data_number,
            rcov: $mol_data_number,
            rmet: $mol_data_number,
            tmelt: $mol_data_number,
            eneg: $mol_data_number,
            count: $mol_data_optional($mol_data_number),
        });
        const $visavis_matrix_json_link = $mol_data_record({
            source: $mol_data_number,
            target: $mol_data_number,
            value: $mol_data_number,
            cmt: $mol_data_string,
            cmp: $mol_data_optional($mol_data_number),
        });
        const $visavis_matrix_json = $mol_data_record({
            payload: $mol_data_record({
                nodes: $mol_data_array($visavis_matrix_json_node),
                links: $mol_data_array($visavis_matrix_json_link)
            }),
        });
        class $visavis_matrix extends $.$visavis_matrix {
            json() {
                return $visavis_matrix_json(this.plot().json());
            }
            nodes() {
                return this.json().payload.nodes;
            }
            links() {
                return this.json().payload.links.slice().sort((a, b) => a.value - b.value);
            }
            links_value_min() {
                return this.links()[0].value;
            }
            links_value_max() {
                return this.links().slice(-1)[0].value;
            }
            heatmap() {
                return this.links().reduce((heatmap, link) => {
                    if (!heatmap && Math.floor(link.value) !== link.value)
                        return true;
                    else if (link.cmp)
                        return false;
                    return heatmap;
                }, false);
            }
            plot_title() {
                return this.plot().id();
            }
            plot_body() {
                return [
                    this.Root(),
                    ...this.heatmap() ? [this.Side_right()] : [],
                ];
            }
            order() {
                return $visavis_lib.d3().range(95).sort((a, b) => this.nodes()[a][this.order_current()] - this.nodes()[b][this.order_current()]);
            }
            matrix() {
                const matrix = this.nodes().map((node, i) => $visavis_lib.d3().range(95).map((j) => ({ x: j, y: i, z: 0, cmt: '', cmp: 0, nonformer: false })));
                for (const link of this.links()) {
                    matrix[link.source][link.target].z += link.value;
                    matrix[link.target][link.source].z += link.value;
                    matrix[link.source][link.target].cmt = link.cmt;
                    matrix[link.target][link.source].cmt = link.cmt;
                    matrix[link.source][link.target].cmp = link.cmp || 0;
                    matrix[link.target][link.source].cmp = link.cmp || 0;
                }
                if (this.nonformers()) {
                    for (const item of $visavis_nonformer_pd_bin) {
                        matrix[item[0]][item[1]].z = 1;
                        matrix[item[1]][item[0]].z = 1;
                        matrix[item[0]][item[1]].nonformer = true;
                        matrix[item[1]][item[0]].nonformer = true;
                    }
                }
                return matrix;
            }
            size() {
                const rect = this.Plot().Body().view_rect();
                if (!rect)
                    return NaN;
                return Math.min(rect.width, rect.height) - this.plot_padding() - this.axis_width();
            }
            opacity_scale() {
                return $visavis_lib.d3().scale.linear().domain([this.links_value_min(), this.links_value_max()]).range([0.2, 1]).clamp(true);
            }
            opacity(index) {
                return this.heatmap() ? 1 : this.opacity_scale()(index);
            }
            color_heatmap() {
                return $visavis_lib.d3().scale.linear().domain($visavis_lib.d3().range(0, 1, 1.0 / (this.heatmap_colors().length - 1))).range(this.heatmap_colors());
            }
            heatmap_color(index) {
                return this.heatmap_colors()[index];
            }
            heatmap_color_list() {
                return [
                    this.Heatmap_min(),
                    ...this.heatmap_colors().map((_, index) => this.Heatmap_color(index)),
                    this.Heatmap_max(),
                ];
            }
            color_heatmap_scale() {
                return $visavis_lib.d3().scale.linear().domain([this.links_value_min(), this.links_value_max()]).range([0, 1]);
            }
            color(index, cmp) {
                if (this.heatmap())
                    return cmp ? this.colorset()[1] : this.color_heatmap()(this.color_heatmap_scale()(index));
                return this.colorset()[cmp] || '#ccc';
            }
            range() {
                return $visavis_lib.d3().scale.ordinal().rangeBands([0, this.size()]).domain(this.order());
            }
            svg_title_text(cell) {
                if (!cell.cmt)
                    return '';
                const text = `${cell.cmt}: ${cell.z}`;
                const title = !this.heatmap()
                    ? `${text} ${cell.z === 1 ? 'entry' : 'entries'}`
                    : text;
                return title;
            }
            cell_hovered(cell) {
                $visavis_lib.d3().selectAll('.row text').classed('active', (_, index) => cell?.y === index);
                $visavis_lib.d3().selectAll('.column text').classed('active', (_, index) => cell?.x === index);
            }
            cell_selected(id, next) {
                $mol_wire_solid();
                return next ?? false;
            }
            cell_click(cell) {
                const coords = [$mol_coord_pack(cell.x, cell.y), $mol_coord_pack(cell.y, cell.x)];
                coords.forEach(coord => this.cell_selected(coord, !this.cell_selected(coord)));
                $visavis_lib.d3().selectAll('.cell').classed('visited', (item) => this.cell_selected($mol_coord_pack(item.x, item.y)));
            }
            draw_cells(node, row) {
                $visavis_lib.d3().select(node)
                    .selectAll('.cell')
                    .data(row.filter((d) => d.z))
                    .enter().append('rect')
                    .attr('class', (d) => d.nonformer ? 'nonformer cell' : 'cell')
                    .attr('id', (d) => 'c_' + this.nodes()[d.x].num.toString() + '_' + this.nodes()[d.y].num.toString())
                    .attr('x', (d) => this.range()(d.x))
                    .attr('width', this.range().rangeBand())
                    .attr('height', this.range().rangeBand())
                    .style('fill-opacity', (d) => this.opacity(d.z))
                    .style('fill', (d) => this.color(d.z, d.cmp))
                    .on('mouseover', (event, cell) => this.cell_hovered(cell))
                    .on('mouseout', (event) => this.cell_hovered(null))
                    .on('click', (event, cell) => this.cell_click(cell))
                    .append('svg:title').text((cell) => this.svg_title_text(cell));
            }
            draw() {
                if (Number.isNaN(this.size()))
                    return;
                const svg = $visavis_lib.d3().select('[visavis_matrix_root]')
                    .attr('width', this.size() + this.axis_width())
                    .attr('height', this.size() + this.axis_width())
                    .style('font-size', this.range().rangeBand())
                    .style('letter-spacing', '1px');
                const group = svg[svg.select('g').empty() ? 'append' : 'select']('g')
                    .attr('transform', `translate(${this.axis_width()},${this.axis_width()})`);
                group.html("<defs><pattern id='nonformer' patternUnits='userSpaceOnUse' width='4' height='4'><path d='M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2' style='stroke:#ddd;stroke-width:1' /></pattern></defs>");
                group.append('rect')
                    .attr('class', 'bgmatrix')
                    .attr('width', this.size())
                    .attr('height', this.size());
                const draw_cells = (node, row) => this.draw_cells(node, row);
                const row = group.selectAll('.row')
                    .data(this.matrix())
                    .enter().append('g')
                    .attr('class', 'row')
                    .attr('transform', (d, i) => 'translate(0,' + this.range()(i) + ')')
                    .each(function (row) { draw_cells(this, row); });
                row.append('line')
                    .attr('x2', this.size());
                row.append('text')
                    .attr('x', -6)
                    .attr('y', this.range().rangeBand() / 2)
                    .attr('dy', '.32em')
                    .attr('text-anchor', 'end')
                    .text((d, i) => this.nodes()[i].name);
                const column = group.selectAll('.column')
                    .data(this.matrix())
                    .enter().append('g')
                    .attr('class', 'column')
                    .attr('transform', (d, i) => 'translate(' + this.range()(i) + ')rotate(-90)');
                column.append('line')
                    .attr('x1', -this.size());
                column.append('text')
                    .attr('x', 6)
                    .attr('y', this.range().rangeBand() / 2)
                    .attr('dy', '.32em')
                    .attr('text-anchor', 'start')
                    .text((d, i) => this.nodes()[i].name);
            }
        }
        __decorate([
            $mol_mem
        ], $visavis_matrix.prototype, "json", null);
        __decorate([
            $mol_mem
        ], $visavis_matrix.prototype, "links", null);
        __decorate([
            $mol_mem
        ], $visavis_matrix.prototype, "heatmap", null);
        __decorate([
            $mol_mem
        ], $visavis_matrix.prototype, "order", null);
        __decorate([
            $mol_mem
        ], $visavis_matrix.prototype, "matrix", null);
        __decorate([
            $mol_mem
        ], $visavis_matrix.prototype, "size", null);
        __decorate([
            $mol_mem
        ], $visavis_matrix.prototype, "opacity_scale", null);
        __decorate([
            $mol_mem
        ], $visavis_matrix.prototype, "color_heatmap", null);
        __decorate([
            $mol_mem
        ], $visavis_matrix.prototype, "color_heatmap_scale", null);
        __decorate([
            $mol_mem
        ], $visavis_matrix.prototype, "range", null);
        __decorate([
            $mol_mem_key
        ], $visavis_matrix.prototype, "cell_selected", null);
        __decorate([
            $mol_action
        ], $visavis_matrix.prototype, "cell_click", null);
        __decorate([
            $mol_mem_key
        ], $visavis_matrix.prototype, "draw_cells", null);
        __decorate([
            $mol_mem
        ], $visavis_matrix.prototype, "draw", null);
        $$.$visavis_matrix = $visavis_matrix;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/matrix/matrix.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("visavis/matrix/matrix.view.css", "[visavis_matrix_plot] rect.nonformer {\n\tfill:url(#nonformer) !important;\n\tfill-opacity:1.0 !important;\n}\n\n[visavis_matrix_plot] rect.visited{\n\tfill:#0f0 !important;\n\tfill-opacity:1.0 !important;\n}\n\n[visavis_matrix_plot] rect.bgmatrix {\n\tfill:#f6f6f6;\n}\n\n[visavis_matrix_plot] rect.bgmatrix.hidden {\n\tfill:#fff;\n}\n\n[visavis_matrix_plot] line {\n\tstroke:#fff;\n}\n\n[visavis_matrix_plot] text.active {\n\tfill:#f00;\n\tfont-weight:bold;\n}\n");
})($ || ($ = {}));
//visavis/matrix/-css/matrix.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem, px } = $mol_style_unit;
        $mol_style_define($.$visavis_matrix, {
            flex: {
                basis: rem(60),
                shrink: 0,
            },
            Side_right: {
                position: 'absolute',
                top: per(50),
                right: $mol_gap.space,
                transform: 'translateY(-50%)'
            },
            Heatmap_color: {
                width: rem(1),
                height: rem(1),
                margin: px(1),
            },
            Heatmap_legend: {
                alignItems: 'flex-end',
                flex: {
                    direction: 'column-reverse',
                },
            },
            Root: {
                margin: 'auto',
            },
            Order_switch: {
                flex: {
                    shrink: 1,
                },
            },
            Plot: {
                flex: {
                    grow: 1,
                    shrink: 0,
                },
            },
            Setup: {
                flex: {
                    basis: rem(25),
                    shrink: 0,
                },
                Body: {
                    padding: $mol_gap.block,
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/matrix/matrix.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_pop extends $mol_view {
        showed(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        align_vert() {
            return "";
        }
        align_hor() {
            return "";
        }
        prefer() {
            return "vert";
        }
        sub() {
            return [
                this.Anchor()
            ];
        }
        sub_visible() {
            return [
                this.Anchor(),
                this.Bubble()
            ];
        }
        Anchor() {
            return null;
        }
        align() {
            return "bottom_center";
        }
        bubble_content() {
            return [];
        }
        height_max() {
            return 9999;
        }
        Bubble() {
            const obj = new this.$.$mol_pop_bubble();
            obj.align = () => this.align();
            obj.content = () => this.bubble_content();
            obj.height_max = () => this.height_max();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_pop.prototype, "showed", null);
    __decorate([
        $mol_mem
    ], $mol_pop.prototype, "Bubble", null);
    $.$mol_pop = $mol_pop;
    class $mol_pop_bubble extends $mol_view {
        sub() {
            return this.content();
        }
        style() {
            return {
                ...super.style(),
                maxHeight: this.height_max()
            };
        }
        attr() {
            return {
                ...super.attr(),
                mol_pop_align: this.align(),
                tabindex: 0
            };
        }
        content() {
            return [];
        }
        height_max() {
            return 9999;
        }
        align() {
            return "";
        }
    }
    $.$mol_pop_bubble = $mol_pop_bubble;
})($ || ($ = {}));
//mol/pop/-view.tree/pop.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_pop extends $.$mol_pop {
            showed(next = false) {
                this.focused();
                return next;
            }
            sub_visible() {
                return [
                    this.Anchor(),
                    ...this.showed() ? [this.Bubble()] : [],
                ];
            }
            height_max() {
                const viewport = this.$.$mol_window.size();
                const rect_bubble = this.view_rect();
                const align = this.align_vert();
                if (align === 'bottom')
                    return (viewport.height - rect_bubble.bottom) * .66;
                if (align === 'top')
                    return rect_bubble.top * .66;
                return 0;
            }
            align() {
                switch (this.prefer()) {
                    case 'hor': return `${this.align_hor()}_${this.align_vert()}`;
                    case 'vert': return `${this.align_vert()}_${this.align_hor()}`;
                    default: return this.prefer();
                }
            }
            align_vert() {
                const viewport = this.view_port();
                const rect_pop = this.view_rect();
                if (!rect_pop)
                    return 'suspense';
                return rect_pop.top > (viewport.top + viewport.height / 2) ? 'top' : 'bottom';
            }
            align_hor() {
                const viewport = this.view_port();
                const rect_pop = this.view_rect();
                if (!rect_pop)
                    return 'suspense';
                return rect_pop.left > (viewport.left + viewport.width / 2) ? 'left' : 'right';
            }
            View_port() {
                const view = new $mol_view;
                view.dom_node = () => {
                    let node = this.dom_node();
                    while (node = node.offsetParent) {
                        if (this.$.$mol_dom_context.getComputedStyle(node).overflow !== 'visible')
                            return node;
                    }
                    return this.$.$mol_dom_context.document.documentElement;
                };
                return view;
            }
            view_port() {
                return this.View_port().view_rect() ?? { ...this.$.$mol_window.size(), left: 0, top: 0 };
            }
        }
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "showed", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "sub_visible", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "height_max", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align_vert", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align_hor", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "View_port", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "view_port", null);
        $$.$mol_pop = $mol_pop;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/pop/pop.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/pop/pop.view.css", "[mol_pop] {\n\tposition: relative;\n\tdisplay: inline-flex;\n}\n\n[mol_pop_bubble] {\n\tbox-shadow: 0 0 1rem hsla(0,0%,0%,.5);\n\tborder-radius: var(--mol_gap_round);\n\tposition: absolute;\n\tz-index: var(--mol_layer_popup);\n\tbackground: var(--mol_theme_back);\n\tmax-width: none;\n\tmax-height: none;\n\t/* overflow: hidden;\n\toverflow-y: scroll;\n\toverflow-y: overlay; */\n\tword-break: normal;\n\twidth: max-content;\n\theight: max-content;\n\tflex-direction: column;\n\tmax-width: 80vw;\n\tmax-height: 80vw;\n}\n\n:where( [mol_pop_bubble] > * ) {\n\tbackground: var(--mol_theme_card);\n}\n\n[mol_pop_bubble][mol_scroll] {\n\tbackground: var(--mol_theme_back);\n}\n\n[mol_pop_bubble]:focus {\n\toutline: none;\n}\n\n[mol_pop_align=\"suspense_suspense\"] {\n\topacity: 0;\n}\n\n[mol_pop_align=\"left_top\"] {\n\ttransform: translate(-100%);\n\tleft: 0;\n\tbottom: 0;\n}\n\n[mol_pop_align=\"left_center\"] {\n\ttransform: translate(-100%, -50%);\n\tleft: 0;\n\ttop: 50%;\n}\n\n[mol_pop_align=\"left_bottom\"] {\n\ttransform: translate(-100%);\n\tleft: 0;\n\ttop: 0;\n}\n\n[mol_pop_align=\"right_top\"] {\n\ttransform: translate(100%);\n\tright: 0;\n\tbottom: 0;\n}\n\n[mol_pop_align=\"right_center\"] {\n\ttransform: translate(100%, -50%);\n\tright: 0;\n\ttop: 50%;\n}\n\n[mol_pop_align=\"right_bottom\"] {\n\ttransform: translate(100%);\n\tright: 0;\n\ttop: 0;\n}\n\n[mol_pop_align=\"center\"] {\n\tleft: 50%;\n\ttop: 50%;\n\ttransform: translate(-50%, -50%);\n}\n\n[mol_pop_align=\"top_left\"] {\n\tright: 0;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"top_center\"] {\n\ttransform: translate(-50%);\n\tleft: 50%;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"top_right\"] {\n\tleft: 0;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"bottom_left\"] {\n\tright: 0;\n\ttop: 100%;\n}\n\n[mol_pop_align=\"bottom_center\"] {\n\ttransform: translate(-50%);\n\tleft: 50%;\n\ttop: 100%;\n}\n\n[mol_pop_align=\"bottom_right\"] {\n\tleft: 0;\n\ttop: 100%;\n}\n");
})($ || ($ = {}));
//mol/pop/-css/pop.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_pick extends $mol_pop {
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.keydown(event)
            };
        }
        Anchor() {
            return this.Trigger();
        }
        keydown(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        trigger_enabled() {
            return true;
        }
        trigger_content() {
            return [
                this.title()
            ];
        }
        hint() {
            return "";
        }
        Trigger() {
            const obj = new this.$.$mol_check();
            obj.minimal_width = () => 40;
            obj.minimal_height = () => 40;
            obj.enabled = () => this.trigger_enabled();
            obj.checked = (val) => this.showed(val);
            obj.sub = () => this.trigger_content();
            obj.hint = () => this.hint();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_pick.prototype, "keydown", null);
    __decorate([
        $mol_mem
    ], $mol_pick.prototype, "Trigger", null);
    $.$mol_pick = $mol_pick;
})($ || ($ = {}));
//mol/pick/-view.tree/pick.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_pick extends $.$mol_pick {
            keydown(event) {
                if (!this.trigger_enabled())
                    return;
                if (event.defaultPrevented)
                    return;
                if (event.keyCode === $mol_keyboard_code.escape) {
                    if (!this.showed())
                        return;
                    event.preventDefault();
                    this.showed(false);
                }
            }
        }
        $$.$mol_pick = $mol_pick;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/pick/pick.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/pick/pick.view.css", "[mol_pick_trigger] {\n\talign-items: center;\n\tflex-grow: 1;\n}\n");
})($ || ($ = {}));
//mol/pick/-css/pick.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_hotkey extends $mol_plugin {
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.keydown(event)
            };
        }
        key() {
            return {};
        }
        mod_ctrl() {
            return false;
        }
        mod_alt() {
            return false;
        }
        mod_shift() {
            return false;
        }
        keydown(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_hotkey.prototype, "keydown", null);
    $.$mol_hotkey = $mol_hotkey;
})($ || ($ = {}));
//mol/hotkey/-view.tree/hotkey.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_hotkey extends $.$mol_hotkey {
            key() {
                return super.key();
            }
            keydown(event) {
                if (!event)
                    return;
                if (event.defaultPrevented)
                    return;
                let name = $mol_keyboard_code[event.keyCode];
                if (this.mod_ctrl() !== (event.ctrlKey || event.metaKey))
                    return;
                if (this.mod_alt() !== event.altKey)
                    return;
                if (this.mod_shift() !== event.shiftKey)
                    return;
                const handle = this.key()[name];
                if (handle)
                    handle(event);
            }
        }
        $$.$mol_hotkey = $mol_hotkey;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/hotkey/hotkey.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_string extends $mol_view {
        dom_name() {
            return "input";
        }
        enabled() {
            return true;
        }
        minimal_height() {
            return 40;
        }
        autocomplete() {
            return false;
        }
        selection(val) {
            if (val !== undefined)
                return val;
            return [
                0,
                0
            ];
        }
        auto() {
            return [
                this.selection_watcher()
            ];
        }
        field() {
            return {
                ...super.field(),
                disabled: this.disabled(),
                value: this.value_changed(),
                placeholder: this.hint_visible(),
                spellcheck: this.spellcheck(),
                autocomplete: this.autocomplete_native(),
                selectionEnd: this.selection_end(),
                selectionStart: this.selection_start(),
                inputMode: this.keyboard(),
                enterkeyhint: this.enter()
            };
        }
        attr() {
            return {
                ...super.attr(),
                maxlength: this.length_max(),
                type: this.type()
            };
        }
        event() {
            return {
                ...super.event(),
                input: (event) => this.event_change(event)
            };
        }
        plugins() {
            return [
                this.Submit()
            ];
        }
        selection_watcher() {
            return null;
        }
        disabled() {
            return false;
        }
        value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        value_changed(val) {
            return this.value(val);
        }
        hint() {
            return "";
        }
        hint_visible() {
            return this.hint();
        }
        spellcheck() {
            return true;
        }
        autocomplete_native() {
            return "";
        }
        selection_end() {
            return 0;
        }
        selection_start() {
            return 0;
        }
        keyboard() {
            return "text";
        }
        enter() {
            return "go";
        }
        length_max() {
            return +Infinity;
        }
        type(val) {
            if (val !== undefined)
                return val;
            return "text";
        }
        event_change(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        submit_with_ctrl() {
            return false;
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Submit() {
            const obj = new this.$.$mol_hotkey();
            obj.mod_ctrl = () => this.submit_with_ctrl();
            obj.key = () => ({
                enter: (event) => this.submit(event)
            });
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "selection", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "value", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "type", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "event_change", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "submit", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "Submit", null);
    $.$mol_string = $mol_string;
})($ || ($ = {}));
//mol/string/-view.tree/string.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_string extends $.$mol_string {
            event_change(next) {
                if (!next)
                    return;
                const el = next.target;
                const from = el.selectionStart;
                const to = el.selectionEnd;
                el.value = this.value_changed(el.value);
                if (to === null)
                    return;
                el.selectionEnd = to;
                el.selectionStart = from;
                this.selection_change(next);
            }
            hint_visible() {
                return (this.enabled() ? this.hint() : '') || ' ';
            }
            disabled() {
                return !this.enabled();
            }
            autocomplete_native() {
                return this.autocomplete() ? 'on' : 'off';
            }
            selection_watcher() {
                return new $mol_dom_listener(this.$.$mol_dom_context.document, 'selectionchange', $mol_wire_async(event => this.selection_change(event)));
            }
            selection_change(event) {
                const el = this.dom_node();
                if (el !== this.$.$mol_dom_context.document.activeElement)
                    return;
                const [from, to] = this.selection([
                    el.selectionStart,
                    el.selectionEnd,
                ]);
                el.selectionEnd = to;
                el.selectionStart = from;
            }
            selection_start() {
                const el = this.dom_node();
                if (el.selectionStart === null)
                    return undefined;
                return this.selection()[0];
            }
            selection_end() {
                const el = this.dom_node();
                if (el.selectionEnd === null)
                    return undefined;
                return this.selection()[1];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_string.prototype, "selection_watcher", null);
        $$.$mol_string = $mol_string;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/string/string.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/string/string.view.css", "[mol_string] {\n\tbox-sizing: border-box;\n\toutline-offset: 0;\n\tborder: none;\n\tborder-radius: var(--mol_gap_round);\n\twhite-space: pre-line;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tposition: relative;\n\tfont: inherit;\n\tflex: 1 1 auto;\n\tbackground: transparent;\n\tmin-width: 0;\n\tcolor: inherit;\n\tbackground: var(--mol_theme_field);\n}\n\n[mol_string]:disabled:not(:placeholder-shown) {\n\tbackground-color: transparent;\n\tcolor: var(--mol_theme_text);\n}\n\n[mol_string]:where(:not(:disabled)) {\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_line);\n}\n\n[mol_string]:where(:not(:disabled)):hover {\n\tbox-shadow: inset 0 0 0 2px var(--mol_theme_line);\n\tz-index: var(--mol_layer_hover);\n}\n\n[mol_string]:focus {\n\toutline: none;\n\tz-index: var(--mol_layer_focus);\n\tcolor: var(--mol_theme_text);\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_focus);\n}\n\n[mol_string]::placeholder {\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_string]::-ms-clear {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));
//mol/string/-css/string.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_dots_vertical extends $mol_icon {
        path() {
            return "M12,16C13.1,16 14,16.9 14,18C14,19.1 13.1,20 12,20C10.9,20 10,19.1 10,18C10,16.9 10.9,16 12,16M12,10C13.1,10 14,10.9 14,12C14,13.1 13.1,14 12,14C10.9,14 10,13.1 10,12C10,10.9 10.9,10 12,10M12,4C13.1,4 14,4.9 14,6C14,7.1 13.1,8 12,8C10.9,8 10,7.1 10,6C10,4.9 10.9,4 12,4Z";
        }
    }
    $.$mol_icon_dots_vertical = $mol_icon_dots_vertical;
})($ || ($ = {}));
//mol/icon/dots/vertical/-view.tree/vertical.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_paragraph extends $mol_view {
        line_height() {
            return 24;
        }
        letter_width() {
            return 7;
        }
        width_limit() {
            return +Infinity;
        }
        row_width() {
            return 0;
        }
        sub() {
            return [
                this.title()
            ];
        }
    }
    $.$mol_paragraph = $mol_paragraph;
})($ || ($ = {}));
//mol/paragraph/-view.tree/paragraph.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_paragraph extends $.$mol_paragraph {
            maximal_width() {
                let width = 0;
                const letter = this.letter_width();
                for (const kid of this.sub()) {
                    if (!kid)
                        continue;
                    if (kid instanceof $mol_view) {
                        width += kid.maximal_width();
                    }
                    else if (typeof kid !== 'object') {
                        width += String(kid).length * letter;
                    }
                }
                return width;
            }
            width_limit() {
                return this.$.$mol_window.size().width;
            }
            minimal_width() {
                return this.letter_width();
            }
            row_width() {
                return Math.max(Math.min(this.width_limit(), this.maximal_width()), this.letter_width());
            }
            minimal_height() {
                return Math.max(1, Math.ceil(this.maximal_width() / this.row_width())) * this.line_height();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "maximal_width", null);
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "row_width", null);
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "minimal_height", null);
        $$.$mol_paragraph = $mol_paragraph;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/paragraph/paragraph.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/paragraph/paragraph.view.css", ":where([mol_paragraph]) {\n\tmargin: 0;\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));
//mol/paragraph/-css/paragraph.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_dimmer extends $mol_paragraph {
        haystack() {
            return "";
        }
        needle() {
            return "";
        }
        sub() {
            return this.parts();
        }
        Low(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => [
                this.string(id)
            ];
            return obj;
        }
        High(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => [
                this.string(id)
            ];
            return obj;
        }
        parts() {
            return [];
        }
        string(id) {
            return "";
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_dimmer.prototype, "Low", null);
    __decorate([
        $mol_mem_key
    ], $mol_dimmer.prototype, "High", null);
    $.$mol_dimmer = $mol_dimmer;
})($ || ($ = {}));
//mol/dimmer/-view.tree/dimmer.view.tree.ts
;
"use strict";
//mol/type/intersect/intersect.ts
;
"use strict";
//mol/unicode/unicode.ts
;
"use strict";
var $;
(function ($) {
    class $mol_regexp extends RegExp {
        groups;
        constructor(source, flags = 'gsu', groups = []) {
            super(source, flags);
            this.groups = groups;
        }
        *[Symbol.matchAll](str) {
            const index = this.lastIndex;
            this.lastIndex = 0;
            try {
                while (this.lastIndex < str.length) {
                    const found = this.exec(str);
                    if (!found)
                        break;
                    yield found;
                }
            }
            finally {
                this.lastIndex = index;
            }
        }
        [Symbol.match](str) {
            const res = [...this[Symbol.matchAll](str)].filter(r => r.groups).map(r => r[0]);
            if (!res.length)
                return null;
            return res;
        }
        [Symbol.split](str) {
            const res = [];
            let token_last = null;
            for (let token of this[Symbol.matchAll](str)) {
                if (token.groups && (token_last ? token_last.groups : true))
                    res.push('');
                res.push(token[0]);
                token_last = token;
            }
            if (!res.length)
                res.push('');
            return res;
        }
        test(str) {
            return Boolean(str.match(this));
        }
        exec(str) {
            const from = this.lastIndex;
            if (from >= str.length)
                return null;
            const res = super.exec(str);
            if (res === null) {
                this.lastIndex = str.length;
                if (!str)
                    return null;
                return Object.assign([str.slice(from)], {
                    index: from,
                    input: str,
                });
            }
            if (from === this.lastIndex) {
                $mol_fail(new Error('Captured empty substring'));
            }
            const groups = {};
            const skipped = str.slice(from, this.lastIndex - res[0].length);
            if (skipped) {
                this.lastIndex = this.lastIndex - res[0].length;
                return Object.assign([skipped], {
                    index: from,
                    input: res.input,
                });
            }
            for (let i = 0; i < this.groups.length; ++i) {
                const group = this.groups[i];
                groups[group] = groups[group] || res[i + 1] || '';
            }
            return Object.assign(res, { groups });
        }
        generate(params) {
            return null;
        }
        get native() {
            return new RegExp(this.source, this.flags);
        }
        static repeat(source, min = 0, max = Number.POSITIVE_INFINITY) {
            const regexp = $mol_regexp.from(source);
            const upper = Number.isFinite(max) ? max : '';
            const str = `(?:${regexp.source}){${min},${upper}}?`;
            const regexp2 = new $mol_regexp(str, regexp.flags, regexp.groups);
            regexp2.generate = params => {
                const res = regexp.generate(params);
                if (res)
                    return res;
                if (min > 0)
                    return res;
                return '';
            };
            return regexp2;
        }
        static repeat_greedy(source, min = 0, max = Number.POSITIVE_INFINITY) {
            const regexp = $mol_regexp.from(source);
            const upper = Number.isFinite(max) ? max : '';
            const str = `(?:${regexp.source}){${min},${upper}}`;
            const regexp2 = new $mol_regexp(str, regexp.flags, regexp.groups);
            regexp2.generate = params => {
                const res = regexp.generate(params);
                if (res)
                    return res;
                if (min > 0)
                    return res;
                return '';
            };
            return regexp2;
        }
        static vary(sources) {
            const groups = [];
            const chunks = sources.map(source => {
                const regexp = $mol_regexp.from(source);
                groups.push(...regexp.groups);
                return regexp.source;
            });
            return new $mol_regexp(`(?:${chunks.join('|')})`, '', groups);
        }
        static optional(source) {
            return $mol_regexp.repeat_greedy(source, 0, 1);
        }
        static force_after(source) {
            const regexp = $mol_regexp.from(source);
            return new $mol_regexp(`(?=${regexp.source})`, regexp.flags, regexp.groups);
        }
        static forbid_after(source) {
            const regexp = $mol_regexp.from(source);
            return new $mol_regexp(`(?!${regexp.source})`, regexp.flags, regexp.groups);
        }
        static from(source, { ignoreCase, multiline } = {
            ignoreCase: false,
            multiline: false,
        }) {
            let flags = 'gsu';
            if (multiline)
                flags += 'm';
            if (ignoreCase)
                flags += 'i';
            if (typeof source === 'number') {
                const src = `\\u{${source.toString(16)}}`;
                const regexp = new $mol_regexp(src, flags);
                regexp.generate = () => src;
                return regexp;
            }
            if (typeof source === 'string') {
                const src = source.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const regexp = new $mol_regexp(src, flags);
                regexp.generate = () => source;
                return regexp;
            }
            else if (source instanceof $mol_regexp) {
                const regexp = new $mol_regexp(source.source, flags, source.groups);
                regexp.generate = params => source.generate(params);
                return regexp;
            }
            if (source instanceof RegExp) {
                const test = new RegExp('|' + source.source);
                const groups = Array.from({ length: test.exec('').length - 1 }, (_, i) => String(i + 1));
                const regexp = new $mol_regexp(source.source, source.flags, groups);
                regexp.generate = () => '';
                return regexp;
            }
            if (Array.isArray(source)) {
                const patterns = source.map(src => Array.isArray(src)
                    ? $mol_regexp.optional(src)
                    : $mol_regexp.from(src));
                const chunks = patterns.map(pattern => pattern.source);
                const groups = [];
                let index = 0;
                for (const pattern of patterns) {
                    for (let group of pattern.groups) {
                        if (Number(group) >= 0) {
                            groups.push(String(index++));
                        }
                        else {
                            groups.push(group);
                        }
                    }
                }
                const regexp = new $mol_regexp(chunks.join(''), flags, groups);
                regexp.generate = params => {
                    let res = '';
                    for (const pattern of patterns) {
                        let sub = pattern.generate(params);
                        if (sub === null)
                            return '';
                        res += sub;
                    }
                    return res;
                };
                return regexp;
            }
            else {
                const groups = [];
                const chunks = Object.keys(source).map(name => {
                    groups.push(name);
                    const regexp = $mol_regexp.from(source[name]);
                    groups.push(...regexp.groups);
                    return `(${regexp.source})`;
                });
                const regexp = new $mol_regexp(`(?:${chunks.join('|')})`, flags, groups);
                const validator = new RegExp('^' + regexp.source + '$', flags);
                regexp.generate = (params) => {
                    for (let option in source) {
                        if (option in params) {
                            if (typeof params[option] === 'boolean') {
                                if (!params[option])
                                    continue;
                            }
                            else {
                                const str = String(params[option]);
                                if (str.match(validator))
                                    return str;
                                $mol_fail(new Error(`Wrong param: ${option}=${str}`));
                            }
                        }
                        else {
                            if (typeof source[option] !== 'object')
                                continue;
                        }
                        const res = $mol_regexp.from(source[option]).generate(params);
                        if (res)
                            return res;
                    }
                    return null;
                };
                return regexp;
            }
        }
        static unicode_only(...category) {
            return new $mol_regexp(`\\p{${category.join('=')}}`);
        }
        static unicode_except(...category) {
            return new $mol_regexp(`\\P{${category.join('=')}}`);
        }
        static char_range(from, to) {
            return new $mol_regexp(`${$mol_regexp.from(from).source}-${$mol_regexp.from(to).source}`);
        }
        static char_only(...allowed) {
            const regexp = allowed.map(f => $mol_regexp.from(f).source).join('');
            return new $mol_regexp(`[${regexp}]`);
        }
        static char_except(...forbidden) {
            const regexp = forbidden.map(f => $mol_regexp.from(f).source).join('');
            return new $mol_regexp(`[^${regexp}]`);
        }
        static decimal_only = $mol_regexp.from(/\d/gsu);
        static decimal_except = $mol_regexp.from(/\D/gsu);
        static latin_only = $mol_regexp.from(/\w/gsu);
        static latin_except = $mol_regexp.from(/\W/gsu);
        static space_only = $mol_regexp.from(/\s/gsu);
        static space_except = $mol_regexp.from(/\S/gsu);
        static word_break_only = $mol_regexp.from(/\b/gsu);
        static word_break_except = $mol_regexp.from(/\B/gsu);
        static tab = $mol_regexp.from(/\t/gsu);
        static slash_back = $mol_regexp.from(/\\/gsu);
        static nul = $mol_regexp.from(/\0/gsu);
        static char_any = $mol_regexp.from(/./gsu);
        static begin = $mol_regexp.from(/^/gsu);
        static end = $mol_regexp.from(/$/gsu);
        static or = $mol_regexp.from(/|/gsu);
        static line_end = $mol_regexp.from({
            win_end: [['\r'], '\n'],
            mac_end: '\r',
        });
    }
    $.$mol_regexp = $mol_regexp;
})($ || ($ = {}));
//mol/regexp/regexp.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_dimmer extends $.$mol_dimmer {
            parts() {
                const needle = this.needle();
                if (needle.length < 2)
                    return [this.haystack()];
                let chunks = [];
                let strings = this.strings();
                for (let index = 0; index < strings.length; index++) {
                    if (strings[index] === '')
                        continue;
                    chunks.push((index % 2) ? this.High(index) : this.Low(index));
                }
                return chunks;
            }
            strings() {
                const options = this.needle().split(/\s+/g).filter(Boolean);
                if (!options.length)
                    return [this.haystack()];
                const variants = { ...options };
                const regexp = $mol_regexp.from({ needle: variants }, { ignoreCase: true });
                return this.haystack().split(regexp);
            }
            string(index) {
                return this.strings()[index];
            }
            *view_find(check, path = []) {
                if (check(this, this.haystack())) {
                    yield [...path, this];
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_dimmer.prototype, "strings", null);
        $$.$mol_dimmer = $mol_dimmer;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/dimmer/dimmer.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/dimmer/dimmer.view.css", "[mol_dimmer] {\n\tdisplay: block;\n\tmax-width: 100%;\n}\n\n[mol_dimmer_low] {\n\tdisplay: inline;\n\topacity: 0.8;\n}\n\n[mol_dimmer_high] {\n\tdisplay: inline;\n\tcolor: var(--mol_theme_focus);\n\ttext-shadow: 0 0;\n}\n");
})($ || ($ = {}));
//mol/dimmer/-css/dimmer.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_nav extends $mol_plugin {
        cycle(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        mod_ctrl() {
            return false;
        }
        mod_shift() {
            return false;
        }
        mod_alt() {
            return false;
        }
        keys_x(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        keys_y(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        current_x(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        current_y(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        event_up(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_down(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_left(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_right(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.event_key(event)
            };
        }
        event_key(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "cycle", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "keys_x", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "keys_y", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "current_x", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "current_y", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_up", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_down", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_left", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_right", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_key", null);
    $.$mol_nav = $mol_nav;
})($ || ($ = {}));
//mol/nav/-view.tree/nav.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_nav extends $.$mol_nav {
            event_key(event) {
                if (!event)
                    return event;
                if (event.defaultPrevented)
                    return;
                if (this.mod_ctrl() && !event.ctrlKey)
                    return;
                if (this.mod_shift() && !event.shiftKey)
                    return;
                if (this.mod_alt() && !event.altKey)
                    return;
                switch (event.keyCode) {
                    case $mol_keyboard_code.up: return this.event_up(event);
                    case $mol_keyboard_code.down: return this.event_down(event);
                    case $mol_keyboard_code.left: return this.event_left(event);
                    case $mol_keyboard_code.right: return this.event_right(event);
                }
            }
            event_up(event) {
                if (!event)
                    return event;
                const keys = this.keys_y();
                if (keys.length < 1)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? 0 : index_y;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_down(event) {
                if (!event)
                    return event;
                const keys = this.keys_y();
                if (keys.length < 1)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? keys.length - 1 : index_y;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_left(event) {
                if (!event)
                    return event;
                const keys = this.keys_x();
                if (keys.length < 1)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? 0 : index_x;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            event_right(event) {
                if (!event)
                    return event;
                const keys = this.keys_x();
                if (keys.length < 1)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? keys.length - 1 : index_x;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            index_y() {
                let index = this.keys_y().indexOf(this.current_y());
                if (index < 0)
                    return null;
                return index;
            }
            index_x() {
                let index = this.keys_x().indexOf(this.current_x());
                if (index < 0)
                    return null;
                return index;
            }
        }
        $$.$mol_nav = $mol_nav;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/nav/nav.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_select extends $mol_pick {
        dictionary(val) {
            if (val !== undefined)
                return val;
            return {};
        }
        options() {
            return [];
        }
        value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        option_label_default() {
            return "";
        }
        Option_row(id) {
            const obj = new this.$.$mol_button_minor();
            obj.event_click = (event) => this.event_select(id, event);
            obj.sub = () => this.option_content(id);
            return obj;
        }
        No_options() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.no_options_message()
            ];
            return obj;
        }
        plugins() {
            return [
                ...super.plugins(),
                this.Nav()
            ];
        }
        hint() {
            return this.$.$mol_locale.text('$mol_select_hint');
        }
        bubble_content() {
            return [
                this.Filter(),
                this.Bubble_pane()
            ];
        }
        Filter() {
            const obj = new this.$.$mol_string();
            obj.value = (val) => this.filter_pattern(val);
            obj.hint = () => this.$.$mol_locale.text('$mol_select_Filter_hint');
            obj.submit = (event) => this.submit(event);
            obj.enabled = () => this.enabled();
            return obj;
        }
        Trigger_icon() {
            const obj = new this.$.$mol_icon_dots_vertical();
            return obj;
        }
        event_select(id, event) {
            if (event !== undefined)
                return event;
            return null;
        }
        option_label(id) {
            return "";
        }
        filter_pattern(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Option_label(id) {
            const obj = new this.$.$mol_dimmer();
            obj.haystack = () => this.option_label(id);
            obj.needle = () => this.filter_pattern();
            return obj;
        }
        option_content(id) {
            return [
                this.Option_label(id)
            ];
        }
        no_options_message() {
            return this.$.$mol_locale.text('$mol_select_no_options_message');
        }
        nav_components() {
            return [];
        }
        option_focused(component) {
            if (component !== undefined)
                return component;
            return null;
        }
        nav_cycle(val) {
            if (val !== undefined)
                return val;
            return true;
        }
        Nav() {
            const obj = new this.$.$mol_nav();
            obj.keys_y = () => this.nav_components();
            obj.current_y = (component) => this.option_focused(component);
            obj.cycle = (val) => this.nav_cycle(val);
            return obj;
        }
        menu_content() {
            return [];
        }
        Menu() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.menu_content();
            return obj;
        }
        Bubble_pane() {
            const obj = new this.$.$mol_scroll();
            obj.sub = () => [
                this.Menu()
            ];
            return obj;
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        enabled() {
            return true;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "dictionary", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "value", null);
    __decorate([
        $mol_mem_key
    ], $mol_select.prototype, "Option_row", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "No_options", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "Filter", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "Trigger_icon", null);
    __decorate([
        $mol_mem_key
    ], $mol_select.prototype, "event_select", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "filter_pattern", null);
    __decorate([
        $mol_mem_key
    ], $mol_select.prototype, "Option_label", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "option_focused", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "nav_cycle", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "Nav", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "Menu", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "Bubble_pane", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "submit", null);
    $.$mol_select = $mol_select;
})($ || ($ = {}));
//mol/select/-view.tree/select.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_match_text(query, values) {
        const tags = query.toLowerCase().trim().split(/\s+/).filter(tag => tag);
        if (tags.length === 0)
            return () => true;
        return (variant) => {
            const vals = values(variant);
            return tags.every(tag => vals.some(val => val.toLowerCase().indexOf(tag) >= 0));
        };
    }
    $.$mol_match_text = $mol_match_text;
})($ || ($ = {}));
//mol/match/text.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_select extends $.$mol_select {
            filter_pattern(next) {
                this.focused();
                return next || '';
            }
            open() {
                this.showed(true);
            }
            options() {
                return Object.keys(this.dictionary());
            }
            options_filtered() {
                let options = this.options();
                options = options.filter($mol_match_text(this.filter_pattern(), (id) => [this.option_label(id)]));
                const index = options.indexOf(this.value());
                if (index >= 0)
                    options = [...options.slice(0, index), ...options.slice(index + 1)];
                return options;
            }
            option_label(id) {
                const value = this.dictionary()[id];
                return (value == null ? id : value) || this.option_label_default();
            }
            option_rows() {
                return this.options_filtered().map((option) => this.Option_row(option));
            }
            option_focused(component) {
                if (component == null) {
                    for (let comp of this.nav_components()) {
                        if (comp && comp.focused())
                            return comp;
                    }
                    return null;
                }
                if (this.showed()) {
                    component.focused(true);
                }
                return component;
            }
            event_select(id, event) {
                this.value(id);
                this.showed(false);
                event?.preventDefault();
            }
            nav_components() {
                if (this.options().length > 1 && this.Filter()) {
                    return [this.Filter(), ...this.option_rows()];
                }
                else {
                    return this.option_rows();
                }
            }
            trigger_content() {
                return [
                    ...this.option_content(this.value()),
                    this.Trigger_icon(),
                ];
            }
            menu_content() {
                return [
                    ...this.option_rows(),
                    ...(this.options_filtered().length === 0) ? [this.No_options()] : []
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "filter_pattern", null);
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "options", null);
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "options_filtered", null);
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "option_focused", null);
        $$.$mol_select = $mol_select;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/select/select.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/select/select.view.css", "[mol_select] {\n\tdisplay: flex;\n\tword-break: normal;\n\talign-self: flex-start;\n}\n\n[mol_select_option_row] {\n\tmin-width: 100%;\n\tpadding: 0;\n\tjustify-content: flex-start;\n}\n\n[mol_select_bubble] {\n\tmin-width: 100%;\n}\n\n[mol_select_filter] {\n\tflex: 1 0 auto;\n\talign-self: stretch;\n}\n\n[mol_select_option_label] {\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tmin-height: 1.5em;\n\tdisplay: block;\n\twhite-space: nowrap;\n}\n\n[mol_select_clear_option_content] {\n\tpadding: .5em 1rem .5rem 0;\n\ttext-align: left;\n\tbox-shadow: var(--mol_theme_line);\n\tflex: 1 0 auto;\n}\n\n[mol_select_no_options] {\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tdisplay: block;\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_select_trigger] {\n\tpadding: 0;\n\tflex: 1 1 auto;\n\tdisplay: flex;\n}\n\n[mol_select_trigger] > * {\n\tmargin-right: -1rem;\n}\n\n[mol_select_trigger] > *:last-child {\n\tmargin-right: 0;\n}\n\n[mol_select_menu] {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n");
})($ || ($ = {}));
//mol/select/-css/select.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $visavis_cube extends $mol_book2 {
        plot() {
            const obj = new this.$.$visavis_plot();
            return obj;
        }
        heatmap(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        order(id) {
            return [];
        }
        order_current(next) {
            if (next !== undefined)
                return next;
            return "nump";
        }
        x_op() {
            return false;
        }
        y_op() {
            return false;
        }
        z_op() {
            return false;
        }
        x_sort(next) {
            if (next !== undefined)
                return next;
            return "nump";
        }
        y_sort(next) {
            if (next !== undefined)
                return next;
            return "nump";
        }
        z_sort(next) {
            if (next !== undefined)
                return next;
            return "nump";
        }
        colorset() {
            return [
                "#3e3f95",
                "#c00",
                "#FE9A2E",
                "#090",
                "#f0f",
                "#09f",
                "#666",
                "#0f3",
                "#0ff",
                "#90c"
            ];
        }
        heatmap_colors() {
            return [
                "rgb(150,0,90)",
                "rgb(0,0,200)",
                "rgb(0,25,255)",
                "rgb(0,152,255)",
                "rgb(44,255,150)",
                "rgb(151,255,0)",
                "rgb(255,234,0)",
                "rgb(255,111,0)",
                "rgb(255,0,0)"
            ];
        }
        pages() {
            return [
                this.Plot(),
                this.Setup()
            ];
        }
        plot_title() {
            return "";
        }
        Root() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        value_min() {
            return 0;
        }
        Heatmap_min() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.value_min()
            ];
            return obj;
        }
        heatmap_color(id) {
            return "";
        }
        Heatmap_color(id) {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                background: this.heatmap_color(id)
            });
            return obj;
        }
        value_max() {
            return 0;
        }
        Heatmap_max() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.value_max()
            ];
            return obj;
        }
        heatmap_color_list() {
            return [
                this.Heatmap_min(),
                this.Heatmap_color("0"),
                this.Heatmap_max()
            ];
        }
        Heatmap_legend() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.heatmap_color_list();
            return obj;
        }
        Side_right() {
            const obj = new this.$.$mol_scroll();
            obj.sub = () => [
                this.Heatmap_legend()
            ];
            return obj;
        }
        plot_body() {
            return [
                this.Root(),
                this.Side_right()
            ];
        }
        draw() {
            return null;
        }
        Plot() {
            const obj = new this.$.$mol_page();
            obj.title = () => this.plot_title();
            obj.body = () => this.plot_body();
            obj.auto = () => this.draw();
            return obj;
        }
        nonformers(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        Nonformers() {
            const obj = new this.$.$mol_check_box();
            obj.hint = () => this.$.$mol_locale.text('$visavis_cube_Nonformers_hint');
            obj.title = () => this.$.$mol_locale.text('$visavis_cube_Nonformers_title');
            obj.checked = (next) => this.nonformers(next);
            return obj;
        }
        Nonformers_label() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => this.$.$mol_locale.text('$visavis_cube_Nonformers_label_title');
            obj.Content = () => this.Nonformers();
            return obj;
        }
        order_dict() {
            return {
                nump: this.$.$mol_locale.text('$visavis_cube_order_dict_nump'),
                num: this.$.$mol_locale.text('$visavis_cube_order_dict_num'),
                size: this.$.$mol_locale.text('$visavis_cube_order_dict_size'),
                rea: this.$.$mol_locale.text('$visavis_cube_order_dict_rea'),
                rpp: this.$.$mol_locale.text('$visavis_cube_order_dict_rpp'),
                rion: this.$.$mol_locale.text('$visavis_cube_order_dict_rion'),
                rcov: this.$.$mol_locale.text('$visavis_cube_order_dict_rcov'),
                rmet: this.$.$mol_locale.text('$visavis_cube_order_dict_rmet'),
                tmelt: this.$.$mol_locale.text('$visavis_cube_order_dict_tmelt'),
                eneg: this.$.$mol_locale.text('$visavis_cube_order_dict_eneg')
            };
        }
        X_order_select() {
            const obj = new this.$.$mol_select();
            obj.value = (next) => this.x_sort(next);
            obj.dictionary = () => this.order_dict();
            return obj;
        }
        X_order_label() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => this.$.$mol_locale.text('$visavis_cube_X_order_label_title');
            obj.Content = () => this.X_order_select();
            return obj;
        }
        Y_order_select() {
            const obj = new this.$.$mol_select();
            obj.value = (next) => this.y_sort(next);
            obj.dictionary = () => this.order_dict();
            return obj;
        }
        Y_order_label() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => this.$.$mol_locale.text('$visavis_cube_Y_order_label_title');
            obj.Content = () => this.Y_order_select();
            return obj;
        }
        Z_order_select() {
            const obj = new this.$.$mol_select();
            obj.value = (next) => this.z_sort(next);
            obj.dictionary = () => this.order_dict();
            return obj;
        }
        Z_order_label() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => this.$.$mol_locale.text('$visavis_cube_Z_order_label_title');
            obj.Content = () => this.Z_order_select();
            return obj;
        }
        Setup() {
            const obj = new this.$.$mol_page();
            obj.title = () => this.$.$mol_locale.text('$visavis_cube_Setup_title');
            obj.body = () => [
                this.Nonformers_label(),
                this.X_order_label(),
                this.Y_order_label(),
                this.Z_order_label()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $visavis_cube.prototype, "plot", null);
    __decorate([
        $mol_mem
    ], $visavis_cube.prototype, "heatmap", null);
    __decorate([
        $mol_mem
    ], $visavis_cube.prototype, "order_current", null);
    __decorate([
        $mol_mem
    ], $visavis_cube.prototype, "x_sort", null);
    __decorate([
        $mol_mem
    ], $visavis_cube.prototype, "y_sort", null);
    __decorate([
        $mol_mem
    ], $visavis_cube.prototype, "z_sort", null);
    __decorate([
        $mol_mem
    ], $visavis_cube.prototype, "Root", null);
    __decorate([
        $mol_mem
    ], $visavis_cube.prototype, "Heatmap_min", null);
    __decorate([
        $mol_mem_key
    ], $visavis_cube.prototype, "Heatmap_color", null);
    __decorate([
        $mol_mem
    ], $visavis_cube.prototype, "Heatmap_max", null);
    __decorate([
        $mol_mem
    ], $visavis_cube.prototype, "Heatmap_legend", null);
    __decorate([
        $mol_mem
    ], $visavis_cube.prototype, "Side_right", null);
    __decorate([
        $mol_mem
    ], $visavis_cube.prototype, "Plot", null);
    __decorate([
        $mol_mem
    ], $visavis_cube.prototype, "nonformers", null);
    __decorate([
        $mol_mem
    ], $visavis_cube.prototype, "Nonformers", null);
    __decorate([
        $mol_mem
    ], $visavis_cube.prototype, "Nonformers_label", null);
    __decorate([
        $mol_mem
    ], $visavis_cube.prototype, "X_order_select", null);
    __decorate([
        $mol_mem
    ], $visavis_cube.prototype, "X_order_label", null);
    __decorate([
        $mol_mem
    ], $visavis_cube.prototype, "Y_order_select", null);
    __decorate([
        $mol_mem
    ], $visavis_cube.prototype, "Y_order_label", null);
    __decorate([
        $mol_mem
    ], $visavis_cube.prototype, "Z_order_select", null);
    __decorate([
        $mol_mem
    ], $visavis_cube.prototype, "Z_order_label", null);
    __decorate([
        $mol_mem
    ], $visavis_cube.prototype, "Setup", null);
    $.$visavis_cube = $visavis_cube;
})($ || ($ = {}));
//visavis/cube/-view.tree/cube.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_data_boolean = (val) => {
        if (typeof val === 'boolean')
            return val;
        return $mol_fail(new $mol_data_error(`${val} is not a boolean`));
    };
})($ || ($ = {}));
//mol/data/boolean/boolean.ts
;
"use strict";
var $;
(function ($) {
    function $mol_data_nullable(sub) {
        return $mol_data_setup((val) => {
            if (val === null)
                return null;
            return sub(val);
        }, sub);
    }
    $.$mol_data_nullable = $mol_data_nullable;
})($ || ($ = {}));
//mol/data/nullable/nullable.ts
;
"use strict";
var $;
(function ($) {
    class $lib_d3 extends $mol_object2 {
        static all() {
            return $mol_import.script('https://cdn.jsdelivr.net/npm/d3@7').d3;
        }
    }
    __decorate([
        $mol_mem
    ], $lib_d3, "all", null);
    $.$lib_d3 = $lib_d3;
})($ || ($ = {}));
//lib/d3/d3.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$visavis_element_prop = {
            "num": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95],
            "nump": [0, 1, 112, 2, 8, 82, 88, 94, 100, 106, 113, 3, 9, 83, 89, 95, 101, 107, 114, 4, 10, 14, 46, 50, 54, 58, 62, 66, 70, 74, 78, 84, 90, 96, 102, 108, 115, 5, 11, 15, 47, 51, 55, 59, 63, 67, 71, 75, 79, 85, 91, 97, 103, 109, 116, 6, 12, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 86, 92, 98, 104, 110, 117, 7, 13, 17, 19, 21, 23, 25, 27, 29],
            "size": [0, 0.040000098, 0.05525814, 0.32352134, 0.149871021, 0.15316946, 0.152079019, 0.147837836, 0.141252647, 0.130400994, 0.118123987, 0.578463822, 0.235527361, 0.222322819, 0.208407341, 0.19392461, 0.178988166, 0.160596861, 0.14201091, 0.692195698, 0.671411055, 0.64709144, 0.440998616, 0.425579654, 0.410235863, 0.394967358, 0.379774576, 0.364658122, 0.349618659, 0.334656835, 0.310912262, 0.287688252, 0.264934676, 0.242609734, 0.220678182, 0.195297025, 0.170450145, 0.832019702, 0.797564264, 0.762242103, 0.515950935, 0.494387183, 0.473421463, 0.452993466, 0.433052136, 0.413553912, 0.394461351, 0.375742041, 0.347395886, 0.319938571, 0.293280312, 0.267345197, 0.242068451, 0.213172397, 0.185071259, 0.910157427, 0.868793456, 0.828185801, 0.810462652, 0.793233638, 0.776484764, 0.760190637, 0.744322073, 0.728849599, 0.713745039, 0.698982175, 0.684536953, 0.670387461, 0.65651381, 0.642897972, 0.629523601, 0.616375866, 0.588840308, 0.562314966, 0.536696361, 0.51189659, 0.487840384, 0.464462811, 0.441707474, 0.419525064, 0.386690726, 0.355029594, 0.324425963, 0.294781292, 0.266010922, 0.233351806, 0.201712905, 1.0, 0.952025289, 0.905996701, 0.885161237, 0.864979518, 0.845420273, 0.826445343, 0.808015348, 0.790092251],
            "rea": [0, 2.953092434, 2.137675759, 0.365119614, 0.788170962, 0.771198036, 0.776727701, 0.799010527, 0.836260342, 0.905851889, 0.999999998, 0.204202895, 0.501529786, 0.531317421, 0.56679379, 0.609123241, 0.659954172, 0.735531107, 0.831795156, 0.170651143, 0.175933932, 0.182546051, 0.267855686, 0.27756023, 0.28794164, 0.299072783, 0.311037111, 0.323930772, 0.337865225, 0.352970489, 0.379927077, 0.410597187, 0.445860802, 0.486888901, 0.535277144, 0.604842736, 0.693011946, 0.141972584, 0.148105917, 0.154969119, 0.228944225, 0.238930116, 0.249511262, 0.260763114, 0.272770822, 0.28563141, 0.299456427, 0.31437522, 0.340027017, 0.369208334, 0.402768213, 0.441840692, 0.487977621, 0.554124213, 0.63826219, 0.129784127, 0.135963256, 0.142629814, 0.145748835, 0.148914495, 0.1521266, 0.155387322, 0.158700099, 0.162069084, 0.165498855, 0.168994276, 0.172560424, 0.17620256, 0.179926127, 0.183736755, 0.187640284, 0.191642784, 0.200604451, 0.210067301, 0.22009463, 0.230757519, 0.242136549, 0.254323886, 0.267425828, 0.281565982, 0.305474062, 0.332715889, 0.364101522, 0.400717379, 0.444056906, 0.506205582, 0.58560451, 0.118123987, 0.124076522, 0.130380151, 0.133449119, 0.136562756, 0.139722208, 0.142930186, 0.146190276, 0.149506576],
            "rpp": [0, 1.25, 0, 1.61, 1.08, 0.795, 0.64, 0.54, 0.465, 0.405, 0, 2.65, 2.03, 1.675, 1.42, 1.24, 1.1, 1.01, 0, 3.69, 3.0, 2.75, 2.58, 2.43, 2.44, 2.22, 2.11, 2.02, 2.18, 2.04, 1.88, 1.695, 1.56, 1.415, 1.285, 1.2, 0, 4.1, 3.21, 2.94, 2.825, 2.76, 2.72, 2.65, 2.605, 2.52, 2.45, 2.375, 2.215, 2.05, 1.88, 1.765, 1.67, 1.585, 0, 4.31, 3.402, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2.91, 2.79, 2.735, 2.68, 2.65, 2.628, 2.7, 2.66, 2.41, 2.235, 2.09, 1.997, 1.9, 1.83, 0, 4.37, 3.53, 0, 0, 0, 0, 0, 0, 0],
            "rion": [0, 0, 0, 0.6, 0.3, 0.2, 0.15, 0.12, 0.1, 0.09, 0, 0.96, 0.63, 0.5, 0.42, 0.36, 0.32, 0.28, 0, 1.33, 0.96, 0.8, 0.68, 0.65, 0.62, 0.6, 0.59, 0.62, 0.59, 0.96, 0.78, 0.63, 0.53, 0.46, 0.41, 0.37, 0, 1.49, 1.11, 0.93, 0.8, 0.77, 0.75, 0.72, 0.69, 0.75, 0.85, 1.12, 0.93, 0.76, 0.65, 0.57, 0.51, 0.46, 0, 1.65, 1.26, 1.06, 1.05, 1.04, 1.03, 1.02, 1.01, 1.01, 1.0, 0.99, 0.98, 0.97, 0.96, 0.95, 0.94, 0.93, 0.8, 0.77, 0.75, 0.72, 0.69, 0.81, 0.9, 1.11, 0.97, 0.9, 0.83, 0.77, 0.56, 0.51, 0, 1.74, 1.34, 1.14, 1.11, 1.08, 1.05, 1.04, 1.03, 1.02],
            "rcov": [0, 30.0, 0, 123.0, 89.0, 88.0, 77.0, 70.0, 66.0, 58.0, 0, 0, 136.0, 125.0, 117.0, 110.0, 104.0, 99.0, 0, 203.0, 174.0, 144.0, 132.0, 0, 0, 117.0, 116.0, 116.0, 115.0, 117.0, 125.0, 125.0, 122.0, 121.0, 117.0, 114.0, 0, 217.0, 192.0, 162.0, 145.0, 134.0, 129.0, 0, 124.0, 125.0, 128.0, 134.0, 141.0, 150.0, 140.0, 141.0, 137.0, 133.0, 0, 235.0, 198.0, 169.0, 165.0, 165.0, 164.0, 0, 166.0, 185.0, 161.0, 159.0, 159.0, 158.0, 157.0, 156.0, 170.0, 156.0, 144.0, 134.0, 130.0, 128.0, 126.0, 126.0, 129.0, 134.0, 144.0, 155.0, 154.0, 152.0, 153.0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            "rmet": [0, 0.78, 0, 1.562, 1.128, 0.98, 0.916, 0.88, 0.89, 0, 0, 1.911, 1.602, 1.432, 1.319, 1.28, 1.27, 0, 0, 2.376, 1.974, 1.941, 1.462, 1.346, 1.36, 1.304, 1.274, 1.252, 1.246, 1.278, 1.394, 1.411, 1.369, 1.39, 1.4, 0, 0, 2.546, 2.151, 1.801, 1.602, 1.468, 1.4, 1.36, 1.339, 1.345, 1.376, 1.445, 1.568, 1.663, 1.623, 1.59, 1.6, 0, 0, 2.731, 2.243, 1.877, 1.715, 1.828, 1.821, 1.81, 1.802, 1.799, 1.802, 1.782, 1.773, 1.766, 1.757, 1.746, 1.74, 1.734, 1.58, 1.467, 1.408, 1.375, 1.353, 1.357, 1.387, 1.442, 1.573, 1.716, 1.75, 1.7, 1.76, 0, 0, 2.8, 2.26, 1.878, 1.798, 1.63, 1.56, 1.555, 1.58, 1.81],
            "tmelt": [0, 0.003664921, 0.00026178, 0.118586387, 0.405759162, 0.673560209, 1.0, 0.016492147, 0.014397906, 0.014136126, 0.006544503, 0.097120419, 0.241361257, 0.244240838, 0.440575916, 0.082984293, 0.10104712, 0.045026178, 0.021989529, 0.088219895, 0.290837696, 0.47434555, 0.506020942, 0.566230366, 0.557591623, 0.397382199, 0.473298429, 0.462827225, 0.451832461, 0.354973822, 0.181413613, 0.079319372, 0.317015707, 0.285340314, 0.128272251, 0.069633508, 0.030628272, 0.081675393, 0.273036649, 0.470157068, 0.556282723, 0.717539267, 0.756544503, 0.640052356, 0.67617801, 0.586125654, 0.477748691, 0.323036649, 0.155497382, 0.112565445, 0.132198953, 0.236649215, 0.189267016, 0.101308901, 0.042146597, 0.079057592, 0.261256545, 0.312303665, 0.280366492, 0.315183246, 0.338743455, 0.377225131, 0.352094241, 0.286649215, 0.414921466, 0.427486911, 0.439790576, 0.456282723, 0.469895288, 0.47591623, 0.287172775, 0.504973822, 0.653141361, 0.856806283, 0.964136126, 0.903926702, 0.868586387, 0.702356021, 0.535340314, 0.35, 0.061256545, 0.15104712, 0.157329843, 0.142408377, 0.137958115, 0.15052356, 0.052879581, 0.078534031, 0.254712042, 0.346335079, 0.528795812, 0.553141361, 0.368062827, 0.239005236, 0.239267016, 0.331675393],
            "eneg": [0, 3.69, 6.29, 2.32, 3.71, 4.88, 6.08, 7.31, 8.5, 9.7, 10.92, 2.27, 3.37, 4.21, 5.08, 5.95, 6.79, 7.64, 8.5, 2.08, 3.0, 3.11, 3.19, 3.27, 3.41, 3.4, 3.47, 3.53, 3.59, 3.74, 3.7, 4.37, 5.09, 5.82, 6.53, 7.21, 7.93, 2.04, 2.89, 3.04, 3.14, 3.25, 3.41, 3.35, 3.47, 3.57, 3.73, 3.81, 3.6, 4.19, 4.83, 5.47, 6.08, 6.69, 7.29, 1.97, 2.76, 2.89, 2.86, 2.83, 2.85, 2.87, 2.89, 2.91, 3.02, 2.95, 2.97, 2.99, 3.0, 3.02, 3.04, 3.11, 3.3, 3.45, 3.48, 3.5, 3.57, 3.6, 3.71, 3.84, 3.82, 4.34, 4.92, 5.47, 6.01, 6.56, 7.12, 2.02, 2.78, 2.93, 3.02, 2.98, 2.98, 2.98, 2.96, 2.97]
        };
        $$.$visavis_element_list = [null, 'H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar', 'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr', 'Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'Te', 'I', 'Xe', 'Cs', 'Ba', 'La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu', 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg', 'Tl', 'Pb', 'Bi', 'Po', 'At', 'Rn', 'Fr', 'Ra', 'Ac', 'Th', 'Pa', 'U', 'Np', 'Pu', 'Am'];
        $$.$visavis_elemental_names = {
            "num": "atomic number",
            "nump": "periodic number",
            "size": "atomic size",
            "rea": "atomic reactivity",
            "rpp": "pseudopotential radii",
            "rion": "ionic radii",
            "rcov": "covalent radii",
            "rmet": "metallic radii",
            "tmelt": "melting temperature",
            "eneg": "electronegativity"
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/element/element.ts
;
"use strict";
var $;
(function ($) {
    class $lib_plotly extends $mol_object2 {
        static all() {
            return $mol_import.script('https://cdn.plot.ly/plotly-2.16.1.min.js').Plotly;
        }
    }
    __decorate([
        $mol_mem
    ], $lib_plotly, "all", null);
    $.$lib_plotly = $lib_plotly;
})($ || ($ = {}));
//lib/plotly/plotly.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const $visavis_cube_json = $mol_data_record({
            payload: $mol_data_record({
                tcube: $mol_data_optional($mol_data_boolean),
                points: $mol_data_record({
                    x: $mol_data_array($mol_data_number),
                    y: $mol_data_array($mol_data_number),
                    z: $mol_data_array($mol_data_number),
                    v: $mol_data_array($mol_data_number),
                    labels: $mol_data_array($mol_data_string),
                }),
                fixel: $mol_data_nullable($mol_data_boolean),
                xtitle: $mol_data_optional($mol_data_string),
                ytitle: $mol_data_optional($mol_data_string),
                ztitle: $mol_data_optional($mol_data_string),
            }),
        });
        class $visavis_cube extends $.$visavis_cube {
            plot_body() {
                return [
                    this.Root(),
                    ...this.heatmap() ? [this.Side_right()] : [],
                ];
            }
            plot_title() {
                return this.plot().id();
            }
            json() {
                return $visavis_cube_json(this.plot().json());
            }
            value_list() {
                return this.json().payload.points.v.slice().sort((a, b) => a - b);
            }
            value_min() {
                return this.value_list()[0];
            }
            value_max() {
                return this.value_list().slice(-1)[0];
            }
            order(order) {
                return $lib_d3.all().range(95).sort((a, b) => $visavis_element_prop[order][a + 1] - $visavis_element_prop[order][b + 1]);
            }
            heatmap() {
                return this.json().payload.points.v.some(val => Math.floor(val) !== val);
            }
            heatmap_color(index) {
                return this.heatmap_colors()[index];
            }
            heatmap_color_list() {
                return [
                    this.Heatmap_min(),
                    ...this.heatmap_colors().map((_, index) => this.Heatmap_color(index)),
                    this.Heatmap_max(),
                ];
            }
            marker() {
                return {
                    color: this.heatmap() ? this.json().payload.points.v : this.colorset()[0],
                    ...this.heatmap() ? { colorscale: 'Rainbow' } : {},
                    size: 4,
                    opacity: 0.9
                };
            }
            data_nonformers() {
                const { x, y, z, labels } = $visavis_nonformer_pd_tri;
                return {
                    type: "scatter3d",
                    text: labels,
                    mode: "markers",
                    hoverinfo: "text",
                    marker: { color: "#ccc", size: 4, opacity: 0.9 },
                    projection: { x: { show: true, opacity: 0.25 }, y: { show: true, opacity: 0.25 }, z: { show: true, opacity: 0.25 } },
                    ...this.convert_to_axes(x, y, z, this.x_sort(), this.y_sort(), this.z_sort())
                };
            }
            data() {
                return {
                    type: "scatter3d",
                    text: this.json().payload.points.labels,
                    mode: "markers",
                    hoverinfo: "text",
                    marker: this.marker(),
                    projection: { x: { show: true, opacity: 0.05 }, y: { show: true, opacity: 0.05 }, z: { show: true, opacity: 0.05 } },
                    ...this.convert_to_axes(this.json().payload.points.x, this.json().payload.points.y, this.json().payload.points.z, this.x_sort(), this.y_sort(), this.z_sort())
                };
            }
            data_shown() {
                return [
                    ...this.nonformers() ? [this.data_nonformers()] : [],
                    this.data(),
                ];
            }
            scene() {
                return {
                    aspectmode: 'cube',
                    xaxis: {
                        title: 'x_sort',
                        range: [1, 95],
                        titlefont: { color: this.x_op() ? '#000' : '#fff', size: 10 },
                        backgroundcolor: '#fbfbfb',
                        gridcolor: '#fff',
                        showbackground: true,
                        showticklabels: !this.x_op(),
                        showline: false,
                        tickfont: { size: 11 },
                        ticktext: this.order_els(this.x_sort()).slice(0, 95).filter(function (el, idx) { return idx % 2 === 0; }),
                        tickvals: $lib_d3.all().range(1, 96, 2)
                    },
                    yaxis: {
                        title: 'y_sort',
                        range: [1, 95],
                        titlefont: { color: this.y_op() ? '#000' : '#fff', size: 10 },
                        backgroundcolor: '#f6f6f6',
                        gridcolor: '#fff',
                        showbackground: true,
                        showticklabels: !this.y_op(),
                        showline: false,
                        tickfont: { size: 11 },
                        ticktext: this.order_els(this.y_sort()).slice(0, 95).filter(function (el, idx) { return idx % 2 === 0; }),
                        tickvals: $lib_d3.all().range(1, 96, 2)
                    },
                    zaxis: {
                        title: 'z_sort',
                        range: [1, 95],
                        titlefont: { color: this.z_op() ? '#000' : '#fff', size: 10 },
                        backgroundcolor: '#eee',
                        gridcolor: '#fff',
                        showbackground: true,
                        showticklabels: !this.z_op(),
                        showline: false,
                        tickfont: { size: 11 },
                        ticktext: this.order_els(this.z_sort()).slice(0, 95).filter(function (el, idx) { return idx % 2 === 0; }),
                        tickvals: $lib_d3.all().range(1, 96, 2)
                    },
                    camera: { projection: { type: 'perspective' } },
                };
            }
            draw() {
                this.Root().view_rect();
                return $lib_plotly.all().react(this.Root().dom_node(), this.data_shown(), {
                    font: { family: "Exo2" },
                    showlegend: false,
                    scene: this.scene(),
                    margin: {
                        l: 0,
                        r: 0,
                        b: 0,
                        t: 0,
                        pad: 0
                    }
                }, { displaylogo: false, displayModeBar: false, staticPlot: false });
            }
            ter_op(op, a, b, c) {
                switch (op) {
                    case 'sum': return a + b + c;
                    case 'diff': return Math.abs(a - b) + Math.abs(a - c) + Math.abs(b - c);
                    case 'product': return (a * b) + (a * c) + (b * c);
                    case 'ratio': return (a / b) + (a / c) + (b / c);
                    case 'max': return ((a > b && a > c) ? a : ((b > a && b > c) ? b : c));
                    case 'min': return ((a < b && a < c) ? a : ((b < a && b < c) ? b : c));
                }
            }
            convert_to_axes(x_src, y_src, z_src, x_sort, y_sort, z_sort, x_op, y_op, z_op) {
                var converted = { 'x': [], 'y': [], 'z': [] };
                if (x_op) {
                    var x_temp = [];
                    for (var i = 0; i < x_src.length; i++) {
                        x_temp.push(this.ter_op(x_op, $visavis_element_prop[x_sort][x_src[i]], $visavis_element_prop[x_sort][y_src[i]], $visavis_element_prop[x_sort][z_src[i]]));
                    }
                    var x_renorm = $lib_d3.all().scaleQuantize().range($visavis_element_prop.num.slice(1)).domain([$lib_d3.all().min(x_temp), $lib_d3.all().max(x_temp)]);
                    converted['x'] = x_temp.map(x_renorm);
                }
                else {
                    for (var i = 0; i < x_src.length; i++) {
                        converted['x'].push((x_sort == 'num') ? x_src[i] : this.order(x_sort).indexOf(x_src[i] - 1) + 1);
                    }
                }
                if (y_op) {
                    var y_temp = [];
                    for (var i = 0; i < y_src.length; i++) {
                        y_temp.push(this.ter_op(y_op, $visavis_element_prop[y_sort][x_src[i]], $visavis_element_prop[y_sort][y_src[i]], $visavis_element_prop[y_sort][z_src[i]]));
                    }
                    var y_renorm = $lib_d3.all().scaleQuantize().range($visavis_element_prop.num.slice(1)).domain([$lib_d3.all().min(y_temp), $lib_d3.all().max(y_temp)]);
                    converted['y'] = y_temp.map(y_renorm);
                }
                else {
                    for (var i = 0; i < y_src.length; i++) {
                        converted['y'].push((y_sort == 'num') ? y_src[i] : this.order(y_sort).indexOf(y_src[i] - 1) + 1);
                    }
                }
                if (z_op) {
                    var z_temp = [];
                    for (var i = 0; i < z_src.length; i++) {
                        z_temp.push(this.ter_op(z_op, $visavis_element_prop[z_sort][x_src[i]], $visavis_element_prop[z_sort][y_src[i]], $visavis_element_prop[z_sort][z_src[i]]));
                    }
                    var z_renorm = $lib_d3.all().scaleQuantize().range($visavis_element_prop.num.slice(1)).domain([$lib_d3.all().min(z_temp), $lib_d3.all().max(z_temp)]);
                    converted['z'] = z_temp.map(z_renorm);
                }
                else {
                    for (var i = 0; i < z_src.length; i++) {
                        converted['z'].push((z_sort == 'num') ? z_src[i] : this.order(z_sort).indexOf(z_src[i] - 1) + 1);
                    }
                }
                return converted;
            }
            order_els(prop) {
                return $visavis_element_list.slice(1).sort(function (a, b) {
                    return $visavis_element_prop[prop][$visavis_element_list.indexOf(a)] - $visavis_element_prop[prop][$visavis_element_list.indexOf(b)];
                });
            }
        }
        __decorate([
            $mol_mem
        ], $visavis_cube.prototype, "value_list", null);
        __decorate([
            $mol_mem_key
        ], $visavis_cube.prototype, "order", null);
        __decorate([
            $mol_mem
        ], $visavis_cube.prototype, "heatmap", null);
        __decorate([
            $mol_mem
        ], $visavis_cube.prototype, "marker", null);
        __decorate([
            $mol_mem
        ], $visavis_cube.prototype, "data_nonformers", null);
        __decorate([
            $mol_mem
        ], $visavis_cube.prototype, "data", null);
        __decorate([
            $mol_mem
        ], $visavis_cube.prototype, "data_shown", null);
        __decorate([
            $mol_mem
        ], $visavis_cube.prototype, "scene", null);
        __decorate([
            $mol_mem
        ], $visavis_cube.prototype, "draw", null);
        __decorate([
            $mol_mem_key
        ], $visavis_cube.prototype, "order_els", null);
        $$.$visavis_cube = $visavis_cube;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/cube/cube.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem, px } = $mol_style_unit;
        $mol_style_define($visavis_cube, {
            Plot: {
                flex: {
                    grow: 1,
                    shrink: 0,
                },
            },
            Setup: {
                flex: {
                    basis: rem(25),
                    shrink: 0,
                },
                Body: {
                    padding: $mol_gap.block,
                },
            },
            Root: {
                width: $mol_style_unit.per(100),
                height: $mol_style_unit.per(100),
            },
            X_order_label: {
                zIndex: 3,
            },
            Y_order_label: {
                zIndex: 2,
            },
            Z_order_label: {
                zIndex: 1,
            },
            Side_right: {
                position: 'absolute',
                top: per(50),
                right: $mol_gap.space,
                transform: 'translateY(-50%)'
            },
            Heatmap_color: {
                width: rem(1),
                height: rem(1),
                margin: px(1),
            },
            Heatmap_legend: {
                alignItems: 'flex-end',
                flex: {
                    direction: 'column-reverse',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/cube/cube.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $visavis_phase extends $mol_book2 {
        plot() {
            const obj = new this.$.$visavis_plot();
            return obj;
        }
        colors_by_nphases() {
            return {
                1: "#d1cde6",
                alt_1: "#9cf",
                3: "#fc6",
                4: "#FCD3C2",
                5: "#CCE7D4",
                default: "#eee"
            };
        }
        line() {
            return {
                phase: {
                    width: 0.2
                },
                compound: {
                    width: 5,
                    color: "#d1cde6"
                },
                default: {
                    width: 0.5,
                    color: "#666"
                }
            };
        }
        is_triangle() {
            return false;
        }
        triangle() {
            return {
                datamock: [
                    {
                        a: [],
                        b: [],
                        c: [],
                        type: "scatterternary"
                    }
                ],
                layout: {
                    hovermode: "closest",
                    font: {
                        size: 20,
                        color: "#333",
                        family: "Exo2"
                    },
                    ternary: {
                        aaxis: {
                            title: this.json_title_a(),
                            ticks: "",
                            showline: true,
                            showgrid: false,
                            fixedrange: true,
                            linewidth: 1
                        },
                        baxis: {
                            title: this.json_title_b(),
                            ticks: "",
                            showline: true,
                            showgrid: false,
                            fixedrange: true,
                            linewidth: 1
                        },
                        caxis: {
                            title: this.json_title_c(),
                            ticks: "",
                            showline: true,
                            showgrid: false,
                            fixedrange: true,
                            linewidth: 1
                        }
                    },
                    shapes: this.layout_shapes(),
                    annotations: this.annotations()
                }
            };
        }
        triangle_shape_fix() {
            return {
                type: "path",
                path: "M 0,0 L 0.5,0.866 L 1,0",
                line: {
                    width: 0
                }
            };
        }
        triangle_annotations() {
            return [
                {
                    text: this.triangle_annotation_text(),
                    "x:": -0.25,
                    "y:": 0.96,
                    showarrow: false,
                    xref: "papper",
                    yref: "papper",
                    font: {
                        size: 15,
                        family: "Exo2"
                    }
                }
            ];
        }
        rectangle() {
            return {
                datamock: [
                    {
                        x: [],
                        y: [],
                        type: "scatter",
                        xaxis: "x",
                        yaxis: "y"
                    },
                    {
                        x: [],
                        y: [],
                        type: "scatter",
                        xaxis: "x2",
                        yaxis: "y2"
                    }
                ],
                layout: {
                    hovermode: "closest",
                    font: {
                        size: 16,
                        color: "#333",
                        family: "Exo2"
                    },
                    xaxis: {
                        title: "at. %",
                        range: this.json_comp_range(),
                        fixedrange: true,
                        showticks: this.show_ticks(),
                        showline: true,
                        zeroline: false,
                        showgrid: false,
                        ticklen: 4,
                        tickfont: {
                            size: 12
                        },
                        hoverformat: ".2r"
                    },
                    xaxis2: {
                        range: this.json_comp_range(),
                        fixedrange: true,
                        showticks: this.show_ticks(),
                        showline: true,
                        zeroline: false,
                        showgrid: false,
                        ticklen: 4,
                        tickfont: {
                            size: 12
                        },
                        side: "top",
                        overlaying: "x"
                    },
                    yaxis: {
                        title: "T, &deg;C",
                        range: this.json_temp(),
                        fixedrange: true,
                        showticks: this.show_ticks(),
                        showticklabels: this.data_demo(),
                        showline: true,
                        zeroline: false,
                        showgrid: false,
                        ticklen: 4,
                        tickfont: {
                            size: 12
                        },
                        hoverformat: ".2r"
                    },
                    yaxis2: {
                        range: this.json_temp(),
                        fixedrange: true,
                        showticks: this.show_ticks(),
                        showticklabels: this.data_demo(),
                        showline: true,
                        zeroline: false,
                        showgrid: false,
                        ticklen: 4,
                        tickfont: {
                            size: 12
                        },
                        side: "right",
                        overlaying: "y"
                    },
                    shapes: this.layout_shapes(),
                    annotations: this.annotations()
                }
            };
        }
        rectangle_annotations() {
            return [
                {
                    text: this.json_title_a(),
                    x: -0.03,
                    y: -0.11,
                    showarrow: false,
                    xref: "papper",
                    yref: "papper",
                    font: {
                        size: 20,
                        family: "Exo2"
                    }
                },
                {
                    text: this.json_title_b(),
                    x: 1.03,
                    y: -0.11,
                    showarrow: false,
                    xref: "papper",
                    yref: "papper",
                    font: {
                        size: 20,
                        family: "Exo2"
                    }
                }
            ];
        }
        annotation() {
            return {
                show_arrow: false,
                font: {
                    size: 13,
                    family: "Exo2"
                }
            };
        }
        annotation_textangle(id) {
            return 0;
        }
        plot_options() {
            return {
                displaylogo: false,
                displayModeBar: false,
                staticPlot: false
            };
        }
        pages() {
            return [
                this.Plot()
            ];
        }
        json_title_a() {
            return "";
        }
        json_title_b() {
            return "";
        }
        json_title_c() {
            return "";
        }
        layout_shapes() {
            return [];
        }
        annotations() {
            return [];
        }
        triangle_annotation_text() {
            return "";
        }
        json_comp_range() {
            return [];
        }
        show_ticks() {
            return false;
        }
        json_temp() {
            return [];
        }
        data_demo() {
            return false;
        }
        plot_title() {
            return "";
        }
        label(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Label() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.label()
            ];
            return obj;
        }
        mousemove() {
            return null;
        }
        Root() {
            const obj = new this.$.$mol_view();
            obj.dom_name = () => "div";
            obj.event = () => ({
                mousemove: this.mousemove()
            });
            return obj;
        }
        draw() {
            return null;
        }
        Plot() {
            const obj = new this.$.$mol_page();
            obj.title = () => this.plot_title();
            obj.body = () => [
                this.Label(),
                this.Root()
            ];
            obj.auto = () => this.draw();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $visavis_phase.prototype, "plot", null);
    __decorate([
        $mol_mem
    ], $visavis_phase.prototype, "label", null);
    __decorate([
        $mol_mem
    ], $visavis_phase.prototype, "Label", null);
    __decorate([
        $mol_mem
    ], $visavis_phase.prototype, "Root", null);
    __decorate([
        $mol_mem
    ], $visavis_phase.prototype, "Plot", null);
    $.$visavis_phase = $visavis_phase;
})($ || ($ = {}));
//visavis/phase/-view.tree/phase.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_data_const(ref) {
        return $mol_data_setup((val) => {
            if ($mol_compare_deep(val, ref))
                return ref;
            return $mol_fail(new $mol_data_error(`${JSON.stringify(val)} is not ${JSON.stringify(ref)}`));
        }, ref);
    }
    $.$mol_data_const = $mol_data_const;
})($ || ($ = {}));
//mol/data/const/const.ts
;
"use strict";
var $;
(function ($) {
    function $mol_data_dict(sub) {
        return $mol_data_setup((val) => {
            if (Object.getPrototypeOf(val) !== Object.prototype) {
                return $mol_fail(new $mol_data_error(`${val} is not an Object`));
            }
            const res = {};
            for (const field in val) {
                try {
                    res[field] = sub(val[field]);
                }
                catch (error) {
                    if (error instanceof Promise)
                        return $mol_fail_hidden(error);
                    error.message = `[${JSON.stringify(field)}] ${error.message}`;
                    return $mol_fail(error);
                }
            }
            return res;
        }, sub);
    }
    $.$mol_data_dict = $mol_data_dict;
})($ || ($ = {}));
//mol/data/dict/dict.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const Label_json = (val) => {
            if (!Array.isArray(val))
                return $mol_fail(new $mol_data_error(`${val} is not a array`));
            if (val.length < 2 || val.length > 3)
                return $mol_fail(new $mol_data_error(`${val} should have 2 or 3 items`));
            const check = { 0: val[0], 1: val[1], 2: val[2] };
            const obj = $mol_data_record({
                0: $mol_data_string,
                1: $mol_data_array($mol_data_number),
                2: $mol_data_nullable($mol_data_number),
            })(check);
            return Object.values(obj);
        };
        const $visavis_phase_rect_json = $mol_data_record({
            naxes: $mol_data_number,
            arity: $mol_data_number,
            diatype: $mol_data_string,
            chemical_elements: $mol_data_array($mol_data_string),
            temp: $mol_data_array($mol_data_number),
            labels: $mol_data_array(Label_json),
            shapes: $mol_data_array($mol_data_record({
                kind: $mol_data_string,
                svgpath: $mol_data_string,
                label: $mol_data_optional($mol_data_string),
                phase: $mol_data_optional($mol_data_string),
                nphases: $mol_data_optional($mol_data_number),
                is_solid: $mol_data_optional($mol_data_boolean),
                phase_id: $mol_data_optional($mol_data_number),
                reflabel: $mol_data_optional($mol_data_number),
                chemical_elements: $mol_data_optional($mol_data_array($mol_data_string)),
            })),
            entry: $mol_data_string,
            object_type: $mol_data_string,
            use_visavis_type: $mol_data_const('pd'),
            title_a: $mol_data_optional($mol_data_string),
            title_b: $mol_data_optional($mol_data_string),
            object_repr: $mol_data_optional($mol_data_string),
            comp_end: $mol_data_optional($mol_data_dict($mol_data_number)),
            comp_range: $mol_data_optional($mol_data_array($mol_data_number)),
            comp_start: $mol_data_optional($mol_data_dict($mol_data_number)),
            title_c: $mol_data_optional($mol_data_string),
            comp_a: $mol_data_optional($mol_data_dict($mol_data_number)),
            comp_b: $mol_data_optional($mol_data_dict($mol_data_number)),
            comp_c: $mol_data_optional($mol_data_dict($mol_data_number)),
            range_a: $mol_data_optional($mol_data_array($mol_data_number)),
            range_b: $mol_data_optional($mol_data_array($mol_data_number)),
            range_c: $mol_data_optional($mol_data_array($mol_data_number)),
        });
        function get_rect_pd_compound(comp, obj_left, obj_right) {
            const els = Object.keys(obj_left).sort();
            let formula = '';
            let coeff = 0;
            els.forEach(function (el) {
                if (obj_right[el] == obj_left[el])
                    formula += el + ' × ' + obj_left[el].toFixed(2) + ', ';
                else if (obj_right[el] > obj_left[el]) {
                    coeff = obj_left[el] + comp * (obj_right[el] - obj_left[el]);
                    coeff = Math.round(coeff * 100) / 100;
                    if (!coeff)
                        return;
                    formula += el + ' × ' + coeff.toFixed(2) + ', ';
                }
                else {
                    coeff = obj_left[el] - (comp * (obj_left[el] - obj_right[el]));
                    coeff = Math.round(coeff * 100) / 100;
                    if (!coeff)
                        return;
                    formula += el + ' × ' + coeff.toFixed(2) + ', ';
                }
            });
            return formula.substr(0, formula.length - 2);
        }
        function get_tri_pd_compound(a, b, c, obj_a, obj_b, obj_c) {
            const els = Object.keys(obj_a).sort();
            let formula = '';
            let coeff = 0;
            els.forEach(function (el) {
                coeff = Math.round((obj_a[el] * a + obj_b[el] * b + obj_c[el] * c) * 100) / 100;
                if (!coeff)
                    return;
                formula += el + ' &times; ' + coeff.toFixed(2) + ', ';
            });
            return formula.substr(0, formula.length - 2);
        }
        function inside_triangle(x, y, x1, y1, x2, y2, x3, y3) {
            function fAB(x, y, x1, y1, x2, y2, x3, y3) {
                return (y - y1) * (x2 - x1) - (x - x1) * (y2 - y1);
            }
            function fBC(x, y, x1, y1, x2, y2, x3, y3) {
                return (y - y2) * (x3 - x2) - (x - x2) * (y3 - y2);
            }
            function fCA(x, y, x1, y1, x2, y2, x3, y3) {
                return (y - y3) * (x1 - x3) - (x - x3) * (y1 - y3);
            }
            if (fAB(x, y, x1, y1, x2, y2, x3, y3) * fBC(x, y, x1, y1, x2, y2, x3, y3) > 0 && fBC(x, y, x1, y1, x2, y2, x3, y3) * fCA(x, y, x1, y1, x2, y2, x3, y3) > 0)
                return true;
            else
                return false;
        }
        $$.inside_triangle = inside_triangle;
        function cartesian_to_ternary(x, y) {
            const b = y / (Math.sqrt(3) / 2), a = 1 - (x + (y / Math.sqrt(3))), c = 1 - a - b;
            return [a, b, c];
        }
        $$.cartesian_to_ternary = cartesian_to_ternary;
        function fix_comp_impossible(comp_range, obj_left, obj_right) {
            if (comp_range[1] - comp_range[0] == 100)
                return false;
            const els = Object.keys(obj_left);
            let count = 0;
            let fixed = {};
            if (els.length > 2)
                return false;
            for (const el in obj_left) {
                if ((obj_right[el] == 0 && obj_left[el] == 1) || (obj_left[el] == 0 && obj_right[el] == 1))
                    count++;
            }
            if (count == els.length) {
                fixed = { comp_start: obj_left, comp_end: obj_right };
                if (fixed.comp_start[els[0]] == 0) {
                    fixed.comp_start[els[0]] = comp_range[0] / 100;
                    fixed.comp_start[els[1]] = 1 - (comp_range[0] / 100);
                    fixed.comp_end[els[0]] = comp_range[1] / 100;
                    fixed.comp_end[els[1]] = 1 - (comp_range[1] / 100);
                }
                else {
                    fixed.comp_start[els[0]] = 1 - (comp_range[0] / 100);
                    fixed.comp_start[els[1]] = comp_range[0] / 100;
                    fixed.comp_end[els[0]] = 1 - (comp_range[1] / 100);
                    fixed.comp_end[els[1]] = comp_range[1] / 100;
                }
                return fixed;
            }
            return false;
        }
        $$.fix_comp_impossible = fix_comp_impossible;
        class $visavis_phase extends $.$visavis_phase {
            plot_title() {
                return this.plot().id();
            }
            json() {
                return $visavis_phase_rect_json(this.plot().json());
            }
            json_title_b() {
                return this.json().title_b ?? '';
            }
            json_title_a() {
                return this.json().title_a ?? '';
            }
            json_title_c() {
                return this.json().title_c ?? '';
            }
            json_comp_range() {
                return this.json().comp_range ?? [];
            }
            json_temp() {
                return this.json().temp;
            }
            data_demo() {
                return !this.json().comp_a && !this.json().comp_start;
            }
            show_ticks() {
                return this.json().labels.length > 0;
            }
            is_triangle() {
                return this.json().naxes === 3;
            }
            layout_shapes() {
                const list = this.json().shapes.map(obj => ({
                    type: 'path',
                    path: obj.svgpath,
                    line: this.line()[obj.kind] ?? this.line().default,
                    ...obj.kind !== 'phase' && obj.kind !== 'compound' ? { fillOpacity: 0 } : {},
                    ...obj.kind === 'phase' ? {
                        fillcolor: !obj.is_solid && obj.nphases === 1 ? this.colors_by_nphases().alt_1 : this.colors_by_nphases()[obj.nphases] ?? this.colors_by_nphases().default
                    } : {},
                }));
                return this.is_triangle() ? [this.triangle_shape_fix(), ...list] : list;
            }
            annotation_textangle(label) {
                return label[0].replace(/<\/?sub>/g, '').length > 10 ? -65 : 0;
            }
            annotations() {
                const list = this.json().labels.map(label => ({
                    x: label[1][0],
                    y: label[1][1],
                    text: label[0],
                    showarrow: this.annotation().show_arrow,
                    font: this.annotation().font,
                    textangle: this.annotation_textangle(label)
                }));
                return [
                    ...list,
                    ...this.json().title_c && this.json().arity > 2 && !this.data_demo() ? this.triangle_annotations() : [],
                    ...this.json().naxes === 2 ? this.rectangle_annotations() : [],
                ];
            }
            mouseover() {
                const that = $lib_d3.all().select(this);
                console.log(that);
                const idx = that.attr('data-index');
                that.attr('data-state', that.style('fill'));
                that.style({ 'cursor': 'pointer', 'fill': '#3e3f95' });
            }
            mouseout() { }
            click() { }
            mousemove() { }
            subscribe_events() {
                const d3 = $lib_d3.all();
                console.log('is trinagle', this.is_triangle());
                if (this.is_triangle())
                    this.pd_fix_triangle();
                if (this.json().diatype && this.json().diatype.indexOf('projection') !== -1)
                    return;
                const json = this.json();
                const is_triangle = this.is_triangle();
                const figures = d3.selectAll('[visavis_phase_root] .shapelayer path');
                figures.on('mouseover', function () {
                    const that = d3.select(this);
                    let idx = that.attr('data-index');
                    if (is_triangle) {
                        if (idx == 0)
                            return false;
                        idx--;
                    }
                    that.attr('data-state', that.style('fill'));
                    that.style('cursor', 'pointer');
                    that.style('fill', '#3e3f95');
                    const reflabel = json.shapes[idx]?.reflabel;
                    if (reflabel !== undefined && json.labels[reflabel] !== undefined) {
                        d3.select(`g.annotation[data-index="'${reflabel}'"]`).select('text').style('fill', '#f30');
                    }
                });
                figures.on('mouseout', function () {
                    const that = d3.select(this);
                    const state = that.attr('data-state');
                    if (state) {
                        that.style('fill', state);
                        that.style('cursor', 'default');
                        d3.selectAll('[visavis_phase_root] g.annotation').select('text').style('fill', '#000');
                    }
                });
                const canvas = this.Root().dom_node();
                if (!this.is_triangle()) {
                    const fixed = fix_comp_impossible(json.comp_range, json.comp_start, json.comp_end);
                    const comp_start = fixed?.comp_start ?? json.comp_start;
                    const comp_end = fixed?.comp_end ?? json.comp_end;
                    const xaxis = canvas._fullLayout.xaxis;
                    const yaxis = canvas._fullLayout.yaxis;
                    const margin_l = canvas._fullLayout.margin.l;
                    const margin_t = canvas._fullLayout.margin.t;
                    const self = this;
                    canvas.addEventListener('mousemove', $mol_wire_async((evt) => {
                        const comp = xaxis.p2c(evt.layerX - margin_l);
                        const temp = parseInt(yaxis.p2c(evt.layerY - margin_t));
                        if (comp > json.comp_range[0] && comp < json.comp_range[1] && temp > json.temp[0] && temp < json.temp[1]) {
                            const label = get_rect_pd_compound((comp - json.comp_range[0]) / (json.comp_range[1] - json.comp_range[0]), comp_start, comp_end) + ' at T = ' + temp + ' °C';
                            self.label(label);
                        }
                        else {
                            self.label('');
                        }
                    }));
                }
            }
            draw() {
                const { datamock, layout } = this.is_triangle() ? this.triangle() : this.rectangle();
                const promise = $lib_plotly.all().react(this.Root().dom_node(), datamock, layout, this.plot_options());
                promise.then(() => this.subscribe_events());
            }
            pd_fix_triangle() {
                const d3 = $lib_d3.all();
                function make_absolute_context(element, root) {
                    return function (x, y) {
                        var offset = root.getBoundingClientRect();
                        var matrix = element.getScreenCTM();
                        return {
                            x: (matrix.a * x) + (matrix.c * y) + matrix.e - offset.left,
                            y: (matrix.b * x) + (matrix.d * y) + matrix.f - offset.top
                        };
                    };
                }
                function get_absolute_coords(el, ref) {
                    const fn = make_absolute_context(el, ref);
                    const b = el.getBBox();
                    return fn(b.x, b.y);
                }
                const svgroot = d3.select("[visavis_phase_root] svg.main-svg")[0][0];
                let graph_node = d3.select("[visavis_phase_root] g.toplevel.plotbg")[0][0];
                const graph_coords = get_absolute_coords(graph_node, svgroot);
                const svg_el = d3.select("[visavis_phase_root] g.layer-above");
                let svg_node = svg_el[0][0];
                graph_node = graph_node.getBoundingClientRect();
                svg_node = svg_node.getBoundingClientRect();
                const scaleX = graph_node.width / svg_node.width;
                const scaleY = graph_node.height / svg_node.height;
                const centerX = graph_coords.x + graph_node.width / 2;
                const centerY = graph_coords.y + graph_node.height;
                const origdims = [];
                d3.selectAll("[visavis_phase_root] text.annotation-text").each(function () {
                    origdims.push(parseInt(this.getBoundingClientRect().left));
                });
                svg_el.attr("transform", "translate(" + (-centerX * (scaleX - 1)) + ", " + (-centerY * (scaleY - 1)) + ") scale(" + scaleX + ", " + scaleY + ")");
                d3.selectAll("[visavis_phase_root] g.annotation").each(function (d, i) {
                    d3.select(this).attr("transform", "translate(" + (-centerX * (scaleX - 1)) + ", " + (-centerY * (scaleY - 1)) + ") scale(" + scaleX + ", " + scaleY + ") translate(" + (-origdims[i] / 1.25) + ", 0) scale(1.75, 1)");
                });
            }
        }
        __decorate([
            $mol_mem
        ], $visavis_phase.prototype, "layout_shapes", null);
        __decorate([
            $mol_mem
        ], $visavis_phase.prototype, "annotations", null);
        __decorate([
            $mol_action
        ], $visavis_phase.prototype, "subscribe_events", null);
        __decorate([
            $mol_mem
        ], $visavis_phase.prototype, "draw", null);
        $$.$visavis_phase = $visavis_phase;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/phase/phase.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("visavis/phase/phase.view.css", "path{pointer-events:painted;}\ng{pointer-events:painted;}\n");
})($ || ($ = {}));
//visavis/phase/-css/phase.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem, px } = $mol_style_unit;
        $mol_style_define($visavis_phase, {
            Plot: {
                flex: {
                    grow: 1,
                    shrink: 0,
                },
            },
            Root: {
                width: $mol_style_unit.per(100),
                height: $mol_style_unit.per(100),
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/phase/phase.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $visavis_plot_plotly extends $mol_page {
        plot() {
            const obj = new this.$.$visavis_plot();
            return obj;
        }
        json() {
            return {};
        }
        pages() {
            return [
                this.Plot()
            ];
        }
        plot_options() {
            return {
                displaylogo: false,
                displayModeBar: false,
                staticPlot: false
            };
        }
        plot_title() {
            return "";
        }
        draw() {
            return null;
        }
        Root() {
            const obj = new this.$.$mol_view();
            obj.auto = () => this.draw();
            return obj;
        }
        error_showed(next) {
            if (next !== undefined)
                return next;
            return "";
        }
        Error() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.error_showed()
            ];
            return obj;
        }
        plot_body() {
            return [
                this.Root(),
                this.Error()
            ];
        }
        Plot() {
            const obj = new this.$.$mol_page();
            obj.title = () => this.plot_title();
            obj.body = () => this.plot_body();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $visavis_plot_plotly.prototype, "plot", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_plotly.prototype, "Root", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_plotly.prototype, "error_showed", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_plotly.prototype, "Error", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_plotly.prototype, "Plot", null);
    $.$visavis_plot_plotly = $visavis_plot_plotly;
})($ || ($ = {}));
//visavis/plot/plotly/-view.tree/plotly.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $visavis_plot_plotly extends $.$visavis_plot_plotly {
            plot_title() {
                return this.plot().id();
            }
            json() {
                return this.plot().json();
            }
            subscribe_events() {
            }
            layout() {
                return {
                    font: { family: "Exo2", size: 13 }
                };
            }
            data() {
                const json = this.json();
                return json;
            }
            draw() {
                try {
                    $mol_wire_sync($lib_plotly.all()).react(this.Root().dom_node(), this.data(), this.layout(), this.plot_options());
                    this.subscribe_events();
                    this.error_showed(null);
                }
                catch (error) {
                    $mol_fail_log(error);
                    this.error_showed(error);
                }
            }
        }
        __decorate([
            $mol_action
        ], $visavis_plot_plotly.prototype, "subscribe_events", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_plotly.prototype, "layout", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_plotly.prototype, "data", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_plotly.prototype, "draw", null);
        $$.$visavis_plot_plotly = $visavis_plot_plotly;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/plot/plotly/plotly.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($visavis_plot_plotly, {
            Plot: {
                flex: {
                    grow: 1,
                },
            },
            Root: {
                width: '100%',
                height: '100%',
            },
            Error: {
                position: "absolute",
                left: 0,
                right: 0,
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/plot/plotly/plotly.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $visavis_bar extends $visavis_plot_plotly {
    }
    $.$visavis_bar = $visavis_bar;
})($ || ($ = {}));
//visavis/bar/-view.tree/bar.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const Payload = $mol_data_record({
            x: $mol_data_array($mol_data_number),
            dx: $mol_data_number,
            y: $mol_data_array($mol_data_number),
            xtitle: $mol_data_optional($mol_data_string),
            ytitle: $mol_data_optional($mol_data_string),
        });
        $$.$visavis_bar_json = $mol_data_record({
            payload: Payload,
            payload2: $mol_data_optional(Payload),
        });
        class $visavis_bar extends $.$visavis_bar {
            json() {
                return $$.$visavis_bar_json(this.plot().json());
            }
            subscribe_events() {
                const d3 = $lib_d3.all();
                const json = this.json();
                if (json.payload2 && json.p1ayload2.x && json.payload2.y)
                    return;
                const paths = d3.selectAll('g.point path');
                paths.on('mouseover', function () {
                    const selection = d3.select(this);
                    selection.style('fill', '#E36868');
                    selection.style('cursor', 'pointer');
                });
                paths.on('mouseout', function () {
                    const selection = d3.select(this);
                    selection.style('fill', '#3e3f95');
                    selection.style('cursor', 'default');
                });
            }
            layout() {
                const json = this.json();
                return {
                    showlegend: json.payload2 ? true : false,
                    legend: { x: 0, y: 1, font: { family: "Exo2", size: 17 } },
                    xaxis: {
                        autorange: true,
                        showgrid: false,
                        showline: true,
                        showticklabels: true,
                        zeroline: false,
                        ticklen: 4,
                        dtick: json.payload.dx || 0.05,
                        title: json.payload.xtitle
                    },
                    yaxis: {
                        fixedrange: true,
                        autorange: true,
                        showgrid: true,
                        showline: false,
                        showticklabels: true,
                        ticklen: 0,
                        title: json.payload.ytitle,
                        rangemode: "nonnegative",
                        type: "log", tickfont: { family: "Exo2", size: 17 }
                    },
                    font: { family: "Exo2", size: 13 }
                };
            }
            data() {
                const json = this.json();
                const payload = [{ type: "bar", x: json.payload.x, y: json.payload.y, marker: { color: "#3e3f95" }, name: 'bar' }];
                if (json.payload2 && json.payload2.x && json.payload2.y) {
                    payload.push({ type: "bar", x: json.payload2.x, y: json.payload2.y, marker: { color: "#e36868" }, name: 'bar' });
                }
                return payload;
            }
        }
        __decorate([
            $mol_action
        ], $visavis_bar.prototype, "subscribe_events", null);
        __decorate([
            $mol_mem
        ], $visavis_bar.prototype, "layout", null);
        __decorate([
            $mol_mem
        ], $visavis_bar.prototype, "data", null);
        $$.$visavis_bar = $visavis_bar;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/bar/bar.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($visavis_bar, {
            Plot: {
                flex: {
                    grow: 1,
                },
            },
            Root: {
                width: '100%',
                height: '100%',
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/bar/bar.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $visavis_discovery extends $visavis_plot_plotly {
        pages() {
            return [
                this.Plot(),
                this.Setup()
            ];
        }
        elemental_checked(id, next) {
            if (next !== undefined)
                return next;
            return false;
        }
        elementals_dict() {
            return {};
        }
        Elementals_check() {
            const obj = new this.$.$mol_check_list();
            obj.option_checked = (id, next) => this.elemental_checked(id, next);
            obj.options = () => this.elementals_dict();
            return obj;
        }
        Elementals() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => "Elementals on";
            obj.Content = () => this.Elementals_check();
            return obj;
        }
        Setup() {
            const obj = new this.$.$mol_page();
            obj.title = () => this.$.$mol_locale.text('$visavis_discovery_Setup_title');
            obj.body = () => [
                this.Elementals()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem_key
    ], $visavis_discovery.prototype, "elemental_checked", null);
    __decorate([
        $mol_mem
    ], $visavis_discovery.prototype, "Elementals_check", null);
    __decorate([
        $mol_mem
    ], $visavis_discovery.prototype, "Elementals", null);
    __decorate([
        $mol_mem
    ], $visavis_discovery.prototype, "Setup", null);
    $.$visavis_discovery = $visavis_discovery;
})($ || ($ = {}));
//visavis/discovery/-view.tree/discovery.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const Point = $mol_data_array($mol_data_number);
        const Payload = $mol_data_record({
            points: $mol_data_array(Point),
        });
        const Discover_item = $mol_data_record({
            points: $mol_data_array(Point),
            name: $mol_data_string
        });
        $$.$visavis_discovery_json = $mol_data_record({
            payload: Payload,
            answerto: $mol_data_string,
        });
        function discover(elementals_on, first, second) {
            const mlPca = $visavis_lib.pca();
            if (!mlPca)
                return $mol_fail(new $mol_data_error('Sorry, your web-browser is too old for this task'));
            let given_separation = 0;
            function elements_data(element_ids) {
                const prop_array = [];
                const label_parts = [];
                element_ids.forEach(element_id => {
                    const props = elementals_on.map(prop_name => $visavis_element_prop[prop_name][element_id]);
                    const name = $visavis_element_list[element_id];
                    prop_array.push(...props);
                    label_parts.push(name);
                });
                const label = label_parts.filter(x => x).join('-');
                return { prop_array, label };
            }
            const to_predict = [];
            const labels = [];
            first.points.forEach(element_ids => {
                const { prop_array, label } = elements_data(element_ids);
                to_predict.push(prop_array);
                labels.push(label);
            });
            if (second) {
                given_separation = to_predict.length;
                second.points.forEach(element_ids => {
                    const { prop_array, label } = elements_data(element_ids);
                    if (labels.includes(label)) {
                        to_predict.push(prop_array);
                        labels.push(label);
                    }
                });
                if (to_predict.length == given_separation) {
                    return $mol_fail(new $mol_data_error('Error: a selected dataset is fully included into a reference dataset'));
                }
            }
            if (to_predict.length > 21000)
                return $mol_fail(new $mol_data_error('Error: too much data for analysis'));
            const pca = new mlPca(to_predict);
            const predicted = pca.predict(to_predict, { nComponents: 2 });
            if (second) {
                return [{
                        discovery: predicted.slice(0, given_separation),
                        labels: labels.slice(0, given_separation),
                        name: first.name
                    }, {
                        discovery: predicted.slice(given_separation),
                        labels: labels.slice(given_separation),
                        name: second.name
                    }];
            }
            return [{
                    discovery: predicted,
                    labels: labels,
                    name: first.name
                }];
        }
        class $visavis_discovery extends $.$visavis_discovery {
            json() {
                return $$.$visavis_discovery_json(this.plot().json());
            }
            elementals_dict() {
                return $visavis_elemental_names;
            }
            subscribe_events() {
                const d3 = $lib_d3.all();
                const json = this.json();
            }
            layout() {
                return {
                    showlegend: false,
                    hovermode: "closest",
                    xaxis: { showgrid: false },
                    yaxis: { showgrid: false },
                    margin: {
                        l: 0,
                        r: 0,
                        b: 0,
                        t: 0,
                        pad: 0
                    },
                    annotations: [
                        {
                            x: 0.63,
                            y: 0.97,
                            xref: 'paper',
                            yref: 'paper',
                            xanchor: 'right',
                            yanchor: 'bottom',
                            text: '<i>Second Principal Component (a<sub>1</sub>x + b<sub>1</sub>y + c<sub>1</sub>z + ...)</i>',
                            showarrow: false,
                            bgcolor: '#fff',
                            font: { family: "Exo2", size: 14 }
                        },
                        {
                            x: 0.97,
                            y: 0.67,
                            xref: 'paper',
                            yref: 'paper',
                            xanchor: 'left',
                            yanchor: 'top',
                            text: '<i>First Principal Component (a<sub>2</sub>x + b<sub>2</sub>y + c<sub>2</sub>z + ...)</i>',
                            showarrow: false,
                            bgcolor: '#fff',
                            textangle: 270,
                            font: { family: "Exo2", size: 14 }
                        }
                    ]
                };
            }
            elementals_on() {
                const elementals_on = [];
                Object.keys(this.elementals_dict()).forEach(key => {
                    if (this.elemental_checked(key)) {
                        elementals_on.push(key);
                    }
                });
                if (elementals_on.length === 0)
                    return $mol_fail(new $mol_data_error('At least one property must be enabled'));
                return elementals_on;
            }
            elemental_checked(id, next) {
                if (next !== undefined)
                    return next;
                return id === 'nump' ? true : false;
            }
            data() {
                const json = this.json();
                const elementals_on = this.elementals_on();
                const result = discover(elementals_on, Discover_item({ points: json.payload.points, name: json.answerto }));
                if (!result || !result[0].discovery)
                    return;
                const traces = [];
                for (let i = 0; i < result.length; i++) {
                    const dscolor = (i == 0) ? '#3e3f95' : '#900';
                    const oflag = (i == 0) ? 1 : 0.9;
                    traces.push({
                        x: result[i].discovery.map((item) => item[0]),
                        y: result[i].discovery.map((item) => item[1]),
                        text: result[i].labels,
                        mode: 'markers',
                        type: 'scatter',
                        hoverinfo: 'text',
                        marker: { size: 6, color: dscolor, opacity: oflag, symbol: 'square' }
                    });
                }
                return traces;
            }
        }
        __decorate([
            $mol_action
        ], $visavis_discovery.prototype, "subscribe_events", null);
        __decorate([
            $mol_mem
        ], $visavis_discovery.prototype, "layout", null);
        __decorate([
            $mol_mem
        ], $visavis_discovery.prototype, "elementals_on", null);
        __decorate([
            $mol_mem_key
        ], $visavis_discovery.prototype, "elemental_checked", null);
        __decorate([
            $mol_mem
        ], $visavis_discovery.prototype, "data", null);
        $$.$visavis_discovery = $visavis_discovery;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/discovery/discovery.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($visavis_discovery, {
            Setup: {
                flex: {
                    basis: '25rem',
                    shrink: 0,
                },
                Body: {
                    padding: $mol_gap.block,
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/discovery/discovery.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $visavis_eigen extends $visavis_plot_plotly {
    }
    $.$visavis_eigen = $visavis_eigen;
})($ || ($ = {}));
//visavis/eigen/-view.tree/eigen.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_data_variant(...sub) {
        return $mol_data_setup((val) => {
            const errors = [];
            for (const type of sub) {
                let hidden = $.$mol_fail_hidden;
                try {
                    $.$mol_fail = $.$mol_fail_hidden;
                    return type(val);
                }
                catch (error) {
                    $.$mol_fail = hidden;
                    if (error instanceof $mol_data_error) {
                        errors.push(error);
                    }
                    else {
                        return $mol_fail_hidden(error);
                    }
                }
            }
            return $mol_fail(new $mol_data_error(`${val} is not any of variants`, ...errors));
        }, sub);
    }
    $.$mol_data_variant = $mol_data_variant;
})($ || ($ = {}));
//mol/data/variant/variant.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const Bands_matrix = $mol_data_record({
            bands: $mol_data_array($mol_data_array($mol_data_number)),
            kpoints: $mol_data_array($mol_data_array($mol_data_number)),
        });
        const Dos_matrix = $mol_data_record({
            dos: $mol_data_array($mol_data_number),
            levels: $mol_data_array($mol_data_number),
        });
        $$.$visavis_eigen_json = $mol_data_record({
            sample: $mol_data_record({
                material: $mol_data_record({
                    chemical_formula: $mol_data_string,
                    chemical_elements: $mol_data_array($mol_data_string),
                    condition: $mol_data_array($mol_data_record({
                        scalar: $mol_data_array($mol_data_record({ value: $mol_data_number })),
                        name: $mol_data_string,
                        units: $mol_data_optional($mol_data_string),
                    })),
                    phase: $mol_data_string,
                    phase_id: $mol_data_number,
                    entry: $mol_data_string,
                    object_repr: $mol_data_optional($mol_data_string),
                }),
                measurement: $mol_data_array($mol_data_record({
                    data_type: $mol_data_string,
                    property: $mol_data_record({
                        units: $mol_data_string,
                        scalar: $mol_data_optional($mol_data_variant($mol_data_string, $mol_data_number)),
                        matrix: $mol_data_variant(Bands_matrix, Dos_matrix),
                        name: $mol_data_string,
                        category: $mol_data_string,
                        domain: $mol_data_string,
                    }),
                    condition: $mol_data_optional($mol_data_array($mol_data_record({
                        units: $mol_data_string,
                        scalar: $mol_data_number,
                        name: $mol_data_string,
                        refers_to: $mol_data_optional($mol_data_string),
                    }))),
                    raw_data: $mol_data_optional($mol_data_string),
                })),
            }),
            version: $mol_data_string,
            object_type: $mol_data_string,
            reference: $mol_data_record({
                entry: $mol_data_string,
                phase: $mol_data_optional($mol_data_string),
            }),
        });
        class $visavis_eigen extends $.$visavis_eigen {
            json() {
                return $$.$visavis_eigen_json(this.plot().json());
            }
            bands_matrix() {
                const matrix = this.json().sample.measurement[0].property.matrix;
                if (matrix.bands) {
                    return matrix;
                }
                else {
                    return null;
                }
            }
            dos_matrix() {
                const matrix = this.json().sample.measurement[0].property.matrix;
                if (matrix.dos) {
                    return matrix;
                }
                else {
                    return null;
                }
            }
            subscribe_events() {
            }
            data() {
                const dataset = [];
                const bands_matrix = this.bands_matrix();
                const dos_matrix = this.dos_matrix();
                if (bands_matrix) {
                    for (let i = 0; i < bands_matrix.bands.length; i++) {
                        dataset.push({
                            x: $lib_d3.all().range(bands_matrix.bands[i].length),
                            y: bands_matrix.bands[i],
                            mode: "lines",
                            type: "scatter",
                            marker: { color: "#000" }
                        });
                    }
                    ;
                }
                else if (dos_matrix) {
                    dataset.push({
                        x: dos_matrix.levels,
                        y: dos_matrix.dos,
                        mode: "lines",
                        type: "scatter",
                        marker: { color: "#000" }
                    });
                }
                else {
                }
                return dataset;
            }
            layout() {
                const bands_matrix = this.bands_matrix();
                let xaxis = {};
                let x_title = '';
                let y_title = '';
                if (bands_matrix) {
                    const x_labels = [];
                    for (let i = 0; i < bands_matrix.kpoints.length; i++) {
                        x_labels.push((bands_matrix.kpoints[i][0] == 0 && bands_matrix.kpoints[i][1] == 0 && bands_matrix.kpoints[i][2] == 0) ? 'Г' : '');
                    }
                    x_title = 'k';
                    y_title = 'E - E<sub>F</sub>, eV';
                    xaxis = {
                        showline: true,
                        zeroline: false,
                        showgrid: false,
                        tickmode: 'array',
                        tickvals: $lib_d3.all().range(bands_matrix.kpoints.length),
                        ticktext: x_labels,
                        tickfont: { size: 20 }
                    };
                }
                else {
                    x_title = 'E - E<sub>F</sub>, eV';
                    y_title = 'Total density of states';
                    xaxis = {
                        showline: true,
                        zeroline: false,
                        showgrid: true,
                        autorange: true,
                        showticklabels: true,
                        ticklen: 4,
                        title: x_title
                    };
                }
                return {
                    showlegend: false,
                    xaxis: xaxis,
                    yaxis: {
                        autorange: true,
                        showgrid: false,
                        showline: true,
                        showticklabels: true,
                        zeroline: true,
                        zerolinecolor: '#6cf',
                        zerolinewidth: 3,
                        ticklen: 4,
                        title: y_title
                    },
                    font: { family: "Exo2", size: 13 }
                };
            }
        }
        __decorate([
            $mol_mem
        ], $visavis_eigen.prototype, "bands_matrix", null);
        __decorate([
            $mol_mem
        ], $visavis_eigen.prototype, "dos_matrix", null);
        __decorate([
            $mol_action
        ], $visavis_eigen.prototype, "subscribe_events", null);
        __decorate([
            $mol_mem
        ], $visavis_eigen.prototype, "data", null);
        __decorate([
            $mol_mem
        ], $visavis_eigen.prototype, "layout", null);
        $$.$visavis_eigen = $visavis_eigen;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/eigen/eigen.view.ts
;
"use strict";
var $;
(function ($) {
    class $visavis_pie extends $visavis_plot_plotly {
        colorset() {
            return [
                "#3e3f95",
                "#c00",
                "#FE9A2E",
                "#090",
                "#f0f",
                "#09f",
                "#666",
                "#0f3",
                "#0ff",
                "#90c"
            ];
        }
    }
    $.$visavis_pie = $visavis_pie;
})($ || ($ = {}));
//visavis/pie/-view.tree/pie.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_data_enum(name, dict) {
        const index = {};
        for (let key in dict) {
            if (Number.isNaN(Number(key))) {
                index[dict[key]] = key;
            }
        }
        return $mol_data_setup((value) => {
            if (typeof index[value] !== 'string') {
                return $mol_fail(new $mol_data_error(`${value} is not value of ${name} enum`));
            }
            return value;
        }, { name, dict });
    }
    $.$mol_data_enum = $mol_data_enum;
})($ || ($ = {}));
//mol/data/enum/enum.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const Facet_names = { props: 'properties', elements: 'elements', classes: 'classes', lattices: 'crystal systems' };
        $$.$visavis_pie_json = $mol_data_record({
            payload: $mol_data_array($mol_data_record({
                facet: $mol_data_enum('facet', { props: 'props', elements: 'elements', classes: 'classes', lattices: 'lattices' }),
                value: $mol_data_string,
                count: $mol_data_number,
            })),
            total_count: $mol_data_number,
        });
        function locate_label(values) {
            let x = 0;
            let y = 0;
            const left = values[0];
            const top = values[1];
            if (left[0] == 0 && left[1] == 0.32)
                x = 0.08;
            else if (left[0] == 0.67 && left[1] == 1)
                x = 0.92;
            else if (left[0] == 0 && left[1] == 0.49)
                x = 0.17;
            else if (left[0] == 0.51 && left[1] == 1)
                x = 0.83;
            else
                x = left.reduce(function (a, b) { return a + b; }, 0) / 2;
            y = top[0];
            if (y <= 0.03)
                y = 0;
            else if (y == 0.34)
                y = 0.318;
            else if (y == 0.53)
                y = 0.51;
            return { x: x, y: y };
        }
        class $visavis_pie extends $.$visavis_pie {
            json() {
                return $$.$visavis_pie_json(this.plot().json());
            }
            subscribe_events() {
            }
            layout() {
                const data = this.data();
                const tot_count = this.tot_count();
                const xy_domains = this.xy_domains();
                const annotations_layout = { showarrow: false, font: { size: 13, family: "Exo2" }, borderpad: 0, bgcolor: '#fff' };
                const annotations = data.map((pie, loc_count) => {
                    let label = pie.name + ' distribution';
                    label = 'Fig. ' + (loc_count + 1) + '. ' + label.charAt(0).toUpperCase() + label.slice(1);
                    return Object.assign({ text: label }, locate_label(xy_domains[tot_count][loc_count]), annotations_layout);
                });
                return { showlegend: false, font: { family: "Exo2" }, annotations };
            }
            xy_domains() {
                return [
                    null,
                    [[[0, 1], [0.03, 1]]],
                    [[[0, 0.49], [0, 1]], [[0.51, 1], [0, 1]]],
                    [[[0, 0.49], [0.53, 1]], [[0.51, 1], [0.53, 1]], [[0, 0.49], [0.03, 0.49]]],
                    [[[0, 0.49], [0.53, 1]], [[0.51, 1], [0.53, 1]], [[0, 0.49], [0.03, 0.49]], [[0.51, 1], [0.03, 0.49]]],
                    [[[0, 0.32], [0.51, 1]], [[0.33, 0.66], [0.51, 1]], [[0.67, 1], [0.51, 1]], [[0, 0.32], [0, 0.49]], [[0.33, 0.66], [0, 0.49]]],
                    [[[0, 0.32], [0.51, 1]], [[0.33, 0.66], [0.51, 1]], [[0.67, 1], [0.51, 1]], [[0, 0.32], [0, 0.49]], [[0.33, 0.66], [0, 0.49]], [[0.67, 1], [0, 0.49]]],
                    [[[0, 0.32], [0.68, 1]], [[0.33, 0.66], [0.68, 1]], [[0.67, 1], [0.68, 1]], [[0, 0.32], [0.34, 0.65]], [[0.33, 0.66], [0.34, 0.65]], [[0.67, 1], [0.34, 0.65]], [[0, 0.32], [0.02, 0.31]]],
                    [[[0, 0.32], [0.68, 1]], [[0.33, 0.66], [0.68, 1]], [[0.67, 1], [0.68, 1]], [[0, 0.32], [0.34, 0.65]], [[0.33, 0.66], [0.34, 0.65]], [[0.67, 1], [0.34, 0.65]], [[0, 0.32], [0.02, 0.31]], [[0.33, 0.66], [0.02, 0.31]]]
                ];
            }
            enter_metrics() {
                return this.json().total_count / 150;
            }
            tot_count() {
                let tot_count = 0;
                const json = this.json();
                const enter_metrics = this.enter_metrics();
                let recent_facet = null;
                for (let i = 0; i < json.payload.length; i++) {
                    if (json.payload[i].count < enter_metrics || json.payload[i].count > (json.total_count - enter_metrics))
                        continue;
                    if (json.payload[i].facet == "classes")
                        tot_count++;
                    else {
                        if (json.payload[i].facet != recent_facet)
                            tot_count++;
                        recent_facet = json.payload[i].facet;
                    }
                }
                if (!tot_count)
                    return $mol_fail(new $mol_data_error('Warning: not enough data for analysis'));
                return tot_count;
            }
            data() {
                const json = this.json();
                if (!json.total_count || json.total_count == 1) {
                    return $mol_fail(new $mol_data_error('Warning: not enough data for analysis'));
                }
                const data = [];
                const classes = [];
                const tot_count = this.tot_count();
                const xy_domains = this.xy_domains();
                const enter_metrics = this.enter_metrics();
                let recent_facet = null;
                let loc_count = 0;
                for (let i = 0; i < json.payload.length; i++) {
                    if (json.payload[i].count < enter_metrics || json.payload[i].count > (json.total_count - enter_metrics))
                        continue;
                    if (json.payload[i].facet == "classes") {
                        classes.push({
                            type: "pie",
                            name: Facet_names[json.payload[i].facet],
                            values: [json.payload[i].count, json.total_count - json.payload[i].count],
                            text: [json.payload[i].value, "other classes"],
                            domain: { x: xy_domains[tot_count][loc_count][0], y: xy_domains[tot_count][loc_count][1] },
                            hoverinfo: "text+percent+name",
                            textinfo: "text+percent",
                            textposition: "inside",
                            hole: 0.3 / tot_count,
                            marker: { colors: this.colorset() }
                        });
                        loc_count++;
                        continue;
                    }
                    if (json.payload[i].facet != recent_facet) {
                        if (recent_facet) {
                            const sum = data[data.length - 1].values.reduce(function (a, b) { return a + b; }, 0);
                            if (sum < json.total_count) {
                                data[data.length - 1].values.push(json.total_count - sum);
                                data[data.length - 1].text.push("other " + Facet_names[recent_facet]);
                            }
                        }
                        if (loc_count > 8)
                            break;
                        data.push({
                            type: "pie",
                            name: Facet_names[json.payload[i].facet],
                            values: [],
                            text: [],
                            domain: { x: xy_domains[tot_count][loc_count][0], y: xy_domains[tot_count][loc_count][1] },
                            hoverinfo: "text+percent+name",
                            textinfo: "text+percent",
                            textposition: "inside",
                            hole: 0.3 / tot_count,
                            marker: { colors: this.colorset() }
                        });
                        loc_count++;
                    }
                    recent_facet = json.payload[i].facet;
                    data[data.length - 1].values.push(json.payload[i].count);
                    data[data.length - 1].text.push(json.payload[i].value);
                }
                if (data.length) {
                    const sum = data[data.length - 1].values.reduce(function (a, b) { return a + b; }, 0);
                    if (sum < json.total_count) {
                        data[data.length - 1].values.push(json.total_count - sum);
                        data[data.length - 1].text.push("other " + Facet_names[recent_facet]);
                    }
                }
                if (classes)
                    data.push(...classes);
                return data;
            }
        }
        __decorate([
            $mol_action
        ], $visavis_pie.prototype, "subscribe_events", null);
        __decorate([
            $mol_mem
        ], $visavis_pie.prototype, "layout", null);
        __decorate([
            $mol_mem
        ], $visavis_pie.prototype, "xy_domains", null);
        __decorate([
            $mol_mem
        ], $visavis_pie.prototype, "enter_metrics", null);
        __decorate([
            $mol_mem
        ], $visavis_pie.prototype, "tot_count", null);
        __decorate([
            $mol_mem
        ], $visavis_pie.prototype, "data", null);
        $$.$visavis_pie = $visavis_pie;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/pie/pie.view.ts
;
"use strict";
var $;
(function ($) {
    class $visavis_scatter extends $visavis_plot_plotly {
    }
    $.$visavis_scatter = $visavis_scatter;
})($ || ($ = {}));
//visavis/scatter/-view.tree/scatter.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$visavis_scatter_json = $mol_data_record({
            sample: $mol_data_record({
                material: $mol_data_record({
                    chemical_formula: $mol_data_string,
                    chemical_elements: $mol_data_array($mol_data_string),
                    condition: $mol_data_array($mol_data_record({
                        scalar: $mol_data_array($mol_data_record({ value: $mol_data_number })),
                        name: $mol_data_string,
                        units: $mol_data_optional($mol_data_string),
                    })),
                    phase: $mol_data_string,
                    phase_id: $mol_data_number,
                    entry: $mol_data_string,
                    object_repr: $mol_data_optional($mol_data_string),
                }),
                measurement: $mol_data_array($mol_data_record({
                    data_type: $mol_data_string,
                    property: $mol_data_record({
                        units: $mol_data_string,
                        scalar: $mol_data_optional($mol_data_variant($mol_data_string, $mol_data_number)),
                        matrix: $mol_data_array($mol_data_array($mol_data_number)),
                        name: $mol_data_string,
                        category: $mol_data_string,
                        domain: $mol_data_string,
                    }),
                    condition: $mol_data_optional($mol_data_array($mol_data_record({
                        units: $mol_data_string,
                        scalar: $mol_data_number,
                        name: $mol_data_string,
                        refers_to: $mol_data_optional($mol_data_string),
                    }))),
                    raw_data: $mol_data_optional($mol_data_string),
                })),
            }),
            version: $mol_data_string,
            object_type: $mol_data_string,
            reference: $mol_data_record({
                entry: $mol_data_string,
                phase: $mol_data_optional($mol_data_string),
            }),
        });
        class $visavis_scatter extends $.$visavis_scatter {
            json() {
                return $$.$visavis_scatter_json(this.plot().json());
            }
            subscribe_events() {
            }
            p_data() {
                return this.json().sample.measurement[0].property.matrix.map(item => item[0]);
            }
            t_data() {
                return this.json().sample.measurement[0].property.matrix.map(item => item[1]);
            }
            p_data_sum() {
                return this.p_data().reduce((a, b) => a + b, 0);
            }
            t_data_sum() {
                return this.t_data().reduce((a, b) => a + b, 0);
            }
            x_data_type() {
                const p_data = this.p_data();
                const p_data_sum = this.p_data_sum();
                const t_data = this.t_data();
                const t_data_sum = this.t_data_sum();
                if (Math.abs(t_data[0] - t_data_sum / t_data.length) < 0.1 && Math.abs(p_data[0] - p_data_sum / p_data.length) > 0.1) {
                    return 'pressure';
                }
                else if (Math.abs(t_data[0] - t_data_sum / t_data.length) > 0.1 && Math.abs(p_data[0] - p_data_sum / p_data.length) > 0.1) {
                    return $mol_fail(new $mol_data_error('Sorry, plotting both temperature and pressure is not yet supported'));
                }
                else {
                    return 'temperature';
                }
            }
            x_data() {
                switch (this.x_data_type()) {
                    case 'pressure':
                        return this.p_data();
                    case 'temperature':
                        return this.t_data();
                }
            }
            x_title() {
                const dict = {
                    'pressure': 'P, Gpa',
                    'temperature': 'T, K',
                };
                return dict[this.x_data_type()];
            }
            data() {
                const json = this.json();
                const x_data = this.x_data();
                const array = json.sample.measurement[0].property.matrix;
                if (array[0][2] == array[0][3] && array[0][3] == array[0][4]) {
                    return [
                        {
                            type: "scatter",
                            mode: "markers",
                            name: "a",
                            x: x_data,
                            y: array.map(function (item) { return item[2]; }),
                            marker: { color: "#3e3f95", symbol: "square", size: 8 }
                        }
                    ];
                }
                else if (array[0][2] == array[0][3] && array[0][3] != array[0][4]) {
                    const delta_a = array[0][4] - array[0][2];
                    return [
                        {
                            type: "scatter",
                            mode: "markers",
                            name: "a",
                            x: x_data,
                            y: array.map(function (item) { return item[2]; }),
                            marker: { color: "#3e3f95", symbol: "square", size: 8 }
                        }, {
                            type: "scatter",
                            mode: "markers",
                            name: "b",
                            x: x_data,
                            y: array.map(function (item) { return item[4] - delta_a; }),
                            marker: { color: "#E36868", symbol: "circle", size: 7 }
                        }
                    ];
                }
                else {
                    const delta_a = array[0][4] - array[0][2];
                    const delta_b = array[0][3] - array[0][2];
                    return [
                        {
                            type: "scatter",
                            mode: "markers",
                            name: "a",
                            x: x_data,
                            y: array.map(function (item) { return item[2]; }),
                            marker: { color: "#3e3f95", symbol: "square", size: 8 }
                        }, {
                            type: "scatter",
                            mode: "markers",
                            name: "b",
                            x: x_data,
                            y: array.map(function (item) { return item[3] - delta_b; }),
                            marker: { color: "#E36868", symbol: "circle", size: 7 }
                        }, {
                            type: "scatter",
                            mode: "markers",
                            name: "c",
                            x: x_data,
                            y: array.map(function (item) { return item[4] - delta_a; }),
                            marker: { color: "#acc2b3", symbol: "diamond", size: 7 }
                        }
                    ];
                }
            }
            layout() {
                const array = this.json().sample.measurement[0].property.matrix;
                let y_comment = '';
                if (array[0][2] == array[0][3] && array[0][3] == array[0][4]) {
                }
                else if (array[0][2] == array[0][3] && array[0][3] != array[0][4]) {
                    y_comment = ' (diff.)';
                }
                else {
                    y_comment = ' (diff.)';
                }
                return {
                    showlegend: true,
                    legend: { x: 100, y: 1, font: { family: "Exo2", size: 14 } },
                    xaxis: {
                        autorange: true,
                        showgrid: true,
                        showline: true,
                        showticklabels: true,
                        zeroline: false,
                        ticklen: 4,
                        title: this.x_title()
                    },
                    yaxis: {
                        autorange: true,
                        showgrid: true,
                        showline: true,
                        showticklabels: true,
                        zeroline: false,
                        ticklen: 4,
                        title: 'Cell parameters' + y_comment + ', A'
                    },
                    font: { family: "Exo2", size: 13 }
                };
            }
        }
        __decorate([
            $mol_action
        ], $visavis_scatter.prototype, "subscribe_events", null);
        __decorate([
            $mol_mem
        ], $visavis_scatter.prototype, "p_data", null);
        __decorate([
            $mol_mem
        ], $visavis_scatter.prototype, "t_data", null);
        __decorate([
            $mol_mem
        ], $visavis_scatter.prototype, "p_data_sum", null);
        __decorate([
            $mol_mem
        ], $visavis_scatter.prototype, "t_data_sum", null);
        __decorate([
            $mol_mem
        ], $visavis_scatter.prototype, "x_data_type", null);
        __decorate([
            $mol_mem
        ], $visavis_scatter.prototype, "x_data", null);
        __decorate([
            $mol_mem
        ], $visavis_scatter.prototype, "x_title", null);
        __decorate([
            $mol_mem
        ], $visavis_scatter.prototype, "data", null);
        __decorate([
            $mol_mem
        ], $visavis_scatter.prototype, "layout", null);
        $$.$visavis_scatter = $visavis_scatter;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/scatter/scatter.view.ts
;
"use strict";
var $;
(function ($) {
    class $visavis_customscatter extends $visavis_plot_plotly {
    }
    $.$visavis_customscatter = $visavis_customscatter;
})($ || ($ = {}));
//visavis/customscatter/-view.tree/customscatter.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$visavis_customscatter_json = $mol_data_record({
            plots: $mol_data_array($mol_data_record({
                name: $mol_data_string,
                type: $mol_data_string,
                mode: $mol_data_string,
                interpolation: $mol_data_string,
                x: $mol_data_array($mol_data_number),
                y: $mol_data_array($mol_data_number),
            })),
            xtitle: $mol_data_optional($mol_data_string),
            ytitle: $mol_data_optional($mol_data_string),
            xlog: $mol_data_nullable($mol_data_boolean),
            ylog: $mol_data_nullable($mol_data_boolean),
        });
        class $visavis_customscatter extends $.$visavis_customscatter {
            json() {
                return $$.$visavis_customscatter_json(this.plot().json());
            }
            subscribe_events() {
            }
            layout() {
                const json = this.json();
                return {
                    showlegend: true,
                    legend: { x: 100, y: 1, font: { family: "Exo2", size: 14 } },
                    xaxis: {
                        type: json.xlog ? 'log' : '-',
                        autorange: true,
                        showgrid: true,
                        showline: true,
                        showticklabels: true,
                        zeroline: true,
                        zerolinecolor: '#999',
                        zerolinewidth: 0.5,
                        ticklen: 4,
                        title: json.xtitle
                    },
                    yaxis: {
                        type: json.ylog ? 'log' : '-',
                        autorange: true,
                        showgrid: true,
                        showline: true,
                        showticklabels: true,
                        zeroline: true,
                        zerolinecolor: '#999',
                        zerolinewidth: 0.5,
                        ticklen: 4,
                        title: json.ytitle
                    },
                    font: { family: "Exo2", size: 13 },
                    margin: {
                        t: 0,
                        r: 0
                    }
                };
            }
            data() {
                const json = this.json();
                return json.plots;
            }
        }
        __decorate([
            $mol_action
        ], $visavis_customscatter.prototype, "subscribe_events", null);
        __decorate([
            $mol_mem
        ], $visavis_customscatter.prototype, "layout", null);
        __decorate([
            $mol_mem
        ], $visavis_customscatter.prototype, "data", null);
        $$.$visavis_customscatter = $visavis_customscatter;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/customscatter/customscatter.view.ts
;
"use strict";
var $;
(function ($) {
    class $visavis_heatmap extends $visavis_plot_plotly {
    }
    $.$visavis_heatmap = $visavis_heatmap;
})($ || ($ = {}));
//visavis/heatmap/-view.tree/heatmap.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $visavis_heatmap extends $.$visavis_heatmap {
            json() {
                return this.plot().json();
            }
            layout() {
                return {
                    showlegend: false,
                    hovermode: "closest",
                    xaxis: {
                        autorange: true,
                        showgrid: false,
                        showline: true,
                        zeroline: false,
                        showticklabels: false
                    },
                    xaxis2: {
                        autorange: true,
                        showgrid: false,
                        showline: true,
                        zeroline: false,
                        showticklabels: false,
                        side: "top",
                        overlaying: 'x'
                    },
                    yaxis: {
                        autorange: true,
                        showgrid: false,
                        showline: true,
                        zeroline: false,
                        showticklabels: false
                    },
                    yaxis2: {
                        autorange: true,
                        showgrid: false,
                        showline: true,
                        zeroline: false,
                        showticklabels: false,
                        side: "right",
                        overlaying: 'y'
                    }
                };
            }
            data() {
                const json = this.json();
                let data_x = json.payload.x;
                let data_y = json.payload.y;
                let data_z = json.payload.z;
                if (!json.odet) {
                    const dice = Math.floor(Math.random() * 100) % 3;
                    if (dice === 0) {
                        data_x = json.payload.x;
                        data_y = json.payload.y;
                        data_z = json.payload.z;
                    }
                    else if (dice === 1) {
                        data_x = json.payload.x;
                        data_y = json.payload.z;
                        data_z = json.payload.y;
                    }
                    else {
                        data_x = json.payload.y;
                        data_y = json.payload.z;
                        data_z = json.payload.x;
                    }
                }
                return [
                    {
                        type: "scatter",
                        mode: "markers",
                        hoverinfo: "text",
                        x: data_x,
                        y: data_y,
                        text: json.payload.labels || Array(data_x.length).fill('Point'),
                        marker: { color: data_z, colorscale: 'Rainbow', size: 4, opacity: 0.9 }
                    },
                    { x: [], y: [], type: 'scatter', xaxis: 'x', yaxis: 'y' },
                    { x: [], y: [], type: 'scatter', xaxis: 'x2', yaxis: 'y2' }
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $visavis_heatmap.prototype, "layout", null);
        __decorate([
            $mol_mem
        ], $visavis_heatmap.prototype, "data", null);
        $$.$visavis_heatmap = $visavis_heatmap;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/heatmap/heatmap.view.ts
;
"use strict";
var $;
(function ($) {
    class $visavis_graph extends $mol_book2 {
        plot() {
            const obj = new this.$.$visavis_plot();
            return obj;
        }
        pages() {
            return [
                this.Plot()
            ];
        }
        plot_title() {
            return "";
        }
        draw() {
            return null;
        }
        Root() {
            const obj = new this.$.$mol_view();
            obj.auto = () => this.draw();
            return obj;
        }
        plot_body() {
            return [
                this.Root()
            ];
        }
        Plot() {
            const obj = new this.$.$mol_page();
            obj.title = () => this.plot_title();
            obj.body = () => this.plot_body();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $visavis_graph.prototype, "plot", null);
    __decorate([
        $mol_mem
    ], $visavis_graph.prototype, "Root", null);
    __decorate([
        $mol_mem
    ], $visavis_graph.prototype, "Plot", null);
    $.$visavis_graph = $visavis_graph;
})($ || ($ = {}));
//visavis/graph/-view.tree/graph.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const Link = $mol_data_record({
            source: $mol_data_string,
            type: $mol_data_string,
            target: $mol_data_variant($mol_data_string, $mol_data_number),
        });
        $$.$visavis_graph_json = $mol_data_record({
            error: $mol_data_nullable($mol_data_string),
            warning: $mol_data_nullable($mol_data_string),
            graph_rel: $mol_data_string,
            payload: $mol_data_array(Link),
        });
        class $visavis_graph extends $.$visavis_graph {
            json() {
                return $$.$visavis_graph_json(this.plot().json());
            }
            plot_title() {
                return this.plot().id();
            }
            data() {
                const json = this.json();
                const nodes = {};
                const edges = [];
                const labels = {};
                const radii = {};
                const foci = {};
                let counter = 0;
                const visavis_cache = { ref: json.payload, type: 'graph' };
                const visavis_graph_default_rel = json.graph_rel || 'prel';
                visavis_cache.ref.forEach((link) => {
                    if (link.type == visavis_graph_default_rel) {
                        foci[link.source] = link.source.substr(0, 1);
                        const sourceNode = nodes[link.source] || (nodes[link.source] = { name: link.source });
                        const targetNode = nodes[link.target] || (nodes[link.target] = { name: String(link.target) });
                        const lrep = { source: sourceNode, type: link.type, target: targetNode };
                        edges.push(lrep);
                        counter++;
                    }
                    else if (link.type == 'label') {
                        labels[link.source] = String(link.target);
                    }
                    else if (link.type == 'radius') {
                        const radius = Math.min($mol_data_number(link.target), 36);
                        radii[link.source] = radius + 2;
                    }
                });
                if (!counter)
                    return $mol_fail(new $mol_data_error('Warning: nothing to show'));
                const circle_cls = visavis_graph_default_rel.substr(0, 1);
                const text_cls = (counter > 25) ? "micro" : "macro";
                const table = {};
                Object.keys(nodes).forEach((p, i) => {
                    table[p] = i++;
                });
                return { nodes, edges, labels, radii, foci, table, circle_cls, text_cls };
            }
            draw() {
                const { nodes, edges, labels, radii, foci, table, circle_cls, text_cls } = this.data();
                const d3 = $visavis_lib.d3();
                const svg = d3.select('[visavis_graph_root]').append('svg');
                const visavis_force = d3.layout.force()
                    .nodes(d3.values(nodes))
                    .links(edges)
                    .linkDistance(90)
                    .gravity(0.3)
                    .charge(-2500)
                    .on("tick", tick);
                const drag = visavis_force.drag()
                    .on("dragstart", function (d) {
                    d3.select(this).classed("fixed", d.fixed = true);
                });
                const path = svg.append("g").selectAll("path")
                    .data(visavis_force.links())
                    .enter().append("path")
                    .attr("class", function (d) { return "edge " + d.type; });
                const circle = svg.append("g").selectAll("circle")
                    .data(visavis_force.nodes())
                    .enter().append("circle")
                    .attr("r", function (d, i) { return radii[d.name] || 10; })
                    .attr("id", function (d, i) { return "c_" + table[d.name]; })
                    .attr("class", function (d, i) { return foci[d.name] || circle_cls; })
                    .call(drag);
                const text = svg.append("g").selectAll("g")
                    .data(visavis_force.nodes())
                    .enter().append("g");
                text.append("text")
                    .attr("x", -20)
                    .attr("y", -10)
                    .attr("class", "shadow " + text_cls)
                    .attr("id", function (d, i) { return "s_" + table[d.name]; })
                    .html(function (d) { return labels[d.name]; });
                text.append("text")
                    .attr("x", -20)
                    .attr("y", -10)
                    .attr("class", "captions " + text_cls)
                    .attr("id", function (d, i) { return "t_" + table[d.name]; })
                    .html(function (d) { return labels[d.name]; })
                    .call(drag);
                function tick() {
                    path.attr("d", direct);
                    circle.attr("transform", transform);
                    text.attr("transform", transform);
                }
                function direct(d) {
                    return "M" + d.source.x + "," + d.source.y + " " + d.target.x + "," + d.target.y;
                }
                function transform(d) {
                    return "translate(" + d.x + "," + d.y + ")";
                }
                visavis_force.start();
            }
        }
        __decorate([
            $mol_mem
        ], $visavis_graph.prototype, "json", null);
        __decorate([
            $mol_mem
        ], $visavis_graph.prototype, "data", null);
        __decorate([
            $mol_mem
        ], $visavis_graph.prototype, "draw", null);
        $$.$visavis_graph = $visavis_graph;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/graph/graph.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("visavis/graph/graph.view.css", "[visavis_graph_plot] svg {\n\twidth: 100%;\n\theight: 100%;\n}\n\n[visavis_graph_plot] .edge {\n\tfill: none;\n\tstroke: #ddd;\n\tstroke-width: 1px;\n}\n\n[visavis_graph_plot] .edge.prel {\n\tstroke: #FE9A2E;\n}\n\n[visavis_graph_plot] .edge.hrel {\n\tstroke: #3e3f95;\n}\n\n[visavis_graph_plot] .edge.trel {\n\tstroke: #3e3f95;\n}\n\n[visavis_graph_plot] .edge.arel {\n\tstroke: #E36868;\n}\n\n[visavis_graph_plot] .edge.grel {\n\tstroke: #acc2b3;\n}\n\n[visavis_graph_plot] circle {\n\tcursor: move;\n\tfill: #ccc;\n}\n\n[visavis_graph_plot] circle.f {\n\tfill: #acc2b3;\n}\n\n[visavis_graph_plot] circle.p {\n\tfill: #FE9A2E;\n}\n\n[visavis_graph_plot] circle.h, circle.t {\n\tfill: #3e3f95;\n}\n\n[visavis_graph_plot] circle.a {\n\tfill: #E36868;\n}\n\n[visavis_graph_plot] text.micro {\n\tfont-size: 11px;\n\tletter-spacing: -0.5px;\n}\n\n[visavis_graph_plot] text.macro {\n\tfont-size: 14px;\n\tletter-spacing: 0.5px;\n}\n\n[visavis_graph_plot] text.captions {\n\tcursor: pointer;\n\tfill: #333;\n}\n\n[visavis_graph_plot] text.shadow {\n\tstroke: #fff;\n\tstroke-width: 3px;\n\tstroke-opacity: 0.8;\n}\n");
})($ || ($ = {}));
//visavis/graph/-css/graph.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($.$visavis_graph, {
            Root: {
                width: '100%',
                height: '100%',
            },
            Plot: {
                flex: {
                    grow: 1,
                    shrink: 0,
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/graph/graph.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $visavis_app extends $mol_book2 {
        attr() {
            return {
                mol_theme: "$mol_theme_light"
            };
        }
        pages() {
            return [
                this.Menu(),
                this.Matrix("plot"),
                this.Cube("plot"),
                this.Phase("plot"),
                this.Bar("plot"),
                this.Discovery("plot"),
                this.Eigen("plot"),
                this.Pie("plot"),
                this.Scatter("plot"),
                this.Customscatter("plot"),
                this.Heatmap("plot"),
                this.Graph("plot")
            ];
        }
        files_read(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Upload() {
            const obj = new this.$.$mol_button_open();
            obj.hint = () => this.$.$mol_locale.text('$visavis_app_Upload_hint');
            obj.accept = () => "application/json";
            obj.files = (next) => this.files_read(next);
            return obj;
        }
        plot_id(id) {
            return "";
        }
        Plot_link(id) {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                file: this.plot_id(id)
            });
            obj.title = () => this.plot_id(id);
            return obj;
        }
        history_drop(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Plot_drop_icon(id) {
            const obj = new this.$.$mol_icon_delete();
            return obj;
        }
        Plot_drop(id) {
            const obj = new this.$.$mol_button_minor();
            obj.click = (next) => this.history_drop(id, next);
            obj.sub = () => [
                this.Plot_drop_icon(id)
            ];
            return obj;
        }
        Plot(id) {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Plot_link(id),
                this.Plot_drop(id)
            ];
            return obj;
        }
        history_rows() {
            return [
                this.Plot("0")
            ];
        }
        History() {
            const obj = new this.$.$mol_list();
            obj.title = () => this.$.$mol_locale.text('$visavis_app_History_title');
            obj.rows = () => this.history_rows();
            return obj;
        }
        example_title(id) {
            return "";
        }
        Example(id) {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                file: this.example_title(id)
            });
            obj.title = () => this.example_title(id);
            return obj;
        }
        example_rows() {
            return [
                this.Example("0")
            ];
        }
        Examples() {
            const obj = new this.$.$mol_list();
            obj.title = () => this.$.$mol_locale.text('$visavis_app_Examples_title');
            obj.rows = () => this.example_rows();
            return obj;
        }
        Deck() {
            const obj = new this.$.$mol_deck();
            obj.items = () => [
                this.History(),
                this.Examples()
            ];
            return obj;
        }
        Source() {
            const obj = new this.$.$mol_link_source();
            obj.uri = () => "https://github.com/mpds-io/visavis";
            return obj;
        }
        Menu() {
            const obj = new this.$.$mol_page();
            obj.title = () => "Vis-a-vis";
            obj.tools = () => [
                this.Upload()
            ];
            obj.body = () => [
                this.Deck()
            ];
            obj.foot = () => [
                this.Source()
            ];
            return obj;
        }
        plot(id) {
            const obj = new this.$.$visavis_plot();
            return obj;
        }
        Matrix(id) {
            const obj = new this.$.$visavis_matrix();
            obj.plot = () => this.plot(id);
            return obj;
        }
        Cube(id) {
            const obj = new this.$.$visavis_cube();
            obj.plot = () => this.plot(id);
            return obj;
        }
        Phase(id) {
            const obj = new this.$.$visavis_phase();
            obj.plot = () => this.plot(id);
            return obj;
        }
        Bar(id) {
            const obj = new this.$.$visavis_bar();
            obj.plot = () => this.plot(id);
            return obj;
        }
        Discovery(id) {
            const obj = new this.$.$visavis_discovery();
            obj.plot = () => this.plot(id);
            return obj;
        }
        Eigen(id) {
            const obj = new this.$.$visavis_eigen();
            obj.plot = () => this.plot(id);
            return obj;
        }
        Pie(id) {
            const obj = new this.$.$visavis_pie();
            obj.plot = () => this.plot(id);
            return obj;
        }
        Scatter(id) {
            const obj = new this.$.$visavis_scatter();
            obj.plot = () => this.plot(id);
            return obj;
        }
        Customscatter(id) {
            const obj = new this.$.$visavis_customscatter();
            obj.plot = () => this.plot(id);
            return obj;
        }
        Heatmap(id) {
            const obj = new this.$.$visavis_heatmap();
            obj.plot = () => this.plot(id);
            return obj;
        }
        Graph(id) {
            const obj = new this.$.$visavis_graph();
            obj.plot = () => this.plot(id);
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $visavis_app.prototype, "files_read", null);
    __decorate([
        $mol_mem
    ], $visavis_app.prototype, "Upload", null);
    __decorate([
        $mol_mem_key
    ], $visavis_app.prototype, "Plot_link", null);
    __decorate([
        $mol_mem_key
    ], $visavis_app.prototype, "history_drop", null);
    __decorate([
        $mol_mem_key
    ], $visavis_app.prototype, "Plot_drop_icon", null);
    __decorate([
        $mol_mem_key
    ], $visavis_app.prototype, "Plot_drop", null);
    __decorate([
        $mol_mem_key
    ], $visavis_app.prototype, "Plot", null);
    __decorate([
        $mol_mem
    ], $visavis_app.prototype, "History", null);
    __decorate([
        $mol_mem_key
    ], $visavis_app.prototype, "Example", null);
    __decorate([
        $mol_mem
    ], $visavis_app.prototype, "Examples", null);
    __decorate([
        $mol_mem
    ], $visavis_app.prototype, "Deck", null);
    __decorate([
        $mol_mem
    ], $visavis_app.prototype, "Source", null);
    __decorate([
        $mol_mem
    ], $visavis_app.prototype, "Menu", null);
    __decorate([
        $mol_mem_key
    ], $visavis_app.prototype, "plot", null);
    __decorate([
        $mol_mem_key
    ], $visavis_app.prototype, "Matrix", null);
    __decorate([
        $mol_mem_key
    ], $visavis_app.prototype, "Cube", null);
    __decorate([
        $mol_mem_key
    ], $visavis_app.prototype, "Phase", null);
    __decorate([
        $mol_mem_key
    ], $visavis_app.prototype, "Bar", null);
    __decorate([
        $mol_mem_key
    ], $visavis_app.prototype, "Discovery", null);
    __decorate([
        $mol_mem_key
    ], $visavis_app.prototype, "Eigen", null);
    __decorate([
        $mol_mem_key
    ], $visavis_app.prototype, "Pie", null);
    __decorate([
        $mol_mem_key
    ], $visavis_app.prototype, "Scatter", null);
    __decorate([
        $mol_mem_key
    ], $visavis_app.prototype, "Customscatter", null);
    __decorate([
        $mol_mem_key
    ], $visavis_app.prototype, "Heatmap", null);
    __decorate([
        $mol_mem_key
    ], $visavis_app.prototype, "Graph", null);
    $.$visavis_app = $visavis_app;
})($ || ($ = {}));
//visavis/app/-view.tree/app.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_blob = ($node.buffer?.Blob ?? $mol_dom_context.Blob);
})($ || ($ = {}));
//mol/blob/blob.ts
;
"use strict";
var $;
(function ($) {
    function $mol_blob_text(blob) {
        return new Promise((done, fail) => {
            const reader = new FileReader;
            reader.onerror = fail;
            reader.onload = event => done(event.target.result);
            reader.readAsText(blob);
        });
    }
    $.$mol_blob_text = $mol_blob_text;
})($ || ($ = {}));
//mol/blob/text/text.ts
;
"use strict";
var $;
(function ($) {
    async function $mol_blob_json(blob) {
        const json = await $mol_blob_text(blob);
        return JSON.parse(json);
    }
    $.$mol_blob_json = $mol_blob_json;
})($ || ($ = {}));
//mol/blob/json/json.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $visavis_app extends $.$visavis_app {
            files_read(next) {
                const data = $mol_wire_sync($mol_blob_json)(next[0]);
                const plot = new $visavis_plot({
                    id: next[0].name,
                    type: data.use_visavis_type ?? 'unknown',
                    json: data,
                });
                this.history_add(plot);
            }
            history_add(plot) {
                const duplicates = this.history_plots().filter(id => id.replace(/\[\d+?\]/, '') === plot.id());
                const count = Math.max(...duplicates.map(id => Number(id.match(/\[(\d+?)\]$/)?.[1] ?? 0)));
                const postfix = duplicates.length ? `[${count + 1}]` : '';
                plot.id(`${plot.id()}${postfix}`);
                this.history_plot(plot.id(), plot);
                this.history_plots([...this.history_plots(), plot.id()]);
            }
            history_drop(id) {
                this.history_plot(id, null);
                this.history_plots(this.history_plots().filter(plot_id => plot_id !== id));
            }
            history_plots(next) {
                return this.$.$mol_state_local.value(`${this}.history_plots()`, next) ?? [];
            }
            history_plot(id, next) {
                const json = this.$.$mol_state_local.value(`${this}.history_plot('${id}')`, next && next.data());
                return json ? new $visavis_plot(json) : null;
            }
            history_rows() {
                return this.history_plots().map((id) => this.Plot(id)).reverse();
            }
            plot_id(id) {
                return id;
            }
            plot_opened(next) {
                return this.$.$mol_state_arg.value('file', next) ?? '';
            }
            Plot_opened() {
                const id = this.plot_opened();
                if (!id)
                    return [];
                const plot = this.history_plot(id);
                if (!plot)
                    return [];
                switch (plot.type()) {
                    case 'matrix': return this.Matrix(plot).pages();
                    case 'plot3d': return this.Cube(plot).pages();
                    case 'pd': return this.Phase(plot).pages();
                    case 'bar': return this.Bar(plot).pages();
                    case 'discovery': return this.Discovery(plot).pages();
                    case 'eigenplot': return this.Eigen(plot).pages();
                    case 'pie': return this.Pie(plot).pages();
                    case 'scatter': return this.Scatter(plot).pages();
                    case 'customscatter': return this.Customscatter(plot).pages();
                    case 'heatmap': return this.Heatmap(plot).pages();
                    case 'graph': return this.Graph(plot).pages();
                    default: return [];
                }
            }
            plot(plot) {
                return plot;
            }
            pages() {
                return [
                    this.Menu(),
                    ...this.Plot_opened(),
                ];
            }
            Placeholder() {
                return this.Plot_opened().length > 0 ? null : super.Placeholder();
            }
        }
        __decorate([
            $mol_action
        ], $visavis_app.prototype, "files_read", null);
        __decorate([
            $mol_action
        ], $visavis_app.prototype, "history_add", null);
        __decorate([
            $mol_action
        ], $visavis_app.prototype, "history_drop", null);
        __decorate([
            $mol_mem_key
        ], $visavis_app.prototype, "history_plots", null);
        __decorate([
            $mol_mem_key
        ], $visavis_app.prototype, "history_plot", null);
        __decorate([
            $mol_mem
        ], $visavis_app.prototype, "history_rows", null);
        $$.$visavis_app = $visavis_app;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/app/app.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem, per } = $mol_style_unit;
        const { calc } = $mol_style_func;
        $mol_style_define($.$visavis_app, {
            Menu: {
                flex: {
                    basis: rem(25),
                    shrink: 0,
                },
                Body: {
                    padding: $mol_gap.block,
                },
                Foot: {
                    padding: $mol_gap.block,
                },
            },
            Plot_link: {
                flex: {
                    grow: 1,
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/app/app.view.css.ts
;
"use strict";
var $;
(function ($_1) {
    function $mol_test(set) {
        for (let name in set) {
            const code = set[name];
            const test = (typeof code === 'string') ? new Function('', code) : code;
            $_1.$mol_test_all.push(test);
        }
        $mol_test_schedule();
    }
    $_1.$mol_test = $mol_test;
    $_1.$mol_test_mocks = [];
    $_1.$mol_test_all = [];
    async function $mol_test_run() {
        for (var test of $_1.$mol_test_all) {
            let context = Object.create($$);
            for (let mock of $_1.$mol_test_mocks)
                await mock(context);
            const res = test(context);
            if ($mol_promise_like(res)) {
                await new Promise((done, fail) => {
                    res.then(done, fail);
                    setTimeout(() => fail(new Error('Test timeout: ' + test.name)), 1000);
                });
            }
        }
        $$.$mol_log3_done({
            place: '$mol_test',
            message: 'All tests passed',
            count: $_1.$mol_test_all.length,
        });
    }
    $_1.$mol_test_run = $mol_test_run;
    let scheduled = false;
    function $mol_test_schedule() {
        if (scheduled)
            return;
        scheduled = true;
        setTimeout(async () => {
            scheduled = false;
            await $mol_test_run();
            $$.$mol_test_complete();
        }, 1000);
    }
    $_1.$mol_test_schedule = $mol_test_schedule;
    $_1.$mol_test_mocks.push(context => {
        let seed = 0;
        context.Math = Object.create(Math);
        context.Math.random = () => Math.sin(seed++);
        const forbidden = ['XMLHttpRequest', 'fetch'];
        for (let api of forbidden) {
            context[api] = new Proxy(function () { }, {
                get() {
                    $mol_fail_hidden(new Error(`${api} is forbidden in tests`));
                },
                apply() {
                    $mol_fail_hidden(new Error(`${api} is forbidden in tests`));
                },
            });
        }
    });
    $mol_test({
        'mocked Math.random'($) {
            console.assert($.Math.random() === 0);
            console.assert($.Math.random() === Math.sin(1));
        },
        'forbidden XMLHttpRequest'($) {
            try {
                console.assert(void new $.XMLHttpRequest);
            }
            catch (error) {
                console.assert(error.message === 'XMLHttpRequest is forbidden in tests');
            }
        },
        'forbidden fetch'($) {
            try {
                console.assert(void $.fetch(''));
            }
            catch (error) {
                console.assert(error.message === 'fetch is forbidden in tests');
            }
        },
    });
})($ || ($ = {}));
//mol/test/test.test.ts
;
"use strict";
var $;
(function ($) {
    function $mol_test_complete() {
        process.exit(0);
    }
    $.$mol_test_complete = $mol_test_complete;
})($ || ($ = {}));
//mol/test/test.node.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test_mocks.push($ => {
        $.$mol_log3_come = () => { };
        $.$mol_log3_done = () => { };
        $.$mol_log3_fail = () => { };
        $.$mol_log3_warn = () => { };
        $.$mol_log3_rise = () => { };
        $.$mol_log3_area = () => () => { };
    });
})($ || ($ = {}));
//mol/log3/log3.test.ts
;
"use strict";
//mol/type/assert/assert.ts
;
"use strict";
//mol/type/assert/assert.test.ts
;
"use strict";
//mol/type/equals/equals.test.ts
;
"use strict";
//mol/type/partial/deep/deep.ts
;
"use strict";
//mol/type/partial/deep/deep.test.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_jsx_prefix = '';
    $.$mol_jsx_crumbs = '';
    $.$mol_jsx_booked = null;
    $.$mol_jsx_document = {
        getElementById: () => null,
        createElementNS: (space, name) => $mol_dom_context.document.createElementNS(space, name),
        createDocumentFragment: () => $mol_dom_context.document.createDocumentFragment(),
    };
    $.$mol_jsx_frag = '';
    function $mol_jsx(Elem, props, ...childNodes) {
        const id = props && props.id || '';
        const guid = id ? $.$mol_jsx_prefix ? $.$mol_jsx_prefix + '/' + id : id : $.$mol_jsx_prefix;
        const crumbs_self = id ? $.$mol_jsx_crumbs.replace(/(\S+)/g, `$1_${id.replace(/\/.*/i, '')}`) : $.$mol_jsx_crumbs;
        if (Elem && $.$mol_jsx_booked) {
            if ($.$mol_jsx_booked.has(id)) {
                $mol_fail(new Error(`JSX already has tag with id ${JSON.stringify(guid)}`));
            }
            else {
                $.$mol_jsx_booked.add(id);
            }
        }
        let node = guid ? $.$mol_jsx_document.getElementById(guid) : null;
        if ($.$mol_jsx_prefix) {
            const prefix_ext = $.$mol_jsx_prefix;
            const booked_ext = $.$mol_jsx_booked;
            const crumbs_ext = $.$mol_jsx_crumbs;
            for (const field in props) {
                const func = props[field];
                if (typeof func !== 'function')
                    continue;
                const wrapper = function (...args) {
                    const prefix = $.$mol_jsx_prefix;
                    const booked = $.$mol_jsx_booked;
                    const crumbs = $.$mol_jsx_crumbs;
                    try {
                        $.$mol_jsx_prefix = prefix_ext;
                        $.$mol_jsx_booked = booked_ext;
                        $.$mol_jsx_crumbs = crumbs_ext;
                        return func.call(this, ...args);
                    }
                    finally {
                        $.$mol_jsx_prefix = prefix;
                        $.$mol_jsx_booked = booked;
                        $.$mol_jsx_crumbs = crumbs;
                    }
                };
                $mol_func_name_from(wrapper, func);
                props[field] = wrapper;
            }
        }
        if (typeof Elem !== 'string') {
            if ('prototype' in Elem) {
                const view = node && node[String(Elem)] || new Elem;
                Object.assign(view, props);
                view[Symbol.toStringTag] = guid;
                view.childNodes = childNodes;
                if (!view.ownerDocument)
                    view.ownerDocument = $.$mol_jsx_document;
                view.className = (crumbs_self ? crumbs_self + ' ' : '') + (Elem['name'] || Elem);
                node = view.valueOf();
                node[String(Elem)] = view;
                return node;
            }
            else {
                const prefix = $.$mol_jsx_prefix;
                const booked = $.$mol_jsx_booked;
                const crumbs = $.$mol_jsx_crumbs;
                try {
                    $.$mol_jsx_prefix = guid;
                    $.$mol_jsx_booked = new Set;
                    $.$mol_jsx_crumbs = (crumbs_self ? crumbs_self + ' ' : '') + (Elem['name'] || Elem);
                    return Elem(props, ...childNodes);
                }
                finally {
                    $.$mol_jsx_prefix = prefix;
                    $.$mol_jsx_booked = booked;
                    $.$mol_jsx_crumbs = crumbs;
                }
            }
        }
        if (!node) {
            node = Elem
                ? $.$mol_jsx_document.createElementNS(props?.xmlns ?? 'http://www.w3.org/1999/xhtml', Elem)
                : $.$mol_jsx_document.createDocumentFragment();
        }
        $mol_dom_render_children(node, [].concat(...childNodes));
        if (!Elem)
            return node;
        if (guid)
            node.id = guid;
        for (const key in props) {
            if (key === 'id')
                continue;
            if (typeof props[key] === 'string') {
                if (typeof node[key] === 'string')
                    node[key] = props[key];
                node.setAttribute(key, props[key]);
            }
            else if (props[key] &&
                typeof props[key] === 'object' &&
                Reflect.getPrototypeOf(props[key]) === Reflect.getPrototypeOf({})) {
                if (typeof node[key] === 'object') {
                    Object.assign(node[key], props[key]);
                    continue;
                }
            }
            else {
                node[key] = props[key];
            }
        }
        if ($.$mol_jsx_crumbs)
            node.className = (props?.['class'] ? props['class'] + ' ' : '') + crumbs_self;
        return node;
    }
    $.$mol_jsx = $mol_jsx;
})($ || ($ = {}));
//mol/jsx/jsx.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'Make empty div'() {
            $mol_assert_equal(($mol_jsx("div", null)).outerHTML, '<div></div>');
        },
        'Define native field'() {
            const dom = $mol_jsx("input", { value: '123' });
            $mol_assert_equal(dom.outerHTML, '<input value="123">');
            $mol_assert_equal(dom.value, '123');
        },
        'Define classes'() {
            const dom = $mol_jsx("div", { class: 'foo bar' });
            $mol_assert_equal(dom.outerHTML, '<div class="foo bar"></div>');
        },
        'Define styles'() {
            const dom = $mol_jsx("div", { style: { color: 'red' } });
            $mol_assert_equal(dom.outerHTML, '<div style="color: red;"></div>');
        },
        'Define dataset'() {
            const dom = $mol_jsx("div", { dataset: { foo: 'bar' } });
            $mol_assert_equal(dom.outerHTML, '<div data-foo="bar"></div>');
        },
        'Define attributes'() {
            const dom = $mol_jsx("div", { lang: "ru", hidden: true });
            $mol_assert_equal(dom.outerHTML, '<div lang="ru" hidden=""></div>');
        },
        'Define child nodes'() {
            const dom = $mol_jsx("div", null,
                "hello",
                $mol_jsx("strong", null, "world"),
                "!");
            $mol_assert_equal(dom.outerHTML, '<div>hello<strong>world</strong>!</div>');
        },
        'Function as component'() {
            const Button = (props, target) => {
                return $mol_jsx("button", { title: props.hint }, target());
            };
            const dom = $mol_jsx(Button, { id: "foo", hint: "click me" }, () => 'hey!');
            $mol_assert_equal(dom.outerHTML, '<button id="foo" title="click me" class="Button">hey!</button>');
        },
        'Nested guid generation'() {
            const Foo = () => {
                return $mol_jsx("div", null,
                    $mol_jsx(Bar, { id: "bar" },
                        $mol_jsx("img", { id: "icon" })));
            };
            const Bar = (props, icon) => {
                return $mol_jsx("span", null,
                    icon,
                    $mol_jsx("i", { id: "label" }));
            };
            const dom = $mol_jsx(Foo, { id: "foo" });
            $mol_assert_equal(dom.outerHTML, '<div id="foo" class="Foo"><span id="foo/bar" class="Foo_bar Bar"><img id="foo/icon" class="Foo_icon"><i id="foo/bar/label" class="Foo_bar_label Bar_label"></i></span></div>');
        },
        'Fail on non unique ids'() {
            const App = () => {
                return $mol_jsx("div", null,
                    $mol_jsx("span", { id: "bar" }),
                    $mol_jsx("span", { id: "bar" }));
            };
            $mol_assert_fail(() => $mol_jsx(App, { id: "foo" }), 'JSX already has tag with id "foo/bar"');
        },
        'Owner based guid generationn'() {
            const Foo = () => {
                return $mol_jsx("div", null,
                    $mol_jsx(Bar, { id: "middle", icon: () => $mol_jsx("img", { id: "icon" }) }));
            };
            const Bar = (props) => {
                return $mol_jsx("span", null, props.icon());
            };
            const dom = $mol_jsx(Foo, { id: "app" });
            $mol_assert_equal(dom.outerHTML, '<div id="app" class="Foo"><span id="app/middle" class="Foo_middle Bar"><img id="app/icon" class="Foo_icon"></span></div>');
        },
        'Fail on same ids from different caller'() {
            const Foo = () => {
                return $mol_jsx("div", null,
                    $mol_jsx("img", { id: "icon" }),
                    $mol_jsx(Bar, { id: "bar", icon: () => $mol_jsx("img", { id: "icon" }) }));
            };
            const Bar = (props) => {
                return $mol_jsx("span", null, props.icon());
            };
            $mol_assert_fail(() => $mol_jsx(Foo, { id: "foo" }), 'JSX already has tag with id "foo/icon"');
        },
    });
})($ || ($ = {}));
//mol/jsx/jsx.test.tsx
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'nulls & undefineds'() {
            $mol_assert_ok($mol_compare_deep(null, null));
            $mol_assert_ok($mol_compare_deep(undefined, undefined));
            $mol_assert_not($mol_compare_deep(undefined, null));
            $mol_assert_not($mol_compare_deep({}, null));
        },
        'number'() {
            $mol_assert_ok($mol_compare_deep(1, 1));
            $mol_assert_ok($mol_compare_deep(Number.NaN, Number.NaN));
            $mol_assert_not($mol_compare_deep(1, 2));
            $mol_assert_ok($mol_compare_deep(Object(1), Object(1)));
            $mol_assert_not($mol_compare_deep(Object(1), Object(2)));
        },
        'POJO'() {
            $mol_assert_ok($mol_compare_deep({}, {}));
            $mol_assert_not($mol_compare_deep({ a: 1 }, { b: 2 }));
            $mol_assert_not($mol_compare_deep({ a: 1 }, { a: 2 }));
            $mol_assert_not($mol_compare_deep({}, { a: undefined }));
            $mol_assert_not($mol_compare_deep({ a: 1, b: 2 }, { b: 2, a: 1 }));
            $mol_assert_ok($mol_compare_deep({ a: { b: 1 } }, { a: { b: 1 } }));
            $mol_assert_ok($mol_compare_deep(Object.create(null), Object.create(null)));
        },
        'Array'() {
            $mol_assert_ok($mol_compare_deep([], []));
            $mol_assert_ok($mol_compare_deep([1, [2]], [1, [2]]));
            $mol_assert_not($mol_compare_deep([1, 2], [1, 3]));
            $mol_assert_not($mol_compare_deep([1, 2,], [1, 3, undefined]));
        },
        'Non POJO are different'() {
            class Thing extends Object {
            }
            $mol_assert_not($mol_compare_deep(new Thing, new Thing));
            $mol_assert_not($mol_compare_deep(() => 1, () => 1));
            $mol_assert_not($mol_compare_deep(new RangeError('Test error'), new RangeError('Test error')));
        },
        'POJO with symbols'() {
            const sym = Symbol();
            $mol_assert_ok($mol_compare_deep({ [sym]: true }, { [sym]: true }));
            $mol_assert_not($mol_compare_deep({ [Symbol()]: true }, { [Symbol()]: true }));
        },
        'same POJOs with cyclic reference'() {
            const a = { foo: {} };
            a['self'] = a;
            const b = { foo: {} };
            b['self'] = b;
            $mol_assert_ok($mol_compare_deep(a, b));
        },
        'Date'() {
            $mol_assert_ok($mol_compare_deep(new Date(12345), new Date(12345)));
            $mol_assert_not($mol_compare_deep(new Date(12345), new Date(12346)));
        },
        'RegExp'() {
            $mol_assert_ok($mol_compare_deep(/\x22/mig, /\x22/mig));
            $mol_assert_not($mol_compare_deep(/\x22/mig, /\x21/mig));
            $mol_assert_not($mol_compare_deep(/\x22/mig, /\x22/mg));
        },
        'Error'() {
            $mol_assert_not($mol_compare_deep(new Error('xxx'), new Error('xxx')));
            const fail = (message) => new Error(message);
            $mol_assert_ok($mol_compare_deep(...['xxx', 'xxx'].map(msg => new Error(msg))));
            $mol_assert_not($mol_compare_deep(...['xxx', 'yyy'].map(msg => new Error(msg))));
        },
        'Map'() {
            $mol_assert_ok($mol_compare_deep(new Map, new Map));
            $mol_assert_ok($mol_compare_deep(new Map([[1, [2]]]), new Map([[1, [2]]])));
            $mol_assert_ok($mol_compare_deep(new Map([[[1], 2]]), new Map([[[1], 2]])));
            $mol_assert_not($mol_compare_deep(new Map([[1, 2]]), new Map([[1, 3]])));
            $mol_assert_not($mol_compare_deep(new Map([[[1], 2]]), new Map([[[3], 2]])));
        },
        'Set'() {
            $mol_assert_ok($mol_compare_deep(new Set, new Set));
            $mol_assert_ok($mol_compare_deep(new Set([1, [2]]), new Set([1, [2]])));
            $mol_assert_not($mol_compare_deep(new Set([1]), new Set([2])));
        },
        'Uint8Array'() {
            $mol_assert_ok($mol_compare_deep(new Uint8Array, new Uint8Array));
            $mol_assert_ok($mol_compare_deep(new Uint8Array([0]), new Uint8Array([0])));
            $mol_assert_not($mol_compare_deep(new Uint8Array([0]), new Uint8Array([1])));
        },
        'Custom comparator'() {
            class User {
                name;
                rand;
                constructor(name, rand = Math.random()) {
                    this.name = name;
                    this.rand = rand;
                }
                [Symbol.toPrimitive](mode) {
                    return this.name;
                }
            }
            $mol_assert_ok($mol_compare_deep(new User('Jin'), new User('Jin')));
            $mol_assert_not($mol_compare_deep(new User('Jin'), new User('John')));
        },
    });
})($ || ($ = {}));
//mol/compare/deep/deep.test.tsx
;
"use strict";
var $;
(function ($) {
    function $mol_dom_serialize(node) {
        const serializer = new $mol_dom_context.XMLSerializer;
        return serializer.serializeToString(node);
    }
    $.$mol_dom_serialize = $mol_dom_serialize;
})($ || ($ = {}));
//mol/dom/serialize/serialize.ts
;
"use strict";
var $;
(function ($) {
    function $mol_assert_ok(value) {
        if (value)
            return;
        $mol_fail(new Error(`${value} ≠ true`));
    }
    $.$mol_assert_ok = $mol_assert_ok;
    function $mol_assert_not(value) {
        if (!value)
            return;
        $mol_fail(new Error(`${value} ≠ false`));
    }
    $.$mol_assert_not = $mol_assert_not;
    function $mol_assert_fail(handler, ErrorRight) {
        const fail = $.$mol_fail;
        try {
            $.$mol_fail = $.$mol_fail_hidden;
            handler();
        }
        catch (error) {
            if (!ErrorRight)
                return error;
            $.$mol_fail = fail;
            if (typeof ErrorRight === 'string') {
                $mol_assert_equal(error.message, ErrorRight);
            }
            else {
                $mol_assert_ok(error instanceof ErrorRight);
            }
            return error;
        }
        finally {
            $.$mol_fail = fail;
        }
        $mol_fail(new Error('Not failed'));
    }
    $.$mol_assert_fail = $mol_assert_fail;
    function $mol_assert_equal(...args) {
        for (let i = 0; i < args.length; ++i) {
            for (let j = 0; j < args.length; ++j) {
                if (i === j)
                    continue;
                if (Number.isNaN(args[i]) && Number.isNaN(args[j]))
                    continue;
                if (args[i] !== args[j])
                    $mol_fail(new Error(`Not equal (${i + 1}:${j + 1})\n${args[i]}\n${args[j]}`));
            }
        }
    }
    $.$mol_assert_equal = $mol_assert_equal;
    function $mol_assert_unique(...args) {
        for (let i = 0; i < args.length; ++i) {
            for (let j = 0; j < args.length; ++j) {
                if (i === j)
                    continue;
                if (args[i] === args[j] || (Number.isNaN(args[i]) && Number.isNaN(args[j]))) {
                    $mol_fail(new Error(`args[${i}] = args[${j}] = ${args[i]}`));
                }
            }
        }
    }
    $.$mol_assert_unique = $mol_assert_unique;
    function $mol_assert_like(head, ...tail) {
        for (let [index, value] of Object.entries(tail)) {
            if (!$mol_compare_deep(value, head)) {
                const print = (val) => {
                    if (!val)
                        return val;
                    if (typeof val !== 'object')
                        return val;
                    if ('outerHTML' in val)
                        return val.outerHTML;
                    try {
                        return JSON.stringify(val);
                    }
                    catch (error) {
                        console.error(error);
                        return val;
                    }
                };
                return $mol_fail(new Error(`Not like (1:${+index + 2})\n${print(head)}\n---\n${print(value)}`));
            }
        }
    }
    $.$mol_assert_like = $mol_assert_like;
    function $mol_assert_dom(left, right) {
        $mol_assert_equal($mol_dom_serialize(left), $mol_dom_serialize(right));
    }
    $.$mol_assert_dom = $mol_assert_dom;
})($ || ($ = {}));
//mol/assert/assert.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'must be false'() {
            $mol_assert_not(0);
        },
        'must be true'() {
            $mol_assert_ok(1);
        },
        'two must be equal'() {
            $mol_assert_equal(2, 2);
        },
        'three must be equal'() {
            $mol_assert_equal(2, 2, 2);
        },
        'two must be unique'() {
            $mol_assert_unique([3], [3]);
        },
        'three must be unique'() {
            $mol_assert_unique([3], [3], [3]);
        },
        'two must be alike'() {
            $mol_assert_like([3], [3]);
        },
        'three must be alike'() {
            $mol_assert_like([3], [3], [3]);
        },
    });
})($ || ($ = {}));
//mol/assert/assert.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        'FQN of anon function'($) {
            const $$ = Object.assign($, { $mol_func_name_test: (() => () => { })() });
            $mol_assert_equal($$.$mol_func_name_test.name, '');
            $mol_assert_equal($$.$mol_func_name($$.$mol_func_name_test), '$mol_func_name_test');
            $mol_assert_equal($$.$mol_func_name_test.name, '$mol_func_name_test');
        },
    });
})($ || ($ = {}));
//mol/func/name/name.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'get'() {
            const proxy = $mol_delegate({}, () => ({ foo: 777 }));
            $mol_assert_equal(proxy.foo, 777);
        },
        'has'() {
            const proxy = $mol_delegate({}, () => ({ foo: 777 }));
            $mol_assert_equal('foo' in proxy, true);
        },
        'set'() {
            const target = { foo: 777 };
            const proxy = $mol_delegate({}, () => target);
            proxy.foo = 123;
            $mol_assert_equal(target.foo, 123);
        },
        'getOwnPropertyDescriptor'() {
            const proxy = $mol_delegate({}, () => ({ foo: 777 }));
            $mol_assert_like(Object.getOwnPropertyDescriptor(proxy, 'foo'), {
                value: 777,
                writable: true,
                enumerable: true,
                configurable: true,
            });
        },
        'ownKeys'() {
            const proxy = $mol_delegate({}, () => ({ foo: 777, [Symbol.toStringTag]: 'bar' }));
            $mol_assert_like(Reflect.ownKeys(proxy), ['foo', Symbol.toStringTag]);
        },
        'getPrototypeOf'() {
            class Foo {
            }
            const proxy = $mol_delegate({}, () => new Foo);
            $mol_assert_equal(Object.getPrototypeOf(proxy), Foo.prototype);
        },
        'setPrototypeOf'() {
            class Foo {
            }
            const target = {};
            const proxy = $mol_delegate({}, () => target);
            Object.setPrototypeOf(proxy, Foo.prototype);
            $mol_assert_equal(Object.getPrototypeOf(target), Foo.prototype);
        },
        'instanceof'() {
            class Foo {
            }
            const proxy = $mol_delegate({}, () => new Foo);
            $mol_assert_ok(proxy instanceof Foo);
            $mol_assert_ok(proxy instanceof $mol_delegate);
        },
        'autobind'() {
            class Foo {
            }
            const proxy = $mol_delegate({}, () => new Foo);
            $mol_assert_ok(proxy instanceof Foo);
            $mol_assert_ok(proxy instanceof $mol_delegate);
        },
    });
})($ || ($ = {}));
//mol/delegate/delegate.test.ts
;
"use strict";
//mol/type/writable/writable.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'init with overload'() {
            class X extends $mol_object {
                foo() {
                    return 1;
                }
            }
            var x = X.make({
                foo: () => 2,
            });
            $mol_assert_equal(x.foo(), 2);
        },
    });
})($ || ($ = {}));
//mol/object/object.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        'Collect deps'() {
            const pub1 = new $mol_wire_pub;
            const pub2 = new $mol_wire_pub;
            const sub = new $mol_wire_pub_sub;
            const bu1 = sub.track_on();
            try {
                pub1.promote();
                pub2.promote();
                pub2.promote();
            }
            finally {
                sub.track_cut();
                sub.track_off(bu1);
            }
            pub1.emit();
            pub2.emit();
            $mol_assert_like(sub.pub_list, [pub1, pub2, pub2]);
            const bu2 = sub.track_on();
            try {
                pub1.promote();
                pub1.promote();
                pub2.promote();
            }
            finally {
                sub.track_cut();
                sub.track_off(bu2);
            }
            pub1.emit();
            pub2.emit();
            $mol_assert_like(sub.pub_list, [pub1, pub1, pub2]);
        },
        'cyclic detection'($) {
            const sub1 = new $mol_wire_pub_sub;
            const sub2 = new $mol_wire_pub_sub;
            const bu1 = sub1.track_on();
            try {
                const bu2 = sub2.track_on();
                try {
                    $mol_assert_fail(() => sub1.promote(), 'Circular subscription');
                }
                finally {
                    sub2.track_cut();
                    sub2.track_off(bu2);
                }
            }
            finally {
                sub1.track_cut();
                sub1.track_off(bu1);
            }
        },
    });
})($ || ($ = {}));
//mol/wire/pub/sub/sub.test.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_after_mock_queue = [];
    function $mol_after_mock_warp() {
        const queue = $.$mol_after_mock_queue.splice(0);
        for (const task of queue)
            task();
    }
    $.$mol_after_mock_warp = $mol_after_mock_warp;
    class $mol_after_mock_commmon extends $mol_object2 {
        task;
        promise = Promise.resolve();
        cancelled = false;
        id;
        constructor(task) {
            super();
            this.task = task;
            $.$mol_after_mock_queue.push(task);
        }
        destructor() {
            const index = $.$mol_after_mock_queue.indexOf(this.task);
            if (index >= 0)
                $.$mol_after_mock_queue.splice(index, 1);
        }
    }
    $.$mol_after_mock_commmon = $mol_after_mock_commmon;
    class $mol_after_mock_timeout extends $mol_after_mock_commmon {
        delay;
        constructor(delay, task) {
            super(task);
            this.delay = delay;
        }
    }
    $.$mol_after_mock_timeout = $mol_after_mock_timeout;
})($ || ($ = {}));
//mol/after/mock/mock.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test_mocks.push($ => {
        $.$mol_after_timeout = $mol_after_mock_timeout;
    });
})($ || ($ = {}));
//mol/after/timeout/timeout.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test_mocks.push($ => {
        $.$mol_after_frame = $mol_after_mock_commmon;
    });
})($ || ($ = {}));
//mol/after/frame/frame.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'Sync execution'() {
            class Sync extends $mol_object2 {
                static calc(a, b) {
                    return a + b;
                }
            }
            __decorate([
                $mol_wire_method
            ], Sync, "calc", null);
            $mol_assert_equal(Sync.calc(1, 2), 3);
        },
        async 'async <=> sync'() {
            class SyncAsync extends $mol_object2 {
                static async val(a) {
                    return a;
                }
                static sum(a, b) {
                    const syn = $mol_wire_sync(this);
                    return syn.val(a) + syn.val(b);
                }
                static async calc(a, b) {
                    return 5 + await $mol_wire_async(this).sum(a, b);
                }
            }
            $mol_assert_equal(await SyncAsync.calc(1, 2), 8);
        },
        async 'Idempotence control'() {
            class Idempotence extends $mol_object2 {
                static logs_idemp = 0;
                static logs_unidemp = 0;
                static log_idemp() {
                    this.logs_idemp += 1;
                }
                static log_unidemp() {
                    this.logs_unidemp += 1;
                }
                static async val(a) {
                    return a;
                }
                static sum(a, b) {
                    this.log_idemp();
                    this.log_unidemp();
                    const syn = $mol_wire_sync(this);
                    return syn.val(a) + syn.val(b);
                }
                static async calc(a, b) {
                    return 5 + await $mol_wire_async(this).sum(a, b);
                }
            }
            __decorate([
                $mol_wire_method
            ], Idempotence, "log_idemp", null);
            $mol_assert_equal(await Idempotence.calc(1, 2), 8);
            $mol_assert_equal(Idempotence.logs_idemp, 1);
            $mol_assert_equal(Idempotence.logs_unidemp, 3);
        },
        async 'Error handling'() {
            class Handle extends $mol_object2 {
                static async sum(a, b) {
                    $mol_fail(new Error('test error ' + (a + b)));
                }
                static check() {
                    try {
                        return $mol_wire_sync(Handle).sum(1, 2);
                    }
                    catch (error) {
                        if ($mol_promise_like(error))
                            $mol_fail_hidden(error);
                        $mol_assert_equal(error.message, 'test error 3');
                    }
                }
            }
            await $mol_wire_async(Handle).check();
        },
    });
})($ || ($ = {}));
//mol/wire/fiber/fiber.test.ts
;
"use strict";
//mol/type/tail/tail.test.ts
;
"use strict";
var $;
(function ($) {
    function $mol_promise() {
        let done;
        let fail;
        const promise = new Promise((d, f) => {
            done = d;
            fail = f;
        });
        return Object.assign(promise, {
            done,
            fail,
        });
    }
    $.$mol_promise = $mol_promise;
})($ || ($ = {}));
//mol/promise/promise/promise.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wait_timeout_async(timeout) {
        const promise = $mol_promise();
        const task = new this.$mol_after_timeout(timeout, () => promise.done());
        return Object.assign(promise, {
            destructor: () => task.destructor()
        });
    }
    $.$mol_wait_timeout_async = $mol_wait_timeout_async;
    function $mol_wait_timeout(timeout) {
        return this.$mol_wire_sync(this).$mol_wait_timeout_async(timeout);
    }
    $.$mol_wait_timeout = $mol_wait_timeout;
})($ || ($ = {}));
//mol/wait/timeout/timeout.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        async 'Latest method calls wins'($) {
            class NameLogger extends $mol_object2 {
                static $ = $;
                static first = [];
                static last = [];
                static send(next) {
                    $mol_wire_sync(this.first).push(next);
                    this.$.$mol_wait_timeout(0);
                    this.last.push(next);
                }
            }
            const name = $mol_wire_async(NameLogger).send;
            name('john');
            const promise = name('jin');
            $.$mol_after_mock_warp();
            await promise;
            $mol_assert_like(NameLogger.first, ['john', 'jin']);
            $mol_assert_like(NameLogger.last, ['jin']);
        },
        async 'Latest function calls wins'($) {
            const first = [];
            const last = [];
            function send_name(next) {
                $mol_wire_sync(first).push(next);
                $.$mol_wait_timeout(0);
                last.push(next);
            }
            const name = $mol_wire_async(send_name);
            name('john');
            const promise = name('jin');
            $.$mol_after_mock_warp();
            await promise;
            $mol_assert_like(first, ['john', 'jin']);
            $mol_assert_like(last, ['jin']);
        },
    });
})($ || ($ = {}));
//mol/wire/async/async.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        'Cached channel'($) {
            class App extends $mol_object2 {
                static $ = $;
                static value(next = 1) {
                    return next + 1;
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "value", null);
            $mol_assert_equal(App.value(), 2);
            App.value(2);
            $mol_assert_equal(App.value(), 3);
        },
        'Read Pushed'($) {
            class App extends $mol_object2 {
                static $ = $;
                static value(next = 0) {
                    return next;
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "value", null);
            $mol_assert_equal(App.value(1), 1);
            $mol_assert_equal(App.value(), 1);
        },
        'Mem overrides mem'($) {
            class Base extends $mol_object2 {
                static $ = $;
                static value(next = 1) {
                    return next + 1;
                }
            }
            __decorate([
                $mol_wire_solo
            ], Base, "value", null);
            class Middle extends Base {
                static value(next) {
                    return super.value(next) + 1;
                }
            }
            __decorate([
                $mol_wire_solo
            ], Middle, "value", null);
            class App extends Middle {
                static value(next) {
                    return super.value(next) * 3;
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "value", null);
            $mol_assert_equal(App.value(), 9);
            $mol_assert_equal(App.value(5), 21);
            $mol_assert_equal(App.value(), 21);
        },
        'Auto recalculation of cached values'($) {
            class App extends $mol_object2 {
                static $ = $;
                static xxx(next) {
                    return next || 1;
                }
                static yyy() {
                    return this.xxx() + 1;
                }
                static zzz() {
                    return this.yyy() + 1;
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "xxx", null);
            __decorate([
                $mol_wire_solo
            ], App, "yyy", null);
            __decorate([
                $mol_wire_solo
            ], App, "zzz", null);
            $mol_assert_equal(App.yyy(), 2);
            $mol_assert_equal(App.zzz(), 3);
            App.xxx(5);
            $mol_assert_equal(App.zzz(), 7);
        },
        'Skip recalculation when actually no dependency changes'($) {
            const log = [];
            class App extends $mol_object2 {
                static $ = $;
                static xxx(next) {
                    log.push('xxx');
                    return next || 1;
                }
                static yyy() {
                    log.push('yyy');
                    return [Math.sign(this.xxx())];
                }
                static zzz() {
                    log.push('zzz');
                    return this.yyy()[0] + 1;
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "xxx", null);
            __decorate([
                $mol_wire_solo
            ], App, "yyy", null);
            __decorate([
                $mol_wire_solo
            ], App, "zzz", null);
            App.zzz();
            $mol_assert_like(log, ['zzz', 'yyy', 'xxx']);
            App.xxx(5);
            $mol_assert_like(log, ['zzz', 'yyy', 'xxx', 'xxx']);
            App.zzz();
            $mol_assert_like(log, ['zzz', 'yyy', 'xxx', 'xxx', 'yyy']);
        },
        'Flow: Auto'($) {
            class App extends $mol_object2 {
                static get $() { return $; }
                static source(next = 1) { return next; }
                static condition(next = true) { return next; }
                static counter = 0;
                static result() {
                    const res = this.condition() ? this.source() : 0;
                    return res + this.counter++;
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "source", null);
            __decorate([
                $mol_wire_solo
            ], App, "condition", null);
            __decorate([
                $mol_wire_solo
            ], App, "result", null);
            $mol_assert_equal(App.result(), 1);
            $mol_assert_equal(App.counter, 1);
            App.source(10);
            $mol_assert_equal(App.result(), 11);
            $mol_assert_equal(App.counter, 2);
            App.condition(false);
            $mol_assert_equal(App.result(), 2);
            $mol_assert_equal(App.counter, 3);
            $mol_wire_fiber.sync();
            $mol_assert_equal(App.source(), 1);
            App.source(20);
            $mol_assert_equal(App.result(), 2);
            $mol_assert_equal(App.counter, 3);
            App.condition(true);
            $mol_assert_equal(App.result(), 23);
            $mol_assert_equal(App.counter, 4);
        },
        'Dupes: Equality'($) {
            let counter = 0;
            class App extends $mol_object2 {
                static $ = $;
                static foo(next) {
                    return next ?? { numbs: [1] };
                }
                static bar() {
                    return { ...this.foo(), count: ++counter };
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "foo", null);
            __decorate([
                $mol_wire_solo
            ], App, "bar", null);
            $mol_assert_like(App.bar(), { numbs: [1], count: 1 });
            App.foo({ numbs: [1] });
            $mol_assert_like(App.bar(), { numbs: [1], count: 1 });
            App.foo({ numbs: [2] });
            $mol_assert_like(App.bar(), { numbs: [2], count: 2 });
        },
        'Cycle: Fail'($) {
            class App extends $mol_object2 {
                static $ = $;
                static foo() {
                    return this.bar() + 1;
                }
                static bar() {
                    return this.foo() + 1;
                }
                static test() {
                    $mol_assert_fail(() => App.foo(), 'Circular subscription');
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "foo", null);
            __decorate([
                $mol_wire_solo
            ], App, "bar", null);
            __decorate([
                $mol_wire_method
            ], App, "test", null);
            App.test();
        },
        'Different order of pull and push'($) {
            class App extends $mol_object2 {
                static $ = $;
                static store(next = 0) {
                    return next;
                }
                static fast(next) {
                    return this.store(next);
                }
                static slow(next) {
                    if (next !== undefined)
                        this.slow();
                    return this.store(next);
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "store", null);
            __decorate([
                $mol_wire_solo
            ], App, "fast", null);
            __decorate([
                $mol_wire_solo
            ], App, "slow", null);
            App.fast();
            $mol_assert_equal(App.slow(666), 666);
            $mol_assert_equal(App.fast(), App.slow(), 666);
            App.store(777);
            $mol_assert_equal(App.fast(), App.slow(), 777);
        },
        'Actions inside invariant'($) {
            class App extends $mol_object2 {
                static $ = $;
                static count(next = 0) {
                    return next;
                }
                static count2() {
                    return this.count();
                }
                static res() {
                    const count = this.count2();
                    if (!count)
                        this.count(count + 1);
                    return count + 1;
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "count", null);
            __decorate([
                $mol_wire_solo
            ], App, "count2", null);
            __decorate([
                $mol_wire_solo
            ], App, "res", null);
            $mol_assert_like(App.res(), 1);
            App.count(5);
            $mol_assert_like(App.res(), 6);
        },
        async 'Toggle with async'($) {
            class App extends $mol_object2 {
                static $ = $;
                static checked(next = false) {
                    $$.$mol_wait_timeout(0);
                    return next;
                }
                static toggle() {
                    const prev = this.checked();
                    $mol_assert_unique(this.checked(!prev), prev);
                }
                static res() {
                    return this.checked();
                }
                static test() {
                    $mol_assert_equal(App.res(), false);
                    App.toggle();
                    $mol_assert_equal(App.res(), true);
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "checked", null);
            __decorate([
                $mol_wire_method
            ], App, "toggle", null);
            __decorate([
                $mol_wire_solo
            ], App, "res", null);
            __decorate([
                $mol_wire_method
            ], App, "test", null);
            await $mol_wire_async(App).test();
        },
        'Restore after error'($) {
            class App extends $mol_object2 {
                static get $() { return $; }
                static condition(next = false) { return next; }
                static broken() {
                    if (this.condition()) {
                        $mol_fail(new Error('test error'));
                    }
                    return 1;
                }
                static result() {
                    return this.broken();
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "condition", null);
            __decorate([
                $mol_wire_solo
            ], App, "broken", null);
            __decorate([
                $mol_wire_solo
            ], App, "result", null);
            $mol_assert_equal(App.result(), 1);
            App.condition(true);
            $mol_assert_fail(() => App.result());
            App.condition(false);
            $mol_assert_equal(App.result(), 1);
        },
        async 'Wait for data'($) {
            class App extends $mol_object2 {
                static $ = $;
                static async source() {
                    return 'Jin';
                }
                static middle() {
                    return $mol_wire_sync(this).source();
                }
                static target() {
                    return this.middle();
                }
                static test() {
                    $mol_assert_equal(App.target(), 'Jin');
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "middle", null);
            __decorate([
                $mol_wire_solo
            ], App, "target", null);
            __decorate([
                $mol_wire_method
            ], App, "test", null);
            await $mol_wire_async(App).test();
        },
        'Auto destroy on long alone'($) {
            let destroyed = false;
            class App extends $mol_object2 {
                static $ = $;
                static showing(next = true) {
                    return next;
                }
                static details() {
                    return {
                        destructor() {
                            destroyed = true;
                        }
                    };
                }
                static render() {
                    return this.showing() ? this.details() : null;
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "showing", null);
            __decorate([
                $mol_wire_solo
            ], App, "details", null);
            __decorate([
                $mol_wire_solo
            ], App, "render", null);
            const details = App.render();
            $mol_assert_ok(details);
            App.showing(false);
            $mol_assert_not(App.render());
            App.showing(true);
            $mol_assert_equal(App.render(), details);
            $mol_wire_fiber.sync();
            $mol_assert_not(destroyed);
            App.showing(false);
            $mol_wire_fiber.sync();
            $mol_assert_ok(destroyed);
            App.showing(true);
            $mol_assert_unique(App.render(), details);
        },
        async 'Hold pubs while wait async task'($) {
            class App extends $mol_object2 {
                static $ = $;
                static counter = 0;
                static resets(next) {
                    return ($mol_wire_probe(() => this.resets()) ?? -1) + 1;
                }
                static async wait() { }
                static value() {
                    return ++this.counter;
                }
                static result() {
                    if (this.resets())
                        $mol_wire_sync(this).wait();
                    return this.value();
                }
                static test() {
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "resets", null);
            __decorate([
                $mol_wire_solo
            ], App, "value", null);
            __decorate([
                $mol_wire_solo
            ], App, "result", null);
            __decorate([
                $mol_wire_method
            ], App, "test", null);
            $mol_assert_equal(App.result(), 1);
            App.resets(null);
            $mol_wire_fiber.sync();
            $mol_assert_equal(await $mol_wire_async(App).result(), 1);
        },
        'Owned value has js-path name'() {
            class App extends $mol_object2 {
                static title() {
                    return new $mol_object2;
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "title", null);
            $mol_assert_equal(`${App.title()}`, 'App.title()');
        },
        'Unsubscribe from temp pubs on complete'($) {
            class Random extends $mol_object2 {
                static $ = $;
                static seed() {
                    return Math.random();
                }
                static resets(next) {
                    return Math.random();
                }
                static value() {
                    this.resets();
                    return this.seed();
                }
            }
            __decorate([
                $mol_wire_method
            ], Random, "seed", null);
            __decorate([
                $mol_wire_solo
            ], Random, "resets", null);
            __decorate([
                $mol_wire_solo
            ], Random, "value", null);
            const first = Random.value();
            Random.resets(null);
            $mol_assert_unique(Random.value(), first);
        },
    });
})($ || ($ = {}));
//mol/wire/solo/solo.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        'Memoize by single simple key'($) {
            class Team extends $mol_object2 {
                static $ = $;
                static user_name(user, next) {
                    return next ?? user;
                }
                static user_names() {
                    return [
                        this.user_name('jin'),
                        this.user_name('john'),
                    ];
                }
            }
            __decorate([
                $mol_wire_plex
            ], Team, "user_name", null);
            __decorate([
                $mol_wire_solo
            ], Team, "user_names", null);
            $mol_assert_like(Team.user_names(), ['jin', 'john']);
            Team.user_name('jin', 'JIN');
            $mol_assert_like(Team.user_names(), ['JIN', 'john']);
        },
        'Memoize by single complex key'($) {
            class Map extends $mol_object2 {
                static $ = $;
                static tile(pos) {
                    return new String(`/tile=${pos}`);
                }
                static test() {
                    $mol_assert_like(this.tile([0, 1]), new String('/tile=0,1'));
                    $mol_assert_equal(this.tile([0, 1]), this.tile([0, 1]));
                }
            }
            __decorate([
                $mol_wire_plex
            ], Map, "tile", null);
            __decorate([
                $mol_wire_method
            ], Map, "test", null);
            Map.test();
        },
        'Owned value has js-path name'() {
            class App extends $mol_object2 {
                static like(friend) {
                    return new $mol_object2;
                }
                static relation([friend, props]) {
                    return new $mol_object2;
                }
            }
            __decorate([
                $mol_wire_plex
            ], App, "like", null);
            __decorate([
                $mol_wire_plex
            ], App, "relation", null);
            $mol_assert_equal(`${App.like(123)}`, 'App.like(123)');
            $mol_assert_equal(`${App.relation([123, [456]])}`, 'App.relation([123,[456]])');
        },
        'Deep deps'($) {
            class Fib extends $mol_object2 {
                static $ = $;
                static sums = 0;
                static value(index, next) {
                    if (next)
                        return next;
                    if (index < 2)
                        return 1;
                    ++this.sums;
                    return this.value(index - 1) + this.value(index - 2);
                }
            }
            __decorate([
                $mol_wire_plex
            ], Fib, "value", null);
            $mol_assert_equal(Fib.value(4), 5);
            $mol_assert_equal(Fib.sums, 3);
            Fib.value(1, 2);
            $mol_assert_equal(Fib.value(4), 8);
            $mol_assert_equal(Fib.sums, 6);
        },
    });
})($ || ($ = {}));
//mol/wire/plex/plex.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'Previous value'() {
            class Cache extends $mol_object2 {
                static store(next) {
                    if (!next)
                        return {};
                    return {
                        ...$mol_wire_probe(() => this.store()) ?? {},
                        ...next,
                    };
                }
            }
            __decorate([
                $mol_wire_solo
            ], Cache, "store", null);
            $mol_assert_like(Cache.store(), {});
            $mol_assert_like(Cache.store({ foo: 666 }), { foo: 666 });
            $mol_assert_like(Cache.store({ bar: 777 }), { foo: 666, bar: 777 });
        },
    });
})($ || ($ = {}));
//mol/wire/probe/probe.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test_mocks.push($ => {
        $.$mol_after_tick = $mol_after_mock_commmon;
    });
})($ || ($ = {}));
//mol/after/tick/tick.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'run callback'() {
            class Plus1 extends $mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        return task.call(this, ...args) + 1;
                    };
                }
            }
            $mol_assert_equal(Plus1.run(() => 2), 3);
        },
        'wrap function'() {
            class Plus1 extends $mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        return task.call(this, ...args) + 1;
                    };
                }
            }
            const obj = {
                level: 2,
                pow: Plus1.func(function (a) {
                    return a ** this.level;
                })
            };
            $mol_assert_equal(obj.pow(2), 5);
        },
        'decorate field getter'() {
            class Plus1 extends $mol_wrapper {
                static last = 0;
                static wrap(task) {
                    return function (...args) {
                        return Plus1.last = (task.call(this, ...args) || 0) + 1;
                    };
                }
            }
            class Foo {
                static get two() {
                    return 1;
                }
                static set two(next) { }
            }
            __decorate([
                Plus1.field
            ], Foo, "two", null);
            $mol_assert_equal(Foo.two, 2);
            Foo.two = 3;
            $mol_assert_equal(Plus1.last, 2);
            $mol_assert_equal(Foo.two, 2);
        },
        'decorate instance method'() {
            class Plus1 extends $mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        return task.call(this, ...args) + 1;
                    };
                }
            }
            class Foo1 {
                level = 2;
                pow(a) {
                    return a ** this.level;
                }
            }
            __decorate([
                Plus1.method
            ], Foo1.prototype, "pow", null);
            const Foo2 = Foo1;
            const foo = new Foo2;
            $mol_assert_equal(foo.pow(2), 5);
        },
        'decorate static method'() {
            class Plus1 extends $mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        return task.call(this, ...args) + 1;
                    };
                }
            }
            class Foo {
                static level = 2;
                static pow(a) {
                    return a ** this.level;
                }
            }
            __decorate([
                Plus1.method
            ], Foo, "pow", null);
            $mol_assert_equal(Foo.pow(2), 5);
        },
        'decorate class'() {
            class BarInc extends $mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        const foo = task.call(this, ...args);
                        foo.bar++;
                        return foo;
                    };
                }
            }
            let Foo = class Foo {
                bar;
                constructor(bar) {
                    this.bar = bar;
                }
            };
            Foo = __decorate([
                BarInc.class
            ], Foo);
            $mol_assert_equal(new Foo(2).bar, 3);
        },
    });
})($ || ($ = {}));
//mol/wrapper/wrapper.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'memoize field'() {
            class Foo {
                static one = 1;
                static get two() {
                    return ++this.one;
                }
                static set two(next) { }
            }
            __decorate([
                $mol_memo.field
            ], Foo, "two", null);
            $mol_assert_equal(Foo.two, 2);
            $mol_assert_equal(Foo.two, 2);
            Foo.two = 3;
            $mol_assert_equal(Foo.two, 3);
            $mol_assert_equal(Foo.two, 3);
        },
    });
})($ || ($ = {}));
//mol/memo/memo.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'Primitives'() {
            $mol_assert_equal($mol_key(null), 'null');
            $mol_assert_equal($mol_key(false), 'false');
            $mol_assert_equal($mol_key(true), 'true');
            $mol_assert_equal($mol_key(0), '0');
            $mol_assert_equal($mol_key(''), '""');
        },
        'Array & POJO'() {
            $mol_assert_equal($mol_key([null]), '[null]');
            $mol_assert_equal($mol_key({ foo: 0 }), '{"foo":0}');
            $mol_assert_equal($mol_key({ foo: [false] }), '{"foo":[false]}');
        },
        'Function'() {
            const func = () => { };
            $mol_assert_equal($mol_key(func), $mol_key(func));
            $mol_assert_unique($mol_key(func), $mol_key(() => { }));
        },
        'Objects'() {
            class User {
            }
            const jin = new User();
            $mol_assert_equal($mol_key(jin), $mol_key(jin));
            $mol_assert_unique($mol_key(jin), $mol_key(new User()));
        },
        'Elements'() {
            const foo = $mol_jsx("div", null, "bar");
            $mol_assert_equal($mol_key(foo), $mol_key(foo));
            $mol_assert_unique($mol_key(foo), $mol_key($mol_jsx("div", null, "bar")));
        },
        'Custom JSON representation'() {
            class User {
                name;
                age;
                constructor(name, age) {
                    this.name = name;
                    this.age = age;
                }
                toJSON() { return { name: this.name }; }
            }
            $mol_assert_equal($mol_key(new User('jin', 18)), '{"name":"jin"}');
        },
        'Special native classes'() {
            $mol_assert_equal($mol_key(new Date('xyz')), 'null');
            $mol_assert_equal($mol_key(new Date('2001-01-02T03:04:05.678Z')), '"2001-01-02T03:04:05.678Z"');
            $mol_assert_equal($mol_key(/./), '"/./"');
            $mol_assert_equal($mol_key(/\./gimsu), '"/\\\\./gimsu"');
        },
    });
})($ || ($ = {}));
//mol/key/key.test.tsx
;
"use strict";
//mol/type/foot/foot.test.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_log extends $mol_object2 {
        static watch(task) {
            return task;
        }
        static track(fiber) {
            const prev = $mol_wire_probe(() => this.track(fiber));
            let next;
            try {
                next = fiber.sync();
            }
            finally {
                for (const pub of fiber.pub_list) {
                    if (pub instanceof $mol_wire_fiber) {
                        this.track(pub);
                    }
                }
            }
            if (fiber.host === this)
                return next;
            if ($mol_compare_deep(prev, next)) {
                this.$.$mol_log3_rise({
                    message: '💧 Same',
                    place: fiber,
                });
            }
            else if (prev !== undefined) {
                this.$.$mol_log3_rise({
                    message: '🔥 Next',
                    place: fiber,
                    prev,
                });
            }
            return next;
        }
        static active() {
            try {
                this.watch()?.();
            }
            catch (error) {
                $mol_fail_log(error);
            }
            finally {
                for (const pub of $mol_wire_auto().pub_list) {
                    if (pub instanceof $mol_wire_fiber) {
                        this.track(pub);
                    }
                }
            }
        }
    }
    __decorate([
        $mol_mem
    ], $mol_wire_log, "watch", null);
    __decorate([
        $mol_mem_key
    ], $mol_wire_log, "track", null);
    __decorate([
        $mol_mem
    ], $mol_wire_log, "active", null);
    $.$mol_wire_log = $mol_wire_log;
})($ || ($ = {}));
//mol/wire/log/log.ts
;
"use strict";
var $;
(function ($) {
    $mol_wire_log.active();
})($ || ($ = {}));
//mol/wire/atom/atom.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'const returns stored value'() {
            const foo = { bar: $mol_const(Math.random()) };
            $mol_assert_equal(foo.bar(), foo.bar());
            $mol_assert_equal(foo.bar(), foo.bar['()']);
        },
    });
})($ || ($ = {}));
//mol/const/const.test.ts
;
"use strict";
//mol/type/keys/extract/extract.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        'id auto generation'($) {
            class $mol_view_test_item extends $mol_view {
            }
            class $mol_view_test_block extends $mol_view {
                static $ = $;
                element(id) {
                    return new $mol_view_test_item();
                }
            }
            __decorate([
                $mol_mem_key
            ], $mol_view_test_block.prototype, "element", null);
            var x = $mol_view_test_block.Root(0);
            $mol_assert_equal(x.dom_node().id, '$mol_view_test_block.Root(0)');
            $mol_assert_equal(x.element(0).dom_node().id, '$mol_view_test_block.Root(0).element(0)');
        },
        'caching ref to dom node'($) {
            var x = new class extends $mol_view {
            };
            x.$ = $;
            $mol_assert_equal(x.dom_node(), x.dom_node());
        },
        'content render'($) {
            class $mol_view_test extends $mol_view {
                sub() {
                    return ['lol', 5];
                }
            }
            var x = new $mol_view_test();
            x.$ = $;
            var node = x.dom_tree();
            $mol_assert_equal(node.innerHTML, 'lol5');
        },
        'bem attributes generation'($) {
            class $mol_view_test_item extends $mol_view {
            }
            class $mol_view_test_block extends $mol_view {
                Element(id) {
                    return new $mol_view_test_item();
                }
            }
            __decorate([
                $mol_mem_key
            ], $mol_view_test_block.prototype, "Element", null);
            var x = new $mol_view_test_block();
            x.$ = $;
            $mol_assert_equal(x.dom_node().getAttribute('mol_view_test_block'), '');
            $mol_assert_equal(x.dom_node().getAttribute('mol_view'), '');
            $mol_assert_equal(x.Element(0).dom_node().getAttribute('mol_view_test_block_element'), '');
            $mol_assert_equal(x.Element(0).dom_node().getAttribute('mol_view_test_item'), '');
            $mol_assert_equal(x.Element(0).dom_node().getAttribute('mol_view'), '');
        },
        'render custom attributes'($) {
            class $mol_view_test extends $mol_view {
                attr() {
                    return {
                        'href': '#haha',
                        'required': true,
                        'hidden': false,
                    };
                }
            }
            var x = new $mol_view_test();
            x.$ = $;
            var node = x.dom_tree();
            $mol_assert_equal(node.getAttribute('href'), '#haha');
            $mol_assert_equal(node.getAttribute('required'), 'true');
            $mol_assert_equal(node.getAttribute('hidden'), null);
        },
        'render custom fields'($) {
            class $mol_view_test extends $mol_view {
                field() {
                    return {
                        'hidden': true
                    };
                }
            }
            var x = new $mol_view_test();
            x.$ = $;
            var node = x.dom_tree();
            $mol_assert_equal(node.hidden, true);
        },
        'attach event handlers'($) {
            var clicked = false;
            class $mol_view_test extends $mol_view {
                event() {
                    return {
                        'click': (next) => this.event_click(next)
                    };
                }
                event_click(next) {
                    clicked = true;
                }
            }
            var x = new $mol_view_test();
            x.$ = $;
            var node = x.dom_node();
            node.click();
            $mol_assert_ok(clicked);
        },
    });
})($ || ($ = {}));
//mol/view/view/view.test.ts
;
"use strict";
var $;
(function ($) {
    class $mol_view_tree_test_simple extends $mol_view {
        some() {
            return 1;
        }
        bool() {
            return true;
        }
        str() {
            return "test";
        }
        arr() {
            return [];
        }
        arr_string() {
            return [];
        }
    }
    $.$mol_view_tree_test_simple = $mol_view_tree_test_simple;
})($ || ($ = {}));
//mol/view/tree/test/-view.tree/simple.test.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_view_tree_test_binding extends $mol_view {
        value(val) {
            return this.task_title_new(val);
        }
        enabled() {
            return this.head_complete_enabled();
        }
        task_title_new(val) {
            if (val !== undefined)
                return val;
            return "123";
        }
        head_complete_enabled() {
            return false;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view_tree_test_binding.prototype, "task_title_new", null);
    $.$mol_view_tree_test_binding = $mol_view_tree_test_binding;
})($ || ($ = {}));
//mol/view/tree/test/-view.tree/binding.test.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_view_tree_test_attributes_super extends $mol_view {
        some() {
            return {
                a: 0,
                b: 2
            };
        }
    }
    $.$mol_view_tree_test_attributes_super = $mol_view_tree_test_attributes_super;
    class $mol_view_tree_test_attributes extends $mol_view_tree_test_attributes_super {
        some() {
            return {
                ...super.some(),
                a: 1
            };
        }
    }
    $.$mol_view_tree_test_attributes = $mol_view_tree_test_attributes;
})($ || ($ = {}));
//mol/view/tree/test/-view.tree/attributes.test.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_view_tree_test_attributes_subcomponent extends $mol_view {
        Page(id) {
            const obj = new this.$.$mol_view_tree_test_attributes_subcomponent_page();
            obj.Sub = () => this.page(id);
            return obj;
        }
        page(id) {
            return null;
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_view_tree_test_attributes_subcomponent.prototype, "Page", null);
    $.$mol_view_tree_test_attributes_subcomponent = $mol_view_tree_test_attributes_subcomponent;
    class $mol_view_tree_test_attributes_subcomponent_page extends $mol_view {
        Sub() {
            return null;
        }
    }
    $.$mol_view_tree_test_attributes_subcomponent_page = $mol_view_tree_test_attributes_subcomponent_page;
})($ || ($ = {}));
//mol/view/tree/test/-view.tree/subcomponent.test.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_view_tree_test_binding_right extends $mol_view {
        outer_width(v) {
            return this.Test().width(v);
        }
        Test() {
            const obj = new this.$.$mol_view_tree_test_binding_right_test();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view_tree_test_binding_right.prototype, "Test", null);
    $.$mol_view_tree_test_binding_right = $mol_view_tree_test_binding_right;
    class $mol_view_tree_test_binding_right_test extends $mol_view {
        width(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view_tree_test_binding_right_test.prototype, "width", null);
    $.$mol_view_tree_test_binding_right_test = $mol_view_tree_test_binding_right_test;
})($ || ($ = {}));
//mol/view/tree/test/-view.tree/binding_right.test.view.tree.ts
;
"use strict";
var $;
(function ($_1) {
    var $$;
    (function ($$) {
        $mol_test({
            'simple props'($) {
                const app = $mol_view_tree_test_simple.make({ $ });
                $mol_assert_equal(app.some(), 1);
                $mol_assert_equal(app.bool(), true);
                $mol_assert_equal(app.str(), 'test');
                $mol_assert_ok(Array.isArray(app.arr()));
                $mol_assert_ok(Array.isArray(app.arr_string()));
            },
            'default value'($) {
                const app = $mol_view_tree_test_binding.make({ $ });
                $mol_assert_equal(app.value(), '123');
            },
            'both binding'($) {
                const app = $mol_view_tree_test_binding.make({ $ });
                $mol_assert_ok(app.value() !== '1');
                app.value('1');
                $mol_assert_equal(app.value(), '1');
            },
            'left binding'($) {
                const app = $mol_view_tree_test_binding.make({ $ });
                $mol_assert_not(app.head_complete_enabled());
                $mol_assert_not(app.enabled());
            },
            'sub component'($) {
                const app = $mol_view_tree_test_binding_right.make({ $ });
                $mol_assert_ok(app.Test() instanceof $mol_view_tree_test_binding_right_test);
            },
            'right binding - change owner property'($) {
                const app = $mol_view_tree_test_binding_right.make({ $ });
                const val = 123;
                $mol_assert_ok(app.outer_width() !== val);
                $mol_assert_ok(app.Test().width() !== val);
                app.outer_width(val);
                $mol_assert_equal(app.outer_width(), val);
                $mol_assert_equal(app.Test().width(), val);
            },
            'right binding - change part property'($) {
                const app = $mol_view_tree_test_binding_right.make({ $ });
                const val = 123;
                $mol_assert_ok(app.outer_width() !== val);
                $mol_assert_ok(app.Test().width() !== val);
                app.Test().width(val);
                $mol_assert_equal(app.Test().width(), val);
                $mol_assert_equal(app.outer_width(), val);
            },
            'attributes merging'($) {
                const app = $mol_view_tree_test_attributes.make({ $ });
                $mol_assert_like(app.some(), { a: 1, b: 2 });
            },
            'subcomponent indexed'($) {
                const app = $mol_view_tree_test_attributes_subcomponent.make({ $ });
                const val = 123;
                app.page = (index) => index;
                $mol_assert_equal(app.Page(val).Sub(), val);
            },
        });
    })($$ = $_1.$$ || ($_1.$$ = {}));
})($ || ($ = {}));
//mol/view/tree/test/tree.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        'span for same uri'($) {
            const span = new $mol_span('test.ts', '', 1, 3, 4);
            const child = span.span(4, 5, 8);
            $mol_assert_equal(child.uri, 'test.ts');
            $mol_assert_equal(child.row, 4);
            $mol_assert_equal(child.col, 5);
            $mol_assert_equal(child.length, 8);
        },
        'span after of given position'($) {
            const span = new $mol_span('test.ts', '', 1, 3, 4);
            const child = span.after(11);
            $mol_assert_equal(child.uri, 'test.ts');
            $mol_assert_equal(child.row, 1);
            $mol_assert_equal(child.col, 7);
            $mol_assert_equal(child.length, 11);
        },
        'slice span - regular'($) {
            const span = new $mol_span('test.ts', '', 1, 3, 5);
            const child = span.slice(1, 4);
            $mol_assert_equal(child.row, 1);
            $mol_assert_equal(child.col, 4);
            $mol_assert_equal(child.length, 3);
            const child2 = span.slice(2, 2);
            $mol_assert_equal(child2.col, 5);
            $mol_assert_equal(child2.length, 0);
        },
        'slice span - negative'($) {
            const span = new $mol_span('test.ts', '', 1, 3, 5);
            const child = span.slice(-3, -1);
            $mol_assert_equal(child.row, 1);
            $mol_assert_equal(child.col, 5);
            $mol_assert_equal(child.length, 2);
        },
        'slice span - out of range'($) {
            const span = new $mol_span('test.ts', '', 1, 3, 5);
            $mol_assert_fail(() => span.slice(-1, 3));
            $mol_assert_fail(() => span.slice(1, 6));
            $mol_assert_fail(() => span.slice(1, 10));
        },
        'error handling'($) {
            const span = new $mol_span('test.ts', '', 1, 3, 4);
            const error = span.error('Some error\n');
            $mol_assert_equal(error.message, 'Some error\ntest.ts#1:3/4');
        }
    });
})($ || ($ = {}));
//mol/span/span.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        'inserting'($) {
            $mol_assert_equal($.$mol_tree2_from_string('a b c d\n')
                .insert($mol_tree2.struct('x'), 'a', 'b', 'c')
                .toString(), 'a b x\n');
            $mol_assert_equal($.$mol_tree2_from_string('a b\n')
                .insert($mol_tree2.struct('x'), 'a', 'b', 'c', 'd')
                .toString(), 'a b c x\n');
            $mol_assert_equal($.$mol_tree2_from_string('a b c d\n')
                .insert($mol_tree2.struct('x'), 0, 0, 0)
                .toString(), 'a b x\n');
            $mol_assert_equal($.$mol_tree2_from_string('a b\n')
                .insert($mol_tree2.struct('x'), 0, 0, 0, 0)
                .toString(), 'a b \\\n\tx\n');
            $mol_assert_equal($.$mol_tree2_from_string('a b c d\n')
                .insert($mol_tree2.struct('x'), null, null, null)
                .toString(), 'a b x\n');
            $mol_assert_equal($.$mol_tree2_from_string('a b\n')
                .insert($mol_tree2.struct('x'), null, null, null, null)
                .toString(), 'a b \\\n\tx\n');
        },
        'deleting'($) {
            $mol_assert_equal($.$mol_tree2_from_string('a b c d\n')
                .insert(null, 'a', 'b', 'c')
                .toString(), 'a b\n');
            $mol_assert_equal($.$mol_tree2_from_string('a b c d\n')
                .insert(null, 0, 0, 0)
                .toString(), 'a b\n');
        },
        'hack'($) {
            const res = $.$mol_tree2_from_string(`foo bar xxx\n`)
                .hack({
                'bar': (input, belt) => [input.struct('777', input.hack(belt))],
            });
            $mol_assert_equal(res.toString(), 'foo 777 xxx\n');
        },
    });
})($ || ($ = {}));
//mol/tree2/tree2.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        'tree parsing'($) {
            $mol_assert_equal($.$mol_tree2_from_string("foo\nbar\n").kids.length, 2);
            $mol_assert_equal($.$mol_tree2_from_string("foo\nbar\n").kids[1].type, "bar");
            $mol_assert_equal($.$mol_tree2_from_string("foo\n\n\n").kids.length, 1);
            $mol_assert_equal($.$mol_tree2_from_string("=foo\n\\bar\n").kids.length, 2);
            $mol_assert_equal($.$mol_tree2_from_string("=foo\n\\bar\n").kids[1].value, "bar");
            $mol_assert_equal($.$mol_tree2_from_string("foo bar \\pol\n").kids[0].kids[0].kids[0].value, "pol");
            $mol_assert_equal($.$mol_tree2_from_string("foo bar\n\t\\pol\n\t\\men\n").kids[0].kids[0].kids[1].value, "men");
            $mol_assert_equal($.$mol_tree2_from_string('foo bar \\text\n').toString(), 'foo bar \\text\n');
        },
        'Too many tabs'($) {
            const tree = `
				foo
						bar
			`;
            $mol_assert_fail(() => {
                $.$mol_tree2_from_string(tree, 'test');
            }, 'Too many tabs\ntest#3:1/6\n!!!!!!\n\t\t\t\t\t\tbar');
        },
        'Too few tabs'($) {
            const tree = `
					foo
				bar
			`;
            $mol_assert_fail(() => {
                $.$mol_tree2_from_string(tree, 'test');
            }, 'Too few tabs\ntest#3:1/4\n!!!!\n\t\t\t\tbar');
        },
        'Wrong nodes separator at start'($) {
            const tree = `foo\n \tbar\n`;
            $mol_assert_fail(() => {
                $.$mol_tree2_from_string(tree, 'test');
            }, 'Wrong nodes separator\ntest#2:1/2\n!!\n \tbar');
        },
        'Wrong nodes separator in the middle'($) {
            const tree = `foo  bar\n`;
            $mol_assert_fail(() => {
                $.$mol_tree2_from_string(tree, 'test');
            }, 'Wrong nodes separator\ntest#1:5/1\n    !\nfoo  bar');
        },
        'Unexpected EOF, LF required'($) {
            const tree = `	foo`;
            $mol_assert_fail(() => {
                $.$mol_tree2_from_string(tree, 'test');
            }, 'Unexpected EOF, LF required\ntest#1:5/1\n	   !\n	foo');
        },
        'Errors skip and collect'($) {
            const tree = `foo  bar`;
            const errors = [];
            const $$ = $.$mol_ambient({
                $mol_fail: (error) => {
                    errors.push(error.message);
                    return null;
                }
            });
            const res = $$.$mol_tree2_from_string(tree, 'test');
            $mol_assert_like(errors, [
                'Wrong nodes separator\ntest#1:5/1\n    !\nfoo  bar',
                'Unexpected EOF, LF required\ntest#1:9/1\n        !\nfoo  bar',
            ]);
            $mol_assert_equal(res.toString(), 'foo bar\n');
        },
    });
})($ || ($ = {}));
//mol/tree2/from/string/string.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'fromJSON'() {
            $mol_assert_equal($mol_tree2_from_json([]).toString(), '/\n');
            $mol_assert_equal($mol_tree2_from_json([false, true]).toString(), '/\n\tfalse\n\ttrue\n');
            $mol_assert_equal($mol_tree2_from_json([0, 1, 2.3]).toString(), '/\n\t0\n\t1\n\t2.3\n');
            $mol_assert_equal($mol_tree2_from_json(new Uint16Array([1, 10, 256])).toString(), '\\\x01\x00\n\\\x00\x00\x01\n');
            $mol_assert_equal($mol_tree2_from_json(['', 'foo', 'bar\nbaz']).toString(), '/\n\t\\\n\t\\foo\n\t\\\n\t\t\\bar\n\t\t\\baz\n');
            $mol_assert_equal($mol_tree2_from_json({ 'foo': false, 'bar\nbaz': 'lol' }).toString(), '*\n\tfoo false\n\t\\\n\t\t\\bar\n\t\t\\baz\n\t\t\\lol\n');
        },
    });
})($ || ($ = {}));
//mol/tree2/from/json/json.test.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_tree_convert = Symbol('$mol_tree_convert');
    class $mol_tree extends $mol_object2 {
        type;
        data;
        sub;
        baseUri;
        row;
        col;
        length;
        constructor(config = {}) {
            super();
            this.type = config.type || '';
            if (config.value !== undefined) {
                var sub = $mol_tree.values(config.value);
                if (config.type || sub.length > 1) {
                    this.sub = [...sub, ...(config.sub || [])];
                    this.data = config.data || '';
                }
                else {
                    this.data = sub[0].data;
                    this.sub = config.sub || [];
                }
            }
            else {
                this.data = config.data || '';
                this.sub = config.sub || [];
            }
            this.baseUri = config.baseUri || '';
            this.row = config.row || 0;
            this.col = config.col || 0;
            this.length = config.length || 0;
        }
        static values(str, baseUri) {
            return str.split('\n').map((data, index) => new $mol_tree({
                data: data,
                baseUri: baseUri,
                row: index + 1,
                length: data.length,
            }));
        }
        clone(config = {}) {
            return new $mol_tree({
                type: ('type' in config) ? config.type : this.type,
                data: ('data' in config) ? config.data : this.data,
                sub: ('sub' in config) ? config.sub : this.sub,
                baseUri: ('baseUri' in config) ? config.baseUri : this.baseUri,
                row: ('row' in config) ? config.row : this.row,
                col: ('col' in config) ? config.col : this.col,
                length: ('length' in config) ? config.length : this.length,
                value: config.value
            });
        }
        make(config) {
            return new $mol_tree({
                baseUri: this.baseUri,
                row: this.row,
                col: this.col,
                length: this.length,
                ...config,
            });
        }
        make_data(value, sub) {
            return this.make({ value, sub });
        }
        make_struct(type, sub) {
            return this.make({ type, sub });
        }
        static fromString(str, baseUri) {
            var root = new $mol_tree({ baseUri: baseUri });
            var stack = [root];
            var row = 0;
            var prefix = str.replace(/^\n?(\t*)[\s\S]*/, '$1');
            var lines = str.replace(new RegExp('^\\t{0,' + prefix.length + '}', 'mg'), '').split('\n');
            lines.forEach(line => {
                ++row;
                var chunks = /^(\t*)((?:[^\n\t\\ ]+ *)*)(\\[^\n]*)?(.*?)(?:$|\n)/m.exec(line);
                if (!chunks || chunks[4])
                    return this.$.$mol_fail(new Error(`Syntax error at ${baseUri}:${row}\n${line}`));
                var indent = chunks[1];
                var path = chunks[2];
                var data = chunks[3];
                var deep = indent.length;
                var types = path ? path.replace(/ $/, '').split(/ +/) : [];
                if (stack.length <= deep)
                    return this.$.$mol_fail(new Error(`Too many tabs at ${baseUri}:${row}\n${line}`));
                stack.length = deep + 1;
                var parent = stack[deep];
                let col = deep;
                types.forEach(type => {
                    if (!type)
                        return this.$.$mol_fail(new Error(`Unexpected space symbol ${baseUri}:${row}\n${line}`));
                    var next = new $mol_tree({ type, baseUri, row, col, length: type.length });
                    const parent_sub = parent.sub;
                    parent_sub.push(next);
                    parent = next;
                    col += type.length + 1;
                });
                if (data) {
                    var next = new $mol_tree({ data: data.substring(1), baseUri, row, col, length: data.length });
                    const parent_sub = parent.sub;
                    parent_sub.push(next);
                    parent = next;
                }
                stack.push(parent);
            });
            return root;
        }
        static fromJSON(json, baseUri = '') {
            switch (true) {
                case typeof json === 'boolean':
                case typeof json === 'number':
                case json === null:
                    return new $mol_tree({
                        type: String(json),
                        baseUri: baseUri
                    });
                case typeof json === 'string':
                    return new $mol_tree({
                        value: json,
                        baseUri: baseUri
                    });
                case Array.isArray(json):
                    return new $mol_tree({
                        type: "/",
                        sub: json.map(json => $mol_tree.fromJSON(json, baseUri))
                    });
                case json instanceof Date:
                    return new $mol_tree({
                        value: json.toISOString(),
                        baseUri: baseUri
                    });
                default:
                    if (typeof json[$.$mol_tree_convert] === 'function') {
                        return json[$.$mol_tree_convert]();
                    }
                    if (typeof json.toJSON === 'function') {
                        return $mol_tree.fromJSON(json.toJSON());
                    }
                    if (json instanceof Error) {
                        const { name, message, stack } = json;
                        json = { ...json, name, message, stack };
                    }
                    var sub = [];
                    for (var key in json) {
                        if (json[key] === undefined)
                            continue;
                        const subsub = $mol_tree.fromJSON(json[key], baseUri);
                        if (/^[^\n\t\\ ]+$/.test(key)) {
                            var child = new $mol_tree({
                                type: key,
                                baseUri: baseUri,
                                sub: [subsub],
                            });
                        }
                        else {
                            var child = new $mol_tree({
                                value: key,
                                baseUri: baseUri,
                                sub: [subsub],
                            });
                        }
                        sub.push(child);
                    }
                    return new $mol_tree({
                        type: "*",
                        sub: sub,
                        baseUri: baseUri
                    });
            }
        }
        get uri() {
            return this.baseUri + '#' + this.row + ':' + this.col;
        }
        toString(prefix = '') {
            var output = '';
            if (this.type.length) {
                if (!prefix.length) {
                    prefix = "\t";
                }
                output += this.type;
                if (this.sub.length == 1) {
                    return output + ' ' + this.sub[0].toString(prefix);
                }
                output += "\n";
            }
            else if (this.data.length || prefix.length) {
                output += "\\" + this.data + "\n";
            }
            for (var child of this.sub) {
                output += prefix;
                output += child.toString(prefix + "\t");
            }
            return output;
        }
        toJSON() {
            if (!this.type)
                return this.value;
            if (this.type === 'true')
                return true;
            if (this.type === 'false')
                return false;
            if (this.type === 'null')
                return null;
            if (this.type === '*') {
                var obj = {};
                for (var child of this.sub) {
                    if (child.type === '-')
                        continue;
                    var key = child.type || child.clone({ sub: child.sub.slice(0, child.sub.length - 1) }).value;
                    var val = child.sub[child.sub.length - 1].toJSON();
                    if (val !== undefined)
                        obj[key] = val;
                }
                return obj;
            }
            if (this.type === '/') {
                var res = [];
                this.sub.forEach(child => {
                    if (child.type === '-')
                        return;
                    var val = child.toJSON();
                    if (val !== undefined)
                        res.push(val);
                });
                return res;
            }
            if (this.type === 'time') {
                return new Date(this.value);
            }
            const numb = Number(this.type);
            if (!Number.isNaN(numb) || this.type === 'NaN')
                return numb;
            throw new Error(`Unknown type (${this.type}) at ${this.uri}`);
        }
        get value() {
            var values = [];
            for (var child of this.sub) {
                if (child.type)
                    continue;
                values.push(child.value);
            }
            return this.data + values.join("\n");
        }
        insert(value, ...path) {
            if (path.length === 0)
                return value;
            const type = path[0];
            if (typeof type === 'string') {
                let replaced = false;
                const sub = this.sub.map((item, index) => {
                    if (item.type !== type)
                        return item;
                    replaced = true;
                    return item.insert(value, ...path.slice(1));
                });
                if (!replaced)
                    sub.push(new $mol_tree({ type }).insert(value, ...path.slice(1)));
                return this.clone({ sub });
            }
            else if (typeof type === 'number') {
                const sub = this.sub.slice();
                sub[type] = (sub[type] || new $mol_tree).insert(value, ...path.slice(1));
                return this.clone({ sub });
            }
            else {
                return this.clone({ sub: ((this.sub.length === 0) ? [new $mol_tree()] : this.sub).map(item => item.insert(value, ...path.slice(1))) });
            }
        }
        select(...path) {
            var next = [this];
            for (var type of path) {
                if (!next.length)
                    break;
                var prev = next;
                next = [];
                for (var item of prev) {
                    switch (typeof (type)) {
                        case 'string':
                            for (var child of item.sub) {
                                if (!type || (child.type == type)) {
                                    next.push(child);
                                }
                            }
                            break;
                        case 'number':
                            if (type < item.sub.length)
                                next.push(item.sub[type]);
                            break;
                        default: next.push(...item.sub);
                    }
                }
            }
            return new $mol_tree({ sub: next });
        }
        filter(path, value) {
            var sub = this.sub.filter(function (item) {
                var found = item.select(...path);
                if (value == null) {
                    return Boolean(found.sub.length);
                }
                else {
                    return found.sub.some(child => child.value == value);
                }
            });
            return new $mol_tree({ sub: sub });
        }
        transform(visit, stack = []) {
            const sub_stack = [this, ...stack];
            return visit(sub_stack, () => this.sub.map(node => node.transform(visit, sub_stack)).filter(n => n));
        }
        hack(context) {
            const sub = [].concat(...this.sub.map(child => {
                const handle = context[child.type] || context[''];
                if (!handle)
                    $mol_fail(child.error('Handler not defined'));
                return handle(child, context);
            }));
            return this.clone({ sub });
        }
        error(message) {
            return new Error(`${message}:\n${this} ${this.baseUri}:${this.row}:${this.col}`);
        }
    }
    $.$mol_tree = $mol_tree;
})($ || ($ = {}));
//mol/tree/tree.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        'tree parsing'() {
            $mol_assert_equal($mol_tree.fromString("foo\nbar\n").sub.length, 2);
            $mol_assert_equal($mol_tree.fromString("foo\nbar\n").sub[1].type, "bar");
            $mol_assert_equal($mol_tree.fromString("foo\n\n\n").sub.length, 1);
            $mol_assert_equal($mol_tree.fromString("=foo\n\\bar\n").sub.length, 2);
            $mol_assert_equal($mol_tree.fromString("=foo\n\\bar\n").sub[1].data, "bar");
            $mol_assert_equal($mol_tree.fromString("foo bar \\pol").sub[0].sub[0].sub[0].data, "pol");
            $mol_assert_equal($mol_tree.fromString("foo bar\n\t\\pol\n\t\\men").sub[0].sub[0].sub[1].data, "men");
            $mol_assert_equal($mol_tree.fromString('foo bar \\text\n').toString(), 'foo bar \\text\n');
        },
        'inserting'() {
            $mol_assert_equal($mol_tree.fromString('a b c d').insert(new $mol_tree, 'a', 'b', 'c').toString(), 'a b \\\n');
            $mol_assert_equal($mol_tree.fromString('a b').insert(new $mol_tree, 'a', 'b', 'c', 'd').toString(), 'a b c \\\n');
            $mol_assert_equal($mol_tree.fromString('a b c d').insert(new $mol_tree, 0, 0, 0).toString(), 'a b \\\n');
            $mol_assert_equal($mol_tree.fromString('a b').insert(new $mol_tree, 0, 0, 0, 0).toString(), 'a b \\\n\t\\\n');
            $mol_assert_equal($mol_tree.fromString('a b c d').insert(new $mol_tree, null, null, null).toString(), 'a b \\\n');
            $mol_assert_equal($mol_tree.fromString('a b').insert(new $mol_tree, null, null, null, null).toString(), 'a b \\\n\t\\\n');
        },
        'fromJSON'() {
            $mol_assert_equal($mol_tree.fromJSON([]).toString(), '/\n');
            $mol_assert_equal($mol_tree.fromJSON([false, true]).toString(), '/\n\tfalse\n\ttrue\n');
            $mol_assert_equal($mol_tree.fromJSON([0, 1, 2.3]).toString(), '/\n\t0\n\t1\n\t2.3\n');
            $mol_assert_equal($mol_tree.fromJSON(['', 'foo', 'bar\nbaz']).toString(), '/\n\t\\\n\t\\foo\n\t\\\n\t\t\\bar\n\t\t\\baz\n');
            $mol_assert_equal($mol_tree.fromJSON({ 'foo': false, 'bar\nbaz': 'lol' }).toString(), '*\n\tfoo false\n\t\\\n\t\t\\bar\n\t\t\\baz\n\t\t\\lol\n');
        },
        'toJSON'() {
            $mol_assert_equal(JSON.stringify($mol_tree.fromString('/\n').sub[0]), '[]');
            $mol_assert_equal(JSON.stringify($mol_tree.fromString('/\n\tfalse\n\ttrue\n').sub[0]), '[false,true]');
            $mol_assert_equal(JSON.stringify($mol_tree.fromString('/\n\t0\n\t1\n\t2.3\n').sub[0]), '[0,1,2.3]');
            $mol_assert_equal(JSON.stringify($mol_tree.fromString('/\n\t\\\n\t\\foo\n\t\\\n\t\t\\bar\n\t\t\\baz\n').sub[0]), '["","foo","bar\\nbaz"]');
            $mol_assert_equal(JSON.stringify($mol_tree.fromString('*\n\tfoo false\n\t\\\n\t\t\\bar\n\t\t\\baz\n\t\t\\lol\n').sub[0]), '{"foo":false,"bar\\nbaz":"lol"}');
        },
        'hack'() {
            const res = $mol_tree.fromString(`foo bar xxx`).hack({
                '': (tree, context) => [tree.hack(context)],
                'bar': (tree, context) => [tree.hack(context).clone({ type: '777' })],
            });
            $mol_assert_equal(res.toString(), new $mol_tree({ type: 'foo 777 xxx' }).toString());
        },
        'errors handling'($) {
            const errors = [];
            class Tree extends $mol_tree {
                static $ = $.$mol_ambient({
                    $mol_fail: error => errors.push(error.message)
                });
            }
            Tree.fromString(`
				\t \tfoo
				bar \\data
			`, 'test');
            $mol_assert_like(errors, ['Syntax error at test:2\n \tfoo']);
        },
    });
})($ || ($ = {}));
//mol/tree/tree.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'local get set delete'() {
            var key = '$mol_state_local_test:' + Math.random();
            $mol_assert_equal($mol_state_local.value(key), null);
            $mol_state_local.value(key, 123);
            $mol_assert_equal($mol_state_local.value(key), 123);
            $mol_state_local.value(key, null);
            $mol_assert_equal($mol_state_local.value(key), null);
        },
    });
})($ || ($ = {}));
//mol/state/local/local.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test_mocks.push(context => {
        class $mol_state_local_mock extends $mol_state_local {
            static state = {};
            static value(key, next = this.state[key]) {
                return this.state[key] = (next || null);
            }
        }
        __decorate([
            $mol_mem_key
        ], $mol_state_local_mock, "value", null);
        context.$mol_state_local = $mol_state_local_mock;
    });
})($ || ($ = {}));
//mol/state/local/local.mock.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'decode utf8 string'() {
            const str = 'Hello, ΧΨΩЫ';
            const encoded = new Uint8Array([72, 101, 108, 108, 111, 44, 32, 206, 167, 206, 168, 206, 169, 208, 171]);
            $mol_assert_equal($mol_charset_decode(encoded), str);
            $mol_assert_equal($mol_charset_decode(encoded, 'utf8'), str);
        },
        'decode empty string'() {
            const encoded = new Uint8Array([]);
            $mol_assert_equal($mol_charset_decode(encoded), '');
        },
    });
})($ || ($ = {}));
//mol/charset/decode/decode.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'encode utf8 string'() {
            const str = 'Hello, ΧΨΩЫ';
            const encoded = new Uint8Array([72, 101, 108, 108, 111, 44, 32, 206, 167, 206, 168, 206, 169, 208, 171]);
            $mol_assert_like($mol_charset_encode(str), encoded);
        },
    });
})($ || ($ = {}));
//mol/charset/encode/encode.test.ts
;
"use strict";
var $;
(function ($) {
    class TestClass extends Uint8Array {
    }
    $mol_test({
        'Uint8Array vs itself'() {
            $mol_assert_ok($mol_compare_array(new Uint8Array, new Uint8Array));
            $mol_assert_ok($mol_compare_array(new Uint8Array([0]), new Uint8Array([0])));
            $mol_assert_not($mol_compare_array(new Uint8Array([0]), new Uint8Array([1])));
        },
        'Uint8Array vs subclassed array'() {
            $mol_assert_not($mol_compare_array(new Uint8Array, new TestClass));
        },
    });
})($ || ($ = {}));
//mol/compare/array/array.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test_mocks.push($ => {
        class $mol_locale_mock extends $mol_locale {
            lang(next = 'en') { return next; }
            static source(lang) {
                return {};
            }
        }
        __decorate([
            $mol_mem
        ], $mol_locale_mock.prototype, "lang", null);
        __decorate([
            $mol_mem_key
        ], $mol_locale_mock, "source", null);
        $.$mol_locale = $mol_locale_mock;
    });
})($ || ($ = {}));
//mol/locale/locale.test.ts
;
"use strict";
var $;
(function ($) {
    function $mol_view_tree_trim_remarks(def) {
        return def.transform(([node], sub) => (node.type === '-') ? null : node.clone({ sub: sub() }));
    }
    $.$mol_view_tree_trim_remarks = $mol_view_tree_trim_remarks;
    function $mol_view_tree_classes(defs) {
        return $mol_view_tree_trim_remarks(defs);
    }
    $.$mol_view_tree_classes = $mol_view_tree_classes;
    function $mol_view_tree_class_name(val) {
        return val.type;
    }
    $.$mol_view_tree_class_name = $mol_view_tree_class_name;
    function $mol_view_tree_super_name(val) {
        if (val.sub.length != 1)
            throw val.error('Wrong sub count');
        return val.sub[0].type;
    }
    $.$mol_view_tree_super_name = $mol_view_tree_super_name;
    function $mol_view_tree_class_props(def) {
        const props = {};
        const catch_prop = (prop, type = '') => {
            let def = prop;
            if (type === '=>') {
                if (prop.sub[0])
                    throw prop.error('Right binding can not have default value');
            }
            else {
                if (prop.sub.length === 0)
                    return;
                if (prop.sub[0].type === '-')
                    return;
                props[prop.type] = props[prop.type];
                def = prop.clone({
                    sub: [prop.sub[0].transform(([node, ...stack], sub) => {
                            if (['<=', '<=>', '=>'].indexOf(node.type) === -1)
                                return node.clone({ sub: sub() });
                            catch_prop(node.sub[0], node.type);
                            return node.clone({
                                sub: [node.sub[0].clone({
                                        sub: []
                                    })]
                            });
                        })]
                });
            }
            if (props[prop.type]) {
                if (props[prop.type].toString() !== def.toString()) {
                    throw def.error('Property already defined with another default value' + props[prop.type].error('').message + '\n---');
                }
            }
            else {
                props[prop.type] = def;
            }
        };
        def.sub[0].sub.map(sub => catch_prop(sub));
        return def.clone({
            type: '',
            sub: Object.keys(props).map(name => props[name]),
        });
    }
    $.$mol_view_tree_class_props = $mol_view_tree_class_props;
    function $mol_view_tree_prop_name(prop) {
        return (prop.type.match(/^\w+/) || [])[0] || '';
    }
    $.$mol_view_tree_prop_name = $mol_view_tree_prop_name;
    function $mol_view_tree_prop_key(prop) {
        return (prop.type.match(/!(\w+)$/) || [])[1] || '';
    }
    $.$mol_view_tree_prop_key = $mol_view_tree_prop_key;
    function $mol_view_tree_prop_next(prop) {
        return (prop.type.match(/\?(\w+)$/) || [])[1] || '';
    }
    $.$mol_view_tree_prop_next = $mol_view_tree_prop_next;
    function $mol_view_tree_prop_value(prop) {
        if (prop.sub.length != 1)
            throw prop.error(`Wrong sub count (${prop.sub.length})`);
        return prop.sub[0];
    }
    $.$mol_view_tree_prop_value = $mol_view_tree_prop_value;
    function $mol_view_tree_value_type(val) {
        switch (val.type) {
            case 'true': return 'bool';
            case 'false': return 'bool';
            case 'null': return 'null';
            case '*': return 'dict';
            case '@': return 'locale';
            case '': return 'string';
            case '<=': return 'get';
            case '<=>': return 'bind';
            case '=>': return 'put';
        }
        switch (val.type[0]) {
            case '/': return 'list';
            case '$': return 'object';
        }
        if (Number(val.type).toString() == val.type)
            return 'number';
        throw val.error('Wrong value');
    }
    $.$mol_view_tree_value_type = $mol_view_tree_value_type;
    function $mol_view_tree_compile(tree) {
        const splittedUri = tree.uri.split(/[#\\\/]/);
        splittedUri.pop();
        const fileName = splittedUri.pop();
        const SourceNode = (row, col, fileName, text) => text;
        var content = [];
        var locales = {};
        for (let def of $mol_view_tree_classes(tree).sub) {
            if (!/^\$\w+$/.test(def.type))
                throw def.error('Wrong component name');
            const parent = def.sub[0];
            const members = {};
            for (let param of $mol_view_tree_class_props(def).sub) {
                try {
                    var needSet = false;
                    var needCache = false;
                    if (param.type === '<=>') {
                        param = param.sub[0];
                    }
                    if (param.type === '<=') {
                        param = param.sub[0];
                    }
                    var propName = /(.*?)(?:\!(\w+))?(?:\?(\w+))?$/.exec(param.type);
                    if (propName[3]) {
                        needSet = true;
                        needCache = true;
                    }
                    const getValue = (value, definition) => {
                        try {
                            switch (true) {
                                case (value.type === ''):
                                    return [JSON.stringify(value.value)];
                                case (value.type === '@'):
                                    const key = `${def.type}_${param.type.replace(/[?!].*/, '')}`;
                                    locales[key] = value.value;
                                    return [`this.$.$mol_locale.text( ${JSON.stringify(key)} )`];
                                case (value.type === '-'):
                                    return null;
                                case (value.type[0] === '/'):
                                    const item_type = value.type.substring(1);
                                    var items = [];
                                    value.sub.forEach(item => {
                                        if (item.type === '-')
                                            return;
                                        if (item.type === '^') {
                                            items.push(`...super.${param.type}()`);
                                            return;
                                        }
                                        var val = getValue(item);
                                        if (val)
                                            items.push(val.join(""));
                                    });
                                    return [`[`, items.join(' , '), `]`, (item_type ? ` as ( ${item_type} )[]` : ` as any[]`)];
                                case (value.type[0] === '$'):
                                    if (!definition)
                                        throw value.error('Objects should be bound');
                                    needCache = true;
                                    const overs = [];
                                    value.sub.forEach(over => {
                                        if (/^[-\/]?$/.test(over.type))
                                            return '';
                                        var overName = /(.*?)(?:\!(\w+))?(?:\?(\w+))?$/.exec(over.type);
                                        var ns = needSet;
                                        if (over.sub[0].type === '=>') {
                                            if (over.sub[0].sub.length === 1) {
                                                const [, own_name, own_key, own_next] = /(.*?)(?:\!(\w+))?(?:\?(\w+))?$/.exec(over.sub[0].sub[0].type);
                                                let own_args = [];
                                                if (own_key)
                                                    own_args.push(` ${own_key} : any `);
                                                if (own_next)
                                                    own_args.push(` ${own_next}? : any `);
                                                let [, their_name, ...their_args] = /(.*?)(?:\!(\w+))?(?:\?(\w+))?$/.exec(over.type);
                                                their_args = their_args.filter(Boolean);
                                                members[own_name] = [`\t${own_name}(${own_args.join(',')}) {\n\t\treturn this.${propName[1]}(${propName[2] || ''}).${their_name}( ${their_args.join(' , ')} )\n\t}\n\n`];
                                                return;
                                            }
                                        }
                                        var v = getValue(over.sub[0]);
                                        let args = [];
                                        if (overName[2])
                                            args.push(` ${overName[2]} : any `);
                                        if (overName[3])
                                            args.push(` ${overName[3]}? : any `);
                                        overs.push(...['\t\t\tobj.', SourceNode(over.row, over.col, fileName, overName[1]), ' = (', args.join(','), ') => ', ...(v || []), '\n']);
                                        needSet = ns;
                                    });
                                    const object_args = value.select('/', '').sub.map(arg => getValue(arg)).join(' , ');
                                    return ['(( obj )=>{\n', ...overs, '\t\t\treturn obj\n\t\t})( new this.$.', SourceNode(value.row, value.col, fileName, value.type), '( ', object_args, ' ) )'];
                                case (value.type === '*'):
                                    const opts = [];
                                    for (const opt of value.sub) {
                                        if (opt.type === '-')
                                            continue;
                                        if (opt.type === '^') {
                                            opts.push(`\t\t\t...super.${param.type}() ,\n`);
                                            continue;
                                        }
                                        const key = /(.*?)(?:\?(\w+))?$/.exec(opt.type);
                                        const ns = needSet;
                                        const v = getValue(opt.sub[0]);
                                        const arg = key[2] ? ` ( ${key[2]}? : any )=> ` : '';
                                        opts.push(...[
                                            '\t\t\t"',
                                            SourceNode(opt.row, opt.col, fileName, key[1] + '" : '),
                                            arg,
                                            ' ',
                                            ...(v || []),
                                            ' ,\n'
                                        ]);
                                        needSet = ns;
                                    }
                                    return ['({\n', opts.join(''), '\t\t})'];
                                case (value.type === '<=>'):
                                    if (value.sub.length === 1) {
                                        var type = /(.*?)(?:\!(\w+))?(?:\?(\w+))$/.exec(value.sub[0].type);
                                        return ['this.' + type[1] + '(' + (type[2] ? type[2] + ' ,' : '') + ' ' + type[3] + ' )'];
                                    }
                                    break;
                                case (value.type === '<='):
                                    if (value.sub.length === 1) {
                                        var type = /(.*?)(?:\!(\w+))?(?:\?(\w+))?$/.exec(value.sub[0].type);
                                        return ['this.' + type[1] + '(' + (type[2] ? type[2] : '') + ')'];
                                    }
                                    break;
                            }
                            switch (value.type) {
                                case 'true':
                                case 'false':
                                    return [value.type];
                                case 'null':
                                    return ['null as any'];
                            }
                            if (Number(value.type).toString() == value.type)
                                return [value.type];
                            throw value.error('Wrong value');
                        }
                        catch (err) {
                            throw err;
                        }
                    };
                    if (param.sub.length > 1)
                        throw new Error('Too more sub');
                    param.sub.forEach(child => {
                        var val = getValue(child, true);
                        if (!val)
                            return;
                        var args = [];
                        if (propName[2])
                            args.push(` ${propName[2]} : any `);
                        if (propName[3])
                            args.push(` ${propName[3]}? : any , force? : $${''}mol_mem_force `);
                        if (needSet)
                            val = [
                                `( ${propName[3]} !== void 0 ) ? ${propName[3]} : `,
                                ...val
                            ];
                        val = ['return ', ...val];
                        let decl = ['\t', SourceNode(param.row, param.col, fileName, propName[1]), '(', args.join(','), ') {\n\t\t', ...val, '\n\t}\n\n'];
                        if (needCache) {
                            if (propName[2])
                                decl = ['\t@ $', 'mol_mem_key\n', ...decl];
                            else
                                decl = ['\t@ $', 'mol_mem\n', ...decl];
                        }
                        decl = ['\t/**\n\t *  ```\n', param.toString().trim().replace(/^/mg, '\t *  '), '\n\t *  ```\n\t **/\n', ...decl];
                        members[propName[1]] = decl;
                    });
                }
                catch (err) {
                    throw err;
                }
            }
            var body = Object.keys(members).reduce(function (acc, name) {
                const items = members[name] ? members[name] : ['\t', name, '() { return null as any }\n\t}\n'];
                return [...acc, ...items];
            }, []);
            var classes = ['namespace $ { export class ', SourceNode(def.row, def.col, fileName, def.type), ' extends ', SourceNode(parent.row, parent.col, fileName, parent.type), ' {\n\n', ...body, '} }\n'];
            content = [...content, ...classes];
        }
        return { script: content.join(''), locales };
    }
    $.$mol_view_tree_compile = $mol_view_tree_compile;
})($ || ($ = {}));
//mol/view/tree/tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_style_sheet_test1 extends $mol_view {
        Item() { return new $mol_view; }
    }
    $.$mol_style_sheet_test1 = $mol_style_sheet_test1;
    class $mol_style_sheet_test2 extends $mol_view {
        List() { return new $mol_style_sheet_test1; }
    }
    $.$mol_style_sheet_test2 = $mol_style_sheet_test2;
    $mol_test({
        'component block styles'() {
            class $mol_style_sheet_test extends $mol_view {
            }
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                display: 'block',
                zIndex: 1,
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\tdisplay: block;\n\tz-index: 1;\n}\n');
        },
        'various units'() {
            class $mol_style_sheet_test extends $mol_view {
            }
            const { px, per } = $mol_style_unit;
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                width: per(50),
                height: px(50),
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\twidth: 50%;\n\theight: 50px;\n}\n');
        },
        'various functions'() {
            class $mol_style_sheet_test extends $mol_view {
            }
            const { calc } = $mol_style_func;
            const { px, per } = $mol_style_unit;
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                width: calc(`${per(100)} - ${px(1)}`),
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\twidth: calc(100% - 1px);\n}\n');
        },
        'property groups'() {
            class $mol_style_sheet_test extends $mol_view {
            }
            const { px } = $mol_style_unit;
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                flex: {
                    grow: 5
                }
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\tflex-grow: 5;\n}\n');
        },
        'custom properties'() {
            class $mol_style_sheet_test extends $mol_view {
            }
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                '--isVariable': 'yes',
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\t--is-variable: yes;\n}\n');
        },
        'custom property groups'() {
            class $mol_style_sheet_test extends $mol_view {
            }
            const { px } = $mol_style_unit;
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                '--variable': {
                    test: px(5)
                }
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\t--variable-test: 5px;\n}\n');
        },
        'property shorthand'() {
            class $mol_style_sheet_test extends $mol_view {
            }
            const { px } = $mol_style_unit;
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                padding: [px(5), 'auto']
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\tpadding: 5px auto;\n}\n');
        },
        'sequenced values'() {
            class $mol_style_sheet_test extends $mol_view {
            }
            const { url } = $mol_style_func;
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                background: {
                    image: [[url('foo')], [url('bar')]],
                },
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\tbackground-image: url("foo"),url("bar");\n}\n');
        },
        'sequenced structs'() {
            class $mol_style_sheet_test extends $mol_view {
            }
            const { rem } = $mol_style_unit;
            const { hsla } = $mol_style_func;
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                box: {
                    shadow: [
                        {
                            inset: true,
                            x: 0,
                            y: 0,
                            blur: rem(.5),
                            spread: 0,
                            color: 'red',
                        },
                        {
                            inset: false,
                            x: 0,
                            y: 0,
                            blur: rem(.5),
                            spread: 0,
                            color: 'blue',
                        },
                    ],
                },
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\tbox-shadow: inset 0 0 0.5rem 0 red,0 0 0.5rem 0 blue;\n}\n');
        },
        'component block styles with pseudo class'() {
            class $mol_style_sheet_test extends $mol_view {
            }
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                ':focus': {
                    color: 'red',
                    display: 'block',
                },
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test]:focus {\n\tcolor: red;\n\tdisplay: block;\n}\n');
        },
        'component block styles with pseudo element'() {
            class $mol_style_sheet_test extends $mol_view {
            }
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                '::first-line': {
                    color: 'red',
                    display: 'block',
                },
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test]::first-line {\n\tcolor: red;\n\tdisplay: block;\n}\n');
        },
        'component block styles with media query'() {
            class $mol_style_sheet_test extends $mol_view {
            }
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                '@media': {
                    'print': {
                        color: 'red',
                        display: 'block',
                    },
                },
            });
            $mol_assert_equal(sheet, '@media print {\n[mol_style_sheet_test] {\n\tcolor: red;\n\tdisplay: block;\n}\n}\n');
        },
        'component block styles with attribute value'() {
            class $mol_style_sheet_test extends $mol_view {
                attr() {
                    return {
                        mol_theme: '$mol_theme_dark'
                    };
                }
            }
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                '@': {
                    mol_theme: {
                        '$mol_theme_dark': {
                            color: 'red',
                            display: 'block',
                        },
                    },
                },
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test]:where([mol_theme="$mol_theme_dark"]) {\n\tcolor: red;\n\tdisplay: block;\n}\n');
        },
        'component element styles'() {
            class $mol_style_sheet_test extends $mol_view {
                Item() { return new $mol_view; }
            }
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                Item: {
                    color: 'red',
                    display: 'block',
                },
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test_item] {\n\tcolor: red;\n\tdisplay: block;\n}\n');
        },
        'component element of element styles'() {
            const sheet = $mol_style_sheet($mol_style_sheet_test2, {
                List: {
                    Item: {
                        color: 'red',
                        display: 'block',
                    },
                },
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test2_list_item] {\n\tcolor: red;\n\tdisplay: block;\n}\n');
        },
        'component element styles with block attribute value'() {
            class $mol_style_sheet_test extends $mol_view {
                Item() { return new $mol_view; }
                attr() {
                    return {
                        mol_theme: '$mol_theme_dark'
                    };
                }
            }
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                '@': {
                    mol_theme: {
                        '$mol_theme_dark': {
                            Item: {
                                color: 'red',
                            },
                        },
                    },
                },
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test]:where([mol_theme="$mol_theme_dark"]) :where([mol_style_sheet_test_item]) {\n\tcolor: red;\n}\n');
        },
        'inner component styles by class'() {
            const sheet = $mol_style_sheet($mol_style_sheet_test2, {
                $mol_style_sheet_test1: {
                    color: 'red',
                    display: 'block',
                },
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test2] :where([mol_style_sheet_test1]) {\n\tcolor: red;\n\tdisplay: block;\n}\n');
        },
        'child component styles by class'() {
            const sheet = $mol_style_sheet($mol_style_sheet_test2, {
                '>': {
                    $mol_style_sheet_test1: {
                        color: 'red',
                        display: 'block',
                    },
                },
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test2] > :where([mol_style_sheet_test1]) {\n\tcolor: red;\n\tdisplay: block;\n}\n');
        },
    });
})($ || ($ = {}));
//mol/style/sheet/sheet.test.ts
;
"use strict";
var $;
(function ($_1) {
    var $$;
    (function ($$) {
        $mol_test({
            'handle clicks by default'($) {
                let clicked = false;
                const clicker = $mol_button.make({
                    $,
                    click: (event) => { clicked = true; },
                });
                const element = clicker.dom_tree();
                const event = $mol_dom_context.document.createEvent('mouseevent');
                event.initEvent('click', true, true);
                element.dispatchEvent(event);
                $mol_assert_ok(clicked);
            },
            'no handle clicks if disabled'($) {
                let clicked = false;
                const clicker = $mol_button.make({
                    $,
                    click: (event) => { clicked = true; },
                    enabled: () => false,
                });
                const element = clicker.dom_tree();
                const event = $mol_dom_context.document.createEvent('mouseevent');
                event.initEvent('click', true, true);
                element.dispatchEvent(event);
                $mol_assert_not(clicked);
            },
            'Store error'($) {
                const clicker = $mol_button.make({
                    $,
                    click: (event) => $.$mol_fail(new Error('Test error')),
                });
                const event = $mol_dom_context.document.createEvent('mouseevent');
                $mol_assert_fail(() => clicker.event_activate(event), 'Test error');
                $mol_assert_equal(clicker.status()[0].message, 'Test error');
            },
        });
    })($$ = $_1.$$ || ($_1.$$ = {}));
})($ || ($ = {}));
//mol/button/button.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'all cases of using maybe'() {
            $mol_assert_equal($mol_maybe(0)[0], 0);
            $mol_assert_equal($mol_maybe(false)[0], false);
            $mol_assert_equal($mol_maybe(null)[0], void 0);
            $mol_assert_equal($mol_maybe(void 0)[0], void 0);
            $mol_assert_equal($mol_maybe(void 0).map(v => v.toString())[0], void 0);
            $mol_assert_equal($mol_maybe(0).map(v => v.toString())[0], '0');
        },
    });
})($ || ($ = {}));
//mol/maybe/maybe.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'null by default'() {
            const key = String(Math.random());
            $mol_assert_equal($mol_state_session.value(key), null);
        },
        'storing'() {
            const key = String(Math.random());
            $mol_state_session.value(key, '$mol_state_session_test');
            $mol_assert_equal($mol_state_session.value(key), '$mol_state_session_test');
            $mol_state_session.value(key, null);
            $mol_assert_equal($mol_state_session.value(key), null);
        },
    });
})($ || ($ = {}));
//mol/state/session/session.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'default data'() {
            const store = new $mol_store({
                foo: 1,
                bar: 2,
            });
            $mol_assert_equal(store.data().foo, 1);
            $mol_assert_equal(store.data().bar, 2);
        },
        'get and set by shapshot'() {
            const store = new $mol_store({
                foo: 1,
                bar: 2,
            });
            $mol_assert_equal(store.snapshot(), '{"foo":1,"bar":2}');
            store.snapshot('{"foo":2,"bar":1}');
            $mol_assert_equal(store.data().foo, 2);
            $mol_assert_equal(store.data().bar, 1);
        },
        'get and set by key'() {
            const store = new $mol_store({
                foo: 1,
            });
            $mol_assert_equal(store.value('foo'), 1);
            store.value('foo', 2);
            $mol_assert_equal(store.value('foo'), 2);
        },
        'get and set by lens'() {
            const store = new $mol_store({
                foo: 1,
            });
            const lens = store.sub('foo');
            $mol_assert_equal(lens.data(), 1);
            lens.data(2);
            $mol_assert_equal(lens.data(), 2);
        },
        'views and actions'() {
            const Person = class extends $mol_store {
                get full_name() {
                    const name = this.value('name');
                    return name.first + ' ' + name.last;
                }
                swap_names() {
                    const name = this.value('name');
                    this.value('name', {
                        first: name.last,
                        last: name.first,
                    });
                }
            };
            const store = new Person({
                name: {
                    first: 'Foo',
                    last: 'Bar',
                },
            });
            $mol_assert_equal(store.full_name, 'Foo Bar');
            store.swap_names();
            $mol_assert_equal(store.full_name, 'Bar Foo');
        },
        'nested views and actions'() {
            class Person extends $mol_store {
                get full_name() {
                    const name = this.value('name');
                    return name.first + ' ' + name.last;
                }
                swap_names() {
                    const name = this.value('name');
                    this.value('name', {
                        first: name.last,
                        last: name.first,
                    });
                }
            }
            class Band extends $mol_store {
                get members() {
                    const lens = this.sub('members');
                    return new Proxy({}, {
                        get: (_, id) => lens.sub(id, new Person),
                    });
                }
            }
            const band = new Band({
                name: 'Dream Team',
                members: {
                    foo: {
                        name: {
                            first: 'Foo',
                            last: 'Bar',
                        },
                    }
                }
            });
            const person = band.members['foo'];
            $mol_assert_equal(person.full_name, 'Foo Bar');
            person.swap_names();
            $mol_assert_equal(band.data().members['foo'].name.first, 'Bar');
            $mol_assert_equal(band.data().members['foo'].name.last, 'Foo');
        },
    });
})($ || ($ = {}));
//mol/store/store.test.ts
;
"use strict";
//mol/type/merge/merge.test.ts
;
"use strict";
//mol/type/partial/undefined/undefined.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'config by value'() {
            const N = $mol_data_setup((a) => a, 5);
            $mol_assert_equal(N.config, 5);
        },
    });
})($ || ($ = {}));
//mol/data/setup/setup.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'equal paths'() {
            const diff = $mol_diff_path([1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]);
            $mol_assert_like(diff, {
                prefix: [1, 2, 3, 4],
                suffix: [[], [], []],
            });
        },
        'different suffix'() {
            const diff = $mol_diff_path([1, 2, 3, 4], [1, 2, 3, 5], [1, 2, 5, 4]);
            $mol_assert_like(diff, {
                prefix: [1, 2],
                suffix: [[3, 4], [3, 5], [5, 4]],
            });
        },
        'one contains other'() {
            const diff = $mol_diff_path([1, 2, 3, 4], [1, 2], [1, 2, 3]);
            $mol_assert_like(diff, {
                prefix: [1, 2],
                suffix: [[3, 4], [], [3]],
            });
        },
        'fully different'() {
            const diff = $mol_diff_path([1, 2], [3, 4], [5, 6]);
            $mol_assert_like(diff, {
                prefix: [],
                suffix: [[1, 2], [3, 4], [5, 6]],
            });
        },
    });
})($ || ($ = {}));
//mol/diff/path/path.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'Is number'() {
            $mol_data_number(0);
        },
        'Is not number'() {
            $mol_assert_fail(() => {
                $mol_data_number('x');
            }, 'x is not a number');
        },
        'Is object number'() {
            $mol_assert_fail(() => {
                $mol_data_number(new Number(''));
            }, '0 is not a number');
        },
    });
})($ || ($ = {}));
//mol/data/number/number.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'Is string'() {
            $mol_data_string('');
        },
        'Is not string'() {
            $mol_assert_fail(() => {
                $mol_data_string(0);
            }, '0 is not a string');
        },
        'Is object string'() {
            $mol_assert_fail(() => {
                $mol_data_string(new String('x'));
            }, 'x is not a string');
        },
    });
})($ || ($ = {}));
//mol/data/string/string.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'Fit to record'() {
            const User = $mol_data_record({ age: $mol_data_number });
            User({ age: 0 });
        },
        'Extends record'() {
            const User = $mol_data_record({ age: $mol_data_number });
            User({ age: 0, name: 'Jin' });
        },
        'Shrinks record'() {
            $mol_assert_fail(() => {
                const User = $mol_data_record({ age: $mol_data_number, name: $mol_data_string });
                User({ age: 0 });
            }, '["name"] undefined is not a string');
        },
        'Shrinks deep record'() {
            $mol_assert_fail(() => {
                const User = $mol_data_record({ wife: $mol_data_record({ age: $mol_data_number }) });
                User({ wife: {} });
            }, '["wife"] ["age"] undefined is not a number');
        },
    });
})($ || ($ = {}));
//mol/data/record/record.test.ts
;
"use strict";
var $;
(function ($) {
    const Age = $mol_data_optional($mol_data_number);
    const Age_or_zero = $mol_data_optional($mol_data_number, () => 0);
    $mol_test({
        'Is not present'() {
            $mol_assert_equal(Age(undefined), undefined);
        },
        'Is present'() {
            $mol_assert_equal(Age(0), 0);
        },
        'Fallbacked'() {
            $mol_assert_equal(Age_or_zero(undefined), 0);
        },
        'Is null'() {
            $mol_assert_fail(() => Age(null), 'null is not a number');
        },
    });
})($ || ($ = {}));
//mol/data/optional/optional.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'Is empty array'() {
            $mol_data_array($mol_data_number)([]);
        },
        'Is array'() {
            $mol_data_array($mol_data_number)([1, 2]);
        },
        'Is not array'() {
            $mol_assert_fail(() => {
                $mol_data_array($mol_data_number)({ [0]: 1, length: 1, map: () => { } });
            }, '[object Object] is not an array');
        },
        'Has wrong item'() {
            $mol_assert_fail(() => {
                $mol_data_array($mol_data_number)([1, '1']);
            }, '[1] 1 is not a number');
        },
        'Has wrong deep item'() {
            $mol_assert_fail(() => {
                $mol_data_array($mol_data_array($mol_data_number))([[], [0, 0, false]]);
            }, '[1] [2] false is not a number');
        },
    });
})($ || ($ = {}));
//mol/data/array/array.test.ts
;
"use strict";
//mol/type/intersect/intersect.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'escape'() {
            const specials = $mol_regexp.from('.*+?^${}()|[]\\');
            $mol_assert_equal(specials.source, '\\.\\*\\+\\?\\^\\$\\{\\}\\(\\)\\|\\[\\]\\\\');
        },
        'char code'() {
            const space = $mol_regexp.from(32);
            $mol_assert_like(' '.match(space), [' ']);
        },
        'repeat fixed'() {
            const { repeat, decimal_only: digit } = $mol_regexp;
            const year = repeat(digit, 4, 4);
            $mol_assert_like('#2020#'.match(year), ['2020']);
        },
        'greedy repeat'() {
            const { repeat, repeat_greedy, latin_only: letter } = $mol_regexp;
            $mol_assert_like('abc'.match(repeat(letter, 1, 2)), ['a', 'b', 'c']);
            $mol_assert_like('abc'.match(repeat_greedy(letter, 1, 2)), ['ab', 'c']);
        },
        'repeat range'() {
            const { repeat_greedy, decimal_only: digit } = $mol_regexp;
            const year = repeat_greedy(digit, 2, 4);
            $mol_assert_like('#2#'.match(year), null);
            $mol_assert_like('#20#'.match(year), ['20']);
            $mol_assert_like('#2020#'.match(year), ['2020']);
            $mol_assert_like('#20201#'.match(year), ['2020']);
        },
        'repeat from'() {
            const { repeat_greedy, latin_only: letter } = $mol_regexp;
            const name = repeat_greedy(letter, 2);
            $mol_assert_like('##'.match(name), null);
            $mol_assert_like('#a#'.match(name), null);
            $mol_assert_like('#ab#'.match(name), ['ab']);
            $mol_assert_like('#abc#'.match(name), ['abc']);
        },
        'from string'() {
            const regexp = $mol_regexp.from('[\\d]');
            $mol_assert_equal(regexp.source, '\\[\\\\d\\]');
            $mol_assert_equal(regexp.flags, 'gsu');
        },
        'from regexp'() {
            const regexp = $mol_regexp.from(/[\d]/i);
            $mol_assert_equal(regexp.source, '[\\d]');
            $mol_assert_equal(regexp.flags, 'i');
        },
        'split'() {
            const regexp = $mol_regexp.from(';');
            $mol_assert_like('aaa;bbb;ccc'.split(regexp), ['aaa', ';', 'bbb', ';', 'ccc']);
            $mol_assert_like('aaa;;ccc'.split(regexp), ['aaa', ';', '', ';', 'ccc']);
            $mol_assert_like('aaa'.split(regexp), ['aaa']);
            $mol_assert_like(''.split(regexp), ['']);
        },
        'test for matching'() {
            const regexp = $mol_regexp.from('foo');
            $mol_assert_like(regexp.test(''), false);
            $mol_assert_like(regexp.test('fo'), false);
            $mol_assert_like(regexp.test('foo'), true);
            $mol_assert_like(regexp.test('foobar'), true);
            $mol_assert_like(regexp.test('barfoo'), true);
        },
        'case ignoring'() {
            const xxx = $mol_regexp.from('x', { ignoreCase: true });
            $mol_assert_like(xxx.flags, 'gisu');
            $mol_assert_like(xxx.exec('xx')[0], 'x');
            $mol_assert_like(xxx.exec('XX')[0], 'X');
        },
        'multiline mode'() {
            const { end, from } = $mol_regexp;
            const xxx = from(['x', end], { multiline: true });
            $mol_assert_like(xxx.exec('x\ny')[0], 'x');
            $mol_assert_like(xxx.flags, 'gmsu');
        },
        'flags override'() {
            const triplet = $mol_regexp.from($mol_regexp.from(/.../, { ignoreCase: true }), { multiline: true });
            $mol_assert_like(triplet.toString(), '/.../gmsu');
        },
        'sequence'() {
            const { begin, end, decimal_only: digit, repeat, from } = $mol_regexp;
            const year = repeat(digit, 4, 4);
            const dash = '-';
            const month = repeat(digit, 2, 2);
            const day = repeat(digit, 2, 2);
            const date = from([begin, year, dash, month, dash, day, end]);
            $mol_assert_like(date.exec('2020-01-02')[0], '2020-01-02');
        },
        'optional'() {
            const name = $mol_regexp.from(['A', ['4']]);
            $mol_assert_equal('AB'.match(name)[0], 'A');
            $mol_assert_equal('A4'.match(name)[0], 'A4');
        },
        'anon variants'() {
            const name = $mol_regexp.from(['A', $mol_regexp.vary(['4', '5'])]);
            $mol_assert_equal('AB'.match(name), null);
            $mol_assert_equal('A4'.match(name)[0], 'A4');
            $mol_assert_equal('A5'.match(name)[0], 'A5');
        },
        'only groups'() {
            const regexp = $mol_regexp.from({ dog: '@' });
            $mol_assert_like([...'#'.matchAll(regexp)][0].groups, undefined);
            $mol_assert_like([...'@'.matchAll(regexp)][0].groups, { dog: '@' });
        },
        'catch skipped'() {
            const regexp = $mol_regexp.from(/(@)(\d?)/g);
            $mol_assert_like([...'[[@]]'.matchAll(regexp)].map(f => [...f]), [
                ['[['],
                ['@', '@', ''],
                [']]'],
            ]);
        },
        'enum variants'() {
            let Sex;
            (function (Sex) {
                Sex["male"] = "male";
                Sex["female"] = "female";
            })(Sex || (Sex = {}));
            const sexism = $mol_regexp.from(Sex);
            $mol_assert_like([...''.matchAll(sexism)].length, 0);
            $mol_assert_like([...'trans'.matchAll(sexism)][0].groups, undefined);
            $mol_assert_like([...'male'.matchAll(sexism)][0].groups, { male: 'male', female: '' });
            $mol_assert_like([...'female'.matchAll(sexism)][0].groups, { male: '', female: 'female' });
        },
        'recursive only groups'() {
            let Sex;
            (function (Sex) {
                Sex["male"] = "male";
                Sex["female"] = "female";
            })(Sex || (Sex = {}));
            const sexism = $mol_regexp.from({ Sex });
            $mol_assert_like([...''.matchAll(sexism)].length, 0);
            $mol_assert_like([...'male'.matchAll(sexism)][0].groups, { Sex: 'male', male: 'male', female: '' });
            $mol_assert_like([...'female'.matchAll(sexism)][0].groups, { Sex: 'female', male: '', female: 'female' });
        },
        'sequence with groups'() {
            const { begin, end, decimal_only: digit, repeat, from } = $mol_regexp;
            const year = repeat(digit, 4, 4);
            const dash = '-';
            const month = repeat(digit, 2, 2);
            const day = repeat(digit, 2, 2);
            const regexp = from([begin, { year }, dash, { month }, dash, { day }, end]);
            const found = [...'2020-01-02'.matchAll(regexp)];
            $mol_assert_like(found[0].groups, {
                year: '2020',
                month: '01',
                day: '02',
            });
        },
        'sequence with groups of mixed type'() {
            const prefix = '/';
            const postfix = '/';
            const regexp = $mol_regexp.from([{ prefix }, /(\w+)/, { postfix }, /([gumi]*)/]);
            $mol_assert_like([...'/foo/mi'.matchAll(regexp)], [
                Object.assign(["/foo/mi", "/", "foo", "/", "mi"], {
                    groups: {
                        prefix: '/',
                        postfix: '/',
                    },
                    index: 0,
                    input: "/",
                }),
            ]);
        },
        'recursive sequence with groups'() {
            const { begin, end, decimal_only: digit, repeat, from } = $mol_regexp;
            const year = repeat(digit, 4, 4);
            const dash = '-';
            const month = repeat(digit, 2, 2);
            const day = repeat(digit, 2, 2);
            const regexp = from([
                begin, { date: [{ year }, dash, { month }] }, dash, { day }, end
            ]);
            const found = [...'2020-01-02'.matchAll(regexp)];
            $mol_assert_like(found[0].groups, {
                date: '2020-01',
                year: '2020',
                month: '01',
                day: '02',
            });
        },
        'parse multiple'() {
            const { decimal_only: digit, from } = $mol_regexp;
            const regexp = from({ digit });
            $mol_assert_like([...'123'.matchAll(regexp)].map(f => f.groups), [
                { digit: '1' },
                { digit: '2' },
                { digit: '3' },
            ]);
        },
        'named variants'() {
            const { begin, or, end, from } = $mol_regexp;
            const sexism = from([
                begin, 'sex = ', { sex: ['male', or, 'female'] }, end
            ]);
            $mol_assert_like([...'sex = male'.matchAll(sexism)][0].groups, { sex: 'male' });
            $mol_assert_like([...'sex = female'.matchAll(sexism)][0].groups, { sex: 'female' });
            $mol_assert_like([...'sex = malefemale'.matchAll(sexism)][0].groups, undefined);
        },
        'force after'() {
            const { latin_only: letter, force_after, from } = $mol_regexp;
            const regexp = from([letter, force_after('.')]);
            $mol_assert_like('x.'.match(regexp), ['x']);
            $mol_assert_like('x,'.match(regexp), null);
        },
        'forbid after'() {
            const { latin_only: letter, forbid_after, from } = $mol_regexp;
            const regexp = from([letter, forbid_after('.')]);
            $mol_assert_like('x.'.match(regexp), null);
            $mol_assert_like('x,'.match(regexp), ['x']);
        },
        'char except'() {
            const { char_except, latin_only, tab } = $mol_regexp;
            const name = char_except(latin_only, tab);
            $mol_assert_like('a'.match(name), null);
            $mol_assert_like('\t'.match(name), null);
            $mol_assert_like('('.match(name), ['(']);
        },
        'unicode only'() {
            const { unicode_only, from } = $mol_regexp;
            const name = from([
                unicode_only('Script', 'Cyrillic'),
                unicode_only('Hex_Digit'),
            ]);
            $mol_assert_like('FF'.match(name), null);
            $mol_assert_like('ФG'.match(name), null);
            $mol_assert_like('ФF'.match(name), ['ФF']);
        },
        'generate by optional with inner group'() {
            const { begin, end, from } = $mol_regexp;
            const animals = from([begin, '#', ['^', { dog: '@' }], end]);
            $mol_assert_equal(animals.generate({}), '#');
            $mol_assert_equal(animals.generate({ dog: false }), '#');
            $mol_assert_equal(animals.generate({ dog: true }), '#^@');
            $mol_assert_fail(() => animals.generate({ dog: '$' }), 'Wrong param: dog=$');
        },
        'generate by optional with inner group with variants'() {
            const { begin, end, from } = $mol_regexp;
            const animals = from([begin, '#', ['^', { animal: { dog: '@', fox: '&' } }], end]);
            $mol_assert_equal(animals.generate({}), '#');
            $mol_assert_equal(animals.generate({ dog: true }), '#^@');
            $mol_assert_equal(animals.generate({ fox: true }), '#^&');
            $mol_assert_fail(() => animals.generate({ dog: '$' }), 'Wrong param: dog=$');
        },
        'complex example'() {
            const { begin, end, char_only, char_range, latin_only, slash_back, repeat_greedy, from, } = $mol_regexp;
            const atom_char = char_only(latin_only, "!#$%&'*+/=?^`{|}~-");
            const atom = repeat_greedy(atom_char, 1);
            const dot_atom = from([atom, repeat_greedy(['.', atom])]);
            const name_letter = char_only(char_range(0x01, 0x08), 0x0b, 0x0c, char_range(0x0e, 0x1f), 0x21, char_range(0x23, 0x5b), char_range(0x5d, 0x7f));
            const quoted_pair = from([
                slash_back,
                char_only(char_range(0x01, 0x09), 0x0b, 0x0c, char_range(0x0e, 0x7f))
            ]);
            const name = repeat_greedy({ name_letter, quoted_pair });
            const quoted_name = from(['"', { name }, '"']);
            const local_part = from({ dot_atom, quoted_name });
            const domain = dot_atom;
            const mail = from([begin, local_part, '@', { domain }, end]);
            $mol_assert_equal('foo..bar@example.org'.match(mail), null);
            $mol_assert_equal('foo..bar"@example.org'.match(mail), null);
            $mol_assert_like([...'foo.bar@example.org'.matchAll(mail)][0].groups, {
                dot_atom: "foo.bar",
                quoted_name: "",
                name: "",
                name_letter: "",
                quoted_pair: "",
                domain: "example.org",
            });
            $mol_assert_like([...'"foo..bar"@example.org'.matchAll(mail)][0].groups, {
                dot_atom: "",
                quoted_name: '"foo..bar"',
                name: "foo..bar",
                name_letter: "r",
                quoted_pair: "",
                domain: "example.org",
            });
            $mol_assert_equal(mail.generate({ dot_atom: 'foo.bar', domain: 'example.org' }), 'foo.bar@example.org');
            $mol_assert_equal(mail.generate({ name: 'foo..bar', domain: 'example.org' }), '"foo..bar"@example.org');
            $mol_assert_fail(() => mail.generate({ dot_atom: 'foo..bar', domain: 'example.org' }), 'Wrong param: dot_atom=foo..bar');
        },
    });
})($ || ($ = {}));
//mol/regexp/regexp.test.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_test({
            'Empty needle'() {
                const app = new $mol_dimmer;
                app.needle = () => '  ';
                app.haystack = () => 'foo  bar';
                $mol_assert_like(app.strings(), ['foo  bar']);
            },
            'Empty haystack'() {
                const app = new $mol_dimmer;
                app.needle = () => 'foo  bar';
                app.haystack = () => '';
                $mol_assert_like(app.strings(), ['']);
            },
            'Not found'() {
                const app = new $mol_dimmer;
                app.needle = () => 'foo';
                app.haystack = () => ' bar ';
                $mol_assert_like(app.strings(), [' bar ']);
            },
            'One found'() {
                const app = new $mol_dimmer;
                app.needle = () => 'foo';
                app.haystack = () => ' barfoo ';
                $mol_assert_like(app.strings(), [' bar', 'foo', ' ']);
            },
            'Multiple found'() {
                const app = new $mol_dimmer;
                app.needle = () => 'foo';
                app.haystack = () => ' foobarfoo foo';
                $mol_assert_like(app.strings(), [' ', 'foo', 'bar', 'foo', ' ', 'foo']);
            },
            'Fuzzy search'() {
                const app = new $mol_dimmer;
                app.needle = () => 'foo bar';
                app.haystack = () => ' barfoo ';
                $mol_assert_like(app.strings(), [' ', 'bar', '', 'foo', ' ']);
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/dimmer/dimmer.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'Is boolean - true'() {
            $mol_data_boolean(true);
        },
        'Is boolean - false'() {
            $mol_data_boolean(false);
        },
        'Is not boolean'() {
            $mol_assert_fail(() => {
                $mol_data_boolean('x');
            }, 'x is not a boolean');
        },
        'Is object boolean'() {
            $mol_assert_fail(() => {
                $mol_data_boolean(new Boolean(''));
            }, 'false is not a boolean');
        },
    });
})($ || ($ = {}));
//mol/data/boolean/boolean.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'Is null'() {
            $mol_data_nullable($mol_data_number)(null);
        },
        'Is not null'() {
            $mol_data_nullable($mol_data_number)(0);
        },
        'Is undefined'() {
            $mol_assert_fail(() => {
                const Type = $mol_data_nullable($mol_data_number);
                Type(undefined);
            }, 'undefined is not a number');
        },
    });
})($ || ($ = {}));
//mol/data/nullable/nullable.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'is same number'() {
            const Nan = $mol_data_const(Number.NaN);
            Nan(Number.NaN);
        },
        'is equal object'() {
            const Tags = $mol_data_const({ tags: ['deep', 'equals'] });
            Tags({ tags: ['deep', 'equals'] });
        },
        'is different number'() {
            const Five = $mol_data_const(5);
            $mol_assert_fail(() => Five(6), '6 is not 5');
        },
        'is different object'() {
            const Tags = $mol_data_const({ tags: ['deep', 'equals'] });
            $mol_assert_fail(() => Tags({ tags: ['shallow', 'equals'] }), `{"tags":["shallow","equals"]} is not {"tags":["deep","equals"]}`);
        },
    });
})($ || ($ = {}));
//mol/data/const/const.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'Is empty dict'() {
            $mol_data_dict($mol_data_number)({});
        },
        'Is dict'() {
            $mol_data_dict($mol_data_number)({ foo: 123 });
        },
        'Is not dict'() {
            $mol_assert_fail(() => {
                $mol_data_dict($mol_data_number)([123]);
            }, '123 is not an Object');
        },
        'Has wrong item'() {
            $mol_assert_fail(() => {
                $mol_data_dict($mol_data_number)({ foo: 1, bar: '1' });
            }, '["bar"] 1 is not a number');
        },
        'Has wrong deep item'() {
            $mol_assert_fail(() => {
                $mol_data_dict($mol_data_dict($mol_data_number))({ foo: { bar: false } });
            }, '["foo"] ["bar"] false is not a number');
        },
    });
})($ || ($ = {}));
//mol/data/dict/dict.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'Is first'() {
            $mol_data_variant($mol_data_number, $mol_data_string)(0);
        },
        'Is second'() {
            $mol_data_variant($mol_data_number, $mol_data_string)('');
        },
        'Is false'() {
            $mol_assert_fail(() => {
                $mol_data_variant($mol_data_number, $mol_data_string)(false);
            }, 'false is not any of variants\nfalse is not a number\nfalse is not a string');
        },
    });
})($ || ($ = {}));
//mol/data/variant/variant.test.ts
;
"use strict";
var $;
(function ($) {
    let sex;
    (function (sex) {
        sex[sex["male"] = 0] = "male";
        sex[sex["female"] = 1] = "female";
    })(sex || (sex = {}));
    let gender;
    (function (gender) {
        gender["bisexual"] = "bisexual";
        gender["trans"] = "transgender";
    })(gender || (gender = {}));
    $mol_test({
        'config of enum'() {
            const Sex = $mol_data_enum('sex', sex);
            $mol_assert_like(Sex.config, {
                name: 'sex',
                dict: sex,
            });
        },
        'name of enum'() {
            const Sex = $mol_data_enum('sex', sex);
            $mol_assert_equal(Sex.config.name, 'sex');
        },
        'Is right value of enum'() {
            const Sex = $mol_data_enum('sex', sex);
            $mol_assert_equal(Sex(0), sex.male);
        },
        'Is wrong value of enum'() {
            const Sex = $mol_data_enum('sex', sex);
            $mol_assert_fail(() => Sex(2), `2 is not value of sex enum`);
        },
        'Is name instead of value'() {
            const Sex = $mol_data_enum('sex', sex);
            $mol_assert_fail(() => Sex('male'), `male is not value of sex enum`);
        },
        'Is common object field'() {
            const Sex = $mol_data_enum('sex', sex);
            $mol_assert_fail(() => Sex('__proto__'), `__proto__ is not value of sex enum`);
        },
    });
    $mol_test({
        'config of enum'() {
            const Gender = $mol_data_enum('gender', gender);
            $mol_assert_like(Gender.config, {
                name: 'gender',
                dict: gender,
            });
        },
        'Is right value of enum'() {
            const Gender = $mol_data_enum('gender', gender);
            $mol_assert_equal(Gender('transgender'), gender.trans);
        },
        'Is wrong value of enum'() {
            const Gender = $mol_data_enum('gender', gender);
            $mol_assert_fail(() => Gender('xxx'), `xxx is not value of gender enum`);
        },
        'Is name instead of value'() {
            const Gender = $mol_data_enum('gender', gender);
            $mol_assert_fail(() => Gender('trans'), `trans is not value of gender enum`);
        },
        'Is common object field'() {
            const Gender = $mol_data_enum('gender', gender);
            $mol_assert_fail(() => Gender('__proto__'), `__proto__ is not value of gender enum`);
        },
    });
})($ || ($ = {}));
//mol/data/enum/enum.test.ts

//# sourceMappingURL=node.test.js.map
