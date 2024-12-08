import Header from "./components/Header";
import Footer from "./components/footer";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <div>
    
      <main>
     
        {/* Hero Section */}
        <Header/>
        <section className="flex flex-col md:flex-row items-center bg-yellow-100 py-12 px-6">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-semibold">Rocket single seater</h1>
            <button className="mt-4 px-6 py-2 bg-black text-white rounded">
              Shop Now
            </button>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/rocket-chair.png"
              alt="Rocket single seater"
              width={500}//300
              height={300}//200
            />
          </div>
        </section>

        {/* Product Showcase */}
        <section className="py-12 px-6 grid grid-cols-1 sm:grid-cols-2 gap-8 ">
          <div className="text-center border-2 w-[50vw] h-[50vh]">
            <Image src="/side-table.png" alt="Side table" width={400} height={100} className="  mx-auto"/>
            <p className="mt-4">Side table</p>
          </div>
          <div className="text-center border-2 w-[50vw] h-[50vh]">
            <Image src="/cloud-sofa-three.png" alt="Sofa" className=" object-cover mx-auto" width={400} height={100}/>
            <p className="mt-4">Side table</p>
          </div>
        </section>

        {/* Top Picks */}
        <section className="py-12 px-6">
          <h2 className="text-center text-3xl font-semibold">
            Top Picks For You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
            <div className="text-center">
              <Image
                src="/cloud-sofa-three.png"
                alt="Product 1"
                className="mx-auto"
                width={200}
                height={200}
              />
              <p>Trenton modular sofa</p>
              <p>Rs. 25,000.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/granite-dining-table.png"
                alt="Product 2"
                className="mx-auto"
                width={200}
                height={200}
              />
              <p>Granite dining table with chairs</p>
              <p>Rs. 25,000.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/outdoor-bar-table-and-stool.png"
                alt="Product 3"
                className="mx-auto"
                width={200}
                height={200}
              />
              <p>outdoor bar table</p>
              <p>Rs. 25,000.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/plain-console-with-teak-mirror.png"
                alt="Product 4"
                className="mx-auto"
                width={200}
                height={200}
              />
              <p>plain console with teak mirror</p>
              <p>Rs. 25,000.00</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <button className="px-6 py-2 bg-black text-white rounded">
              View More
            </button>
          </div>
        </section>

        {/* Blogs */}
        <section className="py-12 px-6 bg-gray-50">
          <h2 className="text-center text-3xl font-semibold">Our Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="text-center">
              <Image
                src="/rectangle-13.jpeg"
                alt="Blog 1"
                className="mx-auto"
                width={200}
                height={200}
              />
              <p className="mt-4">Going all-in with millennial design</p>
            </div>
            <div className="text-center">
              <Image
                src="/rectangle-15.jpeg"
                alt="Blog 2"
                className="mx-auto"
                width={200}
                height={200}
              />
              <p className="mt-4">Going all-in with millennial design</p>
            </div>
            <div className="text-center">
              <Image
                src="/rectangle-17.jpeg"
                alt="Blog 3"
                className="mx-auto"
                width={200}
                height={200}
              />
              <p className="mt-4">Going all-in with millennial design</p>
            </div>
          </div>
        </section>

        {/* Instagram Section */}
        <section className="py-12 px-6 text-center">
          <h2 className="text-3xl font-semibold">Our Instagram</h2>
          <button className="mt-4 px-6 py-2 bg-black text-white rounded">
            Follow Us
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
