import React from 'react'
import Spots from"./Spots"

function App() {
    return (
        <div className="Spots">
            <Spots
            place="Meridian, Idaho"
            imgUrl="https://i.pinimg.com/236x/a5/c7/dd/a5c7dd19cb2c56760962ab67e0d0a3bc.jpg"
            price="40"
            timeToGo="Spring"
        />
        
        <Spots
            place="Cancun"
            imgUrl="https://i.pinimg.com/236x/dd/e4/be/dde4be64d2d6126f5d2c5757a5b79394.jpg"
            price="900"
            timeToGo="Winter"
            />

            <Spots
            place="Russia"
            imgUrl="https://i.pinimg.com/236x/60/51/a8/6051a82bb7a811454a74f9749ff5c03c.jpg"
            price="1100"
            timeToGo="Summer"
            />
            
            <Spots
            place="China"
            imgUrl="https://i.pinimg.com/236x/54/e5/29/54e5292be9b834c79749fa67732bfe8f.jpg"
            price="1200"
            timeToGo="Fall"
            />
            
            <Spots
            place="Lebanon"
            imgUrl="https://i.pinimg.com/236x/90/d0/66/90d066562123fa34ad2b6e6cb0ba58d9.jpg"
            price="400"
            timeToGo="Spring"
            />
        </div>
    )
}

export default App