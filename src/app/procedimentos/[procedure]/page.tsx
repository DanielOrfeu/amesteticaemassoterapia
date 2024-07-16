'use client'
import { procedures } from '@/data/procedures'
import { useParams } from 'next/navigation'

function Procedure() {
  const { procedure } = useParams()
  return (
    <div className="content center flex w-full flex-1 justify-center">
      {procedures.find((p) => p.pathName === procedure) ? (
        <div>
          <h1>{procedures.find((p) => p.pathName === procedure)?.name}</h1>
          <p>{procedures.find((p) => p.pathName === procedure)?.description}</p>
        </div>
      ) : (
        <h1>Procedimento não encontrado</h1>
      )}
    </div>
  )
}

export default Procedure
