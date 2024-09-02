const SalertUI = ({images,heading,description})=>{
    return(
            <>
                <div className="w-full sm:w-[48%] md:w-[30%] bg-white p-2 space-y-2">
                    <img className="rounded-md w-[100%] h-[100%] object-cover" src={images} alt="" />
                    <h2 className="font-bold text-xl">{heading} </h2>
                    <p>{description}</p>
                    <button className="bg-blue-600 px-5 py-2 rounded-md text-white mr-2">Save</button>
                    <button className="bg-blue-600 px-5 py-2 rounded-md text-white">Delete</button>
                </div>
            </>
        );
}
export default SalertUI;