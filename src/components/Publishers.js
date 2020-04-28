import React, {useEffect, useContext} from 'react';
import axios from 'axios';
import { PublishersContext } from '../context/PublishersProvider';
import PublisherGroup from './PublisherGroup';

export default function Publishers() {
  const {publishers, dispatch} = useContext(PublishersContext);

  useEffect(() => {
    const fetchData = async () => {
       const publishers = await axios.get("jsondata.json");
       dispatch({ type: "LOAD_PUBLISHERS", publishers: publishers.data });
    }
    fetchData();
  }, [dispatch]);
  console.log(publishers) 
  const publishersList = publishers.map(group => {
    return (
      <PublisherGroup group={group} />
    );
  } 
  )

  return (
    <div className="publishers-wrapper">
      {publishersList}
    </div>
  );
}
