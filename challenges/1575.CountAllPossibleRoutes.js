/**
 * @param {number[]} locations
 * @param {number} start
 * @param {number} finish
 * @param {number} fuel
 * @return {number}
 */
var countRoutes = function(locations, start, finish, fuel) {
    
    const dp = Array(locations.length).fill(0).map(()=>Array(fuel+1).fill(0));
    
    const mod = 10**9 + 7;

    dp[start][fuel] = 1;

    
    for(let remainFuel = fuel; remainFuel >0; remainFuel--){
        for(let city = 0; city < locations.length; city++){

            if(dp[city][remainFuel] === 0) continue;

            for(let nextCity = 0; nextCity < locations.length; nextCity++){
                const costFuel = Math.abs(locations[city]-locations[nextCity]);
                if(city !== nextCity && remainFuel >=costFuel){
                    dp[nextCity][remainFuel-costFuel] =(dp[nextCity][remainFuel-costFuel] + dp[city][remainFuel])%mod; 
                }
            }
        }

    }

    let ans = 0;
    console.log(dp[finish]);
    for(const count of dp[finish]){
        ans = (ans+count)%mod;
    }

    return ans;
};
