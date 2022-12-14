const apiKey = 'Z-uMkbJmXmlbCtjAJDfprtXSifcaD5gFsC71KFTay6hGHDdlc7LdP9XW5WEoDXU3fn3E_yl4oEmwspa3M0cdawICapx1u6eRXc3JGrSBIr2zhYnbLTqbvmv3bKDxYnYx';

const Yelp = {
    search(term, location, sortBy) {
      return fetch(`/api/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }).then(response => {
        if (response.status !== 400) {
          return response.json();
        } else {
          alert("Please input valid search criteria.")
        }
      }).then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
            phoneNumber: business.display_phone
          }));
        }
      });
    }
  };

export default Yelp;
