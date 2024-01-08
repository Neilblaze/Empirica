import React from "react";
import { Button } from "../components/Button";

export function ProductionAlternative({ title, imageUrl, cost, quality, on_button_click }) {
    return (
        <div className="h-50 w-50 pb-6">
            <div
                className="h-full w-full bg-contain bg-center bg-no-repeat"
                style={{
                    backgroundImage: imageUrl,
                }}
                alt={title}
            />
            <div className="flex">
                <h2>{title}. <br /> {quality} quality</h2>
            </div>
            <Button handleClick={on_button_click} adQuality={quality} primary>
                💸 Produce this quality at a cost of ${cost} per unit
            </Button>
        </div>
    );
}

export function AdvertisementAlternative({ title, imageUrl, quality, on_button_click }) {
    return (
        <div className="h-50 w-50 pb-6">
            <div
                className="h-full w-full bg-contain bg-center bg-no-repeat"
                style={{
                    backgroundImage: imageUrl,
                }}
                alt={title}
            />
            <div className="flex">
                <h2>{title}. <br /> </h2>
            </div>
            <Button handleClick={on_button_click} adQuality={quality} primary>
                📣 Advertise as {quality} quality
            </Button>
        </div>
    );
}

export function PriceButton({ text, on_button_click }) {
    return (
        <Button handleClick={on_button_click}>
            🏷️ Sell my product for {text}
        </Button>
    );
}

export function ProfitMarginCalculation({ producerPlayer }) {
    let profit = producerPlayer.round.get("priceOfProduct") - producerPlayer.round.get("productionCost");
    return (
        <div>
            <p>
                You have chosen to produce <b>{producerPlayer.round.get("productionQuality")}</b> quality toothpaste and advertise it as{" "}
                <b>{producerPlayer.round.get("advertisementQuality")}</b> quality toothpaste at a <b>price of ${producerPlayer.round.get("priceOfProduct")}</b>.
            </p>
            <h1>
                <p>This gives a <b>profit of ${profit}</b> per product sold.</p>
            </h1>
        </div>
    );
}
