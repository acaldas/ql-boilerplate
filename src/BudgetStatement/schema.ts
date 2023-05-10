import { gql } from 'apollo-server-core';

export const typeDefs = [gql`

    type BudgetStatement  {
        name: String
        documentType: String
        revision: Int
        created: DateTime
        lastModified: DateTime
        # data: BudgetStatementData
        # operations: [IOperation!]!
    }

    type BudgetStatementData {
        # owner: Owner
        month: String
        quoteCurrency: String
        # accounts: [Account!]!
        # vesting: [Vesting!]!
        # ftes: FTE
        # auditReports: [AuditReport!]!
        # comments: [Comment!]!
    }

    type Query {
        budgetStatement: BudgetStatement
    }

    type Mutation {
        addAccount: BudgetStatementData
    }

`];

export const resolvers = {
    Query: {
        budgetStatement: async (_: any, { input }: any, __: any) => {
            return ['budgetStatement']
        }
    },

    Mutation: {
        addAccount: async (_: any, { input }: any, __: any) => {
        }
    }
}