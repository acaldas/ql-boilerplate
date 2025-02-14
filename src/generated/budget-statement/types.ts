export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    DateTime: string;
    Unknown: unknown;
};

export type Add_Account = "ADD_ACCOUNT";

export type Add_Audit_Report = "ADD_AUDIT_REPORT";

export type Add_Comment = "ADD_COMMENT";

export type Add_Line_Item = "ADD_LINE_ITEM";

export type Add_Vesting = "ADD_VESTING";

export type Account = {
    __typename?: "Account";
    address: Scalars["String"];
    lineItems: Array<LineItem>;
    name: Scalars["String"];
};

export type AccountInput = {
    address: Scalars["String"];
    lineItems?: InputMaybe<Array<LineItemInput>>;
    name?: InputMaybe<Scalars["String"]>;
};

export type AccountUpdateInput = {
    address: Scalars["String"];
    lineItems?: InputMaybe<Array<LineItem>>;
    name?: InputMaybe<Scalars["String"]>;
};

export type AddAccountAction = {
    input: AddAccountInput;
    type: Add_Account | `${Add_Account}`;
};

export type AddAccountInput = {
    accounts: Array<AccountInput>;
};

export type AddAuditReportAction = {
    input: AddAuditReportInput;
    type: Add_Audit_Report | `${Add_Audit_Report}`;
};

export type AddAuditReportInput = {
    reports: Array<AuditReportUnion>;
};

export type AddCommentAction = {
    input: AddCommentInput;
    type: Add_Comment | `${Add_Comment}`;
};

export type AddCommentInput = {
    comments: Array<CommentInput>;
};

export type AddLineItemAction = {
    input: AddLineItemInput;
    type: Add_Line_Item | `${Add_Line_Item}`;
};

export type AddLineItemInput = {
    account: Scalars["String"];
    lineItems: Array<LineItemInput>;
};

export type AddVestingAction = {
    input: AddVestingInput;
    type: Add_Vesting | `${Add_Vesting}`;
};

export type AddVestingInput = {
    vesting: Array<VestingInput>;
};

export type AuditReport = {
    __typename?: "AuditReport";
    report: Scalars["String"];
    status: AuditReportStatus | `${AuditReportStatus}`;
    timestamp: Scalars["DateTime"];
};

export type AuditReportInput = {
    report: DocumentFileInput;
    status: AuditReportStatus | `${AuditReportStatus}`;
    timestamp?: InputMaybe<Scalars["DateTime"]>;
};

export type AuditReportStatus =
    | "Approved"
    | "ApprovedWithComments"
    | "Escalated"
    | "NeedsAction";

export type AuditReportUnion = AuditReport | AuditReportInput;

export type BudgetStatement = IDocument & {
    __typename?: "BudgetStatement";
    created: Scalars["DateTime"];
    data: BudgetStatementData;
    documentType: Scalars["String"];
    lastModified: Scalars["DateTime"];
    name: Scalars["String"];
    operations: Array<IOperation>;
    revision: Scalars["Int"];
};

export type BudgetStatementAction =
    | AddAccountAction
    | AddAuditReportAction
    | AddCommentAction
    | AddLineItemAction
    | AddVestingAction
    | DeleteAccountAction
    | DeleteAuditReportAction
    | DeleteCommentAction
    | DeleteLineItemAction
    | DeleteVestingAction
    | InitAction
    | UpdateAccountAction
    | UpdateCommentAction
    | UpdateLineItemAction
    | UpdateVestingAction;

export type BudgetStatementData = {
    __typename?: "BudgetStatementData";
    accounts: Array<Account>;
    auditReports: Array<AuditReport>;
    comments: Array<Comment>;
    ftes: Maybe<Fte>;
    month: Maybe<Scalars["String"]>;
    owner: Maybe<Owner>;
    quoteCurrency: Maybe<Scalars["String"]>;
    vesting: Array<Vesting>;
};

export type BudgetStatementDataInput = {
    accounts?: InputMaybe<Array<Account>>;
    auditReports?: InputMaybe<Array<AuditReport>>;
    comments?: InputMaybe<Array<Comment>>;
    ftes?: InputMaybe<Fte>;
    month?: InputMaybe<Scalars["String"]>;
    owner?: InputMaybe<Owner>;
    quoteCurrency?: InputMaybe<Scalars["String"]>;
    vesting?: InputMaybe<Array<Vesting>>;
};

export type BudgetStatementInput = {
    created?: InputMaybe<Scalars["DateTime"]>;
    data: BudgetStatementDataInput;
    documentType?: InputMaybe<Scalars["String"]>;
    lastModified?: InputMaybe<Scalars["DateTime"]>;
    name?: InputMaybe<Scalars["String"]>;
    revision?: InputMaybe<Scalars["Int"]>;
};

export type BudgetStatus = "Draft" | "Escalated" | "Final" | "Review";

export type Comment = {
    __typename?: "Comment";
    author: CommentAuthor;
    comment: Scalars["String"];
    key: Scalars["String"];
    status: BudgetStatus | `${BudgetStatus}`;
    timestamp: Scalars["DateTime"];
};

export type CommentAuthor = {
    __typename?: "CommentAuthor";
    id: Maybe<Scalars["String"]>;
    ref: Maybe<Scalars["String"]>;
    roleLabel: Maybe<Scalars["String"]>;
    username: Maybe<Scalars["String"]>;
};

export type CommentAuthorInput = {
    id?: InputMaybe<Scalars["String"]>;
    ref?: InputMaybe<Scalars["String"]>;
    roleLabel?: InputMaybe<Scalars["String"]>;
    username?: InputMaybe<Scalars["String"]>;
};

export type CommentInput = {
    author?: InputMaybe<CommentAuthorInput>;
    comment: Scalars["String"];
    key: Scalars["String"];
    status?: InputMaybe<BudgetStatus | `${BudgetStatus}`>;
    timestamp?: InputMaybe<Scalars["DateTime"]>;
};

export type CommentUpdateInput = {
    author?: InputMaybe<CommentAuthorInput>;
    comment?: InputMaybe<Scalars["String"]>;
    key: Scalars["String"];
    timestamp?: InputMaybe<Scalars["DateTime"]>;
};

export type Delete_Account = "DELETE_ACCOUNT";

export type Delete_Audit_Report = "DELETE_AUDIT_REPORT";

export type Delete_Comment = "DELETE_COMMENT";

export type Delete_Line_Item = "DELETE_LINE_ITEM";

export type Delete_Vesting = "DELETE_VESTING";

export type DeleteAccountAction = {
    input: DeleteAccountInput;
    type: Delete_Account | `${Delete_Account}`;
};

export type DeleteAccountInput = {
    accounts: Array<Scalars["String"]>;
};

export type DeleteAuditReportAction = {
    input: DeleteAuditReportInput;
    type: Delete_Audit_Report | `${Delete_Audit_Report}`;
};

export type DeleteAuditReportInput = {
    reports: Array<Scalars["String"]>;
};

export type DeleteCommentAction = {
    input: DeleteCommentInput;
    type: Delete_Comment | `${Delete_Comment}`;
};

export type DeleteCommentInput = {
    comments: Array<Scalars["String"]>;
};

export type DeleteLineItemAction = {
    input: DeleteLineItemInput;
    type: Delete_Line_Item | `${Delete_Line_Item}`;
};

export type DeleteLineItemInput = {
    account: Scalars["String"];
    lineItems: Array<LineItemDeleteInput>;
};

export type DeleteVestingAction = {
    input: DeleteVestingInput;
    type: Delete_Vesting | `${Delete_Vesting}`;
};

export type DeleteVestingInput = {
    vesting: Array<Scalars["String"]>;
};

export type DocumentFileInput = {
    data: Scalars["String"];
    extension?: InputMaybe<Scalars["String"]>;
    fileName?: InputMaybe<Scalars["String"]>;
    mimeType: Scalars["String"];
};

export type Fte = {
    __typename?: "FTE";
    forecast: Array<Maybe<FteForecast>>;
    value: Scalars["Float"];
};

export type FteForecast = {
    __typename?: "FTEForecast";
    month: Scalars["String"];
    value: Scalars["Float"];
};

export type IDocument = {
    created: Scalars["DateTime"];
    documentType: Scalars["String"];
    lastModified: Scalars["DateTime"];
    name: Scalars["String"];
    operations: Array<IOperation>;
    revision: Scalars["Int"];
};

export type Init = "INIT";

export type IOperation = {
    hash: Scalars["String"];
    index: Scalars["Int"];
    timestamp: Scalars["DateTime"];
    type: Scalars["String"];
};

export type InitAction = {
    input: BudgetStatementInput;
    type: Init | `${Init}`;
};

export type Load_State = "LOAD_STATE";

export type LineItem = {
    __typename?: "LineItem";
    actual: Maybe<Scalars["Float"]>;
    budgetCap: Maybe<Scalars["Float"]>;
    category: Maybe<LineItemCategory>;
    comment: Maybe<Scalars["String"]>;
    forecast: Array<LineItemForecast>;
    group: Maybe<LineItemGroup>;
    headcountExpense: Scalars["Boolean"];
    payment: Maybe<Scalars["Float"]>;
};

export type LineItemCategory = {
    __typename?: "LineItemCategory";
    id: Scalars["String"];
    ref: Scalars["String"];
    title: Scalars["String"];
};

export type LineItemDeleteInput = {
    category?: InputMaybe<Scalars["String"]>;
    group?: InputMaybe<Scalars["String"]>;
};

export type LineItemForecast = {
    __typename?: "LineItemForecast";
    budgetCap: Scalars["Float"];
    month: Scalars["String"];
    value: Scalars["Float"];
};

export type LineItemGroup = {
    __typename?: "LineItemGroup";
    id: Scalars["String"];
    ref: Scalars["String"];
    title: Scalars["String"];
};

export type LineItemInput = {
    actual?: InputMaybe<Scalars["Float"]>;
    budgetCap?: InputMaybe<Scalars["Float"]>;
    category?: InputMaybe<LineItemCategory>;
    comment?: InputMaybe<Scalars["String"]>;
    forecast?: InputMaybe<Array<LineItemForecast>>;
    group?: InputMaybe<LineItemGroup>;
    headcountExpense?: InputMaybe<Scalars["Boolean"]>;
    payment?: InputMaybe<Scalars["Float"]>;
};

export type LineItemUpdateInput = {
    actual?: InputMaybe<Scalars["Float"]>;
    budgetCap?: InputMaybe<Scalars["Float"]>;
    category?: InputMaybe<Scalars["String"]>;
    comment?: InputMaybe<Scalars["String"]>;
    forecast?: InputMaybe<Array<LineItemForecast>>;
    group?: InputMaybe<Scalars["String"]>;
    headcountExpense?: InputMaybe<Scalars["Boolean"]>;
    payment?: InputMaybe<Scalars["Float"]>;
};

export type LoadStateAction = {
    input: LoadStateActionInput;
    type: Load_State | `${Load_State}`;
};

export type LoadStateActionInput = {
    operations: Scalars["Int"];
    state: LoadStateActionStateInput;
};

export type LoadStateActionStateInput = {
    data?: InputMaybe<Scalars["Unknown"]>;
    name: Scalars["String"];
};

export type Mutation = {
    __typename?: "Mutation";
    addAccount: Maybe<IDocument>;
    addAuditReport: Maybe<IDocument>;
    addComment: Maybe<IDocument>;
    addLineItem: Maybe<IDocument>;
    addVesting: Maybe<IDocument>;
    deleteAccount: Maybe<IDocument>;
    deleteAuditReport: Maybe<IDocument>;
    deleteComment: Maybe<IDocument>;
    deleteLineItem: Maybe<IDocument>;
    deleteVesting: Maybe<IDocument>;
    initAction: Maybe<IDocument>;
    loadState: Maybe<IDocument>;
    prune: Maybe<IDocument>;
    redo: Maybe<IDocument>;
    setName: Maybe<IDocument>;
    undo: Maybe<IDocument>;
    updateAccount: Maybe<IDocument>;
    updateComment: Maybe<IDocument>;
    updateLineItem: Maybe<IDocument>;
    updateVesting: Maybe<IDocument>;
};

export type MutationAddAccountArgs = {
    input: AddAccountAction;
};

export type MutationAddAuditReportArgs = {
    input: AddAuditReportAction;
};

export type MutationAddCommentArgs = {
    input: AddCommentAction;
};

export type MutationAddLineItemArgs = {
    input: AddLineItemAction;
};

export type MutationAddVestingArgs = {
    input: AddVestingAction;
};

export type MutationDeleteAccountArgs = {
    input: DeleteAccountAction;
};

export type MutationDeleteAuditReportArgs = {
    input: DeleteAuditReportAction;
};

export type MutationDeleteCommentArgs = {
    input: DeleteCommentAction;
};

export type MutationDeleteLineItemArgs = {
    input: DeleteLineItemAction;
};

export type MutationDeleteVestingArgs = {
    input: DeleteVestingAction;
};

export type MutationInitActionArgs = {
    input: InitAction;
};

export type MutationLoadStateArgs = {
    input: LoadStateAction;
};

export type MutationPruneArgs = {
    input: PruneAction;
};

export type MutationRedoArgs = {
    input: RedoAction;
};

export type MutationSetNameArgs = {
    input: SetNameAction;
};

export type MutationUndoArgs = {
    input: UndoAction;
};

export type MutationUpdateAccountArgs = {
    input: UpdateAccountAction;
};

export type MutationUpdateCommentArgs = {
    input: UpdateCommentAction;
};

export type MutationUpdateLineItemArgs = {
    input: UpdateLineItemAction;
};

export type MutationUpdateVestingArgs = {
    input: UpdateVestingAction;
};

export type Operation = IOperation & {
    __typename?: "Operation";
    hash: Scalars["String"];
    index: Scalars["Int"];
    timestamp: Scalars["DateTime"];
    type: Scalars["String"];
};

export type Owner = {
    __typename?: "Owner";
    id: Maybe<Scalars["String"]>;
    ref: Maybe<Scalars["String"]>;
    title: Maybe<Scalars["String"]>;
};

export type Prune = "PRUNE";

export type PruneAction = {
    input: PruneActionInput;
    type: Prune | `${Prune}`;
};

export type PruneActionInput = {
    end?: InputMaybe<Scalars["Int"]>;
    start?: InputMaybe<Scalars["Int"]>;
};

export type Query = {
    __typename?: "Query";
    budgetStatement: Maybe<BudgetStatement>;
    document: Maybe<IDocument>;
};

export type Redo = "REDO";

export type RedoAction = {
    input: Scalars["Int"];
    type: Redo | `${Redo}`;
};

export type Set_Name = "SET_NAME";

export type SetNameAction = {
    input: Scalars["String"];
    type: Set_Name | `${Set_Name}`;
};

export type SetNameOperation = IOperation & {
    __typename?: "SetNameOperation";
    hash: Scalars["String"];
    index: Scalars["Int"];
    input: Scalars["String"];
    timestamp: Scalars["DateTime"];
    type: Scalars["String"];
};

export type Undo = "UNDO";

export type Update_Account = "UPDATE_ACCOUNT";

export type Update_Comment = "UPDATE_COMMENT";

export type Update_Line_Item = "UPDATE_LINE_ITEM";

export type Update_Vesting = "UPDATE_VESTING";

export type UndoAction = {
    input: Scalars["Int"];
    type: Undo | `${Undo}`;
};

export type UpdateAccountAction = {
    input: UpdateAccountInput;
    type: Update_Account | `${Update_Account}`;
};

export type UpdateAccountInput = {
    accounts: Array<AccountUpdateInput>;
};

export type UpdateCommentAction = {
    input: UpdateCommentInput;
    type: Update_Comment | `${Update_Comment}`;
};

export type UpdateCommentInput = {
    comments: Array<CommentUpdateInput>;
};

export type UpdateLineItemAction = {
    input: UpdateLineItemInput;
    type: Update_Line_Item | `${Update_Line_Item}`;
};

export type UpdateLineItemInput = {
    account: Scalars["String"];
    lineItems: Array<LineItemUpdateInput>;
};

export type UpdateVestingAction = {
    input: UpdateVestingInput;
    type: Update_Vesting | `${Update_Vesting}`;
};

export type UpdateVestingInput = {
    vesting: Array<VestingInput>;
};

export type Vesting = {
    __typename?: "Vesting";
    amount: Scalars["String"];
    amountOld: Scalars["String"];
    comment: Scalars["String"];
    currency: Scalars["String"];
    date: Scalars["String"];
    key: Scalars["String"];
    vested: Scalars["Boolean"];
};

export type VestingInput = {
    amount?: InputMaybe<Scalars["String"]>;
    amountOld?: InputMaybe<Scalars["String"]>;
    comment?: InputMaybe<Scalars["String"]>;
    currency?: InputMaybe<Scalars["String"]>;
    date?: InputMaybe<Scalars["String"]>;
    key: Scalars["String"];
    vested?: InputMaybe<Scalars["Boolean"]>;
};
