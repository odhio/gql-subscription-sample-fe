'use client'

import { useGetPingQuery } from '~/lib/generated/client';

export default function Home() {
  const { data, fetching, error } =  useGetPingQuery()[0]

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div>{data?.ping}</div>
  )
}
