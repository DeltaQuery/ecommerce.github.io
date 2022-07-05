import rokuexpress from "../assets/productsImages/streaming/roku express.png"
import powersupply from "../assets/productsImages/powersupply/powersupply500w.png"
import adata from "../assets/productsImages/ssd/adata240gb.png"
import laptop from "../assets/productsImages/laptop/laptop.png"
import toshiba from "../assets/productsImages/almacenamiento/toshiba.jpg"
import ramMomentDDR38GB from "../assets/productsImages/ram/ramddr3.jpg"
import fireStickLite from "../assets/productsImages/streaming/firelite.png"
import fire7kidsblue from "../assets/productsImages/tablet/fire7kidsblue.png"
import razerMouse from "../assets/productsImages/mouse/razerdeathadder.jpg"
import ramCorsair from "../assets/productsImages/ram/ramcorsairddr4.jpg"
import kingston240gb from "../assets/productsImages/ssd/kingston240gb.png"
import fireStick4k from "../assets/productsImages/streaming/firestick4k.jpg"
import switchOled from "../assets/productsImages/gaming/switcholed.jpg"
import xboxs from "../assets/productsImages/gaming/xboxs.jpg"

export const productArr = [
    {
        _id: "1",
        name: "Roku Express HD Model 2022",
        category: [
            1, 53
        ],
        price: 32.99,
        discountedPrice: 29.99,
        discount: "-10%",
        discountedPriceWith: null,
        discountWith: null,
        features: [
            "WORK AND PLAY: Browse the Internet, write documents, play games, work, and more with this Dell Chromebook",
            "LARGE, HD DISPLAY: Large, 11. 6-inch screen with HD display quality and 1366 x 768 resolution",
            "CONNECT TO ADDITIONAL SCREENS AND DEVICES: Features HDMI port, 2 USB ports, SD card reader, and aux jack; charging cord included",
            "GREAT FOR MULTITASKING: 2GB Ram memory and 16GB storage space",
            "FAST AND POWERFUL: Runs on Intel Celeron N3060 dual-core CPU and Chrome operating system (OS)"
        ],
        images: [
            rokuexpress,
            rokuexpress
        ],
        models: [],
        boughtWith: [],
        stock: 25,
        date: new Date()
    },
    {
        _id: "2",
        name: "Fuente de Poder EVGA 600W 80 Plus Bronce",
        category: [
            3, 51, 53
        ],
        price: 74.99,
        discountedPrice: null,
        discount: null,
        discountedPriceWith: null,
        discountWith: null,
        features: [
            "WORK AND PLAY: Browse the Internet, write documents, play games, work, and more with this Dell Chromebook",
            "LARGE, HD DISPLAY: Large, 11. 6-inch screen with HD display quality and 1366 x 768 resolution",
            "CONNECT TO ADDITIONAL SCREENS AND DEVICES: Features HDMI port, 2 USB ports, SD card reader, and aux jack; charging cord included",
            "GREAT FOR MULTITASKING: 2GB Ram memory and 16GB storage space",
            "FAST AND POWERFUL: Runs on Intel Celeron N3060 dual-core CPU and Chrome operating system (OS)"
        ],
        images: [
            powersupply,
            powersupply
        ],
        models: [],
        boughtWith: [],
        stock: 25,
        date: new Date()
    },
    {
        _id: "3",
        name: "Disco SSD Adata 240GB",
        category: [
            4, 51, 53
        ],
        price: 32.99,
        discountedPrice: 29.99,
        discount: "-10%",
        discountedPriceWith: null,
        discountWith: null,
        features: [
            "WORK AND PLAY: Browse the Internet, write documents, play games, work, and more with this Dell Chromebook",
            "LARGE, HD DISPLAY: Large, 11. 6-inch screen with HD display quality and 1366 x 768 resolution",
            "CONNECT TO ADDITIONAL SCREENS AND DEVICES: Features HDMI port, 2 USB ports, SD card reader, and aux jack; charging cord included",
            "GREAT FOR MULTITASKING: 2GB Ram memory and 16GB storage space",
            "FAST AND POWERFUL: Runs on Intel Celeron N3060 dual-core CPU and Chrome operating system (OS)"
        ],
        images: [
            adata,
            adata,
            adata,
            adata
        ],
        model: "240GB",
        models: {
            Capacidad: [
                {
                    _id: "9",
                    model: "120GB"
                },
                {
                    _id: "3",
                    model: "240GB"
                },
                {
                    _id: "7",
                    model: "480GB"
                }
            ]
        },
        boughtWith: [],
        stock: 25,
        date: new Date()
    },
    {
        _id: "4",
        name: "Fire TV Stick Lite 2nd Gen",
        category: [
            1, 51, 53
        ],
        price: 34.99,
        discountedPrice: 29.99,
        discount: "-10%",
        discountedPriceWith: null,
        discountWith: null,
        features: [
            "WORK AND PLAY: Browse the Internet, write documents, play games, work, and more with this Dell Chromebook",
            "LARGE, HD DISPLAY: Large, 11. 6-inch screen with HD display quality and 1366 x 768 resolution",
            "CONNECT TO ADDITIONAL SCREENS AND DEVICES: Features HDMI port, 2 USB ports, SD card reader, and aux jack; charging cord included",
            "GREAT FOR MULTITASKING: 2GB Ram memory and 16GB storage space",
            "FAST AND POWERFUL: Runs on Intel Celeron N3060 dual-core CPU and Chrome operating system (OS)"
        ],
        images: [
            fireStickLite,
            fireStickLite
        ],
        models: [],
        boughtWith: [],
        stock: 25,
        date: new Date()
    },
    {
        _id: "5",
        name: "Fire Stick 4K 2022",
        category: [
            1
        ],
        price: 42.99,
        discountedPrice: 39.99,
        discount: "-10%",
        discountedPriceWith: null,
        discountWith: null,
        features: [
            "WORK AND PLAY: Browse the Internet, write documents, play games, work, and more with this Dell Chromebook",
            "LARGE, HD DISPLAY: Large, 11. 6-inch screen with HD display quality and 1366 x 768 resolution",
            "CONNECT TO ADDITIONAL SCREENS AND DEVICES: Features HDMI port, 2 USB ports, SD card reader, and aux jack; charging cord included",
            "GREAT FOR MULTITASKING: 2GB Ram memory and 16GB storage space",
            "FAST AND POWERFUL: Runs on Intel Celeron N3060 dual-core CPU and Chrome operating system (OS)"
        ],
        images: [
            fireStick4k,
            fireStick4k,
            fireStick4k
        ],
        models: [],
        boughtWith: [],
        stock: 25,
        date: new Date()
    },
    {
        _id: "6",
        name: "Tablet Fire 7 Kids Forro Azul",
        category: [
            11
        ],
        price: 74.99,
        discountedPrice: 70.99,
        discount: "-10%",
        discountedPriceWith: null,
        discountWith: null,
        features: [
            "WORK AND PLAY: Browse the Internet, write documents, play games, work, and more with this Dell Chromebook",
            "LARGE, HD DISPLAY: Large, 11. 6-inch screen with HD display quality and 1366 x 768 resolution",
            "CONNECT TO ADDITIONAL SCREENS AND DEVICES: Features HDMI port, 2 USB ports, SD card reader, and aux jack; charging cord included",
            "GREAT FOR MULTITASKING: 2GB Ram memory and 16GB storage space",
            "FAST AND POWERFUL: Runs on Intel Celeron N3060 dual-core CPU and Chrome operating system (OS)"
        ],
        images: [
            fire7kidsblue,
            fire7kidsblue
        ],
        models: [],
        boughtWith: [],
        stock: 25,
        date: new Date()
    },
    {
        _id: "7",
        name: "Disco SSD Adata 480GB",
        category: [
            4
        ],
        price: 59.99,
        discountedPrice: 54.99,
        discount: "-10%",
        discountedPriceWith: null,
        discountWith: null,
        features: [
            "WORK AND PLAY: Browse the Internet, write documents, play games, work, and more with this Dell Chromebook",
            "LARGE, HD DISPLAY: Large, 11. 6-inch screen with HD display quality and 1366 x 768 resolution",
            "CONNECT TO ADDITIONAL SCREENS AND DEVICES: Features HDMI port, 2 USB ports, SD card reader, and aux jack; charging cord included",
            "GREAT FOR MULTITASKING: 2GB Ram memory and 16GB storage space",
            "FAST AND POWERFUL: Runs on Intel Celeron N3060 dual-core CPU and Chrome operating system (OS)"
        ],
        images: [
            adata,
            adata,
            adata,
            adata
        ],
        model: "480GB",
        models: {
            Capacidad: [
                {
                    _id: "9",
                    model: "120GB"
                },
                {
                    _id: "3",
                    model: "240GB"
                },
                {
                    _id: "7",
                    model: "480GB"
                }
            ]
        },
        boughtWith: [],
        stock: 25,
        date: new Date()
    },
    {
        _id: "8",
        name: "Laptop Acer 15.6 AMD Ryzen 7 8GB 512GB SSD",
        category: [
            2
        ],
        price: 32.99,
        discountedPrice: 29.99,
        discount: "-10%",
        discountedPriceWith: null,
        discountWith: null,
        features: [
            "WORK AND PLAY: Browse the Internet, write documents, play games, work, and more with this Dell Chromebook",
            "LARGE, HD DISPLAY: Large, 11. 6-inch screen with HD display quality and 1366 x 768 resolution",
            "CONNECT TO ADDITIONAL SCREENS AND DEVICES: Features HDMI port, 2 USB ports, SD card reader, and aux jack; charging cord included",
            "GREAT FOR MULTITASKING: 2GB Ram memory and 16GB storage space",
            "FAST AND POWERFUL: Runs on Intel Celeron N3060 dual-core CPU and Chrome operating system (OS)"
        ],
        images: [
            laptop
        ],
        models: [],
        boughtWith: [],
        stock: 25,
        date: new Date()
    },
    {
        _id: "9",
        name: "Disco SSD Adata 120GB",
        category: [
            4
        ],
        price: 24.99,
        discountedPrice: null,
        discount: null,
        discountedPriceWith: null,
        discountWith: null,
        features: [
            "WORK AND PLAY: Browse the Internet, write documents, play games, work, and more with this Dell Chromebook",
            "LARGE, HD DISPLAY: Large, 11. 6-inch screen with HD display quality and 1366 x 768 resolution",
            "CONNECT TO ADDITIONAL SCREENS AND DEVICES: Features HDMI port, 2 USB ports, SD card reader, and aux jack; charging cord included",
            "GREAT FOR MULTITASKING: 2GB Ram memory and 16GB storage space",
            "FAST AND POWERFUL: Runs on Intel Celeron N3060 dual-core CPU and Chrome operating system (OS)"
        ],
        images: [
            adata,
            adata,
            adata,
            adata
        ],
        model: "120GB",
        models: {
            Capacidad: [
                {
                    _id: "9",
                    model: "120GB"
                },
                {
                    _id: "3",
                    model: "240GB"
                },
                {
                    _id: "7",
                    model: "480GB"
                }
            ]
        },
        boughtWith: [],
        stock: 25,
        date: new Date()
    },
    {
        _id: "10",
        name: "Disco SSD Kingston 240GB",
        category: [
            4, 52
        ],
        price: 41.99,
        discountedPrice: null,
        discount: null,
        discountedPriceWith: null,
        discountWith: null,
        features: [
            "WORK AND PLAY: Browse the Internet, write documents, play games, work, and more with this Dell Chromebook",
            "LARGE, HD DISPLAY: Large, 11. 6-inch screen with HD display quality and 1366 x 768 resolution",
            "CONNECT TO ADDITIONAL SCREENS AND DEVICES: Features HDMI port, 2 USB ports, SD card reader, and aux jack; charging cord included",
            "GREAT FOR MULTITASKING: 2GB Ram memory and 16GB storage space",
            "FAST AND POWERFUL: Runs on Intel Celeron N3060 dual-core CPU and Chrome operating system (OS)"
        ],
        images: [
            kingston240gb,
            kingston240gb,
            kingston240gb
        ],
        model: "240GB",
        models: {
        },
        boughtWith: [],
        stock: 25,
        date: new Date()
    },
    {
        _id: "11",
        name: "Disco Portátil Toshiba 1TB",
        category: [
            8
        ],
        price: 54.99,
        discountedPrice: null,
        discount: null,
        discountedPriceWith: null,
        discountWith: null,
        features: [
            "WORK AND PLAY: Browse the Internet, write documents, play games, work, and more with this Dell Chromebook",
            "LARGE, HD DISPLAY: Large, 11. 6-inch screen with HD display quality and 1366 x 768 resolution",
            "CONNECT TO ADDITIONAL SCREENS AND DEVICES: Features HDMI port, 2 USB ports, SD card reader, and aux jack; charging cord included",
            "GREAT FOR MULTITASKING: 2GB Ram memory and 16GB storage space",
            "FAST AND POWERFUL: Runs on Intel Celeron N3060 dual-core CPU and Chrome operating system (OS)"
        ],
        images: [
            toshiba,
            toshiba
        ],
        model: "1TB",
        models: {
            Capacidad: [
                {
                    _id: "11",
                    model: "1TB"
                },
                {
                    _id: "13",
                    model: "2TB"
                },
                {
                    _id: "14",
                    model: "4TB"
                }
            ]
        },
        boughtWith: [],
        stock: 25,
        date: new Date()
    },
    {
        _id: "12",
        name: "Laptop ASUS MH10",
        category: [
            2, 52
        ],
        price: 544.99,
        discountedPrice: null,
        discount: null,
        discountedPriceWith: null,
        discountWith: null,
        features: [
            "WORK AND PLAY: Browse the Internet, write documents, play games, work, and more with this Dell Chromebook",
            "LARGE, HD DISPLAY: Large, 11. 6-inch screen with HD display quality and 1366 x 768 resolution",
            "CONNECT TO ADDITIONAL SCREENS AND DEVICES: Features HDMI port, 2 USB ports, SD card reader, and aux jack; charging cord included",
            "GREAT FOR MULTITASKING: 2GB Ram memory and 16GB storage space",
            "FAST AND POWERFUL: Runs on Intel Celeron N3060 dual-core CPU and Chrome operating system (OS)"
        ],
        images: [
            laptop,
            laptop
        ],
        model: "H10",
        models: {
        },
        boughtWith: [],
        stock: 25,
        date: new Date()
    },
    {
        _id: "13",
        name: "Disco Portátil Toshiba 2TB",
        category: [
            8, 51, 53
        ],
        price: 74.99,
        discountedPrice: null,
        discount: null,
        discountedPriceWith: null,
        discountWith: null,
        features: [
            "WORK AND PLAY: Browse the Internet, write documents, play games, work, and more with this Dell Chromebook",
            "LARGE, HD DISPLAY: Large, 11. 6-inch screen with HD display quality and 1366 x 768 resolution",
            "CONNECT TO ADDITIONAL SCREENS AND DEVICES: Features HDMI port, 2 USB ports, SD card reader, and aux jack; charging cord included",
            "GREAT FOR MULTITASKING: 2GB Ram memory and 16GB storage space",
            "FAST AND POWERFUL: Runs on Intel Celeron N3060 dual-core CPU and Chrome operating system (OS)"
        ],
        images: [
            toshiba,
            toshiba
        ],
        model: "2TB",
        models: {
            Capacidad: [
                {
                    _id: "11",
                    model: "1TB"
                },
                {
                    _id: "13",
                    model: "2TB"
                },
                {
                    _id: "14",
                    model: "4TB"
                }
            ]
        },
        boughtWith: [],
        stock: 25,
        date: new Date()
    },
    {
        _id: "14",
        name: "Disco Portátil Toshiba 4TB",
        category: [
            8
        ],
        price: 119.99,
        discountedPrice: null,
        discount: null,
        discountedPriceWith: null,
        discountWith: null,
        features: [
            "WORK AND PLAY: Browse the Internet, write documents, play games, work, and more with this Dell Chromebook",
            "LARGE, HD DISPLAY: Large, 11. 6-inch screen with HD display quality and 1366 x 768 resolution",
            "CONNECT TO ADDITIONAL SCREENS AND DEVICES: Features HDMI port, 2 USB ports, SD card reader, and aux jack; charging cord included",
            "GREAT FOR MULTITASKING: 2GB Ram memory and 16GB storage space",
            "FAST AND POWERFUL: Runs on Intel Celeron N3060 dual-core CPU and Chrome operating system (OS)"
        ],
        images: [
            toshiba,
            toshiba
        ],
        model: "4TB",
        models: {
            Capacidad: [
                {
                    _id: "11",
                    model: "1TB"
                },
                {
                    _id: "13",
                    model: "2TB"
                },
                {
                    _id: "14",
                    model: "4TB"
                }
            ]
        },
        boughtWith: [],
        stock: 25,
        date: new Date()
    },
    {
        _id: "15",
        name: "RAM DDR4 Corsair 8GB X2 3600 MHz",
        category: [
            7, 52
        ],
        price: 84.99,
        discountedPrice: null,
        discount: null,
        discountedPriceWith: null,
        discountWith: null,
        features: [
            "WORK AND PLAY: Browse the Internet, write documents, play games, work, and more with this Dell Chromebook",
            "LARGE, HD DISPLAY: Large, 11. 6-inch screen with HD display quality and 1366 x 768 resolution",
            "CONNECT TO ADDITIONAL SCREENS AND DEVICES: Features HDMI port, 2 USB ports, SD card reader, and aux jack; charging cord included",
            "GREAT FOR MULTITASKING: 2GB Ram memory and 16GB storage space",
            "FAST AND POWERFUL: Runs on Intel Celeron N3060 dual-core CPU and Chrome operating system (OS)"
        ],
        images: [
            ramCorsair,
            ramCorsair
        ],
        model: "3600 MHz 8GB x 2",
        models: {},
        boughtWith: [],
        stock: 25,
        date: new Date()
    },
    {
        _id: "16",
        name: "RAM DDR3 Moment 8GB",
        category: [
            7, 52
        ],
        price: 34.99,
        discountedPrice: null,
        discount: null,
        discountedPriceWith: null,
        discountWith: null,
        features: [
            "WORK AND PLAY: Browse the Internet, write documents, play games, work, and more with this Dell Chromebook",
            "LARGE, HD DISPLAY: Large, 11. 6-inch screen with HD display quality and 1366 x 768 resolution",
            "CONNECT TO ADDITIONAL SCREENS AND DEVICES: Features HDMI port, 2 USB ports, SD card reader, and aux jack; charging cord included",
            "GREAT FOR MULTITASKING: 2GB Ram memory and 16GB storage space",
            "FAST AND POWERFUL: Runs on Intel Celeron N3060 dual-core CPU and Chrome operating system (OS)"
        ],
        images: [
            ramMomentDDR38GB,
            ramMomentDDR38GB
        ],
        model: "8GB 3600 MHz",
        models: {},
        boughtWith: [],
        stock: 25,
        date: new Date()
    },
    {
        _id: "17",
        name: "Nintendo Switch OLED",
        category: [
            10,52
        ],
        price: 419.99,
        discountedPrice: null,
        discount: null,
        discountedPriceWith: null,
        discountWith: null,
        features: [
            "WORK AND PLAY: Browse the Internet, write documents, play games, work, and more with this Dell Chromebook",
            "LARGE, HD DISPLAY: Large, 11. 6-inch screen with HD display quality and 1366 x 768 resolution",
            "CONNECT TO ADDITIONAL SCREENS AND DEVICES: Features HDMI port, 2 USB ports, SD card reader, and aux jack; charging cord included",
            "GREAT FOR MULTITASKING: 2GB Ram memory and 16GB storage space",
            "FAST AND POWERFUL: Runs on Intel Celeron N3060 dual-core CPU and Chrome operating system (OS)"
        ],
        images: [
            switchOled,
            switchOled,
            switchOled
        ],
        model: null,
        models: {},
        boughtWith: [],
        stock: 25,
        date: new Date()
    },
    {
        _id: "18",
        name: "Mouse Razer DeathAdder Essential",
        category: [
            9, 10, 51
        ],
        price: 29.99,
        discountedPrice: null,
        discount: null,
        discountedPriceWith: null,
        discountWith: null,
        features: [
            "WORK AND PLAY: Browse the Internet, write documents, play games, work, and more with this Dell Chromebook",
            "LARGE, HD DISPLAY: Large, 11. 6-inch screen with HD display quality and 1366 x 768 resolution",
            "CONNECT TO ADDITIONAL SCREENS AND DEVICES: Features HDMI port, 2 USB ports, SD card reader, and aux jack; charging cord included",
            "GREAT FOR MULTITASKING: 2GB Ram memory and 16GB storage space",
            "FAST AND POWERFUL: Runs on Intel Celeron N3060 dual-core CPU and Chrome operating system (OS)"
        ],
        images: [
            razerMouse,
            razerMouse,
            razerMouse
        ],
        model: null,
        models: {},
        boughtWith: [],
        stock: 25,
        date: new Date()
    },
    {
        _id: "19",
        name: "Xbox Series S",
        category: [
            10, 50, 51, 52
        ],
        price: 439.99,
        discountedPrice: 379.99,
        discount: null,
        discountedPriceWith: null,
        discountWith: null,
        features: [
            "WORK AND PLAY: Browse the Internet, write documents, play games, work, and more with this Dell Chromebook",
            "LARGE, HD DISPLAY: Large, 11. 6-inch screen with HD display quality and 1366 x 768 resolution",
            "CONNECT TO ADDITIONAL SCREENS AND DEVICES: Features HDMI port, 2 USB ports, SD card reader, and aux jack; charging cord included",
            "GREAT FOR MULTITASKING: 2GB Ram memory and 16GB storage space",
            "FAST AND POWERFUL: Runs on Intel Celeron N3060 dual-core CPU and Chrome operating system (OS)"
        ],
        images: [
            xboxs,
            xboxs,
            xboxs
        ],
        model: null,
        models: {},
        boughtWith: [],
        stock: 25,
        date: new Date()
    }
]