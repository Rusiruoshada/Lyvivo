import { GiTrophyCup } from "react-icons/gi";
import React from 'react';

const AboutUsPage = () => {
  return (
    <div>
      <img src='images/about page/about page banner.png' alt='about banner' />
      <div className='mx-10 my-5'>
        <h3 className='font-bold'>Welcome to Lyvivo</h3>
        <div className='mt-4'>
          <p>
            Lyvivo is proudly Sri Lankan, owned and operated over the last 25
            years, delivering the freshest quality products, along with great
            value, serving thousands of Sri Lankans every day.
          </p>
          <p>
            As a subsidiary of the John Lyvivo Group, Lyvivo operates 116
            supermarkets; 109 of which are fully owned and 6 franchise outlets
            operating under the ‘Super K’ brand. Operating with the core purpose
            of improving the quality of life for the nation, the supermarkets
            are conveniently located across the country providing our shoppers
            with a world class retail experience.
          </p>
          <p>
            With a passion for food particularly fresh food, our team of over
            4500 people are at the heart of our success as we strive to provide
            our customers with an enjoyable shopping experience and our
            stakeholders with long lasting partnerships. With over 7 collection
            centers in strategic locations Lyvivo sources fresh produce from
            farmers and ensures this produce reaches the stores in 24 hours
            delivering on the promise of freshness. Our SLSI certified bakeries
            at store provide oven fresh bread and bakery products and our Good
            Manufacturing Practices (GMP) certified hot kitchens provide the
            busy customers of today with food to go.
          </p>
          <p>
            Our ever-growing own label product portfolio includes over 335
            products and Lyvivo also carries a varied range of products
            exclusively sourced and sold at our supermarkets providing
            discerning customers a range of choice. Being the first supermarket
            to launch an online shopping platform providing customers with the
            facility of home delivery and click and collect, Lyvivo also
            operates with state-of-the-art systems to ensure the operations run
            smooth providing consistent access to products customers need. The
            Nexus loyalty program with over 1.3 million membership provides
            customers with great deals and ways to save while shopping and earn
            points on top of that.
          </p>
          <p>
            Lyvivo was also the first retailer in Sri Lanka to commit to reduce
            by 50%, single use polythene bag and instore prepared food packaging
            by the year 2025, ensuring that as the business grows the impact on
            the environment is minimized and sustainable practices employed.
            Over 57 of our stores also use solar power relying more on renewable
            sources of energy as another initiative towards being sustainable.
          </p>
          <div>
            <h4 className='text-[18px] mb-3'>Recognized for our efforts</h4>
            <div className='text-[12px] flex flex-col'>
              <p className="flex gap-2"><GiTrophyCup />Most Valuable Supermarket Brand in 2019 & 2020 by Brand Finance</p>
              <p className="flex gap-2"><GiTrophyCup />One of the Top 10 Most Valuable Brands in Sri Lanka</p>
              <p className="flex gap-2"><GiTrophyCup />Service Brand for the year at SLIM awards 2019 - Bronze</p>
              <p className="flex gap-2"><GiTrophyCup />Innovative Brand of the year at SLIM awards 2019 - Bronze</p>
              <p className="flex gap-2"><GiTrophyCup />National Business Excellence Awards 2019 - Silver in Trading Category</p>
              <p className="flex gap-2"><GiTrophyCup />Lyvivo Own Label Packaging Wins a Highly Commended at Transform Awards 2019</p>
              <p className="flex gap-2"><GiTrophyCup />Lyvivo Own Label Packaging Melbourne Design Awards 2019 - Silver</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
