import { gql } from "@apollo/client";

export const QUERY_QUALITY = gql`
{
sleepQuality {
_id
quality
}
}
`
export const QUERY_LENGTH = gql`
{
length{
_id
hours
}
}
`