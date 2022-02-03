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
  homepage?: InputMaybe<HomepageMutation>;
  privacy?: InputMaybe<PrivacyMutation>;
};

export type DocumentNode = HomepageDocument | PrivacyDocument;

export type Homepage = {
  __typename?: 'Homepage';
  content_sections?: Maybe<Array<Maybe<HomepageContent_Sections>>>;
  hero?: Maybe<HomepageHero>;
  seo_data?: Maybe<HomepageSeo_Data>;
};

export type HomepageConnection = Connection & {
  __typename?: 'HomepageConnection';
  edges?: Maybe<Array<Maybe<HomepageConnectionEdges>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Float'];
};

export type HomepageConnectionEdges = {
  __typename?: 'HomepageConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<HomepageDocument>;
};

export type HomepageContent_Sections = HomepageContent_SectionsCall_To_Action | HomepageContent_SectionsMeet_The_Team | HomepageContent_SectionsOur_Services | HomepageContent_SectionsPowered_By_Data | HomepageContent_SectionsWho_We_Work_With | HomepageContent_SectionsWhy_Rg;

export type HomepageContent_SectionsCall_To_Action = {
  __typename?: 'HomepageContent_sectionsCall_to_action';
  button_text?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
};

export type HomepageContent_SectionsCall_To_ActionMutation = {
  button_text?: InputMaybe<Scalars['String']>;
  heading?: InputMaybe<Scalars['String']>;
};

export type HomepageContent_SectionsMeet_The_Team = {
  __typename?: 'HomepageContent_sectionsMeet_the_team';
  description?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  team_members?: Maybe<Array<Maybe<HomepageContent_SectionsMeet_The_TeamTeam_Members>>>;
};

export type HomepageContent_SectionsMeet_The_TeamMutation = {
  description?: InputMaybe<Scalars['String']>;
  heading?: InputMaybe<Scalars['String']>;
  team_members?: InputMaybe<Array<InputMaybe<HomepageContent_SectionsMeet_The_TeamTeam_MembersMutation>>>;
};

export type HomepageContent_SectionsMeet_The_TeamTeam_Members = {
  __typename?: 'HomepageContent_sectionsMeet_the_teamTeam_members';
  avatar?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
};

export type HomepageContent_SectionsMeet_The_TeamTeam_MembersMutation = {
  avatar?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['String']>;
};

export type HomepageContent_SectionsMutation = {
  call_to_action?: InputMaybe<HomepageContent_SectionsCall_To_ActionMutation>;
  meet_the_team?: InputMaybe<HomepageContent_SectionsMeet_The_TeamMutation>;
  our_services?: InputMaybe<HomepageContent_SectionsOur_ServicesMutation>;
  powered_by_data?: InputMaybe<HomepageContent_SectionsPowered_By_DataMutation>;
  who_we_work_with?: InputMaybe<HomepageContent_SectionsWho_We_Work_WithMutation>;
  why_rg?: InputMaybe<HomepageContent_SectionsWhy_RgMutation>;
};

export type HomepageContent_SectionsOur_Services = {
  __typename?: 'HomepageContent_sectionsOur_services';
  description?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  team_members?: Maybe<Array<Maybe<HomepageContent_SectionsOur_ServicesTeam_Members>>>;
};

export type HomepageContent_SectionsOur_ServicesMutation = {
  description?: InputMaybe<Scalars['String']>;
  heading?: InputMaybe<Scalars['String']>;
  team_members?: InputMaybe<Array<InputMaybe<HomepageContent_SectionsOur_ServicesTeam_MembersMutation>>>;
};

export type HomepageContent_SectionsOur_ServicesTeam_Members = {
  __typename?: 'HomepageContent_sectionsOur_servicesTeam_members';
  service_description?: Maybe<Scalars['String']>;
  service_title?: Maybe<Scalars['String']>;
};

export type HomepageContent_SectionsOur_ServicesTeam_MembersMutation = {
  service_description?: InputMaybe<Scalars['String']>;
  service_title?: InputMaybe<Scalars['String']>;
};

export type HomepageContent_SectionsPowered_By_Data = {
  __typename?: 'HomepageContent_sectionsPowered_by_data';
  content?: Maybe<Scalars['JSON']>;
  heading?: Maybe<Scalars['String']>;
};

export type HomepageContent_SectionsPowered_By_DataMutation = {
  content?: InputMaybe<Scalars['JSON']>;
  heading?: InputMaybe<Scalars['String']>;
};

export type HomepageContent_SectionsWho_We_Work_With = {
  __typename?: 'HomepageContent_sectionsWho_we_work_with';
  charities?: Maybe<Array<Maybe<HomepageContent_SectionsWho_We_Work_WithCharities>>>;
  content?: Maybe<Scalars['JSON']>;
  heading?: Maybe<Scalars['String']>;
};

export type HomepageContent_SectionsWho_We_Work_WithCharities = {
  __typename?: 'HomepageContent_sectionsWho_we_work_withCharities';
  charity_logo?: Maybe<Scalars['String']>;
  charity_name?: Maybe<Scalars['String']>;
};

export type HomepageContent_SectionsWho_We_Work_WithCharitiesMutation = {
  charity_logo?: InputMaybe<Scalars['String']>;
  charity_name?: InputMaybe<Scalars['String']>;
};

export type HomepageContent_SectionsWho_We_Work_WithMutation = {
  charities?: InputMaybe<Array<InputMaybe<HomepageContent_SectionsWho_We_Work_WithCharitiesMutation>>>;
  content?: InputMaybe<Scalars['JSON']>;
  heading?: InputMaybe<Scalars['String']>;
};

export type HomepageContent_SectionsWhy_Rg = {
  __typename?: 'HomepageContent_sectionsWhy_rg';
  content?: Maybe<Scalars['JSON']>;
  heading?: Maybe<Scalars['String']>;
};

export type HomepageContent_SectionsWhy_RgMutation = {
  content?: InputMaybe<Scalars['JSON']>;
  heading?: InputMaybe<Scalars['String']>;
};

export type HomepageDocument = Document & Node & {
  __typename?: 'HomepageDocument';
  data: Homepage;
  dataJSON: Scalars['JSON'];
  form: Scalars['JSON'];
  id: Scalars['ID'];
  sys: SystemInfo;
  values: Scalars['JSON'];
};

export type HomepageHero = {
  __typename?: 'HomepageHero';
  hero_button_text?: Maybe<Scalars['String']>;
  hero_description?: Maybe<Scalars['String']>;
  hero_heading?: Maybe<Scalars['String']>;
};

export type HomepageHeroMutation = {
  hero_button_text?: InputMaybe<Scalars['String']>;
  hero_description?: InputMaybe<Scalars['String']>;
  hero_heading?: InputMaybe<Scalars['String']>;
};

export type HomepageMutation = {
  content_sections?: InputMaybe<Array<InputMaybe<HomepageContent_SectionsMutation>>>;
  hero?: InputMaybe<HomepageHeroMutation>;
  seo_data?: InputMaybe<HomepageSeo_DataMutation>;
};

export type HomepageSeo_Data = {
  __typename?: 'HomepageSeo_data';
  meta_canonical?: Maybe<Scalars['String']>;
  meta_description?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
};

export type HomepageSeo_DataMutation = {
  meta_canonical?: InputMaybe<Scalars['String']>;
  meta_description?: InputMaybe<Scalars['String']>;
  meta_title?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPendingDocument: DocumentNode;
  createDocument: DocumentNode;
  createHomepageDocument: HomepageDocument;
  createPrivacyDocument: PrivacyDocument;
  updateDocument: DocumentNode;
  updateHomepageDocument: HomepageDocument;
  updatePrivacyDocument: PrivacyDocument;
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


export type MutationCreateHomepageDocumentArgs = {
  params: HomepageMutation;
  relativePath: Scalars['String'];
};


export type MutationCreatePrivacyDocumentArgs = {
  params: PrivacyMutation;
  relativePath: Scalars['String'];
};


export type MutationUpdateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  params: DocumentMutation;
  relativePath: Scalars['String'];
};


export type MutationUpdateHomepageDocumentArgs = {
  params: HomepageMutation;
  relativePath: Scalars['String'];
};


export type MutationUpdatePrivacyDocumentArgs = {
  params: PrivacyMutation;
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

export type Privacy = {
  __typename?: 'Privacy';
  body?: Maybe<Scalars['JSON']>;
  hero?: Maybe<PrivacyHero>;
  seo_data?: Maybe<PrivacySeo_Data>;
};

export type PrivacyConnection = Connection & {
  __typename?: 'PrivacyConnection';
  edges?: Maybe<Array<Maybe<PrivacyConnectionEdges>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Float'];
};

export type PrivacyConnectionEdges = {
  __typename?: 'PrivacyConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<PrivacyDocument>;
};

export type PrivacyDocument = Document & Node & {
  __typename?: 'PrivacyDocument';
  data: Privacy;
  dataJSON: Scalars['JSON'];
  form: Scalars['JSON'];
  id: Scalars['ID'];
  sys: SystemInfo;
  values: Scalars['JSON'];
};

export type PrivacyHero = {
  __typename?: 'PrivacyHero';
  hero_button_text?: Maybe<Scalars['String']>;
  hero_description?: Maybe<Scalars['String']>;
  hero_heading?: Maybe<Scalars['String']>;
};

export type PrivacyHeroMutation = {
  hero_button_text?: InputMaybe<Scalars['String']>;
  hero_description?: InputMaybe<Scalars['String']>;
  hero_heading?: InputMaybe<Scalars['String']>;
};

export type PrivacyMutation = {
  body?: InputMaybe<Scalars['JSON']>;
  hero?: InputMaybe<PrivacyHeroMutation>;
  seo_data?: InputMaybe<PrivacySeo_DataMutation>;
};

export type PrivacySeo_Data = {
  __typename?: 'PrivacySeo_data';
  meta_canonical?: Maybe<Scalars['String']>;
  meta_description?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
};

export type PrivacySeo_DataMutation = {
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
  getHomepageDocument: HomepageDocument;
  getHomepageList: HomepageConnection;
  getPrivacyDocument: PrivacyDocument;
  getPrivacyList: PrivacyConnection;
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


export type QueryGetHomepageDocumentArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryGetHomepageListArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
};


export type QueryGetPrivacyDocumentArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryGetPrivacyListArgs = {
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

export type MeetTheTeamFragment = { __typename?: 'HomepageContent_sectionsMeet_the_team', heading?: string | null | undefined, description?: string | null | undefined, team_members?: Array<{ __typename?: 'HomepageContent_sectionsMeet_the_teamTeam_members', name?: string | null | undefined, position?: string | null | undefined, avatar?: string | null | undefined } | null | undefined> | null | undefined };

export type WhoWeWorkWithFragment = { __typename?: 'HomepageContent_sectionsWho_we_work_with', heading?: string | null | undefined, content?: any | null | undefined, charities?: Array<{ __typename?: 'HomepageContent_sectionsWho_we_work_withCharities', charity_name?: string | null | undefined, charity_logo?: string | null | undefined } | null | undefined> | null | undefined };

export type OurServicesFragment = { __typename?: 'HomepageContent_sectionsOur_services', heading?: string | null | undefined, description?: string | null | undefined };

export type PoweredByDataFragment = { __typename?: 'HomepageContent_sectionsPowered_by_data', heading?: string | null | undefined, content?: any | null | undefined };

export type WhyRgFragment = { __typename?: 'HomepageContent_sectionsWhy_rg', heading?: string | null | undefined, content?: any | null | undefined };

export type CallToActionFragment = { __typename?: 'HomepageContent_sectionsCall_to_action', heading?: string | null | undefined, button_text?: string | null | undefined };

export type GetHomepageQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type GetHomepageQuery = { __typename?: 'Query', getHomepageDocument: { __typename?: 'HomepageDocument', id: string, values: any, dataJSON: any, data: { __typename?: 'Homepage', seo_data?: { __typename?: 'HomepageSeo_data', meta_title?: string | null | undefined, meta_description?: string | null | undefined, meta_canonical?: string | null | undefined } | null | undefined, hero?: { __typename?: 'HomepageHero', hero_heading?: string | null | undefined, hero_description?: string | null | undefined, hero_button_text?: string | null | undefined } | null | undefined, content_sections?: Array<{ __typename: 'HomepageContent_sectionsCall_to_action', heading?: string | null | undefined, button_text?: string | null | undefined } | { __typename: 'HomepageContent_sectionsMeet_the_team', heading?: string | null | undefined, description?: string | null | undefined, team_members?: Array<{ __typename?: 'HomepageContent_sectionsMeet_the_teamTeam_members', name?: string | null | undefined, position?: string | null | undefined, avatar?: string | null | undefined } | null | undefined> | null | undefined } | { __typename: 'HomepageContent_sectionsOur_services', heading?: string | null | undefined, description?: string | null | undefined } | { __typename: 'HomepageContent_sectionsPowered_by_data', heading?: string | null | undefined, content?: any | null | undefined } | { __typename: 'HomepageContent_sectionsWho_we_work_with', heading?: string | null | undefined, content?: any | null | undefined, charities?: Array<{ __typename?: 'HomepageContent_sectionsWho_we_work_withCharities', charity_name?: string | null | undefined, charity_logo?: string | null | undefined } | null | undefined> | null | undefined } | { __typename: 'HomepageContent_sectionsWhy_rg', heading?: string | null | undefined, content?: any | null | undefined } | null | undefined> | null | undefined } } };

export type GetPrivacyPageQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type GetPrivacyPageQuery = { __typename?: 'Query', getPrivacyDocument: { __typename?: 'PrivacyDocument', id: string, values: any, dataJSON: any, data: { __typename?: 'Privacy', body?: any | null | undefined, seo_data?: { __typename?: 'PrivacySeo_data', meta_title?: string | null | undefined, meta_description?: string | null | undefined, meta_canonical?: string | null | undefined } | null | undefined, hero?: { __typename?: 'PrivacyHero', hero_heading?: string | null | undefined, hero_description?: string | null | undefined, hero_button_text?: string | null | undefined } | null | undefined } } };

export const MeetTheTeamFragmentDoc = gql`
    fragment MeetTheTeam on HomepageContent_sectionsMeet_the_team {
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
    fragment WhoWeWorkWith on HomepageContent_sectionsWho_we_work_with {
  heading
  content
  charities {
    charity_name
    charity_logo
  }
}
    `;
export const OurServicesFragmentDoc = gql`
    fragment OurServices on HomepageContent_sectionsOur_services {
  heading
  description
}
    `;
export const PoweredByDataFragmentDoc = gql`
    fragment PoweredByData on HomepageContent_sectionsPowered_by_data {
  heading
  content
}
    `;
export const WhyRgFragmentDoc = gql`
    fragment WhyRg on HomepageContent_sectionsWhy_rg {
  heading
  content
}
    `;
export const CallToActionFragmentDoc = gql`
    fragment CallToAction on HomepageContent_sectionsCall_to_action {
  heading
  button_text
}
    `;
export const GetHomepageDocument = gql`
    query getHomepage($relativePath: String!) {
  getHomepageDocument(relativePath: $relativePath) {
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
      content_sections {
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
export const GetPrivacyPageDocument = gql`
    query getPrivacyPage($relativePath: String!) {
  getPrivacyDocument(relativePath: $relativePath) {
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
      body
    }
    values
    dataJSON
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getHomepage(variables: GetHomepageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetHomepageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetHomepageQuery>(GetHomepageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getHomepage');
    },
    getPrivacyPage(variables: GetPrivacyPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetPrivacyPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPrivacyPageQuery>(GetPrivacyPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPrivacyPage');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;