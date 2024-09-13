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
    class $mol_after_tick extends $mol_object2 {
        task: () => void;
        static promise: Promise<void> | null;
        cancelled: boolean;
        constructor(task: () => void);
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
        static plan_task: $mol_after_tick | null;
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

	type $mol_view__title__ZZNYL8O1 = $mol_type_enforce<
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

	type $mol_speck__value__Y3GKXDBH = $mol_type_enforce<
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

	type $mol_svg_path__geometry__NYP9T6P5 = $mol_type_enforce<
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

	type $mol_button_open_native__files__9JNJIAQX = $mol_type_enforce<
		ReturnType< $mol_button_open['files'] >
		,
		ReturnType< $mol_button_open_native['files'] >
	>
	type $mol_button_open_native__accept__W9A4CIBK = $mol_type_enforce<
		ReturnType< $mol_button_open['accept'] >
		,
		ReturnType< $mol_button_open_native['accept'] >
	>
	type $mol_button_open_native__multiple__J227GLL7 = $mol_type_enforce<
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

	type $mol_view__style__BHGIKLBU = $mol_type_enforce<
		({ 
			'paddingTop': ReturnType< $mol_list['gap_before'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__style__9M0A4ADZ = $mol_type_enforce<
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

	type $mol_image__uri__QCSXMO5N = $mol_type_enforce<
		ReturnType< $mol_link_iconed['icon'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_image__title__D5LDZR3O = $mol_type_enforce<
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

	type $mol_view__dom_name__B9QNMI5M = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub__1Q6HOX3K = $mol_type_enforce<
		ReturnType< $mol_page['title_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub__PPECGQ44 = $mol_type_enforce<
		ReturnType< $mol_page['tools'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_height__UFAGALBR = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__dom_name__F9HG75ZN = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub__3OEAGQRG = $mol_type_enforce<
		ReturnType< $mol_page['head'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_page_body_scroll_top__3GSKASX1 = $mol_type_enforce<
		Parameters< $mol_page['body_scroll_top'] >[0]
		,
		Parameters< ReturnType< $mol_page['Body'] >['scroll_top'] >[0]
	>
	type $mol_view__sub__P9TE1JLI = $mol_type_enforce<
		ReturnType< $mol_page['body'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_scroll__sub__B5EBPO8D = $mol_type_enforce<
		ReturnType< $mol_page['body_content'] >
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_view__dom_name__ZAQN2ZLS = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub__TWJCVQE2 = $mol_type_enforce<
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

	type $mpds_visavis_plot_legend_cmp_label__label__SV5JX0YP = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_legend_cmp['label'] >
		,
		ReturnType< $mpds_visavis_plot_legend_cmp_label['label'] >
	>
	type $mpds_visavis_plot_legend_cmp_label__background__X7AR33BO = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_legend_cmp['background'] >
		,
		ReturnType< $mpds_visavis_plot_legend_cmp_label['background'] >
	>
	type $mpds_visavis_plot_legend_cmp_label__label__PPHPC3FS = $mol_type_enforce<
		string
		,
		ReturnType< $mpds_visavis_plot_legend_cmp_label['label'] >
	>
	type $mpds_visavis_plot_legend_cmp_label__background__BEC60FDJ = $mol_type_enforce<
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

	type $mol_view__sub__0P9G3R3U = $mol_type_enforce<
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

	type $mol_check__checked__H49K1PCQ = $mol_type_enforce<
		ReturnType< $mol_check_list['option_checked'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_check__label__N5LE9BD7 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_label'] >
		,
		ReturnType< $mol_check['label'] >
	>
	type $mol_check__enabled__8KNU5N4Q = $mol_type_enforce<
		ReturnType< $mol_check_list['option_enabled'] >
		,
		ReturnType< $mol_check['enabled'] >
	>
	type $mol_check__hint__33LTG5UG = $mol_type_enforce<
		ReturnType< $mol_check_list['option_hint'] >
		,
		ReturnType< $mol_check['hint'] >
	>
	type $mol_check__minimal_height__JJDKVDET = $mol_type_enforce<
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

	type $mol_view__minimal_height__RVN0BH2T = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub__0MZLUYWK = $mol_type_enforce<
		ReturnType< $mol_labeler['label'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_height__9CZ7GXN7 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub__BWDNZLWJ = $mol_type_enforce<
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

	type $mol_pop_bubble__align__NVGB1EHG = $mol_type_enforce<
		ReturnType< $mol_pop['align'] >
		,
		ReturnType< $mol_pop_bubble['align'] >
	>
	type $mol_pop_bubble__content__HYC7121J = $mol_type_enforce<
		ReturnType< $mol_pop['bubble_content'] >
		,
		ReturnType< $mol_pop_bubble['content'] >
	>
	type $mol_pop_bubble__height_max__HRJJRPGE = $mol_type_enforce<
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

	type $mol_check__minimal_width__CC1RTKXG = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_width'] >
	>
	type $mol_check__minimal_height__BJG9T9U7 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_height'] >
	>
	type $mol_check__enabled__GGPKO3VG = $mol_type_enforce<
		ReturnType< $mol_pick['trigger_enabled'] >
		,
		ReturnType< $mol_check['enabled'] >
	>
	type $mol_check__checked__FT95YP9V = $mol_type_enforce<
		ReturnType< $mol_pick['showed'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_check__clicks__07NKLCKG = $mol_type_enforce<
		ReturnType< $mol_pick['clicks'] >
		,
		ReturnType< $mol_check['clicks'] >
	>
	type $mol_check__sub__YEPGYHSA = $mol_type_enforce<
		ReturnType< $mol_pick['trigger_content'] >
		,
		ReturnType< $mol_check['sub'] >
	>
	type $mol_check__hint__MG9ICG9P = $mol_type_enforce<
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

	type $mol_paragraph__sub__NYSLPE2B = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	type $mol_paragraph__sub__7KILPZP9 = $mol_type_enforce<
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

	type $mol_hotkey__mod_ctrl__YH69FH7X = $mol_type_enforce<
		ReturnType< $mol_string['submit_with_ctrl'] >
		,
		ReturnType< $mol_hotkey['mod_ctrl'] >
	>
	type $mol_hotkey__key__WFBM3QJ9 = $mol_type_enforce<
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

	type $mol_hotkey__key__RRIKOWM8 = $mol_type_enforce<
		({ 
			escape( next?: ReturnType< $mol_search['clear'] > ): ReturnType< $mol_search['clear'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	type $mol_nav__keys_y__X0X4WDLZ = $mol_type_enforce<
		ReturnType< $mol_search['nav_components'] >
		,
		ReturnType< $mol_nav['keys_y'] >
	>
	type $mol_nav__current_y__VPD1CVOZ = $mol_type_enforce<
		ReturnType< $mol_search['nav_focused'] >
		,
		ReturnType< $mol_nav['current_y'] >
	>
	type $mol_string__value__0JP5OR3H = $mol_type_enforce<
		ReturnType< $mol_search['query'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__hint__T0S6TO3J = $mol_type_enforce<
		ReturnType< $mol_search['hint'] >
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__submit__W1HF46TG = $mol_type_enforce<
		ReturnType< $mol_search['submit'] >
		,
		ReturnType< $mol_string['submit'] >
	>
	type $mol_string__enabled__C4Y775ZO = $mol_type_enforce<
		ReturnType< $mol_search['enabled'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_string__keyboard__GHA86588 = $mol_type_enforce<
		ReturnType< $mol_search['keyboard'] >
		,
		ReturnType< $mol_string['keyboard'] >
	>
	type $mol_string__enter__7EW85AAJ = $mol_type_enforce<
		ReturnType< $mol_search['enter'] >
		,
		ReturnType< $mol_string['enter'] >
	>
	type $mol_button_minor__hint__VHO5FXO1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__click__OP9P4GZE = $mol_type_enforce<
		ReturnType< $mol_search['clear'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__VT36ITAR = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_list__rows__VRZ64993 = $mol_type_enforce<
		ReturnType< $mol_search['menu_items'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_dimmer__haystack__MYLV00Y8 = $mol_type_enforce<
		ReturnType< $mol_search['suggest_label'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle__WEX8GB6W = $mol_type_enforce<
		ReturnType< $mol_search['query'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_search_plugins__K9JZDMGQ = $mol_type_enforce<
		ReturnType< $mol_pop['plugins'] >[number]
		,
		$mol_plugin
	>
	type $mol_view__sub__6X4ILY8X = $mol_type_enforce<
		ReturnType< $mol_search['anchor_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__click__RTO8NILN = $mol_type_enforce<
		ReturnType< $mol_search['suggest_select'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__WYMH59OJ = $mol_type_enforce<
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

	type $mol_dimmer__haystack__NQV2XDKQ = $mol_type_enforce<
		ReturnType< $mol_select['option_label'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle__JE8OJ3ZI = $mol_type_enforce<
		ReturnType< $mol_select['filter_pattern'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_nav__keys_y__7430C8NN = $mol_type_enforce<
		ReturnType< $mol_select['nav_components'] >
		,
		ReturnType< $mol_nav['keys_y'] >
	>
	type $mol_nav__current_y__45YTXX3Z = $mol_type_enforce<
		ReturnType< $mol_select['option_focused'] >
		,
		ReturnType< $mol_nav['current_y'] >
	>
	type $mol_nav__cycle__FJLUUEVF = $mol_type_enforce<
		ReturnType< $mol_select['nav_cycle'] >
		,
		ReturnType< $mol_nav['cycle'] >
	>
	type $mol_list__rows__1X4NY468 = $mol_type_enforce<
		ReturnType< $mol_select['menu_content'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub__9WEXLZLJ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_button_minor__event_click__SLA0FBF0 = $mol_type_enforce<
		ReturnType< $mol_select['event_select'] >
		,
		ReturnType< $mol_button_minor['event_click'] >
	>
	type $mol_button_minor__sub__5029QMPP = $mol_type_enforce<
		ReturnType< $mol_select['option_content'] >
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub__M4IXLGYZ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_search__query__WFO2A6YD = $mol_type_enforce<
		ReturnType< $mol_select['filter_pattern'] >
		,
		ReturnType< $mol_search['query'] >
	>
	type $mol_search__hint__3SHE6DJA = $mol_type_enforce<
		ReturnType< $mol_select['filter_hint'] >
		,
		ReturnType< $mol_search['hint'] >
	>
	type $mol_search__submit__A8CWKX41 = $mol_type_enforce<
		ReturnType< $mol_select['submit'] >
		,
		ReturnType< $mol_search['submit'] >
	>
	type $mol_search__enabled__NTE22GP0 = $mol_type_enforce<
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

	type $mpds_visavis_elements_nonformer_pd_tri__P01R5J7J = $mol_type_enforce<
		`Pm-Dy-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TYWMDAWB = $mol_type_enforce<
		`Yb-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K1PVC88N = $mol_type_enforce<
		`Cr-Ni-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WY68LOEK = $mol_type_enforce<
		`Pu-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RT32FVCN = $mol_type_enforce<
		`Pm-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CE5F1LM3 = $mol_type_enforce<
		`Tm-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OYHKDP0U = $mol_type_enforce<
		`Nd-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EMH09REE = $mol_type_enforce<
		`Al-Zn-In`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I7WV8G4W = $mol_type_enforce<
		`Eu-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QWH3ILYY = $mol_type_enforce<
		`Ni-Ru-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IZT7AHMV = $mol_type_enforce<
		`Ce-Pm-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DY83ZKYW = $mol_type_enforce<
		`Cu-Tc-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V5XY0R3S = $mol_type_enforce<
		`La-Sm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7OHV2H41 = $mol_type_enforce<
		`La-Yb-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MOICRUOX = $mol_type_enforce<
		`Gd-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0LCBB850 = $mol_type_enforce<
		`Li-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KM08973Q = $mol_type_enforce<
		`La-Dy-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7J4JFUI3 = $mol_type_enforce<
		`Ba-Yb-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XB009SBX = $mol_type_enforce<
		`K-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RGOP0DW4 = $mol_type_enforce<
		`Y-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z6OOBET2 = $mol_type_enforce<
		`Li-Ce-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C23T89WP = $mol_type_enforce<
		`Sc-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__466SVHHS = $mol_type_enforce<
		`Ho-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A02J4XEY = $mol_type_enforce<
		`Tm-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OC18IMVF = $mol_type_enforce<
		`La-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7JY1VVX4 = $mol_type_enforce<
		`Ir-Pd-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__41AJOJWK = $mol_type_enforce<
		`Gd-Ho-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TUVQDRYJ = $mol_type_enforce<
		`Ca-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X0POSWTP = $mol_type_enforce<
		`Rb-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I0V5EWAW = $mol_type_enforce<
		`La-Yb-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MC04MITO = $mol_type_enforce<
		`Nd-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CTE5OPCB = $mol_type_enforce<
		`Yb-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZDMO5DRW = $mol_type_enforce<
		`La-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GKTCJQS8 = $mol_type_enforce<
		`Ba-La-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LHF9YCGJ = $mol_type_enforce<
		`Cs-Li-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R47DKYQ3 = $mol_type_enforce<
		`Ba-Sr-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H40KH2HG = $mol_type_enforce<
		`Yb-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5T9S7LM0 = $mol_type_enforce<
		`Cs-Pr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9GEPSTN3 = $mol_type_enforce<
		`Zn-Bi-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CCPIHP3C = $mol_type_enforce<
		`Tb-Pm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZCUWCYW6 = $mol_type_enforce<
		`Gd-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8J6U52HF = $mol_type_enforce<
		`Ce-Eu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZDY1LY98 = $mol_type_enforce<
		`Fe-Os-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0DNK4344 = $mol_type_enforce<
		`Nb-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TOHD9I6Q = $mol_type_enforce<
		`Eu-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0LKGTQSD = $mol_type_enforce<
		`Be-Al-In`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T5EHMIS0 = $mol_type_enforce<
		`Pr-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__67ZOLF13 = $mol_type_enforce<
		`Li-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FGQR49R5 = $mol_type_enforce<
		`Pu-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JSKQR3XT = $mol_type_enforce<
		`Rb-Na-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A1Z21CRC = $mol_type_enforce<
		`Mg-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S7LHQA3I = $mol_type_enforce<
		`Pr-Nd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WYWHEOV0 = $mol_type_enforce<
		`Pr-Sm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RU385VT1 = $mol_type_enforce<
		`Pd-Ru-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WSKO17YA = $mol_type_enforce<
		`Er-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SMS5WKBD = $mol_type_enforce<
		`Ce-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S9NIX0KV = $mol_type_enforce<
		`Li-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9MZVGWBN = $mol_type_enforce<
		`Nd-Gd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9ZMXNEBN = $mol_type_enforce<
		`Fe-Rh-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YKFMM7SC = $mol_type_enforce<
		`Cs-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8VXL5Z5J = $mol_type_enforce<
		`Ru-Pt-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RXXD793Q = $mol_type_enforce<
		`Ca-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B9C584E1 = $mol_type_enforce<
		`Cs-K-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4QQIB9XW = $mol_type_enforce<
		`Lu-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PR1683PX = $mol_type_enforce<
		`Nd-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JSD4AXKN = $mol_type_enforce<
		`Ga-Si-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V7S41IXR = $mol_type_enforce<
		`K-Mg-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__223DDO5N = $mol_type_enforce<
		`Ce-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8ZB5KQGW = $mol_type_enforce<
		`Yb-Dy-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YMZWQ6HG = $mol_type_enforce<
		`Ba-Nd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5G327K3D = $mol_type_enforce<
		`Y-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9CBMIZBX = $mol_type_enforce<
		`Pr-Gd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HK1TI6I7 = $mol_type_enforce<
		`La-Y-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EWE6J3EL = $mol_type_enforce<
		`Er-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HXVUSHY8 = $mol_type_enforce<
		`Cs-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LO59VE6E = $mol_type_enforce<
		`Li-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C0YTTGKU = $mol_type_enforce<
		`Pr-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HVCHC3JQ = $mol_type_enforce<
		`Fe-Cu-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5GLVE9S5 = $mol_type_enforce<
		`Ce-Sm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z9SRTUEO = $mol_type_enforce<
		`Dy-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MS301CO0 = $mol_type_enforce<
		`Cu-Ir-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WZJU7RY7 = $mol_type_enforce<
		`Si-Sb-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XCK9FCZX = $mol_type_enforce<
		`Pr-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3ZTUNSOK = $mol_type_enforce<
		`K-Li-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9HIAJ4NC = $mol_type_enforce<
		`La-Tb-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O6I6U0DY = $mol_type_enforce<
		`Li-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5OASDQ6N = $mol_type_enforce<
		`Sm-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N0KLZ0Z8 = $mol_type_enforce<
		`Cs-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4WHUX69O = $mol_type_enforce<
		`Pr-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N8FAGCKO = $mol_type_enforce<
		`Tb-Yb-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FTPC58MP = $mol_type_enforce<
		`Y-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UUZH6512 = $mol_type_enforce<
		`Na-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MZXPTP98 = $mol_type_enforce<
		`K-Mg-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZUG4L7MU = $mol_type_enforce<
		`Li-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GBTSVKM4 = $mol_type_enforce<
		`Ce-Hf-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IZEAJT42 = $mol_type_enforce<
		`Dy-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ONBNARQ1 = $mol_type_enforce<
		`Ce-Mn-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0Z7PIDJN = $mol_type_enforce<
		`Mn-Fe-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ISWUWAFZ = $mol_type_enforce<
		`Rb-Hf-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9AHL2YQ4 = $mol_type_enforce<
		`La-Tb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WDVPFDZJ = $mol_type_enforce<
		`Sr-Nd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UK0A0DAA = $mol_type_enforce<
		`Tb-Sm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WYC09I8T = $mol_type_enforce<
		`Ce-Sc-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F3NTJZ3S = $mol_type_enforce<
		`Y-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6Z3LS0KY = $mol_type_enforce<
		`Rb-Li-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YIRU4TRK = $mol_type_enforce<
		`Nd-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P8UEZ71J = $mol_type_enforce<
		`Al-Si-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K8SG1T98 = $mol_type_enforce<
		`Ca-La-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L28FNY3S = $mol_type_enforce<
		`La-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S2CQMDEZ = $mol_type_enforce<
		`Sm-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__39ZC48K0 = $mol_type_enforce<
		`Y-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4VXHR20T = $mol_type_enforce<
		`Na-Sr-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G5TIINSJ = $mol_type_enforce<
		`K-Li-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ODQNEYVB = $mol_type_enforce<
		`Cs-Rb-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UL8GWTF1 = $mol_type_enforce<
		`Zn-Ga-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BELX883Q = $mol_type_enforce<
		`La-Pm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OG40B9HF = $mol_type_enforce<
		`Mn-Fe-Co`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__96E237N1 = $mol_type_enforce<
		`Gd-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0YXR93DX = $mol_type_enforce<
		`Sm-Gd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7775YWQ6 = $mol_type_enforce<
		`U-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CTLVFJDN = $mol_type_enforce<
		`La-Ce-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R61DK3QA = $mol_type_enforce<
		`Re-Hg-Sb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K2VWVOFZ = $mol_type_enforce<
		`Gd-Dy-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZTG2YJEN = $mol_type_enforce<
		`Dy-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UDS6QTTQ = $mol_type_enforce<
		`La-Nd-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P4SZHTK5 = $mol_type_enforce<
		`Ce-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IUAV2VIW = $mol_type_enforce<
		`Ce-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z2ZEP7A0 = $mol_type_enforce<
		`Ce-Nd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BIIHQPI5 = $mol_type_enforce<
		`Pm-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ON9SYGO7 = $mol_type_enforce<
		`Ce-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EN2LYD5V = $mol_type_enforce<
		`Pr-Sm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MEH0B90A = $mol_type_enforce<
		`Ca-La-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A2I8TOP5 = $mol_type_enforce<
		`Yb-Lu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LBP588FQ = $mol_type_enforce<
		`Sm-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TD0E9HTJ = $mol_type_enforce<
		`Gd-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GRQ147E9 = $mol_type_enforce<
		`Li-Pr-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7L4R5QHL = $mol_type_enforce<
		`Al-Ga-Hg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UTUY8EKB = $mol_type_enforce<
		`Na-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AYON8Z04 = $mol_type_enforce<
		`Yb-Nd-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ECACNU6N = $mol_type_enforce<
		`Nd-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SK6T3ZEJ = $mol_type_enforce<
		`La-Tb-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GGPZ642P = $mol_type_enforce<
		`Ir-Pd-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F83A4HLN = $mol_type_enforce<
		`Tm-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__55F0VM5O = $mol_type_enforce<
		`Tm-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R6JPH7N7 = $mol_type_enforce<
		`La-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V4HNAOHL = $mol_type_enforce<
		`Cu-Ni-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6ZF5CEMM = $mol_type_enforce<
		`Tb-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KS1NC7KL = $mol_type_enforce<
		`Ba-Sr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KIKB0QC0 = $mol_type_enforce<
		`Th-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VNTZI4LQ = $mol_type_enforce<
		`Mn-Co-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FX9AQZB6 = $mol_type_enforce<
		`Cu-Ni-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NUDMCZVH = $mol_type_enforce<
		`Tb-Ce-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R8FHCBAH = $mol_type_enforce<
		`Nd-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D9G554KM = $mol_type_enforce<
		`Li-Pm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__67PICAUL = $mol_type_enforce<
		`La-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DNCQ1GF0 = $mol_type_enforce<
		`La-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DNFYSHPW = $mol_type_enforce<
		`Pm-Pr-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P4U0K6RP = $mol_type_enforce<
		`Ce-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YB582L8G = $mol_type_enforce<
		`Cu-Tc-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B2ZM0XQG = $mol_type_enforce<
		`Nd-Dy-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NVNOEHJG = $mol_type_enforce<
		`Ca-Pm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IECCN87N = $mol_type_enforce<
		`Fe-Cu-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FGONZ7E3 = $mol_type_enforce<
		`Li-Sm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QV56D3Z5 = $mol_type_enforce<
		`Mn-Ag-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DB9J2BK7 = $mol_type_enforce<
		`Li-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PNND6XPW = $mol_type_enforce<
		`La-Tb-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XQ6ZMLCU = $mol_type_enforce<
		`Gd-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H4KF2UIW = $mol_type_enforce<
		`Ce-Gd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__64OF4BCF = $mol_type_enforce<
		`Er-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DJ0JBMIA = $mol_type_enforce<
		`Sm-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KTUZV8TK = $mol_type_enforce<
		`Cr-Ni-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UO5Q0LJ5 = $mol_type_enforce<
		`Nd-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MLZF7K71 = $mol_type_enforce<
		`Co-Au-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RYJMDPTW = $mol_type_enforce<
		`Nd-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PU2EYNWB = $mol_type_enforce<
		`La-Yb-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3Q6L81LG = $mol_type_enforce<
		`Sc-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__21U09349 = $mol_type_enforce<
		`Zr-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JGJVQO9C = $mol_type_enforce<
		`Pr-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7VCF42UF = $mol_type_enforce<
		`Cs-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WMC78GT0 = $mol_type_enforce<
		`Ce-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NG1XO4FJ = $mol_type_enforce<
		`Yb-Gd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__25A0MCK6 = $mol_type_enforce<
		`Li-Ce-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B75WP2JD = $mol_type_enforce<
		`Y-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NB5NSRHX = $mol_type_enforce<
		`La-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WM7YEHZ7 = $mol_type_enforce<
		`Tb-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O93Y8H5O = $mol_type_enforce<
		`Tb-Pr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JJ0G5X01 = $mol_type_enforce<
		`Sb-Pb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2NYGWKHN = $mol_type_enforce<
		`Ba-Yb-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QYCCLX44 = $mol_type_enforce<
		`Dy-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EVX64I25 = $mol_type_enforce<
		`Tb-Gd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V3Y4VA3L = $mol_type_enforce<
		`Tb-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3E4G8VS1 = $mol_type_enforce<
		`Gd-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R6PJT7FH = $mol_type_enforce<
		`Yb-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OWZU8U2Y = $mol_type_enforce<
		`Tm-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TR93T4BI = $mol_type_enforce<
		`Pd-Pt-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CTRMMG3J = $mol_type_enforce<
		`Eu-Pu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X2LCSUX8 = $mol_type_enforce<
		`Ba-Sm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S4PBE2KO = $mol_type_enforce<
		`La-Sm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q93R076Y = $mol_type_enforce<
		`U-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DEGD94M2 = $mol_type_enforce<
		`Ba-Pm-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CCG4LNH0 = $mol_type_enforce<
		`Sm-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9LIIWPBM = $mol_type_enforce<
		`Gd-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F0KZOHR4 = $mol_type_enforce<
		`Ce-Pr-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0THIXOC7 = $mol_type_enforce<
		`Lu-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CS7S5IJ5 = $mol_type_enforce<
		`Dy-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZU4XCTLE = $mol_type_enforce<
		`La-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R9OT1IW7 = $mol_type_enforce<
		`Y-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3YXPRF8J = $mol_type_enforce<
		`Pm-Nd-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7JQIL4BN = $mol_type_enforce<
		`Tb-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BYG4AMDU = $mol_type_enforce<
		`Yb-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LIQWV5RU = $mol_type_enforce<
		`Li-Pr-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0RRBJ78B = $mol_type_enforce<
		`Mg-Mn-Cd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SQPHXATR = $mol_type_enforce<
		`Ce-Pm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y3PJ0UWT = $mol_type_enforce<
		`Pu-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UE08BJMA = $mol_type_enforce<
		`Tl-Cd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1HHILVTM = $mol_type_enforce<
		`Sc-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W562WPYS = $mol_type_enforce<
		`Pu-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9MU6PT4F = $mol_type_enforce<
		`Mn-Fe-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0UFJ7N64 = $mol_type_enforce<
		`Eu-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CN0I4M7W = $mol_type_enforce<
		`Tb-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M7VKR5XU = $mol_type_enforce<
		`Tb-Pr-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6S9EU5GF = $mol_type_enforce<
		`Ca-Nd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6TAKOCQ1 = $mol_type_enforce<
		`Ba-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F7GK4ERE = $mol_type_enforce<
		`Ca-Tb-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__08O256QO = $mol_type_enforce<
		`Pu-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RJYKB90Q = $mol_type_enforce<
		`Ca-Yb-Eu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__16QA7U9B = $mol_type_enforce<
		`Th-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__30B83H5R = $mol_type_enforce<
		`Si-Sn-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZJNAVFN5 = $mol_type_enforce<
		`Tb-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CII01P8X = $mol_type_enforce<
		`Na-Cr-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OXGAUKDR = $mol_type_enforce<
		`Y-Er-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9EZZ242B = $mol_type_enforce<
		`Y-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PDNL66QT = $mol_type_enforce<
		`Ni-Pd-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PHPZB9EL = $mol_type_enforce<
		`Y-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7TGYVL2O = $mol_type_enforce<
		`Co-Pd-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K9I6R434 = $mol_type_enforce<
		`Li-Gd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M4YHZDI0 = $mol_type_enforce<
		`Tb-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YALGYJ0B = $mol_type_enforce<
		`Pr-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S0PVOPDL = $mol_type_enforce<
		`La-Yb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K02W3VJN = $mol_type_enforce<
		`Ca-Yb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CD65QR33 = $mol_type_enforce<
		`Dy-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KLY6L5HN = $mol_type_enforce<
		`Nd-Sm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0A1F88CB = $mol_type_enforce<
		`Tb-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZRG9L8YU = $mol_type_enforce<
		`Gd-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BF3FUGWU = $mol_type_enforce<
		`Ca-Pm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HOTFF2PI = $mol_type_enforce<
		`Tl-Zn-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0BYF42GO = $mol_type_enforce<
		`Yb-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6V88N5V9 = $mol_type_enforce<
		`Fe-Co-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4Q4MP2Z4 = $mol_type_enforce<
		`La-Sm-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OF4DS941 = $mol_type_enforce<
		`Nb-V-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HN2DHD9T = $mol_type_enforce<
		`La-Sm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IL1F7XO9 = $mol_type_enforce<
		`Li-Pr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LY6EAYDF = $mol_type_enforce<
		`Tb-Gd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7DSU5WDE = $mol_type_enforce<
		`Eu-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UCG0CUMY = $mol_type_enforce<
		`Yb-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PXSB0H2W = $mol_type_enforce<
		`Yb-Er-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WFTEQKSH = $mol_type_enforce<
		`La-Ho-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__139VVMFO = $mol_type_enforce<
		`Dy-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FJ8XS40V = $mol_type_enforce<
		`La-Ce-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LVZ7LKF7 = $mol_type_enforce<
		`Pr-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K4YQ73WY = $mol_type_enforce<
		`Eu-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MHXPM6BX = $mol_type_enforce<
		`Dy-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EVJBWJRK = $mol_type_enforce<
		`La-Yb-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5AA6I97P = $mol_type_enforce<
		`Ce-Pm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OGSHNJOY = $mol_type_enforce<
		`Tb-Pm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__53SJL8CJ = $mol_type_enforce<
		`Pr-Dy-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__62OWSMMQ = $mol_type_enforce<
		`La-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9U247225 = $mol_type_enforce<
		`Li-Ce-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1WHL6T9H = $mol_type_enforce<
		`Li-Pr-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L1QIDM2F = $mol_type_enforce<
		`Tb-Pm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GRTQ0KVY = $mol_type_enforce<
		`Dy-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H3QUZ3HO = $mol_type_enforce<
		`Al-In-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VZFB219A = $mol_type_enforce<
		`Nd-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QT2S3XML = $mol_type_enforce<
		`Pr-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9M1I1EG7 = $mol_type_enforce<
		`Ba-Pm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GTHGKCC5 = $mol_type_enforce<
		`Pr-Dy-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TLSFO60Q = $mol_type_enforce<
		`Rb-Na-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BCCI31VS = $mol_type_enforce<
		`Tb-Pm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4ZXUJSUQ = $mol_type_enforce<
		`Gd-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2P6LBW6C = $mol_type_enforce<
		`Y-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZUO9RY3J = $mol_type_enforce<
		`Gd-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EMAOLZQC = $mol_type_enforce<
		`Ba-Pm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8KN8HH4N = $mol_type_enforce<
		`Pu-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PQP5D6EQ = $mol_type_enforce<
		`Er-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UB89JXD6 = $mol_type_enforce<
		`Co-Ni-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q5ACVKE8 = $mol_type_enforce<
		`Ho-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EMHX7CUC = $mol_type_enforce<
		`Pm-Pr-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IGFXWOFW = $mol_type_enforce<
		`Sm-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0UFKV0MB = $mol_type_enforce<
		`Yb-Pr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AQ42Y7LC = $mol_type_enforce<
		`Cu-Ag-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MLT4JU5K = $mol_type_enforce<
		`Pm-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZX05FPPX = $mol_type_enforce<
		`Re-Ir-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__275OYXGC = $mol_type_enforce<
		`Er-Lu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7HG57QSX = $mol_type_enforce<
		`La-Eu-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KNID536P = $mol_type_enforce<
		`Cu-Ag-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B31HVEVG = $mol_type_enforce<
		`Dy-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N657DXTB = $mol_type_enforce<
		`Dy-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IIJHDUPD = $mol_type_enforce<
		`Re-Bi-Sb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D7MUJLOT = $mol_type_enforce<
		`Pm-Pr-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KPLIX6SY = $mol_type_enforce<
		`Th-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7VVYRCMV = $mol_type_enforce<
		`Y-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7NINN5Z6 = $mol_type_enforce<
		`Fe-Ag-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2AJ31FFB = $mol_type_enforce<
		`Co-Os-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C2EQOGAE = $mol_type_enforce<
		`Rb-Li-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IN6O8P2F = $mol_type_enforce<
		`Gd-Dy-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CJ0WDRQI = $mol_type_enforce<
		`Tb-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R9ZEEY36 = $mol_type_enforce<
		`Ce-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y6H9IEIB = $mol_type_enforce<
		`Ba-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CA1Q8EOY = $mol_type_enforce<
		`Nd-Dy-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0FHZDXB3 = $mol_type_enforce<
		`Ca-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QGMK9H28 = $mol_type_enforce<
		`Li-Hf-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XHXP0IEC = $mol_type_enforce<
		`Tb-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BSADE8GO = $mol_type_enforce<
		`Tl-Zn-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QXVYIILT = $mol_type_enforce<
		`Pr-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CI4PWS3Y = $mol_type_enforce<
		`Er-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E9ZP0NR5 = $mol_type_enforce<
		`Er-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XUPMZJ63 = $mol_type_enforce<
		`K-Li-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7WAD34ME = $mol_type_enforce<
		`Yb-Sc-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TBYE4ZRC = $mol_type_enforce<
		`La-Ce-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B3RLHA5B = $mol_type_enforce<
		`Cs-Mg-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q7V1WCZN = $mol_type_enforce<
		`Ga-B-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__67W98SVS = $mol_type_enforce<
		`Re-Ir-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DU2PUB19 = $mol_type_enforce<
		`Pr-Gd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KXWFRP6M = $mol_type_enforce<
		`Re-Ni-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4EABJZ1E = $mol_type_enforce<
		`Tb-Nd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__10XA30BR = $mol_type_enforce<
		`Tb-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T8Z3XKKI = $mol_type_enforce<
		`Nd-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DG485ZEA = $mol_type_enforce<
		`Tb-Dy-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FVDQKVV1 = $mol_type_enforce<
		`Tb-Pr-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EGIR48MV = $mol_type_enforce<
		`La-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PCAT9FN9 = $mol_type_enforce<
		`Eu-Th-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4LXRCF9R = $mol_type_enforce<
		`Li-Tb-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2XZN88NF = $mol_type_enforce<
		`Na-V-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IIQQXV25 = $mol_type_enforce<
		`Cu-Re-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SNOVQ31T = $mol_type_enforce<
		`Cd-Ge-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JFDMGBB8 = $mol_type_enforce<
		`Sm-Gd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J72BWMLG = $mol_type_enforce<
		`Al-In-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AEHHUSZQ = $mol_type_enforce<
		`Al-Cd-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1DILC41J = $mol_type_enforce<
		`Ce-Eu-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GJCRW05L = $mol_type_enforce<
		`La-Tb-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ORYUZ3TK = $mol_type_enforce<
		`Li-Tb-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SZHQWUKN = $mol_type_enforce<
		`Pr-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y3O9MW9G = $mol_type_enforce<
		`La-Pm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1UAEJ9M8 = $mol_type_enforce<
		`Gd-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VFQEB7ZF = $mol_type_enforce<
		`Li-La-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9T422MQR = $mol_type_enforce<
		`Al-Ga-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EP163AK8 = $mol_type_enforce<
		`Tl-As-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6A8JWDMM = $mol_type_enforce<
		`Re-Pd-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7DQFPW29 = $mol_type_enforce<
		`Eu-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y3XNW28Y = $mol_type_enforce<
		`Tm-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FFJ9DI6G = $mol_type_enforce<
		`Eu-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZYT7C64J = $mol_type_enforce<
		`Be-Zn-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FHDQXRTH = $mol_type_enforce<
		`Li-Pm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SJX2T4LD = $mol_type_enforce<
		`Na-Mg-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OJ1N6JQZ = $mol_type_enforce<
		`Fe-Ag-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__16JJO655 = $mol_type_enforce<
		`Tl-Zn-Cd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DG4L22UZ = $mol_type_enforce<
		`Nd-Sm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8Y0QSDML = $mol_type_enforce<
		`Y-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A1MQ8JV1 = $mol_type_enforce<
		`Gd-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2WDKUT5B = $mol_type_enforce<
		`Li-Tb-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0VP1EARJ = $mol_type_enforce<
		`Be-Ga-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JFKCAKH6 = $mol_type_enforce<
		`Mn-Cu-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZXFMXTS1 = $mol_type_enforce<
		`Pr-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9PYRE4N4 = $mol_type_enforce<
		`Ho-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__54OBVAT2 = $mol_type_enforce<
		`Na-Li-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4RMQ8Y8K = $mol_type_enforce<
		`Re-Ru-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CJ06NYVI = $mol_type_enforce<
		`La-Tb-Ce`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BHGW7MX6 = $mol_type_enforce<
		`Cr-Pb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y0KKL30P = $mol_type_enforce<
		`Pr-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DAFD4NAM = $mol_type_enforce<
		`Ag-Pd-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FQA4WEXU = $mol_type_enforce<
		`Ca-Nd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KRUP31UY = $mol_type_enforce<
		`Mg-Cr-Cd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2BF1PVOZ = $mol_type_enforce<
		`Mn-Ni-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5S4HR71T = $mol_type_enforce<
		`Cu-B-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V9A318OD = $mol_type_enforce<
		`Li-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HJW55XJM = $mol_type_enforce<
		`Ni-Os-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__STZFXSHN = $mol_type_enforce<
		`Fe-Ag-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__97VHAQBJ = $mol_type_enforce<
		`Li-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E2K5U20L = $mol_type_enforce<
		`Sm-Y-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NGE1YZQ4 = $mol_type_enforce<
		`Dy-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZXONGOWH = $mol_type_enforce<
		`Na-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1J0X3INB = $mol_type_enforce<
		`Tb-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CAXYZN2M = $mol_type_enforce<
		`Rb-Na-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LC444RK2 = $mol_type_enforce<
		`Gd-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BENEZ1H3 = $mol_type_enforce<
		`Pr-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7DY7QIGR = $mol_type_enforce<
		`Pr-Sm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DUAPZD2M = $mol_type_enforce<
		`Gd-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5VY4WRJK = $mol_type_enforce<
		`Zr-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y7LCZZCF = $mol_type_enforce<
		`Cr-Hg-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0WBRTQG6 = $mol_type_enforce<
		`Yb-Er-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E5I4GW99 = $mol_type_enforce<
		`Ca-Pm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RL7VJOBI = $mol_type_enforce<
		`Co-Cu-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__61DY2I0H = $mol_type_enforce<
		`Gd-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WGB0JVRZ = $mol_type_enforce<
		`Sc-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0VAG3FYX = $mol_type_enforce<
		`Ga-Si-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KBPZ9KW1 = $mol_type_enforce<
		`Li-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5NUXQI1W = $mol_type_enforce<
		`Ba-Sr-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L61VY6ZQ = $mol_type_enforce<
		`Li-Pm-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0WMOFUTD = $mol_type_enforce<
		`Na-Li-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T8JP7NDI = $mol_type_enforce<
		`Gd-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NHNOT44C = $mol_type_enforce<
		`Yb-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DP14A9B6 = $mol_type_enforce<
		`Ho-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CCME8AUD = $mol_type_enforce<
		`Nd-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HS3KB2T8 = $mol_type_enforce<
		`Ca-Ce-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H8NS3OGH = $mol_type_enforce<
		`Pm-Gd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1ZJ7RRP7 = $mol_type_enforce<
		`La-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ACH0AUJX = $mol_type_enforce<
		`Ca-Yb-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1QZKXIOL = $mol_type_enforce<
		`Pr-Th-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F2PEIW6T = $mol_type_enforce<
		`Tm-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LEBN03VR = $mol_type_enforce<
		`Rb-Li-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JOIAJH14 = $mol_type_enforce<
		`Gd-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__48K4T782 = $mol_type_enforce<
		`Yb-Pr-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IINDOEOE = $mol_type_enforce<
		`Ce-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OHZZON3C = $mol_type_enforce<
		`Nd-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AS33COFG = $mol_type_enforce<
		`Er-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QDRSKTJ6 = $mol_type_enforce<
		`Dy-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T7EH3WMW = $mol_type_enforce<
		`La-Pr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1SXQ0IKN = $mol_type_enforce<
		`Yb-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BJBC6VXW = $mol_type_enforce<
		`La-Yb-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XNQMKMHV = $mol_type_enforce<
		`Co-Rh-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__913ZF687 = $mol_type_enforce<
		`La-Eu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TJSVACDK = $mol_type_enforce<
		`Y-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EZWNZQ1E = $mol_type_enforce<
		`K-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YYV5YWZU = $mol_type_enforce<
		`Pr-Sm-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JHQP6ANK = $mol_type_enforce<
		`Eu-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RDBG06MW = $mol_type_enforce<
		`Ga-Sn-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6ZB0MWHO = $mol_type_enforce<
		`Cu-Ag-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M7WUJFQF = $mol_type_enforce<
		`Ce-Gd-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5B9WASZ1 = $mol_type_enforce<
		`Tl-Ga-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7K4N2QPJ = $mol_type_enforce<
		`Gd-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3KK0D79N = $mol_type_enforce<
		`Ti-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QOAW0J41 = $mol_type_enforce<
		`Ga-Sn-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2JI0W3YN = $mol_type_enforce<
		`La-Eu-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4HDITP9P = $mol_type_enforce<
		`Tm-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XKCG1TXM = $mol_type_enforce<
		`Pm-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CYVEKQMO = $mol_type_enforce<
		`Be-Al-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GRPMM84P = $mol_type_enforce<
		`Dy-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0UXTGKR6 = $mol_type_enforce<
		`Yb-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1JWM0J5V = $mol_type_enforce<
		`Na-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1V2ATUU2 = $mol_type_enforce<
		`Li-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2UUD563P = $mol_type_enforce<
		`Na-Sr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__654M2HC9 = $mol_type_enforce<
		`Ba-La-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__476NTGAV = $mol_type_enforce<
		`Sm-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5B83J8HX = $mol_type_enforce<
		`La-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__66IF2EZP = $mol_type_enforce<
		`K-Cr-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__71EQ9G2M = $mol_type_enforce<
		`Y-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IBNX66U2 = $mol_type_enforce<
		`Ce-Pm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6SBIFG6S = $mol_type_enforce<
		`Sm-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JMAW9MUM = $mol_type_enforce<
		`Er-Th-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U41XVM7J = $mol_type_enforce<
		`Co-Os-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F0FS0MDO = $mol_type_enforce<
		`Sm-Dy-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F1LU8YUV = $mol_type_enforce<
		`Sr-Ca-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F0UK22NK = $mol_type_enforce<
		`Pm-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EZBCTDK7 = $mol_type_enforce<
		`Yb-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2A2U6TZW = $mol_type_enforce<
		`La-Gd-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AQ0NP34C = $mol_type_enforce<
		`Tb-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1T6CQEEY = $mol_type_enforce<
		`Cs-Mg-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WJU9N6RF = $mol_type_enforce<
		`Ca-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KNZ5DWHR = $mol_type_enforce<
		`Pr-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M6Q6PCD6 = $mol_type_enforce<
		`Pm-Sm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MW6I2B3Q = $mol_type_enforce<
		`La-Sm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NS39W12I = $mol_type_enforce<
		`Zr-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FCW5252K = $mol_type_enforce<
		`Cr-Cu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2V8FV31U = $mol_type_enforce<
		`Cu-Ni-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QM2ILAI3 = $mol_type_enforce<
		`Sm-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZWW6XE50 = $mol_type_enforce<
		`Ce-Pr-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XPDECTZM = $mol_type_enforce<
		`Ce-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZSN0MKH2 = $mol_type_enforce<
		`La-V-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EWQ68TZF = $mol_type_enforce<
		`Sm-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__35WGZUXN = $mol_type_enforce<
		`Ce-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7EHW03XT = $mol_type_enforce<
		`Ce-Y-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C2786CX3 = $mol_type_enforce<
		`Ca-Pm-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__30268UG6 = $mol_type_enforce<
		`Ce-Pr-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y3LIJY3T = $mol_type_enforce<
		`Ce-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LM5J5C1P = $mol_type_enforce<
		`Re-Ru-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EVPT2O6N = $mol_type_enforce<
		`Cu-Os-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JJXFND66 = $mol_type_enforce<
		`Co-Ni-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T4MOUJRW = $mol_type_enforce<
		`La-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AB2D09T8 = $mol_type_enforce<
		`Ba-V-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7SM4BJ7Z = $mol_type_enforce<
		`Gd-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TI959IN0 = $mol_type_enforce<
		`Li-Er-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FGPLVAYC = $mol_type_enforce<
		`La-Yb-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OS488QST = $mol_type_enforce<
		`Ce-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P6CB41H7 = $mol_type_enforce<
		`Y-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__67X9YBHI = $mol_type_enforce<
		`Tm-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YHQI5WXV = $mol_type_enforce<
		`La-Eu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HW7HL4S0 = $mol_type_enforce<
		`Pr-Dy-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XBFOJ270 = $mol_type_enforce<
		`Ca-Yb-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PIZOY1OV = $mol_type_enforce<
		`La-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RHXDBPMK = $mol_type_enforce<
		`Pr-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C3GYD5F9 = $mol_type_enforce<
		`Nd-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LHI1UXR0 = $mol_type_enforce<
		`Pu-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DMVN9NAQ = $mol_type_enforce<
		`Li-Nd-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QK0SP9AK = $mol_type_enforce<
		`Li-Ce-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EZP2KAI5 = $mol_type_enforce<
		`Tl-Cu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VFGBHG3C = $mol_type_enforce<
		`Al-Zn-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DVKBZV5Q = $mol_type_enforce<
		`Er-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R12L2CAW = $mol_type_enforce<
		`K-Mg-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P8U4HHR8 = $mol_type_enforce<
		`Li-Ce-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__54MGC6GR = $mol_type_enforce<
		`Na-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5VNRJDJF = $mol_type_enforce<
		`Ba-La-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CP7QSJPZ = $mol_type_enforce<
		`Tb-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GXZUNO7W = $mol_type_enforce<
		`Pr-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E7JW7FQ1 = $mol_type_enforce<
		`Tb-Yb-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VN2X0VIS = $mol_type_enforce<
		`Sm-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PCQASV8U = $mol_type_enforce<
		`Tb-Dy-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__963W577E = $mol_type_enforce<
		`Ag-Ge-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FQMV6QZH = $mol_type_enforce<
		`Nd-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XHEABA5O = $mol_type_enforce<
		`Yb-Y-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__056TVX6B = $mol_type_enforce<
		`Dy-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2UIIFZMZ = $mol_type_enforce<
		`Gd-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YM0SQ1IT = $mol_type_enforce<
		`Nd-Sm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3R84NOCS = $mol_type_enforce<
		`Tb-Sm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GSQPHN9Q = $mol_type_enforce<
		`Li-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MG559W88 = $mol_type_enforce<
		`Y-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DZA5YYUD = $mol_type_enforce<
		`Eu-Sc-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PHGMQKGK = $mol_type_enforce<
		`Ti-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C13R6MBI = $mol_type_enforce<
		`Re-Ag-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__92TG8STH = $mol_type_enforce<
		`Pm-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4ZLKRNDR = $mol_type_enforce<
		`Ca-Tb-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IS6KRWZB = $mol_type_enforce<
		`Ta-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LC7NYGJ1 = $mol_type_enforce<
		`Tb-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PJ3EZXIU = $mol_type_enforce<
		`Li-La-Tb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JYU3HAJS = $mol_type_enforce<
		`Tl-Ag-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D1JR14HO = $mol_type_enforce<
		`Tb-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6HSZYJFW = $mol_type_enforce<
		`Er-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y4J7A5XM = $mol_type_enforce<
		`Fe-Ni-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JI3CJBFX = $mol_type_enforce<
		`La-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3O98EE0M = $mol_type_enforce<
		`Co-Re-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0YVSPGNK = $mol_type_enforce<
		`Li-Cr-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J59GTXPT = $mol_type_enforce<
		`V-Ag-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__43O5649Q = $mol_type_enforce<
		`Zn-Sn-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2EWNQKEW = $mol_type_enforce<
		`Ce-Nd-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZO6B3R21 = $mol_type_enforce<
		`La-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QNUVIIUE = $mol_type_enforce<
		`Ca-Eu-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7A4BN03W = $mol_type_enforce<
		`Ho-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y74ZOS24 = $mol_type_enforce<
		`Yb-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6YDK663U = $mol_type_enforce<
		`Eu-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G2E3SEVD = $mol_type_enforce<
		`Ni-Ir-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VS1MT6T3 = $mol_type_enforce<
		`Y-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F120O6P9 = $mol_type_enforce<
		`Pr-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7J9EGIVH = $mol_type_enforce<
		`Ho-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A8U4RAED = $mol_type_enforce<
		`Pr-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R2MYSYBU = $mol_type_enforce<
		`Pr-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RRY1WRKS = $mol_type_enforce<
		`Pr-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K2JCV2HU = $mol_type_enforce<
		`Tb-Ce-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RZNJMJD6 = $mol_type_enforce<
		`Ce-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CLFT0MHH = $mol_type_enforce<
		`Li-Tb-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B5D3ND2N = $mol_type_enforce<
		`Mn-Tl-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DW7L29HK = $mol_type_enforce<
		`Ba-La-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OAS7EACP = $mol_type_enforce<
		`Th-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZK29JL3O = $mol_type_enforce<
		`Li-La-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H69PDI7M = $mol_type_enforce<
		`Mn-Fe-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8L6SWAMV = $mol_type_enforce<
		`Ho-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QZRR9CJB = $mol_type_enforce<
		`K-Rb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5E9CA74T = $mol_type_enforce<
		`La-Gd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FO7KIJH7 = $mol_type_enforce<
		`Cu-Ag-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__47IS3EO9 = $mol_type_enforce<
		`Ce-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8FE869H5 = $mol_type_enforce<
		`Ho-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L4D4S8OI = $mol_type_enforce<
		`Ce-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YJ78HOKR = $mol_type_enforce<
		`Co-Ru-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GB30DAYC = $mol_type_enforce<
		`Ce-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1LDDDDSG = $mol_type_enforce<
		`Yb-Hf-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SI998XTS = $mol_type_enforce<
		`Tl-Si-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T8QPFLZR = $mol_type_enforce<
		`Tb-Yb-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OCQ72HU1 = $mol_type_enforce<
		`Rb-Li-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4LUI2PMQ = $mol_type_enforce<
		`Co-Ni-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LJXWTZ1M = $mol_type_enforce<
		`Co-Ir-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FJTE9N2C = $mol_type_enforce<
		`Gd-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T818TZ5H = $mol_type_enforce<
		`Gd-Dy-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__34B3I9PZ = $mol_type_enforce<
		`Mn-Cu-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9FEQG10S = $mol_type_enforce<
		`Cu-Mo-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__28BN2YAP = $mol_type_enforce<
		`Tb-Pr-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HMM0O2FL = $mol_type_enforce<
		`Li-Mg-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N9FK9MDO = $mol_type_enforce<
		`Yb-Pr-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9C95161B = $mol_type_enforce<
		`Li-Sm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__38IW455T = $mol_type_enforce<
		`Li-Tb-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7ZQP3355 = $mol_type_enforce<
		`Sm-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6K2F9MMO = $mol_type_enforce<
		`Ba-La-Yb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0PDWITQ6 = $mol_type_enforce<
		`La-Dy-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HU1JRC0D = $mol_type_enforce<
		`Zn-Si-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NKYXC3FF = $mol_type_enforce<
		`Ca-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KAP44ZQA = $mol_type_enforce<
		`U-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JQHJAAEK = $mol_type_enforce<
		`Pr-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4WOQ47ZL = $mol_type_enforce<
		`Si-Bi-Sb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6A27QPVH = $mol_type_enforce<
		`Li-Ce-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__979UW6XF = $mol_type_enforce<
		`Cu-Re-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YLLSGHZ3 = $mol_type_enforce<
		`Ba-Ca-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GC0VVUPJ = $mol_type_enforce<
		`La-Lu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C489M4WW = $mol_type_enforce<
		`Zn-Cd-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QZNZ19DS = $mol_type_enforce<
		`In-Ga-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QK6TYFBV = $mol_type_enforce<
		`Dy-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DXZFN172 = $mol_type_enforce<
		`Cr-Hg-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FFTYEXE1 = $mol_type_enforce<
		`Yb-Dy-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JWOEAGX2 = $mol_type_enforce<
		`Eu-Y-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YPTRIWHQ = $mol_type_enforce<
		`Mn-Co-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TOZPB20U = $mol_type_enforce<
		`Yb-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4TMEZTLY = $mol_type_enforce<
		`Nb-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8UPFMHDO = $mol_type_enforce<
		`Yb-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0KRODLE0 = $mol_type_enforce<
		`Yb-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CSLA4TYP = $mol_type_enforce<
		`K-Rb-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IQ7MVX5L = $mol_type_enforce<
		`Ce-Gd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z5XNOKO9 = $mol_type_enforce<
		`Dy-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IEHQS6W8 = $mol_type_enforce<
		`V-Fe-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZV4PDZJV = $mol_type_enforce<
		`Yb-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P0L8DKUX = $mol_type_enforce<
		`La-Ce-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BOQYFZ8Q = $mol_type_enforce<
		`Ni-Pd-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W2CHJOZK = $mol_type_enforce<
		`La-Pr-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VMYKPWF8 = $mol_type_enforce<
		`La-Ce-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AINDQRZK = $mol_type_enforce<
		`Eu-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IWRAX2EF = $mol_type_enforce<
		`Nd-Ho-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VPUE3NHS = $mol_type_enforce<
		`Hf-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y027D1Q6 = $mol_type_enforce<
		`Tb-Yb-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TVCEEXKP = $mol_type_enforce<
		`Tb-Pr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I2G2PEMN = $mol_type_enforce<
		`Er-Pu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z3MY8AMN = $mol_type_enforce<
		`Re-Hg-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EUPVTRKX = $mol_type_enforce<
		`Ba-Yb-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4H91M8TZ = $mol_type_enforce<
		`Lu-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9R5DQ3PL = $mol_type_enforce<
		`Nd-Y-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HIWLUC0J = $mol_type_enforce<
		`Rb-Na-Li`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J7F5T3R7 = $mol_type_enforce<
		`Sm-Dy-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__78VMJZ7Y = $mol_type_enforce<
		`U-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6QVGKX0L = $mol_type_enforce<
		`Ce-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GAVYYHSK = $mol_type_enforce<
		`Pd-Rh-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PXU7SQ3Q = $mol_type_enforce<
		`Tb-Ce-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E7HD6NEN = $mol_type_enforce<
		`Eu-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ADH5U5P9 = $mol_type_enforce<
		`Y-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KYHBE3BO = $mol_type_enforce<
		`Li-Ce-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KTG7Y79I = $mol_type_enforce<
		`Yb-Gd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UY3A2KFF = $mol_type_enforce<
		`Cd-B-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5HVV52UL = $mol_type_enforce<
		`Th-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z2VKS9R1 = $mol_type_enforce<
		`Ba-La-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SZ0XU0GA = $mol_type_enforce<
		`Er-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y6K7ASCF = $mol_type_enforce<
		`K-Rb-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T4J31ZQW = $mol_type_enforce<
		`Cd-Fe-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2K2QTRA5 = $mol_type_enforce<
		`Al-Tl-Cd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U7Z5XORS = $mol_type_enforce<
		`Pr-Nd-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BYV0468S = $mol_type_enforce<
		`Nd-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0W8ZUF4E = $mol_type_enforce<
		`Ce-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F62HUKN0 = $mol_type_enforce<
		`La-Pu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SNTJDD5Y = $mol_type_enforce<
		`Ge-Au-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E4KZKAK1 = $mol_type_enforce<
		`Ca-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HAELJYM6 = $mol_type_enforce<
		`Yb-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OXWUN3JS = $mol_type_enforce<
		`Na-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7QQAFB7J = $mol_type_enforce<
		`Y-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NAQ5M9N0 = $mol_type_enforce<
		`Ba-Sr-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YC6SUOXW = $mol_type_enforce<
		`Tb-Dy-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W0QCBILR = $mol_type_enforce<
		`La-Gd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TWOGRK9S = $mol_type_enforce<
		`Y-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5IVSXCIL = $mol_type_enforce<
		`Ce-Sm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SS4RLDBM = $mol_type_enforce<
		`V-Pd-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O0X4XGZI = $mol_type_enforce<
		`Li-Tb-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JPUIZKF6 = $mol_type_enforce<
		`Yb-Pr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QGWI7FAG = $mol_type_enforce<
		`Yb-Gd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3MZEALTE = $mol_type_enforce<
		`Y-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5VWUGUFZ = $mol_type_enforce<
		`Pm-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LV6LKYI2 = $mol_type_enforce<
		`Eu-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ECWZR9ZF = $mol_type_enforce<
		`La-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__468ERY6A = $mol_type_enforce<
		`Ba-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BV8WCUAQ = $mol_type_enforce<
		`Co-Hg-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RF9CTB9E = $mol_type_enforce<
		`Lu-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ITAQ8NHS = $mol_type_enforce<
		`Y-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0CVYOWPI = $mol_type_enforce<
		`Ba-Ca-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WU4X1RQE = $mol_type_enforce<
		`K-Li-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C8S6G9AS = $mol_type_enforce<
		`V-Hg-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1GSVQ28T = $mol_type_enforce<
		`Tb-Gd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ICHVUA54 = $mol_type_enforce<
		`La-Pm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__88VZB5H1 = $mol_type_enforce<
		`Ir-Ru-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EAABBISX = $mol_type_enforce<
		`Ca-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DOYJTLC2 = $mol_type_enforce<
		`Tb-Yb-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L08LXHBB = $mol_type_enforce<
		`Li-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZNLVAJTY = $mol_type_enforce<
		`Er-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EPCNYVSL = $mol_type_enforce<
		`La-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BY6GK1UN = $mol_type_enforce<
		`La-Dy-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V146W9QP = $mol_type_enforce<
		`Ce-Nd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7PU9OD3D = $mol_type_enforce<
		`Co-Pt-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__53HHKFP4 = $mol_type_enforce<
		`Tm-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GLE1ATJN = $mol_type_enforce<
		`Na-Mg-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5B4QH536 = $mol_type_enforce<
		`Ce-Eu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CHNJ2VTF = $mol_type_enforce<
		`Cs-Li-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KC6GFL87 = $mol_type_enforce<
		`Gd-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A51ZPMV0 = $mol_type_enforce<
		`Re-Pd-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JDEE2M70 = $mol_type_enforce<
		`Yb-Nd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9H1FT5H7 = $mol_type_enforce<
		`Mg-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BBPNOOLC = $mol_type_enforce<
		`Fe-Pd-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4143Z280 = $mol_type_enforce<
		`K-Rb-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DXWWYC49 = $mol_type_enforce<
		`Ba-Ca-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SDPFSSWI = $mol_type_enforce<
		`Rb-Mg-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0YK6GAKV = $mol_type_enforce<
		`La-Sm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9FPG9ODQ = $mol_type_enforce<
		`Y-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CMI5DT2R = $mol_type_enforce<
		`Cs-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4D26ZGL0 = $mol_type_enforce<
		`Tb-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z6CYME4L = $mol_type_enforce<
		`Pm-Gd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__650OFIFP = $mol_type_enforce<
		`La-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QWRSKGD4 = $mol_type_enforce<
		`Tb-Gd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O12P5IH1 = $mol_type_enforce<
		`Ce-Pm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__66WH9MSU = $mol_type_enforce<
		`Pm-Sm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CJ8J5SCO = $mol_type_enforce<
		`Hf-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2L4A714Y = $mol_type_enforce<
		`Y-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__38V0AHZU = $mol_type_enforce<
		`Be-Zn-In`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3GXSNE8U = $mol_type_enforce<
		`Yb-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I8057L5Z = $mol_type_enforce<
		`Nd-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M9ZVI8UF = $mol_type_enforce<
		`Ce-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__96QZC8HG = $mol_type_enforce<
		`Cs-K-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SCGAN4GU = $mol_type_enforce<
		`Ag-Pd-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0UN7AZYR = $mol_type_enforce<
		`Sm-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__29J5R3CE = $mol_type_enforce<
		`Ho-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P44UJ04O = $mol_type_enforce<
		`Yb-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UD0LZHED = $mol_type_enforce<
		`Tb-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5S1VDI8Q = $mol_type_enforce<
		`Yb-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XHBOVCBL = $mol_type_enforce<
		`Ca-Tb-Ce`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DAY1T43O = $mol_type_enforce<
		`Tb-Dy-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HBTK0KR7 = $mol_type_enforce<
		`Zn-Cd-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1AOIO46N = $mol_type_enforce<
		`Pm-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZVGSA6YU = $mol_type_enforce<
		`Yb-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DAETFTON = $mol_type_enforce<
		`Hf-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z3XBS9GA = $mol_type_enforce<
		`Li-Sm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FH8NW3MX = $mol_type_enforce<
		`Li-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FSTWGGA2 = $mol_type_enforce<
		`Na-Ta-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2OARKN6Q = $mol_type_enforce<
		`Pr-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KXWQLR6Y = $mol_type_enforce<
		`V-In-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RHGPDQ4M = $mol_type_enforce<
		`Er-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7PL6MUVV = $mol_type_enforce<
		`Pm-Dy-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FEN6NOI8 = $mol_type_enforce<
		`Tb-Gd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VMT6S15R = $mol_type_enforce<
		`Nd-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TW3BFAFX = $mol_type_enforce<
		`Sr-Ca-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0NEN1VWM = $mol_type_enforce<
		`Tm-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__71RDI75O = $mol_type_enforce<
		`Gd-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U05LVEM7 = $mol_type_enforce<
		`Li-Gd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DJ0KE202 = $mol_type_enforce<
		`Ag-Os-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9O5UB2I6 = $mol_type_enforce<
		`La-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AZ31ZNHX = $mol_type_enforce<
		`Th-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CY7UYABY = $mol_type_enforce<
		`Co-Pd-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6A1BGBA0 = $mol_type_enforce<
		`Ce-Ho-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J82Z13KF = $mol_type_enforce<
		`Cu-Re-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__07CNOB48 = $mol_type_enforce<
		`Yb-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9VYNHDNY = $mol_type_enforce<
		`Li-La-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PC174UPE = $mol_type_enforce<
		`Cu-Ag-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QSR5GVGC = $mol_type_enforce<
		`Eu-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A5RCOYQ2 = $mol_type_enforce<
		`Rb-Na-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KFHUDJDK = $mol_type_enforce<
		`Co-Rh-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3GYYMIFO = $mol_type_enforce<
		`Tb-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HGQ0EW3D = $mol_type_enforce<
		`Ce-Gd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6PX12R6W = $mol_type_enforce<
		`Tb-Ce-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3X47XJ2T = $mol_type_enforce<
		`Gd-Dy-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YBWOB7H9 = $mol_type_enforce<
		`Zn-In-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VKB96XSD = $mol_type_enforce<
		`Ce-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WIJBZWL1 = $mol_type_enforce<
		`Y-Ho-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T85BIE8I = $mol_type_enforce<
		`Pm-Pr-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BUJ3W2BC = $mol_type_enforce<
		`Li-Pr-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O08ABIMB = $mol_type_enforce<
		`Er-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OCR1MYHP = $mol_type_enforce<
		`Li-Gd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1YJ2I4HA = $mol_type_enforce<
		`Li-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__70IEEZ7S = $mol_type_enforce<
		`Yb-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DEGZPXVI = $mol_type_enforce<
		`Pu-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0IBWA271 = $mol_type_enforce<
		`La-Tb-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZIUH1UPG = $mol_type_enforce<
		`Li-La-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J2SPELJD = $mol_type_enforce<
		`Cu-Ni-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OZ3M75X9 = $mol_type_enforce<
		`Yb-Pr-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AAYY5OY0 = $mol_type_enforce<
		`La-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BZS2OHW3 = $mol_type_enforce<
		`Fe-Ag-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__966PBCPO = $mol_type_enforce<
		`Mg-Mn-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GC8XXN8I = $mol_type_enforce<
		`Fe-Ag-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V5Q48MOM = $mol_type_enforce<
		`Nd-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DB51YS38 = $mol_type_enforce<
		`La-Pr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9D5V6WT8 = $mol_type_enforce<
		`Cr-Cu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PS1GVL9H = $mol_type_enforce<
		`Tb-Er-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S9QUBCEM = $mol_type_enforce<
		`Li-Lu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SRQRWYTR = $mol_type_enforce<
		`Y-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DA76VBGT = $mol_type_enforce<
		`Lu-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P4PLO0RW = $mol_type_enforce<
		`Sn-B-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KUYJSK6N = $mol_type_enforce<
		`Li-Pr-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E8BGX91S = $mol_type_enforce<
		`Re-Hg-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PI5O5EOU = $mol_type_enforce<
		`Yb-Dy-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__592HYJRY = $mol_type_enforce<
		`Tb-Pm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QC4GBZT2 = $mol_type_enforce<
		`Cs-K-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XWVWW36K = $mol_type_enforce<
		`Ni-Ir-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4B88ROFT = $mol_type_enforce<
		`Ca-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__55IGQ7QG = $mol_type_enforce<
		`Eu-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C9AGXKOQ = $mol_type_enforce<
		`Zr-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XV1F7GK0 = $mol_type_enforce<
		`Yb-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__646GYAVB = $mol_type_enforce<
		`K-Li-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JIH0ACNM = $mol_type_enforce<
		`Yb-Pr-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8DONAUOU = $mol_type_enforce<
		`Y-Pu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1GI6OZYO = $mol_type_enforce<
		`Ce-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V6VYJHJZ = $mol_type_enforce<
		`Ce-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W8CW61RM = $mol_type_enforce<
		`Nb-V-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SC9H4WPP = $mol_type_enforce<
		`V-Cu-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6MT8HBNE = $mol_type_enforce<
		`Y-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FMPE12HN = $mol_type_enforce<
		`Fe-Cu-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IN48Y1TX = $mol_type_enforce<
		`Re-Pt-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OFP7XS38 = $mol_type_enforce<
		`Pu-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3G6I5NX1 = $mol_type_enforce<
		`Re-Ir-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EX6HZIL8 = $mol_type_enforce<
		`Ca-Yb-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1UUCT12H = $mol_type_enforce<
		`Nd-Sm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YBCONXC2 = $mol_type_enforce<
		`Na-Sr-Ca`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RHZDXK0F = $mol_type_enforce<
		`Ho-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4O99KBD8 = $mol_type_enforce<
		`Ce-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H75KK01Z = $mol_type_enforce<
		`Ce-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QLHGRH31 = $mol_type_enforce<
		`Pm-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DFTFBUK3 = $mol_type_enforce<
		`La-Gd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TT7YE9CN = $mol_type_enforce<
		`Dy-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E9SD00ER = $mol_type_enforce<
		`Ta-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U2ZRX4V8 = $mol_type_enforce<
		`Nd-Dy-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y4RODLTM = $mol_type_enforce<
		`Y-Ho-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JZRSN69H = $mol_type_enforce<
		`Sr-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7FDBOFXN = $mol_type_enforce<
		`La-Pr-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IK1B4RFU = $mol_type_enforce<
		`Cr-Cu-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TIK99AU6 = $mol_type_enforce<
		`Pm-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5BAR4C19 = $mol_type_enforce<
		`La-Pm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G8KIZL7N = $mol_type_enforce<
		`Sm-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DHHHGEC6 = $mol_type_enforce<
		`Y-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1M1H9RVT = $mol_type_enforce<
		`Ba-Sr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2OKYZKKM = $mol_type_enforce<
		`Ta-V-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1JVS7T9A = $mol_type_enforce<
		`Ga-Hg-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VG9EEWV0 = $mol_type_enforce<
		`La-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NK9H7XSO = $mol_type_enforce<
		`Nd-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MWNBZDBJ = $mol_type_enforce<
		`Li-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X9ZWJ220 = $mol_type_enforce<
		`Ca-Eu-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HJ7VID6R = $mol_type_enforce<
		`Pr-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VC6I5LA2 = $mol_type_enforce<
		`Lu-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GF06UUPA = $mol_type_enforce<
		`Dy-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NN790Z23 = $mol_type_enforce<
		`Ce-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__361LGJT6 = $mol_type_enforce<
		`Na-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QF1KKL1A = $mol_type_enforce<
		`La-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9607YPGE = $mol_type_enforce<
		`Tb-Nd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O9D1VWSL = $mol_type_enforce<
		`Eu-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TJTQ9V6E = $mol_type_enforce<
		`Ca-Ce-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SC7X8756 = $mol_type_enforce<
		`Pr-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YIZUWPO4 = $mol_type_enforce<
		`Pm-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AWGB5CDX = $mol_type_enforce<
		`Nd-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9F7Z1NC3 = $mol_type_enforce<
		`La-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y7MX472K = $mol_type_enforce<
		`Co-Pd-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U1VVAVI4 = $mol_type_enforce<
		`Pr-Sm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H0AU3A8Q = $mol_type_enforce<
		`Li-Mg-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YTF6U02M = $mol_type_enforce<
		`Lu-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GP17CCC9 = $mol_type_enforce<
		`Eu-Hf-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__21LK3DHM = $mol_type_enforce<
		`Li-Gd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HHBFW887 = $mol_type_enforce<
		`Er-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NRMNO3LU = $mol_type_enforce<
		`Yb-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N6LYGMF8 = $mol_type_enforce<
		`La-Eu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__225RSZ9R = $mol_type_enforce<
		`Gd-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5Y60JYD4 = $mol_type_enforce<
		`Cs-Li-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P3VWR50T = $mol_type_enforce<
		`La-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QHUDW0WY = $mol_type_enforce<
		`Rb-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__41CV352D = $mol_type_enforce<
		`La-Pr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QFRK1MJ6 = $mol_type_enforce<
		`Nd-Gd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__65AJ6EZU = $mol_type_enforce<
		`Th-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DAL9BR9H = $mol_type_enforce<
		`Na-Mg-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WY71TJNC = $mol_type_enforce<
		`Ce-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PGEDBT68 = $mol_type_enforce<
		`Eu-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FX6BV3B1 = $mol_type_enforce<
		`Na-Be-Al`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I9GZP7AQ = $mol_type_enforce<
		`Yb-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IJPCW4G5 = $mol_type_enforce<
		`Gd-Dy-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FR8M8LXC = $mol_type_enforce<
		`Pm-Sm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__20NH71WU = $mol_type_enforce<
		`Cs-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N648828A = $mol_type_enforce<
		`Pm-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N0PJYESO = $mol_type_enforce<
		`Gd-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AH7681Z8 = $mol_type_enforce<
		`Cs-K-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JXQ4SRTB = $mol_type_enforce<
		`Tb-Yb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0NL1TSIR = $mol_type_enforce<
		`K-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2J0Y6AUI = $mol_type_enforce<
		`La-Yb-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1Z9R77DO = $mol_type_enforce<
		`Rb-Li-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0HQ4J5ZR = $mol_type_enforce<
		`Li-Gd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__69O9P7CR = $mol_type_enforce<
		`La-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__34X7PGA6 = $mol_type_enforce<
		`Ce-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AJMTLXP6 = $mol_type_enforce<
		`Ba-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QG0VZ6AO = $mol_type_enforce<
		`Ba-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EZ6I9AF7 = $mol_type_enforce<
		`Cu-Ni-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B9RMTS46 = $mol_type_enforce<
		`Nd-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5QM8U0I0 = $mol_type_enforce<
		`Cd-Si-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YIPI7NWR = $mol_type_enforce<
		`Nd-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XPR20ISC = $mol_type_enforce<
		`Tb-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2A47FV7A = $mol_type_enforce<
		`Pr-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G8RCO3YE = $mol_type_enforce<
		`U-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZLIYYUWZ = $mol_type_enforce<
		`Nd-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QU0IOSDZ = $mol_type_enforce<
		`Fe-Pd-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1TZEGL28 = $mol_type_enforce<
		`Na-Li-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3KG0D7Q0 = $mol_type_enforce<
		`Ba-Ca-Yb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XJ2JLS1T = $mol_type_enforce<
		`Sm-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OOHBZKAT = $mol_type_enforce<
		`Ca-La-Eu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G1NWFF49 = $mol_type_enforce<
		`Ca-La-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q2LN247Z = $mol_type_enforce<
		`Mn-Co-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EZU0EZYU = $mol_type_enforce<
		`Nd-Sm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WTKVLESQ = $mol_type_enforce<
		`Tc-Pd-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CQ5S2QJ6 = $mol_type_enforce<
		`Cs-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8V6F28FC = $mol_type_enforce<
		`Ca-Eu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WMG812KF = $mol_type_enforce<
		`Li-La-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AVA4V44X = $mol_type_enforce<
		`Ni-Ir-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DSIBX269 = $mol_type_enforce<
		`Fe-Ni-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GJLVVZ0I = $mol_type_enforce<
		`Pu-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X95CI3J7 = $mol_type_enforce<
		`Yb-Y-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B5R10NHH = $mol_type_enforce<
		`Eu-Y-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R0LURJB8 = $mol_type_enforce<
		`Re-Ni-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GTDXPEVR = $mol_type_enforce<
		`Pm-Sm-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B4RY0Q9M = $mol_type_enforce<
		`Cu-Re-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3QP84ESR = $mol_type_enforce<
		`Lu-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IVVORKJ4 = $mol_type_enforce<
		`Tm-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SE7D92TY = $mol_type_enforce<
		`Ce-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N1RZOZFO = $mol_type_enforce<
		`Ca-Ce-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JLC0KYUQ = $mol_type_enforce<
		`Ce-Sm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4AS5AHLH = $mol_type_enforce<
		`Re-Tc-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6EWRVEIR = $mol_type_enforce<
		`Ag-Ru-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__07NQMVML = $mol_type_enforce<
		`Mg-Cr-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NINUHYYQ = $mol_type_enforce<
		`Ba-Ca-La`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GFP82IR8 = $mol_type_enforce<
		`Ca-Yb-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FKS4UVZG = $mol_type_enforce<
		`Ni-Os-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E3LJGWOL = $mol_type_enforce<
		`Tl-Cd-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W58SK9E6 = $mol_type_enforce<
		`Mg-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PWG8MUKP = $mol_type_enforce<
		`Ba-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8F3I4KBX = $mol_type_enforce<
		`Fe-Ru-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2J3OA3NC = $mol_type_enforce<
		`Pr-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B67TM0MR = $mol_type_enforce<
		`Nd-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TXRZQ55V = $mol_type_enforce<
		`Ho-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DRQ5EVB0 = $mol_type_enforce<
		`Ce-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7KM8ZSHH = $mol_type_enforce<
		`Ce-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R7ZX09JM = $mol_type_enforce<
		`Eu-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WPWGE7IN = $mol_type_enforce<
		`Tb-Sm-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N3FRNA4I = $mol_type_enforce<
		`Ce-Pr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TKA27M3Q = $mol_type_enforce<
		`Sc-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LXAMIR8Y = $mol_type_enforce<
		`Sm-Dy-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VF933NGZ = $mol_type_enforce<
		`Pm-Dy-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VX63AX0Z = $mol_type_enforce<
		`Er-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MTQB2LEZ = $mol_type_enforce<
		`La-Gd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ULSCMT94 = $mol_type_enforce<
		`La-Mn-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V8M57M0R = $mol_type_enforce<
		`Ba-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FJAY8ERV = $mol_type_enforce<
		`Tb-Ce-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EKSMH5QK = $mol_type_enforce<
		`Ag-Ru-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GKIWNKI8 = $mol_type_enforce<
		`Ba-Pr-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DUZENZY8 = $mol_type_enforce<
		`Yb-Dy-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JZKWJUJI = $mol_type_enforce<
		`La-Pr-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XQR1U7KV = $mol_type_enforce<
		`Li-Ta-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2UE8YT7A = $mol_type_enforce<
		`La-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J23LSERN = $mol_type_enforce<
		`Tl-V-In`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y543I8P2 = $mol_type_enforce<
		`Tb-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6K8RZUY1 = $mol_type_enforce<
		`La-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5ATMBQTL = $mol_type_enforce<
		`Ru-Pt-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QJXP9GC9 = $mol_type_enforce<
		`Sm-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4P4R62Y0 = $mol_type_enforce<
		`Tm-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OKA6MD89 = $mol_type_enforce<
		`Ce-Er-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OROTNOL0 = $mol_type_enforce<
		`Cr-W-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4V3LSDV8 = $mol_type_enforce<
		`Yb-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O1PRGHBE = $mol_type_enforce<
		`La-Eu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KG2J5K3P = $mol_type_enforce<
		`Pr-Nd-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4IO500UA = $mol_type_enforce<
		`Li-Nb-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CLGO7ZIC = $mol_type_enforce<
		`Cu-Pt-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AX2T7PHH = $mol_type_enforce<
		`Ni-Ag-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TG0X0UGW = $mol_type_enforce<
		`Yb-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HCQL6G28 = $mol_type_enforce<
		`Li-Pm-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GP32LGD8 = $mol_type_enforce<
		`Cs-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ABFRZU0T = $mol_type_enforce<
		`Y-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LK75PZX7 = $mol_type_enforce<
		`Fe-Ag-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LL2MIYXU = $mol_type_enforce<
		`Hf-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BYL6GWPW = $mol_type_enforce<
		`La-Sm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HXV70SI7 = $mol_type_enforce<
		`Er-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H5P8RVL9 = $mol_type_enforce<
		`Ir-Os-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y7PNTLX2 = $mol_type_enforce<
		`Dy-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZN1A51XY = $mol_type_enforce<
		`Ba-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TUIQ0Z9K = $mol_type_enforce<
		`Ag-Pd-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__66F5IRIE = $mol_type_enforce<
		`K-Rb-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QOTYIZQI = $mol_type_enforce<
		`Pr-Sm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1NAQ00KJ = $mol_type_enforce<
		`Nd-Dy-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O2M4DLS3 = $mol_type_enforce<
		`Li-Pm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W5FAAKNJ = $mol_type_enforce<
		`Ba-Yb-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BFBU9WOT = $mol_type_enforce<
		`Tb-Pm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ANZIA5WK = $mol_type_enforce<
		`La-Pm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__THCAR2K6 = $mol_type_enforce<
		`Sm-Dy-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DV3C4RMO = $mol_type_enforce<
		`V-Cr-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AOMPMBU7 = $mol_type_enforce<
		`Tb-Pm-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__27NP2HGU = $mol_type_enforce<
		`Ho-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7IWSHJ5D = $mol_type_enforce<
		`Ba-Yb-Eu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZPA1VVCF = $mol_type_enforce<
		`La-Sm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E016W6DH = $mol_type_enforce<
		`Li-Tb-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RLUCLKGG = $mol_type_enforce<
		`Tb-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ATC3HJIY = $mol_type_enforce<
		`Na-Mg-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DLEG5IJB = $mol_type_enforce<
		`Pr-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AA767K4F = $mol_type_enforce<
		`Ce-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B4WZWT7R = $mol_type_enforce<
		`Er-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SJJBXUCL = $mol_type_enforce<
		`Gd-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WEZUB3F7 = $mol_type_enforce<
		`Tb-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8TXFXURG = $mol_type_enforce<
		`Nd-Gd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PHLNDAF8 = $mol_type_enforce<
		`Li-Pr-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z2EML1Z6 = $mol_type_enforce<
		`Cr-Ag-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JNZF8IBF = $mol_type_enforce<
		`Lu-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5NRLISYL = $mol_type_enforce<
		`Nb-Hg-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3R3CM3TY = $mol_type_enforce<
		`Tb-Gd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UTL5WCRS = $mol_type_enforce<
		`La-Yb-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6ECYIAGU = $mol_type_enforce<
		`Fe-Ir-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZCPQKOD9 = $mol_type_enforce<
		`Sm-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CTPT0JYM = $mol_type_enforce<
		`Th-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FSTJF93F = $mol_type_enforce<
		`Tb-Gd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NSFWL4V1 = $mol_type_enforce<
		`Tb-Pm-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__69KJPR4S = $mol_type_enforce<
		`Pr-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WIFEXAY2 = $mol_type_enforce<
		`Er-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LOG3V67J = $mol_type_enforce<
		`Th-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LAZDWJN1 = $mol_type_enforce<
		`Y-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WL7GHR2Z = $mol_type_enforce<
		`La-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ROB39U1G = $mol_type_enforce<
		`Ga-Hg-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RQ9A5TP0 = $mol_type_enforce<
		`U-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LKTZ1CJ2 = $mol_type_enforce<
		`Ce-Pr-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WRNAV5T5 = $mol_type_enforce<
		`Ho-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZY1519P5 = $mol_type_enforce<
		`Pm-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__COHVXMX3 = $mol_type_enforce<
		`Li-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__02QGIYTU = $mol_type_enforce<
		`Cr-Fe-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__02EUZX7V = $mol_type_enforce<
		`Rb-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IDQ3V1DR = $mol_type_enforce<
		`Ce-Pr-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YWQ5I78M = $mol_type_enforce<
		`Li-Pr-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__INRSY3PU = $mol_type_enforce<
		`Yb-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__APB11UCM = $mol_type_enforce<
		`La-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F81GTCZX = $mol_type_enforce<
		`Pm-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GKMMRXKT = $mol_type_enforce<
		`Hg-Bi-Sb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HLOOCRPH = $mol_type_enforce<
		`Ce-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MVBAE6IA = $mol_type_enforce<
		`K-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__45ZI6VDC = $mol_type_enforce<
		`Ca-Eu-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HGP7XWSN = $mol_type_enforce<
		`Y-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4YOMN1BK = $mol_type_enforce<
		`Nd-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GHKYHLM9 = $mol_type_enforce<
		`Ag-Ir-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J42QY0BZ = $mol_type_enforce<
		`Ni-Ru-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NRM5CJWS = $mol_type_enforce<
		`Li-Nd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U97IIT5S = $mol_type_enforce<
		`Cs-Rb-Li`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__29TKHIMB = $mol_type_enforce<
		`Na-Li-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4E6EZDBV = $mol_type_enforce<
		`Gd-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FT2GITOS = $mol_type_enforce<
		`Co-Ag-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SPOZI9YD = $mol_type_enforce<
		`B-Sb-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HASYXDFD = $mol_type_enforce<
		`Pr-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GFZLA2AU = $mol_type_enforce<
		`La-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CD9RXNNH = $mol_type_enforce<
		`Tb-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E174B934 = $mol_type_enforce<
		`Re-Ni-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZVA89K10 = $mol_type_enforce<
		`Yb-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7SF98JXI = $mol_type_enforce<
		`Pm-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q268UCTG = $mol_type_enforce<
		`La-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LWO38JIW = $mol_type_enforce<
		`Be-Si-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9Q370KD7 = $mol_type_enforce<
		`Cr-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OLPT5Y3C = $mol_type_enforce<
		`Ce-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7C54A1RF = $mol_type_enforce<
		`Ce-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0YBIHKQP = $mol_type_enforce<
		`Li-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QCRT5L1P = $mol_type_enforce<
		`Tb-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K0OYAQH6 = $mol_type_enforce<
		`Tb-Sm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__84KI9MOE = $mol_type_enforce<
		`Pm-Nd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WFKYJURI = $mol_type_enforce<
		`Sc-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__05W9SJ9I = $mol_type_enforce<
		`Li-Nd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O3VPNZGU = $mol_type_enforce<
		`La-Nd-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SJ0YPJQT = $mol_type_enforce<
		`La-Yb-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B0L0XOJ5 = $mol_type_enforce<
		`Ce-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0HP9KXML = $mol_type_enforce<
		`Rb-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VXX4087O = $mol_type_enforce<
		`La-Cr-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UTGXL9OV = $mol_type_enforce<
		`Ce-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5MJU34SU = $mol_type_enforce<
		`Zr-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3DZTI9HI = $mol_type_enforce<
		`Lu-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L5E930YM = $mol_type_enforce<
		`Sm-Dy-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3NR6B0CK = $mol_type_enforce<
		`Nd-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W43JS7J1 = $mol_type_enforce<
		`Nd-Dy-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q8VYF89K = $mol_type_enforce<
		`Pm-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4D1B7276 = $mol_type_enforce<
		`Na-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LDB7RHYR = $mol_type_enforce<
		`Pr-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ODMB2K00 = $mol_type_enforce<
		`La-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U6SMZFKR = $mol_type_enforce<
		`Al-Ga-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OSJR0TLF = $mol_type_enforce<
		`La-Pm-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y3K42N98 = $mol_type_enforce<
		`Sm-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EMRMMGMC = $mol_type_enforce<
		`Gd-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OMYUQXML = $mol_type_enforce<
		`Nd-Sm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4LNA40AH = $mol_type_enforce<
		`Tb-Pm-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J6GM2N1X = $mol_type_enforce<
		`Al-Hg-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L52S4XPF = $mol_type_enforce<
		`V-Hg-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JRWGX6QT = $mol_type_enforce<
		`Pm-Pr-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2C39XCFR = $mol_type_enforce<
		`Ce-Th-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CVB5L7FT = $mol_type_enforce<
		`K-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JTG17WLI = $mol_type_enforce<
		`Pr-Dy-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M1SWDSJR = $mol_type_enforce<
		`Li-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1N41KVVV = $mol_type_enforce<
		`La-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SGDZZNOH = $mol_type_enforce<
		`Dy-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AEXI5MEI = $mol_type_enforce<
		`Lu-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__13EYX5VF = $mol_type_enforce<
		`Nd-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I5QAQIJD = $mol_type_enforce<
		`Pr-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XDSEKMT9 = $mol_type_enforce<
		`La-Pm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__92EPCS5R = $mol_type_enforce<
		`Tl-Cd-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9LAK3UWS = $mol_type_enforce<
		`Yb-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__31PRL6S9 = $mol_type_enforce<
		`Os-Pd-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FXEUECTH = $mol_type_enforce<
		`Sm-Dy-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GJENXQZ5 = $mol_type_enforce<
		`Pu-Np-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XFWU6AF9 = $mol_type_enforce<
		`Nb-V-Hg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6JQVJG4J = $mol_type_enforce<
		`Pr-Dy-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VGISGMVU = $mol_type_enforce<
		`Nd-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SNZK4QXK = $mol_type_enforce<
		`Ho-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8IV1KXGD = $mol_type_enforce<
		`Zr-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z2A0X3EX = $mol_type_enforce<
		`Pm-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WHVG9J5Y = $mol_type_enforce<
		`V-Ag-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZRY1LO21 = $mol_type_enforce<
		`Pr-Dy-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ALOJS26A = $mol_type_enforce<
		`Zn-Cd-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DYYI5MB4 = $mol_type_enforce<
		`Li-Sm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C3FWZVSB = $mol_type_enforce<
		`La-Tb-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CXU0EKCF = $mol_type_enforce<
		`Cr-Ni-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2RO7PPUI = $mol_type_enforce<
		`La-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XMNR6J0J = $mol_type_enforce<
		`La-Ce-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T17K93VR = $mol_type_enforce<
		`Yb-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y6KPBWR4 = $mol_type_enforce<
		`Yb-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CBLGI0P7 = $mol_type_enforce<
		`Na-Ca-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6EH679LJ = $mol_type_enforce<
		`Co-Hg-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__46FVDUL3 = $mol_type_enforce<
		`Pm-Pr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8BVBJC4P = $mol_type_enforce<
		`Be-Si-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YXB2TE6U = $mol_type_enforce<
		`Sr-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__28EAA0EB = $mol_type_enforce<
		`Yb-Gd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GQMD638W = $mol_type_enforce<
		`V-Pd-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5KSLKXEZ = $mol_type_enforce<
		`Re-Ir-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__84BJRXDV = $mol_type_enforce<
		`Ce-Gd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZG4CIO18 = $mol_type_enforce<
		`Li-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VPZJWJKL = $mol_type_enforce<
		`Be-Zn-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3NA13HWY = $mol_type_enforce<
		`Y-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E58LW3UT = $mol_type_enforce<
		`Ga-Hg-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AEK85CQF = $mol_type_enforce<
		`Ba-Pr-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ISJ3U3IX = $mol_type_enforce<
		`La-Tm-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XVNRGJ48 = $mol_type_enforce<
		`Li-Tb-Ce`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7BX88GEN = $mol_type_enforce<
		`Yb-Eu-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FX69D78S = $mol_type_enforce<
		`Si-Ag-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N6TC8Z5U = $mol_type_enforce<
		`Ce-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y7RVJSCT = $mol_type_enforce<
		`Gd-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VPUD7GVM = $mol_type_enforce<
		`Th-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9NHM0348 = $mol_type_enforce<
		`Ag-Ir-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W2PI4CVL = $mol_type_enforce<
		`Cu-Re-Tc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CWQK47EA = $mol_type_enforce<
		`Ce-Pm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SV3A5PJY = $mol_type_enforce<
		`Ba-Fe-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2PZDXG1T = $mol_type_enforce<
		`Ir-Os-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GU4S4TRF = $mol_type_enforce<
		`Cr-Cu-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EBKOFI6R = $mol_type_enforce<
		`La-Ce-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G5UOSA7M = $mol_type_enforce<
		`Li-La-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FADHZTWD = $mol_type_enforce<
		`Ca-Yb-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U4E51LEP = $mol_type_enforce<
		`Fe-Pd-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CD80KVUQ = $mol_type_enforce<
		`Ce-Eu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__87INIHXI = $mol_type_enforce<
		`Cs-Pr-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FLD964U4 = $mol_type_enforce<
		`Nb-Cu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z6GX66EU = $mol_type_enforce<
		`Fe-Cu-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LCCXC1OW = $mol_type_enforce<
		`Tb-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X12O7IYT = $mol_type_enforce<
		`La-Th-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EB6CEWUB = $mol_type_enforce<
		`Sm-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O3X1AD0U = $mol_type_enforce<
		`Yb-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WKZ6079U = $mol_type_enforce<
		`Al-Zn-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WARGKQ64 = $mol_type_enforce<
		`Yb-Ho-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LUCMCMJB = $mol_type_enforce<
		`Cs-K-Li`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1JUQQH60 = $mol_type_enforce<
		`Pr-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3XNWDSNA = $mol_type_enforce<
		`Fe-Co-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FPY2K4WT = $mol_type_enforce<
		`Tb-Pm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JJLUHBLK = $mol_type_enforce<
		`Lu-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1FAPKIGM = $mol_type_enforce<
		`Y-Ho-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8Q6Y7PBF = $mol_type_enforce<
		`Li-Ce-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7DKGSEV8 = $mol_type_enforce<
		`Sm-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CTJ8WGRG = $mol_type_enforce<
		`Ni-Pd-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RNFNE0V8 = $mol_type_enforce<
		`Sc-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__APTPJC5S = $mol_type_enforce<
		`Zn-In-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TQVBSJ4O = $mol_type_enforce<
		`Y-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3S3Y251M = $mol_type_enforce<
		`Ce-Eu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V8X458LR = $mol_type_enforce<
		`Yb-Gd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E5R8UNCG = $mol_type_enforce<
		`Tb-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T2JX9MYB = $mol_type_enforce<
		`Yb-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F0TC2PCP = $mol_type_enforce<
		`Tb-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WTYUKR2R = $mol_type_enforce<
		`Ta-Tl-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ALQMK19I = $mol_type_enforce<
		`Hg-Mo-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DXPV4KHI = $mol_type_enforce<
		`Sm-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ENM8VU5E = $mol_type_enforce<
		`Co-Re-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E0VX375U = $mol_type_enforce<
		`Co-Ag-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9Z0C8G9J = $mol_type_enforce<
		`La-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__28SNXODX = $mol_type_enforce<
		`Hf-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WJ2UXPCD = $mol_type_enforce<
		`Fe-Ni-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LXWW4P0M = $mol_type_enforce<
		`Nb-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OQPAQC65 = $mol_type_enforce<
		`Gd-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z0G8SNK8 = $mol_type_enforce<
		`Pd-Pt-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MSE66MN2 = $mol_type_enforce<
		`Pm-Dy-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SL8T6UE3 = $mol_type_enforce<
		`Co-Ni-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RHGHNGVO = $mol_type_enforce<
		`Gd-Dy-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K7J9YQTJ = $mol_type_enforce<
		`Tm-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__48Y8MYK7 = $mol_type_enforce<
		`Nd-Dy-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X2EVK1FB = $mol_type_enforce<
		`Dy-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DBT6ABM6 = $mol_type_enforce<
		`Tb-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I2DBPFG5 = $mol_type_enforce<
		`Nd-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K6931PND = $mol_type_enforce<
		`Sm-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YOTTN5DA = $mol_type_enforce<
		`Li-La-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K6NRRT3U = $mol_type_enforce<
		`Th-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CPZUHQWN = $mol_type_enforce<
		`Tb-Ce-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E0TUNYMC = $mol_type_enforce<
		`Gd-Ho-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DZ8Y306R = $mol_type_enforce<
		`Pr-Dy-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UQ5591SZ = $mol_type_enforce<
		`Hf-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__92C9TEBA = $mol_type_enforce<
		`Ca-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I6QKGXT4 = $mol_type_enforce<
		`Ti-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VIAEG4XF = $mol_type_enforce<
		`Co-Ir-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R8TS1148 = $mol_type_enforce<
		`Ba-Sr-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3JMNLQ7T = $mol_type_enforce<
		`Ba-Yb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7O9ALM68 = $mol_type_enforce<
		`Yb-Th-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DJXI31C4 = $mol_type_enforce<
		`Li-Nd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4D69SXRS = $mol_type_enforce<
		`Ce-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U3E7RESK = $mol_type_enforce<
		`Co-Re-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GRBYNMU1 = $mol_type_enforce<
		`Yb-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UDX1WM23 = $mol_type_enforce<
		`Re-Pd-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D0T72BUN = $mol_type_enforce<
		`Ni-Pd-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SJCRDH8J = $mol_type_enforce<
		`Ho-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C4K9HILP = $mol_type_enforce<
		`Cr-Fe-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6C4BZLP6 = $mol_type_enforce<
		`Tb-Sm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3V58V9L9 = $mol_type_enforce<
		`Ce-Gd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T0TZ9759 = $mol_type_enforce<
		`Li-Ce-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ATJSG3UU = $mol_type_enforce<
		`Nd-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PDVIODZN = $mol_type_enforce<
		`Li-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SHXL9WON = $mol_type_enforce<
		`Nd-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GBWND905 = $mol_type_enforce<
		`La-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WLXKN20M = $mol_type_enforce<
		`La-Ce-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CDFLUTKU = $mol_type_enforce<
		`La-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QV5A48DD = $mol_type_enforce<
		`Ag-Os-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z9F35RO2 = $mol_type_enforce<
		`Pt-W-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BC4WLMS1 = $mol_type_enforce<
		`Cu-Bi-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EUV9L2GU = $mol_type_enforce<
		`Pr-Nd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7EN462Y1 = $mol_type_enforce<
		`Fe-Co-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DNT1J978 = $mol_type_enforce<
		`Li-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IKSMRE3H = $mol_type_enforce<
		`Y-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZRWVLMLD = $mol_type_enforce<
		`Be-Si-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QSIP7WAR = $mol_type_enforce<
		`Li-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8AV7CX44 = $mol_type_enforce<
		`Th-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IUFSP232 = $mol_type_enforce<
		`Ho-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X1FVWPUN = $mol_type_enforce<
		`Pm-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7BQW722A = $mol_type_enforce<
		`Th-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V92BJEYM = $mol_type_enforce<
		`Gd-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GTPZIUYP = $mol_type_enforce<
		`Yb-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NC0XWE5U = $mol_type_enforce<
		`Tm-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H72AFMLJ = $mol_type_enforce<
		`Cs-Mg-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JCG9W2WA = $mol_type_enforce<
		`La-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S13ZABGI = $mol_type_enforce<
		`Li-Nd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W2M09F1D = $mol_type_enforce<
		`Co-Ag-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P9QXBFN0 = $mol_type_enforce<
		`Ba-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XUK8XRGV = $mol_type_enforce<
		`Pr-Gd-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4SXO9DKI = $mol_type_enforce<
		`Ce-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N9FJZPMF = $mol_type_enforce<
		`Tb-Dy-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__INMCQANR = $mol_type_enforce<
		`Sr-Ca-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MMS2ORCV = $mol_type_enforce<
		`Nd-Sc-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QFTU1870 = $mol_type_enforce<
		`Li-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JZT3H8MP = $mol_type_enforce<
		`Y-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__32FYVB6S = $mol_type_enforce<
		`Cr-Cu-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QVVHSRDR = $mol_type_enforce<
		`Fe-Os-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FXZ8DES7 = $mol_type_enforce<
		`Pm-Sm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AU56SCG2 = $mol_type_enforce<
		`Cu-Pb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X44D4ILU = $mol_type_enforce<
		`Nd-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VTR28BJF = $mol_type_enforce<
		`Pm-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MTUBN6XG = $mol_type_enforce<
		`Ce-Nd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QSH6LP4Z = $mol_type_enforce<
		`Fe-Ni-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MJL22AYL = $mol_type_enforce<
		`U-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V3U3G617 = $mol_type_enforce<
		`Nd-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QTC7EZR7 = $mol_type_enforce<
		`Dy-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RVC24RXE = $mol_type_enforce<
		`Ce-Pu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FOWPREHR = $mol_type_enforce<
		`La-Ce-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UR93E4O0 = $mol_type_enforce<
		`Tm-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MWV4JOFU = $mol_type_enforce<
		`La-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YTIO7S5N = $mol_type_enforce<
		`Ba-La-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AYTBXIQ4 = $mol_type_enforce<
		`Tm-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4DOK7U7N = $mol_type_enforce<
		`Eu-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PB466H28 = $mol_type_enforce<
		`Yb-Y-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PGKWM1GD = $mol_type_enforce<
		`La-Yb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__458DRC6X = $mol_type_enforce<
		`Hf-Th-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RPZ9GKPJ = $mol_type_enforce<
		`Nd-Sm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2D1V2UR0 = $mol_type_enforce<
		`Na-Hf-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TU4J2XRB = $mol_type_enforce<
		`Fe-Ag-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3OV9E3GX = $mol_type_enforce<
		`Li-Pu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QH1QSCBZ = $mol_type_enforce<
		`Pr-Sm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4K4E08BG = $mol_type_enforce<
		`Tb-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IVX29YL1 = $mol_type_enforce<
		`Sm-Gd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D6795ETX = $mol_type_enforce<
		`Co-Cu-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XE1UIJOR = $mol_type_enforce<
		`Re-Ag-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8EE8B8KJ = $mol_type_enforce<
		`Ru-Rh-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SAIB6I3S = $mol_type_enforce<
		`Mn-Tl-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S163RUVU = $mol_type_enforce<
		`Pr-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__093GIAP1 = $mol_type_enforce<
		`La-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SOFZ5V4G = $mol_type_enforce<
		`Dy-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LATOK8DL = $mol_type_enforce<
		`Ta-In-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__47ZO7YYV = $mol_type_enforce<
		`Be-In-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__82ZJ2XI0 = $mol_type_enforce<
		`Y-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U48EFYFO = $mol_type_enforce<
		`Cd-Bi-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SNJBNL39 = $mol_type_enforce<
		`Yb-Dy-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1SVC8IM5 = $mol_type_enforce<
		`Na-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZIYE4R1Q = $mol_type_enforce<
		`Ba-Nd-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PLRWFTWA = $mol_type_enforce<
		`Ca-Mn-Co`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5ALDA6JR = $mol_type_enforce<
		`Li-Nd-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BAHIQ56G = $mol_type_enforce<
		`Co-Os-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JSL0ZYTQ = $mol_type_enforce<
		`Co-Ru-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KZ0NW0P8 = $mol_type_enforce<
		`Yb-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4YCYCY2O = $mol_type_enforce<
		`K-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6OZ6K9ZS = $mol_type_enforce<
		`Tb-Yb-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZFXFNDHK = $mol_type_enforce<
		`Tb-Yb-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FJW4YIJZ = $mol_type_enforce<
		`Sc-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OZEKWVQR = $mol_type_enforce<
		`Fe-Co-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1E2HJZM0 = $mol_type_enforce<
		`Fe-Cu-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ONGWNO7K = $mol_type_enforce<
		`Hf-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZDXPMDSF = $mol_type_enforce<
		`Tb-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JQE7688D = $mol_type_enforce<
		`Hg-Ge-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JNWJYL6A = $mol_type_enforce<
		`K-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CAHZ2RSK = $mol_type_enforce<
		`Li-La-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7U6LNQ4R = $mol_type_enforce<
		`Er-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N74W3F6R = $mol_type_enforce<
		`K-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0524B5WG = $mol_type_enforce<
		`Ce-Y-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QPYMY49W = $mol_type_enforce<
		`Gd-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__153ZMVXQ = $mol_type_enforce<
		`Li-Tb-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NBFSG2YB = $mol_type_enforce<
		`Fe-Cu-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5II92L5Z = $mol_type_enforce<
		`Cu-Os-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M621YTDD = $mol_type_enforce<
		`Tb-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FHG3LOU3 = $mol_type_enforce<
		`Pr-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WK7HGR55 = $mol_type_enforce<
		`Li-Y-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DL6GFGNI = $mol_type_enforce<
		`Dy-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__03E1V0NO = $mol_type_enforce<
		`Na-Cu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VLGRYT34 = $mol_type_enforce<
		`Yb-Eu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G40NQRXB = $mol_type_enforce<
		`Li-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CT8CR432 = $mol_type_enforce<
		`Cs-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z2LQQWIB = $mol_type_enforce<
		`Co-Cu-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B3B9O6Y9 = $mol_type_enforce<
		`Rb-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BKQ0WY8C = $mol_type_enforce<
		`Al-Ga-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DNA0M37U = $mol_type_enforce<
		`V-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6GRF9AWV = $mol_type_enforce<
		`Pm-Gd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UQABEOU8 = $mol_type_enforce<
		`Li-La-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G3U0NWV6 = $mol_type_enforce<
		`Ce-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KTMT7H8Y = $mol_type_enforce<
		`Ce-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0IJGA2VP = $mol_type_enforce<
		`Ag-Rh-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__618VWJAX = $mol_type_enforce<
		`Ce-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HHBD5KZU = $mol_type_enforce<
		`Bi-B-Sb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MARWLFY9 = $mol_type_enforce<
		`Ho-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3MNJ6CJZ = $mol_type_enforce<
		`La-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZFR3WFEJ = $mol_type_enforce<
		`Tb-Dy-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4KWGZUZB = $mol_type_enforce<
		`Pm-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N2E6I5WS = $mol_type_enforce<
		`Tb-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MOD0BT9P = $mol_type_enforce<
		`Zn-Cd-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IASI2W5A = $mol_type_enforce<
		`Ce-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P39R1SSV = $mol_type_enforce<
		`Sm-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OHI0U6BR = $mol_type_enforce<
		`Th-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SI7Z0W7P = $mol_type_enforce<
		`Tb-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R5LCONZ8 = $mol_type_enforce<
		`Pr-Sm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G8A8BMLH = $mol_type_enforce<
		`La-Pr-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NZQGRKBP = $mol_type_enforce<
		`Ho-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EHQHS9XJ = $mol_type_enforce<
		`Ag-Bi-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4TPTPQJQ = $mol_type_enforce<
		`Li-Tb-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3F3S0O8Q = $mol_type_enforce<
		`Sr-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KWJTK72H = $mol_type_enforce<
		`Co-Re-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TMUHII53 = $mol_type_enforce<
		`Y-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HNW8YBNA = $mol_type_enforce<
		`Ce-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LEOWDUV9 = $mol_type_enforce<
		`Pm-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XAWH9YQT = $mol_type_enforce<
		`Sm-Dy-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4YG13UW4 = $mol_type_enforce<
		`Pd-Ru-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N5KOQRML = $mol_type_enforce<
		`Hg-Bi-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DA8O886Y = $mol_type_enforce<
		`Sc-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PRY2GS3T = $mol_type_enforce<
		`Yb-Pr-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N6CG1PUQ = $mol_type_enforce<
		`Al-Tl-In`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WFWSCYF9 = $mol_type_enforce<
		`Ho-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M0LSY53G = $mol_type_enforce<
		`Rb-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FMGT6UWQ = $mol_type_enforce<
		`Tm-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U2Q2A0Q0 = $mol_type_enforce<
		`Pr-Sm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XAVLI12Q = $mol_type_enforce<
		`Gd-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZG2YFTKM = $mol_type_enforce<
		`Mn-V-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2YAHZ0SH = $mol_type_enforce<
		`Cr-Cd-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EPDHI2Z3 = $mol_type_enforce<
		`Tb-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BSD2QOFG = $mol_type_enforce<
		`V-Ag-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9VDJD075 = $mol_type_enforce<
		`La-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YC8DM2B7 = $mol_type_enforce<
		`La-Dy-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UNG98B5H = $mol_type_enforce<
		`Li-Gd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WBB9LQMS = $mol_type_enforce<
		`Y-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G1N40LPN = $mol_type_enforce<
		`Li-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F9AHPLRM = $mol_type_enforce<
		`Np-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U2DMI2V2 = $mol_type_enforce<
		`Ag-Mo-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B9QYODLB = $mol_type_enforce<
		`Co-Hg-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VR3TSESY = $mol_type_enforce<
		`Mn-Tl-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y1MKDX2S = $mol_type_enforce<
		`Eu-Y-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HLW82HKX = $mol_type_enforce<
		`Cu-Ir-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U14Q6VQG = $mol_type_enforce<
		`Tb-Gd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5N3WZNJR = $mol_type_enforce<
		`Pr-Hf-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5MHAQPUE = $mol_type_enforce<
		`Tb-Ce-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VUUOKLCW = $mol_type_enforce<
		`Ag-Ir-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q2HPX1AX = $mol_type_enforce<
		`Tl-Zn-In`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7WF7FCEV = $mol_type_enforce<
		`Li-Sm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BFV5EBGJ = $mol_type_enforce<
		`Nd-Sm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__POAIN05Y = $mol_type_enforce<
		`Re-Ni-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BND0XN8M = $mol_type_enforce<
		`Yb-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G1VUTTF4 = $mol_type_enforce<
		`La-Dy-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2DQICZQP = $mol_type_enforce<
		`Mn-Ru-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2IGUJ2B6 = $mol_type_enforce<
		`Dy-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HSK5F9OK = $mol_type_enforce<
		`Pr-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SUJL72J0 = $mol_type_enforce<
		`Sm-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9HOK8GDW = $mol_type_enforce<
		`Eu-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JUMKSKDM = $mol_type_enforce<
		`Y-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HW8QN9MH = $mol_type_enforce<
		`Ce-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__46WZSAUY = $mol_type_enforce<
		`Sn-Ge-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GMU75M5Z = $mol_type_enforce<
		`Nd-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__20EBPEH7 = $mol_type_enforce<
		`Hf-Sc-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZGYCV3G1 = $mol_type_enforce<
		`Tl-Ga-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VIT2SMB3 = $mol_type_enforce<
		`Tm-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B2M0XD4W = $mol_type_enforce<
		`Fe-Ru-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JLSFWIC3 = $mol_type_enforce<
		`Ho-Er-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0MF2IRKM = $mol_type_enforce<
		`Yb-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DIHPI7KL = $mol_type_enforce<
		`Nd-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9JU9FKKE = $mol_type_enforce<
		`Cs-Rb-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__20ZXQM28 = $mol_type_enforce<
		`Lu-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O4TTCM9M = $mol_type_enforce<
		`Zn-Ga-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1WK50DJ9 = $mol_type_enforce<
		`Pr-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X621NB7I = $mol_type_enforce<
		`La-Eu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5FS1BQR1 = $mol_type_enforce<
		`Yb-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KETIKUP1 = $mol_type_enforce<
		`Yb-Gd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EHQ3KZQM = $mol_type_enforce<
		`Tl-Ge-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TUGJSM78 = $mol_type_enforce<
		`Tb-Ce-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZN5OHM5N = $mol_type_enforce<
		`Gd-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IY44043Q = $mol_type_enforce<
		`La-Dy-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__66E0J9UG = $mol_type_enforce<
		`Co-Re-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CCTQERXL = $mol_type_enforce<
		`Yb-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D7D9OPB3 = $mol_type_enforce<
		`Al-Zn-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A9FXVKUH = $mol_type_enforce<
		`Tl-Ni-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZA74O6YE = $mol_type_enforce<
		`K-Rb-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TUDCX2EB = $mol_type_enforce<
		`Y-Th-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PZ3AD7PQ = $mol_type_enforce<
		`Pm-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZG2V70GS = $mol_type_enforce<
		`Ce-Sm-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__69UCSWIA = $mol_type_enforce<
		`La-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5O6VV72M = $mol_type_enforce<
		`Ce-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EGV018C1 = $mol_type_enforce<
		`Na-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RWI4TGTE = $mol_type_enforce<
		`Tb-Ce-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AKHH5F0U = $mol_type_enforce<
		`Sm-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4GGO2GBH = $mol_type_enforce<
		`Cs-Li-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W11TL8PS = $mol_type_enforce<
		`Pr-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FIQ37UHF = $mol_type_enforce<
		`Dy-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SJF5GS1D = $mol_type_enforce<
		`Ca-Fe-Co`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9UNHKZ2P = $mol_type_enforce<
		`Lu-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VMY6BHD8 = $mol_type_enforce<
		`Al-Ga-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XU21XP6P = $mol_type_enforce<
		`Pr-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TKXILARP = $mol_type_enforce<
		`Na-Li-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__83JVLAHC = $mol_type_enforce<
		`Ir-Ru-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NVOPOH0A = $mol_type_enforce<
		`Fe-Ru-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AUHR61NJ = $mol_type_enforce<
		`Ho-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IOZ6S9T9 = $mol_type_enforce<
		`Lu-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3G4KEIM8 = $mol_type_enforce<
		`Pu-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IFE9XHEB = $mol_type_enforce<
		`Lu-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B58SOCR3 = $mol_type_enforce<
		`Ca-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__107QW8UK = $mol_type_enforce<
		`La-Dy-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0EY4WPG8 = $mol_type_enforce<
		`Ce-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XCZ9VZA2 = $mol_type_enforce<
		`Li-La-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XXAO0ZW9 = $mol_type_enforce<
		`Mn-V-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MLC787GV = $mol_type_enforce<
		`Ni-Ag-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__19KC9TOH = $mol_type_enforce<
		`Li-Tb-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8Z1DWU1K = $mol_type_enforce<
		`Cs-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HD68HSF3 = $mol_type_enforce<
		`Li-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q87GDF95 = $mol_type_enforce<
		`Cs-Pr-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YFXOW2NO = $mol_type_enforce<
		`Hf-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__59T94Z04 = $mol_type_enforce<
		`Sm-Th-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FG6QXWZB = $mol_type_enforce<
		`Pr-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__543L6SSP = $mol_type_enforce<
		`Yb-Dy-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F390WU6G = $mol_type_enforce<
		`Tb-Gd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YZ8N7KVX = $mol_type_enforce<
		`La-Yb-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XKTMGV9G = $mol_type_enforce<
		`Mn-Tl-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__79ALKK4Q = $mol_type_enforce<
		`Yb-Pr-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G7TRJ5P2 = $mol_type_enforce<
		`La-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YJ4INIVM = $mol_type_enforce<
		`Ce-Pr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T9FPWM9Z = $mol_type_enforce<
		`La-Nd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YLVQPEVJ = $mol_type_enforce<
		`Ce-Y-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GT36JDZB = $mol_type_enforce<
		`Ca-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EDOWI7LZ = $mol_type_enforce<
		`Tb-Pr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6EIE6W74 = $mol_type_enforce<
		`Dy-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZXZ0Z7DZ = $mol_type_enforce<
		`Ni-Pt-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PH3MFKRE = $mol_type_enforce<
		`Ni-Rh-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YVPIG094 = $mol_type_enforce<
		`Hf-Mg-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E02FH74V = $mol_type_enforce<
		`Ca-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JNHZWSQ8 = $mol_type_enforce<
		`Al-Hg-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QCW6W29N = $mol_type_enforce<
		`Nd-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UHEKHLZB = $mol_type_enforce<
		`Li-Sm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6BTCGR47 = $mol_type_enforce<
		`Pm-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PLEEHMI6 = $mol_type_enforce<
		`Ca-Yb-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E3CHLP76 = $mol_type_enforce<
		`Co-Cu-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D5XZAF62 = $mol_type_enforce<
		`Li-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GUWY7FL1 = $mol_type_enforce<
		`Er-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HBKBJMUN = $mol_type_enforce<
		`Sr-Mn-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__13MPJDGK = $mol_type_enforce<
		`Pr-Gd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UNOWFELP = $mol_type_enforce<
		`Na-Li-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UUKQD5LI = $mol_type_enforce<
		`Na-V-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1Z7N3S0R = $mol_type_enforce<
		`Na-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NW3Z589O = $mol_type_enforce<
		`Pd-W-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O1WH4GHX = $mol_type_enforce<
		`Li-Gd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G3OW8MAP = $mol_type_enforce<
		`Li-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H4NVBHK6 = $mol_type_enforce<
		`Rb-Li-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I2VQIROB = $mol_type_enforce<
		`Co-Hg-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UFY5LSIB = $mol_type_enforce<
		`Dy-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IMRNGB7Z = $mol_type_enforce<
		`La-Nd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YDC1Z8W6 = $mol_type_enforce<
		`Al-Sn-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__52NLNPFH = $mol_type_enforce<
		`Na-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I9YQ8997 = $mol_type_enforce<
		`Er-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BGYMTUTP = $mol_type_enforce<
		`Sr-Ca-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2UEP8VN4 = $mol_type_enforce<
		`Rb-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WH1OCTJ4 = $mol_type_enforce<
		`Y-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M4TFM967 = $mol_type_enforce<
		`Tb-Nd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2HUD0CF8 = $mol_type_enforce<
		`Rb-Na-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1OLC2PXU = $mol_type_enforce<
		`Cd-Ga-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DFZ7P66C = $mol_type_enforce<
		`Ca-Tb-Yb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HQ6329KP = $mol_type_enforce<
		`Sn-Ge-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FKY20GFZ = $mol_type_enforce<
		`Yb-Gd-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8C5DYYTJ = $mol_type_enforce<
		`Y-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RQ1TLB45 = $mol_type_enforce<
		`Yb-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8D4IBF7W = $mol_type_enforce<
		`Ce-Gd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D2O1IK8E = $mol_type_enforce<
		`Ba-Sm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P7L008I8 = $mol_type_enforce<
		`Cr-Cd-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VYH93JFP = $mol_type_enforce<
		`La-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0Q7FKMY9 = $mol_type_enforce<
		`Ba-Mn-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VIHOITRD = $mol_type_enforce<
		`Gd-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D2THCPX8 = $mol_type_enforce<
		`Tb-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y28NOXBR = $mol_type_enforce<
		`Ba-Mn-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TZCZMLIT = $mol_type_enforce<
		`Cu-Ni-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6T2CU5AO = $mol_type_enforce<
		`Lu-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BTTSS6S7 = $mol_type_enforce<
		`Pr-Gd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O4XHAVGK = $mol_type_enforce<
		`Er-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VS6SBDMW = $mol_type_enforce<
		`La-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XNNR8XLG = $mol_type_enforce<
		`Mn-Co-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3LDPQI0T = $mol_type_enforce<
		`Yb-Eu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OFZ7K5T6 = $mol_type_enforce<
		`Li-Pm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BU86046N = $mol_type_enforce<
		`La-Sm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V9HZLT7P = $mol_type_enforce<
		`La-Eu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8K3QB1CM = $mol_type_enforce<
		`Sn-Ge-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZVVGLB53 = $mol_type_enforce<
		`La-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZNJX1ZE8 = $mol_type_enforce<
		`Yb-Pr-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__18OJX5UI = $mol_type_enforce<
		`Ce-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0D3GC3UR = $mol_type_enforce<
		`Rb-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZN0XTU3R = $mol_type_enforce<
		`Tl-Ag-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NKCJ4G53 = $mol_type_enforce<
		`Gd-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PL3TE62R = $mol_type_enforce<
		`Y-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9WMQRIQK = $mol_type_enforce<
		`Tb-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7VIPDYCV = $mol_type_enforce<
		`Fe-Ir-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DGT0VQ8W = $mol_type_enforce<
		`Hg-Os-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__393F793M = $mol_type_enforce<
		`Ba-Yb-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2R82XJPP = $mol_type_enforce<
		`Nd-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1RQ9YN0U = $mol_type_enforce<
		`Ce-Sm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AJ88LHBN = $mol_type_enforce<
		`Ba-Pr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6NN8Z93V = $mol_type_enforce<
		`La-Pr-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YJFH9PBD = $mol_type_enforce<
		`Rb-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XEOM1FZU = $mol_type_enforce<
		`Ba-Ca-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GZQ6GD9T = $mol_type_enforce<
		`La-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ECLPBMTZ = $mol_type_enforce<
		`Lu-Th-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HANW1K4M = $mol_type_enforce<
		`Al-Ge-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZAPYTWIW = $mol_type_enforce<
		`Li-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XLFZRKHV = $mol_type_enforce<
		`K-Mg-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZN87B8SA = $mol_type_enforce<
		`Hg-Ir-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__066ZVA8K = $mol_type_enforce<
		`Nd-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1T6MO3PS = $mol_type_enforce<
		`Cs-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1169CGVU = $mol_type_enforce<
		`Cu-Pd-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PLT1KUR8 = $mol_type_enforce<
		`Yb-Dy-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HPIT1LOQ = $mol_type_enforce<
		`Dy-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FROSCPRW = $mol_type_enforce<
		`Hg-Ge-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IQF4BQBP = $mol_type_enforce<
		`Cu-Ni-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FRE6VOO0 = $mol_type_enforce<
		`Y-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EQ7T5MI9 = $mol_type_enforce<
		`Sm-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MVZJZPCL = $mol_type_enforce<
		`Dy-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E8585JQU = $mol_type_enforce<
		`Tb-Nd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VZPCPGRW = $mol_type_enforce<
		`Ta-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QTM23VZK = $mol_type_enforce<
		`Tm-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6SNGHZRO = $mol_type_enforce<
		`Li-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7UBZ1DJG = $mol_type_enforce<
		`Nd-Gd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WKY2I5D7 = $mol_type_enforce<
		`Na-Cr-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TP37IQNA = $mol_type_enforce<
		`Li-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FJXIC4VY = $mol_type_enforce<
		`Tb-Pm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EHGV0KQN = $mol_type_enforce<
		`Lu-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UUT89Q3X = $mol_type_enforce<
		`Th-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TYICRQZ0 = $mol_type_enforce<
		`Cd-Ge-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NLTHXRBZ = $mol_type_enforce<
		`Th-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z8GD8QKN = $mol_type_enforce<
		`Yb-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PYQKPO2J = $mol_type_enforce<
		`Nd-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B20R0AQL = $mol_type_enforce<
		`Al-Cd-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9I7VRTX0 = $mol_type_enforce<
		`Tb-Nd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BCPCHJX3 = $mol_type_enforce<
		`Ag-Os-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0WIDJDCD = $mol_type_enforce<
		`Yb-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZL80QF5W = $mol_type_enforce<
		`Ce-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MLWYLFCL = $mol_type_enforce<
		`Co-Hg-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IMTJXEEK = $mol_type_enforce<
		`Ba-Sr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__26SFLQ7G = $mol_type_enforce<
		`Nd-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DUZG5UMS = $mol_type_enforce<
		`Tb-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MMUG1L1W = $mol_type_enforce<
		`Tb-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5XMMG4Y3 = $mol_type_enforce<
		`Re-Ni-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ICCX9SXB = $mol_type_enforce<
		`Y-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3T6VVJXD = $mol_type_enforce<
		`Yb-Gd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LEG4SBUC = $mol_type_enforce<
		`Sc-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C387YBP0 = $mol_type_enforce<
		`Ce-Sm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CXEALNIB = $mol_type_enforce<
		`Pr-Gd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QYB9H0NB = $mol_type_enforce<
		`Nd-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4RALXV4Y = $mol_type_enforce<
		`Dy-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3LF9W0LZ = $mol_type_enforce<
		`Ca-La-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OGCZ5XKR = $mol_type_enforce<
		`Ce-Lu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__409OTAEU = $mol_type_enforce<
		`Cu-Ru-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K0ELOQNH = $mol_type_enforce<
		`Si-Sn-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JLTYR6J5 = $mol_type_enforce<
		`Cu-Re-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IPT812SY = $mol_type_enforce<
		`Ga-Ge-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4XF2Z257 = $mol_type_enforce<
		`La-Eu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F7QDE6TK = $mol_type_enforce<
		`Tb-Ce-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CKCX1K0W = $mol_type_enforce<
		`Yb-Pr-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RAQX36Q6 = $mol_type_enforce<
		`K-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TEL6UXJK = $mol_type_enforce<
		`K-V-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TYNLUU0L = $mol_type_enforce<
		`Lu-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EDAVTYIV = $mol_type_enforce<
		`Pm-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__480QJQ6X = $mol_type_enforce<
		`Pr-Sm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MP5L110K = $mol_type_enforce<
		`Al-Si-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__72N7XK03 = $mol_type_enforce<
		`Sm-Gd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6IXDY4JP = $mol_type_enforce<
		`Ni-Ir-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HT9R1GUY = $mol_type_enforce<
		`Cu-Re-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IKCP46TR = $mol_type_enforce<
		`Tl-Ge-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UQ25DUD0 = $mol_type_enforce<
		`Ba-Pm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W322XCL9 = $mol_type_enforce<
		`Yb-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VLWXWA0Z = $mol_type_enforce<
		`Fe-Bi-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8S75UC83 = $mol_type_enforce<
		`Yb-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KLAN16IM = $mol_type_enforce<
		`Cs-Pr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4B2LTA37 = $mol_type_enforce<
		`Ca-Tb-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SA91V0Q8 = $mol_type_enforce<
		`Li-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A29Y28FT = $mol_type_enforce<
		`Tb-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NXU906G8 = $mol_type_enforce<
		`Ca-La-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YLJBUWFJ = $mol_type_enforce<
		`Gd-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UVXT249Q = $mol_type_enforce<
		`Gd-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HXHLZSBX = $mol_type_enforce<
		`Nd-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5NTON913 = $mol_type_enforce<
		`Tb-Yb-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R93QMHIR = $mol_type_enforce<
		`La-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R5XHI02E = $mol_type_enforce<
		`Pm-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PMTZH226 = $mol_type_enforce<
		`Ba-Ca-Eu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S3F8D3N0 = $mol_type_enforce<
		`La-Ce-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T7Z3G7HW = $mol_type_enforce<
		`U-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7BG1BZ3O = $mol_type_enforce<
		`Ca-Ce-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5N01HXI1 = $mol_type_enforce<
		`Ho-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QEK46U3C = $mol_type_enforce<
		`Y-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OERAR605 = $mol_type_enforce<
		`Gd-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y57ICIMP = $mol_type_enforce<
		`Yb-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FL113YSQ = $mol_type_enforce<
		`La-Eu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SGSYUQAL = $mol_type_enforce<
		`Rb-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QQAW8UR4 = $mol_type_enforce<
		`Li-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JPAWSW1U = $mol_type_enforce<
		`Pm-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZLAYA3LV = $mol_type_enforce<
		`Li-Hf-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RZ7Q7UJN = $mol_type_enforce<
		`Sr-V-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QR73FQBZ = $mol_type_enforce<
		`Pm-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__04XH3LQP = $mol_type_enforce<
		`Er-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XMYXDFPX = $mol_type_enforce<
		`Ca-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1CFNS1BX = $mol_type_enforce<
		`Li-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6KDRVT0Z = $mol_type_enforce<
		`Ba-Ca-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__68O2M2Y4 = $mol_type_enforce<
		`Tb-Pm-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M6VT9WSA = $mol_type_enforce<
		`Sm-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LRTS6CUC = $mol_type_enforce<
		`Ce-Eu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2QKIP57L = $mol_type_enforce<
		`Nd-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CLZXS8YR = $mol_type_enforce<
		`Fe-Co-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KNLSBFS1 = $mol_type_enforce<
		`Gd-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KL2HB78M = $mol_type_enforce<
		`Cs-Mg-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KSCPSYCK = $mol_type_enforce<
		`Ho-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GZA884TJ = $mol_type_enforce<
		`Y-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__44VY0WIQ = $mol_type_enforce<
		`Li-La-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GNY065S9 = $mol_type_enforce<
		`Li-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5ODH6XS9 = $mol_type_enforce<
		`Ce-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0ZKUODUQ = $mol_type_enforce<
		`Li-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M5MN98RF = $mol_type_enforce<
		`Yb-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FAS9W2TT = $mol_type_enforce<
		`K-Rb-Li`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NMHBFUBM = $mol_type_enforce<
		`Er-Hf-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SV33O05M = $mol_type_enforce<
		`Cu-Tc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KHDA11S6 = $mol_type_enforce<
		`Ni-Rh-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C6EU1PNQ = $mol_type_enforce<
		`Ni-Ag-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G1XZJE8J = $mol_type_enforce<
		`Cr-Fe-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EHQHYOUV = $mol_type_enforce<
		`Y-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZVYXTMJ0 = $mol_type_enforce<
		`Tb-Nd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LEP7YDM4 = $mol_type_enforce<
		`Dy-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1I1W3G5M = $mol_type_enforce<
		`Rb-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DHYN3SJ7 = $mol_type_enforce<
		`Li-Tb-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__07DWNUMX = $mol_type_enforce<
		`Sm-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0JOJ8PMY = $mol_type_enforce<
		`Ir-Pd-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A5NEQMNY = $mol_type_enforce<
		`Pm-Nd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OLUBFTSB = $mol_type_enforce<
		`Ba-Pm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CHLT5EID = $mol_type_enforce<
		`Y-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__54XQ3B7E = $mol_type_enforce<
		`Nd-Gd-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X236I5FC = $mol_type_enforce<
		`Th-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VEHTOU91 = $mol_type_enforce<
		`K-Mg-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__22UYO5GB = $mol_type_enforce<
		`Ni-Pt-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C9IFVJL0 = $mol_type_enforce<
		`Cu-Pd-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__73Z5G9Q5 = $mol_type_enforce<
		`Gd-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0F0N8DRO = $mol_type_enforce<
		`Co-Ag-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RC3XHM98 = $mol_type_enforce<
		`Li-Ce-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A3STHEBM = $mol_type_enforce<
		`Tm-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NSWB6PT1 = $mol_type_enforce<
		`Pm-Dy-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KHXCQWX3 = $mol_type_enforce<
		`Er-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5LERFIVP = $mol_type_enforce<
		`Sm-Th-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XEREDQL5 = $mol_type_enforce<
		`Yb-Mn-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X9EY4JJB = $mol_type_enforce<
		`K-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3YGAULRO = $mol_type_enforce<
		`Dy-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UV0R8TSQ = $mol_type_enforce<
		`La-Tb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0OAQO4UN = $mol_type_enforce<
		`Yb-Nd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__822GS585 = $mol_type_enforce<
		`Y-Ho-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__98DCJ6IK = $mol_type_enforce<
		`Yb-Pu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OGJA9QIO = $mol_type_enforce<
		`Ce-Pr-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RAY58MYY = $mol_type_enforce<
		`Co-Re-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H1N6LJZL = $mol_type_enforce<
		`Ce-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TV89S45E = $mol_type_enforce<
		`Ag-Mo-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4T68N761 = $mol_type_enforce<
		`Ca-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KCJ4FWW3 = $mol_type_enforce<
		`Tl-Cu-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TK8PB34N = $mol_type_enforce<
		`Tb-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YMX476I0 = $mol_type_enforce<
		`Be-Sn-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZSF53B9Z = $mol_type_enforce<
		`Y-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9O5ACSUE = $mol_type_enforce<
		`Nd-Dy-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LGE8NR1O = $mol_type_enforce<
		`Nd-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BDDRWZ6X = $mol_type_enforce<
		`Be-Zn-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OQN4K3I5 = $mol_type_enforce<
		`La-Pr-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VK1V0UI6 = $mol_type_enforce<
		`In-Ga-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NS1VHUIK = $mol_type_enforce<
		`Li-Fe-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DJ63JHW3 = $mol_type_enforce<
		`Ni-Ru-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BH9VTBBF = $mol_type_enforce<
		`Gd-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VHGBDXO4 = $mol_type_enforce<
		`Gd-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WO9ZOER1 = $mol_type_enforce<
		`Er-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A5T5TC55 = $mol_type_enforce<
		`Cu-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9LKKB5C1 = $mol_type_enforce<
		`Pm-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BDL5DM6W = $mol_type_enforce<
		`Hf-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VT12WYI0 = $mol_type_enforce<
		`Sc-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0XQN9CT3 = $mol_type_enforce<
		`Cr-Cd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3R97I7JB = $mol_type_enforce<
		`U-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HAAS42QX = $mol_type_enforce<
		`Tb-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0FQRAFSF = $mol_type_enforce<
		`Co-Cu-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3CW2ZUXN = $mol_type_enforce<
		`Zn-Sn-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IOU5F23C = $mol_type_enforce<
		`Pm-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GE29W5C0 = $mol_type_enforce<
		`Ba-Eu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8CZSBW1J = $mol_type_enforce<
		`Er-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KH0EVU69 = $mol_type_enforce<
		`Ni-Ir-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IJ83XMTL = $mol_type_enforce<
		`Li-Mn-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9W0NO1AA = $mol_type_enforce<
		`Mg-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DK67AZ8D = $mol_type_enforce<
		`Gd-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PMEX7UOA = $mol_type_enforce<
		`Co-Ni-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KKL03YKD = $mol_type_enforce<
		`Yb-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__26PFA4S8 = $mol_type_enforce<
		`Yb-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FH3M4BGD = $mol_type_enforce<
		`Cu-Ir-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FY7VD4XG = $mol_type_enforce<
		`Nd-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EC4NC3X2 = $mol_type_enforce<
		`U-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WSL7WDGM = $mol_type_enforce<
		`Sm-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K749UP40 = $mol_type_enforce<
		`Mn-Ag-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5GMU9Y7Q = $mol_type_enforce<
		`Pm-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UHLRHL6T = $mol_type_enforce<
		`Er-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XAP6DYEE = $mol_type_enforce<
		`Nd-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RE05GO9M = $mol_type_enforce<
		`Sc-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TK5F3GIO = $mol_type_enforce<
		`Dy-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UM98R9F2 = $mol_type_enforce<
		`Eu-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CLWEQR0Q = $mol_type_enforce<
		`Y-Th-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U70AKTLE = $mol_type_enforce<
		`Eu-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WLQMDBRG = $mol_type_enforce<
		`Nd-Gd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TNMKCW8S = $mol_type_enforce<
		`Cs-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HDSLLPFP = $mol_type_enforce<
		`La-Nd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XJ6OFKZ4 = $mol_type_enforce<
		`Nd-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7WHLDPUL = $mol_type_enforce<
		`Zn-Si-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__11TDN1U4 = $mol_type_enforce<
		`Mg-Cd-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__45H6Q0G6 = $mol_type_enforce<
		`Re-Ag-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NOTCX9PO = $mol_type_enforce<
		`Sr-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4QC6WKJT = $mol_type_enforce<
		`Fe-Ag-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A8MOZKTT = $mol_type_enforce<
		`V-Cu-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1V8ECS7L = $mol_type_enforce<
		`Sm-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OIIF6CWJ = $mol_type_enforce<
		`Ce-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C02356F3 = $mol_type_enforce<
		`Na-Fe-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YF820R34 = $mol_type_enforce<
		`Li-Sm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QE3PM2O4 = $mol_type_enforce<
		`Yb-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OV7GQZQ4 = $mol_type_enforce<
		`La-Yb-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WEI8ATRV = $mol_type_enforce<
		`Li-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__10YSP62S = $mol_type_enforce<
		`Tm-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DSS4NTPD = $mol_type_enforce<
		`Ta-Cu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4E3U7D35 = $mol_type_enforce<
		`Tb-Pm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O5RWXYGX = $mol_type_enforce<
		`Ni-Ag-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZPXUR5DZ = $mol_type_enforce<
		`Pm-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SURO47R7 = $mol_type_enforce<
		`Pu-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__USI4IHOX = $mol_type_enforce<
		`Eu-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VK4QWQZU = $mol_type_enforce<
		`Th-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JT97Q8VG = $mol_type_enforce<
		`K-Rb-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9YA95C0X = $mol_type_enforce<
		`Sm-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MY0WPFRP = $mol_type_enforce<
		`Mg-Cd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3HE3AANC = $mol_type_enforce<
		`Tb-Pr-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6KOTHPVY = $mol_type_enforce<
		`Ce-Eu-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YEDYXSZV = $mol_type_enforce<
		`La-Nd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I2Q0NFI8 = $mol_type_enforce<
		`Ru-Pt-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UZF7Z5RD = $mol_type_enforce<
		`La-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R4R29N1L = $mol_type_enforce<
		`Pm-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QKQVFFO1 = $mol_type_enforce<
		`Yb-Th-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2DXYIE3J = $mol_type_enforce<
		`Ce-Pm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y9XHCFLQ = $mol_type_enforce<
		`Co-Ni-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__REZ9Q0I6 = $mol_type_enforce<
		`Si-Sn-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QCNI6IDS = $mol_type_enforce<
		`Er-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OG6ZRQYX = $mol_type_enforce<
		`Os-Pd-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DUMY5W8S = $mol_type_enforce<
		`Hf-Mg-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RVD393C5 = $mol_type_enforce<
		`Mo-W-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DO1JSCPM = $mol_type_enforce<
		`Sm-Gd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6UTDP2WY = $mol_type_enforce<
		`Ca-Tb-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y19TQSOT = $mol_type_enforce<
		`Ho-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2LR6LUX8 = $mol_type_enforce<
		`Fe-Co-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SW8WLF63 = $mol_type_enforce<
		`La-Sm-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1894US8W = $mol_type_enforce<
		`Be-Al-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XD04Q2II = $mol_type_enforce<
		`Er-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5ASSO5UH = $mol_type_enforce<
		`Sn-Bi-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EHVBYWZC = $mol_type_enforce<
		`Nd-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1889PJSL = $mol_type_enforce<
		`Eu-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CV7OXMAV = $mol_type_enforce<
		`La-Nd-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ST58Y6W9 = $mol_type_enforce<
		`Pm-Nd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XZYSSBPH = $mol_type_enforce<
		`Dy-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__30ZRJTKH = $mol_type_enforce<
		`Pm-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2JNU6E92 = $mol_type_enforce<
		`Tl-Zn-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F30U8K15 = $mol_type_enforce<
		`Y-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZACCZZTQ = $mol_type_enforce<
		`Ba-Pm-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CA8V76FJ = $mol_type_enforce<
		`Ce-Pr-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CIVY2DL8 = $mol_type_enforce<
		`V-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__43VODINP = $mol_type_enforce<
		`Ce-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4R3VLC14 = $mol_type_enforce<
		`Yb-Dy-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KHRWYNLW = $mol_type_enforce<
		`La-Er-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V5KAB22I = $mol_type_enforce<
		`Li-Mg-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TIMR7AV9 = $mol_type_enforce<
		`Y-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F62XI4T5 = $mol_type_enforce<
		`Sm-Y-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9IGT6SJX = $mol_type_enforce<
		`Ce-Eu-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R0AXTQ87 = $mol_type_enforce<
		`Ag-Ge-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JK5CVPZM = $mol_type_enforce<
		`Sm-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DB9PS21Z = $mol_type_enforce<
		`Na-Li-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UICM3M0X = $mol_type_enforce<
		`Tb-Yb-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7OW4OH3K = $mol_type_enforce<
		`Pr-Gd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XUXL67YZ = $mol_type_enforce<
		`Dy-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OVGUF8WB = $mol_type_enforce<
		`Er-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9V42VTL7 = $mol_type_enforce<
		`Na-Li-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6FAQV7OX = $mol_type_enforce<
		`Pm-Nd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6B4Q25K0 = $mol_type_enforce<
		`La-Ce-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U7Q3IYXW = $mol_type_enforce<
		`Dy-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1YI9NMQE = $mol_type_enforce<
		`Ca-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CC45HHMF = $mol_type_enforce<
		`Nd-Sm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QJULRUDV = $mol_type_enforce<
		`Yb-Nd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HDRTF84X = $mol_type_enforce<
		`Li-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3LDXAW0Q = $mol_type_enforce<
		`Ca-Ce-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LYSNBS1N = $mol_type_enforce<
		`Cs-Li-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZCLDOOPI = $mol_type_enforce<
		`Y-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z4YUYPC7 = $mol_type_enforce<
		`Sm-Dy-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5F0IHI3W = $mol_type_enforce<
		`Ho-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C80QWCBX = $mol_type_enforce<
		`Dy-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NLVL9B0L = $mol_type_enforce<
		`Pu-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7WC5S55P = $mol_type_enforce<
		`Ce-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RLJZS2EE = $mol_type_enforce<
		`Sm-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8K9ZKGJQ = $mol_type_enforce<
		`La-Sm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZCVT7O83 = $mol_type_enforce<
		`Yb-Nd-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ARAG0S0X = $mol_type_enforce<
		`Pr-Dy-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CMRCBK0O = $mol_type_enforce<
		`Ho-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GCZ8EHVV = $mol_type_enforce<
		`Lu-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YOX2CMP5 = $mol_type_enforce<
		`Yb-Nd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HLKM3ZPY = $mol_type_enforce<
		`Rb-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WLZ9BNLO = $mol_type_enforce<
		`Gd-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RJIRLRCY = $mol_type_enforce<
		`Ho-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0L18RSCD = $mol_type_enforce<
		`Tc-Pd-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B1SC5WR9 = $mol_type_enforce<
		`Ce-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4CM5ZU9I = $mol_type_enforce<
		`Cu-Pt-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3PLRR296 = $mol_type_enforce<
		`La-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UM0BERSH = $mol_type_enforce<
		`Sm-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6IMS5KZJ = $mol_type_enforce<
		`La-Gd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__97RIHPEK = $mol_type_enforce<
		`Al-Zn-Cd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4LBAPEYD = $mol_type_enforce<
		`Cs-Pr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V0NILB78 = $mol_type_enforce<
		`Pm-Pr-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__16I6IS3M = $mol_type_enforce<
		`Os-Pt-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R24G4BPZ = $mol_type_enforce<
		`Er-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SIIBC0UK = $mol_type_enforce<
		`Gd-Dy-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DIG5970K = $mol_type_enforce<
		`Tb-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WI7F6N2V = $mol_type_enforce<
		`Ce-Nd-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CPK906HR = $mol_type_enforce<
		`Be-Al-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M1QX2IHK = $mol_type_enforce<
		`Cu-Tc-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__82E52PP1 = $mol_type_enforce<
		`Nd-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O8TGFIKW = $mol_type_enforce<
		`Ca-La-Tb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y078XFK9 = $mol_type_enforce<
		`Be-Zn-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RMBIY2A1 = $mol_type_enforce<
		`Cu-Rh-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y1MLAGJ6 = $mol_type_enforce<
		`Lu-Pu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O34LMM3A = $mol_type_enforce<
		`Pr-Nd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z2CXCN27 = $mol_type_enforce<
		`Rb-Na-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8S4S6NTF = $mol_type_enforce<
		`Yb-Pr-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3PQJUZMT = $mol_type_enforce<
		`Ce-Pr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NQEIM5QX = $mol_type_enforce<
		`Hf-Mg-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GSGPBEF6 = $mol_type_enforce<
		`Tb-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__77IL4L4A = $mol_type_enforce<
		`Co-Ag-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K9JFJZ1Z = $mol_type_enforce<
		`Li-Tb-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DNGQQNDB = $mol_type_enforce<
		`Yb-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QTYY8Z61 = $mol_type_enforce<
		`Yb-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C1ZGVK5T = $mol_type_enforce<
		`Yb-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6TF23TED = $mol_type_enforce<
		`Sc-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2JKX5RUF = $mol_type_enforce<
		`La-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y47JGZLD = $mol_type_enforce<
		`Ca-Ce-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R23NWBPM = $mol_type_enforce<
		`Ce-Ho-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MM7R9XSM = $mol_type_enforce<
		`La-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E2QVXH5P = $mol_type_enforce<
		`Pu-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DJSPYFLX = $mol_type_enforce<
		`Yb-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M9U56SPF = $mol_type_enforce<
		`Er-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__06U9LK2D = $mol_type_enforce<
		`U-Cr-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0D341VG1 = $mol_type_enforce<
		`Dy-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JZMX0V92 = $mol_type_enforce<
		`Si-Ag-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WYGHYKFJ = $mol_type_enforce<
		`Tb-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N3M4CEOS = $mol_type_enforce<
		`Pr-Gd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XZJN8ONB = $mol_type_enforce<
		`Ce-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z9L9J7MN = $mol_type_enforce<
		`Tl-Cu-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__21EWPS6G = $mol_type_enforce<
		`Ho-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0UE00CFO = $mol_type_enforce<
		`Li-Mg-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OQ0EVVYH = $mol_type_enforce<
		`Y-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9NAHFIEP = $mol_type_enforce<
		`Sc-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L76I9EE0 = $mol_type_enforce<
		`Cu-Bi-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RWUZUL29 = $mol_type_enforce<
		`Tl-Zn-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__10VFYU35 = $mol_type_enforce<
		`Nd-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L72NOAWF = $mol_type_enforce<
		`Ni-Pt-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KRT0AGRN = $mol_type_enforce<
		`Sm-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IKKF5XCB = $mol_type_enforce<
		`Li-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OCCPXPNJ = $mol_type_enforce<
		`Yb-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MY10C467 = $mol_type_enforce<
		`Ce-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P37S04SE = $mol_type_enforce<
		`Pr-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H84TJU9M = $mol_type_enforce<
		`Ir-Os-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JVUDTNL2 = $mol_type_enforce<
		`Er-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D1V6CMI1 = $mol_type_enforce<
		`Tb-Sm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I5HC2PVK = $mol_type_enforce<
		`Dy-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9BQTHQGO = $mol_type_enforce<
		`Nb-Tl-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6P5VASQ9 = $mol_type_enforce<
		`La-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NQTFV5NP = $mol_type_enforce<
		`Ag-Pd-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JTVKPAK4 = $mol_type_enforce<
		`Hf-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S1MIZ4KS = $mol_type_enforce<
		`Re-Os-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__664YKXEN = $mol_type_enforce<
		`La-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SD2MCYU6 = $mol_type_enforce<
		`Pm-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X55HO7V8 = $mol_type_enforce<
		`Y-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TKY1G5QJ = $mol_type_enforce<
		`Pr-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2I9J69HF = $mol_type_enforce<
		`Na-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__36UE1CLR = $mol_type_enforce<
		`Tl-V-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LOUTN5YC = $mol_type_enforce<
		`Gd-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MEJA2276 = $mol_type_enforce<
		`Li-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XC59VBC6 = $mol_type_enforce<
		`Pr-Sm-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G24O2HBP = $mol_type_enforce<
		`Ce-Gd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3IACWK73 = $mol_type_enforce<
		`Mn-Fe-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LFYPLAQF = $mol_type_enforce<
		`Y-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DMD4CRZA = $mol_type_enforce<
		`Ba-Eu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5VQ5NEWI = $mol_type_enforce<
		`Ce-Ho-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I2INU6T1 = $mol_type_enforce<
		`Gd-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TA9ZYO0N = $mol_type_enforce<
		`Ce-Y-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RT8PGL8R = $mol_type_enforce<
		`Mn-Ni-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TGITCLJH = $mol_type_enforce<
		`Tb-Pr-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2051VBW9 = $mol_type_enforce<
		`Nd-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XBIVF32I = $mol_type_enforce<
		`Nb-Cu-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__53B23ML2 = $mol_type_enforce<
		`Li-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3N460OMV = $mol_type_enforce<
		`Li-Sm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZEYBE1HY = $mol_type_enforce<
		`Al-Ge-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I8JUKSGU = $mol_type_enforce<
		`Tb-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SB5XVROX = $mol_type_enforce<
		`Tb-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__56MYP575 = $mol_type_enforce<
		`Nd-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CBI8MQMW = $mol_type_enforce<
		`Sr-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K2B17PPO = $mol_type_enforce<
		`Er-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J8DGIYFF = $mol_type_enforce<
		`Mg-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GT0QNXIY = $mol_type_enforce<
		`Dy-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CIE52ZJS = $mol_type_enforce<
		`Gd-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LSB4L70Q = $mol_type_enforce<
		`Na-Li-Be`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M9LCDSME = $mol_type_enforce<
		`Sm-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G32ZYE4U = $mol_type_enforce<
		`La-Pr-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QQSHEISO = $mol_type_enforce<
		`Ce-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FCHIB771 = $mol_type_enforce<
		`Ce-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C709M3UV = $mol_type_enforce<
		`Er-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VZQH3CQX = $mol_type_enforce<
		`Lu-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FA1QLA6I = $mol_type_enforce<
		`Fe-Ir-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GPVA5WN0 = $mol_type_enforce<
		`Li-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B2Q6P3JV = $mol_type_enforce<
		`Pm-Pr-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KF449PIW = $mol_type_enforce<
		`Th-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MTQENDM2 = $mol_type_enforce<
		`Tl-In-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C7OPDQ8Z = $mol_type_enforce<
		`Tm-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z350DK27 = $mol_type_enforce<
		`Tc-Ni-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XISN23KC = $mol_type_enforce<
		`La-Yb-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R9913825 = $mol_type_enforce<
		`Li-Pr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JC52AQQK = $mol_type_enforce<
		`Sr-Nd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__54Q13KWT = $mol_type_enforce<
		`Ce-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H31HZMVT = $mol_type_enforce<
		`La-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X2E86D2V = $mol_type_enforce<
		`Li-Ce-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TUGLMIFP = $mol_type_enforce<
		`Ba-La-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AH1KMKU1 = $mol_type_enforce<
		`La-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SRN83H7Q = $mol_type_enforce<
		`Ce-Pr-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S2IVRHI3 = $mol_type_enforce<
		`Cs-K-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E620NFEC = $mol_type_enforce<
		`Sm-Gd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2LRP05F7 = $mol_type_enforce<
		`Li-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VM78GHYX = $mol_type_enforce<
		`La-Yb-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZRJR97TZ = $mol_type_enforce<
		`La-Dy-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CJRQ7YYT = $mol_type_enforce<
		`Y-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FCC0BIIL = $mol_type_enforce<
		`Th-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GZKZ87ER = $mol_type_enforce<
		`Ho-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3BU8KPP9 = $mol_type_enforce<
		`Ce-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__45J62D1N = $mol_type_enforce<
		`Tb-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U5U1YU8Y = $mol_type_enforce<
		`La-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8TR1GGSE = $mol_type_enforce<
		`La-Pr-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__98YH8554 = $mol_type_enforce<
		`Cs-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H85RB5EI = $mol_type_enforce<
		`Bi-Sb-P`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U999DSAR = $mol_type_enforce<
		`Mn-Cu-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BYQHM2KG = $mol_type_enforce<
		`Mg-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__08M313FJ = $mol_type_enforce<
		`Er-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U5ARGDO1 = $mol_type_enforce<
		`Th-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H4QK8LXY = $mol_type_enforce<
		`Cr-Cu-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PRZQOY3E = $mol_type_enforce<
		`Er-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CCAXDCOR = $mol_type_enforce<
		`Tb-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AFXQ91GB = $mol_type_enforce<
		`Li-La-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1HVIYWUO = $mol_type_enforce<
		`Ce-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WFTZZGLW = $mol_type_enforce<
		`Tc-Ni-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YX1QVNMU = $mol_type_enforce<
		`Pr-Ho-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8617TR2S = $mol_type_enforce<
		`Li-Cr-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H43AAZ6S = $mol_type_enforce<
		`La-Sm-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DYQY3VCN = $mol_type_enforce<
		`Fe-Cu-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ELW37HOH = $mol_type_enforce<
		`Co-Cu-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9FMCHM62 = $mol_type_enforce<
		`Nb-Tl-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7O4XUOAT = $mol_type_enforce<
		`Co-Pt-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MOTOXX53 = $mol_type_enforce<
		`Ce-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__47J8ERA0 = $mol_type_enforce<
		`Re-Ir-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YZEL5TQY = $mol_type_enforce<
		`Lu-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NK7WIO6C = $mol_type_enforce<
		`Eu-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JPLHEI4U = $mol_type_enforce<
		`Ce-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W64E7ZO0 = $mol_type_enforce<
		`Ir-Pd-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JLU6BKO9 = $mol_type_enforce<
		`Hg-Ir-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AICW333X = $mol_type_enforce<
		`Y-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RDX5R20P = $mol_type_enforce<
		`La-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4MCYI6HH = $mol_type_enforce<
		`Tl-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QDJY9DRX = $mol_type_enforce<
		`Co-Cu-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EDDA91C3 = $mol_type_enforce<
		`Pm-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QB04JILK = $mol_type_enforce<
		`Ce-Pr-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6ECO3LN7 = $mol_type_enforce<
		`Tb-Pr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PWW29P00 = $mol_type_enforce<
		`Yb-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__43T2RF5A = $mol_type_enforce<
		`Pm-Dy-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DQF4V1D7 = $mol_type_enforce<
		`Co-Ru-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G9C07KKW = $mol_type_enforce<
		`Tb-Yb-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EWBZO4B9 = $mol_type_enforce<
		`Gd-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XT2C01C4 = $mol_type_enforce<
		`Dy-Ho-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PCSJ39C9 = $mol_type_enforce<
		`La-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EM0C3ZI6 = $mol_type_enforce<
		`La-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6M310F6N = $mol_type_enforce<
		`U-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HTUW2BKN = $mol_type_enforce<
		`La-Pm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7CJ2Y7RE = $mol_type_enforce<
		`Cs-K-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RB5FEMGT = $mol_type_enforce<
		`Tb-Nd-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ON6D2X9V = $mol_type_enforce<
		`Nd-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V9KXMUEM = $mol_type_enforce<
		`Li-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KLPQRI8O = $mol_type_enforce<
		`Sm-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5YMH03BH = $mol_type_enforce<
		`La-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NZYRHWOR = $mol_type_enforce<
		`Gd-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8B7CAUXE = $mol_type_enforce<
		`Ce-Nd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BQCMBAZS = $mol_type_enforce<
		`Tb-Yb-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CSKXHFRX = $mol_type_enforce<
		`Ce-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BMAVWYTX = $mol_type_enforce<
		`Pr-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GEMHFHO3 = $mol_type_enforce<
		`La-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZAT3Y6TS = $mol_type_enforce<
		`Dy-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7MIYTU0O = $mol_type_enforce<
		`Li-Pr-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VB93R3PV = $mol_type_enforce<
		`Ce-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TEDJPC16 = $mol_type_enforce<
		`Dy-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z4WJXT15 = $mol_type_enforce<
		`Er-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VUHY0ZX8 = $mol_type_enforce<
		`La-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L2GOKU3Z = $mol_type_enforce<
		`Ca-Ce-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UB7UL80L = $mol_type_enforce<
		`Eu-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YASZADQ9 = $mol_type_enforce<
		`La-Sc-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FKP7ULT0 = $mol_type_enforce<
		`Li-Ce-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FUTTDQOH = $mol_type_enforce<
		`La-Dy-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8FZ35KUZ = $mol_type_enforce<
		`Lu-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M91KVFWY = $mol_type_enforce<
		`Gd-Y-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EL7L3S21 = $mol_type_enforce<
		`Li-Ce-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G5V1M49B = $mol_type_enforce<
		`Cr-Cd-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5LV6POAH = $mol_type_enforce<
		`La-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JEHVL1W7 = $mol_type_enforce<
		`Rb-Mg-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9J0P6QHV = $mol_type_enforce<
		`Tb-Gd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PWL4H73F = $mol_type_enforce<
		`Eu-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TIZ20FAW = $mol_type_enforce<
		`Co-Ag-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__06YSV5C8 = $mol_type_enforce<
		`La-Tb-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8F79DRP5 = $mol_type_enforce<
		`Rb-Mg-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZQMH8YSJ = $mol_type_enforce<
		`Cu-Ir-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NUZNAMEP = $mol_type_enforce<
		`Rb-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HWG11ACI = $mol_type_enforce<
		`Gd-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CVMOM0W5 = $mol_type_enforce<
		`Er-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CNVAUTZ2 = $mol_type_enforce<
		`V-Cu-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H5BQUV7R = $mol_type_enforce<
		`Dy-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6VRL6JUQ = $mol_type_enforce<
		`Sc-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A4CYENBJ = $mol_type_enforce<
		`Tb-Gd-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3FGXKF13 = $mol_type_enforce<
		`Li-Tb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HHW35OXX = $mol_type_enforce<
		`Er-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IX78WP42 = $mol_type_enforce<
		`V-Cr-Hg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FIYWKSRX = $mol_type_enforce<
		`La-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R5I1H27Z = $mol_type_enforce<
		`Ta-Cu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1C99GWHW = $mol_type_enforce<
		`Ta-Nb-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XN7KOWKG = $mol_type_enforce<
		`Nd-Sm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S5FS0AK9 = $mol_type_enforce<
		`V-Fe-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QELVUPG1 = $mol_type_enforce<
		`Yb-Eu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BLXFIVFP = $mol_type_enforce<
		`La-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4ASH97ZP = $mol_type_enforce<
		`Pd-Au-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__49K9BXEQ = $mol_type_enforce<
		`Sc-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HEST3VQV = $mol_type_enforce<
		`Mn-Co-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VRS3LLLC = $mol_type_enforce<
		`Yb-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AMQSTYOE = $mol_type_enforce<
		`Sm-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5BGZLBFB = $mol_type_enforce<
		`Ce-Pr-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__57VUAM8P = $mol_type_enforce<
		`Ag-Ir-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__16I9XW3X = $mol_type_enforce<
		`Nd-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0HNO1O22 = $mol_type_enforce<
		`Li-Y-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DQI8X1VV = $mol_type_enforce<
		`La-Ce-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W8M40B7U = $mol_type_enforce<
		`Al-Si-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__39H4U05B = $mol_type_enforce<
		`La-Eu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KCYUVLGQ = $mol_type_enforce<
		`In-Si-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M9W5DBA7 = $mol_type_enforce<
		`V-Cr-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__74HG5OKP = $mol_type_enforce<
		`Al-Sn-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__15KQI27Y = $mol_type_enforce<
		`Ba-Mn-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D0Q6TY9W = $mol_type_enforce<
		`Th-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__01AK5N88 = $mol_type_enforce<
		`Cs-Li-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3KC5G5UT = $mol_type_enforce<
		`Ca-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JAZ16AH3 = $mol_type_enforce<
		`Al-Si-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BUP42HWG = $mol_type_enforce<
		`Li-Mg-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HCMH5SW3 = $mol_type_enforce<
		`Yb-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YYZ2G2RZ = $mol_type_enforce<
		`Mn-Tl-Cd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BFCA17BL = $mol_type_enforce<
		`Fe-Ir-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NB4YSUHP = $mol_type_enforce<
		`Tb-Nd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KVY9TOR3 = $mol_type_enforce<
		`Nd-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y1VO97TO = $mol_type_enforce<
		`Ba-Sr-Ca`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__22HBJW29 = $mol_type_enforce<
		`La-Eu-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WF623Q1R = $mol_type_enforce<
		`Sm-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DVMXN3XS = $mol_type_enforce<
		`Y-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__06YNVR3C = $mol_type_enforce<
		`Tc-Ir-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2FNJM64E = $mol_type_enforce<
		`Cs-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MYR7TZL9 = $mol_type_enforce<
		`Gd-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NJ2NT40K = $mol_type_enforce<
		`Dy-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TH6SXQ7P = $mol_type_enforce<
		`La-Pm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TSDG1PXK = $mol_type_enforce<
		`Yb-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VPCA3WBR = $mol_type_enforce<
		`Ce-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I371DFDJ = $mol_type_enforce<
		`Ir-Os-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8O021HQZ = $mol_type_enforce<
		`Ce-Sm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__20JXLDP5 = $mol_type_enforce<
		`Tb-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4A0NKGMD = $mol_type_enforce<
		`Pm-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__COHGPQTB = $mol_type_enforce<
		`Pr-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SU19FKMI = $mol_type_enforce<
		`Tb-Ce-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0783VMTS = $mol_type_enforce<
		`Hg-Bi-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RM5JE0DL = $mol_type_enforce<
		`Tb-Ce-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JXYEWVXG = $mol_type_enforce<
		`Pr-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UEMLRG1X = $mol_type_enforce<
		`Cu-Ni-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__94OE951P = $mol_type_enforce<
		`Fe-Co-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z9YL7PUI = $mol_type_enforce<
		`Pr-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A6DEIXYO = $mol_type_enforce<
		`Zn-Sn-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LGTG2ZEX = $mol_type_enforce<
		`Yb-Eu-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VUBD8PFB = $mol_type_enforce<
		`Cd-Fe-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__72L772LS = $mol_type_enforce<
		`La-Gd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NRJGGN1R = $mol_type_enforce<
		`Ga-Bi-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U07ZNIWB = $mol_type_enforce<
		`Sm-Gd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LNC0JWD3 = $mol_type_enforce<
		`Co-Pt-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UQLZHC18 = $mol_type_enforce<
		`Ce-Er-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TM73EKCE = $mol_type_enforce<
		`Tb-Ce-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4EYRS72T = $mol_type_enforce<
		`Sr-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q3NG07JK = $mol_type_enforce<
		`Cr-Fe-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9MOJXJSS = $mol_type_enforce<
		`Yb-Hf-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XVQD4LD9 = $mol_type_enforce<
		`Eu-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H03LOM7I = $mol_type_enforce<
		`Zn-Ge-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K5A3KH73 = $mol_type_enforce<
		`Ca-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P92M9QVQ = $mol_type_enforce<
		`Nd-Sm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X2US2PII = $mol_type_enforce<
		`Ce-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N7IQAV8Q = $mol_type_enforce<
		`Na-Ca-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O7UIDPL4 = $mol_type_enforce<
		`Tl-Cd-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XKGGM7VG = $mol_type_enforce<
		`Nd-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E9RDT5GL = $mol_type_enforce<
		`Li-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KDQ2BR1K = $mol_type_enforce<
		`Pr-Dy-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RBLRT1HF = $mol_type_enforce<
		`Pr-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QO1UBJRE = $mol_type_enforce<
		`Co-Cu-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BA43V65L = $mol_type_enforce<
		`Tb-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9VGJX43F = $mol_type_enforce<
		`Li-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GUNTNFXK = $mol_type_enforce<
		`Pm-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8QAC0J5F = $mol_type_enforce<
		`La-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I7QU2TBN = $mol_type_enforce<
		`Pr-Sm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IT7OJPPC = $mol_type_enforce<
		`Pr-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JVB9I0A3 = $mol_type_enforce<
		`Yb-Gd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DCBH5VFY = $mol_type_enforce<
		`Gd-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PLB8L67X = $mol_type_enforce<
		`Ho-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SDFG2UJN = $mol_type_enforce<
		`Yb-Dy-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ANYUP88E = $mol_type_enforce<
		`Li-Mg-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G8AQ9UOQ = $mol_type_enforce<
		`Yb-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DF2WTB6E = $mol_type_enforce<
		`Lu-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A52Z4OCR = $mol_type_enforce<
		`Ca-Nd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GN6BWP4A = $mol_type_enforce<
		`Tb-Ce-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HRSH1TP5 = $mol_type_enforce<
		`Dy-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DVJYW9Y9 = $mol_type_enforce<
		`Sr-Ca-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__320B0CVM = $mol_type_enforce<
		`Tb-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SG0IKU1K = $mol_type_enforce<
		`Pr-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__14SHZTKM = $mol_type_enforce<
		`Yb-Pr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8GBYNE7H = $mol_type_enforce<
		`Cd-Ga-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7ROE7QXG = $mol_type_enforce<
		`Tb-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OGNUMB6X = $mol_type_enforce<
		`La-Ce-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LNW8ZVG0 = $mol_type_enforce<
		`Sm-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2H3NVETL = $mol_type_enforce<
		`Li-Sm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__94CG402H = $mol_type_enforce<
		`Ba-Yb-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y4QVTLI1 = $mol_type_enforce<
		`Gd-Ho-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EKFUCTK9 = $mol_type_enforce<
		`Eu-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7EOVB7WV = $mol_type_enforce<
		`La-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GH3BWHWY = $mol_type_enforce<
		`Pm-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__16SR7UIY = $mol_type_enforce<
		`Ce-Pr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8Q5SO584 = $mol_type_enforce<
		`U-V-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__51INY43S = $mol_type_enforce<
		`Cs-Li-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WMEVVA7E = $mol_type_enforce<
		`Yb-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A5UF9XJM = $mol_type_enforce<
		`La-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WND7X8XZ = $mol_type_enforce<
		`Tb-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4II5FQTG = $mol_type_enforce<
		`Eu-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q1W2TWIF = $mol_type_enforce<
		`Cs-Rb-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4AT7SQY4 = $mol_type_enforce<
		`Pm-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YJL9206K = $mol_type_enforce<
		`Sr-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D3CCBFIM = $mol_type_enforce<
		`Cu-Ru-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L985LPK4 = $mol_type_enforce<
		`La-Sm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YUSZFKO3 = $mol_type_enforce<
		`La-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RH31I0Y7 = $mol_type_enforce<
		`Pr-Gd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C8J2T9I9 = $mol_type_enforce<
		`Er-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R4NCGLH0 = $mol_type_enforce<
		`Ho-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6ZQ1VQJO = $mol_type_enforce<
		`Yb-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K4OKZKV1 = $mol_type_enforce<
		`Y-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T2K0GUOK = $mol_type_enforce<
		`Cr-Ag-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RSS3673O = $mol_type_enforce<
		`Sm-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__13S7D1Y9 = $mol_type_enforce<
		`Li-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1A0PFDI0 = $mol_type_enforce<
		`Gd-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7SPP67MD = $mol_type_enforce<
		`Sc-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AL2CI6X3 = $mol_type_enforce<
		`Rb-Mg-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UXCW5P84 = $mol_type_enforce<
		`Th-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JV64T3GO = $mol_type_enforce<
		`K-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J4JRN8VS = $mol_type_enforce<
		`Ho-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VLCG2IYV = $mol_type_enforce<
		`Ba-Nd-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9D9MTRAW = $mol_type_enforce<
		`Rb-Na-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LBL71QHZ = $mol_type_enforce<
		`Ce-Sm-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4M9AM6TU = $mol_type_enforce<
		`Pr-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RMTINAJB = $mol_type_enforce<
		`Ba-Pr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__760PBLIZ = $mol_type_enforce<
		`Li-Nd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A12CX1VT = $mol_type_enforce<
		`Re-Os-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2N7SV0UR = $mol_type_enforce<
		`Eu-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A512EATI = $mol_type_enforce<
		`Nd-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F28GFT1H = $mol_type_enforce<
		`Cs-Rb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4I4GZF6I = $mol_type_enforce<
		`Tb-Pm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__98SE96MG = $mol_type_enforce<
		`Cs-K-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__79V5U99L = $mol_type_enforce<
		`Na-Sr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FHV32EQ8 = $mol_type_enforce<
		`La-Ce-Eu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8YZIE85U = $mol_type_enforce<
		`La-Gd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K795ME5H = $mol_type_enforce<
		`Tb-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S99PNZML = $mol_type_enforce<
		`Th-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J5J19KG7 = $mol_type_enforce<
		`Li-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1IFZ8MZH = $mol_type_enforce<
		`Lu-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BAMQJS6O = $mol_type_enforce<
		`Tb-Nd-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TGZWLJSO = $mol_type_enforce<
		`Nb-Bi-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z6PNAB2Y = $mol_type_enforce<
		`Cd-Si-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TOKBQU7R = $mol_type_enforce<
		`Sm-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A1RQANQ9 = $mol_type_enforce<
		`Be-In-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U743BF14 = $mol_type_enforce<
		`Sr-Ca-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CQO80I41 = $mol_type_enforce<
		`Pd-Pt-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GVG4IQRH = $mol_type_enforce<
		`Pm-Pr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IE1R2M0Q = $mol_type_enforce<
		`La-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FLQY1MW4 = $mol_type_enforce<
		`Ce-Gd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z3BJG59W = $mol_type_enforce<
		`La-Ce-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FM5BP9E1 = $mol_type_enforce<
		`La-Th-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FG0EQF7P = $mol_type_enforce<
		`K-Li-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R45C7R1V = $mol_type_enforce<
		`Ho-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CL1273D4 = $mol_type_enforce<
		`Nd-Gd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CU59A8EU = $mol_type_enforce<
		`Ce-Sm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8UTCPWML = $mol_type_enforce<
		`Nd-Dy-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T7X7CMGE = $mol_type_enforce<
		`Tb-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FCG1NB6E = $mol_type_enforce<
		`Er-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TLG3A5KM = $mol_type_enforce<
		`Sm-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8RU25Z25 = $mol_type_enforce<
		`Pm-Sm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FKIP11P7 = $mol_type_enforce<
		`Sc-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__28Q2GYJH = $mol_type_enforce<
		`Cs-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JN9N0LZA = $mol_type_enforce<
		`Yb-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TRSMQQ3U = $mol_type_enforce<
		`Pr-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LGMHIN48 = $mol_type_enforce<
		`Zn-Ga-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0BEGQ1VS = $mol_type_enforce<
		`Yb-Nd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B636IE5F = $mol_type_enforce<
		`Er-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T6I6USQD = $mol_type_enforce<
		`Pm-Sm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QI0G5K6Y = $mol_type_enforce<
		`Mn-Cd-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VXUK2VGA = $mol_type_enforce<
		`Ba-La-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LY4FWC84 = $mol_type_enforce<
		`La-Tb-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PR6IUD2C = $mol_type_enforce<
		`Yb-Nd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QBU3SI28 = $mol_type_enforce<
		`Pr-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__31JK54XA = $mol_type_enforce<
		`Er-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__REJ3Q2WF = $mol_type_enforce<
		`Co-Re-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AP0SIOO1 = $mol_type_enforce<
		`Co-Ni-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5COIKUNU = $mol_type_enforce<
		`La-Ce-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FT6CEGM5 = $mol_type_enforce<
		`Sm-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RM8PMJ31 = $mol_type_enforce<
		`Pm-Sm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3IE331Z2 = $mol_type_enforce<
		`Yb-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H4IZ4H62 = $mol_type_enforce<
		`Hf-Mg-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A5B5M69D = $mol_type_enforce<
		`Pr-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__21F3624R = $mol_type_enforce<
		`Pm-Pr-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BAQX67W3 = $mol_type_enforce<
		`Pm-Sm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WPJ569IP = $mol_type_enforce<
		`K-Mg-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7FVVOOBO = $mol_type_enforce<
		`V-In-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9XI3HQRP = $mol_type_enforce<
		`Yb-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3WHG8E4R = $mol_type_enforce<
		`Li-Tb-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__28030803 = $mol_type_enforce<
		`Y-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LCRQMX7Z = $mol_type_enforce<
		`Th-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9HMCQ82D = $mol_type_enforce<
		`Ba-Eu-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VVLDIGCP = $mol_type_enforce<
		`Ce-Sm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZQAVHYTH = $mol_type_enforce<
		`Pr-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GM5CM3WD = $mol_type_enforce<
		`Ba-Ca-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FYXZLUXU = $mol_type_enforce<
		`Ge-Bi-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V2YDDMXT = $mol_type_enforce<
		`Ce-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K8A2RWF6 = $mol_type_enforce<
		`Rb-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7FBIMN0N = $mol_type_enforce<
		`Yb-Pr-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A3L8GTDU = $mol_type_enforce<
		`Si-Ge-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P0BYE5JS = $mol_type_enforce<
		`Li-Er-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MPFQXU3L = $mol_type_enforce<
		`Ba-La-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R3USLJI1 = $mol_type_enforce<
		`Er-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4QZR720S = $mol_type_enforce<
		`Ce-Pr-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z3GAUDWG = $mol_type_enforce<
		`Y-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SNXPMJCE = $mol_type_enforce<
		`Na-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__611FVF51 = $mol_type_enforce<
		`Yb-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CSJ3X1FY = $mol_type_enforce<
		`Tb-Pm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XYA3JJYI = $mol_type_enforce<
		`Sm-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K1V576VJ = $mol_type_enforce<
		`Pr-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MLKAZFEZ = $mol_type_enforce<
		`Ba-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0O5JXUW8 = $mol_type_enforce<
		`Ag-Bi-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__677VE3JP = $mol_type_enforce<
		`Nb-Cu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AJPLWV28 = $mol_type_enforce<
		`Tb-Ho-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9H4WH62K = $mol_type_enforce<
		`Pm-Sm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R9OHPGVJ = $mol_type_enforce<
		`Zn-Ge-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PHVQ4X5N = $mol_type_enforce<
		`Tb-Pr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CP9LFPA4 = $mol_type_enforce<
		`Ca-Ce-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SPRJWTJ3 = $mol_type_enforce<
		`Tm-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KGPXW3HT = $mol_type_enforce<
		`Tc-Ni-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K1MADGNO = $mol_type_enforce<
		`Eu-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UI2USA7L = $mol_type_enforce<
		`La-Tb-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SVZB39BV = $mol_type_enforce<
		`Yb-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2D8Y0IIZ = $mol_type_enforce<
		`Yb-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R8IOOA3Q = $mol_type_enforce<
		`Ce-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JN6XE6V8 = $mol_type_enforce<
		`Tb-Nd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OFAQH53S = $mol_type_enforce<
		`Cu-Ir-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4WDO816Z = $mol_type_enforce<
		`Ba-La-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KCIQ64VU = $mol_type_enforce<
		`La-Gd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4BY7AHUA = $mol_type_enforce<
		`Ga-Sn-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9PZO5EZL = $mol_type_enforce<
		`Tb-Ho-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V5VFZ96V = $mol_type_enforce<
		`Er-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O95J5KIV = $mol_type_enforce<
		`Pr-Y-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T4PLOH73 = $mol_type_enforce<
		`Dy-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XQBMPXIW = $mol_type_enforce<
		`Lu-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JEMOC9L3 = $mol_type_enforce<
		`Pr-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OWLAC7M9 = $mol_type_enforce<
		`La-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SYXWHLSD = $mol_type_enforce<
		`Tb-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5ZM61DXY = $mol_type_enforce<
		`Lu-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FKPUQ4J8 = $mol_type_enforce<
		`Cs-Rb-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J2K94CTG = $mol_type_enforce<
		`Fe-Co-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__18A9WR0O = $mol_type_enforce<
		`K-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XHW4K9NZ = $mol_type_enforce<
		`Tb-Yb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3O4VCCUG = $mol_type_enforce<
		`Fe-Au-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WYVBPEC2 = $mol_type_enforce<
		`Dy-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QME9DI76 = $mol_type_enforce<
		`Y-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LLH57XW3 = $mol_type_enforce<
		`Tb-Pr-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1T9Y1PMI = $mol_type_enforce<
		`Sc-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HMN89DGG = $mol_type_enforce<
		`Gd-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q1OIZPPC = $mol_type_enforce<
		`Li-Y-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B3DY3QZ0 = $mol_type_enforce<
		`Mn-V-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__APRP1BOI = $mol_type_enforce<
		`Yb-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UW6VW39N = $mol_type_enforce<
		`Sm-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UBPR1HMY = $mol_type_enforce<
		`La-Nd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O8WXAF1V = $mol_type_enforce<
		`Ga-Si-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__667NVL8E = $mol_type_enforce<
		`Ba-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DG5E9IU1 = $mol_type_enforce<
		`Nd-Y-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XTKYOF5R = $mol_type_enforce<
		`Gd-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3ETIH0BK = $mol_type_enforce<
		`Eu-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8F4SGO9D = $mol_type_enforce<
		`Er-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GL8995XT = $mol_type_enforce<
		`Be-Ga-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2MMW05HP = $mol_type_enforce<
		`K-Li-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0C7ZCDMB = $mol_type_enforce<
		`Tl-V-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BV65274A = $mol_type_enforce<
		`Co-Os-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KZOWYW2P = $mol_type_enforce<
		`V-Hg-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3HTDVNUQ = $mol_type_enforce<
		`Fe-Co-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6XXIVN8U = $mol_type_enforce<
		`La-Tb-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M1D71083 = $mol_type_enforce<
		`Pr-Dy-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QC4RXHFH = $mol_type_enforce<
		`Ta-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6ME39QIH = $mol_type_enforce<
		`Li-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZGXCLN1U = $mol_type_enforce<
		`Zn-In-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KEPSENYE = $mol_type_enforce<
		`Tb-Ce-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8X9HNXAE = $mol_type_enforce<
		`Ca-Yb-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BGGTIINX = $mol_type_enforce<
		`La-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MDMFL9H3 = $mol_type_enforce<
		`Yb-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MDPLLEFA = $mol_type_enforce<
		`La-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VNWF78J6 = $mol_type_enforce<
		`Li-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1TX01INW = $mol_type_enforce<
		`Yb-Pr-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4NWM6YC5 = $mol_type_enforce<
		`Li-Pr-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LFC8FHOZ = $mol_type_enforce<
		`Ho-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NP45FQ7N = $mol_type_enforce<
		`Pr-Sm-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5FD8E3QL = $mol_type_enforce<
		`Tb-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2QOUDPXT = $mol_type_enforce<
		`Yb-Eu-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B9IAF78X = $mol_type_enforce<
		`Nd-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N0EX9A6M = $mol_type_enforce<
		`Ga-Hg-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z2518QSZ = $mol_type_enforce<
		`Pm-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IG0ULBM5 = $mol_type_enforce<
		`Ba-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HWG10A97 = $mol_type_enforce<
		`Ni-Ru-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X4LOH93U = $mol_type_enforce<
		`Y-Er-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TSFAG64Q = $mol_type_enforce<
		`Ca-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HAUXI4L0 = $mol_type_enforce<
		`Al-Zn-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__820PUDZJ = $mol_type_enforce<
		`Th-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XO8UB4NL = $mol_type_enforce<
		`Fe-Ni-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SYFLDJ5O = $mol_type_enforce<
		`Tb-Sm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y7PPLFSZ = $mol_type_enforce<
		`Li-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9YAX8IAJ = $mol_type_enforce<
		`Pm-Dy-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__50S2D907 = $mol_type_enforce<
		`Fe-Co-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EORKQ09C = $mol_type_enforce<
		`Gd-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DC5M2NYP = $mol_type_enforce<
		`Dy-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q82DH7IV = $mol_type_enforce<
		`La-Ce-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DT3OQF2N = $mol_type_enforce<
		`Yb-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6LH3ILFR = $mol_type_enforce<
		`Tb-Ho-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KYNSH98T = $mol_type_enforce<
		`Tb-Y-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8J3ZF1UE = $mol_type_enforce<
		`Tc-Ir-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KA8AUDGY = $mol_type_enforce<
		`Ce-Nd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IQWPKD6J = $mol_type_enforce<
		`Yb-Y-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CCHE5YR0 = $mol_type_enforce<
		`Na-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9YFZGOXZ = $mol_type_enforce<
		`Nd-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EV95W2UR = $mol_type_enforce<
		`Ho-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JB9I7T8H = $mol_type_enforce<
		`Ba-Ca-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZJPCEGLR = $mol_type_enforce<
		`Fe-Os-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M7EG37LZ = $mol_type_enforce<
		`Pm-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PNERXYQE = $mol_type_enforce<
		`Gd-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z4XOYGDB = $mol_type_enforce<
		`Tb-Dy-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KXTTGOTC = $mol_type_enforce<
		`La-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H0SKR503 = $mol_type_enforce<
		`Sr-Mn-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SXW6E2L5 = $mol_type_enforce<
		`La-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E469RX9V = $mol_type_enforce<
		`Dy-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9WUASJO1 = $mol_type_enforce<
		`Tl-Zn-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O2BB0TOF = $mol_type_enforce<
		`Nb-Tl-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O8GYRLZT = $mol_type_enforce<
		`Pu-Np-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__34GX7PTN = $mol_type_enforce<
		`Ir-Pt-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NE0A0B6H = $mol_type_enforce<
		`Yb-Dy-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__90IXYGC7 = $mol_type_enforce<
		`Li-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LXWVXN64 = $mol_type_enforce<
		`Pr-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PN4HFUSW = $mol_type_enforce<
		`Nd-Dy-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HI39ADVC = $mol_type_enforce<
		`Ce-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YUDJELJG = $mol_type_enforce<
		`Be-Al-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O014SZKP = $mol_type_enforce<
		`Dy-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SNPFSJ5E = $mol_type_enforce<
		`Al-Cd-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZKN3VGB0 = $mol_type_enforce<
		`La-Er-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CZDFNMY5 = $mol_type_enforce<
		`Tb-Nd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XMDMPGDK = $mol_type_enforce<
		`Eu-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L3R1KUIJ = $mol_type_enforce<
		`Re-Os-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6BM76IES = $mol_type_enforce<
		`Nd-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A0QS3VOR = $mol_type_enforce<
		`Sm-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WVDE9QMU = $mol_type_enforce<
		`Cs-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CC46DDQN = $mol_type_enforce<
		`Tb-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CVZSM2QQ = $mol_type_enforce<
		`Mg-Mn-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EFE6W9UF = $mol_type_enforce<
		`Cu-Pd-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C3N7VMD2 = $mol_type_enforce<
		`Li-Er-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4U5I6G2L = $mol_type_enforce<
		`Li-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LH1AR4YB = $mol_type_enforce<
		`Y-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NGC00AC8 = $mol_type_enforce<
		`Yb-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I2E2UD91 = $mol_type_enforce<
		`Li-Sm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NFISP7QP = $mol_type_enforce<
		`Dy-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HLTYYNQ7 = $mol_type_enforce<
		`Ca-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__51LJUB87 = $mol_type_enforce<
		`Pr-Hf-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L2E864AC = $mol_type_enforce<
		`La-Yb-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XFGZUOFI = $mol_type_enforce<
		`Eu-Mn-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8Q5F9ADH = $mol_type_enforce<
		`Tb-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X6SFB2PG = $mol_type_enforce<
		`Yb-Nd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__24V8QDJM = $mol_type_enforce<
		`Ti-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BHYJ1A4H = $mol_type_enforce<
		`Mg-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ABMH15L6 = $mol_type_enforce<
		`Ta-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__613MDQBI = $mol_type_enforce<
		`Li-Nd-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HGO260JD = $mol_type_enforce<
		`Tl-Ag-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YSYWFDGU = $mol_type_enforce<
		`Tb-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CZC5OTOD = $mol_type_enforce<
		`Gd-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CT3TST7F = $mol_type_enforce<
		`Cu-Pd-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I91NQ7J9 = $mol_type_enforce<
		`Li-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9V068R1T = $mol_type_enforce<
		`Gd-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AJNO9LI7 = $mol_type_enforce<
		`Cu-Ru-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XCS8EABZ = $mol_type_enforce<
		`Li-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2Z2E1I46 = $mol_type_enforce<
		`Yb-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PW5U0N7B = $mol_type_enforce<
		`Gd-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I4OAO3F7 = $mol_type_enforce<
		`Pr-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6I9IUJZ6 = $mol_type_enforce<
		`V-Fe-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N6MM7HJO = $mol_type_enforce<
		`La-Gd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6A3P8B0U = $mol_type_enforce<
		`Ta-V-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4IP35ELU = $mol_type_enforce<
		`Tb-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U4ALBBJZ = $mol_type_enforce<
		`Cr-Mo-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L6HVFRWK = $mol_type_enforce<
		`Tb-Ce-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6VTL4W6Z = $mol_type_enforce<
		`Ca-La-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ASX32SAV = $mol_type_enforce<
		`Gd-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N1XKWSWL = $mol_type_enforce<
		`Cr-Fe-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XNHPH09P = $mol_type_enforce<
		`Cr-Bi-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6FX9HHUK = $mol_type_enforce<
		`Ce-Pr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U8SHJ836 = $mol_type_enforce<
		`Sr-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CXJI0RQW = $mol_type_enforce<
		`Ag-Ge-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F6DI15Z2 = $mol_type_enforce<
		`Y-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NTCHJ09G = $mol_type_enforce<
		`Er-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OQCNQK51 = $mol_type_enforce<
		`Sm-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FW090EQ0 = $mol_type_enforce<
		`Cr-Hg-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YC3295J5 = $mol_type_enforce<
		`La-Pr-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__48K4PYN5 = $mol_type_enforce<
		`Ca-Ce-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B958YI6X = $mol_type_enforce<
		`Th-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M0KZPEQI = $mol_type_enforce<
		`Ba-Nd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__49A3TI1T = $mol_type_enforce<
		`Ce-Eu-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z4JSIVNT = $mol_type_enforce<
		`Y-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OE4Q1Q30 = $mol_type_enforce<
		`Cs-Li-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CO281SNT = $mol_type_enforce<
		`Tb-Nd-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XCO7OED7 = $mol_type_enforce<
		`K-Rb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LI03F32C = $mol_type_enforce<
		`Ca-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FCHYTMPF = $mol_type_enforce<
		`Tb-Dy-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5ZM1JH9R = $mol_type_enforce<
		`Ce-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NQZHCDGN = $mol_type_enforce<
		`Yb-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__APMRUNBS = $mol_type_enforce<
		`Y-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KJBJDMMW = $mol_type_enforce<
		`Gd-Dy-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6FIAE49D = $mol_type_enforce<
		`Yb-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M6WVMD1R = $mol_type_enforce<
		`Ce-Pr-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V97YNJDR = $mol_type_enforce<
		`Dy-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GA9Y0ILF = $mol_type_enforce<
		`Y-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5D19O9S3 = $mol_type_enforce<
		`Hf-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OJ2KENBI = $mol_type_enforce<
		`Cu-Mo-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3YRPT1O4 = $mol_type_enforce<
		`Ho-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GCRFKC3C = $mol_type_enforce<
		`Na-Mg-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ER8H4EKT = $mol_type_enforce<
		`Cu-Re-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7OD707GL = $mol_type_enforce<
		`Si-Ag-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MH3M1AYQ = $mol_type_enforce<
		`Ba-La-Eu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VWCBMG61 = $mol_type_enforce<
		`Pm-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YHMQ8FLZ = $mol_type_enforce<
		`Mn-V-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2V0ZH7PE = $mol_type_enforce<
		`Ca-La-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IIYKC9F3 = $mol_type_enforce<
		`Pr-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5B2QN2D3 = $mol_type_enforce<
		`Nd-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ME3ZYKDN = $mol_type_enforce<
		`Re-Ni-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9E1TQD1U = $mol_type_enforce<
		`Gd-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5R8TXEGI = $mol_type_enforce<
		`Ce-Hf-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P8FBFVPW = $mol_type_enforce<
		`La-Nd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IPRKVXG1 = $mol_type_enforce<
		`Yb-Ho-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9J2YL23T = $mol_type_enforce<
		`Al-Cd-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7IHED362 = $mol_type_enforce<
		`Al-Tl-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MRYS4WCG = $mol_type_enforce<
		`Tb-Sm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OYN0ZUXB = $mol_type_enforce<
		`Pm-Sm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9LO3XVJK = $mol_type_enforce<
		`Ce-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZWWMVWY4 = $mol_type_enforce<
		`Pr-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MXJUCMAU = $mol_type_enforce<
		`Dy-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7PKMMB36 = $mol_type_enforce<
		`Zn-Sn-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J9X5598U = $mol_type_enforce<
		`Rb-Mg-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7V6Q1QX8 = $mol_type_enforce<
		`Tl-In-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MY7IBDBJ = $mol_type_enforce<
		`Ca-V-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GA6EEVJ1 = $mol_type_enforce<
		`Th-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K67IZTNE = $mol_type_enforce<
		`Gd-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QSDUPY78 = $mol_type_enforce<
		`La-Er-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VUAB4HB0 = $mol_type_enforce<
		`Nd-Th-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G2N5UT0T = $mol_type_enforce<
		`Ce-Pm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2J6USPB8 = $mol_type_enforce<
		`Tb-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J309EDF4 = $mol_type_enforce<
		`Gd-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MNQE7Z0D = $mol_type_enforce<
		`Yb-Pr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2H1P7ERN = $mol_type_enforce<
		`Yb-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4EZDXDQV = $mol_type_enforce<
		`Rb-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V4JGAH4R = $mol_type_enforce<
		`Dy-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C7D8COQH = $mol_type_enforce<
		`Be-Ga-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GO8JDQBR = $mol_type_enforce<
		`Y-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LTAV8SPI = $mol_type_enforce<
		`Ba-Yb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WCGVJNR8 = $mol_type_enforce<
		`Yb-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8DLMB9WC = $mol_type_enforce<
		`Tb-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FJ7XYW4X = $mol_type_enforce<
		`Ho-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9KCPKBQI = $mol_type_enforce<
		`Pm-Gd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WVR1H488 = $mol_type_enforce<
		`Li-Mn-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8TPRBU0S = $mol_type_enforce<
		`Ce-Eu-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__15YNIG27 = $mol_type_enforce<
		`Be-Al-Zn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1MFTVCD1 = $mol_type_enforce<
		`Zn-Ge-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OLC59AGE = $mol_type_enforce<
		`Pr-Ho-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P127Q1DL = $mol_type_enforce<
		`Tb-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KWPI5X5K = $mol_type_enforce<
		`Li-Sm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NWVAGVR3 = $mol_type_enforce<
		`Dy-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VS4Q6JCQ = $mol_type_enforce<
		`Ba-Ca-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__056RFULI = $mol_type_enforce<
		`Ho-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QCC32TEI = $mol_type_enforce<
		`Er-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G9YH2GY8 = $mol_type_enforce<
		`Ca-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A6GBK07P = $mol_type_enforce<
		`Os-Pd-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DH96L7PF = $mol_type_enforce<
		`Pr-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YWI291TP = $mol_type_enforce<
		`Cr-Ag-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4PS0VHYO = $mol_type_enforce<
		`La-Ce-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DY4DWTC4 = $mol_type_enforce<
		`Mn-Cu-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8LIBIMR1 = $mol_type_enforce<
		`Yb-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__922QNPDV = $mol_type_enforce<
		`La-Nd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YYO4XSY3 = $mol_type_enforce<
		`Ce-Ho-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GLXCD80R = $mol_type_enforce<
		`Re-Ag-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LGT3UQ2C = $mol_type_enforce<
		`Tl-Mo-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TZKVARQE = $mol_type_enforce<
		`Sm-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9JBB8R9W = $mol_type_enforce<
		`Co-Ir-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KKAVQ2X8 = $mol_type_enforce<
		`Pm-Gd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FBDOWZ2S = $mol_type_enforce<
		`Ce-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZFAA4IB8 = $mol_type_enforce<
		`Ce-Sm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M2H52029 = $mol_type_enforce<
		`La-Tb-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QIR5H5RN = $mol_type_enforce<
		`Yb-Gd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R4F18DSK = $mol_type_enforce<
		`Cu-Ni-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JUHVZLRP = $mol_type_enforce<
		`Rb-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0PYQ7KFX = $mol_type_enforce<
		`Yb-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QVHA1AMV = $mol_type_enforce<
		`Nd-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PLP832WA = $mol_type_enforce<
		`Tl-Cd-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B34SA2ZG = $mol_type_enforce<
		`Tb-Sm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QZ93D2IP = $mol_type_enforce<
		`Sm-Gd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XKXHR3FH = $mol_type_enforce<
		`Tb-Yb-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8IZ87DNA = $mol_type_enforce<
		`Li-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OBHS8EC3 = $mol_type_enforce<
		`Pr-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BQAF0W6A = $mol_type_enforce<
		`Mg-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UGQ8Y83N = $mol_type_enforce<
		`La-Ce-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TU7Y3DRE = $mol_type_enforce<
		`Th-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OWH2R03B = $mol_type_enforce<
		`Nd-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1ZN101Q4 = $mol_type_enforce<
		`Eu-Hf-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U7KD7I5N = $mol_type_enforce<
		`Ce-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NO245ZVM = $mol_type_enforce<
		`Gd-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3IDH068U = $mol_type_enforce<
		`Er-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9IEPHXQ1 = $mol_type_enforce<
		`Ca-Pm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0DIIFA20 = $mol_type_enforce<
		`Co-Cu-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FFQK67U4 = $mol_type_enforce<
		`Yb-Eu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1R1KMOQJ = $mol_type_enforce<
		`Sm-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9YN5O42P = $mol_type_enforce<
		`Y-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ECNSGAQ4 = $mol_type_enforce<
		`Y-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R0QV2E6O = $mol_type_enforce<
		`V-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XY8J8VVL = $mol_type_enforce<
		`Ce-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LHY5FO2V = $mol_type_enforce<
		`Cs-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9UWAEEHY = $mol_type_enforce<
		`Nd-Dy-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A71JU1Z2 = $mol_type_enforce<
		`Li-Ho-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__47HBN0WD = $mol_type_enforce<
		`Si-Ag-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6OS3G9AI = $mol_type_enforce<
		`Yb-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FHLHXEAY = $mol_type_enforce<
		`Tl-Cd-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5YYUB49R = $mol_type_enforce<
		`Tb-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YHIK3HTO = $mol_type_enforce<
		`Ce-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JN2I7K7E = $mol_type_enforce<
		`Yb-Pr-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T9P7RDDY = $mol_type_enforce<
		`Nd-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R8BO365M = $mol_type_enforce<
		`Pr-Nd-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LW7DNDUI = $mol_type_enforce<
		`Li-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YYAG7EJB = $mol_type_enforce<
		`Yb-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SS0ZXF40 = $mol_type_enforce<
		`Tb-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0CFGLZUQ = $mol_type_enforce<
		`La-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FFQI9GSW = $mol_type_enforce<
		`Nd-Dy-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3DMXHRUI = $mol_type_enforce<
		`Pm-Nd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G4D7JLSP = $mol_type_enforce<
		`Li-Tb-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XAN9STHP = $mol_type_enforce<
		`Gd-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PRWERQEF = $mol_type_enforce<
		`Li-La-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D72EF8RL = $mol_type_enforce<
		`Pu-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R3AP1VZL = $mol_type_enforce<
		`Na-Ca-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N7Z00AT3 = $mol_type_enforce<
		`Y-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y5FR0SHN = $mol_type_enforce<
		`Ce-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ETJ4IYMA = $mol_type_enforce<
		`Hf-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2DBHMEJ9 = $mol_type_enforce<
		`La-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W2PB6OCZ = $mol_type_enforce<
		`Ho-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J4FGSC3M = $mol_type_enforce<
		`Ca-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C1U1SH3Z = $mol_type_enforce<
		`Nd-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NLH1LAA3 = $mol_type_enforce<
		`La-Tb-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VM2SKP4V = $mol_type_enforce<
		`Yb-Gd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A37EPILN = $mol_type_enforce<
		`Tc-Pd-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BBJD3Q0K = $mol_type_enforce<
		`Li-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AJTC23FZ = $mol_type_enforce<
		`Li-Sm-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RMQYMLKB = $mol_type_enforce<
		`Be-Ge-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PP0DK4R5 = $mol_type_enforce<
		`Ca-Tb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__APWU05DW = $mol_type_enforce<
		`K-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CJ1SKWK3 = $mol_type_enforce<
		`Pm-Gd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CWTEP49H = $mol_type_enforce<
		`La-Sm-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9PV99NYQ = $mol_type_enforce<
		`Ca-Yb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KRKVO3I9 = $mol_type_enforce<
		`Nd-Gd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W5CGKC2R = $mol_type_enforce<
		`Pm-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VSV4LIJL = $mol_type_enforce<
		`Yb-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M3R8P9G9 = $mol_type_enforce<
		`Ce-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R2C5KEA8 = $mol_type_enforce<
		`Dy-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6C7CNRR7 = $mol_type_enforce<
		`Yb-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3A870FSV = $mol_type_enforce<
		`Cu-Pd-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QQM4S95S = $mol_type_enforce<
		`La-Tb-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EF06085S = $mol_type_enforce<
		`Tm-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J1S8AZEF = $mol_type_enforce<
		`Tb-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FEZLJW5Q = $mol_type_enforce<
		`La-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UFWPK66X = $mol_type_enforce<
		`Sm-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E8B50QII = $mol_type_enforce<
		`Li-Mn-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RUDOWJQ8 = $mol_type_enforce<
		`Ce-Gd-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NO4FKXL0 = $mol_type_enforce<
		`Sc-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0GVAJKAI = $mol_type_enforce<
		`Ta-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QSIPHDFG = $mol_type_enforce<
		`Nd-Sm-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KESM3SUU = $mol_type_enforce<
		`Nd-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__72V45YX2 = $mol_type_enforce<
		`La-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3SI19SW8 = $mol_type_enforce<
		`La-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VKAZBQT0 = $mol_type_enforce<
		`Ca-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NYV0BYJC = $mol_type_enforce<
		`Re-Hg-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YSHB4ULV = $mol_type_enforce<
		`Tb-Dy-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AE4IVWWB = $mol_type_enforce<
		`La-Tb-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LHR3UH8O = $mol_type_enforce<
		`La-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A52WD98X = $mol_type_enforce<
		`Cu-Tc-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1ASPRXDM = $mol_type_enforce<
		`Li-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YKUY6ROD = $mol_type_enforce<
		`Si-Ge-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2SNIBBAR = $mol_type_enforce<
		`Gd-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XRSCKGLY = $mol_type_enforce<
		`Sm-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2NPTI19U = $mol_type_enforce<
		`Na-Mg-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B03MQ672 = $mol_type_enforce<
		`La-Ce-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ODWLUJSZ = $mol_type_enforce<
		`Th-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YT281VOV = $mol_type_enforce<
		`Y-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G2WIFIGS = $mol_type_enforce<
		`La-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VCH80080 = $mol_type_enforce<
		`Dy-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__31J2NB2Z = $mol_type_enforce<
		`La-Pr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J6I9L4FT = $mol_type_enforce<
		`Ca-La-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3GA9Z4KD = $mol_type_enforce<
		`Pr-Dy-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HNTODYWJ = $mol_type_enforce<
		`Ce-Nd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8YUWLOOJ = $mol_type_enforce<
		`Lu-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KC4PC9PS = $mol_type_enforce<
		`Y-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KI5RMZON = $mol_type_enforce<
		`Li-Ce-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RZOO47TZ = $mol_type_enforce<
		`La-Eu-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BPIEXTT8 = $mol_type_enforce<
		`Nd-Sm-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q23OAA55 = $mol_type_enforce<
		`La-Tb-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B395J2YQ = $mol_type_enforce<
		`Li-Ce-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9ZW504D1 = $mol_type_enforce<
		`Dy-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GQPM3L0U = $mol_type_enforce<
		`Zn-Ga-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3LDYRG78 = $mol_type_enforce<
		`Y-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A5I8AUIG = $mol_type_enforce<
		`Li-Pm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1OQUNX70 = $mol_type_enforce<
		`Pm-Nd-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7EZDCKML = $mol_type_enforce<
		`Pr-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8YXFU1TT = $mol_type_enforce<
		`Ba-La-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KK26AC3Q = $mol_type_enforce<
		`Fe-Co-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SHQZG4RB = $mol_type_enforce<
		`Pr-Nd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YDMWF813 = $mol_type_enforce<
		`Tl-In-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2HRYGRXQ = $mol_type_enforce<
		`Li-Pm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FCP7SZ7O = $mol_type_enforce<
		`Nd-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AVB8TXFT = $mol_type_enforce<
		`Pr-Nd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XWNAA1I7 = $mol_type_enforce<
		`Pr-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P1WWGIU2 = $mol_type_enforce<
		`Ce-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EC6CQN93 = $mol_type_enforce<
		`Tb-Ce-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H7VTMYEO = $mol_type_enforce<
		`V-Cr-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5SKL493Q = $mol_type_enforce<
		`Fe-Rh-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I82IRE5G = $mol_type_enforce<
		`Cs-K-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__93RJHG9J = $mol_type_enforce<
		`Er-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z9YEZ6ZJ = $mol_type_enforce<
		`Tb-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R8VOH5UR = $mol_type_enforce<
		`K-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V4RMFQY7 = $mol_type_enforce<
		`Gd-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UMQ1U4DH = $mol_type_enforce<
		`La-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QIZSHHSQ = $mol_type_enforce<
		`Yb-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LWOE8C2G = $mol_type_enforce<
		`Ho-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8AKUV54D = $mol_type_enforce<
		`Pr-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZKCEZMT2 = $mol_type_enforce<
		`Mg-V-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__281U6507 = $mol_type_enforce<
		`Ta-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JSQSC6CE = $mol_type_enforce<
		`Li-Mg-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__60F3H8L7 = $mol_type_enforce<
		`Nd-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C8F3K7OK = $mol_type_enforce<
		`Tm-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W5BO0GPO = $mol_type_enforce<
		`K-Hf-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H6ID1T2B = $mol_type_enforce<
		`Cs-Mg-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__06ZRJPH9 = $mol_type_enforce<
		`Pr-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V3EMSQFU = $mol_type_enforce<
		`Ba-Gd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B7P90MC7 = $mol_type_enforce<
		`Sm-Er-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R06ZQY31 = $mol_type_enforce<
		`Yb-Eu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VHVOOR31 = $mol_type_enforce<
		`Pr-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__33W8YVV0 = $mol_type_enforce<
		`La-Pm-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WEZ61G6B = $mol_type_enforce<
		`Li-Nd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__52SCCNFY = $mol_type_enforce<
		`Yb-Dy-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OVZTL9NI = $mol_type_enforce<
		`Li-Gd-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TE83OX6O = $mol_type_enforce<
		`Ta-Nb-Tl`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HMJHY723 = $mol_type_enforce<
		`Fe-Cu-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5EOE9UW7 = $mol_type_enforce<
		`Pm-Pr-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7DX5E31T = $mol_type_enforce<
		`Fe-Cu-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OIW9I2C9 = $mol_type_enforce<
		`Dy-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SX7H1417 = $mol_type_enforce<
		`Nb-Hg-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0CPF1RA0 = $mol_type_enforce<
		`Er-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7QVAMI5Q = $mol_type_enforce<
		`Sr-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E41EVNLG = $mol_type_enforce<
		`Dy-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IX70W0HC = $mol_type_enforce<
		`Tb-Yb-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2537VB2R = $mol_type_enforce<
		`Nd-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G8S6SF3B = $mol_type_enforce<
		`Be-Zn-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6O1CQGWR = $mol_type_enforce<
		`Eu-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q7ZE0YZC = $mol_type_enforce<
		`Yb-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XB02IDDQ = $mol_type_enforce<
		`Ce-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1YUETS1U = $mol_type_enforce<
		`Gd-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PDIL6GKZ = $mol_type_enforce<
		`Tl-Si-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SPE311VV = $mol_type_enforce<
		`Sm-Dy-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UKOATARV = $mol_type_enforce<
		`La-Ho-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HEH786AB = $mol_type_enforce<
		`Cs-Li-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H4P4TDY6 = $mol_type_enforce<
		`Cu-Bi-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8VGDEJRT = $mol_type_enforce<
		`Yb-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YO04S33P = $mol_type_enforce<
		`Ce-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0LIHEO1M = $mol_type_enforce<
		`Li-V-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6O2E32F6 = $mol_type_enforce<
		`Gd-Er-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IT58XTQT = $mol_type_enforce<
		`Yb-Dy-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6424KG7L = $mol_type_enforce<
		`Re-Ni-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6VX6485T = $mol_type_enforce<
		`Ca-Nd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y97LEFFK = $mol_type_enforce<
		`Yb-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AHIL4TRH = $mol_type_enforce<
		`La-Tb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FB8WQOMG = $mol_type_enforce<
		`Ir-Rh-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IC92FQIN = $mol_type_enforce<
		`Al-Tl-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JB4RZ59E = $mol_type_enforce<
		`La-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9BTCJ0BH = $mol_type_enforce<
		`Nd-Gd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RBCLJCZB = $mol_type_enforce<
		`Al-Cd-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q4KKI0E3 = $mol_type_enforce<
		`Li-Ho-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9GP7NLSF = $mol_type_enforce<
		`Ho-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P2URDUTN = $mol_type_enforce<
		`Li-Gd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4GKWB7P4 = $mol_type_enforce<
		`Ga-Re-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q5WFTLMG = $mol_type_enforce<
		`Yb-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LS6QPUWK = $mol_type_enforce<
		`Li-Pr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D6SCIAEJ = $mol_type_enforce<
		`U-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0UDBY174 = $mol_type_enforce<
		`Yb-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BT16W47I = $mol_type_enforce<
		`Ce-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3OBNA3L7 = $mol_type_enforce<
		`Fe-Ir-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NVELZQXS = $mol_type_enforce<
		`Gd-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WDETKYUW = $mol_type_enforce<
		`Tb-Gd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7EG9Z683 = $mol_type_enforce<
		`Ca-La-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XVPB3NHE = $mol_type_enforce<
		`Ce-Nd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8OCPKJKE = $mol_type_enforce<
		`Yb-Eu-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8IZ73US5 = $mol_type_enforce<
		`Ta-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0QQS3G1N = $mol_type_enforce<
		`Th-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BWY6OYF3 = $mol_type_enforce<
		`Ca-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HHR1K6U7 = $mol_type_enforce<
		`Er-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KVGZE7XL = $mol_type_enforce<
		`Sm-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P9QXVK2J = $mol_type_enforce<
		`Ce-Pm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6I3T08RP = $mol_type_enforce<
		`Pr-Sm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZI5QLJKF = $mol_type_enforce<
		`Ta-Tl-In`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M2Q44TXU = $mol_type_enforce<
		`Li-Tb-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3S4L2RLX = $mol_type_enforce<
		`Ba-Pm-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BET01YGF = $mol_type_enforce<
		`Li-Gd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LHU8IB9A = $mol_type_enforce<
		`Hg-B-Sb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8SQLS2JC = $mol_type_enforce<
		`Gd-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E720RZJC = $mol_type_enforce<
		`Tb-Pr-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VWDUYYRW = $mol_type_enforce<
		`Ce-Gd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DYAILDCB = $mol_type_enforce<
		`Ho-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GYDX7PZY = $mol_type_enforce<
		`Y-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3Q4TGVFN = $mol_type_enforce<
		`Ir-Pt-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VQPATNK3 = $mol_type_enforce<
		`La-Tb-Yb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__84CPW5F2 = $mol_type_enforce<
		`Li-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2PRF25FQ = $mol_type_enforce<
		`Tm-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XW16XDXJ = $mol_type_enforce<
		`Tb-Pr-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3SKL0X6S = $mol_type_enforce<
		`Pr-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5P93Z57F = $mol_type_enforce<
		`Re-Bi-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7EAC8TIK = $mol_type_enforce<
		`Co-Cu-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WZV9XMT2 = $mol_type_enforce<
		`Nd-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SL58JQ4M = $mol_type_enforce<
		`La-Pm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7HU7UJ0U = $mol_type_enforce<
		`Ca-Eu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EQWFCMAD = $mol_type_enforce<
		`Ba-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__921DSWQ7 = $mol_type_enforce<
		`Na-Nb-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FUSC7D6P = $mol_type_enforce<
		`Cs-Li-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2W9YNHRF = $mol_type_enforce<
		`Gd-Dy-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ITFZTDO8 = $mol_type_enforce<
		`La-Ce-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZKODHK3X = $mol_type_enforce<
		`Cu-Re-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UEUV3YSA = $mol_type_enforce<
		`Li-Mg-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C3QF7PQI = $mol_type_enforce<
		`Ce-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G342I3W9 = $mol_type_enforce<
		`Ca-La-Yb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MZM11RYI = $mol_type_enforce<
		`Ce-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XVN10AYS = $mol_type_enforce<
		`Zn-Cd-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RHUJSVWH = $mol_type_enforce<
		`Nd-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7B1ZWZBY = $mol_type_enforce<
		`V-Fe-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TY2VW014 = $mol_type_enforce<
		`Tb-Dy-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__91JEDON8 = $mol_type_enforce<
		`Hf-Th-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QZFOT4OY = $mol_type_enforce<
		`Sc-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SEYPXRW3 = $mol_type_enforce<
		`La-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O7HAMYOS = $mol_type_enforce<
		`Al-In-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5Z69ZIEA = $mol_type_enforce<
		`Be-Ga-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RM09F5LF = $mol_type_enforce<
		`Os-Ru-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MU08M86L = $mol_type_enforce<
		`Ag-Ge-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WMR6GM65 = $mol_type_enforce<
		`Pm-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R27NJIQA = $mol_type_enforce<
		`Li-La-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M7BJQC9B = $mol_type_enforce<
		`Cs-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6INXPG2G = $mol_type_enforce<
		`Ce-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PSJJOJ2R = $mol_type_enforce<
		`Pr-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BE1Q4WRE = $mol_type_enforce<
		`Li-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NAK9LPI0 = $mol_type_enforce<
		`La-Ho-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7BEA5YJO = $mol_type_enforce<
		`Nd-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VLLK5D0Q = $mol_type_enforce<
		`Th-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7MQ4R2IV = $mol_type_enforce<
		`Er-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NYRD0NL7 = $mol_type_enforce<
		`Gd-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G9UOY041 = $mol_type_enforce<
		`Lu-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__59L0X1E3 = $mol_type_enforce<
		`Lu-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1EOPK8N4 = $mol_type_enforce<
		`Ce-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9BW59PC5 = $mol_type_enforce<
		`Ce-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6836FN0W = $mol_type_enforce<
		`Li-Ce-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y2RZJCL4 = $mol_type_enforce<
		`Ce-Th-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KBQT2N27 = $mol_type_enforce<
		`Li-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4LEQ1996 = $mol_type_enforce<
		`Yb-Ho-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TD4K3VNL = $mol_type_enforce<
		`Li-Pm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N0Z2EEWC = $mol_type_enforce<
		`Ce-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4821CMSD = $mol_type_enforce<
		`Cs-K-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V2KQJ3AQ = $mol_type_enforce<
		`Tb-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D0APG3W2 = $mol_type_enforce<
		`Ce-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4ETAO0E4 = $mol_type_enforce<
		`Ho-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O2ET1FUM = $mol_type_enforce<
		`Y-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6WDGCXJ1 = $mol_type_enforce<
		`Gd-Dy-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2L041VAC = $mol_type_enforce<
		`Gd-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8T5YU0D9 = $mol_type_enforce<
		`Li-Cr-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OX3XUQBM = $mol_type_enforce<
		`Co-Bi-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P7MBQP9L = $mol_type_enforce<
		`Gd-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EAJNLVHZ = $mol_type_enforce<
		`Co-Ru-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9HO1XY16 = $mol_type_enforce<
		`Gd-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5SF1NV4F = $mol_type_enforce<
		`Li-La-Ce`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SFI3LWK4 = $mol_type_enforce<
		`Be-Al-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K5RIJZ8D = $mol_type_enforce<
		`Gd-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__16JHFZDH = $mol_type_enforce<
		`Pr-Dy-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L3EHGBO0 = $mol_type_enforce<
		`Yb-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IBKSCF7Q = $mol_type_enforce<
		`La-Gd-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__URGDRCSD = $mol_type_enforce<
		`Tl-Cu-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KBRESJC3 = $mol_type_enforce<
		`Cr-Ag-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KORQME66 = $mol_type_enforce<
		`Tb-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IE6T8PG8 = $mol_type_enforce<
		`Nd-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DD35A3T9 = $mol_type_enforce<
		`Eu-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JL0X0UAH = $mol_type_enforce<
		`Ga-Ge-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V0XC1RY8 = $mol_type_enforce<
		`Li-Pm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YEKN6OGW = $mol_type_enforce<
		`Li-Nd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MZ95BVB2 = $mol_type_enforce<
		`Ba-Pr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P6LPSB95 = $mol_type_enforce<
		`Li-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KRCH4CFA = $mol_type_enforce<
		`Pr-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OXGWDC3I = $mol_type_enforce<
		`Ce-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EQN6BC3O = $mol_type_enforce<
		`Dy-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5DBLL1BB = $mol_type_enforce<
		`Ca-Eu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2NLMM46M = $mol_type_enforce<
		`Ni-Pd-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C921S7BM = $mol_type_enforce<
		`Er-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3K7K2WCI = $mol_type_enforce<
		`Ba-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8APVQJX0 = $mol_type_enforce<
		`Pr-Nd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PNW06V0R = $mol_type_enforce<
		`Ce-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RZZP2G4X = $mol_type_enforce<
		`Na-Mg-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XVDJWCJG = $mol_type_enforce<
		`Cu-Ag-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HAT2195N = $mol_type_enforce<
		`La-Ce-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7LO8DTSF = $mol_type_enforce<
		`La-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A5ZEZ0ZL = $mol_type_enforce<
		`Tc-Ni-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GQV0H18E = $mol_type_enforce<
		`Ti-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TRBY4WAP = $mol_type_enforce<
		`Tb-Ce-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T734349E = $mol_type_enforce<
		`Hf-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SRRHKG2Y = $mol_type_enforce<
		`Lu-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__44KDL4NQ = $mol_type_enforce<
		`Ta-V-In`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KOQ6UAO8 = $mol_type_enforce<
		`Co-Ir-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q3LBVEZ1 = $mol_type_enforce<
		`Na-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TK6A4MD3 = $mol_type_enforce<
		`Yb-Hf-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2KM42LGV = $mol_type_enforce<
		`Mn-Cu-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X4X4K57L = $mol_type_enforce<
		`Ce-Nd-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XJ8VA90Y = $mol_type_enforce<
		`Pr-Gd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AOZGEFQX = $mol_type_enforce<
		`Ca-Pm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EWFYW6F9 = $mol_type_enforce<
		`Nd-Gd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z79R6I7G = $mol_type_enforce<
		`Yb-Eu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EI7SQ9X1 = $mol_type_enforce<
		`Al-Hg-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__76VEC4RG = $mol_type_enforce<
		`V-Cr-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B4F4BR41 = $mol_type_enforce<
		`Ce-Nd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q2Y5N4BT = $mol_type_enforce<
		`Ho-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H2406BPV = $mol_type_enforce<
		`Tb-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__18YW387P = $mol_type_enforce<
		`Ca-Tb-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QFLTY4WU = $mol_type_enforce<
		`Nd-Ho-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6VJOJRQS = $mol_type_enforce<
		`Pu-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7XMUGKPZ = $mol_type_enforce<
		`V-Cu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DNKK84X6 = $mol_type_enforce<
		`Tb-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K2R38IC8 = $mol_type_enforce<
		`V-Cu-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K05OY9M9 = $mol_type_enforce<
		`Fe-Ni-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H27SWVKZ = $mol_type_enforce<
		`Lu-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EE9VHMWB = $mol_type_enforce<
		`Fe-Ni-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3FSMYLK0 = $mol_type_enforce<
		`Ca-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B5NZ5XZP = $mol_type_enforce<
		`Ca-Ce-Eu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WEUHJV43 = $mol_type_enforce<
		`Rb-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EGK4VMY1 = $mol_type_enforce<
		`Nd-Sm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KMM6IMD5 = $mol_type_enforce<
		`Co-Re-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1AOF11F9 = $mol_type_enforce<
		`Gd-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CWZ9F9H4 = $mol_type_enforce<
		`Eu-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5XLXJ6T2 = $mol_type_enforce<
		`Pu-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8NAYPAHT = $mol_type_enforce<
		`Pm-Sm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RS1V62SD = $mol_type_enforce<
		`La-Ce-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CBWWTHFJ = $mol_type_enforce<
		`Ga-Sn-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7I9VZYJE = $mol_type_enforce<
		`Ba-Sr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EEC4O68O = $mol_type_enforce<
		`Co-Re-Hg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GVG7K0UP = $mol_type_enforce<
		`La-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4QFJRGML = $mol_type_enforce<
		`Cs-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JO7S6Y17 = $mol_type_enforce<
		`La-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__73QSQXPC = $mol_type_enforce<
		`Ce-Sm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IXEUW1U2 = $mol_type_enforce<
		`Co-Ni-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__76H7BVNL = $mol_type_enforce<
		`Mg-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CJAXGUSQ = $mol_type_enforce<
		`Sc-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IEPZP90J = $mol_type_enforce<
		`Sm-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JDFOIX2D = $mol_type_enforce<
		`Ce-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6SFNCD6N = $mol_type_enforce<
		`Li-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YK7OD0FA = $mol_type_enforce<
		`Tb-Dy-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DX5ZP78K = $mol_type_enforce<
		`Cs-Rb-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R4CDF1NK = $mol_type_enforce<
		`Cs-Rb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1BS2KP25 = $mol_type_enforce<
		`Ce-Gd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RLT3W074 = $mol_type_enforce<
		`Mg-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1E6NWSDW = $mol_type_enforce<
		`K-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OOI3TRDE = $mol_type_enforce<
		`Rb-Na-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LAS29F9D = $mol_type_enforce<
		`Ba-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FRBCIN0U = $mol_type_enforce<
		`Ca-Tb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1OVSDMET = $mol_type_enforce<
		`Pr-Er-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4Q3SBJLJ = $mol_type_enforce<
		`Si-Ge-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SP24870C = $mol_type_enforce<
		`Y-Er-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8F9TVBZJ = $mol_type_enforce<
		`Zn-Si-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NG5QPOBG = $mol_type_enforce<
		`Li-Pm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SRS1KXPZ = $mol_type_enforce<
		`Yb-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AP59T4X9 = $mol_type_enforce<
		`La-Dy-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__026LAI5J = $mol_type_enforce<
		`La-Pm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EBBGHKCV = $mol_type_enforce<
		`Hf-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9CJAYELJ = $mol_type_enforce<
		`K-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XCL2HK7R = $mol_type_enforce<
		`Lu-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O6ANQNAT = $mol_type_enforce<
		`Li-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UKLPPH3M = $mol_type_enforce<
		`Cd-Ga-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H8M2DGK3 = $mol_type_enforce<
		`Cd-Ga-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NC04NTSZ = $mol_type_enforce<
		`Gd-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UFD5QDAQ = $mol_type_enforce<
		`Cu-W-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GB15AITE = $mol_type_enforce<
		`Yb-Nd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2W9UD9Z5 = $mol_type_enforce<
		`Er-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5TS4AXZZ = $mol_type_enforce<
		`Tb-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9DGUL3IF = $mol_type_enforce<
		`Er-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FIQNQBNW = $mol_type_enforce<
		`Tc-Pt-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JIBMC29V = $mol_type_enforce<
		`Dy-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GR6KLRGC = $mol_type_enforce<
		`Cu-Pd-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ONEKEQET = $mol_type_enforce<
		`Y-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SM44D1SC = $mol_type_enforce<
		`La-Yb-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DMZ9OKSA = $mol_type_enforce<
		`Lu-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8WV8JCWN = $mol_type_enforce<
		`Cr-Cu-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YFB1GOV7 = $mol_type_enforce<
		`Y-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__146SAYF9 = $mol_type_enforce<
		`Li-La-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C0G0G30Y = $mol_type_enforce<
		`Tb-Sm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8LO8QUEG = $mol_type_enforce<
		`Tb-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1J9TVD5Z = $mol_type_enforce<
		`Ce-Er-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F1BCQ8LD = $mol_type_enforce<
		`Gd-Dy-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G5EYVX7N = $mol_type_enforce<
		`Ca-Ce-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__99LM3PWV = $mol_type_enforce<
		`Ta-Tl-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__32ICD5H2 = $mol_type_enforce<
		`Pr-Nd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5P7LGKEJ = $mol_type_enforce<
		`Li-Pr-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZRUWNGUY = $mol_type_enforce<
		`La-Pr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2RY5UOP8 = $mol_type_enforce<
		`Tm-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GGHC5ZW7 = $mol_type_enforce<
		`Ce-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VGB89Z60 = $mol_type_enforce<
		`Ba-Yb-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1NE9QWH2 = $mol_type_enforce<
		`Na-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4RE9IYP6 = $mol_type_enforce<
		`Er-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C6TUJO9D = $mol_type_enforce<
		`Er-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GJ8EVEG9 = $mol_type_enforce<
		`Cd-Ge-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0BHEETJC = $mol_type_enforce<
		`Ba-Eu-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VRPIB41C = $mol_type_enforce<
		`Re-Ag-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BKWXCS1N = $mol_type_enforce<
		`Pr-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CHQUSGBS = $mol_type_enforce<
		`Lu-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TAHSCRXR = $mol_type_enforce<
		`Fe-Co-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DJGSXBZL = $mol_type_enforce<
		`Li-Mn-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EF9R787V = $mol_type_enforce<
		`Nd-Ho-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PDCUTI8Y = $mol_type_enforce<
		`La-Pm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7EYTM36M = $mol_type_enforce<
		`Mg-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X7UIHMCS = $mol_type_enforce<
		`Ce-Pm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A7XG4I1A = $mol_type_enforce<
		`Pd-Ru-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YFWG9FJ3 = $mol_type_enforce<
		`Gd-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FEQM1IGE = $mol_type_enforce<
		`Nd-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MO6X3FGW = $mol_type_enforce<
		`Pr-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6MC9KF8R = $mol_type_enforce<
		`Sc-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FLESELTP = $mol_type_enforce<
		`Co-Cu-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U00VF21C = $mol_type_enforce<
		`Eu-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2G52DD60 = $mol_type_enforce<
		`Y-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NLKDWVKC = $mol_type_enforce<
		`Tb-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UPY6VSKN = $mol_type_enforce<
		`La-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XKPAPKG4 = $mol_type_enforce<
		`Th-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__57NUBPB0 = $mol_type_enforce<
		`Li-Nd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__35AKZ7R0 = $mol_type_enforce<
		`Pm-Gd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XHQZAO4H = $mol_type_enforce<
		`Tl-Cu-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RXM11X2B = $mol_type_enforce<
		`Pr-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H5ND3L1Q = $mol_type_enforce<
		`Ca-Tb-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5BEH3IN5 = $mol_type_enforce<
		`Co-Pd-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1AOF3K9B = $mol_type_enforce<
		`Li-Pm-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SSKJCY5U = $mol_type_enforce<
		`Cu-Os-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7DD7VT04 = $mol_type_enforce<
		`Tb-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EF8RBDWZ = $mol_type_enforce<
		`Ni-Ag-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RJ3S8MZV = $mol_type_enforce<
		`Li-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2FSMO8TG = $mol_type_enforce<
		`Na-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RVTM4RI4 = $mol_type_enforce<
		`La-Sm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DZLI9HMC = $mol_type_enforce<
		`Ca-La-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XUIV7UM0 = $mol_type_enforce<
		`Sr-Ca-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X7NW19U0 = $mol_type_enforce<
		`La-Mn-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UYTP4DU7 = $mol_type_enforce<
		`La-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8LYU3K1R = $mol_type_enforce<
		`Tb-Ce-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z5IRGU84 = $mol_type_enforce<
		`Mo-Pb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GHV77KSY = $mol_type_enforce<
		`Tb-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VG18E3HI = $mol_type_enforce<
		`Al-Ga-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B4OYON9F = $mol_type_enforce<
		`V-Fe-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JSYO6I3D = $mol_type_enforce<
		`Nd-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0MP9C819 = $mol_type_enforce<
		`Tl-Si-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K52I26J4 = $mol_type_enforce<
		`Tb-Ce-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3HFIGLOG = $mol_type_enforce<
		`Cs-Pr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TEC9V1PO = $mol_type_enforce<
		`Nd-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VC6WBSR0 = $mol_type_enforce<
		`Eu-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HP1NODV6 = $mol_type_enforce<
		`La-Dy-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AE7UL6WO = $mol_type_enforce<
		`Mg-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__84DF6I1M = $mol_type_enforce<
		`Li-Fe-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3XX0BTPC = $mol_type_enforce<
		`Na-Li-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7OWFKHL9 = $mol_type_enforce<
		`La-Tb-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HCYMZLKF = $mol_type_enforce<
		`Th-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZQ727K1U = $mol_type_enforce<
		`Ce-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QXPGW7X8 = $mol_type_enforce<
		`Dy-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZNZD6I16 = $mol_type_enforce<
		`Nd-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MZRJJL2I = $mol_type_enforce<
		`Yb-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__23L95LUV = $mol_type_enforce<
		`Ga-Si-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WEPSHBML = $mol_type_enforce<
		`Pr-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__THWNGPVM = $mol_type_enforce<
		`Eu-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TKHN6AVA = $mol_type_enforce<
		`Hf-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XL97L7EY = $mol_type_enforce<
		`Pu-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1WB5W16G = $mol_type_enforce<
		`Li-Nd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NM3MVBMS = $mol_type_enforce<
		`Cu-Ag-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8N1ZLHNA = $mol_type_enforce<
		`Sm-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YSXKBZ4D = $mol_type_enforce<
		`Gd-Dy-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NAO1SILK = $mol_type_enforce<
		`Ho-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SSPNBCXR = $mol_type_enforce<
		`Cu-Ag-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1KU5YI5X = $mol_type_enforce<
		`Tc-Ni-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JSK2TOPL = $mol_type_enforce<
		`Y-Lu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IAZQVFQX = $mol_type_enforce<
		`Ni-Os-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8HQJ56JV = $mol_type_enforce<
		`Dy-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EGWQSPNM = $mol_type_enforce<
		`Fe-Cu-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RSWB5XFB = $mol_type_enforce<
		`Ta-Tl-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U79HZ5BT = $mol_type_enforce<
		`Eu-Y-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GO2IF2M8 = $mol_type_enforce<
		`Co-Pd-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__718D2K79 = $mol_type_enforce<
		`Re-Hg-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8U6AZBN6 = $mol_type_enforce<
		`La-Yb-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZHC4I9LX = $mol_type_enforce<
		`Nd-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FDMISCRR = $mol_type_enforce<
		`Tb-Yb-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RNH86P9T = $mol_type_enforce<
		`Yb-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y5LY0Y8V = $mol_type_enforce<
		`K-Li-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HNGK4NAK = $mol_type_enforce<
		`Re-Tc-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VPSB9NTA = $mol_type_enforce<
		`Cs-K-Al`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ON2XPN68 = $mol_type_enforce<
		`Pr-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G7W6FCJH = $mol_type_enforce<
		`Yb-Eu-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9YEZKMU1 = $mol_type_enforce<
		`Y-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XE4LJXN1 = $mol_type_enforce<
		`Yb-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SH84H6RL = $mol_type_enforce<
		`Nd-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AFONMV0K = $mol_type_enforce<
		`Sm-Dy-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__096UXNYZ = $mol_type_enforce<
		`Y-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__921EZMZH = $mol_type_enforce<
		`Ce-Er-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UJC4UNFH = $mol_type_enforce<
		`Re-Tc-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KKPLXE0D = $mol_type_enforce<
		`Ce-Nd-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__784UC8F6 = $mol_type_enforce<
		`Li-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CULRSQCP = $mol_type_enforce<
		`Y-Tm-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CH8DW7FV = $mol_type_enforce<
		`Al-Tl-Zn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PBUHEYZ8 = $mol_type_enforce<
		`Li-La-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XC6CXLY8 = $mol_type_enforce<
		`Pr-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3RAWMN9T = $mol_type_enforce<
		`Eu-Th-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FEZYZ82O = $mol_type_enforce<
		`Pr-Nd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4JH9FIDI = $mol_type_enforce<
		`Pm-Gd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ESOL9LPE = $mol_type_enforce<
		`Na-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KHTDUTTI = $mol_type_enforce<
		`Al-Zn-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LWWC1626 = $mol_type_enforce<
		`Ba-Sm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__18PIYD8K = $mol_type_enforce<
		`Y-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__32SHNHE6 = $mol_type_enforce<
		`Nd-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RETUNFWI = $mol_type_enforce<
		`Co-Ir-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__URAK67ZR = $mol_type_enforce<
		`Yb-Gd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C44RRO3S = $mol_type_enforce<
		`Hg-Ge-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OIW167FU = $mol_type_enforce<
		`Ho-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__13P7TWZ5 = $mol_type_enforce<
		`Pr-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LOAGEV8F = $mol_type_enforce<
		`Tb-Dy-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z8OQYGNK = $mol_type_enforce<
		`Ir-Ru-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__THBK3NKB = $mol_type_enforce<
		`Ce-Pm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QPZROU5H = $mol_type_enforce<
		`Tm-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XGN85Z0D = $mol_type_enforce<
		`Pm-Nd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U0JYKYK1 = $mol_type_enforce<
		`Yb-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2L4ZDK0I = $mol_type_enforce<
		`La-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1B8QTFEM = $mol_type_enforce<
		`Sm-Pu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F3OOEP57 = $mol_type_enforce<
		`Hf-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XFZB06QZ = $mol_type_enforce<
		`Ta-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NY4UN40W = $mol_type_enforce<
		`Be-Sn-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8Y1WUIY6 = $mol_type_enforce<
		`Pm-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X8QFSNAQ = $mol_type_enforce<
		`Yb-Eu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D2RFFRDE = $mol_type_enforce<
		`Ho-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KZAN9LK8 = $mol_type_enforce<
		`Tb-Dy-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V5HCBFIY = $mol_type_enforce<
		`Ce-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6LPHJLJG = $mol_type_enforce<
		`Al-Zn-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G0W960O1 = $mol_type_enforce<
		`Ca-La-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6XG8IKGE = $mol_type_enforce<
		`Yb-Eu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3VUHHM5E = $mol_type_enforce<
		`Cs-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__913NAK6K = $mol_type_enforce<
		`Na-Ca-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0VYEL0R2 = $mol_type_enforce<
		`Tb-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3APES1M3 = $mol_type_enforce<
		`Sr-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8204C5PE = $mol_type_enforce<
		`Tc-Ir-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PXH37CAG = $mol_type_enforce<
		`Y-Hf-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__517WTKG0 = $mol_type_enforce<
		`Ti-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NAPSTOHB = $mol_type_enforce<
		`Pr-Gd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3L4F9MPG = $mol_type_enforce<
		`Co-Cu-Re`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J69RTW6W = $mol_type_enforce<
		`La-Y-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__540ZC88C = $mol_type_enforce<
		`Re-Sn-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E9QUBAVY = $mol_type_enforce<
		`Yb-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XQQ4XP6Z = $mol_type_enforce<
		`Nd-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VAZN7W1T = $mol_type_enforce<
		`Fe-Ni-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9RA0YPXK = $mol_type_enforce<
		`Pr-Nd-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EK1FSUKB = $mol_type_enforce<
		`Yb-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AEP9ZT5V = $mol_type_enforce<
		`Ce-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P8C229SL = $mol_type_enforce<
		`Ac-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ISS98YV1 = $mol_type_enforce<
		`Zn-B-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5NAIF02P = $mol_type_enforce<
		`La-Yb-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V6R61SWD = $mol_type_enforce<
		`Ba-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B7C8X3HT = $mol_type_enforce<
		`Mn-Co-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y4AF3N3K = $mol_type_enforce<
		`Dy-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D5B9TWGR = $mol_type_enforce<
		`Er-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L73N3AIR = $mol_type_enforce<
		`La-Y-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RIMPFTSX = $mol_type_enforce<
		`Tc-Ir-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TURNIQ60 = $mol_type_enforce<
		`Pr-Er-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6TY34ZAY = $mol_type_enforce<
		`Yb-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0H5A1M0P = $mol_type_enforce<
		`Mn-Fe-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EIHBLAXX = $mol_type_enforce<
		`Ca-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__58TCUIQW = $mol_type_enforce<
		`Pd-Ru-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L2IEB02X = $mol_type_enforce<
		`Ce-Hf-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UNHPACMZ = $mol_type_enforce<
		`La-Pm-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y26CHGUP = $mol_type_enforce<
		`Tb-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U3BRQ7Y4 = $mol_type_enforce<
		`Ba-Eu-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F2CIFAO8 = $mol_type_enforce<
		`Ta-Bi-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q7VKP1H4 = $mol_type_enforce<
		`Nd-Dy-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VATT4MZQ = $mol_type_enforce<
		`Tl-B-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DV6VAB8T = $mol_type_enforce<
		`Li-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JNQX6FJA = $mol_type_enforce<
		`Li-La-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YR10VY6Z = $mol_type_enforce<
		`Al-Sn-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TXHU4XJY = $mol_type_enforce<
		`Ce-Pm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S7591UL8 = $mol_type_enforce<
		`Ni-Au-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BEF2KWXD = $mol_type_enforce<
		`Er-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QH6VJAKQ = $mol_type_enforce<
		`Pr-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MMI0U7X7 = $mol_type_enforce<
		`La-Nd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__06MTPXSP = $mol_type_enforce<
		`Ni-Ag-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VMCU7WAQ = $mol_type_enforce<
		`La-Ce-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1KOXNHOS = $mol_type_enforce<
		`La-Yb-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FRRRG5UN = $mol_type_enforce<
		`Pm-Nd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O98XF3XP = $mol_type_enforce<
		`Ce-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WRKY2INN = $mol_type_enforce<
		`Eu-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GWEWZFT1 = $mol_type_enforce<
		`Pm-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U4F56MI3 = $mol_type_enforce<
		`Ce-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D3QCQFFS = $mol_type_enforce<
		`Li-Cu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D5RGVP4A = $mol_type_enforce<
		`Sm-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__POZKTNQW = $mol_type_enforce<
		`Tb-Nd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K96PD9IR = $mol_type_enforce<
		`Nd-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QVPUV06K = $mol_type_enforce<
		`Rb-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8EUOAXUA = $mol_type_enforce<
		`Pr-Y-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OQQ7U401 = $mol_type_enforce<
		`Y-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OE2QCPT0 = $mol_type_enforce<
		`Cd-Mo-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LIEUWGOK = $mol_type_enforce<
		`Li-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QZA9GO3P = $mol_type_enforce<
		`V-Cu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TO6QLAQJ = $mol_type_enforce<
		`Pm-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NPD7QTZL = $mol_type_enforce<
		`Yb-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0D22ZC3H = $mol_type_enforce<
		`Tb-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DEJPQTUS = $mol_type_enforce<
		`Ca-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__URZ82HK5 = $mol_type_enforce<
		`Tb-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y80PRRKO = $mol_type_enforce<
		`Y-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RPOYJHRA = $mol_type_enforce<
		`Rb-Li-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DUFX940T = $mol_type_enforce<
		`Hg-Sb-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D0UPQDT6 = $mol_type_enforce<
		`La-Dy-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RQM2HWXW = $mol_type_enforce<
		`Pd-Rh-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BNN9YUNB = $mol_type_enforce<
		`K-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QP4NCCFS = $mol_type_enforce<
		`Li-La-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CGG71ZU2 = $mol_type_enforce<
		`Pr-Dy-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MO3ZL37S = $mol_type_enforce<
		`Yb-Pr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NVRR7Q1H = $mol_type_enforce<
		`La-Nd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7H0WAFCD = $mol_type_enforce<
		`Sm-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QDO6E4YX = $mol_type_enforce<
		`Ce-Eu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DRHDNC5A = $mol_type_enforce<
		`Nd-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z0I9D8JK = $mol_type_enforce<
		`Ag-Ir-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M0AXFRL3 = $mol_type_enforce<
		`Pm-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__891ZHKHY = $mol_type_enforce<
		`Yb-Dy-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MM8TLZBR = $mol_type_enforce<
		`U-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W81ZS9W1 = $mol_type_enforce<
		`Ca-Tb-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V4S3ZVC2 = $mol_type_enforce<
		`Tb-Yb-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2LYPDSS4 = $mol_type_enforce<
		`Ce-Pm-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0ABX9FXQ = $mol_type_enforce<
		`Sr-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SF6C6CHD = $mol_type_enforce<
		`Co-Ni-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2DGRHW74 = $mol_type_enforce<
		`Rb-Mg-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1N5ZG5A0 = $mol_type_enforce<
		`Ti-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6TIPBEC7 = $mol_type_enforce<
		`Th-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__86DN3Q8X = $mol_type_enforce<
		`Yb-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QI9K7WDR = $mol_type_enforce<
		`Ta-Cu-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DKBYL797 = $mol_type_enforce<
		`La-Yb-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1E1LX2UB = $mol_type_enforce<
		`Pr-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U6J5YPYO = $mol_type_enforce<
		`Rb-Na-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D9595PR3 = $mol_type_enforce<
		`Ce-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LKMOU3XH = $mol_type_enforce<
		`Ce-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TS5QTLUT = $mol_type_enforce<
		`Eu-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QJONQSPZ = $mol_type_enforce<
		`La-Ho-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D7JVKFVT = $mol_type_enforce<
		`Cd-Ga-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QFAZ7XL9 = $mol_type_enforce<
		`Eu-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KZVWL995 = $mol_type_enforce<
		`Nd-Gd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__12TLS2NB = $mol_type_enforce<
		`Na-Li-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__07HTGYBR = $mol_type_enforce<
		`Tb-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HH3WA4D5 = $mol_type_enforce<
		`Th-Sc-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EGMAMJ2W = $mol_type_enforce<
		`Lu-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DFJQGX9I = $mol_type_enforce<
		`Tb-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5EYZ7XNM = $mol_type_enforce<
		`Tb-Sm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WC4IK2XI = $mol_type_enforce<
		`Dy-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X7GD9M2F = $mol_type_enforce<
		`Rb-Li-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M4I7ZP9C = $mol_type_enforce<
		`Li-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J7UUI2NC = $mol_type_enforce<
		`Re-Tc-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H4EJWELG = $mol_type_enforce<
		`Pm-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2I96AXJK = $mol_type_enforce<
		`La-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WGCOBP96 = $mol_type_enforce<
		`La-Dy-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OZTDJI6B = $mol_type_enforce<
		`Mg-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LDBFHESI = $mol_type_enforce<
		`Nd-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T0W8C1KM = $mol_type_enforce<
		`Dy-Y-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WRGFL0D8 = $mol_type_enforce<
		`Tb-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5E6L8RKR = $mol_type_enforce<
		`Pd-Pt-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GR8UBQRG = $mol_type_enforce<
		`Cs-Rb-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z2MYYR09 = $mol_type_enforce<
		`Ca-Nd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1JTNWJ4K = $mol_type_enforce<
		`La-Pm-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IL58SUX0 = $mol_type_enforce<
		`Sm-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JPWTI0JE = $mol_type_enforce<
		`Hg-Bi-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5PHRSUIV = $mol_type_enforce<
		`Co-Ag-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MBFX25A9 = $mol_type_enforce<
		`Ce-Pm-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__04J560FN = $mol_type_enforce<
		`Cu-Re-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6RMX9M50 = $mol_type_enforce<
		`La-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CBMSCNTE = $mol_type_enforce<
		`Ba-Pr-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7T8DCJ50 = $mol_type_enforce<
		`La-Yb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MWV8HG35 = $mol_type_enforce<
		`Li-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FTPIJEN5 = $mol_type_enforce<
		`Th-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__12TPPW3W = $mol_type_enforce<
		`Li-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RXTGRSQE = $mol_type_enforce<
		`Zn-Si-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P3460030 = $mol_type_enforce<
		`Sc-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PYJQ0J48 = $mol_type_enforce<
		`Sm-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DZQ6E7JF = $mol_type_enforce<
		`Li-La-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UTOXVB03 = $mol_type_enforce<
		`Li-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7HQCL33U = $mol_type_enforce<
		`Y-Hf-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QRDRV6UK = $mol_type_enforce<
		`Ti-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WCQ5LKFG = $mol_type_enforce<
		`Sm-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0TTV1RL6 = $mol_type_enforce<
		`Li-Cu-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9D3NZNEU = $mol_type_enforce<
		`Ce-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MR760YOS = $mol_type_enforce<
		`Tm-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TN2IEKO2 = $mol_type_enforce<
		`Yb-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZQ3J1AYX = $mol_type_enforce<
		`Ca-Yb-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HSBMUCSC = $mol_type_enforce<
		`Ce-Eu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TWXB8L7F = $mol_type_enforce<
		`Nd-Er-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WN1AFOCZ = $mol_type_enforce<
		`Hf-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__16O8F1I9 = $mol_type_enforce<
		`Co-Ag-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LVZ7PG08 = $mol_type_enforce<
		`Co-Ir-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y2W1NMQ2 = $mol_type_enforce<
		`Ca-Mn-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2PFJ43YQ = $mol_type_enforce<
		`Pu-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6U15ZVLU = $mol_type_enforce<
		`V-Bi-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QHZCL57T = $mol_type_enforce<
		`Y-Hf-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IJLE94I8 = $mol_type_enforce<
		`Dy-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NBU6JAUA = $mol_type_enforce<
		`Ce-Sm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__POV1LZ6U = $mol_type_enforce<
		`Ni-Ir-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F4JQOCAH = $mol_type_enforce<
		`Re-Os-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PUOLW1MN = $mol_type_enforce<
		`Ce-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J0S98NVJ = $mol_type_enforce<
		`Er-Hf-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YVOQ12HY = $mol_type_enforce<
		`Cr-Fe-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AEPPDDSO = $mol_type_enforce<
		`Li-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LRZPEXUT = $mol_type_enforce<
		`Eu-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SNN909A0 = $mol_type_enforce<
		`Yb-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0AM56IY4 = $mol_type_enforce<
		`Ga-Ge-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HVX0KOXS = $mol_type_enforce<
		`Eu-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WP3TIY5W = $mol_type_enforce<
		`Li-Pr-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VCQJRJ9K = $mol_type_enforce<
		`Yb-Pr-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9MIBZOYW = $mol_type_enforce<
		`Sm-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VGG9SHJL = $mol_type_enforce<
		`La-Nd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8M8U0VW5 = $mol_type_enforce<
		`Ce-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VDI8OHRA = $mol_type_enforce<
		`Li-Pm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0EMP5T6X = $mol_type_enforce<
		`Y-Sc-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0PW80R89 = $mol_type_enforce<
		`Pr-Sm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RFJCGR1E = $mol_type_enforce<
		`Pr-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y0RVQBRM = $mol_type_enforce<
		`Re-Tc-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__10L1495A = $mol_type_enforce<
		`Nd-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LY2ZKIY8 = $mol_type_enforce<
		`Tl-In-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HKADEXBP = $mol_type_enforce<
		`Yb-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NIE11Q43 = $mol_type_enforce<
		`Tb-Pr-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0GPW0AG0 = $mol_type_enforce<
		`Mn-Fe-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DZF2F00A = $mol_type_enforce<
		`Ce-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M6MIZ06O = $mol_type_enforce<
		`K-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PTY96YWW = $mol_type_enforce<
		`Ce-Sm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ITNE2RY5 = $mol_type_enforce<
		`Ni-Ag-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__43WSN4XP = $mol_type_enforce<
		`K-Mg-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5XBWDCT1 = $mol_type_enforce<
		`Tb-Nd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IK3S4NRP = $mol_type_enforce<
		`Pu-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QR6JXFYH = $mol_type_enforce<
		`La-Gd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HTTF0JJ0 = $mol_type_enforce<
		`Pm-Nd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9A3MV6E5 = $mol_type_enforce<
		`La-Dy-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VGM0JNE6 = $mol_type_enforce<
		`Tb-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__07P26A39 = $mol_type_enforce<
		`Cu-Tc-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H23KDKDY = $mol_type_enforce<
		`Li-Tb-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0VDUDHUX = $mol_type_enforce<
		`Tb-Sm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4NJU6RJ0 = $mol_type_enforce<
		`Sr-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7DFW0NNB = $mol_type_enforce<
		`Pm-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5WGL094J = $mol_type_enforce<
		`K-Rb-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NTS26JS9 = $mol_type_enforce<
		`Gd-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GRUK218E = $mol_type_enforce<
		`Y-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FWQJQ1H8 = $mol_type_enforce<
		`Ce-Eu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2S82PU2Z = $mol_type_enforce<
		`Yb-Nd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__544WM1QH = $mol_type_enforce<
		`Er-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VVMLVXHA = $mol_type_enforce<
		`Pr-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3K8HIANC = $mol_type_enforce<
		`Eu-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FP37LDDY = $mol_type_enforce<
		`Gd-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JFTTCTVS = $mol_type_enforce<
		`Li-Ce-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3JO2M439 = $mol_type_enforce<
		`Na-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QT75W76H = $mol_type_enforce<
		`Sm-Gd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UXHYBVJF = $mol_type_enforce<
		`La-Pr-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HN8BJYAQ = $mol_type_enforce<
		`Ga-Re-Hg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PZKTDUUR = $mol_type_enforce<
		`Li-La-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U9EDF4OE = $mol_type_enforce<
		`Co-Ni-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HT2029BL = $mol_type_enforce<
		`La-Tb-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7C3MD729 = $mol_type_enforce<
		`Yb-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HEM5DO9R = $mol_type_enforce<
		`Er-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__58NONEC7 = $mol_type_enforce<
		`Tl-Ga-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZVOP7XVG = $mol_type_enforce<
		`Yb-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FPEH7FJI = $mol_type_enforce<
		`Co-Ag-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YQOM8O9I = $mol_type_enforce<
		`Li-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K43KNKTM = $mol_type_enforce<
		`Rb-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DI5FN0OP = $mol_type_enforce<
		`K-Li-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KNX6ICTA = $mol_type_enforce<
		`Dy-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OP5U6PQM = $mol_type_enforce<
		`Pu-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__71JD7REG = $mol_type_enforce<
		`Li-La-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2R2EPX34 = $mol_type_enforce<
		`Tb-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__81E3MQ79 = $mol_type_enforce<
		`La-Pr-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C60TD7X4 = $mol_type_enforce<
		`Tb-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6Q762VBY = $mol_type_enforce<
		`Tb-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T9GN7HNY = $mol_type_enforce<
		`Ba-Ca-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6IIQROXB = $mol_type_enforce<
		`Gd-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HBGTN6QQ = $mol_type_enforce<
		`Ta-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q8F79Y53 = $mol_type_enforce<
		`La-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QR36VGAS = $mol_type_enforce<
		`La-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5VGZR08N = $mol_type_enforce<
		`Ge-B-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JAYLO2CT = $mol_type_enforce<
		`Li-Pr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QO9C9ENV = $mol_type_enforce<
		`Cu-Pt-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U4Z5INEA = $mol_type_enforce<
		`La-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MO0AJGRD = $mol_type_enforce<
		`Tb-Pr-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G6LS7P6D = $mol_type_enforce<
		`Eu-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U90X2ACH = $mol_type_enforce<
		`Ce-Tm-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PGYGYFBA = $mol_type_enforce<
		`Pr-Tm-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7L3UOD7R = $mol_type_enforce<
		`La-Gd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6VDXJSZO = $mol_type_enforce<
		`Pm-Pr-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ALINJC8H = $mol_type_enforce<
		`Sm-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PUJFCT4K = $mol_type_enforce<
		`Mn-Ni-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IHNSPRF0 = $mol_type_enforce<
		`Ce-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7GKC64ST = $mol_type_enforce<
		`Rb-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GR2RHH5N = $mol_type_enforce<
		`La-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V6KSFERL = $mol_type_enforce<
		`Ca-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8Y05LKO2 = $mol_type_enforce<
		`Sm-Lu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KCQK5IGN = $mol_type_enforce<
		`Li-V-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__88BPGP7W = $mol_type_enforce<
		`Y-Er-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FK41OOSQ = $mol_type_enforce<
		`Nd-Dy-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TDDMPCP8 = $mol_type_enforce<
		`Pm-Pr-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RXBGSP0V = $mol_type_enforce<
		`Mg-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5NOPKZK0 = $mol_type_enforce<
		`La-Yb-Eu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0UM8JBB8 = $mol_type_enforce<
		`Gd-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M8HN8IWK = $mol_type_enforce<
		`Eu-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EUKSE8WY = $mol_type_enforce<
		`Tb-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0LXLG8CU = $mol_type_enforce<
		`Cs-Rb-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9IMX2T09 = $mol_type_enforce<
		`Tb-Pr-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1PZZHHK9 = $mol_type_enforce<
		`Cd-Bi-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WE52IHW1 = $mol_type_enforce<
		`Cu-Ir-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MJHRN2VX = $mol_type_enforce<
		`Gd-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JTVMUSPD = $mol_type_enforce<
		`Pr-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A597ZFZ0 = $mol_type_enforce<
		`La-Nd-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GOP903B6 = $mol_type_enforce<
		`Y-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7ATS1RED = $mol_type_enforce<
		`Ni-Ag-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DYS8Y4A9 = $mol_type_enforce<
		`K-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LAHMYFAQ = $mol_type_enforce<
		`Nd-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BJUL6SZQ = $mol_type_enforce<
		`Pr-Nd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PQ13W90Q = $mol_type_enforce<
		`La-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZTQRH3IF = $mol_type_enforce<
		`Yb-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EHKZULF7 = $mol_type_enforce<
		`Dy-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PHHQK65S = $mol_type_enforce<
		`La-Nd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__23LOA5QW = $mol_type_enforce<
		`Ce-Pr-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7KWPMNSE = $mol_type_enforce<
		`Ce-Nd-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OSJID23G = $mol_type_enforce<
		`Y-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GVXUUBAE = $mol_type_enforce<
		`Tl-Ni-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MWMYOH9K = $mol_type_enforce<
		`Nd-Gd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VFH1IEAT = $mol_type_enforce<
		`K-Li-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W257DBAA = $mol_type_enforce<
		`Li-Ce-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TT5E1GJ2 = $mol_type_enforce<
		`Mn-Ni-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M8G6RXR1 = $mol_type_enforce<
		`Ho-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SN6RTL7W = $mol_type_enforce<
		`Pm-Dy-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q8WULBGF = $mol_type_enforce<
		`Ce-Sm-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HPQJ7I5A = $mol_type_enforce<
		`Ni-Os-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZGDLKASX = $mol_type_enforce<
		`Cr-Mo-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E3E4ULCF = $mol_type_enforce<
		`Er-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FLILS048 = $mol_type_enforce<
		`Ce-Nd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4X99QGKH = $mol_type_enforce<
		`Zn-Ga-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NSA9FNOD = $mol_type_enforce<
		`Sm-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZD1VJM9I = $mol_type_enforce<
		`Eu-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J8FOX9H5 = $mol_type_enforce<
		`Fe-Pd-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__13GZZLAY = $mol_type_enforce<
		`Co-Re-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CU8RN1WN = $mol_type_enforce<
		`Sm-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AMVLOJ7K = $mol_type_enforce<
		`Fe-Cu-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZFX4MTKL = $mol_type_enforce<
		`Tm-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1YCFYZFW = $mol_type_enforce<
		`Ta-Nb-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UXOZR1S8 = $mol_type_enforce<
		`Ho-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RH6NXQ2X = $mol_type_enforce<
		`Li-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__105RHBEX = $mol_type_enforce<
		`Yb-Er-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X9L9L16X = $mol_type_enforce<
		`Fe-Ni-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FQZL346L = $mol_type_enforce<
		`Nd-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EW4T9JLA = $mol_type_enforce<
		`La-Pr-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7MFL6MOH = $mol_type_enforce<
		`Mg-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0NLOYZSJ = $mol_type_enforce<
		`La-Pr-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VVQ9TY47 = $mol_type_enforce<
		`Y-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__83352C8K = $mol_type_enforce<
		`Cu-Ni-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S8R98K28 = $mol_type_enforce<
		`Rb-Li-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UOWDP3LA = $mol_type_enforce<
		`Li-Ho-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BB9LKCUT = $mol_type_enforce<
		`Fe-Ag-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7TN3TY8W = $mol_type_enforce<
		`Eu-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__07EVPSLR = $mol_type_enforce<
		`Nd-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W37P692W = $mol_type_enforce<
		`Pm-Pr-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9C3DLWLE = $mol_type_enforce<
		`Sm-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1PQMKVAK = $mol_type_enforce<
		`Zn-Ga-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BVN2BC6L = $mol_type_enforce<
		`Tl-Ga-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FN0U139V = $mol_type_enforce<
		`La-Tb-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HQ4N845X = $mol_type_enforce<
		`Tm-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DDOOR67W = $mol_type_enforce<
		`Sr-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GNXMEQ1J = $mol_type_enforce<
		`Y-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T1JDVGIV = $mol_type_enforce<
		`Tb-Yb-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A2HO9GUT = $mol_type_enforce<
		`La-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PC2LG6KJ = $mol_type_enforce<
		`Dy-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VSILL3SS = $mol_type_enforce<
		`Cs-Hf-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UWRFV7Q0 = $mol_type_enforce<
		`Ba-Sm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2VBU2OA5 = $mol_type_enforce<
		`Pr-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AM6NJY9T = $mol_type_enforce<
		`Nd-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T6AGR3AN = $mol_type_enforce<
		`Tm-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LMF4V1T5 = $mol_type_enforce<
		`Li-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UJ7IHR8B = $mol_type_enforce<
		`Gd-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QJ2JK4LP = $mol_type_enforce<
		`Ti-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T6R4G5V3 = $mol_type_enforce<
		`Sc-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R1ECZGKG = $mol_type_enforce<
		`La-Sm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BUOJYQD2 = $mol_type_enforce<
		`Ce-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AFYABAWV = $mol_type_enforce<
		`Y-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WXQHEWVV = $mol_type_enforce<
		`Sm-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O18U5U67 = $mol_type_enforce<
		`Tb-Sm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__REHL2VGT = $mol_type_enforce<
		`Li-Tb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LK6K5MEO = $mol_type_enforce<
		`Ho-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BIMQABGI = $mol_type_enforce<
		`Sm-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GG7ASBKS = $mol_type_enforce<
		`Nd-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZG4DB8X7 = $mol_type_enforce<
		`Na-Li-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SG7CYL6Q = $mol_type_enforce<
		`K-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J1DTZFDP = $mol_type_enforce<
		`Mn-Tl-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BAG6QPKK = $mol_type_enforce<
		`Hg-B-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EMMSXZYT = $mol_type_enforce<
		`Er-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__82N78SGR = $mol_type_enforce<
		`Pu-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WVDUQC00 = $mol_type_enforce<
		`Ca-La-Ce`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IMDODNY7 = $mol_type_enforce<
		`Eu-Hf-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NBC48LCK = $mol_type_enforce<
		`Os-Ru-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LB3G87M6 = $mol_type_enforce<
		`La-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XHOO5MZW = $mol_type_enforce<
		`V-Ag-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I2JNIKW2 = $mol_type_enforce<
		`Ba-Pr-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__83KBNMME = $mol_type_enforce<
		`Nd-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NNZLE10S = $mol_type_enforce<
		`Pr-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2U37J4IH = $mol_type_enforce<
		`Y-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0E1LVMFT = $mol_type_enforce<
		`Tb-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C8K6MQH6 = $mol_type_enforce<
		`Ce-Nd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VJLI9YTG = $mol_type_enforce<
		`Pt-Rh-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HEFF10DR = $mol_type_enforce<
		`Er-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__38SC0RC9 = $mol_type_enforce<
		`Ba-La-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BJ4ZVADI = $mol_type_enforce<
		`Pr-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VGEL6TYN = $mol_type_enforce<
		`Sm-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UFWP6QU6 = $mol_type_enforce<
		`Ga-Re-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8CK06ESN = $mol_type_enforce<
		`Ho-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OK69HDO1 = $mol_type_enforce<
		`Al-Tl-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WR3WU1AM = $mol_type_enforce<
		`Dy-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5F808K31 = $mol_type_enforce<
		`Na-Sr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2NQQX7NA = $mol_type_enforce<
		`Cd-Si-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NO9EWADJ = $mol_type_enforce<
		`Tb-Pr-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GHVGUFAZ = $mol_type_enforce<
		`Ba-Gd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KOZ3T8X0 = $mol_type_enforce<
		`Ca-Tb-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q1QADQ9K = $mol_type_enforce<
		`Cu-Ag-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8LF9PMTQ = $mol_type_enforce<
		`Co-Cu-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9WEQQ4GU = $mol_type_enforce<
		`Pm-Dy-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KKR3D06Z = $mol_type_enforce<
		`Zn-Cd-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CCGQSGD3 = $mol_type_enforce<
		`La-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QOE0Q08V = $mol_type_enforce<
		`Sr-Ca-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PJASUB34 = $mol_type_enforce<
		`Dy-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__61KNNSPS = $mol_type_enforce<
		`Eu-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RRIW3QV2 = $mol_type_enforce<
		`Ca-Pm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4KWEEFDL = $mol_type_enforce<
		`Eu-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GBBLF3KN = $mol_type_enforce<
		`Cu-Os-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AOKFCVHP = $mol_type_enforce<
		`Be-In-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QHHD19B9 = $mol_type_enforce<
		`La-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C8R36OY4 = $mol_type_enforce<
		`Nd-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__07GVP7R1 = $mol_type_enforce<
		`Ca-Ce-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E6PXZ2TU = $mol_type_enforce<
		`Yb-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PAZE6DZP = $mol_type_enforce<
		`Ca-La-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TYZNE4LH = $mol_type_enforce<
		`Li-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M1QRMS6Y = $mol_type_enforce<
		`Al-Tl-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5DIP5RLH = $mol_type_enforce<
		`Li-Ce-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__92GISFWF = $mol_type_enforce<
		`Li-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KMOFLL7F = $mol_type_enforce<
		`Pr-Nd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IAFUQN1N = $mol_type_enforce<
		`Yb-Nd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__COPQ91EJ = $mol_type_enforce<
		`Li-Ce-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X9CM8Q62 = $mol_type_enforce<
		`Pm-Dy-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TMSXNLIX = $mol_type_enforce<
		`Dy-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0JBCA52X = $mol_type_enforce<
		`Ca-Mn-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SP3140JC = $mol_type_enforce<
		`Cs-Mg-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RS9WJE0Z = $mol_type_enforce<
		`Ce-Eu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2682Y54Y = $mol_type_enforce<
		`Tb-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J40WYSLT = $mol_type_enforce<
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

	type $mol_view__render__RML0XHDI = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['draw'] >
		,
		ReturnType< $mol_view['render'] >
	>
	type $mol_view__sub__CBTQSGZV = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub__GSBDQ32S = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mpds_visavis_plot_legend_cmp__labels__5VGCP1TK = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['cmp_labels'] >
		,
		ReturnType< $mpds_visavis_plot_legend_cmp['labels'] >
	>
	type $mpds_visavis_plot_legend_cmp__colorset__0CUCG0HF = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['colorset'] >
		,
		ReturnType< $mpds_visavis_plot_legend_cmp['colorset'] >
	>
	type $mol_view__sub__RH2MJCD2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__style__ELUQL2FR = $mol_type_enforce<
		({ 
			'background': ReturnType< $mpds_visavis_plot_matrix['heatmap_color'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__sub__D8JGKH08 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows__QHVNM7GO = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['heatmap_color_list'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub__GBE04C9O = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_view__sub__WIEV9GRL = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['plot_body'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_check_box__title__WM667LIS = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked__C3G66CJB = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['fixel_checked'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_check_box__hint__6B2NN5DQ = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['hint'] >
	>
	type $mol_check_box__title__OR8SIK0Z = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked__49WDGLIF = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['nonformers_checked'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_check_box__title__N4RUP32X = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked__GA9PHS55 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['intersection_only'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_switch__value__WAR3VSRQ = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['sort_control'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options__95LL5IYB = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['sort_dict'] >
		,
		ReturnType< $mol_switch['options'] >
	>
	type $mol_labeler__title__626ATP16 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__405WMD5F = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['Order_switch'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_select__value__2W65APGU = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['x_sort'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__dictionary__PRKWTK8C = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['sort_dict'] >
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_labeler__title__2YDYUPKX = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__EF3QQQIN = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['X_sort'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_select__value__KSMVH64F = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['y_sort'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__dictionary__5MH6BX22 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['sort_dict'] >
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_labeler__title__CUHT10VB = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__WQQXXC2O = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['Y_sort'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_select__value__E6ET91J7 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['x_op_str'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__dictionary__9IKII86G = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['op_dict'] >
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_labeler__title__30C8EHP7 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__8H52IL2F = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['X_op'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_select__value__DSK036BJ = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['y_op_str'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__dictionary__OR3UQQIT = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['op_dict'] >
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_labeler__title__NJLZO2K8 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__92WKWXYL = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['Y_op'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_view__sub__AEQSID78 = $mol_type_enforce<
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
        draw_row_cells(row_node: SVGElement, cells_data: Matrix_cell[], intersection_only: boolean): void;
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
        reordered_state: {
            nonformers_checked: boolean;
            intersection_only: boolean;
        };
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

	type $mpds_visavis_lib_plotly_view__data__2L7UZBBO = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['data_shown'] >
		,
		ReturnType< $mpds_visavis_lib_plotly_view['data'] >
	>
	type $mpds_visavis_lib_plotly_view__layout__YYCY2CHN = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['layout'] >
		,
		ReturnType< $mpds_visavis_lib_plotly_view['layout'] >
	>
	type $mpds_visavis_lib_plotly_view__plot_options__I5ZPFXRB = $mol_type_enforce<
		({ 
			'displaylogo': boolean,
			'displayModeBar': boolean,
			'staticPlot': boolean,
		}) 
		,
		ReturnType< $mpds_visavis_lib_plotly_view['plot_options'] >
	>
	type $mpds_visavis_plot_legend_cmp__labels__C00ZQPPS = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['cmp_labels'] >
		,
		ReturnType< $mpds_visavis_plot_legend_cmp['labels'] >
	>
	type $mpds_visavis_plot_legend_cmp__colorset__OCB10LMJ = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['colorset'] >
		,
		ReturnType< $mpds_visavis_plot_legend_cmp['colorset'] >
	>
	type $mol_view__sub__P3RJ47O7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__style__I8R8X96A = $mol_type_enforce<
		({ 
			'background': ReturnType< $mpds_visavis_plot_cube['heatmap_color'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__sub__MZZMLXBV = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows__JZQP78VM = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['heatmap_color_list'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub__R9QN7ZRO = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_view__sub__IQNRQ7VX = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['plot_body'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_check_box__title__Z9B6XPFL = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked__1JZZJPQT = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['fixel_checked'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_check_box__hint__5G1HIZ6H = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['hint'] >
	>
	type $mol_check_box__title__JXD6X482 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked__EM1CA7ME = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['nonformers_checked'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_check_box__title__7COPH10S = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked__X2ADF7AL = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['intersection_only'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_select__value__FUQCSJE2 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['x_sort'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__dictionary__R3LUCCU8 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['sort_dict'] >
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_labeler__title__AQVLPGYB = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__CD1UPRGT = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['X_order_select'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_select__value__UT72W7LN = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['y_sort'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__dictionary__8SMP60SI = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['sort_dict'] >
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_labeler__title__E51DDJPG = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__ONLGM6JU = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['Y_order_select'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_select__value__W5PLW9ZS = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['z_sort'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__dictionary__EF0FHN33 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['sort_dict'] >
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_labeler__title__82QN4NLC = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__85YL64YI = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['Z_order_select'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_view__sub__1D01U2FW = $mol_type_enforce<
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
        heatmap_diif(): boolean;
        heatmap(): boolean;
        heatmap_color(index: number): any;
        heatmap_color_list(): $mol_view[];
        marker_heatmap(values: readonly number[]): {
            color: readonly number[];
            colorscale: string;
            size: number;
            opacity: number;
        };
        marker(color_id: number): {
            color: readonly number[];
            colorscale: string;
            size: number;
            opacity: number;
        } | {
            color: any;
            size: number;
            opacity: number;
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
                color: readonly number[];
                colorscale: string;
                size: number;
                opacity: number;
            } | {
                color: any;
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
        points_traversed(): {
            intersects: {
                marker: {
                    color: readonly number[];
                    colorscale: string;
                    size: number;
                    opacity: number;
                } | {
                    color: any;
                    size: number;
                    opacity: number;
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
            no_intersects: Map<number, {
                marker: {
                    color: readonly number[];
                    colorscale: string;
                    size: number;
                    opacity: number;
                } | {
                    color: any;
                    size: number;
                    opacity: number;
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
            value_min: number;
            value_max: number;
            diff_value_min: number;
            diff_value_max: number;
        };
        scatters_no_intersect(): Map<number, {
            marker: {
                color: readonly number[];
                colorscale: string;
                size: number;
                opacity: number;
            } | {
                color: any;
                size: number;
                opacity: number;
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
        intersects_colored(): {
            marker: {
                color: readonly number[];
                colorscale: string;
                size: number;
                opacity: number;
            } | {
                color: string;
                size: number;
                opacity: number;
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

	type $mol_view__sub__IUI2BS7E = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mpds_visavis_lib_plotly_view__data__743UPFYE = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_phase['data'] >
		,
		ReturnType< $mpds_visavis_lib_plotly_view['data'] >
	>
	type $mpds_visavis_lib_plotly_view__layout__DHSLOLUT = $mol_type_enforce<
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

	type $mpds_visavis_lib_plotly_view__data__P7PD6VSU = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_discovery['data'] >
		,
		ReturnType< $mpds_visavis_lib_plotly_view['data'] >
	>
	type $mpds_visavis_lib_plotly_view__layout__V6L7CWNY = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_discovery['layout'] >
		,
		ReturnType< $mpds_visavis_lib_plotly_view['layout'] >
	>
	type $mpds_visavis_plot_legend_cmp__labels__A2CW3NHM = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_discovery['cmp_labels'] >
		,
		ReturnType< $mpds_visavis_plot_legend_cmp['labels'] >
	>
	type $mpds_visavis_plot_legend_cmp__colorset__O9N69TB7 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_discovery['colorset'] >
		,
		ReturnType< $mpds_visavis_plot_legend_cmp['colorset'] >
	>
	type $mol_check_list__option_checked__4RCUFOJC = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_discovery['elemental_checked'] >
		,
		ReturnType< $mol_check_list['option_checked'] >
	>
	type $mol_check_list__options__CAXJTEFN = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_discovery['elementals_dict'] >
		,
		ReturnType< $mol_check_list['options'] >
	>
	type $mol_labeler__title__HLA5W92S = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__KEDU0LS8 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_discovery['Elementals_check'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_view__sub__LS53HTE7 = $mol_type_enforce<
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
        x_title(): "P, GPa" | "T, K";
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
                title: "P, GPa" | "T, K";
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

	type $mol_vector_2d__YH48PHN9 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__7R4MAJWX = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__CCR585Q5 = $mol_type_enforce<
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

	type $mpds_visavis_plot_graph_pan__QZC8DIXF = $mol_type_enforce<
		Parameters< $mpds_visavis_plot_graph['pan'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot_graph['Touch'] >['pan'] >[0]
	>
	type $mol_touch__allow_draw__S5CBTED7 = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_touch['allow_draw'] >
	>
	type $mol_touch__allow_pan__Z5U4TJVR = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_graph['allow_pan'] >
		,
		ReturnType< $mol_touch['allow_pan'] >
	>
	type $mol_svg_root__view_box__Z68B1I9K = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_graph['view_box'] >
		,
		ReturnType< $mol_svg_root['view_box'] >
	>
	type $mol_svg_root__auto__NQ9YUOX5 = $mol_type_enforce<
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
            innerHTML: string;
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
            getHTML(options?: GetHTMLOptions): string;
            hasAttribute(qualifiedName: string): boolean;
            hasAttributeNS(namespace: string | null, localName: string): boolean;
            hasAttributes(): boolean;
            hasPointerCapture(pointerId: number): boolean;
            insertAdjacentElement(where: InsertPosition, element: Element): Element | null;
            insertAdjacentHTML(position: InsertPosition, string: string): void;
            insertAdjacentText(where: InsertPosition, data: string): void;
            matches(selectors: string): boolean;
            releasePointerCapture(pointerId: number): void;
            removeAttribute(qualifiedName: string): void;
            removeAttributeNS(namespace: string | null, localName: string): void;
            removeAttributeNode(attr: Attr): Attr;
            requestFullscreen(options?: FullscreenOptions): Promise<void>;
            requestPointerLock(options?: PointerLockOptions): Promise<void>;
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
            oncontextlost: ((this: GlobalEventHandlers, ev: Event) => any) | null;
            oncontextmenu: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
            oncontextrestored: ((this: GlobalEventHandlers, ev: Event) => any) | null;
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

	type $mpds_visavis_plot_matrix_x_op__G9KK0MX1 = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['matrix_x_op'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Matrix'] >['x_op'] >[0]
	>
	type $mpds_visavis_plot_matrix_y_op__XICSMD3L = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['matrix_y_op'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Matrix'] >['y_op'] >[0]
	>
	type $mpds_visavis_plot_matrix_x_sort__JTC6MUKP = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['matrix_x_sort'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Matrix'] >['x_sort'] >[0]
	>
	type $mpds_visavis_plot_matrix_y_sort__JIVH72OX = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['matrix_y_sort'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Matrix'] >['y_sort'] >[0]
	>
	type $mpds_visavis_plot_matrix__plot_raw__A18VAMJC = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_matrix['plot_raw'] >
	>
	type $mpds_visavis_plot_matrix__multi_jsons__D8V4RFUH = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['multi_jsons'] >
		,
		ReturnType< $mpds_visavis_plot_matrix['multi_jsons'] >
	>
	type $mpds_visavis_plot_matrix__show_setup__D4FC0F5Z = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['show_setup'] >
		,
		ReturnType< $mpds_visavis_plot_matrix['show_setup'] >
	>
	type $mpds_visavis_plot_matrix__nonformers_checked__T4ET93A3 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['nonformers_checked'] >
		,
		ReturnType< $mpds_visavis_plot_matrix['nonformers_checked'] >
	>
	type $mpds_visavis_plot_matrix__fixel_checked__XCW3VL0F = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['matrix_fixel_checked'] >
		,
		ReturnType< $mpds_visavis_plot_matrix['fixel_checked'] >
	>
	type $mpds_visavis_plot_matrix__matrix_click__9HP2XZ8Y = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['matrix_click'] >
		,
		ReturnType< $mpds_visavis_plot_matrix['matrix_click'] >
	>
	type $mpds_visavis_plot_x_op__6BJC3L2I = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['x_op'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Cube'] >['x_op'] >[0]
	>
	type $mpds_visavis_plot_y_op__ABCYGH5M = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['y_op'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Cube'] >['y_op'] >[0]
	>
	type $mpds_visavis_plot_z_op__4CBSSZDN = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['z_op'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Cube'] >['z_op'] >[0]
	>
	type $mpds_visavis_plot_x_sort__Z2M64YWN = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['x_sort'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Cube'] >['x_sort'] >[0]
	>
	type $mpds_visavis_plot_y_sort__ZNPJ963W = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['y_sort'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Cube'] >['y_sort'] >[0]
	>
	type $mpds_visavis_plot_z_sort__ZA0OF5UE = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['z_sort'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Cube'] >['z_sort'] >[0]
	>
	type $mpds_visavis_plot_cube__plot_raw__L2UYK82Z = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_cube['plot_raw'] >
	>
	type $mpds_visavis_plot_cube__multi_jsons__FHZHF9VH = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['multi_jsons'] >
		,
		ReturnType< $mpds_visavis_plot_cube['multi_jsons'] >
	>
	type $mpds_visavis_plot_cube__show_setup__GYFBKUEM = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['show_setup'] >
		,
		ReturnType< $mpds_visavis_plot_cube['show_setup'] >
	>
	type $mpds_visavis_plot_cube__show_fixel__K9IMGM0E = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['show_fixel'] >
		,
		ReturnType< $mpds_visavis_plot_cube['show_fixel'] >
	>
	type $mpds_visavis_plot_cube__nonformers_checked__DZ6D7TJ1 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['nonformers_checked'] >
		,
		ReturnType< $mpds_visavis_plot_cube['nonformers_checked'] >
	>
	type $mpds_visavis_plot_cube__fixel_checked__0HCV5QHN = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['cube_fixel_checked'] >
		,
		ReturnType< $mpds_visavis_plot_cube['fixel_checked'] >
	>
	type $mpds_visavis_plot_cube__cube_click__DW0H330G = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['cube_click'] >
		,
		ReturnType< $mpds_visavis_plot_cube['cube_click'] >
	>
	type $mpds_visavis_plot_phase__plot_raw__FSMBZDEF = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_phase['plot_raw'] >
	>
	type $mpds_visavis_plot_phase__phase_click__B5I45TWQ = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['phase_click'] >
		,
		ReturnType< $mpds_visavis_plot_phase['phase_click'] >
	>
	type $mpds_visavis_plot_bar__plot_raw__J87IKBTZ = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_bar['plot_raw'] >
	>
	type $mpds_visavis_plot_bar__bar_click__6Y3WKZYC = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['bar_click'] >
		,
		ReturnType< $mpds_visavis_plot_bar['bar_click'] >
	>
	type $mpds_visavis_plot_discovery_elementals_on__4AMXRNOI = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['discovery_elementals_on'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Discovery'] >['elementals_on'] >[0]
	>
	type $mpds_visavis_plot_discovery__plot_raw__HFX3IH0C = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_discovery['plot_raw'] >
	>
	type $mpds_visavis_plot_discovery__json_cmp__MWXEYYV8 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['json_cmp'] >
		,
		ReturnType< $mpds_visavis_plot_discovery['json_cmp'] >
	>
	type $mpds_visavis_plot_discovery__show_setup__XFQBYV5B = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['show_setup'] >
		,
		ReturnType< $mpds_visavis_plot_discovery['show_setup'] >
	>
	type $mpds_visavis_plot_discovery__discovery_click__S7YI5SZY = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['discovery_click'] >
		,
		ReturnType< $mpds_visavis_plot_discovery['discovery_click'] >
	>
	type $mpds_visavis_plot_eigen__plot_raw__OCEFKEFF = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_eigen['plot_raw'] >
	>
	type $mpds_visavis_plot_pie__plot_raw__HE99FW7E = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_pie['plot_raw'] >
	>
	type $mpds_visavis_plot_pie__pie_click__DVRZA1VY = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['pie_click'] >
		,
		ReturnType< $mpds_visavis_plot_pie['pie_click'] >
	>
	type $mpds_visavis_plot_scatter__plot_raw__PRALL6WR = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_scatter['plot_raw'] >
	>
	type $mpds_visavis_plot_scatter__notify__5V8U6I0A = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['notify'] >
		,
		ReturnType< $mpds_visavis_plot_scatter['notify'] >
	>
	type $mpds_visavis_plot_customscatter__plot_raw__OWBVMM2Z = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_customscatter['plot_raw'] >
	>
	type $mpds_visavis_plot_customscatter__nplots_changed__A28UA1NK = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['nplots_changed'] >
		,
		ReturnType< $mpds_visavis_plot_customscatter['nplots_changed'] >
	>
	type $mpds_visavis_plot_customscatter__legend_click__O3MHWLBF = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['legend_click'] >
		,
		ReturnType< $mpds_visavis_plot_customscatter['legend_click'] >
	>
	type $mpds_visavis_plot_heatmap__plot_raw__TT3F80SB = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_heatmap['plot_raw'] >
	>
	type $mpds_visavis_plot_graph_rel__O5I95C5S = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['graph_rel'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Graph'] >['graph_rel'] >[0]
	>
	type $mpds_visavis_plot_graph__plot_raw__2Z98GQTP = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_graph['plot_raw'] >
	>
	type $mpds_visavis_plot_graph__graph_click__PI5LWIZ6 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['graph_click'] >
		,
		ReturnType< $mpds_visavis_plot_graph['graph_click'] >
	>
	type $mpds_visavis_plot_graph__notify__2YY6H0LV = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['notify'] >
		,
		ReturnType< $mpds_visavis_plot_graph['notify'] >
	>
	type $mol_locale_select__value__9NVPOPAC = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['locale'] >
		,
		ReturnType< $mol_locale_select['value'] >
	>
	type $mol_check__Icon__GBATAWPG = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['Expand_icon'] >
		,
		ReturnType< $mol_check['Icon'] >
	>
	type $mol_check__checked__XMM2YNLR = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['fullscreen'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_paragraph__title__QGEDKV8Z = $mol_type_enforce<
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

	type $mol_paragraph__title__ZXXSFVQC = $mol_type_enforce<
		string
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_paragraph__title__R2P7O2HH = $mol_type_enforce<
		string
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_button_open__accept__SBIAFPMI = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_open['accept'] >
	>
	type $mol_button_open__files__HL1X8RKT = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['files_read'] >
		,
		ReturnType< $mol_button_open['files'] >
	>
	type $mol_list__sub__XKISLO6J = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['sub'] >
	>
	type $mol_link__title__JBBHSEIB = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_link__arg__WRYXWP26 = $mol_type_enforce<
		({ 
			'section': string,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_list__rows__MVUGLAP0 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_drop__receive__MLKNENWP = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['drop_file'] >
		,
		ReturnType< $mol_drop['receive'] >
	>
	type $mol_drop__Sub__34RF8QUB = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['Start_page_content'] >
		,
		ReturnType< $mol_drop['Sub'] >
	>
	type $mol_link__title__AY0XCRUM = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_link__arg__2R09Z8EI = $mol_type_enforce<
		({ 
			'section': any,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__title__NWJE2F3S = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_link__arg__ZZKWN3G9 = $mol_type_enforce<
		({ 
			'section': string,
			'file': any,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link_iconed__uri__FZIZP20O = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['uri'] >
	>
	type $mol_link_iconed__title__U15X8NVR = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['title'] >
	>
	type $mol_paragraph__title__OEUEN119 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_button_open_native__accept__VFR2UFDP = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_open_native['accept'] >
	>
	type $mol_button_open_native__files__KT1N2SNW = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['files_read'] >
		,
		ReturnType< $mol_button_open_native['files'] >
	>
	type $mol_button_minor__sub__2JUQXTLG = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_drop__receive__1O07F47S = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['drop_file'] >
		,
		ReturnType< $mol_drop['receive'] >
	>
	type $mol_drop__Sub__L3F3KSCK = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['History_upload'] >
		,
		ReturnType< $mol_drop['Sub'] >
	>
	type $mol_button_minor__click__57AWBW5E = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['history_drop'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__LRJ4XWKH = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub__8Q4HV5MC = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows__9NQ41ZPM = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['history_rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_list__title__KY63RZE5 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_list['title'] >
	>
	type $mol_list__sub__K32WF5XJ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['sub'] >
	>
	type $mol_link__arg__E63ABB26 = $mol_type_enforce<
		({ 
			'file': ReturnType< $mpds_visavis_app['plot_id'] >,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__title__ZKDN6MUQ = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['plot_id'] >
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_list__title__5V2XOKP6 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_list['title'] >
	>
	type $mol_list__rows__A6PBCCWO = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['example_rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_page__title__J1QLJL7X = $mol_type_enforce<
		string
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__tools__5Z43TFJC = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__body__YDYUUCV0 = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['menu_body'] >
		,
		ReturnType< $mol_page['body'] >
	>
	type $mpds_visavis_plot__plot_raw__21TLVD01 = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot['plot_raw'] >
	>
	type $mpds_visavis_plot__show_setup__BH8JDHKX = $mol_type_enforce<
		boolean
		,
		ReturnType< $mpds_visavis_plot['show_setup'] >
	>
	type $mpds_visavis_plot__show_fixel__8PGH2F0E = $mol_type_enforce<
		boolean
		,
		ReturnType< $mpds_visavis_plot['show_fixel'] >
	>
	type $mpds_visavis_plot__show_demo_warn__KW8SRRT4 = $mol_type_enforce<
		boolean
		,
		ReturnType< $mpds_visavis_plot['show_demo_warn'] >
	>
	type $mol_page__title__REE74HQI = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['plot_id'] >
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__Body_content__CMTQN76D = $mol_type_enforce<
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
