/* prettier-ignore-start */

/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as public from "../public.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  public: typeof public;
}>;
declare const fullApiWithMounts: typeof fullApi & {
  public: {
    checkRateLimit: FunctionReference<
      "query",
      "public",
      {
        config:
          | {
              capacity?: number;
              kind: "token bucket";
              maxReserved?: number;
              period: number;
              rate: number;
              shards?: number;
            }
          | {
              capacity?: number;
              kind: "fixed window";
              maxReserved?: number;
              period: number;
              rate: number;
              shards?: number;
              start?: number;
            };
        count?: number;
        key?: string;
        name: string;
        reserve?: boolean;
        throws?: boolean;
      },
      { ok: true; retryAt?: number } | { ok: false; retryAt: number }
    >;
    rateLimit: FunctionReference<
      "mutation",
      "public",
      {
        config:
          | {
              capacity?: number;
              kind: "token bucket";
              maxReserved?: number;
              period: number;
              rate: number;
              shards?: number;
            }
          | {
              capacity?: number;
              kind: "fixed window";
              maxReserved?: number;
              period: number;
              rate: number;
              shards?: number;
              start?: number;
            };
        count?: number;
        key?: string;
        name: string;
        reserve?: boolean;
        throws?: boolean;
      },
      { ok: true; retryAt?: number } | { ok: false; retryAt: number }
    >;
    resetRateLimit: FunctionReference<
      "mutation",
      "public",
      { key?: string; name: string },
      any
    >;
  };
};

export declare const api: FilterApi<
  typeof fullApiWithMounts,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApiWithMounts,
  FunctionReference<any, "internal">
>;

/* prettier-ignore-end */
