// import React, { useState } from 'react';
// import { Carousel } from 'react-bootstrap';

// const PodcastCarousel = ({ podcastIds }) => {
//   const [podcasts, setPodcasts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const fetchPodcastData = async (podcastId) => {
//       try {
//         const response = await axios.get(`https://podcast-api.netlify.app/id/${podcastId}`);
//         return response.data;
//       } catch (error) {
//         console.error('Error fetching podcast data:', error);
//         return null;
//       }
//     };

//     const fetchPodcasts = async () => {
//       const podcastsData = await Promise.all(podcastIds.map(fetchPodcastData));
//       setPodcasts(podcastsData);
//       setLoading(false);
//     };

//     fetchPodcasts();
//   }, [podcastIds]);

//   const handleSelect = (index) => {
//     setCurrentIndex(index);
//   };

//   if (loading) {
//     return <p>Loading podcasts...</p>;
//   }

//   return (
//     <Carousel activeIndex={currentIndex} onSelect={handleSelect}>
//       {podcasts.map((podcast) => (
//         <Carousel.Item key={podcast.id}>
//           <img src={podcast.imageUrl} alt={podcast.title} className="d-block w-100" />
//           <Carousel.Caption>
//             <h3>{podcast.title}</h3>
//             <p>{podcast.description}</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// };

// export default PodcastCarousel;