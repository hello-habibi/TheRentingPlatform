import { allDistricts, districtsThanas } from './districtsThanas';
// Shared dummy posts dataset for Home, My Posts, and Search
export const posts = Array.from({ length: 100 }).map((_, idx) => {
  const dummyImages = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    'https://images.unsplash.com/photo-1460518451285-97b6aa326961',
    'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd',
    'https://images.unsplash.com/photo-1523217582562-09d0def993a6',
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
    'https://images.unsplash.com/photo-1507089947368-19c1da9775ae',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
    'https://images.unsplash.com/photo-1519985176271-adb1088fa94c',
    'https://images.unsplash.com/photo-1501594907352-04cda38ebc29',
    'https://images.unsplash.com/photo-1467987506553-8f3916508521',
  ];
  // Pick a random district
  const district = allDistricts[idx % allDistricts.length];
  const thanas = districtsThanas[district];
  // Pick a random thana for the district
  const thana = thanas[idx % thanas.length];
  return {
    image: dummyImages[idx % dummyImages.length] + '?w=400&h=300&fit=crop',
    title: `Home ${idx + 1}`,
    location: `${thana}, ${district}`,
    fare: `৳${(5000 + (idx % 20) * 1000).toLocaleString()}/mo`,
    phone: `017${(10000000 + idx * 1234).toString().slice(0, 8)}`,
    owner: `Owner ${idx + 1}`,
    description: `A beautiful home number ${idx + 1} in ${thana}, ${district} with all modern amenities. Spacious, well-lit, and located in a prime area of ${thana}.`,
    mapLink: 'https://goo.gl/maps/4kT1b1Q1Q1Q1Q1Q1A',
  };
}); 