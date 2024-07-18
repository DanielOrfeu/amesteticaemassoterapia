'use client'

import { Card } from '@/components/ui/card'
import { procedures } from '@/data/procedures'
import Image from 'next/image'
import Link from 'next/link'

function Prodcedures() {
  return (
    <div className="flex flex-1 flex-col">
      <h1 className="self-center pt-5 text-xl font-bold sm:text-2xl">
        Procedimetos
      </h1>
      <div className="flex flex-1 flex-wrap items-center justify-center gap-4">
        {procedures.map((procedure) => (
          <div
            key={procedure.name}
            className="h-[200px] w-[200px] p-4 sm:h-[300px]"
          >
            <Link href={`/procedimentos/${procedure.pathName}`}>
              <Card>
                <Image
                  src={`/procedures/${procedure.pathName}.jpg`}
                  alt={procedure.name}
                  width={200}
                  height={200}
                  className="aspect-square rounded-lg object-cover"
                />
              </Card>
              <span className="text-sm font-bold sm:text-lg">
                {procedure.name}
              </span>
            </Link>
          </div>
        ))}
      </div>
      <h1 className="mb-5 self-center text-center text-xl font-bold">
        Promovendo relaxamento, qualidade de vida, conforto e satisfação.
      </h1>
    </div>
  )
}

export default Prodcedures
