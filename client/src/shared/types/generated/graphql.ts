export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as `2007-12-25T16:15:30Z`, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `BigInt` scalar type represents whole numeric values. */
  BigInt: any;
  /** A date string, such as `2007-12-25`, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A time string at UTC, such as `16:15:30Z`, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Time: any;
};

export enum AggregationFunctionType {
  Avg = 'AVG',
  Sum = 'SUM',
  Count = 'COUNT',
  Min = 'MIN',
  Max = 'MAX',
  GroupConcat = 'GROUP_CONCAT',
  AnyValue = 'ANY_VALUE',
  StddevPop = 'STDDEV_POP',
  StddevSamp = 'STDDEV_SAMP',
  VarPop = 'VAR_POP',
  VarSamp = 'VAR_SAMP'
}

export type ApiToken = {
  __typename?: 'ApiToken';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<User>;
  name?: Maybe<Scalars['String']>;
  roles?: Maybe<RoleListResponse>;
  _description?: Maybe<Scalars['String']>;
};


export type ApiTokenRolesArgs = {
  filter?: Maybe<RoleFilter>;
  orderBy?: Maybe<Array<Maybe<RoleOrderBy>>>;
  sort?: Maybe<Array<RoleSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<RoleGroupBy>;
};

export type ApiToken_PermissionFilter = {
  id?: Maybe<IdPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  deletedAt?: Maybe<IntPredicate>;
  name?: Maybe<StringPredicate>;
  _fullText?: Maybe<Scalars['String']>;
  token?: Maybe<StringPredicate>;
  createdBy?: Maybe<User_PermissionFilter>;
  roles?: Maybe<Role_PermissionRelationFilter>;
  AND?: Maybe<Array<ApiToken_PermissionFilter>>;
  OR?: Maybe<Array<ApiToken_PermissionFilter>>;
};

export type ApiToken_PermissionRelationFilter = {
  some?: Maybe<ApiToken_PermissionFilter>;
  every?: Maybe<ApiToken_PermissionFilter>;
  none?: Maybe<ApiToken_PermissionFilter>;
};

/** ApiTokens create input */
export type ApiTokenCreateInput = {
  name: Scalars['String'];
  roles?: Maybe<ApiTokensRolesRelationInput>;
};

/** ApiTokens delete input */
export type ApiTokenDeleteInput = {
  id?: Maybe<Scalars['ID']>;
  force?: Maybe<Scalars['Boolean']>;
};

export type ApiTokenFilter = {
  id?: Maybe<IdPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  deletedAt?: Maybe<IntPredicate>;
  name?: Maybe<StringPredicate>;
  _fullText?: Maybe<Scalars['String']>;
  token?: Maybe<StringPredicate>;
  createdBy?: Maybe<UserFilter>;
  roles?: Maybe<RoleRelationFilter>;
  AND?: Maybe<Array<ApiTokenFilter>>;
  OR?: Maybe<Array<ApiTokenFilter>>;
};

export type ApiTokenGroupBy = {
  query: ApiTokenGroupByQuery;
  sort?: Maybe<Array<GroupBySort>>;
  having?: Maybe<Having>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type ApiTokenGroupByQuery = {
  id?: Maybe<Array<GroupByField>>;
  createdAt?: Maybe<Array<GroupByField>>;
  updatedAt?: Maybe<Array<GroupByField>>;
  name?: Maybe<Array<GroupByField>>;
  createdBy?: Maybe<UserGroupByQuery>;
  roles?: Maybe<RoleGroupByQuery>;
  _group?: Maybe<Array<GroupIdentifiersGroupByField>>;
};

export type ApiTokenKeyFilter = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

/** ApiTokenListResponse output */
export type ApiTokenListResponse = {
  __typename?: 'ApiTokenListResponse';
  /** List items */
  items: Array<ApiToken>;
  /** List items count */
  count: Scalars['Int'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
};

/** ApiTokenManyResponse output */
export type ApiTokenManyResponse = {
  __typename?: 'ApiTokenManyResponse';
  /** List items */
  items: Array<ApiToken>;
  /** List items count */
  count: Scalars['Int'];
};

/** No longer supported. Use `sort` instead. */
export enum ApiTokenOrderBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  TokenAsc = 'token_ASC',
  TokenDesc = 'token_DESC'
}

/** ApiTokens subscription payload */
export type ApiTokenPayload = {
  __typename?: 'ApiTokenPayload';
  mutation: MutationType;
  node?: Maybe<ApiToken>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
  previousValues?: Maybe<ApiToken>;
};

export type ApiTokenRelationFilter = {
  some?: Maybe<ApiTokenFilter>;
  every?: Maybe<ApiTokenFilter>;
  none?: Maybe<ApiTokenFilter>;
};

/** API Token Response */
export type ApiTokenResponse = {
  __typename?: 'ApiTokenResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<User>;
  name?: Maybe<Scalars['String']>;
  roles?: Maybe<RoleListResponse>;
  token: Scalars['String'];
};


/** API Token Response */
export type ApiTokenResponseRolesArgs = {
  filter?: Maybe<RoleFilter>;
  orderBy?: Maybe<Array<Maybe<RoleOrderBy>>>;
  sort?: Maybe<Array<RoleSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<RoleGroupBy>;
};

/** Roles create input from apiTokens */
export type ApiTokens_RoleCreateInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  users?: Maybe<RolesUsersRelationInput>;
  permissions?: Maybe<PermissionsInput>;
  apiTokens?: Maybe<RolesApiTokensRelationInput>;
  authenticationProfiles?: Maybe<RolesAuthenticationProfilesRelationInput>;
  teamMembers?: Maybe<RolesTeamMembersRelationInput>;
};

/** Roles update input from apiTokens */
export type ApiTokens_RoleUpdateInput = {
  filter?: Maybe<RoleKeyFilter>;
  data: RoleUpdateInput;
};

export type ApiTokenSort = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  deletedAt?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  createdBy?: Maybe<UserSort>;
};

/** ApiTokens relation input */
export type ApiTokensRolesRelationInput = {
  connect?: Maybe<Array<RoleKeyFilter>>;
  create?: Maybe<Array<Maybe<ApiTokens_RoleCreateInput>>>;
};

/** ApiTokens relation input */
export type ApiTokensRolesUpdateRelationInput = {
  connect?: Maybe<Array<RoleKeyFilter>>;
  disconnect?: Maybe<Array<RoleKeyFilter>>;
  reconnect?: Maybe<Array<RoleKeyFilter>>;
  create?: Maybe<Array<Maybe<ApiTokens_RoleCreateInput>>>;
  update?: Maybe<Array<Maybe<ApiTokens_RoleUpdateInput>>>;
};

/** ApiTokens subscription filter */
export type ApiTokenSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<ApiTokenFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

/** ApiTokens update input */
export type ApiTokenUpdateByFilterInput = {
  name?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  token?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
};

/** ApiTokens update input */
export type ApiTokenUpdateInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  roles?: Maybe<ApiTokensRolesUpdateRelationInput>;
};

/** Application */
export type Application = {
  __typename?: 'Application';
  id: Scalars['ID'];
  name: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  appType: Scalars['String'];
  status: ApplicationStatusEnum;
};

/** ApplicationDeleteMutationInput */
export type ApplicationDeleteMutationInput = {
  id: Scalars['String'];
  force?: Maybe<Scalars['Boolean']>;
};

/** Application install input */
export type ApplicationInstallInput = {
  appType: Scalars['String'];
  name: Scalars['String'];
  status?: Maybe<ApplicationStatusEnum>;
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

/** ApplicationListResponse output */
export type ApplicationListResponse = {
  __typename?: 'ApplicationListResponse';
  /** List items */
  items: Array<Application>;
  /** List items count */
  count: Scalars['Int'];
};

/** Application Status Enum */
export enum ApplicationStatusEnum {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

/** Application update input */
export type ApplicationUpdateInput = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<ApplicationStatusEnum>;
};

/** Async Session */
export type AsyncSession = {
  __typename?: 'AsyncSession';
  sessionId: Scalars['String'];
};

export type AsyncSessionStatusResponse = {
  __typename?: 'AsyncSessionStatusResponse';
  status: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

/** Auth response */
export type Auth = {
  __typename?: 'Auth';
  refreshToken?: Maybe<Scalars['String']>;
  idToken?: Maybe<Scalars['String']>;
};

export type AuthenticationProfile = {
  __typename?: 'AuthenticationProfile';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<User>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  secret?: Maybe<Scalars['String']>;
  managementDomain?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  databaseName?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  selfSignUpEnabled?: Maybe<Scalars['Boolean']>;
  selfSignUpEmailDomains?: Maybe<Array<Maybe<Scalars['String']>>>;
  roles?: Maybe<RoleListResponse>;
  audiences?: Maybe<Array<Maybe<Scalars['String']>>>;
  attributes?: Maybe<AuthenticationProfileAttributes>;
  _description?: Maybe<Scalars['String']>;
};


export type AuthenticationProfileRolesArgs = {
  filter?: Maybe<RoleFilter>;
  orderBy?: Maybe<Array<Maybe<RoleOrderBy>>>;
  sort?: Maybe<Array<RoleSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<RoleGroupBy>;
};

export type AuthenticationProfile_PermissionFilter = {
  id?: Maybe<IdPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  deletedAt?: Maybe<IntPredicate>;
  name?: Maybe<StringPredicate>;
  type?: Maybe<StringPredicate>;
  secret?: Maybe<StringPredicate>;
  managementDomain?: Maybe<StringPredicate>;
  clientId?: Maybe<StringPredicate>;
  databaseName?: Maybe<StringPredicate>;
  domain?: Maybe<StringPredicate>;
  selfSignUpEnabled?: Maybe<BoolPredicate>;
  _fullText?: Maybe<Scalars['String']>;
  createdBy?: Maybe<User_PermissionFilter>;
  roles?: Maybe<Role_PermissionRelationFilter>;
  AND?: Maybe<Array<AuthenticationProfile_PermissionFilter>>;
  OR?: Maybe<Array<AuthenticationProfile_PermissionFilter>>;
};

export type AuthenticationProfile_PermissionRelationFilter = {
  some?: Maybe<AuthenticationProfile_PermissionFilter>;
  every?: Maybe<AuthenticationProfile_PermissionFilter>;
  none?: Maybe<AuthenticationProfile_PermissionFilter>;
};

/** Authentication Profile Attributes */
export type AuthenticationProfileAttributes = CognitoAuthProfileAttributes;

/** Authentication profile connection options */
export type AuthenticationProfileConnectionOptions = {
  __typename?: 'AuthenticationProfileConnectionOptions';
  google?: Maybe<GoogleOptions>;
  facebook?: Maybe<FacebookOptions>;
  github?: Maybe<GithubOptions>;
};

/** Authentication profile connection options input */
export type AuthenticationProfileConnectionsOptionsInput = {
  google?: Maybe<GoogleOptionsInput>;
  facebook?: Maybe<FacebookOptionsInput>;
  github?: Maybe<GithubOptionsInput>;
};

/** AuthenticationProfiles create input */
export type AuthenticationProfileCreateInput = {
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  secret?: Maybe<Scalars['String']>;
  managementDomain?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  databaseName?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  selfSignUpEnabled?: Maybe<Scalars['Boolean']>;
  selfSignUpEmailDomains?: Maybe<Array<Maybe<Scalars['String']>>>;
  roles?: Maybe<AuthenticationProfilesRolesRelationInput>;
  audiences?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** AuthenticationProfiles create many input */
export type AuthenticationProfileCreateManyInput = {
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  secret?: Maybe<Scalars['String']>;
  managementDomain?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  databaseName?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  selfSignUpEnabled?: Maybe<Scalars['Boolean']>;
  selfSignUpEmailDomains?: Maybe<Array<Maybe<Scalars['String']>>>;
  roles?: Maybe<AuthenticationProfilesRolesManyRelationInput>;
  audiences?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** AuthenticationProfiles delete input */
export type AuthenticationProfileDeleteInput = {
  id?: Maybe<Scalars['ID']>;
  force?: Maybe<Scalars['Boolean']>;
};

export type AuthenticationProfileFilter = {
  id?: Maybe<IdPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  deletedAt?: Maybe<IntPredicate>;
  name?: Maybe<StringPredicate>;
  type?: Maybe<StringPredicate>;
  secret?: Maybe<StringPredicate>;
  managementDomain?: Maybe<StringPredicate>;
  clientId?: Maybe<StringPredicate>;
  databaseName?: Maybe<StringPredicate>;
  domain?: Maybe<StringPredicate>;
  selfSignUpEnabled?: Maybe<BoolPredicate>;
  _fullText?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserFilter>;
  roles?: Maybe<RoleRelationFilter>;
  AND?: Maybe<Array<AuthenticationProfileFilter>>;
  OR?: Maybe<Array<AuthenticationProfileFilter>>;
};

export type AuthenticationProfileGroupBy = {
  query: AuthenticationProfileGroupByQuery;
  sort?: Maybe<Array<GroupBySort>>;
  having?: Maybe<Having>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type AuthenticationProfileGroupByQuery = {
  id?: Maybe<Array<GroupByField>>;
  createdAt?: Maybe<Array<GroupByField>>;
  updatedAt?: Maybe<Array<GroupByField>>;
  name?: Maybe<Array<GroupByField>>;
  type?: Maybe<Array<GroupByField>>;
  secret?: Maybe<Array<GroupByField>>;
  managementDomain?: Maybe<Array<GroupByField>>;
  clientId?: Maybe<Array<GroupByField>>;
  databaseName?: Maybe<Array<GroupByField>>;
  domain?: Maybe<Array<GroupByField>>;
  selfSignUpEnabled?: Maybe<Array<GroupByField>>;
  selfSignUpEmailDomains?: Maybe<Array<GroupByField>>;
  audiences?: Maybe<Array<GroupByField>>;
  createdBy?: Maybe<UserGroupByQuery>;
  roles?: Maybe<RoleGroupByQuery>;
  _group?: Maybe<Array<GroupIdentifiersGroupByField>>;
};

export type AuthenticationProfileKeyFilter = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

/** AuthenticationProfileListResponse output */
export type AuthenticationProfileListResponse = {
  __typename?: 'AuthenticationProfileListResponse';
  /** List items */
  items: Array<AuthenticationProfile>;
  /** List items count */
  count: Scalars['Int'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
};

/** AuthenticationProfileManyResponse output */
export type AuthenticationProfileManyResponse = {
  __typename?: 'AuthenticationProfileManyResponse';
  /** List items */
  items: Array<AuthenticationProfile>;
  /** List items count */
  count: Scalars['Int'];
};

/** No longer supported. Use `sort` instead. */
export enum AuthenticationProfileOrderBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  SecretAsc = 'secret_ASC',
  SecretDesc = 'secret_DESC',
  ManagementDomainAsc = 'managementDomain_ASC',
  ManagementDomainDesc = 'managementDomain_DESC',
  ClientIdAsc = 'clientId_ASC',
  ClientIdDesc = 'clientId_DESC',
  DatabaseNameAsc = 'databaseName_ASC',
  DatabaseNameDesc = 'databaseName_DESC',
  DomainAsc = 'domain_ASC',
  DomainDesc = 'domain_DESC',
  SelfSignUpEnabledAsc = 'selfSignUpEnabled_ASC',
  SelfSignUpEnabledDesc = 'selfSignUpEnabled_DESC'
}

/** AuthenticationProfiles subscription payload */
export type AuthenticationProfilePayload = {
  __typename?: 'AuthenticationProfilePayload';
  mutation: MutationType;
  node?: Maybe<AuthenticationProfile>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
  previousValues?: Maybe<AuthenticationProfile>;
};

export type AuthenticationProfileRelationFilter = {
  some?: Maybe<AuthenticationProfileFilter>;
  every?: Maybe<AuthenticationProfileFilter>;
  none?: Maybe<AuthenticationProfileFilter>;
};

/** Roles create input from authenticationProfiles */
export type AuthenticationProfiles_RoleCreateInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  users?: Maybe<RolesUsersRelationInput>;
  permissions?: Maybe<PermissionsInput>;
  apiTokens?: Maybe<RolesApiTokensRelationInput>;
  authenticationProfiles?: Maybe<RolesAuthenticationProfilesRelationInput>;
  teamMembers?: Maybe<RolesTeamMembersRelationInput>;
};

/** Roles update input from authenticationProfiles */
export type AuthenticationProfiles_RoleUpdateInput = {
  filter?: Maybe<RoleKeyFilter>;
  data: RoleUpdateInput;
};

export type AuthenticationProfileSort = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  deletedAt?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
  secret?: Maybe<SortOrder>;
  managementDomain?: Maybe<SortOrder>;
  clientId?: Maybe<SortOrder>;
  databaseName?: Maybe<SortOrder>;
  domain?: Maybe<SortOrder>;
  selfSignUpEnabled?: Maybe<SortOrder>;
  createdBy?: Maybe<UserSort>;
};

/** AuthenticationProfiles relation input */
export type AuthenticationProfilesRolesManyRelationInput = {
  connect?: Maybe<Array<RoleKeyFilter>>;
};

/** AuthenticationProfiles relation input */
export type AuthenticationProfilesRolesRelationInput = {
  connect?: Maybe<Array<RoleKeyFilter>>;
  create?: Maybe<Array<Maybe<AuthenticationProfiles_RoleCreateInput>>>;
};

/** AuthenticationProfiles relation input */
export type AuthenticationProfilesRolesUpdateRelationInput = {
  connect?: Maybe<Array<RoleKeyFilter>>;
  disconnect?: Maybe<Array<RoleKeyFilter>>;
  reconnect?: Maybe<Array<RoleKeyFilter>>;
  create?: Maybe<Array<Maybe<AuthenticationProfiles_RoleCreateInput>>>;
  update?: Maybe<Array<Maybe<AuthenticationProfiles_RoleUpdateInput>>>;
};

/** AuthenticationProfiles subscription filter */
export type AuthenticationProfileSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<AuthenticationProfileFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

/** AuthenticationProfiles update input */
export type AuthenticationProfileUpdateByFilterInput = {
  name?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  type?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  secret?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  managementDomain?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  clientId?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  databaseName?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  domain?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  selfSignUpEnabled?: Maybe<Array<Maybe<UpdateByFilterBooleanSwitchInput>>>;
  selfSignUpEmailDomains?: Maybe<Array<Maybe<UpdateByFilterListStringInput>>>;
  audiences?: Maybe<Array<Maybe<UpdateByFilterListStringInput>>>;
};

/** AuthenticationProfiles update input */
export type AuthenticationProfileUpdateInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  secret?: Maybe<Scalars['String']>;
  managementDomain?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  databaseName?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  selfSignUpEnabled?: Maybe<Scalars['Boolean']>;
  selfSignUpEmailDomains?: Maybe<Array<Maybe<Scalars['String']>>>;
  roles?: Maybe<AuthenticationProfilesRolesUpdateRelationInput>;
  audiences?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AuthenticationSetting = {
  __typename?: 'AuthenticationSetting';
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  allowedCallbacks?: Maybe<Array<Maybe<Scalars['String']>>>;
  allowedWebOrigins?: Maybe<Array<Maybe<Scalars['String']>>>;
  allowedLogouts?: Maybe<Array<Maybe<Scalars['String']>>>;
  connections?: Maybe<AuthenticationProfileConnectionOptions>;
  _description?: Maybe<Scalars['String']>;
};

export type AuthenticationSettingFilter = {
  createdAt?: Maybe<DateTimePredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  deletedAt?: Maybe<IntPredicate>;
  _fullText?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserFilter>;
  AND?: Maybe<Array<AuthenticationSettingFilter>>;
  OR?: Maybe<Array<AuthenticationSettingFilter>>;
};

/** AuthenticationSettings subscription payload */
export type AuthenticationSettingPayload = {
  __typename?: 'AuthenticationSettingPayload';
  mutation: MutationType;
  node?: Maybe<AuthenticationSetting>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
  previousValues?: Maybe<AuthenticationSetting>;
};

/** AuthenticationSettings subscription filter */
export type AuthenticationSettingSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<AuthenticationSettingFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

/** AuthenticationSettings update input */
export type AuthenticationSettingUpdateInput = {
  allowedCallbacks?: Maybe<Array<Maybe<Scalars['String']>>>;
  allowedWebOrigins?: Maybe<Array<Maybe<Scalars['String']>>>;
  allowedLogouts?: Maybe<Array<Maybe<Scalars['String']>>>;
  connections?: Maybe<AuthenticationProfileConnectionsOptionsInput>;
};

/** TeamMembers update input from avatar */
export type Avatar_TeamMemberUpdateInput = {
  filter?: Maybe<TeamMemberKeyFilter>;
  data: TeamMemberUpdateInput;
};

/** Users create input from avatar */
export type Avatar_UserCreateInput = {
  email: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  avatar?: Maybe<UsersAvatarRelationInput>;
  roles?: Maybe<UsersRolesRelationInput>;
  customer?: Maybe<UsersCustomerRelationInput>;
  invitation?: Maybe<UsersInvitationRelationInput>;
};

/** Users update input from avatar */
export type Avatar_UserUpdateInput = {
  filter?: Maybe<UserKeyFilter>;
  data: UserUpdateInput;
};


export type BigIntPredicateHaving = {
  equals?: Maybe<Scalars['BigInt']>;
  not_equals?: Maybe<Scalars['BigInt']>;
  in?: Maybe<Array<Scalars['BigInt']>>;
  not_in?: Maybe<Array<Scalars['BigInt']>>;
  lt?: Maybe<Scalars['BigInt']>;
  lte?: Maybe<Scalars['BigInt']>;
  gt?: Maybe<Scalars['BigInt']>;
  gte?: Maybe<Scalars['BigInt']>;
  is_empty?: Maybe<Scalars['Boolean']>;
  is_not_empty?: Maybe<Scalars['Boolean']>;
  AND?: Maybe<Array<BigIntPredicateHaving>>;
  OR?: Maybe<Array<BigIntPredicateHaving>>;
};

export type BillingCurrentPlanResponse = {
  __typename?: 'BillingCurrentPlanResponse';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  displayName?: Maybe<Scalars['String']>;
  trialEnd?: Maybe<Scalars['DateTime']>;
  status?: Maybe<WorkspaceStatus>;
  nextPlan?: Maybe<BillingNextPlanResponse>;
};

export type BillingDetailsResponse = {
  __typename?: 'BillingDetailsResponse';
  last4?: Maybe<Scalars['String']>;
  expMonth?: Maybe<Scalars['Int']>;
  expYear?: Maybe<Scalars['Int']>;
  brand?: Maybe<Scalars['String']>;
};

/** BillingDetailsUpdateMutationInput */
export type BillingDetailsUpdateMutationInput = {
  cardToken: Scalars['String'];
};

export type BillingInvoiceItem = {
  __typename?: 'BillingInvoiceItem';
  id: Scalars['ID'];
  periodStart?: Maybe<Scalars['DateTime']>;
  periodEnd?: Maybe<Scalars['DateTime']>;
  paid?: Maybe<Scalars['Boolean']>;
  invoicePdf?: Maybe<Scalars['String']>;
  amountDue?: Maybe<Scalars['Float']>;
  amountPaid?: Maybe<Scalars['Float']>;
  amountRemaining?: Maybe<Scalars['Float']>;
  endingBalance?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
};

export enum BillingInvoicesListFilterType {
  Workspace = 'WORKSPACE',
  Customer = 'CUSTOMER'
}

/** BillingInvoicesListResponse output */
export type BillingInvoicesListResponse = {
  __typename?: 'BillingInvoicesListResponse';
  /** List items */
  items: Array<BillingInvoiceItem>;
  /** List items count */
  count: Scalars['Int'];
};

export type BillingLimitMetricItem = {
  __typename?: 'BillingLimitMetricItem';
  name?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  showPriority?: Maybe<Scalars['Int']>;
  unit?: Maybe<Scalars['String']>;
};

export type BillingMetricUsageItem = {
  __typename?: 'BillingMetricUsageItem';
  limitMetric?: Maybe<BillingLimitMetricItem>;
  value?: Maybe<Scalars['Float']>;
};

export type BillingMetricUsageQuotaItem = {
  __typename?: 'BillingMetricUsageQuotaItem';
  limitMetric?: Maybe<BillingLimitMetricItem>;
  value?: Maybe<Scalars['Float']>;
};

/** BillingMetricUsageQuotasListResponse output */
export type BillingMetricUsageQuotasListResponse = {
  __typename?: 'BillingMetricUsageQuotasListResponse';
  /** List items */
  items: Array<BillingMetricUsageQuotaItem>;
  /** List items count */
  count: Scalars['Int'];
};

export type BillingMetricUsagesListFilter = {
  entryDate: DateTimePredicate;
};

/** BillingMetricUsagesListResponse output */
export type BillingMetricUsagesListResponse = {
  __typename?: 'BillingMetricUsagesListResponse';
  /** List items */
  items: Array<BillingMetricUsageItem>;
  /** List items count */
  count: Scalars['Int'];
};

export type BillingNextPlanResponse = {
  __typename?: 'BillingNextPlanResponse';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  displayName?: Maybe<Scalars['String']>;
};

export type BillingPlanBaseInfo = {
  __typename?: 'BillingPlanBaseInfo';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  isCustom?: Maybe<Scalars['Boolean']>;
  isLegacy?: Maybe<Scalars['Boolean']>;
  limitMetrics?: Maybe<Array<Maybe<BillingPlanLimitMetricItem>>>;
};

export type BillingPlanLimitMetricItem = {
  __typename?: 'BillingPlanLimitMetricItem';
  name?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  overagePrice?: Maybe<Scalars['Int']>;
  softLimit?: Maybe<Scalars['Float']>;
  hardLimit?: Maybe<Scalars['Float']>;
};

/** BillingPlanUpdateMutationInput */
export type BillingPlanUpdateMutationInput = {
  planId: Scalars['ID'];
};

export type BoolPredicate = {
  equals?: Maybe<Scalars['Boolean']>;
  not_equals?: Maybe<Scalars['Boolean']>;
  is_empty?: Maybe<Scalars['Boolean']>;
  is_not_empty?: Maybe<Scalars['Boolean']>;
};

export type BoolPredicateHaving = {
  equals?: Maybe<Scalars['Boolean']>;
  not_equals?: Maybe<Scalars['Boolean']>;
  is_empty?: Maybe<Scalars['Boolean']>;
  is_not_empty?: Maybe<Scalars['Boolean']>;
  AND?: Maybe<Array<BoolPredicateHaving>>;
  OR?: Maybe<Array<BoolPredicateHaving>>;
};

/** ChangePasswordInput */
export type ChangePasswordInput = {
  refreshToken: Scalars['String'];
  email: Scalars['String'];
  oldPassword: Scalars['String'];
  newPassword: Scalars['String'];
  authProfileId: Scalars['ID'];
};

/** Authentication Profile Attributes for Cognito */
export type CognitoAuthProfileAttributes = {
  __typename?: 'CognitoAuthProfileAttributes';
  clientAuthDomain?: Maybe<Scalars['String']>;
};

/** Computed field mode */
export enum ComputedFieldMode {
  Virtual = 'VIRTUAL',
  Stored = 'STORED'
}

export type Customer = {
  __typename?: 'Customer';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<User>;
  /** User associated with the customer */
  user?: Maybe<User>;
  orders?: Maybe<OrderListResponse>;
  _description?: Maybe<Scalars['String']>;
};


export type CustomerOrdersArgs = {
  filter?: Maybe<OrderFilter>;
  orderBy?: Maybe<Array<Maybe<OrderOrderBy>>>;
  sort?: Maybe<Array<OrderSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<OrderGroupBy>;
};

/** Orders create input from customer */
export type Customer_OrderCreateInput = {
  product: OrdersProductRelationInput;
  customer?: Maybe<OrdersCustomerRelationInput>;
  /** Number of products ordered */
  quantity?: Maybe<Scalars['Int']>;
  /** Total order price */
  totalPrice?: Maybe<Scalars['Int']>;
};

/** Orders update input from customer */
export type Customer_OrderUpdateInput = {
  filter?: Maybe<OrderKeyFilter>;
  data: OrderUpdateInput;
};

export type Customer_PermissionFilter = {
  id?: Maybe<IdPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  deletedAt?: Maybe<IntPredicate>;
  _fullText?: Maybe<Scalars['String']>;
  createdBy?: Maybe<User_PermissionFilter>;
  user?: Maybe<User_PermissionFilter>;
  orders?: Maybe<Order_PermissionRelationFilter>;
  AND?: Maybe<Array<Customer_PermissionFilter>>;
  OR?: Maybe<Array<Customer_PermissionFilter>>;
};

/** Users create input from customer */
export type Customer_UserCreateInput = {
  email: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  avatar?: Maybe<UsersAvatarRelationInput>;
  roles?: Maybe<UsersRolesRelationInput>;
  customer?: Maybe<UsersCustomerRelationInput>;
  invitation?: Maybe<UsersInvitationRelationInput>;
};

/** Users update input from customer */
export type Customer_UserUpdateInput = {
  email?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  avatar?: Maybe<UsersAvatarUpdateRelationInput>;
  roles?: Maybe<UsersRolesUpdateRelationInput>;
  customer?: Maybe<UsersCustomerUpdateRelationInput>;
  invitation?: Maybe<UsersInvitationUpdateRelationInput>;
};

/** Customers create input */
export type CustomerCreateInput = {
  user?: Maybe<CustomersUserRelationInput>;
  orders?: Maybe<CustomersOrdersRelationInput>;
};

/** Customers create many input */
export type CustomerCreateManyInput = {
  user: CustomersUserManyRelationInput;
  orders?: Maybe<CustomersOrdersManyRelationInput>;
};

/** Customers delete input */
export type CustomerDeleteInput = {
  id?: Maybe<Scalars['ID']>;
  force?: Maybe<Scalars['Boolean']>;
};

/** CustomerFieldsPermissions create input */
export type CustomerFieldsPermissions = {
  createdAt?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Boolean']>;
};

export type CustomerFilter = {
  id?: Maybe<IdPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  deletedAt?: Maybe<IntPredicate>;
  _fullText?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserFilter>;
  user?: Maybe<UserFilter>;
  orders?: Maybe<OrderRelationFilter>;
  AND?: Maybe<Array<CustomerFilter>>;
  OR?: Maybe<Array<CustomerFilter>>;
};

export type CustomerGroupBy = {
  query: CustomerGroupByQuery;
  sort?: Maybe<Array<GroupBySort>>;
  having?: Maybe<Having>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type CustomerGroupByQuery = {
  id?: Maybe<Array<GroupByField>>;
  createdAt?: Maybe<Array<GroupByField>>;
  updatedAt?: Maybe<Array<GroupByField>>;
  createdBy?: Maybe<UserGroupByQuery>;
  user?: Maybe<UserGroupByQuery>;
  orders?: Maybe<OrderGroupByQuery>;
  _group?: Maybe<Array<GroupIdentifiersGroupByField>>;
};

export type CustomerKeyFilter = {
  id?: Maybe<Scalars['ID']>;
};

/** CustomerListResponse output */
export type CustomerListResponse = {
  __typename?: 'CustomerListResponse';
  /** List items */
  items: Array<Customer>;
  /** List items count */
  count: Scalars['Int'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
};

/** CustomerManyResponse output */
export type CustomerManyResponse = {
  __typename?: 'CustomerManyResponse';
  /** List items */
  items: Array<Customer>;
  /** List items count */
  count: Scalars['Int'];
};

/** No longer supported. Use `sort` instead. */
export enum CustomerOrderBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC'
}

/** Customers subscription payload */
export type CustomerPayload = {
  __typename?: 'CustomerPayload';
  mutation: MutationType;
  node?: Maybe<Customer>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
  previousValues?: Maybe<Customer>;
};

/** Customers relation input */
export type CustomersOrdersManyRelationInput = {
  connect?: Maybe<Array<OrderKeyFilter>>;
};

/** Customers relation input */
export type CustomersOrdersRelationInput = {
  connect?: Maybe<Array<OrderKeyFilter>>;
  create?: Maybe<Array<Maybe<Customer_OrderCreateInput>>>;
};

/** Customers relation input */
export type CustomersOrdersUpdateRelationInput = {
  connect?: Maybe<Array<OrderKeyFilter>>;
  disconnect?: Maybe<Array<OrderKeyFilter>>;
  reconnect?: Maybe<Array<OrderKeyFilter>>;
  create?: Maybe<Array<Maybe<Customer_OrderCreateInput>>>;
  update?: Maybe<Array<Maybe<Customer_OrderUpdateInput>>>;
};

export type CustomerSort = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  deletedAt?: Maybe<SortOrder>;
  createdBy?: Maybe<UserSort>;
  user?: Maybe<UserSort>;
};

/** Customers subscription filter */
export type CustomerSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<CustomerFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

/** Customers relation input */
export type CustomersUserManyRelationInput = {
  connect?: Maybe<UserKeyFilter>;
};

/** Customers relation input */
export type CustomersUserRelationInput = {
  connect?: Maybe<UserKeyFilter>;
  create?: Maybe<Customer_UserCreateInput>;
};

/** Customers relation input */
export type CustomersUserUpdateRelationInput = {
  connect?: Maybe<UserKeyFilter>;
  disconnect?: Maybe<UserKeyFilter>;
  reconnect?: Maybe<UserKeyFilter>;
  create?: Maybe<Customer_UserCreateInput>;
  update?: Maybe<Customer_UserUpdateInput>;
};

/** Customers update input */
export type CustomerUpdateInput = {
  id?: Maybe<Scalars['ID']>;
  user?: Maybe<CustomersUserUpdateRelationInput>;
  orders?: Maybe<CustomersOrdersUpdateRelationInput>;
};

/** Custom Table Field Type */
export type CustomTableField = {
  __typename?: 'CustomTableField';
  name?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  fieldType?: Maybe<FieldType>;
  isList: Scalars['Boolean'];
  isRequired: Scalars['Boolean'];
  isUnique?: Maybe<Scalars['Boolean']>;
  defaultValue?: Maybe<Scalars['String']>;
  computedMode?: Maybe<ComputedFieldMode>;
  expression?: Maybe<Scalars['String']>;
  fieldTypeAttributes?: Maybe<FieldTypeAttributes>;
};


/** Date Field Attributes */
export type DateFieldTypeAttributes = {
  __typename?: 'DateFieldTypeAttributes';
  format: Scalars['String'];
};

export enum DatePartFunctionType {
  Date = 'DATE',
  Time = 'TIME',
  Week = 'WEEK',
  WeekDay = 'WEEK_DAY',
  WeekOfYear = 'WEEK_OF_YEAR',
  Year = 'YEAR',
  YearWeek = 'YEAR_WEEK',
  DayName = 'DAY_NAME',
  DayOfMonth = 'DAY_OF_MONTH',
  DayOfWeek = 'DAY_OF_WEEK',
  DayOfYear = 'DAY_OF_YEAR',
  Quarter = 'QUARTER',
  Day = 'DAY',
  Month = 'MONTH',
  MonthName = 'MONTH_NAME',
  Hour = 'HOUR',
  Minute = 'MINUTE',
  Second = 'SECOND',
  Microsecond = 'MICROSECOND',
  LastDay = 'LAST_DAY'
}

export type DatePredicateHaving = {
  equals?: Maybe<Scalars['Date']>;
  not_equals?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Scalars['Date']>>;
  not_in?: Maybe<Array<Scalars['Date']>>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  is_empty?: Maybe<Scalars['Boolean']>;
  is_not_empty?: Maybe<Scalars['Boolean']>;
  AND?: Maybe<Array<DatePredicateHaving>>;
  OR?: Maybe<Array<DatePredicateHaving>>;
};

export type DateRelativePredicates = {
  lt?: Maybe<DateRelativePredicateType>;
  lte?: Maybe<DateRelativePredicateType>;
  gt?: Maybe<DateRelativePredicateType>;
  gte?: Maybe<DateRelativePredicateType>;
};

export type DateRelativePredicateType = {
  op?: Maybe<RelativePredicateOpEnum>;
  unit?: Maybe<RelativePredicateUnitEnum>;
  value: Scalars['String'];
};


export type DateTimePredicate = {
  equals?: Maybe<Scalars['DateTime']>;
  not_equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  not_in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  is_empty?: Maybe<Scalars['Boolean']>;
  is_not_empty?: Maybe<Scalars['Boolean']>;
  relative?: Maybe<DateRelativePredicates>;
};

export type DateTimePredicateHaving = {
  equals?: Maybe<Scalars['DateTime']>;
  not_equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  not_in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  is_empty?: Maybe<Scalars['Boolean']>;
  is_not_empty?: Maybe<Scalars['Boolean']>;
  AND?: Maybe<Array<DateTimePredicateHaving>>;
  OR?: Maybe<Array<DateTimePredicateHaving>>;
};

/** Date Type Format Enum */
export enum DateTypeFormatEnum {
  Date = 'DATE',
  Datetime = 'DATETIME'
}

/** DeployDataResponse */
export type DeployDataResponse = {
  __typename?: 'DeployDataResponse';
  uploadBuildUrl: Scalars['String'];
  uploadMetaDataUrl: Scalars['String'];
  buildName: Scalars['String'];
};

/** DeployingBuildInput */
export type DeployingBuildInput = {
  buildName: Scalars['String'];
  options?: Maybe<DeployOptions>;
};

export enum DeployModeEnum {
  Full = 'FULL',
  OnlyPlugins = 'ONLY_PLUGINS',
  OnlyProject = 'ONLY_PROJECT',
  Functions = 'FUNCTIONS',
  Migrations = 'MIGRATIONS'
}

/** DeployOptions */
export type DeployOptions = {
  mode?: Maybe<DeployModeEnum>;
  pluginNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  extensionNames?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum DeployStatusEnum {
  Deploying = 'deploying',
  CompleteError = 'complete_error',
  CompleteSuccess = 'complete_success',
  Compiling = 'compiling',
  Preparing = 'preparing',
  Initialize = 'initialize'
}

/** DeployStatusResult */
export type DeployStatusResult = {
  __typename?: 'DeployStatusResult';
  status: DeployStatusEnum;
  message?: Maybe<Scalars['String']>;
};

export type EnvironmentBackupItem = {
  __typename?: 'EnvironmentBackupItem';
  name: Scalars['String'];
  size: Scalars['Float'];
};

export type EnvironmentItem = {
  __typename?: 'EnvironmentItem';
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** EnvironmentSetupInput */
export type EnvironmentSetupInput = {
  deleteLock?: Maybe<Scalars['Boolean']>;
};

export type EnvironmentVariable = {
  __typename?: 'EnvironmentVariable';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<User>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  _description?: Maybe<Scalars['String']>;
};

/** EnvironmentVariables create input */
export type EnvironmentVariableCreateInput = {
  name: Scalars['String'];
  value: Scalars['String'];
};

/** EnvironmentVariables create many input */
export type EnvironmentVariableCreateManyInput = {
  name: Scalars['String'];
  value: Scalars['String'];
};

/** EnvironmentVariables delete input */
export type EnvironmentVariableDeleteInput = {
  id?: Maybe<Scalars['ID']>;
  force?: Maybe<Scalars['Boolean']>;
};

export type EnvironmentVariableFilter = {
  id?: Maybe<IdPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  deletedAt?: Maybe<IntPredicate>;
  name?: Maybe<StringPredicate>;
  value?: Maybe<StringPredicate>;
  _fullText?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserFilter>;
  AND?: Maybe<Array<EnvironmentVariableFilter>>;
  OR?: Maybe<Array<EnvironmentVariableFilter>>;
};

export type EnvironmentVariableGroupBy = {
  query: EnvironmentVariableGroupByQuery;
  sort?: Maybe<Array<GroupBySort>>;
  having?: Maybe<Having>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type EnvironmentVariableGroupByQuery = {
  id?: Maybe<Array<GroupByField>>;
  createdAt?: Maybe<Array<GroupByField>>;
  updatedAt?: Maybe<Array<GroupByField>>;
  name?: Maybe<Array<GroupByField>>;
  value?: Maybe<Array<GroupByField>>;
  createdBy?: Maybe<UserGroupByQuery>;
  _group?: Maybe<Array<GroupIdentifiersGroupByField>>;
};

export type EnvironmentVariableKeyFilter = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

/** EnvironmentVariableListResponse output */
export type EnvironmentVariableListResponse = {
  __typename?: 'EnvironmentVariableListResponse';
  /** List items */
  items: Array<EnvironmentVariable>;
  /** List items count */
  count: Scalars['Int'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
};

/** EnvironmentVariableManyResponse output */
export type EnvironmentVariableManyResponse = {
  __typename?: 'EnvironmentVariableManyResponse';
  /** List items */
  items: Array<EnvironmentVariable>;
  /** List items count */
  count: Scalars['Int'];
};

/** No longer supported. Use `sort` instead. */
export enum EnvironmentVariableOrderBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

/** EnvironmentVariables subscription payload */
export type EnvironmentVariablePayload = {
  __typename?: 'EnvironmentVariablePayload';
  mutation: MutationType;
  node?: Maybe<EnvironmentVariable>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
  previousValues?: Maybe<EnvironmentVariable>;
};

export type EnvironmentVariableSort = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  deletedAt?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  value?: Maybe<SortOrder>;
  createdBy?: Maybe<UserSort>;
};

/** EnvironmentVariables subscription filter */
export type EnvironmentVariableSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<EnvironmentVariableFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

/** EnvironmentVariables update input */
export type EnvironmentVariableUpdateByFilterInput = {
  name?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  value?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
};

/** EnvironmentVariables update input */
export type EnvironmentVariableUpdateInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** Facebook connection params */
export type FacebookOptions = {
  __typename?: 'FacebookOptions';
  enabled: Scalars['Boolean'];
  app_id: Scalars['String'];
  app_secret: Scalars['String'];
};

/** Facebook connection params input */
export type FacebookOptionsInput = {
  enabled: Scalars['Boolean'];
  app_id: Scalars['String'];
  app_secret: Scalars['String'];
};

/** Field Data Features */
export type FieldDataFeatures = {
  __typename?: 'FieldDataFeatures';
  create: Scalars['Boolean'];
  update: Scalars['Boolean'];
  sort: Scalars['Boolean'];
};

/** Field Schema Features */
export type FieldSchemaFeatures = {
  __typename?: 'FieldSchemaFeatures';
  update: Scalars['Boolean'];
  delete: Scalars['Boolean'];
};

/** Field types */
export enum FieldType {
  Id = 'ID',
  Uuid = 'UUID',
  Json = 'JSON',
  Number = 'NUMBER',
  Text = 'TEXT',
  Date = 'DATE',
  Switch = 'SWITCH',
  Relation = 'RELATION',
  File = 'FILE',
  Smart = 'SMART',
  Geo = 'GEO',
  OneWayRelation = 'ONE_WAY_RELATION',
  MissingRelation = 'MISSING_RELATION'
}

/** Field Type Attributes */
export type FieldTypeAttributes = DateFieldTypeAttributes | FileFieldTypeAttributes | MissingRelationFieldTypeAttributes | NumberFieldTypeAttributes | SmartFieldTypeAttributes | SwitchFieldTypeAttributes | TextFieldTypeAttributes | UuidFieldTypeAttributes | GeoFieldTypeAttributes;

/** Field Type Attributes Input */
export type FieldTypeAttributesInput = {
  format?: Maybe<Scalars['String']>;
  precision?: Maybe<Scalars['Int']>;
  currency?: Maybe<Scalars['String']>;
  minValue?: Maybe<Scalars['Float']>;
  maxValue?: Maybe<Scalars['Float']>;
  isBigInt?: Maybe<Scalars['Boolean']>;
  autoIncrement?: Maybe<Scalars['Boolean']>;
  fieldSize?: Maybe<Scalars['Int']>;
  expiration?: Maybe<Scalars['Int']>;
  listOptions?: Maybe<Array<Scalars['String']>>;
  maxSize?: Maybe<Scalars['Int']>;
  typeRestrictions?: Maybe<Array<Scalars['String']>>;
  srid?: Maybe<Scalars['Int']>;
};

export type File = {
  __typename?: 'File';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<User>;
  fileId?: Maybe<Scalars['String']>;
  downloadUrl?: Maybe<Scalars['String']>;
  shareUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  public?: Maybe<Scalars['Boolean']>;
  uploaded?: Maybe<Scalars['Boolean']>;
  filename?: Maybe<Scalars['String']>;
  uploadUrl?: Maybe<Scalars['String']>;
  fields?: Maybe<Scalars['JSON']>;
  meta?: Maybe<Scalars['JSON']>;
  mods?: Maybe<Scalars['JSON']>;
  settings_menuBarLogo?: Maybe<SettingListResponse>;
  settings_landingPageImage?: Maybe<SettingListResponse>;
  users_avatar?: Maybe<UserListResponse>;
  teamMembers_avatar?: Maybe<TeamMemberListResponse>;
  products_image?: Maybe<ProductListResponse>;
  previewUrl?: Maybe<Scalars['String']>;
  _description?: Maybe<Scalars['String']>;
};


export type FileSettings_MenuBarLogoArgs = {
  filter?: Maybe<SettingFilter>;
  orderBy?: Maybe<Array<Maybe<SettingOrderBy>>>;
  sort?: Maybe<Array<SettingSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<SettingGroupBy>;
};


export type FileSettings_LandingPageImageArgs = {
  filter?: Maybe<SettingFilter>;
  orderBy?: Maybe<Array<Maybe<SettingOrderBy>>>;
  sort?: Maybe<Array<SettingSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<SettingGroupBy>;
};


export type FileUsers_AvatarArgs = {
  filter?: Maybe<UserFilter>;
  orderBy?: Maybe<Array<Maybe<UserOrderBy>>>;
  sort?: Maybe<Array<UserSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<UserGroupBy>;
};


export type FileTeamMembers_AvatarArgs = {
  filter?: Maybe<TeamMemberFilter>;
  orderBy?: Maybe<Array<Maybe<TeamMemberOrderBy>>>;
  sort?: Maybe<Array<TeamMemberSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<TeamMemberGroupBy>;
};


export type FileProducts_ImageArgs = {
  filter?: Maybe<ProductFilter>;
  orderBy?: Maybe<Array<Maybe<ProductOrderBy>>>;
  sort?: Maybe<Array<ProductSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<ProductGroupBy>;
};

export type File_PermissionFilter = {
  id?: Maybe<IdPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  deletedAt?: Maybe<IntPredicate>;
  fileId?: Maybe<StringPredicate>;
  downloadUrl?: Maybe<StringPredicate>;
  shareUrl?: Maybe<StringPredicate>;
  provider?: Maybe<StringPredicate>;
  public?: Maybe<BoolPredicate>;
  uploaded?: Maybe<BoolPredicate>;
  filename?: Maybe<StringPredicate>;
  uploadUrl?: Maybe<StringPredicate>;
  _fullText?: Maybe<Scalars['String']>;
  createdBy?: Maybe<User_PermissionFilter>;
  settings_menuBarLogo?: Maybe<Setting_PermissionRelationFilter>;
  settings_landingPageImage?: Maybe<Setting_PermissionRelationFilter>;
  users_avatar?: Maybe<User_PermissionRelationFilter>;
  teamMembers_avatar?: Maybe<TeamMember_PermissionRelationFilter>;
  products_image?: Maybe<Product_PermissionRelationFilter>;
  AND?: Maybe<Array<File_PermissionFilter>>;
  OR?: Maybe<Array<File_PermissionFilter>>;
};

/** Files create input */
export type FileCreateInput = {
  fileId?: Maybe<Scalars['String']>;
  public?: Maybe<Scalars['Boolean']>;
  filename?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
  mods?: Maybe<Scalars['JSON']>;
  users_avatar?: Maybe<FilesUsers_AvatarRelationInput>;
  teamMembers_avatar?: Maybe<FilesTeamMembers_AvatarRelationInput>;
  products_image?: Maybe<FilesProducts_ImageRelationInput>;
};

/** Files create many input */
export type FileCreateManyInput = {
  fileId?: Maybe<Scalars['String']>;
  public?: Maybe<Scalars['Boolean']>;
  filename?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
  mods?: Maybe<Scalars['JSON']>;
  users_avatar?: Maybe<FilesUsers_AvatarManyRelationInput>;
  teamMembers_avatar?: Maybe<FilesTeamMembers_AvatarManyRelationInput>;
  products_image?: Maybe<FilesProducts_ImageManyRelationInput>;
};

/** Files delete input */
export type FileDeleteInput = {
  id?: Maybe<Scalars['ID']>;
  force?: Maybe<Scalars['Boolean']>;
};

/** FileFieldsPermissions create input */
export type FileFieldsPermissions = {
  createdAt?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Boolean']>;
  fileId?: Maybe<Scalars['Boolean']>;
  downloadUrl?: Maybe<Scalars['Boolean']>;
  shareUrl?: Maybe<Scalars['Boolean']>;
  provider?: Maybe<Scalars['Boolean']>;
  public?: Maybe<Scalars['Boolean']>;
  uploaded?: Maybe<Scalars['Boolean']>;
  filename?: Maybe<Scalars['Boolean']>;
  uploadUrl?: Maybe<Scalars['Boolean']>;
  fields?: Maybe<Scalars['Boolean']>;
  meta?: Maybe<Scalars['Boolean']>;
  mods?: Maybe<Scalars['Boolean']>;
};

/** File Field Attributes */
export type FileFieldTypeAttributes = {
  __typename?: 'FileFieldTypeAttributes';
  format: Scalars['String'];
  maxSize?: Maybe<Scalars['Int']>;
  /** @deprecated Field is deprecated */
  showTitle?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field is deprecated */
  showUrl?: Maybe<Scalars['Boolean']>;
  typeRestrictions?: Maybe<Array<Scalars['String']>>;
  expiration?: Maybe<Scalars['Int']>;
};

export type FileFilter = {
  id?: Maybe<IdPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  deletedAt?: Maybe<IntPredicate>;
  fileId?: Maybe<StringPredicate>;
  downloadUrl?: Maybe<StringPredicate>;
  shareUrl?: Maybe<StringPredicate>;
  provider?: Maybe<StringPredicate>;
  public?: Maybe<BoolPredicate>;
  uploaded?: Maybe<BoolPredicate>;
  filename?: Maybe<StringPredicate>;
  uploadUrl?: Maybe<StringPredicate>;
  _fullText?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserFilter>;
  settings_menuBarLogo?: Maybe<SettingRelationFilter>;
  settings_landingPageImage?: Maybe<SettingRelationFilter>;
  users_avatar?: Maybe<UserRelationFilter>;
  teamMembers_avatar?: Maybe<TeamMemberRelationFilter>;
  products_image?: Maybe<ProductRelationFilter>;
  AND?: Maybe<Array<FileFilter>>;
  OR?: Maybe<Array<FileFilter>>;
};

export type FileGroupBy = {
  query: FileGroupByQuery;
  sort?: Maybe<Array<GroupBySort>>;
  having?: Maybe<Having>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type FileGroupByQuery = {
  id?: Maybe<Array<GroupByField>>;
  createdAt?: Maybe<Array<GroupByField>>;
  updatedAt?: Maybe<Array<GroupByField>>;
  fileId?: Maybe<Array<GroupByField>>;
  downloadUrl?: Maybe<Array<GroupByField>>;
  shareUrl?: Maybe<Array<GroupByField>>;
  provider?: Maybe<Array<GroupByField>>;
  public?: Maybe<Array<GroupByField>>;
  uploaded?: Maybe<Array<GroupByField>>;
  filename?: Maybe<Array<GroupByField>>;
  uploadUrl?: Maybe<Array<GroupByField>>;
  fields?: Maybe<Array<GroupByField>>;
  meta?: Maybe<Array<GroupByField>>;
  mods?: Maybe<Array<GroupByField>>;
  createdBy?: Maybe<UserGroupByQuery>;
  settings_menuBarLogo?: Maybe<SettingGroupByQuery>;
  settings_landingPageImage?: Maybe<SettingGroupByQuery>;
  users_avatar?: Maybe<UserGroupByQuery>;
  teamMembers_avatar?: Maybe<TeamMemberGroupByQuery>;
  products_image?: Maybe<ProductGroupByQuery>;
  _group?: Maybe<Array<GroupIdentifiersGroupByField>>;
};

export type FileKeyFilter = {
  id?: Maybe<Scalars['ID']>;
  fileId?: Maybe<Scalars['String']>;
};

/** FileListResponse output */
export type FileListResponse = {
  __typename?: 'FileListResponse';
  /** List items */
  items: Array<File>;
  /** List items count */
  count: Scalars['Int'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
};

/** FileManyResponse output */
export type FileManyResponse = {
  __typename?: 'FileManyResponse';
  /** List items */
  items: Array<File>;
  /** List items count */
  count: Scalars['Int'];
};

/** No longer supported. Use `sort` instead. */
export enum FileOrderBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  FileIdAsc = 'fileId_ASC',
  FileIdDesc = 'fileId_DESC',
  DownloadUrlAsc = 'downloadUrl_ASC',
  DownloadUrlDesc = 'downloadUrl_DESC',
  ShareUrlAsc = 'shareUrl_ASC',
  ShareUrlDesc = 'shareUrl_DESC',
  ProviderAsc = 'provider_ASC',
  ProviderDesc = 'provider_DESC',
  PublicAsc = 'public_ASC',
  PublicDesc = 'public_DESC',
  UploadedAsc = 'uploaded_ASC',
  UploadedDesc = 'uploaded_DESC',
  FilenameAsc = 'filename_ASC',
  FilenameDesc = 'filename_DESC',
  UploadUrlAsc = 'uploadUrl_ASC',
  UploadUrlDesc = 'uploadUrl_DESC',
  FieldsAsc = 'fields_ASC',
  FieldsDesc = 'fields_DESC',
  MetaAsc = 'meta_ASC',
  MetaDesc = 'meta_DESC',
  ModsAsc = 'mods_ASC',
  ModsDesc = 'mods_DESC'
}

/** Files subscription payload */
export type FilePayload = {
  __typename?: 'FilePayload';
  mutation: MutationType;
  node?: Maybe<File>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
  previousValues?: Maybe<File>;
};

export type FileSort = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  deletedAt?: Maybe<SortOrder>;
  fileId?: Maybe<SortOrder>;
  downloadUrl?: Maybe<SortOrder>;
  shareUrl?: Maybe<SortOrder>;
  provider?: Maybe<SortOrder>;
  public?: Maybe<SortOrder>;
  uploaded?: Maybe<SortOrder>;
  filename?: Maybe<SortOrder>;
  uploadUrl?: Maybe<SortOrder>;
  createdBy?: Maybe<UserSort>;
};

/** Files relation input */
export type FilesProducts_ImageManyRelationInput = {
  connect?: Maybe<Array<ProductKeyFilter>>;
};

/** Files relation input */
export type FilesProducts_ImageRelationInput = {
  connect?: Maybe<Array<ProductKeyFilter>>;
  create?: Maybe<Array<Maybe<Image_ProductCreateInput>>>;
};

/** Files relation input */
export type FilesProducts_ImageUpdateRelationInput = {
  connect?: Maybe<Array<ProductKeyFilter>>;
  disconnect?: Maybe<Array<ProductKeyFilter>>;
  reconnect?: Maybe<Array<ProductKeyFilter>>;
  create?: Maybe<Array<Maybe<Image_ProductCreateInput>>>;
  update?: Maybe<Array<Maybe<Image_ProductUpdateInput>>>;
};

/** Files relation input */
export type FilesTeamMembers_AvatarManyRelationInput = {
  connect?: Maybe<Array<TeamMemberKeyFilter>>;
};

/** Files relation input */
export type FilesTeamMembers_AvatarRelationInput = {
  connect?: Maybe<Array<TeamMemberKeyFilter>>;
};

/** Files relation input */
export type FilesTeamMembers_AvatarUpdateRelationInput = {
  connect?: Maybe<Array<TeamMemberKeyFilter>>;
  disconnect?: Maybe<Array<TeamMemberKeyFilter>>;
  reconnect?: Maybe<Array<TeamMemberKeyFilter>>;
  update?: Maybe<Array<Maybe<Avatar_TeamMemberUpdateInput>>>;
};

/** Files subscription filter */
export type FileSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<FileFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

/** Files relation input */
export type FilesUsers_AvatarManyRelationInput = {
  connect?: Maybe<Array<UserKeyFilter>>;
};

/** Files relation input */
export type FilesUsers_AvatarRelationInput = {
  connect?: Maybe<Array<UserKeyFilter>>;
  create?: Maybe<Array<Maybe<Avatar_UserCreateInput>>>;
};

/** Files relation input */
export type FilesUsers_AvatarUpdateRelationInput = {
  connect?: Maybe<Array<UserKeyFilter>>;
  disconnect?: Maybe<Array<UserKeyFilter>>;
  reconnect?: Maybe<Array<UserKeyFilter>>;
  create?: Maybe<Array<Maybe<Avatar_UserCreateInput>>>;
  update?: Maybe<Array<Maybe<Avatar_UserUpdateInput>>>;
};

/** File Type Format Enum */
export enum FileTypeFormatEnum {
  File = 'FILE',
  Image = 'IMAGE'
}

/** Files update input */
export type FileUpdateByFilterInput = {
  downloadUrl?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  shareUrl?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  provider?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  public?: Maybe<Array<Maybe<UpdateByFilterBooleanSwitchInput>>>;
  uploaded?: Maybe<Array<Maybe<UpdateByFilterBooleanSwitchInput>>>;
  filename?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  uploadUrl?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  fields?: Maybe<Array<Maybe<UpdateByFilterJsonInput>>>;
  meta?: Maybe<Array<Maybe<UpdateByFilterJsonInput>>>;
  mods?: Maybe<Array<Maybe<UpdateByFilterJsonInput>>>;
};

/** Files update input */
export type FileUpdateInput = {
  id?: Maybe<Scalars['ID']>;
  fileId?: Maybe<Scalars['String']>;
  public?: Maybe<Scalars['Boolean']>;
  filename?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
  mods?: Maybe<Scalars['JSON']>;
  users_avatar?: Maybe<FilesUsers_AvatarUpdateRelationInput>;
  teamMembers_avatar?: Maybe<FilesTeamMembers_AvatarUpdateRelationInput>;
  products_image?: Maybe<FilesProducts_ImageUpdateRelationInput>;
};

export type FileUploadInfoResponse = {
  __typename?: 'FileUploadInfoResponse';
  policy: Scalars['String'];
  signature: Scalars['String'];
  apiKey: Scalars['String'];
  path: Scalars['String'];
};

export type FloatPredicateHaving = {
  equals?: Maybe<Scalars['Float']>;
  not_equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  not_in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  is_empty?: Maybe<Scalars['Boolean']>;
  is_not_empty?: Maybe<Scalars['Boolean']>;
  AND?: Maybe<Array<FloatPredicateHaving>>;
  OR?: Maybe<Array<FloatPredicateHaving>>;
};

/** FunctionInfo */
export type FunctionInfo = {
  name: Scalars['String'];
  functionType: FunctionType;
  description?: Maybe<Scalars['String']>;
  application?: Maybe<Application>;
};

/** FunctionInfoFilter */
export type FunctionInfoFilter = {
  name?: Maybe<Scalars['String']>;
  functionType?: Maybe<FunctionType>;
  description?: Maybe<Scalars['String']>;
};

/** FunctionInfoOrderBy */
export enum FunctionInfoOrderBy {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  FunctionTypeAsc = 'functionType_ASC',
  FunctionTypeDesc = 'functionType_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC'
}

/** FunctionListResponse output */
export type FunctionListResponse = {
  __typename?: 'FunctionListResponse';
  /** List items */
  items: Array<FunctionInfo>;
  /** List items count */
  count: Scalars['Int'];
};

/** FunctionResolverInfo */
export type FunctionResolverInfo = FunctionInfo & {
  __typename?: 'FunctionResolverInfo';
  name: Scalars['String'];
  functionType: FunctionType;
  description?: Maybe<Scalars['String']>;
  gqlType: Scalars['String'];
  application?: Maybe<Application>;
};

/** FunctionTaskInfo */
export type FunctionTaskInfo = FunctionInfo & {
  __typename?: 'FunctionTaskInfo';
  name: Scalars['String'];
  functionType: FunctionType;
  description?: Maybe<Scalars['String']>;
  scheduleExpression?: Maybe<Scalars['String']>;
  application?: Maybe<Application>;
};

/** FunctionTriggerInfo */
export type FunctionTriggerInfo = FunctionInfo & {
  __typename?: 'FunctionTriggerInfo';
  name: Scalars['String'];
  functionType: FunctionType;
  description?: Maybe<Scalars['String']>;
  operation: Scalars['String'];
  tableName: Scalars['String'];
  type: Scalars['String'];
  application?: Maybe<Application>;
};

/** FunctionType */
export enum FunctionType {
  Resolver = 'resolver',
  Trigger = 'trigger',
  Webhook = 'webhook',
  Task = 'task',
  Schedule = 'schedule'
}

/** FunctionWebhookInfo */
export type FunctionWebhookInfo = FunctionInfo & {
  __typename?: 'FunctionWebhookInfo';
  name: Scalars['String'];
  functionType: FunctionType;
  description?: Maybe<Scalars['String']>;
  httpMethod: Scalars['String'];
  workspaceRelativePath: Scalars['String'];
  workspaceFullPath: Scalars['String'];
  application?: Maybe<Application>;
};

/** Geo Field Attributes */
export type GeoFieldTypeAttributes = {
  __typename?: 'GeoFieldTypeAttributes';
  format: Scalars['String'];
  srid?: Maybe<Scalars['Int']>;
};

/** Github connection params */
export type GithubOptions = {
  __typename?: 'GithubOptions';
  enabled: Scalars['Boolean'];
  client_id: Scalars['String'];
  client_secret: Scalars['String'];
};

/** Github connection params input */
export type GithubOptionsInput = {
  enabled: Scalars['Boolean'];
  client_id: Scalars['String'];
  client_secret: Scalars['String'];
};

/** Google connection params */
export type GoogleOptions = {
  __typename?: 'GoogleOptions';
  enabled: Scalars['Boolean'];
  client_id: Scalars['String'];
  client_secret: Scalars['String'];
};

/** Google connection params input */
export type GoogleOptionsInput = {
  enabled: Scalars['Boolean'];
  client_id: Scalars['String'];
  client_secret: Scalars['String'];
};

/** GraphQLCreateFileCustomInput */
export type GraphQlCreateFileCustomInput = {
  fileId?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  public?: Maybe<Scalars['Boolean']>;
};

/** GraphQLCreateFileItemInput */
export type GraphQlCreateFileItemInput = {
  create?: Maybe<GraphQlCreateFileCustomInput>;
};

/** GraphQLFileItemResponse */
export type GraphQlFileItemResponse = {
  __typename?: 'GraphQLFileItemResponse';
  id?: Maybe<Scalars['String']>;
  downloadUrl?: Maybe<Scalars['String']>;
};

export type GroupByField = {
  as?: Maybe<Scalars['String']>;
  fn?: Maybe<Array<Maybe<GroupByFieldFunction>>>;
};

export type GroupByFieldFunction = {
  aggregate?: Maybe<AggregationFunctionType>;
  distinct?: Maybe<Scalars['Boolean']>;
  datePart?: Maybe<DatePartFunctionType>;
  abs?: Maybe<Scalars['Boolean']>;
  ceil?: Maybe<Scalars['Boolean']>;
  crc32?: Maybe<Scalars['Boolean']>;
  floor?: Maybe<Scalars['Boolean']>;
  mod?: Maybe<Scalars['Int']>;
  round?: Maybe<Scalars['Int']>;
  sign?: Maybe<Scalars['Boolean']>;
  truncate?: Maybe<Scalars['Int']>;
  left?: Maybe<Scalars['Int']>;
  right?: Maybe<Scalars['Int']>;
  locate?: Maybe<LocateFunctionArguments>;
  substring?: Maybe<SubstringFunctionArguments>;
  replace?: Maybe<ReplaceFunctionArguments>;
  reverse?: Maybe<Scalars['Boolean']>;
  trim?: Maybe<TrimFunctionArguments>;
  ltrim?: Maybe<Scalars['Boolean']>;
  rtrim?: Maybe<Scalars['Boolean']>;
  lower?: Maybe<Scalars['Boolean']>;
  upper?: Maybe<Scalars['Boolean']>;
  ascii?: Maybe<Scalars['Boolean']>;
  hex?: Maybe<Scalars['Boolean']>;
  bitLength?: Maybe<Scalars['Boolean']>;
  charLength?: Maybe<Scalars['Boolean']>;
  length?: Maybe<Scalars['Boolean']>;
  like?: Maybe<PatternFunctionArguments>;
  notLike?: Maybe<PatternFunctionArguments>;
  lpad?: Maybe<StringPadFunctionArguments>;
  rpad?: Maybe<StringPadFunctionArguments>;
  ifNull?: Maybe<Scalars['String']>;
  isNull?: Maybe<Scalars['Boolean']>;
  nullIf?: Maybe<Scalars['String']>;
};

export type GroupByResponse = {
  __typename?: 'GroupByResponse';
  ID?: Maybe<Scalars['ID']>;
  String?: Maybe<Scalars['String']>;
  Int?: Maybe<Scalars['Int']>;
  BigInt?: Maybe<Scalars['BigInt']>;
  Float?: Maybe<Scalars['Float']>;
  DateTime?: Maybe<Scalars['DateTime']>;
  Date?: Maybe<Scalars['Date']>;
  Boolean?: Maybe<Scalars['Boolean']>;
  JSON?: Maybe<Scalars['JSON']>;
  GroupIds?: Maybe<Array<Scalars['ID']>>;
  UserGroup: UserListResponse;
  FileGroup: FileListResponse;
  RoleGroup: RoleListResponse;
  ApiTokenGroup: ApiTokenListResponse;
  EnvironmentVariableGroup: EnvironmentVariableListResponse;
  AuthenticationProfileGroup: AuthenticationProfileListResponse;
  TeamMemberGroup: TeamMemberListResponse;
  ProductGroup: ProductListResponse;
  CustomerGroup: CustomerListResponse;
  OrderGroup: OrderListResponse;
  InvitationGroup: InvitationListResponse;
};


export type GroupByResponseUserGroupArgs = {
  filter?: Maybe<UserFilter>;
  orderBy?: Maybe<Array<Maybe<UserOrderBy>>>;
  sort?: Maybe<Array<UserSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<UserGroupBy>;
};


export type GroupByResponseFileGroupArgs = {
  filter?: Maybe<FileFilter>;
  orderBy?: Maybe<Array<Maybe<FileOrderBy>>>;
  sort?: Maybe<Array<FileSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<FileGroupBy>;
};


export type GroupByResponseRoleGroupArgs = {
  filter?: Maybe<RoleFilter>;
  orderBy?: Maybe<Array<Maybe<RoleOrderBy>>>;
  sort?: Maybe<Array<RoleSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<RoleGroupBy>;
};


export type GroupByResponseApiTokenGroupArgs = {
  filter?: Maybe<ApiTokenFilter>;
  orderBy?: Maybe<Array<Maybe<ApiTokenOrderBy>>>;
  sort?: Maybe<Array<ApiTokenSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<ApiTokenGroupBy>;
};


export type GroupByResponseEnvironmentVariableGroupArgs = {
  filter?: Maybe<EnvironmentVariableFilter>;
  orderBy?: Maybe<Array<Maybe<EnvironmentVariableOrderBy>>>;
  sort?: Maybe<Array<EnvironmentVariableSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<EnvironmentVariableGroupBy>;
};


export type GroupByResponseAuthenticationProfileGroupArgs = {
  filter?: Maybe<AuthenticationProfileFilter>;
  orderBy?: Maybe<Array<Maybe<AuthenticationProfileOrderBy>>>;
  sort?: Maybe<Array<AuthenticationProfileSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<AuthenticationProfileGroupBy>;
};


export type GroupByResponseTeamMemberGroupArgs = {
  filter?: Maybe<TeamMemberFilter>;
  orderBy?: Maybe<Array<Maybe<TeamMemberOrderBy>>>;
  sort?: Maybe<Array<TeamMemberSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<TeamMemberGroupBy>;
};


export type GroupByResponseProductGroupArgs = {
  filter?: Maybe<ProductFilter>;
  orderBy?: Maybe<Array<Maybe<ProductOrderBy>>>;
  sort?: Maybe<Array<ProductSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<ProductGroupBy>;
};


export type GroupByResponseCustomerGroupArgs = {
  filter?: Maybe<CustomerFilter>;
  orderBy?: Maybe<Array<Maybe<CustomerOrderBy>>>;
  sort?: Maybe<Array<CustomerSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<CustomerGroupBy>;
};


export type GroupByResponseOrderGroupArgs = {
  filter?: Maybe<OrderFilter>;
  orderBy?: Maybe<Array<Maybe<OrderOrderBy>>>;
  sort?: Maybe<Array<OrderSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<OrderGroupBy>;
};


export type GroupByResponseInvitationGroupArgs = {
  filter?: Maybe<InvitationFilter>;
  orderBy?: Maybe<Array<Maybe<InvitationOrderBy>>>;
  sort?: Maybe<Array<InvitationSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<InvitationGroupBy>;
};

export type GroupBySort = {
  alias: Scalars['String'];
  direction: SortOrder;
};

export type GroupIdentifiersGroupByField = {
  as: Scalars['String'];
};

export type Having = {
  alias?: Maybe<Scalars['String']>;
  id?: Maybe<IdPredicateHaving>;
  string?: Maybe<StringPredicateHaving>;
  int?: Maybe<IntPredicateHaving>;
  bigint?: Maybe<BigIntPredicateHaving>;
  float?: Maybe<FloatPredicateHaving>;
  bool?: Maybe<BoolPredicateHaving>;
  date?: Maybe<DatePredicateHaving>;
  datetime?: Maybe<DateTimePredicateHaving>;
  AND?: Maybe<Array<Having>>;
  OR?: Maybe<Array<Having>>;
};

export type IdPredicate = {
  equals?: Maybe<Scalars['ID']>;
  not_equals?: Maybe<Scalars['ID']>;
  in?: Maybe<Array<Scalars['ID']>>;
  not_in?: Maybe<Array<Scalars['ID']>>;
  contains?: Maybe<Scalars['ID']>;
  not_contains?: Maybe<Scalars['ID']>;
  starts_with?: Maybe<Scalars['ID']>;
  not_starts_with?: Maybe<Scalars['ID']>;
  ends_with?: Maybe<Scalars['ID']>;
  not_ends_with?: Maybe<Scalars['ID']>;
  lt?: Maybe<Scalars['ID']>;
  lte?: Maybe<Scalars['ID']>;
  gt?: Maybe<Scalars['ID']>;
  gte?: Maybe<Scalars['ID']>;
  is_empty?: Maybe<Scalars['Boolean']>;
  is_not_empty?: Maybe<Scalars['Boolean']>;
};

export type IdPredicateHaving = {
  equals?: Maybe<Scalars['ID']>;
  not_equals?: Maybe<Scalars['ID']>;
  in?: Maybe<Array<Scalars['ID']>>;
  not_in?: Maybe<Array<Scalars['ID']>>;
  contains?: Maybe<Scalars['ID']>;
  not_contains?: Maybe<Scalars['ID']>;
  starts_with?: Maybe<Scalars['ID']>;
  not_starts_with?: Maybe<Scalars['ID']>;
  ends_with?: Maybe<Scalars['ID']>;
  not_ends_with?: Maybe<Scalars['ID']>;
  lt?: Maybe<Scalars['ID']>;
  lte?: Maybe<Scalars['ID']>;
  gt?: Maybe<Scalars['ID']>;
  gte?: Maybe<Scalars['ID']>;
  is_empty?: Maybe<Scalars['Boolean']>;
  is_not_empty?: Maybe<Scalars['Boolean']>;
  AND?: Maybe<Array<IdPredicateHaving>>;
  OR?: Maybe<Array<IdPredicateHaving>>;
};

/** Products create input from image */
export type Image_ProductCreateInput = {
  /** Product name */
  title: Scalars['String'];
  /** Quantity of the products available */
  quantity?: Maybe<Scalars['Int']>;
  orders?: Maybe<ProductsOrdersRelationInput>;
  image?: Maybe<ProductsImageRelationInput>;
  /** Product price */
  price?: Maybe<Scalars['Int']>;
  /** Product availability */
  status?: Maybe<Scalars['String']>;
};

/** Products update input from image */
export type Image_ProductUpdateInput = {
  filter?: Maybe<ProductKeyFilter>;
  data: ProductUpdateInput;
};

/** ImportedTable */
export type ImportedTable = {
  __typename?: 'ImportedTable';
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** Table Create Index Input */
export type IndexCreateInput = {
  tableId: Scalars['ID'];
  type: TableIndexType;
  columns: Array<TableIndexColumnInput>;
  force?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

/** Table Delete Index Input */
export type IndexDeleteInput = {
  id: Scalars['ID'];
};

/** Table Update Index Input */
export type IndexUpdateInput = {
  id: Scalars['ID'];
  type?: Maybe<TableIndexType>;
  columns?: Maybe<Array<TableIndexColumnInput>>;
  force?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

export type IntPredicate = {
  equals?: Maybe<Scalars['Int']>;
  not_equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  not_in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  is_empty?: Maybe<Scalars['Boolean']>;
  is_not_empty?: Maybe<Scalars['Boolean']>;
};

export type IntPredicateHaving = {
  equals?: Maybe<Scalars['Int']>;
  not_equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  not_in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  is_empty?: Maybe<Scalars['Boolean']>;
  is_not_empty?: Maybe<Scalars['Boolean']>;
  AND?: Maybe<Array<IntPredicateHaving>>;
  OR?: Maybe<Array<IntPredicateHaving>>;
};

export type IntrospectionQueryResponse = {
  __typename?: 'IntrospectionQueryResponse';
  url: Scalars['String'];
};

export type Invitation = {
  __typename?: 'Invitation';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<User>;
  invitedUser?: Maybe<User>;
  _description?: Maybe<Scalars['String']>;
};

export type Invitation_PermissionFilter = {
  id?: Maybe<IdPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  deletedAt?: Maybe<IntPredicate>;
  _fullText?: Maybe<Scalars['String']>;
  createdBy?: Maybe<User_PermissionFilter>;
  invitedUser?: Maybe<User_PermissionFilter>;
  AND?: Maybe<Array<Invitation_PermissionFilter>>;
  OR?: Maybe<Array<Invitation_PermissionFilter>>;
};

/** Users create input from invitation */
export type Invitation_UserCreateInput = {
  email: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  avatar?: Maybe<UsersAvatarRelationInput>;
  roles?: Maybe<UsersRolesRelationInput>;
  customer?: Maybe<UsersCustomerRelationInput>;
  invitation?: Maybe<UsersInvitationRelationInput>;
};

/** Users update input from invitation */
export type Invitation_UserUpdateInput = {
  email?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  avatar?: Maybe<UsersAvatarUpdateRelationInput>;
  roles?: Maybe<UsersRolesUpdateRelationInput>;
  customer?: Maybe<UsersCustomerUpdateRelationInput>;
  invitation?: Maybe<UsersInvitationUpdateRelationInput>;
};

/** Invitations create input */
export type InvitationCreateInput = {
  invitedUser?: Maybe<InvitationsInvitedUserRelationInput>;
};

/** Invitations create many input */
export type InvitationCreateManyInput = {
  invitedUser?: Maybe<InvitationsInvitedUserManyRelationInput>;
};

/** Invitations delete input */
export type InvitationDeleteInput = {
  id?: Maybe<Scalars['ID']>;
  force?: Maybe<Scalars['Boolean']>;
};

/** InvitationFieldsPermissions create input */
export type InvitationFieldsPermissions = {
  createdAt?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Boolean']>;
};

export type InvitationFilter = {
  id?: Maybe<IdPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  deletedAt?: Maybe<IntPredicate>;
  _fullText?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserFilter>;
  invitedUser?: Maybe<UserFilter>;
  AND?: Maybe<Array<InvitationFilter>>;
  OR?: Maybe<Array<InvitationFilter>>;
};

export type InvitationGroupBy = {
  query: InvitationGroupByQuery;
  sort?: Maybe<Array<GroupBySort>>;
  having?: Maybe<Having>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type InvitationGroupByQuery = {
  id?: Maybe<Array<GroupByField>>;
  createdAt?: Maybe<Array<GroupByField>>;
  updatedAt?: Maybe<Array<GroupByField>>;
  createdBy?: Maybe<UserGroupByQuery>;
  invitedUser?: Maybe<UserGroupByQuery>;
  _group?: Maybe<Array<GroupIdentifiersGroupByField>>;
};

export type InvitationKeyFilter = {
  id?: Maybe<Scalars['ID']>;
};

/** InvitationListResponse output */
export type InvitationListResponse = {
  __typename?: 'InvitationListResponse';
  /** List items */
  items: Array<Invitation>;
  /** List items count */
  count: Scalars['Int'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
};

/** InvitationManyResponse output */
export type InvitationManyResponse = {
  __typename?: 'InvitationManyResponse';
  /** List items */
  items: Array<Invitation>;
  /** List items count */
  count: Scalars['Int'];
};

/** No longer supported. Use `sort` instead. */
export enum InvitationOrderBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC'
}

/** Invitations subscription payload */
export type InvitationPayload = {
  __typename?: 'InvitationPayload';
  mutation: MutationType;
  node?: Maybe<Invitation>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
  previousValues?: Maybe<Invitation>;
};

/** Invitations relation input */
export type InvitationsInvitedUserManyRelationInput = {
  connect?: Maybe<UserKeyFilter>;
};

/** Invitations relation input */
export type InvitationsInvitedUserRelationInput = {
  connect?: Maybe<UserKeyFilter>;
  create?: Maybe<Invitation_UserCreateInput>;
};

/** Invitations relation input */
export type InvitationsInvitedUserUpdateRelationInput = {
  connect?: Maybe<UserKeyFilter>;
  disconnect?: Maybe<UserKeyFilter>;
  reconnect?: Maybe<UserKeyFilter>;
  create?: Maybe<Invitation_UserCreateInput>;
  update?: Maybe<Invitation_UserUpdateInput>;
};

export type InvitationSort = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  deletedAt?: Maybe<SortOrder>;
  createdBy?: Maybe<UserSort>;
  invitedUser?: Maybe<UserSort>;
};

/** Invitations subscription filter */
export type InvitationSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<InvitationFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

/** Invitations update input */
export type InvitationUpdateInput = {
  id?: Maybe<Scalars['ID']>;
  invitedUser?: Maybe<InvitationsInvitedUserUpdateRelationInput>;
};

/** Invited By Name */
export type InvitedByName = {
  __typename?: 'InvitedByName';
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  workspaceName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

/** Invitations create input from invitedUser */
export type InvitedUser_InvitationCreateInput = {
  invitedUser?: Maybe<InvitationsInvitedUserRelationInput>;
};

/** Invitations update input from invitedUser */
export type InvitedUser_InvitationUpdateInput = {
  invitedUser?: Maybe<InvitationsInvitedUserUpdateRelationInput>;
};

/** InviteMembersInput */
export type InviteMembersInput = {
  recipients: Array<InviteRecipientInput>;
};

/** InviteRecipientInput */
export type InviteRecipientInput = {
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Scalars['ID']>>;
};

/** InvokeData */
export type InvokeData = {
  functionName: Scalars['String'];
  inputArgs?: Maybe<Scalars['String']>;
};

/** InvokeFunctionResponse */
export type InvokeFunctionResponse = {
  __typename?: 'InvokeFunctionResponse';
  responseData: Scalars['String'];
};


export type LocateFunctionArguments = {
  str: Scalars['String'];
  pos?: Maybe<Scalars['Int']>;
};

/** LoginResponse */
export type LoginResponse = {
  __typename?: 'LoginResponse';
  success?: Maybe<Scalars['Boolean']>;
  auth?: Maybe<Auth>;
  workspaces?: Maybe<Array<WorkspaceInfo>>;
};

/** MissingRelation */
export type MissingRelation = {
  __typename?: 'MissingRelation';
  table: Scalars['String'];
};

/** MissingRelation Field Attributes */
export type MissingRelationFieldTypeAttributes = {
  __typename?: 'MissingRelationFieldTypeAttributes';
  missingTable: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  apiTokenCreate: ApiTokenResponse;
  apiTokenDelete?: Maybe<SuccessResponse>;
  apiTokenDeleteByFilter?: Maybe<SuccessResponse>;
  apiTokenDestroy?: Maybe<SuccessResponse>;
  apiTokenDestroyByFilter?: Maybe<SuccessResponse>;
  apiTokenRestore: ApiToken;
  apiTokenUpdate: ApiToken;
  apiTokenUpdateByFilter: ApiTokenManyResponse;
  /** @deprecated No longer supported. Use `system.applicationDelete` instead. */
  applicationDelete?: Maybe<SuccessResponse>;
  /** @deprecated No longer supported. Use `system.applicationInstall` instead. */
  applicationInstall?: Maybe<Application>;
  /** @deprecated No longer supported. Use `system.applicationUpdate` instead. */
  applicationUpdate?: Maybe<Application>;
  authenticationProfileCreate: AuthenticationProfile;
  authenticationProfileCreateMany: AuthenticationProfileManyResponse;
  authenticationProfileDelete?: Maybe<SuccessResponse>;
  authenticationProfileDeleteByFilter?: Maybe<SuccessResponse>;
  authenticationProfileDestroy?: Maybe<SuccessResponse>;
  authenticationProfileDestroyByFilter?: Maybe<SuccessResponse>;
  authenticationProfileRestore: AuthenticationProfile;
  authenticationProfileUpdate: AuthenticationProfile;
  authenticationProfileUpdateByFilter: AuthenticationProfileManyResponse;
  authenticationSettingsUpdate: AuthenticationSetting;
  billingDetailsUpdate?: Maybe<BillingDetailsResponse>;
  /** @deprecated No longer supported. Use `system.billingPlanUpdate` instead. */
  billingPlanUpdate?: Maybe<BillingCurrentPlanResponse>;
  customerCreate: Customer;
  customerCreateMany: CustomerManyResponse;
  customerDelete?: Maybe<SuccessResponse>;
  customerDeleteByFilter?: Maybe<SuccessResponse>;
  customerDestroy?: Maybe<SuccessResponse>;
  customerDestroyByFilter?: Maybe<SuccessResponse>;
  customerRestore: Customer;
  customerUpdate: Customer;
  /** @deprecated No longer supported. Use `system.deploy` instead. */
  deploy?: Maybe<Scalars['Boolean']>;
  environmentVariableCreate: EnvironmentVariable;
  environmentVariableCreateMany: EnvironmentVariableManyResponse;
  environmentVariableDelete?: Maybe<SuccessResponse>;
  environmentVariableDeleteByFilter?: Maybe<SuccessResponse>;
  environmentVariableDestroy?: Maybe<SuccessResponse>;
  environmentVariableDestroyByFilter?: Maybe<SuccessResponse>;
  environmentVariableRestore: EnvironmentVariable;
  environmentVariableUpdate: EnvironmentVariable;
  environmentVariableUpdateByFilter: EnvironmentVariableManyResponse;
  /** @deprecated No longer supported. Use `system.fieldCreate` instead. */
  fieldCreate: TableField;
  /** @deprecated No longer supported. Use `system.fieldDelete` instead. */
  fieldDelete: SuccessResponse;
  /** @deprecated No longer supported. Use `system.fieldUpdate` instead. */
  fieldUpdate: TableField;
  /** @deprecated No longer supported. Use `system.fieldUpdatePosition` instead. */
  fieldUpdatePosition: SuccessResponse;
  fileCreate: File;
  fileCreateMany: FileManyResponse;
  fileDelete?: Maybe<SuccessResponse>;
  fileDeleteByFilter?: Maybe<SuccessResponse>;
  fileDestroy?: Maybe<SuccessResponse>;
  fileDestroyByFilter?: Maybe<SuccessResponse>;
  fileRestore: File;
  fileUpdate: File;
  fileUpdateByFilter: FileManyResponse;
  indexCreate: TableIndex;
  indexDelete?: Maybe<SuccessResponse>;
  indexUpdate: TableIndex;
  invitationCreate: Invitation;
  invitationCreateMany: InvitationManyResponse;
  invitationDelete?: Maybe<SuccessResponse>;
  invitationDeleteByFilter?: Maybe<SuccessResponse>;
  invitationDestroy?: Maybe<SuccessResponse>;
  invitationDestroyByFilter?: Maybe<SuccessResponse>;
  invitationRestore: Invitation;
  invitationUpdate: Invitation;
  inviteMembers: Array<Maybe<TeamInvitation>>;
  /** @deprecated No longer supported. Use `system.invoke` instead. */
  invoke?: Maybe<InvokeFunctionResponse>;
  orderCreate: Order;
  orderCreateMany: OrderManyResponse;
  orderDelete?: Maybe<SuccessResponse>;
  orderDeleteByFilter?: Maybe<SuccessResponse>;
  orderDestroy?: Maybe<SuccessResponse>;
  orderDestroyByFilter?: Maybe<SuccessResponse>;
  orderRestore: Order;
  orderUpdate: Order;
  orderUpdateByFilter: OrderManyResponse;
  /** @deprecated No longer supported. Use `system.prepareDeploy` instead. */
  prepareDeploy: DeployDataResponse;
  productCreate: Product;
  productCreateMany: ProductManyResponse;
  productDelete?: Maybe<SuccessResponse>;
  productDeleteByFilter?: Maybe<SuccessResponse>;
  productDestroy?: Maybe<SuccessResponse>;
  productDestroyByFilter?: Maybe<SuccessResponse>;
  productRestore: Product;
  productUpdate: Product;
  productUpdateByFilter: ProductManyResponse;
  roleCreate: Role;
  roleCreateMany: RoleManyResponse;
  roleDelete?: Maybe<SuccessResponse>;
  roleDeleteByFilter?: Maybe<SuccessResponse>;
  roleDestroy?: Maybe<SuccessResponse>;
  roleDestroyByFilter?: Maybe<SuccessResponse>;
  roleRestore: Role;
  roleUpdate: Role;
  roleUpdateByFilter: RoleManyResponse;
  sendInvitationTo8base?: Maybe<SuccessResponse>;
  settingsUpdate: Setting;
  system?: Maybe<SystemMutation>;
  /** @deprecated No longer supported. Use `system.tableCreate` instead. */
  tableCreate: Table;
  /** @deprecated No longer supported. Use `system.tableDelete` instead. */
  tableDelete: SuccessResponse;
  /** @deprecated No longer supported. Use `system.tableUpdate` instead. */
  tableUpdate: Table;
  teamInvitationAccept: TeamInvitationAcceptResponse;
  teamInvitationCancel?: Maybe<SuccessResponse>;
  teamInvitationDelete?: Maybe<SuccessResponse>;
  teamInvitationDeleteByFilter?: Maybe<SuccessResponse>;
  teamInvitationDestroy?: Maybe<SuccessResponse>;
  teamInvitationDestroyByFilter?: Maybe<SuccessResponse>;
  teamInvitationResend?: Maybe<SuccessResponse>;
  teamInvitationRestore: TeamInvitation;
  teamMemberDelete?: Maybe<SuccessResponse>;
  teamMemberDestroy?: Maybe<SuccessResponse>;
  teamMemberRestore: TeamMember;
  teamMemberUpdate: TeamMember;
  teamMemberUpdateByFilter: TeamMemberManyResponse;
  userChangePassword?: Maybe<SuccessResponse>;
  userCreate: User;
  userCreateMany: UserManyResponse;
  userDelete?: Maybe<SuccessResponse>;
  userDeleteByFilter?: Maybe<SuccessResponse>;
  userDestroy?: Maybe<SuccessResponse>;
  userDestroyByFilter?: Maybe<SuccessResponse>;
  userLogin?: Maybe<LoginResponse>;
  userPasswordForgot?: Maybe<SuccessResponse>;
  userPasswordForgotConfirm?: Maybe<SuccessResponse>;
  userRefreshToken?: Maybe<Auth>;
  userRestore: User;
  /** @deprecated No longer supported. Use `userSignUpWithToken` instead. */
  userSignUp: User;
  /** @deprecated No longer supported. Use `userVerificationEmailResend` instead. */
  userSignUpResend?: Maybe<SuccessResponse>;
  userSignUpWithPassword: User;
  userSignUpWithToken: User;
  userUpdate: User;
  userUpdateByFilter: UserManyResponse;
  userVerificationEmailResend?: Maybe<SuccessResponse>;
  /** @deprecated No longer supported. Use `system.viewCreate` instead. */
  viewCreate: Table;
  viewUpdate: Table;
  /** @deprecated No longer supported. Use `system.workspaceCreate` instead. */
  workspaceCreate?: Maybe<WorkspaceCreateResponse>;
  /** @deprecated No longer supported. Use `system.workspaceCreateAsync` instead. */
  workspaceCreateAsync?: Maybe<WorkspaceCreateResponse>;
  /** @deprecated No longer supported. Use `system.workspaceDelete` instead. */
  workspaceDelete?: Maybe<SuccessResponse>;
  /** @deprecated No longer supported. Use `system.workspaceLeave` instead. */
  workspaceLeave?: Maybe<SuccessResponse>;
  /** @deprecated No longer supported. Use `system.workspaceUpdate` instead. */
  workspaceUpdate?: Maybe<WorkspaceUpdateResponse>;
  setProductAvailability?: Maybe<SetProductAvailabilityResult>;
};


export type MutationApiTokenCreateArgs = {
  data: ApiTokenCreateInput;
};


export type MutationApiTokenDeleteArgs = {
  data?: Maybe<ApiTokenDeleteInput>;
  filter?: Maybe<ApiTokenKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationApiTokenDeleteByFilterArgs = {
  filter: ApiTokenFilter;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationApiTokenDestroyArgs = {
  filter?: Maybe<ApiTokenKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationApiTokenDestroyByFilterArgs = {
  filter: ApiTokenFilter;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationApiTokenRestoreArgs = {
  id: Scalars['String'];
};


export type MutationApiTokenUpdateArgs = {
  data: ApiTokenUpdateInput;
  filter?: Maybe<ApiTokenKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
  destroyDetached?: Maybe<Scalars['Boolean']>;
};


export type MutationApiTokenUpdateByFilterArgs = {
  data: ApiTokenUpdateByFilterInput;
  filter?: Maybe<ApiTokenFilter>;
};


export type MutationApplicationDeleteArgs = {
  data: ApplicationDeleteMutationInput;
};


export type MutationApplicationInstallArgs = {
  data: ApplicationInstallInput;
};


export type MutationApplicationUpdateArgs = {
  data: ApplicationUpdateInput;
};


export type MutationAuthenticationProfileCreateArgs = {
  data: AuthenticationProfileCreateInput;
};


export type MutationAuthenticationProfileCreateManyArgs = {
  data: Array<Maybe<AuthenticationProfileCreateManyInput>>;
};


export type MutationAuthenticationProfileDeleteArgs = {
  data?: Maybe<AuthenticationProfileDeleteInput>;
  filter?: Maybe<AuthenticationProfileKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationAuthenticationProfileDeleteByFilterArgs = {
  filter: AuthenticationProfileFilter;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationAuthenticationProfileDestroyArgs = {
  filter?: Maybe<AuthenticationProfileKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationAuthenticationProfileDestroyByFilterArgs = {
  filter: AuthenticationProfileFilter;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationAuthenticationProfileRestoreArgs = {
  id: Scalars['String'];
};


export type MutationAuthenticationProfileUpdateArgs = {
  data: AuthenticationProfileUpdateInput;
  filter?: Maybe<AuthenticationProfileKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
  destroyDetached?: Maybe<Scalars['Boolean']>;
};


export type MutationAuthenticationProfileUpdateByFilterArgs = {
  data: AuthenticationProfileUpdateByFilterInput;
  filter?: Maybe<AuthenticationProfileFilter>;
};


export type MutationAuthenticationSettingsUpdateArgs = {
  data: AuthenticationSettingUpdateInput;
};


export type MutationBillingDetailsUpdateArgs = {
  data: BillingDetailsUpdateMutationInput;
};


export type MutationBillingPlanUpdateArgs = {
  data: BillingPlanUpdateMutationInput;
};


export type MutationCustomerCreateArgs = {
  data: CustomerCreateInput;
};


export type MutationCustomerCreateManyArgs = {
  data: Array<Maybe<CustomerCreateManyInput>>;
};


export type MutationCustomerDeleteArgs = {
  data?: Maybe<CustomerDeleteInput>;
  filter?: Maybe<CustomerKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationCustomerDeleteByFilterArgs = {
  filter: CustomerFilter;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationCustomerDestroyArgs = {
  filter?: Maybe<CustomerKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationCustomerDestroyByFilterArgs = {
  filter: CustomerFilter;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationCustomerRestoreArgs = {
  id: Scalars['String'];
};


export type MutationCustomerUpdateArgs = {
  data: CustomerUpdateInput;
  filter?: Maybe<CustomerKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
  destroyDetached?: Maybe<Scalars['Boolean']>;
};


export type MutationDeployArgs = {
  data?: Maybe<DeployingBuildInput>;
};


export type MutationEnvironmentVariableCreateArgs = {
  data: EnvironmentVariableCreateInput;
};


export type MutationEnvironmentVariableCreateManyArgs = {
  data: Array<Maybe<EnvironmentVariableCreateManyInput>>;
};


export type MutationEnvironmentVariableDeleteArgs = {
  data?: Maybe<EnvironmentVariableDeleteInput>;
  filter?: Maybe<EnvironmentVariableKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationEnvironmentVariableDeleteByFilterArgs = {
  filter: EnvironmentVariableFilter;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationEnvironmentVariableDestroyArgs = {
  filter?: Maybe<EnvironmentVariableKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationEnvironmentVariableDestroyByFilterArgs = {
  filter: EnvironmentVariableFilter;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationEnvironmentVariableRestoreArgs = {
  id: Scalars['String'];
};


export type MutationEnvironmentVariableUpdateArgs = {
  data: EnvironmentVariableUpdateInput;
  filter?: Maybe<EnvironmentVariableKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
  destroyDetached?: Maybe<Scalars['Boolean']>;
};


export type MutationEnvironmentVariableUpdateByFilterArgs = {
  data: EnvironmentVariableUpdateByFilterInput;
  filter?: Maybe<EnvironmentVariableFilter>;
};


export type MutationFieldCreateArgs = {
  data: TableFieldCreateInput;
};


export type MutationFieldDeleteArgs = {
  data: TableFieldDeleteInput;
};


export type MutationFieldUpdateArgs = {
  data: TableFieldUpdateInput;
};


export type MutationFieldUpdatePositionArgs = {
  data: TableFieldPositionUpdateInput;
};


export type MutationFileCreateArgs = {
  data: FileCreateInput;
};


export type MutationFileCreateManyArgs = {
  data: Array<Maybe<FileCreateManyInput>>;
};


export type MutationFileDeleteArgs = {
  data?: Maybe<FileDeleteInput>;
  filter?: Maybe<FileKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationFileDeleteByFilterArgs = {
  filter: FileFilter;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationFileDestroyArgs = {
  filter?: Maybe<FileKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationFileDestroyByFilterArgs = {
  filter: FileFilter;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationFileRestoreArgs = {
  id: Scalars['String'];
};


export type MutationFileUpdateArgs = {
  data: FileUpdateInput;
  filter?: Maybe<FileKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
  destroyDetached?: Maybe<Scalars['Boolean']>;
};


export type MutationFileUpdateByFilterArgs = {
  data: FileUpdateByFilterInput;
  filter?: Maybe<FileFilter>;
};


export type MutationIndexCreateArgs = {
  data: IndexCreateInput;
};


export type MutationIndexDeleteArgs = {
  data: IndexDeleteInput;
};


export type MutationIndexUpdateArgs = {
  data: IndexUpdateInput;
};


export type MutationInvitationCreateArgs = {
  data: InvitationCreateInput;
};


export type MutationInvitationCreateManyArgs = {
  data: Array<Maybe<InvitationCreateManyInput>>;
};


export type MutationInvitationDeleteArgs = {
  data?: Maybe<InvitationDeleteInput>;
  filter?: Maybe<InvitationKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationInvitationDeleteByFilterArgs = {
  filter: InvitationFilter;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationInvitationDestroyArgs = {
  filter?: Maybe<InvitationKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationInvitationDestroyByFilterArgs = {
  filter: InvitationFilter;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationInvitationRestoreArgs = {
  id: Scalars['String'];
};


export type MutationInvitationUpdateArgs = {
  data: InvitationUpdateInput;
  filter?: Maybe<InvitationKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
  destroyDetached?: Maybe<Scalars['Boolean']>;
};


export type MutationInviteMembersArgs = {
  data: InviteMembersInput;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationInvokeArgs = {
  data?: Maybe<InvokeData>;
};


export type MutationOrderCreateArgs = {
  data: OrderCreateInput;
};


export type MutationOrderCreateManyArgs = {
  data: Array<Maybe<OrderCreateManyInput>>;
};


export type MutationOrderDeleteArgs = {
  data?: Maybe<OrderDeleteInput>;
  filter?: Maybe<OrderKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationOrderDeleteByFilterArgs = {
  filter: OrderFilter;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationOrderDestroyArgs = {
  filter?: Maybe<OrderKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationOrderDestroyByFilterArgs = {
  filter: OrderFilter;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationOrderRestoreArgs = {
  id: Scalars['String'];
};


export type MutationOrderUpdateArgs = {
  data: OrderUpdateInput;
  filter?: Maybe<OrderKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
  destroyDetached?: Maybe<Scalars['Boolean']>;
};


export type MutationOrderUpdateByFilterArgs = {
  data: OrderUpdateByFilterInput;
  filter?: Maybe<OrderFilter>;
};


export type MutationProductCreateArgs = {
  data: ProductCreateInput;
};


export type MutationProductCreateManyArgs = {
  data: Array<Maybe<ProductCreateManyInput>>;
};


export type MutationProductDeleteArgs = {
  data?: Maybe<ProductDeleteInput>;
  filter?: Maybe<ProductKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationProductDeleteByFilterArgs = {
  filter: ProductFilter;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationProductDestroyArgs = {
  filter?: Maybe<ProductKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationProductDestroyByFilterArgs = {
  filter: ProductFilter;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationProductRestoreArgs = {
  id: Scalars['String'];
};


export type MutationProductUpdateArgs = {
  data: ProductUpdateInput;
  filter?: Maybe<ProductKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
  destroyDetached?: Maybe<Scalars['Boolean']>;
};


export type MutationProductUpdateByFilterArgs = {
  data: ProductUpdateByFilterInput;
  filter?: Maybe<ProductFilter>;
};


export type MutationRoleCreateArgs = {
  data: RoleCreateInput;
};


export type MutationRoleCreateManyArgs = {
  data: Array<Maybe<RoleCreateManyInput>>;
};


export type MutationRoleDeleteArgs = {
  data?: Maybe<RoleDeleteInput>;
  filter?: Maybe<RoleKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationRoleDeleteByFilterArgs = {
  filter: RoleFilter;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationRoleDestroyArgs = {
  filter?: Maybe<RoleKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationRoleDestroyByFilterArgs = {
  filter: RoleFilter;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationRoleRestoreArgs = {
  id: Scalars['String'];
};


export type MutationRoleUpdateArgs = {
  data: RoleUpdateInput;
  filter?: Maybe<RoleKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
  destroyDetached?: Maybe<Scalars['Boolean']>;
};


export type MutationRoleUpdateByFilterArgs = {
  data: RoleUpdateByFilterInput;
  filter?: Maybe<RoleFilter>;
};


export type MutationSendInvitationTo8baseArgs = {
  inviteEmail: Scalars['String'];
};


export type MutationSettingsUpdateArgs = {
  data: SettingUpdateInput;
};


export type MutationTableCreateArgs = {
  data: TableCreateInput;
};


export type MutationTableDeleteArgs = {
  data: TableDeleteInput;
};


export type MutationTableUpdateArgs = {
  data: TableUpdateInput;
};


export type MutationTeamInvitationAcceptArgs = {
  data: TeamInvitationAcceptInput;
};


export type MutationTeamInvitationCancelArgs = {
  data: TeamInvitationCancelInput;
};


export type MutationTeamInvitationDeleteArgs = {
  data?: Maybe<TeamInvitationDeleteInput>;
  filter?: Maybe<TeamInvitationKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationTeamInvitationDeleteByFilterArgs = {
  filter: TeamInvitationFilter;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationTeamInvitationDestroyArgs = {
  filter?: Maybe<TeamInvitationKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationTeamInvitationDestroyByFilterArgs = {
  filter: TeamInvitationFilter;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationTeamInvitationResendArgs = {
  data: TeamInvitationResendInput;
};


export type MutationTeamInvitationRestoreArgs = {
  id: Scalars['String'];
};


export type MutationTeamMemberDeleteArgs = {
  data?: Maybe<TeamMemberDeleteInput>;
  filter?: Maybe<TeamMemberKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationTeamMemberDestroyArgs = {
  filter?: Maybe<TeamMemberKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationTeamMemberRestoreArgs = {
  id: Scalars['String'];
};


export type MutationTeamMemberUpdateArgs = {
  data: TeamMemberUpdateInput;
  filter?: Maybe<TeamMemberKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
  destroyDetached?: Maybe<Scalars['Boolean']>;
};


export type MutationTeamMemberUpdateByFilterArgs = {
  data: TeamMemberUpdateByFilterInput;
  filter?: Maybe<TeamMemberFilter>;
};


export type MutationUserChangePasswordArgs = {
  data: ChangePasswordInput;
};


export type MutationUserCreateArgs = {
  data: UserCreateInput;
};


export type MutationUserCreateManyArgs = {
  data: Array<Maybe<UserCreateManyInput>>;
};


export type MutationUserDeleteArgs = {
  data?: Maybe<UserDeleteInput>;
  filter?: Maybe<UserKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationUserDeleteByFilterArgs = {
  filter: UserFilter;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationUserDestroyArgs = {
  filter?: Maybe<UserKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationUserDestroyByFilterArgs = {
  filter: UserFilter;
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationUserLoginArgs = {
  data: UserLoginInput;
};


export type MutationUserPasswordForgotArgs = {
  data: PasswordForgotInput;
};


export type MutationUserPasswordForgotConfirmArgs = {
  data: PasswordForgotConfirmInput;
};


export type MutationUserRefreshTokenArgs = {
  data: RefreshTokenInput;
};


export type MutationUserRestoreArgs = {
  id: Scalars['String'];
};


export type MutationUserSignUpArgs = {
  user: UserCreateInput;
  authProfileId?: Maybe<Scalars['ID']>;
};


export type MutationUserSignUpResendArgs = {
  data: SignUpResendInput;
};


export type MutationUserSignUpWithPasswordArgs = {
  user: UserCreateInput;
  password: Scalars['String'];
  authProfileId?: Maybe<Scalars['ID']>;
};


export type MutationUserSignUpWithTokenArgs = {
  user: UserCreateInput;
  authProfileId?: Maybe<Scalars['ID']>;
};


export type MutationUserUpdateArgs = {
  data: UserUpdateInput;
  filter?: Maybe<UserKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
  destroyDetached?: Maybe<Scalars['Boolean']>;
};


export type MutationUserUpdateByFilterArgs = {
  data: UserUpdateByFilterInput;
  filter?: Maybe<UserFilter>;
};


export type MutationUserVerificationEmailResendArgs = {
  data: VerificationEmailResendInput;
  authProfileId?: Maybe<Scalars['ID']>;
};


export type MutationViewCreateArgs = {
  data: ViewCreateInput;
};


export type MutationViewUpdateArgs = {
  data: ViewUpdateInput;
};


export type MutationWorkspaceCreateArgs = {
  data: WorkspaceCreateMutationInput;
};


export type MutationWorkspaceCreateAsyncArgs = {
  data: WorkspaceCreateMutationInput;
};


export type MutationWorkspaceDeleteArgs = {
  data: WorkspaceDeleteMutationInput;
};


export type MutationWorkspaceLeaveArgs = {
  force?: Maybe<Scalars['Boolean']>;
};


export type MutationWorkspaceUpdateArgs = {
  data: WorkspaceUpdateMutationInput;
};


export type MutationSetProductAvailabilityArgs = {
  id: Scalars['ID'];
  status: Scalars['String'];
};

export enum MutationType {
  Create = 'create',
  Update = 'update',
  Delete = 'delete',
  Destroy = 'destroy'
}

/** Number Field Attributes */
export type NumberFieldTypeAttributes = {
  __typename?: 'NumberFieldTypeAttributes';
  format: Scalars['String'];
  precision?: Maybe<Scalars['Int']>;
  currency?: Maybe<Scalars['String']>;
  minValue?: Maybe<Scalars['Float']>;
  maxValue?: Maybe<Scalars['Float']>;
  isBigInt?: Maybe<Scalars['Boolean']>;
  autoIncrement?: Maybe<Scalars['Boolean']>;
};

/** Number Type Format Enum */
export enum NumberTypeFormatEnum {
  Number = 'NUMBER',
  Currency = 'CURRENCY',
  Percentage = 'PERCENTAGE',
  Fraction = 'FRACTION',
  Scientific = 'SCIENTIFIC'
}

export type Order = {
  __typename?: 'Order';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<User>;
  /** Product to be ordered */
  product?: Maybe<Product>;
  /** Customer making an order */
  customer?: Maybe<Customer>;
  /** Number of products ordered */
  quantity?: Maybe<Scalars['Int']>;
  /** Total order price */
  totalPrice?: Maybe<Scalars['Int']>;
  _description?: Maybe<Scalars['String']>;
};

export type Order_PermissionFilter = {
  id?: Maybe<IdPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  deletedAt?: Maybe<IntPredicate>;
  quantity?: Maybe<IntPredicate>;
  totalPrice?: Maybe<IntPredicate>;
  _fullText?: Maybe<Scalars['String']>;
  createdBy?: Maybe<User_PermissionFilter>;
  product?: Maybe<Product_PermissionFilter>;
  customer?: Maybe<Customer_PermissionFilter>;
  AND?: Maybe<Array<Order_PermissionFilter>>;
  OR?: Maybe<Array<Order_PermissionFilter>>;
};

export type Order_PermissionRelationFilter = {
  some?: Maybe<Order_PermissionFilter>;
  every?: Maybe<Order_PermissionFilter>;
  none?: Maybe<Order_PermissionFilter>;
};

/** Orders create input */
export type OrderCreateInput = {
  product?: Maybe<OrdersProductRelationInput>;
  customer?: Maybe<OrdersCustomerRelationInput>;
  /** Number of products ordered */
  quantity?: Maybe<Scalars['Int']>;
  /** Total order price */
  totalPrice?: Maybe<Scalars['Int']>;
};

/** Orders create many input */
export type OrderCreateManyInput = {
  product: OrdersProductManyRelationInput;
  customer: OrdersCustomerManyRelationInput;
  /** Number of products ordered */
  quantity?: Maybe<Scalars['Int']>;
  /** Total order price */
  totalPrice?: Maybe<Scalars['Int']>;
};

/** Orders delete input */
export type OrderDeleteInput = {
  id?: Maybe<Scalars['ID']>;
  force?: Maybe<Scalars['Boolean']>;
};

/** OrderFieldsPermissions create input */
export type OrderFieldsPermissions = {
  createdAt?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Boolean']>;
  quantity?: Maybe<Scalars['Boolean']>;
  totalPrice?: Maybe<Scalars['Boolean']>;
};

export type OrderFilter = {
  id?: Maybe<IdPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  deletedAt?: Maybe<IntPredicate>;
  quantity?: Maybe<IntPredicate>;
  totalPrice?: Maybe<IntPredicate>;
  _fullText?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserFilter>;
  product?: Maybe<ProductFilter>;
  customer?: Maybe<CustomerFilter>;
  AND?: Maybe<Array<OrderFilter>>;
  OR?: Maybe<Array<OrderFilter>>;
};

export type OrderGroupBy = {
  query: OrderGroupByQuery;
  sort?: Maybe<Array<GroupBySort>>;
  having?: Maybe<Having>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type OrderGroupByQuery = {
  id?: Maybe<Array<GroupByField>>;
  createdAt?: Maybe<Array<GroupByField>>;
  updatedAt?: Maybe<Array<GroupByField>>;
  quantity?: Maybe<Array<GroupByField>>;
  totalPrice?: Maybe<Array<GroupByField>>;
  createdBy?: Maybe<UserGroupByQuery>;
  product?: Maybe<ProductGroupByQuery>;
  customer?: Maybe<CustomerGroupByQuery>;
  _group?: Maybe<Array<GroupIdentifiersGroupByField>>;
};

export type OrderKeyFilter = {
  id?: Maybe<Scalars['ID']>;
};

/** OrderListResponse output */
export type OrderListResponse = {
  __typename?: 'OrderListResponse';
  /** List items */
  items: Array<Order>;
  /** List items count */
  count: Scalars['Int'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
};

/** OrderManyResponse output */
export type OrderManyResponse = {
  __typename?: 'OrderManyResponse';
  /** List items */
  items: Array<Order>;
  /** List items count */
  count: Scalars['Int'];
};

/** No longer supported. Use `sort` instead. */
export enum OrderOrderBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  QuantityAsc = 'quantity_ASC',
  QuantityDesc = 'quantity_DESC',
  TotalPriceAsc = 'totalPrice_ASC',
  TotalPriceDesc = 'totalPrice_DESC'
}

/** Orders subscription payload */
export type OrderPayload = {
  __typename?: 'OrderPayload';
  mutation: MutationType;
  node?: Maybe<Order>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
  previousValues?: Maybe<Order>;
};

export type OrderRelationFilter = {
  some?: Maybe<OrderFilter>;
  every?: Maybe<OrderFilter>;
  none?: Maybe<OrderFilter>;
};

/** Customers create input from orders */
export type Orders_CustomerCreateInput = {
  user?: Maybe<CustomersUserRelationInput>;
  orders?: Maybe<CustomersOrdersRelationInput>;
};

/** Customers update input from orders */
export type Orders_CustomerUpdateInput = {
  user?: Maybe<CustomersUserUpdateRelationInput>;
  orders?: Maybe<CustomersOrdersUpdateRelationInput>;
};

/** Products create input from orders */
export type Orders_ProductCreateInput = {
  /** Product name */
  title: Scalars['String'];
  /** Quantity of the products available */
  quantity?: Maybe<Scalars['Int']>;
  orders?: Maybe<ProductsOrdersRelationInput>;
  image?: Maybe<ProductsImageRelationInput>;
  /** Product price */
  price?: Maybe<Scalars['Int']>;
  /** Product availability */
  status?: Maybe<Scalars['String']>;
};

/** Products update input from orders */
export type Orders_ProductUpdateInput = {
  /** Product name */
  title?: Maybe<Scalars['String']>;
  /** Quantity of the products available */
  quantity?: Maybe<Scalars['Int']>;
  orders?: Maybe<ProductsOrdersUpdateRelationInput>;
  image?: Maybe<ProductsImageUpdateRelationInput>;
  /** Product price */
  price?: Maybe<Scalars['Int']>;
  /** Product availability */
  status?: Maybe<Scalars['String']>;
};

/** Orders relation input */
export type OrdersCustomerManyRelationInput = {
  connect?: Maybe<CustomerKeyFilter>;
};

/** Orders relation input */
export type OrdersCustomerRelationInput = {
  connect?: Maybe<CustomerKeyFilter>;
  create?: Maybe<Orders_CustomerCreateInput>;
};

/** Orders relation input */
export type OrdersCustomerUpdateRelationInput = {
  connect?: Maybe<CustomerKeyFilter>;
  disconnect?: Maybe<CustomerKeyFilter>;
  reconnect?: Maybe<CustomerKeyFilter>;
  create?: Maybe<Orders_CustomerCreateInput>;
  update?: Maybe<Orders_CustomerUpdateInput>;
};

export type OrderSort = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  deletedAt?: Maybe<SortOrder>;
  quantity?: Maybe<SortOrder>;
  totalPrice?: Maybe<SortOrder>;
  createdBy?: Maybe<UserSort>;
  product?: Maybe<ProductSort>;
  customer?: Maybe<CustomerSort>;
};

/** Orders relation input */
export type OrdersProductManyRelationInput = {
  connect?: Maybe<ProductKeyFilter>;
};

/** Orders relation input */
export type OrdersProductRelationInput = {
  connect?: Maybe<ProductKeyFilter>;
  create?: Maybe<Orders_ProductCreateInput>;
};

/** Orders relation input */
export type OrdersProductUpdateRelationInput = {
  connect?: Maybe<ProductKeyFilter>;
  disconnect?: Maybe<ProductKeyFilter>;
  reconnect?: Maybe<ProductKeyFilter>;
  create?: Maybe<Orders_ProductCreateInput>;
  update?: Maybe<Orders_ProductUpdateInput>;
};

/** Orders subscription filter */
export type OrderSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<OrderFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

/** Orders update input */
export type OrderUpdateByFilterInput = {
  quantity?: Maybe<Array<Maybe<UpdateByFilterIntInput>>>;
  totalPrice?: Maybe<Array<Maybe<UpdateByFilterIntInput>>>;
};

/** Orders update input */
export type OrderUpdateInput = {
  id?: Maybe<Scalars['ID']>;
  product?: Maybe<OrdersProductUpdateRelationInput>;
  customer?: Maybe<OrdersCustomerUpdateRelationInput>;
  /** Number of products ordered */
  quantity?: Maybe<Scalars['Int']>;
  /** Total order price */
  totalPrice?: Maybe<Scalars['Int']>;
};

export type OrganizationUserInvitationResponse = {
  __typename?: 'OrganizationUserInvitationResponse';
  invitationId: Scalars['String'];
};

/** PasswordForgotConfirmInput */
export type PasswordForgotConfirmInput = {
  email: Scalars['String'];
  code: Scalars['String'];
  newPassword: Scalars['String'];
  authProfileId: Scalars['ID'];
};

/** PasswordForgotInput */
export type PasswordForgotInput = {
  email: Scalars['String'];
  authProfileId: Scalars['ID'];
};

export type PatternFunctionArguments = {
  pattern: Scalars['String'];
  escape?: Maybe<Scalars['String']>;
};

export type Permission = {
  __typename?: 'Permission';
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  appId?: Maybe<Scalars['String']>;
  resourceType?: Maybe<Scalars['String']>;
  resource?: Maybe<Scalars['String']>;
  permission?: Maybe<Scalars['JSON']>;
  role?: Maybe<Role>;
  _description?: Maybe<Scalars['String']>;
};

export type Permission_PermissionFilter = {
  createdAt?: Maybe<DateTimePredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  deletedAt?: Maybe<IntPredicate>;
  appId?: Maybe<StringPredicate>;
  resourceType?: Maybe<StringPredicate>;
  resource?: Maybe<StringPredicate>;
  _fullText?: Maybe<Scalars['String']>;
  createdBy?: Maybe<User_PermissionFilter>;
  role?: Maybe<Role_PermissionFilter>;
  AND?: Maybe<Array<Permission_PermissionFilter>>;
  OR?: Maybe<Array<Permission_PermissionFilter>>;
};

export type Permission_PermissionRelationFilter = {
  some?: Maybe<Permission_PermissionFilter>;
  every?: Maybe<Permission_PermissionFilter>;
  none?: Maybe<Permission_PermissionFilter>;
};

export type PermissionFilter = {
  createdAt?: Maybe<DateTimePredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  deletedAt?: Maybe<IntPredicate>;
  appId?: Maybe<StringPredicate>;
  resourceType?: Maybe<StringPredicate>;
  resource?: Maybe<StringPredicate>;
  _fullText?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserFilter>;
  role?: Maybe<RoleFilter>;
  AND?: Maybe<Array<PermissionFilter>>;
  OR?: Maybe<Array<PermissionFilter>>;
};

export type PermissionGroupByQuery = {
  createdAt?: Maybe<Array<GroupByField>>;
  updatedAt?: Maybe<Array<GroupByField>>;
  appId?: Maybe<Array<GroupByField>>;
  resourceType?: Maybe<Array<GroupByField>>;
  resource?: Maybe<Array<GroupByField>>;
  permission?: Maybe<Array<GroupByField>>;
  createdBy?: Maybe<UserGroupByQuery>;
  role?: Maybe<RoleGroupByQuery>;
  _group?: Maybe<Array<GroupIdentifiersGroupByField>>;
};

/** Permission Filter */
export type PermissionInputFilter = {
  resourceType?: Maybe<PermissionResourceTypeEnum>;
  action?: Maybe<Scalars['String']>;
  resource?: Maybe<Scalars['String']>;
  applicationName?: Maybe<Scalars['String']>;
};

/** PermissionListResponse output */
export type PermissionListResponse = {
  __typename?: 'PermissionListResponse';
  /** List items */
  items: Array<Permission>;
  /** List items count */
  count: Scalars['Int'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
};

/** Permissions subscription payload */
export type PermissionPayload = {
  __typename?: 'PermissionPayload';
  mutation: MutationType;
  node?: Maybe<Permission>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
  previousValues?: Maybe<Permission>;
};

export type PermissionRelationFilter = {
  some?: Maybe<PermissionFilter>;
  every?: Maybe<PermissionFilter>;
  none?: Maybe<PermissionFilter>;
};

export enum PermissionResourceTypeEnum {
  Data = 'data',
  Custom = 'custom'
}

/** custom permissions input */
export type PermissionsCustom = {
  data?: Maybe<PermissionsCustomData>;
  logic?: Maybe<PermissionsCustomLogic>;
  api?: Maybe<PermissionsCustomApi>;
  users?: Maybe<PermissionsCustomUsers>;
  settings?: Maybe<PermissionsCustomSettings>;
};

export type PermissionsCustomApi = {
  setProductAvailability?: Maybe<PermissionsCustomApiResolver>;
};

export type PermissionsCustomApiResolver = {
  allow: Scalars['Boolean'];
};

export type PermissionsCustomData = {
  schemaManagement?: Maybe<PermissionsCustomDataSchemaManagement>;
  viewerAccess?: Maybe<PermissionsCustomDataViewerAccess>;
};

export type PermissionsCustomDataSchemaManagement = {
  allow: Scalars['Boolean'];
};

export type PermissionsCustomDataViewerAccess = {
  allow: Scalars['Boolean'];
};

export type PermissionsCustomLogic = {
  view?: Maybe<PermissionsCustomLogicView>;
  deploy?: Maybe<PermissionsCustomLogicDeploy>;
  invoke?: Maybe<PermissionsCustomLogicInvoke>;
  logs?: Maybe<PermissionsCustomLogicLogs>;
};

export type PermissionsCustomLogicDeploy = {
  allow: Scalars['Boolean'];
};

export type PermissionsCustomLogicInvoke = {
  allow: Scalars['Boolean'];
};

export type PermissionsCustomLogicLogs = {
  allow: Scalars['Boolean'];
};

export type PermissionsCustomLogicView = {
  allow: Scalars['Boolean'];
};

export type PermissionsCustomSettings = {
  workspaceAdministration?: Maybe<PermissionsCustomSettingsWorkspaceAdministration>;
};

export type PermissionsCustomSettingsWorkspaceAdministration = {
  allow: Scalars['Boolean'];
};

export type PermissionsCustomUsers = {
  teamAdministration?: Maybe<PermissionsCustomUsersTeamAdministration>;
};

export type PermissionsCustomUsersTeamAdministration = {
  allow: Scalars['Boolean'];
};

/** Schema tables permissions input */
export type PermissionsData = {
  Users?: Maybe<PermissionsDataUsers>;
  Files?: Maybe<PermissionsDataFiles>;
  Roles?: Maybe<PermissionsDataRoles>;
  Products?: Maybe<PermissionsDataProducts>;
  Customers?: Maybe<PermissionsDataCustomers>;
  Orders?: Maybe<PermissionsDataOrders>;
  Invitations?: Maybe<PermissionsDataInvitations>;
};

export type PermissionsDataCustomers = {
  create?: Maybe<PermissionsDataCustomersCreate>;
  read?: Maybe<PermissionsDataCustomersRead>;
  update?: Maybe<PermissionsDataCustomersUpdate>;
  delete?: Maybe<PermissionsDataCustomersDelete>;
  destroy?: Maybe<PermissionsDataCustomersDestroy>;
};

export type PermissionsDataCustomersCreate = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataCustomersDelete = {
  allow: Scalars['Boolean'];
  restore?: Maybe<Scalars['Boolean']>;
  review?: Maybe<Scalars['Boolean']>;
};

export type PermissionsDataCustomersDestroy = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataCustomersRead = {
  allow: Scalars['Boolean'];
  filter?: Maybe<Customer_PermissionFilter>;
  fields?: Maybe<CustomerFieldsPermissions>;
};

export type PermissionsDataCustomersUpdate = {
  allow: Scalars['Boolean'];
  filter?: Maybe<Customer_PermissionFilter>;
  fields?: Maybe<CustomerFieldsPermissions>;
};

export type PermissionsDataFiles = {
  create?: Maybe<PermissionsDataFilesCreate>;
  read?: Maybe<PermissionsDataFilesRead>;
  update?: Maybe<PermissionsDataFilesUpdate>;
  delete?: Maybe<PermissionsDataFilesDelete>;
  destroy?: Maybe<PermissionsDataFilesDestroy>;
};

export type PermissionsDataFilesCreate = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataFilesDelete = {
  allow: Scalars['Boolean'];
  restore?: Maybe<Scalars['Boolean']>;
  review?: Maybe<Scalars['Boolean']>;
};

export type PermissionsDataFilesDestroy = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataFilesRead = {
  allow: Scalars['Boolean'];
  filter?: Maybe<File_PermissionFilter>;
  fields?: Maybe<FileFieldsPermissions>;
};

export type PermissionsDataFilesUpdate = {
  allow: Scalars['Boolean'];
  filter?: Maybe<File_PermissionFilter>;
  fields?: Maybe<FileFieldsPermissions>;
};

export type PermissionsDataInvitations = {
  create?: Maybe<PermissionsDataInvitationsCreate>;
  read?: Maybe<PermissionsDataInvitationsRead>;
  update?: Maybe<PermissionsDataInvitationsUpdate>;
  delete?: Maybe<PermissionsDataInvitationsDelete>;
  destroy?: Maybe<PermissionsDataInvitationsDestroy>;
};

export type PermissionsDataInvitationsCreate = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataInvitationsDelete = {
  allow: Scalars['Boolean'];
  restore?: Maybe<Scalars['Boolean']>;
  review?: Maybe<Scalars['Boolean']>;
};

export type PermissionsDataInvitationsDestroy = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataInvitationsRead = {
  allow: Scalars['Boolean'];
  filter?: Maybe<Invitation_PermissionFilter>;
  fields?: Maybe<InvitationFieldsPermissions>;
};

export type PermissionsDataInvitationsUpdate = {
  allow: Scalars['Boolean'];
  filter?: Maybe<Invitation_PermissionFilter>;
  fields?: Maybe<InvitationFieldsPermissions>;
};

export type PermissionsDataOrders = {
  create?: Maybe<PermissionsDataOrdersCreate>;
  read?: Maybe<PermissionsDataOrdersRead>;
  update?: Maybe<PermissionsDataOrdersUpdate>;
  delete?: Maybe<PermissionsDataOrdersDelete>;
  destroy?: Maybe<PermissionsDataOrdersDestroy>;
};

export type PermissionsDataOrdersCreate = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataOrdersDelete = {
  allow: Scalars['Boolean'];
  restore?: Maybe<Scalars['Boolean']>;
  review?: Maybe<Scalars['Boolean']>;
};

export type PermissionsDataOrdersDestroy = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataOrdersRead = {
  allow: Scalars['Boolean'];
  filter?: Maybe<Order_PermissionFilter>;
  fields?: Maybe<OrderFieldsPermissions>;
};

export type PermissionsDataOrdersUpdate = {
  allow: Scalars['Boolean'];
  filter?: Maybe<Order_PermissionFilter>;
  fields?: Maybe<OrderFieldsPermissions>;
};

export type PermissionsDataProducts = {
  create?: Maybe<PermissionsDataProductsCreate>;
  read?: Maybe<PermissionsDataProductsRead>;
  update?: Maybe<PermissionsDataProductsUpdate>;
  delete?: Maybe<PermissionsDataProductsDelete>;
  destroy?: Maybe<PermissionsDataProductsDestroy>;
};

export type PermissionsDataProductsCreate = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataProductsDelete = {
  allow: Scalars['Boolean'];
  restore?: Maybe<Scalars['Boolean']>;
  review?: Maybe<Scalars['Boolean']>;
};

export type PermissionsDataProductsDestroy = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataProductsRead = {
  allow: Scalars['Boolean'];
  filter?: Maybe<Product_PermissionFilter>;
  fields?: Maybe<ProductFieldsPermissions>;
};

export type PermissionsDataProductsUpdate = {
  allow: Scalars['Boolean'];
  filter?: Maybe<Product_PermissionFilter>;
  fields?: Maybe<ProductFieldsPermissions>;
};

export type PermissionsDataRoles = {
  create?: Maybe<PermissionsDataRolesCreate>;
  read?: Maybe<PermissionsDataRolesRead>;
  update?: Maybe<PermissionsDataRolesUpdate>;
  delete?: Maybe<PermissionsDataRolesDelete>;
  destroy?: Maybe<PermissionsDataRolesDestroy>;
};

export type PermissionsDataRolesCreate = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataRolesDelete = {
  allow: Scalars['Boolean'];
  restore?: Maybe<Scalars['Boolean']>;
  review?: Maybe<Scalars['Boolean']>;
};

export type PermissionsDataRolesDestroy = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataRolesRead = {
  allow: Scalars['Boolean'];
  filter?: Maybe<Role_PermissionFilter>;
  fields?: Maybe<RoleFieldsPermissions>;
};

export type PermissionsDataRolesUpdate = {
  allow: Scalars['Boolean'];
  filter?: Maybe<Role_PermissionFilter>;
  fields?: Maybe<RoleFieldsPermissions>;
};

export type PermissionsDataUsers = {
  create?: Maybe<PermissionsDataUsersCreate>;
  read?: Maybe<PermissionsDataUsersRead>;
  update?: Maybe<PermissionsDataUsersUpdate>;
  delete?: Maybe<PermissionsDataUsersDelete>;
  destroy?: Maybe<PermissionsDataUsersDestroy>;
};

export type PermissionsDataUsersCreate = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataUsersDelete = {
  allow: Scalars['Boolean'];
  restore?: Maybe<Scalars['Boolean']>;
  review?: Maybe<Scalars['Boolean']>;
};

export type PermissionsDataUsersDestroy = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataUsersRead = {
  allow: Scalars['Boolean'];
  filter?: Maybe<User_PermissionFilter>;
  fields?: Maybe<UserFieldsPermissions>;
};

export type PermissionsDataUsersUpdate = {
  allow: Scalars['Boolean'];
  filter?: Maybe<User_PermissionFilter>;
  fields?: Maybe<UserFieldsPermissions>;
};

/** PermissionsInput create input */
export type PermissionsInput = {
  data?: Maybe<PermissionsData>;
  custom?: Maybe<PermissionsCustom>;
};

/** Permissions subscription filter */
export type PermissionSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<PermissionFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['ID'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<User>;
  /** Product name */
  title: Scalars['String'];
  /** Quantity of the products available */
  quantity: Scalars['Int'];
  orders?: Maybe<OrderListResponse>;
  /** Picture with the product */
  image: Maybe<File>;
  /** Product price */
  price: Scalars['Int'];
  /** Product availability */
  status: Scalars['String'];
  _description?: Maybe<Scalars['String']>;
};


export type ProductOrdersArgs = {
  filter?: Maybe<OrderFilter>;
  orderBy?: Maybe<Array<Maybe<OrderOrderBy>>>;
  sort?: Maybe<Array<OrderSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<OrderGroupBy>;
};

/** Orders create input from product */
export type Product_OrderCreateInput = {
  product?: Maybe<OrdersProductRelationInput>;
  customer?: Maybe<OrdersCustomerRelationInput>;
  /** Number of products ordered */
  quantity?: Maybe<Scalars['Int']>;
  /** Total order price */
  totalPrice?: Maybe<Scalars['Int']>;
};

/** Orders update input from product */
export type Product_OrderUpdateInput = {
  filter?: Maybe<OrderKeyFilter>;
  data: OrderUpdateInput;
};

export type Product_PermissionFilter = {
  id?: Maybe<IdPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  deletedAt?: Maybe<IntPredicate>;
  title?: Maybe<StringPredicate>;
  quantity?: Maybe<IntPredicate>;
  price?: Maybe<IntPredicate>;
  status?: Maybe<StringPredicate>;
  _fullText?: Maybe<Scalars['String']>;
  createdBy?: Maybe<User_PermissionFilter>;
  orders?: Maybe<Order_PermissionRelationFilter>;
  image?: Maybe<File_PermissionFilter>;
  AND?: Maybe<Array<Product_PermissionFilter>>;
  OR?: Maybe<Array<Product_PermissionFilter>>;
};

export type Product_PermissionRelationFilter = {
  some?: Maybe<Product_PermissionFilter>;
  every?: Maybe<Product_PermissionFilter>;
  none?: Maybe<Product_PermissionFilter>;
};

/** Products create input */
export type ProductCreateInput = {
  /** Product name */
  title: Scalars['String'];
  /** Quantity of the products available */
  quantity?: Maybe<Scalars['Int']>;
  orders?: Maybe<ProductsOrdersRelationInput>;
  image?: Maybe<ProductsImageRelationInput>;
  /** Product price */
  price?: Maybe<Scalars['Int']>;
  /** Product availability */
  status?: Maybe<Scalars['String']>;
};

/** Products create many input */
export type ProductCreateManyInput = {
  /** Product name */
  title: Scalars['String'];
  /** Quantity of the products available */
  quantity?: Maybe<Scalars['Int']>;
  orders?: Maybe<ProductsOrdersManyRelationInput>;
  image?: Maybe<ProductsImageManyRelationInput>;
  /** Product price */
  price?: Maybe<Scalars['Int']>;
  /** Product availability */
  status?: Maybe<Scalars['String']>;
};

/** Products delete input */
export type ProductDeleteInput = {
  id?: Maybe<Scalars['ID']>;
  force?: Maybe<Scalars['Boolean']>;
};

/** ProductFieldsPermissions create input */
export type ProductFieldsPermissions = {
  createdAt?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['Boolean']>;
  quantity?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type ProductFilter = {
  id?: Maybe<IdPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  deletedAt?: Maybe<IntPredicate>;
  title?: Maybe<StringPredicate>;
  quantity?: Maybe<IntPredicate>;
  price?: Maybe<IntPredicate>;
  status?: Maybe<StringPredicate>;
  _fullText?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserFilter>;
  orders?: Maybe<OrderRelationFilter>;
  image?: Maybe<FileFilter>;
  AND?: Maybe<Array<ProductFilter>>;
  OR?: Maybe<Array<ProductFilter>>;
};

export type ProductGroupBy = {
  query: ProductGroupByQuery;
  sort?: Maybe<Array<GroupBySort>>;
  having?: Maybe<Having>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type ProductGroupByQuery = {
  id?: Maybe<Array<GroupByField>>;
  createdAt?: Maybe<Array<GroupByField>>;
  updatedAt?: Maybe<Array<GroupByField>>;
  title?: Maybe<Array<GroupByField>>;
  quantity?: Maybe<Array<GroupByField>>;
  price?: Maybe<Array<GroupByField>>;
  status?: Maybe<Array<GroupByField>>;
  createdBy?: Maybe<UserGroupByQuery>;
  orders?: Maybe<OrderGroupByQuery>;
  image?: Maybe<FileGroupByQuery>;
  _group?: Maybe<Array<GroupIdentifiersGroupByField>>;
};

export type ProductKeyFilter = {
  id?: Maybe<Scalars['ID']>;
};

/** ProductListResponse output */
export type ProductListResponse = {
  __typename?: 'ProductListResponse';
  /** List items */
  items: Array<Product>;
  /** List items count */
  count: Scalars['Int'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
};

/** ProductManyResponse output */
export type ProductManyResponse = {
  __typename?: 'ProductManyResponse';
  /** List items */
  items: Array<Product>;
  /** List items count */
  count: Scalars['Int'];
};

/** No longer supported. Use `sort` instead. */
export enum ProductOrderBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  QuantityAsc = 'quantity_ASC',
  QuantityDesc = 'quantity_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC'
}

/** Products subscription payload */
export type ProductPayload = {
  __typename?: 'ProductPayload';
  mutation: MutationType;
  node?: Maybe<Product>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
  previousValues?: Maybe<Product>;
};

export type ProductRelationFilter = {
  some?: Maybe<ProductFilter>;
  every?: Maybe<ProductFilter>;
  none?: Maybe<ProductFilter>;
};

/** Files create input from products_image */
export type Products_Image_FileCreateInput = {
  fileId?: Maybe<Scalars['String']>;
  public?: Maybe<Scalars['Boolean']>;
  filename?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
  mods?: Maybe<Scalars['JSON']>;
  users_avatar?: Maybe<FilesUsers_AvatarRelationInput>;
  teamMembers_avatar?: Maybe<FilesTeamMembers_AvatarRelationInput>;
  products_image?: Maybe<FilesProducts_ImageRelationInput>;
};

/** Files update input from products_image */
export type Products_Image_FileUpdateInput = {
  fileId?: Maybe<Scalars['String']>;
  public?: Maybe<Scalars['Boolean']>;
  filename?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
  mods?: Maybe<Scalars['JSON']>;
  users_avatar?: Maybe<FilesUsers_AvatarUpdateRelationInput>;
  teamMembers_avatar?: Maybe<FilesTeamMembers_AvatarUpdateRelationInput>;
  products_image?: Maybe<FilesProducts_ImageUpdateRelationInput>;
};

/** Products relation input */
export type ProductsImageManyRelationInput = {
  connect?: Maybe<FileKeyFilter>;
};

/** Products relation input */
export type ProductsImageRelationInput = {
  connect?: Maybe<FileKeyFilter>;
  create?: Maybe<Products_Image_FileCreateInput>;
};

/** Products relation input */
export type ProductsImageUpdateRelationInput = {
  connect?: Maybe<FileKeyFilter>;
  disconnect?: Maybe<FileKeyFilter>;
  reconnect?: Maybe<FileKeyFilter>;
  create?: Maybe<Products_Image_FileCreateInput>;
  update?: Maybe<Products_Image_FileUpdateInput>;
};

/** Products relation input */
export type ProductsOrdersManyRelationInput = {
  connect?: Maybe<Array<OrderKeyFilter>>;
};

/** Products relation input */
export type ProductsOrdersRelationInput = {
  connect?: Maybe<Array<OrderKeyFilter>>;
  create?: Maybe<Array<Maybe<Product_OrderCreateInput>>>;
};

/** Products relation input */
export type ProductsOrdersUpdateRelationInput = {
  connect?: Maybe<Array<OrderKeyFilter>>;
  disconnect?: Maybe<Array<OrderKeyFilter>>;
  reconnect?: Maybe<Array<OrderKeyFilter>>;
  create?: Maybe<Array<Maybe<Product_OrderCreateInput>>>;
  update?: Maybe<Array<Maybe<Product_OrderUpdateInput>>>;
};

export type ProductSort = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  deletedAt?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  quantity?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
  createdBy?: Maybe<UserSort>;
  image?: Maybe<FileSort>;
};

/** Products subscription filter */
export type ProductSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<ProductFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

/** Products update input */
export type ProductUpdateByFilterInput = {
  title?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  quantity?: Maybe<Array<Maybe<UpdateByFilterIntInput>>>;
  price?: Maybe<Array<Maybe<UpdateByFilterIntInput>>>;
  status?: Maybe<Array<Maybe<UpdateByFilterStringSwitchInput>>>;
};

/** Products update input */
export type ProductUpdateInput = {
  id?: Maybe<Scalars['ID']>;
  /** Product name */
  title?: Maybe<Scalars['String']>;
  /** Quantity of the products available */
  quantity?: Maybe<Scalars['Int']>;
  orders?: Maybe<ProductsOrdersUpdateRelationInput>;
  image?: Maybe<ProductsImageUpdateRelationInput>;
  /** Product price */
  price?: Maybe<Scalars['Int']>;
  /** Product availability */
  status?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  apiToken?: Maybe<ApiToken>;
  apiTokensList: ApiTokenListResponse;
  /** @deprecated No longer supported. Use `system.application` instead. */
  application?: Maybe<Application>;
  /** @deprecated No longer supported. Use `system.applicationsList` instead. */
  applicationsList?: Maybe<ApplicationListResponse>;
  asyncSessionStatus?: Maybe<AsyncSessionStatusResponse>;
  authenticationProfile?: Maybe<AuthenticationProfile>;
  authenticationProfilesList: AuthenticationProfileListResponse;
  authenticationSettings?: Maybe<AuthenticationSetting>;
  /** @deprecated No longer supported. Use `system.billingCurrentPlan` instead. */
  billingCurrentPlan?: Maybe<BillingCurrentPlanResponse>;
  /** @deprecated No longer supported. Use `system.billingDetails` instead. */
  billingDetails?: Maybe<BillingDetailsResponse>;
  /** @deprecated No longer supported. Use `system.billingInvoicesList` instead. */
  billingInvoicesList: BillingInvoicesListResponse;
  /** @deprecated No longer supported. Use `system.billingMetricUsageQuotasList` instead. */
  billingMetricUsageQuotasList: BillingMetricUsageQuotasListResponse;
  /** @deprecated No longer supported. Use `system.billingMetricUsagesList` instead. */
  billingMetricUsagesList: BillingMetricUsagesListResponse;
  companyName?: Maybe<Scalars['String']>;
  customer?: Maybe<Customer>;
  customersList: CustomerListResponse;
  /** @deprecated No longer supported. Use `system.deployStatus` instead. */
  deployStatus: DeployStatusResult;
  environmentVariable?: Maybe<EnvironmentVariable>;
  environmentVariablesList: EnvironmentVariableListResponse;
  file?: Maybe<File>;
  fileUploadInfo?: Maybe<FileUploadInfoResponse>;
  filesList: FileListResponse;
  /** @deprecated No longer supported. Use `system.functionsList` instead. */
  functionsList?: Maybe<FunctionListResponse>;
  getWorkspaceTransferInfo?: Maybe<WorkspaceTransferItem>;
  invitation?: Maybe<Invitation>;
  invitationsList: InvitationListResponse;
  /** @deprecated No longer supported. Use `system.logsList` instead. */
  logs?: Maybe<Array<Maybe<Scalars['String']>>>;
  order?: Maybe<Order>;
  ordersList: OrderListResponse;
  product?: Maybe<Product>;
  productsList: ProductListResponse;
  role?: Maybe<Role>;
  rolesList: RoleListResponse;
  settings?: Maybe<Setting>;
  system?: Maybe<SystemQuery>;
  /** @deprecated No longer supported. Use `system.table` instead. */
  table?: Maybe<Table>;
  /** @deprecated No longer supported. Use `system.tableField` instead. */
  tableField?: Maybe<TableField>;
  /** @deprecated No longer supported. Use `system.tablesList` instead. */
  tablesList: TableListResponse;
  teamInvitationDetails?: Maybe<TeamInvitationDetails>;
  teamInvitationsDetailsList?: Maybe<TeamInvitationsDetailsList>;
  teamMember?: Maybe<TeamMember>;
  teamMembersList: TeamMemberListResponse;
  user?: Maybe<User>;
  userBillingConfiguration: UserBillingConfigurationResponse;
  userInvitationsList?: Maybe<UserInvitationList>;
  usersList: UserListResponse;
  /** @deprecated No longer supported. Use `system.workspacesList` instead. */
  workspacesList?: Maybe<WorkspaceListResponse>;
};


export type QueryApiTokenArgs = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};


export type QueryApiTokensListArgs = {
  filter?: Maybe<ApiTokenFilter>;
  orderBy?: Maybe<Array<Maybe<ApiTokenOrderBy>>>;
  sort?: Maybe<Array<ApiTokenSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<ApiTokenGroupBy>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};


export type QueryApplicationArgs = {
  id: Scalars['String'];
};


export type QueryAsyncSessionStatusArgs = {
  sessionId: Scalars['String'];
};


export type QueryAuthenticationProfileArgs = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};


export type QueryAuthenticationProfilesListArgs = {
  filter?: Maybe<AuthenticationProfileFilter>;
  orderBy?: Maybe<Array<Maybe<AuthenticationProfileOrderBy>>>;
  sort?: Maybe<Array<AuthenticationProfileSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<AuthenticationProfileGroupBy>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};


export type QueryBillingInvoicesListArgs = {
  by?: Maybe<BillingInvoicesListFilterType>;
  limit?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type QueryBillingMetricUsagesListArgs = {
  filter?: Maybe<BillingMetricUsagesListFilter>;
};


export type QueryCustomerArgs = {
  id?: Maybe<Scalars['ID']>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};


export type QueryCustomersListArgs = {
  filter?: Maybe<CustomerFilter>;
  orderBy?: Maybe<Array<Maybe<CustomerOrderBy>>>;
  sort?: Maybe<Array<CustomerSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<CustomerGroupBy>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};


export type QueryDeployStatusArgs = {
  buildName: Scalars['String'];
};


export type QueryEnvironmentVariableArgs = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};


export type QueryEnvironmentVariablesListArgs = {
  filter?: Maybe<EnvironmentVariableFilter>;
  orderBy?: Maybe<Array<Maybe<EnvironmentVariableOrderBy>>>;
  sort?: Maybe<Array<EnvironmentVariableSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<EnvironmentVariableGroupBy>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};


export type QueryFileArgs = {
  id?: Maybe<Scalars['ID']>;
  fileId?: Maybe<Scalars['String']>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};


export type QueryFilesListArgs = {
  filter?: Maybe<FileFilter>;
  orderBy?: Maybe<Array<Maybe<FileOrderBy>>>;
  sort?: Maybe<Array<FileSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<FileGroupBy>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};


export type QueryFunctionsListArgs = {
  applicationId?: Maybe<Scalars['String']>;
  filter?: Maybe<FunctionInfoFilter>;
  orderBy?: Maybe<Array<Maybe<FunctionInfoOrderBy>>>;
};


export type QueryGetWorkspaceTransferInfoArgs = {
  workspaceId: Scalars['String'];
};


export type QueryInvitationArgs = {
  id?: Maybe<Scalars['ID']>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};


export type QueryInvitationsListArgs = {
  filter?: Maybe<InvitationFilter>;
  orderBy?: Maybe<Array<Maybe<InvitationOrderBy>>>;
  sort?: Maybe<Array<InvitationSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<InvitationGroupBy>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};


export type QueryLogsArgs = {
  functionName: Scalars['String'];
  applicationId?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  startTime?: Maybe<Scalars['DateTime']>;
  endTime?: Maybe<Scalars['DateTime']>;
};


export type QueryOrderArgs = {
  id?: Maybe<Scalars['ID']>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};


export type QueryOrdersListArgs = {
  filter?: Maybe<OrderFilter>;
  orderBy?: Maybe<Array<Maybe<OrderOrderBy>>>;
  sort?: Maybe<Array<OrderSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<OrderGroupBy>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};


export type QueryProductArgs = {
  id?: Maybe<Scalars['ID']>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};


export type QueryProductsListArgs = {
  filter?: Maybe<ProductFilter>;
  orderBy?: Maybe<Array<Maybe<ProductOrderBy>>>;
  sort?: Maybe<Array<ProductSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<ProductGroupBy>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};


export type QueryRoleArgs = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};


export type QueryRolesListArgs = {
  filter?: Maybe<RoleFilter>;
  orderBy?: Maybe<Array<Maybe<RoleOrderBy>>>;
  sort?: Maybe<Array<RoleSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<RoleGroupBy>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};


export type QueryTableArgs = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};


export type QueryTableFieldArgs = {
  id: Scalars['ID'];
};


export type QueryTablesListArgs = {
  filter?: Maybe<TableListFilter>;
};


export type QueryTeamInvitationDetailsArgs = {
  uuid: Scalars['String'];
};


export type QueryTeamMemberArgs = {
  id?: Maybe<Scalars['ID']>;
  userId?: Maybe<Scalars['ID']>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};


export type QueryTeamMembersListArgs = {
  filter?: Maybe<TeamMemberFilter>;
  orderBy?: Maybe<Array<Maybe<TeamMemberOrderBy>>>;
  sort?: Maybe<Array<TeamMemberSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<TeamMemberGroupBy>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};


export type QueryUserArgs = {
  id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};


export type QueryUsersListArgs = {
  filter?: Maybe<UserFilter>;
  orderBy?: Maybe<Array<Maybe<UserOrderBy>>>;
  sort?: Maybe<Array<UserSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<UserGroupBy>;
  withDeleted?: Maybe<Scalars['Boolean']>;
};

/** RefreshTokenInput */
export type RefreshTokenInput = {
  email?: Maybe<Scalars['String']>;
  refreshToken: Scalars['String'];
  authProfileId?: Maybe<Scalars['ID']>;
};

/** Relation */
export type Relation = {
  __typename?: 'Relation';
  refTable: Table;
  refField?: Maybe<TableField>;
  relationTableName?: Maybe<Scalars['String']>;
  relationFieldName?: Maybe<Scalars['String']>;
  refFieldName?: Maybe<Scalars['String']>;
  refFieldDisplayName?: Maybe<Scalars['String']>;
  refFieldIsList?: Maybe<Scalars['Boolean']>;
  refFieldIsRequired?: Maybe<Scalars['Boolean']>;
};

/** Relation Create Input */
export type RelationCreateInput = {
  refTableId: Scalars['ID'];
  refFieldName?: Maybe<Scalars['String']>;
  refFieldDisplayName?: Maybe<Scalars['String']>;
  refFieldIsList: Scalars['Boolean'];
  refFieldIsRequired: Scalars['Boolean'];
};

/** Relation Update Input */
export type RelationUpdateInput = {
  refTableId?: Maybe<Scalars['ID']>;
  refFieldName?: Maybe<Scalars['String']>;
  refFieldDisplayName?: Maybe<Scalars['String']>;
  refFieldIsList?: Maybe<Scalars['Boolean']>;
  refFieldIsRequired?: Maybe<Scalars['Boolean']>;
};

/** Relative Date Predicate Operation Enum */
export enum RelativePredicateOpEnum {
  Add = 'ADD',
  Sub = 'SUB'
}

/** Relative Date Predicate Unit Enum */
export enum RelativePredicateUnitEnum {
  Microsecond = 'MICROSECOND',
  Second = 'SECOND',
  Minute = 'MINUTE',
  Hour = 'HOUR',
  Day = 'DAY',
  Week = 'WEEK',
  Month = 'MONTH',
  Quarter = 'QUARTER',
  Year = 'YEAR',
  SecondMicrosecond = 'SECOND_MICROSECOND',
  MinuteMicrosecond = 'MINUTE_MICROSECOND',
  MinuteSecond = 'MINUTE_SECOND',
  HourMicrosecond = 'HOUR_MICROSECOND',
  HourSecond = 'HOUR_SECOND',
  HourMinute = 'HOUR_MINUTE',
  DayMicrosecond = 'DAY_MICROSECOND',
  DaySecond = 'DAY_SECOND',
  DayMinute = 'DAY_MINUTE',
  DayHour = 'DAY_HOUR',
  YearMonth = 'YEAR_MONTH'
}

export type ReplaceFunctionArguments = {
  from: Scalars['String'];
  to: Scalars['String'];
};

export type Role = {
  __typename?: 'Role';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<User>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  users?: Maybe<UserListResponse>;
  apiTokens?: Maybe<ApiTokenListResponse>;
  authenticationProfiles?: Maybe<AuthenticationProfileListResponse>;
  teamMembers?: Maybe<TeamMemberListResponse>;
  permissions?: Maybe<PermissionListResponse>;
  _description?: Maybe<Scalars['String']>;
};


export type RoleUsersArgs = {
  filter?: Maybe<UserFilter>;
  orderBy?: Maybe<Array<Maybe<UserOrderBy>>>;
  sort?: Maybe<Array<UserSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<UserGroupBy>;
};


export type RoleApiTokensArgs = {
  filter?: Maybe<ApiTokenFilter>;
  orderBy?: Maybe<Array<Maybe<ApiTokenOrderBy>>>;
  sort?: Maybe<Array<ApiTokenSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<ApiTokenGroupBy>;
};


export type RoleAuthenticationProfilesArgs = {
  filter?: Maybe<AuthenticationProfileFilter>;
  orderBy?: Maybe<Array<Maybe<AuthenticationProfileOrderBy>>>;
  sort?: Maybe<Array<AuthenticationProfileSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<AuthenticationProfileGroupBy>;
};


export type RoleTeamMembersArgs = {
  filter?: Maybe<TeamMemberFilter>;
  orderBy?: Maybe<Array<Maybe<TeamMemberOrderBy>>>;
  sort?: Maybe<Array<TeamMemberSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<TeamMemberGroupBy>;
};


export type RolePermissionsArgs = {
  filter?: Maybe<PermissionInputFilter>;
};

export type Role_PermissionFilter = {
  id?: Maybe<IdPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  deletedAt?: Maybe<IntPredicate>;
  name?: Maybe<StringPredicate>;
  description?: Maybe<StringPredicate>;
  _fullText?: Maybe<Scalars['String']>;
  createdBy?: Maybe<User_PermissionFilter>;
  users?: Maybe<User_PermissionRelationFilter>;
  permissions?: Maybe<Permission_PermissionRelationFilter>;
  apiTokens?: Maybe<ApiToken_PermissionRelationFilter>;
  authenticationProfiles?: Maybe<AuthenticationProfile_PermissionRelationFilter>;
  teamMembers?: Maybe<TeamMember_PermissionRelationFilter>;
  AND?: Maybe<Array<Role_PermissionFilter>>;
  OR?: Maybe<Array<Role_PermissionFilter>>;
};

export type Role_PermissionRelationFilter = {
  some?: Maybe<Role_PermissionFilter>;
  every?: Maybe<Role_PermissionFilter>;
  none?: Maybe<Role_PermissionFilter>;
};

/** Roles create input */
export type RoleCreateInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  users?: Maybe<RolesUsersRelationInput>;
  permissions?: Maybe<PermissionsInput>;
  apiTokens?: Maybe<RolesApiTokensRelationInput>;
  authenticationProfiles?: Maybe<RolesAuthenticationProfilesRelationInput>;
  teamMembers?: Maybe<RolesTeamMembersRelationInput>;
};

/** Roles create many input */
export type RoleCreateManyInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  users?: Maybe<RolesUsersManyRelationInput>;
  apiTokens?: Maybe<RolesApiTokensManyRelationInput>;
  authenticationProfiles?: Maybe<RolesAuthenticationProfilesManyRelationInput>;
  teamMembers?: Maybe<RolesTeamMembersManyRelationInput>;
};

/** Roles delete input */
export type RoleDeleteInput = {
  id?: Maybe<Scalars['ID']>;
  force?: Maybe<Scalars['Boolean']>;
};

/** RoleFieldsPermissions create input */
export type RoleFieldsPermissions = {
  createdAt?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['Boolean']>;
};

export type RoleFilter = {
  id?: Maybe<IdPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  deletedAt?: Maybe<IntPredicate>;
  name?: Maybe<StringPredicate>;
  description?: Maybe<StringPredicate>;
  _fullText?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserFilter>;
  users?: Maybe<UserRelationFilter>;
  permissions?: Maybe<PermissionRelationFilter>;
  apiTokens?: Maybe<ApiTokenRelationFilter>;
  authenticationProfiles?: Maybe<AuthenticationProfileRelationFilter>;
  teamMembers?: Maybe<TeamMemberRelationFilter>;
  AND?: Maybe<Array<RoleFilter>>;
  OR?: Maybe<Array<RoleFilter>>;
};

export type RoleGroupBy = {
  query: RoleGroupByQuery;
  sort?: Maybe<Array<GroupBySort>>;
  having?: Maybe<Having>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type RoleGroupByQuery = {
  id?: Maybe<Array<GroupByField>>;
  createdAt?: Maybe<Array<GroupByField>>;
  updatedAt?: Maybe<Array<GroupByField>>;
  name?: Maybe<Array<GroupByField>>;
  description?: Maybe<Array<GroupByField>>;
  createdBy?: Maybe<UserGroupByQuery>;
  users?: Maybe<UserGroupByQuery>;
  permissions?: Maybe<PermissionGroupByQuery>;
  apiTokens?: Maybe<ApiTokenGroupByQuery>;
  authenticationProfiles?: Maybe<AuthenticationProfileGroupByQuery>;
  teamMembers?: Maybe<TeamMemberGroupByQuery>;
  _group?: Maybe<Array<GroupIdentifiersGroupByField>>;
};

export type RoleKeyFilter = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

/** RoleListResponse output */
export type RoleListResponse = {
  __typename?: 'RoleListResponse';
  /** List items */
  items: Array<Role>;
  /** List items count */
  count: Scalars['Int'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
};

/** RoleManyResponse output */
export type RoleManyResponse = {
  __typename?: 'RoleManyResponse';
  /** List items */
  items: Array<Role>;
  /** List items count */
  count: Scalars['Int'];
};

/** No longer supported. Use `sort` instead. */
export enum RoleOrderBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  SystemTypeAsc = 'systemType_ASC',
  SystemTypeDesc = 'systemType_DESC'
}

/** Roles subscription payload */
export type RolePayload = {
  __typename?: 'RolePayload';
  mutation: MutationType;
  node?: Maybe<Role>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
  previousValues?: Maybe<Role>;
};

export type RoleRelationFilter = {
  some?: Maybe<RoleFilter>;
  every?: Maybe<RoleFilter>;
  none?: Maybe<RoleFilter>;
};

/** ApiTokens update input from roles */
export type Roles_ApiTokenUpdateInput = {
  filter?: Maybe<ApiTokenKeyFilter>;
  data: ApiTokenUpdateInput;
};

/** AuthenticationProfiles create input from roles */
export type Roles_AuthenticationProfileCreateInput = {
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  secret?: Maybe<Scalars['String']>;
  managementDomain?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  databaseName?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  selfSignUpEnabled?: Maybe<Scalars['Boolean']>;
  selfSignUpEmailDomains?: Maybe<Array<Maybe<Scalars['String']>>>;
  roles?: Maybe<AuthenticationProfilesRolesRelationInput>;
  audiences?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** AuthenticationProfiles update input from roles */
export type Roles_AuthenticationProfileUpdateInput = {
  filter?: Maybe<AuthenticationProfileKeyFilter>;
  data: AuthenticationProfileUpdateInput;
};

/** TeamMembers update input from roles */
export type Roles_TeamMemberUpdateInput = {
  filter?: Maybe<TeamMemberKeyFilter>;
  data: TeamMemberUpdateInput;
};

/** Users create input from roles */
export type Roles_UserCreateInput = {
  email: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  avatar?: Maybe<UsersAvatarRelationInput>;
  roles?: Maybe<UsersRolesRelationInput>;
  customer?: Maybe<UsersCustomerRelationInput>;
  invitation?: Maybe<UsersInvitationRelationInput>;
};

/** Users update input from roles */
export type Roles_UserUpdateInput = {
  filter?: Maybe<UserKeyFilter>;
  data: UserUpdateInput;
};

/** Roles relation input */
export type RolesApiTokensManyRelationInput = {
  connect?: Maybe<Array<ApiTokenKeyFilter>>;
};

/** Roles relation input */
export type RolesApiTokensRelationInput = {
  connect?: Maybe<Array<ApiTokenKeyFilter>>;
};

/** Roles relation input */
export type RolesApiTokensUpdateRelationInput = {
  connect?: Maybe<Array<ApiTokenKeyFilter>>;
  disconnect?: Maybe<Array<ApiTokenKeyFilter>>;
  reconnect?: Maybe<Array<ApiTokenKeyFilter>>;
  update?: Maybe<Array<Maybe<Roles_ApiTokenUpdateInput>>>;
};

/** Roles relation input */
export type RolesAuthenticationProfilesManyRelationInput = {
  connect?: Maybe<Array<AuthenticationProfileKeyFilter>>;
};

/** Roles relation input */
export type RolesAuthenticationProfilesRelationInput = {
  connect?: Maybe<Array<AuthenticationProfileKeyFilter>>;
  create?: Maybe<Array<Maybe<Roles_AuthenticationProfileCreateInput>>>;
};

/** Roles relation input */
export type RolesAuthenticationProfilesUpdateRelationInput = {
  connect?: Maybe<Array<AuthenticationProfileKeyFilter>>;
  disconnect?: Maybe<Array<AuthenticationProfileKeyFilter>>;
  reconnect?: Maybe<Array<AuthenticationProfileKeyFilter>>;
  create?: Maybe<Array<Maybe<Roles_AuthenticationProfileCreateInput>>>;
  update?: Maybe<Array<Maybe<Roles_AuthenticationProfileUpdateInput>>>;
};

export type RoleSort = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  deletedAt?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  createdBy?: Maybe<UserSort>;
};

/** Roles relation input */
export type RolesTeamMembersManyRelationInput = {
  connect?: Maybe<Array<TeamMemberKeyFilter>>;
};

/** Roles relation input */
export type RolesTeamMembersRelationInput = {
  connect?: Maybe<Array<TeamMemberKeyFilter>>;
};

/** Roles relation input */
export type RolesTeamMembersUpdateRelationInput = {
  connect?: Maybe<Array<TeamMemberKeyFilter>>;
  disconnect?: Maybe<Array<TeamMemberKeyFilter>>;
  reconnect?: Maybe<Array<TeamMemberKeyFilter>>;
  update?: Maybe<Array<Maybe<Roles_TeamMemberUpdateInput>>>;
};

/** Roles subscription filter */
export type RoleSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<RoleFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

/** Roles relation input */
export type RolesUsersManyRelationInput = {
  connect?: Maybe<Array<UserKeyFilter>>;
};

/** Roles relation input */
export type RolesUsersRelationInput = {
  connect?: Maybe<Array<UserKeyFilter>>;
  create?: Maybe<Array<Maybe<Roles_UserCreateInput>>>;
};

/** Roles relation input */
export type RolesUsersUpdateRelationInput = {
  connect?: Maybe<Array<UserKeyFilter>>;
  disconnect?: Maybe<Array<UserKeyFilter>>;
  reconnect?: Maybe<Array<UserKeyFilter>>;
  create?: Maybe<Array<Maybe<Roles_UserCreateInput>>>;
  update?: Maybe<Array<Maybe<Roles_UserUpdateInput>>>;
};

/** Roles update input */
export type RoleUpdateByFilterInput = {
  name?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  description?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  systemType?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
};

/** Roles update input */
export type RoleUpdateInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  users?: Maybe<RolesUsersUpdateRelationInput>;
  permissions?: Maybe<PermissionsInput>;
  apiTokens?: Maybe<RolesApiTokensUpdateRelationInput>;
  authenticationProfiles?: Maybe<RolesAuthenticationProfilesUpdateRelationInput>;
  teamMembers?: Maybe<RolesTeamMembersUpdateRelationInput>;
};

/** Schema Origin */
export type SchemaOrigin = {
  __typename?: 'SchemaOrigin';
  type: SchemaOriginType;
  provider?: Maybe<Scalars['String']>;
};

/** Schema Origin Type Enum */
export enum SchemaOriginType {
  Remote = 'REMOTE',
  Local = 'LOCAL',
  View = 'VIEW'
}

export type SetProductAvailabilityResult = {
  __typename?: 'SetProductAvailabilityResult';
  success: Scalars['Boolean'];
};

export type Setting = {
  __typename?: 'Setting';
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  passwordMinLength?: Maybe<Scalars['Int']>;
  passwordRequireNumbers?: Maybe<Scalars['Boolean']>;
  passwordRequireSpecial?: Maybe<Scalars['Boolean']>;
  passwordRequireUppercase?: Maybe<Scalars['Boolean']>;
  passwordRequireLowercase?: Maybe<Scalars['Boolean']>;
  passwordUpdateInterval?: Maybe<Scalars['Int']>;
  rememberDevice?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  dateFormat?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  menuBarLogo?: Maybe<File>;
  landingPageImage?: Maybe<File>;
  vanityUrl?: Maybe<Scalars['String']>;
  buttonLinkColor?: Maybe<Scalars['String']>;
  userInterfaceStyle?: Maybe<Scalars['String']>;
  menuBarBGColor?: Maybe<Scalars['String']>;
  menuBarIconsColor?: Maybe<Scalars['String']>;
  bgColor?: Maybe<Scalars['String']>;
  containerColor?: Maybe<Scalars['String']>;
  leftNavColor?: Maybe<Scalars['String']>;
  _description?: Maybe<Scalars['String']>;
};

export type Setting_PermissionFilter = {
  createdAt?: Maybe<DateTimePredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  deletedAt?: Maybe<IntPredicate>;
  passwordMinLength?: Maybe<IntPredicate>;
  passwordRequireNumbers?: Maybe<BoolPredicate>;
  passwordRequireSpecial?: Maybe<BoolPredicate>;
  passwordRequireUppercase?: Maybe<BoolPredicate>;
  passwordRequireLowercase?: Maybe<BoolPredicate>;
  passwordUpdateInterval?: Maybe<IntPredicate>;
  rememberDevice?: Maybe<StringPredicate>;
  language?: Maybe<StringPredicate>;
  dateFormat?: Maybe<StringPredicate>;
  currency?: Maybe<StringPredicate>;
  timezone?: Maybe<StringPredicate>;
  vanityUrl?: Maybe<StringPredicate>;
  buttonLinkColor?: Maybe<StringPredicate>;
  userInterfaceStyle?: Maybe<StringPredicate>;
  menuBarBGColor?: Maybe<StringPredicate>;
  menuBarIconsColor?: Maybe<StringPredicate>;
  bgColor?: Maybe<StringPredicate>;
  containerColor?: Maybe<StringPredicate>;
  leftNavColor?: Maybe<StringPredicate>;
  _fullText?: Maybe<Scalars['String']>;
  createdBy?: Maybe<User_PermissionFilter>;
  menuBarLogo?: Maybe<File_PermissionFilter>;
  landingPageImage?: Maybe<File_PermissionFilter>;
  AND?: Maybe<Array<Setting_PermissionFilter>>;
  OR?: Maybe<Array<Setting_PermissionFilter>>;
};

export type Setting_PermissionRelationFilter = {
  some?: Maybe<Setting_PermissionFilter>;
  every?: Maybe<Setting_PermissionFilter>;
  none?: Maybe<Setting_PermissionFilter>;
};

export type SettingFilter = {
  createdAt?: Maybe<DateTimePredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  deletedAt?: Maybe<IntPredicate>;
  passwordMinLength?: Maybe<IntPredicate>;
  passwordRequireNumbers?: Maybe<BoolPredicate>;
  passwordRequireSpecial?: Maybe<BoolPredicate>;
  passwordRequireUppercase?: Maybe<BoolPredicate>;
  passwordRequireLowercase?: Maybe<BoolPredicate>;
  passwordUpdateInterval?: Maybe<IntPredicate>;
  rememberDevice?: Maybe<StringPredicate>;
  language?: Maybe<StringPredicate>;
  dateFormat?: Maybe<StringPredicate>;
  currency?: Maybe<StringPredicate>;
  timezone?: Maybe<StringPredicate>;
  vanityUrl?: Maybe<StringPredicate>;
  buttonLinkColor?: Maybe<StringPredicate>;
  userInterfaceStyle?: Maybe<StringPredicate>;
  menuBarBGColor?: Maybe<StringPredicate>;
  menuBarIconsColor?: Maybe<StringPredicate>;
  bgColor?: Maybe<StringPredicate>;
  containerColor?: Maybe<StringPredicate>;
  leftNavColor?: Maybe<StringPredicate>;
  _fullText?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserFilter>;
  menuBarLogo?: Maybe<FileFilter>;
  landingPageImage?: Maybe<FileFilter>;
  AND?: Maybe<Array<SettingFilter>>;
  OR?: Maybe<Array<SettingFilter>>;
};

export type SettingGroupBy = {
  query: SettingGroupByQuery;
  sort?: Maybe<Array<GroupBySort>>;
  having?: Maybe<Having>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type SettingGroupByQuery = {
  createdAt?: Maybe<Array<GroupByField>>;
  updatedAt?: Maybe<Array<GroupByField>>;
  passwordMinLength?: Maybe<Array<GroupByField>>;
  passwordRequireNumbers?: Maybe<Array<GroupByField>>;
  passwordRequireSpecial?: Maybe<Array<GroupByField>>;
  passwordRequireUppercase?: Maybe<Array<GroupByField>>;
  passwordRequireLowercase?: Maybe<Array<GroupByField>>;
  passwordUpdateInterval?: Maybe<Array<GroupByField>>;
  rememberDevice?: Maybe<Array<GroupByField>>;
  language?: Maybe<Array<GroupByField>>;
  dateFormat?: Maybe<Array<GroupByField>>;
  currency?: Maybe<Array<GroupByField>>;
  timezone?: Maybe<Array<GroupByField>>;
  vanityUrl?: Maybe<Array<GroupByField>>;
  buttonLinkColor?: Maybe<Array<GroupByField>>;
  userInterfaceStyle?: Maybe<Array<GroupByField>>;
  menuBarBGColor?: Maybe<Array<GroupByField>>;
  menuBarIconsColor?: Maybe<Array<GroupByField>>;
  bgColor?: Maybe<Array<GroupByField>>;
  containerColor?: Maybe<Array<GroupByField>>;
  leftNavColor?: Maybe<Array<GroupByField>>;
  createdBy?: Maybe<UserGroupByQuery>;
  menuBarLogo?: Maybe<FileGroupByQuery>;
  landingPageImage?: Maybe<FileGroupByQuery>;
  _group?: Maybe<Array<GroupIdentifiersGroupByField>>;
};

/** SettingListResponse output */
export type SettingListResponse = {
  __typename?: 'SettingListResponse';
  /** List items */
  items: Array<Setting>;
  /** List items count */
  count: Scalars['Int'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
};

/** No longer supported. Use `sort` instead. */
export enum SettingOrderBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  PasswordMinLengthAsc = 'passwordMinLength_ASC',
  PasswordMinLengthDesc = 'passwordMinLength_DESC',
  PasswordRequireNumbersAsc = 'passwordRequireNumbers_ASC',
  PasswordRequireNumbersDesc = 'passwordRequireNumbers_DESC',
  PasswordRequireSpecialAsc = 'passwordRequireSpecial_ASC',
  PasswordRequireSpecialDesc = 'passwordRequireSpecial_DESC',
  PasswordRequireUppercaseAsc = 'passwordRequireUppercase_ASC',
  PasswordRequireUppercaseDesc = 'passwordRequireUppercase_DESC',
  PasswordRequireLowercaseAsc = 'passwordRequireLowercase_ASC',
  PasswordRequireLowercaseDesc = 'passwordRequireLowercase_DESC',
  PasswordUpdateIntervalAsc = 'passwordUpdateInterval_ASC',
  PasswordUpdateIntervalDesc = 'passwordUpdateInterval_DESC',
  RememberDeviceAsc = 'rememberDevice_ASC',
  RememberDeviceDesc = 'rememberDevice_DESC',
  LanguageAsc = 'language_ASC',
  LanguageDesc = 'language_DESC',
  DateFormatAsc = 'dateFormat_ASC',
  DateFormatDesc = 'dateFormat_DESC',
  CurrencyAsc = 'currency_ASC',
  CurrencyDesc = 'currency_DESC',
  TimezoneAsc = 'timezone_ASC',
  TimezoneDesc = 'timezone_DESC',
  VanityUrlAsc = 'vanityUrl_ASC',
  VanityUrlDesc = 'vanityUrl_DESC',
  ButtonLinkColorAsc = 'buttonLinkColor_ASC',
  ButtonLinkColorDesc = 'buttonLinkColor_DESC',
  UserInterfaceStyleAsc = 'userInterfaceStyle_ASC',
  UserInterfaceStyleDesc = 'userInterfaceStyle_DESC',
  MenuBarBgColorAsc = 'menuBarBGColor_ASC',
  MenuBarBgColorDesc = 'menuBarBGColor_DESC',
  MenuBarIconsColorAsc = 'menuBarIconsColor_ASC',
  MenuBarIconsColorDesc = 'menuBarIconsColor_DESC',
  BgColorAsc = 'bgColor_ASC',
  BgColorDesc = 'bgColor_DESC',
  ContainerColorAsc = 'containerColor_ASC',
  ContainerColorDesc = 'containerColor_DESC',
  LeftNavColorAsc = 'leftNavColor_ASC',
  LeftNavColorDesc = 'leftNavColor_DESC'
}

/** Settings subscription payload */
export type SettingPayload = {
  __typename?: 'SettingPayload';
  mutation: MutationType;
  node?: Maybe<Setting>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
  previousValues?: Maybe<Setting>;
};

export type SettingRelationFilter = {
  some?: Maybe<SettingFilter>;
  every?: Maybe<SettingFilter>;
  none?: Maybe<SettingFilter>;
};

export type SettingSort = {
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  deletedAt?: Maybe<SortOrder>;
  passwordMinLength?: Maybe<SortOrder>;
  passwordRequireNumbers?: Maybe<SortOrder>;
  passwordRequireSpecial?: Maybe<SortOrder>;
  passwordRequireUppercase?: Maybe<SortOrder>;
  passwordRequireLowercase?: Maybe<SortOrder>;
  passwordUpdateInterval?: Maybe<SortOrder>;
  rememberDevice?: Maybe<SortOrder>;
  language?: Maybe<SortOrder>;
  dateFormat?: Maybe<SortOrder>;
  currency?: Maybe<SortOrder>;
  timezone?: Maybe<SortOrder>;
  vanityUrl?: Maybe<SortOrder>;
  buttonLinkColor?: Maybe<SortOrder>;
  userInterfaceStyle?: Maybe<SortOrder>;
  menuBarBGColor?: Maybe<SortOrder>;
  menuBarIconsColor?: Maybe<SortOrder>;
  bgColor?: Maybe<SortOrder>;
  containerColor?: Maybe<SortOrder>;
  leftNavColor?: Maybe<SortOrder>;
  createdBy?: Maybe<UserSort>;
  menuBarLogo?: Maybe<FileSort>;
  landingPageImage?: Maybe<FileSort>;
};

/** Settings subscription filter */
export type SettingSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<SettingFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

/** Settings update input */
export type SettingUpdateInput = {
  passwordMinLength?: Maybe<Scalars['Int']>;
  passwordRequireNumbers?: Maybe<Scalars['Boolean']>;
  passwordRequireSpecial?: Maybe<Scalars['Boolean']>;
  passwordRequireUppercase?: Maybe<Scalars['Boolean']>;
  passwordRequireLowercase?: Maybe<Scalars['Boolean']>;
  passwordUpdateInterval?: Maybe<Scalars['Int']>;
  rememberDevice?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  dateFormat?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  vanityUrl?: Maybe<Scalars['String']>;
  buttonLinkColor?: Maybe<Scalars['String']>;
  userInterfaceStyle?: Maybe<Scalars['String']>;
  menuBarBGColor?: Maybe<Scalars['String']>;
  menuBarIconsColor?: Maybe<Scalars['String']>;
  bgColor?: Maybe<Scalars['String']>;
  containerColor?: Maybe<Scalars['String']>;
  leftNavColor?: Maybe<Scalars['String']>;
};

/** SignUpResendInput */
export type SignUpResendInput = {
  email: Scalars['String'];
};

/** Smart Field Attributes */
export type SmartFieldTypeAttributes = {
  __typename?: 'SmartFieldTypeAttributes';
  format: Scalars['String'];
  innerFields?: Maybe<Array<Maybe<CustomTableField>>>;
};

/** Smart Type Format Enum */
export enum SmartTypeFormatEnum {
  Address = 'ADDRESS',
  Phone = 'PHONE'
}

/** SortOrder */
export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringPadFunctionArguments = {
  len: Scalars['Int'];
  str: Scalars['String'];
};

export type StringPredicate = {
  equals?: Maybe<Scalars['String']>;
  not_equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  not_in?: Maybe<Array<Scalars['String']>>;
  contains?: Maybe<Scalars['String']>;
  not_contains?: Maybe<Scalars['String']>;
  starts_with?: Maybe<Scalars['String']>;
  not_starts_with?: Maybe<Scalars['String']>;
  ends_with?: Maybe<Scalars['String']>;
  not_ends_with?: Maybe<Scalars['String']>;
  is_empty?: Maybe<Scalars['Boolean']>;
  is_not_empty?: Maybe<Scalars['Boolean']>;
};

export type StringPredicateHaving = {
  equals?: Maybe<Scalars['String']>;
  not_equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  not_in?: Maybe<Array<Scalars['String']>>;
  contains?: Maybe<Scalars['String']>;
  not_contains?: Maybe<Scalars['String']>;
  starts_with?: Maybe<Scalars['String']>;
  not_starts_with?: Maybe<Scalars['String']>;
  ends_with?: Maybe<Scalars['String']>;
  not_ends_with?: Maybe<Scalars['String']>;
  is_empty?: Maybe<Scalars['Boolean']>;
  is_not_empty?: Maybe<Scalars['Boolean']>;
  AND?: Maybe<Array<StringPredicateHaving>>;
  OR?: Maybe<Array<StringPredicateHaving>>;
};

export enum StringTrimMode {
  Both = 'BOTH',
  Leading = 'LEADING',
  Trailing = 'TRAILING'
}

export type Subscription = {
  __typename?: 'Subscription';
  ApiTokens?: Maybe<ApiTokenPayload>;
  AuthenticationProfiles?: Maybe<AuthenticationProfilePayload>;
  AuthenticationSettings?: Maybe<AuthenticationSettingPayload>;
  Customers?: Maybe<CustomerPayload>;
  EnvironmentVariables?: Maybe<EnvironmentVariablePayload>;
  Files?: Maybe<FilePayload>;
  Invitations?: Maybe<InvitationPayload>;
  Orders?: Maybe<OrderPayload>;
  Permissions?: Maybe<PermissionPayload>;
  Products?: Maybe<ProductPayload>;
  Roles?: Maybe<RolePayload>;
  Settings?: Maybe<SettingPayload>;
  TeamInvitations?: Maybe<TeamInvitationPayload>;
  TeamMembers?: Maybe<TeamMemberPayload>;
  Users?: Maybe<UserPayload>;
};


export type SubscriptionApiTokensArgs = {
  filter?: Maybe<ApiTokenSubscriptionFilter>;
};


export type SubscriptionAuthenticationProfilesArgs = {
  filter?: Maybe<AuthenticationProfileSubscriptionFilter>;
};


export type SubscriptionAuthenticationSettingsArgs = {
  filter?: Maybe<AuthenticationSettingSubscriptionFilter>;
};


export type SubscriptionCustomersArgs = {
  filter?: Maybe<CustomerSubscriptionFilter>;
};


export type SubscriptionEnvironmentVariablesArgs = {
  filter?: Maybe<EnvironmentVariableSubscriptionFilter>;
};


export type SubscriptionFilesArgs = {
  filter?: Maybe<FileSubscriptionFilter>;
};


export type SubscriptionInvitationsArgs = {
  filter?: Maybe<InvitationSubscriptionFilter>;
};


export type SubscriptionOrdersArgs = {
  filter?: Maybe<OrderSubscriptionFilter>;
};


export type SubscriptionPermissionsArgs = {
  filter?: Maybe<PermissionSubscriptionFilter>;
};


export type SubscriptionProductsArgs = {
  filter?: Maybe<ProductSubscriptionFilter>;
};


export type SubscriptionRolesArgs = {
  filter?: Maybe<RoleSubscriptionFilter>;
};


export type SubscriptionSettingsArgs = {
  filter?: Maybe<SettingSubscriptionFilter>;
};


export type SubscriptionTeamInvitationsArgs = {
  filter?: Maybe<TeamInvitationSubscriptionFilter>;
};


export type SubscriptionTeamMembersArgs = {
  filter?: Maybe<TeamMemberSubscriptionFilter>;
};


export type SubscriptionUsersArgs = {
  filter?: Maybe<UserSubscriptionFilter>;
};

export type SubstringFunctionArguments = {
  pos: Scalars['Int'];
  len?: Maybe<Scalars['Int']>;
};

export type SuccessResponse = {
  __typename?: 'SuccessResponse';
  success?: Maybe<Scalars['Boolean']>;
};

/** Switch Field Attributes */
export type SwitchFieldTypeAttributes = {
  __typename?: 'SwitchFieldTypeAttributes';
  format: Scalars['String'];
  listOptions?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Switch Type Format Enum */
export enum SwitchTypeFormatEnum {
  OnOff = 'ON_OFF',
  YesNo = 'YES_NO',
  TrueFalse = 'TRUE_FALSE',
  ActiveInactive = 'ACTIVE_INACTIVE',
  HighLow = 'HIGH_LOW',
  Custom = 'CUSTOM'
}

/** Application */
export type SystemApplication = {
  __typename?: 'SystemApplication';
  id: Scalars['ID'];
  name: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  appType: Scalars['String'];
  status: SystemApplicationStatusEnum;
};

/** ApplicationDeleteMutationInput */
export type SystemApplicationDeleteMutationInput = {
  id: Scalars['String'];
  force?: Maybe<Scalars['Boolean']>;
};

/** Application install input */
export type SystemApplicationInstallInput = {
  appType: Scalars['String'];
  name: Scalars['String'];
  status?: Maybe<SystemApplicationStatusEnum>;
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

/** SystemApplicationListResponse output */
export type SystemApplicationListResponse = {
  __typename?: 'SystemApplicationListResponse';
  /** List items */
  items: Array<SystemApplication>;
  /** List items count */
  count: Scalars['Int'];
};

/** Application Status Enum */
export enum SystemApplicationStatusEnum {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

/** Application update input */
export type SystemApplicationUpdateInput = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<SystemApplicationStatusEnum>;
};

export type SystemBillingCurrentPlanResponse = {
  __typename?: 'SystemBillingCurrentPlanResponse';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  displayName?: Maybe<Scalars['String']>;
  trialEnd?: Maybe<Scalars['DateTime']>;
  status?: Maybe<SystemWorkspaceStatus>;
  nextPlan?: Maybe<SystemBillingNextPlanResponse>;
};

export type SystemBillingDetailsResponse = {
  __typename?: 'SystemBillingDetailsResponse';
  last4?: Maybe<Scalars['String']>;
  expMonth?: Maybe<Scalars['Int']>;
  expYear?: Maybe<Scalars['Int']>;
  brand?: Maybe<Scalars['String']>;
};

/** BillingDetailsUpdateMutationInput */
export type SystemBillingDetailsUpdateMutationInput = {
  cardToken: Scalars['String'];
};

export type SystemBillingInvoiceItem = {
  __typename?: 'SystemBillingInvoiceItem';
  id: Scalars['ID'];
  periodStart?: Maybe<Scalars['DateTime']>;
  periodEnd?: Maybe<Scalars['DateTime']>;
  paid?: Maybe<Scalars['Boolean']>;
  invoicePdf?: Maybe<Scalars['String']>;
  amountDue?: Maybe<Scalars['Float']>;
  amountPaid?: Maybe<Scalars['Float']>;
  amountRemaining?: Maybe<Scalars['Float']>;
  endingBalance?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
};

export enum SystemBillingInvoicesListFilterType {
  Workspace = 'WORKSPACE',
  Customer = 'CUSTOMER'
}

/** SystemBillingInvoicesListResponse output */
export type SystemBillingInvoicesListResponse = {
  __typename?: 'SystemBillingInvoicesListResponse';
  /** List items */
  items: Array<SystemBillingInvoiceItem>;
  /** List items count */
  count: Scalars['Int'];
};

export type SystemBillingLimitMetricItem = {
  __typename?: 'SystemBillingLimitMetricItem';
  name?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  showPriority?: Maybe<Scalars['Int']>;
  unit?: Maybe<Scalars['String']>;
};

export type SystemBillingMetricUsageItem = {
  __typename?: 'SystemBillingMetricUsageItem';
  limitMetric?: Maybe<SystemBillingLimitMetricItem>;
  value?: Maybe<Scalars['Float']>;
};

export type SystemBillingMetricUsageQuotaItem = {
  __typename?: 'SystemBillingMetricUsageQuotaItem';
  limitMetric?: Maybe<SystemBillingLimitMetricItem>;
  value?: Maybe<Scalars['Float']>;
};

/** SystemBillingMetricUsageQuotasListResponse output */
export type SystemBillingMetricUsageQuotasListResponse = {
  __typename?: 'SystemBillingMetricUsageQuotasListResponse';
  /** List items */
  items: Array<SystemBillingMetricUsageQuotaItem>;
  /** List items count */
  count: Scalars['Int'];
};

export type SystemBillingMetricUsagesListFilter = {
  entryDate: DateTimePredicate;
};

/** SystemBillingMetricUsagesListResponse output */
export type SystemBillingMetricUsagesListResponse = {
  __typename?: 'SystemBillingMetricUsagesListResponse';
  /** List items */
  items: Array<SystemBillingMetricUsageItem>;
  /** List items count */
  count: Scalars['Int'];
};

export type SystemBillingNextPlanResponse = {
  __typename?: 'SystemBillingNextPlanResponse';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  displayName?: Maybe<Scalars['String']>;
};

export type SystemBillingPlanBaseInfo = {
  __typename?: 'SystemBillingPlanBaseInfo';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  isCustom?: Maybe<Scalars['Boolean']>;
  isLegacy?: Maybe<Scalars['Boolean']>;
  limitMetrics?: Maybe<Array<Maybe<SystemBillingPlanLimitMetricItem>>>;
};

export type SystemBillingPlanLimitMetricItem = {
  __typename?: 'SystemBillingPlanLimitMetricItem';
  name?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  overagePrice?: Maybe<Scalars['Int']>;
  softLimit?: Maybe<Scalars['Float']>;
  hardLimit?: Maybe<Scalars['Float']>;
};

/** BillingPlanUpdateMutationInput */
export type SystemBillingPlanUpdateMutationInput = {
  planId: Scalars['ID'];
};

export enum SystemBranchEnvironmentMode {
  Full = 'FULL',
  System = 'SYSTEM'
}

/** Ci Commit Mode */
export enum SystemCiCommitMode {
  Full = 'FULL',
  OnlyMigrations = 'ONLY_MIGRATIONS',
  OnlyProject = 'ONLY_PROJECT'
}

/** Ci Status */
export type SystemCiStatusOutput = {
  __typename?: 'SystemCiStatusOutput';
  status: Scalars['String'];
  migrations?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Computed field mode */
export enum SystemComputedFieldMode {
  Virtual = 'VIRTUAL',
  Stored = 'STORED'
}

/** Custom Table Field Type */
export type SystemCustomTableField = {
  __typename?: 'SystemCustomTableField';
  name?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  fieldType?: Maybe<SystemFieldType>;
  isList: Scalars['Boolean'];
  isRequired: Scalars['Boolean'];
  isUnique?: Maybe<Scalars['Boolean']>;
  defaultValue?: Maybe<Scalars['String']>;
  computedMode?: Maybe<SystemComputedFieldMode>;
  expression?: Maybe<Scalars['String']>;
  fieldTypeAttributes?: Maybe<SystemFieldTypeAttributes>;
};

/** Date Field Attributes */
export type SystemDateFieldTypeAttributes = {
  __typename?: 'SystemDateFieldTypeAttributes';
  format: Scalars['String'];
};

/** Date Type Format Enum */
export enum SystemDateTypeFormatEnum {
  Date = 'DATE',
  Datetime = 'DATETIME'
}

/** DeployDataResponse */
export type SystemDeployDataResponse = {
  __typename?: 'SystemDeployDataResponse';
  uploadBuildUrl: Scalars['String'];
  uploadMetaDataUrl: Scalars['String'];
  buildName: Scalars['String'];
};

/** DeployingBuildInput */
export type SystemDeployingBuildInput = {
  buildName: Scalars['String'];
  options?: Maybe<SystemDeployOptions>;
};

export enum SystemDeployModeEnum {
  Full = 'FULL',
  OnlyPlugins = 'ONLY_PLUGINS',
  OnlyProject = 'ONLY_PROJECT',
  Functions = 'FUNCTIONS',
  Migrations = 'MIGRATIONS'
}

/** DeployOptions */
export type SystemDeployOptions = {
  mode?: Maybe<SystemDeployModeEnum>;
  pluginNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  extensionNames?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum SystemDeployStatusEnum {
  Deploying = 'deploying',
  CompleteError = 'complete_error',
  CompleteSuccess = 'complete_success',
  Compiling = 'compiling',
  Preparing = 'preparing',
  Initialize = 'initialize'
}

/** SystemDeployStatusResult */
export type SystemDeployStatusResult = {
  __typename?: 'SystemDeployStatusResult';
  status: SystemDeployStatusEnum;
  message?: Maybe<Scalars['String']>;
};

/** SystemEnvironmentBackupListResponse output */
export type SystemEnvironmentBackupListResponse = {
  __typename?: 'SystemEnvironmentBackupListResponse';
  /** List items */
  items: Array<EnvironmentBackupItem>;
  /** List items count */
  count: Scalars['Int'];
};

export type SystemEnvironmentRoleBaseInfo = {
  __typename?: 'SystemEnvironmentRoleBaseInfo';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type SystemEnvironmentRoleList = {
  __typename?: 'SystemEnvironmentRoleList';
  environmentId: Scalars['String'];
  environmentName: Scalars['String'];
  roles?: Maybe<Array<Maybe<SystemEnvironmentRoleBaseInfo>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type SystemEnvironmentSettings = {
  __typename?: 'SystemEnvironmentSettings';
  deleteLock?: Maybe<Scalars['Boolean']>;
};

/** SystemEnvironmentsListResponse output */
export type SystemEnvironmentsListResponse = {
  __typename?: 'SystemEnvironmentsListResponse';
  /** List items */
  items: Array<EnvironmentItem>;
  /** List items count */
  count: Scalars['Int'];
};

/** Field Data Features */
export type SystemFieldDataFeatures = {
  __typename?: 'SystemFieldDataFeatures';
  create: Scalars['Boolean'];
  update: Scalars['Boolean'];
  sort: Scalars['Boolean'];
};

/** Field Schema Features */
export type SystemFieldSchemaFeatures = {
  __typename?: 'SystemFieldSchemaFeatures';
  update: Scalars['Boolean'];
  delete: Scalars['Boolean'];
};

/** Field types */
export enum SystemFieldType {
  Id = 'ID',
  Uuid = 'UUID',
  Json = 'JSON',
  Number = 'NUMBER',
  Text = 'TEXT',
  Date = 'DATE',
  Switch = 'SWITCH',
  Relation = 'RELATION',
  File = 'FILE',
  Smart = 'SMART',
  Geo = 'GEO',
  OneWayRelation = 'ONE_WAY_RELATION',
  MissingRelation = 'MISSING_RELATION'
}

/** Field Type Attributes */
export type SystemFieldTypeAttributes = SystemDateFieldTypeAttributes | SystemFileFieldTypeAttributes | SystemMissingRelationFieldTypeAttributes | SystemNumberFieldTypeAttributes | SystemSmartFieldTypeAttributes | SystemSwitchFieldTypeAttributes | SystemTextFieldTypeAttributes | SystemUuidFieldTypeAttributes | SystemGeoFieldTypeAttributes;

/** Field Type Attributes Input */
export type SystemFieldTypeAttributesInput = {
  format?: Maybe<Scalars['String']>;
  precision?: Maybe<Scalars['Int']>;
  currency?: Maybe<Scalars['String']>;
  minValue?: Maybe<Scalars['Float']>;
  maxValue?: Maybe<Scalars['Float']>;
  isBigInt?: Maybe<Scalars['Boolean']>;
  autoIncrement?: Maybe<Scalars['Boolean']>;
  fieldSize?: Maybe<Scalars['Int']>;
  expiration?: Maybe<Scalars['Int']>;
  listOptions?: Maybe<Array<Scalars['String']>>;
  maxSize?: Maybe<Scalars['Int']>;
  typeRestrictions?: Maybe<Array<Scalars['String']>>;
  srid?: Maybe<Scalars['Int']>;
};

/** File Field Attributes */
export type SystemFileFieldTypeAttributes = {
  __typename?: 'SystemFileFieldTypeAttributes';
  format: Scalars['String'];
  maxSize?: Maybe<Scalars['Int']>;
  /** @deprecated Field is deprecated */
  showTitle?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field is deprecated */
  showUrl?: Maybe<Scalars['Boolean']>;
  typeRestrictions?: Maybe<Array<Scalars['String']>>;
  expiration?: Maybe<Scalars['Int']>;
};

/** File Type Format Enum */
export enum SystemFileTypeFormatEnum {
  File = 'FILE',
  Image = 'IMAGE'
}

/** FunctionInfo */
export type SystemFunctionInfo = {
  name: Scalars['String'];
  functionType: SystemFunctionType;
  description?: Maybe<Scalars['String']>;
  application?: Maybe<SystemApplication>;
};

/** FunctionInfoFilter */
export type SystemFunctionInfoFilter = {
  name?: Maybe<Scalars['String']>;
  functionType?: Maybe<SystemFunctionType>;
  description?: Maybe<Scalars['String']>;
};

/** FunctionInfoOrderBy */
export enum SystemFunctionInfoOrderBy {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  FunctionTypeAsc = 'functionType_ASC',
  FunctionTypeDesc = 'functionType_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC'
}

/** SystemFunctionListResponse output */
export type SystemFunctionListResponse = {
  __typename?: 'SystemFunctionListResponse';
  /** List items */
  items: Array<SystemFunctionInfo>;
  /** List items count */
  count: Scalars['Int'];
};

/** FunctionLogEntry */
export type SystemFunctionLogEntry = {
  __typename?: 'SystemFunctionLogEntry';
  timestamp?: Maybe<Scalars['DateTime']>;
  message?: Maybe<Scalars['String']>;
};

/** FunctionResolverInfo */
export type SystemFunctionResolverInfo = SystemFunctionInfo & {
  __typename?: 'SystemFunctionResolverInfo';
  name: Scalars['String'];
  functionType: SystemFunctionType;
  description?: Maybe<Scalars['String']>;
  gqlType: Scalars['String'];
  application?: Maybe<SystemApplication>;
};

/** FunctionTaskInfo */
export type SystemFunctionTaskInfo = SystemFunctionInfo & {
  __typename?: 'SystemFunctionTaskInfo';
  name: Scalars['String'];
  functionType: SystemFunctionType;
  description?: Maybe<Scalars['String']>;
  scheduleExpression?: Maybe<Scalars['String']>;
  application?: Maybe<SystemApplication>;
};

/** FunctionTriggerInfo */
export type SystemFunctionTriggerInfo = SystemFunctionInfo & {
  __typename?: 'SystemFunctionTriggerInfo';
  name: Scalars['String'];
  functionType: SystemFunctionType;
  description?: Maybe<Scalars['String']>;
  operation: Scalars['String'];
  tableName: Scalars['String'];
  type: Scalars['String'];
  application?: Maybe<SystemApplication>;
};

/** FunctionType */
export enum SystemFunctionType {
  Resolver = 'resolver',
  Trigger = 'trigger',
  Webhook = 'webhook',
  Task = 'task',
  Schedule = 'schedule'
}

/** FunctionWebhookInfo */
export type SystemFunctionWebhookInfo = SystemFunctionInfo & {
  __typename?: 'SystemFunctionWebhookInfo';
  name: Scalars['String'];
  functionType: SystemFunctionType;
  description?: Maybe<Scalars['String']>;
  httpMethod: Scalars['String'];
  workspaceRelativePath: Scalars['String'];
  workspaceFullPath: Scalars['String'];
  application?: Maybe<SystemApplication>;
};

/** Diff Environment Input */
export type SystemGenerateEnvironmentOutput = {
  __typename?: 'SystemGenerateEnvironmentOutput';
  url?: Maybe<Scalars['String']>;
};

/** Geo Field Attributes */
export type SystemGeoFieldTypeAttributes = {
  __typename?: 'SystemGeoFieldTypeAttributes';
  format: Scalars['String'];
  srid?: Maybe<Scalars['Int']>;
};

/** Table Create Index Input */
export type SystemIndexCreateInput = {
  tableId: Scalars['ID'];
  type: TableIndexType;
  columns: Array<SystemTableIndexColumnInput>;
  force?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

/** Table Delete Index Input */
export type SystemIndexDeleteInput = {
  id: Scalars['ID'];
};

/** Table Update Index Input */
export type SystemIndexUpdateInput = {
  id: Scalars['ID'];
  type?: Maybe<TableIndexType>;
  columns?: Maybe<Array<SystemTableIndexColumnInput>>;
  force?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

/** InvokeData */
export type SystemInvokeData = {
  functionName: Scalars['String'];
  inputArgs?: Maybe<Scalars['String']>;
};

/** InvokeFunctionResponse */
export type SystemInvokeFunctionResponse = {
  __typename?: 'SystemInvokeFunctionResponse';
  responseData: Scalars['String'];
};

/** MissingRelation Field Attributes */
export type SystemMissingRelationFieldTypeAttributes = {
  __typename?: 'SystemMissingRelationFieldTypeAttributes';
  missingTable: Scalars['String'];
};

export type SystemMutation = {
  __typename?: 'SystemMutation';
  applicationDelete?: Maybe<SuccessResponse>;
  applicationInstall?: Maybe<SystemApplication>;
  applicationUpdate?: Maybe<SystemApplication>;
  billingDetailsUpdate?: Maybe<SystemBillingDetailsResponse>;
  billingPlanUpdate?: Maybe<SystemBillingCurrentPlanResponse>;
  ciCommit?: Maybe<AsyncSession>;
  ciInstall?: Maybe<SuccessResponse>;
  deploy?: Maybe<Scalars['Boolean']>;
  environmentBackup?: Maybe<AsyncSession>;
  environmentBranch?: Maybe<AsyncSession>;
  environmentDelete?: Maybe<SuccessResponse>;
  environmentDeleteAsync?: Maybe<AsyncSession>;
  environmentRestore?: Maybe<AsyncSession>;
  environmentSetup?: Maybe<SuccessResponse>;
  fieldCreate: SystemTableField;
  fieldDelete: SuccessResponse;
  fieldUpdate: SystemTableField;
  fieldUpdatePosition: SuccessResponse;
  indexCreate: SystemTableIndex;
  indexDelete?: Maybe<SuccessResponse>;
  indexUpdate: SystemTableIndex;
  invoke?: Maybe<SystemInvokeFunctionResponse>;
  organizationInviteUser?: Maybe<OrganizationUserInvitationResponse>;
  organizationInviteUserAccept?: Maybe<SuccessResponse>;
  organizationInviteUserCancel?: Maybe<SuccessResponse>;
  organizationUpdate?: Maybe<SystemOrganizationItem>;
  organizationUserRemove?: Maybe<SuccessResponse>;
  organizationWorkspaceAdd?: Maybe<SuccessResponse>;
  organizationWorkspaceAddAccept?: Maybe<SuccessResponse>;
  organizationWorkspaceAddCancel?: Maybe<SuccessResponse>;
  organizationWorkspaceRemove?: Maybe<SuccessResponse>;
  organizationWorkspaceUserRemove?: Maybe<SuccessResponse>;
  organizationWorkspaceUserShare?: Maybe<SuccessResponse>;
  prepareDeploy: SystemDeployDataResponse;
  tableCreate: SystemTable;
  tableDelete: SuccessResponse;
  tableUpdate: SystemTable;
  viewCreate: SystemTable;
  viewUpdate: SystemTable;
  workspaceCreate?: Maybe<SystemWorkspaceCreateResponse>;
  workspaceCreateAsync?: Maybe<SystemWorkspaceCreateResponse>;
  workspaceDelete?: Maybe<SuccessResponse>;
  workspaceLeave?: Maybe<SuccessResponse>;
  workspaceTransferAccept?: Maybe<SuccessResponse>;
  workspaceTransferCancel?: Maybe<SuccessResponse>;
  workspaceTransferRegister?: Maybe<SuccessResponse>;
  workspaceUpdate?: Maybe<SystemWorkspaceUpdateResponse>;
};


export type SystemMutationApplicationDeleteArgs = {
  data: SystemApplicationDeleteMutationInput;
};


export type SystemMutationApplicationInstallArgs = {
  data: SystemApplicationInstallInput;
};


export type SystemMutationApplicationUpdateArgs = {
  data: SystemApplicationUpdateInput;
};


export type SystemMutationBillingDetailsUpdateArgs = {
  data: SystemBillingDetailsUpdateMutationInput;
};


export type SystemMutationBillingPlanUpdateArgs = {
  data: SystemBillingPlanUpdateMutationInput;
};


export type SystemMutationCiCommitArgs = {
  mode?: Maybe<SystemCiCommitMode>;
  build?: Maybe<Scalars['String']>;
};


export type SystemMutationDeployArgs = {
  data?: Maybe<SystemDeployingBuildInput>;
};


export type SystemMutationEnvironmentBackupArgs = {
  environmentName: Scalars['String'];
};


export type SystemMutationEnvironmentBranchArgs = {
  name: Scalars['String'];
  mode?: Maybe<SystemBranchEnvironmentMode>;
};


export type SystemMutationEnvironmentDeleteArgs = {
  environmentName: Scalars['String'];
};


export type SystemMutationEnvironmentDeleteAsyncArgs = {
  environmentName: Scalars['String'];
};


export type SystemMutationEnvironmentRestoreArgs = {
  environmentName: Scalars['String'];
  backup: Scalars['String'];
};


export type SystemMutationEnvironmentSetupArgs = {
  data?: Maybe<EnvironmentSetupInput>;
};


export type SystemMutationFieldCreateArgs = {
  data: SystemTableFieldCreateInput;
};


export type SystemMutationFieldDeleteArgs = {
  data: SystemTableFieldDeleteInput;
};


export type SystemMutationFieldUpdateArgs = {
  data: SystemTableFieldUpdateInput;
};


export type SystemMutationFieldUpdatePositionArgs = {
  data: SystemTableFieldPositionUpdateInput;
};


export type SystemMutationIndexCreateArgs = {
  data: SystemIndexCreateInput;
};


export type SystemMutationIndexDeleteArgs = {
  data: SystemIndexDeleteInput;
};


export type SystemMutationIndexUpdateArgs = {
  data: SystemIndexUpdateInput;
};


export type SystemMutationInvokeArgs = {
  data?: Maybe<SystemInvokeData>;
};


export type SystemMutationOrganizationInviteUserArgs = {
  organizationId: Scalars['String'];
  email: Scalars['String'];
  role: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};


export type SystemMutationOrganizationInviteUserAcceptArgs = {
  invitationId: Scalars['String'];
};


export type SystemMutationOrganizationInviteUserCancelArgs = {
  invitationId: Scalars['String'];
};


export type SystemMutationOrganizationUpdateArgs = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<SystemOrganizationTypeEnum>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<GraphQlCreateFileItemInput>;
};


export type SystemMutationOrganizationUserRemoveArgs = {
  organizationId: Scalars['String'];
  email: Scalars['String'];
};


export type SystemMutationOrganizationWorkspaceAddArgs = {
  organizationId: Scalars['String'];
  workspaceId: Scalars['String'];
};


export type SystemMutationOrganizationWorkspaceAddAcceptArgs = {
  sessionId: Scalars['String'];
};


export type SystemMutationOrganizationWorkspaceAddCancelArgs = {
  sessionId: Scalars['String'];
};


export type SystemMutationOrganizationWorkspaceRemoveArgs = {
  organizationId: Scalars['String'];
  workspaceId: Scalars['String'];
};


export type SystemMutationOrganizationWorkspaceUserRemoveArgs = {
  organizationId: Scalars['String'];
  workspaceId: Scalars['String'];
  email: Scalars['String'];
};


export type SystemMutationOrganizationWorkspaceUserShareArgs = {
  environments?: Maybe<Array<Maybe<SystemOrganizationWorkspaceUserShareInfo>>>;
  email: Scalars['String'];
};


export type SystemMutationTableCreateArgs = {
  data: SystemTableCreateInput;
};


export type SystemMutationTableDeleteArgs = {
  data: SystemTableDeleteInput;
};


export type SystemMutationTableUpdateArgs = {
  data: SystemTableUpdateInput;
};


export type SystemMutationViewCreateArgs = {
  data: SystemViewCreateInput;
};


export type SystemMutationViewUpdateArgs = {
  data: SystemViewUpdateInput;
};


export type SystemMutationWorkspaceCreateArgs = {
  data: SystemWorkspaceCreateMutationInput;
};


export type SystemMutationWorkspaceCreateAsyncArgs = {
  data: SystemWorkspaceCreateMutationInput;
};


export type SystemMutationWorkspaceDeleteArgs = {
  data: SystemWorkspaceDeleteMutationInput;
};


export type SystemMutationWorkspaceLeaveArgs = {
  force?: Maybe<Scalars['Boolean']>;
};


export type SystemMutationWorkspaceTransferAcceptArgs = {
  workspaceId: Scalars['String'];
};


export type SystemMutationWorkspaceTransferCancelArgs = {
  workspaceId: Scalars['String'];
};


export type SystemMutationWorkspaceTransferRegisterArgs = {
  owner: Scalars['String'];
  workspaceId: Scalars['String'];
};


export type SystemMutationWorkspaceUpdateArgs = {
  data: SystemWorkspaceUpdateMutationInput;
};

/** Number Field Attributes */
export type SystemNumberFieldTypeAttributes = {
  __typename?: 'SystemNumberFieldTypeAttributes';
  format: Scalars['String'];
  precision?: Maybe<Scalars['Int']>;
  currency?: Maybe<Scalars['String']>;
  minValue?: Maybe<Scalars['Float']>;
  maxValue?: Maybe<Scalars['Float']>;
  isBigInt?: Maybe<Scalars['Boolean']>;
  autoIncrement?: Maybe<Scalars['Boolean']>;
};

/** Number Type Format Enum */
export enum SystemNumberTypeFormatEnum {
  Number = 'NUMBER',
  Currency = 'CURRENCY',
  Percentage = 'PERCENTAGE',
  Fraction = 'FRACTION',
  Scientific = 'SCIENTIFIC'
}

export type SystemOrganizationBaseItem = {
  __typename?: 'SystemOrganizationBaseItem';
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<SystemOrganizationTypeEnum>;
  description?: Maybe<Scalars['String']>;
};

export type SystemOrganizationInvitation = {
  __typename?: 'SystemOrganizationInvitation';
  id: Scalars['ID'];
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  emailFrom: Scalars['String'];
  firstNameFrom?: Maybe<Scalars['String']>;
  lastNameFrom?: Maybe<Scalars['String']>;
  role: Scalars['String'];
  accepted?: Maybe<Scalars['Boolean']>;
  organization: SystemOrganizationBaseItem;
};

export type SystemOrganizationItem = {
  __typename?: 'SystemOrganizationItem';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<SystemOrganizationTypeEnum>;
  users?: Maybe<Array<Maybe<SystemOrganizationUserInfo>>>;
  image?: Maybe<SystemOrganizationItemImage>;
};

export type SystemOrganizationItemImage = {
  __typename?: 'SystemOrganizationItemImage';
  id?: Maybe<Scalars['String']>;
  downloadUrl?: Maybe<Scalars['String']>;
};

/** SystemOrganizationsListAllResponse output */
export type SystemOrganizationsListAllResponse = {
  __typename?: 'SystemOrganizationsListAllResponse';
  /** List items */
  items: Array<SystemOrganizationItem>;
  /** List items count */
  count: Scalars['Int'];
};

/** SystemOrganizationsListResponse output */
export type SystemOrganizationsListResponse = {
  __typename?: 'SystemOrganizationsListResponse';
  /** List items */
  items: Array<SystemOrganizationItem>;
  /** List items count */
  count: Scalars['Int'];
};

export enum SystemOrganizationTypeEnum {
  Agency = 'agency',
  Company = 'company',
  Community = 'community'
}

export type SystemOrganizationUserBaseInfo = {
  __typename?: 'SystemOrganizationUserBaseInfo';
  id: Scalars['String'];
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  role: Scalars['String'];
  status: Scalars['String'];
};

export type SystemOrganizationUserInfo = {
  __typename?: 'SystemOrganizationUserInfo';
  id: Scalars['String'];
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  role: Scalars['String'];
  status: Scalars['String'];
  avatar?: Maybe<GraphQlFileItemResponse>;
  workspaces?: Maybe<Array<Maybe<SystemOrganizationWorkspaceItem>>>;
};

export type SystemOrganizationWorkspaceAddSession = {
  __typename?: 'SystemOrganizationWorkspaceAddSession';
  user?: Maybe<SystemOrganizationUserBaseInfo>;
  workspace: SystemOrganizationWorkspaceItem;
  organization: SystemOrganizationBaseItem;
  status?: Maybe<Scalars['String']>;
};

export type SystemOrganizationWorkspaceItem = {
  __typename?: 'SystemOrganizationWorkspaceItem';
  id: Scalars['ID'];
  name: Scalars['String'];
  organization?: Maybe<SystemOrganizationBaseItem>;
};

export type SystemOrganizationWorkspaceUserShareInfo = {
  environmentId: Scalars['String'];
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Diff Environment Input */
export type SystemPlanEnvironmentOutput = {
  __typename?: 'SystemPlanEnvironmentOutput';
  url?: Maybe<Scalars['String']>;
};

export type SystemQuery = {
  __typename?: 'SystemQuery';
  application?: Maybe<SystemApplication>;
  applicationsList?: Maybe<SystemApplicationListResponse>;
  billingCurrentPlan?: Maybe<SystemBillingCurrentPlanResponse>;
  billingDetails?: Maybe<SystemBillingDetailsResponse>;
  billingInvoicesList: SystemBillingInvoicesListResponse;
  billingMetricUsageQuotasList: SystemBillingMetricUsageQuotasListResponse;
  billingMetricUsagesList: SystemBillingMetricUsagesListResponse;
  ciGenerate?: Maybe<SystemGenerateEnvironmentOutput>;
  /** @deprecated No longer supported. Use `ciGenerate` instead. */
  ciPlan?: Maybe<SystemPlanEnvironmentOutput>;
  ciStatus?: Maybe<SystemCiStatusOutput>;
  deployStatus: SystemDeployStatusResult;
  environmentBackupsList?: Maybe<SystemEnvironmentBackupListResponse>;
  environmentSettings?: Maybe<SystemEnvironmentSettings>;
  environmentsList?: Maybe<SystemEnvironmentsListResponse>;
  functionsList?: Maybe<SystemFunctionListResponse>;
  getEnvironmentRoles?: Maybe<Array<Maybe<SystemEnvironmentRoleList>>>;
  getWorkspaceTransferInfo?: Maybe<WorkspaceTransferItem>;
  introspection?: Maybe<IntrospectionQueryResponse>;
  /** @deprecated No longer supported. Use `system.logsList` instead. */
  logs?: Maybe<Array<Maybe<Scalars['String']>>>;
  logsList?: Maybe<Array<Maybe<SystemFunctionLogEntry>>>;
  organizationById?: Maybe<SystemOrganizationItem>;
  organizationInvitationById?: Maybe<SystemOrganizationInvitation>;
  organizationWorkspaceAddSession?: Maybe<SystemOrganizationWorkspaceAddSession>;
  organizationsListAll?: Maybe<SystemOrganizationsListAllResponse>;
  organizationsListByUser?: Maybe<SystemOrganizationsListResponse>;
  table?: Maybe<SystemTable>;
  tableField?: Maybe<SystemTableField>;
  tablesList: SystemTableListResponse;
  userBillingConfiguration: SystemUserBillingConfigurationResponse;
  workspacesList?: Maybe<SystemWorkspaceListResponse>;
};


export type SystemQueryApplicationArgs = {
  id: Scalars['String'];
};


export type SystemQueryBillingInvoicesListArgs = {
  by?: Maybe<SystemBillingInvoicesListFilterType>;
  limit?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type SystemQueryBillingMetricUsagesListArgs = {
  filter?: Maybe<SystemBillingMetricUsagesListFilter>;
};


export type SystemQueryCiGenerateArgs = {
  tables?: Maybe<Array<Scalars['String']>>;
  sourceEnvironmentId?: Maybe<Scalars['String']>;
  targetEnvironmentId?: Maybe<Scalars['String']>;
};


export type SystemQueryCiPlanArgs = {
  tables?: Maybe<Array<Scalars['String']>>;
  sourceEnvironmentId?: Maybe<Scalars['String']>;
  targetEnvironmentId?: Maybe<Scalars['String']>;
};


export type SystemQueryDeployStatusArgs = {
  buildName: Scalars['String'];
};


export type SystemQueryEnvironmentBackupsListArgs = {
  environmentName?: Maybe<Scalars['String']>;
};


export type SystemQueryFunctionsListArgs = {
  applicationId?: Maybe<Scalars['String']>;
  filter?: Maybe<SystemFunctionInfoFilter>;
  orderBy?: Maybe<Array<Maybe<SystemFunctionInfoOrderBy>>>;
};


export type SystemQueryGetEnvironmentRolesArgs = {
  workspaceId: Scalars['String'];
  email?: Maybe<Scalars['String']>;
};


export type SystemQueryGetWorkspaceTransferInfoArgs = {
  workspaceId: Scalars['String'];
};


export type SystemQueryLogsArgs = {
  functionName: Scalars['String'];
  applicationId?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  startTime?: Maybe<Scalars['DateTime']>;
  endTime?: Maybe<Scalars['DateTime']>;
};


export type SystemQueryLogsListArgs = {
  functionName: Scalars['String'];
  applicationId?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  startTime?: Maybe<Scalars['DateTime']>;
  endTime?: Maybe<Scalars['DateTime']>;
};


export type SystemQueryOrganizationByIdArgs = {
  organizationId: Scalars['String'];
};


export type SystemQueryOrganizationInvitationByIdArgs = {
  invitationId: Scalars['String'];
};


export type SystemQueryOrganizationWorkspaceAddSessionArgs = {
  sessionId: Scalars['String'];
};


export type SystemQueryTableArgs = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};


export type SystemQueryTableFieldArgs = {
  id: Scalars['ID'];
};


export type SystemQueryTablesListArgs = {
  filter?: Maybe<SystemTableListFilter>;
};

/** Relation */
export type SystemRelation = {
  __typename?: 'SystemRelation';
  refTable: SystemTable;
  refField?: Maybe<SystemTableField>;
  relationTableName?: Maybe<Scalars['String']>;
  relationFieldName?: Maybe<Scalars['String']>;
  refFieldName?: Maybe<Scalars['String']>;
  refFieldDisplayName?: Maybe<Scalars['String']>;
  refFieldIsList?: Maybe<Scalars['Boolean']>;
  refFieldIsRequired?: Maybe<Scalars['Boolean']>;
};

/** Relation Create Input */
export type SystemRelationCreateInput = {
  refTableId: Scalars['ID'];
  refFieldName?: Maybe<Scalars['String']>;
  refFieldDisplayName?: Maybe<Scalars['String']>;
  refFieldIsList: Scalars['Boolean'];
  refFieldIsRequired: Scalars['Boolean'];
};

/** Relation Update Input */
export type SystemRelationUpdateInput = {
  refTableId?: Maybe<Scalars['ID']>;
  refFieldName?: Maybe<Scalars['String']>;
  refFieldDisplayName?: Maybe<Scalars['String']>;
  refFieldIsList?: Maybe<Scalars['Boolean']>;
  refFieldIsRequired?: Maybe<Scalars['Boolean']>;
};

/** Schema Origin */
export type SystemSchemaOrigin = {
  __typename?: 'SystemSchemaOrigin';
  type: SystemSchemaOriginType;
  provider?: Maybe<Scalars['String']>;
};

/** Schema Origin Type Enum */
export enum SystemSchemaOriginType {
  Remote = 'REMOTE',
  Local = 'LOCAL',
  View = 'VIEW'
}

/** Smart Field Attributes */
export type SystemSmartFieldTypeAttributes = {
  __typename?: 'SystemSmartFieldTypeAttributes';
  format: Scalars['String'];
  innerFields?: Maybe<Array<Maybe<SystemCustomTableField>>>;
};

/** Smart Type Format Enum */
export enum SystemSmartTypeFormatEnum {
  Address = 'ADDRESS',
  Phone = 'PHONE'
}

/** Switch Field Attributes */
export type SystemSwitchFieldTypeAttributes = {
  __typename?: 'SystemSwitchFieldTypeAttributes';
  format: Scalars['String'];
  listOptions?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Switch Type Format Enum */
export enum SystemSwitchTypeFormatEnum {
  OnOff = 'ON_OFF',
  YesNo = 'YES_NO',
  TrueFalse = 'TRUE_FALSE',
  ActiveInactive = 'ACTIVE_INACTIVE',
  HighLow = 'HIGH_LOW',
  Custom = 'CUSTOM'
}

/** Table */
export type SystemTable = {
  __typename?: 'SystemTable';
  id: Scalars['ID'];
  application?: Maybe<SystemApplication>;
  isSystem: Scalars['Boolean'];
  name: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<SystemTableField>>;
  indexes?: Maybe<Array<SystemTableIndex>>;
  origin: SystemSchemaOrigin;
  schemaFeatures: SystemTableSchemaFeatures;
  dataFeatures: SystemTableDataFeatures;
  attributes?: Maybe<SystemTableAttributes>;
  description?: Maybe<Scalars['String']>;
};

/** Table Attributes */
export type SystemTableAttributes = SystemViewAttributes;

/** Table Create Input */
export type SystemTableCreateInput = {
  name: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  applicationId?: Maybe<Scalars['String']>;
};

/** Table Data Features */
export type SystemTableDataFeatures = {
  __typename?: 'SystemTableDataFeatures';
  create: Scalars['Boolean'];
  update: Scalars['Boolean'];
  delete: Scalars['Boolean'];
};

/** Table Delete Input */
export type SystemTableDeleteInput = {
  id: Scalars['ID'];
};

/** TableField */
export type SystemTableField = {
  __typename?: 'SystemTableField';
  id: Scalars['ID'];
  table: SystemTable;
  isSystem: Scalars['Boolean'];
  name: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  fieldType: SystemFieldType;
  origin: SystemSchemaOrigin;
  schemaFeatures: SystemFieldSchemaFeatures;
  dataFeatures: SystemFieldDataFeatures;
  isMeta: Scalars['Boolean'];
  isList: Scalars['Boolean'];
  isRequired: Scalars['Boolean'];
  isUnique?: Maybe<Scalars['Boolean']>;
  defaultValue?: Maybe<Scalars['String']>;
  computedMode?: Maybe<SystemComputedFieldMode>;
  expression?: Maybe<Scalars['String']>;
  fieldTypeAttributes?: Maybe<SystemFieldTypeAttributes>;
  relation?: Maybe<SystemRelation>;
};

/** Table Field Create Input */
export type SystemTableFieldCreateInput = {
  tableId: Scalars['ID'];
  force?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  fieldType: SystemFieldType;
  isList: Scalars['Boolean'];
  isRequired: Scalars['Boolean'];
  isUnique?: Maybe<Scalars['Boolean']>;
  defaultValue?: Maybe<Scalars['String']>;
  initialValue?: Maybe<Scalars['String']>;
  computedMode?: Maybe<SystemComputedFieldMode>;
  expression?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  fieldTypeAttributes?: Maybe<SystemFieldTypeAttributesInput>;
  relation?: Maybe<SystemRelationCreateInput>;
};

/** Table Field Delete Input */
export type SystemTableFieldDeleteInput = {
  id: Scalars['ID'];
};

/** Table Field Position Update Input */
export type SystemTableFieldPositionUpdateInput = {
  id: Scalars['ID'];
  newPosition: Scalars['Int'];
};

/** Table Field Update Input */
export type SystemTableFieldUpdateInput = {
  id: Scalars['ID'];
  force?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  fieldType?: Maybe<SystemFieldType>;
  isList?: Maybe<Scalars['Boolean']>;
  isRequired?: Maybe<Scalars['Boolean']>;
  isUnique?: Maybe<Scalars['Boolean']>;
  defaultValue?: Maybe<Scalars['String']>;
  initialValue?: Maybe<Scalars['String']>;
  computedMode?: Maybe<SystemComputedFieldMode>;
  expression?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  fieldTypeAttributes?: Maybe<SystemFieldTypeAttributesInput>;
  relation?: Maybe<SystemRelationUpdateInput>;
};

/** Table Index */
export type SystemTableIndex = {
  __typename?: 'SystemTableIndex';
  id: Scalars['ID'];
  table: SystemTable;
  type: Scalars['String'];
  columns?: Maybe<Array<SystemTableIndexColumn>>;
  name?: Maybe<Scalars['String']>;
  isSystem: Scalars['Boolean'];
};

/** Table Index Column */
export type SystemTableIndexColumn = {
  __typename?: 'SystemTableIndexColumn';
  name: Scalars['String'];
};

/** Table Index Column Input */
export type SystemTableIndexColumnInput = {
  name: Scalars['String'];
};

/** Table List Application Filter */
export type SystemTableListApplicationFilter = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** Table List Filter */
export type SystemTableListFilter = {
  applications?: Maybe<Array<Maybe<SystemTableListApplicationFilter>>>;
  onlyUserTables?: Maybe<Scalars['Boolean']>;
  tableNames?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Table List Response */
export type SystemTableListResponse = {
  __typename?: 'SystemTableListResponse';
  items?: Maybe<Array<Maybe<SystemTable>>>;
  count?: Maybe<Scalars['Int']>;
};

/** Table Schema Create Features */
export type SystemTableSchemaCreateFeatures = {
  __typename?: 'SystemTableSchemaCreateFeatures';
  ID: Scalars['Boolean'];
  UUID: Scalars['Boolean'];
  JSON: Scalars['Boolean'];
  NUMBER: Scalars['Boolean'];
  TEXT: Scalars['Boolean'];
  DATE: Scalars['Boolean'];
  SWITCH: Scalars['Boolean'];
  RELATION: Scalars['Boolean'];
  FILE: Scalars['Boolean'];
  SMART: Scalars['Boolean'];
  GEO: Scalars['Boolean'];
  ONE_WAY_RELATION: Scalars['Boolean'];
  MISSING_RELATION: Scalars['Boolean'];
};

/** Table Schema Features */
export type SystemTableSchemaFeatures = {
  __typename?: 'SystemTableSchemaFeatures';
  create: SystemTableSchemaCreateFeatures;
  update?: Maybe<SystemTableSchemaMetaFieldFeatures>;
  computedFields: Scalars['Boolean'];
};

/** Table Schema Meta Field Features */
export type SystemTableSchemaMetaFieldFeatures = {
  __typename?: 'SystemTableSchemaMetaFieldFeatures';
  name: Scalars['Boolean'];
  displayName: Scalars['Boolean'];
};

/** Table Update Input */
export type SystemTableUpdateInput = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

/** Text Field Attributes */
export type SystemTextFieldTypeAttributes = {
  __typename?: 'SystemTextFieldTypeAttributes';
  format: Scalars['String'];
  fieldSize?: Maybe<Scalars['Int']>;
};

/** Text Type Format Enum */
export enum SystemTextTypeFormatEnum {
  Unformatted = 'UNFORMATTED',
  Name = 'NAME',
  Ein = 'EIN',
  Email = 'EMAIL',
  Markdown = 'MARKDOWN',
  Html = 'HTML'
}

export type SystemUserAccountInfo = {
  __typename?: 'SystemUserAccountInfo';
  email: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  learningMode?: Maybe<Scalars['Boolean']>;
  permissions?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  isDeveloper?: Maybe<Scalars['Boolean']>;
  type?: Maybe<SystemUserType>;
  companyName?: Maybe<Scalars['String']>;
  projectDescription?: Maybe<Scalars['String']>;
  avatar?: Maybe<GraphQlFileItemResponse>;
};

export type SystemUserBillingConfigurationResponse = {
  __typename?: 'SystemUserBillingConfigurationResponse';
  isFreePlanAvailable: Scalars['Boolean'];
  isCancelSubscriptionAvailable: Scalars['Boolean'];
  availablePlans: Array<SystemBillingPlanBaseInfo>;
};

/** User Type */
export enum SystemUserType {
  Agency = 'Agency',
  MyOwn = 'MyOwn',
  Team = 'Team'
}

/** UUID Field Attributes */
export type SystemUuidFieldTypeAttributes = {
  __typename?: 'SystemUUIDFieldTypeAttributes';
  fieldSize?: Maybe<Scalars['Int']>;
};

/** View Attributes */
export type SystemViewAttributes = {
  __typename?: 'SystemViewAttributes';
  query?: Maybe<Scalars['String']>;
};

/** View Create Input */
export type SystemViewCreateInput = {
  name: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
  query: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

/** View Update Input */
export type SystemViewUpdateInput = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

/** WorkspaceCreateMutationInput */
export type SystemWorkspaceCreateMutationInput = {
  name: Scalars['String'];
  image?: Maybe<GraphQlCreateFileItemInput>;
  billingPlanId?: Maybe<Scalars['ID']>;
  organizationId?: Maybe<Scalars['ID']>;
};

export type SystemWorkspaceCreateResponse = {
  __typename?: 'SystemWorkspaceCreateResponse';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

/** WorkspaceDeleteMutationInput */
export type SystemWorkspaceDeleteMutationInput = {
  id: Scalars['ID'];
};

/** SystemWorkspaceListResponse output */
export type SystemWorkspaceListResponse = {
  __typename?: 'SystemWorkspaceListResponse';
  /** List items */
  items: Array<WorkspaceItem>;
  /** List items count */
  count: Scalars['Int'];
};

export enum SystemWorkspaceStatus {
  Active = 'active',
  Blocked = 'blocked',
  Canceled = 'canceled',
  Suspended = 'suspended',
  Canceling = 'canceling',
  Pending = 'pending'
}

/** WorkspaceUpdateMutationInput */
export type SystemWorkspaceUpdateMutationInput = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  image?: Maybe<GraphQlCreateFileItemInput>;
};

export type SystemWorkspaceUpdateResponse = {
  __typename?: 'SystemWorkspaceUpdateResponse';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  image?: Maybe<GraphQlFileItemResponse>;
};

/** Table */
export type Table = {
  __typename?: 'Table';
  id: Scalars['ID'];
  application?: Maybe<Application>;
  isSystem: Scalars['Boolean'];
  name: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<TableField>>;
  indexes?: Maybe<Array<TableIndex>>;
  origin: SchemaOrigin;
  schemaFeatures: TableSchemaFeatures;
  dataFeatures: TableDataFeatures;
  attributes?: Maybe<TableAttributes>;
  description?: Maybe<Scalars['String']>;
};

/** Table Attributes */
export type TableAttributes = ViewAttributes;

/** Table Create Input */
export type TableCreateInput = {
  name: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  applicationId?: Maybe<Scalars['String']>;
};

/** Table Data Features */
export type TableDataFeatures = {
  __typename?: 'TableDataFeatures';
  create: Scalars['Boolean'];
  update: Scalars['Boolean'];
  delete: Scalars['Boolean'];
};

/** Table Delete Input */
export type TableDeleteInput = {
  id: Scalars['ID'];
};

/** TableField */
export type TableField = {
  __typename?: 'TableField';
  id: Scalars['ID'];
  table: Table;
  isSystem: Scalars['Boolean'];
  name: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  fieldType: FieldType;
  origin: SchemaOrigin;
  schemaFeatures: FieldSchemaFeatures;
  dataFeatures: FieldDataFeatures;
  isMeta: Scalars['Boolean'];
  isList: Scalars['Boolean'];
  isRequired: Scalars['Boolean'];
  isUnique?: Maybe<Scalars['Boolean']>;
  defaultValue?: Maybe<Scalars['String']>;
  computedMode?: Maybe<ComputedFieldMode>;
  expression?: Maybe<Scalars['String']>;
  fieldTypeAttributes?: Maybe<FieldTypeAttributes>;
  relation?: Maybe<Relation>;
};

/** Table Field Create Input */
export type TableFieldCreateInput = {
  tableId: Scalars['ID'];
  force?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  fieldType: FieldType;
  isList: Scalars['Boolean'];
  isRequired: Scalars['Boolean'];
  isUnique?: Maybe<Scalars['Boolean']>;
  defaultValue?: Maybe<Scalars['String']>;
  initialValue?: Maybe<Scalars['String']>;
  computedMode?: Maybe<ComputedFieldMode>;
  expression?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  fieldTypeAttributes?: Maybe<FieldTypeAttributesInput>;
  relation?: Maybe<RelationCreateInput>;
};

/** Table Field Delete Input */
export type TableFieldDeleteInput = {
  id: Scalars['ID'];
};

/** Table Field Position Update Input */
export type TableFieldPositionUpdateInput = {
  id: Scalars['ID'];
  newPosition: Scalars['Int'];
};

/** Table Field Update Input */
export type TableFieldUpdateInput = {
  id: Scalars['ID'];
  force?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  fieldType?: Maybe<FieldType>;
  isList?: Maybe<Scalars['Boolean']>;
  isRequired?: Maybe<Scalars['Boolean']>;
  isUnique?: Maybe<Scalars['Boolean']>;
  defaultValue?: Maybe<Scalars['String']>;
  initialValue?: Maybe<Scalars['String']>;
  computedMode?: Maybe<ComputedFieldMode>;
  expression?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  fieldTypeAttributes?: Maybe<FieldTypeAttributesInput>;
  relation?: Maybe<RelationUpdateInput>;
};

/** Table Index */
export type TableIndex = {
  __typename?: 'TableIndex';
  id: Scalars['ID'];
  table: Table;
  type: Scalars['String'];
  columns?: Maybe<Array<TableIndexColumn>>;
  name?: Maybe<Scalars['String']>;
  isSystem: Scalars['Boolean'];
};

/** Table Index Column */
export type TableIndexColumn = {
  __typename?: 'TableIndexColumn';
  name: Scalars['String'];
};

/** Table Index Column Input */
export type TableIndexColumnInput = {
  name: Scalars['String'];
};

export enum TableIndexType {
  Index = 'INDEX',
  Unique = 'UNIQUE'
}

/** Table List Application Filter */
export type TableListApplicationFilter = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** Table List Filter */
export type TableListFilter = {
  applications?: Maybe<Array<Maybe<TableListApplicationFilter>>>;
  onlyUserTables?: Maybe<Scalars['Boolean']>;
  tableNames?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Table List Response */
export type TableListResponse = {
  __typename?: 'TableListResponse';
  items?: Maybe<Array<Maybe<Table>>>;
  count?: Maybe<Scalars['Int']>;
};

/** Table Schema Create Features */
export type TableSchemaCreateFeatures = {
  __typename?: 'TableSchemaCreateFeatures';
  ID: Scalars['Boolean'];
  UUID: Scalars['Boolean'];
  JSON: Scalars['Boolean'];
  NUMBER: Scalars['Boolean'];
  TEXT: Scalars['Boolean'];
  DATE: Scalars['Boolean'];
  SWITCH: Scalars['Boolean'];
  RELATION: Scalars['Boolean'];
  FILE: Scalars['Boolean'];
  SMART: Scalars['Boolean'];
  GEO: Scalars['Boolean'];
  ONE_WAY_RELATION: Scalars['Boolean'];
  MISSING_RELATION: Scalars['Boolean'];
};

/** Table Schema Features */
export type TableSchemaFeatures = {
  __typename?: 'TableSchemaFeatures';
  create: TableSchemaCreateFeatures;
  update?: Maybe<TableSchemaMetaFieldFeatures>;
  computedFields: Scalars['Boolean'];
};

/** Table Schema Meta Field Features */
export type TableSchemaMetaFieldFeatures = {
  __typename?: 'TableSchemaMetaFieldFeatures';
  name: Scalars['Boolean'];
  displayName: Scalars['Boolean'];
};

/** Table Update Input */
export type TableUpdateInput = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type TeamInvitation = {
  __typename?: 'TeamInvitation';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<User>;
  uuid?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  resentOn?: Maybe<Scalars['DateTime']>;
  accepted?: Maybe<Scalars['Boolean']>;
  acceptedOn?: Maybe<Scalars['DateTime']>;
  invitee?: Maybe<TeamMember>;
  invitedBy?: Maybe<TeamMember>;
  _description?: Maybe<Scalars['String']>;
};

export type TeamInvitation_PermissionFilter = {
  id?: Maybe<IdPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  deletedAt?: Maybe<IntPredicate>;
  uuid?: Maybe<StringPredicate>;
  email?: Maybe<StringPredicate>;
  firstName?: Maybe<StringPredicate>;
  lastName?: Maybe<StringPredicate>;
  resentOn?: Maybe<DateTimePredicate>;
  accepted?: Maybe<BoolPredicate>;
  acceptedOn?: Maybe<DateTimePredicate>;
  _fullText?: Maybe<Scalars['String']>;
  createdBy?: Maybe<User_PermissionFilter>;
  invitee?: Maybe<TeamMember_PermissionFilter>;
  invitedBy?: Maybe<TeamMember_PermissionFilter>;
  AND?: Maybe<Array<TeamInvitation_PermissionFilter>>;
  OR?: Maybe<Array<TeamInvitation_PermissionFilter>>;
};

export type TeamInvitation_PermissionRelationFilter = {
  some?: Maybe<TeamInvitation_PermissionFilter>;
  every?: Maybe<TeamInvitation_PermissionFilter>;
  none?: Maybe<TeamInvitation_PermissionFilter>;
};

/** TeamInvitationAcceptInput */
export type TeamInvitationAcceptInput = {
  uuid: Scalars['String'];
  accepted: Scalars['Boolean'];
};

/** TeamInvitationAcceptResponse */
export type TeamInvitationAcceptResponse = {
  __typename?: 'TeamInvitationAcceptResponse';
  success: Scalars['Boolean'];
};

/** Cancel team members invitations input */
export type TeamInvitationCancelInput = {
  memberId: Scalars['ID'];
};

/** TeamInvitations delete input */
export type TeamInvitationDeleteInput = {
  id?: Maybe<Scalars['ID']>;
  force?: Maybe<Scalars['Boolean']>;
};

/** Team Invitation Details */
export type TeamInvitationDetails = {
  __typename?: 'TeamInvitationDetails';
  uuid?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  isRegistered?: Maybe<Scalars['Boolean']>;
  invitedBy?: Maybe<InvitedByName>;
};

export type TeamInvitationFilter = {
  id?: Maybe<IdPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  deletedAt?: Maybe<IntPredicate>;
  uuid?: Maybe<StringPredicate>;
  email?: Maybe<StringPredicate>;
  firstName?: Maybe<StringPredicate>;
  lastName?: Maybe<StringPredicate>;
  resentOn?: Maybe<DateTimePredicate>;
  accepted?: Maybe<BoolPredicate>;
  acceptedOn?: Maybe<DateTimePredicate>;
  _fullText?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserFilter>;
  invitee?: Maybe<TeamMemberFilter>;
  invitedBy?: Maybe<TeamMemberFilter>;
  AND?: Maybe<Array<TeamInvitationFilter>>;
  OR?: Maybe<Array<TeamInvitationFilter>>;
};

export type TeamInvitationGroupBy = {
  query: TeamInvitationGroupByQuery;
  sort?: Maybe<Array<GroupBySort>>;
  having?: Maybe<Having>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type TeamInvitationGroupByQuery = {
  id?: Maybe<Array<GroupByField>>;
  createdAt?: Maybe<Array<GroupByField>>;
  updatedAt?: Maybe<Array<GroupByField>>;
  uuid?: Maybe<Array<GroupByField>>;
  email?: Maybe<Array<GroupByField>>;
  firstName?: Maybe<Array<GroupByField>>;
  lastName?: Maybe<Array<GroupByField>>;
  resentOn?: Maybe<Array<GroupByField>>;
  accepted?: Maybe<Array<GroupByField>>;
  acceptedOn?: Maybe<Array<GroupByField>>;
  createdBy?: Maybe<UserGroupByQuery>;
  invitee?: Maybe<TeamMemberGroupByQuery>;
  invitedBy?: Maybe<TeamMemberGroupByQuery>;
  _group?: Maybe<Array<GroupIdentifiersGroupByField>>;
};

export type TeamInvitationKeyFilter = {
  id?: Maybe<Scalars['ID']>;
  uuid?: Maybe<Scalars['String']>;
};

/** TeamInvitationListResponse output */
export type TeamInvitationListResponse = {
  __typename?: 'TeamInvitationListResponse';
  /** List items */
  items: Array<TeamInvitation>;
  /** List items count */
  count: Scalars['Int'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
};

/** No longer supported. Use `sort` instead. */
export enum TeamInvitationOrderBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  UuidAsc = 'uuid_ASC',
  UuidDesc = 'uuid_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  FirstNameAsc = 'firstName_ASC',
  FirstNameDesc = 'firstName_DESC',
  LastNameAsc = 'lastName_ASC',
  LastNameDesc = 'lastName_DESC',
  ResentOnAsc = 'resentOn_ASC',
  ResentOnDesc = 'resentOn_DESC',
  AcceptedAsc = 'accepted_ASC',
  AcceptedDesc = 'accepted_DESC',
  AcceptedOnAsc = 'acceptedOn_ASC',
  AcceptedOnDesc = 'acceptedOn_DESC'
}

/** TeamInvitations subscription payload */
export type TeamInvitationPayload = {
  __typename?: 'TeamInvitationPayload';
  mutation: MutationType;
  node?: Maybe<TeamInvitation>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
  previousValues?: Maybe<TeamInvitation>;
};

export type TeamInvitationRelationFilter = {
  some?: Maybe<TeamInvitationFilter>;
  every?: Maybe<TeamInvitationFilter>;
  none?: Maybe<TeamInvitationFilter>;
};

/** Resend team invitation input */
export type TeamInvitationResendInput = {
  memberId: Scalars['ID'];
};

/** Team Invitations Details List */
export type TeamInvitationsDetailsList = {
  __typename?: 'TeamInvitationsDetailsList';
  items?: Maybe<Array<Maybe<TeamInvitationDetails>>>;
  count?: Maybe<Scalars['Int']>;
};

export type TeamInvitationSort = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  deletedAt?: Maybe<SortOrder>;
  uuid?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  resentOn?: Maybe<SortOrder>;
  accepted?: Maybe<SortOrder>;
  acceptedOn?: Maybe<SortOrder>;
  createdBy?: Maybe<UserSort>;
  invitee?: Maybe<TeamMemberSort>;
  invitedBy?: Maybe<TeamMemberSort>;
};

/** TeamInvitations subscription filter */
export type TeamInvitationSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<TeamInvitationFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

export type TeamMember = {
  __typename?: 'TeamMember';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<User>;
  user?: Maybe<User>;
  status?: Maybe<Scalars['String']>;
  isOwner?: Maybe<Scalars['Boolean']>;
  avatar?: Maybe<File>;
  roles?: Maybe<RoleListResponse>;
  receivedTeamInvitations?: Maybe<TeamInvitationListResponse>;
  sentTeamInvitations?: Maybe<TeamInvitationListResponse>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  learningMode?: Maybe<Scalars['Boolean']>;
  permissions?: Maybe<UserPermissionList>;
  _description?: Maybe<Scalars['String']>;
};


export type TeamMemberRolesArgs = {
  filter?: Maybe<RoleFilter>;
  orderBy?: Maybe<Array<Maybe<RoleOrderBy>>>;
  sort?: Maybe<Array<RoleSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<RoleGroupBy>;
};


export type TeamMemberReceivedTeamInvitationsArgs = {
  filter?: Maybe<TeamInvitationFilter>;
  orderBy?: Maybe<Array<Maybe<TeamInvitationOrderBy>>>;
  sort?: Maybe<Array<TeamInvitationSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<TeamInvitationGroupBy>;
};


export type TeamMemberSentTeamInvitationsArgs = {
  filter?: Maybe<TeamInvitationFilter>;
  orderBy?: Maybe<Array<Maybe<TeamInvitationOrderBy>>>;
  sort?: Maybe<Array<TeamInvitationSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<TeamInvitationGroupBy>;
};


export type TeamMemberPermissionsArgs = {
  filter?: Maybe<PermissionInputFilter>;
};

export type TeamMember_PermissionFilter = {
  id?: Maybe<IdPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  deletedAt?: Maybe<IntPredicate>;
  status?: Maybe<StringPredicate>;
  isOwner?: Maybe<BoolPredicate>;
  _fullText?: Maybe<Scalars['String']>;
  is_self?: Maybe<Scalars['Boolean']>;
  not_self?: Maybe<Scalars['Boolean']>;
  createdBy?: Maybe<User_PermissionFilter>;
  user?: Maybe<User_PermissionFilter>;
  avatar?: Maybe<File_PermissionFilter>;
  roles?: Maybe<Role_PermissionRelationFilter>;
  receivedTeamInvitations?: Maybe<TeamInvitation_PermissionRelationFilter>;
  sentTeamInvitations?: Maybe<TeamInvitation_PermissionRelationFilter>;
  AND?: Maybe<Array<TeamMember_PermissionFilter>>;
  OR?: Maybe<Array<TeamMember_PermissionFilter>>;
};

export type TeamMember_PermissionRelationFilter = {
  some?: Maybe<TeamMember_PermissionFilter>;
  every?: Maybe<TeamMember_PermissionFilter>;
  none?: Maybe<TeamMember_PermissionFilter>;
};

/** TeamMembers delete input */
export type TeamMemberDeleteInput = {
  id?: Maybe<Scalars['ID']>;
  force?: Maybe<Scalars['Boolean']>;
};

export type TeamMemberFilter = {
  id?: Maybe<IdPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  deletedAt?: Maybe<IntPredicate>;
  status?: Maybe<StringPredicate>;
  isOwner?: Maybe<BoolPredicate>;
  _fullText?: Maybe<Scalars['String']>;
  is_self?: Maybe<Scalars['Boolean']>;
  not_self?: Maybe<Scalars['Boolean']>;
  createdBy?: Maybe<UserFilter>;
  user?: Maybe<UserFilter>;
  avatar?: Maybe<FileFilter>;
  roles?: Maybe<RoleRelationFilter>;
  receivedTeamInvitations?: Maybe<TeamInvitationRelationFilter>;
  sentTeamInvitations?: Maybe<TeamInvitationRelationFilter>;
  AND?: Maybe<Array<TeamMemberFilter>>;
  OR?: Maybe<Array<TeamMemberFilter>>;
};

export type TeamMemberGroupBy = {
  query: TeamMemberGroupByQuery;
  sort?: Maybe<Array<GroupBySort>>;
  having?: Maybe<Having>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type TeamMemberGroupByQuery = {
  id?: Maybe<Array<GroupByField>>;
  createdAt?: Maybe<Array<GroupByField>>;
  updatedAt?: Maybe<Array<GroupByField>>;
  status?: Maybe<Array<GroupByField>>;
  isOwner?: Maybe<Array<GroupByField>>;
  createdBy?: Maybe<UserGroupByQuery>;
  user?: Maybe<UserGroupByQuery>;
  avatar?: Maybe<FileGroupByQuery>;
  roles?: Maybe<RoleGroupByQuery>;
  receivedTeamInvitations?: Maybe<TeamInvitationGroupByQuery>;
  sentTeamInvitations?: Maybe<TeamInvitationGroupByQuery>;
  _group?: Maybe<Array<GroupIdentifiersGroupByField>>;
};

export type TeamMemberKeyFilter = {
  id?: Maybe<Scalars['ID']>;
};

/** TeamMemberListResponse output */
export type TeamMemberListResponse = {
  __typename?: 'TeamMemberListResponse';
  /** List items */
  items: Array<TeamMember>;
  /** List items count */
  count: Scalars['Int'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
};

/** TeamMemberManyResponse output */
export type TeamMemberManyResponse = {
  __typename?: 'TeamMemberManyResponse';
  /** List items */
  items: Array<TeamMember>;
  /** List items count */
  count: Scalars['Int'];
};

/** No longer supported. Use `sort` instead. */
export enum TeamMemberOrderBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  IsOwnerAsc = 'isOwner_ASC',
  IsOwnerDesc = 'isOwner_DESC'
}

/** TeamMembers subscription payload */
export type TeamMemberPayload = {
  __typename?: 'TeamMemberPayload';
  mutation: MutationType;
  node?: Maybe<TeamMember>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
  previousValues?: Maybe<TeamMember>;
};

export type TeamMemberRelationFilter = {
  some?: Maybe<TeamMemberFilter>;
  every?: Maybe<TeamMemberFilter>;
  none?: Maybe<TeamMemberFilter>;
};

/** Files create input from teamMembers_avatar */
export type TeamMembers_Avatar_FileCreateInput = {
  fileId?: Maybe<Scalars['String']>;
  public?: Maybe<Scalars['Boolean']>;
  filename?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
  mods?: Maybe<Scalars['JSON']>;
  users_avatar?: Maybe<FilesUsers_AvatarRelationInput>;
  teamMembers_avatar?: Maybe<FilesTeamMembers_AvatarRelationInput>;
  products_image?: Maybe<FilesProducts_ImageRelationInput>;
};

/** Files update input from teamMembers_avatar */
export type TeamMembers_Avatar_FileUpdateInput = {
  fileId?: Maybe<Scalars['String']>;
  public?: Maybe<Scalars['Boolean']>;
  filename?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
  mods?: Maybe<Scalars['JSON']>;
  users_avatar?: Maybe<FilesUsers_AvatarUpdateRelationInput>;
  teamMembers_avatar?: Maybe<FilesTeamMembers_AvatarUpdateRelationInput>;
  products_image?: Maybe<FilesProducts_ImageUpdateRelationInput>;
};

/** Roles create input from teamMembers */
export type TeamMembers_RoleCreateInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  users?: Maybe<RolesUsersRelationInput>;
  permissions?: Maybe<PermissionsInput>;
  apiTokens?: Maybe<RolesApiTokensRelationInput>;
  authenticationProfiles?: Maybe<RolesAuthenticationProfilesRelationInput>;
  teamMembers?: Maybe<RolesTeamMembersRelationInput>;
};

/** Roles update input from teamMembers */
export type TeamMembers_RoleUpdateInput = {
  filter?: Maybe<RoleKeyFilter>;
  data: RoleUpdateInput;
};

/** TeamMembers relation input */
export type TeamMembersAvatarUpdateRelationInput = {
  connect?: Maybe<FileKeyFilter>;
  disconnect?: Maybe<FileKeyFilter>;
  reconnect?: Maybe<FileKeyFilter>;
  create?: Maybe<TeamMembers_Avatar_FileCreateInput>;
  update?: Maybe<TeamMembers_Avatar_FileUpdateInput>;
};

export type TeamMemberSort = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  deletedAt?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
  isOwner?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  createdBy?: Maybe<UserSort>;
  user?: Maybe<UserSort>;
  avatar?: Maybe<FileSort>;
};

/** TeamMembers relation input */
export type TeamMembersReceivedTeamInvitationsUpdateRelationInput = {
  connect?: Maybe<Array<TeamInvitationKeyFilter>>;
  disconnect?: Maybe<Array<TeamInvitationKeyFilter>>;
  reconnect?: Maybe<Array<TeamInvitationKeyFilter>>;
};

/** TeamMembers relation input */
export type TeamMembersRolesUpdateRelationInput = {
  connect?: Maybe<Array<RoleKeyFilter>>;
  disconnect?: Maybe<Array<RoleKeyFilter>>;
  reconnect?: Maybe<Array<RoleKeyFilter>>;
  create?: Maybe<Array<Maybe<TeamMembers_RoleCreateInput>>>;
  update?: Maybe<Array<Maybe<TeamMembers_RoleUpdateInput>>>;
};

/** TeamMembers relation input */
export type TeamMembersSentTeamInvitationsUpdateRelationInput = {
  connect?: Maybe<Array<TeamInvitationKeyFilter>>;
  disconnect?: Maybe<Array<TeamInvitationKeyFilter>>;
  reconnect?: Maybe<Array<TeamInvitationKeyFilter>>;
};

/** TeamMembers subscription filter */
export type TeamMemberSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<TeamMemberFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

/** TeamMembers update input */
export type TeamMemberUpdateByFilterInput = {
  status?: Maybe<Array<Maybe<UpdateByFilterStringSwitchInput>>>;
  isOwner?: Maybe<Array<Maybe<UpdateByFilterBooleanSwitchInput>>>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  learningMode?: Maybe<Scalars['Boolean']>;
};

/** TeamMembers update input */
export type TeamMemberUpdateInput = {
  id?: Maybe<Scalars['ID']>;
  avatar?: Maybe<TeamMembersAvatarUpdateRelationInput>;
  roles?: Maybe<TeamMembersRolesUpdateRelationInput>;
  receivedTeamInvitations?: Maybe<TeamMembersReceivedTeamInvitationsUpdateRelationInput>;
  sentTeamInvitations?: Maybe<TeamMembersSentTeamInvitationsUpdateRelationInput>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  learningMode?: Maybe<Scalars['Boolean']>;
};

/** Text Field Attributes */
export type TextFieldTypeAttributes = {
  __typename?: 'TextFieldTypeAttributes';
  format: Scalars['String'];
  fieldSize?: Maybe<Scalars['Int']>;
};

/** Text Type Format Enum */
export enum TextTypeFormatEnum {
  Unformatted = 'UNFORMATTED',
  Name = 'NAME',
  Ein = 'EIN',
  Email = 'EMAIL',
  Markdown = 'MARKDOWN',
  Html = 'HTML'
}


export type TrimFunctionArguments = {
  str: Scalars['String'];
  mode?: Maybe<StringTrimMode>;
};

export type UpdateByFilterBooleanSwitchInput = {
  set?: Maybe<Scalars['Boolean']>;
  invert?: Maybe<Scalars['Boolean']>;
};

export type UpdateByFilterIntInput = {
  add?: Maybe<Scalars['Int']>;
  sub?: Maybe<Scalars['Int']>;
  mult?: Maybe<Scalars['Int']>;
  div?: Maybe<Scalars['Int']>;
  mod?: Maybe<Scalars['Int']>;
  set?: Maybe<Scalars['Int']>;
  pow?: Maybe<Scalars['Int']>;
  sqrt?: Maybe<Scalars['Boolean']>;
  prec?: Maybe<Scalars['Int']>;
};

export type UpdateByFilterJsonInput = {
  set?: Maybe<Scalars['JSON']>;
};

export type UpdateByFilterListStringInput = {
  set?: Maybe<Array<Maybe<Scalars['String']>>>;
  push?: Maybe<Array<Maybe<Scalars['String']>>>;
  unshift?: Maybe<Array<Maybe<Scalars['String']>>>;
  insert?: Maybe<UpdateByFilterListStringInsertOperationInput>;
  remove?: Maybe<Array<Maybe<Scalars['Int']>>>;
  removeValue?: Maybe<Scalars['String']>;
  swap?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type UpdateByFilterListStringInsertOperationInput = {
  start: Scalars['Int'];
  values: Array<Scalars['String']>;
};

export type UpdateByFilterStringInput = {
  prefix?: Maybe<Scalars['String']>;
  postfix?: Maybe<Scalars['String']>;
  set?: Maybe<Scalars['String']>;
};

export type UpdateByFilterStringSwitchInput = {
  set?: Maybe<Scalars['String']>;
};

/** UpdatedFieldsFilter */
export type UpdatedFieldsFilter = {
  contains?: Maybe<Array<Maybe<Scalars['String']>>>;
  every?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['Int']>;
  createdBy?: Maybe<User>;
  email?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  origin?: Maybe<Scalars['String']>;
  is8base?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  avatar?: Maybe<File>;
  roles?: Maybe<RoleListResponse>;
  customer?: Maybe<Customer>;
  invitation?: Maybe<Invitation>;
  learningMode?: Maybe<Scalars['Boolean']>;
  permissions?: Maybe<UserPermissionList>;
  _description?: Maybe<Scalars['String']>;
};


export type UserRolesArgs = {
  filter?: Maybe<RoleFilter>;
  orderBy?: Maybe<Array<Maybe<RoleOrderBy>>>;
  sort?: Maybe<Array<RoleSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<RoleGroupBy>;
};


export type UserPermissionsArgs = {
  filter?: Maybe<PermissionInputFilter>;
};

/** Customers create input from user */
export type User_CustomerCreateInput = {
  user?: Maybe<CustomersUserRelationInput>;
  orders?: Maybe<CustomersOrdersRelationInput>;
};

/** Customers update input from user */
export type User_CustomerUpdateInput = {
  user?: Maybe<CustomersUserUpdateRelationInput>;
  orders?: Maybe<CustomersOrdersUpdateRelationInput>;
};

export type User_PermissionFilter = {
  id?: Maybe<IdPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  deletedAt?: Maybe<IntPredicate>;
  email?: Maybe<StringPredicate>;
  status?: Maybe<StringPredicate>;
  origin?: Maybe<StringPredicate>;
  is8base?: Maybe<BoolPredicate>;
  firstName?: Maybe<StringPredicate>;
  lastName?: Maybe<StringPredicate>;
  timezone?: Maybe<StringPredicate>;
  _fullText?: Maybe<Scalars['String']>;
  is_self?: Maybe<Scalars['Boolean']>;
  not_self?: Maybe<Scalars['Boolean']>;
  createdBy?: Maybe<User_PermissionFilter>;
  avatar?: Maybe<File_PermissionFilter>;
  roles?: Maybe<Role_PermissionRelationFilter>;
  customer?: Maybe<Customer_PermissionFilter>;
  invitation?: Maybe<Invitation_PermissionFilter>;
  AND?: Maybe<Array<User_PermissionFilter>>;
  OR?: Maybe<Array<User_PermissionFilter>>;
};

export type User_PermissionRelationFilter = {
  some?: Maybe<User_PermissionFilter>;
  every?: Maybe<User_PermissionFilter>;
  none?: Maybe<User_PermissionFilter>;
};

export type UserBillingConfigurationResponse = {
  __typename?: 'UserBillingConfigurationResponse';
  isFreePlanAvailable: Scalars['Boolean'];
  isCancelSubscriptionAvailable: Scalars['Boolean'];
  availablePlans: Array<BillingPlanBaseInfo>;
};

/** Users create input */
export type UserCreateInput = {
  email: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  avatar?: Maybe<UsersAvatarRelationInput>;
  roles?: Maybe<UsersRolesRelationInput>;
  customer?: Maybe<UsersCustomerRelationInput>;
  invitation?: Maybe<UsersInvitationRelationInput>;
};

/** Users create many input */
export type UserCreateManyInput = {
  email: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  avatar?: Maybe<UsersAvatarManyRelationInput>;
  roles?: Maybe<UsersRolesManyRelationInput>;
  customer?: Maybe<UsersCustomerManyRelationInput>;
  invitation?: Maybe<UsersInvitationManyRelationInput>;
};

/** Users delete input */
export type UserDeleteInput = {
  id?: Maybe<Scalars['ID']>;
  force?: Maybe<Scalars['Boolean']>;
};

/** UserFieldsPermissions create input */
export type UserFieldsPermissions = {
  createdAt?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['Boolean']>;
  origin?: Maybe<Scalars['Boolean']>;
  is8base?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['Boolean']>;
  timezone?: Maybe<Scalars['Boolean']>;
};

export type UserFilter = {
  id?: Maybe<IdPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  deletedAt?: Maybe<IntPredicate>;
  email?: Maybe<StringPredicate>;
  status?: Maybe<StringPredicate>;
  origin?: Maybe<StringPredicate>;
  is8base?: Maybe<BoolPredicate>;
  firstName?: Maybe<StringPredicate>;
  lastName?: Maybe<StringPredicate>;
  timezone?: Maybe<StringPredicate>;
  _fullText?: Maybe<Scalars['String']>;
  is_self?: Maybe<Scalars['Boolean']>;
  not_self?: Maybe<Scalars['Boolean']>;
  createdBy?: Maybe<UserFilter>;
  avatar?: Maybe<FileFilter>;
  roles?: Maybe<RoleRelationFilter>;
  customer?: Maybe<CustomerFilter>;
  invitation?: Maybe<InvitationFilter>;
  AND?: Maybe<Array<UserFilter>>;
  OR?: Maybe<Array<UserFilter>>;
};

export type UserGroupBy = {
  query: UserGroupByQuery;
  sort?: Maybe<Array<GroupBySort>>;
  having?: Maybe<Having>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type UserGroupByQuery = {
  id?: Maybe<Array<GroupByField>>;
  createdAt?: Maybe<Array<GroupByField>>;
  updatedAt?: Maybe<Array<GroupByField>>;
  email?: Maybe<Array<GroupByField>>;
  status?: Maybe<Array<GroupByField>>;
  origin?: Maybe<Array<GroupByField>>;
  is8base?: Maybe<Array<GroupByField>>;
  firstName?: Maybe<Array<GroupByField>>;
  lastName?: Maybe<Array<GroupByField>>;
  timezone?: Maybe<Array<GroupByField>>;
  createdBy?: Maybe<UserGroupByQuery>;
  avatar?: Maybe<FileGroupByQuery>;
  roles?: Maybe<RoleGroupByQuery>;
  customer?: Maybe<CustomerGroupByQuery>;
  invitation?: Maybe<InvitationGroupByQuery>;
  _group?: Maybe<Array<GroupIdentifiersGroupByField>>;
};

/** Invitation Details */
export type UserInvitationDetails = {
  __typename?: 'UserInvitationDetails';
  uuid?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  isRegistered?: Maybe<Scalars['Boolean']>;
  invitedBy?: Maybe<InvitedByName>;
};

/** User Invitation List */
export type UserInvitationList = {
  __typename?: 'UserInvitationList';
  items?: Maybe<Array<Maybe<UserInvitationDetails>>>;
  count?: Maybe<Scalars['Int']>;
};

export type UserKeyFilter = {
  id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
};

/** UserListResponse output */
export type UserListResponse = {
  __typename?: 'UserListResponse';
  /** List items */
  items: Array<User>;
  /** List items count */
  count: Scalars['Int'];
  /** Aggregated items */
  groups: Array<GroupByResponse>;
};

/** UserLoginInput */
export type UserLoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  fromInvitation?: Maybe<Scalars['String']>;
  authProfileId?: Maybe<Scalars['ID']>;
};

/** UserManyResponse output */
export type UserManyResponse = {
  __typename?: 'UserManyResponse';
  /** List items */
  items: Array<User>;
  /** List items count */
  count: Scalars['Int'];
};

/** No longer supported. Use `sort` instead. */
export enum UserOrderBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  OriginAsc = 'origin_ASC',
  OriginDesc = 'origin_DESC',
  IsOwnerAsc = 'isOwner_ASC',
  IsOwnerDesc = 'isOwner_DESC',
  Is8baseAsc = 'is8base_ASC',
  Is8baseDesc = 'is8base_DESC',
  FirstNameAsc = 'firstName_ASC',
  FirstNameDesc = 'firstName_DESC',
  LastNameAsc = 'lastName_ASC',
  LastNameDesc = 'lastName_DESC',
  TimezoneAsc = 'timezone_ASC',
  TimezoneDesc = 'timezone_DESC'
}

/** Users subscription payload */
export type UserPayload = {
  __typename?: 'UserPayload';
  mutation: MutationType;
  node?: Maybe<User>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
  previousValues?: Maybe<User>;
};

/** User Permission */
export type UserPermission = {
  __typename?: 'UserPermission';
  resourceType?: Maybe<Scalars['String']>;
  resource?: Maybe<Scalars['String']>;
  permission?: Maybe<Scalars['JSON']>;
};

/** User Permission List */
export type UserPermissionList = {
  __typename?: 'UserPermissionList';
  items?: Maybe<Array<UserPermission>>;
  count: Scalars['Int'];
};

export type UserRelationFilter = {
  some?: Maybe<UserFilter>;
  every?: Maybe<UserFilter>;
  none?: Maybe<UserFilter>;
};

/** Files create input from users_avatar */
export type Users_Avatar_FileCreateInput = {
  fileId?: Maybe<Scalars['String']>;
  public?: Maybe<Scalars['Boolean']>;
  filename?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
  mods?: Maybe<Scalars['JSON']>;
  users_avatar?: Maybe<FilesUsers_AvatarRelationInput>;
  teamMembers_avatar?: Maybe<FilesTeamMembers_AvatarRelationInput>;
  products_image?: Maybe<FilesProducts_ImageRelationInput>;
};

/** Files update input from users_avatar */
export type Users_Avatar_FileUpdateInput = {
  fileId?: Maybe<Scalars['String']>;
  public?: Maybe<Scalars['Boolean']>;
  filename?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
  mods?: Maybe<Scalars['JSON']>;
  users_avatar?: Maybe<FilesUsers_AvatarUpdateRelationInput>;
  teamMembers_avatar?: Maybe<FilesTeamMembers_AvatarUpdateRelationInput>;
  products_image?: Maybe<FilesProducts_ImageUpdateRelationInput>;
};

/** Roles create input from users */
export type Users_RoleCreateInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  users?: Maybe<RolesUsersRelationInput>;
  permissions?: Maybe<PermissionsInput>;
  apiTokens?: Maybe<RolesApiTokensRelationInput>;
  authenticationProfiles?: Maybe<RolesAuthenticationProfilesRelationInput>;
  teamMembers?: Maybe<RolesTeamMembersRelationInput>;
};

/** Roles update input from users */
export type Users_RoleUpdateInput = {
  filter?: Maybe<RoleKeyFilter>;
  data: RoleUpdateInput;
};

/** Users relation input */
export type UsersAvatarManyRelationInput = {
  connect?: Maybe<FileKeyFilter>;
};

/** Users relation input */
export type UsersAvatarRelationInput = {
  connect?: Maybe<FileKeyFilter>;
  create?: Maybe<Users_Avatar_FileCreateInput>;
};

/** Users relation input */
export type UsersAvatarUpdateRelationInput = {
  connect?: Maybe<FileKeyFilter>;
  disconnect?: Maybe<FileKeyFilter>;
  reconnect?: Maybe<FileKeyFilter>;
  create?: Maybe<Users_Avatar_FileCreateInput>;
  update?: Maybe<Users_Avatar_FileUpdateInput>;
};

/** Users relation input */
export type UsersCustomerManyRelationInput = {
  connect?: Maybe<CustomerKeyFilter>;
};

/** Users relation input */
export type UsersCustomerRelationInput = {
  connect?: Maybe<CustomerKeyFilter>;
  create?: Maybe<User_CustomerCreateInput>;
};

/** Users relation input */
export type UsersCustomerUpdateRelationInput = {
  connect?: Maybe<CustomerKeyFilter>;
  disconnect?: Maybe<CustomerKeyFilter>;
  reconnect?: Maybe<CustomerKeyFilter>;
  create?: Maybe<User_CustomerCreateInput>;
  update?: Maybe<User_CustomerUpdateInput>;
};

/** Users relation input */
export type UsersInvitationManyRelationInput = {
  connect?: Maybe<InvitationKeyFilter>;
};

/** Users relation input */
export type UsersInvitationRelationInput = {
  connect?: Maybe<InvitationKeyFilter>;
  create?: Maybe<InvitedUser_InvitationCreateInput>;
};

/** Users relation input */
export type UsersInvitationUpdateRelationInput = {
  connect?: Maybe<InvitationKeyFilter>;
  disconnect?: Maybe<InvitationKeyFilter>;
  reconnect?: Maybe<InvitationKeyFilter>;
  create?: Maybe<InvitedUser_InvitationCreateInput>;
  update?: Maybe<InvitedUser_InvitationUpdateInput>;
};

export type UserSort = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  deletedAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
  origin?: Maybe<SortOrder>;
  is8base?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  timezone?: Maybe<SortOrder>;
  createdBy?: Maybe<UserSort>;
  avatar?: Maybe<FileSort>;
  customer?: Maybe<CustomerSort>;
  invitation?: Maybe<InvitationSort>;
};

/** Users relation input */
export type UsersRolesManyRelationInput = {
  connect?: Maybe<Array<RoleKeyFilter>>;
};

/** Users relation input */
export type UsersRolesRelationInput = {
  connect?: Maybe<Array<RoleKeyFilter>>;
  create?: Maybe<Array<Maybe<Users_RoleCreateInput>>>;
};

/** Users relation input */
export type UsersRolesUpdateRelationInput = {
  connect?: Maybe<Array<RoleKeyFilter>>;
  disconnect?: Maybe<Array<RoleKeyFilter>>;
  reconnect?: Maybe<Array<RoleKeyFilter>>;
  create?: Maybe<Array<Maybe<Users_RoleCreateInput>>>;
  update?: Maybe<Array<Maybe<Users_RoleUpdateInput>>>;
};

/** Users subscription filter */
export type UserSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<UserFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

/** Users update input */
export type UserUpdateByFilterInput = {
  email?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  status?: Maybe<Array<Maybe<UpdateByFilterStringSwitchInput>>>;
  origin?: Maybe<Array<Maybe<UpdateByFilterStringSwitchInput>>>;
  isOwner?: Maybe<Array<Maybe<UpdateByFilterBooleanSwitchInput>>>;
  is8base?: Maybe<Array<Maybe<UpdateByFilterBooleanSwitchInput>>>;
  firstName?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  lastName?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
  timezone?: Maybe<Array<Maybe<UpdateByFilterStringInput>>>;
};

/** Users update input */
export type UserUpdateInput = {
  id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  avatar?: Maybe<UsersAvatarUpdateRelationInput>;
  roles?: Maybe<UsersRolesUpdateRelationInput>;
  customer?: Maybe<UsersCustomerUpdateRelationInput>;
  invitation?: Maybe<UsersInvitationUpdateRelationInput>;
};

/** UUID Field Attributes */
export type UuidFieldTypeAttributes = {
  __typename?: 'UUIDFieldTypeAttributes';
  fieldSize?: Maybe<Scalars['Int']>;
};

/** VerificationEmailResendInput */
export type VerificationEmailResendInput = {
  email: Scalars['String'];
};

/** View Attributes */
export type ViewAttributes = {
  __typename?: 'ViewAttributes';
  query?: Maybe<Scalars['String']>;
};

/** View Create Input */
export type ViewCreateInput = {
  name: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
  query: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

/** View Update Input */
export type ViewUpdateInput = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

/** WorkspaceCreateMutationInput */
export type WorkspaceCreateMutationInput = {
  name: Scalars['String'];
  image?: Maybe<GraphQlCreateFileItemInput>;
  billingPlanId?: Maybe<Scalars['ID']>;
  organizationId?: Maybe<Scalars['ID']>;
};

export type WorkspaceCreateResponse = {
  __typename?: 'WorkspaceCreateResponse';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

/** WorkspaceDeleteMutationInput */
export type WorkspaceDeleteMutationInput = {
  id: Scalars['ID'];
};

export type WorkspaceImage = {
  __typename?: 'WorkspaceImage';
  id?: Maybe<Scalars['String']>;
  downloadUrl?: Maybe<Scalars['String']>;
};

/** LoginResponseWorkspace name and id */
export type WorkspaceInfo = {
  __typename?: 'WorkspaceInfo';
  workspace?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type WorkspaceItem = {
  __typename?: 'WorkspaceItem';
  id: Scalars['ID'];
  name: Scalars['String'];
  isOwner: Scalars['Boolean'];
  plan?: Maybe<BillingCurrentPlanResponse>;
  nextPlan?: Maybe<BillingNextPlanResponse>;
  lastAccess?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  teamMemberCount?: Maybe<Scalars['Int']>;
  region?: Maybe<Scalars['String']>;
  owner?: Maybe<SystemUserAccountInfo>;
  image?: Maybe<WorkspaceImage>;
  isCiCdEnabled?: Maybe<Scalars['Boolean']>;
  apiHost?: Maybe<Scalars['String']>;
  organization?: Maybe<SystemOrganizationBaseItem>;
};

/** WorkspaceListResponse output */
export type WorkspaceListResponse = {
  __typename?: 'WorkspaceListResponse';
  /** List items */
  items: Array<WorkspaceItem>;
  /** List items count */
  count: Scalars['Int'];
};

export enum WorkspaceStatus {
  Active = 'active',
  Blocked = 'blocked',
  Canceled = 'canceled',
  Suspended = 'suspended',
  Canceling = 'canceling',
  Pending = 'pending'
}

export type WorkspaceTransferItem = {
  __typename?: 'WorkspaceTransferItem';
  workspaceId: Scalars['String'];
  workspaceName: Scalars['String'];
  ownerEmail: Scalars['String'];
  ownerFirstName?: Maybe<Scalars['String']>;
  ownerLastName?: Maybe<Scalars['String']>;
  newOwnerEmail: Scalars['String'];
  newOwnerFirstName?: Maybe<Scalars['String']>;
  newOwnerLastName?: Maybe<Scalars['String']>;
  status: Scalars['String'];
};

/** WorkspaceUpdateMutationInput */
export type WorkspaceUpdateMutationInput = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  image?: Maybe<GraphQlCreateFileItemInput>;
};

export type WorkspaceUpdateResponse = {
  __typename?: 'WorkspaceUpdateResponse';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  image?: Maybe<GraphQlFileItemResponse>;
};
