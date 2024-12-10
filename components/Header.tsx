"use client";
import { Button } from "./ui/button"
import { useRouter } from 'next/navigation';
const links = [
    {
        title:"Accueil",
        href:"/"
    },
    {
        title:"Fonctionnalités",
        href:"/features"
    },
    {
        title:"Tarifs",
        href:"/pricing"
    },
    {
        title:"Contact",
        href:"/contact"
    }
]
const Header = () => {
    const router = useRouter();
    const handleNavigate = () => {
        router.push("/login");
      };
    return(
        <>
        <header className="sticky top-0 bg-white" data-aos="fade-down">
           <div className="container flex justify-between items-center mx-auto h-12 py-8">
            <div id="Logo">
                    <h1 className="text-3xl font-black">Link<span>AI</span></h1>
                </div>
                <div className="flex items-center gap-8">
                    <ul className="flex gap-8">
                        {links.map((links,key) => (
                            <li key={key}><a href={links.href}>{links.title}</a></li>
                        ))}
                    </ul>
                    <div className="flex gap-2">
                        <Button className="bg-primary text-primary-foreground px-4 py-2 rounded" onClick={handleNavigate}>Login</Button>
                        <Button variant={"outline"}>Register</Button>
                    </div>
                </div>
           </div>
           <hr />
        </header>
        </>
    )
}

export default Header