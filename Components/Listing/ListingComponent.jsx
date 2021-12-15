import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../UserContext";
import { Button, Card, Grid, Modal, Typography } from "@mui/material";
import ListingForm from "./ListingForm";

const ListingComponent = ({ selectedListing }) => {
  const [listing, setListing] = useState({});
  const { user, loading } = useUser();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      let { data } = await axios.post("/api/getSingleListing", {
        id: selectedListing,
      });
      setListing(data);
    };

    fetch();
  }, []);

  if (!listing.id || loading) return <h1>Loading</h1>;

  return (
    <>
      <Grid
        container
        alignItems="center"
        direction="row"
        justifyContent="center"
      >
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6} align="center">
          <img
            src={listing.image}
            alt={listing.title}
            style={{ maxWidth: "80%" }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <h1>{listing.title}</h1>
          <h2>${listing.price}</h2>
          <br />
          <h3 style={{ color: "#A92C68" }}>{listing.school}</h3>
          <br />
          <h3>Seller:</h3>
          <p>{listing.madeBy}</p>
          <br />
          <h3>Condition:</h3>
          <p>{listing.condition}</p>
          <br />
          <h3>Details:</h3>
          <p>{listing.description}</p>
          <br />
          <div style={{ textAlign: "center" }}>
            {listing.madeBy === user.displayName ? (
              <>
                <Button
                  style={{ backgroundColor: "#A92C68" }}
                  variant="contained"
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  <Typography>EDIT POST</Typography>
                </Button>
                <Modal
                  open={open}
                  onClose={() => {
                    setOpen(false);
                  }}
                >
                  <ListingForm
                    formTitle="Edit Listing"
                    username={user.displayName}
                    apiRoute={`/api/updateListing/${listing.id}`}
                  />
                </Modal>
              </>
            ) : (
              <></>
            )}
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default ListingComponent;
