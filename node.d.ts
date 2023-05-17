declare let _$_: {
    new (): {};
} & typeof globalThis;
declare class $ extends _$_ {
}
declare namespace $ {
    export type $ = typeof $$;
    export class $$ extends $ {
    }
    namespace $$ {
        type $$ = $;
    }
    export {};
}

declare namespace $ {
    const $mol_ambient_ref: unique symbol;
    type $mol_ambient_context = $;
    function $mol_ambient(this: $ | void, overrides: Partial<$>): $;
}

declare namespace $ {
    function $mol_delegate<Value extends object>(proto: Value, target: () => Value): Value;
}

declare namespace $ {
    const $mol_owning_map: WeakMap<any, any>;
    function $mol_owning_allow<Having>(having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_get<Having, Owner extends object>(having: Having, Owner?: {
        new (): Owner;
    }): Owner | null;
    function $mol_owning_check<Owner, Having>(owner: Owner, having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_catch<Owner, Having>(owner: Owner, having: Having): boolean;
}

declare namespace $ {
    function $mol_fail(error: any): never;
}

declare namespace $ {
    function $mol_fail_hidden(error: any): never;
}

declare namespace $ {
    type $mol_type_writable<T> = {
        -readonly [P in keyof T]: T[P];
    };
}

declare namespace $ {
    class $mol_object2 {
        static $: typeof $$;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: typeof $$;
        get $(): $;
        set $(next: $);
        static create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        static [Symbol.toPrimitive](): string;
        static toString(): string;
        destructor(): void;
        toString(): string;
        toJSON(): any;
    }
}

declare namespace $ {
    namespace $$ { }
    const $mol_object_field: unique symbol;
    class $mol_object extends $mol_object2 {
        static make<Instance>(this: {
            new (): Instance;
        }, config: Partial<Instance>): Instance;
    }
}

declare namespace $ {
    class $mol_window extends $mol_object {
        static size(): {
            width: number;
            height: number;
        };
    }
}

declare namespace $ {
    enum $mol_wire_cursor {
        stale = -1,
        doubt = -2,
        fresh = -3,
        final = -4
    }
}

declare namespace $ {
    class $mol_wire_pub extends Object {
        data: unknown[];
        static get [Symbol.species](): ArrayConstructor;
        protected sub_from: number;
        get sub_list(): readonly $mol_wire_sub[];
        get sub_empty(): boolean;
        sub_on(sub: $mol_wire_pub, pub_pos: number): number;
        sub_off(sub_pos: number): void;
        reap(): void;
        promote(): void;
        fresh(): void;
        complete(): void;
        emit(quant?: $mol_wire_cursor): void;
        peer_move(from_pos: number, to_pos: number): void;
        peer_repos(peer_pos: number, self_pos: number): void;
    }
}

declare namespace $ {
    interface $mol_wire_sub extends $mol_wire_pub {
        temp: boolean;
        track_on(): $mol_wire_sub | null;
        track_next(pub?: $mol_wire_pub): $mol_wire_pub | null;
        pub_off(pub_pos: number): void;
        track_cut(sub: $mol_wire_pub | null): void;
        track_off(sub: $mol_wire_pub | null): void;
        absorb(quant: $mol_wire_cursor): void;
        destructor(): void;
    }
}

declare namespace $ {
    let $mol_wire_auto_sub: $mol_wire_sub | null;
    function $mol_wire_auto(next?: $mol_wire_sub | null): $mol_wire_sub | null;
    const $mol_wire_affected: (number | $mol_wire_sub)[];
}

declare namespace $ {
    function $mol_dev_format_register(config: {
        header: (val: any, config: any) => any;
        hasBody: (val: any, config: any) => false;
    } | {
        header: (val: any, config: any) => any;
        hasBody: (val: any, config: any) => boolean;
        body: (val: any, config: any) => any;
    }): void;
    let $mol_dev_format_head: symbol;
    let $mol_dev_format_body: symbol;
    function $mol_dev_format_native(obj: any): any;
    function $mol_dev_format_auto(obj: any): any;
    function $mol_dev_format_element(element: string, style: object, ...content: any[]): any[];
    function $mol_dev_format_span(style: object, ...content: any[]): any[];
    let $mol_dev_format_div: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_ol: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_li: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_table: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_tr: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_td: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_accent: (...args: any[]) => any[];
    let $mol_dev_format_strong: (...args: any[]) => any[];
    let $mol_dev_format_string: (...args: any[]) => any[];
    let $mol_dev_format_shade: (...args: any[]) => any[];
    let $mol_dev_format_indent: (...args: any[]) => any[];
}

declare namespace $ {
    class $mol_wire_pub_sub extends $mol_wire_pub implements $mol_wire_sub {
        protected pub_from: number;
        protected cursor: $mol_wire_cursor;
        get temp(): boolean;
        get pub_list(): $mol_wire_pub[];
        track_on(): $mol_wire_sub | null;
        promote(): void;
        track_next(pub?: $mol_wire_pub): $mol_wire_pub | null;
        track_off(sub: $mol_wire_sub | null): void;
        pub_off(sub_pos: number): void;
        destructor(): void;
        track_cut(): void;
        complete(): void;
        complete_pubs(): void;
        absorb(quant?: $mol_wire_cursor): void;
        get pub_empty(): boolean;
    }
}

declare namespace $ {
    class $mol_after_timeout extends $mol_object2 {
        delay: number;
        task: () => void;
        id: any;
        constructor(delay: number, task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    class $mol_after_frame extends $mol_after_timeout {
        task: () => void;
        constructor(task: () => void);
    }
}

declare namespace $ {
    function $mol_promise_like(val: any): val is Promise<any>;
}

declare namespace $ {
    abstract class $mol_wire_fiber<Host, Args extends readonly unknown[], Result> extends $mol_wire_pub_sub {
        readonly task: (this: Host, ...args: Args) => Result;
        readonly host?: Host | undefined;
        static warm: boolean;
        static planning: Set<$mol_wire_fiber<any, any, any>>;
        static reaping: Set<$mol_wire_fiber<any, any, any>>;
        static plan_task: $mol_after_frame | null;
        static plan(): void;
        static sync(): void;
        [Symbol.toStringTag]: string;
        cache: Result | Error | Promise<Result | Error>;
        get args(): Args;
        result(): Result | undefined;
        field(): string;
        constructor(id: string, task: (this: Host, ...args: Args) => Result, host?: Host | undefined, args?: Args);
        plan(): void;
        reap(): void;
        toString(): string;
        toJSON(): string;
        get $(): any;
        emit(quant?: $mol_wire_cursor): void;
        fresh(): void;
        refresh(): void;
        abstract put(next: Result | Error | Promise<Result | Error>): Result | Error | Promise<Result | Error>;
        sync(): Awaited<Result>;
        async(): Promise<Result>;
    }
}

declare namespace $ {
    function $mol_func_name(this: $, func: Function): string;
    function $mol_func_name_from<Target extends Function>(target: Target, source: Function): Target;
}

declare namespace $ {
    function $mol_guid(length?: number, exists?: (id: string) => boolean): string;
}

declare namespace $ {
    const $mol_key_store: WeakMap<object, string>;
    function $mol_key<Value>(value: Value): string;
}

declare namespace $ {
    let $mol_compare_deep_cache: WeakMap<any, WeakMap<any, boolean>>;
    function $mol_compare_deep<Value>(left: Value, right: Value): boolean;
}

declare namespace $ {
    class $mol_wire_task<Host, Args extends readonly unknown[], Result> extends $mol_wire_fiber<Host, Args, Result> {
        static getter<Host, Args extends readonly unknown[], Result>(task: (this: Host, ...args: Args) => Result): (host: Host, args: Args) => $mol_wire_task<Host, Args, Result>;
        get temp(): boolean;
        complete(): void;
        put(next: Result | Error | Promise<Result | Error>): Error | Result | Promise<Error | Result>;
    }
}

declare namespace $ {
    function $mol_wire_method<Host extends object, Args extends readonly any[]>(host: Host, field: PropertyKey, descr?: TypedPropertyDescriptor<(...args: Args) => any>): {
        value: (this: Host, ...args: Args) => any;
        enumerable?: boolean | undefined;
        configurable?: boolean | undefined;
        writable?: boolean | undefined;
        get?: (() => (...args: Args) => any) | undefined;
        set?: ((value: (...args: Args) => any) => void) | undefined;
    };
}

declare namespace $ {
    type $mol_type_tail<Tuple extends readonly any[]> = ((...tail: Tuple) => any) extends ((head: any, ...tail: infer Tail) => any) ? Tail : never;
}

declare namespace $ {
    type $mol_type_foot<Tuple extends readonly any[]> = Tuple['length'] extends 0 ? never : Tuple[$mol_type_tail<Tuple>['length']];
}

declare namespace $ {
    function $mol_fail_catch(error: unknown): boolean;
}

declare namespace $ {
    function $mol_fail_log(error: unknown): boolean;
}

declare namespace $ {
    class $mol_wire_atom<Host, Args extends readonly unknown[], Result> extends $mol_wire_fiber<Host, Args, Result> {
        static solo<Host, Args extends readonly unknown[], Result>(host: Host, task: (this: Host, ...args: Args) => Result): $mol_wire_atom<Host, Args, Result>;
        static plex<Host, Args extends readonly unknown[], Result>(host: Host, task: (this: Host, ...args: Args) => Result, key: Args[0]): $mol_wire_atom<Host, Args, Result>;
        static watching: Set<$mol_wire_atom<any, any, any>>;
        static watcher: $mol_after_frame | null;
        static watch(): void;
        watch(): void;
        resync(args: Args): Error | Result | Promise<Error | Result>;
        once(): Awaited<Result>;
        channel(): ((next?: $mol_type_foot<Args>) => Awaited<Result>) & {
            atom: $mol_wire_atom<Host, Args, Result>;
        };
        destructor(): void;
        put(next: Result | Error | Promise<Result | Error>): Error | Result | Promise<Error | Result>;
    }
}

declare namespace $ {
    export function $mol_wire_solo<Args extends any[]>(host: object, field: string, descr?: TypedPropertyDescriptor<(...args: Args) => any>): TypedPropertyDescriptor<(...args: First_optional<Args>) => any>;
    type First_optional<Args extends any[]> = Args extends [] ? [] : [Args[0] | undefined, ...$mol_type_tail<Args>];
    export {};
}

declare namespace $ {
    function $mol_wire_plex<Args extends [any, ...any[]]>(host: object, field: string, descr?: TypedPropertyDescriptor<(...args: Args) => any>): {
        value: (this: typeof host, ...args: Args) => any;
        enumerable?: boolean | undefined;
        configurable?: boolean | undefined;
        writable?: boolean | undefined;
        get?: (() => (...args: Args) => any) | undefined;
        set?: ((value: (...args: Args) => any) => void) | undefined;
    };
}

declare namespace $ {
    let $mol_mem: typeof $mol_wire_solo;
    let $mol_mem_key: typeof $mol_wire_plex;
}

declare namespace $ {
    var $mol_dom_context: typeof globalThis;
}

interface $node {
    [key: string]: any;
}
declare var $node: $node;

declare namespace $ {
    type $mol_log3_event<Fields> = {
        [key in string]: unknown;
    } & {
        time?: string;
        place: unknown;
        message: string;
    } & Fields;
    type $mol_log3_logger<Fields, Res = void> = (this: $, event: $mol_log3_event<Fields>) => Res;
    let $mol_log3_come: $mol_log3_logger<{}>;
    let $mol_log3_done: $mol_log3_logger<{}>;
    let $mol_log3_fail: $mol_log3_logger<{}>;
    let $mol_log3_warn: $mol_log3_logger<{
        hint: string;
    }>;
    let $mol_log3_rise: $mol_log3_logger<{}>;
    let $mol_log3_area: $mol_log3_logger<{}, () => void>;
    function $mol_log3_area_lazy(this: $, event: $mol_log3_event<{}>): () => void;
    let $mol_log3_stack: (() => void)[];
}

declare namespace $ {
    class $mol_span extends $mol_object2 {
        readonly uri: string;
        readonly source: string;
        readonly row: number;
        readonly col: number;
        readonly length: number;
        constructor(uri: string, source: string, row: number, col: number, length: number);
        static unknown: $mol_span;
        static begin(uri: string, source?: string): $mol_span;
        static end(uri: string, source: string): $mol_span;
        static entire(uri: string, source: string): $mol_span;
        toString(): string;
        toJSON(): {
            uri: string;
            row: number;
            col: number;
            length: number;
        };
        error(message: string, Class?: ErrorConstructor): Error;
        span(row: number, col: number, length: number): $mol_span;
        after(length?: number): $mol_span;
        slice(begin: number, end?: number): $mol_span;
    }
}

declare namespace $ {
    function $mol_tree2_to_string(this: $, tree: $mol_tree2): string;
}

declare namespace $ {
    type $mol_tree2_path = Array<string | number | null>;
    type $mol_tree2_hack<Context> = (input: $mol_tree2, belt: $mol_tree2_belt<Context>, context: Context) => readonly $mol_tree2[];
    type $mol_tree2_belt<Context> = Record<string, $mol_tree2_hack<Context>>;
    class $mol_tree2 extends Object {
        readonly type: string;
        readonly value: string;
        readonly kids: readonly $mol_tree2[];
        readonly span: $mol_span;
        constructor(type: string, value: string, kids: readonly $mol_tree2[], span: $mol_span);
        static list(kids: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        list(kids: readonly $mol_tree2[]): $mol_tree2;
        static data(value: string, kids?: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        data(value: string, kids?: readonly $mol_tree2[]): $mol_tree2;
        static struct(type: string, kids?: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        struct(type: string, kids?: readonly $mol_tree2[]): $mol_tree2;
        clone(kids: readonly $mol_tree2[], span?: $mol_span): $mol_tree2;
        text(): string;
        static fromString(str: string, uri?: string): $mol_tree2;
        toString(): string;
        insert(value: $mol_tree2 | null, ...path: $mol_tree2_path): $mol_tree2;
        select(...path: $mol_tree2_path): $mol_tree2;
        filter(path: string[], value?: string): $mol_tree2;
        hack<Context extends {
            span?: $mol_span;
            [key: string]: unknown;
        } = {}>(belt: $mol_tree2_belt<Context>, context?: Context): $mol_tree2[];
        error(message: string, Class?: ErrorConstructor): Error;
    }
    class $mol_tree2_empty extends $mol_tree2 {
        constructor();
    }
}

declare namespace $ {
    class $mol_error_syntax extends SyntaxError {
        reason: string;
        line: string;
        span: $mol_span;
        constructor(reason: string, line: string, span: $mol_span);
    }
}

declare namespace $ {
    function $mol_tree2_from_string(this: $, str: string, uri?: string): $mol_tree2;
}

declare namespace $ {
    function $mol_tree2_from_json(json: any, span?: $mol_span): $mol_tree2;
}

declare namespace $ {
    class $mol_term_color {
        static reset: (str: string) => string;
        static bold: (str: string) => string;
        static italic: (str: string) => string;
        static underline: (str: string) => string;
        static inverse: (str: string) => string;
        static hidden: (str: string) => string;
        static strike: (str: string) => string;
        static gray: (str: string) => string;
        static red: (str: string) => string;
        static green: (str: string) => string;
        static yellow: (str: string) => string;
        static blue: (str: string) => string;
        static magenta: (str: string) => string;
        static cyan: (str: string) => string;
        static Gray: (str: string) => string;
        static Red: (str: string) => string;
        static Green: (str: string) => string;
        static Yellow: (str: string) => string;
        static Blue: (str: string) => string;
        static Magenta: (str: string) => string;
        static Cyan: (str: string) => string;
        static ansi(open: number, close: number): (str: string) => string;
    }
}

declare namespace $ {
    function $mol_log3_node_make(level: keyof Console, output: 'stdout' | 'stderr', type: string, color: (str: string) => string): (this: $, event: $mol_log3_event<{}>) => () => void;
}

declare namespace $ {
    function $mol_env(): Record<string, string | undefined>;
}

declare namespace $ {
}

/// <reference types="node" />
/// <reference types="node" />
declare namespace $ {
    function $mol_exec(this: $, dir: string, command: string, ...args: string[]): import("child_process").SpawnSyncReturns<Buffer>;
}

declare namespace $ {
}

declare namespace $ {
    class $mol_after_tick extends $mol_object2 {
        task: () => void;
        promise: any;
        cancelled: boolean;
        constructor(task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    class $mol_view_selection extends $mol_object {
        static focused(next?: Element[], notify?: 'notify'): Element[];
    }
}

declare namespace $ {
    class $mol_wrapper extends $mol_object2 {
        static wrap: (task: (...ags: any[]) => any) => (...ags: any[]) => any;
        static run<Result>(task: () => Result): Result;
        static func<Args extends any[], Result, Host = void>(func: (this: Host, ...args: Args) => Result): (this: Host, ...args: Args) => Result;
        static get class(): <Class extends new (...args: any[]) => any>(Class: Class) => Class;
        static get method(): (obj: object, name: PropertyKey, descr: PropertyDescriptor) => PropertyDescriptor;
        static get field(): <Host, Field extends keyof Host, Args extends any[], Result>(obj: Host, name: Field, descr: TypedPropertyDescriptor<Result>) => TypedPropertyDescriptor<Result>;
    }
}

declare namespace $ {
    class $mol_memo extends $mol_wrapper {
        static wrap<This extends object, Value>(task: (this: This, next?: Value) => Value): (this: This, next?: Value) => Value | undefined;
    }
}

declare namespace $ {
    function $mol_dom_qname(name: string): string;
}

declare namespace $ {
    function $mol_wire_probe<Value>(task: () => Value, def?: Value): Value | undefined;
}

declare namespace $ {
    function $mol_wire_watch(): void;
}

declare namespace $ {
    function $mol_wire_solid(): void;
}

declare namespace $ {
    function $mol_const<Value>(value: Value): {
        (): Value;
        '()': Value;
    };
}

declare namespace $ {
    function $mol_dom_render_attributes(el: Element, attrs: {
        [key: string]: string | number | boolean | null;
    }): void;
}

declare namespace $ {
    function $mol_wire_async<Host extends object>(obj: Host): (Host extends (...args: infer Args) => infer Res ? Res extends Promise<any> ? Host : (...args: Args) => Promise<Res> : {}) & { [key in keyof Host]: Host[key] extends (...args: infer Args_1) => infer Res_1 ? Res_1 extends Promise<any> ? Host[key] : (...args: Args_1) => Promise<Res_1> : Host[key]; };
}

declare namespace $ {
    function $mol_dom_render_events(el: Element, events: {
        [key: string]: (event: Event) => any;
    }, passive?: boolean): void;
}

declare namespace $ {
    function $mol_dom_render_styles(el: Element, styles: {
        [key: string]: string | number;
    }): void;
}

declare namespace $ {
    function $mol_dom_render_children(el: Element | DocumentFragment, childNodes: NodeList | Array<Node | string | null>): void;
}

declare namespace $ {
    function $mol_dom_render_fields(el: Element, fields: {
        [key: string]: any;
    }): void;
}

declare namespace $ {
    type $mol_type_keys_extract<Input, Upper> = {
        [Field in keyof Input]: unknown extends Input[Field] ? never : Input[Field] extends never ? never : Input[Field] extends Upper ? Field : never;
    }[keyof Input];
}

declare namespace $ {
    type $mol_type_pick<Input, Upper> = Pick<Input, $mol_type_keys_extract<Input, Upper>>;
}

declare namespace $ {
    function $mol_style_attach(id: string, text: string): HTMLStyleElement | null;
}

declare namespace $ {
    class $mol_decor<Value> {
        readonly value: Value;
        constructor(value: Value);
        prefix(): string;
        valueOf(): Value;
        postfix(): string;
        toString(): string;
    }
}

declare namespace $ {
    type $mol_style_unit_length = '%' | 'px' | 'cm' | 'mm' | 'Q' | 'in' | 'pc' | 'pt' | 'cap' | 'ch' | 'em' | 'rem' | 'ex' | 'ic' | 'lh' | 'rlh' | 'vh' | 'vw' | 'vi' | 'vb' | 'vmin' | 'vmax';
    type $mol_style_unit_angle = 'deg' | 'rad' | 'grad' | 'turn';
    type $mol_style_unit_time = 's' | 'ms';
    type $mol_style_unit_any = $mol_style_unit_length | $mol_style_unit_angle | $mol_style_unit_time;
    class $mol_style_unit<Literal extends $mol_style_unit_any> extends $mol_decor<number> {
        readonly literal: Literal;
        constructor(value: number, literal: Literal);
        postfix(): Literal;
        static per(value: number): `${number}%`;
        static px(value: number): `${number}px`;
        static mm(value: number): `${number}mm`;
        static cm(value: number): `${number}cm`;
        static Q(value: number): `${number}Q`;
        static in(value: number): `${number}in`;
        static pc(value: number): `${number}pc`;
        static pt(value: number): `${number}pt`;
        static cap(value: number): `${number}cap`;
        static ch(value: number): `${number}ch`;
        static em(value: number): `${number}em`;
        static rem(value: number): `${number}rem`;
        static ex(value: number): `${number}ex`;
        static ic(value: number): `${number}ic`;
        static lh(value: number): `${number}lh`;
        static rlh(value: number): `${number}rlh`;
        static vh(value: number): `${number}vh`;
        static vw(value: number): `${number}vw`;
        static vi(value: number): `${number}vi`;
        static vb(value: number): `${number}vb`;
        static vmin(value: number): `${number}vmin`;
        static vmax(value: number): `${number}vmax`;
        static deg(value: number): `${number}deg`;
        static rad(value: number): `${number}rad`;
        static grad(value: number): `${number}grad`;
        static turn(value: number): `${number}turn`;
        static s(value: number): `${number}s`;
        static ms(value: number): `${number}ms`;
    }
}

declare namespace $ {
    type $mol_style_func_name = 'calc' | 'hsla' | 'rgba' | 'var' | 'clamp' | 'url' | 'scale' | 'cubic-bezier';
    class $mol_style_func<Name extends $mol_style_func_name, Value = unknown> extends $mol_decor<Value> {
        readonly name: Name;
        constructor(name: Name, value: Value);
        prefix(): string;
        postfix(): string;
        static calc<Value>(value: Value): $mol_style_func<"calc", Value>;
        static vary<Name extends string>(name: Name): $mol_style_func<"var", Name>;
        static url<Href extends string>(href: Href): $mol_style_func<"url", string>;
        static hsla(hue: number, saturation: number, lightness: number, alpha: number): $mol_style_func<"hsla", (number | `${number}%`)[]>;
        static clamp(min: $mol_style_unit<any>, mid: $mol_style_unit<any>, max: $mol_style_unit<any>): $mol_style_func<"clamp", $mol_style_unit<any>[]>;
        static rgba(red: number, green: number, blue: number, alpha: number): $mol_style_func<"rgba", number[]>;
        static scale(zoom: number): $mol_style_func<"scale", number[]>;
        static cubic_bezier(x1: number, y1: number, x2: number, y2: number): $mol_style_func<"cubic-bezier", number[]>;
    }
}

declare namespace $ {
    const $mol_theme: {
        back: $mol_style_func<"var", "--mol_theme_back">;
        hover: $mol_style_func<"var", "--mol_theme_hover">;
        card: $mol_style_func<"var", "--mol_theme_card">;
        current: $mol_style_func<"var", "--mol_theme_current">;
        special: $mol_style_func<"var", "--mol_theme_special">;
        text: $mol_style_func<"var", "--mol_theme_text">;
        control: $mol_style_func<"var", "--mol_theme_control">;
        shade: $mol_style_func<"var", "--mol_theme_shade">;
        line: $mol_style_func<"var", "--mol_theme_line">;
        focus: $mol_style_func<"var", "--mol_theme_focus">;
        field: $mol_style_func<"var", "--mol_theme_field">;
        image: $mol_style_func<"var", "--mol_theme_image">;
    };
}

declare namespace $ {
}

declare namespace $ {
    let $mol_gap: {
        readonly block: $mol_style_func<"var", "--mol_gap_block">;
        readonly text: $mol_style_func<"var", "--mol_gap_text">;
        readonly round: $mol_style_func<"var", "--mol_gap_round">;
        readonly space: $mol_style_func<"var", "--mol_gap_space">;
        readonly blur: $mol_style_func<"var", "--mol_gap_blur">;
    };
}

declare namespace $ {
}

declare namespace $ {
    type $mol_view_content = $mol_view | Node | string | number | boolean;
    function $mol_view_visible_width(): number;
    function $mol_view_visible_height(): number;
    function $mol_view_state_key(suffix: string): string;
    class $mol_view extends $mol_object {
        static Root<This extends typeof $mol_view>(this: This, id: number): InstanceType<This>;
        autorun(): void;
        static autobind(): void;
        title(): string;
        focused(next?: boolean): boolean;
        state_key(suffix?: string): string;
        dom_name(): string;
        dom_name_space(): string;
        sub(): readonly (string | number | boolean | $mol_view | Node)[];
        sub_visible(): readonly (string | number | boolean | $mol_view | Node)[];
        minimal_width(): number;
        maximal_width(): number;
        minimal_height(): number;
        static watchers: Set<$mol_view>;
        view_rect(): {
            width: number;
            height: number;
            left: number;
            right: number;
            top: number;
            bottom: number;
        } | null;
        dom_id(): string;
        dom_node(next?: Element): Element;
        dom_final(): Element | undefined;
        dom_tree(next?: Element): Element;
        dom_node_actual(): Element;
        auto(): any;
        render(): void;
        static view_classes(): (typeof $mol_view)[];
        static _view_names?: Map<string, string[]>;
        static view_names(suffix: string): string[];
        view_names_owned(): string[];
        view_names(): Set<string>;
        attr_static(): {
            [key: string]: string | number | boolean | null;
        };
        attr(): {};
        style_size(): {
            [key: string]: string | number;
        };
        style(): {
            [key: string]: string | number;
        };
        field(): {
            [key: string]: any;
        };
        event(): {
            [key: string]: (event: Event) => void;
        };
        plugins(): readonly $mol_view[];
        view_find(check: (path: $mol_view, text?: string) => boolean, path?: $mol_view[]): Generator<$mol_view[]>;
        force_render(path: Set<$mol_view>): void;
        ensure_visible(view: $mol_view, align?: ScrollLogicalPosition): void;
        bring(): void;
    }
    type $mol_view_all = $mol_type_pick<$, typeof $mol_view>;
}

declare namespace $ {
}

declare namespace $ {
    class $mol_plugin extends $mol_view {
        dom_node(next?: Element): Element;
        attr_static(): {
            [key: string]: string | number | boolean;
        };
        event(): {
            [key: string]: (event: Event) => void;
        };
        render(): void;
    }
}

declare namespace $ {
    class $mol_scroll extends $mol_view {
        scroll_top(val?: any): number;
        scroll_left(val?: any): number;
        field(): Record<string, any>;
        event(): Record<string, any>;
        tabindex(): number;
        event_scroll(event?: any): any;
    }
}

declare namespace $ {
    class $mol_dom_listener extends $mol_object {
        _node: any;
        _event: string;
        _handler: (event: any) => any;
        _config: boolean | {
            passive: boolean;
        };
        constructor(_node: any, _event: string, _handler: (event: any) => any, _config?: boolean | {
            passive: boolean;
        });
        destructor(): void;
    }
}

declare namespace $ {
    class $mol_print extends $mol_object {
        static before(): $mol_dom_listener;
        static after(): $mol_dom_listener;
        static active(next?: boolean): boolean;
    }
}

declare namespace $ {
    type $mol_type_override<Base, Over> = Omit<Base, keyof Over> & Over;
}

declare namespace $ {
    export type $mol_style_properties = Partial<$mol_type_override<CSSStyleDeclaration, Overrides>>;
    type Common = 'inherit' | 'initial' | 'unset' | 'revert' | 'revert-layer' | $mol_style_func<'var'>;
    type Color = 'aliceblue' | 'antiquewhite' | 'aqua' | 'aquamarine' | 'azure' | 'beige' | 'bisque' | 'black' | 'blanchedalmond' | 'blue' | 'blueviolet' | 'brown' | 'burlywood' | 'cadetblue' | 'chartreuse' | 'chocolate' | 'coral' | 'cornflowerblue' | 'cornsilk' | 'crimson' | 'cyan' | 'darkblue' | 'darkcyan' | 'darkgoldenrod' | 'darkgray' | 'darkgreen' | 'darkgrey' | 'darkkhaki' | 'darkmagenta' | 'darkolivegreen' | 'darkorange' | 'darkorchid' | 'darkred' | 'darksalmon' | 'darkseagreen' | 'darkslateblue' | 'darkslategrey' | 'darkturquoise' | 'darkviolet' | 'deeppink' | 'deepskyblue' | 'dimgray' | 'dimgrey' | 'dodgerblue' | 'firebrick' | 'floralwhite' | 'forestgreen' | 'fuchsia' | 'gainsboro' | 'ghostwhite' | 'gold' | 'goldenrod' | 'gray' | 'green' | 'greenyellow' | 'grey' | 'honeydew' | 'hotpink' | 'indianred' | 'indigo' | 'ivory' | 'khaki' | 'lavender' | 'lavenderblush' | 'lawngreen' | 'lemonchiffon' | 'lightblue' | 'lightcoral' | 'lightcyan' | 'lightgoldenrodyellow' | 'lightgray' | 'lightgreen' | 'lightgrey' | 'lightpink' | 'lightsalmon' | 'lightseagreen' | 'lightskyblue' | 'lightslategray' | 'lightslategrey' | 'lightsteelblue' | 'lightyellow' | 'lime' | 'limegreen' | 'linen' | 'magenta' | 'maroon' | 'mediumaquamarine' | 'mediumblue' | 'mediumorchid' | 'mediumpurple' | 'mediumseagreen' | 'mediumslateblue' | 'mediumspringgreen' | 'mediumturquoise' | 'mediumvioletred' | 'midnightblue' | 'mintcream' | 'mistyrose' | 'moccasin' | 'navajowhite' | 'navy' | 'oldlace' | 'olive' | 'olivedrab' | 'orange' | 'orangered' | 'orchid' | 'palegoldenrod' | 'palegreen' | 'paleturquoise' | 'palevioletred' | 'papayawhip' | 'peachpuff' | 'peru' | 'pink' | 'plum' | 'powderblue' | 'purple' | 'rebeccapurple' | 'red' | 'rosybrown' | 'royalblue' | 'saddlebrown' | 'salmon' | 'sandybrown' | 'seagreen' | 'seashell' | 'sienna' | 'silver' | 'skyblue' | 'slateblue' | 'slategray' | 'slategrey' | 'snow' | 'springgreen' | 'steelblue' | 'tan' | 'teal' | 'thistle' | 'tomato' | 'turquoise' | 'violet' | 'wheat' | 'white' | 'whitesmoke' | 'yellow' | 'yellowgreen' | 'transparent' | 'currentcolor' | $mol_style_func<'hsla' | 'rgba' | 'var'> | `#${string}`;
    type Length = 0 | `${number}${$mol_style_unit_length}` | $mol_style_func<'calc' | 'var' | 'clamp'>;
    type Size = 'auto' | 'max-content' | 'min-content' | 'fit-content' | Length | Common;
    type Directions<Value> = Value | readonly [Value, Value] | {
        top?: Value;
        right?: Value;
        bottom?: Value;
        left?: Value;
    };
    type Span_align = 'none' | 'start' | 'end' | 'center' | $mol_style_func<'var'>;
    type Snap_axis = 'x' | 'y' | 'block' | 'inline' | 'both' | $mol_style_func<'var'>;
    type Overflow = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto' | 'overlay' | Common;
    type ContainRule = 'size' | 'layout' | 'style' | 'paint' | $mol_style_func<'var'>;
    type Repeat = 'repeat-x' | 'repeat-y' | 'repeat' | 'space' | 'round' | 'no-repeat' | $mol_style_func<'var'>;
    type BG_size = Length | 'auto' | 'contain' | 'cover';
    interface Overrides {
        alignContent?: 'baseline' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'center' | 'normal' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | readonly ['first' | 'last', 'baseline'] | readonly ['safe' | 'unsafe', 'start' | 'end' | 'flex-start' | 'flex-end'] | Common;
        justifyContent?: 'start' | 'end' | 'flex-start' | 'flex-end' | 'left' | 'right' | 'space-between' | 'space-around' | 'space-evenly' | 'normal' | 'stretch' | 'center' | Common;
        gap?: Length;
        background?: 'none' | {
            color?: Color | Common;
            image?: readonly (readonly [$mol_style_func<'url'> | string & {}])[] | 'none' | Common;
            repeat?: Repeat | [Repeat, Repeat] | Common;
            position?: 'left' | 'right' | 'top' | 'bottom' | 'center' | Common;
            size?: (BG_size | [BG_size, BG_size])[];
        };
        backdropFilter: string | Common;
        box?: {
            shadow?: readonly {
                inset?: boolean;
                x: Length;
                y: Length;
                blur: Length;
                spread: Length;
                color: Color;
            }[] | 'none' | Common;
        };
        font?: {
            style?: 'normal' | 'italic' | Common;
            weight?: 'normal' | 'bold' | 'lighter' | 'bolder' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | Common;
            size?: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large' | 'xxx-large' | 'smaller' | 'larger' | Length | Common;
            family?: 'serif' | 'sans-serif' | 'monospace' | 'cursive' | 'fantasy' | 'system-ui' | 'ui-serif' | 'ui-sans-serif' | 'ui-monospace' | 'ui-rounded' | 'emoji' | 'math' | 'fangsong' | Common;
        };
        color?: Color | Common;
        display?: 'block' | 'inline' | 'run-in' | 'list-item' | 'none' | 'flow' | 'flow-root' | 'table' | 'flex' | 'grid' | 'contents' | 'table-row-group' | 'table-header-group' | 'table-footer-group' | 'table-column-group' | 'table-row' | 'table-cell' | 'table-column' | 'table-caption' | 'inline-block' | 'inline-table' | 'inline-flex' | 'inline-grid' | 'ruby' | 'ruby-base' | 'ruby-text' | 'ruby-base-container' | 'ruby-text-container' | Common;
        overflow?: Overflow | {
            x?: Overflow | Common;
            y?: Overflow | Common;
            anchor?: 'auto' | 'none' | Common;
        };
        contain?: 'none' | 'strict' | 'content' | ContainRule | readonly ContainRule[] | Common;
        whiteSpace?: 'normal' | 'nowrap' | 'break-spaces' | 'pre' | 'pre-wrap' | 'pre-line' | Common;
        webkitOverflowScrolling?: 'auto' | 'touch' | Common;
        scrollbar?: {
            color?: readonly [Color, Color] | 'auto' | Common;
            width?: 'auto' | 'thin' | 'none' | Common;
        };
        scroll?: {
            snap?: {
                type: 'none' | Snap_axis | readonly [Snap_axis, 'mandatory' | 'proximity'] | Common;
                stop: 'normal' | 'always' | Common;
                align: Span_align | readonly [Span_align, Span_align] | Common;
            };
            padding?: Directions<Length | 'auto'>;
        };
        width?: Size;
        minWidth?: Size;
        maxWidth?: Size;
        height?: Size;
        minHeight?: Size;
        maxHeight?: Size;
        margin?: Directions<Length | 'auto'>;
        padding?: Directions<Length | 'auto'>;
        position?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed' | Common;
        top?: Length | 'auto' | Common;
        right?: Length | 'auto' | Common;
        bottom?: Length | 'auto' | Common;
        left?: Length | 'auto' | Common;
        border?: {
            radius?: Length | [Length, Length];
            style?: 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | Common;
            color?: Directions<Color> | Common;
            width?: Directions<Length> | Common;
        };
        flex?: 'none' | 'auto' | {
            grow?: number | Common;
            shrink?: number | Common;
            basis?: Size | Common;
            direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | Common;
            wrap?: 'wrap' | 'nowrap' | 'wrap-reverse' | Common;
        };
        zIndex: number | Common;
        opacity: number | Common;
        aspectRatio: number | Common;
    }
    export {};
}

declare namespace $ {
    type $mol_style_pseudo_class = ':active' | ':any' | ':any-link' | ':checked' | ':default' | ':defined' | ':dir(rtl)' | ':dir(ltr)' | ':disabled' | ':empty' | ':enabled' | ':first' | ':first-child' | ':first-of-type' | ':fullscreen' | ':focus' | ':focus-visible' | ':focus-within' | ':hover' | ':indeterminate' | ':in-range' | ':invalid' | ':last-child' | ':last-of-type' | ':left' | ':link' | ':not()' | ':nth-child(even)' | ':nth-child(odd)' | ':nth-last-child(even)' | ':nth-last-child(odd)' | ':nth-of-type(even)' | ':nth-of-type(odd)' | ':nth-last-of-type(even)' | ':nth-last-of-type(odd)' | ':only-child' | ':only-of-type' | ':optional' | ':out-of-range' | ':placeholder-shown' | ':read-only' | ':read-write' | ':required' | ':right' | ':root' | ':scope' | ':target' | ':valid' | ':visited';
}

declare namespace $ {
    type $mol_style_pseudo_element = '::after' | '::before' | '::cue' | '::first-letter' | '::first-line' | '::selection' | '::slotted' | '::backdrop' | '::placeholder' | '::marker' | '::spelling-error' | '::grammar-error' | '::-webkit-calendar-picker-indicator' | '::-webkit-color-swatch' | '::-webkit-color-swatch-wrapper' | '::-webkit-details-marker' | '::-webkit-file-upload-button' | '::-webkit-image-inner-element' | '::-webkit-inner-spin-button' | '::-webkit-input-placeholder' | '::-webkit-input-speech-button' | '::-webkit-keygen-select' | '::-webkit-media-controls-panel' | '::-webkit-media-controls-timeline-container' | '::-webkit-media-slider-container' | '::-webkit-meter-bar' | '::-webkit-meter-even-less-good-value' | '::-webkit-meter-optimum-value' | '::-webkit-meter-suboptimal-value' | '::-webkit-progress-bar' | '::-webkit-progress-value' | '::-webkit-resizer' | '::-webkit-resizer:window-inactive' | '::-webkit-scrollbar' | '::-webkit-scrollbar-button' | '::-webkit-scrollbar-button:disabled' | '::-webkit-scrollbar-button:double-button:horizontal:end:decrement' | '::-webkit-scrollbar-button:double-button:horizontal:end:increment' | '::-webkit-scrollbar-button:double-button:horizontal:end:increment:corner-present' | '::-webkit-scrollbar-button:double-button:horizontal:start:decrement' | '::-webkit-scrollbar-button:double-button:horizontal:start:increment' | '::-webkit-scrollbar-button:double-button:vertical:end:decrement' | '::-webkit-scrollbar-button:double-button:vertical:end:increment' | '::-webkit-scrollbar-button:double-button:vertical:end:increment:corner-present' | '::-webkit-scrollbar-button:double-button:vertical:start:decrement' | '::-webkit-scrollbar-button:double-button:vertical:start:increment' | '::-webkit-scrollbar-button:end' | '::-webkit-scrollbar-button:end:decrement' | '::-webkit-scrollbar-button:end:increment' | '::-webkit-scrollbar-button:horizontal' | '::-webkit-scrollbar-button:horizontal:decrement' | '::-webkit-scrollbar-button:horizontal:decrement:active' | '::-webkit-scrollbar-button:horizontal:decrement:hover' | '::-webkit-scrollbar-button:horizontal:decrement:window-inactive' | '::-webkit-scrollbar-button:horizontal:end' | '::-webkit-scrollbar-button:horizontal:end:decrement' | '::-webkit-scrollbar-button:horizontal:end:increment' | '::-webkit-scrollbar-button:horizontal:end:increment:corner-present' | '::-webkit-scrollbar-button:horizontal:increment' | '::-webkit-scrollbar-button:horizontal:increment:active' | '::-webkit-scrollbar-button:horizontal:increment:hover' | '::-webkit-scrollbar-button:horizontal:increment:window-inactive' | '::-webkit-scrollbar-button:horizontal:start' | '::-webkit-scrollbar-button:horizontal:start:decrement' | '::-webkit-scrollbar-button:horizontal:start:increment' | '::-webkit-scrollbar-button:start' | '::-webkit-scrollbar-button:start:decrement' | '::-webkit-scrollbar-button:start:increment' | '::-webkit-scrollbar-button:vertical' | '::-webkit-scrollbar-button:vertical:decrement' | '::-webkit-scrollbar-button:vertical:decrement:active' | '::-webkit-scrollbar-button:vertical:decrement:hover' | '::-webkit-scrollbar-button:vertical:decrement:window-inactive' | '::-webkit-scrollbar-button:vertical:end' | '::-webkit-scrollbar-button:vertical:end:decrement' | '::-webkit-scrollbar-button:vertical:end:increment' | '::-webkit-scrollbar-button:vertical:end:increment:corner-present' | '::-webkit-scrollbar-button:vertical:increment' | '::-webkit-scrollbar-button:vertical:increment:active' | '::-webkit-scrollbar-button:vertical:increment:hover' | '::-webkit-scrollbar-button:vertical:increment:window-inactive' | '::-webkit-scrollbar-button:vertical:start' | '::-webkit-scrollbar-button:vertical:start:decrement' | '::-webkit-scrollbar-button:vertical:start:increment' | '::-webkit-scrollbar-corner' | '::-webkit-scrollbar-corner:window-inactive' | '::-webkit-scrollbar-thumb' | '::-webkit-scrollbar-thumb:horizontal' | '::-webkit-scrollbar-thumb:horizontal:active' | '::-webkit-scrollbar-thumb:horizontal:hover' | '::-webkit-scrollbar-thumb:horizontal:window-inactive' | '::-webkit-scrollbar-thumb:vertical' | '::-webkit-scrollbar-thumb:vertical:active' | '::-webkit-scrollbar-thumb:vertical:hover' | '::-webkit-scrollbar-thumb:vertical:window-inactive' | '::-webkit-scrollbar-track' | '::-webkit-scrollbar-track-piece' | '::-webkit-scrollbar-track-piece:disabled' | '::-webkit-scrollbar-track-piece:end' | '::-webkit-scrollbar-track-piece:horizontal:decrement' | '::-webkit-scrollbar-track-piece:horizontal:decrement:active' | '::-webkit-scrollbar-track-piece:horizontal:decrement:hover' | '::-webkit-scrollbar-track-piece:horizontal:end' | '::-webkit-scrollbar-track-piece:horizontal:end:corner-present' | '::-webkit-scrollbar-track-piece:horizontal:end:double-button' | '::-webkit-scrollbar-track-piece:horizontal:end:no-button' | '::-webkit-scrollbar-track-piece:horizontal:end:no-button:corner-present' | '::-webkit-scrollbar-track-piece:horizontal:end:single-button' | '::-webkit-scrollbar-track-piece:horizontal:increment' | '::-webkit-scrollbar-track-piece:horizontal:increment:active' | '::-webkit-scrollbar-track-piece:horizontal:increment:hover' | '::-webkit-scrollbar-track-piece:horizontal:start' | '::-webkit-scrollbar-track-piece:horizontal:start:double-button' | '::-webkit-scrollbar-track-piece:horizontal:start:no-button' | '::-webkit-scrollbar-track-piece:horizontal:start:single-button' | '::-webkit-scrollbar-track-piece:start' | '::-webkit-scrollbar-track-piece:vertical:decrement' | '::-webkit-scrollbar-track-piece:vertical:decrement:active' | '::-webkit-scrollbar-track-piece:vertical:decrement:hover' | '::-webkit-scrollbar-track-piece:vertical:end' | '::-webkit-scrollbar-track-piece:vertical:end:corner-present' | '::-webkit-scrollbar-track-piece:vertical:end:double-button' | '::-webkit-scrollbar-track-piece:vertical:end:no-button' | '::-webkit-scrollbar-track-piece:vertical:end:no-button:corner-present' | '::-webkit-scrollbar-track-piece:vertical:end:single-button' | '::-webkit-scrollbar-track-piece:vertical:increment' | '::-webkit-scrollbar-track-piece:vertical:increment:active' | '::-webkit-scrollbar-track-piece:vertical:increment:hover' | '::-webkit-scrollbar-track-piece:vertical:start' | '::-webkit-scrollbar-track-piece:vertical:start:double-button' | '::-webkit-scrollbar-track-piece:vertical:start:no-button' | '::-webkit-scrollbar-track-piece:vertical:start:single-button' | '::-webkit-scrollbar-track:disabled' | '::-webkit-scrollbar-track:horizontal' | '::-webkit-scrollbar-track:horizontal:disabled' | '::-webkit-scrollbar-track:horizontal:disabled:corner-present' | '::-webkit-scrollbar-track:vertical:disabled' | '::-webkit-scrollbar-track:vertical:disabled:corner-present' | '::-webkit-scrollbar:horizontal' | '::-webkit-scrollbar:horizontal:corner-present' | '::-webkit-scrollbar:horizontal:window-inactive' | '::-webkit-scrollbar:vertical' | '::-webkit-scrollbar:vertical:corner-present' | '::-webkit-scrollbar:vertical:window-inactive' | '::-webkit-search-cancel-button' | '::-webkit-search-decoration' | '::-webkit-search-results-button' | '::-webkit-search-results-decoration' | '::-webkit-slider-container' | '::-webkit-slider-runnable-track' | '::-webkit-slider-thumb' | '::-webkit-slider-thumb:disabled' | '::-webkit-slider-thumb:hover' | '::-webkit-textfield-decoration-container' | '::-webkit-validation-bubble' | '::-webkit-validation-bubble-arrow' | '::-webkit-validation-bubble-arrow-clipper' | '::-webkit-validation-bubble-heading' | '::-webkit-validation-bubble-message' | '::-webkit-validation-bubble-text-block';
}

declare namespace $ {
    type $mol_type_error<Message, Info = {}> = Message & {
        $mol_type_error: Info;
    };
}

declare namespace $ {
    type Attrs<View extends $mol_view, Config, Attrs = ReturnType<View['attr']>> = {
        [name in keyof Attrs]?: {
            [val in keyof Config[Extract<name, keyof Config>]]: $mol_style_guard<View, Config[Extract<name, keyof Config>][val]>;
        };
    };
    type Medias<View extends $mol_view, Config> = {
        [query in keyof Config]: $mol_style_guard<View, Config[query]>;
    };
    type Keys<View extends $mol_view> = '>' | '@' | keyof $mol_style_properties | $mol_style_pseudo_element | $mol_style_pseudo_class | $mol_type_keys_extract<View, () => $mol_view> | `$${string}`;
    export type $mol_style_guard<View extends $mol_view, Config> = {
        [key in Keys<View>]?: unknown;
    } & {
        [key in keyof Config]: key extends keyof $mol_style_properties ? $mol_style_properties[key] : key extends '>' | $mol_style_pseudo_class | $mol_style_pseudo_element ? $mol_style_guard<View, Config[key]> : key extends '@' ? Attrs<View, Config[key]> : key extends '@media' ? Medias<View, Config[key]> : key extends `--${string}` ? any : key extends keyof $ ? $mol_style_guard<InstanceType<Extract<$[key], typeof $mol_view>>, Config[key]> : key extends keyof View ? View[key] extends (id?: any) => infer Sub ? Sub extends $mol_view ? $mol_style_guard<Sub, Config[key]> : $mol_type_error<'Property returns non $mol_view', {
            Returns: Sub;
        }> : $mol_type_error<'Field is not a Property'> : key extends `$${string}` ? $mol_type_error<'Unknown View Class'> : $mol_type_error<'Unknown CSS Property'>;
    };
    export {};
}

declare namespace $ {
    function $mol_style_sheet<Component extends $mol_view, Config extends $mol_style_guard<Component, Config>>(Component: new () => Component, config0: Config): string;
}

declare namespace $ {
    function $mol_style_define<Component extends $mol_view, Config extends $mol_style_guard<Component, Config>>(Component: new () => Component, config: Config): HTMLStyleElement | null;
}

declare namespace $.$$ {
    class $mol_scroll extends $.$mol_scroll {
        scroll_top(next?: number, cache?: 'cache'): number;
        scroll_left(next?: number, cache?: 'cache'): number;
        event_scroll(next?: Event): void;
        minimal_height(): number;
        minimal_width(): number;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    class $mol_book2 extends $mol_scroll {
        menu_title(): string;
        sub(): readonly $mol_view[];
        minimal_width(): number;
        Placeholder(): $mol_view;
        Gap(id: any): $mol_view;
        pages(): readonly $mol_view[];
    }
}

declare namespace $ {
    let $mol_mem_cached: typeof $mol_wire_probe;
}

declare namespace $.$$ {
    class $mol_book2 extends $.$mol_book2 {
        title(): string;
        menu_title(): string;
        sub(): readonly $mol_view[];
        bring(): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_speck extends $mol_view {
        attr(): Record<string, any>;
        style(): Record<string, any>;
        sub(): readonly any[];
        theme(): string;
        value(): any;
    }
}

declare namespace $ {
    let $mol_layer: {
        readonly hover: $mol_style_func<"var", "--mol_layer_hover">;
        readonly focus: $mol_style_func<"var", "--mol_layer_focus">;
        readonly speck: $mol_style_func<"var", "--mol_layer_speck">;
        readonly float: $mol_style_func<"var", "--mol_layer_float">;
        readonly popup: $mol_style_func<"var", "--mol_layer_popup">;
    };
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {
    class $mol_button extends $mol_view {
        enabled(): boolean;
        click(event?: any): any;
        event_click(event?: any): any;
        event(): Record<string, any>;
        attr(): Record<string, any>;
        sub(): readonly $mol_view_content[];
        Speck(): $mol_speck;
        event_activate(event?: any): any;
        clicks(event?: any): any;
        event_key_press(event?: any): any;
        disabled(): boolean;
        tab_index(): number;
        hint(): string;
        hint_safe(): string;
        error(): string;
    }
}

declare namespace $ {
    enum $mol_keyboard_code {
        backspace = 8,
        tab = 9,
        enter = 13,
        shift = 16,
        ctrl = 17,
        alt = 18,
        pause = 19,
        capsLock = 20,
        escape = 27,
        space = 32,
        pageUp = 33,
        pageDown = 34,
        end = 35,
        home = 36,
        left = 37,
        up = 38,
        right = 39,
        down = 40,
        insert = 45,
        delete = 46,
        key0 = 48,
        key1 = 49,
        key2 = 50,
        key3 = 51,
        key4 = 52,
        key5 = 53,
        key6 = 54,
        key7 = 55,
        key8 = 56,
        key9 = 57,
        A = 65,
        B = 66,
        C = 67,
        D = 68,
        E = 69,
        F = 70,
        G = 71,
        H = 72,
        I = 73,
        J = 74,
        K = 75,
        L = 76,
        M = 77,
        N = 78,
        O = 79,
        P = 80,
        Q = 81,
        R = 82,
        S = 83,
        T = 84,
        U = 85,
        V = 86,
        W = 87,
        X = 88,
        Y = 89,
        Z = 90,
        metaLeft = 91,
        metaRight = 92,
        select = 93,
        numpad0 = 96,
        numpad1 = 97,
        numpad2 = 98,
        numpad3 = 99,
        numpad4 = 100,
        numpad5 = 101,
        numpad6 = 102,
        numpad7 = 103,
        numpad8 = 104,
        numpad9 = 105,
        multiply = 106,
        add = 107,
        subtract = 109,
        decimal = 110,
        divide = 111,
        F1 = 112,
        F2 = 113,
        F3 = 114,
        F4 = 115,
        F5 = 116,
        F6 = 117,
        F7 = 118,
        F8 = 119,
        F9 = 120,
        F10 = 121,
        F11 = 122,
        F12 = 123,
        numLock = 144,
        scrollLock = 145,
        semicolon = 186,
        equals = 187,
        comma = 188,
        dash = 189,
        period = 190,
        forwardSlash = 191,
        graveAccent = 192,
        bracketOpen = 219,
        slashBack = 220,
        slashBackLeft = 226,
        bracketClose = 221,
        quoteSingle = 222
    }
}

declare namespace $.$$ {
    class $mol_button extends $.$mol_button {
        status(next?: any[]): any[];
        disabled(): boolean;
        event_activate(next: Event): void;
        event_key_press(event: KeyboardEvent): void;
        tab_index(): number;
        error(): string;
        hint_safe(): string;
        sub_visible(): ($mol_view_content | $mol_speck)[];
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_button_typed extends $mol_button {
        minimal_height(): number;
        minimal_width(): number;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_button_minor extends $mol_button_typed {
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_svg extends $mol_view {
        dom_name(): string;
        dom_name_space(): string;
        font_size(): number;
        font_family(): string;
        style_size(): Record<string, any>;
    }
}

declare namespace $ {
    class $mol_state_time extends $mol_object {
        static task(precision: number, reset?: null): $mol_after_timeout | $mol_after_frame;
        static now(precision: number): number;
    }
}

declare namespace $.$$ {
    class $mol_svg extends $.$mol_svg {
        computed_style(): Record<string, any>;
        font_size(): number;
        font_family(): any;
    }
}

declare namespace $ {
    class $mol_svg_root extends $mol_svg {
        dom_name(): string;
        attr(): Record<string, any>;
        view_box(): string;
        aspect(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_svg_path extends $mol_svg {
        dom_name(): string;
        attr(): Record<string, any>;
        geometry(): string;
    }
}

declare namespace $ {
    class $mol_icon extends $mol_svg_root {
        view_box(): string;
        minimal_width(): number;
        minimal_height(): number;
        sub(): readonly any[];
        path(): string;
        Path(): $mol_svg_path;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_icon_upload extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_button_open extends $mol_button_minor {
        sub(): readonly any[];
        Icon(): $mol_icon_upload;
        files(next?: any): readonly any[];
        accept(): string;
        multiple(): boolean;
        Native(): $$.$mol_button_open_native;
    }
    class $mol_button_open_native extends $mol_view {
        dom_name(): string;
        files(next?: any): readonly any[];
        attr(): Record<string, any>;
        event(): Record<string, any>;
        accept(): string;
        multiple(): boolean;
        picked(next?: any): any;
    }
}

declare namespace $.$$ {
    class $mol_button_open_native extends $.$mol_button_open_native {
        dom_node(): HTMLInputElement;
        picked(): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_state_local<Value> extends $mol_object {
        static 'native()': Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
        static native(): Storage | {
            getItem(key: string): any;
            setItem(key: string, value: string): void;
            removeItem(key: string): void;
        };
        static changes(next?: StorageEvent): StorageEvent | undefined;
        static value<Value>(key: string, next?: Value | null): Value | null;
        prefix(): string;
        value(key: string, next?: Value): Value | null;
    }
}

declare namespace $ {
    type $mol_charset_encoding = 'utf8' | 'utf-16le' | 'utf-16be' | 'ibm866' | 'iso-8859-2' | 'iso-8859-3' | 'iso-8859-4' | 'iso-8859-5' | 'iso-8859-6' | 'iso-8859-7' | 'iso-8859-8' | 'iso-8859-8i' | 'iso-8859-10' | 'iso-8859-13' | 'iso-8859-14' | 'iso-8859-15' | 'iso-8859-16' | 'koi8-r' | 'koi8-u' | 'koi8-r' | 'macintosh' | 'windows-874' | 'windows-1250' | 'windows-1251' | 'windows-1252' | 'windows-1253' | 'windows-1254' | 'windows-1255' | 'windows-1256' | 'windows-1257' | 'windows-1258' | 'x-mac-cyrillic' | 'gbk' | 'gb18030' | 'hz-gb-2312' | 'big5' | 'euc-jp' | 'iso-2022-jp' | 'shift-jis' | 'euc-kr' | 'iso-2022-kr';
}

declare namespace $ {
    function $mol_charset_decode(buffer: BufferSource, encoding?: $mol_charset_encoding): string;
}

declare namespace $ {
    function $mol_charset_encode(value: string): Uint8Array;
}

declare namespace $ {
    type $mol_file_type = 'file' | 'dir' | 'link';
    interface $mol_file_stat {
        type: $mol_file_type;
        size: number;
        atime: Date;
        mtime: Date;
        ctime: Date;
    }
    class $mol_file_not_found extends Error {
    }
    abstract class $mol_file extends $mol_object {
        static absolute(path: string): $mol_file;
        static relative(path: string): $mol_file;
        static base: string;
        path(): string;
        parent(): $mol_file;
        abstract stat(next?: $mol_file_stat | null, virt?: 'virt'): $mol_file_stat | null;
        reset(): void;
        version(): string;
        abstract ensure(): void;
        watcher(): {
            destructor(): void;
        };
        exists(next?: boolean): boolean;
        type(): "" | $mol_file_type;
        name(): string;
        ext(): string;
        abstract buffer(next?: Uint8Array): Uint8Array;
        text(next?: string, virt?: 'virt'): string;
        abstract sub(): $mol_file[];
        abstract resolve(path: string): $mol_file;
        abstract relate(base?: $mol_file): string;
        abstract append(next: Uint8Array | string): void;
        find(include?: RegExp, exclude?: RegExp): $mol_file[];
        size(): number;
    }
}

declare namespace $ {
    function $mol_compare_array<Value extends ArrayLike<unknown>>(a: Value, b: Value): boolean;
}

declare namespace $ {
    class $mol_file_node extends $mol_file {
        static absolute(path: string): $mol_file_node;
        static relative(path: string): $mol_file_node;
        watcher(): {
            destructor(): void;
        };
        stat(next?: $mol_file_stat | null, virt?: 'virt'): $mol_file_stat | null;
        ensure(): void;
        buffer(next?: Uint8Array): Uint8Array;
        sub(): $mol_file[];
        resolve(path: string): $mol_file;
        relate(base?: $mol_file): string;
        append(next: Uint8Array | string): undefined;
    }
}

declare namespace $ {
    function $mol_wire_sync<Host extends object>(obj: Host): (Host extends (...args: infer Args) => infer Res ? Res extends Promise<infer Res2> ? (...args: Args) => Res2 : Host : {}) & { [key in keyof Host]: Host[key] extends (...args: infer Args_1) => Promise<infer Res_1> ? (...args: Args_1) => Res_1 : Host[key]; };
}

declare namespace $ {
    let $mol_action: typeof $mol_wire_method;
}

declare namespace $ {
    function $mol_dom_parse(text: string, type?: DOMParserSupportedType): Document;
}

declare namespace $ {
    class $mol_fetch_response extends $mol_object2 {
        readonly native: Response;
        constructor(native: Response);
        status(): "unknown" | "success" | "inform" | "redirect" | "wrong" | "failed";
        code(): number;
        message(): string;
        headers(): Headers;
        mime(): string | null;
        stream(): ReadableStream<Uint8Array> | null;
        text(): string;
        json(): unknown;
        buffer(): ArrayBuffer;
        xml(): Document;
        xhtml(): Document;
        html(): Document;
    }
    class $mol_fetch extends $mol_object2 {
        static request(input: RequestInfo, init?: RequestInit): Promise<Response> & {
            destructor: () => void;
        };
        static response(input: RequestInfo, init?: RequestInit): $mol_fetch_response;
        static success(input: RequestInfo, init?: RequestInit): $mol_fetch_response;
        static stream(input: RequestInfo, init?: RequestInit): ReadableStream<Uint8Array> | null;
        static text(input: RequestInfo, init?: RequestInit): string;
        static json(input: RequestInfo, init?: RequestInit): unknown;
        static buffer(input: RequestInfo, init?: RequestInit): ArrayBuffer;
        static xml(input: RequestInfo, init?: RequestInit): Document;
        static xhtml(input: RequestInfo, init?: RequestInit): Document;
        static html(input: RequestInfo, init?: RequestInit): Document;
    }
}

declare namespace $ {
    function $mol_huggingface_run(this: $, space: string, method: string | number, ...data: readonly any[]): readonly any[];
    function $mol_huggingface_rest(space: string, method: string, ...data: readonly any[]): readonly any[];
    function $mol_huggingface_ws(space: string, fn_index: number, ...data: readonly any[]): Promise<readonly any[]> & {
        destructor: () => void;
    };
}

declare namespace $ {
    function $hyoo_lingua_translate(this: $, lang: string, text: string): string;
}

declare namespace $ {
    interface $mol_locale_dict {
        [key: string]: string;
    }
    class $mol_locale extends $mol_object {
        static lang_default(): string;
        static lang(next?: string): string;
        static source(lang: string): any;
        static texts(lang: string, next?: $mol_locale_dict): $mol_locale_dict;
        static text(key: string): string;
        static warn(key: string): null;
    }
}

declare namespace $ {
    class $mol_link extends $mol_view {
        uri(): string;
        dom_name(): string;
        attr(): Record<string, any>;
        sub(): readonly $mol_view_content[];
        arg(): Record<string, any>;
        event(): Record<string, any>;
        uri_toggle(): string;
        hint(): string;
        hint_safe(): string;
        target(): string;
        file_name(): string;
        current(): boolean;
        event_click(event?: any): any;
        click(event?: any): any;
    }
}

declare namespace $ {
    class $mol_state_arg extends $mol_object {
        prefix: string;
        static prolog: string;
        static separator: string;
        static href(next?: string): string;
        static href_normal(): string;
        static dict(next?: {
            [key: string]: string | null;
        }): Readonly<{
            [key: string]: string;
        }>;
        static value(key: string, next?: string | null): string | null;
        static link(next: Record<string, string | null>): string;
        static make_link(next: Record<string, string | null>): string;
        static go(next: {
            [key: string]: string | null;
        }): void;
        constructor(prefix?: string);
        value(key: string, next?: string): string | null;
        sub(postfix: string): $mol_state_arg;
        link(next: Record<string, string | null>): string;
    }
}

declare namespace $.$$ {
    class $mol_link extends $.$mol_link {
        uri_toggle(): string;
        uri(): string;
        uri_off(): string;
        uri_native(): URL;
        current(): boolean;
        file_name(): string;
        minimal_height(): number;
        external(): boolean;
        target(): '_self' | '_blank' | '_top' | '_parent' | string;
        hint_safe(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_icon_delete extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_list extends $mol_view {
        render_visible_only(): boolean;
        render_over(): number;
        sub(): readonly $mol_view[];
        Empty(): $mol_view;
        Gap_before(): $mol_view;
        Gap_after(): $mol_view;
        view_window(): readonly any[];
        rows(): readonly $mol_view[];
        gap_before(): number;
        gap_after(): number;
    }
}

declare namespace $ {
    function $mol_support_css_overflow_anchor(this: $): boolean;
}

declare namespace $.$$ {
    class $mol_list extends $.$mol_list {
        sub(): readonly $mol_view[];
        render_visible_only(): boolean;
        view_window(next?: [number, number]): [number, number];
        gap_before(): number;
        gap_after(): number;
        sub_visible(): $mol_view[];
        minimal_height(): number;
        force_render(path: Set<$mol_view>): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_check extends $mol_button_minor {
        attr(): Record<string, any>;
        sub(): readonly $mol_view_content[];
        checked(next?: any): boolean;
        aria_checked(): string;
        aria_role(): string;
        Icon(): any;
        title(): string;
        Title(): $mol_view;
        label(): readonly any[];
    }
}

declare namespace $ {
    function $mol_maybe<Value>(value: Value | null | undefined): Value[];
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_check extends $.$mol_check {
        click(next?: Event): void;
        sub(): readonly $mol_view_content[];
        label(): readonly any[];
        aria_checked(): string;
    }
}

declare namespace $ {
    class $mol_check_list extends $mol_view {
        Option(id: any): $$.$mol_check;
        options(): Record<string, any>;
        keys(): readonly string[];
        sub(): readonly $mol_check[];
        option_checked(id: any, val?: any): boolean;
        option_title(id: any): string;
        option_label(id: any): readonly any[];
        enabled(): boolean;
        option_enabled(id: any): boolean;
        option_hint(id: any): string;
        items(): readonly $mol_check[];
    }
}

declare namespace $.$$ {
    class $mol_check_list extends $.$mol_check_list {
        options(): {
            [key: string]: string;
        };
        keys(): readonly string[];
        items(): $mol_check[];
        option_title(key: string): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_switch extends $mol_check_list {
        value(val?: any): string;
    }
}

declare namespace $ {
    class $mol_state_session<Value> extends $mol_object {
        static 'native()': Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
        static native(): Storage | {
            getItem(key: string): any;
            setItem(key: string, value: string): void;
            removeItem(key: string): void;
        };
        static value<Value>(key: string, next?: Value): Value;
        prefix(): string;
        value(key: string, next?: Value): Value;
    }
}

declare namespace $.$$ {
    class $mol_switch extends $.$mol_switch {
        value(next?: any): any;
        option_checked(key: string, next?: boolean): boolean;
    }
}

declare namespace $ {
    class $mol_deck extends $mol_list {
        items(): readonly $mol_view[];
        rows(): readonly $mol_view[];
        current(val?: any): string;
        switch_options(): Record<string, any>;
        Switch(): $$.$mol_switch;
        Content(): $mol_view;
    }
}

declare namespace $.$$ {
    class $mol_deck extends $.$mol_deck {
        current(next?: string): string;
        switch_options(): Record<string, string>;
        Content(): $mol_view;
    }
}

declare namespace $ {
    class $mol_icon_github_circle extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_link_source extends $mol_link {
        hint(): string;
        sub(): readonly any[];
        Icon(): $mol_icon_github_circle;
    }
}

declare namespace $ {
    class $mol_page extends $mol_view {
        dom_name(): string;
        field(): Record<string, any>;
        sub(): readonly any[];
        tabindex(): number;
        Logo(): any;
        title_content(): readonly any[];
        Title(): $mol_view;
        tools(): readonly $mol_view_content[];
        Tools(): $mol_view;
        head(): readonly any[];
        Head(): $mol_view;
        body(): readonly $mol_view_content[];
        body_scroll_top(val?: any): number;
        Body(): $$.$mol_scroll;
        foot(): readonly $mol_view[];
        Foot(): $mol_view;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    class $mol_store<Data> extends $mol_object2 {
        data_default?: Data | undefined;
        constructor(data_default?: Data | undefined);
        data(next?: Data): NonNullable<Data> | (Data & null);
        snapshot(next?: string): string;
        value<Key extends keyof Data>(key: Key, next?: Data[Key]): Data[Key] & {};
        selection<Key extends keyof Data>(key: Key, next?: number[]): number[];
        sub<Key extends keyof Data, Lens extends $mol_store<Data[Key]> = $mol_store<NonNullable<Data[Key]>>>(key: Key, lens?: Lens): Lens;
        reset(): void;
        active(): boolean;
    }
}

declare namespace $ {
    interface Plot {
        id: string;
        type: 'matrix' | 'plot3d' | 'pd' | string;
        json: unknown;
    }
    export class $visavis_plot extends $mol_store<Plot> {
        id(next?: string): string;
        type(): string;
        json(): {};
    }
    export {};
}

declare namespace $ {
    class $mol_icon_tick extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_check_box extends $mol_check {
        Icon(): $mol_icon_tick;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_labeler extends $mol_list {
        rows(): readonly any[];
        label(): readonly $mol_view_content[];
        Label(): $mol_view;
        content(): readonly any[];
        Content(): $mol_view;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $visavis_matrix extends $mol_book2 {
        plot(): $visavis_plot;
        size(): number;
        links_value_min(next?: any): number;
        links_value_max(next?: any): number;
        heatmap(next?: any): boolean;
        matrix(): readonly any[];
        heatmap_colors(): readonly any[];
        colorset(): readonly any[];
        order(): readonly number[];
        order_current(next?: any): string;
        plot_padding(): number;
        axis_width(): number;
        pages(): readonly any[];
        plot_title(): string;
        Root(): $$.$mol_svg;
        Heatmap_min(): $mol_view;
        heatmap_color(id: any): string;
        Heatmap_color(id: any): $mol_view;
        Heatmap_max(): $mol_view;
        heatmap_color_list(): readonly any[];
        Heatmap_legend(): $$.$mol_list;
        Side_right(): $$.$mol_scroll;
        plot_body(): readonly any[];
        draw(): any;
        Plot(): $mol_page;
        nonformers(next?: any): boolean;
        Nonformers(): $mol_check_box;
        Nonformers_label(): $mol_labeler;
        order_dict(): Record<string, any>;
        Order_switch(): $$.$mol_switch;
        Order_label(): $mol_labeler;
        Setup(): $mol_page;
    }
}

declare namespace $ {
    type $mol_data_value<Input = any, Output = any> = (val: Input) => Output;
}

declare namespace $ {
    type $mol_type_equals<A, B> = (<X>() => X extends A ? 1 : 2) extends (<X>() => X extends B ? 1 : 2) ? unknown : never;
}

declare namespace $ {
    type $mol_type_merge<Intersection> = Intersection extends (...a: any[]) => any ? Intersection : Intersection extends new (...a: any[]) => any ? Intersection : Intersection extends object ? $mol_type_merge_object<Intersection> extends Intersection ? unknown extends $mol_type_equals<$mol_type_merge_object<Intersection>, Intersection> ? Intersection : {
        [Key in keyof Intersection]: $mol_type_merge<Intersection[Key]>;
    } : Intersection : Intersection;
    type $mol_type_merge_object<Intersection> = {
        [Key in keyof Intersection]: Intersection[Key];
    };
}

declare namespace $ {
    type $mol_type_partial_undefined<Val> = $mol_type_merge<Partial<Val> & Pick<Val, {
        [Field in keyof Val]: undefined extends Val[Field] ? never : Field;
    }[keyof Val]>>;
}

declare namespace $ {
    function $mol_data_setup<Value extends $mol_data_value, Config = never>(value: Value, config: Config): Value & {
        config: Config;
        Value: ReturnType<Value>;
    };
}

declare namespace $ {
    function $mol_data_record<Sub extends Record<string, $mol_data_value>>(sub: Sub): ((val: $mol_type_merge<Partial<{ [key in keyof Sub]: Parameters<Sub[key]>[0]; }> & Pick<{ [key in keyof Sub]: Parameters<Sub[key]>[0]; }, ({ [key in keyof Sub]: Parameters<Sub[key]>[0]; } extends infer T ? { [Field in keyof T]: undefined extends { [key in keyof Sub]: Parameters<Sub[key]>[0]; }[Field] ? never : Field; } : never)[keyof Sub]>>) => Readonly<$mol_type_merge<Partial<{ [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }> & Pick<{ [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }, ({ [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; } extends infer T_1 ? { [Field_1 in keyof T_1]: undefined extends { [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }[Field_1] ? never : Field_1; } : never)[keyof Sub]>>>) & {
        config: Sub;
        Value: Readonly<$mol_type_merge<Partial<{ [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }> & Pick<{ [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }, ({ [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; } extends infer T_2 ? { [Field_1 in keyof T_2]: undefined extends { [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }[Field_1] ? never : Field_1; } : never)[keyof Sub]>>>;
    };
}

declare namespace $ {
    function $mol_diff_path<Item>(...paths: Item[][]): {
        prefix: Item[];
        suffix: Item[][];
    };
}

declare namespace $ {
    class $mol_error_mix extends Error {
        errors: Error[];
        constructor(message: string, ...errors: Error[]);
        toJSON(): string;
    }
}

declare namespace $ {
    class $mol_data_error extends $mol_error_mix {
    }
}

declare namespace $ {
    let $mol_data_string: (val: string) => string;
}

declare namespace $ {
    let $mol_data_number: (val: number) => number;
}

declare namespace $ {
    function $mol_data_optional<Sub extends $mol_data_value, Fallback extends undefined | (() => ReturnType<Sub>)>(sub: Sub, fallback?: Fallback): ((val: Parameters<Sub>[0] | undefined) => ReturnType<Sub> | (Fallback extends undefined ? undefined : ReturnType<Extract<Fallback, () => any>>)) & {
        config: {
            sub: Sub;
            fallback: Fallback | undefined;
        };
        Value: ReturnType<Sub> | (Fallback extends undefined ? undefined : ReturnType<Extract<Fallback, () => any>>);
    };
}

declare namespace $ {
    function $mol_data_array<Sub extends $mol_data_value>(sub: Sub): ((val: readonly Parameters<Sub>[0][]) => readonly ReturnType<Sub>[]) & {
        config: Sub;
        Value: readonly ReturnType<Sub>[];
    };
}

declare namespace $ {
    class $mol_import extends $mol_object2 {
        static module(uri: string): any;
        static module_async(uri: string): Promise<any>;
        static script(uri: string): any;
        static script_async(uri: string): Promise<any>;
        static style(uri: string): any;
        static style_async(uri: string): any;
    }
}

declare namespace $ {
    class $visavis_lib extends $mol_object2 {
        static plotly(): any;
        static pca(): any;
        static d3(): any;
    }
}

declare namespace $ {
    const $visavis_nonformer_pd_bin: number[][];
    const $visavis_nonformer_pd_tri: {
        x: number[];
        y: number[];
        z: number[];
        labels: string[];
    };
}

declare namespace $ {
    function $mol_coord_pack(high: number, low: number): number;
    function $mol_coord_high(pack: number): number;
    function $mol_coord_low(pack: number): number;
}

declare namespace $.$$ {
    type Matrix_cell = {
        x: number;
        y: number;
        z: number;
        cmt: string;
        cmp: number;
        nonformer: boolean;
    };
    export class $visavis_matrix extends $.$visavis_matrix {
        json(): Readonly<{
            payload: Readonly<{
                nodes: readonly Readonly<{
                    name: string;
                    num: number;
                    nump: number;
                    size: number;
                    rea: number;
                    rpp: number;
                    rion: number;
                    rcov: number;
                    rmet: number;
                    tmelt: number;
                    eneg: number;
                    count?: number | undefined;
                }>[];
                links: readonly Readonly<{
                    source: number;
                    target: number;
                    value: number;
                    cmt: string;
                    cmp?: number | undefined;
                }>[];
            }>;
        }>;
        nodes(): readonly Readonly<{
            name: string;
            num: number;
            nump: number;
            size: number;
            rea: number;
            rpp: number;
            rion: number;
            rcov: number;
            rmet: number;
            tmelt: number;
            eneg: number;
            count?: number | undefined;
        }>[];
        links(): Readonly<{
            source: number;
            target: number;
            value: number;
            cmt: string;
            cmp?: number | undefined;
        }>[];
        links_value_min(): number;
        links_value_max(): number;
        heatmap(): boolean;
        plot_title(): string;
        plot_body(): ($mol_scroll | $mol_svg)[];
        order(): any;
        matrix(): Matrix_cell[][];
        size(): number;
        opacity_scale(): any;
        opacity(index: number): any;
        color_heatmap(): any;
        heatmap_color(index: number): any;
        heatmap_color_list(): $mol_view[];
        color_heatmap_scale(): any;
        color(index: number, cmp: number): any;
        range(): any;
        svg_title_text(cell: Matrix_cell): string;
        cell_hovered(cell?: Matrix_cell | null): void;
        cell_selected(id: number, next?: boolean): boolean;
        cell_click(cell: Matrix_cell): void;
        draw_cells(node: SVGElement, row: Matrix_cell[]): void;
        draw(): void;
    }
    export {};
}

declare namespace $ {
}

declare namespace $.$$ {
}

declare namespace $ {
    class $mol_pop extends $mol_view {
        showed(val?: any): boolean;
        align_vert(): string;
        align_hor(): string;
        prefer(): string;
        sub(): readonly any[];
        sub_visible(): readonly any[];
        Anchor(): any;
        align(): string;
        bubble_content(): readonly $mol_view_content[];
        height_max(): number;
        Bubble(): $mol_pop_bubble;
    }
    class $mol_pop_bubble extends $mol_view {
        sub(): readonly $mol_view_content[];
        style(): Record<string, any>;
        attr(): Record<string, any>;
        content(): readonly $mol_view_content[];
        height_max(): number;
        align(): string;
    }
}

declare namespace $.$$ {
    class $mol_pop extends $.$mol_pop {
        showed(next?: boolean): boolean;
        sub_visible(): any[];
        height_max(): number;
        align(): string;
        align_vert(): "suspense" | "top" | "bottom";
        align_hor(): "suspense" | "left" | "right";
        View_port(): $mol_view;
        view_port(): {
            width: number;
            height: number;
            left: number;
            right: number;
            top: number;
            bottom: number;
        } | {
            left: number;
            top: number;
            width: number;
            height: number;
        };
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_pick extends $mol_pop {
        event(): Record<string, any>;
        Anchor(): $$.$mol_check;
        keydown(event?: any): any;
        trigger_enabled(): boolean;
        trigger_content(): readonly $mol_view_content[];
        hint(): string;
        Trigger(): $$.$mol_check;
    }
}

declare namespace $.$$ {
    class $mol_pick extends $.$mol_pick {
        keydown(event: KeyboardEvent): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_hotkey extends $mol_plugin {
        event(): Record<string, any>;
        key(): Record<string, any>;
        mod_ctrl(): boolean;
        mod_alt(): boolean;
        mod_shift(): boolean;
        keydown(event?: any): any;
    }
}

declare namespace $.$$ {
    class $mol_hotkey extends $.$mol_hotkey {
        key(): {
            [x: number]: ((event: KeyboardEvent) => void) | undefined;
            readonly backspace?: ((event: KeyboardEvent) => void) | undefined;
            readonly tab?: ((event: KeyboardEvent) => void) | undefined;
            readonly enter?: ((event: KeyboardEvent) => void) | undefined;
            readonly shift?: ((event: KeyboardEvent) => void) | undefined;
            readonly ctrl?: ((event: KeyboardEvent) => void) | undefined;
            readonly alt?: ((event: KeyboardEvent) => void) | undefined;
            readonly pause?: ((event: KeyboardEvent) => void) | undefined;
            readonly capsLock?: ((event: KeyboardEvent) => void) | undefined;
            readonly escape?: ((event: KeyboardEvent) => void) | undefined;
            readonly space?: ((event: KeyboardEvent) => void) | undefined;
            readonly pageUp?: ((event: KeyboardEvent) => void) | undefined;
            readonly pageDown?: ((event: KeyboardEvent) => void) | undefined;
            readonly end?: ((event: KeyboardEvent) => void) | undefined;
            readonly home?: ((event: KeyboardEvent) => void) | undefined;
            readonly left?: ((event: KeyboardEvent) => void) | undefined;
            readonly up?: ((event: KeyboardEvent) => void) | undefined;
            readonly right?: ((event: KeyboardEvent) => void) | undefined;
            readonly down?: ((event: KeyboardEvent) => void) | undefined;
            readonly insert?: ((event: KeyboardEvent) => void) | undefined;
            readonly delete?: ((event: KeyboardEvent) => void) | undefined;
            readonly key0?: ((event: KeyboardEvent) => void) | undefined;
            readonly key1?: ((event: KeyboardEvent) => void) | undefined;
            readonly key2?: ((event: KeyboardEvent) => void) | undefined;
            readonly key3?: ((event: KeyboardEvent) => void) | undefined;
            readonly key4?: ((event: KeyboardEvent) => void) | undefined;
            readonly key5?: ((event: KeyboardEvent) => void) | undefined;
            readonly key6?: ((event: KeyboardEvent) => void) | undefined;
            readonly key7?: ((event: KeyboardEvent) => void) | undefined;
            readonly key8?: ((event: KeyboardEvent) => void) | undefined;
            readonly key9?: ((event: KeyboardEvent) => void) | undefined;
            readonly A?: ((event: KeyboardEvent) => void) | undefined;
            readonly B?: ((event: KeyboardEvent) => void) | undefined;
            readonly C?: ((event: KeyboardEvent) => void) | undefined;
            readonly D?: ((event: KeyboardEvent) => void) | undefined;
            readonly E?: ((event: KeyboardEvent) => void) | undefined;
            readonly F?: ((event: KeyboardEvent) => void) | undefined;
            readonly G?: ((event: KeyboardEvent) => void) | undefined;
            readonly H?: ((event: KeyboardEvent) => void) | undefined;
            readonly I?: ((event: KeyboardEvent) => void) | undefined;
            readonly J?: ((event: KeyboardEvent) => void) | undefined;
            readonly K?: ((event: KeyboardEvent) => void) | undefined;
            readonly L?: ((event: KeyboardEvent) => void) | undefined;
            readonly M?: ((event: KeyboardEvent) => void) | undefined;
            readonly N?: ((event: KeyboardEvent) => void) | undefined;
            readonly O?: ((event: KeyboardEvent) => void) | undefined;
            readonly P?: ((event: KeyboardEvent) => void) | undefined;
            readonly Q?: ((event: KeyboardEvent) => void) | undefined;
            readonly R?: ((event: KeyboardEvent) => void) | undefined;
            readonly S?: ((event: KeyboardEvent) => void) | undefined;
            readonly T?: ((event: KeyboardEvent) => void) | undefined;
            readonly U?: ((event: KeyboardEvent) => void) | undefined;
            readonly V?: ((event: KeyboardEvent) => void) | undefined;
            readonly W?: ((event: KeyboardEvent) => void) | undefined;
            readonly X?: ((event: KeyboardEvent) => void) | undefined;
            readonly Y?: ((event: KeyboardEvent) => void) | undefined;
            readonly Z?: ((event: KeyboardEvent) => void) | undefined;
            readonly metaLeft?: ((event: KeyboardEvent) => void) | undefined;
            readonly metaRight?: ((event: KeyboardEvent) => void) | undefined;
            readonly select?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad0?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad1?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad2?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad3?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad4?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad5?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad6?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad7?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad8?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad9?: ((event: KeyboardEvent) => void) | undefined;
            readonly multiply?: ((event: KeyboardEvent) => void) | undefined;
            readonly add?: ((event: KeyboardEvent) => void) | undefined;
            readonly subtract?: ((event: KeyboardEvent) => void) | undefined;
            readonly decimal?: ((event: KeyboardEvent) => void) | undefined;
            readonly divide?: ((event: KeyboardEvent) => void) | undefined;
            readonly F1?: ((event: KeyboardEvent) => void) | undefined;
            readonly F2?: ((event: KeyboardEvent) => void) | undefined;
            readonly F3?: ((event: KeyboardEvent) => void) | undefined;
            readonly F4?: ((event: KeyboardEvent) => void) | undefined;
            readonly F5?: ((event: KeyboardEvent) => void) | undefined;
            readonly F6?: ((event: KeyboardEvent) => void) | undefined;
            readonly F7?: ((event: KeyboardEvent) => void) | undefined;
            readonly F8?: ((event: KeyboardEvent) => void) | undefined;
            readonly F9?: ((event: KeyboardEvent) => void) | undefined;
            readonly F10?: ((event: KeyboardEvent) => void) | undefined;
            readonly F11?: ((event: KeyboardEvent) => void) | undefined;
            readonly F12?: ((event: KeyboardEvent) => void) | undefined;
            readonly numLock?: ((event: KeyboardEvent) => void) | undefined;
            readonly scrollLock?: ((event: KeyboardEvent) => void) | undefined;
            readonly semicolon?: ((event: KeyboardEvent) => void) | undefined;
            readonly equals?: ((event: KeyboardEvent) => void) | undefined;
            readonly comma?: ((event: KeyboardEvent) => void) | undefined;
            readonly dash?: ((event: KeyboardEvent) => void) | undefined;
            readonly period?: ((event: KeyboardEvent) => void) | undefined;
            readonly forwardSlash?: ((event: KeyboardEvent) => void) | undefined;
            readonly graveAccent?: ((event: KeyboardEvent) => void) | undefined;
            readonly bracketOpen?: ((event: KeyboardEvent) => void) | undefined;
            readonly slashBack?: ((event: KeyboardEvent) => void) | undefined;
            readonly slashBackLeft?: ((event: KeyboardEvent) => void) | undefined;
            readonly bracketClose?: ((event: KeyboardEvent) => void) | undefined;
            readonly quoteSingle?: ((event: KeyboardEvent) => void) | undefined;
        };
        keydown(event?: KeyboardEvent): void;
    }
}

declare namespace $ {
    class $mol_string extends $mol_view {
        dom_name(): string;
        enabled(): boolean;
        minimal_height(): number;
        autocomplete(): boolean;
        selection(val?: any): readonly number[];
        auto(): readonly any[];
        field(): Record<string, any>;
        attr(): Record<string, any>;
        event(): Record<string, any>;
        plugins(): readonly any[];
        selection_watcher(): any;
        disabled(): boolean;
        value(val?: any): string;
        value_changed(val?: any): string;
        hint(): string;
        hint_visible(): string;
        spellcheck(): boolean;
        autocomplete_native(): string;
        selection_end(): number;
        selection_start(): number;
        keyboard(): string;
        enter(): string;
        length_max(): number;
        type(val?: any): string;
        event_change(event?: any): any;
        submit_with_ctrl(): boolean;
        submit(event?: any): any;
        Submit(): $$.$mol_hotkey;
    }
}

declare namespace $.$$ {
    class $mol_string extends $.$mol_string {
        event_change(next?: Event): void;
        hint_visible(): string;
        disabled(): boolean;
        autocomplete_native(): "on" | "off";
        selection_watcher(): $mol_dom_listener;
        selection_change(event: Event): void;
        selection_start(): number;
        selection_end(): number;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_icon_dots_vertical extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_paragraph extends $mol_view {
        line_height(): number;
        letter_width(): number;
        width_limit(): number;
        row_width(): number;
        sub(): readonly any[];
    }
}

declare namespace $.$$ {
    class $mol_paragraph extends $.$mol_paragraph {
        maximal_width(): number;
        width_limit(): number;
        minimal_width(): number;
        row_width(): number;
        minimal_height(): number;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_dimmer extends $mol_paragraph {
        haystack(): string;
        needle(): string;
        sub(): readonly $mol_view_content[];
        Low(id: any): $$.$mol_paragraph;
        High(id: any): $$.$mol_paragraph;
        parts(): readonly $mol_view_content[];
        string(id: any): string;
    }
}

declare namespace $ {
    type $mol_type_intersect<Union> = (Union extends any ? (_: Union) => void : never) extends ((_: infer Intersection) => void) ? Intersection : never;
}

declare namespace $ {
    type $mol_unicode_category = [$mol_unicode_category_binary] | ['General_Category', $mol_char_category_general] | ['Script', $mol_unicode_category_script] | ['Script_Extensions', $mol_unicode_category_script];
    type $mol_unicode_category_binary = 'ASCII' | 'ASCII_Hex_Digit' | 'Alphabetic' | 'Any' | 'Assigned' | 'Bidi_Control' | 'Bidi_Mirrored' | 'Case_Ignorable' | 'Cased' | 'Changes_When_Casefolded' | 'Changes_When_Casemapped' | 'Changes_When_Lowercased' | 'Changes_When_NFKC_Casefolded' | 'Changes_When_Titlecased' | 'Changes_When_Uppercased' | 'Dash' | 'Default_Ignorable_Code_Point' | 'Deprecated' | 'Diacritic' | 'Emoji' | 'Emoji_Component' | 'Emoji_Modifier' | 'Emoji_Modifier_Base' | 'Emoji_Presentation' | 'Extended_Pictographic' | 'Extender' | 'Grapheme_Base' | 'Grapheme_Extend' | 'Hex_Digit' | 'IDS_Binary_Operator' | 'IDS_Trinary_Operator' | 'ID_Continue' | 'ID_Start' | 'Ideographic' | 'Join_Control' | 'Logical_Order_Exception' | 'Lowercase' | 'Math' | 'Noncharacter_Code_Point' | 'Pattern_Syntax' | 'Pattern_White_Space' | 'Quotation_Mark' | 'Radical' | 'Regional_Indicator' | 'Sentence_Terminal' | 'Soft_Dotted' | 'Terminal_Punctuation' | 'Unified_Ideograph' | 'Uppercase' | 'Variation_Selector' | 'White_Space' | 'XID_Continue' | 'XID_Start';
    type $mol_char_category_general = 'Cased_Letter' | 'Close_Punctuation' | 'Connector_Punctuation' | 'Control' | 'Currency_Symbol' | 'Dash_Punctuation' | 'Decimal_Number' | 'Enclosing_Mark' | 'Final_Punctuation' | 'Format' | 'Initial_Punctuation' | 'Letter' | 'Letter_Number' | 'Line_Separator' | 'Lowercase_Letter' | 'Mark' | 'Math_Symbol' | 'Modifier_Letter' | 'Modifier_Symbol' | 'Nonspacing_Mark' | 'Number' | 'Open_Punctuation' | 'Other' | 'Other_Letter' | 'Other_Number' | 'Other_Punctuation' | 'Other_Symbol' | 'Paragraph_Separator' | 'Private_Use' | 'Punctuation' | 'Separator' | 'Space_Separator' | 'Spacing_Mark' | 'Surrogate' | 'Symbol' | 'Titlecase_Letter' | 'Unassigned' | 'Uppercase_Letter';
    type $mol_unicode_category_script = 'Adlam' | 'Ahom' | 'Anatolian_Hieroglyphs' | 'Arabic' | 'Armenian' | 'Avestan' | 'Balinese' | 'Bamum' | 'Bassa_Vah' | 'Batak' | 'Bengali' | 'Bhaiksuki' | 'Bopomofo' | 'Brahmi' | 'Braille' | 'Buginese' | 'Buhid' | 'Canadian_Aboriginal' | 'Carian' | 'Caucasian_Albanian' | 'Chakma' | 'Cham' | 'Chorasmian' | 'Cherokee' | 'Common' | 'Coptic' | 'Cuneiform' | 'Cypriot' | 'Cyrillic' | 'Deseret' | 'Devanagari' | 'Dives_Akuru' | 'Dogra' | 'Duployan' | 'Egyptian_Hieroglyphs' | 'Elbasan' | 'Elymaic' | 'Ethiopic' | 'Georgian' | 'Glagolitic' | 'Gothic' | 'Grantha' | 'Greek' | 'Gujarati' | 'Gunjala_Gondi' | 'Gurmukhi' | 'Han' | 'Hangul' | 'Hanifi_Rohingya' | 'Hanunoo' | 'Hatran' | 'Hebrew' | 'Hiragana' | 'Imperial_Aramaic' | 'Inherited' | 'Inscriptional_Pahlavi' | 'Inscriptional_Parthian' | 'Javanese' | 'Kaithi' | 'Kannada' | 'Katakana' | 'Kayah_Li' | 'Kharoshthi' | 'Khitan_Small_Script' | 'Khmer' | 'Khojki' | 'Khudawadi' | 'Lao' | 'Latin' | 'Lepcha' | 'Limbu' | 'Linear_A' | 'Linear_B' | 'Lisu' | 'Lycian' | 'Lydian' | 'Mahajani' | 'Makasar' | 'Malayalam' | 'Mandaic' | 'Manichaean' | 'Marchen' | 'Medefaidrin' | 'Masaram_Gondi' | 'Meetei_Mayek' | 'Mende_Kikakui' | 'Meroitic_Cursive' | 'Meroitic_Hieroglyphs' | 'Miao' | 'Modi' | 'Mongolian' | 'Mro' | 'Multani' | 'Myanmar' | 'Nabataean' | 'Nandinagari' | 'New_Tai_Lue' | 'Newa' | 'Nko' | 'Nushu' | 'Nyiakeng_Puachue_Hmong' | 'Ogham' | 'Ol_Chiki' | 'Old_Hungarian' | 'Old_Italic' | 'Old_North_Arabian' | 'Old_Permic' | 'Old_Persian' | 'Old_Sogdian' | 'Old_South_Arabian' | 'Old_Turkic' | 'Oriya' | 'Osage' | 'Osmanya' | 'Pahawh_Hmong' | 'Palmyrene' | 'Pau_Cin_Hau' | 'Phags_Pa' | 'Phoenician' | 'Psalter_Pahlavi' | 'Rejang' | 'Runic' | 'Samaritan' | 'Saurashtra' | 'Sharada' | 'Shavian' | 'Siddham' | 'SignWriting' | 'Sinhala' | 'Sogdian' | 'Sora_Sompeng' | 'Soyombo' | 'Sundanese' | 'Syloti_Nagri' | 'Syriac' | 'Tagalog' | 'Tagbanwa' | 'Tai_Le' | 'Tai_Tham' | 'Tai_Viet' | 'Takri' | 'Tamil' | 'Tangut' | 'Telugu' | 'Thaana' | 'Thai' | 'Tibetan' | 'Tifinagh' | 'Tirhuta' | 'Ugaritic' | 'Vai' | 'Wancho' | 'Warang_Citi' | 'Yezidi' | 'Yi' | 'Zanabazar_Square';
}

interface String {
    match<RE extends RegExp>(regexp: RE): ReturnType<RE[typeof Symbol.match]>;
    matchAll<RE extends RegExp>(regexp: RE): ReturnType<RE[typeof Symbol.matchAll]>;
}
declare namespace $ {
    type Groups_to_params<T> = {
        [P in keyof T]?: T[P] | boolean | undefined;
    };
    export type $mol_regexp_source = number | string | RegExp | {
        [key in string]: $mol_regexp_source;
    } | readonly [$mol_regexp_source, ...$mol_regexp_source[]];
    export type $mol_regexp_groups<Source extends $mol_regexp_source> = Source extends number ? {} : Source extends string ? {} : Source extends $mol_regexp_source[] ? $mol_type_merge<$mol_type_intersect<{
        [key in Extract<keyof Source, number>]: $mol_regexp_groups<Source[key]>;
    }[Extract<keyof Source, number>]>> : Source extends RegExp ? Record<string, string> extends NonNullable<NonNullable<ReturnType<Source['exec']>>['groups']> ? {} : NonNullable<NonNullable<ReturnType<Source['exec']>>['groups']> : Source extends {
        readonly [key in string]: $mol_regexp_source;
    } ? $mol_type_merge<$mol_type_intersect<{
        [key in keyof Source]: $mol_type_merge<$mol_type_override<{
            readonly [k in Extract<keyof Source, string>]: string;
        }, {
            readonly [k in key]: Source[key] extends string ? Source[key] : string;
        }> & $mol_regexp_groups<Source[key]>>;
    }[keyof Source]>> : never;
    export class $mol_regexp<Groups extends Record<string, string>> extends RegExp {
        readonly groups: (Extract<keyof Groups, string>)[];
        constructor(source: string, flags?: string, groups?: (Extract<keyof Groups, string>)[]);
        [Symbol.matchAll](str: string): IterableIterator<RegExpMatchArray & $mol_type_override<RegExpMatchArray, {
            groups?: {
                [key in keyof Groups]: string;
            };
        }>>;
        [Symbol.match](str: string): null | RegExpMatchArray;
        [Symbol.split](str: string): string[];
        test(str: string): boolean;
        exec(str: string): RegExpExecArray & $mol_type_override<RegExpExecArray, {
            groups?: {
                [key in keyof Groups]: string;
            };
        }> | null;
        generate(params: Groups_to_params<Groups>): string | null;
        get native(): RegExp;
        static repeat<Source extends $mol_regexp_source>(source: Source, min?: number, max?: number): $mol_regexp<$mol_regexp_groups<Source>>;
        static repeat_greedy<Source extends $mol_regexp_source>(source: Source, min?: number, max?: number): $mol_regexp<$mol_regexp_groups<Source>>;
        static vary<Sources extends readonly $mol_regexp_source[]>(sources: Sources): $mol_regexp<$mol_regexp_groups<Sources[number]>>;
        static optional<Source extends $mol_regexp_source>(source: Source): $mol_regexp<$mol_regexp_groups<Source>>;
        static force_after(source: $mol_regexp_source): $mol_regexp<Record<string, string>>;
        static forbid_after(source: $mol_regexp_source): $mol_regexp<Record<string, string>>;
        static from<Source extends $mol_regexp_source>(source: Source, { ignoreCase, multiline }?: Partial<Pick<RegExp, 'ignoreCase' | 'multiline'>>): $mol_regexp<$mol_regexp_groups<Source>>;
        static unicode_only(...category: $mol_unicode_category): $mol_regexp<Record<string, string>>;
        static unicode_except(...category: $mol_unicode_category): $mol_regexp<Record<string, string>>;
        static char_range(from: number, to: number): $mol_regexp<{}>;
        static char_only(...allowed: readonly [$mol_regexp_source, ...$mol_regexp_source[]]): $mol_regexp<{}>;
        static char_except(...forbidden: readonly [$mol_regexp_source, ...$mol_regexp_source[]]): $mol_regexp<{}>;
        static decimal_only: $mol_regexp<{}>;
        static decimal_except: $mol_regexp<{}>;
        static latin_only: $mol_regexp<{}>;
        static latin_except: $mol_regexp<{}>;
        static space_only: $mol_regexp<{}>;
        static space_except: $mol_regexp<{}>;
        static word_break_only: $mol_regexp<{}>;
        static word_break_except: $mol_regexp<{}>;
        static tab: $mol_regexp<{}>;
        static slash_back: $mol_regexp<{}>;
        static nul: $mol_regexp<{}>;
        static char_any: $mol_regexp<{}>;
        static begin: $mol_regexp<{}>;
        static end: $mol_regexp<{}>;
        static or: $mol_regexp<{}>;
        static line_end: $mol_regexp<{
            readonly win_end: string;
            readonly mac_end: string;
        }>;
    }
    export {};
}

declare namespace $.$$ {
    class $mol_dimmer extends $.$mol_dimmer {
        parts(): any[];
        strings(): string[];
        string(index: number): string;
        view_find(check: (path: $mol_view, text?: string) => boolean, path?: $mol_view[]): Generator<$mol_view[]>;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_nav extends $mol_plugin {
        cycle(val?: any): boolean;
        mod_ctrl(): boolean;
        mod_shift(): boolean;
        mod_alt(): boolean;
        keys_x(val?: any): readonly any[];
        keys_y(val?: any): readonly any[];
        current_x(val?: any): any;
        current_y(val?: any): any;
        event_up(event?: any): any;
        event_down(event?: any): any;
        event_left(event?: any): any;
        event_right(event?: any): any;
        event(): Record<string, any>;
        event_key(event?: any): any;
    }
}

declare namespace $.$$ {
    class $mol_nav extends $.$mol_nav {
        event_key(event?: KeyboardEvent): undefined;
        event_up(event?: KeyboardEvent): undefined;
        event_down(event?: KeyboardEvent): undefined;
        event_left(event?: KeyboardEvent): undefined;
        event_right(event?: KeyboardEvent): undefined;
        index_y(): number | null;
        index_x(): number | null;
    }
}

declare namespace $ {
    class $mol_select extends $mol_pick {
        dictionary(val?: any): Record<string, any>;
        options(): readonly string[];
        value(val?: any): string;
        option_label_default(): string;
        Option_row(id: any): $mol_button_minor;
        No_options(): $mol_view;
        plugins(): readonly any[];
        hint(): string;
        bubble_content(): readonly any[];
        Filter(): $$.$mol_string;
        Trigger_icon(): $mol_icon_dots_vertical;
        event_select(id: any, event?: any): any;
        option_label(id: any): string;
        filter_pattern(val?: any): string;
        Option_label(id: any): $$.$mol_dimmer;
        option_content(id: any): readonly any[];
        no_options_message(): string;
        nav_components(): readonly $mol_view[];
        option_focused(component?: any): any;
        nav_cycle(val?: any): boolean;
        Nav(): $$.$mol_nav;
        menu_content(): readonly $mol_view[];
        Menu(): $$.$mol_list;
        Bubble_pane(): $$.$mol_scroll;
        submit(event?: any): any;
        enabled(): boolean;
    }
}

declare namespace $ {
    function $mol_match_text<Variant>(query: string, values: (variant: Variant) => string[]): (variant: Variant) => boolean;
}

declare namespace $.$$ {
    class $mol_select extends $.$mol_select {
        filter_pattern(next?: string): string;
        open(): void;
        options(): readonly string[];
        options_filtered(): readonly string[];
        option_label(id: string): any;
        option_rows(): $mol_button_minor[];
        option_focused(component?: $mol_view): $mol_view | $mol_button_minor | $mol_string | null;
        event_select(id: string, event?: MouseEvent): void;
        nav_components(): ($mol_button_minor | $mol_string)[];
        trigger_content(): readonly $mol_view_content[];
        menu_content(): ($mol_view | $mol_button_minor)[];
    }
}

declare namespace $ {
}

declare namespace $ {
    class $visavis_cube extends $mol_book2 {
        plot(): $visavis_plot;
        heatmap(next?: any): boolean;
        order(id: any): readonly number[];
        order_current(next?: any): string;
        x_op(): boolean;
        y_op(): boolean;
        z_op(): boolean;
        x_sort(next?: any): string;
        y_sort(next?: any): string;
        z_sort(next?: any): string;
        colorset(): readonly any[];
        heatmap_colors(): readonly any[];
        pages(): readonly any[];
        plot_title(): string;
        Root(): $mol_view;
        value_min(): number;
        Heatmap_min(): $mol_view;
        heatmap_color(id: any): string;
        Heatmap_color(id: any): $mol_view;
        value_max(): number;
        Heatmap_max(): $mol_view;
        heatmap_color_list(): readonly any[];
        Heatmap_legend(): $$.$mol_list;
        Side_right(): $$.$mol_scroll;
        plot_body(): readonly any[];
        draw(): any;
        Plot(): $mol_page;
        nonformers(next?: any): boolean;
        Nonformers(): $mol_check_box;
        Nonformers_label(): $mol_labeler;
        order_dict(): Record<string, any>;
        X_order_select(): $$.$mol_select;
        X_order_label(): $mol_labeler;
        Y_order_select(): $$.$mol_select;
        Y_order_label(): $mol_labeler;
        Z_order_select(): $$.$mol_select;
        Z_order_label(): $mol_labeler;
        Setup(): $mol_page;
    }
}

declare namespace $ {
    let $mol_data_boolean: (val: boolean) => boolean;
}

declare namespace $ {
    function $mol_data_nullable<Sub extends $mol_data_value>(sub: Sub): ((val: Parameters<Sub>[0] | null) => ReturnType<Sub> | null) & {
        config: Sub;
        Value: ReturnType<Sub> | null;
    };
}

declare namespace $ {
    class $lib_d3 extends $mol_object2 {
        static all(): any;
    }
}

declare namespace $.$$ {
    const $visavis_element_prop: {
        readonly num: readonly [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95];
        readonly nump: readonly [0, 1, 112, 2, 8, 82, 88, 94, 100, 106, 113, 3, 9, 83, 89, 95, 101, 107, 114, 4, 10, 14, 46, 50, 54, 58, 62, 66, 70, 74, 78, 84, 90, 96, 102, 108, 115, 5, 11, 15, 47, 51, 55, 59, 63, 67, 71, 75, 79, 85, 91, 97, 103, 109, 116, 6, 12, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 86, 92, 98, 104, 110, 117, 7, 13, 17, 19, 21, 23, 25, 27, 29];
        readonly size: readonly [0, 0.040000098, 0.05525814, 0.32352134, 0.149871021, 0.15316946, 0.152079019, 0.147837836, 0.141252647, 0.130400994, 0.118123987, 0.578463822, 0.235527361, 0.222322819, 0.208407341, 0.19392461, 0.178988166, 0.160596861, 0.14201091, 0.692195698, 0.671411055, 0.64709144, 0.440998616, 0.425579654, 0.410235863, 0.394967358, 0.379774576, 0.364658122, 0.349618659, 0.334656835, 0.310912262, 0.287688252, 0.264934676, 0.242609734, 0.220678182, 0.195297025, 0.170450145, 0.832019702, 0.797564264, 0.762242103, 0.515950935, 0.494387183, 0.473421463, 0.452993466, 0.433052136, 0.413553912, 0.394461351, 0.375742041, 0.347395886, 0.319938571, 0.293280312, 0.267345197, 0.242068451, 0.213172397, 0.185071259, 0.910157427, 0.868793456, 0.828185801, 0.810462652, 0.793233638, 0.776484764, 0.760190637, 0.744322073, 0.728849599, 0.713745039, 0.698982175, 0.684536953, 0.670387461, 0.65651381, 0.642897972, 0.629523601, 0.616375866, 0.588840308, 0.562314966, 0.536696361, 0.51189659, 0.487840384, 0.464462811, 0.441707474, 0.419525064, 0.386690726, 0.355029594, 0.324425963, 0.294781292, 0.266010922, 0.233351806, 0.201712905, 1, 0.952025289, 0.905996701, 0.885161237, 0.864979518, 0.845420273, 0.826445343, 0.808015348, 0.790092251];
        readonly rea: readonly [0, 2.953092434, 2.137675759, 0.365119614, 0.788170962, 0.771198036, 0.776727701, 0.799010527, 0.836260342, 0.905851889, 0.999999998, 0.204202895, 0.501529786, 0.531317421, 0.56679379, 0.609123241, 0.659954172, 0.735531107, 0.831795156, 0.170651143, 0.175933932, 0.182546051, 0.267855686, 0.27756023, 0.28794164, 0.299072783, 0.311037111, 0.323930772, 0.337865225, 0.352970489, 0.379927077, 0.410597187, 0.445860802, 0.486888901, 0.535277144, 0.604842736, 0.693011946, 0.141972584, 0.148105917, 0.154969119, 0.228944225, 0.238930116, 0.249511262, 0.260763114, 0.272770822, 0.28563141, 0.299456427, 0.31437522, 0.340027017, 0.369208334, 0.402768213, 0.441840692, 0.487977621, 0.554124213, 0.63826219, 0.129784127, 0.135963256, 0.142629814, 0.145748835, 0.148914495, 0.1521266, 0.155387322, 0.158700099, 0.162069084, 0.165498855, 0.168994276, 0.172560424, 0.17620256, 0.179926127, 0.183736755, 0.187640284, 0.191642784, 0.200604451, 0.210067301, 0.22009463, 0.230757519, 0.242136549, 0.254323886, 0.267425828, 0.281565982, 0.305474062, 0.332715889, 0.364101522, 0.400717379, 0.444056906, 0.506205582, 0.58560451, 0.118123987, 0.124076522, 0.130380151, 0.133449119, 0.136562756, 0.139722208, 0.142930186, 0.146190276, 0.149506576];
        readonly rpp: readonly [0, 1.25, 0, 1.61, 1.08, 0.795, 0.64, 0.54, 0.465, 0.405, 0, 2.65, 2.03, 1.675, 1.42, 1.24, 1.1, 1.01, 0, 3.69, 3, 2.75, 2.58, 2.43, 2.44, 2.22, 2.11, 2.02, 2.18, 2.04, 1.88, 1.695, 1.56, 1.415, 1.285, 1.2, 0, 4.1, 3.21, 2.94, 2.825, 2.76, 2.72, 2.65, 2.605, 2.52, 2.45, 2.375, 2.215, 2.05, 1.88, 1.765, 1.67, 1.585, 0, 4.31, 3.402, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2.91, 2.79, 2.735, 2.68, 2.65, 2.628, 2.7, 2.66, 2.41, 2.235, 2.09, 1.997, 1.9, 1.83, 0, 4.37, 3.53, 0, 0, 0, 0, 0, 0, 0];
        readonly rion: readonly [0, 0, 0, 0.6, 0.3, 0.2, 0.15, 0.12, 0.1, 0.09, 0, 0.96, 0.63, 0.5, 0.42, 0.36, 0.32, 0.28, 0, 1.33, 0.96, 0.8, 0.68, 0.65, 0.62, 0.6, 0.59, 0.62, 0.59, 0.96, 0.78, 0.63, 0.53, 0.46, 0.41, 0.37, 0, 1.49, 1.11, 0.93, 0.8, 0.77, 0.75, 0.72, 0.69, 0.75, 0.85, 1.12, 0.93, 0.76, 0.65, 0.57, 0.51, 0.46, 0, 1.65, 1.26, 1.06, 1.05, 1.04, 1.03, 1.02, 1.01, 1.01, 1, 0.99, 0.98, 0.97, 0.96, 0.95, 0.94, 0.93, 0.8, 0.77, 0.75, 0.72, 0.69, 0.81, 0.9, 1.11, 0.97, 0.9, 0.83, 0.77, 0.56, 0.51, 0, 1.74, 1.34, 1.14, 1.11, 1.08, 1.05, 1.04, 1.03, 1.02];
        readonly rcov: readonly [0, 30, 0, 123, 89, 88, 77, 70, 66, 58, 0, 0, 136, 125, 117, 110, 104, 99, 0, 203, 174, 144, 132, 0, 0, 117, 116, 116, 115, 117, 125, 125, 122, 121, 117, 114, 0, 217, 192, 162, 145, 134, 129, 0, 124, 125, 128, 134, 141, 150, 140, 141, 137, 133, 0, 235, 198, 169, 165, 165, 164, 0, 166, 185, 161, 159, 159, 158, 157, 156, 170, 156, 144, 134, 130, 128, 126, 126, 129, 134, 144, 155, 154, 152, 153, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        readonly rmet: readonly [0, 0.78, 0, 1.562, 1.128, 0.98, 0.916, 0.88, 0.89, 0, 0, 1.911, 1.602, 1.432, 1.319, 1.28, 1.27, 0, 0, 2.376, 1.974, 1.941, 1.462, 1.346, 1.36, 1.304, 1.274, 1.252, 1.246, 1.278, 1.394, 1.411, 1.369, 1.39, 1.4, 0, 0, 2.546, 2.151, 1.801, 1.602, 1.468, 1.4, 1.36, 1.339, 1.345, 1.376, 1.445, 1.568, 1.663, 1.623, 1.59, 1.6, 0, 0, 2.731, 2.243, 1.877, 1.715, 1.828, 1.821, 1.81, 1.802, 1.799, 1.802, 1.782, 1.773, 1.766, 1.757, 1.746, 1.74, 1.734, 1.58, 1.467, 1.408, 1.375, 1.353, 1.357, 1.387, 1.442, 1.573, 1.716, 1.75, 1.7, 1.76, 0, 0, 2.8, 2.26, 1.878, 1.798, 1.63, 1.56, 1.555, 1.58, 1.81];
        readonly tmelt: readonly [0, 0.003664921, 0.00026178, 0.118586387, 0.405759162, 0.673560209, 1, 0.016492147, 0.014397906, 0.014136126, 0.006544503, 0.097120419, 0.241361257, 0.244240838, 0.440575916, 0.082984293, 0.10104712, 0.045026178, 0.021989529, 0.088219895, 0.290837696, 0.47434555, 0.506020942, 0.566230366, 0.557591623, 0.397382199, 0.473298429, 0.462827225, 0.451832461, 0.354973822, 0.181413613, 0.079319372, 0.317015707, 0.285340314, 0.128272251, 0.069633508, 0.030628272, 0.081675393, 0.273036649, 0.470157068, 0.556282723, 0.717539267, 0.756544503, 0.640052356, 0.67617801, 0.586125654, 0.477748691, 0.323036649, 0.155497382, 0.112565445, 0.132198953, 0.236649215, 0.189267016, 0.101308901, 0.042146597, 0.079057592, 0.261256545, 0.312303665, 0.280366492, 0.315183246, 0.338743455, 0.377225131, 0.352094241, 0.286649215, 0.414921466, 0.427486911, 0.439790576, 0.456282723, 0.469895288, 0.47591623, 0.287172775, 0.504973822, 0.653141361, 0.856806283, 0.964136126, 0.903926702, 0.868586387, 0.702356021, 0.535340314, 0.35, 0.061256545, 0.15104712, 0.157329843, 0.142408377, 0.137958115, 0.15052356, 0.052879581, 0.078534031, 0.254712042, 0.346335079, 0.528795812, 0.553141361, 0.368062827, 0.239005236, 0.239267016, 0.331675393];
        readonly eneg: readonly [0, 3.69, 6.29, 2.32, 3.71, 4.88, 6.08, 7.31, 8.5, 9.7, 10.92, 2.27, 3.37, 4.21, 5.08, 5.95, 6.79, 7.64, 8.5, 2.08, 3, 3.11, 3.19, 3.27, 3.41, 3.4, 3.47, 3.53, 3.59, 3.74, 3.7, 4.37, 5.09, 5.82, 6.53, 7.21, 7.93, 2.04, 2.89, 3.04, 3.14, 3.25, 3.41, 3.35, 3.47, 3.57, 3.73, 3.81, 3.6, 4.19, 4.83, 5.47, 6.08, 6.69, 7.29, 1.97, 2.76, 2.89, 2.86, 2.83, 2.85, 2.87, 2.89, 2.91, 3.02, 2.95, 2.97, 2.99, 3, 3.02, 3.04, 3.11, 3.3, 3.45, 3.48, 3.5, 3.57, 3.6, 3.71, 3.84, 3.82, 4.34, 4.92, 5.47, 6.01, 6.56, 7.12, 2.02, 2.78, 2.93, 3.02, 2.98, 2.98, 2.98, 2.96, 2.97];
    };
    const $visavis_element_list: readonly [null, "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am"];
    const $visavis_elemental_names: {
        readonly num: "atomic number";
        readonly nump: "periodic number";
        readonly size: "atomic size";
        readonly rea: "atomic reactivity";
        readonly rpp: "pseudopotential radii";
        readonly rion: "ionic radii";
        readonly rcov: "covalent radii";
        readonly rmet: "metallic radii";
        readonly tmelt: "melting temperature";
        readonly eneg: "electronegativity";
    };
}

declare namespace $ {
    class $lib_plotly extends $mol_object2 {
        static all(): any;
    }
}

declare namespace $.$$ {
    class $visavis_cube extends $.$visavis_cube {
        plot_body(): ($mol_view | $mol_scroll)[];
        plot_title(): string;
        json(): Readonly<{
            payload: Readonly<{
                tcube?: boolean | undefined;
                points: Readonly<{
                    x: readonly number[];
                    y: readonly number[];
                    z: readonly number[];
                    v: readonly number[];
                    labels: readonly string[];
                }>;
                fixel: boolean | null;
                xtitle?: string | undefined;
                ytitle?: string | undefined;
                ztitle?: string | undefined;
            }>;
        }>;
        value_list(): number[];
        value_min(): number;
        value_max(): number;
        order(order: string): number[];
        heatmap(): boolean;
        heatmap_color(index: number): any;
        heatmap_color_list(): $mol_view[];
        marker(): {
            size: number;
            opacity: number;
            colorscale?: string | undefined;
            color: any;
        };
        data_nonformers(): {
            x: never[];
            y: never[];
            z: never[];
            type: string;
            text: string[];
            mode: string;
            hoverinfo: string;
            marker: {
                color: string;
                size: number;
                opacity: number;
            };
            projection: {
                x: {
                    show: boolean;
                    opacity: number;
                };
                y: {
                    show: boolean;
                    opacity: number;
                };
                z: {
                    show: boolean;
                    opacity: number;
                };
            };
        };
        data(): {
            x: never[];
            y: never[];
            z: never[];
            type: string;
            text: readonly string[];
            mode: string;
            hoverinfo: string;
            marker: {
                size: number;
                opacity: number;
                colorscale?: string | undefined;
                color: any;
            };
            projection: {
                x: {
                    show: boolean;
                    opacity: number;
                };
                y: {
                    show: boolean;
                    opacity: number;
                };
                z: {
                    show: boolean;
                    opacity: number;
                };
            };
        };
        data_shown(): ({
            x: never[];
            y: never[];
            z: never[];
            type: string;
            text: string[];
            mode: string;
            hoverinfo: string;
            marker: {
                color: string;
                size: number;
                opacity: number;
            };
            projection: {
                x: {
                    show: boolean;
                    opacity: number;
                };
                y: {
                    show: boolean;
                    opacity: number;
                };
                z: {
                    show: boolean;
                    opacity: number;
                };
            };
        } | {
            x: never[];
            y: never[];
            z: never[];
            type: string;
            text: readonly string[];
            mode: string;
            hoverinfo: string;
            marker: {
                size: number;
                opacity: number;
                colorscale?: string | undefined;
                color: any;
            };
            projection: {
                x: {
                    show: boolean;
                    opacity: number;
                };
                y: {
                    show: boolean;
                    opacity: number;
                };
                z: {
                    show: boolean;
                    opacity: number;
                };
            };
        })[];
        scene(): {
            aspectmode: string;
            xaxis: {
                title: string;
                range: number[];
                titlefont: {
                    color: string;
                    size: number;
                };
                backgroundcolor: string;
                gridcolor: string;
                showbackground: boolean;
                showticklabels: boolean;
                showline: boolean;
                tickfont: {
                    size: number;
                };
                ticktext: ("B" | "C" | "F" | "H" | "I" | "K" | "N" | "O" | "P" | "S" | "U" | "V" | "W" | "Y" | "He" | "Li" | "Be" | "Ne" | "Na" | "Mg" | "Al" | "Si" | "Cl" | "Ar" | "Ca" | "Sc" | "Ti" | "Cr" | "Mn" | "Fe" | "Co" | "Ni" | "Cu" | "Zn" | "Ga" | "Ge" | "As" | "Se" | "Br" | "Kr" | "Rb" | "Sr" | "Zr" | "Nb" | "Mo" | "Tc" | "Ru" | "Rh" | "Pd" | "Ag" | "Cd" | "In" | "Sn" | "Sb" | "Te" | "Xe" | "Cs" | "Ba" | "La" | "Ce" | "Pr" | "Nd" | "Pm" | "Sm" | "Eu" | "Gd" | "Tb" | "Dy" | "Ho" | "Er" | "Tm" | "Yb" | "Lu" | "Hf" | "Ta" | "Re" | "Os" | "Ir" | "Pt" | "Au" | "Hg" | "Tl" | "Pb" | "Bi" | "Po" | "At" | "Rn" | "Fr" | "Ra" | "Ac" | "Th" | "Pa" | "Np" | "Pu" | "Am" | null)[];
                tickvals: any;
            };
            yaxis: {
                title: string;
                range: number[];
                titlefont: {
                    color: string;
                    size: number;
                };
                backgroundcolor: string;
                gridcolor: string;
                showbackground: boolean;
                showticklabels: boolean;
                showline: boolean;
                tickfont: {
                    size: number;
                };
                ticktext: ("B" | "C" | "F" | "H" | "I" | "K" | "N" | "O" | "P" | "S" | "U" | "V" | "W" | "Y" | "He" | "Li" | "Be" | "Ne" | "Na" | "Mg" | "Al" | "Si" | "Cl" | "Ar" | "Ca" | "Sc" | "Ti" | "Cr" | "Mn" | "Fe" | "Co" | "Ni" | "Cu" | "Zn" | "Ga" | "Ge" | "As" | "Se" | "Br" | "Kr" | "Rb" | "Sr" | "Zr" | "Nb" | "Mo" | "Tc" | "Ru" | "Rh" | "Pd" | "Ag" | "Cd" | "In" | "Sn" | "Sb" | "Te" | "Xe" | "Cs" | "Ba" | "La" | "Ce" | "Pr" | "Nd" | "Pm" | "Sm" | "Eu" | "Gd" | "Tb" | "Dy" | "Ho" | "Er" | "Tm" | "Yb" | "Lu" | "Hf" | "Ta" | "Re" | "Os" | "Ir" | "Pt" | "Au" | "Hg" | "Tl" | "Pb" | "Bi" | "Po" | "At" | "Rn" | "Fr" | "Ra" | "Ac" | "Th" | "Pa" | "Np" | "Pu" | "Am" | null)[];
                tickvals: any;
            };
            zaxis: {
                title: string;
                range: number[];
                titlefont: {
                    color: string;
                    size: number;
                };
                backgroundcolor: string;
                gridcolor: string;
                showbackground: boolean;
                showticklabels: boolean;
                showline: boolean;
                tickfont: {
                    size: number;
                };
                ticktext: ("B" | "C" | "F" | "H" | "I" | "K" | "N" | "O" | "P" | "S" | "U" | "V" | "W" | "Y" | "He" | "Li" | "Be" | "Ne" | "Na" | "Mg" | "Al" | "Si" | "Cl" | "Ar" | "Ca" | "Sc" | "Ti" | "Cr" | "Mn" | "Fe" | "Co" | "Ni" | "Cu" | "Zn" | "Ga" | "Ge" | "As" | "Se" | "Br" | "Kr" | "Rb" | "Sr" | "Zr" | "Nb" | "Mo" | "Tc" | "Ru" | "Rh" | "Pd" | "Ag" | "Cd" | "In" | "Sn" | "Sb" | "Te" | "Xe" | "Cs" | "Ba" | "La" | "Ce" | "Pr" | "Nd" | "Pm" | "Sm" | "Eu" | "Gd" | "Tb" | "Dy" | "Ho" | "Er" | "Tm" | "Yb" | "Lu" | "Hf" | "Ta" | "Re" | "Os" | "Ir" | "Pt" | "Au" | "Hg" | "Tl" | "Pb" | "Bi" | "Po" | "At" | "Rn" | "Fr" | "Ra" | "Ac" | "Th" | "Pa" | "Np" | "Pu" | "Am" | null)[];
                tickvals: any;
            };
            camera: {
                projection: {
                    type: string;
                };
            };
        };
        draw(): any;
        ter_op(op: 'sum' | 'diff' | 'product' | 'ratio' | 'max' | 'min', a: number, b: number, c: number): number;
        convert_to_axes(x_src: readonly number[], y_src: readonly number[], z_src: readonly number[], x_sort: any, y_sort: any, z_sort: any, x_op?: any, y_op?: any, z_op?: any): {
            x: never[];
            y: never[];
            z: never[];
        };
        order_els(prop: string): ("B" | "C" | "F" | "H" | "I" | "K" | "N" | "O" | "P" | "S" | "U" | "V" | "W" | "Y" | "He" | "Li" | "Be" | "Ne" | "Na" | "Mg" | "Al" | "Si" | "Cl" | "Ar" | "Ca" | "Sc" | "Ti" | "Cr" | "Mn" | "Fe" | "Co" | "Ni" | "Cu" | "Zn" | "Ga" | "Ge" | "As" | "Se" | "Br" | "Kr" | "Rb" | "Sr" | "Zr" | "Nb" | "Mo" | "Tc" | "Ru" | "Rh" | "Pd" | "Ag" | "Cd" | "In" | "Sn" | "Sb" | "Te" | "Xe" | "Cs" | "Ba" | "La" | "Ce" | "Pr" | "Nd" | "Pm" | "Sm" | "Eu" | "Gd" | "Tb" | "Dy" | "Ho" | "Er" | "Tm" | "Yb" | "Lu" | "Hf" | "Ta" | "Re" | "Os" | "Ir" | "Pt" | "Au" | "Hg" | "Tl" | "Pb" | "Bi" | "Po" | "At" | "Rn" | "Fr" | "Ra" | "Ac" | "Th" | "Pa" | "Np" | "Pu" | "Am" | null)[];
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    class $visavis_phase extends $mol_book2 {
        plot(): $visavis_plot;
        colors_by_nphases(): Record<string, any>;
        line(): Record<string, any>;
        is_triangle(): boolean;
        triangle(): Record<string, any>;
        triangle_shape_fix(): Record<string, any>;
        triangle_annotations(): readonly any[];
        rectangle(): Record<string, any>;
        rectangle_annotations(): readonly any[];
        annotation(): Record<string, any>;
        annotation_textangle(id: any): number;
        plot_options(): Record<string, any>;
        pages(): readonly any[];
        json_title_a(): string;
        json_title_b(): string;
        json_title_c(): string;
        layout_shapes(): readonly any[];
        annotations(): readonly any[];
        triangle_annotation_text(): string;
        json_comp_range(): readonly any[];
        show_ticks(): boolean;
        json_temp(): readonly any[];
        data_demo(): boolean;
        plot_title(): string;
        label(next?: any): string;
        Label(): $mol_view;
        mousemove(): any;
        Root(): $mol_view;
        draw(): any;
        Plot(): $mol_page;
    }
}

declare namespace $ {
    function $mol_data_const<Val>(ref: Val): ((val: Val) => Val) & {
        config: Val;
        Value: Val;
    };
}

declare namespace $ {
    function $mol_data_dict<Sub extends $mol_data_value>(sub: Sub): ((val: Readonly<Record<string, ReturnType<Sub>>>) => Readonly<Record<string, ReturnType<Sub>>>) & {
        config: Sub;
        Value: Readonly<Record<string, ReturnType<Sub>>>;
    };
}

declare namespace $.$$ {
    const Label_json: (val: any) => [string, number[], number | null];
    export function inside_triangle(x: number, y: number, x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): boolean;
    export function cartesian_to_ternary(x: number, y: number): number[];
    export function fix_comp_impossible(comp_range: any, obj_left: any, obj_right: any): any;
    export class $visavis_phase extends $.$visavis_phase {
        plot_title(): string;
        json(): Readonly<{
            naxes: number;
            arity: number;
            diatype: string;
            chemical_elements: readonly string[];
            temp: readonly number[];
            labels: readonly [string, number[], number | null][];
            shapes: readonly Readonly<{
                kind: string;
                svgpath: string;
                label?: string | undefined;
                phase?: string | undefined;
                nphases?: number | undefined;
                is_solid?: boolean | undefined;
                phase_id?: number | undefined;
                reflabel?: number | undefined;
                chemical_elements?: readonly string[] | undefined;
            }>[];
            entry: string;
            object_type: string;
            use_visavis_type: string;
            title_a?: string | undefined;
            title_b?: string | undefined;
            object_repr?: string | undefined;
            comp_end?: {
                [x: string]: number;
            } | undefined;
            comp_range?: readonly number[] | undefined;
            comp_start?: {
                [x: string]: number;
            } | undefined;
            title_c?: string | undefined;
            comp_a?: {
                [x: string]: number;
            } | undefined;
            comp_b?: {
                [x: string]: number;
            } | undefined;
            comp_c?: {
                [x: string]: number;
            } | undefined;
            range_a?: readonly number[] | undefined;
            range_b?: readonly number[] | undefined;
            range_c?: readonly number[] | undefined;
        }>;
        json_title_b(): string;
        json_title_a(): string;
        json_title_c(): string;
        json_comp_range(): readonly number[];
        json_temp(): readonly number[];
        data_demo(): boolean;
        show_ticks(): boolean;
        is_triangle(): boolean;
        layout_shapes(): (Record<string, any> | {
            fillcolor?: any;
            fillOpacity?: number | undefined;
            type: string;
            path: string;
            line: any;
        })[];
        annotation_textangle(label: ReturnType<typeof Label_json>): 0 | -65;
        annotations(): any[];
        mouseover(): void;
        mouseout(): void;
        click(): void;
        mousemove(): void;
        subscribe_events(): void;
        draw(): void;
        pd_fix_triangle(): void;
    }
    export {};
}

declare namespace $ {
}

declare namespace $.$$ {
}

declare namespace $ {
    class $visavis_plot_plotly extends $mol_page {
        plot(): $visavis_plot;
        json(): Record<string, any>;
        pages(): readonly any[];
        plot_options(): Record<string, any>;
        plot_title(): string;
        draw(): any;
        Root(): $mol_view;
        error_showed(next?: any): string;
        Error(): $mol_view;
        plot_body(): readonly any[];
        Plot(): $mol_page;
    }
}

declare namespace $.$$ {
    class $visavis_plot_plotly extends $.$visavis_plot_plotly {
        plot_title(): string;
        json(): any;
        subscribe_events(): void;
        layout(): {
            font: {
                family: string;
                size: number;
            };
        };
        data(): any;
        draw(): void;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    class $visavis_bar extends $visavis_plot_plotly {
    }
}

declare namespace $.$$ {
    const $visavis_bar_json: ((val: {
        payload: {
            x: readonly number[];
            dx: number;
            y: readonly number[];
            xtitle?: string | undefined;
            ytitle?: string | undefined;
        };
        payload2?: {
            x: readonly number[];
            dx: number;
            y: readonly number[];
            xtitle?: string | undefined;
            ytitle?: string | undefined;
        } | undefined;
    }) => Readonly<{
        payload: Readonly<{
            x: readonly number[];
            dx: number;
            y: readonly number[];
            xtitle?: string | undefined;
            ytitle?: string | undefined;
        }>;
        payload2?: Readonly<{
            x: readonly number[];
            dx: number;
            y: readonly number[];
            xtitle?: string | undefined;
            ytitle?: string | undefined;
        }> | undefined;
    }>) & {
        config: {
            payload: ((val: {
                x: readonly number[];
                dx: number;
                y: readonly number[];
                xtitle?: string | undefined;
                ytitle?: string | undefined;
            }) => Readonly<{
                x: readonly number[];
                dx: number;
                y: readonly number[];
                xtitle?: string | undefined;
                ytitle?: string | undefined;
            }>) & {
                config: {
                    x: ((val: readonly number[]) => readonly number[]) & {
                        config: (val: number) => number;
                        Value: readonly number[];
                    };
                    dx: (val: number) => number;
                    y: ((val: readonly number[]) => readonly number[]) & {
                        config: (val: number) => number;
                        Value: readonly number[];
                    };
                    xtitle: ((val: string | undefined) => string | undefined) & {
                        config: {
                            sub: (val: string) => string;
                            fallback: (() => string) | undefined;
                        };
                        Value: string | undefined;
                    };
                    ytitle: ((val: string | undefined) => string | undefined) & {
                        config: {
                            sub: (val: string) => string;
                            fallback: (() => string) | undefined;
                        };
                        Value: string | undefined;
                    };
                };
                Value: Readonly<{
                    x: readonly number[];
                    dx: number;
                    y: readonly number[];
                    xtitle?: string | undefined;
                    ytitle?: string | undefined;
                }>;
            };
            payload2: ((val: {
                x: readonly number[];
                dx: number;
                y: readonly number[];
                xtitle?: string | undefined;
                ytitle?: string | undefined;
            } | undefined) => Readonly<{
                x: readonly number[];
                dx: number;
                y: readonly number[];
                xtitle?: string | undefined;
                ytitle?: string | undefined;
            }> | undefined) & {
                config: {
                    sub: ((val: {
                        x: readonly number[];
                        dx: number;
                        y: readonly number[];
                        xtitle?: string | undefined;
                        ytitle?: string | undefined;
                    }) => Readonly<{
                        x: readonly number[];
                        dx: number;
                        y: readonly number[];
                        xtitle?: string | undefined;
                        ytitle?: string | undefined;
                    }>) & {
                        config: {
                            x: ((val: readonly number[]) => readonly number[]) & {
                                config: (val: number) => number;
                                Value: readonly number[];
                            };
                            dx: (val: number) => number;
                            y: ((val: readonly number[]) => readonly number[]) & {
                                config: (val: number) => number;
                                Value: readonly number[];
                            };
                            xtitle: ((val: string | undefined) => string | undefined) & {
                                config: {
                                    sub: (val: string) => string;
                                    fallback: (() => string) | undefined;
                                };
                                Value: string | undefined;
                            };
                            ytitle: ((val: string | undefined) => string | undefined) & {
                                config: {
                                    sub: (val: string) => string;
                                    fallback: (() => string) | undefined;
                                };
                                Value: string | undefined;
                            };
                        };
                        Value: Readonly<{
                            x: readonly number[];
                            dx: number;
                            y: readonly number[];
                            xtitle?: string | undefined;
                            ytitle?: string | undefined;
                        }>;
                    };
                    fallback: (() => Readonly<{
                        x: readonly number[];
                        dx: number;
                        y: readonly number[];
                        xtitle?: string | undefined;
                        ytitle?: string | undefined;
                    }>) | undefined;
                };
                Value: Readonly<{
                    x: readonly number[];
                    dx: number;
                    y: readonly number[];
                    xtitle?: string | undefined;
                    ytitle?: string | undefined;
                }> | undefined;
            };
        };
        Value: Readonly<{
            payload: Readonly<{
                x: readonly number[];
                dx: number;
                y: readonly number[];
                xtitle?: string | undefined;
                ytitle?: string | undefined;
            }>;
            payload2?: Readonly<{
                x: readonly number[];
                dx: number;
                y: readonly number[];
                xtitle?: string | undefined;
                ytitle?: string | undefined;
            }> | undefined;
        }>;
    };
    class $visavis_bar extends $.$visavis_bar {
        json(): Readonly<{
            payload: Readonly<{
                x: readonly number[];
                dx: number;
                y: readonly number[];
                xtitle?: string | undefined;
                ytitle?: string | undefined;
            }>;
            payload2?: Readonly<{
                x: readonly number[];
                dx: number;
                y: readonly number[];
                xtitle?: string | undefined;
                ytitle?: string | undefined;
            }> | undefined;
        }>;
        subscribe_events(): void;
        layout(): {
            showlegend: boolean;
            legend: {
                x: number;
                y: number;
                font: {
                    family: string;
                    size: number;
                };
            };
            xaxis: {
                autorange: boolean;
                showgrid: boolean;
                showline: boolean;
                showticklabels: boolean;
                zeroline: boolean;
                ticklen: number;
                dtick: number;
                title: string | undefined;
            };
            yaxis: {
                fixedrange: boolean;
                autorange: boolean;
                showgrid: boolean;
                showline: boolean;
                showticklabels: boolean;
                ticklen: number;
                title: string | undefined;
                rangemode: string;
                type: string;
                tickfont: {
                    family: string;
                    size: number;
                };
            };
            font: {
                family: string;
                size: number;
            };
        };
        data(): {
            type: string;
            x: readonly number[];
            y: readonly number[];
            marker: {
                color: string;
            };
            name: string;
        }[];
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    class $visavis_discovery extends $visavis_plot_plotly {
        pages(): readonly any[];
        elemental_checked(id: any, next?: any): boolean;
        elementals_dict(): Record<string, any>;
        Elementals_check(): $$.$mol_check_list;
        Elementals(): $mol_labeler;
        Setup(): $mol_page;
    }
}

declare namespace $.$$ {
    const $visavis_discovery_json: ((val: {
        payload: {
            points: readonly (readonly number[])[];
        };
        answerto: string;
    }) => Readonly<{
        payload: Readonly<{
            points: readonly (readonly number[])[];
        }>;
        answerto: string;
    }>) & {
        config: {
            payload: ((val: {
                points: readonly (readonly number[])[];
            }) => Readonly<{
                points: readonly (readonly number[])[];
            }>) & {
                config: {
                    points: ((val: readonly (readonly number[])[]) => readonly (readonly number[])[]) & {
                        config: ((val: readonly number[]) => readonly number[]) & {
                            config: (val: number) => number;
                            Value: readonly number[];
                        };
                        Value: readonly (readonly number[])[];
                    };
                };
                Value: Readonly<{
                    points: readonly (readonly number[])[];
                }>;
            };
            answerto: (val: string) => string;
        };
        Value: Readonly<{
            payload: Readonly<{
                points: readonly (readonly number[])[];
            }>;
            answerto: string;
        }>;
    };
    class $visavis_discovery extends $.$visavis_discovery {
        json(): Readonly<{
            payload: Readonly<{
                points: readonly (readonly number[])[];
            }>;
            answerto: string;
        }>;
        elementals_dict(): {
            readonly num: "atomic number";
            readonly nump: "periodic number";
            readonly size: "atomic size";
            readonly rea: "atomic reactivity";
            readonly rpp: "pseudopotential radii";
            readonly rion: "ionic radii";
            readonly rcov: "covalent radii";
            readonly rmet: "metallic radii";
            readonly tmelt: "melting temperature";
            readonly eneg: "electronegativity";
        };
        subscribe_events(): void;
        layout(): {
            showlegend: boolean;
            hovermode: string;
            xaxis: {
                showgrid: boolean;
            };
            yaxis: {
                showgrid: boolean;
            };
            margin: {
                l: number;
                r: number;
                b: number;
                t: number;
                pad: number;
            };
            annotations: ({
                x: number;
                y: number;
                xref: string;
                yref: string;
                xanchor: string;
                yanchor: string;
                text: string;
                showarrow: boolean;
                bgcolor: string;
                font: {
                    family: string;
                    size: number;
                };
                textangle?: undefined;
            } | {
                x: number;
                y: number;
                xref: string;
                yref: string;
                xanchor: string;
                yanchor: string;
                text: string;
                showarrow: boolean;
                bgcolor: string;
                textangle: number;
                font: {
                    family: string;
                    size: number;
                };
            })[];
        };
        elementals_on(): ("num" | "nump" | "size" | "rea" | "rpp" | "rion" | "rcov" | "rmet" | "tmelt" | "eneg")[];
        elemental_checked(id: any, next?: any): boolean;
        data(): {
            x: any;
            y: any;
            text: string[];
            mode: string;
            type: string;
            hoverinfo: string;
            marker: {
                size: number;
                color: string;
                opacity: number;
                symbol: string;
            };
        }[] | undefined;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    class $visavis_eigen extends $visavis_plot_plotly {
    }
}

declare namespace $ {
    function $mol_data_variant<Sub extends $mol_data_value[]>(...sub: Sub): ((val: Parameters<Sub[number]>[0]) => ReturnType<Sub[number]>) & {
        config: Sub;
        Value: ReturnType<Sub[number]>;
    };
}

declare namespace $.$$ {
    const Bands_matrix: ((val: {
        bands: readonly (readonly number[])[];
        kpoints: readonly (readonly number[])[];
    }) => Readonly<{
        bands: readonly (readonly number[])[];
        kpoints: readonly (readonly number[])[];
    }>) & {
        config: {
            bands: ((val: readonly (readonly number[])[]) => readonly (readonly number[])[]) & {
                config: ((val: readonly number[]) => readonly number[]) & {
                    config: (val: number) => number;
                    Value: readonly number[];
                };
                Value: readonly (readonly number[])[];
            };
            kpoints: ((val: readonly (readonly number[])[]) => readonly (readonly number[])[]) & {
                config: ((val: readonly number[]) => readonly number[]) & {
                    config: (val: number) => number;
                    Value: readonly number[];
                };
                Value: readonly (readonly number[])[];
            };
        };
        Value: Readonly<{
            bands: readonly (readonly number[])[];
            kpoints: readonly (readonly number[])[];
        }>;
    };
    type Bands_matrix = ReturnType<typeof Bands_matrix>;
    const Dos_matrix: ((val: {
        dos: readonly number[];
        levels: readonly number[];
    }) => Readonly<{
        dos: readonly number[];
        levels: readonly number[];
    }>) & {
        config: {
            dos: ((val: readonly number[]) => readonly number[]) & {
                config: (val: number) => number;
                Value: readonly number[];
            };
            levels: ((val: readonly number[]) => readonly number[]) & {
                config: (val: number) => number;
                Value: readonly number[];
            };
        };
        Value: Readonly<{
            dos: readonly number[];
            levels: readonly number[];
        }>;
    };
    type Dos_matrix = ReturnType<typeof Dos_matrix>;
    export const $visavis_eigen_json: ((val: {
        sample: {
            material: {
                chemical_formula: string;
                chemical_elements: readonly string[];
                condition: readonly {
                    scalar: readonly {
                        value: number;
                    }[];
                    name: string;
                    units?: string | undefined;
                }[];
                phase: string;
                phase_id: number;
                entry: string;
                object_repr?: string | undefined;
            };
            measurement: readonly {
                data_type: string;
                property: {
                    units: string;
                    scalar?: string | number | undefined;
                    matrix: {
                        bands: readonly (readonly number[])[];
                        kpoints: readonly (readonly number[])[];
                    } | {
                        dos: readonly number[];
                        levels: readonly number[];
                    } | {
                        bands: readonly (readonly number[])[];
                        kpoints: readonly (readonly number[])[];
                        dos: readonly number[];
                        levels: readonly number[];
                    } | {
                        dos: readonly number[];
                        levels: readonly number[];
                        bands: readonly (readonly number[])[];
                        kpoints: readonly (readonly number[])[];
                    };
                    name: string;
                    category: string;
                    domain: string;
                };
                condition?: readonly {
                    units: string;
                    scalar: number;
                    name: string;
                    refers_to?: string | undefined;
                }[] | undefined;
                raw_data?: string | undefined;
            }[];
        };
        version: string;
        object_type: string;
        reference: {
            entry: string;
            phase?: string | undefined;
        };
    }) => Readonly<{
        sample: Readonly<{
            material: Readonly<{
                chemical_formula: string;
                chemical_elements: readonly string[];
                condition: readonly Readonly<{
                    scalar: readonly Readonly<{
                        value: number;
                    }>[];
                    name: string;
                    units?: string | undefined;
                }>[];
                phase: string;
                phase_id: number;
                entry: string;
                object_repr?: string | undefined;
            }>;
            measurement: readonly Readonly<{
                data_type: string;
                property: Readonly<{
                    units: string;
                    scalar?: string | number | undefined;
                    matrix: Readonly<{
                        bands: readonly (readonly number[])[];
                        kpoints: readonly (readonly number[])[];
                    }> | Readonly<{
                        dos: readonly number[];
                        levels: readonly number[];
                    }> | {
                        readonly bands: readonly (readonly number[])[];
                        readonly kpoints: readonly (readonly number[])[];
                        readonly dos: readonly number[];
                        readonly levels: readonly number[];
                    } | {
                        readonly dos: readonly number[];
                        readonly levels: readonly number[];
                        readonly bands: readonly (readonly number[])[];
                        readonly kpoints: readonly (readonly number[])[];
                    };
                    name: string;
                    category: string;
                    domain: string;
                }>;
                condition?: readonly Readonly<{
                    units: string;
                    scalar: number;
                    name: string;
                    refers_to?: string | undefined;
                }>[] | undefined;
                raw_data?: string | undefined;
            }>[];
        }>;
        version: string;
        object_type: string;
        reference: Readonly<{
            entry: string;
            phase?: string | undefined;
        }>;
    }>) & {
        config: {
            sample: ((val: {
                material: {
                    chemical_formula: string;
                    chemical_elements: readonly string[];
                    condition: readonly {
                        scalar: readonly {
                            value: number;
                        }[];
                        name: string;
                        units?: string | undefined;
                    }[];
                    phase: string;
                    phase_id: number;
                    entry: string;
                    object_repr?: string | undefined;
                };
                measurement: readonly {
                    data_type: string;
                    property: {
                        units: string;
                        scalar?: string | number | undefined;
                        matrix: {
                            bands: readonly (readonly number[])[];
                            kpoints: readonly (readonly number[])[];
                        } | {
                            dos: readonly number[];
                            levels: readonly number[];
                        } | {
                            bands: readonly (readonly number[])[];
                            kpoints: readonly (readonly number[])[];
                            dos: readonly number[];
                            levels: readonly number[];
                        } | {
                            dos: readonly number[];
                            levels: readonly number[];
                            bands: readonly (readonly number[])[];
                            kpoints: readonly (readonly number[])[];
                        };
                        name: string;
                        category: string;
                        domain: string;
                    };
                    condition?: readonly {
                        units: string;
                        scalar: number;
                        name: string;
                        refers_to?: string | undefined;
                    }[] | undefined;
                    raw_data?: string | undefined;
                }[];
            }) => Readonly<{
                material: Readonly<{
                    chemical_formula: string;
                    chemical_elements: readonly string[];
                    condition: readonly Readonly<{
                        scalar: readonly Readonly<{
                            value: number;
                        }>[];
                        name: string;
                        units?: string | undefined;
                    }>[];
                    phase: string;
                    phase_id: number;
                    entry: string;
                    object_repr?: string | undefined;
                }>;
                measurement: readonly Readonly<{
                    data_type: string;
                    property: Readonly<{
                        units: string;
                        scalar?: string | number | undefined;
                        matrix: Readonly<{
                            bands: readonly (readonly number[])[];
                            kpoints: readonly (readonly number[])[];
                        }> | Readonly<{
                            dos: readonly number[];
                            levels: readonly number[];
                        }> | {
                            readonly bands: readonly (readonly number[])[];
                            readonly kpoints: readonly (readonly number[])[];
                            readonly dos: readonly number[];
                            readonly levels: readonly number[];
                        } | {
                            readonly dos: readonly number[];
                            readonly levels: readonly number[];
                            readonly bands: readonly (readonly number[])[];
                            readonly kpoints: readonly (readonly number[])[];
                        };
                        name: string;
                        category: string;
                        domain: string;
                    }>;
                    condition?: readonly Readonly<{
                        units: string;
                        scalar: number;
                        name: string;
                        refers_to?: string | undefined;
                    }>[] | undefined;
                    raw_data?: string | undefined;
                }>[];
            }>) & {
                config: {
                    material: ((val: {
                        chemical_formula: string;
                        chemical_elements: readonly string[];
                        condition: readonly {
                            scalar: readonly {
                                value: number;
                            }[];
                            name: string;
                            units?: string | undefined;
                        }[];
                        phase: string;
                        phase_id: number;
                        entry: string;
                        object_repr?: string | undefined;
                    }) => Readonly<{
                        chemical_formula: string;
                        chemical_elements: readonly string[];
                        condition: readonly Readonly<{
                            scalar: readonly Readonly<{
                                value: number;
                            }>[];
                            name: string;
                            units?: string | undefined;
                        }>[];
                        phase: string;
                        phase_id: number;
                        entry: string;
                        object_repr?: string | undefined;
                    }>) & {
                        config: {
                            chemical_formula: (val: string) => string;
                            chemical_elements: ((val: readonly string[]) => readonly string[]) & {
                                config: (val: string) => string;
                                Value: readonly string[];
                            };
                            condition: ((val: readonly {
                                scalar: readonly {
                                    value: number;
                                }[];
                                name: string;
                                units?: string | undefined;
                            }[]) => readonly Readonly<{
                                scalar: readonly Readonly<{
                                    value: number;
                                }>[];
                                name: string;
                                units?: string | undefined;
                            }>[]) & {
                                config: ((val: {
                                    scalar: readonly {
                                        value: number;
                                    }[];
                                    name: string;
                                    units?: string | undefined;
                                }) => Readonly<{
                                    scalar: readonly Readonly<{
                                        value: number;
                                    }>[];
                                    name: string;
                                    units?: string | undefined;
                                }>) & {
                                    config: {
                                        scalar: ((val: readonly {
                                            value: number;
                                        }[]) => readonly Readonly<{
                                            value: number;
                                        }>[]) & {
                                            config: ((val: {
                                                value: number;
                                            }) => Readonly<{
                                                value: number;
                                            }>) & {
                                                config: {
                                                    value: (val: number) => number;
                                                };
                                                Value: Readonly<{
                                                    value: number;
                                                }>;
                                            };
                                            Value: readonly Readonly<{
                                                value: number;
                                            }>[];
                                        };
                                        name: (val: string) => string;
                                        units: ((val: string | undefined) => string | undefined) & {
                                            config: {
                                                sub: (val: string) => string;
                                                fallback: (() => string) | undefined;
                                            };
                                            Value: string | undefined;
                                        };
                                    };
                                    Value: Readonly<{
                                        scalar: readonly Readonly<{
                                            value: number;
                                        }>[];
                                        name: string;
                                        units?: string | undefined;
                                    }>;
                                };
                                Value: readonly Readonly<{
                                    scalar: readonly Readonly<{
                                        value: number;
                                    }>[];
                                    name: string;
                                    units?: string | undefined;
                                }>[];
                            };
                            phase: (val: string) => string;
                            phase_id: (val: number) => number;
                            entry: (val: string) => string;
                            object_repr: ((val: string | undefined) => string | undefined) & {
                                config: {
                                    sub: (val: string) => string;
                                    fallback: (() => string) | undefined;
                                };
                                Value: string | undefined;
                            };
                        };
                        Value: Readonly<{
                            chemical_formula: string;
                            chemical_elements: readonly string[];
                            condition: readonly Readonly<{
                                scalar: readonly Readonly<{
                                    value: number;
                                }>[];
                                name: string;
                                units?: string | undefined;
                            }>[];
                            phase: string;
                            phase_id: number;
                            entry: string;
                            object_repr?: string | undefined;
                        }>;
                    };
                    measurement: ((val: readonly {
                        data_type: string;
                        property: {
                            units: string;
                            scalar?: string | number | undefined;
                            matrix: {
                                bands: readonly (readonly number[])[];
                                kpoints: readonly (readonly number[])[];
                            } | {
                                dos: readonly number[];
                                levels: readonly number[];
                            } | {
                                bands: readonly (readonly number[])[];
                                kpoints: readonly (readonly number[])[];
                                dos: readonly number[];
                                levels: readonly number[];
                            } | {
                                dos: readonly number[];
                                levels: readonly number[];
                                bands: readonly (readonly number[])[];
                                kpoints: readonly (readonly number[])[];
                            };
                            name: string;
                            category: string;
                            domain: string;
                        };
                        condition?: readonly {
                            units: string;
                            scalar: number;
                            name: string;
                            refers_to?: string | undefined;
                        }[] | undefined;
                        raw_data?: string | undefined;
                    }[]) => readonly Readonly<{
                        data_type: string;
                        property: Readonly<{
                            units: string;
                            scalar?: string | number | undefined;
                            matrix: Readonly<{
                                bands: readonly (readonly number[])[];
                                kpoints: readonly (readonly number[])[];
                            }> | Readonly<{
                                dos: readonly number[];
                                levels: readonly number[];
                            }> | {
                                readonly bands: readonly (readonly number[])[];
                                readonly kpoints: readonly (readonly number[])[];
                                readonly dos: readonly number[];
                                readonly levels: readonly number[];
                            } | {
                                readonly dos: readonly number[];
                                readonly levels: readonly number[];
                                readonly bands: readonly (readonly number[])[];
                                readonly kpoints: readonly (readonly number[])[];
                            };
                            name: string;
                            category: string;
                            domain: string;
                        }>;
                        condition?: readonly Readonly<{
                            units: string;
                            scalar: number;
                            name: string;
                            refers_to?: string | undefined;
                        }>[] | undefined;
                        raw_data?: string | undefined;
                    }>[]) & {
                        config: ((val: {
                            data_type: string;
                            property: {
                                units: string;
                                scalar?: string | number | undefined;
                                matrix: {
                                    bands: readonly (readonly number[])[];
                                    kpoints: readonly (readonly number[])[];
                                } | {
                                    dos: readonly number[];
                                    levels: readonly number[];
                                } | {
                                    bands: readonly (readonly number[])[];
                                    kpoints: readonly (readonly number[])[];
                                    dos: readonly number[];
                                    levels: readonly number[];
                                } | {
                                    dos: readonly number[];
                                    levels: readonly number[];
                                    bands: readonly (readonly number[])[];
                                    kpoints: readonly (readonly number[])[];
                                };
                                name: string;
                                category: string;
                                domain: string;
                            };
                            condition?: readonly {
                                units: string;
                                scalar: number;
                                name: string;
                                refers_to?: string | undefined;
                            }[] | undefined;
                            raw_data?: string | undefined;
                        }) => Readonly<{
                            data_type: string;
                            property: Readonly<{
                                units: string;
                                scalar?: string | number | undefined;
                                matrix: Readonly<{
                                    bands: readonly (readonly number[])[];
                                    kpoints: readonly (readonly number[])[];
                                }> | Readonly<{
                                    dos: readonly number[];
                                    levels: readonly number[];
                                }> | {
                                    readonly bands: readonly (readonly number[])[];
                                    readonly kpoints: readonly (readonly number[])[];
                                    readonly dos: readonly number[];
                                    readonly levels: readonly number[];
                                } | {
                                    readonly dos: readonly number[];
                                    readonly levels: readonly number[];
                                    readonly bands: readonly (readonly number[])[];
                                    readonly kpoints: readonly (readonly number[])[];
                                };
                                name: string;
                                category: string;
                                domain: string;
                            }>;
                            condition?: readonly Readonly<{
                                units: string;
                                scalar: number;
                                name: string;
                                refers_to?: string | undefined;
                            }>[] | undefined;
                            raw_data?: string | undefined;
                        }>) & {
                            config: {
                                data_type: (val: string) => string;
                                property: ((val: {
                                    units: string;
                                    scalar?: string | number | undefined;
                                    matrix: {
                                        bands: readonly (readonly number[])[];
                                        kpoints: readonly (readonly number[])[];
                                    } | {
                                        dos: readonly number[];
                                        levels: readonly number[];
                                    } | {
                                        bands: readonly (readonly number[])[];
                                        kpoints: readonly (readonly number[])[];
                                        dos: readonly number[];
                                        levels: readonly number[];
                                    } | {
                                        dos: readonly number[];
                                        levels: readonly number[];
                                        bands: readonly (readonly number[])[];
                                        kpoints: readonly (readonly number[])[];
                                    };
                                    name: string;
                                    category: string;
                                    domain: string;
                                }) => Readonly<{
                                    units: string;
                                    scalar?: string | number | undefined;
                                    matrix: Readonly<{
                                        bands: readonly (readonly number[])[];
                                        kpoints: readonly (readonly number[])[];
                                    }> | Readonly<{
                                        dos: readonly number[];
                                        levels: readonly number[];
                                    }> | {
                                        readonly bands: readonly (readonly number[])[];
                                        readonly kpoints: readonly (readonly number[])[];
                                        readonly dos: readonly number[];
                                        readonly levels: readonly number[];
                                    } | {
                                        readonly dos: readonly number[];
                                        readonly levels: readonly number[];
                                        readonly bands: readonly (readonly number[])[];
                                        readonly kpoints: readonly (readonly number[])[];
                                    };
                                    name: string;
                                    category: string;
                                    domain: string;
                                }>) & {
                                    config: {
                                        units: (val: string) => string;
                                        scalar: ((val: string | number | undefined) => string | number | undefined) & {
                                            config: {
                                                sub: ((val: string | number) => string | number) & {
                                                    config: [(val: string) => string, (val: number) => number];
                                                    Value: string | number;
                                                };
                                                fallback: (() => string | number) | undefined;
                                            };
                                            Value: string | number | undefined;
                                        };
                                        matrix: ((val: {
                                            bands: readonly (readonly number[])[];
                                            kpoints: readonly (readonly number[])[];
                                        } | {
                                            dos: readonly number[];
                                            levels: readonly number[];
                                        }) => Readonly<{
                                            bands: readonly (readonly number[])[];
                                            kpoints: readonly (readonly number[])[];
                                        }> | Readonly<{
                                            dos: readonly number[];
                                            levels: readonly number[];
                                        }>) & {
                                            config: [((val: {
                                                bands: readonly (readonly number[])[];
                                                kpoints: readonly (readonly number[])[];
                                            }) => Readonly<{
                                                bands: readonly (readonly number[])[];
                                                kpoints: readonly (readonly number[])[];
                                            }>) & {
                                                config: {
                                                    bands: ((val: readonly (readonly number[])[]) => readonly (readonly number[])[]) & {
                                                        config: ((val: readonly number[]) => readonly number[]) & {
                                                            config: (val: number) => number;
                                                            Value: readonly number[];
                                                        };
                                                        Value: readonly (readonly number[])[];
                                                    };
                                                    kpoints: ((val: readonly (readonly number[])[]) => readonly (readonly number[])[]) & {
                                                        config: ((val: readonly number[]) => readonly number[]) & {
                                                            config: (val: number) => number;
                                                            Value: readonly number[];
                                                        };
                                                        Value: readonly (readonly number[])[];
                                                    };
                                                };
                                                Value: Readonly<{
                                                    bands: readonly (readonly number[])[];
                                                    kpoints: readonly (readonly number[])[];
                                                }>;
                                            }, ((val: {
                                                dos: readonly number[];
                                                levels: readonly number[];
                                            }) => Readonly<{
                                                dos: readonly number[];
                                                levels: readonly number[];
                                            }>) & {
                                                config: {
                                                    dos: ((val: readonly number[]) => readonly number[]) & {
                                                        config: (val: number) => number;
                                                        Value: readonly number[];
                                                    };
                                                    levels: ((val: readonly number[]) => readonly number[]) & {
                                                        config: (val: number) => number;
                                                        Value: readonly number[];
                                                    };
                                                };
                                                Value: Readonly<{
                                                    dos: readonly number[];
                                                    levels: readonly number[];
                                                }>;
                                            }];
                                            Value: Readonly<{
                                                bands: readonly (readonly number[])[];
                                                kpoints: readonly (readonly number[])[];
                                            }> | Readonly<{
                                                dos: readonly number[];
                                                levels: readonly number[];
                                            }>;
                                        };
                                        name: (val: string) => string;
                                        category: (val: string) => string;
                                        domain: (val: string) => string;
                                    };
                                    Value: Readonly<{
                                        units: string;
                                        scalar?: string | number | undefined;
                                        matrix: Readonly<{
                                            bands: readonly (readonly number[])[];
                                            kpoints: readonly (readonly number[])[];
                                        }> | Readonly<{
                                            dos: readonly number[];
                                            levels: readonly number[];
                                        }> | {
                                            readonly bands: readonly (readonly number[])[];
                                            readonly kpoints: readonly (readonly number[])[];
                                            readonly dos: readonly number[];
                                            readonly levels: readonly number[];
                                        } | {
                                            readonly dos: readonly number[];
                                            readonly levels: readonly number[];
                                            readonly bands: readonly (readonly number[])[];
                                            readonly kpoints: readonly (readonly number[])[];
                                        };
                                        name: string;
                                        category: string;
                                        domain: string;
                                    }>;
                                };
                                condition: ((val: readonly {
                                    units: string;
                                    scalar: number;
                                    name: string;
                                    refers_to?: string | undefined;
                                }[] | undefined) => readonly Readonly<{
                                    units: string;
                                    scalar: number;
                                    name: string;
                                    refers_to?: string | undefined;
                                }>[] | undefined) & {
                                    config: {
                                        sub: ((val: readonly {
                                            units: string;
                                            scalar: number;
                                            name: string;
                                            refers_to?: string | undefined;
                                        }[]) => readonly Readonly<{
                                            units: string;
                                            scalar: number;
                                            name: string;
                                            refers_to?: string | undefined;
                                        }>[]) & {
                                            config: ((val: {
                                                units: string;
                                                scalar: number;
                                                name: string;
                                                refers_to?: string | undefined;
                                            }) => Readonly<{
                                                units: string;
                                                scalar: number;
                                                name: string;
                                                refers_to?: string | undefined;
                                            }>) & {
                                                config: {
                                                    units: (val: string) => string;
                                                    scalar: (val: number) => number;
                                                    name: (val: string) => string;
                                                    refers_to: ((val: string | undefined) => string | undefined) & {
                                                        config: {
                                                            sub: (val: string) => string;
                                                            fallback: (() => string) | undefined;
                                                        };
                                                        Value: string | undefined;
                                                    };
                                                };
                                                Value: Readonly<{
                                                    units: string;
                                                    scalar: number;
                                                    name: string;
                                                    refers_to?: string | undefined;
                                                }>;
                                            };
                                            Value: readonly Readonly<{
                                                units: string;
                                                scalar: number;
                                                name: string;
                                                refers_to?: string | undefined;
                                            }>[];
                                        };
                                        fallback: (() => readonly Readonly<{
                                            units: string;
                                            scalar: number;
                                            name: string;
                                            refers_to?: string | undefined;
                                        }>[]) | undefined;
                                    };
                                    Value: readonly Readonly<{
                                        units: string;
                                        scalar: number;
                                        name: string;
                                        refers_to?: string | undefined;
                                    }>[] | undefined;
                                };
                                raw_data: ((val: string | undefined) => string | undefined) & {
                                    config: {
                                        sub: (val: string) => string;
                                        fallback: (() => string) | undefined;
                                    };
                                    Value: string | undefined;
                                };
                            };
                            Value: Readonly<{
                                data_type: string;
                                property: Readonly<{
                                    units: string;
                                    scalar?: string | number | undefined;
                                    matrix: Readonly<{
                                        bands: readonly (readonly number[])[];
                                        kpoints: readonly (readonly number[])[];
                                    }> | Readonly<{
                                        dos: readonly number[];
                                        levels: readonly number[];
                                    }> | {
                                        readonly bands: readonly (readonly number[])[];
                                        readonly kpoints: readonly (readonly number[])[];
                                        readonly dos: readonly number[];
                                        readonly levels: readonly number[];
                                    } | {
                                        readonly dos: readonly number[];
                                        readonly levels: readonly number[];
                                        readonly bands: readonly (readonly number[])[];
                                        readonly kpoints: readonly (readonly number[])[];
                                    };
                                    name: string;
                                    category: string;
                                    domain: string;
                                }>;
                                condition?: readonly Readonly<{
                                    units: string;
                                    scalar: number;
                                    name: string;
                                    refers_to?: string | undefined;
                                }>[] | undefined;
                                raw_data?: string | undefined;
                            }>;
                        };
                        Value: readonly Readonly<{
                            data_type: string;
                            property: Readonly<{
                                units: string;
                                scalar?: string | number | undefined;
                                matrix: Readonly<{
                                    bands: readonly (readonly number[])[];
                                    kpoints: readonly (readonly number[])[];
                                }> | Readonly<{
                                    dos: readonly number[];
                                    levels: readonly number[];
                                }> | {
                                    readonly bands: readonly (readonly number[])[];
                                    readonly kpoints: readonly (readonly number[])[];
                                    readonly dos: readonly number[];
                                    readonly levels: readonly number[];
                                } | {
                                    readonly dos: readonly number[];
                                    readonly levels: readonly number[];
                                    readonly bands: readonly (readonly number[])[];
                                    readonly kpoints: readonly (readonly number[])[];
                                };
                                name: string;
                                category: string;
                                domain: string;
                            }>;
                            condition?: readonly Readonly<{
                                units: string;
                                scalar: number;
                                name: string;
                                refers_to?: string | undefined;
                            }>[] | undefined;
                            raw_data?: string | undefined;
                        }>[];
                    };
                };
                Value: Readonly<{
                    material: Readonly<{
                        chemical_formula: string;
                        chemical_elements: readonly string[];
                        condition: readonly Readonly<{
                            scalar: readonly Readonly<{
                                value: number;
                            }>[];
                            name: string;
                            units?: string | undefined;
                        }>[];
                        phase: string;
                        phase_id: number;
                        entry: string;
                        object_repr?: string | undefined;
                    }>;
                    measurement: readonly Readonly<{
                        data_type: string;
                        property: Readonly<{
                            units: string;
                            scalar?: string | number | undefined;
                            matrix: Readonly<{
                                bands: readonly (readonly number[])[];
                                kpoints: readonly (readonly number[])[];
                            }> | Readonly<{
                                dos: readonly number[];
                                levels: readonly number[];
                            }> | {
                                readonly bands: readonly (readonly number[])[];
                                readonly kpoints: readonly (readonly number[])[];
                                readonly dos: readonly number[];
                                readonly levels: readonly number[];
                            } | {
                                readonly dos: readonly number[];
                                readonly levels: readonly number[];
                                readonly bands: readonly (readonly number[])[];
                                readonly kpoints: readonly (readonly number[])[];
                            };
                            name: string;
                            category: string;
                            domain: string;
                        }>;
                        condition?: readonly Readonly<{
                            units: string;
                            scalar: number;
                            name: string;
                            refers_to?: string | undefined;
                        }>[] | undefined;
                        raw_data?: string | undefined;
                    }>[];
                }>;
            };
            version: (val: string) => string;
            object_type: (val: string) => string;
            reference: ((val: {
                entry: string;
                phase?: string | undefined;
            }) => Readonly<{
                entry: string;
                phase?: string | undefined;
            }>) & {
                config: {
                    entry: (val: string) => string;
                    phase: ((val: string | undefined) => string | undefined) & {
                        config: {
                            sub: (val: string) => string;
                            fallback: (() => string) | undefined;
                        };
                        Value: string | undefined;
                    };
                };
                Value: Readonly<{
                    entry: string;
                    phase?: string | undefined;
                }>;
            };
        };
        Value: Readonly<{
            sample: Readonly<{
                material: Readonly<{
                    chemical_formula: string;
                    chemical_elements: readonly string[];
                    condition: readonly Readonly<{
                        scalar: readonly Readonly<{
                            value: number;
                        }>[];
                        name: string;
                        units?: string | undefined;
                    }>[];
                    phase: string;
                    phase_id: number;
                    entry: string;
                    object_repr?: string | undefined;
                }>;
                measurement: readonly Readonly<{
                    data_type: string;
                    property: Readonly<{
                        units: string;
                        scalar?: string | number | undefined;
                        matrix: Readonly<{
                            bands: readonly (readonly number[])[];
                            kpoints: readonly (readonly number[])[];
                        }> | Readonly<{
                            dos: readonly number[];
                            levels: readonly number[];
                        }> | {
                            readonly bands: readonly (readonly number[])[];
                            readonly kpoints: readonly (readonly number[])[];
                            readonly dos: readonly number[];
                            readonly levels: readonly number[];
                        } | {
                            readonly dos: readonly number[];
                            readonly levels: readonly number[];
                            readonly bands: readonly (readonly number[])[];
                            readonly kpoints: readonly (readonly number[])[];
                        };
                        name: string;
                        category: string;
                        domain: string;
                    }>;
                    condition?: readonly Readonly<{
                        units: string;
                        scalar: number;
                        name: string;
                        refers_to?: string | undefined;
                    }>[] | undefined;
                    raw_data?: string | undefined;
                }>[];
            }>;
            version: string;
            object_type: string;
            reference: Readonly<{
                entry: string;
                phase?: string | undefined;
            }>;
        }>;
    };
    export class $visavis_eigen extends $.$visavis_eigen {
        json(): Readonly<{
            sample: Readonly<{
                material: Readonly<{
                    chemical_formula: string;
                    chemical_elements: readonly string[];
                    condition: readonly Readonly<{
                        scalar: readonly Readonly<{
                            value: number;
                        }>[];
                        name: string;
                        units?: string | undefined;
                    }>[];
                    phase: string;
                    phase_id: number;
                    entry: string;
                    object_repr?: string | undefined;
                }>;
                measurement: readonly Readonly<{
                    data_type: string;
                    property: Readonly<{
                        units: string;
                        scalar?: string | number | undefined;
                        matrix: Readonly<{
                            bands: readonly (readonly number[])[];
                            kpoints: readonly (readonly number[])[];
                        }> | Readonly<{
                            dos: readonly number[];
                            levels: readonly number[];
                        }> | {
                            readonly bands: readonly (readonly number[])[];
                            readonly kpoints: readonly (readonly number[])[];
                            readonly dos: readonly number[];
                            readonly levels: readonly number[];
                        } | {
                            readonly dos: readonly number[];
                            readonly levels: readonly number[];
                            readonly bands: readonly (readonly number[])[];
                            readonly kpoints: readonly (readonly number[])[];
                        };
                        name: string;
                        category: string;
                        domain: string;
                    }>;
                    condition?: readonly Readonly<{
                        units: string;
                        scalar: number;
                        name: string;
                        refers_to?: string | undefined;
                    }>[] | undefined;
                    raw_data?: string | undefined;
                }>[];
            }>;
            version: string;
            object_type: string;
            reference: Readonly<{
                entry: string;
                phase?: string | undefined;
            }>;
        }>;
        bands_matrix(): Bands_matrix | null;
        dos_matrix(): Dos_matrix | null;
        subscribe_events(): void;
        data(): {
            x: any;
            y: readonly number[];
            mode: string;
            type: string;
            marker: {
                color: string;
            };
        }[];
        layout(): {
            showlegend: boolean;
            xaxis: Object;
            yaxis: {
                autorange: boolean;
                showgrid: boolean;
                showline: boolean;
                showticklabels: boolean;
                zeroline: boolean;
                zerolinecolor: string;
                zerolinewidth: number;
                ticklen: number;
                title: string;
            };
            font: {
                family: string;
                size: number;
            };
        };
    }
    export {};
}

declare namespace $ {
    class $visavis_pie extends $visavis_plot_plotly {
        colorset(): readonly any[];
    }
}

declare namespace $ {
    function $mol_data_enum<Dict extends Record<number | string, number | string>>(name: string, dict: Dict): ((value: Dict[keyof Dict]) => Dict[keyof Dict]) & {
        config: {
            name: string;
            dict: Dict;
        };
        Value: Dict[keyof Dict];
    };
}

declare namespace $.$$ {
    const $visavis_pie_json: ((val: {
        payload: readonly {
            facet: "props" | "elements" | "classes" | "lattices";
            value: string;
            count: number;
        }[];
        total_count: number;
    }) => Readonly<{
        payload: readonly Readonly<{
            facet: "props" | "elements" | "classes" | "lattices";
            value: string;
            count: number;
        }>[];
        total_count: number;
    }>) & {
        config: {
            payload: ((val: readonly {
                facet: "props" | "elements" | "classes" | "lattices";
                value: string;
                count: number;
            }[]) => readonly Readonly<{
                facet: "props" | "elements" | "classes" | "lattices";
                value: string;
                count: number;
            }>[]) & {
                config: ((val: {
                    facet: "props" | "elements" | "classes" | "lattices";
                    value: string;
                    count: number;
                }) => Readonly<{
                    facet: "props" | "elements" | "classes" | "lattices";
                    value: string;
                    count: number;
                }>) & {
                    config: {
                        facet: ((value: "props" | "elements" | "classes" | "lattices") => "props" | "elements" | "classes" | "lattices") & {
                            config: {
                                name: string;
                                dict: {
                                    readonly props: "props";
                                    readonly elements: "elements";
                                    readonly classes: "classes";
                                    readonly lattices: "lattices";
                                };
                            };
                            Value: "props" | "elements" | "classes" | "lattices";
                        };
                        value: (val: string) => string;
                        count: (val: number) => number;
                    };
                    Value: Readonly<{
                        facet: "props" | "elements" | "classes" | "lattices";
                        value: string;
                        count: number;
                    }>;
                };
                Value: readonly Readonly<{
                    facet: "props" | "elements" | "classes" | "lattices";
                    value: string;
                    count: number;
                }>[];
            };
            total_count: (val: number) => number;
        };
        Value: Readonly<{
            payload: readonly Readonly<{
                facet: "props" | "elements" | "classes" | "lattices";
                value: string;
                count: number;
            }>[];
            total_count: number;
        }>;
    };
    class $visavis_pie extends $.$visavis_pie {
        json(): Readonly<{
            payload: readonly Readonly<{
                facet: "props" | "elements" | "classes" | "lattices";
                value: string;
                count: number;
            }>[];
            total_count: number;
        }>;
        subscribe_events(): void;
        layout(): {
            showlegend: boolean;
            font: {
                family: string;
            };
            annotations: ({
                text: string;
            } & {
                x: number;
                y: number;
            } & {
                showarrow: boolean;
                font: {
                    size: number;
                    family: string;
                };
                borderpad: number;
                bgcolor: string;
            })[];
        };
        xy_domains(): (number[][][] | null)[];
        enter_metrics(): number;
        tot_count(): number;
        data(): any[];
    }
}

declare namespace $ {
    class $visavis_scatter extends $visavis_plot_plotly {
    }
}

declare namespace $.$$ {
    const $visavis_scatter_json: ((val: {
        sample: {
            material: {
                chemical_formula: string;
                chemical_elements: readonly string[];
                condition: readonly {
                    scalar: readonly {
                        value: number;
                    }[];
                    name: string;
                    units?: string | undefined;
                }[];
                phase: string;
                phase_id: number;
                entry: string;
                object_repr?: string | undefined;
            };
            measurement: readonly {
                data_type: string;
                property: {
                    units: string;
                    scalar?: string | number | undefined;
                    matrix: readonly (readonly number[])[];
                    name: string;
                    category: string;
                    domain: string;
                };
                condition?: readonly {
                    units: string;
                    scalar: number;
                    name: string;
                    refers_to?: string | undefined;
                }[] | undefined;
                raw_data?: string | undefined;
            }[];
        };
        version: string;
        object_type: string;
        reference: {
            entry: string;
            phase?: string | undefined;
        };
    }) => Readonly<{
        sample: Readonly<{
            material: Readonly<{
                chemical_formula: string;
                chemical_elements: readonly string[];
                condition: readonly Readonly<{
                    scalar: readonly Readonly<{
                        value: number;
                    }>[];
                    name: string;
                    units?: string | undefined;
                }>[];
                phase: string;
                phase_id: number;
                entry: string;
                object_repr?: string | undefined;
            }>;
            measurement: readonly Readonly<{
                data_type: string;
                property: Readonly<{
                    units: string;
                    scalar?: string | number | undefined;
                    matrix: readonly (readonly number[])[];
                    name: string;
                    category: string;
                    domain: string;
                }>;
                condition?: readonly Readonly<{
                    units: string;
                    scalar: number;
                    name: string;
                    refers_to?: string | undefined;
                }>[] | undefined;
                raw_data?: string | undefined;
            }>[];
        }>;
        version: string;
        object_type: string;
        reference: Readonly<{
            entry: string;
            phase?: string | undefined;
        }>;
    }>) & {
        config: {
            sample: ((val: {
                material: {
                    chemical_formula: string;
                    chemical_elements: readonly string[];
                    condition: readonly {
                        scalar: readonly {
                            value: number;
                        }[];
                        name: string;
                        units?: string | undefined;
                    }[];
                    phase: string;
                    phase_id: number;
                    entry: string;
                    object_repr?: string | undefined;
                };
                measurement: readonly {
                    data_type: string;
                    property: {
                        units: string;
                        scalar?: string | number | undefined;
                        matrix: readonly (readonly number[])[];
                        name: string;
                        category: string;
                        domain: string;
                    };
                    condition?: readonly {
                        units: string;
                        scalar: number;
                        name: string;
                        refers_to?: string | undefined;
                    }[] | undefined;
                    raw_data?: string | undefined;
                }[];
            }) => Readonly<{
                material: Readonly<{
                    chemical_formula: string;
                    chemical_elements: readonly string[];
                    condition: readonly Readonly<{
                        scalar: readonly Readonly<{
                            value: number;
                        }>[];
                        name: string;
                        units?: string | undefined;
                    }>[];
                    phase: string;
                    phase_id: number;
                    entry: string;
                    object_repr?: string | undefined;
                }>;
                measurement: readonly Readonly<{
                    data_type: string;
                    property: Readonly<{
                        units: string;
                        scalar?: string | number | undefined;
                        matrix: readonly (readonly number[])[];
                        name: string;
                        category: string;
                        domain: string;
                    }>;
                    condition?: readonly Readonly<{
                        units: string;
                        scalar: number;
                        name: string;
                        refers_to?: string | undefined;
                    }>[] | undefined;
                    raw_data?: string | undefined;
                }>[];
            }>) & {
                config: {
                    material: ((val: {
                        chemical_formula: string;
                        chemical_elements: readonly string[];
                        condition: readonly {
                            scalar: readonly {
                                value: number;
                            }[];
                            name: string;
                            units?: string | undefined;
                        }[];
                        phase: string;
                        phase_id: number;
                        entry: string;
                        object_repr?: string | undefined;
                    }) => Readonly<{
                        chemical_formula: string;
                        chemical_elements: readonly string[];
                        condition: readonly Readonly<{
                            scalar: readonly Readonly<{
                                value: number;
                            }>[];
                            name: string;
                            units?: string | undefined;
                        }>[];
                        phase: string;
                        phase_id: number;
                        entry: string;
                        object_repr?: string | undefined;
                    }>) & {
                        config: {
                            chemical_formula: (val: string) => string;
                            chemical_elements: ((val: readonly string[]) => readonly string[]) & {
                                config: (val: string) => string;
                                Value: readonly string[];
                            };
                            condition: ((val: readonly {
                                scalar: readonly {
                                    value: number;
                                }[];
                                name: string;
                                units?: string | undefined;
                            }[]) => readonly Readonly<{
                                scalar: readonly Readonly<{
                                    value: number;
                                }>[];
                                name: string;
                                units?: string | undefined;
                            }>[]) & {
                                config: ((val: {
                                    scalar: readonly {
                                        value: number;
                                    }[];
                                    name: string;
                                    units?: string | undefined;
                                }) => Readonly<{
                                    scalar: readonly Readonly<{
                                        value: number;
                                    }>[];
                                    name: string;
                                    units?: string | undefined;
                                }>) & {
                                    config: {
                                        scalar: ((val: readonly {
                                            value: number;
                                        }[]) => readonly Readonly<{
                                            value: number;
                                        }>[]) & {
                                            config: ((val: {
                                                value: number;
                                            }) => Readonly<{
                                                value: number;
                                            }>) & {
                                                config: {
                                                    value: (val: number) => number;
                                                };
                                                Value: Readonly<{
                                                    value: number;
                                                }>;
                                            };
                                            Value: readonly Readonly<{
                                                value: number;
                                            }>[];
                                        };
                                        name: (val: string) => string;
                                        units: ((val: string | undefined) => string | undefined) & {
                                            config: {
                                                sub: (val: string) => string;
                                                fallback: (() => string) | undefined;
                                            };
                                            Value: string | undefined;
                                        };
                                    };
                                    Value: Readonly<{
                                        scalar: readonly Readonly<{
                                            value: number;
                                        }>[];
                                        name: string;
                                        units?: string | undefined;
                                    }>;
                                };
                                Value: readonly Readonly<{
                                    scalar: readonly Readonly<{
                                        value: number;
                                    }>[];
                                    name: string;
                                    units?: string | undefined;
                                }>[];
                            };
                            phase: (val: string) => string;
                            phase_id: (val: number) => number;
                            entry: (val: string) => string;
                            object_repr: ((val: string | undefined) => string | undefined) & {
                                config: {
                                    sub: (val: string) => string;
                                    fallback: (() => string) | undefined;
                                };
                                Value: string | undefined;
                            };
                        };
                        Value: Readonly<{
                            chemical_formula: string;
                            chemical_elements: readonly string[];
                            condition: readonly Readonly<{
                                scalar: readonly Readonly<{
                                    value: number;
                                }>[];
                                name: string;
                                units?: string | undefined;
                            }>[];
                            phase: string;
                            phase_id: number;
                            entry: string;
                            object_repr?: string | undefined;
                        }>;
                    };
                    measurement: ((val: readonly {
                        data_type: string;
                        property: {
                            units: string;
                            scalar?: string | number | undefined;
                            matrix: readonly (readonly number[])[];
                            name: string;
                            category: string;
                            domain: string;
                        };
                        condition?: readonly {
                            units: string;
                            scalar: number;
                            name: string;
                            refers_to?: string | undefined;
                        }[] | undefined;
                        raw_data?: string | undefined;
                    }[]) => readonly Readonly<{
                        data_type: string;
                        property: Readonly<{
                            units: string;
                            scalar?: string | number | undefined;
                            matrix: readonly (readonly number[])[];
                            name: string;
                            category: string;
                            domain: string;
                        }>;
                        condition?: readonly Readonly<{
                            units: string;
                            scalar: number;
                            name: string;
                            refers_to?: string | undefined;
                        }>[] | undefined;
                        raw_data?: string | undefined;
                    }>[]) & {
                        config: ((val: {
                            data_type: string;
                            property: {
                                units: string;
                                scalar?: string | number | undefined;
                                matrix: readonly (readonly number[])[];
                                name: string;
                                category: string;
                                domain: string;
                            };
                            condition?: readonly {
                                units: string;
                                scalar: number;
                                name: string;
                                refers_to?: string | undefined;
                            }[] | undefined;
                            raw_data?: string | undefined;
                        }) => Readonly<{
                            data_type: string;
                            property: Readonly<{
                                units: string;
                                scalar?: string | number | undefined;
                                matrix: readonly (readonly number[])[];
                                name: string;
                                category: string;
                                domain: string;
                            }>;
                            condition?: readonly Readonly<{
                                units: string;
                                scalar: number;
                                name: string;
                                refers_to?: string | undefined;
                            }>[] | undefined;
                            raw_data?: string | undefined;
                        }>) & {
                            config: {
                                data_type: (val: string) => string;
                                property: ((val: {
                                    units: string;
                                    scalar?: string | number | undefined;
                                    matrix: readonly (readonly number[])[];
                                    name: string;
                                    category: string;
                                    domain: string;
                                }) => Readonly<{
                                    units: string;
                                    scalar?: string | number | undefined;
                                    matrix: readonly (readonly number[])[];
                                    name: string;
                                    category: string;
                                    domain: string;
                                }>) & {
                                    config: {
                                        units: (val: string) => string;
                                        scalar: ((val: string | number | undefined) => string | number | undefined) & {
                                            config: {
                                                sub: ((val: string | number) => string | number) & {
                                                    config: [(val: string) => string, (val: number) => number];
                                                    Value: string | number;
                                                };
                                                fallback: (() => string | number) | undefined;
                                            };
                                            Value: string | number | undefined;
                                        };
                                        matrix: ((val: readonly (readonly number[])[]) => readonly (readonly number[])[]) & {
                                            config: ((val: readonly number[]) => readonly number[]) & {
                                                config: (val: number) => number;
                                                Value: readonly number[];
                                            };
                                            Value: readonly (readonly number[])[];
                                        };
                                        name: (val: string) => string;
                                        category: (val: string) => string;
                                        domain: (val: string) => string;
                                    };
                                    Value: Readonly<{
                                        units: string;
                                        scalar?: string | number | undefined;
                                        matrix: readonly (readonly number[])[];
                                        name: string;
                                        category: string;
                                        domain: string;
                                    }>;
                                };
                                condition: ((val: readonly {
                                    units: string;
                                    scalar: number;
                                    name: string;
                                    refers_to?: string | undefined;
                                }[] | undefined) => readonly Readonly<{
                                    units: string;
                                    scalar: number;
                                    name: string;
                                    refers_to?: string | undefined;
                                }>[] | undefined) & {
                                    config: {
                                        sub: ((val: readonly {
                                            units: string;
                                            scalar: number;
                                            name: string;
                                            refers_to?: string | undefined;
                                        }[]) => readonly Readonly<{
                                            units: string;
                                            scalar: number;
                                            name: string;
                                            refers_to?: string | undefined;
                                        }>[]) & {
                                            config: ((val: {
                                                units: string;
                                                scalar: number;
                                                name: string;
                                                refers_to?: string | undefined;
                                            }) => Readonly<{
                                                units: string;
                                                scalar: number;
                                                name: string;
                                                refers_to?: string | undefined;
                                            }>) & {
                                                config: {
                                                    units: (val: string) => string;
                                                    scalar: (val: number) => number;
                                                    name: (val: string) => string;
                                                    refers_to: ((val: string | undefined) => string | undefined) & {
                                                        config: {
                                                            sub: (val: string) => string;
                                                            fallback: (() => string) | undefined;
                                                        };
                                                        Value: string | undefined;
                                                    };
                                                };
                                                Value: Readonly<{
                                                    units: string;
                                                    scalar: number;
                                                    name: string;
                                                    refers_to?: string | undefined;
                                                }>;
                                            };
                                            Value: readonly Readonly<{
                                                units: string;
                                                scalar: number;
                                                name: string;
                                                refers_to?: string | undefined;
                                            }>[];
                                        };
                                        fallback: (() => readonly Readonly<{
                                            units: string;
                                            scalar: number;
                                            name: string;
                                            refers_to?: string | undefined;
                                        }>[]) | undefined;
                                    };
                                    Value: readonly Readonly<{
                                        units: string;
                                        scalar: number;
                                        name: string;
                                        refers_to?: string | undefined;
                                    }>[] | undefined;
                                };
                                raw_data: ((val: string | undefined) => string | undefined) & {
                                    config: {
                                        sub: (val: string) => string;
                                        fallback: (() => string) | undefined;
                                    };
                                    Value: string | undefined;
                                };
                            };
                            Value: Readonly<{
                                data_type: string;
                                property: Readonly<{
                                    units: string;
                                    scalar?: string | number | undefined;
                                    matrix: readonly (readonly number[])[];
                                    name: string;
                                    category: string;
                                    domain: string;
                                }>;
                                condition?: readonly Readonly<{
                                    units: string;
                                    scalar: number;
                                    name: string;
                                    refers_to?: string | undefined;
                                }>[] | undefined;
                                raw_data?: string | undefined;
                            }>;
                        };
                        Value: readonly Readonly<{
                            data_type: string;
                            property: Readonly<{
                                units: string;
                                scalar?: string | number | undefined;
                                matrix: readonly (readonly number[])[];
                                name: string;
                                category: string;
                                domain: string;
                            }>;
                            condition?: readonly Readonly<{
                                units: string;
                                scalar: number;
                                name: string;
                                refers_to?: string | undefined;
                            }>[] | undefined;
                            raw_data?: string | undefined;
                        }>[];
                    };
                };
                Value: Readonly<{
                    material: Readonly<{
                        chemical_formula: string;
                        chemical_elements: readonly string[];
                        condition: readonly Readonly<{
                            scalar: readonly Readonly<{
                                value: number;
                            }>[];
                            name: string;
                            units?: string | undefined;
                        }>[];
                        phase: string;
                        phase_id: number;
                        entry: string;
                        object_repr?: string | undefined;
                    }>;
                    measurement: readonly Readonly<{
                        data_type: string;
                        property: Readonly<{
                            units: string;
                            scalar?: string | number | undefined;
                            matrix: readonly (readonly number[])[];
                            name: string;
                            category: string;
                            domain: string;
                        }>;
                        condition?: readonly Readonly<{
                            units: string;
                            scalar: number;
                            name: string;
                            refers_to?: string | undefined;
                        }>[] | undefined;
                        raw_data?: string | undefined;
                    }>[];
                }>;
            };
            version: (val: string) => string;
            object_type: (val: string) => string;
            reference: ((val: {
                entry: string;
                phase?: string | undefined;
            }) => Readonly<{
                entry: string;
                phase?: string | undefined;
            }>) & {
                config: {
                    entry: (val: string) => string;
                    phase: ((val: string | undefined) => string | undefined) & {
                        config: {
                            sub: (val: string) => string;
                            fallback: (() => string) | undefined;
                        };
                        Value: string | undefined;
                    };
                };
                Value: Readonly<{
                    entry: string;
                    phase?: string | undefined;
                }>;
            };
        };
        Value: Readonly<{
            sample: Readonly<{
                material: Readonly<{
                    chemical_formula: string;
                    chemical_elements: readonly string[];
                    condition: readonly Readonly<{
                        scalar: readonly Readonly<{
                            value: number;
                        }>[];
                        name: string;
                        units?: string | undefined;
                    }>[];
                    phase: string;
                    phase_id: number;
                    entry: string;
                    object_repr?: string | undefined;
                }>;
                measurement: readonly Readonly<{
                    data_type: string;
                    property: Readonly<{
                        units: string;
                        scalar?: string | number | undefined;
                        matrix: readonly (readonly number[])[];
                        name: string;
                        category: string;
                        domain: string;
                    }>;
                    condition?: readonly Readonly<{
                        units: string;
                        scalar: number;
                        name: string;
                        refers_to?: string | undefined;
                    }>[] | undefined;
                    raw_data?: string | undefined;
                }>[];
            }>;
            version: string;
            object_type: string;
            reference: Readonly<{
                entry: string;
                phase?: string | undefined;
            }>;
        }>;
    };
    class $visavis_scatter extends $.$visavis_scatter {
        json(): Readonly<{
            sample: Readonly<{
                material: Readonly<{
                    chemical_formula: string;
                    chemical_elements: readonly string[];
                    condition: readonly Readonly<{
                        scalar: readonly Readonly<{
                            value: number;
                        }>[];
                        name: string;
                        units?: string | undefined;
                    }>[];
                    phase: string;
                    phase_id: number;
                    entry: string;
                    object_repr?: string | undefined;
                }>;
                measurement: readonly Readonly<{
                    data_type: string;
                    property: Readonly<{
                        units: string;
                        scalar?: string | number | undefined;
                        matrix: readonly (readonly number[])[];
                        name: string;
                        category: string;
                        domain: string;
                    }>;
                    condition?: readonly Readonly<{
                        units: string;
                        scalar: number;
                        name: string;
                        refers_to?: string | undefined;
                    }>[] | undefined;
                    raw_data?: string | undefined;
                }>[];
            }>;
            version: string;
            object_type: string;
            reference: Readonly<{
                entry: string;
                phase?: string | undefined;
            }>;
        }>;
        subscribe_events(): void;
        p_data(): number[];
        t_data(): number[];
        p_data_sum(): number;
        t_data_sum(): number;
        x_data_type(): "pressure" | "temperature";
        x_data(): number[];
        x_title(): "P, Gpa" | "T, K";
        data(): {
            type: string;
            mode: string;
            name: string;
            x: number[];
            y: number[];
            marker: {
                color: string;
                symbol: string;
                size: number;
            };
        }[];
        layout(): {
            showlegend: boolean;
            legend: {
                x: number;
                y: number;
                font: {
                    family: string;
                    size: number;
                };
            };
            xaxis: {
                autorange: boolean;
                showgrid: boolean;
                showline: boolean;
                showticklabels: boolean;
                zeroline: boolean;
                ticklen: number;
                title: "P, Gpa" | "T, K";
            };
            yaxis: {
                autorange: boolean;
                showgrid: boolean;
                showline: boolean;
                showticklabels: boolean;
                zeroline: boolean;
                ticklen: number;
                title: string;
            };
            font: {
                family: string;
                size: number;
            };
        };
    }
}

declare namespace $ {
    class $visavis_customscatter extends $visavis_plot_plotly {
    }
}

declare namespace $.$$ {
    const $visavis_customscatter_json: ((val: {
        plots: readonly {
            name: string;
            type: string;
            mode: string;
            interpolation: string;
            x: readonly number[];
            y: readonly number[];
        }[];
        xtitle?: string | undefined;
        ytitle?: string | undefined;
        xlog: boolean | null;
        ylog: boolean | null;
    }) => Readonly<{
        plots: readonly Readonly<{
            name: string;
            type: string;
            mode: string;
            interpolation: string;
            x: readonly number[];
            y: readonly number[];
        }>[];
        xtitle?: string | undefined;
        ytitle?: string | undefined;
        xlog: boolean | null;
        ylog: boolean | null;
    }>) & {
        config: {
            plots: ((val: readonly {
                name: string;
                type: string;
                mode: string;
                interpolation: string;
                x: readonly number[];
                y: readonly number[];
            }[]) => readonly Readonly<{
                name: string;
                type: string;
                mode: string;
                interpolation: string;
                x: readonly number[];
                y: readonly number[];
            }>[]) & {
                config: ((val: {
                    name: string;
                    type: string;
                    mode: string;
                    interpolation: string;
                    x: readonly number[];
                    y: readonly number[];
                }) => Readonly<{
                    name: string;
                    type: string;
                    mode: string;
                    interpolation: string;
                    x: readonly number[];
                    y: readonly number[];
                }>) & {
                    config: {
                        name: (val: string) => string;
                        type: (val: string) => string;
                        mode: (val: string) => string;
                        interpolation: (val: string) => string;
                        x: ((val: readonly number[]) => readonly number[]) & {
                            config: (val: number) => number;
                            Value: readonly number[];
                        };
                        y: ((val: readonly number[]) => readonly number[]) & {
                            config: (val: number) => number;
                            Value: readonly number[];
                        };
                    };
                    Value: Readonly<{
                        name: string;
                        type: string;
                        mode: string;
                        interpolation: string;
                        x: readonly number[];
                        y: readonly number[];
                    }>;
                };
                Value: readonly Readonly<{
                    name: string;
                    type: string;
                    mode: string;
                    interpolation: string;
                    x: readonly number[];
                    y: readonly number[];
                }>[];
            };
            xtitle: ((val: string | undefined) => string | undefined) & {
                config: {
                    sub: (val: string) => string;
                    fallback: (() => string) | undefined;
                };
                Value: string | undefined;
            };
            ytitle: ((val: string | undefined) => string | undefined) & {
                config: {
                    sub: (val: string) => string;
                    fallback: (() => string) | undefined;
                };
                Value: string | undefined;
            };
            xlog: ((val: boolean | null) => boolean | null) & {
                config: (val: boolean) => boolean;
                Value: boolean | null;
            };
            ylog: ((val: boolean | null) => boolean | null) & {
                config: (val: boolean) => boolean;
                Value: boolean | null;
            };
        };
        Value: Readonly<{
            plots: readonly Readonly<{
                name: string;
                type: string;
                mode: string;
                interpolation: string;
                x: readonly number[];
                y: readonly number[];
            }>[];
            xtitle?: string | undefined;
            ytitle?: string | undefined;
            xlog: boolean | null;
            ylog: boolean | null;
        }>;
    };
    class $visavis_customscatter extends $.$visavis_customscatter {
        json(): Readonly<{
            plots: readonly Readonly<{
                name: string;
                type: string;
                mode: string;
                interpolation: string;
                x: readonly number[];
                y: readonly number[];
            }>[];
            xtitle?: string | undefined;
            ytitle?: string | undefined;
            xlog: boolean | null;
            ylog: boolean | null;
        }>;
        subscribe_events(): void;
        layout(): {
            showlegend: boolean;
            legend: {
                x: number;
                y: number;
                font: {
                    family: string;
                    size: number;
                };
            };
            xaxis: {
                type: string;
                autorange: boolean;
                showgrid: boolean;
                showline: boolean;
                showticklabels: boolean;
                zeroline: boolean;
                zerolinecolor: string;
                zerolinewidth: number;
                ticklen: number;
                title: string | undefined;
            };
            yaxis: {
                type: string;
                autorange: boolean;
                showgrid: boolean;
                showline: boolean;
                showticklabels: boolean;
                zeroline: boolean;
                zerolinecolor: string;
                zerolinewidth: number;
                ticklen: number;
                title: string | undefined;
            };
            font: {
                family: string;
                size: number;
            };
            margin: {
                t: number;
                r: number;
            };
        };
        data(): readonly Readonly<{
            name: string;
            type: string;
            mode: string;
            interpolation: string;
            x: readonly number[];
            y: readonly number[];
        }>[];
    }
}

declare namespace $ {
    class $visavis_heatmap extends $visavis_plot_plotly {
    }
}

declare namespace $.$$ {
    class $visavis_heatmap extends $.$visavis_heatmap {
        json(): any;
        layout(): {
            showlegend: boolean;
            hovermode: string;
            xaxis: {
                autorange: boolean;
                showgrid: boolean;
                showline: boolean;
                zeroline: boolean;
                showticklabels: boolean;
            };
            xaxis2: {
                autorange: boolean;
                showgrid: boolean;
                showline: boolean;
                zeroline: boolean;
                showticklabels: boolean;
                side: string;
                overlaying: string;
            };
            yaxis: {
                autorange: boolean;
                showgrid: boolean;
                showline: boolean;
                zeroline: boolean;
                showticklabels: boolean;
            };
            yaxis2: {
                autorange: boolean;
                showgrid: boolean;
                showline: boolean;
                zeroline: boolean;
                showticklabels: boolean;
                side: string;
                overlaying: string;
            };
        };
        data(): ({
            type: string;
            mode: string;
            hoverinfo: string;
            x: any;
            y: any;
            text: any;
            marker: {
                color: any;
                colorscale: string;
                size: number;
                opacity: number;
            };
            xaxis?: undefined;
            yaxis?: undefined;
        } | {
            x: never[];
            y: never[];
            type: string;
            xaxis: string;
            yaxis: string;
            mode?: undefined;
            hoverinfo?: undefined;
            text?: undefined;
            marker?: undefined;
        })[];
    }
}

declare namespace $ {
    class $visavis_graph extends $mol_book2 {
        plot(): $visavis_plot;
        pages(): readonly any[];
        plot_title(): string;
        draw(): any;
        Root(): $mol_view;
        plot_body(): readonly any[];
        Plot(): $mol_page;
    }
}

declare namespace $.$$ {
    type Node = {
        name: string;
        index?: number;
        px?: number;
        py?: number;
        weight?: number;
        x?: number;
        y?: number;
    };
    type Edge = {
        source: Node;
        type: string;
        target: Node;
    };
    export const $visavis_graph_json: ((val: {
        error: string | null;
        warning: string | null;
        graph_rel: string;
        payload: readonly {
            source: string;
            type: string;
            target: string | number;
        }[];
    }) => Readonly<{
        error: string | null;
        warning: string | null;
        graph_rel: string;
        payload: readonly Readonly<{
            source: string;
            type: string;
            target: string | number;
        }>[];
    }>) & {
        config: {
            error: ((val: string | null) => string | null) & {
                config: (val: string) => string;
                Value: string | null;
            };
            warning: ((val: string | null) => string | null) & {
                config: (val: string) => string;
                Value: string | null;
            };
            graph_rel: (val: string) => string;
            payload: ((val: readonly {
                source: string;
                type: string;
                target: string | number;
            }[]) => readonly Readonly<{
                source: string;
                type: string;
                target: string | number;
            }>[]) & {
                config: ((val: {
                    source: string;
                    type: string;
                    target: string | number;
                }) => Readonly<{
                    source: string;
                    type: string;
                    target: string | number;
                }>) & {
                    config: {
                        source: (val: string) => string;
                        type: (val: string) => string;
                        target: ((val: string | number) => string | number) & {
                            config: [(val: string) => string, (val: number) => number];
                            Value: string | number;
                        };
                    };
                    Value: Readonly<{
                        source: string;
                        type: string;
                        target: string | number;
                    }>;
                };
                Value: readonly Readonly<{
                    source: string;
                    type: string;
                    target: string | number;
                }>[];
            };
        };
        Value: Readonly<{
            error: string | null;
            warning: string | null;
            graph_rel: string;
            payload: readonly Readonly<{
                source: string;
                type: string;
                target: string | number;
            }>[];
        }>;
    };
    export class $visavis_graph extends $.$visavis_graph {
        json(): Readonly<{
            error: string | null;
            warning: string | null;
            graph_rel: string;
            payload: readonly Readonly<{
                source: string;
                type: string;
                target: string | number;
            }>[];
        }>;
        plot_title(): string;
        data(): {
            nodes: Record<string, Node>;
            edges: Edge[];
            labels: Record<string, string>;
            radii: Record<string, number>;
            foci: Record<string, string>;
            table: Record<string, number>;
            circle_cls: string;
            text_cls: string;
        };
        draw(): void;
    }
    export {};
}

declare namespace $ {
}

declare namespace $.$$ {
}

declare namespace $ {
    class $visavis_app extends $mol_book2 {
        attr(): Record<string, any>;
        pages(): readonly any[];
        files_read(next?: any): any;
        Upload(): $mol_button_open;
        plot_id(id: any): string;
        Plot_link(id: any): $$.$mol_link;
        history_drop(id: any, next?: any): any;
        Plot_drop_icon(id: any): $mol_icon_delete;
        Plot_drop(id: any): $mol_button_minor;
        Plot(id: any): $mol_view;
        history_rows(): readonly any[];
        History(): $$.$mol_list;
        example_title(id: any): string;
        Example(id: any): $$.$mol_link;
        example_rows(): readonly any[];
        Examples(): $$.$mol_list;
        Deck(): $$.$mol_deck;
        Source(): $mol_link_source;
        Menu(): $mol_page;
        plot(id: any): $visavis_plot;
        Matrix(id: any): $$.$visavis_matrix;
        Cube(id: any): $$.$visavis_cube;
        Phase(id: any): $$.$visavis_phase;
        Bar(id: any): $$.$visavis_bar;
        Discovery(id: any): $$.$visavis_discovery;
        Eigen(id: any): $$.$visavis_eigen;
        Pie(id: any): $$.$visavis_pie;
        Scatter(id: any): $$.$visavis_scatter;
        Customscatter(id: any): $$.$visavis_customscatter;
        Heatmap(id: any): $$.$visavis_heatmap;
        Graph(id: any): $$.$visavis_graph;
    }
}

declare namespace $ {
    type $mol_blob = Blob;
    let $mol_blob: {
        new (blobParts?: readonly BlobPart[], options?: BlobPropertyBag): Blob;
        prototype: Blob;
    };
}

declare namespace $ {
    function $mol_blob_text(blob: $mol_blob): Promise<string>;
}

declare namespace $ {
    function $mol_blob_json(blob: $mol_blob): Promise<any>;
}

declare namespace $.$$ {
    class $visavis_app extends $.$visavis_app {
        files_read(next: readonly File[]): void;
        history_add(plot: $visavis_plot): void;
        history_drop(id: string): void;
        history_plots(next?: string[]): string[];
        history_plot(id: string, next?: $visavis_plot | null): $visavis_plot | null;
        history_rows(): $mol_view[];
        plot_id(id: string): string;
        plot_opened(next?: string | null): string;
        Plot_opened(): readonly any[];
        plot(plot: $visavis_plot): $visavis_plot;
        pages(): any[];
        Placeholder(): any;
    }
}

declare namespace $.$$ {
}

export = $;