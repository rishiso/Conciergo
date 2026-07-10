import { Business } from '../types';

const apiKey = 'Z-uMkbJmXmlbCtjAJDfprtXSifcaD5gFsC71KFTay6hGHDdlc7LdP9XW5WEoDXU3fn3E_yl4oEmwspa3M0cdawICapx1u6eRXc3JGrSBIr2zhYnbLTqbvmv3bKDxYnYx';

interface YelpBusiness {
  id: string;
  image_url: string;
  name: string;
  location: {
    address1: string;
    city: string;
    state: string;
    zip_code: string;
  };
  categories: { title: string }[];
  rating: number;
  review_count: number;
  display_phone: string;
}

interface YelpSearchResponse {
  businesses?: YelpBusiness[];
}

const Yelp = {
    search(term: string, location: string, sortBy: string): Promise<Business[]> {
      return fetch(`/api/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }).then((response): Promise<YelpSearchResponse> | undefined => {
        if (response.status !== 400) {
          return response.json() as Promise<YelpSearchResponse>;
        } else {
          alert("Please input valid search criteria.")
        }
      }).then(jsonResponse => {
        if (jsonResponse && jsonResponse.businesses) {
          return jsonResponse.businesses.map((business): Business => ({
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
        return [];
      });
    }
  };

export default Yelp;
