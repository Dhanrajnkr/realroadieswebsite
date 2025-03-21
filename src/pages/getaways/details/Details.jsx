import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col, Badge, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalendarAlt, 
  faMapMarkerAlt, 
  faClock, 
  faUser, 
  faMountain, 
  faMapMarkedAlt, 
  faRoad, 
  faUsers, 
  faArrowRight,
  faTag
} from '@fortawesome/free-solid-svg-icons';
import { useParams, useLocation } from 'react-router-dom';
import DetailsCards from '../details/DetailsCards';

const Details = () => {
  const { id } = useParams();
  const locationPath = useLocation();
  const [itemData, setItemData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [itemType, setItemType] = useState('event'); // Default to event

  // Check if this is a trip based on the referrer or state
  const isTripDetail = locationPath.state?.type === 'trip' ||
                      document.referrer.includes('adventuretours') ||
                      locationPath.pathname.includes('trip');

  useEffect(() => {
    setLoading(true);
   
    // Choose the appropriate API endpoint based on whether this is a trip or event
    const apiUrl = isTripDetail
      ? `/api/v1/trip/trips/${id}`
      : `/api/v1/event/events/${id}`;
   
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlNXSmtyLXFSRjlja2RzUUwxaWMwViJ9.eyJpc3MiOiJodHRwczovL3JlYWxyb2FkaWVzLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJzbXN8Njc0NTU1MWFmOGQ1NTY0M2M4YmUwMWRjIiwiYXVkIjpbImh0dHBzOi8vcmVhbHJvYWRpZXMudXMuYXV0aDAuY29tL2FwaS92Mi8iLCJodHRwczovL3JlYWxyb2FkaWVzLnVzLmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE3NDI0NTMxMjEsImV4cCI6MTc0MjQ1NjcyMSwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBwaG9uZSByZWFkOmN1cnJlbnRfdXNlciB1cGRhdGU6Y3VycmVudF91c2VyX21ldGFkYXRhIGRlbGV0ZTpjdXJyZW50X3VzZXJfbWV0YWRhdGEgY3JlYXRlOmN1cnJlbnRfdXNlcl9tZXRhZGF0YSBjcmVhdGU6Y3VycmVudF91c2VyX2RldmljZV9jcmVkZW50aWFscyBkZWxldGU6Y3VycmVudF91c2VyX2RldmljZV9jcmVkZW50aWFscyB1cGRhdGU6Y3VycmVudF91c2VyX2lkZW50aXRpZXMgb2ZmbGluZV9hY2Nlc3MiLCJndHkiOiJwYXNzd29yZCIsImF6cCI6InRhVzgxNkM4T2Q2Mm9ESnFRbEtSYTVvSUdYcE4zbFhxIn0.Wj7V-ujMeg8DAhb3r3831HiXnSSuTO_qwZTLNqxo2I7WeVaxMJKOBx9AEA82iXtpy-i-OKr5gBq3ctIWRrxp987FD_roRsjH5m6VR6Q8jQ2F0pg355hUBID_cfRaDKI5jk0TiI2cHBdbWMjh6GZyfTJH5lX9Jmwr5uy9PO_0kWJ-Oe4wWYOnOOup9WRcphyiEFZ_7jbZ4VipJeP6nyJ9IHHD-GuhIeYoAfAOipELO0W6uSX8X7y0xRnzOEozaW8tcjN2Lkl0-5FwP3whYXch98HTqKMeizemzzc387EKUg-ZW_R5adGSU74KSxm-HrsrnjV1YGnDOZ3Wm8YgVR-3tw'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        // Set the item type based on the API used
        setItemType(isTripDetail ? 'trip' : 'event');
       
        // For trips, the data might be nested in a data property
        const itemData = isTripDetail && data.data ? data.data : data;
        setItemData(itemData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching details:', error);
        setError(error.message);
        setLoading(false);
      });
  }, [id, isTripDetail]);

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Format time for display
  const formatTime = (timeString) => {
    if (!timeString) return '';
    // Handle different time formats
    if (timeString.includes('T')) {
      const date = new Date(timeString);
      return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
    }
    
    // Handle HH:MM:SS format
    const timeParts = timeString.split(':');
    if (timeParts.length >= 2) {
      const hours = parseInt(timeParts[0]);
      const minutes = parseInt(timeParts[1]);
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const hours12 = hours % 12 || 12;
      return `${hours12}:${minutes.toString().padStart(2, '0')} ${ampm}`;
    }
    
    return timeString;
  };

  // Format duration for display
  const formatDuration = (duration) => {
    if (!duration) return 'Duration not specified';
    return duration.split(' ')[0] + ' days';
  };

  // Calculate discounted price
  const calculateDiscountedPrice = (price, discount) => {
    if (!price) return 'Contact for price';
    if (!discount) return price;
    
    const discountedPrice = Math.round(price * (1 - discount/100));
    return discountedPrice;
  };

  // Format level for display
  const formatLevel = (level) => {
    if (!level) return 'All Levels';
    return level.replace(/_/g, ' ');
  };

  // Generate hashtags from category and title
  const generateHashtags = (item) => {
    if (!item) return '';
    const tags = [];
   
    if (itemType === 'trip') {
      // For trips
      if (item.category) tags.push(`#${item.category.toLowerCase()}`);
      if (item.terraintype) tags.push(`#${item.terraintype.toLowerCase()}`);
      if (item.duration) {
        const days = item.duration.split(' ')[0];
        tags.push(`#${days}days`);
      }
    } else {
      // For events
      if (item.category) tags.push(`#${item.category.toLowerCase()}`);
      if (item.level) tags.push(`#${item.level.toLowerCase().replace(/_/g, '')}`);
    }
   
    // Add some generic tags based on title words
    const titleText = itemType === 'trip' ? item.name : item.title;
    const titleWords = titleText ? titleText.split(' ').filter(word => word.length > 3) : [];
    titleWords.forEach(word => {
      if (!tags.includes(`#${word.toLowerCase()}`)) {
        tags.push(`#${word.toLowerCase()}`);
      }
    });
   
    return tags.slice(0, 3).join(' ');
  };

  // Format inclusions/exclusions for display
  const formatListItems = (items) => {
    if (!items || !items.length) return [];
    
    // If the items are in a single string separated by commas, split them
    if (items.length === 1 && items[0].includes(',')) {
      return items[0].split(',').map(item => item.trim());
    }
    
    return items;
  };

  if (loading) {
    return (
      <Container fluid style={styles.container}>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={10} xl={10}>
            <div style={styles.loadingContainer}>
              <Spinner animation="border" role="status" style={styles.spinner}>
                <span className="visually-hidden">Loading...</span>
              </Spinner>
              <h3 style={styles.loadingText}>Loading details...</h3>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }

  if (error) {
    return (
      <Container fluid style={styles.container}>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={10} xl={8}>
            <div style={styles.errorContainer}>
              <h3 style={styles.errorText}>Error loading details: {error}</h3>
              <Button 
                variant="outline-dark" 
                onClick={() => window.location.reload()}
                style={styles.retryButton}
              >
                Retry
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }

  if (!itemData) {
    return (
      <Container fluid style={styles.container}>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={10} xl={8}>
            <div style={styles.errorContainer}>
              <h3 style={styles.errorText}>Details not found</h3>
              <Button 
                variant="outline-dark" 
                onClick={() => window.history.back()}
                style={styles.retryButton}
              >
                Go Back
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }

  // Get the title/name based on item type
  const title = itemType === 'trip' ? itemData.name : itemData.title;
 
  // Get the image based on item type
  const imageUrl = itemData.primary_image?.link_url ||
                  (itemType === 'trip' ? "../src/assets/images/ab1.png" : "../src/assets/images/event1.png");
 
  // Get the contact phone
  const contactPhone = itemData.contact_phone || '919999999999';
 
   // Get the price information with discount calculation for trips
   let displayPrice;
   let originalPrice;
   let discountPercentage;
   
   if (itemType === 'trip') {
     const basePrice = itemData.starting_market_price || 'Contact for price';
     const discount = itemData.discount_starts;
     
     if (typeof basePrice === 'number' && typeof discount === 'number' && discount > 0) {
       const discountedPrice = calculateDiscountedPrice(basePrice, discount);
       displayPrice = `₹ ${discountedPrice}`;
       originalPrice = basePrice;
       discountPercentage = discount;
     } else {
       displayPrice = `₹ ${basePrice}`;
     }
   } else {
     displayPrice = `₹ ${itemData.price || 'Contact for price'}`;
   }
  
   // Get the location/address - check multiple possible fields for trips
   const locationAddress = itemType === 'trip'
     ? (itemData.meetup_point_name || itemData.location || itemData.destination || itemData.trip_location || itemData.address || 'Location not specified')
     : (itemData.address || itemData.location || itemData.venue || 'Address not specified');
  
   // Get the organizer
   const organizer = itemType === 'trip'
     ? (itemData.organized_by || 'Organizer not specified')
     : (itemData.organizer || 'Organizer not specified');
  
   // Get the description for DetailsCards
   const description = itemData.description || '';
 
   // Format inclusions and exclusions
   const inclusions = formatListItems(itemData.inclusions || []);
   const exclusions = formatListItems(itemData.exclusions || []);
 
   return (
     <>
       <Container fluid style={styles.container}>
         <Row className="justify-content-center">
           <Col xs={12} md={10} lg={10} xl={10}>
             <div style={styles.card}>
               <div style={styles.imageContainer}>
                 <img
                   src={imageUrl}
                   alt={title}
                   style={styles.image}
                   onError={(e) => {
                     e.target.src = itemType === 'trip'
                       ? "../src/assets/images/ab1.png"
                       : "../src/assets/images/event1.png";
                   }}
                 />
                 {/* {itemType === 'trip' && itemData.is_sponsored && (
                   <div style={styles.sponsoredBadge}>
                     Sponsored
                   </div>
                 )} */}
                 {itemType === 'event' && itemData.level && (
                   <div style={styles.levelBadge}>
                     {formatLevel(itemData.level)}
                   </div>
                 )}
               </div>
               <div style={styles.cardBody}>
                 {/* Header with title and button side by side */}
                 <div style={styles.cardHeader}>
                   <div style={styles.titleContainer}>
                     <h5 style={styles.title}>{title}</h5>
                     <p style={styles.tags}>
                       {generateHashtags(itemData)}
                     </p>
                   </div>
                   <Button
                     style={styles.button}
                     onClick={() => window.open(`https://wa.me/${contactPhone}?text=I'm interested in the ${title} ${itemType}`, '_blank')}
                   >
                     Book Now
                   </Button>
                 </div>
                
                 {/* Price section with discount if applicable */}
                 <div style={styles.priceSection}>
                   <h5 style={styles.price}>
                     {displayPrice} <span style={styles.priceLabel}>Onwards</span>
                    
                   </h5>
                   {/* {originalPrice && discountPercentage && (
                     <div style={styles.discountContainer}>
                       <span style={styles.originalPrice}>₹ {originalPrice} </span>
                       <Badge style={styles.discountBadge}>{discountPercentage}% OFF</Badge>
                     </div>
                   )} */}
                 </div>
 
                 {/* Main info section */}
                 <div style={styles.infoSection}>
                   <Row className="g-0" style={styles.infoRow}>
                     <Col xs={12} md={6} style={styles.infoItem}>
                       <FontAwesomeIcon icon={faCalendarAlt} style={styles.icon} />
                       <div style={styles.infoContent}>
                         <span style={styles.infoLabel}>Date</span>
                         <span style={styles.infoText}>
                           {itemType === 'trip'
                             ? (itemData.start_date ? formatDate(itemData.start_date) : 'Flexible dates')
                             : (formatDate(itemData.start_date) + (itemData.is_multiple_days ? ` - ${formatDate(itemData.end_date)}` : ''))}
                         </span>
                       </div>
                     </Col>
                    
                     <Col xs={12} md={6} style={styles.infoItem}>
                       <FontAwesomeIcon icon={faClock} style={styles.icon} />
                       <div style={styles.infoContent}>
                         <span style={styles.infoLabel}>{itemType === 'trip' ? 'Duration' : 'Time'}</span>
                         <span style={styles.infoText}>
                           {itemType === 'trip'
                             ? (itemData.duration || 'Duration not specified')
                             : (itemData.timings || 'Flexible')}
                         </span>
                       </div>
                     </Col>
                   </Row>
 
                   <Row className="g-0" style={styles.infoRow}>
                     <Col xs={12} md={6} style={styles.infoItem}>
                       <FontAwesomeIcon icon={faMapMarkerAlt} style={styles.icon} />
                       <div style={styles.infoContent}>
                         <span style={styles.infoLabel}>{itemType === 'trip' ? 'Meetup Point' : 'Location'}</span>
                         <span style={styles.infoText}>{locationAddress}</span>
                       </div>
                     </Col>
                    
                     <Col xs={12} md={6} style={styles.infoItem}>
                       <FontAwesomeIcon icon={faUser} style={styles.icon} />
                       <div style={styles.infoContent}>
                         <span style={styles.infoLabel}>Organized by</span>
                         <span style={styles.infoText}>{organizer}</span>
                       </div>
                     </Col>
                   </Row>
 
                   {/* Trip-specific details */}
                   {itemType === 'trip' && (
                     <>
                       {/* Meetup details */}
                       {itemData.meetup_time && (
                         <Row className="g-0" style={styles.infoRow}>
                           <Col xs={12} md={6} style={styles.infoItem}>
                             <FontAwesomeIcon icon={faClock} style={styles.icon} />
                             <div style={styles.infoContent}>
                               <span style={styles.infoLabel}>Meetup Time</span>
                               <span style={styles.infoText}>{formatTime(itemData.meetup_time)}</span>
                             </div>
                           </Col>
                           
                           {itemData.terraintype && (
                             <Col xs={12} md={6} style={styles.infoItem}>
                               <FontAwesomeIcon icon={faMountain} style={styles.icon} />
                               <div style={styles.infoContent}>
                                 <span style={styles.infoLabel}>Terrain</span>
                                 <span style={styles.infoText}>{itemData.terraintype}</span>
                               </div>
                             </Col>
                           )}
                         </Row>
                       )}
 
                       {/* Route information */}
                       {(itemData.start_location_name || itemData.end_location_name || itemData.total_kms) && (
                         <Row className="g-0" style={styles.infoRow}>
                           {(itemData.start_location_name && itemData.end_location_name) && (
                             <Col xs={12} md={6} style={styles.infoItem}>
                               <FontAwesomeIcon icon={faMapMarkedAlt} style={styles.icon} />
                               <div style={styles.infoContent}>
                                 <span style={styles.infoLabel}>Route</span>
                                 <span style={styles.infoText}>
                                   {itemData.start_location_name} <FontAwesomeIcon icon={faArrowRight} style={styles.routeArrow} /> {itemData.end_location_name}
                                 </span>
                               </div>
                             </Col>
                           )}
                           
                           {itemData.total_kms && (
                             <Col xs={12} md={6} style={styles.infoItem}>
                               <FontAwesomeIcon icon={faRoad} style={styles.icon} />
                               <div style={styles.infoContent}>
                                 <span style={styles.infoLabel}>Distance</span>
                                 <span style={styles.infoText}>{itemData.total_kms} km</span>
                               </div>
                             </Col>
                           )}
                         </Row>
                       )}
 
                       {/* Capacity information */}
                       {(itemData.total_seats || itemData.available_seats) && (
                         <Row className="g-0" style={styles.infoRow}>
                           <Col xs={12} style={styles.infoItem}>
                             <FontAwesomeIcon icon={faUsers} style={styles.icon} />
                             <div style={styles.infoContent}>
                               <span style={styles.infoLabel}>Capacity</span>
                               <span style={styles.infoText}>
                                 <Badge style={styles.availabilityBadge}>
                                   {itemData.available_seats || 0} seats available
                                 </Badge> 
                                 {/* out of {itemData.total_seats || 0} total seats */}
                               </span>
                             </div>
                           </Col>
                         </Row>
                       )}
                     </>
                   )}
                 </div>
               </div>
             </div>
           </Col>
         </Row>
       </Container>
       <DetailsCards 
         eventDescription={description} 
         eventAddress={locationAddress} 
         eventType={itemType}
         eventDuration={itemData.duration}
         eventInclusions={itemType === 'trip' ? inclusions : []}
         eventExclusions={itemType === 'trip' ? exclusions : []}
       />
     </>
   );
 };
 
 // Enhanced styles with improved visual hierarchy and responsiveness
 const styles = {
   container: {
     backgroundColor: '#000000',
     minHeight: '50vh',
     paddingLeft: '15px',
     paddingRight: '15px',
     paddingTop: '10px',
     paddingBottom: '10px'
   },
   card: {
     backgroundColor: '#ffffff',
     overflow: 'hidden',
     border: 'none',
     borderRadius: '0px',
     transition: 'transform 0.3s ease',
     maxWidth: '100%',
     boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
   },
   imageContainer: {
     width: '100%',
     height: '350px',
     overflow: 'hidden',
     position: 'relative'
   },
   image: {
     width: '100%',
     height: '100%',
     objectFit: 'cover',
     transition: 'transform 0.5s ease'
   },
   sponsoredBadge: {
     position: 'absolute',
     top: '15px',
     left: '15px',
     backgroundColor: 'rgba(255, 221, 0, 0.9)',
     color: '#000',
     padding: '5px 10px',
     borderRadius: '4px',
     fontSize: '12px',
     fontWeight: '600',
     textTransform: 'uppercase',
     letterSpacing: '1px'
   },
   levelBadge: {
     position: 'absolute',
     top: '15px',
     left: '15px',
     backgroundColor: 'rgba(40, 167, 69, 0.9)',
     color: 'white',
     padding: '5px 10px',
     borderRadius: '4px',
     fontSize: '12px',
     fontWeight: '600',
     textTransform: 'uppercase',
     letterSpacing: '1px'
   },
   cardBody: {
     padding: '1.8rem',
     position: 'relative'
   },
   cardHeader: {
     display: 'flex',
     justifyContent: 'space-between',
     alignItems: 'flex-start',
     marginBottom: '10px',
     flexWrap: 'wrap',
     gap: '15px'
   },
   titleContainer: {
     flex: '1 1 auto'
   },
   title: {
     fontSize: '26px',
     fontWeight: '500',
     color: '#212529',
     margin: '0 0 8px 0',
     lineHeight: '1.2'
   },
   tags: {
     color: '#6c757d',
     fontSize: '14px',
     fontWeight: '500',
     margin: 0
   },
   priceSection: {
     marginBottom: '10px',
     borderRadius: '6px',
     display: 'flex',
     justifyContent: 'space-between',
     alignItems: 'center',
     flexWrap: 'wrap',
   },
   price: {
     fontSize: '20px',
     fontWeight: '500',
     color: '#000000',
     margin: 0
   },
   priceLabel: {
     fontSize: '14px',
     fontWeight: '400',
     color: '#6c757d'
   },
   discountContainer: {
     display: 'flex',
     alignItems: 'center',
     gap: '10px'
   },
   originalPrice: {
     fontSize: '12px',
     fontWeight: '400',
     color: '#6c757d',
     textDecoration: 'line-through'
   },
   discountBadge: {
    //  backgroundColor: '#dc3545',
     color: 'white',
     padding: '5px 8px',
     borderRadius: '0px',
     fontSize: '10px',
     fontWeight: '600'
   },
   infoSection: {
     borderTop: '1px solid #e9ecef',
     paddingTop: '1px'
   },
   infoRow: {
     marginBottom: '0px',
     marginLeft: 0,
     marginRight: 0,
   },
   infoItem: {
     display: 'flex',
     alignItems: 'flex-start',
     padding: '8px 15px 8px 0',
   },
   icon: {
     marginRight: '12px',
     color: '#495057',
     width: '16px',
     fontSize: '18px',
     marginTop: '4px'
   },
   routeArrow: {
     fontSize: '12px',
     margin: '0 5px'
   },
   infoContent: {
     display: 'flex',
     flexDirection: 'column'
   },
   infoLabel: {
     fontSize: '12px',
     fontWeight: '600',
     color: '#6c757d',
     textTransform: 'uppercase',
     marginBottom: '4px'
   },
   infoText: {
     fontSize: '16px',
     fontWeight: '500',
     color: '#212529',
     lineHeight: '1.4'
   },
   availabilityBadge: {
     backgroundColor: '#28a745',
     color: 'white',
     padding: '4px 8px',
     borderRadius: '4px',
     fontSize: '12px',
     fontWeight: '600'
   },
   button: {
     backgroundColor: '#FFDD00',
     color: '#000',
     border: 'none',
     padding: '10px 20px',
     fontSize: '16px',
     fontWeight: '600',
     cursor: 'pointer',
     transition: 'all 0.3s ease',
     borderRadius: '0px',
     boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
     '&:hover': {
       backgroundColor: '#e6c700',
       transform: 'translateY(-2px)',
       boxShadow: '0 4px 8px rgba(0,0,0,0.15)'
     }
   },
   loadingContainer: {
    //  backgroundColor: '#ffffff',
     padding: '50px 20px',
     textAlign: 'center',
     borderRadius: '8px',
     boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
   },
   spinner: {
     color: '#FFDD00',
     width: '3rem',
     height: '3rem',
     marginBottom: '20px'
   },
   loadingText: {
     color: '#6c757d',
     fontSize: '20px',
     fontWeight: '500'
   },
   errorContainer: {
     backgroundColor: '#ffffff',
     padding: '50px 20px',
     textAlign: 'center',
     borderRadius: '8px',
     boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
   },
   errorText: {
    color: '#dc3545',
    fontSize: '20px',
    marginBottom: '20px'
  },
  retryButton: {
    backgroundColor: 'transparent',
    color: '#212529',
    borderColor: '#212529',
    padding: '8px 20px',
    fontSize: '16px',
    fontWeight: '500',
    borderRadius: '0px',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: '#212529',
      color: '#ffffff'
    }
  }
};

export default Details;
