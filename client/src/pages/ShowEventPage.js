import React, { useState, useEffect } from "react";
import EventCard from "../components/EventCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorAlert from "../components/ErrorAlert";
import { useParams } from "react-router-dom";

function ShowEventPage() {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  let params = useParams();

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        let response = await fetch("/api/events/" + params.id);
        let eventData = await response.json();
        setEvent(eventData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching /api/events/" + params.id, error);
        setError(true);
      }
    }

    getData();

    return () => {
      // clean up function
    };
  }, [params.id]);

  if (error)
    return (
      <ErrorAlert details={"Event with id=" + params.id + " not found"} />
    );
  if (loading) return <LoadingSpinner />;

  return <EventCard {...event} />;
}

export default ShowEventPage;
