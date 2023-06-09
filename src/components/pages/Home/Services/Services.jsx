import { useEffect, useState } from "react";
import ServiceCart from "./ServiceCart";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://car-doctor-server-asif247.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center mt-5">
        <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
        <h2 className="text-5xl ">Our Service Area</h2>
        <p className="w-1/2 mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCart key={service._id} service={service}></ServiceCart>
        ))}
      </div>
    </div>
  );
};

export default Services;
