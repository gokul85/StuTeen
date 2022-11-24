import { GiFruitTree, GiBeerBottle, GiBowlOfRice, GiHamburger } from "react-icons/gi";
import { MdOutlineIcecream } from "react-icons/md";
import {FaFish} from "react-icons/fa";

export const Categories = [
    {
        id: 1,
        name: "Snacks",
        urlParam: 'snacks',
        icon: <GiHamburger />,
    },
    {
        id: 2,
        name: "Beverages",
        urlParam: 'drinks',
        icon: <GiBeerBottle />,
    },
    {
        id: 3,
        name: "Icecreams",
        urlParam: 'icecreams',
        icon: <MdOutlineIcecream />,
    }
]