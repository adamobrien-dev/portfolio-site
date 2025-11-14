// src/data/contributions.ts

export type ContributionStatus = "open" | "merged" | "closed";

export interface Contribution {
  key: string;
  project: string;
  title: string;
  description: string;
  status: ContributionStatus;
  link: string;
  highlights: string[];
}

export const contributions: Contribution[] = [
  {
    key: "fastapi-query-pr",
    project: "FastAPI",
    title: "Add QUERY HTTP method support",
    description:
      "Opened FastAPI PR #14351 to introduce APIRouter.query()/FastAPI.query() helpers, enable QUERY bodies in OpenAPI output, and cover the new verb with regression tests.",
    status: "open",
    link: "https://github.com/fastapi/fastapi/pull/14351",
    highlights: [
      "Adds path-operation decorators for the QUERY verb",
      "Marks QUERY as body-capable in generated OpenAPI schemas",
      "Ships regression tests for runtime behavior and docs output",
    ],
  },
];

