import Image from 'next/image';
const WhyChooseUs = () => {
    const benefits = [
        {
          id: '01',
          title: 'Over 2 Thousand properties',
          description: '10+ properties are added every month',
          icon: '/icons/properties.png', // Replace with your actual icon path
        },
        {
          id: '02',
          title: 'Verification by RERA',
          description: 'Photos / Videos and other details are verified on location',
          icon: '/icons/verified.png',
        },
        {
          id: '03',
          title: 'Convenience & Time-Saving',
          description: 'You can explore hundreds of properties from your home ',
          icon: '/icons/users.png',
        },
      ];
    return (
        <section className="py-16 bg-white text-center">
            <p className="text-sm text-gray-500 font-semibold uppercase">Benefits of Nagpur Heights</p>
            <h2 className="text-3xl font-bold text-[#0d1a38] mb-12 mt-2">Why choose Nagpur Heights</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                {benefits.map((item, index) => (
                    <div key={index} className="flex flex-col items-center text-center px-4">
                        {/* <Image src={item.icon} alt={item.title} width={60} height={60} className="mb-4" /> */}
                        <h3 className="text-base font-semibold text-blue-900">
                            <span className="text-blue-600 mr-1">{item.id}.</span>
                            {item.title}
                        </h3>
                        <p className="text-gray-500 text-sm mt-1">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default WhyChooseUs;