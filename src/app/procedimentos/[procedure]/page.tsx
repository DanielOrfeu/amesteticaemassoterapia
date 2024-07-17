'use client'
import { ProcedureModel, procedures } from '@/data/procedures'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

function Procedure() {
  const { procedure } = useParams()
  const [selectedProcedure, setselectedProcedure] =
    useState<ProcedureModel | null>(null)

  useEffect(() => {
    setselectedProcedure(
      procedures.find((p) => p.pathName === procedure) || null,
    )
  }, [procedure])

  return (
    <>
      {selectedProcedure ? (
        <div className="flex flex-1 flex-col justify-center p-8">
          <div className="main-txt flex flex-col items-center justify-center gap-5">
            <h1 className="text-xl font-bold sm:text-3xl">
              {selectedProcedure.name}
            </h1>
            <span className="pb-5 text-sm sm:text-lg md:w-6/12">
              {selectedProcedure.description}
            </span>
          </div>
          <div className="infos flex flex-col items-center justify-center gap-5">
            {selectedProcedure.indications &&
              selectedProcedure.indications !== '' && (
                <>
                  <h1 className="boder-2 text-xl font-bold sm:text-2xl md:w-6/12">
                    Indicações:
                  </h1>
                  <span className="text-sm sm:text-lg md:w-6/12">
                    <ul>
                      {selectedProcedure.indications.split(';').map((i) => (
                        <li className="list-disc" key={i}>
                          {i}
                        </li>
                      ))}
                    </ul>
                  </span>
                </>
              )}

            {selectedProcedure.benefits &&
              selectedProcedure.benefits !== '' && (
                <>
                  <h1 className="boder-2 text-xl font-bold sm:text-2xl md:w-6/12">
                    Benefícios:
                  </h1>
                  <span className="text-sm sm:text-lg md:w-6/12">
                    <ul>
                      {selectedProcedure.benefits.split(';').map((i) => (
                        <li className="list-disc" key={i}>
                          {i}
                        </li>
                      ))}
                    </ul>
                  </span>
                </>
              )}
            <h1 className="boder-2 text-xl font-bold sm:text-2xl md:w-6/12">
              Contraindicações:
            </h1>
            <span className="text-sm sm:text-lg md:w-6/12">
              <ul>
                {selectedProcedure.contraindications.split(';').map((i) => (
                  <li className="list-disc" key={i}>
                    {i}
                  </li>
                ))}
              </ul>
            </span>
          </div>
        </div>
      ) : (
        <h1>Não econtrado</h1>
      )}
    </>
  )
}

export default Procedure
