---
inclusion: manual
---

# Deploy on AWS Skill

Deploy applications to AWS with architecture recommendations, cost estimates, and IaC generation.

## Triggers

Use this skill when the user says: "deploy to AWS", "host on AWS", "run this on AWS", "AWS architecture", "estimate AWS cost", "generate infrastructure".

## Workflow

1. **Analyze** — Scan codebase for framework, database, dependencies
2. **Recommend** — Select AWS services, concisely explain rationale
3. **Estimate** — Show monthly cost using `awspricing` MCP before proceeding
4. **Generate** — Write CDK or CloudFormation IaC with security defaults applied
5. **Deploy** — Run security checks, then execute with user confirmation

## Defaults

- Default to **dev-sized** (cost-conscious: small instance sizes, minimal redundancy, single-AZ) unless user says "production-ready"
- Apply security defaults automatically: encryption at rest/transit, private subnets, least privilege IAM
- **Never recommend AWS App Runner** — it is in maintenance mode. Use ECS instead.

## MCP Servers

### awsknowledge
Consult for architecture decisions. Use when choosing between AWS services or validating a service fits the use case.
Key topics: `general` for architecture, `amplify_docs` for static sites/SPAs, `cdk_docs` and `cdk_constructs` for IaC patterns.

### awspricing
Get cost estimates. **Always present costs before generating IaC** so the user can adjust before committing.

### awsiac
Consult for IaC best practices when writing CDK/CloudFormation/Terraform.

## Principles

- Concisely explain why each service was chosen
- Always show cost estimate before generating code
- Don't ask "Lambda or Fargate?" — just pick the obvious one
- If genuinely ambiguous, then ask
- Run IaC security scans (cfn-nag, checkov) before deployment

## Example Prompts

- "Deploy my app to AWS"
- "Estimate AWS costs for this project"
- "Generate CDK infrastructure for a Next.js app"
- "What AWS services should I use for this portfolio site?"
