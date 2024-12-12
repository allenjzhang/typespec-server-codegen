// Generated by Microsoft TypeSpec

import * as http from "node:http";

import * as serverRaw from "./operations/server-raw.js";

import { Users, TodoItems } from "../models/all/todo/index.js";

import { Attachments } from "../models/all/todo/todo-items.js";

import {
  RouterOptions,
  createPolicyChain,
  createPolicyChainForRoute,
  HttpContext,
} from "../helpers/router.js";

export interface TodoRouter {
  /**
   * Dispatches the request to the appropriate service based on the request path.
   *
   * This member function may be used directly as a handler for a Node HTTP server.
   *
   * @param request - The incoming HTTP request.
   * @param response - The outgoing HTTP response.
   */
  dispatch(request: http.IncomingMessage, response: http.ServerResponse): void;

  /**
   * An Express middleware function that dispatches the request to the appropriate service based on the request path.
   *
   * This member function may be used directly as an application-level middleware function in an Express app.
   *
   * If the router does not match a route, it will call the `next` middleware registered with the application,
   * so it is sensible to insert this middleware at the beginning of the middleware stack.
   *
   * @param req - The incoming HTTP request.
   * @param res - The outgoing HTTP response.
   * @param next - The next middleware function in the stack.
   */
  expressMiddleware(
    req: http.IncomingMessage,
    res: http.ServerResponse,
    next: () => void,
  ): void;
}

export function createTodoRouter(
  users: Users,
  todoItems: TodoItems,
  attachments: Attachments,
  options: RouterOptions<{
    users: Users<HttpContext>;
    todoItems: TodoItems<HttpContext>;
    attachments: Attachments<HttpContext>;
  }> = {},
): TodoRouter {
  const onRouteNotFound =
    options.onRequestNotFound ??
    ((request, response) => {
      response.statusCode = 404;
      response.setHeader("Content-Type", "text/plain");
      response.end("Not Found");
    });

  const onInvalidRequest =
    options.onInvalidRequest ??
    ((request, response, route, error) => {
      response.statusCode = 400;
      response.setHeader("Content-Type", "application/json");
      response.end(JSON.stringify({ error }));
    });

  const onInternalError =
    options.onInternalError ??
    ((error, request, response) => {
      response.statusCode = 500;
      response.setHeader("Content-Type", "text/plain");
      response.end("Internal server error.");
    });

  const routePolicies = options.routePolicies ?? {};

  const routeHandlers = {
    users_create: createPolicyChainForRoute(
      "usersCreateDispatch",
      routePolicies,
      "users",
      "create",
      serverRaw.users_create,
    ),
    todo_items_list: createPolicyChainForRoute(
      "todoItemsListDispatch",
      routePolicies,
      "todoItems",
      "list",
      serverRaw.todo_items_list,
    ),
    todo_items_create: createPolicyChainForRoute(
      "todoItemsCreateDispatch",
      routePolicies,
      "todoItems",
      "create",
      serverRaw.todo_items_create,
    ),
    todo_items_get: createPolicyChainForRoute(
      "todoItemsGetDispatch",
      routePolicies,
      "todoItems",
      "get",
      serverRaw.todo_items_get,
    ),
    todo_items_update: createPolicyChainForRoute(
      "todoItemsUpdateDispatch",
      routePolicies,
      "todoItems",
      "update",
      serverRaw.todo_items_update,
    ),
    todo_items_delete: createPolicyChainForRoute(
      "todoItemsDeleteDispatch",
      routePolicies,
      "todoItems",
      "delete",
      serverRaw.todo_items_delete,
    ),
    attachments_list: createPolicyChainForRoute(
      "attachmentsListDispatch",
      routePolicies,
      "attachments",
      "list",
      serverRaw.attachments_list,
    ),
    attachments_create_attachment: createPolicyChainForRoute(
      "attachmentsCreateAttachmentDispatch",
      routePolicies,
      "attachments",
      "createAttachment",
      serverRaw.attachments_create_attachment,
    ),
  } as const;

  const dispatch = createPolicyChain(
    "TodoRouterDispatch",
    options.policies ?? [],
    async function (ctx, request, response, onRouteNotFound) {
      const url = new URL(request.url!, `http://${request.headers.host}`);
      let path = url.pathname;

      if (path.length === 0) {
        return onRouteNotFound(request, response);
      } else if (path.startsWith("/")) {
        path = path.slice(1);
        if (path.length === 0) {
          return onRouteNotFound(request, response);
        } else if (path.startsWith("users")) {
          path = path.slice(5);
          if (path.length === 0) {
            switch (request.method) {
              case "POST":
                return routeHandlers.users_create(
                  ctx,
                  request,
                  response,
                  users,
                );
              default:
                return onRouteNotFound(request, response);
            }
          } else {
            return onRouteNotFound(request, response);
          }
        } else if (path.startsWith("items")) {
          path = path.slice(5);
          if (path.length === 0) {
            switch (request.method) {
              case "GET":
                return routeHandlers.todo_items_list(
                  ctx,
                  request,
                  response,
                  todoItems,
                );
              case "POST":
                return routeHandlers.todo_items_create(
                  ctx,
                  request,
                  response,
                  todoItems,
                );
              default:
                return onRouteNotFound(request, response);
            }
          } else if (path.startsWith("/")) {
            path = path.slice(1);
            if (path.length === 0) {
              return onRouteNotFound(request, response);
            } else {
              let __param_idx = path.indexOf("/");
              __param_idx = __param_idx === -1 ? path.length : __param_idx;
              const param = path.slice(0, __param_idx);
              path = path.slice(__param_idx);
              const id = param;
              const itemId = param;
              if (path.length === 0) {
                switch (request.method) {
                  case "GET":
                    return routeHandlers.todo_items_get(
                      ctx,
                      request,
                      response,
                      todoItems,
                      id,
                    );
                  case "PATCH":
                    return routeHandlers.todo_items_update(
                      ctx,
                      request,
                      response,
                      todoItems,
                      id,
                    );
                  case "DELETE":
                    return routeHandlers.todo_items_delete(
                      ctx,
                      request,
                      response,
                      todoItems,
                      id,
                    );
                  default:
                    return onRouteNotFound(request, response);
                }
              } else if (path.startsWith("/attachments")) {
                path = path.slice(12);
                if (path.length === 0) {
                  switch (request.method) {
                    case "GET":
                      return routeHandlers.attachments_list(
                        ctx,
                        request,
                        response,
                        attachments,
                        itemId,
                      );
                    case "POST":
                      return routeHandlers.attachments_create_attachment(
                        ctx,
                        request,
                        response,
                        attachments,
                        itemId,
                      );
                    default:
                      return onRouteNotFound(request, response);
                  }
                } else {
                  return onRouteNotFound(request, response);
                }
              }
            }
          }
        }
      }

      return onRouteNotFound(request, response);
    },
  );

  return {
    dispatch(request, response) {
      return dispatch(
        { request, response },
        request,
        response,
        onRouteNotFound,
      ).catch((e) => onInternalError(e, request, response));
    },
    expressMiddleware: function (request, response, next) {
      void dispatch({ request, response }, request, response, function () {
        next();
      }).catch((e) => onInternalError(e, request, response));
    },
  };
}