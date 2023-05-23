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

export const QUERY_USER_DURATION =gql`
query getDuration($duration: ID){
duration(duration:$duration){
user{
    email
    firstName
    lastName
duration{
_id
sleepHours
}
}
}
}



`
export const QUERY_USER_QUALITY =gql`
query getQuality($quality: ID){
quality(quality:$quality){
user{
    email
    firstName
    lastName
    quality{
_id
quality
}
}
}
}
`