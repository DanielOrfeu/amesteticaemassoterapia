'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { procedures } from '@/data/procedures'
import { Checkbox } from '@/components/ui/checkbox'

const FormSchema = z.object({
  name: z
    .string({
      required_error: 'Nome é obrigatório',
    })
    .min(2, { message: 'Nome é obrigatório' })
    .trim()
    .refine((name) => name.split(' ').length > 1, {
      message: 'Insira um sobrenome',
    })
    .transform((name) => {
      return name
        .split(' ')
        .map((word) => {
          return word[0].toUpperCase() + word.substring(1)
        })
        .join(' ')
    }),

  age: z
    .string({
      required_error: 'Idade é obrigatório',
    })
    .refine((age) => !Number.isNaN(+age), {
      message: 'Valor inválido para idade',
    })
    .refine((age) => +age >= 0 && +age <= 99, { message: 'Idade inválida' }),

  job: z
    .string({
      required_error: 'Ocupação é obrigatório',
    })
    .min(2, { message: 'Ocupação é obrigatório' })
    .trim(),

  procedures: z
    .array(z.string(), {
      required_error: 'Selecione ao menos um procedimento',
    })
    .refine((value) => value.some((item) => item), {
      message: 'Selecione ao menos um procedimento',
    }),

  complaint: z
    .string({
      required_error: 'Queixa é obrigatória',
    })
    .min(2, { message: 'Queixa é obrigatória' })
    .trim(),

  treatments: z.string().optional(),

  allergies: z.string().optional(),
})

export default function Agendamento() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      procedures: [useSearchParams().get('procedimento') || ''],
    },
  })

  const sendToWhasApp = (data: z.infer<typeof FormSchema>) => {
    const textToSend = `Olá! Me chamo ${data.name}, tenho ${data.age} anos e trabalho como *${data.job}*.\nEstou com algums problemas como *${data.complaint}* e gostaria de agendar atendimento pada o(s) procedimento(s):\n\n${data.procedures
      .map((item) => `*${procedures.find((p) => p.pathName === item)?.name}*`)
      .toString()
      .replace(
        /,/g,
        '\n',
      )}\n\nSe fiz ou faço tratamento para alguma doença? ${data.treatments || 'N/A'}\nSe tenho alguma alergia? ${data.allergies || 'N/A'}\n\nAguardo retorno. Obrigado!`

    window.open(
      `https://wa.me/5521989711190?text=${encodeURIComponent(textToSend)}`,
      '_blank',
    )
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-center p-5">
      <h1 className="py-2 text-center text-2xl font-bold">
        Agendar atendimento
      </h1>
      <span className="text-center">Preencha todos os dados abaixo:</span>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(sendToWhasApp)}
          className="w-2/3 space-y-3 text-xl"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Insira seu nome e um sobrenome"
                    {...field}
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Idade</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Sua idade aqui"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="job"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ocupação profissional</FormLabel>
                <FormControl>
                  <Input placeholder="Seu trabalho atual" {...field} />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="procedures"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-base">Procedimento</FormLabel>
                  <FormDescription>
                    Selecione um ou mais procedimentos a serem agendados
                  </FormDescription>
                </div>
                <div className="check-item flex flex-wrap gap-x-4 gap-y-2">
                  {procedures.map((procedure) => (
                    <FormField
                      key={procedure.pathName}
                      control={form.control}
                      name="procedures"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={procedure.pathName}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(
                                  procedure.pathName,
                                )}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([
                                        ...(field.value || []),
                                        procedure.pathName,
                                      ])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) =>
                                            value !== procedure.pathName,
                                        ),
                                      )
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {procedure.name}
                            </FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="complaint"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Queixa principal</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Motivo da procura dos procedimentos"
                    {...field}
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="treatments"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Fez ou faz algum tratamento? Se sim, qual(is)?
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Tratamentos de combate à doenças"
                    {...field}
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="allergies"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Possui alergia(s)?</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Exemplo: Rinite, sinusite, etc"
                    {...field}
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Enviar</Button>
        </form>
      </Form>
    </div>
  )
}
