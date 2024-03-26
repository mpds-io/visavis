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
        static $: typeof $$;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: typeof $$;
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
        get incompleted(): boolean;
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
    function $mol_style_attach_force(): HTMLStyleElement;
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
            shadow?: readonly {
                inset?: boolean;
                x: Length;
                y: Length;
                blur: Length;
                spread: Length;
                color: $mol_style_properties_color;
            }[] | 'none' | Common;
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
        theme(next?: string | null): string | null;
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

	type $mol_view__title__PVVB4E6J = $mol_type_enforce<
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

	type $mol_speck__value__CGR3G6UN = $mol_type_enforce<
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
    class $mol_after_timeout extends $mol_object2 {
        delay: number;
        task: () => void;
        id: any;
        constructor(delay: number, task: () => void);
        destructor(): void;
    }
}

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

	type $mol_svg_path__geometry__UJN9XAA1 = $mol_type_enforce<
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

	type $mol_button_open_native__files__ICEOGKZG = $mol_type_enforce<
		ReturnType< $mol_button_open['files'] >
		,
		ReturnType< $mol_button_open_native['files'] >
	>
	type $mol_button_open_native__accept__2SUXNT57 = $mol_type_enforce<
		ReturnType< $mol_button_open['accept'] >
		,
		ReturnType< $mol_button_open_native['accept'] >
	>
	type $mol_button_open_native__multiple__74I7GW62 = $mol_type_enforce<
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

	type $mol_view__style__7Q2O7N86 = $mol_type_enforce<
		({ 
			'paddingTop': ReturnType< $mol_list['gap_before'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__style__YZSF35Z9 = $mol_type_enforce<
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

	export class $mol_icon_script extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=script.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_script_text extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=text.view.tree.d.ts.map
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

	export class $mol_link_source extends $mol_link {
		Icon( ): $mol_icon_script_text
		hint( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=source.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_delete extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=delete.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__dom_name__2W3K4V2R = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub__IU5ZDL34 = $mol_type_enforce<
		ReturnType< $mol_page['title_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub__I2ELJ2B1 = $mol_type_enforce<
		ReturnType< $mol_page['tools'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_height__YJFSK25E = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__dom_name__5WYHYMZ6 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub__D1C8Y7TK = $mol_type_enforce<
		ReturnType< $mol_page['head'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_page_body_scroll_top__AKEAA98N = $mol_type_enforce<
		Parameters< $mol_page['body_scroll_top'] >[0]
		,
		Parameters< ReturnType< $mol_page['Body'] >['scroll_top'] >[0]
	>
	type $mol_view__sub__PWBS59XK = $mol_type_enforce<
		ReturnType< $mol_page['body'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_scroll__sub__PQIAR8M1 = $mol_type_enforce<
		ReturnType< $mol_page['body_content'] >
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_view__dom_name__HZ5KUPLN = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub__E5MWVUSY = $mol_type_enforce<
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

	type $mpds_visavis_plot_legend_cmp_label__label__RRFHDGJK = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_legend_cmp['label'] >
		,
		ReturnType< $mpds_visavis_plot_legend_cmp_label['label'] >
	>
	type $mpds_visavis_plot_legend_cmp_label__background__8I0BK9IB = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_legend_cmp['background'] >
		,
		ReturnType< $mpds_visavis_plot_legend_cmp_label['background'] >
	>
	export class $mpds_visavis_plot_legend_cmp extends $mol_view {
		label( id: any): string
		background( id: any): string
		Label( id: any): $mpds_visavis_plot_legend_cmp_label
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

	type $mol_view__sub__5UMCSHOT = $mol_type_enforce<
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

	type $mol_check__checked__81HAKRDH = $mol_type_enforce<
		ReturnType< $mol_check_list['option_checked'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_check__label__LXN5R3RM = $mol_type_enforce<
		ReturnType< $mol_check_list['option_label'] >
		,
		ReturnType< $mol_check['label'] >
	>
	type $mol_check__enabled__YKN0ZR3V = $mol_type_enforce<
		ReturnType< $mol_check_list['option_enabled'] >
		,
		ReturnType< $mol_check['enabled'] >
	>
	type $mol_check__hint__U83187KT = $mol_type_enforce<
		ReturnType< $mol_check_list['option_hint'] >
		,
		ReturnType< $mol_check['hint'] >
	>
	type $mol_check__minimal_height__I8I6K4MI = $mol_type_enforce<
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

	type $mol_view__minimal_height__5OF4PFBW = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub__AJFR7N6O = $mol_type_enforce<
		ReturnType< $mol_labeler['label'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_height__313ZZF2U = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub__472728NO = $mol_type_enforce<
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
        Value: Readonly<$mol_type_merge<$mol_type_override<Partial<{ [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }>, Pick<{ [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }, { [Field_1 in keyof { [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }]: undefined extends { [key_1 in keyof Sub]: ReturnType<Sub[key_1]>; }[Field_1] ? never : Field_1; }[keyof Sub]>>>>;
    };
}

declare namespace $ {
    class $mol_error_mix<Cause extends {} = {}> extends AggregateError {
        readonly cause: Cause;
        name: string;
        constructor(message: string, cause?: Cause, ...errors: Error[]);
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
    }[]) => readonly Readonly<{
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
    }>[]) & {
        config: ((val: {
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
        }) => Readonly<{
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
            }>;
        };
        Value: readonly Readonly<{
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
        }>[];
        static index_by_prop(prop: keyof typeof Elements_list.Value[number]): {
            [k: string]: Readonly<{
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
            }>;
        };
        static element_by_num(num: number): Readonly<{
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
        }>;
        static element_by_name(name: string): Readonly<{
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
        }>;
        static prop_values(prop: keyof typeof Prop_names.Value): number[];
    }
    export {};
}

declare namespace $ {

	type $mpds_visavis_elements_nonformer_pd_tri__8EACWIGJ = $mol_type_enforce<
		`Pm-Dy-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PQDZFVWZ = $mol_type_enforce<
		`Yb-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ID4S0BGE = $mol_type_enforce<
		`Cr-Ni-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6151TNV5 = $mol_type_enforce<
		`Pu-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9EYFN8OT = $mol_type_enforce<
		`Pm-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y4UF5PFH = $mol_type_enforce<
		`Tm-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I8FUDJG0 = $mol_type_enforce<
		`Nd-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BXXPHBUU = $mol_type_enforce<
		`Al-Zn-In`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F9RCCE8I = $mol_type_enforce<
		`Eu-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AW4UAA0Z = $mol_type_enforce<
		`Ni-Ru-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PR99PSGB = $mol_type_enforce<
		`Ce-Pm-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PVHN1NO7 = $mol_type_enforce<
		`Cu-Tc-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2CC2AD41 = $mol_type_enforce<
		`La-Sm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0AJXCSPA = $mol_type_enforce<
		`La-Yb-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YFWZ77S7 = $mol_type_enforce<
		`Gd-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HCMOJSYC = $mol_type_enforce<
		`Li-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LP89K92P = $mol_type_enforce<
		`La-Dy-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FECT0ZK3 = $mol_type_enforce<
		`Ba-Yb-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TTFX3X81 = $mol_type_enforce<
		`K-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__242HXOAZ = $mol_type_enforce<
		`Y-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RE5B3LF9 = $mol_type_enforce<
		`Li-Ce-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QFCP40LK = $mol_type_enforce<
		`Sc-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3BT50JP3 = $mol_type_enforce<
		`Ho-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VU6SH6WC = $mol_type_enforce<
		`Tm-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3XM9E68C = $mol_type_enforce<
		`La-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ET7GIM9N = $mol_type_enforce<
		`Ir-Pd-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QK0ILENI = $mol_type_enforce<
		`Gd-Ho-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IJVTQDFX = $mol_type_enforce<
		`Ca-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__APV0IIW1 = $mol_type_enforce<
		`Rb-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H83YZ3BH = $mol_type_enforce<
		`La-Yb-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R4Y3TOKU = $mol_type_enforce<
		`Nd-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VZ2RMR03 = $mol_type_enforce<
		`Yb-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A2744277 = $mol_type_enforce<
		`La-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2AIHR4SZ = $mol_type_enforce<
		`Ba-La-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KTT6DEGP = $mol_type_enforce<
		`Cs-Li-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MI8KDJKT = $mol_type_enforce<
		`Ba-Sr-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3CT47U24 = $mol_type_enforce<
		`Yb-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AP6DMCYJ = $mol_type_enforce<
		`Cs-Pr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TE0CMQM4 = $mol_type_enforce<
		`Zn-Bi-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1RZP1U3D = $mol_type_enforce<
		`Tb-Pm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D0Z67U9R = $mol_type_enforce<
		`Gd-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6SVV13TQ = $mol_type_enforce<
		`Ce-Eu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__07FW5V8C = $mol_type_enforce<
		`Fe-Os-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H8RR22M6 = $mol_type_enforce<
		`Nb-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GC9NATA9 = $mol_type_enforce<
		`Eu-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VTO0N0IC = $mol_type_enforce<
		`Be-Al-In`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O1OLFVJ8 = $mol_type_enforce<
		`Pr-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3KHVAGRL = $mol_type_enforce<
		`Li-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__20TLSM9G = $mol_type_enforce<
		`Pu-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DVE89SQ4 = $mol_type_enforce<
		`Rb-Na-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EU620GT6 = $mol_type_enforce<
		`Mg-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AIB4U4CH = $mol_type_enforce<
		`Pr-Nd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PV09LGR9 = $mol_type_enforce<
		`Pr-Sm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E09PYFMJ = $mol_type_enforce<
		`Pd-Ru-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0RODOAZA = $mol_type_enforce<
		`Er-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E0BS6Z66 = $mol_type_enforce<
		`Ce-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NLWNHFAN = $mol_type_enforce<
		`Li-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BWFJD3IB = $mol_type_enforce<
		`Nd-Gd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J9MO6Z8M = $mol_type_enforce<
		`Fe-Rh-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DBO5NFXX = $mol_type_enforce<
		`Cs-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__368HJ66Y = $mol_type_enforce<
		`Ru-Pt-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LI4LXEQ0 = $mol_type_enforce<
		`Ca-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8JN9U2GY = $mol_type_enforce<
		`Cs-K-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E2E1JZ55 = $mol_type_enforce<
		`Lu-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EOMSCT7J = $mol_type_enforce<
		`Nd-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BOV89NVG = $mol_type_enforce<
		`Ga-Si-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LQ3MY10Y = $mol_type_enforce<
		`K-Mg-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7QEGY4B3 = $mol_type_enforce<
		`Ce-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MHSC4N99 = $mol_type_enforce<
		`Yb-Dy-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IJUHN72L = $mol_type_enforce<
		`Ba-Nd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LWJJ52YK = $mol_type_enforce<
		`Y-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IQSGOLYS = $mol_type_enforce<
		`Pr-Gd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W468T2NJ = $mol_type_enforce<
		`La-Y-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ETMX1DJP = $mol_type_enforce<
		`Er-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0PW9YK91 = $mol_type_enforce<
		`Cs-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0MAYHFLP = $mol_type_enforce<
		`Li-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U3OS85JN = $mol_type_enforce<
		`Pr-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__11V4IIFA = $mol_type_enforce<
		`Fe-Cu-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9RJMS26Y = $mol_type_enforce<
		`Ce-Sm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y9WRS3NG = $mol_type_enforce<
		`Dy-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NJU74GLZ = $mol_type_enforce<
		`Cu-Ir-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QFFZC7ZL = $mol_type_enforce<
		`Si-Sb-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LI2NZMEC = $mol_type_enforce<
		`Pr-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__10NQ7P8T = $mol_type_enforce<
		`K-Li-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZYJXYMAJ = $mol_type_enforce<
		`La-Tb-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HDLXRUDA = $mol_type_enforce<
		`Li-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WZL67U89 = $mol_type_enforce<
		`Sm-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EJXON6WM = $mol_type_enforce<
		`Cs-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__56V92YVW = $mol_type_enforce<
		`Pr-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__23EEH3HJ = $mol_type_enforce<
		`Tb-Yb-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FJQEFJJP = $mol_type_enforce<
		`Y-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ABUWDYQ1 = $mol_type_enforce<
		`Na-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ADLZLQ8R = $mol_type_enforce<
		`K-Mg-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R1B7GTYA = $mol_type_enforce<
		`Li-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O13RRXJ6 = $mol_type_enforce<
		`Ce-Hf-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CUR7NUEL = $mol_type_enforce<
		`Dy-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__95M2QQVH = $mol_type_enforce<
		`Ce-Mn-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CABB7BRI = $mol_type_enforce<
		`Mn-Fe-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1OS2GP7X = $mol_type_enforce<
		`Rb-Hf-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P6GN6LGX = $mol_type_enforce<
		`La-Tb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1YZ3ON7N = $mol_type_enforce<
		`Sr-Nd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0FEL9LSC = $mol_type_enforce<
		`Tb-Sm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HTFBVPHI = $mol_type_enforce<
		`Ce-Sc-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PHW4V7AW = $mol_type_enforce<
		`Y-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0JPG5UKS = $mol_type_enforce<
		`Rb-Li-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X7UYHR6Y = $mol_type_enforce<
		`Nd-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YWYTYOU6 = $mol_type_enforce<
		`Al-Si-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0S39VIIR = $mol_type_enforce<
		`Ca-La-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DVVNEU6O = $mol_type_enforce<
		`La-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B8TXL2TJ = $mol_type_enforce<
		`Sm-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__THBGK1JC = $mol_type_enforce<
		`Y-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__779NWYIR = $mol_type_enforce<
		`Na-Sr-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QV99XVLX = $mol_type_enforce<
		`K-Li-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M2C8ISXW = $mol_type_enforce<
		`Cs-Rb-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9WDBZUWN = $mol_type_enforce<
		`Zn-Ga-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZKTY24O7 = $mol_type_enforce<
		`La-Pm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K6D96Z3K = $mol_type_enforce<
		`Mn-Fe-Co`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__975F37ZT = $mol_type_enforce<
		`Gd-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7MPOW5CT = $mol_type_enforce<
		`Sm-Gd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TNP87UN5 = $mol_type_enforce<
		`U-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YKRXQKEG = $mol_type_enforce<
		`La-Ce-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__21BJLV43 = $mol_type_enforce<
		`Re-Hg-Sb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BE84KL5W = $mol_type_enforce<
		`Gd-Dy-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EKM4VZYY = $mol_type_enforce<
		`Dy-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZVGXJB6Y = $mol_type_enforce<
		`La-Nd-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TCYR93Y1 = $mol_type_enforce<
		`Ce-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JSII89PN = $mol_type_enforce<
		`Ce-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9YJN47SC = $mol_type_enforce<
		`Ce-Nd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8D3KIHJQ = $mol_type_enforce<
		`Pm-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ECN1LXGH = $mol_type_enforce<
		`Ce-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YCEDT94H = $mol_type_enforce<
		`Pr-Sm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9EWSK48H = $mol_type_enforce<
		`Ca-La-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DAO3NZGS = $mol_type_enforce<
		`Yb-Lu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7S0WJYIB = $mol_type_enforce<
		`Sm-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R79PRAUW = $mol_type_enforce<
		`Gd-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__402FRR48 = $mol_type_enforce<
		`Li-Pr-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y3NBQ3FR = $mol_type_enforce<
		`Al-Ga-Hg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BGOYE7YR = $mol_type_enforce<
		`Na-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E3H0CCJY = $mol_type_enforce<
		`Yb-Nd-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SVJ6PJ9R = $mol_type_enforce<
		`Nd-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HJMVN9WH = $mol_type_enforce<
		`La-Tb-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M3381FL7 = $mol_type_enforce<
		`Ir-Pd-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LUJ16QHA = $mol_type_enforce<
		`Tm-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LKUQH1OI = $mol_type_enforce<
		`Tm-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AJ7JRAXK = $mol_type_enforce<
		`La-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2EXG7VTO = $mol_type_enforce<
		`Cu-Ni-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0BK5KF7W = $mol_type_enforce<
		`Tb-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JECUQ8VS = $mol_type_enforce<
		`Ba-Sr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DCO2RUXS = $mol_type_enforce<
		`Th-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZYKL56Z7 = $mol_type_enforce<
		`Mn-Co-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__24ZZW0GG = $mol_type_enforce<
		`Cu-Ni-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LVAG362Y = $mol_type_enforce<
		`Tb-Ce-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L0UD3MTR = $mol_type_enforce<
		`Nd-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VM1RAYI2 = $mol_type_enforce<
		`Li-Pm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__65UDCK50 = $mol_type_enforce<
		`La-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DFNTWCGN = $mol_type_enforce<
		`La-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__618N7X78 = $mol_type_enforce<
		`Pm-Pr-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BGA59SUE = $mol_type_enforce<
		`Ce-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RXZRMXQ5 = $mol_type_enforce<
		`Cu-Tc-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UP38LO5Q = $mol_type_enforce<
		`Nd-Dy-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MXZFPQ6D = $mol_type_enforce<
		`Ca-Pm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K6K9FHTD = $mol_type_enforce<
		`Fe-Cu-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LWDHQDSC = $mol_type_enforce<
		`Li-Sm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UKQMCBX1 = $mol_type_enforce<
		`Mn-Ag-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IRM4PYPL = $mol_type_enforce<
		`Li-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A9PA7Y9V = $mol_type_enforce<
		`La-Tb-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W7VC1Q1V = $mol_type_enforce<
		`Gd-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JMCCWV91 = $mol_type_enforce<
		`Ce-Gd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PZ94NJMT = $mol_type_enforce<
		`Er-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M7OY2JBL = $mol_type_enforce<
		`Sm-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__56HIZSRZ = $mol_type_enforce<
		`Cr-Ni-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3W1PMZGS = $mol_type_enforce<
		`Nd-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B3CH0W6S = $mol_type_enforce<
		`Co-Au-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BSPMTHA0 = $mol_type_enforce<
		`Nd-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DGTJXFKI = $mol_type_enforce<
		`La-Yb-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D0JBC3O9 = $mol_type_enforce<
		`Sc-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V2DG4SHV = $mol_type_enforce<
		`Zr-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NJJ439C7 = $mol_type_enforce<
		`Pr-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4EWVYTL7 = $mol_type_enforce<
		`Cs-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BL8CGNPB = $mol_type_enforce<
		`Ce-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FWZL782N = $mol_type_enforce<
		`Yb-Gd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G6JVJKQ8 = $mol_type_enforce<
		`Li-Ce-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W53XSSGF = $mol_type_enforce<
		`Y-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OO2PRPCU = $mol_type_enforce<
		`La-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V2V5ZUJ6 = $mol_type_enforce<
		`Tb-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9UN3FHYY = $mol_type_enforce<
		`Tb-Pr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HHAG8CWD = $mol_type_enforce<
		`Sb-Pb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZKF2KV27 = $mol_type_enforce<
		`Ba-Yb-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AU4BERF2 = $mol_type_enforce<
		`Dy-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PR9EEQC5 = $mol_type_enforce<
		`Tb-Gd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F9NIYMM7 = $mol_type_enforce<
		`Tb-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XL9SGVOD = $mol_type_enforce<
		`Gd-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VXJ36DG5 = $mol_type_enforce<
		`Yb-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L4VVQ9IX = $mol_type_enforce<
		`Tm-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R0A9CWAK = $mol_type_enforce<
		`Pd-Pt-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CRLWTZCZ = $mol_type_enforce<
		`Eu-Pu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SYKV1AWV = $mol_type_enforce<
		`Ba-Sm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1T2ZGE3U = $mol_type_enforce<
		`La-Sm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9EJIYKCD = $mol_type_enforce<
		`U-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JG55670A = $mol_type_enforce<
		`Ba-Pm-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G327RYP0 = $mol_type_enforce<
		`Sm-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4Q3T7VEJ = $mol_type_enforce<
		`Gd-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N32EL5HE = $mol_type_enforce<
		`Ce-Pr-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GU69G87Y = $mol_type_enforce<
		`Lu-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HQBJSC90 = $mol_type_enforce<
		`Dy-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TZLI1TJ1 = $mol_type_enforce<
		`La-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CL49IXHL = $mol_type_enforce<
		`Y-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L7RJ8JCU = $mol_type_enforce<
		`Pm-Nd-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6AGF71BK = $mol_type_enforce<
		`Tb-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YKFSOZ6N = $mol_type_enforce<
		`Yb-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CY86EGNK = $mol_type_enforce<
		`Li-Pr-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KFZ2MZSU = $mol_type_enforce<
		`Mg-Mn-Cd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FIFDE9D9 = $mol_type_enforce<
		`Ce-Pm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OV96A5CU = $mol_type_enforce<
		`Pu-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FFE7RYAG = $mol_type_enforce<
		`Tl-Cd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I7ZN5GXZ = $mol_type_enforce<
		`Sc-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9QFP6A58 = $mol_type_enforce<
		`Pu-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7KW6A9EO = $mol_type_enforce<
		`Mn-Fe-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P09LW9V6 = $mol_type_enforce<
		`Eu-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6S90RO80 = $mol_type_enforce<
		`Tb-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__35M6E6XN = $mol_type_enforce<
		`Tb-Pr-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3A1KDW5N = $mol_type_enforce<
		`Ca-Nd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JLOOMMXL = $mol_type_enforce<
		`Ba-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N8407N0T = $mol_type_enforce<
		`Ca-Tb-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JVG84E6V = $mol_type_enforce<
		`Pu-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I30SCKFM = $mol_type_enforce<
		`Ca-Yb-Eu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DQQT9MCO = $mol_type_enforce<
		`Th-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__31I3954L = $mol_type_enforce<
		`Si-Sn-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9C3CX3WK = $mol_type_enforce<
		`Tb-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PNN1VYDP = $mol_type_enforce<
		`Na-Cr-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SGRB616M = $mol_type_enforce<
		`Y-Er-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XLZHL2TS = $mol_type_enforce<
		`Y-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__STUBMI65 = $mol_type_enforce<
		`Ni-Pd-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0Y3P2SJ3 = $mol_type_enforce<
		`Y-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZQBPASKF = $mol_type_enforce<
		`Co-Pd-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8H3DINEF = $mol_type_enforce<
		`Li-Gd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J7M3ER6T = $mol_type_enforce<
		`Tb-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QNZDFVU6 = $mol_type_enforce<
		`Pr-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L02NWEKQ = $mol_type_enforce<
		`La-Yb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZBP31GU5 = $mol_type_enforce<
		`Ca-Yb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HXQBHWPM = $mol_type_enforce<
		`Dy-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0CWCCX1S = $mol_type_enforce<
		`Nd-Sm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6AD257KA = $mol_type_enforce<
		`Tb-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PVD4BLAJ = $mol_type_enforce<
		`Gd-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UJX5MY1K = $mol_type_enforce<
		`Ca-Pm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__66Z9WLXJ = $mol_type_enforce<
		`Tl-Zn-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IP5XXLES = $mol_type_enforce<
		`Yb-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DM0UMYPF = $mol_type_enforce<
		`Fe-Co-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O7FL9663 = $mol_type_enforce<
		`La-Sm-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IQBIBVM9 = $mol_type_enforce<
		`Nb-V-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2I0YN06Q = $mol_type_enforce<
		`La-Sm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C5AKYGAP = $mol_type_enforce<
		`Li-Pr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KHARWCIQ = $mol_type_enforce<
		`Tb-Gd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6GQM6ND8 = $mol_type_enforce<
		`Eu-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OSNF0SGG = $mol_type_enforce<
		`Yb-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YMCQ446V = $mol_type_enforce<
		`Yb-Er-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OMJFV2M3 = $mol_type_enforce<
		`La-Ho-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__739WFCSX = $mol_type_enforce<
		`Dy-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9HADN71E = $mol_type_enforce<
		`La-Ce-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MOAHCWTI = $mol_type_enforce<
		`Pr-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LPRETEKX = $mol_type_enforce<
		`Eu-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XR2U2NV5 = $mol_type_enforce<
		`Dy-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2A680CWF = $mol_type_enforce<
		`La-Yb-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__376IK0WZ = $mol_type_enforce<
		`Ce-Pm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__95FHE5YW = $mol_type_enforce<
		`Tb-Pm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6J0NTTAO = $mol_type_enforce<
		`Pr-Dy-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XEOZPQ3Z = $mol_type_enforce<
		`La-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HDH6F6PK = $mol_type_enforce<
		`Li-Ce-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__96RI1ZKQ = $mol_type_enforce<
		`Li-Pr-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R9YXKIWH = $mol_type_enforce<
		`Tb-Pm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZIS84R2R = $mol_type_enforce<
		`Dy-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B425V9NN = $mol_type_enforce<
		`Al-In-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OUNRCOOI = $mol_type_enforce<
		`Nd-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9Y48EY3Z = $mol_type_enforce<
		`Pr-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZQ0W840P = $mol_type_enforce<
		`Ba-Pm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F3O6V6OS = $mol_type_enforce<
		`Pr-Dy-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HKYOLOEV = $mol_type_enforce<
		`Rb-Na-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O59W6WV7 = $mol_type_enforce<
		`Tb-Pm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4QQ5CJQA = $mol_type_enforce<
		`Gd-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FP8ISVEC = $mol_type_enforce<
		`Y-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L9MMPL50 = $mol_type_enforce<
		`Gd-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2A4W1IH2 = $mol_type_enforce<
		`Ba-Pm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LL9KDIBG = $mol_type_enforce<
		`Pu-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FYJH0M7F = $mol_type_enforce<
		`Er-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V7OWDFXG = $mol_type_enforce<
		`Co-Ni-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A86QYV00 = $mol_type_enforce<
		`Ho-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BQG7GN6Q = $mol_type_enforce<
		`Pm-Pr-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QOKR15AT = $mol_type_enforce<
		`Sm-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GDWLLOI7 = $mol_type_enforce<
		`Yb-Pr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5QTXWP4D = $mol_type_enforce<
		`Cu-Ag-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6S3D2ZK6 = $mol_type_enforce<
		`Pm-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q629YUFH = $mol_type_enforce<
		`Re-Ir-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8TW1LZ1H = $mol_type_enforce<
		`Er-Lu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EKRLUE8C = $mol_type_enforce<
		`La-Eu-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6362950M = $mol_type_enforce<
		`Cu-Ag-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DBT4KBVW = $mol_type_enforce<
		`Dy-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J4BYCDRD = $mol_type_enforce<
		`Dy-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0UPKNXA6 = $mol_type_enforce<
		`Re-Bi-Sb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0C6JIBUR = $mol_type_enforce<
		`Pm-Pr-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C005C3LB = $mol_type_enforce<
		`Th-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YNJBVWJ1 = $mol_type_enforce<
		`Y-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7PGUWEYL = $mol_type_enforce<
		`Fe-Ag-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NR9AFPON = $mol_type_enforce<
		`Co-Os-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DHZ84BF6 = $mol_type_enforce<
		`Rb-Li-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MP4FA1WH = $mol_type_enforce<
		`Gd-Dy-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SMQRPIE2 = $mol_type_enforce<
		`Tb-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I4JUU3I3 = $mol_type_enforce<
		`Ce-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XVMRPUJE = $mol_type_enforce<
		`Ba-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JZQDNHGO = $mol_type_enforce<
		`Nd-Dy-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B4RET3XX = $mol_type_enforce<
		`Ca-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M96RFNKQ = $mol_type_enforce<
		`Li-Hf-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SUZFXO52 = $mol_type_enforce<
		`Tb-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T8532F14 = $mol_type_enforce<
		`Tl-Zn-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PVUXVDI9 = $mol_type_enforce<
		`Pr-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3CZBX0JB = $mol_type_enforce<
		`Er-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OF3DLJAL = $mol_type_enforce<
		`Er-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SS4BMA9U = $mol_type_enforce<
		`K-Li-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WL4MAT2R = $mol_type_enforce<
		`Yb-Sc-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6FV2IXXD = $mol_type_enforce<
		`La-Ce-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__094MI39D = $mol_type_enforce<
		`Cs-Mg-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WLDTBSHC = $mol_type_enforce<
		`Ga-B-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y8JU9S8C = $mol_type_enforce<
		`Re-Ir-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4SBKQA5M = $mol_type_enforce<
		`Pr-Gd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZPXHX207 = $mol_type_enforce<
		`Re-Ni-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IMN9DDK9 = $mol_type_enforce<
		`Tb-Nd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HQL2FW8F = $mol_type_enforce<
		`Tb-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FIBY1MJ9 = $mol_type_enforce<
		`Nd-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AWOJV8QB = $mol_type_enforce<
		`Tb-Dy-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NSKZSTFH = $mol_type_enforce<
		`Tb-Pr-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3X1T6D5P = $mol_type_enforce<
		`La-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A1WD6U8H = $mol_type_enforce<
		`Eu-Th-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ABMW1PSC = $mol_type_enforce<
		`Li-Tb-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XSDZTTYN = $mol_type_enforce<
		`Na-V-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q7PW9I1B = $mol_type_enforce<
		`Cu-Re-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XGBVXNF0 = $mol_type_enforce<
		`Cd-Ge-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TYYKG5R9 = $mol_type_enforce<
		`Sm-Gd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IDV90M2R = $mol_type_enforce<
		`Al-In-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H24APN5N = $mol_type_enforce<
		`Al-Cd-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PC1709AH = $mol_type_enforce<
		`Ce-Eu-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YCZLL43A = $mol_type_enforce<
		`La-Tb-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y1UEE2NR = $mol_type_enforce<
		`Li-Tb-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PXYVR9M1 = $mol_type_enforce<
		`Pr-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HPDFPKAJ = $mol_type_enforce<
		`La-Pm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1PWJ8S6Q = $mol_type_enforce<
		`Gd-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__813S901T = $mol_type_enforce<
		`Li-La-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LLB1QVFE = $mol_type_enforce<
		`Al-Ga-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FFXDRWHP = $mol_type_enforce<
		`Tl-As-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GGYAMXEH = $mol_type_enforce<
		`Re-Pd-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TBDKFILC = $mol_type_enforce<
		`Eu-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J7LKKDGU = $mol_type_enforce<
		`Tm-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TR8NKKO6 = $mol_type_enforce<
		`Eu-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0L6NN2N4 = $mol_type_enforce<
		`Be-Zn-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I9KLUY6Z = $mol_type_enforce<
		`Li-Pm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NQ7IUUQ6 = $mol_type_enforce<
		`Na-Mg-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NR7SE8DL = $mol_type_enforce<
		`Fe-Ag-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JGQC6QRN = $mol_type_enforce<
		`Tl-Zn-Cd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J7QDNP82 = $mol_type_enforce<
		`Nd-Sm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZX41DKIG = $mol_type_enforce<
		`Y-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__68XVVHHW = $mol_type_enforce<
		`Gd-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2O19J1CT = $mol_type_enforce<
		`Li-Tb-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KGCF9V38 = $mol_type_enforce<
		`Be-Ga-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9B0AN4FK = $mol_type_enforce<
		`Mn-Cu-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ASAI3O7F = $mol_type_enforce<
		`Pr-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__29PV9VL6 = $mol_type_enforce<
		`Ho-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZDXG9OT5 = $mol_type_enforce<
		`Na-Li-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C0JV80EV = $mol_type_enforce<
		`Re-Ru-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U2SCU5PU = $mol_type_enforce<
		`La-Tb-Ce`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HJLZU9Q0 = $mol_type_enforce<
		`Cr-Pb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__97B5NZY1 = $mol_type_enforce<
		`Pr-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__42IESAHJ = $mol_type_enforce<
		`Ag-Pd-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D6HHKI2Z = $mol_type_enforce<
		`Ca-Nd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W1ZCC269 = $mol_type_enforce<
		`Mg-Cr-Cd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__36LHUAYV = $mol_type_enforce<
		`Mn-Ni-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__264QOF66 = $mol_type_enforce<
		`Cu-B-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GMX7NAWJ = $mol_type_enforce<
		`Li-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RQ0DD7I4 = $mol_type_enforce<
		`Ni-Os-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EG2TZB6E = $mol_type_enforce<
		`Fe-Ag-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GJXG1XNQ = $mol_type_enforce<
		`Li-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CZZ1WUNP = $mol_type_enforce<
		`Sm-Y-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WMU6G1YC = $mol_type_enforce<
		`Dy-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V4TRFCGS = $mol_type_enforce<
		`Na-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__52QCX2AX = $mol_type_enforce<
		`Tb-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0IA6X5JZ = $mol_type_enforce<
		`Rb-Na-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__543ZITP0 = $mol_type_enforce<
		`Gd-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8UO98FJ8 = $mol_type_enforce<
		`Pr-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KVO0G07F = $mol_type_enforce<
		`Pr-Sm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WHBGVW4H = $mol_type_enforce<
		`Gd-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7T04EKB5 = $mol_type_enforce<
		`Zr-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QMURGWAI = $mol_type_enforce<
		`Cr-Hg-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WEGSXXDK = $mol_type_enforce<
		`Yb-Er-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RDVVM7IJ = $mol_type_enforce<
		`Ca-Pm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WJQE3WHI = $mol_type_enforce<
		`Co-Cu-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1AC3KDD7 = $mol_type_enforce<
		`Gd-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VFWIRVCN = $mol_type_enforce<
		`Sc-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3BWKF2VZ = $mol_type_enforce<
		`Ga-Si-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1O6PXGQD = $mol_type_enforce<
		`Li-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9GHIZ1R3 = $mol_type_enforce<
		`Ba-Sr-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R7VYMXLW = $mol_type_enforce<
		`Li-Pm-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0AKMR7D8 = $mol_type_enforce<
		`Na-Li-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LH8W5C97 = $mol_type_enforce<
		`Gd-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LKOWPRCO = $mol_type_enforce<
		`Yb-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L284MW2V = $mol_type_enforce<
		`Ho-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W871H1C7 = $mol_type_enforce<
		`Nd-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DPKXAMX3 = $mol_type_enforce<
		`Ca-Ce-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QRA6AWN3 = $mol_type_enforce<
		`Pm-Gd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SBHZG5TP = $mol_type_enforce<
		`La-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R8IDZE1Z = $mol_type_enforce<
		`Ca-Yb-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3G3874R7 = $mol_type_enforce<
		`Pr-Th-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__46N1CJO5 = $mol_type_enforce<
		`Tm-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H8E254F9 = $mol_type_enforce<
		`Rb-Li-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WJODKNT3 = $mol_type_enforce<
		`Gd-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E5783VYN = $mol_type_enforce<
		`Yb-Pr-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VMB9DQN2 = $mol_type_enforce<
		`Ce-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KKA9B9RY = $mol_type_enforce<
		`Nd-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J5VD77KC = $mol_type_enforce<
		`Er-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5OENMKEA = $mol_type_enforce<
		`Dy-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6FYF61GH = $mol_type_enforce<
		`La-Pr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TDP5U2IG = $mol_type_enforce<
		`Yb-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1NH3Q8TP = $mol_type_enforce<
		`La-Yb-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5F2H4W49 = $mol_type_enforce<
		`Co-Rh-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GXNJM5EN = $mol_type_enforce<
		`La-Eu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__875SQ27T = $mol_type_enforce<
		`Y-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WA29Y9JW = $mol_type_enforce<
		`K-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J12VO4FH = $mol_type_enforce<
		`Pr-Sm-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S8QDBI87 = $mol_type_enforce<
		`Eu-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__13W0KATX = $mol_type_enforce<
		`Ga-Sn-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EYOFQBPJ = $mol_type_enforce<
		`Cu-Ag-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VPD39US8 = $mol_type_enforce<
		`Ce-Gd-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GA04Z0SY = $mol_type_enforce<
		`Tl-Ga-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5GFH9NPG = $mol_type_enforce<
		`Gd-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4Y3F0O80 = $mol_type_enforce<
		`Ti-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1ITAQGBQ = $mol_type_enforce<
		`Ga-Sn-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7AFCTEJW = $mol_type_enforce<
		`La-Eu-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ITG0L60B = $mol_type_enforce<
		`Tm-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZDPSAD3K = $mol_type_enforce<
		`Pm-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__25YQNH43 = $mol_type_enforce<
		`Be-Al-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9PZZ558H = $mol_type_enforce<
		`Dy-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7Z7GQHSU = $mol_type_enforce<
		`Yb-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BL71K6EM = $mol_type_enforce<
		`Na-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2SS6T8J0 = $mol_type_enforce<
		`Li-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XQJZHHVV = $mol_type_enforce<
		`Na-Sr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GME9LMO2 = $mol_type_enforce<
		`Ba-La-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SMGL48ZO = $mol_type_enforce<
		`Sm-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6KH1Z3XY = $mol_type_enforce<
		`La-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CCYJ5DG1 = $mol_type_enforce<
		`K-Cr-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NT2TDM3S = $mol_type_enforce<
		`Y-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KQRIUOHI = $mol_type_enforce<
		`Ce-Pm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1L96J2VC = $mol_type_enforce<
		`Sm-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J8WF1M6I = $mol_type_enforce<
		`Er-Th-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D1X8VHYF = $mol_type_enforce<
		`Co-Os-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7051QN3A = $mol_type_enforce<
		`Sm-Dy-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZMCCY7PQ = $mol_type_enforce<
		`Sr-Ca-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DMLJGFA6 = $mol_type_enforce<
		`Pm-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XQLL3QUL = $mol_type_enforce<
		`Yb-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JE370RX7 = $mol_type_enforce<
		`La-Gd-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3ODQ030D = $mol_type_enforce<
		`Tb-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__05MFQFSL = $mol_type_enforce<
		`Cs-Mg-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3T68ID40 = $mol_type_enforce<
		`Ca-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3QMTSRGT = $mol_type_enforce<
		`Pr-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0EOHGLI1 = $mol_type_enforce<
		`Pm-Sm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZAC329C7 = $mol_type_enforce<
		`La-Sm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XD0ODOB4 = $mol_type_enforce<
		`Zr-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OQ6HJMWH = $mol_type_enforce<
		`Cr-Cu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6U8U8EIE = $mol_type_enforce<
		`Cu-Ni-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JW5ATRKW = $mol_type_enforce<
		`Sm-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KTJZH8GX = $mol_type_enforce<
		`Ce-Pr-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E365FZEF = $mol_type_enforce<
		`Ce-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KMODO3IM = $mol_type_enforce<
		`La-V-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UIF7TY5P = $mol_type_enforce<
		`Sm-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KB9RAG1L = $mol_type_enforce<
		`Ce-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CNM4SR6H = $mol_type_enforce<
		`Ce-Y-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MT3BWCCE = $mol_type_enforce<
		`Ca-Pm-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X4MMWU53 = $mol_type_enforce<
		`Ce-Pr-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__519AFLE5 = $mol_type_enforce<
		`Ce-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5M4Z23MX = $mol_type_enforce<
		`Re-Ru-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__42CQ5CDR = $mol_type_enforce<
		`Cu-Os-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U304N6A5 = $mol_type_enforce<
		`Co-Ni-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6D3Y2OE5 = $mol_type_enforce<
		`La-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8QNCVWKQ = $mol_type_enforce<
		`Ba-V-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GH8LFM9P = $mol_type_enforce<
		`Gd-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7RJQIQQH = $mol_type_enforce<
		`Li-Er-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PB9DENYL = $mol_type_enforce<
		`La-Yb-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CAWPS0IE = $mol_type_enforce<
		`Ce-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ER2K6VB4 = $mol_type_enforce<
		`Y-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1PI9JPJJ = $mol_type_enforce<
		`Tm-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OGBJ59OI = $mol_type_enforce<
		`La-Eu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CCBFV3WY = $mol_type_enforce<
		`Pr-Dy-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__43WMZ9UT = $mol_type_enforce<
		`Ca-Yb-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G5QEZAVN = $mol_type_enforce<
		`La-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T99LQMSS = $mol_type_enforce<
		`Pr-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FK4MPRAQ = $mol_type_enforce<
		`Nd-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ERMIGKMU = $mol_type_enforce<
		`Pu-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__07HWD417 = $mol_type_enforce<
		`Li-Nd-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F54FMI0E = $mol_type_enforce<
		`Li-Ce-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BV3PCV22 = $mol_type_enforce<
		`Tl-Cu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EOYCUTE0 = $mol_type_enforce<
		`Al-Zn-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M0UPV0TG = $mol_type_enforce<
		`Er-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JTPZD01Y = $mol_type_enforce<
		`K-Mg-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2FP4SI6L = $mol_type_enforce<
		`Li-Ce-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R8QWNP56 = $mol_type_enforce<
		`Na-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KU14E8PS = $mol_type_enforce<
		`Ba-La-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q5FLZ2P9 = $mol_type_enforce<
		`Tb-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QGJYAL1V = $mol_type_enforce<
		`Pr-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C20ZOYDG = $mol_type_enforce<
		`Tb-Yb-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VATS5PBE = $mol_type_enforce<
		`Sm-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5M1HNXDK = $mol_type_enforce<
		`Tb-Dy-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CJ85P22H = $mol_type_enforce<
		`Ag-Ge-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M42MMCBN = $mol_type_enforce<
		`Nd-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M83YM3O8 = $mol_type_enforce<
		`Yb-Y-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UM6MGPTC = $mol_type_enforce<
		`Dy-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QRCH59M8 = $mol_type_enforce<
		`Gd-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZCV5WMGD = $mol_type_enforce<
		`Nd-Sm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8CFUV041 = $mol_type_enforce<
		`Tb-Sm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G5OU0FUN = $mol_type_enforce<
		`Li-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZHM12ALD = $mol_type_enforce<
		`Y-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NT3Q30G9 = $mol_type_enforce<
		`Eu-Sc-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__61FDPWGR = $mol_type_enforce<
		`Ti-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U6QXZWTL = $mol_type_enforce<
		`Re-Ag-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DMVL92LD = $mol_type_enforce<
		`Pm-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9S9LPIKC = $mol_type_enforce<
		`Ca-Tb-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YUBFU42Y = $mol_type_enforce<
		`Ta-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UPTUPBO6 = $mol_type_enforce<
		`Tb-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EAKWMT3N = $mol_type_enforce<
		`Li-La-Tb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XQ9NZRC9 = $mol_type_enforce<
		`Tl-Ag-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OHS4CPD6 = $mol_type_enforce<
		`Tb-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A36A9MPJ = $mol_type_enforce<
		`Er-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1YVBKKAH = $mol_type_enforce<
		`Fe-Ni-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NBSP54ST = $mol_type_enforce<
		`La-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YKQVYE1U = $mol_type_enforce<
		`Co-Re-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZEXYJZFD = $mol_type_enforce<
		`Li-Cr-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CNB8ESTB = $mol_type_enforce<
		`V-Ag-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M49WL5GJ = $mol_type_enforce<
		`Zn-Sn-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VESSXZZF = $mol_type_enforce<
		`Ce-Nd-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BJSQEA0Q = $mol_type_enforce<
		`La-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7TF83YFU = $mol_type_enforce<
		`Ca-Eu-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UR1DC6EI = $mol_type_enforce<
		`Ho-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CE7SZM40 = $mol_type_enforce<
		`Yb-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IA4W7SIQ = $mol_type_enforce<
		`Eu-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EMPPNHGJ = $mol_type_enforce<
		`Ni-Ir-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YRIDSHRE = $mol_type_enforce<
		`Y-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O82JRR2W = $mol_type_enforce<
		`Pr-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T3C0FMR8 = $mol_type_enforce<
		`Ho-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SPTWWZQ2 = $mol_type_enforce<
		`Pr-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__34IKHF4U = $mol_type_enforce<
		`Pr-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__07E4Z70C = $mol_type_enforce<
		`Pr-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3V28HASQ = $mol_type_enforce<
		`Tb-Ce-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5R5NG3BK = $mol_type_enforce<
		`Ce-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QBMDGZTQ = $mol_type_enforce<
		`Li-Tb-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9K3HC6UK = $mol_type_enforce<
		`Mn-Tl-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YBIELB55 = $mol_type_enforce<
		`Ba-La-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R2CYJJRE = $mol_type_enforce<
		`Th-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GBKBB5FW = $mol_type_enforce<
		`Li-La-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HLOATG6S = $mol_type_enforce<
		`Mn-Fe-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__61ZSH3LK = $mol_type_enforce<
		`Ho-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TSAGPA89 = $mol_type_enforce<
		`K-Rb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SSRYBQVB = $mol_type_enforce<
		`La-Gd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QAZFD0PZ = $mol_type_enforce<
		`Cu-Ag-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1P44TVQJ = $mol_type_enforce<
		`Ce-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3T8MXWOV = $mol_type_enforce<
		`Ho-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z2OE2SVN = $mol_type_enforce<
		`Ce-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3D6APSW0 = $mol_type_enforce<
		`Co-Ru-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GFU2TN3Y = $mol_type_enforce<
		`Ce-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3F7QSX8X = $mol_type_enforce<
		`Yb-Hf-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FAW0NFN5 = $mol_type_enforce<
		`Tl-Si-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R9O5H7FW = $mol_type_enforce<
		`Tb-Yb-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B11ZMMEI = $mol_type_enforce<
		`Rb-Li-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KQSAPHSU = $mol_type_enforce<
		`Co-Ni-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YJPDE1IA = $mol_type_enforce<
		`Co-Ir-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QZIYH7O7 = $mol_type_enforce<
		`Gd-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G2M3F481 = $mol_type_enforce<
		`Gd-Dy-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PYOXRAR0 = $mol_type_enforce<
		`Mn-Cu-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LP3P8167 = $mol_type_enforce<
		`Cu-Mo-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__99OH85YN = $mol_type_enforce<
		`Tb-Pr-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EG77C7MX = $mol_type_enforce<
		`Li-Mg-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A05KBMV7 = $mol_type_enforce<
		`Yb-Pr-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IZ7O7AHN = $mol_type_enforce<
		`Li-Sm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M3WH9K0I = $mol_type_enforce<
		`Li-Tb-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G6COX8EJ = $mol_type_enforce<
		`Sm-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__84XTD6UB = $mol_type_enforce<
		`Ba-La-Yb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__80TJGU6Y = $mol_type_enforce<
		`La-Dy-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IVXVLE7Y = $mol_type_enforce<
		`Zn-Si-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ORI0XZBS = $mol_type_enforce<
		`Ca-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MK0TH2CJ = $mol_type_enforce<
		`U-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4CWDK00E = $mol_type_enforce<
		`Pr-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z3K7U7UP = $mol_type_enforce<
		`Si-Bi-Sb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7NZCZ3OK = $mol_type_enforce<
		`Li-Ce-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JMZ9NZ28 = $mol_type_enforce<
		`Cu-Re-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R1N73NQ2 = $mol_type_enforce<
		`Ba-Ca-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HM54ZJEA = $mol_type_enforce<
		`La-Lu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PWSMAOZX = $mol_type_enforce<
		`Zn-Cd-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KCOEFY1S = $mol_type_enforce<
		`In-Ga-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZGWM20DD = $mol_type_enforce<
		`Dy-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YJMSZ2AP = $mol_type_enforce<
		`Cr-Hg-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ASD54Z8E = $mol_type_enforce<
		`Yb-Dy-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WMGIM3OA = $mol_type_enforce<
		`Eu-Y-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2KFRV3T7 = $mol_type_enforce<
		`Mn-Co-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8V6AI6Q5 = $mol_type_enforce<
		`Yb-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BIA8GV66 = $mol_type_enforce<
		`Nb-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DEV31Y4H = $mol_type_enforce<
		`Yb-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__70AVNA9A = $mol_type_enforce<
		`Yb-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5OUDA44C = $mol_type_enforce<
		`K-Rb-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7RXUMSTD = $mol_type_enforce<
		`Ce-Gd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W8618TYT = $mol_type_enforce<
		`Dy-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4I0CSXQ1 = $mol_type_enforce<
		`V-Fe-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__66F53S5B = $mol_type_enforce<
		`Yb-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3RHK25AD = $mol_type_enforce<
		`La-Ce-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G2SKW49W = $mol_type_enforce<
		`Ni-Pd-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5SQ1CJ1P = $mol_type_enforce<
		`La-Pr-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FUMNXTVO = $mol_type_enforce<
		`La-Ce-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZPS7LF1J = $mol_type_enforce<
		`Eu-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R51TFYC0 = $mol_type_enforce<
		`Nd-Ho-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VATT3E6N = $mol_type_enforce<
		`Hf-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__24T3338U = $mol_type_enforce<
		`Tb-Yb-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8K0FM5MJ = $mol_type_enforce<
		`Tb-Pr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FS1HZ4CR = $mol_type_enforce<
		`Er-Pu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__77IIN0GS = $mol_type_enforce<
		`Re-Hg-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G4NV0D8E = $mol_type_enforce<
		`Ba-Yb-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8C3ZKQWX = $mol_type_enforce<
		`Lu-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__73BWIQQA = $mol_type_enforce<
		`Nd-Y-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LDPMMFKO = $mol_type_enforce<
		`Rb-Na-Li`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__37M75B70 = $mol_type_enforce<
		`Sm-Dy-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UTTKXASW = $mol_type_enforce<
		`U-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IZJ2ZS21 = $mol_type_enforce<
		`Ce-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M53ZIDH7 = $mol_type_enforce<
		`Pd-Rh-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FKVCXKDO = $mol_type_enforce<
		`Tb-Ce-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TW81RZ7Y = $mol_type_enforce<
		`Eu-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__08LTIYIC = $mol_type_enforce<
		`Y-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FJZKHW7E = $mol_type_enforce<
		`Li-Ce-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KKI3T8K7 = $mol_type_enforce<
		`Yb-Gd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2JL5XC5H = $mol_type_enforce<
		`Cd-B-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1KPJ4WY3 = $mol_type_enforce<
		`Th-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J1RIXB5S = $mol_type_enforce<
		`Ba-La-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RZ49ZQAH = $mol_type_enforce<
		`Er-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BGBYJ41F = $mol_type_enforce<
		`K-Rb-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UAHJG371 = $mol_type_enforce<
		`Cd-Fe-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I8PTJQIT = $mol_type_enforce<
		`Al-Tl-Cd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N5C9WO1E = $mol_type_enforce<
		`Pr-Nd-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MA4SNAUD = $mol_type_enforce<
		`Nd-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M76X4RUQ = $mol_type_enforce<
		`Ce-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__580B1PKU = $mol_type_enforce<
		`La-Pu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0U7O3ZST = $mol_type_enforce<
		`Ge-Au-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8HOI1LKR = $mol_type_enforce<
		`Ca-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NKKWPUOE = $mol_type_enforce<
		`Yb-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ASV26H5M = $mol_type_enforce<
		`Na-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__84D2BIA2 = $mol_type_enforce<
		`Y-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B11MM9T6 = $mol_type_enforce<
		`Ba-Sr-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G5CWZQUF = $mol_type_enforce<
		`Tb-Dy-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HP6ZUTK8 = $mol_type_enforce<
		`La-Gd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T2M57V1V = $mol_type_enforce<
		`Y-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P2S90Z14 = $mol_type_enforce<
		`Ce-Sm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5ARJ46B5 = $mol_type_enforce<
		`V-Pd-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1D8Q3OZL = $mol_type_enforce<
		`Li-Tb-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XRXLQIHP = $mol_type_enforce<
		`Yb-Pr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KJRWMUCX = $mol_type_enforce<
		`Yb-Gd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J6BAFMJZ = $mol_type_enforce<
		`Y-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CHQW9D8T = $mol_type_enforce<
		`Pm-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P0GUWZAG = $mol_type_enforce<
		`Eu-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ET9CZC59 = $mol_type_enforce<
		`La-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SZIORBY2 = $mol_type_enforce<
		`Ba-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ECCVXDI9 = $mol_type_enforce<
		`Co-Hg-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6EMITESI = $mol_type_enforce<
		`Lu-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G4QDPWJM = $mol_type_enforce<
		`Y-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UVNCMR41 = $mol_type_enforce<
		`Ba-Ca-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GCQYRID9 = $mol_type_enforce<
		`K-Li-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6CEEREOQ = $mol_type_enforce<
		`V-Hg-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__79BBURHN = $mol_type_enforce<
		`Tb-Gd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M4IVSZYY = $mol_type_enforce<
		`La-Pm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D5ZN193J = $mol_type_enforce<
		`Ir-Ru-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J9ZH9XUB = $mol_type_enforce<
		`Ca-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4FVTGR88 = $mol_type_enforce<
		`Tb-Yb-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HLKZWSC2 = $mol_type_enforce<
		`Li-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2BV4VKDP = $mol_type_enforce<
		`Er-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SGOBJ0WG = $mol_type_enforce<
		`La-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__94ZLM250 = $mol_type_enforce<
		`La-Dy-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3OHVZJV0 = $mol_type_enforce<
		`Ce-Nd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0LMHA6PX = $mol_type_enforce<
		`Co-Pt-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KMI4UK0C = $mol_type_enforce<
		`Tm-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L4JCHZQM = $mol_type_enforce<
		`Na-Mg-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5N8K42UF = $mol_type_enforce<
		`Ce-Eu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QKNACYSR = $mol_type_enforce<
		`Cs-Li-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z21F8T2I = $mol_type_enforce<
		`Gd-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DCWIRRR5 = $mol_type_enforce<
		`Re-Pd-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8BKSTNJ8 = $mol_type_enforce<
		`Yb-Nd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TJ6A0KHK = $mol_type_enforce<
		`Mg-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LHLF2OST = $mol_type_enforce<
		`Fe-Pd-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TWGD0A6N = $mol_type_enforce<
		`K-Rb-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GV7101DO = $mol_type_enforce<
		`Ba-Ca-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H442K71Q = $mol_type_enforce<
		`Rb-Mg-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3DR8LBY8 = $mol_type_enforce<
		`La-Sm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OXM91C1Z = $mol_type_enforce<
		`Y-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OJEP3X9O = $mol_type_enforce<
		`Cs-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5X5RTOOV = $mol_type_enforce<
		`Tb-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BGIXRNJF = $mol_type_enforce<
		`Pm-Gd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5VBOXRIL = $mol_type_enforce<
		`La-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IX12F9E9 = $mol_type_enforce<
		`Tb-Gd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TRTLERGJ = $mol_type_enforce<
		`Ce-Pm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__60FU9YBW = $mol_type_enforce<
		`Pm-Sm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7R2IOOQV = $mol_type_enforce<
		`Hf-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8IMMMTAO = $mol_type_enforce<
		`Y-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QASSWHMF = $mol_type_enforce<
		`Be-Zn-In`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A0LQ1Z1I = $mol_type_enforce<
		`Yb-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__186U6NFM = $mol_type_enforce<
		`Nd-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K8IKUCH6 = $mol_type_enforce<
		`Ce-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1AV10DGD = $mol_type_enforce<
		`Cs-K-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X3VGOJMO = $mol_type_enforce<
		`Ag-Pd-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7O8CXXPA = $mol_type_enforce<
		`Sm-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JRMV2WRU = $mol_type_enforce<
		`Ho-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UDZS75IR = $mol_type_enforce<
		`Yb-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LVWL9JYD = $mol_type_enforce<
		`Tb-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XKWHMEVS = $mol_type_enforce<
		`Yb-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K53EVXVT = $mol_type_enforce<
		`Ca-Tb-Ce`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IX1EH3CA = $mol_type_enforce<
		`Tb-Dy-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JNF75S88 = $mol_type_enforce<
		`Zn-Cd-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3ZKLVL8N = $mol_type_enforce<
		`Pm-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IYFQ5FCO = $mol_type_enforce<
		`Yb-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__60P9WAZY = $mol_type_enforce<
		`Hf-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z0J60T2S = $mol_type_enforce<
		`Li-Sm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3AM2QFX5 = $mol_type_enforce<
		`Li-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BHAS2VUH = $mol_type_enforce<
		`Na-Ta-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IVNZ1CHE = $mol_type_enforce<
		`Pr-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9ZPX4JIH = $mol_type_enforce<
		`V-In-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JF2MIHN9 = $mol_type_enforce<
		`Er-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CXNBYVRY = $mol_type_enforce<
		`Pm-Dy-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RMSB4GZ1 = $mol_type_enforce<
		`Tb-Gd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6RW78SU3 = $mol_type_enforce<
		`Nd-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CX254LKJ = $mol_type_enforce<
		`Sr-Ca-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SUF4M9WI = $mol_type_enforce<
		`Tm-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UPRSSQXT = $mol_type_enforce<
		`Gd-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OQJEO4Z7 = $mol_type_enforce<
		`Li-Gd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NQXRUZ0M = $mol_type_enforce<
		`Ag-Os-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2QWEKX6S = $mol_type_enforce<
		`La-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WIO0VBAS = $mol_type_enforce<
		`Th-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__39B31SYD = $mol_type_enforce<
		`Co-Pd-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__STC8YGP7 = $mol_type_enforce<
		`Ce-Ho-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X9CONANZ = $mol_type_enforce<
		`Cu-Re-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__46LNZJJ3 = $mol_type_enforce<
		`Yb-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XQKWT7MO = $mol_type_enforce<
		`Li-La-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8T5RD10O = $mol_type_enforce<
		`Cu-Ag-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0VSR8YZG = $mol_type_enforce<
		`Eu-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0KRS0D36 = $mol_type_enforce<
		`Rb-Na-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__74UUHR4O = $mol_type_enforce<
		`Co-Rh-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DFZ0PVSJ = $mol_type_enforce<
		`Tb-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WVKFK3DS = $mol_type_enforce<
		`Ce-Gd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YUQSJO9J = $mol_type_enforce<
		`Tb-Ce-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MMC3OQTM = $mol_type_enforce<
		`Gd-Dy-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2O8UXSNI = $mol_type_enforce<
		`Zn-In-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XNT4T3K3 = $mol_type_enforce<
		`Ce-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4RGYM81B = $mol_type_enforce<
		`Y-Ho-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R3WJPUDR = $mol_type_enforce<
		`Pm-Pr-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__087VL7GC = $mol_type_enforce<
		`Li-Pr-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L3LK71EB = $mol_type_enforce<
		`Er-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G5X2DWAG = $mol_type_enforce<
		`Li-Gd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZQV7O5MQ = $mol_type_enforce<
		`Li-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UEM63I8F = $mol_type_enforce<
		`Yb-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T47IS1CK = $mol_type_enforce<
		`Pu-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0G067KN2 = $mol_type_enforce<
		`La-Tb-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6GZL54U7 = $mol_type_enforce<
		`Li-La-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P6ZTZH6Z = $mol_type_enforce<
		`Cu-Ni-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WVYGNY8U = $mol_type_enforce<
		`Yb-Pr-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M3ZQ2WLM = $mol_type_enforce<
		`La-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XI82HQSA = $mol_type_enforce<
		`Fe-Ag-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q54RFRQ3 = $mol_type_enforce<
		`Mg-Mn-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9XG3AXTJ = $mol_type_enforce<
		`Fe-Ag-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ITDJFOQ3 = $mol_type_enforce<
		`Nd-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RER15VGY = $mol_type_enforce<
		`La-Pr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F47OQ67K = $mol_type_enforce<
		`Cr-Cu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9DN0PY9C = $mol_type_enforce<
		`Tb-Er-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X3HQSH5K = $mol_type_enforce<
		`Li-Lu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2P7RUKO3 = $mol_type_enforce<
		`Y-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HI0I0G3F = $mol_type_enforce<
		`Lu-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3NKLTDCJ = $mol_type_enforce<
		`Sn-B-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HL72KW8V = $mol_type_enforce<
		`Li-Pr-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__04VXMDS8 = $mol_type_enforce<
		`Re-Hg-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MPZ3TVEB = $mol_type_enforce<
		`Yb-Dy-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HK01L56T = $mol_type_enforce<
		`Tb-Pm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4WQFJC5R = $mol_type_enforce<
		`Cs-K-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__69BWGMGX = $mol_type_enforce<
		`Ni-Ir-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4CYCU6CY = $mol_type_enforce<
		`Ca-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XNS9H1AY = $mol_type_enforce<
		`Eu-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GYHL9WZ9 = $mol_type_enforce<
		`Zr-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D55MZGDN = $mol_type_enforce<
		`Yb-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SQGA2JPQ = $mol_type_enforce<
		`K-Li-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S8LL29BC = $mol_type_enforce<
		`Yb-Pr-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C5KJ9V0M = $mol_type_enforce<
		`Y-Pu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZTY4MN5N = $mol_type_enforce<
		`Ce-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OQVC0L3Q = $mol_type_enforce<
		`Ce-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HOB2CCXX = $mol_type_enforce<
		`Nb-V-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BB5WNXTU = $mol_type_enforce<
		`V-Cu-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V9SADSZI = $mol_type_enforce<
		`Y-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RFPMFCSH = $mol_type_enforce<
		`Fe-Cu-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CW330T6T = $mol_type_enforce<
		`Re-Pt-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZC5Z8M96 = $mol_type_enforce<
		`Pu-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LXF9DATO = $mol_type_enforce<
		`Re-Ir-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WE2NZLQI = $mol_type_enforce<
		`Ca-Yb-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7U5TAUHN = $mol_type_enforce<
		`Nd-Sm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2U4EFGMI = $mol_type_enforce<
		`Na-Sr-Ca`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C4Z9FQST = $mol_type_enforce<
		`Ho-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9BNR8RXC = $mol_type_enforce<
		`Ce-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2NG8XG9M = $mol_type_enforce<
		`Ce-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2WXGFJ6J = $mol_type_enforce<
		`Pm-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8FZU05L9 = $mol_type_enforce<
		`La-Gd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F69EJDEQ = $mol_type_enforce<
		`Dy-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0O27MWM7 = $mol_type_enforce<
		`Ta-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y371JSAP = $mol_type_enforce<
		`Nd-Dy-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SMRCC6EE = $mol_type_enforce<
		`Y-Ho-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0L2413D4 = $mol_type_enforce<
		`Sr-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZM8JQ0ML = $mol_type_enforce<
		`La-Pr-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CRH3YEU7 = $mol_type_enforce<
		`Cr-Cu-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XUERUPNX = $mol_type_enforce<
		`Pm-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3F2HTZO4 = $mol_type_enforce<
		`La-Pm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__US3FDFRO = $mol_type_enforce<
		`Sm-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__39PZFZYV = $mol_type_enforce<
		`Y-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8BJ8MP92 = $mol_type_enforce<
		`Ba-Sr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2HLOF7DV = $mol_type_enforce<
		`Ta-V-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__00A71P8R = $mol_type_enforce<
		`Ga-Hg-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2RSGGURE = $mol_type_enforce<
		`La-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YE1INTZZ = $mol_type_enforce<
		`Nd-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SMQXB3NL = $mol_type_enforce<
		`Li-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XUBHEW6L = $mol_type_enforce<
		`Ca-Eu-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__006UXAHD = $mol_type_enforce<
		`Pr-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3G3MS71S = $mol_type_enforce<
		`Lu-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IJZWJRQZ = $mol_type_enforce<
		`Dy-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TL4JG7S5 = $mol_type_enforce<
		`Ce-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A23TINCS = $mol_type_enforce<
		`Na-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YSJ7C9IW = $mol_type_enforce<
		`La-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QXG3A3BB = $mol_type_enforce<
		`Tb-Nd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DX1AT8P5 = $mol_type_enforce<
		`Eu-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8U57MA08 = $mol_type_enforce<
		`Ca-Ce-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LSTN5JXU = $mol_type_enforce<
		`Pr-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EJVYJ7O0 = $mol_type_enforce<
		`Pm-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M8DFSZM3 = $mol_type_enforce<
		`Nd-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4WAKNY2B = $mol_type_enforce<
		`La-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GGREEVUS = $mol_type_enforce<
		`Co-Pd-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9F49BCSJ = $mol_type_enforce<
		`Pr-Sm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5RC139D8 = $mol_type_enforce<
		`Li-Mg-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6N6LOB3L = $mol_type_enforce<
		`Lu-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4FKM2JPQ = $mol_type_enforce<
		`Eu-Hf-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__810Z34A8 = $mol_type_enforce<
		`Li-Gd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__652IJYJY = $mol_type_enforce<
		`Er-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E5LISAHH = $mol_type_enforce<
		`Yb-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z1TTSJQB = $mol_type_enforce<
		`La-Eu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YX78RKZJ = $mol_type_enforce<
		`Gd-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H06ABTJ7 = $mol_type_enforce<
		`Cs-Li-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U43J4HIV = $mol_type_enforce<
		`La-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CNYP344V = $mol_type_enforce<
		`Rb-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6VWVBUGV = $mol_type_enforce<
		`La-Pr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YN65QX71 = $mol_type_enforce<
		`Nd-Gd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KK0SZ76B = $mol_type_enforce<
		`Th-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W99MCW6F = $mol_type_enforce<
		`Na-Mg-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SPU3QFJJ = $mol_type_enforce<
		`Ce-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U9ZLGS18 = $mol_type_enforce<
		`Eu-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S45MVBVV = $mol_type_enforce<
		`Na-Be-Al`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D4LS2X2E = $mol_type_enforce<
		`Yb-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2OQCWJ8W = $mol_type_enforce<
		`Gd-Dy-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U3CDOCCO = $mol_type_enforce<
		`Pm-Sm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N46QPIIT = $mol_type_enforce<
		`Cs-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4CIB25TJ = $mol_type_enforce<
		`Pm-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YYZXKCAR = $mol_type_enforce<
		`Gd-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__88RUZ40D = $mol_type_enforce<
		`Cs-K-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FEQ1LBMZ = $mol_type_enforce<
		`Tb-Yb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EX49KHIR = $mol_type_enforce<
		`K-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9X003602 = $mol_type_enforce<
		`La-Yb-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V1240V5R = $mol_type_enforce<
		`Rb-Li-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AH3M6IV3 = $mol_type_enforce<
		`Li-Gd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EZQMR02D = $mol_type_enforce<
		`La-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XJXH0YHC = $mol_type_enforce<
		`Ce-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__100SK1OL = $mol_type_enforce<
		`Ba-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CASIZOWQ = $mol_type_enforce<
		`Ba-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HY3R9LB7 = $mol_type_enforce<
		`Cu-Ni-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L8OFWI16 = $mol_type_enforce<
		`Nd-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H7BBS8VP = $mol_type_enforce<
		`Cd-Si-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OGFXM9KZ = $mol_type_enforce<
		`Nd-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U4OSBKQV = $mol_type_enforce<
		`Tb-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G0P3ZE5W = $mol_type_enforce<
		`Pr-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__48Y1ICWH = $mol_type_enforce<
		`U-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7B4DA803 = $mol_type_enforce<
		`Nd-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4BZNGE83 = $mol_type_enforce<
		`Fe-Pd-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QADCGED9 = $mol_type_enforce<
		`Na-Li-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MWLLJOBB = $mol_type_enforce<
		`Ba-Ca-Yb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QVVL3RCZ = $mol_type_enforce<
		`Sm-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FD8QKTR8 = $mol_type_enforce<
		`Ca-La-Eu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TOKSRRYZ = $mol_type_enforce<
		`Ca-La-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__64NTV4UB = $mol_type_enforce<
		`Mn-Co-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UI4IDWLC = $mol_type_enforce<
		`Nd-Sm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FHOM3S5G = $mol_type_enforce<
		`Tc-Pd-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E5LCYHWW = $mol_type_enforce<
		`Cs-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X7PCLX9N = $mol_type_enforce<
		`Ca-Eu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UR8QCOB8 = $mol_type_enforce<
		`Li-La-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RIMGTC3O = $mol_type_enforce<
		`Ni-Ir-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VDTD8LAF = $mol_type_enforce<
		`Fe-Ni-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LG9JY18V = $mol_type_enforce<
		`Pu-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__203TGG8U = $mol_type_enforce<
		`Yb-Y-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SNBS6Y9S = $mol_type_enforce<
		`Eu-Y-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KZJ9NEVD = $mol_type_enforce<
		`Re-Ni-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6X14AWTD = $mol_type_enforce<
		`Pm-Sm-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9HMIQT1K = $mol_type_enforce<
		`Cu-Re-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DZTH9DAX = $mol_type_enforce<
		`Lu-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FOMBKZW1 = $mol_type_enforce<
		`Tm-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9QW3D5G5 = $mol_type_enforce<
		`Ce-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OH3PMXRK = $mol_type_enforce<
		`Ca-Ce-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__090J5RUR = $mol_type_enforce<
		`Ce-Sm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1EWY5J9M = $mol_type_enforce<
		`Re-Tc-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ONAGWN55 = $mol_type_enforce<
		`Ag-Ru-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PSQW6UI3 = $mol_type_enforce<
		`Mg-Cr-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9ZQ5WATW = $mol_type_enforce<
		`Ba-Ca-La`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VBSYZB2Q = $mol_type_enforce<
		`Ca-Yb-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KEO33D7E = $mol_type_enforce<
		`Ni-Os-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PYMJK9G6 = $mol_type_enforce<
		`Tl-Cd-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XSISE7MJ = $mol_type_enforce<
		`Mg-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HV2B113D = $mol_type_enforce<
		`Ba-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F2QGWRG0 = $mol_type_enforce<
		`Fe-Ru-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0MRJAEAV = $mol_type_enforce<
		`Pr-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__244P5NX9 = $mol_type_enforce<
		`Nd-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3O1J0UU5 = $mol_type_enforce<
		`Ho-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ASSDZ1L4 = $mol_type_enforce<
		`Ce-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4P0HJMVJ = $mol_type_enforce<
		`Ce-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7HTS30AF = $mol_type_enforce<
		`Eu-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QBQ1G8E1 = $mol_type_enforce<
		`Tb-Sm-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V39WXWMQ = $mol_type_enforce<
		`Ce-Pr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WABXWZEE = $mol_type_enforce<
		`Sc-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4TZ84OTH = $mol_type_enforce<
		`Sm-Dy-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2384ILLC = $mol_type_enforce<
		`Pm-Dy-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__19PRUQ9I = $mol_type_enforce<
		`Er-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LJX5B4WE = $mol_type_enforce<
		`La-Gd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PSSROKS4 = $mol_type_enforce<
		`La-Mn-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8WI13K41 = $mol_type_enforce<
		`Ba-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2LQUYA3C = $mol_type_enforce<
		`Tb-Ce-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6N0KKTWM = $mol_type_enforce<
		`Ag-Ru-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CF7XZT7R = $mol_type_enforce<
		`Ba-Pr-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M42UU1RW = $mol_type_enforce<
		`Yb-Dy-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9XSRB2PN = $mol_type_enforce<
		`La-Pr-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y2Q2640F = $mol_type_enforce<
		`Li-Ta-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q5PABP10 = $mol_type_enforce<
		`La-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SHQX2EK0 = $mol_type_enforce<
		`Tl-V-In`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SHF00XRS = $mol_type_enforce<
		`Tb-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BP3QSYXL = $mol_type_enforce<
		`La-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__13UHRP42 = $mol_type_enforce<
		`Ru-Pt-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2Q5PXR3E = $mol_type_enforce<
		`Sm-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HZ3DYJUM = $mol_type_enforce<
		`Tm-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M7A54D8K = $mol_type_enforce<
		`Ce-Er-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__51CF10XS = $mol_type_enforce<
		`Cr-W-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K7RPU9XY = $mol_type_enforce<
		`Yb-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ID6AHSLB = $mol_type_enforce<
		`La-Eu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WCFCGIMW = $mol_type_enforce<
		`Pr-Nd-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BK7V8OLB = $mol_type_enforce<
		`Li-Nb-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EI92R7DN = $mol_type_enforce<
		`Cu-Pt-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y16M1HJV = $mol_type_enforce<
		`Ni-Ag-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WAJIT4GG = $mol_type_enforce<
		`Yb-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y0JSQM67 = $mol_type_enforce<
		`Li-Pm-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L05JLPOR = $mol_type_enforce<
		`Cs-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KGT63A1Q = $mol_type_enforce<
		`Y-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SEOC8I8L = $mol_type_enforce<
		`Fe-Ag-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QPP2X3LK = $mol_type_enforce<
		`Hf-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8MA0SU9R = $mol_type_enforce<
		`La-Sm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3R5AGV71 = $mol_type_enforce<
		`Er-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GEGPKA49 = $mol_type_enforce<
		`Ir-Os-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8L5OKI9P = $mol_type_enforce<
		`Dy-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W9PCTX9J = $mol_type_enforce<
		`Ba-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IKZHCI6S = $mol_type_enforce<
		`Ag-Pd-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__951PLRAZ = $mol_type_enforce<
		`K-Rb-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JHRBUBR5 = $mol_type_enforce<
		`Pr-Sm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R873SI1O = $mol_type_enforce<
		`Nd-Dy-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7VMY39KY = $mol_type_enforce<
		`Li-Pm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P8DNNUKT = $mol_type_enforce<
		`Ba-Yb-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SLBZ96M1 = $mol_type_enforce<
		`Tb-Pm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M8JIR6MH = $mol_type_enforce<
		`La-Pm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HL8LNKQM = $mol_type_enforce<
		`Sm-Dy-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VVLLHAW7 = $mol_type_enforce<
		`V-Cr-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RP2APHBM = $mol_type_enforce<
		`Tb-Pm-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WXUY5X59 = $mol_type_enforce<
		`Ho-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8MG37CWP = $mol_type_enforce<
		`Ba-Yb-Eu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__COS3EDHW = $mol_type_enforce<
		`La-Sm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P0NJOG9E = $mol_type_enforce<
		`Li-Tb-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WGFRQZ6J = $mol_type_enforce<
		`Tb-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KQLZW95Z = $mol_type_enforce<
		`Na-Mg-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TK4F6TIA = $mol_type_enforce<
		`Pr-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__26NB0TD4 = $mol_type_enforce<
		`Ce-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__86Y2WVHM = $mol_type_enforce<
		`Er-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KFAO4RPV = $mol_type_enforce<
		`Gd-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XADB5AOD = $mol_type_enforce<
		`Tb-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RZXVA4R4 = $mol_type_enforce<
		`Nd-Gd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GJ83QBG5 = $mol_type_enforce<
		`Li-Pr-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5DUTVQK1 = $mol_type_enforce<
		`Cr-Ag-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DMUPC0B9 = $mol_type_enforce<
		`Lu-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YJ37ECIU = $mol_type_enforce<
		`Nb-Hg-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ML6MHV4U = $mol_type_enforce<
		`Tb-Gd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IFYVIBXI = $mol_type_enforce<
		`La-Yb-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C0DEWJW6 = $mol_type_enforce<
		`Fe-Ir-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__53PZQO1N = $mol_type_enforce<
		`Sm-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UD75OUDQ = $mol_type_enforce<
		`Th-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IPTM8L2K = $mol_type_enforce<
		`Tb-Gd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YW3JT3XA = $mol_type_enforce<
		`Tb-Pm-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0B0DE5XQ = $mol_type_enforce<
		`Pr-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J7RQ9PMG = $mol_type_enforce<
		`Er-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QERDZQC2 = $mol_type_enforce<
		`Th-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4BCSX8YQ = $mol_type_enforce<
		`Y-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W35YZMSU = $mol_type_enforce<
		`La-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EDRD5ATM = $mol_type_enforce<
		`Ga-Hg-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VRXTT1RN = $mol_type_enforce<
		`U-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7TDE86FG = $mol_type_enforce<
		`Ce-Pr-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4X6JDRQI = $mol_type_enforce<
		`Ho-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P9KN2V0N = $mol_type_enforce<
		`Pm-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PUUDVD5W = $mol_type_enforce<
		`Li-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P3H2RY4G = $mol_type_enforce<
		`Cr-Fe-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0SVKLZ4L = $mol_type_enforce<
		`Rb-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NLT402MB = $mol_type_enforce<
		`Ce-Pr-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JN6JJG9P = $mol_type_enforce<
		`Li-Pr-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6C9OGUV3 = $mol_type_enforce<
		`Yb-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UGN1ADLF = $mol_type_enforce<
		`La-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UQ8ZO8RF = $mol_type_enforce<
		`Pm-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IUIFI4FA = $mol_type_enforce<
		`Hg-Bi-Sb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N93MEPZM = $mol_type_enforce<
		`Ce-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LRXJFUE0 = $mol_type_enforce<
		`K-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K5U07QWQ = $mol_type_enforce<
		`Ca-Eu-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1I1VE7X2 = $mol_type_enforce<
		`Y-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BYRV8KDB = $mol_type_enforce<
		`Nd-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LQGSI9P7 = $mol_type_enforce<
		`Ag-Ir-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LS3WMC3E = $mol_type_enforce<
		`Ni-Ru-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OJZ8VGOI = $mol_type_enforce<
		`Li-Nd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__91VLMVOY = $mol_type_enforce<
		`Cs-Rb-Li`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VL5Z8LZH = $mol_type_enforce<
		`Na-Li-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T5R5JJJK = $mol_type_enforce<
		`Gd-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NP3PWSWL = $mol_type_enforce<
		`Co-Ag-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZJT2NHCD = $mol_type_enforce<
		`B-Sb-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6X48MDUE = $mol_type_enforce<
		`Pr-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XZGG7IQ9 = $mol_type_enforce<
		`La-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5EO4QH9A = $mol_type_enforce<
		`Tb-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QUFK5649 = $mol_type_enforce<
		`Re-Ni-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XL2OFIB4 = $mol_type_enforce<
		`Yb-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YAYDWAH7 = $mol_type_enforce<
		`Pm-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5DDMWVT9 = $mol_type_enforce<
		`La-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7HQJ22L5 = $mol_type_enforce<
		`Be-Si-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7YUGIWSQ = $mol_type_enforce<
		`Cr-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UH4B22NL = $mol_type_enforce<
		`Ce-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BH9NFA74 = $mol_type_enforce<
		`Ce-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W50YQSYE = $mol_type_enforce<
		`Li-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ACTQYURJ = $mol_type_enforce<
		`Tb-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F4VTML7L = $mol_type_enforce<
		`Tb-Sm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CLYYVNQT = $mol_type_enforce<
		`Pm-Nd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JDZD7GUP = $mol_type_enforce<
		`Sc-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4O0BRSS9 = $mol_type_enforce<
		`Li-Nd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3ZBFMRWG = $mol_type_enforce<
		`La-Nd-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__45JTTTJW = $mol_type_enforce<
		`La-Yb-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6WU5KKAY = $mol_type_enforce<
		`Ce-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I9HYF4CV = $mol_type_enforce<
		`Rb-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__16WG1YFI = $mol_type_enforce<
		`La-Cr-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__29UECR9T = $mol_type_enforce<
		`Ce-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1R9YB46A = $mol_type_enforce<
		`Zr-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8J0ISPML = $mol_type_enforce<
		`Lu-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L0Z27WG6 = $mol_type_enforce<
		`Sm-Dy-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R5KTU36N = $mol_type_enforce<
		`Nd-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NIVKP0EZ = $mol_type_enforce<
		`Nd-Dy-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LRSF31J2 = $mol_type_enforce<
		`Pm-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CLDHSEME = $mol_type_enforce<
		`Na-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7TOLXPFK = $mol_type_enforce<
		`Pr-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NF0JEYRV = $mol_type_enforce<
		`La-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CZ9F64KI = $mol_type_enforce<
		`Al-Ga-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4YBEMCVO = $mol_type_enforce<
		`La-Pm-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NZ4GF2ZT = $mol_type_enforce<
		`Sm-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3W81HECC = $mol_type_enforce<
		`Gd-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GZJ9GDYI = $mol_type_enforce<
		`Nd-Sm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MP31I9E5 = $mol_type_enforce<
		`Tb-Pm-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JJSYFO9Z = $mol_type_enforce<
		`Al-Hg-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MAK69LK1 = $mol_type_enforce<
		`V-Hg-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YY3CZ4ST = $mol_type_enforce<
		`Pm-Pr-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q28UMV2H = $mol_type_enforce<
		`Ce-Th-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PGOBBKWP = $mol_type_enforce<
		`K-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8CO756SW = $mol_type_enforce<
		`Pr-Dy-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WPVWMOQI = $mol_type_enforce<
		`Li-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B0YNRWBV = $mol_type_enforce<
		`La-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A5ZYKS8K = $mol_type_enforce<
		`Dy-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F33G56MM = $mol_type_enforce<
		`Lu-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DGCVWAOA = $mol_type_enforce<
		`Nd-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W6XTM81X = $mol_type_enforce<
		`Pr-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7OFUE2ZJ = $mol_type_enforce<
		`La-Pm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__92K1929X = $mol_type_enforce<
		`Tl-Cd-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CUE2XBNN = $mol_type_enforce<
		`Yb-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9X6SAUHZ = $mol_type_enforce<
		`Os-Pd-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N7RN7SLB = $mol_type_enforce<
		`Sm-Dy-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DQWB3VBN = $mol_type_enforce<
		`Pu-Np-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2K2WKC17 = $mol_type_enforce<
		`Nb-V-Hg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NVF5LZ9C = $mol_type_enforce<
		`Pr-Dy-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2P3BURRY = $mol_type_enforce<
		`Nd-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PA2VHVRI = $mol_type_enforce<
		`Ho-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KW572KZG = $mol_type_enforce<
		`Zr-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z2LO5KJN = $mol_type_enforce<
		`Pm-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FL35YKY0 = $mol_type_enforce<
		`V-Ag-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OREP0ZUA = $mol_type_enforce<
		`Pr-Dy-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7HCBHMDC = $mol_type_enforce<
		`Zn-Cd-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UPZUC89A = $mol_type_enforce<
		`Li-Sm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X8JSFLBG = $mol_type_enforce<
		`La-Tb-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RI8VGOJV = $mol_type_enforce<
		`Cr-Ni-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4JW4KTM6 = $mol_type_enforce<
		`La-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8KW3W1JC = $mol_type_enforce<
		`La-Ce-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DSEW4DDZ = $mol_type_enforce<
		`Yb-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B5I8I83Z = $mol_type_enforce<
		`Yb-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q8JGDOOP = $mol_type_enforce<
		`Na-Ca-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X2CSLM90 = $mol_type_enforce<
		`Co-Hg-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NMS47ETU = $mol_type_enforce<
		`Pm-Pr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OUZFEWUX = $mol_type_enforce<
		`Be-Si-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W2C4Q33E = $mol_type_enforce<
		`Sr-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1H2JG5KJ = $mol_type_enforce<
		`Yb-Gd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VYLEV86N = $mol_type_enforce<
		`V-Pd-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6W8CM74K = $mol_type_enforce<
		`Re-Ir-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C7814MFP = $mol_type_enforce<
		`Ce-Gd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KTBWPIB3 = $mol_type_enforce<
		`Li-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RRK031ZC = $mol_type_enforce<
		`Be-Zn-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W3D2ROI4 = $mol_type_enforce<
		`Y-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OVMNHAO2 = $mol_type_enforce<
		`Ga-Hg-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TL92EWQM = $mol_type_enforce<
		`Ba-Pr-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QN1EFGGE = $mol_type_enforce<
		`La-Tm-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9SB9THVM = $mol_type_enforce<
		`Li-Tb-Ce`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6NI499DK = $mol_type_enforce<
		`Yb-Eu-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YPHM4W49 = $mol_type_enforce<
		`Si-Ag-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BR93ZLKM = $mol_type_enforce<
		`Ce-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H8ZP3GC8 = $mol_type_enforce<
		`Gd-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G6EME1LE = $mol_type_enforce<
		`Th-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4P8H7HUA = $mol_type_enforce<
		`Ag-Ir-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RR7R3KVS = $mol_type_enforce<
		`Cu-Re-Tc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DVHEM49K = $mol_type_enforce<
		`Ce-Pm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N3W1STE7 = $mol_type_enforce<
		`Ba-Fe-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V9N7EM2T = $mol_type_enforce<
		`Ir-Os-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EJE5VR36 = $mol_type_enforce<
		`Cr-Cu-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4LKWYCW4 = $mol_type_enforce<
		`La-Ce-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DP6FBMYC = $mol_type_enforce<
		`Li-La-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5RGAX6RY = $mol_type_enforce<
		`Ca-Yb-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DL2RJ28N = $mol_type_enforce<
		`Fe-Pd-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R2ATVAVA = $mol_type_enforce<
		`Ce-Eu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TYXCSFFX = $mol_type_enforce<
		`Cs-Pr-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5TAUDZMR = $mol_type_enforce<
		`Nb-Cu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N24OARP3 = $mol_type_enforce<
		`Fe-Cu-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0PD9SLH4 = $mol_type_enforce<
		`Tb-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G26C3OW1 = $mol_type_enforce<
		`La-Th-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EUH2OHIT = $mol_type_enforce<
		`Sm-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D3KK5WI1 = $mol_type_enforce<
		`Yb-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__USTIKWPB = $mol_type_enforce<
		`Al-Zn-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RXSEUA2I = $mol_type_enforce<
		`Yb-Ho-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3ERNNPDD = $mol_type_enforce<
		`Cs-K-Li`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YCMR1X86 = $mol_type_enforce<
		`Pr-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VD42HVFF = $mol_type_enforce<
		`Fe-Co-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EO3AS1KR = $mol_type_enforce<
		`Tb-Pm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__529I4YBB = $mol_type_enforce<
		`Lu-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G0MW6JXK = $mol_type_enforce<
		`Y-Ho-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2ZDZTNOL = $mol_type_enforce<
		`Li-Ce-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UQHCQ3ET = $mol_type_enforce<
		`Sm-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5S8ERED6 = $mol_type_enforce<
		`Ni-Pd-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IUWIGP8N = $mol_type_enforce<
		`Sc-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SBK4ZYLT = $mol_type_enforce<
		`Zn-In-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JA7PB273 = $mol_type_enforce<
		`Y-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SKH2UXHM = $mol_type_enforce<
		`Ce-Eu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H329I1R0 = $mol_type_enforce<
		`Yb-Gd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1HW3X452 = $mol_type_enforce<
		`Tb-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AR2WNN23 = $mol_type_enforce<
		`Yb-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UOJOO4FS = $mol_type_enforce<
		`Tb-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__77R5F32A = $mol_type_enforce<
		`Ta-Tl-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SEUM5NPP = $mol_type_enforce<
		`Hg-Mo-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2GNTDPQV = $mol_type_enforce<
		`Sm-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OJAA7RRT = $mol_type_enforce<
		`Co-Re-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ASJEXFYE = $mol_type_enforce<
		`Co-Ag-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FWL2H9LM = $mol_type_enforce<
		`La-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2A0VQE53 = $mol_type_enforce<
		`Hf-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HXN5S1RR = $mol_type_enforce<
		`Fe-Ni-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QZVCRV81 = $mol_type_enforce<
		`Nb-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6H0W06MJ = $mol_type_enforce<
		`Gd-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YLMQGF7F = $mol_type_enforce<
		`Pd-Pt-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NRAIOYBZ = $mol_type_enforce<
		`Pm-Dy-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0YT8CRH8 = $mol_type_enforce<
		`Co-Ni-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RC0P94YY = $mol_type_enforce<
		`Gd-Dy-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U6YWGUVP = $mol_type_enforce<
		`Tm-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D7485E49 = $mol_type_enforce<
		`Nd-Dy-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XAC1PYBV = $mol_type_enforce<
		`Dy-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HCNQN1U4 = $mol_type_enforce<
		`Tb-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__73NU1CTO = $mol_type_enforce<
		`Nd-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RGW3ZZSV = $mol_type_enforce<
		`Sm-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ADYNDIGG = $mol_type_enforce<
		`Li-La-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W47QK4A7 = $mol_type_enforce<
		`Th-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__INW3JZFV = $mol_type_enforce<
		`Tb-Ce-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GKU9FODF = $mol_type_enforce<
		`Gd-Ho-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N81J4SIK = $mol_type_enforce<
		`Pr-Dy-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5AL0DFOA = $mol_type_enforce<
		`Hf-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ATMZI70B = $mol_type_enforce<
		`Ca-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WO3K8KH0 = $mol_type_enforce<
		`Ti-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NA8UW05A = $mol_type_enforce<
		`Co-Ir-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VEM45YKN = $mol_type_enforce<
		`Ba-Sr-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WLGQEQRJ = $mol_type_enforce<
		`Ba-Yb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IBQBOZ7M = $mol_type_enforce<
		`Yb-Th-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R9R2KZWC = $mol_type_enforce<
		`Li-Nd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J0O6YHO3 = $mol_type_enforce<
		`Ce-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OTSA2B6Q = $mol_type_enforce<
		`Co-Re-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A0USK6S8 = $mol_type_enforce<
		`Yb-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__23MBQB3E = $mol_type_enforce<
		`Re-Pd-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6BM0DVA9 = $mol_type_enforce<
		`Ni-Pd-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NUW2Z3AW = $mol_type_enforce<
		`Ho-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4RV3QWB3 = $mol_type_enforce<
		`Cr-Fe-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LI6I1Z1N = $mol_type_enforce<
		`Tb-Sm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D5DWJGPZ = $mol_type_enforce<
		`Ce-Gd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__43A799LY = $mol_type_enforce<
		`Li-Ce-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BWSZ0FEF = $mol_type_enforce<
		`Nd-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9WGR9NEX = $mol_type_enforce<
		`Li-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__38C89DBM = $mol_type_enforce<
		`Nd-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z5CDX6IS = $mol_type_enforce<
		`La-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8E6AV3SW = $mol_type_enforce<
		`La-Ce-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0WG8SDEW = $mol_type_enforce<
		`La-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L15JONXG = $mol_type_enforce<
		`Ag-Os-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4V0RKLKV = $mol_type_enforce<
		`Pt-W-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IKKLESW6 = $mol_type_enforce<
		`Cu-Bi-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GI4E1MF1 = $mol_type_enforce<
		`Pr-Nd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QJCK4DG3 = $mol_type_enforce<
		`Fe-Co-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EGG3HLZH = $mol_type_enforce<
		`Li-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7KWRWOV6 = $mol_type_enforce<
		`Y-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__10XEFZXK = $mol_type_enforce<
		`Be-Si-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C7K2SJ0Q = $mol_type_enforce<
		`Li-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P6ZPYBMX = $mol_type_enforce<
		`Th-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9H2H2VQH = $mol_type_enforce<
		`Ho-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4W0EG0UK = $mol_type_enforce<
		`Pm-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__684B29I4 = $mol_type_enforce<
		`Th-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DM2UUKFD = $mol_type_enforce<
		`Gd-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KPOUKKKJ = $mol_type_enforce<
		`Yb-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AEBOI895 = $mol_type_enforce<
		`Tm-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G5K47NGO = $mol_type_enforce<
		`Cs-Mg-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7NQOGVWY = $mol_type_enforce<
		`La-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LW1D9SGI = $mol_type_enforce<
		`Li-Nd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XI8L8UVR = $mol_type_enforce<
		`Co-Ag-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WZRB3S2T = $mol_type_enforce<
		`Ba-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YQ0AK7UT = $mol_type_enforce<
		`Pr-Gd-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5NV61C5O = $mol_type_enforce<
		`Ce-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V9OU94XA = $mol_type_enforce<
		`Tb-Dy-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RSO5CKPR = $mol_type_enforce<
		`Sr-Ca-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RPBZLR0V = $mol_type_enforce<
		`Nd-Sc-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4V8FKKRZ = $mol_type_enforce<
		`Li-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ABQ3APBQ = $mol_type_enforce<
		`Y-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BWASI9P8 = $mol_type_enforce<
		`Cr-Cu-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8W4DRAMT = $mol_type_enforce<
		`Fe-Os-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P07YG6AK = $mol_type_enforce<
		`Pm-Sm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KM8KDERM = $mol_type_enforce<
		`Cu-Pb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__083C98NJ = $mol_type_enforce<
		`Nd-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4L0FJJRW = $mol_type_enforce<
		`Pm-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__63FHCSDP = $mol_type_enforce<
		`Ce-Nd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3VV39713 = $mol_type_enforce<
		`Fe-Ni-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JSWGEYF4 = $mol_type_enforce<
		`U-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MQ5BYBE9 = $mol_type_enforce<
		`Nd-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S8BT6APH = $mol_type_enforce<
		`Dy-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y6V4WSHX = $mol_type_enforce<
		`Ce-Pu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S2M18JPP = $mol_type_enforce<
		`La-Ce-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WQSOGAOE = $mol_type_enforce<
		`Tm-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OCJUKY45 = $mol_type_enforce<
		`La-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ETE6B7X7 = $mol_type_enforce<
		`Ba-La-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SIOSR28X = $mol_type_enforce<
		`Tm-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2HF58XGB = $mol_type_enforce<
		`Eu-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LIZL2ONO = $mol_type_enforce<
		`Yb-Y-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QWUQ8SSG = $mol_type_enforce<
		`La-Yb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IWIZ2JRK = $mol_type_enforce<
		`Hf-Th-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FCSBW1P1 = $mol_type_enforce<
		`Nd-Sm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VB6NA2TE = $mol_type_enforce<
		`Na-Hf-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I74SO00W = $mol_type_enforce<
		`Fe-Ag-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D41HZYPO = $mol_type_enforce<
		`Li-Pu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QI670K5W = $mol_type_enforce<
		`Pr-Sm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UBOKL3SB = $mol_type_enforce<
		`Tb-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VOS60SW2 = $mol_type_enforce<
		`Sm-Gd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NM7UP8UV = $mol_type_enforce<
		`Co-Cu-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0TH854DS = $mol_type_enforce<
		`Re-Ag-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QV574I92 = $mol_type_enforce<
		`Ru-Rh-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DZP0U2QW = $mol_type_enforce<
		`Mn-Tl-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RYZZ6HQX = $mol_type_enforce<
		`Pr-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZHU0WZX9 = $mol_type_enforce<
		`La-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YBE8RVG6 = $mol_type_enforce<
		`Dy-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1NH9Y2L1 = $mol_type_enforce<
		`Ta-In-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LDNDARLF = $mol_type_enforce<
		`Be-In-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5W7HQI4T = $mol_type_enforce<
		`Y-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EW5HP3MR = $mol_type_enforce<
		`Cd-Bi-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P4PY3JJX = $mol_type_enforce<
		`Yb-Dy-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6WEYWDR2 = $mol_type_enforce<
		`Na-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KNJRHAHS = $mol_type_enforce<
		`Ba-Nd-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OAFRSWTM = $mol_type_enforce<
		`Ca-Mn-Co`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6HDSR7M5 = $mol_type_enforce<
		`Li-Nd-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DIBK8VKN = $mol_type_enforce<
		`Co-Os-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__30E6PPG2 = $mol_type_enforce<
		`Co-Ru-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J2QG7JDR = $mol_type_enforce<
		`Yb-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QZSAX7ZD = $mol_type_enforce<
		`K-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XLI6JA5U = $mol_type_enforce<
		`Tb-Yb-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MZX8ZLOS = $mol_type_enforce<
		`Tb-Yb-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TBUUHZ5S = $mol_type_enforce<
		`Sc-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WTQRPINY = $mol_type_enforce<
		`Fe-Co-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HERPMA2A = $mol_type_enforce<
		`Fe-Cu-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__REV1L5BP = $mol_type_enforce<
		`Hf-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JFY0RPIF = $mol_type_enforce<
		`Tb-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0V28NZ1Z = $mol_type_enforce<
		`Hg-Ge-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S68ZLZPB = $mol_type_enforce<
		`K-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MGFRKWGT = $mol_type_enforce<
		`Li-La-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EMSZHUT0 = $mol_type_enforce<
		`Er-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NW9Y5WMP = $mol_type_enforce<
		`K-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__01NWZFGD = $mol_type_enforce<
		`Ce-Y-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IXRWEN0Z = $mol_type_enforce<
		`Gd-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C1PAIQI8 = $mol_type_enforce<
		`Li-Tb-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R8CXU0LS = $mol_type_enforce<
		`Fe-Cu-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TK2R8UL6 = $mol_type_enforce<
		`Cu-Os-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7I14JJAP = $mol_type_enforce<
		`Tb-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2D6KPGSZ = $mol_type_enforce<
		`Pr-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R4P4UHBF = $mol_type_enforce<
		`Li-Y-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MOZ8HMKN = $mol_type_enforce<
		`Dy-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__452ULZR1 = $mol_type_enforce<
		`Na-Cu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2OQHC5Y2 = $mol_type_enforce<
		`Yb-Eu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZOTX9IY3 = $mol_type_enforce<
		`Li-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OZT2QYOL = $mol_type_enforce<
		`Cs-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1EKWE0LQ = $mol_type_enforce<
		`Co-Cu-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__15P6AH1J = $mol_type_enforce<
		`Rb-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MJUGMHSQ = $mol_type_enforce<
		`Al-Ga-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZVT6Y0L8 = $mol_type_enforce<
		`V-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YV31Q33P = $mol_type_enforce<
		`Pm-Gd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V6IXLEV3 = $mol_type_enforce<
		`Li-La-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QHEIQF6I = $mol_type_enforce<
		`Ce-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5K8RYGBI = $mol_type_enforce<
		`Ce-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZA1IXKWX = $mol_type_enforce<
		`Ag-Rh-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PPBGG4M6 = $mol_type_enforce<
		`Ce-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XMRQJMFR = $mol_type_enforce<
		`Bi-B-Sb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7VVVN1K0 = $mol_type_enforce<
		`Ho-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N85APJ2D = $mol_type_enforce<
		`La-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FINCZE3X = $mol_type_enforce<
		`Tb-Dy-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GOS3IY0V = $mol_type_enforce<
		`Pm-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5KPZ8ZZZ = $mol_type_enforce<
		`Tb-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4XA8131L = $mol_type_enforce<
		`Zn-Cd-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZYMGS99B = $mol_type_enforce<
		`Ce-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MMQV1905 = $mol_type_enforce<
		`Sm-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7ZCJI80A = $mol_type_enforce<
		`Th-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V39RXATX = $mol_type_enforce<
		`Tb-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O6XHX6BD = $mol_type_enforce<
		`Pr-Sm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SIXONBHM = $mol_type_enforce<
		`La-Pr-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OV1A9L7V = $mol_type_enforce<
		`Ho-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HYVYZ941 = $mol_type_enforce<
		`Ag-Bi-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GKF3JRMD = $mol_type_enforce<
		`Li-Tb-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D0FOLCXA = $mol_type_enforce<
		`Sr-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RYR4SCRX = $mol_type_enforce<
		`Co-Re-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XYGUEE2H = $mol_type_enforce<
		`Y-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KDUHUP3V = $mol_type_enforce<
		`Ce-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OAVJXUHC = $mol_type_enforce<
		`Pm-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QKQI6T84 = $mol_type_enforce<
		`Sm-Dy-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HAQYKN8N = $mol_type_enforce<
		`Pd-Ru-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__40NXMR8K = $mol_type_enforce<
		`Hg-Bi-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5E1SARS1 = $mol_type_enforce<
		`Sc-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T2GR8M2O = $mol_type_enforce<
		`Yb-Pr-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9EQYW450 = $mol_type_enforce<
		`Al-Tl-In`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7KJ5IGJA = $mol_type_enforce<
		`Ho-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3K4ZSG8F = $mol_type_enforce<
		`Rb-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9O7695KE = $mol_type_enforce<
		`Tm-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HLLTL2Y1 = $mol_type_enforce<
		`Pr-Sm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UMVIA1TI = $mol_type_enforce<
		`Gd-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9DSKXY0D = $mol_type_enforce<
		`Mn-V-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CTM0I14K = $mol_type_enforce<
		`Cr-Cd-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YH06LI3T = $mol_type_enforce<
		`Tb-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q4NFZTR1 = $mol_type_enforce<
		`V-Ag-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GNQFHSK9 = $mol_type_enforce<
		`La-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YGKYFU82 = $mol_type_enforce<
		`La-Dy-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GUKSUCQH = $mol_type_enforce<
		`Li-Gd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3S1ODQZ2 = $mol_type_enforce<
		`Y-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z5UC8I9I = $mol_type_enforce<
		`Li-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZHPHA8AP = $mol_type_enforce<
		`Np-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0YSF94FY = $mol_type_enforce<
		`Ag-Mo-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ATNUBMDN = $mol_type_enforce<
		`Co-Hg-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OFH3J8NO = $mol_type_enforce<
		`Mn-Tl-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2TZZ34Q5 = $mol_type_enforce<
		`Eu-Y-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__39RG9UG2 = $mol_type_enforce<
		`Cu-Ir-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KVFII7PE = $mol_type_enforce<
		`Tb-Gd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__83GSE24Z = $mol_type_enforce<
		`Pr-Hf-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OOYPFBY5 = $mol_type_enforce<
		`Tb-Ce-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J30F1DJT = $mol_type_enforce<
		`Ag-Ir-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LQT7EAFS = $mol_type_enforce<
		`Tl-Zn-In`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UMDE4EFA = $mol_type_enforce<
		`Li-Sm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0LW724PU = $mol_type_enforce<
		`Nd-Sm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GF71WEKU = $mol_type_enforce<
		`Re-Ni-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WYJ3PFQE = $mol_type_enforce<
		`Yb-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3L8ITBP2 = $mol_type_enforce<
		`La-Dy-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7B4TKW8R = $mol_type_enforce<
		`Mn-Ru-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AKG56S43 = $mol_type_enforce<
		`Dy-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__458L0X17 = $mol_type_enforce<
		`Pr-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BU3C8F1I = $mol_type_enforce<
		`Sm-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OAVXFCIT = $mol_type_enforce<
		`Eu-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__92EQNZAX = $mol_type_enforce<
		`Y-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IW13I4GM = $mol_type_enforce<
		`Ce-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K14SR9RU = $mol_type_enforce<
		`Sn-Ge-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SSSG2535 = $mol_type_enforce<
		`Nd-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y0OA2XNI = $mol_type_enforce<
		`Hf-Sc-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5XRL33TN = $mol_type_enforce<
		`Tl-Ga-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4GT50GP4 = $mol_type_enforce<
		`Tm-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__49WGLH4I = $mol_type_enforce<
		`Fe-Ru-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4B37BLL3 = $mol_type_enforce<
		`Ho-Er-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WH4WJF4U = $mol_type_enforce<
		`Yb-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__39Q2O1C9 = $mol_type_enforce<
		`Nd-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M0ZP0UE1 = $mol_type_enforce<
		`Cs-Rb-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2YQN5DD8 = $mol_type_enforce<
		`Lu-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5SSIITFO = $mol_type_enforce<
		`Zn-Ga-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HUX915EH = $mol_type_enforce<
		`Pr-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q0PZTIHH = $mol_type_enforce<
		`La-Eu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MJZGZDVE = $mol_type_enforce<
		`Yb-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TR5FAFRU = $mol_type_enforce<
		`Yb-Gd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P4WXAGAL = $mol_type_enforce<
		`Tl-Ge-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GDT3CTOT = $mol_type_enforce<
		`Tb-Ce-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XCCS0YIR = $mol_type_enforce<
		`Gd-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7A3OKOAY = $mol_type_enforce<
		`La-Dy-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WESH4QXG = $mol_type_enforce<
		`Co-Re-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SC2MHPMW = $mol_type_enforce<
		`Yb-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KW107GEI = $mol_type_enforce<
		`Al-Zn-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1WBNJ7LK = $mol_type_enforce<
		`Tl-Ni-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N9Q2KM1E = $mol_type_enforce<
		`K-Rb-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z7ITU6ZP = $mol_type_enforce<
		`Y-Th-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S8FDUXRN = $mol_type_enforce<
		`Pm-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DR6JAANF = $mol_type_enforce<
		`Ce-Sm-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RNBVSD14 = $mol_type_enforce<
		`La-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8LEWSQW4 = $mol_type_enforce<
		`Ce-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GLT9R39T = $mol_type_enforce<
		`Na-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U53ZGK8N = $mol_type_enforce<
		`Tb-Ce-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O5X674J3 = $mol_type_enforce<
		`Sm-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LEB25QJ6 = $mol_type_enforce<
		`Cs-Li-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LVQFL299 = $mol_type_enforce<
		`Pr-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JM9Y39BK = $mol_type_enforce<
		`Dy-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VMWMYKK8 = $mol_type_enforce<
		`Ca-Fe-Co`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FCXWGEBF = $mol_type_enforce<
		`Lu-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__17ALSEMV = $mol_type_enforce<
		`Al-Ga-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WNP0UVB5 = $mol_type_enforce<
		`Pr-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4I45X3UT = $mol_type_enforce<
		`Na-Li-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DCK9645Y = $mol_type_enforce<
		`Ir-Ru-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VVIDGXWP = $mol_type_enforce<
		`Fe-Ru-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TTNFGTQT = $mol_type_enforce<
		`Ho-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HFUJLOL4 = $mol_type_enforce<
		`Lu-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3DJAZNR7 = $mol_type_enforce<
		`Pu-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DXTUCCU0 = $mol_type_enforce<
		`Lu-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N1ME1UHS = $mol_type_enforce<
		`Ca-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BC0H47YX = $mol_type_enforce<
		`La-Dy-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HTTJVMMD = $mol_type_enforce<
		`Ce-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__76F5YQ5A = $mol_type_enforce<
		`Li-La-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EIL0B47P = $mol_type_enforce<
		`Mn-V-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I17XCKM5 = $mol_type_enforce<
		`Ni-Ag-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4X2XLL86 = $mol_type_enforce<
		`Li-Tb-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5NY3MGC9 = $mol_type_enforce<
		`Cs-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HX2X84CX = $mol_type_enforce<
		`Li-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ROVWOXJ6 = $mol_type_enforce<
		`Cs-Pr-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EOEHY33D = $mol_type_enforce<
		`Hf-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7V8FBZ7D = $mol_type_enforce<
		`Sm-Th-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ONVH7WF6 = $mol_type_enforce<
		`Pr-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UEIJXNDG = $mol_type_enforce<
		`Yb-Dy-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8KQLY9P0 = $mol_type_enforce<
		`Tb-Gd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K3LB6EGQ = $mol_type_enforce<
		`La-Yb-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7SVXVV3K = $mol_type_enforce<
		`Mn-Tl-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HCUEI6VJ = $mol_type_enforce<
		`Yb-Pr-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2Y6U38YN = $mol_type_enforce<
		`La-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XGWAQET1 = $mol_type_enforce<
		`Ce-Pr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8NGQFKZC = $mol_type_enforce<
		`La-Nd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WYAGVON7 = $mol_type_enforce<
		`Ce-Y-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZSAFYNQF = $mol_type_enforce<
		`Ca-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QU7W30CL = $mol_type_enforce<
		`Tb-Pr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ICG7JU99 = $mol_type_enforce<
		`Dy-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__49BZYIQW = $mol_type_enforce<
		`Ni-Pt-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MYIZT3U1 = $mol_type_enforce<
		`Ni-Rh-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SVKFNINI = $mol_type_enforce<
		`Hf-Mg-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AFWYWY5L = $mol_type_enforce<
		`Ca-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HF7X0TKR = $mol_type_enforce<
		`Al-Hg-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P7YPHZ21 = $mol_type_enforce<
		`Nd-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GQ2TMGFY = $mol_type_enforce<
		`Li-Sm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y2OA3WSB = $mol_type_enforce<
		`Pm-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S7L161JN = $mol_type_enforce<
		`Ca-Yb-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XRBHTPEM = $mol_type_enforce<
		`Co-Cu-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__POAUL6SZ = $mol_type_enforce<
		`Li-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TKBH1QLY = $mol_type_enforce<
		`Er-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O3D3MUFR = $mol_type_enforce<
		`Sr-Mn-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MJIDDL0G = $mol_type_enforce<
		`Pr-Gd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZPC10305 = $mol_type_enforce<
		`Na-Li-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4UXJEGTT = $mol_type_enforce<
		`Na-V-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ILFOEJVC = $mol_type_enforce<
		`Na-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EASF8GFH = $mol_type_enforce<
		`Pd-W-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0LMWLT8S = $mol_type_enforce<
		`Li-Gd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VJAZLXKD = $mol_type_enforce<
		`Li-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__48NJQFMC = $mol_type_enforce<
		`Rb-Li-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CZBQMP5X = $mol_type_enforce<
		`Co-Hg-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2BY9DNOZ = $mol_type_enforce<
		`Dy-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EEWZCIGM = $mol_type_enforce<
		`La-Nd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PI7DPVQN = $mol_type_enforce<
		`Al-Sn-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__56V7CAPZ = $mol_type_enforce<
		`Na-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__27HHB5H7 = $mol_type_enforce<
		`Er-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JKBBFW8T = $mol_type_enforce<
		`Sr-Ca-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EPYDFMY9 = $mol_type_enforce<
		`Rb-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RY57JEUU = $mol_type_enforce<
		`Y-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XFKCC67B = $mol_type_enforce<
		`Tb-Nd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TXGNK2MJ = $mol_type_enforce<
		`Rb-Na-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZP2ZE8ZM = $mol_type_enforce<
		`Cd-Ga-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__78CO6N6M = $mol_type_enforce<
		`Ca-Tb-Yb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8KL9NY4M = $mol_type_enforce<
		`Sn-Ge-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3455JJOK = $mol_type_enforce<
		`Yb-Gd-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1VM6V8K3 = $mol_type_enforce<
		`Y-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6A5706OO = $mol_type_enforce<
		`Yb-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ULST4K85 = $mol_type_enforce<
		`Ce-Gd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__29C19MVN = $mol_type_enforce<
		`Ba-Sm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RR2WLERK = $mol_type_enforce<
		`Cr-Cd-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2OVCCQ8V = $mol_type_enforce<
		`La-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MZ7R97KN = $mol_type_enforce<
		`Ba-Mn-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1YB147P9 = $mol_type_enforce<
		`Gd-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0VE7MEOA = $mol_type_enforce<
		`Tb-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AKWITT68 = $mol_type_enforce<
		`Ba-Mn-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WC4NZ1FL = $mol_type_enforce<
		`Cu-Ni-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YUCGKZGN = $mol_type_enforce<
		`Lu-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OQBYKLNR = $mol_type_enforce<
		`Pr-Gd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__52R188YH = $mol_type_enforce<
		`Er-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JS7R2K84 = $mol_type_enforce<
		`La-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AK8JDQ8E = $mol_type_enforce<
		`Mn-Co-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SS9R5L99 = $mol_type_enforce<
		`Yb-Eu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5B7S8E2W = $mol_type_enforce<
		`Li-Pm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__URRS3NRU = $mol_type_enforce<
		`La-Sm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4W7AXMKC = $mol_type_enforce<
		`La-Eu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ET31XSN3 = $mol_type_enforce<
		`Sn-Ge-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XVPLMS57 = $mol_type_enforce<
		`La-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7GA5OVO6 = $mol_type_enforce<
		`Yb-Pr-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EKWVEP7U = $mol_type_enforce<
		`Ce-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ANTFGF1Q = $mol_type_enforce<
		`Rb-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3RYCKJNT = $mol_type_enforce<
		`Tl-Ag-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__79HOWMW6 = $mol_type_enforce<
		`Gd-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VG0QHZ4B = $mol_type_enforce<
		`Y-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VVYYFLVD = $mol_type_enforce<
		`Tb-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P8KGLA7E = $mol_type_enforce<
		`Fe-Ir-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9QKPV1FE = $mol_type_enforce<
		`Hg-Os-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8CLFCK0S = $mol_type_enforce<
		`Ba-Yb-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5DOERUJR = $mol_type_enforce<
		`Nd-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7L2B6E42 = $mol_type_enforce<
		`Ce-Sm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F1JYP7QU = $mol_type_enforce<
		`Ba-Pr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4DU3KAF3 = $mol_type_enforce<
		`La-Pr-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XCQBV20A = $mol_type_enforce<
		`Rb-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N4JDT94T = $mol_type_enforce<
		`Ba-Ca-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U2B5YRPQ = $mol_type_enforce<
		`La-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q7MTR5M3 = $mol_type_enforce<
		`Lu-Th-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C5N0TPVG = $mol_type_enforce<
		`Al-Ge-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VQY133XW = $mol_type_enforce<
		`Li-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ILM2MSJ8 = $mol_type_enforce<
		`K-Mg-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PEZU1DJJ = $mol_type_enforce<
		`Hg-Ir-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X8UIU74Y = $mol_type_enforce<
		`Nd-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TMF5IXL4 = $mol_type_enforce<
		`Cs-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6JESBHT4 = $mol_type_enforce<
		`Cu-Pd-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__45GV9BAM = $mol_type_enforce<
		`Yb-Dy-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KZ5VRULY = $mol_type_enforce<
		`Dy-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZAKWJ6YX = $mol_type_enforce<
		`Hg-Ge-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KXYVAKHH = $mol_type_enforce<
		`Cu-Ni-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q4VB9J21 = $mol_type_enforce<
		`Y-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__60F7K21M = $mol_type_enforce<
		`Sm-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GXSDQ8NB = $mol_type_enforce<
		`Dy-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7DWD5H0X = $mol_type_enforce<
		`Tb-Nd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y1S8WVOD = $mol_type_enforce<
		`Ta-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__URAY7731 = $mol_type_enforce<
		`Tm-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V1KD62B0 = $mol_type_enforce<
		`Li-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__31BX101Z = $mol_type_enforce<
		`Nd-Gd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X7ZQG1I4 = $mol_type_enforce<
		`Na-Cr-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LA8QIWXD = $mol_type_enforce<
		`Li-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SIDP888F = $mol_type_enforce<
		`Tb-Pm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M7GABYPG = $mol_type_enforce<
		`Lu-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CQ66J7AR = $mol_type_enforce<
		`Th-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M3KJS1KZ = $mol_type_enforce<
		`Cd-Ge-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HOF8MFXE = $mol_type_enforce<
		`Th-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZIB0CVSB = $mol_type_enforce<
		`Yb-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AR3Y0C74 = $mol_type_enforce<
		`Nd-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YNTNU1X5 = $mol_type_enforce<
		`Al-Cd-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TPA1OEF9 = $mol_type_enforce<
		`Tb-Nd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__19L99X2Y = $mol_type_enforce<
		`Ag-Os-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YGEARDTS = $mol_type_enforce<
		`Yb-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X2V3C5AT = $mol_type_enforce<
		`Ce-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BKB46TXR = $mol_type_enforce<
		`Co-Hg-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UY8HDZYD = $mol_type_enforce<
		`Ba-Sr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V0QPMYZP = $mol_type_enforce<
		`Nd-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NXM3KU71 = $mol_type_enforce<
		`Tb-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FLDHZVRX = $mol_type_enforce<
		`Tb-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IDBQXN4T = $mol_type_enforce<
		`Re-Ni-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P1BM5UPR = $mol_type_enforce<
		`Y-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__68TEFYO2 = $mol_type_enforce<
		`Yb-Gd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J4I4MF0L = $mol_type_enforce<
		`Sc-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TEYQES3I = $mol_type_enforce<
		`Ce-Sm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9BJ2VI6M = $mol_type_enforce<
		`Pr-Gd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IX9WUU9S = $mol_type_enforce<
		`Nd-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__05IJTE00 = $mol_type_enforce<
		`Dy-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XNP1G9G8 = $mol_type_enforce<
		`Ca-La-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SW7PJDC9 = $mol_type_enforce<
		`Ce-Lu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1RMP8W9J = $mol_type_enforce<
		`Cu-Ru-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EMN2JE2Y = $mol_type_enforce<
		`Si-Sn-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X0CBQTE0 = $mol_type_enforce<
		`Cu-Re-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7VD1QNRR = $mol_type_enforce<
		`Ga-Ge-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AO5D1EOU = $mol_type_enforce<
		`La-Eu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2ZZBIRMV = $mol_type_enforce<
		`Tb-Ce-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P0D2VGB1 = $mol_type_enforce<
		`Yb-Pr-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IE6IYIZ4 = $mol_type_enforce<
		`K-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZD1ELDN7 = $mol_type_enforce<
		`K-V-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__THSP6URS = $mol_type_enforce<
		`Lu-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IBZUV76N = $mol_type_enforce<
		`Pm-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5UUVPN7V = $mol_type_enforce<
		`Pr-Sm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4KR1BVXS = $mol_type_enforce<
		`Al-Si-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RMSH2P13 = $mol_type_enforce<
		`Sm-Gd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KNEA4XFS = $mol_type_enforce<
		`Ni-Ir-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CJMXI5DF = $mol_type_enforce<
		`Cu-Re-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LM1FSR8K = $mol_type_enforce<
		`Tl-Ge-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0LH8CL3G = $mol_type_enforce<
		`Ba-Pm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VR8UM14W = $mol_type_enforce<
		`Yb-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YYTR32H3 = $mol_type_enforce<
		`Fe-Bi-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XO3HY62F = $mol_type_enforce<
		`Yb-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NBCUUN84 = $mol_type_enforce<
		`Cs-Pr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LD0INVBM = $mol_type_enforce<
		`Ca-Tb-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M105W65N = $mol_type_enforce<
		`Li-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UTYN84X4 = $mol_type_enforce<
		`Tb-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OCCEYMGT = $mol_type_enforce<
		`Ca-La-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3M2IEWOJ = $mol_type_enforce<
		`Gd-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__51ZXY7UB = $mol_type_enforce<
		`Gd-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UOS6V94Z = $mol_type_enforce<
		`Nd-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6LGC2720 = $mol_type_enforce<
		`Tb-Yb-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CW3JQ14P = $mol_type_enforce<
		`La-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KWT9S966 = $mol_type_enforce<
		`Pm-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EGOYG0D3 = $mol_type_enforce<
		`Ba-Ca-Eu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TNQ4CLVA = $mol_type_enforce<
		`La-Ce-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B8EGQ04K = $mol_type_enforce<
		`U-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C4KGWIWE = $mol_type_enforce<
		`Ca-Ce-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__INICORL6 = $mol_type_enforce<
		`Ho-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y2MF7QRJ = $mol_type_enforce<
		`Y-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L9HP47YT = $mol_type_enforce<
		`Gd-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3TMV30MC = $mol_type_enforce<
		`Yb-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5LBKET3I = $mol_type_enforce<
		`La-Eu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N8W817B3 = $mol_type_enforce<
		`Rb-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R0YNUXWO = $mol_type_enforce<
		`Li-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JL9YIBLZ = $mol_type_enforce<
		`Pm-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BVQONYXO = $mol_type_enforce<
		`Li-Hf-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GU09CL68 = $mol_type_enforce<
		`Sr-V-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GI38V6H1 = $mol_type_enforce<
		`Pm-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GZZLNNF5 = $mol_type_enforce<
		`Er-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TNQOX7IR = $mol_type_enforce<
		`Ca-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BL3YHU8B = $mol_type_enforce<
		`Li-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O9UFYJEY = $mol_type_enforce<
		`Ba-Ca-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__756DA5WL = $mol_type_enforce<
		`Tb-Pm-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q2N4O5NH = $mol_type_enforce<
		`Sm-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SQ418WAH = $mol_type_enforce<
		`Ce-Eu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RHASMOML = $mol_type_enforce<
		`Nd-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HJPJA0A5 = $mol_type_enforce<
		`Fe-Co-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IFH3O1DB = $mol_type_enforce<
		`Gd-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4G3MSRY1 = $mol_type_enforce<
		`Cs-Mg-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LLWW3OX6 = $mol_type_enforce<
		`Ho-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TY9QLPWY = $mol_type_enforce<
		`Y-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LE8MNBSN = $mol_type_enforce<
		`Li-La-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U0RTIL3X = $mol_type_enforce<
		`Li-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__54O70T90 = $mol_type_enforce<
		`Ce-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VDB76JZY = $mol_type_enforce<
		`Li-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FYNFAI43 = $mol_type_enforce<
		`Yb-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K925C3LO = $mol_type_enforce<
		`K-Rb-Li`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UT2ZTO4J = $mol_type_enforce<
		`Er-Hf-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TE490223 = $mol_type_enforce<
		`Cu-Tc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QUT9RCB2 = $mol_type_enforce<
		`Ni-Rh-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S6I3UWYB = $mol_type_enforce<
		`Ni-Ag-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YU216VDC = $mol_type_enforce<
		`Cr-Fe-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LQSA5D85 = $mol_type_enforce<
		`Y-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4TQ30084 = $mol_type_enforce<
		`Tb-Nd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HRLP2WEK = $mol_type_enforce<
		`Dy-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UNF8T5TY = $mol_type_enforce<
		`Rb-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S3S8FG7Z = $mol_type_enforce<
		`Li-Tb-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WZM2YJEA = $mol_type_enforce<
		`Sm-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TPOQSGWA = $mol_type_enforce<
		`Ir-Pd-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HY5P5V9K = $mol_type_enforce<
		`Pm-Nd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q1YF60IM = $mol_type_enforce<
		`Ba-Pm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EU4I1A5V = $mol_type_enforce<
		`Y-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VZ14QHE6 = $mol_type_enforce<
		`Nd-Gd-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GO8LS7GY = $mol_type_enforce<
		`Th-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B3ET02LP = $mol_type_enforce<
		`K-Mg-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q9G63B77 = $mol_type_enforce<
		`Ni-Pt-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JU1FMKK9 = $mol_type_enforce<
		`Cu-Pd-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DNY8D6Z1 = $mol_type_enforce<
		`Gd-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z16OIZGY = $mol_type_enforce<
		`Co-Ag-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L6MECVUK = $mol_type_enforce<
		`Li-Ce-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B1YQXY3W = $mol_type_enforce<
		`Tm-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7IN4SHL2 = $mol_type_enforce<
		`Pm-Dy-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DCNM0MGB = $mol_type_enforce<
		`Er-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__45UTQOXL = $mol_type_enforce<
		`Sm-Th-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JJQ27JXC = $mol_type_enforce<
		`Yb-Mn-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P4PF9GW8 = $mol_type_enforce<
		`K-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JQHUW74V = $mol_type_enforce<
		`Dy-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HA1DWKE9 = $mol_type_enforce<
		`La-Tb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SP13GEJH = $mol_type_enforce<
		`Yb-Nd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9FKQK5P9 = $mol_type_enforce<
		`Y-Ho-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ILAIXKEB = $mol_type_enforce<
		`Yb-Pu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__926MHXLG = $mol_type_enforce<
		`Ce-Pr-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D1M8Z1B7 = $mol_type_enforce<
		`Co-Re-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U58XHVFE = $mol_type_enforce<
		`Ce-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__453XVJLE = $mol_type_enforce<
		`Ag-Mo-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MUJN0QI3 = $mol_type_enforce<
		`Ca-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4U0K33UF = $mol_type_enforce<
		`Tl-Cu-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WZL17IUS = $mol_type_enforce<
		`Tb-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G81E93E5 = $mol_type_enforce<
		`Be-Sn-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A20P5BFI = $mol_type_enforce<
		`Y-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8SF6QB9X = $mol_type_enforce<
		`Nd-Dy-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QRUDU0RG = $mol_type_enforce<
		`Nd-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y99RSQCK = $mol_type_enforce<
		`Be-Zn-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F8N7LGAF = $mol_type_enforce<
		`La-Pr-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__REH4155P = $mol_type_enforce<
		`In-Ga-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UJIVHZ8V = $mol_type_enforce<
		`Li-Fe-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ESKOD9Y2 = $mol_type_enforce<
		`Ni-Ru-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__749KAJIB = $mol_type_enforce<
		`Gd-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8PNAQW1S = $mol_type_enforce<
		`Gd-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4DP14C3I = $mol_type_enforce<
		`Er-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__STR4AS8V = $mol_type_enforce<
		`Cu-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L03QH1JU = $mol_type_enforce<
		`Pm-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__92XYBL0N = $mol_type_enforce<
		`Hf-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__57V3LDZK = $mol_type_enforce<
		`Sc-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AFLGGFV0 = $mol_type_enforce<
		`Cr-Cd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ILD0T430 = $mol_type_enforce<
		`U-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6GOQPC0K = $mol_type_enforce<
		`Tb-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__78V112M0 = $mol_type_enforce<
		`Co-Cu-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KZDTVIDM = $mol_type_enforce<
		`Zn-Sn-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F5DR5S75 = $mol_type_enforce<
		`Pm-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4SRT49ZS = $mol_type_enforce<
		`Ba-Eu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F43ZDAHB = $mol_type_enforce<
		`Er-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E4MQPSU8 = $mol_type_enforce<
		`Ni-Ir-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XAXPP3YL = $mol_type_enforce<
		`Li-Mn-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J3OD7IQ5 = $mol_type_enforce<
		`Mg-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SJBNZTUM = $mol_type_enforce<
		`Gd-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EAFR771Q = $mol_type_enforce<
		`Co-Ni-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HO2742PW = $mol_type_enforce<
		`Yb-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7PQ7LL67 = $mol_type_enforce<
		`Yb-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1I0K09HR = $mol_type_enforce<
		`Cu-Ir-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8DZB0PSW = $mol_type_enforce<
		`Nd-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4NLNSTQV = $mol_type_enforce<
		`U-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NISKQB9U = $mol_type_enforce<
		`Sm-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BW0F01SI = $mol_type_enforce<
		`Mn-Ag-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SG342JQQ = $mol_type_enforce<
		`Pm-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PJLUY82T = $mol_type_enforce<
		`Er-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M5NXY2UZ = $mol_type_enforce<
		`Nd-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FT1A1LIS = $mol_type_enforce<
		`Sc-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O1HZ6HW5 = $mol_type_enforce<
		`Dy-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PQ9SN586 = $mol_type_enforce<
		`Eu-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7A4RLQET = $mol_type_enforce<
		`Y-Th-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WH2RY8TB = $mol_type_enforce<
		`Eu-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A2IBSYKY = $mol_type_enforce<
		`Nd-Gd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V9LD0EEE = $mol_type_enforce<
		`Cs-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AD0BLMCN = $mol_type_enforce<
		`La-Nd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5R7NU6A0 = $mol_type_enforce<
		`Nd-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EF54UNP2 = $mol_type_enforce<
		`Zn-Si-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MSRTJ4SH = $mol_type_enforce<
		`Mg-Cd-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PSH82NMI = $mol_type_enforce<
		`Re-Ag-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__REBHHYP1 = $mol_type_enforce<
		`Sr-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EFJX26NV = $mol_type_enforce<
		`Fe-Ag-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E8RLVKFL = $mol_type_enforce<
		`V-Cu-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H7HM7XHU = $mol_type_enforce<
		`Sm-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S1H1JMDT = $mol_type_enforce<
		`Ce-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9A6HOHLE = $mol_type_enforce<
		`Na-Fe-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F47WHK4E = $mol_type_enforce<
		`Li-Sm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D9VQTRWM = $mol_type_enforce<
		`Yb-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0Y6B70OK = $mol_type_enforce<
		`La-Yb-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G0H3HCV3 = $mol_type_enforce<
		`Li-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UA3AQR2M = $mol_type_enforce<
		`Tm-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T8Z91VDF = $mol_type_enforce<
		`Ta-Cu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__07W9RFML = $mol_type_enforce<
		`Tb-Pm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HY956Q1I = $mol_type_enforce<
		`Ni-Ag-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YMCTQNXT = $mol_type_enforce<
		`Pm-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EDSFGE14 = $mol_type_enforce<
		`Pu-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U66CJT5E = $mol_type_enforce<
		`Eu-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HLKQODJD = $mol_type_enforce<
		`Th-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z7MTLM6R = $mol_type_enforce<
		`K-Rb-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4W32BG2F = $mol_type_enforce<
		`Sm-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0CJZBMMQ = $mol_type_enforce<
		`Mg-Cd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FR8LT90K = $mol_type_enforce<
		`Tb-Pr-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GKSNYK4B = $mol_type_enforce<
		`Ce-Eu-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GHS3FM3B = $mol_type_enforce<
		`La-Nd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DH1UORQS = $mol_type_enforce<
		`Ru-Pt-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U5P4ZRR2 = $mol_type_enforce<
		`La-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KGRVKZFU = $mol_type_enforce<
		`Pm-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MJQ63SGS = $mol_type_enforce<
		`Yb-Th-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P4EMWDPK = $mol_type_enforce<
		`Ce-Pm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PM28XLZ6 = $mol_type_enforce<
		`Co-Ni-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HOOTYN3W = $mol_type_enforce<
		`Si-Sn-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1XMXY1JG = $mol_type_enforce<
		`Er-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6RXO7TP5 = $mol_type_enforce<
		`Os-Pd-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZP5BVYAP = $mol_type_enforce<
		`Hf-Mg-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LTC9TMJJ = $mol_type_enforce<
		`Mo-W-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q3Y34DFD = $mol_type_enforce<
		`Sm-Gd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H93RYEDN = $mol_type_enforce<
		`Ca-Tb-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RDKE151J = $mol_type_enforce<
		`Ho-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UMBV6KZV = $mol_type_enforce<
		`Fe-Co-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XNG87AYO = $mol_type_enforce<
		`La-Sm-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3SXNZXDP = $mol_type_enforce<
		`Be-Al-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QRKMC83X = $mol_type_enforce<
		`Er-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__632OJDT7 = $mol_type_enforce<
		`Sn-Bi-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EY364YZE = $mol_type_enforce<
		`Nd-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XMV0VXOX = $mol_type_enforce<
		`Eu-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z0UZJ6YU = $mol_type_enforce<
		`La-Nd-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N3RYYYZ1 = $mol_type_enforce<
		`Pm-Nd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QJLY0N44 = $mol_type_enforce<
		`Dy-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N1EPPSST = $mol_type_enforce<
		`Pm-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O9PO0D3Y = $mol_type_enforce<
		`Tl-Zn-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GJSS3FO0 = $mol_type_enforce<
		`Y-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EUQH6C0G = $mol_type_enforce<
		`Ba-Pm-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XHCFOD1D = $mol_type_enforce<
		`Ce-Pr-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V3ZW7A4L = $mol_type_enforce<
		`V-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GJF270X1 = $mol_type_enforce<
		`Ce-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EA9FO6OA = $mol_type_enforce<
		`Yb-Dy-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EWQC91NV = $mol_type_enforce<
		`La-Er-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JQB4S5R3 = $mol_type_enforce<
		`Li-Mg-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IMITSRT5 = $mol_type_enforce<
		`Y-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NKG9QRMV = $mol_type_enforce<
		`Sm-Y-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B8YCM88N = $mol_type_enforce<
		`Ce-Eu-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__03L2F7J8 = $mol_type_enforce<
		`Ag-Ge-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ER8L5O1X = $mol_type_enforce<
		`Sm-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5DQP23WO = $mol_type_enforce<
		`Na-Li-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8KVEDLEV = $mol_type_enforce<
		`Tb-Yb-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GEPNQYS2 = $mol_type_enforce<
		`Pr-Gd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UV523M12 = $mol_type_enforce<
		`Dy-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R8LAUF2T = $mol_type_enforce<
		`Er-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FWYVLXEA = $mol_type_enforce<
		`Na-Li-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J3G3I5I3 = $mol_type_enforce<
		`Pm-Nd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EIR58KQ4 = $mol_type_enforce<
		`La-Ce-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4QC7JGHC = $mol_type_enforce<
		`Dy-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R83NQXRO = $mol_type_enforce<
		`Ca-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8I9T24P0 = $mol_type_enforce<
		`Nd-Sm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OCC2TSSP = $mol_type_enforce<
		`Yb-Nd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MGGPD6V2 = $mol_type_enforce<
		`Li-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UU04I887 = $mol_type_enforce<
		`Ca-Ce-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W0CQCX04 = $mol_type_enforce<
		`Cs-Li-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2UHLUGQC = $mol_type_enforce<
		`Y-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KQPMROKU = $mol_type_enforce<
		`Sm-Dy-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AX753VO9 = $mol_type_enforce<
		`Ho-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DDOAS29B = $mol_type_enforce<
		`Dy-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AIO06DCQ = $mol_type_enforce<
		`Pu-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2WO805IK = $mol_type_enforce<
		`Ce-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3Y3Z6FRP = $mol_type_enforce<
		`Sm-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8639IQ9W = $mol_type_enforce<
		`La-Sm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GPJH5HY1 = $mol_type_enforce<
		`Yb-Nd-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__84C3EO76 = $mol_type_enforce<
		`Pr-Dy-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C2WOXS0F = $mol_type_enforce<
		`Ho-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OBAAKWSS = $mol_type_enforce<
		`Lu-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VIIJRTI9 = $mol_type_enforce<
		`Yb-Nd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XJRCJKEB = $mol_type_enforce<
		`Rb-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__574VRVYB = $mol_type_enforce<
		`Gd-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0LZYIMNM = $mol_type_enforce<
		`Ho-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5CW9603O = $mol_type_enforce<
		`Tc-Pd-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V17WGXXK = $mol_type_enforce<
		`Ce-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EDZMA605 = $mol_type_enforce<
		`Cu-Pt-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FSJ4ZWD3 = $mol_type_enforce<
		`La-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W0CCLR9T = $mol_type_enforce<
		`Sm-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KIC18UJZ = $mol_type_enforce<
		`La-Gd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OML7IX1D = $mol_type_enforce<
		`Al-Zn-Cd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4R5YME4J = $mol_type_enforce<
		`Cs-Pr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KXYNWQFO = $mol_type_enforce<
		`Pm-Pr-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7WIR033V = $mol_type_enforce<
		`Os-Pt-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KQUPJNCT = $mol_type_enforce<
		`Er-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C207SPFN = $mol_type_enforce<
		`Gd-Dy-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S6EVT3CI = $mol_type_enforce<
		`Tb-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5SUO84XY = $mol_type_enforce<
		`Ce-Nd-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RBNC95OU = $mol_type_enforce<
		`Be-Al-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YSFABRL9 = $mol_type_enforce<
		`Cu-Tc-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YKGCLRRE = $mol_type_enforce<
		`Nd-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PKR8U85B = $mol_type_enforce<
		`Ca-La-Tb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TQTLRLTB = $mol_type_enforce<
		`Be-Zn-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XMNGWJ32 = $mol_type_enforce<
		`Cu-Rh-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EULITFV3 = $mol_type_enforce<
		`Lu-Pu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U9R8ZQKG = $mol_type_enforce<
		`Pr-Nd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P0BWNFEN = $mol_type_enforce<
		`Rb-Na-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S46F20FT = $mol_type_enforce<
		`Yb-Pr-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__INW8INHR = $mol_type_enforce<
		`Ce-Pr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JIMS7RV8 = $mol_type_enforce<
		`Hf-Mg-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5X70NTEP = $mol_type_enforce<
		`Tb-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UPDK20P0 = $mol_type_enforce<
		`Co-Ag-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LDDS3Y7T = $mol_type_enforce<
		`Li-Tb-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AJRYXOZY = $mol_type_enforce<
		`Yb-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A87IJBZ5 = $mol_type_enforce<
		`Yb-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EZ98XGE7 = $mol_type_enforce<
		`Yb-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1UKZYOP4 = $mol_type_enforce<
		`Sc-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZKIQHSSJ = $mol_type_enforce<
		`La-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GO1CLIG0 = $mol_type_enforce<
		`Ca-Ce-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KIPBSZYZ = $mol_type_enforce<
		`Ce-Ho-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0WERR14N = $mol_type_enforce<
		`La-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9RB9HLGM = $mol_type_enforce<
		`Pu-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BCADME0Y = $mol_type_enforce<
		`Yb-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XQ2A85E9 = $mol_type_enforce<
		`Er-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GVS7KJ94 = $mol_type_enforce<
		`U-Cr-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YEZC4RC4 = $mol_type_enforce<
		`Dy-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YTS3ZEAI = $mol_type_enforce<
		`Si-Ag-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HL83WGNT = $mol_type_enforce<
		`Tb-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WGREHUX4 = $mol_type_enforce<
		`Pr-Gd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WANAZ1IH = $mol_type_enforce<
		`Ce-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B7G8719H = $mol_type_enforce<
		`Tl-Cu-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RAKDQ52G = $mol_type_enforce<
		`Ho-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5KT0GFOW = $mol_type_enforce<
		`Li-Mg-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A4OTEULW = $mol_type_enforce<
		`Y-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U4H0CKL6 = $mol_type_enforce<
		`Sc-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VIK9PZ61 = $mol_type_enforce<
		`Cu-Bi-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2WD2S03G = $mol_type_enforce<
		`Tl-Zn-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GH6TDSDP = $mol_type_enforce<
		`Nd-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4Z6Y6M5Y = $mol_type_enforce<
		`Ni-Pt-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IHZOV5RK = $mol_type_enforce<
		`Sm-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TS4J8W1S = $mol_type_enforce<
		`Li-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PO0PUH2Q = $mol_type_enforce<
		`Yb-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__60GO9T4Q = $mol_type_enforce<
		`Ce-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WIKBQS91 = $mol_type_enforce<
		`Pr-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I1XA2NFQ = $mol_type_enforce<
		`Ir-Os-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DIZ9FR2L = $mol_type_enforce<
		`Er-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ET6M2RIR = $mol_type_enforce<
		`Tb-Sm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LG36HWO7 = $mol_type_enforce<
		`Dy-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WJ003NUB = $mol_type_enforce<
		`Nb-Tl-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B2MKQ18J = $mol_type_enforce<
		`La-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ODNRWKN7 = $mol_type_enforce<
		`Ag-Pd-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0CMKU0KW = $mol_type_enforce<
		`Hf-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YFFXLLYQ = $mol_type_enforce<
		`Re-Os-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__24HF6Z78 = $mol_type_enforce<
		`La-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4QUR42O2 = $mol_type_enforce<
		`Pm-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QEJ8JFKM = $mol_type_enforce<
		`Y-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G3RB14T2 = $mol_type_enforce<
		`Pr-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XCJ02NZ4 = $mol_type_enforce<
		`Na-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2C3PG43F = $mol_type_enforce<
		`Tl-V-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RK7EDT8A = $mol_type_enforce<
		`Gd-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QWTA0YAV = $mol_type_enforce<
		`Li-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1ZUOBFTD = $mol_type_enforce<
		`Pr-Sm-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D4K1J89A = $mol_type_enforce<
		`Ce-Gd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9BY6VPFP = $mol_type_enforce<
		`Mn-Fe-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NY43487Z = $mol_type_enforce<
		`Y-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XJFQCLPZ = $mol_type_enforce<
		`Ba-Eu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5I6BCUBH = $mol_type_enforce<
		`Ce-Ho-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I7W5K1SU = $mol_type_enforce<
		`Gd-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0C7J7EP0 = $mol_type_enforce<
		`Ce-Y-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KDPPAZTD = $mol_type_enforce<
		`Mn-Ni-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PYGACJOF = $mol_type_enforce<
		`Tb-Pr-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KY1XKHDW = $mol_type_enforce<
		`Nd-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KG7T3HHS = $mol_type_enforce<
		`Nb-Cu-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R48H586R = $mol_type_enforce<
		`Li-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ONP4DEF8 = $mol_type_enforce<
		`Li-Sm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QL6IAWJ9 = $mol_type_enforce<
		`Al-Ge-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VJWSS6DN = $mol_type_enforce<
		`Tb-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A74P9G1Z = $mol_type_enforce<
		`Tb-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VD5H09EK = $mol_type_enforce<
		`Nd-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TIUVV4M7 = $mol_type_enforce<
		`Sr-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FKLG43OW = $mol_type_enforce<
		`Er-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3K34CVIU = $mol_type_enforce<
		`Mg-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LRZ1JHRH = $mol_type_enforce<
		`Dy-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZQU5AZ8N = $mol_type_enforce<
		`Gd-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__27MCO1NX = $mol_type_enforce<
		`Na-Li-Be`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VCK835V3 = $mol_type_enforce<
		`Sm-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TO6HZQJD = $mol_type_enforce<
		`La-Pr-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IG0IPXZJ = $mol_type_enforce<
		`Ce-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9SAC5WI8 = $mol_type_enforce<
		`Ce-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GTWDLJV8 = $mol_type_enforce<
		`Er-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XM5VPB0G = $mol_type_enforce<
		`Lu-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8H9R5H25 = $mol_type_enforce<
		`Fe-Ir-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0ZDR33A6 = $mol_type_enforce<
		`Li-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0P8TJSUP = $mol_type_enforce<
		`Pm-Pr-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C8GB37FL = $mol_type_enforce<
		`Th-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7M4MS4IJ = $mol_type_enforce<
		`Tl-In-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZUL70JI2 = $mol_type_enforce<
		`Tm-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5EJVKH76 = $mol_type_enforce<
		`Tc-Ni-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9GMK0WOX = $mol_type_enforce<
		`La-Yb-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UO2NT00Q = $mol_type_enforce<
		`Li-Pr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K0KNP8TN = $mol_type_enforce<
		`Sr-Nd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R20I9COZ = $mol_type_enforce<
		`Ce-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__93M6HWAL = $mol_type_enforce<
		`La-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__COQ56I6I = $mol_type_enforce<
		`Li-Ce-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__595VCS06 = $mol_type_enforce<
		`Ba-La-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZAXL9G2G = $mol_type_enforce<
		`La-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K16SN7JR = $mol_type_enforce<
		`Ce-Pr-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SVCSED3H = $mol_type_enforce<
		`Cs-K-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TWCRNN1L = $mol_type_enforce<
		`Sm-Gd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B12IVKVJ = $mol_type_enforce<
		`Li-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2ZCZUF1A = $mol_type_enforce<
		`La-Yb-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZZQ8J5RK = $mol_type_enforce<
		`La-Dy-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZTJU6TI3 = $mol_type_enforce<
		`Y-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZMD6V9AR = $mol_type_enforce<
		`Th-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__593ON9UT = $mol_type_enforce<
		`Ho-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SX8M8527 = $mol_type_enforce<
		`Ce-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F9MB3J60 = $mol_type_enforce<
		`Tb-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__68S1OCLD = $mol_type_enforce<
		`La-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CUPERS9F = $mol_type_enforce<
		`La-Pr-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8Z6S9QSZ = $mol_type_enforce<
		`Cs-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EQ1ZEM4Z = $mol_type_enforce<
		`Bi-Sb-P`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WGH1J2AR = $mol_type_enforce<
		`Mn-Cu-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IM6Q1EFP = $mol_type_enforce<
		`Mg-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C9EXGXJ1 = $mol_type_enforce<
		`Er-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RJOUSMGF = $mol_type_enforce<
		`Th-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EFPYOI5V = $mol_type_enforce<
		`Cr-Cu-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EK922D0S = $mol_type_enforce<
		`Er-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AV2LP8EV = $mol_type_enforce<
		`Tb-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T8WVNHJ9 = $mol_type_enforce<
		`Li-La-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RTZ0GTQJ = $mol_type_enforce<
		`Ce-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DNSVYR3F = $mol_type_enforce<
		`Tc-Ni-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7GA7VEXB = $mol_type_enforce<
		`Pr-Ho-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K2J3LL4Y = $mol_type_enforce<
		`Li-Cr-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R70BCA24 = $mol_type_enforce<
		`La-Sm-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WU2UT4LY = $mol_type_enforce<
		`Fe-Cu-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3NA852AR = $mol_type_enforce<
		`Co-Cu-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VOXEJGMD = $mol_type_enforce<
		`Nb-Tl-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YM6O71VL = $mol_type_enforce<
		`Co-Pt-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__USQHFHGU = $mol_type_enforce<
		`Ce-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IC50OJ7I = $mol_type_enforce<
		`Re-Ir-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6HFPPPHX = $mol_type_enforce<
		`Lu-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N0CXUK6X = $mol_type_enforce<
		`Eu-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K8EG4KA3 = $mol_type_enforce<
		`Ce-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B6G0QQQ7 = $mol_type_enforce<
		`Ir-Pd-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZW6AGHUH = $mol_type_enforce<
		`Hg-Ir-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__57LKJA99 = $mol_type_enforce<
		`Y-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5JYYWH18 = $mol_type_enforce<
		`La-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6BYOUW0V = $mol_type_enforce<
		`Tl-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LGQTGGSV = $mol_type_enforce<
		`Co-Cu-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KX99HEW3 = $mol_type_enforce<
		`Pm-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FLWM13WT = $mol_type_enforce<
		`Ce-Pr-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NQAQ0L1K = $mol_type_enforce<
		`Tb-Pr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B90IXSLT = $mol_type_enforce<
		`Yb-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S2G21P34 = $mol_type_enforce<
		`Pm-Dy-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y4LJ5LY6 = $mol_type_enforce<
		`Co-Ru-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PD6DIN8Y = $mol_type_enforce<
		`Tb-Yb-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UMLR15KS = $mol_type_enforce<
		`Gd-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T6H5MZ0U = $mol_type_enforce<
		`Dy-Ho-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2BTNBYZU = $mol_type_enforce<
		`La-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2UABVHCK = $mol_type_enforce<
		`La-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GO0BQMFP = $mol_type_enforce<
		`U-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JATZFVXW = $mol_type_enforce<
		`La-Pm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C46Q4ARD = $mol_type_enforce<
		`Cs-K-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3SR51TG9 = $mol_type_enforce<
		`Tb-Nd-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AE9ZW9AM = $mol_type_enforce<
		`Nd-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VSSNX3E9 = $mol_type_enforce<
		`Li-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X087PUJX = $mol_type_enforce<
		`Sm-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__31BY8IB8 = $mol_type_enforce<
		`La-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z5JMHL7M = $mol_type_enforce<
		`Gd-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V4QH1RIP = $mol_type_enforce<
		`Ce-Nd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WAZTXMOC = $mol_type_enforce<
		`Tb-Yb-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5Q7QUCZ4 = $mol_type_enforce<
		`Ce-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PQGVJH6O = $mol_type_enforce<
		`Pr-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WFC8FFAE = $mol_type_enforce<
		`La-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CTALAMFA = $mol_type_enforce<
		`Dy-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D7COT7RS = $mol_type_enforce<
		`Li-Pr-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1I8AOH1M = $mol_type_enforce<
		`Ce-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IPL4KCQJ = $mol_type_enforce<
		`Dy-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZO4H4OO0 = $mol_type_enforce<
		`Er-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JZFRTDE2 = $mol_type_enforce<
		`La-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B1KE6JXT = $mol_type_enforce<
		`Ca-Ce-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FRHRGJ2M = $mol_type_enforce<
		`Eu-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V8FDDRG0 = $mol_type_enforce<
		`La-Sc-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O7LF1BMX = $mol_type_enforce<
		`Li-Ce-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GXZGFUMY = $mol_type_enforce<
		`La-Dy-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BLTA197N = $mol_type_enforce<
		`Lu-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XUSYXJU6 = $mol_type_enforce<
		`Gd-Y-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M2KCORA0 = $mol_type_enforce<
		`Li-Ce-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EH1H11AK = $mol_type_enforce<
		`Cr-Cd-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U2CBXEXE = $mol_type_enforce<
		`La-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F4MHNUX7 = $mol_type_enforce<
		`Rb-Mg-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DVF9ZU2Y = $mol_type_enforce<
		`Tb-Gd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JKCN2KW7 = $mol_type_enforce<
		`Eu-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TGGSYISJ = $mol_type_enforce<
		`Co-Ag-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A6D34YXA = $mol_type_enforce<
		`La-Tb-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__19WTE0QK = $mol_type_enforce<
		`Rb-Mg-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GKD0SLK4 = $mol_type_enforce<
		`Cu-Ir-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7W0IELCB = $mol_type_enforce<
		`Rb-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PA5DL89S = $mol_type_enforce<
		`Gd-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GGJP547J = $mol_type_enforce<
		`Er-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__22O5AZA1 = $mol_type_enforce<
		`V-Cu-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YHLKZQWA = $mol_type_enforce<
		`Dy-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SZHPQSD3 = $mol_type_enforce<
		`Sc-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LETD90YP = $mol_type_enforce<
		`Tb-Gd-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6UQFQLQZ = $mol_type_enforce<
		`Li-Tb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I1T7OGTO = $mol_type_enforce<
		`Er-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6SXLQ5MH = $mol_type_enforce<
		`V-Cr-Hg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CI8A3GA0 = $mol_type_enforce<
		`La-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9MKE0RAA = $mol_type_enforce<
		`Ta-Cu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HXEXP6BM = $mol_type_enforce<
		`Ta-Nb-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JJUQKWIQ = $mol_type_enforce<
		`Nd-Sm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y2EVACQ6 = $mol_type_enforce<
		`V-Fe-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R412U2ZV = $mol_type_enforce<
		`Yb-Eu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HQJ67YJM = $mol_type_enforce<
		`La-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X29SX6WZ = $mol_type_enforce<
		`Pd-Au-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FL2L4QE2 = $mol_type_enforce<
		`Sc-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0820VNR5 = $mol_type_enforce<
		`Mn-Co-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RC3BT77X = $mol_type_enforce<
		`Yb-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IXOVAU2W = $mol_type_enforce<
		`Sm-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NMIG7BES = $mol_type_enforce<
		`Ce-Pr-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V817MBGB = $mol_type_enforce<
		`Ag-Ir-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__20IA2WLA = $mol_type_enforce<
		`Nd-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q0H05EC3 = $mol_type_enforce<
		`Li-Y-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HRFQU9KV = $mol_type_enforce<
		`La-Ce-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XGR8NSI8 = $mol_type_enforce<
		`Al-Si-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CDP21N89 = $mol_type_enforce<
		`La-Eu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JUWJN1AO = $mol_type_enforce<
		`In-Si-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GFELEF52 = $mol_type_enforce<
		`V-Cr-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3O6GL6SZ = $mol_type_enforce<
		`Al-Sn-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PJ47O5B2 = $mol_type_enforce<
		`Ba-Mn-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R0X313PK = $mol_type_enforce<
		`Th-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PRVQNVM6 = $mol_type_enforce<
		`Cs-Li-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BZ66VSIR = $mol_type_enforce<
		`Ca-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2LPPZ1ES = $mol_type_enforce<
		`Al-Si-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0KAPBLCP = $mol_type_enforce<
		`Li-Mg-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AW7OS4WL = $mol_type_enforce<
		`Yb-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BIYBRO0H = $mol_type_enforce<
		`Mn-Tl-Cd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LTDY4NCK = $mol_type_enforce<
		`Fe-Ir-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AXF7S6L6 = $mol_type_enforce<
		`Tb-Nd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VFCMJ9O0 = $mol_type_enforce<
		`Nd-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q5PQRHKG = $mol_type_enforce<
		`Ba-Sr-Ca`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6SRS98BJ = $mol_type_enforce<
		`La-Eu-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y1LKL4YD = $mol_type_enforce<
		`Sm-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AZAKBKFQ = $mol_type_enforce<
		`Y-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7FP8M2QU = $mol_type_enforce<
		`Tc-Ir-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0N993E3F = $mol_type_enforce<
		`Cs-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KU3VS5WD = $mol_type_enforce<
		`Gd-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XZKO7IUR = $mol_type_enforce<
		`Dy-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5QV51GWC = $mol_type_enforce<
		`La-Pm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YFFHJNP1 = $mol_type_enforce<
		`Yb-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A9C7ZNL7 = $mol_type_enforce<
		`Ce-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B6FQ1K70 = $mol_type_enforce<
		`Ir-Os-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__16TZMF40 = $mol_type_enforce<
		`Ce-Sm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R93X0PSM = $mol_type_enforce<
		`Tb-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1TSNQA8Y = $mol_type_enforce<
		`Pm-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9BMS46HA = $mol_type_enforce<
		`Pr-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9R7FDLB3 = $mol_type_enforce<
		`Tb-Ce-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CX22NRWH = $mol_type_enforce<
		`Hg-Bi-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZOC94U1U = $mol_type_enforce<
		`Tb-Ce-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZHWLL72P = $mol_type_enforce<
		`Pr-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WWEKMH16 = $mol_type_enforce<
		`Cu-Ni-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6FVJ6LYQ = $mol_type_enforce<
		`Fe-Co-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UXSHOGLN = $mol_type_enforce<
		`Pr-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EPS1B92Q = $mol_type_enforce<
		`Zn-Sn-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WYE624Y8 = $mol_type_enforce<
		`Yb-Eu-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DDZII8L9 = $mol_type_enforce<
		`Cd-Fe-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EW9I8T4P = $mol_type_enforce<
		`La-Gd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CD0UZA5A = $mol_type_enforce<
		`Ga-Bi-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EK6THQ9M = $mol_type_enforce<
		`Sm-Gd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZKTT6LHQ = $mol_type_enforce<
		`Co-Pt-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SVM9B3EQ = $mol_type_enforce<
		`Ce-Er-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B2T0N7ZF = $mol_type_enforce<
		`Tb-Ce-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NEN2QPJ0 = $mol_type_enforce<
		`Sr-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AGJ8PV15 = $mol_type_enforce<
		`Cr-Fe-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1NL8320U = $mol_type_enforce<
		`Yb-Hf-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LYLOMA6I = $mol_type_enforce<
		`Eu-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TWJ81WIK = $mol_type_enforce<
		`Zn-Ge-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__915BA8FH = $mol_type_enforce<
		`Ca-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GFXSFFQI = $mol_type_enforce<
		`Nd-Sm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C7P6LIVN = $mol_type_enforce<
		`Ce-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ODP3V80E = $mol_type_enforce<
		`Na-Ca-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N24PALUS = $mol_type_enforce<
		`Tl-Cd-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GDPDVUN2 = $mol_type_enforce<
		`Nd-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GJWXSJ4V = $mol_type_enforce<
		`Li-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CJ5ABNCQ = $mol_type_enforce<
		`Pr-Dy-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E7RM4E74 = $mol_type_enforce<
		`Pr-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__91P6S4ZQ = $mol_type_enforce<
		`Co-Cu-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V676JMQP = $mol_type_enforce<
		`Tb-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZDWCZ2IM = $mol_type_enforce<
		`Li-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LKOY2AI3 = $mol_type_enforce<
		`Pm-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JW4UZCWR = $mol_type_enforce<
		`La-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TUBCB1SY = $mol_type_enforce<
		`Pr-Sm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UKNKCW8D = $mol_type_enforce<
		`Pr-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UEOPP8KO = $mol_type_enforce<
		`Yb-Gd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F8K24KCP = $mol_type_enforce<
		`Gd-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XOV4CLYB = $mol_type_enforce<
		`Ho-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R1CO88VE = $mol_type_enforce<
		`Yb-Dy-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A3RHEKDR = $mol_type_enforce<
		`Li-Mg-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H5OC2M5S = $mol_type_enforce<
		`Yb-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HA856J15 = $mol_type_enforce<
		`Lu-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1G2TXLDD = $mol_type_enforce<
		`Ca-Nd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8JCEWWP6 = $mol_type_enforce<
		`Tb-Ce-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DPDIG631 = $mol_type_enforce<
		`Dy-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1QRG7ECO = $mol_type_enforce<
		`Sr-Ca-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0HFUS22Z = $mol_type_enforce<
		`Tb-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JNWZ31M1 = $mol_type_enforce<
		`Pr-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J5YOC82M = $mol_type_enforce<
		`Yb-Pr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PNRIMULU = $mol_type_enforce<
		`Cd-Ga-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TAR75HG5 = $mol_type_enforce<
		`Tb-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LBF4CJMI = $mol_type_enforce<
		`La-Ce-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YO51DOM8 = $mol_type_enforce<
		`Sm-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9AQ9PLTP = $mol_type_enforce<
		`Li-Sm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X01J2HHZ = $mol_type_enforce<
		`Ba-Yb-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__21COR253 = $mol_type_enforce<
		`Gd-Ho-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0UFLNUNO = $mol_type_enforce<
		`Eu-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EFTQJ487 = $mol_type_enforce<
		`La-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1UOHJXW3 = $mol_type_enforce<
		`Pm-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MGIMTNSX = $mol_type_enforce<
		`Ce-Pr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JGY9F4YE = $mol_type_enforce<
		`U-V-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C4MQW1UB = $mol_type_enforce<
		`Cs-Li-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CZ7AMFWA = $mol_type_enforce<
		`Yb-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FRIFFZC7 = $mol_type_enforce<
		`La-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3ZXFMEM7 = $mol_type_enforce<
		`Tb-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GCUR2MHR = $mol_type_enforce<
		`Eu-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5T72KMPE = $mol_type_enforce<
		`Cs-Rb-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R08NH2BB = $mol_type_enforce<
		`Pm-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YX69UZEF = $mol_type_enforce<
		`Sr-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XCOC11FN = $mol_type_enforce<
		`Cu-Ru-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y09MIWGC = $mol_type_enforce<
		`La-Sm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5Y12P2D6 = $mol_type_enforce<
		`La-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VKCYWABG = $mol_type_enforce<
		`Pr-Gd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J9S2YXU3 = $mol_type_enforce<
		`Er-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7Y1NDVF1 = $mol_type_enforce<
		`Ho-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HRKOG2N6 = $mol_type_enforce<
		`Yb-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ETQKTFQI = $mol_type_enforce<
		`Y-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__21KJCYRL = $mol_type_enforce<
		`Cr-Ag-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WYC4EUZ9 = $mol_type_enforce<
		`Sm-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F2K6DZJ2 = $mol_type_enforce<
		`Li-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KWMAXXDC = $mol_type_enforce<
		`Gd-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XNYZDX65 = $mol_type_enforce<
		`Sc-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OVL6NYW4 = $mol_type_enforce<
		`Rb-Mg-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S812VLYE = $mol_type_enforce<
		`Th-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A7NVGMHA = $mol_type_enforce<
		`K-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TAH4MBJG = $mol_type_enforce<
		`Ho-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OVYTOX8N = $mol_type_enforce<
		`Ba-Nd-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__86Q32T4S = $mol_type_enforce<
		`Rb-Na-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6E32GBAH = $mol_type_enforce<
		`Ce-Sm-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VRW69612 = $mol_type_enforce<
		`Pr-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VLT2LLVF = $mol_type_enforce<
		`Ba-Pr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A1SF3C7X = $mol_type_enforce<
		`Li-Nd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KWC2Y7L0 = $mol_type_enforce<
		`Re-Os-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XM97B98A = $mol_type_enforce<
		`Eu-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QRHP48FJ = $mol_type_enforce<
		`Nd-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4P54J039 = $mol_type_enforce<
		`Cs-Rb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6NPZ58PX = $mol_type_enforce<
		`Tb-Pm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EWH52A9R = $mol_type_enforce<
		`Cs-K-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UO3TMJ23 = $mol_type_enforce<
		`Na-Sr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__794F6VJW = $mol_type_enforce<
		`La-Ce-Eu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HKXFAA2J = $mol_type_enforce<
		`La-Gd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LFD2W3ET = $mol_type_enforce<
		`Tb-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__37X0FGR1 = $mol_type_enforce<
		`Th-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2JEFQ4RO = $mol_type_enforce<
		`Li-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7LW26YP7 = $mol_type_enforce<
		`Lu-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I9SZ27X0 = $mol_type_enforce<
		`Tb-Nd-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R8TNE1LX = $mol_type_enforce<
		`Nb-Bi-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ES5EW3HR = $mol_type_enforce<
		`Cd-Si-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__80TVPDHN = $mol_type_enforce<
		`Sm-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GJ9C4XBV = $mol_type_enforce<
		`Be-In-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SWN8N41T = $mol_type_enforce<
		`Sr-Ca-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CIQQ8LMB = $mol_type_enforce<
		`Pd-Pt-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ODYMSCAZ = $mol_type_enforce<
		`Pm-Pr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5F9NLDOX = $mol_type_enforce<
		`La-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__67FR4WK4 = $mol_type_enforce<
		`Ce-Gd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2C0T8L81 = $mol_type_enforce<
		`La-Ce-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0WWFJDBW = $mol_type_enforce<
		`La-Th-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8CD2VVDO = $mol_type_enforce<
		`K-Li-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__62VBQUSS = $mol_type_enforce<
		`Ho-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EUYQVA46 = $mol_type_enforce<
		`Nd-Gd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D1WYB8PR = $mol_type_enforce<
		`Ce-Sm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AUD1WBYQ = $mol_type_enforce<
		`Nd-Dy-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WGVRDQDA = $mol_type_enforce<
		`Tb-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QED0S7AK = $mol_type_enforce<
		`Er-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1BK0S2VS = $mol_type_enforce<
		`Sm-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9SATYLZY = $mol_type_enforce<
		`Pm-Sm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8PBKOGDN = $mol_type_enforce<
		`Sc-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DU3Y4DCZ = $mol_type_enforce<
		`Cs-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OJQI657U = $mol_type_enforce<
		`Yb-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3GVSXQQ4 = $mol_type_enforce<
		`Pr-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4OEVOI26 = $mol_type_enforce<
		`Zn-Ga-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1AMZM002 = $mol_type_enforce<
		`Yb-Nd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YUBL1W4J = $mol_type_enforce<
		`Er-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0DU2TJTY = $mol_type_enforce<
		`Pm-Sm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9IWERPR1 = $mol_type_enforce<
		`Mn-Cd-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G9GGMABS = $mol_type_enforce<
		`Ba-La-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O57GGSGD = $mol_type_enforce<
		`La-Tb-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NKIHSNYT = $mol_type_enforce<
		`Yb-Nd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CQV8LVHM = $mol_type_enforce<
		`Pr-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9T3SHKQU = $mol_type_enforce<
		`Er-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LYG048M4 = $mol_type_enforce<
		`Co-Re-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TTUFOIGT = $mol_type_enforce<
		`Co-Ni-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6LYL44JL = $mol_type_enforce<
		`La-Ce-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0EF1GX6G = $mol_type_enforce<
		`Sm-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HNKBOOGC = $mol_type_enforce<
		`Pm-Sm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WICINDX1 = $mol_type_enforce<
		`Yb-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MVF425L0 = $mol_type_enforce<
		`Hf-Mg-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H8K7JHRP = $mol_type_enforce<
		`Pr-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JP9O0UQ6 = $mol_type_enforce<
		`Pm-Pr-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BNGC20D3 = $mol_type_enforce<
		`Pm-Sm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FM7ZYDQQ = $mol_type_enforce<
		`K-Mg-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U8JS5APU = $mol_type_enforce<
		`V-In-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V26E5FB3 = $mol_type_enforce<
		`Yb-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A0C5RXU8 = $mol_type_enforce<
		`Li-Tb-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7IGCGSZA = $mol_type_enforce<
		`Y-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R1DLR44M = $mol_type_enforce<
		`Th-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E5AF5N34 = $mol_type_enforce<
		`Ba-Eu-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LOORLPDO = $mol_type_enforce<
		`Ce-Sm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TDRTT9Q0 = $mol_type_enforce<
		`Pr-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SFUC2WID = $mol_type_enforce<
		`Ba-Ca-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3I7ZPCAY = $mol_type_enforce<
		`Ge-Bi-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3G7KX4M7 = $mol_type_enforce<
		`Ce-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L2BEDBEC = $mol_type_enforce<
		`Rb-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZCMGQ0Y1 = $mol_type_enforce<
		`Yb-Pr-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CEDK4GPT = $mol_type_enforce<
		`Si-Ge-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__944OTCF5 = $mol_type_enforce<
		`Li-Er-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U0IKZCF0 = $mol_type_enforce<
		`Ba-La-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PDTZSV8D = $mol_type_enforce<
		`Er-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VNE8SCYH = $mol_type_enforce<
		`Ce-Pr-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__889FXWKX = $mol_type_enforce<
		`Y-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UZ8IKUI5 = $mol_type_enforce<
		`Na-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EZNZR72M = $mol_type_enforce<
		`Yb-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K1PPE6JJ = $mol_type_enforce<
		`Tb-Pm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2HX0FCGK = $mol_type_enforce<
		`Sm-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HO64HGTI = $mol_type_enforce<
		`Pr-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SDL6TBIW = $mol_type_enforce<
		`Ba-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DMALUDJI = $mol_type_enforce<
		`Ag-Bi-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FXADYLIK = $mol_type_enforce<
		`Nb-Cu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0I84UT73 = $mol_type_enforce<
		`Tb-Ho-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7KU4GVQP = $mol_type_enforce<
		`Pm-Sm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__18C6GJN2 = $mol_type_enforce<
		`Zn-Ge-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1851D1SK = $mol_type_enforce<
		`Tb-Pr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SEIDE16W = $mol_type_enforce<
		`Ca-Ce-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YXGN42DV = $mol_type_enforce<
		`Tm-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7EL3A34B = $mol_type_enforce<
		`Tc-Ni-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UXAWRJ50 = $mol_type_enforce<
		`Eu-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IY4M6306 = $mol_type_enforce<
		`La-Tb-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OJU4PX61 = $mol_type_enforce<
		`Yb-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TIGIF5YW = $mol_type_enforce<
		`Yb-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FH557DT5 = $mol_type_enforce<
		`Ce-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NDN39RDZ = $mol_type_enforce<
		`Tb-Nd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EH5T4S89 = $mol_type_enforce<
		`Cu-Ir-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OY7WUBNP = $mol_type_enforce<
		`Ba-La-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5MAZIH5T = $mol_type_enforce<
		`La-Gd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0714OTF3 = $mol_type_enforce<
		`Ga-Sn-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8M3RB5YS = $mol_type_enforce<
		`Tb-Ho-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9LWSISCL = $mol_type_enforce<
		`Er-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BVA303U0 = $mol_type_enforce<
		`Pr-Y-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2A2LRMOC = $mol_type_enforce<
		`Dy-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CF1UAEYV = $mol_type_enforce<
		`Lu-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GE4L94TX = $mol_type_enforce<
		`Pr-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EJYNY7XP = $mol_type_enforce<
		`La-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PQNWNREO = $mol_type_enforce<
		`Tb-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7GRR8ZAC = $mol_type_enforce<
		`Lu-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KO7V9BDK = $mol_type_enforce<
		`Cs-Rb-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V8J392AN = $mol_type_enforce<
		`Fe-Co-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4LSG84XK = $mol_type_enforce<
		`K-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5TFTIFPW = $mol_type_enforce<
		`Tb-Yb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O6DQ6R8O = $mol_type_enforce<
		`Fe-Au-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XBYEHVG4 = $mol_type_enforce<
		`Dy-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IPETP4WL = $mol_type_enforce<
		`Y-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LG4BM8LO = $mol_type_enforce<
		`Tb-Pr-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FMRXWYH6 = $mol_type_enforce<
		`Sc-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GRNVW4PO = $mol_type_enforce<
		`Gd-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J9KBBDHO = $mol_type_enforce<
		`Li-Y-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HWC5QXDA = $mol_type_enforce<
		`Mn-V-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EBT5AEGV = $mol_type_enforce<
		`Yb-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XLDI62RV = $mol_type_enforce<
		`Sm-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2VY9O9MD = $mol_type_enforce<
		`La-Nd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M8V5XCR6 = $mol_type_enforce<
		`Ga-Si-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CHWA6VTX = $mol_type_enforce<
		`Ba-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2O2BDVTN = $mol_type_enforce<
		`Nd-Y-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O3JIOQMU = $mol_type_enforce<
		`Gd-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L3V0JQTO = $mol_type_enforce<
		`Eu-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AG2S0KBX = $mol_type_enforce<
		`Er-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JORPAHHO = $mol_type_enforce<
		`Be-Ga-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FMYXFWUJ = $mol_type_enforce<
		`K-Li-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6HKRZILV = $mol_type_enforce<
		`Tl-V-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LDBFP8YM = $mol_type_enforce<
		`Co-Os-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NZQV6E2Q = $mol_type_enforce<
		`V-Hg-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RZ4A4PK6 = $mol_type_enforce<
		`Fe-Co-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IR9O1HIR = $mol_type_enforce<
		`La-Tb-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__39XI1R5G = $mol_type_enforce<
		`Pr-Dy-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__91558G96 = $mol_type_enforce<
		`Ta-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HZZ8SU3J = $mol_type_enforce<
		`Li-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JBXIEKES = $mol_type_enforce<
		`Zn-In-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GKV1CPJL = $mol_type_enforce<
		`Tb-Ce-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6G6UK94H = $mol_type_enforce<
		`Ca-Yb-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SK1S8SIA = $mol_type_enforce<
		`La-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T6HER566 = $mol_type_enforce<
		`Yb-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__901UJ12E = $mol_type_enforce<
		`La-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U5ORUNJ7 = $mol_type_enforce<
		`Li-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2CZAX9DL = $mol_type_enforce<
		`Yb-Pr-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AVK3GLJR = $mol_type_enforce<
		`Li-Pr-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J19710LM = $mol_type_enforce<
		`Ho-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V8SMREBK = $mol_type_enforce<
		`Pr-Sm-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0432FWAH = $mol_type_enforce<
		`Tb-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__01RJR5KZ = $mol_type_enforce<
		`Yb-Eu-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UZI0J4CG = $mol_type_enforce<
		`Nd-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T281PJ63 = $mol_type_enforce<
		`Ga-Hg-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QVL735TE = $mol_type_enforce<
		`Pm-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8J2WXG9W = $mol_type_enforce<
		`Ba-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LODF42KR = $mol_type_enforce<
		`Ni-Ru-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YQH6X7A0 = $mol_type_enforce<
		`Y-Er-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HWBA84EM = $mol_type_enforce<
		`Ca-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BRZAIKO1 = $mol_type_enforce<
		`Al-Zn-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QRHG9MUW = $mol_type_enforce<
		`Th-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8L3F9088 = $mol_type_enforce<
		`Fe-Ni-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V4BI8BTW = $mol_type_enforce<
		`Tb-Sm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KGLIE74U = $mol_type_enforce<
		`Li-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9URBRPT9 = $mol_type_enforce<
		`Pm-Dy-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AIWJKSL6 = $mol_type_enforce<
		`Fe-Co-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RL46F82D = $mol_type_enforce<
		`Gd-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V7GPNX7E = $mol_type_enforce<
		`Dy-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LV4TH7JK = $mol_type_enforce<
		`La-Ce-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3MVYEA1Q = $mol_type_enforce<
		`Yb-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G1HB3W43 = $mol_type_enforce<
		`Tb-Ho-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I4RSCX7Y = $mol_type_enforce<
		`Tb-Y-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AOAYAJP7 = $mol_type_enforce<
		`Tc-Ir-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WBX9KSGN = $mol_type_enforce<
		`Ce-Nd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WW2NNF06 = $mol_type_enforce<
		`Yb-Y-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CBRHXM7D = $mol_type_enforce<
		`Na-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H1YVT7L5 = $mol_type_enforce<
		`Nd-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IBGJVW96 = $mol_type_enforce<
		`Ho-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S5MDOGRF = $mol_type_enforce<
		`Ba-Ca-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RD8CUJZ0 = $mol_type_enforce<
		`Fe-Os-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BASIAGAI = $mol_type_enforce<
		`Pm-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J92EHUHM = $mol_type_enforce<
		`Gd-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UC5P1TBE = $mol_type_enforce<
		`Tb-Dy-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QQ4MQVW4 = $mol_type_enforce<
		`La-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VJ323CYW = $mol_type_enforce<
		`Sr-Mn-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RZ3YFUYB = $mol_type_enforce<
		`La-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XCWXYYG4 = $mol_type_enforce<
		`Dy-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OSQFGFH2 = $mol_type_enforce<
		`Tl-Zn-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LFCS2CZW = $mol_type_enforce<
		`Nb-Tl-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K4XTZUHO = $mol_type_enforce<
		`Pu-Np-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GP4XKPT2 = $mol_type_enforce<
		`Ir-Pt-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HQIRNFDX = $mol_type_enforce<
		`Yb-Dy-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BTKCJ6W0 = $mol_type_enforce<
		`Li-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D9ZBDAIQ = $mol_type_enforce<
		`Pr-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HJJW91HT = $mol_type_enforce<
		`Nd-Dy-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7GNQIX43 = $mol_type_enforce<
		`Ce-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GGZRUCZN = $mol_type_enforce<
		`Be-Al-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LA3JE933 = $mol_type_enforce<
		`Dy-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OCM316GO = $mol_type_enforce<
		`Al-Cd-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__59VPZ9N4 = $mol_type_enforce<
		`La-Er-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0PO4U0P9 = $mol_type_enforce<
		`Tb-Nd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HRD41U1I = $mol_type_enforce<
		`Eu-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8MDQY5N6 = $mol_type_enforce<
		`Re-Os-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F3W1NG1R = $mol_type_enforce<
		`Nd-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WKMUETV9 = $mol_type_enforce<
		`Sm-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K6XGRY1Q = $mol_type_enforce<
		`Cs-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FGY7PQPT = $mol_type_enforce<
		`Tb-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YCP8QKV8 = $mol_type_enforce<
		`Mg-Mn-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__01P3EFRW = $mol_type_enforce<
		`Cu-Pd-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6AF4C0ME = $mol_type_enforce<
		`Li-Er-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B9NFUKMZ = $mol_type_enforce<
		`Li-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E59K0YDM = $mol_type_enforce<
		`Y-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QQ083LX1 = $mol_type_enforce<
		`Yb-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4O127KA2 = $mol_type_enforce<
		`Li-Sm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__91EVN1ZW = $mol_type_enforce<
		`Dy-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LRG5SAVH = $mol_type_enforce<
		`Ca-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZLNFNMYQ = $mol_type_enforce<
		`Pr-Hf-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D8QB3GGX = $mol_type_enforce<
		`La-Yb-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V5IONKYI = $mol_type_enforce<
		`Eu-Mn-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BA22IECJ = $mol_type_enforce<
		`Tb-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1K82W1JB = $mol_type_enforce<
		`Yb-Nd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FJWLGZA8 = $mol_type_enforce<
		`Ti-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__65VM6Q7V = $mol_type_enforce<
		`Mg-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y45NDILR = $mol_type_enforce<
		`Ta-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5N11RFIZ = $mol_type_enforce<
		`Li-Nd-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6JNV6CHP = $mol_type_enforce<
		`Tl-Ag-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N01FGH7T = $mol_type_enforce<
		`Tb-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RJJA0M87 = $mol_type_enforce<
		`Gd-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3WV5SXPO = $mol_type_enforce<
		`Cu-Pd-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5EILQ9C3 = $mol_type_enforce<
		`Li-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7IT4NMIJ = $mol_type_enforce<
		`Gd-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5MN596M3 = $mol_type_enforce<
		`Cu-Ru-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3KAR52XH = $mol_type_enforce<
		`Li-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XTAOPHWA = $mol_type_enforce<
		`Yb-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4G56H9DC = $mol_type_enforce<
		`Gd-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OQR0HGUT = $mol_type_enforce<
		`Pr-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6ANSFSTI = $mol_type_enforce<
		`V-Fe-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5XHPSSBG = $mol_type_enforce<
		`La-Gd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CYS16ABR = $mol_type_enforce<
		`Ta-V-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R4KG7XEW = $mol_type_enforce<
		`Tb-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L7T0A8SA = $mol_type_enforce<
		`Cr-Mo-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G7Q1VHH8 = $mol_type_enforce<
		`Tb-Ce-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2JPPUS4R = $mol_type_enforce<
		`Ca-La-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NIEGRIVF = $mol_type_enforce<
		`Gd-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IMINR5II = $mol_type_enforce<
		`Cr-Fe-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ISG5WXY8 = $mol_type_enforce<
		`Cr-Bi-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J9QDYF6K = $mol_type_enforce<
		`Ce-Pr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N3RBXRM3 = $mol_type_enforce<
		`Sr-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZB2ZY1ZD = $mol_type_enforce<
		`Ag-Ge-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6HL2XDUH = $mol_type_enforce<
		`Y-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DX3QMD9W = $mol_type_enforce<
		`Er-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9CDJWHML = $mol_type_enforce<
		`Sm-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BLAX9V6Q = $mol_type_enforce<
		`Cr-Hg-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IFITSZNW = $mol_type_enforce<
		`La-Pr-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J37FDK9M = $mol_type_enforce<
		`Ca-Ce-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0EMDKSPR = $mol_type_enforce<
		`Th-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AUTJMOVN = $mol_type_enforce<
		`Ba-Nd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__195Z9XZR = $mol_type_enforce<
		`Ce-Eu-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B3WMD2AI = $mol_type_enforce<
		`Y-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JKZA8ZUW = $mol_type_enforce<
		`Cs-Li-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EV2ZHAIC = $mol_type_enforce<
		`Tb-Nd-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CB7DL4R8 = $mol_type_enforce<
		`K-Rb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QFLCVIIL = $mol_type_enforce<
		`Ca-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BN1EGX9Q = $mol_type_enforce<
		`Tb-Dy-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6H4FBG5S = $mol_type_enforce<
		`Ce-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2MEJOGHB = $mol_type_enforce<
		`Yb-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HUY92MXE = $mol_type_enforce<
		`Y-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BAVJE2E1 = $mol_type_enforce<
		`Gd-Dy-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6LC8J03P = $mol_type_enforce<
		`Yb-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5Q7EHF0O = $mol_type_enforce<
		`Ce-Pr-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JJZUREN3 = $mol_type_enforce<
		`Dy-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CQAQWHV2 = $mol_type_enforce<
		`Y-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0QMFA52S = $mol_type_enforce<
		`Hf-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OMWK01X4 = $mol_type_enforce<
		`Cu-Mo-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IQ5IGRN2 = $mol_type_enforce<
		`Ho-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JXOT74DO = $mol_type_enforce<
		`Na-Mg-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YJNSW4ZO = $mol_type_enforce<
		`Cu-Re-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2TF8JD5Y = $mol_type_enforce<
		`Si-Ag-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OEVRCH8T = $mol_type_enforce<
		`Ba-La-Eu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__INNV1BAG = $mol_type_enforce<
		`Pm-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IX7023YL = $mol_type_enforce<
		`Mn-V-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EJLDFIH2 = $mol_type_enforce<
		`Ca-La-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J2OAETOJ = $mol_type_enforce<
		`Pr-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AA3TBRW4 = $mol_type_enforce<
		`Nd-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E9I6C791 = $mol_type_enforce<
		`Re-Ni-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BC4KO2DR = $mol_type_enforce<
		`Gd-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G5NR312O = $mol_type_enforce<
		`Ce-Hf-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U5VW9EBG = $mol_type_enforce<
		`La-Nd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RKGIDOZX = $mol_type_enforce<
		`Yb-Ho-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4UT1G86A = $mol_type_enforce<
		`Al-Cd-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__407ELW8T = $mol_type_enforce<
		`Al-Tl-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RUJB8AP8 = $mol_type_enforce<
		`Tb-Sm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DN0HO9WL = $mol_type_enforce<
		`Pm-Sm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R8BM1NOF = $mol_type_enforce<
		`Ce-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__70MKZHBM = $mol_type_enforce<
		`Pr-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J3063VZL = $mol_type_enforce<
		`Dy-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OMINGV4R = $mol_type_enforce<
		`Zn-Sn-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2KMGMXMO = $mol_type_enforce<
		`Rb-Mg-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1ENTLHLS = $mol_type_enforce<
		`Tl-In-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0OP2X793 = $mol_type_enforce<
		`Ca-V-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CDFORXDN = $mol_type_enforce<
		`Th-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1E6FM9UX = $mol_type_enforce<
		`Gd-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9ZQKNQ6Z = $mol_type_enforce<
		`La-Er-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__38WOYHV0 = $mol_type_enforce<
		`Nd-Th-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WAJIGNM3 = $mol_type_enforce<
		`Ce-Pm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G6T87PCA = $mol_type_enforce<
		`Tb-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AM8U4100 = $mol_type_enforce<
		`Gd-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__THDLFER0 = $mol_type_enforce<
		`Yb-Pr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7G79Z3ZG = $mol_type_enforce<
		`Yb-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BH9ZUA1R = $mol_type_enforce<
		`Rb-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CAIJH4W1 = $mol_type_enforce<
		`Dy-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q4EQZ0RE = $mol_type_enforce<
		`Be-Ga-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MZ9SPHHT = $mol_type_enforce<
		`Y-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2XLX6L0O = $mol_type_enforce<
		`Ba-Yb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZCPG7MMZ = $mol_type_enforce<
		`Yb-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RT3U6FQ7 = $mol_type_enforce<
		`Tb-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B8IZEB5F = $mol_type_enforce<
		`Ho-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5TPNVCIP = $mol_type_enforce<
		`Pm-Gd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LKHUMJ8L = $mol_type_enforce<
		`Li-Mn-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__01B7NKJQ = $mol_type_enforce<
		`Ce-Eu-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5MXT6HT9 = $mol_type_enforce<
		`Be-Al-Zn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HIQ8MC76 = $mol_type_enforce<
		`Zn-Ge-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TZEDHMYO = $mol_type_enforce<
		`Pr-Ho-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N5YPU875 = $mol_type_enforce<
		`Tb-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YHLPE1FR = $mol_type_enforce<
		`Li-Sm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1ELK8AYD = $mol_type_enforce<
		`Dy-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OMWSAD28 = $mol_type_enforce<
		`Ba-Ca-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__38AMQ9V4 = $mol_type_enforce<
		`Ho-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MXCONTT2 = $mol_type_enforce<
		`Er-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5V19ZYD4 = $mol_type_enforce<
		`Ca-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__34N2RU13 = $mol_type_enforce<
		`Os-Pd-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3MZ4OIHJ = $mol_type_enforce<
		`Pr-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GJOAERHH = $mol_type_enforce<
		`Cr-Ag-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F02W20N8 = $mol_type_enforce<
		`La-Ce-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A31GC33U = $mol_type_enforce<
		`Mn-Cu-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q37FZBSC = $mol_type_enforce<
		`Yb-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B46VB45S = $mol_type_enforce<
		`La-Nd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F9EXM5U2 = $mol_type_enforce<
		`Ce-Ho-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__27ZWYWEH = $mol_type_enforce<
		`Re-Ag-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NV3TXSQJ = $mol_type_enforce<
		`Tl-Mo-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U2VIK5UX = $mol_type_enforce<
		`Sm-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3I7PRPM7 = $mol_type_enforce<
		`Co-Ir-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M9LFS2Y5 = $mol_type_enforce<
		`Pm-Gd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A57L008M = $mol_type_enforce<
		`Ce-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4HTMHY5W = $mol_type_enforce<
		`Ce-Sm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XKJFI286 = $mol_type_enforce<
		`La-Tb-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZHO90SO5 = $mol_type_enforce<
		`Yb-Gd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ELBNDDZE = $mol_type_enforce<
		`Cu-Ni-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3LZWBLHB = $mol_type_enforce<
		`Rb-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__20LQEXBO = $mol_type_enforce<
		`Yb-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WF0PGCX9 = $mol_type_enforce<
		`Nd-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BR57O351 = $mol_type_enforce<
		`Tl-Cd-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZI86A0HY = $mol_type_enforce<
		`Tb-Sm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__50Q27AFC = $mol_type_enforce<
		`Sm-Gd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__02I9KMHW = $mol_type_enforce<
		`Tb-Yb-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5DM8MD43 = $mol_type_enforce<
		`Li-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O3M1IUT6 = $mol_type_enforce<
		`Pr-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9RJ070E9 = $mol_type_enforce<
		`Mg-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P6GYOQY2 = $mol_type_enforce<
		`La-Ce-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R7UBI8XM = $mol_type_enforce<
		`Th-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I93O3EMV = $mol_type_enforce<
		`Nd-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MBYYCZXC = $mol_type_enforce<
		`Eu-Hf-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KJKDYE37 = $mol_type_enforce<
		`Ce-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VQ3RTYRN = $mol_type_enforce<
		`Gd-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LS70NUG7 = $mol_type_enforce<
		`Er-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2AVUFS93 = $mol_type_enforce<
		`Ca-Pm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6FU3T8ZE = $mol_type_enforce<
		`Co-Cu-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__39089J5B = $mol_type_enforce<
		`Yb-Eu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YM7PDX0M = $mol_type_enforce<
		`Sm-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QH54WPP0 = $mol_type_enforce<
		`Y-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R84OLCYB = $mol_type_enforce<
		`Y-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__71V6QUX2 = $mol_type_enforce<
		`V-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0KZA26DT = $mol_type_enforce<
		`Ce-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M4DVU02E = $mol_type_enforce<
		`Cs-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HPGNDIOI = $mol_type_enforce<
		`Nd-Dy-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IY2GVMWS = $mol_type_enforce<
		`Li-Ho-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N2GSE2EJ = $mol_type_enforce<
		`Si-Ag-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SXOMUH6A = $mol_type_enforce<
		`Yb-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OB2GNZJM = $mol_type_enforce<
		`Tl-Cd-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YF5Q8BL4 = $mol_type_enforce<
		`Tb-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CLKVM0ZZ = $mol_type_enforce<
		`Ce-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OGRNFZQE = $mol_type_enforce<
		`Yb-Pr-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YXZF8NJ4 = $mol_type_enforce<
		`Nd-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P0WNGJWS = $mol_type_enforce<
		`Pr-Nd-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VGCOPIT5 = $mol_type_enforce<
		`Li-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2J12YLDT = $mol_type_enforce<
		`Yb-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IKAOQ5MN = $mol_type_enforce<
		`Tb-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CZ2HVWFY = $mol_type_enforce<
		`La-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K11E8AA2 = $mol_type_enforce<
		`Nd-Dy-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AOVWQ0UX = $mol_type_enforce<
		`Pm-Nd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__949IC2DC = $mol_type_enforce<
		`Li-Tb-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ADWBE2GR = $mol_type_enforce<
		`Gd-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UQK2G9GX = $mol_type_enforce<
		`Li-La-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XNOCU7CJ = $mol_type_enforce<
		`Pu-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__549VRTWT = $mol_type_enforce<
		`Na-Ca-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T0Q5IDQ1 = $mol_type_enforce<
		`Y-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VQCUFA3I = $mol_type_enforce<
		`Ce-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JCSM1YVU = $mol_type_enforce<
		`Hf-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9BB9DAHR = $mol_type_enforce<
		`La-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JASUNVB2 = $mol_type_enforce<
		`Ho-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XJCTUTVJ = $mol_type_enforce<
		`Ca-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FK7CVH7W = $mol_type_enforce<
		`Nd-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F9ZE3ZF5 = $mol_type_enforce<
		`La-Tb-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D9M0T6SH = $mol_type_enforce<
		`Yb-Gd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DSUY4XLE = $mol_type_enforce<
		`Tc-Pd-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7MT7I9RV = $mol_type_enforce<
		`Li-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MK5S5CWS = $mol_type_enforce<
		`Li-Sm-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LM6Y4A66 = $mol_type_enforce<
		`Be-Ge-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LXTS1IYF = $mol_type_enforce<
		`Ca-Tb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S0KHEM2J = $mol_type_enforce<
		`K-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZKNHWB65 = $mol_type_enforce<
		`Pm-Gd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D575KGHO = $mol_type_enforce<
		`La-Sm-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3KG6PAVL = $mol_type_enforce<
		`Ca-Yb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KWUD0K2J = $mol_type_enforce<
		`Nd-Gd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VB9S8ACZ = $mol_type_enforce<
		`Pm-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O7OEC3CT = $mol_type_enforce<
		`Yb-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5SGEZ71U = $mol_type_enforce<
		`Ce-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RENROXRQ = $mol_type_enforce<
		`Dy-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EI1RETVR = $mol_type_enforce<
		`Yb-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6PD5IO81 = $mol_type_enforce<
		`Cu-Pd-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__15AV80H2 = $mol_type_enforce<
		`La-Tb-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4O9L5XQT = $mol_type_enforce<
		`Tm-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OU6VDU1C = $mol_type_enforce<
		`Tb-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WJ5YTHHE = $mol_type_enforce<
		`La-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KZ3RB5HM = $mol_type_enforce<
		`Sm-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZQMDSUDC = $mol_type_enforce<
		`Li-Mn-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8SVJUQZD = $mol_type_enforce<
		`Ce-Gd-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J8T85QHF = $mol_type_enforce<
		`Sc-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4BLWSF90 = $mol_type_enforce<
		`Ta-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2657JNHM = $mol_type_enforce<
		`Nd-Sm-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DTO7R3BO = $mol_type_enforce<
		`Nd-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KCDQC9PD = $mol_type_enforce<
		`La-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4L9U5CYA = $mol_type_enforce<
		`La-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E0PIWV6Q = $mol_type_enforce<
		`Ca-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N32ZSQWI = $mol_type_enforce<
		`Re-Hg-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AYV0OSFE = $mol_type_enforce<
		`Tb-Dy-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RG2DX1WF = $mol_type_enforce<
		`La-Tb-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YWNPSBLR = $mol_type_enforce<
		`La-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UF3Z4QJG = $mol_type_enforce<
		`Cu-Tc-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__90HQ70X8 = $mol_type_enforce<
		`Li-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OE10VPEF = $mol_type_enforce<
		`Si-Ge-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z3CIOR4V = $mol_type_enforce<
		`Gd-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__05ZNF8IC = $mol_type_enforce<
		`Sm-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__08JVP1JC = $mol_type_enforce<
		`Na-Mg-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W31A4KLV = $mol_type_enforce<
		`La-Ce-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TLW9OZH7 = $mol_type_enforce<
		`Th-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X5PB8QJ7 = $mol_type_enforce<
		`Y-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__87MGIVEY = $mol_type_enforce<
		`La-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M00YSEHM = $mol_type_enforce<
		`Dy-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7VD3PQVN = $mol_type_enforce<
		`La-Pr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RCA9N1XV = $mol_type_enforce<
		`Ca-La-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XZU3IOTU = $mol_type_enforce<
		`Pr-Dy-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IREO7DWI = $mol_type_enforce<
		`Ce-Nd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QEI8QSUV = $mol_type_enforce<
		`Lu-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P69KMIDZ = $mol_type_enforce<
		`Y-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__37EZQBDE = $mol_type_enforce<
		`Li-Ce-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7QUO4C7R = $mol_type_enforce<
		`La-Eu-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IJJFVZW2 = $mol_type_enforce<
		`Nd-Sm-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QQR83H9G = $mol_type_enforce<
		`La-Tb-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H511ZD8L = $mol_type_enforce<
		`Li-Ce-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__998XF812 = $mol_type_enforce<
		`Dy-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KYF1373S = $mol_type_enforce<
		`Zn-Ga-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GWPN3UTB = $mol_type_enforce<
		`Y-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IDBRD7UC = $mol_type_enforce<
		`Li-Pm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EMYL6RPC = $mol_type_enforce<
		`Pm-Nd-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RQZMOT0V = $mol_type_enforce<
		`Pr-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IQ86624N = $mol_type_enforce<
		`Ba-La-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EACOH0SU = $mol_type_enforce<
		`Fe-Co-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ERO82HCG = $mol_type_enforce<
		`Pr-Nd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ST6TU8N6 = $mol_type_enforce<
		`Tl-In-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7S077FTX = $mol_type_enforce<
		`Li-Pm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZVMF7E4F = $mol_type_enforce<
		`Nd-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G1CW33WB = $mol_type_enforce<
		`Pr-Nd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SOA1YTJB = $mol_type_enforce<
		`Pr-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TTGSSW54 = $mol_type_enforce<
		`Ce-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KG18E5Z7 = $mol_type_enforce<
		`Tb-Ce-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T7UU8JA7 = $mol_type_enforce<
		`V-Cr-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BQWVZTM8 = $mol_type_enforce<
		`Fe-Rh-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QKBKPHDP = $mol_type_enforce<
		`Cs-K-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N25KBJ5M = $mol_type_enforce<
		`Er-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NXPCBGZQ = $mol_type_enforce<
		`Tb-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IP3WFEA9 = $mol_type_enforce<
		`K-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EYGBM3JB = $mol_type_enforce<
		`Gd-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8L3OZMAJ = $mol_type_enforce<
		`La-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KLHILTDW = $mol_type_enforce<
		`Yb-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GSLX553C = $mol_type_enforce<
		`Ho-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9DSQWF9Y = $mol_type_enforce<
		`Pr-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AJD3FCBJ = $mol_type_enforce<
		`Mg-V-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CWVWLP3I = $mol_type_enforce<
		`Ta-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YQXX48CQ = $mol_type_enforce<
		`Li-Mg-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GW97GYI3 = $mol_type_enforce<
		`Nd-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A68NP74A = $mol_type_enforce<
		`Tm-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7QRZAVXG = $mol_type_enforce<
		`K-Hf-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LBRQGC26 = $mol_type_enforce<
		`Cs-Mg-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TEIV5VUS = $mol_type_enforce<
		`Pr-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HRFDB9NC = $mol_type_enforce<
		`Ba-Gd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3Z9PREZ9 = $mol_type_enforce<
		`Sm-Er-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UKYI8YGG = $mol_type_enforce<
		`Yb-Eu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2ZZF07HU = $mol_type_enforce<
		`Pr-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3MSMCQR7 = $mol_type_enforce<
		`La-Pm-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WTIXNDXX = $mol_type_enforce<
		`Li-Nd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0VZ94YPN = $mol_type_enforce<
		`Yb-Dy-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5XT9AFXX = $mol_type_enforce<
		`Li-Gd-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FLO79ILV = $mol_type_enforce<
		`Ta-Nb-Tl`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LDPBVBMV = $mol_type_enforce<
		`Fe-Cu-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NPUWS6VT = $mol_type_enforce<
		`Pm-Pr-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7DL3F25P = $mol_type_enforce<
		`Fe-Cu-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UEQKNW4F = $mol_type_enforce<
		`Dy-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q12R0N4C = $mol_type_enforce<
		`Nb-Hg-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0W7S673U = $mol_type_enforce<
		`Er-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7TO18859 = $mol_type_enforce<
		`Sr-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5XHC2NLT = $mol_type_enforce<
		`Dy-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2IZU0Q9A = $mol_type_enforce<
		`Tb-Yb-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SL80FJN1 = $mol_type_enforce<
		`Nd-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O8KVYURK = $mol_type_enforce<
		`Be-Zn-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8JFE1P2K = $mol_type_enforce<
		`Eu-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8ICPC7V1 = $mol_type_enforce<
		`Yb-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1CDFBD3O = $mol_type_enforce<
		`Ce-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LP2YO0KP = $mol_type_enforce<
		`Gd-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FGHE84PX = $mol_type_enforce<
		`Tl-Si-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5ARDEJGP = $mol_type_enforce<
		`Sm-Dy-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7SZQ18E5 = $mol_type_enforce<
		`La-Ho-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__59IANHWW = $mol_type_enforce<
		`Cs-Li-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UUMSEG2K = $mol_type_enforce<
		`Cu-Bi-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2ETVWQ1P = $mol_type_enforce<
		`Yb-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PXRISRX3 = $mol_type_enforce<
		`Ce-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TN11EI6O = $mol_type_enforce<
		`Li-V-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q9Z6IVXW = $mol_type_enforce<
		`Gd-Er-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZU64LGOR = $mol_type_enforce<
		`Yb-Dy-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DM614C9V = $mol_type_enforce<
		`Re-Ni-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5WJ5EOD5 = $mol_type_enforce<
		`Ca-Nd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T5S8LRQI = $mol_type_enforce<
		`Yb-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LH080ULE = $mol_type_enforce<
		`La-Tb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6VP3JO8E = $mol_type_enforce<
		`Ir-Rh-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B4MUEE48 = $mol_type_enforce<
		`Al-Tl-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XPSJY58B = $mol_type_enforce<
		`La-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VCBHZTJ0 = $mol_type_enforce<
		`Nd-Gd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YFLG3UNR = $mol_type_enforce<
		`Al-Cd-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MYDF8MOH = $mol_type_enforce<
		`Li-Ho-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3PXKMT8T = $mol_type_enforce<
		`Ho-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F7O8PSIU = $mol_type_enforce<
		`Li-Gd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8KF4ONTR = $mol_type_enforce<
		`Ga-Re-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DN0QDJEL = $mol_type_enforce<
		`Yb-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MPFYOF05 = $mol_type_enforce<
		`Li-Pr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__74QUOKV6 = $mol_type_enforce<
		`U-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__96V0I05T = $mol_type_enforce<
		`Yb-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OGTXFGF4 = $mol_type_enforce<
		`Ce-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XX05EDSO = $mol_type_enforce<
		`Fe-Ir-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8S259QIM = $mol_type_enforce<
		`Gd-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VZQ8JSDZ = $mol_type_enforce<
		`Tb-Gd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__43RTR5YY = $mol_type_enforce<
		`Ca-La-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4LDGAZ7C = $mol_type_enforce<
		`Ce-Nd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QEKULD7P = $mol_type_enforce<
		`Yb-Eu-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YNMXSICW = $mol_type_enforce<
		`Ta-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KA9IMD4I = $mol_type_enforce<
		`Th-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FN68TAZG = $mol_type_enforce<
		`Ca-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SPZD8P0R = $mol_type_enforce<
		`Er-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K2GJH3WK = $mol_type_enforce<
		`Sm-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AHDB7UZT = $mol_type_enforce<
		`Ce-Pm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JGWSLOZX = $mol_type_enforce<
		`Pr-Sm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QAZ245L2 = $mol_type_enforce<
		`Ta-Tl-In`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YI6B2QIJ = $mol_type_enforce<
		`Li-Tb-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KH2LZ358 = $mol_type_enforce<
		`Ba-Pm-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__954WXRA1 = $mol_type_enforce<
		`Li-Gd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4V5WTXQH = $mol_type_enforce<
		`Hg-B-Sb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TWYOYZ2U = $mol_type_enforce<
		`Gd-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZZ3JOUB7 = $mol_type_enforce<
		`Tb-Pr-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HHF8BAM5 = $mol_type_enforce<
		`Ce-Gd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BIAOYCFW = $mol_type_enforce<
		`Ho-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EWG6LHPO = $mol_type_enforce<
		`Y-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QPIGDHT2 = $mol_type_enforce<
		`Ir-Pt-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9W9I9X7O = $mol_type_enforce<
		`La-Tb-Yb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UW8EEOUC = $mol_type_enforce<
		`Li-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QQTO0JRB = $mol_type_enforce<
		`Tm-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3ISW8XVR = $mol_type_enforce<
		`Tb-Pr-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NDP34SQD = $mol_type_enforce<
		`Pr-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QFAUQXHC = $mol_type_enforce<
		`Re-Bi-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GVT6BZTA = $mol_type_enforce<
		`Co-Cu-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__79HMM4HL = $mol_type_enforce<
		`Nd-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IND4WXVB = $mol_type_enforce<
		`La-Pm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YGU37SQ4 = $mol_type_enforce<
		`Ca-Eu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FMCITNJD = $mol_type_enforce<
		`Ba-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QWUOFEO6 = $mol_type_enforce<
		`Na-Nb-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M4W2WCMK = $mol_type_enforce<
		`Cs-Li-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YB17NBM3 = $mol_type_enforce<
		`Gd-Dy-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I4T9MDIU = $mol_type_enforce<
		`La-Ce-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W9RLI66X = $mol_type_enforce<
		`Cu-Re-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LM2SQH1M = $mol_type_enforce<
		`Li-Mg-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5PQKLKKO = $mol_type_enforce<
		`Ce-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__53AVURSV = $mol_type_enforce<
		`Ca-La-Yb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WLOI6PB2 = $mol_type_enforce<
		`Ce-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NN8XS09T = $mol_type_enforce<
		`Zn-Cd-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WMBV2YE6 = $mol_type_enforce<
		`Nd-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NK1VSXJX = $mol_type_enforce<
		`V-Fe-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J7HZXWX4 = $mol_type_enforce<
		`Tb-Dy-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y0LYF5XI = $mol_type_enforce<
		`Hf-Th-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KGG2NZ71 = $mol_type_enforce<
		`Sc-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S9ZK5JOV = $mol_type_enforce<
		`La-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VT01MJRE = $mol_type_enforce<
		`Al-In-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6U0FTOPH = $mol_type_enforce<
		`Be-Ga-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DZ7MHXA9 = $mol_type_enforce<
		`Os-Ru-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UG4LJST8 = $mol_type_enforce<
		`Ag-Ge-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CPFA7FZR = $mol_type_enforce<
		`Pm-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RQFFORGN = $mol_type_enforce<
		`Li-La-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X1GF5J5W = $mol_type_enforce<
		`Cs-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PNJ1O2LY = $mol_type_enforce<
		`Ce-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__76UKNKDP = $mol_type_enforce<
		`Pr-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HXJZ7ZMN = $mol_type_enforce<
		`Li-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CO35AKL2 = $mol_type_enforce<
		`La-Ho-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XCGH82ZI = $mol_type_enforce<
		`Nd-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4GFN6Y1C = $mol_type_enforce<
		`Th-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KI57G07C = $mol_type_enforce<
		`Er-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__10UUKYB3 = $mol_type_enforce<
		`Gd-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CMRTBDLV = $mol_type_enforce<
		`Lu-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__202N7QH0 = $mol_type_enforce<
		`Lu-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ONE6Q1H9 = $mol_type_enforce<
		`Ce-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7DA6ORQL = $mol_type_enforce<
		`Ce-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8NEI475L = $mol_type_enforce<
		`Li-Ce-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MXC2CKQ3 = $mol_type_enforce<
		`Ce-Th-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W74M85CX = $mol_type_enforce<
		`Li-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MIIYCMMO = $mol_type_enforce<
		`Yb-Ho-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q4UG243Z = $mol_type_enforce<
		`Li-Pm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UOXIGM9H = $mol_type_enforce<
		`Ce-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3YVLJQF5 = $mol_type_enforce<
		`Cs-K-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TYESCX3T = $mol_type_enforce<
		`Tb-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q6N36BG6 = $mol_type_enforce<
		`Ce-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BXVD79LO = $mol_type_enforce<
		`Ho-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XMFKQ3TB = $mol_type_enforce<
		`Y-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9U5QOLPO = $mol_type_enforce<
		`Gd-Dy-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PB183QOI = $mol_type_enforce<
		`Gd-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X1RF4PW7 = $mol_type_enforce<
		`Li-Cr-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GU6T4CL2 = $mol_type_enforce<
		`Co-Bi-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__98XYN90R = $mol_type_enforce<
		`Gd-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GR2NS4KN = $mol_type_enforce<
		`Co-Ru-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XN6VEHEY = $mol_type_enforce<
		`Gd-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HZ5WK4LC = $mol_type_enforce<
		`Li-La-Ce`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9K1HNREE = $mol_type_enforce<
		`Be-Al-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NO9P3OMG = $mol_type_enforce<
		`Gd-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W3P5J2XL = $mol_type_enforce<
		`Pr-Dy-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8GPT3MTN = $mol_type_enforce<
		`Yb-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__844B6C8J = $mol_type_enforce<
		`La-Gd-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3YX1XE6W = $mol_type_enforce<
		`Tl-Cu-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IMBPK5PD = $mol_type_enforce<
		`Cr-Ag-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WOKC3TDJ = $mol_type_enforce<
		`Tb-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RT2E0PLK = $mol_type_enforce<
		`Nd-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2POTN79L = $mol_type_enforce<
		`Eu-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DIUSSKAY = $mol_type_enforce<
		`Ga-Ge-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2VOGTYBU = $mol_type_enforce<
		`Li-Pm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2MMOSY3Y = $mol_type_enforce<
		`Li-Nd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G77AZ5G2 = $mol_type_enforce<
		`Ba-Pr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JHX4EENB = $mol_type_enforce<
		`Li-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0TRWX5BW = $mol_type_enforce<
		`Pr-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LRKCRYHN = $mol_type_enforce<
		`Ce-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JH9UOSD7 = $mol_type_enforce<
		`Dy-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KG6VM1IL = $mol_type_enforce<
		`Ca-Eu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QIGFOQDM = $mol_type_enforce<
		`Ni-Pd-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O47WT16E = $mol_type_enforce<
		`Er-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PDHN7A0E = $mol_type_enforce<
		`Ba-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T622GMGC = $mol_type_enforce<
		`Pr-Nd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I3X0IT3T = $mol_type_enforce<
		`Ce-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XMEAZX4G = $mol_type_enforce<
		`Na-Mg-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CLICJTAG = $mol_type_enforce<
		`Cu-Ag-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O2URQ9AL = $mol_type_enforce<
		`La-Ce-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VPN96VYL = $mol_type_enforce<
		`La-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__51BKIWDE = $mol_type_enforce<
		`Tc-Ni-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E90HM7NT = $mol_type_enforce<
		`Ti-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5XAS2JNO = $mol_type_enforce<
		`Tb-Ce-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ADHFC5DL = $mol_type_enforce<
		`Hf-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K08CYWJ8 = $mol_type_enforce<
		`Lu-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8JRZHEAK = $mol_type_enforce<
		`Ta-V-In`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__913LEAWD = $mol_type_enforce<
		`Co-Ir-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I4TJ8QZG = $mol_type_enforce<
		`Na-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LVUJAHRL = $mol_type_enforce<
		`Yb-Hf-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SSWVFRUD = $mol_type_enforce<
		`Mn-Cu-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__70OGW1D0 = $mol_type_enforce<
		`Ce-Nd-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UJGFJ97B = $mol_type_enforce<
		`Pr-Gd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DGO3EC2C = $mol_type_enforce<
		`Ca-Pm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R4DN97NS = $mol_type_enforce<
		`Nd-Gd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IAEGTSPN = $mol_type_enforce<
		`Yb-Eu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0U1A5QSX = $mol_type_enforce<
		`Al-Hg-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F5LEP1N6 = $mol_type_enforce<
		`V-Cr-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NE8UAH0R = $mol_type_enforce<
		`Ce-Nd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UDXTGJ0K = $mol_type_enforce<
		`Ho-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7Z2BV6GP = $mol_type_enforce<
		`Tb-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UYAWGECK = $mol_type_enforce<
		`Ca-Tb-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7OSG5MH6 = $mol_type_enforce<
		`Nd-Ho-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5BI1HG5N = $mol_type_enforce<
		`Pu-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QR80I6PO = $mol_type_enforce<
		`V-Cu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MI7O5OTT = $mol_type_enforce<
		`Tb-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XQDYW703 = $mol_type_enforce<
		`V-Cu-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q9V3SD4R = $mol_type_enforce<
		`Fe-Ni-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__18MAP0EC = $mol_type_enforce<
		`Lu-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QURR600L = $mol_type_enforce<
		`Fe-Ni-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U2OKV6NZ = $mol_type_enforce<
		`Ca-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EWIK8Q1H = $mol_type_enforce<
		`Ca-Ce-Eu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4K9I8C4U = $mol_type_enforce<
		`Rb-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0V9KYQHH = $mol_type_enforce<
		`Nd-Sm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4F8MLYB5 = $mol_type_enforce<
		`Co-Re-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LI43G18G = $mol_type_enforce<
		`Gd-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TSC34NSL = $mol_type_enforce<
		`Eu-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TFJI2ZFJ = $mol_type_enforce<
		`Pu-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KZ1IZH7X = $mol_type_enforce<
		`Pm-Sm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L7V6J20K = $mol_type_enforce<
		`La-Ce-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NMZSNNAA = $mol_type_enforce<
		`Ga-Sn-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EU2KC2S7 = $mol_type_enforce<
		`Ba-Sr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2NI4D5K4 = $mol_type_enforce<
		`Co-Re-Hg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6ROAG11U = $mol_type_enforce<
		`La-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SU1MXEOW = $mol_type_enforce<
		`Cs-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G6JSN2HZ = $mol_type_enforce<
		`La-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NEJXSY0B = $mol_type_enforce<
		`Ce-Sm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0ECZ5QTK = $mol_type_enforce<
		`Co-Ni-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__02L8WX6G = $mol_type_enforce<
		`Mg-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P4KO6HDP = $mol_type_enforce<
		`Sc-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YTE8S0XS = $mol_type_enforce<
		`Sm-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9GDD4UYP = $mol_type_enforce<
		`Ce-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FGFI4BTD = $mol_type_enforce<
		`Li-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P9MIQY5T = $mol_type_enforce<
		`Tb-Dy-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8KNBC3M7 = $mol_type_enforce<
		`Cs-Rb-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TDD89BA5 = $mol_type_enforce<
		`Cs-Rb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__97BEFHUY = $mol_type_enforce<
		`Ce-Gd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B022WJ2L = $mol_type_enforce<
		`Mg-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G1Y83RYK = $mol_type_enforce<
		`K-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1QMKDPZG = $mol_type_enforce<
		`Rb-Na-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8OUYRP9Q = $mol_type_enforce<
		`Ba-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YKAJ65US = $mol_type_enforce<
		`Ca-Tb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4IL7FXCA = $mol_type_enforce<
		`Pr-Er-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XN4RE4KN = $mol_type_enforce<
		`Si-Ge-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MO6APMV8 = $mol_type_enforce<
		`Y-Er-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z3TAW9HR = $mol_type_enforce<
		`Zn-Si-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GA69NSXJ = $mol_type_enforce<
		`Li-Pm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RAMZLV3H = $mol_type_enforce<
		`Yb-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ELBC196V = $mol_type_enforce<
		`La-Dy-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QXHPJYMF = $mol_type_enforce<
		`La-Pm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AP2CDJVP = $mol_type_enforce<
		`Hf-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SGRAD2KF = $mol_type_enforce<
		`K-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2B8MZOXZ = $mol_type_enforce<
		`Lu-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L0O1I6CS = $mol_type_enforce<
		`Li-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AZVRG8SJ = $mol_type_enforce<
		`Cd-Ga-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DHDLY6L2 = $mol_type_enforce<
		`Cd-Ga-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WICKXC4M = $mol_type_enforce<
		`Gd-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VOQXXMWP = $mol_type_enforce<
		`Cu-W-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O2D14D8R = $mol_type_enforce<
		`Yb-Nd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U3J85KLG = $mol_type_enforce<
		`Er-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KU4ZOIL0 = $mol_type_enforce<
		`Tb-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JJFE6DEI = $mol_type_enforce<
		`Er-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B24LM8DD = $mol_type_enforce<
		`Tc-Pt-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ACHU74NF = $mol_type_enforce<
		`Dy-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XR9YEB0F = $mol_type_enforce<
		`Cu-Pd-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9I5DXB1F = $mol_type_enforce<
		`Y-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__237SHS1B = $mol_type_enforce<
		`La-Yb-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5XQ0HGUU = $mol_type_enforce<
		`Lu-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZSUDB5Q9 = $mol_type_enforce<
		`Cr-Cu-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DSF86F1Y = $mol_type_enforce<
		`Y-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HZFMR0WQ = $mol_type_enforce<
		`Li-La-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TXU09901 = $mol_type_enforce<
		`Tb-Sm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3OLUZ2KD = $mol_type_enforce<
		`Tb-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MJV2T5PK = $mol_type_enforce<
		`Ce-Er-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L48UI9L7 = $mol_type_enforce<
		`Gd-Dy-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IB1RHP0U = $mol_type_enforce<
		`Ca-Ce-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__79PTE1WI = $mol_type_enforce<
		`Ta-Tl-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZVBT15ME = $mol_type_enforce<
		`Pr-Nd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RSF35C35 = $mol_type_enforce<
		`Li-Pr-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IZP5XHPF = $mol_type_enforce<
		`La-Pr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TVQLCT0C = $mol_type_enforce<
		`Tm-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K41KQ6XO = $mol_type_enforce<
		`Ce-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U4HXR2XJ = $mol_type_enforce<
		`Ba-Yb-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KNOH7TPH = $mol_type_enforce<
		`Na-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E1PZNPSX = $mol_type_enforce<
		`Er-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__26QBOKLA = $mol_type_enforce<
		`Er-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H3C72PKO = $mol_type_enforce<
		`Cd-Ge-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VAU0984M = $mol_type_enforce<
		`Ba-Eu-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CW7MCK1V = $mol_type_enforce<
		`Re-Ag-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6TI7SZ0V = $mol_type_enforce<
		`Pr-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AJAUV0VJ = $mol_type_enforce<
		`Lu-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VGIEYBGZ = $mol_type_enforce<
		`Fe-Co-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M6KBAH5L = $mol_type_enforce<
		`Li-Mn-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OFDKEB1F = $mol_type_enforce<
		`Nd-Ho-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6FEHGXYD = $mol_type_enforce<
		`La-Pm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7XVKTHAV = $mol_type_enforce<
		`Mg-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CEEFDL8K = $mol_type_enforce<
		`Ce-Pm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FJ0PQV8L = $mol_type_enforce<
		`Pd-Ru-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F3NF54CE = $mol_type_enforce<
		`Gd-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CUE0CZYT = $mol_type_enforce<
		`Nd-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FN81YDA6 = $mol_type_enforce<
		`Pr-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T7KTX309 = $mol_type_enforce<
		`Sc-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O2JG2026 = $mol_type_enforce<
		`Co-Cu-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AJVG3XFM = $mol_type_enforce<
		`Eu-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ASDZ1WGW = $mol_type_enforce<
		`Y-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VDF6H65S = $mol_type_enforce<
		`Tb-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KBPR66GO = $mol_type_enforce<
		`La-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__67LSQ818 = $mol_type_enforce<
		`Th-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GOBN2FPG = $mol_type_enforce<
		`Li-Nd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TLNNLVKD = $mol_type_enforce<
		`Pm-Gd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1YSI0E7E = $mol_type_enforce<
		`Tl-Cu-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DRLWE67V = $mol_type_enforce<
		`Pr-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0EP1KFT1 = $mol_type_enforce<
		`Ca-Tb-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FJ770BFN = $mol_type_enforce<
		`Co-Pd-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XSJ1CV1H = $mol_type_enforce<
		`Li-Pm-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RXP8BWLS = $mol_type_enforce<
		`Cu-Os-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9V6HV5NT = $mol_type_enforce<
		`Tb-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ABU42XWI = $mol_type_enforce<
		`Ni-Ag-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K7CQJWR1 = $mol_type_enforce<
		`Li-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UZCGXGLA = $mol_type_enforce<
		`Na-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VRMEEJVH = $mol_type_enforce<
		`La-Sm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8VGSDI51 = $mol_type_enforce<
		`Ca-La-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HF5W2L68 = $mol_type_enforce<
		`Sr-Ca-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FPYBPCEM = $mol_type_enforce<
		`La-Mn-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NROZXV0Q = $mol_type_enforce<
		`La-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__URABRW8V = $mol_type_enforce<
		`Tb-Ce-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ISJYBWSH = $mol_type_enforce<
		`Mo-Pb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__655ACISR = $mol_type_enforce<
		`Tb-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JUDS9EI7 = $mol_type_enforce<
		`Al-Ga-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__04DVXVAL = $mol_type_enforce<
		`V-Fe-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__654EY8UK = $mol_type_enforce<
		`Nd-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VVRMVRCO = $mol_type_enforce<
		`Tl-Si-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5KF3CEWZ = $mol_type_enforce<
		`Tb-Ce-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4EEZXKR8 = $mol_type_enforce<
		`Cs-Pr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X3N0F243 = $mol_type_enforce<
		`Nd-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8IJB12AO = $mol_type_enforce<
		`Eu-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ODG1HDZS = $mol_type_enforce<
		`La-Dy-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AENYMPXV = $mol_type_enforce<
		`Mg-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TDS4TZ7L = $mol_type_enforce<
		`Li-Fe-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L75HBWWA = $mol_type_enforce<
		`Na-Li-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FREY1RWV = $mol_type_enforce<
		`La-Tb-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WTUNRB1D = $mol_type_enforce<
		`Th-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IKV0PTDP = $mol_type_enforce<
		`Ce-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HY9I9ZBK = $mol_type_enforce<
		`Dy-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S1RV29BE = $mol_type_enforce<
		`Nd-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3OZQIXZP = $mol_type_enforce<
		`Yb-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LGPPR3MZ = $mol_type_enforce<
		`Ga-Si-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5UHO7PYV = $mol_type_enforce<
		`Pr-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NPS10FZU = $mol_type_enforce<
		`Eu-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GBRMJPZS = $mol_type_enforce<
		`Hf-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CGXXJ9O7 = $mol_type_enforce<
		`Pu-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PHC1EW6J = $mol_type_enforce<
		`Li-Nd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RRKGJ21Y = $mol_type_enforce<
		`Cu-Ag-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__240LTCR0 = $mol_type_enforce<
		`Sm-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CN5FTM3Q = $mol_type_enforce<
		`Gd-Dy-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8N0FAR7V = $mol_type_enforce<
		`Ho-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__53ZYENCR = $mol_type_enforce<
		`Cu-Ag-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q843RKIX = $mol_type_enforce<
		`Tc-Ni-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__06RPF479 = $mol_type_enforce<
		`Y-Lu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W4NBZ9XP = $mol_type_enforce<
		`Ni-Os-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OM3FW06E = $mol_type_enforce<
		`Dy-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RXRS2Q8U = $mol_type_enforce<
		`Fe-Cu-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ESKBNY4F = $mol_type_enforce<
		`Ta-Tl-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EHT13GAQ = $mol_type_enforce<
		`Eu-Y-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__41RPHNM5 = $mol_type_enforce<
		`Co-Pd-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0QEWWQXM = $mol_type_enforce<
		`Re-Hg-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JY1IHXO9 = $mol_type_enforce<
		`La-Yb-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FW3H8TOQ = $mol_type_enforce<
		`Nd-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6T6VYO56 = $mol_type_enforce<
		`Tb-Yb-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BB94WOIA = $mol_type_enforce<
		`Yb-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SM03X2HG = $mol_type_enforce<
		`K-Li-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0CAUP8U0 = $mol_type_enforce<
		`Re-Tc-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WYRQ5VR2 = $mol_type_enforce<
		`Cs-K-Al`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P6QU34EV = $mol_type_enforce<
		`Pr-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6OHZFRLY = $mol_type_enforce<
		`Yb-Eu-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__45SZVIX1 = $mol_type_enforce<
		`Y-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ELAAOXJY = $mol_type_enforce<
		`Yb-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__098S0AZK = $mol_type_enforce<
		`Nd-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C532QKCO = $mol_type_enforce<
		`Sm-Dy-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OGBMDZH9 = $mol_type_enforce<
		`Y-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XRHCB9ZJ = $mol_type_enforce<
		`Ce-Er-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CRFLZ0S3 = $mol_type_enforce<
		`Re-Tc-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FVAG2OH0 = $mol_type_enforce<
		`Ce-Nd-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C2TE5P64 = $mol_type_enforce<
		`Li-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3U7J9U6D = $mol_type_enforce<
		`Y-Tm-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JTE0QEHE = $mol_type_enforce<
		`Al-Tl-Zn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__17KTF9HG = $mol_type_enforce<
		`Li-La-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AG9UYYS4 = $mol_type_enforce<
		`Pr-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8XPWD43G = $mol_type_enforce<
		`Eu-Th-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q90U4NOR = $mol_type_enforce<
		`Pr-Nd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MPUUPOOO = $mol_type_enforce<
		`Pm-Gd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HTNZ0QRQ = $mol_type_enforce<
		`Na-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HFBTB8LG = $mol_type_enforce<
		`Al-Zn-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I6XLU65E = $mol_type_enforce<
		`Ba-Sm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YEDMS8JB = $mol_type_enforce<
		`Y-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CM2P6315 = $mol_type_enforce<
		`Nd-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U1N8YSNI = $mol_type_enforce<
		`Co-Ir-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZHMPMXN3 = $mol_type_enforce<
		`Yb-Gd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0TB6A0TD = $mol_type_enforce<
		`Hg-Ge-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HWFGVWYY = $mol_type_enforce<
		`Ho-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IBPCWIC0 = $mol_type_enforce<
		`Pr-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KW9DHDUA = $mol_type_enforce<
		`Tb-Dy-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PW5LALSE = $mol_type_enforce<
		`Ir-Ru-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P1APDJ6X = $mol_type_enforce<
		`Ce-Pm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7HL9X262 = $mol_type_enforce<
		`Tm-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8WSZO9JZ = $mol_type_enforce<
		`Pm-Nd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O90WGECM = $mol_type_enforce<
		`Yb-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N7SPY9FZ = $mol_type_enforce<
		`La-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MMS6IUOI = $mol_type_enforce<
		`Sm-Pu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q2ZLW746 = $mol_type_enforce<
		`Hf-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__64CHQ5NK = $mol_type_enforce<
		`Ta-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AR8NEWHM = $mol_type_enforce<
		`Be-Sn-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WAPSH6R3 = $mol_type_enforce<
		`Pm-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZVX3PBIA = $mol_type_enforce<
		`Yb-Eu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1JS3JSFG = $mol_type_enforce<
		`Ho-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7190C5YZ = $mol_type_enforce<
		`Tb-Dy-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BZ6KCTEF = $mol_type_enforce<
		`Ce-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9ZGDNFAE = $mol_type_enforce<
		`Al-Zn-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RYYD9DLI = $mol_type_enforce<
		`Ca-La-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E0HYTFCM = $mol_type_enforce<
		`Yb-Eu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AMZXMJ7Z = $mol_type_enforce<
		`Cs-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7UMO5I0P = $mol_type_enforce<
		`Na-Ca-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BKRG89NE = $mol_type_enforce<
		`Tb-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z8UNFUUP = $mol_type_enforce<
		`Sr-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RZ35Z3P9 = $mol_type_enforce<
		`Tc-Ir-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HN5UOP7Q = $mol_type_enforce<
		`Y-Hf-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZNTS27JG = $mol_type_enforce<
		`Ti-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HHNTSIDD = $mol_type_enforce<
		`Pr-Gd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0FF5FYOE = $mol_type_enforce<
		`Co-Cu-Re`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OODSXRGD = $mol_type_enforce<
		`La-Y-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XR07VPWX = $mol_type_enforce<
		`Re-Sn-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OM1LY077 = $mol_type_enforce<
		`Yb-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__19R0XXAV = $mol_type_enforce<
		`Nd-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9UCKXV9R = $mol_type_enforce<
		`Fe-Ni-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CDNJ8OFS = $mol_type_enforce<
		`Pr-Nd-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__83KJFB9V = $mol_type_enforce<
		`Yb-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TE64HTWY = $mol_type_enforce<
		`Ce-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GOT9JRDB = $mol_type_enforce<
		`Ac-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q0LO2XPL = $mol_type_enforce<
		`Zn-B-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LN2R9KGJ = $mol_type_enforce<
		`La-Yb-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CUIH5YD3 = $mol_type_enforce<
		`Ba-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GRXC48VC = $mol_type_enforce<
		`Mn-Co-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RGGUNPWK = $mol_type_enforce<
		`Dy-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XSFHQSDY = $mol_type_enforce<
		`Er-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XDYNBE0B = $mol_type_enforce<
		`La-Y-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NSFCEIKN = $mol_type_enforce<
		`Tc-Ir-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YI6Y5371 = $mol_type_enforce<
		`Pr-Er-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K58I8XTL = $mol_type_enforce<
		`Yb-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TCF24OH6 = $mol_type_enforce<
		`Mn-Fe-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6CPYM8QS = $mol_type_enforce<
		`Ca-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZMC8U0DW = $mol_type_enforce<
		`Pd-Ru-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z9BRUEXV = $mol_type_enforce<
		`Ce-Hf-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DDQFU1AV = $mol_type_enforce<
		`La-Pm-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YNUNA9OK = $mol_type_enforce<
		`Tb-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KCK08QMI = $mol_type_enforce<
		`Ba-Eu-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L4CB79G1 = $mol_type_enforce<
		`Ta-Bi-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N5SMPITZ = $mol_type_enforce<
		`Nd-Dy-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XPHBCOQ5 = $mol_type_enforce<
		`Tl-B-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ACGJU4R9 = $mol_type_enforce<
		`Li-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YY483LCW = $mol_type_enforce<
		`Li-La-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__45CH1EBG = $mol_type_enforce<
		`Al-Sn-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WXS6WKJT = $mol_type_enforce<
		`Ce-Pm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N7AE131B = $mol_type_enforce<
		`Ni-Au-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VFGP7FYE = $mol_type_enforce<
		`Er-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FANWJF18 = $mol_type_enforce<
		`Pr-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__688AOSXW = $mol_type_enforce<
		`La-Nd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CCBY3ZHR = $mol_type_enforce<
		`Ni-Ag-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SJPLZ0U9 = $mol_type_enforce<
		`La-Ce-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V5DEE4T8 = $mol_type_enforce<
		`La-Yb-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TEOXH5ZH = $mol_type_enforce<
		`Pm-Nd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LH6831JZ = $mol_type_enforce<
		`Ce-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8W10ABHO = $mol_type_enforce<
		`Eu-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5JYYEIPA = $mol_type_enforce<
		`Pm-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5GUBS1EH = $mol_type_enforce<
		`Ce-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QLCMC0JQ = $mol_type_enforce<
		`Li-Cu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TO2X3NJJ = $mol_type_enforce<
		`Sm-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8NMJRZNY = $mol_type_enforce<
		`Tb-Nd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MA7DOZL9 = $mol_type_enforce<
		`Nd-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4W7495EF = $mol_type_enforce<
		`Rb-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7HGTSN4V = $mol_type_enforce<
		`Pr-Y-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GDTE895D = $mol_type_enforce<
		`Y-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5BFBHNU8 = $mol_type_enforce<
		`Cd-Mo-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QJ9HX765 = $mol_type_enforce<
		`Li-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KDPGOS15 = $mol_type_enforce<
		`V-Cu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HT15H97S = $mol_type_enforce<
		`Pm-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__61APZF9Y = $mol_type_enforce<
		`Yb-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4KBIHC4V = $mol_type_enforce<
		`Tb-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PCH4C95E = $mol_type_enforce<
		`Ca-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__414MG13B = $mol_type_enforce<
		`Tb-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4JKRETGX = $mol_type_enforce<
		`Y-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7I4VO7FH = $mol_type_enforce<
		`Rb-Li-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OZ09166S = $mol_type_enforce<
		`Hg-Sb-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__91OT0T8B = $mol_type_enforce<
		`La-Dy-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9222Y31B = $mol_type_enforce<
		`Pd-Rh-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YWLRLWKC = $mol_type_enforce<
		`K-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7CUJN970 = $mol_type_enforce<
		`Li-La-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E6Q6H52J = $mol_type_enforce<
		`Pr-Dy-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0IMAA42S = $mol_type_enforce<
		`Yb-Pr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PT2W85CN = $mol_type_enforce<
		`La-Nd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2BUT3PL2 = $mol_type_enforce<
		`Sm-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IBAMJF7S = $mol_type_enforce<
		`Ce-Eu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0K98Q6WR = $mol_type_enforce<
		`Nd-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I1GOY052 = $mol_type_enforce<
		`Ag-Ir-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BYJM3PLP = $mol_type_enforce<
		`Pm-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MYMI6YZT = $mol_type_enforce<
		`Yb-Dy-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QIQB7RJJ = $mol_type_enforce<
		`U-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O1X5VS87 = $mol_type_enforce<
		`Ca-Tb-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0B61XWI6 = $mol_type_enforce<
		`Tb-Yb-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JZ4U0CFW = $mol_type_enforce<
		`Ce-Pm-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z8NGX0QZ = $mol_type_enforce<
		`Sr-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P3KD4XIE = $mol_type_enforce<
		`Co-Ni-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DKD3G1TO = $mol_type_enforce<
		`Rb-Mg-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SXS2MGMC = $mol_type_enforce<
		`Ti-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UYX7EHHK = $mol_type_enforce<
		`Th-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JIQCQ35K = $mol_type_enforce<
		`Yb-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5VFQD29V = $mol_type_enforce<
		`Ta-Cu-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EQU1HTN2 = $mol_type_enforce<
		`La-Yb-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EIT5FOU2 = $mol_type_enforce<
		`Pr-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R87IK5NY = $mol_type_enforce<
		`Rb-Na-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__THMQPKUT = $mol_type_enforce<
		`Ce-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XJLPDWSJ = $mol_type_enforce<
		`Ce-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RHCKK1S9 = $mol_type_enforce<
		`Eu-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OA0F9ODW = $mol_type_enforce<
		`La-Ho-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3K3V5FET = $mol_type_enforce<
		`Cd-Ga-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AKYB8YTF = $mol_type_enforce<
		`Eu-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HOXS9NOH = $mol_type_enforce<
		`Nd-Gd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2T163ZX5 = $mol_type_enforce<
		`Na-Li-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XZ1HA16A = $mol_type_enforce<
		`Tb-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F670P26W = $mol_type_enforce<
		`Th-Sc-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RY30W6QO = $mol_type_enforce<
		`Lu-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CATVHQ4R = $mol_type_enforce<
		`Tb-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CQHOY5PQ = $mol_type_enforce<
		`Tb-Sm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1ERFT1JD = $mol_type_enforce<
		`Dy-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YJ2VKO6E = $mol_type_enforce<
		`Rb-Li-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H55Z17ZY = $mol_type_enforce<
		`Li-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LQPLQ903 = $mol_type_enforce<
		`Re-Tc-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZIGFKX47 = $mol_type_enforce<
		`Pm-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QRF6MOHE = $mol_type_enforce<
		`La-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5A213AMM = $mol_type_enforce<
		`La-Dy-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__73WW7IE8 = $mol_type_enforce<
		`Mg-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S0MQB2Z9 = $mol_type_enforce<
		`Nd-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B5TQWNFZ = $mol_type_enforce<
		`Dy-Y-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D03AL6HB = $mol_type_enforce<
		`Tb-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__47G4SCP9 = $mol_type_enforce<
		`Pd-Pt-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S5QOX75W = $mol_type_enforce<
		`Cs-Rb-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1QT26DOP = $mol_type_enforce<
		`Ca-Nd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XTVP92FQ = $mol_type_enforce<
		`La-Pm-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KK13ERF5 = $mol_type_enforce<
		`Sm-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1MD2E5BZ = $mol_type_enforce<
		`Hg-Bi-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HQ0CZ7XS = $mol_type_enforce<
		`Co-Ag-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VUJ18D3C = $mol_type_enforce<
		`Ce-Pm-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7UOKQM99 = $mol_type_enforce<
		`Cu-Re-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R5943EW8 = $mol_type_enforce<
		`La-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0TBUGLHL = $mol_type_enforce<
		`Ba-Pr-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W2DOEYJY = $mol_type_enforce<
		`La-Yb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EGGXAHPU = $mol_type_enforce<
		`Li-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D0XAM4FU = $mol_type_enforce<
		`Th-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y7IIHVIX = $mol_type_enforce<
		`Li-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LDG8RT75 = $mol_type_enforce<
		`Zn-Si-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZYAJMJ4Z = $mol_type_enforce<
		`Sc-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y3GTQSP0 = $mol_type_enforce<
		`Sm-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2IEC5QUP = $mol_type_enforce<
		`Li-La-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3V48Y3IQ = $mol_type_enforce<
		`Li-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__68A9VHNX = $mol_type_enforce<
		`Y-Hf-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0AZHAS1H = $mol_type_enforce<
		`Ti-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5FNQT35N = $mol_type_enforce<
		`Sm-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IN4WJKYZ = $mol_type_enforce<
		`Li-Cu-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y6YDDUSV = $mol_type_enforce<
		`Ce-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SNSCXV5W = $mol_type_enforce<
		`Tm-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S0MYCQXO = $mol_type_enforce<
		`Yb-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YOJBTFG5 = $mol_type_enforce<
		`Ca-Yb-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8TZUU3AL = $mol_type_enforce<
		`Ce-Eu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RZE3Y0K2 = $mol_type_enforce<
		`Nd-Er-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RTNHE42L = $mol_type_enforce<
		`Hf-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LT3OREIJ = $mol_type_enforce<
		`Co-Ag-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0ES6XSAT = $mol_type_enforce<
		`Co-Ir-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MCQQBJDH = $mol_type_enforce<
		`Ca-Mn-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q0YPTDZQ = $mol_type_enforce<
		`Pu-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__66EGI086 = $mol_type_enforce<
		`V-Bi-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SIZ5TVJU = $mol_type_enforce<
		`Y-Hf-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HL1DUONB = $mol_type_enforce<
		`Dy-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KF28HP1G = $mol_type_enforce<
		`Ce-Sm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OBJ5FUYT = $mol_type_enforce<
		`Ni-Ir-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2CCVJKCW = $mol_type_enforce<
		`Re-Os-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R8UMFOJG = $mol_type_enforce<
		`Ce-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C2347XJX = $mol_type_enforce<
		`Er-Hf-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KYPUE5VP = $mol_type_enforce<
		`Cr-Fe-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DTGTHM0E = $mol_type_enforce<
		`Li-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1OBERIQ2 = $mol_type_enforce<
		`Eu-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__26UW5D5Y = $mol_type_enforce<
		`Yb-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4HXLIV24 = $mol_type_enforce<
		`Ga-Ge-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__URVPS283 = $mol_type_enforce<
		`Eu-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__666BY3RM = $mol_type_enforce<
		`Li-Pr-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__81L9GJ0N = $mol_type_enforce<
		`Yb-Pr-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZQV8FP2G = $mol_type_enforce<
		`Sm-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6KV87V7G = $mol_type_enforce<
		`La-Nd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8VMYESFL = $mol_type_enforce<
		`Ce-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__09V3MPOX = $mol_type_enforce<
		`Li-Pm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WSK9FIEY = $mol_type_enforce<
		`Y-Sc-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3OZKDQPX = $mol_type_enforce<
		`Pr-Sm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UISFRKAE = $mol_type_enforce<
		`Pr-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3JMNQADY = $mol_type_enforce<
		`Re-Tc-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7H47KFAW = $mol_type_enforce<
		`Nd-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q1BIMGD2 = $mol_type_enforce<
		`Tl-In-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ORT5133J = $mol_type_enforce<
		`Yb-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SW5MZA0Y = $mol_type_enforce<
		`Tb-Pr-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q6YPB9D0 = $mol_type_enforce<
		`Mn-Fe-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W2UME57H = $mol_type_enforce<
		`Ce-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q4G79HGS = $mol_type_enforce<
		`K-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__614YOTXJ = $mol_type_enforce<
		`Ce-Sm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NX6FNJRO = $mol_type_enforce<
		`Ni-Ag-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P7SRLGGS = $mol_type_enforce<
		`K-Mg-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EY32MHCX = $mol_type_enforce<
		`Tb-Nd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RHMQ6XW6 = $mol_type_enforce<
		`Pu-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LJWU7L50 = $mol_type_enforce<
		`La-Gd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9VUAYSB8 = $mol_type_enforce<
		`Pm-Nd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JZ34RU2P = $mol_type_enforce<
		`La-Dy-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6WFWQZ8X = $mol_type_enforce<
		`Tb-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5YP2CEAK = $mol_type_enforce<
		`Cu-Tc-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TXYF1HBN = $mol_type_enforce<
		`Li-Tb-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B02UWCJM = $mol_type_enforce<
		`Tb-Sm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NQSD3UFY = $mol_type_enforce<
		`Sr-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I9VHIIVA = $mol_type_enforce<
		`Pm-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0BLARZY0 = $mol_type_enforce<
		`K-Rb-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GIW5YQQP = $mol_type_enforce<
		`Gd-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F4TGECB2 = $mol_type_enforce<
		`Y-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__484TS1AC = $mol_type_enforce<
		`Ce-Eu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5BDB6YMG = $mol_type_enforce<
		`Yb-Nd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__96NR8B0H = $mol_type_enforce<
		`Er-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MHZM6IBS = $mol_type_enforce<
		`Pr-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WCKE4GUJ = $mol_type_enforce<
		`Eu-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FBQH3QHG = $mol_type_enforce<
		`Gd-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B9NTC5YL = $mol_type_enforce<
		`Li-Ce-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N66XOJRQ = $mol_type_enforce<
		`Na-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PKOO8QTF = $mol_type_enforce<
		`Sm-Gd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L165A4UP = $mol_type_enforce<
		`La-Pr-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ASFS2R3N = $mol_type_enforce<
		`Ga-Re-Hg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5CE584AZ = $mol_type_enforce<
		`Li-La-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AF1F7XWO = $mol_type_enforce<
		`Co-Ni-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CHYSHCSQ = $mol_type_enforce<
		`La-Tb-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3EJXJQY3 = $mol_type_enforce<
		`Yb-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__060JUE4G = $mol_type_enforce<
		`Er-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QQQD6MBH = $mol_type_enforce<
		`Tl-Ga-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UK4ACSFT = $mol_type_enforce<
		`Yb-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8L6IT584 = $mol_type_enforce<
		`Co-Ag-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ODQHVA1U = $mol_type_enforce<
		`Li-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HJ9F490L = $mol_type_enforce<
		`Rb-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6V7ZJOY8 = $mol_type_enforce<
		`K-Li-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XVRZQB63 = $mol_type_enforce<
		`Dy-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S03LKNPJ = $mol_type_enforce<
		`Pu-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D9A8CBQ6 = $mol_type_enforce<
		`Li-La-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RSNJYGNE = $mol_type_enforce<
		`Tb-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D0CS5W5E = $mol_type_enforce<
		`La-Pr-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7N2O0QUF = $mol_type_enforce<
		`Tb-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OV70AV4Q = $mol_type_enforce<
		`Tb-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5QSPF1I4 = $mol_type_enforce<
		`Ba-Ca-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y2SC4206 = $mol_type_enforce<
		`Gd-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CXQGA1FQ = $mol_type_enforce<
		`Ta-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T9WET708 = $mol_type_enforce<
		`La-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EWRZED77 = $mol_type_enforce<
		`La-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HWRS19PN = $mol_type_enforce<
		`Ge-B-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VF8TXJ1J = $mol_type_enforce<
		`Li-Pr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9DHMW8L3 = $mol_type_enforce<
		`Cu-Pt-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6KX2NFBH = $mol_type_enforce<
		`La-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZCDBZ7HL = $mol_type_enforce<
		`Tb-Pr-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EFHVAVZN = $mol_type_enforce<
		`Eu-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7E3I3E3Z = $mol_type_enforce<
		`Ce-Tm-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GM2AFNJG = $mol_type_enforce<
		`Pr-Tm-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8M4W18G7 = $mol_type_enforce<
		`La-Gd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LBHW8TGA = $mol_type_enforce<
		`Pm-Pr-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4IYL429F = $mol_type_enforce<
		`Sm-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NTKBY8B3 = $mol_type_enforce<
		`Mn-Ni-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FJ5PBGK7 = $mol_type_enforce<
		`Ce-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GAR0M03G = $mol_type_enforce<
		`Rb-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G716Q06F = $mol_type_enforce<
		`La-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YDNHI3NT = $mol_type_enforce<
		`Ca-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7470MNQC = $mol_type_enforce<
		`Sm-Lu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XS4R3IFT = $mol_type_enforce<
		`Li-V-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D8K2BIAM = $mol_type_enforce<
		`Y-Er-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__51Y72LL3 = $mol_type_enforce<
		`Nd-Dy-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AY89OZST = $mol_type_enforce<
		`Pm-Pr-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MJKFUPDI = $mol_type_enforce<
		`Mg-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5A2S749R = $mol_type_enforce<
		`La-Yb-Eu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9XUI87Z1 = $mol_type_enforce<
		`Gd-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J8U3IT5U = $mol_type_enforce<
		`Eu-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XJKO65Z5 = $mol_type_enforce<
		`Tb-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VNE6ZNVV = $mol_type_enforce<
		`Cs-Rb-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__25WFVCWN = $mol_type_enforce<
		`Tb-Pr-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0ULYQ400 = $mol_type_enforce<
		`Cd-Bi-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P8VHO9LF = $mol_type_enforce<
		`Cu-Ir-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MYCO4BBK = $mol_type_enforce<
		`Gd-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9JWHR9FN = $mol_type_enforce<
		`Pr-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OKJYU8K8 = $mol_type_enforce<
		`La-Nd-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2GVTX71H = $mol_type_enforce<
		`Y-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RSI8D4CB = $mol_type_enforce<
		`Ni-Ag-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IDZ4HVKE = $mol_type_enforce<
		`K-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TTQW8PFE = $mol_type_enforce<
		`Nd-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S0423MYJ = $mol_type_enforce<
		`Pr-Nd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__77EKLR96 = $mol_type_enforce<
		`La-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PV6769EQ = $mol_type_enforce<
		`Yb-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DW70XGB9 = $mol_type_enforce<
		`Dy-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8GGI0MLW = $mol_type_enforce<
		`La-Nd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I4CEDZUE = $mol_type_enforce<
		`Ce-Pr-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IG648Y7X = $mol_type_enforce<
		`Ce-Nd-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TQTSF6MO = $mol_type_enforce<
		`Y-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MUKRDFWF = $mol_type_enforce<
		`Tl-Ni-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WP76V6KL = $mol_type_enforce<
		`Nd-Gd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LNJ0810O = $mol_type_enforce<
		`K-Li-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OCDW7KRF = $mol_type_enforce<
		`Li-Ce-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VWNZT04T = $mol_type_enforce<
		`Mn-Ni-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WXRSEM58 = $mol_type_enforce<
		`Ho-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H4QW7DQ7 = $mol_type_enforce<
		`Pm-Dy-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5CODS81U = $mol_type_enforce<
		`Ce-Sm-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J1GHQ0WF = $mol_type_enforce<
		`Ni-Os-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UJGJ05WL = $mol_type_enforce<
		`Cr-Mo-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X600N9KY = $mol_type_enforce<
		`Er-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BXXXQM11 = $mol_type_enforce<
		`Ce-Nd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RT6LR5MI = $mol_type_enforce<
		`Zn-Ga-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O0VE96G2 = $mol_type_enforce<
		`Sm-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VSMJFXPW = $mol_type_enforce<
		`Eu-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MAZLIOMV = $mol_type_enforce<
		`Fe-Pd-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HRKG9Z39 = $mol_type_enforce<
		`Co-Re-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L5L4XCEJ = $mol_type_enforce<
		`Sm-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PV1Z0V8O = $mol_type_enforce<
		`Fe-Cu-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KZEKQKDK = $mol_type_enforce<
		`Tm-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y89DZSSG = $mol_type_enforce<
		`Ta-Nb-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MV9OY6VT = $mol_type_enforce<
		`Ho-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ALM5U7JQ = $mol_type_enforce<
		`Li-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__71ZHTW0O = $mol_type_enforce<
		`Yb-Er-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__02416JNQ = $mol_type_enforce<
		`Fe-Ni-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZEJBS8A5 = $mol_type_enforce<
		`Nd-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NJX6WJTJ = $mol_type_enforce<
		`La-Pr-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NL4WEHLU = $mol_type_enforce<
		`Mg-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2MU28JUV = $mol_type_enforce<
		`La-Pr-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V9MAFLMN = $mol_type_enforce<
		`Y-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F78782J7 = $mol_type_enforce<
		`Cu-Ni-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RYU17JBL = $mol_type_enforce<
		`Rb-Li-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DEI0OCYZ = $mol_type_enforce<
		`Li-Ho-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4FHB80FW = $mol_type_enforce<
		`Fe-Ag-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TN242B1P = $mol_type_enforce<
		`Eu-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ER6FYVM1 = $mol_type_enforce<
		`Nd-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LEGUFW6M = $mol_type_enforce<
		`Pm-Pr-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YAEY6K5H = $mol_type_enforce<
		`Sm-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PJ3V24GC = $mol_type_enforce<
		`Zn-Ga-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WIFIDM14 = $mol_type_enforce<
		`Tl-Ga-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RGRP85FS = $mol_type_enforce<
		`La-Tb-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MN4F6XGK = $mol_type_enforce<
		`Tm-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5WCR2A47 = $mol_type_enforce<
		`Sr-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2OOGUA7O = $mol_type_enforce<
		`Y-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y8A67WY1 = $mol_type_enforce<
		`Tb-Yb-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G9CIXO4J = $mol_type_enforce<
		`La-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YWAK1XWY = $mol_type_enforce<
		`Dy-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z7KGXH8Z = $mol_type_enforce<
		`Cs-Hf-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9R0E4Z2U = $mol_type_enforce<
		`Ba-Sm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5R4LVT1I = $mol_type_enforce<
		`Pr-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J4WSZAT8 = $mol_type_enforce<
		`Nd-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B6RQJ0EX = $mol_type_enforce<
		`Tm-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NLKOX7YY = $mol_type_enforce<
		`Li-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6ILJ2N22 = $mol_type_enforce<
		`Gd-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3XL8VPIT = $mol_type_enforce<
		`Ti-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FIW8839A = $mol_type_enforce<
		`Sc-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F1PRGQNC = $mol_type_enforce<
		`La-Sm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GF2M9YH4 = $mol_type_enforce<
		`Ce-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UDE4SS24 = $mol_type_enforce<
		`Y-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K17L8ZOP = $mol_type_enforce<
		`Sm-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U6UGL31B = $mol_type_enforce<
		`Tb-Sm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W8TXUYI0 = $mol_type_enforce<
		`Li-Tb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UZMAHTG5 = $mol_type_enforce<
		`Ho-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S6JI68GO = $mol_type_enforce<
		`Sm-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__03XFRC10 = $mol_type_enforce<
		`Nd-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TNBQ5SOA = $mol_type_enforce<
		`Na-Li-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F1EQ4Y46 = $mol_type_enforce<
		`K-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z0R4XHZU = $mol_type_enforce<
		`Mn-Tl-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PS6KZ9VT = $mol_type_enforce<
		`Hg-B-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KQ2EPWZC = $mol_type_enforce<
		`Er-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U96MOJ27 = $mol_type_enforce<
		`Pu-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T8A3NO57 = $mol_type_enforce<
		`Ca-La-Ce`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PDY9VU82 = $mol_type_enforce<
		`Eu-Hf-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LLXJWHU4 = $mol_type_enforce<
		`Os-Ru-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P2FUNAP6 = $mol_type_enforce<
		`La-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HZR6B2DM = $mol_type_enforce<
		`V-Ag-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PPN0J2FG = $mol_type_enforce<
		`Ba-Pr-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OA5Q28T3 = $mol_type_enforce<
		`Nd-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__13JL0XFK = $mol_type_enforce<
		`Pr-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__44YRHMH2 = $mol_type_enforce<
		`Y-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MYVMM7U5 = $mol_type_enforce<
		`Tb-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ROI8INBF = $mol_type_enforce<
		`Ce-Nd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6EPI39SI = $mol_type_enforce<
		`Pt-Rh-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3QA8OEIL = $mol_type_enforce<
		`Er-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y0195TRG = $mol_type_enforce<
		`Ba-La-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VNU653SD = $mol_type_enforce<
		`Pr-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X68184Y6 = $mol_type_enforce<
		`Sm-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5XFOLZFO = $mol_type_enforce<
		`Ga-Re-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KEEZ6H7E = $mol_type_enforce<
		`Ho-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JUA7QBKY = $mol_type_enforce<
		`Al-Tl-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZJM10QRF = $mol_type_enforce<
		`Dy-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ALC623L1 = $mol_type_enforce<
		`Na-Sr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8C088K84 = $mol_type_enforce<
		`Cd-Si-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q299MUNZ = $mol_type_enforce<
		`Tb-Pr-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2DL07Q5M = $mol_type_enforce<
		`Ba-Gd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ME4HZ807 = $mol_type_enforce<
		`Ca-Tb-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2CSVOK13 = $mol_type_enforce<
		`Cu-Ag-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GPGWS2ZH = $mol_type_enforce<
		`Co-Cu-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SEWE4WC1 = $mol_type_enforce<
		`Pm-Dy-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A5XQHP94 = $mol_type_enforce<
		`Zn-Cd-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0JYNOJ3I = $mol_type_enforce<
		`La-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9Z58L0B3 = $mol_type_enforce<
		`Sr-Ca-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LK4R9LEP = $mol_type_enforce<
		`Dy-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XB0YHOUX = $mol_type_enforce<
		`Eu-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__41WJYD9K = $mol_type_enforce<
		`Ca-Pm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NXAC8L0A = $mol_type_enforce<
		`Eu-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MQOUX637 = $mol_type_enforce<
		`Cu-Os-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FOWTTQCY = $mol_type_enforce<
		`Be-In-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CT3AB1LR = $mol_type_enforce<
		`La-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BR6N27EY = $mol_type_enforce<
		`Nd-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WOT9YGDJ = $mol_type_enforce<
		`Ca-Ce-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ADK31226 = $mol_type_enforce<
		`Yb-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XS2PMVO4 = $mol_type_enforce<
		`Ca-La-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FI2WQBJD = $mol_type_enforce<
		`Li-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GAM8275V = $mol_type_enforce<
		`Al-Tl-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EODHMR8M = $mol_type_enforce<
		`Li-Ce-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SABOOFCF = $mol_type_enforce<
		`Li-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AL2YMDTO = $mol_type_enforce<
		`Pr-Nd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IJ1Z1YBM = $mol_type_enforce<
		`Yb-Nd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__480KRUR7 = $mol_type_enforce<
		`Li-Ce-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XWPXNA72 = $mol_type_enforce<
		`Pm-Dy-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HDV45QY9 = $mol_type_enforce<
		`Dy-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DL160K1E = $mol_type_enforce<
		`Ca-Mn-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MS6UU95P = $mol_type_enforce<
		`Cs-Mg-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2T445Y6K = $mol_type_enforce<
		`Ce-Eu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CZH4IXWM = $mol_type_enforce<
		`Tb-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CRQOZGWP = $mol_type_enforce<
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

	type $mol_view__render__S24ITQEI = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['draw'] >
		,
		ReturnType< $mol_view['render'] >
	>
	type $mpds_visavis_plot_legend_cmp__labels__W1N1TQYN = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['cmp_labels'] >
		,
		ReturnType< $mpds_visavis_plot_legend_cmp['labels'] >
	>
	type $mpds_visavis_plot_legend_cmp__colorset__2IVXAKLV = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['colorset'] >
		,
		ReturnType< $mpds_visavis_plot_legend_cmp['colorset'] >
	>
	type $mol_view__sub__LRTHEUDR = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__style__5WETEY5Z = $mol_type_enforce<
		({ 
			'background': ReturnType< $mpds_visavis_plot_matrix['heatmap_color'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__sub__C02LYAOS = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows__HS27EBNM = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['heatmap_color_list'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub__TCQ9UJNS = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_view__sub__24F6U1JA = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['plot_body'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_check_box__title__2K9ITQWH = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked__TE4HUMGW = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['fixel_checked'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_check_box__hint__OUM4RV9B = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['hint'] >
	>
	type $mol_check_box__title__GCIJV6UJ = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked__JZYAFLOQ = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['nonformers_checked'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_check_box__title__1Y09BPE9 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked__7NG9Z7JX = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['difference_checked'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_switch__value__86L67IWY = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['sort_control'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options__Z2EKVUIP = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['order_dict'] >
		,
		ReturnType< $mol_switch['options'] >
	>
	type $mol_labeler__title__I0UDVWOM = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__MYE84W0U = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['Order_switch'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_view__sub__0EEOAB8R = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['setup'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mpds_visavis_plot_matrix extends $mol_view {
		auto_reorder( ): any
		draw( ): any
		Root( ): $mol_view
		cmp_labels( ): readonly(any)[]
		Cmp_legend( ): $mpds_visavis_plot_legend_cmp
		Heatmap_min( ): $mol_view
		heatmap_color( id: any): string
		Heatmap_color( id: any): $mol_view
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
		difference_checked( next?: boolean ): boolean
		Difference_on( ): $mol_check_box
		sort_control( next?: string ): string
		order_dict( ): ({ 
			'nump': string,
			'num': string,
			'size': string,
			'rea': string,
			'rpp': string,
			'rion': string,
			'rcov': string,
			'rmet': string,
			'tmelt': string,
			'eneg': string,
		}) 
		Order_switch( ): $mol_switch
		Order( ): $mol_labeler
		setup( ): readonly(any)[]
		Setup( ): $mol_view
		plot_raw( ): $mpds_visavis_plot_raw
		auto( ): readonly(any)[]
		multi_jsons( next?: any ): any
		json_master( ): any
		show_setup( ): boolean
		size( ): number
		links_value_min( next?: number ): number
		links_value_max( next?: number ): number
		heatmap( next?: boolean ): boolean
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
    };
    type Prop_name = keyof ReturnType<typeof $mpds_visavis_elements_list.prop_names>;
    export class $mpds_visavis_plot_matrix extends $.$mpds_visavis_plot_matrix {
        setup(): ($mol_check_box | $mol_labeler)[];
        plot_body(): ($mol_view | $.$mpds_visavis_plot_legend_cmp)[];
        json(): Readonly<{
            answerto?: string | undefined;
            use_visavis_type: string;
            payload: Readonly<{
                nodes: readonly Readonly<{
                    count?: number | undefined;
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
        cmp_labels(): any;
        json_master(): Readonly<{
            answerto?: string | undefined;
            use_visavis_type: string;
            payload: Readonly<{
                nodes: readonly Readonly<{
                    count?: number | undefined;
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
        }>[];
        links(): Readonly<{
            cmp?: number | undefined;
            source: number;
            target: number;
            value: number;
            cmt: string;
        }>[];
        links_value_min(): number;
        links_value_max(): number;
        heatmap(): boolean;
        order_by_prop(prop: Prop_name): any[];
        default_order(): any[];
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
        draw_cells(node: SVGElement, row: Matrix_cell[]): void;
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

	type $mol_pop_bubble__align__G7X622NR = $mol_type_enforce<
		ReturnType< $mol_pop['align'] >
		,
		ReturnType< $mol_pop_bubble['align'] >
	>
	type $mol_pop_bubble__content__K34AL2AD = $mol_type_enforce<
		ReturnType< $mol_pop['bubble_content'] >
		,
		ReturnType< $mol_pop_bubble['content'] >
	>
	type $mol_pop_bubble__height_max__WJ3UNT1W = $mol_type_enforce<
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

	type $mol_check__minimal_width__ZOAAXM5B = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_width'] >
	>
	type $mol_check__minimal_height__ZOQLUTT7 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_height'] >
	>
	type $mol_check__enabled__LF9XIJ2Z = $mol_type_enforce<
		ReturnType< $mol_pick['trigger_enabled'] >
		,
		ReturnType< $mol_check['enabled'] >
	>
	type $mol_check__checked__VMDBW4EG = $mol_type_enforce<
		ReturnType< $mol_pick['showed'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_check__clicks__2FZL3J17 = $mol_type_enforce<
		ReturnType< $mol_pick['clicks'] >
		,
		ReturnType< $mol_check['clicks'] >
	>
	type $mol_check__sub__YERHC821 = $mol_type_enforce<
		ReturnType< $mol_pick['trigger_content'] >
		,
		ReturnType< $mol_check['sub'] >
	>
	type $mol_check__hint__3PB4NT69 = $mol_type_enforce<
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

	type $mol_paragraph__sub__NHP0QK6E = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	type $mol_paragraph__sub__65LMEJKL = $mol_type_enforce<
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
        key(): {
            readonly [x: number]: ((event: KeyboardEvent) => void) | undefined;
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

	type $mol_hotkey__mod_ctrl__8PSG4TEE = $mol_type_enforce<
		ReturnType< $mol_string['submit_with_ctrl'] >
		,
		ReturnType< $mol_hotkey['mod_ctrl'] >
	>
	type $mol_hotkey__key__SEREEDRR = $mol_type_enforce<
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

	export class $mol_icon_cross extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=cross.view.tree.d.ts.map
declare namespace $ {

	type $mol_hotkey__key__FZ7Z0K1N = $mol_type_enforce<
		({ 
			escape( next?: ReturnType< $mol_search['clear'] > ): ReturnType< $mol_search['clear'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	type $mol_nav__keys_y__R4ITQCXU = $mol_type_enforce<
		ReturnType< $mol_search['nav_components'] >
		,
		ReturnType< $mol_nav['keys_y'] >
	>
	type $mol_nav__current_y__BCK6KX3H = $mol_type_enforce<
		ReturnType< $mol_search['nav_focused'] >
		,
		ReturnType< $mol_nav['current_y'] >
	>
	type $mol_string__value__66D0DMQ4 = $mol_type_enforce<
		ReturnType< $mol_search['query'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__hint__8R2MEL21 = $mol_type_enforce<
		ReturnType< $mol_search['hint'] >
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__submit__WSALV8PI = $mol_type_enforce<
		ReturnType< $mol_search['submit'] >
		,
		ReturnType< $mol_string['submit'] >
	>
	type $mol_string__enabled__EDYE8PL4 = $mol_type_enforce<
		ReturnType< $mol_search['enabled'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_string__keyboard__KHVQXNAY = $mol_type_enforce<
		ReturnType< $mol_search['keyboard'] >
		,
		ReturnType< $mol_string['keyboard'] >
	>
	type $mol_string__enter__2ACZ63YO = $mol_type_enforce<
		ReturnType< $mol_search['enter'] >
		,
		ReturnType< $mol_string['enter'] >
	>
	type $mol_button_minor__hint__VBZFHBAD = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__click__DRV2YD9Y = $mol_type_enforce<
		ReturnType< $mol_search['clear'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__PZG8ZCRH = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_list__rows__017OCCHD = $mol_type_enforce<
		ReturnType< $mol_search['menu_items'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_dimmer__haystack__STEYPKYS = $mol_type_enforce<
		ReturnType< $mol_search['suggest_label'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle__BDS2WQ6H = $mol_type_enforce<
		ReturnType< $mol_search['query'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_search_plugins__NRXTE4E8 = $mol_type_enforce<
		ReturnType< $mol_pop['plugins'] >[number]
		,
		$mol_plugin
	>
	type $mol_view__sub__7VV5HH9S = $mol_type_enforce<
		ReturnType< $mol_search['anchor_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__click__IHDG7K1T = $mol_type_enforce<
		ReturnType< $mol_search['suggest_select'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__YRXU2019 = $mol_type_enforce<
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
		Clear_icon( ): $mol_icon_cross
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

	type $mol_dimmer__haystack__95YGVC4I = $mol_type_enforce<
		ReturnType< $mol_select['option_label'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle__PU83SCEI = $mol_type_enforce<
		ReturnType< $mol_select['filter_pattern'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_nav__keys_y__1APS33GQ = $mol_type_enforce<
		ReturnType< $mol_select['nav_components'] >
		,
		ReturnType< $mol_nav['keys_y'] >
	>
	type $mol_nav__current_y__S880J7V0 = $mol_type_enforce<
		ReturnType< $mol_select['option_focused'] >
		,
		ReturnType< $mol_nav['current_y'] >
	>
	type $mol_nav__cycle__7FO8UVHX = $mol_type_enforce<
		ReturnType< $mol_select['nav_cycle'] >
		,
		ReturnType< $mol_nav['cycle'] >
	>
	type $mol_list__rows__P7XM0IJA = $mol_type_enforce<
		ReturnType< $mol_select['menu_content'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub__OF8YUTTK = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_button_minor__event_click__KJTUXTV7 = $mol_type_enforce<
		ReturnType< $mol_select['event_select'] >
		,
		ReturnType< $mol_button_minor['event_click'] >
	>
	type $mol_button_minor__sub__GIGFSJ9C = $mol_type_enforce<
		ReturnType< $mol_select['option_content'] >
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub__PUUGPGNV = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_search__query__77HBA2FW = $mol_type_enforce<
		ReturnType< $mol_select['filter_pattern'] >
		,
		ReturnType< $mol_search['query'] >
	>
	type $mol_search__hint__DFUGF7NR = $mol_type_enforce<
		ReturnType< $mol_select['filter_hint'] >
		,
		ReturnType< $mol_search['hint'] >
	>
	type $mol_search__submit__6O8NTHW1 = $mol_type_enforce<
		ReturnType< $mol_select['submit'] >
		,
		ReturnType< $mol_search['submit'] >
	>
	type $mol_search__enabled__KYE2AKTX = $mol_type_enforce<
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
    let $mol_data_boolean: (val: boolean) => boolean;
}

declare namespace $ {
    function $mol_data_variant<Sub extends $mol_data_value[]>(...sub: Sub): ((val: Parameters<Sub[number]>[0]) => ReturnType<Sub[number]>) & {
        config: Sub;
        Value: ReturnType<Sub[number]>;
    };
}

declare namespace $ {

	type $mpds_visavis_lib_plotly_view__data__LHO1EYX0 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['data_shown'] >
		,
		ReturnType< $mpds_visavis_lib_plotly_view['data'] >
	>
	type $mpds_visavis_lib_plotly_view__layout__IW7BIXMN = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['layout'] >
		,
		ReturnType< $mpds_visavis_lib_plotly_view['layout'] >
	>
	type $mpds_visavis_plot_legend_cmp__labels__43S6MDAO = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['cmp_labels'] >
		,
		ReturnType< $mpds_visavis_plot_legend_cmp['labels'] >
	>
	type $mpds_visavis_plot_legend_cmp__colorset__2OAJGKS4 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['colorset'] >
		,
		ReturnType< $mpds_visavis_plot_legend_cmp['colorset'] >
	>
	type $mol_view__sub__FOWCSZ2X = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__style__4O8Z7HOS = $mol_type_enforce<
		({ 
			'background': ReturnType< $mpds_visavis_plot_cube['heatmap_color'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__sub__ZIJ0EEDQ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows__AUFL7X8T = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['heatmap_color_list'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub__8U25MNBE = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_view__sub__E2W9D2MB = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['plot_body'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_check_box__title__PSWUSXGN = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked__OWWJ3TXQ = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['fixel_checked'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_check_box__hint__3D41NAUO = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['hint'] >
	>
	type $mol_check_box__title__EM8CK4K1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked__BFL2UOKS = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['nonformers_checked'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_check_box__title__NTZHO0KL = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked__CYEB9W4T = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['difference_checked'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_select__value__20PJH6ZM = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['x_sort'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__dictionary__92RYVGJU = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['order_dict'] >
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_labeler__title__WH73S3BK = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__H298G7WN = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['X_order_select'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_select__value__WC1NTC1Q = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['y_sort'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__dictionary__7JDXFC70 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['order_dict'] >
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_labeler__title__JIK3MBYU = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__501CVZTR = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['Y_order_select'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_select__value__ZFZ8SUO8 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['z_sort'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__dictionary__YTEYL1EZ = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['order_dict'] >
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_labeler__title__WO8DIDRJ = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__8133SNK3 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['Z_order_select'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_view__sub__PT08U3ED = $mol_type_enforce<
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
		difference_checked( next?: boolean ): boolean
		Difference_on( ): $mol_check_box
		order_dict( ): ({ 
			'nump': string,
			'num': string,
			'size': string,
			'rea': string,
			'rpp': string,
			'rion': string,
			'rcov': string,
			'rmet': string,
			'tmelt': string,
			'eneg': string,
		}) 
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
            x: never[];
            y: never[];
            z: never[];
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
            x: never[];
            y: never[];
            z: never[];
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
            x: never[];
            y: never[];
            z: never[];
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

	type $mol_view__sub__21Q960IT = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mpds_visavis_lib_plotly_view__data__TIB50VPD = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_phase['data'] >
		,
		ReturnType< $mpds_visavis_lib_plotly_view['data'] >
	>
	type $mpds_visavis_lib_plotly_view__layout__OL8DUX25 = $mol_type_enforce<
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
            line: {
                width: number;
            };
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
            font: {
                size: number;
                color: string;
                family: string;
            };
            xaxis: {
                title: string;
                range: readonly any[];
                fixedrange: boolean;
                showticks: boolean;
                showline: boolean;
                zeroline: boolean;
                showgrid: boolean;
                ticklen: number;
                tickfont: {
                    size: number;
                };
                hoverformat: string;
            };
            xaxis2: {
                range: readonly any[];
                fixedrange: boolean;
                showticks: boolean;
                showline: boolean;
                zeroline: boolean;
                showgrid: boolean;
                ticklen: number;
                tickfont: {
                    size: number;
                };
                side: string;
                overlaying: string;
            };
            yaxis: {
                title: string;
                range: readonly any[];
                fixedrange: boolean;
                showticks: boolean;
                showticklabels: boolean;
                showline: boolean;
                zeroline: boolean;
                showgrid: boolean;
                ticklen: number;
                tickfont: {
                    size: number;
                };
                hoverformat: string;
            };
            yaxis2: {
                range: readonly any[];
                fixedrange: boolean;
                showticks: boolean;
                showticklabels: boolean;
                showline: boolean;
                zeroline: boolean;
                showgrid: boolean;
                ticklen: number;
                tickfont: {
                    size: number;
                };
                side: string;
                overlaying: string;
            };
            shapes: readonly any[];
            annotations: readonly any[];
        } | {
            hovermode: string;
            font: {
                size: number;
                color: string;
                family: string;
            };
            ternary: {
                aaxis: {
                    title: string;
                    ticks: string;
                    showline: boolean;
                    showgrid: boolean;
                    fixedrange: boolean;
                    linewidth: number;
                };
                baxis: {
                    title: string;
                    ticks: string;
                    showline: boolean;
                    showgrid: boolean;
                    fixedrange: boolean;
                    linewidth: number;
                };
                caxis: {
                    title: string;
                    ticks: string;
                    showline: boolean;
                    showgrid: boolean;
                    fixedrange: boolean;
                    linewidth: number;
                };
            };
            shapes: readonly any[];
            annotations: readonly any[];
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

	type $mpds_visavis_lib_plotly_view__data__C459K56E = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_discovery['data'] >
		,
		ReturnType< $mpds_visavis_lib_plotly_view['data'] >
	>
	type $mpds_visavis_lib_plotly_view__layout__G6BC3FV4 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_discovery['layout'] >
		,
		ReturnType< $mpds_visavis_lib_plotly_view['layout'] >
	>
	type $mpds_visavis_plot_legend_cmp__labels__L9ULSYD7 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_discovery['cmp_labels'] >
		,
		ReturnType< $mpds_visavis_plot_legend_cmp['labels'] >
	>
	type $mpds_visavis_plot_legend_cmp__colorset__BN1GV6VX = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_discovery['colorset'] >
		,
		ReturnType< $mpds_visavis_plot_legend_cmp['colorset'] >
	>
	type $mol_check_list__option_checked__YVTAB11B = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_discovery['elemental_checked'] >
		,
		ReturnType< $mol_check_list['option_checked'] >
	>
	type $mol_check_list__options__FMIAZLYW = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_discovery['elementals_dict'] >
		,
		ReturnType< $mol_check_list['options'] >
	>
	type $mol_labeler__title__PFV9DN0Z = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__ZHZVBBK9 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_discovery['Elementals_check'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_view__sub__PLNTM8Z2 = $mol_type_enforce<
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
            count: number;
            value: string;
            facet: "elements" | "classes" | "props" | "lattices";
        }[];
        total_count: number;
    }) => Readonly<{
        payload: readonly Readonly<{
            count: number;
            value: string;
            facet: "elements" | "classes" | "props" | "lattices";
        }>[];
        total_count: number;
    }>) & {
        config: {
            payload: ((val: readonly {
                count: number;
                value: string;
                facet: "elements" | "classes" | "props" | "lattices";
            }[]) => readonly Readonly<{
                count: number;
                value: string;
                facet: "elements" | "classes" | "props" | "lattices";
            }>[]) & {
                config: ((val: {
                    count: number;
                    value: string;
                    facet: "elements" | "classes" | "props" | "lattices";
                }) => Readonly<{
                    count: number;
                    value: string;
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
                        count: number;
                        value: string;
                        facet: "elements" | "classes" | "props" | "lattices";
                    }>;
                };
                Value: readonly Readonly<{
                    count: number;
                    value: string;
                    facet: "elements" | "classes" | "props" | "lattices";
                }>[];
            };
            total_count: (val: number) => number;
        };
        Value: Readonly<{
            payload: readonly Readonly<{
                count: number;
                value: string;
                facet: "elements" | "classes" | "props" | "lattices";
            }>[];
            total_count: number;
        }>;
    };
    export class $mpds_visavis_plot_pie extends $.$mpds_visavis_plot_pie {
        json(): Readonly<{
            payload: readonly Readonly<{
                count: number;
                value: string;
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
            interpolation: string;
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
            interpolation: string;
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
                interpolation: string;
            }[]) => readonly Readonly<{
                name: string;
                type: string;
                x: readonly number[];
                y: readonly number[];
                mode: string;
                interpolation: string;
            }>[]) & {
                config: ((val: {
                    name: string;
                    type: string;
                    x: readonly number[];
                    y: readonly number[];
                    mode: string;
                    interpolation: string;
                }) => Readonly<{
                    name: string;
                    type: string;
                    x: readonly number[];
                    y: readonly number[];
                    mode: string;
                    interpolation: string;
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
                        x: readonly number[];
                        y: readonly number[];
                        mode: string;
                        interpolation: string;
                    }>;
                };
                Value: readonly Readonly<{
                    name: string;
                    type: string;
                    x: readonly number[];
                    y: readonly number[];
                    mode: string;
                    interpolation: string;
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
                interpolation: string;
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
                interpolation: string;
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
            interpolation: string;
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

	type $mol_vector_2d__IZSWPT8M = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__98ES23AD = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__IMO1DWJQ = $mol_type_enforce<
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

	type $mpds_visavis_plot_graph_pan__0MR3BHFJ = $mol_type_enforce<
		Parameters< $mpds_visavis_plot_graph['pan'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot_graph['Touch'] >['pan'] >[0]
	>
	type $mol_touch__allow_draw__IW6RAGG0 = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_touch['allow_draw'] >
	>
	type $mol_touch__allow_pan__6MAIGBRL = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_graph['allow_pan'] >
		,
		ReturnType< $mol_touch['allow_pan'] >
	>
	type $mol_svg_root__view_box__H7AUEY1G = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_graph['view_box'] >
		,
		ReturnType< $mol_svg_root['view_box'] >
	>
	type $mol_svg_root__auto__2W9G96G4 = $mol_type_enforce<
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
    function $mol_view_component(View: typeof $mol_view): {
        new (): {
            view: $mol_view;
            root?: $mol_wire_sub | null | undefined;
            connectedCallback(): void;
            disconnectedCallback(): void;
            attributeChangedCallback(name: keyof any, prev: string, next: string): void;
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
            togglePopover(force?: boolean | undefined): boolean;
            addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions | undefined): void;
            addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined): void;
            removeEventListener<K_1 extends keyof HTMLElementEventMap>(type: K_1, listener: (this: HTMLElement, ev: HTMLElementEventMap[K_1]) => any, options?: boolean | EventListenerOptions | undefined): void;
            removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions | undefined): void;
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
            checkVisibility(options?: CheckVisibilityOptions | undefined): boolean;
            closest<K_2 extends keyof HTMLElementTagNameMap>(selector: K_2): HTMLElementTagNameMap[K_2] | null;
            closest<K_3 extends keyof SVGElementTagNameMap>(selector: K_3): SVGElementTagNameMap[K_3] | null;
            closest<K_4 extends keyof MathMLElementTagNameMap>(selector: K_4): MathMLElementTagNameMap[K_4] | null;
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
            getElementsByTagName<K_5 extends keyof HTMLElementTagNameMap>(qualifiedName: K_5): HTMLCollectionOf<HTMLElementTagNameMap[K_5]>;
            getElementsByTagName<K_6 extends keyof SVGElementTagNameMap>(qualifiedName: K_6): HTMLCollectionOf<SVGElementTagNameMap[K_6]>;
            getElementsByTagName<K_7 extends keyof MathMLElementTagNameMap>(qualifiedName: K_7): HTMLCollectionOf<MathMLElementTagNameMap[K_7]>;
            getElementsByTagName<K_8 extends keyof HTMLElementDeprecatedTagNameMap>(qualifiedName: K_8): HTMLCollectionOf<HTMLElementDeprecatedTagNameMap[K_8]>;
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
            requestFullscreen(options?: FullscreenOptions | undefined): Promise<void>;
            requestPointerLock(): void;
            scroll(options?: ScrollToOptions | undefined): void;
            scroll(x: number, y: number): void;
            scrollBy(options?: ScrollToOptions | undefined): void;
            scrollBy(x: number, y: number): void;
            scrollIntoView(arg?: boolean | ScrollIntoViewOptions | undefined): void;
            scrollTo(options?: ScrollToOptions | undefined): void;
            scrollTo(x: number, y: number): void;
            setAttribute(qualifiedName: string, value: string): void;
            setAttributeNS(namespace: string | null, qualifiedName: string, value: string): void;
            setAttributeNode(attr: Attr): Attr | null;
            setAttributeNodeNS(attr: Attr): Attr | null;
            setPointerCapture(pointerId: number): void;
            toggleAttribute(qualifiedName: string, force?: boolean | undefined): boolean;
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
            cloneNode(deep?: boolean | undefined): Node;
            compareDocumentPosition(other: Node): number;
            contains(other: Node | null): boolean;
            getRootNode(options?: GetRootNodeOptions | undefined): Node;
            hasChildNodes(): boolean;
            insertBefore<T_1 extends Node>(node: T_1, child: Node | null): T_1;
            isDefaultNamespace(namespace: string | null): boolean;
            isEqualNode(otherNode: Node | null): boolean;
            isSameNode(otherNode: Node | null): boolean;
            lookupNamespaceURI(prefix: string | null): string | null;
            lookupPrefix(namespace: string | null): string | null;
            normalize(): void;
            removeChild<T_2 extends Node>(child: T_2): T_2;
            replaceChild<T_3 extends Node>(node: Node, child: T_3): T_3;
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
            animate(keyframes: Keyframe[] | PropertyIndexedKeyframes | null, options?: number | KeyframeAnimationOptions | undefined): Animation;
            getAnimations(options?: GetAnimationsOptions | undefined): Animation[];
            after(...nodes: (string | Node)[]): void;
            before(...nodes: (string | Node)[]): void;
            remove(): void;
            replaceWith(...nodes: (string | Node)[]): void;
            innerHTML: string;
            readonly nextElementSibling: Element | null;
            readonly previousElementSibling: Element | null;
            readonly childElementCount: number;
            readonly children: HTMLCollection;
            readonly firstElementChild: Element | null;
            readonly lastElementChild: Element | null;
            append(...nodes: (string | Node)[]): void;
            prepend(...nodes: (string | Node)[]): void;
            querySelector<K_9 extends keyof HTMLElementTagNameMap>(selectors: K_9): HTMLElementTagNameMap[K_9] | null;
            querySelector<K_10 extends keyof SVGElementTagNameMap>(selectors: K_10): SVGElementTagNameMap[K_10] | null;
            querySelector<K_11 extends keyof MathMLElementTagNameMap>(selectors: K_11): MathMLElementTagNameMap[K_11] | null;
            querySelector<K_12 extends keyof HTMLElementDeprecatedTagNameMap>(selectors: K_12): HTMLElementDeprecatedTagNameMap[K_12] | null;
            querySelector<E_1 extends Element = Element>(selectors: string): E_1 | null;
            querySelectorAll<K_13 extends keyof HTMLElementTagNameMap>(selectors: K_13): NodeListOf<HTMLElementTagNameMap[K_13]>;
            querySelectorAll<K_14 extends keyof SVGElementTagNameMap>(selectors: K_14): NodeListOf<SVGElementTagNameMap[K_14]>;
            querySelectorAll<K_15 extends keyof MathMLElementTagNameMap>(selectors: K_15): NodeListOf<MathMLElementTagNameMap[K_15]>;
            querySelectorAll<K_16 extends keyof HTMLElementDeprecatedTagNameMap>(selectors: K_16): NodeListOf<HTMLElementDeprecatedTagNameMap[K_16]>;
            querySelectorAll<E_2 extends Element = Element>(selectors: string): NodeListOf<E_2>;
            replaceChildren(...nodes: (string | Node)[]): void;
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
            onprogress: ((this: GlobalEventHandlers, ev: ProgressEvent<EventTarget>) => any) | null;
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
            nonce?: string | undefined;
            tabIndex: number;
            blur(): void;
            focus(options?: FocusOptions | undefined): void;
        };
        tag: string;
        observedAttributes: Set<unknown>;
    } | undefined;
}

declare namespace $ {

	type $mpds_visavis_plot_matrix_x_op__WCHI5S6C = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['matrix_x_op'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Matrix'] >['x_op'] >[0]
	>
	type $mpds_visavis_plot_matrix_y_op__BY7ITDO0 = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['matrix_y_op'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Matrix'] >['y_op'] >[0]
	>
	type $mpds_visavis_plot_matrix_x_sort__A93EWTOI = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['matrix_x_sort'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Matrix'] >['x_sort'] >[0]
	>
	type $mpds_visavis_plot_matrix_y_sort__J5QGBJNT = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['matrix_y_sort'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Matrix'] >['y_sort'] >[0]
	>
	type $mpds_visavis_plot_matrix__plot_raw__VWECH1FB = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_matrix['plot_raw'] >
	>
	type $mpds_visavis_plot_matrix__multi_jsons__RL903UB6 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['multi_jsons'] >
		,
		ReturnType< $mpds_visavis_plot_matrix['multi_jsons'] >
	>
	type $mpds_visavis_plot_matrix__show_setup__PW2SSXOF = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['show_setup'] >
		,
		ReturnType< $mpds_visavis_plot_matrix['show_setup'] >
	>
	type $mpds_visavis_plot_matrix__nonformers_checked__D5HI4UD5 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['nonformers_checked'] >
		,
		ReturnType< $mpds_visavis_plot_matrix['nonformers_checked'] >
	>
	type $mpds_visavis_plot_matrix__fixel_checked__OZQG177E = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['matrix_fixel_checked'] >
		,
		ReturnType< $mpds_visavis_plot_matrix['fixel_checked'] >
	>
	type $mpds_visavis_plot_matrix__matrix_click__L3GLTKT5 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['matrix_click'] >
		,
		ReturnType< $mpds_visavis_plot_matrix['matrix_click'] >
	>
	type $mpds_visavis_plot_x_op__3B6O1Y40 = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['x_op'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Cube'] >['x_op'] >[0]
	>
	type $mpds_visavis_plot_y_op__NQ9A4I3T = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['y_op'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Cube'] >['y_op'] >[0]
	>
	type $mpds_visavis_plot_z_op__PDRWAS8W = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['z_op'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Cube'] >['z_op'] >[0]
	>
	type $mpds_visavis_plot_x_sort__352JABCH = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['x_sort'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Cube'] >['x_sort'] >[0]
	>
	type $mpds_visavis_plot_y_sort__B8CGMOPE = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['y_sort'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Cube'] >['y_sort'] >[0]
	>
	type $mpds_visavis_plot_z_sort__BOV6LM4P = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['z_sort'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Cube'] >['z_sort'] >[0]
	>
	type $mpds_visavis_plot_cube__plot_raw__J6K9J4TD = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_cube['plot_raw'] >
	>
	type $mpds_visavis_plot_cube__multi_jsons__8TRRH2ZN = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['multi_jsons'] >
		,
		ReturnType< $mpds_visavis_plot_cube['multi_jsons'] >
	>
	type $mpds_visavis_plot_cube__show_setup__NRPYUUJP = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['show_setup'] >
		,
		ReturnType< $mpds_visavis_plot_cube['show_setup'] >
	>
	type $mpds_visavis_plot_cube__show_fixel__E6KAW8WF = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['show_fixel'] >
		,
		ReturnType< $mpds_visavis_plot_cube['show_fixel'] >
	>
	type $mpds_visavis_plot_cube__nonformers_checked__0NADEC0P = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['nonformers_checked'] >
		,
		ReturnType< $mpds_visavis_plot_cube['nonformers_checked'] >
	>
	type $mpds_visavis_plot_cube__fixel_checked__ETGHS0D7 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['cube_fixel_checked'] >
		,
		ReturnType< $mpds_visavis_plot_cube['fixel_checked'] >
	>
	type $mpds_visavis_plot_cube__cube_click__C0GFS0SI = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['cube_click'] >
		,
		ReturnType< $mpds_visavis_plot_cube['cube_click'] >
	>
	type $mpds_visavis_plot_phase__plot_raw__LC4OBXC1 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_phase['plot_raw'] >
	>
	type $mpds_visavis_plot_phase__phase_click__IR4RPS8L = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['phase_click'] >
		,
		ReturnType< $mpds_visavis_plot_phase['phase_click'] >
	>
	type $mpds_visavis_plot_bar__plot_raw__G0ZVAF2S = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_bar['plot_raw'] >
	>
	type $mpds_visavis_plot_bar__bar_click__PE3XTVJ1 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['bar_click'] >
		,
		ReturnType< $mpds_visavis_plot_bar['bar_click'] >
	>
	type $mpds_visavis_plot_discovery_elementals_on__OWZP8YTF = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['discovery_elementals_on'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Discovery'] >['elementals_on'] >[0]
	>
	type $mpds_visavis_plot_discovery__plot_raw__OCFTG4PV = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_discovery['plot_raw'] >
	>
	type $mpds_visavis_plot_discovery__json_cmp__CB9W089V = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['json_cmp'] >
		,
		ReturnType< $mpds_visavis_plot_discovery['json_cmp'] >
	>
	type $mpds_visavis_plot_discovery__show_setup__57I8UWXY = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['show_setup'] >
		,
		ReturnType< $mpds_visavis_plot_discovery['show_setup'] >
	>
	type $mpds_visavis_plot_discovery__discovery_click__678X79BD = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['discovery_click'] >
		,
		ReturnType< $mpds_visavis_plot_discovery['discovery_click'] >
	>
	type $mpds_visavis_plot_eigen__plot_raw__TFT047LQ = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_eigen['plot_raw'] >
	>
	type $mpds_visavis_plot_pie__plot_raw__7K9LQISZ = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_pie['plot_raw'] >
	>
	type $mpds_visavis_plot_pie__pie_click__YRX7L3P8 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['pie_click'] >
		,
		ReturnType< $mpds_visavis_plot_pie['pie_click'] >
	>
	type $mpds_visavis_plot_scatter__plot_raw__NCVXMKOL = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_scatter['plot_raw'] >
	>
	type $mpds_visavis_plot_scatter__notify__S0YU5JMS = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['notify'] >
		,
		ReturnType< $mpds_visavis_plot_scatter['notify'] >
	>
	type $mpds_visavis_plot_customscatter__plot_raw__QI45FHJ0 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_customscatter['plot_raw'] >
	>
	type $mpds_visavis_plot_customscatter__nplots_changed__2F0J2OUL = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['nplots_changed'] >
		,
		ReturnType< $mpds_visavis_plot_customscatter['nplots_changed'] >
	>
	type $mpds_visavis_plot_customscatter__legend_click__IJHN4IS6 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['legend_click'] >
		,
		ReturnType< $mpds_visavis_plot_customscatter['legend_click'] >
	>
	type $mpds_visavis_plot_heatmap__plot_raw__T8ZQGMPI = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_heatmap['plot_raw'] >
	>
	type $mpds_visavis_plot_graph_rel__MNRO7TS8 = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['graph_rel'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Graph'] >['graph_rel'] >[0]
	>
	type $mpds_visavis_plot_graph__plot_raw__TNX8CZAD = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_graph['plot_raw'] >
	>
	type $mpds_visavis_plot_graph__graph_click__7GFPMWXM = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['graph_click'] >
		,
		ReturnType< $mpds_visavis_plot_graph['graph_click'] >
	>
	type $mol_check__Icon__NK0STTT1 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['Expand_icon'] >
		,
		ReturnType< $mol_check['Icon'] >
	>
	type $mol_check__checked__22TVI3WQ = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['fullscreen'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_paragraph__title__P5OS3B6J = $mol_type_enforce<
		string
		,
		ReturnType< $mol_paragraph['title'] >
	>
	export class $mpds_visavis_plot extends $mol_view {
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
        json(): any;
        json_cmp(): any;
        multi_jsons(): any[] | null;
        json_cmp_request(next?: string | null): string | null;
        plot_raw(): $mpds_visavis_plot_raw | null;
        sub(): ($.$mol_paragraph | $.$mol_check | $.$mpds_visavis_plot_matrix | $.$mpds_visavis_plot_cube | $.$mpds_visavis_plot_phase | $.$mpds_visavis_plot_bar | $.$mpds_visavis_plot_discovery | $.$mpds_visavis_plot_eigen | $.$mpds_visavis_plot_pie | $.$mpds_visavis_plot_scatter | $.$mpds_visavis_plot_customscatter | $.$mpds_visavis_plot_heatmap | $.$mpds_visavis_plot_graph)[];
        matrix_fixel_checked(next?: any): boolean;
        cube_fixel_checked(next?: any): boolean;
        on_fixel_checked(checked: boolean): void;
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

declare namespace $ {

	type $mol_paragraph__title__XR9W8TZ0 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_paragraph__title__0QRND5CA = $mol_type_enforce<
		string
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_button_open__accept__5RTZKFH4 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_open['accept'] >
	>
	type $mol_button_open__files__P40R5NPV = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['files_read'] >
		,
		ReturnType< $mol_button_open['files'] >
	>
	type $mol_list__sub__47ULO2ED = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['sub'] >
	>
	type $mol_link__title__WLI3ECWL = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_link__arg__O3NVR296 = $mol_type_enforce<
		({ 
			'section': string,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_list__rows__IKGU9WKA = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_drop__receive__GV5RRTC5 = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['drop_file'] >
		,
		ReturnType< $mol_drop['receive'] >
	>
	type $mol_drop__Sub__PLHQFCR7 = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['Start_page_content'] >
		,
		ReturnType< $mol_drop['Sub'] >
	>
	type $mol_link__title__X6U5RIEF = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_link__arg__OEPV1H76 = $mol_type_enforce<
		({ 
			'section': any,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__title__73FZHAJ9 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_link__arg__I7N16VMN = $mol_type_enforce<
		({ 
			'section': string,
			'file': any,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link_source__uri__U0IH3HO0 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_source['uri'] >
	>
	type $mol_paragraph__title__9PBBTF2G = $mol_type_enforce<
		string
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_button_open_native__accept__M1R6GPGC = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_open_native['accept'] >
	>
	type $mol_button_open_native__files__ZWW5W0GJ = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['files_read'] >
		,
		ReturnType< $mol_button_open_native['files'] >
	>
	type $mol_button_minor__sub__YSR5PB28 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_drop__receive__GYZ0RIMG = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['drop_file'] >
		,
		ReturnType< $mol_drop['receive'] >
	>
	type $mol_drop__Sub__QPHPH927 = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['History_upload'] >
		,
		ReturnType< $mol_drop['Sub'] >
	>
	type $mol_button_minor__click__ADMWV4U5 = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['history_drop'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__2F0SZCP5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub__A0CPYOTY = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows__CAKQIZ34 = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['history_rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_list__title__DGNUB205 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_list['title'] >
	>
	type $mol_list__sub__PQDRV9DN = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['sub'] >
	>
	type $mol_link__arg__MHN1RLUO = $mol_type_enforce<
		({ 
			'file': ReturnType< $mpds_visavis_app['plot_id'] >,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__title__IZWP82L2 = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['plot_id'] >
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_list__title__CML3XKTN = $mol_type_enforce<
		string
		,
		ReturnType< $mol_list['title'] >
	>
	type $mol_list__rows__FCDQKLQ7 = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['example_rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_page__title__G094S39M = $mol_type_enforce<
		string
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__tools__HG0JNVIE = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__body__I242LKYP = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['menu_body'] >
		,
		ReturnType< $mol_page['body'] >
	>
	type $mpds_visavis_plot__plot_raw__XVR65RCR = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot['plot_raw'] >
	>
	type $mpds_visavis_plot__show_setup__L686CJZ3 = $mol_type_enforce<
		boolean
		,
		ReturnType< $mpds_visavis_plot['show_setup'] >
	>
	type $mpds_visavis_plot__show_fixel__80YX2IY0 = $mol_type_enforce<
		boolean
		,
		ReturnType< $mpds_visavis_plot['show_fixel'] >
	>
	type $mpds_visavis_plot__show_demo_warn__W0ZZ8C3H = $mol_type_enforce<
		boolean
		,
		ReturnType< $mpds_visavis_plot['show_demo_warn'] >
	>
	type $mol_page__title__YDQ9V08J = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['plot_id'] >
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__Body_content__N6UNGS53 = $mol_type_enforce<
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
		Source( ): $mol_link_source
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
