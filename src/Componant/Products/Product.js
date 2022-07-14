import React from 'react'
// import Header from '../Layout/GroceryProduct/Header/Header'
// import ImportantLink from '../../Componant/Layout/ImportantLink/ImportantLink'
// import ShoppingBag from '../../Componant/YourProfileLayout/ShoppingBag/ShoppingBag'
// import NavbarData from '../../Data/Navbar'
// import OrderSummary from '../../Data/OrderSummary'
// import ShoppingBagData from '../../Data/ShoppingBagData'
// import KnowUs from '../../Data/ImportantLinkData/KnowUs'
// import MonMetro from '../../Data/ImportantLinkData/MonMetro'
// import WhatWeOffer from '../../Data/ImportantLinkData/WhatWeOffer'

import Header from '../Layout/GroceryProduct/Header/Header';
import ImportantLink from '../Layout/GroceryProduct/ImportantLink/ImportantLink';
import ShoppingBag from '../Layout/GroceryProduct/ShoppingBag/ShoppingBag';
import NavbarData from '../../Data/Navbar';
import ShoppingBagData from '../../Data/ShoppingBagData';
import OrderSummary from '../../Data/OrderSummary';
import KnowUs from '../../Data/ImportantLinkData/KnowUs';
import MonMetro from '../../Data/ImportantLinkData/MonMetro';
import WhatWeOffer from '../../Data/ImportantLinkData/WhatWeOffer';


const Product = () => {
  return (
    <div>
      <Header headerData={NavbarData}/>
      <ShoppingBag bagData={ShoppingBagData} orderSummaryData={OrderSummary} />
      <ImportantLink knowUs={KnowUs} monoMetro={MonMetro} whatWeOffer={WhatWeOffer} />
    </div>
  )
}
export default Product;