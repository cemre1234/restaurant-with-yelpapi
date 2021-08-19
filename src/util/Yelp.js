
const apiKey = 'SKzC75L5STF_sw3BA3Z8aVWjTx9gt405jcgpYNX05iDHEPQ6VMjHLdgEHJ97Kc4nJbvlTD8OzM6ICkLW7MQiPSEGBhM12AE2BUkH7Z9vKLCPuiH6Z7o1Eg2zdJOrYHYx';

export const Yelp  = {
    async searchTerm(term,location,sortBy){
        const response = await fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=" + term + "&location=" + location + "&sort_by=" + sortBy + "", { headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        } });
        const jsonResponse = await response.json();
        if (jsonResponse.businesses) {
            return jsonResponse.businesses.map((business) => {
                console.log(business);
                return {
                    'id':business.id,
                    'image_url':business.image_url,
                    'name':business.name,
                    'address1':business.location.address1,
                    'city':business.location.city,
                    'state':business.location.state,
                    'zipCode':business.location.zipCode,
                    'category':business.category,
                    'rating':business.rating,
                    'reviewCount':business.review_count
                };
            });

        }
    }
}
