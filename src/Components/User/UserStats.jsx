import React from 'react'
import Head from '../Helper/Head'
import { useFetch } from '../../Hooks/useFetch'
import { STATS_GET } from '../../api'
import { Loading } from '../Helper/Loading/Loading'
import { Error } from '../Helper/Error'
const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs/UserStatsGraphs'))

export const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET()
      await request(url, options)
    }
    getData()
  }, [request])
  if (loading) return <Loading/>
  if (error) return <Error error={error}/>
  if (data) {
    return (
      <div>
        <Head title="Estatísticas"/>
        <React.Suspense fallback={<div></div>}>
          <UserStatsGraphs data={data}/>
        </React.Suspense>

      </div>
    )
  } else return null

}
