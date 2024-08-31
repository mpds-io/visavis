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
    class $mol_after_frame extends $mol_object2 {
        task: () => void;
        static _promise: Promise<void> | null;
        static get promise(): Promise<void>;
        cancelled: boolean;
        promise: Promise<void>;
        constructor(task: () => void);
        destructor(): void;
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
    type $mol_type_keys_extract<Input, Upper, Lower = never> = {
        [Field in keyof Input]: unknown extends Input[Field] ? never : Input[Field] extends never ? never : Input[Field] extends Upper ? [
            Lower
        ] extends [Input[Field]] ? Field : never : never;
    }[keyof Input];
}

declare namespace $ {
    function $mol_log3_web_make(level: $mol_type_keys_extract<Console, Function>, color: string): (this: $, event: $mol_log3_event<{}>) => () => void;
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
    class $mol_window extends $mol_object {
        static size(): {
            width: number;
            height: number;
        };
        static resizes(next?: Event): Event | undefined;
    }
}

declare namespace $ {
    var $mol_dom_context: typeof globalThis;
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
    function $mol_maybe<Value>(value: Value | null | undefined): Value[];
}

declare namespace $ {
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

interface Window {
    cordova: any;
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

	type $mol_view__title__HX322DQX = $mol_type_enforce<
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

	type $mol_speck__value__5CD52WMX = $mol_type_enforce<
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

	type $mol_svg_path__geometry__5WXCABCJ = $mol_type_enforce<
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

	type $mol_button_open_native__files__FKQCVKV4 = $mol_type_enforce<
		ReturnType< $mol_button_open['files'] >
		,
		ReturnType< $mol_button_open_native['files'] >
	>
	type $mol_button_open_native__accept__EPO7J5BG = $mol_type_enforce<
		ReturnType< $mol_button_open['accept'] >
		,
		ReturnType< $mol_button_open_native['accept'] >
	>
	type $mol_button_open_native__multiple__7EF1GXA2 = $mol_type_enforce<
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

	type $mol_view__style__ZC9JWBAJ = $mol_type_enforce<
		({ 
			'paddingTop': ReturnType< $mol_list['gap_before'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__style__JJUBP366 = $mol_type_enforce<
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
        static href(next?: string): string;
        static href_normal(): string;
        static href_absolute(): string;
        static dict(next?: {
            [key: string]: string | null;
        }): Readonly<{
            [key: string]: string;
        }>;
        static dict_cut(except: string[]): {
            [key: string]: string;
        };
        static value(key: string, next?: string | null): string | null;
        static link(next: Record<string, string | null>): string;
        static prolog: string;
        static separator: string;
        static make_link(next: {
            [key: string]: string | null;
        }): string;
        static go(next: {
            [key: string]: string | null;
        }): void;
        static encode(str: string): string;
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

	type $mol_image__uri__EJLQL1RG = $mol_type_enforce<
		ReturnType< $mol_link_iconed['icon'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_image__title__TXTV4Z7Y = $mol_type_enforce<
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

	type $mol_view__dom_name__2OTQNQ32 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub__WLRFQVJ5 = $mol_type_enforce<
		ReturnType< $mol_page['title_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub__U1OGCI5S = $mol_type_enforce<
		ReturnType< $mol_page['tools'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_height__JAAJM3RG = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__dom_name__LZA7SJ6M = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub__3S8852Z7 = $mol_type_enforce<
		ReturnType< $mol_page['head'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_page_body_scroll_top__90934GWV = $mol_type_enforce<
		Parameters< $mol_page['body_scroll_top'] >[0]
		,
		Parameters< ReturnType< $mol_page['Body'] >['scroll_top'] >[0]
	>
	type $mol_view__sub__JP55XY94 = $mol_type_enforce<
		ReturnType< $mol_page['body'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_scroll__sub__4CP70MKO = $mol_type_enforce<
		ReturnType< $mol_page['body_content'] >
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_view__dom_name__3KPCN0X7 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub__W1XFWQA6 = $mol_type_enforce<
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

	type $mpds_visavis_plot_legend_cmp_label__label__0G0TMQQ3 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_legend_cmp['label'] >
		,
		ReturnType< $mpds_visavis_plot_legend_cmp_label['label'] >
	>
	type $mpds_visavis_plot_legend_cmp_label__background__4IULZUU7 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_legend_cmp['background'] >
		,
		ReturnType< $mpds_visavis_plot_legend_cmp_label['background'] >
	>
	type $mpds_visavis_plot_legend_cmp_label__label__35P71FZ0 = $mol_type_enforce<
		string
		,
		ReturnType< $mpds_visavis_plot_legend_cmp_label['label'] >
	>
	type $mpds_visavis_plot_legend_cmp_label__background__4RWVWQIJ = $mol_type_enforce<
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
}

declare namespace $ {

	type $mol_view__sub__XA15D9JY = $mol_type_enforce<
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

	type $mol_check__checked__70KOSJR1 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_checked'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_check__label__1064FW5D = $mol_type_enforce<
		ReturnType< $mol_check_list['option_label'] >
		,
		ReturnType< $mol_check['label'] >
	>
	type $mol_check__enabled__C9RVTWGG = $mol_type_enforce<
		ReturnType< $mol_check_list['option_enabled'] >
		,
		ReturnType< $mol_check['enabled'] >
	>
	type $mol_check__hint__93W2WFE6 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_hint'] >
		,
		ReturnType< $mol_check['hint'] >
	>
	type $mol_check__minimal_height__Q3V1CXL0 = $mol_type_enforce<
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

	type $mol_view__minimal_height__GZ1R36UV = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub__PU40V33T = $mol_type_enforce<
		ReturnType< $mol_labeler['label'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_height__JZPOH59W = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub__X1QG177R = $mol_type_enforce<
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

	type $mol_pop_bubble__align__3Z50GX8S = $mol_type_enforce<
		ReturnType< $mol_pop['align'] >
		,
		ReturnType< $mol_pop_bubble['align'] >
	>
	type $mol_pop_bubble__content__70CJBYIW = $mol_type_enforce<
		ReturnType< $mol_pop['bubble_content'] >
		,
		ReturnType< $mol_pop_bubble['content'] >
	>
	type $mol_pop_bubble__height_max__C24Z33NI = $mol_type_enforce<
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

	type $mol_check__minimal_width__82MRVCHN = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_width'] >
	>
	type $mol_check__minimal_height__UJYN7E30 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_height'] >
	>
	type $mol_check__enabled__WYGGOPQ4 = $mol_type_enforce<
		ReturnType< $mol_pick['trigger_enabled'] >
		,
		ReturnType< $mol_check['enabled'] >
	>
	type $mol_check__checked__P10B4R6N = $mol_type_enforce<
		ReturnType< $mol_pick['showed'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_check__clicks__B365ANN4 = $mol_type_enforce<
		ReturnType< $mol_pick['clicks'] >
		,
		ReturnType< $mol_check['clicks'] >
	>
	type $mol_check__sub__BZDXAWZ6 = $mol_type_enforce<
		ReturnType< $mol_pick['trigger_content'] >
		,
		ReturnType< $mol_check['sub'] >
	>
	type $mol_check__hint__HB7J1DJX = $mol_type_enforce<
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

	type $mol_paragraph__sub__4ZXUA227 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	type $mol_paragraph__sub__J3TOSUWR = $mol_type_enforce<
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
}

declare namespace $ {
    type $mol_charset_encoding = 'utf8' | 'utf-16le' | 'utf-16be' | 'ibm866' | 'iso-8859-2' | 'iso-8859-3' | 'iso-8859-4' | 'iso-8859-5' | 'iso-8859-6' | 'iso-8859-7' | 'iso-8859-8' | 'iso-8859-8i' | 'iso-8859-10' | 'iso-8859-13' | 'iso-8859-14' | 'iso-8859-15' | 'iso-8859-16' | 'koi8-r' | 'koi8-u' | 'koi8-r' | 'macintosh' | 'windows-874' | 'windows-1250' | 'windows-1251' | 'windows-1252' | 'windows-1253' | 'windows-1254' | 'windows-1255' | 'windows-1256' | 'windows-1257' | 'windows-1258' | 'x-mac-cyrillic' | 'gbk' | 'gb18030' | 'hz-gb-2312' | 'big5' | 'euc-jp' | 'iso-2022-jp' | 'shift-jis' | 'euc-kr' | 'iso-2022-kr';
}

declare namespace $ {
    function $mol_charset_decode(buffer: BufferSource, encoding?: $mol_charset_encoding): string;
}

declare var $node: any;

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
    class $mol_file_web extends $mol_file {
        static absolute(path: string): $mol_file_web;
        static relative(path: string): $mol_file_web;
        static base: string;
        buffer(next?: Uint8Array): Uint8Array;
        stat(next?: $mol_file_stat, virt?: 'virt'): $mol_file_stat;
        resolve(path: string): $mol_file_web;
        ensure(): void;
        drop(): void;
        sub(): $mol_file[];
        relate(base?: $mol_file): string;
        append(next: Uint8Array | string): void;
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

	type $mol_hotkey__mod_ctrl__QP6EHKQB = $mol_type_enforce<
		ReturnType< $mol_string['submit_with_ctrl'] >
		,
		ReturnType< $mol_hotkey['mod_ctrl'] >
	>
	type $mol_hotkey__key__YFHPKJLD = $mol_type_enforce<
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

	type $mol_hotkey__key__DI97Q6WH = $mol_type_enforce<
		({ 
			escape( next?: ReturnType< $mol_search['clear'] > ): ReturnType< $mol_search['clear'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	type $mol_nav__keys_y__HF122GU6 = $mol_type_enforce<
		ReturnType< $mol_search['nav_components'] >
		,
		ReturnType< $mol_nav['keys_y'] >
	>
	type $mol_nav__current_y__HG970AF8 = $mol_type_enforce<
		ReturnType< $mol_search['nav_focused'] >
		,
		ReturnType< $mol_nav['current_y'] >
	>
	type $mol_string__value__PUZKX5MW = $mol_type_enforce<
		ReturnType< $mol_search['query'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__hint__S5GK07UT = $mol_type_enforce<
		ReturnType< $mol_search['hint'] >
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__submit__B7DL9L28 = $mol_type_enforce<
		ReturnType< $mol_search['submit'] >
		,
		ReturnType< $mol_string['submit'] >
	>
	type $mol_string__enabled__72YX8LRK = $mol_type_enforce<
		ReturnType< $mol_search['enabled'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_string__keyboard__B556EIB3 = $mol_type_enforce<
		ReturnType< $mol_search['keyboard'] >
		,
		ReturnType< $mol_string['keyboard'] >
	>
	type $mol_string__enter__PJU0I54W = $mol_type_enforce<
		ReturnType< $mol_search['enter'] >
		,
		ReturnType< $mol_string['enter'] >
	>
	type $mol_button_minor__hint__9DA05HLX = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__click__OO37M3YG = $mol_type_enforce<
		ReturnType< $mol_search['clear'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__R5S8OUQ5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_list__rows__BAJEP4WK = $mol_type_enforce<
		ReturnType< $mol_search['menu_items'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_dimmer__haystack__C4JBNJH4 = $mol_type_enforce<
		ReturnType< $mol_search['suggest_label'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle__A1KH5ZGN = $mol_type_enforce<
		ReturnType< $mol_search['query'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_search_plugins__POA3DLTK = $mol_type_enforce<
		ReturnType< $mol_pop['plugins'] >[number]
		,
		$mol_plugin
	>
	type $mol_view__sub__252BG2BE = $mol_type_enforce<
		ReturnType< $mol_search['anchor_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__click__N3514G8Y = $mol_type_enforce<
		ReturnType< $mol_search['suggest_select'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__KCQXQ4A8 = $mol_type_enforce<
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

	type $mol_dimmer__haystack__HTN94T70 = $mol_type_enforce<
		ReturnType< $mol_select['option_label'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle__1XZO85XL = $mol_type_enforce<
		ReturnType< $mol_select['filter_pattern'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_nav__keys_y__8COIRQI8 = $mol_type_enforce<
		ReturnType< $mol_select['nav_components'] >
		,
		ReturnType< $mol_nav['keys_y'] >
	>
	type $mol_nav__current_y__VEYTQZS4 = $mol_type_enforce<
		ReturnType< $mol_select['option_focused'] >
		,
		ReturnType< $mol_nav['current_y'] >
	>
	type $mol_nav__cycle__6AM5T28Q = $mol_type_enforce<
		ReturnType< $mol_select['nav_cycle'] >
		,
		ReturnType< $mol_nav['cycle'] >
	>
	type $mol_list__rows__8RADMK77 = $mol_type_enforce<
		ReturnType< $mol_select['menu_content'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub__901AX0XN = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_button_minor__event_click__G9RJ1FJV = $mol_type_enforce<
		ReturnType< $mol_select['event_select'] >
		,
		ReturnType< $mol_button_minor['event_click'] >
	>
	type $mol_button_minor__sub__5GBCKQXX = $mol_type_enforce<
		ReturnType< $mol_select['option_content'] >
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub__LWEAS88O = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_search__query__K83SBXSL = $mol_type_enforce<
		ReturnType< $mol_select['filter_pattern'] >
		,
		ReturnType< $mol_search['query'] >
	>
	type $mol_search__hint__8G93RLND = $mol_type_enforce<
		ReturnType< $mol_select['filter_hint'] >
		,
		ReturnType< $mol_search['hint'] >
	>
	type $mol_search__submit__65B3ETFB = $mol_type_enforce<
		ReturnType< $mol_select['submit'] >
		,
		ReturnType< $mol_search['submit'] >
	>
	type $mol_search__enabled__64DIKQK1 = $mol_type_enforce<
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

	type $mpds_visavis_elements_nonformer_pd_tri__US0JJ68Q = $mol_type_enforce<
		`Pm-Dy-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AQR8LYN9 = $mol_type_enforce<
		`Yb-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W1BPJFUW = $mol_type_enforce<
		`Cr-Ni-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JNQZ5YWS = $mol_type_enforce<
		`Pu-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GM9A43R2 = $mol_type_enforce<
		`Pm-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BFG1K1FI = $mol_type_enforce<
		`Tm-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BLHFQND7 = $mol_type_enforce<
		`Nd-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TRSKU1EH = $mol_type_enforce<
		`Al-Zn-In`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MUFHSPWL = $mol_type_enforce<
		`Eu-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FXUCSX6Q = $mol_type_enforce<
		`Ni-Ru-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4JNS7U38 = $mol_type_enforce<
		`Ce-Pm-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M9L49I2A = $mol_type_enforce<
		`Cu-Tc-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__237WW0B7 = $mol_type_enforce<
		`La-Sm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QSP8D76A = $mol_type_enforce<
		`La-Yb-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7R5FCJHB = $mol_type_enforce<
		`Gd-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HAOAYZQY = $mol_type_enforce<
		`Li-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZAT5X71U = $mol_type_enforce<
		`La-Dy-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7MUEHP1O = $mol_type_enforce<
		`Ba-Yb-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FLYGR7KT = $mol_type_enforce<
		`K-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TQVATU1X = $mol_type_enforce<
		`Y-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PWRA8Q5K = $mol_type_enforce<
		`Li-Ce-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TV09PVOL = $mol_type_enforce<
		`Sc-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZV8MK1LK = $mol_type_enforce<
		`Ho-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZU5B7MXH = $mol_type_enforce<
		`Tm-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TV8597FQ = $mol_type_enforce<
		`La-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QJE51IDC = $mol_type_enforce<
		`Ir-Pd-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7H3JMEIC = $mol_type_enforce<
		`Gd-Ho-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HYXQFSLE = $mol_type_enforce<
		`Ca-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0Y4SR476 = $mol_type_enforce<
		`Rb-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O7EYC7PG = $mol_type_enforce<
		`La-Yb-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EC027SHC = $mol_type_enforce<
		`Nd-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WO47SFWQ = $mol_type_enforce<
		`Yb-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WC3EO6IN = $mol_type_enforce<
		`La-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YU8JCL60 = $mol_type_enforce<
		`Ba-La-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7E1DPF2U = $mol_type_enforce<
		`Cs-Li-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EQYB8RER = $mol_type_enforce<
		`Ba-Sr-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GJ3333Z6 = $mol_type_enforce<
		`Yb-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XWKOBZFB = $mol_type_enforce<
		`Cs-Pr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CS8GIFZC = $mol_type_enforce<
		`Zn-Bi-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y0R1BNKS = $mol_type_enforce<
		`Tb-Pm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YLNROTSE = $mol_type_enforce<
		`Gd-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YNDSBNMX = $mol_type_enforce<
		`Ce-Eu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__20UP3NZV = $mol_type_enforce<
		`Fe-Os-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4H97OYSV = $mol_type_enforce<
		`Nb-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q1QU9E8M = $mol_type_enforce<
		`Eu-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JOXSZ3LS = $mol_type_enforce<
		`Be-Al-In`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L3LDZ2O6 = $mol_type_enforce<
		`Pr-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9DRSSTJD = $mol_type_enforce<
		`Li-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MF8N83NH = $mol_type_enforce<
		`Pu-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S2EMCYH7 = $mol_type_enforce<
		`Rb-Na-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OKB67PBH = $mol_type_enforce<
		`Mg-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J1LNCKIK = $mol_type_enforce<
		`Pr-Nd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0IJ4X5YJ = $mol_type_enforce<
		`Pr-Sm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K2BL8VNB = $mol_type_enforce<
		`Pd-Ru-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PIGPE06Z = $mol_type_enforce<
		`Er-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M4TJV67V = $mol_type_enforce<
		`Ce-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N3WR4W32 = $mol_type_enforce<
		`Li-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6UF7ERHP = $mol_type_enforce<
		`Nd-Gd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B3CNIHVK = $mol_type_enforce<
		`Fe-Rh-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KFGV8PN6 = $mol_type_enforce<
		`Cs-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TGGVBTZV = $mol_type_enforce<
		`Ru-Pt-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0LBRTSEL = $mol_type_enforce<
		`Ca-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QBFOS2Y8 = $mol_type_enforce<
		`Cs-K-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KNCAZZHR = $mol_type_enforce<
		`Lu-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__29AZ39U7 = $mol_type_enforce<
		`Nd-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EWUI3UGL = $mol_type_enforce<
		`Ga-Si-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZCU2N2CR = $mol_type_enforce<
		`K-Mg-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6YNNBG3M = $mol_type_enforce<
		`Ce-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0ESDKM6E = $mol_type_enforce<
		`Yb-Dy-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0CEM67N6 = $mol_type_enforce<
		`Ba-Nd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BOLZVU4A = $mol_type_enforce<
		`Y-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LLOUXGFB = $mol_type_enforce<
		`Pr-Gd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XQ1MMT1F = $mol_type_enforce<
		`La-Y-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F2L5QLPI = $mol_type_enforce<
		`Er-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X9PY0V1R = $mol_type_enforce<
		`Cs-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1B3U62PN = $mol_type_enforce<
		`Li-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5JS9S81G = $mol_type_enforce<
		`Pr-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JXHBAFTU = $mol_type_enforce<
		`Fe-Cu-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LT3M1IYT = $mol_type_enforce<
		`Ce-Sm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7KLSI3FE = $mol_type_enforce<
		`Dy-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ET66PI1O = $mol_type_enforce<
		`Cu-Ir-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2PJTNKRL = $mol_type_enforce<
		`Si-Sb-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ODM4EHBL = $mol_type_enforce<
		`Pr-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MUU2S8HD = $mol_type_enforce<
		`K-Li-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__65QA4XYR = $mol_type_enforce<
		`La-Tb-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3CVTMG0R = $mol_type_enforce<
		`Li-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__89NBHHAH = $mol_type_enforce<
		`Sm-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0HNE19QV = $mol_type_enforce<
		`Cs-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DFL2R0K5 = $mol_type_enforce<
		`Pr-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W4SNGRAZ = $mol_type_enforce<
		`Tb-Yb-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FP581YZV = $mol_type_enforce<
		`Y-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FAFBCQ12 = $mol_type_enforce<
		`Na-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SJ1GT8OQ = $mol_type_enforce<
		`K-Mg-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DZ2LPJ2F = $mol_type_enforce<
		`Li-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AJP7SNHH = $mol_type_enforce<
		`Ce-Hf-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SUYRGQD6 = $mol_type_enforce<
		`Dy-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JZ5RTNAG = $mol_type_enforce<
		`Ce-Mn-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P6LSSR3D = $mol_type_enforce<
		`Mn-Fe-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UOO2I7VE = $mol_type_enforce<
		`Rb-Hf-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XVKCSKG0 = $mol_type_enforce<
		`La-Tb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MSRK8RG6 = $mol_type_enforce<
		`Sr-Nd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0GFVANOI = $mol_type_enforce<
		`Tb-Sm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4UMICV57 = $mol_type_enforce<
		`Ce-Sc-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1M2FIFGX = $mol_type_enforce<
		`Y-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QC9FTDMU = $mol_type_enforce<
		`Rb-Li-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F50JFODN = $mol_type_enforce<
		`Nd-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RLDAUP32 = $mol_type_enforce<
		`Al-Si-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PSD4MWX8 = $mol_type_enforce<
		`Ca-La-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KSD3VP3Z = $mol_type_enforce<
		`La-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OKUPRHFK = $mol_type_enforce<
		`Sm-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FP4EPQHZ = $mol_type_enforce<
		`Y-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BPP0X1NZ = $mol_type_enforce<
		`Na-Sr-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QDJ72CTT = $mol_type_enforce<
		`K-Li-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__97UYTKZO = $mol_type_enforce<
		`Cs-Rb-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KXFKSTJH = $mol_type_enforce<
		`Zn-Ga-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I8A6DFZI = $mol_type_enforce<
		`La-Pm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ILCXQGOH = $mol_type_enforce<
		`Mn-Fe-Co`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YHJMSFZI = $mol_type_enforce<
		`Gd-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4I3QEXPB = $mol_type_enforce<
		`Sm-Gd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4P8E5W9V = $mol_type_enforce<
		`U-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EA8E5BWH = $mol_type_enforce<
		`La-Ce-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JCCZ1T49 = $mol_type_enforce<
		`Re-Hg-Sb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V9A5W9TJ = $mol_type_enforce<
		`Gd-Dy-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LV73MMIU = $mol_type_enforce<
		`Dy-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U5LPDDOH = $mol_type_enforce<
		`La-Nd-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LJB8V10Q = $mol_type_enforce<
		`Ce-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TF2N01N9 = $mol_type_enforce<
		`Ce-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GC92WTY8 = $mol_type_enforce<
		`Ce-Nd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YTYUFAYO = $mol_type_enforce<
		`Pm-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OU1KOT03 = $mol_type_enforce<
		`Ce-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3WRLU2RU = $mol_type_enforce<
		`Pr-Sm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IRQ7KESM = $mol_type_enforce<
		`Ca-La-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LJP29GWS = $mol_type_enforce<
		`Yb-Lu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QXDLP09C = $mol_type_enforce<
		`Sm-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RP18YYGZ = $mol_type_enforce<
		`Gd-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CVE3Z7QH = $mol_type_enforce<
		`Li-Pr-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2ITP9TPF = $mol_type_enforce<
		`Al-Ga-Hg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ITZ7ZD7U = $mol_type_enforce<
		`Na-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DPQ8HM2M = $mol_type_enforce<
		`Yb-Nd-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y5AZJ0DQ = $mol_type_enforce<
		`Nd-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__06LGR7VQ = $mol_type_enforce<
		`La-Tb-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5UCOG4SZ = $mol_type_enforce<
		`Ir-Pd-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1MD4XVU0 = $mol_type_enforce<
		`Tm-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BXIOJ6M1 = $mol_type_enforce<
		`Tm-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MRPWLTXO = $mol_type_enforce<
		`La-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HAYKPK73 = $mol_type_enforce<
		`Cu-Ni-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G445PAZ4 = $mol_type_enforce<
		`Tb-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AIKCM1HK = $mol_type_enforce<
		`Ba-Sr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8UT7MCQA = $mol_type_enforce<
		`Th-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MYAYSU07 = $mol_type_enforce<
		`Mn-Co-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YB8KGVBK = $mol_type_enforce<
		`Cu-Ni-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EP0YQK7I = $mol_type_enforce<
		`Tb-Ce-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V85BGB2M = $mol_type_enforce<
		`Nd-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6AS20DTJ = $mol_type_enforce<
		`Li-Pm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UDZH55FY = $mol_type_enforce<
		`La-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E9QZVK3J = $mol_type_enforce<
		`La-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R3SP8YC6 = $mol_type_enforce<
		`Pm-Pr-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CMMCXH07 = $mol_type_enforce<
		`Ce-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GRGMHEFY = $mol_type_enforce<
		`Cu-Tc-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PFCMBBEM = $mol_type_enforce<
		`Nd-Dy-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LIW7YGEF = $mol_type_enforce<
		`Ca-Pm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H9Q8V7OU = $mol_type_enforce<
		`Fe-Cu-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YAZT1F00 = $mol_type_enforce<
		`Li-Sm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GMG0K9T4 = $mol_type_enforce<
		`Mn-Ag-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NYZDOM2M = $mol_type_enforce<
		`Li-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KOVZOQ89 = $mol_type_enforce<
		`La-Tb-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LSF1XMNL = $mol_type_enforce<
		`Gd-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HW3G6P4S = $mol_type_enforce<
		`Ce-Gd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7VJEFHH2 = $mol_type_enforce<
		`Er-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F0XOQJ5G = $mol_type_enforce<
		`Sm-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7XBAC0ZU = $mol_type_enforce<
		`Cr-Ni-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OD379K8U = $mol_type_enforce<
		`Nd-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DDKC9WJ4 = $mol_type_enforce<
		`Co-Au-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8A41K07I = $mol_type_enforce<
		`Nd-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IJUAGBP6 = $mol_type_enforce<
		`La-Yb-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3O6IQNG8 = $mol_type_enforce<
		`Sc-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G2RGZ87L = $mol_type_enforce<
		`Zr-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1X6Q7MTA = $mol_type_enforce<
		`Pr-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__457UZRSQ = $mol_type_enforce<
		`Cs-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JXUCTBNP = $mol_type_enforce<
		`Ce-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GFQHXORJ = $mol_type_enforce<
		`Yb-Gd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OZRR9ZR4 = $mol_type_enforce<
		`Li-Ce-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V51YP274 = $mol_type_enforce<
		`Y-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZVR7PMLZ = $mol_type_enforce<
		`La-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IVY587QO = $mol_type_enforce<
		`Tb-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZIINR1IN = $mol_type_enforce<
		`Tb-Pr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NL4RRVCL = $mol_type_enforce<
		`Sb-Pb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VK99UGSN = $mol_type_enforce<
		`Ba-Yb-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6R6QYU07 = $mol_type_enforce<
		`Dy-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HM1PXVKS = $mol_type_enforce<
		`Tb-Gd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__41KFN73J = $mol_type_enforce<
		`Tb-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N8U8ZIYG = $mol_type_enforce<
		`Gd-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GFKU35XI = $mol_type_enforce<
		`Yb-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4U26F41E = $mol_type_enforce<
		`Tm-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J4RGCVT1 = $mol_type_enforce<
		`Pd-Pt-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FYNTYZ7G = $mol_type_enforce<
		`Eu-Pu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MWPAK95C = $mol_type_enforce<
		`Ba-Sm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1GBNGAMT = $mol_type_enforce<
		`La-Sm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2Q4RE0OQ = $mol_type_enforce<
		`U-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LT9WYLKK = $mol_type_enforce<
		`Ba-Pm-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X0CLISIX = $mol_type_enforce<
		`Sm-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MVDDWSHE = $mol_type_enforce<
		`Gd-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VOS7G4J9 = $mol_type_enforce<
		`Ce-Pr-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A9K302F4 = $mol_type_enforce<
		`Lu-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XADBY1XR = $mol_type_enforce<
		`Dy-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OZC403IM = $mol_type_enforce<
		`La-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YRTFY88B = $mol_type_enforce<
		`Y-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__52YPX68W = $mol_type_enforce<
		`Pm-Nd-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0QWPI0GE = $mol_type_enforce<
		`Tb-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GDT2T0DP = $mol_type_enforce<
		`Yb-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TTHOA57M = $mol_type_enforce<
		`Li-Pr-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0QWV9OR9 = $mol_type_enforce<
		`Mg-Mn-Cd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MVG1QT4X = $mol_type_enforce<
		`Ce-Pm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YV8VOX4C = $mol_type_enforce<
		`Pu-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G8YLHFW4 = $mol_type_enforce<
		`Tl-Cd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4CSOBBTQ = $mol_type_enforce<
		`Sc-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E7BHTE8Z = $mol_type_enforce<
		`Pu-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KNG4WGD8 = $mol_type_enforce<
		`Mn-Fe-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__542U1DQ0 = $mol_type_enforce<
		`Eu-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1PHS8EF1 = $mol_type_enforce<
		`Tb-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XELJ85LP = $mol_type_enforce<
		`Tb-Pr-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JW3R1976 = $mol_type_enforce<
		`Ca-Nd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SYJFUFT5 = $mol_type_enforce<
		`Ba-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TZSAO5J3 = $mol_type_enforce<
		`Ca-Tb-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MSKRT1BO = $mol_type_enforce<
		`Pu-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YZPW2UZ6 = $mol_type_enforce<
		`Ca-Yb-Eu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2EF6DTTX = $mol_type_enforce<
		`Th-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JLN5JAA7 = $mol_type_enforce<
		`Si-Sn-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GVJW951M = $mol_type_enforce<
		`Tb-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D32IB8MA = $mol_type_enforce<
		`Na-Cr-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MEU3X5YR = $mol_type_enforce<
		`Y-Er-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E1WGF08L = $mol_type_enforce<
		`Y-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CPEDBNIJ = $mol_type_enforce<
		`Ni-Pd-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YWR4S7QU = $mol_type_enforce<
		`Y-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C8PME4RV = $mol_type_enforce<
		`Co-Pd-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LMA62VY7 = $mol_type_enforce<
		`Li-Gd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JHPJ5TDQ = $mol_type_enforce<
		`Tb-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KJFPKINL = $mol_type_enforce<
		`Pr-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DSKAEOOV = $mol_type_enforce<
		`La-Yb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F3UA9PH8 = $mol_type_enforce<
		`Ca-Yb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F4CB5O01 = $mol_type_enforce<
		`Dy-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CG0FXW70 = $mol_type_enforce<
		`Nd-Sm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GL3KG92V = $mol_type_enforce<
		`Tb-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BDVD7V9E = $mol_type_enforce<
		`Gd-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IES853CX = $mol_type_enforce<
		`Ca-Pm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QAM0DCF7 = $mol_type_enforce<
		`Tl-Zn-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2U6CL6WT = $mol_type_enforce<
		`Yb-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OUKZV0G5 = $mol_type_enforce<
		`Fe-Co-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6YAC6306 = $mol_type_enforce<
		`La-Sm-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SP1Y3SFR = $mol_type_enforce<
		`Nb-V-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TNG5YHB2 = $mol_type_enforce<
		`La-Sm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__13OUU3QB = $mol_type_enforce<
		`Li-Pr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JSULNVM4 = $mol_type_enforce<
		`Tb-Gd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H3X23EX8 = $mol_type_enforce<
		`Eu-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5KV6KR4T = $mol_type_enforce<
		`Yb-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S058R66B = $mol_type_enforce<
		`Yb-Er-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DF2I9LFS = $mol_type_enforce<
		`La-Ho-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JXDRU31F = $mol_type_enforce<
		`Dy-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MOM3K33N = $mol_type_enforce<
		`La-Ce-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__55DWZOT6 = $mol_type_enforce<
		`Pr-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NK056F46 = $mol_type_enforce<
		`Eu-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TS42SUUE = $mol_type_enforce<
		`Dy-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JSX63AQ9 = $mol_type_enforce<
		`La-Yb-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RRQL9M10 = $mol_type_enforce<
		`Ce-Pm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VCOCJBAY = $mol_type_enforce<
		`Tb-Pm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__011EXVCG = $mol_type_enforce<
		`Pr-Dy-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__71GQA4Z0 = $mol_type_enforce<
		`La-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PZRFC6AX = $mol_type_enforce<
		`Li-Ce-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H2F6PHS4 = $mol_type_enforce<
		`Li-Pr-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9LSC5G81 = $mol_type_enforce<
		`Tb-Pm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LOLPYL1F = $mol_type_enforce<
		`Dy-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AEX85GCT = $mol_type_enforce<
		`Al-In-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7FOJUUVY = $mol_type_enforce<
		`Nd-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZCVE3I9O = $mol_type_enforce<
		`Pr-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UCGBOT7R = $mol_type_enforce<
		`Ba-Pm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KV4W3N3N = $mol_type_enforce<
		`Pr-Dy-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LV1JEU73 = $mol_type_enforce<
		`Rb-Na-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XG6ORPQH = $mol_type_enforce<
		`Tb-Pm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7YJRX273 = $mol_type_enforce<
		`Gd-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3ZKQFCAI = $mol_type_enforce<
		`Y-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GTPQ975Z = $mol_type_enforce<
		`Gd-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VLORP6TS = $mol_type_enforce<
		`Ba-Pm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L9YOFHZR = $mol_type_enforce<
		`Pu-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H0NSCSHW = $mol_type_enforce<
		`Er-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FMWA3PRR = $mol_type_enforce<
		`Co-Ni-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OCIERN0K = $mol_type_enforce<
		`Ho-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FXMVN0QM = $mol_type_enforce<
		`Pm-Pr-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J8JGRT84 = $mol_type_enforce<
		`Sm-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YV2BDH9L = $mol_type_enforce<
		`Yb-Pr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YPVPAKK3 = $mol_type_enforce<
		`Cu-Ag-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SDV78Y0Q = $mol_type_enforce<
		`Pm-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EYMAZCZ8 = $mol_type_enforce<
		`Re-Ir-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__55AFCJW1 = $mol_type_enforce<
		`Er-Lu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4TN8B23U = $mol_type_enforce<
		`La-Eu-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1ZSUCZP2 = $mol_type_enforce<
		`Cu-Ag-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5H5JLDNS = $mol_type_enforce<
		`Dy-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RUNIE5EE = $mol_type_enforce<
		`Dy-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O6B87UVR = $mol_type_enforce<
		`Re-Bi-Sb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5ZM8FHJM = $mol_type_enforce<
		`Pm-Pr-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7YKHTXXJ = $mol_type_enforce<
		`Th-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z5HOZM0G = $mol_type_enforce<
		`Y-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C8Q416DD = $mol_type_enforce<
		`Fe-Ag-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__24T6FUI9 = $mol_type_enforce<
		`Co-Os-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NEII4IDP = $mol_type_enforce<
		`Rb-Li-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G48NBPOR = $mol_type_enforce<
		`Gd-Dy-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SV6Y1D41 = $mol_type_enforce<
		`Tb-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QMPJDHN0 = $mol_type_enforce<
		`Ce-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__418PE043 = $mol_type_enforce<
		`Ba-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B7VM59LF = $mol_type_enforce<
		`Nd-Dy-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EKZSU9CZ = $mol_type_enforce<
		`Ca-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BHQDUYYL = $mol_type_enforce<
		`Li-Hf-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WE32GNMP = $mol_type_enforce<
		`Tb-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A9OMDK52 = $mol_type_enforce<
		`Tl-Zn-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4XJYN9A0 = $mol_type_enforce<
		`Pr-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CYUG1KXO = $mol_type_enforce<
		`Er-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4CYFWIJQ = $mol_type_enforce<
		`Er-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J8YI2QRJ = $mol_type_enforce<
		`K-Li-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__02ZSW8KL = $mol_type_enforce<
		`Yb-Sc-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TVSZT33B = $mol_type_enforce<
		`La-Ce-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E5NSQ2FN = $mol_type_enforce<
		`Cs-Mg-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2RFIVAHT = $mol_type_enforce<
		`Ga-B-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5WB8TF39 = $mol_type_enforce<
		`Re-Ir-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S4IUMGIW = $mol_type_enforce<
		`Pr-Gd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CHAKW1ZC = $mol_type_enforce<
		`Re-Ni-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FJH7EITE = $mol_type_enforce<
		`Tb-Nd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I1FC0YUJ = $mol_type_enforce<
		`Tb-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZYT3GYRH = $mol_type_enforce<
		`Nd-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YR899IGS = $mol_type_enforce<
		`Tb-Dy-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9SMZISN4 = $mol_type_enforce<
		`Tb-Pr-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NICBQMKQ = $mol_type_enforce<
		`La-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZXI2KKC5 = $mol_type_enforce<
		`Eu-Th-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__461R6N30 = $mol_type_enforce<
		`Li-Tb-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3IJHRJSC = $mol_type_enforce<
		`Na-V-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NFYRKRF9 = $mol_type_enforce<
		`Cu-Re-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZQ95SZ8E = $mol_type_enforce<
		`Cd-Ge-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5D72HZCL = $mol_type_enforce<
		`Sm-Gd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HTCK7HO6 = $mol_type_enforce<
		`Al-In-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OT338B8I = $mol_type_enforce<
		`Al-Cd-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__903HNIM4 = $mol_type_enforce<
		`Ce-Eu-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UFA68J9C = $mol_type_enforce<
		`La-Tb-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UOV7O0WH = $mol_type_enforce<
		`Li-Tb-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QPPAAPDN = $mol_type_enforce<
		`Pr-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MESZQ2XW = $mol_type_enforce<
		`La-Pm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZNG98CM2 = $mol_type_enforce<
		`Gd-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NHYMX637 = $mol_type_enforce<
		`Li-La-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MF1KFLBN = $mol_type_enforce<
		`Al-Ga-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2A0TXDB7 = $mol_type_enforce<
		`Tl-As-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AQ8MBV4N = $mol_type_enforce<
		`Re-Pd-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DFVJHY5V = $mol_type_enforce<
		`Eu-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PJZBHQ97 = $mol_type_enforce<
		`Tm-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LQJXKHFA = $mol_type_enforce<
		`Eu-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RVLMRV4T = $mol_type_enforce<
		`Be-Zn-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9DKANEEI = $mol_type_enforce<
		`Li-Pm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LTDD82PP = $mol_type_enforce<
		`Na-Mg-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VHRC94H9 = $mol_type_enforce<
		`Fe-Ag-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8F6D9F3S = $mol_type_enforce<
		`Tl-Zn-Cd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ETJ4ZLJ6 = $mol_type_enforce<
		`Nd-Sm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BO4RBI4A = $mol_type_enforce<
		`Y-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JSXMNQG4 = $mol_type_enforce<
		`Gd-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F1RGNGKW = $mol_type_enforce<
		`Li-Tb-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EJQ5UHDE = $mol_type_enforce<
		`Be-Ga-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MSO3XKHC = $mol_type_enforce<
		`Mn-Cu-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R4PFOMH2 = $mol_type_enforce<
		`Pr-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__59HZ93EP = $mol_type_enforce<
		`Ho-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5A1EXOW1 = $mol_type_enforce<
		`Na-Li-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UZF0BZ20 = $mol_type_enforce<
		`Re-Ru-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__99M6KEMV = $mol_type_enforce<
		`La-Tb-Ce`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KGECTP6N = $mol_type_enforce<
		`Cr-Pb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WOSN77C4 = $mol_type_enforce<
		`Pr-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1QOYBYCZ = $mol_type_enforce<
		`Ag-Pd-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FR4IP64X = $mol_type_enforce<
		`Ca-Nd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A2O96DOA = $mol_type_enforce<
		`Mg-Cr-Cd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LDKIU888 = $mol_type_enforce<
		`Mn-Ni-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YH7XK63H = $mol_type_enforce<
		`Cu-B-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LQSS17G9 = $mol_type_enforce<
		`Li-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8RZS5T2D = $mol_type_enforce<
		`Ni-Os-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TCQBY15R = $mol_type_enforce<
		`Fe-Ag-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FIK1YJ0X = $mol_type_enforce<
		`Li-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6ZDJCSOG = $mol_type_enforce<
		`Sm-Y-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SBFZGUJE = $mol_type_enforce<
		`Dy-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ILIL5CE7 = $mol_type_enforce<
		`Na-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1CDCCWDK = $mol_type_enforce<
		`Tb-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U6UYYS0J = $mol_type_enforce<
		`Rb-Na-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QNDGTKNS = $mol_type_enforce<
		`Gd-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7ZI3PSV7 = $mol_type_enforce<
		`Pr-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HVRS7QR4 = $mol_type_enforce<
		`Pr-Sm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BAQER3CU = $mol_type_enforce<
		`Gd-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__APY1TPX7 = $mol_type_enforce<
		`Zr-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0KH0Y0N2 = $mol_type_enforce<
		`Cr-Hg-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VMN3PT4C = $mol_type_enforce<
		`Yb-Er-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GEO9X1XM = $mol_type_enforce<
		`Ca-Pm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0ZJ2NEEE = $mol_type_enforce<
		`Co-Cu-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YVVX9VSU = $mol_type_enforce<
		`Gd-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KHL6U9HR = $mol_type_enforce<
		`Sc-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__032XL42X = $mol_type_enforce<
		`Ga-Si-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TZSG7ORJ = $mol_type_enforce<
		`Li-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6CVV5UGC = $mol_type_enforce<
		`Ba-Sr-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PEFFPFPO = $mol_type_enforce<
		`Li-Pm-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4QC94VBL = $mol_type_enforce<
		`Na-Li-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RJB9P4XV = $mol_type_enforce<
		`Gd-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2333518U = $mol_type_enforce<
		`Yb-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4MO9TGKD = $mol_type_enforce<
		`Ho-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7U5ONOZO = $mol_type_enforce<
		`Nd-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7PDSHGJU = $mol_type_enforce<
		`Ca-Ce-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SIMZTQQN = $mol_type_enforce<
		`Pm-Gd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0LM1DV32 = $mol_type_enforce<
		`La-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ULM4OGP2 = $mol_type_enforce<
		`Ca-Yb-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NAZMO37Z = $mol_type_enforce<
		`Pr-Th-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KTD056JS = $mol_type_enforce<
		`Tm-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7PZA4XM8 = $mol_type_enforce<
		`Rb-Li-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UVDEF3AT = $mol_type_enforce<
		`Gd-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LHS9YF5X = $mol_type_enforce<
		`Yb-Pr-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MQDFM74F = $mol_type_enforce<
		`Ce-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__89BWF3NB = $mol_type_enforce<
		`Nd-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6WR3JICL = $mol_type_enforce<
		`Er-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1TLXPINL = $mol_type_enforce<
		`Dy-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RWWZPLSN = $mol_type_enforce<
		`La-Pr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K48TAXCY = $mol_type_enforce<
		`Yb-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__72LNUSGE = $mol_type_enforce<
		`La-Yb-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z8PRZ2SJ = $mol_type_enforce<
		`Co-Rh-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2XMNKMXZ = $mol_type_enforce<
		`La-Eu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HTGZKJX2 = $mol_type_enforce<
		`Y-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KL0LRBX9 = $mol_type_enforce<
		`K-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JJCUZW2L = $mol_type_enforce<
		`Pr-Sm-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N98FK2B6 = $mol_type_enforce<
		`Eu-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TYRENGQV = $mol_type_enforce<
		`Ga-Sn-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WJE3KOIA = $mol_type_enforce<
		`Cu-Ag-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TL45ON9J = $mol_type_enforce<
		`Ce-Gd-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JFCOEU9W = $mol_type_enforce<
		`Tl-Ga-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7B83O819 = $mol_type_enforce<
		`Gd-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1G3NV3I8 = $mol_type_enforce<
		`Ti-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C1W74BO8 = $mol_type_enforce<
		`Ga-Sn-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V12HR5S8 = $mol_type_enforce<
		`La-Eu-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4IIJA8XO = $mol_type_enforce<
		`Tm-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MZ7MU16U = $mol_type_enforce<
		`Pm-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MH2PVCWA = $mol_type_enforce<
		`Be-Al-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FDIVD6CQ = $mol_type_enforce<
		`Dy-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PQ7FBCUN = $mol_type_enforce<
		`Yb-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NRHTSI4V = $mol_type_enforce<
		`Na-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1S0PE6FH = $mol_type_enforce<
		`Li-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3O2UM1VP = $mol_type_enforce<
		`Na-Sr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SH0IGQJM = $mol_type_enforce<
		`Ba-La-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NY78SS2S = $mol_type_enforce<
		`Sm-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SBXO782Q = $mol_type_enforce<
		`La-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O3P93M4M = $mol_type_enforce<
		`K-Cr-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1TWW8GB3 = $mol_type_enforce<
		`Y-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L0ZE5708 = $mol_type_enforce<
		`Ce-Pm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__38TJ2KVS = $mol_type_enforce<
		`Sm-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4LYAWKNH = $mol_type_enforce<
		`Er-Th-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QCA8N6QB = $mol_type_enforce<
		`Co-Os-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NDWW3I97 = $mol_type_enforce<
		`Sm-Dy-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__405PBKQH = $mol_type_enforce<
		`Sr-Ca-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__51Z9IW72 = $mol_type_enforce<
		`Pm-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7J6Z0P5F = $mol_type_enforce<
		`Yb-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__01M4DKYL = $mol_type_enforce<
		`La-Gd-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HKO8GBTT = $mol_type_enforce<
		`Tb-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RCJP383T = $mol_type_enforce<
		`Cs-Mg-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DZCXY4ZX = $mol_type_enforce<
		`Ca-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6DW6JVQN = $mol_type_enforce<
		`Pr-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z8ZK218H = $mol_type_enforce<
		`Pm-Sm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MTD7I9Q9 = $mol_type_enforce<
		`La-Sm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OJUDJ54S = $mol_type_enforce<
		`Zr-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XAT63YZ6 = $mol_type_enforce<
		`Cr-Cu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TB0YH5NT = $mol_type_enforce<
		`Cu-Ni-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__824P3H50 = $mol_type_enforce<
		`Sm-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G714JXMA = $mol_type_enforce<
		`Ce-Pr-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SJJS3JWX = $mol_type_enforce<
		`Ce-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LJ4QGGS5 = $mol_type_enforce<
		`La-V-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4MA1QTGC = $mol_type_enforce<
		`Sm-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EYDRC0P5 = $mol_type_enforce<
		`Ce-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9B2LZPDU = $mol_type_enforce<
		`Ce-Y-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3DNGGJEY = $mol_type_enforce<
		`Ca-Pm-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S18C58JP = $mol_type_enforce<
		`Ce-Pr-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BHM1I0LO = $mol_type_enforce<
		`Ce-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3LDOMPAC = $mol_type_enforce<
		`Re-Ru-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A0K8UTEB = $mol_type_enforce<
		`Cu-Os-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8Q3D70PD = $mol_type_enforce<
		`Co-Ni-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YJPMOFUV = $mol_type_enforce<
		`La-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VRH531U9 = $mol_type_enforce<
		`Ba-V-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TX622T2U = $mol_type_enforce<
		`Gd-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ETZCEPGI = $mol_type_enforce<
		`Li-Er-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3I66RALA = $mol_type_enforce<
		`La-Yb-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9U6SD9FL = $mol_type_enforce<
		`Ce-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MFEHYE6P = $mol_type_enforce<
		`Y-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F7D3FTZD = $mol_type_enforce<
		`Tm-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AACMP4FS = $mol_type_enforce<
		`La-Eu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MV962WMU = $mol_type_enforce<
		`Pr-Dy-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__84LNV9UH = $mol_type_enforce<
		`Ca-Yb-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__94FL921G = $mol_type_enforce<
		`La-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G8MAK972 = $mol_type_enforce<
		`Pr-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UIEX614A = $mol_type_enforce<
		`Nd-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__POA7H2KT = $mol_type_enforce<
		`Pu-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__29NVV9K9 = $mol_type_enforce<
		`Li-Nd-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JDO0FLIW = $mol_type_enforce<
		`Li-Ce-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LYARVHUI = $mol_type_enforce<
		`Tl-Cu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QGEY3S8Y = $mol_type_enforce<
		`Al-Zn-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ANY1B3JK = $mol_type_enforce<
		`Er-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9FWWLPUL = $mol_type_enforce<
		`K-Mg-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UG6JHDO7 = $mol_type_enforce<
		`Li-Ce-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TTRE0BLP = $mol_type_enforce<
		`Na-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P80K0S7Z = $mol_type_enforce<
		`Ba-La-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QR83XYGL = $mol_type_enforce<
		`Tb-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G38QE7SW = $mol_type_enforce<
		`Pr-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H86H9ZJU = $mol_type_enforce<
		`Tb-Yb-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MA0EN1T0 = $mol_type_enforce<
		`Sm-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SQMPZC2L = $mol_type_enforce<
		`Tb-Dy-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WVOHYS8B = $mol_type_enforce<
		`Ag-Ge-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RTZ0ZK0P = $mol_type_enforce<
		`Nd-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7LOQ2QS4 = $mol_type_enforce<
		`Yb-Y-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JFM4QPKV = $mol_type_enforce<
		`Dy-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BYD6NSDX = $mol_type_enforce<
		`Gd-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IJ4AMBC2 = $mol_type_enforce<
		`Nd-Sm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CSPZ5S3F = $mol_type_enforce<
		`Tb-Sm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U13F2SKG = $mol_type_enforce<
		`Li-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TMDMFE6Q = $mol_type_enforce<
		`Y-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__02K3JMZG = $mol_type_enforce<
		`Eu-Sc-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QK8NNEWP = $mol_type_enforce<
		`Ti-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BC833JMC = $mol_type_enforce<
		`Re-Ag-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QLBQTBLU = $mol_type_enforce<
		`Pm-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WDHF12LN = $mol_type_enforce<
		`Ca-Tb-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ESAEWG8Y = $mol_type_enforce<
		`Ta-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WNKW25D0 = $mol_type_enforce<
		`Tb-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I9OUD53L = $mol_type_enforce<
		`Li-La-Tb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VYMQ0O1C = $mol_type_enforce<
		`Tl-Ag-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H1S6T04U = $mol_type_enforce<
		`Tb-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FYDZL0G1 = $mol_type_enforce<
		`Er-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z9EBI5XG = $mol_type_enforce<
		`Fe-Ni-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XIW9179G = $mol_type_enforce<
		`La-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__06Q68ZXL = $mol_type_enforce<
		`Co-Re-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JWRCZH9N = $mol_type_enforce<
		`Li-Cr-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TG4JHMLX = $mol_type_enforce<
		`V-Ag-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NINA5WV7 = $mol_type_enforce<
		`Zn-Sn-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2SDDE82B = $mol_type_enforce<
		`Ce-Nd-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HP2BZ0VX = $mol_type_enforce<
		`La-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KMTL01G0 = $mol_type_enforce<
		`Ca-Eu-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FZ8XZBFK = $mol_type_enforce<
		`Ho-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XNW7O5CR = $mol_type_enforce<
		`Yb-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5QPP3NT8 = $mol_type_enforce<
		`Eu-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A9RQEYC1 = $mol_type_enforce<
		`Ni-Ir-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UTQR37FE = $mol_type_enforce<
		`Y-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7B2BNLAF = $mol_type_enforce<
		`Pr-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MY7KYDH1 = $mol_type_enforce<
		`Ho-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6TOG1HFX = $mol_type_enforce<
		`Pr-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6IALMFR5 = $mol_type_enforce<
		`Pr-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0WC636WX = $mol_type_enforce<
		`Pr-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W3S27176 = $mol_type_enforce<
		`Tb-Ce-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZSQT0M3L = $mol_type_enforce<
		`Ce-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LVWD71IE = $mol_type_enforce<
		`Li-Tb-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WPTRKNBR = $mol_type_enforce<
		`Mn-Tl-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HKZ6UODL = $mol_type_enforce<
		`Ba-La-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FIBDPBJ7 = $mol_type_enforce<
		`Th-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0XHAR8FT = $mol_type_enforce<
		`Li-La-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TUZWWGS5 = $mol_type_enforce<
		`Mn-Fe-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UDJMVHRT = $mol_type_enforce<
		`Ho-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WZ2N5PPD = $mol_type_enforce<
		`K-Rb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0ZVXWDCB = $mol_type_enforce<
		`La-Gd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QVEYD2FF = $mol_type_enforce<
		`Cu-Ag-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HTHGKU2K = $mol_type_enforce<
		`Ce-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T66AXT6Y = $mol_type_enforce<
		`Ho-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NB6VVVEM = $mol_type_enforce<
		`Ce-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PTD5UPC5 = $mol_type_enforce<
		`Co-Ru-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8CDQIARR = $mol_type_enforce<
		`Ce-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DXN71ZGL = $mol_type_enforce<
		`Yb-Hf-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TTHTGU43 = $mol_type_enforce<
		`Tl-Si-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PT9HQC40 = $mol_type_enforce<
		`Tb-Yb-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XXA5WBF9 = $mol_type_enforce<
		`Rb-Li-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YNMKFGX6 = $mol_type_enforce<
		`Co-Ni-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JU3FX6Q5 = $mol_type_enforce<
		`Co-Ir-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CFMLJCOR = $mol_type_enforce<
		`Gd-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TXPMX8ZX = $mol_type_enforce<
		`Gd-Dy-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DHFHJ5TC = $mol_type_enforce<
		`Mn-Cu-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__774W4OQE = $mol_type_enforce<
		`Cu-Mo-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JJUOF6MO = $mol_type_enforce<
		`Tb-Pr-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0WNSHN2B = $mol_type_enforce<
		`Li-Mg-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BLKIJQ57 = $mol_type_enforce<
		`Yb-Pr-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__924RBZ34 = $mol_type_enforce<
		`Li-Sm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1ZIURQBJ = $mol_type_enforce<
		`Li-Tb-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RY6F9L3L = $mol_type_enforce<
		`Sm-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G2C94ESW = $mol_type_enforce<
		`Ba-La-Yb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6IB90SOC = $mol_type_enforce<
		`La-Dy-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U5MKLL52 = $mol_type_enforce<
		`Zn-Si-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SLEQK205 = $mol_type_enforce<
		`Ca-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7YJ6NUZC = $mol_type_enforce<
		`U-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M5X5TVYI = $mol_type_enforce<
		`Pr-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ISICWDID = $mol_type_enforce<
		`Si-Bi-Sb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MMJ3KELH = $mol_type_enforce<
		`Li-Ce-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XAQEKVYO = $mol_type_enforce<
		`Cu-Re-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UN5ZG2KB = $mol_type_enforce<
		`Ba-Ca-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S8H1T1I5 = $mol_type_enforce<
		`La-Lu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LHX0YQGR = $mol_type_enforce<
		`Zn-Cd-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UI7PZXUG = $mol_type_enforce<
		`In-Ga-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WRXWAAZ2 = $mol_type_enforce<
		`Dy-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H1Q5K3LA = $mol_type_enforce<
		`Cr-Hg-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4W651X1U = $mol_type_enforce<
		`Yb-Dy-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SMD9TYB7 = $mol_type_enforce<
		`Eu-Y-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CL41GQU3 = $mol_type_enforce<
		`Mn-Co-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__316IWDFU = $mol_type_enforce<
		`Yb-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZW1VKHRP = $mol_type_enforce<
		`Nb-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C8GP6Q00 = $mol_type_enforce<
		`Yb-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RUHHNBZM = $mol_type_enforce<
		`Yb-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G8IARP0M = $mol_type_enforce<
		`K-Rb-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CPKGML7M = $mol_type_enforce<
		`Ce-Gd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L0KBN07Q = $mol_type_enforce<
		`Dy-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ULMZ4311 = $mol_type_enforce<
		`V-Fe-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z9XLFTY9 = $mol_type_enforce<
		`Yb-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J5R9668O = $mol_type_enforce<
		`La-Ce-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DA8H329X = $mol_type_enforce<
		`Ni-Pd-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TLMWO9PQ = $mol_type_enforce<
		`La-Pr-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZAWN0H8Z = $mol_type_enforce<
		`La-Ce-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__97PLCPTF = $mol_type_enforce<
		`Eu-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S1Q8UJ2P = $mol_type_enforce<
		`Nd-Ho-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PHRX6G3E = $mol_type_enforce<
		`Hf-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OVELLB7B = $mol_type_enforce<
		`Tb-Yb-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SNGBV6FS = $mol_type_enforce<
		`Tb-Pr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KF964J1N = $mol_type_enforce<
		`Er-Pu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K7EF10X3 = $mol_type_enforce<
		`Re-Hg-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QUBU1A00 = $mol_type_enforce<
		`Ba-Yb-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D9UMKP17 = $mol_type_enforce<
		`Lu-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y7UFMZZQ = $mol_type_enforce<
		`Nd-Y-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X2X69B0F = $mol_type_enforce<
		`Rb-Na-Li`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AEEMCDL9 = $mol_type_enforce<
		`Sm-Dy-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T37XB9X2 = $mol_type_enforce<
		`U-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__24FGYBOB = $mol_type_enforce<
		`Ce-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6EJ4RBME = $mol_type_enforce<
		`Pd-Rh-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R1XW0JIO = $mol_type_enforce<
		`Tb-Ce-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VGI7GDWD = $mol_type_enforce<
		`Eu-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B27LXUXV = $mol_type_enforce<
		`Y-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KMU5FGP9 = $mol_type_enforce<
		`Li-Ce-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1P30NF14 = $mol_type_enforce<
		`Yb-Gd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HUH1AOC9 = $mol_type_enforce<
		`Cd-B-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R5OL1PG7 = $mol_type_enforce<
		`Th-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SS3866MJ = $mol_type_enforce<
		`Ba-La-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FTLBVY0H = $mol_type_enforce<
		`Er-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KFTSTDDR = $mol_type_enforce<
		`K-Rb-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9ZXMNMHW = $mol_type_enforce<
		`Cd-Fe-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G9B339PA = $mol_type_enforce<
		`Al-Tl-Cd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MESSGFF5 = $mol_type_enforce<
		`Pr-Nd-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__13ZE10DE = $mol_type_enforce<
		`Nd-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OXOVM2S4 = $mol_type_enforce<
		`Ce-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ONZ9SZUJ = $mol_type_enforce<
		`La-Pu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U3L7O3TV = $mol_type_enforce<
		`Ge-Au-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MO12DRZ2 = $mol_type_enforce<
		`Ca-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DHXOJCVX = $mol_type_enforce<
		`Yb-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VWANIO9S = $mol_type_enforce<
		`Na-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1OO20U7M = $mol_type_enforce<
		`Y-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5FBMO6BE = $mol_type_enforce<
		`Ba-Sr-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AGALX5ZG = $mol_type_enforce<
		`Tb-Dy-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3L2RYU52 = $mol_type_enforce<
		`La-Gd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HYZAQTCI = $mol_type_enforce<
		`Y-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7CJJYDRU = $mol_type_enforce<
		`Ce-Sm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6XZO44OR = $mol_type_enforce<
		`V-Pd-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J0BOLJ9U = $mol_type_enforce<
		`Li-Tb-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NS2P68YQ = $mol_type_enforce<
		`Yb-Pr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9M63HLAG = $mol_type_enforce<
		`Yb-Gd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__REWCEXE2 = $mol_type_enforce<
		`Y-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CW3UDCNV = $mol_type_enforce<
		`Pm-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S6F7VGP2 = $mol_type_enforce<
		`Eu-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4CNY41L6 = $mol_type_enforce<
		`La-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S9LPHF2V = $mol_type_enforce<
		`Ba-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1FPYRXC6 = $mol_type_enforce<
		`Co-Hg-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F79UWHQV = $mol_type_enforce<
		`Lu-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9KNB09UO = $mol_type_enforce<
		`Y-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VD1N5FSK = $mol_type_enforce<
		`Ba-Ca-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XLR50UPZ = $mol_type_enforce<
		`K-Li-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9K3LVBPF = $mol_type_enforce<
		`V-Hg-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SXWT9M9A = $mol_type_enforce<
		`Tb-Gd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G8Z42N1B = $mol_type_enforce<
		`La-Pm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J9ZTOBKZ = $mol_type_enforce<
		`Ir-Ru-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O5XLGWN7 = $mol_type_enforce<
		`Ca-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8ZB6EXPC = $mol_type_enforce<
		`Tb-Yb-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CW41D94X = $mol_type_enforce<
		`Li-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BBMT39TX = $mol_type_enforce<
		`Er-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BHIDIDSZ = $mol_type_enforce<
		`La-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P5DNYJQV = $mol_type_enforce<
		`La-Dy-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6RHRVXD6 = $mol_type_enforce<
		`Ce-Nd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3YM06L8E = $mol_type_enforce<
		`Co-Pt-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P2HVJ13U = $mol_type_enforce<
		`Tm-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CKB3CEU5 = $mol_type_enforce<
		`Na-Mg-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z7JQMI1L = $mol_type_enforce<
		`Ce-Eu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O9NO9G1C = $mol_type_enforce<
		`Cs-Li-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3V55G77A = $mol_type_enforce<
		`Gd-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MZGRJNVZ = $mol_type_enforce<
		`Re-Pd-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AKU89VEP = $mol_type_enforce<
		`Yb-Nd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3QGTJLCO = $mol_type_enforce<
		`Mg-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WE1SE3I3 = $mol_type_enforce<
		`Fe-Pd-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TMEYFX6Y = $mol_type_enforce<
		`K-Rb-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0OUJ6PJI = $mol_type_enforce<
		`Ba-Ca-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3YZVZB3K = $mol_type_enforce<
		`Rb-Mg-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GOP455HO = $mol_type_enforce<
		`La-Sm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__28UANB9X = $mol_type_enforce<
		`Y-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__132STJ2A = $mol_type_enforce<
		`Cs-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5442YHU0 = $mol_type_enforce<
		`Tb-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TLMBFOM9 = $mol_type_enforce<
		`Pm-Gd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NXPONV8Y = $mol_type_enforce<
		`La-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LAQYD5FX = $mol_type_enforce<
		`Tb-Gd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5YELMCI5 = $mol_type_enforce<
		`Ce-Pm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q5IG8M89 = $mol_type_enforce<
		`Pm-Sm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3519QC2O = $mol_type_enforce<
		`Hf-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5W52LI3C = $mol_type_enforce<
		`Y-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W59WSK8Y = $mol_type_enforce<
		`Be-Zn-In`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__899M4806 = $mol_type_enforce<
		`Yb-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZU0BO2EU = $mol_type_enforce<
		`Nd-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__39A1LF9C = $mol_type_enforce<
		`Ce-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TUHDUM61 = $mol_type_enforce<
		`Cs-K-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JV0I7TRI = $mol_type_enforce<
		`Ag-Pd-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5G641OL1 = $mol_type_enforce<
		`Sm-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GCCVE6A8 = $mol_type_enforce<
		`Ho-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SYNFLHR4 = $mol_type_enforce<
		`Yb-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5P7G9QF4 = $mol_type_enforce<
		`Tb-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MTGDEDOF = $mol_type_enforce<
		`Yb-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K7GPK4UZ = $mol_type_enforce<
		`Ca-Tb-Ce`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZZ1RKO78 = $mol_type_enforce<
		`Tb-Dy-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9BMG89UO = $mol_type_enforce<
		`Zn-Cd-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZM0R0LTO = $mol_type_enforce<
		`Pm-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NRVPVSLQ = $mol_type_enforce<
		`Yb-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M2DEPOVG = $mol_type_enforce<
		`Hf-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JW42I90J = $mol_type_enforce<
		`Li-Sm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F8NKVSEH = $mol_type_enforce<
		`Li-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__66FPWF0R = $mol_type_enforce<
		`Na-Ta-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S5C5XQGV = $mol_type_enforce<
		`Pr-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KB29AZZM = $mol_type_enforce<
		`V-In-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WZJ5SEXQ = $mol_type_enforce<
		`Er-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__012OV7J2 = $mol_type_enforce<
		`Pm-Dy-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0N1QVK8S = $mol_type_enforce<
		`Tb-Gd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PCI5YZGC = $mol_type_enforce<
		`Nd-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EHN0GOLT = $mol_type_enforce<
		`Sr-Ca-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BQSEPBMX = $mol_type_enforce<
		`Tm-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X3U1WW5O = $mol_type_enforce<
		`Gd-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EL9UZCUY = $mol_type_enforce<
		`Li-Gd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J5BXF2OE = $mol_type_enforce<
		`Ag-Os-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WS1CHZJ4 = $mol_type_enforce<
		`La-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KGEL7MZJ = $mol_type_enforce<
		`Th-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OLMHWSDD = $mol_type_enforce<
		`Co-Pd-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UKBM5IL1 = $mol_type_enforce<
		`Ce-Ho-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZOHSHMF7 = $mol_type_enforce<
		`Cu-Re-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__683USGFQ = $mol_type_enforce<
		`Yb-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__05GA4SB0 = $mol_type_enforce<
		`Li-La-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZDCHUSO4 = $mol_type_enforce<
		`Cu-Ag-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WHRPB3ON = $mol_type_enforce<
		`Eu-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__711JIJXY = $mol_type_enforce<
		`Rb-Na-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N1FPI2X0 = $mol_type_enforce<
		`Co-Rh-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0HZ9LF90 = $mol_type_enforce<
		`Tb-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FML23WMF = $mol_type_enforce<
		`Ce-Gd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P52TYB0T = $mol_type_enforce<
		`Tb-Ce-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9C8G0AQ3 = $mol_type_enforce<
		`Gd-Dy-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QY3Q381I = $mol_type_enforce<
		`Zn-In-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HIPITQV4 = $mol_type_enforce<
		`Ce-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X3PMSGWF = $mol_type_enforce<
		`Y-Ho-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WZZB03ZA = $mol_type_enforce<
		`Pm-Pr-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9Q7UE6DJ = $mol_type_enforce<
		`Li-Pr-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__53I2ZLOI = $mol_type_enforce<
		`Er-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G2KTXU7F = $mol_type_enforce<
		`Li-Gd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BS4PD9C2 = $mol_type_enforce<
		`Li-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H44MHBVR = $mol_type_enforce<
		`Yb-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__89B8SWPI = $mol_type_enforce<
		`Pu-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D7CZ9SQE = $mol_type_enforce<
		`La-Tb-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NFHZIO9W = $mol_type_enforce<
		`Li-La-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6XGTT7W9 = $mol_type_enforce<
		`Cu-Ni-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z00MHN3Q = $mol_type_enforce<
		`Yb-Pr-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1GAHDZNK = $mol_type_enforce<
		`La-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1MJRDKVS = $mol_type_enforce<
		`Fe-Ag-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3VAN8DZL = $mol_type_enforce<
		`Mg-Mn-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6Q17FQJW = $mol_type_enforce<
		`Fe-Ag-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D9VM0E5H = $mol_type_enforce<
		`Nd-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__96Q2O0VR = $mol_type_enforce<
		`La-Pr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XX03RDSK = $mol_type_enforce<
		`Cr-Cu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AOA5WV6P = $mol_type_enforce<
		`Tb-Er-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LJJ01EP0 = $mol_type_enforce<
		`Li-Lu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D8MSTGYY = $mol_type_enforce<
		`Y-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__30PPH3GJ = $mol_type_enforce<
		`Lu-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EI3M04OH = $mol_type_enforce<
		`Sn-B-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GLO2TZGQ = $mol_type_enforce<
		`Li-Pr-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7FHG7WQH = $mol_type_enforce<
		`Re-Hg-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZYXOZQ3P = $mol_type_enforce<
		`Yb-Dy-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZF0V6DCY = $mol_type_enforce<
		`Tb-Pm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TTU10L7B = $mol_type_enforce<
		`Cs-K-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GS0ZZRWQ = $mol_type_enforce<
		`Ni-Ir-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__28N9F19V = $mol_type_enforce<
		`Ca-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__636GUHD6 = $mol_type_enforce<
		`Eu-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__315CL0VU = $mol_type_enforce<
		`Zr-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H4DRN0EB = $mol_type_enforce<
		`Yb-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GYY4GF7E = $mol_type_enforce<
		`K-Li-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J44TRQ6Z = $mol_type_enforce<
		`Yb-Pr-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6SQ430M5 = $mol_type_enforce<
		`Y-Pu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PH2BI1HX = $mol_type_enforce<
		`Ce-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I0F4M9JJ = $mol_type_enforce<
		`Ce-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ILQ7P6BR = $mol_type_enforce<
		`Nb-V-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y9LODUYL = $mol_type_enforce<
		`V-Cu-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LVS2PDLZ = $mol_type_enforce<
		`Y-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NY2F9D91 = $mol_type_enforce<
		`Fe-Cu-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KTVGN3HA = $mol_type_enforce<
		`Re-Pt-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__42Q73PO3 = $mol_type_enforce<
		`Pu-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__078PW634 = $mol_type_enforce<
		`Re-Ir-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6HQ22X7Q = $mol_type_enforce<
		`Ca-Yb-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZSAWB8IE = $mol_type_enforce<
		`Nd-Sm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__386C688T = $mol_type_enforce<
		`Na-Sr-Ca`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VLIOJT0H = $mol_type_enforce<
		`Ho-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2JWOBLWV = $mol_type_enforce<
		`Ce-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZBU333DB = $mol_type_enforce<
		`Ce-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SVQ40VT0 = $mol_type_enforce<
		`Pm-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CCPUBZF9 = $mol_type_enforce<
		`La-Gd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__APNPW9FH = $mol_type_enforce<
		`Dy-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1F97JAR6 = $mol_type_enforce<
		`Ta-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NI5VU4QZ = $mol_type_enforce<
		`Nd-Dy-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2UC3XKKY = $mol_type_enforce<
		`Y-Ho-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W7DK5SP9 = $mol_type_enforce<
		`Sr-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SKZR5JV9 = $mol_type_enforce<
		`La-Pr-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OZJET1SQ = $mol_type_enforce<
		`Cr-Cu-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AN00HBER = $mol_type_enforce<
		`Pm-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JWNS217M = $mol_type_enforce<
		`La-Pm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MFNOG2ID = $mol_type_enforce<
		`Sm-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HQBAQ4QG = $mol_type_enforce<
		`Y-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IQ7ZEOGT = $mol_type_enforce<
		`Ba-Sr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0ELMLTVA = $mol_type_enforce<
		`Ta-V-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GYFO1T6S = $mol_type_enforce<
		`Ga-Hg-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JN8SL5YL = $mol_type_enforce<
		`La-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BH3ZKZGE = $mol_type_enforce<
		`Nd-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6QQYFAMI = $mol_type_enforce<
		`Li-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CRSUBZQY = $mol_type_enforce<
		`Ca-Eu-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9BX5VA31 = $mol_type_enforce<
		`Pr-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BPE0EYRT = $mol_type_enforce<
		`Lu-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F504JJQC = $mol_type_enforce<
		`Dy-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D6V807ZV = $mol_type_enforce<
		`Ce-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M9FM7K1I = $mol_type_enforce<
		`Na-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0MZ6XXGC = $mol_type_enforce<
		`La-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UU2497E4 = $mol_type_enforce<
		`Tb-Nd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WWV77115 = $mol_type_enforce<
		`Eu-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MD8WL7GW = $mol_type_enforce<
		`Ca-Ce-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W80Q5AJQ = $mol_type_enforce<
		`Pr-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z0T5GP75 = $mol_type_enforce<
		`Pm-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ITA3X5DS = $mol_type_enforce<
		`Nd-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MBCKNLB6 = $mol_type_enforce<
		`La-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GRVI6P0D = $mol_type_enforce<
		`Co-Pd-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E4DJF26Y = $mol_type_enforce<
		`Pr-Sm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U4CRSATH = $mol_type_enforce<
		`Li-Mg-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ESTJ7K9I = $mol_type_enforce<
		`Lu-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3TD9BN53 = $mol_type_enforce<
		`Eu-Hf-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VNIBYUDJ = $mol_type_enforce<
		`Li-Gd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QEWK0JVF = $mol_type_enforce<
		`Er-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7D67P303 = $mol_type_enforce<
		`Yb-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1VKSOKJ6 = $mol_type_enforce<
		`La-Eu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__15B3MBEW = $mol_type_enforce<
		`Gd-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M3L896KR = $mol_type_enforce<
		`Cs-Li-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__47FWO9AX = $mol_type_enforce<
		`La-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__54I7TR1N = $mol_type_enforce<
		`Rb-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DWXIWABE = $mol_type_enforce<
		`La-Pr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V8V8648M = $mol_type_enforce<
		`Nd-Gd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ETV0Q74Q = $mol_type_enforce<
		`Th-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IHZ142GG = $mol_type_enforce<
		`Na-Mg-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7Q7KU8TF = $mol_type_enforce<
		`Ce-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FJIEMIIM = $mol_type_enforce<
		`Eu-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UVFTBPTT = $mol_type_enforce<
		`Na-Be-Al`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0R0JTRJ2 = $mol_type_enforce<
		`Yb-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VBD4WGHH = $mol_type_enforce<
		`Gd-Dy-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IPNTS97B = $mol_type_enforce<
		`Pm-Sm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B5XJ4PIZ = $mol_type_enforce<
		`Cs-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B0QV8L9H = $mol_type_enforce<
		`Pm-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R17UQBX4 = $mol_type_enforce<
		`Gd-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VVTLW11U = $mol_type_enforce<
		`Cs-K-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__318NBM17 = $mol_type_enforce<
		`Tb-Yb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LVJM27RW = $mol_type_enforce<
		`K-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5MEULRYY = $mol_type_enforce<
		`La-Yb-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3HV4WQ1D = $mol_type_enforce<
		`Rb-Li-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KVHKLSKP = $mol_type_enforce<
		`Li-Gd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z656G8QR = $mol_type_enforce<
		`La-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T17BBTFO = $mol_type_enforce<
		`Ce-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SPCUVQJZ = $mol_type_enforce<
		`Ba-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z232MEDY = $mol_type_enforce<
		`Ba-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ALYH0LQI = $mol_type_enforce<
		`Cu-Ni-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X4ZWPHWL = $mol_type_enforce<
		`Nd-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__52H0FG4W = $mol_type_enforce<
		`Cd-Si-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JANKUOA4 = $mol_type_enforce<
		`Nd-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8KQESQZC = $mol_type_enforce<
		`Tb-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UU5J89I7 = $mol_type_enforce<
		`Pr-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1X26BWAN = $mol_type_enforce<
		`U-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PFUISPE8 = $mol_type_enforce<
		`Nd-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O5VPJL22 = $mol_type_enforce<
		`Fe-Pd-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3UFGN3OT = $mol_type_enforce<
		`Na-Li-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HENP3TYG = $mol_type_enforce<
		`Ba-Ca-Yb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E055BLY8 = $mol_type_enforce<
		`Sm-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YU96D7WX = $mol_type_enforce<
		`Ca-La-Eu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K9W1WKTP = $mol_type_enforce<
		`Ca-La-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5NPO19WK = $mol_type_enforce<
		`Mn-Co-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M9ME6LZD = $mol_type_enforce<
		`Nd-Sm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6Z8QJYV1 = $mol_type_enforce<
		`Tc-Pd-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JUSTO6EX = $mol_type_enforce<
		`Cs-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JGU5H6CR = $mol_type_enforce<
		`Ca-Eu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KF890TN2 = $mol_type_enforce<
		`Li-La-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KMQADLCW = $mol_type_enforce<
		`Ni-Ir-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1CDUJ6UP = $mol_type_enforce<
		`Fe-Ni-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IFDY401T = $mol_type_enforce<
		`Pu-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I1QIQW53 = $mol_type_enforce<
		`Yb-Y-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FAPL9YU2 = $mol_type_enforce<
		`Eu-Y-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TY68U9RI = $mol_type_enforce<
		`Re-Ni-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WFU3BZCG = $mol_type_enforce<
		`Pm-Sm-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F4UVI5EQ = $mol_type_enforce<
		`Cu-Re-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XZUOU57Y = $mol_type_enforce<
		`Lu-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X7U0OCW7 = $mol_type_enforce<
		`Tm-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5OZ69GRD = $mol_type_enforce<
		`Ce-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7O5Z9P9Y = $mol_type_enforce<
		`Ca-Ce-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RQAKLT8W = $mol_type_enforce<
		`Ce-Sm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BMT0PFPT = $mol_type_enforce<
		`Re-Tc-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2PRH7GDM = $mol_type_enforce<
		`Ag-Ru-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__75S6WCV2 = $mol_type_enforce<
		`Mg-Cr-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F0MZIX6Y = $mol_type_enforce<
		`Ba-Ca-La`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JA8YKEBZ = $mol_type_enforce<
		`Ca-Yb-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NDQYGNI0 = $mol_type_enforce<
		`Ni-Os-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9F669FUR = $mol_type_enforce<
		`Tl-Cd-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D939ITG2 = $mol_type_enforce<
		`Mg-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YKCZP6TK = $mol_type_enforce<
		`Ba-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IFROHCF8 = $mol_type_enforce<
		`Fe-Ru-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KTJHEI62 = $mol_type_enforce<
		`Pr-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LF0QJ8R0 = $mol_type_enforce<
		`Nd-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R149ZTQG = $mol_type_enforce<
		`Ho-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LWI14KLK = $mol_type_enforce<
		`Ce-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FGHGGZT6 = $mol_type_enforce<
		`Ce-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HBR6O5EU = $mol_type_enforce<
		`Eu-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FHE5UOC6 = $mol_type_enforce<
		`Tb-Sm-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PRUBZB0O = $mol_type_enforce<
		`Ce-Pr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7ZTVAZCP = $mol_type_enforce<
		`Sc-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QNXZTEQ7 = $mol_type_enforce<
		`Sm-Dy-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D8TSYPS5 = $mol_type_enforce<
		`Pm-Dy-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IBVYUQ84 = $mol_type_enforce<
		`Er-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0BD66R20 = $mol_type_enforce<
		`La-Gd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DHEQPM2N = $mol_type_enforce<
		`La-Mn-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ASRA2KTL = $mol_type_enforce<
		`Ba-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VXFYRFAF = $mol_type_enforce<
		`Tb-Ce-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3EJ6UQHH = $mol_type_enforce<
		`Ag-Ru-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D8YMBFAO = $mol_type_enforce<
		`Ba-Pr-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4FODVHV7 = $mol_type_enforce<
		`Yb-Dy-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XCX7YH8M = $mol_type_enforce<
		`La-Pr-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3E4DHPF7 = $mol_type_enforce<
		`Li-Ta-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K60RJHOY = $mol_type_enforce<
		`La-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UG18YTW4 = $mol_type_enforce<
		`Tl-V-In`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2CIXT5O2 = $mol_type_enforce<
		`Tb-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5P2RQQ3D = $mol_type_enforce<
		`La-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MMJN5WFD = $mol_type_enforce<
		`Ru-Pt-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M51F9SAS = $mol_type_enforce<
		`Sm-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QH62DHUN = $mol_type_enforce<
		`Tm-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WC253BXC = $mol_type_enforce<
		`Ce-Er-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PQDVPLIW = $mol_type_enforce<
		`Cr-W-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CKU9KDHT = $mol_type_enforce<
		`Yb-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A1SAM86U = $mol_type_enforce<
		`La-Eu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4HLXMOYN = $mol_type_enforce<
		`Pr-Nd-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X1Y6IU4N = $mol_type_enforce<
		`Li-Nb-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GQSQMP5C = $mol_type_enforce<
		`Cu-Pt-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FP8GERQK = $mol_type_enforce<
		`Ni-Ag-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FO7GM0B3 = $mol_type_enforce<
		`Yb-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__423GKOWN = $mol_type_enforce<
		`Li-Pm-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KNH9QP3C = $mol_type_enforce<
		`Cs-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SOZV7M9S = $mol_type_enforce<
		`Y-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XLIKBK4W = $mol_type_enforce<
		`Fe-Ag-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S17FRK0R = $mol_type_enforce<
		`Hf-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8SUO63TW = $mol_type_enforce<
		`La-Sm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y5K9HUG9 = $mol_type_enforce<
		`Er-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7BKINTMN = $mol_type_enforce<
		`Ir-Os-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AI4CMAXW = $mol_type_enforce<
		`Dy-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NSIQD9LQ = $mol_type_enforce<
		`Ba-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R4J3NELI = $mol_type_enforce<
		`Ag-Pd-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PGQMEA10 = $mol_type_enforce<
		`K-Rb-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3INVTZ5V = $mol_type_enforce<
		`Pr-Sm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RE535NYX = $mol_type_enforce<
		`Nd-Dy-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W6OVXVZV = $mol_type_enforce<
		`Li-Pm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F17Q62QA = $mol_type_enforce<
		`Ba-Yb-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EHDTI4OP = $mol_type_enforce<
		`Tb-Pm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SR15AACP = $mol_type_enforce<
		`La-Pm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UJDKHB4I = $mol_type_enforce<
		`Sm-Dy-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2XA7AOVK = $mol_type_enforce<
		`V-Cr-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QB5EKHNK = $mol_type_enforce<
		`Tb-Pm-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__89VRJF93 = $mol_type_enforce<
		`Ho-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TXVNMSV4 = $mol_type_enforce<
		`Ba-Yb-Eu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K6HDSOWO = $mol_type_enforce<
		`La-Sm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SRD0JAPB = $mol_type_enforce<
		`Li-Tb-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H68SR00W = $mol_type_enforce<
		`Tb-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7FFI7NV7 = $mol_type_enforce<
		`Na-Mg-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XX6VSSKM = $mol_type_enforce<
		`Pr-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UDZ246FR = $mol_type_enforce<
		`Ce-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VJZSH002 = $mol_type_enforce<
		`Er-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YRNJQNGQ = $mol_type_enforce<
		`Gd-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1WOP7YWZ = $mol_type_enforce<
		`Tb-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JYZMNPTH = $mol_type_enforce<
		`Nd-Gd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OGSB3U9T = $mol_type_enforce<
		`Li-Pr-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BKV085WJ = $mol_type_enforce<
		`Cr-Ag-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CRZWX5EQ = $mol_type_enforce<
		`Lu-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PMKJP34S = $mol_type_enforce<
		`Nb-Hg-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NLDYFKWT = $mol_type_enforce<
		`Tb-Gd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CTJOWXLA = $mol_type_enforce<
		`La-Yb-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EJU0F9M7 = $mol_type_enforce<
		`Fe-Ir-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GUB7X6XR = $mol_type_enforce<
		`Sm-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BMHWDPLK = $mol_type_enforce<
		`Th-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9XXE9RAO = $mol_type_enforce<
		`Tb-Gd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1HXANB8B = $mol_type_enforce<
		`Tb-Pm-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IN2C2KEH = $mol_type_enforce<
		`Pr-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3NW73XWF = $mol_type_enforce<
		`Er-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8ONRR2KL = $mol_type_enforce<
		`Th-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KMVITO4C = $mol_type_enforce<
		`Y-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5K3KEB65 = $mol_type_enforce<
		`La-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HPVOKDRP = $mol_type_enforce<
		`Ga-Hg-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XEPPKYH9 = $mol_type_enforce<
		`U-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1GRKNE3S = $mol_type_enforce<
		`Ce-Pr-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__949HRGTB = $mol_type_enforce<
		`Ho-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__05JSDD2R = $mol_type_enforce<
		`Pm-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JN3LCGDY = $mol_type_enforce<
		`Li-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IGD24IH1 = $mol_type_enforce<
		`Cr-Fe-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VUJ9PFVK = $mol_type_enforce<
		`Rb-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2B7LEXQ9 = $mol_type_enforce<
		`Ce-Pr-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OM6XVAO0 = $mol_type_enforce<
		`Li-Pr-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FWD1LL13 = $mol_type_enforce<
		`Yb-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4PJPTYO1 = $mol_type_enforce<
		`La-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YGJ5UMBG = $mol_type_enforce<
		`Pm-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C1BDHP9O = $mol_type_enforce<
		`Hg-Bi-Sb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OGB46L0Z = $mol_type_enforce<
		`Ce-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9TPR6MIZ = $mol_type_enforce<
		`K-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YM3WAMQU = $mol_type_enforce<
		`Ca-Eu-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R04C2EDA = $mol_type_enforce<
		`Y-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GFY2X128 = $mol_type_enforce<
		`Nd-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DN6RR0WD = $mol_type_enforce<
		`Ag-Ir-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HGQCBFRC = $mol_type_enforce<
		`Ni-Ru-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EAAN96CO = $mol_type_enforce<
		`Li-Nd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SADAQQ5R = $mol_type_enforce<
		`Cs-Rb-Li`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FAA9BF39 = $mol_type_enforce<
		`Na-Li-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V0YIS9QY = $mol_type_enforce<
		`Gd-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MK616IYE = $mol_type_enforce<
		`Co-Ag-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WORT1D1J = $mol_type_enforce<
		`B-Sb-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OLD556A3 = $mol_type_enforce<
		`Pr-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__02GC1IKN = $mol_type_enforce<
		`La-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XM646VGJ = $mol_type_enforce<
		`Tb-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8WRJ17E7 = $mol_type_enforce<
		`Re-Ni-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OWI44BOZ = $mol_type_enforce<
		`Yb-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PO3DF25H = $mol_type_enforce<
		`Pm-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R0EBQJWM = $mol_type_enforce<
		`La-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O2PF9FX2 = $mol_type_enforce<
		`Be-Si-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T3E74VRX = $mol_type_enforce<
		`Cr-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0KKTYG19 = $mol_type_enforce<
		`Ce-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6M8BT4OY = $mol_type_enforce<
		`Ce-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NWVBUXPI = $mol_type_enforce<
		`Li-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UR31XJYI = $mol_type_enforce<
		`Tb-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6PHCUSTQ = $mol_type_enforce<
		`Tb-Sm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1DFWGUEI = $mol_type_enforce<
		`Pm-Nd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9UTQXNSW = $mol_type_enforce<
		`Sc-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TI9C2387 = $mol_type_enforce<
		`Li-Nd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JOTEBHH9 = $mol_type_enforce<
		`La-Nd-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SMBMYXF4 = $mol_type_enforce<
		`La-Yb-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IGNI3G0P = $mol_type_enforce<
		`Ce-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6EL6XQJ8 = $mol_type_enforce<
		`Rb-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DFGKH5FL = $mol_type_enforce<
		`La-Cr-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9XXTUNI1 = $mol_type_enforce<
		`Ce-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IOUOUM3D = $mol_type_enforce<
		`Zr-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QP91L620 = $mol_type_enforce<
		`Lu-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GU8N0PLE = $mol_type_enforce<
		`Sm-Dy-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q7CFEHG7 = $mol_type_enforce<
		`Nd-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DS0TDV4O = $mol_type_enforce<
		`Nd-Dy-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8XPV8REK = $mol_type_enforce<
		`Pm-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__59C1UODI = $mol_type_enforce<
		`Na-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__63S2AOID = $mol_type_enforce<
		`Pr-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__URJ82VVR = $mol_type_enforce<
		`La-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KRMQB6KX = $mol_type_enforce<
		`Al-Ga-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MOROH4IR = $mol_type_enforce<
		`La-Pm-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FA3MKKR7 = $mol_type_enforce<
		`Sm-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DQ9Q81NF = $mol_type_enforce<
		`Gd-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S713NIOP = $mol_type_enforce<
		`Nd-Sm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__39J8COJ9 = $mol_type_enforce<
		`Tb-Pm-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__76O0OOSZ = $mol_type_enforce<
		`Al-Hg-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CYTB1RSV = $mol_type_enforce<
		`V-Hg-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LYE9QG8A = $mol_type_enforce<
		`Pm-Pr-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CD3OQJX6 = $mol_type_enforce<
		`Ce-Th-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LJ9H37BM = $mol_type_enforce<
		`K-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IYUZM2ZO = $mol_type_enforce<
		`Pr-Dy-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y2OOO0BH = $mol_type_enforce<
		`Li-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IM85SYJK = $mol_type_enforce<
		`La-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X8GGJ6IN = $mol_type_enforce<
		`Dy-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ADET1VYU = $mol_type_enforce<
		`Lu-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZHXG1ZWL = $mol_type_enforce<
		`Nd-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5POJZ2C9 = $mol_type_enforce<
		`Pr-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JT307BCK = $mol_type_enforce<
		`La-Pm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WLMYZQZ0 = $mol_type_enforce<
		`Tl-Cd-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0I67G0IT = $mol_type_enforce<
		`Yb-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__18K6IQAK = $mol_type_enforce<
		`Os-Pd-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J31DDFNR = $mol_type_enforce<
		`Sm-Dy-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JYK04V97 = $mol_type_enforce<
		`Pu-Np-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QNQ5LPNN = $mol_type_enforce<
		`Nb-V-Hg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CUU30UOR = $mol_type_enforce<
		`Pr-Dy-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZQR0P65R = $mol_type_enforce<
		`Nd-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C885OK1G = $mol_type_enforce<
		`Ho-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E2CUPSL4 = $mol_type_enforce<
		`Zr-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__15B6TX7O = $mol_type_enforce<
		`Pm-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8ISB3ND9 = $mol_type_enforce<
		`V-Ag-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ORLUL9PY = $mol_type_enforce<
		`Pr-Dy-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WLORHVSA = $mol_type_enforce<
		`Zn-Cd-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OSBLIHIZ = $mol_type_enforce<
		`Li-Sm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__26JDVCHO = $mol_type_enforce<
		`La-Tb-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TCY4GGVU = $mol_type_enforce<
		`Cr-Ni-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__21Y0917V = $mol_type_enforce<
		`La-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FDJS2U5A = $mol_type_enforce<
		`La-Ce-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1VTHTIJD = $mol_type_enforce<
		`Yb-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DCD0ENHD = $mol_type_enforce<
		`Yb-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IGCIUXKX = $mol_type_enforce<
		`Na-Ca-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__152EZUSZ = $mol_type_enforce<
		`Co-Hg-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TH7QA10W = $mol_type_enforce<
		`Pm-Pr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W2G1C0M4 = $mol_type_enforce<
		`Be-Si-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U4HXMB1P = $mol_type_enforce<
		`Sr-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UH46O3AS = $mol_type_enforce<
		`Yb-Gd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BPAWWJLP = $mol_type_enforce<
		`V-Pd-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JH1Q55M6 = $mol_type_enforce<
		`Re-Ir-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HIPU2FEQ = $mol_type_enforce<
		`Ce-Gd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7V8R6BFT = $mol_type_enforce<
		`Li-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HZELZ0EJ = $mol_type_enforce<
		`Be-Zn-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3RFD0S86 = $mol_type_enforce<
		`Y-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V7QPR06A = $mol_type_enforce<
		`Ga-Hg-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AH6IG2ZK = $mol_type_enforce<
		`Ba-Pr-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__66TB8NHY = $mol_type_enforce<
		`La-Tm-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3RQDAU9Z = $mol_type_enforce<
		`Li-Tb-Ce`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EX5FFVOF = $mol_type_enforce<
		`Yb-Eu-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VJRDHI2F = $mol_type_enforce<
		`Si-Ag-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2L0J2X3Q = $mol_type_enforce<
		`Ce-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0FKZRLM2 = $mol_type_enforce<
		`Gd-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GHO5GP12 = $mol_type_enforce<
		`Th-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PHOA55OE = $mol_type_enforce<
		`Ag-Ir-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GPPWAJWI = $mol_type_enforce<
		`Cu-Re-Tc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C4XTSY6M = $mol_type_enforce<
		`Ce-Pm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WXU84TCO = $mol_type_enforce<
		`Ba-Fe-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__850QF52B = $mol_type_enforce<
		`Ir-Os-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EDTC8VSO = $mol_type_enforce<
		`Cr-Cu-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W5D0W7QR = $mol_type_enforce<
		`La-Ce-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5ALZ5GE3 = $mol_type_enforce<
		`Li-La-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6DKACE3W = $mol_type_enforce<
		`Ca-Yb-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7DIKYJY0 = $mol_type_enforce<
		`Fe-Pd-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SP9FPQU7 = $mol_type_enforce<
		`Ce-Eu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y7YJZZBR = $mol_type_enforce<
		`Cs-Pr-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LKXULSRN = $mol_type_enforce<
		`Nb-Cu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ASZ4T2N8 = $mol_type_enforce<
		`Fe-Cu-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8REEM3AS = $mol_type_enforce<
		`Tb-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RMKDXFMB = $mol_type_enforce<
		`La-Th-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CRE2AFDH = $mol_type_enforce<
		`Sm-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DEUUNH2T = $mol_type_enforce<
		`Yb-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YFXJMR1P = $mol_type_enforce<
		`Al-Zn-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IYTD4K0Z = $mol_type_enforce<
		`Yb-Ho-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H3MMOVE3 = $mol_type_enforce<
		`Cs-K-Li`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CP4O4MN4 = $mol_type_enforce<
		`Pr-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3WFCB4G0 = $mol_type_enforce<
		`Fe-Co-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WLP6RCV4 = $mol_type_enforce<
		`Tb-Pm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8RAD0LUR = $mol_type_enforce<
		`Lu-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4N3D1F00 = $mol_type_enforce<
		`Y-Ho-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DSI4NG3M = $mol_type_enforce<
		`Li-Ce-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EAFKSH5Y = $mol_type_enforce<
		`Sm-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZACDAMN7 = $mol_type_enforce<
		`Ni-Pd-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__13F654Y6 = $mol_type_enforce<
		`Sc-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H6YP9GRL = $mol_type_enforce<
		`Zn-In-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZR7Q272Z = $mol_type_enforce<
		`Y-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S7V36CR7 = $mol_type_enforce<
		`Ce-Eu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KS0EINN9 = $mol_type_enforce<
		`Yb-Gd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3GODWB3A = $mol_type_enforce<
		`Tb-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P9QMFPPD = $mol_type_enforce<
		`Yb-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XOR3YW2M = $mol_type_enforce<
		`Tb-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DLIWEE9Z = $mol_type_enforce<
		`Ta-Tl-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AMTC4I25 = $mol_type_enforce<
		`Hg-Mo-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YDU8YLFY = $mol_type_enforce<
		`Sm-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y7D9DVPO = $mol_type_enforce<
		`Co-Re-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JCWW0C50 = $mol_type_enforce<
		`Co-Ag-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TCR0M57M = $mol_type_enforce<
		`La-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MVCLPL9L = $mol_type_enforce<
		`Hf-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5V7L05GE = $mol_type_enforce<
		`Fe-Ni-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MQWEFY08 = $mol_type_enforce<
		`Nb-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7G9JH7CV = $mol_type_enforce<
		`Gd-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MA6GZ76O = $mol_type_enforce<
		`Pd-Pt-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WX4Y76NG = $mol_type_enforce<
		`Pm-Dy-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FVW6R9NC = $mol_type_enforce<
		`Co-Ni-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__STHCDTCZ = $mol_type_enforce<
		`Gd-Dy-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__75TAD552 = $mol_type_enforce<
		`Tm-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8L4BLO50 = $mol_type_enforce<
		`Nd-Dy-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IL05M0X2 = $mol_type_enforce<
		`Dy-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TKF86IUB = $mol_type_enforce<
		`Tb-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LVT2PZDJ = $mol_type_enforce<
		`Nd-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LJYQ0FZN = $mol_type_enforce<
		`Sm-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HKAIC5ND = $mol_type_enforce<
		`Li-La-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AIWZLYFM = $mol_type_enforce<
		`Th-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3FBP3QHX = $mol_type_enforce<
		`Tb-Ce-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__83AB2CDU = $mol_type_enforce<
		`Gd-Ho-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4ZT71BH5 = $mol_type_enforce<
		`Pr-Dy-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PAMC7NLA = $mol_type_enforce<
		`Hf-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T83P5VK2 = $mol_type_enforce<
		`Ca-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X242XV12 = $mol_type_enforce<
		`Ti-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TK5TPI69 = $mol_type_enforce<
		`Co-Ir-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ADJWBJS9 = $mol_type_enforce<
		`Ba-Sr-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RCVUPCCM = $mol_type_enforce<
		`Ba-Yb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PW209381 = $mol_type_enforce<
		`Yb-Th-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T5YIWALG = $mol_type_enforce<
		`Li-Nd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FJB7ZBTT = $mol_type_enforce<
		`Ce-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F36NCH4M = $mol_type_enforce<
		`Co-Re-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8OMM7ZTM = $mol_type_enforce<
		`Yb-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6YTKB9ML = $mol_type_enforce<
		`Re-Pd-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__37GU7BCV = $mol_type_enforce<
		`Ni-Pd-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1FORSF5U = $mol_type_enforce<
		`Ho-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZIBTY0AM = $mol_type_enforce<
		`Cr-Fe-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E7F89YZ3 = $mol_type_enforce<
		`Tb-Sm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BCAYDXQ8 = $mol_type_enforce<
		`Ce-Gd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A4D7P0Q3 = $mol_type_enforce<
		`Li-Ce-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZMWKTMZZ = $mol_type_enforce<
		`Nd-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H1YMQVVL = $mol_type_enforce<
		`Li-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QHIO89DU = $mol_type_enforce<
		`Nd-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__67VJFEYD = $mol_type_enforce<
		`La-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__126U540C = $mol_type_enforce<
		`La-Ce-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MXHCXR4X = $mol_type_enforce<
		`La-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__611OKOOA = $mol_type_enforce<
		`Ag-Os-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6BZ0YOHT = $mol_type_enforce<
		`Pt-W-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T0P17V01 = $mol_type_enforce<
		`Cu-Bi-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8EYS81NY = $mol_type_enforce<
		`Pr-Nd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XHNDYCAG = $mol_type_enforce<
		`Fe-Co-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WSS9MUMJ = $mol_type_enforce<
		`Li-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G85QKN30 = $mol_type_enforce<
		`Y-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ELY7LER7 = $mol_type_enforce<
		`Be-Si-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__40HG7C0M = $mol_type_enforce<
		`Li-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3NWH2X2L = $mol_type_enforce<
		`Th-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T00DTEN7 = $mol_type_enforce<
		`Ho-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JBOHKGQN = $mol_type_enforce<
		`Pm-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JAOREME2 = $mol_type_enforce<
		`Th-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__60B4F2CO = $mol_type_enforce<
		`Gd-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HWL5L1LW = $mol_type_enforce<
		`Yb-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ADY516O6 = $mol_type_enforce<
		`Tm-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__04R76ZAI = $mol_type_enforce<
		`Cs-Mg-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__05I0WAG3 = $mol_type_enforce<
		`La-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0YNRO3OX = $mol_type_enforce<
		`Li-Nd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O9NOZGC8 = $mol_type_enforce<
		`Co-Ag-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MN4UWXI1 = $mol_type_enforce<
		`Ba-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ASVDH496 = $mol_type_enforce<
		`Pr-Gd-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3ZLBVR0E = $mol_type_enforce<
		`Ce-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6LBWM0X0 = $mol_type_enforce<
		`Tb-Dy-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H27C23NV = $mol_type_enforce<
		`Sr-Ca-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H7DK72I3 = $mol_type_enforce<
		`Nd-Sc-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JUD3ILVG = $mol_type_enforce<
		`Li-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZKDARETX = $mol_type_enforce<
		`Y-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YS33IJBE = $mol_type_enforce<
		`Cr-Cu-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZCW1EO7O = $mol_type_enforce<
		`Fe-Os-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZYMYSRXE = $mol_type_enforce<
		`Pm-Sm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NE2V0NXC = $mol_type_enforce<
		`Cu-Pb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T0L1M89C = $mol_type_enforce<
		`Nd-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FOPW9SRU = $mol_type_enforce<
		`Pm-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TG69DH4S = $mol_type_enforce<
		`Ce-Nd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PADJXLSV = $mol_type_enforce<
		`Fe-Ni-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SAOCD11W = $mol_type_enforce<
		`U-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IAR7BDYL = $mol_type_enforce<
		`Nd-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ULFUIRAI = $mol_type_enforce<
		`Dy-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RWT1VMBJ = $mol_type_enforce<
		`Ce-Pu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0AJYUNJA = $mol_type_enforce<
		`La-Ce-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W1T96WAT = $mol_type_enforce<
		`Tm-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KQCB8LHQ = $mol_type_enforce<
		`La-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4XJNE08V = $mol_type_enforce<
		`Ba-La-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SSVT50XE = $mol_type_enforce<
		`Tm-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O5H6ZRQS = $mol_type_enforce<
		`Eu-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D5BEWMME = $mol_type_enforce<
		`Yb-Y-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HNUVRDDN = $mol_type_enforce<
		`La-Yb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__47Y6K37X = $mol_type_enforce<
		`Hf-Th-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QFVCR1XL = $mol_type_enforce<
		`Nd-Sm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V9OKXTV7 = $mol_type_enforce<
		`Na-Hf-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ORUN0AZP = $mol_type_enforce<
		`Fe-Ag-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5QTXSBS8 = $mol_type_enforce<
		`Li-Pu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GR611YI4 = $mol_type_enforce<
		`Pr-Sm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MMP9VEN8 = $mol_type_enforce<
		`Tb-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__82HS7JUT = $mol_type_enforce<
		`Sm-Gd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J9O6RTKS = $mol_type_enforce<
		`Co-Cu-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8SZ2FWI7 = $mol_type_enforce<
		`Re-Ag-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CJDHCC8H = $mol_type_enforce<
		`Ru-Rh-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GZZ010QB = $mol_type_enforce<
		`Mn-Tl-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CZ544S9V = $mol_type_enforce<
		`Pr-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WXG3RHE4 = $mol_type_enforce<
		`La-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WKKNUJVD = $mol_type_enforce<
		`Dy-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CXJ8JVNQ = $mol_type_enforce<
		`Ta-In-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G380TSDA = $mol_type_enforce<
		`Be-In-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KR9FU8AN = $mol_type_enforce<
		`Y-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BOXC0ORL = $mol_type_enforce<
		`Cd-Bi-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6WD084BY = $mol_type_enforce<
		`Yb-Dy-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KFP3DNT6 = $mol_type_enforce<
		`Na-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VGA7SHKE = $mol_type_enforce<
		`Ba-Nd-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5TTLL0TS = $mol_type_enforce<
		`Ca-Mn-Co`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RHV0Y8B0 = $mol_type_enforce<
		`Li-Nd-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y65KDCFK = $mol_type_enforce<
		`Co-Os-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3SUW2YXR = $mol_type_enforce<
		`Co-Ru-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5CHKQ7FB = $mol_type_enforce<
		`Yb-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9CMRD4C0 = $mol_type_enforce<
		`K-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KURZMC2Z = $mol_type_enforce<
		`Tb-Yb-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UGO9G8AY = $mol_type_enforce<
		`Tb-Yb-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FP2LLYBP = $mol_type_enforce<
		`Sc-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4GRNXJOZ = $mol_type_enforce<
		`Fe-Co-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6DA4F3Q8 = $mol_type_enforce<
		`Fe-Cu-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__04XD1H2O = $mol_type_enforce<
		`Hf-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9FP4TZGW = $mol_type_enforce<
		`Tb-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XAIOUH2U = $mol_type_enforce<
		`Hg-Ge-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__15R7D6UV = $mol_type_enforce<
		`K-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R5D49QRB = $mol_type_enforce<
		`Li-La-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AWVWLH9H = $mol_type_enforce<
		`Er-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SQN3EYIC = $mol_type_enforce<
		`K-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WPC10WDL = $mol_type_enforce<
		`Ce-Y-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1N33LS0E = $mol_type_enforce<
		`Gd-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UZH7DIEI = $mol_type_enforce<
		`Li-Tb-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LBCOIE4X = $mol_type_enforce<
		`Fe-Cu-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MZO80J2Y = $mol_type_enforce<
		`Cu-Os-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FCGZU19O = $mol_type_enforce<
		`Tb-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3L413FG6 = $mol_type_enforce<
		`Pr-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3MARY3YB = $mol_type_enforce<
		`Li-Y-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BQ98AEVZ = $mol_type_enforce<
		`Dy-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__984OOY19 = $mol_type_enforce<
		`Na-Cu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MRFYXZFK = $mol_type_enforce<
		`Yb-Eu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9QYFXKE6 = $mol_type_enforce<
		`Li-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IISLJWMZ = $mol_type_enforce<
		`Cs-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EIKERZJ1 = $mol_type_enforce<
		`Co-Cu-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__85BPXO80 = $mol_type_enforce<
		`Rb-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O235DK9K = $mol_type_enforce<
		`Al-Ga-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q8T2HEG0 = $mol_type_enforce<
		`V-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8M610KBG = $mol_type_enforce<
		`Pm-Gd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LPX5KUMD = $mol_type_enforce<
		`Li-La-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__07D8HZ9A = $mol_type_enforce<
		`Ce-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NRST6PYL = $mol_type_enforce<
		`Ce-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IX3SFE5L = $mol_type_enforce<
		`Ag-Rh-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BUVHGZ05 = $mol_type_enforce<
		`Ce-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__43ARO90U = $mol_type_enforce<
		`Bi-B-Sb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VQX5DDFF = $mol_type_enforce<
		`Ho-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1OW5LID6 = $mol_type_enforce<
		`La-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UWC6Z9MZ = $mol_type_enforce<
		`Tb-Dy-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WXRZQDQ1 = $mol_type_enforce<
		`Pm-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BGUO5HMU = $mol_type_enforce<
		`Tb-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F2FWV65C = $mol_type_enforce<
		`Zn-Cd-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WFSGYQLL = $mol_type_enforce<
		`Ce-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CEULXV7U = $mol_type_enforce<
		`Sm-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__613HUP1Y = $mol_type_enforce<
		`Th-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0R46BVMQ = $mol_type_enforce<
		`Tb-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7TX9DDUJ = $mol_type_enforce<
		`Pr-Sm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZIN5RKB6 = $mol_type_enforce<
		`La-Pr-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GFGBOZTA = $mol_type_enforce<
		`Ho-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H947W785 = $mol_type_enforce<
		`Ag-Bi-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__57ZVU0XD = $mol_type_enforce<
		`Li-Tb-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NQII9DXI = $mol_type_enforce<
		`Sr-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HMVN0ATT = $mol_type_enforce<
		`Co-Re-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U1CE8CI7 = $mol_type_enforce<
		`Y-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S6RRZUN5 = $mol_type_enforce<
		`Ce-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XWNFN8AY = $mol_type_enforce<
		`Pm-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__THSS8SUG = $mol_type_enforce<
		`Sm-Dy-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TODR9W9H = $mol_type_enforce<
		`Pd-Ru-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4JUXQTQX = $mol_type_enforce<
		`Hg-Bi-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YDAOEARJ = $mol_type_enforce<
		`Sc-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SOVC70V3 = $mol_type_enforce<
		`Yb-Pr-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8CUN5Y0G = $mol_type_enforce<
		`Al-Tl-In`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0W04YWAW = $mol_type_enforce<
		`Ho-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__80L48L5O = $mol_type_enforce<
		`Rb-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NWMCPMFE = $mol_type_enforce<
		`Tm-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KR6YE9GQ = $mol_type_enforce<
		`Pr-Sm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N14D9QAG = $mol_type_enforce<
		`Gd-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z36H6M09 = $mol_type_enforce<
		`Mn-V-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2D5Z5BKZ = $mol_type_enforce<
		`Cr-Cd-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FCXDBYWR = $mol_type_enforce<
		`Tb-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SOEIMVG0 = $mol_type_enforce<
		`V-Ag-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PB49F9PO = $mol_type_enforce<
		`La-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WYUL5ZFU = $mol_type_enforce<
		`La-Dy-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X6QFIL5F = $mol_type_enforce<
		`Li-Gd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OLA4KSTN = $mol_type_enforce<
		`Y-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J7BPOV1V = $mol_type_enforce<
		`Li-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QTU1B1H8 = $mol_type_enforce<
		`Np-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OVHJGPR4 = $mol_type_enforce<
		`Ag-Mo-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KQ75NV3Y = $mol_type_enforce<
		`Co-Hg-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S1TP2GY7 = $mol_type_enforce<
		`Mn-Tl-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7XLCY078 = $mol_type_enforce<
		`Eu-Y-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XQ3MWD41 = $mol_type_enforce<
		`Cu-Ir-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ANHA2CUZ = $mol_type_enforce<
		`Tb-Gd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QH69I0GT = $mol_type_enforce<
		`Pr-Hf-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QQWZKVEI = $mol_type_enforce<
		`Tb-Ce-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OYOAK4L7 = $mol_type_enforce<
		`Ag-Ir-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V3VX4UHB = $mol_type_enforce<
		`Tl-Zn-In`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1APKK208 = $mol_type_enforce<
		`Li-Sm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EA9U9LNT = $mol_type_enforce<
		`Nd-Sm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XHJBO3GX = $mol_type_enforce<
		`Re-Ni-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OW90BJ57 = $mol_type_enforce<
		`Yb-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BJ639W8Z = $mol_type_enforce<
		`La-Dy-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JK9HX96Q = $mol_type_enforce<
		`Mn-Ru-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q0VH4PLF = $mol_type_enforce<
		`Dy-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S128YT2J = $mol_type_enforce<
		`Pr-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BY7HVPOG = $mol_type_enforce<
		`Sm-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IO0JX6WB = $mol_type_enforce<
		`Eu-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GF01T8VT = $mol_type_enforce<
		`Y-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OEP5HPIV = $mol_type_enforce<
		`Ce-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UJJWUJ5N = $mol_type_enforce<
		`Sn-Ge-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AI702DPW = $mol_type_enforce<
		`Nd-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__27ZWUUGD = $mol_type_enforce<
		`Hf-Sc-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5DO9Z5Z6 = $mol_type_enforce<
		`Tl-Ga-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1A91FJZD = $mol_type_enforce<
		`Tm-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__689AEN8I = $mol_type_enforce<
		`Fe-Ru-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7A10TYEA = $mol_type_enforce<
		`Ho-Er-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NH7XFDTG = $mol_type_enforce<
		`Yb-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RIP7SW63 = $mol_type_enforce<
		`Nd-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SNLEG3O4 = $mol_type_enforce<
		`Cs-Rb-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C0GG097N = $mol_type_enforce<
		`Lu-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XZUZJ3SF = $mol_type_enforce<
		`Zn-Ga-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WTHGXSAR = $mol_type_enforce<
		`Pr-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7S0FJEG1 = $mol_type_enforce<
		`La-Eu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O4CZEDJM = $mol_type_enforce<
		`Yb-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9MNHA3RT = $mol_type_enforce<
		`Yb-Gd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GW30DDSQ = $mol_type_enforce<
		`Tl-Ge-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EADUREKS = $mol_type_enforce<
		`Tb-Ce-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HPWPIYSP = $mol_type_enforce<
		`Gd-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W6ORAB39 = $mol_type_enforce<
		`La-Dy-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6RCY24QO = $mol_type_enforce<
		`Co-Re-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6V4W0UOQ = $mol_type_enforce<
		`Yb-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DHPY9L8D = $mol_type_enforce<
		`Al-Zn-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N56SGD6D = $mol_type_enforce<
		`Tl-Ni-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z7XRS5FC = $mol_type_enforce<
		`K-Rb-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5DGG9XP3 = $mol_type_enforce<
		`Y-Th-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XZWQGI99 = $mol_type_enforce<
		`Pm-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T4V2KLTA = $mol_type_enforce<
		`Ce-Sm-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B1DJ561S = $mol_type_enforce<
		`La-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZLY95U44 = $mol_type_enforce<
		`Ce-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZKNH87DM = $mol_type_enforce<
		`Na-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__57HWWDI6 = $mol_type_enforce<
		`Tb-Ce-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W1AB1BOC = $mol_type_enforce<
		`Sm-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NL63XJDM = $mol_type_enforce<
		`Cs-Li-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KIA14O72 = $mol_type_enforce<
		`Pr-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9M2V5W15 = $mol_type_enforce<
		`Dy-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RQG8H6FZ = $mol_type_enforce<
		`Ca-Fe-Co`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T1RQP0SA = $mol_type_enforce<
		`Lu-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RSDH8IUQ = $mol_type_enforce<
		`Al-Ga-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TIAORDMC = $mol_type_enforce<
		`Pr-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EOYGHLED = $mol_type_enforce<
		`Na-Li-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T5HNRGW3 = $mol_type_enforce<
		`Ir-Ru-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RYYYZTSC = $mol_type_enforce<
		`Fe-Ru-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__42JK0TVX = $mol_type_enforce<
		`Ho-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NEEDUU7F = $mol_type_enforce<
		`Lu-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OQWM2UOR = $mol_type_enforce<
		`Pu-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D953X505 = $mol_type_enforce<
		`Lu-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PQC4WPZM = $mol_type_enforce<
		`Ca-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3ZFAN0VL = $mol_type_enforce<
		`La-Dy-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z965N93O = $mol_type_enforce<
		`Ce-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WTU0BY4O = $mol_type_enforce<
		`Li-La-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U9282DYO = $mol_type_enforce<
		`Mn-V-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NP41QIMI = $mol_type_enforce<
		`Ni-Ag-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PBYM769R = $mol_type_enforce<
		`Li-Tb-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z6HQUK1V = $mol_type_enforce<
		`Cs-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7A9TVBT6 = $mol_type_enforce<
		`Li-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YLPNQRTC = $mol_type_enforce<
		`Cs-Pr-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HP0I32DQ = $mol_type_enforce<
		`Hf-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OI5M3NT5 = $mol_type_enforce<
		`Sm-Th-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AE5G881U = $mol_type_enforce<
		`Pr-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z0UHN133 = $mol_type_enforce<
		`Yb-Dy-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3L3HFQ2J = $mol_type_enforce<
		`Tb-Gd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KXQK919C = $mol_type_enforce<
		`La-Yb-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6T5AHHUU = $mol_type_enforce<
		`Mn-Tl-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OH2BA978 = $mol_type_enforce<
		`Yb-Pr-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K1TRBSQM = $mol_type_enforce<
		`La-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RYQ65333 = $mol_type_enforce<
		`Ce-Pr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9KWQ68BW = $mol_type_enforce<
		`La-Nd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VF22DDV8 = $mol_type_enforce<
		`Ce-Y-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZQQPCGOD = $mol_type_enforce<
		`Ca-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__55GOI24M = $mol_type_enforce<
		`Tb-Pr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X1DM6OSS = $mol_type_enforce<
		`Dy-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5BY0YETG = $mol_type_enforce<
		`Ni-Pt-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__754XNV2Y = $mol_type_enforce<
		`Ni-Rh-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EAVY4561 = $mol_type_enforce<
		`Hf-Mg-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WF0VPOFB = $mol_type_enforce<
		`Ca-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QBKKL9M8 = $mol_type_enforce<
		`Al-Hg-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5T1IURBZ = $mol_type_enforce<
		`Nd-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ECGBI70X = $mol_type_enforce<
		`Li-Sm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WMLWW0XK = $mol_type_enforce<
		`Pm-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S8IMIZTH = $mol_type_enforce<
		`Ca-Yb-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6ZCBLVO6 = $mol_type_enforce<
		`Co-Cu-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K3QNEL2W = $mol_type_enforce<
		`Li-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5GYI7X0H = $mol_type_enforce<
		`Er-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U9FEY3WS = $mol_type_enforce<
		`Sr-Mn-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3SHE3213 = $mol_type_enforce<
		`Pr-Gd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XPIH94WE = $mol_type_enforce<
		`Na-Li-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SH42OPN6 = $mol_type_enforce<
		`Na-V-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LPGWG1R8 = $mol_type_enforce<
		`Na-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__43QSMEFU = $mol_type_enforce<
		`Pd-W-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__73IJFNPO = $mol_type_enforce<
		`Li-Gd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2QS08FCV = $mol_type_enforce<
		`Li-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YC2WDPVK = $mol_type_enforce<
		`Rb-Li-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DI0ZQV7M = $mol_type_enforce<
		`Co-Hg-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__851PHP1N = $mol_type_enforce<
		`Dy-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PJPC53QP = $mol_type_enforce<
		`La-Nd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0UQX1WKS = $mol_type_enforce<
		`Al-Sn-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YQNDD2LQ = $mol_type_enforce<
		`Na-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OOSK1QFW = $mol_type_enforce<
		`Er-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N1UUF6JJ = $mol_type_enforce<
		`Sr-Ca-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R4Z78HUA = $mol_type_enforce<
		`Rb-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RDW98L3H = $mol_type_enforce<
		`Y-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U26N87WO = $mol_type_enforce<
		`Tb-Nd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YF7PRTDQ = $mol_type_enforce<
		`Rb-Na-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9YT1K4QR = $mol_type_enforce<
		`Cd-Ga-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W46YIACD = $mol_type_enforce<
		`Ca-Tb-Yb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BEJP3JYI = $mol_type_enforce<
		`Sn-Ge-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4QERLY5N = $mol_type_enforce<
		`Yb-Gd-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GO65W49D = $mol_type_enforce<
		`Y-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__081KTQ1N = $mol_type_enforce<
		`Yb-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3DC1173Z = $mol_type_enforce<
		`Ce-Gd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QUJHCOMU = $mol_type_enforce<
		`Ba-Sm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QCDDVJOP = $mol_type_enforce<
		`Cr-Cd-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1RQMKS23 = $mol_type_enforce<
		`La-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E3XZUB5V = $mol_type_enforce<
		`Ba-Mn-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__03QV5OBS = $mol_type_enforce<
		`Gd-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6HJ4TG6S = $mol_type_enforce<
		`Tb-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UVNNJ5M1 = $mol_type_enforce<
		`Ba-Mn-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9W9KWKPR = $mol_type_enforce<
		`Cu-Ni-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OHXGDQPR = $mol_type_enforce<
		`Lu-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S7XV96LW = $mol_type_enforce<
		`Pr-Gd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JT1DNG5M = $mol_type_enforce<
		`Er-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DR3HIYHA = $mol_type_enforce<
		`La-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B93OP3SR = $mol_type_enforce<
		`Mn-Co-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WLY65U7S = $mol_type_enforce<
		`Yb-Eu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JI8FIUKU = $mol_type_enforce<
		`Li-Pm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RC8K0WGI = $mol_type_enforce<
		`La-Sm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D2JDM4YF = $mol_type_enforce<
		`La-Eu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O4HRCCAJ = $mol_type_enforce<
		`Sn-Ge-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CMKKLH1I = $mol_type_enforce<
		`La-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BTA6Z7Z5 = $mol_type_enforce<
		`Yb-Pr-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EEN2E9A8 = $mol_type_enforce<
		`Ce-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I4AWFG4H = $mol_type_enforce<
		`Rb-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TKB1RO92 = $mol_type_enforce<
		`Tl-Ag-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OSVBPL6G = $mol_type_enforce<
		`Gd-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WWM5HTGY = $mol_type_enforce<
		`Y-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GJJV63JM = $mol_type_enforce<
		`Tb-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OJ0PDGPF = $mol_type_enforce<
		`Fe-Ir-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QB4IBCX8 = $mol_type_enforce<
		`Hg-Os-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K8JKQ5NV = $mol_type_enforce<
		`Ba-Yb-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QIZPG4WU = $mol_type_enforce<
		`Nd-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CTC5MR0X = $mol_type_enforce<
		`Ce-Sm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZOWZ0O4M = $mol_type_enforce<
		`Ba-Pr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__54HED719 = $mol_type_enforce<
		`La-Pr-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HI996ZO2 = $mol_type_enforce<
		`Rb-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TFDGMH04 = $mol_type_enforce<
		`Ba-Ca-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BWXCKH57 = $mol_type_enforce<
		`La-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YEVM6WUC = $mol_type_enforce<
		`Lu-Th-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7GRSZLC4 = $mol_type_enforce<
		`Al-Ge-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KW6C565F = $mol_type_enforce<
		`Li-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A3Z87U8Z = $mol_type_enforce<
		`K-Mg-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O5UNKWVX = $mol_type_enforce<
		`Hg-Ir-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PJX65850 = $mol_type_enforce<
		`Nd-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6SPCQ6J9 = $mol_type_enforce<
		`Cs-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CL3U39S7 = $mol_type_enforce<
		`Cu-Pd-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UH5XW942 = $mol_type_enforce<
		`Yb-Dy-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3NQHOLLN = $mol_type_enforce<
		`Dy-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WI6PIV40 = $mol_type_enforce<
		`Hg-Ge-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DMRCHATW = $mol_type_enforce<
		`Cu-Ni-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NKKBSNZF = $mol_type_enforce<
		`Y-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__78U19DAE = $mol_type_enforce<
		`Sm-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U3ODHR5X = $mol_type_enforce<
		`Dy-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y5U23PFD = $mol_type_enforce<
		`Tb-Nd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0VQRFDQR = $mol_type_enforce<
		`Ta-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P7RWKRP6 = $mol_type_enforce<
		`Tm-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M3WTFRKT = $mol_type_enforce<
		`Li-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O6PG8OYU = $mol_type_enforce<
		`Nd-Gd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WEDSWCTR = $mol_type_enforce<
		`Na-Cr-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UV34TPOO = $mol_type_enforce<
		`Li-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P2DYYHPP = $mol_type_enforce<
		`Tb-Pm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DI3ZRP4O = $mol_type_enforce<
		`Lu-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XML5SQLZ = $mol_type_enforce<
		`Th-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3NWGIR30 = $mol_type_enforce<
		`Cd-Ge-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I67GYPVT = $mol_type_enforce<
		`Th-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__667DXWK3 = $mol_type_enforce<
		`Yb-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__94NPLC26 = $mol_type_enforce<
		`Nd-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KY3B9ZXJ = $mol_type_enforce<
		`Al-Cd-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MFI1LU42 = $mol_type_enforce<
		`Tb-Nd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OQBF4P9X = $mol_type_enforce<
		`Ag-Os-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MYJEOV13 = $mol_type_enforce<
		`Yb-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DFNYGADI = $mol_type_enforce<
		`Ce-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__58OA5SFU = $mol_type_enforce<
		`Co-Hg-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L56UMZ9J = $mol_type_enforce<
		`Ba-Sr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4FZZ7KQ2 = $mol_type_enforce<
		`Nd-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MDP8C0J1 = $mol_type_enforce<
		`Tb-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F8QKHOC4 = $mol_type_enforce<
		`Tb-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__68AHFDJM = $mol_type_enforce<
		`Re-Ni-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__36BBYQK5 = $mol_type_enforce<
		`Y-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BK61EMFG = $mol_type_enforce<
		`Yb-Gd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SQVN7VQF = $mol_type_enforce<
		`Sc-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8W66BVKZ = $mol_type_enforce<
		`Ce-Sm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XPGE5XIH = $mol_type_enforce<
		`Pr-Gd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UODWIR7Z = $mol_type_enforce<
		`Nd-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WP1AOGW0 = $mol_type_enforce<
		`Dy-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GZE9CPP8 = $mol_type_enforce<
		`Ca-La-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I349YZQ0 = $mol_type_enforce<
		`Ce-Lu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BBQZY99L = $mol_type_enforce<
		`Cu-Ru-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2W1I8FXY = $mol_type_enforce<
		`Si-Sn-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MWG6P9HZ = $mol_type_enforce<
		`Cu-Re-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WSVZM20J = $mol_type_enforce<
		`Ga-Ge-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7UJN3OA5 = $mol_type_enforce<
		`La-Eu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YOYDGPKC = $mol_type_enforce<
		`Tb-Ce-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__51O8C0JH = $mol_type_enforce<
		`Yb-Pr-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C5JA4YJG = $mol_type_enforce<
		`K-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AKWWH03U = $mol_type_enforce<
		`K-V-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E0QXI4U9 = $mol_type_enforce<
		`Lu-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NUB9IRDM = $mol_type_enforce<
		`Pm-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NZAIZ33B = $mol_type_enforce<
		`Pr-Sm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AREI51D7 = $mol_type_enforce<
		`Al-Si-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YQL1FESP = $mol_type_enforce<
		`Sm-Gd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8I1HUT65 = $mol_type_enforce<
		`Ni-Ir-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3CZ1EHJY = $mol_type_enforce<
		`Cu-Re-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YN3VPF50 = $mol_type_enforce<
		`Tl-Ge-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C1OM2GQM = $mol_type_enforce<
		`Ba-Pm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__28VXRP8D = $mol_type_enforce<
		`Yb-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XBJ7QGUE = $mol_type_enforce<
		`Fe-Bi-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5P5Y96H7 = $mol_type_enforce<
		`Yb-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L7EXRPU6 = $mol_type_enforce<
		`Cs-Pr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DV3NQ1RK = $mol_type_enforce<
		`Ca-Tb-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XPL1YBCT = $mol_type_enforce<
		`Li-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1RWU4G22 = $mol_type_enforce<
		`Tb-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TDVXS8C2 = $mol_type_enforce<
		`Ca-La-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O73ASCBE = $mol_type_enforce<
		`Gd-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__711RY6QS = $mol_type_enforce<
		`Gd-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XZ7P3A19 = $mol_type_enforce<
		`Nd-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MY4O96HF = $mol_type_enforce<
		`Tb-Yb-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__88OTCZBF = $mol_type_enforce<
		`La-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G55AGO1J = $mol_type_enforce<
		`Pm-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R6I30F7R = $mol_type_enforce<
		`Ba-Ca-Eu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XJRPPCLR = $mol_type_enforce<
		`La-Ce-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__70CKAEPI = $mol_type_enforce<
		`U-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F1W08H5U = $mol_type_enforce<
		`Ca-Ce-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PXQOUPZ8 = $mol_type_enforce<
		`Ho-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5T0HBDU3 = $mol_type_enforce<
		`Y-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E1U4L38B = $mol_type_enforce<
		`Gd-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M6E0E9GU = $mol_type_enforce<
		`Yb-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7VJNTLW2 = $mol_type_enforce<
		`La-Eu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E8HLVBWM = $mol_type_enforce<
		`Rb-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6RXN1UA0 = $mol_type_enforce<
		`Li-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IDC4NVW4 = $mol_type_enforce<
		`Pm-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HF66IFLT = $mol_type_enforce<
		`Li-Hf-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8G9LWR1Q = $mol_type_enforce<
		`Sr-V-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ONBX7VUT = $mol_type_enforce<
		`Pm-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q91L8AX5 = $mol_type_enforce<
		`Er-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5MQ8KZDJ = $mol_type_enforce<
		`Ca-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FER8PB43 = $mol_type_enforce<
		`Li-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1BZAE6TS = $mol_type_enforce<
		`Ba-Ca-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6VGY00R6 = $mol_type_enforce<
		`Tb-Pm-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F31SGEWX = $mol_type_enforce<
		`Sm-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WJIXSTDK = $mol_type_enforce<
		`Ce-Eu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q9VG94BG = $mol_type_enforce<
		`Nd-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__30U4QW2F = $mol_type_enforce<
		`Fe-Co-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G1IWK3AU = $mol_type_enforce<
		`Gd-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3MDPVPDB = $mol_type_enforce<
		`Cs-Mg-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MHXUPBTU = $mol_type_enforce<
		`Ho-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7JIO862X = $mol_type_enforce<
		`Y-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RVF37LEA = $mol_type_enforce<
		`Li-La-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NE9R1DKX = $mol_type_enforce<
		`Li-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LIHSHSQ8 = $mol_type_enforce<
		`Ce-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JN9KKLFD = $mol_type_enforce<
		`Li-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HKUH4W6J = $mol_type_enforce<
		`Yb-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6E6J8FYH = $mol_type_enforce<
		`K-Rb-Li`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EPUV5GZI = $mol_type_enforce<
		`Er-Hf-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XAIYUPN3 = $mol_type_enforce<
		`Cu-Tc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__04W597QA = $mol_type_enforce<
		`Ni-Rh-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S0A8GZC2 = $mol_type_enforce<
		`Ni-Ag-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QWWYL33N = $mol_type_enforce<
		`Cr-Fe-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9FTKA2WW = $mol_type_enforce<
		`Y-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XFEJ4N2R = $mol_type_enforce<
		`Tb-Nd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HW2CM1KQ = $mol_type_enforce<
		`Dy-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9LOO9KNK = $mol_type_enforce<
		`Rb-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BWFL51G7 = $mol_type_enforce<
		`Li-Tb-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R1PM2BYO = $mol_type_enforce<
		`Sm-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X46L5AYX = $mol_type_enforce<
		`Ir-Pd-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZH7NB0HT = $mol_type_enforce<
		`Pm-Nd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q3Z3XAPC = $mol_type_enforce<
		`Ba-Pm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZCZEWLBC = $mol_type_enforce<
		`Y-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0D26QP03 = $mol_type_enforce<
		`Nd-Gd-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RUAWQPCD = $mol_type_enforce<
		`Th-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9EWTI1I8 = $mol_type_enforce<
		`K-Mg-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__773F9MKQ = $mol_type_enforce<
		`Ni-Pt-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KAWOYRDH = $mol_type_enforce<
		`Cu-Pd-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PG52YUOB = $mol_type_enforce<
		`Gd-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YE6JUJCY = $mol_type_enforce<
		`Co-Ag-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BTF126RA = $mol_type_enforce<
		`Li-Ce-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GUFUF30X = $mol_type_enforce<
		`Tm-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VB3MIGX5 = $mol_type_enforce<
		`Pm-Dy-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1DXIIEB6 = $mol_type_enforce<
		`Er-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WUKP93G5 = $mol_type_enforce<
		`Sm-Th-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YSKHQFFU = $mol_type_enforce<
		`Yb-Mn-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MFCCF0RY = $mol_type_enforce<
		`K-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4RZ7UCVT = $mol_type_enforce<
		`Dy-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CH11QL1G = $mol_type_enforce<
		`La-Tb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__28018D0G = $mol_type_enforce<
		`Yb-Nd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__42H15V6X = $mol_type_enforce<
		`Y-Ho-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KG20TDJM = $mol_type_enforce<
		`Yb-Pu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__243SY4BM = $mol_type_enforce<
		`Ce-Pr-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TOCRWL0K = $mol_type_enforce<
		`Co-Re-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W6DUHKKZ = $mol_type_enforce<
		`Ce-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1E5DCPNH = $mol_type_enforce<
		`Ag-Mo-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FY8YBFU8 = $mol_type_enforce<
		`Ca-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TWWPHD3L = $mol_type_enforce<
		`Tl-Cu-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UKN1J8GI = $mol_type_enforce<
		`Tb-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PB9N660B = $mol_type_enforce<
		`Be-Sn-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TBB3IS9R = $mol_type_enforce<
		`Y-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7G9SEJ29 = $mol_type_enforce<
		`Nd-Dy-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6XC8U1N1 = $mol_type_enforce<
		`Nd-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2AUVQDLO = $mol_type_enforce<
		`Be-Zn-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8JA8ZN0R = $mol_type_enforce<
		`La-Pr-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LM1XG0CM = $mol_type_enforce<
		`In-Ga-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0XROAE0G = $mol_type_enforce<
		`Li-Fe-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HWJJBKRC = $mol_type_enforce<
		`Ni-Ru-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7KOEFUQQ = $mol_type_enforce<
		`Gd-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JGY9CNT1 = $mol_type_enforce<
		`Gd-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YV8I9RCJ = $mol_type_enforce<
		`Er-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6YXRGNBB = $mol_type_enforce<
		`Cu-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2VRE18GE = $mol_type_enforce<
		`Pm-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KN793NVO = $mol_type_enforce<
		`Hf-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N1V4V6MM = $mol_type_enforce<
		`Sc-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MBBW6RMW = $mol_type_enforce<
		`Cr-Cd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QM8IZCRI = $mol_type_enforce<
		`U-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UWY4F645 = $mol_type_enforce<
		`Tb-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__18FA0TB7 = $mol_type_enforce<
		`Co-Cu-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YKERTJ4P = $mol_type_enforce<
		`Zn-Sn-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OJDWJAK4 = $mol_type_enforce<
		`Pm-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5NIMRZUK = $mol_type_enforce<
		`Ba-Eu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EE8WB7VV = $mol_type_enforce<
		`Er-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C4WD8VPC = $mol_type_enforce<
		`Ni-Ir-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__61U1U3YY = $mol_type_enforce<
		`Li-Mn-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SKRNBL9C = $mol_type_enforce<
		`Mg-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GY6U91SB = $mol_type_enforce<
		`Gd-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OKEI5GN5 = $mol_type_enforce<
		`Co-Ni-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SZBM4I5E = $mol_type_enforce<
		`Yb-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__28UFV07E = $mol_type_enforce<
		`Yb-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FMW3J4J1 = $mol_type_enforce<
		`Cu-Ir-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X9U3F4Y6 = $mol_type_enforce<
		`Nd-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2TR9GK8G = $mol_type_enforce<
		`U-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IVHFPXVR = $mol_type_enforce<
		`Sm-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0U6MFTH2 = $mol_type_enforce<
		`Mn-Ag-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V9WEFLFQ = $mol_type_enforce<
		`Pm-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AUDQ5D55 = $mol_type_enforce<
		`Er-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C54JIHT7 = $mol_type_enforce<
		`Nd-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6BD5ZNM8 = $mol_type_enforce<
		`Sc-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3IC459TR = $mol_type_enforce<
		`Dy-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O9OPESX6 = $mol_type_enforce<
		`Eu-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V0IQBXIW = $mol_type_enforce<
		`Y-Th-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V86SSM3A = $mol_type_enforce<
		`Eu-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__56L05WXL = $mol_type_enforce<
		`Nd-Gd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ICW24WWS = $mol_type_enforce<
		`Cs-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GMFMIE1D = $mol_type_enforce<
		`La-Nd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OZN7OUNP = $mol_type_enforce<
		`Nd-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TBJM4YO5 = $mol_type_enforce<
		`Zn-Si-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IAAQMPMO = $mol_type_enforce<
		`Mg-Cd-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4I6XKJXZ = $mol_type_enforce<
		`Re-Ag-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U65E5ALL = $mol_type_enforce<
		`Sr-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HQ6SD51I = $mol_type_enforce<
		`Fe-Ag-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BMC6OXPG = $mol_type_enforce<
		`V-Cu-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GYJSIUSA = $mol_type_enforce<
		`Sm-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E9BST2WT = $mol_type_enforce<
		`Ce-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LB1NIR7W = $mol_type_enforce<
		`Na-Fe-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZKMU5F78 = $mol_type_enforce<
		`Li-Sm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VJIQBX1Z = $mol_type_enforce<
		`Yb-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZSIF13UG = $mol_type_enforce<
		`La-Yb-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BBHIANEP = $mol_type_enforce<
		`Li-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X0NWR9NI = $mol_type_enforce<
		`Tm-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__77F3IAJJ = $mol_type_enforce<
		`Ta-Cu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DK0WI6M0 = $mol_type_enforce<
		`Tb-Pm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GQLB95JO = $mol_type_enforce<
		`Ni-Ag-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AALLL8XU = $mol_type_enforce<
		`Pm-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I9C372GI = $mol_type_enforce<
		`Pu-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I8HFGIJK = $mol_type_enforce<
		`Eu-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NL1ESNB4 = $mol_type_enforce<
		`Th-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QZSP0UNM = $mol_type_enforce<
		`K-Rb-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0Y85GBU3 = $mol_type_enforce<
		`Sm-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1WZPDZC7 = $mol_type_enforce<
		`Mg-Cd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QV4EESMM = $mol_type_enforce<
		`Tb-Pr-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LTVBK72T = $mol_type_enforce<
		`Ce-Eu-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QXTSCG91 = $mol_type_enforce<
		`La-Nd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZA7WAEZL = $mol_type_enforce<
		`Ru-Pt-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7ZTZTYF6 = $mol_type_enforce<
		`La-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4RLFSY1V = $mol_type_enforce<
		`Pm-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KMLM6T7Q = $mol_type_enforce<
		`Yb-Th-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C4PWJLFA = $mol_type_enforce<
		`Ce-Pm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IE8RVIFR = $mol_type_enforce<
		`Co-Ni-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LMHMLMPP = $mol_type_enforce<
		`Si-Sn-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__301D4SNJ = $mol_type_enforce<
		`Er-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LAJSIC85 = $mol_type_enforce<
		`Os-Pd-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O77YIVYN = $mol_type_enforce<
		`Hf-Mg-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZIP59KUW = $mol_type_enforce<
		`Mo-W-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__87V95UKI = $mol_type_enforce<
		`Sm-Gd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EN9KNMC6 = $mol_type_enforce<
		`Ca-Tb-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J6X53WWM = $mol_type_enforce<
		`Ho-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DKD0R2YM = $mol_type_enforce<
		`Fe-Co-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ARWNCCNV = $mol_type_enforce<
		`La-Sm-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SM50KC08 = $mol_type_enforce<
		`Be-Al-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BAV9MBY0 = $mol_type_enforce<
		`Er-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VV1H431A = $mol_type_enforce<
		`Sn-Bi-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__006Y7ZK4 = $mol_type_enforce<
		`Nd-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3AGHQUK3 = $mol_type_enforce<
		`Eu-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BF2MBXXH = $mol_type_enforce<
		`La-Nd-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AJ0C0NUW = $mol_type_enforce<
		`Pm-Nd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2QDUF1YQ = $mol_type_enforce<
		`Dy-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P976DVL0 = $mol_type_enforce<
		`Pm-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RCR8BN1J = $mol_type_enforce<
		`Tl-Zn-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C26EA14S = $mol_type_enforce<
		`Y-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FXMP2KUK = $mol_type_enforce<
		`Ba-Pm-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4X3QOL0O = $mol_type_enforce<
		`Ce-Pr-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WZ1ROSF8 = $mol_type_enforce<
		`V-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WZKQXV4M = $mol_type_enforce<
		`Ce-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2F55SKUM = $mol_type_enforce<
		`Yb-Dy-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WQMUUXOS = $mol_type_enforce<
		`La-Er-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X5356MDB = $mol_type_enforce<
		`Li-Mg-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__00JK7361 = $mol_type_enforce<
		`Y-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9YQQIPQE = $mol_type_enforce<
		`Sm-Y-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UFVJ73A6 = $mol_type_enforce<
		`Ce-Eu-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WSBLSY4D = $mol_type_enforce<
		`Ag-Ge-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R36Y98FF = $mol_type_enforce<
		`Sm-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WFE5Z2CT = $mol_type_enforce<
		`Na-Li-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R948IBDR = $mol_type_enforce<
		`Tb-Yb-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5YDPDJZX = $mol_type_enforce<
		`Pr-Gd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GD88M8BF = $mol_type_enforce<
		`Dy-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XT1FX211 = $mol_type_enforce<
		`Er-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S78E1Z0J = $mol_type_enforce<
		`Na-Li-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B8SBKXC1 = $mol_type_enforce<
		`Pm-Nd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QY62YUFX = $mol_type_enforce<
		`La-Ce-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7NRS9ARM = $mol_type_enforce<
		`Dy-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T77XNJBB = $mol_type_enforce<
		`Ca-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VNL96VL1 = $mol_type_enforce<
		`Nd-Sm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P4MSG6VN = $mol_type_enforce<
		`Yb-Nd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WIDFWQ49 = $mol_type_enforce<
		`Li-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GS4R3QXS = $mol_type_enforce<
		`Ca-Ce-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__67SGO21N = $mol_type_enforce<
		`Cs-Li-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GBW8ZBAA = $mol_type_enforce<
		`Y-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6SZ3D99W = $mol_type_enforce<
		`Sm-Dy-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8YIPXLTI = $mol_type_enforce<
		`Ho-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SC09BTZW = $mol_type_enforce<
		`Dy-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W9Q1507D = $mol_type_enforce<
		`Pu-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XQLD5PUZ = $mol_type_enforce<
		`Ce-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7EHX723C = $mol_type_enforce<
		`Sm-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AALT8MIS = $mol_type_enforce<
		`La-Sm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7JHU3XA2 = $mol_type_enforce<
		`Yb-Nd-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I2VXM7LN = $mol_type_enforce<
		`Pr-Dy-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2M1KSPJX = $mol_type_enforce<
		`Ho-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SFG2VBF8 = $mol_type_enforce<
		`Lu-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__09MJN2H7 = $mol_type_enforce<
		`Yb-Nd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y1RI6GFL = $mol_type_enforce<
		`Rb-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G5177OZQ = $mol_type_enforce<
		`Gd-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1PNJ8BD1 = $mol_type_enforce<
		`Ho-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W80DXXBL = $mol_type_enforce<
		`Tc-Pd-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HO4LK8IX = $mol_type_enforce<
		`Ce-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E7FX6RBL = $mol_type_enforce<
		`Cu-Pt-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UQRKQQZY = $mol_type_enforce<
		`La-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SVVKI9N2 = $mol_type_enforce<
		`Sm-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__07T8U4XM = $mol_type_enforce<
		`La-Gd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MDH18Y7Z = $mol_type_enforce<
		`Al-Zn-Cd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UAH68LSE = $mol_type_enforce<
		`Cs-Pr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__77LPKCT4 = $mol_type_enforce<
		`Pm-Pr-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FFVM912C = $mol_type_enforce<
		`Os-Pt-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__85Q60ZLQ = $mol_type_enforce<
		`Er-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SX06YV9W = $mol_type_enforce<
		`Gd-Dy-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4K4CV4YC = $mol_type_enforce<
		`Tb-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DML80OHI = $mol_type_enforce<
		`Ce-Nd-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H61OGMWB = $mol_type_enforce<
		`Be-Al-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__71CQKE6C = $mol_type_enforce<
		`Cu-Tc-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZR4SS4YS = $mol_type_enforce<
		`Nd-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V4IGHYIK = $mol_type_enforce<
		`Ca-La-Tb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__99DQZO9I = $mol_type_enforce<
		`Be-Zn-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L50WF4SC = $mol_type_enforce<
		`Cu-Rh-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5H0CD2H5 = $mol_type_enforce<
		`Lu-Pu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O440KC86 = $mol_type_enforce<
		`Pr-Nd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1U8TBYS4 = $mol_type_enforce<
		`Rb-Na-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XIZ6XGTT = $mol_type_enforce<
		`Yb-Pr-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8QY2JEIR = $mol_type_enforce<
		`Ce-Pr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G7H8EXMQ = $mol_type_enforce<
		`Hf-Mg-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DBMJHY8B = $mol_type_enforce<
		`Tb-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZP0EWEXW = $mol_type_enforce<
		`Co-Ag-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CE2FTQZ8 = $mol_type_enforce<
		`Li-Tb-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V3KG75RL = $mol_type_enforce<
		`Yb-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EPN4S1WP = $mol_type_enforce<
		`Yb-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BIITP50G = $mol_type_enforce<
		`Yb-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L9CVHBKZ = $mol_type_enforce<
		`Sc-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GJ14BAUC = $mol_type_enforce<
		`La-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YL3XTVQO = $mol_type_enforce<
		`Ca-Ce-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VTSRIUNY = $mol_type_enforce<
		`Ce-Ho-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QZSC0Q7Y = $mol_type_enforce<
		`La-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S6BOZG15 = $mol_type_enforce<
		`Pu-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HR11AL0A = $mol_type_enforce<
		`Yb-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BU8IF2O7 = $mol_type_enforce<
		`Er-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KBST8LTF = $mol_type_enforce<
		`U-Cr-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C83BLY6S = $mol_type_enforce<
		`Dy-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BZ7PU02E = $mol_type_enforce<
		`Si-Ag-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ANA8PPXI = $mol_type_enforce<
		`Tb-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OGM6RFMR = $mol_type_enforce<
		`Pr-Gd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IL12TEQT = $mol_type_enforce<
		`Ce-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FS58JLUJ = $mol_type_enforce<
		`Tl-Cu-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FZUPG0RE = $mol_type_enforce<
		`Ho-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RES65SAR = $mol_type_enforce<
		`Li-Mg-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9OBOQZBI = $mol_type_enforce<
		`Y-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RUQLS5U5 = $mol_type_enforce<
		`Sc-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IBJ7NQTY = $mol_type_enforce<
		`Cu-Bi-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9BUA42QM = $mol_type_enforce<
		`Tl-Zn-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QKT6P0Q2 = $mol_type_enforce<
		`Nd-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AH96ZHFP = $mol_type_enforce<
		`Ni-Pt-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C9G2006E = $mol_type_enforce<
		`Sm-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JA8KAX3J = $mol_type_enforce<
		`Li-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4R0VSHIK = $mol_type_enforce<
		`Yb-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N5PJGSFK = $mol_type_enforce<
		`Ce-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K9RHQDU6 = $mol_type_enforce<
		`Pr-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AFJBTY5E = $mol_type_enforce<
		`Ir-Os-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6M39TD4X = $mol_type_enforce<
		`Er-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XW3A5OBP = $mol_type_enforce<
		`Tb-Sm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZDCBICNV = $mol_type_enforce<
		`Dy-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NQ5OH1K8 = $mol_type_enforce<
		`Nb-Tl-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A6UXGWTH = $mol_type_enforce<
		`La-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NVNKMZZW = $mol_type_enforce<
		`Ag-Pd-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1Y7CEJG3 = $mol_type_enforce<
		`Hf-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__61NCGD8H = $mol_type_enforce<
		`Re-Os-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WKWOF86F = $mol_type_enforce<
		`La-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IWTY1SQD = $mol_type_enforce<
		`Pm-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JCYLY70M = $mol_type_enforce<
		`Y-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3IMVQ36C = $mol_type_enforce<
		`Pr-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TJBZR86F = $mol_type_enforce<
		`Na-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y9LVFYS7 = $mol_type_enforce<
		`Tl-V-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SIZWM6XA = $mol_type_enforce<
		`Gd-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4D4VSDQ8 = $mol_type_enforce<
		`Li-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RWFB0FRM = $mol_type_enforce<
		`Pr-Sm-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QAEGUZ0F = $mol_type_enforce<
		`Ce-Gd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3JDIV934 = $mol_type_enforce<
		`Mn-Fe-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3UMXE6C6 = $mol_type_enforce<
		`Y-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7TGS9OZ1 = $mol_type_enforce<
		`Ba-Eu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G00K1U3Y = $mol_type_enforce<
		`Ce-Ho-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7QBUQ9TA = $mol_type_enforce<
		`Gd-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MPHTQHLG = $mol_type_enforce<
		`Ce-Y-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WBGJJU9Z = $mol_type_enforce<
		`Mn-Ni-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7VJ9Y66Y = $mol_type_enforce<
		`Tb-Pr-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QR3YHE92 = $mol_type_enforce<
		`Nd-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__73OJOFI3 = $mol_type_enforce<
		`Nb-Cu-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DCEVEBL5 = $mol_type_enforce<
		`Li-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P7BFTRC1 = $mol_type_enforce<
		`Li-Sm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EHS40DF6 = $mol_type_enforce<
		`Al-Ge-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RVZJ65B0 = $mol_type_enforce<
		`Tb-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IJF27LZC = $mol_type_enforce<
		`Tb-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y7RMNHE4 = $mol_type_enforce<
		`Nd-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MJE8EI2E = $mol_type_enforce<
		`Sr-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I8LXQYYJ = $mol_type_enforce<
		`Er-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4UBM0JH3 = $mol_type_enforce<
		`Mg-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__35D591CU = $mol_type_enforce<
		`Dy-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SYQBS9OF = $mol_type_enforce<
		`Gd-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PBOPIWDM = $mol_type_enforce<
		`Na-Li-Be`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SG1J7NEU = $mol_type_enforce<
		`Sm-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__20OTJFJW = $mol_type_enforce<
		`La-Pr-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8HHS55HG = $mol_type_enforce<
		`Ce-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__29QEHYCL = $mol_type_enforce<
		`Ce-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BUMS45B6 = $mol_type_enforce<
		`Er-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H51LEDDP = $mol_type_enforce<
		`Lu-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7S09PRUF = $mol_type_enforce<
		`Fe-Ir-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GIFAC0YP = $mol_type_enforce<
		`Li-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__76T878OA = $mol_type_enforce<
		`Pm-Pr-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ON64DTJU = $mol_type_enforce<
		`Th-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PPUJ66SF = $mol_type_enforce<
		`Tl-In-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LQLRGHC3 = $mol_type_enforce<
		`Tm-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ANNZHW1A = $mol_type_enforce<
		`Tc-Ni-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__865OK984 = $mol_type_enforce<
		`La-Yb-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TS7QEVVW = $mol_type_enforce<
		`Li-Pr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FFHQHDRG = $mol_type_enforce<
		`Sr-Nd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J4M6EU72 = $mol_type_enforce<
		`Ce-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TJ0J2V7R = $mol_type_enforce<
		`La-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HDZU28HV = $mol_type_enforce<
		`Li-Ce-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FUF7KNOH = $mol_type_enforce<
		`Ba-La-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8X143MUZ = $mol_type_enforce<
		`La-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TW7F8QAN = $mol_type_enforce<
		`Ce-Pr-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BUD2DK4L = $mol_type_enforce<
		`Cs-K-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UAXLILPH = $mol_type_enforce<
		`Sm-Gd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K9Q52R84 = $mol_type_enforce<
		`Li-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4I3WN0N5 = $mol_type_enforce<
		`La-Yb-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RRMSA7FG = $mol_type_enforce<
		`La-Dy-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LWHFUKF0 = $mol_type_enforce<
		`Y-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OWNX9MEI = $mol_type_enforce<
		`Th-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D5D6MJFS = $mol_type_enforce<
		`Ho-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A56SQHC6 = $mol_type_enforce<
		`Ce-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4UXYYOB2 = $mol_type_enforce<
		`Tb-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G7J96TVW = $mol_type_enforce<
		`La-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0IV18HDJ = $mol_type_enforce<
		`La-Pr-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1SO6TVI3 = $mol_type_enforce<
		`Cs-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TURT730O = $mol_type_enforce<
		`Bi-Sb-P`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G6MJZ4N9 = $mol_type_enforce<
		`Mn-Cu-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8X1RLSNY = $mol_type_enforce<
		`Mg-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KR4P24DJ = $mol_type_enforce<
		`Er-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SANAWS3B = $mol_type_enforce<
		`Th-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V6VN9003 = $mol_type_enforce<
		`Cr-Cu-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V98RK44Z = $mol_type_enforce<
		`Er-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__38DDBIVQ = $mol_type_enforce<
		`Tb-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7KFG7R7T = $mol_type_enforce<
		`Li-La-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GOCR7ZNN = $mol_type_enforce<
		`Ce-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5WOJYRI0 = $mol_type_enforce<
		`Tc-Ni-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5WQ9UG7V = $mol_type_enforce<
		`Pr-Ho-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HUD79J6Q = $mol_type_enforce<
		`Li-Cr-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RN9ZXSFP = $mol_type_enforce<
		`La-Sm-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K5D3IYAZ = $mol_type_enforce<
		`Fe-Cu-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RXISB61X = $mol_type_enforce<
		`Co-Cu-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9NMYK92B = $mol_type_enforce<
		`Nb-Tl-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z24JKYJC = $mol_type_enforce<
		`Co-Pt-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6H0KPZ84 = $mol_type_enforce<
		`Ce-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TXJTW0Q2 = $mol_type_enforce<
		`Re-Ir-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VKW51RIO = $mol_type_enforce<
		`Lu-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H9VNHA03 = $mol_type_enforce<
		`Eu-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L8XQC9D3 = $mol_type_enforce<
		`Ce-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UK5QZ4MC = $mol_type_enforce<
		`Ir-Pd-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ADD6D5TR = $mol_type_enforce<
		`Hg-Ir-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SA82U5JG = $mol_type_enforce<
		`Y-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C24LCCOJ = $mol_type_enforce<
		`La-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VSE9P1SK = $mol_type_enforce<
		`Tl-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5AAQOFT3 = $mol_type_enforce<
		`Co-Cu-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QQ1BQC2B = $mol_type_enforce<
		`Pm-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5908MIL4 = $mol_type_enforce<
		`Ce-Pr-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SF7VXJPM = $mol_type_enforce<
		`Tb-Pr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K0I0NGV8 = $mol_type_enforce<
		`Yb-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZY68VKLE = $mol_type_enforce<
		`Pm-Dy-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EUVE98RS = $mol_type_enforce<
		`Co-Ru-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q9IRBVNX = $mol_type_enforce<
		`Tb-Yb-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4CXV5X0W = $mol_type_enforce<
		`Gd-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__432EIKRD = $mol_type_enforce<
		`Dy-Ho-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BFYQ1MW7 = $mol_type_enforce<
		`La-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HRITG4BJ = $mol_type_enforce<
		`La-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BTP1Y4OU = $mol_type_enforce<
		`U-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M1EEOFFZ = $mol_type_enforce<
		`La-Pm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MWN4AALD = $mol_type_enforce<
		`Cs-K-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N1BQZ0ZS = $mol_type_enforce<
		`Tb-Nd-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZJ0QZ8YW = $mol_type_enforce<
		`Nd-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KF0NK3A3 = $mol_type_enforce<
		`Li-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0J5TP1GQ = $mol_type_enforce<
		`Sm-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TFH1IJSD = $mol_type_enforce<
		`La-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PV6WMMZT = $mol_type_enforce<
		`Gd-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IODOTB72 = $mol_type_enforce<
		`Ce-Nd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PBFV6MYS = $mol_type_enforce<
		`Tb-Yb-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WI4F64Y3 = $mol_type_enforce<
		`Ce-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CRS4VT23 = $mol_type_enforce<
		`Pr-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BLNGA327 = $mol_type_enforce<
		`La-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SIXV9DIY = $mol_type_enforce<
		`Dy-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FC4SUZUT = $mol_type_enforce<
		`Li-Pr-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4QECS526 = $mol_type_enforce<
		`Ce-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KG2BHZHQ = $mol_type_enforce<
		`Dy-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0CTOA98Q = $mol_type_enforce<
		`Er-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MD25L7AL = $mol_type_enforce<
		`La-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OYYOVI6H = $mol_type_enforce<
		`Ca-Ce-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H5MIGSPW = $mol_type_enforce<
		`Eu-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WP1TYF4A = $mol_type_enforce<
		`La-Sc-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EBI5BIZR = $mol_type_enforce<
		`Li-Ce-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UDJO4UA7 = $mol_type_enforce<
		`La-Dy-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__95WQ19B6 = $mol_type_enforce<
		`Lu-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O58SU764 = $mol_type_enforce<
		`Gd-Y-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7PW82QOQ = $mol_type_enforce<
		`Li-Ce-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VBTAPSTA = $mol_type_enforce<
		`Cr-Cd-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NDIO4RYC = $mol_type_enforce<
		`La-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B8HR3ODM = $mol_type_enforce<
		`Rb-Mg-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MEHLK656 = $mol_type_enforce<
		`Tb-Gd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G2UVUZ2P = $mol_type_enforce<
		`Eu-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V4QGG4HW = $mol_type_enforce<
		`Co-Ag-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V6PTEAWY = $mol_type_enforce<
		`La-Tb-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SPK5JKGC = $mol_type_enforce<
		`Rb-Mg-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CERJWNUD = $mol_type_enforce<
		`Cu-Ir-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__44P89MMZ = $mol_type_enforce<
		`Rb-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DAFJRC1P = $mol_type_enforce<
		`Gd-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TOLY4ORC = $mol_type_enforce<
		`Er-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IASSZYX4 = $mol_type_enforce<
		`V-Cu-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FBN2738T = $mol_type_enforce<
		`Dy-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6BKYTCOW = $mol_type_enforce<
		`Sc-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H3ON0AWM = $mol_type_enforce<
		`Tb-Gd-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6JPF19DQ = $mol_type_enforce<
		`Li-Tb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JJD8PF6E = $mol_type_enforce<
		`Er-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__01495V2X = $mol_type_enforce<
		`V-Cr-Hg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QU5GAI1A = $mol_type_enforce<
		`La-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MBWWBU56 = $mol_type_enforce<
		`Ta-Cu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q1WDH22E = $mol_type_enforce<
		`Ta-Nb-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2LV9UO67 = $mol_type_enforce<
		`Nd-Sm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WC9WWYHP = $mol_type_enforce<
		`V-Fe-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OK6WX2TE = $mol_type_enforce<
		`Yb-Eu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZZTR35D2 = $mol_type_enforce<
		`La-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A9111FDF = $mol_type_enforce<
		`Pd-Au-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__69S4JVYQ = $mol_type_enforce<
		`Sc-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__11KCL5KQ = $mol_type_enforce<
		`Mn-Co-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KS7305O4 = $mol_type_enforce<
		`Yb-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NG0PYTHC = $mol_type_enforce<
		`Sm-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__68LTBZ1I = $mol_type_enforce<
		`Ce-Pr-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9T8IP4FQ = $mol_type_enforce<
		`Ag-Ir-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QT5EJZX4 = $mol_type_enforce<
		`Nd-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1MJK5UUX = $mol_type_enforce<
		`Li-Y-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZMMVBJZL = $mol_type_enforce<
		`La-Ce-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4I0Y7FHK = $mol_type_enforce<
		`Al-Si-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TQ4NNDVS = $mol_type_enforce<
		`La-Eu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DGFU1YN8 = $mol_type_enforce<
		`In-Si-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MRSHQX5Y = $mol_type_enforce<
		`V-Cr-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B5CRT5TY = $mol_type_enforce<
		`Al-Sn-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LFNKFX8Q = $mol_type_enforce<
		`Ba-Mn-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZA0Q9DPW = $mol_type_enforce<
		`Th-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WLF7XGVF = $mol_type_enforce<
		`Cs-Li-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MXEJV5FT = $mol_type_enforce<
		`Ca-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UO9T9QV1 = $mol_type_enforce<
		`Al-Si-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HJ1QFB9N = $mol_type_enforce<
		`Li-Mg-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q821DKLU = $mol_type_enforce<
		`Yb-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1LDRFRI4 = $mol_type_enforce<
		`Mn-Tl-Cd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PX996BSR = $mol_type_enforce<
		`Fe-Ir-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SIY9F3W3 = $mol_type_enforce<
		`Tb-Nd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P7M4FQSB = $mol_type_enforce<
		`Nd-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z82M2WOH = $mol_type_enforce<
		`Ba-Sr-Ca`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6L7I7RE2 = $mol_type_enforce<
		`La-Eu-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FTMODEPI = $mol_type_enforce<
		`Sm-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9GZ2FMPY = $mol_type_enforce<
		`Y-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E7MBIMFC = $mol_type_enforce<
		`Tc-Ir-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WQ6M59ML = $mol_type_enforce<
		`Cs-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0BZLMXIW = $mol_type_enforce<
		`Gd-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FB52Q1EB = $mol_type_enforce<
		`Dy-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GOAKVVJ2 = $mol_type_enforce<
		`La-Pm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MGVWVK5K = $mol_type_enforce<
		`Yb-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RROD395Q = $mol_type_enforce<
		`Ce-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ERO9K05L = $mol_type_enforce<
		`Ir-Os-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8K6MJOSC = $mol_type_enforce<
		`Ce-Sm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9J854CI2 = $mol_type_enforce<
		`Tb-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D156DZMG = $mol_type_enforce<
		`Pm-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I191CPPT = $mol_type_enforce<
		`Pr-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RUWF6T00 = $mol_type_enforce<
		`Tb-Ce-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VM02ZAZ9 = $mol_type_enforce<
		`Hg-Bi-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7UH141J3 = $mol_type_enforce<
		`Tb-Ce-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2G25OAEM = $mol_type_enforce<
		`Pr-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7LV9C11B = $mol_type_enforce<
		`Cu-Ni-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1AL4XMD2 = $mol_type_enforce<
		`Fe-Co-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RO3405ZI = $mol_type_enforce<
		`Pr-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S1BGK2NO = $mol_type_enforce<
		`Zn-Sn-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZGBC847U = $mol_type_enforce<
		`Yb-Eu-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RVQ8Z6AK = $mol_type_enforce<
		`Cd-Fe-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0GK5NFC0 = $mol_type_enforce<
		`La-Gd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DEDNMM1J = $mol_type_enforce<
		`Ga-Bi-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__89NOKPHQ = $mol_type_enforce<
		`Sm-Gd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__13IB875D = $mol_type_enforce<
		`Co-Pt-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V9P1U7MZ = $mol_type_enforce<
		`Ce-Er-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WTTSJRO9 = $mol_type_enforce<
		`Tb-Ce-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OW2SXDSB = $mol_type_enforce<
		`Sr-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RO59TG4Y = $mol_type_enforce<
		`Cr-Fe-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WVUQLESZ = $mol_type_enforce<
		`Yb-Hf-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2127F8SA = $mol_type_enforce<
		`Eu-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2EUGQKS2 = $mol_type_enforce<
		`Zn-Ge-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QE7WHPAM = $mol_type_enforce<
		`Ca-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X3O8JY7B = $mol_type_enforce<
		`Nd-Sm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__99SFIUCR = $mol_type_enforce<
		`Ce-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DQPF31QT = $mol_type_enforce<
		`Na-Ca-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1GP5GPIQ = $mol_type_enforce<
		`Tl-Cd-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HW4FJRZX = $mol_type_enforce<
		`Nd-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RXPGT7YM = $mol_type_enforce<
		`Li-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__98AKPTE9 = $mol_type_enforce<
		`Pr-Dy-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WUHOD7SW = $mol_type_enforce<
		`Pr-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3OFRIZIK = $mol_type_enforce<
		`Co-Cu-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J8HMQ7ZZ = $mol_type_enforce<
		`Tb-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LC7F42A3 = $mol_type_enforce<
		`Li-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VVV5GRFW = $mol_type_enforce<
		`Pm-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T49I80MX = $mol_type_enforce<
		`La-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5RBWV5WI = $mol_type_enforce<
		`Pr-Sm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YF19CIOQ = $mol_type_enforce<
		`Pr-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BYUHADD7 = $mol_type_enforce<
		`Yb-Gd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RHPUDJ91 = $mol_type_enforce<
		`Gd-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1G5GYCEO = $mol_type_enforce<
		`Ho-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MLKDHTEZ = $mol_type_enforce<
		`Yb-Dy-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1ARMAEEE = $mol_type_enforce<
		`Li-Mg-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RU3X3G2S = $mol_type_enforce<
		`Yb-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M1XA5XB1 = $mol_type_enforce<
		`Lu-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4Q9N6GPA = $mol_type_enforce<
		`Ca-Nd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7OJUCO5L = $mol_type_enforce<
		`Tb-Ce-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DCUUJFT1 = $mol_type_enforce<
		`Dy-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6RLICBNI = $mol_type_enforce<
		`Sr-Ca-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VQO9SHK9 = $mol_type_enforce<
		`Tb-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MJEQJROG = $mol_type_enforce<
		`Pr-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UJ3IWH4I = $mol_type_enforce<
		`Yb-Pr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HSU2XM1G = $mol_type_enforce<
		`Cd-Ga-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SO4J67I1 = $mol_type_enforce<
		`Tb-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RRWLH82X = $mol_type_enforce<
		`La-Ce-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__025YDJLD = $mol_type_enforce<
		`Sm-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D9VV25DM = $mol_type_enforce<
		`Li-Sm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__28MH44TO = $mol_type_enforce<
		`Ba-Yb-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AV4J54F7 = $mol_type_enforce<
		`Gd-Ho-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__51NWF3F0 = $mol_type_enforce<
		`Eu-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UZPD8RQW = $mol_type_enforce<
		`La-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LFQ2NMKU = $mol_type_enforce<
		`Pm-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QJMTO6LZ = $mol_type_enforce<
		`Ce-Pr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F38KQ920 = $mol_type_enforce<
		`U-V-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M7Q0FO6V = $mol_type_enforce<
		`Cs-Li-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L01QM5GF = $mol_type_enforce<
		`Yb-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J5KN9PGS = $mol_type_enforce<
		`La-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WQWL149S = $mol_type_enforce<
		`Tb-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EJPN4PVB = $mol_type_enforce<
		`Eu-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H8MY70QX = $mol_type_enforce<
		`Cs-Rb-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QB6I91UM = $mol_type_enforce<
		`Pm-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__316SKIM4 = $mol_type_enforce<
		`Sr-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8PZM2VLU = $mol_type_enforce<
		`Cu-Ru-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TCGW2F7B = $mol_type_enforce<
		`La-Sm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6T2ELFBL = $mol_type_enforce<
		`La-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__301LX9AU = $mol_type_enforce<
		`Pr-Gd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BHC49YZ9 = $mol_type_enforce<
		`Er-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W85WYZ6E = $mol_type_enforce<
		`Ho-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z5QD7V0Z = $mol_type_enforce<
		`Yb-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LZTEIULB = $mol_type_enforce<
		`Y-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9EHLENTK = $mol_type_enforce<
		`Cr-Ag-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__22GLLRC8 = $mol_type_enforce<
		`Sm-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OIEY87PM = $mol_type_enforce<
		`Li-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6OM10ROA = $mol_type_enforce<
		`Gd-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BM2TA59G = $mol_type_enforce<
		`Sc-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TRL4PEGC = $mol_type_enforce<
		`Rb-Mg-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MT21SFD9 = $mol_type_enforce<
		`Th-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__22VOCQ6N = $mol_type_enforce<
		`K-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7K8WGYOY = $mol_type_enforce<
		`Ho-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0E84N0N6 = $mol_type_enforce<
		`Ba-Nd-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VKR0DZKL = $mol_type_enforce<
		`Rb-Na-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RGHQC03S = $mol_type_enforce<
		`Ce-Sm-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7YQB56ME = $mol_type_enforce<
		`Pr-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__14ZRIFF3 = $mol_type_enforce<
		`Ba-Pr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__532VTUZZ = $mol_type_enforce<
		`Li-Nd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FJ9YYNTF = $mol_type_enforce<
		`Re-Os-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D2I6YVHW = $mol_type_enforce<
		`Eu-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GK4WUFH1 = $mol_type_enforce<
		`Nd-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GMA9SZ9K = $mol_type_enforce<
		`Cs-Rb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RELZB2JJ = $mol_type_enforce<
		`Tb-Pm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0C543A1B = $mol_type_enforce<
		`Cs-K-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R6BJU9L8 = $mol_type_enforce<
		`Na-Sr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MLX27E7M = $mol_type_enforce<
		`La-Ce-Eu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HG2XB2M7 = $mol_type_enforce<
		`La-Gd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I9B7VTBY = $mol_type_enforce<
		`Tb-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ESPX7I5B = $mol_type_enforce<
		`Th-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V5HBCBN4 = $mol_type_enforce<
		`Li-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2RV7B3VT = $mol_type_enforce<
		`Lu-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__72BICCT7 = $mol_type_enforce<
		`Tb-Nd-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E6LYML3N = $mol_type_enforce<
		`Nb-Bi-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3S3S7HNR = $mol_type_enforce<
		`Cd-Si-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EM28ZAXO = $mol_type_enforce<
		`Sm-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A1JX4ZDF = $mol_type_enforce<
		`Be-In-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LC5ZSKYY = $mol_type_enforce<
		`Sr-Ca-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HBXKCQQS = $mol_type_enforce<
		`Pd-Pt-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LRK5FZCL = $mol_type_enforce<
		`Pm-Pr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MRQWAPVB = $mol_type_enforce<
		`La-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2Z6NB6T1 = $mol_type_enforce<
		`Ce-Gd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CXRR0FY7 = $mol_type_enforce<
		`La-Ce-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VTZP28T0 = $mol_type_enforce<
		`La-Th-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UAT3CI7L = $mol_type_enforce<
		`K-Li-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KLHCDIXG = $mol_type_enforce<
		`Ho-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LLYM52JN = $mol_type_enforce<
		`Nd-Gd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0VKKK5CH = $mol_type_enforce<
		`Ce-Sm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TLJS44FZ = $mol_type_enforce<
		`Nd-Dy-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RCK43WWD = $mol_type_enforce<
		`Tb-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__86V51N1E = $mol_type_enforce<
		`Er-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U29Z13Q7 = $mol_type_enforce<
		`Sm-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H7TE4BQZ = $mol_type_enforce<
		`Pm-Sm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZVMO9WAV = $mol_type_enforce<
		`Sc-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8AFRS9OU = $mol_type_enforce<
		`Cs-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B603BRPT = $mol_type_enforce<
		`Yb-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CC4WFL8Z = $mol_type_enforce<
		`Pr-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SCVD77GF = $mol_type_enforce<
		`Zn-Ga-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K7UQXSX3 = $mol_type_enforce<
		`Yb-Nd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KV30G06O = $mol_type_enforce<
		`Er-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MNPOP3X2 = $mol_type_enforce<
		`Pm-Sm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CW63DJ91 = $mol_type_enforce<
		`Mn-Cd-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IK9BB7VS = $mol_type_enforce<
		`Ba-La-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9IFR2M4X = $mol_type_enforce<
		`La-Tb-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UO16MARD = $mol_type_enforce<
		`Yb-Nd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OTJEQRVN = $mol_type_enforce<
		`Pr-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MUUXR485 = $mol_type_enforce<
		`Er-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BI6HVEK3 = $mol_type_enforce<
		`Co-Re-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S6F39222 = $mol_type_enforce<
		`Co-Ni-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EJZRQGHF = $mol_type_enforce<
		`La-Ce-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DPIS5MCL = $mol_type_enforce<
		`Sm-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R72GORQ7 = $mol_type_enforce<
		`Pm-Sm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5QDBRI90 = $mol_type_enforce<
		`Yb-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QKDPU3F3 = $mol_type_enforce<
		`Hf-Mg-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A5JHAKRM = $mol_type_enforce<
		`Pr-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J7T3J6U8 = $mol_type_enforce<
		`Pm-Pr-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AC6UQXVT = $mol_type_enforce<
		`Pm-Sm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PZA80XVW = $mol_type_enforce<
		`K-Mg-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D78Q0D7S = $mol_type_enforce<
		`V-In-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZLA5AZD3 = $mol_type_enforce<
		`Yb-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TPGI5C1P = $mol_type_enforce<
		`Li-Tb-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X42NN493 = $mol_type_enforce<
		`Y-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KREBTRQX = $mol_type_enforce<
		`Th-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2UPD7LLK = $mol_type_enforce<
		`Ba-Eu-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N6MWU7QR = $mol_type_enforce<
		`Ce-Sm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HYPXAH6C = $mol_type_enforce<
		`Pr-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VPR3KTON = $mol_type_enforce<
		`Ba-Ca-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VRT41CIQ = $mol_type_enforce<
		`Ge-Bi-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L65F6AXM = $mol_type_enforce<
		`Ce-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__338A2C8N = $mol_type_enforce<
		`Rb-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F5DGRQPY = $mol_type_enforce<
		`Yb-Pr-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OXBE70VL = $mol_type_enforce<
		`Si-Ge-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZE4GND75 = $mol_type_enforce<
		`Li-Er-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G4ES8VPI = $mol_type_enforce<
		`Ba-La-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__26M2TE1D = $mol_type_enforce<
		`Er-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0FVUPU68 = $mol_type_enforce<
		`Ce-Pr-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TMBSUS7Z = $mol_type_enforce<
		`Y-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FNQADAYS = $mol_type_enforce<
		`Na-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B67IB4OS = $mol_type_enforce<
		`Yb-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HMWCQ04L = $mol_type_enforce<
		`Tb-Pm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OLA3RG1W = $mol_type_enforce<
		`Sm-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QBFM67ME = $mol_type_enforce<
		`Pr-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U0FI8VRX = $mol_type_enforce<
		`Ba-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ULZC53B3 = $mol_type_enforce<
		`Ag-Bi-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MSR6NOD0 = $mol_type_enforce<
		`Nb-Cu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9MFR1PJ7 = $mol_type_enforce<
		`Tb-Ho-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CF49PPZS = $mol_type_enforce<
		`Pm-Sm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4SPBW71U = $mol_type_enforce<
		`Zn-Ge-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KA0YA7JH = $mol_type_enforce<
		`Tb-Pr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QNOYF8E7 = $mol_type_enforce<
		`Ca-Ce-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FUAI318H = $mol_type_enforce<
		`Tm-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9C2SYSPL = $mol_type_enforce<
		`Tc-Ni-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UKAE3HJK = $mol_type_enforce<
		`Eu-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7OXJ1FEK = $mol_type_enforce<
		`La-Tb-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O48RZN56 = $mol_type_enforce<
		`Yb-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EENNBY0H = $mol_type_enforce<
		`Yb-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DJSHYD3H = $mol_type_enforce<
		`Ce-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TXPN354B = $mol_type_enforce<
		`Tb-Nd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1OUIVY4S = $mol_type_enforce<
		`Cu-Ir-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VX2HO7IW = $mol_type_enforce<
		`Ba-La-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9KVY2CHL = $mol_type_enforce<
		`La-Gd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EVY9Z7RA = $mol_type_enforce<
		`Ga-Sn-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__67S8IH9Y = $mol_type_enforce<
		`Tb-Ho-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NMRTL1PK = $mol_type_enforce<
		`Er-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BP41BI72 = $mol_type_enforce<
		`Pr-Y-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GUONX30N = $mol_type_enforce<
		`Dy-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FCB36JWC = $mol_type_enforce<
		`Lu-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__26ZQHDAF = $mol_type_enforce<
		`Pr-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BWU2VSYX = $mol_type_enforce<
		`La-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L8T3I1YG = $mol_type_enforce<
		`Tb-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LYBSIONO = $mol_type_enforce<
		`Lu-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JGNVA325 = $mol_type_enforce<
		`Cs-Rb-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FPUPTH9H = $mol_type_enforce<
		`Fe-Co-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VNX1NJJP = $mol_type_enforce<
		`K-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BIE73TWE = $mol_type_enforce<
		`Tb-Yb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H8TG847I = $mol_type_enforce<
		`Fe-Au-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M7ZSPSB2 = $mol_type_enforce<
		`Dy-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5ZMTRCEW = $mol_type_enforce<
		`Y-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XF5FJS62 = $mol_type_enforce<
		`Tb-Pr-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NKRNJL0P = $mol_type_enforce<
		`Sc-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BM36Y8X1 = $mol_type_enforce<
		`Gd-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y9MITWNQ = $mol_type_enforce<
		`Li-Y-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7ZGTIOYW = $mol_type_enforce<
		`Mn-V-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z2XW470Q = $mol_type_enforce<
		`Yb-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__90EK3BQT = $mol_type_enforce<
		`Sm-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F3S0F4A8 = $mol_type_enforce<
		`La-Nd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U0JU2JEI = $mol_type_enforce<
		`Ga-Si-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GVNQZKP9 = $mol_type_enforce<
		`Ba-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NBAMTTZK = $mol_type_enforce<
		`Nd-Y-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GPIT72A3 = $mol_type_enforce<
		`Gd-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PYMV9LUZ = $mol_type_enforce<
		`Eu-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__754H1JVN = $mol_type_enforce<
		`Er-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KAYFA2TV = $mol_type_enforce<
		`Be-Ga-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8RKDE6Z2 = $mol_type_enforce<
		`K-Li-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DB0XE62T = $mol_type_enforce<
		`Tl-V-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H7T77SD9 = $mol_type_enforce<
		`Co-Os-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R8Y49ANK = $mol_type_enforce<
		`V-Hg-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z3UY2K54 = $mol_type_enforce<
		`Fe-Co-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FG4EKEL1 = $mol_type_enforce<
		`La-Tb-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BJC5NZ37 = $mol_type_enforce<
		`Pr-Dy-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6GA1XYOS = $mol_type_enforce<
		`Ta-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__59OAX9UF = $mol_type_enforce<
		`Li-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JVVRXI6M = $mol_type_enforce<
		`Zn-In-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A2L8E7U2 = $mol_type_enforce<
		`Tb-Ce-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HAQV83LP = $mol_type_enforce<
		`Ca-Yb-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1CPUUR4K = $mol_type_enforce<
		`La-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MDL1J4TH = $mol_type_enforce<
		`Yb-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__50H9R4ZW = $mol_type_enforce<
		`La-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7F5U0W5Y = $mol_type_enforce<
		`Li-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__63RB2O6J = $mol_type_enforce<
		`Yb-Pr-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CAXTII7N = $mol_type_enforce<
		`Li-Pr-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FLMYDJVJ = $mol_type_enforce<
		`Ho-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1H1C5ZTN = $mol_type_enforce<
		`Pr-Sm-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5NX34U2Z = $mol_type_enforce<
		`Tb-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UMBVPBTZ = $mol_type_enforce<
		`Yb-Eu-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TH973BWZ = $mol_type_enforce<
		`Nd-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0IAU2TTV = $mol_type_enforce<
		`Ga-Hg-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__42ILETY8 = $mol_type_enforce<
		`Pm-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0L7MTSML = $mol_type_enforce<
		`Ba-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YARJOAUM = $mol_type_enforce<
		`Ni-Ru-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1JNPYEZ6 = $mol_type_enforce<
		`Y-Er-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__543E2GV5 = $mol_type_enforce<
		`Ca-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UB4T4VRF = $mol_type_enforce<
		`Al-Zn-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FMXWE1Y1 = $mol_type_enforce<
		`Th-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1DPFZVDI = $mol_type_enforce<
		`Fe-Ni-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DFUC3AI3 = $mol_type_enforce<
		`Tb-Sm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CC5TN8GR = $mol_type_enforce<
		`Li-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QF1H3R0R = $mol_type_enforce<
		`Pm-Dy-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RCN3WXXK = $mol_type_enforce<
		`Fe-Co-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PH4CCA12 = $mol_type_enforce<
		`Gd-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AOO34NC6 = $mol_type_enforce<
		`Dy-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F0HKRGFV = $mol_type_enforce<
		`La-Ce-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B79GCHFV = $mol_type_enforce<
		`Yb-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YNA55H18 = $mol_type_enforce<
		`Tb-Ho-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H4VYH05G = $mol_type_enforce<
		`Tb-Y-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T8A2SPW8 = $mol_type_enforce<
		`Tc-Ir-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2IOYP7O9 = $mol_type_enforce<
		`Ce-Nd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4ERLMHUT = $mol_type_enforce<
		`Yb-Y-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__387KHIV6 = $mol_type_enforce<
		`Na-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KBZPOYHY = $mol_type_enforce<
		`Nd-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9SIETUA5 = $mol_type_enforce<
		`Ho-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XHW9XTEC = $mol_type_enforce<
		`Ba-Ca-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MUJQCL65 = $mol_type_enforce<
		`Fe-Os-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XFS54M1K = $mol_type_enforce<
		`Pm-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NYILCEEH = $mol_type_enforce<
		`Gd-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QKI9R0SS = $mol_type_enforce<
		`Tb-Dy-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T3S5CAOA = $mol_type_enforce<
		`La-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UBF73BE0 = $mol_type_enforce<
		`Sr-Mn-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PDAUC05T = $mol_type_enforce<
		`La-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__16I90MWK = $mol_type_enforce<
		`Dy-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E1GUTYH6 = $mol_type_enforce<
		`Tl-Zn-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__17EYJETH = $mol_type_enforce<
		`Nb-Tl-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__27SS4GBJ = $mol_type_enforce<
		`Pu-Np-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TQXEDDUT = $mol_type_enforce<
		`Ir-Pt-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DI298LE6 = $mol_type_enforce<
		`Yb-Dy-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__86Y58PXM = $mol_type_enforce<
		`Li-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JZQG0T2I = $mol_type_enforce<
		`Pr-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E3I9SU2F = $mol_type_enforce<
		`Nd-Dy-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JH94IMRW = $mol_type_enforce<
		`Ce-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y9XGHQ0Z = $mol_type_enforce<
		`Be-Al-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B2OF03XS = $mol_type_enforce<
		`Dy-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YIOJIP7I = $mol_type_enforce<
		`Al-Cd-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UUPVN7U9 = $mol_type_enforce<
		`La-Er-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7MJT4XA1 = $mol_type_enforce<
		`Tb-Nd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6ZOB1X64 = $mol_type_enforce<
		`Eu-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WDKLBQJ4 = $mol_type_enforce<
		`Re-Os-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MA80OTP5 = $mol_type_enforce<
		`Nd-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BKZY66C1 = $mol_type_enforce<
		`Sm-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OG8D4XRU = $mol_type_enforce<
		`Cs-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B302RRL5 = $mol_type_enforce<
		`Tb-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EVC2TN7Y = $mol_type_enforce<
		`Mg-Mn-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PSF47KJ0 = $mol_type_enforce<
		`Cu-Pd-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RZSABUMW = $mol_type_enforce<
		`Li-Er-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XRKZR3IQ = $mol_type_enforce<
		`Li-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__62PNIQJA = $mol_type_enforce<
		`Y-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4B45W34C = $mol_type_enforce<
		`Yb-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__53QR72T9 = $mol_type_enforce<
		`Li-Sm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z2DFEDJP = $mol_type_enforce<
		`Dy-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UYF86NB4 = $mol_type_enforce<
		`Ca-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UTDZF8LP = $mol_type_enforce<
		`Pr-Hf-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MKEXZ5K8 = $mol_type_enforce<
		`La-Yb-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OD379E0P = $mol_type_enforce<
		`Eu-Mn-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N7Y425AM = $mol_type_enforce<
		`Tb-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KS5M4ENF = $mol_type_enforce<
		`Yb-Nd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FXADNBPB = $mol_type_enforce<
		`Ti-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LTWPOHK0 = $mol_type_enforce<
		`Mg-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UGUJC0MD = $mol_type_enforce<
		`Ta-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6P3TBDH5 = $mol_type_enforce<
		`Li-Nd-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XIN277YH = $mol_type_enforce<
		`Tl-Ag-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PUO0H3A2 = $mol_type_enforce<
		`Tb-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0N5DPLFM = $mol_type_enforce<
		`Gd-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4G5J8IAC = $mol_type_enforce<
		`Cu-Pd-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I79WR6KZ = $mol_type_enforce<
		`Li-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VHVUVS28 = $mol_type_enforce<
		`Gd-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UET2TEOU = $mol_type_enforce<
		`Cu-Ru-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NQ8P07JC = $mol_type_enforce<
		`Li-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZBNLXABG = $mol_type_enforce<
		`Yb-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__US8JNDLZ = $mol_type_enforce<
		`Gd-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ND1JOKNT = $mol_type_enforce<
		`Pr-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J44XNYS8 = $mol_type_enforce<
		`V-Fe-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L1TL2JL6 = $mol_type_enforce<
		`La-Gd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__909XO1CX = $mol_type_enforce<
		`Ta-V-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ERI4275H = $mol_type_enforce<
		`Tb-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7TJ1QRSG = $mol_type_enforce<
		`Cr-Mo-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IEGPWZJK = $mol_type_enforce<
		`Tb-Ce-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GY5VUQSV = $mol_type_enforce<
		`Ca-La-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E95NTJPZ = $mol_type_enforce<
		`Gd-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UT8GCSIQ = $mol_type_enforce<
		`Cr-Fe-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K6QDBOH1 = $mol_type_enforce<
		`Cr-Bi-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6LLSEREG = $mol_type_enforce<
		`Ce-Pr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HDCE1YFS = $mol_type_enforce<
		`Sr-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R5I9KDXP = $mol_type_enforce<
		`Ag-Ge-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QR8O005I = $mol_type_enforce<
		`Y-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C5RBPT7O = $mol_type_enforce<
		`Er-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QCWWBHWA = $mol_type_enforce<
		`Sm-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ATTGBZY9 = $mol_type_enforce<
		`Cr-Hg-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9I7IK3NX = $mol_type_enforce<
		`La-Pr-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GAULWW47 = $mol_type_enforce<
		`Ca-Ce-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z0CIN4Y4 = $mol_type_enforce<
		`Th-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CTMY5FZR = $mol_type_enforce<
		`Ba-Nd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TBLIABPM = $mol_type_enforce<
		`Ce-Eu-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2RNX01D3 = $mol_type_enforce<
		`Y-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__61YZZWT6 = $mol_type_enforce<
		`Cs-Li-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G39KL5TZ = $mol_type_enforce<
		`Tb-Nd-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BI74G99R = $mol_type_enforce<
		`K-Rb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AKPRZGPE = $mol_type_enforce<
		`Ca-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TN72PHDI = $mol_type_enforce<
		`Tb-Dy-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L8XXY7MC = $mol_type_enforce<
		`Ce-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LL30NONL = $mol_type_enforce<
		`Yb-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__69VY0H7P = $mol_type_enforce<
		`Y-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QOBRJKBM = $mol_type_enforce<
		`Gd-Dy-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RQ2M6D5A = $mol_type_enforce<
		`Yb-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZAM5E9ML = $mol_type_enforce<
		`Ce-Pr-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QO617F6F = $mol_type_enforce<
		`Dy-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZL7APRTM = $mol_type_enforce<
		`Y-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HN45TBYT = $mol_type_enforce<
		`Hf-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AKK087F0 = $mol_type_enforce<
		`Cu-Mo-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A4Y55JR4 = $mol_type_enforce<
		`Ho-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5D8XWLO4 = $mol_type_enforce<
		`Na-Mg-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3CGIRUGS = $mol_type_enforce<
		`Cu-Re-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PSDRQXNF = $mol_type_enforce<
		`Si-Ag-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5RV0Y0UA = $mol_type_enforce<
		`Ba-La-Eu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IYU3XUVS = $mol_type_enforce<
		`Pm-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5DXWZXPX = $mol_type_enforce<
		`Mn-V-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F06CUJMY = $mol_type_enforce<
		`Ca-La-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZGW7T1KH = $mol_type_enforce<
		`Pr-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X3A6FHG5 = $mol_type_enforce<
		`Nd-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3SPS927P = $mol_type_enforce<
		`Re-Ni-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9Z4YI5U6 = $mol_type_enforce<
		`Gd-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PCT0UV5Z = $mol_type_enforce<
		`Ce-Hf-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H79KAZIM = $mol_type_enforce<
		`La-Nd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CUFNVCYJ = $mol_type_enforce<
		`Yb-Ho-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JZ3JV3AP = $mol_type_enforce<
		`Al-Cd-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__20A5FEDG = $mol_type_enforce<
		`Al-Tl-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C95Z16TM = $mol_type_enforce<
		`Tb-Sm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TSEROIF3 = $mol_type_enforce<
		`Pm-Sm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YA7S6JVA = $mol_type_enforce<
		`Ce-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JYQRCD0V = $mol_type_enforce<
		`Pr-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZJ66PC6T = $mol_type_enforce<
		`Dy-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GGMCURAI = $mol_type_enforce<
		`Zn-Sn-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CJ087MIN = $mol_type_enforce<
		`Rb-Mg-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TN32SDJO = $mol_type_enforce<
		`Tl-In-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WQ9A6533 = $mol_type_enforce<
		`Ca-V-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I4LS9ZCO = $mol_type_enforce<
		`Th-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BJHMDMA9 = $mol_type_enforce<
		`Gd-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ANDDPDOU = $mol_type_enforce<
		`La-Er-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DG7M8NSL = $mol_type_enforce<
		`Nd-Th-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7TEACQ8A = $mol_type_enforce<
		`Ce-Pm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S9CA79YH = $mol_type_enforce<
		`Tb-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y8LNJDBV = $mol_type_enforce<
		`Gd-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JHOESU9G = $mol_type_enforce<
		`Yb-Pr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5EQLXHTL = $mol_type_enforce<
		`Yb-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KYL81T1O = $mol_type_enforce<
		`Rb-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YKV5B5RA = $mol_type_enforce<
		`Dy-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A25S7LTL = $mol_type_enforce<
		`Be-Ga-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5YKH5RHC = $mol_type_enforce<
		`Y-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8KGFQR03 = $mol_type_enforce<
		`Ba-Yb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X3M2TA3N = $mol_type_enforce<
		`Yb-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1G83IFK5 = $mol_type_enforce<
		`Tb-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NSCLENQU = $mol_type_enforce<
		`Ho-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2DO662LO = $mol_type_enforce<
		`Pm-Gd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ORGEVGVS = $mol_type_enforce<
		`Li-Mn-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3FFPKOTS = $mol_type_enforce<
		`Ce-Eu-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VQM5UNC0 = $mol_type_enforce<
		`Be-Al-Zn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__428AXFEN = $mol_type_enforce<
		`Zn-Ge-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FIPFE3QV = $mol_type_enforce<
		`Pr-Ho-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4CDZA5D8 = $mol_type_enforce<
		`Tb-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GF5VX9IS = $mol_type_enforce<
		`Li-Sm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8FJ1XVWY = $mol_type_enforce<
		`Dy-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GOH9ZERI = $mol_type_enforce<
		`Ba-Ca-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HBC66YOM = $mol_type_enforce<
		`Ho-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C9UUQUX8 = $mol_type_enforce<
		`Er-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0BOQPWQ2 = $mol_type_enforce<
		`Ca-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NWU0AY3W = $mol_type_enforce<
		`Os-Pd-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__45YLCE2Z = $mol_type_enforce<
		`Pr-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VM9AW52N = $mol_type_enforce<
		`Cr-Ag-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I92E5EE6 = $mol_type_enforce<
		`La-Ce-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L82QNYGM = $mol_type_enforce<
		`Mn-Cu-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L1ZWOS7H = $mol_type_enforce<
		`Yb-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2CTLEH5T = $mol_type_enforce<
		`La-Nd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5NX0LUF9 = $mol_type_enforce<
		`Ce-Ho-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G0OQ7T7H = $mol_type_enforce<
		`Re-Ag-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M0TBMT4C = $mol_type_enforce<
		`Tl-Mo-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0YNQNAA1 = $mol_type_enforce<
		`Sm-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IQT6M3XT = $mol_type_enforce<
		`Co-Ir-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3KC4WXRZ = $mol_type_enforce<
		`Pm-Gd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FQE43O3V = $mol_type_enforce<
		`Ce-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YEHUN9IH = $mol_type_enforce<
		`Ce-Sm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q1T5PAYP = $mol_type_enforce<
		`La-Tb-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P8Q2UZ13 = $mol_type_enforce<
		`Yb-Gd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZY29RDB0 = $mol_type_enforce<
		`Cu-Ni-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O2KE2COT = $mol_type_enforce<
		`Rb-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PWB7YYUZ = $mol_type_enforce<
		`Yb-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__04JCG4JH = $mol_type_enforce<
		`Nd-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9KMNYABZ = $mol_type_enforce<
		`Tl-Cd-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YOTJRXXC = $mol_type_enforce<
		`Tb-Sm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4WKYMM0X = $mol_type_enforce<
		`Sm-Gd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TII0HOVH = $mol_type_enforce<
		`Tb-Yb-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NMBDSPUC = $mol_type_enforce<
		`Li-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T91T7BGR = $mol_type_enforce<
		`Pr-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TOCERB96 = $mol_type_enforce<
		`Mg-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B4GR8BMW = $mol_type_enforce<
		`La-Ce-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W2YIJ2SF = $mol_type_enforce<
		`Th-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KOXKBZ2F = $mol_type_enforce<
		`Nd-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YOFNDGBZ = $mol_type_enforce<
		`Eu-Hf-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UAW6J394 = $mol_type_enforce<
		`Ce-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EY3YMOB5 = $mol_type_enforce<
		`Gd-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KMM8JJ3M = $mol_type_enforce<
		`Er-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z0ETZA5B = $mol_type_enforce<
		`Ca-Pm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZGTJHDAS = $mol_type_enforce<
		`Co-Cu-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EZADS20Z = $mol_type_enforce<
		`Yb-Eu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L8JN5QLT = $mol_type_enforce<
		`Sm-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KGKQRCB4 = $mol_type_enforce<
		`Y-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HGSWMUKB = $mol_type_enforce<
		`Y-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AJR1TN13 = $mol_type_enforce<
		`V-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TZ9YSAWE = $mol_type_enforce<
		`Ce-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WEGXK1NV = $mol_type_enforce<
		`Cs-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AI67VPW4 = $mol_type_enforce<
		`Nd-Dy-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X1P9VL58 = $mol_type_enforce<
		`Li-Ho-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LS6ZBP1G = $mol_type_enforce<
		`Si-Ag-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__98LREY2O = $mol_type_enforce<
		`Yb-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2SDLA4MS = $mol_type_enforce<
		`Tl-Cd-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PMGPDBU4 = $mol_type_enforce<
		`Tb-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OFDE0C7N = $mol_type_enforce<
		`Ce-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1PUW1DJ6 = $mol_type_enforce<
		`Yb-Pr-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8A2GEZEG = $mol_type_enforce<
		`Nd-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H5GI7V5R = $mol_type_enforce<
		`Pr-Nd-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6I2ETSNH = $mol_type_enforce<
		`Li-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MNWGMAYZ = $mol_type_enforce<
		`Yb-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YQE6MQND = $mol_type_enforce<
		`Tb-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VPAUM5IA = $mol_type_enforce<
		`La-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NL9DQ4YY = $mol_type_enforce<
		`Nd-Dy-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__40C7NL6J = $mol_type_enforce<
		`Pm-Nd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A8ZJQZPY = $mol_type_enforce<
		`Li-Tb-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D3F6APR4 = $mol_type_enforce<
		`Gd-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QGT5VRCP = $mol_type_enforce<
		`Li-La-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__98E0ZLH3 = $mol_type_enforce<
		`Pu-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L8L9PGSG = $mol_type_enforce<
		`Na-Ca-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8QZYTOZA = $mol_type_enforce<
		`Y-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__26L90A8P = $mol_type_enforce<
		`Ce-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O2TRDW4W = $mol_type_enforce<
		`Hf-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FOJR6BPX = $mol_type_enforce<
		`La-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PK0MWJX2 = $mol_type_enforce<
		`Ho-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5VU88QGU = $mol_type_enforce<
		`Ca-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JRAHBSNG = $mol_type_enforce<
		`Nd-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FRMX3I7H = $mol_type_enforce<
		`La-Tb-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2CBG8FYA = $mol_type_enforce<
		`Yb-Gd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8YA3YLZH = $mol_type_enforce<
		`Tc-Pd-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RBKUPLKV = $mol_type_enforce<
		`Li-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X4U17TMJ = $mol_type_enforce<
		`Li-Sm-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4GL56E58 = $mol_type_enforce<
		`Be-Ge-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8FXVFOD7 = $mol_type_enforce<
		`Ca-Tb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PRAAP5LZ = $mol_type_enforce<
		`K-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CLE5FFKY = $mol_type_enforce<
		`Pm-Gd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OKYB7LYV = $mol_type_enforce<
		`La-Sm-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GC7DP5GP = $mol_type_enforce<
		`Ca-Yb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6RZYFYNQ = $mol_type_enforce<
		`Nd-Gd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__41V2A4J8 = $mol_type_enforce<
		`Pm-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__385O8I42 = $mol_type_enforce<
		`Yb-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0MGY2281 = $mol_type_enforce<
		`Ce-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7VVIZDC9 = $mol_type_enforce<
		`Dy-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MEP03G62 = $mol_type_enforce<
		`Yb-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GJRKT9JY = $mol_type_enforce<
		`Cu-Pd-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NX0MMH6G = $mol_type_enforce<
		`La-Tb-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5CFDVDOI = $mol_type_enforce<
		`Tm-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1R7VB45L = $mol_type_enforce<
		`Tb-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RNBXOVKP = $mol_type_enforce<
		`La-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H86G2M98 = $mol_type_enforce<
		`Sm-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PUYNTM3H = $mol_type_enforce<
		`Li-Mn-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H1I3WYNZ = $mol_type_enforce<
		`Ce-Gd-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P7VK60R8 = $mol_type_enforce<
		`Sc-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DCK1RCNS = $mol_type_enforce<
		`Ta-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y8H7RT42 = $mol_type_enforce<
		`Nd-Sm-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IED1TX1I = $mol_type_enforce<
		`Nd-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V8LIE5NF = $mol_type_enforce<
		`La-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q0DIPDHX = $mol_type_enforce<
		`La-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KPDWQSYI = $mol_type_enforce<
		`Ca-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__82YAWPMT = $mol_type_enforce<
		`Re-Hg-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H2AQ3NOW = $mol_type_enforce<
		`Tb-Dy-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JPU7CN99 = $mol_type_enforce<
		`La-Tb-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PYDANKZC = $mol_type_enforce<
		`La-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T7ITMXJ9 = $mol_type_enforce<
		`Cu-Tc-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2LXU6ZLR = $mol_type_enforce<
		`Li-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AE1ZOLVX = $mol_type_enforce<
		`Si-Ge-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WOEKBNPH = $mol_type_enforce<
		`Gd-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DGIN15GE = $mol_type_enforce<
		`Sm-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FCZ3O4TE = $mol_type_enforce<
		`Na-Mg-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AOROIYE4 = $mol_type_enforce<
		`La-Ce-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SERNE568 = $mol_type_enforce<
		`Th-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K0KS3EQF = $mol_type_enforce<
		`Y-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CD0CAQQG = $mol_type_enforce<
		`La-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__56QKRB0J = $mol_type_enforce<
		`Dy-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P8G8GISJ = $mol_type_enforce<
		`La-Pr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PJOIJTI7 = $mol_type_enforce<
		`Ca-La-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LOYMVKD0 = $mol_type_enforce<
		`Pr-Dy-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HWKXV6VY = $mol_type_enforce<
		`Ce-Nd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__27XBEV00 = $mol_type_enforce<
		`Lu-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C8MXBLNM = $mol_type_enforce<
		`Y-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XPTEM34G = $mol_type_enforce<
		`Li-Ce-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YUZ8ASGX = $mol_type_enforce<
		`La-Eu-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RCWP1EPZ = $mol_type_enforce<
		`Nd-Sm-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3N831S3O = $mol_type_enforce<
		`La-Tb-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__17AKG5VL = $mol_type_enforce<
		`Li-Ce-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HQ9B8XAM = $mol_type_enforce<
		`Dy-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__22BE4H6I = $mol_type_enforce<
		`Zn-Ga-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y9QHW0MC = $mol_type_enforce<
		`Y-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3WXTZUUQ = $mol_type_enforce<
		`Li-Pm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z8KQJ0ST = $mol_type_enforce<
		`Pm-Nd-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6Q9HHGC3 = $mol_type_enforce<
		`Pr-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RHCOKXT7 = $mol_type_enforce<
		`Ba-La-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4ZDK5UEP = $mol_type_enforce<
		`Fe-Co-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W2ANVCDE = $mol_type_enforce<
		`Pr-Nd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B09RJQCH = $mol_type_enforce<
		`Tl-In-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__512RZQZC = $mol_type_enforce<
		`Li-Pm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2W7N83B6 = $mol_type_enforce<
		`Nd-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S52M8IN4 = $mol_type_enforce<
		`Pr-Nd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K2ERZGI3 = $mol_type_enforce<
		`Pr-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6BND4CJQ = $mol_type_enforce<
		`Ce-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2E3PZZSG = $mol_type_enforce<
		`Tb-Ce-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__19E1ZMW6 = $mol_type_enforce<
		`V-Cr-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FG5K1CFO = $mol_type_enforce<
		`Fe-Rh-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V5BESZ3Z = $mol_type_enforce<
		`Cs-K-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JK0DBGPZ = $mol_type_enforce<
		`Er-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B18BNV88 = $mol_type_enforce<
		`Tb-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WNICPM2P = $mol_type_enforce<
		`K-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__099N2SZR = $mol_type_enforce<
		`Gd-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XECUITCA = $mol_type_enforce<
		`La-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UFQBAV3C = $mol_type_enforce<
		`Yb-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UK0T4A8Y = $mol_type_enforce<
		`Ho-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WRAKL88H = $mol_type_enforce<
		`Pr-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9LHJ3LHH = $mol_type_enforce<
		`Mg-V-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CT4R8RNX = $mol_type_enforce<
		`Ta-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FWXPKA3D = $mol_type_enforce<
		`Li-Mg-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3GWITBFJ = $mol_type_enforce<
		`Nd-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3651527N = $mol_type_enforce<
		`Tm-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VSD4J91G = $mol_type_enforce<
		`K-Hf-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B5WBT90O = $mol_type_enforce<
		`Cs-Mg-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V9QZFHEF = $mol_type_enforce<
		`Pr-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V3JOBYU5 = $mol_type_enforce<
		`Ba-Gd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5MXWH9KW = $mol_type_enforce<
		`Sm-Er-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2FGO84OL = $mol_type_enforce<
		`Yb-Eu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RDKI155A = $mol_type_enforce<
		`Pr-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5KBBE9FN = $mol_type_enforce<
		`La-Pm-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HCCICLW8 = $mol_type_enforce<
		`Li-Nd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QGP7D4HA = $mol_type_enforce<
		`Yb-Dy-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__USODLW09 = $mol_type_enforce<
		`Li-Gd-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XZ3JYFGU = $mol_type_enforce<
		`Ta-Nb-Tl`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SFP6Y3FX = $mol_type_enforce<
		`Fe-Cu-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DP91VC82 = $mol_type_enforce<
		`Pm-Pr-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U9JOPVHI = $mol_type_enforce<
		`Fe-Cu-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6CHSX28W = $mol_type_enforce<
		`Dy-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FPATFKSX = $mol_type_enforce<
		`Nb-Hg-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LUAUJ1TK = $mol_type_enforce<
		`Er-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UK8WHXXO = $mol_type_enforce<
		`Sr-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MURR8R4S = $mol_type_enforce<
		`Dy-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3WP24UDO = $mol_type_enforce<
		`Tb-Yb-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X71SI67C = $mol_type_enforce<
		`Nd-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0MF6YR0M = $mol_type_enforce<
		`Be-Zn-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__34SGGU0J = $mol_type_enforce<
		`Eu-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PS57TPAW = $mol_type_enforce<
		`Yb-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SCGYXM19 = $mol_type_enforce<
		`Ce-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P8XODKUC = $mol_type_enforce<
		`Gd-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OG8SUHTI = $mol_type_enforce<
		`Tl-Si-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GR8V9IUN = $mol_type_enforce<
		`Sm-Dy-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7J5LXY97 = $mol_type_enforce<
		`La-Ho-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CRXOPXGW = $mol_type_enforce<
		`Cs-Li-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4RSS6OQB = $mol_type_enforce<
		`Cu-Bi-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R929ZSDH = $mol_type_enforce<
		`Yb-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YF8HFX9A = $mol_type_enforce<
		`Ce-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SQG6A16Q = $mol_type_enforce<
		`Li-V-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__135IHAVA = $mol_type_enforce<
		`Gd-Er-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2PKBS5UH = $mol_type_enforce<
		`Yb-Dy-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DQVNO5EH = $mol_type_enforce<
		`Re-Ni-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7GAP166D = $mol_type_enforce<
		`Ca-Nd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UMW31CLU = $mol_type_enforce<
		`Yb-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NK7Q48J1 = $mol_type_enforce<
		`La-Tb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6UCLYIR2 = $mol_type_enforce<
		`Ir-Rh-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WYD1U5SH = $mol_type_enforce<
		`Al-Tl-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EM8BCRDY = $mol_type_enforce<
		`La-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LNSL2CZK = $mol_type_enforce<
		`Nd-Gd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PMIDBWME = $mol_type_enforce<
		`Al-Cd-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__68QRGKRG = $mol_type_enforce<
		`Li-Ho-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__186L3JBC = $mol_type_enforce<
		`Ho-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U2AILSQ4 = $mol_type_enforce<
		`Li-Gd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AP2M6O2T = $mol_type_enforce<
		`Ga-Re-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4RSRO16I = $mol_type_enforce<
		`Yb-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VDL5OUHO = $mol_type_enforce<
		`Li-Pr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QW9EL3P0 = $mol_type_enforce<
		`U-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LX02AWMQ = $mol_type_enforce<
		`Yb-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__25CRPESA = $mol_type_enforce<
		`Ce-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UU6T228P = $mol_type_enforce<
		`Fe-Ir-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9Z7UZSVB = $mol_type_enforce<
		`Gd-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AISNGQN5 = $mol_type_enforce<
		`Tb-Gd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0JM4A7BQ = $mol_type_enforce<
		`Ca-La-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V9HYHPGI = $mol_type_enforce<
		`Ce-Nd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NRH8YX0Q = $mol_type_enforce<
		`Yb-Eu-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FP3VUQKU = $mol_type_enforce<
		`Ta-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DEP2OU76 = $mol_type_enforce<
		`Th-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XQV1RU2P = $mol_type_enforce<
		`Ca-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LDLDROQW = $mol_type_enforce<
		`Er-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OL9VLM1L = $mol_type_enforce<
		`Sm-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__86YURU3D = $mol_type_enforce<
		`Ce-Pm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D683QU5R = $mol_type_enforce<
		`Pr-Sm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CPH2Y9D1 = $mol_type_enforce<
		`Ta-Tl-In`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PCTJMWQK = $mol_type_enforce<
		`Li-Tb-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KWC3LUFE = $mol_type_enforce<
		`Ba-Pm-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5U7LH8EN = $mol_type_enforce<
		`Li-Gd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SYRZY21F = $mol_type_enforce<
		`Hg-B-Sb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LMY1AZ2J = $mol_type_enforce<
		`Gd-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UKRWJLTO = $mol_type_enforce<
		`Tb-Pr-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z1CUI7ZB = $mol_type_enforce<
		`Ce-Gd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SAH5BGA6 = $mol_type_enforce<
		`Ho-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M3HAB7DB = $mol_type_enforce<
		`Y-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0OPGS184 = $mol_type_enforce<
		`Ir-Pt-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RP3ER5SV = $mol_type_enforce<
		`La-Tb-Yb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R7W8JITL = $mol_type_enforce<
		`Li-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DW9SJJHC = $mol_type_enforce<
		`Tm-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B2RQVONX = $mol_type_enforce<
		`Tb-Pr-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U0PZ46ML = $mol_type_enforce<
		`Pr-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1GGCDY5Y = $mol_type_enforce<
		`Re-Bi-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K4VFFHA9 = $mol_type_enforce<
		`Co-Cu-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CAPU3HRW = $mol_type_enforce<
		`Nd-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SQ6Y4HY2 = $mol_type_enforce<
		`La-Pm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IPJZDM4P = $mol_type_enforce<
		`Ca-Eu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6AEM0UKA = $mol_type_enforce<
		`Ba-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OAACZ3VI = $mol_type_enforce<
		`Na-Nb-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BSUD661P = $mol_type_enforce<
		`Cs-Li-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WAQOMS9Y = $mol_type_enforce<
		`Gd-Dy-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EV0BEUL5 = $mol_type_enforce<
		`La-Ce-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NP95URY3 = $mol_type_enforce<
		`Cu-Re-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HY0287L8 = $mol_type_enforce<
		`Li-Mg-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5P8ASH5K = $mol_type_enforce<
		`Ce-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DBAPT6M3 = $mol_type_enforce<
		`Ca-La-Yb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F4RYXT69 = $mol_type_enforce<
		`Ce-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FEY391AW = $mol_type_enforce<
		`Zn-Cd-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MYRIU1AP = $mol_type_enforce<
		`Nd-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FRVTN371 = $mol_type_enforce<
		`V-Fe-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZJAL7UG5 = $mol_type_enforce<
		`Tb-Dy-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y91TON25 = $mol_type_enforce<
		`Hf-Th-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NDU5GXE7 = $mol_type_enforce<
		`Sc-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GQX5QFAZ = $mol_type_enforce<
		`La-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OZDZC54O = $mol_type_enforce<
		`Al-In-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YJYVL1E9 = $mol_type_enforce<
		`Be-Ga-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FKS4QRQ3 = $mol_type_enforce<
		`Os-Ru-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CJXZV2E2 = $mol_type_enforce<
		`Ag-Ge-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LNGDPZUA = $mol_type_enforce<
		`Pm-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__USJA75CL = $mol_type_enforce<
		`Li-La-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7W132K4V = $mol_type_enforce<
		`Cs-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R85ZKBTZ = $mol_type_enforce<
		`Ce-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FSC325U1 = $mol_type_enforce<
		`Pr-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CGKTOK0J = $mol_type_enforce<
		`Li-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8NW9BNVC = $mol_type_enforce<
		`La-Ho-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N5DNXBWE = $mol_type_enforce<
		`Nd-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HWKOKMDS = $mol_type_enforce<
		`Th-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NI2QTXCM = $mol_type_enforce<
		`Er-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZG0CT3OE = $mol_type_enforce<
		`Gd-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KL9EA28R = $mol_type_enforce<
		`Lu-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1ZOM99RD = $mol_type_enforce<
		`Lu-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G1C8ASVU = $mol_type_enforce<
		`Ce-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5OYJ26FU = $mol_type_enforce<
		`Ce-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YCX2DHX1 = $mol_type_enforce<
		`Li-Ce-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__67XCPGL0 = $mol_type_enforce<
		`Ce-Th-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SUNYNW42 = $mol_type_enforce<
		`Li-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FJPLUW4G = $mol_type_enforce<
		`Yb-Ho-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XCHQGECS = $mol_type_enforce<
		`Li-Pm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__08BGUZYD = $mol_type_enforce<
		`Ce-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OWQ41IIC = $mol_type_enforce<
		`Cs-K-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__50RIQRMQ = $mol_type_enforce<
		`Tb-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T2XDZUHV = $mol_type_enforce<
		`Ce-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SWKW9S6H = $mol_type_enforce<
		`Ho-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MGFQ1CQ1 = $mol_type_enforce<
		`Y-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K0H0I9P2 = $mol_type_enforce<
		`Gd-Dy-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4MQGRCQY = $mol_type_enforce<
		`Gd-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JM8M5QA2 = $mol_type_enforce<
		`Li-Cr-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3F359DFU = $mol_type_enforce<
		`Co-Bi-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YXVQRK7X = $mol_type_enforce<
		`Gd-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5AGRKAFL = $mol_type_enforce<
		`Co-Ru-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WT1ELKWE = $mol_type_enforce<
		`Gd-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1OC7CRYA = $mol_type_enforce<
		`Li-La-Ce`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LYM9D93Q = $mol_type_enforce<
		`Be-Al-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZME1SF7V = $mol_type_enforce<
		`Gd-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__016LT0LK = $mol_type_enforce<
		`Pr-Dy-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LD5AYUA0 = $mol_type_enforce<
		`Yb-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__STS0TKJ8 = $mol_type_enforce<
		`La-Gd-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CHYJPZKS = $mol_type_enforce<
		`Tl-Cu-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TJ498T5F = $mol_type_enforce<
		`Cr-Ag-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1A3FVNHU = $mol_type_enforce<
		`Tb-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M7U0SKZK = $mol_type_enforce<
		`Nd-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AXYTN57I = $mol_type_enforce<
		`Eu-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S291BX2N = $mol_type_enforce<
		`Ga-Ge-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B264RQY5 = $mol_type_enforce<
		`Li-Pm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0NKBYEUL = $mol_type_enforce<
		`Li-Nd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IH4PZXZV = $mol_type_enforce<
		`Ba-Pr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VGOKJK52 = $mol_type_enforce<
		`Li-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D1WD9JCX = $mol_type_enforce<
		`Pr-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HVCNEHAS = $mol_type_enforce<
		`Ce-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I417TNJY = $mol_type_enforce<
		`Dy-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1JUT1C7Q = $mol_type_enforce<
		`Ca-Eu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9H4VSYIN = $mol_type_enforce<
		`Ni-Pd-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UMAY6LG9 = $mol_type_enforce<
		`Er-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IG8BQUSF = $mol_type_enforce<
		`Ba-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8BDZP8RF = $mol_type_enforce<
		`Pr-Nd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K0QVKTAU = $mol_type_enforce<
		`Ce-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ON7T39G1 = $mol_type_enforce<
		`Na-Mg-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PFEJZMEE = $mol_type_enforce<
		`Cu-Ag-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SQIPJZUJ = $mol_type_enforce<
		`La-Ce-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__STAKS6HK = $mol_type_enforce<
		`La-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4RSCBYSB = $mol_type_enforce<
		`Tc-Ni-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9M1UZOPK = $mol_type_enforce<
		`Ti-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SA6YVRQM = $mol_type_enforce<
		`Tb-Ce-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E11ZN1FE = $mol_type_enforce<
		`Hf-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OUGBGV3I = $mol_type_enforce<
		`Lu-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N5ED3HAU = $mol_type_enforce<
		`Ta-V-In`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8V7GFEJL = $mol_type_enforce<
		`Co-Ir-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YTVQX3FF = $mol_type_enforce<
		`Na-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q6H6XOOK = $mol_type_enforce<
		`Yb-Hf-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__35QRXMWP = $mol_type_enforce<
		`Mn-Cu-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__20UQ7VN1 = $mol_type_enforce<
		`Ce-Nd-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MJX5YADZ = $mol_type_enforce<
		`Pr-Gd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AH03URDN = $mol_type_enforce<
		`Ca-Pm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__69WOKK19 = $mol_type_enforce<
		`Nd-Gd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V9RWX6YK = $mol_type_enforce<
		`Yb-Eu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0JW99R58 = $mol_type_enforce<
		`Al-Hg-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z0GE2M1U = $mol_type_enforce<
		`V-Cr-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0LPJ4ROF = $mol_type_enforce<
		`Ce-Nd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XWZZDOVH = $mol_type_enforce<
		`Ho-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8WP74TYL = $mol_type_enforce<
		`Tb-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M7BMUWVE = $mol_type_enforce<
		`Ca-Tb-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6ENFV031 = $mol_type_enforce<
		`Nd-Ho-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MBI5CAGC = $mol_type_enforce<
		`Pu-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RZ4QUFDW = $mol_type_enforce<
		`V-Cu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R3ENHZHP = $mol_type_enforce<
		`Tb-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PK9OBMZA = $mol_type_enforce<
		`V-Cu-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SIRESNQD = $mol_type_enforce<
		`Fe-Ni-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VAA7UHVY = $mol_type_enforce<
		`Lu-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OLASTAQI = $mol_type_enforce<
		`Fe-Ni-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CD04PDTK = $mol_type_enforce<
		`Ca-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PMSTJNG1 = $mol_type_enforce<
		`Ca-Ce-Eu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D6XQRYIS = $mol_type_enforce<
		`Rb-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8WXFODHV = $mol_type_enforce<
		`Nd-Sm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9K5R3E1I = $mol_type_enforce<
		`Co-Re-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__10NMA01Z = $mol_type_enforce<
		`Gd-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FB5FV4HV = $mol_type_enforce<
		`Eu-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FRBXPFM6 = $mol_type_enforce<
		`Pu-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6XWM4OSZ = $mol_type_enforce<
		`Pm-Sm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YMCZDTRL = $mol_type_enforce<
		`La-Ce-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UWDALR6S = $mol_type_enforce<
		`Ga-Sn-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0AYVGXS5 = $mol_type_enforce<
		`Ba-Sr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C8SCF7V8 = $mol_type_enforce<
		`Co-Re-Hg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RWV4YD8Y = $mol_type_enforce<
		`La-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G04DPIRK = $mol_type_enforce<
		`Cs-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NXRIADFS = $mol_type_enforce<
		`La-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__258J2D0G = $mol_type_enforce<
		`Ce-Sm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L5TW88T4 = $mol_type_enforce<
		`Co-Ni-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E1V78HF2 = $mol_type_enforce<
		`Mg-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__181USEQ9 = $mol_type_enforce<
		`Sc-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KPS74JST = $mol_type_enforce<
		`Sm-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z5ANSNH8 = $mol_type_enforce<
		`Ce-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q96JYMRC = $mol_type_enforce<
		`Li-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__51U3O55P = $mol_type_enforce<
		`Tb-Dy-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0UMOHWF2 = $mol_type_enforce<
		`Cs-Rb-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5TRE81HC = $mol_type_enforce<
		`Cs-Rb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U6U1NH7E = $mol_type_enforce<
		`Ce-Gd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8JC3E74M = $mol_type_enforce<
		`Mg-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KTXDOSCG = $mol_type_enforce<
		`K-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C1G6ZERI = $mol_type_enforce<
		`Rb-Na-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E7TP2SLQ = $mol_type_enforce<
		`Ba-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TQOCM6LP = $mol_type_enforce<
		`Ca-Tb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2H2L4OM6 = $mol_type_enforce<
		`Pr-Er-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SD1TWOM7 = $mol_type_enforce<
		`Si-Ge-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GEDUBEH5 = $mol_type_enforce<
		`Y-Er-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3SND9WFF = $mol_type_enforce<
		`Zn-Si-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OWTSQDQZ = $mol_type_enforce<
		`Li-Pm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__22Z2JIZF = $mol_type_enforce<
		`Yb-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BYFGJYLA = $mol_type_enforce<
		`La-Dy-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TBCVR7DF = $mol_type_enforce<
		`La-Pm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GSRHL7KA = $mol_type_enforce<
		`Hf-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LHXEBLBV = $mol_type_enforce<
		`K-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XXFITOYY = $mol_type_enforce<
		`Lu-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LLIVPTF6 = $mol_type_enforce<
		`Li-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__563NHM0T = $mol_type_enforce<
		`Cd-Ga-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0672059Q = $mol_type_enforce<
		`Cd-Ga-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RYO99EG2 = $mol_type_enforce<
		`Gd-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PXI40ZSU = $mol_type_enforce<
		`Cu-W-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GAW2HH12 = $mol_type_enforce<
		`Yb-Nd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GY6PGSNM = $mol_type_enforce<
		`Er-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VP6W3ES1 = $mol_type_enforce<
		`Tb-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZPK07M0O = $mol_type_enforce<
		`Er-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y9C6LBZX = $mol_type_enforce<
		`Tc-Pt-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1TXMKW8V = $mol_type_enforce<
		`Dy-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DZ61M99G = $mol_type_enforce<
		`Cu-Pd-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FYHRZ7RC = $mol_type_enforce<
		`Y-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5GF0Y7EL = $mol_type_enforce<
		`La-Yb-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PO35QOQ1 = $mol_type_enforce<
		`Lu-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__46U8LIK6 = $mol_type_enforce<
		`Cr-Cu-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__34IZ8CXT = $mol_type_enforce<
		`Y-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8NHOK37V = $mol_type_enforce<
		`Li-La-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1E5WYBN6 = $mol_type_enforce<
		`Tb-Sm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HN4K8MW5 = $mol_type_enforce<
		`Tb-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PYMO4TXJ = $mol_type_enforce<
		`Ce-Er-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X72YINT5 = $mol_type_enforce<
		`Gd-Dy-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XRAZRWA1 = $mol_type_enforce<
		`Ca-Ce-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1300895G = $mol_type_enforce<
		`Ta-Tl-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KCET2ES2 = $mol_type_enforce<
		`Pr-Nd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OH3LDFP6 = $mol_type_enforce<
		`Li-Pr-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2GAJ3HRW = $mol_type_enforce<
		`La-Pr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WWUIE423 = $mol_type_enforce<
		`Tm-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CZTSD7VE = $mol_type_enforce<
		`Ce-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UEITDPUF = $mol_type_enforce<
		`Ba-Yb-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0CV9BCLQ = $mol_type_enforce<
		`Na-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W27Q6Y8J = $mol_type_enforce<
		`Er-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XU8SYFQR = $mol_type_enforce<
		`Er-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9IPKT9HU = $mol_type_enforce<
		`Cd-Ge-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8W7C5S80 = $mol_type_enforce<
		`Ba-Eu-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B0F8PB0V = $mol_type_enforce<
		`Re-Ag-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q1EAZ5SS = $mol_type_enforce<
		`Pr-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HI5J0SKJ = $mol_type_enforce<
		`Lu-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZVDIA9TH = $mol_type_enforce<
		`Fe-Co-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__427T1XZ2 = $mol_type_enforce<
		`Li-Mn-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JX96PV5E = $mol_type_enforce<
		`Nd-Ho-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G7MKHAVP = $mol_type_enforce<
		`La-Pm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UQVEKPB1 = $mol_type_enforce<
		`Mg-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O687U7AP = $mol_type_enforce<
		`Ce-Pm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M53YXYI8 = $mol_type_enforce<
		`Pd-Ru-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5ENR5IAN = $mol_type_enforce<
		`Gd-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MAZ5D23C = $mol_type_enforce<
		`Nd-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XL3X986G = $mol_type_enforce<
		`Pr-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R11TO93P = $mol_type_enforce<
		`Sc-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CUICJZYY = $mol_type_enforce<
		`Co-Cu-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__050D1M6V = $mol_type_enforce<
		`Eu-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X0JJV62Y = $mol_type_enforce<
		`Y-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5IAV81W3 = $mol_type_enforce<
		`Tb-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ONJZFWEB = $mol_type_enforce<
		`La-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S30TWIX2 = $mol_type_enforce<
		`Th-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SP9E9XIP = $mol_type_enforce<
		`Li-Nd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__987WO81I = $mol_type_enforce<
		`Pm-Gd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G8WW0BVH = $mol_type_enforce<
		`Tl-Cu-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PYSILXDL = $mol_type_enforce<
		`Pr-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SDBXWTEW = $mol_type_enforce<
		`Ca-Tb-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L0ISLWC8 = $mol_type_enforce<
		`Co-Pd-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CS2YIPYW = $mol_type_enforce<
		`Li-Pm-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O3SN5RTT = $mol_type_enforce<
		`Cu-Os-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PLFIQKCQ = $mol_type_enforce<
		`Tb-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SDFOTSYC = $mol_type_enforce<
		`Ni-Ag-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MXY5HGU6 = $mol_type_enforce<
		`Li-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CRF9SH6Y = $mol_type_enforce<
		`Na-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7IAHNHHM = $mol_type_enforce<
		`La-Sm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DZTL25WQ = $mol_type_enforce<
		`Ca-La-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5YPNJR9N = $mol_type_enforce<
		`Sr-Ca-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XJNG6T1N = $mol_type_enforce<
		`La-Mn-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3N7TDJX0 = $mol_type_enforce<
		`La-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__11S67R6E = $mol_type_enforce<
		`Tb-Ce-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3IIIC197 = $mol_type_enforce<
		`Mo-Pb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V9LR2UJ6 = $mol_type_enforce<
		`Tb-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9XQA057O = $mol_type_enforce<
		`Al-Ga-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__326MYX44 = $mol_type_enforce<
		`V-Fe-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HWCTIAJ4 = $mol_type_enforce<
		`Nd-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CFSNLGAE = $mol_type_enforce<
		`Tl-Si-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TSNZJDC5 = $mol_type_enforce<
		`Tb-Ce-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ES6228WV = $mol_type_enforce<
		`Cs-Pr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VV3HTA86 = $mol_type_enforce<
		`Nd-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EB0Y7QE2 = $mol_type_enforce<
		`Eu-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3O2GKJV5 = $mol_type_enforce<
		`La-Dy-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UORHSKUV = $mol_type_enforce<
		`Mg-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FDDQTUUN = $mol_type_enforce<
		`Li-Fe-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DHI3NKTA = $mol_type_enforce<
		`Na-Li-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RM4MC6SM = $mol_type_enforce<
		`La-Tb-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TLRNPYFH = $mol_type_enforce<
		`Th-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SSKEQZMT = $mol_type_enforce<
		`Ce-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P8R02XNT = $mol_type_enforce<
		`Dy-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IQFRN2JC = $mol_type_enforce<
		`Nd-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XGTJAHUN = $mol_type_enforce<
		`Yb-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q1VO37G5 = $mol_type_enforce<
		`Ga-Si-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OVKDUPHW = $mol_type_enforce<
		`Pr-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IEMV3NCC = $mol_type_enforce<
		`Eu-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7F6JCOGZ = $mol_type_enforce<
		`Hf-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DZ72PBG7 = $mol_type_enforce<
		`Pu-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YZWJZ3LE = $mol_type_enforce<
		`Li-Nd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U12OAQBV = $mol_type_enforce<
		`Cu-Ag-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YW66CJJD = $mol_type_enforce<
		`Sm-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KQAK0Z14 = $mol_type_enforce<
		`Gd-Dy-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KHEVAKH4 = $mol_type_enforce<
		`Ho-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JYYH8BA3 = $mol_type_enforce<
		`Cu-Ag-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GF7NH50B = $mol_type_enforce<
		`Tc-Ni-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OFJ3WIUX = $mol_type_enforce<
		`Y-Lu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0SLPZDTT = $mol_type_enforce<
		`Ni-Os-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HLZ6O3BH = $mol_type_enforce<
		`Dy-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JY2UMMDI = $mol_type_enforce<
		`Fe-Cu-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SEK7Y9UL = $mol_type_enforce<
		`Ta-Tl-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BCB1NE25 = $mol_type_enforce<
		`Eu-Y-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SNRI0TYM = $mol_type_enforce<
		`Co-Pd-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KHSP9MXC = $mol_type_enforce<
		`Re-Hg-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BEQ8KZE2 = $mol_type_enforce<
		`La-Yb-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NIH4ZYUC = $mol_type_enforce<
		`Nd-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IDQMKOVE = $mol_type_enforce<
		`Tb-Yb-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YYOLMJ8S = $mol_type_enforce<
		`Yb-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4ISL8BTS = $mol_type_enforce<
		`K-Li-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EPB18MVL = $mol_type_enforce<
		`Re-Tc-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UYJC9LPU = $mol_type_enforce<
		`Cs-K-Al`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HWCZ1ERE = $mol_type_enforce<
		`Pr-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YM404AW5 = $mol_type_enforce<
		`Yb-Eu-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OVLG0URD = $mol_type_enforce<
		`Y-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NND11OB1 = $mol_type_enforce<
		`Yb-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__13PSVNNZ = $mol_type_enforce<
		`Nd-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__71Z6YWL2 = $mol_type_enforce<
		`Sm-Dy-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SG76P933 = $mol_type_enforce<
		`Y-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GPLAVI8O = $mol_type_enforce<
		`Ce-Er-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W84A8YOQ = $mol_type_enforce<
		`Re-Tc-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y35C17J3 = $mol_type_enforce<
		`Ce-Nd-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__602PHP5P = $mol_type_enforce<
		`Li-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EI853P67 = $mol_type_enforce<
		`Y-Tm-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JK0HFJD3 = $mol_type_enforce<
		`Al-Tl-Zn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PBLERTIG = $mol_type_enforce<
		`Li-La-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KV3KU511 = $mol_type_enforce<
		`Pr-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X0T8VNDM = $mol_type_enforce<
		`Eu-Th-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9RW7TJXH = $mol_type_enforce<
		`Pr-Nd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ECMCILGR = $mol_type_enforce<
		`Pm-Gd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OCC1VHRP = $mol_type_enforce<
		`Na-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9UMQA9DM = $mol_type_enforce<
		`Al-Zn-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DJJDCUUE = $mol_type_enforce<
		`Ba-Sm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2L096WLR = $mol_type_enforce<
		`Y-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__14RGH9C6 = $mol_type_enforce<
		`Nd-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9SKIMWUL = $mol_type_enforce<
		`Co-Ir-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JS3YNUCH = $mol_type_enforce<
		`Yb-Gd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KXVL8JT4 = $mol_type_enforce<
		`Hg-Ge-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__87GFWJR2 = $mol_type_enforce<
		`Ho-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2EYMGPLE = $mol_type_enforce<
		`Pr-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V6RU6KBR = $mol_type_enforce<
		`Tb-Dy-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__31S3U7U9 = $mol_type_enforce<
		`Ir-Ru-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RRB6BWGW = $mol_type_enforce<
		`Ce-Pm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QLVTG9P6 = $mol_type_enforce<
		`Tm-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LX0HWGJS = $mol_type_enforce<
		`Pm-Nd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RG2M2MXK = $mol_type_enforce<
		`Yb-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SWR60MG6 = $mol_type_enforce<
		`La-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1FSMPPLC = $mol_type_enforce<
		`Sm-Pu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YWC4O87P = $mol_type_enforce<
		`Hf-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VTLTS0CV = $mol_type_enforce<
		`Ta-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5UUZNTM7 = $mol_type_enforce<
		`Be-Sn-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YN9XMK9R = $mol_type_enforce<
		`Pm-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__18DH8BS9 = $mol_type_enforce<
		`Yb-Eu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__202UCIU2 = $mol_type_enforce<
		`Ho-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DYMMZIA1 = $mol_type_enforce<
		`Tb-Dy-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UKVOXFKY = $mol_type_enforce<
		`Ce-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CVPYERX3 = $mol_type_enforce<
		`Al-Zn-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LWA1VBF7 = $mol_type_enforce<
		`Ca-La-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BSFMQ16A = $mol_type_enforce<
		`Yb-Eu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__67GNTJ3U = $mol_type_enforce<
		`Cs-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W38PDDD3 = $mol_type_enforce<
		`Na-Ca-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__298TIYXW = $mol_type_enforce<
		`Tb-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QXSUN8G3 = $mol_type_enforce<
		`Sr-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I6ARUE51 = $mol_type_enforce<
		`Tc-Ir-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MYMCF244 = $mol_type_enforce<
		`Y-Hf-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4LG58QWF = $mol_type_enforce<
		`Ti-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__308QC738 = $mol_type_enforce<
		`Pr-Gd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SRZOBYON = $mol_type_enforce<
		`Co-Cu-Re`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PPBA8RTQ = $mol_type_enforce<
		`La-Y-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YY4YK34C = $mol_type_enforce<
		`Re-Sn-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GH82KUII = $mol_type_enforce<
		`Yb-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ASH5LJ2C = $mol_type_enforce<
		`Nd-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6O3JZ6CO = $mol_type_enforce<
		`Fe-Ni-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X67SBQV7 = $mol_type_enforce<
		`Pr-Nd-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2WEUZHHX = $mol_type_enforce<
		`Yb-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CVEWPPXY = $mol_type_enforce<
		`Ce-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7RDK9LU9 = $mol_type_enforce<
		`Ac-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OCEY8DLN = $mol_type_enforce<
		`Zn-B-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DGFYDOMZ = $mol_type_enforce<
		`La-Yb-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M68IW46U = $mol_type_enforce<
		`Ba-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HEORE4QE = $mol_type_enforce<
		`Mn-Co-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E2CLUJEY = $mol_type_enforce<
		`Dy-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7BL5IZYO = $mol_type_enforce<
		`Er-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HW9VLA41 = $mol_type_enforce<
		`La-Y-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NUI5VLEF = $mol_type_enforce<
		`Tc-Ir-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0KN2JAME = $mol_type_enforce<
		`Pr-Er-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2EO88MQG = $mol_type_enforce<
		`Yb-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BEDK41JR = $mol_type_enforce<
		`Mn-Fe-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NM0ANUG3 = $mol_type_enforce<
		`Ca-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TVYEKY2R = $mol_type_enforce<
		`Pd-Ru-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BDL6C1I0 = $mol_type_enforce<
		`Ce-Hf-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__67330STU = $mol_type_enforce<
		`La-Pm-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TUCFXLOE = $mol_type_enforce<
		`Tb-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SXBNKOD0 = $mol_type_enforce<
		`Ba-Eu-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FWN7BYY0 = $mol_type_enforce<
		`Ta-Bi-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IBW28A49 = $mol_type_enforce<
		`Nd-Dy-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W3BSSKOA = $mol_type_enforce<
		`Tl-B-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P67P7E3K = $mol_type_enforce<
		`Li-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K55TRAY6 = $mol_type_enforce<
		`Li-La-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W4EWQD6H = $mol_type_enforce<
		`Al-Sn-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F93ZGFC7 = $mol_type_enforce<
		`Ce-Pm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9B6N3U81 = $mol_type_enforce<
		`Ni-Au-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XJNUTPS8 = $mol_type_enforce<
		`Er-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__83GCQRM6 = $mol_type_enforce<
		`Pr-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L3O4VRY4 = $mol_type_enforce<
		`La-Nd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JASF81ZR = $mol_type_enforce<
		`Ni-Ag-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3EC6TXG0 = $mol_type_enforce<
		`La-Ce-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4NDPLPBV = $mol_type_enforce<
		`La-Yb-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BG4ZWZTD = $mol_type_enforce<
		`Pm-Nd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__026B9MHR = $mol_type_enforce<
		`Ce-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BAWBDHWI = $mol_type_enforce<
		`Eu-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FN1WA215 = $mol_type_enforce<
		`Pm-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3ARJ16SJ = $mol_type_enforce<
		`Ce-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P91C4HK6 = $mol_type_enforce<
		`Li-Cu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T5W9JP4Y = $mol_type_enforce<
		`Sm-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__07LEZZLY = $mol_type_enforce<
		`Tb-Nd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C9MGNK7A = $mol_type_enforce<
		`Nd-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0MB79ZQT = $mol_type_enforce<
		`Rb-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__40EAXJXB = $mol_type_enforce<
		`Pr-Y-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XGBSSHTW = $mol_type_enforce<
		`Y-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GQOBGAZF = $mol_type_enforce<
		`Cd-Mo-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ILE2OWNE = $mol_type_enforce<
		`Li-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EJR9I8SU = $mol_type_enforce<
		`V-Cu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3XA0WKW9 = $mol_type_enforce<
		`Pm-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0N8WH3L8 = $mol_type_enforce<
		`Yb-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5DLNU5VS = $mol_type_enforce<
		`Tb-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WK60QSF9 = $mol_type_enforce<
		`Ca-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z5SM3F04 = $mol_type_enforce<
		`Tb-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__85KBXUUJ = $mol_type_enforce<
		`Y-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__22VH7FG5 = $mol_type_enforce<
		`Rb-Li-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1UARR8WI = $mol_type_enforce<
		`Hg-Sb-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GTDH6M4T = $mol_type_enforce<
		`La-Dy-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8740TNOH = $mol_type_enforce<
		`Pd-Rh-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8RRRGMOQ = $mol_type_enforce<
		`K-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VMICYYRG = $mol_type_enforce<
		`Li-La-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IWBYJ3A0 = $mol_type_enforce<
		`Pr-Dy-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__47H0IAOV = $mol_type_enforce<
		`Yb-Pr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OK5RFYOA = $mol_type_enforce<
		`La-Nd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EM0RGS9R = $mol_type_enforce<
		`Sm-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__03B0ZNX0 = $mol_type_enforce<
		`Ce-Eu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R5ACNPWE = $mol_type_enforce<
		`Nd-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X78UKEZ3 = $mol_type_enforce<
		`Ag-Ir-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I37UM1VC = $mol_type_enforce<
		`Pm-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2DLZ8IG7 = $mol_type_enforce<
		`Yb-Dy-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__331I7TRK = $mol_type_enforce<
		`U-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VI4RRTCL = $mol_type_enforce<
		`Ca-Tb-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9RVFA3FS = $mol_type_enforce<
		`Tb-Yb-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WT3A3EDG = $mol_type_enforce<
		`Ce-Pm-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TZOTI9X8 = $mol_type_enforce<
		`Sr-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OV2BG8IH = $mol_type_enforce<
		`Co-Ni-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SLGP4SHX = $mol_type_enforce<
		`Rb-Mg-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J39Q76L2 = $mol_type_enforce<
		`Ti-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RWHWES8O = $mol_type_enforce<
		`Th-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NU9BQ0Z2 = $mol_type_enforce<
		`Yb-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KV4ZK259 = $mol_type_enforce<
		`Ta-Cu-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3IANU8A4 = $mol_type_enforce<
		`La-Yb-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DPGVAWIH = $mol_type_enforce<
		`Pr-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OKKHYUZR = $mol_type_enforce<
		`Rb-Na-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M6LXEWML = $mol_type_enforce<
		`Ce-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QY54E759 = $mol_type_enforce<
		`Ce-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DAKXUQGW = $mol_type_enforce<
		`Eu-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0P0BJADX = $mol_type_enforce<
		`La-Ho-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L5W2MXJM = $mol_type_enforce<
		`Cd-Ga-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7HS62VDL = $mol_type_enforce<
		`Eu-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NXOLYCXU = $mol_type_enforce<
		`Nd-Gd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YL4CIF24 = $mol_type_enforce<
		`Na-Li-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__44R4371W = $mol_type_enforce<
		`Tb-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z5F4PPU3 = $mol_type_enforce<
		`Th-Sc-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HZO31CSD = $mol_type_enforce<
		`Lu-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J9EUZQOP = $mol_type_enforce<
		`Tb-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZI992N7U = $mol_type_enforce<
		`Tb-Sm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I9H88VUL = $mol_type_enforce<
		`Dy-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3EK4TSQZ = $mol_type_enforce<
		`Rb-Li-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1ISUF3R4 = $mol_type_enforce<
		`Li-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MROSI2OZ = $mol_type_enforce<
		`Re-Tc-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JLKVE34O = $mol_type_enforce<
		`Pm-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RCCATLDB = $mol_type_enforce<
		`La-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G020VRCF = $mol_type_enforce<
		`La-Dy-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QNNDRAEV = $mol_type_enforce<
		`Mg-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7PU5IOIQ = $mol_type_enforce<
		`Nd-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P6YODLS3 = $mol_type_enforce<
		`Dy-Y-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2RV6W84W = $mol_type_enforce<
		`Tb-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D39PNZTS = $mol_type_enforce<
		`Pd-Pt-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z4YVS8K7 = $mol_type_enforce<
		`Cs-Rb-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__33GTH2VJ = $mol_type_enforce<
		`Ca-Nd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D8WB8EV9 = $mol_type_enforce<
		`La-Pm-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RRAMLWRG = $mol_type_enforce<
		`Sm-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XD4M7RBJ = $mol_type_enforce<
		`Hg-Bi-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KANXS01F = $mol_type_enforce<
		`Co-Ag-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BA37864J = $mol_type_enforce<
		`Ce-Pm-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__94SPIGW4 = $mol_type_enforce<
		`Cu-Re-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KVKJAMZY = $mol_type_enforce<
		`La-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C17FXJ54 = $mol_type_enforce<
		`Ba-Pr-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2K48TENO = $mol_type_enforce<
		`La-Yb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KQACMW55 = $mol_type_enforce<
		`Li-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SALACZ50 = $mol_type_enforce<
		`Th-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S251VGV1 = $mol_type_enforce<
		`Li-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MZZH83WZ = $mol_type_enforce<
		`Zn-Si-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ONQIL6V2 = $mol_type_enforce<
		`Sc-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F3ZU1YN4 = $mol_type_enforce<
		`Sm-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F6FFO1E1 = $mol_type_enforce<
		`Li-La-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4SZQW90K = $mol_type_enforce<
		`Li-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8G58GX7I = $mol_type_enforce<
		`Y-Hf-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__USAT6RDK = $mol_type_enforce<
		`Ti-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PL5KXYLT = $mol_type_enforce<
		`Sm-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CWP50XQ4 = $mol_type_enforce<
		`Li-Cu-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__182WFGMH = $mol_type_enforce<
		`Ce-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TY2LR6AA = $mol_type_enforce<
		`Tm-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8YZ7OMLH = $mol_type_enforce<
		`Yb-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LYABOEBP = $mol_type_enforce<
		`Ca-Yb-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EPA20RVK = $mol_type_enforce<
		`Ce-Eu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M39YREFK = $mol_type_enforce<
		`Nd-Er-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6DHZ8GSS = $mol_type_enforce<
		`Hf-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4VL2RTVP = $mol_type_enforce<
		`Co-Ag-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G3BG3QC4 = $mol_type_enforce<
		`Co-Ir-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HEPA3OAX = $mol_type_enforce<
		`Ca-Mn-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FB7ISORJ = $mol_type_enforce<
		`Pu-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T1U9AZ4Y = $mol_type_enforce<
		`V-Bi-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RK4NAS48 = $mol_type_enforce<
		`Y-Hf-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__058YHCQD = $mol_type_enforce<
		`Dy-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__02UTBR52 = $mol_type_enforce<
		`Ce-Sm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VLLBMKG8 = $mol_type_enforce<
		`Ni-Ir-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HOLWVEAF = $mol_type_enforce<
		`Re-Os-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CZ7K3270 = $mol_type_enforce<
		`Ce-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VCZYW0IR = $mol_type_enforce<
		`Er-Hf-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7ADGNO1K = $mol_type_enforce<
		`Cr-Fe-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8J8B917F = $mol_type_enforce<
		`Li-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VIXOJYPT = $mol_type_enforce<
		`Eu-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VNXCB6LR = $mol_type_enforce<
		`Yb-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UMB9NGDV = $mol_type_enforce<
		`Ga-Ge-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3MQGXBEJ = $mol_type_enforce<
		`Eu-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YHPZI22Q = $mol_type_enforce<
		`Li-Pr-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CJZEMAG4 = $mol_type_enforce<
		`Yb-Pr-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5I9QBQL6 = $mol_type_enforce<
		`Sm-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SPP8BUQ6 = $mol_type_enforce<
		`La-Nd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TPXJLDC3 = $mol_type_enforce<
		`Ce-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__942206M5 = $mol_type_enforce<
		`Li-Pm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YAGBWSTX = $mol_type_enforce<
		`Y-Sc-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__STLPE64C = $mol_type_enforce<
		`Pr-Sm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ASDHL6TS = $mol_type_enforce<
		`Pr-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9H37QD54 = $mol_type_enforce<
		`Re-Tc-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TG517KT4 = $mol_type_enforce<
		`Nd-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KOGT0BST = $mol_type_enforce<
		`Tl-In-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__12KY1TUZ = $mol_type_enforce<
		`Yb-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HKJZ7DRY = $mol_type_enforce<
		`Tb-Pr-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CXOBPT1C = $mol_type_enforce<
		`Mn-Fe-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__41UJ1BSQ = $mol_type_enforce<
		`Ce-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C4ZIKHQ0 = $mol_type_enforce<
		`K-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6F9GQ2IV = $mol_type_enforce<
		`Ce-Sm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GFPOC38I = $mol_type_enforce<
		`Ni-Ag-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HKRW69ZV = $mol_type_enforce<
		`K-Mg-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JM1BJBC8 = $mol_type_enforce<
		`Tb-Nd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RL3SOVAG = $mol_type_enforce<
		`Pu-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3GH47UFQ = $mol_type_enforce<
		`La-Gd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QE4T48M3 = $mol_type_enforce<
		`Pm-Nd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1RY1LWI4 = $mol_type_enforce<
		`La-Dy-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZT4B00CX = $mol_type_enforce<
		`Tb-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I1DXILKO = $mol_type_enforce<
		`Cu-Tc-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BM3ADCFN = $mol_type_enforce<
		`Li-Tb-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MDHS9VH7 = $mol_type_enforce<
		`Tb-Sm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PE341GPE = $mol_type_enforce<
		`Sr-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EACXPQ5R = $mol_type_enforce<
		`Pm-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UN0MPVVI = $mol_type_enforce<
		`K-Rb-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__94NQLW4K = $mol_type_enforce<
		`Gd-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IV3329W8 = $mol_type_enforce<
		`Y-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RT2YIGSS = $mol_type_enforce<
		`Ce-Eu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OK2CNCQE = $mol_type_enforce<
		`Yb-Nd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8NUPB82L = $mol_type_enforce<
		`Er-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WL5Q4POJ = $mol_type_enforce<
		`Pr-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__307N6L74 = $mol_type_enforce<
		`Eu-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OXHFOVQK = $mol_type_enforce<
		`Gd-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EW1DWIW2 = $mol_type_enforce<
		`Li-Ce-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8UEN7CK7 = $mol_type_enforce<
		`Na-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MDBZXNJQ = $mol_type_enforce<
		`Sm-Gd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LHFGZLP6 = $mol_type_enforce<
		`La-Pr-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FPHUOL42 = $mol_type_enforce<
		`Ga-Re-Hg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0XX4RRI6 = $mol_type_enforce<
		`Li-La-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KXNKFQ0X = $mol_type_enforce<
		`Co-Ni-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J0AHGQ3B = $mol_type_enforce<
		`La-Tb-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5H5BF1HC = $mol_type_enforce<
		`Yb-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BBTFI922 = $mol_type_enforce<
		`Er-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ALYJROO4 = $mol_type_enforce<
		`Tl-Ga-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1VNRX2U3 = $mol_type_enforce<
		`Yb-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZYGCOOFQ = $mol_type_enforce<
		`Co-Ag-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E9DX5ER7 = $mol_type_enforce<
		`Li-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IDJ372UW = $mol_type_enforce<
		`Rb-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3M2WJHNE = $mol_type_enforce<
		`K-Li-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B3LG9N2I = $mol_type_enforce<
		`Dy-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8SPTU5IA = $mol_type_enforce<
		`Pu-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LOWQNRXU = $mol_type_enforce<
		`Li-La-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6UFR52G2 = $mol_type_enforce<
		`Tb-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J1W5MI9R = $mol_type_enforce<
		`La-Pr-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JMUDUZZJ = $mol_type_enforce<
		`Tb-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ASQFO9NP = $mol_type_enforce<
		`Tb-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R6WNWG64 = $mol_type_enforce<
		`Ba-Ca-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1XCVA5CI = $mol_type_enforce<
		`Gd-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D78GDLIZ = $mol_type_enforce<
		`Ta-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P26YJDSX = $mol_type_enforce<
		`La-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7CSFMEN7 = $mol_type_enforce<
		`La-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8YZANKLB = $mol_type_enforce<
		`Ge-B-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NBUZS95Q = $mol_type_enforce<
		`Li-Pr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AUVBPPF8 = $mol_type_enforce<
		`Cu-Pt-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E3T6SHJN = $mol_type_enforce<
		`La-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__45CQ5LQU = $mol_type_enforce<
		`Tb-Pr-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QOMQ4V7B = $mol_type_enforce<
		`Eu-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4CGEUF36 = $mol_type_enforce<
		`Ce-Tm-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__739BFKMM = $mol_type_enforce<
		`Pr-Tm-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KD0HM3KQ = $mol_type_enforce<
		`La-Gd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5A7WCRQO = $mol_type_enforce<
		`Pm-Pr-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZQWMKE2A = $mol_type_enforce<
		`Sm-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7R679BEW = $mol_type_enforce<
		`Mn-Ni-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XXS8YLWE = $mol_type_enforce<
		`Ce-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DTKGFRJY = $mol_type_enforce<
		`Rb-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NNCGOLEG = $mol_type_enforce<
		`La-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9YLUW9HP = $mol_type_enforce<
		`Ca-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6UUB6TNA = $mol_type_enforce<
		`Sm-Lu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZXECAYMC = $mol_type_enforce<
		`Li-V-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7D24N32M = $mol_type_enforce<
		`Y-Er-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q9PBG7MM = $mol_type_enforce<
		`Nd-Dy-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JV9UJE5E = $mol_type_enforce<
		`Pm-Pr-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z32PFN6J = $mol_type_enforce<
		`Mg-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SH76PN9A = $mol_type_enforce<
		`La-Yb-Eu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1HCE0PBZ = $mol_type_enforce<
		`Gd-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KU11EJWG = $mol_type_enforce<
		`Eu-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0E93YFFJ = $mol_type_enforce<
		`Tb-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y95SFBB6 = $mol_type_enforce<
		`Cs-Rb-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__064QY8J1 = $mol_type_enforce<
		`Tb-Pr-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WSWSE4UP = $mol_type_enforce<
		`Cd-Bi-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1J0HE3QP = $mol_type_enforce<
		`Cu-Ir-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TBS6PHCJ = $mol_type_enforce<
		`Gd-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZVH9MDLJ = $mol_type_enforce<
		`Pr-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__513JIY2Z = $mol_type_enforce<
		`La-Nd-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NRU4W5X0 = $mol_type_enforce<
		`Y-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5K2EUCB5 = $mol_type_enforce<
		`Ni-Ag-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EJV8NXRD = $mol_type_enforce<
		`K-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1DBR5QB7 = $mol_type_enforce<
		`Nd-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3A3NIZCA = $mol_type_enforce<
		`Pr-Nd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YBXPZJFS = $mol_type_enforce<
		`La-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9Q1DZOO9 = $mol_type_enforce<
		`Yb-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8U9G4ITR = $mol_type_enforce<
		`Dy-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__12LPQ2YZ = $mol_type_enforce<
		`La-Nd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZGY3I575 = $mol_type_enforce<
		`Ce-Pr-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K0V9LTKO = $mol_type_enforce<
		`Ce-Nd-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__66ZRFGKV = $mol_type_enforce<
		`Y-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NFPW3BA5 = $mol_type_enforce<
		`Tl-Ni-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PJ9HK9NE = $mol_type_enforce<
		`Nd-Gd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O8DG4F2U = $mol_type_enforce<
		`K-Li-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WQJFAJU1 = $mol_type_enforce<
		`Li-Ce-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4BGRBH6Q = $mol_type_enforce<
		`Mn-Ni-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C8VLKI9T = $mol_type_enforce<
		`Ho-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1KLMSC5S = $mol_type_enforce<
		`Pm-Dy-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TDYVZ1M3 = $mol_type_enforce<
		`Ce-Sm-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GGR9L4K7 = $mol_type_enforce<
		`Ni-Os-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__34VQQQNL = $mol_type_enforce<
		`Cr-Mo-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LQ5Q3KMX = $mol_type_enforce<
		`Er-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IEY4GLAW = $mol_type_enforce<
		`Ce-Nd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9L2NH52F = $mol_type_enforce<
		`Zn-Ga-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LFNEF02X = $mol_type_enforce<
		`Sm-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FFIFJOJK = $mol_type_enforce<
		`Eu-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L11I9JAH = $mol_type_enforce<
		`Fe-Pd-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XNWQWFNB = $mol_type_enforce<
		`Co-Re-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__109WBLS7 = $mol_type_enforce<
		`Sm-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FKSEFCC8 = $mol_type_enforce<
		`Fe-Cu-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__COAYFLT1 = $mol_type_enforce<
		`Tm-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OJZMVGF5 = $mol_type_enforce<
		`Ta-Nb-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2VHR9618 = $mol_type_enforce<
		`Ho-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6K0EP7SF = $mol_type_enforce<
		`Li-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W0H36AF7 = $mol_type_enforce<
		`Yb-Er-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TLKDZQYB = $mol_type_enforce<
		`Fe-Ni-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__231EC30Z = $mol_type_enforce<
		`Nd-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CF7P0BKK = $mol_type_enforce<
		`La-Pr-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P4WZIQ49 = $mol_type_enforce<
		`Mg-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2JDKK9CS = $mol_type_enforce<
		`La-Pr-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__49GYVRTJ = $mol_type_enforce<
		`Y-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__REQ839AK = $mol_type_enforce<
		`Cu-Ni-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KD7UMII5 = $mol_type_enforce<
		`Rb-Li-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YVSWRXNP = $mol_type_enforce<
		`Li-Ho-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UGK77N1K = $mol_type_enforce<
		`Fe-Ag-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GWVDOA03 = $mol_type_enforce<
		`Eu-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MVQK2Z6B = $mol_type_enforce<
		`Nd-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0SHWMODY = $mol_type_enforce<
		`Pm-Pr-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IY7L8EGA = $mol_type_enforce<
		`Sm-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q49RGTCA = $mol_type_enforce<
		`Zn-Ga-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UCBWH0D4 = $mol_type_enforce<
		`Tl-Ga-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0JFWAXZC = $mol_type_enforce<
		`La-Tb-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UK0EQ7UM = $mol_type_enforce<
		`Tm-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W674F3JM = $mol_type_enforce<
		`Sr-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__70D53K1C = $mol_type_enforce<
		`Y-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SWTET6XS = $mol_type_enforce<
		`Tb-Yb-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KHVF96WX = $mol_type_enforce<
		`La-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DU6FNF6E = $mol_type_enforce<
		`Dy-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BGRKOF8N = $mol_type_enforce<
		`Cs-Hf-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6J903EWE = $mol_type_enforce<
		`Ba-Sm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EZLKD3PB = $mol_type_enforce<
		`Pr-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L4FTX5RH = $mol_type_enforce<
		`Nd-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NEZMHPXS = $mol_type_enforce<
		`Tm-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PCRIX1I6 = $mol_type_enforce<
		`Li-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__STT8A47C = $mol_type_enforce<
		`Gd-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8T49PWSG = $mol_type_enforce<
		`Ti-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AOK128E9 = $mol_type_enforce<
		`Sc-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4O0WO8ED = $mol_type_enforce<
		`La-Sm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7Z43Y3Q8 = $mol_type_enforce<
		`Ce-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5XIW5LPX = $mol_type_enforce<
		`Y-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__40LXL96S = $mol_type_enforce<
		`Sm-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0Q0ZVVWC = $mol_type_enforce<
		`Tb-Sm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J40HM21U = $mol_type_enforce<
		`Li-Tb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XCCJ9QH6 = $mol_type_enforce<
		`Ho-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7MK1LLIS = $mol_type_enforce<
		`Sm-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__43ZJ2KN1 = $mol_type_enforce<
		`Nd-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__61PXG4G9 = $mol_type_enforce<
		`Na-Li-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X1L7FFFW = $mol_type_enforce<
		`K-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5D8MUFHJ = $mol_type_enforce<
		`Mn-Tl-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AIQFB75M = $mol_type_enforce<
		`Hg-B-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3IU6HTY4 = $mol_type_enforce<
		`Er-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R1RE37N8 = $mol_type_enforce<
		`Pu-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MMMT2G8U = $mol_type_enforce<
		`Ca-La-Ce`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N8BSU6KF = $mol_type_enforce<
		`Eu-Hf-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__THJAUD6W = $mol_type_enforce<
		`Os-Ru-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0GT3NV3I = $mol_type_enforce<
		`La-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WD0AYTK5 = $mol_type_enforce<
		`V-Ag-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZUAYW9Y0 = $mol_type_enforce<
		`Ba-Pr-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__24SVHD9E = $mol_type_enforce<
		`Nd-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UHU8RXVG = $mol_type_enforce<
		`Pr-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PZA3M2LS = $mol_type_enforce<
		`Y-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2FTONWR3 = $mol_type_enforce<
		`Tb-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M6CPM6P5 = $mol_type_enforce<
		`Ce-Nd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8GGIKO3P = $mol_type_enforce<
		`Pt-Rh-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G80DFG9I = $mol_type_enforce<
		`Er-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5V5QC5ON = $mol_type_enforce<
		`Ba-La-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FQ5EED9F = $mol_type_enforce<
		`Pr-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MVTVZTBW = $mol_type_enforce<
		`Sm-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__417IF3NL = $mol_type_enforce<
		`Ga-Re-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RZT71GH4 = $mol_type_enforce<
		`Ho-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VP44N8VG = $mol_type_enforce<
		`Al-Tl-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IJU2IU1J = $mol_type_enforce<
		`Dy-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__84HGLS2Z = $mol_type_enforce<
		`Na-Sr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UGNUAS4S = $mol_type_enforce<
		`Cd-Si-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CDLKW1OJ = $mol_type_enforce<
		`Tb-Pr-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AW1ETD61 = $mol_type_enforce<
		`Ba-Gd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9SIBQHE6 = $mol_type_enforce<
		`Ca-Tb-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UIWYOHDN = $mol_type_enforce<
		`Cu-Ag-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4BF4A78E = $mol_type_enforce<
		`Co-Cu-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4QTF9NRD = $mol_type_enforce<
		`Pm-Dy-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WMLDPE10 = $mol_type_enforce<
		`Zn-Cd-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SZ8LXS0E = $mol_type_enforce<
		`La-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T8EGPI0X = $mol_type_enforce<
		`Sr-Ca-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9ANUU7CI = $mol_type_enforce<
		`Dy-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__25LMQEM2 = $mol_type_enforce<
		`Eu-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9FNM3GC2 = $mol_type_enforce<
		`Ca-Pm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1003VVLC = $mol_type_enforce<
		`Eu-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0A4DG6KU = $mol_type_enforce<
		`Cu-Os-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TVNYAMH1 = $mol_type_enforce<
		`Be-In-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9M58ONHC = $mol_type_enforce<
		`La-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T955UY7Q = $mol_type_enforce<
		`Nd-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AV6NRXIM = $mol_type_enforce<
		`Ca-Ce-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4YYDXKEI = $mol_type_enforce<
		`Yb-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VDLNB46Z = $mol_type_enforce<
		`Ca-La-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G93GD3I7 = $mol_type_enforce<
		`Li-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C04XV1UC = $mol_type_enforce<
		`Al-Tl-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1C40D24D = $mol_type_enforce<
		`Li-Ce-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TE1LA6F7 = $mol_type_enforce<
		`Li-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZFWZBVIA = $mol_type_enforce<
		`Pr-Nd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8HL068GR = $mol_type_enforce<
		`Yb-Nd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WAUFSKXB = $mol_type_enforce<
		`Li-Ce-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UY8LX3UU = $mol_type_enforce<
		`Pm-Dy-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y7XHPF3I = $mol_type_enforce<
		`Dy-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T6V1UN8B = $mol_type_enforce<
		`Ca-Mn-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KJWCV8MR = $mol_type_enforce<
		`Cs-Mg-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ELCKKAAP = $mol_type_enforce<
		`Ce-Eu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EF8DOXHB = $mol_type_enforce<
		`Tb-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LW3ZIWAU = $mol_type_enforce<
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

	type $mol_view__render__698JN5OM = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['draw'] >
		,
		ReturnType< $mol_view['render'] >
	>
	type $mol_view__sub__K19H3DZX = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub__PHMKXU9L = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mpds_visavis_plot_legend_cmp__labels__BR6W9TOY = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['cmp_labels'] >
		,
		ReturnType< $mpds_visavis_plot_legend_cmp['labels'] >
	>
	type $mpds_visavis_plot_legend_cmp__colorset__Q6KQGNL2 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['colorset'] >
		,
		ReturnType< $mpds_visavis_plot_legend_cmp['colorset'] >
	>
	type $mol_view__sub__AP78SEKE = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__style__PPV8M8O0 = $mol_type_enforce<
		({ 
			'background': ReturnType< $mpds_visavis_plot_matrix['heatmap_color'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__sub__UJBOQPOL = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows__9ADXTHH9 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['heatmap_color_list'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub__L0E1UJG8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_view__sub__G3S1LXBW = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['plot_body'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_check_box__title__X264459Y = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked__WQ9MZUJZ = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['fixel_checked'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_check_box__hint__AIUXG2PR = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['hint'] >
	>
	type $mol_check_box__title__FAGN6RNT = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked__D4F3UFQD = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['nonformers_checked'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_check_box__title__JIOXHPDR = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked__9MZXZSPT = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['intersection_only'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_switch__value__SF2OP83N = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['sort_control'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options__UVC3C5PK = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['sort_dict'] >
		,
		ReturnType< $mol_switch['options'] >
	>
	type $mol_labeler__title__NI2H9K43 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__KDH1BN4X = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['Order_switch'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_select__value__SWSUD45K = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['x_sort'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__dictionary__UUTPFGL8 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['sort_dict'] >
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_labeler__title__P2H63RWP = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__U5GGZRN2 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['X_sort'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_select__value__QEGT3KGF = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['y_sort'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__dictionary__6N3XYRA0 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['sort_dict'] >
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_labeler__title__LA5O47U2 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__I6HJXEDA = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['Y_sort'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_select__value__6H2KJ41N = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['x_op_str'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__dictionary__D9BNPF56 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['op_dict'] >
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_labeler__title__KC2HGMFQ = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__MZ9YQMON = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['X_op'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_select__value__PYJJK1KJ = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['y_op_str'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__dictionary__N6CHJD52 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['op_dict'] >
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_labeler__title__M90ZZJ23 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__XJ83EFIP = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['Y_op'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_view__sub__VMX43RG2 = $mol_type_enforce<
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

	type $mpds_visavis_lib_plotly_view__data__E0YOFY6E = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['data_shown'] >
		,
		ReturnType< $mpds_visavis_lib_plotly_view['data'] >
	>
	type $mpds_visavis_lib_plotly_view__layout__M7MA3SES = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['layout'] >
		,
		ReturnType< $mpds_visavis_lib_plotly_view['layout'] >
	>
	type $mpds_visavis_lib_plotly_view__plot_options__0U569B4Q = $mol_type_enforce<
		({ 
			'displaylogo': boolean,
			'displayModeBar': boolean,
			'staticPlot': boolean,
		}) 
		,
		ReturnType< $mpds_visavis_lib_plotly_view['plot_options'] >
	>
	type $mpds_visavis_plot_legend_cmp__labels__YXZ93KRG = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['cmp_labels'] >
		,
		ReturnType< $mpds_visavis_plot_legend_cmp['labels'] >
	>
	type $mpds_visavis_plot_legend_cmp__colorset__6EV1F4UA = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['colorset'] >
		,
		ReturnType< $mpds_visavis_plot_legend_cmp['colorset'] >
	>
	type $mol_view__sub__O9L3N243 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__style__8V6AHTYZ = $mol_type_enforce<
		({ 
			'background': ReturnType< $mpds_visavis_plot_cube['heatmap_color'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__sub__VDK5KI5F = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows__Q35MGLUU = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['heatmap_color_list'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub__UK49MH6F = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_view__sub__GMPYZHII = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['plot_body'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_check_box__title__4L1YDK8B = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked__UNJRLMOV = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['fixel_checked'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_check_box__hint__W5S1ZCX7 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['hint'] >
	>
	type $mol_check_box__title__WA1QKGJ7 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked__D76C91AM = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['nonformers_checked'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_check_box__title__X3XTYGIK = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked__8N39U89K = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['intersection_only'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_select__value__ZPFD6G9N = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['x_sort'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__dictionary__7ZYAPASC = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['sort_dict'] >
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_labeler__title__HAU8KKFK = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__RICVXN86 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['X_order_select'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_select__value__F6L34HZL = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['y_sort'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__dictionary__YEN3FHH0 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['sort_dict'] >
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_labeler__title__KC9BZ5OE = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__SNBKG5UP = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['Y_order_select'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_select__value__WVDZBYE3 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['z_sort'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__dictionary__KZV37KOZ = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['sort_dict'] >
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_labeler__title__H4CPY11N = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__0FUS5VG1 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['Z_order_select'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_view__sub__6TXO5CEA = $mol_type_enforce<
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

	type $mol_view__sub__BW4TP2BT = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mpds_visavis_lib_plotly_view__data__PQY6IH85 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_phase['data'] >
		,
		ReturnType< $mpds_visavis_lib_plotly_view['data'] >
	>
	type $mpds_visavis_lib_plotly_view__layout__GV08ZTU7 = $mol_type_enforce<
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

	type $mpds_visavis_lib_plotly_view__data__28I0144M = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_discovery['data'] >
		,
		ReturnType< $mpds_visavis_lib_plotly_view['data'] >
	>
	type $mpds_visavis_lib_plotly_view__layout__JY5DXJLQ = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_discovery['layout'] >
		,
		ReturnType< $mpds_visavis_lib_plotly_view['layout'] >
	>
	type $mpds_visavis_plot_legend_cmp__labels__5ZB3NJTL = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_discovery['cmp_labels'] >
		,
		ReturnType< $mpds_visavis_plot_legend_cmp['labels'] >
	>
	type $mpds_visavis_plot_legend_cmp__colorset__CNC9L04U = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_discovery['colorset'] >
		,
		ReturnType< $mpds_visavis_plot_legend_cmp['colorset'] >
	>
	type $mol_check_list__option_checked__CODZQY6A = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_discovery['elemental_checked'] >
		,
		ReturnType< $mol_check_list['option_checked'] >
	>
	type $mol_check_list__options__ACFR26HP = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_discovery['elementals_dict'] >
		,
		ReturnType< $mol_check_list['options'] >
	>
	type $mol_labeler__title__I7OW5NKC = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__6PLXCIS4 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_discovery['Elementals_check'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_view__sub__7XWRFUKG = $mol_type_enforce<
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

	type $mol_vector_2d__U5JVEB5V = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__NM9IG5W5 = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__9QR2QUAP = $mol_type_enforce<
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

	type $mpds_visavis_plot_graph_pan__M8YBVU7S = $mol_type_enforce<
		Parameters< $mpds_visavis_plot_graph['pan'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot_graph['Touch'] >['pan'] >[0]
	>
	type $mol_touch__allow_draw__0JUKXZE7 = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_touch['allow_draw'] >
	>
	type $mol_touch__allow_pan__UUN6IJGT = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_graph['allow_pan'] >
		,
		ReturnType< $mol_touch['allow_pan'] >
	>
	type $mol_svg_root__view_box__9IYA82UV = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_graph['view_box'] >
		,
		ReturnType< $mol_svg_root['view_box'] >
	>
	type $mol_svg_root__auto__IVU5K85T = $mol_type_enforce<
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

	type $mpds_visavis_plot_matrix_x_op__NKNTZI1A = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['matrix_x_op'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Matrix'] >['x_op'] >[0]
	>
	type $mpds_visavis_plot_matrix_y_op__DO5H7ZU5 = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['matrix_y_op'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Matrix'] >['y_op'] >[0]
	>
	type $mpds_visavis_plot_matrix_x_sort__TIWCMKMV = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['matrix_x_sort'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Matrix'] >['x_sort'] >[0]
	>
	type $mpds_visavis_plot_matrix_y_sort__HN9E5AP8 = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['matrix_y_sort'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Matrix'] >['y_sort'] >[0]
	>
	type $mpds_visavis_plot_matrix__plot_raw__CFXSR86L = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_matrix['plot_raw'] >
	>
	type $mpds_visavis_plot_matrix__multi_jsons__IRHFAS69 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['multi_jsons'] >
		,
		ReturnType< $mpds_visavis_plot_matrix['multi_jsons'] >
	>
	type $mpds_visavis_plot_matrix__show_setup__A2DI7QCS = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['show_setup'] >
		,
		ReturnType< $mpds_visavis_plot_matrix['show_setup'] >
	>
	type $mpds_visavis_plot_matrix__nonformers_checked__UU7RUR3H = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['nonformers_checked'] >
		,
		ReturnType< $mpds_visavis_plot_matrix['nonformers_checked'] >
	>
	type $mpds_visavis_plot_matrix__fixel_checked__2AC59J4E = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['matrix_fixel_checked'] >
		,
		ReturnType< $mpds_visavis_plot_matrix['fixel_checked'] >
	>
	type $mpds_visavis_plot_matrix__matrix_click__3EMT0SDA = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['matrix_click'] >
		,
		ReturnType< $mpds_visavis_plot_matrix['matrix_click'] >
	>
	type $mpds_visavis_plot_x_op__FVGDT11W = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['x_op'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Cube'] >['x_op'] >[0]
	>
	type $mpds_visavis_plot_y_op__5K9BSB5O = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['y_op'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Cube'] >['y_op'] >[0]
	>
	type $mpds_visavis_plot_z_op__IJ8KHJ0O = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['z_op'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Cube'] >['z_op'] >[0]
	>
	type $mpds_visavis_plot_x_sort__55GFL5MK = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['x_sort'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Cube'] >['x_sort'] >[0]
	>
	type $mpds_visavis_plot_y_sort__IKAWWLDW = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['y_sort'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Cube'] >['y_sort'] >[0]
	>
	type $mpds_visavis_plot_z_sort__9GJIRAS5 = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['z_sort'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Cube'] >['z_sort'] >[0]
	>
	type $mpds_visavis_plot_cube__plot_raw__B6WZ9DZ8 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_cube['plot_raw'] >
	>
	type $mpds_visavis_plot_cube__multi_jsons__TNR0XNZ8 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['multi_jsons'] >
		,
		ReturnType< $mpds_visavis_plot_cube['multi_jsons'] >
	>
	type $mpds_visavis_plot_cube__show_setup__TJPGIGVA = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['show_setup'] >
		,
		ReturnType< $mpds_visavis_plot_cube['show_setup'] >
	>
	type $mpds_visavis_plot_cube__show_fixel__W3YGO9TM = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['show_fixel'] >
		,
		ReturnType< $mpds_visavis_plot_cube['show_fixel'] >
	>
	type $mpds_visavis_plot_cube__nonformers_checked__4LCL43WE = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['nonformers_checked'] >
		,
		ReturnType< $mpds_visavis_plot_cube['nonformers_checked'] >
	>
	type $mpds_visavis_plot_cube__fixel_checked__6J0YJ0S2 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['cube_fixel_checked'] >
		,
		ReturnType< $mpds_visavis_plot_cube['fixel_checked'] >
	>
	type $mpds_visavis_plot_cube__cube_click__QT9AA6GV = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['cube_click'] >
		,
		ReturnType< $mpds_visavis_plot_cube['cube_click'] >
	>
	type $mpds_visavis_plot_phase__plot_raw__2NY55HBH = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_phase['plot_raw'] >
	>
	type $mpds_visavis_plot_phase__phase_click__LC4CTX2U = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['phase_click'] >
		,
		ReturnType< $mpds_visavis_plot_phase['phase_click'] >
	>
	type $mpds_visavis_plot_bar__plot_raw__K323Q2FP = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_bar['plot_raw'] >
	>
	type $mpds_visavis_plot_bar__bar_click__PWK39TEL = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['bar_click'] >
		,
		ReturnType< $mpds_visavis_plot_bar['bar_click'] >
	>
	type $mpds_visavis_plot_discovery_elementals_on__4FIHEBC8 = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['discovery_elementals_on'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Discovery'] >['elementals_on'] >[0]
	>
	type $mpds_visavis_plot_discovery__plot_raw__LDKAQR1S = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_discovery['plot_raw'] >
	>
	type $mpds_visavis_plot_discovery__json_cmp__U7DPIOI3 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['json_cmp'] >
		,
		ReturnType< $mpds_visavis_plot_discovery['json_cmp'] >
	>
	type $mpds_visavis_plot_discovery__show_setup__ZT4YI95T = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['show_setup'] >
		,
		ReturnType< $mpds_visavis_plot_discovery['show_setup'] >
	>
	type $mpds_visavis_plot_discovery__discovery_click__IF6M4LKU = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['discovery_click'] >
		,
		ReturnType< $mpds_visavis_plot_discovery['discovery_click'] >
	>
	type $mpds_visavis_plot_eigen__plot_raw__PEQTNYZ1 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_eigen['plot_raw'] >
	>
	type $mpds_visavis_plot_pie__plot_raw__DAM4OPTL = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_pie['plot_raw'] >
	>
	type $mpds_visavis_plot_pie__pie_click__DW9CCMA7 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['pie_click'] >
		,
		ReturnType< $mpds_visavis_plot_pie['pie_click'] >
	>
	type $mpds_visavis_plot_scatter__plot_raw__FW20G7I2 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_scatter['plot_raw'] >
	>
	type $mpds_visavis_plot_scatter__notify__MC68E54Q = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['notify'] >
		,
		ReturnType< $mpds_visavis_plot_scatter['notify'] >
	>
	type $mpds_visavis_plot_customscatter__plot_raw__TXKXDKYK = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_customscatter['plot_raw'] >
	>
	type $mpds_visavis_plot_customscatter__nplots_changed__OO1BNBIU = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['nplots_changed'] >
		,
		ReturnType< $mpds_visavis_plot_customscatter['nplots_changed'] >
	>
	type $mpds_visavis_plot_customscatter__legend_click__11OYSMIK = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['legend_click'] >
		,
		ReturnType< $mpds_visavis_plot_customscatter['legend_click'] >
	>
	type $mpds_visavis_plot_heatmap__plot_raw__8HZZ7CAZ = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_heatmap['plot_raw'] >
	>
	type $mpds_visavis_plot_graph_rel__9TGY6DX2 = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['graph_rel'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Graph'] >['graph_rel'] >[0]
	>
	type $mpds_visavis_plot_graph__plot_raw__H7SWDWM3 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_graph['plot_raw'] >
	>
	type $mpds_visavis_plot_graph__graph_click__5T2A7MMJ = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['graph_click'] >
		,
		ReturnType< $mpds_visavis_plot_graph['graph_click'] >
	>
	type $mpds_visavis_plot_graph__notify__ORXTY8LB = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['notify'] >
		,
		ReturnType< $mpds_visavis_plot_graph['notify'] >
	>
	type $mol_locale_select__value__G5FUOWVW = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['locale'] >
		,
		ReturnType< $mol_locale_select['value'] >
	>
	type $mol_check__Icon__JDM6DTL0 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['Expand_icon'] >
		,
		ReturnType< $mol_check['Icon'] >
	>
	type $mol_check__checked__IG01HEBI = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['fullscreen'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_paragraph__title__ND9XNGXK = $mol_type_enforce<
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

	type $mol_paragraph__title__LVVYQK23 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_paragraph__title__4AGS77B7 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_button_open__accept__XQKXO6KW = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_open['accept'] >
	>
	type $mol_button_open__files__R2SN4IJK = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['files_read'] >
		,
		ReturnType< $mol_button_open['files'] >
	>
	type $mol_list__sub__KTJJ69LQ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['sub'] >
	>
	type $mol_link__title__BE4ZBCHA = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_link__arg__63CX11VL = $mol_type_enforce<
		({ 
			'section': string,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_list__rows__9ALGBYP2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_drop__receive__3R4Y83IJ = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['drop_file'] >
		,
		ReturnType< $mol_drop['receive'] >
	>
	type $mol_drop__Sub__7PFPMFDV = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['Start_page_content'] >
		,
		ReturnType< $mol_drop['Sub'] >
	>
	type $mol_link__title__SAPJ971C = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_link__arg__FHK8BG9H = $mol_type_enforce<
		({ 
			'section': any,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__title__6Z3XKK4G = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_link__arg__N6QWKJ35 = $mol_type_enforce<
		({ 
			'section': string,
			'file': any,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link_iconed__uri__Y4LWDF2I = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['uri'] >
	>
	type $mol_link_iconed__title__VDEPZVAM = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_iconed['title'] >
	>
	type $mol_paragraph__title__85RT8FGD = $mol_type_enforce<
		string
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_button_open_native__accept__5X0647CD = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_open_native['accept'] >
	>
	type $mol_button_open_native__files__BUGR12H8 = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['files_read'] >
		,
		ReturnType< $mol_button_open_native['files'] >
	>
	type $mol_button_minor__sub__8Q42LJ80 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_drop__receive__HMSGICDN = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['drop_file'] >
		,
		ReturnType< $mol_drop['receive'] >
	>
	type $mol_drop__Sub__RSTO1DPU = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['History_upload'] >
		,
		ReturnType< $mol_drop['Sub'] >
	>
	type $mol_button_minor__click__Q8WDSDQH = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['history_drop'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__B5YJSKQO = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub__I5RG44AK = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows__EC5NTDD3 = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['history_rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_list__title__0GGZGHVC = $mol_type_enforce<
		string
		,
		ReturnType< $mol_list['title'] >
	>
	type $mol_list__sub__N4SMVEOS = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['sub'] >
	>
	type $mol_link__arg__G13KJ2EC = $mol_type_enforce<
		({ 
			'file': ReturnType< $mpds_visavis_app['plot_id'] >,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__title__U2OJSCI0 = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['plot_id'] >
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_list__title__CNMKEG0P = $mol_type_enforce<
		string
		,
		ReturnType< $mol_list['title'] >
	>
	type $mol_list__rows__7QZI59SG = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['example_rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_page__title__N3CND7PK = $mol_type_enforce<
		string
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__tools__T1SQJNY1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__body__AQL7X3AX = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['menu_body'] >
		,
		ReturnType< $mol_page['body'] >
	>
	type $mpds_visavis_plot__plot_raw__O7TO08P0 = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot['plot_raw'] >
	>
	type $mpds_visavis_plot__show_setup__UZC3YRUI = $mol_type_enforce<
		boolean
		,
		ReturnType< $mpds_visavis_plot['show_setup'] >
	>
	type $mpds_visavis_plot__show_fixel__0NNZVVF0 = $mol_type_enforce<
		boolean
		,
		ReturnType< $mpds_visavis_plot['show_fixel'] >
	>
	type $mpds_visavis_plot__show_demo_warn__FIEHDIAB = $mol_type_enforce<
		boolean
		,
		ReturnType< $mpds_visavis_plot['show_demo_warn'] >
	>
	type $mol_page__title__ZQDY2CPQ = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['plot_id'] >
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__Body_content__50H9R3TY = $mol_type_enforce<
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
//# sourceMappingURL=web.d.ts.map
