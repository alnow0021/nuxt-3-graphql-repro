<template> example </template>

<script lang="ts" setup>
import { print } from 'graphql'
import GET_EXAMPLE from '../query/getExample.gql'

const stringQuery = print(GET_EXAMPLE)

console.log(stringQuery)
</script>
