import Card from './Card';


const Cards = ()=> {

    return(
        <>
            <p className="text-center mt-4">Sports</p>
            <div className="flex justify-center">
                <div className=" grid grid-cols-4 gap-6 justify-center mt-6">
                    <Card title="Barber" />
                    <Card title="Manicure-Gel" />
                    <Card title="Soccer" />
                    <Card title="Pilatis" />

                </div>

            </div>


</>
    )
    
    }
    
    export default  Cards;