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
    function $mol_func_name(this: $, func: Function): string;
    function $mol_func_name_from<Target extends Function>(target: Target, source: Function): Target;
}

declare namespace $ {
    class $mol_object2 {
        static $: $;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        get $(): $;
        set $(next: $);
        static create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        static [Symbol.toPrimitive](): any;
        static toString(): any;
        static toJSON(): any;
        destructor(): void;
        static destructor(): void;
        toString(): string;
    }
}

declare namespace $ {
    namespace $$ { }
    const $mol_object_field: unique symbol;
    class $mol_object extends $mol_object2 {
        static make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
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
        get incompleted(): boolean;
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
    const $mol_wire_affected: ($mol_wire_sub | number)[];
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
    function $mol_dev_format_native(obj: any): any[];
    function $mol_dev_format_auto(obj: any): any[];
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
    function $mol_promise_like(val: any): val is Promise<any>;
}

declare namespace $ {
    abstract class $mol_wire_fiber<Host, Args extends readonly unknown[], Result> extends $mol_wire_pub_sub {
        readonly task: (this: Host, ...args: Args) => Result;
        readonly host?: Host | undefined;
        static warm: boolean;
        static planning: Set<$mol_wire_fiber<any, any, any>>;
        static reaping: Set<$mol_wire_fiber<any, any, any>>;
        static plan_task: $mol_after_timeout | null;
        static plan(): void;
        static sync(): void;
        [Symbol.toStringTag]: string;
        cache: Result | Error | Promise<Result | Error>;
        get args(): Args;
        result(): Result | undefined;
        get incompleted(): boolean;
        field(): string;
        constructor(id: string, task: (this: Host, ...args: Args) => Result, host?: Host | undefined, args?: Args);
        plan(): this;
        reap(): void;
        toString(): string;
        toJSON(): string;
        get $(): any;
        emit(quant?: $mol_wire_cursor): void;
        fresh(): this | undefined;
        refresh(): void;
        abstract put(next: Result | Error | Promise<Result | Error>): Result | Error | Promise<Result | Error>;
        sync(): Awaited<Result>;
        async(): Promise<Result>;
        step(): Promise<null>;
    }
}

declare namespace $ {
    function $mol_guid(length?: number, exists?: (id: string) => boolean): string;
}

declare namespace $ {
    const $mol_key_store: WeakMap<object, string>;
    function $mol_key<Value>(value: Value): string;
}

declare namespace $ {
    class $mol_after_frame extends $mol_after_timeout {
        task: () => void;
        constructor(task: () => void);
    }
}

declare namespace $ {
    let $mol_compare_deep_cache: WeakMap<any, WeakMap<any, boolean>>;
    function $mol_compare_deep<Value>(left: Value, right: Value): boolean;
}

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
        hack_self<Context extends {
            span?: $mol_span;
            [key: string]: unknown;
        } = {}>(belt: $mol_tree2_belt<Context>, context?: Context): readonly $mol_tree2[];
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
        enumerable?: boolean;
        configurable?: boolean;
        writable?: boolean;
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
        enumerable?: boolean;
        configurable?: boolean;
        writable?: boolean;
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
declare const cache: Map<string, any>;

declare namespace $ {
    function $mol_env(): Record<string, string | undefined>;
}

declare namespace $ {
}

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
    function $mol_const<Value>(value: Value): {
        (): Value;
        '()': Value;
    };
}

declare namespace $ {
    function $mol_wire_solid(): void;
}

declare namespace $ {
    function $mol_dom_render_attributes(el: Element, attrs: {
        [key: string]: string | number | boolean | null;
    }): void;
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
    export function $mol_wire_async<Host extends object>(obj: Host): ObjectOrFunctionResultPromisify<Host>;
    type FunctionResultPromisify<Some> = Some extends (...args: infer Args) => infer Res ? Res extends PromiseLike<unknown> ? Some : (...args: Args) => Promise<Res> : Some;
    type MethodsResultPromisify<Host extends Object> = {
        [K in keyof Host]: FunctionResultPromisify<Host[K]>;
    };
    type ObjectOrFunctionResultPromisify<Some> = (Some extends (...args: any) => unknown ? FunctionResultPromisify<Some> : {}) & (Some extends Object ? MethodsResultPromisify<Some> : Some);
    export {};
}

declare namespace $ {
    type $mol_type_keys_extract<Input, Upper, Lower = never> = {
        [Field in keyof Input]: unknown extends Input[Field] ? never : Input[Field] extends never ? never : Input[Field] extends Upper ? [
            Lower
        ] extends [Input[Field]] ? Field : never : never;
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
    type $mol_style_unit_str<Quanity extends $mol_style_unit_any = $mol_style_unit_any> = `${number}${Quanity}`;
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
    type $mol_style_func_name = 'calc' | 'hsla' | 'rgba' | 'var' | 'clamp' | 'scale' | 'cubic-bezier' | 'linear' | 'steps' | $mol_style_func_image | $mol_style_func_filter;
    type $mol_style_func_image = 'url' | 'linear-gradient' | 'radial-gradient' | 'conic-gradient';
    type $mol_style_func_filter = 'blur' | 'brightness' | 'contrast' | 'drop-shadow' | 'grayscale' | 'hue-rotate' | 'invert' | 'opacity' | 'sepia' | 'saturate';
    class $mol_style_func<Name extends $mol_style_func_name, Value = unknown> extends $mol_decor<Value> {
        readonly name: Name;
        constructor(name: Name, value: Value);
        prefix(): string;
        postfix(): string;
        static linear_gradient<Value>(value: Value): $mol_style_func<"linear-gradient", Value>;
        static calc<Value>(value: Value): $mol_style_func<"calc", Value>;
        static vary<Name extends string, Value extends string>(name: Name, defaultValue?: Value): $mol_style_func<"var", Name | (Name | Value)[]>;
        static url<Href extends string>(href: Href): $mol_style_func<"url", string>;
        static hsla(hue: number, saturation: number, lightness: number, alpha: number): $mol_style_func<"hsla", (number | `${number}%`)[]>;
        static clamp(min: $mol_style_unit_str<any>, mid: $mol_style_unit_str<any>, max: $mol_style_unit_str<any>): $mol_style_func<"clamp", `${number}${any}`[]>;
        static rgba(red: number, green: number, blue: number, alpha: number): $mol_style_func<"rgba", number[]>;
        static scale(zoom: number): $mol_style_func<"scale", number[]>;
        static linear(...breakpoints: Array<number | [number, number | $mol_style_unit_str<'%'>]>): $mol_style_func<"linear", string[]>;
        static cubic_bezier(x1: number, y1: number, x2: number, y2: number): $mol_style_func<"cubic-bezier", number[]>;
        static steps(value: number, step_position: 'jump-start' | 'jump-end' | 'jump-none' | 'jump-both' | 'start' | 'end'): $mol_style_func<"steps", (number | "end" | "start" | "jump-start" | "jump-end" | "jump-none" | "jump-both")[]>;
        static blur(value?: $mol_style_unit_str<$mol_style_unit_length>): $mol_style_func<"blur", string>;
        static brightness(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"brightness", string | number>;
        static contrast(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"contrast", string | number>;
        static drop_shadow(color: $mol_style_properties_color, x_offset: $mol_style_unit_str<$mol_style_unit_length>, y_offset: $mol_style_unit_str<$mol_style_unit_length>, blur_radius?: $mol_style_unit_str<$mol_style_unit_length>): $mol_style_func<"drop-shadow", (`${number}%` | `${number}px` | `${number}mm` | `${number}cm` | `${number}Q` | `${number}in` | `${number}pc` | `${number}pt` | `${number}cap` | `${number}ch` | `${number}em` | `${number}rem` | `${number}ex` | `${number}ic` | `${number}lh` | `${number}rlh` | `${number}vh` | `${number}vw` | `${number}vi` | `${number}vb` | `${number}vmin` | `${number}vmax` | $mol_style_properties_color)[]>;
        static grayscale(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"grayscale", string | number>;
        static hue_rotate(value?: 0 | $mol_style_unit_str<$mol_style_unit_angle>): $mol_style_func<"hue-rotate", string | 0>;
        static invert(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"invert", string | number>;
        static opacity(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"opacity", string | number>;
        static sepia(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"sepia", string | number>;
        static saturate(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"saturate", string | number>;
    }
}

declare namespace $ {
    type $mol_type_override<Base, Over> = Omit<Base, keyof Over> & Over;
}

declare namespace $ {
    export type $mol_style_properties = Partial<$mol_type_override<CSSStyleDeclaration, Overrides>>;
    type Common = 'inherit' | 'initial' | 'unset' | 'revert' | 'revert-layer' | $mol_style_func<'var'>;
    export type $mol_style_properties_color = 'aliceblue' | 'antiquewhite' | 'aqua' | 'aquamarine' | 'azure' | 'beige' | 'bisque' | 'black' | 'blanchedalmond' | 'blue' | 'blueviolet' | 'brown' | 'burlywood' | 'cadetblue' | 'chartreuse' | 'chocolate' | 'coral' | 'cornflowerblue' | 'cornsilk' | 'crimson' | 'cyan' | 'darkblue' | 'darkcyan' | 'darkgoldenrod' | 'darkgray' | 'darkgreen' | 'darkgrey' | 'darkkhaki' | 'darkmagenta' | 'darkolivegreen' | 'darkorange' | 'darkorchid' | 'darkred' | 'darksalmon' | 'darkseagreen' | 'darkslateblue' | 'darkslategrey' | 'darkturquoise' | 'darkviolet' | 'deeppink' | 'deepskyblue' | 'dimgray' | 'dimgrey' | 'dodgerblue' | 'firebrick' | 'floralwhite' | 'forestgreen' | 'fuchsia' | 'gainsboro' | 'ghostwhite' | 'gold' | 'goldenrod' | 'gray' | 'green' | 'greenyellow' | 'grey' | 'honeydew' | 'hotpink' | 'indianred' | 'indigo' | 'ivory' | 'khaki' | 'lavender' | 'lavenderblush' | 'lawngreen' | 'lemonchiffon' | 'lightblue' | 'lightcoral' | 'lightcyan' | 'lightgoldenrodyellow' | 'lightgray' | 'lightgreen' | 'lightgrey' | 'lightpink' | 'lightsalmon' | 'lightseagreen' | 'lightskyblue' | 'lightslategray' | 'lightslategrey' | 'lightsteelblue' | 'lightyellow' | 'lime' | 'limegreen' | 'linen' | 'magenta' | 'maroon' | 'mediumaquamarine' | 'mediumblue' | 'mediumorchid' | 'mediumpurple' | 'mediumseagreen' | 'mediumslateblue' | 'mediumspringgreen' | 'mediumturquoise' | 'mediumvioletred' | 'midnightblue' | 'mintcream' | 'mistyrose' | 'moccasin' | 'navajowhite' | 'navy' | 'oldlace' | 'olive' | 'olivedrab' | 'orange' | 'orangered' | 'orchid' | 'palegoldenrod' | 'palegreen' | 'paleturquoise' | 'palevioletred' | 'papayawhip' | 'peachpuff' | 'peru' | 'pink' | 'plum' | 'powderblue' | 'purple' | 'rebeccapurple' | 'red' | 'rosybrown' | 'royalblue' | 'saddlebrown' | 'salmon' | 'sandybrown' | 'seagreen' | 'seashell' | 'sienna' | 'silver' | 'skyblue' | 'slateblue' | 'slategray' | 'slategrey' | 'snow' | 'springgreen' | 'steelblue' | 'tan' | 'teal' | 'thistle' | 'tomato' | 'turquoise' | 'violet' | 'wheat' | 'white' | 'whitesmoke' | 'yellow' | 'yellowgreen' | 'transparent' | 'currentcolor' | $mol_style_func<'hsla' | 'rgba' | 'var'> | `#${string}`;
    type Length = 0 | `${number}${$mol_style_unit_length}` | $mol_style_func<'calc' | 'var' | 'clamp'>;
    type Size = 'auto' | 'max-content' | 'min-content' | 'fit-content' | Length | Common;
    type Directions<Value> = Value | readonly [Value, Value] | {
        top?: Value;
        right?: Value;
        bottom?: Value;
        left?: Value;
    };
    type Single_animation_composition = 'replace' | 'add' | 'accumulate';
    type Single_animation_direction = 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
    type Single_animation_fill_mode = 'none' | 'forwards' | 'backwards' | 'both';
    type Single_animation_iteration_count = 'infinite' | number;
    type Single_animation_play_state = 'running' | 'paused';
    type Easing_function = Linear_easing_function | Cubic_bezier_easing_function | Step_easing_function;
    type Linear_easing_function = 'linear' | $mol_style_func<'linear'>;
    type Cubic_bezier_easing_function = 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | $mol_style_func<'cubic-bezier'>;
    type Step_easing_function = 'step-start' | 'step-end' | $mol_style_func<'steps'>;
    type Compat_auto = 'searchfield' | 'textarea' | 'push-button' | 'slider-horizontal' | 'checkbox' | 'radio' | 'menulist' | 'listbox' | 'meter' | 'progress-bar' | 'button';
    type Compat_special = 'textfield' | 'menulist-button';
    type Mix_blend_mode = Blend_mode | 'plus-darker' | 'plus-lighter';
    type Blend_mode = 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity';
    type Box = 'border-box' | 'padding-box' | 'content-box';
    type Baseline_position = 'baseline' | `${'first' | 'last'} baseline`;
    type Content_distribution = 'space-between' | 'space-around' | 'space-evenly' | 'stretch';
    type Self_position = 'center' | 'start' | 'end' | 'self-start' | 'self-end' | 'flex-start' | 'flex-end';
    type Content_position = 'center' | 'start' | 'end' | 'flex-start' | 'flex-end';
    type Span_align = 'none' | 'start' | 'end' | 'center' | $mol_style_func<'var'>;
    type Snap_axis = 'x' | 'y' | 'block' | 'inline' | 'both' | $mol_style_func<'var'>;
    type Overflow = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto' | 'overlay' | Common;
    type Overflow_position = 'unsafe' | 'safe';
    type ContainRule = 'size' | 'layout' | 'style' | 'paint' | $mol_style_func<'var'>;
    type Repeat = 'repeat-x' | 'repeat-y' | 'repeat' | 'space' | 'round' | 'no-repeat' | $mol_style_func<'var'>;
    type BG_size = Length | 'auto' | 'contain' | 'cover';
    interface Overrides {
        accentColor?: $mol_style_properties_color | Common;
        align?: {
            content?: 'normal' | Baseline_position | Content_distribution | Content_position | `${Overflow_position} ${Content_position}` | Common;
            items?: 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
            self?: 'auto' | 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
        };
        justify?: {
            content?: 'normal' | Baseline_position | Content_distribution | Content_position | `${Overflow_position} ${Content_position}` | Common;
            items?: 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
            self?: 'auto' | 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
        };
        all?: Common;
        animation?: {
            composition?: Single_animation_composition | Single_animation_composition[][] | Common;
            delay?: $mol_style_unit_str<$mol_style_unit_time> | $mol_style_unit_str<$mol_style_unit_time>[][] | Common;
            direction?: Single_animation_direction | Single_animation_direction[][] | Common;
            duration?: $mol_style_unit_str<$mol_style_unit_time> | $mol_style_unit_str<$mol_style_unit_time>[][] | Common;
            fillMode?: Single_animation_fill_mode | Single_animation_fill_mode[][] | Common;
            iterationCount?: Single_animation_iteration_count | Single_animation_iteration_count[][] | Common;
            name?: 'none' | string & {} | ('none' | string & {})[][] | Common;
            playState?: Single_animation_play_state | Single_animation_play_state[][] | Common;
            timingFunction?: Easing_function | Easing_function[][] | Common;
        };
        appearance?: 'none' | 'auto' | Compat_auto | Compat_special | Common;
        aspectRatio?: 'auto' | number | `${number} / ${number}`;
        backdropFilter: $mol_style_func<$mol_style_func_filter> | $mol_style_func<'url'> | ($mol_style_func<$mol_style_func_filter> | $mol_style_func<'url'>)[][] | 'none' | Common;
        backfaceVisibility: 'visible' | 'hidden' | Common;
        justifyContent?: 'start' | 'end' | 'flex-start' | 'flex-end' | 'left' | 'right' | 'space-between' | 'space-around' | 'space-evenly' | 'normal' | 'stretch' | 'center' | Common;
        gap?: Length;
        background?: 'none' | {
            attachment?: 'scroll' | 'fixed' | 'local' | ('scroll' | 'fixed' | 'local')[][] | Common;
            blendMode?: Mix_blend_mode | Mix_blend_mode[][] | Common;
            clip?: Box | Box[][] | Common;
            color?: $mol_style_properties_color | Common;
            image?: readonly (readonly [$mol_style_func<$mol_style_func_image> | string & {}])[] | 'none' | Common;
            repeat?: Repeat | [Repeat, Repeat] | Common;
            position?: 'left' | 'right' | 'top' | 'bottom' | 'center' | Common;
            size?: (BG_size | [BG_size, BG_size])[];
        };
        box?: {
            shadow?: readonly ([
                ...[inset: 'inset'] | [],
                x: Length,
                y: Length,
                blur: Length,
                spread: Length,
                color: $mol_style_properties_color
            ] | {
                inset?: boolean;
                x: Length;
                y: Length;
                blur: Length;
                spread: Length;
                color: $mol_style_properties_color;
            })[] | 'none' | Common;
        };
        font?: {
            style?: 'normal' | 'italic' | Common;
            weight?: 'normal' | 'bold' | 'lighter' | 'bolder' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | Common;
            size?: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large' | 'xxx-large' | 'smaller' | 'larger' | Length | Common;
            family?: string & {} | 'serif' | 'sans-serif' | 'monospace' | 'cursive' | 'fantasy' | 'system-ui' | 'ui-serif' | 'ui-sans-serif' | 'ui-monospace' | 'ui-rounded' | 'emoji' | 'math' | 'fangsong' | Common;
        };
        color?: $mol_style_properties_color | Common;
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
            color?: readonly [$mol_style_properties_color, $mol_style_properties_color] | 'auto' | Common;
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
        border?: Directions<{
            radius?: Length | [Length, Length];
            style?: 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | Common;
            color?: $mol_style_properties_color | Common;
            width?: Length | Common;
        }>;
        flex?: 'none' | 'auto' | {
            grow?: number | Common;
            shrink?: number | Common;
            basis?: Size | Common;
            direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | Common;
            wrap?: 'wrap' | 'nowrap' | 'wrap-reverse' | Common;
        };
        zIndex: number | Common;
        opacity: number | Common;
    }
    export {};
}

declare namespace $ {
    function $mol_style_prop<Keys extends string[]>(prefix: string, keys: Keys): Record<Keys[number], $mol_style_func<"var", unknown>>;
}

declare namespace $ {
    const $mol_theme: Record<"image" | "line" | "text" | "field" | "focus" | "back" | "hover" | "card" | "current" | "special" | "control" | "shade", $mol_style_func<"var", unknown>>;
}

declare namespace $ {
}

declare namespace $ {
    let $mol_gap: Record<"text" | "space" | "blur" | "block" | "round", $mol_style_func<"var", unknown>>;
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
        sub(): readonly ($mol_view | Node | string | number | boolean)[];
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
        dom_node_external(next?: Element): Element;
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
        theme(next?: null | string): string | null;
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
        event_async(): {
            [x: string]: (event: Event) => Promise<void>;
        };
        plugins(): readonly $mol_view[];
        view_find(check: (path: $mol_view, text?: string) => boolean, path?: $mol_view[]): Generator<$mol_view[]>;
        force_render(path: Set<$mol_view>): void;
        ensure_visible(view: $mol_view, align?: ScrollLogicalPosition): void;
        bring(): void;
        destructor(): void;
    }
    type $mol_view_all = $mol_type_pick<$, typeof $mol_view>;
}

declare namespace $ {
}

declare namespace $ {
    class $mol_plugin extends $mol_view {
        dom_node_external(next?: Element): Element;
        render(): void;
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
    } & $mol_style_properties & {
        [key in keyof Config]: key extends keyof $mol_style_properties ? $mol_style_properties[key] : key extends '>' | $mol_style_pseudo_class | $mol_style_pseudo_element ? $mol_style_guard<View, Config[key]> : key extends '@' ? Attrs<View, Config[key]> : key extends '@media' ? Medias<View, Config[key]> : key extends `[${string}]` ? {
            [val in keyof Config[key]]: $mol_style_guard<View, Config[key][val]>;
        } : key extends `--${string}` ? any : key extends keyof $ ? $mol_style_guard<InstanceType<Extract<$[key], typeof $mol_view>>, Config[key]> : key extends keyof View ? View[key] extends (id?: any) => infer Sub ? Sub extends $mol_view ? $mol_style_guard<Sub, Config[key]> : $mol_type_error<'Property returns non $mol_view', {
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

declare namespace $ {

	export class $mol_scroll extends $mol_view {
		tabindex( ): number
		event_scroll( next?: any ): any
		scroll_top( next?: number ): number
		scroll_left( next?: number ): number
		field( ): ({ 
			'tabIndex': ReturnType< $mol_scroll['tabindex'] >,
		})  & ReturnType< $mol_view['field'] >
		event( ): ({ 
			scroll( next?: ReturnType< $mol_scroll['event_scroll'] > ): ReturnType< $mol_scroll['event_scroll'] >,
		})  & ReturnType< $mol_view['event'] >
	}
	
}

//# sourceMappingURL=scroll.view.tree.d.ts.map
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
    let $mol_mem_cached: typeof $mol_wire_probe;
}

declare namespace $ {
    let $mol_layer: Record<string, $mol_style_func<"var", unknown>>;
}

declare namespace $ {
}

declare namespace $ {
    type $mol_type_enforce<Actual extends Expected, Expected> = Actual;
}

declare namespace $ {

	type $mol_view__title__S5FQAZZC = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['title'] >
	>
	export class $mol_book2 extends $mol_scroll {
		pages( ): readonly($mol_view)[]
		menu_title( ): string
		sub( ): ReturnType< $mol_book2['pages'] >
		minimal_width( ): number
		Placeholder( ): $mol_view
		Gap( id: any): $mol_view
	}
	
}

//# sourceMappingURL=book2.view.tree.d.ts.map
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

	export class $mol_paragraph extends $mol_view {
		line_height( ): number
		letter_width( ): number
		width_limit( ): number
		row_width( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=paragraph.view.tree.d.ts.map
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
}

declare namespace $ {

	export class $mol_speck extends $mol_view {
		theme( ): string
		value( ): any
		attr( ): ({ 
			'mol_theme': ReturnType< $mol_speck['theme'] >,
		})  & ReturnType< $mol_view['attr'] >
		style( ): ({ 
			'minHeight': string,
		})  & ReturnType< $mol_view['style'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=speck.view.tree.d.ts.map
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

declare namespace $ {

	type $mol_speck__value__5LY63LRV = $mol_type_enforce<
		ReturnType< $mol_button['error'] >
		,
		ReturnType< $mol_speck['value'] >
	>
	export class $mol_button extends $mol_view {
		event_activate( next?: any ): any
		clicks( next?: any ): any
		event_key_press( next?: any ): any
		disabled( ): boolean
		tab_index( ): number
		hint( ): string
		hint_safe( ): ReturnType< $mol_button['hint'] >
		error( ): string
		enabled( ): boolean
		click( next?: any ): any
		event_click( next?: any ): any
		event( ): ({ 
			click( next?: ReturnType< $mol_button['event_activate'] > ): ReturnType< $mol_button['event_activate'] >,
			dblclick( next?: ReturnType< $mol_button['clicks'] > ): ReturnType< $mol_button['clicks'] >,
			keydown( next?: ReturnType< $mol_button['event_key_press'] > ): ReturnType< $mol_button['event_key_press'] >,
		})  & ReturnType< $mol_view['event'] >
		attr( ): ({ 
			'disabled': ReturnType< $mol_button['disabled'] >,
			'role': string,
			'tabindex': ReturnType< $mol_button['tab_index'] >,
			'title': ReturnType< $mol_button['hint_safe'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly($mol_view_content)[]
		Speck( ): $mol_speck
	}
	
}

//# sourceMappingURL=button.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_button extends $.$mol_button {
        status(next?: any[]): any[];
        disabled(): boolean;
        event_activate(next: Event): void;
        event_key_press(event: KeyboardEvent): void;
        tab_index(): number;
        error(): string;
        hint_safe(): string;
        sub_visible(): ($mol_speck | $mol_view_content)[];
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_button_typed extends $mol_button {
		minimal_height( ): number
		minimal_width( ): number
	}
	
}

//# sourceMappingURL=typed.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_button_minor extends $mol_button_typed {
	}
	
}

//# sourceMappingURL=minor.view.tree.d.ts.map
declare namespace $ {
    class $mol_state_time extends $mol_object {
        static task(precision: number, reset?: null): $mol_after_timeout | $mol_after_frame;
        static now(precision: number): number;
    }
}

declare namespace $ {

	export class $mol_svg extends $mol_view {
		dom_name( ): string
		dom_name_space( ): string
		font_size( ): number
		font_family( ): string
		style_size( ): Record<string, any>
	}
	
}

//# sourceMappingURL=svg.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_svg extends $.$mol_svg {
        computed_style(): Record<string, any>;
        font_size(): number;
        font_family(): any;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_svg_root extends $mol_svg {
		view_box( ): string
		aspect( ): string
		dom_name( ): string
		attr( ): ({ 
			'viewBox': ReturnType< $mol_svg_root['view_box'] >,
			'preserveAspectRatio': ReturnType< $mol_svg_root['aspect'] >,
		})  & ReturnType< $mol_svg['attr'] >
	}
	
}

//# sourceMappingURL=root.view.tree.d.ts.map
declare namespace $ {

	export class $mol_svg_path extends $mol_svg {
		geometry( ): string
		dom_name( ): string
		attr( ): ({ 
			'd': ReturnType< $mol_svg_path['geometry'] >,
		})  & ReturnType< $mol_svg['attr'] >
	}
	
}

//# sourceMappingURL=path.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	type $mol_svg_path__geometry__7DODEM7K = $mol_type_enforce<
		ReturnType< $mol_icon['path'] >
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	export class $mol_icon extends $mol_svg_root {
		path( ): string
		Path( ): $mol_svg_path
		view_box( ): string
		minimal_width( ): number
		minimal_height( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=icon.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_upload extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=upload.view.tree.d.ts.map
declare namespace $ {

	type $mol_button_open_native__files__R94TCZOB = $mol_type_enforce<
		ReturnType< $mol_button_open['files'] >
		,
		ReturnType< $mol_button_open_native['files'] >
	>
	type $mol_button_open_native__accept__YVWU6W89 = $mol_type_enforce<
		ReturnType< $mol_button_open['accept'] >
		,
		ReturnType< $mol_button_open_native['accept'] >
	>
	type $mol_button_open_native__multiple__CJ841LVG = $mol_type_enforce<
		ReturnType< $mol_button_open['multiple'] >
		,
		ReturnType< $mol_button_open_native['multiple'] >
	>
	export class $mol_button_open extends $mol_button_minor {
		Icon( ): $mol_icon_upload
		files( next?: readonly(any)[] ): readonly(any)[]
		accept( ): string
		multiple( ): boolean
		Native( ): $mol_button_open_native
		sub( ): readonly(any)[]
	}
	
	export class $mol_button_open_native extends $mol_view {
		accept( ): string
		multiple( ): boolean
		picked( next?: any ): any
		dom_name( ): string
		files( next?: readonly(any)[] ): readonly(any)[]
		attr( ): ({ 
			'type': string,
			'accept': ReturnType< $mol_button_open_native['accept'] >,
			'multiple': ReturnType< $mol_button_open_native['multiple'] >,
		}) 
		event( ): ({ 
			change( next?: ReturnType< $mol_button_open_native['picked'] > ): ReturnType< $mol_button_open_native['picked'] >,
		}) 
	}
	
}

//# sourceMappingURL=open.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_button_open_native extends $.$mol_button_open_native {
        dom_node(): HTMLInputElement;
        picked(): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    function $mol_support_css_overflow_anchor(this: $): boolean;
}

declare namespace $ {

	type $mol_view__style__JZ3X9JN6 = $mol_type_enforce<
		({ 
			'paddingTop': ReturnType< $mol_list['gap_before'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__style__P7UK1A0G = $mol_type_enforce<
		({ 
			'paddingTop': ReturnType< $mol_list['gap_after'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	export class $mol_list extends $mol_view {
		rows( ): readonly($mol_view)[]
		gap_before( ): number
		gap_after( ): number
		render_visible_only( ): boolean
		render_over( ): number
		sub( ): ReturnType< $mol_list['rows'] >
		Empty( ): $mol_view
		Gap_before( ): $mol_view
		Gap_after( ): $mol_view
		view_window( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
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
    let $mol_action: typeof $mol_wire_method;
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

declare namespace $ {

	export class $mol_link extends $mol_view {
		uri_toggle( ): string
		hint( ): string
		hint_safe( ): ReturnType< $mol_link['hint'] >
		target( ): string
		file_name( ): string
		current( ): boolean
		relation( ): string
		event_click( next?: any ): any
		click( next?: ReturnType< $mol_link['event_click'] > ): ReturnType< $mol_link['event_click'] >
		uri( ): string
		dom_name( ): string
		uri_off( ): string
		uri_native( ): any
		external( ): boolean
		attr( ): ({ 
			'href': ReturnType< $mol_link['uri_toggle'] >,
			'title': ReturnType< $mol_link['hint_safe'] >,
			'target': ReturnType< $mol_link['target'] >,
			'download': ReturnType< $mol_link['file_name'] >,
			'mol_link_current': ReturnType< $mol_link['current'] >,
			'rel': ReturnType< $mol_link['relation'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly($mol_view_content)[]
		arg( ): Record<string, any>
		event( ): ({ 
			click( next?: ReturnType< $mol_link['click'] > ): ReturnType< $mol_link['click'] >,
		})  & ReturnType< $mol_view['event'] >
	}
	
}

//# sourceMappingURL=link.view.tree.d.ts.map
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

	export class $mol_ghost extends $mol_view {
		Sub( ): $mol_view
	}
	
}

//# sourceMappingURL=ghost.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_ghost extends $.$mol_ghost {
        dom_node_external(next?: Element): Element;
        dom_node_actual(): Element;
        dom_tree(): Element;
        title(): string;
        minimal_width(): number;
        minimal_height(): number;
    }
}

declare namespace $ {

	export class $mol_drop extends $mol_ghost {
		enter( next?: any ): any
		move( next?: any ): any
		leave( next?: any ): any
		drop( next?: any ): any
		status( next?: string ): string
		enabled( next?: boolean ): boolean
		event( ): ({ 
			dragenter( next?: ReturnType< $mol_drop['enter'] > ): ReturnType< $mol_drop['enter'] >,
			dragover( next?: ReturnType< $mol_drop['move'] > ): ReturnType< $mol_drop['move'] >,
			dragleave( next?: ReturnType< $mol_drop['leave'] > ): ReturnType< $mol_drop['leave'] >,
			drop( next?: ReturnType< $mol_drop['drop'] > ): ReturnType< $mol_drop['drop'] >,
		}) 
		attr( ): ({ 
			'mol_drop_status': ReturnType< $mol_drop['status'] >,
		}) 
		adopt( next?: Record<string, any> ): Record<string, any>
		receive( next?: any ): any
		allow( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=drop.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_drop extends $.$mol_drop {
        status(next?: "ready" | "drag"): "ready" | "drag";
        protected _target: EventTarget | null;
        enter(event: DragEvent): void;
        move(event: DragEvent): void;
        decide_action(event: DragEvent): any;
        leave(event: DragEvent): void;
        receive(transfer: unknown): unknown;
        drop(event: DragEvent): void;
    }
}

declare namespace $ {

	export class $mol_image extends $mol_view {
		uri( ): string
		loading( ): string
		decoding( ): string
		cors( ): any
		natural_width( ): number
		natural_height( ): number
		load( next?: any ): any
		dom_name( ): string
		field( ): Record<string, any> & ReturnType< $mol_view['field'] >
		attr( ): Record<string, any> & ReturnType< $mol_view['attr'] >
		event( ): Record<string, any>
		minimal_width( ): number
		minimal_height( ): number
	}
	
}

//# sourceMappingURL=image.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_image extends $.$mol_image {
        natural_width(next?: null): number;
        natural_height(next?: null): number;
        load(): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_image__uri__DIRGDYLH = $mol_type_enforce<
		ReturnType< $mol_link_iconed['icon'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_image__title__QS7VB6WJ = $mol_type_enforce<
		string
		,
		ReturnType< $mol_image['title'] >
	>
	export class $mol_link_iconed extends $mol_link {
		icon( ): string
		Icon( ): $mol_image
		title( ): ReturnType< $mol_link_iconed['uri'] >
		sub( ): readonly(any)[]
		content( ): readonly(any)[]
		host( ): string
	}
	
}

//# sourceMappingURL=iconed.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_link_iconed extends $.$mol_link_iconed {
        icon(): string;
        host(): string;
        title(): string;
        sub(): readonly any[];
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_delete extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=delete.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__dom_name__SIJC4UEG = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub__6TG0FDTO = $mol_type_enforce<
		ReturnType< $mol_page['title_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub__T9B4VVM3 = $mol_type_enforce<
		ReturnType< $mol_page['tools'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_height__B1TGFSQJ = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__dom_name__5M62GKP8 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub__R9SE8NBS = $mol_type_enforce<
		ReturnType< $mol_page['head'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_page_body_scroll_top__I8TJKOI3 = $mol_type_enforce<
		Parameters< $mol_page['body_scroll_top'] >[0]
		,
		Parameters< ReturnType< $mol_page['Body'] >['scroll_top'] >[0]
	>
	type $mol_view__sub__WEZRK2Z5 = $mol_type_enforce<
		ReturnType< $mol_page['body'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_scroll__sub__NQUOBNX4 = $mol_type_enforce<
		ReturnType< $mol_page['body_content'] >
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_view__dom_name__MY3DPKQG = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub__WHEQY04B = $mol_type_enforce<
		ReturnType< $mol_page['foot'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_page extends $mol_view {
		tabindex( ): number
		Logo( ): any
		title_content( ): readonly(any)[]
		Title( ): $mol_view
		tools( ): readonly($mol_view_content)[]
		Tools( ): $mol_view
		head( ): readonly(any)[]
		Head( ): $mol_view
		body_scroll_top( next?: ReturnType< ReturnType< $mol_page['Body'] >['scroll_top'] > ): ReturnType< ReturnType< $mol_page['Body'] >['scroll_top'] >
		body( ): readonly($mol_view)[]
		Body_content( ): $mol_view
		body_content( ): readonly(any)[]
		Body( ): $mol_scroll
		foot( ): readonly($mol_view)[]
		Foot( ): $mol_view
		dom_name( ): string
		field( ): ({ 
			'tabIndex': ReturnType< $mol_page['tabindex'] >,
		})  & ReturnType< $mol_view['field'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=page.view.tree.d.ts.map
declare namespace $.$$ {
}

declare namespace $ {

	export class $mol_icon_arrow_expand extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=expand.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_arrow_expand_all extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=all.view.tree.d.ts.map
declare namespace $ {

	type $mpds_visavis_plot_legend_cmp_label__label__U6AEJQRA = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_legend_cmp['label'] >
		,
		ReturnType< $mpds_visavis_plot_legend_cmp_label['label'] >
	>
	type $mpds_visavis_plot_legend_cmp_label__background__K8EC64NY = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_legend_cmp['background'] >
		,
		ReturnType< $mpds_visavis_plot_legend_cmp_label['background'] >
	>
	type $mpds_visavis_plot_legend_cmp_label__label__HRHCS2HI = $mol_type_enforce<
		string
		,
		ReturnType< $mpds_visavis_plot_legend_cmp_label['label'] >
	>
	type $mpds_visavis_plot_legend_cmp_label__background__F6U18VD7 = $mol_type_enforce<
		string
		,
		ReturnType< $mpds_visavis_plot_legend_cmp_label['background'] >
	>
	export class $mpds_visavis_plot_legend_cmp extends $mol_view {
		label( id: any): string
		background( id: any): string
		Label( id: any): $mpds_visavis_plot_legend_cmp_label
		Intersection( ): $mpds_visavis_plot_legend_cmp_label
		sub( ): readonly(any)[]
		labels( ): readonly(any)[]
		colorset( ): readonly(any)[]
	}
	
	export class $mpds_visavis_plot_legend_cmp_label extends $mol_view {
		label( ): string
		background( ): string
		sub( ): readonly(any)[]
		style( ): ({ 
			'background': ReturnType< $mpds_visavis_plot_legend_cmp_label['background'] >,
		})  & ReturnType< $mol_view['style'] >
	}
	
}

//# sourceMappingURL=cmp.view.tree.d.ts.map
declare namespace $.$$ {
    class $mpds_visavis_plot_legend_cmp extends $.$mpds_visavis_plot_legend_cmp {
        sub(): readonly any[];
        label(index: number): string;
        background(index: number): string;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    function $mol_maybe<Value>(value: Value | null | undefined): Value[];
}

declare namespace $ {
}

declare namespace $ {

	type $mol_view__sub__BVCPQ901 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_check extends $mol_button_minor {
		checked( next?: boolean ): boolean
		aria_checked( ): string
		aria_role( ): string
		Icon( ): any
		title( ): string
		Title( ): $mol_view
		label( ): readonly(any)[]
		attr( ): ({ 
			'mol_check_checked': ReturnType< $mol_check['checked'] >,
			'aria-checked': ReturnType< $mol_check['aria_checked'] >,
			'role': ReturnType< $mol_check['aria_role'] >,
		})  & ReturnType< $mol_button_minor['attr'] >
		sub( ): readonly($mol_view_content)[]
	}
	
}

//# sourceMappingURL=check.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_check extends $.$mol_check {
        click(next?: Event): void;
        sub(): readonly $mol_view_content[];
        label(): readonly any[];
        aria_checked(): string;
    }
}

declare namespace $ {

	export class $mol_icon_tick extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=tick.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_check_box extends $mol_check {
		Icon( ): $mol_icon_tick
	}
	
}

//# sourceMappingURL=box.view.tree.d.ts.map
declare namespace $ {

	type $mol_check__checked__H0XNE88J = $mol_type_enforce<
		ReturnType< $mol_check_list['option_checked'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_check__label__6CEDGHKZ = $mol_type_enforce<
		ReturnType< $mol_check_list['option_label'] >
		,
		ReturnType< $mol_check['label'] >
	>
	type $mol_check__enabled__U0DKPVSM = $mol_type_enforce<
		ReturnType< $mol_check_list['option_enabled'] >
		,
		ReturnType< $mol_check['enabled'] >
	>
	type $mol_check__hint__6GXSNSDD = $mol_type_enforce<
		ReturnType< $mol_check_list['option_hint'] >
		,
		ReturnType< $mol_check['hint'] >
	>
	type $mol_check__minimal_height__H1Z561XK = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_height'] >
	>
	export class $mol_check_list extends $mol_view {
		option_checked( id: any, next?: boolean ): boolean
		option_title( id: any): string
		option_label( id: any): readonly(any)[]
		enabled( ): boolean
		option_enabled( id: any): ReturnType< $mol_check_list['enabled'] >
		option_hint( id: any): string
		items( ): readonly($mol_check)[]
		dictionary( ): Record<string, any>
		Option( id: any): $mol_check
		options( ): Record<string, any>
		keys( ): readonly(string)[]
		sub( ): ReturnType< $mol_check_list['items'] >
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_check_list extends $.$mol_check_list {
        options(): {
            [key: string]: string;
        };
        dictionary(next?: Record<string, boolean>): Record<string, boolean>;
        option_checked(id: string, next?: boolean | null): boolean;
        keys(): readonly string[];
        items(): $.$mol_check[];
        option_title(key: string): string;
    }
}

declare namespace $ {
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

declare namespace $ {

	export class $mol_switch extends $mol_check_list {
		value( next?: string ): string
	}
	
}

//# sourceMappingURL=switch.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_switch extends $.$mol_switch {
        value(next?: string): string;
        option_checked(key: string, next?: boolean): boolean;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_view__minimal_height__SWT5WHU3 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub__K9GQ3VRA = $mol_type_enforce<
		ReturnType< $mol_labeler['label'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_height__HOUTJAJK = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub__P31OVTX4 = $mol_type_enforce<
		ReturnType< $mol_labeler['content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_labeler extends $mol_list {
		label( ): readonly($mol_view_content)[]
		Label( ): $mol_view
		content( ): readonly(any)[]
		Content( ): $mol_view
		rows( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=labeler.view.tree.d.ts.map
declare namespace $ {

	type $mol_pop_bubble__align__SNCSP7OQ = $mol_type_enforce<
		ReturnType< $mol_pop['align'] >
		,
		ReturnType< $mol_pop_bubble['align'] >
	>
	type $mol_pop_bubble__content__EX39DAL6 = $mol_type_enforce<
		ReturnType< $mol_pop['bubble_content'] >
		,
		ReturnType< $mol_pop_bubble['content'] >
	>
	type $mol_pop_bubble__height_max__C4G1K3Q2 = $mol_type_enforce<
		ReturnType< $mol_pop['height_max'] >
		,
		ReturnType< $mol_pop_bubble['height_max'] >
	>
	export class $mol_pop extends $mol_view {
		Anchor( ): any
		align( ): string
		bubble_content( ): readonly($mol_view_content)[]
		height_max( ): number
		Bubble( ): $mol_pop_bubble
		showed( next?: boolean ): boolean
		align_vert( ): string
		align_hor( ): string
		prefer( ): string
		sub( ): readonly(any)[]
		sub_visible( ): readonly(any)[]
	}
	
	export class $mol_pop_bubble extends $mol_view {
		content( ): readonly($mol_view_content)[]
		height_max( ): number
		align( ): string
		sub( ): ReturnType< $mol_pop_bubble['content'] >
		style( ): ({ 
			'maxHeight': ReturnType< $mol_pop_bubble['height_max'] >,
		})  & ReturnType< $mol_view['style'] >
		attr( ): ({ 
			'mol_pop_align': ReturnType< $mol_pop_bubble['align'] >,
			'tabindex': number,
		})  & ReturnType< $mol_view['attr'] >
	}
	
}

//# sourceMappingURL=pop.view.tree.d.ts.map
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

	type $mol_check__minimal_width__4CG4ANNJ = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_width'] >
	>
	type $mol_check__minimal_height__8F0YYKUN = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_height'] >
	>
	type $mol_check__enabled__YUF46P1P = $mol_type_enforce<
		ReturnType< $mol_pick['trigger_enabled'] >
		,
		ReturnType< $mol_check['enabled'] >
	>
	type $mol_check__checked__SG1GO9T5 = $mol_type_enforce<
		ReturnType< $mol_pick['showed'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_check__clicks__8KHDIOJD = $mol_type_enforce<
		ReturnType< $mol_pick['clicks'] >
		,
		ReturnType< $mol_check['clicks'] >
	>
	type $mol_check__sub__NXFXV8I3 = $mol_type_enforce<
		ReturnType< $mol_pick['trigger_content'] >
		,
		ReturnType< $mol_check['sub'] >
	>
	type $mol_check__hint__TA2ALYZP = $mol_type_enforce<
		ReturnType< $mol_pick['hint'] >
		,
		ReturnType< $mol_check['hint'] >
	>
	export class $mol_pick extends $mol_pop {
		keydown( next?: any ): any
		trigger_enabled( ): boolean
		clicks( next?: any ): any
		trigger_content( ): readonly($mol_view_content)[]
		hint( ): string
		Trigger( ): $mol_check
		event( ): ({ 
			keydown( next?: ReturnType< $mol_pick['keydown'] > ): ReturnType< $mol_pick['keydown'] >,
		})  & ReturnType< $mol_pop['event'] >
		Anchor( ): ReturnType< $mol_pick['Trigger'] >
	}
	
}

//# sourceMappingURL=pick.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_pick extends $.$mol_pick {
        keydown(event: KeyboardEvent): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    type $mol_type_equals<A, B> = (<X>() => X extends A ? 1 : 2) extends (<X>() => X extends B ? 1 : 2) ? unknown : never;
}

declare namespace $ {
    type $mol_type_merge<Intersection> = Intersection extends (...a: any[]) => any ? Intersection : Intersection extends new (...a: any[]) => any ? Intersection : Intersection extends object ? $mol_type_merge_object<Intersection> extends Intersection ? unknown extends $mol_type_equals<{
        [Key in keyof Intersection]: Intersection[Key];
    }, Intersection> ? Intersection : {
        [Key in keyof Intersection]: $mol_type_merge<Intersection[Key]>;
    } : Intersection : Intersection;
    type $mol_type_merge_object<Intersection> = {
        [Key in keyof Intersection]: Intersection[Key];
    };
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

declare namespace $ {

	type $mol_paragraph__sub__I7W2HD6Y = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	type $mol_paragraph__sub__AAIMBHXW = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	export class $mol_dimmer extends $mol_paragraph {
		parts( ): readonly($mol_view_content)[]
		string( id: any): string
		haystack( ): string
		needle( ): string
		sub( ): ReturnType< $mol_dimmer['parts'] >
		Low( id: any): $mol_paragraph
		High( id: any): $mol_paragraph
	}
	
}

//# sourceMappingURL=dimmer.view.tree.d.ts.map
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
    let $mol_mem_persist: typeof $mol_wire_solid;
}

declare namespace $ {
    export function $mol_wire_sync<Host extends object>(obj: Host): ObjectOrFunctionResultAwaited<Host>;
    type FunctionResultAwaited<Some> = Some extends (...args: infer Args) => infer Res ? (...args: Args) => Awaited<Res> : Some;
    type MethodsResultAwaited<Host extends Object> = {
        [K in keyof Host]: FunctionResultAwaited<Host[K]>;
    };
    type ObjectOrFunctionResultAwaited<Some> = (Some extends (...args: any) => unknown ? FunctionResultAwaited<Some> : {}) & (Some extends Object ? MethodsResultAwaited<Some> : Some);
    export {};
}

declare namespace $ {
    class $mol_storage extends $mol_object2 {
        static native(): StorageManager;
        static persisted(next?: boolean, cache?: 'cache'): boolean;
        static estimate(): StorageEstimate;
        static dir(): FileSystemDirectoryHandle;
    }
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
        abstract drop(): void;
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
        open(...modes: readonly ('create' | 'exists_truncate' | 'exists_fail' | 'read_only' | 'write_only' | 'read_write' | 'append')[]): number;
        toJSON(): string;
    }
}

declare namespace $ {
    function $mol_compare_array<Value extends ArrayLike<unknown>>(a: Value, b: Value): boolean;
}

declare namespace $ {
    enum $mol_file_mode_open {
        create,
        exists_truncate,
        exists_fail,
        read_only,
        write_only,
        read_write,
        append
    }
    class $mol_file_node extends $mol_file {
        static absolute(path: string): $mol_file_node;
        static relative(path: string): $mol_file_node;
        watcher(): {
            destructor(): void;
        };
        stat(next?: $mol_file_stat | null, virt?: 'virt'): $mol_file_stat | null;
        ensure(): void;
        drop(): void;
        buffer(next?: Uint8Array): Uint8Array;
        sub(): $mol_file[];
        resolve(path: string): $mol_file;
        relate(base?: $mol_file): string;
        append(next: Uint8Array | string): undefined;
        open(...modes: readonly (keyof typeof $mol_file_mode_open)[]): number;
    }
}

declare namespace $ {
    class $mol_state_local_node<Value> extends $mol_state_local<Value> {
        static dir(): $mol_file;
        static value<Value>(key: string, next?: Value | null): Value | null;
    }
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

	export class $mol_nav extends $mol_plugin {
		event_key( next?: any ): any
		cycle( next?: boolean ): boolean
		mod_ctrl( ): boolean
		mod_shift( ): boolean
		mod_alt( ): boolean
		keys_x( next?: readonly(any)[] ): readonly(any)[]
		keys_y( next?: readonly(any)[] ): readonly(any)[]
		current_x( next?: any ): any
		current_y( next?: any ): any
		event_up( next?: any ): any
		event_down( next?: any ): any
		event_left( next?: any ): any
		event_right( next?: any ): any
		event( ): ({ 
			keydown( next?: ReturnType< $mol_nav['event_key'] > ): ReturnType< $mol_nav['event_key'] >,
		})  & ReturnType< $mol_plugin['event'] >
	}
	
}

//# sourceMappingURL=nav.view.tree.d.ts.map
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

	export class $mol_hotkey extends $mol_plugin {
		keydown( next?: any ): any
		event( ): ({ 
			keydown( next?: ReturnType< $mol_hotkey['keydown'] > ): ReturnType< $mol_hotkey['keydown'] >,
		})  & ReturnType< $mol_plugin['event'] >
		key( ): Record<string, any>
		mod_ctrl( ): boolean
		mod_alt( ): boolean
		mod_shift( ): boolean
	}
	
}

//# sourceMappingURL=hotkey.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_hotkey extends $.$mol_hotkey {
        key(): { [key in keyof typeof $mol_keyboard_code]?: (event: KeyboardEvent) => void; };
        keydown(event?: KeyboardEvent): void;
    }
}

declare namespace $ {

	type $mol_hotkey__mod_ctrl__E6XHGB5D = $mol_type_enforce<
		ReturnType< $mol_string['submit_with_ctrl'] >
		,
		ReturnType< $mol_hotkey['mod_ctrl'] >
	>
	type $mol_hotkey__key__O08WOULY = $mol_type_enforce<
		({ 
			enter( next?: ReturnType< $mol_string['submit'] > ): ReturnType< $mol_string['submit'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	export class $mol_string extends $mol_view {
		selection_watcher( ): any
		error_report( ): any
		disabled( ): boolean
		value( next?: string ): string
		value_changed( next?: ReturnType< $mol_string['value'] > ): ReturnType< $mol_string['value'] >
		hint( ): string
		hint_visible( ): ReturnType< $mol_string['hint'] >
		spellcheck( ): boolean
		autocomplete_native( ): string
		selection_end( ): number
		selection_start( ): number
		keyboard( ): string
		enter( ): string
		length_max( ): number
		type( next?: string ): string
		event_change( next?: any ): any
		submit_with_ctrl( ): boolean
		submit( next?: any ): any
		Submit( ): $mol_hotkey
		dom_name( ): string
		enabled( ): boolean
		minimal_height( ): number
		autocomplete( ): boolean
		selection( next?: readonly(number)[] ): readonly(number)[]
		auto( ): readonly(any)[]
		field( ): ({ 
			'disabled': ReturnType< $mol_string['disabled'] >,
			'value': ReturnType< $mol_string['value_changed'] >,
			'placeholder': ReturnType< $mol_string['hint_visible'] >,
			'spellcheck': ReturnType< $mol_string['spellcheck'] >,
			'autocomplete': ReturnType< $mol_string['autocomplete_native'] >,
			'selectionEnd': ReturnType< $mol_string['selection_end'] >,
			'selectionStart': ReturnType< $mol_string['selection_start'] >,
			'inputMode': ReturnType< $mol_string['keyboard'] >,
			'enterkeyhint': ReturnType< $mol_string['enter'] >,
		})  & ReturnType< $mol_view['field'] >
		attr( ): ({ 
			'maxlength': ReturnType< $mol_string['length_max'] >,
			'type': ReturnType< $mol_string['type'] >,
		})  & ReturnType< $mol_view['attr'] >
		event( ): ({ 
			input( next?: ReturnType< $mol_string['event_change'] > ): ReturnType< $mol_string['event_change'] >,
		})  & ReturnType< $mol_view['event'] >
		plugins( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=string.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_string extends $.$mol_string {
        event_change(next?: Event): void;
        error_report(): void;
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

	export class $mol_icon_close extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=close.view.tree.d.ts.map
declare namespace $ {

	type $mol_hotkey__key__VF69354A = $mol_type_enforce<
		({ 
			escape( next?: ReturnType< $mol_search['clear'] > ): ReturnType< $mol_search['clear'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	type $mol_nav__keys_y__BZSAPFCS = $mol_type_enforce<
		ReturnType< $mol_search['nav_components'] >
		,
		ReturnType< $mol_nav['keys_y'] >
	>
	type $mol_nav__current_y__4LS6V777 = $mol_type_enforce<
		ReturnType< $mol_search['nav_focused'] >
		,
		ReturnType< $mol_nav['current_y'] >
	>
	type $mol_string__value__IM1QT1E9 = $mol_type_enforce<
		ReturnType< $mol_search['query'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__hint__HPAIBF50 = $mol_type_enforce<
		ReturnType< $mol_search['hint'] >
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__submit__VCLPJI8F = $mol_type_enforce<
		ReturnType< $mol_search['submit'] >
		,
		ReturnType< $mol_string['submit'] >
	>
	type $mol_string__enabled__M7YIYXVV = $mol_type_enforce<
		ReturnType< $mol_search['enabled'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_string__keyboard__RHN0HIMQ = $mol_type_enforce<
		ReturnType< $mol_search['keyboard'] >
		,
		ReturnType< $mol_string['keyboard'] >
	>
	type $mol_string__enter__ZFMTCYT4 = $mol_type_enforce<
		ReturnType< $mol_search['enter'] >
		,
		ReturnType< $mol_string['enter'] >
	>
	type $mol_button_minor__hint__QG4HG8MN = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__click__OROJE1D5 = $mol_type_enforce<
		ReturnType< $mol_search['clear'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__VSZUNQ2W = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_list__rows__GS8ZVMFA = $mol_type_enforce<
		ReturnType< $mol_search['menu_items'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_dimmer__haystack__CUOKVLAT = $mol_type_enforce<
		ReturnType< $mol_search['suggest_label'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle__KDEZ7ALQ = $mol_type_enforce<
		ReturnType< $mol_search['query'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_search_plugins__6ZCY7QPY = $mol_type_enforce<
		ReturnType< $mol_pop['plugins'] >[number]
		,
		$mol_plugin
	>
	type $mol_view__sub__K7DUOBK2 = $mol_type_enforce<
		ReturnType< $mol_search['anchor_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__click__CXZ3AZG6 = $mol_type_enforce<
		ReturnType< $mol_search['suggest_select'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__7U2L39EA = $mol_type_enforce<
		ReturnType< $mol_search['suggest_content'] >
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	export class $mol_search extends $mol_pop {
		clear( next?: any ): any
		Hotkey( ): $mol_hotkey
		nav_components( ): readonly($mol_view)[]
		nav_focused( next?: any ): any
		Nav( ): $mol_nav
		suggests_showed( next?: boolean ): boolean
		query( next?: string ): string
		hint( ): string
		submit( next?: any ): any
		enabled( ): boolean
		keyboard( ): string
		enter( ): string
		bring( ): ReturnType< ReturnType< $mol_search['Query'] >['bring'] >
		Query( ): $mol_string
		Clear_icon( ): $mol_icon_close
		Clear( ): $mol_button_minor
		anchor_content( ): readonly(any)[]
		menu_items( ): readonly($mol_view)[]
		Menu( ): $mol_list
		suggest_select( id: any, next?: any ): any
		suggest_label( id: any): string
		Suggest_label( id: any): $mol_dimmer
		suggest_content( id: any): readonly($mol_view_content)[]
		suggests( ): readonly(string)[]
		plugins( ): readonly($mol_plugin)[]
		showed( next?: ReturnType< $mol_search['suggests_showed'] > ): ReturnType< $mol_search['suggests_showed'] >
		align_hor( ): string
		Anchor( ): $mol_view
		bubble_content( ): readonly($mol_view_content)[]
		Suggest( id: any): $mol_button_minor
	}
	
}

//# sourceMappingURL=search.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_search extends $.$mol_search {
        anchor_content(): ($mol_button_minor | $.$mol_string)[];
        suggests_showed(next?: boolean): boolean;
        suggest_selected(next?: string): void;
        nav_components(): ($mol_button_minor | $.$mol_string)[];
        nav_focused(component?: $mol_view): $mol_view | $.$mol_string | null;
        suggest_label(key: string): string;
        menu_items(): $mol_button_minor[];
        suggest_select(id: string, event?: MouseEvent): void;
        clear(event?: Event): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_dots_vertical extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=vertical.view.tree.d.ts.map
declare namespace $ {
    function $mol_match_text<Variant>(query: string, values: (variant: Variant) => string[]): (variant: Variant) => boolean;
}

declare namespace $ {

	type $mol_dimmer__haystack__7G1M7DZT = $mol_type_enforce<
		ReturnType< $mol_select['option_label'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle__1FIL0GEZ = $mol_type_enforce<
		ReturnType< $mol_select['filter_pattern'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_nav__keys_y__9GDFMQEJ = $mol_type_enforce<
		ReturnType< $mol_select['nav_components'] >
		,
		ReturnType< $mol_nav['keys_y'] >
	>
	type $mol_nav__current_y__OQ4HATFL = $mol_type_enforce<
		ReturnType< $mol_select['option_focused'] >
		,
		ReturnType< $mol_nav['current_y'] >
	>
	type $mol_nav__cycle__3AFR4BO5 = $mol_type_enforce<
		ReturnType< $mol_select['nav_cycle'] >
		,
		ReturnType< $mol_nav['cycle'] >
	>
	type $mol_list__rows__5A9XNKAM = $mol_type_enforce<
		ReturnType< $mol_select['menu_content'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub__7M7J81DB = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_button_minor__event_click__5I5LOVA6 = $mol_type_enforce<
		ReturnType< $mol_select['event_select'] >
		,
		ReturnType< $mol_button_minor['event_click'] >
	>
	type $mol_button_minor__sub__70YSE6G2 = $mol_type_enforce<
		ReturnType< $mol_select['option_content'] >
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub__O0H9S4W6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_search__query__HJFXS15Y = $mol_type_enforce<
		ReturnType< $mol_select['filter_pattern'] >
		,
		ReturnType< $mol_search['query'] >
	>
	type $mol_search__hint__LI0RO4UA = $mol_type_enforce<
		ReturnType< $mol_select['filter_hint'] >
		,
		ReturnType< $mol_search['hint'] >
	>
	type $mol_search__submit__4VDBHYD1 = $mol_type_enforce<
		ReturnType< $mol_select['submit'] >
		,
		ReturnType< $mol_search['submit'] >
	>
	type $mol_search__enabled__78L37NWJ = $mol_type_enforce<
		ReturnType< $mol_select['enabled'] >
		,
		ReturnType< $mol_search['enabled'] >
	>
	export class $mol_select extends $mol_pick {
		event_select( id: any, next?: any ): any
		option_label( id: any): string
		filter_pattern( next?: string ): string
		Option_label( id: any): $mol_dimmer
		option_content( id: any): readonly(any)[]
		no_options_message( ): string
		nav_components( ): readonly($mol_view)[]
		option_focused( next?: any ): any
		nav_cycle( next?: boolean ): boolean
		Nav( ): $mol_nav
		menu_content( ): readonly($mol_view)[]
		Menu( ): $mol_list
		Bubble_pane( ): $mol_scroll
		filter_hint( ): string
		submit( next?: any ): any
		enabled( ): boolean
		dictionary( next?: Record<string, any> ): Record<string, any>
		options( ): readonly(string)[]
		value( next?: string ): string
		option_label_default( ): string
		Option_row( id: any): $mol_button_minor
		No_options( ): $mol_view
		plugins( ): readonly(any)[]
		hint( ): string
		bubble_content( ): readonly(any)[]
		Filter( ): $mol_search
		Trigger_icon( ): $mol_icon_dots_vertical
	}
	
}

//# sourceMappingURL=select.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_select extends $.$mol_select {
        filter_pattern(next?: string): string;
        open(): void;
        options(): readonly string[];
        options_filtered(): readonly string[];
        option_label(id: string): any;
        option_rows(): $mol_button_minor[];
        option_focused(component?: $mol_view): $mol_view | $.$mol_search | null;
        event_select(id: string, event?: MouseEvent): void;
        nav_components(): ($mol_button_minor | $.$mol_search)[];
        trigger_content(): readonly $mol_view_content[];
        menu_content(): $mol_view[];
    }
}

declare namespace $ {
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
    interface Plot_raw {
        id: string;
        type: 'matrix' | 'plot3d' | 'pd' | 'bar' | 'discovery' | 'eigenplot' | 'pie' | 'scatter' | 'customscatter' | 'heatmap' | 'graph';
        json: unknown;
    }
    export function $mpds_visavis_plot_raw_from_json(json: any, id?: string): $mpds_visavis_plot_raw;
    export class $mpds_visavis_plot_raw extends $mol_store<Plot_raw> {
        id(next?: string): string;
        type(): "matrix" | "plot3d" | "pd" | "bar" | "discovery" | "eigenplot" | "pie" | "scatter" | "customscatter" | "heatmap" | "graph";
        json(): {};
    }
    export {};
}

declare namespace $ {
    const $mpds_visavis_lib_plotly: any;
}

declare namespace $ {
    type $mol_data_value<Input = any, Output = any> = (val: Input) => Output;
}

declare namespace $ {
    type $mol_type_partial_undefined<Val> = $mol_type_merge<$mol_type_override<Partial<Val>, Pick<Val, {
        [Field in keyof Val]: undefined extends Val[Field] ? never : Field;
    }[keyof Val]>>>;
}

declare namespace $ {
    function $mol_data_setup<Value extends $mol_data_value, Config = never>(value: Value, config: Config): Value & {
        config: Config;
        Value: ReturnType<Value>;
    };
}

declare namespace $ {
    function $mol_data_record<Sub extends Record<string, $mol_data_value>>(sub: Sub): ((val: $mol_type_merge<$mol_type_override<Partial<{ [key in keyof Sub]: Parameters<Sub[key]>[0]; }>, Pick<{ [key in keyof Sub]: Parameters<Sub[key]>[0]; }, { [Field in keyof { [key in keyof Sub]: Parameters<Sub[key]>[0]; }]: undefined extends { [key in keyof Sub]: Parameters<Sub[key]>[0]; }[Field] ? never : Field; }[keyof Sub]>>>) => Readonly<$mol_type_merge<$mol_type_override<Partial<{ [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }>, Pick<{ [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }, { [Field_1 in keyof { [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }]: undefined extends { [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }[Field_1] ? never : Field_1; }[keyof Sub]>>>>) & {
        config: Sub;
        Value: Readonly<$mol_type_merge<$mol_type_override<Partial<{ [key in keyof Sub]: ReturnType<Sub[key]>; }>, Pick<{ [key in keyof Sub]: ReturnType<Sub[key]>; }, { [Field in keyof { [key in keyof Sub]: ReturnType<Sub[key]>; }]: undefined extends { [key in keyof Sub]: ReturnType<Sub[key]>; }[Field] ? never : Field; }[keyof Sub]>>>>;
    };
}

declare namespace $ {
    class $mol_error_mix<Cause extends {} = {}> extends AggregateError {
        readonly cause: Cause;
        name: string;
        constructor(message: string, cause?: Cause, ...errors: Error[]);
        static [Symbol.toPrimitive](): string;
        static toString(): string;
        static make(...params: ConstructorParameters<typeof $mol_error_mix>): $mol_error_mix<{}>;
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
    function $mol_data_const<Val>(ref: Val): ((val: Val) => Val) & {
        config: Val;
        Value: Val;
    };
}

declare namespace $ {
    function $mol_data_array<Sub extends $mol_data_value>(sub: Sub): ((val: readonly Parameters<Sub>[0][]) => readonly ReturnType<Sub>[]) & {
        config: Sub;
        Value: readonly ReturnType<Sub>[];
    };
}

declare namespace $ {
    function $mol_data_nullable<Sub extends $mol_data_value>(sub: Sub): ((val: Parameters<Sub>[0] | null) => ReturnType<Sub> | null) & {
        config: Sub;
        Value: ReturnType<Sub> | null;
    };
}

declare namespace $ {

	export class $mpds_visavis_elements_list extends $mol_object {
		prop_names( ): ({ 
			'num': string,
			'nump': string,
			'size': string,
			'rea': string,
			'rpp': string,
			'rion': string,
			'rcov': string,
			'rmet': string,
			'tmelt': string,
			'eneg': string,
		}) 
		list( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $.$$ {
    const Elements_list: ((val: readonly {
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
        name: string;
    }[]) => readonly Readonly<{
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
        name: string;
    }>[]) & {
        config: ((val: {
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
            name: string;
        }) => Readonly<{
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
            name: string;
        }>) & {
            config: {
                name: (val: string) => string;
                num: (val: number) => number;
                nump: (val: number) => number;
                size: (val: number) => number;
                rea: (val: number) => number;
                rpp: (val: number) => number;
                rion: (val: number) => number;
                rcov: (val: number) => number;
                rmet: (val: number) => number;
                tmelt: (val: number) => number;
                eneg: (val: number) => number;
            };
            Value: Readonly<{
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
                name: string;
            }>;
        };
        Value: readonly Readonly<{
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
            name: string;
        }>[];
    };
    const Prop_names: ((val: {
        num: string;
        nump: string;
        size: string;
        rea: string;
        rpp: string;
        rion: string;
        rcov: string;
        rmet: string;
        tmelt: string;
        eneg: string;
    }) => Readonly<{
        num: string;
        nump: string;
        size: string;
        rea: string;
        rpp: string;
        rion: string;
        rcov: string;
        rmet: string;
        tmelt: string;
        eneg: string;
    }>) & {
        config: {
            num: (val: string) => string;
            nump: (val: string) => string;
            size: (val: string) => string;
            rea: (val: string) => string;
            rpp: (val: string) => string;
            rion: (val: string) => string;
            rcov: (val: string) => string;
            rmet: (val: string) => string;
            tmelt: (val: string) => string;
            eneg: (val: string) => string;
        };
        Value: Readonly<{
            num: string;
            nump: string;
            size: string;
            rea: string;
            rpp: string;
            rion: string;
            rcov: string;
            rmet: string;
            tmelt: string;
            eneg: string;
        }>;
    };
    export class $mpds_visavis_elements_list extends $.$mpds_visavis_elements_list {
        static data(): $mpds_visavis_elements_list;
        static prop_names(): Readonly<{
            num: string;
            nump: string;
            size: string;
            rea: string;
            rpp: string;
            rion: string;
            rcov: string;
            rmet: string;
            tmelt: string;
            eneg: string;
        }>;
        static list(): readonly Readonly<{
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
            name: string;
        }>[];
        static index_by_prop(prop: keyof typeof Elements_list.Value[number]): {
            [k: string]: Readonly<{
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
                name: string;
            }>;
        };
        static element_by_num(num: number): Readonly<{
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
            name: string;
        }>;
        static element_by_name(name: string): Readonly<{
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
            name: string;
        }>;
        static prop_values(prop: keyof typeof Prop_names.Value): number[];
    }
    export {};
}

declare namespace $ {

	type $mpds_visavis_elements_nonformer_pd_tri__17S8CTIK = $mol_type_enforce<
		`Pm-Dy-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SPXU0WRX = $mol_type_enforce<
		`Yb-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EU0ZC6XJ = $mol_type_enforce<
		`Cr-Ni-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BX4CNAB2 = $mol_type_enforce<
		`Pu-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R3O15PM5 = $mol_type_enforce<
		`Pm-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WD9ISF8C = $mol_type_enforce<
		`Tm-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QU065LKK = $mol_type_enforce<
		`Nd-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OEWVBNQR = $mol_type_enforce<
		`Al-Zn-In`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CWG9K4ZJ = $mol_type_enforce<
		`Eu-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4UNFGHIX = $mol_type_enforce<
		`Ni-Ru-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5JTWDE2I = $mol_type_enforce<
		`Ce-Pm-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BVCS528R = $mol_type_enforce<
		`Cu-Tc-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TM7P1HC7 = $mol_type_enforce<
		`La-Sm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YRMJTRHC = $mol_type_enforce<
		`La-Yb-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I3AX5O6I = $mol_type_enforce<
		`Gd-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__94QARAG6 = $mol_type_enforce<
		`Li-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5ELN17U2 = $mol_type_enforce<
		`La-Dy-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X17FEMP8 = $mol_type_enforce<
		`Ba-Yb-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1V786I5J = $mol_type_enforce<
		`K-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__15J5HUFO = $mol_type_enforce<
		`Y-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MWBG9D5N = $mol_type_enforce<
		`Li-Ce-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CG4109DS = $mol_type_enforce<
		`Sc-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HRT2BSW6 = $mol_type_enforce<
		`Ho-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y86VP1FO = $mol_type_enforce<
		`Tm-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HYAL3GD9 = $mol_type_enforce<
		`La-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8JDEFKO9 = $mol_type_enforce<
		`Ir-Pd-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LTDOZCCL = $mol_type_enforce<
		`Gd-Ho-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UZZ05889 = $mol_type_enforce<
		`Ca-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QA5YFNXJ = $mol_type_enforce<
		`Rb-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NF5SMENC = $mol_type_enforce<
		`La-Yb-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LS2J7B4T = $mol_type_enforce<
		`Nd-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7AHBADDQ = $mol_type_enforce<
		`Yb-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2XQNWUK3 = $mol_type_enforce<
		`La-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OHMCSPMS = $mol_type_enforce<
		`Ba-La-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4GON7FLT = $mol_type_enforce<
		`Cs-Li-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VZ821HLC = $mol_type_enforce<
		`Ba-Sr-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R2PMT7KS = $mol_type_enforce<
		`Yb-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__92WJ4E70 = $mol_type_enforce<
		`Cs-Pr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WG4Y6H6J = $mol_type_enforce<
		`Zn-Bi-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AZEURMEL = $mol_type_enforce<
		`Tb-Pm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6WAHNKFJ = $mol_type_enforce<
		`Gd-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BUI52EBZ = $mol_type_enforce<
		`Ce-Eu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YS5LFBFX = $mol_type_enforce<
		`Fe-Os-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N5ZJO39B = $mol_type_enforce<
		`Nb-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8M5XV32P = $mol_type_enforce<
		`Eu-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UAVQHGPE = $mol_type_enforce<
		`Be-Al-In`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4BYBSQCM = $mol_type_enforce<
		`Pr-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BH9X7RCG = $mol_type_enforce<
		`Li-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D0YXBLX3 = $mol_type_enforce<
		`Pu-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JHTPDT9V = $mol_type_enforce<
		`Rb-Na-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NPTOCWAW = $mol_type_enforce<
		`Mg-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9RNIWHXM = $mol_type_enforce<
		`Pr-Nd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ANZRMGNT = $mol_type_enforce<
		`Pr-Sm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OCSDCQLU = $mol_type_enforce<
		`Pd-Ru-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M9AAK1G5 = $mol_type_enforce<
		`Er-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W6V1B5X5 = $mol_type_enforce<
		`Ce-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WEZ6XCFL = $mol_type_enforce<
		`Li-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A61LWYXE = $mol_type_enforce<
		`Nd-Gd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2Z39VUKW = $mol_type_enforce<
		`Fe-Rh-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8VDV4Q4H = $mol_type_enforce<
		`Cs-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SOD6M5NB = $mol_type_enforce<
		`Ru-Pt-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A0DQPY14 = $mol_type_enforce<
		`Ca-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__82VZQPX4 = $mol_type_enforce<
		`Cs-K-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RVN5LIHU = $mol_type_enforce<
		`Lu-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RY31V8H0 = $mol_type_enforce<
		`Nd-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0RRVLPE7 = $mol_type_enforce<
		`Ga-Si-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZI812BUX = $mol_type_enforce<
		`K-Mg-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CBQORKES = $mol_type_enforce<
		`Ce-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PDFVFDRT = $mol_type_enforce<
		`Yb-Dy-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TEV9TGCU = $mol_type_enforce<
		`Ba-Nd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XQ0QOCUV = $mol_type_enforce<
		`Y-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7Q8TXBAC = $mol_type_enforce<
		`Pr-Gd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZS6ISV09 = $mol_type_enforce<
		`La-Y-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SJB1N8IE = $mol_type_enforce<
		`Er-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AH5069GE = $mol_type_enforce<
		`Cs-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VXGVOT4X = $mol_type_enforce<
		`Li-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CZFXV68S = $mol_type_enforce<
		`Pr-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0JI8GKTV = $mol_type_enforce<
		`Fe-Cu-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CB04R9IC = $mol_type_enforce<
		`Ce-Sm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T867WUEA = $mol_type_enforce<
		`Dy-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R9QVPTE6 = $mol_type_enforce<
		`Cu-Ir-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EU02NA0K = $mol_type_enforce<
		`Si-Sb-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__26S0HDPM = $mol_type_enforce<
		`Pr-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X16ODISB = $mol_type_enforce<
		`K-Li-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3F2MP3JC = $mol_type_enforce<
		`La-Tb-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XDS6PDT9 = $mol_type_enforce<
		`Li-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__96HGTJFV = $mol_type_enforce<
		`Sm-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GKTER5PP = $mol_type_enforce<
		`Cs-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XS49SE9M = $mol_type_enforce<
		`Pr-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G7P87D80 = $mol_type_enforce<
		`Tb-Yb-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FA4T4SQS = $mol_type_enforce<
		`Y-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OAW1LAW3 = $mol_type_enforce<
		`Na-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K6I87TSM = $mol_type_enforce<
		`K-Mg-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FS7S8QWP = $mol_type_enforce<
		`Li-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4HS6225X = $mol_type_enforce<
		`Ce-Hf-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0NR0000O = $mol_type_enforce<
		`Dy-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2H34FG50 = $mol_type_enforce<
		`Ce-Mn-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R2GGYIQO = $mol_type_enforce<
		`Mn-Fe-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7F13AZA1 = $mol_type_enforce<
		`Rb-Hf-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D9YSZOBZ = $mol_type_enforce<
		`La-Tb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HE3N7BVP = $mol_type_enforce<
		`Sr-Nd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T922OCEP = $mol_type_enforce<
		`Tb-Sm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QRFV3SYD = $mol_type_enforce<
		`Ce-Sc-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V04T81N4 = $mol_type_enforce<
		`Y-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HGFSTWC1 = $mol_type_enforce<
		`Rb-Li-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RW7OKERN = $mol_type_enforce<
		`Nd-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0NIKQ14T = $mol_type_enforce<
		`Al-Si-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S9E7K95A = $mol_type_enforce<
		`Ca-La-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A1M9AO96 = $mol_type_enforce<
		`La-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I1UFJE3Z = $mol_type_enforce<
		`Sm-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OCBKSDH1 = $mol_type_enforce<
		`Y-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V7O9AL0P = $mol_type_enforce<
		`Na-Sr-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S362EAG0 = $mol_type_enforce<
		`K-Li-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TWA5LDEA = $mol_type_enforce<
		`Cs-Rb-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A4GN0EB7 = $mol_type_enforce<
		`Zn-Ga-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IB10C07T = $mol_type_enforce<
		`La-Pm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O0LRAXGY = $mol_type_enforce<
		`Mn-Fe-Co`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ABY25RXY = $mol_type_enforce<
		`Gd-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__26W83VNM = $mol_type_enforce<
		`Sm-Gd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GZT257D3 = $mol_type_enforce<
		`U-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2YP88ST6 = $mol_type_enforce<
		`La-Ce-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4EO2MBM1 = $mol_type_enforce<
		`Re-Hg-Sb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LZDYWTHH = $mol_type_enforce<
		`Gd-Dy-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8JSDUPGD = $mol_type_enforce<
		`Dy-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__835LPK9W = $mol_type_enforce<
		`La-Nd-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YHTHZNCQ = $mol_type_enforce<
		`Ce-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QUPNYLFW = $mol_type_enforce<
		`Ce-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__80A1VJAH = $mol_type_enforce<
		`Ce-Nd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8Q5SD0IF = $mol_type_enforce<
		`Pm-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NMO9LA3S = $mol_type_enforce<
		`Ce-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P76W3H49 = $mol_type_enforce<
		`Pr-Sm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QWQLD08H = $mol_type_enforce<
		`Ca-La-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PQEK3I7N = $mol_type_enforce<
		`Yb-Lu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R4OO7EX4 = $mol_type_enforce<
		`Sm-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0X0DJG6X = $mol_type_enforce<
		`Gd-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9JGFCE75 = $mol_type_enforce<
		`Li-Pr-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H78J06YI = $mol_type_enforce<
		`Al-Ga-Hg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W0ZRQFBI = $mol_type_enforce<
		`Na-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P8UGX3M8 = $mol_type_enforce<
		`Yb-Nd-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OX748H9G = $mol_type_enforce<
		`Nd-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__25HTVYS9 = $mol_type_enforce<
		`La-Tb-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VLTLGLB8 = $mol_type_enforce<
		`Ir-Pd-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BEAJHH7B = $mol_type_enforce<
		`Tm-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FGS8FTI7 = $mol_type_enforce<
		`Tm-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FE3PT8IZ = $mol_type_enforce<
		`La-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0C4EPZRU = $mol_type_enforce<
		`Cu-Ni-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V2Y0J681 = $mol_type_enforce<
		`Tb-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TV52DER6 = $mol_type_enforce<
		`Ba-Sr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3QYYB137 = $mol_type_enforce<
		`Th-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DCDKHR4N = $mol_type_enforce<
		`Mn-Co-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UMLN85PN = $mol_type_enforce<
		`Cu-Ni-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K6PNGO76 = $mol_type_enforce<
		`Tb-Ce-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VIJXYA3A = $mol_type_enforce<
		`Nd-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__THXH023B = $mol_type_enforce<
		`Li-Pm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JVGVD940 = $mol_type_enforce<
		`La-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DNEBQKXW = $mol_type_enforce<
		`La-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QPRVX0LN = $mol_type_enforce<
		`Pm-Pr-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UC6SOX5P = $mol_type_enforce<
		`Ce-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F7JQRSO4 = $mol_type_enforce<
		`Cu-Tc-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PFVXL8VR = $mol_type_enforce<
		`Nd-Dy-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T5PIENYS = $mol_type_enforce<
		`Ca-Pm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7WVHV27L = $mol_type_enforce<
		`Fe-Cu-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IAATJQCV = $mol_type_enforce<
		`Li-Sm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7GZQPFN5 = $mol_type_enforce<
		`Mn-Ag-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OY3AKJP0 = $mol_type_enforce<
		`Li-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5MNTYYZ2 = $mol_type_enforce<
		`La-Tb-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9KRKBRJC = $mol_type_enforce<
		`Gd-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FK3RQ146 = $mol_type_enforce<
		`Ce-Gd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__707JA6OZ = $mol_type_enforce<
		`Er-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GAYH7GZA = $mol_type_enforce<
		`Sm-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KEA3HEQ3 = $mol_type_enforce<
		`Cr-Ni-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MJEG3M7S = $mol_type_enforce<
		`Nd-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WI5S0VKE = $mol_type_enforce<
		`Co-Au-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FIBC31U6 = $mol_type_enforce<
		`Nd-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DOJDHJT5 = $mol_type_enforce<
		`La-Yb-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZYTZ2XWR = $mol_type_enforce<
		`Sc-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GAZVEXR6 = $mol_type_enforce<
		`Zr-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QJPZUECY = $mol_type_enforce<
		`Pr-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3VBMM9PM = $mol_type_enforce<
		`Cs-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5M424U8X = $mol_type_enforce<
		`Ce-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1DI7T0YN = $mol_type_enforce<
		`Yb-Gd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R5Y0OCYM = $mol_type_enforce<
		`Li-Ce-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H3LTZKKE = $mol_type_enforce<
		`Y-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JAAHAXPE = $mol_type_enforce<
		`La-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EUDJ15F8 = $mol_type_enforce<
		`Tb-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZK8UZSIV = $mol_type_enforce<
		`Tb-Pr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B6EBD6X2 = $mol_type_enforce<
		`Sb-Pb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G96LQ94L = $mol_type_enforce<
		`Ba-Yb-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P6IJLAF4 = $mol_type_enforce<
		`Dy-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZJCBWC7G = $mol_type_enforce<
		`Tb-Gd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1ZKXHEXL = $mol_type_enforce<
		`Tb-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LIZ5OTCJ = $mol_type_enforce<
		`Gd-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VQW93GUX = $mol_type_enforce<
		`Yb-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XROVX12G = $mol_type_enforce<
		`Tm-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U2JGJ7GG = $mol_type_enforce<
		`Pd-Pt-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UQFGHYIU = $mol_type_enforce<
		`Eu-Pu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1CWRP5TU = $mol_type_enforce<
		`Ba-Sm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__10PAEXJB = $mol_type_enforce<
		`La-Sm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZPWOU3T8 = $mol_type_enforce<
		`U-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DJBSUZMY = $mol_type_enforce<
		`Ba-Pm-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0VC8J2AA = $mol_type_enforce<
		`Sm-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J0YELFCN = $mol_type_enforce<
		`Gd-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C8MLN8VB = $mol_type_enforce<
		`Ce-Pr-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MZHLGC64 = $mol_type_enforce<
		`Lu-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LPWZ8GG3 = $mol_type_enforce<
		`Dy-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MNKLV40U = $mol_type_enforce<
		`La-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O2Y15G6D = $mol_type_enforce<
		`Y-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HNGXZ8QT = $mol_type_enforce<
		`Pm-Nd-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZMRT3KJB = $mol_type_enforce<
		`Tb-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__39N1VKEJ = $mol_type_enforce<
		`Yb-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__790331UO = $mol_type_enforce<
		`Li-Pr-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2I7OIBU4 = $mol_type_enforce<
		`Mg-Mn-Cd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RODLTB0K = $mol_type_enforce<
		`Ce-Pm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IB6MM6OS = $mol_type_enforce<
		`Pu-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UJ4EJK4C = $mol_type_enforce<
		`Tl-Cd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K5LKSMM0 = $mol_type_enforce<
		`Sc-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BPQ28ZR2 = $mol_type_enforce<
		`Pu-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GXZ55BR2 = $mol_type_enforce<
		`Mn-Fe-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3TKLBWC2 = $mol_type_enforce<
		`Eu-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G0OB5NSR = $mol_type_enforce<
		`Tb-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O86YV5BW = $mol_type_enforce<
		`Tb-Pr-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YBNNFDZG = $mol_type_enforce<
		`Ca-Nd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JF7WU0FQ = $mol_type_enforce<
		`Ba-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MA71YUJD = $mol_type_enforce<
		`Ca-Tb-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J0X5HEBA = $mol_type_enforce<
		`Pu-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6OO6U8BG = $mol_type_enforce<
		`Ca-Yb-Eu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W744YY4E = $mol_type_enforce<
		`Th-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UDOXAO3T = $mol_type_enforce<
		`Si-Sn-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H4MTT048 = $mol_type_enforce<
		`Tb-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AHPDOP2R = $mol_type_enforce<
		`Na-Cr-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WZXDZWUW = $mol_type_enforce<
		`Y-Er-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8GPRBZWW = $mol_type_enforce<
		`Y-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XPHXUL3S = $mol_type_enforce<
		`Ni-Pd-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KS4GSYIQ = $mol_type_enforce<
		`Y-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6YFPJ323 = $mol_type_enforce<
		`Co-Pd-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MPXW7L8M = $mol_type_enforce<
		`Li-Gd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2YO8MR7K = $mol_type_enforce<
		`Tb-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LYWC42YB = $mol_type_enforce<
		`Pr-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RPU8ZCGI = $mol_type_enforce<
		`La-Yb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__23BDRDEL = $mol_type_enforce<
		`Ca-Yb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__41UFJYI1 = $mol_type_enforce<
		`Dy-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3D8NTPQP = $mol_type_enforce<
		`Nd-Sm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KI74D5ZY = $mol_type_enforce<
		`Tb-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MP33ZLV0 = $mol_type_enforce<
		`Gd-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IHXFJOQN = $mol_type_enforce<
		`Ca-Pm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2G0WB48E = $mol_type_enforce<
		`Tl-Zn-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FKFZM440 = $mol_type_enforce<
		`Yb-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SANTQZRF = $mol_type_enforce<
		`Fe-Co-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z9DP5UH8 = $mol_type_enforce<
		`La-Sm-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9RI13ARX = $mol_type_enforce<
		`Nb-V-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IL1ZMGML = $mol_type_enforce<
		`La-Sm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S014O8A0 = $mol_type_enforce<
		`Li-Pr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YBP06Y1Z = $mol_type_enforce<
		`Tb-Gd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RSQ8L41Z = $mol_type_enforce<
		`Eu-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__86ECQN3D = $mol_type_enforce<
		`Yb-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EKYWVRCG = $mol_type_enforce<
		`Yb-Er-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EANJXFL1 = $mol_type_enforce<
		`La-Ho-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5LYSG6TA = $mol_type_enforce<
		`Dy-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TQ0EDN3N = $mol_type_enforce<
		`La-Ce-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5HR5TU0Z = $mol_type_enforce<
		`Pr-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R6QL3AD7 = $mol_type_enforce<
		`Eu-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BILPZBD9 = $mol_type_enforce<
		`Dy-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AJEUKGS8 = $mol_type_enforce<
		`La-Yb-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6V9XVUOT = $mol_type_enforce<
		`Ce-Pm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G58ZU41V = $mol_type_enforce<
		`Tb-Pm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MJVSBUO4 = $mol_type_enforce<
		`Pr-Dy-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M9QL6MIU = $mol_type_enforce<
		`La-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TU1UJYDG = $mol_type_enforce<
		`Li-Ce-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IYKXWQ01 = $mol_type_enforce<
		`Li-Pr-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6EA0WJU8 = $mol_type_enforce<
		`Tb-Pm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WB4KMXN6 = $mol_type_enforce<
		`Dy-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XRUXI04S = $mol_type_enforce<
		`Al-In-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K7MCI5TD = $mol_type_enforce<
		`Nd-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C175G994 = $mol_type_enforce<
		`Pr-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8WUCKBLD = $mol_type_enforce<
		`Ba-Pm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__88XGAJAH = $mol_type_enforce<
		`Pr-Dy-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QB9KZTIY = $mol_type_enforce<
		`Rb-Na-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MTHEEW3A = $mol_type_enforce<
		`Tb-Pm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T4CTZ9V8 = $mol_type_enforce<
		`Gd-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M1R38M5W = $mol_type_enforce<
		`Y-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F2HMTF7L = $mol_type_enforce<
		`Gd-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GBROGM6D = $mol_type_enforce<
		`Ba-Pm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QCCZDGTT = $mol_type_enforce<
		`Pu-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__64H2G9S2 = $mol_type_enforce<
		`Er-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BR39E9C2 = $mol_type_enforce<
		`Co-Ni-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MT8R7DMD = $mol_type_enforce<
		`Ho-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__INQMSJ9E = $mol_type_enforce<
		`Pm-Pr-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7ASLCM9U = $mol_type_enforce<
		`Sm-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BP47XR0J = $mol_type_enforce<
		`Yb-Pr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EZE696OG = $mol_type_enforce<
		`Cu-Ag-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XE78NOJ3 = $mol_type_enforce<
		`Pm-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8DHXGEBC = $mol_type_enforce<
		`Re-Ir-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P0PFGVD6 = $mol_type_enforce<
		`Er-Lu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QFLNTLBF = $mol_type_enforce<
		`La-Eu-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9FCGHLL2 = $mol_type_enforce<
		`Cu-Ag-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4VXQJJG3 = $mol_type_enforce<
		`Dy-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L7NLG70N = $mol_type_enforce<
		`Dy-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A2QGT6QN = $mol_type_enforce<
		`Re-Bi-Sb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QZQ837XL = $mol_type_enforce<
		`Pm-Pr-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4QXTMXQN = $mol_type_enforce<
		`Th-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NWLE75I2 = $mol_type_enforce<
		`Y-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WHBUIQ0W = $mol_type_enforce<
		`Fe-Ag-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0253HGN6 = $mol_type_enforce<
		`Co-Os-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LL16B6K6 = $mol_type_enforce<
		`Rb-Li-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GZ6NYO1Q = $mol_type_enforce<
		`Gd-Dy-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TQNZGNWY = $mol_type_enforce<
		`Tb-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VNRK33L9 = $mol_type_enforce<
		`Ce-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CRN7K2G6 = $mol_type_enforce<
		`Ba-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__27GB2V5J = $mol_type_enforce<
		`Nd-Dy-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LFEJXZ4R = $mol_type_enforce<
		`Ca-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__34B3NZ0U = $mol_type_enforce<
		`Li-Hf-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AB7SDFFH = $mol_type_enforce<
		`Tb-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X4ULD3FZ = $mol_type_enforce<
		`Tl-Zn-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PK077SPF = $mol_type_enforce<
		`Pr-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L5YMC5RR = $mol_type_enforce<
		`Er-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0WWOQCNI = $mol_type_enforce<
		`Er-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KG53U9D3 = $mol_type_enforce<
		`K-Li-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UMH1S0BU = $mol_type_enforce<
		`Yb-Sc-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VXCNKNPO = $mol_type_enforce<
		`La-Ce-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6RF60VIS = $mol_type_enforce<
		`Cs-Mg-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T7DWGOLL = $mol_type_enforce<
		`Ga-B-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__78PVGK2H = $mol_type_enforce<
		`Re-Ir-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6JAK3KWM = $mol_type_enforce<
		`Pr-Gd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G7IP8E50 = $mol_type_enforce<
		`Re-Ni-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8ACXLNBG = $mol_type_enforce<
		`Tb-Nd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M6Y1ENYF = $mol_type_enforce<
		`Tb-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VKGW9JO5 = $mol_type_enforce<
		`Nd-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W9X24LQD = $mol_type_enforce<
		`Tb-Dy-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PZZX4EGV = $mol_type_enforce<
		`Tb-Pr-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VFRIMU7F = $mol_type_enforce<
		`La-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LPBYAJRR = $mol_type_enforce<
		`Eu-Th-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0SHDHFKD = $mol_type_enforce<
		`Li-Tb-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GUEDKM3G = $mol_type_enforce<
		`Na-V-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XACK6NF9 = $mol_type_enforce<
		`Cu-Re-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YJU1FND0 = $mol_type_enforce<
		`Cd-Ge-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KWIDH5I9 = $mol_type_enforce<
		`Sm-Gd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SXIQCRRC = $mol_type_enforce<
		`Al-In-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8XFQ4SSM = $mol_type_enforce<
		`Al-Cd-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QKXH8F9V = $mol_type_enforce<
		`Ce-Eu-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8JA9X0AD = $mol_type_enforce<
		`La-Tb-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K9XJZ55B = $mol_type_enforce<
		`Li-Tb-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__20ZE7IQZ = $mol_type_enforce<
		`Pr-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__APZCD4YS = $mol_type_enforce<
		`La-Pm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XUFEY8EE = $mol_type_enforce<
		`Gd-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FKSWB00B = $mol_type_enforce<
		`Li-La-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I4D80A3E = $mol_type_enforce<
		`Al-Ga-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SO72TJQV = $mol_type_enforce<
		`Tl-As-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GUAIA531 = $mol_type_enforce<
		`Re-Pd-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4BBKKBVD = $mol_type_enforce<
		`Eu-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3CZJQZKI = $mol_type_enforce<
		`Tm-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YDR69BXG = $mol_type_enforce<
		`Eu-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__22Y7QQDN = $mol_type_enforce<
		`Be-Zn-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MFA9WTCV = $mol_type_enforce<
		`Li-Pm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UC6Y56XR = $mol_type_enforce<
		`Na-Mg-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CRD19Z1X = $mol_type_enforce<
		`Fe-Ag-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9YXZ1CLH = $mol_type_enforce<
		`Tl-Zn-Cd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IJSXO7JA = $mol_type_enforce<
		`Nd-Sm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C91ELD1K = $mol_type_enforce<
		`Y-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7RN0C1FY = $mol_type_enforce<
		`Gd-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JD2KWTWQ = $mol_type_enforce<
		`Li-Tb-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FZ7VKPRQ = $mol_type_enforce<
		`Be-Ga-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9UL398QU = $mol_type_enforce<
		`Mn-Cu-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z3CM8I8W = $mol_type_enforce<
		`Pr-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W53OFUM7 = $mol_type_enforce<
		`Ho-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BVEG79Y6 = $mol_type_enforce<
		`Na-Li-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8ETFDT8Z = $mol_type_enforce<
		`Re-Ru-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D2ODECBO = $mol_type_enforce<
		`La-Tb-Ce`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H40K2K8Y = $mol_type_enforce<
		`Cr-Pb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V0F5HZ3X = $mol_type_enforce<
		`Pr-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LFN8ZFVP = $mol_type_enforce<
		`Ag-Pd-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4HAOFYB5 = $mol_type_enforce<
		`Ca-Nd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OT7U32DP = $mol_type_enforce<
		`Mg-Cr-Cd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__247FPVKK = $mol_type_enforce<
		`Mn-Ni-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P8X5LT22 = $mol_type_enforce<
		`Cu-B-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0NI83QA9 = $mol_type_enforce<
		`Li-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RSLDOP1P = $mol_type_enforce<
		`Ni-Os-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0YB3AZJX = $mol_type_enforce<
		`Fe-Ag-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M7TN75CR = $mol_type_enforce<
		`Li-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YT9XMTMK = $mol_type_enforce<
		`Sm-Y-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CAZKKRDI = $mol_type_enforce<
		`Dy-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W8NZ162U = $mol_type_enforce<
		`Na-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__POORG1W7 = $mol_type_enforce<
		`Tb-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KNJM0EUK = $mol_type_enforce<
		`Rb-Na-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WASFFMN9 = $mol_type_enforce<
		`Gd-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LAMTZI1M = $mol_type_enforce<
		`Pr-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9I2S2905 = $mol_type_enforce<
		`Pr-Sm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8J3GO7VD = $mol_type_enforce<
		`Gd-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LFAL03ZV = $mol_type_enforce<
		`Zr-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__78NTXOBK = $mol_type_enforce<
		`Cr-Hg-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LS1BACIN = $mol_type_enforce<
		`Yb-Er-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EF75OTMW = $mol_type_enforce<
		`Ca-Pm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N608K6JQ = $mol_type_enforce<
		`Co-Cu-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WZXGGMHD = $mol_type_enforce<
		`Gd-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DB2V3I14 = $mol_type_enforce<
		`Sc-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__72YRSNER = $mol_type_enforce<
		`Ga-Si-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__55BJCETG = $mol_type_enforce<
		`Li-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q2F5UQW5 = $mol_type_enforce<
		`Ba-Sr-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MKYSS8IH = $mol_type_enforce<
		`Li-Pm-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SO87EFSY = $mol_type_enforce<
		`Na-Li-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZF6XP4YN = $mol_type_enforce<
		`Gd-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YTM273UI = $mol_type_enforce<
		`Yb-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5R79AUAH = $mol_type_enforce<
		`Ho-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D9LC0EY3 = $mol_type_enforce<
		`Nd-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4TCJ1XP9 = $mol_type_enforce<
		`Ca-Ce-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3I7LYR1E = $mol_type_enforce<
		`Pm-Gd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BKCH2FGG = $mol_type_enforce<
		`La-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9H092EXN = $mol_type_enforce<
		`Ca-Yb-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1JY5EHEP = $mol_type_enforce<
		`Pr-Th-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__67AMH3TI = $mol_type_enforce<
		`Tm-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D924TQ6U = $mol_type_enforce<
		`Rb-Li-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SHB3GSH4 = $mol_type_enforce<
		`Gd-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IILPLZGF = $mol_type_enforce<
		`Yb-Pr-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QDM4O2AL = $mol_type_enforce<
		`Ce-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__93R5DQP0 = $mol_type_enforce<
		`Nd-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AZP6JODY = $mol_type_enforce<
		`Er-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C4OCKKUR = $mol_type_enforce<
		`Dy-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JJ5WCKDS = $mol_type_enforce<
		`La-Pr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NUO61AFZ = $mol_type_enforce<
		`Yb-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IAPARQPO = $mol_type_enforce<
		`La-Yb-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GUYPAE2I = $mol_type_enforce<
		`Co-Rh-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N0V1U7PG = $mol_type_enforce<
		`La-Eu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C008KRZH = $mol_type_enforce<
		`Y-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SK4SWEOP = $mol_type_enforce<
		`K-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XC3GWKX4 = $mol_type_enforce<
		`Pr-Sm-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1CDRYJJG = $mol_type_enforce<
		`Eu-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KIJN1LYG = $mol_type_enforce<
		`Ga-Sn-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VY29DIXU = $mol_type_enforce<
		`Cu-Ag-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MNKK3X4L = $mol_type_enforce<
		`Ce-Gd-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4Z3DGNAO = $mol_type_enforce<
		`Tl-Ga-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8QRIC77Y = $mol_type_enforce<
		`Gd-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E0GX0ZME = $mol_type_enforce<
		`Ti-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2R7T37II = $mol_type_enforce<
		`Ga-Sn-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R35IQWK7 = $mol_type_enforce<
		`La-Eu-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JA4QAVD7 = $mol_type_enforce<
		`Tm-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XCOBZNZ4 = $mol_type_enforce<
		`Pm-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X9MLWW2W = $mol_type_enforce<
		`Be-Al-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BP990ZZ4 = $mol_type_enforce<
		`Dy-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S7KVLFCR = $mol_type_enforce<
		`Yb-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__39NOAK54 = $mol_type_enforce<
		`Na-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VHJEXD5I = $mol_type_enforce<
		`Li-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZY50BMXJ = $mol_type_enforce<
		`Na-Sr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D8CD6LVY = $mol_type_enforce<
		`Ba-La-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JHRDTF3F = $mol_type_enforce<
		`Sm-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F0YT3FL5 = $mol_type_enforce<
		`La-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3YJI5KCB = $mol_type_enforce<
		`K-Cr-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X8XRBH0F = $mol_type_enforce<
		`Y-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5TKD3IN5 = $mol_type_enforce<
		`Ce-Pm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P3GLWPD4 = $mol_type_enforce<
		`Sm-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DH1YKKS0 = $mol_type_enforce<
		`Er-Th-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H0KDX6I2 = $mol_type_enforce<
		`Co-Os-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YASG3EFN = $mol_type_enforce<
		`Sm-Dy-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LRYGCF1W = $mol_type_enforce<
		`Sr-Ca-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LBW8NJ5O = $mol_type_enforce<
		`Pm-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NN6ZXZOH = $mol_type_enforce<
		`Yb-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A8CMPZVQ = $mol_type_enforce<
		`La-Gd-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OLN98GG8 = $mol_type_enforce<
		`Tb-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__03V0FAJC = $mol_type_enforce<
		`Cs-Mg-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9UZVW1VD = $mol_type_enforce<
		`Ca-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5F1GDDB8 = $mol_type_enforce<
		`Pr-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WWUHTZFS = $mol_type_enforce<
		`Pm-Sm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DYEHWVZE = $mol_type_enforce<
		`La-Sm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P4WUDRSX = $mol_type_enforce<
		`Zr-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VUEBRGW6 = $mol_type_enforce<
		`Cr-Cu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5K9PFL4J = $mol_type_enforce<
		`Cu-Ni-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VG0P4INN = $mol_type_enforce<
		`Sm-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I60Z3RKI = $mol_type_enforce<
		`Ce-Pr-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OF7NCY53 = $mol_type_enforce<
		`Ce-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8HZBOADJ = $mol_type_enforce<
		`La-V-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F7X2I8G3 = $mol_type_enforce<
		`Sm-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IYZ73FVC = $mol_type_enforce<
		`Ce-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__22K3D1FE = $mol_type_enforce<
		`Ce-Y-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YTKIOFJL = $mol_type_enforce<
		`Ca-Pm-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HQCMLN11 = $mol_type_enforce<
		`Ce-Pr-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BNRECJ4Z = $mol_type_enforce<
		`Ce-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4G0WYC8R = $mol_type_enforce<
		`Re-Ru-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2S5RHB7J = $mol_type_enforce<
		`Cu-Os-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AGTVH761 = $mol_type_enforce<
		`Co-Ni-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2TGIYSBR = $mol_type_enforce<
		`La-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YSA5MML2 = $mol_type_enforce<
		`Ba-V-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BDWDAUTP = $mol_type_enforce<
		`Gd-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NAH5FCQU = $mol_type_enforce<
		`Li-Er-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9KSQC8E5 = $mol_type_enforce<
		`La-Yb-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ADQMMY40 = $mol_type_enforce<
		`Ce-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ESHR8M5R = $mol_type_enforce<
		`Y-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__01UDPY5Q = $mol_type_enforce<
		`Tm-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HY513JTW = $mol_type_enforce<
		`La-Eu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__571N2WYD = $mol_type_enforce<
		`Pr-Dy-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__89NKKEE1 = $mol_type_enforce<
		`Ca-Yb-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A1ABKMG6 = $mol_type_enforce<
		`La-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GTD8OVQ6 = $mol_type_enforce<
		`Pr-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YHRNA578 = $mol_type_enforce<
		`Nd-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__403XRTHE = $mol_type_enforce<
		`Pu-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LZN82855 = $mol_type_enforce<
		`Li-Nd-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4TRO1RNO = $mol_type_enforce<
		`Li-Ce-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WIAFSNZ0 = $mol_type_enforce<
		`Tl-Cu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1Q7A2VLG = $mol_type_enforce<
		`Al-Zn-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A8TFU7RH = $mol_type_enforce<
		`Er-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MNEHH517 = $mol_type_enforce<
		`K-Mg-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TL2VI5AY = $mol_type_enforce<
		`Li-Ce-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B9JK0S51 = $mol_type_enforce<
		`Na-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IN588JRB = $mol_type_enforce<
		`Ba-La-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4OI1W8ED = $mol_type_enforce<
		`Tb-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__44LDJQ2V = $mol_type_enforce<
		`Pr-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1RE7AXDW = $mol_type_enforce<
		`Tb-Yb-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KGOWQRYG = $mol_type_enforce<
		`Sm-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N451092I = $mol_type_enforce<
		`Tb-Dy-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H4DXG6U3 = $mol_type_enforce<
		`Ag-Ge-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P17NEXZD = $mol_type_enforce<
		`Nd-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__073CIY5D = $mol_type_enforce<
		`Yb-Y-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0ZN4FUNZ = $mol_type_enforce<
		`Dy-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UCS23Z8U = $mol_type_enforce<
		`Gd-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AZR87NDP = $mol_type_enforce<
		`Nd-Sm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IXWYLLCE = $mol_type_enforce<
		`Tb-Sm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J6ZHA7XQ = $mol_type_enforce<
		`Li-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EMS8P266 = $mol_type_enforce<
		`Y-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E2ZFZ6BO = $mol_type_enforce<
		`Eu-Sc-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ML2X8LH8 = $mol_type_enforce<
		`Ti-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1QB78LOD = $mol_type_enforce<
		`Re-Ag-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BKNFMNQF = $mol_type_enforce<
		`Pm-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8YF6YWUE = $mol_type_enforce<
		`Ca-Tb-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BDJ3VC4Y = $mol_type_enforce<
		`Ta-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TCVDT4NP = $mol_type_enforce<
		`Tb-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6BPCKRCY = $mol_type_enforce<
		`Li-La-Tb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L87OCSW7 = $mol_type_enforce<
		`Tl-Ag-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZCY9YM0U = $mol_type_enforce<
		`Tb-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9EU5IX56 = $mol_type_enforce<
		`Er-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EXR97XDB = $mol_type_enforce<
		`Fe-Ni-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O16URWJF = $mol_type_enforce<
		`La-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8KXU6NA2 = $mol_type_enforce<
		`Co-Re-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V2CFRXP4 = $mol_type_enforce<
		`Li-Cr-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XLS0KUCU = $mol_type_enforce<
		`V-Ag-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BTC8M08H = $mol_type_enforce<
		`Zn-Sn-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3OSVUH60 = $mol_type_enforce<
		`Ce-Nd-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R44BQFKA = $mol_type_enforce<
		`La-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A6RLTT4X = $mol_type_enforce<
		`Ca-Eu-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__14X6BEHS = $mol_type_enforce<
		`Ho-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B6W7XOGG = $mol_type_enforce<
		`Yb-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UR3U0FAI = $mol_type_enforce<
		`Eu-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__96EUXTRS = $mol_type_enforce<
		`Ni-Ir-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O7TE7AGI = $mol_type_enforce<
		`Y-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NZWD8PLE = $mol_type_enforce<
		`Pr-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZSTLP9OS = $mol_type_enforce<
		`Ho-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PVUZPMR5 = $mol_type_enforce<
		`Pr-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UGBSGFNK = $mol_type_enforce<
		`Pr-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DJQRY6LZ = $mol_type_enforce<
		`Pr-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BW9OSPWM = $mol_type_enforce<
		`Tb-Ce-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TYXXAP3L = $mol_type_enforce<
		`Ce-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NMILGFTA = $mol_type_enforce<
		`Li-Tb-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B4JNJ0UH = $mol_type_enforce<
		`Mn-Tl-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZGJAYXTN = $mol_type_enforce<
		`Ba-La-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7C7KB4D8 = $mol_type_enforce<
		`Th-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WU8WJTQS = $mol_type_enforce<
		`Li-La-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__37T68PUO = $mol_type_enforce<
		`Mn-Fe-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JYNRKPTO = $mol_type_enforce<
		`Ho-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SHPRKXMM = $mol_type_enforce<
		`K-Rb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GCH00YL6 = $mol_type_enforce<
		`La-Gd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GWQSDGCU = $mol_type_enforce<
		`Cu-Ag-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JVSUXQY6 = $mol_type_enforce<
		`Ce-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XL9N1JSI = $mol_type_enforce<
		`Ho-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__38FAVFYS = $mol_type_enforce<
		`Ce-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FC1V2DVG = $mol_type_enforce<
		`Co-Ru-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YRQ5ZSZU = $mol_type_enforce<
		`Ce-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DDKSAFAG = $mol_type_enforce<
		`Yb-Hf-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3U5KA8KH = $mol_type_enforce<
		`Tl-Si-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JKABFRDY = $mol_type_enforce<
		`Tb-Yb-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__32S7FU2W = $mol_type_enforce<
		`Rb-Li-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LRWNV26Q = $mol_type_enforce<
		`Co-Ni-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0DSRA3S3 = $mol_type_enforce<
		`Co-Ir-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7OIHBO3X = $mol_type_enforce<
		`Gd-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V7YVX4VP = $mol_type_enforce<
		`Gd-Dy-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2JJM0C32 = $mol_type_enforce<
		`Mn-Cu-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MWMK2EJY = $mol_type_enforce<
		`Cu-Mo-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QYMTEXRV = $mol_type_enforce<
		`Tb-Pr-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BA3YA6BQ = $mol_type_enforce<
		`Li-Mg-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BRJIUMP4 = $mol_type_enforce<
		`Yb-Pr-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WH1V7RES = $mol_type_enforce<
		`Li-Sm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JB91PRBO = $mol_type_enforce<
		`Li-Tb-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HZIP3YVM = $mol_type_enforce<
		`Sm-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IH065CDE = $mol_type_enforce<
		`Ba-La-Yb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KI9NU00H = $mol_type_enforce<
		`La-Dy-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R9L56GAT = $mol_type_enforce<
		`Zn-Si-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RY5P1PRI = $mol_type_enforce<
		`Ca-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SP49WBL0 = $mol_type_enforce<
		`U-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__24NBN4YC = $mol_type_enforce<
		`Pr-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FTY18UGX = $mol_type_enforce<
		`Si-Bi-Sb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3OO37EEI = $mol_type_enforce<
		`Li-Ce-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0H91AREI = $mol_type_enforce<
		`Cu-Re-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__64RMQPGE = $mol_type_enforce<
		`Ba-Ca-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L638X1D1 = $mol_type_enforce<
		`La-Lu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P75HTL2K = $mol_type_enforce<
		`Zn-Cd-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2LZOMS19 = $mol_type_enforce<
		`In-Ga-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2553P2WP = $mol_type_enforce<
		`Dy-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FA0P9ML0 = $mol_type_enforce<
		`Cr-Hg-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HQ0T1E1C = $mol_type_enforce<
		`Yb-Dy-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RV24RKYX = $mol_type_enforce<
		`Eu-Y-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VOB4OWPY = $mol_type_enforce<
		`Mn-Co-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y84ISRIS = $mol_type_enforce<
		`Yb-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__47H2FCFN = $mol_type_enforce<
		`Nb-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8PR1S8OV = $mol_type_enforce<
		`Yb-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CEDCD73Z = $mol_type_enforce<
		`Yb-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LSXH5IUD = $mol_type_enforce<
		`K-Rb-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FKJGAK7H = $mol_type_enforce<
		`Ce-Gd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HFETM7C8 = $mol_type_enforce<
		`Dy-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__56VW7R54 = $mol_type_enforce<
		`V-Fe-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MUZRE2KJ = $mol_type_enforce<
		`Yb-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__41867BM2 = $mol_type_enforce<
		`La-Ce-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VMIQ2XD0 = $mol_type_enforce<
		`Ni-Pd-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RJMIC45N = $mol_type_enforce<
		`La-Pr-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BJ19YITC = $mol_type_enforce<
		`La-Ce-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JUV7KD48 = $mol_type_enforce<
		`Eu-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D36TNHRJ = $mol_type_enforce<
		`Nd-Ho-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H8IORHU4 = $mol_type_enforce<
		`Hf-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L13OTF7S = $mol_type_enforce<
		`Tb-Yb-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9QRL238Y = $mol_type_enforce<
		`Tb-Pr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NFP1CGL8 = $mol_type_enforce<
		`Er-Pu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PT5ON4LA = $mol_type_enforce<
		`Re-Hg-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JYVRQH00 = $mol_type_enforce<
		`Ba-Yb-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5TP2BYGI = $mol_type_enforce<
		`Lu-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UE9U89VN = $mol_type_enforce<
		`Nd-Y-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__414VJ8NU = $mol_type_enforce<
		`Rb-Na-Li`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0QGEF760 = $mol_type_enforce<
		`Sm-Dy-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J8IEIQYY = $mol_type_enforce<
		`U-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D7FQGSO5 = $mol_type_enforce<
		`Ce-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J8C0H6F8 = $mol_type_enforce<
		`Pd-Rh-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ELFNZEB6 = $mol_type_enforce<
		`Tb-Ce-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__46NASMBD = $mol_type_enforce<
		`Eu-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KFUV09G6 = $mol_type_enforce<
		`Y-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4FTHIYY0 = $mol_type_enforce<
		`Li-Ce-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z0I508LV = $mol_type_enforce<
		`Yb-Gd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1WWXBG35 = $mol_type_enforce<
		`Cd-B-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V804F6ET = $mol_type_enforce<
		`Th-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3830FQFH = $mol_type_enforce<
		`Ba-La-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0E4YF8O3 = $mol_type_enforce<
		`Er-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VUFVS0DS = $mol_type_enforce<
		`K-Rb-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1FKFYM2K = $mol_type_enforce<
		`Cd-Fe-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WEVWA4SK = $mol_type_enforce<
		`Al-Tl-Cd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AU7KPH3Z = $mol_type_enforce<
		`Pr-Nd-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FU9OR0C6 = $mol_type_enforce<
		`Nd-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__12T8Z8EJ = $mol_type_enforce<
		`Ce-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RBXTLDSB = $mol_type_enforce<
		`La-Pu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D2KVS2MP = $mol_type_enforce<
		`Ge-Au-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1RR3PBV0 = $mol_type_enforce<
		`Ca-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__62JTCVK4 = $mol_type_enforce<
		`Yb-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QV4KZVSS = $mol_type_enforce<
		`Na-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5SHMI3OL = $mol_type_enforce<
		`Y-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NHBQ9WBR = $mol_type_enforce<
		`Ba-Sr-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KH78T7WK = $mol_type_enforce<
		`Tb-Dy-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UZQ5H0JJ = $mol_type_enforce<
		`La-Gd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UUKSOI35 = $mol_type_enforce<
		`Y-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I27CBS6V = $mol_type_enforce<
		`Ce-Sm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZG3886BA = $mol_type_enforce<
		`V-Pd-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U6PKEPK8 = $mol_type_enforce<
		`Li-Tb-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CB8TEGBO = $mol_type_enforce<
		`Yb-Pr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4R4R9VOE = $mol_type_enforce<
		`Yb-Gd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0BY3YDAP = $mol_type_enforce<
		`Y-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N4EHUPAN = $mol_type_enforce<
		`Pm-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5EF7HR14 = $mol_type_enforce<
		`Eu-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NHHSWUCA = $mol_type_enforce<
		`La-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8XV6TW79 = $mol_type_enforce<
		`Ba-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1WH4EQCK = $mol_type_enforce<
		`Co-Hg-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WWZIAOTR = $mol_type_enforce<
		`Lu-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__233B59J4 = $mol_type_enforce<
		`Y-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9KYD5LOU = $mol_type_enforce<
		`Ba-Ca-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HGN0JJFX = $mol_type_enforce<
		`K-Li-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U2LJUMWE = $mol_type_enforce<
		`V-Hg-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CLWAV1JZ = $mol_type_enforce<
		`Tb-Gd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1D6CZJRK = $mol_type_enforce<
		`La-Pm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4FOJ9U2W = $mol_type_enforce<
		`Ir-Ru-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DW9K568E = $mol_type_enforce<
		`Ca-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FG595ASH = $mol_type_enforce<
		`Tb-Yb-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2WNJEANR = $mol_type_enforce<
		`Li-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XVKU77VH = $mol_type_enforce<
		`Er-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2HMDE741 = $mol_type_enforce<
		`La-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TYDDIZ97 = $mol_type_enforce<
		`La-Dy-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BVR3YZMM = $mol_type_enforce<
		`Ce-Nd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HNZQG223 = $mol_type_enforce<
		`Co-Pt-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N9DGX8W9 = $mol_type_enforce<
		`Tm-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PHA8WNE4 = $mol_type_enforce<
		`Na-Mg-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P9TPUG7D = $mol_type_enforce<
		`Ce-Eu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__13MBPQK9 = $mol_type_enforce<
		`Cs-Li-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S0Q8DL0B = $mol_type_enforce<
		`Gd-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__410WK4YL = $mol_type_enforce<
		`Re-Pd-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EAUAI955 = $mol_type_enforce<
		`Yb-Nd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TXAK1NJZ = $mol_type_enforce<
		`Mg-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HXU3SRBX = $mol_type_enforce<
		`Fe-Pd-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NAA3M9PA = $mol_type_enforce<
		`K-Rb-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4S53160I = $mol_type_enforce<
		`Ba-Ca-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WNKL1XUC = $mol_type_enforce<
		`Rb-Mg-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LISO7GAB = $mol_type_enforce<
		`La-Sm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6F1S7CFB = $mol_type_enforce<
		`Y-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0BXXEDSK = $mol_type_enforce<
		`Cs-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WX8E8RRS = $mol_type_enforce<
		`Tb-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__162D9HVG = $mol_type_enforce<
		`Pm-Gd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VL1W9IM4 = $mol_type_enforce<
		`La-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1HO713Y4 = $mol_type_enforce<
		`Tb-Gd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__85VHBS2E = $mol_type_enforce<
		`Ce-Pm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AN8CH6AV = $mol_type_enforce<
		`Pm-Sm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NHVU0QWX = $mol_type_enforce<
		`Hf-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FV779EYW = $mol_type_enforce<
		`Y-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D8OB9ZUY = $mol_type_enforce<
		`Be-Zn-In`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GWNBQUJD = $mol_type_enforce<
		`Yb-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DCM4F7GG = $mol_type_enforce<
		`Nd-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VJGCA3EC = $mol_type_enforce<
		`Ce-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F1AHSBZ8 = $mol_type_enforce<
		`Cs-K-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XHIK7QII = $mol_type_enforce<
		`Ag-Pd-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N5BWJ0PI = $mol_type_enforce<
		`Sm-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YFXQLLQD = $mol_type_enforce<
		`Ho-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6DLWITQR = $mol_type_enforce<
		`Yb-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2KAWHAZP = $mol_type_enforce<
		`Tb-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__13GGIPVI = $mol_type_enforce<
		`Yb-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2L322JRK = $mol_type_enforce<
		`Ca-Tb-Ce`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IUZEEKE5 = $mol_type_enforce<
		`Tb-Dy-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KIA9Z6J7 = $mol_type_enforce<
		`Zn-Cd-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9VH12HJW = $mol_type_enforce<
		`Pm-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MU9A0C1D = $mol_type_enforce<
		`Yb-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GTAZ3UDW = $mol_type_enforce<
		`Hf-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AWRN8LWL = $mol_type_enforce<
		`Li-Sm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XEIU4PHI = $mol_type_enforce<
		`Li-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RDK13CDB = $mol_type_enforce<
		`Na-Ta-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GLEPPVRJ = $mol_type_enforce<
		`Pr-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GZIKMOBB = $mol_type_enforce<
		`V-In-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SQ03S7Q8 = $mol_type_enforce<
		`Er-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LSAGNM2I = $mol_type_enforce<
		`Pm-Dy-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P9U3PNL0 = $mol_type_enforce<
		`Tb-Gd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DOVLPJYG = $mol_type_enforce<
		`Nd-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1YU2462H = $mol_type_enforce<
		`Sr-Ca-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IRB03GGU = $mol_type_enforce<
		`Tm-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K1Z954FS = $mol_type_enforce<
		`Gd-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZOE20T1O = $mol_type_enforce<
		`Li-Gd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0RTMRFXO = $mol_type_enforce<
		`Ag-Os-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__61KXLXL8 = $mol_type_enforce<
		`La-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F72BPNJZ = $mol_type_enforce<
		`Th-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TVOI9MTT = $mol_type_enforce<
		`Co-Pd-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UVL1WVF1 = $mol_type_enforce<
		`Ce-Ho-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7GYOEAQH = $mol_type_enforce<
		`Cu-Re-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RUWGLNQU = $mol_type_enforce<
		`Yb-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WPBSJZ1B = $mol_type_enforce<
		`Li-La-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N8FE507W = $mol_type_enforce<
		`Cu-Ag-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__21ZJSVJ8 = $mol_type_enforce<
		`Eu-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EU08Q3NR = $mol_type_enforce<
		`Rb-Na-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LEWRV09H = $mol_type_enforce<
		`Co-Rh-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OY3KML6B = $mol_type_enforce<
		`Tb-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W81LTV3L = $mol_type_enforce<
		`Ce-Gd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IEZGGZ8Z = $mol_type_enforce<
		`Tb-Ce-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AS37WY8Z = $mol_type_enforce<
		`Gd-Dy-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1GKKEC5S = $mol_type_enforce<
		`Zn-In-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZELR2MGA = $mol_type_enforce<
		`Ce-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M1LIICHO = $mol_type_enforce<
		`Y-Ho-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D64YWNBJ = $mol_type_enforce<
		`Pm-Pr-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CTLMD8AR = $mol_type_enforce<
		`Li-Pr-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GC9JTZ61 = $mol_type_enforce<
		`Er-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UK1KCV00 = $mol_type_enforce<
		`Li-Gd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CXE0V61C = $mol_type_enforce<
		`Li-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PVCETBYL = $mol_type_enforce<
		`Yb-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4T5LV8L0 = $mol_type_enforce<
		`Pu-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DJEW9AVK = $mol_type_enforce<
		`La-Tb-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JSJUX2AU = $mol_type_enforce<
		`Li-La-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z1H6R5L0 = $mol_type_enforce<
		`Cu-Ni-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3ELRASZT = $mol_type_enforce<
		`Yb-Pr-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V9R1LB71 = $mol_type_enforce<
		`La-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0BTVUG3F = $mol_type_enforce<
		`Fe-Ag-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XMYIBZ0V = $mol_type_enforce<
		`Mg-Mn-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9JF2PYZD = $mol_type_enforce<
		`Fe-Ag-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QQAWN1X7 = $mol_type_enforce<
		`Nd-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__582OOLQJ = $mol_type_enforce<
		`La-Pr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5BODBU51 = $mol_type_enforce<
		`Cr-Cu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UX65BOJU = $mol_type_enforce<
		`Tb-Er-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__608A1A1A = $mol_type_enforce<
		`Li-Lu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B63FI3J3 = $mol_type_enforce<
		`Y-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0D6EXYX6 = $mol_type_enforce<
		`Lu-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1EH215NO = $mol_type_enforce<
		`Sn-B-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GFIMC55P = $mol_type_enforce<
		`Li-Pr-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CUQ5LZ53 = $mol_type_enforce<
		`Re-Hg-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4JK8AN5V = $mol_type_enforce<
		`Yb-Dy-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9YDHALMR = $mol_type_enforce<
		`Tb-Pm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K6HVITE1 = $mol_type_enforce<
		`Cs-K-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HLGIOOQS = $mol_type_enforce<
		`Ni-Ir-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0W8OIOVO = $mol_type_enforce<
		`Ca-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XBO8IJ74 = $mol_type_enforce<
		`Eu-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QMN9Y6QD = $mol_type_enforce<
		`Zr-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8SREI7EI = $mol_type_enforce<
		`Yb-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__552QGM2V = $mol_type_enforce<
		`K-Li-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CA1UF3CY = $mol_type_enforce<
		`Yb-Pr-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FF3U8LQ3 = $mol_type_enforce<
		`Y-Pu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9MUPPC9W = $mol_type_enforce<
		`Ce-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RV2J03TZ = $mol_type_enforce<
		`Ce-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XB0FIKXD = $mol_type_enforce<
		`Nb-V-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PN2S0DKX = $mol_type_enforce<
		`V-Cu-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RI25INHK = $mol_type_enforce<
		`Y-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JMEKKJGQ = $mol_type_enforce<
		`Fe-Cu-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0P2FI2L4 = $mol_type_enforce<
		`Re-Pt-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MRB8UJU2 = $mol_type_enforce<
		`Pu-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O79QD8PF = $mol_type_enforce<
		`Re-Ir-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GLSYIVOL = $mol_type_enforce<
		`Ca-Yb-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PULF5V9Q = $mol_type_enforce<
		`Nd-Sm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KW7DDVWS = $mol_type_enforce<
		`Na-Sr-Ca`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7SRO0TYR = $mol_type_enforce<
		`Ho-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8CQP4DQD = $mol_type_enforce<
		`Ce-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FDGSW6NV = $mol_type_enforce<
		`Ce-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TV0D2ORO = $mol_type_enforce<
		`Pm-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R5EQLMSW = $mol_type_enforce<
		`La-Gd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6N32IUBZ = $mol_type_enforce<
		`Dy-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KHYM76C4 = $mol_type_enforce<
		`Ta-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VDMTP06E = $mol_type_enforce<
		`Nd-Dy-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BPUM1XRQ = $mol_type_enforce<
		`Y-Ho-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CX8H7SES = $mol_type_enforce<
		`Sr-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1LJW4NKL = $mol_type_enforce<
		`La-Pr-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0L91BUQG = $mol_type_enforce<
		`Cr-Cu-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3YTF6B0L = $mol_type_enforce<
		`Pm-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JP8IMKKX = $mol_type_enforce<
		`La-Pm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KO60DEC9 = $mol_type_enforce<
		`Sm-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B760DTS3 = $mol_type_enforce<
		`Y-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JSDHD17H = $mol_type_enforce<
		`Ba-Sr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__10B24CXJ = $mol_type_enforce<
		`Ta-V-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SRLGCDBW = $mol_type_enforce<
		`Ga-Hg-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XBFL9XT3 = $mol_type_enforce<
		`La-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R8SS8LSP = $mol_type_enforce<
		`Nd-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QEIK42NF = $mol_type_enforce<
		`Li-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CWYG9M7Y = $mol_type_enforce<
		`Ca-Eu-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K53WSR6C = $mol_type_enforce<
		`Pr-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5CTAFIIA = $mol_type_enforce<
		`Lu-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GC70R58A = $mol_type_enforce<
		`Dy-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8JPIVG9X = $mol_type_enforce<
		`Ce-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__97AZHHEF = $mol_type_enforce<
		`Na-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZI3JJ895 = $mol_type_enforce<
		`La-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YHQXCRQW = $mol_type_enforce<
		`Tb-Nd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SBWMZ5S9 = $mol_type_enforce<
		`Eu-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C4SOK7J4 = $mol_type_enforce<
		`Ca-Ce-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8THUF2L2 = $mol_type_enforce<
		`Pr-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TOGKQUM9 = $mol_type_enforce<
		`Pm-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HTVKD4QO = $mol_type_enforce<
		`Nd-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7NK8X337 = $mol_type_enforce<
		`La-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A1JYPG5W = $mol_type_enforce<
		`Co-Pd-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TCPWD2LW = $mol_type_enforce<
		`Pr-Sm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QDKSNQD0 = $mol_type_enforce<
		`Li-Mg-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1XS32VPM = $mol_type_enforce<
		`Lu-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GNR30WK5 = $mol_type_enforce<
		`Eu-Hf-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EAO3J3DA = $mol_type_enforce<
		`Li-Gd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SUF79JY4 = $mol_type_enforce<
		`Er-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JSCB2TPZ = $mol_type_enforce<
		`Yb-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OOUVNKJC = $mol_type_enforce<
		`La-Eu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N30E0MS1 = $mol_type_enforce<
		`Gd-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RZHKFM4D = $mol_type_enforce<
		`Cs-Li-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GDEOZ0SL = $mol_type_enforce<
		`La-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XGUQ1IVR = $mol_type_enforce<
		`Rb-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V9MHM3BV = $mol_type_enforce<
		`La-Pr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LXLCWHLM = $mol_type_enforce<
		`Nd-Gd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XIMSI5H4 = $mol_type_enforce<
		`Th-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M48L9LHG = $mol_type_enforce<
		`Na-Mg-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q2GDXACK = $mol_type_enforce<
		`Ce-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L3CQWPC1 = $mol_type_enforce<
		`Eu-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YUHDVUN8 = $mol_type_enforce<
		`Na-Be-Al`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MJCKBNO1 = $mol_type_enforce<
		`Yb-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O8KX9UGG = $mol_type_enforce<
		`Gd-Dy-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3D0MX08T = $mol_type_enforce<
		`Pm-Sm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BHE8US9A = $mol_type_enforce<
		`Cs-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4QDTQID3 = $mol_type_enforce<
		`Pm-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YZGOASRH = $mol_type_enforce<
		`Gd-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3Y5YRFH0 = $mol_type_enforce<
		`Cs-K-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YS2DZV3U = $mol_type_enforce<
		`Tb-Yb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DQQE9VDI = $mol_type_enforce<
		`K-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CHRV0AWK = $mol_type_enforce<
		`La-Yb-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AE0DZN5T = $mol_type_enforce<
		`Rb-Li-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1YULL3CQ = $mol_type_enforce<
		`Li-Gd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YSOPTSRL = $mol_type_enforce<
		`La-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RLPVZVHA = $mol_type_enforce<
		`Ce-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SOY8HR5K = $mol_type_enforce<
		`Ba-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SQUSMPJ7 = $mol_type_enforce<
		`Ba-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AHD6GQZQ = $mol_type_enforce<
		`Cu-Ni-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VW626SCY = $mol_type_enforce<
		`Nd-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__00B0Z92F = $mol_type_enforce<
		`Cd-Si-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PGL0GQNG = $mol_type_enforce<
		`Nd-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PPHE0A3O = $mol_type_enforce<
		`Tb-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EH1CHSIH = $mol_type_enforce<
		`Pr-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AYEXNF9R = $mol_type_enforce<
		`U-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VI1YMZ74 = $mol_type_enforce<
		`Nd-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KEZ4DRB3 = $mol_type_enforce<
		`Fe-Pd-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z83H8YHE = $mol_type_enforce<
		`Na-Li-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KXD2KAYD = $mol_type_enforce<
		`Ba-Ca-Yb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HVTH3O34 = $mol_type_enforce<
		`Sm-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A9BNZ8LK = $mol_type_enforce<
		`Ca-La-Eu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PXUUCUW6 = $mol_type_enforce<
		`Ca-La-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UENLX60B = $mol_type_enforce<
		`Mn-Co-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SB5W2M0S = $mol_type_enforce<
		`Nd-Sm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3GJ9N773 = $mol_type_enforce<
		`Tc-Pd-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FETBJ9MM = $mol_type_enforce<
		`Cs-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2AI5H7BZ = $mol_type_enforce<
		`Ca-Eu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BX3NGMKN = $mol_type_enforce<
		`Li-La-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__95YQBMXW = $mol_type_enforce<
		`Ni-Ir-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HWFV2WC3 = $mol_type_enforce<
		`Fe-Ni-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ME24YRV8 = $mol_type_enforce<
		`Pu-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PO7VTPCC = $mol_type_enforce<
		`Yb-Y-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B2T91B6O = $mol_type_enforce<
		`Eu-Y-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z1K6UZ65 = $mol_type_enforce<
		`Re-Ni-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__66B8A50I = $mol_type_enforce<
		`Pm-Sm-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WGE8IMOC = $mol_type_enforce<
		`Cu-Re-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T4AKX7TO = $mol_type_enforce<
		`Lu-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KIQZLFIK = $mol_type_enforce<
		`Tm-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZN2ITSRD = $mol_type_enforce<
		`Ce-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H87ZM2SR = $mol_type_enforce<
		`Ca-Ce-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R9590UMJ = $mol_type_enforce<
		`Ce-Sm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1PR4ERFT = $mol_type_enforce<
		`Re-Tc-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9IQJ3KZJ = $mol_type_enforce<
		`Ag-Ru-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6C0OZ938 = $mol_type_enforce<
		`Mg-Cr-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__45BQKBP1 = $mol_type_enforce<
		`Ba-Ca-La`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z15PMMWR = $mol_type_enforce<
		`Ca-Yb-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ITH75XKP = $mol_type_enforce<
		`Ni-Os-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__719WA3RI = $mol_type_enforce<
		`Tl-Cd-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4ZFIE8BK = $mol_type_enforce<
		`Mg-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W00VJBB5 = $mol_type_enforce<
		`Ba-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XP5KC7ZV = $mol_type_enforce<
		`Fe-Ru-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XUJEYYA9 = $mol_type_enforce<
		`Pr-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N79LH9OC = $mol_type_enforce<
		`Nd-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AFDPXFZB = $mol_type_enforce<
		`Ho-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BZ20U0T2 = $mol_type_enforce<
		`Ce-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T0LHOI23 = $mol_type_enforce<
		`Ce-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WAGRWPNY = $mol_type_enforce<
		`Eu-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6M07PC43 = $mol_type_enforce<
		`Tb-Sm-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TIATTE8J = $mol_type_enforce<
		`Ce-Pr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TAM6ECJI = $mol_type_enforce<
		`Sc-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3DL5JQ7I = $mol_type_enforce<
		`Sm-Dy-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LIN4DOND = $mol_type_enforce<
		`Pm-Dy-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SCMAQ3OE = $mol_type_enforce<
		`Er-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S8NBDQRD = $mol_type_enforce<
		`La-Gd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E3RKP0JJ = $mol_type_enforce<
		`La-Mn-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2S6IZJLY = $mol_type_enforce<
		`Ba-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TKCS4L6N = $mol_type_enforce<
		`Tb-Ce-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6DWVUT8Y = $mol_type_enforce<
		`Ag-Ru-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TRS3VY5B = $mol_type_enforce<
		`Ba-Pr-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K7WYI41Q = $mol_type_enforce<
		`Yb-Dy-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VJJZMC1C = $mol_type_enforce<
		`La-Pr-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SNUFELZ2 = $mol_type_enforce<
		`Li-Ta-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SUL4PN66 = $mol_type_enforce<
		`La-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F5V1ZKPI = $mol_type_enforce<
		`Tl-V-In`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WJ5ZZ8K6 = $mol_type_enforce<
		`Tb-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8R4U6HYZ = $mol_type_enforce<
		`La-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W5HEKOUJ = $mol_type_enforce<
		`Ru-Pt-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RK93FEEJ = $mol_type_enforce<
		`Sm-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ELHN6GSD = $mol_type_enforce<
		`Tm-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3F0LD2O6 = $mol_type_enforce<
		`Ce-Er-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4LFD300V = $mol_type_enforce<
		`Cr-W-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N60KROEV = $mol_type_enforce<
		`Yb-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4A1O9B2O = $mol_type_enforce<
		`La-Eu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZPD2I9GD = $mol_type_enforce<
		`Pr-Nd-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__26LB2BFY = $mol_type_enforce<
		`Li-Nb-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__44WAFLZI = $mol_type_enforce<
		`Cu-Pt-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XAZDDVJM = $mol_type_enforce<
		`Ni-Ag-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OK2HCCI4 = $mol_type_enforce<
		`Yb-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HUZ7B1VX = $mol_type_enforce<
		`Li-Pm-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__137FOCV1 = $mol_type_enforce<
		`Cs-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__674Q81RL = $mol_type_enforce<
		`Y-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MAYY2EEQ = $mol_type_enforce<
		`Fe-Ag-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GLNBJVRG = $mol_type_enforce<
		`Hf-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J74TIWIX = $mol_type_enforce<
		`La-Sm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MW9TC1ZD = $mol_type_enforce<
		`Er-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DK6VNSD9 = $mol_type_enforce<
		`Ir-Os-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EN2N66AD = $mol_type_enforce<
		`Dy-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MQY9F15M = $mol_type_enforce<
		`Ba-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2JHS3ZT2 = $mol_type_enforce<
		`Ag-Pd-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RS0ZGLA9 = $mol_type_enforce<
		`K-Rb-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P5PPDXS8 = $mol_type_enforce<
		`Pr-Sm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S5370D6Z = $mol_type_enforce<
		`Nd-Dy-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LWJ1SHO9 = $mol_type_enforce<
		`Li-Pm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M896IL3H = $mol_type_enforce<
		`Ba-Yb-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0WDGXAZA = $mol_type_enforce<
		`Tb-Pm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8YW1IB3U = $mol_type_enforce<
		`La-Pm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WPP1FMVL = $mol_type_enforce<
		`Sm-Dy-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z6SNQWGQ = $mol_type_enforce<
		`V-Cr-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8DTQF3SH = $mol_type_enforce<
		`Tb-Pm-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JBNDI9D3 = $mol_type_enforce<
		`Ho-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__38TTP8MJ = $mol_type_enforce<
		`Ba-Yb-Eu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N0IQBIO1 = $mol_type_enforce<
		`La-Sm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2VQ5QUK6 = $mol_type_enforce<
		`Li-Tb-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZZ8GQKSM = $mol_type_enforce<
		`Tb-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G0V04UYC = $mol_type_enforce<
		`Na-Mg-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B7NG6H58 = $mol_type_enforce<
		`Pr-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6KIRCCBK = $mol_type_enforce<
		`Ce-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N4U7XTG2 = $mol_type_enforce<
		`Er-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JDQ03099 = $mol_type_enforce<
		`Gd-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SOVORL8S = $mol_type_enforce<
		`Tb-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7W581HLE = $mol_type_enforce<
		`Nd-Gd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L8AWHALV = $mol_type_enforce<
		`Li-Pr-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YYB86E7X = $mol_type_enforce<
		`Cr-Ag-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CSGU4B5J = $mol_type_enforce<
		`Lu-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U51TC8CB = $mol_type_enforce<
		`Nb-Hg-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WU82YXC1 = $mol_type_enforce<
		`Tb-Gd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P1WXGQYO = $mol_type_enforce<
		`La-Yb-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FL1PC9DS = $mol_type_enforce<
		`Fe-Ir-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RMJG60AB = $mol_type_enforce<
		`Sm-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T3JIP7WW = $mol_type_enforce<
		`Th-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7L645E09 = $mol_type_enforce<
		`Tb-Gd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LFIQFIKT = $mol_type_enforce<
		`Tb-Pm-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TWDVOEK3 = $mol_type_enforce<
		`Pr-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IZR9FD1B = $mol_type_enforce<
		`Er-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EAOOKMGX = $mol_type_enforce<
		`Th-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X6EJP9CS = $mol_type_enforce<
		`Y-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZD6U5DP5 = $mol_type_enforce<
		`La-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NVQ185JN = $mol_type_enforce<
		`Ga-Hg-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TPJWHWGM = $mol_type_enforce<
		`U-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ISAGR3AY = $mol_type_enforce<
		`Ce-Pr-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7H24KHXP = $mol_type_enforce<
		`Ho-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FQC0SU22 = $mol_type_enforce<
		`Pm-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HP5XSJCN = $mol_type_enforce<
		`Li-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GY2XUUKG = $mol_type_enforce<
		`Cr-Fe-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OBODC1EE = $mol_type_enforce<
		`Rb-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OGI2BUWI = $mol_type_enforce<
		`Ce-Pr-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KV0PV9Y4 = $mol_type_enforce<
		`Li-Pr-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YQF1XM1O = $mol_type_enforce<
		`Yb-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SWABCQH3 = $mol_type_enforce<
		`La-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__94TC4UD9 = $mol_type_enforce<
		`Pm-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__27UJ7UOL = $mol_type_enforce<
		`Hg-Bi-Sb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XBFTDRSE = $mol_type_enforce<
		`Ce-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4M6G9FJC = $mol_type_enforce<
		`K-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P7CJLGPT = $mol_type_enforce<
		`Ca-Eu-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KEGT6YUV = $mol_type_enforce<
		`Y-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UU5UR1DB = $mol_type_enforce<
		`Nd-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V4Y3U72B = $mol_type_enforce<
		`Ag-Ir-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8KU731OQ = $mol_type_enforce<
		`Ni-Ru-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FU7SEXA6 = $mol_type_enforce<
		`Li-Nd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GT0R7ZG4 = $mol_type_enforce<
		`Cs-Rb-Li`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZKA50QVM = $mol_type_enforce<
		`Na-Li-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FXAJLDXZ = $mol_type_enforce<
		`Gd-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q7E0MEMH = $mol_type_enforce<
		`Co-Ag-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6O4TSEIK = $mol_type_enforce<
		`B-Sb-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E2EY12PM = $mol_type_enforce<
		`Pr-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IHTMLXOR = $mol_type_enforce<
		`La-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O6Q2F6Q5 = $mol_type_enforce<
		`Tb-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W9JJ7X4F = $mol_type_enforce<
		`Re-Ni-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HMXWR45N = $mol_type_enforce<
		`Yb-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__563LRWWN = $mol_type_enforce<
		`Pm-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KORXF235 = $mol_type_enforce<
		`La-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AMXZYHJ8 = $mol_type_enforce<
		`Be-Si-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X1GMB4P5 = $mol_type_enforce<
		`Cr-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XWFE72JN = $mol_type_enforce<
		`Ce-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E9U9E6Z9 = $mol_type_enforce<
		`Ce-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OCFGY3GZ = $mol_type_enforce<
		`Li-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IKU3IL92 = $mol_type_enforce<
		`Tb-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EQWNOYTT = $mol_type_enforce<
		`Tb-Sm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ENYZUSK5 = $mol_type_enforce<
		`Pm-Nd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FUKA3GQB = $mol_type_enforce<
		`Sc-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OYA0RRTP = $mol_type_enforce<
		`Li-Nd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZS8AW5EA = $mol_type_enforce<
		`La-Nd-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0F16U2DU = $mol_type_enforce<
		`La-Yb-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BI15C5GY = $mol_type_enforce<
		`Ce-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P6E92VEV = $mol_type_enforce<
		`Rb-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AQPXTELO = $mol_type_enforce<
		`La-Cr-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W5CVD40M = $mol_type_enforce<
		`Ce-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4VQ6KNEE = $mol_type_enforce<
		`Zr-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4BCE8NI5 = $mol_type_enforce<
		`Lu-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LDMJPNVK = $mol_type_enforce<
		`Sm-Dy-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6W3XETGW = $mol_type_enforce<
		`Nd-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WUPD1K16 = $mol_type_enforce<
		`Nd-Dy-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__33I3JQDF = $mol_type_enforce<
		`Pm-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EB1FROJI = $mol_type_enforce<
		`Na-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9MHBAYSI = $mol_type_enforce<
		`Pr-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2P1CA5B6 = $mol_type_enforce<
		`La-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3ALKLYM0 = $mol_type_enforce<
		`Al-Ga-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FD58FHRK = $mol_type_enforce<
		`La-Pm-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WJP1F8YO = $mol_type_enforce<
		`Sm-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3QRQWT0X = $mol_type_enforce<
		`Gd-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__01KOWEG4 = $mol_type_enforce<
		`Nd-Sm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X1O45TSZ = $mol_type_enforce<
		`Tb-Pm-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FXVW6QM1 = $mol_type_enforce<
		`Al-Hg-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__13WGG3RM = $mol_type_enforce<
		`V-Hg-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7F5QYT11 = $mol_type_enforce<
		`Pm-Pr-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YXEUR5VH = $mol_type_enforce<
		`Ce-Th-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VKF2DBTW = $mol_type_enforce<
		`K-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__50POSTT8 = $mol_type_enforce<
		`Pr-Dy-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U7O6WB59 = $mol_type_enforce<
		`Li-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZWP0F8GX = $mol_type_enforce<
		`La-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NM23UZ9B = $mol_type_enforce<
		`Dy-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U64D4IHG = $mol_type_enforce<
		`Lu-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DDBS07LP = $mol_type_enforce<
		`Nd-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EMLQXF9C = $mol_type_enforce<
		`Pr-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KDR3H7VU = $mol_type_enforce<
		`La-Pm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0WB9TY6U = $mol_type_enforce<
		`Tl-Cd-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1YQNQ3F2 = $mol_type_enforce<
		`Yb-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WNAWCN9B = $mol_type_enforce<
		`Os-Pd-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W9C1K0V8 = $mol_type_enforce<
		`Sm-Dy-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U4VRKOJL = $mol_type_enforce<
		`Pu-Np-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8ILLDLU9 = $mol_type_enforce<
		`Nb-V-Hg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7B6AUYNC = $mol_type_enforce<
		`Pr-Dy-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__44Q9TEEI = $mol_type_enforce<
		`Nd-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AIRTQP11 = $mol_type_enforce<
		`Ho-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1W1SJHFD = $mol_type_enforce<
		`Zr-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QMIXP85S = $mol_type_enforce<
		`Pm-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6PQAO2YM = $mol_type_enforce<
		`V-Ag-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__50G83WIR = $mol_type_enforce<
		`Pr-Dy-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CI80DAQD = $mol_type_enforce<
		`Zn-Cd-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NPBUWG12 = $mol_type_enforce<
		`Li-Sm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9QGTTVL1 = $mol_type_enforce<
		`La-Tb-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L7JUEFLN = $mol_type_enforce<
		`Cr-Ni-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YP720IIR = $mol_type_enforce<
		`La-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V24R5I5F = $mol_type_enforce<
		`La-Ce-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YR6WH3ZW = $mol_type_enforce<
		`Yb-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T69YZXRP = $mol_type_enforce<
		`Yb-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HJVUHWFG = $mol_type_enforce<
		`Na-Ca-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8N3BUE6Z = $mol_type_enforce<
		`Co-Hg-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PDRPH3RV = $mol_type_enforce<
		`Pm-Pr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0YOVMD6T = $mol_type_enforce<
		`Be-Si-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DSWCW6O9 = $mol_type_enforce<
		`Sr-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MRMUU5J5 = $mol_type_enforce<
		`Yb-Gd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K2OSU28W = $mol_type_enforce<
		`V-Pd-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O7FKASGQ = $mol_type_enforce<
		`Re-Ir-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z9CV0VW3 = $mol_type_enforce<
		`Ce-Gd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IMII9VGZ = $mol_type_enforce<
		`Li-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WKH6RHBK = $mol_type_enforce<
		`Be-Zn-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6Z1Q882W = $mol_type_enforce<
		`Y-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ERLXTFXU = $mol_type_enforce<
		`Ga-Hg-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7YR6MSOP = $mol_type_enforce<
		`Ba-Pr-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HFTUR202 = $mol_type_enforce<
		`La-Tm-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QMVLTBA5 = $mol_type_enforce<
		`Li-Tb-Ce`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H3Y4W5SN = $mol_type_enforce<
		`Yb-Eu-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VSJI1F42 = $mol_type_enforce<
		`Si-Ag-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UHKLLSBI = $mol_type_enforce<
		`Ce-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FESRU0WT = $mol_type_enforce<
		`Gd-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1CWMFO0O = $mol_type_enforce<
		`Th-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z68X8F9H = $mol_type_enforce<
		`Ag-Ir-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D7FM3A6F = $mol_type_enforce<
		`Cu-Re-Tc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1EHUQWK6 = $mol_type_enforce<
		`Ce-Pm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IY448ASA = $mol_type_enforce<
		`Ba-Fe-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NML1CQSD = $mol_type_enforce<
		`Ir-Os-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RV3YUTXO = $mol_type_enforce<
		`Cr-Cu-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0IDRR7J5 = $mol_type_enforce<
		`La-Ce-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ONSNEE7K = $mol_type_enforce<
		`Li-La-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VDN0PSOG = $mol_type_enforce<
		`Ca-Yb-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__042GFNDI = $mol_type_enforce<
		`Fe-Pd-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ODK01CN9 = $mol_type_enforce<
		`Ce-Eu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R7P3QHMS = $mol_type_enforce<
		`Cs-Pr-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G8J896CR = $mol_type_enforce<
		`Nb-Cu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NRS3QO0F = $mol_type_enforce<
		`Fe-Cu-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N1CDDBTG = $mol_type_enforce<
		`Tb-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BICTQWOQ = $mol_type_enforce<
		`La-Th-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6TLYGU8E = $mol_type_enforce<
		`Sm-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XTTK3IHK = $mol_type_enforce<
		`Yb-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C7IXL2N2 = $mol_type_enforce<
		`Al-Zn-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1XKSMYQF = $mol_type_enforce<
		`Yb-Ho-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CJSDLD8Q = $mol_type_enforce<
		`Cs-K-Li`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2OOU6URH = $mol_type_enforce<
		`Pr-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JW2DG6Q8 = $mol_type_enforce<
		`Fe-Co-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PFBZEG6B = $mol_type_enforce<
		`Tb-Pm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RH274UHL = $mol_type_enforce<
		`Lu-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T5KA4CPI = $mol_type_enforce<
		`Y-Ho-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W1OWKKOE = $mol_type_enforce<
		`Li-Ce-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZXIXCJDV = $mol_type_enforce<
		`Sm-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WLSU6ATE = $mol_type_enforce<
		`Ni-Pd-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SE9J1C5E = $mol_type_enforce<
		`Sc-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0CNBBLBM = $mol_type_enforce<
		`Zn-In-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z4RGKUC4 = $mol_type_enforce<
		`Y-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__87EECGG9 = $mol_type_enforce<
		`Ce-Eu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6KX7I24B = $mol_type_enforce<
		`Yb-Gd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H24WL3QZ = $mol_type_enforce<
		`Tb-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__79Z3TC1K = $mol_type_enforce<
		`Yb-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YZ7TKMIA = $mol_type_enforce<
		`Tb-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9ZEN9KVF = $mol_type_enforce<
		`Ta-Tl-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__63O90PIH = $mol_type_enforce<
		`Hg-Mo-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M76S6MM2 = $mol_type_enforce<
		`Sm-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J4WV1VYN = $mol_type_enforce<
		`Co-Re-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P17RV3S8 = $mol_type_enforce<
		`Co-Ag-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J4GZPGUV = $mol_type_enforce<
		`La-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QKFPK2AL = $mol_type_enforce<
		`Hf-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UDRFYLAH = $mol_type_enforce<
		`Fe-Ni-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P5ZJ2O0I = $mol_type_enforce<
		`Nb-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JBYQAEQF = $mol_type_enforce<
		`Gd-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E5XQV47E = $mol_type_enforce<
		`Pd-Pt-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MD5YTN16 = $mol_type_enforce<
		`Pm-Dy-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__754L09ZY = $mol_type_enforce<
		`Co-Ni-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KF5RUOQW = $mol_type_enforce<
		`Gd-Dy-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5JVWHDR1 = $mol_type_enforce<
		`Tm-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4ZPILO7N = $mol_type_enforce<
		`Nd-Dy-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YZY33IJB = $mol_type_enforce<
		`Dy-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JD56P6HX = $mol_type_enforce<
		`Tb-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__USXIHLN0 = $mol_type_enforce<
		`Nd-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__87JVAQXC = $mol_type_enforce<
		`Sm-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OS1LSGFV = $mol_type_enforce<
		`Li-La-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B5ZL5H5O = $mol_type_enforce<
		`Th-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6L5GTCNJ = $mol_type_enforce<
		`Tb-Ce-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0XXZHWR6 = $mol_type_enforce<
		`Gd-Ho-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZYDBSAYY = $mol_type_enforce<
		`Pr-Dy-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HX4NB3WM = $mol_type_enforce<
		`Hf-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FEE7RD2Q = $mol_type_enforce<
		`Ca-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3V6D1NOW = $mol_type_enforce<
		`Ti-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DZIHTF20 = $mol_type_enforce<
		`Co-Ir-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AN55OWJ0 = $mol_type_enforce<
		`Ba-Sr-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__85MMTIXR = $mol_type_enforce<
		`Ba-Yb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GR2EBOYI = $mol_type_enforce<
		`Yb-Th-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__231KJO3Q = $mol_type_enforce<
		`Li-Nd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5NV99HS3 = $mol_type_enforce<
		`Ce-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ALH7I3X4 = $mol_type_enforce<
		`Co-Re-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7MNNQO94 = $mol_type_enforce<
		`Yb-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5IMMT7WR = $mol_type_enforce<
		`Re-Pd-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4U2U3G6Y = $mol_type_enforce<
		`Ni-Pd-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__21HO16IC = $mol_type_enforce<
		`Ho-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7RPJ2W8R = $mol_type_enforce<
		`Cr-Fe-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G8FEBZIY = $mol_type_enforce<
		`Tb-Sm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E8LTIM2H = $mol_type_enforce<
		`Ce-Gd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VGYD89SR = $mol_type_enforce<
		`Li-Ce-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JH853YVA = $mol_type_enforce<
		`Nd-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V6IQAZC9 = $mol_type_enforce<
		`Li-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AFIVXRBY = $mol_type_enforce<
		`Nd-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ABOGVA61 = $mol_type_enforce<
		`La-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CEU7TU9Q = $mol_type_enforce<
		`La-Ce-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AKOZJI44 = $mol_type_enforce<
		`La-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H40SQNTJ = $mol_type_enforce<
		`Ag-Os-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LWZV8ATF = $mol_type_enforce<
		`Pt-W-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CV257MKS = $mol_type_enforce<
		`Cu-Bi-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6NJ041DM = $mol_type_enforce<
		`Pr-Nd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__11AP7IE0 = $mol_type_enforce<
		`Fe-Co-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2OKASO2V = $mol_type_enforce<
		`Li-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__344F3EZR = $mol_type_enforce<
		`Y-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1VI42SUR = $mol_type_enforce<
		`Be-Si-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X1FXFHXI = $mol_type_enforce<
		`Li-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AFRSEU4G = $mol_type_enforce<
		`Th-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__98OGV338 = $mol_type_enforce<
		`Ho-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TNW6QODJ = $mol_type_enforce<
		`Pm-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XAHOYVUR = $mol_type_enforce<
		`Th-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T426D99B = $mol_type_enforce<
		`Gd-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2UO0BC2W = $mol_type_enforce<
		`Yb-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6JQQL0Q4 = $mol_type_enforce<
		`Tm-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AXYIR531 = $mol_type_enforce<
		`Cs-Mg-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R3HF7Y0K = $mol_type_enforce<
		`La-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2VMK6Z0R = $mol_type_enforce<
		`Li-Nd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A2YYVPGQ = $mol_type_enforce<
		`Co-Ag-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1K463FS4 = $mol_type_enforce<
		`Ba-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UA4Z09YH = $mol_type_enforce<
		`Pr-Gd-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9NN9HF06 = $mol_type_enforce<
		`Ce-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MAJLWV3E = $mol_type_enforce<
		`Tb-Dy-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4YCK3BFQ = $mol_type_enforce<
		`Sr-Ca-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F9FJOLY6 = $mol_type_enforce<
		`Nd-Sc-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CP4Z8902 = $mol_type_enforce<
		`Li-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WR12SMGQ = $mol_type_enforce<
		`Y-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ISGN1P5B = $mol_type_enforce<
		`Cr-Cu-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J7AKGO69 = $mol_type_enforce<
		`Fe-Os-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F4I0ZQ56 = $mol_type_enforce<
		`Pm-Sm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KRY06H67 = $mol_type_enforce<
		`Cu-Pb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S5XXQVQY = $mol_type_enforce<
		`Nd-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MB4UBGZR = $mol_type_enforce<
		`Pm-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__32ZRW7ZR = $mol_type_enforce<
		`Ce-Nd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KPBDGVA2 = $mol_type_enforce<
		`Fe-Ni-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7544DEFW = $mol_type_enforce<
		`U-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__58YD3QLW = $mol_type_enforce<
		`Nd-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VRMENOOI = $mol_type_enforce<
		`Dy-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A7Q9TWDX = $mol_type_enforce<
		`Ce-Pu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U8PUIB84 = $mol_type_enforce<
		`La-Ce-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3ZJJBNA8 = $mol_type_enforce<
		`Tm-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K61EIWJV = $mol_type_enforce<
		`La-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OCT93YY0 = $mol_type_enforce<
		`Ba-La-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V6NITB0G = $mol_type_enforce<
		`Tm-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NXDN9U2Y = $mol_type_enforce<
		`Eu-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VEBZDDAH = $mol_type_enforce<
		`Yb-Y-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IE3FEABQ = $mol_type_enforce<
		`La-Yb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__US0LXBGD = $mol_type_enforce<
		`Hf-Th-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O7CO2JC2 = $mol_type_enforce<
		`Nd-Sm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V7O81DMR = $mol_type_enforce<
		`Na-Hf-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9OXGVQWF = $mol_type_enforce<
		`Fe-Ag-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__94RHQEK4 = $mol_type_enforce<
		`Li-Pu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5GBXERQU = $mol_type_enforce<
		`Pr-Sm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OK6B6IEH = $mol_type_enforce<
		`Tb-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4RN0F7DW = $mol_type_enforce<
		`Sm-Gd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FF6AOX4B = $mol_type_enforce<
		`Co-Cu-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4B47LQDE = $mol_type_enforce<
		`Re-Ag-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XB0DTTV0 = $mol_type_enforce<
		`Ru-Rh-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__83Y12WZU = $mol_type_enforce<
		`Mn-Tl-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4RCL22QZ = $mol_type_enforce<
		`Pr-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MH8E6NVJ = $mol_type_enforce<
		`La-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6IH7UTS4 = $mol_type_enforce<
		`Dy-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AYEVQ07O = $mol_type_enforce<
		`Ta-In-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KAP7VJN3 = $mol_type_enforce<
		`Be-In-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7T87V1L3 = $mol_type_enforce<
		`Y-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2OAMWD7Z = $mol_type_enforce<
		`Cd-Bi-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FE6VJ8OV = $mol_type_enforce<
		`Yb-Dy-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VTMZJ8KR = $mol_type_enforce<
		`Na-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YLENQPC5 = $mol_type_enforce<
		`Ba-Nd-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DASQ4PTP = $mol_type_enforce<
		`Ca-Mn-Co`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OOGPWE8Q = $mol_type_enforce<
		`Li-Nd-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3STRDXJ6 = $mol_type_enforce<
		`Co-Os-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3TNAQMOK = $mol_type_enforce<
		`Co-Ru-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DP9HW6BI = $mol_type_enforce<
		`Yb-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5I6DR5OO = $mol_type_enforce<
		`K-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U0IMJD4O = $mol_type_enforce<
		`Tb-Yb-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XGO1BL0F = $mol_type_enforce<
		`Tb-Yb-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AKUEKXUP = $mol_type_enforce<
		`Sc-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EPCLXE2K = $mol_type_enforce<
		`Fe-Co-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__69B7YFFL = $mol_type_enforce<
		`Fe-Cu-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ABQFS9PE = $mol_type_enforce<
		`Hf-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TX9JT2PZ = $mol_type_enforce<
		`Tb-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__70BSKHLP = $mol_type_enforce<
		`Hg-Ge-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UIGKHYLA = $mol_type_enforce<
		`K-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4DYMHMFB = $mol_type_enforce<
		`Li-La-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IQRU6QNQ = $mol_type_enforce<
		`Er-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OQ1D8HJP = $mol_type_enforce<
		`K-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VUTB34R8 = $mol_type_enforce<
		`Ce-Y-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P4CQX4C4 = $mol_type_enforce<
		`Gd-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IUOWFHMC = $mol_type_enforce<
		`Li-Tb-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UURW8L6D = $mol_type_enforce<
		`Fe-Cu-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RA7GUF9G = $mol_type_enforce<
		`Cu-Os-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E1GYYHAM = $mol_type_enforce<
		`Tb-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8FKLGKPN = $mol_type_enforce<
		`Pr-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WXJTAI2H = $mol_type_enforce<
		`Li-Y-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QYYTKR1A = $mol_type_enforce<
		`Dy-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BGCKQV8J = $mol_type_enforce<
		`Na-Cu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BAR3IEE9 = $mol_type_enforce<
		`Yb-Eu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IQ2QF35Y = $mol_type_enforce<
		`Li-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EUYXJ1CG = $mol_type_enforce<
		`Cs-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NZEFWUVF = $mol_type_enforce<
		`Co-Cu-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OT5TNEE5 = $mol_type_enforce<
		`Rb-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A6QA4GZ8 = $mol_type_enforce<
		`Al-Ga-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WZR26NJG = $mol_type_enforce<
		`V-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SENWC711 = $mol_type_enforce<
		`Pm-Gd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K3NWQIRT = $mol_type_enforce<
		`Li-La-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YO3NQ3NJ = $mol_type_enforce<
		`Ce-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T86BC6A4 = $mol_type_enforce<
		`Ce-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NEQ75VSS = $mol_type_enforce<
		`Ag-Rh-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SNT6R56N = $mol_type_enforce<
		`Ce-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H8KPJ3NK = $mol_type_enforce<
		`Bi-B-Sb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6KKABEBL = $mol_type_enforce<
		`Ho-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__29JU9BIB = $mol_type_enforce<
		`La-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GU3KLY01 = $mol_type_enforce<
		`Tb-Dy-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0PW1X6PD = $mol_type_enforce<
		`Pm-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AZACNEYO = $mol_type_enforce<
		`Tb-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__96BCFSYU = $mol_type_enforce<
		`Zn-Cd-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AL33WC1O = $mol_type_enforce<
		`Ce-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EGSFC5UO = $mol_type_enforce<
		`Sm-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__89QW8ROS = $mol_type_enforce<
		`Th-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8648EE4V = $mol_type_enforce<
		`Tb-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TPJRV06Q = $mol_type_enforce<
		`Pr-Sm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UFOYYUHC = $mol_type_enforce<
		`La-Pr-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__73YK6T17 = $mol_type_enforce<
		`Ho-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4VEHY446 = $mol_type_enforce<
		`Ag-Bi-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5PM9EHNO = $mol_type_enforce<
		`Li-Tb-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S7J0KTQA = $mol_type_enforce<
		`Sr-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X63VGXH0 = $mol_type_enforce<
		`Co-Re-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CYA8VPRF = $mol_type_enforce<
		`Y-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NS13B32H = $mol_type_enforce<
		`Ce-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AYO01FVN = $mol_type_enforce<
		`Pm-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TW31ZC74 = $mol_type_enforce<
		`Sm-Dy-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZJ70WYE9 = $mol_type_enforce<
		`Pd-Ru-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KV7NM6AD = $mol_type_enforce<
		`Hg-Bi-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5860ICY8 = $mol_type_enforce<
		`Sc-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XX9FLQGY = $mol_type_enforce<
		`Yb-Pr-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JHN4VUSK = $mol_type_enforce<
		`Al-Tl-In`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2QU4JXYH = $mol_type_enforce<
		`Ho-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9MX2O9MC = $mol_type_enforce<
		`Rb-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ABK3C9PO = $mol_type_enforce<
		`Tm-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9L03CVLG = $mol_type_enforce<
		`Pr-Sm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KTNY4K8X = $mol_type_enforce<
		`Gd-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6D9IX53X = $mol_type_enforce<
		`Mn-V-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A8QR6VOR = $mol_type_enforce<
		`Cr-Cd-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F3ZIZ0M7 = $mol_type_enforce<
		`Tb-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D1FTW4WT = $mol_type_enforce<
		`V-Ag-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JUEG08GU = $mol_type_enforce<
		`La-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0LZAP2TS = $mol_type_enforce<
		`La-Dy-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QZ7LHM7X = $mol_type_enforce<
		`Li-Gd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PACJW07J = $mol_type_enforce<
		`Y-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H4XH2QEL = $mol_type_enforce<
		`Li-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PCKATHQJ = $mol_type_enforce<
		`Np-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R18ZU5KD = $mol_type_enforce<
		`Ag-Mo-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KVKZL2HS = $mol_type_enforce<
		`Co-Hg-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MRLIF5JT = $mol_type_enforce<
		`Mn-Tl-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K8RJ79L9 = $mol_type_enforce<
		`Eu-Y-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3Z1KXI5Q = $mol_type_enforce<
		`Cu-Ir-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LDR8DTQ6 = $mol_type_enforce<
		`Tb-Gd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VAG58DJV = $mol_type_enforce<
		`Pr-Hf-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ST0EJBQ7 = $mol_type_enforce<
		`Tb-Ce-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WTY530I7 = $mol_type_enforce<
		`Ag-Ir-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BPQXRVIF = $mol_type_enforce<
		`Tl-Zn-In`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4MUO0GV4 = $mol_type_enforce<
		`Li-Sm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OT1J4ZPI = $mol_type_enforce<
		`Nd-Sm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UCQSY930 = $mol_type_enforce<
		`Re-Ni-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A0DULYLU = $mol_type_enforce<
		`Yb-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G29R932X = $mol_type_enforce<
		`La-Dy-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__11EQBKOC = $mol_type_enforce<
		`Mn-Ru-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1PC3JUNK = $mol_type_enforce<
		`Dy-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PWUFPFW5 = $mol_type_enforce<
		`Pr-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y65DEDFP = $mol_type_enforce<
		`Sm-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZYTXFLVN = $mol_type_enforce<
		`Eu-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0JRXIO05 = $mol_type_enforce<
		`Y-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ASL1XZ1O = $mol_type_enforce<
		`Ce-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D7O8BI6T = $mol_type_enforce<
		`Sn-Ge-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3LJZKXDN = $mol_type_enforce<
		`Nd-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VE66Q4GV = $mol_type_enforce<
		`Hf-Sc-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P5Q4TDQ8 = $mol_type_enforce<
		`Tl-Ga-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LZBFOHL2 = $mol_type_enforce<
		`Tm-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K71Q9TGX = $mol_type_enforce<
		`Fe-Ru-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IS1GPE2V = $mol_type_enforce<
		`Ho-Er-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YYGBI8BA = $mol_type_enforce<
		`Yb-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GU5X20LA = $mol_type_enforce<
		`Nd-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L8LEG52J = $mol_type_enforce<
		`Cs-Rb-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HATH4359 = $mol_type_enforce<
		`Lu-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U5S5W4TX = $mol_type_enforce<
		`Zn-Ga-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ILK0Z7CA = $mol_type_enforce<
		`Pr-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2B8NBQZU = $mol_type_enforce<
		`La-Eu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KUGLYY4L = $mol_type_enforce<
		`Yb-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D3EON1KD = $mol_type_enforce<
		`Yb-Gd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W9Y8OWO2 = $mol_type_enforce<
		`Tl-Ge-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D3KEHCMF = $mol_type_enforce<
		`Tb-Ce-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F7PID81B = $mol_type_enforce<
		`Gd-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J65OD8PU = $mol_type_enforce<
		`La-Dy-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9GXOVWMT = $mol_type_enforce<
		`Co-Re-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OV6TF4XH = $mol_type_enforce<
		`Yb-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__86DYH09Y = $mol_type_enforce<
		`Al-Zn-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SCC3WNW8 = $mol_type_enforce<
		`Tl-Ni-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8DIKW2SA = $mol_type_enforce<
		`K-Rb-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N9YN53LP = $mol_type_enforce<
		`Y-Th-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YWR5IH5A = $mol_type_enforce<
		`Pm-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VZOEL7TL = $mol_type_enforce<
		`Ce-Sm-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EE7CKKM6 = $mol_type_enforce<
		`La-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N0FHRQAQ = $mol_type_enforce<
		`Ce-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZP1B7UOR = $mol_type_enforce<
		`Na-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SPJ7NR61 = $mol_type_enforce<
		`Tb-Ce-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7UYC082G = $mol_type_enforce<
		`Sm-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SO4IIVWP = $mol_type_enforce<
		`Cs-Li-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H7JW4EUN = $mol_type_enforce<
		`Pr-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BUXX948T = $mol_type_enforce<
		`Dy-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DY6MX0TJ = $mol_type_enforce<
		`Ca-Fe-Co`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0PIZJXFD = $mol_type_enforce<
		`Lu-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XDOX2177 = $mol_type_enforce<
		`Al-Ga-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T6G9WMHP = $mol_type_enforce<
		`Pr-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__42Q2IPWL = $mol_type_enforce<
		`Na-Li-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XEV1B0W9 = $mol_type_enforce<
		`Ir-Ru-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BVOHA45V = $mol_type_enforce<
		`Fe-Ru-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1N1RGAV6 = $mol_type_enforce<
		`Ho-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1EUZM0UA = $mol_type_enforce<
		`Lu-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8K2X6FZF = $mol_type_enforce<
		`Pu-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FQTDSU2X = $mol_type_enforce<
		`Lu-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__86P5G95A = $mol_type_enforce<
		`Ca-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5BE795KM = $mol_type_enforce<
		`La-Dy-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9ZVL41SH = $mol_type_enforce<
		`Ce-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2YXVEU4J = $mol_type_enforce<
		`Li-La-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7LYJBYQT = $mol_type_enforce<
		`Mn-V-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FZ3VPRV8 = $mol_type_enforce<
		`Ni-Ag-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BMBZPEUN = $mol_type_enforce<
		`Li-Tb-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JZJSBKHG = $mol_type_enforce<
		`Cs-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3EALPQOG = $mol_type_enforce<
		`Li-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T5YTU4WU = $mol_type_enforce<
		`Cs-Pr-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YAQF2O4Z = $mol_type_enforce<
		`Hf-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0B7D86DT = $mol_type_enforce<
		`Sm-Th-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ORGNBS8Q = $mol_type_enforce<
		`Pr-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FO148E24 = $mol_type_enforce<
		`Yb-Dy-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X8A22PWB = $mol_type_enforce<
		`Tb-Gd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6GYW9U0P = $mol_type_enforce<
		`La-Yb-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4G4NN04I = $mol_type_enforce<
		`Mn-Tl-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J1EL7VZI = $mol_type_enforce<
		`Yb-Pr-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EL8B575G = $mol_type_enforce<
		`La-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0OHZE178 = $mol_type_enforce<
		`Ce-Pr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UAYJFDHP = $mol_type_enforce<
		`La-Nd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SGCWR5NW = $mol_type_enforce<
		`Ce-Y-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5G869ZMB = $mol_type_enforce<
		`Ca-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U3L5K1CG = $mol_type_enforce<
		`Tb-Pr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A69D47NC = $mol_type_enforce<
		`Dy-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RZNEZBH3 = $mol_type_enforce<
		`Ni-Pt-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AQ80AYYO = $mol_type_enforce<
		`Ni-Rh-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RS3K4UA2 = $mol_type_enforce<
		`Hf-Mg-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U6D4TBO0 = $mol_type_enforce<
		`Ca-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__907GC0XZ = $mol_type_enforce<
		`Al-Hg-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I51Q72DL = $mol_type_enforce<
		`Nd-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4ALAJLQU = $mol_type_enforce<
		`Li-Sm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VPPOZ400 = $mol_type_enforce<
		`Pm-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YMRCTXRA = $mol_type_enforce<
		`Ca-Yb-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AVGSHKWN = $mol_type_enforce<
		`Co-Cu-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H4UXMS9H = $mol_type_enforce<
		`Li-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2D68XFZO = $mol_type_enforce<
		`Er-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9JWEISKD = $mol_type_enforce<
		`Sr-Mn-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0LBGFGLB = $mol_type_enforce<
		`Pr-Gd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A8SSWAUQ = $mol_type_enforce<
		`Na-Li-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O90OW4LZ = $mol_type_enforce<
		`Na-V-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z1SCTAWQ = $mol_type_enforce<
		`Na-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M3NS72FE = $mol_type_enforce<
		`Pd-W-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SWEWXOJY = $mol_type_enforce<
		`Li-Gd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I9RNUBJ9 = $mol_type_enforce<
		`Li-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G6A7SG7V = $mol_type_enforce<
		`Rb-Li-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0ZCLV2JR = $mol_type_enforce<
		`Co-Hg-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E13JC0MU = $mol_type_enforce<
		`Dy-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LE3VOP9X = $mol_type_enforce<
		`La-Nd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0ARMC0YB = $mol_type_enforce<
		`Al-Sn-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X1BICMB0 = $mol_type_enforce<
		`Na-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WGGBZ0UE = $mol_type_enforce<
		`Er-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ISRQRFZR = $mol_type_enforce<
		`Sr-Ca-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BOEYDCRX = $mol_type_enforce<
		`Rb-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__INDWNCO8 = $mol_type_enforce<
		`Y-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3OX9GJKC = $mol_type_enforce<
		`Tb-Nd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I4SXG0V5 = $mol_type_enforce<
		`Rb-Na-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T9QGJ69G = $mol_type_enforce<
		`Cd-Ga-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9GQ3V2GZ = $mol_type_enforce<
		`Ca-Tb-Yb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N3NS3S2I = $mol_type_enforce<
		`Sn-Ge-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5GA1NOVN = $mol_type_enforce<
		`Yb-Gd-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B3IMJN4B = $mol_type_enforce<
		`Y-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7F2CULBO = $mol_type_enforce<
		`Yb-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J2PYSQC4 = $mol_type_enforce<
		`Ce-Gd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q1GMX8AD = $mol_type_enforce<
		`Ba-Sm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KD1183N7 = $mol_type_enforce<
		`Cr-Cd-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2TY4O2IV = $mol_type_enforce<
		`La-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8MMKLI7V = $mol_type_enforce<
		`Ba-Mn-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HOF3QLGT = $mol_type_enforce<
		`Gd-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0EIO9VB7 = $mol_type_enforce<
		`Tb-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ELY2LYMJ = $mol_type_enforce<
		`Ba-Mn-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4KBIG0S5 = $mol_type_enforce<
		`Cu-Ni-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZSJLNA2I = $mol_type_enforce<
		`Lu-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TB2P8SXM = $mol_type_enforce<
		`Pr-Gd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1R2SFG8O = $mol_type_enforce<
		`Er-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__117VRWTK = $mol_type_enforce<
		`La-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2ANWUQYL = $mol_type_enforce<
		`Mn-Co-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4XJAJSTH = $mol_type_enforce<
		`Yb-Eu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NQM9JHYS = $mol_type_enforce<
		`Li-Pm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3VA5AZ8N = $mol_type_enforce<
		`La-Sm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V2ZRJTS3 = $mol_type_enforce<
		`La-Eu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AXW59U85 = $mol_type_enforce<
		`Sn-Ge-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3IBO5OV6 = $mol_type_enforce<
		`La-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FXHI3XZE = $mol_type_enforce<
		`Yb-Pr-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NEMK1XDD = $mol_type_enforce<
		`Ce-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K6CYER5Y = $mol_type_enforce<
		`Rb-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AZX3ENNH = $mol_type_enforce<
		`Tl-Ag-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R92DNHQ4 = $mol_type_enforce<
		`Gd-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IXCECIRL = $mol_type_enforce<
		`Y-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FAYEKXQY = $mol_type_enforce<
		`Tb-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1XI6Z92K = $mol_type_enforce<
		`Fe-Ir-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0SNU6AUU = $mol_type_enforce<
		`Hg-Os-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RHM9KOEH = $mol_type_enforce<
		`Ba-Yb-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OGZLUE9H = $mol_type_enforce<
		`Nd-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V6ULN17G = $mol_type_enforce<
		`Ce-Sm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SARL3SY0 = $mol_type_enforce<
		`Ba-Pr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3G8T7ZIX = $mol_type_enforce<
		`La-Pr-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F67E5DOR = $mol_type_enforce<
		`Rb-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7Y5KXUKT = $mol_type_enforce<
		`Ba-Ca-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L3UZ9I5R = $mol_type_enforce<
		`La-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FSSFZNY3 = $mol_type_enforce<
		`Lu-Th-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HG4A25FS = $mol_type_enforce<
		`Al-Ge-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LWE4XNDH = $mol_type_enforce<
		`Li-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8P5IBCNU = $mol_type_enforce<
		`K-Mg-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RXL5YZRH = $mol_type_enforce<
		`Hg-Ir-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LMUCQFJJ = $mol_type_enforce<
		`Nd-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N5B7GZ6Y = $mol_type_enforce<
		`Cs-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AK83VMH5 = $mol_type_enforce<
		`Cu-Pd-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7F9ZGHV0 = $mol_type_enforce<
		`Yb-Dy-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NM7CQILT = $mol_type_enforce<
		`Dy-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IBQ9RC2Y = $mol_type_enforce<
		`Hg-Ge-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z8UZWK5F = $mol_type_enforce<
		`Cu-Ni-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F8L4P8VM = $mol_type_enforce<
		`Y-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9JRV2JKS = $mol_type_enforce<
		`Sm-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9NFH4QTM = $mol_type_enforce<
		`Dy-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LPYO51ZY = $mol_type_enforce<
		`Tb-Nd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QC0M80XR = $mol_type_enforce<
		`Ta-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4UG1SM9R = $mol_type_enforce<
		`Tm-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5G9E12UQ = $mol_type_enforce<
		`Li-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DCNLGHUV = $mol_type_enforce<
		`Nd-Gd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SFIC1541 = $mol_type_enforce<
		`Na-Cr-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5Q0ZPBS0 = $mol_type_enforce<
		`Li-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__92U1GWWS = $mol_type_enforce<
		`Tb-Pm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3PN9FZ3M = $mol_type_enforce<
		`Lu-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AU92GLHT = $mol_type_enforce<
		`Th-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G8WFSMU2 = $mol_type_enforce<
		`Cd-Ge-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EGFCL9YW = $mol_type_enforce<
		`Th-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SL3T8VSV = $mol_type_enforce<
		`Yb-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JK0FWKQK = $mol_type_enforce<
		`Nd-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D56WATAR = $mol_type_enforce<
		`Al-Cd-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5M4M8TY1 = $mol_type_enforce<
		`Tb-Nd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y5E3JJUP = $mol_type_enforce<
		`Ag-Os-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8KWUQ76F = $mol_type_enforce<
		`Yb-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GW26D291 = $mol_type_enforce<
		`Ce-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F6CA1EH1 = $mol_type_enforce<
		`Co-Hg-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__51WJXK5B = $mol_type_enforce<
		`Ba-Sr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K1UBW53Z = $mol_type_enforce<
		`Nd-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7AKEQ476 = $mol_type_enforce<
		`Tb-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__83JZVMSE = $mol_type_enforce<
		`Tb-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AIZCF2XC = $mol_type_enforce<
		`Re-Ni-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TXWSJKYG = $mol_type_enforce<
		`Y-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M622JNSD = $mol_type_enforce<
		`Yb-Gd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZYUQO0V6 = $mol_type_enforce<
		`Sc-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D5AMH7SI = $mol_type_enforce<
		`Ce-Sm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9RIISSLW = $mol_type_enforce<
		`Pr-Gd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MSPOEL7Q = $mol_type_enforce<
		`Nd-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FOPF5JM3 = $mol_type_enforce<
		`Dy-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5TUNQ3HN = $mol_type_enforce<
		`Ca-La-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M05UHW57 = $mol_type_enforce<
		`Ce-Lu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FIJ26TWY = $mol_type_enforce<
		`Cu-Ru-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XR0X1EHN = $mol_type_enforce<
		`Si-Sn-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O2UEQE9Z = $mol_type_enforce<
		`Cu-Re-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__54JSGLIZ = $mol_type_enforce<
		`Ga-Ge-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1GICNQ1B = $mol_type_enforce<
		`La-Eu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BC4SA0X0 = $mol_type_enforce<
		`Tb-Ce-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QT7PNQQB = $mol_type_enforce<
		`Yb-Pr-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9CQNJCRM = $mol_type_enforce<
		`K-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BRTSIKO3 = $mol_type_enforce<
		`K-V-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2Y0HRN1K = $mol_type_enforce<
		`Lu-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J6E3IYQV = $mol_type_enforce<
		`Pm-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UN8TWD7N = $mol_type_enforce<
		`Pr-Sm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CYI3WT2J = $mol_type_enforce<
		`Al-Si-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SXOO47X8 = $mol_type_enforce<
		`Sm-Gd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0TF4PXG7 = $mol_type_enforce<
		`Ni-Ir-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O4Q5IPVJ = $mol_type_enforce<
		`Cu-Re-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T4K2DR87 = $mol_type_enforce<
		`Tl-Ge-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UVFQROAY = $mol_type_enforce<
		`Ba-Pm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PX43W743 = $mol_type_enforce<
		`Yb-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7VF8YCF9 = $mol_type_enforce<
		`Fe-Bi-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0CEP1QKF = $mol_type_enforce<
		`Yb-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H59ZY9VX = $mol_type_enforce<
		`Cs-Pr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9WWBC351 = $mol_type_enforce<
		`Ca-Tb-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1O37OAUL = $mol_type_enforce<
		`Li-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TG758T6L = $mol_type_enforce<
		`Tb-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5ECV3FBH = $mol_type_enforce<
		`Ca-La-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4OKIDC8Q = $mol_type_enforce<
		`Gd-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__58TK8CU8 = $mol_type_enforce<
		`Gd-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RFMESHOK = $mol_type_enforce<
		`Nd-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CYSRVNQ9 = $mol_type_enforce<
		`Tb-Yb-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ILGG6O9O = $mol_type_enforce<
		`La-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EITJ65CZ = $mol_type_enforce<
		`Pm-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AP0J4GT3 = $mol_type_enforce<
		`Ba-Ca-Eu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WL7NA0B1 = $mol_type_enforce<
		`La-Ce-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8X2BMIJK = $mol_type_enforce<
		`U-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VIQ9PLMN = $mol_type_enforce<
		`Ca-Ce-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GJU1A4V6 = $mol_type_enforce<
		`Ho-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S2UC8PF0 = $mol_type_enforce<
		`Y-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GNWO978Q = $mol_type_enforce<
		`Gd-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NO02M5JM = $mol_type_enforce<
		`Yb-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1FYUQ99G = $mol_type_enforce<
		`La-Eu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MGKJRBUJ = $mol_type_enforce<
		`Rb-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LNKVQRTZ = $mol_type_enforce<
		`Li-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XD9K3VCC = $mol_type_enforce<
		`Pm-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1E7AVPLG = $mol_type_enforce<
		`Li-Hf-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5JZRW04A = $mol_type_enforce<
		`Sr-V-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZG82NODM = $mol_type_enforce<
		`Pm-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V9FJHA4J = $mol_type_enforce<
		`Er-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EXAK8ERW = $mol_type_enforce<
		`Ca-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2G2W2TMS = $mol_type_enforce<
		`Li-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L3ADUYLO = $mol_type_enforce<
		`Ba-Ca-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PPGXMIUY = $mol_type_enforce<
		`Tb-Pm-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZAALE8GR = $mol_type_enforce<
		`Sm-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZQSBGZ9N = $mol_type_enforce<
		`Ce-Eu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DVVTRW6D = $mol_type_enforce<
		`Nd-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FCTMGRJI = $mol_type_enforce<
		`Fe-Co-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EVZMJUCE = $mol_type_enforce<
		`Gd-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__57HLVUHC = $mol_type_enforce<
		`Cs-Mg-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YKMB1GEC = $mol_type_enforce<
		`Ho-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HAG9L6N6 = $mol_type_enforce<
		`Y-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__490XLG0I = $mol_type_enforce<
		`Li-La-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VFUI76Z4 = $mol_type_enforce<
		`Li-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RBWUEYRP = $mol_type_enforce<
		`Ce-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O1LR0RNG = $mol_type_enforce<
		`Li-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7DANNVJQ = $mol_type_enforce<
		`Yb-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MC18A2MW = $mol_type_enforce<
		`K-Rb-Li`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GBS85KEN = $mol_type_enforce<
		`Er-Hf-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FMHSBG9X = $mol_type_enforce<
		`Cu-Tc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TOSVNKOS = $mol_type_enforce<
		`Ni-Rh-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UBJL83T8 = $mol_type_enforce<
		`Ni-Ag-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1ZT2RS3S = $mol_type_enforce<
		`Cr-Fe-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PM7M4QOI = $mol_type_enforce<
		`Y-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9RF7UBYN = $mol_type_enforce<
		`Tb-Nd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LIRMZE0K = $mol_type_enforce<
		`Dy-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4WNSMNGP = $mol_type_enforce<
		`Rb-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CX1CQF1K = $mol_type_enforce<
		`Li-Tb-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZAM1ZRLZ = $mol_type_enforce<
		`Sm-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W8SM0Q3B = $mol_type_enforce<
		`Ir-Pd-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E47IRD5S = $mol_type_enforce<
		`Pm-Nd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HP2CTBBZ = $mol_type_enforce<
		`Ba-Pm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OPTR86KA = $mol_type_enforce<
		`Y-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NNUP2MDY = $mol_type_enforce<
		`Nd-Gd-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W62MKD4J = $mol_type_enforce<
		`Th-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QLZOWU5P = $mol_type_enforce<
		`K-Mg-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JK2MQ80K = $mol_type_enforce<
		`Ni-Pt-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JINMFUCZ = $mol_type_enforce<
		`Cu-Pd-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F8BIZB5G = $mol_type_enforce<
		`Gd-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W9JV9YCL = $mol_type_enforce<
		`Co-Ag-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3YD4TCIQ = $mol_type_enforce<
		`Li-Ce-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__514CX561 = $mol_type_enforce<
		`Tm-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S0V2H7DZ = $mol_type_enforce<
		`Pm-Dy-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OO3704XQ = $mol_type_enforce<
		`Er-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OT3VNEC9 = $mol_type_enforce<
		`Sm-Th-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5NIJXDTQ = $mol_type_enforce<
		`Yb-Mn-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VNDWYV31 = $mol_type_enforce<
		`K-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NPAPKCW5 = $mol_type_enforce<
		`Dy-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4HSFRDJP = $mol_type_enforce<
		`La-Tb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LQ8F1RXL = $mol_type_enforce<
		`Yb-Nd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TMVTYORP = $mol_type_enforce<
		`Y-Ho-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SRUAF7E1 = $mol_type_enforce<
		`Yb-Pu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HVT25AMT = $mol_type_enforce<
		`Ce-Pr-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8J08VEMR = $mol_type_enforce<
		`Co-Re-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EG7ZG9Y4 = $mol_type_enforce<
		`Ce-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EEIPZD64 = $mol_type_enforce<
		`Ag-Mo-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3FOR7TDM = $mol_type_enforce<
		`Ca-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4IFKAZVQ = $mol_type_enforce<
		`Tl-Cu-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G7UYAWXO = $mol_type_enforce<
		`Tb-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QO7EY3B3 = $mol_type_enforce<
		`Be-Sn-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0XXVYWGM = $mol_type_enforce<
		`Y-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NJKEJ8WE = $mol_type_enforce<
		`Nd-Dy-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4YJPAFFF = $mol_type_enforce<
		`Nd-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QRKB44P6 = $mol_type_enforce<
		`Be-Zn-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LSRN4ECY = $mol_type_enforce<
		`La-Pr-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SYN8UH71 = $mol_type_enforce<
		`In-Ga-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UE3KL5H5 = $mol_type_enforce<
		`Li-Fe-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EB7TLFLP = $mol_type_enforce<
		`Ni-Ru-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XDY6DX0L = $mol_type_enforce<
		`Gd-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__17ZUT647 = $mol_type_enforce<
		`Gd-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7HT9R8AY = $mol_type_enforce<
		`Er-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TY014K03 = $mol_type_enforce<
		`Cu-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QJUYA3EC = $mol_type_enforce<
		`Pm-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8A9T2353 = $mol_type_enforce<
		`Hf-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PK3GKJXX = $mol_type_enforce<
		`Sc-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LFT9ECST = $mol_type_enforce<
		`Cr-Cd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HFENKDKV = $mol_type_enforce<
		`U-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CWUBF0C9 = $mol_type_enforce<
		`Tb-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__70Q2MM2Z = $mol_type_enforce<
		`Co-Cu-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2SQCXS2N = $mol_type_enforce<
		`Zn-Sn-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__431KDXFL = $mol_type_enforce<
		`Pm-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4LO0E9MR = $mol_type_enforce<
		`Ba-Eu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UU10JG1G = $mol_type_enforce<
		`Er-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HFJBDYXJ = $mol_type_enforce<
		`Ni-Ir-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JP7LPIVN = $mol_type_enforce<
		`Li-Mn-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7ZQD5CE2 = $mol_type_enforce<
		`Mg-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WR79JM18 = $mol_type_enforce<
		`Gd-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FMOXQW8S = $mol_type_enforce<
		`Co-Ni-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1OJADQ3L = $mol_type_enforce<
		`Yb-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A3XXT9L8 = $mol_type_enforce<
		`Yb-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IPHCEKCB = $mol_type_enforce<
		`Cu-Ir-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OBX9UMNW = $mol_type_enforce<
		`Nd-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9AWP0ZZL = $mol_type_enforce<
		`U-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7NDVB3G7 = $mol_type_enforce<
		`Sm-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__52X58R6X = $mol_type_enforce<
		`Mn-Ag-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DQASTMIA = $mol_type_enforce<
		`Pm-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7HF2PDSZ = $mol_type_enforce<
		`Er-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2FFQ2A4B = $mol_type_enforce<
		`Nd-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A0ZZ5S1R = $mol_type_enforce<
		`Sc-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__93LFVG3I = $mol_type_enforce<
		`Dy-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IHC78XWU = $mol_type_enforce<
		`Eu-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QH57JDR0 = $mol_type_enforce<
		`Y-Th-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZXX43YHJ = $mol_type_enforce<
		`Eu-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6UWKZXIW = $mol_type_enforce<
		`Nd-Gd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OSE74Y7R = $mol_type_enforce<
		`Cs-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__311N40I6 = $mol_type_enforce<
		`La-Nd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7XS6UZ65 = $mol_type_enforce<
		`Nd-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QN55X4IQ = $mol_type_enforce<
		`Zn-Si-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0F1UWOAS = $mol_type_enforce<
		`Mg-Cd-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ELFK0ACQ = $mol_type_enforce<
		`Re-Ag-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OQONAPH4 = $mol_type_enforce<
		`Sr-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NCJBIT1B = $mol_type_enforce<
		`Fe-Ag-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7PRZA8BE = $mol_type_enforce<
		`V-Cu-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8YWK4VG8 = $mol_type_enforce<
		`Sm-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VVLPV9JV = $mol_type_enforce<
		`Ce-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CFN6MYPZ = $mol_type_enforce<
		`Na-Fe-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6T9AEQ1L = $mol_type_enforce<
		`Li-Sm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RXCZ3LVZ = $mol_type_enforce<
		`Yb-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JBVQAEVP = $mol_type_enforce<
		`La-Yb-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7PW6ASGK = $mol_type_enforce<
		`Li-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W44HM16U = $mol_type_enforce<
		`Tm-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9S2PR8RZ = $mol_type_enforce<
		`Ta-Cu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LUZCLL5O = $mol_type_enforce<
		`Tb-Pm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GO9VYX9J = $mol_type_enforce<
		`Ni-Ag-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BYVN67NG = $mol_type_enforce<
		`Pm-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__30GN6O7U = $mol_type_enforce<
		`Pu-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1GXS1EV2 = $mol_type_enforce<
		`Eu-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YLH04H6O = $mol_type_enforce<
		`Th-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3ESZVWXE = $mol_type_enforce<
		`K-Rb-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q70QWLZ9 = $mol_type_enforce<
		`Sm-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TLGRWR07 = $mol_type_enforce<
		`Mg-Cd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AHK0PM5T = $mol_type_enforce<
		`Tb-Pr-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z2E3CLDF = $mol_type_enforce<
		`Ce-Eu-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B0E0T86N = $mol_type_enforce<
		`La-Nd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MFJU1V8K = $mol_type_enforce<
		`Ru-Pt-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZXKOHNXA = $mol_type_enforce<
		`La-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__95CJ1JZ3 = $mol_type_enforce<
		`Pm-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TKRAO7ET = $mol_type_enforce<
		`Yb-Th-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MVN5ZCT0 = $mol_type_enforce<
		`Ce-Pm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TSGSZDLB = $mol_type_enforce<
		`Co-Ni-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__542ZJNH3 = $mol_type_enforce<
		`Si-Sn-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BBINM1EC = $mol_type_enforce<
		`Er-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T30ST3E5 = $mol_type_enforce<
		`Os-Pd-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ECHOD3KH = $mol_type_enforce<
		`Hf-Mg-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YF7ANDY8 = $mol_type_enforce<
		`Mo-W-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ATSGCABN = $mol_type_enforce<
		`Sm-Gd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OBCD4PC4 = $mol_type_enforce<
		`Ca-Tb-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AQ3KWNPD = $mol_type_enforce<
		`Ho-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SEMUNBAL = $mol_type_enforce<
		`Fe-Co-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0LDAC5PU = $mol_type_enforce<
		`La-Sm-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__830SZLJ7 = $mol_type_enforce<
		`Be-Al-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9WABXPLH = $mol_type_enforce<
		`Er-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N8BN9HTK = $mol_type_enforce<
		`Sn-Bi-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3AGL5C4O = $mol_type_enforce<
		`Nd-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AJHMPDWI = $mol_type_enforce<
		`Eu-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KMJF5I7J = $mol_type_enforce<
		`La-Nd-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AO3HCZ0M = $mol_type_enforce<
		`Pm-Nd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZYINNX1X = $mol_type_enforce<
		`Dy-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q0NKCF92 = $mol_type_enforce<
		`Pm-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZUQRUZHH = $mol_type_enforce<
		`Tl-Zn-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__585336X2 = $mol_type_enforce<
		`Y-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3AM5XZ89 = $mol_type_enforce<
		`Ba-Pm-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UWJSFEM2 = $mol_type_enforce<
		`Ce-Pr-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GP27C0DQ = $mol_type_enforce<
		`V-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E2VYOTV0 = $mol_type_enforce<
		`Ce-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WLDV5U2L = $mol_type_enforce<
		`Yb-Dy-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0OY4676J = $mol_type_enforce<
		`La-Er-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XCLHRA1X = $mol_type_enforce<
		`Li-Mg-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O68CP05A = $mol_type_enforce<
		`Y-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5FQ8KSQQ = $mol_type_enforce<
		`Sm-Y-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8GWJMIOF = $mol_type_enforce<
		`Ce-Eu-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1DK6NQKK = $mol_type_enforce<
		`Ag-Ge-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FGZJMWE1 = $mol_type_enforce<
		`Sm-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HZL1ET6D = $mol_type_enforce<
		`Na-Li-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6Z80UF23 = $mol_type_enforce<
		`Tb-Yb-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LK1E4J7J = $mol_type_enforce<
		`Pr-Gd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1JW7FIAK = $mol_type_enforce<
		`Dy-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JQ5T3417 = $mol_type_enforce<
		`Er-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BBODVRB8 = $mol_type_enforce<
		`Na-Li-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PFTAYAPG = $mol_type_enforce<
		`Pm-Nd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JJ7USTAO = $mol_type_enforce<
		`La-Ce-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PNRCE4A3 = $mol_type_enforce<
		`Dy-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HA9QUG76 = $mol_type_enforce<
		`Ca-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3PUU12J7 = $mol_type_enforce<
		`Nd-Sm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CUDPISCQ = $mol_type_enforce<
		`Yb-Nd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KAXARZD9 = $mol_type_enforce<
		`Li-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__41BCKVFH = $mol_type_enforce<
		`Ca-Ce-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QC2T9XWN = $mol_type_enforce<
		`Cs-Li-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KYTTLDNA = $mol_type_enforce<
		`Y-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RRHKRI9K = $mol_type_enforce<
		`Sm-Dy-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M76NYA6C = $mol_type_enforce<
		`Ho-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LM3G45N4 = $mol_type_enforce<
		`Dy-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FGSDCSN5 = $mol_type_enforce<
		`Pu-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IPL9P14S = $mol_type_enforce<
		`Ce-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3UNTH4TT = $mol_type_enforce<
		`Sm-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1XPPTH77 = $mol_type_enforce<
		`La-Sm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F6JBDW5P = $mol_type_enforce<
		`Yb-Nd-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MHTXQYOC = $mol_type_enforce<
		`Pr-Dy-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0VBODKI0 = $mol_type_enforce<
		`Ho-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OXQFVIV8 = $mol_type_enforce<
		`Lu-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8Z5KO64N = $mol_type_enforce<
		`Yb-Nd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LN9PWDL3 = $mol_type_enforce<
		`Rb-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DSONDDAU = $mol_type_enforce<
		`Gd-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7RJ7YNLA = $mol_type_enforce<
		`Ho-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2G1MY9QH = $mol_type_enforce<
		`Tc-Pd-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__55CRJG64 = $mol_type_enforce<
		`Ce-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZCE9NQHV = $mol_type_enforce<
		`Cu-Pt-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W6XOW8T8 = $mol_type_enforce<
		`La-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CTB75Y0R = $mol_type_enforce<
		`Sm-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XAJV803N = $mol_type_enforce<
		`La-Gd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MX646V90 = $mol_type_enforce<
		`Al-Zn-Cd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0WA9UKAQ = $mol_type_enforce<
		`Cs-Pr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LU23UQQ9 = $mol_type_enforce<
		`Pm-Pr-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9MKQDB0O = $mol_type_enforce<
		`Os-Pt-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3Y9EHZLG = $mol_type_enforce<
		`Er-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CPUMQ3B0 = $mol_type_enforce<
		`Gd-Dy-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6JAJIUVD = $mol_type_enforce<
		`Tb-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YYC6UXDC = $mol_type_enforce<
		`Ce-Nd-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LV6W4CEC = $mol_type_enforce<
		`Be-Al-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M75YRF9Y = $mol_type_enforce<
		`Cu-Tc-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HIZRMWXC = $mol_type_enforce<
		`Nd-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P9SOJGC4 = $mol_type_enforce<
		`Ca-La-Tb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F2LF1YYZ = $mol_type_enforce<
		`Be-Zn-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QP2IPACH = $mol_type_enforce<
		`Cu-Rh-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WY6MXD3W = $mol_type_enforce<
		`Lu-Pu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1DQRS9V3 = $mol_type_enforce<
		`Pr-Nd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1DDXRUQX = $mol_type_enforce<
		`Rb-Na-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7J160MW9 = $mol_type_enforce<
		`Yb-Pr-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EVQAYJO4 = $mol_type_enforce<
		`Ce-Pr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ON2AFPBW = $mol_type_enforce<
		`Hf-Mg-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NAUFUB7N = $mol_type_enforce<
		`Tb-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RKXPKBY0 = $mol_type_enforce<
		`Co-Ag-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7E4F9KGY = $mol_type_enforce<
		`Li-Tb-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6XV0KX9V = $mol_type_enforce<
		`Yb-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ID5MQIYM = $mol_type_enforce<
		`Yb-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7Q0I3228 = $mol_type_enforce<
		`Yb-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NS7SKU7W = $mol_type_enforce<
		`Sc-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2211IUSP = $mol_type_enforce<
		`La-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EZQ9WCQY = $mol_type_enforce<
		`Ca-Ce-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__028HJOBY = $mol_type_enforce<
		`Ce-Ho-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LRBKZOVD = $mol_type_enforce<
		`La-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VMQ57C99 = $mol_type_enforce<
		`Pu-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VV5KJQ9A = $mol_type_enforce<
		`Yb-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7CLNF1DJ = $mol_type_enforce<
		`Er-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OBRBF0C9 = $mol_type_enforce<
		`U-Cr-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NER0BK0B = $mol_type_enforce<
		`Dy-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B2I8K7YS = $mol_type_enforce<
		`Si-Ag-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5T8V0FXN = $mol_type_enforce<
		`Tb-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3E172UXT = $mol_type_enforce<
		`Pr-Gd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KJLM0T1I = $mol_type_enforce<
		`Ce-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JI4EIGEO = $mol_type_enforce<
		`Tl-Cu-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0AI5DI4I = $mol_type_enforce<
		`Ho-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3Z5ZDWSE = $mol_type_enforce<
		`Li-Mg-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T0V4O5PG = $mol_type_enforce<
		`Y-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RJBM9B5G = $mol_type_enforce<
		`Sc-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__98W499XZ = $mol_type_enforce<
		`Cu-Bi-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IVO9PAAC = $mol_type_enforce<
		`Tl-Zn-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B09HXRBE = $mol_type_enforce<
		`Nd-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FXW88207 = $mol_type_enforce<
		`Ni-Pt-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3HPWSRT4 = $mol_type_enforce<
		`Sm-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OEUW7DVC = $mol_type_enforce<
		`Li-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N3AJC5SF = $mol_type_enforce<
		`Yb-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4AVDEBZJ = $mol_type_enforce<
		`Ce-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6K8IMNP8 = $mol_type_enforce<
		`Pr-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OT58MWUY = $mol_type_enforce<
		`Ir-Os-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__52M8VTG8 = $mol_type_enforce<
		`Er-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ETXM2AL0 = $mol_type_enforce<
		`Tb-Sm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4680G487 = $mol_type_enforce<
		`Dy-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D947G5LX = $mol_type_enforce<
		`Nb-Tl-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OZ8CME95 = $mol_type_enforce<
		`La-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3QBEBQC6 = $mol_type_enforce<
		`Ag-Pd-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZM2IAZ63 = $mol_type_enforce<
		`Hf-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JZ5JOUXV = $mol_type_enforce<
		`Re-Os-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HG6TNK0U = $mol_type_enforce<
		`La-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O67SHNIJ = $mol_type_enforce<
		`Pm-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N5JIWHTR = $mol_type_enforce<
		`Y-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XFRS5WY0 = $mol_type_enforce<
		`Pr-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZNMSNX4L = $mol_type_enforce<
		`Na-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__22AEEWZR = $mol_type_enforce<
		`Tl-V-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RQ35O22Q = $mol_type_enforce<
		`Gd-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JXVOXP99 = $mol_type_enforce<
		`Li-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NWYXVRPB = $mol_type_enforce<
		`Pr-Sm-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZSFNWTYW = $mol_type_enforce<
		`Ce-Gd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OBR3I8NM = $mol_type_enforce<
		`Mn-Fe-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9TQMAF37 = $mol_type_enforce<
		`Y-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5NT8O3B9 = $mol_type_enforce<
		`Ba-Eu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LPR33PZW = $mol_type_enforce<
		`Ce-Ho-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VPI2MPT6 = $mol_type_enforce<
		`Gd-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DGPE4WK4 = $mol_type_enforce<
		`Ce-Y-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1CYWQ1W7 = $mol_type_enforce<
		`Mn-Ni-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9XJZGM5U = $mol_type_enforce<
		`Tb-Pr-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C35YIJ9X = $mol_type_enforce<
		`Nd-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BT4ZACD5 = $mol_type_enforce<
		`Nb-Cu-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EJ5ZLPPQ = $mol_type_enforce<
		`Li-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ASTMG3XT = $mol_type_enforce<
		`Li-Sm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VAPCBRBK = $mol_type_enforce<
		`Al-Ge-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PKVWPSUT = $mol_type_enforce<
		`Tb-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GREXUMW7 = $mol_type_enforce<
		`Tb-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MM4AP4KP = $mol_type_enforce<
		`Nd-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SRF6Q63W = $mol_type_enforce<
		`Sr-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZDITNVI1 = $mol_type_enforce<
		`Er-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EX9Y83JT = $mol_type_enforce<
		`Mg-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S9A423FS = $mol_type_enforce<
		`Dy-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KZ9YNIFL = $mol_type_enforce<
		`Gd-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__15CN408K = $mol_type_enforce<
		`Na-Li-Be`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OLWA6IJI = $mol_type_enforce<
		`Sm-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PQGKG3IB = $mol_type_enforce<
		`La-Pr-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__168X62IW = $mol_type_enforce<
		`Ce-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__14PI8XG3 = $mol_type_enforce<
		`Ce-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XAWJ20TQ = $mol_type_enforce<
		`Er-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__662YDVIR = $mol_type_enforce<
		`Lu-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4S2RICVY = $mol_type_enforce<
		`Fe-Ir-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NFUA01LC = $mol_type_enforce<
		`Li-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TD9TBAOM = $mol_type_enforce<
		`Pm-Pr-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0LG2FRN2 = $mol_type_enforce<
		`Th-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WB7WJS2U = $mol_type_enforce<
		`Tl-In-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NQIHX9WZ = $mol_type_enforce<
		`Tm-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3JTQWVFC = $mol_type_enforce<
		`Tc-Ni-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LD0XC44B = $mol_type_enforce<
		`La-Yb-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FHS6PB0C = $mol_type_enforce<
		`Li-Pr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8SNP82K4 = $mol_type_enforce<
		`Sr-Nd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WLYYKIUF = $mol_type_enforce<
		`Ce-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M8PJ9WOO = $mol_type_enforce<
		`La-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__66PAZU1X = $mol_type_enforce<
		`Li-Ce-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YIFSK3TN = $mol_type_enforce<
		`Ba-La-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PV8COV1A = $mol_type_enforce<
		`La-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A29GXMPG = $mol_type_enforce<
		`Ce-Pr-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3MLTOYOI = $mol_type_enforce<
		`Cs-K-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DCL0VTFV = $mol_type_enforce<
		`Sm-Gd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__38N65WH9 = $mol_type_enforce<
		`Li-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G3OARUTE = $mol_type_enforce<
		`La-Yb-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__REFP15QN = $mol_type_enforce<
		`La-Dy-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WN15UHQJ = $mol_type_enforce<
		`Y-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1VPNT438 = $mol_type_enforce<
		`Th-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RQP1UI3U = $mol_type_enforce<
		`Ho-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H7JYK58E = $mol_type_enforce<
		`Ce-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CD1O49ZL = $mol_type_enforce<
		`Tb-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FP6KZU82 = $mol_type_enforce<
		`La-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M4ZPPQKF = $mol_type_enforce<
		`La-Pr-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6BAN0N8B = $mol_type_enforce<
		`Cs-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I0M0XL97 = $mol_type_enforce<
		`Bi-Sb-P`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J3A2UM5H = $mol_type_enforce<
		`Mn-Cu-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IXP3CURG = $mol_type_enforce<
		`Mg-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__83KP7AZW = $mol_type_enforce<
		`Er-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZRLRJ2JG = $mol_type_enforce<
		`Th-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QXMUFPK5 = $mol_type_enforce<
		`Cr-Cu-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3OQ3A211 = $mol_type_enforce<
		`Er-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SDL35YPF = $mol_type_enforce<
		`Tb-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__67NQ4MPX = $mol_type_enforce<
		`Li-La-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MHA8NDTY = $mol_type_enforce<
		`Ce-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K3I70KXH = $mol_type_enforce<
		`Tc-Ni-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__27WC0HMU = $mol_type_enforce<
		`Pr-Ho-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MEIVCCN3 = $mol_type_enforce<
		`Li-Cr-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AU07GEFR = $mol_type_enforce<
		`La-Sm-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9225XBIZ = $mol_type_enforce<
		`Fe-Cu-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2RK7YF94 = $mol_type_enforce<
		`Co-Cu-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EPDR24IA = $mol_type_enforce<
		`Nb-Tl-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K3XPSGO8 = $mol_type_enforce<
		`Co-Pt-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZBGT5U8H = $mol_type_enforce<
		`Ce-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FFZBB895 = $mol_type_enforce<
		`Re-Ir-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4MDR5BEM = $mol_type_enforce<
		`Lu-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6Z3TJO01 = $mol_type_enforce<
		`Eu-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XZ52OBI9 = $mol_type_enforce<
		`Ce-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NYRA00RF = $mol_type_enforce<
		`Ir-Pd-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UWG5LJ8Y = $mol_type_enforce<
		`Hg-Ir-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S3Z4Z5IN = $mol_type_enforce<
		`Y-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YW6OZBKS = $mol_type_enforce<
		`La-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OZ547NT5 = $mol_type_enforce<
		`Tl-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KKVQXU3J = $mol_type_enforce<
		`Co-Cu-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VBL17X39 = $mol_type_enforce<
		`Pm-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OUFY8A0V = $mol_type_enforce<
		`Ce-Pr-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E0BOE90M = $mol_type_enforce<
		`Tb-Pr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W8ZX3T8X = $mol_type_enforce<
		`Yb-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DO2X2IUQ = $mol_type_enforce<
		`Pm-Dy-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5OX3O5RG = $mol_type_enforce<
		`Co-Ru-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZVMHQWBV = $mol_type_enforce<
		`Tb-Yb-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8B57GAVD = $mol_type_enforce<
		`Gd-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U81Z1ZQW = $mol_type_enforce<
		`Dy-Ho-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RUFWQCWE = $mol_type_enforce<
		`La-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CG6JDJRO = $mol_type_enforce<
		`La-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GNE0BQKU = $mol_type_enforce<
		`U-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DTAEK7PO = $mol_type_enforce<
		`La-Pm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YNDPIB8C = $mol_type_enforce<
		`Cs-K-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3ZOWCEK1 = $mol_type_enforce<
		`Tb-Nd-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KCFAP9Z2 = $mol_type_enforce<
		`Nd-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7ZGKQ9QG = $mol_type_enforce<
		`Li-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W5W8SEL1 = $mol_type_enforce<
		`Sm-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DUWSMDIS = $mol_type_enforce<
		`La-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X5DBGUZ9 = $mol_type_enforce<
		`Gd-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U9NQNQWE = $mol_type_enforce<
		`Ce-Nd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H66TA2TL = $mol_type_enforce<
		`Tb-Yb-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1QWHO7GO = $mol_type_enforce<
		`Ce-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PYPT2ANB = $mol_type_enforce<
		`Pr-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SOSHCRHW = $mol_type_enforce<
		`La-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TWKKZAQP = $mol_type_enforce<
		`Dy-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q5QJAH19 = $mol_type_enforce<
		`Li-Pr-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C3E6VEHZ = $mol_type_enforce<
		`Ce-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BTWLI2L0 = $mol_type_enforce<
		`Dy-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EDWF3WH5 = $mol_type_enforce<
		`Er-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LSYZJQ7V = $mol_type_enforce<
		`La-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AG7L9EE9 = $mol_type_enforce<
		`Ca-Ce-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FWAQO4CG = $mol_type_enforce<
		`Eu-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3ZRG67DE = $mol_type_enforce<
		`La-Sc-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5EXXT98S = $mol_type_enforce<
		`Li-Ce-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DC73LGPJ = $mol_type_enforce<
		`La-Dy-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TLL8XPM1 = $mol_type_enforce<
		`Lu-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QE4C271X = $mol_type_enforce<
		`Gd-Y-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__940ENUMP = $mol_type_enforce<
		`Li-Ce-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OMGL3SL7 = $mol_type_enforce<
		`Cr-Cd-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__62IPKJ7V = $mol_type_enforce<
		`La-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T7BQM1HV = $mol_type_enforce<
		`Rb-Mg-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2A6BWRBU = $mol_type_enforce<
		`Tb-Gd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VT2A0PLX = $mol_type_enforce<
		`Eu-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PFKWZHYF = $mol_type_enforce<
		`Co-Ag-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W0UCVVGS = $mol_type_enforce<
		`La-Tb-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__12IUKOAX = $mol_type_enforce<
		`Rb-Mg-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z6P8LGYX = $mol_type_enforce<
		`Cu-Ir-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8DK55IAA = $mol_type_enforce<
		`Rb-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E9T8KZ3K = $mol_type_enforce<
		`Gd-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GFVI6YU0 = $mol_type_enforce<
		`Er-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BXBB70MK = $mol_type_enforce<
		`V-Cu-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FCDH2XN3 = $mol_type_enforce<
		`Dy-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6PLBRCY3 = $mol_type_enforce<
		`Sc-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__70OUURZE = $mol_type_enforce<
		`Tb-Gd-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K6Q1DWAL = $mol_type_enforce<
		`Li-Tb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GBHUX1IP = $mol_type_enforce<
		`Er-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TGJQO0Q9 = $mol_type_enforce<
		`V-Cr-Hg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T35DBY09 = $mol_type_enforce<
		`La-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O5UBEWH1 = $mol_type_enforce<
		`Ta-Cu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__COCGWJCH = $mol_type_enforce<
		`Ta-Nb-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HVJIZUOM = $mol_type_enforce<
		`Nd-Sm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9XX1UUFH = $mol_type_enforce<
		`V-Fe-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ASHLYGEG = $mol_type_enforce<
		`Yb-Eu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KDTOKMW4 = $mol_type_enforce<
		`La-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5R8HWWGB = $mol_type_enforce<
		`Pd-Au-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1LRZZUBF = $mol_type_enforce<
		`Sc-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PDZQBRLH = $mol_type_enforce<
		`Mn-Co-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WCOZXQJE = $mol_type_enforce<
		`Yb-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SN81AD4S = $mol_type_enforce<
		`Sm-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2YC3VNA8 = $mol_type_enforce<
		`Ce-Pr-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__07OA6XFT = $mol_type_enforce<
		`Ag-Ir-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F3966V8J = $mol_type_enforce<
		`Nd-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R360RGLI = $mol_type_enforce<
		`Li-Y-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LPAH9VFC = $mol_type_enforce<
		`La-Ce-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q1Z2N3DU = $mol_type_enforce<
		`Al-Si-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PDQ6JF27 = $mol_type_enforce<
		`La-Eu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0PK0D1AE = $mol_type_enforce<
		`In-Si-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SJ7XTAXB = $mol_type_enforce<
		`V-Cr-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3B5OQUF0 = $mol_type_enforce<
		`Al-Sn-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KTV1R3GT = $mol_type_enforce<
		`Ba-Mn-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__08DU5NZL = $mol_type_enforce<
		`Th-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MCFTOIMU = $mol_type_enforce<
		`Cs-Li-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0LU6FXW1 = $mol_type_enforce<
		`Ca-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L7TAP4KP = $mol_type_enforce<
		`Al-Si-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CPMQW1XR = $mol_type_enforce<
		`Li-Mg-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XGY94ZVD = $mol_type_enforce<
		`Yb-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3F86246H = $mol_type_enforce<
		`Mn-Tl-Cd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GHNBURKI = $mol_type_enforce<
		`Fe-Ir-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FCPGB2TK = $mol_type_enforce<
		`Tb-Nd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZATWDX8M = $mol_type_enforce<
		`Nd-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WGBPNUP1 = $mol_type_enforce<
		`Ba-Sr-Ca`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E78QZR6P = $mol_type_enforce<
		`La-Eu-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O1BJAMSP = $mol_type_enforce<
		`Sm-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__314FOHDJ = $mol_type_enforce<
		`Y-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HF19PISM = $mol_type_enforce<
		`Tc-Ir-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XLQE79KK = $mol_type_enforce<
		`Cs-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AVO532BO = $mol_type_enforce<
		`Gd-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BM77VTP2 = $mol_type_enforce<
		`Dy-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ORT3X3I6 = $mol_type_enforce<
		`La-Pm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0FBV6MJV = $mol_type_enforce<
		`Yb-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RTDFMMI6 = $mol_type_enforce<
		`Ce-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NUW6JVRG = $mol_type_enforce<
		`Ir-Os-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FO18J3M9 = $mol_type_enforce<
		`Ce-Sm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RSDWW95X = $mol_type_enforce<
		`Tb-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HZRNTSWW = $mol_type_enforce<
		`Pm-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CJEVTKJ7 = $mol_type_enforce<
		`Pr-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZJDMVHV1 = $mol_type_enforce<
		`Tb-Ce-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ICS6IK4Y = $mol_type_enforce<
		`Hg-Bi-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__38OSNDRM = $mol_type_enforce<
		`Tb-Ce-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__00R90UC3 = $mol_type_enforce<
		`Pr-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F0LVPXAN = $mol_type_enforce<
		`Cu-Ni-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4ELM4F07 = $mol_type_enforce<
		`Fe-Co-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6N7XY2S0 = $mol_type_enforce<
		`Pr-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RO78RLUS = $mol_type_enforce<
		`Zn-Sn-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DDWA55PQ = $mol_type_enforce<
		`Yb-Eu-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KOSLHS9J = $mol_type_enforce<
		`Cd-Fe-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DHAVW91K = $mol_type_enforce<
		`La-Gd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ER9DAB9S = $mol_type_enforce<
		`Ga-Bi-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YOXUYO7H = $mol_type_enforce<
		`Sm-Gd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1R0W8MDC = $mol_type_enforce<
		`Co-Pt-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7Z451AQ4 = $mol_type_enforce<
		`Ce-Er-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CQQ30LWZ = $mol_type_enforce<
		`Tb-Ce-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TF0B4F49 = $mol_type_enforce<
		`Sr-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O8H9CXG5 = $mol_type_enforce<
		`Cr-Fe-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NJEA187N = $mol_type_enforce<
		`Yb-Hf-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8XV4PX2M = $mol_type_enforce<
		`Eu-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3HY2SSJH = $mol_type_enforce<
		`Zn-Ge-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4HCVPEE0 = $mol_type_enforce<
		`Ca-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7M12LFQX = $mol_type_enforce<
		`Nd-Sm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QG6XD3HH = $mol_type_enforce<
		`Ce-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AON36XLP = $mol_type_enforce<
		`Na-Ca-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T4WRNZJ0 = $mol_type_enforce<
		`Tl-Cd-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P4TXNRYT = $mol_type_enforce<
		`Nd-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0H6GES8O = $mol_type_enforce<
		`Li-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5AX6LAU0 = $mol_type_enforce<
		`Pr-Dy-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B89HELE1 = $mol_type_enforce<
		`Pr-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FZXF2LSM = $mol_type_enforce<
		`Co-Cu-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZP6GJAX8 = $mol_type_enforce<
		`Tb-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__79SYU4ST = $mol_type_enforce<
		`Li-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V1YTDN2W = $mol_type_enforce<
		`Pm-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KA9GQU88 = $mol_type_enforce<
		`La-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GUJA8IO6 = $mol_type_enforce<
		`Pr-Sm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BAPIUAN7 = $mol_type_enforce<
		`Pr-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q0ER3NAP = $mol_type_enforce<
		`Yb-Gd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DSAZYZZO = $mol_type_enforce<
		`Gd-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HRISC3B7 = $mol_type_enforce<
		`Ho-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2ZO56XCV = $mol_type_enforce<
		`Yb-Dy-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EIFBGBZ5 = $mol_type_enforce<
		`Li-Mg-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZRRN9YCD = $mol_type_enforce<
		`Yb-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MYDKDTQG = $mol_type_enforce<
		`Lu-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q87DJVQU = $mol_type_enforce<
		`Ca-Nd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D85QGZ6U = $mol_type_enforce<
		`Tb-Ce-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q2C79PWF = $mol_type_enforce<
		`Dy-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F7BDJAV6 = $mol_type_enforce<
		`Sr-Ca-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QNXZNQTQ = $mol_type_enforce<
		`Tb-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3TE2DWK7 = $mol_type_enforce<
		`Pr-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G4T1QWVN = $mol_type_enforce<
		`Yb-Pr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ROPG90JT = $mol_type_enforce<
		`Cd-Ga-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M1N4X8NX = $mol_type_enforce<
		`Tb-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__02KPFLS8 = $mol_type_enforce<
		`La-Ce-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JPPV10S1 = $mol_type_enforce<
		`Sm-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OTY55N77 = $mol_type_enforce<
		`Li-Sm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D2U7WYP8 = $mol_type_enforce<
		`Ba-Yb-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VSV0ADZY = $mol_type_enforce<
		`Gd-Ho-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CZ0BM8J0 = $mol_type_enforce<
		`Eu-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EPNQ9UDL = $mol_type_enforce<
		`La-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S7DMB9Y0 = $mol_type_enforce<
		`Pm-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2MSFHVF9 = $mol_type_enforce<
		`Ce-Pr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VPFPIL36 = $mol_type_enforce<
		`U-V-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QY9ZQPM2 = $mol_type_enforce<
		`Cs-Li-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G8OAVDVD = $mol_type_enforce<
		`Yb-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D4JF1D4P = $mol_type_enforce<
		`La-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CQGYG8TG = $mol_type_enforce<
		`Tb-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5C22YO7W = $mol_type_enforce<
		`Eu-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F2I90HPR = $mol_type_enforce<
		`Cs-Rb-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SZIVG6VR = $mol_type_enforce<
		`Pm-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F4HYVD28 = $mol_type_enforce<
		`Sr-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FZUGP2LD = $mol_type_enforce<
		`Cu-Ru-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3PB5V30F = $mol_type_enforce<
		`La-Sm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5QV1TUTE = $mol_type_enforce<
		`La-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I9992KGU = $mol_type_enforce<
		`Pr-Gd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__46W6PGR1 = $mol_type_enforce<
		`Er-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4TGAOTIA = $mol_type_enforce<
		`Ho-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6QYV6062 = $mol_type_enforce<
		`Yb-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__64LRAKF7 = $mol_type_enforce<
		`Y-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4WLCREQZ = $mol_type_enforce<
		`Cr-Ag-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I6YQABR2 = $mol_type_enforce<
		`Sm-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J0PRP3NL = $mol_type_enforce<
		`Li-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UV7GGEY9 = $mol_type_enforce<
		`Gd-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZEH7VE2V = $mol_type_enforce<
		`Sc-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N7A5UXHG = $mol_type_enforce<
		`Rb-Mg-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E9XK2PDU = $mol_type_enforce<
		`Th-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KKC98PAL = $mol_type_enforce<
		`K-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1QK18JOO = $mol_type_enforce<
		`Ho-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SXXZ3R07 = $mol_type_enforce<
		`Ba-Nd-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BP04B1YO = $mol_type_enforce<
		`Rb-Na-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LJT815NQ = $mol_type_enforce<
		`Ce-Sm-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SFPML73R = $mol_type_enforce<
		`Pr-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NWMH70X6 = $mol_type_enforce<
		`Ba-Pr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AXIJG51Y = $mol_type_enforce<
		`Li-Nd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MEDHZWKX = $mol_type_enforce<
		`Re-Os-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7ZBSKSXW = $mol_type_enforce<
		`Eu-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PO0DGRCD = $mol_type_enforce<
		`Nd-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YPI0IVNH = $mol_type_enforce<
		`Cs-Rb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0GVJBJDB = $mol_type_enforce<
		`Tb-Pm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0TOMDLE5 = $mol_type_enforce<
		`Cs-K-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8J743203 = $mol_type_enforce<
		`Na-Sr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__03NBKS5E = $mol_type_enforce<
		`La-Ce-Eu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9FLBOVJV = $mol_type_enforce<
		`La-Gd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TAWPPEBY = $mol_type_enforce<
		`Tb-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D7Y92LNG = $mol_type_enforce<
		`Th-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5A76YDEU = $mol_type_enforce<
		`Li-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZCT5SX4A = $mol_type_enforce<
		`Lu-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XHX1RGIT = $mol_type_enforce<
		`Tb-Nd-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7SJDHWL8 = $mol_type_enforce<
		`Nb-Bi-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PTM8J9QU = $mol_type_enforce<
		`Cd-Si-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7K2SUFXL = $mol_type_enforce<
		`Sm-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZT58OEVY = $mol_type_enforce<
		`Be-In-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8X1ANPAT = $mol_type_enforce<
		`Sr-Ca-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3JS8R7HB = $mol_type_enforce<
		`Pd-Pt-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G5V0ZNBC = $mol_type_enforce<
		`Pm-Pr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZXKCYGRZ = $mol_type_enforce<
		`La-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4XWHZCA6 = $mol_type_enforce<
		`Ce-Gd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4YE65UXB = $mol_type_enforce<
		`La-Ce-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OITFRXRK = $mol_type_enforce<
		`La-Th-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QPOQD2QJ = $mol_type_enforce<
		`K-Li-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CH8ZXUEY = $mol_type_enforce<
		`Ho-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BZSJI1QE = $mol_type_enforce<
		`Nd-Gd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KYZZBNCU = $mol_type_enforce<
		`Ce-Sm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5A3SA2YR = $mol_type_enforce<
		`Nd-Dy-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YME3Q6Z0 = $mol_type_enforce<
		`Tb-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MVSU27T2 = $mol_type_enforce<
		`Er-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U1NYLOFW = $mol_type_enforce<
		`Sm-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P7UKZDNO = $mol_type_enforce<
		`Pm-Sm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__764KKS0S = $mol_type_enforce<
		`Sc-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5PQ1N6JF = $mol_type_enforce<
		`Cs-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GJP1TZLA = $mol_type_enforce<
		`Yb-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HSIKVZBX = $mol_type_enforce<
		`Pr-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SUL5VYZI = $mol_type_enforce<
		`Zn-Ga-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8QP3B8IE = $mol_type_enforce<
		`Yb-Nd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9WLQEDTG = $mol_type_enforce<
		`Er-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BU899L33 = $mol_type_enforce<
		`Pm-Sm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P8KVMFIC = $mol_type_enforce<
		`Mn-Cd-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XEU4113Z = $mol_type_enforce<
		`Ba-La-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IS21S6T7 = $mol_type_enforce<
		`La-Tb-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4Z9HW6KV = $mol_type_enforce<
		`Yb-Nd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__06HI0FG5 = $mol_type_enforce<
		`Pr-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CGEYK2P1 = $mol_type_enforce<
		`Er-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AH5K420X = $mol_type_enforce<
		`Co-Re-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7WDNBGNU = $mol_type_enforce<
		`Co-Ni-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HMTQJZGP = $mol_type_enforce<
		`La-Ce-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9W719HBP = $mol_type_enforce<
		`Sm-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ETCQVSKW = $mol_type_enforce<
		`Pm-Sm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N2LBLX9M = $mol_type_enforce<
		`Yb-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X4TL7MRO = $mol_type_enforce<
		`Hf-Mg-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EC9CV4ZU = $mol_type_enforce<
		`Pr-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HD8NIUQG = $mol_type_enforce<
		`Pm-Pr-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OTFYB224 = $mol_type_enforce<
		`Pm-Sm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KWA5I8GB = $mol_type_enforce<
		`K-Mg-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__18ZHZPFD = $mol_type_enforce<
		`V-In-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FERJWL92 = $mol_type_enforce<
		`Yb-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XS9YZE7S = $mol_type_enforce<
		`Li-Tb-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SCDMDR0O = $mol_type_enforce<
		`Y-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DT8UWS2L = $mol_type_enforce<
		`Th-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GUIZR130 = $mol_type_enforce<
		`Ba-Eu-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__51KFUF95 = $mol_type_enforce<
		`Ce-Sm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YHSNW7PN = $mol_type_enforce<
		`Pr-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4GZ0NLT3 = $mol_type_enforce<
		`Ba-Ca-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V8KFGBJ7 = $mol_type_enforce<
		`Ge-Bi-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H0U4CFEX = $mol_type_enforce<
		`Ce-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TJ5N4YS4 = $mol_type_enforce<
		`Rb-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__64IRUCF2 = $mol_type_enforce<
		`Yb-Pr-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XLOBU37O = $mol_type_enforce<
		`Si-Ge-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2TETEE5W = $mol_type_enforce<
		`Li-Er-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__70CE7TX5 = $mol_type_enforce<
		`Ba-La-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OWX96B6S = $mol_type_enforce<
		`Er-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4P9WRDX3 = $mol_type_enforce<
		`Ce-Pr-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V0ZME8DP = $mol_type_enforce<
		`Y-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PP8MPHD8 = $mol_type_enforce<
		`Na-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XB38NDBS = $mol_type_enforce<
		`Yb-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7GNTLHZZ = $mol_type_enforce<
		`Tb-Pm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KA0LJKSI = $mol_type_enforce<
		`Sm-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NU6F17BG = $mol_type_enforce<
		`Pr-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NWGKGZJ9 = $mol_type_enforce<
		`Ba-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P4O74HJ9 = $mol_type_enforce<
		`Ag-Bi-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z0EXYNC5 = $mol_type_enforce<
		`Nb-Cu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6BPQC588 = $mol_type_enforce<
		`Tb-Ho-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4BXZI869 = $mol_type_enforce<
		`Pm-Sm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D4X765D9 = $mol_type_enforce<
		`Zn-Ge-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2ZLGY085 = $mol_type_enforce<
		`Tb-Pr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JX9N06EX = $mol_type_enforce<
		`Ca-Ce-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__15KQVWSU = $mol_type_enforce<
		`Tm-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5K2WL90U = $mol_type_enforce<
		`Tc-Ni-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MN0S3ARH = $mol_type_enforce<
		`Eu-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HYD0SPQX = $mol_type_enforce<
		`La-Tb-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G4M6U7QG = $mol_type_enforce<
		`Yb-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UV0S6GOW = $mol_type_enforce<
		`Yb-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y74MNA1F = $mol_type_enforce<
		`Ce-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EVLJR152 = $mol_type_enforce<
		`Tb-Nd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MGCQLIX5 = $mol_type_enforce<
		`Cu-Ir-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PQFFFQXE = $mol_type_enforce<
		`Ba-La-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7ENTEROB = $mol_type_enforce<
		`La-Gd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BMOUZ3Q2 = $mol_type_enforce<
		`Ga-Sn-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N5P973QV = $mol_type_enforce<
		`Tb-Ho-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EREMHUGQ = $mol_type_enforce<
		`Er-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QE4ZJDI8 = $mol_type_enforce<
		`Pr-Y-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__24F49ZG2 = $mol_type_enforce<
		`Dy-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BO5747HJ = $mol_type_enforce<
		`Lu-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TE6C9XWW = $mol_type_enforce<
		`Pr-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YY6CLWSZ = $mol_type_enforce<
		`La-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y4Z6SW42 = $mol_type_enforce<
		`Tb-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PYQAGM7G = $mol_type_enforce<
		`Lu-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9JWSPMRD = $mol_type_enforce<
		`Cs-Rb-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7242SVDY = $mol_type_enforce<
		`Fe-Co-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9GLPIB6J = $mol_type_enforce<
		`K-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7J2WASPM = $mol_type_enforce<
		`Tb-Yb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N71XZIDG = $mol_type_enforce<
		`Fe-Au-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FK5U7DJ7 = $mol_type_enforce<
		`Dy-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KXAQ6VHD = $mol_type_enforce<
		`Y-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EO8IUPEH = $mol_type_enforce<
		`Tb-Pr-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MZ3ENUVQ = $mol_type_enforce<
		`Sc-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R8HYTXTR = $mol_type_enforce<
		`Gd-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7N0PVCAK = $mol_type_enforce<
		`Li-Y-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TTGNQLUY = $mol_type_enforce<
		`Mn-V-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XUCHPGIZ = $mol_type_enforce<
		`Yb-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OYO0X9O9 = $mol_type_enforce<
		`Sm-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NGDGMJYW = $mol_type_enforce<
		`La-Nd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FOY1OWCV = $mol_type_enforce<
		`Ga-Si-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ILKY08ZE = $mol_type_enforce<
		`Ba-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__38WH9YQ1 = $mol_type_enforce<
		`Nd-Y-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5LVVFXTA = $mol_type_enforce<
		`Gd-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BOX6JUDO = $mol_type_enforce<
		`Eu-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ALH125CG = $mol_type_enforce<
		`Er-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JNZO7ENO = $mol_type_enforce<
		`Be-Ga-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XH6QOXVQ = $mol_type_enforce<
		`K-Li-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4ZXB21J8 = $mol_type_enforce<
		`Tl-V-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M3EF4ETH = $mol_type_enforce<
		`Co-Os-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__88UQ0SYO = $mol_type_enforce<
		`V-Hg-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WDPUM4PX = $mol_type_enforce<
		`Fe-Co-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I44P3Y4R = $mol_type_enforce<
		`La-Tb-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MN8Q0OB1 = $mol_type_enforce<
		`Pr-Dy-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1P1CUTTU = $mol_type_enforce<
		`Ta-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YUMPLM9T = $mol_type_enforce<
		`Li-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CUAPA0XA = $mol_type_enforce<
		`Zn-In-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UG73FL9Y = $mol_type_enforce<
		`Tb-Ce-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HSRB7O1F = $mol_type_enforce<
		`Ca-Yb-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VTYR55YD = $mol_type_enforce<
		`La-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3ST7HJA0 = $mol_type_enforce<
		`Yb-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IJ8X13S2 = $mol_type_enforce<
		`La-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ADL28R5P = $mol_type_enforce<
		`Li-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DEKLI7VN = $mol_type_enforce<
		`Yb-Pr-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NES41Z8J = $mol_type_enforce<
		`Li-Pr-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2NYU9H0I = $mol_type_enforce<
		`Ho-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PADCPY57 = $mol_type_enforce<
		`Pr-Sm-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y5A8JMX6 = $mol_type_enforce<
		`Tb-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8Y71GLX4 = $mol_type_enforce<
		`Yb-Eu-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WIYR2DVO = $mol_type_enforce<
		`Nd-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HB6K8AOA = $mol_type_enforce<
		`Ga-Hg-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L9DALW8U = $mol_type_enforce<
		`Pm-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YNU9MHR8 = $mol_type_enforce<
		`Ba-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PK9WCW5X = $mol_type_enforce<
		`Ni-Ru-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TJI19HBM = $mol_type_enforce<
		`Y-Er-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K02ZQYBN = $mol_type_enforce<
		`Ca-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5A36COPG = $mol_type_enforce<
		`Al-Zn-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F3CPDV2U = $mol_type_enforce<
		`Th-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3H3EIS79 = $mol_type_enforce<
		`Fe-Ni-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RJX6GH13 = $mol_type_enforce<
		`Tb-Sm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__10E5KHMF = $mol_type_enforce<
		`Li-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CI1E5MP4 = $mol_type_enforce<
		`Pm-Dy-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FBV9X6V8 = $mol_type_enforce<
		`Fe-Co-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ITL1KYMO = $mol_type_enforce<
		`Gd-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VSEW13AM = $mol_type_enforce<
		`Dy-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OXZKZDUM = $mol_type_enforce<
		`La-Ce-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8MDVL2K7 = $mol_type_enforce<
		`Yb-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AFU5Q6SJ = $mol_type_enforce<
		`Tb-Ho-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AQA1OJ2H = $mol_type_enforce<
		`Tb-Y-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BW5VITWV = $mol_type_enforce<
		`Tc-Ir-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1D3ML2X9 = $mol_type_enforce<
		`Ce-Nd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D4YNJJVH = $mol_type_enforce<
		`Yb-Y-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TJWY9DUP = $mol_type_enforce<
		`Na-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LZPFOAO6 = $mol_type_enforce<
		`Nd-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EQJRY63H = $mol_type_enforce<
		`Ho-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0QWDWQ25 = $mol_type_enforce<
		`Ba-Ca-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__68FPPSQH = $mol_type_enforce<
		`Fe-Os-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GYQ7DR8K = $mol_type_enforce<
		`Pm-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__76UK8XEH = $mol_type_enforce<
		`Gd-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GBAVXCDX = $mol_type_enforce<
		`Tb-Dy-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M9IMKJJU = $mol_type_enforce<
		`La-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O2AA4ICM = $mol_type_enforce<
		`Sr-Mn-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VPPWG78R = $mol_type_enforce<
		`La-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3ZTSI651 = $mol_type_enforce<
		`Dy-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__08S4FKZA = $mol_type_enforce<
		`Tl-Zn-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YRGG2NAC = $mol_type_enforce<
		`Nb-Tl-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7W54WFJL = $mol_type_enforce<
		`Pu-Np-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F2DFJ3FN = $mol_type_enforce<
		`Ir-Pt-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PRHUXBNH = $mol_type_enforce<
		`Yb-Dy-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8WS12H46 = $mol_type_enforce<
		`Li-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C1OOWJV8 = $mol_type_enforce<
		`Pr-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QC1BQI3L = $mol_type_enforce<
		`Nd-Dy-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__93JZ4RPW = $mol_type_enforce<
		`Ce-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KXNBBC7C = $mol_type_enforce<
		`Be-Al-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V5DVROL5 = $mol_type_enforce<
		`Dy-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8SAVUA7F = $mol_type_enforce<
		`Al-Cd-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UQJHB2GJ = $mol_type_enforce<
		`La-Er-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TS88Y8AR = $mol_type_enforce<
		`Tb-Nd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C68QGSO0 = $mol_type_enforce<
		`Eu-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IIZHCUN8 = $mol_type_enforce<
		`Re-Os-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q7SC1P99 = $mol_type_enforce<
		`Nd-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B3TXQKZV = $mol_type_enforce<
		`Sm-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JJUUY4BJ = $mol_type_enforce<
		`Cs-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JAZJXY7R = $mol_type_enforce<
		`Tb-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BDUFCHN4 = $mol_type_enforce<
		`Mg-Mn-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KJDI83DA = $mol_type_enforce<
		`Cu-Pd-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IK3PU3UL = $mol_type_enforce<
		`Li-Er-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1HL5R2SS = $mol_type_enforce<
		`Li-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8R9IKNT4 = $mol_type_enforce<
		`Y-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OK4W34ZL = $mol_type_enforce<
		`Yb-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HM1ARVM7 = $mol_type_enforce<
		`Li-Sm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T0B9Q41W = $mol_type_enforce<
		`Dy-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A5JBIF1M = $mol_type_enforce<
		`Ca-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5TM0BXV9 = $mol_type_enforce<
		`Pr-Hf-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SEQ9PT88 = $mol_type_enforce<
		`La-Yb-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PCHFBBNO = $mol_type_enforce<
		`Eu-Mn-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZHM4FDSB = $mol_type_enforce<
		`Tb-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0941RZOL = $mol_type_enforce<
		`Yb-Nd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B8JDV4SP = $mol_type_enforce<
		`Ti-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6XOZA8D4 = $mol_type_enforce<
		`Mg-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JI7P8IR8 = $mol_type_enforce<
		`Ta-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1U2SQAUB = $mol_type_enforce<
		`Li-Nd-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O9ZF5SDW = $mol_type_enforce<
		`Tl-Ag-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ED4Z9S2L = $mol_type_enforce<
		`Tb-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YB0YPVB7 = $mol_type_enforce<
		`Gd-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8MICM1VF = $mol_type_enforce<
		`Cu-Pd-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0W6P05DG = $mol_type_enforce<
		`Li-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MXGYQEMK = $mol_type_enforce<
		`Gd-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KZGXQAP6 = $mol_type_enforce<
		`Cu-Ru-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0IHP2KO7 = $mol_type_enforce<
		`Li-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XHY8V8AO = $mol_type_enforce<
		`Yb-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VOJGDBYX = $mol_type_enforce<
		`Gd-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9321QB2M = $mol_type_enforce<
		`Pr-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UX3P5DEV = $mol_type_enforce<
		`V-Fe-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F2XKLVQS = $mol_type_enforce<
		`La-Gd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R6E48D5J = $mol_type_enforce<
		`Ta-V-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0V9DFFP8 = $mol_type_enforce<
		`Tb-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9KT5BJPU = $mol_type_enforce<
		`Cr-Mo-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YD9LOUPU = $mol_type_enforce<
		`Tb-Ce-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VFAV54ZL = $mol_type_enforce<
		`Ca-La-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1S813VMU = $mol_type_enforce<
		`Gd-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VBGKG8N5 = $mol_type_enforce<
		`Cr-Fe-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V8AFTDJQ = $mol_type_enforce<
		`Cr-Bi-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ABIX4KPF = $mol_type_enforce<
		`Ce-Pr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S9J9MUMX = $mol_type_enforce<
		`Sr-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QD4RTISF = $mol_type_enforce<
		`Ag-Ge-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X66HAAI6 = $mol_type_enforce<
		`Y-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7P3EPT76 = $mol_type_enforce<
		`Er-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__USNQYR1Y = $mol_type_enforce<
		`Sm-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S4L55M4R = $mol_type_enforce<
		`Cr-Hg-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RDJFCQT1 = $mol_type_enforce<
		`La-Pr-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G0M5Y9MZ = $mol_type_enforce<
		`Ca-Ce-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NJ3MG31S = $mol_type_enforce<
		`Th-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7VEAMIQP = $mol_type_enforce<
		`Ba-Nd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MVSK01DL = $mol_type_enforce<
		`Ce-Eu-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RRHPUJXX = $mol_type_enforce<
		`Y-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M7LY7H56 = $mol_type_enforce<
		`Cs-Li-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K17BDCZ2 = $mol_type_enforce<
		`Tb-Nd-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H7JNOV9V = $mol_type_enforce<
		`K-Rb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OOT2O07J = $mol_type_enforce<
		`Ca-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3ZVG27OX = $mol_type_enforce<
		`Tb-Dy-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HI37S4ZE = $mol_type_enforce<
		`Ce-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BLNAIXIF = $mol_type_enforce<
		`Yb-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7EVJBK7J = $mol_type_enforce<
		`Y-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GQ7T38WY = $mol_type_enforce<
		`Gd-Dy-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LQF2GAU4 = $mol_type_enforce<
		`Yb-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N4Y67AH6 = $mol_type_enforce<
		`Ce-Pr-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EWZ7KXZR = $mol_type_enforce<
		`Dy-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZAHAQKYA = $mol_type_enforce<
		`Y-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1FFHWC8A = $mol_type_enforce<
		`Hf-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NUW6XU8C = $mol_type_enforce<
		`Cu-Mo-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J9R2ID4W = $mol_type_enforce<
		`Ho-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CO4K11MC = $mol_type_enforce<
		`Na-Mg-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H3JBA3DA = $mol_type_enforce<
		`Cu-Re-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__488KKU8R = $mol_type_enforce<
		`Si-Ag-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LCRVIZ26 = $mol_type_enforce<
		`Ba-La-Eu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__59KNN1W1 = $mol_type_enforce<
		`Pm-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U99SHYU9 = $mol_type_enforce<
		`Mn-V-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7H7HH0CT = $mol_type_enforce<
		`Ca-La-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QV28KNOK = $mol_type_enforce<
		`Pr-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5UN817SG = $mol_type_enforce<
		`Nd-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XQSOLIPA = $mol_type_enforce<
		`Re-Ni-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NQ08M1NB = $mol_type_enforce<
		`Gd-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VSBM0N72 = $mol_type_enforce<
		`Ce-Hf-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VE6HBZNV = $mol_type_enforce<
		`La-Nd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__64J1YZB4 = $mol_type_enforce<
		`Yb-Ho-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0BCX72FL = $mol_type_enforce<
		`Al-Cd-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UCY16RLB = $mol_type_enforce<
		`Al-Tl-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YLYHA2M2 = $mol_type_enforce<
		`Tb-Sm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2AICN8SY = $mol_type_enforce<
		`Pm-Sm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__53U19MJS = $mol_type_enforce<
		`Ce-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V0DMF964 = $mol_type_enforce<
		`Pr-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7JQWDPY9 = $mol_type_enforce<
		`Dy-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XIQIIYTF = $mol_type_enforce<
		`Zn-Sn-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PXHKDT7J = $mol_type_enforce<
		`Rb-Mg-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P17LAXSL = $mol_type_enforce<
		`Tl-In-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CN8JHY2M = $mol_type_enforce<
		`Ca-V-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0IT19RZA = $mol_type_enforce<
		`Th-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RHIYJEDK = $mol_type_enforce<
		`Gd-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9RVNGEW6 = $mol_type_enforce<
		`La-Er-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QHLS5O0T = $mol_type_enforce<
		`Nd-Th-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BHER0VKR = $mol_type_enforce<
		`Ce-Pm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O9RSVA1E = $mol_type_enforce<
		`Tb-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WY42E5RD = $mol_type_enforce<
		`Gd-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PAIRXCX2 = $mol_type_enforce<
		`Yb-Pr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZFQQIL04 = $mol_type_enforce<
		`Yb-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EU0PM8T6 = $mol_type_enforce<
		`Rb-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GP8I80BJ = $mol_type_enforce<
		`Dy-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JUT5Z0RC = $mol_type_enforce<
		`Be-Ga-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VL71HQ6Z = $mol_type_enforce<
		`Y-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EFELFS11 = $mol_type_enforce<
		`Ba-Yb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__50FBNUUV = $mol_type_enforce<
		`Yb-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JMMQGQFS = $mol_type_enforce<
		`Tb-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UILGJCO2 = $mol_type_enforce<
		`Ho-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__640S3UW9 = $mol_type_enforce<
		`Pm-Gd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I6G34352 = $mol_type_enforce<
		`Li-Mn-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2LVCK32Z = $mol_type_enforce<
		`Ce-Eu-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ARFVB2R6 = $mol_type_enforce<
		`Be-Al-Zn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U0H9OD3M = $mol_type_enforce<
		`Zn-Ge-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MTL1ZAS2 = $mol_type_enforce<
		`Pr-Ho-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6XVZXACN = $mol_type_enforce<
		`Tb-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__05KVGXJ7 = $mol_type_enforce<
		`Li-Sm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2PFF8P4K = $mol_type_enforce<
		`Dy-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F91OUTNE = $mol_type_enforce<
		`Ba-Ca-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PDK950DX = $mol_type_enforce<
		`Ho-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LZH6S0VT = $mol_type_enforce<
		`Er-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q1CYVNPK = $mol_type_enforce<
		`Ca-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A3I3MATL = $mol_type_enforce<
		`Os-Pd-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VNAAJUS0 = $mol_type_enforce<
		`Pr-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4LMM0AS9 = $mol_type_enforce<
		`Cr-Ag-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XNAIM7E6 = $mol_type_enforce<
		`La-Ce-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EMKV1PHS = $mol_type_enforce<
		`Mn-Cu-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q5VHT9SH = $mol_type_enforce<
		`Yb-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K499JG7F = $mol_type_enforce<
		`La-Nd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CAIJBABK = $mol_type_enforce<
		`Ce-Ho-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__STT97T9C = $mol_type_enforce<
		`Re-Ag-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3L1JQ7RY = $mol_type_enforce<
		`Tl-Mo-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EKIUG91E = $mol_type_enforce<
		`Sm-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GP65YEIH = $mol_type_enforce<
		`Co-Ir-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QNURDQDK = $mol_type_enforce<
		`Pm-Gd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WO5ZGOFQ = $mol_type_enforce<
		`Ce-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y8RE3AL5 = $mol_type_enforce<
		`Ce-Sm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GAI5CQS6 = $mol_type_enforce<
		`La-Tb-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2GUWDSAU = $mol_type_enforce<
		`Yb-Gd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TV2R0FG4 = $mol_type_enforce<
		`Cu-Ni-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HSVHXJ48 = $mol_type_enforce<
		`Rb-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AK8O6O5Z = $mol_type_enforce<
		`Yb-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S52PU7R2 = $mol_type_enforce<
		`Nd-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HQGMUT8F = $mol_type_enforce<
		`Tl-Cd-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XLVOL2XI = $mol_type_enforce<
		`Tb-Sm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GBWRXZKN = $mol_type_enforce<
		`Sm-Gd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4655Z3E4 = $mol_type_enforce<
		`Tb-Yb-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__24IPXJD7 = $mol_type_enforce<
		`Li-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N7VRKR5O = $mol_type_enforce<
		`Pr-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4GEILVV4 = $mol_type_enforce<
		`Mg-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ANXJLBZH = $mol_type_enforce<
		`La-Ce-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NFZWONEA = $mol_type_enforce<
		`Th-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9BE9ZU8P = $mol_type_enforce<
		`Nd-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__039AC9HV = $mol_type_enforce<
		`Eu-Hf-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PET1E33I = $mol_type_enforce<
		`Ce-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YF379FQ3 = $mol_type_enforce<
		`Gd-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MUTWJ5T2 = $mol_type_enforce<
		`Er-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AKER2U3B = $mol_type_enforce<
		`Ca-Pm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0UJO1CSO = $mol_type_enforce<
		`Co-Cu-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DJIIUKP3 = $mol_type_enforce<
		`Yb-Eu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AD8RM952 = $mol_type_enforce<
		`Sm-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HR6YZUVY = $mol_type_enforce<
		`Y-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F9XCPQ06 = $mol_type_enforce<
		`Y-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6D7RP8HI = $mol_type_enforce<
		`V-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CE2KGE8X = $mol_type_enforce<
		`Ce-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8VT6XNKM = $mol_type_enforce<
		`Cs-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G72PIHAR = $mol_type_enforce<
		`Nd-Dy-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XHYBI3T5 = $mol_type_enforce<
		`Li-Ho-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4ZUO8RWC = $mol_type_enforce<
		`Si-Ag-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZG4DZD6K = $mol_type_enforce<
		`Yb-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7CZGPXQ9 = $mol_type_enforce<
		`Tl-Cd-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EMR1OXKC = $mol_type_enforce<
		`Tb-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QAOTS7X1 = $mol_type_enforce<
		`Ce-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YO7CRJEC = $mol_type_enforce<
		`Yb-Pr-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5KBBHKOJ = $mol_type_enforce<
		`Nd-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5NUIYQUV = $mol_type_enforce<
		`Pr-Nd-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__33B9J2GO = $mol_type_enforce<
		`Li-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__00ZAVQE1 = $mol_type_enforce<
		`Yb-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TBHTSV41 = $mol_type_enforce<
		`Tb-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NY36FMTK = $mol_type_enforce<
		`La-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ERQUA6BT = $mol_type_enforce<
		`Nd-Dy-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VOJY7GAM = $mol_type_enforce<
		`Pm-Nd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KJ6433HG = $mol_type_enforce<
		`Li-Tb-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EYOIMI20 = $mol_type_enforce<
		`Gd-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HR0ED5U8 = $mol_type_enforce<
		`Li-La-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__36KZ39YN = $mol_type_enforce<
		`Pu-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__POUD1KBA = $mol_type_enforce<
		`Na-Ca-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZTUW3GQF = $mol_type_enforce<
		`Y-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__55C8EGHI = $mol_type_enforce<
		`Ce-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2E4FNB8M = $mol_type_enforce<
		`Hf-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZG7L8BFW = $mol_type_enforce<
		`La-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3QDA05FD = $mol_type_enforce<
		`Ho-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OPJ43YAU = $mol_type_enforce<
		`Ca-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DPAB7SS4 = $mol_type_enforce<
		`Nd-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DGNCQL1I = $mol_type_enforce<
		`La-Tb-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZK617IT2 = $mol_type_enforce<
		`Yb-Gd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YCTGYLHW = $mol_type_enforce<
		`Tc-Pd-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MHHEKA0O = $mol_type_enforce<
		`Li-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z9B2P2GQ = $mol_type_enforce<
		`Li-Sm-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LU5IXW25 = $mol_type_enforce<
		`Be-Ge-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HVDNO4DH = $mol_type_enforce<
		`Ca-Tb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P2Z1OH9F = $mol_type_enforce<
		`K-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RZKB3AAO = $mol_type_enforce<
		`Pm-Gd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZF82JJME = $mol_type_enforce<
		`La-Sm-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PS83PZW0 = $mol_type_enforce<
		`Ca-Yb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5V4KOTFS = $mol_type_enforce<
		`Nd-Gd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__84A5D8A5 = $mol_type_enforce<
		`Pm-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y8UZ31YF = $mol_type_enforce<
		`Yb-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B61TSJYF = $mol_type_enforce<
		`Ce-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CV9LJTTW = $mol_type_enforce<
		`Dy-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R611DNYG = $mol_type_enforce<
		`Yb-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GXUQ7TSP = $mol_type_enforce<
		`Cu-Pd-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G2MTRIS3 = $mol_type_enforce<
		`La-Tb-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SBLUJH40 = $mol_type_enforce<
		`Tm-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CNAZWRIK = $mol_type_enforce<
		`Tb-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KH5P4JBY = $mol_type_enforce<
		`La-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MBLQINQ4 = $mol_type_enforce<
		`Sm-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UHUUJCE0 = $mol_type_enforce<
		`Li-Mn-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8BZM00MO = $mol_type_enforce<
		`Ce-Gd-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2AJRUS7O = $mol_type_enforce<
		`Sc-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3VU3FUGT = $mol_type_enforce<
		`Ta-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IQLF6P7S = $mol_type_enforce<
		`Nd-Sm-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MYXISOPH = $mol_type_enforce<
		`Nd-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__289U64SC = $mol_type_enforce<
		`La-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XBR7KFK6 = $mol_type_enforce<
		`La-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DVQNSAXJ = $mol_type_enforce<
		`Ca-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__43F1EE5J = $mol_type_enforce<
		`Re-Hg-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3E4DZN5E = $mol_type_enforce<
		`Tb-Dy-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5OJH7VRE = $mol_type_enforce<
		`La-Tb-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FUD25ZAB = $mol_type_enforce<
		`La-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G58D1BDA = $mol_type_enforce<
		`Cu-Tc-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S72WXITJ = $mol_type_enforce<
		`Li-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__28I90RIU = $mol_type_enforce<
		`Si-Ge-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FDSG0UKR = $mol_type_enforce<
		`Gd-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N2LS9VG9 = $mol_type_enforce<
		`Sm-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K90YIBF0 = $mol_type_enforce<
		`Na-Mg-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AQFPCWZ7 = $mol_type_enforce<
		`La-Ce-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AI94TLF6 = $mol_type_enforce<
		`Th-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6GZLZYJV = $mol_type_enforce<
		`Y-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KRRN0Y6B = $mol_type_enforce<
		`La-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ULLFIER7 = $mol_type_enforce<
		`Dy-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VIUODMGE = $mol_type_enforce<
		`La-Pr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6XQ1U29R = $mol_type_enforce<
		`Ca-La-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XX87J1GH = $mol_type_enforce<
		`Pr-Dy-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SQV6AVVF = $mol_type_enforce<
		`Ce-Nd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SHSUU4QM = $mol_type_enforce<
		`Lu-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XBYLEFZE = $mol_type_enforce<
		`Y-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X24HLK9I = $mol_type_enforce<
		`Li-Ce-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0523ZZPI = $mol_type_enforce<
		`La-Eu-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ODC2A3XG = $mol_type_enforce<
		`Nd-Sm-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZID9W36E = $mol_type_enforce<
		`La-Tb-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GD1OUTE9 = $mol_type_enforce<
		`Li-Ce-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G4HGB1LY = $mol_type_enforce<
		`Dy-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IFB7OOWU = $mol_type_enforce<
		`Zn-Ga-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZW9SK8V0 = $mol_type_enforce<
		`Y-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PMS0EPRD = $mol_type_enforce<
		`Li-Pm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GGOPZS66 = $mol_type_enforce<
		`Pm-Nd-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N15BV4O6 = $mol_type_enforce<
		`Pr-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7NE54I5D = $mol_type_enforce<
		`Ba-La-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X8AW5XFS = $mol_type_enforce<
		`Fe-Co-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SHFL4895 = $mol_type_enforce<
		`Pr-Nd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QLP8MCFW = $mol_type_enforce<
		`Tl-In-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M0A0A290 = $mol_type_enforce<
		`Li-Pm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BJ4TPBH2 = $mol_type_enforce<
		`Nd-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3L3BV6HZ = $mol_type_enforce<
		`Pr-Nd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D1P4YIOV = $mol_type_enforce<
		`Pr-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RSFN62CA = $mol_type_enforce<
		`Ce-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3P47VT4A = $mol_type_enforce<
		`Tb-Ce-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7E20A9K4 = $mol_type_enforce<
		`V-Cr-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KGZ1SYXX = $mol_type_enforce<
		`Fe-Rh-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FBEVDGNJ = $mol_type_enforce<
		`Cs-K-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XHDCC85D = $mol_type_enforce<
		`Er-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z21WOB98 = $mol_type_enforce<
		`Tb-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PIETZUEK = $mol_type_enforce<
		`K-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VI9UXNJL = $mol_type_enforce<
		`Gd-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3MQK5VBE = $mol_type_enforce<
		`La-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5QA83EUR = $mol_type_enforce<
		`Yb-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UYGUFNHO = $mol_type_enforce<
		`Ho-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4837WA3Z = $mol_type_enforce<
		`Pr-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3YN6A2OH = $mol_type_enforce<
		`Mg-V-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NGD2RB43 = $mol_type_enforce<
		`Ta-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7AXIN2JC = $mol_type_enforce<
		`Li-Mg-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S343FRYZ = $mol_type_enforce<
		`Nd-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LR7Y54XR = $mol_type_enforce<
		`Tm-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZVCRQIJ7 = $mol_type_enforce<
		`K-Hf-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YGUPAWLF = $mol_type_enforce<
		`Cs-Mg-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L6O3XS3V = $mol_type_enforce<
		`Pr-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C9RQSG0L = $mol_type_enforce<
		`Ba-Gd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QH9CI6B9 = $mol_type_enforce<
		`Sm-Er-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__83UHYRTM = $mol_type_enforce<
		`Yb-Eu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J9WHI91M = $mol_type_enforce<
		`Pr-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ETIXU97T = $mol_type_enforce<
		`La-Pm-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CQR043TP = $mol_type_enforce<
		`Li-Nd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CJACJJXZ = $mol_type_enforce<
		`Yb-Dy-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C5JUUJTG = $mol_type_enforce<
		`Li-Gd-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N69DLGPW = $mol_type_enforce<
		`Ta-Nb-Tl`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OZ5J65LH = $mol_type_enforce<
		`Fe-Cu-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6Z43OT53 = $mol_type_enforce<
		`Pm-Pr-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MGTHP5O4 = $mol_type_enforce<
		`Fe-Cu-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LNZOZ5N2 = $mol_type_enforce<
		`Dy-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EATLELCD = $mol_type_enforce<
		`Nb-Hg-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H6X7EFPH = $mol_type_enforce<
		`Er-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__40RQ0MA3 = $mol_type_enforce<
		`Sr-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4VRXL8QH = $mol_type_enforce<
		`Dy-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O40GIK54 = $mol_type_enforce<
		`Tb-Yb-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IZJODCTC = $mol_type_enforce<
		`Nd-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RAKLFTYP = $mol_type_enforce<
		`Be-Zn-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JSW97UGT = $mol_type_enforce<
		`Eu-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9DXAYPJD = $mol_type_enforce<
		`Yb-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MQFD7DRK = $mol_type_enforce<
		`Ce-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O6HSOL7L = $mol_type_enforce<
		`Gd-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9421L69Y = $mol_type_enforce<
		`Tl-Si-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1YHZ14AI = $mol_type_enforce<
		`Sm-Dy-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YZ8JSZES = $mol_type_enforce<
		`La-Ho-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H1V4EURB = $mol_type_enforce<
		`Cs-Li-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0C3KZLT8 = $mol_type_enforce<
		`Cu-Bi-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MR0YRKGW = $mol_type_enforce<
		`Yb-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9KH2PINR = $mol_type_enforce<
		`Ce-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RW2VIPQV = $mol_type_enforce<
		`Li-V-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EGEF29DH = $mol_type_enforce<
		`Gd-Er-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BF5IDS9P = $mol_type_enforce<
		`Yb-Dy-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7NGG1LEW = $mol_type_enforce<
		`Re-Ni-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IFVPZQ87 = $mol_type_enforce<
		`Ca-Nd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SD42HJV1 = $mol_type_enforce<
		`Yb-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q10C8RNX = $mol_type_enforce<
		`La-Tb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3CCCSFMQ = $mol_type_enforce<
		`Ir-Rh-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7B1M810T = $mol_type_enforce<
		`Al-Tl-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MYFEPVLC = $mol_type_enforce<
		`La-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y4IXUJHF = $mol_type_enforce<
		`Nd-Gd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OR9XU0MI = $mol_type_enforce<
		`Al-Cd-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZQCZEKCO = $mol_type_enforce<
		`Li-Ho-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AZI2PSTB = $mol_type_enforce<
		`Ho-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D6VMJ1SA = $mol_type_enforce<
		`Li-Gd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CKDFAYQ9 = $mol_type_enforce<
		`Ga-Re-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZF962PWX = $mol_type_enforce<
		`Yb-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RUBJ7892 = $mol_type_enforce<
		`Li-Pr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HRFQQF59 = $mol_type_enforce<
		`U-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9AD4Y1S7 = $mol_type_enforce<
		`Yb-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MMUXTPZD = $mol_type_enforce<
		`Ce-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9PMMZRRD = $mol_type_enforce<
		`Fe-Ir-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BJHUHHCH = $mol_type_enforce<
		`Gd-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XE7VPO8H = $mol_type_enforce<
		`Tb-Gd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O2AIHZKV = $mol_type_enforce<
		`Ca-La-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2NO2PH9B = $mol_type_enforce<
		`Ce-Nd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HPQGJQTY = $mol_type_enforce<
		`Yb-Eu-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DGMKMPWP = $mol_type_enforce<
		`Ta-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1BNAA3G2 = $mol_type_enforce<
		`Th-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__53KFM5O4 = $mol_type_enforce<
		`Ca-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D35PE5V0 = $mol_type_enforce<
		`Er-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1XTDJJWC = $mol_type_enforce<
		`Sm-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YUNLP2DB = $mol_type_enforce<
		`Ce-Pm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GO555LSA = $mol_type_enforce<
		`Pr-Sm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FEKU10XI = $mol_type_enforce<
		`Ta-Tl-In`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K3EFQDVI = $mol_type_enforce<
		`Li-Tb-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SM2RIUVB = $mol_type_enforce<
		`Ba-Pm-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WBMHFF1I = $mol_type_enforce<
		`Li-Gd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5NHVV1EC = $mol_type_enforce<
		`Hg-B-Sb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q5J15E88 = $mol_type_enforce<
		`Gd-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VKORM8FD = $mol_type_enforce<
		`Tb-Pr-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IZV0LDCK = $mol_type_enforce<
		`Ce-Gd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0A52WI72 = $mol_type_enforce<
		`Ho-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DOGK0R77 = $mol_type_enforce<
		`Y-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LJCXCYL8 = $mol_type_enforce<
		`Ir-Pt-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IAZIYE2Z = $mol_type_enforce<
		`La-Tb-Yb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WNYWC5YB = $mol_type_enforce<
		`Li-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ER40XYFM = $mol_type_enforce<
		`Tm-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M4V3TLEY = $mol_type_enforce<
		`Tb-Pr-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ET3JRN31 = $mol_type_enforce<
		`Pr-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7MQ3Q430 = $mol_type_enforce<
		`Re-Bi-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OMFIB3YO = $mol_type_enforce<
		`Co-Cu-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XZH8VJEH = $mol_type_enforce<
		`Nd-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QTBZMO8B = $mol_type_enforce<
		`La-Pm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y6D47E88 = $mol_type_enforce<
		`Ca-Eu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N8PGTJXI = $mol_type_enforce<
		`Ba-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SXAU0R8X = $mol_type_enforce<
		`Na-Nb-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__00SONA11 = $mol_type_enforce<
		`Cs-Li-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T6L39TLC = $mol_type_enforce<
		`Gd-Dy-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6PJIN6S7 = $mol_type_enforce<
		`La-Ce-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CMF3DS55 = $mol_type_enforce<
		`Cu-Re-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1023SO0X = $mol_type_enforce<
		`Li-Mg-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H1H2RI9I = $mol_type_enforce<
		`Ce-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y34OFUP3 = $mol_type_enforce<
		`Ca-La-Yb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__32Q1YZMD = $mol_type_enforce<
		`Ce-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2VRTH7IA = $mol_type_enforce<
		`Zn-Cd-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2PCFB1H3 = $mol_type_enforce<
		`Nd-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2BNLP7OV = $mol_type_enforce<
		`V-Fe-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EKK5N4H1 = $mol_type_enforce<
		`Tb-Dy-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C6RLL0UX = $mol_type_enforce<
		`Hf-Th-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PHEKP70U = $mol_type_enforce<
		`Sc-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FU6BR970 = $mol_type_enforce<
		`La-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QGGSXXVW = $mol_type_enforce<
		`Al-In-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7A7H2Q7U = $mol_type_enforce<
		`Be-Ga-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MDFS58G5 = $mol_type_enforce<
		`Os-Ru-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VUWWIKK3 = $mol_type_enforce<
		`Ag-Ge-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9Y70O8S7 = $mol_type_enforce<
		`Pm-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3HBSXXNT = $mol_type_enforce<
		`Li-La-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4MH0FQ36 = $mol_type_enforce<
		`Cs-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__65XJ0OJH = $mol_type_enforce<
		`Ce-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P617IQ4W = $mol_type_enforce<
		`Pr-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6OZNSZYP = $mol_type_enforce<
		`Li-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5I7IH0R6 = $mol_type_enforce<
		`La-Ho-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QMDMTXOS = $mol_type_enforce<
		`Nd-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SMRDYFDG = $mol_type_enforce<
		`Th-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XNIN8AA7 = $mol_type_enforce<
		`Er-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CXUWUPTI = $mol_type_enforce<
		`Gd-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7AGRYCZW = $mol_type_enforce<
		`Lu-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NRVQTLDR = $mol_type_enforce<
		`Lu-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__16PB4UPV = $mol_type_enforce<
		`Ce-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SUPPLP20 = $mol_type_enforce<
		`Ce-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3CO1JQF4 = $mol_type_enforce<
		`Li-Ce-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XMYOCAEK = $mol_type_enforce<
		`Ce-Th-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9TF95NUG = $mol_type_enforce<
		`Li-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CXAD42A8 = $mol_type_enforce<
		`Yb-Ho-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UPNJPW8U = $mol_type_enforce<
		`Li-Pm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TIEX0V3X = $mol_type_enforce<
		`Ce-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BXNRX643 = $mol_type_enforce<
		`Cs-K-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UCZGIFG8 = $mol_type_enforce<
		`Tb-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AP9JBBJS = $mol_type_enforce<
		`Ce-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ICR9O1J2 = $mol_type_enforce<
		`Ho-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D7E17EZI = $mol_type_enforce<
		`Y-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8E9WTMVP = $mol_type_enforce<
		`Gd-Dy-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0QAKB7QS = $mol_type_enforce<
		`Gd-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0L0MRN1O = $mol_type_enforce<
		`Li-Cr-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N5AIKQLO = $mol_type_enforce<
		`Co-Bi-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XNA8FIQ7 = $mol_type_enforce<
		`Gd-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JD8AIH61 = $mol_type_enforce<
		`Co-Ru-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1LQE9XM8 = $mol_type_enforce<
		`Gd-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H9CRN8YU = $mol_type_enforce<
		`Li-La-Ce`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QCUWJ52B = $mol_type_enforce<
		`Be-Al-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BPOFOZWQ = $mol_type_enforce<
		`Gd-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__80322C8Y = $mol_type_enforce<
		`Pr-Dy-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JZVG1EFA = $mol_type_enforce<
		`Yb-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9ECOKIFJ = $mol_type_enforce<
		`La-Gd-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XV4RAC55 = $mol_type_enforce<
		`Tl-Cu-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0Y5OO5CX = $mol_type_enforce<
		`Cr-Ag-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9WAI50LH = $mol_type_enforce<
		`Tb-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1JYE1TNU = $mol_type_enforce<
		`Nd-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XCJ8ZB8P = $mol_type_enforce<
		`Eu-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NL1E45AP = $mol_type_enforce<
		`Ga-Ge-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XAPCICNJ = $mol_type_enforce<
		`Li-Pm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3WRSU0PC = $mol_type_enforce<
		`Li-Nd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DDG3OCP1 = $mol_type_enforce<
		`Ba-Pr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QDEFD5QC = $mol_type_enforce<
		`Li-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4CJWFLNA = $mol_type_enforce<
		`Pr-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0H2X3IQ9 = $mol_type_enforce<
		`Ce-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DP1G6SAB = $mol_type_enforce<
		`Dy-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ONP2QCAW = $mol_type_enforce<
		`Ca-Eu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UTKOIGSW = $mol_type_enforce<
		`Ni-Pd-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5JXXBQXD = $mol_type_enforce<
		`Er-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6JTL9SY8 = $mol_type_enforce<
		`Ba-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3LI5WVQX = $mol_type_enforce<
		`Pr-Nd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__99XO0K3B = $mol_type_enforce<
		`Ce-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CZOITQII = $mol_type_enforce<
		`Na-Mg-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NFQM9IAY = $mol_type_enforce<
		`Cu-Ag-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E5Y3XFBI = $mol_type_enforce<
		`La-Ce-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MPLZLP47 = $mol_type_enforce<
		`La-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7R4LLJ6J = $mol_type_enforce<
		`Tc-Ni-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GRH7KS9B = $mol_type_enforce<
		`Ti-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZYV8VDNE = $mol_type_enforce<
		`Tb-Ce-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QTZTGQ22 = $mol_type_enforce<
		`Hf-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P58Q7IWS = $mol_type_enforce<
		`Lu-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MWLXW3OF = $mol_type_enforce<
		`Ta-V-In`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8923UOFH = $mol_type_enforce<
		`Co-Ir-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5JEW1D3T = $mol_type_enforce<
		`Na-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UWB31P1X = $mol_type_enforce<
		`Yb-Hf-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CH4D0RYT = $mol_type_enforce<
		`Mn-Cu-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FKLB7VRQ = $mol_type_enforce<
		`Ce-Nd-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UBN3UYUW = $mol_type_enforce<
		`Pr-Gd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7KJMHW2T = $mol_type_enforce<
		`Ca-Pm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SZ3XKS02 = $mol_type_enforce<
		`Nd-Gd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ORO5U97F = $mol_type_enforce<
		`Yb-Eu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KQSZT8TM = $mol_type_enforce<
		`Al-Hg-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4LOSLEAG = $mol_type_enforce<
		`V-Cr-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3YKRCFAN = $mol_type_enforce<
		`Ce-Nd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DKP87WTW = $mol_type_enforce<
		`Ho-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1Q7G7UDR = $mol_type_enforce<
		`Tb-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I5716H8D = $mol_type_enforce<
		`Ca-Tb-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T5I1XR9B = $mol_type_enforce<
		`Nd-Ho-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HNCDQNZI = $mol_type_enforce<
		`Pu-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q039INNS = $mol_type_enforce<
		`V-Cu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3FQOUKD1 = $mol_type_enforce<
		`Tb-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UJ666NTO = $mol_type_enforce<
		`V-Cu-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PYAUZNQ9 = $mol_type_enforce<
		`Fe-Ni-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4YE3EU0O = $mol_type_enforce<
		`Lu-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__35ZPC2L1 = $mol_type_enforce<
		`Fe-Ni-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__290EUGOX = $mol_type_enforce<
		`Ca-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HQBV5PO2 = $mol_type_enforce<
		`Ca-Ce-Eu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CZ1EBMXH = $mol_type_enforce<
		`Rb-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JE4PT8GE = $mol_type_enforce<
		`Nd-Sm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NTAN8BHI = $mol_type_enforce<
		`Co-Re-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y27CJI8R = $mol_type_enforce<
		`Gd-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L360999R = $mol_type_enforce<
		`Eu-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1TGACV7Q = $mol_type_enforce<
		`Pu-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E26COSB5 = $mol_type_enforce<
		`Pm-Sm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P64Y3LTZ = $mol_type_enforce<
		`La-Ce-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0ZPVS155 = $mol_type_enforce<
		`Ga-Sn-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NXQK1UH8 = $mol_type_enforce<
		`Ba-Sr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y44YH85X = $mol_type_enforce<
		`Co-Re-Hg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JV39MVP9 = $mol_type_enforce<
		`La-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6S8I9PDP = $mol_type_enforce<
		`Cs-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BEZ94HKY = $mol_type_enforce<
		`La-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C7PWE6LJ = $mol_type_enforce<
		`Ce-Sm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U3YNF7XA = $mol_type_enforce<
		`Co-Ni-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F8BHH7VV = $mol_type_enforce<
		`Mg-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OJ5QYE3D = $mol_type_enforce<
		`Sc-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4NICFIKP = $mol_type_enforce<
		`Sm-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PRY18XFX = $mol_type_enforce<
		`Ce-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JH726ICL = $mol_type_enforce<
		`Li-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VKEAVL3J = $mol_type_enforce<
		`Tb-Dy-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NDO2G87A = $mol_type_enforce<
		`Cs-Rb-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L6BGV5ZA = $mol_type_enforce<
		`Cs-Rb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K1QNJC15 = $mol_type_enforce<
		`Ce-Gd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DV20DOAL = $mol_type_enforce<
		`Mg-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I18J3C2D = $mol_type_enforce<
		`K-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5BZ6DGU8 = $mol_type_enforce<
		`Rb-Na-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1K7QPH6V = $mol_type_enforce<
		`Ba-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__49CFZK6C = $mol_type_enforce<
		`Ca-Tb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SGRE3H17 = $mol_type_enforce<
		`Pr-Er-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2T4CKF89 = $mol_type_enforce<
		`Si-Ge-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0UVFPAZF = $mol_type_enforce<
		`Y-Er-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U5YWJMK4 = $mol_type_enforce<
		`Zn-Si-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MZO5RC7Q = $mol_type_enforce<
		`Li-Pm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A3NGB2IX = $mol_type_enforce<
		`Yb-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CD2TBN7G = $mol_type_enforce<
		`La-Dy-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WDOIAUGG = $mol_type_enforce<
		`La-Pm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H8MWRDPF = $mol_type_enforce<
		`Hf-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RID7BL2B = $mol_type_enforce<
		`K-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2HAK1Y91 = $mol_type_enforce<
		`Lu-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5SEMFGLI = $mol_type_enforce<
		`Li-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1T54NTBM = $mol_type_enforce<
		`Cd-Ga-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ATWUTTMO = $mol_type_enforce<
		`Cd-Ga-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__13MEDDLS = $mol_type_enforce<
		`Gd-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ATZCGBY4 = $mol_type_enforce<
		`Cu-W-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VTTY0YFV = $mol_type_enforce<
		`Yb-Nd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UPEP3J2T = $mol_type_enforce<
		`Er-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0IHW3139 = $mol_type_enforce<
		`Tb-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S2LY26EC = $mol_type_enforce<
		`Er-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ME5EUDZ5 = $mol_type_enforce<
		`Tc-Pt-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CTJONQ0X = $mol_type_enforce<
		`Dy-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CNA5F6W7 = $mol_type_enforce<
		`Cu-Pd-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XEBQ26V4 = $mol_type_enforce<
		`Y-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A0GZI2XX = $mol_type_enforce<
		`La-Yb-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__24KT9KB6 = $mol_type_enforce<
		`Lu-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DFNDS6D7 = $mol_type_enforce<
		`Cr-Cu-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6UCOKPE4 = $mol_type_enforce<
		`Y-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A0D7E11P = $mol_type_enforce<
		`Li-La-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4FI5FL9M = $mol_type_enforce<
		`Tb-Sm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SI6SQ1NG = $mol_type_enforce<
		`Tb-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P12GLGCH = $mol_type_enforce<
		`Ce-Er-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZGXXND9R = $mol_type_enforce<
		`Gd-Dy-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BUXKOGNR = $mol_type_enforce<
		`Ca-Ce-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XO1Z5F3J = $mol_type_enforce<
		`Ta-Tl-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GZ8JTDHW = $mol_type_enforce<
		`Pr-Nd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__15NGT40A = $mol_type_enforce<
		`Li-Pr-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E621DOL9 = $mol_type_enforce<
		`La-Pr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U0GNOROU = $mol_type_enforce<
		`Tm-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N62CLDCE = $mol_type_enforce<
		`Ce-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C8IPCLSN = $mol_type_enforce<
		`Ba-Yb-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DR0QWEE8 = $mol_type_enforce<
		`Na-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WH7EMGJY = $mol_type_enforce<
		`Er-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KZI2JWCU = $mol_type_enforce<
		`Er-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SAKSMOET = $mol_type_enforce<
		`Cd-Ge-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4JCVOJMK = $mol_type_enforce<
		`Ba-Eu-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H16M7YFG = $mol_type_enforce<
		`Re-Ag-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VNIHLPXP = $mol_type_enforce<
		`Pr-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RNX68LWE = $mol_type_enforce<
		`Lu-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P76TKYO9 = $mol_type_enforce<
		`Fe-Co-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6XN5D5T2 = $mol_type_enforce<
		`Li-Mn-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7ORTWP7T = $mol_type_enforce<
		`Nd-Ho-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O3VYCMLO = $mol_type_enforce<
		`La-Pm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NT0URYZV = $mol_type_enforce<
		`Mg-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J6J8HC77 = $mol_type_enforce<
		`Ce-Pm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XVYCT0BX = $mol_type_enforce<
		`Pd-Ru-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HYQHK2W8 = $mol_type_enforce<
		`Gd-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3K6GA3TV = $mol_type_enforce<
		`Nd-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8V4SR81B = $mol_type_enforce<
		`Pr-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HA6QJH8D = $mol_type_enforce<
		`Sc-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3V28Y1AL = $mol_type_enforce<
		`Co-Cu-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3JEVC5JB = $mol_type_enforce<
		`Eu-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V6C14EZG = $mol_type_enforce<
		`Y-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UP2LC7MV = $mol_type_enforce<
		`Tb-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5JCCES7Z = $mol_type_enforce<
		`La-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KDF4CHFA = $mol_type_enforce<
		`Th-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__33VAUKF2 = $mol_type_enforce<
		`Li-Nd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5SNGXH79 = $mol_type_enforce<
		`Pm-Gd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1S2ILEIW = $mol_type_enforce<
		`Tl-Cu-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6ODT6QVG = $mol_type_enforce<
		`Pr-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KB9ONNKK = $mol_type_enforce<
		`Ca-Tb-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XZIFAX7E = $mol_type_enforce<
		`Co-Pd-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W4HJRWFL = $mol_type_enforce<
		`Li-Pm-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RJQPMHQG = $mol_type_enforce<
		`Cu-Os-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LJNJCDZU = $mol_type_enforce<
		`Tb-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZVNSL4XK = $mol_type_enforce<
		`Ni-Ag-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V11EYCBP = $mol_type_enforce<
		`Li-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UFHHWE6X = $mol_type_enforce<
		`Na-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4JRGEL1K = $mol_type_enforce<
		`La-Sm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CCAGRPQG = $mol_type_enforce<
		`Ca-La-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F4VZ3MDJ = $mol_type_enforce<
		`Sr-Ca-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N5KFROKM = $mol_type_enforce<
		`La-Mn-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YGIUCQCE = $mol_type_enforce<
		`La-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q96LZH4N = $mol_type_enforce<
		`Tb-Ce-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1OOTRJKE = $mol_type_enforce<
		`Mo-Pb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A9GP1TSR = $mol_type_enforce<
		`Tb-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__12XAY9BF = $mol_type_enforce<
		`Al-Ga-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3CDN8AWE = $mol_type_enforce<
		`V-Fe-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VCW6HWXL = $mol_type_enforce<
		`Nd-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K99M9D9Q = $mol_type_enforce<
		`Tl-Si-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DTPEQUF1 = $mol_type_enforce<
		`Tb-Ce-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R5T1J0BP = $mol_type_enforce<
		`Cs-Pr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S6COZPCS = $mol_type_enforce<
		`Nd-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__96H4ISQL = $mol_type_enforce<
		`Eu-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1W4YPAI4 = $mol_type_enforce<
		`La-Dy-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2CMDD63S = $mol_type_enforce<
		`Mg-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D1CHPIU4 = $mol_type_enforce<
		`Li-Fe-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TPDLGPHZ = $mol_type_enforce<
		`Na-Li-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O4YLM2Z0 = $mol_type_enforce<
		`La-Tb-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VFSWPVZ1 = $mol_type_enforce<
		`Th-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UGG8G537 = $mol_type_enforce<
		`Ce-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5DNYIG1J = $mol_type_enforce<
		`Dy-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__52G4NRYY = $mol_type_enforce<
		`Nd-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6ST3A5J4 = $mol_type_enforce<
		`Yb-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__363GZADB = $mol_type_enforce<
		`Ga-Si-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B8YY1EZZ = $mol_type_enforce<
		`Pr-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SYF8GEKG = $mol_type_enforce<
		`Eu-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NODGDE18 = $mol_type_enforce<
		`Hf-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SQECJJ27 = $mol_type_enforce<
		`Pu-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DD7GFUIV = $mol_type_enforce<
		`Li-Nd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M3TAH35O = $mol_type_enforce<
		`Cu-Ag-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SSTT67TE = $mol_type_enforce<
		`Sm-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__USQWSO1X = $mol_type_enforce<
		`Gd-Dy-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NUBFDIRT = $mol_type_enforce<
		`Ho-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V6LNOBHD = $mol_type_enforce<
		`Cu-Ag-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S2B752DH = $mol_type_enforce<
		`Tc-Ni-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__23WN6621 = $mol_type_enforce<
		`Y-Lu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EHB7YBGD = $mol_type_enforce<
		`Ni-Os-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q7YRDVUZ = $mol_type_enforce<
		`Dy-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AH3AX92J = $mol_type_enforce<
		`Fe-Cu-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1SF85ZJ1 = $mol_type_enforce<
		`Ta-Tl-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WNQMQYLM = $mol_type_enforce<
		`Eu-Y-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZGELRZWG = $mol_type_enforce<
		`Co-Pd-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PC2AIITV = $mol_type_enforce<
		`Re-Hg-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T7WU466K = $mol_type_enforce<
		`La-Yb-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TZIHHPTH = $mol_type_enforce<
		`Nd-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S8ENH3UI = $mol_type_enforce<
		`Tb-Yb-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S1XW8BB3 = $mol_type_enforce<
		`Yb-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6WPKSNQT = $mol_type_enforce<
		`K-Li-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NRXKEY2C = $mol_type_enforce<
		`Re-Tc-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DH2XTANQ = $mol_type_enforce<
		`Cs-K-Al`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CLP3X3N5 = $mol_type_enforce<
		`Pr-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KNV7WNYX = $mol_type_enforce<
		`Yb-Eu-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8QTUICAA = $mol_type_enforce<
		`Y-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z04RMXR0 = $mol_type_enforce<
		`Yb-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IN14PTVW = $mol_type_enforce<
		`Nd-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VNB8ACQO = $mol_type_enforce<
		`Sm-Dy-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HGLXOCA6 = $mol_type_enforce<
		`Y-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K5D8AYW9 = $mol_type_enforce<
		`Ce-Er-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WHYFDH5P = $mol_type_enforce<
		`Re-Tc-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__85U6Z5U8 = $mol_type_enforce<
		`Ce-Nd-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WT55R259 = $mol_type_enforce<
		`Li-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JQP54EL6 = $mol_type_enforce<
		`Y-Tm-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KKTOOEA4 = $mol_type_enforce<
		`Al-Tl-Zn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YNBS8GYE = $mol_type_enforce<
		`Li-La-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W0IM684L = $mol_type_enforce<
		`Pr-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XX6HEULE = $mol_type_enforce<
		`Eu-Th-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RZ06QFDO = $mol_type_enforce<
		`Pr-Nd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__12GVGV95 = $mol_type_enforce<
		`Pm-Gd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4CP0MBK3 = $mol_type_enforce<
		`Na-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7K0LNDTP = $mol_type_enforce<
		`Al-Zn-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0CUGERBW = $mol_type_enforce<
		`Ba-Sm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KNGSVJCL = $mol_type_enforce<
		`Y-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2YK72FEU = $mol_type_enforce<
		`Nd-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TQ3Y9XQN = $mol_type_enforce<
		`Co-Ir-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FEIWWE4S = $mol_type_enforce<
		`Yb-Gd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A2M7N4GJ = $mol_type_enforce<
		`Hg-Ge-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RVUNCC4O = $mol_type_enforce<
		`Ho-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UZMP0SCC = $mol_type_enforce<
		`Pr-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__INNJWEIB = $mol_type_enforce<
		`Tb-Dy-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NPJ40NIL = $mol_type_enforce<
		`Ir-Ru-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FCQN08J1 = $mol_type_enforce<
		`Ce-Pm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__45AEE0CW = $mol_type_enforce<
		`Tm-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z7OHPN5K = $mol_type_enforce<
		`Pm-Nd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C7CJCHE2 = $mol_type_enforce<
		`Yb-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IP0RELQC = $mol_type_enforce<
		`La-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__945GZF2W = $mol_type_enforce<
		`Sm-Pu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6GG95W29 = $mol_type_enforce<
		`Hf-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TUH9539V = $mol_type_enforce<
		`Ta-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C1NNTNS6 = $mol_type_enforce<
		`Be-Sn-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BQYN0PXP = $mol_type_enforce<
		`Pm-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ERVMY66U = $mol_type_enforce<
		`Yb-Eu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RFYQJ4P9 = $mol_type_enforce<
		`Ho-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__48727KGL = $mol_type_enforce<
		`Tb-Dy-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PULVKUNT = $mol_type_enforce<
		`Ce-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W65WKXJ0 = $mol_type_enforce<
		`Al-Zn-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BU513TNH = $mol_type_enforce<
		`Ca-La-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LXWXOC6D = $mol_type_enforce<
		`Yb-Eu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ETLTPOKU = $mol_type_enforce<
		`Cs-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NRDAL9JD = $mol_type_enforce<
		`Na-Ca-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KB8IJ6YT = $mol_type_enforce<
		`Tb-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__83JZKPP8 = $mol_type_enforce<
		`Sr-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KUTTYENY = $mol_type_enforce<
		`Tc-Ir-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MA4KXKLC = $mol_type_enforce<
		`Y-Hf-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7ORY0OO3 = $mol_type_enforce<
		`Ti-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F5RGPJJJ = $mol_type_enforce<
		`Pr-Gd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4A8KWNG4 = $mol_type_enforce<
		`Co-Cu-Re`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SQVV2DN6 = $mol_type_enforce<
		`La-Y-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FMB4W30J = $mol_type_enforce<
		`Re-Sn-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YT49L2K3 = $mol_type_enforce<
		`Yb-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O4S2RD4Q = $mol_type_enforce<
		`Nd-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B9CDB7X0 = $mol_type_enforce<
		`Fe-Ni-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4W0D1R2P = $mol_type_enforce<
		`Pr-Nd-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6KOAFC7F = $mol_type_enforce<
		`Yb-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KZCOFTHU = $mol_type_enforce<
		`Ce-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6BRQNN36 = $mol_type_enforce<
		`Ac-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R7EK7SLV = $mol_type_enforce<
		`Zn-B-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TPWJWNBS = $mol_type_enforce<
		`La-Yb-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CNYJJMTE = $mol_type_enforce<
		`Ba-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W2YBBA23 = $mol_type_enforce<
		`Mn-Co-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YB8GN02H = $mol_type_enforce<
		`Dy-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7294OGES = $mol_type_enforce<
		`Er-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2EVNK22G = $mol_type_enforce<
		`La-Y-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5DHLTYWT = $mol_type_enforce<
		`Tc-Ir-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X6J290DC = $mol_type_enforce<
		`Pr-Er-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZGK4F67Z = $mol_type_enforce<
		`Yb-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q1L9FTL6 = $mol_type_enforce<
		`Mn-Fe-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SKTSS00S = $mol_type_enforce<
		`Ca-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HVC2E3G1 = $mol_type_enforce<
		`Pd-Ru-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XF8Y3BTX = $mol_type_enforce<
		`Ce-Hf-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RRDNAF1N = $mol_type_enforce<
		`La-Pm-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I70564XK = $mol_type_enforce<
		`Tb-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HLH57QHE = $mol_type_enforce<
		`Ba-Eu-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UJYB27LX = $mol_type_enforce<
		`Ta-Bi-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H3KPRZP5 = $mol_type_enforce<
		`Nd-Dy-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N7OCXQ43 = $mol_type_enforce<
		`Tl-B-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2Z6ATGHY = $mol_type_enforce<
		`Li-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DYIBAO8K = $mol_type_enforce<
		`Li-La-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__22MZZV21 = $mol_type_enforce<
		`Al-Sn-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9MFJ7YQ1 = $mol_type_enforce<
		`Ce-Pm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__URFMHAGJ = $mol_type_enforce<
		`Ni-Au-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LPV02LXG = $mol_type_enforce<
		`Er-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4P1ERKG7 = $mol_type_enforce<
		`Pr-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YNZ6V4QY = $mol_type_enforce<
		`La-Nd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__73LYM0Y1 = $mol_type_enforce<
		`Ni-Ag-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HCESO32P = $mol_type_enforce<
		`La-Ce-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V55OQSP1 = $mol_type_enforce<
		`La-Yb-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__06M8SYHI = $mol_type_enforce<
		`Pm-Nd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9DMF8IVK = $mol_type_enforce<
		`Ce-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NQLARIXI = $mol_type_enforce<
		`Eu-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4S42CACX = $mol_type_enforce<
		`Pm-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YO3226ZW = $mol_type_enforce<
		`Ce-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U42YFNBW = $mol_type_enforce<
		`Li-Cu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J7DG4QSZ = $mol_type_enforce<
		`Sm-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3RIZK2WE = $mol_type_enforce<
		`Tb-Nd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PPTFIT3L = $mol_type_enforce<
		`Nd-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E4N08YCD = $mol_type_enforce<
		`Rb-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__46OJ7TRV = $mol_type_enforce<
		`Pr-Y-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XLLD7R7L = $mol_type_enforce<
		`Y-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3WZKV9QX = $mol_type_enforce<
		`Cd-Mo-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ODBM2R3Q = $mol_type_enforce<
		`Li-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F9KNWC7M = $mol_type_enforce<
		`V-Cu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ISFAEHRM = $mol_type_enforce<
		`Pm-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SHJAA5ZZ = $mol_type_enforce<
		`Yb-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VM2MOVKM = $mol_type_enforce<
		`Tb-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CGC6FSBW = $mol_type_enforce<
		`Ca-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U0HI294Q = $mol_type_enforce<
		`Tb-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YI9PR6UU = $mol_type_enforce<
		`Y-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3NC7MLC2 = $mol_type_enforce<
		`Rb-Li-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UKGBLTE4 = $mol_type_enforce<
		`Hg-Sb-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CMAAYNMQ = $mol_type_enforce<
		`La-Dy-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z2QVVYNV = $mol_type_enforce<
		`Pd-Rh-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OFM0D2NL = $mol_type_enforce<
		`K-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__74J3NOGB = $mol_type_enforce<
		`Li-La-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7WB0B3US = $mol_type_enforce<
		`Pr-Dy-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HICGHJ2L = $mol_type_enforce<
		`Yb-Pr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UA1OGU7R = $mol_type_enforce<
		`La-Nd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RS0WNG9I = $mol_type_enforce<
		`Sm-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AWHL6PB5 = $mol_type_enforce<
		`Ce-Eu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8ZBZKGY4 = $mol_type_enforce<
		`Nd-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KC4316EC = $mol_type_enforce<
		`Ag-Ir-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PGDKJUFF = $mol_type_enforce<
		`Pm-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FDQI9OSJ = $mol_type_enforce<
		`Yb-Dy-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N9T5QXX5 = $mol_type_enforce<
		`U-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L3CETULG = $mol_type_enforce<
		`Ca-Tb-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5NL8M1VP = $mol_type_enforce<
		`Tb-Yb-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LSNM6N8T = $mol_type_enforce<
		`Ce-Pm-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2LFN3NGA = $mol_type_enforce<
		`Sr-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B7PSOGS0 = $mol_type_enforce<
		`Co-Ni-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NLL3NQUE = $mol_type_enforce<
		`Rb-Mg-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D1EQW2BJ = $mol_type_enforce<
		`Ti-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6PBVBOUR = $mol_type_enforce<
		`Th-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U53A1CO7 = $mol_type_enforce<
		`Yb-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U6UK44S7 = $mol_type_enforce<
		`Ta-Cu-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KMYQQ6OL = $mol_type_enforce<
		`La-Yb-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2R3OBUIV = $mol_type_enforce<
		`Pr-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3PZIZ1SU = $mol_type_enforce<
		`Rb-Na-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0C4AIV4A = $mol_type_enforce<
		`Ce-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q3LRZ1IK = $mol_type_enforce<
		`Ce-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HSRXZTLH = $mol_type_enforce<
		`Eu-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z4Z7AWV8 = $mol_type_enforce<
		`La-Ho-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8HAZF3CF = $mol_type_enforce<
		`Cd-Ga-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I4EQP6PR = $mol_type_enforce<
		`Eu-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E49HPNYP = $mol_type_enforce<
		`Nd-Gd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5UU4Y36J = $mol_type_enforce<
		`Na-Li-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0QKM3K9B = $mol_type_enforce<
		`Tb-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OK6RQSYG = $mol_type_enforce<
		`Th-Sc-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A9HOH1DT = $mol_type_enforce<
		`Lu-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GQXG8CXS = $mol_type_enforce<
		`Tb-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NFU2KSUA = $mol_type_enforce<
		`Tb-Sm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__77OH5PUA = $mol_type_enforce<
		`Dy-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AE163T4M = $mol_type_enforce<
		`Rb-Li-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BKB0RAMT = $mol_type_enforce<
		`Li-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YEN9CN7V = $mol_type_enforce<
		`Re-Tc-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F9S16NPS = $mol_type_enforce<
		`Pm-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ID5U9DJN = $mol_type_enforce<
		`La-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GBXBB2Q3 = $mol_type_enforce<
		`La-Dy-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HTUXJ3FK = $mol_type_enforce<
		`Mg-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LJSW4M2G = $mol_type_enforce<
		`Nd-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J0KQ50O2 = $mol_type_enforce<
		`Dy-Y-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QN3RVMIM = $mol_type_enforce<
		`Tb-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8UF9GB2Z = $mol_type_enforce<
		`Pd-Pt-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M92CD25C = $mol_type_enforce<
		`Cs-Rb-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G1YZEHOI = $mol_type_enforce<
		`Ca-Nd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O2635QP4 = $mol_type_enforce<
		`La-Pm-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UMN963WW = $mol_type_enforce<
		`Sm-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ELL731IL = $mol_type_enforce<
		`Hg-Bi-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FIMKIUKK = $mol_type_enforce<
		`Co-Ag-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VBD7H04L = $mol_type_enforce<
		`Ce-Pm-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6R47O6N5 = $mol_type_enforce<
		`Cu-Re-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CZ4WD66O = $mol_type_enforce<
		`La-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ICD39ATT = $mol_type_enforce<
		`Ba-Pr-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZK0PV9XC = $mol_type_enforce<
		`La-Yb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CHFB61BB = $mol_type_enforce<
		`Li-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1ZLG6PV4 = $mol_type_enforce<
		`Th-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XGV8C2J0 = $mol_type_enforce<
		`Li-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D3SDRX9F = $mol_type_enforce<
		`Zn-Si-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OFS887MX = $mol_type_enforce<
		`Sc-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GGM154LI = $mol_type_enforce<
		`Sm-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XNEXEHS6 = $mol_type_enforce<
		`Li-La-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NG15E5GG = $mol_type_enforce<
		`Li-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OWLIDJY9 = $mol_type_enforce<
		`Y-Hf-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UHQ8JKBK = $mol_type_enforce<
		`Ti-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XLD29K9G = $mol_type_enforce<
		`Sm-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NCJ4K7NF = $mol_type_enforce<
		`Li-Cu-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EJA5RIH6 = $mol_type_enforce<
		`Ce-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6LCQ4T6N = $mol_type_enforce<
		`Tm-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BTMM6C5B = $mol_type_enforce<
		`Yb-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JB2UENOG = $mol_type_enforce<
		`Ca-Yb-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RAVZQO77 = $mol_type_enforce<
		`Ce-Eu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0ZW8Q9BE = $mol_type_enforce<
		`Nd-Er-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9AW2TPMC = $mol_type_enforce<
		`Hf-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6U4FUV7M = $mol_type_enforce<
		`Co-Ag-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UL3810BE = $mol_type_enforce<
		`Co-Ir-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QV3BHS91 = $mol_type_enforce<
		`Ca-Mn-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__29GEK3Y8 = $mol_type_enforce<
		`Pu-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N2ES8RMP = $mol_type_enforce<
		`V-Bi-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QULBWJY6 = $mol_type_enforce<
		`Y-Hf-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__87E6M0C0 = $mol_type_enforce<
		`Dy-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2GBRFCZ9 = $mol_type_enforce<
		`Ce-Sm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__USH9VVIP = $mol_type_enforce<
		`Ni-Ir-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2ZXQ5CDG = $mol_type_enforce<
		`Re-Os-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WMBKRQTU = $mol_type_enforce<
		`Ce-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F76JYEDO = $mol_type_enforce<
		`Er-Hf-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__INY50N86 = $mol_type_enforce<
		`Cr-Fe-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5KHXU3FJ = $mol_type_enforce<
		`Li-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R93AYT8Z = $mol_type_enforce<
		`Eu-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OL1G581K = $mol_type_enforce<
		`Yb-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VOKVBUCQ = $mol_type_enforce<
		`Ga-Ge-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MQ9M9QKE = $mol_type_enforce<
		`Eu-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J4IHKRJ9 = $mol_type_enforce<
		`Li-Pr-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0MLJVA41 = $mol_type_enforce<
		`Yb-Pr-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SN9SAMTJ = $mol_type_enforce<
		`Sm-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FP9ES81C = $mol_type_enforce<
		`La-Nd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RUVY0X2I = $mol_type_enforce<
		`Ce-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K06WK0KJ = $mol_type_enforce<
		`Li-Pm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SFFUHRL0 = $mol_type_enforce<
		`Y-Sc-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NYNR5RU8 = $mol_type_enforce<
		`Pr-Sm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FFWNLG2N = $mol_type_enforce<
		`Pr-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3H4WOTS2 = $mol_type_enforce<
		`Re-Tc-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P382F9A6 = $mol_type_enforce<
		`Nd-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KH6LLW3Y = $mol_type_enforce<
		`Tl-In-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3WQZ6IXN = $mol_type_enforce<
		`Yb-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VEBNAJ1M = $mol_type_enforce<
		`Tb-Pr-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2C78G0BH = $mol_type_enforce<
		`Mn-Fe-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M9YFI7ZY = $mol_type_enforce<
		`Ce-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3YJB2B5Y = $mol_type_enforce<
		`K-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O5UW4MYK = $mol_type_enforce<
		`Ce-Sm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LFAXO9BK = $mol_type_enforce<
		`Ni-Ag-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GKMLRGPG = $mol_type_enforce<
		`K-Mg-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EUCAD54F = $mol_type_enforce<
		`Tb-Nd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2X5LWZ10 = $mol_type_enforce<
		`Pu-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RGTLQKPC = $mol_type_enforce<
		`La-Gd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CD7JOBX4 = $mol_type_enforce<
		`Pm-Nd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5XJHHKPY = $mol_type_enforce<
		`La-Dy-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3DH0UCV9 = $mol_type_enforce<
		`Tb-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JOR85BY5 = $mol_type_enforce<
		`Cu-Tc-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z7T0V4HS = $mol_type_enforce<
		`Li-Tb-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J58K9ZAG = $mol_type_enforce<
		`Tb-Sm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F46A96NJ = $mol_type_enforce<
		`Sr-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7YHCQAXT = $mol_type_enforce<
		`Pm-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZNSPARVI = $mol_type_enforce<
		`K-Rb-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WO2QXTP9 = $mol_type_enforce<
		`Gd-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__32FM82NL = $mol_type_enforce<
		`Y-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VFP2GJ96 = $mol_type_enforce<
		`Ce-Eu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__035V6JLB = $mol_type_enforce<
		`Yb-Nd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L0HO8Q7Z = $mol_type_enforce<
		`Er-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FDRO94QH = $mol_type_enforce<
		`Pr-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6R4BTE3M = $mol_type_enforce<
		`Eu-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WSC4RYX1 = $mol_type_enforce<
		`Gd-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PMTP7FOS = $mol_type_enforce<
		`Li-Ce-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3WRKTCPL = $mol_type_enforce<
		`Na-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QBQFQXDS = $mol_type_enforce<
		`Sm-Gd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ODMTVFZ5 = $mol_type_enforce<
		`La-Pr-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F1RCLQ7J = $mol_type_enforce<
		`Ga-Re-Hg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AJ33TX63 = $mol_type_enforce<
		`Li-La-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QYS4CB2L = $mol_type_enforce<
		`Co-Ni-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G0GQXTL1 = $mol_type_enforce<
		`La-Tb-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AFFT3CX7 = $mol_type_enforce<
		`Yb-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QDXS92YN = $mol_type_enforce<
		`Er-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NBCAYEET = $mol_type_enforce<
		`Tl-Ga-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SZZCKWPS = $mol_type_enforce<
		`Yb-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JJEJD02T = $mol_type_enforce<
		`Co-Ag-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9MZKSWHI = $mol_type_enforce<
		`Li-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E72SZNIH = $mol_type_enforce<
		`Rb-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2QK7PK6D = $mol_type_enforce<
		`K-Li-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NF7T4856 = $mol_type_enforce<
		`Dy-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JTC4Y6VL = $mol_type_enforce<
		`Pu-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TRQ4RMIV = $mol_type_enforce<
		`Li-La-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CVT8DCQF = $mol_type_enforce<
		`Tb-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PO4IVB3X = $mol_type_enforce<
		`La-Pr-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P35A89WO = $mol_type_enforce<
		`Tb-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9E3INTRP = $mol_type_enforce<
		`Tb-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__39VI2YX1 = $mol_type_enforce<
		`Ba-Ca-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KCL3ZVDP = $mol_type_enforce<
		`Gd-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R1HFTQBK = $mol_type_enforce<
		`Ta-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7T4YTTCT = $mol_type_enforce<
		`La-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7J7XLOM9 = $mol_type_enforce<
		`La-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2VVNGLAD = $mol_type_enforce<
		`Ge-B-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8QIKCZRP = $mol_type_enforce<
		`Li-Pr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IBDSRR9A = $mol_type_enforce<
		`Cu-Pt-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J9OR0VEE = $mol_type_enforce<
		`La-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9C590EKO = $mol_type_enforce<
		`Tb-Pr-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y1I3LHTQ = $mol_type_enforce<
		`Eu-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7LPQSVLR = $mol_type_enforce<
		`Ce-Tm-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HHB0F225 = $mol_type_enforce<
		`Pr-Tm-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D1620IPR = $mol_type_enforce<
		`La-Gd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RE6EWG4H = $mol_type_enforce<
		`Pm-Pr-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DAOE1P7G = $mol_type_enforce<
		`Sm-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9D6EU4NW = $mol_type_enforce<
		`Mn-Ni-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IHMS3K6F = $mol_type_enforce<
		`Ce-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M0OLRE65 = $mol_type_enforce<
		`Rb-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8BIYGDZU = $mol_type_enforce<
		`La-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZF7ZP7NE = $mol_type_enforce<
		`Ca-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KBI149QH = $mol_type_enforce<
		`Sm-Lu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__844IVEVX = $mol_type_enforce<
		`Li-V-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BCVN9J2B = $mol_type_enforce<
		`Y-Er-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IF0QJFO2 = $mol_type_enforce<
		`Nd-Dy-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K9JCMY2X = $mol_type_enforce<
		`Pm-Pr-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__06B5FSGV = $mol_type_enforce<
		`Mg-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9NMS40LZ = $mol_type_enforce<
		`La-Yb-Eu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8CP18FHN = $mol_type_enforce<
		`Gd-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CHBP0RRO = $mol_type_enforce<
		`Eu-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5AX6XIET = $mol_type_enforce<
		`Tb-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QX2J2HNK = $mol_type_enforce<
		`Cs-Rb-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__168KNL57 = $mol_type_enforce<
		`Tb-Pr-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L88DXDY2 = $mol_type_enforce<
		`Cd-Bi-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D62QX8GP = $mol_type_enforce<
		`Cu-Ir-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EVQZUIQ0 = $mol_type_enforce<
		`Gd-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MPVE0UU1 = $mol_type_enforce<
		`Pr-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LWYRBGUQ = $mol_type_enforce<
		`La-Nd-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LCY4BTR0 = $mol_type_enforce<
		`Y-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PZXS92S3 = $mol_type_enforce<
		`Ni-Ag-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UEL7W3UH = $mol_type_enforce<
		`K-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LMF68H1H = $mol_type_enforce<
		`Nd-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PZAEBZL1 = $mol_type_enforce<
		`Pr-Nd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EA2EA2CI = $mol_type_enforce<
		`La-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HIY6EI49 = $mol_type_enforce<
		`Yb-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EVOOBC2F = $mol_type_enforce<
		`Dy-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UHW7DU5T = $mol_type_enforce<
		`La-Nd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4T8LJJX4 = $mol_type_enforce<
		`Ce-Pr-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RWURO6VP = $mol_type_enforce<
		`Ce-Nd-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4IU9ZDR1 = $mol_type_enforce<
		`Y-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__24P6ANIN = $mol_type_enforce<
		`Tl-Ni-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I151EIK8 = $mol_type_enforce<
		`Nd-Gd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XDMQQHV6 = $mol_type_enforce<
		`K-Li-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NXSUVISK = $mol_type_enforce<
		`Li-Ce-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GTTML4GR = $mol_type_enforce<
		`Mn-Ni-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5ZEWO49O = $mol_type_enforce<
		`Ho-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q8P8H6L1 = $mol_type_enforce<
		`Pm-Dy-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PWPAE07H = $mol_type_enforce<
		`Ce-Sm-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I2EHTB96 = $mol_type_enforce<
		`Ni-Os-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D9ZSDL47 = $mol_type_enforce<
		`Cr-Mo-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X5G956GR = $mol_type_enforce<
		`Er-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KVIRCGG6 = $mol_type_enforce<
		`Ce-Nd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4J4RJ339 = $mol_type_enforce<
		`Zn-Ga-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FH92X6Y3 = $mol_type_enforce<
		`Sm-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TQRZB41G = $mol_type_enforce<
		`Eu-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I9OLLNQF = $mol_type_enforce<
		`Fe-Pd-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J4WFR8YZ = $mol_type_enforce<
		`Co-Re-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2ISEXETG = $mol_type_enforce<
		`Sm-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I7X2E6CU = $mol_type_enforce<
		`Fe-Cu-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JHW902NO = $mol_type_enforce<
		`Tm-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OBIIAM7N = $mol_type_enforce<
		`Ta-Nb-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LRX5MKGQ = $mol_type_enforce<
		`Ho-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0ITVD64R = $mol_type_enforce<
		`Li-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U92HS947 = $mol_type_enforce<
		`Yb-Er-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N9U3Z7QY = $mol_type_enforce<
		`Fe-Ni-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OG2NSXR1 = $mol_type_enforce<
		`Nd-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FPXJX3X7 = $mol_type_enforce<
		`La-Pr-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__50HFLFIK = $mol_type_enforce<
		`Mg-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XX7104Q4 = $mol_type_enforce<
		`La-Pr-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZKQKIZJV = $mol_type_enforce<
		`Y-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NLI2O9O3 = $mol_type_enforce<
		`Cu-Ni-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__76BM2U8I = $mol_type_enforce<
		`Rb-Li-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X0PWOM4D = $mol_type_enforce<
		`Li-Ho-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P3ZWHD58 = $mol_type_enforce<
		`Fe-Ag-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3IXIE0Q9 = $mol_type_enforce<
		`Eu-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D1YUYJ8M = $mol_type_enforce<
		`Nd-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__04TVBAON = $mol_type_enforce<
		`Pm-Pr-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G24EW6WS = $mol_type_enforce<
		`Sm-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MJ8CKCY9 = $mol_type_enforce<
		`Zn-Ga-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FPCQCARP = $mol_type_enforce<
		`Tl-Ga-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X76CUNAF = $mol_type_enforce<
		`La-Tb-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RWTM8D6A = $mol_type_enforce<
		`Tm-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FAZSNQH5 = $mol_type_enforce<
		`Sr-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WJ92B9IN = $mol_type_enforce<
		`Y-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VQVGGCKN = $mol_type_enforce<
		`Tb-Yb-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2DAZB5Z3 = $mol_type_enforce<
		`La-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X7VFV4RW = $mol_type_enforce<
		`Dy-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7OPU1L2X = $mol_type_enforce<
		`Cs-Hf-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DWJZF3Y1 = $mol_type_enforce<
		`Ba-Sm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AXPAWMYX = $mol_type_enforce<
		`Pr-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__235SOW9C = $mol_type_enforce<
		`Nd-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W4DQG2PI = $mol_type_enforce<
		`Tm-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VKFT69AM = $mol_type_enforce<
		`Li-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RJTFQZCG = $mol_type_enforce<
		`Gd-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WZRRTM54 = $mol_type_enforce<
		`Ti-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JNIUJ8KM = $mol_type_enforce<
		`Sc-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0MFWVSNH = $mol_type_enforce<
		`La-Sm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K9EKEZHC = $mol_type_enforce<
		`Ce-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MTRSULT6 = $mol_type_enforce<
		`Y-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6QE7QL8Q = $mol_type_enforce<
		`Sm-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WJTXDRRP = $mol_type_enforce<
		`Tb-Sm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OZTA6DZD = $mol_type_enforce<
		`Li-Tb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__26AR4DHN = $mol_type_enforce<
		`Ho-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EQ4ZOPF8 = $mol_type_enforce<
		`Sm-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZDYII4YE = $mol_type_enforce<
		`Nd-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F9XO97OR = $mol_type_enforce<
		`Na-Li-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BY9HVQYO = $mol_type_enforce<
		`K-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZQGDLOZ2 = $mol_type_enforce<
		`Mn-Tl-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6E67YF1T = $mol_type_enforce<
		`Hg-B-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J0ADIC2S = $mol_type_enforce<
		`Er-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CCNVRWNX = $mol_type_enforce<
		`Pu-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2H487SPK = $mol_type_enforce<
		`Ca-La-Ce`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XHHP16DZ = $mol_type_enforce<
		`Eu-Hf-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J8PK8WD1 = $mol_type_enforce<
		`Os-Ru-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JF2QUEPI = $mol_type_enforce<
		`La-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RZKM5H2D = $mol_type_enforce<
		`V-Ag-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G8YMAXY9 = $mol_type_enforce<
		`Ba-Pr-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PLQ9IQBZ = $mol_type_enforce<
		`Nd-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LSQSCU8C = $mol_type_enforce<
		`Pr-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R0LX9WX9 = $mol_type_enforce<
		`Y-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CF2VB7ZD = $mol_type_enforce<
		`Tb-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IK1L4CA8 = $mol_type_enforce<
		`Ce-Nd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CFCVTH4Q = $mol_type_enforce<
		`Pt-Rh-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B6D6V77K = $mol_type_enforce<
		`Er-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QUW39JUZ = $mol_type_enforce<
		`Ba-La-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CIS41TZW = $mol_type_enforce<
		`Pr-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S80JRWRV = $mol_type_enforce<
		`Sm-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DK0VCIPH = $mol_type_enforce<
		`Ga-Re-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XZKM00PZ = $mol_type_enforce<
		`Ho-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TS3QKQT2 = $mol_type_enforce<
		`Al-Tl-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3YQ8H983 = $mol_type_enforce<
		`Dy-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1RRQYUWE = $mol_type_enforce<
		`Na-Sr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J5LQ4RE3 = $mol_type_enforce<
		`Cd-Si-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FTWS8U34 = $mol_type_enforce<
		`Tb-Pr-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G6KTOI3B = $mol_type_enforce<
		`Ba-Gd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VX64R1E9 = $mol_type_enforce<
		`Ca-Tb-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DHNZH15I = $mol_type_enforce<
		`Cu-Ag-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OX0T0GAE = $mol_type_enforce<
		`Co-Cu-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HK5NK0KN = $mol_type_enforce<
		`Pm-Dy-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IQ072IG1 = $mol_type_enforce<
		`Zn-Cd-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YMATYRNB = $mol_type_enforce<
		`La-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GY9GG3PK = $mol_type_enforce<
		`Sr-Ca-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RQ90FH42 = $mol_type_enforce<
		`Dy-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DHGWEG02 = $mol_type_enforce<
		`Eu-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4NA3NYHB = $mol_type_enforce<
		`Ca-Pm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__49740BAR = $mol_type_enforce<
		`Eu-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MV18KQL3 = $mol_type_enforce<
		`Cu-Os-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TCBRCI8Z = $mol_type_enforce<
		`Be-In-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VKLUQ44U = $mol_type_enforce<
		`La-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S34ZSXHF = $mol_type_enforce<
		`Nd-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3UX7II5Q = $mol_type_enforce<
		`Ca-Ce-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GYCGADLN = $mol_type_enforce<
		`Yb-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E5RLJNP0 = $mol_type_enforce<
		`Ca-La-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SB6YY8IG = $mol_type_enforce<
		`Li-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9K1AVFZC = $mol_type_enforce<
		`Al-Tl-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GH223678 = $mol_type_enforce<
		`Li-Ce-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4FXU0R0C = $mol_type_enforce<
		`Li-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U8ZZDV1O = $mol_type_enforce<
		`Pr-Nd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2W8AI6WZ = $mol_type_enforce<
		`Yb-Nd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y8J1V055 = $mol_type_enforce<
		`Li-Ce-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z647JJ23 = $mol_type_enforce<
		`Pm-Dy-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TDP2U2C0 = $mol_type_enforce<
		`Dy-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PN370ZJ8 = $mol_type_enforce<
		`Ca-Mn-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0FVKHJAX = $mol_type_enforce<
		`Cs-Mg-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OQA6KM1R = $mol_type_enforce<
		`Ce-Eu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8M3IZQRQ = $mol_type_enforce<
		`Tb-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BI1MKO6R = $mol_type_enforce<
		`Ce-Ta-Nb`
		,
		string
	>
	export class $mpds_visavis_elements_nonformer extends $mol_object {
		pd_bin( ): readonly(any)[]
		pd_tri( ): readonly(string)[]
	}
	
}

//# sourceMappingURL=nonformer.view.tree.d.ts.map
declare namespace $.$$ {
    class $mpds_visavis_elements_nonformer extends $.$mpds_visavis_elements_nonformer {
        static data(): $mpds_visavis_elements_nonformer;
        static pd_bin(): readonly any[];
        static pd_tri_labels(): readonly string[];
        static pd_tri_nums(): {
            x: number[];
            y: number[];
            z: number[];
        };
    }
}

declare namespace $ {
    function $mol_promise<Result = void>(): Promise<Result> & {
        done: (res: Result | PromiseLike<Result>) => void;
        fail: (error?: any) => void;
    };
}

declare namespace $ {
    function $mol_wait_timeout_async(this: $, timeout: number): Promise<void> & {
        done: (res: void | PromiseLike<void>) => void;
        fail: (error?: any) => void;
    } & {
        destructor: () => void;
    };
    function $mol_wait_timeout(this: $, timeout: number): void;
}

declare namespace $ {

	type $mol_view__render__4DKTSZYW = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['draw'] >
		,
		ReturnType< $mol_view['render'] >
	>
	type $mol_view__sub__A994VRC5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub__6RTHH82E = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mpds_visavis_plot_legend_cmp__labels__6KPFV94G = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['cmp_labels'] >
		,
		ReturnType< $mpds_visavis_plot_legend_cmp['labels'] >
	>
	type $mpds_visavis_plot_legend_cmp__colorset__Y50I2HJA = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['colorset'] >
		,
		ReturnType< $mpds_visavis_plot_legend_cmp['colorset'] >
	>
	type $mol_view__sub__IVUP8AZJ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__style__K65UNDGF = $mol_type_enforce<
		({ 
			'background': ReturnType< $mpds_visavis_plot_matrix['heatmap_color'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__sub__ZLWS71TV = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows__MHU6JS3O = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['heatmap_color_list'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub__30D6AMFW = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_view__sub__BT27W7AT = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['plot_body'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_check_box__title__RBEFYW4P = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked__D2JZZG9D = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['fixel_checked'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_check_box__hint__PME3X1UH = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['hint'] >
	>
	type $mol_check_box__title__K3KRY94S = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked__EP96AFC0 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['nonformers_checked'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_check_box__title__IP8I5YKG = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked__KKPK4J6H = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['intersection_only'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_switch__value__VIJ3MXZG = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['sort_control'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options__KKU3H525 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['sort_dict'] >
		,
		ReturnType< $mol_switch['options'] >
	>
	type $mol_labeler__title__A3M8CO6S = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__CEWPKIF3 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['Order_switch'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_select__value__9CG2O03U = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['x_sort'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__dictionary__078S7KBB = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['sort_dict'] >
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_labeler__title__KFN5H39W = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__BQVTP003 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['X_sort'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_select__value__1QLTVHX4 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['y_sort'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__dictionary__DFCMQ7S7 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['sort_dict'] >
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_labeler__title__F6HFUTP6 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__018DFY01 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['Y_sort'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_select__value__2PIZ9372 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['x_op_str'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__dictionary__IGMQMG7Q = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['op_dict'] >
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_labeler__title__0PQKJDZI = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__IWLIUKSN = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['X_op'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_select__value__J2UYLU3G = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['y_op_str'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__dictionary__CSQ64MQE = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['op_dict'] >
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_labeler__title__QM3I5KCN = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__RA2XD7UO = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['Y_op'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_view__sub__EFZ3A5QS = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['setup'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mpds_visavis_plot_matrix extends $mol_view {
		size_debounced( ): number
		auto_reorder( ): any
		draw( ): any
		Root( ): $mol_view
		x_label( ): string
		X_label( ): $mol_view
		y_label( ): string
		Y_label( ): $mol_view
		cmp_labels( ): readonly(any)[]
		Cmp_legend( ): $mpds_visavis_plot_legend_cmp
		value_min( ): number
		Heatmap_min( ): $mol_view
		heatmap_color( id: any): string
		Heatmap_color( id: any): $mol_view
		value_max( ): number
		Heatmap_max( ): $mol_view
		heatmap_color_list( ): readonly(any)[]
		Heatmap_legend( ): $mol_list
		Side_right( ): $mol_scroll
		plot_body( ): readonly(any)[]
		Plot( ): $mol_view
		fixel_checked( next?: boolean ): boolean
		Fixel( ): $mol_check_box
		nonformers_checked( next?: boolean ): boolean
		Nonformers( ): $mol_check_box
		intersection_only( next?: boolean ): boolean
		Intersection_on( ): $mol_check_box
		sort_control( next?: string ): string
		sort_dict( ): Record<string, any>
		Order_switch( ): $mol_switch
		Order( ): $mol_labeler
		X_sort( ): $mol_select
		X_sort_label( ): $mol_labeler
		Y_sort( ): $mol_select
		Y_sort_label( ): $mol_labeler
		x_op_str( next?: string ): string
		op_dict( ): ({ 
			'null': string,
			'diff': string,
			'product': string,
			'ratio': string,
			'max': string,
			'min': string,
		}) 
		X_op( ): $mol_select
		X_op_label( ): $mol_labeler
		y_op_str( next?: string ): string
		Y_op( ): $mol_select
		Y_op_label( ): $mol_labeler
		sorting( ): readonly(any)[]
		setup( ): readonly(any)[]
		Setup( ): $mol_view
		plot_raw( ): $mpds_visavis_plot_raw
		auto( ): readonly(any)[]
		multi_jsons( next?: any ): any
		json_master( ): any
		show_setup( ): boolean
		size( next?: number ): number
		heatmap( ): boolean
		matrix( ): readonly(any)[]
		order( ): readonly(number)[]
		x_sort( next?: string ): string
		y_sort( next?: string ): string
		x_op( next?: any ): any
		y_op( next?: any ): any
		matrix_click( next?: any ): any
		heatmap_colors( ): readonly(any)[]
		colorset( ): readonly(any)[]
		plot_padding( ): number
		axis_width( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=matrix.view.tree.d.ts.map
declare namespace $.$$ {
    type Matrix_cell = {
        x: number;
        y: number;
        z: number;
        cmt: string;
        cmp: number;
        nonformer: boolean;
        intersection?: number;
    };
    type Prop_name = keyof ReturnType<typeof $mpds_visavis_elements_list.prop_names>;
    export class $mpds_visavis_plot_matrix extends $.$mpds_visavis_plot_matrix {
        setup(): any[];
        plot_body(): ($mol_view | $.$mpds_visavis_plot_legend_cmp)[];
        json(): Readonly<{
            answerto?: string | undefined;
            use_visavis_type: string;
            payload: Readonly<{
                nodes: readonly Readonly<{
                    count?: number | undefined;
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
                    name: string;
                }>[];
                links: readonly Readonly<{
                    cmp?: number | undefined;
                    source: number;
                    target: number;
                    value: number;
                    cmt: string;
                }>[];
                fixel: number | null;
            }>;
        }>;
        sort_dict(): Readonly<{
            num: string;
            nump: string;
            size: string;
            rea: string;
            rpp: string;
            rion: string;
            rcov: string;
            rmet: string;
            tmelt: string;
            eneg: string;
        }>;
        x_label(): string;
        y_label(): string;
        cmp_labels(): any;
        json_master(): Readonly<{
            answerto?: string | undefined;
            use_visavis_type: string;
            payload: Readonly<{
                nodes: readonly Readonly<{
                    count?: number | undefined;
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
                    name: string;
                }>[];
                links: readonly Readonly<{
                    cmp?: number | undefined;
                    source: number;
                    target: number;
                    value: number;
                    cmt: string;
                }>[];
                fixel: number | null;
            }>;
        }>;
        nodes(): readonly Readonly<{
            count?: number | undefined;
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
            name: string;
        }>[];
        links(): readonly Readonly<{
            cmp?: number | undefined;
            source: number;
            target: number;
            value: number;
            cmt: string;
        }>[];
        links_traversed(): {
            map: Map<string, Readonly<{
                cmp?: number | undefined;
                source: number;
                target: number;
                value: number;
                cmt: string;
            }>[]>;
            cells_map: Map<string, Matrix_cell>;
            heatmap_datasets: Set<number>;
            value_min: number;
            value_max: number;
            intersect_value_min: number;
            intersect_value_max: number;
        };
        links_map(): Map<string, Readonly<{
            cmp?: number | undefined;
            source: number;
            target: number;
            value: number;
            cmt: string;
        }>[]>;
        heatmap_datasets(): Set<number>;
        value_min(): number;
        value_max(): number;
        datasets_type(): "heatmap" | "entries" | "mix";
        heatmap(): boolean;
        order_by_prop(prop: Prop_name): any[];
        default_order(): any[];
        matrix(): Matrix_cell[][];
        size_debounced(): number;
        opacity_scale(): any;
        opacity(index: number): any;
        color_heatmap(): any;
        heatmap_color(index: number): any;
        heatmap_color_list(): $mol_view[];
        color_heatmap_scale(): any;
        color(index: number, cmp: number): any;
        range(): any;
        svg_title_text(cell: Matrix_cell): string;
        draw_row_cells(row_node: SVGElement, cells: Matrix_cell[], intersection_only: boolean): void;
        draw(): void;
        get_bin_domain(args: {
            sort: Prop_name;
            op: string;
        }): any[] | undefined;
        renorm(args: {
            sort: Prop_name;
            op?: string;
        }): any;
        sort_control(next?: any): string;
        x_op_str(next?: string): any;
        y_op_str(next?: string): any;
        auto_reorder(): void;
    }
    export {};
}

declare namespace $ {
}

declare namespace $.$$ {
}

declare namespace $ {

	export class $mpds_visavis_lib_plotly_view extends $mol_view {
		Plotly_root( ): any
		sub( ): readonly(any)[]
		data( ): readonly(any)[]
		layout( ): Record<string, any>
		plot_options( ): ({ 
			'displaylogo': boolean,
			'displayModeBar': boolean,
			'staticPlot': boolean,
		}) 
	}
	
}

//# sourceMappingURL=view.view.tree.d.ts.map
declare namespace $.$$ {
    class $mpds_visavis_lib_plotly_view extends $.$mpds_visavis_lib_plotly_view {
        size(): {
            width: number;
            height: number;
        } | undefined;
        Plotly_root(): any;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
}

declare namespace $ {
    let $mol_data_boolean: (val: boolean) => boolean;
}

declare namespace $ {
    function $mol_data_variant<Sub extends $mol_data_value[]>(...sub: Sub): ((val: Parameters<Sub[number]>[0]) => ReturnType<Sub[number]>) & {
        config: Sub;
        Value: ReturnType<Sub[number]>;
    };
}

declare namespace $ {

	type $mpds_visavis_lib_plotly_view__data__TRZWBGAL = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['data_shown'] >
		,
		ReturnType< $mpds_visavis_lib_plotly_view['data'] >
	>
	type $mpds_visavis_lib_plotly_view__layout__47SU0LNO = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['layout'] >
		,
		ReturnType< $mpds_visavis_lib_plotly_view['layout'] >
	>
	type $mpds_visavis_lib_plotly_view__plot_options__RZHAGWUB = $mol_type_enforce<
		({ 
			'displaylogo': boolean,
			'displayModeBar': boolean,
			'staticPlot': boolean,
		}) 
		,
		ReturnType< $mpds_visavis_lib_plotly_view['plot_options'] >
	>
	type $mpds_visavis_plot_legend_cmp__labels__ZQWU57MI = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['cmp_labels'] >
		,
		ReturnType< $mpds_visavis_plot_legend_cmp['labels'] >
	>
	type $mpds_visavis_plot_legend_cmp__colorset__890IYGYX = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['colorset'] >
		,
		ReturnType< $mpds_visavis_plot_legend_cmp['colorset'] >
	>
	type $mol_view__sub__V4SAWL9W = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__style__F2SAWZC6 = $mol_type_enforce<
		({ 
			'background': ReturnType< $mpds_visavis_plot_cube['heatmap_color'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__sub__G8A1ESSI = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows__WOAU7XF0 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['heatmap_color_list'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub__1SMWLKSU = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_view__sub__90F7QV96 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['plot_body'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_check_box__title__VPG682VW = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked__5BMLT7Y3 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['fixel_checked'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_check_box__hint__HST58GMY = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['hint'] >
	>
	type $mol_check_box__title__5QFV1TAT = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked__GS5TY2PP = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['nonformers_checked'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_check_box__title__CD3J7W5E = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked__693OUJXT = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['intersection_only'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_select__value__U12KROO2 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['x_sort'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__dictionary__WP76CXQ8 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['sort_dict'] >
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_labeler__title__XJRBKWQV = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__Q6YQI7EO = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['X_order_select'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_select__value__UGVW9BVD = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['y_sort'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__dictionary__0UDTW4CQ = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['sort_dict'] >
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_labeler__title__DYSE376A = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__SQIQBIF5 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['Y_order_select'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_select__value__6H3X1J6U = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['z_sort'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__dictionary__D5GTTWL5 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['sort_dict'] >
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_labeler__title__H5CLLTOG = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__83A6EDXY = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['Z_order_select'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_view__sub__CYG8UHZL = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['setup'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mpds_visavis_plot_cube extends $mol_view {
		subscribe_click( ): any
		data_shown( ): readonly(any)[]
		layout( ): Record<string, any>
		Plotly_root( ): ReturnType< ReturnType< $mpds_visavis_plot_cube['Root'] >['Plotly_root'] >
		Root( ): $mpds_visavis_lib_plotly_view
		cmp_labels( ): readonly(any)[]
		Cmp_legend( ): $mpds_visavis_plot_legend_cmp
		value_min( ): number
		Heatmap_min( ): $mol_view
		heatmap_color( id: any): string
		Heatmap_color( id: any): $mol_view
		value_max( ): number
		Heatmap_max( ): $mol_view
		heatmap_color_list( ): readonly(any)[]
		Heatmap_legend( ): $mol_list
		Side_right( ): $mol_scroll
		plot_body( ): readonly(any)[]
		Plot( ): $mol_view
		fixel_checked( next?: boolean ): boolean
		Fixel( ): $mol_check_box
		nonformers_checked( next?: boolean ): boolean
		Nonformers( ): $mol_check_box
		intersection_only( next?: boolean ): boolean
		Intersection_on( ): $mol_check_box
		sort_dict( ): Record<string, any>
		X_order_select( ): $mol_select
		X_order( ): $mol_labeler
		Y_order_select( ): $mol_select
		Y_order( ): $mol_labeler
		Z_order_select( ): $mol_select
		Z_order( ): $mol_labeler
		setup( ): readonly(any)[]
		Setup( ): $mol_view
		plot_raw( ): $mpds_visavis_plot_raw
		auto( ): readonly(any)[]
		multi_jsons( next?: any ): any
		show_setup( ): boolean
		show_fixel( next?: boolean ): boolean
		heatmap( next?: boolean ): boolean
		order( id: any): readonly(number)[]
		order_current( next?: string ): string
		x_op( next?: boolean ): boolean
		y_op( next?: boolean ): boolean
		z_op( next?: boolean ): boolean
		x_sort( next?: string ): string
		y_sort( next?: string ): string
		z_sort( next?: string ): string
		cube_click( next?: any ): any
		colorset( ): readonly(any)[]
		heatmap_colors( ): readonly(any)[]
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=cube.view.tree.d.ts.map
declare namespace $.$$ {
    type Prop_name = keyof ReturnType<typeof $mpds_visavis_elements_list.prop_names>;
    export class $mpds_visavis_plot_cube extends $.$mpds_visavis_plot_cube {
        setup(): ($mol_check_box | $mol_labeler)[];
        plot_body(): ($.$mol_scroll | $.$mpds_visavis_plot_legend_cmp | $.$mpds_visavis_lib_plotly_view)[];
        json(): Readonly<{
            answerto?: string | undefined;
            use_visavis_type: string;
            payload: Readonly<{
                tcube?: boolean | undefined;
                xtitle?: string | undefined;
                ytitle?: string | undefined;
                ztitle?: string | undefined;
                fixel: number | boolean | null;
                points: Readonly<{
                    x: readonly number[];
                    y: readonly number[];
                    z: readonly number[];
                    v: readonly number[];
                    labels: readonly string[];
                }>;
            }>;
        }>;
        value_list(): number[];
        value_min(): number;
        value_max(): number;
        sort_dict(): Readonly<{
            num: string;
            nump: string;
            size: string;
            rea: string;
            rpp: string;
            rion: string;
            rcov: string;
            rmet: string;
            tmelt: string;
            eneg: string;
        }>;
        order(order: Prop_name): number[];
        heatmap(): boolean;
        heatmap_color(index: number): any;
        heatmap_color_list(): $mol_view[];
        marker(color_id: number): {
            size: number;
            opacity: number;
            colorscale?: string | undefined;
            color: any;
        };
        scatter3d_common(): {
            type: string;
            mode: string;
            hoverinfo: string;
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
        data_nonformers(): {
            x: number[];
            y: number[];
            z: number[];
            text: readonly string[];
            marker: {
                color: string;
                size: number;
                opacity: number;
            };
            type: string;
            mode: string;
            hoverinfo: string;
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
            x: number[];
            y: number[];
            z: number[];
            text: readonly string[];
            marker: {
                size: number;
                opacity: number;
                colorscale?: string | undefined;
                color: any;
            };
            type: string;
            mode: string;
            hoverinfo: string;
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
        scatters(): {
            intersects: {
                marker: {
                    size: number;
                    opacity: number;
                    colorscale?: string | undefined;
                    color: any;
                };
                x: number[];
                y: number[];
                z: number[];
                v: number[];
                text: string[];
                type: string;
                mode: string;
                hoverinfo: string;
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
            scatters_once: Map<number, {
                marker: {
                    size: number;
                    opacity: number;
                    colorscale?: string | undefined;
                    color: any;
                };
                x: number[];
                y: number[];
                z: number[];
                v: number[];
                text: string[];
                type: string;
                mode: string;
                hoverinfo: string;
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
            }>;
        };
        multi_dataset(): any[] | null;
        cmp_labels(): any;
        data_shown(): any[];
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
                ticktext: string[];
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
                ticktext: string[];
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
                ticktext: string[];
                tickvals: any;
            };
            camera: {
                projection: {
                    type: string;
                };
            };
        };
        subscribe_click(): void;
        layout(): {
            font: {};
            showlegend: boolean;
            scene: any;
            margin: {
                l: number;
                r: number;
                b: number;
                t: number;
                pad: number;
            };
        };
        ter_op(op: 'sum' | 'diff' | 'product' | 'ratio' | 'max' | 'min', a: number, b: number, c: number): number;
        convert_to_axes(x_src: readonly number[], y_src: readonly number[], z_src: readonly number[], x_sort: Prop_name, y_sort: Prop_name, z_sort: Prop_name, x_op?: any, y_op?: any, z_op?: any): {
            x: number[];
            y: number[];
            z: number[];
        };
        order_els(prop: Prop_name): string[];
    }
    export {};
}

declare namespace $ {
}

declare namespace $.$$ {
}

declare namespace $ {
    function $mol_data_dict<Sub extends $mol_data_value>(sub: Sub): ((val: Readonly<Record<string, ReturnType<Sub>>>) => Readonly<Record<string, ReturnType<Sub>>>) & {
        config: Sub;
        Value: Readonly<Record<string, ReturnType<Sub>>>;
    };
}

declare namespace $ {

	type $mol_view__sub__WXQLC8QL = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mpds_visavis_lib_plotly_view__data__9V6ZDUNK = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_phase['data'] >
		,
		ReturnType< $mpds_visavis_lib_plotly_view['data'] >
	>
	type $mpds_visavis_lib_plotly_view__layout__LMNEM7TP = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_phase['layout'] >
		,
		ReturnType< $mpds_visavis_lib_plotly_view['layout'] >
	>
	export class $mpds_visavis_plot_phase extends $mol_book2 {
		subscribe_events( ): any
		json_title_b( ): string
		json_title_a( ): string
		json_title_c( ): string
		layout_shapes( ): readonly(any)[]
		annotations( ): readonly(any)[]
		triangle_annotation_text( ): string
		json_comp_range( ): readonly(any)[]
		show_ticks( ): boolean
		json_temp( ): readonly(any)[]
		not_demo( ): boolean
		label( next?: string ): string
		Label( ): $mol_view
		Plotly_root( ): ReturnType< ReturnType< $mpds_visavis_plot_phase['Root'] >['Plotly_root'] >
		data( ): readonly(any)[]
		layout( ): Record<string, any>
		Root( ): $mpds_visavis_lib_plotly_view
		plot_raw( ): $mpds_visavis_plot_raw
		auto( ): readonly(any)[]
		phase_click( next?: any ): any
		data_demo( ): boolean
		colors_by_nphases( ): ({ 
			'1': string,
			'alt_1': string,
			'3': string,
			'4': string,
			'5': string,
			'default': string,
		}) 
		line( ): ({ 
			'phase': ({ 
				'width': number,
			}) ,
			'compound': ({ 
				'width': number,
				'color': string,
			}) ,
			'default': ({ 
				'width': number,
				'color': string,
			}) ,
		}) 
		is_triangle( ): boolean
		triangle( ): ({ 
			'datamock': readonly(any)[],
			'layout': ({ 
				'hovermode': string,
				'font': ({ 
					'size': number,
					'color': string,
					'family': string,
				}) ,
				'ternary': ({ 
					'aaxis': ({ 
						'title': ReturnType< $mpds_visavis_plot_phase['json_title_b'] >,
						'ticks': string,
						'showline': boolean,
						'showgrid': boolean,
						'fixedrange': boolean,
						'linewidth': number,
					}) ,
					'baxis': ({ 
						'title': ReturnType< $mpds_visavis_plot_phase['json_title_a'] >,
						'ticks': string,
						'showline': boolean,
						'showgrid': boolean,
						'fixedrange': boolean,
						'linewidth': number,
					}) ,
					'caxis': ({ 
						'title': ReturnType< $mpds_visavis_plot_phase['json_title_c'] >,
						'ticks': string,
						'showline': boolean,
						'showgrid': boolean,
						'fixedrange': boolean,
						'linewidth': number,
					}) ,
				}) ,
				'shapes': ReturnType< $mpds_visavis_plot_phase['layout_shapes'] >,
				'annotations': ReturnType< $mpds_visavis_plot_phase['annotations'] >,
			}) ,
		}) 
		triangle_shape_fix( ): ({ 
			'type': string,
			'path': string,
			'line': ({ 
				'width': number,
			}) ,
		}) 
		triangle_annotations( ): readonly(any)[]
		rectangle( ): ({ 
			'datamock': readonly(any)[],
			'layout': ({ 
				'hovermode': string,
				'font': ({ 
					'size': number,
					'color': string,
					'family': string,
				}) ,
				'xaxis': ({ 
					'title': string,
					'range': ReturnType< $mpds_visavis_plot_phase['json_comp_range'] >,
					'fixedrange': boolean,
					'showticks': ReturnType< $mpds_visavis_plot_phase['show_ticks'] >,
					'showline': boolean,
					'zeroline': boolean,
					'showgrid': boolean,
					'ticklen': number,
					'tickfont': ({ 
						'size': number,
					}) ,
					'hoverformat': string,
				}) ,
				'xaxis2': ({ 
					'range': ReturnType< $mpds_visavis_plot_phase['json_comp_range'] >,
					'fixedrange': boolean,
					'showticks': ReturnType< $mpds_visavis_plot_phase['show_ticks'] >,
					'showline': boolean,
					'zeroline': boolean,
					'showgrid': boolean,
					'ticklen': number,
					'tickfont': ({ 
						'size': number,
					}) ,
					'side': string,
					'overlaying': string,
				}) ,
				'yaxis': ({ 
					'title': string,
					'range': ReturnType< $mpds_visavis_plot_phase['json_temp'] >,
					'fixedrange': boolean,
					'showticks': ReturnType< $mpds_visavis_plot_phase['show_ticks'] >,
					'showticklabels': ReturnType< $mpds_visavis_plot_phase['not_demo'] >,
					'showline': boolean,
					'zeroline': boolean,
					'showgrid': boolean,
					'ticklen': number,
					'tickfont': ({ 
						'size': number,
					}) ,
					'hoverformat': string,
				}) ,
				'yaxis2': ({ 
					'range': ReturnType< $mpds_visavis_plot_phase['json_temp'] >,
					'fixedrange': boolean,
					'showticks': ReturnType< $mpds_visavis_plot_phase['show_ticks'] >,
					'showticklabels': ReturnType< $mpds_visavis_plot_phase['not_demo'] >,
					'showline': boolean,
					'zeroline': boolean,
					'showgrid': boolean,
					'ticklen': number,
					'tickfont': ({ 
						'size': number,
					}) ,
					'side': string,
					'overlaying': string,
				}) ,
				'shapes': ReturnType< $mpds_visavis_plot_phase['layout_shapes'] >,
				'annotations': ReturnType< $mpds_visavis_plot_phase['annotations'] >,
			}) ,
		}) 
		rectangle_annotations( ): readonly(any)[]
		annotation( ): ({ 
			'show_arrow': boolean,
			'font': ({ 
				'size': number,
			}) ,
		}) 
		annotation_textangle( id: any): number
		plot_options( ): ({ 
			'displaylogo': boolean,
			'displayModeBar': boolean,
			'staticPlot': boolean,
		}) 
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=phase.view.tree.d.ts.map
declare namespace $.$$ {
    const Label_json: (val: any) => [string, number[], number | null];
    export function inside_triangle(x: number, y: number, x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): boolean;
    export function cartesian_to_ternary(x: number, y: number): number[];
    export function fix_comp_impossible(comp_range: any, obj_left: any, obj_right: any): any;
    export class $mpds_visavis_plot_phase extends $.$mpds_visavis_plot_phase {
        json(): Readonly<{
            diatype?: string | undefined;
            title_a?: string | undefined;
            title_b?: string | undefined;
            object_repr?: string | undefined;
            comp_end?: Readonly<Record<string, number>> | undefined;
            comp_range?: readonly number[] | undefined;
            comp_start?: Readonly<Record<string, number>> | undefined;
            title_c?: string | undefined;
            comp_a?: Readonly<Record<string, number>> | undefined;
            comp_b?: Readonly<Record<string, number>> | undefined;
            comp_c?: Readonly<Record<string, number>> | undefined;
            range_a?: readonly number[] | undefined;
            range_b?: readonly number[] | undefined;
            range_c?: readonly number[] | undefined;
            use_visavis_type: string;
            labels: readonly [string, number[], number | null][];
            naxes: number;
            arity: number;
            chemical_elements: readonly string[];
            temp: readonly number[];
            shapes: readonly Readonly<{
                chemical_elements?: readonly string[] | undefined;
                label?: string | undefined;
                phase?: string | undefined;
                nphases?: number | undefined;
                is_solid?: boolean | undefined;
                phase_id?: number | undefined;
                reflabel?: number | undefined;
                kind: string;
                svgpath: string;
            }>[];
            entry: string;
            object_type: string;
        }>;
        json_title_b(): string;
        json_title_a(): string;
        json_title_c(): string;
        json_comp_range(): readonly number[];
        json_temp(): readonly number[];
        data_demo(): boolean;
        not_demo(): boolean;
        show_ticks(): boolean;
        is_triangle(): boolean;
        layout_shapes(): ({
            type: string;
            path: string;
            line: ({
                "width": number;
            });
        } | {
            fillcolor?: any;
            fillOpacity?: number | undefined;
            type: string;
            path: string;
            line: any;
        })[];
        annotation_textangle(label: ReturnType<typeof Label_json>): 0 | -65;
        triangle_annotation_text(): string;
        annotations(): any[];
        subscribe_events(): void;
        data(): readonly any[];
        layout(): {
            hovermode: string;
            font: ({
                "size": number;
                "color": string;
                "family": string;
            });
            xaxis: ({
                "title": string;
                "range": ReturnType<$.$mpds_visavis_plot_phase["json_comp_range"]>;
                "fixedrange": boolean;
                "showticks": ReturnType<$.$mpds_visavis_plot_phase["show_ticks"]>;
                "showline": boolean;
                "zeroline": boolean;
                "showgrid": boolean;
                "ticklen": number;
                "tickfont": ({
                    "size": number;
                });
                "hoverformat": string;
            });
            xaxis2: ({
                "range": ReturnType<$.$mpds_visavis_plot_phase["json_comp_range"]>;
                "fixedrange": boolean;
                "showticks": ReturnType<$.$mpds_visavis_plot_phase["show_ticks"]>;
                "showline": boolean;
                "zeroline": boolean;
                "showgrid": boolean;
                "ticklen": number;
                "tickfont": ({
                    "size": number;
                });
                "side": string;
                "overlaying": string;
            });
            yaxis: ({
                "title": string;
                "range": ReturnType<$.$mpds_visavis_plot_phase["json_temp"]>;
                "fixedrange": boolean;
                "showticks": ReturnType<$.$mpds_visavis_plot_phase["show_ticks"]>;
                "showticklabels": ReturnType<$.$mpds_visavis_plot_phase["not_demo"]>;
                "showline": boolean;
                "zeroline": boolean;
                "showgrid": boolean;
                "ticklen": number;
                "tickfont": ({
                    "size": number;
                });
                "hoverformat": string;
            });
            yaxis2: ({
                "range": ReturnType<$.$mpds_visavis_plot_phase["json_temp"]>;
                "fixedrange": boolean;
                "showticks": ReturnType<$.$mpds_visavis_plot_phase["show_ticks"]>;
                "showticklabels": ReturnType<$.$mpds_visavis_plot_phase["not_demo"]>;
                "showline": boolean;
                "zeroline": boolean;
                "showgrid": boolean;
                "ticklen": number;
                "tickfont": ({
                    "size": number;
                });
                "side": string;
                "overlaying": string;
            });
            shapes: ReturnType<$.$mpds_visavis_plot_phase["layout_shapes"]>;
            annotations: ReturnType<$.$mpds_visavis_plot_phase["annotations"]>;
        } | {
            hovermode: string;
            font: ({
                "size": number;
                "color": string;
                "family": string;
            });
            ternary: ({
                "aaxis": ({
                    "title": ReturnType<$.$mpds_visavis_plot_phase["json_title_b"]>;
                    "ticks": string;
                    "showline": boolean;
                    "showgrid": boolean;
                    "fixedrange": boolean;
                    "linewidth": number;
                });
                "baxis": ({
                    "title": ReturnType<$.$mpds_visavis_plot_phase["json_title_a"]>;
                    "ticks": string;
                    "showline": boolean;
                    "showgrid": boolean;
                    "fixedrange": boolean;
                    "linewidth": number;
                });
                "caxis": ({
                    "title": ReturnType<$.$mpds_visavis_plot_phase["json_title_c"]>;
                    "ticks": string;
                    "showline": boolean;
                    "showgrid": boolean;
                    "fixedrange": boolean;
                    "linewidth": number;
                });
            });
            shapes: ReturnType<$.$mpds_visavis_plot_phase["layout_shapes"]>;
            annotations: ReturnType<$.$mpds_visavis_plot_phase["annotations"]>;
        };
        pd_fix_triangle(): void;
    }
    export {};
}

declare namespace $ {
}

declare namespace $.$$ {
}

declare namespace $ {

	export class $mpds_visavis_plot_bar extends $mpds_visavis_lib_plotly_view {
		subscribe_click( ): any
		plot_raw( ): $mpds_visavis_plot_raw
		auto( ): readonly(any)[]
		bar_click( next?: any ): any
	}
	
}

//# sourceMappingURL=bar.view.tree.d.ts.map
declare namespace $.$$ {
    const $mpds_visavis_plot_bar_json: ((val: {
        payload2?: {
            xtitle?: string | undefined;
            ytitle?: string | undefined;
            x: readonly number[];
            y: readonly number[];
            dx: number;
        } | undefined;
        payload: {
            xtitle?: string | undefined;
            ytitle?: string | undefined;
            x: readonly number[];
            y: readonly number[];
            dx: number;
        };
    }) => Readonly<{
        payload2?: Readonly<{
            xtitle?: string | undefined;
            ytitle?: string | undefined;
            x: readonly number[];
            y: readonly number[];
            dx: number;
        }> | undefined;
        payload: Readonly<{
            xtitle?: string | undefined;
            ytitle?: string | undefined;
            x: readonly number[];
            y: readonly number[];
            dx: number;
        }>;
    }>) & {
        config: {
            payload: ((val: {
                xtitle?: string | undefined;
                ytitle?: string | undefined;
                x: readonly number[];
                y: readonly number[];
                dx: number;
            }) => Readonly<{
                xtitle?: string | undefined;
                ytitle?: string | undefined;
                x: readonly number[];
                y: readonly number[];
                dx: number;
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
                    xtitle?: string | undefined;
                    ytitle?: string | undefined;
                    x: readonly number[];
                    y: readonly number[];
                    dx: number;
                }>;
            };
            payload2: ((val: {
                xtitle?: string | undefined;
                ytitle?: string | undefined;
                x: readonly number[];
                y: readonly number[];
                dx: number;
            } | undefined) => Readonly<{
                xtitle?: string | undefined;
                ytitle?: string | undefined;
                x: readonly number[];
                y: readonly number[];
                dx: number;
            }> | undefined) & {
                config: {
                    sub: ((val: {
                        xtitle?: string | undefined;
                        ytitle?: string | undefined;
                        x: readonly number[];
                        y: readonly number[];
                        dx: number;
                    }) => Readonly<{
                        xtitle?: string | undefined;
                        ytitle?: string | undefined;
                        x: readonly number[];
                        y: readonly number[];
                        dx: number;
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
                            xtitle?: string | undefined;
                            ytitle?: string | undefined;
                            x: readonly number[];
                            y: readonly number[];
                            dx: number;
                        }>;
                    };
                    fallback: (() => Readonly<{
                        xtitle?: string | undefined;
                        ytitle?: string | undefined;
                        x: readonly number[];
                        y: readonly number[];
                        dx: number;
                    }>) | undefined;
                };
                Value: Readonly<{
                    xtitle?: string | undefined;
                    ytitle?: string | undefined;
                    x: readonly number[];
                    y: readonly number[];
                    dx: number;
                }> | undefined;
            };
        };
        Value: Readonly<{
            payload2?: Readonly<{
                xtitle?: string | undefined;
                ytitle?: string | undefined;
                x: readonly number[];
                y: readonly number[];
                dx: number;
            }> | undefined;
            payload: Readonly<{
                xtitle?: string | undefined;
                ytitle?: string | undefined;
                x: readonly number[];
                y: readonly number[];
                dx: number;
            }>;
        }>;
    };
    class $mpds_visavis_plot_bar extends $.$mpds_visavis_plot_bar {
        json(): Readonly<{
            payload2?: Readonly<{
                xtitle?: string | undefined;
                ytitle?: string | undefined;
                x: readonly number[];
                y: readonly number[];
                dx: number;
            }> | undefined;
            payload: Readonly<{
                xtitle?: string | undefined;
                ytitle?: string | undefined;
                x: readonly number[];
                y: readonly number[];
                dx: number;
            }>;
        }>;
        subscribe_click(): void;
        layout(): {
            showlegend: boolean;
            legend: {
                x: number;
                y: number;
                font: {
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
            name: string;
        }[];
    }
}

declare namespace $ {
}

declare namespace $ {
    const $mpds_visavis_lib_pca: any;
}

declare namespace $ {

	type $mpds_visavis_lib_plotly_view__data__RYB5RRXA = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_discovery['data'] >
		,
		ReturnType< $mpds_visavis_lib_plotly_view['data'] >
	>
	type $mpds_visavis_lib_plotly_view__layout__KYGTZFYZ = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_discovery['layout'] >
		,
		ReturnType< $mpds_visavis_lib_plotly_view['layout'] >
	>
	type $mpds_visavis_plot_legend_cmp__labels__DVXMLTLG = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_discovery['cmp_labels'] >
		,
		ReturnType< $mpds_visavis_plot_legend_cmp['labels'] >
	>
	type $mpds_visavis_plot_legend_cmp__colorset__JUPOM2DW = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_discovery['colorset'] >
		,
		ReturnType< $mpds_visavis_plot_legend_cmp['colorset'] >
	>
	type $mol_check_list__option_checked__LHGHOFMQ = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_discovery['elemental_checked'] >
		,
		ReturnType< $mol_check_list['option_checked'] >
	>
	type $mol_check_list__options__CKRX3EO7 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_discovery['elementals_dict'] >
		,
		ReturnType< $mol_check_list['options'] >
	>
	type $mol_labeler__title__PLOBQE1D = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__51IEVP1B = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_discovery['Elementals_check'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_view__sub__PLIH8A9A = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mpds_visavis_plot_discovery extends $mol_view {
		subscribe_click( ): any
		Plotly_root( ): ReturnType< ReturnType< $mpds_visavis_plot_discovery['Plot'] >['Plotly_root'] >
		data( ): readonly(any)[]
		layout( ): Record<string, any>
		Plot( ): $mpds_visavis_lib_plotly_view
		cmp_labels( ): readonly(any)[]
		Cmp_legend( ): $mpds_visavis_plot_legend_cmp
		elemental_checked( id: any, next?: boolean ): boolean
		elementals_dict( ): Record<string, any>
		Elementals_check( ): $mol_check_list
		Elementals( ): $mol_labeler
		Setup( ): $mol_view
		plot_raw( ): $mpds_visavis_plot_raw
		auto( ): readonly(any)[]
		json_cmp( next?: any ): any
		elementals_on( next?: readonly(any)[] ): readonly(any)[]
		show_setup( ): boolean
		discovery_click( next?: any ): any
		colorset( ): readonly(any)[]
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=discovery.view.tree.d.ts.map
declare namespace $.$$ {
    const $mpds_visavis_plot_discovery_json: ((val: {
        use_visavis_type: string;
        answerto: string;
        payload: {
            points: readonly (readonly number[])[];
        };
    }) => Readonly<{
        use_visavis_type: string;
        answerto: string;
        payload: Readonly<{
            points: readonly (readonly number[])[];
        }>;
    }>) & {
        config: {
            use_visavis_type: ((val: string) => string) & {
                config: string;
                Value: string;
            };
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
            use_visavis_type: string;
            answerto: string;
            payload: Readonly<{
                points: readonly (readonly number[])[];
            }>;
        }>;
    };
    class $mpds_visavis_plot_discovery extends $.$mpds_visavis_plot_discovery {
        sub(): ($mol_view | $.$mpds_visavis_plot_legend_cmp | $.$mpds_visavis_lib_plotly_view)[];
        json(): Readonly<{
            use_visavis_type: string;
            answerto: string;
            payload: Readonly<{
                points: readonly (readonly number[])[];
            }>;
        }>;
        elementals_dict(): Readonly<{
            num: string;
            nump: string;
            size: string;
            rea: string;
            rpp: string;
            rion: string;
            rcov: string;
            rmet: string;
            tmelt: string;
            eneg: string;
        }>;
        subscribe_click(): void;
        layout(): {
            font: {
                family: string;
            };
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
                    size: number;
                };
            })[];
        };
        elementals_on(next?: any): ("num" | "nump" | "size" | "rea" | "rpp" | "rion" | "rcov" | "rmet" | "tmelt" | "eneg")[];
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
                color: any;
                opacity: number;
                symbol: string;
            };
        }[];
        cmp_labels(): any[];
    }
}

declare namespace $ {
}

declare namespace $.$$ {
}

declare namespace $ {

	export class $mpds_visavis_plot_eigen extends $mpds_visavis_lib_plotly_view {
		plot_raw( ): $mpds_visavis_plot_raw
	}
	
}

//# sourceMappingURL=eigen.view.tree.d.ts.map
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
    export const $mpds_visavis_plot_eigen_json: ((val: {
        object_type: string;
        sample: {
            material: {
                object_repr?: string | undefined;
                chemical_elements: readonly string[];
                phase: string;
                phase_id: number;
                entry: string;
                chemical_formula: string;
                condition: readonly {
                    units?: string | undefined;
                    name: string;
                    scalar: readonly {
                        value: number;
                    }[];
                }[];
            };
            measurement: readonly {
                condition?: readonly {
                    refers_to?: string | undefined;
                    name: string;
                    scalar: number;
                    units: string;
                }[] | undefined;
                raw_data?: string | undefined;
                data_type: string;
                property: {
                    scalar?: string | number | undefined;
                    matrix: {
                        bands: readonly (readonly number[])[];
                        kpoints: readonly (readonly number[])[];
                    } | {
                        dos: readonly number[];
                        levels: readonly number[];
                    };
                    name: string;
                    units: string;
                    category: string;
                    domain: string;
                };
            }[];
        };
        version: string;
        reference: {
            phase?: string | undefined;
            entry: string;
        };
    }) => Readonly<{
        object_type: string;
        sample: Readonly<{
            material: Readonly<{
                object_repr?: string | undefined;
                chemical_elements: readonly string[];
                phase: string;
                phase_id: number;
                entry: string;
                chemical_formula: string;
                condition: readonly Readonly<{
                    units?: string | undefined;
                    name: string;
                    scalar: readonly Readonly<{
                        value: number;
                    }>[];
                }>[];
            }>;
            measurement: readonly Readonly<{
                condition?: readonly Readonly<{
                    refers_to?: string | undefined;
                    name: string;
                    scalar: number;
                    units: string;
                }>[] | undefined;
                raw_data?: string | undefined;
                data_type: string;
                property: Readonly<{
                    scalar?: string | number | undefined;
                    matrix: Readonly<{
                        bands: readonly (readonly number[])[];
                        kpoints: readonly (readonly number[])[];
                    }> | Readonly<{
                        dos: readonly number[];
                        levels: readonly number[];
                    }>;
                    name: string;
                    units: string;
                    category: string;
                    domain: string;
                }>;
            }>[];
        }>;
        version: string;
        reference: Readonly<{
            phase?: string | undefined;
            entry: string;
        }>;
    }>) & {
        config: {
            sample: ((val: {
                material: {
                    object_repr?: string | undefined;
                    chemical_elements: readonly string[];
                    phase: string;
                    phase_id: number;
                    entry: string;
                    chemical_formula: string;
                    condition: readonly {
                        units?: string | undefined;
                        name: string;
                        scalar: readonly {
                            value: number;
                        }[];
                    }[];
                };
                measurement: readonly {
                    condition?: readonly {
                        refers_to?: string | undefined;
                        name: string;
                        scalar: number;
                        units: string;
                    }[] | undefined;
                    raw_data?: string | undefined;
                    data_type: string;
                    property: {
                        scalar?: string | number | undefined;
                        matrix: {
                            bands: readonly (readonly number[])[];
                            kpoints: readonly (readonly number[])[];
                        } | {
                            dos: readonly number[];
                            levels: readonly number[];
                        };
                        name: string;
                        units: string;
                        category: string;
                        domain: string;
                    };
                }[];
            }) => Readonly<{
                material: Readonly<{
                    object_repr?: string | undefined;
                    chemical_elements: readonly string[];
                    phase: string;
                    phase_id: number;
                    entry: string;
                    chemical_formula: string;
                    condition: readonly Readonly<{
                        units?: string | undefined;
                        name: string;
                        scalar: readonly Readonly<{
                            value: number;
                        }>[];
                    }>[];
                }>;
                measurement: readonly Readonly<{
                    condition?: readonly Readonly<{
                        refers_to?: string | undefined;
                        name: string;
                        scalar: number;
                        units: string;
                    }>[] | undefined;
                    raw_data?: string | undefined;
                    data_type: string;
                    property: Readonly<{
                        scalar?: string | number | undefined;
                        matrix: Readonly<{
                            bands: readonly (readonly number[])[];
                            kpoints: readonly (readonly number[])[];
                        }> | Readonly<{
                            dos: readonly number[];
                            levels: readonly number[];
                        }>;
                        name: string;
                        units: string;
                        category: string;
                        domain: string;
                    }>;
                }>[];
            }>) & {
                config: {
                    material: ((val: {
                        object_repr?: string | undefined;
                        chemical_elements: readonly string[];
                        phase: string;
                        phase_id: number;
                        entry: string;
                        chemical_formula: string;
                        condition: readonly {
                            units?: string | undefined;
                            name: string;
                            scalar: readonly {
                                value: number;
                            }[];
                        }[];
                    }) => Readonly<{
                        object_repr?: string | undefined;
                        chemical_elements: readonly string[];
                        phase: string;
                        phase_id: number;
                        entry: string;
                        chemical_formula: string;
                        condition: readonly Readonly<{
                            units?: string | undefined;
                            name: string;
                            scalar: readonly Readonly<{
                                value: number;
                            }>[];
                        }>[];
                    }>) & {
                        config: {
                            chemical_formula: (val: string) => string;
                            chemical_elements: ((val: readonly string[]) => readonly string[]) & {
                                config: (val: string) => string;
                                Value: readonly string[];
                            };
                            condition: ((val: readonly {
                                units?: string | undefined;
                                name: string;
                                scalar: readonly {
                                    value: number;
                                }[];
                            }[]) => readonly Readonly<{
                                units?: string | undefined;
                                name: string;
                                scalar: readonly Readonly<{
                                    value: number;
                                }>[];
                            }>[]) & {
                                config: ((val: {
                                    units?: string | undefined;
                                    name: string;
                                    scalar: readonly {
                                        value: number;
                                    }[];
                                }) => Readonly<{
                                    units?: string | undefined;
                                    name: string;
                                    scalar: readonly Readonly<{
                                        value: number;
                                    }>[];
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
                                        units?: string | undefined;
                                        name: string;
                                        scalar: readonly Readonly<{
                                            value: number;
                                        }>[];
                                    }>;
                                };
                                Value: readonly Readonly<{
                                    units?: string | undefined;
                                    name: string;
                                    scalar: readonly Readonly<{
                                        value: number;
                                    }>[];
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
                            object_repr?: string | undefined;
                            chemical_elements: readonly string[];
                            phase: string;
                            phase_id: number;
                            entry: string;
                            chemical_formula: string;
                            condition: readonly Readonly<{
                                units?: string | undefined;
                                name: string;
                                scalar: readonly Readonly<{
                                    value: number;
                                }>[];
                            }>[];
                        }>;
                    };
                    measurement: ((val: readonly {
                        condition?: readonly {
                            refers_to?: string | undefined;
                            name: string;
                            scalar: number;
                            units: string;
                        }[] | undefined;
                        raw_data?: string | undefined;
                        data_type: string;
                        property: {
                            scalar?: string | number | undefined;
                            matrix: {
                                bands: readonly (readonly number[])[];
                                kpoints: readonly (readonly number[])[];
                            } | {
                                dos: readonly number[];
                                levels: readonly number[];
                            };
                            name: string;
                            units: string;
                            category: string;
                            domain: string;
                        };
                    }[]) => readonly Readonly<{
                        condition?: readonly Readonly<{
                            refers_to?: string | undefined;
                            name: string;
                            scalar: number;
                            units: string;
                        }>[] | undefined;
                        raw_data?: string | undefined;
                        data_type: string;
                        property: Readonly<{
                            scalar?: string | number | undefined;
                            matrix: Readonly<{
                                bands: readonly (readonly number[])[];
                                kpoints: readonly (readonly number[])[];
                            }> | Readonly<{
                                dos: readonly number[];
                                levels: readonly number[];
                            }>;
                            name: string;
                            units: string;
                            category: string;
                            domain: string;
                        }>;
                    }>[]) & {
                        config: ((val: {
                            condition?: readonly {
                                refers_to?: string | undefined;
                                name: string;
                                scalar: number;
                                units: string;
                            }[] | undefined;
                            raw_data?: string | undefined;
                            data_type: string;
                            property: {
                                scalar?: string | number | undefined;
                                matrix: {
                                    bands: readonly (readonly number[])[];
                                    kpoints: readonly (readonly number[])[];
                                } | {
                                    dos: readonly number[];
                                    levels: readonly number[];
                                };
                                name: string;
                                units: string;
                                category: string;
                                domain: string;
                            };
                        }) => Readonly<{
                            condition?: readonly Readonly<{
                                refers_to?: string | undefined;
                                name: string;
                                scalar: number;
                                units: string;
                            }>[] | undefined;
                            raw_data?: string | undefined;
                            data_type: string;
                            property: Readonly<{
                                scalar?: string | number | undefined;
                                matrix: Readonly<{
                                    bands: readonly (readonly number[])[];
                                    kpoints: readonly (readonly number[])[];
                                }> | Readonly<{
                                    dos: readonly number[];
                                    levels: readonly number[];
                                }>;
                                name: string;
                                units: string;
                                category: string;
                                domain: string;
                            }>;
                        }>) & {
                            config: {
                                data_type: (val: string) => string;
                                property: ((val: {
                                    scalar?: string | number | undefined;
                                    matrix: {
                                        bands: readonly (readonly number[])[];
                                        kpoints: readonly (readonly number[])[];
                                    } | {
                                        dos: readonly number[];
                                        levels: readonly number[];
                                    };
                                    name: string;
                                    units: string;
                                    category: string;
                                    domain: string;
                                }) => Readonly<{
                                    scalar?: string | number | undefined;
                                    matrix: Readonly<{
                                        bands: readonly (readonly number[])[];
                                        kpoints: readonly (readonly number[])[];
                                    }> | Readonly<{
                                        dos: readonly number[];
                                        levels: readonly number[];
                                    }>;
                                    name: string;
                                    units: string;
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
                                        scalar?: string | number | undefined;
                                        matrix: Readonly<{
                                            bands: readonly (readonly number[])[];
                                            kpoints: readonly (readonly number[])[];
                                        }> | Readonly<{
                                            dos: readonly number[];
                                            levels: readonly number[];
                                        }>;
                                        name: string;
                                        units: string;
                                        category: string;
                                        domain: string;
                                    }>;
                                };
                                condition: ((val: readonly {
                                    refers_to?: string | undefined;
                                    name: string;
                                    scalar: number;
                                    units: string;
                                }[] | undefined) => readonly Readonly<{
                                    refers_to?: string | undefined;
                                    name: string;
                                    scalar: number;
                                    units: string;
                                }>[] | undefined) & {
                                    config: {
                                        sub: ((val: readonly {
                                            refers_to?: string | undefined;
                                            name: string;
                                            scalar: number;
                                            units: string;
                                        }[]) => readonly Readonly<{
                                            refers_to?: string | undefined;
                                            name: string;
                                            scalar: number;
                                            units: string;
                                        }>[]) & {
                                            config: ((val: {
                                                refers_to?: string | undefined;
                                                name: string;
                                                scalar: number;
                                                units: string;
                                            }) => Readonly<{
                                                refers_to?: string | undefined;
                                                name: string;
                                                scalar: number;
                                                units: string;
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
                                                    refers_to?: string | undefined;
                                                    name: string;
                                                    scalar: number;
                                                    units: string;
                                                }>;
                                            };
                                            Value: readonly Readonly<{
                                                refers_to?: string | undefined;
                                                name: string;
                                                scalar: number;
                                                units: string;
                                            }>[];
                                        };
                                        fallback: (() => readonly Readonly<{
                                            refers_to?: string | undefined;
                                            name: string;
                                            scalar: number;
                                            units: string;
                                        }>[]) | undefined;
                                    };
                                    Value: readonly Readonly<{
                                        refers_to?: string | undefined;
                                        name: string;
                                        scalar: number;
                                        units: string;
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
                                condition?: readonly Readonly<{
                                    refers_to?: string | undefined;
                                    name: string;
                                    scalar: number;
                                    units: string;
                                }>[] | undefined;
                                raw_data?: string | undefined;
                                data_type: string;
                                property: Readonly<{
                                    scalar?: string | number | undefined;
                                    matrix: Readonly<{
                                        bands: readonly (readonly number[])[];
                                        kpoints: readonly (readonly number[])[];
                                    }> | Readonly<{
                                        dos: readonly number[];
                                        levels: readonly number[];
                                    }>;
                                    name: string;
                                    units: string;
                                    category: string;
                                    domain: string;
                                }>;
                            }>;
                        };
                        Value: readonly Readonly<{
                            condition?: readonly Readonly<{
                                refers_to?: string | undefined;
                                name: string;
                                scalar: number;
                                units: string;
                            }>[] | undefined;
                            raw_data?: string | undefined;
                            data_type: string;
                            property: Readonly<{
                                scalar?: string | number | undefined;
                                matrix: Readonly<{
                                    bands: readonly (readonly number[])[];
                                    kpoints: readonly (readonly number[])[];
                                }> | Readonly<{
                                    dos: readonly number[];
                                    levels: readonly number[];
                                }>;
                                name: string;
                                units: string;
                                category: string;
                                domain: string;
                            }>;
                        }>[];
                    };
                };
                Value: Readonly<{
                    material: Readonly<{
                        object_repr?: string | undefined;
                        chemical_elements: readonly string[];
                        phase: string;
                        phase_id: number;
                        entry: string;
                        chemical_formula: string;
                        condition: readonly Readonly<{
                            units?: string | undefined;
                            name: string;
                            scalar: readonly Readonly<{
                                value: number;
                            }>[];
                        }>[];
                    }>;
                    measurement: readonly Readonly<{
                        condition?: readonly Readonly<{
                            refers_to?: string | undefined;
                            name: string;
                            scalar: number;
                            units: string;
                        }>[] | undefined;
                        raw_data?: string | undefined;
                        data_type: string;
                        property: Readonly<{
                            scalar?: string | number | undefined;
                            matrix: Readonly<{
                                bands: readonly (readonly number[])[];
                                kpoints: readonly (readonly number[])[];
                            }> | Readonly<{
                                dos: readonly number[];
                                levels: readonly number[];
                            }>;
                            name: string;
                            units: string;
                            category: string;
                            domain: string;
                        }>;
                    }>[];
                }>;
            };
            version: (val: string) => string;
            object_type: (val: string) => string;
            reference: ((val: {
                phase?: string | undefined;
                entry: string;
            }) => Readonly<{
                phase?: string | undefined;
                entry: string;
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
                    phase?: string | undefined;
                    entry: string;
                }>;
            };
        };
        Value: Readonly<{
            object_type: string;
            sample: Readonly<{
                material: Readonly<{
                    object_repr?: string | undefined;
                    chemical_elements: readonly string[];
                    phase: string;
                    phase_id: number;
                    entry: string;
                    chemical_formula: string;
                    condition: readonly Readonly<{
                        units?: string | undefined;
                        name: string;
                        scalar: readonly Readonly<{
                            value: number;
                        }>[];
                    }>[];
                }>;
                measurement: readonly Readonly<{
                    condition?: readonly Readonly<{
                        refers_to?: string | undefined;
                        name: string;
                        scalar: number;
                        units: string;
                    }>[] | undefined;
                    raw_data?: string | undefined;
                    data_type: string;
                    property: Readonly<{
                        scalar?: string | number | undefined;
                        matrix: Readonly<{
                            bands: readonly (readonly number[])[];
                            kpoints: readonly (readonly number[])[];
                        }> | Readonly<{
                            dos: readonly number[];
                            levels: readonly number[];
                        }>;
                        name: string;
                        units: string;
                        category: string;
                        domain: string;
                    }>;
                }>[];
            }>;
            version: string;
            reference: Readonly<{
                phase?: string | undefined;
                entry: string;
            }>;
        }>;
    };
    export class $mpds_visavis_plot_eigen extends $.$mpds_visavis_plot_eigen {
        json(): Readonly<{
            object_type: string;
            sample: Readonly<{
                material: Readonly<{
                    object_repr?: string | undefined;
                    chemical_elements: readonly string[];
                    phase: string;
                    phase_id: number;
                    entry: string;
                    chemical_formula: string;
                    condition: readonly Readonly<{
                        units?: string | undefined;
                        name: string;
                        scalar: readonly Readonly<{
                            value: number;
                        }>[];
                    }>[];
                }>;
                measurement: readonly Readonly<{
                    condition?: readonly Readonly<{
                        refers_to?: string | undefined;
                        name: string;
                        scalar: number;
                        units: string;
                    }>[] | undefined;
                    raw_data?: string | undefined;
                    data_type: string;
                    property: Readonly<{
                        scalar?: string | number | undefined;
                        matrix: Readonly<{
                            bands: readonly (readonly number[])[];
                            kpoints: readonly (readonly number[])[];
                        }> | Readonly<{
                            dos: readonly number[];
                            levels: readonly number[];
                        }>;
                        name: string;
                        units: string;
                        category: string;
                        domain: string;
                    }>;
                }>[];
            }>;
            version: string;
            reference: Readonly<{
                phase?: string | undefined;
                entry: string;
            }>;
        }>;
        bands_matrix(): Bands_matrix | null;
        dos_matrix(): Dos_matrix | null;
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
    function $mol_data_enum<Dict extends Record<number | string, number | string>>(name: string, dict: Dict): ((value: Dict[keyof Dict]) => Dict[keyof Dict]) & {
        config: {
            name: string;
            dict: Dict;
        };
        Value: Dict[keyof Dict];
    };
}

declare namespace $ {

	export class $mpds_visavis_plot_pie extends $mpds_visavis_lib_plotly_view {
		subscribe_click( ): any
		plot_raw( ): $mpds_visavis_plot_raw
		auto( ): readonly(any)[]
		pie_click( next?: any ): any
		colorset( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=pie.view.tree.d.ts.map
declare namespace $.$$ {
    const Facet_names: {
        readonly props: "properties";
        readonly elements: "elements";
        readonly classes: "classes";
        readonly lattices: "crystal systems";
    };
    export const $mpds_visavis_plot_pie_json: ((val: {
        payload: readonly {
            value: string;
            count: number;
            facet: "elements" | "classes" | "props" | "lattices";
        }[];
        total_count: number;
    }) => Readonly<{
        payload: readonly Readonly<{
            value: string;
            count: number;
            facet: "elements" | "classes" | "props" | "lattices";
        }>[];
        total_count: number;
    }>) & {
        config: {
            payload: ((val: readonly {
                value: string;
                count: number;
                facet: "elements" | "classes" | "props" | "lattices";
            }[]) => readonly Readonly<{
                value: string;
                count: number;
                facet: "elements" | "classes" | "props" | "lattices";
            }>[]) & {
                config: ((val: {
                    value: string;
                    count: number;
                    facet: "elements" | "classes" | "props" | "lattices";
                }) => Readonly<{
                    value: string;
                    count: number;
                    facet: "elements" | "classes" | "props" | "lattices";
                }>) & {
                    config: {
                        facet: ((value: "elements" | "classes" | "props" | "lattices") => "elements" | "classes" | "props" | "lattices") & {
                            config: {
                                name: string;
                                dict: {
                                    readonly props: "props";
                                    readonly elements: "elements";
                                    readonly classes: "classes";
                                    readonly lattices: "lattices";
                                };
                            };
                            Value: "elements" | "classes" | "props" | "lattices";
                        };
                        value: (val: string) => string;
                        count: (val: number) => number;
                    };
                    Value: Readonly<{
                        value: string;
                        count: number;
                        facet: "elements" | "classes" | "props" | "lattices";
                    }>;
                };
                Value: readonly Readonly<{
                    value: string;
                    count: number;
                    facet: "elements" | "classes" | "props" | "lattices";
                }>[];
            };
            total_count: (val: number) => number;
        };
        Value: Readonly<{
            payload: readonly Readonly<{
                value: string;
                count: number;
                facet: "elements" | "classes" | "props" | "lattices";
            }>[];
            total_count: number;
        }>;
    };
    export class $mpds_visavis_plot_pie extends $.$mpds_visavis_plot_pie {
        json(): Readonly<{
            payload: readonly Readonly<{
                value: string;
                count: number;
                facet: "elements" | "classes" | "props" | "lattices";
            }>[];
            total_count: number;
        }>;
        subscribe_click(): void;
        layout(): {
            font: {
                family: string;
            };
            showlegend: boolean;
            annotations: ({
                text: string;
            } & {
                x: number;
                y: number;
            } & {
                font: {
                    size: number;
                };
                showarrow: boolean;
                borderpad: number;
                bgcolor: string;
            })[];
        };
        xy_domains(): (number[][][] | null)[];
        enter_metrics(): number;
        tot_count(): number;
        pies_payload(): {
            facet: keyof typeof Facet_names;
            payload: {
                facet: string;
                value: string;
                count: number;
            }[];
        }[];
        data(): {
            type: string;
            name: "properties" | "elements" | "classes" | "crystal systems";
            values: number[];
            text: string[];
            domain: {
                x: number[];
                y: number[];
            };
            hoverinfo: string;
            textinfo: string;
            textposition: string;
            hole: number;
            marker: {
                colors: readonly any[];
            };
        }[];
    }
    export {};
}

declare namespace $ {
}

declare namespace $ {

	export class $mpds_visavis_plot_scatter extends $mpds_visavis_lib_plotly_view {
		plot_raw( ): $mpds_visavis_plot_raw
		notify( next?: any ): any
	}
	
}

//# sourceMappingURL=scatter.view.tree.d.ts.map
declare namespace $.$$ {
    const $mpds_visavis_plot_scatter_json: ((val: {
        object_type: string;
        sample: {
            material: {
                object_repr?: string | undefined;
                chemical_elements: readonly string[];
                phase: string;
                phase_id: number;
                entry: string;
                chemical_formula: string;
                condition: readonly {
                    units?: string | undefined;
                    name: string;
                    scalar: readonly {
                        value: number;
                    }[];
                }[];
            };
            measurement: readonly {
                condition?: readonly {
                    refers_to?: string | undefined;
                    name: string;
                    scalar: number;
                    units: string;
                }[] | undefined;
                raw_data?: string | undefined;
                data_type: string;
                property: {
                    scalar?: string | number | undefined;
                    matrix: readonly (readonly number[])[];
                    name: string;
                    units: string;
                    category: string;
                    domain: string;
                };
            }[];
        };
        version: string;
        reference: {
            phase?: string | undefined;
            entry: string;
        };
    }) => Readonly<{
        object_type: string;
        sample: Readonly<{
            material: Readonly<{
                object_repr?: string | undefined;
                chemical_elements: readonly string[];
                phase: string;
                phase_id: number;
                entry: string;
                chemical_formula: string;
                condition: readonly Readonly<{
                    units?: string | undefined;
                    name: string;
                    scalar: readonly Readonly<{
                        value: number;
                    }>[];
                }>[];
            }>;
            measurement: readonly Readonly<{
                condition?: readonly Readonly<{
                    refers_to?: string | undefined;
                    name: string;
                    scalar: number;
                    units: string;
                }>[] | undefined;
                raw_data?: string | undefined;
                data_type: string;
                property: Readonly<{
                    scalar?: string | number | undefined;
                    matrix: readonly (readonly number[])[];
                    name: string;
                    units: string;
                    category: string;
                    domain: string;
                }>;
            }>[];
        }>;
        version: string;
        reference: Readonly<{
            phase?: string | undefined;
            entry: string;
        }>;
    }>) & {
        config: {
            sample: ((val: {
                material: {
                    object_repr?: string | undefined;
                    chemical_elements: readonly string[];
                    phase: string;
                    phase_id: number;
                    entry: string;
                    chemical_formula: string;
                    condition: readonly {
                        units?: string | undefined;
                        name: string;
                        scalar: readonly {
                            value: number;
                        }[];
                    }[];
                };
                measurement: readonly {
                    condition?: readonly {
                        refers_to?: string | undefined;
                        name: string;
                        scalar: number;
                        units: string;
                    }[] | undefined;
                    raw_data?: string | undefined;
                    data_type: string;
                    property: {
                        scalar?: string | number | undefined;
                        matrix: readonly (readonly number[])[];
                        name: string;
                        units: string;
                        category: string;
                        domain: string;
                    };
                }[];
            }) => Readonly<{
                material: Readonly<{
                    object_repr?: string | undefined;
                    chemical_elements: readonly string[];
                    phase: string;
                    phase_id: number;
                    entry: string;
                    chemical_formula: string;
                    condition: readonly Readonly<{
                        units?: string | undefined;
                        name: string;
                        scalar: readonly Readonly<{
                            value: number;
                        }>[];
                    }>[];
                }>;
                measurement: readonly Readonly<{
                    condition?: readonly Readonly<{
                        refers_to?: string | undefined;
                        name: string;
                        scalar: number;
                        units: string;
                    }>[] | undefined;
                    raw_data?: string | undefined;
                    data_type: string;
                    property: Readonly<{
                        scalar?: string | number | undefined;
                        matrix: readonly (readonly number[])[];
                        name: string;
                        units: string;
                        category: string;
                        domain: string;
                    }>;
                }>[];
            }>) & {
                config: {
                    material: ((val: {
                        object_repr?: string | undefined;
                        chemical_elements: readonly string[];
                        phase: string;
                        phase_id: number;
                        entry: string;
                        chemical_formula: string;
                        condition: readonly {
                            units?: string | undefined;
                            name: string;
                            scalar: readonly {
                                value: number;
                            }[];
                        }[];
                    }) => Readonly<{
                        object_repr?: string | undefined;
                        chemical_elements: readonly string[];
                        phase: string;
                        phase_id: number;
                        entry: string;
                        chemical_formula: string;
                        condition: readonly Readonly<{
                            units?: string | undefined;
                            name: string;
                            scalar: readonly Readonly<{
                                value: number;
                            }>[];
                        }>[];
                    }>) & {
                        config: {
                            chemical_formula: (val: string) => string;
                            chemical_elements: ((val: readonly string[]) => readonly string[]) & {
                                config: (val: string) => string;
                                Value: readonly string[];
                            };
                            condition: ((val: readonly {
                                units?: string | undefined;
                                name: string;
                                scalar: readonly {
                                    value: number;
                                }[];
                            }[]) => readonly Readonly<{
                                units?: string | undefined;
                                name: string;
                                scalar: readonly Readonly<{
                                    value: number;
                                }>[];
                            }>[]) & {
                                config: ((val: {
                                    units?: string | undefined;
                                    name: string;
                                    scalar: readonly {
                                        value: number;
                                    }[];
                                }) => Readonly<{
                                    units?: string | undefined;
                                    name: string;
                                    scalar: readonly Readonly<{
                                        value: number;
                                    }>[];
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
                                        units?: string | undefined;
                                        name: string;
                                        scalar: readonly Readonly<{
                                            value: number;
                                        }>[];
                                    }>;
                                };
                                Value: readonly Readonly<{
                                    units?: string | undefined;
                                    name: string;
                                    scalar: readonly Readonly<{
                                        value: number;
                                    }>[];
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
                            object_repr?: string | undefined;
                            chemical_elements: readonly string[];
                            phase: string;
                            phase_id: number;
                            entry: string;
                            chemical_formula: string;
                            condition: readonly Readonly<{
                                units?: string | undefined;
                                name: string;
                                scalar: readonly Readonly<{
                                    value: number;
                                }>[];
                            }>[];
                        }>;
                    };
                    measurement: ((val: readonly {
                        condition?: readonly {
                            refers_to?: string | undefined;
                            name: string;
                            scalar: number;
                            units: string;
                        }[] | undefined;
                        raw_data?: string | undefined;
                        data_type: string;
                        property: {
                            scalar?: string | number | undefined;
                            matrix: readonly (readonly number[])[];
                            name: string;
                            units: string;
                            category: string;
                            domain: string;
                        };
                    }[]) => readonly Readonly<{
                        condition?: readonly Readonly<{
                            refers_to?: string | undefined;
                            name: string;
                            scalar: number;
                            units: string;
                        }>[] | undefined;
                        raw_data?: string | undefined;
                        data_type: string;
                        property: Readonly<{
                            scalar?: string | number | undefined;
                            matrix: readonly (readonly number[])[];
                            name: string;
                            units: string;
                            category: string;
                            domain: string;
                        }>;
                    }>[]) & {
                        config: ((val: {
                            condition?: readonly {
                                refers_to?: string | undefined;
                                name: string;
                                scalar: number;
                                units: string;
                            }[] | undefined;
                            raw_data?: string | undefined;
                            data_type: string;
                            property: {
                                scalar?: string | number | undefined;
                                matrix: readonly (readonly number[])[];
                                name: string;
                                units: string;
                                category: string;
                                domain: string;
                            };
                        }) => Readonly<{
                            condition?: readonly Readonly<{
                                refers_to?: string | undefined;
                                name: string;
                                scalar: number;
                                units: string;
                            }>[] | undefined;
                            raw_data?: string | undefined;
                            data_type: string;
                            property: Readonly<{
                                scalar?: string | number | undefined;
                                matrix: readonly (readonly number[])[];
                                name: string;
                                units: string;
                                category: string;
                                domain: string;
                            }>;
                        }>) & {
                            config: {
                                data_type: (val: string) => string;
                                property: ((val: {
                                    scalar?: string | number | undefined;
                                    matrix: readonly (readonly number[])[];
                                    name: string;
                                    units: string;
                                    category: string;
                                    domain: string;
                                }) => Readonly<{
                                    scalar?: string | number | undefined;
                                    matrix: readonly (readonly number[])[];
                                    name: string;
                                    units: string;
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
                                        scalar?: string | number | undefined;
                                        matrix: readonly (readonly number[])[];
                                        name: string;
                                        units: string;
                                        category: string;
                                        domain: string;
                                    }>;
                                };
                                condition: ((val: readonly {
                                    refers_to?: string | undefined;
                                    name: string;
                                    scalar: number;
                                    units: string;
                                }[] | undefined) => readonly Readonly<{
                                    refers_to?: string | undefined;
                                    name: string;
                                    scalar: number;
                                    units: string;
                                }>[] | undefined) & {
                                    config: {
                                        sub: ((val: readonly {
                                            refers_to?: string | undefined;
                                            name: string;
                                            scalar: number;
                                            units: string;
                                        }[]) => readonly Readonly<{
                                            refers_to?: string | undefined;
                                            name: string;
                                            scalar: number;
                                            units: string;
                                        }>[]) & {
                                            config: ((val: {
                                                refers_to?: string | undefined;
                                                name: string;
                                                scalar: number;
                                                units: string;
                                            }) => Readonly<{
                                                refers_to?: string | undefined;
                                                name: string;
                                                scalar: number;
                                                units: string;
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
                                                    refers_to?: string | undefined;
                                                    name: string;
                                                    scalar: number;
                                                    units: string;
                                                }>;
                                            };
                                            Value: readonly Readonly<{
                                                refers_to?: string | undefined;
                                                name: string;
                                                scalar: number;
                                                units: string;
                                            }>[];
                                        };
                                        fallback: (() => readonly Readonly<{
                                            refers_to?: string | undefined;
                                            name: string;
                                            scalar: number;
                                            units: string;
                                        }>[]) | undefined;
                                    };
                                    Value: readonly Readonly<{
                                        refers_to?: string | undefined;
                                        name: string;
                                        scalar: number;
                                        units: string;
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
                                condition?: readonly Readonly<{
                                    refers_to?: string | undefined;
                                    name: string;
                                    scalar: number;
                                    units: string;
                                }>[] | undefined;
                                raw_data?: string | undefined;
                                data_type: string;
                                property: Readonly<{
                                    scalar?: string | number | undefined;
                                    matrix: readonly (readonly number[])[];
                                    name: string;
                                    units: string;
                                    category: string;
                                    domain: string;
                                }>;
                            }>;
                        };
                        Value: readonly Readonly<{
                            condition?: readonly Readonly<{
                                refers_to?: string | undefined;
                                name: string;
                                scalar: number;
                                units: string;
                            }>[] | undefined;
                            raw_data?: string | undefined;
                            data_type: string;
                            property: Readonly<{
                                scalar?: string | number | undefined;
                                matrix: readonly (readonly number[])[];
                                name: string;
                                units: string;
                                category: string;
                                domain: string;
                            }>;
                        }>[];
                    };
                };
                Value: Readonly<{
                    material: Readonly<{
                        object_repr?: string | undefined;
                        chemical_elements: readonly string[];
                        phase: string;
                        phase_id: number;
                        entry: string;
                        chemical_formula: string;
                        condition: readonly Readonly<{
                            units?: string | undefined;
                            name: string;
                            scalar: readonly Readonly<{
                                value: number;
                            }>[];
                        }>[];
                    }>;
                    measurement: readonly Readonly<{
                        condition?: readonly Readonly<{
                            refers_to?: string | undefined;
                            name: string;
                            scalar: number;
                            units: string;
                        }>[] | undefined;
                        raw_data?: string | undefined;
                        data_type: string;
                        property: Readonly<{
                            scalar?: string | number | undefined;
                            matrix: readonly (readonly number[])[];
                            name: string;
                            units: string;
                            category: string;
                            domain: string;
                        }>;
                    }>[];
                }>;
            };
            version: (val: string) => string;
            object_type: (val: string) => string;
            reference: ((val: {
                phase?: string | undefined;
                entry: string;
            }) => Readonly<{
                phase?: string | undefined;
                entry: string;
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
                    phase?: string | undefined;
                    entry: string;
                }>;
            };
        };
        Value: Readonly<{
            object_type: string;
            sample: Readonly<{
                material: Readonly<{
                    object_repr?: string | undefined;
                    chemical_elements: readonly string[];
                    phase: string;
                    phase_id: number;
                    entry: string;
                    chemical_formula: string;
                    condition: readonly Readonly<{
                        units?: string | undefined;
                        name: string;
                        scalar: readonly Readonly<{
                            value: number;
                        }>[];
                    }>[];
                }>;
                measurement: readonly Readonly<{
                    condition?: readonly Readonly<{
                        refers_to?: string | undefined;
                        name: string;
                        scalar: number;
                        units: string;
                    }>[] | undefined;
                    raw_data?: string | undefined;
                    data_type: string;
                    property: Readonly<{
                        scalar?: string | number | undefined;
                        matrix: readonly (readonly number[])[];
                        name: string;
                        units: string;
                        category: string;
                        domain: string;
                    }>;
                }>[];
            }>;
            version: string;
            reference: Readonly<{
                phase?: string | undefined;
                entry: string;
            }>;
        }>;
    };
    class $mpds_visavis_plot_scatter extends $.$mpds_visavis_plot_scatter {
        json(): Readonly<{
            object_type: string;
            sample: Readonly<{
                material: Readonly<{
                    object_repr?: string | undefined;
                    chemical_elements: readonly string[];
                    phase: string;
                    phase_id: number;
                    entry: string;
                    chemical_formula: string;
                    condition: readonly Readonly<{
                        units?: string | undefined;
                        name: string;
                        scalar: readonly Readonly<{
                            value: number;
                        }>[];
                    }>[];
                }>;
                measurement: readonly Readonly<{
                    condition?: readonly Readonly<{
                        refers_to?: string | undefined;
                        name: string;
                        scalar: number;
                        units: string;
                    }>[] | undefined;
                    raw_data?: string | undefined;
                    data_type: string;
                    property: Readonly<{
                        scalar?: string | number | undefined;
                        matrix: readonly (readonly number[])[];
                        name: string;
                        units: string;
                        category: string;
                        domain: string;
                    }>;
                }>[];
            }>;
            version: string;
            reference: Readonly<{
                phase?: string | undefined;
                entry: string;
            }>;
        }>;
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

	export class $mpds_visavis_plot_customscatter extends $mpds_visavis_lib_plotly_view {
		subscribe_legend_click( ): any
		nplots( ): number
		plot_raw( ): $mpds_visavis_plot_raw
		nplots_changed( next?: any ): any
		legend_click( next?: any ): any
		auto( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=customscatter.view.tree.d.ts.map
declare namespace $.$$ {
    const $mpds_visavis_plot_customscatter_json: ((val: {
        xtitle?: string | undefined;
        ytitle?: string | undefined;
        xrpd?: boolean | undefined;
        plots: readonly {
            name: string;
            type: string;
            x: readonly number[];
            y: readonly number[];
            mode: string;
        }[];
        xlog: boolean | null;
        ylog: boolean | null;
    }) => Readonly<{
        xtitle?: string | undefined;
        ytitle?: string | undefined;
        xrpd?: boolean | undefined;
        plots: readonly Readonly<{
            name: string;
            type: string;
            x: readonly number[];
            y: readonly number[];
            mode: string;
        }>[];
        xlog: boolean | null;
        ylog: boolean | null;
    }>) & {
        config: {
            plots: ((val: readonly {
                name: string;
                type: string;
                x: readonly number[];
                y: readonly number[];
                mode: string;
            }[]) => readonly Readonly<{
                name: string;
                type: string;
                x: readonly number[];
                y: readonly number[];
                mode: string;
            }>[]) & {
                config: ((val: {
                    name: string;
                    type: string;
                    x: readonly number[];
                    y: readonly number[];
                    mode: string;
                }) => Readonly<{
                    name: string;
                    type: string;
                    x: readonly number[];
                    y: readonly number[];
                    mode: string;
                }>) & {
                    config: {
                        name: (val: string) => string;
                        type: (val: string) => string;
                        mode: (val: string) => string;
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
                        x: readonly number[];
                        y: readonly number[];
                        mode: string;
                    }>;
                };
                Value: readonly Readonly<{
                    name: string;
                    type: string;
                    x: readonly number[];
                    y: readonly number[];
                    mode: string;
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
            xrpd: ((val: boolean | undefined) => boolean | undefined) & {
                config: {
                    sub: (val: boolean) => boolean;
                    fallback: (() => boolean) | undefined;
                };
                Value: boolean | undefined;
            };
        };
        Value: Readonly<{
            xtitle?: string | undefined;
            ytitle?: string | undefined;
            xrpd?: boolean | undefined;
            plots: readonly Readonly<{
                name: string;
                type: string;
                x: readonly number[];
                y: readonly number[];
                mode: string;
            }>[];
            xlog: boolean | null;
            ylog: boolean | null;
        }>;
    };
    class $mpds_visavis_plot_customscatter extends $.$mpds_visavis_plot_customscatter {
        json(): Readonly<{
            xtitle?: string | undefined;
            ytitle?: string | undefined;
            xrpd?: boolean | undefined;
            plots: readonly Readonly<{
                name: string;
                type: string;
                x: readonly number[];
                y: readonly number[];
                mode: string;
            }>[];
            xlog: boolean | null;
            ylog: boolean | null;
        }>;
        subscribe_legend_click(): void;
        nplots(): number;
        layout(): {
            showlegend: boolean;
            annotations: boolean | {
                x: number;
                y: number;
                xref: string;
                yref: string;
                text: string;
                showarrow: boolean;
            }[];
            legend: {
                x: number;
                y: number;
                font: {
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
            x: readonly number[];
            y: readonly number[];
            mode: string;
        }>[];
    }
}

declare namespace $ {

	export class $mpds_visavis_plot_heatmap extends $mpds_visavis_lib_plotly_view {
		plot_raw( ): $mpds_visavis_plot_raw
	}
	
}

//# sourceMappingURL=heatmap.view.tree.d.ts.map
declare namespace $.$$ {
    class $mpds_visavis_plot_heatmap extends $.$mpds_visavis_plot_heatmap {
        json(): any;
        layout(): {
            font: {
                family: string;
            };
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
    class $mol_vector<Value, Length extends number> extends Array<Value> {
        get length(): Length;
        constructor(...values: Value[] & {
            length: Length;
        });
        map<Res>(convert: (value: Value, index: number, array: this) => Res, self?: any): $mol_vector<Res, Length>;
        merged<Patch>(patches: readonly Patch[] & {
            length: Length;
        }, combine: (value: Value, patch: Patch) => Value): this;
        limited(this: $mol_vector<number, Length>, limits: readonly (readonly [number, number])[] & {
            length: Length;
        }): this;
        added0(this: $mol_vector<number, Length>, diff: number): this;
        added1(this: $mol_vector<number, Length>, diff: readonly number[] & {
            length: Length;
        }): this;
        multed0(this: $mol_vector<number, Length>, mult: number): this;
        multed1(this: $mol_vector<number, Length>, mults: readonly number[] & {
            length: Length;
        }): this;
        powered0(this: $mol_vector<number, Length>, mult: number): this;
        expanded1(this: $mol_vector<$mol_vector_range<number>, Length>, point: readonly number[] & {
            length: Length;
        }): this;
        expanded2(this: $mol_vector<$mol_vector_range<number>, Length>, point: readonly (readonly [number, number])[] & {
            length: Length;
        }): this;
        center<Item extends $mol_vector<number, number>>(this: $mol_vector<Item, Length>): Item;
        distance(this: $mol_vector<$mol_vector<number, number>, Length>): number;
        transponed(this: $mol_vector<$mol_vector<number, number>, Length>): $mol_vector<$mol_vector<number, Length>, typeof this[0]['length']>;
        get x(): Value;
        set x(next: Value);
        get y(): Value;
        set y(next: Value);
        get z(): Value;
        set z(next: Value);
    }
    class $mol_vector_1d<Value> extends $mol_vector<Value, 1> {
    }
    class $mol_vector_2d<Value> extends $mol_vector<Value, 2> {
    }
    class $mol_vector_3d<Value> extends $mol_vector<Value, 3> {
    }
    class $mol_vector_range<Value> extends $mol_vector<Value, 2> {
        0: Value;
        1: Value;
        constructor(min: Value, max?: Value);
        get min(): Value;
        set min(next: Value);
        get max(): Value;
        set max(next: Value);
        get inversed(): $mol_vector_range<Value>;
        expanded0(value: Value): $mol_vector_range<Value>;
    }
    let $mol_vector_range_full: $mol_vector_range<number>;
    class $mol_vector_matrix<Width extends number, Height extends number> extends $mol_vector<readonly number[] & {
        length: Width;
    }, Height> {
        added2(diff: readonly (readonly number[] & {
            length: Width;
        })[] & {
            length: Height;
        }): this;
        multed2(diff: readonly (readonly number[] & {
            length: Width;
        })[] & {
            length: Height;
        }): this;
    }
}

declare namespace $ {

	type $mol_vector_2d__NOIXR0TJ = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__B1NXYXBF = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__TSU51DAL = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	export class $mol_touch extends $mol_plugin {
		event_start( next?: any ): any
		event_move( next?: any ): any
		event_end( next?: any ): any
		event_leave( next?: any ): any
		event_wheel( next?: any ): any
		start_zoom( next?: number ): number
		start_distance( next?: number ): number
		zoom( next?: number ): number
		allow_draw( ): boolean
		allow_pan( ): boolean
		allow_zoom( ): boolean
		action_type( next?: string ): string
		action_point( next?: $mol_vector_2d<number> ): $mol_vector_2d<number>
		start_pan( next?: readonly(any)[] ): readonly(any)[]
		pan( next?: $mol_vector_2d<number> ): $mol_vector_2d<number>
		pointer_center( ): $mol_vector_2d<number>
		start_pos( next?: any ): any
		swipe_precision( ): number
		swipe_right( next?: any ): any
		swipe_bottom( next?: any ): any
		swipe_left( next?: any ): any
		swipe_top( next?: any ): any
		swipe_from_right( next?: any ): any
		swipe_from_bottom( next?: any ): any
		swipe_from_left( next?: any ): any
		swipe_from_top( next?: any ): any
		swipe_to_right( next?: any ): any
		swipe_to_bottom( next?: any ): any
		swipe_to_left( next?: any ): any
		swipe_to_top( next?: any ): any
		draw_start( next?: any ): any
		draw( next?: any ): any
		draw_end( next?: any ): any
		style( ): ({ 
			'touch-action': string,
			'overscroll-behavior': string,
		})  & ReturnType< $mol_plugin['style'] >
		event( ): ({ 
			pointerdown( next?: ReturnType< $mol_touch['event_start'] > ): ReturnType< $mol_touch['event_start'] >,
			pointermove( next?: ReturnType< $mol_touch['event_move'] > ): ReturnType< $mol_touch['event_move'] >,
			pointerup( next?: ReturnType< $mol_touch['event_end'] > ): ReturnType< $mol_touch['event_end'] >,
			pointerleave( next?: ReturnType< $mol_touch['event_leave'] > ): ReturnType< $mol_touch['event_leave'] >,
			wheel( next?: ReturnType< $mol_touch['event_wheel'] > ): ReturnType< $mol_touch['event_wheel'] >,
		})  & ReturnType< $mol_plugin['event'] >
	}
	
}

//# sourceMappingURL=touch.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_touch extends $.$mol_touch {
        auto(): void;
        pointer_events(next?: readonly PointerEvent[]): readonly PointerEvent[];
        pointer_coords(): $mol_vector<$mol_vector_2d<number>, number>;
        pointer_center(): $mol_vector_2d<number>;
        event_coords(event: PointerEvent | WheelEvent): $mol_vector_2d<number>;
        action_point(): $mol_vector_2d<number>;
        event_eat(event: PointerEvent | WheelEvent): string;
        event_start(event: PointerEvent): void;
        event_move(event: PointerEvent): void;
        event_end(event: PointerEvent): void;
        event_leave(event: PointerEvent): void;
        swipe_left(event: PointerEvent): void;
        swipe_right(event: PointerEvent): void;
        swipe_top(event: PointerEvent): void;
        swipe_bottom(event: PointerEvent): void;
        event_wheel(event: WheelEvent): void;
    }
}

declare namespace $ {

	type $mpds_visavis_plot_graph_pan__IP66EO23 = $mol_type_enforce<
		Parameters< $mpds_visavis_plot_graph['pan'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot_graph['Touch'] >['pan'] >[0]
	>
	type $mol_touch__allow_draw__MO5L4207 = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_touch['allow_draw'] >
	>
	type $mol_touch__allow_pan__1ISYY2LT = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_graph['allow_pan'] >
		,
		ReturnType< $mol_touch['allow_pan'] >
	>
	type $mol_svg_root__view_box__SEHMOFVA = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_graph['view_box'] >
		,
		ReturnType< $mol_svg_root['view_box'] >
	>
	type $mol_svg_root__auto__KR1XNHYA = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_graph['draw'] >
		,
		ReturnType< $mol_svg_root['auto'] >
	>
	export class $mpds_visavis_plot_graph extends $mol_view {
		allow_pan( next?: boolean ): boolean
		pan( next?: ReturnType< ReturnType< $mpds_visavis_plot_graph['Touch'] >['pan'] > ): ReturnType< ReturnType< $mpds_visavis_plot_graph['Touch'] >['pan'] >
		Touch( ): $mol_touch
		view_box( ): string
		draw( ): any
		Root( ): $mol_svg_root
		plot_raw( ): $mpds_visavis_plot_raw
		notify( next?: any ): any
		plugins( ): readonly(any)[]
		sub( ): readonly(any)[]
		graph_rel( next?: string ): string
		graph_click( next?: any ): any
	}
	
}

//# sourceMappingURL=graph.view.tree.d.ts.map
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
    export const $mpds_visavis_plot_graph_json: ((val: {
        payload: readonly {
            source: string;
            target: string | number;
            type: string;
        }[];
        error: string | null;
        warning: string | null;
        graph_rel: string;
    }) => Readonly<{
        payload: readonly Readonly<{
            source: string;
            target: string | number;
            type: string;
        }>[];
        error: string | null;
        warning: string | null;
        graph_rel: string;
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
                target: string | number;
                type: string;
            }[]) => readonly Readonly<{
                source: string;
                target: string | number;
                type: string;
            }>[]) & {
                config: ((val: {
                    source: string;
                    target: string | number;
                    type: string;
                }) => Readonly<{
                    source: string;
                    target: string | number;
                    type: string;
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
                        target: string | number;
                        type: string;
                    }>;
                };
                Value: readonly Readonly<{
                    source: string;
                    target: string | number;
                    type: string;
                }>[];
            };
        };
        Value: Readonly<{
            payload: readonly Readonly<{
                source: string;
                target: string | number;
                type: string;
            }>[];
            error: string | null;
            warning: string | null;
            graph_rel: string;
        }>;
    };
    export class $mpds_visavis_plot_graph extends $.$mpds_visavis_plot_graph {
        json(): Readonly<{
            payload: readonly Readonly<{
                source: string;
                target: string | number;
                type: string;
            }>[];
            error: string | null;
            warning: string | null;
            graph_rel: string;
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
        view_box(): string;
        draw(): void;
    }
    export {};
}

declare namespace $ {
}

declare namespace $.$$ {
}

declare namespace $ {
    let $hyoo_lingua_langs: {
        af: string;
        am: string;
        ar: string;
        ast: string;
        az: string;
        ba: string;
        be: string;
        bg: string;
        bn: string;
        br: string;
        bs: string;
        ca: string;
        ceb: string;
        cs: string;
        cy: string;
        da: string;
        de: string;
        el: string;
        en: string;
        es: string;
        et: string;
        fa: string;
        ff: string;
        fi: string;
        fr: string;
        fy: string;
        ga: string;
        gd: string;
        gl: string;
        gu: string;
        ha: string;
        he: string;
        hi: string;
        hr: string;
        ht: string;
        hu: string;
        hy: string;
        id: string;
        ig: string;
        ilo: string;
        is: string;
        it: string;
        ja: string;
        jv: string;
        ka: string;
        kk: string;
        km: string;
        kn: string;
        ko: string;
        lb: string;
        lg: string;
        ln: string;
        lo: string;
        lt: string;
        lv: string;
        mg: string;
        mk: string;
        ml: string;
        mn: string;
        mr: string;
        ms: string;
        my: string;
        ne: string;
        nl: string;
        no: string;
        ns: string;
        oc: string;
        or: string;
        pa: string;
        pl: string;
        ps: string;
        pt: string;
        ro: string;
        ru: string;
        sd: string;
        si: string;
        sk: string;
        sl: string;
        so: string;
        sq: string;
        sr: string;
        ss: string;
        su: string;
        sv: string;
        sw: string;
        ta: string;
        th: string;
        tl: string;
        tn: string;
        tr: string;
        uk: string;
        ur: string;
        uz: string;
        vi: string;
        wo: string;
        xh: string;
        yi: string;
        yo: string;
        zh: string;
        zu: string;
    };
}

declare namespace $ {

	export class $mol_locale_select extends $mol_select {
	}
	
}

//# sourceMappingURL=select.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_locale_select extends $.$mol_locale_select {
        value(next?: string): string;
        dictionary(): {
            af: string;
            am: string;
            ar: string;
            ast: string;
            az: string;
            ba: string;
            be: string;
            bg: string;
            bn: string;
            br: string;
            bs: string;
            ca: string;
            ceb: string;
            cs: string;
            cy: string;
            da: string;
            de: string;
            el: string;
            en: string;
            es: string;
            et: string;
            fa: string;
            ff: string;
            fi: string;
            fr: string;
            fy: string;
            ga: string;
            gd: string;
            gl: string;
            gu: string;
            ha: string;
            he: string;
            hi: string;
            hr: string;
            ht: string;
            hu: string;
            hy: string;
            id: string;
            ig: string;
            ilo: string;
            is: string;
            it: string;
            ja: string;
            jv: string;
            ka: string;
            kk: string;
            km: string;
            kn: string;
            ko: string;
            lb: string;
            lg: string;
            ln: string;
            lo: string;
            lt: string;
            lv: string;
            mg: string;
            mk: string;
            ml: string;
            mn: string;
            mr: string;
            ms: string;
            my: string;
            ne: string;
            nl: string;
            no: string;
            ns: string;
            oc: string;
            or: string;
            pa: string;
            pl: string;
            ps: string;
            pt: string;
            ro: string;
            ru: string;
            sd: string;
            si: string;
            sk: string;
            sl: string;
            so: string;
            sq: string;
            sr: string;
            ss: string;
            su: string;
            sv: string;
            sw: string;
            ta: string;
            th: string;
            tl: string;
            tn: string;
            tr: string;
            uk: string;
            ur: string;
            uz: string;
            vi: string;
            wo: string;
            xh: string;
            yi: string;
            yo: string;
            zh: string;
            zu: string;
        };
    }
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
        blob(): Blob;
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
        static blob(input: RequestInfo, init?: RequestInit): Blob;
        static buffer(input: RequestInfo, init?: RequestInit): ArrayBuffer;
        static xml(input: RequestInfo, init?: RequestInit): Document;
        static xhtml(input: RequestInfo, init?: RequestInit): Document;
        static html(input: RequestInfo, init?: RequestInit): Document;
    }
}

declare namespace $ {
    function $mol_view_component(View: typeof $mol_view): {
        new (): {
            view: $mol_view;
            root?: $mol_wire_sub | null;
            connectedCallback(): void;
            disconnectedCallback(): void;
            attributeChangedCallback(name: string, prev: string, next: string): void;
            toString(): string;
            accessKey: string;
            readonly accessKeyLabel: string;
            autocapitalize: string;
            dir: string;
            draggable: boolean;
            hidden: boolean;
            inert: boolean;
            innerText: string;
            lang: string;
            readonly offsetHeight: number;
            readonly offsetLeft: number;
            readonly offsetParent: Element | null;
            readonly offsetTop: number;
            readonly offsetWidth: number;
            outerText: string;
            popover: string | null;
            spellcheck: boolean;
            title: string;
            translate: boolean;
            attachInternals(): ElementInternals;
            click(): void;
            hidePopover(): void;
            showPopover(): void;
            togglePopover(force?: boolean): boolean;
            addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
            addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
            removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
            removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
            readonly attributes: NamedNodeMap;
            readonly classList: DOMTokenList;
            className: string;
            readonly clientHeight: number;
            readonly clientLeft: number;
            readonly clientTop: number;
            readonly clientWidth: number;
            id: string;
            readonly localName: string;
            readonly namespaceURI: string | null;
            onfullscreenchange: ((this: Element, ev: Event) => any) | null;
            onfullscreenerror: ((this: Element, ev: Event) => any) | null;
            outerHTML: string;
            readonly ownerDocument: Document;
            readonly part: DOMTokenList;
            readonly prefix: string | null;
            readonly scrollHeight: number;
            scrollLeft: number;
            scrollTop: number;
            readonly scrollWidth: number;
            readonly shadowRoot: ShadowRoot | null;
            slot: string;
            readonly tagName: string;
            attachShadow(init: ShadowRootInit): ShadowRoot;
            checkVisibility(options?: CheckVisibilityOptions): boolean;
            closest<K extends keyof HTMLElementTagNameMap>(selector: K): HTMLElementTagNameMap[K] | null;
            closest<K extends keyof SVGElementTagNameMap>(selector: K): SVGElementTagNameMap[K] | null;
            closest<K extends keyof MathMLElementTagNameMap>(selector: K): MathMLElementTagNameMap[K] | null;
            closest<E extends Element = Element>(selectors: string): E | null;
            computedStyleMap(): StylePropertyMapReadOnly;
            getAttribute(qualifiedName: string): string | null;
            getAttributeNS(namespace: string | null, localName: string): string | null;
            getAttributeNames(): string[];
            getAttributeNode(qualifiedName: string): Attr | null;
            getAttributeNodeNS(namespace: string | null, localName: string): Attr | null;
            getBoundingClientRect(): DOMRect;
            getClientRects(): DOMRectList;
            getElementsByClassName(classNames: string): HTMLCollectionOf<Element>;
            getElementsByTagName<K extends keyof HTMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<HTMLElementTagNameMap[K]>;
            getElementsByTagName<K extends keyof SVGElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<SVGElementTagNameMap[K]>;
            getElementsByTagName<K extends keyof MathMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<MathMLElementTagNameMap[K]>;
            getElementsByTagName<K extends keyof HTMLElementDeprecatedTagNameMap>(qualifiedName: K): HTMLCollectionOf<HTMLElementDeprecatedTagNameMap[K]>;
            getElementsByTagName(qualifiedName: string): HTMLCollectionOf<Element>;
            getElementsByTagNameNS(namespaceURI: "http://www.w3.org/1999/xhtml", localName: string): HTMLCollectionOf<HTMLElement>;
            getElementsByTagNameNS(namespaceURI: "http://www.w3.org/2000/svg", localName: string): HTMLCollectionOf<SVGElement>;
            getElementsByTagNameNS(namespaceURI: "http://www.w3.org/1998/Math/MathML", localName: string): HTMLCollectionOf<MathMLElement>;
            getElementsByTagNameNS(namespace: string | null, localName: string): HTMLCollectionOf<Element>;
            hasAttribute(qualifiedName: string): boolean;
            hasAttributeNS(namespace: string | null, localName: string): boolean;
            hasAttributes(): boolean;
            hasPointerCapture(pointerId: number): boolean;
            insertAdjacentElement(where: InsertPosition, element: Element): Element | null;
            insertAdjacentHTML(position: InsertPosition, text: string): void;
            insertAdjacentText(where: InsertPosition, data: string): void;
            matches(selectors: string): boolean;
            releasePointerCapture(pointerId: number): void;
            removeAttribute(qualifiedName: string): void;
            removeAttributeNS(namespace: string | null, localName: string): void;
            removeAttributeNode(attr: Attr): Attr;
            requestFullscreen(options?: FullscreenOptions): Promise<void>;
            requestPointerLock(): void;
            scroll(options?: ScrollToOptions): void;
            scroll(x: number, y: number): void;
            scrollBy(options?: ScrollToOptions): void;
            scrollBy(x: number, y: number): void;
            scrollIntoView(arg?: boolean | ScrollIntoViewOptions): void;
            scrollTo(options?: ScrollToOptions): void;
            scrollTo(x: number, y: number): void;
            setAttribute(qualifiedName: string, value: string): void;
            setAttributeNS(namespace: string | null, qualifiedName: string, value: string): void;
            setAttributeNode(attr: Attr): Attr | null;
            setAttributeNodeNS(attr: Attr): Attr | null;
            setHTMLUnsafe(html: string): void;
            setPointerCapture(pointerId: number): void;
            toggleAttribute(qualifiedName: string, force?: boolean): boolean;
            webkitMatchesSelector(selectors: string): boolean;
            readonly baseURI: string;
            readonly childNodes: NodeListOf<ChildNode>;
            readonly firstChild: ChildNode | null;
            readonly isConnected: boolean;
            readonly lastChild: ChildNode | null;
            readonly nextSibling: ChildNode | null;
            readonly nodeName: string;
            readonly nodeType: number;
            nodeValue: string | null;
            readonly parentElement: HTMLElement | null;
            readonly parentNode: ParentNode | null;
            readonly previousSibling: ChildNode | null;
            textContent: string | null;
            appendChild<T extends Node>(node: T): T;
            cloneNode(deep?: boolean): Node;
            compareDocumentPosition(other: Node): number;
            contains(other: Node | null): boolean;
            getRootNode(options?: GetRootNodeOptions): Node;
            hasChildNodes(): boolean;
            insertBefore<T extends Node>(node: T, child: Node | null): T;
            isDefaultNamespace(namespace: string | null): boolean;
            isEqualNode(otherNode: Node | null): boolean;
            isSameNode(otherNode: Node | null): boolean;
            lookupNamespaceURI(prefix: string | null): string | null;
            lookupPrefix(namespace: string | null): string | null;
            normalize(): void;
            removeChild<T extends Node>(child: T): T;
            replaceChild<T extends Node>(node: Node, child: T): T;
            readonly ELEMENT_NODE: 1;
            readonly ATTRIBUTE_NODE: 2;
            readonly TEXT_NODE: 3;
            readonly CDATA_SECTION_NODE: 4;
            readonly ENTITY_REFERENCE_NODE: 5;
            readonly ENTITY_NODE: 6;
            readonly PROCESSING_INSTRUCTION_NODE: 7;
            readonly COMMENT_NODE: 8;
            readonly DOCUMENT_NODE: 9;
            readonly DOCUMENT_TYPE_NODE: 10;
            readonly DOCUMENT_FRAGMENT_NODE: 11;
            readonly NOTATION_NODE: 12;
            readonly DOCUMENT_POSITION_DISCONNECTED: 1;
            readonly DOCUMENT_POSITION_PRECEDING: 2;
            readonly DOCUMENT_POSITION_FOLLOWING: 4;
            readonly DOCUMENT_POSITION_CONTAINS: 8;
            readonly DOCUMENT_POSITION_CONTAINED_BY: 16;
            readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: 32;
            dispatchEvent(event: Event): boolean;
            ariaAtomic: string | null;
            ariaAutoComplete: string | null;
            ariaBrailleLabel: string | null;
            ariaBrailleRoleDescription: string | null;
            ariaBusy: string | null;
            ariaChecked: string | null;
            ariaColCount: string | null;
            ariaColIndex: string | null;
            ariaColSpan: string | null;
            ariaCurrent: string | null;
            ariaDescription: string | null;
            ariaDisabled: string | null;
            ariaExpanded: string | null;
            ariaHasPopup: string | null;
            ariaHidden: string | null;
            ariaInvalid: string | null;
            ariaKeyShortcuts: string | null;
            ariaLabel: string | null;
            ariaLevel: string | null;
            ariaLive: string | null;
            ariaModal: string | null;
            ariaMultiLine: string | null;
            ariaMultiSelectable: string | null;
            ariaOrientation: string | null;
            ariaPlaceholder: string | null;
            ariaPosInSet: string | null;
            ariaPressed: string | null;
            ariaReadOnly: string | null;
            ariaRequired: string | null;
            ariaRoleDescription: string | null;
            ariaRowCount: string | null;
            ariaRowIndex: string | null;
            ariaRowSpan: string | null;
            ariaSelected: string | null;
            ariaSetSize: string | null;
            ariaSort: string | null;
            ariaValueMax: string | null;
            ariaValueMin: string | null;
            ariaValueNow: string | null;
            ariaValueText: string | null;
            role: string | null;
            animate(keyframes: Keyframe[] | PropertyIndexedKeyframes | null, options?: number | KeyframeAnimationOptions): Animation;
            getAnimations(options?: GetAnimationsOptions): Animation[];
            after(...nodes: (Node | string)[]): void;
            before(...nodes: (Node | string)[]): void;
            remove(): void;
            replaceWith(...nodes: (Node | string)[]): void;
            innerHTML: string;
            readonly nextElementSibling: Element | null;
            readonly previousElementSibling: Element | null;
            readonly childElementCount: number;
            readonly children: HTMLCollection;
            readonly firstElementChild: Element | null;
            readonly lastElementChild: Element | null;
            append(...nodes: (Node | string)[]): void;
            prepend(...nodes: (Node | string)[]): void;
            querySelector<K extends keyof HTMLElementTagNameMap>(selectors: K): HTMLElementTagNameMap[K] | null;
            querySelector<K extends keyof SVGElementTagNameMap>(selectors: K): SVGElementTagNameMap[K] | null;
            querySelector<K extends keyof MathMLElementTagNameMap>(selectors: K): MathMLElementTagNameMap[K] | null;
            querySelector<K extends keyof HTMLElementDeprecatedTagNameMap>(selectors: K): HTMLElementDeprecatedTagNameMap[K] | null;
            querySelector<E extends Element = Element>(selectors: string): E | null;
            querySelectorAll<K extends keyof HTMLElementTagNameMap>(selectors: K): NodeListOf<HTMLElementTagNameMap[K]>;
            querySelectorAll<K extends keyof SVGElementTagNameMap>(selectors: K): NodeListOf<SVGElementTagNameMap[K]>;
            querySelectorAll<K extends keyof MathMLElementTagNameMap>(selectors: K): NodeListOf<MathMLElementTagNameMap[K]>;
            querySelectorAll<K extends keyof HTMLElementDeprecatedTagNameMap>(selectors: K): NodeListOf<HTMLElementDeprecatedTagNameMap[K]>;
            querySelectorAll<E extends Element = Element>(selectors: string): NodeListOf<E>;
            replaceChildren(...nodes: (Node | string)[]): void;
            readonly assignedSlot: HTMLSlotElement | null;
            readonly attributeStyleMap: StylePropertyMap;
            readonly style: CSSStyleDeclaration;
            contentEditable: string;
            enterKeyHint: string;
            inputMode: string;
            readonly isContentEditable: boolean;
            onabort: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
            onanimationcancel: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
            onanimationend: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
            onanimationiteration: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
            onanimationstart: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
            onauxclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
            onbeforeinput: ((this: GlobalEventHandlers, ev: InputEvent) => any) | null;
            onbeforetoggle: ((this: GlobalEventHandlers, ev: Event) => any) | null;
            onblur: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null;
            oncancel: ((this: GlobalEventHandlers, ev: Event) => any) | null;
            oncanplay: ((this: GlobalEventHandlers, ev: Event) => any) | null;
            oncanplaythrough: ((this: GlobalEventHandlers, ev: Event) => any) | null;
            onchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
            onclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
            onclose: ((this: GlobalEventHandlers, ev: Event) => any) | null;
            oncontextmenu: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
            oncopy: ((this: GlobalEventHandlers, ev: ClipboardEvent) => any) | null;
            oncuechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
            oncut: ((this: GlobalEventHandlers, ev: ClipboardEvent) => any) | null;
            ondblclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
            ondrag: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
            ondragend: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
            ondragenter: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
            ondragleave: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
            ondragover: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
            ondragstart: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
            ondrop: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
            ondurationchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
            onemptied: ((this: GlobalEventHandlers, ev: Event) => any) | null;
            onended: ((this: GlobalEventHandlers, ev: Event) => any) | null;
            onerror: OnErrorEventHandler;
            onfocus: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null;
            onformdata: ((this: GlobalEventHandlers, ev: FormDataEvent) => any) | null;
            ongotpointercapture: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
            oninput: ((this: GlobalEventHandlers, ev: Event) => any) | null;
            oninvalid: ((this: GlobalEventHandlers, ev: Event) => any) | null;
            onkeydown: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
            onkeypress: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
            onkeyup: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
            onload: ((this: GlobalEventHandlers, ev: Event) => any) | null;
            onloadeddata: ((this: GlobalEventHandlers, ev: Event) => any) | null;
            onloadedmetadata: ((this: GlobalEventHandlers, ev: Event) => any) | null;
            onloadstart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
            onlostpointercapture: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
            onmousedown: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
            onmouseenter: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
            onmouseleave: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
            onmousemove: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
            onmouseout: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
            onmouseover: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
            onmouseup: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
            onpaste: ((this: GlobalEventHandlers, ev: ClipboardEvent) => any) | null;
            onpause: ((this: GlobalEventHandlers, ev: Event) => any) | null;
            onplay: ((this: GlobalEventHandlers, ev: Event) => any) | null;
            onplaying: ((this: GlobalEventHandlers, ev: Event) => any) | null;
            onpointercancel: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
            onpointerdown: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
            onpointerenter: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
            onpointerleave: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
            onpointermove: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
            onpointerout: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
            onpointerover: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
            onpointerup: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
            onprogress: ((this: GlobalEventHandlers, ev: ProgressEvent) => any) | null;
            onratechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
            onreset: ((this: GlobalEventHandlers, ev: Event) => any) | null;
            onresize: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
            onscroll: ((this: GlobalEventHandlers, ev: Event) => any) | null;
            onscrollend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
            onsecuritypolicyviolation: ((this: GlobalEventHandlers, ev: SecurityPolicyViolationEvent) => any) | null;
            onseeked: ((this: GlobalEventHandlers, ev: Event) => any) | null;
            onseeking: ((this: GlobalEventHandlers, ev: Event) => any) | null;
            onselect: ((this: GlobalEventHandlers, ev: Event) => any) | null;
            onselectionchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
            onselectstart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
            onslotchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
            onstalled: ((this: GlobalEventHandlers, ev: Event) => any) | null;
            onsubmit: ((this: GlobalEventHandlers, ev: SubmitEvent) => any) | null;
            onsuspend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
            ontimeupdate: ((this: GlobalEventHandlers, ev: Event) => any) | null;
            ontoggle: ((this: GlobalEventHandlers, ev: Event) => any) | null;
            ontouchcancel?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null | undefined;
            ontouchend?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null | undefined;
            ontouchmove?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null | undefined;
            ontouchstart?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null | undefined;
            ontransitioncancel: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
            ontransitionend: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
            ontransitionrun: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
            ontransitionstart: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
            onvolumechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
            onwaiting: ((this: GlobalEventHandlers, ev: Event) => any) | null;
            onwebkitanimationend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
            onwebkitanimationiteration: ((this: GlobalEventHandlers, ev: Event) => any) | null;
            onwebkitanimationstart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
            onwebkittransitionend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
            onwheel: ((this: GlobalEventHandlers, ev: WheelEvent) => any) | null;
            autofocus: boolean;
            readonly dataset: DOMStringMap;
            nonce?: string;
            tabIndex: number;
            blur(): void;
            focus(options?: FocusOptions): void;
        };
        tag: string;
        observedAttributes: Set<string>;
    } | undefined;
}

declare namespace $ {

	type $mpds_visavis_plot_matrix_x_op__FOJ9FH8Y = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['matrix_x_op'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Matrix'] >['x_op'] >[0]
	>
	type $mpds_visavis_plot_matrix_y_op__OM7K10JT = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['matrix_y_op'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Matrix'] >['y_op'] >[0]
	>
	type $mpds_visavis_plot_matrix_x_sort__39GS0XY3 = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['matrix_x_sort'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Matrix'] >['x_sort'] >[0]
	>
	type $mpds_visavis_plot_matrix_y_sort__F894U11H = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['matrix_y_sort'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Matrix'] >['y_sort'] >[0]
	>
	type $mpds_visavis_plot_matrix__plot_raw__OU2CFTV1 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_matrix['plot_raw'] >
	>
	type $mpds_visavis_plot_matrix__multi_jsons__8ITD98J1 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['multi_jsons'] >
		,
		ReturnType< $mpds_visavis_plot_matrix['multi_jsons'] >
	>
	type $mpds_visavis_plot_matrix__show_setup__9T4DQ4FF = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['show_setup'] >
		,
		ReturnType< $mpds_visavis_plot_matrix['show_setup'] >
	>
	type $mpds_visavis_plot_matrix__nonformers_checked__RH4ARP6O = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['nonformers_checked'] >
		,
		ReturnType< $mpds_visavis_plot_matrix['nonformers_checked'] >
	>
	type $mpds_visavis_plot_matrix__fixel_checked__JAZ6VPJB = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['matrix_fixel_checked'] >
		,
		ReturnType< $mpds_visavis_plot_matrix['fixel_checked'] >
	>
	type $mpds_visavis_plot_matrix__matrix_click__UWI6HSF3 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['matrix_click'] >
		,
		ReturnType< $mpds_visavis_plot_matrix['matrix_click'] >
	>
	type $mpds_visavis_plot_x_op__I21ZKHBV = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['x_op'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Cube'] >['x_op'] >[0]
	>
	type $mpds_visavis_plot_y_op__VHUTOYHR = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['y_op'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Cube'] >['y_op'] >[0]
	>
	type $mpds_visavis_plot_z_op__60HPJL59 = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['z_op'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Cube'] >['z_op'] >[0]
	>
	type $mpds_visavis_plot_x_sort__MT842R2P = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['x_sort'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Cube'] >['x_sort'] >[0]
	>
	type $mpds_visavis_plot_y_sort__7WUSBHCZ = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['y_sort'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Cube'] >['y_sort'] >[0]
	>
	type $mpds_visavis_plot_z_sort__V7QIUQKL = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['z_sort'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Cube'] >['z_sort'] >[0]
	>
	type $mpds_visavis_plot_cube__plot_raw__6VUHG8XC = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_cube['plot_raw'] >
	>
	type $mpds_visavis_plot_cube__multi_jsons__UXUNZJDM = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['multi_jsons'] >
		,
		ReturnType< $mpds_visavis_plot_cube['multi_jsons'] >
	>
	type $mpds_visavis_plot_cube__show_setup__1V64K6XE = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['show_setup'] >
		,
		ReturnType< $mpds_visavis_plot_cube['show_setup'] >
	>
	type $mpds_visavis_plot_cube__show_fixel__P8CY92J7 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['show_fixel'] >
		,
		ReturnType< $mpds_visavis_plot_cube['show_fixel'] >
	>
	type $mpds_visavis_plot_cube__nonformers_checked__0INVTUBY = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['nonformers_checked'] >
		,
		ReturnType< $mpds_visavis_plot_cube['nonformers_checked'] >
	>
	type $mpds_visavis_plot_cube__fixel_checked__LRSMBTG8 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['cube_fixel_checked'] >
		,
		ReturnType< $mpds_visavis_plot_cube['fixel_checked'] >
	>
	type $mpds_visavis_plot_cube__cube_click__5FW4OW5Y = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['cube_click'] >
		,
		ReturnType< $mpds_visavis_plot_cube['cube_click'] >
	>
	type $mpds_visavis_plot_phase__plot_raw__2UCNJHWW = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_phase['plot_raw'] >
	>
	type $mpds_visavis_plot_phase__phase_click__U41CCHDP = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['phase_click'] >
		,
		ReturnType< $mpds_visavis_plot_phase['phase_click'] >
	>
	type $mpds_visavis_plot_bar__plot_raw__CWDWXDF2 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_bar['plot_raw'] >
	>
	type $mpds_visavis_plot_bar__bar_click__EOAEE733 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['bar_click'] >
		,
		ReturnType< $mpds_visavis_plot_bar['bar_click'] >
	>
	type $mpds_visavis_plot_discovery_elementals_on__37QOM09B = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['discovery_elementals_on'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Discovery'] >['elementals_on'] >[0]
	>
	type $mpds_visavis_plot_discovery__plot_raw__0553M5HZ = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_discovery['plot_raw'] >
	>
	type $mpds_visavis_plot_discovery__json_cmp__6OGOQIOC = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['json_cmp'] >
		,
		ReturnType< $mpds_visavis_plot_discovery['json_cmp'] >
	>
	type $mpds_visavis_plot_discovery__show_setup__PIQOGYHO = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['show_setup'] >
		,
		ReturnType< $mpds_visavis_plot_discovery['show_setup'] >
	>
	type $mpds_visavis_plot_discovery__discovery_click__MGNV906O = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['discovery_click'] >
		,
		ReturnType< $mpds_visavis_plot_discovery['discovery_click'] >
	>
	type $mpds_visavis_plot_eigen__plot_raw__3EUTF6EV = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_eigen['plot_raw'] >
	>
	type $mpds_visavis_plot_pie__plot_raw__TQY7I5MO = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_pie['plot_raw'] >
	>
	type $mpds_visavis_plot_pie__pie_click__AFR5YAOR = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['pie_click'] >
		,
		ReturnType< $mpds_visavis_plot_pie['pie_click'] >
	>
	type $mpds_visavis_plot_scatter__plot_raw__CCNKIXAR = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_scatter['plot_raw'] >
	>
	type $mpds_visavis_plot_scatter__notify__TZDYBTMO = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['notify'] >
		,
		ReturnType< $mpds_visavis_plot_scatter['notify'] >
	>
	type $mpds_visavis_plot_customscatter__plot_raw__9MTI3ZS6 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_customscatter['plot_raw'] >
	>
	type $mpds_visavis_plot_customscatter__nplots_changed__DY1R8Y3G = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['nplots_changed'] >
		,
		ReturnType< $mpds_visavis_plot_customscatter['nplots_changed'] >
	>
	type $mpds_visavis_plot_customscatter__legend_click__BIRGD22R = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['legend_click'] >
		,
		ReturnType< $mpds_visavis_plot_customscatter['legend_click'] >
	>
	type $mpds_visavis_plot_heatmap__plot_raw__54EECZ1U = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_heatmap['plot_raw'] >
	>
	type $mpds_visavis_plot_graph_rel__GC6X6FJ8 = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['graph_rel'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Graph'] >['graph_rel'] >[0]
	>
	type $mpds_visavis_plot_graph__plot_raw__9WCJWHD3 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_graph['plot_raw'] >
	>
	type $mpds_visavis_plot_graph__graph_click__BHH89RSM = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['graph_click'] >
		,
		ReturnType< $mpds_visavis_plot_graph['graph_click'] >
	>
	type $mpds_visavis_plot_graph__notify__JWQC6R32 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['notify'] >
		,
		ReturnType< $mpds_visavis_plot_graph['notify'] >
	>
	type $mol_locale_select__value__WD7UVLWH = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['locale'] >
		,
		ReturnType< $mol_locale_select['value'] >
	>
	type $mol_check__Icon__0W3M0A52 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['Expand_icon'] >
		,
		ReturnType< $mol_check['Icon'] >
	>
	type $mol_check__checked__PIXD36PR = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['fullscreen'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_paragraph__title__ZL2K8MOL = $mol_type_enforce<
		string
		,
		ReturnType< $mol_paragraph['title'] >
	>
	export class $mpds_visavis_plot extends $mol_view {
		locale( ): string
		Expand_icon( ): $mol_icon_arrow_expand_all
		fullscreen( next?: boolean ): boolean
		nonformers_checked( next?: boolean ): boolean
		matrix_fixel_checked( next?: boolean ): boolean
		matrix_x_op( next?: ReturnType< ReturnType< $mpds_visavis_plot['Matrix'] >['x_op'] > ): ReturnType< ReturnType< $mpds_visavis_plot['Matrix'] >['x_op'] >
		matrix_y_op( next?: ReturnType< ReturnType< $mpds_visavis_plot['Matrix'] >['y_op'] > ): ReturnType< ReturnType< $mpds_visavis_plot['Matrix'] >['y_op'] >
		matrix_x_sort( next?: ReturnType< ReturnType< $mpds_visavis_plot['Matrix'] >['x_sort'] > ): ReturnType< ReturnType< $mpds_visavis_plot['Matrix'] >['x_sort'] >
		matrix_y_sort( next?: ReturnType< ReturnType< $mpds_visavis_plot['Matrix'] >['y_sort'] > ): ReturnType< ReturnType< $mpds_visavis_plot['Matrix'] >['y_sort'] >
		matrix_click( next?: any ): any
		Matrix( ): $mpds_visavis_plot_matrix
		show_fixel( next?: boolean ): boolean
		cube_fixel_checked( next?: boolean ): boolean
		x_op( next?: ReturnType< ReturnType< $mpds_visavis_plot['Cube'] >['x_op'] > ): ReturnType< ReturnType< $mpds_visavis_plot['Cube'] >['x_op'] >
		y_op( next?: ReturnType< ReturnType< $mpds_visavis_plot['Cube'] >['y_op'] > ): ReturnType< ReturnType< $mpds_visavis_plot['Cube'] >['y_op'] >
		z_op( next?: ReturnType< ReturnType< $mpds_visavis_plot['Cube'] >['z_op'] > ): ReturnType< ReturnType< $mpds_visavis_plot['Cube'] >['z_op'] >
		x_sort( next?: ReturnType< ReturnType< $mpds_visavis_plot['Cube'] >['x_sort'] > ): ReturnType< ReturnType< $mpds_visavis_plot['Cube'] >['x_sort'] >
		y_sort( next?: ReturnType< ReturnType< $mpds_visavis_plot['Cube'] >['y_sort'] > ): ReturnType< ReturnType< $mpds_visavis_plot['Cube'] >['y_sort'] >
		z_sort( next?: ReturnType< ReturnType< $mpds_visavis_plot['Cube'] >['z_sort'] > ): ReturnType< ReturnType< $mpds_visavis_plot['Cube'] >['z_sort'] >
		cube_click( next?: any ): any
		Cube( ): $mpds_visavis_plot_cube
		phase_click( next?: any ): any
		phase_data_demo( ): ReturnType< ReturnType< $mpds_visavis_plot['Phase'] >['data_demo'] >
		Phase( ): $mpds_visavis_plot_phase
		bar_click( next?: any ): any
		Bar( ): $mpds_visavis_plot_bar
		discovery_elementals_on( next?: ReturnType< ReturnType< $mpds_visavis_plot['Discovery'] >['elementals_on'] > ): ReturnType< ReturnType< $mpds_visavis_plot['Discovery'] >['elementals_on'] >
		discovery_click( next?: any ): any
		Discovery( ): $mpds_visavis_plot_discovery
		Eigen( ): $mpds_visavis_plot_eigen
		pie_click( next?: any ): any
		Pie( ): $mpds_visavis_plot_pie
		Scatter( ): $mpds_visavis_plot_scatter
		nplots_changed( next?: any ): any
		legend_click( next?: any ): any
		Customscatter( ): $mpds_visavis_plot_customscatter
		Heatmap( ): $mpds_visavis_plot_heatmap
		graph_rel( next?: ReturnType< ReturnType< $mpds_visavis_plot['Graph'] >['graph_rel'] > ): ReturnType< ReturnType< $mpds_visavis_plot['Graph'] >['graph_rel'] >
		graph_click( next?: any ): any
		Graph( ): $mpds_visavis_plot_graph
		attr( ): ({ 
			'mol_theme': string,
			'fullscreen': ReturnType< $mpds_visavis_plot['fullscreen'] >,
		})  & ReturnType< $mol_view['attr'] >
		Locale( ): $mol_locale_select
		json_request( next?: any ): any
		json( ): any
		json_cmp_request( next?: any ): any
		json_cmp( ): any
		multi_requests( next?: readonly(string)[] ): readonly(string)[]
		multi_jsons( ): any
		plot_raw( ): any
		show_setup( ): boolean
		notify( next?: any ): any
		Fullscreen( ): $mol_check
		show_demo_warn( next?: boolean ): boolean
		Demo_warn( ): $mol_paragraph
		plots( ): ({ 
			'matrix': ReturnType< $mpds_visavis_plot['Matrix'] >,
			'plot3d': ReturnType< $mpds_visavis_plot['Cube'] >,
			'pd': ReturnType< $mpds_visavis_plot['Phase'] >,
			'bar': ReturnType< $mpds_visavis_plot['Bar'] >,
			'discovery': ReturnType< $mpds_visavis_plot['Discovery'] >,
			'eigenplot': ReturnType< $mpds_visavis_plot['Eigen'] >,
			'pie': ReturnType< $mpds_visavis_plot['Pie'] >,
			'scatter': ReturnType< $mpds_visavis_plot['Scatter'] >,
			'customscatter': ReturnType< $mpds_visavis_plot['Customscatter'] >,
			'heatmap': ReturnType< $mpds_visavis_plot['Heatmap'] >,
			'graph': ReturnType< $mpds_visavis_plot['Graph'] >,
		}) 
	}
	
}

//# sourceMappingURL=plot.view.tree.d.ts.map
declare namespace $.$$ {
    class $mpds_visavis_plot extends $.$mpds_visavis_plot {
        static fetch_plot_json(request: RequestInfo | null): any;
        json_fetched(request: string): any;
        json(): any;
        json_cmp(): any;
        multi_requests(next?: string[]): readonly string[];
        multi_jsons(): any[] | null;
        json_cmp_request(next?: string | null): string | null;
        inconsistent_projection(): boolean;
        plot_raw(): $mpds_visavis_plot_raw | null;
        sub(): ($.$mol_paragraph | $.$mol_check | $.$mpds_visavis_plot_matrix | $.$mpds_visavis_plot_cube | $.$mpds_visavis_plot_phase | $.$mpds_visavis_plot_bar | $.$mpds_visavis_plot_discovery | $.$mpds_visavis_plot_eigen | $.$mpds_visavis_plot_pie | $.$mpds_visavis_plot_scatter | $.$mpds_visavis_plot_customscatter | $.$mpds_visavis_plot_heatmap | $.$mpds_visavis_plot_graph)[];
        matrix_fixel_checked(next?: any): boolean;
        cube_fixel_checked(next?: any): boolean;
        on_fixel_checked(checked: boolean): void;
        url_unfixel(url: string): string;
        url_fixel(url: string): string;
        notify(msg: string): void;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
}

declare namespace $ {
    type $mol_blob = Blob;
    let $mol_blob: {
        prototype: Blob;
        new (blobParts?: readonly BlobPart[], options?: BlobPropertyBag): Blob;
    };
}

declare namespace $ {
    function $mol_blob_text(blob: $mol_blob): Promise<string>;
}

declare namespace $ {
    function $mol_blob_json(blob: $mol_blob): Promise<any>;
}

declare namespace $ {

	type $mol_paragraph__title__ID5IIGW0 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_paragraph__title__9MDCY9WH = $mol_type_enforce<
		string
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_button_open__accept__UT5WX4PX = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_open['accept'] >
	>
	type $mol_button_open__files__L45MY6WK = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['files_read'] >
		,
		ReturnType< $mol_button_open['files'] >
	>
	type $mol_list__sub__2X6RMK0F = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['sub'] >
	>
	type $mol_link__title__9952PPI1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_link__arg__APWWIRD6 = $mol_type_enforce<
		({ 
			'section': string,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_list__rows__5NDEAYIO = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_drop__receive__O1HZABMC = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['drop_file'] >
		,
		ReturnType< $mol_drop['receive'] >
	>
	type $mol_drop__Sub__BIMI8FTI = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['Start_page_content'] >
		,
		ReturnType< $mol_drop['Sub'] >
	>
	type $mol_link__title__5ORX3AEH = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_link__arg__L1OLB7OR = $mol_type_enforce<
		({ 
			'section': any,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__title__MCQ549O8 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_link__arg__6ZOCQ8E0 = $mol_type_enforce<
		({ 
			'section': string,
			'file': any,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link_iconed__uri__XL3ZN567 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['uri'] >
	>
	type $mol_link_iconed__title__C7E2S05U = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['title'] >
	>
	type $mol_paragraph__title__ZCCE2O6R = $mol_type_enforce<
		string
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_button_open_native__accept__66W13SRQ = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_open_native['accept'] >
	>
	type $mol_button_open_native__files__ZS389PAU = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['files_read'] >
		,
		ReturnType< $mol_button_open_native['files'] >
	>
	type $mol_button_minor__sub__96W9E8AE = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_drop__receive__FI1JGXIY = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['drop_file'] >
		,
		ReturnType< $mol_drop['receive'] >
	>
	type $mol_drop__Sub__YM2OZQK7 = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['History_upload'] >
		,
		ReturnType< $mol_drop['Sub'] >
	>
	type $mol_button_minor__click__G67P0SKH = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['history_drop'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__BB0O47ZH = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub__T5TPJKYD = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows__8C704Q9D = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['history_rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_list__title__CS4WQBHG = $mol_type_enforce<
		string
		,
		ReturnType< $mol_list['title'] >
	>
	type $mol_list__sub__9U8KFET4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['sub'] >
	>
	type $mol_link__arg__I97ME09N = $mol_type_enforce<
		({ 
			'file': ReturnType< $mpds_visavis_app['plot_id'] >,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__title__R2THQ326 = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['plot_id'] >
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_list__title__IF8JMHNR = $mol_type_enforce<
		string
		,
		ReturnType< $mol_list['title'] >
	>
	type $mol_list__rows__YW65BRY1 = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['example_rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_page__title__G8V7X981 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__tools__WY3C7ZOE = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__body__D8BUMBK0 = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['menu_body'] >
		,
		ReturnType< $mol_page['body'] >
	>
	type $mpds_visavis_plot__plot_raw__7V323GOZ = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot['plot_raw'] >
	>
	type $mpds_visavis_plot__show_setup__WBFSQOH3 = $mol_type_enforce<
		boolean
		,
		ReturnType< $mpds_visavis_plot['show_setup'] >
	>
	type $mpds_visavis_plot__show_fixel__4W6DIENS = $mol_type_enforce<
		boolean
		,
		ReturnType< $mpds_visavis_plot['show_fixel'] >
	>
	type $mpds_visavis_plot__show_demo_warn__7WT9IO49 = $mol_type_enforce<
		boolean
		,
		ReturnType< $mpds_visavis_plot['show_demo_warn'] >
	>
	type $mol_page__title__DYOB2IEP = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['plot_id'] >
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__Body_content__0R8VATIP = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['Plot_view'] >
		,
		ReturnType< $mol_page['Body_content'] >
	>
	export class $mpds_visavis_app extends $mol_book2 {
		drop_file( next?: any ): any
		Upload_label_choose( ): $mol_paragraph
		Upload_label_drop( ): $mol_paragraph
		files_read( next?: any ): any
		Start_page_upload( ): $mol_button_open
		Upload_content( ): $mol_list
		Examples_open( ): $mol_link
		Start_page_content( ): $mol_list
		Start_page( ): $mol_drop
		History_link( ): $mol_link
		Examples_link( ): $mol_link
		Source( ): $mol_link_iconed
		History_upload_label( ): $mol_paragraph
		History_upload_icon( ): $mol_icon_upload
		History_upload_native( ): $mol_button_open_native
		History_upload( ): $mol_button_minor
		History_drop_area( ): $mol_drop
		history_drop( id: any, next?: any ): any
		Plot_drop_icon( id: any): $mol_icon_delete
		Plot_drop( id: any): $mol_button_minor
		History_plot_link( id: any): $mol_view
		history_rows( ): readonly(any)[]
		History_rows( ): $mol_list
		History( ): $mol_list
		plot_id( id: any): string
		Plot_link( id: any): $mol_link
		example_rows( ): readonly(any)[]
		Examples( ): $mol_list
		menu_body( ): readonly(any)[]
		Menu( ): $mol_page
		Plot_opened( ): any
		plot_raw( id: any): any
		Plot_view( id: any): $mpds_visavis_plot
		attr( ): ({ 
			'mol_theme': string,
		}) 
		title( ): string
		examples( ): Record<string, string>
		Placeholder( ): any
		pages( ): readonly(any)[]
		Plot_page( id: any): $mol_page
	}
	
}

//# sourceMappingURL=app.view.tree.d.ts.map
declare namespace $.$$ {
    class $mpds_visavis_app extends $.$mpds_visavis_app {
        files_read(next: readonly File[]): void;
        drop_file(transfer: any): void;
        history_add(plot_raw: $mpds_visavis_plot_raw): string;
        history_drop(id: string): void;
        history_plot_ids(next?: string[]): string[];
        plot_raw(id: string, next?: $mpds_visavis_plot_raw | null): $mpds_visavis_plot_raw | null;
        plot_raw_example(id: string): $mpds_visavis_plot_raw;
        history_rows(): $mol_view[];
        example_rows(): $.$mol_link[];
        plot_id(id: string): string;
        plot_opened_id(next?: string | null): string;
        Plot_opened(): $mol_page | null;
        Start_page_showed(): boolean;
        pages(): ($.$mol_drop | $mol_page | null)[];
        menu_body(): $.$mol_list[];
        menu_section(): string | null;
        json_request_hash(): string | null;
    }
}

declare namespace $.$$ {
}

export = $;
//# sourceMappingURL=node.d.ts.map
