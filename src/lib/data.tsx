import {
  BsBalloonHeart,
  BsCardChecklist,
  BsCreditCard,
  BsPersonVcard,
} from "react-icons/bs";
import { AiOutlineShareAlt } from "react-icons/ai";
import { BiCurrentLocation, BiImages, BiTimer } from "react-icons/bi";
import { FiMusic } from "react-icons/fi";
import { FcCheckmark } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Features",
    hash: "#features",
  },
  {
    name: "Katalog",
    hash: "#katalog",
  },
  {
    name: "Price",
    hash: "#price",
  },
] as const;

export const feature = [
  {
    icon: <BsPersonVcard />,
    title: "Bebas Custom Nama Tamu Sesukamu",
  },
  {
    icon: <AiOutlineShareAlt />,
    title: "Bebas Share ke Semua Orang",
  },
  {
    icon: <BiTimer />,
    title: "Hitung Mundur Hari Bahagiamu",
  },
  {
    icon: <FiMusic />,
    title: "Bebas Pilih Background Music",
  },
  {
    icon: <BiCurrentLocation />,
    title: "Navigasi Peta GoogleMap Akurat",
  },
  {
    icon: <BiImages />,
    title: "Share Gallery Foto dan Video",
  },
  {
    icon: <BsBalloonHeart />,
    title: "Bebas Ceritain Love Story Kamu",
  },
  {
    icon: <BsCardChecklist />,
    title: "Konfirmasi Kehadiran dan Ucapan RealTime",
  },
  {
    icon: <BsCreditCard />,
    title: "Amplop Digital Langsung ke Rekening",
  },
];

export const price = [
  {
    type: "Paket Basic",
    price : "100.000",
    feat : [
      {
        icon : <FcCheckmark/>,
        title : "Unlimited Nama Tamu"
      },
      {
        icon : <FcCheckmark/>,
        title : "Free Request Backsound"
      },
      {
        icon : <FcCheckmark/>,
        title :"Navigasi Maps"
      },
      {
        icon : <FcCheckmark/>,
        title : "Count Down Acara"
      },
      {
        icon : <FcCheckmark/>,
        title : "Daftar Tamu dan Ucapan"
      },
      {
        icon : <RxCross2 color="red"/>,
        title : "Gallery Foto"
      },
      {
        icon : <RxCross2 color="red"/>,
        title : "Gallery Video"
      },
      {
        icon : <RxCross2 color="red"/>,
        title : "Love Story"
      },
    ]
  },
  {
    type: "Paket Premium",
    price : "120.000",
    feat : [
      {
        icon : <FcCheckmark/>,
        title : "Unlimited Nama Tamu"
      },
      {
        icon : <FcCheckmark/>,
        title : "Free Request Backsound"
      },
      {
        icon : <FcCheckmark/>,
        title :"Navigasi Maps"
      },
      {
        icon : <FcCheckmark/>,
        title : "Count Down Acara"
      },
      {
        icon : <FcCheckmark/>,
        title : "Daftar Tamu dan Ucapan"
      },
      {
        icon : <FcCheckmark/>,
        title : "Gallery Foto"
      },
      {
        icon : <FcCheckmark/>,
        title : "Gallery Video"
      },
      {
        icon : <FcCheckmark/>,
        title : "Love Story"
      },
    ]
  }
];
