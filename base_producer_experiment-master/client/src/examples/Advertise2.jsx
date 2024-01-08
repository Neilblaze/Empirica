import React, { useState } from "react";
import { Button, Modal } from "../components"; // Import your modal and button components

export function Advertisement({ roundNumber, products }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedQuality, setSelectedQuality] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [showWarrantModal, setShowWarrantModal] = useState(false);
  const [selectedWarrant, setSelectedWarrant] = useState(null);

  const currentProduct = products[roundNumber - 1];

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleQualitySelection = (quality) => {
    setSelectedQuality(quality);
  };

  const handlePriceSelection = (price) => {
    setSelectedPrice(price);
  };

  const handleAddWarrant = () => {
    setShowWarrantModal(true);
  };

  const handleWarrantSelection = (warrant) => {
    setSelectedWarrant(warrant);
    setShowWarrantModal(false);

    // Perform logic to update the product price based on the selected warrant
    // For example: setSelectedPrice(warrant.price);
  };

  const renderPart1 = () => (
    <div>
      <h1>You are the producer of the {currentProduct.name}.</h1>
      <div>
        {/* Display images and corresponding prices */}
        <img src={currentProduct.low.image} alt="Low Quality" />
        <p>Low Quality Price: ${currentProduct.low.price}</p>
        <Button onClick={() => handleQualitySelection("low")}>Select Low Quality</Button>
      </div>
      <div>
        <img src={currentProduct.high.image} alt="High Quality" />
        <p>High Quality Price: ${currentProduct.high.price}</p>
        <Button onClick={() => handleQualitySelection("high")}>Select High Quality</Button>
      </div>
    </div>
  );

  const renderPart2 = () => (
    <div>
      <h1>Choose how you want to advertise</h1>
      <Button onClick={goToPrevPage}>Back</Button>
      <Button onClick={goToNextPage}>Continue</Button>
    </div>
  );

  const renderPart3 = () => (
    <div>
      <h1>Choose your product price</h1>
      <div>
        {/* Display typical low and high-quality prices */}
        <p>Low Quality Price: ${currentProduct.low.price}</p>
        <p>High Quality Price: ${currentProduct.high.price}</p>

        {/* Display the current selected price */}
        {selectedPrice && <p>Selected Price: ${selectedPrice}</p>}

        {/* Buttons to set the product price */}
        <Button onClick={() => handlePriceSelection(currentProduct.low.price)}>
          Sell my product at Low-Quality Price
        </Button>
        <Button onClick={() => handlePriceSelection(currentProduct.high.price)}>
          Sell my product at High-Quality Price
        </Button>

        {/* Button to add a warrant */}
        <Button onClick={handleAddWarrant}>Add a Warrant</Button>
      </div>

      {/* Warrant Modal */}
      <Modal show={showWarrantModal} onClose={() => setShowWarrantModal(false)}>
        <h2>Select a Warrant</h2>
        {currentProduct.warrants.map((warrant, index) => (
          <div key={index}>
            <p>{warrant.description}</p>
            <Button onClick={() => handleWarrantSelection(warrant)}>Select Warrant</Button>
          </div>
        ))}
      </Modal>

      <Button onClick={goToPrevPage}>Back</Button>
      <Button onClick={goToNextPage}>Continue</Button>
    </div>
  );

  // Render the appropriate part based on the current page
  return (
    <div>
      {currentPage === 1 && renderPart1()}
      {currentPage === 2 && renderPart2()}
      {currentPage === 3 && renderPart3()}
    </div>
  );
}
