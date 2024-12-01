// import swal from 'sweetalert';

import Swal from "sweetalert2";

const AddCoffee = () => {
    const handleCoffeeForm = (e) => {
        e.preventDefault(); // Prevent default form submission

        const form = e.currentTarget; // Reference to the form element
        const formData = new FormData(form);

        // Extracting values from the form
        const name = formData.get('name');
        const chef = formData.get('chef');
        const supplier = formData.get('supplier');
        const taste = formData.get('taste');
        const category = formData.get('category');
        const details = formData.get('details');
        const photoURL = formData.get('photoURL');

        // Create an object with the form data
        const coffeeData = {
            name,
            chef,
            supplier,
            taste,
            category,
            details,
            photoURL,
        };

        // Log or send the data to an API/server
        console.log(coffeeData);

        fetch('http://localhost:3000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(coffeeData)
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data)

                if (data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Congratulations",
                        text: "You have added a coffee information",
                    });
                }
            })
            .catch(error => {
                console.error(error);
            })
    };

    return (
        <div className="bg-[#F4F3F0] py-12">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Add Coffee</h1>
                    <p className="text-gray-600">
                        Fill out the form below to add a new coffee.
                    </p>
                </div>

                {/* Form */}
                <form
                    className="bg-white p-8 shadow-md rounded-lg space-y-6"
                    onSubmit={handleCoffeeForm}
                >
                    {/* Row 1: Name & Chef */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-yellow-500 focus:outline-none"
                                placeholder="Enter coffee name"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="chef" className="block text-sm font-medium text-gray-700">
                                Chef
                            </label>
                            <input
                                type="text"
                                name="chef"
                                id="chef"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-yellow-500 focus:outline-none"
                                placeholder="Enter chef's name"
                                required
                            />
                        </div>
                    </div>

                    {/* Row 2: Supplier & Taste */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="supplier" className="block text-sm font-medium text-gray-700">
                                Supplier
                            </label>
                            <input
                                type="text"
                                name="supplier"
                                id="supplier"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-yellow-500 focus:outline-none"
                                placeholder="Enter supplier name"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="taste" className="block text-sm font-medium text-gray-700">
                                Taste
                            </label>
                            <input
                                type="text"
                                name="taste"
                                id="taste"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-yellow-500 focus:outline-none"
                                placeholder="Describe the taste"
                                required
                            />
                        </div>
                    </div>

                    {/* Row 3: Category & Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                Category
                            </label>
                            <input
                                type="text"
                                name="category"
                                id="category"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-yellow-500 focus:outline-none"
                                placeholder="Enter category"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="details" className="block text-sm font-medium text-gray-700">
                                Details
                            </label>
                            <textarea
                                name="details"
                                id="details"
                                rows="4"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-yellow-500 focus:outline-none"
                                placeholder="Enter coffee details"
                                required
                            ></textarea>
                        </div>
                    </div>

                    {/* Row 4: Photo URL */}
                    <div>
                        <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700">
                            Photo URL
                        </label>
                        <input
                            type="url"
                            name="photoURL"
                            id="photoURL"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-yellow-500 focus:outline-none"
                            placeholder="Enter photo URL"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-yellow-600 focus:ring focus:ring-yellow-300"
                        >
                            Add Coffee
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;
