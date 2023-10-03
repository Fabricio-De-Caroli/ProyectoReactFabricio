import RddTwo from "./assets/red-dead-redemption-2-2019101812583956_1.jpg"
import NFSH from "./assets/Need-For-Speed-Heat-2019-1.jpg"
import GTA5 from "./assets/1366_2000.jpeg"

export const products = [
	{ 
        id: 1,
        src: RddTwo, 
        title: 'Red Dead Redemption 2',
        alt: "Red Dead  Redemption 2 image",
        description: 'An incredible game which has become one of the most popular game this last years',
        fullDescription:`America, 1899. The end of the Wild West era has begun as lawmen hunt down the last remaining outlaw gangs. 
                        Those who will not surrender or succumb are killed.`,
        price:60,
        stock:20
    },
    {
        id: 2,
        src: NFSH,
        title: 'Need for Speed Heat',
        alt: "Need for speed heat image",
        description: 'One of the most sport race game played this year',
        fullDescription:`Race against time, outsmart the cops, and take on weekly qualifiers to reach The Grand, Lakeshore's ultimate street racing challenge. 
                        Pack your garage with precision-tuned, custom rides and light up the streets with your style, exclusive fits, and a vibrant global soundtrack 
                        that bumps in every corner of the world.`,
        price:40,
        stock:40
    },
    {
        id: 3,
        src: GTA5,
        title:"Grand theft auto 5",
        alt: "Grand theft auto 5 image",
        description:"This game has been played for the last 10 years andd nowadays is still played by hundred of persons",
        fullDescription:`Welcome to Los Santos When a young street hustler, a retired bank robber, and a terrifying psychopath find 
                        themselves entangled with some of the most frightening and deranged elements of the criminal underworld,
                        the U.S. government, and the entertainment industry, they must pull off a series of dangerous
                        heists to survive in a ruthless city in which they can trust nobody — least of all each other.`,
        price:20,
        stock:150
    }
]
