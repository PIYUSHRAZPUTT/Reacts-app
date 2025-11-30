import RightCard from "./RightCard"

const RightContent = (props) => {
  return (
    <div id="right" className='h-full w-2/3 p-4 flex flex-nowrap  gap-10 overflow-x-auto'>
        {props.cards.map((card, idx)=>{
             return <RightCard key={idx} id={idx} img={card.img} intro={card.intro} tag={card.tag}/>
        })}
    </div>
  )
}

export default RightContent
