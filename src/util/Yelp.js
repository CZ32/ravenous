const apiKey =
 'SaO2ymF3ozzqPDULXm_9zPXh6DVTrdNy9tKcH-rXTEkLAxtaqUGeVQNEUOM3Udy6_L0qqRYdo2FfnYU_A9Ni3d7fluQwIvpnf5HmeTomnlFPFlt4GlM8fvpYU8YBX3Yx';

const Yelp = {
 search: function (term, location, sortBy) {
  return fetch(
   `https://cors-anywhere.herokuapp.com/
   https://api.yelp.com/v3/businesses/search?
        term=${term}
        &location=${location}
        &sort_by=${sortBy}`,
   {
    headers: {
     Authorization: `Bearer ${apiKey}`,
    },
   }
  ).then(
    (response) => {
     if (response.ok) {
      return response.json();
     }
     throw new Error('Reuest failed!');
    },
    (networkError) => console.log(networkError.message)
   )
   .then((jsonResponse) => {
       if(jsonResponse.businesses)
       return jsonResponse.businesses.map(business =>{
           return {
               id: business.id,
               imageSrc: business.imageSrc,
               name: business.name,
               address: business.address,
               city: business.location.city,
               state: business.location.state,
               zipCode: business.location.zipCode,
               category: business.category,
               rating: business.rating,
               review: business.review_count
           }
       })
   });
 },
};
