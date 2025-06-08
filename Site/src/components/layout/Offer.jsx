import Card from "../ui/Card";

function Offer(){

  return(
    <div id="offer" className="flex flex-col md:flex-row gap-4 lg:px-16 sm:px-8 px-4 w-full py-2 justify-center">
      
      <Card price={<>
        Price: <strong>150PLN</strong>  + entry to the swimming pool for adults: 20PLN, for kids: 12PLN. For multisport card holders entry is free
        </>} 
        img={'/src/assets/minephoto.jpg'}>

        <div className="mb-4">
          <h1 className="text-lg font-bold mb-4">Individual lesson</h1>
          <div className="mb-4">
             <div className="font-bold">For who?</div>
             <div>If you want all the mine attention through the entire lesson to be focused on you. </div>
          </div>
          <div className="mb-4">
            <div className="font-bold">Why this option?</div>
            <div>Best quality for the price</div>
          </div>
        </div>   

      </Card>
    
      <Card 
        img={"/src/assets/group-photo.jpg"}
        price={
          <>
            Price:<strong>200PLN</strong>  + entry to the swimming pool for adults 20PLN for kids 12PLN. For multisport card holders entry is free
          </>}>
          <div className="mb-4 ">
            <h1 className="text-lg font-bold mb-4">Split lesson</h1>
            <div className="mb-4">
              <div className="font-bold">For who?</div>
              <div>If you have a mate or partner on more or less the same level of swiming as you.</div>
            </div>
            <div className="mb-4">
              <div className="font-bold">Why this option?</div>
              <div>Swimming together brings more joy, fun and create natural bonding. More exciting exercises we can do together, more jokes and more emotions</div>
            </div>
          </div>   
      </Card>
          
    </div>
  );
}

export default Offer