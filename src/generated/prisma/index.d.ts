
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Quote
 * 
 */
export type Quote = $Result.DefaultSelection<Prisma.$QuotePayload>
/**
 * Model Emotion
 * 
 */
export type Emotion = $Result.DefaultSelection<Prisma.$EmotionPayload>
/**
 * Model Author
 * 
 */
export type Author = $Result.DefaultSelection<Prisma.$AuthorPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Quotes
 * const quotes = await prisma.quote.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Quotes
   * const quotes = await prisma.quote.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.quote`: Exposes CRUD operations for the **Quote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quotes
    * const quotes = await prisma.quote.findMany()
    * ```
    */
  get quote(): Prisma.QuoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emotion`: Exposes CRUD operations for the **Emotion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Emotions
    * const emotions = await prisma.emotion.findMany()
    * ```
    */
  get emotion(): Prisma.EmotionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.author`: Exposes CRUD operations for the **Author** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authors
    * const authors = await prisma.author.findMany()
    * ```
    */
  get author(): Prisma.AuthorDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Quote: 'Quote',
    Emotion: 'Emotion',
    Author: 'Author'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "quote" | "emotion" | "author"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Quote: {
        payload: Prisma.$QuotePayload<ExtArgs>
        fields: Prisma.QuoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePayload>
          }
          findFirst: {
            args: Prisma.QuoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePayload>
          }
          findMany: {
            args: Prisma.QuoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePayload>[]
          }
          create: {
            args: Prisma.QuoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePayload>
          }
          createMany: {
            args: Prisma.QuoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePayload>[]
          }
          delete: {
            args: Prisma.QuoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePayload>
          }
          update: {
            args: Prisma.QuoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePayload>
          }
          deleteMany: {
            args: Prisma.QuoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePayload>[]
          }
          upsert: {
            args: Prisma.QuoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotePayload>
          }
          aggregate: {
            args: Prisma.QuoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuote>
          }
          groupBy: {
            args: Prisma.QuoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuoteCountArgs<ExtArgs>
            result: $Utils.Optional<QuoteCountAggregateOutputType> | number
          }
        }
      }
      Emotion: {
        payload: Prisma.$EmotionPayload<ExtArgs>
        fields: Prisma.EmotionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmotionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmotionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmotionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmotionPayload>
          }
          findFirst: {
            args: Prisma.EmotionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmotionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmotionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmotionPayload>
          }
          findMany: {
            args: Prisma.EmotionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmotionPayload>[]
          }
          create: {
            args: Prisma.EmotionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmotionPayload>
          }
          createMany: {
            args: Prisma.EmotionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmotionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmotionPayload>[]
          }
          delete: {
            args: Prisma.EmotionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmotionPayload>
          }
          update: {
            args: Prisma.EmotionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmotionPayload>
          }
          deleteMany: {
            args: Prisma.EmotionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmotionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmotionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmotionPayload>[]
          }
          upsert: {
            args: Prisma.EmotionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmotionPayload>
          }
          aggregate: {
            args: Prisma.EmotionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmotion>
          }
          groupBy: {
            args: Prisma.EmotionGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmotionGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmotionCountArgs<ExtArgs>
            result: $Utils.Optional<EmotionCountAggregateOutputType> | number
          }
        }
      }
      Author: {
        payload: Prisma.$AuthorPayload<ExtArgs>
        fields: Prisma.AuthorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          findFirst: {
            args: Prisma.AuthorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          findMany: {
            args: Prisma.AuthorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[]
          }
          create: {
            args: Prisma.AuthorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          createMany: {
            args: Prisma.AuthorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[]
          }
          delete: {
            args: Prisma.AuthorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          update: {
            args: Prisma.AuthorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          deleteMany: {
            args: Prisma.AuthorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[]
          }
          upsert: {
            args: Prisma.AuthorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          aggregate: {
            args: Prisma.AuthorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthor>
          }
          groupBy: {
            args: Prisma.AuthorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthorCountArgs<ExtArgs>
            result: $Utils.Optional<AuthorCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    quote?: QuoteOmit
    emotion?: EmotionOmit
    author?: AuthorOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type EmotionCountOutputType
   */

  export type EmotionCountOutputType = {
    quotes: number
  }

  export type EmotionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quotes?: boolean | EmotionCountOutputTypeCountQuotesArgs
  }

  // Custom InputTypes
  /**
   * EmotionCountOutputType without action
   */
  export type EmotionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmotionCountOutputType
     */
    select?: EmotionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmotionCountOutputType without action
   */
  export type EmotionCountOutputTypeCountQuotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuoteWhereInput
  }


  /**
   * Count Type AuthorCountOutputType
   */

  export type AuthorCountOutputType = {
    quotes: number
  }

  export type AuthorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quotes?: boolean | AuthorCountOutputTypeCountQuotesArgs
  }

  // Custom InputTypes
  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorCountOutputType
     */
    select?: AuthorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeCountQuotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuoteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Quote
   */

  export type AggregateQuote = {
    _count: QuoteCountAggregateOutputType | null
    _min: QuoteMinAggregateOutputType | null
    _max: QuoteMaxAggregateOutputType | null
  }

  export type QuoteMinAggregateOutputType = {
    id: string | null
    text: string | null
    createdAt: Date | null
    emotionId: string | null
    authorId: string | null
  }

  export type QuoteMaxAggregateOutputType = {
    id: string | null
    text: string | null
    createdAt: Date | null
    emotionId: string | null
    authorId: string | null
  }

  export type QuoteCountAggregateOutputType = {
    id: number
    text: number
    createdAt: number
    emotionId: number
    authorId: number
    _all: number
  }


  export type QuoteMinAggregateInputType = {
    id?: true
    text?: true
    createdAt?: true
    emotionId?: true
    authorId?: true
  }

  export type QuoteMaxAggregateInputType = {
    id?: true
    text?: true
    createdAt?: true
    emotionId?: true
    authorId?: true
  }

  export type QuoteCountAggregateInputType = {
    id?: true
    text?: true
    createdAt?: true
    emotionId?: true
    authorId?: true
    _all?: true
  }

  export type QuoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quote to aggregate.
     */
    where?: QuoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotes to fetch.
     */
    orderBy?: QuoteOrderByWithRelationInput | QuoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quotes
    **/
    _count?: true | QuoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuoteMaxAggregateInputType
  }

  export type GetQuoteAggregateType<T extends QuoteAggregateArgs> = {
        [P in keyof T & keyof AggregateQuote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuote[P]>
      : GetScalarType<T[P], AggregateQuote[P]>
  }




  export type QuoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuoteWhereInput
    orderBy?: QuoteOrderByWithAggregationInput | QuoteOrderByWithAggregationInput[]
    by: QuoteScalarFieldEnum[] | QuoteScalarFieldEnum
    having?: QuoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuoteCountAggregateInputType | true
    _min?: QuoteMinAggregateInputType
    _max?: QuoteMaxAggregateInputType
  }

  export type QuoteGroupByOutputType = {
    id: string
    text: string
    createdAt: Date
    emotionId: string | null
    authorId: string | null
    _count: QuoteCountAggregateOutputType | null
    _min: QuoteMinAggregateOutputType | null
    _max: QuoteMaxAggregateOutputType | null
  }

  type GetQuoteGroupByPayload<T extends QuoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuoteGroupByOutputType[P]>
            : GetScalarType<T[P], QuoteGroupByOutputType[P]>
        }
      >
    >


  export type QuoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    createdAt?: boolean
    emotionId?: boolean
    authorId?: boolean
    emotion?: boolean | Quote$emotionArgs<ExtArgs>
    author?: boolean | Quote$authorArgs<ExtArgs>
  }, ExtArgs["result"]["quote"]>

  export type QuoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    createdAt?: boolean
    emotionId?: boolean
    authorId?: boolean
    emotion?: boolean | Quote$emotionArgs<ExtArgs>
    author?: boolean | Quote$authorArgs<ExtArgs>
  }, ExtArgs["result"]["quote"]>

  export type QuoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    createdAt?: boolean
    emotionId?: boolean
    authorId?: boolean
    emotion?: boolean | Quote$emotionArgs<ExtArgs>
    author?: boolean | Quote$authorArgs<ExtArgs>
  }, ExtArgs["result"]["quote"]>

  export type QuoteSelectScalar = {
    id?: boolean
    text?: boolean
    createdAt?: boolean
    emotionId?: boolean
    authorId?: boolean
  }

  export type QuoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "createdAt" | "emotionId" | "authorId", ExtArgs["result"]["quote"]>
  export type QuoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emotion?: boolean | Quote$emotionArgs<ExtArgs>
    author?: boolean | Quote$authorArgs<ExtArgs>
  }
  export type QuoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emotion?: boolean | Quote$emotionArgs<ExtArgs>
    author?: boolean | Quote$authorArgs<ExtArgs>
  }
  export type QuoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emotion?: boolean | Quote$emotionArgs<ExtArgs>
    author?: boolean | Quote$authorArgs<ExtArgs>
  }

  export type $QuotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quote"
    objects: {
      emotion: Prisma.$EmotionPayload<ExtArgs> | null
      author: Prisma.$AuthorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      createdAt: Date
      emotionId: string | null
      authorId: string | null
    }, ExtArgs["result"]["quote"]>
    composites: {}
  }

  type QuoteGetPayload<S extends boolean | null | undefined | QuoteDefaultArgs> = $Result.GetResult<Prisma.$QuotePayload, S>

  type QuoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuoteCountAggregateInputType | true
    }

  export interface QuoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quote'], meta: { name: 'Quote' } }
    /**
     * Find zero or one Quote that matches the filter.
     * @param {QuoteFindUniqueArgs} args - Arguments to find a Quote
     * @example
     * // Get one Quote
     * const quote = await prisma.quote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuoteFindUniqueArgs>(args: SelectSubset<T, QuoteFindUniqueArgs<ExtArgs>>): Prisma__QuoteClient<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuoteFindUniqueOrThrowArgs} args - Arguments to find a Quote
     * @example
     * // Get one Quote
     * const quote = await prisma.quote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuoteFindUniqueOrThrowArgs>(args: SelectSubset<T, QuoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuoteClient<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteFindFirstArgs} args - Arguments to find a Quote
     * @example
     * // Get one Quote
     * const quote = await prisma.quote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuoteFindFirstArgs>(args?: SelectSubset<T, QuoteFindFirstArgs<ExtArgs>>): Prisma__QuoteClient<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteFindFirstOrThrowArgs} args - Arguments to find a Quote
     * @example
     * // Get one Quote
     * const quote = await prisma.quote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuoteFindFirstOrThrowArgs>(args?: SelectSubset<T, QuoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuoteClient<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quotes
     * const quotes = await prisma.quote.findMany()
     * 
     * // Get first 10 Quotes
     * const quotes = await prisma.quote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quoteWithIdOnly = await prisma.quote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuoteFindManyArgs>(args?: SelectSubset<T, QuoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quote.
     * @param {QuoteCreateArgs} args - Arguments to create a Quote.
     * @example
     * // Create one Quote
     * const Quote = await prisma.quote.create({
     *   data: {
     *     // ... data to create a Quote
     *   }
     * })
     * 
     */
    create<T extends QuoteCreateArgs>(args: SelectSubset<T, QuoteCreateArgs<ExtArgs>>): Prisma__QuoteClient<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quotes.
     * @param {QuoteCreateManyArgs} args - Arguments to create many Quotes.
     * @example
     * // Create many Quotes
     * const quote = await prisma.quote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuoteCreateManyArgs>(args?: SelectSubset<T, QuoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Quotes and returns the data saved in the database.
     * @param {QuoteCreateManyAndReturnArgs} args - Arguments to create many Quotes.
     * @example
     * // Create many Quotes
     * const quote = await prisma.quote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Quotes and only return the `id`
     * const quoteWithIdOnly = await prisma.quote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuoteCreateManyAndReturnArgs>(args?: SelectSubset<T, QuoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Quote.
     * @param {QuoteDeleteArgs} args - Arguments to delete one Quote.
     * @example
     * // Delete one Quote
     * const Quote = await prisma.quote.delete({
     *   where: {
     *     // ... filter to delete one Quote
     *   }
     * })
     * 
     */
    delete<T extends QuoteDeleteArgs>(args: SelectSubset<T, QuoteDeleteArgs<ExtArgs>>): Prisma__QuoteClient<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quote.
     * @param {QuoteUpdateArgs} args - Arguments to update one Quote.
     * @example
     * // Update one Quote
     * const quote = await prisma.quote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuoteUpdateArgs>(args: SelectSubset<T, QuoteUpdateArgs<ExtArgs>>): Prisma__QuoteClient<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quotes.
     * @param {QuoteDeleteManyArgs} args - Arguments to filter Quotes to delete.
     * @example
     * // Delete a few Quotes
     * const { count } = await prisma.quote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuoteDeleteManyArgs>(args?: SelectSubset<T, QuoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quotes
     * const quote = await prisma.quote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuoteUpdateManyArgs>(args: SelectSubset<T, QuoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quotes and returns the data updated in the database.
     * @param {QuoteUpdateManyAndReturnArgs} args - Arguments to update many Quotes.
     * @example
     * // Update many Quotes
     * const quote = await prisma.quote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Quotes and only return the `id`
     * const quoteWithIdOnly = await prisma.quote.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuoteUpdateManyAndReturnArgs>(args: SelectSubset<T, QuoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Quote.
     * @param {QuoteUpsertArgs} args - Arguments to update or create a Quote.
     * @example
     * // Update or create a Quote
     * const quote = await prisma.quote.upsert({
     *   create: {
     *     // ... data to create a Quote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quote we want to update
     *   }
     * })
     */
    upsert<T extends QuoteUpsertArgs>(args: SelectSubset<T, QuoteUpsertArgs<ExtArgs>>): Prisma__QuoteClient<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Quotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteCountArgs} args - Arguments to filter Quotes to count.
     * @example
     * // Count the number of Quotes
     * const count = await prisma.quote.count({
     *   where: {
     *     // ... the filter for the Quotes we want to count
     *   }
     * })
    **/
    count<T extends QuoteCountArgs>(
      args?: Subset<T, QuoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuoteAggregateArgs>(args: Subset<T, QuoteAggregateArgs>): Prisma.PrismaPromise<GetQuoteAggregateType<T>>

    /**
     * Group by Quote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuoteGroupByArgs['orderBy'] }
        : { orderBy?: QuoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quote model
   */
  readonly fields: QuoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    emotion<T extends Quote$emotionArgs<ExtArgs> = {}>(args?: Subset<T, Quote$emotionArgs<ExtArgs>>): Prisma__EmotionClient<$Result.GetResult<Prisma.$EmotionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    author<T extends Quote$authorArgs<ExtArgs> = {}>(args?: Subset<T, Quote$authorArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Quote model
   */
  interface QuoteFieldRefs {
    readonly id: FieldRef<"Quote", 'String'>
    readonly text: FieldRef<"Quote", 'String'>
    readonly createdAt: FieldRef<"Quote", 'DateTime'>
    readonly emotionId: FieldRef<"Quote", 'String'>
    readonly authorId: FieldRef<"Quote", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Quote findUnique
   */
  export type QuoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quote
     */
    omit?: QuoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    /**
     * Filter, which Quote to fetch.
     */
    where: QuoteWhereUniqueInput
  }

  /**
   * Quote findUniqueOrThrow
   */
  export type QuoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quote
     */
    omit?: QuoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    /**
     * Filter, which Quote to fetch.
     */
    where: QuoteWhereUniqueInput
  }

  /**
   * Quote findFirst
   */
  export type QuoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quote
     */
    omit?: QuoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    /**
     * Filter, which Quote to fetch.
     */
    where?: QuoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotes to fetch.
     */
    orderBy?: QuoteOrderByWithRelationInput | QuoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quotes.
     */
    cursor?: QuoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quotes.
     */
    distinct?: QuoteScalarFieldEnum | QuoteScalarFieldEnum[]
  }

  /**
   * Quote findFirstOrThrow
   */
  export type QuoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quote
     */
    omit?: QuoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    /**
     * Filter, which Quote to fetch.
     */
    where?: QuoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotes to fetch.
     */
    orderBy?: QuoteOrderByWithRelationInput | QuoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quotes.
     */
    cursor?: QuoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quotes.
     */
    distinct?: QuoteScalarFieldEnum | QuoteScalarFieldEnum[]
  }

  /**
   * Quote findMany
   */
  export type QuoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quote
     */
    omit?: QuoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    /**
     * Filter, which Quotes to fetch.
     */
    where?: QuoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quotes to fetch.
     */
    orderBy?: QuoteOrderByWithRelationInput | QuoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quotes.
     */
    cursor?: QuoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quotes.
     */
    skip?: number
    distinct?: QuoteScalarFieldEnum | QuoteScalarFieldEnum[]
  }

  /**
   * Quote create
   */
  export type QuoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quote
     */
    omit?: QuoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Quote.
     */
    data: XOR<QuoteCreateInput, QuoteUncheckedCreateInput>
  }

  /**
   * Quote createMany
   */
  export type QuoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quotes.
     */
    data: QuoteCreateManyInput | QuoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quote createManyAndReturn
   */
  export type QuoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quote
     */
    omit?: QuoteOmit<ExtArgs> | null
    /**
     * The data used to create many Quotes.
     */
    data: QuoteCreateManyInput | QuoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Quote update
   */
  export type QuoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quote
     */
    omit?: QuoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Quote.
     */
    data: XOR<QuoteUpdateInput, QuoteUncheckedUpdateInput>
    /**
     * Choose, which Quote to update.
     */
    where: QuoteWhereUniqueInput
  }

  /**
   * Quote updateMany
   */
  export type QuoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quotes.
     */
    data: XOR<QuoteUpdateManyMutationInput, QuoteUncheckedUpdateManyInput>
    /**
     * Filter which Quotes to update
     */
    where?: QuoteWhereInput
    /**
     * Limit how many Quotes to update.
     */
    limit?: number
  }

  /**
   * Quote updateManyAndReturn
   */
  export type QuoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quote
     */
    omit?: QuoteOmit<ExtArgs> | null
    /**
     * The data used to update Quotes.
     */
    data: XOR<QuoteUpdateManyMutationInput, QuoteUncheckedUpdateManyInput>
    /**
     * Filter which Quotes to update
     */
    where?: QuoteWhereInput
    /**
     * Limit how many Quotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Quote upsert
   */
  export type QuoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quote
     */
    omit?: QuoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Quote to update in case it exists.
     */
    where: QuoteWhereUniqueInput
    /**
     * In case the Quote found by the `where` argument doesn't exist, create a new Quote with this data.
     */
    create: XOR<QuoteCreateInput, QuoteUncheckedCreateInput>
    /**
     * In case the Quote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuoteUpdateInput, QuoteUncheckedUpdateInput>
  }

  /**
   * Quote delete
   */
  export type QuoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quote
     */
    omit?: QuoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    /**
     * Filter which Quote to delete.
     */
    where: QuoteWhereUniqueInput
  }

  /**
   * Quote deleteMany
   */
  export type QuoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quotes to delete
     */
    where?: QuoteWhereInput
    /**
     * Limit how many Quotes to delete.
     */
    limit?: number
  }

  /**
   * Quote.emotion
   */
  export type Quote$emotionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emotion
     */
    select?: EmotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emotion
     */
    omit?: EmotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmotionInclude<ExtArgs> | null
    where?: EmotionWhereInput
  }

  /**
   * Quote.author
   */
  export type Quote$authorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    where?: AuthorWhereInput
  }

  /**
   * Quote without action
   */
  export type QuoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quote
     */
    omit?: QuoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
  }


  /**
   * Model Emotion
   */

  export type AggregateEmotion = {
    _count: EmotionCountAggregateOutputType | null
    _min: EmotionMinAggregateOutputType | null
    _max: EmotionMaxAggregateOutputType | null
  }

  export type EmotionMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type EmotionMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type EmotionCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type EmotionMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type EmotionMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type EmotionCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type EmotionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Emotion to aggregate.
     */
    where?: EmotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emotions to fetch.
     */
    orderBy?: EmotionOrderByWithRelationInput | EmotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Emotions
    **/
    _count?: true | EmotionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmotionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmotionMaxAggregateInputType
  }

  export type GetEmotionAggregateType<T extends EmotionAggregateArgs> = {
        [P in keyof T & keyof AggregateEmotion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmotion[P]>
      : GetScalarType<T[P], AggregateEmotion[P]>
  }




  export type EmotionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmotionWhereInput
    orderBy?: EmotionOrderByWithAggregationInput | EmotionOrderByWithAggregationInput[]
    by: EmotionScalarFieldEnum[] | EmotionScalarFieldEnum
    having?: EmotionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmotionCountAggregateInputType | true
    _min?: EmotionMinAggregateInputType
    _max?: EmotionMaxAggregateInputType
  }

  export type EmotionGroupByOutputType = {
    id: string
    name: string
    _count: EmotionCountAggregateOutputType | null
    _min: EmotionMinAggregateOutputType | null
    _max: EmotionMaxAggregateOutputType | null
  }

  type GetEmotionGroupByPayload<T extends EmotionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmotionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmotionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmotionGroupByOutputType[P]>
            : GetScalarType<T[P], EmotionGroupByOutputType[P]>
        }
      >
    >


  export type EmotionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    quotes?: boolean | Emotion$quotesArgs<ExtArgs>
    _count?: boolean | EmotionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emotion"]>

  export type EmotionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["emotion"]>

  export type EmotionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["emotion"]>

  export type EmotionSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type EmotionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["emotion"]>
  export type EmotionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quotes?: boolean | Emotion$quotesArgs<ExtArgs>
    _count?: boolean | EmotionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmotionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EmotionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EmotionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Emotion"
    objects: {
      quotes: Prisma.$QuotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["emotion"]>
    composites: {}
  }

  type EmotionGetPayload<S extends boolean | null | undefined | EmotionDefaultArgs> = $Result.GetResult<Prisma.$EmotionPayload, S>

  type EmotionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmotionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmotionCountAggregateInputType | true
    }

  export interface EmotionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Emotion'], meta: { name: 'Emotion' } }
    /**
     * Find zero or one Emotion that matches the filter.
     * @param {EmotionFindUniqueArgs} args - Arguments to find a Emotion
     * @example
     * // Get one Emotion
     * const emotion = await prisma.emotion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmotionFindUniqueArgs>(args: SelectSubset<T, EmotionFindUniqueArgs<ExtArgs>>): Prisma__EmotionClient<$Result.GetResult<Prisma.$EmotionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Emotion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmotionFindUniqueOrThrowArgs} args - Arguments to find a Emotion
     * @example
     * // Get one Emotion
     * const emotion = await prisma.emotion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmotionFindUniqueOrThrowArgs>(args: SelectSubset<T, EmotionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmotionClient<$Result.GetResult<Prisma.$EmotionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Emotion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmotionFindFirstArgs} args - Arguments to find a Emotion
     * @example
     * // Get one Emotion
     * const emotion = await prisma.emotion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmotionFindFirstArgs>(args?: SelectSubset<T, EmotionFindFirstArgs<ExtArgs>>): Prisma__EmotionClient<$Result.GetResult<Prisma.$EmotionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Emotion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmotionFindFirstOrThrowArgs} args - Arguments to find a Emotion
     * @example
     * // Get one Emotion
     * const emotion = await prisma.emotion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmotionFindFirstOrThrowArgs>(args?: SelectSubset<T, EmotionFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmotionClient<$Result.GetResult<Prisma.$EmotionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Emotions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmotionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Emotions
     * const emotions = await prisma.emotion.findMany()
     * 
     * // Get first 10 Emotions
     * const emotions = await prisma.emotion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emotionWithIdOnly = await prisma.emotion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmotionFindManyArgs>(args?: SelectSubset<T, EmotionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmotionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Emotion.
     * @param {EmotionCreateArgs} args - Arguments to create a Emotion.
     * @example
     * // Create one Emotion
     * const Emotion = await prisma.emotion.create({
     *   data: {
     *     // ... data to create a Emotion
     *   }
     * })
     * 
     */
    create<T extends EmotionCreateArgs>(args: SelectSubset<T, EmotionCreateArgs<ExtArgs>>): Prisma__EmotionClient<$Result.GetResult<Prisma.$EmotionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Emotions.
     * @param {EmotionCreateManyArgs} args - Arguments to create many Emotions.
     * @example
     * // Create many Emotions
     * const emotion = await prisma.emotion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmotionCreateManyArgs>(args?: SelectSubset<T, EmotionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Emotions and returns the data saved in the database.
     * @param {EmotionCreateManyAndReturnArgs} args - Arguments to create many Emotions.
     * @example
     * // Create many Emotions
     * const emotion = await prisma.emotion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Emotions and only return the `id`
     * const emotionWithIdOnly = await prisma.emotion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmotionCreateManyAndReturnArgs>(args?: SelectSubset<T, EmotionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmotionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Emotion.
     * @param {EmotionDeleteArgs} args - Arguments to delete one Emotion.
     * @example
     * // Delete one Emotion
     * const Emotion = await prisma.emotion.delete({
     *   where: {
     *     // ... filter to delete one Emotion
     *   }
     * })
     * 
     */
    delete<T extends EmotionDeleteArgs>(args: SelectSubset<T, EmotionDeleteArgs<ExtArgs>>): Prisma__EmotionClient<$Result.GetResult<Prisma.$EmotionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Emotion.
     * @param {EmotionUpdateArgs} args - Arguments to update one Emotion.
     * @example
     * // Update one Emotion
     * const emotion = await prisma.emotion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmotionUpdateArgs>(args: SelectSubset<T, EmotionUpdateArgs<ExtArgs>>): Prisma__EmotionClient<$Result.GetResult<Prisma.$EmotionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Emotions.
     * @param {EmotionDeleteManyArgs} args - Arguments to filter Emotions to delete.
     * @example
     * // Delete a few Emotions
     * const { count } = await prisma.emotion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmotionDeleteManyArgs>(args?: SelectSubset<T, EmotionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmotionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Emotions
     * const emotion = await prisma.emotion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmotionUpdateManyArgs>(args: SelectSubset<T, EmotionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emotions and returns the data updated in the database.
     * @param {EmotionUpdateManyAndReturnArgs} args - Arguments to update many Emotions.
     * @example
     * // Update many Emotions
     * const emotion = await prisma.emotion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Emotions and only return the `id`
     * const emotionWithIdOnly = await prisma.emotion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmotionUpdateManyAndReturnArgs>(args: SelectSubset<T, EmotionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmotionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Emotion.
     * @param {EmotionUpsertArgs} args - Arguments to update or create a Emotion.
     * @example
     * // Update or create a Emotion
     * const emotion = await prisma.emotion.upsert({
     *   create: {
     *     // ... data to create a Emotion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Emotion we want to update
     *   }
     * })
     */
    upsert<T extends EmotionUpsertArgs>(args: SelectSubset<T, EmotionUpsertArgs<ExtArgs>>): Prisma__EmotionClient<$Result.GetResult<Prisma.$EmotionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Emotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmotionCountArgs} args - Arguments to filter Emotions to count.
     * @example
     * // Count the number of Emotions
     * const count = await prisma.emotion.count({
     *   where: {
     *     // ... the filter for the Emotions we want to count
     *   }
     * })
    **/
    count<T extends EmotionCountArgs>(
      args?: Subset<T, EmotionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmotionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Emotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmotionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmotionAggregateArgs>(args: Subset<T, EmotionAggregateArgs>): Prisma.PrismaPromise<GetEmotionAggregateType<T>>

    /**
     * Group by Emotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmotionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmotionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmotionGroupByArgs['orderBy'] }
        : { orderBy?: EmotionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmotionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmotionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Emotion model
   */
  readonly fields: EmotionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Emotion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmotionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quotes<T extends Emotion$quotesArgs<ExtArgs> = {}>(args?: Subset<T, Emotion$quotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Emotion model
   */
  interface EmotionFieldRefs {
    readonly id: FieldRef<"Emotion", 'String'>
    readonly name: FieldRef<"Emotion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Emotion findUnique
   */
  export type EmotionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emotion
     */
    select?: EmotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emotion
     */
    omit?: EmotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmotionInclude<ExtArgs> | null
    /**
     * Filter, which Emotion to fetch.
     */
    where: EmotionWhereUniqueInput
  }

  /**
   * Emotion findUniqueOrThrow
   */
  export type EmotionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emotion
     */
    select?: EmotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emotion
     */
    omit?: EmotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmotionInclude<ExtArgs> | null
    /**
     * Filter, which Emotion to fetch.
     */
    where: EmotionWhereUniqueInput
  }

  /**
   * Emotion findFirst
   */
  export type EmotionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emotion
     */
    select?: EmotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emotion
     */
    omit?: EmotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmotionInclude<ExtArgs> | null
    /**
     * Filter, which Emotion to fetch.
     */
    where?: EmotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emotions to fetch.
     */
    orderBy?: EmotionOrderByWithRelationInput | EmotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emotions.
     */
    cursor?: EmotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emotions.
     */
    distinct?: EmotionScalarFieldEnum | EmotionScalarFieldEnum[]
  }

  /**
   * Emotion findFirstOrThrow
   */
  export type EmotionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emotion
     */
    select?: EmotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emotion
     */
    omit?: EmotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmotionInclude<ExtArgs> | null
    /**
     * Filter, which Emotion to fetch.
     */
    where?: EmotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emotions to fetch.
     */
    orderBy?: EmotionOrderByWithRelationInput | EmotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emotions.
     */
    cursor?: EmotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emotions.
     */
    distinct?: EmotionScalarFieldEnum | EmotionScalarFieldEnum[]
  }

  /**
   * Emotion findMany
   */
  export type EmotionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emotion
     */
    select?: EmotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emotion
     */
    omit?: EmotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmotionInclude<ExtArgs> | null
    /**
     * Filter, which Emotions to fetch.
     */
    where?: EmotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emotions to fetch.
     */
    orderBy?: EmotionOrderByWithRelationInput | EmotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Emotions.
     */
    cursor?: EmotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emotions.
     */
    skip?: number
    distinct?: EmotionScalarFieldEnum | EmotionScalarFieldEnum[]
  }

  /**
   * Emotion create
   */
  export type EmotionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emotion
     */
    select?: EmotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emotion
     */
    omit?: EmotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmotionInclude<ExtArgs> | null
    /**
     * The data needed to create a Emotion.
     */
    data: XOR<EmotionCreateInput, EmotionUncheckedCreateInput>
  }

  /**
   * Emotion createMany
   */
  export type EmotionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Emotions.
     */
    data: EmotionCreateManyInput | EmotionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Emotion createManyAndReturn
   */
  export type EmotionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emotion
     */
    select?: EmotionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Emotion
     */
    omit?: EmotionOmit<ExtArgs> | null
    /**
     * The data used to create many Emotions.
     */
    data: EmotionCreateManyInput | EmotionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Emotion update
   */
  export type EmotionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emotion
     */
    select?: EmotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emotion
     */
    omit?: EmotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmotionInclude<ExtArgs> | null
    /**
     * The data needed to update a Emotion.
     */
    data: XOR<EmotionUpdateInput, EmotionUncheckedUpdateInput>
    /**
     * Choose, which Emotion to update.
     */
    where: EmotionWhereUniqueInput
  }

  /**
   * Emotion updateMany
   */
  export type EmotionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Emotions.
     */
    data: XOR<EmotionUpdateManyMutationInput, EmotionUncheckedUpdateManyInput>
    /**
     * Filter which Emotions to update
     */
    where?: EmotionWhereInput
    /**
     * Limit how many Emotions to update.
     */
    limit?: number
  }

  /**
   * Emotion updateManyAndReturn
   */
  export type EmotionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emotion
     */
    select?: EmotionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Emotion
     */
    omit?: EmotionOmit<ExtArgs> | null
    /**
     * The data used to update Emotions.
     */
    data: XOR<EmotionUpdateManyMutationInput, EmotionUncheckedUpdateManyInput>
    /**
     * Filter which Emotions to update
     */
    where?: EmotionWhereInput
    /**
     * Limit how many Emotions to update.
     */
    limit?: number
  }

  /**
   * Emotion upsert
   */
  export type EmotionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emotion
     */
    select?: EmotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emotion
     */
    omit?: EmotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmotionInclude<ExtArgs> | null
    /**
     * The filter to search for the Emotion to update in case it exists.
     */
    where: EmotionWhereUniqueInput
    /**
     * In case the Emotion found by the `where` argument doesn't exist, create a new Emotion with this data.
     */
    create: XOR<EmotionCreateInput, EmotionUncheckedCreateInput>
    /**
     * In case the Emotion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmotionUpdateInput, EmotionUncheckedUpdateInput>
  }

  /**
   * Emotion delete
   */
  export type EmotionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emotion
     */
    select?: EmotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emotion
     */
    omit?: EmotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmotionInclude<ExtArgs> | null
    /**
     * Filter which Emotion to delete.
     */
    where: EmotionWhereUniqueInput
  }

  /**
   * Emotion deleteMany
   */
  export type EmotionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Emotions to delete
     */
    where?: EmotionWhereInput
    /**
     * Limit how many Emotions to delete.
     */
    limit?: number
  }

  /**
   * Emotion.quotes
   */
  export type Emotion$quotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quote
     */
    omit?: QuoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    where?: QuoteWhereInput
    orderBy?: QuoteOrderByWithRelationInput | QuoteOrderByWithRelationInput[]
    cursor?: QuoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuoteScalarFieldEnum | QuoteScalarFieldEnum[]
  }

  /**
   * Emotion without action
   */
  export type EmotionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emotion
     */
    select?: EmotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emotion
     */
    omit?: EmotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmotionInclude<ExtArgs> | null
  }


  /**
   * Model Author
   */

  export type AggregateAuthor = {
    _count: AuthorCountAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  export type AuthorMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type AuthorMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type AuthorCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type AuthorMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type AuthorMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type AuthorCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type AuthorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Author to aggregate.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Authors
    **/
    _count?: true | AuthorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorMaxAggregateInputType
  }

  export type GetAuthorAggregateType<T extends AuthorAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthor[P]>
      : GetScalarType<T[P], AggregateAuthor[P]>
  }




  export type AuthorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorWhereInput
    orderBy?: AuthorOrderByWithAggregationInput | AuthorOrderByWithAggregationInput[]
    by: AuthorScalarFieldEnum[] | AuthorScalarFieldEnum
    having?: AuthorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorCountAggregateInputType | true
    _min?: AuthorMinAggregateInputType
    _max?: AuthorMaxAggregateInputType
  }

  export type AuthorGroupByOutputType = {
    id: string
    name: string
    _count: AuthorCountAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  type GetAuthorGroupByPayload<T extends AuthorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorGroupByOutputType[P]>
        }
      >
    >


  export type AuthorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    quotes?: boolean | Author$quotesArgs<ExtArgs>
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["author"]>

  export type AuthorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["author"]>

  export type AuthorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["author"]>

  export type AuthorSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type AuthorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["author"]>
  export type AuthorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quotes?: boolean | Author$quotesArgs<ExtArgs>
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AuthorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AuthorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AuthorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Author"
    objects: {
      quotes: Prisma.$QuotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["author"]>
    composites: {}
  }

  type AuthorGetPayload<S extends boolean | null | undefined | AuthorDefaultArgs> = $Result.GetResult<Prisma.$AuthorPayload, S>

  type AuthorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthorCountAggregateInputType | true
    }

  export interface AuthorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Author'], meta: { name: 'Author' } }
    /**
     * Find zero or one Author that matches the filter.
     * @param {AuthorFindUniqueArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthorFindUniqueArgs>(args: SelectSubset<T, AuthorFindUniqueArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Author that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthorFindUniqueOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthorFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Author that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthorFindFirstArgs>(args?: SelectSubset<T, AuthorFindFirstArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Author that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthorFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authors
     * const authors = await prisma.author.findMany()
     * 
     * // Get first 10 Authors
     * const authors = await prisma.author.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authorWithIdOnly = await prisma.author.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthorFindManyArgs>(args?: SelectSubset<T, AuthorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Author.
     * @param {AuthorCreateArgs} args - Arguments to create a Author.
     * @example
     * // Create one Author
     * const Author = await prisma.author.create({
     *   data: {
     *     // ... data to create a Author
     *   }
     * })
     * 
     */
    create<T extends AuthorCreateArgs>(args: SelectSubset<T, AuthorCreateArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Authors.
     * @param {AuthorCreateManyArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const author = await prisma.author.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthorCreateManyArgs>(args?: SelectSubset<T, AuthorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Authors and returns the data saved in the database.
     * @param {AuthorCreateManyAndReturnArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const author = await prisma.author.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Authors and only return the `id`
     * const authorWithIdOnly = await prisma.author.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthorCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Author.
     * @param {AuthorDeleteArgs} args - Arguments to delete one Author.
     * @example
     * // Delete one Author
     * const Author = await prisma.author.delete({
     *   where: {
     *     // ... filter to delete one Author
     *   }
     * })
     * 
     */
    delete<T extends AuthorDeleteArgs>(args: SelectSubset<T, AuthorDeleteArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Author.
     * @param {AuthorUpdateArgs} args - Arguments to update one Author.
     * @example
     * // Update one Author
     * const author = await prisma.author.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthorUpdateArgs>(args: SelectSubset<T, AuthorUpdateArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Authors.
     * @param {AuthorDeleteManyArgs} args - Arguments to filter Authors to delete.
     * @example
     * // Delete a few Authors
     * const { count } = await prisma.author.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthorDeleteManyArgs>(args?: SelectSubset<T, AuthorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthorUpdateManyArgs>(args: SelectSubset<T, AuthorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors and returns the data updated in the database.
     * @param {AuthorUpdateManyAndReturnArgs} args - Arguments to update many Authors.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Authors and only return the `id`
     * const authorWithIdOnly = await prisma.author.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuthorUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Author.
     * @param {AuthorUpsertArgs} args - Arguments to update or create a Author.
     * @example
     * // Update or create a Author
     * const author = await prisma.author.upsert({
     *   create: {
     *     // ... data to create a Author
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Author we want to update
     *   }
     * })
     */
    upsert<T extends AuthorUpsertArgs>(args: SelectSubset<T, AuthorUpsertArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorCountArgs} args - Arguments to filter Authors to count.
     * @example
     * // Count the number of Authors
     * const count = await prisma.author.count({
     *   where: {
     *     // ... the filter for the Authors we want to count
     *   }
     * })
    **/
    count<T extends AuthorCountArgs>(
      args?: Subset<T, AuthorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthorAggregateArgs>(args: Subset<T, AuthorAggregateArgs>): Prisma.PrismaPromise<GetAuthorAggregateType<T>>

    /**
     * Group by Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthorGroupByArgs['orderBy'] }
        : { orderBy?: AuthorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Author model
   */
  readonly fields: AuthorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Author.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quotes<T extends Author$quotesArgs<ExtArgs> = {}>(args?: Subset<T, Author$quotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Author model
   */
  interface AuthorFieldRefs {
    readonly id: FieldRef<"Author", 'String'>
    readonly name: FieldRef<"Author", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Author findUnique
   */
  export type AuthorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author findUniqueOrThrow
   */
  export type AuthorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author findFirst
   */
  export type AuthorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Author findFirstOrThrow
   */
  export type AuthorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Author findMany
   */
  export type AuthorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Authors to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Author create
   */
  export type AuthorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The data needed to create a Author.
     */
    data: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>
  }

  /**
   * Author createMany
   */
  export type AuthorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Authors.
     */
    data: AuthorCreateManyInput | AuthorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Author createManyAndReturn
   */
  export type AuthorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * The data used to create many Authors.
     */
    data: AuthorCreateManyInput | AuthorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Author update
   */
  export type AuthorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The data needed to update a Author.
     */
    data: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>
    /**
     * Choose, which Author to update.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author updateMany
   */
  export type AuthorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Authors.
     */
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyInput>
    /**
     * Filter which Authors to update
     */
    where?: AuthorWhereInput
    /**
     * Limit how many Authors to update.
     */
    limit?: number
  }

  /**
   * Author updateManyAndReturn
   */
  export type AuthorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * The data used to update Authors.
     */
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyInput>
    /**
     * Filter which Authors to update
     */
    where?: AuthorWhereInput
    /**
     * Limit how many Authors to update.
     */
    limit?: number
  }

  /**
   * Author upsert
   */
  export type AuthorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The filter to search for the Author to update in case it exists.
     */
    where: AuthorWhereUniqueInput
    /**
     * In case the Author found by the `where` argument doesn't exist, create a new Author with this data.
     */
    create: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>
    /**
     * In case the Author was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>
  }

  /**
   * Author delete
   */
  export type AuthorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter which Author to delete.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author deleteMany
   */
  export type AuthorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Authors to delete
     */
    where?: AuthorWhereInput
    /**
     * Limit how many Authors to delete.
     */
    limit?: number
  }

  /**
   * Author.quotes
   */
  export type Author$quotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quote
     */
    select?: QuoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quote
     */
    omit?: QuoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteInclude<ExtArgs> | null
    where?: QuoteWhereInput
    orderBy?: QuoteOrderByWithRelationInput | QuoteOrderByWithRelationInput[]
    cursor?: QuoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuoteScalarFieldEnum | QuoteScalarFieldEnum[]
  }

  /**
   * Author without action
   */
  export type AuthorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const QuoteScalarFieldEnum: {
    id: 'id',
    text: 'text',
    createdAt: 'createdAt',
    emotionId: 'emotionId',
    authorId: 'authorId'
  };

  export type QuoteScalarFieldEnum = (typeof QuoteScalarFieldEnum)[keyof typeof QuoteScalarFieldEnum]


  export const EmotionScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type EmotionScalarFieldEnum = (typeof EmotionScalarFieldEnum)[keyof typeof EmotionScalarFieldEnum]


  export const AuthorScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type AuthorScalarFieldEnum = (typeof AuthorScalarFieldEnum)[keyof typeof AuthorScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type QuoteWhereInput = {
    AND?: QuoteWhereInput | QuoteWhereInput[]
    OR?: QuoteWhereInput[]
    NOT?: QuoteWhereInput | QuoteWhereInput[]
    id?: StringFilter<"Quote"> | string
    text?: StringFilter<"Quote"> | string
    createdAt?: DateTimeFilter<"Quote"> | Date | string
    emotionId?: StringNullableFilter<"Quote"> | string | null
    authorId?: StringNullableFilter<"Quote"> | string | null
    emotion?: XOR<EmotionNullableScalarRelationFilter, EmotionWhereInput> | null
    author?: XOR<AuthorNullableScalarRelationFilter, AuthorWhereInput> | null
  }

  export type QuoteOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    emotionId?: SortOrderInput | SortOrder
    authorId?: SortOrderInput | SortOrder
    emotion?: EmotionOrderByWithRelationInput
    author?: AuthorOrderByWithRelationInput
  }

  export type QuoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuoteWhereInput | QuoteWhereInput[]
    OR?: QuoteWhereInput[]
    NOT?: QuoteWhereInput | QuoteWhereInput[]
    text?: StringFilter<"Quote"> | string
    createdAt?: DateTimeFilter<"Quote"> | Date | string
    emotionId?: StringNullableFilter<"Quote"> | string | null
    authorId?: StringNullableFilter<"Quote"> | string | null
    emotion?: XOR<EmotionNullableScalarRelationFilter, EmotionWhereInput> | null
    author?: XOR<AuthorNullableScalarRelationFilter, AuthorWhereInput> | null
  }, "id">

  export type QuoteOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    emotionId?: SortOrderInput | SortOrder
    authorId?: SortOrderInput | SortOrder
    _count?: QuoteCountOrderByAggregateInput
    _max?: QuoteMaxOrderByAggregateInput
    _min?: QuoteMinOrderByAggregateInput
  }

  export type QuoteScalarWhereWithAggregatesInput = {
    AND?: QuoteScalarWhereWithAggregatesInput | QuoteScalarWhereWithAggregatesInput[]
    OR?: QuoteScalarWhereWithAggregatesInput[]
    NOT?: QuoteScalarWhereWithAggregatesInput | QuoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Quote"> | string
    text?: StringWithAggregatesFilter<"Quote"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Quote"> | Date | string
    emotionId?: StringNullableWithAggregatesFilter<"Quote"> | string | null
    authorId?: StringNullableWithAggregatesFilter<"Quote"> | string | null
  }

  export type EmotionWhereInput = {
    AND?: EmotionWhereInput | EmotionWhereInput[]
    OR?: EmotionWhereInput[]
    NOT?: EmotionWhereInput | EmotionWhereInput[]
    id?: StringFilter<"Emotion"> | string
    name?: StringFilter<"Emotion"> | string
    quotes?: QuoteListRelationFilter
  }

  export type EmotionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    quotes?: QuoteOrderByRelationAggregateInput
  }

  export type EmotionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: EmotionWhereInput | EmotionWhereInput[]
    OR?: EmotionWhereInput[]
    NOT?: EmotionWhereInput | EmotionWhereInput[]
    quotes?: QuoteListRelationFilter
  }, "id" | "name">

  export type EmotionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: EmotionCountOrderByAggregateInput
    _max?: EmotionMaxOrderByAggregateInput
    _min?: EmotionMinOrderByAggregateInput
  }

  export type EmotionScalarWhereWithAggregatesInput = {
    AND?: EmotionScalarWhereWithAggregatesInput | EmotionScalarWhereWithAggregatesInput[]
    OR?: EmotionScalarWhereWithAggregatesInput[]
    NOT?: EmotionScalarWhereWithAggregatesInput | EmotionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Emotion"> | string
    name?: StringWithAggregatesFilter<"Emotion"> | string
  }

  export type AuthorWhereInput = {
    AND?: AuthorWhereInput | AuthorWhereInput[]
    OR?: AuthorWhereInput[]
    NOT?: AuthorWhereInput | AuthorWhereInput[]
    id?: StringFilter<"Author"> | string
    name?: StringFilter<"Author"> | string
    quotes?: QuoteListRelationFilter
  }

  export type AuthorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    quotes?: QuoteOrderByRelationAggregateInput
  }

  export type AuthorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: AuthorWhereInput | AuthorWhereInput[]
    OR?: AuthorWhereInput[]
    NOT?: AuthorWhereInput | AuthorWhereInput[]
    quotes?: QuoteListRelationFilter
  }, "id" | "name">

  export type AuthorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: AuthorCountOrderByAggregateInput
    _max?: AuthorMaxOrderByAggregateInput
    _min?: AuthorMinOrderByAggregateInput
  }

  export type AuthorScalarWhereWithAggregatesInput = {
    AND?: AuthorScalarWhereWithAggregatesInput | AuthorScalarWhereWithAggregatesInput[]
    OR?: AuthorScalarWhereWithAggregatesInput[]
    NOT?: AuthorScalarWhereWithAggregatesInput | AuthorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Author"> | string
    name?: StringWithAggregatesFilter<"Author"> | string
  }

  export type QuoteCreateInput = {
    id?: string
    text: string
    createdAt?: Date | string
    emotion?: EmotionCreateNestedOneWithoutQuotesInput
    author?: AuthorCreateNestedOneWithoutQuotesInput
  }

  export type QuoteUncheckedCreateInput = {
    id?: string
    text: string
    createdAt?: Date | string
    emotionId?: string | null
    authorId?: string | null
  }

  export type QuoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emotion?: EmotionUpdateOneWithoutQuotesNestedInput
    author?: AuthorUpdateOneWithoutQuotesNestedInput
  }

  export type QuoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emotionId?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuoteCreateManyInput = {
    id?: string
    text: string
    createdAt?: Date | string
    emotionId?: string | null
    authorId?: string | null
  }

  export type QuoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emotionId?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmotionCreateInput = {
    id?: string
    name: string
    quotes?: QuoteCreateNestedManyWithoutEmotionInput
  }

  export type EmotionUncheckedCreateInput = {
    id?: string
    name: string
    quotes?: QuoteUncheckedCreateNestedManyWithoutEmotionInput
  }

  export type EmotionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quotes?: QuoteUpdateManyWithoutEmotionNestedInput
  }

  export type EmotionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quotes?: QuoteUncheckedUpdateManyWithoutEmotionNestedInput
  }

  export type EmotionCreateManyInput = {
    id?: string
    name: string
  }

  export type EmotionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type EmotionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AuthorCreateInput = {
    id?: string
    name: string
    quotes?: QuoteCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUncheckedCreateInput = {
    id?: string
    name: string
    quotes?: QuoteUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quotes?: QuoteUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quotes?: QuoteUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorCreateManyInput = {
    id?: string
    name: string
  }

  export type AuthorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AuthorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EmotionNullableScalarRelationFilter = {
    is?: EmotionWhereInput | null
    isNot?: EmotionWhereInput | null
  }

  export type AuthorNullableScalarRelationFilter = {
    is?: AuthorWhereInput | null
    isNot?: AuthorWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type QuoteCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    emotionId?: SortOrder
    authorId?: SortOrder
  }

  export type QuoteMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    emotionId?: SortOrder
    authorId?: SortOrder
  }

  export type QuoteMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    emotionId?: SortOrder
    authorId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type QuoteListRelationFilter = {
    every?: QuoteWhereInput
    some?: QuoteWhereInput
    none?: QuoteWhereInput
  }

  export type QuoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmotionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type EmotionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type EmotionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AuthorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AuthorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AuthorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type EmotionCreateNestedOneWithoutQuotesInput = {
    create?: XOR<EmotionCreateWithoutQuotesInput, EmotionUncheckedCreateWithoutQuotesInput>
    connectOrCreate?: EmotionCreateOrConnectWithoutQuotesInput
    connect?: EmotionWhereUniqueInput
  }

  export type AuthorCreateNestedOneWithoutQuotesInput = {
    create?: XOR<AuthorCreateWithoutQuotesInput, AuthorUncheckedCreateWithoutQuotesInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutQuotesInput
    connect?: AuthorWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EmotionUpdateOneWithoutQuotesNestedInput = {
    create?: XOR<EmotionCreateWithoutQuotesInput, EmotionUncheckedCreateWithoutQuotesInput>
    connectOrCreate?: EmotionCreateOrConnectWithoutQuotesInput
    upsert?: EmotionUpsertWithoutQuotesInput
    disconnect?: EmotionWhereInput | boolean
    delete?: EmotionWhereInput | boolean
    connect?: EmotionWhereUniqueInput
    update?: XOR<XOR<EmotionUpdateToOneWithWhereWithoutQuotesInput, EmotionUpdateWithoutQuotesInput>, EmotionUncheckedUpdateWithoutQuotesInput>
  }

  export type AuthorUpdateOneWithoutQuotesNestedInput = {
    create?: XOR<AuthorCreateWithoutQuotesInput, AuthorUncheckedCreateWithoutQuotesInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutQuotesInput
    upsert?: AuthorUpsertWithoutQuotesInput
    disconnect?: AuthorWhereInput | boolean
    delete?: AuthorWhereInput | boolean
    connect?: AuthorWhereUniqueInput
    update?: XOR<XOR<AuthorUpdateToOneWithWhereWithoutQuotesInput, AuthorUpdateWithoutQuotesInput>, AuthorUncheckedUpdateWithoutQuotesInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type QuoteCreateNestedManyWithoutEmotionInput = {
    create?: XOR<QuoteCreateWithoutEmotionInput, QuoteUncheckedCreateWithoutEmotionInput> | QuoteCreateWithoutEmotionInput[] | QuoteUncheckedCreateWithoutEmotionInput[]
    connectOrCreate?: QuoteCreateOrConnectWithoutEmotionInput | QuoteCreateOrConnectWithoutEmotionInput[]
    createMany?: QuoteCreateManyEmotionInputEnvelope
    connect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
  }

  export type QuoteUncheckedCreateNestedManyWithoutEmotionInput = {
    create?: XOR<QuoteCreateWithoutEmotionInput, QuoteUncheckedCreateWithoutEmotionInput> | QuoteCreateWithoutEmotionInput[] | QuoteUncheckedCreateWithoutEmotionInput[]
    connectOrCreate?: QuoteCreateOrConnectWithoutEmotionInput | QuoteCreateOrConnectWithoutEmotionInput[]
    createMany?: QuoteCreateManyEmotionInputEnvelope
    connect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
  }

  export type QuoteUpdateManyWithoutEmotionNestedInput = {
    create?: XOR<QuoteCreateWithoutEmotionInput, QuoteUncheckedCreateWithoutEmotionInput> | QuoteCreateWithoutEmotionInput[] | QuoteUncheckedCreateWithoutEmotionInput[]
    connectOrCreate?: QuoteCreateOrConnectWithoutEmotionInput | QuoteCreateOrConnectWithoutEmotionInput[]
    upsert?: QuoteUpsertWithWhereUniqueWithoutEmotionInput | QuoteUpsertWithWhereUniqueWithoutEmotionInput[]
    createMany?: QuoteCreateManyEmotionInputEnvelope
    set?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    disconnect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    delete?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    connect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    update?: QuoteUpdateWithWhereUniqueWithoutEmotionInput | QuoteUpdateWithWhereUniqueWithoutEmotionInput[]
    updateMany?: QuoteUpdateManyWithWhereWithoutEmotionInput | QuoteUpdateManyWithWhereWithoutEmotionInput[]
    deleteMany?: QuoteScalarWhereInput | QuoteScalarWhereInput[]
  }

  export type QuoteUncheckedUpdateManyWithoutEmotionNestedInput = {
    create?: XOR<QuoteCreateWithoutEmotionInput, QuoteUncheckedCreateWithoutEmotionInput> | QuoteCreateWithoutEmotionInput[] | QuoteUncheckedCreateWithoutEmotionInput[]
    connectOrCreate?: QuoteCreateOrConnectWithoutEmotionInput | QuoteCreateOrConnectWithoutEmotionInput[]
    upsert?: QuoteUpsertWithWhereUniqueWithoutEmotionInput | QuoteUpsertWithWhereUniqueWithoutEmotionInput[]
    createMany?: QuoteCreateManyEmotionInputEnvelope
    set?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    disconnect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    delete?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    connect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    update?: QuoteUpdateWithWhereUniqueWithoutEmotionInput | QuoteUpdateWithWhereUniqueWithoutEmotionInput[]
    updateMany?: QuoteUpdateManyWithWhereWithoutEmotionInput | QuoteUpdateManyWithWhereWithoutEmotionInput[]
    deleteMany?: QuoteScalarWhereInput | QuoteScalarWhereInput[]
  }

  export type QuoteCreateNestedManyWithoutAuthorInput = {
    create?: XOR<QuoteCreateWithoutAuthorInput, QuoteUncheckedCreateWithoutAuthorInput> | QuoteCreateWithoutAuthorInput[] | QuoteUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: QuoteCreateOrConnectWithoutAuthorInput | QuoteCreateOrConnectWithoutAuthorInput[]
    createMany?: QuoteCreateManyAuthorInputEnvelope
    connect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
  }

  export type QuoteUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<QuoteCreateWithoutAuthorInput, QuoteUncheckedCreateWithoutAuthorInput> | QuoteCreateWithoutAuthorInput[] | QuoteUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: QuoteCreateOrConnectWithoutAuthorInput | QuoteCreateOrConnectWithoutAuthorInput[]
    createMany?: QuoteCreateManyAuthorInputEnvelope
    connect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
  }

  export type QuoteUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<QuoteCreateWithoutAuthorInput, QuoteUncheckedCreateWithoutAuthorInput> | QuoteCreateWithoutAuthorInput[] | QuoteUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: QuoteCreateOrConnectWithoutAuthorInput | QuoteCreateOrConnectWithoutAuthorInput[]
    upsert?: QuoteUpsertWithWhereUniqueWithoutAuthorInput | QuoteUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: QuoteCreateManyAuthorInputEnvelope
    set?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    disconnect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    delete?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    connect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    update?: QuoteUpdateWithWhereUniqueWithoutAuthorInput | QuoteUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: QuoteUpdateManyWithWhereWithoutAuthorInput | QuoteUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: QuoteScalarWhereInput | QuoteScalarWhereInput[]
  }

  export type QuoteUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<QuoteCreateWithoutAuthorInput, QuoteUncheckedCreateWithoutAuthorInput> | QuoteCreateWithoutAuthorInput[] | QuoteUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: QuoteCreateOrConnectWithoutAuthorInput | QuoteCreateOrConnectWithoutAuthorInput[]
    upsert?: QuoteUpsertWithWhereUniqueWithoutAuthorInput | QuoteUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: QuoteCreateManyAuthorInputEnvelope
    set?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    disconnect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    delete?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    connect?: QuoteWhereUniqueInput | QuoteWhereUniqueInput[]
    update?: QuoteUpdateWithWhereUniqueWithoutAuthorInput | QuoteUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: QuoteUpdateManyWithWhereWithoutAuthorInput | QuoteUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: QuoteScalarWhereInput | QuoteScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EmotionCreateWithoutQuotesInput = {
    id?: string
    name: string
  }

  export type EmotionUncheckedCreateWithoutQuotesInput = {
    id?: string
    name: string
  }

  export type EmotionCreateOrConnectWithoutQuotesInput = {
    where: EmotionWhereUniqueInput
    create: XOR<EmotionCreateWithoutQuotesInput, EmotionUncheckedCreateWithoutQuotesInput>
  }

  export type AuthorCreateWithoutQuotesInput = {
    id?: string
    name: string
  }

  export type AuthorUncheckedCreateWithoutQuotesInput = {
    id?: string
    name: string
  }

  export type AuthorCreateOrConnectWithoutQuotesInput = {
    where: AuthorWhereUniqueInput
    create: XOR<AuthorCreateWithoutQuotesInput, AuthorUncheckedCreateWithoutQuotesInput>
  }

  export type EmotionUpsertWithoutQuotesInput = {
    update: XOR<EmotionUpdateWithoutQuotesInput, EmotionUncheckedUpdateWithoutQuotesInput>
    create: XOR<EmotionCreateWithoutQuotesInput, EmotionUncheckedCreateWithoutQuotesInput>
    where?: EmotionWhereInput
  }

  export type EmotionUpdateToOneWithWhereWithoutQuotesInput = {
    where?: EmotionWhereInput
    data: XOR<EmotionUpdateWithoutQuotesInput, EmotionUncheckedUpdateWithoutQuotesInput>
  }

  export type EmotionUpdateWithoutQuotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type EmotionUncheckedUpdateWithoutQuotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AuthorUpsertWithoutQuotesInput = {
    update: XOR<AuthorUpdateWithoutQuotesInput, AuthorUncheckedUpdateWithoutQuotesInput>
    create: XOR<AuthorCreateWithoutQuotesInput, AuthorUncheckedCreateWithoutQuotesInput>
    where?: AuthorWhereInput
  }

  export type AuthorUpdateToOneWithWhereWithoutQuotesInput = {
    where?: AuthorWhereInput
    data: XOR<AuthorUpdateWithoutQuotesInput, AuthorUncheckedUpdateWithoutQuotesInput>
  }

  export type AuthorUpdateWithoutQuotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AuthorUncheckedUpdateWithoutQuotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type QuoteCreateWithoutEmotionInput = {
    id?: string
    text: string
    createdAt?: Date | string
    author?: AuthorCreateNestedOneWithoutQuotesInput
  }

  export type QuoteUncheckedCreateWithoutEmotionInput = {
    id?: string
    text: string
    createdAt?: Date | string
    authorId?: string | null
  }

  export type QuoteCreateOrConnectWithoutEmotionInput = {
    where: QuoteWhereUniqueInput
    create: XOR<QuoteCreateWithoutEmotionInput, QuoteUncheckedCreateWithoutEmotionInput>
  }

  export type QuoteCreateManyEmotionInputEnvelope = {
    data: QuoteCreateManyEmotionInput | QuoteCreateManyEmotionInput[]
    skipDuplicates?: boolean
  }

  export type QuoteUpsertWithWhereUniqueWithoutEmotionInput = {
    where: QuoteWhereUniqueInput
    update: XOR<QuoteUpdateWithoutEmotionInput, QuoteUncheckedUpdateWithoutEmotionInput>
    create: XOR<QuoteCreateWithoutEmotionInput, QuoteUncheckedCreateWithoutEmotionInput>
  }

  export type QuoteUpdateWithWhereUniqueWithoutEmotionInput = {
    where: QuoteWhereUniqueInput
    data: XOR<QuoteUpdateWithoutEmotionInput, QuoteUncheckedUpdateWithoutEmotionInput>
  }

  export type QuoteUpdateManyWithWhereWithoutEmotionInput = {
    where: QuoteScalarWhereInput
    data: XOR<QuoteUpdateManyMutationInput, QuoteUncheckedUpdateManyWithoutEmotionInput>
  }

  export type QuoteScalarWhereInput = {
    AND?: QuoteScalarWhereInput | QuoteScalarWhereInput[]
    OR?: QuoteScalarWhereInput[]
    NOT?: QuoteScalarWhereInput | QuoteScalarWhereInput[]
    id?: StringFilter<"Quote"> | string
    text?: StringFilter<"Quote"> | string
    createdAt?: DateTimeFilter<"Quote"> | Date | string
    emotionId?: StringNullableFilter<"Quote"> | string | null
    authorId?: StringNullableFilter<"Quote"> | string | null
  }

  export type QuoteCreateWithoutAuthorInput = {
    id?: string
    text: string
    createdAt?: Date | string
    emotion?: EmotionCreateNestedOneWithoutQuotesInput
  }

  export type QuoteUncheckedCreateWithoutAuthorInput = {
    id?: string
    text: string
    createdAt?: Date | string
    emotionId?: string | null
  }

  export type QuoteCreateOrConnectWithoutAuthorInput = {
    where: QuoteWhereUniqueInput
    create: XOR<QuoteCreateWithoutAuthorInput, QuoteUncheckedCreateWithoutAuthorInput>
  }

  export type QuoteCreateManyAuthorInputEnvelope = {
    data: QuoteCreateManyAuthorInput | QuoteCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type QuoteUpsertWithWhereUniqueWithoutAuthorInput = {
    where: QuoteWhereUniqueInput
    update: XOR<QuoteUpdateWithoutAuthorInput, QuoteUncheckedUpdateWithoutAuthorInput>
    create: XOR<QuoteCreateWithoutAuthorInput, QuoteUncheckedCreateWithoutAuthorInput>
  }

  export type QuoteUpdateWithWhereUniqueWithoutAuthorInput = {
    where: QuoteWhereUniqueInput
    data: XOR<QuoteUpdateWithoutAuthorInput, QuoteUncheckedUpdateWithoutAuthorInput>
  }

  export type QuoteUpdateManyWithWhereWithoutAuthorInput = {
    where: QuoteScalarWhereInput
    data: XOR<QuoteUpdateManyMutationInput, QuoteUncheckedUpdateManyWithoutAuthorInput>
  }

  export type QuoteCreateManyEmotionInput = {
    id?: string
    text: string
    createdAt?: Date | string
    authorId?: string | null
  }

  export type QuoteUpdateWithoutEmotionInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: AuthorUpdateOneWithoutQuotesNestedInput
  }

  export type QuoteUncheckedUpdateWithoutEmotionInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuoteUncheckedUpdateManyWithoutEmotionInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuoteCreateManyAuthorInput = {
    id?: string
    text: string
    createdAt?: Date | string
    emotionId?: string | null
  }

  export type QuoteUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emotion?: EmotionUpdateOneWithoutQuotesNestedInput
  }

  export type QuoteUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emotionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuoteUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emotionId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}