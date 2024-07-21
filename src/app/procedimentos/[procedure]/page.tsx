'use client'
import { Button } from '@/components/ui/button'
import { ProcedureModel, procedures } from '@/data/procedures'
import { PhoneCall } from 'lucide-react'
import Link from 'next/link'
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
          <Button className="mt-8 w-fit self-center">
            <Link
              className="flex flex-row items-center gap-2"
              href={`/agendamento?procedimento=${selectedProcedure.pathName}`}
            >
              <PhoneCall size={24} className="hidden sm:flex" />
              <span className="">Agendar procedimento</span>
            </Link>
          </Button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center p-8">
          <h1 className="self-center text-center text-xl font-bold sm:text-2xl">
            Procedimento não encontrado
          </h1>
          <Button className="mt-8 w-fit self-center">
            <Link
              className="flex flex-row items-center gap-2"
              href={`https://wa.me/5521989711190?text=${encodeURIComponent(`Olá. Gostaria de mais detalhes sobre os procedimentos disponíveis. Fiz uma busca no site e não encontrei o que procurava.`)}`}
            >
              <PhoneCall size={24} className="hidden sm:flex" />
              <span>Buscar informações sobre procedimentos</span>
            </Link>
          </Button>
        </div>
      )}
    </>
  )
}

export default Procedure
