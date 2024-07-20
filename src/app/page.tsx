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
import { CalendarClock, CircleHelp, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function Home() {
  const [size, setsize] = useState<number>(130)

  const newSize = () => {
    setsize(window.innerWidth / 7 > 130 ? 130 : window.innerWidth / 7)
  }

  useEffect(() => {
    window.addEventListener('resize', newSize)

    return () => {
      window.removeEventListener('resize', newSize)
    }
  }, [size])

  return (
    <main className="flex w-full flex-1 flex-col">
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
        <div className="action-icons flex flex-wrap justify-center gap-5 text-center">
          <div className="about w-10/12 max-w-[150px]">
            <Link
              className="break-word flex flex-col items-center justify-center"
              href="/sobre"
            >
              <CircleHelp size={size} />
              <span className="text-lg font-bold">Sobre mim</span>
            </Link>
          </div>
          <div className="schedule w-10/12 max-w-[150px]">
            <Link
              className="flex flex-col items-center justify-center"
              href="/agendamento"
            >
              <CalendarClock size={size} />
              <span className="text-lg font-bold">Agendar atendimento</span>
            </Link>
          </div>
          <div className="location w-10/12 max-w-[150px]">
            <Link
              className="flex flex-col items-center justify-center"
              href="https://www.google.com.br/maps/place/R.+Rio+Grande+do+Sul,+280+-+Juscelino,+Mesquita+-+RJ,+26553-320/@-22.7698772,-43.440055,17z/data=!3m1!4b1!4m6!3m5!1s0x9966f07ba29d05:0x647a2932347b4a37!8m2!3d-22.7698773!4d-43.4351841!16s%2Fg%2F11c7t48rmd?entry=ttu"
            >
              <MapPin size={size} />
              <span className="text-lg font-bold">Local de atendimento</span>
            </Link>
          </div>
          <div className="vitalidade w-10/12 max-w-[150px]">
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
