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
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** A relay-compliant pagination connection */
export type Connection = {
  totalCount: Scalars['Int'];
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
  totalCount: Scalars['Int'];
};

export type DocumentConnectionEdges = {
  __typename?: 'DocumentConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<DocumentNode>;
};

export type DocumentMutation = {
  pages?: InputMaybe<PagesMutation>;
};

export type DocumentNode = PagesDocument;

export type Mutation = {
  __typename?: 'Mutation';
  addPendingDocument: DocumentNode;
  createDocument: DocumentNode;
  createPagesDocument: PagesDocument;
  updateDocument: DocumentNode;
  updatePagesDocument: PagesDocument;
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


export type MutationCreatePagesDocumentArgs = {
  params: PagesMutation;
  relativePath: Scalars['String'];
};


export type MutationUpdateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  params: DocumentMutation;
  relativePath: Scalars['String'];
};


export type MutationUpdatePagesDocumentArgs = {
  params: PagesMutation;
  relativePath: Scalars['String'];
};

export type Node = {
  id: Scalars['ID'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['String'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
};

export type Pages = {
  __typename?: 'Pages';
  hero?: Maybe<PagesHero>;
  seo_data?: Maybe<PagesSeo_Data>;
};

export type PagesConnection = Connection & {
  __typename?: 'PagesConnection';
  edges?: Maybe<Array<Maybe<PagesConnectionEdges>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
};

export type PagesConnectionEdges = {
  __typename?: 'PagesConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<PagesDocument>;
};

export type PagesDocument = Document & Node & {
  __typename?: 'PagesDocument';
  data: Pages;
  dataJSON: Scalars['JSON'];
  form: Scalars['JSON'];
  id: Scalars['ID'];
  sys: SystemInfo;
  values: Scalars['JSON'];
};

export type PagesHero = {
  __typename?: 'PagesHero';
  hero_button_text?: Maybe<Scalars['String']>;
  hero_description?: Maybe<Scalars['String']>;
  hero_heading?: Maybe<Scalars['String']>;
};

export type PagesHeroMutation = {
  hero_button_text?: InputMaybe<Scalars['String']>;
  hero_description?: InputMaybe<Scalars['String']>;
  hero_heading?: InputMaybe<Scalars['String']>;
};

export type PagesMutation = {
  hero?: InputMaybe<PagesHeroMutation>;
  seo_data?: InputMaybe<PagesSeo_DataMutation>;
};

export type PagesSeo_Data = {
  __typename?: 'PagesSeo_data';
  meta_canonical?: Maybe<Scalars['String']>;
  meta_description?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
};

export type PagesSeo_DataMutation = {
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
  getPagesDocument: PagesDocument;
  getPagesList: PagesConnection;
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
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryGetPagesDocumentArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryGetPagesListArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
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

export type SeoDataFragment = { __typename?: 'PagesSeo_data', meta_title?: string | null | undefined, meta_description?: string | null | undefined, meta_canonical?: string | null | undefined };

export type GetHomepageQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type GetHomepageQuery = { __typename?: 'Query', getPagesDocument: { __typename?: 'PagesDocument', id: string, values: any, dataJSON: any, data: { __typename?: 'Pages', seo_data?: { __typename?: 'PagesSeo_data', meta_title?: string | null | undefined, meta_description?: string | null | undefined, meta_canonical?: string | null | undefined } | null | undefined, hero?: { __typename?: 'PagesHero', hero_heading?: string | null | undefined, hero_description?: string | null | undefined, hero_button_text?: string | null | undefined } | null | undefined } } };

export const SeoDataFragmentDoc = gql`
    fragment SeoData on PagesSeo_data {
  meta_title
  meta_description
  meta_canonical
}
    `;
export const GetHomepageDocument = gql`
    query getHomepage($relativePath: String!) {
  getPagesDocument(relativePath: $relativePath) {
    id
    data {
      seo_data {
        ...SeoData
      }
      hero {
        hero_heading
        hero_description
        hero_button_text
      }
    }
    values
    dataJSON
  }
}
    ${SeoDataFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getHomepage(variables: GetHomepageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetHomepageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetHomepageQuery>(GetHomepageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getHomepage');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;