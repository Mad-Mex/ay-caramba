import "./Footer.css"

const Footer = () => {

    return (
        <footer className='flex w-full bg-primaryLight justify-center footer'>
            <div className='flex flex-col items-center py-8'>
                <h1 className="text-xl text-white">Contactanos</h1>
                <ul className="flex justify-center items-center w-full mt-3">
                    <li>
                        <a href="https://instagram.com/ay.caramba.arg?igshid=YmMyMTA2M2Y=">
                            <img className='instagramIcon mr-8' src="/images/instagramFooter.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img className='facebookIcon' src="/images/facebookFooter.png" alt="" />
                        </a>
                    </li>
                    
                </ul>
                <p className="pt-4 text-white">Whatsapp (+54 9 11 34 15 5656)</p>
            </div>
        </footer>
    )
}

export { Footer } 