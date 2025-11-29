import React from 'react'
import "./App.css";
import UserCard from './components/UserCard'

const App = () => {
 const cards = [
  { name: "Google", title: "Search Engine & AI Technology", img: "https://static.vecteezy.com/system/resources/previews/011/598/471/original/google-logo-icon-illustration-free-vector.jpg", likes: "5.4k", comments: "5.4k", shares: "5.4k" },
  { name: "Microsoft", title: "Software, Cloud & Windows OS", img: "https://seekvectors.com/storage/images/Microsoft-02.jpg", likes: "3.2k", comments: "2.9k", shares: "1.5k" },
  { name: "Amazon", title: "E-Commerce & Cloud (AWS)", img: "https://logowik.com/content/uploads/images/amazon6707.jpg", likes: "4.1k", comments: "3.7k", shares: "2.3k" },
  { name: "Apple", title: "Consumer Electronics & Smartphones", img: "https://th.bing.com/th/id/R.3de19e4a461b8e7c1a42be6505040c7f?rik=G67f4%2bN3NmTXaA&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2f7ca%2fLno%2f7caLnokAi.png&ehk=Rg7MYzzVfmEPqUv2DBx444UwKC8HZe4UY9Dl0CIPCU4%3d&risl=&pid=ImgRaw&r=0", likes: "6.4k", comments: "5.1k", shares: "3.9k" },
  { name: "Meta", title: "Social Media & VR Metaverse", img: "https://tse3.mm.bing.net/th/id/OIP.pHtJJO4KXh9-wOVwcc3PRgHaEK?w=1280&h=720&rs=1&pid=ImgDetMain&o=7&rm=3", likes: "7.2k", comments: "5.6k", shares: "4.3k" },

  { name: "Tesla", title: "Electric Vehicles & Clean Energy", img: "https://th.bing.com/th/id/R.9b56abdfcf6da4438014dd4d4eeaeabf?rik=3c8iKsPVIfLYJw&riu=http%3a%2f%2fpngimg.com%2fuploads%2ftesla_logo%2ftesla_logo_PNG19.png&ehk=v42J%2bn3aTLzgJo0Kgz9SBWcAdW1HniRPVfXzKUTDh3c%3d&risl=&pid=ImgRaw&r=0", likes: "2.9k", comments: "1.8k", shares: "1.1k" },
  { name: "Samsung", title: "Electronics & Semiconductors", img: "https://th.bing.com/th/id/R.2649d67eed5e2a21c4e8ee73e606560a?rik=XJIhGduXPSsUTw&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f05%2fSamsung-Logo-HD-Wallpapers.png&ehk=%2fArycQ76iC4XWEojxL%2fo5yghTD%2byAup8tVwVZ23byVM%3d&risl=&pid=ImgRaw&r=0", likes: "4.8k", comments: "3.9k", shares: "2.6k" },
  { name: "Intel", title: "Computer Processors & Chips", img: "https://tse3.mm.bing.net/th/id/OIP.Rt7BaJ2rbhZpJ4e_dmfAEwHaFU?w=519&h=373&rs=1&pid=ImgDetMain&o=7&rm=3", likes: "2.4k", comments: "1.7k", shares: "1.0k" },
  { name: "IBM", title: "Enterprise Software & AI Systems", img: "https://tse2.mm.bing.net/th/id/OIP.lKNyjrhaH-pvQOtb-mSMCwHaEK?w=768&h=432&rs=1&pid=ImgDetMain&o=7&rm=3", likes: "9.3k", comments: "8.1k", shares: "7.4k" },
  { name: "Netflix", title: "Streaming & Entertainment", img: "https://static.vecteezy.com/system/resources/previews/020/336/373/original/netflix-logo-netflix-icon-free-free-vector.jpg", likes: "8.1k", comments: "7.8k", shares: "6.0k" },

  { name: "Oracle", title: "Databases & Cloud Systems", img: "https://i.pinimg.com/originals/dd/fd/12/ddfd129a047238762e5bfbaac9b8e81c.jpg", likes: "5.9k", comments: "4.7k", shares: "3.8k" },
  { name: "Cisco", title: "Networking & Telecommunications", img: "https://www.brightpattern.com/wp-content/uploads/2024/08/Cisco-Unified-Contact-Center-Enterprise-Cisco-Unified-Contact-Center-Express-Alternatives-804x800.png", likes: "3.1k", comments: "2.4k", shares: "1.5k" },
  { name: "Sony", title: "Electronics, Gaming & Entertainment", img: "https://wallpaperaccess.com/full/85208.jpg", likes: "6.9k", comments: "5.8k", shares: "4.1k" },
  { name: "NVIDIA", title: "Graphics Cards & AI Computing", img: "https://tse3.mm.bing.net/th/id/OIP.5lvK2esigr_VFcouzvNhwQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", likes: "8.4k", comments: "7.1k", shares: "5.6k" },
  { name: "Adobe", title: "Creative Software & Digital Media", img: "https://tse2.mm.bing.net/th/id/OIP.kCHe1JqU6HKFXXo3xJp-ZgHaF3?rs=1&pid=ImgDetMain&o=7&rm=3", likes: "6.2k", comments: "4.9k", shares: "3.3k" },

  { name: "HP", title: "Computers & Hardware", img: "https://tse3.mm.bing.net/th/id/OIP.uyaloh6ATHr4jvrK-QeyaAHaHa?pid=ImgDet&w=199&h=199&c=7&dpr=1.3&o=7&rm=3", likes: "3.3k", comments: "2.5k", shares: "1.7k" },
  { name: "Dell", title: "Computers, Laptops & Technology", img: "https://m.media-amazon.com/images/I/51y2wmf0smL._AC_SX466_.jpg", likes: "4.0k", comments: "3.1k", shares: "2.1k" },
  { name: "Accenture", title: "Consulting & IT Solutions", img: "https://tse4.mm.bing.net/th/id/OIP.E0YYXk-ADU6D8mpdOvjh1QHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", likes: "2.8k", comments: "2.2k", shares: "1.3k" },
  { name: "TCS", title: "IT Services & Digital Solutions", img: "https://www.bing.com/th/id/OIP.Jgr2GpGBKJpfhC7bFIlYSAHaEK?w=267&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2", likes: "5.3k", comments: "4.4k", shares: "3.0k" },
  { name: "Infosys", title: "IT Consulting & Outsourcing", img: "https://static.vecteezy.com/system/resources/previews/020/336/451/non_2x/infosys-logo-infosys-icon-free-free-vector.jpg", likes: "4.7k", comments: "3.6k", shares: "2.5k" },

  { name: "Wipro", title: "IT Solutions & Business Process", img: "https://tse2.mm.bing.net/th/id/OIP.jgfBht292HUGzVnhCas29gHaE8?rs=1&pid=ImgDetMain&o=7&rm=3", likes: "3.9k", comments: "3.0k", shares: "2.0k" },
  { name: "Capgemini", title: "Consulting & Technology Services", img: "https://tse2.mm.bing.net/th/id/OIP.KJrXJtWuHJ_aNtg42jl9VgHaEc?w=1500&h=900&rs=1&pid=ImgDetMain&o=7&rm=3", likes: "4.1k", comments: "3.2k", shares: "2.3k" },
  { name: "Uber", title: "Ride Sharing & Mobility", img: "https://clipground.com/images/uber-logo-print-2.jpg", likes: "5.0k", comments: "4.2k", shares: "2.9k" },
  { name: "Airbnb", title: "Travel & Online Accommodations", img: "https://www.caribbeannewsglobal.com/wp-content/uploads/2022/05/airbnb.png", likes: "6.8k", comments: "5.4k", shares: "3.7k" },
  { name: "PayPal", title: "Digital Payments & Fintech", img: "https://pngimg.com/uploads/paypal/paypal_PNG7.png", likes: "3.6k", comments: "2.7k", shares: "1.8k" }
];


  return (
    <div className='cards-container'>
      {cards.map((card,index)=>{
        return <div key={index}>
          <UserCard name={card.name} title={card.title} img={card.img} likes={card.likes} comments={card.comments} shares={card.shares} />
        </div>
      })}
    </div>
  )
}

export default App
