
import {
    Button,
    Menu,
    MenuHandler,
    MenuList
} from "@material-tailwind/react";
import React from "react";


export function MenuCustomList() {
    const [openMenu, setOpenMenu] = React.useState(false);

   

  

    return (
        <Menu open={openMenu} handler={setOpenMenu} allowHover>
            <MenuHandler className='py-0 px-0 text-white flex items-center gap-1'>
                <Button
                    className="flex items-center gap-3 text-lg font-normal uppercase tracking-normal"
                >
                    ru
                </Button>
            </MenuHandler>
            <MenuList className="relative border-[#33353F] z-50 bg-[#131131] py-1 -translate-y-4 overflow-visible">
                <div>
                    <ul className='flex flex-col gap-1'>
                                <li key={locale} className=''>
                                    <Link
                                        href={redirectedPathName(locale)}
                                        className={`rounded-md flex items-center justify-between px-2 gap-2 ${locale === lang ? "" : ""} text-lg text-white`}
                                    >
                                        {locale}
                                        <div className='w-[25px]'>
                                            <Image src={imgs.find(el => el.id === locale)?.img ?? ''} alt="img" />
                                        </div>
                                    </Link>
                                </li>
                            
                    </ul>
                </div>
            </MenuList>
        </Menu>
    );
}