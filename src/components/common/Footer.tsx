const Footer = () => {
    return (
        <footer className="bg-brand px-12 py-16 mt-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 text-white">
                <div className="col-span-2">
                    <h2 className="text-3xl font-bold">AutomaCo</h2>
                </div>

                <div className="flex flex-col gap-3 opacity-90">
                    <p className="font-semibold">Lorem ipsum</p>
                    <p className="text-sm">Lorem ipsum sit</p>
                    <p className="text-sm">Lorem sit amet.</p>
                </div>

                <div className="flex flex-col gap-3 opacity-90">
                    <p className="font-semibold">Lorem ipsum</p>
                    <p className="text-sm">Lorem ipsum dolor</p>
                    <p className="text-sm">Lorem ipsum dolor sit</p>
                </div>

                <div className="flex flex-col gap-3">
                    <p className="font-semibold">+(503) 7000-9000</p>
                    <p className="text-sm">Example@gmail.com</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;