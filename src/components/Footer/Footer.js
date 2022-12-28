const Footer = () => {

    return (
        <footer className='flex w-full h-[13rem] mt-12 pl-44 bg-primaryLight'>
            <div className='flex items-center'>
                <img src="/images/Ay Caramba_white.svg" alt="logoAyCaramba" className='w-32'/>
                <ul className="py-4 px-48 flex items-center text-lg">
                    <div>
                        <li>Figuras</li>
                        <li className="py-3">Cuadros</li>
                        <li>Quienes somos</li>
                    </div>
                    <div className="mx-40">
                        <li>Preguntas frecuentes</li>
                        <li className="py-3">Contacto</li>
                        <li>Avisos legales</li>
                    </div>
                    <div className="pb-10">
                        <li>Síguenos en redes</li>
                        <div className="flex mt-3">
                            <img className='w-6 mr-6' src="/images/whatsapp.png" alt="" />
                            <img className='w-6' src="/images/facebook.png" alt="" />
                        </div>
                    </div>
                </ul>
            </div>
        </footer>
    )
}

export { Footer } 