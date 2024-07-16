'use client'
import Header from '@/components/header'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'
import { procedures } from '@/data/procedures'
import { CalendarClock, CircleHelp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function Home() {
  const [size, setsize] = useState<number>(170)

  const newSize = () => {
    setsize(window.innerWidth / 5 > 170 ? 170 : window.innerWidth / 5)
  }

  useEffect(() => {
    window.addEventListener('resize', newSize)

    return () => {
      window.removeEventListener('resize', newSize)
    }
  }, [size])

  return (
    <main className="flex w-full flex-1 flex-col border-4 border-red-800">
      <Header />
      <div className="content flex flex-1 flex-col items-center justify-center gap-5 p-8">
        <div className="presentation flex flex-col items-center justify-center gap-2">
          <h1 className="hidden text-2xl font-bold sm:flex sm:text-center sm:text-3xl">
            Bem vindo ao site AM Estética e Massoterapia
          </h1>
          <span className="text-md sm:w-7/12 sm:text-center sm:text-lg">
            Aqui oferecemos os melhores tratamentos com preços acessíveis. Você
            também vai encontrar detalhes sobre os procedimentos, um pouco sobre
            minha história e detelhes de nosso projeto chamado Instituto
            Vitalidade.
          </span>
        </div>
        <div className="action-icons break-word flex flex-wrap items-center justify-center gap-4 text-center">
          <div className="about">
            <Link
              className="flex flex-col items-center justify-center"
              href="/sobre"
            >
              <CircleHelp size={size} />
              <span className="text-lg font-bold">Sobre mim</span>
            </Link>
          </div>
          <div className="schedule">
            <Link
              className="flex flex-col items-center justify-center"
              href="/agendamento"
            >
              <CalendarClock size={size} />
              <span className="text-lg font-bold">Agendar atendimento</span>
            </Link>
          </div>
          <div className="vitalidade">
            <Link
              className="flex flex-col items-center justify-center"
              href="https://institutovitalidade.com.br"
            >
              <Image
                src="/instituto.svg"
                alt="instituto vitalidade"
                width={size}
                height={size}
                className="instituto-vitalidade rounded-full"
              />
              <span className="text-lg font-bold">Instituto Vitalidade</span>
            </Link>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-5">
          <h1 className="text-2xl font-bold">Procedimentos</h1>
          <Carousel
            opts={{
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className="w-10/12 md:w-8/12"
          >
            <CarouselContent>
              {procedures.map((procedure) => (
                <CarouselItem
                  key={procedure.name}
                  className="basis-6/12 lg:basis-3/12 xl:basis-2/12"
                >
                  <Link href={`/procedimentos/${procedure.pathName}`}>
                    <div>
                      <Card>
                        <Image
                          src={`/procedures/${procedure.pathName}.jpg`}
                          alt={procedure.name}
                          width={2000}
                          height={2000}
                          className="aspect-square w-full rounded-lg object-cover"
                        />
                      </Card>
                      <span className="text-sm font-bold sm:text-lg">
                        {procedure.name}
                      </span>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
          <Button asChild>
            <Link href={'/procedimentos'}>Ver Todos</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
