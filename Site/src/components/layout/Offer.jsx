import Card from "../ui/Card";

function Offer() {
  return (
    <div
      id="offer"
      className="flex flex-col md:flex-row gap-4 lg:px-16 sm:px-8 px-4 w-full py-2 justify-center"
    >
      <Card
        price={
          <>
            Price: <strong>150PLN</strong> + entry to the swimming pool — for
            adults: 20PLN, for kids: 12PLN. For MultiSport card holders entry is
            free
          </>
        }
        img={"/src/assets/minephoto.jpg"}
      >
        <div className="mb-4">
          <h1 className="text-lg font-bold mb-4">Individual lesson</h1>
          <div className="mb-4">
            <div className="font-bold">For who?</div>
            <div>
              If you want my full attention throughout the entire lesson, this
              option is for you.
            </div>
          </div>
          <div className="mb-4">
            <div className="font-bold">Why this option?</div>
            <div>
              We are working with you only. We will work on your personal
              insecurities and fears. Individual training plan just for you
            </div>
          </div>
        </div>
      </Card>

      <Card
        img={"/src/assets/group-photo.jpg"}
        price={
          <>
            Price: <strong>200PLN</strong> + entry to the swimming pool — for
            adults 20PLN for kids 12PLN. For MultiSport card holders entry is
            free
          </>
        }
      >
        <div className="mb-4 ">
          <h1 className="text-lg font-bold mb-4">Split lesson</h1>
          <div className="mb-4">
            <div className="font-bold">For who?</div>
            <div>
              If you have a mate or partner on a similar swimming level as you.
            </div>
          </div>
          <div className="mb-4">
            <div className="font-bold">Why this option?</div>
            <div>
              Swimming together brings more joy, fun and create natural bonding.
              More exciting exercises we can do together, more jokes and more
              emotions
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Offer;
