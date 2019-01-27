const MaxSumAdapter = (maxSum, isFake = false) => {
    if (isFake) {
        return {
            data: Math.round(Math.random() * 100),
        }
    }
    return {
        data: maxSum.data,
    }
};


export default MaxSumAdapter;