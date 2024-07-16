import Image from 'next/image'

function Header() {
  return (
    <header className="flex items-center justify-center gap-3 bg-vital-4 p-2 text-white">
      <Image
        src="/lotus.svg"
        alt="am estértica e massoterapia logo"
        width={30}
        height={30}
      />
      <h1 className="break-words text-center text-2xl font-bold">
        AM Estética e Massoterapia
      </h1>
    </header>
  )
}

export default Header
