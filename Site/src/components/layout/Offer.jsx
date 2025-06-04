import Card from "../ui/Card";

function Offer(){

  return(
    <div id="offer" className="flex flex-col md:flex-row gap-4 lg:px-16 sm:px-8 px-4 w-full py-2 justify-center">
      
      <Card price={<>
        Price: <strong>150PLN</strong>  + entry to the swimming pool for adults 20PLN for kids 12PLN. For multisport card holders entry is free
        </>} 
        img={'/src/assets/minephoto.jpg'}>

        Individual classes is perfect for the people who want the maximum of my attention on them. Great for beginners Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus provident, a iure fugiat ducimus aliquid quasi officiis eos illum vitae aliquam voluptatem minima animi similique, ipsa voluptates, quis distinctio dicta?
      </Card>
    
      <Card 
        img={"/src/assets/group-photo.jpg"}
        price={
          <>
            <strong>150PLN</strong>  + entry to the swimming pool for adults 20PLN for kids 12PLN. For multisport card holders entry is free
          </>}>
          Individual classes is perfect for the people who want the maximum of my attention on them. Great for beginners Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus provident, a iure fugiat ducimus aliquid quasi officiis eos illum vitae aliquam voluptatem minima animi similique, ipsa voluptates, quis distinctio dicta?
      </Card>
          
    </div>
  );
}

export default Offer