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
  content_sections?: Maybe<Array<Maybe<PagesContent_Sections>>>;
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

export type PagesContent_Sections = PagesContent_SectionsCall_To_Action | PagesContent_SectionsMeet_The_Team | PagesContent_SectionsOur_Services | PagesContent_SectionsPowered_By_Data | PagesContent_SectionsWho_We_Work_With | PagesContent_SectionsWhy_Rg;

export type PagesContent_SectionsCall_To_Action = {
  __typename?: 'PagesContent_sectionsCall_to_action';
  button_text?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
};

export type PagesContent_SectionsCall_To_ActionMutation = {
  button_text?: InputMaybe<Scalars['String']>;
  heading?: InputMaybe<Scalars['String']>;
};

export type PagesContent_SectionsMeet_The_Team = {
  __typename?: 'PagesContent_sectionsMeet_the_team';
  description?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  team_members?: Maybe<Array<Maybe<PagesContent_SectionsMeet_The_TeamTeam_Members>>>;
};

export type PagesContent_SectionsMeet_The_TeamMutation = {
  description?: InputMaybe<Scalars['String']>;
  heading?: InputMaybe<Scalars['String']>;
  team_members?: InputMaybe<Array<InputMaybe<PagesContent_SectionsMeet_The_TeamTeam_MembersMutation>>>;
};

export type PagesContent_SectionsMeet_The_TeamTeam_Members = {
  __typename?: 'PagesContent_sectionsMeet_the_teamTeam_members';
  avatar?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
};

export type PagesContent_SectionsMeet_The_TeamTeam_MembersMutation = {
  avatar?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['String']>;
};

export type PagesContent_SectionsMutation = {
  call_to_action?: InputMaybe<PagesContent_SectionsCall_To_ActionMutation>;
  meet_the_team?: InputMaybe<PagesContent_SectionsMeet_The_TeamMutation>;
  our_services?: InputMaybe<PagesContent_SectionsOur_ServicesMutation>;
  powered_by_data?: InputMaybe<PagesContent_SectionsPowered_By_DataMutation>;
  who_we_work_with?: InputMaybe<PagesContent_SectionsWho_We_Work_WithMutation>;
  why_rg?: InputMaybe<PagesContent_SectionsWhy_RgMutation>;
};

export type PagesContent_SectionsOur_Services = {
  __typename?: 'PagesContent_sectionsOur_services';
  description?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  team_members?: Maybe<Array<Maybe<PagesContent_SectionsOur_ServicesTeam_Members>>>;
};

export type PagesContent_SectionsOur_ServicesMutation = {
  description?: InputMaybe<Scalars['String']>;
  heading?: InputMaybe<Scalars['String']>;
  team_members?: InputMaybe<Array<InputMaybe<PagesContent_SectionsOur_ServicesTeam_MembersMutation>>>;
};

export type PagesContent_SectionsOur_ServicesTeam_Members = {
  __typename?: 'PagesContent_sectionsOur_servicesTeam_members';
  service_description?: Maybe<Scalars['String']>;
  service_title?: Maybe<Scalars['String']>;
};

export type PagesContent_SectionsOur_ServicesTeam_MembersMutation = {
  service_description?: InputMaybe<Scalars['String']>;
  service_title?: InputMaybe<Scalars['String']>;
};

export type PagesContent_SectionsPowered_By_Data = {
  __typename?: 'PagesContent_sectionsPowered_by_data';
  content?: Maybe<Scalars['JSON']>;
  heading?: Maybe<Scalars['String']>;
};

export type PagesContent_SectionsPowered_By_DataMutation = {
  content?: InputMaybe<Scalars['JSON']>;
  heading?: InputMaybe<Scalars['String']>;
};

export type PagesContent_SectionsWho_We_Work_With = {
  __typename?: 'PagesContent_sectionsWho_we_work_with';
  charities?: Maybe<Array<Maybe<PagesContent_SectionsWho_We_Work_WithCharities>>>;
  content?: Maybe<Scalars['JSON']>;
  heading?: Maybe<Scalars['String']>;
};

export type PagesContent_SectionsWho_We_Work_WithCharities = {
  __typename?: 'PagesContent_sectionsWho_we_work_withCharities';
  charity_logo?: Maybe<Scalars['String']>;
  charity_name?: Maybe<Scalars['String']>;
};

export type PagesContent_SectionsWho_We_Work_WithCharitiesMutation = {
  charity_logo?: InputMaybe<Scalars['String']>;
  charity_name?: InputMaybe<Scalars['String']>;
};

export type PagesContent_SectionsWho_We_Work_WithMutation = {
  charities?: InputMaybe<Array<InputMaybe<PagesContent_SectionsWho_We_Work_WithCharitiesMutation>>>;
  content?: InputMaybe<Scalars['JSON']>;
  heading?: InputMaybe<Scalars['String']>;
};

export type PagesContent_SectionsWhy_Rg = {
  __typename?: 'PagesContent_sectionsWhy_rg';
  content?: Maybe<Scalars['JSON']>;
  heading?: Maybe<Scalars['String']>;
};

export type PagesContent_SectionsWhy_RgMutation = {
  content?: InputMaybe<Scalars['JSON']>;
  heading?: InputMaybe<Scalars['String']>;
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
  content_sections?: InputMaybe<Array<InputMaybe<PagesContent_SectionsMutation>>>;
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

export type MeetTheTeamFragment = { __typename?: 'PagesContent_sectionsMeet_the_team', heading?: string | null | undefined, description?: string | null | undefined, team_members?: Array<{ __typename?: 'PagesContent_sectionsMeet_the_teamTeam_members', name?: string | null | undefined, position?: string | null | undefined, avatar?: string | null | undefined } | null | undefined> | null | undefined };

export type WhoWeWorkWithFragment = { __typename?: 'PagesContent_sectionsWho_we_work_with', heading?: string | null | undefined, content?: any | null | undefined, charities?: Array<{ __typename?: 'PagesContent_sectionsWho_we_work_withCharities', charity_name?: string | null | undefined, charity_logo?: string | null | undefined } | null | undefined> | null | undefined };

export type OurServicesFragment = { __typename?: 'PagesContent_sectionsOur_services', heading?: string | null | undefined, description?: string | null | undefined };

export type PoweredByDataFragment = { __typename?: 'PagesContent_sectionsPowered_by_data', heading?: string | null | undefined, content?: any | null | undefined };

export type WhyRgFragment = { __typename?: 'PagesContent_sectionsWhy_rg', heading?: string | null | undefined, content?: any | null | undefined };

export type CallToActionFragment = { __typename?: 'PagesContent_sectionsCall_to_action', heading?: string | null | undefined, button_text?: string | null | undefined };

export type GetHomepageQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type GetHomepageQuery = { __typename?: 'Query', getPagesDocument: { __typename?: 'PagesDocument', id: string, values: any, dataJSON: any, data: { __typename?: 'Pages', seo_data?: { __typename?: 'PagesSeo_data', meta_title?: string | null | undefined, meta_description?: string | null | undefined, meta_canonical?: string | null | undefined } | null | undefined, hero?: { __typename?: 'PagesHero', hero_heading?: string | null | undefined, hero_description?: string | null | undefined, hero_button_text?: string | null | undefined } | null | undefined, content_sections?: Array<{ __typename: 'PagesContent_sectionsCall_to_action', heading?: string | null | undefined, button_text?: string | null | undefined } | { __typename: 'PagesContent_sectionsMeet_the_team', heading?: string | null | undefined, description?: string | null | undefined, team_members?: Array<{ __typename?: 'PagesContent_sectionsMeet_the_teamTeam_members', name?: string | null | undefined, position?: string | null | undefined, avatar?: string | null | undefined } | null | undefined> | null | undefined } | { __typename: 'PagesContent_sectionsOur_services', heading?: string | null | undefined, description?: string | null | undefined } | { __typename: 'PagesContent_sectionsPowered_by_data', heading?: string | null | undefined, content?: any | null | undefined } | { __typename: 'PagesContent_sectionsWho_we_work_with', heading?: string | null | undefined, content?: any | null | undefined, charities?: Array<{ __typename?: 'PagesContent_sectionsWho_we_work_withCharities', charity_name?: string | null | undefined, charity_logo?: string | null | undefined } | null | undefined> | null | undefined } | { __typename: 'PagesContent_sectionsWhy_rg', heading?: string | null | undefined, content?: any | null | undefined } | null | undefined> | null | undefined } } };

export const SeoDataFragmentDoc = gql`
    fragment SeoData on PagesSeo_data {
  meta_title
  meta_description
  meta_canonical
}
    `;
export const MeetTheTeamFragmentDoc = gql`
    fragment MeetTheTeam on PagesContent_sectionsMeet_the_team {
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
    fragment WhoWeWorkWith on PagesContent_sectionsWho_we_work_with {
  heading
  content
  charities {
    charity_name
    charity_logo
  }
}
    `;
export const OurServicesFragmentDoc = gql`
    fragment OurServices on PagesContent_sectionsOur_services {
  heading
  description
}
    `;
export const PoweredByDataFragmentDoc = gql`
    fragment PoweredByData on PagesContent_sectionsPowered_by_data {
  heading
  content
}
    `;
export const WhyRgFragmentDoc = gql`
    fragment WhyRg on PagesContent_sectionsWhy_rg {
  heading
  content
}
    `;
export const CallToActionFragmentDoc = gql`
    fragment CallToAction on PagesContent_sectionsCall_to_action {
  heading
  button_text
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
    ${SeoDataFragmentDoc}
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
    getHomepage(variables: GetHomepageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetHomepageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetHomepageQuery>(GetHomepageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getHomepage');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;