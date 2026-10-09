import { Suspense } from 'react'

async function DetailContent({ params }) {
  const {id} = await params

  const res = await fetch(`https://api.api-store.workers.dev/api/fitlog/${id}`)
  const SingleData = await res.json()

  return (
    <div>
        {SingleData.map}
    </div>
  )
}

export default function Page({ params }) {
  return (
    <Suspense fallback={<div className="py-16 text-center text-sm text-[#7F8490]">Loading workout...</div>}>
      <DetailContent params={params} />
    </Suspense>
  )
}
