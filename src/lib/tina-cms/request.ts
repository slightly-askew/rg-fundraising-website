import * as types from './__generated__/types'
import { type DocumentNode } from 'graphql'

interface requestQuery {
  preview?: boolean
  query: keyof ReturnType<typeof types.getSdk>
  variables?: Parameters<
    ReturnType<typeof types.getSdk>[requestQuery['query']]
  >[0]
  pageHeaders?: Parameters<
    ReturnType<typeof types.getSdk>[requestQuery['query']]
  >[1]
}

interface RequestReturn<T> {
  data: T
  query: string | undefined
  variables:
    | Parameters<ReturnType<typeof types.getSdk>[requestQuery['query']]>[0]
    | void
}

export async function request<T>({
  query,
  pageHeaders,
  variables,
}: requestQuery): Promise<RequestReturn<T>> {
  const GraphQLClient = await import('graphql-request').then(
    (res) => res.GraphQLClient
  )

  const client = new GraphQLClient('http://localhost:4001/graphql')

  const querySymbol =
    query.charAt(0).toUpperCase() + query.slice(1) + 'Document'

  //@ts-expect-error doesn't match querysymbol to known export
  const queryString = getGqlString(types[querySymbol])

  const sdk = types.getSdk(client)
  //@ts-expect-error need to narrow type to Promise<T>
  const data = await sdk[query](variables, pageHeaders)

  return {
    //@ts-expect-error unknown
    data,
    query: queryString,
    variables,
  }
}

function getGqlString(doc: DocumentNode) {
  return doc.loc && doc.loc.source.body
}
