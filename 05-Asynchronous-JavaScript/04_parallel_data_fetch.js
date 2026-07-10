const fetchUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let internetConnected = true
            if (internetConnected)
                resolve({ name: "Akash", membership: "Gold" })
            else
                reject()

        }, 1000);
    });
}

const fetchRestaurants = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["Pizza Hut", "Burger King", "Subway"])
        }, 2000);
    });
    
}


const fetchCoupons = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["WELCOME50", "FREEFOOD"])
        }, 500);
    });
    
}

async function loadSwiggyDashboard() {

    try {
        const [user, restaurants, coupons] = await Promise.all([fetchUser(),
        fetchRestaurants(),
        fetchCoupons()])
        console.log("\t👤  User Profile:", user);
        console.log("\t🍔  Nearby Restaurants:", restaurants);
        console.log("\t🎟️   Available Coupons:", coupons);


    }
    catch {
        console.log('Error : something weat wrong');

    }

}




loadSwiggyDashboard()
