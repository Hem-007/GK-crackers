/*
=====================================================
CATEGORY → IMAGE MAP
Used for:
- Products page
- Best Sellers
- Limited Offers
Later you can replace images here only
=====================================================
*/

import categories from "./categories";

// Convert categories array into a lookup map
const categoryImageMap = {};

categories.forEach((cat) => {
  categoryImageMap[cat.name] = cat.image;
});

export default categoryImageMap;
