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

	type $mol_view__title__3QP73QB9 = $mol_type_enforce<
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

	type $mol_speck__value__8M3Z1TWM = $mol_type_enforce<
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

	type $mol_svg_path__geometry__GNY0IONJ = $mol_type_enforce<
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

	type $mol_button_open_native__files__ZZO4XPUF = $mol_type_enforce<
		ReturnType< $mol_button_open['files'] >
		,
		ReturnType< $mol_button_open_native['files'] >
	>
	type $mol_button_open_native__accept__DSOM4ERP = $mol_type_enforce<
		ReturnType< $mol_button_open['accept'] >
		,
		ReturnType< $mol_button_open_native['accept'] >
	>
	type $mol_button_open_native__multiple__LX6JRVKR = $mol_type_enforce<
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

	type $mol_view__style__LUUFX17W = $mol_type_enforce<
		({ 
			'paddingTop': ReturnType< $mol_list['gap_before'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__style__616ITCRL = $mol_type_enforce<
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

	type $mol_view__dom_name__0HH5HHEK = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub__LMHMA02K = $mol_type_enforce<
		ReturnType< $mol_page['title_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub__944O093V = $mol_type_enforce<
		ReturnType< $mol_page['tools'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_height__WX2Q3JU1 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__dom_name__C4CB0E35 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub__SCNUTND8 = $mol_type_enforce<
		ReturnType< $mol_page['head'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_page_body_scroll_top__G7KGEIP2 = $mol_type_enforce<
		Parameters< $mol_page['body_scroll_top'] >[0]
		,
		Parameters< ReturnType< $mol_page['Body'] >['scroll_top'] >[0]
	>
	type $mol_view__sub__Y5J6WE1D = $mol_type_enforce<
		ReturnType< $mol_page['body'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_scroll__sub__6VWYQ29X = $mol_type_enforce<
		ReturnType< $mol_page['body_content'] >
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_view__dom_name__856AC6LO = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub__061UUOCZ = $mol_type_enforce<
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

	type $mpds_visavis_plot_legend_cmp_label__label__NSYCAJX6 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_legend_cmp['label'] >
		,
		ReturnType< $mpds_visavis_plot_legend_cmp_label['label'] >
	>
	type $mpds_visavis_plot_legend_cmp_label__background__RR6ZN8PO = $mol_type_enforce<
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

	type $mol_view__sub__K3T7GV1Z = $mol_type_enforce<
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

	type $mol_check__checked__1BNTIQP3 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_checked'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_check__label__5K8P0UVI = $mol_type_enforce<
		ReturnType< $mol_check_list['option_label'] >
		,
		ReturnType< $mol_check['label'] >
	>
	type $mol_check__enabled__YM7IDYQX = $mol_type_enforce<
		ReturnType< $mol_check_list['option_enabled'] >
		,
		ReturnType< $mol_check['enabled'] >
	>
	type $mol_check__hint__LT4VWVYO = $mol_type_enforce<
		ReturnType< $mol_check_list['option_hint'] >
		,
		ReturnType< $mol_check['hint'] >
	>
	type $mol_check__minimal_height__9LGESLW7 = $mol_type_enforce<
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

	type $mol_view__minimal_height__3B87U3LC = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub__VWJA6ORF = $mol_type_enforce<
		ReturnType< $mol_labeler['label'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_height__S1FFJSI6 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__sub__8H84DKUB = $mol_type_enforce<
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

	type $mpds_visavis_elements_nonformer_pd_tri__WGCHMNID = $mol_type_enforce<
		`Pm-Dy-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RYMSG2CV = $mol_type_enforce<
		`Yb-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VMSOK8NV = $mol_type_enforce<
		`Cr-Ni-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LIEMBJE1 = $mol_type_enforce<
		`Pu-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NP3IYKQ6 = $mol_type_enforce<
		`Pm-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IJOTX642 = $mol_type_enforce<
		`Tm-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JET36YXY = $mol_type_enforce<
		`Nd-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z5UYJ82N = $mol_type_enforce<
		`Al-Zn-In`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YWNLE8B6 = $mol_type_enforce<
		`Eu-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CU2SWHA0 = $mol_type_enforce<
		`Ni-Ru-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GRARFAWP = $mol_type_enforce<
		`Ce-Pm-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0E9VP9NO = $mol_type_enforce<
		`Cu-Tc-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UIOGB0BT = $mol_type_enforce<
		`La-Sm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__98ZFNI95 = $mol_type_enforce<
		`La-Yb-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TIQ9A1ET = $mol_type_enforce<
		`Gd-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L1X4VM53 = $mol_type_enforce<
		`Li-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YPNBZHDU = $mol_type_enforce<
		`La-Dy-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XNB240NG = $mol_type_enforce<
		`Ba-Yb-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FFBM0RUW = $mol_type_enforce<
		`K-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R5I3WAFF = $mol_type_enforce<
		`Y-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GCPHP89V = $mol_type_enforce<
		`Li-Ce-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IDPSOYWT = $mol_type_enforce<
		`Sc-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EYM514EC = $mol_type_enforce<
		`Ho-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UUBVUAC9 = $mol_type_enforce<
		`Tm-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BFNFP3NZ = $mol_type_enforce<
		`La-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2W60DYG2 = $mol_type_enforce<
		`Ir-Pd-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MVHC34YC = $mol_type_enforce<
		`Gd-Ho-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__16PODTIE = $mol_type_enforce<
		`Ca-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6LVH0E1B = $mol_type_enforce<
		`Rb-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IEPL14T5 = $mol_type_enforce<
		`La-Yb-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B8IK9Q2F = $mol_type_enforce<
		`Nd-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NNV79YV0 = $mol_type_enforce<
		`Yb-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6AJDP2AO = $mol_type_enforce<
		`La-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JSZ1DO2Y = $mol_type_enforce<
		`Ba-La-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AKIXT57M = $mol_type_enforce<
		`Cs-Li-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EZQ2V6BL = $mol_type_enforce<
		`Ba-Sr-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LMNB45C1 = $mol_type_enforce<
		`Yb-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QMD7J6ZL = $mol_type_enforce<
		`Cs-Pr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8HC4JEFA = $mol_type_enforce<
		`Zn-Bi-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K2E8K3HP = $mol_type_enforce<
		`Tb-Pm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4REOGSQO = $mol_type_enforce<
		`Gd-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VBJKNGG2 = $mol_type_enforce<
		`Ce-Eu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W94ZAF1J = $mol_type_enforce<
		`Fe-Os-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G9M92K4W = $mol_type_enforce<
		`Nb-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7FFN1JZ9 = $mol_type_enforce<
		`Eu-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PDJUR597 = $mol_type_enforce<
		`Be-Al-In`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VKN4JCOF = $mol_type_enforce<
		`Pr-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3790ILDM = $mol_type_enforce<
		`Li-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E02NC32K = $mol_type_enforce<
		`Pu-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZF05MDBX = $mol_type_enforce<
		`Rb-Na-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O7C3APA0 = $mol_type_enforce<
		`Mg-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J2BHDHL0 = $mol_type_enforce<
		`Pr-Nd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7O21QQST = $mol_type_enforce<
		`Pr-Sm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VS18F4GZ = $mol_type_enforce<
		`Pd-Ru-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__13PQHGYO = $mol_type_enforce<
		`Er-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PT35C54U = $mol_type_enforce<
		`Ce-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YD89Y3SP = $mol_type_enforce<
		`Li-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P0RR9S4X = $mol_type_enforce<
		`Nd-Gd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IY2E5CCS = $mol_type_enforce<
		`Fe-Rh-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AN6PM182 = $mol_type_enforce<
		`Cs-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C1HQ6104 = $mol_type_enforce<
		`Ru-Pt-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZVWE6KKZ = $mol_type_enforce<
		`Ca-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JM9FDZZ8 = $mol_type_enforce<
		`Cs-K-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HTH59SFD = $mol_type_enforce<
		`Lu-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8OADFQKU = $mol_type_enforce<
		`Nd-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UQE45XHL = $mol_type_enforce<
		`Ga-Si-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DDJ9TFWJ = $mol_type_enforce<
		`K-Mg-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3BTUGZGF = $mol_type_enforce<
		`Ce-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V0Y8E7CT = $mol_type_enforce<
		`Yb-Dy-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9V7QQKQ9 = $mol_type_enforce<
		`Ba-Nd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LK7I7IV8 = $mol_type_enforce<
		`Y-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CFNRGO0R = $mol_type_enforce<
		`Pr-Gd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TT5JH2KY = $mol_type_enforce<
		`La-Y-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8EMHW5KC = $mol_type_enforce<
		`Er-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9IP42BZR = $mol_type_enforce<
		`Cs-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U9I7HY03 = $mol_type_enforce<
		`Li-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NJJ8AZQK = $mol_type_enforce<
		`Pr-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YTM9YFJ3 = $mol_type_enforce<
		`Fe-Cu-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__897I4D2O = $mol_type_enforce<
		`Ce-Sm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5QJUI1XG = $mol_type_enforce<
		`Dy-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BQZ8BXJB = $mol_type_enforce<
		`Cu-Ir-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UK3MRWTW = $mol_type_enforce<
		`Si-Sb-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R86JM9IK = $mol_type_enforce<
		`Pr-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KUWF4EOM = $mol_type_enforce<
		`K-Li-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GAO6ZGLC = $mol_type_enforce<
		`La-Tb-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5X77EG7X = $mol_type_enforce<
		`Li-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UVU83XQ6 = $mol_type_enforce<
		`Sm-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1STZ5YPM = $mol_type_enforce<
		`Cs-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4VBO9O4S = $mol_type_enforce<
		`Pr-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KHNV7NS8 = $mol_type_enforce<
		`Tb-Yb-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__708BE8FU = $mol_type_enforce<
		`Y-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IOIDUU7S = $mol_type_enforce<
		`Na-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z9HVX6T6 = $mol_type_enforce<
		`K-Mg-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UUXF7DF9 = $mol_type_enforce<
		`Li-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4FPZX32X = $mol_type_enforce<
		`Ce-Hf-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EJCWC2SF = $mol_type_enforce<
		`Dy-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XKT3GSR9 = $mol_type_enforce<
		`Ce-Mn-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R7AEIES8 = $mol_type_enforce<
		`Mn-Fe-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JGNWPKEY = $mol_type_enforce<
		`Rb-Hf-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ACB77WUF = $mol_type_enforce<
		`La-Tb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IMIRZ5ET = $mol_type_enforce<
		`Sr-Nd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R1QNR6AP = $mol_type_enforce<
		`Tb-Sm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AKGPY3XB = $mol_type_enforce<
		`Ce-Sc-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JXZZ4IA2 = $mol_type_enforce<
		`Y-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5WGRYCTG = $mol_type_enforce<
		`Rb-Li-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VPKUQDZP = $mol_type_enforce<
		`Nd-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XHZ18H7R = $mol_type_enforce<
		`Al-Si-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6ZONCDN4 = $mol_type_enforce<
		`Ca-La-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7RQI2VVC = $mol_type_enforce<
		`La-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__266XAX90 = $mol_type_enforce<
		`Sm-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U7B9XYIR = $mol_type_enforce<
		`Y-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__APCHZMWJ = $mol_type_enforce<
		`Na-Sr-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AD6F1TET = $mol_type_enforce<
		`K-Li-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__87BGBP3H = $mol_type_enforce<
		`Cs-Rb-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ANZ1WQAZ = $mol_type_enforce<
		`Zn-Ga-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PECZP8S1 = $mol_type_enforce<
		`La-Pm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__14K8HF7N = $mol_type_enforce<
		`Mn-Fe-Co`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TN6N2GSX = $mol_type_enforce<
		`Gd-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UGB7TLLY = $mol_type_enforce<
		`Sm-Gd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4LOET5P3 = $mol_type_enforce<
		`U-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__173FKXYG = $mol_type_enforce<
		`La-Ce-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J3AN6DH5 = $mol_type_enforce<
		`Re-Hg-Sb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A556WB2B = $mol_type_enforce<
		`Gd-Dy-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2Z8KIUWX = $mol_type_enforce<
		`Dy-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W5NOXD3N = $mol_type_enforce<
		`La-Nd-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XQJW641N = $mol_type_enforce<
		`Ce-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CN0AK9IR = $mol_type_enforce<
		`Ce-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__REP9KXJY = $mol_type_enforce<
		`Ce-Nd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3DYG64P2 = $mol_type_enforce<
		`Pm-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TCSGCJRC = $mol_type_enforce<
		`Ce-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TI5EZTY4 = $mol_type_enforce<
		`Pr-Sm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DMQFSOI9 = $mol_type_enforce<
		`Ca-La-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PF07HSMV = $mol_type_enforce<
		`Yb-Lu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YEASHENG = $mol_type_enforce<
		`Sm-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__10QZDG69 = $mol_type_enforce<
		`Gd-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J9VQD1C8 = $mol_type_enforce<
		`Li-Pr-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NLH4C292 = $mol_type_enforce<
		`Al-Ga-Hg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O16MYUDY = $mol_type_enforce<
		`Na-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HWQ8IA2Y = $mol_type_enforce<
		`Yb-Nd-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C69H4H1V = $mol_type_enforce<
		`Nd-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K0TVL6S2 = $mol_type_enforce<
		`La-Tb-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__10VEO792 = $mol_type_enforce<
		`Ir-Pd-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5KO4V15P = $mol_type_enforce<
		`Tm-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DDSUYO12 = $mol_type_enforce<
		`Tm-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5KQ42W44 = $mol_type_enforce<
		`La-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3IQ8BHH8 = $mol_type_enforce<
		`Cu-Ni-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IPB5XWZ8 = $mol_type_enforce<
		`Tb-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UHGN8UUK = $mol_type_enforce<
		`Ba-Sr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WCXVZ1D5 = $mol_type_enforce<
		`Th-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9NJVBLKZ = $mol_type_enforce<
		`Mn-Co-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NJ0DWJYH = $mol_type_enforce<
		`Cu-Ni-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L6ZIKJRI = $mol_type_enforce<
		`Tb-Ce-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NRDVV012 = $mol_type_enforce<
		`Nd-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JY7TDMRK = $mol_type_enforce<
		`Li-Pm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XDCESNZR = $mol_type_enforce<
		`La-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BPE401AF = $mol_type_enforce<
		`La-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WXDND98T = $mol_type_enforce<
		`Pm-Pr-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VP6L62MJ = $mol_type_enforce<
		`Ce-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XGUOJOXM = $mol_type_enforce<
		`Cu-Tc-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U823TEFE = $mol_type_enforce<
		`Nd-Dy-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DFP3PNN1 = $mol_type_enforce<
		`Ca-Pm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EGSL8VZV = $mol_type_enforce<
		`Fe-Cu-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N1GRDGUM = $mol_type_enforce<
		`Li-Sm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UO3LBGJF = $mol_type_enforce<
		`Mn-Ag-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FZDMGBTJ = $mol_type_enforce<
		`Li-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SD09B83U = $mol_type_enforce<
		`La-Tb-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZE1WRT0G = $mol_type_enforce<
		`Gd-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TS72U4BX = $mol_type_enforce<
		`Ce-Gd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BT97AZT7 = $mol_type_enforce<
		`Er-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K46ACQ4Q = $mol_type_enforce<
		`Sm-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R66LNPX5 = $mol_type_enforce<
		`Cr-Ni-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H33ZD95V = $mol_type_enforce<
		`Nd-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6TG837GC = $mol_type_enforce<
		`Co-Au-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IMALY6HK = $mol_type_enforce<
		`Nd-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J95R9BVV = $mol_type_enforce<
		`La-Yb-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8NHXYPVP = $mol_type_enforce<
		`Sc-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__27MLQNFW = $mol_type_enforce<
		`Zr-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NCUOM31J = $mol_type_enforce<
		`Pr-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2J2JV4YK = $mol_type_enforce<
		`Cs-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XJO5R92N = $mol_type_enforce<
		`Ce-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SOXTBEPE = $mol_type_enforce<
		`Yb-Gd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GU9I05PU = $mol_type_enforce<
		`Li-Ce-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q1E7TARC = $mol_type_enforce<
		`Y-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NGDJQACZ = $mol_type_enforce<
		`La-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__73H49RS2 = $mol_type_enforce<
		`Tb-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FDPIYTW3 = $mol_type_enforce<
		`Tb-Pr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2ZTY2UDW = $mol_type_enforce<
		`Sb-Pb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__77QKIWVX = $mol_type_enforce<
		`Ba-Yb-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FYEMP014 = $mol_type_enforce<
		`Dy-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LCF3ZKKW = $mol_type_enforce<
		`Tb-Gd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DETUID8N = $mol_type_enforce<
		`Tb-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N7QYX9AP = $mol_type_enforce<
		`Gd-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VL0H84C0 = $mol_type_enforce<
		`Yb-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3ZG7CSHK = $mol_type_enforce<
		`Tm-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VXV80O57 = $mol_type_enforce<
		`Pd-Pt-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O8CHLKL1 = $mol_type_enforce<
		`Eu-Pu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__03K4V53W = $mol_type_enforce<
		`Ba-Sm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BZA7M4P4 = $mol_type_enforce<
		`La-Sm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4MUZEA51 = $mol_type_enforce<
		`U-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7MAHSJE9 = $mol_type_enforce<
		`Ba-Pm-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N51HF3GA = $mol_type_enforce<
		`Sm-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HYA82RMP = $mol_type_enforce<
		`Gd-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5DQ7KQ6Z = $mol_type_enforce<
		`Ce-Pr-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P5346A1W = $mol_type_enforce<
		`Lu-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O0PLF5WN = $mol_type_enforce<
		`Dy-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RLMZ78Y7 = $mol_type_enforce<
		`La-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5DL20WUG = $mol_type_enforce<
		`Y-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P1YLONRV = $mol_type_enforce<
		`Pm-Nd-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I6ZZ1PXV = $mol_type_enforce<
		`Tb-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__207H71OR = $mol_type_enforce<
		`Yb-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SY2JVKHT = $mol_type_enforce<
		`Li-Pr-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W971DS20 = $mol_type_enforce<
		`Mg-Mn-Cd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BKYFRU6F = $mol_type_enforce<
		`Ce-Pm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VRI6YMY8 = $mol_type_enforce<
		`Pu-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VTTNCHI9 = $mol_type_enforce<
		`Tl-Cd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GKD2TAK2 = $mol_type_enforce<
		`Sc-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W8RMTEEI = $mol_type_enforce<
		`Pu-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JJ6GOETV = $mol_type_enforce<
		`Mn-Fe-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W5BQ05ST = $mol_type_enforce<
		`Eu-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LH2NM78J = $mol_type_enforce<
		`Tb-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TBSEM0RR = $mol_type_enforce<
		`Tb-Pr-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__82D2IQKP = $mol_type_enforce<
		`Ca-Nd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N01OMY8O = $mol_type_enforce<
		`Ba-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V0DBA8KN = $mol_type_enforce<
		`Ca-Tb-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KDK3G7MV = $mol_type_enforce<
		`Pu-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8R5XZ3JC = $mol_type_enforce<
		`Ca-Yb-Eu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A5Y1HRJZ = $mol_type_enforce<
		`Th-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__08VX304R = $mol_type_enforce<
		`Si-Sn-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SL4J05UT = $mol_type_enforce<
		`Tb-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OL49OJ2E = $mol_type_enforce<
		`Na-Cr-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YQBOJSRI = $mol_type_enforce<
		`Y-Er-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P82VY7XV = $mol_type_enforce<
		`Y-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TOLIBETF = $mol_type_enforce<
		`Ni-Pd-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E2VWXMAW = $mol_type_enforce<
		`Y-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VCVHSH74 = $mol_type_enforce<
		`Co-Pd-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5UZFPT8L = $mol_type_enforce<
		`Li-Gd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VE3UXW0K = $mol_type_enforce<
		`Tb-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M31G0LSN = $mol_type_enforce<
		`Pr-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RIB39GIE = $mol_type_enforce<
		`La-Yb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__40PDKJTV = $mol_type_enforce<
		`Ca-Yb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VB1C0U7G = $mol_type_enforce<
		`Dy-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TI0PSSX6 = $mol_type_enforce<
		`Nd-Sm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MC4LQADI = $mol_type_enforce<
		`Tb-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZASTPF76 = $mol_type_enforce<
		`Gd-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ISR2EI0L = $mol_type_enforce<
		`Ca-Pm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CI0Q903U = $mol_type_enforce<
		`Tl-Zn-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IZJES33X = $mol_type_enforce<
		`Yb-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FY1Y1PHQ = $mol_type_enforce<
		`Fe-Co-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y8FPOW0I = $mol_type_enforce<
		`La-Sm-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GHTYTC6C = $mol_type_enforce<
		`Nb-V-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G6M2M3BZ = $mol_type_enforce<
		`La-Sm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2O2J1LZ8 = $mol_type_enforce<
		`Li-Pr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V04YU6Z3 = $mol_type_enforce<
		`Tb-Gd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WBUUH5K8 = $mol_type_enforce<
		`Eu-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B4DEXFJA = $mol_type_enforce<
		`Yb-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TTK85KXR = $mol_type_enforce<
		`Yb-Er-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5RACJDX3 = $mol_type_enforce<
		`La-Ho-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BUCEBXPU = $mol_type_enforce<
		`Dy-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6QS2XYRB = $mol_type_enforce<
		`La-Ce-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X1MEM9BI = $mol_type_enforce<
		`Pr-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OXW55ZNB = $mol_type_enforce<
		`Eu-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1DV4JWNE = $mol_type_enforce<
		`Dy-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9OLHJU8U = $mol_type_enforce<
		`La-Yb-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FKZI1CE6 = $mol_type_enforce<
		`Ce-Pm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UB9CX99J = $mol_type_enforce<
		`Tb-Pm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W4VXQ7J1 = $mol_type_enforce<
		`Pr-Dy-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1B2UNUO6 = $mol_type_enforce<
		`La-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DJSNJADB = $mol_type_enforce<
		`Li-Ce-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SBRYD0PI = $mol_type_enforce<
		`Li-Pr-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__57GUQJ8G = $mol_type_enforce<
		`Tb-Pm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8E8OK9U8 = $mol_type_enforce<
		`Dy-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N5UILQZP = $mol_type_enforce<
		`Al-In-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F729G3J2 = $mol_type_enforce<
		`Nd-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8CNNO3T3 = $mol_type_enforce<
		`Pr-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XJSV0UAK = $mol_type_enforce<
		`Ba-Pm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__16KDSK67 = $mol_type_enforce<
		`Pr-Dy-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XRTW8C9I = $mol_type_enforce<
		`Rb-Na-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NQGGG3JI = $mol_type_enforce<
		`Tb-Pm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1U0YKVXT = $mol_type_enforce<
		`Gd-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5TG8VCHR = $mol_type_enforce<
		`Y-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CMMS1PUP = $mol_type_enforce<
		`Gd-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E4QO2252 = $mol_type_enforce<
		`Ba-Pm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GJONL37Q = $mol_type_enforce<
		`Pu-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TRTA92MV = $mol_type_enforce<
		`Er-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GME5UN8Z = $mol_type_enforce<
		`Co-Ni-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EBYPCL1S = $mol_type_enforce<
		`Ho-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__93DI75KZ = $mol_type_enforce<
		`Pm-Pr-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z8A4UVWF = $mol_type_enforce<
		`Sm-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EHVN7UTN = $mol_type_enforce<
		`Yb-Pr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M8A6758U = $mol_type_enforce<
		`Cu-Ag-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FAK8HM32 = $mol_type_enforce<
		`Pm-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AHD4Y5ZW = $mol_type_enforce<
		`Re-Ir-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DELXQL0M = $mol_type_enforce<
		`Er-Lu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2VKGSG9Y = $mol_type_enforce<
		`La-Eu-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZMB7QEUE = $mol_type_enforce<
		`Cu-Ag-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KNYNRNMV = $mol_type_enforce<
		`Dy-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VWNNJ9FL = $mol_type_enforce<
		`Dy-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RV7JRG5I = $mol_type_enforce<
		`Re-Bi-Sb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M81C6L55 = $mol_type_enforce<
		`Pm-Pr-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EIMD6GUE = $mol_type_enforce<
		`Th-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__20LT4FPX = $mol_type_enforce<
		`Y-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2U5D0FCM = $mol_type_enforce<
		`Fe-Ag-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3KUPR0ZB = $mol_type_enforce<
		`Co-Os-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2389YV3P = $mol_type_enforce<
		`Rb-Li-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X45H77FS = $mol_type_enforce<
		`Gd-Dy-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SZQKAMQD = $mol_type_enforce<
		`Tb-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z9KMQUGA = $mol_type_enforce<
		`Ce-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AJRY12G5 = $mol_type_enforce<
		`Ba-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__74KVR3XE = $mol_type_enforce<
		`Nd-Dy-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__10TVZPEQ = $mol_type_enforce<
		`Ca-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BGSJM0I2 = $mol_type_enforce<
		`Li-Hf-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TF2UE45Z = $mol_type_enforce<
		`Tb-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UQ8NOYZ9 = $mol_type_enforce<
		`Tl-Zn-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SY4S9QBI = $mol_type_enforce<
		`Pr-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CR2J3HO5 = $mol_type_enforce<
		`Er-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RG4680ZT = $mol_type_enforce<
		`Er-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QWB48GAI = $mol_type_enforce<
		`K-Li-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6CW5N5QO = $mol_type_enforce<
		`Yb-Sc-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SMSI0A04 = $mol_type_enforce<
		`La-Ce-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M5DHUAVN = $mol_type_enforce<
		`Cs-Mg-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6WU9F1R0 = $mol_type_enforce<
		`Ga-B-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WDI3PG6A = $mol_type_enforce<
		`Re-Ir-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QDZRIMHD = $mol_type_enforce<
		`Pr-Gd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KHKZPEK6 = $mol_type_enforce<
		`Re-Ni-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MHHB6LJD = $mol_type_enforce<
		`Tb-Nd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X7UUSMHI = $mol_type_enforce<
		`Tb-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ATRJDOAZ = $mol_type_enforce<
		`Nd-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SFXPSTB6 = $mol_type_enforce<
		`Tb-Dy-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IZF0DBQE = $mol_type_enforce<
		`Tb-Pr-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CV7ZITEO = $mol_type_enforce<
		`La-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BYD16G04 = $mol_type_enforce<
		`Eu-Th-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XZYOAUCI = $mol_type_enforce<
		`Li-Tb-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8G03HLEI = $mol_type_enforce<
		`Na-V-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8GOSCZPQ = $mol_type_enforce<
		`Cu-Re-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JIHZKLL4 = $mol_type_enforce<
		`Cd-Ge-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RBZIM1JH = $mol_type_enforce<
		`Sm-Gd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PPMCLRZJ = $mol_type_enforce<
		`Al-In-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XFXKXXLY = $mol_type_enforce<
		`Al-Cd-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JW3A3JDA = $mol_type_enforce<
		`Ce-Eu-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BSZ7UCEE = $mol_type_enforce<
		`La-Tb-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CG0TZRQ2 = $mol_type_enforce<
		`Li-Tb-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VF769T6N = $mol_type_enforce<
		`Pr-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2WU8K9JQ = $mol_type_enforce<
		`La-Pm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G5RI4ISA = $mol_type_enforce<
		`Gd-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C704XXJM = $mol_type_enforce<
		`Li-La-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__684MF5UY = $mol_type_enforce<
		`Al-Ga-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UT0F008F = $mol_type_enforce<
		`Tl-As-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W37WTZ6L = $mol_type_enforce<
		`Re-Pd-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7ZH10HO5 = $mol_type_enforce<
		`Eu-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3J4W6XWZ = $mol_type_enforce<
		`Tm-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XNEX4BXC = $mol_type_enforce<
		`Eu-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UEDFB8Q8 = $mol_type_enforce<
		`Be-Zn-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__35MR4I16 = $mol_type_enforce<
		`Li-Pm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BASHJI9A = $mol_type_enforce<
		`Na-Mg-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VT95Z99C = $mol_type_enforce<
		`Fe-Ag-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T3PFK58Y = $mol_type_enforce<
		`Tl-Zn-Cd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1OGF017J = $mol_type_enforce<
		`Nd-Sm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__19NGHMKJ = $mol_type_enforce<
		`Y-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KSFRXD3U = $mol_type_enforce<
		`Gd-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PR295DSL = $mol_type_enforce<
		`Li-Tb-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HPTHZL23 = $mol_type_enforce<
		`Be-Ga-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WNW3NT50 = $mol_type_enforce<
		`Mn-Cu-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OHRBXSZL = $mol_type_enforce<
		`Pr-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YRMROO41 = $mol_type_enforce<
		`Ho-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AUH0ZBNO = $mol_type_enforce<
		`Na-Li-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YJABLY4P = $mol_type_enforce<
		`Re-Ru-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6J94E748 = $mol_type_enforce<
		`La-Tb-Ce`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y1ET91V8 = $mol_type_enforce<
		`Cr-Pb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F4ODIHNY = $mol_type_enforce<
		`Pr-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y3SGKVPY = $mol_type_enforce<
		`Ag-Pd-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L6QS4X8J = $mol_type_enforce<
		`Ca-Nd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LMEUTQVH = $mol_type_enforce<
		`Mg-Cr-Cd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YSZRXIMN = $mol_type_enforce<
		`Mn-Ni-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SOYSJVIH = $mol_type_enforce<
		`Cu-B-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7DPTNBRO = $mol_type_enforce<
		`Li-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TSK17XN2 = $mol_type_enforce<
		`Ni-Os-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HM6H4B6U = $mol_type_enforce<
		`Fe-Ag-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LUSC405G = $mol_type_enforce<
		`Li-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N7ZKFTY1 = $mol_type_enforce<
		`Sm-Y-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1862LSRT = $mol_type_enforce<
		`Dy-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SZ18IDVV = $mol_type_enforce<
		`Na-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AM1SD38A = $mol_type_enforce<
		`Tb-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6FK97OS5 = $mol_type_enforce<
		`Rb-Na-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8QSHT4NQ = $mol_type_enforce<
		`Gd-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L6899Y0I = $mol_type_enforce<
		`Pr-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ASDZP35M = $mol_type_enforce<
		`Pr-Sm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1ZH2FW82 = $mol_type_enforce<
		`Gd-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PV569R0D = $mol_type_enforce<
		`Zr-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SBXX5ZRL = $mol_type_enforce<
		`Cr-Hg-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__43SW4I2W = $mol_type_enforce<
		`Yb-Er-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8E7PQQJY = $mol_type_enforce<
		`Ca-Pm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__17ZSJKO3 = $mol_type_enforce<
		`Co-Cu-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WDDS8MTJ = $mol_type_enforce<
		`Gd-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__THP5RJ6K = $mol_type_enforce<
		`Sc-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XRG40D37 = $mol_type_enforce<
		`Ga-Si-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N81ERKDV = $mol_type_enforce<
		`Li-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OGTUIZDZ = $mol_type_enforce<
		`Ba-Sr-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JYJ77D8I = $mol_type_enforce<
		`Li-Pm-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R2AGBMV5 = $mol_type_enforce<
		`Na-Li-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LUHQ07ND = $mol_type_enforce<
		`Gd-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__74IKN07A = $mol_type_enforce<
		`Yb-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WV6ZYIZ9 = $mol_type_enforce<
		`Ho-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BVXS1I4H = $mol_type_enforce<
		`Nd-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K8JLKNN1 = $mol_type_enforce<
		`Ca-Ce-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TVWCVU25 = $mol_type_enforce<
		`Pm-Gd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HWDWCFYO = $mol_type_enforce<
		`La-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4FYDJUQX = $mol_type_enforce<
		`Ca-Yb-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TWR6NX6A = $mol_type_enforce<
		`Pr-Th-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NWKU0CDI = $mol_type_enforce<
		`Tm-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WOW2T7W1 = $mol_type_enforce<
		`Rb-Li-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0EGO6Z4P = $mol_type_enforce<
		`Gd-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__05OFONQT = $mol_type_enforce<
		`Yb-Pr-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XG5ZR0FT = $mol_type_enforce<
		`Ce-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F6H33PLH = $mol_type_enforce<
		`Nd-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P7VRIOV7 = $mol_type_enforce<
		`Er-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2K0RO2BE = $mol_type_enforce<
		`Dy-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__90CPOX91 = $mol_type_enforce<
		`La-Pr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GGR8VOMX = $mol_type_enforce<
		`Yb-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P23KXHD5 = $mol_type_enforce<
		`La-Yb-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OL6TL7WE = $mol_type_enforce<
		`Co-Rh-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H6UOH2K6 = $mol_type_enforce<
		`La-Eu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XNSPKCV6 = $mol_type_enforce<
		`Y-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X0GQB8UH = $mol_type_enforce<
		`K-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E0LZHESX = $mol_type_enforce<
		`Pr-Sm-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UOFA17IN = $mol_type_enforce<
		`Eu-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NM9DO98D = $mol_type_enforce<
		`Ga-Sn-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L2C5NXWT = $mol_type_enforce<
		`Cu-Ag-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RGMJOWJ4 = $mol_type_enforce<
		`Ce-Gd-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R7UDDSS1 = $mol_type_enforce<
		`Tl-Ga-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J2KOW1G5 = $mol_type_enforce<
		`Gd-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EKMCA1R9 = $mol_type_enforce<
		`Ti-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__62UX2JRJ = $mol_type_enforce<
		`Ga-Sn-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QMDY39Z0 = $mol_type_enforce<
		`La-Eu-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DF7KOGIQ = $mol_type_enforce<
		`Tm-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z5RIF7GI = $mol_type_enforce<
		`Pm-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JPJJ6VCU = $mol_type_enforce<
		`Be-Al-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AT2HCXII = $mol_type_enforce<
		`Dy-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OVLXPYCI = $mol_type_enforce<
		`Yb-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4PLWAG98 = $mol_type_enforce<
		`Na-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JQ64P5QW = $mol_type_enforce<
		`Li-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HGKSZ2JY = $mol_type_enforce<
		`Na-Sr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R8XKW9DL = $mol_type_enforce<
		`Ba-La-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H1AV18GE = $mol_type_enforce<
		`Sm-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7KRHEZG7 = $mol_type_enforce<
		`La-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KRKI495M = $mol_type_enforce<
		`K-Cr-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E2292WBR = $mol_type_enforce<
		`Y-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F5YI5X6U = $mol_type_enforce<
		`Ce-Pm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JD1B6G52 = $mol_type_enforce<
		`Sm-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SDNH7MXJ = $mol_type_enforce<
		`Er-Th-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QS99HB4S = $mol_type_enforce<
		`Co-Os-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8HPBBB9R = $mol_type_enforce<
		`Sm-Dy-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XZHYIHE0 = $mol_type_enforce<
		`Sr-Ca-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L6VCDQ11 = $mol_type_enforce<
		`Pm-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SOVGBBKY = $mol_type_enforce<
		`Yb-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__93EUT469 = $mol_type_enforce<
		`La-Gd-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UE5V8GRN = $mol_type_enforce<
		`Tb-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OE7JY2JG = $mol_type_enforce<
		`Cs-Mg-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SBOYNTR3 = $mol_type_enforce<
		`Ca-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__67Y5LWU5 = $mol_type_enforce<
		`Pr-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZTQUH9GE = $mol_type_enforce<
		`Pm-Sm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FEWO9URW = $mol_type_enforce<
		`La-Sm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K5UT0XOW = $mol_type_enforce<
		`Zr-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OYPEQ8SR = $mol_type_enforce<
		`Cr-Cu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D8ZZIPDA = $mol_type_enforce<
		`Cu-Ni-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RBJ83FT3 = $mol_type_enforce<
		`Sm-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__27OG6NED = $mol_type_enforce<
		`Ce-Pr-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6PF6VBOZ = $mol_type_enforce<
		`Ce-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DHUYW8U2 = $mol_type_enforce<
		`La-V-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6ISTVZNF = $mol_type_enforce<
		`Sm-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C2TEM1XS = $mol_type_enforce<
		`Ce-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4P09WWWM = $mol_type_enforce<
		`Ce-Y-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZQDFMWVG = $mol_type_enforce<
		`Ca-Pm-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LTZW612O = $mol_type_enforce<
		`Ce-Pr-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4SK1ABBO = $mol_type_enforce<
		`Ce-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X8LPRWUF = $mol_type_enforce<
		`Re-Ru-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I6U0NFOB = $mol_type_enforce<
		`Cu-Os-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3CUQR25U = $mol_type_enforce<
		`Co-Ni-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__18ZY3KSS = $mol_type_enforce<
		`La-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__33285FAG = $mol_type_enforce<
		`Ba-V-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YLZYW96A = $mol_type_enforce<
		`Gd-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8RMBIV0U = $mol_type_enforce<
		`Li-Er-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y40LH0K3 = $mol_type_enforce<
		`La-Yb-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NRKMHT6V = $mol_type_enforce<
		`Ce-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JLXA8E6W = $mol_type_enforce<
		`Y-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__80PBFDNY = $mol_type_enforce<
		`Tm-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__32TY4XM0 = $mol_type_enforce<
		`La-Eu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9RI5HI39 = $mol_type_enforce<
		`Pr-Dy-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X60QA2H1 = $mol_type_enforce<
		`Ca-Yb-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CTMCK0PS = $mol_type_enforce<
		`La-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__72UQMNGM = $mol_type_enforce<
		`Pr-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4OVUIPQS = $mol_type_enforce<
		`Nd-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TTST5R76 = $mol_type_enforce<
		`Pu-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OVGQS4F7 = $mol_type_enforce<
		`Li-Nd-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N79VOZY1 = $mol_type_enforce<
		`Li-Ce-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VZ12AABD = $mol_type_enforce<
		`Tl-Cu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__61YSW5F9 = $mol_type_enforce<
		`Al-Zn-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YRDHMAX7 = $mol_type_enforce<
		`Er-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LGO0VSSA = $mol_type_enforce<
		`K-Mg-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7H6X5N63 = $mol_type_enforce<
		`Li-Ce-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6B1IDHMO = $mol_type_enforce<
		`Na-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SW4QK0GO = $mol_type_enforce<
		`Ba-La-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P8S08D72 = $mol_type_enforce<
		`Tb-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TSB0HEJU = $mol_type_enforce<
		`Pr-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__74GJQM0U = $mol_type_enforce<
		`Tb-Yb-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__83AYKSF8 = $mol_type_enforce<
		`Sm-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XMELV24P = $mol_type_enforce<
		`Tb-Dy-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__70YB4NQB = $mol_type_enforce<
		`Ag-Ge-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6OC23CQV = $mol_type_enforce<
		`Nd-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__44A6YALJ = $mol_type_enforce<
		`Yb-Y-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3NPLK26N = $mol_type_enforce<
		`Dy-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G9XM60Y5 = $mol_type_enforce<
		`Gd-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QG770VS3 = $mol_type_enforce<
		`Nd-Sm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0DTTRUSM = $mol_type_enforce<
		`Tb-Sm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X9KIL3KR = $mol_type_enforce<
		`Li-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WST1MH5F = $mol_type_enforce<
		`Y-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1S7Y2W7L = $mol_type_enforce<
		`Eu-Sc-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HBGT29XN = $mol_type_enforce<
		`Ti-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YYBMMZ5A = $mol_type_enforce<
		`Re-Ag-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__94PJMX6I = $mol_type_enforce<
		`Pm-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BMP80D12 = $mol_type_enforce<
		`Ca-Tb-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KTREG9V6 = $mol_type_enforce<
		`Ta-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BY2GR9XT = $mol_type_enforce<
		`Tb-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0HDTRHK4 = $mol_type_enforce<
		`Li-La-Tb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V52X0VS8 = $mol_type_enforce<
		`Tl-Ag-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__STH74IKU = $mol_type_enforce<
		`Tb-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KVZYQ031 = $mol_type_enforce<
		`Er-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B1SFH83M = $mol_type_enforce<
		`Fe-Ni-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DQXC6ZRG = $mol_type_enforce<
		`La-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S21V042U = $mol_type_enforce<
		`Co-Re-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UAFK7CMC = $mol_type_enforce<
		`Li-Cr-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QDJCP764 = $mol_type_enforce<
		`V-Ag-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U3CUPUXE = $mol_type_enforce<
		`Zn-Sn-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2I41TIDU = $mol_type_enforce<
		`Ce-Nd-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H5JW8QC4 = $mol_type_enforce<
		`La-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3NE0Y0HD = $mol_type_enforce<
		`Ca-Eu-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O9RXKZEX = $mol_type_enforce<
		`Ho-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__65P56Q6A = $mol_type_enforce<
		`Yb-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OYHX79Y2 = $mol_type_enforce<
		`Eu-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ISDDP22E = $mol_type_enforce<
		`Ni-Ir-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UPQYOVLZ = $mol_type_enforce<
		`Y-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G3YNL039 = $mol_type_enforce<
		`Pr-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__94VGI76R = $mol_type_enforce<
		`Ho-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U6WYJY2H = $mol_type_enforce<
		`Pr-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YM5RTMYY = $mol_type_enforce<
		`Pr-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G5U6YD56 = $mol_type_enforce<
		`Pr-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R6UQO83L = $mol_type_enforce<
		`Tb-Ce-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5HC6KL1N = $mol_type_enforce<
		`Ce-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7BTO7DES = $mol_type_enforce<
		`Li-Tb-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JJ6I6ELZ = $mol_type_enforce<
		`Mn-Tl-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6O301TCO = $mol_type_enforce<
		`Ba-La-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CUFEJJSR = $mol_type_enforce<
		`Th-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NJAC9OLY = $mol_type_enforce<
		`Li-La-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HW8U7Q2C = $mol_type_enforce<
		`Mn-Fe-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V26OACAM = $mol_type_enforce<
		`Ho-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q9QGFDXQ = $mol_type_enforce<
		`K-Rb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V3CSXUIK = $mol_type_enforce<
		`La-Gd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8GE2LWTW = $mol_type_enforce<
		`Cu-Ag-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JA2ZUBV8 = $mol_type_enforce<
		`Ce-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CIRZ3J8V = $mol_type_enforce<
		`Ho-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9PSV8CDB = $mol_type_enforce<
		`Ce-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9SGCV1TP = $mol_type_enforce<
		`Co-Ru-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PEI7HZR1 = $mol_type_enforce<
		`Ce-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DSCOUIF5 = $mol_type_enforce<
		`Yb-Hf-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2PU0K75B = $mol_type_enforce<
		`Tl-Si-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A9X6RP0U = $mol_type_enforce<
		`Tb-Yb-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YCN4MW9G = $mol_type_enforce<
		`Rb-Li-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A7SYRT2K = $mol_type_enforce<
		`Co-Ni-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F48QPBOF = $mol_type_enforce<
		`Co-Ir-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6YDMEDS8 = $mol_type_enforce<
		`Gd-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IXGAVD1D = $mol_type_enforce<
		`Gd-Dy-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WZF2R8PW = $mol_type_enforce<
		`Mn-Cu-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8REZIMEV = $mol_type_enforce<
		`Cu-Mo-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E3KC9D2Y = $mol_type_enforce<
		`Tb-Pr-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X711JSRP = $mol_type_enforce<
		`Li-Mg-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ELIECANX = $mol_type_enforce<
		`Yb-Pr-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O5V2XG1A = $mol_type_enforce<
		`Li-Sm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IX1DR1UL = $mol_type_enforce<
		`Li-Tb-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7MZJDLGF = $mol_type_enforce<
		`Sm-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OSRCDENI = $mol_type_enforce<
		`Ba-La-Yb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1PXC86BV = $mol_type_enforce<
		`La-Dy-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5YQALERZ = $mol_type_enforce<
		`Zn-Si-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L2RY2CJ3 = $mol_type_enforce<
		`Ca-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QV70DJU6 = $mol_type_enforce<
		`U-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__09IEJB8G = $mol_type_enforce<
		`Pr-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M6MMEL98 = $mol_type_enforce<
		`Si-Bi-Sb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K0ZKPBCY = $mol_type_enforce<
		`Li-Ce-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4P76RHNF = $mol_type_enforce<
		`Cu-Re-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TWLP73XF = $mol_type_enforce<
		`Ba-Ca-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QWOHLT0M = $mol_type_enforce<
		`La-Lu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VNR9XA9K = $mol_type_enforce<
		`Zn-Cd-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZOHWPPSS = $mol_type_enforce<
		`In-Ga-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YUPIFDJE = $mol_type_enforce<
		`Dy-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5HVFVEXW = $mol_type_enforce<
		`Cr-Hg-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6T34MJAK = $mol_type_enforce<
		`Yb-Dy-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IEQDNH6W = $mol_type_enforce<
		`Eu-Y-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N0ZSZ804 = $mol_type_enforce<
		`Mn-Co-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DB1DIUHY = $mol_type_enforce<
		`Yb-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A8029DWP = $mol_type_enforce<
		`Nb-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GRYT40PR = $mol_type_enforce<
		`Yb-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__INBW8YXI = $mol_type_enforce<
		`Yb-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WJFEQ4M3 = $mol_type_enforce<
		`K-Rb-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__505USRQW = $mol_type_enforce<
		`Ce-Gd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NCHPUJRI = $mol_type_enforce<
		`Dy-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P89GOCUF = $mol_type_enforce<
		`V-Fe-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1AH5YIAW = $mol_type_enforce<
		`Yb-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__69DWKKCK = $mol_type_enforce<
		`La-Ce-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ESGI63LF = $mol_type_enforce<
		`Ni-Pd-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T2S7MEJ8 = $mol_type_enforce<
		`La-Pr-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F04HH4QU = $mol_type_enforce<
		`La-Ce-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UZPAQXNR = $mol_type_enforce<
		`Eu-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2Z6QEMRW = $mol_type_enforce<
		`Nd-Ho-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZNAKGTSL = $mol_type_enforce<
		`Hf-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4BEI5E0J = $mol_type_enforce<
		`Tb-Yb-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X82BXMFM = $mol_type_enforce<
		`Tb-Pr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0JUEZV3Y = $mol_type_enforce<
		`Er-Pu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GADW9C39 = $mol_type_enforce<
		`Re-Hg-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YM51F85Z = $mol_type_enforce<
		`Ba-Yb-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FBZD8ALU = $mol_type_enforce<
		`Lu-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0G3KUNUI = $mol_type_enforce<
		`Nd-Y-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NMKEGA70 = $mol_type_enforce<
		`Rb-Na-Li`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RLQWH4FW = $mol_type_enforce<
		`Sm-Dy-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JUTWGPSS = $mol_type_enforce<
		`U-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z0Z4CAR1 = $mol_type_enforce<
		`Ce-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R9ZAXIP8 = $mol_type_enforce<
		`Pd-Rh-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1T6VJ5Q4 = $mol_type_enforce<
		`Tb-Ce-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CRX5746M = $mol_type_enforce<
		`Eu-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__40VW8Q05 = $mol_type_enforce<
		`Y-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PX0C05YW = $mol_type_enforce<
		`Li-Ce-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6YJOCIYT = $mol_type_enforce<
		`Yb-Gd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XAHY9UWK = $mol_type_enforce<
		`Cd-B-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XV8FSSV1 = $mol_type_enforce<
		`Th-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GG8GKGP2 = $mol_type_enforce<
		`Ba-La-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AT0B6JUG = $mol_type_enforce<
		`Er-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZE485ZLD = $mol_type_enforce<
		`K-Rb-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__17U40YRU = $mol_type_enforce<
		`Cd-Fe-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5G0Q3FCV = $mol_type_enforce<
		`Al-Tl-Cd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9J33L1II = $mol_type_enforce<
		`Pr-Nd-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z1T1QOEN = $mol_type_enforce<
		`Nd-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UF7NZBBG = $mol_type_enforce<
		`Ce-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SP352TQD = $mol_type_enforce<
		`La-Pu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RAV3UIS1 = $mol_type_enforce<
		`Ge-Au-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SLWNZYQ0 = $mol_type_enforce<
		`Ca-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PTYLP6YP = $mol_type_enforce<
		`Yb-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__68UPQJJV = $mol_type_enforce<
		`Na-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P9CHG6K2 = $mol_type_enforce<
		`Y-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X4CDZ2LL = $mol_type_enforce<
		`Ba-Sr-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ERQ29VL1 = $mol_type_enforce<
		`Tb-Dy-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OG4CQG8L = $mol_type_enforce<
		`La-Gd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AFP4OHHL = $mol_type_enforce<
		`Y-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__790PPF0A = $mol_type_enforce<
		`Ce-Sm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B0RNESF6 = $mol_type_enforce<
		`V-Pd-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DGUU5L9C = $mol_type_enforce<
		`Li-Tb-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6NXI5UUX = $mol_type_enforce<
		`Yb-Pr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FS5W3NFO = $mol_type_enforce<
		`Yb-Gd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PCLLYGSY = $mol_type_enforce<
		`Y-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SK4XGVT7 = $mol_type_enforce<
		`Pm-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HQQ3N66W = $mol_type_enforce<
		`Eu-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AFZIZNEG = $mol_type_enforce<
		`La-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OOTG4RKN = $mol_type_enforce<
		`Ba-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q1LWEG2L = $mol_type_enforce<
		`Co-Hg-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6YR4RIMP = $mol_type_enforce<
		`Lu-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1R8ZRA2E = $mol_type_enforce<
		`Y-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0O9WQ874 = $mol_type_enforce<
		`Ba-Ca-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EQSYRMO5 = $mol_type_enforce<
		`K-Li-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U1N5EVVH = $mol_type_enforce<
		`V-Hg-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AUAGHIJE = $mol_type_enforce<
		`Tb-Gd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T9SSFBOC = $mol_type_enforce<
		`La-Pm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JUX7MV4J = $mol_type_enforce<
		`Ir-Ru-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VT9ELYWM = $mol_type_enforce<
		`Ca-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S7U5T5PU = $mol_type_enforce<
		`Tb-Yb-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0F0IZ8ND = $mol_type_enforce<
		`Li-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PF0AE4GJ = $mol_type_enforce<
		`Er-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L39DGKMD = $mol_type_enforce<
		`La-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BYTV8VXV = $mol_type_enforce<
		`La-Dy-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0OD7657M = $mol_type_enforce<
		`Ce-Nd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HY8IGI5X = $mol_type_enforce<
		`Co-Pt-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6EKIAQGW = $mol_type_enforce<
		`Tm-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HLRV1IOE = $mol_type_enforce<
		`Na-Mg-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GN14UNWN = $mol_type_enforce<
		`Ce-Eu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SW5CDAJT = $mol_type_enforce<
		`Cs-Li-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3I9XPJ5E = $mol_type_enforce<
		`Gd-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N4NOEPEO = $mol_type_enforce<
		`Re-Pd-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LW6UY8OT = $mol_type_enforce<
		`Yb-Nd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LO63XBRQ = $mol_type_enforce<
		`Mg-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DEXEZF84 = $mol_type_enforce<
		`Fe-Pd-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QRNPWJ9E = $mol_type_enforce<
		`K-Rb-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ROWXNC78 = $mol_type_enforce<
		`Ba-Ca-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V6TNSLLL = $mol_type_enforce<
		`Rb-Mg-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4F9QTCT2 = $mol_type_enforce<
		`La-Sm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TEIMVPCJ = $mol_type_enforce<
		`Y-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1S8MUQ1I = $mol_type_enforce<
		`Cs-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZP59K5Z5 = $mol_type_enforce<
		`Tb-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1BFPQE9E = $mol_type_enforce<
		`Pm-Gd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YZLR1X8Q = $mol_type_enforce<
		`La-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KOCPYP5D = $mol_type_enforce<
		`Tb-Gd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0QISGD5R = $mol_type_enforce<
		`Ce-Pm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6LGKUHYN = $mol_type_enforce<
		`Pm-Sm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UQ8ELNHI = $mol_type_enforce<
		`Hf-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__52TTLWEI = $mol_type_enforce<
		`Y-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ANE1CQ3M = $mol_type_enforce<
		`Be-Zn-In`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q4JDDMW5 = $mol_type_enforce<
		`Yb-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V1NXYJ92 = $mol_type_enforce<
		`Nd-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WSGX8I0O = $mol_type_enforce<
		`Ce-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5IX6DTJ8 = $mol_type_enforce<
		`Cs-K-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0X37XAHY = $mol_type_enforce<
		`Ag-Pd-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__68X26HKU = $mol_type_enforce<
		`Sm-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4TNJ1HBC = $mol_type_enforce<
		`Ho-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SWSEPC9V = $mol_type_enforce<
		`Yb-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PZMJP6M5 = $mol_type_enforce<
		`Tb-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M16XM4WD = $mol_type_enforce<
		`Yb-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7D46QNVD = $mol_type_enforce<
		`Ca-Tb-Ce`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4TPGF5IL = $mol_type_enforce<
		`Tb-Dy-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N7ENVMHS = $mol_type_enforce<
		`Zn-Cd-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__55TZD59O = $mol_type_enforce<
		`Pm-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V4CL4AVU = $mol_type_enforce<
		`Yb-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2VN2VPE2 = $mol_type_enforce<
		`Hf-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C5BARB3P = $mol_type_enforce<
		`Li-Sm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P80M29C8 = $mol_type_enforce<
		`Li-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GA7NSV6Y = $mol_type_enforce<
		`Na-Ta-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YG8Z5CMQ = $mol_type_enforce<
		`Pr-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q2QJ86M8 = $mol_type_enforce<
		`V-In-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__726SNKGH = $mol_type_enforce<
		`Er-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L2N3JV6Z = $mol_type_enforce<
		`Pm-Dy-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__32H8FG62 = $mol_type_enforce<
		`Tb-Gd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AZINWGH1 = $mol_type_enforce<
		`Nd-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A4A7AZOF = $mol_type_enforce<
		`Sr-Ca-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HTQHQIOJ = $mol_type_enforce<
		`Tm-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RJFX7R3L = $mol_type_enforce<
		`Gd-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8UA95D19 = $mol_type_enforce<
		`Li-Gd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LACC2G1T = $mol_type_enforce<
		`Ag-Os-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EUVTSZR6 = $mol_type_enforce<
		`La-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8SOA8Q75 = $mol_type_enforce<
		`Th-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9LMWUAYK = $mol_type_enforce<
		`Co-Pd-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JDVVIBG9 = $mol_type_enforce<
		`Ce-Ho-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__48B679AN = $mol_type_enforce<
		`Cu-Re-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q1I0T320 = $mol_type_enforce<
		`Yb-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8JBEJ9L6 = $mol_type_enforce<
		`Li-La-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SKCAM8AR = $mol_type_enforce<
		`Cu-Ag-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L256VLIX = $mol_type_enforce<
		`Eu-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QWFWDHYB = $mol_type_enforce<
		`Rb-Na-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2WVNCQ14 = $mol_type_enforce<
		`Co-Rh-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D0X50ZXK = $mol_type_enforce<
		`Tb-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OIC7PXLJ = $mol_type_enforce<
		`Ce-Gd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KULSNTBS = $mol_type_enforce<
		`Tb-Ce-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1C94RV5B = $mol_type_enforce<
		`Gd-Dy-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XDCVJOAO = $mol_type_enforce<
		`Zn-In-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4DIM8SBG = $mol_type_enforce<
		`Ce-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SXS71XQJ = $mol_type_enforce<
		`Y-Ho-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JF4JEGRB = $mol_type_enforce<
		`Pm-Pr-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5257XAIJ = $mol_type_enforce<
		`Li-Pr-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6HFXC2YG = $mol_type_enforce<
		`Er-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9Y6Y8MOA = $mol_type_enforce<
		`Li-Gd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GYGOJLIO = $mol_type_enforce<
		`Li-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7Y84E0QR = $mol_type_enforce<
		`Yb-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KECZ75T1 = $mol_type_enforce<
		`Pu-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0PF8WALU = $mol_type_enforce<
		`La-Tb-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2E2EPKNI = $mol_type_enforce<
		`Li-La-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NF2S03NH = $mol_type_enforce<
		`Cu-Ni-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NU29ZTEA = $mol_type_enforce<
		`Yb-Pr-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QU9CQX7U = $mol_type_enforce<
		`La-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EKAV9VXT = $mol_type_enforce<
		`Fe-Ag-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A3S4VGBE = $mol_type_enforce<
		`Mg-Mn-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SF7DTX1E = $mol_type_enforce<
		`Fe-Ag-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UIMYKQUZ = $mol_type_enforce<
		`Nd-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A6002AYV = $mol_type_enforce<
		`La-Pr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8IVG3NMR = $mol_type_enforce<
		`Cr-Cu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DI96SF1G = $mol_type_enforce<
		`Tb-Er-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7P5MERDI = $mol_type_enforce<
		`Li-Lu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TRRYR0OM = $mol_type_enforce<
		`Y-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2P9ZDVFY = $mol_type_enforce<
		`Lu-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A13ZCNVK = $mol_type_enforce<
		`Sn-B-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EORAY4TM = $mol_type_enforce<
		`Li-Pr-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9U05CAC5 = $mol_type_enforce<
		`Re-Hg-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UJ1IHPMX = $mol_type_enforce<
		`Yb-Dy-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1XVV2E4W = $mol_type_enforce<
		`Tb-Pm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5OYESC6V = $mol_type_enforce<
		`Cs-K-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DP43UP0O = $mol_type_enforce<
		`Ni-Ir-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2FY8TVFK = $mol_type_enforce<
		`Ca-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K5Z26CBL = $mol_type_enforce<
		`Eu-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BMRB2K3H = $mol_type_enforce<
		`Zr-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4ORP3BKA = $mol_type_enforce<
		`Yb-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2EZK12AR = $mol_type_enforce<
		`K-Li-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P6UC2635 = $mol_type_enforce<
		`Yb-Pr-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FL9FZ14P = $mol_type_enforce<
		`Y-Pu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QNO8UV3W = $mol_type_enforce<
		`Ce-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I0OHGJBZ = $mol_type_enforce<
		`Ce-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P62NJN4Y = $mol_type_enforce<
		`Nb-V-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DAZK8G6F = $mol_type_enforce<
		`V-Cu-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0SP54QZ5 = $mol_type_enforce<
		`Y-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B0XE7TAT = $mol_type_enforce<
		`Fe-Cu-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BRCIFRUH = $mol_type_enforce<
		`Re-Pt-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q0J42ZA0 = $mol_type_enforce<
		`Pu-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MN1EMHRL = $mol_type_enforce<
		`Re-Ir-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N2U608B7 = $mol_type_enforce<
		`Ca-Yb-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VOTYKDYW = $mol_type_enforce<
		`Nd-Sm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UHWA5EBL = $mol_type_enforce<
		`Na-Sr-Ca`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DSLHCZYD = $mol_type_enforce<
		`Ho-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PPCG0HFF = $mol_type_enforce<
		`Ce-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JJU7WAGD = $mol_type_enforce<
		`Ce-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W157K2YN = $mol_type_enforce<
		`Pm-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__611PBDBD = $mol_type_enforce<
		`La-Gd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6R9ZEECY = $mol_type_enforce<
		`Dy-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V7GM5G1Y = $mol_type_enforce<
		`Ta-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2T1DW0KA = $mol_type_enforce<
		`Nd-Dy-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YS14Z3IM = $mol_type_enforce<
		`Y-Ho-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RFDVBIUO = $mol_type_enforce<
		`Sr-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H651M3WF = $mol_type_enforce<
		`La-Pr-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GIGSB36E = $mol_type_enforce<
		`Cr-Cu-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8LUJR4TU = $mol_type_enforce<
		`Pm-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I3Q57BZL = $mol_type_enforce<
		`La-Pm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I5DD3JQ0 = $mol_type_enforce<
		`Sm-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y2IJF7ED = $mol_type_enforce<
		`Y-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XYAKYOPS = $mol_type_enforce<
		`Ba-Sr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q7B97MEZ = $mol_type_enforce<
		`Ta-V-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__44SHCY4R = $mol_type_enforce<
		`Ga-Hg-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YMHCHBNT = $mol_type_enforce<
		`La-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7OUT27EP = $mol_type_enforce<
		`Nd-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ROD2EYCT = $mol_type_enforce<
		`Li-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ELPHCX9B = $mol_type_enforce<
		`Ca-Eu-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AUVYK2YK = $mol_type_enforce<
		`Pr-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XU97BUWT = $mol_type_enforce<
		`Lu-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P9EYZXKB = $mol_type_enforce<
		`Dy-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NK8G82VU = $mol_type_enforce<
		`Ce-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CYOD7LJQ = $mol_type_enforce<
		`Na-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CEHXDWZR = $mol_type_enforce<
		`La-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9AB5BOSF = $mol_type_enforce<
		`Tb-Nd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U6W63PJ4 = $mol_type_enforce<
		`Eu-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DISFJN0W = $mol_type_enforce<
		`Ca-Ce-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D3W6YR2E = $mol_type_enforce<
		`Pr-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BJ70L7A0 = $mol_type_enforce<
		`Pm-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F5P4JH97 = $mol_type_enforce<
		`Nd-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NUMS00QQ = $mol_type_enforce<
		`La-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4CZ8MSW4 = $mol_type_enforce<
		`Co-Pd-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9543O2JY = $mol_type_enforce<
		`Pr-Sm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EAMPHW5P = $mol_type_enforce<
		`Li-Mg-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z6H980LI = $mol_type_enforce<
		`Lu-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9G5TLH2O = $mol_type_enforce<
		`Eu-Hf-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1LHTDQ0A = $mol_type_enforce<
		`Li-Gd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3131Q49F = $mol_type_enforce<
		`Er-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AFLXWLE0 = $mol_type_enforce<
		`Yb-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TT7V2A6G = $mol_type_enforce<
		`La-Eu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HTMTOBEK = $mol_type_enforce<
		`Gd-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SL2OPGNP = $mol_type_enforce<
		`Cs-Li-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LSGI3O1T = $mol_type_enforce<
		`La-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WXQOKT6R = $mol_type_enforce<
		`Rb-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__63691KTO = $mol_type_enforce<
		`La-Pr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__32AFDO37 = $mol_type_enforce<
		`Nd-Gd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0UG5YA9O = $mol_type_enforce<
		`Th-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0VRYNYW0 = $mol_type_enforce<
		`Na-Mg-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__55SN7MDH = $mol_type_enforce<
		`Ce-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D689HSLH = $mol_type_enforce<
		`Eu-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TRF6NSQM = $mol_type_enforce<
		`Na-Be-Al`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ADYCRXCE = $mol_type_enforce<
		`Yb-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S26WP6O3 = $mol_type_enforce<
		`Gd-Dy-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UTPWKPM9 = $mol_type_enforce<
		`Pm-Sm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RQ9O617E = $mol_type_enforce<
		`Cs-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DYXBFS59 = $mol_type_enforce<
		`Pm-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EDE9UD16 = $mol_type_enforce<
		`Gd-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7Z3S48RD = $mol_type_enforce<
		`Cs-K-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4BA88EF6 = $mol_type_enforce<
		`Tb-Yb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FSBYTCD2 = $mol_type_enforce<
		`K-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MGFDHM8N = $mol_type_enforce<
		`La-Yb-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__281CRNXA = $mol_type_enforce<
		`Rb-Li-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WW0EEBE0 = $mol_type_enforce<
		`Li-Gd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MUCBP06U = $mol_type_enforce<
		`La-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VGRUQ1H9 = $mol_type_enforce<
		`Ce-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z54HDDVK = $mol_type_enforce<
		`Ba-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FWUYMTFS = $mol_type_enforce<
		`Ba-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F4DRILMM = $mol_type_enforce<
		`Cu-Ni-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RMQB77ST = $mol_type_enforce<
		`Nd-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M2UFHK3J = $mol_type_enforce<
		`Cd-Si-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GUT1TN48 = $mol_type_enforce<
		`Nd-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__38GRU8HE = $mol_type_enforce<
		`Tb-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2JO1A6MB = $mol_type_enforce<
		`Pr-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZBNHLXE8 = $mol_type_enforce<
		`U-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FRWD8EZS = $mol_type_enforce<
		`Nd-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PLGNKQA3 = $mol_type_enforce<
		`Fe-Pd-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WYY5TXSP = $mol_type_enforce<
		`Na-Li-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KCAY6TZX = $mol_type_enforce<
		`Ba-Ca-Yb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4KD9BZ3Y = $mol_type_enforce<
		`Sm-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EXY9WS5F = $mol_type_enforce<
		`Ca-La-Eu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I5MTLDUD = $mol_type_enforce<
		`Ca-La-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AVLMXZI4 = $mol_type_enforce<
		`Mn-Co-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CEFKA18S = $mol_type_enforce<
		`Nd-Sm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QN3XOSEZ = $mol_type_enforce<
		`Tc-Pd-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6R442B83 = $mol_type_enforce<
		`Cs-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X83MGD1L = $mol_type_enforce<
		`Ca-Eu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JA8I9244 = $mol_type_enforce<
		`Li-La-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2O3OYW9Y = $mol_type_enforce<
		`Ni-Ir-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZEGFS91C = $mol_type_enforce<
		`Fe-Ni-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XRFVGPRL = $mol_type_enforce<
		`Pu-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y6HETS0A = $mol_type_enforce<
		`Yb-Y-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZUFT2ILE = $mol_type_enforce<
		`Eu-Y-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__96P0G1W9 = $mol_type_enforce<
		`Re-Ni-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OT80GLM6 = $mol_type_enforce<
		`Pm-Sm-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OPQU8NNE = $mol_type_enforce<
		`Cu-Re-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LYV84WCX = $mol_type_enforce<
		`Lu-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__94J0PJ0D = $mol_type_enforce<
		`Tm-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C6C18EVW = $mol_type_enforce<
		`Ce-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UNW5YA1Z = $mol_type_enforce<
		`Ca-Ce-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y1ZO5XDV = $mol_type_enforce<
		`Ce-Sm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VWQTB7KI = $mol_type_enforce<
		`Re-Tc-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__36NCE1B2 = $mol_type_enforce<
		`Ag-Ru-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__064UK4I5 = $mol_type_enforce<
		`Mg-Cr-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8OF53UO7 = $mol_type_enforce<
		`Ba-Ca-La`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O3KCV3EZ = $mol_type_enforce<
		`Ca-Yb-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1STMH261 = $mol_type_enforce<
		`Ni-Os-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U4ZQGBML = $mol_type_enforce<
		`Tl-Cd-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V458CRAK = $mol_type_enforce<
		`Mg-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AYA4DY2M = $mol_type_enforce<
		`Ba-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T4R3V76X = $mol_type_enforce<
		`Fe-Ru-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IP4I4PPM = $mol_type_enforce<
		`Pr-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OFNCDXEU = $mol_type_enforce<
		`Nd-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XXHGG4YR = $mol_type_enforce<
		`Ho-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SRFE85J8 = $mol_type_enforce<
		`Ce-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XLR4P2BD = $mol_type_enforce<
		`Ce-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4FM25PZD = $mol_type_enforce<
		`Eu-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M8M35ZU9 = $mol_type_enforce<
		`Tb-Sm-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GXLSVFDI = $mol_type_enforce<
		`Ce-Pr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X83CKK0M = $mol_type_enforce<
		`Sc-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__26L5ZUNW = $mol_type_enforce<
		`Sm-Dy-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RHO4GCZ0 = $mol_type_enforce<
		`Pm-Dy-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O607E4TR = $mol_type_enforce<
		`Er-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MWMSCIBI = $mol_type_enforce<
		`La-Gd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7XV3HRX0 = $mol_type_enforce<
		`La-Mn-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FV1BHEOJ = $mol_type_enforce<
		`Ba-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RHROA599 = $mol_type_enforce<
		`Tb-Ce-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0GKHR9G0 = $mol_type_enforce<
		`Ag-Ru-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y6C7NU9K = $mol_type_enforce<
		`Ba-Pr-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TLQFN317 = $mol_type_enforce<
		`Yb-Dy-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EUBBH8L1 = $mol_type_enforce<
		`La-Pr-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FGQGYOZZ = $mol_type_enforce<
		`Li-Ta-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SPKY67NF = $mol_type_enforce<
		`La-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__49C4AAXL = $mol_type_enforce<
		`Tl-V-In`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3L1MDY7B = $mol_type_enforce<
		`Tb-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DZT4IDSC = $mol_type_enforce<
		`La-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YUOIB9GB = $mol_type_enforce<
		`Ru-Pt-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YHNFMRG0 = $mol_type_enforce<
		`Sm-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D53FT8H7 = $mol_type_enforce<
		`Tm-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FJVRJUAW = $mol_type_enforce<
		`Ce-Er-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0C7OAH6X = $mol_type_enforce<
		`Cr-W-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9JBEO80F = $mol_type_enforce<
		`Yb-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NLSK5AJO = $mol_type_enforce<
		`La-Eu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V4PRTRZ1 = $mol_type_enforce<
		`Pr-Nd-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IT0XTSGR = $mol_type_enforce<
		`Li-Nb-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CJ6HAY0M = $mol_type_enforce<
		`Cu-Pt-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W7B28IDG = $mol_type_enforce<
		`Ni-Ag-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FMR45NHZ = $mol_type_enforce<
		`Yb-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q427JXPQ = $mol_type_enforce<
		`Li-Pm-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M97K3QR3 = $mol_type_enforce<
		`Cs-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EPOGYH18 = $mol_type_enforce<
		`Y-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CRM4KDVQ = $mol_type_enforce<
		`Fe-Ag-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9VM3P9P3 = $mol_type_enforce<
		`Hf-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BOD44CPM = $mol_type_enforce<
		`La-Sm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2CHVIJU7 = $mol_type_enforce<
		`Er-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NC7DBX14 = $mol_type_enforce<
		`Ir-Os-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PJSIVXY4 = $mol_type_enforce<
		`Dy-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__465OP8JA = $mol_type_enforce<
		`Ba-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WNK4EBVI = $mol_type_enforce<
		`Ag-Pd-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BK6YAITM = $mol_type_enforce<
		`K-Rb-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GN00JA21 = $mol_type_enforce<
		`Pr-Sm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HT5LGRZA = $mol_type_enforce<
		`Nd-Dy-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6AUSFG3F = $mol_type_enforce<
		`Li-Pm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X890CALU = $mol_type_enforce<
		`Ba-Yb-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S9JXE60U = $mol_type_enforce<
		`Tb-Pm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0IA7YFWG = $mol_type_enforce<
		`La-Pm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JOTLYMF0 = $mol_type_enforce<
		`Sm-Dy-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4N856BPS = $mol_type_enforce<
		`V-Cr-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__70UXC0Q6 = $mol_type_enforce<
		`Tb-Pm-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HAEVA4ZV = $mol_type_enforce<
		`Ho-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O8SVDOSD = $mol_type_enforce<
		`Ba-Yb-Eu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1G2MOT8D = $mol_type_enforce<
		`La-Sm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W9RH192P = $mol_type_enforce<
		`Li-Tb-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LDRR37J7 = $mol_type_enforce<
		`Tb-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DDR40OOD = $mol_type_enforce<
		`Na-Mg-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8COC3QFH = $mol_type_enforce<
		`Pr-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RWPJ4ZSH = $mol_type_enforce<
		`Ce-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WYKB93TS = $mol_type_enforce<
		`Er-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QXSLOW39 = $mol_type_enforce<
		`Gd-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WEPSK9GT = $mol_type_enforce<
		`Tb-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CHHB7WZ8 = $mol_type_enforce<
		`Nd-Gd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SLZWGUWM = $mol_type_enforce<
		`Li-Pr-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9UQQAY6L = $mol_type_enforce<
		`Cr-Ag-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CP9A5KQL = $mol_type_enforce<
		`Lu-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3SG7UX13 = $mol_type_enforce<
		`Nb-Hg-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4BBXIXGI = $mol_type_enforce<
		`Tb-Gd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__23A31PBN = $mol_type_enforce<
		`La-Yb-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T6TJZMQT = $mol_type_enforce<
		`Fe-Ir-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NILNDQ6M = $mol_type_enforce<
		`Sm-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RCUEB31J = $mol_type_enforce<
		`Th-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1N9U4L1C = $mol_type_enforce<
		`Tb-Gd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1F75E2LT = $mol_type_enforce<
		`Tb-Pm-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UXYWW78V = $mol_type_enforce<
		`Pr-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YWA2KQCU = $mol_type_enforce<
		`Er-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FUD4ZG5M = $mol_type_enforce<
		`Th-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OVW0E2GR = $mol_type_enforce<
		`Y-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ULHNWETM = $mol_type_enforce<
		`La-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MSYCYYQZ = $mol_type_enforce<
		`Ga-Hg-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z7CLF7X7 = $mol_type_enforce<
		`U-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3C12WW2M = $mol_type_enforce<
		`Ce-Pr-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9V5D2CXG = $mol_type_enforce<
		`Ho-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XHUERMAC = $mol_type_enforce<
		`Pm-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2UMMRG1J = $mol_type_enforce<
		`Li-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IKTWCI4B = $mol_type_enforce<
		`Cr-Fe-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JW09FIK9 = $mol_type_enforce<
		`Rb-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CN7B8V77 = $mol_type_enforce<
		`Ce-Pr-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CKIEK4YG = $mol_type_enforce<
		`Li-Pr-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S1P8GQEM = $mol_type_enforce<
		`Yb-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HRO9EKKO = $mol_type_enforce<
		`La-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6Y3UP0QZ = $mol_type_enforce<
		`Pm-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BM4I0AUH = $mol_type_enforce<
		`Hg-Bi-Sb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YOE54LVR = $mol_type_enforce<
		`Ce-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QABUAST0 = $mol_type_enforce<
		`K-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L15P461I = $mol_type_enforce<
		`Ca-Eu-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__USG7OV2J = $mol_type_enforce<
		`Y-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6DSPDLV8 = $mol_type_enforce<
		`Nd-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BBG23U95 = $mol_type_enforce<
		`Ag-Ir-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NETJCGGH = $mol_type_enforce<
		`Ni-Ru-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SNBRYV0O = $mol_type_enforce<
		`Li-Nd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FSCLE9FW = $mol_type_enforce<
		`Cs-Rb-Li`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9DASU391 = $mol_type_enforce<
		`Na-Li-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F8YNIAFY = $mol_type_enforce<
		`Gd-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DC19YVWQ = $mol_type_enforce<
		`Co-Ag-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HTGPI7F8 = $mol_type_enforce<
		`B-Sb-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SQ94ZDLQ = $mol_type_enforce<
		`Pr-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XV19R0B5 = $mol_type_enforce<
		`La-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S1EX3443 = $mol_type_enforce<
		`Tb-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M0YHF7TC = $mol_type_enforce<
		`Re-Ni-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UCCDTI8G = $mol_type_enforce<
		`Yb-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RTVMZHZ3 = $mol_type_enforce<
		`Pm-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZH36547A = $mol_type_enforce<
		`La-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__66GJL8CI = $mol_type_enforce<
		`Be-Si-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RH6N4VG5 = $mol_type_enforce<
		`Cr-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y64RQNDL = $mol_type_enforce<
		`Ce-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__95CFP97T = $mol_type_enforce<
		`Ce-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DOSZ40G4 = $mol_type_enforce<
		`Li-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JH8N5M6L = $mol_type_enforce<
		`Tb-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G1GHLUM3 = $mol_type_enforce<
		`Tb-Sm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LTK2CKVF = $mol_type_enforce<
		`Pm-Nd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__23IPDBST = $mol_type_enforce<
		`Sc-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZMIXDWAU = $mol_type_enforce<
		`Li-Nd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J1G489NC = $mol_type_enforce<
		`La-Nd-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3LX76SOW = $mol_type_enforce<
		`La-Yb-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__91I6Z2OC = $mol_type_enforce<
		`Ce-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XGRR6SIL = $mol_type_enforce<
		`Rb-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S1KVM58W = $mol_type_enforce<
		`La-Cr-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SCL16ZWM = $mol_type_enforce<
		`Ce-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HYC7GL4V = $mol_type_enforce<
		`Zr-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GGNHNDP2 = $mol_type_enforce<
		`Lu-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F0UL90XY = $mol_type_enforce<
		`Sm-Dy-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__02QE7WNT = $mol_type_enforce<
		`Nd-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W88AUQVP = $mol_type_enforce<
		`Nd-Dy-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KKBJ1GKE = $mol_type_enforce<
		`Pm-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__64ANVVNV = $mol_type_enforce<
		`Na-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TE8VJTX2 = $mol_type_enforce<
		`Pr-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XA76UYEI = $mol_type_enforce<
		`La-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__32O97FS2 = $mol_type_enforce<
		`Al-Ga-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L0JG52DG = $mol_type_enforce<
		`La-Pm-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SUZTL7LA = $mol_type_enforce<
		`Sm-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8ZBQAMYQ = $mol_type_enforce<
		`Gd-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JPKTPK9O = $mol_type_enforce<
		`Nd-Sm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UZSC9JIQ = $mol_type_enforce<
		`Tb-Pm-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6A2GJQAZ = $mol_type_enforce<
		`Al-Hg-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C7U9997E = $mol_type_enforce<
		`V-Hg-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ARGYTJJS = $mol_type_enforce<
		`Pm-Pr-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y3GADSY9 = $mol_type_enforce<
		`Ce-Th-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MJKKIR4G = $mol_type_enforce<
		`K-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TC1PR8XL = $mol_type_enforce<
		`Pr-Dy-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AAUVJDGR = $mol_type_enforce<
		`Li-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X4CHRYUG = $mol_type_enforce<
		`La-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FBPQM9OE = $mol_type_enforce<
		`Dy-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RDE311GE = $mol_type_enforce<
		`Lu-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1ETNMA5H = $mol_type_enforce<
		`Nd-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LUGTV87Y = $mol_type_enforce<
		`Pr-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0S39RZOG = $mol_type_enforce<
		`La-Pm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5KPDX62L = $mol_type_enforce<
		`Tl-Cd-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H9A2T809 = $mol_type_enforce<
		`Yb-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TKAZPJ02 = $mol_type_enforce<
		`Os-Pd-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z491J6VK = $mol_type_enforce<
		`Sm-Dy-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZKGV2COZ = $mol_type_enforce<
		`Pu-Np-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ML1U6TFG = $mol_type_enforce<
		`Nb-V-Hg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O22Z65JS = $mol_type_enforce<
		`Pr-Dy-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H2OMSHDC = $mol_type_enforce<
		`Nd-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2WS9ITEZ = $mol_type_enforce<
		`Ho-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N588IEUE = $mol_type_enforce<
		`Zr-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WF2LERHV = $mol_type_enforce<
		`Pm-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0JH6BKTA = $mol_type_enforce<
		`V-Ag-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RLM6MF9O = $mol_type_enforce<
		`Pr-Dy-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TXI4FKET = $mol_type_enforce<
		`Zn-Cd-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I5E0SHZW = $mol_type_enforce<
		`Li-Sm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YEACYSK6 = $mol_type_enforce<
		`La-Tb-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__778W04ZA = $mol_type_enforce<
		`Cr-Ni-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1IP0PJQP = $mol_type_enforce<
		`La-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V19G42WO = $mol_type_enforce<
		`La-Ce-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CZ0NRFHV = $mol_type_enforce<
		`Yb-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZUWQ994L = $mol_type_enforce<
		`Yb-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZGLPX5X9 = $mol_type_enforce<
		`Na-Ca-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9IW1NVSI = $mol_type_enforce<
		`Co-Hg-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P4HEIP6W = $mol_type_enforce<
		`Pm-Pr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__71RGHG4T = $mol_type_enforce<
		`Be-Si-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7Y7TIK7A = $mol_type_enforce<
		`Sr-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q2KUHKNN = $mol_type_enforce<
		`Yb-Gd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P19AFNTF = $mol_type_enforce<
		`V-Pd-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HYQL8WJ5 = $mol_type_enforce<
		`Re-Ir-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__POAFK1U6 = $mol_type_enforce<
		`Ce-Gd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SDTHTM7X = $mol_type_enforce<
		`Li-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3HS04TQ2 = $mol_type_enforce<
		`Be-Zn-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PDJO1AI8 = $mol_type_enforce<
		`Y-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__73HIKQKN = $mol_type_enforce<
		`Ga-Hg-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VYARAXFF = $mol_type_enforce<
		`Ba-Pr-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VW0TC5GT = $mol_type_enforce<
		`La-Tm-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9QBQC27C = $mol_type_enforce<
		`Li-Tb-Ce`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N4O5QPBF = $mol_type_enforce<
		`Yb-Eu-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KGCE8135 = $mol_type_enforce<
		`Si-Ag-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8ZTJY34Z = $mol_type_enforce<
		`Ce-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3LW2T3VU = $mol_type_enforce<
		`Gd-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1BQN0PLT = $mol_type_enforce<
		`Th-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__80DF5JQA = $mol_type_enforce<
		`Ag-Ir-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TZ8EQ3OB = $mol_type_enforce<
		`Cu-Re-Tc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G8K9E96S = $mol_type_enforce<
		`Ce-Pm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CWYVUU1O = $mol_type_enforce<
		`Ba-Fe-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A6WADNJK = $mol_type_enforce<
		`Ir-Os-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2M8GJOTG = $mol_type_enforce<
		`Cr-Cu-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7JMEBOVO = $mol_type_enforce<
		`La-Ce-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__33F4PD8T = $mol_type_enforce<
		`Li-La-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F8MOT6XK = $mol_type_enforce<
		`Ca-Yb-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QSRVZQ1A = $mol_type_enforce<
		`Fe-Pd-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UTX3T46C = $mol_type_enforce<
		`Ce-Eu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E4I8ASFB = $mol_type_enforce<
		`Cs-Pr-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q809AAUD = $mol_type_enforce<
		`Nb-Cu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__199XCK0L = $mol_type_enforce<
		`Fe-Cu-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JT4CMYGX = $mol_type_enforce<
		`Tb-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L4XXWMB9 = $mol_type_enforce<
		`La-Th-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7U2QYCRV = $mol_type_enforce<
		`Sm-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J9Y5SOMS = $mol_type_enforce<
		`Yb-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YWBNNQF3 = $mol_type_enforce<
		`Al-Zn-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O3GDJY32 = $mol_type_enforce<
		`Yb-Ho-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K8QO6YT2 = $mol_type_enforce<
		`Cs-K-Li`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BPAUPZEG = $mol_type_enforce<
		`Pr-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__75LAIJ6J = $mol_type_enforce<
		`Fe-Co-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DM8WLXPT = $mol_type_enforce<
		`Tb-Pm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YRNP5XCG = $mol_type_enforce<
		`Lu-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U0D7ELTQ = $mol_type_enforce<
		`Y-Ho-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__827Z1NRB = $mol_type_enforce<
		`Li-Ce-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LRES0XPA = $mol_type_enforce<
		`Sm-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IULIYECP = $mol_type_enforce<
		`Ni-Pd-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HD9A1CRT = $mol_type_enforce<
		`Sc-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__78FHU8ZB = $mol_type_enforce<
		`Zn-In-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EVBSJ29R = $mol_type_enforce<
		`Y-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AYWK9C6V = $mol_type_enforce<
		`Ce-Eu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__06O3DNAF = $mol_type_enforce<
		`Yb-Gd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MAAYBBD1 = $mol_type_enforce<
		`Tb-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PPELQ2V4 = $mol_type_enforce<
		`Yb-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EX2DP35H = $mol_type_enforce<
		`Tb-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QHC5E944 = $mol_type_enforce<
		`Ta-Tl-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MP3ZHJ5S = $mol_type_enforce<
		`Hg-Mo-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0E644Y5U = $mol_type_enforce<
		`Sm-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KXBGE1AO = $mol_type_enforce<
		`Co-Re-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UGNVA98R = $mol_type_enforce<
		`Co-Ag-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SZRY0P23 = $mol_type_enforce<
		`La-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6RG8OTS8 = $mol_type_enforce<
		`Hf-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GX27L59X = $mol_type_enforce<
		`Fe-Ni-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4SCTMCTJ = $mol_type_enforce<
		`Nb-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3GH7T01T = $mol_type_enforce<
		`Gd-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R8DY210M = $mol_type_enforce<
		`Pd-Pt-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZOL85DXX = $mol_type_enforce<
		`Pm-Dy-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__78JA1L9Z = $mol_type_enforce<
		`Co-Ni-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FJHJCD5R = $mol_type_enforce<
		`Gd-Dy-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L2K8RNWL = $mol_type_enforce<
		`Tm-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LN1YUD2X = $mol_type_enforce<
		`Nd-Dy-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UIJ54D5W = $mol_type_enforce<
		`Dy-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KQVHAILO = $mol_type_enforce<
		`Tb-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P6O83Q9F = $mol_type_enforce<
		`Nd-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CYUIAUU0 = $mol_type_enforce<
		`Sm-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__85UU3S2S = $mol_type_enforce<
		`Li-La-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LCRPPZBS = $mol_type_enforce<
		`Th-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2FNOVNXP = $mol_type_enforce<
		`Tb-Ce-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VBA28TYM = $mol_type_enforce<
		`Gd-Ho-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__43G5P0KT = $mol_type_enforce<
		`Pr-Dy-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IPSDJTHO = $mol_type_enforce<
		`Hf-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PWWEGZKD = $mol_type_enforce<
		`Ca-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SP8COY80 = $mol_type_enforce<
		`Ti-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XA51H3C7 = $mol_type_enforce<
		`Co-Ir-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__00FENFT2 = $mol_type_enforce<
		`Ba-Sr-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZXATVBIM = $mol_type_enforce<
		`Ba-Yb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TCS35VB4 = $mol_type_enforce<
		`Yb-Th-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__60SCOSC5 = $mol_type_enforce<
		`Li-Nd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KEY56FQ1 = $mol_type_enforce<
		`Ce-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1I16IPOX = $mol_type_enforce<
		`Co-Re-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NIX1T7XI = $mol_type_enforce<
		`Yb-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OIHP5Z4I = $mol_type_enforce<
		`Re-Pd-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M6C5O32M = $mol_type_enforce<
		`Ni-Pd-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GHJC8U9Y = $mol_type_enforce<
		`Ho-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YDSZK1T0 = $mol_type_enforce<
		`Cr-Fe-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SB0CRTCA = $mol_type_enforce<
		`Tb-Sm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HT5YNUUP = $mol_type_enforce<
		`Ce-Gd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UYZSAWBD = $mol_type_enforce<
		`Li-Ce-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2IOPP66L = $mol_type_enforce<
		`Nd-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7DI1VWBT = $mol_type_enforce<
		`Li-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GT4X7JQ0 = $mol_type_enforce<
		`Nd-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__31R53IVF = $mol_type_enforce<
		`La-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5ZZZSFJS = $mol_type_enforce<
		`La-Ce-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__22LMONRP = $mol_type_enforce<
		`La-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NDOK0G59 = $mol_type_enforce<
		`Ag-Os-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MECT478Y = $mol_type_enforce<
		`Pt-W-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5GF4RF2O = $mol_type_enforce<
		`Cu-Bi-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PY7SN84B = $mol_type_enforce<
		`Pr-Nd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U1FO82C3 = $mol_type_enforce<
		`Fe-Co-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A4E32OO6 = $mol_type_enforce<
		`Li-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NY0SAA6F = $mol_type_enforce<
		`Y-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6MU49L3N = $mol_type_enforce<
		`Be-Si-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C6HTXCXM = $mol_type_enforce<
		`Li-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OBTF68DE = $mol_type_enforce<
		`Th-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DM01KIS2 = $mol_type_enforce<
		`Ho-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8M7M8E0D = $mol_type_enforce<
		`Pm-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TPTTID18 = $mol_type_enforce<
		`Th-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KRY2E4OR = $mol_type_enforce<
		`Gd-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__530R074H = $mol_type_enforce<
		`Yb-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6U63C6BP = $mol_type_enforce<
		`Tm-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6UDG5QQF = $mol_type_enforce<
		`Cs-Mg-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BLHXJ72N = $mol_type_enforce<
		`La-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LUMIFE8V = $mol_type_enforce<
		`Li-Nd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MC746QJ9 = $mol_type_enforce<
		`Co-Ag-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YXLO2JN2 = $mol_type_enforce<
		`Ba-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6JYXKWX1 = $mol_type_enforce<
		`Pr-Gd-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O7M4K5JX = $mol_type_enforce<
		`Ce-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1O7RIY18 = $mol_type_enforce<
		`Tb-Dy-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6LMF8WJD = $mol_type_enforce<
		`Sr-Ca-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QFW2IWZR = $mol_type_enforce<
		`Nd-Sc-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2Z45H9O6 = $mol_type_enforce<
		`Li-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FC7WCJ4G = $mol_type_enforce<
		`Y-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZLFKT6JZ = $mol_type_enforce<
		`Cr-Cu-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D5ZG743H = $mol_type_enforce<
		`Fe-Os-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8124G1PP = $mol_type_enforce<
		`Pm-Sm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KIJ6IXS9 = $mol_type_enforce<
		`Cu-Pb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B5KVZCY3 = $mol_type_enforce<
		`Nd-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JOIOXGDJ = $mol_type_enforce<
		`Pm-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UADRUWTU = $mol_type_enforce<
		`Ce-Nd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WCC436RM = $mol_type_enforce<
		`Fe-Ni-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XEG5TT5T = $mol_type_enforce<
		`U-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8PL50REY = $mol_type_enforce<
		`Nd-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LB4CDM8G = $mol_type_enforce<
		`Dy-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2JTGCUZQ = $mol_type_enforce<
		`Ce-Pu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0BSLJO5M = $mol_type_enforce<
		`La-Ce-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CN9OC4HW = $mol_type_enforce<
		`Tm-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__26DC80KP = $mol_type_enforce<
		`La-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6YIPO8CB = $mol_type_enforce<
		`Ba-La-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__78U9ADX2 = $mol_type_enforce<
		`Tm-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L3EBJSFR = $mol_type_enforce<
		`Eu-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CING4KR4 = $mol_type_enforce<
		`Yb-Y-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EME4KOWQ = $mol_type_enforce<
		`La-Yb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZUP3ZZ1X = $mol_type_enforce<
		`Hf-Th-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0H7W3989 = $mol_type_enforce<
		`Nd-Sm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ANXGXYN4 = $mol_type_enforce<
		`Na-Hf-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E94VP84F = $mol_type_enforce<
		`Fe-Ag-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UDMTZLJZ = $mol_type_enforce<
		`Li-Pu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VKQDV91B = $mol_type_enforce<
		`Pr-Sm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KL5VWVM8 = $mol_type_enforce<
		`Tb-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0091NNJF = $mol_type_enforce<
		`Sm-Gd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6VTJRURW = $mol_type_enforce<
		`Co-Cu-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__23J2NHR4 = $mol_type_enforce<
		`Re-Ag-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WZKKH0RW = $mol_type_enforce<
		`Ru-Rh-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RESJ93TO = $mol_type_enforce<
		`Mn-Tl-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9ZWGKCYC = $mol_type_enforce<
		`Pr-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L84PKECB = $mol_type_enforce<
		`La-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AM7P0HG4 = $mol_type_enforce<
		`Dy-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NRTNH0PZ = $mol_type_enforce<
		`Ta-In-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6STYFX74 = $mol_type_enforce<
		`Be-In-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4RTMAVZD = $mol_type_enforce<
		`Y-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M666A7EY = $mol_type_enforce<
		`Cd-Bi-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__85J6X8GD = $mol_type_enforce<
		`Yb-Dy-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G97PE4RL = $mol_type_enforce<
		`Na-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K16G4D1E = $mol_type_enforce<
		`Ba-Nd-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H06C5058 = $mol_type_enforce<
		`Ca-Mn-Co`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GEX8VD99 = $mol_type_enforce<
		`Li-Nd-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I1NNJ4VS = $mol_type_enforce<
		`Co-Os-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PSUDDBFK = $mol_type_enforce<
		`Co-Ru-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VSUETGUF = $mol_type_enforce<
		`Yb-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3XP26KR8 = $mol_type_enforce<
		`K-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JIXOSH7L = $mol_type_enforce<
		`Tb-Yb-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9TVON54L = $mol_type_enforce<
		`Tb-Yb-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6S0Y3KVQ = $mol_type_enforce<
		`Sc-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HH9Z8MTP = $mol_type_enforce<
		`Fe-Co-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FEMO57CF = $mol_type_enforce<
		`Fe-Cu-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YEGNH3PS = $mol_type_enforce<
		`Hf-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0VP69DBY = $mol_type_enforce<
		`Tb-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9J5CBTAZ = $mol_type_enforce<
		`Hg-Ge-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XAD9TKZW = $mol_type_enforce<
		`K-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OTT3XHQ9 = $mol_type_enforce<
		`Li-La-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0GJCUJA6 = $mol_type_enforce<
		`Er-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RXV56YMK = $mol_type_enforce<
		`K-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IIGY1Y4T = $mol_type_enforce<
		`Ce-Y-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7R8MNTRY = $mol_type_enforce<
		`Gd-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YWG68WSI = $mol_type_enforce<
		`Li-Tb-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IY1DT8YP = $mol_type_enforce<
		`Fe-Cu-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U53EUG5G = $mol_type_enforce<
		`Cu-Os-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__911ZR7JW = $mol_type_enforce<
		`Tb-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OEYUUY77 = $mol_type_enforce<
		`Pr-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7B4YLY69 = $mol_type_enforce<
		`Li-Y-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WWSHC0N7 = $mol_type_enforce<
		`Dy-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0DSCBOO8 = $mol_type_enforce<
		`Na-Cu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MLVPXGYE = $mol_type_enforce<
		`Yb-Eu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BQHAC85U = $mol_type_enforce<
		`Li-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SBKML1TB = $mol_type_enforce<
		`Cs-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8F9HEY82 = $mol_type_enforce<
		`Co-Cu-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7DAKJJ8F = $mol_type_enforce<
		`Rb-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MDCKPQJ9 = $mol_type_enforce<
		`Al-Ga-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P5N683PZ = $mol_type_enforce<
		`V-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K8IYU28N = $mol_type_enforce<
		`Pm-Gd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GKTQGCXM = $mol_type_enforce<
		`Li-La-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DV0SR5CX = $mol_type_enforce<
		`Ce-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__85M5MEMH = $mol_type_enforce<
		`Ce-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8IMMADYE = $mol_type_enforce<
		`Ag-Rh-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NI3VWN8V = $mol_type_enforce<
		`Ce-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8YAGFGE0 = $mol_type_enforce<
		`Bi-B-Sb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O40KUEB6 = $mol_type_enforce<
		`Ho-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__STK3WBFF = $mol_type_enforce<
		`La-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HG4P6EF7 = $mol_type_enforce<
		`Tb-Dy-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A84PI1M1 = $mol_type_enforce<
		`Pm-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KMKT6DLW = $mol_type_enforce<
		`Tb-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q3K1GCYW = $mol_type_enforce<
		`Zn-Cd-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9KSOAA8S = $mol_type_enforce<
		`Ce-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OG5ALJY6 = $mol_type_enforce<
		`Sm-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__91EUEAE3 = $mol_type_enforce<
		`Th-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QTDVE9EE = $mol_type_enforce<
		`Tb-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__INMI890W = $mol_type_enforce<
		`Pr-Sm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FM197IO6 = $mol_type_enforce<
		`La-Pr-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DXMVRFCG = $mol_type_enforce<
		`Ho-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__POTQ6U72 = $mol_type_enforce<
		`Ag-Bi-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z5JSXAX9 = $mol_type_enforce<
		`Li-Tb-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5WCUHKQN = $mol_type_enforce<
		`Sr-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ULG8MOAT = $mol_type_enforce<
		`Co-Re-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R6XWZHT8 = $mol_type_enforce<
		`Y-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6Y940QES = $mol_type_enforce<
		`Ce-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E91P0RC4 = $mol_type_enforce<
		`Pm-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HKQ1WH11 = $mol_type_enforce<
		`Sm-Dy-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QU0YLKYK = $mol_type_enforce<
		`Pd-Ru-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NXJ1EHLO = $mol_type_enforce<
		`Hg-Bi-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1M7Z4MS7 = $mol_type_enforce<
		`Sc-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4PJYXYXR = $mol_type_enforce<
		`Yb-Pr-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3PT0FBU6 = $mol_type_enforce<
		`Al-Tl-In`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ISH1RPB1 = $mol_type_enforce<
		`Ho-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__05MMR29D = $mol_type_enforce<
		`Rb-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I7T3M8FM = $mol_type_enforce<
		`Tm-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VNJG6A8M = $mol_type_enforce<
		`Pr-Sm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HZQA8A3M = $mol_type_enforce<
		`Gd-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M6Y3UH8Z = $mol_type_enforce<
		`Mn-V-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NC0TC9ZJ = $mol_type_enforce<
		`Cr-Cd-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EJ677KH2 = $mol_type_enforce<
		`Tb-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QYV48KJT = $mol_type_enforce<
		`V-Ag-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B1PLNV7R = $mol_type_enforce<
		`La-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J253G16P = $mol_type_enforce<
		`La-Dy-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IZZMO1ZZ = $mol_type_enforce<
		`Li-Gd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RZ7202JE = $mol_type_enforce<
		`Y-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OHJ7R0C1 = $mol_type_enforce<
		`Li-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DTT82NPI = $mol_type_enforce<
		`Np-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z22D1E6T = $mol_type_enforce<
		`Ag-Mo-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6FBWOOD4 = $mol_type_enforce<
		`Co-Hg-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8DI5AY76 = $mol_type_enforce<
		`Mn-Tl-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B1XYYDDN = $mol_type_enforce<
		`Eu-Y-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__APTQTFW9 = $mol_type_enforce<
		`Cu-Ir-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LIRM7Y2U = $mol_type_enforce<
		`Tb-Gd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K37IEMPP = $mol_type_enforce<
		`Pr-Hf-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YIHAY2JT = $mol_type_enforce<
		`Tb-Ce-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z48I2KOG = $mol_type_enforce<
		`Ag-Ir-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QQ25ER1V = $mol_type_enforce<
		`Tl-Zn-In`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0PDW5QMO = $mol_type_enforce<
		`Li-Sm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__17TISK8L = $mol_type_enforce<
		`Nd-Sm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XC8Q04W3 = $mol_type_enforce<
		`Re-Ni-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__234WM23J = $mol_type_enforce<
		`Yb-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QI4UYLGW = $mol_type_enforce<
		`La-Dy-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BK5KVPUK = $mol_type_enforce<
		`Mn-Ru-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B6FXSD4T = $mol_type_enforce<
		`Dy-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5CET3KVR = $mol_type_enforce<
		`Pr-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__772IYL7T = $mol_type_enforce<
		`Sm-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MKIWMS39 = $mol_type_enforce<
		`Eu-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DA9JGC65 = $mol_type_enforce<
		`Y-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BM646OMO = $mol_type_enforce<
		`Ce-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M3E5RGY2 = $mol_type_enforce<
		`Sn-Ge-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KMBWK3YA = $mol_type_enforce<
		`Nd-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KL0NAGAO = $mol_type_enforce<
		`Hf-Sc-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__837H40CT = $mol_type_enforce<
		`Tl-Ga-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WS0WQ89Z = $mol_type_enforce<
		`Tm-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OU9KUKP3 = $mol_type_enforce<
		`Fe-Ru-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NAAEY4YV = $mol_type_enforce<
		`Ho-Er-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__88II25TQ = $mol_type_enforce<
		`Yb-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UGA0X0SF = $mol_type_enforce<
		`Nd-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J293ZTH1 = $mol_type_enforce<
		`Cs-Rb-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YC23WYO7 = $mol_type_enforce<
		`Lu-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TQLH1OV9 = $mol_type_enforce<
		`Zn-Ga-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9ASIUROV = $mol_type_enforce<
		`Pr-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5JVLWQXG = $mol_type_enforce<
		`La-Eu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QSK1AHQU = $mol_type_enforce<
		`Yb-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6VQUVAW0 = $mol_type_enforce<
		`Yb-Gd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U1WVQGWY = $mol_type_enforce<
		`Tl-Ge-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OJ4Z60EK = $mol_type_enforce<
		`Tb-Ce-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XFPTFAG2 = $mol_type_enforce<
		`Gd-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M3AJOBGX = $mol_type_enforce<
		`La-Dy-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q3FST0GH = $mol_type_enforce<
		`Co-Re-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XINTYXVQ = $mol_type_enforce<
		`Yb-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DTQBE0P5 = $mol_type_enforce<
		`Al-Zn-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CTI3CXXL = $mol_type_enforce<
		`Tl-Ni-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7JTTY6RR = $mol_type_enforce<
		`K-Rb-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P188XA72 = $mol_type_enforce<
		`Y-Th-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9B8ULC43 = $mol_type_enforce<
		`Pm-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y7CHP3LN = $mol_type_enforce<
		`Ce-Sm-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W75G14S0 = $mol_type_enforce<
		`La-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q0I28XGW = $mol_type_enforce<
		`Ce-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H6C1O0JG = $mol_type_enforce<
		`Na-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ERQFL2JS = $mol_type_enforce<
		`Tb-Ce-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HKNRNXKK = $mol_type_enforce<
		`Sm-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7WS23T5R = $mol_type_enforce<
		`Cs-Li-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DUQ288JO = $mol_type_enforce<
		`Pr-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7T0S9GQE = $mol_type_enforce<
		`Dy-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DA8A1UH7 = $mol_type_enforce<
		`Ca-Fe-Co`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VUEDU0LO = $mol_type_enforce<
		`Lu-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IUSI963K = $mol_type_enforce<
		`Al-Ga-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KA06251J = $mol_type_enforce<
		`Pr-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3XPTD23J = $mol_type_enforce<
		`Na-Li-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IUXRU0T1 = $mol_type_enforce<
		`Ir-Ru-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__42NJ9ODH = $mol_type_enforce<
		`Fe-Ru-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PW8R431U = $mol_type_enforce<
		`Ho-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JIUVTMZ3 = $mol_type_enforce<
		`Lu-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P7RBSR08 = $mol_type_enforce<
		`Pu-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3PU5GN2A = $mol_type_enforce<
		`Lu-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YK7TKW1W = $mol_type_enforce<
		`Ca-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MUN958VX = $mol_type_enforce<
		`La-Dy-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LU92UI2Y = $mol_type_enforce<
		`Ce-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F1IKTC1T = $mol_type_enforce<
		`Li-La-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YHC1P45E = $mol_type_enforce<
		`Mn-V-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DWUYIONQ = $mol_type_enforce<
		`Ni-Ag-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DPTX1EYJ = $mol_type_enforce<
		`Li-Tb-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__18JCWSWE = $mol_type_enforce<
		`Cs-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9IEPJI9Z = $mol_type_enforce<
		`Li-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FJ1LLLO6 = $mol_type_enforce<
		`Cs-Pr-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7LWS05TN = $mol_type_enforce<
		`Hf-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XKVMSMFJ = $mol_type_enforce<
		`Sm-Th-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T6BHAS37 = $mol_type_enforce<
		`Pr-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5T5J4S2N = $mol_type_enforce<
		`Yb-Dy-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9W4A9VY9 = $mol_type_enforce<
		`Tb-Gd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E58ERQBZ = $mol_type_enforce<
		`La-Yb-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D63II1WV = $mol_type_enforce<
		`Mn-Tl-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__82EYPJ2U = $mol_type_enforce<
		`Yb-Pr-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NPVKP20G = $mol_type_enforce<
		`La-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XBL1RJ0R = $mol_type_enforce<
		`Ce-Pr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UJ3IPE1N = $mol_type_enforce<
		`La-Nd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GS0959ML = $mol_type_enforce<
		`Ce-Y-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W5K7HYHR = $mol_type_enforce<
		`Ca-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6N6RDI5E = $mol_type_enforce<
		`Tb-Pr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EIBR8FX3 = $mol_type_enforce<
		`Dy-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XYRYB8H9 = $mol_type_enforce<
		`Ni-Pt-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E51Q2UBV = $mol_type_enforce<
		`Ni-Rh-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BXZWAGJZ = $mol_type_enforce<
		`Hf-Mg-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VFJK72QL = $mol_type_enforce<
		`Ca-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GUJ8L3GV = $mol_type_enforce<
		`Al-Hg-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DJQ6A3YW = $mol_type_enforce<
		`Nd-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XMYEA5T4 = $mol_type_enforce<
		`Li-Sm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3C11KHN9 = $mol_type_enforce<
		`Pm-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WPVIJODG = $mol_type_enforce<
		`Ca-Yb-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4GIXF54H = $mol_type_enforce<
		`Co-Cu-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__83Y6IFYR = $mol_type_enforce<
		`Li-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JHW7VOLF = $mol_type_enforce<
		`Er-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S88D7Q6C = $mol_type_enforce<
		`Sr-Mn-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V6YVEEG4 = $mol_type_enforce<
		`Pr-Gd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SKLCAOVS = $mol_type_enforce<
		`Na-Li-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T196NC5K = $mol_type_enforce<
		`Na-V-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LPQK7NRE = $mol_type_enforce<
		`Na-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JGP6076X = $mol_type_enforce<
		`Pd-W-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4R71VPJW = $mol_type_enforce<
		`Li-Gd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GZSZ22ON = $mol_type_enforce<
		`Li-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CKAD4EKY = $mol_type_enforce<
		`Rb-Li-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1DY61KF2 = $mol_type_enforce<
		`Co-Hg-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N3L6QX6B = $mol_type_enforce<
		`Dy-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GLP11FDH = $mol_type_enforce<
		`La-Nd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NSD09IAU = $mol_type_enforce<
		`Al-Sn-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NCQOFGYV = $mol_type_enforce<
		`Na-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8Q0A1646 = $mol_type_enforce<
		`Er-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XCFF6WG3 = $mol_type_enforce<
		`Sr-Ca-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6H5WF4CS = $mol_type_enforce<
		`Rb-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0DPRST1Y = $mol_type_enforce<
		`Y-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0NYBUEYY = $mol_type_enforce<
		`Tb-Nd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z8LCXPBV = $mol_type_enforce<
		`Rb-Na-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OEABA4O0 = $mol_type_enforce<
		`Cd-Ga-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2RXQ4TIY = $mol_type_enforce<
		`Ca-Tb-Yb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U23DT7P5 = $mol_type_enforce<
		`Sn-Ge-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HVH3BVNR = $mol_type_enforce<
		`Yb-Gd-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JZOQTDJF = $mol_type_enforce<
		`Y-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3K7VEHJM = $mol_type_enforce<
		`Yb-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CXUVX05U = $mol_type_enforce<
		`Ce-Gd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UQ7AAITU = $mol_type_enforce<
		`Ba-Sm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JL5KYEX1 = $mol_type_enforce<
		`Cr-Cd-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LGIND9ZO = $mol_type_enforce<
		`La-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZD9R5OIH = $mol_type_enforce<
		`Ba-Mn-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ETXTA5UL = $mol_type_enforce<
		`Gd-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KENTA11S = $mol_type_enforce<
		`Tb-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GAHV09EC = $mol_type_enforce<
		`Ba-Mn-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WWRC040B = $mol_type_enforce<
		`Cu-Ni-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__49O9XP2M = $mol_type_enforce<
		`Lu-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1BJBOM44 = $mol_type_enforce<
		`Pr-Gd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IAY1PS6X = $mol_type_enforce<
		`Er-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T3VAR6E7 = $mol_type_enforce<
		`La-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LTOOTT0Z = $mol_type_enforce<
		`Mn-Co-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H17NZHPI = $mol_type_enforce<
		`Yb-Eu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0ZRF1W9X = $mol_type_enforce<
		`Li-Pm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0ME5MMFH = $mol_type_enforce<
		`La-Sm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TNAIUSHJ = $mol_type_enforce<
		`La-Eu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D5CR82N7 = $mol_type_enforce<
		`Sn-Ge-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XUPEX0GW = $mol_type_enforce<
		`La-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0A6XU3EK = $mol_type_enforce<
		`Yb-Pr-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1NWHYFI4 = $mol_type_enforce<
		`Ce-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GTJI8ICK = $mol_type_enforce<
		`Rb-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GVY297A3 = $mol_type_enforce<
		`Tl-Ag-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PYNOYJDA = $mol_type_enforce<
		`Gd-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AVZMW64A = $mol_type_enforce<
		`Y-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X18ID4WP = $mol_type_enforce<
		`Tb-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__23M8GQDZ = $mol_type_enforce<
		`Fe-Ir-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G3N9030Z = $mol_type_enforce<
		`Hg-Os-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9DHB5JHD = $mol_type_enforce<
		`Ba-Yb-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VR5J5602 = $mol_type_enforce<
		`Nd-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AGUOFR6Z = $mol_type_enforce<
		`Ce-Sm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QPO6IQ8K = $mol_type_enforce<
		`Ba-Pr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3RXM30CC = $mol_type_enforce<
		`La-Pr-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GLEXF65P = $mol_type_enforce<
		`Rb-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EC0LOLTL = $mol_type_enforce<
		`Ba-Ca-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__58MXZ947 = $mol_type_enforce<
		`La-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EDJR1SEZ = $mol_type_enforce<
		`Lu-Th-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T6NZ240P = $mol_type_enforce<
		`Al-Ge-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4VHSU0RC = $mol_type_enforce<
		`Li-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TUQKTJ4Y = $mol_type_enforce<
		`K-Mg-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__98FGNXOD = $mol_type_enforce<
		`Hg-Ir-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T5LKWENQ = $mol_type_enforce<
		`Nd-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J9CQHZIS = $mol_type_enforce<
		`Cs-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C5HXBEW1 = $mol_type_enforce<
		`Cu-Pd-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LI3DKIN6 = $mol_type_enforce<
		`Yb-Dy-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PK0DP9L7 = $mol_type_enforce<
		`Dy-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YI53N4SM = $mol_type_enforce<
		`Hg-Ge-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2YLEVO78 = $mol_type_enforce<
		`Cu-Ni-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KNCZHBA1 = $mol_type_enforce<
		`Y-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QKI6EA1O = $mol_type_enforce<
		`Sm-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5EMCAEHZ = $mol_type_enforce<
		`Dy-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8JT09AST = $mol_type_enforce<
		`Tb-Nd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6NA6LWXE = $mol_type_enforce<
		`Ta-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WAI420RH = $mol_type_enforce<
		`Tm-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WWF0Q1W5 = $mol_type_enforce<
		`Li-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OXZFCU73 = $mol_type_enforce<
		`Nd-Gd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4WS0AP31 = $mol_type_enforce<
		`Na-Cr-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SVMBIKXB = $mol_type_enforce<
		`Li-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q3SX7D40 = $mol_type_enforce<
		`Tb-Pm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y0OENF2X = $mol_type_enforce<
		`Lu-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__06YF83T2 = $mol_type_enforce<
		`Th-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F8URLK8C = $mol_type_enforce<
		`Cd-Ge-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J9JKR2TI = $mol_type_enforce<
		`Th-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__64MYVHGC = $mol_type_enforce<
		`Yb-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U36XMJDO = $mol_type_enforce<
		`Nd-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CR4VUZ52 = $mol_type_enforce<
		`Al-Cd-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UN9KJJDM = $mol_type_enforce<
		`Tb-Nd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IZ9GCK1C = $mol_type_enforce<
		`Ag-Os-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EA4S626A = $mol_type_enforce<
		`Yb-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2JK1MB92 = $mol_type_enforce<
		`Ce-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HFR6EZJ3 = $mol_type_enforce<
		`Co-Hg-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4MTB3JR7 = $mol_type_enforce<
		`Ba-Sr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CVAO0OV6 = $mol_type_enforce<
		`Nd-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TO29JT9B = $mol_type_enforce<
		`Tb-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KSXRKBP2 = $mol_type_enforce<
		`Tb-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4YUHWI0M = $mol_type_enforce<
		`Re-Ni-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B4GSKMN3 = $mol_type_enforce<
		`Y-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NRXFOTOY = $mol_type_enforce<
		`Yb-Gd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K4OVS7VZ = $mol_type_enforce<
		`Sc-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FUAZP62A = $mol_type_enforce<
		`Ce-Sm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PWZCMEIR = $mol_type_enforce<
		`Pr-Gd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9CA198AM = $mol_type_enforce<
		`Nd-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4RUO67S0 = $mol_type_enforce<
		`Dy-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DAK4KK6S = $mol_type_enforce<
		`Ca-La-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X7CM6XYY = $mol_type_enforce<
		`Ce-Lu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8Q0UQ6HN = $mol_type_enforce<
		`Cu-Ru-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OYZC57II = $mol_type_enforce<
		`Si-Sn-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7SX8S0L8 = $mol_type_enforce<
		`Cu-Re-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F3JSB2NR = $mol_type_enforce<
		`Ga-Ge-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JC6QEINF = $mol_type_enforce<
		`La-Eu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XHPW1L3G = $mol_type_enforce<
		`Tb-Ce-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LIHPP2NH = $mol_type_enforce<
		`Yb-Pr-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V8UXRR1L = $mol_type_enforce<
		`K-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__57CN4UBU = $mol_type_enforce<
		`K-V-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7AGALAGC = $mol_type_enforce<
		`Lu-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P09V344Y = $mol_type_enforce<
		`Pm-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8L199VLJ = $mol_type_enforce<
		`Pr-Sm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PZ80A5MU = $mol_type_enforce<
		`Al-Si-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IITOBJO7 = $mol_type_enforce<
		`Sm-Gd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JB4EF39I = $mol_type_enforce<
		`Ni-Ir-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ADZKRH74 = $mol_type_enforce<
		`Cu-Re-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SG3MPB11 = $mol_type_enforce<
		`Tl-Ge-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X0VOP9YX = $mol_type_enforce<
		`Ba-Pm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NYXT3A3N = $mol_type_enforce<
		`Yb-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DUS5PL4Z = $mol_type_enforce<
		`Fe-Bi-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8YFWWYZU = $mol_type_enforce<
		`Yb-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZY4BS1XJ = $mol_type_enforce<
		`Cs-Pr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CROPNOFP = $mol_type_enforce<
		`Ca-Tb-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6OPW6AEH = $mol_type_enforce<
		`Li-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UWEVS6QW = $mol_type_enforce<
		`Tb-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JFUJHIS1 = $mol_type_enforce<
		`Ca-La-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XENSPL3I = $mol_type_enforce<
		`Gd-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I7TS0R89 = $mol_type_enforce<
		`Gd-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1X8TAKBW = $mol_type_enforce<
		`Nd-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3HBV43W3 = $mol_type_enforce<
		`Tb-Yb-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OC5W99V0 = $mol_type_enforce<
		`La-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JQNSMZDT = $mol_type_enforce<
		`Pm-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O9YLLRJ6 = $mol_type_enforce<
		`Ba-Ca-Eu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RST5OW9Z = $mol_type_enforce<
		`La-Ce-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z4P3R97Y = $mol_type_enforce<
		`U-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BO88QWY2 = $mol_type_enforce<
		`Ca-Ce-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LPT3TVE2 = $mol_type_enforce<
		`Ho-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XYDU8KAE = $mol_type_enforce<
		`Y-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BR87365K = $mol_type_enforce<
		`Gd-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DO79M9HU = $mol_type_enforce<
		`Yb-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XVEQEAMF = $mol_type_enforce<
		`La-Eu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZUCGTM2C = $mol_type_enforce<
		`Rb-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FE59AE0S = $mol_type_enforce<
		`Li-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2IDY0UK4 = $mol_type_enforce<
		`Pm-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QDRLNMYM = $mol_type_enforce<
		`Li-Hf-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T3TK3WMM = $mol_type_enforce<
		`Sr-V-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HZYTCYTU = $mol_type_enforce<
		`Pm-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JAJ526J1 = $mol_type_enforce<
		`Er-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MI26R8LQ = $mol_type_enforce<
		`Ca-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GKVQY9H7 = $mol_type_enforce<
		`Li-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DIILAOZZ = $mol_type_enforce<
		`Ba-Ca-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DQS7BVFZ = $mol_type_enforce<
		`Tb-Pm-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1PF06O3P = $mol_type_enforce<
		`Sm-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HRZ4OPN7 = $mol_type_enforce<
		`Ce-Eu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9DVJ4CT8 = $mol_type_enforce<
		`Nd-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YNFPRSAD = $mol_type_enforce<
		`Fe-Co-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IWG9OBGX = $mol_type_enforce<
		`Gd-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WWZFN8NC = $mol_type_enforce<
		`Cs-Mg-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6MF55PWK = $mol_type_enforce<
		`Ho-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OM88IB5P = $mol_type_enforce<
		`Y-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__94NZKKWQ = $mol_type_enforce<
		`Li-La-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__628E5GBJ = $mol_type_enforce<
		`Li-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U2QS852Q = $mol_type_enforce<
		`Ce-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4MJDLV0A = $mol_type_enforce<
		`Li-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__474EA4QL = $mol_type_enforce<
		`Yb-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RA12UWQN = $mol_type_enforce<
		`K-Rb-Li`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OH4GGAY2 = $mol_type_enforce<
		`Er-Hf-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0MDAKY43 = $mol_type_enforce<
		`Cu-Tc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SVW1PTYV = $mol_type_enforce<
		`Ni-Rh-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2DH4PNNX = $mol_type_enforce<
		`Ni-Ag-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QLB806Q1 = $mol_type_enforce<
		`Cr-Fe-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N4THRGT2 = $mol_type_enforce<
		`Y-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GV3630ZR = $mol_type_enforce<
		`Tb-Nd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PMQRVO6I = $mol_type_enforce<
		`Dy-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z94D5N6G = $mol_type_enforce<
		`Rb-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EQY1XDAZ = $mol_type_enforce<
		`Li-Tb-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N92QTK69 = $mol_type_enforce<
		`Sm-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8QH19J4L = $mol_type_enforce<
		`Ir-Pd-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y91HNIZ6 = $mol_type_enforce<
		`Pm-Nd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BH6I6602 = $mol_type_enforce<
		`Ba-Pm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O2O6D7LN = $mol_type_enforce<
		`Y-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QMEW7328 = $mol_type_enforce<
		`Nd-Gd-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MZU3TAT4 = $mol_type_enforce<
		`Th-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0MML3GC2 = $mol_type_enforce<
		`K-Mg-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__STBHD1GR = $mol_type_enforce<
		`Ni-Pt-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NK3BKF9G = $mol_type_enforce<
		`Cu-Pd-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H499TDFX = $mol_type_enforce<
		`Gd-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__23TQLLWV = $mol_type_enforce<
		`Co-Ag-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P4A6YYCU = $mol_type_enforce<
		`Li-Ce-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X8EBGYP2 = $mol_type_enforce<
		`Tm-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1372KBGY = $mol_type_enforce<
		`Pm-Dy-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RTEE7KZY = $mol_type_enforce<
		`Er-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HKGXNCXX = $mol_type_enforce<
		`Sm-Th-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0SQNK34C = $mol_type_enforce<
		`Yb-Mn-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XI5ISBH1 = $mol_type_enforce<
		`K-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KOVHP5VO = $mol_type_enforce<
		`Dy-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WO4OARGK = $mol_type_enforce<
		`La-Tb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BX9UX34J = $mol_type_enforce<
		`Yb-Nd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__675QWTLY = $mol_type_enforce<
		`Y-Ho-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T9BPT2OS = $mol_type_enforce<
		`Yb-Pu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G5KRMAAR = $mol_type_enforce<
		`Ce-Pr-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__95X6U182 = $mol_type_enforce<
		`Co-Re-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RJ8UX4EI = $mol_type_enforce<
		`Ce-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3AW6I9P1 = $mol_type_enforce<
		`Ag-Mo-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EL9TY321 = $mol_type_enforce<
		`Ca-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NJ9Q8WY1 = $mol_type_enforce<
		`Tl-Cu-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NZQGFFIO = $mol_type_enforce<
		`Tb-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5BB22J7U = $mol_type_enforce<
		`Be-Sn-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__15JA7WN2 = $mol_type_enforce<
		`Y-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L99D5CEB = $mol_type_enforce<
		`Nd-Dy-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KRWYGJ2G = $mol_type_enforce<
		`Nd-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3PH44MZB = $mol_type_enforce<
		`Be-Zn-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WC4NQ46Y = $mol_type_enforce<
		`La-Pr-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TREMC7KC = $mol_type_enforce<
		`In-Ga-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZVSREZW9 = $mol_type_enforce<
		`Li-Fe-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KMLM88HK = $mol_type_enforce<
		`Ni-Ru-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZPT8TKF0 = $mol_type_enforce<
		`Gd-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EIZTHDW2 = $mol_type_enforce<
		`Gd-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZI07KSPM = $mol_type_enforce<
		`Er-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5J3FRQWQ = $mol_type_enforce<
		`Cu-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FEXT42IS = $mol_type_enforce<
		`Pm-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XAV3QRCQ = $mol_type_enforce<
		`Hf-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BLUVK5M2 = $mol_type_enforce<
		`Sc-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GV8ZE3AI = $mol_type_enforce<
		`Cr-Cd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5RZVUEI7 = $mol_type_enforce<
		`U-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FX6ZW3VB = $mol_type_enforce<
		`Tb-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__00ODGI5X = $mol_type_enforce<
		`Co-Cu-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WC566EXS = $mol_type_enforce<
		`Zn-Sn-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8R3SKJ31 = $mol_type_enforce<
		`Pm-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BB1JHTQP = $mol_type_enforce<
		`Ba-Eu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__878N85M3 = $mol_type_enforce<
		`Er-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1IE2S3BD = $mol_type_enforce<
		`Ni-Ir-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__372TUD9Z = $mol_type_enforce<
		`Li-Mn-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KGXW4A16 = $mol_type_enforce<
		`Mg-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K93JK8BY = $mol_type_enforce<
		`Gd-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LP9LBK35 = $mol_type_enforce<
		`Co-Ni-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L5226IE6 = $mol_type_enforce<
		`Yb-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SCPSRJ9R = $mol_type_enforce<
		`Yb-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UXRHQ0Y2 = $mol_type_enforce<
		`Cu-Ir-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CAZAKGZ3 = $mol_type_enforce<
		`Nd-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B19HG1Y3 = $mol_type_enforce<
		`U-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__16I3XWE8 = $mol_type_enforce<
		`Sm-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__854S6I26 = $mol_type_enforce<
		`Mn-Ag-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__281FOE51 = $mol_type_enforce<
		`Pm-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9D0GCNLJ = $mol_type_enforce<
		`Er-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0WPM9VF9 = $mol_type_enforce<
		`Nd-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TJKL65TP = $mol_type_enforce<
		`Sc-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WBY1ESKT = $mol_type_enforce<
		`Dy-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EB9787FC = $mol_type_enforce<
		`Eu-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9C8PUH27 = $mol_type_enforce<
		`Y-Th-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UC2IHW6X = $mol_type_enforce<
		`Eu-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TZCA5K13 = $mol_type_enforce<
		`Nd-Gd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G8RW2IW9 = $mol_type_enforce<
		`Cs-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K9SH75V4 = $mol_type_enforce<
		`La-Nd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AD9QYBLA = $mol_type_enforce<
		`Nd-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M1H7AWWI = $mol_type_enforce<
		`Zn-Si-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QM1I2TDG = $mol_type_enforce<
		`Mg-Cd-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2B5Y04Z5 = $mol_type_enforce<
		`Re-Ag-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3YHA07AF = $mol_type_enforce<
		`Sr-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I34F9W7G = $mol_type_enforce<
		`Fe-Ag-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GKC1NTGJ = $mol_type_enforce<
		`V-Cu-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NRUZPHYU = $mol_type_enforce<
		`Sm-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XC5C4O3G = $mol_type_enforce<
		`Ce-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MMTNTVV0 = $mol_type_enforce<
		`Na-Fe-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__99KM79VJ = $mol_type_enforce<
		`Li-Sm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__20CFXPX4 = $mol_type_enforce<
		`Yb-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5FOT4JUY = $mol_type_enforce<
		`La-Yb-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O4L4QOC5 = $mol_type_enforce<
		`Li-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__01FS0GQO = $mol_type_enforce<
		`Tm-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RDR36NED = $mol_type_enforce<
		`Ta-Cu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5OEXKYJY = $mol_type_enforce<
		`Tb-Pm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4EOJJHQ9 = $mol_type_enforce<
		`Ni-Ag-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0SMC9WHK = $mol_type_enforce<
		`Pm-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UZ8VCBZD = $mol_type_enforce<
		`Pu-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JLFU8594 = $mol_type_enforce<
		`Eu-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XM7T5HDT = $mol_type_enforce<
		`Th-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2XM7VDJI = $mol_type_enforce<
		`K-Rb-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F2FDZTDC = $mol_type_enforce<
		`Sm-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8JKH8G3J = $mol_type_enforce<
		`Mg-Cd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__41Q5O66N = $mol_type_enforce<
		`Tb-Pr-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2UZ86156 = $mol_type_enforce<
		`Ce-Eu-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__352JWIBG = $mol_type_enforce<
		`La-Nd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SWAZLT5C = $mol_type_enforce<
		`Ru-Pt-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MD26U09H = $mol_type_enforce<
		`La-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2DFXCFWK = $mol_type_enforce<
		`Pm-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HZLGZWYQ = $mol_type_enforce<
		`Yb-Th-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SYLCIJKR = $mol_type_enforce<
		`Ce-Pm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__21W4CVJQ = $mol_type_enforce<
		`Co-Ni-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VY4BDZ0H = $mol_type_enforce<
		`Si-Sn-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N46AVDL3 = $mol_type_enforce<
		`Er-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IFXBMRLY = $mol_type_enforce<
		`Os-Pd-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O0950JUU = $mol_type_enforce<
		`Hf-Mg-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PD6KY5HA = $mol_type_enforce<
		`Mo-W-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__URNDFOIK = $mol_type_enforce<
		`Sm-Gd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OI0I7R7I = $mol_type_enforce<
		`Ca-Tb-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VNM2PZUO = $mol_type_enforce<
		`Ho-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QKACTMZO = $mol_type_enforce<
		`Fe-Co-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9FEQY5UL = $mol_type_enforce<
		`La-Sm-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YTLFTMCE = $mol_type_enforce<
		`Be-Al-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XHN4LC1X = $mol_type_enforce<
		`Er-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W3HLT4R8 = $mol_type_enforce<
		`Sn-Bi-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JBP989CD = $mol_type_enforce<
		`Nd-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CFPC9GZK = $mol_type_enforce<
		`Eu-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UH7FMIMY = $mol_type_enforce<
		`La-Nd-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5OJMX6JB = $mol_type_enforce<
		`Pm-Nd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4B6PFCRF = $mol_type_enforce<
		`Dy-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D8RNL5IL = $mol_type_enforce<
		`Pm-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YLK1TP03 = $mol_type_enforce<
		`Tl-Zn-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ABXB3S3E = $mol_type_enforce<
		`Y-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X38QJEM2 = $mol_type_enforce<
		`Ba-Pm-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EE50XKWN = $mol_type_enforce<
		`Ce-Pr-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZM0WUZ79 = $mol_type_enforce<
		`V-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YIBW19US = $mol_type_enforce<
		`Ce-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P5XGROFV = $mol_type_enforce<
		`Yb-Dy-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GT8PXQSG = $mol_type_enforce<
		`La-Er-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__12XWH2UD = $mol_type_enforce<
		`Li-Mg-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZRRU33CE = $mol_type_enforce<
		`Y-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CF0HQLL0 = $mol_type_enforce<
		`Sm-Y-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A61CMT8K = $mol_type_enforce<
		`Ce-Eu-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RE4IM1IW = $mol_type_enforce<
		`Ag-Ge-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5M21ORB5 = $mol_type_enforce<
		`Sm-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YB6KBHE4 = $mol_type_enforce<
		`Na-Li-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__49GFGWNG = $mol_type_enforce<
		`Tb-Yb-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JHJ7QD50 = $mol_type_enforce<
		`Pr-Gd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1XZOTT1M = $mol_type_enforce<
		`Dy-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LFQ39Y59 = $mol_type_enforce<
		`Er-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8K6BLNHU = $mol_type_enforce<
		`Na-Li-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F5LVAIER = $mol_type_enforce<
		`Pm-Nd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__56586MSB = $mol_type_enforce<
		`La-Ce-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__38YG87O9 = $mol_type_enforce<
		`Dy-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZFFSI1OH = $mol_type_enforce<
		`Ca-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0G6ZNPWF = $mol_type_enforce<
		`Nd-Sm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__38ZOE9VV = $mol_type_enforce<
		`Yb-Nd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AFOH7RDU = $mol_type_enforce<
		`Li-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9J41CZRW = $mol_type_enforce<
		`Ca-Ce-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YEHLXKPW = $mol_type_enforce<
		`Cs-Li-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__43X5YC4S = $mol_type_enforce<
		`Y-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3N8W8H63 = $mol_type_enforce<
		`Sm-Dy-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__298GCY0U = $mol_type_enforce<
		`Ho-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YFY0NRXA = $mol_type_enforce<
		`Dy-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2MHKIAQG = $mol_type_enforce<
		`Pu-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XMOGAHUL = $mol_type_enforce<
		`Ce-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q16RKFUM = $mol_type_enforce<
		`Sm-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SFVRCY1X = $mol_type_enforce<
		`La-Sm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OUGWTOQO = $mol_type_enforce<
		`Yb-Nd-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5IOCOMQ5 = $mol_type_enforce<
		`Pr-Dy-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BDK8F9X0 = $mol_type_enforce<
		`Ho-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P8SZDNYB = $mol_type_enforce<
		`Lu-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KLM4XEMN = $mol_type_enforce<
		`Yb-Nd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6ZS1N8AF = $mol_type_enforce<
		`Rb-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZKMX7TTR = $mol_type_enforce<
		`Gd-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YN122BI0 = $mol_type_enforce<
		`Ho-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D32EFUAZ = $mol_type_enforce<
		`Tc-Pd-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__85S554WI = $mol_type_enforce<
		`Ce-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T8EJ9DHR = $mol_type_enforce<
		`Cu-Pt-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RM1N9HSA = $mol_type_enforce<
		`La-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IZI5LVH5 = $mol_type_enforce<
		`Sm-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9GHOI7AM = $mol_type_enforce<
		`La-Gd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2Y3G1NUK = $mol_type_enforce<
		`Al-Zn-Cd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1VI3530C = $mol_type_enforce<
		`Cs-Pr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EN1D2PAC = $mol_type_enforce<
		`Pm-Pr-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PWDDG33G = $mol_type_enforce<
		`Os-Pt-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RP5CDJTC = $mol_type_enforce<
		`Er-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__590UDCNX = $mol_type_enforce<
		`Gd-Dy-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z7Z4NORY = $mol_type_enforce<
		`Tb-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J8MVWWKV = $mol_type_enforce<
		`Ce-Nd-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E4YTZMNG = $mol_type_enforce<
		`Be-Al-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IU8W3FN7 = $mol_type_enforce<
		`Cu-Tc-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O1ON9689 = $mol_type_enforce<
		`Nd-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IAI6AGFX = $mol_type_enforce<
		`Ca-La-Tb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WYOJYINP = $mol_type_enforce<
		`Be-Zn-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X0DDGN43 = $mol_type_enforce<
		`Cu-Rh-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K3T27SG4 = $mol_type_enforce<
		`Lu-Pu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZLOLZR7E = $mol_type_enforce<
		`Pr-Nd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6Y8MFMXP = $mol_type_enforce<
		`Rb-Na-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GD6X6L2C = $mol_type_enforce<
		`Yb-Pr-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1Q03VZSS = $mol_type_enforce<
		`Ce-Pr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6EWDS22V = $mol_type_enforce<
		`Hf-Mg-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TRDWGQ6H = $mol_type_enforce<
		`Tb-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P896VSCZ = $mol_type_enforce<
		`Co-Ag-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TFE834AI = $mol_type_enforce<
		`Li-Tb-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F9DT9EIZ = $mol_type_enforce<
		`Yb-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3U410FSZ = $mol_type_enforce<
		`Yb-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DEL18LLQ = $mol_type_enforce<
		`Yb-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HYOV4S1C = $mol_type_enforce<
		`Sc-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P5VQV83S = $mol_type_enforce<
		`La-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PIYN61BB = $mol_type_enforce<
		`Ca-Ce-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NG4TTKAN = $mol_type_enforce<
		`Ce-Ho-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QDZPRFR7 = $mol_type_enforce<
		`La-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RJJFQHZ8 = $mol_type_enforce<
		`Pu-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EBECZVE0 = $mol_type_enforce<
		`Yb-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LKUVLRGI = $mol_type_enforce<
		`Er-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6JPKWQ5M = $mol_type_enforce<
		`U-Cr-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OUMVIPJY = $mol_type_enforce<
		`Dy-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8EEQ63CN = $mol_type_enforce<
		`Si-Ag-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TY9KEMZM = $mol_type_enforce<
		`Tb-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__06G9TEWS = $mol_type_enforce<
		`Pr-Gd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4FTPZ9IB = $mol_type_enforce<
		`Ce-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AXFGR31Q = $mol_type_enforce<
		`Tl-Cu-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EGWUO9D4 = $mol_type_enforce<
		`Ho-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ULEIXXHU = $mol_type_enforce<
		`Li-Mg-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NBAA8852 = $mol_type_enforce<
		`Y-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__54EBT41N = $mol_type_enforce<
		`Sc-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6QTKVINT = $mol_type_enforce<
		`Cu-Bi-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UHSWUS5J = $mol_type_enforce<
		`Tl-Zn-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YE98LIQ9 = $mol_type_enforce<
		`Nd-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QEBE0U03 = $mol_type_enforce<
		`Ni-Pt-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RSXAZLQ5 = $mol_type_enforce<
		`Sm-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WCZE7HDD = $mol_type_enforce<
		`Li-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__45IFZTHH = $mol_type_enforce<
		`Yb-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3VGVFUTG = $mol_type_enforce<
		`Ce-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1SAYEJD1 = $mol_type_enforce<
		`Pr-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8F5LRL5Q = $mol_type_enforce<
		`Ir-Os-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ULGUMT9R = $mol_type_enforce<
		`Er-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2XGBQJ91 = $mol_type_enforce<
		`Tb-Sm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__27UGV5V5 = $mol_type_enforce<
		`Dy-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6GPX7SI7 = $mol_type_enforce<
		`Nb-Tl-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3GFJXJGQ = $mol_type_enforce<
		`La-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PPF37PPE = $mol_type_enforce<
		`Ag-Pd-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ESA1SX8L = $mol_type_enforce<
		`Hf-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FKAWJROR = $mol_type_enforce<
		`Re-Os-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H3TZVNU8 = $mol_type_enforce<
		`La-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__631RU5KF = $mol_type_enforce<
		`Pm-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EP2T0HZ3 = $mol_type_enforce<
		`Y-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4LZZBNAQ = $mol_type_enforce<
		`Pr-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FHYG0EQJ = $mol_type_enforce<
		`Na-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X10UK2UR = $mol_type_enforce<
		`Tl-V-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J2NRIH25 = $mol_type_enforce<
		`Gd-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8NRZ72YY = $mol_type_enforce<
		`Li-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NKMCOCKW = $mol_type_enforce<
		`Pr-Sm-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NDC9GI2B = $mol_type_enforce<
		`Ce-Gd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F7ESUOCJ = $mol_type_enforce<
		`Mn-Fe-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__860SYUYS = $mol_type_enforce<
		`Y-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RI95EDUE = $mol_type_enforce<
		`Ba-Eu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZTW9VTPR = $mol_type_enforce<
		`Ce-Ho-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8VXAA3XL = $mol_type_enforce<
		`Gd-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WX36N1FO = $mol_type_enforce<
		`Ce-Y-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZZOTDNNG = $mol_type_enforce<
		`Mn-Ni-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TFDMODXX = $mol_type_enforce<
		`Tb-Pr-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BSWHE124 = $mol_type_enforce<
		`Nd-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DXOQ3TMH = $mol_type_enforce<
		`Nb-Cu-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X3Q5YADX = $mol_type_enforce<
		`Li-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XR0EIDM1 = $mol_type_enforce<
		`Li-Sm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9RUDZ36N = $mol_type_enforce<
		`Al-Ge-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ASBR80JZ = $mol_type_enforce<
		`Tb-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0M03KM0H = $mol_type_enforce<
		`Tb-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__22F48IRZ = $mol_type_enforce<
		`Nd-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P4E74FC1 = $mol_type_enforce<
		`Sr-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TMVQZ7KS = $mol_type_enforce<
		`Er-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ESUCH8RP = $mol_type_enforce<
		`Mg-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__261A7HLC = $mol_type_enforce<
		`Dy-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IE21XCN7 = $mol_type_enforce<
		`Gd-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S9X2RVSJ = $mol_type_enforce<
		`Na-Li-Be`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VQJTMQUW = $mol_type_enforce<
		`Sm-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TK7IDO4U = $mol_type_enforce<
		`La-Pr-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5KTPRNCA = $mol_type_enforce<
		`Ce-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J8CCIJWG = $mol_type_enforce<
		`Ce-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IB4W42JR = $mol_type_enforce<
		`Er-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EOBSJQVU = $mol_type_enforce<
		`Lu-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RA2QYNZ2 = $mol_type_enforce<
		`Fe-Ir-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0ETJZXIM = $mol_type_enforce<
		`Li-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QCNARB6Z = $mol_type_enforce<
		`Pm-Pr-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S66CJEXV = $mol_type_enforce<
		`Th-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CYHFICWS = $mol_type_enforce<
		`Tl-In-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PHD25SXK = $mol_type_enforce<
		`Tm-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TPRB546S = $mol_type_enforce<
		`Tc-Ni-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5SUBBYNG = $mol_type_enforce<
		`La-Yb-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4CFSNE6N = $mol_type_enforce<
		`Li-Pr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NOEW4E8K = $mol_type_enforce<
		`Sr-Nd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__22JCWBMJ = $mol_type_enforce<
		`Ce-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z57895LZ = $mol_type_enforce<
		`La-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LHICQY0Z = $mol_type_enforce<
		`Li-Ce-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4I1Y4OGL = $mol_type_enforce<
		`Ba-La-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6CR8P3OW = $mol_type_enforce<
		`La-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AF0NFHL2 = $mol_type_enforce<
		`Ce-Pr-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1K2QGA8Z = $mol_type_enforce<
		`Cs-K-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CMFT33BQ = $mol_type_enforce<
		`Sm-Gd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M4YIARTX = $mol_type_enforce<
		`Li-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QU1TED7K = $mol_type_enforce<
		`La-Yb-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SXLQQ7IE = $mol_type_enforce<
		`La-Dy-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7NHAXJNA = $mol_type_enforce<
		`Y-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KN3MHRKL = $mol_type_enforce<
		`Th-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MG3R2P6X = $mol_type_enforce<
		`Ho-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RSA9PABC = $mol_type_enforce<
		`Ce-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AV7I9BKT = $mol_type_enforce<
		`Tb-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SOBXFUZR = $mol_type_enforce<
		`La-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GIBHQ1ZH = $mol_type_enforce<
		`La-Pr-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VOR459IG = $mol_type_enforce<
		`Cs-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MCFYVWWK = $mol_type_enforce<
		`Bi-Sb-P`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T9BJELU9 = $mol_type_enforce<
		`Mn-Cu-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0V140K8M = $mol_type_enforce<
		`Mg-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MIGNYVTF = $mol_type_enforce<
		`Er-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0S2YDJO0 = $mol_type_enforce<
		`Th-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4XS264SW = $mol_type_enforce<
		`Cr-Cu-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5WRC07WB = $mol_type_enforce<
		`Er-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QDNCV93Y = $mol_type_enforce<
		`Tb-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__70C86DPU = $mol_type_enforce<
		`Li-La-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F4YZDKT8 = $mol_type_enforce<
		`Ce-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FB8ZF41V = $mol_type_enforce<
		`Tc-Ni-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K98TD4WY = $mol_type_enforce<
		`Pr-Ho-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WMTTYSRW = $mol_type_enforce<
		`Li-Cr-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2GVT7F9S = $mol_type_enforce<
		`La-Sm-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XIDO0NBD = $mol_type_enforce<
		`Fe-Cu-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MMBQ73TL = $mol_type_enforce<
		`Co-Cu-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q1SY0AOP = $mol_type_enforce<
		`Nb-Tl-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R8XL85M9 = $mol_type_enforce<
		`Co-Pt-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RDP5DAF6 = $mol_type_enforce<
		`Ce-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MO7BSLXK = $mol_type_enforce<
		`Re-Ir-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TXDLZ6O5 = $mol_type_enforce<
		`Lu-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UPMVVJMK = $mol_type_enforce<
		`Eu-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__99C4ICVM = $mol_type_enforce<
		`Ce-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0OY0L4X4 = $mol_type_enforce<
		`Ir-Pd-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ARPH4PJM = $mol_type_enforce<
		`Hg-Ir-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KI7E0X8N = $mol_type_enforce<
		`Y-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M3O7B222 = $mol_type_enforce<
		`La-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MYRNG46I = $mol_type_enforce<
		`Tl-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W973XCVA = $mol_type_enforce<
		`Co-Cu-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2O91CXQ6 = $mol_type_enforce<
		`Pm-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BXA90W0B = $mol_type_enforce<
		`Ce-Pr-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JF9KHWVD = $mol_type_enforce<
		`Tb-Pr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C6OSCLKL = $mol_type_enforce<
		`Yb-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ESJGKKTX = $mol_type_enforce<
		`Pm-Dy-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G4795NR8 = $mol_type_enforce<
		`Co-Ru-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H3E3T8UX = $mol_type_enforce<
		`Tb-Yb-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EYZAIOK5 = $mol_type_enforce<
		`Gd-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PUJN4SPG = $mol_type_enforce<
		`Dy-Ho-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0FZ24FVV = $mol_type_enforce<
		`La-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SCMG67JN = $mol_type_enforce<
		`La-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B5G3WTOU = $mol_type_enforce<
		`U-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WQH6WEKC = $mol_type_enforce<
		`La-Pm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S4W8V5TY = $mol_type_enforce<
		`Cs-K-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I0CT8UMJ = $mol_type_enforce<
		`Tb-Nd-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4FBUD3T7 = $mol_type_enforce<
		`Nd-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VFOTVGAN = $mol_type_enforce<
		`Li-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZS9JCBLL = $mol_type_enforce<
		`Sm-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O97FP91D = $mol_type_enforce<
		`La-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KX08UHC7 = $mol_type_enforce<
		`Gd-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SWJAZ10D = $mol_type_enforce<
		`Ce-Nd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__653DGV6J = $mol_type_enforce<
		`Tb-Yb-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HKRU2AC8 = $mol_type_enforce<
		`Ce-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0U21SSG9 = $mol_type_enforce<
		`Pr-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__INHIBU8K = $mol_type_enforce<
		`La-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__55WPH6S7 = $mol_type_enforce<
		`Dy-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AXOSUOCN = $mol_type_enforce<
		`Li-Pr-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DXPYZL88 = $mol_type_enforce<
		`Ce-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U9THTC0C = $mol_type_enforce<
		`Dy-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NUXFXZRP = $mol_type_enforce<
		`Er-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3OTLMMY1 = $mol_type_enforce<
		`La-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QASQYVXD = $mol_type_enforce<
		`Ca-Ce-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K9ACNPRB = $mol_type_enforce<
		`Eu-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OGW3XFK9 = $mol_type_enforce<
		`La-Sc-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DD8TXBQO = $mol_type_enforce<
		`Li-Ce-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GU8UGZM5 = $mol_type_enforce<
		`La-Dy-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3B1LUZ2F = $mol_type_enforce<
		`Lu-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J8BDYK9Q = $mol_type_enforce<
		`Gd-Y-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2F6MR195 = $mol_type_enforce<
		`Li-Ce-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HSFP4H85 = $mol_type_enforce<
		`Cr-Cd-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q84V8I78 = $mol_type_enforce<
		`La-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__15BORK1L = $mol_type_enforce<
		`Rb-Mg-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YZYH69WM = $mol_type_enforce<
		`Tb-Gd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7NF7JQC1 = $mol_type_enforce<
		`Eu-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1HMN56U6 = $mol_type_enforce<
		`Co-Ag-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0QE481DT = $mol_type_enforce<
		`La-Tb-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HFSRNIUH = $mol_type_enforce<
		`Rb-Mg-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D1V6XGQ0 = $mol_type_enforce<
		`Cu-Ir-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y18FQ31H = $mol_type_enforce<
		`Rb-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__67KOB274 = $mol_type_enforce<
		`Gd-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MQF50AKI = $mol_type_enforce<
		`Er-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FPISTECW = $mol_type_enforce<
		`V-Cu-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KA9B42RB = $mol_type_enforce<
		`Dy-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YRVNBB1B = $mol_type_enforce<
		`Sc-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X4E62D4Z = $mol_type_enforce<
		`Tb-Gd-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SC8HO9YF = $mol_type_enforce<
		`Li-Tb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MUGRBKRU = $mol_type_enforce<
		`Er-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2IF0UZWA = $mol_type_enforce<
		`V-Cr-Hg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y45YAMGH = $mol_type_enforce<
		`La-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EJCH3DG8 = $mol_type_enforce<
		`Ta-Cu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GXS349OT = $mol_type_enforce<
		`Ta-Nb-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V8Y348H4 = $mol_type_enforce<
		`Nd-Sm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JCCRIO2J = $mol_type_enforce<
		`V-Fe-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X8JPDGQQ = $mol_type_enforce<
		`Yb-Eu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LUB0D4A6 = $mol_type_enforce<
		`La-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5KK281AG = $mol_type_enforce<
		`Pd-Au-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PKWYQHJJ = $mol_type_enforce<
		`Sc-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VUWIJRT6 = $mol_type_enforce<
		`Mn-Co-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8OGRTNME = $mol_type_enforce<
		`Yb-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PXDUFOHP = $mol_type_enforce<
		`Sm-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MHVH8IXF = $mol_type_enforce<
		`Ce-Pr-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R25RC6KD = $mol_type_enforce<
		`Ag-Ir-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WIH4NTXB = $mol_type_enforce<
		`Nd-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0OWU1J62 = $mol_type_enforce<
		`Li-Y-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KZ8MUJLV = $mol_type_enforce<
		`La-Ce-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WX8MLFEO = $mol_type_enforce<
		`Al-Si-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QMYSWFE6 = $mol_type_enforce<
		`La-Eu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__82XSYJVX = $mol_type_enforce<
		`In-Si-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G8N8ZIQZ = $mol_type_enforce<
		`V-Cr-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DJTNAQZ4 = $mol_type_enforce<
		`Al-Sn-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9K1CYAZY = $mol_type_enforce<
		`Ba-Mn-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OIX6WI7C = $mol_type_enforce<
		`Th-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__71NWRGJ8 = $mol_type_enforce<
		`Cs-Li-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9J751CML = $mol_type_enforce<
		`Ca-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z81MNACC = $mol_type_enforce<
		`Al-Si-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__37Z4NU4N = $mol_type_enforce<
		`Li-Mg-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9O7O4HA0 = $mol_type_enforce<
		`Yb-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EX37Q0H3 = $mol_type_enforce<
		`Mn-Tl-Cd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1UVB68SB = $mol_type_enforce<
		`Fe-Ir-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UNYHMUHV = $mol_type_enforce<
		`Tb-Nd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OU6CX9U8 = $mol_type_enforce<
		`Nd-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B2DSCT6W = $mol_type_enforce<
		`Ba-Sr-Ca`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KVJEFFTQ = $mol_type_enforce<
		`La-Eu-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__61W3VYEF = $mol_type_enforce<
		`Sm-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6YZF6JVC = $mol_type_enforce<
		`Y-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HPNWRTBZ = $mol_type_enforce<
		`Tc-Ir-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AOH4SZOF = $mol_type_enforce<
		`Cs-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SCX3WNIT = $mol_type_enforce<
		`Gd-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UY6KPF31 = $mol_type_enforce<
		`Dy-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ONDRUWI6 = $mol_type_enforce<
		`La-Pm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QHQE26JI = $mol_type_enforce<
		`Yb-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__02LRMEZ0 = $mol_type_enforce<
		`Ce-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__788NB95E = $mol_type_enforce<
		`Ir-Os-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J2U4B54P = $mol_type_enforce<
		`Ce-Sm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6JDB611J = $mol_type_enforce<
		`Tb-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9OL0X4TZ = $mol_type_enforce<
		`Pm-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JJKDZXO8 = $mol_type_enforce<
		`Pr-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1CULK7E8 = $mol_type_enforce<
		`Tb-Ce-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K2BS99GR = $mol_type_enforce<
		`Hg-Bi-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__34R3XEGJ = $mol_type_enforce<
		`Tb-Ce-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8KCXQWHX = $mol_type_enforce<
		`Pr-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TTE8KSXO = $mol_type_enforce<
		`Cu-Ni-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T7EZBCVP = $mol_type_enforce<
		`Fe-Co-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CK8NPDUN = $mol_type_enforce<
		`Pr-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DM2H516U = $mol_type_enforce<
		`Zn-Sn-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UN3GSW49 = $mol_type_enforce<
		`Yb-Eu-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1VWYEXJ4 = $mol_type_enforce<
		`Cd-Fe-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JHZCS3SD = $mol_type_enforce<
		`La-Gd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JWIC5EL1 = $mol_type_enforce<
		`Ga-Bi-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T4R7JVZ2 = $mol_type_enforce<
		`Sm-Gd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LCYYSKQW = $mol_type_enforce<
		`Co-Pt-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KESHMFM6 = $mol_type_enforce<
		`Ce-Er-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WTGCR37J = $mol_type_enforce<
		`Tb-Ce-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__128IZPI2 = $mol_type_enforce<
		`Sr-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6EA8RL60 = $mol_type_enforce<
		`Cr-Fe-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZT3U3814 = $mol_type_enforce<
		`Yb-Hf-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F1EKBX4P = $mol_type_enforce<
		`Eu-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__96G5ZR9C = $mol_type_enforce<
		`Zn-Ge-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VKX6TVEC = $mol_type_enforce<
		`Ca-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZJZI9JGB = $mol_type_enforce<
		`Nd-Sm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CB9V7ECO = $mol_type_enforce<
		`Ce-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__23T858UK = $mol_type_enforce<
		`Na-Ca-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I90XK9BA = $mol_type_enforce<
		`Tl-Cd-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R6Q83GZM = $mol_type_enforce<
		`Nd-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZQA3QPEP = $mol_type_enforce<
		`Li-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1YWOVXCW = $mol_type_enforce<
		`Pr-Dy-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G7H3ZGKN = $mol_type_enforce<
		`Pr-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FURVQ7QV = $mol_type_enforce<
		`Co-Cu-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NLR4FQAA = $mol_type_enforce<
		`Tb-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HOJBKS4L = $mol_type_enforce<
		`Li-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BE0DTYYI = $mol_type_enforce<
		`Pm-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4GUX66BC = $mol_type_enforce<
		`La-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XM9MT2PM = $mol_type_enforce<
		`Pr-Sm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GWVQIXY1 = $mol_type_enforce<
		`Pr-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XF4IJE2L = $mol_type_enforce<
		`Yb-Gd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0J6SD613 = $mol_type_enforce<
		`Gd-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TD7RT7PO = $mol_type_enforce<
		`Ho-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QECNFQVT = $mol_type_enforce<
		`Yb-Dy-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C7JC4R9R = $mol_type_enforce<
		`Li-Mg-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KIQ1PKQK = $mol_type_enforce<
		`Yb-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y0OPEGD2 = $mol_type_enforce<
		`Lu-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V9E560Y7 = $mol_type_enforce<
		`Ca-Nd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IYBQB2EH = $mol_type_enforce<
		`Tb-Ce-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M8WXH3OB = $mol_type_enforce<
		`Dy-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E003M0PL = $mol_type_enforce<
		`Sr-Ca-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y2C1DOEO = $mol_type_enforce<
		`Tb-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DQ1YCZLB = $mol_type_enforce<
		`Pr-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GEWSQCO7 = $mol_type_enforce<
		`Yb-Pr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V5SMILKD = $mol_type_enforce<
		`Cd-Ga-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GSST86VD = $mol_type_enforce<
		`Tb-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L3IYVB14 = $mol_type_enforce<
		`La-Ce-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IBP4DK1G = $mol_type_enforce<
		`Sm-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XU8FPFPV = $mol_type_enforce<
		`Li-Sm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ABEUY8SK = $mol_type_enforce<
		`Ba-Yb-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T4IIJAO3 = $mol_type_enforce<
		`Gd-Ho-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1D166NEA = $mol_type_enforce<
		`Eu-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q9SZ7GF5 = $mol_type_enforce<
		`La-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YMTXKZLX = $mol_type_enforce<
		`Pm-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__84ACJB5T = $mol_type_enforce<
		`Ce-Pr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BEBZ4AC3 = $mol_type_enforce<
		`U-V-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GJ5OS5QS = $mol_type_enforce<
		`Cs-Li-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7P7CT7Z5 = $mol_type_enforce<
		`Yb-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8C4NEFTJ = $mol_type_enforce<
		`La-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ON0431XW = $mol_type_enforce<
		`Tb-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6NQIGR18 = $mol_type_enforce<
		`Eu-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y9N7B0J8 = $mol_type_enforce<
		`Cs-Rb-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VAG6D4YA = $mol_type_enforce<
		`Pm-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6CXSN9OP = $mol_type_enforce<
		`Sr-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DFZ76FCY = $mol_type_enforce<
		`Cu-Ru-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3NSQJ9DO = $mol_type_enforce<
		`La-Sm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__20R405T8 = $mol_type_enforce<
		`La-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XCAFOXKY = $mol_type_enforce<
		`Pr-Gd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5GNQM7PE = $mol_type_enforce<
		`Er-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0ELFOWGC = $mol_type_enforce<
		`Ho-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YPSOMM5I = $mol_type_enforce<
		`Yb-Er-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__69082ET3 = $mol_type_enforce<
		`Y-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2B387NZ1 = $mol_type_enforce<
		`Cr-Ag-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PBUUE5M2 = $mol_type_enforce<
		`Sm-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JDYXA0TZ = $mol_type_enforce<
		`Li-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0VOWDCWL = $mol_type_enforce<
		`Gd-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UN7B1TNH = $mol_type_enforce<
		`Sc-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NE0AOKPW = $mol_type_enforce<
		`Rb-Mg-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U7XVLU7Z = $mol_type_enforce<
		`Th-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I6ILBBDE = $mol_type_enforce<
		`K-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__35P5G4LH = $mol_type_enforce<
		`Ho-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EOLH9IFI = $mol_type_enforce<
		`Ba-Nd-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FITW2K0P = $mol_type_enforce<
		`Rb-Na-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YKLGG9KR = $mol_type_enforce<
		`Ce-Sm-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EKRK9F8N = $mol_type_enforce<
		`Pr-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1FOHV0TG = $mol_type_enforce<
		`Ba-Pr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VUFXP7HZ = $mol_type_enforce<
		`Li-Nd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P0JF7PM6 = $mol_type_enforce<
		`Re-Os-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LGD3571W = $mol_type_enforce<
		`Eu-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S3I8QG3L = $mol_type_enforce<
		`Nd-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PTSVASNF = $mol_type_enforce<
		`Cs-Rb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__13YP3Y2C = $mol_type_enforce<
		`Tb-Pm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E8JWKVJU = $mol_type_enforce<
		`Cs-K-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YEZBKKKN = $mol_type_enforce<
		`Na-Sr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X7T890LE = $mol_type_enforce<
		`La-Ce-Eu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5WHG179Z = $mol_type_enforce<
		`La-Gd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KHL3EZM2 = $mol_type_enforce<
		`Tb-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZEB8Y9KK = $mol_type_enforce<
		`Th-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__61X3E0YJ = $mol_type_enforce<
		`Li-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P92WB0W1 = $mol_type_enforce<
		`Lu-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5ZDND4XX = $mol_type_enforce<
		`Tb-Nd-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__842AN5V8 = $mol_type_enforce<
		`Nb-Bi-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AD6ORM0Q = $mol_type_enforce<
		`Cd-Si-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4CHH84VM = $mol_type_enforce<
		`Sm-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X6PWAW5N = $mol_type_enforce<
		`Be-In-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7NIF2QD0 = $mol_type_enforce<
		`Sr-Ca-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1CVHENLE = $mol_type_enforce<
		`Pd-Pt-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SCQ50LPX = $mol_type_enforce<
		`Pm-Pr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WYRWRXYV = $mol_type_enforce<
		`La-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OVYKKCW3 = $mol_type_enforce<
		`Ce-Gd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__11KGZL8Q = $mol_type_enforce<
		`La-Ce-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QLHDSDK0 = $mol_type_enforce<
		`La-Th-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VX7U43L4 = $mol_type_enforce<
		`K-Li-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QCPKJAIG = $mol_type_enforce<
		`Ho-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H4YONQJO = $mol_type_enforce<
		`Nd-Gd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NWA66LJD = $mol_type_enforce<
		`Ce-Sm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0FCBLA9M = $mol_type_enforce<
		`Nd-Dy-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K0I8EVW2 = $mol_type_enforce<
		`Tb-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CXWTLLK5 = $mol_type_enforce<
		`Er-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2H95F2CP = $mol_type_enforce<
		`Sm-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2U5USXZH = $mol_type_enforce<
		`Pm-Sm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UBMRU1L2 = $mol_type_enforce<
		`Sc-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1KM846AD = $mol_type_enforce<
		`Cs-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8DTYKS58 = $mol_type_enforce<
		`Yb-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8S66ZUNH = $mol_type_enforce<
		`Pr-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JWWQMHE8 = $mol_type_enforce<
		`Zn-Ga-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IXLOCX19 = $mol_type_enforce<
		`Yb-Nd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__03219YWH = $mol_type_enforce<
		`Er-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3KHP572H = $mol_type_enforce<
		`Pm-Sm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TZU9E62G = $mol_type_enforce<
		`Mn-Cd-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9XMV9UV8 = $mol_type_enforce<
		`Ba-La-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8K1A78WZ = $mol_type_enforce<
		`La-Tb-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6734RD4R = $mol_type_enforce<
		`Yb-Nd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5PLSKZVS = $mol_type_enforce<
		`Pr-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V0GGIXMQ = $mol_type_enforce<
		`Er-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M9KUKNXE = $mol_type_enforce<
		`Co-Re-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2BS6J5IR = $mol_type_enforce<
		`Co-Ni-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GJ0D50VD = $mol_type_enforce<
		`La-Ce-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JUH2QYFZ = $mol_type_enforce<
		`Sm-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YO3PSRHC = $mol_type_enforce<
		`Pm-Sm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M9Q9W2O3 = $mol_type_enforce<
		`Yb-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K8B1YU1K = $mol_type_enforce<
		`Hf-Mg-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__70DIQ9TS = $mol_type_enforce<
		`Pr-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2NL82745 = $mol_type_enforce<
		`Pm-Pr-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XCA78Z61 = $mol_type_enforce<
		`Pm-Sm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CVDQV7ID = $mol_type_enforce<
		`K-Mg-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M80O8PC8 = $mol_type_enforce<
		`V-In-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JS4V06NY = $mol_type_enforce<
		`Yb-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LA72OBWA = $mol_type_enforce<
		`Li-Tb-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BFIDRWLL = $mol_type_enforce<
		`Y-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CVBBK9P7 = $mol_type_enforce<
		`Th-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F6M29X1B = $mol_type_enforce<
		`Ba-Eu-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NXK6HKKV = $mol_type_enforce<
		`Ce-Sm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7ZH8LZED = $mol_type_enforce<
		`Pr-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__29NXVH1G = $mol_type_enforce<
		`Ba-Ca-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q3SBMJXF = $mol_type_enforce<
		`Ge-Bi-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YB20ZJVH = $mol_type_enforce<
		`Ce-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O73G32IV = $mol_type_enforce<
		`Rb-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__70GBWKK4 = $mol_type_enforce<
		`Yb-Pr-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CC5Z7HYI = $mol_type_enforce<
		`Si-Ge-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E4T3QPN1 = $mol_type_enforce<
		`Li-Er-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W3082N75 = $mol_type_enforce<
		`Ba-La-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HIAFWR6M = $mol_type_enforce<
		`Er-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__09HAZ7M8 = $mol_type_enforce<
		`Ce-Pr-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VDR044NR = $mol_type_enforce<
		`Y-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ERBZT1VA = $mol_type_enforce<
		`Na-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__40D7RC4E = $mol_type_enforce<
		`Yb-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VFM28THH = $mol_type_enforce<
		`Tb-Pm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I9WUXWXS = $mol_type_enforce<
		`Sm-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6H2SS8E8 = $mol_type_enforce<
		`Pr-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RG451GU4 = $mol_type_enforce<
		`Ba-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0E3L73RT = $mol_type_enforce<
		`Ag-Bi-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D8J6AASA = $mol_type_enforce<
		`Nb-Cu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O3CRMP3D = $mol_type_enforce<
		`Tb-Ho-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SNDWNLTB = $mol_type_enforce<
		`Pm-Sm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G1L8AL77 = $mol_type_enforce<
		`Zn-Ge-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9RCYL96K = $mol_type_enforce<
		`Tb-Pr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GWB2N4N8 = $mol_type_enforce<
		`Ca-Ce-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NX2O6AMH = $mol_type_enforce<
		`Tm-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DGLUH2ID = $mol_type_enforce<
		`Tc-Ni-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CCVKM6K9 = $mol_type_enforce<
		`Eu-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1J3GQKAU = $mol_type_enforce<
		`La-Tb-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QE8U6IO6 = $mol_type_enforce<
		`Yb-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CKS70ZJ0 = $mol_type_enforce<
		`Yb-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XULE2GBL = $mol_type_enforce<
		`Ce-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LT4OAB1T = $mol_type_enforce<
		`Tb-Nd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M4Q7LCBO = $mol_type_enforce<
		`Cu-Ir-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MFP35JA1 = $mol_type_enforce<
		`Ba-La-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HOF87J0W = $mol_type_enforce<
		`La-Gd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WTLZCNJ0 = $mol_type_enforce<
		`Ga-Sn-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2B8ODNP3 = $mol_type_enforce<
		`Tb-Ho-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J6NR8UMZ = $mol_type_enforce<
		`Er-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PKM7Q7BU = $mol_type_enforce<
		`Pr-Y-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MZN4B8KZ = $mol_type_enforce<
		`Dy-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZH23AN3P = $mol_type_enforce<
		`Lu-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XRP8RF9L = $mol_type_enforce<
		`Pr-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4DWQFOIA = $mol_type_enforce<
		`La-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9QI72RGB = $mol_type_enforce<
		`Tb-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HZS7IH8Z = $mol_type_enforce<
		`Lu-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PCW5PONB = $mol_type_enforce<
		`Cs-Rb-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PYRSO7YL = $mol_type_enforce<
		`Fe-Co-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X6HIZUNG = $mol_type_enforce<
		`K-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__56JC5RG7 = $mol_type_enforce<
		`Tb-Yb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I88R3ZBV = $mol_type_enforce<
		`Fe-Au-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A4O214PL = $mol_type_enforce<
		`Dy-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MYIGTK1J = $mol_type_enforce<
		`Y-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PEA4I7FG = $mol_type_enforce<
		`Tb-Pr-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P70BJ29M = $mol_type_enforce<
		`Sc-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MKHPRUYG = $mol_type_enforce<
		`Gd-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WGWU82GL = $mol_type_enforce<
		`Li-Y-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V3YCSGMT = $mol_type_enforce<
		`Mn-V-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K78QZ0QT = $mol_type_enforce<
		`Yb-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LIAU6C32 = $mol_type_enforce<
		`Sm-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OPPV9RP0 = $mol_type_enforce<
		`La-Nd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WA20Z430 = $mol_type_enforce<
		`Ga-Si-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TB1JB13G = $mol_type_enforce<
		`Ba-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TC5ADNED = $mol_type_enforce<
		`Nd-Y-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4ICUQWXS = $mol_type_enforce<
		`Gd-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y54VGP6S = $mol_type_enforce<
		`Eu-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PECZ0Y7T = $mol_type_enforce<
		`Er-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZZXIUEGU = $mol_type_enforce<
		`Be-Ga-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O9X20FQ8 = $mol_type_enforce<
		`K-Li-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0L1S8J8W = $mol_type_enforce<
		`Tl-V-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EPTP0D4O = $mol_type_enforce<
		`Co-Os-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R2MB5W68 = $mol_type_enforce<
		`V-Hg-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SKQCSYFH = $mol_type_enforce<
		`Fe-Co-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IHQK8FN9 = $mol_type_enforce<
		`La-Tb-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UBGGJDOZ = $mol_type_enforce<
		`Pr-Dy-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EWO5WZ9C = $mol_type_enforce<
		`Ta-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UNZR7VZN = $mol_type_enforce<
		`Li-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8YFR10NV = $mol_type_enforce<
		`Zn-In-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__07UN963F = $mol_type_enforce<
		`Tb-Ce-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__45R6J1NE = $mol_type_enforce<
		`Ca-Yb-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6NWEPJ4T = $mol_type_enforce<
		`La-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M1DNFVKX = $mol_type_enforce<
		`Yb-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J90C1CQ4 = $mol_type_enforce<
		`La-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IUKNEKFN = $mol_type_enforce<
		`Li-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GN2LKPFA = $mol_type_enforce<
		`Yb-Pr-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N6UUSTGP = $mol_type_enforce<
		`Li-Pr-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VTW3MCAZ = $mol_type_enforce<
		`Ho-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WY1ELOAF = $mol_type_enforce<
		`Pr-Sm-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZWGJTGJB = $mol_type_enforce<
		`Tb-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4IB2396K = $mol_type_enforce<
		`Yb-Eu-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NTSB55DZ = $mol_type_enforce<
		`Nd-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VL542PVE = $mol_type_enforce<
		`Ga-Hg-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__11BASYB5 = $mol_type_enforce<
		`Pm-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NH7S4L3A = $mol_type_enforce<
		`Ba-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WT8WBI4O = $mol_type_enforce<
		`Ni-Ru-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6SI2AMGV = $mol_type_enforce<
		`Y-Er-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PUS88N80 = $mol_type_enforce<
		`Ca-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R2GG8WXD = $mol_type_enforce<
		`Al-Zn-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T3HX3O6N = $mol_type_enforce<
		`Th-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WJFER6WH = $mol_type_enforce<
		`Fe-Ni-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MP9F27VP = $mol_type_enforce<
		`Tb-Sm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9WRHW47K = $mol_type_enforce<
		`Li-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PR1PR5PD = $mol_type_enforce<
		`Pm-Dy-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PIC40EZB = $mol_type_enforce<
		`Fe-Co-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SV2DE6P0 = $mol_type_enforce<
		`Gd-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RS51VQVM = $mol_type_enforce<
		`Dy-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9AS60OX1 = $mol_type_enforce<
		`La-Ce-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GRS4COIO = $mol_type_enforce<
		`Yb-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5M7CKYCU = $mol_type_enforce<
		`Tb-Ho-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OMXOUX60 = $mol_type_enforce<
		`Tb-Y-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8666XTCW = $mol_type_enforce<
		`Tc-Ir-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BOEANSWP = $mol_type_enforce<
		`Ce-Nd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R6F9BKLJ = $mol_type_enforce<
		`Yb-Y-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4QCF4ZRK = $mol_type_enforce<
		`Na-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4X3A0DTT = $mol_type_enforce<
		`Nd-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FOD9MYVB = $mol_type_enforce<
		`Ho-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MP4X7TBC = $mol_type_enforce<
		`Ba-Ca-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3YEOXCDG = $mol_type_enforce<
		`Fe-Os-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JU12JZME = $mol_type_enforce<
		`Pm-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7X1LSFZL = $mol_type_enforce<
		`Gd-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__91LTJESJ = $mol_type_enforce<
		`Tb-Dy-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KCWF304D = $mol_type_enforce<
		`La-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__32IIAN9C = $mol_type_enforce<
		`Sr-Mn-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3QHEI3OD = $mol_type_enforce<
		`La-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0L013TXS = $mol_type_enforce<
		`Dy-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MD1XGYGI = $mol_type_enforce<
		`Tl-Zn-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AMO54G58 = $mol_type_enforce<
		`Nb-Tl-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4LTTSC5V = $mol_type_enforce<
		`Pu-Np-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__99HPB2MV = $mol_type_enforce<
		`Ir-Pt-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DE5SMXHI = $mol_type_enforce<
		`Yb-Dy-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VFKZ0MNJ = $mol_type_enforce<
		`Li-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__76GZYFO7 = $mol_type_enforce<
		`Pr-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DSRX28S3 = $mol_type_enforce<
		`Nd-Dy-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EIKIP457 = $mol_type_enforce<
		`Ce-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NS87PH0K = $mol_type_enforce<
		`Be-Al-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1EVNQ3P5 = $mol_type_enforce<
		`Dy-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RI7MWA56 = $mol_type_enforce<
		`Al-Cd-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9JZDBEZ0 = $mol_type_enforce<
		`La-Er-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HZA9YE28 = $mol_type_enforce<
		`Tb-Nd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U9BIH1EL = $mol_type_enforce<
		`Eu-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8YTLE9M0 = $mol_type_enforce<
		`Re-Os-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4HBRT4ZR = $mol_type_enforce<
		`Nd-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B3VH6ZWJ = $mol_type_enforce<
		`Sm-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SO8JKKP4 = $mol_type_enforce<
		`Cs-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NX4V6KGW = $mol_type_enforce<
		`Tb-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DT5MPKY8 = $mol_type_enforce<
		`Mg-Mn-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R2CDFKD0 = $mol_type_enforce<
		`Cu-Pd-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C9O0SF1K = $mol_type_enforce<
		`Li-Er-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EMC1JNVS = $mol_type_enforce<
		`Li-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DL7ZKLRZ = $mol_type_enforce<
		`Y-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FIBVT4KF = $mol_type_enforce<
		`Yb-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6I5CVY84 = $mol_type_enforce<
		`Li-Sm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L4TGH69F = $mol_type_enforce<
		`Dy-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C4QBD99S = $mol_type_enforce<
		`Ca-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1XU3UBU1 = $mol_type_enforce<
		`Pr-Hf-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J1C75GTI = $mol_type_enforce<
		`La-Yb-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CW0LTVJ9 = $mol_type_enforce<
		`Eu-Mn-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2K5SOC78 = $mol_type_enforce<
		`Tb-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__58IXNPL5 = $mol_type_enforce<
		`Yb-Nd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DBJYGL7R = $mol_type_enforce<
		`Ti-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N7GQE9TO = $mol_type_enforce<
		`Mg-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J8T4L76O = $mol_type_enforce<
		`Ta-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D31VU6ZS = $mol_type_enforce<
		`Li-Nd-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XK445ORB = $mol_type_enforce<
		`Tl-Ag-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C3DO90E9 = $mol_type_enforce<
		`Tb-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__41OSVWEK = $mol_type_enforce<
		`Gd-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MMDKZBSC = $mol_type_enforce<
		`Cu-Pd-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4P1ZFOOM = $mol_type_enforce<
		`Li-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WYOKHP95 = $mol_type_enforce<
		`Gd-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SMFJ7LY3 = $mol_type_enforce<
		`Cu-Ru-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y10E71UK = $mol_type_enforce<
		`Li-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IUS4527Z = $mol_type_enforce<
		`Yb-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GG9IXKDX = $mol_type_enforce<
		`Gd-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8WP24Q4V = $mol_type_enforce<
		`Pr-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YTOVI3C7 = $mol_type_enforce<
		`V-Fe-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IONP3POY = $mol_type_enforce<
		`La-Gd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XQT6G164 = $mol_type_enforce<
		`Ta-V-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QR8PRJJ9 = $mol_type_enforce<
		`Tb-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PHHXWTXR = $mol_type_enforce<
		`Cr-Mo-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PPHSYWZ5 = $mol_type_enforce<
		`Tb-Ce-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GQZ8OKVE = $mol_type_enforce<
		`Ca-La-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N6MYOXYA = $mol_type_enforce<
		`Gd-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__66JF33KT = $mol_type_enforce<
		`Cr-Fe-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__13WGMRIO = $mol_type_enforce<
		`Cr-Bi-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6V502LY6 = $mol_type_enforce<
		`Ce-Pr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KNPW1MBD = $mol_type_enforce<
		`Sr-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9R5I9RAW = $mol_type_enforce<
		`Ag-Ge-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IELQTAO3 = $mol_type_enforce<
		`Y-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8F1ODA6P = $mol_type_enforce<
		`Er-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P9V06F0D = $mol_type_enforce<
		`Sm-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6SBJ2NKV = $mol_type_enforce<
		`Cr-Hg-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SGM4KDB2 = $mol_type_enforce<
		`La-Pr-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B69Q5G7X = $mol_type_enforce<
		`Ca-Ce-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XLXXOURU = $mol_type_enforce<
		`Th-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O3UCCXKH = $mol_type_enforce<
		`Ba-Nd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__307YUQ5U = $mol_type_enforce<
		`Ce-Eu-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1AH92ZOF = $mol_type_enforce<
		`Y-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4XQVO06H = $mol_type_enforce<
		`Cs-Li-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T11XD27C = $mol_type_enforce<
		`Tb-Nd-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BI8XGRA9 = $mol_type_enforce<
		`K-Rb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZRO93SYX = $mol_type_enforce<
		`Ca-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__23V30N6C = $mol_type_enforce<
		`Tb-Dy-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FI2R2VT8 = $mol_type_enforce<
		`Ce-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__14GO0YES = $mol_type_enforce<
		`Yb-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IKMDJ1G7 = $mol_type_enforce<
		`Y-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6PD4JL53 = $mol_type_enforce<
		`Gd-Dy-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LGNLUP7V = $mol_type_enforce<
		`Yb-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TBUAMUG3 = $mol_type_enforce<
		`Ce-Pr-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2M8Q8700 = $mol_type_enforce<
		`Dy-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z74ZNMVU = $mol_type_enforce<
		`Y-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WFSMLZJM = $mol_type_enforce<
		`Hf-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6Y2U6L1Y = $mol_type_enforce<
		`Cu-Mo-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZSUVLBJC = $mol_type_enforce<
		`Ho-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CRYTV3TZ = $mol_type_enforce<
		`Na-Mg-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W5SVFXZN = $mol_type_enforce<
		`Cu-Re-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9V3CUDN3 = $mol_type_enforce<
		`Si-Ag-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IJO8KZR7 = $mol_type_enforce<
		`Ba-La-Eu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q5J2CVGN = $mol_type_enforce<
		`Pm-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SFOOXS5T = $mol_type_enforce<
		`Mn-V-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1U5CE1OC = $mol_type_enforce<
		`Ca-La-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XDB781YT = $mol_type_enforce<
		`Pr-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QJ9B78UK = $mol_type_enforce<
		`Nd-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0ZBZBC5J = $mol_type_enforce<
		`Re-Ni-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CD589M7N = $mol_type_enforce<
		`Gd-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__86V2HRFQ = $mol_type_enforce<
		`Ce-Hf-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NJ6YIW2A = $mol_type_enforce<
		`La-Nd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H6Z4YE8S = $mol_type_enforce<
		`Yb-Ho-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ATJVE1RI = $mol_type_enforce<
		`Al-Cd-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OQU8HIKB = $mol_type_enforce<
		`Al-Tl-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LST92R82 = $mol_type_enforce<
		`Tb-Sm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K4AINY4O = $mol_type_enforce<
		`Pm-Sm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BYH9W8KW = $mol_type_enforce<
		`Ce-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OAAM2O8L = $mol_type_enforce<
		`Pr-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2GTCEKVA = $mol_type_enforce<
		`Dy-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HTSY3GWM = $mol_type_enforce<
		`Zn-Sn-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1IIDRBPW = $mol_type_enforce<
		`Rb-Mg-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H5ANXHPC = $mol_type_enforce<
		`Tl-In-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IIPNQO9J = $mol_type_enforce<
		`Ca-V-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UYMIICGT = $mol_type_enforce<
		`Th-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JBI1LO0H = $mol_type_enforce<
		`Gd-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BRY7AZNP = $mol_type_enforce<
		`La-Er-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VZ1E5FJ6 = $mol_type_enforce<
		`Nd-Th-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G46XU3P0 = $mol_type_enforce<
		`Ce-Pm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IPYLRIXH = $mol_type_enforce<
		`Tb-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9HDFC375 = $mol_type_enforce<
		`Gd-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__74BVH4U5 = $mol_type_enforce<
		`Yb-Pr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q1PFMNGZ = $mol_type_enforce<
		`Yb-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LV1TV8M4 = $mol_type_enforce<
		`Rb-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__97JJAWH6 = $mol_type_enforce<
		`Dy-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8O36DAK1 = $mol_type_enforce<
		`Be-Ga-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YH5LC8DI = $mol_type_enforce<
		`Y-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IHBKS19C = $mol_type_enforce<
		`Ba-Yb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__77BVXA8Y = $mol_type_enforce<
		`Yb-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4U2FYCKW = $mol_type_enforce<
		`Tb-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KF26K4UL = $mol_type_enforce<
		`Ho-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DX3VUIB7 = $mol_type_enforce<
		`Pm-Gd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8SNNTS6C = $mol_type_enforce<
		`Li-Mn-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M7A8358W = $mol_type_enforce<
		`Ce-Eu-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6K043030 = $mol_type_enforce<
		`Be-Al-Zn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XWINPUPW = $mol_type_enforce<
		`Zn-Ge-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9GY43FIK = $mol_type_enforce<
		`Pr-Ho-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SZN2TESK = $mol_type_enforce<
		`Tb-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TN8H2ZMR = $mol_type_enforce<
		`Li-Sm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IALHEWAX = $mol_type_enforce<
		`Dy-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MPX35WNN = $mol_type_enforce<
		`Ba-Ca-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L3HAHUI0 = $mol_type_enforce<
		`Ho-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CSIOFSVH = $mol_type_enforce<
		`Er-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KY13GFL8 = $mol_type_enforce<
		`Ca-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DFPQRUUP = $mol_type_enforce<
		`Os-Pd-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__91DOQ56X = $mol_type_enforce<
		`Pr-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UNY9TZ1S = $mol_type_enforce<
		`Cr-Ag-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A9LET8OU = $mol_type_enforce<
		`La-Ce-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LJYKG8PZ = $mol_type_enforce<
		`Mn-Cu-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TVRXW90R = $mol_type_enforce<
		`Yb-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BJXO7IKS = $mol_type_enforce<
		`La-Nd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__29KICLUB = $mol_type_enforce<
		`Ce-Ho-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GPQOMG53 = $mol_type_enforce<
		`Re-Ag-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VO7OZLRB = $mol_type_enforce<
		`Tl-Mo-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QTH2W68M = $mol_type_enforce<
		`Sm-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__875I427P = $mol_type_enforce<
		`Co-Ir-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UV1T4MCC = $mol_type_enforce<
		`Pm-Gd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UYLQW9EV = $mol_type_enforce<
		`Ce-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BURA2H7X = $mol_type_enforce<
		`Ce-Sm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WEFPHYUB = $mol_type_enforce<
		`La-Tb-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__16AMRPXJ = $mol_type_enforce<
		`Yb-Gd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CCH18SPS = $mol_type_enforce<
		`Cu-Ni-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A3IXZUCA = $mol_type_enforce<
		`Rb-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YBLYI5MA = $mol_type_enforce<
		`Yb-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CXQMKDSZ = $mol_type_enforce<
		`Nd-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HGRA8LHM = $mol_type_enforce<
		`Tl-Cd-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K8YH2HZW = $mol_type_enforce<
		`Tb-Sm-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R6NAA4HJ = $mol_type_enforce<
		`Sm-Gd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y3D5D2JE = $mol_type_enforce<
		`Tb-Yb-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JH1HH5UB = $mol_type_enforce<
		`Li-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZN4WATNX = $mol_type_enforce<
		`Pr-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VN1BOIQO = $mol_type_enforce<
		`Mg-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G1OP3V0Q = $mol_type_enforce<
		`La-Ce-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WH5A9KG1 = $mol_type_enforce<
		`Th-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CYANJZBU = $mol_type_enforce<
		`Nd-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OY0FGI9S = $mol_type_enforce<
		`Eu-Hf-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__35WY3YHR = $mol_type_enforce<
		`Ce-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EIDIBKHF = $mol_type_enforce<
		`Gd-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5VYG3BTQ = $mol_type_enforce<
		`Er-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QKCSX62G = $mol_type_enforce<
		`Ca-Pm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YXTFVFVK = $mol_type_enforce<
		`Co-Cu-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__60ZG2432 = $mol_type_enforce<
		`Yb-Eu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E237AWXH = $mol_type_enforce<
		`Sm-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TLHF63NL = $mol_type_enforce<
		`Y-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G47JNT1F = $mol_type_enforce<
		`Y-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OMEQ3NUG = $mol_type_enforce<
		`V-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KRWBONDX = $mol_type_enforce<
		`Ce-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y9Y69DKE = $mol_type_enforce<
		`Cs-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NY1A0PNP = $mol_type_enforce<
		`Nd-Dy-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HWG7FW0V = $mol_type_enforce<
		`Li-Ho-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZX7OYKN3 = $mol_type_enforce<
		`Si-Ag-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R1N7NKBS = $mol_type_enforce<
		`Yb-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4DBGS5KT = $mol_type_enforce<
		`Tl-Cd-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__078YYX1X = $mol_type_enforce<
		`Tb-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VW6T4YZ0 = $mol_type_enforce<
		`Ce-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HNKJ5KKR = $mol_type_enforce<
		`Yb-Pr-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IKRPDPLS = $mol_type_enforce<
		`Nd-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XF2LDOYI = $mol_type_enforce<
		`Pr-Nd-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AA00NYU8 = $mol_type_enforce<
		`Li-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__66X7CWXB = $mol_type_enforce<
		`Yb-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PEDWJQ6N = $mol_type_enforce<
		`Tb-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NDDX4LJH = $mol_type_enforce<
		`La-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JBUV2QOU = $mol_type_enforce<
		`Nd-Dy-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__08KLYTPC = $mol_type_enforce<
		`Pm-Nd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HG7BGC6O = $mol_type_enforce<
		`Li-Tb-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CDF4PSPU = $mol_type_enforce<
		`Gd-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O3FI8YBO = $mol_type_enforce<
		`Li-La-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YZEUX7YT = $mol_type_enforce<
		`Pu-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZKHW2QAA = $mol_type_enforce<
		`Na-Ca-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6V9WAFZN = $mol_type_enforce<
		`Y-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4O812XSN = $mol_type_enforce<
		`Ce-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VI7QAWJ8 = $mol_type_enforce<
		`Hf-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4TK02H9A = $mol_type_enforce<
		`La-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CWR0UXJB = $mol_type_enforce<
		`Ho-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LEY2HNTE = $mol_type_enforce<
		`Ca-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1J4RY2GM = $mol_type_enforce<
		`Nd-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FK3T4ATI = $mol_type_enforce<
		`La-Tb-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NOY0QEM1 = $mol_type_enforce<
		`Yb-Gd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6WWR8D5V = $mol_type_enforce<
		`Tc-Pd-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IV3XHX2S = $mol_type_enforce<
		`Li-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GV45DZ9H = $mol_type_enforce<
		`Li-Sm-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MLZ1GYQU = $mol_type_enforce<
		`Be-Ge-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EFKE04NJ = $mol_type_enforce<
		`Ca-Tb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__51NL3YD9 = $mol_type_enforce<
		`K-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I891EXER = $mol_type_enforce<
		`Pm-Gd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TRCQX1BA = $mol_type_enforce<
		`La-Sm-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NSF3NCYZ = $mol_type_enforce<
		`Ca-Yb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BP65GX6I = $mol_type_enforce<
		`Nd-Gd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C0DCY294 = $mol_type_enforce<
		`Pm-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XN7QG689 = $mol_type_enforce<
		`Yb-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H2C7CKW6 = $mol_type_enforce<
		`Ce-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ANWDDMOY = $mol_type_enforce<
		`Dy-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZF4BIY05 = $mol_type_enforce<
		`Yb-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GIWTR56Y = $mol_type_enforce<
		`Cu-Pd-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SS4ES5BG = $mol_type_enforce<
		`La-Tb-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8ZD6KUCR = $mol_type_enforce<
		`Tm-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0FH8TAY8 = $mol_type_enforce<
		`Tb-Ho-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P5RNWCJL = $mol_type_enforce<
		`La-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7OXW4A36 = $mol_type_enforce<
		`Sm-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BV74ER8P = $mol_type_enforce<
		`Li-Mn-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7TL9OBYN = $mol_type_enforce<
		`Ce-Gd-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2MC3S66O = $mol_type_enforce<
		`Sc-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KLMKSTNC = $mol_type_enforce<
		`Ta-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3DN2IWRR = $mol_type_enforce<
		`Nd-Sm-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U13JCHPB = $mol_type_enforce<
		`Nd-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TJA39249 = $mol_type_enforce<
		`La-Er-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FO8RUPLO = $mol_type_enforce<
		`La-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KA0NQ23F = $mol_type_enforce<
		`Ca-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TA55IAG6 = $mol_type_enforce<
		`Re-Hg-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q5P1HY3U = $mol_type_enforce<
		`Tb-Dy-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CSRJR2PM = $mol_type_enforce<
		`La-Tb-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__22K2KIXB = $mol_type_enforce<
		`La-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R5FTO0TO = $mol_type_enforce<
		`Cu-Tc-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9X3WWIEX = $mol_type_enforce<
		`Li-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__93L2SOEZ = $mol_type_enforce<
		`Si-Ge-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G1JWBDH8 = $mol_type_enforce<
		`Gd-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZUMCAO4I = $mol_type_enforce<
		`Sm-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NJMQFVNX = $mol_type_enforce<
		`Na-Mg-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CXDCG3XY = $mol_type_enforce<
		`La-Ce-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H3TSOD6H = $mol_type_enforce<
		`Th-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HJ0B1C8V = $mol_type_enforce<
		`Y-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__76B8TOUJ = $mol_type_enforce<
		`La-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MI722NNH = $mol_type_enforce<
		`Dy-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DF88B45W = $mol_type_enforce<
		`La-Pr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OY1FR1X8 = $mol_type_enforce<
		`Ca-La-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H74LIG5A = $mol_type_enforce<
		`Pr-Dy-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZTO1DW0R = $mol_type_enforce<
		`Ce-Nd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T11BF1N5 = $mol_type_enforce<
		`Lu-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y10M6YET = $mol_type_enforce<
		`Y-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P6ZUHOUQ = $mol_type_enforce<
		`Li-Ce-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WP036VVG = $mol_type_enforce<
		`La-Eu-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3IXISGP4 = $mol_type_enforce<
		`Nd-Sm-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U8V7NON1 = $mol_type_enforce<
		`La-Tb-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B8TRUJWW = $mol_type_enforce<
		`Li-Ce-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__941F2N52 = $mol_type_enforce<
		`Dy-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CRF1T7D9 = $mol_type_enforce<
		`Zn-Ga-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WVW0BBVM = $mol_type_enforce<
		`Y-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZGZ3UPCI = $mol_type_enforce<
		`Li-Pm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XBMOQ7M9 = $mol_type_enforce<
		`Pm-Nd-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QQ77T8TF = $mol_type_enforce<
		`Pr-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I74VZUNP = $mol_type_enforce<
		`Ba-La-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8S0QC4E3 = $mol_type_enforce<
		`Fe-Co-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WV043HQD = $mol_type_enforce<
		`Pr-Nd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X5PZCDMG = $mol_type_enforce<
		`Tl-In-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RZCB0HTT = $mol_type_enforce<
		`Li-Pm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TTEB0D3W = $mol_type_enforce<
		`Nd-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RT7SH33A = $mol_type_enforce<
		`Pr-Nd-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CXPP06GW = $mol_type_enforce<
		`Pr-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9DSEJ0BN = $mol_type_enforce<
		`Ce-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NUN7N65N = $mol_type_enforce<
		`Tb-Ce-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9DJ43ZWP = $mol_type_enforce<
		`V-Cr-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V5NTENU0 = $mol_type_enforce<
		`Fe-Rh-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VM0ED2K3 = $mol_type_enforce<
		`Cs-K-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BDRCN5IM = $mol_type_enforce<
		`Er-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9AI6Y0XT = $mol_type_enforce<
		`Tb-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JG1E3XB9 = $mol_type_enforce<
		`K-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DWDRALZH = $mol_type_enforce<
		`Gd-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UDXQ2QZB = $mol_type_enforce<
		`La-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QPBKLGZG = $mol_type_enforce<
		`Yb-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K26AT2LR = $mol_type_enforce<
		`Ho-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TEO52D4M = $mol_type_enforce<
		`Pr-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EOMGCIWO = $mol_type_enforce<
		`Mg-V-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__10E9CLFH = $mol_type_enforce<
		`Ta-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q0FCRPJ0 = $mol_type_enforce<
		`Li-Mg-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CBKAR1SZ = $mol_type_enforce<
		`Nd-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N2DO8Y9B = $mol_type_enforce<
		`Tm-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1G3QCU4X = $mol_type_enforce<
		`K-Hf-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VML8YYLQ = $mol_type_enforce<
		`Cs-Mg-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7OFCFK2W = $mol_type_enforce<
		`Pr-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W5DOTCQ0 = $mol_type_enforce<
		`Ba-Gd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7J0MQGH4 = $mol_type_enforce<
		`Sm-Er-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XPF653CF = $mol_type_enforce<
		`Yb-Eu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TWEL81RP = $mol_type_enforce<
		`Pr-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J6FXZA5A = $mol_type_enforce<
		`La-Pm-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T55YB62O = $mol_type_enforce<
		`Li-Nd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2SZPW0K9 = $mol_type_enforce<
		`Yb-Dy-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GPPBGJPW = $mol_type_enforce<
		`Li-Gd-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C1LQND6L = $mol_type_enforce<
		`Ta-Nb-Tl`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HI40Q5DU = $mol_type_enforce<
		`Fe-Cu-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HTXOLQAO = $mol_type_enforce<
		`Pm-Pr-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RCI4TSMI = $mol_type_enforce<
		`Fe-Cu-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__42BF78ZU = $mol_type_enforce<
		`Dy-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1L0X4FCS = $mol_type_enforce<
		`Nb-Hg-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FOLLL327 = $mol_type_enforce<
		`Er-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HS4F3U0C = $mol_type_enforce<
		`Sr-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WWTP37GF = $mol_type_enforce<
		`Dy-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2XX0IT3J = $mol_type_enforce<
		`Tb-Yb-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QGDCK5GH = $mol_type_enforce<
		`Nd-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MNRE88C2 = $mol_type_enforce<
		`Be-Zn-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B23P6LQS = $mol_type_enforce<
		`Eu-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KJJZIYWP = $mol_type_enforce<
		`Yb-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7BE5E2LD = $mol_type_enforce<
		`Ce-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z0F8GXTE = $mol_type_enforce<
		`Gd-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1HQUBE5M = $mol_type_enforce<
		`Tl-Si-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2IPDKAL4 = $mol_type_enforce<
		`Sm-Dy-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SJCH2CMR = $mol_type_enforce<
		`La-Ho-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GUKWE2SC = $mol_type_enforce<
		`Cs-Li-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WAYOELNY = $mol_type_enforce<
		`Cu-Bi-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NAPKERG2 = $mol_type_enforce<
		`Yb-Y-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TM267DVG = $mol_type_enforce<
		`Ce-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DM0UI01E = $mol_type_enforce<
		`Li-V-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WWZ6L0T8 = $mol_type_enforce<
		`Gd-Er-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BUTSVOTO = $mol_type_enforce<
		`Yb-Dy-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P48AJRPX = $mol_type_enforce<
		`Re-Ni-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2B3BUNEN = $mol_type_enforce<
		`Ca-Nd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UZ93P1QF = $mol_type_enforce<
		`Yb-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RGBGNXP7 = $mol_type_enforce<
		`La-Tb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CHNN4R1Q = $mol_type_enforce<
		`Ir-Rh-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6S8HXVL3 = $mol_type_enforce<
		`Al-Tl-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3FPQQ4N2 = $mol_type_enforce<
		`La-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IWU44TVW = $mol_type_enforce<
		`Nd-Gd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ULAGUDNR = $mol_type_enforce<
		`Al-Cd-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O8H3407F = $mol_type_enforce<
		`Li-Ho-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K8KM65DV = $mol_type_enforce<
		`Ho-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YGEMPDPK = $mol_type_enforce<
		`Li-Gd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DP1HII3Y = $mol_type_enforce<
		`Ga-Re-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PBM6CZ1D = $mol_type_enforce<
		`Yb-Lu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UWN5E5XB = $mol_type_enforce<
		`Li-Pr-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JQQKVU3E = $mol_type_enforce<
		`U-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XJME4Z5Q = $mol_type_enforce<
		`Yb-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FY2F3ZUC = $mol_type_enforce<
		`Ce-Ho-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CINDA5J6 = $mol_type_enforce<
		`Fe-Ir-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__08XEVSFX = $mol_type_enforce<
		`Gd-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VAAVUQ0A = $mol_type_enforce<
		`Tb-Gd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LEWE3OME = $mol_type_enforce<
		`Ca-La-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I5OIUYJ0 = $mol_type_enforce<
		`Ce-Nd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EI68Z3BJ = $mol_type_enforce<
		`Yb-Eu-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QTHNCQDD = $mol_type_enforce<
		`Ta-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6GPBQND5 = $mol_type_enforce<
		`Th-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DHK8BI7X = $mol_type_enforce<
		`Ca-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F8ZBVVK9 = $mol_type_enforce<
		`Er-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7I3FESU9 = $mol_type_enforce<
		`Sm-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TU7TBNOO = $mol_type_enforce<
		`Ce-Pm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__97O1XN31 = $mol_type_enforce<
		`Pr-Sm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3YFQ40E1 = $mol_type_enforce<
		`Ta-Tl-In`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OQXVWIYH = $mol_type_enforce<
		`Li-Tb-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C8AZDVK7 = $mol_type_enforce<
		`Ba-Pm-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MD8ZJAN6 = $mol_type_enforce<
		`Li-Gd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P7D37QQ5 = $mol_type_enforce<
		`Hg-B-Sb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X62KD3TJ = $mol_type_enforce<
		`Gd-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7NRC66LD = $mol_type_enforce<
		`Tb-Pr-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q85SZKBF = $mol_type_enforce<
		`Ce-Gd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RUBC63D1 = $mol_type_enforce<
		`Ho-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CHETQYTE = $mol_type_enforce<
		`Y-U-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WX5W2W86 = $mol_type_enforce<
		`Ir-Pt-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JDPUIQCS = $mol_type_enforce<
		`La-Tb-Yb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MPQW2Q76 = $mol_type_enforce<
		`Li-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I1EWZYBF = $mol_type_enforce<
		`Tm-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TUB3JENG = $mol_type_enforce<
		`Tb-Pr-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E29Y2QV7 = $mol_type_enforce<
		`Pr-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OO2CC1FR = $mol_type_enforce<
		`Re-Bi-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VT43VM0Q = $mol_type_enforce<
		`Co-Cu-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FCJQ3M2D = $mol_type_enforce<
		`Nd-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J5PARHQY = $mol_type_enforce<
		`La-Pm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4W77WVV2 = $mol_type_enforce<
		`Ca-Eu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UXC9382F = $mol_type_enforce<
		`Ba-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2T38JS4E = $mol_type_enforce<
		`Na-Nb-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JUZJ65F4 = $mol_type_enforce<
		`Cs-Li-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C76RBV11 = $mol_type_enforce<
		`Gd-Dy-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5AB5DOB7 = $mol_type_enforce<
		`La-Ce-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WZAXFOFI = $mol_type_enforce<
		`Cu-Re-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1DNJXPLV = $mol_type_enforce<
		`Li-Mg-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VTOY3C7F = $mol_type_enforce<
		`Ce-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HGRST9B5 = $mol_type_enforce<
		`Ca-La-Yb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__68QKG0S7 = $mol_type_enforce<
		`Ce-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GB03NZUJ = $mol_type_enforce<
		`Zn-Cd-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__07XI2DC8 = $mol_type_enforce<
		`Nd-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DRSAPWVU = $mol_type_enforce<
		`V-Fe-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QMETIDE9 = $mol_type_enforce<
		`Tb-Dy-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4MUHVRGC = $mol_type_enforce<
		`Hf-Th-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VQTOZVFX = $mol_type_enforce<
		`Sc-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KDFEJAS5 = $mol_type_enforce<
		`La-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T79WFE66 = $mol_type_enforce<
		`Al-In-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QYQGQ5R2 = $mol_type_enforce<
		`Be-Ga-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9K7RE1FB = $mol_type_enforce<
		`Os-Ru-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KHFXFCCE = $mol_type_enforce<
		`Ag-Ge-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8RPS2PZE = $mol_type_enforce<
		`Pm-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5YNA9CJO = $mol_type_enforce<
		`Li-La-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WZ2BD433 = $mol_type_enforce<
		`Cs-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__64O151HM = $mol_type_enforce<
		`Ce-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CB2DCXV3 = $mol_type_enforce<
		`Pr-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1624KIJH = $mol_type_enforce<
		`Li-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PECAI3HW = $mol_type_enforce<
		`La-Ho-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XJ7CG4FS = $mol_type_enforce<
		`Nd-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P2EKHYP2 = $mol_type_enforce<
		`Th-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S46X2KZQ = $mol_type_enforce<
		`Er-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3VGMQP7N = $mol_type_enforce<
		`Gd-Y-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NP8JW5A2 = $mol_type_enforce<
		`Lu-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__88PGM2DI = $mol_type_enforce<
		`Lu-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GMOAOFB5 = $mol_type_enforce<
		`Ce-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__45529LXL = $mol_type_enforce<
		`Ce-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y8O3Y3P0 = $mol_type_enforce<
		`Li-Ce-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ESURSLVD = $mol_type_enforce<
		`Ce-Th-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W88Y2FFV = $mol_type_enforce<
		`Li-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UA9GC7F2 = $mol_type_enforce<
		`Yb-Ho-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZYLJ40KB = $mol_type_enforce<
		`Li-Pm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZKX9J30K = $mol_type_enforce<
		`Ce-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PAK6J3ZM = $mol_type_enforce<
		`Cs-K-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YE50ROUT = $mol_type_enforce<
		`Tb-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OK4IJ80U = $mol_type_enforce<
		`Ce-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WEJ2WARJ = $mol_type_enforce<
		`Ho-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__62ECPU2I = $mol_type_enforce<
		`Y-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0O7P5GD7 = $mol_type_enforce<
		`Gd-Dy-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__88XZO28G = $mol_type_enforce<
		`Gd-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WBT0XUIF = $mol_type_enforce<
		`Li-Cr-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__206FVAKA = $mol_type_enforce<
		`Co-Bi-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__99043CWS = $mol_type_enforce<
		`Gd-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OCQ4B7Z0 = $mol_type_enforce<
		`Co-Ru-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RTR0IOPI = $mol_type_enforce<
		`Gd-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7768WVID = $mol_type_enforce<
		`Li-La-Ce`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6VUMUFVO = $mol_type_enforce<
		`Be-Al-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PCANO7V3 = $mol_type_enforce<
		`Gd-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KY0UZO3B = $mol_type_enforce<
		`Pr-Dy-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P42Y1B4Z = $mol_type_enforce<
		`Yb-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F2TQIVY4 = $mol_type_enforce<
		`La-Gd-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9C9U281I = $mol_type_enforce<
		`Tl-Cu-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7H4SMDYW = $mol_type_enforce<
		`Cr-Ag-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IVL3RBUK = $mol_type_enforce<
		`Tb-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HO8US3A1 = $mol_type_enforce<
		`Nd-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KGM5M4HO = $mol_type_enforce<
		`Eu-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZPH7U0TT = $mol_type_enforce<
		`Ga-Ge-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PK34HJDK = $mol_type_enforce<
		`Li-Pm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SFJ7TW66 = $mol_type_enforce<
		`Li-Nd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X7FE3T39 = $mol_type_enforce<
		`Ba-Pr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__23RIZ986 = $mol_type_enforce<
		`Li-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NMYUJJ3G = $mol_type_enforce<
		`Pr-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WJO2PNOK = $mol_type_enforce<
		`Ce-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LDJNFO5Y = $mol_type_enforce<
		`Dy-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZO81HKGI = $mol_type_enforce<
		`Ca-Eu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BXQADY2R = $mol_type_enforce<
		`Ni-Pd-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RZZQHX0F = $mol_type_enforce<
		`Er-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I29N4OSX = $mol_type_enforce<
		`Ba-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MPS7K323 = $mol_type_enforce<
		`Pr-Nd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8KTW1R1B = $mol_type_enforce<
		`Ce-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__24YLT87R = $mol_type_enforce<
		`Na-Mg-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7SWJ7IYS = $mol_type_enforce<
		`Cu-Ag-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DI06H5A2 = $mol_type_enforce<
		`La-Ce-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IFJCH6QR = $mol_type_enforce<
		`La-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5P04M9J0 = $mol_type_enforce<
		`Tc-Ni-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B168XSRP = $mol_type_enforce<
		`Ti-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K6UH8GDN = $mol_type_enforce<
		`Tb-Ce-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CE2Q5TSE = $mol_type_enforce<
		`Hf-U-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2PYPCMBB = $mol_type_enforce<
		`Lu-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N0QV6MFR = $mol_type_enforce<
		`Ta-V-In`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EKVDL5X7 = $mol_type_enforce<
		`Co-Ir-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1LLCCI03 = $mol_type_enforce<
		`Na-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GZRI8Y88 = $mol_type_enforce<
		`Yb-Hf-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7STMVEI8 = $mol_type_enforce<
		`Mn-Cu-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8SMSII8T = $mol_type_enforce<
		`Ce-Nd-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MEOVOILF = $mol_type_enforce<
		`Pr-Gd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WX7ZXK12 = $mol_type_enforce<
		`Ca-Pm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__31GE9PO3 = $mol_type_enforce<
		`Nd-Gd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LT1O7BFH = $mol_type_enforce<
		`Yb-Eu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1785HN3J = $mol_type_enforce<
		`Al-Hg-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N07E8YLG = $mol_type_enforce<
		`V-Cr-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I28NIB9C = $mol_type_enforce<
		`Ce-Nd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A773TRH0 = $mol_type_enforce<
		`Ho-Er-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TZQVBHMG = $mol_type_enforce<
		`Tb-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9W2T9ECL = $mol_type_enforce<
		`Ca-Tb-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LOIHB07G = $mol_type_enforce<
		`Nd-Ho-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TU3CMZYI = $mol_type_enforce<
		`Pu-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QMA34VJM = $mol_type_enforce<
		`V-Cu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8AALAGC4 = $mol_type_enforce<
		`Tb-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1PF5OU4G = $mol_type_enforce<
		`V-Cu-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__74304LNI = $mol_type_enforce<
		`Fe-Ni-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7DGWNI6Q = $mol_type_enforce<
		`Lu-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A8F7ZTQJ = $mol_type_enforce<
		`Fe-Ni-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8QLOPQZX = $mol_type_enforce<
		`Ca-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EJHM7NZJ = $mol_type_enforce<
		`Ca-Ce-Eu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7WSD5P9Y = $mol_type_enforce<
		`Rb-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OIKA217P = $mol_type_enforce<
		`Nd-Sm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E4PNZMGL = $mol_type_enforce<
		`Co-Re-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__724O9GD2 = $mol_type_enforce<
		`Gd-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BKMELB3A = $mol_type_enforce<
		`Eu-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XN5HACMY = $mol_type_enforce<
		`Pu-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LPHRRFLV = $mol_type_enforce<
		`Pm-Sm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0BYWSFF3 = $mol_type_enforce<
		`La-Ce-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4ACMBNH0 = $mol_type_enforce<
		`Ga-Sn-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XX02YIR0 = $mol_type_enforce<
		`Ba-Sr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O04VL3F5 = $mol_type_enforce<
		`Co-Re-Hg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7PVH28OS = $mol_type_enforce<
		`La-Lu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JPJ65N35 = $mol_type_enforce<
		`Cs-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8VP2TB85 = $mol_type_enforce<
		`La-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__58F9XXKH = $mol_type_enforce<
		`Ce-Sm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QQUNK04V = $mol_type_enforce<
		`Co-Ni-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HNDQXOVM = $mol_type_enforce<
		`Mg-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__R3RU48PT = $mol_type_enforce<
		`Sc-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VGLX1KBP = $mol_type_enforce<
		`Sm-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BRCMOM6E = $mol_type_enforce<
		`Ce-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L1JSJVEC = $mol_type_enforce<
		`Li-Y-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NFZLRAJ4 = $mol_type_enforce<
		`Tb-Dy-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__63YW5K25 = $mol_type_enforce<
		`Cs-Rb-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IKTDMV5A = $mol_type_enforce<
		`Cs-Rb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GR7ZBCK8 = $mol_type_enforce<
		`Ce-Gd-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YELTB7KV = $mol_type_enforce<
		`Mg-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9JHT1NS5 = $mol_type_enforce<
		`K-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EB4UJUVG = $mol_type_enforce<
		`Rb-Na-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z3MFUJYI = $mol_type_enforce<
		`Ba-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CKERNKMG = $mol_type_enforce<
		`Ca-Tb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WYPLB2BD = $mol_type_enforce<
		`Pr-Er-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2OMD5Q99 = $mol_type_enforce<
		`Si-Ge-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UPYZNOR7 = $mol_type_enforce<
		`Y-Er-Hf`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OFAVDNRY = $mol_type_enforce<
		`Zn-Si-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D7S1W5CW = $mol_type_enforce<
		`Li-Pm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WSLL4W6E = $mol_type_enforce<
		`Yb-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__53SM65QO = $mol_type_enforce<
		`La-Dy-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TJ86693B = $mol_type_enforce<
		`La-Pm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WMILG4FA = $mol_type_enforce<
		`Hf-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9B88B20O = $mol_type_enforce<
		`K-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MPSZM9DI = $mol_type_enforce<
		`Lu-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GXKLY8PP = $mol_type_enforce<
		`Li-Pu-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z6ICMZPB = $mol_type_enforce<
		`Cd-Ga-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6EUSVF57 = $mol_type_enforce<
		`Cd-Ga-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HIPF96BH = $mol_type_enforce<
		`Gd-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__28FHUAQG = $mol_type_enforce<
		`Cu-W-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__COV0N184 = $mol_type_enforce<
		`Yb-Nd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M1DMV0N3 = $mol_type_enforce<
		`Er-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UDNP96WX = $mol_type_enforce<
		`Tb-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RX76TWK7 = $mol_type_enforce<
		`Er-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2C4OZIVV = $mol_type_enforce<
		`Tc-Pt-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U6L3OZZ1 = $mol_type_enforce<
		`Dy-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J1XAOQ85 = $mol_type_enforce<
		`Cu-Pd-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KC38GTX9 = $mol_type_enforce<
		`Y-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5061LIE1 = $mol_type_enforce<
		`La-Yb-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MZ1YJI1Q = $mol_type_enforce<
		`Lu-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WHDVSY2D = $mol_type_enforce<
		`Cr-Cu-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KIYMQ6YO = $mol_type_enforce<
		`Y-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0GUXC17Q = $mol_type_enforce<
		`Li-La-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__42KTYWDD = $mol_type_enforce<
		`Tb-Sm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4IV7ILTC = $mol_type_enforce<
		`Tb-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z4S3X498 = $mol_type_enforce<
		`Ce-Er-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BS684T60 = $mol_type_enforce<
		`Gd-Dy-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7M0INN27 = $mol_type_enforce<
		`Ca-Ce-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QYJSNFLQ = $mol_type_enforce<
		`Ta-Tl-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WFKZDJ5E = $mol_type_enforce<
		`Pr-Nd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3AVP15OZ = $mol_type_enforce<
		`Li-Pr-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N9POKPYP = $mol_type_enforce<
		`La-Pr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NEV7NPMK = $mol_type_enforce<
		`Tm-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8OBRDVZ1 = $mol_type_enforce<
		`Ce-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KR7UMWS3 = $mol_type_enforce<
		`Ba-Yb-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TNC49516 = $mol_type_enforce<
		`Na-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KKPG9ZE8 = $mol_type_enforce<
		`Er-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__REC92A8Y = $mol_type_enforce<
		`Er-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P3NZW3PD = $mol_type_enforce<
		`Cd-Ge-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0IDQ5Q4N = $mol_type_enforce<
		`Ba-Eu-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J9EV0Y8G = $mol_type_enforce<
		`Re-Ag-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A1YW9E4F = $mol_type_enforce<
		`Pr-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S5WD910K = $mol_type_enforce<
		`Lu-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3RLCX0GS = $mol_type_enforce<
		`Fe-Co-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H5YD7OSP = $mol_type_enforce<
		`Li-Mn-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SHA6F1P9 = $mol_type_enforce<
		`Nd-Ho-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DUF8Q2T2 = $mol_type_enforce<
		`La-Pm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__55ELISR5 = $mol_type_enforce<
		`Mg-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MMFGURUP = $mol_type_enforce<
		`Ce-Pm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9VZDAUII = $mol_type_enforce<
		`Pd-Ru-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JRWJAJI9 = $mol_type_enforce<
		`Gd-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N8AF45PP = $mol_type_enforce<
		`Nd-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1RHNU284 = $mol_type_enforce<
		`Pr-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q780JTY9 = $mol_type_enforce<
		`Sc-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__61YAB6FV = $mol_type_enforce<
		`Co-Cu-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6369BG62 = $mol_type_enforce<
		`Eu-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0V7U1BKE = $mol_type_enforce<
		`Y-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FQPXN5Q9 = $mol_type_enforce<
		`Tb-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z8VYONBW = $mol_type_enforce<
		`La-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__217DBRAV = $mol_type_enforce<
		`Th-Ti-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WGLBDMC8 = $mol_type_enforce<
		`Li-Nd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__14TU9862 = $mol_type_enforce<
		`Pm-Gd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GMXIZSCI = $mol_type_enforce<
		`Tl-Cu-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GIDSFO7G = $mol_type_enforce<
		`Pr-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0CS3A69L = $mol_type_enforce<
		`Ca-Tb-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0O9FJYIL = $mol_type_enforce<
		`Co-Pd-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G8BQ7TCV = $mol_type_enforce<
		`Li-Pm-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZCQJ3T0P = $mol_type_enforce<
		`Cu-Os-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QF13DZMX = $mol_type_enforce<
		`Tb-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DKHAG8MA = $mol_type_enforce<
		`Ni-Ag-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6ZYNU0YD = $mol_type_enforce<
		`Li-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VBELM2F6 = $mol_type_enforce<
		`Na-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4QMO6BZ5 = $mol_type_enforce<
		`La-Sm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XD56K6EG = $mol_type_enforce<
		`Ca-La-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YR2ZE1KE = $mol_type_enforce<
		`Sr-Ca-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X91SJXXG = $mol_type_enforce<
		`La-Mn-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E0DHR4IF = $mol_type_enforce<
		`La-Th-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W548VJ9Q = $mol_type_enforce<
		`Tb-Ce-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IUQV561T = $mol_type_enforce<
		`Mo-Pb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KALVQMX4 = $mol_type_enforce<
		`Tb-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2YO8XHQX = $mol_type_enforce<
		`Al-Ga-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MKLDMCST = $mol_type_enforce<
		`V-Fe-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__03XX3QXD = $mol_type_enforce<
		`Nd-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P7M0P2SJ = $mol_type_enforce<
		`Tl-Si-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6OVK7UWG = $mol_type_enforce<
		`Tb-Ce-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3DUK0HKZ = $mol_type_enforce<
		`Cs-Pr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OQAPW4Q1 = $mol_type_enforce<
		`Nd-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9XO4060U = $mol_type_enforce<
		`Eu-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TF4Z0L2S = $mol_type_enforce<
		`La-Dy-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4M5CT2KU = $mol_type_enforce<
		`Mg-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JF6P47KV = $mol_type_enforce<
		`Li-Fe-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I0L7HSYW = $mol_type_enforce<
		`Na-Li-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XSAUAPHK = $mol_type_enforce<
		`La-Tb-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1QGE6TVX = $mol_type_enforce<
		`Th-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NKBWWFLQ = $mol_type_enforce<
		`Ce-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IA5LVLDU = $mol_type_enforce<
		`Dy-Lu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A7MPGM4F = $mol_type_enforce<
		`Nd-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4I4RDK1B = $mol_type_enforce<
		`Yb-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__747QZJQW = $mol_type_enforce<
		`Ga-Si-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O1RR9M74 = $mol_type_enforce<
		`Pr-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YJTWTSCE = $mol_type_enforce<
		`Eu-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DHW1N21A = $mol_type_enforce<
		`Hf-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZXG3XODP = $mol_type_enforce<
		`Pu-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FNQX0AWB = $mol_type_enforce<
		`Li-Nd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__05S7D7T4 = $mol_type_enforce<
		`Cu-Ag-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__30PQEOBJ = $mol_type_enforce<
		`Sm-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1OQZMH2Z = $mol_type_enforce<
		`Gd-Dy-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D3ZV6LJN = $mol_type_enforce<
		`Ho-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OWD8MKZP = $mol_type_enforce<
		`Cu-Ag-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XURA45A8 = $mol_type_enforce<
		`Tc-Ni-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A80NQZTW = $mol_type_enforce<
		`Y-Lu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z3SQS4NU = $mol_type_enforce<
		`Ni-Os-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KSB9GGNV = $mol_type_enforce<
		`Dy-Lu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CKHZ2JYD = $mol_type_enforce<
		`Fe-Cu-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8AFKM54M = $mol_type_enforce<
		`Ta-Tl-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AK91GEE2 = $mol_type_enforce<
		`Eu-Y-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__08JUSD05 = $mol_type_enforce<
		`Co-Pd-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FR2YKDKA = $mol_type_enforce<
		`Re-Hg-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PNCIN11X = $mol_type_enforce<
		`La-Yb-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4HK1Q01B = $mol_type_enforce<
		`Nd-Er-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4PCYGQY8 = $mol_type_enforce<
		`Tb-Yb-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SQ36CG8U = $mol_type_enforce<
		`Yb-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4DHAKZ8X = $mol_type_enforce<
		`K-Li-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O5VNMDGU = $mol_type_enforce<
		`Re-Tc-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M5H54J3C = $mol_type_enforce<
		`Cs-K-Al`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__584T7RBP = $mol_type_enforce<
		`Pr-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UY5CGLPT = $mol_type_enforce<
		`Yb-Eu-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T7F3BY8M = $mol_type_enforce<
		`Y-Th-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DIS91CE1 = $mol_type_enforce<
		`Yb-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__32NRAT8R = $mol_type_enforce<
		`Nd-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EN68LVCU = $mol_type_enforce<
		`Sm-Dy-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XJCUCCDQ = $mol_type_enforce<
		`Y-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J9FGTF5D = $mol_type_enforce<
		`Ce-Er-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S8LSJC1Y = $mol_type_enforce<
		`Re-Tc-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PNN3EW42 = $mol_type_enforce<
		`Ce-Nd-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JKMO9PEK = $mol_type_enforce<
		`Li-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PJSU7FEW = $mol_type_enforce<
		`Y-Tm-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LZ8TIG6J = $mol_type_enforce<
		`Al-Tl-Zn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZOTQ8CTZ = $mol_type_enforce<
		`Li-La-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AW74BL0D = $mol_type_enforce<
		`Pr-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9O6QQV54 = $mol_type_enforce<
		`Eu-Th-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ULNDH35B = $mol_type_enforce<
		`Pr-Nd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NBRN5NA9 = $mol_type_enforce<
		`Pm-Gd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q5LJBCHF = $mol_type_enforce<
		`Na-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MOVLEFSX = $mol_type_enforce<
		`Al-Zn-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TI6X6ZFJ = $mol_type_enforce<
		`Ba-Sm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JD4ELJE1 = $mol_type_enforce<
		`Y-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GOIHF9U1 = $mol_type_enforce<
		`Nd-Th-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VYC1AQL9 = $mol_type_enforce<
		`Co-Ir-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZFP57LAZ = $mol_type_enforce<
		`Yb-Gd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__63SXXMK1 = $mol_type_enforce<
		`Hg-Ge-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SO13RPRZ = $mol_type_enforce<
		`Ho-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M17GY8EG = $mol_type_enforce<
		`Pr-Tm-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y55PMIS9 = $mol_type_enforce<
		`Tb-Dy-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ECN1ZSXT = $mol_type_enforce<
		`Ir-Ru-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PU74Q36E = $mol_type_enforce<
		`Ce-Pm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JII1JCGF = $mol_type_enforce<
		`Tm-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FLVRDUAE = $mol_type_enforce<
		`Pm-Nd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2W557ST9 = $mol_type_enforce<
		`Yb-Gd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UNU88LWT = $mol_type_enforce<
		`La-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LPBXYLJX = $mol_type_enforce<
		`Sm-Pu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AGEUMCF7 = $mol_type_enforce<
		`Hf-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MUUYOQXB = $mol_type_enforce<
		`Ta-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P6NEQXLE = $mol_type_enforce<
		`Be-Sn-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__44UZLR1V = $mol_type_enforce<
		`Pm-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DBP2RVB9 = $mol_type_enforce<
		`Yb-Eu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9HKE2T3Q = $mol_type_enforce<
		`Ho-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z9ZR5YZ5 = $mol_type_enforce<
		`Tb-Dy-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1Q2IO6B6 = $mol_type_enforce<
		`Ce-Y-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I6BIXJN7 = $mol_type_enforce<
		`Al-Zn-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EL3KC2W5 = $mol_type_enforce<
		`Ca-La-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A11FVA31 = $mol_type_enforce<
		`Yb-Eu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9XQ2Z4V0 = $mol_type_enforce<
		`Cs-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E3W3VNQ0 = $mol_type_enforce<
		`Na-Ca-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AMMZZVGI = $mol_type_enforce<
		`Tb-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7KWGXFYQ = $mol_type_enforce<
		`Sr-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B582IOWR = $mol_type_enforce<
		`Tc-Ir-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XAFV415V = $mol_type_enforce<
		`Y-Hf-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4JX9IJOV = $mol_type_enforce<
		`Ti-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CTNNC31B = $mol_type_enforce<
		`Pr-Gd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C9VLJFF6 = $mol_type_enforce<
		`Co-Cu-Re`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F05D8C4T = $mol_type_enforce<
		`La-Y-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5MP13OZO = $mol_type_enforce<
		`Re-Sn-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AREZWQ0M = $mol_type_enforce<
		`Yb-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AEHI1668 = $mol_type_enforce<
		`Nd-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DJACCZLP = $mol_type_enforce<
		`Fe-Ni-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1QFW3O97 = $mol_type_enforce<
		`Pr-Nd-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OQD6MK0L = $mol_type_enforce<
		`Yb-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CA6QCJQ9 = $mol_type_enforce<
		`Ce-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZBKKALTO = $mol_type_enforce<
		`Ac-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XCIZP2B5 = $mol_type_enforce<
		`Zn-B-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PNLM6F5R = $mol_type_enforce<
		`La-Yb-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L1F5I6R3 = $mol_type_enforce<
		`Ba-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3BNWK228 = $mol_type_enforce<
		`Mn-Co-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TX258IKY = $mol_type_enforce<
		`Dy-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K70V66Q6 = $mol_type_enforce<
		`Er-Tm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7N6RC22W = $mol_type_enforce<
		`La-Y-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OES6CVAE = $mol_type_enforce<
		`Tc-Ir-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8WJT18XJ = $mol_type_enforce<
		`Pr-Er-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JVQRT6MY = $mol_type_enforce<
		`Yb-Ho-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__06XGGVVN = $mol_type_enforce<
		`Mn-Fe-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L9P3NUNB = $mol_type_enforce<
		`Ca-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NEC83XJ4 = $mol_type_enforce<
		`Pd-Ru-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NEH7LBKU = $mol_type_enforce<
		`Ce-Hf-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MINO33OE = $mol_type_enforce<
		`La-Pm-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V3I0KRSR = $mol_type_enforce<
		`Tb-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PZ2QDQE6 = $mol_type_enforce<
		`Ba-Eu-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OLLFNPYX = $mol_type_enforce<
		`Ta-Bi-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IA75MGDP = $mol_type_enforce<
		`Nd-Dy-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D30Z03AK = $mol_type_enforce<
		`Tl-B-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GNKRJTU0 = $mol_type_enforce<
		`Li-Hf-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3TF13RT1 = $mol_type_enforce<
		`Li-La-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KINB3KRL = $mol_type_enforce<
		`Al-Sn-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y6YXU8FR = $mol_type_enforce<
		`Ce-Pm-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5STKP6UN = $mol_type_enforce<
		`Ni-Au-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZYDGNHT7 = $mol_type_enforce<
		`Er-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V1UYM65T = $mol_type_enforce<
		`Pr-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UK82F9UY = $mol_type_enforce<
		`La-Nd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G8W41MZ3 = $mol_type_enforce<
		`Ni-Ag-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__00UGDBP0 = $mol_type_enforce<
		`La-Ce-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AW2KCML7 = $mol_type_enforce<
		`La-Yb-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HDQ5A8XX = $mol_type_enforce<
		`Pm-Nd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Q7XHVO8X = $mol_type_enforce<
		`Ce-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3VRU2X56 = $mol_type_enforce<
		`Eu-U-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RI5RF6X4 = $mol_type_enforce<
		`Pm-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JL3XJK1J = $mol_type_enforce<
		`Ce-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N7EKPY7D = $mol_type_enforce<
		`Li-Cu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3RWFOW41 = $mol_type_enforce<
		`Sm-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JFZGMOCL = $mol_type_enforce<
		`Tb-Nd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1ZZZD8I1 = $mol_type_enforce<
		`Nd-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5OQYMDSG = $mol_type_enforce<
		`Rb-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UG9KFWMI = $mol_type_enforce<
		`Pr-Y-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O9BFMIIV = $mol_type_enforce<
		`Y-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P6PLBJH0 = $mol_type_enforce<
		`Cd-Mo-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OFXR6363 = $mol_type_enforce<
		`Li-Er-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EK2QJUVS = $mol_type_enforce<
		`V-Cu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I6WL5H79 = $mol_type_enforce<
		`Pm-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6XZ964SU = $mol_type_enforce<
		`Yb-Er-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UX2QWDSF = $mol_type_enforce<
		`Tb-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OG3UBZAE = $mol_type_enforce<
		`Ca-Ti-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__390CIFSP = $mol_type_enforce<
		`Tb-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__65E9XO57 = $mol_type_enforce<
		`Y-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZI9P8EJE = $mol_type_enforce<
		`Rb-Li-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SESVA5BH = $mol_type_enforce<
		`Hg-Sb-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MDIZLERG = $mol_type_enforce<
		`La-Dy-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6Z7KH9OR = $mol_type_enforce<
		`Pd-Rh-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MO1588YP = $mol_type_enforce<
		`K-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9WRDNKOM = $mol_type_enforce<
		`Li-La-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XMRELZFS = $mol_type_enforce<
		`Pr-Dy-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YT3XS2GR = $mol_type_enforce<
		`Yb-Pr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__J8IEDJ7L = $mol_type_enforce<
		`La-Nd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6J7626NE = $mol_type_enforce<
		`Sm-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V33N49P6 = $mol_type_enforce<
		`Ce-Eu-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4UP64KB5 = $mol_type_enforce<
		`Nd-Sc-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F9VNAE8R = $mol_type_enforce<
		`Ag-Ir-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SBDVKJ6D = $mol_type_enforce<
		`Pm-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RK5O57I6 = $mol_type_enforce<
		`Yb-Dy-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2UTXC2V7 = $mol_type_enforce<
		`U-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O6X559C6 = $mol_type_enforce<
		`Ca-Tb-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6WER0J95 = $mol_type_enforce<
		`Tb-Yb-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HQAWLPD7 = $mol_type_enforce<
		`Ce-Pm-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A7VBJ5IT = $mol_type_enforce<
		`Sr-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0NUI8J9R = $mol_type_enforce<
		`Co-Ni-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6VSYS9VQ = $mol_type_enforce<
		`Rb-Mg-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3WHY7HI6 = $mol_type_enforce<
		`Ti-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3SZ829LR = $mol_type_enforce<
		`Th-U-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KQA4DIX3 = $mol_type_enforce<
		`Yb-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HPWQN54W = $mol_type_enforce<
		`Ta-Cu-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VILIOMT3 = $mol_type_enforce<
		`La-Yb-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0L3YZ7IY = $mol_type_enforce<
		`Pr-Ho-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__10JHSH9U = $mol_type_enforce<
		`Rb-Na-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PA4VPJ3X = $mol_type_enforce<
		`Ce-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IWA812R8 = $mol_type_enforce<
		`Ce-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VDZIBE1Y = $mol_type_enforce<
		`Eu-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O5AR9O06 = $mol_type_enforce<
		`La-Ho-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JCISBN91 = $mol_type_enforce<
		`Cd-Ga-Bi`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UZVAWA9Y = $mol_type_enforce<
		`Eu-Pu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JJSTXU5K = $mol_type_enforce<
		`Nd-Gd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__A5RH9RCS = $mol_type_enforce<
		`Na-Li-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4VM5OF5E = $mol_type_enforce<
		`Tb-Tm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F3ZJK9Z9 = $mol_type_enforce<
		`Th-Sc-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MZZIVHS6 = $mol_type_enforce<
		`Lu-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KBI34KLS = $mol_type_enforce<
		`Tb-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5XFZF0VO = $mol_type_enforce<
		`Tb-Sm-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EUZV6NL6 = $mol_type_enforce<
		`Dy-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KT25VVAT = $mol_type_enforce<
		`Rb-Li-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2ZGNGUMS = $mol_type_enforce<
		`Li-Ta-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9XY8DL2U = $mol_type_enforce<
		`Re-Tc-Pt`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LACXD216 = $mol_type_enforce<
		`Pm-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IJ028MDS = $mol_type_enforce<
		`La-Gd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8M2O2RDI = $mol_type_enforce<
		`La-Dy-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y2G9EDE1 = $mol_type_enforce<
		`Mg-Ti-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3WYZFFFW = $mol_type_enforce<
		`Nd-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U19JRGW9 = $mol_type_enforce<
		`Dy-Y-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9YZ7U2S9 = $mol_type_enforce<
		`Tb-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ETX48OP8 = $mol_type_enforce<
		`Pd-Pt-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IWMM85FJ = $mol_type_enforce<
		`Cs-Rb-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FZ8TZ5FE = $mol_type_enforce<
		`Ca-Nd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F7A3P3RP = $mol_type_enforce<
		`La-Pm-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZC9AOCNF = $mol_type_enforce<
		`Sm-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VIXL21VW = $mol_type_enforce<
		`Hg-Bi-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NEZD5QVJ = $mol_type_enforce<
		`Co-Ag-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TQ6QFU1I = $mol_type_enforce<
		`Ce-Pm-Pr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3OVGIGOB = $mol_type_enforce<
		`Cu-Re-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8ZXOP5KK = $mol_type_enforce<
		`La-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TC9P659F = $mol_type_enforce<
		`Ba-Pr-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OUN4ED0R = $mol_type_enforce<
		`La-Yb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ANC2RLAU = $mol_type_enforce<
		`Li-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JUOWZ7L6 = $mol_type_enforce<
		`Th-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L9F5WGMM = $mol_type_enforce<
		`Li-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PPCJ54U9 = $mol_type_enforce<
		`Zn-Si-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z4IXYNQL = $mol_type_enforce<
		`Sc-Nb-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OZCKEIBO = $mol_type_enforce<
		`Sm-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__O3QAYPA0 = $mol_type_enforce<
		`Li-La-Pm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0R4U35OF = $mol_type_enforce<
		`Li-Y-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1WUP66QP = $mol_type_enforce<
		`Y-Hf-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__40Z7QG51 = $mol_type_enforce<
		`Ti-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZGT7QIZ4 = $mol_type_enforce<
		`Sm-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N6RGULXN = $mol_type_enforce<
		`Li-Cu-Ni`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AFEMYGO0 = $mol_type_enforce<
		`Ce-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P8Y5WQN4 = $mol_type_enforce<
		`Tm-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4HPEY7GB = $mol_type_enforce<
		`Yb-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WM12KKWE = $mol_type_enforce<
		`Ca-Yb-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5AZSJZ4I = $mol_type_enforce<
		`Ce-Eu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__47W9EIC2 = $mol_type_enforce<
		`Nd-Er-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9BUOMBPA = $mol_type_enforce<
		`Hf-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WZXU4IPL = $mol_type_enforce<
		`Co-Ag-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DMQTP62P = $mol_type_enforce<
		`Co-Ir-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PT5E7O0H = $mol_type_enforce<
		`Ca-Mn-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FPD3COW9 = $mol_type_enforce<
		`Pu-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QTEBFGHI = $mol_type_enforce<
		`V-Bi-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LZ2S77ZQ = $mol_type_enforce<
		`Y-Hf-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ETNVXHJ9 = $mol_type_enforce<
		`Dy-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8RNK5RD1 = $mol_type_enforce<
		`Ce-Sm-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__33QOSB5I = $mol_type_enforce<
		`Ni-Ir-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S6IFIKV5 = $mol_type_enforce<
		`Re-Os-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4VWVC1NP = $mol_type_enforce<
		`Ce-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ORYU32SA = $mol_type_enforce<
		`Er-Hf-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QHD8EFTP = $mol_type_enforce<
		`Cr-Fe-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IWE295CL = $mol_type_enforce<
		`Li-Nd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CHK30BGA = $mol_type_enforce<
		`Eu-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DYEOJ5BL = $mol_type_enforce<
		`Yb-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5KG9TTVX = $mol_type_enforce<
		`Ga-Ge-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2GVP6OQK = $mol_type_enforce<
		`Eu-Sc-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NY4NIR6H = $mol_type_enforce<
		`Li-Pr-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6FWGAL91 = $mol_type_enforce<
		`Yb-Pr-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__03E4GPOQ = $mol_type_enforce<
		`Sm-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4AS1HH0C = $mol_type_enforce<
		`La-Nd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W2QGPD1Y = $mol_type_enforce<
		`Ce-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QNF9VFPI = $mol_type_enforce<
		`Li-Pm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4XY4T2UH = $mol_type_enforce<
		`Y-Sc-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P01XGYD1 = $mol_type_enforce<
		`Pr-Sm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9F0FB09R = $mol_type_enforce<
		`Pr-U-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NKHX50PV = $mol_type_enforce<
		`Re-Tc-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NWJVYC22 = $mol_type_enforce<
		`Nd-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2QKSPSPA = $mol_type_enforce<
		`Tl-In-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2C7C7S39 = $mol_type_enforce<
		`Yb-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9DS4LFXV = $mol_type_enforce<
		`Tb-Pr-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AWKY9TQ4 = $mol_type_enforce<
		`Mn-Fe-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P0DP26U8 = $mol_type_enforce<
		`Ce-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5AGGKEOH = $mol_type_enforce<
		`K-Ti-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C4WK6QOD = $mol_type_enforce<
		`Ce-Sm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__96RDIRQ5 = $mol_type_enforce<
		`Ni-Ag-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5T964EFF = $mol_type_enforce<
		`K-Mg-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XIFBKKMQ = $mol_type_enforce<
		`Tb-Nd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FUNT3FKL = $mol_type_enforce<
		`Pu-Cr-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MH4P4ODF = $mol_type_enforce<
		`La-Gd-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SWO67FFM = $mol_type_enforce<
		`Pm-Nd-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TM0LBS0T = $mol_type_enforce<
		`La-Dy-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BV5S1UU9 = $mol_type_enforce<
		`Tb-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AHQ8WAKG = $mol_type_enforce<
		`Cu-Tc-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IT57Q16J = $mol_type_enforce<
		`Li-Tb-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UERTA0LK = $mol_type_enforce<
		`Tb-Sm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YC2MXOY4 = $mol_type_enforce<
		`Sr-Nd-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S74RFCRL = $mol_type_enforce<
		`Pm-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4JRRETDY = $mol_type_enforce<
		`K-Rb-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U3HPMBNS = $mol_type_enforce<
		`Gd-Sc-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KOXAR9EE = $mol_type_enforce<
		`Y-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OHCDO37B = $mol_type_enforce<
		`Ce-Eu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CO81CS80 = $mol_type_enforce<
		`Yb-Nd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EWJCLFR4 = $mol_type_enforce<
		`Er-Hf-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0E50WN17 = $mol_type_enforce<
		`Pr-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4RQVWLT7 = $mol_type_enforce<
		`Eu-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0RJ52NNS = $mol_type_enforce<
		`Gd-Sc-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KWDY4G6E = $mol_type_enforce<
		`Li-Ce-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OM8I332Y = $mol_type_enforce<
		`Na-Hf-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0GG7OUL4 = $mol_type_enforce<
		`Sm-Gd-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E4EBW9RI = $mol_type_enforce<
		`La-Pr-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3VKVQ4BZ = $mol_type_enforce<
		`Ga-Re-Hg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZDOXAN9N = $mol_type_enforce<
		`Li-La-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1EVAE3CF = $mol_type_enforce<
		`Co-Ni-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y2IPSGI5 = $mol_type_enforce<
		`La-Tb-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__11FSIVSY = $mol_type_enforce<
		`Yb-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__106JH61X = $mol_type_enforce<
		`Er-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VXJ9OOXS = $mol_type_enforce<
		`Tl-Ga-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SKTDOPOV = $mol_type_enforce<
		`Yb-Sc-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RNF4M9Z4 = $mol_type_enforce<
		`Co-Ag-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IB74VNQR = $mol_type_enforce<
		`Li-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__H7TWGZ8V = $mol_type_enforce<
		`Rb-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KLXCS0Z4 = $mol_type_enforce<
		`K-Li-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5UCK82H8 = $mol_type_enforce<
		`Dy-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DN7MZLWR = $mol_type_enforce<
		`Pu-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__14SVW4K9 = $mol_type_enforce<
		`Li-La-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PS549K3G = $mol_type_enforce<
		`Tb-Zr-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7NV8CMD1 = $mol_type_enforce<
		`La-Pr-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2EFSGNDF = $mol_type_enforce<
		`Tb-Lu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YT6KDIMT = $mol_type_enforce<
		`Tb-Ho-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B44NM2AB = $mol_type_enforce<
		`Ba-Ca-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JKPC4J7Q = $mol_type_enforce<
		`Gd-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B59BU9PZ = $mol_type_enforce<
		`Ta-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__00LC7X08 = $mol_type_enforce<
		`La-Y-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__47AGLZ2R = $mol_type_enforce<
		`La-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V501JSFT = $mol_type_enforce<
		`Ge-B-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z4PIWM2K = $mol_type_enforce<
		`Li-Pr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZZ3Y2IN1 = $mol_type_enforce<
		`Cu-Pt-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5DJW59U4 = $mol_type_enforce<
		`La-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MTFK7GVV = $mol_type_enforce<
		`Tb-Pr-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__P2U050XM = $mol_type_enforce<
		`Eu-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__57H8A8GL = $mol_type_enforce<
		`Ce-Tm-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6EEDBRSE = $mol_type_enforce<
		`Pr-Tm-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__94FFXHUU = $mol_type_enforce<
		`La-Gd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CB5SMKIS = $mol_type_enforce<
		`Pm-Pr-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__718FSENF = $mol_type_enforce<
		`Sm-Tm-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7J2PP8N5 = $mol_type_enforce<
		`Mn-Ni-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9PGXHDGU = $mol_type_enforce<
		`Ce-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BZ4W8E4F = $mol_type_enforce<
		`Rb-Cr-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__HEY6PPW8 = $mol_type_enforce<
		`La-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0Y297ZHS = $mol_type_enforce<
		`Ca-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__47AL0XX9 = $mol_type_enforce<
		`Sm-Lu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L9NGON91 = $mol_type_enforce<
		`Li-V-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N08O3FL5 = $mol_type_enforce<
		`Y-Er-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M78XTDSW = $mol_type_enforce<
		`Nd-Dy-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UWW6Q7WC = $mol_type_enforce<
		`Pm-Pr-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K905DFXS = $mol_type_enforce<
		`Mg-U-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1VCIWDRT = $mol_type_enforce<
		`La-Yb-Eu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__31YPG07W = $mol_type_enforce<
		`Gd-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5HBWHPZ4 = $mol_type_enforce<
		`Eu-Zr-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YWPQ4U74 = $mol_type_enforce<
		`Tb-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QRZIK8E9 = $mol_type_enforce<
		`Cs-Rb-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XIWCOTK1 = $mol_type_enforce<
		`Tb-Pr-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YM8WEKJR = $mol_type_enforce<
		`Cd-Bi-B`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__T0AE17GN = $mol_type_enforce<
		`Cu-Ir-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LT34PMAM = $mol_type_enforce<
		`Gd-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WBSPHRZM = $mol_type_enforce<
		`Pr-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LHFL4MVS = $mol_type_enforce<
		`La-Nd-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M27JHTG1 = $mol_type_enforce<
		`Y-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TAEOF91J = $mol_type_enforce<
		`Ni-Ag-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3AE0XAZ6 = $mol_type_enforce<
		`K-Hf-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G06ODB01 = $mol_type_enforce<
		`Nd-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QOEKTLPP = $mol_type_enforce<
		`Pr-Nd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LFKNWAVM = $mol_type_enforce<
		`La-Gd-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PAMW0PET = $mol_type_enforce<
		`Yb-Er-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U4F7Q9JI = $mol_type_enforce<
		`Dy-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CS5NVH6U = $mol_type_enforce<
		`La-Nd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__PXABQCN7 = $mol_type_enforce<
		`Ce-Pr-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZDYYRU3J = $mol_type_enforce<
		`Ce-Nd-Gd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AZK2LWP9 = $mol_type_enforce<
		`Y-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__02C8D1IF = $mol_type_enforce<
		`Tl-Ni-Ag`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L7KVBCMK = $mol_type_enforce<
		`Nd-Gd-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__I00RG5G0 = $mol_type_enforce<
		`K-Li-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QFCVRFON = $mol_type_enforce<
		`Li-Ce-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7J6FLMT6 = $mol_type_enforce<
		`Mn-Ni-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__MAT5AWIM = $mol_type_enforce<
		`Ho-Pu-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F3DGM5HX = $mol_type_enforce<
		`Pm-Dy-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EHRXEQA7 = $mol_type_enforce<
		`Ce-Sm-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4EDFPOQU = $mol_type_enforce<
		`Ni-Os-Pd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8FLL16OS = $mol_type_enforce<
		`Cr-Mo-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EGWPVNAW = $mol_type_enforce<
		`Er-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__64XTN9OD = $mol_type_enforce<
		`Ce-Nd-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FS8H959J = $mol_type_enforce<
		`Zn-Ga-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XCQAVUOC = $mol_type_enforce<
		`Sm-Y-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__B2O9X33D = $mol_type_enforce<
		`Eu-Nb-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3CCA1OKN = $mol_type_enforce<
		`Fe-Pd-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__42H2YKWE = $mol_type_enforce<
		`Co-Re-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__U4R46R4A = $mol_type_enforce<
		`Sm-Y-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__D4QDIWU2 = $mol_type_enforce<
		`Fe-Cu-C`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__S2S4JPKW = $mol_type_enforce<
		`Tm-Pu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KH5BPVPM = $mol_type_enforce<
		`Ta-Nb-Cu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GY67XYMG = $mol_type_enforce<
		`Ho-Ta-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__IKI5UV0M = $mol_type_enforce<
		`Li-Lu-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WDPD5X47 = $mol_type_enforce<
		`Yb-Er-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1KGBEGJU = $mol_type_enforce<
		`Fe-Ni-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DDAVH04H = $mol_type_enforce<
		`Nd-Ta-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0ZLQIAHO = $mol_type_enforce<
		`La-Pr-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WY8LP57W = $mol_type_enforce<
		`Mg-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__V651PACT = $mol_type_enforce<
		`La-Pr-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__5F6FPMRR = $mol_type_enforce<
		`Y-Zr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G9FN1WFY = $mol_type_enforce<
		`Cu-Ni-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YLIFXEWM = $mol_type_enforce<
		`Rb-Li-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NBPCG08L = $mol_type_enforce<
		`Li-Ho-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E1EEZUHG = $mol_type_enforce<
		`Fe-Ag-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EMAD0L9L = $mol_type_enforce<
		`Eu-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__X969BOME = $mol_type_enforce<
		`Nd-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KDE7G0UR = $mol_type_enforce<
		`Pm-Pr-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SLD36YZT = $mol_type_enforce<
		`Sm-Y-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__37V00NAE = $mol_type_enforce<
		`Zn-Ga-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y2GD6IKV = $mol_type_enforce<
		`Tl-Ga-Si`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z4TX9GHU = $mol_type_enforce<
		`La-Tb-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__TQJT81C7 = $mol_type_enforce<
		`Tm-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AFJQMI3O = $mol_type_enforce<
		`Sr-Nd-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NJ4FPNHC = $mol_type_enforce<
		`Y-Tm-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__YJWEV3JZ = $mol_type_enforce<
		`Tb-Yb-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__ZR3ZCA5J = $mol_type_enforce<
		`La-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KP51WU5A = $mol_type_enforce<
		`Dy-Ho-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DKGQTARL = $mol_type_enforce<
		`Cs-Hf-Mg`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8VSJ0C63 = $mol_type_enforce<
		`Ba-Sm-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__UZV975M1 = $mol_type_enforce<
		`Pr-Y-Lu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KHE9D1XX = $mol_type_enforce<
		`Nd-Er-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BUVSLUZP = $mol_type_enforce<
		`Tm-Mo-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4FZQU4II = $mol_type_enforce<
		`Li-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OK0FRJ8Y = $mol_type_enforce<
		`Gd-Tm-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1IGQK5AT = $mol_type_enforce<
		`Ti-V-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0GX7GSKV = $mol_type_enforce<
		`Sc-Ta-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JMVAYB4V = $mol_type_enforce<
		`La-Sm-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EGR8SH6Y = $mol_type_enforce<
		`Ce-Er-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2MS456G6 = $mol_type_enforce<
		`Y-Ho-Er`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4HN05MM9 = $mol_type_enforce<
		`Sm-Th-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__842WS8BI = $mol_type_enforce<
		`Tb-Sm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y6SLS3RE = $mol_type_enforce<
		`Li-Tb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EWE1XS6N = $mol_type_enforce<
		`Ho-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VZ9RJGW1 = $mol_type_enforce<
		`Sm-Pu-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__2OO686OB = $mol_type_enforce<
		`Nd-Tm-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Y9U1J7XW = $mol_type_enforce<
		`Na-Li-Ta`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AHEK71QF = $mol_type_enforce<
		`K-Ti-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__41VM5WGA = $mol_type_enforce<
		`Mn-Tl-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9PINIKCN = $mol_type_enforce<
		`Hg-B-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__4DE146TQ = $mol_type_enforce<
		`Er-Lu-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__73P0FRPV = $mol_type_enforce<
		`Pu-Zr-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1A4L1Y9L = $mol_type_enforce<
		`Ca-La-Ce`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__VE7TG6BV = $mol_type_enforce<
		`Eu-Hf-U`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SJBHHF1U = $mol_type_enforce<
		`Os-Ru-Rh`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__XTXLO0AM = $mol_type_enforce<
		`La-Sc-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CB5H1XR2 = $mol_type_enforce<
		`V-Ag-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__K1PLZ867 = $mol_type_enforce<
		`Ba-Pr-Sm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CEVQPY0Z = $mol_type_enforce<
		`Nd-Th-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__L37CLP9A = $mol_type_enforce<
		`Pr-Ta-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DMUZU9P7 = $mol_type_enforce<
		`Y-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__C63OWXH0 = $mol_type_enforce<
		`Tb-Y-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__OF0V7S8V = $mol_type_enforce<
		`Ce-Nd-Th`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NW9K50G3 = $mol_type_enforce<
		`Pt-Rh-Au`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__NG6Y3VS1 = $mol_type_enforce<
		`Er-Nb-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0L5CQ01V = $mol_type_enforce<
		`Ba-La-Mn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CN0MIAAH = $mol_type_enforce<
		`Pr-Pu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__AHOZPD5M = $mol_type_enforce<
		`Sm-Y-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z3TSCTAU = $mol_type_enforce<
		`Ga-Re-Sn`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0PPCIJ3R = $mol_type_enforce<
		`Ho-Er-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__FNFGP2S3 = $mol_type_enforce<
		`Al-Tl-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__3MF5BVRZ = $mol_type_enforce<
		`Dy-Lu-Mo`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W56YTEKA = $mol_type_enforce<
		`Na-Sr-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WK8RX86K = $mol_type_enforce<
		`Cd-Si-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__6EX6KX90 = $mol_type_enforce<
		`Tb-Pr-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__E6IAREAM = $mol_type_enforce<
		`Ba-Gd-Sc`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7URETHT5 = $mol_type_enforce<
		`Ca-Tb-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__W4EZICOO = $mol_type_enforce<
		`Cu-Ag-Os`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__GE5CRN0E = $mol_type_enforce<
		`Co-Cu-Ir`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LH6NE4P6 = $mol_type_enforce<
		`Pm-Dy-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__8BEPF6T4 = $mol_type_enforce<
		`Zn-Cd-Ge`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__DUVJRTAD = $mol_type_enforce<
		`La-V-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__SGEWJ3O2 = $mol_type_enforce<
		`Sr-Ca-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__9H8WZUA0 = $mol_type_enforce<
		`Dy-Ho-Tm`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7SW4QJIQ = $mol_type_enforce<
		`Eu-Th-W`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WEUIJ16W = $mol_type_enforce<
		`Ca-Pm-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__CST3ON6M = $mol_type_enforce<
		`Eu-Th-Zr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EN8QGA2X = $mol_type_enforce<
		`Cu-Os-Ru`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QU26TUXT = $mol_type_enforce<
		`Be-In-Ga`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__N078P35Z = $mol_type_enforce<
		`La-Th-Ti`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__Z7RA3J6B = $mol_type_enforce<
		`Nd-Pu-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__KQW0WONF = $mol_type_enforce<
		`Ca-Ce-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__JMLT8QOL = $mol_type_enforce<
		`Yb-Y-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__EO7KSD8W = $mol_type_enforce<
		`Ca-La-Y`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__47P9CFE2 = $mol_type_enforce<
		`Li-Tm-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__LCSY5R2R = $mol_type_enforce<
		`Al-Tl-Pb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__G906WWH3 = $mol_type_enforce<
		`Li-Ce-Ho`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0UN2RKCV = $mol_type_enforce<
		`Li-Sc-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__BFAGF90Z = $mol_type_enforce<
		`Pr-Nd-Dy`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__F1A21V1D = $mol_type_enforce<
		`Yb-Nd-Pu`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__52HOKSCM = $mol_type_enforce<
		`Li-Ce-Nd`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__WADXFEKW = $mol_type_enforce<
		`Pm-Dy-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__RMC31X75 = $mol_type_enforce<
		`Dy-Lu-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__7KR8406H = $mol_type_enforce<
		`Ca-Mn-Fe`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__QZA57LXT = $mol_type_enforce<
		`Cs-Mg-V`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__M96ABD5C = $mol_type_enforce<
		`Ce-Eu-Nb`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__0DCYJ33L = $mol_type_enforce<
		`Tb-V-Cr`
		,
		string
	>
	type $mpds_visavis_elements_nonformer_pd_tri__1L9U3DKF = $mol_type_enforce<
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

	type $mol_view__render__IL8L2Y7K = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['draw'] >
		,
		ReturnType< $mol_view['render'] >
	>
	type $mpds_visavis_plot_legend_cmp__labels__W1ZO4R6S = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['cmp_labels'] >
		,
		ReturnType< $mpds_visavis_plot_legend_cmp['labels'] >
	>
	type $mpds_visavis_plot_legend_cmp__colorset__BXX42DI0 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['colorset'] >
		,
		ReturnType< $mpds_visavis_plot_legend_cmp['colorset'] >
	>
	type $mol_view__sub__0ZW276YK = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__style__CK1SZDTD = $mol_type_enforce<
		({ 
			'background': ReturnType< $mpds_visavis_plot_matrix['heatmap_color'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__sub__U4FC1JG8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows__MW902CQZ = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['heatmap_color_list'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub__ICMEN5L1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_view__sub__GXBAIQOY = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['plot_body'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_check_box__title__HQUMQ9MG = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked__O90DMXR8 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['fixel_checked'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_check_box__hint__2WR32P4M = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['hint'] >
	>
	type $mol_check_box__title__HW3L1Z49 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked__B105JIG7 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['nonformers_checked'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_check_box__title__YYLHA89A = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked__J01SC0KO = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['difference_checked'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_switch__value__69KY05FU = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['sort_control'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options__VW0LY2BV = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['order_dict'] >
		,
		ReturnType< $mol_switch['options'] >
	>
	type $mol_labeler__title__3ST6QVVJ = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__TI4DRJ66 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_matrix['Order_switch'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_view__sub__77T9YYXS = $mol_type_enforce<
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

	type $mol_pop_bubble__align__6GSEN8UR = $mol_type_enforce<
		ReturnType< $mol_pop['align'] >
		,
		ReturnType< $mol_pop_bubble['align'] >
	>
	type $mol_pop_bubble__content__JBTB8S6W = $mol_type_enforce<
		ReturnType< $mol_pop['bubble_content'] >
		,
		ReturnType< $mol_pop_bubble['content'] >
	>
	type $mol_pop_bubble__height_max__V8VW68Z4 = $mol_type_enforce<
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

	type $mol_check__minimal_width__RRHRYENP = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_width'] >
	>
	type $mol_check__minimal_height__MR44DTS3 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_height'] >
	>
	type $mol_check__enabled__J1D4ZU04 = $mol_type_enforce<
		ReturnType< $mol_pick['trigger_enabled'] >
		,
		ReturnType< $mol_check['enabled'] >
	>
	type $mol_check__checked__YQ0H54QL = $mol_type_enforce<
		ReturnType< $mol_pick['showed'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_check__clicks__XOBF03B8 = $mol_type_enforce<
		ReturnType< $mol_pick['clicks'] >
		,
		ReturnType< $mol_check['clicks'] >
	>
	type $mol_check__sub__KGIYIBHG = $mol_type_enforce<
		ReturnType< $mol_pick['trigger_content'] >
		,
		ReturnType< $mol_check['sub'] >
	>
	type $mol_check__hint__ELJ9T5VP = $mol_type_enforce<
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

	type $mol_paragraph__sub__P58OE92X = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	type $mol_paragraph__sub__AKHVM3HD = $mol_type_enforce<
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

	type $mol_hotkey__mod_ctrl__EFQ4E04F = $mol_type_enforce<
		ReturnType< $mol_string['submit_with_ctrl'] >
		,
		ReturnType< $mol_hotkey['mod_ctrl'] >
	>
	type $mol_hotkey__key__HOEHHTRH = $mol_type_enforce<
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

	type $mol_hotkey__key__OCHCG0A0 = $mol_type_enforce<
		({ 
			escape( next?: ReturnType< $mol_search['clear'] > ): ReturnType< $mol_search['clear'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	type $mol_nav__keys_y__RWOT0A85 = $mol_type_enforce<
		ReturnType< $mol_search['nav_components'] >
		,
		ReturnType< $mol_nav['keys_y'] >
	>
	type $mol_nav__current_y__WIBYF0ZG = $mol_type_enforce<
		ReturnType< $mol_search['nav_focused'] >
		,
		ReturnType< $mol_nav['current_y'] >
	>
	type $mol_string__value__D3F36M7S = $mol_type_enforce<
		ReturnType< $mol_search['query'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__hint__GP5Z3N4I = $mol_type_enforce<
		ReturnType< $mol_search['hint'] >
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__submit__Y5497G2O = $mol_type_enforce<
		ReturnType< $mol_search['submit'] >
		,
		ReturnType< $mol_string['submit'] >
	>
	type $mol_string__enabled__LFM6QCXI = $mol_type_enforce<
		ReturnType< $mol_search['enabled'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_string__keyboard__A5KBKZ38 = $mol_type_enforce<
		ReturnType< $mol_search['keyboard'] >
		,
		ReturnType< $mol_string['keyboard'] >
	>
	type $mol_string__enter__OPZE7OIP = $mol_type_enforce<
		ReturnType< $mol_search['enter'] >
		,
		ReturnType< $mol_string['enter'] >
	>
	type $mol_button_minor__hint__0NHI3W1J = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__click__GM6PRBTS = $mol_type_enforce<
		ReturnType< $mol_search['clear'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__65USYNGP = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_list__rows__HYDLNLPI = $mol_type_enforce<
		ReturnType< $mol_search['menu_items'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_dimmer__haystack__DTTLQ1FX = $mol_type_enforce<
		ReturnType< $mol_search['suggest_label'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle__737QW4MM = $mol_type_enforce<
		ReturnType< $mol_search['query'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_search_plugins__A95KF8IJ = $mol_type_enforce<
		ReturnType< $mol_pop['plugins'] >[number]
		,
		$mol_plugin
	>
	type $mol_view__sub__4CD2FSHE = $mol_type_enforce<
		ReturnType< $mol_search['anchor_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__click__7DLHB23C = $mol_type_enforce<
		ReturnType< $mol_search['suggest_select'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__5CEEG2KF = $mol_type_enforce<
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

	type $mol_dimmer__haystack__UGNTVCXU = $mol_type_enforce<
		ReturnType< $mol_select['option_label'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle__I1ZGV2AN = $mol_type_enforce<
		ReturnType< $mol_select['filter_pattern'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_nav__keys_y__6OQ4YWEC = $mol_type_enforce<
		ReturnType< $mol_select['nav_components'] >
		,
		ReturnType< $mol_nav['keys_y'] >
	>
	type $mol_nav__current_y__FZVQ5LNL = $mol_type_enforce<
		ReturnType< $mol_select['option_focused'] >
		,
		ReturnType< $mol_nav['current_y'] >
	>
	type $mol_nav__cycle__Z8WCPPGX = $mol_type_enforce<
		ReturnType< $mol_select['nav_cycle'] >
		,
		ReturnType< $mol_nav['cycle'] >
	>
	type $mol_list__rows__MY63V7TO = $mol_type_enforce<
		ReturnType< $mol_select['menu_content'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub__G7TO84RM = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_button_minor__event_click__STIHL2N1 = $mol_type_enforce<
		ReturnType< $mol_select['event_select'] >
		,
		ReturnType< $mol_button_minor['event_click'] >
	>
	type $mol_button_minor__sub__BGP21A27 = $mol_type_enforce<
		ReturnType< $mol_select['option_content'] >
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub__V7TK66GY = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_search__query__9TKI6HMI = $mol_type_enforce<
		ReturnType< $mol_select['filter_pattern'] >
		,
		ReturnType< $mol_search['query'] >
	>
	type $mol_search__hint__20YACQTX = $mol_type_enforce<
		ReturnType< $mol_select['filter_hint'] >
		,
		ReturnType< $mol_search['hint'] >
	>
	type $mol_search__submit__83R7CUAU = $mol_type_enforce<
		ReturnType< $mol_select['submit'] >
		,
		ReturnType< $mol_search['submit'] >
	>
	type $mol_search__enabled__61B4O3Z7 = $mol_type_enforce<
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

	type $mpds_visavis_lib_plotly_view__data__PCXMEQWT = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['data_shown'] >
		,
		ReturnType< $mpds_visavis_lib_plotly_view['data'] >
	>
	type $mpds_visavis_lib_plotly_view__layout__96RQHTTY = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['layout'] >
		,
		ReturnType< $mpds_visavis_lib_plotly_view['layout'] >
	>
	type $mpds_visavis_plot_legend_cmp__labels__PARTK2ZH = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['cmp_labels'] >
		,
		ReturnType< $mpds_visavis_plot_legend_cmp['labels'] >
	>
	type $mpds_visavis_plot_legend_cmp__colorset__JVB8HPMU = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['colorset'] >
		,
		ReturnType< $mpds_visavis_plot_legend_cmp['colorset'] >
	>
	type $mol_view__sub__6LG7P83Y = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__style__GYKL27L5 = $mol_type_enforce<
		({ 
			'background': ReturnType< $mpds_visavis_plot_cube['heatmap_color'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__sub__9UJN9G33 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows__PE3PA05L = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['heatmap_color_list'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub__ZYPBBBT7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_view__sub__S0WQV0IT = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['plot_body'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_check_box__title__DHHPXS1W = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked__IZTKDVZH = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['fixel_checked'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_check_box__hint__DDSDJSE7 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['hint'] >
	>
	type $mol_check_box__title__G4OMQHN8 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked__GMREWCEA = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['nonformers_checked'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_check_box__title__M65L7EZL = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_box['title'] >
	>
	type $mol_check_box__checked__OAJD6XPP = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['difference_checked'] >
		,
		ReturnType< $mol_check_box['checked'] >
	>
	type $mol_select__value__T3I7KHG8 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['x_sort'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__dictionary__XVFISI57 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['order_dict'] >
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_labeler__title__D6ZLDRQ8 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__94O30DS3 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['X_order_select'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_select__value__YKRCVS7S = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['y_sort'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__dictionary__XMIDIA4U = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['order_dict'] >
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_labeler__title__NN24K1TF = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__Z4EWKU9Y = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['Y_order_select'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_select__value__24A8S4NH = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['z_sort'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__dictionary__LMUS5T23 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['order_dict'] >
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_labeler__title__8256UKG0 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__FTPVQJ2L = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_cube['Z_order_select'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_view__sub__L81ST336 = $mol_type_enforce<
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

	type $mol_view__sub__OK321821 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mpds_visavis_lib_plotly_view__data__X9UPZHSF = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_phase['data'] >
		,
		ReturnType< $mpds_visavis_lib_plotly_view['data'] >
	>
	type $mpds_visavis_lib_plotly_view__layout__XIICQ2RZ = $mol_type_enforce<
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

	type $mpds_visavis_lib_plotly_view__data__7O3UFMH1 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_discovery['data'] >
		,
		ReturnType< $mpds_visavis_lib_plotly_view['data'] >
	>
	type $mpds_visavis_lib_plotly_view__layout__QD0BVDH5 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_discovery['layout'] >
		,
		ReturnType< $mpds_visavis_lib_plotly_view['layout'] >
	>
	type $mpds_visavis_plot_legend_cmp__labels__SXVF6O31 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_discovery['cmp_labels'] >
		,
		ReturnType< $mpds_visavis_plot_legend_cmp['labels'] >
	>
	type $mpds_visavis_plot_legend_cmp__colorset__GV68Q1UC = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_discovery['colorset'] >
		,
		ReturnType< $mpds_visavis_plot_legend_cmp['colorset'] >
	>
	type $mol_check_list__option_checked__L3DKMY53 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_discovery['elemental_checked'] >
		,
		ReturnType< $mol_check_list['option_checked'] >
	>
	type $mol_check_list__options__DU21BQS9 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_discovery['elementals_dict'] >
		,
		ReturnType< $mol_check_list['options'] >
	>
	type $mol_labeler__title__CC0XRUG2 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__Content__5FRRS2QV = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_discovery['Elementals_check'] >
		,
		ReturnType< $mol_labeler['Content'] >
	>
	type $mol_view__sub__4YKQAKNK = $mol_type_enforce<
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

	type $mol_vector_2d__CY3RTNDG = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__WNIJJX6X = $mol_type_enforce<
		[ number, number ]
		,
		ConstructorParameters< typeof $mol_vector_2d<number> >
	>
	type $mol_vector_2d__VZ7Y8NK9 = $mol_type_enforce<
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

	type $mpds_visavis_plot_graph_pan__2AH3DF15 = $mol_type_enforce<
		Parameters< $mpds_visavis_plot_graph['pan'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot_graph['Touch'] >['pan'] >[0]
	>
	type $mol_touch__allow_draw__SL08BL68 = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_touch['allow_draw'] >
	>
	type $mol_touch__allow_pan__0GXJ493H = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_graph['allow_pan'] >
		,
		ReturnType< $mol_touch['allow_pan'] >
	>
	type $mol_svg_root__view_box__7SO124OT = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot_graph['view_box'] >
		,
		ReturnType< $mol_svg_root['view_box'] >
	>
	type $mol_svg_root__auto__XCYN90J0 = $mol_type_enforce<
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

	type $mpds_visavis_plot_matrix_x_op__FU3360H6 = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['matrix_x_op'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Matrix'] >['x_op'] >[0]
	>
	type $mpds_visavis_plot_matrix_y_op__25XEEP65 = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['matrix_y_op'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Matrix'] >['y_op'] >[0]
	>
	type $mpds_visavis_plot_matrix_x_sort__HR7FY4ME = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['matrix_x_sort'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Matrix'] >['x_sort'] >[0]
	>
	type $mpds_visavis_plot_matrix_y_sort__1CO4U51K = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['matrix_y_sort'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Matrix'] >['y_sort'] >[0]
	>
	type $mpds_visavis_plot_matrix__plot_raw__35ONGAI2 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_matrix['plot_raw'] >
	>
	type $mpds_visavis_plot_matrix__multi_jsons__V1XILI25 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['multi_jsons'] >
		,
		ReturnType< $mpds_visavis_plot_matrix['multi_jsons'] >
	>
	type $mpds_visavis_plot_matrix__show_setup__OGKIT62Q = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['show_setup'] >
		,
		ReturnType< $mpds_visavis_plot_matrix['show_setup'] >
	>
	type $mpds_visavis_plot_matrix__nonformers_checked__VDZENXVP = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['nonformers_checked'] >
		,
		ReturnType< $mpds_visavis_plot_matrix['nonformers_checked'] >
	>
	type $mpds_visavis_plot_matrix__fixel_checked__TZSH3B99 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['matrix_fixel_checked'] >
		,
		ReturnType< $mpds_visavis_plot_matrix['fixel_checked'] >
	>
	type $mpds_visavis_plot_matrix__matrix_click__MR2N73EL = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['matrix_click'] >
		,
		ReturnType< $mpds_visavis_plot_matrix['matrix_click'] >
	>
	type $mpds_visavis_plot_x_op__PX6XMTW4 = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['x_op'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Cube'] >['x_op'] >[0]
	>
	type $mpds_visavis_plot_y_op__AEZAZGU4 = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['y_op'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Cube'] >['y_op'] >[0]
	>
	type $mpds_visavis_plot_z_op__A7Y5SCGT = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['z_op'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Cube'] >['z_op'] >[0]
	>
	type $mpds_visavis_plot_x_sort__5E9FZJWQ = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['x_sort'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Cube'] >['x_sort'] >[0]
	>
	type $mpds_visavis_plot_y_sort__7WOWEQZT = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['y_sort'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Cube'] >['y_sort'] >[0]
	>
	type $mpds_visavis_plot_z_sort__QBNNY33O = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['z_sort'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Cube'] >['z_sort'] >[0]
	>
	type $mpds_visavis_plot_cube__plot_raw__RVGLUB6J = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_cube['plot_raw'] >
	>
	type $mpds_visavis_plot_cube__multi_jsons__BCOZ8GQX = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['multi_jsons'] >
		,
		ReturnType< $mpds_visavis_plot_cube['multi_jsons'] >
	>
	type $mpds_visavis_plot_cube__show_setup__EDRLTM3I = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['show_setup'] >
		,
		ReturnType< $mpds_visavis_plot_cube['show_setup'] >
	>
	type $mpds_visavis_plot_cube__show_fixel__A0ARY5JE = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['show_fixel'] >
		,
		ReturnType< $mpds_visavis_plot_cube['show_fixel'] >
	>
	type $mpds_visavis_plot_cube__nonformers_checked__79BTLTB2 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['nonformers_checked'] >
		,
		ReturnType< $mpds_visavis_plot_cube['nonformers_checked'] >
	>
	type $mpds_visavis_plot_cube__fixel_checked__N002HCQZ = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['cube_fixel_checked'] >
		,
		ReturnType< $mpds_visavis_plot_cube['fixel_checked'] >
	>
	type $mpds_visavis_plot_cube__cube_click__DV1U9LLV = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['cube_click'] >
		,
		ReturnType< $mpds_visavis_plot_cube['cube_click'] >
	>
	type $mpds_visavis_plot_phase__plot_raw__T4HET4TP = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_phase['plot_raw'] >
	>
	type $mpds_visavis_plot_phase__phase_click__C77DSM5C = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['phase_click'] >
		,
		ReturnType< $mpds_visavis_plot_phase['phase_click'] >
	>
	type $mpds_visavis_plot_bar__plot_raw__KE84UG6X = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_bar['plot_raw'] >
	>
	type $mpds_visavis_plot_bar__bar_click__MCUN5609 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['bar_click'] >
		,
		ReturnType< $mpds_visavis_plot_bar['bar_click'] >
	>
	type $mpds_visavis_plot_discovery_elementals_on__VMOFTQKU = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['discovery_elementals_on'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Discovery'] >['elementals_on'] >[0]
	>
	type $mpds_visavis_plot_discovery__plot_raw__62ZYL0BV = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_discovery['plot_raw'] >
	>
	type $mpds_visavis_plot_discovery__json_cmp__M0YRYVRU = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['json_cmp'] >
		,
		ReturnType< $mpds_visavis_plot_discovery['json_cmp'] >
	>
	type $mpds_visavis_plot_discovery__show_setup__BUDMTSYE = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['show_setup'] >
		,
		ReturnType< $mpds_visavis_plot_discovery['show_setup'] >
	>
	type $mpds_visavis_plot_discovery__discovery_click__APKXPW33 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['discovery_click'] >
		,
		ReturnType< $mpds_visavis_plot_discovery['discovery_click'] >
	>
	type $mpds_visavis_plot_eigen__plot_raw__8UC85MTO = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_eigen['plot_raw'] >
	>
	type $mpds_visavis_plot_pie__plot_raw__NTV8C9Z5 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_pie['plot_raw'] >
	>
	type $mpds_visavis_plot_pie__pie_click__NRR0BN2E = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['pie_click'] >
		,
		ReturnType< $mpds_visavis_plot_pie['pie_click'] >
	>
	type $mpds_visavis_plot_scatter__plot_raw__5N8MPNTT = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_scatter['plot_raw'] >
	>
	type $mpds_visavis_plot_scatter__notify__M36JYN40 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['notify'] >
		,
		ReturnType< $mpds_visavis_plot_scatter['notify'] >
	>
	type $mpds_visavis_plot_customscatter__plot_raw__U5VABMWN = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_customscatter['plot_raw'] >
	>
	type $mpds_visavis_plot_customscatter__nplots_changed__Y3NXGH2E = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['nplots_changed'] >
		,
		ReturnType< $mpds_visavis_plot_customscatter['nplots_changed'] >
	>
	type $mpds_visavis_plot_customscatter__legend_click__V7PQYLIK = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['legend_click'] >
		,
		ReturnType< $mpds_visavis_plot_customscatter['legend_click'] >
	>
	type $mpds_visavis_plot_heatmap__plot_raw__QG27YY7I = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_heatmap['plot_raw'] >
	>
	type $mpds_visavis_plot_graph_rel__Q73IQ2VO = $mol_type_enforce<
		Parameters< $mpds_visavis_plot['graph_rel'] >[0]
		,
		Parameters< ReturnType< $mpds_visavis_plot['Graph'] >['graph_rel'] >[0]
	>
	type $mpds_visavis_plot_graph__plot_raw__57V3MT7L = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot_graph['plot_raw'] >
	>
	type $mpds_visavis_plot_graph__graph_click__NOH14KWS = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['graph_click'] >
		,
		ReturnType< $mpds_visavis_plot_graph['graph_click'] >
	>
	type $mol_check__Icon__LFX0QZP8 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['Expand_icon'] >
		,
		ReturnType< $mol_check['Icon'] >
	>
	type $mol_check__checked__974SBCC6 = $mol_type_enforce<
		ReturnType< $mpds_visavis_plot['fullscreen'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_paragraph__title__WXOJDU9F = $mol_type_enforce<
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

	type $mol_paragraph__title__HT56K1UI = $mol_type_enforce<
		string
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_paragraph__title__POTKWWQE = $mol_type_enforce<
		string
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_button_open__accept__GNSP37PU = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_open['accept'] >
	>
	type $mol_button_open__files__QIQOVB59 = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['files_read'] >
		,
		ReturnType< $mol_button_open['files'] >
	>
	type $mol_list__sub__VNRJNT3F = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['sub'] >
	>
	type $mol_link__title__J25U5IJX = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_link__arg__17MJNM03 = $mol_type_enforce<
		({ 
			'section': string,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_list__rows__GFTDGYFE = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_drop__receive__71BTRBDD = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['drop_file'] >
		,
		ReturnType< $mol_drop['receive'] >
	>
	type $mol_drop__Sub__MH9ZB9YA = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['Start_page_content'] >
		,
		ReturnType< $mol_drop['Sub'] >
	>
	type $mol_link__title__9SMI0ULR = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_link__arg__3ZU87J83 = $mol_type_enforce<
		({ 
			'section': any,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__title__D2C03QG1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_link__arg__8H686E18 = $mol_type_enforce<
		({ 
			'section': string,
			'file': any,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link_source__uri__6QHSQ0TU = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_source['uri'] >
	>
	type $mol_paragraph__title__6OB3PO9Q = $mol_type_enforce<
		string
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_button_open_native__accept__EW7QOLCV = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_open_native['accept'] >
	>
	type $mol_button_open_native__files__R9RZLIRY = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['files_read'] >
		,
		ReturnType< $mol_button_open_native['files'] >
	>
	type $mol_button_minor__sub__35XMW1AF = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_drop__receive__JYZZ1UQP = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['drop_file'] >
		,
		ReturnType< $mol_drop['receive'] >
	>
	type $mol_drop__Sub__SCRR5INF = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['History_upload'] >
		,
		ReturnType< $mol_drop['Sub'] >
	>
	type $mol_button_minor__click__G0ZY22LU = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['history_drop'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub__S2W3JRGF = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub__74RUMXS5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows__61X7X0ZY = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['history_rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_list__title__ITN7NKNW = $mol_type_enforce<
		string
		,
		ReturnType< $mol_list['title'] >
	>
	type $mol_list__sub__1OBC3CLZ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['sub'] >
	>
	type $mol_link__arg__0H1FM91W = $mol_type_enforce<
		({ 
			'file': ReturnType< $mpds_visavis_app['plot_id'] >,
		}) 
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__title__JR7M3NWJ = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['plot_id'] >
		,
		ReturnType< $mol_link['title'] >
	>
	type $mol_list__title__E52PBAH6 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_list['title'] >
	>
	type $mol_list__rows__DI2I7IIJ = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['example_rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_page__title__YTG0ZIBH = $mol_type_enforce<
		string
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__tools__ZA2BZ3ZZ = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__body__F6OUSJQR = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['menu_body'] >
		,
		ReturnType< $mol_page['body'] >
	>
	type $mpds_visavis_plot__plot_raw__5MQJAHDS = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['plot_raw'] >
		,
		ReturnType< $mpds_visavis_plot['plot_raw'] >
	>
	type $mpds_visavis_plot__show_setup__53B0TP3T = $mol_type_enforce<
		boolean
		,
		ReturnType< $mpds_visavis_plot['show_setup'] >
	>
	type $mpds_visavis_plot__show_fixel__KCUCQNFT = $mol_type_enforce<
		boolean
		,
		ReturnType< $mpds_visavis_plot['show_fixel'] >
	>
	type $mpds_visavis_plot__show_demo_warn__5C1YG0A4 = $mol_type_enforce<
		boolean
		,
		ReturnType< $mpds_visavis_plot['show_demo_warn'] >
	>
	type $mol_page__title__W1QTBUXH = $mol_type_enforce<
		ReturnType< $mpds_visavis_app['plot_id'] >
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__Body_content__Y1IALMNG = $mol_type_enforce<
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
