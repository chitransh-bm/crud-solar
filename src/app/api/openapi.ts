import { appRouter } from "@/server";
import { generateOpenApiDocument } from "trpc-openapi";

/* 👇 */
export const openApiDocument = generateOpenApiDocument(appRouter, {
  title: "tRPC OpenAPI",
  version: "1.0.0",
  baseUrl: "http://localhost:3000",
});
