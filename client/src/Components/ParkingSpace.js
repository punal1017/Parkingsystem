import React from 'react'
import '../Styles/ParkingSpace.css'
const ParkingSpace = () => {
  return (
    <>
    <main>
        <section class="parking-section">
            <h2>Parking Spaces</h2>
            <div class="parking-container">
                <div class="parking-space">
                    <h3>2-Wheeler</h3>
                    <div class="space-boxes">
                        <div class="space available"></div>
                        <div class="space available"></div>
                        <div class="space available"></div>
                        <div class="space available"></div>
                        <div class="space available"></div>
                        <div class="space available"></div>
                        <div class="space available"></div>
                        <div class="space available"></div>
                        <div class="space available"></div>
                        <div class="space available"></div>
                    </div>
                    <p>Total Available: <span class="available-count">10</span></p>
                </div>
                <div class="parking-space">
                    <h3>3-Wheeler</h3>
                    <div class="space-boxes">
                        <div class="space available"></div>
                        <div class="space available"></div>
                        <div class="space available"></div>
                        <div class="space available"></div>
                        <div class="space available"></div>
                        <div class="space available"></div>
                        <div class="space available"></div>
                        <div class="space available"></div>
                        <div class="space available"></div>
                        <div class="space available"></div>
                    </div>
                    <p>Total Available: <span class="available-count">10</span></p>
                </div>
                <div class="parking-space">
                    <h3>4-Wheeler</h3>
                    <div class="space-boxes">
                        <div class="space available"></div>
                        <div class="space available"></div>
                        <div class="space available"></div>
                        <div class="space available"></div>
                        <div class="space available"></div>
                        <div class="space available"></div>
                        <div class="space available"></div>
                        <div class="space available"></div>
                        <div class="space available"></div>
                        <div class="space available"></div>
                    </div>
                    <p>Total Available: <span class="available-count">10</span></p>
                </div>
            </div>
        </section>
    </main>
    </>
      




    
  )
}

export default ParkingSpace