"use strict";
function require( path ){ return $node[ path ] };

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "../" ) ] }; 
;
"use strict";
Error.stackTraceLimit = 50;
var $;
(function ($) {
})($ || ($ = {}));
module.exports = $;
//mam.ts
;

$node[ "../mam.ts" ] = $node[ "../mam.ts" ] = module.exports }.call( {} , {} )
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
        get incompleted() {
            return false;
        }
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
                if (pub?.incompleted)
                    return;
            }
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
    class $mol_after_frame extends $mol_object2 {
        task;
        static _promise = null;
        static get promise() {
            if (this._promise)
                return this._promise;
            return this._promise = new Promise(done => {
                const complete = () => {
                    this._promise = null;
                    done();
                };
                if (typeof requestAnimationFrame === 'function') {
                    requestAnimationFrame(complete);
                }
                else {
                    setTimeout(complete, 16);
                }
            });
        }
        cancelled = false;
        promise;
        constructor(task) {
            super();
            this.task = task;
            this.promise = $mol_after_frame.promise.then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_frame = $mol_after_frame;
})($ || ($ = {}));
//mol/after/frame/frame.web.ts
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
        get incompleted() {
            return $mol_promise_like(this.cache);
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
    class $mol_window extends $mol_object {
        static size() {
            this.resizes();
            return {
                width: self.innerWidth,
                height: self.innerHeight,
            };
        }
        static resizes(next) { return next; }
    }
    __decorate([
        $mol_mem
    ], $mol_window, "size", null);
    __decorate([
        $mol_mem
    ], $mol_window, "resizes", null);
    $.$mol_window = $mol_window;
    self.addEventListener('resize', event => $mol_window.resizes(event));
})($ || ($ = {}));
//mol/window/window.web.ts
;
"use strict";
var $;
(function ($) {
})($ || ($ = {}));
//mol/dom/context/context.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = self;
})($ || ($ = {}));
//mol/dom/context/context.web.ts
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
    if ($mol_dom_context.document) {
        $mol_dom_context.document.documentElement.addEventListener('focus', (event) => {
            $mol_view_selection.focused($mol_maybe($mol_dom_context.document.activeElement), 'notify');
        }, true);
    }
})($ || ($ = {}));
//mol/view/selection/selection.web.ts
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
    $mol_dom_context.document?.addEventListener('DOMContentLoaded', () => $mol_view.autobind(), { once: true });
})($ || ($ = {}));
//mol/view/view/view.web.ts
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
var $;
(function ($) {
    self.addEventListener('storage', event => $.$mol_state_local.changes(event));
})($ || ($ = {}));
//mol/state/local/local.web.ts
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
//node/node.ts
;
"use strict";
var $node = $node || {};
//node/node.web.ts
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
    $.$mol_action = $mol_wire_method;
})($ || ($ = {}));
//mol/action/action.ts
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
    class $mol_file_web extends $mol_file {
        static absolute(path) {
            return this.make({
                path: $mol_const(path)
            });
        }
        static relative(path) {
            return this.absolute(new URL(path, this.base).toString());
        }
        static base = $mol_dom_context.document
            ? new URL('.', $mol_dom_context.document.currentScript['src']).toString()
            : '';
        buffer(next) {
            if (next !== undefined)
                throw new Error(`Saving content not supported: ${this.path}`);
            const response = $mol_fetch.response(this.path());
            if (response.native.status === 404)
                throw new $mol_file_not_found(`File not found: ${this.path()}`);
            return new Uint8Array(response.buffer());
        }
        stat(next, virt) {
            let stat = next;
            if (next === undefined) {
                const content = this.text();
                const ctime = new Date();
                stat = {
                    type: 'file',
                    size: content.length,
                    ctime,
                    atime: ctime,
                    mtime: ctime
                };
            }
            this.parent().watcher();
            return stat;
        }
        resolve(path) {
            let res = this.path() + '/' + path;
            while (true) {
                let prev = res;
                res = res.replace(/\/[^\/.]+\/\.\.\//, '/');
                if (prev === res)
                    break;
            }
            return this.constructor.absolute(res);
        }
        ensure() {
            throw new Error('$mol_file_web.ensure() not implemented');
        }
        sub() {
            throw new Error('$mol_file_web.sub() not implemented');
        }
        relate(base = this.constructor.relative('.')) {
            throw new Error('$mol_file_web.relate() not implemented');
        }
        append(next) {
            throw new Error('$mol_file_web.append() not implemented');
        }
    }
    __decorate([
        $mol_mem
    ], $mol_file_web.prototype, "buffer", null);
    __decorate([
        $mol_mem
    ], $mol_file_web.prototype, "stat", null);
    __decorate([
        $mol_mem
    ], $mol_file_web.prototype, "sub", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_web, "absolute", null);
    $.$mol_file_web = $mol_file_web;
    $.$mol_file = $mol_file_web;
})($ || ($ = {}));
//mol/file/file.web.ts
;
"use strict";
//hyoo/hyoo.ts
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
        static href(next) {
            if (next === undefined) {
                next = $mol_dom_context.location.href;
            }
            else if (!/^about:srcdoc/.test(next)) {
                new $mol_after_frame(() => {
                    const next = this.href();
                    const prev = $mol_dom_context.location.href;
                    if (next === prev)
                        return;
                    const history = $mol_dom_context.history;
                    history.replaceState(history.state, $mol_dom_context.document.title, next);
                });
            }
            if ($mol_dom_context.parent !== $mol_dom_context.self) {
                $mol_dom_context.parent.postMessage(['hashchange', next], '*');
            }
            return next;
        }
        static href_normal() {
            return this.link({});
        }
        static href_absolute() {
            return new URL(this.href(), $mol_dom_context.location.href).toString();
        }
        static dict(next) {
            var href = this.href(next && this.make_link(next)).split(/#!?/)[1] || '';
            var chunks = href.split(this.separator);
            var params = {};
            chunks.forEach(chunk => {
                if (!chunk)
                    return;
                var vals = chunk.split('=').map(decodeURIComponent);
                params[vals.shift()] = vals.join('=');
            });
            return params;
        }
        static dict_cut(except) {
            const dict = this.dict();
            const cut = {};
            for (const key in dict) {
                if (except.indexOf(key) >= 0)
                    break;
                cut[key] = dict[key];
            }
            return cut;
        }
        static value(key, next) {
            const nextDict = (next === void 0) ? void 0 : { ...this.dict(), [key]: next };
            const next2 = this.dict(nextDict)[key];
            return (next2 == null) ? null : next2;
        }
        static link(next) {
            return this.make_link({
                ...this.dict_cut(Object.keys(next)),
                ...next,
            });
        }
        static prolog = '!';
        static separator = '/';
        static make_link(next) {
            const chunks = [];
            for (let key in next) {
                if (null == next[key])
                    continue;
                const val = next[key];
                chunks.push([key].concat(val ? [val] : []).map(this.encode).join('='));
            }
            return new URL('#' + this.prolog + chunks.join(this.separator), this.href_absolute()).toString();
        }
        static go(next) {
            $mol_dom_context.location.href = this.make_link(next);
        }
        static encode(str) {
            return encodeURIComponent(str).replace(/\(/g, '%28').replace(/\)/g, '%29');
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
            var prefix = this.prefix;
            var dict = {};
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
    ], $mol_state_arg, "href_absolute", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "dict", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "dict_cut", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "value", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "make_link", null);
    __decorate([
        $mol_action
    ], $mol_state_arg, "go", null);
    $.$mol_state_arg = $mol_state_arg;
    function $mol_state_arg_change() {
        $mol_state_arg.href($mol_dom_context.location.href);
    }
    self.addEventListener('hashchange', $mol_state_arg_change);
})($ || ($ = {}));
//mol/state/arg/arg.web.ts
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
    class $mol_ghost extends $mol_view {
        Sub() {
            const obj = new this.$.$mol_view();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_ghost.prototype, "Sub", null);
    $.$mol_ghost = $mol_ghost;
})($ || ($ = {}));
//mol/ghost/-view.tree/ghost.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_ghost extends $.$mol_ghost {
            dom_node(next) {
                const node = this.Sub().dom_node(next);
                $mol_dom_render_attributes(node, this.attr_static());
                $mol_dom_render_events(node, this.event());
                return node;
            }
            dom_node_actual() {
                this.dom_node();
                const node = this.Sub().dom_node_actual();
                const attr = this.attr();
                const style = this.style();
                const fields = this.field();
                $mol_dom_render_attributes(node, attr);
                $mol_dom_render_styles(node, style);
                $mol_dom_render_fields(node, fields);
                return node;
            }
            dom_tree() {
                const Sub = this.Sub();
                const node = Sub.dom_tree();
                try {
                    this.dom_node_actual();
                    this.auto();
                }
                catch (error) {
                    $mol_fail_log(error);
                }
                return node;
            }
            title() {
                return this.Sub().title();
            }
            minimal_width() {
                return this.Sub().minimal_width();
            }
            minimal_height() {
                return this.Sub().minimal_height();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_ghost.prototype, "dom_node", null);
        __decorate([
            $mol_mem
        ], $mol_ghost.prototype, "dom_node_actual", null);
        $$.$mol_ghost = $mol_ghost;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/ghost/ghost.view.ts
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
    function $visavis_plot_raw_from_json(json, id) {
        return new $visavis_plot_raw({
            id: id || $mol_guid(),
            type: json.use_visavis_type ?? 'unknown',
            json,
        });
    }
    $.$visavis_plot_raw_from_json = $visavis_plot_raw_from_json;
    class $visavis_plot_raw extends $mol_store {
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
    $.$visavis_plot_raw = $visavis_plot_raw;
})($ || ($ = {}));
//visavis/plot/raw/raw.ts
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
    class $visavis_plot_matrix extends $mol_view {
        plot_raw() {
            const obj = new this.$.$visavis_plot_raw();
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
        sub() {
            return [
                this.Plot(),
                this.Setup()
            ];
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
            const obj = new this.$.$mol_view();
            obj.sub = () => this.plot_body();
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
            obj.hint = () => this.$.$mol_locale.text('$visavis_plot_matrix_Nonformers_hint');
            obj.title = () => this.$.$mol_locale.text('$visavis_plot_matrix_Nonformers_title');
            obj.checked = (next) => this.nonformers(next);
            return obj;
        }
        Nonformers_label() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => this.$.$mol_locale.text('$visavis_plot_matrix_Nonformers_label_title');
            obj.Content = () => this.Nonformers();
            return obj;
        }
        order_dict() {
            return {
                nump: this.$.$mol_locale.text('$visavis_plot_matrix_order_dict_nump'),
                num: this.$.$mol_locale.text('$visavis_plot_matrix_order_dict_num'),
                size: this.$.$mol_locale.text('$visavis_plot_matrix_order_dict_size'),
                rea: this.$.$mol_locale.text('$visavis_plot_matrix_order_dict_rea'),
                rpp: this.$.$mol_locale.text('$visavis_plot_matrix_order_dict_rpp'),
                rion: this.$.$mol_locale.text('$visavis_plot_matrix_order_dict_rion'),
                rcov: this.$.$mol_locale.text('$visavis_plot_matrix_order_dict_rcov'),
                rmet: this.$.$mol_locale.text('$visavis_plot_matrix_order_dict_rmet'),
                tmelt: this.$.$mol_locale.text('$visavis_plot_matrix_order_dict_tmelt'),
                eneg: this.$.$mol_locale.text('$visavis_plot_matrix_order_dict_eneg')
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
            obj.title = () => this.$.$mol_locale.text('$visavis_plot_matrix_Order_label_title');
            obj.Content = () => this.Order_switch();
            return obj;
        }
        Setup() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Nonformers_label(),
                this.Order_label()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $visavis_plot_matrix.prototype, "plot_raw", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_matrix.prototype, "links_value_min", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_matrix.prototype, "links_value_max", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_matrix.prototype, "heatmap", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_matrix.prototype, "order_current", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_matrix.prototype, "Root", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_matrix.prototype, "Heatmap_min", null);
    __decorate([
        $mol_mem_key
    ], $visavis_plot_matrix.prototype, "Heatmap_color", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_matrix.prototype, "Heatmap_max", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_matrix.prototype, "Heatmap_legend", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_matrix.prototype, "Side_right", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_matrix.prototype, "Plot", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_matrix.prototype, "nonformers", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_matrix.prototype, "Nonformers", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_matrix.prototype, "Nonformers_label", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_matrix.prototype, "Order_switch", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_matrix.prototype, "Order_label", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_matrix.prototype, "Setup", null);
    $.$visavis_plot_matrix = $visavis_plot_matrix;
})($ || ($ = {}));
//visavis/plot/matrix/-view.tree/matrix.view.tree.ts
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
    function $mol_tree2_to_json(tree) {
        if (!tree.type)
            if (tree.kids.length === 1 && tree.kids[0].type)
                return this.$mol_tree2_to_json(tree.kids[0]);
            else
                return tree.text();
        if (tree.type === '-')
            return undefined;
        if (tree.type === 'true')
            return true;
        if (tree.type === 'false')
            return false;
        if (tree.type === 'null')
            return null;
        if (tree.type === '*') {
            const obj = {};
            for (const kid of tree.kids) {
                if (kid.type === '-')
                    continue;
                const key = kid.type || kid.clone(kid.kids.slice(0, -1)).text();
                const val = this.$mol_tree2_to_json(kid.kids[kid.kids.length - 1]);
                if (val !== undefined)
                    obj[key] = val;
            }
            return obj;
        }
        if (tree.type === '/') {
            const res = [];
            for (const kid of tree.kids) {
                if (kid.type === '-')
                    continue;
                var val = this.$mol_tree2_to_json(kid);
                if (val !== undefined)
                    res.push(val);
            }
            return res;
        }
        const numb = Number(tree.type);
        if (!Number.isNaN(numb) || tree.type === 'NaN')
            return numb;
        this.$mol_fail(new Error(`Unknown json type (${tree.type}) at ${tree.span}`));
    }
    $.$mol_tree2_to_json = $mol_tree2_to_json;
})($ || ($ = {}));
//mol/tree2/to/json/json.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const Elements_list = $mol_data_array($mol_data_record({
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
        }));
        const Prop_names = $mol_data_record({
            num: $mol_data_string,
            nump: $mol_data_string,
            size: $mol_data_string,
            rea: $mol_data_string,
            rpp: $mol_data_string,
            rion: $mol_data_string,
            rcov: $mol_data_string,
            rmet: $mol_data_string,
            tmelt: $mol_data_string,
            eneg: $mol_data_string,
        });
        class $visavis_elements_list {
            static prop_names() {
                const tree = $$.$mol_tree2_from_string($mol_fetch.text('/visavis/elements/data/prop_names.json.tree'));
                const json = $$.$mol_tree2_to_json(tree);
                return Prop_names(json);
            }
            static list() {
                const tree = $$.$mol_tree2_from_string($mol_fetch.text('/visavis/elements/data/elements.json.tree'));
                const json = tree.kids.map(tree => $$.$mol_tree2_to_json(tree));
                return Elements_list(json);
            }
            static index_by_prop(prop) {
                return Object.fromEntries(this.list().map(el => [el[prop], el]));
            }
            static element_by_num(num) {
                return this.list()[num];
            }
            static element_by_name(name) {
                return this.index_by_prop('name')[name];
            }
        }
        __decorate([
            $mol_mem
        ], $visavis_elements_list, "prop_names", null);
        __decorate([
            $mol_mem
        ], $visavis_elements_list, "list", null);
        __decorate([
            $mol_mem_key
        ], $visavis_elements_list, "index_by_prop", null);
        __decorate([
            $mol_mem_key
        ], $visavis_elements_list, "element_by_num", null);
        __decorate([
            $mol_mem_key
        ], $visavis_elements_list, "element_by_name", null);
        $$.$visavis_elements_list = $visavis_elements_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/elements/list/list.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $visavis_elements_nonformer {
            static pd_bin() {
                const tree = $$.$mol_tree2_from_string($mol_fetch.text('/visavis/elements/data/nonformer_pd_bin.json.tree'));
                const json = tree.kids.map(tree => $$.$mol_tree2_to_json(tree));
                return json;
            }
            static pd_tri_labels() {
                const tree = $$.$mol_tree2_from_string($mol_fetch.text('/visavis/elements/data/nonformer_pd_tri.json.tree'));
                const json = tree.kids.map(tree => $$.$mol_tree2_to_json(tree));
                return json;
            }
            static pd_tri_nums() {
                const x = [];
                const y = [];
                const z = [];
                this.pd_tri_labels().forEach(label => {
                    const names = label.split('-');
                    const nums = names.map(el_name => $visavis_elements_list.element_by_name(el_name).num);
                    x.push(nums[0]);
                    y.push(nums[1]);
                    z.push(nums[2]);
                });
                return { x, y, z };
            }
        }
        __decorate([
            $mol_mem
        ], $visavis_elements_nonformer, "pd_bin", null);
        __decorate([
            $mol_mem
        ], $visavis_elements_nonformer, "pd_tri_labels", null);
        __decorate([
            $mol_mem
        ], $visavis_elements_nonformer, "pd_tri_nums", null);
        $$.$visavis_elements_nonformer = $visavis_elements_nonformer;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/elements/nonformer/nonformer.ts
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
        const $visavis_plot_matrix_json_node = $mol_data_record({
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
        const $visavis_plot_matrix_json_link = $mol_data_record({
            source: $mol_data_number,
            target: $mol_data_number,
            value: $mol_data_number,
            cmt: $mol_data_string,
            cmp: $mol_data_optional($mol_data_number),
        });
        const $visavis_plot_matrix_json = $mol_data_record({
            payload: $mol_data_record({
                nodes: $mol_data_array($visavis_plot_matrix_json_node),
                links: $mol_data_array($visavis_plot_matrix_json_link)
            }),
        });
        class $visavis_plot_matrix extends $.$visavis_plot_matrix {
            json() {
                return $visavis_plot_matrix_json(this.plot_raw().json());
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
                    for (const item of $visavis_elements_nonformer.pd_bin()) {
                        matrix[item[0]][item[1]].z = 1;
                        matrix[item[1]][item[0]].z = 1;
                        matrix[item[0]][item[1]].nonformer = true;
                        matrix[item[1]][item[0]].nonformer = true;
                    }
                }
                return matrix;
            }
            size() {
                const rect = this.Plot().view_rect();
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
                const svg = $visavis_lib.d3().select('[visavis_plot_matrix_root]')
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
        ], $visavis_plot_matrix.prototype, "json", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_matrix.prototype, "links", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_matrix.prototype, "heatmap", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_matrix.prototype, "order", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_matrix.prototype, "matrix", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_matrix.prototype, "size", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_matrix.prototype, "opacity_scale", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_matrix.prototype, "color_heatmap", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_matrix.prototype, "color_heatmap_scale", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_matrix.prototype, "range", null);
        __decorate([
            $mol_mem_key
        ], $visavis_plot_matrix.prototype, "cell_selected", null);
        __decorate([
            $mol_action
        ], $visavis_plot_matrix.prototype, "cell_click", null);
        __decorate([
            $mol_mem_key
        ], $visavis_plot_matrix.prototype, "draw_cells", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_matrix.prototype, "draw", null);
        $$.$visavis_plot_matrix = $visavis_plot_matrix;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/plot/matrix/matrix.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("visavis/plot/matrix/matrix.view.css", "[visavis_plot_matrix_plot] rect.nonformer {\n\tfill:url(#nonformer) !important;\n\tfill-opacity:1.0 !important;\n}\n\n[visavis_plot_matrix_plot] rect.visited{\n\tfill:#0f0 !important;\n\tfill-opacity:1.0 !important;\n}\n\n[visavis_plot_matrix_plot] rect.bgmatrix {\n\tfill:#f6f6f6;\n}\n\n[visavis_plot_matrix_plot] rect.bgmatrix.hidden {\n\tfill:#fff;\n}\n\n[visavis_plot_matrix_plot] line {\n\tstroke:#fff;\n}\n\n[visavis_plot_matrix_plot] text.active {\n\tfill:#f00;\n\tfont-weight:bold;\n}\n");
})($ || ($ = {}));
//visavis/plot/matrix/-css/matrix.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($.$visavis_plot_matrix, {
            flex: {
                grow: 1,
            },
            Side_right: {
                position: 'absolute',
                top: '50%',
                right: $mol_gap.space,
                transform: 'translateY(-50%)'
            },
            Heatmap_color: {
                width: '1rem',
                height: '1rem',
                margin: '1px',
            },
            Heatmap_legend: {
                alignItems: 'flex-end',
                flex: {
                    direction: 'column-reverse',
                },
            },
            Root: {
                margin: 'auto',
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)'
            },
            Order_switch: {
                flex: {
                    shrink: 1,
                },
            },
            Plot: {
                flex: {
                    grow: 1,
                },
                position: 'relative',
            },
            Setup: {
                flex: {
                    direction: 'column',
                    basis: '25rem',
                    shrink: 0,
                },
                padding: $mol_gap.block,
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/plot/matrix/matrix.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $visavis_plotly extends $mol_view {
        data() {
            return {};
        }
        layout() {
            return {};
        }
        subscribe_events() {
            return null;
        }
        plot_options() {
            return {
                displaylogo: false,
                displayModeBar: false,
                staticPlot: false
            };
        }
    }
    $.$visavis_plotly = $visavis_plotly;
})($ || ($ = {}));
//visavis/plotly/-view.tree/plotly.view.tree.ts
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
        class $visavis_plotly extends $.$visavis_plotly {
            subscribe_events() {
            }
            render() {
                if (!this.view_rect())
                    return;
                const { width, height } = this.view_rect();
                const plotly_root = $mol_wire_sync(document).createElement('div');
                plotly_root.style.position = 'absolute';
                const promise = $lib_plotly.all().react(plotly_root, this.data(), { ...this.layout(), width, height }, this.plot_options());
                const dom_node = this.dom_node_actual();
                promise.then((plotly_root) => {
                    dom_node.replaceChildren(plotly_root);
                    this.subscribe_events();
                });
            }
        }
        __decorate([
            $mol_action
        ], $visavis_plotly.prototype, "subscribe_events", null);
        __decorate([
            $mol_mem
        ], $visavis_plotly.prototype, "render", null);
        $$.$visavis_plotly = $visavis_plotly;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/plotly/plotly.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($visavis_plotly, {
            flex: {
                grow: 1
            }
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/plotly/plotly.view.css.ts
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
    class $visavis_plot_cube extends $mol_view {
        plot_raw() {
            const obj = new this.$.$visavis_plot_raw();
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
        sub() {
            return [
                this.Plot(),
                this.Setup()
            ];
        }
        data_shown() {
            return {};
        }
        layout() {
            return {};
        }
        subscribe_events() {
            return null;
        }
        Root() {
            const obj = new this.$.$visavis_plotly();
            obj.data = () => this.data_shown();
            obj.layout = () => this.layout();
            obj.subscribe_events = () => this.subscribe_events();
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
        Plot() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Root(),
                this.Side_right()
            ];
            return obj;
        }
        nonformers(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        Nonformers() {
            const obj = new this.$.$mol_check_box();
            obj.hint = () => this.$.$mol_locale.text('$visavis_plot_cube_Nonformers_hint');
            obj.title = () => this.$.$mol_locale.text('$visavis_plot_cube_Nonformers_title');
            obj.checked = (next) => this.nonformers(next);
            return obj;
        }
        Nonformers_label() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => this.$.$mol_locale.text('$visavis_plot_cube_Nonformers_label_title');
            obj.Content = () => this.Nonformers();
            return obj;
        }
        order_dict() {
            return {
                nump: this.$.$mol_locale.text('$visavis_plot_cube_order_dict_nump'),
                num: this.$.$mol_locale.text('$visavis_plot_cube_order_dict_num'),
                size: this.$.$mol_locale.text('$visavis_plot_cube_order_dict_size'),
                rea: this.$.$mol_locale.text('$visavis_plot_cube_order_dict_rea'),
                rpp: this.$.$mol_locale.text('$visavis_plot_cube_order_dict_rpp'),
                rion: this.$.$mol_locale.text('$visavis_plot_cube_order_dict_rion'),
                rcov: this.$.$mol_locale.text('$visavis_plot_cube_order_dict_rcov'),
                rmet: this.$.$mol_locale.text('$visavis_plot_cube_order_dict_rmet'),
                tmelt: this.$.$mol_locale.text('$visavis_plot_cube_order_dict_tmelt'),
                eneg: this.$.$mol_locale.text('$visavis_plot_cube_order_dict_eneg')
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
            obj.title = () => this.$.$mol_locale.text('$visavis_plot_cube_X_order_label_title');
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
            obj.title = () => this.$.$mol_locale.text('$visavis_plot_cube_Y_order_label_title');
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
            obj.title = () => this.$.$mol_locale.text('$visavis_plot_cube_Z_order_label_title');
            obj.Content = () => this.Z_order_select();
            return obj;
        }
        Setup() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
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
    ], $visavis_plot_cube.prototype, "plot_raw", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_cube.prototype, "heatmap", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_cube.prototype, "order_current", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_cube.prototype, "x_sort", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_cube.prototype, "y_sort", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_cube.prototype, "z_sort", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_cube.prototype, "Root", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_cube.prototype, "Heatmap_min", null);
    __decorate([
        $mol_mem_key
    ], $visavis_plot_cube.prototype, "Heatmap_color", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_cube.prototype, "Heatmap_max", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_cube.prototype, "Heatmap_legend", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_cube.prototype, "Side_right", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_cube.prototype, "Plot", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_cube.prototype, "nonformers", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_cube.prototype, "Nonformers", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_cube.prototype, "Nonformers_label", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_cube.prototype, "X_order_select", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_cube.prototype, "X_order_label", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_cube.prototype, "Y_order_select", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_cube.prototype, "Y_order_label", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_cube.prototype, "Z_order_select", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_cube.prototype, "Z_order_label", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_cube.prototype, "Setup", null);
    $.$visavis_plot_cube = $visavis_plot_cube;
})($ || ($ = {}));
//visavis/plot/cube/-view.tree/cube.view.tree.ts
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
        const $visavis_plot_cube_json = $mol_data_record({
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
        class $visavis_plot_cube extends $.$visavis_plot_cube {
            plot_body() {
                return [
                    this.Root(),
                    ...this.heatmap() ? [this.Side_right()] : [],
                ];
            }
            json() {
                return $visavis_plot_cube_json(this.plot_raw().json());
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
                return $lib_d3.all().range(95).sort((a, b) => $visavis_elements_list.element_by_num(a + 1)[order] - $visavis_elements_list.element_by_num(b + 1)[order]);
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
                const { x, y, z } = $visavis_elements_nonformer.pd_tri_nums();
                return {
                    type: "scatter3d",
                    text: $visavis_elements_nonformer.pd_tri_labels(),
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
            layout() {
                return {
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
                };
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
                        x_temp.push(this.ter_op(x_op, $visavis_elements_list.element_by_num(x_src[i])[x_sort], $visavis_elements_list.element_by_num(y_src[i])[x_sort], $visavis_elements_list.element_by_num(z_src[i])[x_sort]));
                    }
                    var x_renorm = $lib_d3.all().scaleQuantize()
                        .range($visavis_elements_list.list().slice(1).map(el => el.num))
                        .domain([$lib_d3.all().min(x_temp), $lib_d3.all().max(x_temp)]);
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
                        y_temp.push(this.ter_op(y_op, $visavis_elements_list.element_by_num(x_src[i])[y_sort], $visavis_elements_list.element_by_num(y_src[i])[y_sort], $visavis_elements_list.element_by_num(z_src[i])[y_sort]));
                    }
                    var y_renorm = $lib_d3.all().scaleQuantize()
                        .range($visavis_elements_list.list().slice(1).map(el => el.num))
                        .domain([$lib_d3.all().min(y_temp), $lib_d3.all().max(y_temp)]);
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
                        z_temp.push(this.ter_op(z_op, $visavis_elements_list.element_by_num(x_src[i])[z_sort], $visavis_elements_list.element_by_num(y_src[i])[z_sort], $visavis_elements_list.element_by_num(z_src[i])[z_sort]));
                    }
                    var z_renorm = $lib_d3.all().scaleQuantize()
                        .range($visavis_elements_list.list().slice(1).map(el => el.num))
                        .domain([$lib_d3.all().min(z_temp), $lib_d3.all().max(z_temp)]);
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
                return $visavis_elements_list.list().slice(1).sort(function (a, b) {
                    return a[prop] - b[prop];
                }).map(el => el.name);
            }
        }
        __decorate([
            $mol_mem
        ], $visavis_plot_cube.prototype, "value_list", null);
        __decorate([
            $mol_mem_key
        ], $visavis_plot_cube.prototype, "order", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_cube.prototype, "heatmap", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_cube.prototype, "marker", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_cube.prototype, "data_nonformers", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_cube.prototype, "data", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_cube.prototype, "data_shown", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_cube.prototype, "scene", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_cube.prototype, "layout", null);
        __decorate([
            $mol_mem_key
        ], $visavis_plot_cube.prototype, "order_els", null);
        $$.$visavis_plot_cube = $visavis_plot_cube;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/plot/cube/cube.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($visavis_plot_cube, {
            Plot: {
                flex: {
                    grow: 1,
                },
                position: 'relative',
            },
            Setup: {
                flex: {
                    basis: '25rem',
                    direction: 'column',
                    shrink: 0,
                },
                padding: $mol_gap.block,
            },
            flex: {
                grow: 1
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
                top: '50%',
                right: $mol_gap.space,
                transform: 'translateY(-50%)'
            },
            Heatmap_color: {
                width: '1rem',
                height: '1rem',
                margin: '1px'
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
//visavis/plot/cube/cube.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $visavis_plot_phase extends $mol_book2 {
        plot_raw() {
            const obj = new this.$.$visavis_plot_raw();
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
        sub() {
            return [
                this.Label(),
                this.Root()
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
        data() {
            return {};
        }
        layout() {
            return {};
        }
        subscribe_events() {
            return null;
        }
        mousemove() {
            return null;
        }
        Root() {
            const obj = new this.$.$visavis_plotly();
            obj.data = () => this.data();
            obj.layout = () => this.layout();
            obj.subscribe_events = () => this.subscribe_events();
            obj.event = () => ({
                mousemove: this.mousemove()
            });
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $visavis_plot_phase.prototype, "plot_raw", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_phase.prototype, "label", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_phase.prototype, "Label", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_phase.prototype, "Root", null);
    $.$visavis_plot_phase = $visavis_plot_phase;
})($ || ($ = {}));
//visavis/plot/phase/-view.tree/phase.view.tree.ts
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
        const $visavis_plot_phase_rect_json = $mol_data_record({
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
        class $visavis_plot_phase extends $.$visavis_plot_phase {
            json() {
                return $visavis_plot_phase_rect_json(this.plot_raw().json());
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
                const canvas = this.Root().dom_node().firstChild;
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
            data() {
                const { datamock } = this.is_triangle() ? this.triangle() : this.rectangle();
                return datamock;
            }
            layout() {
                const { layout } = this.is_triangle() ? this.triangle() : this.rectangle();
                return layout;
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
        ], $visavis_plot_phase.prototype, "layout_shapes", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_phase.prototype, "annotations", null);
        __decorate([
            $mol_action
        ], $visavis_plot_phase.prototype, "subscribe_events", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_phase.prototype, "data", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_phase.prototype, "layout", null);
        $$.$visavis_plot_phase = $visavis_plot_phase;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/plot/phase/phase.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("visavis/plot/phase/phase.view.css", "path{pointer-events:painted;}\ng{pointer-events:painted;}\n");
})($ || ($ = {}));
//visavis/plot/phase/-css/phase.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($visavis_plot_phase, {
            Label: {
                position: 'absolute',
                zIndex: 2,
            }
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/plot/phase/phase.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $visavis_plot_bar extends $visavis_plotly {
        plot_raw() {
            const obj = new this.$.$visavis_plot_raw();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $visavis_plot_bar.prototype, "plot_raw", null);
    $.$visavis_plot_bar = $visavis_plot_bar;
})($ || ($ = {}));
//visavis/plot/bar/-view.tree/bar.view.tree.ts
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
        $$.$visavis_plot_bar_json = $mol_data_record({
            payload: Payload,
            payload2: $mol_data_optional(Payload),
        });
        class $visavis_plot_bar extends $.$visavis_plot_bar {
            json() {
                return $$.$visavis_plot_bar_json(this.plot_raw().json());
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
        ], $visavis_plot_bar.prototype, "subscribe_events", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_bar.prototype, "layout", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_bar.prototype, "data", null);
        $$.$visavis_plot_bar = $visavis_plot_bar;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/plot/bar/bar.view.ts
;
"use strict";
var $;
(function ($) {
    class $visavis_plot_discovery extends $mol_view {
        plot_raw() {
            const obj = new this.$.$visavis_plot_raw();
            return obj;
        }
        show_setup() {
            return true;
        }
        sub() {
            return [
                this.Plot(),
                this.Setup()
            ];
        }
        data() {
            return {};
        }
        layout() {
            return {};
        }
        subscribe_events() {
            return null;
        }
        Plot() {
            const obj = new this.$.$visavis_plotly();
            obj.data = () => this.data();
            obj.layout = () => this.layout();
            obj.subscribe_events = () => this.subscribe_events();
            return obj;
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
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Elementals()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $visavis_plot_discovery.prototype, "plot_raw", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_discovery.prototype, "Plot", null);
    __decorate([
        $mol_mem_key
    ], $visavis_plot_discovery.prototype, "elemental_checked", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_discovery.prototype, "Elementals_check", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_discovery.prototype, "Elementals", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_discovery.prototype, "Setup", null);
    $.$visavis_plot_discovery = $visavis_plot_discovery;
})($ || ($ = {}));
//visavis/plot/discovery/-view.tree/discovery.view.tree.ts
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
        $$.$visavis_plot_discovery_json = $mol_data_record({
            payload: Payload,
            answerto: $mol_data_string,
        });
        function discover(elementals_on, first, second) {
            const mlPca = $visavis_lib.pca();
            if (!mlPca)
                return $mol_fail(new $mol_data_error('Sorry, your web-browser is too old for this task'));
            let given_separation = 0;
            const elements_data = (element_ids) => {
                const prop_array = [];
                const label_parts = [];
                element_ids.forEach(element_num => {
                    const props = elementals_on.map(prop_name => $visavis_elements_list.element_by_num(element_num)[prop_name]);
                    const name = $visavis_elements_list.element_by_num(element_num).name;
                    prop_array.push(...props);
                    label_parts.push(name);
                });
                const label = label_parts.filter(x => x).join('-');
                return { prop_array, label };
            };
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
        class $visavis_plot_discovery extends $.$visavis_plot_discovery {
            sub() {
                return [this.Plot(), ...(this.show_setup() ? [this.Setup()] : [])];
            }
            json() {
                return $$.$visavis_plot_discovery_json(this.plot_raw().json());
            }
            elementals_dict() {
                return $visavis_elements_list.prop_names();
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
        ], $visavis_plot_discovery.prototype, "subscribe_events", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_discovery.prototype, "layout", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_discovery.prototype, "elementals_on", null);
        __decorate([
            $mol_mem_key
        ], $visavis_plot_discovery.prototype, "elemental_checked", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_discovery.prototype, "data", null);
        $$.$visavis_plot_discovery = $visavis_plot_discovery;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/plot/discovery/discovery.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($visavis_plot_discovery, {
            Setup: {
                flex: {
                    basis: '20rem',
                    shrink: 0,
                },
                alignItems: 'flex-start',
                padding: $mol_gap.block,
            },
            flex: {
                grow: 1
            }
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/plot/discovery/discovery.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $visavis_plot_eigen extends $visavis_plotly {
        plot_raw() {
            const obj = new this.$.$visavis_plot_raw();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $visavis_plot_eigen.prototype, "plot_raw", null);
    $.$visavis_plot_eigen = $visavis_plot_eigen;
})($ || ($ = {}));
//visavis/plot/eigen/-view.tree/eigen.view.tree.ts
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
        $$.$visavis_plot_eigen_json = $mol_data_record({
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
        class $visavis_plot_eigen extends $.$visavis_plot_eigen {
            json() {
                return $$.$visavis_plot_eigen_json(this.plot_raw().json());
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
        ], $visavis_plot_eigen.prototype, "bands_matrix", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_eigen.prototype, "dos_matrix", null);
        __decorate([
            $mol_action
        ], $visavis_plot_eigen.prototype, "subscribe_events", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_eigen.prototype, "data", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_eigen.prototype, "layout", null);
        $$.$visavis_plot_eigen = $visavis_plot_eigen;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/plot/eigen/eigen.view.ts
;
"use strict";
var $;
(function ($) {
    class $visavis_plot_pie extends $visavis_plotly {
        plot_raw() {
            const obj = new this.$.$visavis_plot_raw();
            return obj;
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
    }
    __decorate([
        $mol_mem
    ], $visavis_plot_pie.prototype, "plot_raw", null);
    $.$visavis_plot_pie = $visavis_plot_pie;
})($ || ($ = {}));
//visavis/plot/pie/-view.tree/pie.view.tree.ts
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
        $$.$visavis_plot_pie_json = $mol_data_record({
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
        class $visavis_plot_pie extends $.$visavis_plot_pie {
            json() {
                return $$.$visavis_plot_pie_json(this.plot_raw().json());
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
        ], $visavis_plot_pie.prototype, "subscribe_events", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_pie.prototype, "layout", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_pie.prototype, "xy_domains", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_pie.prototype, "enter_metrics", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_pie.prototype, "tot_count", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_pie.prototype, "data", null);
        $$.$visavis_plot_pie = $visavis_plot_pie;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/plot/pie/pie.view.ts
;
"use strict";
var $;
(function ($) {
    class $visavis_plot_scatter extends $visavis_plotly {
        plot_raw() {
            const obj = new this.$.$visavis_plot_raw();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $visavis_plot_scatter.prototype, "plot_raw", null);
    $.$visavis_plot_scatter = $visavis_plot_scatter;
})($ || ($ = {}));
//visavis/plot/scatter/-view.tree/scatter.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$visavis_plot_scatter_json = $mol_data_record({
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
        class $visavis_plot_scatter extends $.$visavis_plot_scatter {
            json() {
                return $$.$visavis_plot_scatter_json(this.plot_raw().json());
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
        ], $visavis_plot_scatter.prototype, "subscribe_events", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_scatter.prototype, "p_data", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_scatter.prototype, "t_data", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_scatter.prototype, "p_data_sum", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_scatter.prototype, "t_data_sum", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_scatter.prototype, "x_data_type", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_scatter.prototype, "x_data", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_scatter.prototype, "x_title", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_scatter.prototype, "data", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_scatter.prototype, "layout", null);
        $$.$visavis_plot_scatter = $visavis_plot_scatter;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/plot/scatter/scatter.view.ts
;
"use strict";
var $;
(function ($) {
    class $visavis_plot_customscatter extends $visavis_plotly {
        plot_raw() {
            const obj = new this.$.$visavis_plot_raw();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $visavis_plot_customscatter.prototype, "plot_raw", null);
    $.$visavis_plot_customscatter = $visavis_plot_customscatter;
})($ || ($ = {}));
//visavis/plot/customscatter/-view.tree/customscatter.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$visavis_plot_customscatter_json = $mol_data_record({
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
        class $visavis_plot_customscatter extends $.$visavis_plot_customscatter {
            json() {
                return $$.$visavis_plot_customscatter_json(this.plot_raw().json());
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
        ], $visavis_plot_customscatter.prototype, "subscribe_events", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_customscatter.prototype, "layout", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_customscatter.prototype, "data", null);
        $$.$visavis_plot_customscatter = $visavis_plot_customscatter;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/plot/customscatter/customscatter.view.ts
;
"use strict";
var $;
(function ($) {
    class $visavis_plot_heatmap extends $visavis_plotly {
        plot_raw() {
            const obj = new this.$.$visavis_plot_raw();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $visavis_plot_heatmap.prototype, "plot_raw", null);
    $.$visavis_plot_heatmap = $visavis_plot_heatmap;
})($ || ($ = {}));
//visavis/plot/heatmap/-view.tree/heatmap.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $visavis_plot_heatmap extends $.$visavis_plot_heatmap {
            json() {
                return this.plot_raw().json();
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
        ], $visavis_plot_heatmap.prototype, "layout", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_heatmap.prototype, "data", null);
        $$.$visavis_plot_heatmap = $visavis_plot_heatmap;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/plot/heatmap/heatmap.view.ts
;
"use strict";
var $;
(function ($) {
    class $visavis_plot_graph extends $mol_view {
        plot_raw() {
            const obj = new this.$.$visavis_plot_raw();
            return obj;
        }
        sub() {
            return [
                this.Root()
            ];
        }
        draw() {
            return null;
        }
        Root() {
            const obj = new this.$.$mol_view();
            obj.render = () => this.draw();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $visavis_plot_graph.prototype, "plot_raw", null);
    __decorate([
        $mol_mem
    ], $visavis_plot_graph.prototype, "Root", null);
    $.$visavis_plot_graph = $visavis_plot_graph;
})($ || ($ = {}));
//visavis/plot/graph/-view.tree/graph.view.tree.ts
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
        $$.$visavis_plot_graph_json = $mol_data_record({
            error: $mol_data_nullable($mol_data_string),
            warning: $mol_data_nullable($mol_data_string),
            graph_rel: $mol_data_string,
            payload: $mol_data_array(Link),
        });
        class $visavis_plot_graph extends $.$visavis_plot_graph {
            json() {
                return $$.$visavis_plot_graph_json(this.plot_raw().json());
            }
            plot_title() {
                return this.plot_raw().id();
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
                const svg = d3.select('[visavis_plot_graph_root]').append('svg');
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
        ], $visavis_plot_graph.prototype, "json", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_graph.prototype, "data", null);
        __decorate([
            $mol_mem
        ], $visavis_plot_graph.prototype, "draw", null);
        $$.$visavis_plot_graph = $visavis_plot_graph;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/plot/graph/graph.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("visavis/plot/graph/graph.view.css", "[visavis_plot_graph_root] svg {\n\twidth: 100%;\n\theight: 100%;\n}\n\n[visavis_plot_graph_root] .edge {\n\tfill: none;\n\tstroke: #ddd;\n\tstroke-width: 1px;\n}\n\n[visavis_plot_graph_root] .edge.prel {\n\tstroke: #FE9A2E;\n}\n\n[visavis_plot_graph_root] .edge.hrel {\n\tstroke: #3e3f95;\n}\n\n[visavis_plot_graph_root] .edge.trel {\n\tstroke: #3e3f95;\n}\n\n[visavis_plot_graph_root] .edge.arel {\n\tstroke: #E36868;\n}\n\n[visavis_plot_graph_root] .edge.grel {\n\tstroke: #acc2b3;\n}\n\n[visavis_plot_graph_root] circle {\n\tcursor: move;\n\tfill: #ccc;\n}\n\n[visavis_plot_graph_root] circle.f {\n\tfill: #acc2b3;\n}\n\n[visavis_plot_graph_root] circle.p {\n\tfill: #FE9A2E;\n}\n\n[visavis_plot_graph_root] circle.h, circle.t {\n\tfill: #3e3f95;\n}\n\n[visavis_plot_graph_root] circle.a {\n\tfill: #E36868;\n}\n\n[visavis_plot_graph_root] text.micro {\n\tfont-size: 11px;\n\tletter-spacing: -0.5px;\n}\n\n[visavis_plot_graph_root] text.macro {\n\tfont-size: 14px;\n\tletter-spacing: 0.5px;\n}\n\n[visavis_plot_graph_root] text.captions {\n\tcursor: pointer;\n\tfill: #333;\n}\n\n[visavis_plot_graph_root] text.shadow {\n\tstroke: #fff;\n\tstroke-width: 3px;\n\tstroke-opacity: 0.8;\n}\n");
})($ || ($ = {}));
//visavis/plot/graph/-css/graph.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($.$visavis_plot_graph, {
            Root: {
                width: '100%',
                height: '100%',
            },
            flex: {
                grow: 1,
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/plot/graph/graph.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $visavis_plot extends $mol_ghost {
        plot_raw() {
            const obj = new this.$.$visavis_plot_raw();
            return obj;
        }
        show_setup() {
            return true;
        }
        plots() {
            return {
                matrix: this.Matrix(),
                plot3d: this.Cube(),
                pd: this.Phase(),
                bar: this.Bar(),
                discovery: this.Discovery(),
                eigenplot: this.Eigen(),
                pie: this.Pie(),
                scatter: this.Scatter(),
                customscatter: this.Customscatter(),
                heatmap: this.Heatmap(),
                graph: this.Graph()
            };
        }
        Matrix() {
            const obj = new this.$.$visavis_plot_matrix();
            obj.plot_raw = () => this.plot_raw();
            return obj;
        }
        Cube() {
            const obj = new this.$.$visavis_plot_cube();
            obj.plot_raw = () => this.plot_raw();
            return obj;
        }
        Phase() {
            const obj = new this.$.$visavis_plot_phase();
            obj.plot_raw = () => this.plot_raw();
            return obj;
        }
        Bar() {
            const obj = new this.$.$visavis_plot_bar();
            obj.plot_raw = () => this.plot_raw();
            return obj;
        }
        Discovery() {
            const obj = new this.$.$visavis_plot_discovery();
            obj.plot_raw = () => this.plot_raw();
            obj.show_setup = () => this.show_setup();
            return obj;
        }
        Eigen() {
            const obj = new this.$.$visavis_plot_eigen();
            obj.plot_raw = () => this.plot_raw();
            return obj;
        }
        Pie() {
            const obj = new this.$.$visavis_plot_pie();
            obj.plot_raw = () => this.plot_raw();
            return obj;
        }
        Scatter() {
            const obj = new this.$.$visavis_plot_scatter();
            obj.plot_raw = () => this.plot_raw();
            return obj;
        }
        Customscatter() {
            const obj = new this.$.$visavis_plot_customscatter();
            obj.plot_raw = () => this.plot_raw();
            return obj;
        }
        Heatmap() {
            const obj = new this.$.$visavis_plot_heatmap();
            obj.plot_raw = () => this.plot_raw();
            return obj;
        }
        Graph() {
            const obj = new this.$.$visavis_plot_graph();
            obj.plot_raw = () => this.plot_raw();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $visavis_plot.prototype, "plot_raw", null);
    __decorate([
        $mol_mem
    ], $visavis_plot.prototype, "Matrix", null);
    __decorate([
        $mol_mem
    ], $visavis_plot.prototype, "Cube", null);
    __decorate([
        $mol_mem
    ], $visavis_plot.prototype, "Phase", null);
    __decorate([
        $mol_mem
    ], $visavis_plot.prototype, "Bar", null);
    __decorate([
        $mol_mem
    ], $visavis_plot.prototype, "Discovery", null);
    __decorate([
        $mol_mem
    ], $visavis_plot.prototype, "Eigen", null);
    __decorate([
        $mol_mem
    ], $visavis_plot.prototype, "Pie", null);
    __decorate([
        $mol_mem
    ], $visavis_plot.prototype, "Scatter", null);
    __decorate([
        $mol_mem
    ], $visavis_plot.prototype, "Customscatter", null);
    __decorate([
        $mol_mem
    ], $visavis_plot.prototype, "Heatmap", null);
    __decorate([
        $mol_mem
    ], $visavis_plot.prototype, "Graph", null);
    $.$visavis_plot = $visavis_plot;
})($ || ($ = {}));
//visavis/plot/-view.tree/plot.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $visavis_plot extends $.$visavis_plot {
            Sub() {
                return this.plots()[this.plot_raw().type()];
            }
        }
        $$.$visavis_plot = $visavis_plot;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/plot/plot.view.ts
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
                this.Menu()
            ];
        }
        Plot_page(id) {
            const obj = new this.$.$mol_page();
            obj.title = () => this.plot_id(id);
            obj.body = () => [
                this.Plot_view(id)
            ];
            return obj;
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
        History_plot(id) {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Plot_link(id),
                this.Plot_drop(id)
            ];
            return obj;
        }
        history_rows() {
            return [
                this.History_plot("0")
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
        history_plot_raw(id) {
            return null;
        }
        Plot_view(id) {
            const obj = new this.$.$visavis_plot();
            obj.plot_raw = () => this.history_plot_raw(id);
            return obj;
        }
    }
    __decorate([
        $mol_mem_key
    ], $visavis_app.prototype, "Plot_page", null);
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
    ], $visavis_app.prototype, "History_plot", null);
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
    ], $visavis_app.prototype, "Plot_view", null);
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
                const plot_raw = $visavis_plot_raw_from_json(data, next[0].name);
                this.history_add(plot_raw);
            }
            history_add(plot_raw) {
                const duplicates = this.history_plot_ids().filter(id => id.replace(/\[\d+?\]/, '') === plot_raw.id());
                const count = Math.max(...duplicates.map(id => Number(id.match(/\[(\d+?)\]$/)?.[1] ?? 0)));
                const postfix = duplicates.length ? `[${count + 1}]` : '';
                plot_raw.id(`${plot_raw.id()}${postfix}`);
                this.history_plot_raw(plot_raw.id(), plot_raw);
                this.history_plot_ids([plot_raw.id(), ...this.history_plot_ids()]);
            }
            history_drop(id) {
                this.history_plot_raw(id, null);
                this.history_plot_ids(this.history_plot_ids().filter(plot_id => plot_id !== id));
            }
            history_plot_ids(next) {
                return this.$.$mol_state_local.value(`${this}.history_plots()`, next) ?? [];
            }
            history_plot_raw(id, next) {
                const json = this.$.$mol_state_local.value(`${this}.history_plot('${id}')`, next && next.data());
                return json ? new $visavis_plot_raw(json) : null;
            }
            history_rows() {
                return this.history_plot_ids().map((id) => this.History_plot(id));
            }
            plot_id(id) {
                return id;
            }
            plot_opened_id(next) {
                return this.$.$mol_state_arg.value('file', next) ?? '';
            }
            Plot_opened() {
                const id = this.plot_opened_id();
                if (!id)
                    return [];
                return [this.Plot_page(id)];
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
        ], $visavis_app.prototype, "history_plot_ids", null);
        __decorate([
            $mol_mem_key
        ], $visavis_app.prototype, "history_plot_raw", null);
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
        $mol_style_define($.$visavis_app, {
            Menu: {
                flex: {
                    basis: '25rem',
                    shrink: 0,
                },
                Body: {
                    padding: $mol_gap.block,
                },
                Foot: {
                    padding: $mol_gap.block,
                },
            },
            Plot_page: {
                flex: {
                    grow: 1,
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
export default $
//# sourceMappingURL=web.mjs.map
