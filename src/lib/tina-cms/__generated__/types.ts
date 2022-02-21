import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  JSON: any;
  /** References another document, used as a foreign key */
  Reference: any;
};

export type Collection = {
  __typename?: 'Collection';
  documents: DocumentConnection;
  fields?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  format?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  matches?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  path: Scalars['String'];
  slug: Scalars['String'];
  templates?: Maybe<Array<Maybe<Scalars['JSON']>>>;
};


export type CollectionDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
};

/** A relay-compliant pagination connection */
export type Connection = {
  totalCount: Scalars['Float'];
};

export type Document = {
  form: Scalars['JSON'];
  id: Scalars['ID'];
  sys?: Maybe<SystemInfo>;
  values: Scalars['JSON'];
};

export type DocumentConnection = Connection & {
  __typename?: 'DocumentConnection';
  edges?: Maybe<Array<Maybe<DocumentConnectionEdges>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Float'];
};

export type DocumentConnectionEdges = {
  __typename?: 'DocumentConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<DocumentNode>;
};

export type DocumentMutation = {
  legal?: InputMaybe<LegalMutation>;
  page?: InputMaybe<PageMutation>;
};

export type DocumentNode = LegalDocument | PageDocument;

export type Legal = {
  __typename?: 'Legal';
  body?: Maybe<Scalars['JSON']>;
  hero?: Maybe<LegalHero>;
  seo_data?: Maybe<LegalSeo_Data>;
};

export type LegalConnection = Connection & {
  __typename?: 'LegalConnection';
  edges?: Maybe<Array<Maybe<LegalConnectionEdges>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Float'];
};

export type LegalConnectionEdges = {
  __typename?: 'LegalConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<LegalDocument>;
};

export type LegalDocument = Document & Node & {
  __typename?: 'LegalDocument';
  data: Legal;
  dataJSON: Scalars['JSON'];
  form: Scalars['JSON'];
  id: Scalars['ID'];
  sys: SystemInfo;
  values: Scalars['JSON'];
};

export type LegalHero = {
  __typename?: 'LegalHero';
  hero_description?: Maybe<Scalars['String']>;
  hero_heading?: Maybe<Scalars['String']>;
};

export type LegalHeroMutation = {
  hero_description?: InputMaybe<Scalars['String']>;
  hero_heading?: InputMaybe<Scalars['String']>;
};

export type LegalMutation = {
  body?: InputMaybe<Scalars['JSON']>;
  hero?: InputMaybe<LegalHeroMutation>;
  seo_data?: InputMaybe<LegalSeo_DataMutation>;
};

export type LegalSeo_Data = {
  __typename?: 'LegalSeo_data';
  meta_canonical?: Maybe<Scalars['String']>;
  meta_description?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
};

export type LegalSeo_DataMutation = {
  meta_canonical?: InputMaybe<Scalars['String']>;
  meta_description?: InputMaybe<Scalars['String']>;
  meta_title?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPendingDocument: DocumentNode;
  createDocument: DocumentNode;
  createLegalDocument: LegalDocument;
  createPageDocument: PageDocument;
  updateDocument: DocumentNode;
  updateLegalDocument: LegalDocument;
  updatePageDocument: PageDocument;
};


export type MutationAddPendingDocumentArgs = {
  collection: Scalars['String'];
  relativePath: Scalars['String'];
  template?: InputMaybe<Scalars['String']>;
};


export type MutationCreateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  params: DocumentMutation;
  relativePath: Scalars['String'];
};


export type MutationCreateLegalDocumentArgs = {
  params: LegalMutation;
  relativePath: Scalars['String'];
};


export type MutationCreatePageDocumentArgs = {
  params: PageMutation;
  relativePath: Scalars['String'];
};


export type MutationUpdateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  params: DocumentMutation;
  relativePath: Scalars['String'];
};


export type MutationUpdateLegalDocumentArgs = {
  params: LegalMutation;
  relativePath: Scalars['String'];
};


export type MutationUpdatePageDocumentArgs = {
  params: PageMutation;
  relativePath: Scalars['String'];
};

export type Node = {
  id: Scalars['ID'];
};

export type Page = {
  __typename?: 'Page';
  blocks?: Maybe<Array<Maybe<PageBlocks>>>;
  hero?: Maybe<PageHero>;
  seo_data?: Maybe<PageSeo_Data>;
};

export type PageBlocks = PageBlocksCall_To_Action | PageBlocksMeet_The_Team | PageBlocksOur_Services | PageBlocksPowered_By_Data | PageBlocksWho_We_Work_With | PageBlocksWhy_Rg;

export type PageBlocksCall_To_Action = {
  __typename?: 'PageBlocksCall_to_action';
  button_text?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
};

export type PageBlocksCall_To_ActionMutation = {
  button_text?: InputMaybe<Scalars['String']>;
  heading?: InputMaybe<Scalars['String']>;
};

export type PageBlocksMeet_The_Team = {
  __typename?: 'PageBlocksMeet_the_team';
  description?: Maybe<Scalars['JSON']>;
  heading?: Maybe<Scalars['String']>;
  team_members?: Maybe<Array<Maybe<PageBlocksMeet_The_TeamTeam_Members>>>;
};

export type PageBlocksMeet_The_TeamMutation = {
  description?: InputMaybe<Scalars['JSON']>;
  heading?: InputMaybe<Scalars['String']>;
  team_members?: InputMaybe<Array<InputMaybe<PageBlocksMeet_The_TeamTeam_MembersMutation>>>;
};

export type PageBlocksMeet_The_TeamTeam_Members = {
  __typename?: 'PageBlocksMeet_the_teamTeam_members';
  avatar?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
};

export type PageBlocksMeet_The_TeamTeam_MembersMutation = {
  avatar?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['String']>;
};

export type PageBlocksMutation = {
  call_to_action?: InputMaybe<PageBlocksCall_To_ActionMutation>;
  meet_the_team?: InputMaybe<PageBlocksMeet_The_TeamMutation>;
  our_services?: InputMaybe<PageBlocksOur_ServicesMutation>;
  powered_by_data?: InputMaybe<PageBlocksPowered_By_DataMutation>;
  who_we_work_with?: InputMaybe<PageBlocksWho_We_Work_WithMutation>;
  why_rg?: InputMaybe<PageBlocksWhy_RgMutation>;
};

export type PageBlocksOur_Services = {
  __typename?: 'PageBlocksOur_services';
  heading?: Maybe<Scalars['String']>;
  services?: Maybe<Array<Maybe<PageBlocksOur_ServicesServices>>>;
  services_description?: Maybe<Scalars['JSON']>;
  services_mission?: Maybe<Scalars['String']>;
};

export type PageBlocksOur_ServicesMutation = {
  heading?: InputMaybe<Scalars['String']>;
  services?: InputMaybe<Array<InputMaybe<PageBlocksOur_ServicesServicesMutation>>>;
  services_description?: InputMaybe<Scalars['JSON']>;
  services_mission?: InputMaybe<Scalars['String']>;
};

export type PageBlocksOur_ServicesServices = {
  __typename?: 'PageBlocksOur_servicesServices';
  service_description?: Maybe<Scalars['String']>;
  service_title?: Maybe<Scalars['String']>;
};

export type PageBlocksOur_ServicesServicesMutation = {
  service_description?: InputMaybe<Scalars['String']>;
  service_title?: InputMaybe<Scalars['String']>;
};

export type PageBlocksPowered_By_Data = {
  __typename?: 'PageBlocksPowered_by_data';
  content?: Maybe<Scalars['JSON']>;
  heading?: Maybe<Scalars['String']>;
};

export type PageBlocksPowered_By_DataMutation = {
  content?: InputMaybe<Scalars['JSON']>;
  heading?: InputMaybe<Scalars['String']>;
};

export type PageBlocksWho_We_Work_With = {
  __typename?: 'PageBlocksWho_we_work_with';
  charities?: Maybe<Array<Maybe<PageBlocksWho_We_Work_WithCharities>>>;
  content?: Maybe<Scalars['JSON']>;
  heading?: Maybe<Scalars['String']>;
};

export type PageBlocksWho_We_Work_WithCharities = {
  __typename?: 'PageBlocksWho_we_work_withCharities';
  charity_logo?: Maybe<Scalars['String']>;
  charity_name?: Maybe<Scalars['String']>;
};

export type PageBlocksWho_We_Work_WithCharitiesMutation = {
  charity_logo?: InputMaybe<Scalars['String']>;
  charity_name?: InputMaybe<Scalars['String']>;
};

export type PageBlocksWho_We_Work_WithMutation = {
  charities?: InputMaybe<Array<InputMaybe<PageBlocksWho_We_Work_WithCharitiesMutation>>>;
  content?: InputMaybe<Scalars['JSON']>;
  heading?: InputMaybe<Scalars['String']>;
};

export type PageBlocksWhy_Rg = {
  __typename?: 'PageBlocksWhy_rg';
  content?: Maybe<Scalars['JSON']>;
  heading?: Maybe<Scalars['String']>;
};

export type PageBlocksWhy_RgMutation = {
  content?: InputMaybe<Scalars['JSON']>;
  heading?: InputMaybe<Scalars['String']>;
};

export type PageConnection = Connection & {
  __typename?: 'PageConnection';
  edges?: Maybe<Array<Maybe<PageConnectionEdges>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Float'];
};

export type PageConnectionEdges = {
  __typename?: 'PageConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<PageDocument>;
};

export type PageDocument = Document & Node & {
  __typename?: 'PageDocument';
  data: Page;
  dataJSON: Scalars['JSON'];
  form: Scalars['JSON'];
  id: Scalars['ID'];
  sys: SystemInfo;
  values: Scalars['JSON'];
};

export type PageHero = {
  __typename?: 'PageHero';
  hero_button_text?: Maybe<Scalars['String']>;
  hero_description?: Maybe<Scalars['JSON']>;
  hero_heading?: Maybe<Scalars['String']>;
};

export type PageHeroMutation = {
  hero_button_text?: InputMaybe<Scalars['String']>;
  hero_description?: InputMaybe<Scalars['JSON']>;
  hero_heading?: InputMaybe<Scalars['String']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['String'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
};

export type PageMutation = {
  blocks?: InputMaybe<Array<InputMaybe<PageBlocksMutation>>>;
  hero?: InputMaybe<PageHeroMutation>;
  seo_data?: InputMaybe<PageSeo_DataMutation>;
};

export type PageSeo_Data = {
  __typename?: 'PageSeo_data';
  meta_canonical?: Maybe<Scalars['String']>;
  meta_description?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
};

export type PageSeo_DataMutation = {
  meta_canonical?: InputMaybe<Scalars['String']>;
  meta_description?: InputMaybe<Scalars['String']>;
  meta_title?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getCollection: Collection;
  getCollections: Array<Collection>;
  getDocument: DocumentNode;
  getDocumentFields: Scalars['JSON'];
  getDocumentList: DocumentConnection;
  getLegalDocument: LegalDocument;
  getLegalList: LegalConnection;
  getPageDocument: PageDocument;
  getPageList: PageConnection;
  node: Node;
};


export type QueryGetCollectionArgs = {
  collection?: InputMaybe<Scalars['String']>;
};


export type QueryGetDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryGetDocumentListArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
};


export type QueryGetLegalDocumentArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryGetLegalListArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
};


export type QueryGetPageDocumentArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryGetPageListArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
};


export type QueryNodeArgs = {
  id?: InputMaybe<Scalars['String']>;
};

export type SystemInfo = {
  __typename?: 'SystemInfo';
  basename: Scalars['String'];
  breadcrumbs: Array<Scalars['String']>;
  collection: Collection;
  extension: Scalars['String'];
  filename: Scalars['String'];
  path: Scalars['String'];
  relativePath: Scalars['String'];
  template: Scalars['String'];
};


export type SystemInfoBreadcrumbsArgs = {
  excludeExtension?: InputMaybe<Scalars['Boolean']>;
};

export type MeetTheTeamFragment = { __typename?: 'PageBlocksMeet_the_team', heading?: string | null | undefined, description?: any | null | undefined, team_members?: Array<{ __typename?: 'PageBlocksMeet_the_teamTeam_members', name?: string | null | undefined, position?: string | null | undefined, avatar?: string | null | undefined } | null | undefined> | null | undefined };

export type WhoWeWorkWithFragment = { __typename?: 'PageBlocksWho_we_work_with', heading?: string | null | undefined, content?: any | null | undefined, charities?: Array<{ __typename?: 'PageBlocksWho_we_work_withCharities', charity_name?: string | null | undefined, charity_logo?: string | null | undefined } | null | undefined> | null | undefined };

export type OurServicesFragment = { __typename?: 'PageBlocksOur_services', heading?: string | null | undefined, services_description?: any | null | undefined, services_mission?: string | null | undefined, services?: Array<{ __typename?: 'PageBlocksOur_servicesServices', service_title?: string | null | undefined, service_description?: string | null | undefined } | null | undefined> | null | undefined };

export type PoweredByDataFragment = { __typename?: 'PageBlocksPowered_by_data', heading?: string | null | undefined, content?: any | null | undefined };

export type WhyRgFragment = { __typename?: 'PageBlocksWhy_rg', heading?: string | null | undefined, content?: any | null | undefined };

export type CallToActionFragment = { __typename?: 'PageBlocksCall_to_action', heading?: string | null | undefined, button_text?: string | null | undefined };

export type GetLegalPageQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type GetLegalPageQuery = { __typename?: 'Query', getLegalDocument: { __typename?: 'LegalDocument', id: string, values: any, dataJSON: any, form: any, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string, template: string }, data: { __typename?: 'Legal', body?: any | null | undefined, seo_data?: { __typename?: 'LegalSeo_data', meta_title?: string | null | undefined, meta_description?: string | null | undefined, meta_canonical?: string | null | undefined } | null | undefined, hero?: { __typename?: 'LegalHero', hero_heading?: string | null | undefined, hero_description?: string | null | undefined } | null | undefined } } };

export type GetPageQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type GetPageQuery = { __typename?: 'Query', getPageDocument: { __typename?: 'PageDocument', id: string, values: any, dataJSON: any, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Page', seo_data?: { __typename?: 'PageSeo_data', meta_title?: string | null | undefined, meta_description?: string | null | undefined, meta_canonical?: string | null | undefined } | null | undefined, hero?: { __typename?: 'PageHero', hero_heading?: string | null | undefined, hero_description?: any | null | undefined, hero_button_text?: string | null | undefined } | null | undefined, blocks?: Array<{ __typename: 'PageBlocksCall_to_action', heading?: string | null | undefined, button_text?: string | null | undefined } | { __typename: 'PageBlocksMeet_the_team', heading?: string | null | undefined, description?: any | null | undefined, team_members?: Array<{ __typename?: 'PageBlocksMeet_the_teamTeam_members', name?: string | null | undefined, position?: string | null | undefined, avatar?: string | null | undefined } | null | undefined> | null | undefined } | { __typename: 'PageBlocksOur_services', heading?: string | null | undefined, services_description?: any | null | undefined, services_mission?: string | null | undefined, services?: Array<{ __typename?: 'PageBlocksOur_servicesServices', service_title?: string | null | undefined, service_description?: string | null | undefined } | null | undefined> | null | undefined } | { __typename: 'PageBlocksPowered_by_data', heading?: string | null | undefined, content?: any | null | undefined } | { __typename: 'PageBlocksWho_we_work_with', heading?: string | null | undefined, content?: any | null | undefined, charities?: Array<{ __typename?: 'PageBlocksWho_we_work_withCharities', charity_name?: string | null | undefined, charity_logo?: string | null | undefined } | null | undefined> | null | undefined } | { __typename: 'PageBlocksWhy_rg', heading?: string | null | undefined, content?: any | null | undefined } | null | undefined> | null | undefined } } };

export const MeetTheTeamFragmentDoc = gql`
    fragment MeetTheTeam on PageBlocksMeet_the_team {
  heading
  description
  team_members {
    name
    position
    avatar
  }
}
    `;
export const WhoWeWorkWithFragmentDoc = gql`
    fragment WhoWeWorkWith on PageBlocksWho_we_work_with {
  heading
  content
  charities {
    charity_name
    charity_logo
  }
}
    `;
export const OurServicesFragmentDoc = gql`
    fragment OurServices on PageBlocksOur_services {
  heading
  services_description
  services {
    service_title
    service_description
  }
  services_mission
}
    `;
export const PoweredByDataFragmentDoc = gql`
    fragment PoweredByData on PageBlocksPowered_by_data {
  heading
  content
}
    `;
export const WhyRgFragmentDoc = gql`
    fragment WhyRg on PageBlocksWhy_rg {
  heading
  content
}
    `;
export const CallToActionFragmentDoc = gql`
    fragment CallToAction on PageBlocksCall_to_action {
  heading
  button_text
}
    `;
export const GetLegalPageDocument = gql`
    query getLegalPage($relativePath: String!) {
  getLegalDocument(relativePath: $relativePath) {
    id
    sys {
      filename
      basename
      breadcrumbs(excludeExtension: true)
      path
      relativePath
      extension
      template
    }
    data {
      seo_data {
        meta_title
        meta_description
        meta_canonical
      }
      hero {
        hero_heading
        hero_description
      }
      body
    }
    values
    dataJSON
    form
  }
}
    `;
export const GetPageDocument = gql`
    query getPage($relativePath: String!) {
  getPageDocument(relativePath: $relativePath) {
    sys {
      filename
      basename
      breadcrumbs
      path
      relativePath
      extension
    }
    id
    data {
      seo_data {
        meta_title
        meta_description
        meta_canonical
      }
      hero {
        hero_heading
        hero_description
        hero_button_text
      }
      blocks {
        __typename
        ...MeetTheTeam
        ...WhoWeWorkWith
        ...OurServices
        ...PoweredByData
        ...WhyRg
        ...CallToAction
      }
    }
    values
    dataJSON
  }
}
    ${MeetTheTeamFragmentDoc}
${WhoWeWorkWithFragmentDoc}
${OurServicesFragmentDoc}
${PoweredByDataFragmentDoc}
${WhyRgFragmentDoc}
${CallToActionFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getLegalPage(variables: GetLegalPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetLegalPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetLegalPageQuery>(GetLegalPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getLegalPage');
    },
    getPage(variables: GetPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPageQuery>(GetPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPage');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;