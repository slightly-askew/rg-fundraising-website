//@ts-nocheck
// DO NOT MODIFY THIS FILE. This file is automatically generated by Tina
import { gql } from 'tinacms';
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
  /** References another document, used as a foreign key */
  Reference: any;
  JSON: any;
};

export type SystemInfo = {
  __typename?: 'SystemInfo';
  filename: Scalars['String'];
  basename: Scalars['String'];
  breadcrumbs: Array<Scalars['String']>;
  path: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  template: Scalars['String'];
  collection: Collection;
};


export type SystemInfoBreadcrumbsArgs = {
  excludeExtension?: InputMaybe<Scalars['Boolean']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
  endCursor: Scalars['String'];
};

export type Node = {
  id: Scalars['ID'];
};

export type Document = {
  sys?: Maybe<SystemInfo>;
  id: Scalars['ID'];
  form: Scalars['JSON'];
  values: Scalars['JSON'];
};

/** A relay-compliant pagination connection */
export type Connection = {
  totalCount: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  getCollection: Collection;
  getCollections: Array<Collection>;
  node: Node;
  getDocument: DocumentNode;
  getDocumentList: DocumentConnection;
  getDocumentFields: Scalars['JSON'];
  getPagesDocument: PagesDocument;
  getPagesList: PagesConnection;
};


export type QueryGetCollectionArgs = {
  collection?: InputMaybe<Scalars['String']>;
};


export type QueryNodeArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryGetDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryGetDocumentListArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryGetPagesDocumentArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryGetPagesListArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type DocumentConnectionEdges = {
  __typename?: 'DocumentConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<DocumentNode>;
};

export type DocumentConnection = Connection & {
  __typename?: 'DocumentConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
  edges?: Maybe<Array<Maybe<DocumentConnectionEdges>>>;
};

export type Collection = {
  __typename?: 'Collection';
  name: Scalars['String'];
  slug: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  path: Scalars['String'];
  format?: Maybe<Scalars['String']>;
  matches?: Maybe<Scalars['String']>;
  templates?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  fields?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  documents: DocumentConnection;
};


export type CollectionDocumentsArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type DocumentNode = PagesDocument;

export type PagesSeo_Data = {
  __typename?: 'PagesSeo_data';
  meta_title?: Maybe<Scalars['String']>;
  meta_description?: Maybe<Scalars['String']>;
  meta_canonical?: Maybe<Scalars['String']>;
};

export type PagesHero = {
  __typename?: 'PagesHero';
  hero_heading?: Maybe<Scalars['String']>;
  hero_description?: Maybe<Scalars['String']>;
  hero_button_text?: Maybe<Scalars['String']>;
};

export type PagesContent_SectionsCall_To_Action = {
  __typename?: 'PagesContent_sectionsCall_to_action';
  heading?: Maybe<Scalars['String']>;
  button_text?: Maybe<Scalars['String']>;
};

export type PagesContent_SectionsMeet_The_TeamTeam_Members = {
  __typename?: 'PagesContent_sectionsMeet_the_teamTeam_members';
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
};

export type PagesContent_SectionsMeet_The_Team = {
  __typename?: 'PagesContent_sectionsMeet_the_team';
  heading?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  team_members?: Maybe<Array<Maybe<PagesContent_SectionsMeet_The_TeamTeam_Members>>>;
};

export type PagesContent_SectionsOur_ServicesTeam_Members = {
  __typename?: 'PagesContent_sectionsOur_servicesTeam_members';
  service_title?: Maybe<Scalars['String']>;
  service_description?: Maybe<Scalars['String']>;
};

export type PagesContent_SectionsOur_Services = {
  __typename?: 'PagesContent_sectionsOur_services';
  heading?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  team_members?: Maybe<Array<Maybe<PagesContent_SectionsOur_ServicesTeam_Members>>>;
};

export type PagesContent_SectionsPowered_By_Data = {
  __typename?: 'PagesContent_sectionsPowered_by_data';
  heading?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['JSON']>;
};

export type PagesContent_SectionsWho_We_Work_WithCharities = {
  __typename?: 'PagesContent_sectionsWho_we_work_withCharities';
  charity_name?: Maybe<Scalars['String']>;
  charity_logo?: Maybe<Scalars['String']>;
};

export type PagesContent_SectionsWho_We_Work_With = {
  __typename?: 'PagesContent_sectionsWho_we_work_with';
  heading?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['JSON']>;
  charities?: Maybe<Array<Maybe<PagesContent_SectionsWho_We_Work_WithCharities>>>;
};

export type PagesContent_SectionsWhy_Rg = {
  __typename?: 'PagesContent_sectionsWhy_rg';
  heading?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['JSON']>;
};

export type PagesContent_Sections = PagesContent_SectionsCall_To_Action | PagesContent_SectionsMeet_The_Team | PagesContent_SectionsOur_Services | PagesContent_SectionsPowered_By_Data | PagesContent_SectionsWho_We_Work_With | PagesContent_SectionsWhy_Rg;

export type Pages = {
  __typename?: 'Pages';
  seo_data?: Maybe<PagesSeo_Data>;
  hero?: Maybe<PagesHero>;
  content_sections?: Maybe<Array<Maybe<PagesContent_Sections>>>;
};

export type PagesDocument = Node & Document & {
  __typename?: 'PagesDocument';
  id: Scalars['ID'];
  sys: SystemInfo;
  data: Pages;
  form: Scalars['JSON'];
  values: Scalars['JSON'];
  dataJSON: Scalars['JSON'];
};

export type PagesConnectionEdges = {
  __typename?: 'PagesConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<PagesDocument>;
};

export type PagesConnection = Connection & {
  __typename?: 'PagesConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
  edges?: Maybe<Array<Maybe<PagesConnectionEdges>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPendingDocument: DocumentNode;
  updateDocument: DocumentNode;
  createDocument: DocumentNode;
  updatePagesDocument: PagesDocument;
  createPagesDocument: PagesDocument;
};


export type MutationAddPendingDocumentArgs = {
  collection: Scalars['String'];
  relativePath: Scalars['String'];
  template?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
  params: DocumentMutation;
};


export type MutationCreateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
  params: DocumentMutation;
};


export type MutationUpdatePagesDocumentArgs = {
  relativePath: Scalars['String'];
  params: PagesMutation;
};


export type MutationCreatePagesDocumentArgs = {
  relativePath: Scalars['String'];
  params: PagesMutation;
};

export type DocumentMutation = {
  pages?: InputMaybe<PagesMutation>;
};

export type PagesSeo_DataMutation = {
  meta_title?: InputMaybe<Scalars['String']>;
  meta_description?: InputMaybe<Scalars['String']>;
  meta_canonical?: InputMaybe<Scalars['String']>;
};

export type PagesHeroMutation = {
  hero_heading?: InputMaybe<Scalars['String']>;
  hero_description?: InputMaybe<Scalars['String']>;
  hero_button_text?: InputMaybe<Scalars['String']>;
};

export type PagesContent_SectionsCall_To_ActionMutation = {
  heading?: InputMaybe<Scalars['String']>;
  button_text?: InputMaybe<Scalars['String']>;
};

export type PagesContent_SectionsMeet_The_TeamTeam_MembersMutation = {
  name?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<Scalars['String']>;
};

export type PagesContent_SectionsMeet_The_TeamMutation = {
  heading?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  team_members?: InputMaybe<Array<InputMaybe<PagesContent_SectionsMeet_The_TeamTeam_MembersMutation>>>;
};

export type PagesContent_SectionsOur_ServicesTeam_MembersMutation = {
  service_title?: InputMaybe<Scalars['String']>;
  service_description?: InputMaybe<Scalars['String']>;
};

export type PagesContent_SectionsOur_ServicesMutation = {
  heading?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  team_members?: InputMaybe<Array<InputMaybe<PagesContent_SectionsOur_ServicesTeam_MembersMutation>>>;
};

export type PagesContent_SectionsPowered_By_DataMutation = {
  heading?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['JSON']>;
};

export type PagesContent_SectionsWho_We_Work_WithCharitiesMutation = {
  charity_name?: InputMaybe<Scalars['String']>;
  charity_logo?: InputMaybe<Scalars['String']>;
};

export type PagesContent_SectionsWho_We_Work_WithMutation = {
  heading?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['JSON']>;
  charities?: InputMaybe<Array<InputMaybe<PagesContent_SectionsWho_We_Work_WithCharitiesMutation>>>;
};

export type PagesContent_SectionsWhy_RgMutation = {
  heading?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['JSON']>;
};

export type PagesContent_SectionsMutation = {
  call_to_action?: InputMaybe<PagesContent_SectionsCall_To_ActionMutation>;
  meet_the_team?: InputMaybe<PagesContent_SectionsMeet_The_TeamMutation>;
  our_services?: InputMaybe<PagesContent_SectionsOur_ServicesMutation>;
  powered_by_data?: InputMaybe<PagesContent_SectionsPowered_By_DataMutation>;
  who_we_work_with?: InputMaybe<PagesContent_SectionsWho_We_Work_WithMutation>;
  why_rg?: InputMaybe<PagesContent_SectionsWhy_RgMutation>;
};

export type PagesMutation = {
  seo_data?: InputMaybe<PagesSeo_DataMutation>;
  hero?: InputMaybe<PagesHeroMutation>;
  content_sections?: InputMaybe<Array<InputMaybe<PagesContent_SectionsMutation>>>;
};

export type PagesPartsFragment = { __typename?: 'Pages', seo_data?: { __typename: 'PagesSeo_data', meta_title?: string | null | undefined, meta_description?: string | null | undefined, meta_canonical?: string | null | undefined } | null | undefined, hero?: { __typename: 'PagesHero', hero_heading?: string | null | undefined, hero_description?: string | null | undefined, hero_button_text?: string | null | undefined } | null | undefined, content_sections?: Array<{ __typename: 'PagesContent_sectionsCall_to_action', heading?: string | null | undefined, button_text?: string | null | undefined } | { __typename: 'PagesContent_sectionsMeet_the_team', heading?: string | null | undefined, description?: string | null | undefined, team_members?: Array<{ __typename: 'PagesContent_sectionsMeet_the_teamTeam_members', name?: string | null | undefined, position?: string | null | undefined, avatar?: string | null | undefined } | null | undefined> | null | undefined } | { __typename: 'PagesContent_sectionsOur_services', heading?: string | null | undefined, description?: string | null | undefined, team_members?: Array<{ __typename: 'PagesContent_sectionsOur_servicesTeam_members', service_title?: string | null | undefined, service_description?: string | null | undefined } | null | undefined> | null | undefined } | { __typename: 'PagesContent_sectionsPowered_by_data', heading?: string | null | undefined, content?: any | null | undefined } | { __typename: 'PagesContent_sectionsWho_we_work_with', heading?: string | null | undefined, content?: any | null | undefined, charities?: Array<{ __typename: 'PagesContent_sectionsWho_we_work_withCharities', charity_name?: string | null | undefined, charity_logo?: string | null | undefined } | null | undefined> | null | undefined } | { __typename: 'PagesContent_sectionsWhy_rg', heading?: string | null | undefined, content?: any | null | undefined } | null | undefined> | null | undefined };

export type GetPagesDocumentQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type GetPagesDocumentQuery = { __typename?: 'Query', getPagesDocument: { __typename?: 'PagesDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Pages', seo_data?: { __typename: 'PagesSeo_data', meta_title?: string | null | undefined, meta_description?: string | null | undefined, meta_canonical?: string | null | undefined } | null | undefined, hero?: { __typename: 'PagesHero', hero_heading?: string | null | undefined, hero_description?: string | null | undefined, hero_button_text?: string | null | undefined } | null | undefined, content_sections?: Array<{ __typename: 'PagesContent_sectionsCall_to_action', heading?: string | null | undefined, button_text?: string | null | undefined } | { __typename: 'PagesContent_sectionsMeet_the_team', heading?: string | null | undefined, description?: string | null | undefined, team_members?: Array<{ __typename: 'PagesContent_sectionsMeet_the_teamTeam_members', name?: string | null | undefined, position?: string | null | undefined, avatar?: string | null | undefined } | null | undefined> | null | undefined } | { __typename: 'PagesContent_sectionsOur_services', heading?: string | null | undefined, description?: string | null | undefined, team_members?: Array<{ __typename: 'PagesContent_sectionsOur_servicesTeam_members', service_title?: string | null | undefined, service_description?: string | null | undefined } | null | undefined> | null | undefined } | { __typename: 'PagesContent_sectionsPowered_by_data', heading?: string | null | undefined, content?: any | null | undefined } | { __typename: 'PagesContent_sectionsWho_we_work_with', heading?: string | null | undefined, content?: any | null | undefined, charities?: Array<{ __typename: 'PagesContent_sectionsWho_we_work_withCharities', charity_name?: string | null | undefined, charity_logo?: string | null | undefined } | null | undefined> | null | undefined } | { __typename: 'PagesContent_sectionsWhy_rg', heading?: string | null | undefined, content?: any | null | undefined } | null | undefined> | null | undefined } } };

export type GetPagesListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPagesListQuery = { __typename?: 'Query', getPagesList: { __typename?: 'PagesConnection', totalCount: number, edges?: Array<{ __typename?: 'PagesConnectionEdges', node?: { __typename?: 'PagesDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Pages', seo_data?: { __typename: 'PagesSeo_data', meta_title?: string | null | undefined, meta_description?: string | null | undefined, meta_canonical?: string | null | undefined } | null | undefined, hero?: { __typename: 'PagesHero', hero_heading?: string | null | undefined, hero_description?: string | null | undefined, hero_button_text?: string | null | undefined } | null | undefined, content_sections?: Array<{ __typename: 'PagesContent_sectionsCall_to_action', heading?: string | null | undefined, button_text?: string | null | undefined } | { __typename: 'PagesContent_sectionsMeet_the_team', heading?: string | null | undefined, description?: string | null | undefined, team_members?: Array<{ __typename: 'PagesContent_sectionsMeet_the_teamTeam_members', name?: string | null | undefined, position?: string | null | undefined, avatar?: string | null | undefined } | null | undefined> | null | undefined } | { __typename: 'PagesContent_sectionsOur_services', heading?: string | null | undefined, description?: string | null | undefined, team_members?: Array<{ __typename: 'PagesContent_sectionsOur_servicesTeam_members', service_title?: string | null | undefined, service_description?: string | null | undefined } | null | undefined> | null | undefined } | { __typename: 'PagesContent_sectionsPowered_by_data', heading?: string | null | undefined, content?: any | null | undefined } | { __typename: 'PagesContent_sectionsWho_we_work_with', heading?: string | null | undefined, content?: any | null | undefined, charities?: Array<{ __typename: 'PagesContent_sectionsWho_we_work_withCharities', charity_name?: string | null | undefined, charity_logo?: string | null | undefined } | null | undefined> | null | undefined } | { __typename: 'PagesContent_sectionsWhy_rg', heading?: string | null | undefined, content?: any | null | undefined } | null | undefined> | null | undefined } } | null | undefined } | null | undefined> | null | undefined } };

export const PagesPartsFragmentDoc = gql`
    fragment PagesParts on Pages {
  seo_data {
    __typename
    meta_title
    meta_description
    meta_canonical
  }
  hero {
    __typename
    hero_heading
    hero_description
    hero_button_text
  }
  content_sections {
    __typename
    ... on PagesContent_sectionsCall_to_action {
      heading
      button_text
    }
    ... on PagesContent_sectionsMeet_the_team {
      heading
      description
      team_members {
        __typename
        name
        position
        avatar
      }
    }
    ... on PagesContent_sectionsOur_services {
      heading
      description
      team_members {
        __typename
        service_title
        service_description
      }
    }
    ... on PagesContent_sectionsPowered_by_data {
      heading
      content
    }
    ... on PagesContent_sectionsWho_we_work_with {
      heading
      content
      charities {
        __typename
        charity_name
        charity_logo
      }
    }
    ... on PagesContent_sectionsWhy_rg {
      heading
      content
    }
  }
}
    `;
export const GetPagesDocumentDocument = gql`
    query getPagesDocument($relativePath: String!) {
  getPagesDocument(relativePath: $relativePath) {
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
      ...PagesParts
    }
  }
}
    ${PagesPartsFragmentDoc}`;
export const GetPagesListDocument = gql`
    query getPagesList {
  getPagesList {
    totalCount
    edges {
      node {
        id
        sys {
          filename
          basename
          breadcrumbs
          path
          relativePath
          extension
        }
        data {
          ...PagesParts
        }
      }
    }
  }
}
    ${PagesPartsFragmentDoc}`;
export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
  export function getSdk<C>(requester: Requester<C>) {
    return {
      getPagesDocument(variables: GetPagesDocumentQueryVariables, options?: C): Promise<{data: GetPagesDocumentQuery, variables: GetPagesDocumentQueryVariables, query: string}> {
        return requester<{data: GetPagesDocumentQuery, variables: GetPagesDocumentQueryVariables, query: string}, GetPagesDocumentQueryVariables>(GetPagesDocumentDocument, variables, options);
      },
    getPagesList(variables?: GetPagesListQueryVariables, options?: C): Promise<{data: GetPagesListQuery, variables: GetPagesListQueryVariables, query: string}> {
        return requester<{data: GetPagesListQuery, variables: GetPagesListQueryVariables, query: string}, GetPagesListQueryVariables>(GetPagesListDocument, variables, options);
      }
    };
  }
  export type Sdk = ReturnType<typeof getSdk>;

// TinaSDK generated code
import { staticRequest } from 'tinacms'
const requester: (doc: any, vars?: any, options?: any) => Promise<any> = async (
  doc,
  vars,
  _options
) => {
  let data = {}
  try {
    data = await staticRequest({
      query: doc,
      variables: vars,
    })
  } catch (e) {
    // swallow errors related to document creation
    console.warn('Warning: There was an error when fetching data')
    console.warn(e)
  }

  return { data, query: doc, variables: vars || {} }
}

/**
 * @experimental this class can be used but may change in the future
 **/
export const ExperimentalGetTinaClient = ()=>getSdk(requester)

