import React, { useState } from 'react'
import '../CSS/Menu.css'

import Pizza from '../Pizza.jsx'
import Salami from '../menuimages/Salami.jpg'
import Carbonara from '../menuimages/Carbonara.jpg'
import Contadina from '../menuimages/Contadina.jpg'
import Diavola from '../menuimages/Diavola.jpg'
import Formaggi from '../menuimages/Formaggi.jpg'
import Funghi from '../menuimages/Funghi.jpg'
import Golosona from '../menuimages/Golosona.jpg'
import Hawai from '../menuimages/Hawai.jpg'
import Mais from '../menuimages/Mais.jpg'
import Margherita from '../menuimages/Margherita.jpg'
import Pancetta from '../menuimages/Pancetta.jpg'
import Panocchia from '../menuimages/Panocchia.jpg'
import Parma from '../menuimages/Parma.jpg'
import PolloSpinaci from '../menuimages/PolloSpinaci.jpg'
import Prosciutto from '../menuimages/Prosciutto.jpg'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import GB from '../menuimages/GB.jpg'
import PC from '../menuimages/PC.jpg'
import RB from '../menuimages/RB.jpg'
import RV from '../menuimages/RV.jpg'
import SB from '../menuimages/SB.jpg'
import TC from '../menuimages/TC.jpg'
import TP from '../menuimages/TP.jpg'
import Lasagne from '../menuimages/Lasagne.jpg'

import tiramisuOriginale from '../menuimages/tiramisu-originale.jpg'
import tiramisuAmaretto from '../menuimages/tiramisu-all-amaretto.jpg'
import pannaChoco from '../menuimages/panna-cotta-cioccolato.jpg'
import pannaFruit from '../menuimages/panna-cotta-frutti-di-bosco.jpg'

import Perliva from '../menuimages/Perliva.jpg'
import Neperliva from '../menuimages/Neperliva.jpg'
import CocaCola from '../menuimages/CocaCola.jpg'
import Fanta from '../menuimages/Fanta.jpg'
import FuzeteaB from '../menuimages/FuzeteaB.jpg'
import FuzeteaC from '../menuimages/FuzeteaC.jpg'

function Menu() {

  const PizzaArray = [
    {image: Golosona,
      name: 'Golosona',
      info: 'rajčatový protlak, mozzarella, italský salám napoli, italský pikantní salám spianata',
      price: '229 Kč'
     },
     {image: Funghi,
      name: 'Funghi',
      info: 'rajčatový protlak, mozzarella, italský salám napoli, italský pikantní salám spianata',
      price: '229 Kč'
     },
    {image: Panocchia,
      name: 'Panocchia',
      info: 'rajčatový protlak, mozzarella, italský salám napoli, italský pikantní salám spianata',
      price: '229 Kč'
     },
    {image: Margherita,
      name: 'Margherita',
      info: 'rajčatový protlak, mozzarella, italský salám napoli, italský pikantní salám spianata',
      price: '229 Kč'
     },
    {image: Mais,
      name: 'Mais',
      info: 'rajčatový protlak, mozzarella, italský salám napoli, italský pikantní salám spianata',
      price: '229 Kč'
     },
    {image: Diavola,
      name: 'Diavola',
      info: 'rajčatový protlak, mozzarella, italský salám napoli, italský pikantní salám spianata',
      price: '229 Kč'
     },
    {image: Formaggi,
      name: 'Formaggi',
      info: 'rajčatový protlak, mozzarella, italský salám napoli, italský pikantní salám spianata',
      price: '229 Kč'
     },
    {image: Hawai,
      name: 'Hawai',
      info: 'rajčatový protlak, mozzarella, italský salám napoli, italský pikantní salám spianata',
      price: '229 Kč'
     },
    {image: Salami,
     name: 'Salami',
     info: 'rajčatový protlak, mozzarella, italský salám napoli, italský pikantní salám spianata',
     price: '229 Kč'
    }, 
    {image: Carbonara,
      name: 'Carbonara',
      info: 'rajčatový protlak, mozzarella, italský salám napoli, italský pikantní salám spianata',
      price: '229 Kč'
     },
     {image: Contadina,
      name: 'Contadina',
      info: 'rajčatový protlak, mozzarella, italský salám napoli, italský pikantní salám spianata',
      price: '229 Kč'
     },
     {image: Prosciutto,
      name: 'Prosciutto',
      info: 'rajčatový protlak, mozzarella, italský salám napoli, italský pikantní salám spianata',
      price: '229 Kč'
     },
     {image: PolloSpinaci,
      name: 'PolloSpinaci',
      info: 'rajčatový protlak, mozzarella, italský salám napoli, italský pikantní salám spianata',
      price: '229 Kč'
     },
     {image: Parma,
      name: 'Parma',
      info: 'rajčatový protlak, mozzarella, italský salám napoli, italský pikantní salám spianata',
      price: '229 Kč'
     },
     {image: Pancetta,
      name: 'Pancetta',
      info: 'rajčatový protlak, mozzarella, italský salám napoli, italský pikantní salám spianata',
      price: '229 Kč'
     } 
]

  const Pasta = [
    {
      image: GB,
      name: 'Gnocchi Bolognese',
      info: 'mleté maso (hovězí a vepřové), zelenina, rajčata',
      price: '219 Kč'
    },
    {
      image: Lasagne,
      name: 'Lasagne',
      info: 'mleté maso (hovězí a vepřové), zelenina, rajčata',
      price: '259 Kč'
    },
    {
      image: RB,
      name: 'Ravioli Bolognese',
      info: 'mleté maso (hovězí a vepřové), zelenina, rajčata',
      price: '219 Kč'
    },
    {
      image: SB,
      name: 'Spaghetti Bolognese',
      info: 'mleté maso (hovězí a vepřové), zelenina, rajčata',
      price: '219 Kč'
    },
    {
      image: PC,
      name: 'Penne Carbonara',
      info: 'mleté maso (hovězí a vepřové), zelenina, rajčata',
      price: '219 Kč'
    },
    {
      image: RV,
      name: 'Ravioli Bolognese',
      info: 'mleté maso (hovězí a vepřové), zelenina, rajčata',
      price: '219 Kč'
    },
    {
      image: TP,
      name: 'Tagliatelle Pomodoro',
      info: 'mleté maso (hovězí a vepřové), zelenina, rajčata',
      price: '219 Kč'
    },
    {
      image: TC, 
      name: 'Tagliatelle Carbonara',
      info: 'mleté maso (hovězí a vepřové), zelenina, rajčata',
      price: '219 Kč'
    },

  ]

  const Desert = [
    {
      image: pannaChoco,
      name: 'Panna Cotta Ciocolato',
      info: 'krém s příchutí tiramusu prokládaný cukrářskými piškoty máčenými v silné kávě posypaný kakaem',
      price: '65 Kč'

    },
    {
      image: pannaFruit,
      name: 'Panna Cotta Frutti di Bosco',
      info: 'krém s příchutí tiramusu prokládaný cukrářskými piškoty máčenými v silné kávě posypaný kakaem',
      price: '65 Kč'

    },
    {
      image: tiramisuOriginale,
      name: 'Tiramisu Originale',
      info: 'krém s příchutí tiramusu prokládaný cukrářskými piškoty máčenými v silné kávě posypaný kakaem',
      price: '65 Kč'

    },
    {
      image: tiramisuAmaretto,
      name: 'Tiramisu all Amaretto',
      info: 'krém s příchutí tiramusu prokládaný cukrářskými piškoty máčenými v silné kávě posypaný kakaem',
      price: '65 Kč'

    },
  ]

  const Drinks = [
    {
      image: Perliva,
      name: 'Voda Perlivá',
      info: '0,5l',
      price: '39 Kč'
    },
    {
      image: Neperliva,
      name: 'Voda  Neperlivá',
      info: '0,5l',
      price: '39 Kč'
    },
    {
      image: CocaCola,
      name: 'Coca Cola',
      info: '0,5l',
      price: '45 Kč'
    },
    {
      image: Fanta,
      name: 'Fanta',
      info: '0,5l',
      price: '45 Kč'
    },
    {
      image: FuzeteaB,
      name: 'Fuzetea Broskvový čaj',
      info: '0,5l',
      price: '45 Kč'
    },
    {
      image: FuzeteaC,
      name: 'Fuzetea Citrónový čaj',
      info: '0,5l',
      price: '45 Kč'
    },

  ]

  const MenuList = ['PIZZA', 'PASTA', 'DESERT', 'DRINKS' ]

  const [Title, setTitle] = useState(0)

  const ArrowForward = () => {
    if (Title == 3){
        setTitle(0)
    }
    else{
        setTitle(Title + 1)
    }
}

const ArrowBack = ()=>{
    if (Title == 0){
        setTitle(3)
    }
    else{
        setTitle(Title - 1)
    }
}

const MenuList2 = [
  (PizzaArray.map((pizza) => {return(<Pizza image={pizza.image} name={pizza.name} info={pizza.info} price={pizza.price}/>)})),
  (Pasta.map((pasta) => {return(<Pizza image={pasta.image} name={pasta.name} info={pasta.info} price={pasta.price}/>)})),
  (Desert.map((desert) => {return(<Pizza image={desert.image} name={desert.name} info={desert.info} price={desert.price}/>)})),
  (Drinks.map((drink) => {return(<Pizza image={drink.image} name={drink.name} info={drink.info} price={drink.price}/>)}))

]
 

  return (
    <>
      <div className='title'>
        <div className='ArrowBack'>
          <ArrowBackIosIcon onClick={ArrowBack} className='back'/>
        </div>
        <div className='order'>
          {MenuList[Title]}
        </div>
        <div className='ArrowForward'>
          <ArrowForwardIosIcon onClick={ArrowForward} className='forward'/>
        </div>
      </div>
      <div className="GridOfPizza">
        {MenuList2[Title]}
      </div>
    </>
  )
  }

export default Menu
