import Header from '@/components/header'

interface Props {
  children: React.ReactNode
}

function ProcedureLayout({ children }: Readonly<Props>) {
  return (
    <div className="0 flex flex-1 flex-col">
      <Header />
      {children}
    </div>
  )
}

export default ProcedureLayout
