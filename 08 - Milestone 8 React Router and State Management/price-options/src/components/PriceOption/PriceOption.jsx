

const PriceOption = ({priceOption}) => {
    const {features, price} = priceOption

    return (
        <div className="bg-blue-400 rounded-md text-center flex flex-col">
            <h1 className="mt-6">
                <span className="text-7xl font-bold">{price}</span>
                <span className="text-2xl font-bold">/Mon</span>
            </h1>
            <ul className="mt-4 pb-4 flex-grow">
                {
                    features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))
                }
            </ul>

            <button className="btn w-1/2 mx-auto mb-6">Buy Now</button>
        </div>
    );
};

export default PriceOption;