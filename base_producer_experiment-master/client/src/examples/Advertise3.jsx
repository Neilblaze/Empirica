import {
    Slider,
    usePlayer,
    usePlayers,
    useStage,
} from "@empirica/core/player/classic/react";
import React, { useState } from "react";
import { Avatar } from "../components/Avatar";
import { Button } from "../components/Button";
import { Modal } from "../components/Modal";
import "@empirica/core/player/classic/react";

export function Advertisement({ roundNumber, selectedProduct }) {
    const player = usePlayer();
    const players = usePlayers();
    const stage = useStage();
    const roundNumberText = 'round' + roundNumber;

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedQuality, setSelectedQuality] = useState("");
    const [selectedPrice, setSelectedPrice] = useState(0);

    const [selectedWarrant, setSelectedWarrant] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // const handleProductionChoice = (quality, cost) => {
    //     setSelectedQuality(quality);
    //     setSelectedPrice(cost);
    // };

    // const handleAdvertisementChoice = (quality) => {
    //     setSelectedQuality(quality);
    // };

    // const handlePriceChoice = (price) => {
    //     setSelectedPrice(price);
    // };

    // const handlePageChange = (pageNumber) => {
    //     setCurrentPage(pageNumber);
    // };

    const handleWarrantAddition = () => {
        setIsModalOpen(true);
        console.log("warrant added");
    };

    const handleWarrantSelection = (warrantPrice) => {
        setSelectedPrice(warrantPrice);
        setIsModalOpen(false);
    };

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const onWarrantAddition = () => {
        setIsModalOpen(true);
    };

    //console.log('roundNumberText', roundNumberText);
    function handleChange() {
        console.log("something happened");
    }
    function handleSubmit() {
        console.log("Player.stage set to true");

        player.set(roundNumberText.concat("_choices"),
            [player.round.get("productionQuality"),
            player.round.get("advertisementQuality"),
            player.round.get("priceOfProduct"),
            player.round.get("productionCost")])

        player.stage.set("submit", true);//player.stage.submit();
    }

    function handleProductionChoice(e, productionQuality, cost) {
        setSelectedQuality(productionQuality);
        setSelectedPrice(cost);
        player.round.set("productionQuality", productionQuality);
        if (player.round.get("productionQuality") === "low") { player.round.set("productionCost", 5) }
        if (player.round.get("productionQuality") === "high") { player.round.set("productionCost", 9) }
        console.log("Saved production quality to player.round object: ", productionQuality);
        console.log("Saved production cost to player.round object: ", player.round.get("productionCost"));
    }

    function handleAdvertisementChoice(e, advertisementQuality) {
        player.round.set("advertisementQuality", advertisementQuality);
        console.log("Saved advertisement quality to player.round object: ", advertisementQuality);
    }

    function handlePriceChoice(e, priceOfProduct) {
        player.round.set("priceOfProduct", priceOfProduct);
        console.log("Saved priceOfProduct to player.round object: ", priceOfProduct);
    }

    let product = {};

    const isResultStage = stage.get("name") === "result";

    if (players.length > 1) {
        product = (
            <div className="grid grid-cols-2 items-center">
                {product}
                <div>
                    {isResultStage ? (
                        <>
                            <div className="text-gray-500 text-2xl">You</div>
                            <div className="border-b-3 border-blue-500/50 pb-2 mb-8">
                                {PlayerScore(player, () => { }, isResultStage)}
                            </div>
                        </>
                    ) : null}
                    {players
                        .filter((p) => p.id !== player.id)
                        .map((p) => PlayerScore(p, handleChange, isResultStage))}
                </div>
            </div>
        );
    } else if (players.length == 1 && isResultStage) {
        product = (
            <div className="grid grid-cols-2 items-center">
                {product}
                <div>
                    {isResultStage ? PlayerScore(player, () => { }, isResultStage) : null}
                </div>
            </div>
        );
    }

    return (
        <div className="md:min-w-96 lg:min-w-128 xl:min-w-192 flex flex-col items-center space-y-10">
            {/* Header */}
            <div>
                <h1>
                    <b>You are the producer of {selectedProduct.name}.</b>{" "}
                </h1>
                <h1>
                    You will now decide what to produce, how to advertise it, and the
                    price.
                </h1>
            </div>

            {/* Page Content based on currentPage */}
            {currentPage === 1 && (
                <Part1
                    selectedProduct={selectedProduct}
                    onProductionChoice={handleProductionChoice}
                    onNextPage={handleNextPage}
                />
            )}
            {currentPage === 2 && (
                <Part2
                    selectedProduct={selectedProduct}
                    selectedQuality={selectedQuality}
                    onAdvertisementChoice={handleAdvertisementChoice}
                    onPriceChoice={handlePriceChoice}
                    onNextPage={handleNextPage}
                    onPreviousPage={handlePreviousPage}
                />
            )}
            {currentPage === 3 && (
                <Part3
                    player={player}
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    selectedProduct={selectedProduct}
                    selectedQuality={selectedQuality}
                    selectedPrice={selectedPrice}
                    onPriceChoice={onPriceChoice}
                    onWarrantAddition={handleWarrantAddition}
                    onNextPage={handleNextPage}
                    onPreviousPage={handlePreviousPage}
                    onWarrantSelection={handleWarrantSelection}
                    handleSubmit={handleSubmit}
                />
            )}
        </div>
    );
}

function NextRoundButton({ on_button_click }) {
    return (
        <Button handleClick={on_button_click}> Go to market (next round) </Button>
    )
}

function ProductionAlternative({ title, imageUrl, cost, quality, on_button_click }) {
    return (
        <div className="h-50 w-50 pb-6">
            <div
                className="h-full w-full bg-contain bg-center bg-no-repeat"
                style={{
                    backgroundImage: imageUrl
                }}
                alt={title}
            />
            <div className="flex">
                <h2>{title}. <br /> {quality} quality
                    {/*cost*/} </h2>
            </div>
            <Button handleClick={on_button_click} adQuality={quality} primary>
                💸 Produce this quality at a cost of ${cost} per unit
            </Button>
        </div>
    );
}

function AdvertisementAlternative({ title, imageUrl, quality, on_button_click }) {
    return (
        <div className="h-50 w-50 pb-6">
            <div
                className="h-full w-full bg-contain bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        imageUrl
                }}
                alt={title}
            />
            <div className="flex">
                <h2>{title}. <br /> </h2>
                {/*{price} points per unit sold</h2>*/}
            </div>
            <Button handleClick={on_button_click} adQuality={quality} primary>
                📣 Advertise as {quality} quality
            </Button>
        </div>
    );
}

function PriceButton({ text, price, on_button_click }) {
    return (
        <Button handleClick={on_button_click} >
            🏷️ Sell my product for {text} {price}
        </Button>
    )
}

function PlayerScore(player, onChange, isResultStage) {
    return (
        <div key={player.id} className="py-4">
            <div className="flex items-center space-x-6">
                <div className="h-12 w-12 shrink-0">
                    <Avatar player={player} />
                </div>

                {isResultStage ? (
                    <div className="flex flex-col items-center space-y-0.5">
                        <div className="text-2xl font-semibold leading-none font-mono">
                            {player.round.get("score") || 0}
                        </div>
                        <h1 className="text-xs font-semibold uppercase tracking-wider leading-none text-gray-400">
                            Score
                        </h1>
                    </div>
                ) : null}
            </div>
        </div>
    );
}


function ProfitMarginCalculation({ producerPlayer }) {
    let profit = producerPlayer.round.get("priceOfProduct") - producerPlayer.round.get("productionCost")
    return (
        <div>

            <p>You have chosen to produce <b>{producerPlayer.round.get("productionQuality")}</b> quality toothpaste and advertise it as <b>{producerPlayer.round.get("advertisementQuality")}</b> quality toothpase at a <b>price of ${producerPlayer.round.get("priceOfProduct")}</b>.</p>
            <h1><p>This gives a <b>profit of  ${profit}</b> per product sold.</p></h1>

        </div>
    )
}

// Part 1 Component
function Part1({ selectedProduct, onProductionChoice, onNextPage }) {
    const { low, high } = selectedProduct;

    return (
        <div>
            <h1>
                <b>You are the producer of {selectedProduct.name}.</b>{" "}
            </h1>
            <h1>You will now decide what to produce, how to advertise it, and the price.</h1>

            {/* Display product images and corresponding prices */}
            <div className="flex justify-center space-x-4">
                <ProductionAlternative
                    title={`Standard ${selectedProduct.name}`}
                    cost={low.price}
                    quality="low"
                    imageUrl={low.image}
                    on_button_click={(e) => onProductionChoice(e, "low")}
                />
                <ProductionAlternative
                    title={`Amazing ${selectedProduct.name}`}
                    cost={high.price}
                    quality="high"
                    imageUrl={high.image}
                    on_button_click={(e) => onProductionChoice(e, "high")}
                />
            </div>

            {/* Continue button to move to the next page */}
            <Button handleClick={onNextPage} className="mt-32">Continue</Button>
        </div>
    );
}

// Part 2 Component
function Part2({
    selectedProduct,
    selectedQuality,
    onAdvertisementChoice,
    onPriceChoice,
    onNextPage,
    onPreviousPage,
}) {
    const { low, high } = selectedProduct;
    return (
        <div>
            <h1>
                <b>Choose how you want to advertise.</b>
            </h1>
            <div className="flex justify-center space-x-4">
                <AdvertisementAlternative
                    title={`Standard ${selectedQuality} quality`}
                    quality="low"
                    imageUrl={low.image}
                    on_button_click={(e) => onAdvertisementChoice(e, "low")}
                />
                <AdvertisementAlternative
                    title={`Amazing ${selectedQuality} quality`}
                    quality="high"
                    imageUrl={high.image}  // Add appropriate image URL
                    on_button_click={(e) => onAdvertisementChoice(e, "high")}
                />
            </div>

            {/* Buttons to select advertisement quality and set price */}
            <div className="flex justify-center space-x-4">
                <PriceButton text={'$10'} on_button_click={(e) => onPriceChoice(e, 10)} />
                <PriceButton text={'$15'} on_button_click={(e) => onPriceChoice(e, 15)} />
            </div>

            {/* Continue and Back buttons */}
            <Button handleClick={onPreviousPage}>Back</Button>
            <Button handleClick={onNextPage}>Continue</Button>
        </div>
    );
}

// Part 3 Component
function Part3({
    player,
    setIsModalOpen,
    isModalOpen,
    selectedProduct,
    selectedQuality,
    selectedPrice,
    onPriceChoice,  
    onWarrantAddition,
    onNextPage,
    onPreviousPage,
    onWarrantSelection,
    handleSubmit
}) {

    const { low, high, warrant } = selectedProduct;

    return (
        <div>
            <h1>
                <b>Choose your product price.</b>
            </h1>

            {/* Display product prices and add warrant button */}
            <div className="flex justify-center space-x-4">
                <div>
                    <p>A typical price for <b>low</b> quality {selectedQuality} is : ${low['price']}</p>
                    <p>A typical price for <b>high</b> quality {selectedQuality} is : ${high['price']}</p>
                </div>
                <Button handleClick={onWarrantAddition}>Add a warrant</Button>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Warrant" children={
                <>
                    {Array.isArray(warrant) && warrant.map((warrant, index) => {
                        return (
                            <div key={index} className="flex justify-center space-x-4">
                                <Button handleClick={(e) => onWarrantSelection(e, warrant.price)}><img src={warrant.icon} alt="icon" /> {warrant.description} ${warrant.price}</Button>
                            </div>
                        )
                    })}
                </>
            } />

            {/* Buttons to set low/high-quality prices */}
            <div className="flex justify-center space-x-4">
                <PriceButton text={`$${low.price}`} on_button_click={() => onPriceChoice(low.price)} />
                <PriceButton text={`$${high.price}`} on_button_click={() => onPriceChoice(high.price)} />
            </div>

            <ProfitMarginCalculation producerPlayer={player} />

            {/* Continue and Back buttons */}
            <Button handleClick={onPreviousPage}>Back</Button>
            {/* <Button handleClick={(e) => handleSubmit(e)}>Continue</Button> */}
            <NextRoundButton on_button_click={(e) => handleSubmit(e)} />
        </div>
    );
}

