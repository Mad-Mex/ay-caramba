import "./Footer.css"

const Footer = () => {

    return (
        <footer className='flex w-full bg-primaryLight justify-center footer'>
            <div className='flex flex-col items-center py-8'>
                <h1 className="text-xl text-white">Contactanos</h1>
                <div className="flex justify-center items-center w-full mt-3">
                    <button className="hover:drop-shadow-2xl duration-500">
                        <a href="https://instagram.com/ay.caramba.arg?igshid=YmMyMTA2M2Y=" target="_blank" rel='noopener noreferrer' >
                            <img className='instagramIcon mr-8' src="/images/instagramFooter.png" alt="" />
                        </a>
                    </button>
                    <button className="hover:drop-shadow-2xl duration-500">
                        <a href="" target="_blank" rel='noopener noreferrer' >
                            <img className='facebookIcon' src="/images/facebookFooter.png" alt="" />
                        </a>
                    </button>
                    
                </div>
                <p className="pt-4 text-white">Whatsapp (+54 9 11 34 15 5656)</p>
            </div>
        </footer>
    )
}

export { Footer } 