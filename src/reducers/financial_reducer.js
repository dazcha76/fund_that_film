const DEFAULT_STATE = {
    financeList: [
    {
        "north america": {
            "theatrical": {
                "gross": 94308232.2,
                "film rental": 47154116.1,
                "distribution fee": 11788529.025,
                "direct distribution expenses": 55000000,
                "distributor's net": -19634412.924999997
            },
            "home entertainment": {
                "gross": 169754817.96,
                "expenses": 11244425.658924,
                "distribution fee": 39627598.075269,
                "distributor's net": 118882794.225807
            },
            "theatrical and home": {
                "sales agent fee": 4962419.06504035,
                "distributor's net": 94285962.23576665
            },
            "pay per view": {
                "gross": 5186952.771000001,
                "distribution fee": 0,
                "direct distribution expenses": 150000,
                "sales agent fee": 778042.9156500001,
                "distributor's net": 4258909.855350001
            },
            "premium cable": {
                "gross": 9430823.22,
                "distribution fee": 0,
                "direct distribution expenses": 150000,
                "sales agent fee": 1392123.483,
                "distributor's net": 7888699.737000001
            },
            "free tv premiere": {
                "gross": 7073117.415,
                "distribution fee": 0,
                "direct distribution expenses": 200000,
                "sales agent fee": 1030967.61225,
                "distributor's net": 5842149.80275
            },
            "cable and syndicated tv": {
                "gross": 4715411.61,
                "distribution fee": 0,
                "direct distribution expenses": 200000,
                "sales agent fee": 225770.58050000004,
                "distributor's net": 4289641.0295
            },
            "total net earnings": 116565362.66036665
        },
        "international": {
            "theatrical, home, tv gross": 195425861.39999998,
            "sales agent fee": 39085172.279999994,
            "total net earnings": 156340689.11999997
        },
        "global consumer products": {
            "royalties gross": 4010382.74112,
            "merchandising distribution fee": 0,
            "sales agent fee": 601557.411168,
            "distributor's net": 3408825.3299519997
        },
        "total distributor's net": 276314877.11031866,
        "global brand tie-in fees": 0,
        "production financing expense": 4050000,
        "negative cost": 45000000,
        "studio burden": 0,
        "talent residuals": 6151784.155446915,
        "sales agent direct sales expenses": 500000,
        "producer's gross": 220613092.95487174,
        "talent participation": 15442916.506841024,
        "producer's net": 205170176.4480307,
        "studio's share": 0,
        "producer's share": 205170176.4480307,
        "distributor's net earning to cost ratio": "4.96:1",
        "expenses after distributor's net": 71144700.66228794
    }
]
};

const financialReducer = (state = DEFAULT_STATE, action) => {
  switch(action.type){
    // case 'GET_FINANCIAL_DATA':
    //   return {financeList: action.payload.data.data}
    default:
      return state
  }
};

export default financialReducer;