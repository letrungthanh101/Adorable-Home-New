import React, { useEffect, useState } from 'react'
import Search from '../../components/Search'
import CardProduct from '../../components/CardProducts'
import Detail from '../../components/Detail'
import { getFirestore, collection, getDocs, QuerySnapshot } from "firebase/firestore";
import { db } from '../../services/firebase-config';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Apartment from '../../components/Apartment';
import { Grid } from '@mui/material';
export default function HomePage() {
  const [apartment, setApartment] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const listApartment: any = [];
    const fetchData = async () => {
      const apartmentCollection = await collection(db, 'Apartments');
      const usersSnapshot = await getDocs(apartmentCollection);
      usersSnapshot.forEach((doc) => {
        listApartment.push({ id: doc.id, ...doc.data() });
      });
      setApartment(listApartment)
      setLoading(false)
      console.log(apartment)
    };
    fetchData();
  }, []);




  return (

    <Grid container  justifyContent='center' alignItems="center" spacing={2}>
   
      {/* {apartment.map((apartmentItem) => (
        
          <Apartment Apartment={apartmentItem} key={apartmentItem.id} />
       
      ))} */}
      
      <Detail />
    </Grid >

  )
}
