import { gql } from "apollo-server-core";
import { DocumentModels, BudgetStatement } from "@acaldas/document-model-libs";
import { BudgetStatementSchema } from "../generated/budget-statement/zod";
import db from "../db";

export const typeDefs = [
    gql`
        type BudgetStatement {
            name: String
            documentType: String
            revision: Int
            created: DateTime
            lastModified: DateTime
            data: BudgetStatementData
            # operations: [IOperation!]!
        }

        type BudgetStatementData {
            # owner: Owner
            month: String
            quoteCurrency: String
            # accounts: [Account!]!
            vesting: [Vesting!]!
            # ftes: FTE
            # auditReports: [AuditReport!]!
            # comments: [Comment!]!
        }

        type Vesting {
            key: String!
            date: String!
            amount: String!
            amountOld: String!
            comment: String!
            currency: String!
            vested: Boolean!
        }

        input VestingInput {
            key: String!
            date: String
            amount: String
            amountOld: String
            comment: String
            currency: String
            vested: Boolean
        }

        type Query {
            budgetStatement(documentId: String): BudgetStatement
        }

        type Mutation {
            addVesting(
                documentId: String!
                input: [VestingInput!]!
            ): BudgetStatementData
            updateVesting(
                documentId: String!
                input: [VestingInput!]!
            ): BudgetStatementData
            deleteVesting(
                documentId: String!
                input: [String!]!
            ): BudgetStatementData
        }
    `,
];

export const resolvers = {
    Query: {
        budgetStatement: async (_: any, { documentId }: any, __: any) => {
            return db.find(documentId);
        },
    },
    Mutation: {
        addVesting: async (_: any, { documentId, input }: any, __: any) => {
            // load the document by ID
            const document = db.find(documentId);

            // throws if invalid budget statement schema
            BudgetStatementSchema().parse(document);

            // retrives Budget Statement processor
            const BudgetStatement =
                DocumentModels["powerhouse/budget-statement"];

            // builds ADD_VESTING action
            // throws if invalid input
            const action = BudgetStatement.actions.addVesting(input);

            // applies action to the document
            const newBudget = BudgetStatement.reducer(document, action);

            // saves new version of the document
            db.save(documentId, newBudget);

            // returns budget statement data
            return newBudget.data;
        },
        updateVesting: async (_: any, { documentId, input }: any, __: any) => {
            const document = db.find(documentId);

            BudgetStatementSchema().parse(document);

            const actionType = "UPDATE_VESTING" as const;
            const action = {
                type: actionType,
                input,
            };
            const newBudget = BudgetStatement.reducer(document, action);

            db.save(documentId, newBudget);

            return newBudget.data;
        },
        deleteVesting: async (_: any, { documentId, input }: any, __: any) => {
            const document = db.find(documentId);

            BudgetStatementSchema().parse(document);

            const action = BudgetStatement.actions.deleteVesting(input);
            const newBudget = BudgetStatement.reducer(document, action);

            db.save(documentId, newBudget);

            return newBudget.data;
        },
    },
};
